"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import katex from "katex";
import { renderAll, type BoardData, type Pt, type Shape } from "../../../lib/wbdraw";
import { getBoard, subscribeBoard, appendBoardShape } from "../../../lib/whiteboards";
import { supabase } from "../../../lib/supabase";

const GUEST_COLORS = ["#111827", "#dc2626", "#1d4ed8", "#1b7a44", "#ea580c", "#7c3aed"];
const GUEST_WIDTHS = [2, 4, 7];
const HL_COLOR = "#fde047";

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
  const [status, setStatus] = useState<"loading" | "ok" | "ended" | "missing">("loading");
  const [title, setTitle] = useState("");
  const [drawOpen, setDrawOpen] = useState(false);
  const [tool, setTool] = useState<"view" | "pen" | "highlight">("view");
  const [color, setColor] = useState(GUEST_COLORS[1]);
  const [width, setWidth] = useState(GUEST_WIDTHS[1]);
  const [, setTick] = useState(0);

  const paint = useCallback(() => {
    const ctx = ctxRef.current, d = dataRef.current;
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    if (!d) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); return; }
    const base = d.pages?.[d.active ?? 0] ?? [];
    const list = curRef.current ? [...base, curRef.current] : base;
    renderAll(ctx, list, d.bg ?? "grid", w, h, paint);
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
    paint();
  }, [paint]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const wb = await getBoard(id);
      if (!wb) { setStatus("missing"); return; }
      setTitle(wb.title);
      dataRef.current = wb.data;
      setStatus(wb.is_live ? "ok" : "ended");
      setDrawOpen(wb.draw_open);
      paint(); setTick((t) => t + 1);
      cleanup = subscribeBoard(id, (data, isLive, nextDrawOpen) => {
        dataRef.current = data;
        setStatus(isLive ? "ok" : "ended");
        setDrawOpen(nextDrawOpen);
        paint(); setTick((t) => t + 1);
      });
    })();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    resize();
    return () => { cleanup?.(); ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function pos(e: React.PointerEvent): Pt {
    const r = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  function onDown(e: React.PointerEvent) {
    if (tool === "view" || !drawOpen) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drawingRef.current = true;
    const p = pos(e);
    curRef.current = tool === "highlight" ? { t: "hl", pts: [p], c: HL_COLOR, w: Math.max(14, width * 6) } : { t: "pen", pts: [p], c: color, w: width };
  }
  function onMove(e: React.PointerEvent) {
    if (!drawingRef.current) return;
    const cur = curRef.current;
    if (!cur || (cur.t !== "pen" && cur.t !== "hl")) return;
    cur.pts.push(pos(e));
    paint();
  }
  async function onUp() {
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

  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#0f172a" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", color: "#e2e8f0", borderBottom: "1px solid #334155" }}>
        <span style={{ fontWeight: 800, fontSize: 16 }}>{title || "Live whiteboard"}</span>
        {status === "ok" && <span style={{ fontSize: 12, fontWeight: 700, color: "#04130a", background: "#34d27f", padding: "3px 10px", borderRadius: 999 }}>🟢 LIVE</span>}
        {status === "ended" && <span style={{ fontSize: 12, fontWeight: 700, color: "#fde68a" }}>Session not live</span>}
        <span style={{ flex: 1 }} />
        {drawOpen ? (
          <>
            <button onClick={() => setTool((t) => (t === "pen" ? "view" : "pen"))} title="Pen" style={guestBtn(tool === "pen")}>✏️ Pen</button>
            <button onClick={() => setTool((t) => (t === "highlight" ? "view" : "highlight"))} title="Highlighter" style={guestBtn(tool === "highlight")}>🖍 Highlight</button>
            {tool === "pen" && GUEST_COLORS.map((c) => (
              <button key={c} onClick={() => setColor(c)} title={c} style={{ width: 20, height: 20, borderRadius: 999, background: c, border: color === c ? "2px solid #fff" : "1px solid #334155", cursor: "pointer", padding: 0 }} />
            ))}
            {tool === "pen" && GUEST_WIDTHS.map((wv) => (
              <button key={wv} onClick={() => setWidth(wv)} title={`${wv}px`} style={guestBtn(width === wv)}>{wv}</button>
            ))}
          </>
        ) : (
          <span style={{ fontSize: 12, color: "#94a3b8" }}>View only · updates in real time</span>
        )}
      </div>
      <div ref={wrapRef} style={{ position: "relative", flex: 1, overflow: "hidden" }}>
        <canvas
          ref={canvasRef}
          style={{ display: "block", background: "#fff", touchAction: drawOpen && tool !== "view" ? "none" : "auto", cursor: drawOpen && tool !== "view" ? "crosshair" : "default" }}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
        />
        {(dataRef.current?.pages?.[dataRef.current.active ?? 0] ?? []).map((s, i) => s.t === "math" ? (
          <div key={"m" + i} style={{ position: "absolute", left: s.x, top: s.y, color: s.c, fontSize: s.size, lineHeight: 1, pointerEvents: "none", whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: katexHtml(s.latex) }} />
        ) : null)}
        {status === "loading" && <Overlay>Loading…</Overlay>}
        {status === "missing" && <Overlay>This board isn't available.</Overlay>}
        {status === "ended" && !dataRef.current && <Overlay>The teacher hasn't started this session yet.</Overlay>}
      </div>
    </main>
  );
}

function guestBtn(active: boolean): React.CSSProperties {
  return { padding: "5px 9px", borderRadius: 7, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12, color: active ? "#04130a" : "#e2e8f0", background: active ? "#34d27f" : "#1e293b" };
}

function Overlay({ children }: { children: React.ReactNode }) {
  return <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#64748b", fontSize: 16, pointerEvents: "none" }}>{children}</div>;
}
function FullMsg({ children }: { children: React.ReactNode }) {
  return <main style={{ height: "100vh", display: "grid", placeItems: "center", background: "#0f172a", color: "#94a3b8", fontSize: 16 }}>{children}</main>;
}
