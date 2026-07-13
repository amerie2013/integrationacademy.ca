"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { CourseNav } from "../../../components/CourseNav";
import { AssignmentBody } from "../../../components/AssignmentBody";
import { MathInput } from "../../../components/MathInput";
import { MaterialsPanel } from "../../../components/MaterialsPanel";
import { TutorChat } from "../../../components/TutorChat";

type Assignment = { id: string; title: string; description: string | null; due_date: string | null; course_id: string; tutor_enabled: boolean | null };

export default function AssignmentPage() {
  const id = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [a, setA] = useState<Assignment | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [uid, setUid] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [submission, setSubmission] = useState<any | null>(null);
  const [fileSupported, setFileSupported] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCalc, setShowCalc] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("assignments").select("id, title, description, due_date, course_id, tutor_enabled").eq("id", id).single();
      if (!data) { setNotFound(true); setLoading(false); return; }
      setA(data as Assignment);
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUid(session.user.id);
        const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
        setRole(me?.role ?? null);
        // try with file columns; fall back if the migration isn't applied
        let sub: any = null;
        const withFiles = await supabase.from("submissions").select("content, grade, feedback, submitted_at, file_url, file_name").eq("assignment_id", id).eq("student_id", session.user.id).maybeSingle();
        if (!withFiles.error) {
          setFileSupported(true);
          sub = withFiles.data;
          if (sub?.file_url) { setFileUrl(sub.file_url); setFileName(sub.file_name ?? ""); }
        } else {
          const basic = await supabase.from("submissions").select("content, grade, feedback, submitted_at").eq("assignment_id", id).eq("student_id", session.user.id).maybeSingle();
          sub = basic.data;
        }
        if (sub) { setSubmission(sub); setContent(sub.content ?? ""); }
      }
      setLoading(false);
    })();
  }, [id]);

  async function uploadFile(file: File) {
    setUploading(true);
    const path = `${id}/${uid}-${Date.now()}-${file.name.replace(/[^\w.\-]/g, "_")}`;
    const { error } = await supabase.storage.from("submissions").upload(path, file, { upsert: true });
    if (!error) {
      const { data } = supabase.storage.from("submissions").getPublicUrl(path);
      setFileUrl(data.publicUrl); setFileName(file.name);
    } else alert("Upload failed: " + error.message);
    setUploading(false);
  }

  async function submit() {
    if (!uid || (!content.trim() && !fileUrl)) return;
    setSaving(true);
    const payload: any = { assignment_id: id, student_id: uid, content };
    if (fileSupported) { payload.file_url = fileUrl || null; payload.file_name = fileName || null; }
    await supabase.from("submissions").upsert(payload, { onConflict: "assignment_id,student_id" });
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (notFound || !a) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>This assignment isn't available.</div></main>);

  const isStudent = role === "student" || (!role && !!uid);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "44px 28px" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#e69138", textTransform: "uppercase", letterSpacing: "0.05em" }}>Assignment</div>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 34, fontWeight: 700, margin: "6px 0 8px" }}>{a.title}</h1>
        {a.due_date && <div style={{ color: "#64748b", fontSize: 14, marginBottom: 18 }}>Due {new Date(a.due_date).toLocaleDateString()}</div>}

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 22 }}>
          <AssignmentBody text={a.description ?? ""} />
        </div>

        <div style={{ marginTop: 22 }}>
          <MaterialsPanel ownerType="assignment" ownerId={id} embedHeight="70vh" />
        </div>

        {isStudent && (
          <section style={{ marginTop: 26 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Your submission</h2>
            {submission?.grade != null && (
              <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 10, padding: "10px 14px", marginBottom: 12, fontWeight: 700, color: "#065f46" }}>
                Graded: {submission.grade}{submission.feedback ? ` — ${submission.feedback}` : ""}
              </div>
            )}
            <MathInput value={content} onChange={setContent} minHeight={150} />
            <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>
              {"Tip: write math with the buttons or type LaTeX between \\( … \\), e.g. \\( \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} \\)."}
            </div>

            {/* Graphing calculator (GeoGebra) */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setShowCalc((s) => !s)}
                style={{ background: "#ecfdf5", color: "#065f46", border: "1px solid #a7f3d0", borderRadius: 8, padding: "8px 14px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
              >
                📐 {showCalc ? "Hide graphing calculator" : "Open graphing calculator"}
              </button>
              <a href="/tools/graph" target="_blank" rel="noreferrer" style={{ color: "#1b7a44", fontWeight: 700, fontSize: 13 }}>
                Open full screen ↗
              </a>
            </div>
            {showCalc && (
              <div style={{ marginTop: 12, border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
                <iframe
                  src="/tools/graph?embed=1"
                  title="Graphing calculator"
                  style={{ width: "100%", height: 560, border: "none", display: "block" }}
                />
              </div>
            )}

            {/* file attachment */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
              {fileSupported ? (
                fileUrl ? (
                  <>
                    <a href={fileUrl} target="_blank" rel="noreferrer" style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>📎 {fileName || "attached file"}</a>
                    <button onClick={() => { setFileUrl(""); setFileName(""); }} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 7, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: "#dc2626", cursor: "pointer" }}>Remove</button>
                  </>
                ) : (
                  <label style={{ background: "#e7f6ec", color: "#1b7a44", borderRadius: 8, padding: "8px 14px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                    {uploading ? "Uploading…" : "📎 Attach a file"}
                    <input type="file" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && uploadFile(e.target.files[0])} />
                  </label>
                )
              ) : (
                <span style={{ color: "#94a3b8", fontSize: 13 }}>Run the submissions-file migration to enable attachments.</span>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14 }}>
              <button onClick={submit} disabled={saving || (!content.trim() && !fileUrl)} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                {saving ? "Saving…" : submission ? "Update submission" : "Submit"}
              </button>
              {saved && <span style={{ color: "#059669", fontWeight: 600, fontSize: 14 }}>Saved ✓</span>}
              {submission?.submitted_at && !saved && <span style={{ color: "#64748b", fontSize: 13 }}>Last submitted {new Date(submission.submitted_at).toLocaleString()}</span>}
            </div>
          </section>
        )}

        <CourseNav courseId={a.course_id} type="assignment" id={a.id} />
      </article>
      {a.tutor_enabled && (
        <TutorChat assignmentId={a.id} assignmentTitle={a.title} />
      )}
    </main>
  );
}
