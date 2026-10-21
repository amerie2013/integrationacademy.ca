// IB AA SL chapter 1 figures (standalone SVG documents): sequence terms as points, partial sums as bars,
// Pascal's triangle with highlighted entries, dot patterns, a value-over-time chart and a bouncing-ball path.
// Lessons wrap them with fig(); the bank, assignments and written questions use the raw SVG; worksheets use svgT().
import { planeDoc } from "../mth1w-ch4/figs4.mjs";

const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const COL = { blue: "#1d4ed8", green: "#15803d", red: "#b91c1c", violet: "#6d28d9", amber: "#b45309", gray: "#64748b" };
const nice = (span, lines = 8) => { const raw = Math.max(span / lines, 1e-9), p = 10 ** Math.floor(Math.log10(raw)), m = raw / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p; };
const box = (ys, pad = 0.12) => { const lo = Math.min(0, ...ys), hi = Math.max(0, ...ys), p = (hi - lo || 1) * pad; return [lo - p, hi + p]; };

/** wrap a raw SVG for a lesson (scales down on phones), with an optional caption */
export const fig = (svg, caption = "") => `<div style="text-align:center;margin:12px 0;">${svg.replace(/width="(\d+)" height="(\d+)"/, 'width="$1" height="$2" style="max-width:100%;height:auto;"')}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`;

/** terms u_1..u_n of a sequence as labelled points on a grid; label: which terms get a label ("ends" | "all" | "none") */
export function seqDoc(us, { color = "blue", label = "ends", line = false, start = 1, ylabel = "uₙ", xlabel = "n", extra = [] } = {}) {
  const ns = us.map((_, i) => i + start), [ymin, ymax] = box([...us, ...extra.map((p) => p.y)]);
  const pts = us.map((u, i) => ({ x: ns[i], y: u, color, label: label === "all" || (label === "ends" && (i < 2 || i === us.length - 1)) ? `(${ns[i]}, ${lab(u)})` : undefined }));
  return planeDoc({ view: { xmin: start - 1, xmax: ns[ns.length - 1] + 1, ymin, ymax }, step: { x: 1, y: nice(ymax - ymin) }, points: [...pts, ...extra], segs: line ? [{ pts: ns.map((n, i) => [n, us[i]]), color: "gray" }] : [], xlabel, ylabel });
}

/** bars for a list of values (e.g. partial sums), optional dashed horizontal limit line */
export function barsDoc(vals, { color = "#15803d", limit = null, start = 1, labels = true, title = "", xlab = "n", w = 420, h = 260 } = {}) {
  const [lo, hi] = box([...vals, ...(limit !== null ? [limit] : [])]);
  const PL = 44, PB = 30, PT = title ? 26 : 10, PR = 12, Wd = w - PL - PR, Ht = h - PT - PB;
  const n = vals.length, bw = Math.min(34, (Wd / n) * 0.62);
  const X = (i) => PL + ((i + 0.5) / n) * Wd, Y = (v) => PT + Ht - ((v - lo) / (hi - lo)) * Ht;
  const st = nice(hi - lo, 6);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif"><rect width="${w}" height="${h}" fill="#fff"/>`;
  if (title) s += `<text x="${w / 2}" y="17" font-size="13.5" font-weight="700" text-anchor="middle" fill="#0f172a">${esc(title)}</text>`;
  for (let v = Math.ceil(lo / st) * st; v <= hi + 1e-9; v += st) s += `<line x1="${PL}" y1="${Y(v)}" x2="${PL + Wd}" y2="${Y(v)}" stroke="#eef2f7"/><text x="${PL - 5}" y="${Y(v) + 4}" font-size="11.5" text-anchor="end" fill="#475569">${lab(v)}</text>`;
  s += `<line x1="${PL}" y1="${Y(0)}" x2="${PL + Wd}" y2="${Y(0)}" stroke="#0f172a" stroke-width="1.4"/>`;
  vals.forEach((v, i) => {
    s += `<rect x="${X(i) - bw / 2}" y="${Math.min(Y(v), Y(0))}" width="${bw}" height="${Math.abs(Y(v) - Y(0))}" fill="${color}" opacity="0.78"/>`;
    s += `<text x="${X(i)}" y="${PT + Ht + 16}" font-size="11.5" text-anchor="middle" fill="#475569">${i + start}</text>`;
    if (labels) s += `<text x="${X(i)}" y="${v >= 0 ? Y(v) - 4 : Y(v) + 13}" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a">${lab(v)}</text>`;
  });
  if (limit !== null) s += `<line x1="${PL}" y1="${Y(limit)}" x2="${PL + Wd}" y2="${Y(limit)}" stroke="#b91c1c" stroke-width="2" stroke-dasharray="7 5"/><text x="${PL + Wd - 4}" y="${Y(limit) - 6}" font-size="12" font-weight="700" text-anchor="end" fill="#b91c1c">${lab(limit)}</text>`;
  s += `<text x="${PL + Wd}" y="${h - 4}" font-size="12" font-weight="700" text-anchor="end" fill="#0f172a">${esc(xlab)}</text>`;
  return s + "</svg>";
}

