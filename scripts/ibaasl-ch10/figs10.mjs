// Figures for IB AA SL chapter 10 (integration): the shared coordinate plane with shaded regions under or between
// curves and rectangle/trapezium strips. Lessons wrap them with fig(); bank/assignments/written use the raw SVG;
// worksheets use svgT(). The pixel mapping matches planeSvg in ../mth1w-ch4/figs4.mjs.
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
export { fig } from "../ibaasl-ch1/figs.mjs";

const FILL = { violet: "#ddd6fe", green: "#bbf7d0", red: "#fecaca", amber: "#fde68a", blue: "#bfdbfe" };
const EDGE = { violet: "#6d28d9", green: "#15803d", red: "#be123c", amber: "#b45309", blue: "#1e40af" };

/**
 * opts: planeDoc options. regions: [{ f, g = () => 0, a, b, color }] shaded between f and g on [a, b].
 * strips: [{ x0, x1, h, color }] rectangles from 0 to h, or { x0, x1, y0, y1, trap: true } trapezia.
 */
export function areaDoc(opts, regions = [], strips = []) {
  const svg = planeDoc(opts);
  const { xmin, xmax, ymin, ymax } = opts.view, Wd = opts.width ?? 420;
  const Ht = opts.height ?? (Math.abs((ymax - ymin) - (xmax - xmin)) < 1e-9 ? Wd : Math.round(Wd * 0.68));
  const PL = 34, PT = 10;
  const X = (x) => PL + ((x - xmin) / (xmax - xmin)) * Wd, Y = (y) => PT + Ht - ((Math.max(ymin, Math.min(ymax, y)) - ymin) / (ymax - ymin)) * Ht;
  let add = "";
  for (const r of regions) {
    const g = r.g ?? (() => 0), N = 160, top = [], bot = [];
    for (let i = 0; i <= N; i++) { const x = r.a + ((r.b - r.a) * i) / N; top.push(`${X(x).toFixed(1)},${Y(r.f(x)).toFixed(1)}`); bot.push(`${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`); }
    add += `<polygon points="${[...top, ...bot.reverse()].join(" ")}" fill="${FILL[r.color ?? "violet"]}" opacity="0.9"/>`;
  }
  for (const s of strips) {
    const c = s.color ?? "blue";
    add += s.trap
      ? `<polygon points="${X(s.x0)},${Y(0)} ${X(s.x0)},${Y(s.y0)} ${X(s.x1)},${Y(s.y1)} ${X(s.x1)},${Y(0)}" fill="${FILL[c]}" stroke="${EDGE[c]}" stroke-width="1.2"/>`
      : `<rect x="${X(s.x0)}" y="${Math.min(Y(0), Y(s.h))}" width="${X(s.x1) - X(s.x0)}" height="${Math.abs(Y(0) - Y(s.h))}" fill="${FILL[c]}" stroke="${EDGE[c]}" stroke-width="1.2"/>`;
  }
  // draw the shading just after the plot background (first stroked white rect), under the grid and curves
  return svg.replace(/(<rect x="\d+(?:\.\d+)?" y="\d+(?:\.\d+)?" width="[\d.]+" height="[\d.]+" fill="#fff"[^>]*\/>)/, `$1${add}`);
}

/** rectangle strips for f on [a, b] with n strips: kind "lower" | "upper" | "left" | "right" | "trap" */
export function stripsOf(f, a, b, n, kind = "lower", color = "blue") {
  const h = (b - a) / n, out = [];
  for (let i = 0; i < n; i++) {
    const x0 = a + i * h, x1 = x0 + h, y0 = f(x0), y1 = f(x1);
    if (kind === "trap") out.push({ x0, x1, y0, y1, trap: true, color });
    else out.push({ x0, x1, h: kind === "lower" ? Math.min(y0, y1) : kind === "upper" ? Math.max(y0, y1) : kind === "left" ? y0 : y1, color });
  }
  return out;
}
