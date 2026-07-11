"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";

type Course = { id: string; code: string | null; title: string; level: string | null; published: boolean };
type Lesson = { id: string; title: string; position: number; published: boolean };
type Quiz = { id: string; title: string; published: boolean };
type Assignment = { id: string; title: string; due_date: string | null; published?: boolean };
type Worksheet = { id: string; code: string; title: string; position: number; published: boolean };

export default function CourseHubPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [asg, setAsg] = useState({ title: "", due: "" });
  const [assignPub, setAssignPub] = useState(false);
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [wsSupported, setWsSupported] = useState(true);

  async function refresh() {
    const [{ data: ls }, { data: qs }] = await Promise.all([
      supabase.from("lessons").select("id, title, position, published").eq("course_id", courseId).order("position"),
      supabase.from("quizzes").select("id, title, published").eq("course_id", courseId).order("created_at"),
    ]);
    setLessons((ls ?? []) as Lesson[]);
    setQuizzes((qs ?? []) as Quiz[]);
    // assignments — resilient to the published column not existing yet
    const r1 = await supabase.from("assignments").select("id, title, due_date, published").eq("course_id", courseId).order("created_at");
    if (!r1.error) {
      setAssignPub(true);
      setAssignments((r1.data ?? []) as Assignment[]);
    } else {
      const r2 = await supabase.from("assignments").select("id, title, due_date").eq("course_id", courseId).order("created_at");
      setAssignments((r2.data ?? []) as Assignment[]);
    }
    // worksheets — resilient to the table not existing yet
    const rw = await supabase.from("worksheets").select("id, code, title, position, published").eq("course_id", courseId).order("position");
    if (!rw.error) { setWsSupported(true); setWorksheets((rw.data ?? []) as Worksheet[]); } else setWsSupported(false);
  }

  async function addWorksheet() {
    const { data } = await supabase.from("worksheets").insert({ course_id: courseId, code: "NEW", title: "Untitled worksheet", position: worksheets.length }).select("id").single();
    if (data) router.push(`/teacher/worksheets/${data.id}`);
  }
  async function setWorksheetPublished(id: string, val: boolean) {
    await supabase.from("worksheets").update({ published: val }).eq("id", id);
    setWorksheets((ws) => ws.map((w) => (w.id === id ? { ...w, published: val } : w)));
  }

  async function setAssignmentPublished(id: string, val: boolean) {
    await supabase.from("assignments").update({ published: val }).eq("id", id);
    setAssignments((a) => a.map((x) => (x.id === id ? { ...x, published: val } : x)));
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUserId(session.user.id);
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      const { data: c } = await supabase
        .from("courses")
        .select("id, code, title, level, published, teacher_id")
        .eq("id", courseId)
        .single();
      if (!c) return router.push("/teacher");
      setCourse(c as Course);
      await refresh();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  async function addLesson() {
    const { data } = await supabase
      .from("lessons")
      .insert({ course_id: courseId, title: "Untitled lesson", position: lessons.length, blocks: [] })
      .select("id")
      .single();
    if (data) router.push(`/teacher/lessons/${data.id}`);
  }

  async function addQuiz() {
    const { data } = await supabase
      .from("quizzes")
      .insert({ course_id: courseId, title: "Untitled quiz" })
      .select("id")
      .single();
    if (data) router.push(`/teacher/quizzes/${data.id}`);
  }

  async function addAssignment() {
    if (!asg.title) return;
    await supabase.from("assignments").insert({
      course_id: courseId,
      title: asg.title,
      due_date: asg.due ? new Date(asg.due).toISOString() : null,
    });
    setAsg({ title: "", due: "" });
    refresh();
  }

  async function togglePublish() {
    if (!course) return;
    await supabase.from("courses").update({ published: !course.published }).eq("id", course.id);
    setCourse({ ...course, published: !course.published });
  }

  async function setLessonPublished(id: string, val: boolean) {
    await supabase.from("lessons").update({ published: val }).eq("id", id);
    setLessons((ls) => ls.map((l) => (l.id === id ? { ...l, published: val } : l)));
  }
  async function setQuizPublished(id: string, val: boolean) {
    await supabase.from("quizzes").update({ published: val }).eq("id", id);
    setQuizzes((qs) => qs.map((q) => (q.id === id ? { ...q, published: val } : q)));
  }

  if (loading) {
    return (
      <main>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>Loading…</div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 28px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
          ← All courses
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", margin: "12px 0 28px" }}>
          <div>
            {course?.code && (
              <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>{course.code}</div>
            )}
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "4px 0 0" }}>{course?.title}</h1>
          </div>
          <button
            onClick={togglePublish}
            style={{
              background: course?.published ? "#ecfdf5" : "#0f172a",
              color: course?.published ? "#065f46" : "#fff",
              border: course?.published ? "1px solid #a7f3d0" : "none",
              borderRadius: 9,
              padding: "9px 16px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {course?.published ? "● Published" : "Publish course"}
          </button>
        </div>

        <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 22px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 14px" }}>
          Tap a <strong>Published / Draft</strong> badge to toggle it (drafts are hidden from everyone). Showing/hiding content <em>per class</em> is the teacher's job on their <strong>Manage class</strong> page.
        </p>

        {/* ADD CONTENT */}
        <Section title="Add content" action={
          <span style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <AddBtn onClick={addLesson} label="+ Lesson" />
            {wsSupported && <AddBtn onClick={addWorksheet} label="+ Worksheet" />}
            <AddBtn onClick={addQuiz} label="+ Quiz" />
          </span>
        }>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              placeholder="New assignment title (e.g. Assignment 1.1 — …)"
              value={asg.title}
              onChange={(e) => setAsg({ ...asg, title: e.target.value })}
              style={{ flex: 1, minWidth: 200, padding: "10px 13px", borderRadius: 9, border: "1px solid #cbd5e1", fontFamily: "inherit", fontSize: 14 }}
            />
            <input
              type="date"
              value={asg.due}
              onChange={(e) => setAsg({ ...asg, due: e.target.value })}
              style={{ padding: "10px 13px", borderRadius: 9, border: "1px solid #cbd5e1", fontFamily: "inherit", fontSize: 14 }}
            />
            <AddBtn onClick={addAssignment} label="+ Assignment" />
          </div>
        </Section>

        {/* COURSE CONTENT — auto-ordered by subject: 1.1 lesson, 1.1 worksheet, 1.1 assignment, 1.2 … */}
        <Section title="Course content">
          {!wsSupported && (
            <p style={{ color: "#94a3b8", fontSize: 13, margin: "0 0 8px" }}>
              (Worksheets need the <code>2026-06-17_worksheets.sql</code> migration to appear here.)
            </p>
          )}
          {(() => {
            const rank = { lesson: 0, worksheet: 1, assignment: 2, quiz: 3 } as const;
            type CItem = { key: string; id: string; kind: keyof typeof rank; title: string; due?: string | null; published: boolean; togglable: boolean; toggle: () => void; href: string };
            const items: CItem[] = [
              ...lessons.map((l) => ({ key: "l" + l.id, id: l.id, kind: "lesson" as const, title: l.title, published: l.published, togglable: true, toggle: () => setLessonPublished(l.id, !l.published), href: `/teacher/lessons/${l.id}` })),
              ...worksheets.map((w) => ({ key: "w" + w.id, id: w.id, kind: "worksheet" as const, title: `${w.code} ${w.title}`, published: w.published, togglable: true, toggle: () => setWorksheetPublished(w.id, !w.published), href: `/teacher/worksheets/${w.id}` })),
              ...assignments.map((a) => ({ key: "a" + a.id, id: a.id, kind: "assignment" as const, title: a.title, due: a.due_date, published: a.published !== false, togglable: assignPub, toggle: () => setAssignmentPublished(a.id, a.published === false), href: `/teacher/assignments/${a.id}` })),
              ...quizzes.map((q) => ({ key: "q" + q.id, id: q.id, kind: "quiz" as const, title: q.title, published: q.published, togglable: true, toggle: () => setQuizPublished(q.id, !q.published), href: `/teacher/quizzes/${q.id}` })),
            ];
            items.sort((x, y) => codeKey(x.title) - codeKey(y.title) || rank[x.kind] - rank[y.kind] || x.title.localeCompare(y.title));
            if (items.length === 0) return <Empty>No content yet — use “Add content” above.</Empty>;
            return items.map((it) => (
              <Row key={it.key}>
                <span style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <TypeChip kind={it.kind} />
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.title}</span>
                </span>
                <span style={{ display: "flex", gap: 12, alignItems: "center", flexShrink: 0 }}>
                  {it.due !== undefined && <span style={{ color: "#64748b", fontSize: 13 }}>{it.due ? new Date(it.due).toLocaleDateString() : "No due date"}</span>}
                  {it.togglable && <PublishToggle on={it.published} onClick={it.toggle} />}
                  {it.kind === "quiz" && <Link href={`/teacher/quizzes/${it.id}/results`} style={{ ...editLink, color: "#0d9488" }}>Results</Link>}
                  <Link href={it.href} style={editLink}>Edit →</Link>
                </span>
              </Row>
            ));
          })()}
        </Section>
      </div>
    </main>
  );
}

