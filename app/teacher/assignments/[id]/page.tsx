"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { AssignmentBody } from "../../../../components/AssignmentBody";
import { MathInput } from "../../../../components/MathInput";
import { MaterialsEditor } from "../../../../components/MaterialsEditor";

export default function AdminAssignmentEditor() {
  const router = useRouter();
  const id = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");
  const [tutorEnabled, setTutorEnabled] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      const { data } = await supabase.from("assignments").select("title, description, due_date, course_id, tutor_enabled").eq("id", id).single();
      if (!data) return router.push("/teacher");
      setTitle(data.title ?? "");
      setDescription(data.description ?? "");
      setDue(data.due_date ? new Date(data.due_date).toISOString().slice(0, 10) : "");
      setCourseId(data.course_id);
      setTutorEnabled(!!data.tutor_enabled);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function save() {
    await supabase.from("assignments").update({ title, description, due_date: due ? new Date(due).toISOString() : null, tutor_enabled: tutorEnabled }).eq("id", id);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  }
  async function remove() {
    if (!confirm("Delete this assignment?")) return;
    await supabase.from("assignments").delete().eq("id", id);
    router.push(courseId ? `/teacher/courses/${courseId}` : "/teacher");
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  const field: React.CSSProperties = { width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          {courseId && <Link href={`/teacher/courses/${courseId}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Back to course</Link>}
          <div style={{ display: "flex", gap: 10 }}>
            <Link href={`/teacher/assignments/${id}/submissions`} style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 9, padding: "10px 16px", fontWeight: 700, fontSize: 14, textDecoration: "none", color: "#065f46" }}>Submissions →</Link>
            <Link href={`/assignments/${id}`} target="_blank" style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "10px 16px", fontWeight: 700, fontSize: 14, textDecoration: "none", color: "#0f172a" }}>Preview ↗</Link>
            <button onClick={remove} style={{ background: "#fff", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 9, padding: "10px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Delete</button>
            <button onClick={save} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{saved ? "Saved ✓" : "Save"}</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
          {/* editor */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", marginBottom: 10 }}>Editor</div>
            <label style={lbl}>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ ...field, marginBottom: 12 }} />
            <label style={lbl}>Due date (optional)</label>
            <input type="date" value={due} onChange={(e) => setDue(e.target.value)} style={{ ...field, marginBottom: 12 }} />
            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "11px 13px", marginBottom: 12, cursor: "pointer" }}>
              <input type="checkbox" checked={tutorEnabled} onChange={(e) => setTutorEnabled(e.target.checked)} style={{ marginTop: 3 }} />
              <span style={{ fontSize: 13, color: "#334155", lineHeight: 1.5 }}>
                <b style={{ color: "#0d5c30" }}>AI hint tutor</b> — let students open a hint‑only helper on this assignment. It explains concepts and gives hints but <b>never the final answers</b>. Leave off for tests/exams.
              </span>
            </label>
            <label style={lbl}>Questions</label>
            <p style={{ fontSize: 12, color: "#94a3b8", margin: "0 0 6px" }}>
              Use category headers on their own line (Knowledge &amp; Understanding / Thinking / Communication / Application) and numbered questions (1. … 2. …). Math: write <code>\( … \)</code>.
            </p>
            <MathInput value={description} onChange={setDescription} minHeight={460} preview={false} placeholder={"Type questions here. Use \\( … \\) for math, or the 🧮 Equation editor."} />
          </div>
          {/* preview */}
          <div style={{ position: "sticky", top: 80 }}>
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", marginBottom: 10 }}>Live preview</div>
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, maxHeight: 620, overflowY: "auto" }}>
              <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, marginTop: 0 }}>{title}</h1>
              <AssignmentBody text={description} />
            </div>
          </div>
        </div>

        <MaterialsEditor ownerType="assignment" ownerId={id} />
      </div>
    </main>
  );
}

const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 };
