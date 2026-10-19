// Shared whiteboard types + canvas rendering, used by both the editor
// (components/Whiteboard) and the read-only live viewer (app/whiteboard/[id]).
//
// Shapes live in "world" coordinates. A View maps world → screen
// (screen = world * z + (x, y)), which is what gives the board zoom and pan;
// at the identity view world and screen pixels coincide, so boards saved
// before zoom existed render exactly as they did.

export type Pt = { x: number; y: number };
export type Rect = { x: number; y: number; w: number; h: number };
export type View = { x: number; y: number; z: number };
export const IDENTITY: View = { x: 0, y: 0, z: 1 };
export const GRID = 28; // world px per grid cell

export type Shape =
  | { t: "pen"; pts: Pt[]; c: string; w: number }
  | { t: "hl"; pts: Pt[]; c: string; w: number } // highlighter: thick + translucent
  | { t: "line" | "arrow" | "rect" | "ellipse"; a: Pt; b: Pt; c: string; w: number; dash?: boolean; fill?: string }
  | { t: "text"; x: number; y: number; s: string; c: string; size: number; font?: string }
  | { t: "math"; x: number; y: number; latex: string; c: string; size: number }
  | { t: "image"; x: number; y: number; w: number; h: number; src: string; rot?: number }
  | { t: "axes"; x: number; y: number; w: number; h: number } // coordinate plane to graph on
  | { t: "erase"; pts: Pt[]; w: number };
export type Bg = "blank" | "grid" | "graph" | "dots" | "lined";

/**
 * A saved board: an array of pages, plus which page is active (for live follow).
 * `view` is the world rectangle the owner currently has on screen, so live
 * viewers can follow the teacher's zoom/pan.
 */
export type BoardData = { pages: Shape[][]; active: number; bg: Bg; view?: Rect };

/** The view that fits world rect `r` inside a w×h screen with `pad` px of margin, zoom capped at `maxZ`. */
export function fitView(r: Rect, w: number, h: number, pad = 24, maxZ = 1): View {
  const z = Math.max(0.05, Math.min(maxZ, (w - pad * 2) / Math.max(1, r.w), (h - pad * 2) / Math.max(1, r.h)));
  return { z, x: w / 2 - (r.x + r.w / 2) * z, y: h / 2 - (r.y + r.h / 2) * z };
}

/** Text font for a text shape. Older boards may carry the retired Comic Sans "Marker" font; those render in Inter. */
export function textFont(font?: string): string {
  if (!font) return "Georgia, 'Times New Roman', serif";
  if (/comic/i.test(font)) return "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif";
  return font;
}

