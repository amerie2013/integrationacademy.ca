"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import katex from "katex";
import { supabase } from "../lib/supabase";
import { MathField } from "./MathField";
import { Icon, type IconName } from "./WhiteboardIcons";
import { renderAll, fitView, textFont as fontFor, GRID, IDENTITY, type Pt, type Rect, type View, type Shape, type Bg, type BoardData, type AxesRange } from "../lib/wbdraw";
import { listMine, getBoard, createBoard, saveBoard, subscribeBoard, type WB } from "../lib/whiteboards";
import { renderPage, jpegsToPdf, canvasToJpeg, downloadBlob } from "../lib/wbexport";
import { officeFileKind, renderSpreadsheetToDataUrl, renderWordToDataUrl, renderPdfToDataUrls } from "../lib/officeImport";

type Tool = "select" | "hand" | "pen" | "highlight" | "line" | "arrow" | "rect" | "ellipse" | "text" | "math" | "eraseObj" | "eraseArea";
type FillMode = "none" | "tint" | "solid";
type Toast = { text: string; kind: "ok" | "err" | "info" };
type LineShape = Extract<Shape, { t: "line" | "arrow" | "rect" | "ellipse" }>;
type TextShape = Extract<Shape, { t: "text" }>;
type MathShape = Extract<Shape, { t: "math" }>;

