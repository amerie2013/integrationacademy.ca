"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";

type SeqItem = {
  type: "lesson" | "assignment" | "quiz" | "worksheet";
  id: string;
  title: string;
  due_date?: string | null;   // assignments only
  created_by?: string | null; // assignments only
  class_id?: string | null;   // assignments only
};

export default function ClassManagePage() {
  const router = useRouter();
  const classId = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [cls, setCls] = useState<{ name: string; join_code: string | null; course_id: string } | null>(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [items, setItems] = useState<SeqItem[]>([]);
  const [locked, setLocked] = useState<Set<string>>(new Set());
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const itemsRef = useRef<SeqItem[]>([]);
  itemsRef.current = items; // keep latest order available to async drag handlers
  const [ann, setAnn] = useState<{ id: string; body: string; created_at: string }[]>([]);
  const [annBody, setAnnBody] = useState("");
  const [annBusy, setAnnBusy] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [busyAsg, setBusyAsg] = useState<string | null>(null);

  async function loadAll(courseId: string) {
    const [{ data: ls }, { data: qs }, { data: ws }, { data: ord }, { data: lk }] = await Promise.all([
      supabase.from("lessons").select("id, title, position").eq("course_id", courseId).eq("published", true).order("position"),
      supabase.from("quizzes").select("id, title").eq("class_id", classId).order("created_at"),
      supabase.from("worksheets").select("id, code, title, position").eq("course_id", courseId).eq("published", true).order("position"),
      supabase.from("class_order").select("item_type, item_id, position").eq("class_id", classId),
      supabase.from("class_locks").select("item_type, item_id").eq("class_id", classId),
    ]);
    // Course-wide (class_id null) + this class's assignments. Falls back if the
    // class_id column isn't there yet (migration unrun).
    let asRes: { data: any[] | null; error: any } = await supabase.from("assignments").select("id, title, due_date, created_by, class_id").eq("course_id", courseId).or(`class_id.is.null,class_id.eq.${classId}`).order("created_at");
    if (asRes.error) asRes = await supabase.from("assignments").select("id, title, due_date").eq("course_id", courseId).order("created_at");
    const as = asRes.data;
    // Per-class due dates (this class's own schedule; independent of the course).
    const { data: caRows } = await supabase.from("class_assignments").select("assignment_id, due_date").eq("class_id", classId);
    const dueByAsg: Record<string, string | null> = {};
    (caRows ?? []).forEach((r: any) => (dueByAsg[r.assignment_id] = r.due_date));
    setLocked(new Set((lk ?? []).map((r: any) => `${r.item_type}:${r.item_id}`)));
    const def: SeqItem[] = [
      ...(ls ?? []).map((l: any) => ({ type: "lesson" as const, id: l.id, title: l.title })),
      ...(qs ?? []).map((q: any) => ({ type: "quiz" as const, id: q.id, title: q.title })),
      ...(as ?? []).map((a: any) => ({ type: "assignment" as const, id: a.id, title: a.title, due_date: dueByAsg[a.id] ?? null, created_by: a.created_by ?? null, class_id: a.class_id ?? null })),
      ...(ws ?? []).map((w: any) => ({ type: "worksheet" as const, id: w.id, title: w.code ? `${w.code} ${w.title}` : w.title })),
    ];
    // Default order: group by subject code (1.1, 1.2, …); within a subject lesson → worksheet → assignment → quiz.
    const RANK: Record<string, number> = { lesson: 0, worksheet: 1, assignment: 2, quiz: 3 };
    const codeOf = (t: string) => { const m = (t || "").match(/(\d+)\.(\d+)/); return m ? Number(m[1]) * 1000 + Number(m[2]) : 999999; };
    def.sort((a, b) => (codeOf(a.title) - codeOf(b.title)) || (RANK[a.type] - RANK[b.type]));
    const pos: Record<string, number> = {};
    (ord ?? []).forEach((o: any) => (pos[`${o.item_type}:${o.item_id}`] = o.position));
    const ordered = def
      .map((it, i) => ({ it, p: pos[`${it.type}:${it.id}`] ?? 1000 + i }))
      .sort((a, b) => a.p - b.p)
      .map((x) => x.it);
    setItems(ordered);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: c } = await supabase.from("classes").select("name, join_code, course_id, teacher_id").eq("id", classId).single();
      if (!c) return router.push("/classes");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (c.teacher_id !== session.user.id && me?.role !== "admin") return router.push("/classes");
      setUid(session.user.id);
      setIsAdmin(me?.role === "admin");
      setCls({ name: c.name, join_code: c.join_code, course_id: c.course_id });
      const { data: course } = await supabase.from("courses").select("title, code").eq("id", c.course_id).single();
      setCourseTitle(course ? (course.code ? `${course.code} — ${course.title}` : course.title) : "");
      await loadAll(c.course_id);
      await loadAnnouncements();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  async function loadAnnouncements() {
    const { data } = await supabase.from("announcements").select("id, body, created_at").eq("class_id", classId).order("created_at", { ascending: false });
    setAnn((data ?? []) as { id: string; body: string; created_at: string }[]);
  }

  async function postAnnouncement() {
    if (!annBody.trim()) return;
    setAnnBusy(true);
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.from("announcements").insert({ class_id: classId, author_id: session?.user.id, body: annBody.trim() });
    setAnnBusy(false);
    if (error) { alert(/exist|relation|schema/i.test(error.message) ? "Announcements need the 2026-07-06_class_announcements_and_homework.sql migration." : error.message); return; }
    setAnnBody(""); await loadAnnouncements();
  }

  async function deleteAnnouncement(id: string) {
    await supabase.from("announcements").delete().eq("id", id);
    await loadAnnouncements();
  }

  // Teachers may set an assignment's due date or delete their own class homework
  // (enforced server-side in /api/class-assignment); they can't create or edit
  // assignment content — that's admin curriculum.
  async function callAsg(action: "set-due" | "delete", assignmentId: string, due?: string) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { alert("Please sign in again."); return false; }
    setBusyAsg(assignmentId);
    const res = await fetch("/api/class-assignment", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
      body: JSON.stringify({ action, classId, assignmentId, due }),
    });
    const j = await res.json().catch(() => ({}));
    setBusyAsg(null);
    if (!res.ok) { alert(j.error || "Something went wrong."); return false; }
    return true;
  }

  async function setDue(assignmentId: string, due: string) {
    if (await callAsg("set-due", assignmentId, due)) {
      setItems((its) => its.map((it) => (it.type === "assignment" && it.id === assignmentId ? { ...it, due_date: due ? new Date(due).toISOString() : null } : it)));
    }
  }

  async function deleteAssignment(assignmentId: string, title: string) {
    if (!confirm(`Delete "${title}"? This removes the assignment and its submissions. This can't be undone.`)) return;
    if (await callAsg("delete", assignmentId)) {
      setItems((its) => its.filter((it) => !(it.type === "assignment" && it.id === assignmentId)));
    }
  }

  async function persistOrder(list: SeqItem[]) {
    await supabase.from("class_order").upsert(
      list.map((it, i) => ({ class_id: classId, item_type: it.type, item_id: it.id, position: i })),
      { onConflict: "class_id,item_type,item_id" },
    );
  }

  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const copy = [...items];
    [copy[i], copy[j]] = [copy[j], copy[i]];
    setItems(copy);
    persistOrder(copy);
  }

  // drag-and-drop reorder (pull an item to its new spot)
  function reorder(from: number, to: number) {
    setItems((prev) => {
      if (from === to || from < 0 || to < 0 || from >= prev.length || to >= prev.length) return prev;
      const copy = [...prev];
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  }

  async function toggleLock(it: SeqItem) {
    if (it.type === "quiz") return; // quizzes: use Delete in the builder to remove
    const key = `${it.type}:${it.id}`;
    const isLocked = locked.has(key);
    setLocked((s) => { const n = new Set(s); isLocked ? n.delete(key) : n.add(key); return n; });
    if (isLocked) await supabase.from("class_locks").delete().eq("class_id", classId).eq("item_type", it.type).eq("item_id", it.id);
    else await supabase.from("class_locks").insert({ class_id: classId, item_type: it.type, item_id: it.id });
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  const TYPE = {
    lesson: { label: "Lesson", bg: "#e7f6ec", color: "#1b7a44" },
    assignment: { label: "Assignment", bg: "#fff7ed", color: "#c2410c" },
    quiz: { label: "Quiz", bg: "#ecfdf5", color: "#0d9488" },
    worksheet: { label: "Worksheet", bg: "#eff6ff", color: "#1d4ed8" },
  } as const;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 28px" }}>
        <Link href="/classes" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← My classes</Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, margin: "10px 0 6px", flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: 0 }}>{cls?.name}</h1>
            <div style={{ color: "#64748b", fontSize: 14, marginTop: 2 }}>{courseTitle}</div>
          </div>
          <span style={{ fontSize: 14, background: "#e7f6ec", color: "#0d5c30", padding: "6px 12px", borderRadius: 9, fontWeight: 700 }}>
            Share code: <span style={{ fontFamily: "JetBrains Mono, monospace" }}>{cls?.join_code}</span>
          </span>
        </div>
        <p style={{ color: "#64748b", fontSize: 15, margin: "8px 0 18px" }}>
          <strong>Drag the ⠿ handle</strong> to reorder (fastest for big moves), or use ↑ ↓ for single steps — this sets the order students move through with <strong>Next / Previous</strong>. Tap <strong>Visible/Hidden</strong> to show or hide a lesson/assignment. Quizzes you build appear here too.
        </p>

        <Link href={`/classes/${classId}/build`} style={{ display: "inline-block", background: "#1b7a44", color: "#fff", padding: "10px 18px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14, marginBottom: 22 }}>
          + Build a quiz from the bank
        </Link>

        {/* Announcements */}
        <div style={panel}>
          <h2 style={panelH}>📣 Announcements</h2>
          <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 10px" }}>Post a note your students see on their course page.</p>
          <textarea value={annBody} onChange={(e) => setAnnBody(e.target.value)} rows={2} placeholder="e.g. Reminder: quiz on 1.3 this Friday…"
            style={{ width: "100%", padding: "10px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", boxSizing: "border-box", resize: "vertical" }} />
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
            <button onClick={postAnnouncement} disabled={annBusy || !annBody.trim()} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "9px 18px", fontWeight: 700, fontSize: 14, cursor: annBusy || !annBody.trim() ? "default" : "pointer", opacity: annBusy || !annBody.trim() ? 0.55 : 1 }}>
              {annBusy ? "Posting…" : "Post announcement"}
            </button>
          </div>
          {ann.length > 0 && (
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              {ann.map((a) => (
                <div key={a.id} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 9, padding: "10px 12px", display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 14, color: "#0f172a", whiteSpace: "pre-wrap" }}>{a.body}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 3 }}>{new Date(a.created_at).toLocaleString()}</div>
                  </div>
                  <button onClick={() => deleteAnnouncement(a.id)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: "#dc2626", cursor: "pointer", flexShrink: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
          {items.length === 0 ? <div style={{ padding: 18, color: "#94a3b8" }}>No content yet.</div> : items.map((it, i) => {
            const t = TYPE[it.type];
            const isLocked = locked.has(`${it.type}:${it.id}`);
            return (
              <div
                key={`${it.type}:${it.id}`}
                onDragOver={(e) => { e.preventDefault(); if (dragIndex === null || dragIndex === i) return; reorder(dragIndex, i); setDragIndex(i); }}
                onDrop={(e) => { e.preventDefault(); setDragIndex(null); persistOrder(itemsRef.current); }}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderTop: i ? "1px solid #f1f5f9" : "none", opacity: dragIndex === i ? 0.4 : 1, background: dragIndex === i ? "#f5f3ff" : "transparent" }}
              >
                <span
                  draggable
                  onDragStart={(e) => { setDragIndex(i); e.dataTransfer.effectAllowed = "move"; try { e.dataTransfer.setData("text/plain", String(i)); } catch {} }}
                  onDragEnd={() => { setDragIndex(null); persistOrder(itemsRef.current); }}
                  title="Drag to reorder"
                  style={{ cursor: "grab", color: "#cbd5e1", fontSize: 18, lineHeight: 1, userSelect: "none", padding: "0 2px" }}
                >⠿</span>
                <span style={{ color: "#94a3b8", fontWeight: 700, width: 22, textAlign: "right" }}>{i + 1}</span>
                <span style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <button onClick={() => move(i, -1)} disabled={i === 0} style={arrow}>▲</button>
                  <button onClick={() => move(i, 1)} disabled={i === items.length - 1} style={arrow}>▼</button>
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: t.color, background: t.bg, padding: "2px 9px", borderRadius: 999 }}>{t.label}</span>
                <span style={{ flex: 1, fontWeight: 600, color: isLocked ? "#94a3b8" : "#0f172a" }}>{it.title}</span>
                {it.type === "quiz" ? (
                  <Link href={`/classes/${classId}/quizzes/${it.id}/results`} style={gradeLink}>Results →</Link>
                ) : it.type === "assignment" ? (
                  <>
                    <label title="Set the due date for this class" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748b", fontWeight: 600 }}>
                      Due
                      <DueDate value={it.due_date} disabled={busyAsg === it.id} onSave={(v) => setDue(it.id, v)} />
                    </label>
                    <Link href={`/classes/${classId}/assignments/${it.id}/submissions`} style={gradeLink}>Submissions →</Link>
                    <button onClick={() => toggleLock(it)} style={{ border: "1px solid", borderColor: isLocked ? "#fecaca" : "#a7f3d0", background: isLocked ? "#fef2f2" : "#ecfdf5", color: isLocked ? "#b91c1c" : "#065f46", borderRadius: 999, padding: "6px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 104 }}>
                      {isLocked ? "🔒 Hidden" : "✓ Visible"}
                    </button>
                    {(isAdmin || it.created_by === uid || (it.class_id && it.class_id === classId)) && (
                      <button onClick={() => deleteAssignment(it.id, it.title)} disabled={busyAsg === it.id} title="Delete this assignment" style={{ border: "1px solid #fecaca", background: "#fff", color: "#dc2626", borderRadius: 999, padding: "6px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                        Delete
                      </button>
                    )}
                  </>
                ) : (
                  <button onClick={() => toggleLock(it)} style={{ border: "1px solid", borderColor: isLocked ? "#fecaca" : "#a7f3d0", background: isLocked ? "#fef2f2" : "#ecfdf5", color: isLocked ? "#b91c1c" : "#065f46", borderRadius: 999, padding: "6px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 104 }}>
                    {isLocked ? "🔒 Hidden" : "✓ Visible"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

// Native date inputs fire onChange on every segment edit, so saving there would
// persist a half-typed year (e.g. "0002" before you finish typing "2026"). This
// only commits on blur/Enter, bounds the year with min/max, and ignores an
// out-of-range year so a mistyped value never saves.
function DueDate({ value, disabled, onSave }: { value?: string | null; disabled?: boolean; onSave: (v: string) => void }) {
  const toInput = (v?: string | null) => (v ? new Date(v).toISOString().slice(0, 10) : "");
  const [val, setVal] = useState(toInput(value));
  useEffect(() => { setVal(toInput(value)); }, [value]);
  const nowY = new Date().getFullYear();
  const min = `${nowY - 1}-01-01`;
  const max = `${nowY + 5}-12-31`;
  function commit() {
    if (val === toInput(value)) return;              // unchanged
    if (val === "") { onSave(""); return; }          // cleared
    const y = Number(val.slice(0, 4));
    if (!(y >= nowY - 1 && y <= nowY + 5)) return;    // ignore a nonsense year; keep editing
    onSave(val);
  }
  return (
    <input
      type="date" value={val} min={min} max={max} disabled={disabled}
      onChange={(e) => setVal(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur(); }}
      style={{ padding: "5px 8px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12, color: "#334155" }}
    />
  );
}

const arrow: React.CSSProperties = { border: "1px solid #e2e8f0", background: "#fff", borderRadius: 5, width: 26, height: 18, fontSize: 9, cursor: "pointer", color: "#475569", lineHeight: 1, padding: 0 };
const gradeLink: React.CSSProperties = { fontSize: 13, fontWeight: 700, color: "#1b7a44", textDecoration: "none", whiteSpace: "nowrap", border: "1px solid #a7f3d0", background: "#ecfdf5", borderRadius: 999, padding: "6px 14px" };
const panel: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18, marginBottom: 20 };
const panelH: React.CSSProperties = { fontSize: 17, fontWeight: 700, margin: "0 0 4px" };