export function drawBg(ctx: CanvasRenderingContext2D, bg: Bg, w: number, h: number, v: View = IDENTITY) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);
  if (bg === "blank") return;
  const z = v.z;
  // visible world rectangle
  const wx0 = -v.x / z, wy0 = -v.y / z, wx1 = (w - v.x) / z, wy1 = (h - v.y) / z;
  const sx = (x: number) => Math.round(x * z + v.x) + 0.5; // crisp 1px lines
  const sy = (y: number) => Math.round(y * z + v.y) + 0.5;
  // Coarsen the grid when zoomed far out so lines never crowd into a grey wash.
  let step = GRID;
  while (step * z < 9) step *= 5;

  if (bg === "grid" || bg === "graph") {
    const minor = new Path2D(), major = new Path2D();
    for (let k = Math.floor(wx0 / step); k * step <= wx1; k++) {
      const p = (((k % 5) + 5) % 5 === 0) ? major : minor, x = sx(k * step);
      p.moveTo(x, 0); p.lineTo(x, h);
    }
    for (let k = Math.floor(wy0 / step); k * step <= wy1; k++) {
      const p = (((k % 5) + 5) % 5 === 0) ? major : minor, y = sy(k * step);
      p.moveTo(0, y); p.lineTo(w, y);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#edf1f6"; ctx.stroke(minor);
    ctx.strokeStyle = "#dce4ee"; ctx.stroke(major);
    if (bg === "graph") {
      // axes sit at the (world) centre of the board's home screen, as they always have
      const cx = sx(Math.round(w / 2 / GRID) * GRID), cy = sy(Math.round(h / 2 / GRID) * GRID);
      ctx.lineWidth = 1.5; ctx.strokeStyle = "#94a3b8";
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();
    }
  } else if (bg === "dots") {
    ctx.fillStyle = "#c3ccd8";
    const r = Math.max(0.8, Math.min(1.6, 1.3 * z));
    const dots = new Path2D();
    for (let i = Math.floor(wx0 / step); i * step <= wx1; i++) for (let j = Math.floor(wy0 / step); j * step <= wy1; j++) {
      const x = i * step * z + v.x, y = j * step * z + v.y;
      dots.moveTo(x + r, y); dots.arc(x, y, r, 0, 7);
    }
    ctx.fill(dots);
  } else if (bg === "lined") {
    const gap = GRID * 1.4;
    if (gap * z < 5) return;
    ctx.lineWidth = 1; ctx.strokeStyle = "#e3e9f1"; ctx.beginPath();
    for (let k = Math.max(1, Math.floor(wy0 / gap)); k * gap <= wy1; k++) { const y = sy(k * gap); ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();
  }
}

const _imgCache = new Map<string, HTMLImageElement>();
let _onImg: (() => void) | null = null;

/** A coordinate plane: x/y axes with arrows, numbered ticks from -1 to 10 on
 * each axis, and x/y labels, to graph on by hand. Drawn inside [x,y,w,h] —
 * the origin sits 1/11 of the way in from the low end (not centered), so
 * that full -1..10 range fits both directions. */
export function drawAxes(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const MIN = -1, MAX = 10, SPAN = MAX - MIN;
  const toX = (v: number) => x + ((v - MIN) / SPAN) * w;
  const toY = (v: number) => y + h - ((v - MIN) / SPAN) * h;
  const cx = Math.round(toX(0)), cy = Math.round(toY(0));
  ctx.save();
  // the two axis lines
  ctx.strokeStyle = "#334155"; ctx.fillStyle = "#334155"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(x, cy); ctx.lineTo(x + w, cy); ctx.moveTo(cx, y + h); ctx.lineTo(cx, y); ctx.stroke();
  // arrowheads: +x (right), +y (up)
  const a = 6;
  ctx.beginPath();
  ctx.moveTo(x + w, cy); ctx.lineTo(x + w - a, cy - a * 0.7); ctx.moveTo(x + w, cy); ctx.lineTo(x + w - a, cy + a * 0.7);
  ctx.moveTo(cx, y); ctx.lineTo(cx - a * 0.7, y + a); ctx.moveTo(cx, y); ctx.lineTo(cx + a * 0.7, y + a);
  ctx.stroke();

  // tick marks, -1..10 on each axis
  ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1;
  ctx.beginPath();
  for (let v = MIN; v <= MAX; v++) {
    if (v === 0) continue; // the origin itself — no tick needed, just the "0" label below
    const px = Math.round(toX(v)); ctx.moveTo(px, cy - 4); ctx.lineTo(px, cy + 4);
    const py = Math.round(toY(v)); ctx.moveTo(cx - 4, py); ctx.lineTo(cx + 4, py);
  }
  ctx.stroke();
  // tick numbers
  ctx.font = "11px Inter, system-ui, sans-serif"; ctx.fillStyle = "#64748b";
  ctx.textAlign = "center"; ctx.textBaseline = "top";
  for (let v = MIN; v <= MAX; v++) { if (v !== 0) ctx.fillText(String(v), toX(v), cy + 6); }
  ctx.textAlign = "right"; ctx.textBaseline = "middle";
  for (let v = MIN; v <= MAX; v++) { if (v !== 0) ctx.fillText(String(v), cx - 6, toY(v)); }
  ctx.textAlign = "right"; ctx.textBaseline = "top";
  ctx.fillText("0", cx - 6, cy + 6);

  // axis letter labels — "x" sits above its arrow (not below, where the "10"
  // tick number already is) to avoid overlapping it.
  ctx.font = "italic 13px Georgia, serif"; ctx.fillStyle = "#475569";
  ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillText("x", x + w - 14, cy - 8);
  ctx.fillText("y", cx + 8, y + 12);
  ctx.restore();
}

/** Freehand path smoothed with quadratic curves through segment midpoints. */
function strokePts(ctx: CanvasRenderingContext2D, pts: Pt[]) {
  ctx.beginPath();
  if (!pts.length) return;
  ctx.moveTo(pts[0].x, pts[0].y);
  if (pts.length < 3) { for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y); }
  else {
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2, my = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    const last = pts[pts.length - 1]; ctx.lineTo(last.x, last.y);
  }
  ctx.stroke();
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
    ctx.font = `${s.size}px ${textFont(s.font)}`;
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
    ctx.strokeStyle = s.c; ctx.lineWidth = s.w;
    strokePts(ctx, s.pts);
    ctx.restore();
    return;
  }
  ctx.strokeStyle = s.c; ctx.lineWidth = s.w;
  if (s.t === "pen") { strokePts(ctx, s.pts); return; }

  ctx.save();
  if (s.dash) ctx.setLineDash([s.w * 3 + 4, s.w * 2 + 5]);
  if (s.t === "line" || s.t === "arrow") {
    const ang = Math.atan2(s.b.y - s.a.y, s.b.x - s.a.x);
    const len = Math.hypot(s.b.x - s.a.x, s.b.y - s.a.y);
    const L = Math.min(9 + s.w * 2.4, len * 0.6); // arrowhead length
    // stop the shaft short of the tip so the round cap doesn't poke through the head
    const end = s.t === "arrow" ? { x: s.b.x - Math.cos(ang) * L * 0.6, y: s.b.y - Math.sin(ang) * L * 0.6 } : s.b;
    ctx.beginPath(); ctx.moveTo(s.a.x, s.a.y); ctx.lineTo(end.x, end.y); ctx.stroke();
    if (s.t === "arrow" && len > 1) {
      ctx.setLineDash([]);
      ctx.fillStyle = s.c; ctx.lineWidth = Math.max(1, s.w * 0.6);
      ctx.beginPath();
      ctx.moveTo(s.b.x, s.b.y);
      ctx.lineTo(s.b.x - L * Math.cos(ang - 0.42), s.b.y - L * Math.sin(ang - 0.42));
      ctx.lineTo(s.b.x - L * Math.cos(ang + 0.42), s.b.y - L * Math.sin(ang + 0.42));
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
  } else if (s.t === "rect" || s.t === "ellipse") {
    const x = Math.min(s.a.x, s.b.x), y = Math.min(s.a.y, s.b.y), w = Math.abs(s.b.x - s.a.x), h = Math.abs(s.b.y - s.a.y);
    ctx.beginPath();
    if (s.t === "rect") ctx.rect(x, y, w, h);
    else ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    if (s.fill) { ctx.fillStyle = s.fill; ctx.fill(); }
    ctx.stroke();
  }
  ctx.restore();
}

export function renderAll(ctx: CanvasRenderingContext2D, shapes: Shape[], bg: Bg, w: number, h: number, onImg?: () => void, v: View = IDENTITY) {
  _onImg = onImg ?? null;
  drawBg(ctx, bg, w, h, v);
  // No area-erasers? draw straight onto the canvas.
  if (!shapes.some((s) => s.t === "erase")) {
    ctx.save(); ctx.translate(v.x, v.y); ctx.scale(v.z, v.z);
    for (const s of shapes) drawShape(ctx, s);
    ctx.restore();
    return;
  }
  // Area-erasers present: draw ink on a separate layer so erasing removes ink
  // but leaves the grid/background intact, then composite the layer on top.
  const scale = ctx.canvas.width / w; // device pixels per CSS pixel
  const layer = document.createElement("canvas");
  layer.width = ctx.canvas.width; layer.height = ctx.canvas.height;
  const l = layer.getContext("2d")!;
  l.setTransform(scale * v.z, 0, 0, scale * v.z, scale * v.x, scale * v.y);
  for (const s of shapes) {
    if (s.t === "erase") {
      l.save();
      l.globalCompositeOperation = "destination-out";
      l.lineCap = "round"; l.lineJoin = "round"; l.strokeStyle = "rgba(0,0,0,1)"; l.lineWidth = s.w;
      strokePts(l, s.pts);
      l.restore();
    } else drawShape(l, s);
  }
  ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(layer, 0, 0); ctx.restore();
}
