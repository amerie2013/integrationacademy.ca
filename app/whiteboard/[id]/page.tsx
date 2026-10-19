"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import katex from "katex";
import { renderAll, fitView, IDENTITY, type BoardData, type Pt, type Shape, type View } from "../../../lib/wbdraw";
import { getBoard, subscribeBoard, appendBoardShape } from "../../../lib/whiteboards";
import { supabase } from "../../../lib/supabase";
import { Icon } from "../../../components/WhiteboardIcons";

const GUEST_COLORS = ["#111827", "#dc2626", "#1d4ed8", "#1b7a44", "#ea580c", "#7c3aed"];
const GUEST_WIDTHS = [2, 4, 7];
const HL_COLOR = "#fde047";
const ZMIN = 0.1, ZMAX = 8;

// Load the full editor only when it's actually needed (the board's owner), so
// students who are just watching don't download the editor bundle.
const WhiteboardEditor = dynamic(
  () => import("../../../components/Whiteboard").then((m) => m.Whiteboard),
  { ssr: false, loading: () => <FullMsg>Loading editor…</FullMsg> },
);

function katexHtml(latex: string): string { try { return katex.renderToString(latex, { throwOnError: false }); } catch { return latex; } }

/**
 * The share route is owner-aware: the board's owner (the teacher) gets the full
 * editor — including inserting/annotating images — so opening the live link keeps
 * them editing; everyone else gets the real-time live view, which becomes
 * drawable (pen + highlighter) whenever the owner turns "Students can draw" on.
 */
export default function LiveWhiteboardPage() {
  const id = useParams().id as string;
  const [role, setRole] = useState<"unknown" | "owner" | "viewer">("unknown");

  useEffect(() => {
    let alive = true;
    (async () => {
      const [{ data: { session } }, wb] = await Promise.all([supabase.auth.getSession(), getBoard(id)]);
      if (!alive) return;
      setRole(wb && session?.user?.id && session.user.id === wb.owner_id ? "owner" : "viewer");
    })();
    return () => { alive = false; };
  }, [id]);

  if (role === "unknown") return <FullMsg>Loading…</FullMsg>;
  if (role === "owner") return <main style={{ height: "100vh" }}><WhiteboardEditor initialBoardId={id} /></main>;
  return <SharedBoardViewer id={id} />;
}

