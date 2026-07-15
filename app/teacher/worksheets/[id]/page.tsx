"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { fetchWorksheet, uploadWorksheetFile, type Worksheet } from "../../../../lib/worksheets";
import { signedUrl, signedPathUrl } from "../../../../lib/storage";
import { WorksheetContentEditor } from "../../../../components/WorksheetContentEditor";

export default function WorksheetEditorPage() {
  const router = useRouter();
  const id = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [w, setW] = useState<Worksheet | null>(null);
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState("");
  const [err, setErr] = useState("");
  const [regen, setRegen] = useState<"" | "working" | "done">("");
  const [links, setLinks] = useState<{ tex: string | null; texC: string | null; ws: string | null; ans: string | null }>({ tex: null, texC: null, ws: null, ans: null });

  useEffect(() => {
    if (!w) return;
    (async () => {
      setLinks({
        tex: await signedPathUrl("worksheets", `${w.course_id}/${w.code}.tex`),
        texC: await signedPathUrl("worksheets", `${w.course_id}/${w.code}_compact.tex`),
        ws: await signedUrl(w.worksheet_url),
        ans: await signedUrl(w.answers_url),
      });
    })();
  }, [w?.course_id, w?.code, w?.worksheet_url, w?.answers_url]);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") { setDenied(true); setLoading(false); return; }
      setW(await fetchWorksheet(id));
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function set<K extends keyof Worksheet>(k: K, v: Worksheet[K]) { setW((p) => (p ? { ...p, [k]: v } : p)); }

  async function save() {
    if (!w) return;
    setErr("");
    const { error } = await supabase.from("worksheets").update({
      code: w.code, title: w.title, position: w.position, published: w.published,
      worksheet_url: w.worksheet_url, worksheet_name: w.worksheet_name,
      answers_url: w.answers_url, answers_name: w.answers_name,
      content: w.content,
    }).eq("id", w.id);
    if (error) { setErr(error.message.includes("policy") ? "Blocked by RLS — run the 2026-06-17_worksheets.sql migration." : error.message); return; }
    setSaved(true); setTimeout(() => setSaved(false), 1800);
  }

  async function upload(file: File, kind: "worksheet" | "answers") {
    if (!w) return;
    setBusy(kind); setErr("");
    try {
      const { url, name } = await uploadWorksheetFile(file, w.course_id, w.code, kind);
      if (kind === "worksheet") setW({ ...w, worksheet_url: url, worksheet_name: name });
      else setW({ ...w, answers_url: url, answers_name: name });
    } catch (e: any) {
      setErr(e?.message?.includes("Bucket") ? "Storage bucket missing — run the 2026-06-17_worksheets.sql migration." : (e?.message || "Upload failed."));
    } finally { setBusy(""); }
  }

  async function remove() {
    if (!w || !confirm("Delete this worksheet?")) return;
    await supabase.from("worksheets").delete().eq("id", w.id);
    router.push(`/teacher/courses/${w.course_id}`);
  }

  // Save the edited content, then rebuild the PDFs server-side and republish.
  async function regenerate() {
    if (!w) return;
    setErr(""); setRegen("working");
    try {
      await save(); // persist content + metadata first
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { setRegen(""); return router.push("/login"); }
      const res = await fetch(`/api/worksheets/${w.id}/regenerate`, {
        method: "POST", headers: { Authorization: `Bearer ${session.access_token}` },
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) { setErr(j.error || "Regeneration failed."); setRegen(""); return; }
      setW({ ...w, worksheet_url: j.worksheet_url, answers_url: j.answers_url });
      setRegen("done"); setTimeout(() => setRegen(""), 3000);
    } catch (e: any) {
      setErr(e?.message || "Regeneration failed."); setRegen("");
    }
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Only admins can edit worksheets.</div></main>);
  if (!w) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Worksheet not found.</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "28px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <Link href={`/teacher/courses/${w.course_id}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Back to course</Link>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href={`/worksheets/${w.id}`} target="_blank" style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "9px 15px", fontWeight: 700, fontSize: 14, textDecoration: "none", color: "#0f172a" }}>Preview ↗</Link>
            <button onClick={remove} style={{ background: "#fff", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 9, padding: "9px 15px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Delete</button>
            <button onClick={save} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "9px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{saved ? "Saved ✓" : "Save"}</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12, marginBottom: 14 }}>
          <Field label="Code"><input value={w.code} onChange={(e) => set("code", e.target.value)} style={field} /></Field>
          <Field label="Title"><input value={w.title} onChange={(e) => set("title", e.target.value)} style={field} /></Field>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 18 }}>
          <Field label="Position"><input type="number" value={w.position} onChange={(e) => set("position", Number(e.target.value))} style={{ ...field, width: 90 }} /></Field>
          <label style={{ display: "flex", gap: 8, alignItems: "center", fontWeight: 600, color: "#334155", marginTop: 18 }}>
            <input type="checkbox" checked={w.published} onChange={(e) => set("published", e.target.checked)} /> Published
          </label>
        </div>

        <FileRow label="Worksheet PDF (embedded for students)" url={w.worksheet_url ? (links.ws ?? w.worksheet_url) : null} name={w.worksheet_name}
          busy={busy === "worksheet"} onUpload={(f) => upload(f, "worksheet")} onClear={() => setW({ ...w, worksheet_url: null, worksheet_name: null })} />
        <FileRow label="Answer key / compact PDF (download)" url={w.answers_url ? (links.ans ?? w.answers_url) : null} name={w.answers_name}
          busy={busy === "answers"} onUpload={(f) => upload(f, "answers")} onClear={() => setW({ ...w, answers_url: null, answers_name: null })} />

        {/* LaTeX-source courses: edit the .tex in-browser; rebuild locally with Tectonic. */}
        {w.content?.tex != null && (
          <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#6d28a3", marginBottom: 2 }}>Edit LaTeX source</div>
            <div style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.5, marginBottom: 10 }}>
              Edit the <code>.tex</code> below and click <b>Save</b> (top of page). Then rebuild &amp; republish the PDF locally with:{" "}
              <code style={{ background: "#ede9fe", padding: "1px 6px", borderRadius: 4 }}>node scripts/rebuild-tex.mjs {w.id}</code>
            </div>
            <textarea
              value={w.content.tex}
              onChange={(e) => setW({ ...w, content: { ...w.content, tex: e.target.value } })}
              spellCheck={false}
              style={{ width: "100%", minHeight: 460, boxSizing: "border-box", fontFamily: "JetBrains Mono, ui-monospace, monospace", fontSize: 12.5, lineHeight: 1.5, padding: 12, borderRadius: 8, border: "1px solid #c4b5fd", outline: "none", resize: "vertical", whiteSpace: "pre", overflowWrap: "normal", overflowX: "auto" }}
            />
          </div>
        )}

        {/* Structured courses (MTH1W): form editor + one-click server-side regenerate. */}
        {w.content?.tex == null && w.content && (
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0d5c30", marginBottom: 2 }}>Edit worksheet content</div>
                <div style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.5 }}>
                  Edit the text below. <b>Save</b> stores your changes; <b>Save &amp; Regenerate PDF</b> also rebuilds the printable PDF and republishes it (takes ~10–20&nbsp;s).
                </div>
              </div>
              <button onClick={regenerate} disabled={regen === "working"}
                style={{ flexShrink: 0, background: regen === "done" ? "#16a34a" : "#0d5c30", color: "#fff", border: "none", borderRadius: 9, padding: "10px 16px", fontWeight: 800, fontSize: 13.5, cursor: regen === "working" ? "default" : "pointer", whiteSpace: "nowrap" }}>
                {regen === "working" ? "Rebuilding…" : regen === "done" ? "Rebuilt ✓" : "Save & Regenerate PDF"}
              </button>
            </div>
            <WorksheetContentEditor content={w.content} onChange={(content) => setW({ ...w, content })} />
          </div>
        )}

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: 14, marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#6d28a3", marginBottom: 6 }}>LaTeX source (edit &amp; recompile)</div>
          <div style={{ fontSize: 12.5, color: "#475569", marginBottom: 10, lineHeight: 1.5 }}>
            Download the <code>.tex</code>, edit it (locally or on <a href="https://overleaf.com" target="_blank" rel="noreferrer" style={{ color: "#6d28a3", fontWeight: 700 }}>Overleaf</a>), then run
            {" "}<code style={{ background: "#ede9fe", padding: "1px 5px", borderRadius: 4 }}>node scripts/tex-publish.mjs {w.code}</code> to recompile &amp; republish the PDFs.
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {links.tex && <a href={links.tex} download style={texBtn}>⬇ Worksheet .tex</a>}
            {links.texC && <a href={links.texC} download style={texBtn}>⬇ Compact .tex</a>}
          </div>
        </div>

        {err && <div style={{ color: "#dc2626", fontSize: 13, marginTop: 12 }}>{err}</div>}
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (<div><label style={{ fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 }}>{label}</label>{children}</div>);
}
function FileRow({ label, url, name, busy, onUpload, onClear }: { label: string; url: string | null; name: string | null; busy: boolean; onUpload: (f: File) => void; onClear: () => void }) {
  return (
    <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 14, marginBottom: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 8 }}>{label}</div>
      {url ? (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href={url} target="_blank" rel="noreferrer" style={{ flex: 1, color: "#1b7a44", fontWeight: 700, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>📄 {name || "file.pdf"}</a>
          <label style={ghost}>{busy ? "…" : "Replace"}<input type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])} /></label>
          <button onClick={onClear} style={{ background: "none", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 7, padding: "5px 10px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Remove</button>
        </div>
      ) : (
        <label style={{ display: "inline-block", background: "#e7f6ec", color: "#0d5c30", borderRadius: 9, padding: "8px 15px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
          {busy ? "Uploading…" : "⬆ Upload PDF"}<input type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])} />
        </label>
      )}
    </div>
  );
}
const field: React.CSSProperties = { width: "100%", padding: "9px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
const ghost: React.CSSProperties = { background: "#fff", border: "1px solid #cbd5e1", color: "#334155", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer" };
const texBtn: React.CSSProperties = { background: "#6d28a3", color: "#fff", borderRadius: 9, padding: "8px 15px", fontWeight: 700, fontSize: 13.5, textDecoration: "none" };