/** Pascal's triangle rows 0..n; hl = list of [row, col] to highlight */
export function pascalDoc(n, hl = [], { w = 420 } = {}) {
  const C = (a, b) => { let c = 1; for (let i = 1; i <= b; i++) c = (c * (a - b + i)) / i; return Math.round(c); };
  const rowH = 30, h = (n + 1) * rowH + 14, gap = Math.min(44, (w - 40) / (n + 1));
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif"><rect width="${w}" height="${h}" fill="#fff"/>`;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= i; j++) {
    const x = w / 2 + (j - i / 2) * gap, y = 20 + i * rowH, on = hl.some(([a, b]) => a === i && b === j), v = C(i, j);
    s += `<circle cx="${x}" cy="${y - 5}" r="${Math.min(13, gap / 2 - 1)}" fill="${on ? "#b91c1c" : "#f1f5f9"}" stroke="${on ? "#b91c1c" : "#cbd5e1"}"/><text x="${x}" y="${y}" font-size="${v > 99 ? 9.5 : 12}" text-anchor="middle" fill="${on ? "#fff" : "#0f172a"}" font-weight="${on ? 700 : 400}">${v}</text>`;
  }
  return s + "</svg>";
}

/** dot patterns: counts[k] dots in figure k+1, arranged by shape ("tri" | "sq" | "rect" | "line") */
export function dotsDoc(counts, shape = "tri", { w = 420, color = "#6d28d9" } = {}) {
  const r = 4.5, g = 12, figs = [];
  for (const c of counts) {
    const pts = [];
    if (shape === "sq") { const m = Math.round(Math.sqrt(c)); for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) pts.push([j, i]); }
    else if (shape === "rect") { const m = Math.round((Math.sqrt(4 * c + 1) - 1) / 2); for (let i = 0; i < m; i++) for (let j = 0; j <= m; j++) pts.push([j, i]); }
    else if (shape === "line") { for (let j = 0; j < c; j++) pts.push([j % 6, Math.floor(j / 6)]); }
    else { let k = 0; for (let row = 0; k < c; row++) for (let j = 0; j <= row && k < c; j++, k++) pts.push([j - row / 2, row]); }
    figs.push(pts);
  }
  const widths = figs.map((p) => (Math.max(...p.map((q) => q[0])) - Math.min(...p.map((q) => q[0])) + 1) * g);
  const H = Math.max(...figs.map((p) => (Math.max(...p.map((q) => q[1])) + 1) * g)) + 34;
  const total = widths.reduce((a, b) => a + b, 0) + (figs.length + 1) * 22, W = Math.max(w, total);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  let x0 = (W - total) / 2 + 22;
  figs.forEach((pts, k) => {
    const mn = Math.min(...pts.map((q) => q[0])), mh = Math.max(...pts.map((q) => q[1]));
    for (const [x, y] of pts) s += `<circle cx="${x0 + (x - mn) * g + g / 2}" cy="${H - 26 - (mh - y) * g - g / 2 + (mh - y) * 0 - (y - mh) * 0}" r="${r}" fill="${color}"/>`;
    s += `<text x="${x0 + widths[k] / 2}" y="${H - 6}" font-size="12" text-anchor="middle" fill="#475569">${k + 1}</text>`;
    x0 += widths[k] + 22;
  });
  return s + "</svg>";
}

/** a ball dropped from h0 that rebounds to a fraction f of each height, shown for `bounces` bounces */
export function bounceDoc(h0, f, bounces = 4, { w = 420, h = 230 } = {}) {
  const PL = 40, PB = 26, PT = 12, Wd = w - PL - 14, Ht = h - PT - PB, Y = (v) => PT + Ht - (v / h0) * Ht;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif"><rect width="${w}" height="${h}" fill="#fff"/>`;
  s += `<line x1="${PL}" y1="${Y(0)}" x2="${PL + Wd}" y2="${Y(0)}" stroke="#0f172a" stroke-width="1.6"/>`;
  const seg = Wd / (bounces * 2 + 1);
  let d = `M${PL},${Y(h0)} Q${PL + seg * 0.2},${Y(h0)} ${PL + seg},${Y(0)}`, x = PL + seg, hh = h0;
  for (let b = 0; b < bounces; b++) { hh *= f; d += ` Q${x + seg},${Y(hh) - (Y(0) - Y(hh)) * 0.95} ${x + 2 * seg},${Y(0)}`; s += `<text x="${x + seg}" y="${Y(hh) - 6}" font-size="11.5" font-weight="700" text-anchor="middle" fill="#6d28d9">${lab(hh)}</text>`; x += 2 * seg; }
  s += `<path d="${d}" fill="none" stroke="#6d28d9" stroke-width="2.4"/><text x="${PL + 4}" y="${Y(h0) - 4}" font-size="11.5" font-weight="700" fill="#6d28d9">${lab(h0)} m</text>`;
  return s + "</svg>";
}

/** value over time for money problems: points at whole years (optional comparison series) */
export const moneyDoc = (series, { years, colors = ["green", "amber"], labels = [], ylabel = "value" } = {}) => {
  const all = series.flat(), [lo, hi] = [0, Math.max(...all) * 1.12];
  const points = series.flatMap((ys, k) => ys.map((y, t) => ({ x: t, y, color: colors[k], label: t === years ? `${labels[k] ?? ""}${lab(y)}` : undefined })));
  return planeDoc({ view: { xmin: -0.5, xmax: years + Math.max(2.2, years * 0.4), ymin: lo, ymax: hi }, step: { x: nice(years, 10), y: nice(hi - lo, 6) }, points, xlabel: "years", ylabel });
};
export { planeDoc };
