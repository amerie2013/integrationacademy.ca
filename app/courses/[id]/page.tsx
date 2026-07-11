"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { levelLabel } from "../../../lib/theme";
import { getSubscriptionInfo } from "../../../lib/subscription";

type Course = { id: string; code: string | null; title: string; description: string | null; level: string | null };
type Lesson = { id: string; title: string; position: number };
type Quiz = { id: string; title: string; due_date: string | null };
type Assignment = { id: string; title: string; due_date: string | null };
type Announcement = { id: string; body: string; created_at: string };
type WorksheetRow = { id: string; code: string; title: string };

export default function StudentCoursePage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [enrolled, setEnrolled] = useState(false);
  const [access, setAccess] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [bestScores, setBestScores] = useState<Record<string, number>>({});
  const [worksheets, setWorksheets] = useState<WorksheetRow[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [busy, setBusy] = useState(false);
  const [buying, setBuying] = useState<string | null>(null);

  async function loadContent(uid: string | null) {
    // Students only see quizzes their teacher built for their class — not the admin's source quizzes.
    let classIds: string[] = [];
    if (uid) {
      const { data: mem } = await supabase.from("class_students").select("class_id").eq("student_id", uid);
      const ids = (mem ?? []).map((m: any) => m.class_id);
      if (ids.length) {
        const { data: cls } = await supabase.from("classes").select("id").eq("course_id", courseId).in("id", ids);
        classIds = (cls ?? []).map((c: any) => c.id);
      }
    }
    const { data: ls } = await supabase.from("lessons").select("id, title, position").eq("course_id", courseId).eq("published", true).order("position");
    // assignments — only published ones (resilient if the column doesn't exist yet)
    let as: any[] = [];
    const ra = await supabase.from("assignments").select("id, title, due_date, published").eq("course_id", courseId).order("created_at");
    if (!ra.error) as = (ra.data ?? []).filter((a: any) => a.published !== false);
    else as = (await supabase.from("assignments").select("id, title, due_date").eq("course_id", courseId).order("created_at")).data ?? [];
    let qs: any[] = [];
    if (classIds.length) {
      const { data } = await supabase.from("quizzes").select("id, title, due_date").in("class_id", classIds).eq("published", true).order("created_at");
      qs = data ?? [];
      // class announcements (best-effort — needs the announcements migration)
      const { data: anns } = await supabase.from("announcements").select("id, body, created_at").in("class_id", classIds).order("created_at", { ascending: false });
      setAnnouncements((anns ?? []) as Announcement[]);
    }
    // Hide items the teacher locked for the student's class.
    const lockedLessons = new Set<string>(), lockedAssignments = new Set<string>(), lockedWorksheets = new Set<string>();
    if (classIds.length) {
      const { data: lk } = await supabase.from("class_locks").select("item_type, item_id").in("class_id", classIds);
      (lk ?? []).forEach((r: any) => {
        if (r.item_type === "lesson") lockedLessons.add(r.item_id);
        else if (r.item_type === "assignment") lockedAssignments.add(r.item_id);
        else if (r.item_type === "worksheet") lockedWorksheets.add(r.item_id);
      });
    }
    setLessons(((ls ?? []) as Lesson[]).filter((l) => !lockedLessons.has(l.id)));
    setQuizzes(qs as Quiz[]);
    setAssignments(((as ?? []) as Assignment[]).filter((a) => !lockedAssignments.has(a.id)));

    // worksheets (published; RLS hides drafts). Resilient if the table is missing.
    const rw = await supabase.from("worksheets").select("id, code, title").eq("course_id", courseId).eq("published", true).order("position");
    if (!rw.error) setWorksheets(((rw.data ?? []) as WorksheetRow[]).filter((w) => !lockedWorksheets.has(w.id)));

    if (uid && qs && qs.length) {
      const { data: att } = await supabase
        .from("quiz_attempts")
        .select("quiz_id, percent")
        .eq("student_id", uid)
        .in("quiz_id", qs.map((q: any) => q.id))
        .not("submitted_at", "is", null);
      const best: Record<string, number> = {};
      (att ?? []).forEach((a: any) => {
        if (a.percent != null) best[a.quiz_id] = Math.max(best[a.quiz_id] ?? 0, a.percent);
      });
      setBestScores(best);
    }
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const uid = session?.user.id ?? null;
      setUserId(uid);

      const { data: c } = await supabase
        .from("courses")
        .select("id, code, title, description, level")
        .eq("id", courseId)
        .single();
      if (!c) {
        setLoading(false);
        return;
      }
      setCourse(c as Course);

      let inClassNow = false;
      let isAdmin = false, hasGrant = false;
      if (uid) {
        const { data: en } = await supabase
          .from("enrollments")
          .select("id")
          .eq("student_id", uid)
          .eq("course_id", courseId)
          .maybeSingle();
        setEnrolled(!!en);

        // Access is PER-COURSE: admin, OR an active grant for THIS course, OR a
        // member of a class for it (free via the teacher).
        const sub = await getSubscriptionInfo();
        isAdmin = sub?.role === "admin";
        const { data: grant } = await supabase
          .from("course_grants")
          .select("id")
          .eq("user_id", uid)
          .eq("course_id", courseId)
          .in("status", ["active", "trialing"])
          .limit(1);
        hasGrant = (grant ?? []).length > 0;
        const { data: mem } = await supabase.from("class_students").select("class_id").eq("student_id", uid);
        const ids = (mem ?? []).map((m: any) => m.class_id);
        if (ids.length) {
          const { data: cls } = await supabase.from("classes").select("id").eq("course_id", courseId).in("id", ids);
          inClassNow = (cls ?? []).length > 0;
        }
      }
      setAccess(isAdmin || hasGrant || inClassNow);
      await loadContent(uid);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  async function enroll() {
    if (!userId) return router.push("/login");
    setBusy(true);
    const { error } = await supabase.from("enrollments").insert({ student_id: userId, course_id: courseId });
    if (!error) {
      setEnrolled(true);
      await loadContent(userId);
    }
    setBusy(false);
  }

  // Start Stripe checkout for THIS course (per-course billing).
  async function buyCourse(plan: string) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return router.push("/login");
    setBuying(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, userId: session.user.id, userEmail: session.user.email, courseId }),
      });
      const json = await res.json();
      if (json.url) { window.location.href = json.url; return; }
      alert(json.error || "Could not start checkout.");
    } catch (e: any) {
      alert(e.message || "Checkout failed.");
    }
    setBuying(null);
  }

  if (loading) {
    return (
      <main>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>Loading…</div>
      </main>
    );
  }
  if (!course) {
    return (
      <main>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>This course isn't available.</div>
      </main>
    );
  }

  // Interleave lessons / worksheets / assignments by topic code (1.1, 1.2, …),
  // showing them in the order lesson → worksheet → assignment within each topic.
  const codeOf = (s: string): [number, number] => { const m = String(s).match(/(\d+)\.(\d+)/); return m ? [+m[1], +m[2]] : [999, 999]; };
  const KIND = { lesson: 0, worksheet: 1, assignment: 2, quiz: 3 } as const;
  const content = [
    ...lessons.map((l) => ({ id: l.id, kind: "lesson" as const, code: codeOf(l.title), title: l.title, href: `/lessons/${l.id}`, due: null as string | null })),
    ...worksheets.map((w) => ({ id: w.id, kind: "worksheet" as const, code: codeOf(w.code), title: `${w.code} ${w.title}`, href: `/worksheets/${w.id}`, due: null as string | null })),
    ...assignments.map((a) => ({ id: a.id, kind: "assignment" as const, code: codeOf(a.title), title: a.title, href: `/assignments/${a.id}`, due: (a.due_date ?? null) as string | null })),
    ...quizzes.map((q) => ({ id: q.id, kind: "quiz" as const, code: codeOf(q.title), title: q.title, href: `/quizzes/${q.id}`, due: (q.due_date ?? null) as string | null })),
  ].sort((x, y) => x.code[0] - y.code[0] || x.code[1] - y.code[1] || KIND[x.kind] - KIND[y.kind]);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 28px" }}>
        <Link href="/courses" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All courses</Link>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", margin: "12px 0 28px", gap: 20 }}>
          <div>
            {course.code && <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>{course.code}</div>}
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 32, fontWeight: 700, margin: "4px 0 8px" }}>{course.title}</h1>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0d9488", background: "#ecfdf5", padding: "3px 10px", borderRadius: 999 }}>{levelLabel(course.level)}</span>
            {course.description && <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6, marginTop: 16, maxWidth: 560 }}>{course.description}</p>}
          </div>
          {access && !enrolled && (
            <button onClick={enroll} disabled={busy} style={{ background: "#0d9488", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", whiteSpace: "nowrap" }}>
              {busy ? "Adding…" : "Add to my courses"}
            </button>
          )}
        </div>

        {!access ? (
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 14, padding: 24, color: "#9a3412" }}>
            <strong style={{ fontSize: 17 }}>🔒 Unlock {course.title}</strong>
            <p style={{ color: "#7c2d12", fontSize: 15, lineHeight: 1.6, margin: "8px 0 18px", maxWidth: 560 }}>
              Get full access to <strong>this course</strong> — every lesson, worksheet, quiz, and assignment. Or join your teacher's class with a code, which is free for class students.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 }}>
              <div style={buyCard}>
                <div style={buyLabel}>For students</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <BuyBtn onClick={() => buyCourse("student_monthly")} busy={buying === "student_monthly"}>Monthly</BuyBtn>
                  <BuyBtn onClick={() => buyCourse("student_annual")} busy={buying === "student_annual"} primary>Annual — best value</BuyBtn>
                </div>
              </div>
              <div style={buyCard}>
                <div style={buyLabel}>For teachers — run a class</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <BuyBtn onClick={() => buyCourse("tutor_monthly")} busy={buying === "tutor_monthly"}>Monthly</BuyBtn>
                  <BuyBtn onClick={() => buyCourse("tutor_annual")} busy={buying === "tutor_annual"} primary>Annual</BuyBtn>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <Link href="/dashboard" style={{ background: "#fff", color: "#1b7a44", border: "1px solid #bfe3cd", padding: "10px 22px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>Have a class code? Enter it →</Link>
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", background: "#e7f6ec", border: "1px solid #bfe3cd", borderRadius: 14, padding: "14px 18px", marginBottom: 24 }}>
              <div style={{ color: "#0d5c30", fontWeight: 600, fontSize: 14 }}>
                {lessons.length} lesson{lessons.length !== 1 ? "s" : ""} · {quizzes.length} quiz{quizzes.length !== 1 ? "zes" : ""} · {assignments.length} assignment{assignments.length !== 1 ? "s" : ""}
                {Object.keys(bestScores).length > 0 && <> · {Object.keys(bestScores).length}/{quizzes.length} quizzes attempted</>}
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                {lessons.length > 0 && <Link href={`/lessons/${lessons[0].id}`} style={{ background: "#1b7a44", color: "#fff", padding: "8px 16px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>Start learning →</Link>}
                <Link href="/progress" style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>My progress ↗</Link>
              </div>
            </div>

            {announcements.length > 0 && (
              <section style={{ marginBottom: 24 }}>
                {announcements.map((a) => (
                  <div key={a.id} style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 12, padding: "12px 16px", marginBottom: 8 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#92400e", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>📣 Announcement</div>
                    <div style={{ fontSize: 14, color: "#0f172a", whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{a.body}</div>
                    <div style={{ fontSize: 12, color: "#b45309", marginTop: 4 }}>{new Date(a.created_at).toLocaleString()}</div>
                  </div>
                ))}
              </section>
            )}

            <Section title="Course content">
              {content.length === 0 ? <Empty>No content published yet.</Empty> : content.map((it) => (
                <Link key={it.kind + it.id} href={it.href} style={rowLink}>
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={badgeStyle[it.kind]}>{badgeLabel[it.kind]}</span>
                    <span>{it.title}</span>
                  </span>
                  <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    {it.kind === "assignment" && <span style={{ color: "#64748b", fontSize: 14 }}>{it.due ? `Due ${new Date(it.due).toLocaleDateString()}` : "No due date"}</span>}
                    {it.kind === "quiz" && it.due && <span style={{ color: "#64748b", fontSize: 14 }}>Due {new Date(it.due).toLocaleDateString()}</span>}
                    {it.kind === "quiz" && bestScores[it.id] != null && (
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#059669", background: "#ecfdf5", padding: "3px 9px", borderRadius: 999 }}>Best {bestScores[it.id]}%</span>
                    )}
                    <span style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>
                      {it.kind === "worksheet" ? "📄 Open →" : it.kind === "assignment" ? "Open →" : it.kind === "quiz" ? (bestScores[it.id] != null ? "Review →" : "Start →") : "Read →"}
                    </span>
                  </span>
                </Link>
              ))}
            </Section>
          </>
        )}
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 30 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>{title}</h2>
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>{children}</div>
    </section>
  );
}
function Empty({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "#94a3b8", padding: "16px 18px" }}>{children}</div>;
}
function BuyBtn({ children, onClick, busy, primary }: { children: React.ReactNode; onClick: () => void; busy?: boolean; primary?: boolean }) {
  return (
    <button onClick={onClick} disabled={busy} style={{
      background: primary ? "#1b7a44" : "#fff", color: primary ? "#fff" : "#1b7a44",
      border: primary ? "none" : "1px solid #bfe3cd", borderRadius: 9, padding: "9px 16px",
      fontWeight: 700, fontSize: 14, cursor: busy ? "default" : "pointer", opacity: busy ? 0.6 : 1, whiteSpace: "nowrap",
    }}>{busy ? "Starting…" : children}</button>
  );
}
const buyCard: React.CSSProperties = { background: "#fff", border: "1px solid #fed7aa", borderRadius: 12, padding: "14px 16px" };
const buyLabel: React.CSSProperties = { fontSize: 12, fontWeight: 800, color: "#9a3412", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 };
const badgeBase = (bg: string, fg: string): React.CSSProperties => ({ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: fg, background: bg, padding: "3px 8px", borderRadius: 999, whiteSpace: "nowrap", minWidth: 78, textAlign: "center" });
const badgeStyle: Record<"lesson" | "worksheet" | "assignment" | "quiz", React.CSSProperties> = {
  lesson: badgeBase("#e7f6ec", "#0d5c30"),
  worksheet: badgeBase("#ecfdf5", "#0d9488"),
  assignment: badgeBase("#fff7ed", "#b45309"),
  quiz: badgeBase("#f5f3ff", "#6d28d9"),
};
const badgeLabel: Record<"lesson" | "worksheet" | "assignment" | "quiz", string> = { lesson: "Lesson", worksheet: "Worksheet", assignment: "Assignment", quiz: "Quiz" };
const rowLink: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 18px",
  borderBottom: "1px solid #f1f5f9",
  textDecoration: "none",
  color: "#0f172a",
  fontWeight: 600,
};