function SharedBoardViewer({ id }: { id: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dpr = useRef(1);
  const sizeRef = useRef({ w: 0, h: 0 });
  const dataRef = useRef<BoardData | null>(null);
  const curRef = useRef<Shape | null>(null);
  const drawingRef = useRef(false);
  // Zoom/pan: by default the view follows the teacher's (the world rect they
  // have on screen, synced in BoardData.view); zooming or panning yourself
  // detaches it until "Follow teacher" is clicked.
  const viewRef = useRef<View>({ ...IDENTITY });
  const followRef = useRef(true);
  const panRef = useRef<{ sx: number; sy: number; vx: number; vy: number } | null>(null);
  const ptrsRef = useRef(new Map<number, Pt>());
  const pinchRef = useRef<{ d0: number; z0: number; wx: number; wy: number } | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "ended" | "missing">("loading");
  const [title, setTitle] = useState("");
  const [drawOpen, setDrawOpen] = useState(false);
  const [tool, setTool] = useState<"view" | "pen" | "highlight">("view");
  const [color, setColor] = useState(GUEST_COLORS[1]);
  const [width, setWidth] = useState(GUEST_WIDTHS[1]);
  const [, setTick] = useState(0);
  const tick = () => setTick((t) => t + 1);

  const applyFollow = useCallback(() => {
    if (!followRef.current) return;
    const r = dataRef.current?.view, { w, h } = sizeRef.current;
    viewRef.current = r && w ? fitView(r, w, h, 0, ZMAX) : { ...IDENTITY };
  }, []);

  const paint = useCallback(() => {
    const ctx = ctxRef.current, d = dataRef.current;
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    if (!d) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); return; }
    const base = d.pages?.[d.active ?? 0] ?? [];
    const list = curRef.current ? [...base, curRef.current] : base;
    renderAll(ctx, list, d.bg ?? "grid", w, h, paint, viewRef.current);
  }, []);

  const resize = useCallback(() => {
    const c = canvasRef.current, wrap = wrapRef.current;
    if (!c || !wrap) return;
    const r = wrap.getBoundingClientRect();
    dpr.current = window.devicePixelRatio || 1;
    c.width = Math.round(r.width * dpr.current); c.height = Math.round(r.height * dpr.current);
    c.style.width = r.width + "px"; c.style.height = r.height + "px";
    const ctx = c.getContext("2d")!; ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0);
    ctxRef.current = ctx; sizeRef.current = { w: r.width, h: r.height };
    applyFollow(); paint(); setTick((t) => t + 1);
  }, [paint, applyFollow]);

  function setView(v: View) { viewRef.current = v; followRef.current = false; paint(); tick(); }
  function zoomAt(sx: number, sy: number, f: number) {
    const v = viewRef.current, z = Math.min(ZMAX, Math.max(ZMIN, v.z * f));
    const wx = (sx - v.x) / v.z, wy = (sy - v.y) / v.z;
    setView({ z, x: sx - wx * z, y: sy - wy * z });
  }
  function zoomCenter(f: number) { const { w, h } = sizeRef.current; zoomAt(w / 2, h / 2, f); }
  function follow() { followRef.current = true; applyFollow(); paint(); tick(); }

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const wb = await getBoard(id);
      if (!wb) { setStatus("missing"); return; }
      setTitle(wb.title);
      dataRef.current = wb.data;
      setStatus(wb.is_live ? "ok" : "ended");
      setDrawOpen(wb.draw_open);
      applyFollow(); paint(); tick();
      cleanup = subscribeBoard(id, (data, isLive, nextDrawOpen) => {
        dataRef.current = data;
        setStatus(isLive ? "ok" : "ended");
        setDrawOpen(nextDrawOpen);
        applyFollow(); paint(); tick();
      });
    })();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    resize();
    // wheel pans; Ctrl + wheel (or trackpad pinch) zooms at the cursor
    const el = wrapRef.current;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : 1, r = el!.getBoundingClientRect();
      if (e.ctrlKey || e.metaKey) zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * unit * 0.0025));
      else { const v = viewRef.current; setView({ ...v, x: v.x - e.deltaX * unit, y: v.y - e.deltaY * unit }); }
    };
    el?.addEventListener("wheel", onWheel, { passive: false });
    return () => { cleanup?.(); ro.disconnect(); el?.removeEventListener("wheel", onWheel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function local(e: React.PointerEvent): Pt {
    const r = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  function pos(e: React.PointerEvent): Pt {
    const l = local(e), v = viewRef.current;
    return { x: (l.x - v.x) / v.z, y: (l.y - v.y) / v.z };
  }
  function onDown(e: React.PointerEvent) {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    ptrsRef.current.set(e.pointerId, local(e));
    if (ptrsRef.current.size === 2) {
      // second finger: drop the stroke and pinch-zoom instead
      drawingRef.current = false; curRef.current = null; panRef.current = null;
      const [a, b] = [...ptrsRef.current.values()], v = viewRef.current;
      const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2;
      pinchRef.current = { d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: v.z, wx: (cx - v.x) / v.z, wy: (cy - v.y) / v.z };
      paint(); return;
    }
    if (tool === "view" || !drawOpen || e.button === 1) { panRef.current = { sx: e.clientX, sy: e.clientY, vx: viewRef.current.x, vy: viewRef.current.y }; return; }
    drawingRef.current = true;
    const p = pos(e);
    curRef.current = tool === "highlight" ? { t: "hl", pts: [p], c: HL_COLOR, w: Math.max(14, width * 6) } : { t: "pen", pts: [p], c: color, w: width };
  }
  function onMove(e: React.PointerEvent) {
    if (ptrsRef.current.has(e.pointerId)) ptrsRef.current.set(e.pointerId, local(e));
    const pinch = pinchRef.current;
    if (pinch && ptrsRef.current.size >= 2) {
      const [a, b] = [...ptrsRef.current.values()];
      const z = Math.min(ZMAX, Math.max(ZMIN, (pinch.z0 * Math.hypot(a.x - b.x, a.y - b.y)) / pinch.d0));
      const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2;
      setView({ z, x: cx - pinch.wx * z, y: cy - pinch.wy * z });
      return;
    }
    const pan = panRef.current;
    if (pan) {
      if (Math.abs(e.clientX - pan.sx) + Math.abs(e.clientY - pan.sy) > 2) setView({ z: viewRef.current.z, x: pan.vx + e.clientX - pan.sx, y: pan.vy + e.clientY - pan.sy });
      return;
    }
    if (!drawingRef.current) return;
    const cur = curRef.current;
    if (!cur || (cur.t !== "pen" && cur.t !== "hl")) return;
    cur.pts.push(pos(e));
    paint();
  }
  async function onUp(e: React.PointerEvent) {
    ptrsRef.current.delete(e.pointerId);
    if (pinchRef.current) { if (ptrsRef.current.size < 2) pinchRef.current = null; return; }
    if (panRef.current) { panRef.current = null; return; }
    if (!drawingRef.current) return;
    drawingRef.current = false;
    const cur = curRef.current; curRef.current = null;
    if (!cur || (cur.t !== "pen" && cur.t !== "hl") || cur.pts.length < 2) { paint(); return; }
    const d = dataRef.current;
    const pageIdx = d?.active ?? 0;
    // Show it immediately (don't wait on the round trip) — the next realtime
    // update will replace this with the server's canonical merged state,
    // which by then includes this same shape, so nothing visibly changes.
    if (d) { const pages = d.pages.slice(); pages[pageIdx] = [...(pages[pageIdx] ?? []), cur]; dataRef.current = { ...d, pages }; }
    paint();
    await appendBoardShape(id, pageIdx, cur);
  }

  const v = viewRef.current;
  const drawing = drawOpen && tool !== "view";
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#0b1220", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{VIEWER_CSS}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", color: "#e2e8f0", borderBottom: "1px solid #1e293b", flexWrap: "wrap", minHeight: 50 }}>
        <span style={{ fontWeight: 600, fontSize: 15 }}>{title || "Live whiteboard"}</span>
        {status === "ok" && <span className="wv-live"><span className="wv-dot" />Live</span>}
        {status === "ended" && <span style={{ fontSize: 12, fontWeight: 500, color: "#fbbf24" }}>Session not live</span>}
        <span style={{ flex: 1 }} />
        {drawOpen ? (
          <>
            <button type="button" onClick={() => setTool("view")} className="wv-btn" data-on={tool === "view" || undefined} title="Move around the board"><Icon name="hand" size={16} />Pan</button>
            <button type="button" onClick={() => setTool("pen")} className="wv-btn" data-on={tool === "pen" || undefined} title="Pen"><Icon name="pen" size={16} />Pen</button>
            <button type="button" onClick={() => setTool("highlight")} className="wv-btn" data-on={tool === "highlight" || undefined} title="Highlighter"><Icon name="highlighter" size={16} />Highlight</button>
            {tool === "pen" && <span className="wv-sep" />}
            {tool === "pen" && GUEST_COLORS.map((c) => (
              <button type="button" key={c} onClick={() => setColor(c)} aria-label={`Colour ${c}`} className="wv-swatch" data-on={color === c || undefined} style={{ background: c }} />
            ))}
            {tool === "pen" && <span className="wv-sep" />}
            {tool === "pen" && GUEST_WIDTHS.map((wv) => (
              <button type="button" key={wv} onClick={() => setWidth(wv)} aria-label={`Stroke ${wv}px`} className="wv-btn" data-on={width === wv || undefined} style={{ minWidth: 32, padding: 0 }}>
                <span style={{ display: "block", width: 16, height: wv, borderRadius: 4, background: "currentColor" }} />
              </button>
            ))}
          </>
        ) : (
          <span style={{ fontSize: 12, color: "#94a3b8", display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="eye" size={15} />View only · updates in real time</span>
        )}
      </div>
      <div ref={wrapRef} style={{ position: "relative", flex: 1, overflow: "hidden", touchAction: "none" }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", background: "#fff", cursor: drawing ? "crosshair" : "grab" }}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        />
        <div style={{ position: "absolute", left: 0, top: 0, transform: `translate(${v.x}px, ${v.y}px) scale(${v.z})`, transformOrigin: "0 0", pointerEvents: "none" }}>
          {(dataRef.current?.pages?.[dataRef.current.active ?? 0] ?? []).map((s, i) => s.t === "math" ? (
            <div key={"m" + i} style={{ position: "absolute", left: s.x, top: s.y, color: s.c, fontSize: s.size, lineHeight: 1, whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: katexHtml(s.latex) }} />
          ) : null)}
        </div>
        {(status === "ok" || (status === "ended" && dataRef.current)) && (
          <div className="wv-dock">
            <button type="button" className="wv-btn" onClick={() => zoomCenter(0.8)} aria-label="Zoom out"><Icon name="minus" size={16} /></button>
            <span style={{ minWidth: 46, textAlign: "center", fontSize: 13, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{Math.round(v.z * 100)}%</span>
            <button type="button" className="wv-btn" onClick={() => zoomCenter(1.25)} aria-label="Zoom in"><Icon name="plus" size={16} /></button>
            <span className="wv-sep" />
            <button type="button" className="wv-btn" data-on={followRef.current || undefined} onClick={follow} title="Show what the teacher is showing"><Icon name="eye" size={16} />Follow teacher</button>
          </div>
        )}
        {status === "loading" && <Overlay>Loading…</Overlay>}
        {status === "missing" && <Overlay>This board isn&apos;t available.</Overlay>}
        {status === "ended" && !dataRef.current && <Overlay>The teacher hasn&apos;t started this session yet.</Overlay>}
      </div>
    </main>
  );
}

const VIEWER_CSS = `
.wv-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 32px; min-width: 32px; padding: 0 10px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: #cbd5e1; font: 500 13px 'Inter', system-ui, sans-serif; cursor: pointer; }
.wv-btn:hover { background: #1e293b; color: #f8fafc; }
.wv-btn[data-on="true"] { background: #1b7a44; color: #fff; }
.wv-sep { width: 1px; height: 20px; background: #26334d; margin: 0 4px; }
.wv-swatch { width: 20px; height: 20px; border-radius: 50%; border: none; padding: 0; cursor: pointer; box-shadow: inset 0 0 0 1px rgba(255,255,255,.22); }
.wv-swatch[data-on="true"] { box-shadow: 0 0 0 2px #0b1220, 0 0 0 4px #34d27f; }
.wv-live { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #fecaca; background: rgba(239,68,68,.14); border: 1px solid rgba(239,68,68,.4); padding: 3px 10px; border-radius: 999px; }
.wv-dot { width: 7px; height: 7px; border-radius: 50%; background: #ef4444; }
.wv-dock { position: absolute; left: 12px; bottom: 12px; display: flex; align-items: center; gap: 2px; padding: 4px; color: #e2e8f0; background: rgba(15,23,42,.97); border: 1px solid #26334d; border-radius: 12px; box-shadow: 0 10px 30px rgba(2,6,23,.28); }
`;

function Overlay({ children }: { children: React.ReactNode }) {
  return <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#64748b", fontSize: 16, pointerEvents: "none" }}>{children}</div>;
}
function FullMsg({ children }: { children: React.ReactNode }) {
  return <main style={{ height: "100vh", display: "grid", placeItems: "center", background: "#0b1220", color: "#94a3b8", fontSize: 16 }}>{children}</main>;
}
