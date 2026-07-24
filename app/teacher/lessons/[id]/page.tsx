"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { BlockRenderer } from "../../../../components/BlockRenderer";
import { RichEditor } from "../../../../components/RichEditor";
import { MaterialsEditor } from "../../../../components/MaterialsEditor";
import { Block, BlockType, BLOCK_LABELS, newBlock } from "../../../../lib/blocks";
import { prepareUpload } from "../../../../lib/uploadFile";

const ALL_TYPES: BlockType[] = ["html", "heading", "text", "math", "image", "graph", "multigraph", "animation", "video", "callout", "pointset"];

export default function LessonEditorPage() {
  const router = useRouter();
  const params = useParams();
  const lessonId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [pdfSupported, setPdfSupported] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      const { data } = await supabase
        .from("lessons")
        .select("title, blocks, published, course_id")
        .eq("id", lessonId)
        .single();
      if (!data) return router.push("/teacher");
      setTitle(data.title ?? "");
      setBlocks(Array.isArray(data.blocks) ? (data.blocks as Block[]) : []);
      setPublished(!!data.published);
      setCourseId(data.course_id);
      // best-effort: pdf columns may not exist yet (migration optional)
      const { data: pdf, error: pdfErr } = await supabase.from("lessons").select("pdf_url, pdf_name").eq("id", lessonId).single();
      if (!pdfErr) {
        setPdfSupported(true);
        setPdfUrl(pdf?.pdf_url ?? "");
        setPdfName(pdf?.pdf_name ?? "");
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

  function patch(id: string, fields: Partial<any>) {
    setBlocks((bs) => bs.map((b) => (b.id === id ? ({ ...b, ...fields } as Block) : b)));
  }
  function add(type: BlockType) {
    setBlocks((bs) => [...bs, newBlock(type)]);
    setShowAdd(false);
  }
  function remove(id: string) {
    setBlocks((bs) => bs.filter((b) => b.id !== id));
  }
  function move(id: string, dir: -1 | 1) {
    setBlocks((bs) => {
      const i = bs.findIndex((b) => b.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= bs.length) return bs;
      const copy = [...bs];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });
  }

  async function save() {
    const payload: any = { title, blocks, published };
    if (pdfSupported) {
      payload.pdf_url = pdfUrl || null;
      payload.pdf_name = pdfName || null;
    }
    await supabase.from("lessons").update(payload).eq("id", lessonId);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  }

  async function uploadPdf(file: File) {
    setUploading(true);
    try {
      const { file: ready } = await prepareUpload(file, { maxMB: 25 });
      const path = `${lessonId}/${Date.now()}-${ready.name.replace(/[^\w.\-]/g, "_")}`;
      const { error } = await supabase.storage.from("lesson-pdfs").upload(path, ready, { upsert: true });
      if (!error) {
        const { data } = supabase.storage.from("lesson-pdfs").getPublicUrl(path);
        setPdfUrl(data.publicUrl);
        setPdfName(ready.name);
      } else {
        alert("Upload failed: " + error.message);
      }
    } catch (e: any) {
      alert(e.message || "Couldn't prepare that file for upload.");
    }
    setUploading(false);
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
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          {courseId && (
            <Link href={`/teacher/courses/${courseId}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              ← Back to course
            </Link>
          )}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}>
              <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} /> Published
            </label>
            <button onClick={save} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              {saved ? "Saved ✓" : "Save"}
            </button>
          </div>
        </div>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Lesson title"
          style={{ width: "100%", fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, border: "none", outline: "none", marginBottom: 14, background: "transparent" }}
        />

        {/* PDF + downloadable materials */}
        <MaterialsEditor ownerType="lesson" ownerId={lessonId} />
        <div style={{ height: 22 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
          {/* EDITOR */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", marginBottom: 12 }}>
              Editor
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {blocks.map((b, i) => (
                <BlockEditor key={b.id} block={b} index={i} count={blocks.length} patch={patch} remove={remove} move={move} />
              ))}
            </div>

            <div style={{ marginTop: 16, position: "relative" }}>
              <button onClick={() => setShowAdd((s) => !s)} style={{ background: "#0f172a", color: "#fff", border: "none", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%" }}>
                + Add block
              </button>
              {showAdd && (
                <div style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: 6, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, boxShadow: "0 12px 40px rgba(15,23,42,0.15)", padding: 8, zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  {ALL_TYPES.map((t) => (
                    <button key={t} onClick={() => add(t)} style={{ textAlign: "left", background: "none", border: "none", padding: "9px 12px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", color: "#334155" }}>
                      {BLOCK_LABELS[t]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* PREVIEW */}
          <div style={{ position: "sticky", top: 80 }}>
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", marginBottom: 12 }}>
              Live preview
            </div>
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, minHeight: 200 }}>
              <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, marginTop: 0 }}>{title || "Untitled lesson"}</h1>
              {blocks.length === 0 ? <p style={{ color: "#94a3b8" }}>Add blocks to see them here.</p> : <BlockRenderer blocks={blocks} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ── Per-block editor ─────────────────────────────────────────
const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
};
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };

function Num({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <div style={{ flex: 1, minWidth: 70 }}>
      <label style={lbl}>{label}</label>
      <input type="number" value={value} onChange={(e) => onChange(parseFloat(e.target.value))} style={fieldStyle} />
    </div>
  );
}

function BlockEditor({
  block,
  index,
  count,
  patch,
  remove,
  move,
}: {
  block: Block;
  index: number;
  count: number;
  patch: (id: string, f: Partial<any>) => void;
  remove: (id: string) => void;
  move: (id: string, d: -1 | 1) => void;
}) {
  const b: any = block;
  const [imgUploading, setImgUploading] = useState(false);
  async function uploadImage(file: File) {
    setImgUploading(true);
    try {
      // In-lesson images are served to every student who opens the lesson, so
      // compressing them cuts stored size and egress on every view.
      const { file: ready } = await prepareUpload(file, { maxMB: 25 });
      const path = `lesson-images/${block.id}/${Date.now()}-${ready.name.replace(/[^\w.\-]/g, "_")}`;
      const { error } = await supabase.storage.from("materials").upload(path, ready, { upsert: true });
      if (!error) {
        const { data } = supabase.storage.from("materials").getPublicUrl(path);
        patch(block.id, { url: data.publicUrl });
      } else {
        alert("Image upload failed: " + error.message);
      }
    } catch (e: any) {
      alert(e.message || "Couldn't prepare that image for upload.");
    }
    setImgUploading(false);
  }
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: "#1b7a44", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {BLOCK_LABELS[block.type]}
        </span>
        <span style={{ display: "flex", gap: 4 }}>
          <IconBtn onClick={() => move(block.id, -1)} disabled={index === 0}>↑</IconBtn>
          <IconBtn onClick={() => move(block.id, 1)} disabled={index === count - 1}>↓</IconBtn>
          <IconBtn onClick={() => remove(block.id)} danger>✕</IconBtn>
        </span>
      </div>

      {block.type === "html" && (
        <RichEditor value={b.html} onChange={(html) => patch(block.id, { html })} />
      )}

      {block.type === "heading" && (
        <div style={{ display: "flex", gap: 8 }}>
          <input value={b.text} onChange={(e) => patch(block.id, { text: e.target.value })} style={fieldStyle} placeholder="Heading text" />
          <select value={b.level} onChange={(e) => patch(block.id, { level: Number(e.target.value) })} style={{ ...fieldStyle, width: 90 }}>
            <option value={2}>H2</option>
            <option value={3}>H3</option>
          </select>
        </div>
      )}

      {block.type === "text" && (
        <textarea value={b.markdown} onChange={(e) => patch(block.id, { markdown: e.target.value })} style={{ ...fieldStyle, minHeight: 90, resize: "vertical" }} />
      )}

      {block.type === "math" && (
        <input value={b.latex} onChange={(e) => patch(block.id, { latex: e.target.value })} style={{ ...fieldStyle, fontFamily: "JetBrains Mono, monospace" }} placeholder="LaTeX, e.g. \\frac{a}{b}" />
      )}

      {block.type === "image" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input value={b.url} onChange={(e) => patch(block.id, { url: e.target.value })} style={{ ...fieldStyle, flex: 1 }} placeholder="Image URL (or upload →)" />
            <label style={{ background: imgUploading ? "#94a3b8" : "#1b7a44", color: "#fff", fontWeight: 700, fontSize: 13, padding: "9px 14px", borderRadius: 8, cursor: imgUploading ? "default" : "pointer", whiteSpace: "nowrap" }}>
              {imgUploading ? "Uploading…" : "⬆ Upload"}
              <input type="file" accept="image/*" style={{ display: "none" }} disabled={imgUploading}
                onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(f); e.target.value = ""; }} />
            </label>
          </div>
          {b.url && <img src={b.url} alt="" style={{ maxWidth: "100%", maxHeight: 160, borderRadius: 8, border: "1px solid #e2e8f0", objectFit: "contain" }} />}
          <input value={b.caption ?? ""} onChange={(e) => patch(block.id, { caption: e.target.value })} style={fieldStyle} placeholder="Caption (optional)" />
        </div>
      )}

      {block.type === "graph" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <label style={lbl}>Expression (use x and the parameter)</label>
            <input value={b.expr} onChange={(e) => patch(block.id, { expr: e.target.value })} style={{ ...fieldStyle, fontFamily: "JetBrains Mono, monospace" }} placeholder="a*sin(x)" />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>Parameter (blank = none)</label>
              <input value={b.param} onChange={(e) => patch(block.id, { param: e.target.value })} style={fieldStyle} placeholder="a" />
            </div>
            <Num label="param min" value={b.paramMin} onChange={(n) => patch(block.id, { paramMin: n })} />
            <Num label="param max" value={b.paramMax} onChange={(n) => patch(block.id, { paramMax: n })} />
            <Num label="start" value={b.paramInit} onChange={(n) => patch(block.id, { paramInit: n })} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Num label="x min" value={b.xMin} onChange={(n) => patch(block.id, { xMin: n })} />
            <Num label="x max" value={b.xMax} onChange={(n) => patch(block.id, { xMax: n })} />
            <Num label="y min" value={b.yMin} onChange={(n) => patch(block.id, { yMin: n })} />
            <Num label="y max" value={b.yMax} onChange={(n) => patch(block.id, { yMax: n })} />
          </div>
        </div>
      )}

      {block.type === "multigraph" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={lbl}>Lines / curves (expressions in x)</label>
          {b.curves.map((cv: any, i: number) => (
            <div key={i} style={{ display: "flex", gap: 6 }}>
              <input
                value={cv.expr}
                onChange={(e) => { const c = [...b.curves]; c[i] = { ...cv, expr: e.target.value }; patch(block.id, { curves: c }); }}
                style={{ ...fieldStyle, flex: 1, fontFamily: "JetBrains Mono, monospace" }}
                placeholder="2*x + 1"
              />
              <input
                value={cv.label ?? ""}
                onChange={(e) => { const c = [...b.curves]; c[i] = { ...cv, label: e.target.value }; patch(block.id, { curves: c }); }}
                style={{ ...fieldStyle, width: 130 }}
                placeholder="label"
              />
              <IconBtn onClick={() => patch(block.id, { curves: b.curves.filter((_: any, j: number) => j !== i) })} danger>✕</IconBtn>
            </div>
          ))}
          <button onClick={() => patch(block.id, { curves: [...b.curves, { expr: "x", label: "" }] })} style={{ alignSelf: "flex-start", background: "#e7f6ec", color: "#1b7a44", border: "none", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            + Add line
          </button>
          <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#334155", marginTop: 4 }}>
            <input type="checkbox" checked={b.markIntersection} onChange={(e) => patch(block.id, { markIntersection: e.target.checked })} /> Mark intersection / solution
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>Parameter (blank = none)</label>
              <input value={b.param} onChange={(e) => patch(block.id, { param: e.target.value })} style={fieldStyle} placeholder="a" />
            </div>
            <Num label="p min" value={b.paramMin} onChange={(n) => patch(block.id, { paramMin: n })} />
            <Num label="p max" value={b.paramMax} onChange={(n) => patch(block.id, { paramMax: n })} />
            <Num label="start" value={b.paramInit} onChange={(n) => patch(block.id, { paramInit: n })} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Num label="x min" value={b.xMin} onChange={(n) => patch(block.id, { xMin: n })} />
            <Num label="x max" value={b.xMax} onChange={(n) => patch(block.id, { xMax: n })} />
            <Num label="y min" value={b.yMin} onChange={(n) => patch(block.id, { yMin: n })} />
            <Num label="y max" value={b.yMax} onChange={(n) => patch(block.id, { yMax: n })} />
          </div>
        </div>
      )}

      {block.type === "animation" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <label style={lbl}>Expression (use x and the animated variable)</label>
            <input value={b.expr} onChange={(e) => patch(block.id, { expr: e.target.value })} style={{ ...fieldStyle, fontFamily: "JetBrains Mono, monospace" }} placeholder="sin(x - a)" />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>Animated variable</label>
              <input value={b.param} onChange={(e) => patch(block.id, { param: e.target.value })} style={fieldStyle} placeholder="a" />
            </div>
            <Num label="from" value={b.from} onChange={(n) => patch(block.id, { from: n })} />
            <Num label="to" value={b.to} onChange={(n) => patch(block.id, { to: n })} />
            <Num label="ms" value={b.durationMs} onChange={(n) => patch(block.id, { durationMs: n })} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Num label="x min" value={b.xMin} onChange={(n) => patch(block.id, { xMin: n })} />
            <Num label="x max" value={b.xMax} onChange={(n) => patch(block.id, { xMax: n })} />
            <Num label="y min" value={b.yMin} onChange={(n) => patch(block.id, { yMin: n })} />
            <Num label="y max" value={b.yMax} onChange={(n) => patch(block.id, { yMax: n })} />
          </div>
        </div>
      )}

      {block.type === "video" && (
        <input value={b.url} onChange={(e) => patch(block.id, { url: e.target.value })} style={fieldStyle} placeholder="YouTube URL" />
      )}

      {block.type === "callout" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <select value={b.variant} onChange={(e) => patch(block.id, { variant: e.target.value })} style={fieldStyle}>
            <option value="note">Note</option>
            <option value="tip">Tip</option>
            <option value="warning">Watch out</option>
            <option value="example">Example</option>
          </select>
          <textarea value={b.text} onChange={(e) => patch(block.id, { text: e.target.value })} style={{ ...fieldStyle, minHeight: 70, resize: "vertical" }} />
        </div>
      )}

      {block.type === "pointset" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <label style={lbl}>x-axis label</label>
              <input value={b.xLabel} onChange={(e) => patch(block.id, { xLabel: e.target.value })} style={fieldStyle} placeholder="x" />
            </div>
            <div style={{ flex: 1 }}>
              <label style={lbl}>y-axis label</label>
              <input value={b.yLabel} onChange={(e) => patch(block.id, { yLabel: e.target.value })} style={fieldStyle} placeholder="y" />
            </div>
          </div>
          <label style={lbl}>Points (x, y)</label>
          {b.points.map((pt: any, i: number) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <input type="number" value={pt.x} onChange={(e) => { const p = [...b.points]; p[i] = { ...pt, x: parseFloat(e.target.value) }; patch(block.id, { points: p }); }} style={{ ...fieldStyle, flex: 1 }} placeholder="x" />
              <input type="number" value={pt.y} onChange={(e) => { const p = [...b.points]; p[i] = { ...pt, y: parseFloat(e.target.value) }; patch(block.id, { points: p }); }} style={{ ...fieldStyle, flex: 1 }} placeholder="y" />
              <IconBtn onClick={() => patch(block.id, { points: b.points.filter((_: any, j: number) => j !== i) })} danger>✕</IconBtn>
            </div>
          ))}
          <button onClick={() => patch(block.id, { points: [...b.points, { x: 0, y: 0 }] })} style={{ alignSelf: "flex-start", background: "#e7f6ec", color: "#1b7a44", border: "none", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            + Add point
          </button>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
            <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#334155" }}>
              <input type="checkbox" checked={b.showTable} onChange={(e) => patch(block.id, { showTable: e.target.checked })} /> Show table
            </label>
            <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#334155" }}>
              <input type="checkbox" checked={b.showPlot} onChange={(e) => patch(block.id, { showPlot: e.target.checked })} /> Show plot
            </label>
            <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#334155" }}>
              <input type="checkbox" checked={b.bestFit} onChange={(e) => patch(block.id, { bestFit: e.target.checked })} /> Line of best fit
            </label>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Num label="x min" value={b.xMin} onChange={(n) => patch(block.id, { xMin: n })} />
            <Num label="x max" value={b.xMax} onChange={(n) => patch(block.id, { xMax: n })} />
            <Num label="y min" value={b.yMin} onChange={(n) => patch(block.id, { yMin: n })} />
            <Num label="y max" value={b.yMax} onChange={(n) => patch(block.id, { yMax: n })} />
          </div>
          <input value={b.caption ?? ""} onChange={(e) => patch(block.id, { caption: e.target.value })} style={fieldStyle} placeholder="Caption (optional)" />
        </div>
      )}
    </div>
  );
}

function IconBtn({ children, onClick, disabled, danger }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 28,
        height: 28,
        borderRadius: 7,
        border: "1px solid #e2e8f0",
        background: "#fff",
        color: danger ? "#dc2626" : "#475569",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        fontSize: 13,
        fontWeight: 700,
      }}
    >
      {children}
    </button>
  );
}