function Section({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{title}</h2>
        {action}
      </div>
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 16 }}>{children}</div>
    </section>
  );
}

function Row({ children, style, ...rest }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 6px", borderBottom: "1px solid #f1f5f9", ...style }}>{children}</div>;
}
// Sort key from the subject code in a title, e.g. "1.1 …" or "Assignment 1.1 — …" -> 1001.
// Items without a subject code (e.g. quizzes) sort to the end.
function codeKey(title: string): number {
  const m = title.match(/(\d+)\.(\d+)/);
  return m ? Number(m[1]) * 1000 + Number(m[2]) : 1e9;
}
function TypeChip({ kind }: { kind: "lesson" | "worksheet" | "assignment" | "quiz" }) {
  const map: Record<string, [string, string, string]> = {
    lesson: ["Lesson", "#1b7a44", "#ecfdf5"],
    worksheet: ["Worksheet", "#0d5c30", "#e7f6ee"],
    assignment: ["Assignment", "#9a3412", "#fff7ed"],
    quiz: ["Quiz", "#0d9488", "#ecfeff"],
  };
  const [label, color, bg] = map[kind];
  return <span style={{ fontSize: 11, fontWeight: 700, color, background: bg, border: `1px solid ${color}33`, padding: "2px 8px", borderRadius: 999, minWidth: 82, textAlign: "center" }}>{label}</span>;
}
function Empty({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "#94a3b8", padding: "8px 6px" }}>{children}</div>;
}
function AddBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "9px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
      {label}
    </button>
  );
}
function PublishToggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={on ? "Published — click to make it a draft" : "Draft — click to publish"}
      style={{ fontSize: 12, fontWeight: 700, cursor: "pointer", border: "1px solid", color: on ? "#065f46" : "#92400e", background: on ? "#ecfdf5" : "#fffbeb", borderColor: on ? "#a7f3d0" : "#fde68a", padding: "4px 11px", borderRadius: 999 }}
    >
      {on ? "● Published" : "Draft — Publish"}
    </button>
  );
}
const editLink: React.CSSProperties = { color: "#1b7a44", fontWeight: 700, fontSize: 14, textDecoration: "none" };