const COLORS = ["#111827", "#dc2626", "#1d4ed8", "#1b7a44", "#ea580c", "#7c3aed", "#0d9488", "#db2777"];
// Bright, low-saturation-on-paper colours that read well at 35% opacity.
const HL_COLORS = ["#fde047", "#86efac", "#7dd3fc", "#f9a8d4", "#fdba74", "#c4b5fd"];
const WIDTHS = [1, 2, 4, 7, 12];
const FONTS = [
  { label: "Sans", css: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif" },
  { label: "Serif", css: "Georgia, 'Times New Roman', serif" },
  { label: "Display", css: "'Fraunces', Georgia, serif" },
  { label: "Mono", css: "ui-monospace, 'Cascadia Code', Consolas, monospace" },
];
const TEXT_SIZES = [16, 20, 24, 32, 48, 64];
const DEFAULT_FONT = FONTS[0].css;
const SYMBOLS = ["×", "÷", "π", "√", "²", "³", "≤", "≥", "≠", "±", "∞", "θ", "Δ", "°", "∫", "Σ", "→", "½",
  "α", "β", "γ", "δ", "λ", "μ", "σ", "φ", "ω", "Ω", "≈", "∈"];
const BGS: { id: Bg; label: string }[] = [
  { id: "grid", label: "Grid" }, { id: "graph", label: "Graph paper" }, { id: "dots", label: "Dots" }, { id: "lined", label: "Lined" }, { id: "blank", label: "Blank" },
];
const ZMIN = 0.1, ZMAX = 8;

const TOOL_INFO: Record<Tool, { icon: IconName; label: string; key: string; hint: string }> = {
  select: { icon: "select", label: "Select", key: "V", hint: "Click to select · Shift-click to add · Drag on empty space to box-select" },
  hand: { icon: "hand", label: "Hand", key: "Space", hint: "Drag to move around the board · Ctrl + scroll to zoom" },
  pen: { icon: "pen", label: "Pen", key: "P", hint: "" },
  highlight: { icon: "highlighter", label: "Highlighter", key: "H", hint: "" },
  eraseArea: { icon: "eraser", label: "Eraser", key: "X", hint: "Rub out ink — the background stays" },
  eraseObj: { icon: "eraseObj", label: "Object eraser", key: "E", hint: "Click or drag across items to delete them whole" },
  line: { icon: "line", label: "Line", key: "L", hint: "Hold Shift to snap to 15°" },
  arrow: { icon: "arrow", label: "Arrow", key: "A", hint: "Hold Shift to snap to 15°" },
  rect: { icon: "rect", label: "Rectangle", key: "R", hint: "Hold Shift for a square" },
  ellipse: { icon: "ellipse", label: "Ellipse", key: "O", hint: "Hold Shift for a circle" },
  text: { icon: "text", label: "Text", key: "T", hint: "Click to type · Double-click text to edit it" },
  math: { icon: "math", label: "Equation", key: "M", hint: "Click to place an equation · Double-click one to edit it" },
};
const RAIL: Tool[][] = [["select", "hand"], ["pen", "highlight", "eraseArea", "eraseObj"], ["line", "arrow", "rect", "ellipse"], ["text", "math"]];
const KEYMAP: Record<string, Tool> = { v: "select", p: "pen", h: "highlight", l: "line", a: "arrow", r: "rect", o: "ellipse", t: "text", m: "math", e: "eraseObj", x: "eraseArea" };

const isLineish = (s: Shape): s is LineShape => s.t === "line" || s.t === "arrow" || s.t === "rect" || s.t === "ellipse";
const clampZ = (z: number) => Math.min(ZMAX, Math.max(ZMIN, z));
function tint(hex: string, a = 0.18) { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`; }
function fillFor(mode: FillMode, c: string) { return mode === "solid" ? c : mode === "tint" ? tint(c) : undefined; }
function fillModeOf(s: LineShape): FillMode { return !s.fill ? "none" : s.fill === s.c ? "solid" : "tint"; }

export function Whiteboard({ initialBoardId }: { initialBoardId?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const eraserCurRef = useRef<HTMLDivElement>(null);
  const dpr = useRef(1);
  const viewRef = useRef<View>({ ...IDENTITY });

  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState(COLORS[0]);
  const [hlColor, setHlColor] = useState(HL_COLORS[0]);
  const [width, setWidth] = useState(4);
  const [dash, setDash] = useState(false);
  const [fill, setFill] = useState<FillMode>("none");
  const [snap, setSnap] = useState(false);
  const snapRef = useRef(false);
  snapRef.current = snap;
  const [customColors, setCustomColors] = useState<string[]>([]);
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
  const savedTitleRef = useRef("Untitled board");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [live, setLive] = useState(false);
  const liveRef = useRef(false);
  liveRef.current = live;
  const [drawOpen, setDrawOpen] = useState(false);
  const drawOpenRef = useRef(false);
  drawOpenRef.current = drawOpen;
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showOpen, setShowOpen] = useState(false);
  const [myBoards, setMyBoards] = useState<WB[]>([]);
  const [menu, setMenu] = useState<null | "export" | "insert">(null);
  const [showHelp, setShowHelp] = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const viewSyncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSendsRef = useRef<Shape[][][]>([]); // our own saves awaiting their realtime echo, so an in-flight one can't be mistaken for a guest's edit after we've since undone

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const officeFileInputRef = useRef<HTMLInputElement>(null);

  // pointer gestures
  const drawingRef = useRef(false);
  const curRef = useRef<Shape | null>(null);
  const moveRef = useRef<{ last: Pt; moved: boolean } | null>(null);
  const marqRef = useRef<{ a: Pt; base: number[] } | null>(null);
  const [marquee, setMarquee] = useState<Rect | null>(null);
  const panRef = useRef<{ sx: number; sy: number; vx: number; vy: number } | null>(null);
  const ptrsRef = useRef(new Map<number, Pt>());
  const pinchRef = useRef<{ d0: number; z0: number; wx: number; wy: number } | null>(null);
  const spaceRef = useRef(false);
  const [space, setSpace] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const imgRzRef = useRef<{ idx: number; sx: number; sy: number; w: number; h: number; ratio: number; rot: number; cx: number; cy: number } | null>(null);
  const rotRef = useRef<{ idx: number } | null>(null);
  const grpRzRef = useRef<{ orig: Shape[]; box: Rect; sx: number; sy: number; uniform: boolean } | null>(null);

  // selection + clipboard
  const [sel, setSel] = useState<number[]>([]);
  const selRef = useRef<number[]>([]);
  selRef.current = sel;
  const clipRef = useRef<Shape[] | null>(null);
  const pasteN = useRef(0);

  // text + equation editing
  const editTargetRef = useRef<number | null>(null); // index of the text/math shape being re-edited
  const [editing, setEditing] = useState<Pt | null>(null);
  const [textFont, setTextFont] = useState(DEFAULT_FONT);
  const [textSize, setTextSize] = useState(24);
  const [textVal, setTextVal] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);
  const [mathEdit, setMathEdit] = useState<Pt | null>(null);
  const [mathLatex, setMathLatex] = useState("");
  const [mathSize, setMathSize] = useState(32);
  const mathDims = useRef(new Map<string, { w: number; h: number }>()); // measured KaTeX overlay sizes, keyed "size|latex"
  const measureCtx = useRef<CanvasRenderingContext2D | null>(null);

  const shapes = () => pagesRef.current[pageRef.current];
  const size = () => { const c = canvasRef.current; return c ? { w: c.width / dpr.current, h: c.height / dpr.current } : { w: 0, h: 0 }; };

  function redraw() {
    const ctx = ctxRef.current; if (!ctx) return;
    const { w, h } = size();
    const list = curRef.current ? [...shapes(), curRef.current] : shapes();
    renderAll(ctx, list, bgRef.current, w, h, redraw, viewRef.current);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    resize();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    supabase.auth.getSession().then(({ data: { session } }) => setUserId(session?.user.id ?? null));
    if (initialBoardId) loadBoard(initialBoardId);
    document.fonts?.ready.then(() => redraw()); // canvas text in Inter/Fraunces once the webfonts arrive
    try { const saved = JSON.parse(localStorage.getItem("wb-custom-colors") || "[]"); if (Array.isArray(saved)) setCustomColors(saved.slice(0, 4)); } catch {}
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => { redraw(); /* eslint-disable-next-line */ }, [bg]);

  function flash(text: string, kind: Toast["kind"] = "ok", ms = 3000) {
    setToast({ text, kind });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    if (ms) toastTimer.current = setTimeout(() => setToast(null), ms);
  }

  // ---- view (zoom / pan) ----
  function visibleRect(): Rect { const { w, h } = size(); const v = viewRef.current; return { x: -v.x / v.z, y: -v.y / v.z, w: w / v.z, h: h / v.z }; }
  function viewCenter(): Pt { const r = visibleRect(); return { x: r.x + r.w / 2, y: r.y + r.h / 2 }; }
  function setView(v: View) { viewRef.current = v; redraw(); rerender(); scheduleViewSync(); }
  function zoomAt(sx: number, sy: number, f: number) {
    const v = viewRef.current, z = clampZ(v.z * f);
    const wx = (sx - v.x) / v.z, wy = (sy - v.y) / v.z;
    setView({ z, x: sx - wx * z, y: sy - wy * z });
  }
  function zoomCenter(f: number) { const { w, h } = size(); zoomAt(w / 2, h / 2, f); }
  function fitContent() {
    const b = boundsOf(shapes());
    if (!b) { setView({ ...IDENTITY }); return; }
    const { w, h } = size();
    setView(fitView(b, w, h, 56, 2));
  }

  // ---- history / commit ----
  function snapshot(): BoardData { return { pages: pagesRef.current, active: pageRef.current, bg: bgRef.current, view: visibleRect() }; }
  function pushSave(id: string) {
    const snap = snapshot();
    pendingSendsRef.current.push(snap.pages);
    setSaveState("saving");
    saveBoard(id, { data: snap }).then((r) => setSaveState(r.error ? "error" : "saved"));
  }
  function scheduleSync() {
    if (!boardIdRef.current) return;
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => pushSave(boardIdRef.current!), 350);
  }
  // While live, students follow the teacher's view, so zoom/pan changes are synced too.
  function scheduleViewSync() {
    if (!liveRef.current || !boardIdRef.current) return;
    if (viewSyncTimer.current) clearTimeout(viewSyncTimer.current);
    viewSyncTimer.current = setTimeout(() => pushSave(boardIdRef.current!), 400);
  }
  function commit(next: Shape[]) {
    const pi = pageRef.current;
    pagesRef.current[pi] = next;
    const hp = histRef.current[pi];
    hp.h = hp.h.slice(0, hp.i + 1); hp.h.push(next); hp.i = hp.h.length - 1;
    redraw(); scheduleSync(); rerender();
  }
  function undo() { const hp = histRef.current[pageRef.current]; if (hp.i > 0) { hp.i--; pagesRef.current[pageRef.current] = hp.h[hp.i]; setSel([]); redraw(); scheduleSync(); rerender(); } }
  function redo() { const hp = histRef.current[pageRef.current]; if (hp.i < hp.h.length - 1) { hp.i++; pagesRef.current[pageRef.current] = hp.h[hp.i]; setSel([]); redraw(); scheduleSync(); rerender(); } }
  function clearAll() { if (shapes().length) { commit([]); setSel([]); flash("Page cleared — Ctrl+Z to undo", "info"); } }

  // ---- pages ----
  function addPage() { pagesRef.current.push([]); histRef.current.push({ h: [[]], i: 0 }); pageRef.current = pagesRef.current.length - 1; setSel([]); redraw(); scheduleSync(); rerender(); }
  function gotoPage(i: number) { if (i < 0 || i >= pagesRef.current.length) return; pageRef.current = i; setSel([]); redraw(); scheduleSync(); rerender(); }
  function delPage() {
    if (pagesRef.current.length <= 1) { clearAll(); return; }
    pagesRef.current.splice(pageRef.current, 1); histRef.current.splice(pageRef.current, 1);
    pageRef.current = Math.max(0, pageRef.current - 1); setSel([]); redraw(); scheduleSync(); rerender();
  }

  // ---- save / open / live ----
  async function loadBoard(id: string) {
    const wb = await getBoard(id);
    if (!wb) return;
    const d = wb.data || ({} as BoardData);
    pagesRef.current = d.pages?.length ? d.pages : [[]];
    histRef.current = pagesRef.current.map((p) => ({ h: [p], i: 0 }));
    pageRef.current = Math.min(d.active ?? 0, pagesRef.current.length - 1);
    setBoardId(wb.id); setTitle(wb.title); savedTitleRef.current = wb.title; setLive(wb.is_live); setDrawOpen(wb.draw_open);
    setBg(d.bg ?? "grid"); bgRef.current = d.bg ?? "grid";
    setSel([]); setSaveState("saved");
    const { w, h } = size();
    viewRef.current = d.view && w ? fitView(d.view, w, h, 0, ZMAX) : { ...IDENTITY };
    redraw(); rerender();
  }
  async function doSave() {
    if (!userId) { flash("Sign in to save boards to your account", "err", 3500); return; }
    setSaveState("saving");
    if (boardIdRef.current) {
      const r = await saveBoard(boardIdRef.current, { title, data: snapshot() });
      if (r.error) { setSaveState("error"); flash(r.error, "err", 4000); return; }
    } else {
      const { id, error } = await createBoard(title, snapshot());
      if (error) { setSaveState("error"); flash(error.includes("relation") ? "Run the whiteboards migration." : error, "err", 4000); return; }
      setBoardId(id!);
    }
    savedTitleRef.current = title;
    setSaveState("saved");
    flash(`Saved “${title}” — reopen it any time from Open`);
  }
  function saveTitle() {
    const t = title.trim() || "Untitled board";
    if (t !== title) setTitle(t);
    if (boardIdRef.current && t !== savedTitleRef.current) { savedTitleRef.current = t; saveBoard(boardIdRef.current, { title: t }); }
  }
  async function openPanel() {
    const { items } = await listMine(); setMyBoards(items); setShowOpen(true);
  }
  async function toggleLive() {
    if (!userId) { flash("Sign in to go live", "err"); return; }
    let id = boardIdRef.current;
    if (!id) { const r = await createBoard(title, snapshot()); if (r.error) { flash(r.error.includes("relation") ? "Run the whiteboards migration." : r.error, "err", 4000); return; } id = r.id!; setBoardId(id); setSaveState("saved"); }
    const next = !liveRef.current;
    await saveBoard(id, { is_live: next, data: snapshot() });
    setLive(next);
    if (!next && drawOpenRef.current) { setDrawOpen(false); await saveBoard(id, { draw_open: false }); } // ending the session also revokes drawing
  }
  async function toggleDrawOpen() {
    const id = boardIdRef.current; if (!id) return;
    const next = !drawOpenRef.current;
    const r = await saveBoard(id, { draw_open: next });
    if (r.error) { flash(r.error.includes("relation") || r.error.includes("column") ? "Run the whiteboard co-draw migration (see supabase/migrations)." : r.error, "err", 4000); return; }
    setDrawOpen(next);
  }
  function copyLink() {
    navigator.clipboard?.writeText(shareUrl).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); });
  }
  // While live, absorb shapes appended by guests (via the append-only RPC)
  // into local state — only ever growing a page, never shrinking it, so this
  // can't clobber a newer local edit with a stale/self-echoed update (see the
  // 2026-08-28 migration's comment on why guest writes are append-only).
  //
  // "Only grow" alone isn't quite enough, though: our OWN save is in flight
  // for ~350ms+network time, and if an undo (or any shrink) lands in that
  // window, the echo of that earlier, now-stale, longer save arrives AFTER
  // our state has already shrunk — which *also* looks like "growth" from
  // the current state's point of view, resurrecting whatever was just
  // undone. So an incoming update that matches something we ourselves sent
  // (tracked in pendingSendsRef) is recognized and dropped outright,
  // regardless of what our local state has done since we sent it.
  useEffect(() => {
    if (!boardId || !live) return;
    const cleanup = subscribeBoard(boardId, (data) => {
      const pending = pendingSendsRef.current;
      const echoIdx = pending.findIndex((sent) => JSON.stringify(sent) === JSON.stringify(data.pages));
      if (echoIdx !== -1) { pending.splice(0, echoIdx + 1); return; } // our own echo (and any older, presumably-superseded sends) — not new content
      let changed = false;
      (data.pages ?? []).forEach((remotePage, i) => {
        const local = pagesRef.current[i] ?? [];
        if (remotePage.length > local.length) {
          pagesRef.current[i] = remotePage; changed = true;
          if (i === pageRef.current) { const hp = histRef.current[i]; hp.h = hp.h.slice(0, hp.i + 1); hp.h.push(remotePage); hp.i = hp.h.length - 1; }
        }
      });
      if (changed) { redraw(); rerender(); }
    });
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardId, live]);
  const shareUrl = boardId && typeof window !== "undefined" ? `${window.location.origin}/whiteboard/${boardId}` : "";

  // ---- geometry ----
  function textBox(s: TextShape) {
    const m = measureCtx.current ?? (measureCtx.current = document.createElement("canvas").getContext("2d")!);
    m.font = `${s.size}px ${fontFor(s.font)}`;
    const lines = s.s.split("\n");
    return { w: Math.max(...lines.map((l) => m.measureText(l).width)), h: lines.length * s.size * 1.25 };
  }
  function mathBox(s: MathShape) { return mathDims.current.get(`${s.size}|${s.latex}`) ?? { w: s.latex.length * s.size * 0.45, h: s.size * 1.4 }; }
  function bbox(s: Shape): Rect {
    if (s.t === "pen" || s.t === "hl" || s.t === "erase") {
      const xs = s.pts.map((q) => q.x), ys = s.pts.map((q) => q.y), r = s.w / 2;
      const x = Math.min(...xs) - r, y = Math.min(...ys) - r; return { x, y, w: Math.max(...xs) + r - x, h: Math.max(...ys) + r - y };
    }
    if (s.t === "text") { const b = textBox(s); return { x: s.x, y: s.y, w: b.w, h: b.h }; }
    if (s.t === "math") { const b = mathBox(s); return { x: s.x, y: s.y, w: b.w, h: b.h }; }
    if (s.t === "image" || s.t === "axes") return { x: s.x, y: s.y, w: s.w, h: s.h };
    const r = s.w / 2, x = Math.min(s.a.x, s.b.x), y = Math.min(s.a.y, s.b.y);
    return { x: x - r, y: y - r, w: Math.abs(s.b.x - s.a.x) + s.w, h: Math.abs(s.b.y - s.a.y) + s.w };
  }
  // axis-aligned bounds, accounting for an image's rotation
  function aabb(s: Shape): Rect {
    const b = bbox(s);
    if (s.t !== "image" || !s.rot) return b;
    const c = Math.abs(Math.cos(s.rot)), n = Math.abs(Math.sin(s.rot));
    const w = b.w * c + b.h * n, h = b.w * n + b.h * c;
    return { x: b.x + b.w / 2 - w / 2, y: b.y + b.h / 2 - h / 2, w, h };
  }
  function boundsOf(list: Shape[], idxs?: number[]): Rect | null {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const i of idxs ?? list.map((_, k) => k)) {
      const s = list[i]; if (!s || s.t === "erase") continue;
      const b = aabb(s);
      x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y); x1 = Math.max(x1, b.x + b.w); y1 = Math.max(y1, b.y + b.h);
    }
    return x0 === Infinity ? null : { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }
  function distSeg(p: Pt, a: Pt, b: Pt) { const dx = b.x - a.x, dy = b.y - a.y, len = dx * dx + dy * dy || 1; let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / len; t = Math.max(0, Math.min(1, t)); return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy)); }
  function hitShape(p: Pt, s: Shape, tol = 10 / viewRef.current.z): boolean {
    if (s.t === "pen" || s.t === "hl" || s.t === "erase") {
      const th = tol + s.w / 2;
      if (s.pts.length === 1) return Math.hypot(s.pts[0].x - p.x, s.pts[0].y - p.y) < th;
      for (let i = 1; i < s.pts.length; i++) if (distSeg(p, s.pts[i - 1], s.pts[i]) < th) return true;
      return false;
    }
    if (s.t === "line" || s.t === "arrow") return distSeg(p, s.a, s.b) < tol + s.w / 2;
    if (s.t === "image" && s.rot) {
      const cx = s.x + s.w / 2, cy = s.y + s.h / 2, dx = p.x - cx, dy = p.y - cy;
      const qx = cx + dx * Math.cos(s.rot) + dy * Math.sin(s.rot), qy = cy - dx * Math.sin(s.rot) + dy * Math.cos(s.rot);
      return qx >= s.x - tol && qx <= s.x + s.w + tol && qy >= s.y - tol && qy <= s.y + s.h + tol;
    }
    const b = bbox(s);
    return p.x >= b.x - tol && p.x <= b.x + b.w + tol && p.y >= b.y - tol && p.y <= b.y + b.h + tol;
  }
  function translate(s: Shape, dx: number, dy: number): Shape {
    if (s.t === "pen" || s.t === "hl" || s.t === "erase") return { ...s, pts: s.pts.map((q) => ({ x: q.x + dx, y: q.y + dy })) };
    if (s.t === "text" || s.t === "math" || s.t === "image" || s.t === "axes") return { ...s, x: s.x + dx, y: s.y + dy };
    return { ...s, a: { x: s.a.x + dx, y: s.a.y + dy }, b: { x: s.b.x + dx, y: s.b.y + dy } };
  }
  // scale about (ox, oy); text and equations scale their font size
  function scaleShape(s: Shape, ox: number, oy: number, kx: number, ky: number): Shape {
    const P = (q: Pt) => ({ x: ox + (q.x - ox) * kx, y: oy + (q.y - oy) * ky });
    if (s.t === "pen" || s.t === "hl" || s.t === "erase") return { ...s, pts: s.pts.map(P) };
    if (s.t === "text" || s.t === "math") return { ...s, ...P(s), size: Math.max(6, Math.round(s.size * ky * 10) / 10) };
    if (s.t === "image" || s.t === "axes") return { ...s, ...P(s), w: Math.max(8, s.w * kx), h: Math.max(8, s.h * ky) };
    return { ...s, a: P(s.a), b: P(s.b) };
  }
  function snapPt(p: Pt): Pt { return snapRef.current ? { x: Math.round(p.x / GRID) * GRID, y: Math.round(p.y / GRID) * GRID } : p; }
  // Shift: lines snap to 15° steps, rectangles/ellipses become squares/circles
  function constrain(a: Pt, b: Pt, t: Shape["t"], shift: boolean): Pt {
    if (!shift) return b;
    const dx = b.x - a.x, dy = b.y - a.y;
    if (t === "line" || t === "arrow") {
      const step = Math.PI / 12, ang = Math.round(Math.atan2(dy, dx) / step) * step, len = Math.hypot(dx, dy);
      return { x: a.x + Math.cos(ang) * len, y: a.y + Math.sin(ang) * len };
    }
    const m = Math.max(Math.abs(dx), Math.abs(dy));
    return { x: a.x + Math.sign(dx || 1) * m, y: a.y + Math.sign(dy || 1) * m };
  }

  // ---- pointer ----
  function local(clientX: number, clientY: number): Pt { const r = canvasRef.current!.getBoundingClientRect(); return { x: clientX - r.left, y: clientY - r.top }; }
  function toWorld(clientX: number, clientY: number): Pt { const v = viewRef.current, l = local(clientX, clientY); return { x: (l.x - v.x) / v.z, y: (l.y - v.y) / v.z }; }
  function toScreen(p: Pt): Pt { const v = viewRef.current; return { x: p.x * v.z + v.x, y: p.y * v.z + v.y }; }

  function startEditAt(p: Pt): boolean {
    const arr = shapes();
    for (let i = arr.length - 1; i >= 0; i--) {
      const s = arr[i];
      if (s.t === "math" && hitShape(p, s)) { editTargetRef.current = i; setColor(s.c); setMathSize(s.size); setMathEdit({ x: s.x, y: s.y }); setMathLatex(s.latex); setSel([]); return true; }
      if (s.t === "text" && hitShape(p, s)) { editTargetRef.current = i; setColor(s.c); setTextSize(s.size); setTextFont(fontFor(s.font)); setEditing({ x: s.x, y: s.y }); setTextVal(s.s); setSel([]); setTimeout(() => textInputRef.current?.focus(), 0); return true; }
    }
    return false;
  }
  // double-click an existing text/math item to edit its content in place (like a Word text box)
  function onDouble(e: React.MouseEvent) {
    if (editing || mathEdit) return;
    startEditAt(toWorld(e.clientX, e.clientY));
  }
  function eraseAt(p: Pt) {
    const keep = shapes().filter((s) => s.t === "erase" || !hitShape(p, s, 12 / viewRef.current.z));
    if (keep.length !== shapes().length) { pagesRef.current[pageRef.current] = keep; redraw(); rerender(); }
  }
  // remove only overlay shapes (math / text) under the cursor — used by the area eraser,
  // since those aren't canvas ink and can't be rubbed out pixel-by-pixel.
  function eraseOverlaysAt(p: Pt) {
    const keep = shapes().filter((s) => !((s.t === "math" || s.t === "text") && hitShape(p, s, 6 / viewRef.current.z)));
    if (keep.length !== shapes().length) { pagesRef.current[pageRef.current] = keep; redraw(); rerender(); }
  }
  function pickAt(p: Pt): number {
    const arr = shapes();
    // Images & axes are independent objects: grab them even if ink/text was drawn
    // on top, so you can always move the picture/graph you inserted — unless the
    // click lands on ink sitting on top of them.
    for (let i = arr.length - 1; i >= 0; i--) { const s = arr[i]; if (s.t !== "erase" && s.t !== "image" && s.t !== "axes" && hitShape(p, s)) return i; }
    for (let i = arr.length - 1; i >= 0; i--) { const s = arr[i]; if ((s.t === "image" || s.t === "axes") && hitShape(p, s)) return i; }
    return -1;
  }
  function updateEraserCursor(clientX: number, clientY: number, show: boolean) {
    const el = eraserCurRef.current; if (!el) return;
    if (!show) { el.style.display = "none"; return; }
    const l = local(clientX, clientY), d = Math.max(14, width * 5) * viewRef.current.z;
    el.style.display = "block"; el.style.width = el.style.height = d + "px";
    el.style.transform = `translate(${l.x - d / 2}px, ${l.y - d / 2}px)`;
  }
  function abortGesture() {
    if (moveRef.current?.moved || (drawingRef.current && tool === "eraseObj")) commit([...shapes()]);
    drawingRef.current = false; curRef.current = null; moveRef.current = null; marqRef.current = null; setMarquee(null); redraw();
  }

  function onDown(e: React.PointerEvent) {
    if (editing || mathEdit) return;
    setMenu(null);
    capture(e.target, e.pointerId);
    ptrsRef.current.set(e.pointerId, local(e.clientX, e.clientY));
    if (ptrsRef.current.size === 2) {
      // second finger: abandon the stroke and pinch-zoom instead
      abortGesture(); panRef.current = null;
      const [a, b] = [...ptrsRef.current.values()], v = viewRef.current;
      const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2;
      pinchRef.current = { d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: v.z, wx: (cx - v.x) / v.z, wy: (cy - v.y) / v.z };
      return;
    }
    if (ptrsRef.current.size > 2) return;
    if (e.button === 1 || tool === "hand" || spaceRef.current) {
      e.preventDefault();
      panRef.current = { sx: e.clientX, sy: e.clientY, vx: viewRef.current.x, vy: viewRef.current.y }; setGrabbing(true);
      return;
    }
    if (e.button !== 0) return;
    const p = toWorld(e.clientX, e.clientY);
    // clicking an existing equation/text with the math or text tool edits THAT item (not a new one on top)
    if ((tool === "math" || tool === "text") && startEditAt(p)) return;
    if (tool === "text") { editTargetRef.current = null; setEditing(snapPt(p)); setTextVal(""); setTimeout(() => textInputRef.current?.focus(), 0); return; }
    if (tool === "math") { editTargetRef.current = null; setMathEdit(snapPt(p)); setMathLatex(""); return; }
    if (tool === "select") {
      const found = pickAt(p);
      drawingRef.current = true;
      if (found >= 0) {
        let next = sel;
        if (e.shiftKey) next = sel.includes(found) ? sel.filter((i) => i !== found) : [...sel, found];
        else if (!sel.includes(found)) next = [found];
        setSel(next);
        moveRef.current = next.includes(found) ? { last: p, moved: false } : null;
      } else {
        marqRef.current = { a: p, base: e.shiftKey ? sel : [] };
        if (!e.shiftKey) setSel([]);
        setMarquee({ x: p.x, y: p.y, w: 0, h: 0 });
      }
      return;
    }
    drawingRef.current = true;
    if (tool === "eraseObj") { eraseAt(p); return; }
    if (tool === "eraseArea") { eraseOverlaysAt(p); curRef.current = { t: "erase", pts: [p], w: Math.max(14, width * 5) }; return; }
    if (tool === "pen") curRef.current = { t: "pen", pts: [p], c: color, w: width };
    else if (tool === "highlight") curRef.current = { t: "hl", pts: [p], c: hlColor, w: Math.max(14, width * 6) };
    else if (tool === "line" || tool === "arrow" || tool === "rect" || tool === "ellipse") {
      const a = snapPt(p);
      curRef.current = { t: tool, a, b: a, c: color, w: width, ...(dash ? { dash: true } : {}), ...((tool === "rect" || tool === "ellipse") && fill !== "none" ? { fill: fillFor(fill, color) } : {}) };
    }
  }
  function onMove(e: React.PointerEvent) {
    if (tool === "eraseArea") updateEraserCursor(e.clientX, e.clientY, !panRef.current && !pinchRef.current);
    if (ptrsRef.current.has(e.pointerId)) ptrsRef.current.set(e.pointerId, local(e.clientX, e.clientY));
    const pinch = pinchRef.current;
    if (pinch && ptrsRef.current.size >= 2) {
      const [a, b] = [...ptrsRef.current.values()];
      const z = clampZ(pinch.z0 * Math.hypot(a.x - b.x, a.y - b.y) / pinch.d0);
      const cx = (a.x + b.x) / 2, cy = (a.y + b.y) / 2;
      setView({ z, x: cx - pinch.wx * z, y: cy - pinch.wy * z });
      return;
    }
    const pan = panRef.current;
    if (pan) { setView({ z: viewRef.current.z, x: pan.vx + e.clientX - pan.sx, y: pan.vy + e.clientY - pan.sy }); return; }
    if (!drawingRef.current) return;
    const p = toWorld(e.clientX, e.clientY);
    if (tool === "select") {
      const mq = marqRef.current;
      if (mq) { setMarquee({ x: Math.min(mq.a.x, p.x), y: Math.min(mq.a.y, p.y), w: Math.abs(p.x - mq.a.x), h: Math.abs(p.y - mq.a.y) }); return; }
      const m = moveRef.current; if (!m) return;
      const dx = p.x - m.last.x, dy = p.y - m.last.y, set = new Set(sel);
      pagesRef.current[pageRef.current] = shapes().map((s, i) => (set.has(i) ? translate(s, dx, dy) : s));
      m.last = p; m.moved = true; redraw(); rerender();
      return;
    }
    if (tool === "eraseObj") { eraseAt(p); return; }
    if (tool === "eraseArea") eraseOverlaysAt(p);
    const cur = curRef.current; if (!cur) return;
    if (cur.t === "pen" || cur.t === "erase" || cur.t === "hl") {
      const last = cur.pts[cur.pts.length - 1];
      if (Math.hypot(p.x - last.x, p.y - last.y) * viewRef.current.z < 0.75) return; // skip jitter
      cur.pts.push(p);
    } else if ("b" in cur) cur.b = constrain(cur.a, snapPt(p), cur.t, e.shiftKey);
    redraw();
  }
  function onUp(e: React.PointerEvent) {
    ptrsRef.current.delete(e.pointerId);
    if (pinchRef.current) { if (ptrsRef.current.size < 2) pinchRef.current = null; return; }
    if (panRef.current) { panRef.current = null; setGrabbing(false); return; }
    if (!drawingRef.current) return; drawingRef.current = false;
    if (tool === "select") {
      const mq = marqRef.current;
      if (mq) {
        const p = toWorld(e.clientX, e.clientY);
        const r = { x: Math.min(mq.a.x, p.x), y: Math.min(mq.a.y, p.y), x1: Math.max(mq.a.x, p.x), y1: Math.max(mq.a.y, p.y) };
        const hits = shapes().map((s, i) => [s, i] as const).filter(([s]) => {
          if (s.t === "erase") return false;
          const b = aabb(s); return b.x >= r.x && b.y >= r.y && b.x + b.w <= r.x1 && b.y + b.h <= r.y1;
        }).map(([, i]) => i);
        setSel([...new Set([...mq.base, ...hits])]);
        marqRef.current = null; setMarquee(null);
        return;
      }
      const m = moveRef.current; moveRef.current = null;
      if (m?.moved) commit([...shapes()]);
      return;
    }
    if (tool === "eraseObj") { commit([...shapes()]); return; }
    const cur = curRef.current; curRef.current = null; if (!cur) return;
    if ((cur.t === "pen" || cur.t === "hl") && cur.pts.length < 2) cur.pts.push({ x: cur.pts[0].x + 0.1, y: cur.pts[0].y });
    if ("b" in cur && Math.hypot(cur.b.x - cur.a.x, cur.b.y - cur.a.y) < 2) { redraw(); return; } // a click, not a drag — nothing to draw
    commit([...shapes(), cur]);
  }

  // ---- text / equations ----
  function commitText() {
    const idx = editTargetRef.current;
    if (editing && textVal.trim()) {
      if (idx != null && shapes()[idx]?.t === "text") {
        const o = shapes()[idx] as TextShape;
        const arr = shapes().slice(); arr[idx] = { t: "text", x: o.x, y: o.y, s: textVal, c: color, size: textSize, font: textFont }; commit(arr);
      } else { commit([...shapes(), { t: "text", x: editing.x, y: editing.y, s: textVal, c: color, size: textSize, font: textFont }]); setTool("select"); setSel([shapes().length - 1]); }
    }
    setEditing(null); setTextVal(""); editTargetRef.current = null;
  }
  function hideMathKb() { try { const vk = (window as unknown as { mathVirtualKeyboard?: { visible: boolean } }).mathVirtualKeyboard; if (vk) vk.visible = false; } catch {} }
  function commitMath() {
    const idx = editTargetRef.current;
    if (mathEdit && mathLatex.trim()) {
      if (idx != null && shapes()[idx]?.t === "math") {
        const o = shapes()[idx] as MathShape;
        const arr = shapes().slice(); arr[idx] = { t: "math", x: o.x, y: o.y, latex: mathLatex, c: color, size: mathSize }; commit(arr);
      } else { commit([...shapes(), { t: "math", x: mathEdit.x, y: mathEdit.y, latex: mathLatex, c: color, size: mathSize }]); setTool("select"); setSel([shapes().length - 1]); }
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

  // ---- selection actions ----
  function chooseTool(t: Tool) { setTool(t); if (t !== "select") setSel([]); setMenu(null); }
  function selectAll() { setTool("select"); setSel(shapes().map((s, i) => (s.t === "erase" ? -1 : i)).filter((i) => i >= 0)); }
  function deleteSel() { if (!sel.length) return; const s = new Set(sel); commit(shapes().filter((_, i) => !s.has(i))); setSel([]); }
  function addCopies(src: Shape[], off: number) {
    const base = shapes(), add = src.map((s) => translate(s, off, off));
    commit([...base, ...add]); setTool("select"); setSel(add.map((_, k) => base.length + k));
  }
  function duplicateSel() { if (sel.length) addCopies(sel.map((i) => shapes()[i]), 20 / viewRef.current.z); }
  function copySel() { if (!sel.length) return false; clipRef.current = sel.map((i) => shapes()[i]); pasteN.current = 0; return true; }
  function pasteClip() { const c = clipRef.current; if (!c?.length) return false; pasteN.current++; addCopies(c, (20 * pasteN.current) / viewRef.current.z); return true; }
  function nudge(dx: number, dy: number) { const s = new Set(sel); commit(shapes().map((sh, i) => (s.has(i) ? translate(sh, dx, dy) : sh))); }
  function reorder(front: boolean) {
    const s = new Set(sel), picked = shapes().filter((_, i) => s.has(i)), rest = shapes().filter((_, i) => !s.has(i));
    commit(front ? [...rest, ...picked] : [...picked, ...rest]);
    setSel(picked.map((_, k) => (front ? rest.length + k : k)));
  }
  // with shapes selected, the style controls restyle them (as in any drawing app)
  function restyle(f: (s: Shape) => Shape) {
    if (tool !== "select" || !sel.length) return;
    const s = new Set(sel); commit(shapes().map((sh, i) => (s.has(i) ? f(sh) : sh)));
  }
  function pickColor(c: string) {
    if (tool === "highlight") { setHlColor(c); return; }
    setColor(c);
    restyle((s) => {
      if (isLineish(s)) return { ...s, c, fill: s.fill ? fillFor(fillModeOf(s), c) : undefined };
      if (s.t === "pen" || s.t === "text" || s.t === "math") return { ...s, c };
      return s;
    });
  }
  function pickCustom(c: string, final: boolean) {
    if (!final) { setColor(c); return; }
    pickColor(c);
    if (COLORS.includes(c)) return;
    const next = [c, ...customColors.filter((x) => x !== c)].slice(0, 4);
    setCustomColors(next);
    try { localStorage.setItem("wb-custom-colors", JSON.stringify(next)); } catch {}
  }
  function pickWidth(w: number) { setWidth(w); restyle((s) => (s.t === "pen" || isLineish(s) ? { ...s, w } : s)); }
  function pickDash(d: boolean) { setDash(d); restyle((s) => (isLineish(s) ? { ...s, dash: d || undefined } : s)); }
  function pickFill(m: FillMode) { setFill(m); restyle((s) => (s.t === "rect" || s.t === "ellipse" ? { ...s, fill: fillFor(m, s.c) } : s)); }
  function stepWidth(d: number) { const i = WIDTHS.indexOf(width); pickWidth(WIDTHS[Math.max(0, Math.min(WIDTHS.length - 1, (i < 0 ? 2 : i) + d))]); }

  // ---- export ----
  // Pages whose content fits the home screen export 1:1; anything panned or
  // zoomed beyond it is fitted so nothing is cut off.
  function exportViewFor(pg: Shape[], W: number, H: number): View {
    const b = boundsOf(pg);
    if (!b || (b.x >= 0 && b.y >= 0 && b.x + b.w <= W && b.y + b.h <= H)) return { ...IDENTITY };
    return fitView({ x: b.x - 24, y: b.y - 24, w: b.w + 48, h: b.h + 48 }, W, H, 0, 1);
  }
  async function exportPng() {
    setMenu(null);
    const { w: W, h: H } = size(), pg = shapes();
    flash("Preparing image…", "info", 0);
    try {
      const c = await renderPage(pg, bgRef.current, W, H, exportViewFor(pg, W, H), 2);
      const blob = await new Promise<Blob | null>((res) => c.toBlob(res, "image/png"));
      if (!blob) throw new Error("empty");
      downloadBlob(blob, (title || "whiteboard") + ".png");
      flash("PNG downloaded");
    } catch { flash("Couldn't create the image", "err", 3500); }
  }
  // Export ALL pages as a real PDF file (one page each, equations included),
  // downloaded directly — no print dialog. Each PDF page takes the board's
  // aspect ratio (longest side 280 mm), so it's a 1:1 capture of the board.
  async function exportPdf() {
    setMenu(null);
    const { w: W, h: H } = size();
    const LONG = (280 / 25.4) * 72; // pt
    const pageW = W >= H ? LONG : (LONG * W) / H, pageH = W >= H ? (LONG * H) / W : LONG;
    flash("Preparing PDF…", "info", 0);
    try {
      const pages = [];
      for (const pg of pagesRef.current) {
        const c = await renderPage(pg, bgRef.current, W, H, exportViewFor(pg, W, H), 2);
        pages.push({ jpeg: canvasToJpeg(c, 0.92), w: c.width, h: c.height });
      }
      downloadBlob(jpegsToPdf(pages, pageW, pageH), (title || "whiteboard") + ".pdf");
      flash(`PDF downloaded (${pages.length} page${pages.length === 1 ? "" : "s"})`);
    } catch { flash("Couldn't create the PDF", "err", 3500); }
  }
  function fullscreen() { if (!document.fullscreenElement) rootRef.current?.requestFullscreen?.(); else document.exitFullscreen?.(); }

  // ---- inserts ----
  // capture the embedded calculator's current graph and drop it onto the board as an image
  function addGraphToBoard() {
    let cv: HTMLCanvasElement | null | undefined;
    try { cv = graphFrameRef.current?.contentDocument?.querySelector("canvas"); } catch { cv = null; }
    if (!cv) { flash("Couldn't capture the graph", "err"); return; }
    let src = "";
    try { src = cv.toDataURL("image/png"); } catch { flash("Couldn't capture the graph", "err"); return; }
    const vr = visibleRect(), c = viewCenter();
    const sc = Math.min(1 / viewRef.current.z, (vr.w * 0.6) / cv.width);
    const w = cv.width * sc, h = cv.height * sc;
    commit([...shapes(), { t: "image", x: c.x - w / 2, y: c.y - h / 2, w, h, src }]);
    setTool("select"); setSel([shapes().length - 1]); setShowGraph(false);
    flash("Graph added to the board");
  }
  // Downscale a data URL and drop it on the board as an image shape, centred in
  // the current view. `offset` staggers multiple inserts (e.g. PDF pages) so they
  // don't land in an exact stack — still need to be dragged apart, but at least visible.
  async function insertImageDataUrl(dataUrl: string, offset = 0) {
    const img: HTMLImageElement = await new Promise((res, rej) => {
      const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = dataUrl;
    });
    const MAX = 1600; // cap the stored pixel size
    const down = Math.min(1, MAX / Math.max(img.naturalWidth, img.naturalHeight) || 1);
    const nw = Math.max(1, Math.round(img.naturalWidth * down)), nh = Math.max(1, Math.round(img.naturalHeight * down));
    const off = document.createElement("canvas"); off.width = nw; off.height = nh;
    off.getContext("2d")!.drawImage(img, 0, 0, nw, nh);
    let src = off.toDataURL("image/png");
    if (src.length > 1_800_000) src = off.toDataURL("image/jpeg", 0.85); // keep large photos/pages from bloating the save
    const vr = visibleRect(), c = viewCenter();
    const fit = Math.min(1 / viewRef.current.z, (vr.w * 0.7) / nw, (vr.h * 0.7) / nh);
    const w = nw * fit, h = nh * fit;
    const stagger = (offset * 24) / viewRef.current.z;
    commit([...shapes(), { t: "image", x: c.x - w / 2 + stagger, y: c.y - h / 2 + stagger, w, h, src, rot: 0 }]);
    return shapes().length - 1;
  }
  // Insert a user-supplied image (file picker or paste) as an image shape.
  // Draw/write on it with any tool afterward — ink and text render on top.
  async function insertImageFromFile(file: File) {
    if (!file || !file.type.startsWith("image/")) return;
    try {
      const dataUrl: string = await new Promise((res, rej) => {
        const fr = new FileReader(); fr.onload = () => res(fr.result as string); fr.onerror = rej; fr.readAsDataURL(file);
      });
      const idx = await insertImageDataUrl(dataUrl);
      setTool("select"); setSel([idx]); // select it so the move/resize/rotate handles show
      flash("Image added — drag to move, corner to resize, top handle to rotate");
    } catch { flash("Couldn't load that image", "err"); }
  }
  function onPickImage(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (f) insertImageFromFile(f); e.currentTarget.value = "";
  }
  // Excel/CSV, Word, and PDF files, rendered client-side (see lib/officeImport.ts)
  // and dropped on as image(s) — read-only snapshots you can annotate over, not
  // editable documents.
  async function insertOfficeFile(file: File) {
    const kind = officeFileKind(file);
    if (!kind) { flash("That file type isn't supported — try .xlsx, .csv, .docx, or .pdf", "err", 3500); return; }
    flash("Converting…", "info", 0);
    try {
      if (kind === "spreadsheet") {
        const idx = await insertImageDataUrl(await renderSpreadsheetToDataUrl(file));
        setTool("select"); setSel([idx]);
        flash("Spreadsheet added (first sheet) — drag to move, corner to resize", "ok", 3500);
      } else if (kind === "word") {
        const idx = await insertImageDataUrl(await renderWordToDataUrl(file));
        setTool("select"); setSel([idx]);
        flash("Document text added — formatting is approximate, not exact", "ok", 3500);
      } else {
        const { pages, truncated } = await renderPdfToDataUrls(file);
        let lastIdx = -1;
        for (let i = 0; i < pages.length; i++) lastIdx = await insertImageDataUrl(pages[i], i);
        setTool("select"); setSel([lastIdx]);
        flash(truncated ? `First ${pages.length} pages added (the rest were skipped) — drag them apart` : `${pages.length} page${pages.length === 1 ? "" : "s"} added — drag them apart`, "ok", 3500);
      }
    } catch { flash("Couldn't read that file", "err", 3500); }
  }
  function onPickOfficeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (f) insertOfficeFile(f); e.currentTarget.value = "";
  }
  // Drop a coordinate plane on the board to graph on by hand (no calculator needed).
  function insertAxes(range: AxesRange) {
    const vr = visibleRect(), c = snapPt(viewCenter()), z = viewRef.current.z;
    // the -10..10 plane is square with room for 20 units; the first-quadrant one keeps its original size
    const w = Math.min((range === "full" ? 420 : 360) / z, vr.w * 0.6), h = range === "full" ? Math.min(w, vr.h * 0.7) : Math.min(300 / z, vr.h * 0.6);
    commit([...shapes(), { t: "axes", x: c.x - w / 2, y: c.y - h / 2, w, h, range }]);
    setTool("select"); setSel([shapes().length - 1]);
    flash("Axes added — draw your graph on it");
  }

  // ---- handles ----
  // Resize a selected image (aspect-locked) or axes (free), keeping the local
  // top-left corner fixed — works whether or not the image is rotated.
  function startObjResize(e: React.PointerEvent) {
    e.stopPropagation(); capture(e.currentTarget, e.pointerId);
    const idx = sel[0], s = shapes()[idx];
    if (!s || (s.t !== "image" && s.t !== "axes")) return;
    const rot = s.t === "image" ? (s.rot || 0) : 0;
    imgRzRef.current = { idx, sx: e.clientX, sy: e.clientY, w: s.w, h: s.h, ratio: s.t === "image" ? (s.w / s.h || 1) : 0, rot, cx: s.x + s.w / 2, cy: s.y + s.h / 2 };
  }
  function onObjResize(e: React.PointerEvent) {
    const r = imgRzRef.current; if (!r) return;
    const z = viewRef.current.z, dx = (e.clientX - r.sx) / z, dy = (e.clientY - r.sy) / z;
    const ldx = dx * Math.cos(r.rot) + dy * Math.sin(r.rot);      // pointer delta in the object's local frame
    const ldy = -dx * Math.sin(r.rot) + dy * Math.cos(r.rot);
    const nw = Math.max(40, r.w + ldx);
    const nh = r.ratio ? nw / r.ratio : Math.max(40, r.h + ldy);
    const sx = (nw - r.w) / 2, sy = (nh - r.h) / 2;                 // keep local top-left fixed: shift centre by half the growth
    const ncx = r.cx + (sx * Math.cos(r.rot) - sy * Math.sin(r.rot));
    const ncy = r.cy + (sx * Math.sin(r.rot) + sy * Math.cos(r.rot));
    const arr = shapes().slice(); const o = arr[r.idx] as Extract<Shape, { t: "image" | "axes" }>;
    arr[r.idx] = { ...o, w: nw, h: nh, x: ncx - nw / 2, y: ncy - nh / 2 };
    pagesRef.current[pageRef.current] = arr; redraw(); rerender();
  }
  function endObjResize() { if (imgRzRef.current) { imgRzRef.current = null; commit([...shapes()]); } }
  // Rotate a selected image by dragging the handle above it.
  function startRotate(e: React.PointerEvent) {
    e.stopPropagation(); capture(e.currentTarget, e.pointerId);
    const s = shapes()[sel[0]];
    if (!s || s.t !== "image") return;
    rotRef.current = { idx: sel[0] };
  }
  function onRotate(e: React.PointerEvent) {
    const r = rotRef.current; if (!r) return;
    const s = shapes()[r.idx]; if (!s || s.t !== "image") return;
    const p = toWorld(e.clientX, e.clientY);
    const cx = s.x + s.w / 2, cy = s.y + s.h / 2;
    let ang = Math.atan2(p.y - cy, p.x - cx) + Math.PI / 2;         // handle sits above centre => 0 rad
    if (e.shiftKey) ang = Math.round(ang / (Math.PI / 12)) * (Math.PI / 12); // hold Shift to snap to 15°
    const arr = shapes().slice(); arr[r.idx] = { ...s, rot: ang };
    pagesRef.current[pageRef.current] = arr; redraw(); rerender();
  }
  function endRotate() { if (rotRef.current) { rotRef.current = null; commit([...shapes()]); } }
  // Scale any other selection from its bounding box's bottom-right corner
  // (uniformly if it holds text, equations or images, or with Shift held).
  function startGroupResize(e: React.PointerEvent) {
    e.stopPropagation(); capture(e.currentTarget, e.pointerId);
    const box = boundsOf(shapes(), sel); if (!box) return;
    grpRzRef.current = { orig: shapes().slice(), box, sx: e.clientX, sy: e.clientY, uniform: sel.some((i) => ["text", "math", "image"].includes(shapes()[i]?.t)) };
  }
  function onGroupResize(e: React.PointerEvent) {
    const g = grpRzRef.current; if (!g) return;
    const z = viewRef.current.z;
    let kx = Math.max(0.05, (g.box.w + (e.clientX - g.sx) / z) / Math.max(1, g.box.w));
    let ky = Math.max(0.05, (g.box.h + (e.clientY - g.sy) / z) / Math.max(1, g.box.h));
    if (g.uniform || e.shiftKey) kx = ky = Math.max(kx, ky);
    const s = new Set(selRef.current);
    pagesRef.current[pageRef.current] = g.orig.map((sh, i) => (s.has(i) ? scaleShape(sh, g.box.x, g.box.y, kx, ky) : sh));
    redraw(); rerender();
  }
  function endGroupResize() { if (grpRzRef.current) { grpRzRef.current = null; commit([...shapes()]); } }

  function startDrag(e: React.PointerEvent) { if ((e.target as HTMLElement).closest("button, a")) return; capture(e.currentTarget, e.pointerId); dragRef.current = { dx: e.clientX - graphPos.x, dy: e.clientY - graphPos.y }; setGraphBusy(true); }
  function onDrag(e: React.PointerEvent) { if (dragRef.current) setGraphPos({ x: e.clientX - dragRef.current.dx, y: e.clientY - dragRef.current.dy }); }
  function endDrag() { dragRef.current = null; setGraphBusy(false); }
  function startResize(e: React.PointerEvent) { e.stopPropagation(); capture(e.currentTarget, e.pointerId); rzRef.current = { x: e.clientX, y: e.clientY, w: graphSize.w, h: graphSize.h }; setGraphBusy(true); }
  function onResize(e: React.PointerEvent) { const r = rzRef.current; if (r) setGraphSize({ w: Math.max(340, r.w + (e.clientX - r.x)), h: Math.max(300, r.h + (e.clientY - r.y)) }); }
  function endResize() { rzRef.current = null; setGraphBusy(false); }

  // ---- keyboard (re-bound every render so handlers see current state) ----
  useEffect(() => {
    const typing = (t: EventTarget | null) => {
      const el = t as HTMLElement | null; if (!el?.tagName) return false;
      return ["INPUT", "TEXTAREA", "SELECT", "MATH-FIELD"].includes(el.tagName) || el.isContentEditable;
    };
    const onKey = (e: KeyboardEvent) => {
      if (editing || mathEdit || typing(e.target)) return;
      const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
      if (e.key === " ") { e.preventDefault(); if (!spaceRef.current) { spaceRef.current = true; setSpace(true); } return; }
      if (mod) {
        if (k === "z") { e.preventDefault(); if (e.shiftKey) redo(); else undo(); }
        else if (k === "y") { e.preventDefault(); redo(); }
        else if (k === "s") { e.preventDefault(); doSave(); }
        else if (k === "a") { e.preventDefault(); selectAll(); }
        else if (k === "d") { e.preventDefault(); duplicateSel(); }
        else if (k === "c") copySel();
        else if (k === "x") { if (copySel()) deleteSel(); }
        else if (k === "=" || k === "+") { e.preventDefault(); zoomCenter(1.25); }
        else if (k === "-") { e.preventDefault(); zoomCenter(0.8); }
        else if (k === "0") { e.preventDefault(); setView({ ...IDENTITY }); }
        return;
      }
      if (e.altKey) return;
      if (e.key === "?") { setShowHelp((s) => !s); return; }
      if (e.key === "!") { fitContent(); return; }
      if (e.key === "Escape") { setShowHelp(false); setMenu(null); setSel([]); return; }
      if ((e.key === "Delete" || e.key === "Backspace") && sel.length) { e.preventDefault(); deleteSel(); return; }
      if (e.key.startsWith("Arrow") && sel.length) {
        e.preventDefault();
        const d = (e.shiftKey ? 10 : 1) / viewRef.current.z;
        nudge(e.key === "ArrowLeft" ? -d : e.key === "ArrowRight" ? d : 0, e.key === "ArrowUp" ? -d : e.key === "ArrowDown" ? d : 0);
        return;
      }
      if (e.key === "PageDown") { gotoPage(pageRef.current + 1); return; }
      if (e.key === "PageUp") { gotoPage(pageRef.current - 1); return; }
      if (k === "[" || k === "]") { stepWidth(k === "]" ? 1 : -1); return; }
      if (k === "g") { setSnap((s) => !s); return; }
      if (!e.shiftKey && KEYMAP[k]) chooseTool(KEYMAP[k]);
    };
    const onKeyUp = (e: KeyboardEvent) => { if (e.key === " ") { spaceRef.current = false; setSpace(false); } };
    window.addEventListener("keydown", onKey); window.addEventListener("keyup", onKeyUp);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("keyup", onKeyUp); };
  });

  // Paste: an image on the clipboard (e.g. a screenshot) goes straight onto the
  // board; otherwise items copied on the board with Ctrl+C are pasted.
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      if (editing || mathEdit) return; // let text/math editors handle their own paste
      const t = e.target as HTMLElement | null;
      if (t?.tagName === "INPUT" || t?.tagName === "TEXTAREA") return;
      const items = e.clipboardData?.items;
      for (const it of Array.from(items ?? [])) {
        if (it.type.startsWith("image/")) { const f = it.getAsFile(); if (f) { e.preventDefault(); insertImageFromFile(f); return; } }
      }
      if (pasteClip()) e.preventDefault();
    };
    window.addEventListener("paste", onPaste); return () => window.removeEventListener("paste", onPaste);
  });

  // Wheel: scroll / two-finger swipe pans; Ctrl + wheel (or trackpad pinch) zooms at the cursor.
  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if ((e.target as HTMLElement).closest?.("[data-wb-ui]")) return;
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1;
      const r = el.getBoundingClientRect();
      if (e.ctrlKey || e.metaKey) zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * unit * 0.0025));
      else {
        let dx = e.deltaX * unit, dy = e.deltaY * unit;
        if (e.shiftKey && !dx) { dx = dy; dy = 0; } // Shift + wheel scrolls sideways
        const v = viewRef.current; setView({ ...v, x: v.x - dx, y: v.y - dy });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hp = histRef.current[pageRef.current];
  const canUndo = hp.i > 0, canRedo = hp.i < hp.h.length - 1;
  const nPages = pagesRef.current.length, page = pageRef.current;
  const v = viewRef.current;
  const zoomPct = Math.round(v.z * 100);
  const list = shapes();
  const selShapes = sel.map((i) => list[i]).filter(Boolean);
  const info = TOOL_INFO[tool];

  // which style controls the context bar shows
  const styling = tool === "select" ? selShapes : [];
  const showColors = ["pen", "line", "arrow", "rect", "ellipse", "text", "math"].includes(tool) || styling.some((s) => s.t === "pen" || s.t === "text" || s.t === "math" || isLineish(s));
  const showWidths = ["pen", "highlight", "eraseArea", "line", "arrow", "rect", "ellipse"].includes(tool) || styling.some((s) => s.t === "pen" || isLineish(s));
  const showDash = ["line", "arrow", "rect", "ellipse"].includes(tool) || styling.some(isLineish);
  const showFill = tool === "rect" || tool === "ellipse" || styling.some((s) => s.t === "rect" || s.t === "ellipse");
  const curColor = tool === "highlight" ? hlColor : color;

  const statusText = !boardId ? (userId ? "Not saved" : "Not saved · sign in to save") : saveState === "saving" ? "Saving…" : saveState === "error" ? "Save failed" : "Saved";
  const panMode = tool === "hand" || space;
  const cursor = grabbing ? "grabbing" : panMode ? "grab" : tool === "select" ? "default" : tool === "eraseArea" ? "none" : tool === "eraseObj" ? "cell" : tool === "text" || tool === "math" ? "text" : "crosshair";

  // selection overlay geometry (screen coordinates)
  let selFrame: React.ReactNode = null;
  if (tool === "select" && selShapes.length && !editing && !mathEdit) {
    const single = selShapes.length === 1 ? selShapes[0] : null;
    let top: number, cx: number, bottom: number;
    if (single && (single.t === "image" || single.t === "axes")) {
      const b = bbox(single), tl = toScreen(b), rot = single.t === "image" ? (single.rot || 0) : 0;
      const W = b.w * v.z, H = b.h * v.z;
      const ab = aabb(single), atl = toScreen(ab);
      top = atl.y - (single.t === "image" ? 40 : 6); cx = atl.x + (ab.w * v.z) / 2; bottom = atl.y + ab.h * v.z;
      selFrame = (
        <div style={{ position: "absolute", left: tl.x, top: tl.y, width: W, height: H, transform: `rotate(${rot}rad)`, transformOrigin: "center", pointerEvents: "none", zIndex: 24 }}>
          <div style={{ position: "absolute", inset: -4, border: "1.5px solid #2563eb", borderRadius: 3 }} />
          <div onPointerDown={startObjResize} onPointerMove={onObjResize} onPointerUp={endObjResize} title="Drag to resize"
            style={{ ...handle, right: -9, bottom: -9, cursor: "nwse-resize" }} />
          {single.t === "image" && (
            <>
              <div style={{ position: "absolute", left: "50%", top: -28, width: 1.5, height: 24, background: "#2563eb", transform: "translateX(-50%)" }} />
              <div onPointerDown={startRotate} onPointerMove={onRotate} onPointerUp={endRotate} title="Drag to rotate (hold Shift to snap to 15°)"
                style={{ ...handle, left: "50%", top: -38, marginLeft: -7, borderRadius: "50%", cursor: "grab" }} />
            </>
          )}
        </div>
      );
    } else {
      const b = boundsOf(list, sel)!;
      const tl = toScreen(b), W = b.w * v.z, H = b.h * v.z;
      top = tl.y - 6; cx = tl.x + W / 2; bottom = tl.y + H;
      selFrame = (
        <div style={{ position: "absolute", left: tl.x - 6, top: tl.y - 6, width: W + 12, height: H + 12, pointerEvents: "none", zIndex: 24 }}>
          <div style={{ position: "absolute", inset: 0, border: "1.5px solid #2563eb", borderRadius: 3, background: "rgba(37,99,235,.04)" }} />
          <div onPointerDown={startGroupResize} onPointerMove={onGroupResize} onPointerUp={endGroupResize} title="Drag to resize (Shift keeps proportions)"
            style={{ ...handle, right: -7, bottom: -7, cursor: "nwse-resize" }} />
        </div>
      );
    }
    const barTop = top - 48 >= 8 ? top - 48 : bottom + 14;
    selFrame = (
      <>
        {selFrame}
        {!moveRef.current?.moved && !grpRzRef.current && !imgRzRef.current && !rotRef.current && (
          <div data-wb-ui className="wb-panel" style={{ position: "absolute", left: cx, top: barTop, transform: "translateX(-50%)", zIndex: 26, display: "flex", gap: 2, padding: 4 }}
            onPointerDown={(e) => e.stopPropagation()}>
            {selShapes.length > 1 && <span className="wb-count">{selShapes.length} items</span>}
            <Btn icon="copy" tip="Duplicate (Ctrl+D)" onClick={duplicateSel} small />
            <Btn icon="front" tip="Bring to front" onClick={() => reorder(true)} small />
            <Btn icon="back" tip="Send to back" onClick={() => reorder(false)} small />
            <span className="wb-sep" />
            <Btn icon="trash" tip="Delete (Del)" onClick={deleteSel} small danger />
          </div>
        )}
      </>
    );
  }

  return (
    <div ref={rootRef} className="wb-root" style={{ display: "flex", flexDirection: "column", height: "100%", background: "#0b1220" }}>
      <style>{WB_CSS}</style>

      {/* ---- top bar: board + file actions ---- */}
      <div className="wb-top">
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, flex: "1 1 220px" }}>
          <input className="wb-title" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={saveTitle}
            onKeyDown={(e) => { if (e.key === "Enter") (e.currentTarget as HTMLInputElement).blur(); }} aria-label="Board title" spellCheck={false} />
          <span className="wb-status" data-state={saveState === "error" ? "error" : boardId ? "ok" : "none"}>{statusText}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <Btn icon="folder" label="Open" tip="Open a saved board" onClick={openPanel} />
          <Btn icon="save" label="Save" tip="Save to your account (Ctrl+S)" onClick={doSave} />
          <button type="button" className={`wb-btn wb-tip ${live ? "wb-live-on" : "wb-outline"}`} onClick={toggleLive}
            data-tip={live ? "End the live session" : "Share this board live with students"} aria-label={live ? "End live session" : "Go live"}>
            {live ? <span className="wb-live-dot" /> : <Icon name="broadcast" />}<span className="wb-lbl">{live ? "Live" : "Go live"}</span>
          </button>
          <div style={{ position: "relative" }}>
            <Btn icon="download" label="Export" tip="Download as PNG or PDF" onClick={() => setMenu((m) => (m === "export" ? null : "export"))} on={menu === "export"}>
              <Icon name="chevronDown" size={14} />
            </Btn>
            {menu === "export" && (
              <>
                <div style={{ position: "fixed", inset: 0, zIndex: 70 }} onClick={() => setMenu(null)} />
                <div className="wb-panel wb-menu" role="menu">
                  <button type="button" role="menuitem" onClick={exportPdf}><strong>PDF</strong><span>All pages, with equations</span></button>
                  <button type="button" role="menuitem" onClick={exportPng}><strong>PNG image</strong><span>Current page</span></button>
                </div>
              </>
            )}
          </div>
          <span className="wb-sep" />
          <Btn icon="maximize" tip="Fullscreen" tipPos="bottom-end" onClick={fullscreen} />
          <Btn icon="help" tip="Keyboard shortcuts (?)" tipPos="bottom-end" onClick={() => setShowHelp(true)} />
        </div>
      </div>

      {/* ---- context bar: options for the current tool / selection ---- */}
      <div className="wb-ctx">
        <span className="wb-tool-name"><Icon name={info.icon} size={16} />{info.label}</span>
        {editing ? (
          <>
            <span className="wb-sep" />
            {FONTS.map((f) => (
              <button key={f.label} type="button" className="wb-btn wb-chip" data-on={textFont === f.css || undefined} onMouseDown={(e) => { e.preventDefault(); setTextFont(f.css); }} style={{ fontFamily: f.css }}>{f.label}</button>
            ))}
            <span className="wb-sep" />
            {TEXT_SIZES.map((n) => (
              <button key={n} type="button" className="wb-btn wb-chip" data-on={textSize === n || undefined} onMouseDown={(e) => { e.preventDefault(); setTextSize(n); }}>{n}</button>
            ))}
            <span className="wb-sep" />
            <Swatches colors={COLORS} current={color} onPick={(c) => setColor(c)} />
            <span className="wb-sep" />
            <div className="wb-symbols">
              {SYMBOLS.map((s) => <button key={s} type="button" className="wb-btn wb-sym" onMouseDown={(e) => { e.preventDefault(); insertSymbol(s); }}>{s}</button>)}
            </div>
          </>
        ) : (
          <>
            {showColors || tool === "highlight" ? (
              <>
                <span className="wb-sep" />
                <Swatches colors={tool === "highlight" ? HL_COLORS : [...COLORS, ...customColors]} current={curColor} onPick={pickColor} />
                {tool !== "highlight" && <ColorPicker value={color} onPick={pickCustom} />}
              </>
            ) : null}
            {showWidths && (
              <>
                <span className="wb-sep" />
                {WIDTHS.map((w) => (
                  <button key={w} type="button" className="wb-btn wb-chip wb-tip" data-on={width === w || undefined} data-tip={`Stroke ${w}px  ·  [ ]`} aria-label={`Stroke width ${w}`} onClick={() => pickWidth(w)}>
                    <span style={{ display: "block", width: 18, height: Math.max(1.5, Math.min(w, 9)), borderRadius: 4, background: "currentColor" }} />
                  </button>
                ))}
              </>
            )}
            {showDash && (
              <>
                <span className="wb-sep" />
                <Btn icon="solidLine" tip="Solid line" on={!dash} onClick={() => pickDash(false)} />
                <Btn icon="dash" tip="Dashed line" on={dash} onClick={() => pickDash(true)} />
              </>
            )}
            {showFill && (
              <>
                <span className="wb-sep" />
                <Btn icon="fillNone" tip="No fill" on={fill === "none"} onClick={() => pickFill("none")} />
                <Btn icon="fillTint" tip="Light fill" on={fill === "tint"} onClick={() => pickFill("tint")} />
                <Btn icon="fillSolid" tip="Solid fill" on={fill === "solid"} onClick={() => pickFill("solid")} />
              </>
            )}
            {tool === "text" && (
              <>
                <span className="wb-sep" />
                {FONTS.map((f) => <button key={f.label} type="button" className="wb-btn wb-chip" data-on={textFont === f.css || undefined} onClick={() => setTextFont(f.css)} style={{ fontFamily: f.css }}>{f.label}</button>)}
                <select className="wb-select" value={textSize} onChange={(e) => setTextSize(+e.target.value)} aria-label="Text size">
                  {TEXT_SIZES.map((n) => <option key={n} value={n}>{n} px</option>)}
                </select>
              </>
            )}
            {tool === "math" && (
              <>
                <span className="wb-sep" />
                <select className="wb-select" value={mathSize} onChange={(e) => setMathSize(+e.target.value)} aria-label="Equation size">
                  {[18, 24, 32, 40, 48, 64].map((n) => <option key={n} value={n}>{n} px</option>)}
                </select>
              </>
            )}
            {info.hint && !(tool === "select" && sel.length) && <span className="wb-hint">{info.hint}</span>}
          </>
        )}
        <div style={{ flex: 1 }} />
        <span className="wb-sep" />
        <label className="wb-bg wb-tip" data-tip="Page background" data-tip-pos="bottom-end">
          <Icon name="grid" size={16} />
          <select className="wb-select" value={bg} onChange={(e) => { setBg(e.target.value as Bg); bgRef.current = e.target.value as Bg; scheduleSync(); }} aria-label="Background">
            {BGS.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
          </select>
        </label>
        <Btn icon="magnet" tip={snap ? "Snap to grid: on (G)" : "Snap to grid: off (G)"} tipPos="bottom-end" on={snap} onClick={() => setSnap((s) => !s)} />
      </div>

      {live && shareUrl && (
        <div className="wb-livebar">
          <span className="wb-live-dot" />
          <span style={{ fontWeight: 600, color: "#d1fae5" }}>Live</span>
          <span style={{ color: "#86b8a0" }}>Students join at</span>
          <input readOnly value={shareUrl} onFocus={(e) => e.currentTarget.select()} className="wb-share" aria-label="Share link" />
          <Btn icon={copied ? "check" : "link"} label={copied ? "Copied" : "Copy link"} onClick={copyLink} />
          <Btn icon={drawOpen ? "pen" : "lock"} label={drawOpen ? "Students can draw" : "View only"} on={drawOpen}
            tip="Let anyone with the link draw too (pen + highlighter), not just watch" onClick={toggleDrawOpen} />
        </div>
      )}

      {/* ---- canvas ---- */}
      <div ref={wrapRef} style={{ position: "relative", flex: 1, minHeight: 0, overflow: "hidden", touchAction: "none", cursor }}>
        <canvas ref={canvasRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
          onPointerLeave={() => updateEraserCursor(0, 0, false)} onDoubleClick={onDouble} style={{ display: "block", background: "#fff" }} />

        {/* placed math equations (KaTeX overlays), in world space */}
        <div style={{ position: "absolute", left: 0, top: 0, transform: `translate(${v.x}px, ${v.y}px) scale(${v.z})`, transformOrigin: "0 0", pointerEvents: "none" }}>
          {list.map((s, i) => s.t === "math" ? (
            <div key={"m" + i} ref={(el) => {
              if (!el) return;
              const key = `${s.size}|${s.latex}`, prev = mathDims.current.get(key), w = el.offsetWidth, h = el.offsetHeight;
              if (!prev || prev.w !== w || prev.h !== h) { mathDims.current.set(key, { w, h }); queueMicrotask(rerender); }
            }}
              style={{ position: "absolute", left: s.x, top: s.y, color: s.c, fontSize: s.size, lineHeight: 1, whiteSpace: "nowrap", opacity: mathEdit && editTargetRef.current === i ? 0.25 : 1 }}
              dangerouslySetInnerHTML={{ __html: katexHtml(s.latex) }} />
          ) : null)}
        </div>

        {list.length === 0 && !editing && !mathEdit && !live && (
          <div className="wb-empty">
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, color: "#64748b", marginBottom: 6 }}>Blank page</div>
            <div>Pick a tool on the left and start writing. Ctrl + scroll zooms, Space + drag pans.</div>
            <div style={{ marginTop: 4 }}>Press <kbd>?</kbd> for all keyboard shortcuts.</div>
          </div>
        )}

        {marquee && (() => { const a = toScreen(marquee); return <div style={{ position: "absolute", left: a.x, top: a.y, width: marquee.w * v.z, height: marquee.h * v.z, border: "1px solid #2563eb", background: "rgba(37,99,235,.08)", pointerEvents: "none", zIndex: 23 }} />; })()}
        {selFrame}
        <div ref={eraserCurRef} style={{ position: "absolute", left: 0, top: 0, display: "none", borderRadius: "50%", border: "1.5px solid #475569", background: "rgba(255,255,255,.45)", boxShadow: "0 0 0 1px rgba(255,255,255,.8)", pointerEvents: "none", zIndex: 22 }} />

        {editing && (() => { const s = toScreen(editing); return (
          <input ref={textInputRef} value={textVal} onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") commitText(); if (e.key === "Escape") { setEditing(null); setTextVal(""); editTargetRef.current = null; } }} onBlur={commitText}
            placeholder="Type, then Enter" style={{ position: "absolute", left: s.x - 3, top: s.y - 2, zIndex: 25, font: `${textSize * v.z}px ${textFont}`, color, border: "1.5px solid #2563eb", borderRadius: 4, background: "rgba(255,255,255,.95)", outline: "none", padding: "0 2px", minWidth: 140, boxShadow: "0 2px 10px rgba(37,99,235,.15)" }} />
        ); })()}

        {/* math equation editor */}
        {mathEdit && (() => { const s = toScreen(mathEdit), W = size().w; return (
          <div data-wb-ui className="wb-mathpop" style={{ left: Math.max(8, Math.min(s.x, W - 348)), top: Math.max(8, s.y) }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{editTargetRef.current != null ? "Edit equation" : "Insert equation"}</span>
              <span style={{ fontSize: 12, color: "#64748b" }}>^ powers · / fractions</span>
            </div>
            <MathField value={mathLatex} onChange={setMathLatex} format="latex" ariaLabel="equation" placeholder={String.raw`e.g.\ x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`} style={{ border: "1px solid #cbd5e1", borderRadius: 8, padding: "6px 8px", minHeight: 44, fontSize: 20 }} />
            <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end" }}>
              <button type="button" onClick={cancelMath} className="wb-dlg-btn">Cancel</button>
              <button type="button" onClick={commitMath} className="wb-dlg-btn wb-dlg-primary">{editTargetRef.current != null ? "Update" : "Place"}</button>
            </div>
          </div>
        ); })()}

        {/* tool rail */}
        <div data-wb-ui className="wb-panel wb-rail" onPointerDown={(e) => e.stopPropagation()}>
          {RAIL.map((grp, gi) => (
            <div key={gi} className="wb-rail-grp">
              {grp.map((t) => (
                <Btn key={t} icon={TOOL_INFO[t].icon} tip={`${TOOL_INFO[t].label}  ·  ${TOOL_INFO[t].key}`} tipPos="right" on={tool === t} onClick={() => chooseTool(t)} />
              ))}
            </div>
          ))}
          <div className="wb-rail-grp" style={{ position: "relative" }}>
            <Btn icon="plus" tip="Insert image, file, axes or graph" tipPos="right" on={menu === "insert"} onClick={() => setMenu((m) => (m === "insert" ? null : "insert"))} />
            {menu === "insert" && (
              <>
                <div style={{ position: "fixed", inset: 0, zIndex: 70 }} onClick={() => setMenu(null)} />
                <div className="wb-panel wb-menu wb-menu-side" role="menu">
                  <button type="button" role="menuitem" onClick={() => { setMenu(null); fileInputRef.current?.click(); }}><Icon name="image" /><span><strong>Image</strong><span>From a file — or paste with Ctrl+V</span></span></button>
                  <button type="button" role="menuitem" onClick={() => { setMenu(null); officeFileInputRef.current?.click(); }}><Icon name="file" /><span><strong>PDF, Word or Excel</strong><span>Added as pages you can write on</span></span></button>
                  <button type="button" role="menuitem" onClick={() => { setMenu(null); insertAxes("q1"); }}><Icon name="axes" /><span><strong>Axes: first quadrant</strong><span>x and y from −1 to 10</span></span></button>
                  <button type="button" role="menuitem" onClick={() => { setMenu(null); insertAxes("full"); }}><Icon name="axesFull" /><span><strong>Axes: four quadrants</strong><span>x and y from −10 to 10, with a grid</span></span></button>
                  <button type="button" role="menuitem" onClick={() => { setMenu(null); setShowGraph((s) => !s); }}><Icon name="chart" /><span><strong>Graphing calculator</strong><span>Plot functions, then add the graph</span></span></button>
                </div>
              </>
            )}
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={onPickImage} style={{ display: "none" }} />
          <input ref={officeFileInputRef} type="file" accept=".xlsx,.xls,.csv,.docx,.doc,.pdf" onChange={onPickOfficeFile} style={{ display: "none" }} />
        </div>

        {/* history + zoom */}
        <div data-wb-ui className="wb-panel wb-dock wb-dock-left" onPointerDown={(e) => e.stopPropagation()}>
          <Btn icon="undo" tip="Undo (Ctrl+Z)" tipPos="top" onClick={undo} disabled={!canUndo} />
          <Btn icon="redo" tip="Redo (Ctrl+Y)" tipPos="top" onClick={redo} disabled={!canRedo} />
          <span className="wb-sep" />
          <Btn icon="minus" tip="Zoom out (Ctrl −)" tipPos="top" onClick={() => zoomCenter(0.8)} disabled={v.z <= ZMIN + 1e-6} />
          <button type="button" className="wb-btn wb-tip wb-zoom" data-tip="Reset to 100% (Ctrl 0)" data-tip-pos="top" onClick={() => setView({ ...IDENTITY })}>{zoomPct}%</button>
          <Btn icon="plus" tip="Zoom in (Ctrl +)" tipPos="top" onClick={() => zoomCenter(1.25)} disabled={v.z >= ZMAX - 1e-6} />
          <Btn icon="fit" tip="Zoom to fit content (Shift 1)" tipPos="top" onClick={fitContent} />
        </div>

        {/* pages */}
        <div data-wb-ui className="wb-panel wb-dock wb-dock-right" onPointerDown={(e) => e.stopPropagation()}>
          <Btn icon="chevronLeft" tip="Previous page (PgUp)" tipPos="top" onClick={() => gotoPage(page - 1)} disabled={page === 0} />
          <span className="wb-pageno">Page {page + 1} of {nPages}</span>
          <Btn icon="chevronRight" tip="Next page (PgDn)" tipPos="top" onClick={() => gotoPage(page + 1)} disabled={page === nPages - 1} />
          <Btn icon="plus" tip="Add page" tipPos="top" onClick={addPage} />
          <span className="wb-sep" />
          <Btn icon="clear" tip="Clear this page" tipPos="top-end" onClick={clearAll} disabled={!list.length} />
          <Btn icon="trash" tip="Delete this page" tipPos="top-end" onClick={delPage} disabled={nPages <= 1} danger />
        </div>

        {toast && <div className="wb-toast" data-kind={toast.kind} role="status">{toast.text}</div>}
      </div>

      {showGraph && (
        <div className="wb-graph" style={{ left: graphPos.x, top: graphPos.y, width: graphSize.w, height: graphSize.h }}>
          <div onPointerDown={startDrag} onPointerMove={onDrag} onPointerUp={endDrag} className="wb-graph-head">
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="chart" size={16} />Graphing calculator <span style={{ color: "#64748b", fontWeight: 400 }}>· drag to move</span></span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <button type="button" onClick={addGraphToBoard} className="wb-btn wb-primary" style={{ height: 30 }} title="Add a snapshot of this graph onto the board (saved with it)"><Icon name="camera" size={15} />Add to board</button>
              <a href="/tools/graph" target="_blank" rel="noreferrer" className="wb-btn" style={{ height: 30, textDecoration: "none" }} title="Open the full calculator in a new tab"><Icon name="external" size={15} /></a>
              <button type="button" onClick={() => setShowGraph(false)} className="wb-btn" style={{ height: 30 }} aria-label="Close"><Icon name="x" size={16} /></button>
            </span>
          </div>
          <iframe ref={graphFrameRef} src="/tools/graph" title="Graphing calculator" style={{ flex: 1, border: "none", width: "100%", pointerEvents: graphBusy ? "none" : "auto" }} />
          <div onPointerDown={startResize} onPointerMove={onResize} onPointerUp={endResize} title="Drag to resize"
            style={{ position: "absolute", right: 0, bottom: 0, width: 20, height: 20, cursor: "nwse-resize", zIndex: 2, touchAction: "none", background: "linear-gradient(135deg, transparent 45%, #94a3b8 45%, #94a3b8 60%, transparent 60%, transparent 70%, #94a3b8 70%, #94a3b8 85%, transparent 85%)" }} />
        </div>
      )}

      {showOpen && (
        <div onClick={() => setShowOpen(false)} className="wb-modal-bg">
          <div onClick={(e) => e.stopPropagation()} className="wb-modal" style={{ width: 440 }}>
            <div className="wb-modal-head"><h3>Open a board</h3><button type="button" className="wb-btn" onClick={() => setShowOpen(false)} aria-label="Close"><Icon name="x" /></button></div>
            {myBoards.length === 0 ? <p style={{ color: "#94a3b8", margin: "8px 0 4px" }}>No saved boards yet. Use Save to keep a board in your account.</p> : myBoards.map((b) => (
              <button key={b.id} type="button" onClick={() => { loadBoard(b.id); setShowOpen(false); }} className="wb-board-row">
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>{b.title}{b.is_live && <span className="wb-badge">Live</span>}</span>
                <span style={{ color: "#94a3b8", fontWeight: 400, fontSize: 12 }}>Edited {new Date(b.updated_at).toLocaleString()}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {showHelp && (
        <div onClick={() => setShowHelp(false)} className="wb-modal-bg">
          <div onClick={(e) => e.stopPropagation()} className="wb-modal" style={{ width: 720 }}>
            <div className="wb-modal-head"><h3>Keyboard shortcuts</h3><button type="button" className="wb-btn" onClick={() => setShowHelp(false)} aria-label="Close"><Icon name="x" /></button></div>
            <div className="wb-help">
              {HELP.map(([section, rows]) => (
                <div key={section}>
                  <h4>{section}</h4>
                  {rows.map(([keys, what]) => (
                    <div key={what} className="wb-help-row"><span>{what}</span><span>{keys.split(" ").map((k, i) => <kbd key={i}>{k}</kbd>)}</span></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const HELP: [string, [string, string][]][] = [
  ["Tools", [["V", "Select"], ["Space", "Hand (hold to pan)"], ["P", "Pen"], ["H", "Highlighter"], ["X", "Eraser"], ["E", "Object eraser"], ["L", "Line"], ["A", "Arrow"], ["R", "Rectangle"], ["O", "Ellipse"], ["T", "Text"], ["M", "Equation"]]],
  ["Editing", [["Ctrl Z", "Undo"], ["Ctrl Y", "Redo"], ["Ctrl A", "Select all"], ["Ctrl D", "Duplicate"], ["Ctrl C", "Copy"], ["Ctrl X", "Cut"], ["Ctrl V", "Paste (items or an image)"], ["Del", "Delete selection"], ["Arrows", "Nudge (Shift = 10 px)"], ["Shift", "Constrain lines / shapes"], ["[ ]", "Thinner / thicker stroke"]]],
  ["View & board", [["Ctrl +", "Zoom in"], ["Ctrl −", "Zoom out"], ["Ctrl 0", "Reset to 100%"], ["Shift 1", "Zoom to fit"], ["Ctrl scroll", "Zoom at cursor"], ["G", "Snap to grid"], ["PgUp PgDn", "Previous / next page"], ["Ctrl S", "Save"], ["?", "This help"], ["Esc", "Deselect / close"]]],
];

// Pointer capture throws if the pointer is already gone (e.g. a very quick tap); drawing still works without it.
function capture(el: EventTarget, id: number) { try { (el as Element).setPointerCapture?.(id); } catch {} }
function katexHtml(latex: string): string { try { return katex.renderToString(latex, { throwOnError: false }); } catch { return latex; } }

const handle: React.CSSProperties = { position: "absolute", width: 14, height: 14, background: "#fff", border: "2px solid #2563eb", borderRadius: 3, touchAction: "none", pointerEvents: "auto", boxShadow: "0 1px 3px rgba(15,23,42,.3)" };

function Btn({ icon, label, tip, tipPos, on, disabled, onClick, small, danger, children }: {
  icon?: IconName; label?: string; tip?: string; tipPos?: "right" | "top" | "top-end" | "bottom-end"; on?: boolean; disabled?: boolean; onClick?: () => void; small?: boolean; danger?: boolean; children?: React.ReactNode;
}) {
  return (
    <button type="button" className={`wb-btn${tip ? " wb-tip" : ""}${small ? " wb-small" : ""}${danger ? " wb-danger" : ""}`} data-on={on || undefined}
      data-tip={tip} data-tip-pos={tipPos} aria-label={label ? undefined : tip} aria-pressed={on} disabled={disabled} onClick={onClick}>
      {icon && <Icon name={icon} size={small ? 16 : 18} />}{label && <span className="wb-lbl">{label}</span>}{children}
    </button>
  );
}
// Colour buttons act on mousedown (with the default prevented) so picking a
// colour mid-edit keeps the text input focused — a plain click would blur it
// first, committing the text in the old colour.
function Swatches({ colors, current, onPick }: { colors: string[]; current: string; onPick: (c: string) => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      {colors.map((c) => (
        <button key={c} type="button" className="wb-swatch" data-on={current === c || undefined} style={{ background: c }} aria-label={`Colour ${c}`}
          onMouseDown={(e) => { e.preventDefault(); onPick(c); }} />
      ))}
    </div>
  );
}
// Native colour input: `input` events preview live, the final `change` (picker closed) commits.
function ColorPicker({ value, onPick }: { value: string; onPick: (c: string, final: boolean) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const pickRef = useRef(onPick);
  pickRef.current = onPick;
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const h = () => pickRef.current(el.value, true);
    el.addEventListener("change", h); return () => el.removeEventListener("change", h);
  }, []);
  return (
    <label className="wb-swatch wb-custom wb-tip" data-tip="Custom colour">
      <input ref={ref} type="color" value={value} onChange={(e) => onPick(e.target.value, false)} aria-label="Custom colour" />
    </label>
  );
}

const WB_CSS = `
.wb-root { overflow: clip; font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif; color: #e2e8f0; }
.wb-top { display: flex; align-items: center; gap: 12px; padding: 8px 12px; background: #0b1220; border-bottom: 1px solid #1e293b; flex-wrap: wrap; }
.wb-title { background: transparent; border: 1px solid transparent; border-radius: 7px; color: #f8fafc; font: 600 15px/1 'Inter', system-ui, sans-serif; padding: 7px 8px; min-width: 0; width: 260px; max-width: 100%; }
.wb-title:hover { border-color: #26334d; }
.wb-title:focus { outline: none; border-color: #1b7a44; background: #0f172a; }
.wb-status { font-size: 12px; color: #64748b; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; }
.wb-status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #475569; }
.wb-status[data-state="ok"]::before { background: #34d27f; }
.wb-status[data-state="error"] { color: #fca5a5; } .wb-status[data-state="error"]::before { background: #ef4444; }
.wb-ctx { display: flex; align-items: center; gap: 6px; min-height: 48px; padding: 6px 12px; background: #0f172a; border-bottom: 1px solid #1e293b; flex-wrap: wrap; }
.wb-tool-name { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 600; color: #f1f5f9; padding-right: 4px; white-space: nowrap; }
.wb-hint { font-size: 12px; color: #64748b; margin-left: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1 1 0; min-width: 0; }
.wb-sep { width: 1px; height: 22px; background: #26334d; margin: 0 4px; flex: none; }
.wb-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 34px; min-width: 34px; padding: 0 8px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: #cbd5e1; font: 500 13px/1 'Inter', system-ui, sans-serif; cursor: pointer; transition: background .12s, color .12s, border-color .12s; white-space: nowrap; position: relative; }
.wb-btn:hover:not(:disabled) { background: #1e293b; color: #f8fafc; }
.wb-btn[data-on="true"] { background: #1b7a44; color: #fff; }
.wb-btn[data-on="true"]:hover:not(:disabled) { background: #208a4e; }
.wb-btn:disabled { opacity: .35; cursor: default; }
.wb-btn:focus-visible { outline: 2px solid #34d27f; outline-offset: 1px; }
.wb-btn.wb-outline { border-color: #26334d; }
.wb-btn.wb-primary { background: #1b7a44; color: #fff; font-weight: 600; }
.wb-btn.wb-primary:hover { background: #0d5c30; }
.wb-btn.wb-danger:hover:not(:disabled) { background: rgba(220,38,38,.16); color: #fca5a5; }
.wb-btn.wb-small { height: 30px; min-width: 30px; padding: 0 6px; }
.wb-btn.wb-chip { height: 30px; min-width: 32px; padding: 0 9px; border-color: #26334d; }
.wb-btn.wb-sym { height: 28px; min-width: 28px; padding: 0 6px; font-size: 15px; border-color: #26334d; }
.wb-btn.wb-live-on { background: rgba(239,68,68,.14); border-color: rgba(239,68,68,.45); color: #fecaca; font-weight: 600; }
.wb-btn.wb-live-on:hover { background: rgba(239,68,68,.24); }
.wb-live-dot { width: 8px; height: 8px; border-radius: 50%; background: #ef4444; box-shadow: 0 0 0 0 rgba(239,68,68,.6); animation: wb-pulse 1.8s infinite; flex: none; }
@keyframes wb-pulse { 0% { box-shadow: 0 0 0 0 rgba(239,68,68,.55); } 70% { box-shadow: 0 0 0 7px rgba(239,68,68,0); } 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); } }
.wb-select { height: 30px; border-radius: 7px; border: 1px solid #26334d; background: #0b1220; color: #e2e8f0; font: 500 13px 'Inter', system-ui, sans-serif; padding: 0 6px; cursor: pointer; }
.wb-select:focus-visible { outline: 2px solid #34d27f; }
.wb-bg { display: inline-flex; align-items: center; gap: 6px; color: #94a3b8; position: relative; }
.wb-swatch { width: 22px; height: 22px; border-radius: 50%; border: none; cursor: pointer; padding: 0; flex: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.22); transition: transform .1s; }
.wb-swatch:hover { transform: scale(1.12); }
.wb-swatch[data-on="true"] { box-shadow: 0 0 0 2px #0f172a, 0 0 0 4px #34d27f; }
.wb-custom { position: relative; display: inline-block; background: conic-gradient(#ef4444, #f59e0b, #eab308, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #ef4444); }
.wb-custom input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; border: none; padding: 0; }
.wb-symbols { display: flex; gap: 3px; flex-wrap: wrap; }
.wb-tip[data-tip]::after { content: attr(data-tip); position: absolute; z-index: 80; pointer-events: none; opacity: 0; transition: opacity .1s; white-space: pre; background: #020617; color: #e2e8f0; font: 500 12px/1.2 'Inter', system-ui, sans-serif; padding: 6px 9px; border-radius: 6px; border: 1px solid #1e293b; box-shadow: 0 6px 18px rgba(2,6,23,.4); left: 50%; top: calc(100% + 8px); transform: translateX(-50%); }
.wb-tip[data-tip]:hover::after { opacity: 1; transition-delay: .4s; }
.wb-tip[data-tip-pos="right"]::after { left: calc(100% + 10px); top: 50%; transform: translateY(-50%); }
.wb-tip[data-tip-pos="top"]::after, .wb-tip[data-tip-pos="top-end"]::after { top: auto; bottom: calc(100% + 8px); }
.wb-tip[data-tip-pos$="-end"]::after { left: auto; right: 0; transform: none; }
.wb-panel { background: rgba(15,23,42,.97); border: 1px solid #26334d; border-radius: 12px; box-shadow: 0 10px 30px rgba(2,6,23,.28); }
.wb-rail { position: absolute; left: 12px; top: 12px; z-index: 30; display: flex; flex-direction: column; padding: 5px; gap: 0; }
.wb-rail-grp { display: flex; flex-direction: column; gap: 2px; padding: 4px 0; }
.wb-rail-grp + .wb-rail-grp { border-top: 1px solid #26334d; }
.wb-rail .wb-btn { width: 38px; height: 38px; padding: 0; }
.wb-dock { position: absolute; bottom: 12px; z-index: 30; display: flex; align-items: center; gap: 2px; padding: 4px; }
.wb-dock-left { left: 66px; } .wb-dock-right { right: 12px; }
.wb-zoom { min-width: 54px; font-variant-numeric: tabular-nums; font-weight: 600; }
.wb-pageno { font-size: 13px; font-weight: 500; color: #cbd5e1; padding: 0 6px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.wb-count { font-size: 12px; color: #94a3b8; padding: 0 8px 0 6px; align-self: center; white-space: nowrap; }
.wb-menu { position: absolute; right: 0; top: calc(100% + 6px); z-index: 75; width: 250px; padding: 6px; display: flex; flex-direction: column; }
.wb-menu button { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; text-align: left; background: none; border: none; border-radius: 8px; padding: 9px 10px; color: #f1f5f9; cursor: pointer; font: 600 13px 'Inter', system-ui, sans-serif; }
.wb-menu button span { font-weight: 400; font-size: 12px; color: #94a3b8; }
.wb-menu-side { left: calc(100% + 16px); right: auto; top: auto; bottom: -6px; width: 290px; }
.wb-menu-side button { flex-direction: row; align-items: center; gap: 12px; color: #cbd5e1; }
.wb-menu-side button > span { display: flex; flex-direction: column; gap: 3px; color: #f1f5f9; font-size: 13px; }
.wb-menu-side button > span > span { font-weight: 400; font-size: 12px; color: #94a3b8; }
.wb-menu button:hover { background: #1e293b; }
.wb-livebar { display: flex; align-items: center; gap: 10px; padding: 7px 12px; background: #052e1a; border-bottom: 1px solid #0b4a2b; font-size: 13px; flex-wrap: wrap; }
.wb-share { flex: 1; min-width: 200px; height: 30px; border-radius: 7px; border: 1px solid #0f5a35; background: #021c10; color: #d1fae5; font: 500 13px ui-monospace, 'Cascadia Code', Consolas, monospace; padding: 0 9px; }
.wb-toast { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); z-index: 40; background: #0f172a; color: #f1f5f9; border: 1px solid #26334d; border-left: 3px solid #34d27f; padding: 9px 16px; border-radius: 8px; font-size: 13px; font-weight: 500; box-shadow: 0 10px 30px rgba(2,6,23,.35); pointer-events: none; max-width: 90%; }
.wb-toast[data-kind="err"] { border-left-color: #ef4444; }
.wb-toast[data-kind="info"] { border-left-color: #60a5fa; }
.wb-empty { position: absolute; left: 50%; top: 42%; transform: translate(-50%, -50%); text-align: center; color: #94a3b8; font-size: 13px; line-height: 1.6; pointer-events: none; user-select: none; max-width: 90%; }
.wb-empty kbd, .wb-help kbd { display: inline-block; min-width: 20px; padding: 1px 6px; border-radius: 5px; border: 1px solid #cbd5e1; border-bottom-width: 2px; background: #f8fafc; color: #334155; font: 600 11px/1.5 'Inter', system-ui, sans-serif; text-align: center; }
.wb-mathpop { position: absolute; z-index: 35; width: 340px; background: #fff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 16px 40px rgba(15,23,42,.28); padding: 12px; color: #0f172a; }
.wb-dlg-btn { height: 32px; padding: 0 14px; border-radius: 8px; border: 1px solid #cbd5e1; background: #fff; color: #334155; font: 600 13px 'Inter', system-ui, sans-serif; cursor: pointer; }
.wb-dlg-btn:hover { background: #f1f5f9; }
.wb-dlg-primary { background: #1b7a44; border-color: #1b7a44; color: #fff; }
.wb-dlg-primary:hover { background: #0d5c30; }
.wb-graph { position: fixed; background: #fff; border: 1px solid #26334d; border-radius: 12px; box-shadow: 0 24px 60px rgba(2,6,23,.5); z-index: 90; display: flex; flex-direction: column; overflow: hidden; }
.wb-graph-head { cursor: move; background: #0f172a; color: #e2e8f0; padding: 6px 8px 6px 12px; display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 13px; touch-action: none; border-bottom: 1px solid #26334d; }
.wb-modal-bg { position: fixed; inset: 0; background: rgba(2,6,23,.6); z-index: 100; display: grid; place-items: center; padding: 16px; }
.wb-modal { background: #0f172a; border: 1px solid #26334d; border-radius: 14px; padding: 18px 20px 20px; max-width: 100%; max-height: 80vh; overflow: auto; color: #e2e8f0; box-shadow: 0 24px 60px rgba(2,6,23,.5); }
.wb-modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.wb-modal-head h3 { margin: 0; font: 600 20px 'Fraunces', Georgia, serif; color: #f8fafc; }
.wb-board-row { display: flex; flex-direction: column; gap: 3px; width: 100%; text-align: left; padding: 10px 12px; border: 1px solid #26334d; border-radius: 9px; margin-bottom: 8px; background: #0b1220; color: #f1f5f9; cursor: pointer; font: 600 14px 'Inter', system-ui, sans-serif; }
.wb-board-row:hover { border-color: #1b7a44; background: #0d1a2c; }
.wb-badge { font-size: 11px; font-weight: 600; color: #fecaca; background: rgba(239,68,68,.16); border-radius: 999px; padding: 2px 8px; }
.wb-help { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px 28px; }
.wb-help h4 { margin: 8px 0 6px; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #64748b; font-weight: 600; }
.wb-help-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 4px 0; font-size: 13px; color: #cbd5e1; border-bottom: 1px solid #172036; }
.wb-help-row > span:last-child { display: inline-flex; gap: 3px; flex: none; }
.wb-help kbd { background: #1e293b; color: #e2e8f0; border-color: #334155; }
@media (max-height: 640px) {
  .wb-rail { padding: 3px; }
  .wb-rail-grp { padding: 2px 0; }
  .wb-rail .wb-btn { width: 32px; height: 32px; }
}
@media (max-width: 760px) {
  .wb-lbl { display: none; }
  .wb-title { width: 160px; }
  .wb-ctx { flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .wb-ctx > * { flex: 0 0 auto; }
  .wb-hint { display: none; }
  .wb-rail .wb-btn { width: 34px; height: 34px; }
  .wb-dock-right { bottom: 60px; }
  .wb-dock-left { left: 58px; }
  .wb-tip[data-tip]::after { display: none; }
}`;
