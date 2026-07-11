"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { getSubscriptionInfo } from "../../lib/subscription";

type ClassRow = { id: string; name: string; join_code: string | null; teacher_id: string | null; course_id: string | null };
type StudentRow = { id: string; full_name: string | null; email: string | null; attempts: number; avg: number | null };

export default function TeacherClassesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [mine, setMine] = useState<ClassRow[]>([]);
  const [open, setOpen] = useState<ClassRow[]>([]);
  const [courseTitles, setCourseTitles] = useState<Record<string, string>>({});
  const [students, setStudents] = useState<Record<string, StudentRow[]>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [newCourse, setNewCourse] = useState("");
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const [quota, setQuota] = useState(0);
  const [availCourses, setAvailCourses] = useState<{ id: string; label: string }[]>([]);

  async function load(userId: string) {
    const { data: cr } = await supabase.from("courses").select("id, code, title");
    const titles: Record<string, string> = Object.fromEntries((cr ?? []).map((c: any) => [c.id, c.code ? `${c.code} — ${c.title}` : c.title]));
    setCourseTitles(titles);

    const { data: all } = await supabase.from("classes").select("id, name, join_code, teacher_id, course_id");
    const list = (all ?? []) as ClassRow[];
    const mineList = list.filter((c) => c.teacher_id === userId);
    setMine(mineList);
    setOpen(list.filter((c) => !c.teacher_id));

    // Courses this teacher can still open a class for: a free teacher seat
    // (active teacher grant) minus classes already opened for that course.
    const { data: grants } = await supabase.from("course_grants").select("course_id").eq("user_id", userId).eq("kind", "teacher").in("status", ["active", "trialing"]);
    const seatBy: Record<string, number> = {}; (grants ?? []).forEach((g: any) => { seatBy[g.course_id] = (seatBy[g.course_id] || 0) + 1; });
    const usedBy: Record<string, number> = {}; mineList.forEach((c) => { if (c.course_id) usedBy[c.course_id] = (usedBy[c.course_id] || 0) + 1; });
    setAvailCourses(Object.keys(seatBy).filter((cid) => seatBy[cid] > (usedBy[cid] || 0)).map((cid) => ({ id: cid, label: titles[cid] || cid })));

    const byClass: Record<string, StudentRow[]> = {};
    for (const c of list.filter((c) => c.teacher_id === userId)) {
      const { data: members } = await supabase.from("class_students").select("student_id").eq("class_id", c.id);
      const ids = (members ?? []).map((m: any) => m.student_id);
      if (ids.length === 0) { byClass[c.id] = []; continue; }
      const { data: profs } = await supabase.from("profiles").select("id, full_name, email").in("id", ids);
      const { data: att } = await supabase.from("quiz_attempts").select("student_id, percent").in("student_id", ids).not("submitted_at", "is", null);
      byClass[c.id] = (profs ?? []).map((p: any) => {
        const m = (att ?? []).filter((a: any) => a.student_id === p.id && a.percent != null);
        const avg = m.length ? Math.round((m.reduce((s: number, a: any) => s + a.percent, 0) / m.length) * 10) / 10 : null;
        return { id: p.id, full_name: p.full_name, email: p.email, attempts: m.length, avg };
      });
    }
    setStudents(byClass);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "teacher" && me?.role !== "admin") return router.push("/dashboard");
      setUid(session.user.id);
      // Per-class billing: a teacher can open one class per paid seat (class_quota).
      const sub = await getSubscriptionInfo();
      setIsAdmin(me?.role === "admin");
      setSubActive(!!sub?.isActive);
      const { data: prof } = await supabase.from("profiles").select("class_quota").eq("id", session.user.id).single();
      setQuota((prof as any)?.class_quota ?? 0);
      await load(session.user.id);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function claim(id: string) {
    if (!uid) return;
    setBusy(id);
    const { error } = await supabase.from("classes").update({ teacher_id: uid }).eq("id", id);
    if (error) alert("Could not claim: " + error.message);
    await load(uid);
    setBusy(null);
  }

  function genCode() { const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; return Array.from({ length: 6 }, () => A[Math.floor(Math.random() * A.length)]).join(""); }
  async function create() {
    if (!uid || !newCourse || !newName.trim()) return;
    setCreating(true);
    let lastErr: any = null;
    for (let i = 0; i < 5; i++) {                        // retry only on a join-code collision
      const { error } = await supabase.from("classes").insert({ teacher_id: uid, course_id: newCourse, name: newName.trim(), join_code: genCode() });
      if (!error) { lastErr = null; break; }
      lastErr = error;
      const m = String(error.message).toLowerCase();
      if (!m.includes("duplicate") && !m.includes("unique")) break;
    }
    if (lastErr) alert("Could not create class: " + lastErr.message);
    else { setNewName(""); setNewCourse(""); await load(uid); }
    setCreating(false);
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  const canCreate = isAdmin || availCourses.length > 0;
  const courseOptions = isAdmin ? Object.entries(courseTitles).map(([id, label]) => ({ id, label })) : availCourses;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 28px" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "0 0 6px" }}>My classes</h1>
        <p style={{ color: "#64748b", margin: "0 0 20px" }}>Create a class (or claim an open one), then share its code — students join for free with the code.</p>

        {/* Create a class */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18, marginBottom: 30 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>Create a class</h2>
          {!isAdmin && (
            <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 12px" }}>
              You can open a class for any course you've bought a <strong style={{ color: "#0f172a" }}>teacher plan</strong> for. Available now: <strong style={{ color: "#0f172a" }}>{availCourses.length}</strong> course{availCourses.length === 1 ? "" : "s"} — each class uses one teacher seat.
            </p>
          )}
          {canCreate ? (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
              <div style={{ flex: "1 1 220px" }}>
                <label style={lbl}>Course</label>
                <select value={newCourse} onChange={(e) => setNewCourse(e.target.value)} style={field}>
                  <option value="">Select a course…</option>
                  {courseOptions.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
                </select>
              </div>
              <div style={{ flex: "1 1 220px" }}>
                <label style={lbl}>Class name</label>
                <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="e.g. Period 3 — MTH1W" style={field} />
              </div>
              <button onClick={create} disabled={creating || !newCourse || !newName.trim()} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer", opacity: creating || !newCourse || !newName.trim() ? 0.55 : 1, whiteSpace: "nowrap" }}>{creating ? "Creating…" : "Create class"}</button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", color: "#475569", fontSize: 14 }}>
              <span>To run a class, buy a <strong>teacher plan</strong> for a course — you can then open a class for it here. Each class uses one teacher seat.</span>
              <Link href="/courses" style={{ background: "#1b7a44", color: "#fff", padding: "9px 18px", borderRadius: 9, textDecoration: "none", fontWeight: 700 }}>Browse courses →</Link>
            </div>
          )}
        </div>

        {/* Claimed classes */}
        {mine.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22, marginBottom: 32 }}>
            You haven't claimed any classes yet. Claim one below to start teaching.
          </div>
        ) : (
          mine.map((c) => (
            <section key={c.id} style={{ marginBottom: 26 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{c.name}</h2>
                <span style={{ fontSize: 13, color: "#64748b" }}>{courseTitles[c.course_id ?? ""] ?? ""}</span>
                <span style={{ marginLeft: "auto", fontSize: 14, background: "#e7f6ec", color: "#0d5c30", padding: "6px 12px", borderRadius: 9, fontWeight: 700 }}>
                  Share code: <span style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: 1 }}>{c.join_code}</span>
                </span>
              </div>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr", padding: "11px 18px", background: "#f8fafc", fontSize: 12, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  <span>Student</span><span>Email</span><span>Quizzes</span><span>Avg %</span>
                </div>
                {(students[c.id] ?? []).length === 0 ? (
                  <div style={{ color: "#94a3b8", padding: "14px 18px" }}>No students yet — share the code above.</div>
                ) : (
                  students[c.id].map((s) => (
                    <div key={s.id} style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr", padding: "12px 18px", borderTop: "1px solid #f1f5f9", fontSize: 14, alignItems: "center" }}>
                      <Link href={`/classes/${c.id}/students/${s.id}`} style={{ fontWeight: 600, color: "#1b7a44", textDecoration: "none" }}>{s.full_name || "Student"} →</Link>
                      <span style={{ color: "#64748b" }}>{s.email ?? "—"}</span>
                      <span>{s.attempts}</span>
                      <span style={{ fontWeight: 700 }}>{s.avg != null ? `${s.avg}%` : "—"}</span>
                    </div>
                  ))
                )}
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
                <Link href={`/classes/${c.id}`} style={{ display: "inline-block", background: "#1b7a44", color: "#fff", padding: "9px 16px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
                  Manage class (lessons & quizzes) →
                </Link>
                <Link href={`/classes/${c.id}/build`} style={{ display: "inline-block", background: "#fff", color: "#1b7a44", border: "1px solid #bfe3cd", padding: "9px 16px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
                  Build a quiz
                </Link>
              </div>
            </section>
          ))
        )}

        {/* Open classes to claim */}
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "8px 0 14px" }}>Open classes you can teach</h2>
        {open.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22 }}>No open classes right now. An admin creates classes for you to claim.</div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
            {open.map((c) => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 18px", borderTop: "1px solid #f1f5f9" }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{c.name}</div>
                  <div style={{ color: "#64748b", fontSize: 13 }}>{courseTitles[c.course_id ?? ""] ?? ""}</div>
                </div>
                <button onClick={() => claim(c.id)} disabled={busy === c.id} style={{ background: "#0d9488", color: "#fff", border: "none", borderRadius: 9, padding: "9px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {busy === c.id ? "Claiming…" : "Claim to teach"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

const lbl: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 5 };
const field: React.CSSProperties = { width: "100%", padding: "9px 11px", border: "1px solid #cbd5e1", borderRadius: 9, fontSize: 14, background: "#fff", color: "#0f172a" };
