"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { safeCompile } from "../lib/mathExpr";
import { supabase } from "../lib/supabase";
import { MathField, toggleMathKeyboard } from "./MathField";
import { MathKeyboard } from "./MathKeyboard";

/**
 * Our own interactive math lab (no third-party dependency, works offline).
 * Built on lib/mathExpr (safe, eval-free). Features:
 *  - Functions/equations: explicit & implicit (marching squares), plus
 *    parametric (x(t), y(t)) and polar (r(t)) curves.
 *  - Multiple named sliders, each animatable (play/pause, ping-pongs the range).
 *  - Tables of points, text labels/points, uploaded images.
 *  - Grid/axes/number toggles, grid-step control, pan, reset, title.
 *  - Zoom both axes together or each axis on its own (x+/x−, y+/y− buttons, or
 *    Shift/Alt + mouse-wheel).
 *  - Export PNG, save/load a project file, and "copy embed code" to drop the
 *    exact figure into a lesson via <iframe ...?embed=1&data=...>.
 */

const COLORS = ["#ef4444", "#1b7a44", "#0d9488", "#e69138", "#c2185b", "#2e9e6e", "#7c3aed", "#0ea5e9"];
let _uid = 0;
const uid = (p: string) => `${p}${_uid++}_${Math.random().toString(36).slice(2, 6)}`;

type Kind = "cartesian" | "parametric" | "polar";
type Fn = { id: string; kind: Kind; expr: string; exprY: string; tMin: number; tMax: number; color: string; thickness: number; visible: boolean; dMin: string; dMax: string; rMin: string; rMax: string };
type Slider = { id: string; name: string; value: number; min: number; max: number; step: number; anim: boolean; speed: number };
type Label = { id: string; text: string; x: number | string; y: number | string; color: string; visible: boolean; showPoint: boolean; angle?: number | string };
type Pt = { x: string; y: string };
type Shape = "circle" | "square" | "triangle";
type Tbl = { id: string; name: string; color: string; shape: Shape; visible: boolean; points: Pt[] };
type Img = { id: string; src: string; el: HTMLImageElement | null; x: string; y: string; width: number; rotation: number; opacity: number; visible: boolean };

const GRID_OPTS = ["auto", "0.1", "0.5", "1", "2", "5", "10", "20", "50", "100", "pi"];
const parseStep = (v: string) => (v === "pi" ? Math.PI : v === "auto" ? null : parseFloat(v));
function autoStep(zoom: number) {
  const target = 80 / zoom;
  const pow = Math.pow(10, Math.floor(Math.log10(target)));
  const n = target / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
}
function fmt(n: number) {
  if (!Number.isFinite(n)) return "";
  return parseFloat((Math.round(n * 1e6) / 1e6).toFixed(6)).toString();
}
const newFn = (i: number): Fn => ({ id: uid("f"), kind: "cartesian", expr: "y = x", exprY: "sin(t)", tMin: 0, tMax: 6.2832, color: COLORS[i % COLORS.length], thickness: 2.5, visible: true, dMin: "", dMax: "", rMin: "", rMax: "" });

export function Calculator({ initialData, initialState, embed = false }: { initialData?: string; initialState?: any; embed?: boolean }) {
  const [fns, setFns] = useState<Fn[]>([{ ...newFn(0), expr: "y = a*x^2", color: COLORS[0] }]);
  const [sliders, setSliders] = useState<Slider[]>([{ id: uid("s"), name: "a", value: 1, min: -10, max: 10, step: 0.1, anim: false, speed: 1 }]);
  const [labels, setLabels] = useState<Label[]>([]);
  const [tables, setTables] = useState<Tbl[]>([]);
  const [images, setImages] = useState<Img[]>([]);

  const [showGrid, setShowGrid] = useState(true);
  const [showAxes, setShowAxes] = useState(true);
  const [showNums, setShowNums] = useState(true);
  const [stepX, setStepX] = useState("auto");
  const [stepY, setStepY] = useState("auto");
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState("");
  const [panelOpen, setPanelOpen] = useState(() => typeof window === "undefined" || window.innerWidth > 760);

  const [hover, setHover] = useState<{ x: number; y: number } | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewRef = useRef({ zoomX: 40, zoomY: 40, ox: 0, oy: 0 });
  const sizeRef = useRef({ w: 600, h: 480 });
  const dragRef = useRef<{ x: number; y: number } | null>(null);

  // ── load shared/saved data ─────────────────────────────────
  useEffect(() => {
    if (initialState) { applyState(initialState); return; }
    if (initialData) { try { applyState(JSON.parse(decodeURIComponent(atob(initialData)))); } catch {} }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData, initialState]);

  function applyState(d: any) {
    if (Array.isArray(d.fns)) setFns(d.fns.map((f: any, i: number) => ({ ...newFn(i), ...f })));
    if (Array.isArray(d.sliders)) setSliders(d.sliders.map((s: any) => ({ anim: false, speed: 1, ...s })));
    if (Array.isArray(d.labels)) setLabels(d.labels);
    if (Array.isArray(d.tables)) setTables(d.tables);
    if (d.settings) { const s = d.settings; setShowGrid(s.showGrid ?? true); setShowAxes(s.showAxes ?? true); setShowNums(s.showNums ?? true); setStepX(s.stepX ?? "auto"); setStepY(s.stepY ?? "auto"); setTitle(s.title ?? ""); }
    if (d.view) {
      // Back-compat: older figures saved a single uniform `zoom`.
      const z = d.view.zoom ?? 40;
      viewRef.current = { zoomX: d.view.zoomX ?? z, zoomY: d.view.zoomY ?? z, ox: d.view.ox ?? 0, oy: d.view.oy ?? 0 };
    }
    if (Array.isArray(d.images)) {
      const loaded: Img[] = [];
      d.images.forEach((im: any) => {
        const el = new Image();
        el.crossOrigin = "anonymous"; // keep the canvas exportable for remote URLs
        el.onload = () => { loaded.push({ ...im, el }); if (loaded.length === d.images.length) setImages([...loaded]); draw(); };
        el.src = im.src;
      });
    }
  }

  function serialize() {
    return {
      fns, sliders, labels, tables,
      images: images.map((i) => ({ id: i.id, src: i.src, x: i.x, y: i.y, width: i.width, rotation: i.rotation, opacity: i.opacity, visible: i.visible })),
      view: viewRef.current,
      settings: { showGrid, showAxes, showNums, stepX, stepY, title },
    };
  }
  function flash(m: string) { setToast(m); setTimeout(() => setToast(""), 2200); }

  // ── transforms ─────────────────────────────────────────────
  const toPx = (x: number, y: number) => {
    const { w, h } = sizeRef.current; const { zoomX, zoomY, ox, oy } = viewRef.current;
    return { px: w / 2 + x * zoomX + ox, py: h / 2 - y * zoomY + oy };
  };
  const toMath = (px: number, py: number) => {
    const { w, h } = sizeRef.current; const { zoomX, zoomY, ox, oy } = viewRef.current;
    return { x: (px - w / 2 - ox) / zoomX, y: (h / 2 - py + oy) / zoomY };
  };

  function marker(ctx: CanvasRenderingContext2D, px: number, py: number, shape: Shape, s: number, color: string) {
    ctx.fillStyle = color; ctx.beginPath();
    if (shape === "square") ctx.rect(px - s, py - s, s * 2, s * 2);
    else if (shape === "triangle") { ctx.moveTo(px, py - s); ctx.lineTo(px - s, py + s); ctx.lineTo(px + s, py + s); ctx.closePath(); }
    else ctx.arc(px, py, s, 0, Math.PI * 2);
    ctx.fill();
  }

  const draw = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const { w, h } = sizeRef.current; const { zoomX, zoomY } = viewRef.current;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);

    const tl = toMath(0, 0), br = toMath(w, h);
    const xMin = tl.x, xMax = br.x, yMin = br.y, yMax = tl.y;
    const sX = parseStep(stepX) ?? autoStep(zoomX);
    const sY = parseStep(stepY) ?? autoStep(zoomY);
    const o = toPx(0, 0);

    if (showGrid) {
      ctx.lineWidth = 1; ctx.strokeStyle = "#eef2f7"; ctx.beginPath();
      for (let x = Math.floor(xMin / sX) * sX; x <= xMax; x += sX) { const p = toPx(x, 0); ctx.moveTo(p.px, 0); ctx.lineTo(p.px, h); }
      for (let y = Math.floor(yMin / sY) * sY; y <= yMax; y += sY) { const p = toPx(0, y); ctx.moveTo(0, p.py); ctx.lineTo(w, p.py); }
      ctx.stroke();
    }
    if (showAxes) { ctx.lineWidth = 1.5; ctx.strokeStyle = "#334155"; ctx.beginPath(); ctx.moveTo(0, o.py); ctx.lineTo(w, o.py); ctx.moveTo(o.px, 0); ctx.lineTo(o.px, h); ctx.stroke(); }
    if (showNums) {
      ctx.fillStyle = "#94a3b8"; ctx.font = "11px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "top";
      for (let x = Math.floor(xMin / sX) * sX; x <= xMax; x += sX) { if (Math.abs(x) < sX / 2) continue; const p = toPx(x, 0); ctx.fillText(fmt(x), p.px, Math.min(Math.max(o.py + 3, 2), h - 14)); }
      ctx.textAlign = "right"; ctx.textBaseline = "middle";
      for (let y = Math.floor(yMin / sY) * sY; y <= yMax; y += sY) { if (Math.abs(y) < sY / 2) continue; const p = toPx(0, y); ctx.fillText(fmt(y), Math.min(Math.max(o.px - 6, 26), w - 2), p.py); }
    }

    const vars: Record<string, number> = {};
    for (const s of sliders) vars[s.name] = s.value;
    const resolve = (v: string) => { const s = sliders.find((s) => s.name === v); return s ? s.value : parseFloat(v) || 0; };
    // Evaluate a domain/range-limit field: blank → fallback; otherwise an
    // expression that may use slider variables (e.g. "a", "2*a", "a+1").
    const lim = (s: string, fallback: number) => {
      if (s === undefined || s.trim() === "") return fallback;
      const v = safeCompile(s)(vars);
      return Number.isFinite(v) ? v : fallback;
    };

    for (const img of images) {
      if (!img.visible || !img.el) continue;
      const p = toPx(resolve(img.x), resolve(img.y));
      const iw = img.width * zoomX; const ih = (img.el.height / img.el.width) * iw;
      ctx.save(); ctx.translate(p.px, p.py); ctx.rotate(((img.rotation || 0) * Math.PI) / 180); ctx.globalAlpha = img.opacity;
      try { ctx.drawImage(img.el, -iw / 2, -ih / 2, iw, ih); } catch {}
      ctx.restore();
    }

    for (const t of tables) {
      if (!t.visible) continue;
      for (const pt of t.points) { if (pt.x === "" || pt.y === "") continue; const p = toPx(parseFloat(pt.x), parseFloat(pt.y)); marker(ctx, p.px, p.py, t.shape, 5, t.color); }
    }

    // curves
    for (const f of fns) {
      if (!f.visible) continue;
      ctx.strokeStyle = f.color; ctx.lineWidth = f.thickness;
      if (f.kind === "parametric") {
        if (!f.expr.trim() || !f.exprY.trim()) continue;
        const fx = safeCompile(f.expr), fy = safeCompile(f.exprY);
        ctx.beginPath(); let pen = false;
        const N = 1000;
        for (let k = 0; k <= N; k++) {
          const t = f.tMin + ((f.tMax - f.tMin) * k) / N;
          const X = fx({ t, ...vars }), Y = fy({ t, ...vars });
          if (!Number.isFinite(X) || !Number.isFinite(Y)) { pen = false; continue; }
          const p = toPx(X, Y);
          if (!pen) { ctx.moveTo(p.px, p.py); pen = true; } else ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      } else if (f.kind === "polar") {
        if (!f.expr.trim()) continue;
        const fr = safeCompile(f.expr);
        ctx.beginPath(); let pen = false;
        const N = 1000;
        for (let k = 0; k <= N; k++) {
          const th = f.tMin + ((f.tMax - f.tMin) * k) / N;
          const r = fr({ t: th, ...vars });
          if (!Number.isFinite(r)) { pen = false; continue; }
          const p = toPx(r * Math.cos(th), r * Math.sin(th));
          if (!pen) { ctx.moveTo(p.px, p.py); pen = true; } else ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      } else {
        if (!f.expr.trim()) continue;
        let e = f.expr.trim();
        if (e.includes("=")) { const [l, r] = e.split("="); e = `(${l})-(${r})`; } else e = `(${e})-y`;
        const fn = safeCompile(e);
        const dMin = lim(f.dMin, -Infinity), dMax = lim(f.dMax, Infinity);
        const rMin = lim(f.rMin, -Infinity), rMax = lim(f.rMax, Infinity);
        const res = 6; const cols = Math.ceil(w / res), rows = Math.ceil(h / res);
        const val = new Float64Array((rows + 1) * (cols + 1));
        for (let j = 0; j <= rows; j++) for (let i = 0; i <= cols; i++) {
          const m = toMath(i * res, j * res);
          if (m.x < dMin || m.x > dMax || m.y < rMin || m.y > rMax) { val[j * (cols + 1) + i] = NaN; continue; }
          const v = fn({ x: m.x, y: m.y, ...vars }); val[j * (cols + 1) + i] = Number.isFinite(v) ? v : NaN;
        }
        ctx.beginPath();
        const edge = (va: number, vb: number, ax: number, ay: number, bx: number, by: number) => {
          if (va * vb > 0 || va === vb) return null;
          const t = Math.abs(va) / (Math.abs(va) + Math.abs(vb));
          return { x: ax + t * (bx - ax), y: ay + t * (by - ay) };
        };
        for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
          const x0 = i * res, x1 = (i + 1) * res, y0 = j * res, y1 = (j + 1) * res;
          const v0 = val[j * (cols + 1) + i], v1 = val[j * (cols + 1) + i + 1], v2 = val[(j + 1) * (cols + 1) + i + 1], v3 = val[(j + 1) * (cols + 1) + i];
          if (isNaN(v0) || isNaN(v1) || isNaN(v2) || isNaN(v3)) continue;
          const es = [edge(v0, v1, x0, y0, x1, y0), edge(v1, v2, x1, y0, x1, y1), edge(v2, v3, x1, y1, x0, y1), edge(v3, v0, x0, y1, x0, y0)].filter(Boolean) as { x: number; y: number }[];
          if (es.length >= 2) { ctx.moveTo(es[0].x, es[0].y); ctx.lineTo(es[1].x, es[1].y); if (es.length === 4) { ctx.moveTo(es[2].x, es[2].y); ctx.lineTo(es[3].x, es[3].y); } }
        }
        ctx.stroke();
      }
    }

    // A label's x/y may be a number or an expression in the slider variables,
    // so a point can move as a slider changes (e.g. x = a, y = a^2).
    const cx = (v: number | string) => {
      if (typeof v === "number") return v;
      const r = safeCompile(String(v))(vars);
      return Number.isFinite(r) ? r : 0;
    };
    for (const l of labels) {
      if (!l.visible) continue;
      const lx = cx(l.x), ly = cx(l.y);
      const p = toPx(lx, ly); ctx.fillStyle = l.color;
      if (l.showPoint) { ctx.beginPath(); ctx.arc(p.px, p.py, 4, 0, Math.PI * 2); ctx.fill(); }
      ctx.font = "bold 14px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "bottom";
      // Dynamic text: any {expression} is evaluated live with the slider values
      // (and the point's current x/y in scope), e.g. "y = {a}" or "({x}, {y})".
      const shown = (l.text || "").replace(/\{([^}]+)\}/g, (_, e) => {
        const v = safeCompile(e)({ ...vars, x: lx, y: ly });
        return Number.isFinite(v) ? String(Math.round(v * 1000) / 1000) : "?";
      });
      if (shown) {
        // angle (degrees) may be a number or a slider expression; positive tilts up to the right
        const ang = l.angle == null || l.angle === "" ? 0 : cx(l.angle);
        if (ang) {
          ctx.save();
          ctx.translate(p.px, p.py - 8);
          ctx.rotate(-ang * Math.PI / 180);
          ctx.fillText(shown, 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(shown, p.px, p.py - 8);
        }
      }
    }
    if (title) { ctx.fillStyle = "#1e293b"; ctx.font = "bold 20px Fraunces, serif"; ctx.textAlign = "center"; ctx.textBaseline = "top"; ctx.fillText(title, w / 2, 14); }
  }, [fns, sliders, labels, tables, images, showGrid, showAxes, showNums, stepX, stepY, title]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const ro = new ResizeObserver(() => { sizeRef.current = { w: el.clientWidth, h: el.clientHeight }; draw(); });
    ro.observe(el); sizeRef.current = { w: el.clientWidth, h: el.clientHeight }; draw();
    return () => ro.disconnect();
  }, [draw]);

  // ── animation loop ─────────────────────────────────────────
  useEffect(() => {
    if (!sliders.some((s) => s.anim)) return;
    let raf = 0; let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      setSliders((list) => list.map((s) => {
        if (!s.anim) return s;
        let v = s.value + s.speed * dt; let sp = s.speed;
        if (v >= s.max) { v = s.max; sp = -Math.abs(s.speed); }
        else if (v <= s.min) { v = s.min; sp = Math.abs(s.speed); }
        return { ...s, value: Math.round(v * 1000) / 1000, speed: sp };
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [sliders]);

  // ── interaction ────────────────────────────────────────────
  function onDown(e: React.PointerEvent) { (e.target as HTMLElement).setPointerCapture(e.pointerId); dragRef.current = { x: e.clientX, y: e.clientY }; }
  function onMove(e: React.PointerEvent) {
    const rect = canvasRef.current!.getBoundingClientRect();
    if (dragRef.current) {
      const dx = e.clientX - dragRef.current.x, dy = e.clientY - dragRef.current.y;
      dragRef.current = { x: e.clientX, y: e.clientY };
      viewRef.current = { ...viewRef.current, ox: viewRef.current.ox + dx, oy: viewRef.current.oy + dy }; draw();
    } else setHover(toMath(e.clientX - rect.left, e.clientY - rect.top));
  }
  function onUp(e: React.PointerEvent) { dragRef.current = null; try { (e.target as HTMLElement).releasePointerCapture(e.pointerId); } catch {} }
  const clampZoom = (z: number) => Math.min(200000, Math.max(0.1, z));
  function onWheel(e: React.WheelEvent) {
    if (embed) return; // embedded lesson graphs: don't hijack page scroll / zoom — use the +/− buttons
    const rect = canvasRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const before = toMath(mx, my);
    const f = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    // Shift+wheel zooms the x-axis only; Alt/Ctrl+wheel the y-axis only.
    const fx = e.altKey || e.ctrlKey ? 1 : f;
    const fy = e.shiftKey ? 1 : f;
    const { w, h } = sizeRef.current; const v = viewRef.current;
    const zoomX = clampZoom(v.zoomX * fx), zoomY = clampZoom(v.zoomY * fy);
    viewRef.current = { zoomX, zoomY, ox: mx - w / 2 - before.x * zoomX, oy: my - h / 2 + before.y * zoomY };
    draw();
  }
  // Scale each axis independently, keeping the canvas centre fixed.
  function zoomAxis(fx: number, fy: number) {
    const { w, h } = sizeRef.current; const v = viewRef.current;
    const c = toMath(w / 2, h / 2);
    const zoomX = clampZoom(v.zoomX * fx), zoomY = clampZoom(v.zoomY * fy);
    viewRef.current = { zoomX, zoomY, ox: -c.x * zoomX, oy: c.y * zoomY };
    draw();
  }
  function reset() { viewRef.current = { zoomX: 40, zoomY: 40, ox: 0, oy: 0 }; draw(); }

  function addImage(src: string) {
    const el = new Image();
    el.crossOrigin = "anonymous"; // keep the canvas exportable for remote URLs
    el.onload = () => setImages((l) => [...l, { id: uid("img"), src, el, x: "0", y: "0", width: 4, rotation: 0, opacity: 1, visible: true }]);
    el.src = src;
  }
  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; e.target.value = ""; if (!file) return;
    // Upload to Supabase Storage and keep only the public URL in the figure, so
    // saved graphs and embed iframe URLs stay tiny. Fall back to an inline data
    // URL if upload fails (not signed in, or the graph-images bucket isn't set up).
    try {
      const ext = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "") || "png";
      const path = `${uid("img")}.${ext}`;
      const { error } = await supabase.storage.from("graph-images").upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      const url = supabase.storage.from("graph-images").getPublicUrl(path).data.publicUrl;
      if (!url) throw new Error("no url");
      addImage(url);
      flash("Image uploaded");
    } catch {
      const reader = new FileReader();
      reader.onload = (ev) => addImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      flash("Image added inline (sign in to store it as a link)");
    }
  }

  // ── export / save / embed ──────────────────────────────────
  function exportPng() {
    const c = canvasRef.current; if (!c) return;
    const a = document.createElement("a"); a.download = (title || "graph") + ".png"; a.href = c.toDataURL("image/png"); a.click();
  }
  function saveFile() {
    const blob = new Blob([JSON.stringify(serialize())], { type: "application/json" });
    const a = document.createElement("a"); a.download = (title || "graph") + ".json"; a.href = URL.createObjectURL(blob); a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function loadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return;
    const r = new FileReader(); r.onload = () => { try { applyState(JSON.parse(r.result as string)); flash("Project loaded"); } catch { flash("Could not read file"); } };
    r.readAsText(file); e.target.value = "";
  }
  async function copyEmbed() {
    const fig = serialize();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    let src = "";
    // Save the figure to the store and reference it by a short id, so the iframe
    // URL stays tiny even with uploaded images. Fall back to inline data if the
    // save fails (e.g. not signed in, or the graphs migration isn't run yet).
    try {
      const { data: row, error } = await supabase.from("graphs").insert({ data: fig }).select("id").single();
      if (error || !row) throw error;
      src = `${origin}/tools/graph?embed=1&id=${row.id}`;
    } catch {
      src = `${origin}/tools/graph?embed=1&data=${btoa(encodeURIComponent(JSON.stringify(fig)))}`;
    }
    try {
      const code = `<iframe src="${src}" width="700" height="500" style="border:0;border-radius:12px;" allow="autoplay"></iframe>`;
      await navigator.clipboard.writeText(code);
      flash(src.includes("id=") ? "Embed code copied (short link) — paste it into a lesson" : "Embed code copied (sign in to get a short link)");
    } catch { flash("Copy failed"); }
  }

  const patch = <T extends { id: string }>(set: React.Dispatch<React.SetStateAction<T[]>>, id: string, p: Partial<T>) => set((l) => l.map((it) => (it.id === id ? { ...it, ...p } : it)));
  const drop = <T extends { id: string }>(set: React.Dispatch<React.SetStateAction<T[]>>, id: string) => set((l) => l.filter((it) => it.id !== id));

  const plot = (
    <div ref={wrapRef} style={{ flex: 1, minWidth: 280, minHeight: 460, position: "relative", background: "#fff" }}>
      <canvas ref={canvasRef} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={() => setHover(null)} onWheel={onWheel} style={{ width: "100%", height: "100%", display: "block", cursor: "crosshair", touchAction: "none" }} />
      <div style={{ position: "absolute", top: 10, right: 10, display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <Ctrl onClick={() => zoomAxis(1.2, 1.2)} title="Zoom in (both axes)">+</Ctrl>
          <Ctrl onClick={() => zoomAxis(1 / 1.2, 1 / 1.2)} title="Zoom out (both axes)">−</Ctrl>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <ZBtn onClick={() => zoomAxis(1.2, 1)} title="Stretch x-axis">x+</ZBtn>
          <ZBtn onClick={() => zoomAxis(1 / 1.2, 1)} title="Shrink x-axis">x−</ZBtn>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <ZBtn onClick={() => zoomAxis(1, 1.2)} title="Stretch y-axis">y+</ZBtn>
          <ZBtn onClick={() => zoomAxis(1, 1 / 1.2)} title="Shrink y-axis">y−</ZBtn>
        </div>
        <Ctrl onClick={reset} title="Reset view">⤢</Ctrl>
      </div>
      {hover && <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(15,23,42,0.82)", color: "#fff", padding: "5px 10px", borderRadius: 8, fontSize: 12, fontFamily: "JetBrains Mono, monospace", pointerEvents: "none" }}>x = {fmt(Math.round(hover.x * 100) / 100)}, y = {fmt(Math.round(hover.y * 100) / 100)}</div>}
      {toast && <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", background: "#0f172a", color: "#fff", padding: "8px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600 }}>{toast}</div>}
    </div>
  );

  if (embed) return <div style={{ height: "100%", minHeight: 460 }}>{plot}</div>;

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 460 }}>
      <MathKeyboard />
      {panelOpen && (
      <div style={{ width: 320, flexShrink: 0, borderRight: "1px solid #e2e8f0", background: "#f8faff", padding: 14, overflowY: "auto", boxSizing: "border-box" }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Graph title (optional)" style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontWeight: 700, fontSize: 14, marginBottom: 12, boxSizing: "border-box" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
          <AddBtn color="#2563eb" onClick={() => setFns((l) => [...l, newFn(l.length)])}>+ Function</AddBtn>
          <AddBtn color="#0ea5e9" onClick={() => setFns((l) => [...l, { ...newFn(l.length), kind: "parametric", expr: "cos(t)", exprY: "sin(t)" }])}>+ Parametric</AddBtn>
          <AddBtn color="#7c3aed" onClick={() => setFns((l) => [...l, { ...newFn(l.length), kind: "polar", expr: "1 + cos(t)" }])}>+ Polar</AddBtn>
          <AddBtn color="#1b7a44" onClick={() => setSliders((l) => [...l, { id: uid("s"), name: nextName(l), value: 1, min: -10, max: 10, step: 0.1, anim: false, speed: 1 }])}>+ Slider</AddBtn>
          <AddBtn color="#e69138" onClick={() => setTables((l) => [...l, { id: uid("t"), name: "Table", color: "#e69138", shape: "circle", visible: true, points: [{ x: "1", y: "1" }, { x: "2", y: "4" }] }])}>+ Table</AddBtn>
          <AddBtn color="#0d9488" onClick={() => setLabels((l) => [...l, { id: uid("l"), text: "Point", x: 1, y: 1, color: "#0d9488", visible: true, showPoint: true, angle: 0 }])}>+ Text/Point</AddBtn>
          <label style={{ gridColumn: "1 / -1", background: "#c2185b", color: "#fff", padding: "7px", borderRadius: 8, fontWeight: 700, fontSize: 12, textAlign: "center", cursor: "pointer" }}>+ Image<input type="file" accept="image/*" style={{ display: "none" }} onChange={onUpload} /></label>
        </div>

        {sliders.length > 0 && (
          <button
            onClick={() => { const play = !sliders.some((s) => s.anim); setSliders((l) => l.map((s) => ({ ...s, anim: play }))); }}
            style={{ width: "100%", marginBottom: 8, padding: "8px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 13, color: "#fff", background: sliders.some((s) => s.anim) ? "#b91c1c" : "#16a34a" }}
          >
            {sliders.some((s) => s.anim) ? "⏸ Pause all sliders" : "▶ Play all sliders"}
          </button>
        )}

        {sliders.map((s) => (
          <Card key={s.id}>
            <Row>
              <button onClick={() => patch(setSliders, s.id, { anim: !s.anim })} title="Animate" style={{ ...eyeBtn(s.anim), color: s.anim ? "#fff" : "#1b7a44", background: s.anim ? "#1b7a44" : "#fff" }}>{s.anim ? "⏸" : "▶"}</button>
              <input value={s.name} onChange={(e) => patch(setSliders, s.id, { name: e.target.value })} style={{ width: 34, border: "1px solid #e2e8f0", borderRadius: 6, padding: "2px 4px", fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }} />
              <span style={{ flex: 1, fontSize: 13, color: "#475569" }}>= <strong>{s.value}</strong></span>
              <X onClick={() => drop(setSliders, s.id)} />
            </Row>
            <input type="range" min={s.min} max={s.max} step={s.step} value={s.value} onChange={(e) => patch(setSliders, s.id, { value: parseFloat(e.target.value) })} style={{ width: "100%", accentColor: "#1b7a44" }} />
            <div style={{ display: "flex", gap: 6, fontSize: 11, color: "#64748b" }}>
              <NumIn label="min" v={s.min} on={(v) => patch(setSliders, s.id, { min: v })} />
              <NumIn label="max" v={s.max} on={(v) => patch(setSliders, s.id, { max: v })} />
              <NumIn label="step" v={s.step} on={(v) => patch(setSliders, s.id, { step: v })} />
              <NumIn label="speed" v={s.speed} on={(v) => patch(setSliders, s.id, { speed: v })} />
            </div>
          </Card>
        ))}

        {fns.map((f) => (
          <Card key={f.id}>
            <Row>
              <input type="color" value={f.color} onChange={(e) => patch(setFns, f.id, { color: e.target.value })} style={{ width: 22, height: 22, border: "none", background: "none", cursor: "pointer", padding: 0 }} />
              {f.kind === "parametric" ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                  <MathField value={f.expr} onChange={(v) => patch(setFns, f.id, { expr: v })} placeholder="x(t)" style={exprIn} ariaLabel="x of t" />
                  <MathField value={f.exprY} onChange={(v) => patch(setFns, f.id, { exprY: v })} placeholder="y(t)" style={exprIn} ariaLabel="y of t" />
                </div>
              ) : (
                <MathField value={f.expr} onChange={(v) => patch(setFns, f.id, { expr: v })} placeholder={f.kind === "polar" ? "r in terms of t (e.g. 1+cos(t))" : "y = a*x^2  or  x^2+y^2=25"} style={exprIn} ariaLabel="function expression" />
              )}
              <button onClick={() => patch(setFns, f.id, { visible: !f.visible })} title="Show/Hide" style={eyeBtn(f.visible)}>{f.visible ? "●" : "○"}</button>
              <X onClick={() => drop(setFns, f.id)} />
            </Row>
            {f.kind !== "cartesian" && (
              <div style={{ display: "flex", gap: 6, marginTop: 6, fontSize: 11, color: "#64748b" }}>
                <span style={{ alignSelf: "center" }}>{f.kind === "polar" ? "θ" : "t"} from</span>
                <NumIn label="" v={f.tMin} on={(v) => patch(setFns, f.id, { tMin: v })} />
                <span style={{ alignSelf: "center" }}>to</span>
                <NumIn label="" v={f.tMax} on={(v) => patch(setFns, f.id, { tMax: v })} />
              </div>
            )}
            <div style={{ display: "flex", gap: 6, marginTop: 6, fontSize: 11, color: "#64748b", alignItems: "center" }}>
              <span>thickness</span>
              <input type="range" min={1} max={6} step={0.5} value={f.thickness} onChange={(e) => patch(setFns, f.id, { thickness: parseFloat(e.target.value) })} style={{ flex: 1 }} />
              <span style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase" }}>{f.kind}</span>
            </div>
            {f.kind === "cartesian" && (
              <details style={{ marginTop: 6, fontSize: 11, color: "#64748b" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>Domain / range limits</summary>
                <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                  <NumStr label="x≥" v={f.dMin} on={(v) => patch(setFns, f.id, { dMin: v })} />
                  <NumStr label="x≤" v={f.dMax} on={(v) => patch(setFns, f.id, { dMax: v })} />
                  <NumStr label="y≥" v={f.rMin} on={(v) => patch(setFns, f.id, { rMin: v })} />
                  <NumStr label="y≤" v={f.rMax} on={(v) => patch(setFns, f.id, { rMax: v })} />
                </div>
              </details>
            )}
          </Card>
        ))}

        {tables.map((t) => (
          <Card key={t.id}>
            <Row>
              <input type="color" value={t.color} onChange={(e) => patch(setTables, t.id, { color: e.target.value })} style={{ width: 22, height: 22, border: "none", background: "none", cursor: "pointer", padding: 0 }} />
              <input value={t.name} onChange={(e) => patch(setTables, t.id, { name: e.target.value })} style={{ flex: 1, minWidth: 0, padding: "5px 8px", border: "1px solid #cbd5e1", borderRadius: 7, fontSize: 13 }} />
              <select value={t.shape} onChange={(e) => patch(setTables, t.id, { shape: e.target.value as Shape })} style={{ border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12 }}><option value="circle">●</option><option value="square">■</option><option value="triangle">▲</option></select>
              <button onClick={() => patch(setTables, t.id, { visible: !t.visible })} style={eyeBtn(t.visible)}>{t.visible ? "●" : "○"}</button>
              <X onClick={() => drop(setTables, t.id)} />
            </Row>
            <div style={{ marginTop: 6 }}>
              <div style={{ display: "flex", gap: 6, fontSize: 10, color: "#94a3b8", fontWeight: 700, padding: "0 2px 2px" }}><span style={{ flex: 1 }}>x</span><span style={{ flex: 1 }}>y</span><span style={{ width: 18 }} /></div>
              {t.points.map((pt, i) => (
                <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <input value={pt.x} onChange={(e) => patch(setTables, t.id, { points: t.points.map((q, k) => (k === i ? { ...q, x: e.target.value } : q)) })} style={ptIn} />
                  <input value={pt.y} onChange={(e) => patch(setTables, t.id, { points: t.points.map((q, k) => (k === i ? { ...q, y: e.target.value } : q)) })} style={ptIn} />
                  <button onClick={() => patch(setTables, t.id, { points: t.points.filter((_, k) => k !== i) })} style={{ width: 18, border: "none", background: "none", color: "#cbd5e1", cursor: "pointer" }}>×</button>
                </div>
              ))}
              <button onClick={() => patch(setTables, t.id, { points: [...t.points, { x: "0", y: "0" }] })} style={{ fontSize: 11, color: "#1b7a44", background: "none", border: "1px dashed #cbd5e1", borderRadius: 6, padding: "4px 8px", cursor: "pointer", width: "100%" }}>+ point</button>
            </div>
          </Card>
        ))}

        {labels.map((l) => (
          <Card key={l.id}>
            <Row>
              <input type="color" value={l.color} onChange={(e) => patch(setLabels, l.id, { color: e.target.value })} style={{ width: 22, height: 22, border: "none", background: "none", cursor: "pointer", padding: 0 }} />
              <input value={l.text} onChange={(e) => patch(setLabels, l.id, { text: e.target.value })} placeholder="text — use {a} for a live value" title="Type {expression} for a live value, e.g. y = {a} or {x^2+1}" style={{ flex: 1, minWidth: 0, padding: "5px 8px", border: "1px solid #cbd5e1", borderRadius: 7, fontSize: 13 }} />
              <button onClick={() => patch(setLabels, l.id, { showPoint: !l.showPoint })} title="Toggle dot" style={eyeBtn(l.showPoint)}>•</button>
              <X onClick={() => drop(setLabels, l.id)} />
            </Row>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}><NumStr label="x (or expr)" v={String(l.x)} on={(v) => patch(setLabels, l.id, { x: v })} /><NumStr label="y (or expr)" v={String(l.y)} on={(v) => patch(setLabels, l.id, { y: v })} /><NumStr label="angle°" v={String(l.angle ?? 0)} on={(v) => patch(setLabels, l.id, { angle: v })} /></div>
          </Card>
        ))}

        {images.map((img) => (
          <Card key={img.id}>
            <Row><span style={{ flex: 1, fontSize: 13, fontWeight: 700, color: "#475569" }}>Image</span><button onClick={() => patch(setImages, img.id, { visible: !img.visible })} style={eyeBtn(img.visible)}>{img.visible ? "●" : "○"}</button><X onClick={() => drop(setImages, img.id)} /></Row>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}><NumStr label="x" v={img.x} on={(v) => patch(setImages, img.id, { x: v })} /><NumStr label="y" v={img.y} on={(v) => patch(setImages, img.id, { y: v })} /></div>
            <Slide label="size" min={0.2} max={30} step={0.2} v={img.width} on={(v) => patch(setImages, img.id, { width: v })} />
            <Slide label="rotate" min={0} max={360} step={1} v={img.rotation} on={(v) => patch(setImages, img.id, { rotation: v })} />
            <Slide label="opacity" min={0} max={1} step={0.05} v={img.opacity} on={(v) => patch(setImages, img.id, { opacity: v })} />
          </Card>
        ))}

        <div style={{ marginTop: 14, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 10 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <label style={{ flex: 1, fontSize: 12, color: "#475569" }}>x-grid<select value={stepX} onChange={(e) => setStepX(e.target.value)} style={selStyle}>{GRID_OPTS.map((o) => <option key={o} value={o}>{o === "pi" ? "π" : o}</option>)}</select></label>
            <label style={{ flex: 1, fontSize: 12, color: "#475569" }}>y-grid<select value={stepY} onChange={(e) => setStepY(e.target.value)} style={selStyle}>{GRID_OPTS.map((o) => <option key={o} value={o}>{o === "pi" ? "π" : o}</option>)}</select></label>
          </div>
          <Check label="Axes" v={showAxes} on={setShowAxes} /><Check label="Grid" v={showGrid} on={setShowGrid} /><Check label="Numbers" v={showNums} on={setShowNums} />
        </div>

        {/* export / save / embed */}
        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <AddBtn color="#0f172a" onClick={copyEmbed}>📋 Copy embed</AddBtn>
          <AddBtn color="#475569" onClick={exportPng}>📷 PNG</AddBtn>
          <AddBtn color="#475569" onClick={saveFile}>💾 Save</AddBtn>
          <label style={{ background: "#475569", color: "#fff", padding: "7px", borderRadius: 8, fontWeight: 700, fontSize: 12, textAlign: "center", cursor: "pointer" }}>📂 Load<input type="file" accept="application/json" style={{ display: "none" }} onChange={loadFile} /></label>
        </div>

        <details style={{ marginTop: 12, fontSize: 12, color: "#475569" }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, color: "#1b7a44" }}>How to type math</summary>
          <ul style={{ margin: "6px 0 0 16px", lineHeight: 1.7 }}>
            <li>Type <code>^</code> to jump into an exponent, <code>/</code> for a fraction, or use the <strong>⌨ Math keyboard</strong> button below.</li>
            <li>Explicit: <code>y = a x²</code>; implicit: <code>x² + y² = 25</code></li>
            <li>Parametric uses <code>t</code>: x(t) = <code>cos(t)</code>, y(t) = <code>sin(t)</code></li>
            <li>Polar uses <code>t</code> as θ: <code>1 + cos(t)</code></li>
            <li><code>sin cos tan sqrt abs ln log exp</code>, <code>pi</code>, <code>e</code></li>
          </ul>
        </details>

        {/* toggles MathLive's on-screen math keyboard for the focused field;
            hidden on touch devices, which use a plain text input instead */}
        <div className="ia-mathkbd-bar" style={{ position: "sticky", bottom: 0, marginTop: 12, marginLeft: -14, marginRight: -14, marginBottom: -14, padding: "8px 12px", background: "#f1f5fb", borderTop: "1px solid #d8e0ec" }}>
          <button onClick={toggleMathKeyboard} style={{ width: "100%", border: "none", background: "#1b7a44", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 800, padding: "8px", borderRadius: 8 }}>
            ⌨ Math keyboard
          </button>
        </div>
      </div>
      )}
      <button
        onClick={() => setPanelOpen((o) => !o)}
        title={panelOpen ? "Hide controls" : "Show controls"}
        style={{ alignSelf: "stretch", width: 22, flexShrink: 0, border: "none", borderRight: "1px solid #e2e8f0", background: "#eef2f7", color: "#475569", cursor: "pointer", fontSize: 14, fontWeight: 800 }}
      >
        {panelOpen ? "‹" : "›"}
      </button>
      {plot}
    </div>
  );
}

// ── small UI helpers ──────────────────────────────────────────
function nextName(sliders: Slider[]) {
  const used = new Set(sliders.map((s) => s.name));
  for (const c of "abcdefghijklmnopqrstuvwxyz") if (!used.has(c)) return c;
  return "k";
}
const selStyle: React.CSSProperties = { width: "100%", padding: "4px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12, marginTop: 2 };
const exprIn: React.CSSProperties = { flex: 1, minWidth: 0, padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 7, fontFamily: "JetBrains Mono, monospace", fontSize: 13, direction: "ltr", width: "100%", boxSizing: "border-box" };
const ptIn: React.CSSProperties = { flex: 1, minWidth: 0, padding: "4px 6px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12, fontFamily: "JetBrains Mono, monospace", textAlign: "center" };
function eyeBtn(on: boolean): React.CSSProperties { return { width: 24, height: 24, border: "1px solid #e2e8f0", borderRadius: 6, background: "#fff", color: on ? "#1b7a44" : "#cbd5e1", cursor: "pointer", flexShrink: 0 }; }
function Card({ children }: { children: React.ReactNode }) { return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 10, marginBottom: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>{children}</div>; }
function Row({ children }: { children: React.ReactNode }) { return <div style={{ display: "flex", alignItems: "center", gap: 6 }}>{children}</div>; }
function X({ onClick }: { onClick: () => void }) { return <button onClick={onClick} title="Remove" style={{ border: "none", background: "none", color: "#cbd5e1", fontSize: 18, lineHeight: 1, cursor: "pointer", flexShrink: 0 }}>×</button>; }
function AddBtn({ children, onClick, color }: { children: React.ReactNode; onClick: () => void; color: string }) { return <button onClick={onClick} style={{ background: color, color: "#fff", border: "none", borderRadius: 8, padding: "7px", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{children}</button>; }
function Ctrl({ children, onClick, title }: { children: React.ReactNode; onClick: () => void; title?: string }) { return <button onClick={onClick} title={title} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", color: "#1f3a4b", fontSize: 18, fontWeight: 700, cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "grid", placeItems: "center" }}>{children}</button>; }
function ZBtn({ children, onClick, title }: { children: React.ReactNode; onClick: () => void; title?: string }) { return <button onClick={onClick} title={title} style={{ width: 34, height: 30, borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", color: "#1f3a4b", fontSize: 13, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "grid", placeItems: "center" }}>{children}</button>; }
function NumIn({ label, v, on }: { label: string; v: number; on: (v: number) => void }) { return <label style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>{label}<input type="number" value={v} onChange={(e) => on(parseFloat(e.target.value) || 0)} style={{ width: "100%", padding: "3px 5px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12, boxSizing: "border-box" }} /></label>; }
function NumStr({ label, v, on }: { label: string; v: string; on: (v: string) => void }) { return <label style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, fontSize: 11, color: "#64748b" }}>{label}<input value={v} onChange={(e) => on(e.target.value)} style={{ width: "100%", padding: "3px 5px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12, boxSizing: "border-box", fontFamily: "JetBrains Mono, monospace" }} /></label>; }
function Slide({ label, min, max, step, v, on }: { label: string; min: number; max: number; step: number; v: number; on: (v: number) => void }) { return <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#64748b", marginTop: 6 }}><span style={{ width: 46 }}>{label}</span><input type="range" min={min} max={max} step={step} value={v} onChange={(e) => on(parseFloat(e.target.value))} style={{ flex: 1 }} /></div>; }
function Check({ label, v, on }: { label: string; v: boolean; on: (v: boolean) => void }) { return <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "#475569", padding: "3px 0", cursor: "pointer" }}>{label}<input type="checkbox" checked={v} onChange={(e) => on(e.target.checked)} /></label>; }
