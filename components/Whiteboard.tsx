"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import katex from "katex";
import { supabase } from "../lib/supabase";
import { MathField } from "./MathField";
import { renderAll, type Pt, type Shape, type Bg, type BoardData } from "../lib/wbdraw";
import { listMine, getBoard, createBoard, saveBoard, type WB } from "../lib/whiteboards";

type Tool = "move" | "pen" | "line" | "arrow" | "rect" | "ellipse" | "text" | "math" | "eraseObj" | "eraseArea";

const COLORS = ["#111827", "#dc2626", "#1d4ed8", "#1b7a44", "#ea580c", "#7c3aed", "#0d9488", "#db2777"];
const WIDTHS = [2, 4, 7];
const SYMBOLS = ["×", "÷", "π", "√", "²", "³", "≤", "≥", "≠", "±", "∞", "θ", "Δ", "°", "∫", "Σ", "→", "½"];

export function Whiteboard({ initialBoardId }: { initialBoardId?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dpr = useRef(1);

  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState(COLORS[0]);
  const [width, setWidth] = useState(WIDTHS[1]);
  const [bg, setBg] = useState<Bg>("grid");
  const bgRef = useRef<Bg>("grid");
  bgRef.current = bg;

  // pages + per-page undo history
  const pagesRef = useRef<Shape[][]>([[]]);
  const pageRef = useRef(0);
  const histRef = useRef<{ h: Shape[][]; i: number }[]>([{ h: [[]], i: 0 }]);
  const [, force] = useState(0);
  const rerender = () => force((n) => n + 1);

  // save / live
  const [userId, setUserId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);
  const boardIdRef = useRef<string | null>(null);
  boardIdRef.current = boardId;
  const [title, setTitle] = useState("Untitled board");
  const [live, setLive] = useState(false);
  const liveRef = useRef(false);
  liveRef.current = live;
  const [saveMsg, setSaveMsg] = useState("");
  const [showOpen, setShowOpen] = useState(false);
  const [myBoards, setMyBoards] = useState<WB[]>([]);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // embedded graphing calculator panel (draggable + resizable)
  const [showGraph, setShowGraph] = useState(false);
  const [graphPos, setGraphPos] = useState(() => ({ x: typeof window !== "undefined" && window.innerWidth < 600 ? 8 : 90, y: 90 }));
  const [graphSize, setGraphSize] = useState(() => {
    const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
    const vh = typeof window !== "undefined" ? window.innerHeight : 768;
    return { w: Math.min(520, vw - 24), h: Math.min(580, vh - 160) };
  });
  const [graphBusy, setGraphBusy] = useState(false); // disable iframe mouse while dragging/resizing
  const dragRef = useRef<{ dx: number; dy: number } | null>(null);
  const rzRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null);
  const graphFrameRef = useRef<HTMLIFrameElement>(null);
  const imgRzRef = useRef<{ idx: number; sx: number; w: number; h: number; ratio: number } | null>(null);

  const drawingRef = useRef(false);
  const curRef = useRef<Shape | null>(null);
  const moveRef = useRef<{ idx: number; last: Pt } | null>(null);
  const movedRef = useRef(false);
  const editTargetRef = useRef<number | null>(null); // index of the text/math shape being re-edited
  const [editing, setEditing] = useState<Pt | null>(null);
  const [textVal, setTextVal] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);
  const [mathEdit, setMathEdit] = useState<Pt | null>(null);
  const [mathLatex, setMathLatex] = useState("");
  const [selIdx, setSelIdx] = useState<number | null>(null); // selected item (Move tool)

  const shapes = () => pagesRef.current[pageRef.current];
  const dims = () => { const c = canvasRef.current!; return { w: c.width / dpr.current, h: c.height / dpr.current }; };

  function redraw() {
    const ctx = ctxRef.current; if (!ctx) return;
    const { w, h } = dims();
    const list = curRef.current ? [...shapes(), curRef.current] : shapes();
    renderAll(ctx, list, bgRef.current, w, h, redraw);
  }

  const resize = useCallback(() => {
    const c = canvasRef.current, wrap = wrapRef.current;
    if (!c || !wrap) return;
    const r = wrap.getBoundingClientRect();
    dpr.current = window.devicePixelRatio || 1;
    c.width = Math.round(r.width * dpr.current); c.height = Math.round(r.height * dpr.current);
    c.style.width = r.width + "px"; c.style.height = r.height + "px";
    const ctx = c.getContext("2d")!; ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0);
    ctxRef.current = ctx; redraw();
  }, []);

  useEffect(() => {
    resize();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    supabase.auth.getSession().then(({ data: { session } }) => setUserId(session?.user.id ?? null));
    if (initialBoardId) loadBoard(initialBoardId);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => { redraw(); /* eslint-disable-next-line */ }, [bg]);

  // ---- history / commit ----
  function snapshot(): BoardData { return { pages: pagesRef.current, active: pageRef.current, bg: bgRef.current }; }
  function scheduleSync() {
    if (!boardIdRef.current) return;
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => { saveBoard(boardIdRef.current!, { data: snapshot() }); }, 350);
  }
  function commit(next: Shape[]) {
    const pi = pageRef.current;
    pagesRef.current[pi] = next;
    const hp = histRef.current[pi];
    hp.h = hp.h.slice(0, hp.i + 1); hp.h.push(next); hp.i = hp.h.length - 1;
    redraw(); scheduleSync(); rerender();
  }
  function undo() { const hp = histRef.current[pageRef.current]; if (hp.i > 0) { hp.i--; pagesRef.current[pageRef.current] = hp.h[hp.i]; redraw(); scheduleSync(); rerender(); } }
  function redo() { const hp = histRef.current[pageRef.current]; if (hp.i < hp.h.length - 1) { hp.i++; pagesRef.current[pageRef.current] = hp.h[hp.i]; redraw(); scheduleSync(); rerender(); } }
  function clearAll() { if (shapes().length) commit([]); }

  // ---- pages ----
  function addPage() { pagesRef.current.push([]); histRef.current.push({ h: [[]], i: 0 }); pageRef.current = pagesRef.current.length - 1; redraw(); scheduleSync(); rerender(); }
  function gotoPage(i: number) { if (i < 0 || i >= pagesRef.current.length) return; pageRef.current = i; redraw(); scheduleSync(); rerender(); }
  function delPage() {
    if (pagesRef.current.length <= 1) { commit([]); return; }
    pagesRef.current.splice(pageRef.current, 1); histRef.current.splice(pageRef.current, 1);
    pageRef.current = Math.max(0, pageRef.current - 1); redraw(); scheduleSync(); rerender();
  }

  // ---- save / open / live ----
  async function loadBoard(id: string) {
    const wb = await getBoard(id);
    if (!wb) return;
    const d = wb.data || ({} as BoardData);
    pagesRef.current = d.pages?.length ? d.pages : [[]];
    histRef.current = pagesRef.current.map((p) => ({ h: [p], i: 0 }));
    pageRef.current = Math.min(d.active ?? 0, pagesRef.current.length - 1);
    setBoardId(wb.id); setTitle(wb.title); setLive(wb.is_live);
    setBg(d.bg ?? "grid"); bgRef.current = d.bg ?? "grid";
    redraw(); rerender();
  }
  async function doSave() {
    if (!userId) { setSaveMsg("⚠ Sign in first to save boards"); setTimeout(() => setSaveMsg(""), 3500); return; }
    setSaveMsg("Saving…");
    if (boardIdRef.current) { await saveBoard(boardIdRef.current, { title, data: snapshot() }); }
    else { const { id, error } = await createBoard(title, snapshot()); if (error) { setSaveMsg(error.includes("relation") ? "Run the whiteboards migration." : error); return; } setBoardId(id!); }
    setSaveMsg(`✓ "${title}" saved to your account — reopen via 📂 Open`); setTimeout(() => setSaveMsg(""), 3500);
  }
  async function openPanel() {
    const { items } = await listMine(); setMyBoards(items); setShowOpen(true);
  }
  async function toggleLive() {
    if (!userId) { setSaveMsg("Sign in to go live."); return; }
    let id = boardIdRef.current;
    if (!id) { const r = await createBoard(title, snapshot()); if (r.error) { setSaveMsg(r.error.includes("relation") ? "Run the whiteboards migration." : r.error); return; } id = r.id!; setBoardId(id); }
    const next = !liveRef.current;
    await saveBoard(id, { is_live: next, data: snapshot() });
    setLive(next);
  }
  const shareUrl = boardId && typeof window !== "undefined" ? `${window.location.origin}/whiteboard/${boardId}` : "";

  // ---- pointer ----
  function ptAt(clientX: number, clientY: number): Pt { const r = canvasRef.current!.getBoundingClientRect(); return { x: clientX - r.left, y: clientY - r.top }; }
  function pos(e: React.PointerEvent): Pt { return ptAt(e.clientX, e.clientY); }
  // double-click an existing text/math item to edit its content in place (like a Word text box)
  function onDouble(e: React.MouseEvent) {
    if (editing || mathEdit) return;
    const p = ptAt(e.clientX, e.clientY);
    const arr = shapes();
    for (let i = arr.length - 1; i >= 0; i--) {
      const s = arr[i];
      if (s.t === "math" && hitShape(p, s)) { editTargetRef.current = i; setColor(s.c); setMathEdit({ x: s.x, y: s.y }); setMathLatex(s.latex); return; }
      if (s.t === "text" && hitShape(p, s)) { editTargetRef.current = i; setColor(s.c); setEditing({ x: s.x, y: s.y }); setTextVal(s.s); setTimeout(() => textInputRef.current?.focus(), 0); return; }
    }
  }
  function distSeg(p: Pt, a: Pt, b: Pt) { const dx = b.x - a.x, dy = b.y - a.y, len = dx * dx + dy * dy || 1; let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len; t = Math.max(0, Math.min(1, t)); return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy)); }
  function eraseAt(p: Pt) {
    const th = 12;
    const keep = shapes().filter((s) => {
      if (s.t === "pen") return !s.pts.some((q) => Math.hypot(q.x - p.x, q.y - p.y) < th + s.w);
      if (s.t === "line" || s.t === "arrow") return distSeg(p, s.a, s.b) > th + s.w;
      if (s.t === "rect" || s.t === "ellipse") { const x0 = Math.min(s.a.x, s.b.x) - th, x1 = Math.max(s.a.x, s.b.x) + th, y0 = Math.min(s.a.y, s.b.y) - th, y1 = Math.max(s.a.y, s.b.y) + th; return !(p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1); }
      if (s.t === "text") { const w = (s.s.length * s.size) * 0.5; return !(p.x >= s.x - th && p.x <= s.x + w + th && p.y >= s.y - th && p.y <= s.y + s.size + th); }
      if (s.t === "math") { const w = (s.latex.length * s.size) * 0.45; return !(p.x >= s.x - th && p.x <= s.x + w + th && p.y >= s.y - th && p.y <= s.y + s.size * 1.4 + th); }
      if (s.t === "image") { return !(p.x >= s.x - th && p.x <= s.x + s.w + th && p.y >= s.y - th && p.y <= s.y + s.h + th); }
      return true;
    });
    if (keep.length !== shapes().length) { pagesRef.current[pageRef.current] = keep; redraw(); rerender(); }
  }
  // remove only overlay shapes (math / text) under the cursor — used by the area eraser,
  // since those aren't canvas ink and can't be rubbed out pixel-by-pixel.
  function eraseOverlaysAt(p: Pt) {
    const th = 12;
    const keep = shapes().filter((s) => {
      if (s.t === "math") { const w = (s.latex.length * s.size) * 0.45; return !(p.x >= s.x - th && p.x <= s.x + w + th && p.y >= s.y - th && p.y <= s.y + s.size * 1.4 + th); }
      if (s.t === "text") { const w = (s.s.length * s.size) * 0.5; return !(p.x >= s.x - th && p.x <= s.x + w + th && p.y >= s.y - th && p.y <= s.y + s.size + th); }
      return true;
    });
    if (keep.length !== shapes().length) { pagesRef.current[pageRef.current] = keep; redraw(); rerender(); }
  }
  function hitShape(p: Pt, s: Shape): boolean {
    const th = 10;
    if (s.t === "pen" || s.t === "erase") return s.pts.some((q) => Math.hypot(q.x - p.x, q.y - p.y) < th + s.w);
    if (s.t === "line" || s.t === "arrow") return distSeg(p, s.a, s.b) < th + s.w;
    if (s.t === "rect" || s.t === "ellipse") { const x0 = Math.min(s.a.x, s.b.x) - th, x1 = Math.max(s.a.x, s.b.x) + th, y0 = Math.min(s.a.y, s.b.y) - th, y1 = Math.max(s.a.y, s.b.y) + th; return p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1; }
    if (s.t === "text") { const w = (s.s.length * s.size) * 0.5; return p.x >= s.x - th && p.x <= s.x + w + th && p.y >= s.y - th && p.y <= s.y + s.size + th; }
    if (s.t === "math") { const w = (s.latex.length * s.size) * 0.45; return p.x >= s.x - th && p.x <= s.x + w + th && p.y >= s.y - th && p.y <= s.y + s.size * 1.4 + th; }
    if (s.t === "image") return p.x >= s.x - th && p.x <= s.x + s.w + th && p.y >= s.y - th && p.y <= s.y + s.h + th;
    return false;
  }
  function bbox(s: Shape): { x: number; y: number; w: number; h: number } {
    if (s.t === "pen" || s.t === "erase") { const xs = s.pts.map((q) => q.x), ys = s.pts.map((q) => q.y); const x = Math.min(...xs), y = Math.min(...ys); return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y }; }
    if (s.t === "text") return { x: s.x, y: s.y, w: (s.s.length * s.size) * 0.5, h: s.size * 1.2 };
    if (s.t === "math") return { x: s.x, y: s.y, w: (s.latex.length * s.size) * 0.45, h: s.size * 1.4 };
    if (s.t === "image") return { x: s.x, y: s.y, w: s.w, h: s.h };
    const x = Math.min(s.a.x, s.b.x), y = Math.min(s.a.y, s.b.y); return { x, y, w: Math.abs(s.b.x - s.a.x), h: Math.abs(s.b.y - s.a.y) };
  }
  function translate(s: Shape, dx: number, dy: number): Shape {
    if (s.t === "pen" || s.t === "erase") return { ...s, pts: s.pts.map((q) => ({ x: q.x + dx, y: q.y + dy })) };
    if (s.t === "text" || s.t === "math" || s.t === "image") return { ...s, x: s.x + dx, y: s.y + dy };
    return { ...s, a: { x: s.a.x + dx, y: s.a.y + dy }, b: { x: s.b.x + dx, y: s.b.y + dy } };
  }
  function onDown(e: React.PointerEvent) {
    if (editing || mathEdit) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    const p = pos(e);
    // clicking an existing equation/text with the math or text tool edits THAT item (not a new one on top)
    if (tool === "math" || tool === "text") {
      const arr = shapes();
      for (let i = arr.length - 1; i >= 0; i--) {
        const s = arr[i];
        if (s.t === "math" && hitShape(p, s)) { editTargetRef.current = i; setColor(s.c); setMathEdit({ x: s.x, y: s.y }); setMathLatex(s.latex); return; }
        if (s.t === "text" && hitShape(p, s)) { editTargetRef.current = i; setColor(s.c); setEditing({ x: s.x, y: s.y }); setTextVal(s.s); setTimeout(() => textInputRef.current?.focus(), 0); return; }
      }
    }
    if (tool === "text") { editTargetRef.current = null; setEditing(p); setTextVal(""); setTimeout(() => textInputRef.current?.focus(), 0); return; }
    if (tool === "math") { editTargetRef.current = null; setMathEdit(p); setMathLatex(""); return; }
    if (tool === "move") {
      const arr = shapes();
      movedRef.current = false;
      let found = -1;
      for (let i = arr.length - 1; i >= 0; i--) { if (hitShape(p, arr[i])) { moveRef.current = { idx: i, last: p }; drawingRef.current = true; found = i; break; } }
      setSelIdx(found >= 0 ? found : null);
      return;
    }
    drawingRef.current = true;
    if (tool === "eraseObj") { eraseAt(p); return; }
    if (tool === "eraseArea") { eraseOverlaysAt(p); curRef.current = { t: "erase", pts: [p], w: Math.max(14, width * 5) }; return; }
    if (tool === "pen") curRef.current = { t: "pen", pts: [p], c: color, w: width };
    else curRef.current = { t: tool, a: p, b: p, c: color, w: width };
  }
  function onMove(e: React.PointerEvent) {
    if (!drawingRef.current) return;
    const p = pos(e);
    if (tool === "move") { const m = moveRef.current; if (!m) return; movedRef.current = true; const arr = shapes().slice(); arr[m.idx] = translate(arr[m.idx], p.x - m.last.x, p.y - m.last.y); pagesRef.current[pageRef.current] = arr; m.last = p; redraw(); rerender(); return; }
    if (tool === "eraseObj") { eraseAt(p); return; }
    if (tool === "eraseArea") eraseOverlaysAt(p);
    const cur = curRef.current; if (!cur) return;
    if (cur.t === "pen" || cur.t === "erase") cur.pts.push(p); else if ("b" in cur) cur.b = p;
    redraw();
  }
  function onUp() {
    if (!drawingRef.current) return; drawingRef.current = false;
    if (tool === "move") { const moved = movedRef.current; moveRef.current = null; movedRef.current = false; if (moved) commit([...shapes()]); return; }
    if (tool === "eraseObj") { commit([...shapes()]); return; }
    const cur = curRef.current; curRef.current = null; if (!cur) return;
    if (cur.t === "pen" && cur.pts.length < 2) cur.pts.push({ x: cur.pts[0].x + 0.1, y: cur.pts[0].y });
    commit([...shapes(), cur]);
  }
  function commitText() {
    const idx = editTargetRef.current;
    if (editing && textVal.trim()) {
      if (idx != null && shapes()[idx]?.t === "text") {
        const o = shapes()[idx] as Extract<Shape, { t: "text" }>;
        const arr = shapes().slice(); arr[idx] = { t: "text", x: o.x, y: o.y, s: textVal, c: color, size: o.size }; commit(arr);
      } else { commit([...shapes(), { t: "text", x: editing.x, y: editing.y, s: textVal, c: color, size: Math.max(16, width * 7) }]); setTool("move"); }
    }
    setEditing(null); setTextVal(""); editTargetRef.current = null;
  }
  function hideMathKb() { try { const vk = (window as any).mathVirtualKeyboard; if (vk) vk.visible = false; } catch {} }
  function commitMath() {
    const idx = editTargetRef.current;
    if (mathEdit && mathLatex.trim()) {
      if (idx != null && shapes()[idx]?.t === "math") {
        const o = shapes()[idx] as Extract<Shape, { t: "math" }>;
        const arr = shapes().slice(); arr[idx] = { t: "math", x: o.x, y: o.y, latex: mathLatex, c: color, size: o.size }; commit(arr);
      } else { commit([...shapes(), { t: "math", x: mathEdit.x, y: mathEdit.y, latex: mathLatex, c: color, size: Math.max(18, width * 9) }]); setTool("move"); }
    }
    setMathEdit(null); setMathLatex(""); editTargetRef.current = null; hideMathKb();
  }
  function cancelMath() { setMathEdit(null); setMathLatex(""); editTargetRef.current = null; hideMathKb(); }
  function insertSymbol(sym: string) {
    const el = textInputRef.current;
    if (!el) { setTextVal((v) => v + sym); return; }
    const start = el.selectionStart ?? textVal.length, end = el.selectionEnd ?? textVal.length;
    setTextVal(textVal.slice(0, start) + sym + textVal.slice(end));
    setTimeout(() => { el.focus(); el.selectionStart = el.selectionEnd = start + sym.length; }, 0);
  }
  function exportPng() { const a = document.createElement("a"); a.download = (title || "whiteboard") + ".png"; a.href = canvasRef.current!.toDataURL("image/png"); a.click(); }
  // Export ALL pages to a PDF via a print window: each page = its canvas image (ink/text)
  // + KaTeX equation overlays, so equations are included. User picks "Save as PDF".
  function exportPdf() {
    const W = dims().w, H = dims().h;
    const scale = Math.min(1, 900 / W);
    let css = "";
    for (const sh of Array.from(document.styleSheets)) { try { for (const r of Array.from((sh as CSSStyleSheet).cssRules)) css += r.cssText + "\n"; } catch {} }
    const pagesHtml = pagesRef.current.map((pg) => {
      const off = document.createElement("canvas");
      off.width = Math.round(W * dpr.current); off.height = Math.round(H * dpr.current);
      const ctx = off.getContext("2d")!; ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0);
      renderAll(ctx, pg, bgRef.current, W, H);
      const img = off.toDataURL("image/png");
      const math = pg.filter((s) => s.t === "math").map((s) => { const m = s as Extract<Shape, { t: "math" }>; return `<div style="position:absolute;left:${m.x}px;top:${m.y}px;color:${m.c};font-size:${m.size}px;line-height:1;white-space:nowrap;">${katexHtml(m.latex)}</div>`; }).join("");
      return `<div class="pg"><div class="inner" style="width:${W}px;height:${H}px;transform:scale(${scale});"><img src="${img}" style="width:${W}px;height:${H}px;display:block;"/>${math}</div></div>`;
    }).join("");
    const html = `<!doctype html><html><head><meta charset="utf-8"><base href="${location.origin}/"><title>${title || "Whiteboard"}</title><style>${css}
      @page{ size: landscape; margin: 8mm; } *{ box-sizing:border-box; } body{ margin:0; background:#fff; }
      .pg{ width:${W * scale}px; height:${H * scale}px; overflow:hidden; page-break-after:always; margin:0 auto 10px; }
      .inner{ transform-origin:top left; position:relative; }
    </style></head><body>${pagesHtml}<script>window.onload=function(){setTimeout(function(){window.print();},350);};<\/script></body></html>`;
    const w = window.open("", "_blank");
    if (!w) { setSaveMsg("⚠ Allow pop-ups to export PDF"); setTimeout(() => setSaveMsg(""), 3500); return; }
    w.document.open(); w.document.write(html); w.document.close();
  }
  function fullscreen() { if (!document.fullscreenElement) rootRef.current?.requestFullscreen?.(); else document.exitFullscreen?.(); }
  // capture the embedded calculator's current graph and drop it onto the board as an image
  function addGraphToBoard() {
    let cv: HTMLCanvasElement | null | undefined;
    try { cv = graphFrameRef.current?.contentDocument?.querySelector("canvas"); } catch { cv = null; }
    if (!cv) { setSaveMsg("⚠ Couldn't capture the graph"); setTimeout(() => setSaveMsg(""), 3000); return; }
    let src = "";
    try { src = cv.toDataURL("image/png"); } catch { setSaveMsg("⚠ Couldn't capture the graph"); setTimeout(() => setSaveMsg(""), 3000); return; }
    const W = dims().w, H = dims().h;
    const sc = Math.min(1, (W * 0.6) / cv.width);
    const w = cv.width * sc, h = cv.height * sc;
    commit([...shapes(), { t: "image", x: (W - w) / 2, y: (H - h) / 2, w, h, src }]);
    setTool("move"); setShowGraph(false);
    setSaveMsg("✓ Graph added to the board"); setTimeout(() => setSaveMsg(""), 2500);
  }
  function startImgResize(e: React.PointerEvent) {
    e.stopPropagation(); (e.currentTarget as Element).setPointerCapture(e.pointerId);
    const s = selIdx != null ? shapes()[selIdx] : null;
    if (!s || s.t !== "image") return;
    imgRzRef.current = { idx: selIdx!, sx: e.clientX, w: s.w, h: s.h, ratio: s.w / s.h || 1 };
  }
  function onImgResize(e: React.PointerEvent) {
    const r = imgRzRef.current; if (!r) return;
    const nw = Math.max(40, r.w + (e.clientX - r.sx)), nh = nw / r.ratio;
    const arr = shapes().slice(); const o = arr[r.idx] as Extract<Shape, { t: "image" }>;
    arr[r.idx] = { ...o, w: nw, h: nh }; pagesRef.current[pageRef.current] = arr; redraw(); rerender();
  }
  function endImgResize() { if (imgRzRef.current) { imgRzRef.current = null; commit([...shapes()]); } }
  function startDrag(e: React.PointerEvent) { if ((e.target as HTMLElement).closest("button, a")) return; (e.currentTarget as Element).setPointerCapture(e.pointerId); dragRef.current = { dx: e.clientX - graphPos.x, dy: e.clientY - graphPos.y }; setGraphBusy(true); }
  function onDrag(e: React.PointerEvent) { if (dragRef.current) setGraphPos({ x: e.clientX - dragRef.current.dx, y: e.clientY - dragRef.current.dy }); }
  function endDrag() { dragRef.current = null; setGraphBusy(false); }
  function startResize(e: React.PointerEvent) { e.stopPropagation(); (e.currentTarget as Element).setPointerCapture(e.pointerId); rzRef.current = { x: e.clientX, y: e.clientY, w: graphSize.w, h: graphSize.h }; setGraphBusy(true); }
  function onResize(e: React.PointerEvent) { const r = rzRef.current; if (r) setGraphSize({ w: Math.max(340, r.w + (e.clientX - r.x)), h: Math.max(300, r.h + (e.clientY - r.y)) }); }
  function endResize() { rzRef.current = null; setGraphBusy(false); }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (editing) return;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { e.preventDefault(); e.shiftKey ? redo() : undo(); }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") { e.preventDefault(); redo(); }
      else if (!e.ctrlKey && !e.metaKey) { const m: Record<string, Tool> = { v: "move", p: "pen", l: "line", a: "arrow", r: "rect", o: "ellipse", t: "text", m: "math", e: "eraseObj", x: "eraseArea" }; const tl = m[e.key.toLowerCase()]; if (tl) setTool(tl); }
    };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  const hp = histRef.current[pageRef.current];
  const canUndo = hp.i > 0, canRedo = hp.i < hp.h.length - 1;
  const nPages = pagesRef.current.length, page = pageRef.current;

  return (
    <div ref={rootRef} style={{ display: "flex", flexDirection: "column", height: "100%", background: "#0f172a" }}>
      <style>{WB_CSS}</style>
      <div style={bar} className="wb-bar">
        <Group>
          {([["move", "✋"], ["pen", "✏️"], ["line", "／"], ["arrow", "↗"], ["rect", "▭"], ["ellipse", "◯"], ["text", "T"], ["math", "∑"]] as [Tool, string][]).map(([tl, ic]) => (
            <button key={tl} onClick={() => setTool(tl)} title={tl === "math" ? "Math equation" : tl === "move" ? "Move / drag items" : tl} style={tBtn(tool === tl)}>{ic}</button>
          ))}
        </Group>
        <Group>{COLORS.map((c) => (<button key={c} onClick={() => setColor(c)} title={c} style={{ width: 24, height: 24, borderRadius: "50%", background: c, border: color === c ? "3px solid #fff" : "2px solid #334155", cursor: "pointer", boxShadow: color === c ? "0 0 0 2px #34d27f" : "none" }} />))}</Group>
        <Group>{WIDTHS.map((w) => (<button key={w} onClick={() => setWidth(w)} title={`width ${w}`} style={tBtn(width === w)}><span style={{ display: "inline-block", width: 18, height: w, background: width === w ? "#04130a" : "#cbd5e1", borderRadius: 4 }} /></button>))}</Group>
        <Group>
          <select value={bg} onChange={(e) => setBg(e.target.value as Bg)} style={sel} title="Background">
            <option value="grid">Grid</option><option value="graph">Graph (axes)</option><option value="dots">Dots</option><option value="lined">Lined</option><option value="blank">Blank</option>
          </select>
        </Group>
        <Group>
          <button onClick={undo} disabled={!canUndo} style={tBtn(false, !canUndo)} title="Undo">↶</button>
          <button onClick={redo} disabled={!canRedo} style={tBtn(false, !canRedo)} title="Redo">↷</button>
        </Group>
        {/* three clean options */}
        <Group>
          <button onClick={() => setTool("eraseObj")} style={tBtn(tool === "eraseObj")} title="Erase object — click/drag over a stroke to delete the whole thing">⌫ Object</button>
          <button onClick={() => setTool("eraseArea")} style={tBtn(tool === "eraseArea")} title="Erase by rubbing — removes ink under the cursor, keeps the grid">▱ Erase</button>
          <button onClick={clearAll} style={tBtn(false)} title="Clear everything on this page">🧹 Clear all</button>
        </Group>
        {/* pages */}
        <Group>
          <button onClick={() => gotoPage(page - 1)} disabled={page === 0} style={tBtn(false, page === 0)} title="Previous page">‹</button>
          <span style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 700, minWidth: 64, textAlign: "center" }}>Page {page + 1}/{nPages}</span>
          <button onClick={() => gotoPage(page + 1)} disabled={page === nPages - 1} style={tBtn(false, page === nPages - 1)} title="Next page">›</button>
          <button onClick={addPage} style={tBtn(false)} title="Add page">＋</button>
          <button onClick={delPage} style={tBtn(false)} title="Delete page">🗑</button>
        </Group>
        <div style={{ flex: 1 }} className="wb-spacer" />
        <Group>
          <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ ...sel, width: 150, cursor: "text" }} title="Board title" />
          <button onClick={doSave} style={tBtn(false)} title="Save board">💾 Save</button>
          <button onClick={openPanel} style={tBtn(false)} title="Open a saved board">📂 Open</button>
          <button onClick={toggleLive} style={tBtn(live)} title="Go live for students">{live ? "🟢 Live" : "📡 Go live"}</button>
          {saveMsg && <span style={{ color: "#9fe7bd", fontSize: 12, fontWeight: 700 }}>{saveMsg}</span>}
        </Group>
        <Group>
          <button onClick={() => setShowGraph((s) => !s)} style={tBtn(showGraph)} title="Open the graphing calculator on the board">📈 Graph</button>
          <button onClick={exportPdf} style={tBtn(false)} title="Export ALL pages to PDF (includes equations)">⬇ PDF</button>
          <button onClick={exportPng} style={tBtn(false)} title="Save current page as a PNG image">⬇ PNG</button>
          <button onClick={fullscreen} style={tBtn(false)} title="Fullscreen">⛶</button>
        </Group>
      </div>

      {live && shareUrl && (
        <div style={{ ...bar, background: "#064e3b", gap: 8 }}>
          <span style={{ color: "#a7f3d0", fontWeight: 700, fontSize: 13 }}>🟢 Live — share this link with students:</span>
          <input readOnly value={shareUrl} onFocus={(e) => e.currentTarget.select()} style={{ ...sel, flex: 1, minWidth: 200, background: "#022c22", color: "#d1fae5", cursor: "text" }} />
          <button onClick={() => navigator.clipboard?.writeText(shareUrl)} style={tBtn(false)}>Copy link</button>
        </div>
      )}

      {editing && (
        <div style={{ ...bar, background: "#1e293b", flexWrap: "wrap" }}>
          <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, marginRight: 4 }}>Insert:</span>
          {SYMBOLS.map((s) => <button key={s} onMouseDown={(e) => { e.preventDefault(); insertSymbol(s); }} style={symBtn}>{s}</button>)}
        </div>
      )}

      <div ref={wrapRef} onDoubleClick={onDouble} style={{ position: "relative", flex: 1, overflow: "hidden", touchAction: "none", cursor: tool === "move" ? "grab" : tool === "eraseObj" || tool === "eraseArea" ? "cell" : tool === "text" || tool === "math" ? "text" : "crosshair" }}>
        <canvas ref={canvasRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp} style={{ display: "block", background: "#fff" }} />
        {editing && (
          <input ref={textInputRef} value={textVal} onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") commitText(); if (e.key === "Escape") { setEditing(null); setTextVal(""); editTargetRef.current = null; } }} onBlur={commitText}
            placeholder="Type… (Enter to place)" style={{ position: "absolute", left: editing.x, top: editing.y, font: `${Math.max(16, width * 7)}px Georgia, serif`, color, border: "1px dashed #94a3b8", background: "rgba(255,255,255,.9)", outline: "none", padding: "0 2px", minWidth: 120 }} />
        )}
        {/* placed math equations (KaTeX overlays) */}
        {shapes().map((s, i) => s.t === "math" ? (
          <div key={"m" + i} style={{ position: "absolute", left: s.x, top: s.y, color: s.c, fontSize: s.size, lineHeight: 1, pointerEvents: "none", whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: katexHtml(s.latex) }} />
        ) : null)}
        {/* save / status toast */}
        {saveMsg && (
          <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", zIndex: 30, background: saveMsg.startsWith("⚠") ? "#b91c1c" : "#0f172a", color: "#fff", padding: "9px 18px", borderRadius: 10, fontSize: 14, fontWeight: 700, boxShadow: "0 8px 24px rgba(0,0,0,.35)", pointerEvents: "none", maxWidth: "90%" }}>{saveMsg}</div>
        )}
        {/* selection outline (Move tool) */}
        {tool === "move" && selIdx != null && shapes()[selIdx] && (
          <div style={{ position: "absolute", left: bbox(shapes()[selIdx]).x - 5, top: bbox(shapes()[selIdx]).y - 5, width: bbox(shapes()[selIdx]).w + 10, height: bbox(shapes()[selIdx]).h + 10, border: "1.5px dashed #1d4ed8", borderRadius: 4, pointerEvents: "none" }} />
        )}
        {/* resize handle for a selected image / graph snapshot */}
        {tool === "move" && selIdx != null && shapes()[selIdx]?.t === "image" && (
          <div onPointerDown={startImgResize} onPointerMove={onImgResize} onPointerUp={endImgResize} title="Drag to resize"
            style={{ position: "absolute", left: bbox(shapes()[selIdx]).x + bbox(shapes()[selIdx]).w - 7, top: bbox(shapes()[selIdx]).y + bbox(shapes()[selIdx]).h - 7, width: 16, height: 16, background: "#1d4ed8", border: "2px solid #fff", borderRadius: 3, cursor: "nwse-resize", touchAction: "none", zIndex: 25 }} />
        )}
        {/* math equation editor */}
        {mathEdit && (
          <div style={{ position: "absolute", left: Math.min(mathEdit.x, (dims().w) - 320), top: mathEdit.y, zIndex: 10, background: "#fff", border: "1px solid #94a3b8", borderRadius: 10, boxShadow: "0 10px 28px rgba(0,0,0,.25)", padding: 10, width: 300 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 6 }}>Type an equation (use ^ for powers, / for fractions)</div>
            <MathField value={mathLatex} onChange={setMathLatex} format="latex" ariaLabel="equation" placeholder="e.g. x = \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}" style={{ border: "1px solid #cbd5e1", borderRadius: 8, padding: "6px 8px", minHeight: 40, fontSize: 18 }} />
            <div style={{ display: "flex", gap: 8, marginTop: 10, justifyContent: "flex-end" }}>
              <button onClick={cancelMath} style={{ background: "#f1f5f9", border: "none", borderRadius: 7, padding: "6px 12px", fontWeight: 700, cursor: "pointer", color: "#334155" }}>Cancel</button>
              <button onClick={commitMath} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 7, padding: "6px 16px", fontWeight: 700, cursor: "pointer" }}>Place</button>
            </div>
          </div>
        )}
      </div>

      {showGraph && (
        <div style={{ position: "fixed", left: graphPos.x, top: graphPos.y, width: graphSize.w, height: graphSize.h, background: "#fff", border: "1px solid #334155", borderRadius: 12, boxShadow: "0 24px 60px rgba(0,0,0,.5)", zIndex: 90, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div onPointerDown={startDrag} onPointerMove={onDrag} onPointerUp={endDrag} style={{ cursor: "move", background: "#1e293b", color: "#e2e8f0", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: 13, touchAction: "none" }}>
            <span>📈 Graphing calculator <span style={{ color: "#64748b", fontWeight: 400 }}>· drag header to move</span></span>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={addGraphToBoard} style={{ background: "#34d27f", color: "#04130a", border: "none", borderRadius: 7, padding: "5px 10px", fontWeight: 800, fontSize: 12, cursor: "pointer" }} title="Add a snapshot of this graph onto the board (saved with it)">📷 Add to board</button>
              <a href="/tools/graph" target="_blank" rel="noreferrer" style={{ color: "#9fe7bd", fontSize: 12, textDecoration: "none" }}>Full ↗</a>
              <button onClick={() => setShowGraph(false)} style={{ background: "none", border: "none", color: "#e2e8f0", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>✕</button>
            </span>
          </div>
          <iframe ref={graphFrameRef} src="/tools/graph" title="Graphing calculator" style={{ flex: 1, border: "none", width: "100%", pointerEvents: graphBusy ? "none" : "auto" }} />
          <div onPointerDown={startResize} onPointerMove={onResize} onPointerUp={endResize} title="Drag to resize"
            style={{ position: "absolute", right: 0, bottom: 0, width: 20, height: 20, cursor: "nwse-resize", zIndex: 2, touchAction: "none", background: "linear-gradient(135deg, transparent 45%, #94a3b8 45%, #94a3b8 60%, transparent 60%, transparent 70%, #94a3b8 70%, #94a3b8 85%, transparent 85%)" }} />
        </div>
      )}

      {showOpen && (
        <div onClick={() => setShowOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 100, display: "grid", placeItems: "center" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 14, padding: 22, width: 420, maxHeight: "70vh", overflow: "auto" }}>
            <h3 style={{ margin: "0 0 12px", fontFamily: "Fraunces, serif", fontSize: 20 }}>Open a board</h3>
            {myBoards.length === 0 ? <p style={{ color: "#64748b" }}>No saved boards yet.</p> : myBoards.map((b) => (
              <button key={b.id} onClick={() => { loadBoard(b.id); setShowOpen(false); }} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 9, marginBottom: 8, background: "#fff", cursor: "pointer", fontWeight: 600 }}>
                {b.title} {b.is_live && <span style={{ color: "#0d9488" }}>· live</span>}
                <span style={{ display: "block", color: "#94a3b8", fontWeight: 400, fontSize: 12 }}>{new Date(b.updated_at).toLocaleString()}</span>
              </button>
            ))}
            <button onClick={() => setShowOpen(false)} style={{ marginTop: 6, background: "none", border: "none", color: "#64748b", fontWeight: 700, cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function katexHtml(latex: string): string { try { return katex.renderToString(latex, { throwOnError: false }); } catch { return latex; } }
const bar: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", background: "#1e293b", borderBottom: "1px solid #334155", flexWrap: "wrap" };
const WB_CSS = `
@media (max-width: 760px) {
  .wb-bar { flex-wrap: nowrap !important; overflow-x: auto; -webkit-overflow-scrolling: touch; gap: 8px !important; }
  .wb-bar > * { flex: 0 0 auto !important; }
  .wb-bar > div { padding-right: 8px; }
  .wb-spacer { display: none !important; }
}`;
function Group({ children }: { children: React.ReactNode }) { return <div style={{ display: "flex", alignItems: "center", gap: 5, paddingRight: 12, borderRight: "1px solid #334155" }}>{children}</div>; }
function tBtn(active: boolean, disabled = false): React.CSSProperties { return { minWidth: 34, height: 34, padding: "0 9px", borderRadius: 8, border: "none", cursor: disabled ? "default" : "pointer", fontSize: 15, fontWeight: 700, background: active ? "#34d27f" : "#334155", color: active ? "#04130a" : "#e2e8f0", opacity: disabled ? 0.4 : 1, display: "grid", placeItems: "center" }; }
const sel: React.CSSProperties = { height: 34, borderRadius: 8, border: "none", background: "#334155", color: "#e2e8f0", fontWeight: 700, fontSize: 13, padding: "0 8px", cursor: "pointer" };
const symBtn: React.CSSProperties = { minWidth: 32, height: 30, borderRadius: 7, border: "1px solid #475569", background: "#0f172a", color: "#e2e8f0", fontSize: 16, cursor: "pointer" };
