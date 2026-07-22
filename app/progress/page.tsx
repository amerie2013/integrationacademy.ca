"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";

type QuizRow = { id: string; title: string; best: number | null; attempts: number; passed: boolean; comment: string | null; lastAt: string | null };
type AsgRow = { id: string; title: string; submitted: boolean; grade: string | number | null; feedback: string | null; at: string | null };
type TopicStat = { topic: string; total: number; correct: number; percent: number };
type PracticeRow = { answered: number; correct: number; weakest: TopicStat[] };
type CourseProgress = {
  id: string;
  code: string | null;
  title: string;
  lessons: number;
  quizzes: QuizRow[];
  assignments: AsgRow[];
  practice: PracticeRow | null;
};

// A topic needs a few answers behind it before it's called weak.
const MIN_FOR_WEAK = 3;

export default function ProgressPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<CourseProgress[]>([]);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/login"); return; }
      const uid = session.user.id;
      const { data: me } = await supabase.from("profiles").select("role").eq("id", uid).single();
      if (me?.role === "teacher" || me?.role === "admin") { router.push("/teacher"); return; }

      // Enrolled courses
      const { data: enr } = await supabase
        .from("enrollments")
        .select("course_id, courses(id, code, title)")
        .eq("student_id", uid);
      const myCourses = (enr ?? []).map((r: any) => r.courses).filter(Boolean) as { id: string; code: string | null; title: string }[];
      if (!myCourses.length) { setCourses([]); setLoading(false); return; }
      const courseIds = myCourses.map((c) => c.id);

      // Class memberships → map course -> classIds (class quizzes are scoped to the student's class)
      const { data: mem } = await supabase.from("class_students").select("class_id").eq("student_id", uid);
      const memIds = (mem ?? []).map((m: any) => m.class_id);
      const courseToClasses: Record<string, string[]> = {};
      let allClassIds: string[] = [];
      if (memIds.length) {
        const { data: cls } = await supabase.from("classes").select("id, course_id").in("id", memIds);
        (cls ?? []).forEach((c: any) => {
          (courseToClasses[c.course_id] ||= []).push(c.id);
          allClassIds.push(c.id);
        });
      }

      // Lessons (published) counts
      const { data: ls } = await supabase.from("lessons").select("id, course_id").eq("published", true).in("course_id", courseIds);
      const lessonCount: Record<string, number> = {};
      (ls ?? []).forEach((l: any) => { lessonCount[l.course_id] = (lessonCount[l.course_id] ?? 0) + 1; });

      // Assignments (published-resilient)
      let asg: any[] = [];
      const ra = await supabase.from("assignments").select("id, title, course_id, published").in("course_id", courseIds).order("created_at");
      if (!ra.error) asg = (ra.data ?? []).filter((a: any) => a.published !== false);
      else asg = (await supabase.from("assignments").select("id, title, course_id").in("course_id", courseIds).order("created_at")).data ?? [];

      // Class quizzes (map to course via class)
      const classToCourse: Record<string, string> = {};
      Object.entries(courseToClasses).forEach(([cid, ids]) => ids.forEach((id) => (classToCourse[id] = cid)));
      let quizzes: any[] = [];
      if (allClassIds.length) {
        const { data } = await supabase.from("quizzes").select("id, title, class_id").in("class_id", allClassIds).eq("published", true).order("created_at");
        quizzes = data ?? [];
      }

      // Attempts + submissions
      const quizIds = quizzes.map((q) => q.id);
      const attempts: Record<string, { best: number | null; count: number; passed: boolean; comment: string | null; lastAt: string | null }> = {};
      if (quizIds.length) {
        const { data: att } = await supabase
          .from("quiz_attempts")
          .select("quiz_id, percent, passed, submitted_at, teacher_comment")
          .eq("student_id", uid)
          .in("quiz_id", quizIds)
          .not("submitted_at", "is", null);
        (att ?? []).forEach((a: any) => {
          const e = (attempts[a.quiz_id] ||= { best: null, count: 0, passed: false, comment: null, lastAt: null });
          e.count++;
          if (a.percent != null) e.best = Math.max(e.best ?? 0, a.percent);
          if (a.passed) e.passed = true;
          if (a.teacher_comment) e.comment = a.teacher_comment;
          if (a.submitted_at && (!e.lastAt || a.submitted_at > e.lastAt)) e.lastAt = a.submitted_at;
        });
      }
      const asgIds = asg.map((a) => a.id);
      const subs: Record<string, { grade: any; feedback: string | null; at: string | null }> = {};
      if (asgIds.length) {
        const { data: sb } = await supabase
          .from("submissions")
          .select("assignment_id, grade, feedback, submitted_at")
          .eq("student_id", uid)
          .in("assignment_id", asgIds);
        (sb ?? []).forEach((s: any) => { subs[s.assignment_id] = { grade: s.grade, feedback: s.feedback, at: s.submitted_at }; });
      }

      // Self-serve practice history. Paged: Supabase caps a request at 1000 rows
      // and a keen student passes that quickly.
      const practiceRows: any[] = [];
      for (let from = 0; from < 20000; from += 1000) {
        const { data, error } = await supabase
          .from("practice_answers")
          .select("course_id, topic, correct")
          .eq("student_id", uid)
          .in("course_id", courseIds)
          .range(from, from + 999);
        if (error) break; // table not migrated yet — practice simply doesn't show
        practiceRows.push(...(data ?? []));
        if (data.length < 1000) break;
      }
      const practiceByCourse: Record<string, PracticeRow> = {};
      const topicAgg: Record<string, Map<string, { total: number; correct: number }>> = {};
      for (const r of practiceRows) {
        const p = (practiceByCourse[r.course_id] ||= { answered: 0, correct: 0, weakest: [] });
        p.answered++; if (r.correct) p.correct++;
        const m = (topicAgg[r.course_id] ||= new Map());
        const e = m.get(r.topic || "Other") ?? { total: 0, correct: 0 };
        e.total++; if (r.correct) e.correct++;
        m.set(r.topic || "Other", e);
      }
      for (const [cid, m] of Object.entries(topicAgg)) {
        practiceByCourse[cid].weakest = [...m.entries()]
          .map(([topic, v]) => ({ topic, ...v, percent: Math.round((v.correct / v.total) * 100) }))
          .filter((t) => t.total >= MIN_FOR_WEAK)
          .sort((a, b) => a.percent - b.percent)
          .slice(0, 3);
      }

      const out: CourseProgress[] = myCourses.map((c) => ({
        practice: practiceByCourse[c.id] ?? null,
        id: c.id,
        code: c.code,
        title: c.title,
        lessons: lessonCount[c.id] ?? 0,
        quizzes: quizzes
          .filter((q) => classToCourse[q.class_id] === c.id)
          .map((q) => {
            const a = attempts[q.id];
            return { id: q.id, title: q.title, best: a?.best ?? null, attempts: a?.count ?? 0, passed: a?.passed ?? false, comment: a?.comment ?? null, lastAt: a?.lastAt ?? null };
          }),
        assignments: asg
          .filter((a) => a.course_id === c.id)
          .map((a) => {
            const s = subs[a.id];
            return { id: a.id, title: a.title, submitted: !!s, grade: s?.grade ?? null, feedback: s?.feedback ?? null, at: s?.at ?? null };
          }),
      }));
      setCourses(out);
      setLoading(false);
    })();
  }, [router]);

  if (loading) {
    return (<main style={{ minHeight: "100vh" }}><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading your progress…</div></main>);
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 28px" }}>
        <Link href="/dashboard" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Dashboard</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 32, fontWeight: 700, margin: "12px 0 6px" }}>My progress</h1>
        <p style={{ color: "#64748b", margin: "0 0 28px" }}>Your quiz scores, assignment grades, and teacher feedback across all your courses.</p>

        {courses.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24 }}>
            You're not enrolled in any courses yet. <Link href="/courses" style={{ color: "#1b7a44", fontWeight: 700 }}>Browse courses →</Link>
          </div>
        ) : courses.map((c) => {
          const quizzesPassed = c.quizzes.filter((q) => q.passed).length;
          const quizzesAttempted = c.quizzes.filter((q) => q.attempts > 0).length;
          const asgGraded = c.assignments.filter((a) => a.grade != null).length;
          const asgSubmitted = c.assignments.filter((a) => a.submitted).length;
          return (
            <section key={c.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22, marginBottom: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <div>
                  {c.code && <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#1b7a44", fontWeight: 700, fontSize: 13 }}>{c.code}</div>}
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: "2px 0 0" }}>{c.title}</h2>
                </div>
                <Link href={`/courses/${c.id}`} style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Open course →</Link>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "14px 0 6px" }}>
                <Stat label="Lessons" value={`${c.lessons}`} />
                <Stat label="Quizzes attempted" value={`${quizzesAttempted}/${c.quizzes.length}`} />
                <Stat label="Quizzes passed" value={`${quizzesPassed}/${c.quizzes.length}`} tone="green" />
                <Stat label="Assignments submitted" value={`${asgSubmitted}/${c.assignments.length}`} />
                <Stat label="Assignments graded" value={`${asgGraded}/${c.assignments.length}`} tone="green" />
                {c.practice && <Stat label="Practice questions" value={`${c.practice.answered}`} />}
                {c.practice && <Stat label="Practice accuracy" value={`${Math.round((c.practice.correct / c.practice.answered) * 100)}%`} tone="green" />}
              </div>

              {/* Self-serve practice — the only progress an individual student
                  (no class, no assigned quizzes) would otherwise ever see. */}
              {c.practice && c.practice.weakest.length > 0 && (
                <div style={{ marginTop: 14 }}>
                  <h3 style={subHead}>Practice — where you&rsquo;re losing marks</h3>
                  {c.practice.weakest.map((t) => (
                    <div key={t.topic} style={rowBox}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                        <span style={{ fontWeight: 700, color: "#0f172a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.topic}</span>
                        <span style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                          <span style={pill(t.percent >= 80 ? "#065f46" : t.percent >= 60 ? "#854d0e" : "#b91c1c", t.percent >= 80 ? "#ecfdf5" : t.percent >= 60 ? "#fefce8" : "#fef2f2")}>
                            {t.correct}/{t.total} · {t.percent}%
                          </span>
                          <Link href={`/practice?course=${c.id}&topic=${encodeURIComponent(t.topic)}`} style={{ color: "#1b7a44", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Practise →</Link>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {c.quizzes.length > 0 && (
                <div style={{ marginTop: 14 }}>
                  <h3 style={subHead}>Quizzes</h3>
                  {c.quizzes.map((q) => (
                    <div key={q.id} style={rowBox}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                        <Link href={`/quizzes/${q.id}`} style={{ fontWeight: 700, color: "#0f172a", textDecoration: "none" }}>{q.title}</Link>
                        <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {q.attempts === 0 ? (
                            <span style={pill("#64748b", "#f1f5f9")}>Not started</span>
                          ) : (
                            <>
                              {q.best != null && <span style={pill("#0d5c30", "#e7f6ec")}>Best {q.best}%</span>}
                              {q.passed && <span style={pill("#065f46", "#ecfdf5")}>Passed ✓</span>}
                              <span style={{ color: "#94a3b8", fontSize: 12 }}>{q.attempts} attempt{q.attempts !== 1 ? "s" : ""}</span>
                            </>
                          )}
                        </span>
                      </div>
                      {q.comment && <div style={feedbackBox}>💬 <strong>Teacher:</strong> {q.comment}</div>}
                    </div>
                  ))}
                </div>
              )}

              {c.assignments.length > 0 && (
                <div style={{ marginTop: 14 }}>
                  <h3 style={subHead}>Assignments</h3>
                  {c.assignments.map((a) => (
                    <div key={a.id} style={rowBox}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                        <Link href={`/assignments/${a.id}`} style={{ fontWeight: 700, color: "#0f172a", textDecoration: "none" }}>{a.title}</Link>
                        <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {a.grade != null ? (
                            <span style={pill("#065f46", "#ecfdf5")}>Graded: {String(a.grade)}</span>
                          ) : a.submitted ? (
                            <span style={pill("#9a5b00", "#fff7ed")}>Submitted — awaiting grade</span>
                          ) : (
                            <span style={pill("#64748b", "#f1f5f9")}>Not submitted</span>
                          )}
                        </span>
                      </div>
                      {a.feedback && <div style={feedbackBox}>💬 <strong>Feedback:</strong> {a.feedback}</div>}
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "green" }) {
  return (
    <div style={{ background: tone === "green" ? "#ecfdf5" : "#f8fafc", border: "1px solid " + (tone === "green" ? "#a7f3d0" : "#e2e8f0"), borderRadius: 12, padding: "8px 14px", minWidth: 110 }}>
      <div style={{ fontSize: 18, fontWeight: 800, color: tone === "green" ? "#065f46" : "#0f172a" }}>{value}</div>
      <div style={{ fontSize: 12, color: "#64748b" }}>{label}</div>
    </div>
  );
}

const subHead: React.CSSProperties = { fontSize: 13, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" };
const rowBox: React.CSSProperties = { padding: "10px 0", borderTop: "1px solid #f1f5f9" };
const feedbackBox: React.CSSProperties = { marginTop: 8, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 12px", fontSize: 14, color: "#334155" };
function pill(color: string, bg: string): React.CSSProperties {
  return { fontSize: 12, fontWeight: 700, color, background: bg, padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" };
}
