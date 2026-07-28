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
import { SubmissionLink } from "../../../components/SubmissionLink";
import { prepareUpload, MAX_UPLOAD_MB } from "../../../lib/uploadFile";

type Assignment = { id: string; title: string; description: string | null; due_date: string | null; course_id: string; tutor_enabled: boolean | null };
type Att = { url: string; name: string; size: number };

const MAX_FILES = 5;
const MAX_TOTAL_MB = 20; // combined size cap across all attachments

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
  const [filesColumn, setFilesColumn] = useState(false); // is the jsonb `files` column present?
  const [files, setFiles] = useState<Att[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadNote, setUploadNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showCalc, setShowCalc] = useState(false);
  const [effectiveDue, setEffectiveDue] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("assignments").select("id, title, description, due_date, course_id, tutor_enabled").eq("id", id).single();
      if (!data) { setNotFound(true); setLoading(false); return; }
      setA(data as Assignment);
      // Default is the admin's course-level due date — used only for INDIVIDUAL
      // students (no class). Class students get their class's own date instead,
      // which starts blank; classes never inherit the course default.
      let due: string | null = (data.due_date as string | null) ?? null;
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUid(session.user.id);
        const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
        setRole(me?.role ?? null);
        const { data: mem } = await supabase.from("class_students").select("class_id").eq("student_id", session.user.id);
        const memIds = (mem ?? []).map((m: any) => m.class_id);
        if (memIds.length) {
          const { data: cls } = await supabase.from("classes").select("id").eq("course_id", data.course_id).in("id", memIds);
          const classIdsForCourse = (cls ?? []).map((c: any) => c.id);
          if (classIdsForCourse.length) {
            const { data: cas } = await supabase.from("class_assignments").select("due_date").eq("assignment_id", id).in("class_id", classIdsForCourse);
            const withDue = (cas ?? []).find((r: any) => r.due_date);
            due = withDue ? withDue.due_date : null; // class student: no course-default fallback
          }
        }
        // Graduated fallback so nothing breaks between deploy and each migration:
        // multi-file (files column) → legacy single file → no attachments.
        let sub: any = null;
        const q = (cols: string) => supabase.from("submissions").select(cols).eq("assignment_id", id).eq("student_id", session.user.id).maybeSingle();
        const withArr = await q("content, grade, feedback, submitted_at, file_url, file_name, files");
        if (!withArr.error) {
          setFileSupported(true); setFilesColumn(true);
          sub = withArr.data as any;
          const arr = Array.isArray(sub?.files) ? sub.files : [];
          if (arr.length) setFiles(arr.map((f: any) => ({ url: f.url, name: f.name ?? "file", size: Number(f.size) || 0 })));
          else if (sub?.file_url) setFiles([{ url: sub.file_url, name: sub.file_name ?? "file", size: 0 }]);
        } else {
          const withOne = await q("content, grade, feedback, submitted_at, file_url, file_name");
          if (!withOne.error) {
            setFileSupported(true);
            sub = withOne.data as any;
            if (sub?.file_url) setFiles([{ url: sub.file_url, name: sub.file_name ?? "file", size: 0 }]);
          } else {
            sub = (await q("content, grade, feedback, submitted_at")).data as any;
          }
        }
        if (sub) { setSubmission(sub); setContent(sub.content ?? ""); }
      }
      setEffectiveDue(due);
      setLoading(false);
    })();
  }, [id]);

  const maxFiles = filesColumn ? MAX_FILES : 1; // pre-migration: single file only
  const totalBytes = files.reduce((s, f) => s + (f.size || 0), 0);

  async function addFile(file: File) {
    if (files.length >= maxFiles) { alert(maxFiles === 1 ? "Only one file can be attached." : `You can attach up to ${maxFiles} files.`); return; }
    setUploading(true);
    setUploadNote("");
    try {
      // A signed-in session is required to write to the (RLS-protected) bucket.
      // getSession refreshes an expired token, so a page left open still works;
      // if there's genuinely no session, say so instead of a cryptic RLS error.
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { alert("Please sign in again to attach a file — your session has expired."); setUploading(false); return; }

      // Shrink photos + enforce the per-file size cap before anything touches storage.
      const { file: ready, note } = await prepareUpload(file);
      if (totalBytes + ready.size > MAX_TOTAL_MB * 1_000_000) {
        alert(`Your attachments would total more than ${MAX_TOTAL_MB} MB. Remove a file or upload a smaller one.`);
        setUploading(false); return;
      }
      const path = `${id}/${session.user.id}-${Date.now()}-${ready.name.replace(/[^\w.\-]/g, "_")}`;
      const { error } = await supabase.storage.from("submissions").upload(path, ready, { upsert: true });
      if (error) {
        alert(
          /row-level security|policy/i.test(error.message)
            ? "Upload was blocked by a permissions rule. Please make sure the latest submissions-storage migration has been applied."
            : "Upload failed: " + error.message,
        );
      } else {
        const { data } = supabase.storage.from("submissions").getPublicUrl(path);
        setFiles((fs) => [...fs, { url: data.publicUrl, name: ready.name, size: ready.size }]);
        if (note) setUploadNote(note);
      }
    } catch (e: any) {
      alert(e.message || "Couldn't prepare that file for upload.");
    }
    setUploading(false);
  }

  function removeFile(idx: number) {
    setFiles((fs) => fs.filter((_, i) => i !== idx));
    setUploadNote("");
  }

  async function submit() {
    if (!uid || (!content.trim() && files.length === 0)) return;
    setSaving(true);
    const payload: any = { assignment_id: id, student_id: uid, content };
    if (fileSupported) {
      // First file mirrors the legacy columns so old readers keep working.
      payload.file_url = files[0]?.url ?? null;
      payload.file_name = files[0]?.name ?? null;
      if (filesColumn) payload.files = files.map((f) => ({ url: f.url, name: f.name, size: f.size }));
    }
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
        {effectiveDue && <div style={{ color: "#64748b", fontSize: 14, marginBottom: 18 }}>Due {new Date(effectiveDue).toLocaleDateString()}</div>}

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

            {/* file attachments */}
            {fileSupported ? (
              <div style={{ marginTop: 12 }}>
                {files.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                    {files.map((f, i) => (
                      <div key={f.url} style={{ display: "flex", alignItems: "center", gap: 10, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 9, padding: "7px 12px" }}>
                        <SubmissionLink url={f.url} name={f.name} style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14, cursor: "pointer", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} />
                        <button onClick={() => removeFile(i)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 7, padding: "5px 10px", fontSize: 12, fontWeight: 700, color: "#dc2626", cursor: "pointer", flexShrink: 0 }}>Remove</button>
                      </div>
                    ))}
                  </div>
                )}
                {files.length < maxFiles && (
                  <label style={{ display: "inline-block", background: "#e7f6ec", color: "#1b7a44", borderRadius: 8, padding: "8px 14px", fontWeight: 700, fontSize: 14, cursor: uploading ? "default" : "pointer" }}>
                    {uploading ? "Preparing…" : files.length ? "📎 Add another file" : "📎 Attach a file"}
                    <input type="file" accept="image/*,application/pdf" disabled={uploading} style={{ display: "none" }} onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ""; if (f) addFile(f); }} />
                  </label>
                )}
                <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 6 }}>
                  {maxFiles > 1 ? `Up to ${maxFiles} files, ${MAX_TOTAL_MB} MB total` : `One file, up to ${MAX_UPLOAD_MB} MB`} · photos are optimised automatically
                  {files.length > 0 && ` · ${files.length}/${maxFiles} attached`}
                </div>
                {uploadNote && <div style={{ color: "#059669", fontSize: 12, fontWeight: 600, marginTop: 6 }}>✓ {uploadNote}</div>}
              </div>
            ) : (
              <div style={{ marginTop: 12 }}><span style={{ color: "#94a3b8", fontSize: 13 }}>Run the submissions-file migration to enable attachments.</span></div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14 }}>
              <button onClick={submit} disabled={saving || (!content.trim() && files.length === 0)} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
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
