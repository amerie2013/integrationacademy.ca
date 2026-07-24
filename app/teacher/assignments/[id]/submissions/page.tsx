"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import katex from "katex";
import { supabase } from "../../../../../lib/supabase";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { SubmissionLink } from "../../../../../components/SubmissionLink";

type Sub = {
  student_id: string;
  content: string | null;
  grade: number | null;
  feedback: string | null;
  submitted_at: string | null;
  file_url?: string | null;
  file_name?: string | null;
  name: string;
  email: string | null;
};

function renderMath(text: string): string {
  // Escape HTML, then typeset \( \) and \[ \] with KaTeX; keep line breaks.
  const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tex = (s: string, d: boolean) => {
    try { return katex.renderToString(s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"), { throwOnError: false, displayMode: d }); }
    catch { return s; }
  };
  return esc
    .replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => tex(t, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => tex(t, false))
    .replace(/\n/g, "<br/>");
}

export default function AssignmentSubmissionsPage() {
  const router = useRouter();
  const id = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState<string | null>(null);
  const [subs, setSubs] = useState<Sub[]>([]);
  const [fileCols, setFileCols] = useState(true);

  async function load() {
    const { data: a } = await supabase.from("assignments").select("title, course_id").eq("id", id).single();
    if (a) { setTitle(a.title ?? ""); setCourseId(a.course_id); }

    let rows: any[] = [];
    const withFiles = await supabase.from("submissions").select("student_id, content, grade, feedback, submitted_at, file_url, file_name").eq("assignment_id", id).order("submitted_at", { ascending: false });
    if (!withFiles.error) rows = withFiles.data ?? [];
    else { setFileCols(false); rows = (await supabase.from("submissions").select("student_id, content, grade, feedback, submitted_at").eq("assignment_id", id).order("submitted_at", { ascending: false })).data ?? []; }

    const ids = rows.map((r) => r.student_id);
    const names: Record<string, { name: string; email: string | null }> = {};
    if (ids.length) {
      const { data: profs } = await supabase.from("profiles").select("id, full_name, email").in("id", ids);
      (profs ?? []).forEach((p: any) => { names[p.id] = { name: p.full_name || "(unnamed student)", email: p.email ?? null }; });
    }
    setSubs(rows.map((r) => ({ ...r, name: names[r.student_id]?.name ?? r.student_id.slice(0, 8), email: names[r.student_id]?.email ?? null })));
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") { setDenied(true); setLoading(false); return; }
      await load();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Only admins can grade submissions.</div></main>);

  const graded = subs.filter((s) => s.grade != null).length;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "32px 28px" }}>
        <Link href={`/teacher/assignments/${id}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Back to assignment</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "12px 0 4px" }}>Submissions</h1>
        <p style={{ color: "#64748b", margin: "0 0 24px" }}>{title} · {subs.length} submission{subs.length !== 1 ? "s" : ""} · {graded} graded</p>

        {subs.length === 0 ? (
          <div style={{ color: "#94a3b8", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24 }}>No submissions yet.</div>
        ) : subs.map((s) => <SubCard key={s.student_id} sub={s} assignmentId={id} fileCols={fileCols} onSaved={load} />)}
      </div>
    </main>
  );
}

function SubCard({ sub, assignmentId, fileCols, onSaved }: { sub: Sub; assignmentId: string; fileCols: boolean; onSaved: () => void }) {
  const [grade, setGrade] = useState<string>(sub.grade != null ? String(sub.grade) : "");
  const [feedback, setFeedback] = useState<string>(sub.feedback ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState("");
  const body = useMemo(() => renderMath(sub.content ?? ""), [sub.content]);

  async function save() {
    setSaving(true); setErr("");
    const g = grade.trim() === "" ? null : Number(grade);
    if (g != null && Number.isNaN(g)) { setErr("Grade must be a number."); setSaving(false); return; }
    const { error } = await supabase.from("submissions")
      .update({ grade: g, feedback: feedback.trim() || null })
      .eq("assignment_id", assignmentId).eq("student_id", sub.student_id);
    setSaving(false);
    if (error) { setErr(error.message.includes("policy") ? "Save blocked by RLS — run the 2026-06-16_grading.sql migration." : error.message); return; }
    setSaved(true); setTimeout(() => setSaved(false), 1800); onSaved();
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
        <div>
          <strong style={{ fontSize: 16 }}>{sub.name}</strong>
          {sub.email && <span style={{ color: "#94a3b8", fontSize: 13, marginLeft: 8 }}>{sub.email}</span>}
        </div>
        {sub.submitted_at && <span style={{ color: "#64748b", fontSize: 13 }}>{new Date(sub.submitted_at).toLocaleString()}</span>}
      </div>

      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 14px", margin: "12px 0", fontSize: 15, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: body || "<em style='color:#94a3b8'>No written answer.</em>" }} />

      {fileCols && sub.file_url && (
        <SubmissionLink url={sub.file_url} name={sub.file_name} style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14, cursor: "pointer" }} />
      )}

      <div style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap", marginTop: 14 }}>
        <div>
          <label style={lbl}>Grade</label>
          <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="e.g. 8" inputMode="decimal"
            style={{ width: 90, padding: "9px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 15, outline: "none" }} />
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={lbl}>Feedback</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={2} placeholder="Comments for the student…"
            style={{ width: "100%", padding: "9px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", resize: "vertical" }} />
        </div>
        <button onClick={save} disabled={saving} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
          {saving ? "Saving…" : saved ? "Saved ✓" : "Save grade"}
        </button>
      </div>
      {err && <div style={{ color: "#dc2626", fontSize: 13, marginTop: 8 }}>{err}</div>}
    </div>
  );
}

const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };
