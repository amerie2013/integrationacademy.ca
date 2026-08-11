// Shared whiteboard types + canvas rendering, used by both the editor
// (components/Whiteboard) and the read-only live viewer (app/whiteboard/[id]).

export type Pt = { x: number; y: number };
export type Shape =
  | { t: "pen"; pts: Pt[]; c: string; w: number }
  | { t: "hl"; pts: Pt[]; c: string; w: number } // highlighter: thick + translucent
  | { t: "line" | "arrow" | "rect" | "ellipse"; a: Pt; b: Pt; c: string; w: number }
  | { t: "text"; x: number; y: number; s: string; c: string; size: number; font?: string }
  | { t: "math"; x: number; y: number; latex: string; c: string; size: number }
  | { t: "image"; x: number; y: number; w: number; h: number; src: string; rot?: number }
  | { t: "axes"; x: number; y: number; w: number; h: number } // coordinate plane to graph on
  | { t: "erase"; pts: Pt[]; w: number };
export type Bg = "blank" | "grid" | "graph" | "dots" | "lined";

/** A saved board: an array of pages, plus which page is active (for live follow). */
export type BoardData = { pages: Shape[][]; active: number; bg: Bg };

export function drawBg(ctx: CanvasRenderingContext2D, bg: Bg, w: number, h: number) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);
  const step = 28;
  if (bg === "grid" || bg === "graph") {
    ctx.lineWidth = 1; ctx.strokeStyle = "#e6edf5";
    ctx.beginPath();
    for (let x = 0; x <= w; x += step) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
    for (let y = 0; y <= h; y += step) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();
    if (bg === "graph") {
      const cx = Math.round(w / 2 / step) * step, cy = Math.round(h / 2 / step) * step;
      ctx.lineWidth = 1.5; ctx.strokeStyle = "#94a3b8";
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
    }
  } else if (bg === "dots") {
    ctx.fillStyle = "#cbd5e1";
    for (let x = step; x < w; x += step) for (let y = step; y < h; y += step) { ctx.beginPath(); ctx.arc(x, y, 1.3, 0, 7); ctx.fill(); }
  } else if (bg === "lined") {
    ctx.lineWidth = 1; ctx.strokeStyle = "#e6edf5"; ctx.beginPath();
    for (let y = step * 1.4; y <= h; y += step * 1.4) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();
  }
}

const _imgCache = new Map<string, HTMLImageElement>();
let _onImg: (() => void) | null = null;

/** A coordinate plane (light grid + centered x/y axes with arrows and ticks) to
 * graph on by hand. Drawn inside the box [x,y,w,h]; origin at the centre. */
export function drawAxes(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const cx = Math.round(x + w / 2), cy = Math.round(y + h / 2);
  const step = 26;
  ctx.save();
  // faint grid
  ctx.strokeStyle = "#dbe4ef"; ctx.lineWidth = 1;
  ctx.beginPath();
  for (let gx = cx; gx <= x + w; gx += step) { ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); }
  for (let gx = cx - step; gx >= x; gx -= step) { ctx.moveTo(gx, y); ctx.lineTo(gx, y + h); }
  for (let gy = cy; gy <= y + h; gy += step) { ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); }
  for (let gy = cy - step; gy >= y; gy -= step) { ctx.moveTo(x, gy); ctx.lineTo(x + w, gy); }
  ctx.stroke();
  // axes
  ctx.strokeStyle = "#334155"; ctx.fillStyle = "#334155"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(x, cy); ctx.lineTo(x + w, cy); ctx.moveTo(cx, y + h); ctx.lineTo(cx, y); ctx.stroke();
  // ticks
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let gx = cx + step; gx <= x + w - 6; gx += step) { ctx.moveTo(gx, cy - 3); ctx.lineTo(gx, cy + 3); }
  for (let gx = cx - step; gx >= x + 6; gx -= step) { ctx.moveTo(gx, cy - 3); ctx.lineTo(gx, cy + 3); }
  for (let gy = cy + step; gy <= y + h - 6; gy += step) { ctx.moveTo(cx - 3, gy); ctx.lineTo(cx + 3, gy); }
  for (let gy = cy - step; gy >= y + 6; gy -= step) { ctx.moveTo(cx - 3, gy); ctx.lineTo(cx + 3, gy); }
  ctx.stroke();
  // arrowheads: +x (right), +y (up)
  const a = 6;
  ctx.beginPath();
  ctx.moveTo(x + w, cy); ctx.lineTo(x + w - a, cy - a * 0.7); ctx.moveTo(x + w, cy); ctx.lineTo(x + w - a, cy + a * 0.7);
  ctx.moveTo(cx, y); ctx.lineTo(cx - a * 0.7, y + a); ctx.moveTo(cx, y); ctx.lineTo(cx + a * 0.7, y + a);
  ctx.stroke();
  // labels
  ctx.font = "italic 13px Georgia, serif"; ctx.fillStyle = "#475569";
  ctx.fillText("x", x + w - 12, cy + 15);
  ctx.fillText("y", cx + 8, y + 12);
  ctx.restore();
}

export function drawShape(ctx: CanvasRenderingContext2D, s: Shape) {
  ctx.lineCap = "round"; ctx.lineJoin = "round";
  if (s.t === "image") {
    let im = _imgCache.get(s.src);
    if (!im) { im = new Image(); im.onload = () => { if (_onImg) _onImg(); }; im.src = s.src; _imgCache.set(s.src, im); }
    if (im.complete && im.naturalWidth) {
      const rot = s.rot || 0;
      if (rot) {
        ctx.save();
        ctx.translate(s.x + s.w / 2, s.y + s.h / 2); ctx.rotate(rot);
        ctx.drawImage(im, -s.w / 2, -s.h / 2, s.w, s.h);
        ctx.restore();
      } else ctx.drawImage(im, s.x, s.y, s.w, s.h);
    }
    return;
  }
  if (s.t === "axes") { drawAxes(ctx, s.x, s.y, s.w, s.h); return; }
  if (s.t === "text") {
    ctx.fillStyle = s.c;
    ctx.font = `${s.size}px ${s.font || "Georgia, 'Times New Roman', serif"}`;
    ctx.textBaseline = "top";
    s.s.split("\n").forEach((ln, i) => ctx.fillText(ln, s.x, s.y + i * s.size * 1.25));
    return;
  }
  if (s.t === "math") return; // math is rendered as a KaTeX overlay, not on the canvas
  if (s.t === "erase") return; // erasing is handled by renderAll's compositing layer
  if (s.t === "hl") {
    // Translucent so ink/text underneath stays readable. Plain alpha (not
    // "multiply") so it looks identical on the canvas and on the erase layer.
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = s.c; ctx.lineWidth = s.w;
    ctx.beginPath();
    s.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    ctx.stroke();
    ctx.restore();
    return;
  }
  ctx.strokeStyle = s.c; ctx.lineWidth = s.w;
  if (s.t === "pen") {
    ctx.beginPath();
    s.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    ctx.stroke();
  } else if (s.t === "line" || s.t === "arrow") {
    ctx.beginPath(); ctx.moveTo(s.a.x, s.a.y); ctx.lineTo(s.b.x, s.b.y); ctx.stroke();
    if (s.t === "arrow") {
      const ang = Math.atan2(s.b.y - s.a.y, s.b.x - s.a.x), L = 6 + s.w * 2;
      ctx.beginPath();
      ctx.moveTo(s.b.x, s.b.y); ctx.lineTo(s.b.x - L * Math.cos(ang - 0.4), s.b.y - L * Math.sin(ang - 0.4));
      ctx.moveTo(s.b.x, s.b.y); ctx.lineTo(s.b.x - L * Math.cos(ang + 0.4), s.b.y - L * Math.sin(ang + 0.4));
      ctx.stroke();
    }
  } else if (s.t === "rect") {
    ctx.strokeRect(Math.min(s.a.x, s.b.x), Math.min(s.a.y, s.b.y), Math.abs(s.b.x - s.a.x), Math.abs(s.b.y - s.a.y));
  } else if (s.t === "ellipse") {
    ctx.beginPath();
    ctx.ellipse((s.a.x + s.b.x) / 2, (s.a.y + s.b.y) / 2, Math.abs(s.b.x - s.a.x) / 2, Math.abs(s.b.y - s.a.y) / 2, 0, 0, 7);
    ctx.stroke();
  }
}

export function renderAll(ctx: CanvasRenderingContext2D, shapes: Shape[], bg: Bg, w: number, h: number, onImg?: () => void) {
  _onImg = onImg ?? null;
  drawBg(ctx, bg, w, h);
  // No area-erasers? draw straight onto the canvas.
  if (!shapes.some((s) => s.t === "erase")) { for (const s of shapes) drawShape(ctx, s); return; }
  // Area-erasers present: draw ink on a separate layer so erasing removes ink
  // but leaves the grid/background intact, then composite the layer on top.
  const scale = ctx.canvas.width / w; // device pixels per CSS pixel
  const layer = document.createElement("canvas");
  layer.width = ctx.canvas.width; layer.height = ctx.canvas.height;
  const l = layer.getContext("2d")!;
  l.setTransform(scale, 0, 0, scale, 0, 0);
  for (const s of shapes) {
    if (s.t === "erase") {
      l.save();
      l.globalCompositeOperation = "destination-out";
      l.lineCap = "round"; l.lineJoin = "round"; l.strokeStyle = "rgba(0,0,0,1)"; l.lineWidth = s.w;
      l.beginPath(); s.pts.forEach((p, i) => (i ? l.lineTo(p.x, p.y) : l.moveTo(p.x, p.y))); l.stroke();
      l.restore();
    } else drawShape(l, s);
  }
  ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(layer, 0, 0); ctx.restore();
}
