"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { SiteHeader } from "@/components/SiteHeader";

type Attempt = {
  id: string; quiz_id: string; attempt_no: number; score: number | null; max_score: number | null;
  percent: number | null; passed: boolean | null; needs_grading: boolean;
  submitted_at: string | null; time_spent_seconds: number | null;
};
type SubRow = {
  assignment_id: string; grade: number | null; feedback: string | null; submitted_at: string | null;
  file_url?: string | null; file_name?: string | null;
};

export default function StudentActivityPage() {
  const router = useRouter();
  const classId = useParams().id as string;
  const studentId = useParams().studentId as string;

  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [student, setStudent] = useState<{ name: string; email: string | null } | null>(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [quizTitles, setQuizTitles] = useState<Record<string, string>>({});
  const [asgTitles, setAsgTitles] = useState<Record<string, string>>({});
  const [asgOrder, setAsgOrder] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [subs, setSubs] = useState<Record<string, SubRow>>({});
  const [lessons, setLessons] = useState<{ id: string; title: string }[]>([]);
  const [progress, setProgress] = useState<Record<string, { view_count: number; last_viewed_at: string | null; completed: boolean }>>({});
  const [progressAvailable, setProgressAvailable] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: cls } = await supabase.from("classes").select("teacher_id, course_id").eq("id", classId).single();
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (!cls || (cls.teacher_id !== session.user.id && me?.role !== "admin")) { setDenied(true); setLoading(false); return; }

      // The student must be in THIS class.
      const { data: member } = await supabase.from("class_students").select("student_id").eq("class_id", classId).eq("student_id", studentId).maybeSingle();
      if (!member && me?.role !== "admin") { setDenied(true); setLoading(false); return; }

      const [{ data: prof }, { data: course }, { data: quizzes }, { data: asgs }] = await Promise.all([
        supabase.from("profiles").select("full_name, email").eq("id", studentId).single(),
        supabase.from("courses").select("title, code").eq("id", cls.course_id).single(),
        supabase.from("quizzes").select("id, title").eq("class_id", classId),
        supabase.from("assignments").select("id, title").eq("course_id", cls.course_id).order("created_at"),
      ]);
      setStudent({ name: prof?.full_name || "Student", email: prof?.email ?? null });
      setCourseTitle(course ? (course.code ? `${course.code} — ${course.title}` : course.title) : "");
      setQuizTitles(Object.fromEntries((quizzes ?? []).map((q: any) => [q.id, q.title])));
      setAsgTitles(Object.fromEntries((asgs ?? []).map((a: any) => [a.id, a.title])));
      setAsgOrder((asgs ?? []).map((a: any) => a.id));

      const quizIds = (quizzes ?? []).map((q: any) => q.id);
      const asgIds = (asgs ?? []).map((a: any) => a.id);

      if (quizIds.length) {
        const { data: at } = await supabase.from("quiz_attempts")
          .select("id, quiz_id, attempt_no, score, max_score, percent, passed, needs_grading, submitted_at, time_spent_seconds")
          .eq("student_id", studentId).in("quiz_id", quizIds).not("submitted_at", "is", null)
          .order("submitted_at", { ascending: false });
        setAttempts((at ?? []) as Attempt[]);
      }
      if (asgIds.length) {
        const cols = "assignment_id, grade, feedback, submitted_at, file_url, file_name";
        let rows: { data: any[] | null; error: any } = await supabase.from("submissions").select(cols).eq("student_id", studentId).in("assignment_id", asgIds);
        if (rows.error) rows = await supabase.from("submissions").select("assignment_id, grade, feedback, submitted_at").eq("student_id", studentId).in("assignment_id", asgIds);
        const map: Record<string, SubRow> = {};
        (rows.data ?? []).forEach((r: any) => { map[r.assignment_id] = r; });
        setSubs(map);
      }

      // Lesson activity (best-effort — needs the lesson_progress migration).
      const { data: lz } = await supabase.from("lessons").select("id, title").eq("course_id", cls.course_id).eq("published", true).order("position");
      setLessons((lz ?? []).map((l: any) => ({ id: l.id, title: l.title })));
      const prog = await supabase.from("lesson_progress").select("lesson_id, view_count, last_viewed_at, completed").eq("student_id", studentId).eq("course_id", cls.course_id);
      if (prog.error) setProgressAvailable(false);
      else {
        const pm: Record<string, { view_count: number; last_viewed_at: string | null; completed: boolean }> = {};
        (prog.data ?? []).forEach((r: any) => { pm[r.lesson_id] = { view_count: r.view_count, last_viewed_at: r.last_viewed_at, completed: r.completed }; });
        setProgress(pm);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId, studentId]);

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>You don’t have access to this student’s activity.</div></main>);

  // ── summary stats ──
  const gradedAttempts = attempts.filter((a) => a.percent != null);
  const avg = gradedAttempts.length ? Math.round((gradedAttempts.reduce((s, a) => s + (a.percent ?? 0), 0) / gradedAttempts.length) * 10) / 10 : null;
  const distinctQuizzes = new Set(attempts.map((a) => a.quiz_id)).size;
  const passedCount = attempts.filter((a) => a.passed).length;
  const totalMins = Math.round(attempts.reduce((s, a) => s + (a.time_spent_seconds ?? 0), 0) / 60);
  const submittedCount = asgOrder.filter((id) => subs[id]?.submitted_at).length;
  const gradedCount = asgOrder.filter((id) => subs[id]?.grade != null).length;
  const lessonsViewed = lessons.filter((l) => progress[l.id]).length;
  const lessonsCompleted = lessons.filter((l) => progress[l.id]?.completed).length;
  const lastActive = [
    ...attempts.map((a) => a.submitted_at),
    ...Object.values(subs).map((s) => s.submitted_at),
  ].filter(Boolean).sort().slice(-1)[0] as string | undefined;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "32px 28px" }}>
        <Link href={`/classes`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← My classes</Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", margin: "12px 0 4px" }}>
          <div>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: 0 }}>{student?.name}</h1>
            <div style={{ color: "#64748b", fontSize: 14, marginTop: 2 }}>{student?.email ?? "—"} · {courseTitle}</div>
          </div>
          <Link href={`/classes/${classId}`} style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14, textDecoration: "none", border: "1px solid #bfe3cd", borderRadius: 9, padding: "8px 14px" }}>Class content →</Link>
        </div>
        {lastActive && <p style={{ color: "#94a3b8", fontSize: 13, margin: "6px 0 0" }}>Last active {new Date(lastActive).toLocaleString()}</p>}

        {/* Summary tiles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, margin: "20px 0 30px" }}>
          <Tile label="Quizzes attempted" value={`${distinctQuizzes}`} sub={`${attempts.length} attempt${attempts.length !== 1 ? "s" : ""}`} />
          <Tile label="Average quiz score" value={avg != null ? `${avg}%` : "—"} sub={`${passedCount} passed`} />
          <Tile label="Time on quizzes" value={`${totalMins}`} sub="minutes" />
          <Tile label="Assignments" value={`${submittedCount}`} sub={`submitted · ${gradedCount} graded`} />
          <Tile label="Lessons" value={progressAvailable ? `${lessonsCompleted}/${lessons.length}` : "—"} sub={progressAvailable ? `completed · ${lessonsViewed} opened` : "tracking off"} />
        </div>

        {/* Lessons */}
        <h2 style={sectionH}>Lessons</h2>
        {!progressAvailable ? (
          <Empty>Lesson activity tracking isn’t enabled yet — run the <code>2026-07-06_lesson_progress.sql</code> migration.</Empty>
        ) : lessons.length === 0 ? (
          <Empty>No lessons in this course.</Empty>
        ) : (
          <div style={card}>
            <div style={{ ...gridLesson, ...headRow }}>
              <span>Lesson</span><span>Status</span><span>Views</span><span>Last opened</span>
            </div>
            {lessons.map((l) => {
              const p = progress[l.id];
              return (
                <div key={l.id} style={{ ...gridLesson, padding: "12px 18px", borderTop: "1px solid #f1f5f9", alignItems: "center", fontSize: 14 }}>
                  <span style={{ fontWeight: 600 }}>{l.title}</span>
                  <span>{p?.completed ? <Pill color="#065f46" bg="#ecfdf5">Completed</Pill> : p ? <Pill color="#1e3a8a" bg="#eff6ff">Opened</Pill> : <Pill color="#64748b" bg="#f1f5f9">Not opened</Pill>}</span>
                  <span style={{ color: "#64748b" }}>{p?.view_count ?? 0}</span>
                  <span style={{ color: "#64748b", fontSize: 13 }}>{p?.last_viewed_at ? new Date(p.last_viewed_at).toLocaleDateString() : "—"}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Quizzes */}
        <h2 style={{ ...sectionH, marginTop: 30 }}>Quiz attempts</h2>
        {attempts.length === 0 ? (
          <Empty>No quiz attempts yet.</Empty>
        ) : (
          <div style={card}>
            <div style={{ ...gridQuiz, ...headRow }}>
              <span>Quiz</span><span>Attempt</span><span>Score</span><span>%</span><span>Status</span><span>Time</span><span>When</span>
            </div>
            {attempts.map((a) => (
              <div key={a.id} style={{ ...gridQuiz, padding: "12px 18px", borderTop: "1px solid #f1f5f9", alignItems: "center", fontSize: 14 }}>
                <span style={{ fontWeight: 600 }}>{quizTitles[a.quiz_id] ?? "Quiz"}</span>
                <span>#{a.attempt_no}</span>
                <span>{a.score ?? 0}/{a.max_score ?? 0}</span>
                <span style={{ fontWeight: 700 }}>{a.percent ?? 0}%</span>
                <span>
                  {a.needs_grading ? <Pill color="#92400e" bg="#fffbeb">Needs grading</Pill>
                    : a.passed == null ? <Pill color="#334155" bg="#f1f5f9">Graded</Pill>
                    : a.passed ? <Pill color="#065f46" bg="#ecfdf5">Passed</Pill>
                    : <Pill color="#b91c1c" bg="#fef2f2">Did not pass</Pill>}
                </span>
                <span style={{ color: "#64748b" }}>{a.time_spent_seconds != null ? `${Math.round(a.time_spent_seconds / 60)}m` : "—"}</span>
                <span style={{ color: "#64748b", fontSize: 13 }}>{a.submitted_at ? new Date(a.submitted_at).toLocaleDateString() : "—"}</span>
              </div>
            ))}
          </div>
        )}

        {/* Assignments */}
        <h2 style={{ ...sectionH, marginTop: 30 }}>Assignments</h2>
        {asgOrder.length === 0 ? (
          <Empty>No assignments in this course.</Empty>
        ) : (
          <div style={card}>
            <div style={{ ...gridAsg, ...headRow }}>
              <span>Assignment</span><span>Status</span><span>Grade</span><span>Submitted</span>
            </div>
            {asgOrder.map((id) => {
              const s = subs[id];
              const submitted = !!s?.submitted_at;
              const graded = s?.grade != null;
              return (
                <div key={id} style={{ ...gridAsg, padding: "12px 18px", borderTop: "1px solid #f1f5f9", alignItems: "center", fontSize: 14 }}>
                  <span style={{ fontWeight: 600 }}>{asgTitles[id] ?? "Assignment"}</span>
                  <span>
                    {graded ? <Pill color="#065f46" bg="#ecfdf5">Graded</Pill>
                      : submitted ? <Pill color="#1e3a8a" bg="#eff6ff">Submitted</Pill>
                      : <Pill color="#64748b" bg="#f1f5f9">Not submitted</Pill>}
                  </span>
                  <span style={{ fontWeight: 700 }}>{graded ? s!.grade : "—"}</span>
                  <span style={{ color: "#64748b", fontSize: 13 }}>{s?.submitted_at ? new Date(s.submitted_at).toLocaleDateString() : "—"}</span>
                </div>
              );
            })}
          </div>
        )}
        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 14 }}>
          To grade or view full answers, open the quiz’s <strong>Results</strong> or the assignment’s <strong>Submissions</strong> from the <Link href={`/classes/${classId}`} style={{ color: "#1b7a44" }}>class page</Link>.
        </p>
      </div>
    </main>
  );
}

function Tile({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 18px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", margin: "4px 0 2px", fontFamily: "Fraunces, serif" }}>{value}</div>
      <div style={{ fontSize: 13, color: "#94a3b8" }}>{sub}</div>
    </div>
  );
}
function Pill({ children, color, bg }: { children: React.ReactNode; color: string; bg: string }) {
  return <span style={{ fontSize: 12, fontWeight: 700, color, background: bg, padding: "3px 9px", borderRadius: 999 }}>{children}</span>;
}
function Empty({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22, color: "#94a3b8" }}>{children}</div>;
}

const card: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" };
const sectionH: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 700, margin: "0 0 12px" };
const gridQuiz: React.CSSProperties = { display: "grid", gridTemplateColumns: "1.6fr 0.7fr 0.8fr 0.6fr 1.1fr 0.6fr 0.9fr" };
const gridAsg: React.CSSProperties = { display: "grid", gridTemplateColumns: "2.2fr 1fr 0.7fr 1fr" };
const gridLesson: React.CSSProperties = { display: "grid", gridTemplateColumns: "2.4fr 1fr 0.6fr 1fr" };
const headRow: React.CSSProperties = { padding: "11px 18px", background: "#f8fafc", fontSize: 12, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" };
