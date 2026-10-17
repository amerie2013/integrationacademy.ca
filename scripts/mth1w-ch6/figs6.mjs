// Data figures for chapter 6: one SVG builder per chart type, used by lessons (HTML), bank, written questions,
// assignments (SVG documents) and worksheets (rendered to PNG).
//   boxPlot({ data | five:[min,q1,med,q3,max], lo, hi, step, label, outliers })
//   dotPlot({ data, lo, hi, step, label })
//   histogram({ bins:[[a,b,count]...], step, xlabel, ylabel })
//   barChart({ bars:[[label, value]...], base, top, step, ylabel, color })
//   scatter({ pts:[[x,y]...], view, step, xlabel, ylabel, line:{m,b}, curve:f }) — uses the chapter 4 plane
import { planeSvg } from "../mth1w-ch4/figs4.mjs";

const COL = { blue: "#1e40af", red: "#be123c", green: "#15803d", violet: "#6d28d9", amber: "#b45309", gray: "#475569", ink: "#0f172a" };
const fmt = (v) => { const r = Math.round(v * 100) / 100; return r < 0 ? `−${-r}` : String(r); };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const wrap = (w, h, body) => ({ svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif"><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`, w });

const sortN = (xs) => [...xs].sort((a, b) => a - b);
const med = (s) => (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2);
/** five-number summary by the median-of-halves method */
export function fiveNum(data) {
  const s = sortN(data), n = s.length, h = Math.floor(n / 2);
  return [s[0], med(s.slice(0, h)), med(s), med(s.slice(n % 2 ? h + 1 : h)), s[n - 1]];
}

/** horizontal number line axis from lo to hi */
function axis(X, y, lo, hi, step, label) {
  let s = `<line x1="${X(lo)}" y1="${y}" x2="${X(hi)}" y2="${y}" stroke="${COL.ink}" stroke-width="1.5"/>`;
  for (let v = lo; v <= hi + 1e-9; v += step) s += `<line x1="${X(v)}" y1="${y}" x2="${X(v)}" y2="${y + 5}" stroke="${COL.ink}"/><text x="${X(v)}" y="${y + 18}" font-size="12" text-anchor="middle" fill="${COL.gray}">${fmt(v)}</text>`;
  if (label) s += `<text x="${X(hi)}" y="${y + 34}" font-size="12" font-weight="700" text-anchor="end" fill="${COL.ink}">${esc(label)}</text>`;
  return s;
}

export function boxPlotSvg({ data = null, five = null, lo, hi, step = 1, label = "", outliers = [], w = 440, showValues = false }) {
  const [mn, q1, md, q3, mx] = five ?? fiveNum(data);
  const H = 110, X = (v) => 24 + ((v - lo) / (hi - lo)) * (w - 48), yb = 40;
  let s = `<line x1="${X(mn)}" y1="${yb}" x2="${X(q1)}" y2="${yb}" stroke="${COL.ink}" stroke-width="2"/><line x1="${X(q3)}" y1="${yb}" x2="${X(mx)}" y2="${yb}" stroke="${COL.ink}" stroke-width="2"/>`;
  s += `<rect x="${X(q1)}" y="${yb - 16}" width="${X(q3) - X(q1)}" height="32" fill="#fef3c7" stroke="${COL.amber}" stroke-width="2"/><line x1="${X(md)}" y1="${yb - 16}" x2="${X(md)}" y2="${yb + 16}" stroke="${COL.red}" stroke-width="3"/>`;
  for (const v of [mn, mx]) s += `<line x1="${X(v)}" y1="${yb - 10}" x2="${X(v)}" y2="${yb + 10}" stroke="${COL.ink}" stroke-width="2"/>`;
  for (const o of outliers) s += `<text x="${X(o)}" y="${yb + 6}" font-size="18" font-weight="800" text-anchor="middle" fill="${COL.red}">×</text>`;
  if (showValues) [mn, q1, md, q3, mx].forEach((v, i) => { s += `<text x="${X(v)}" y="${yb - 22 - (i % 2) * 0}" font-size="11" text-anchor="middle" fill="${COL.gray}">${fmt(v)}</text>`; });
  s += axis(X, 76, lo, hi, step, label);
  return wrap(w, H + (label ? 14 : 0), s);
}

export function dotPlotSvg({ data, lo, hi, step = 1, label = "", w = 440 }) {
  const cnt = new Map(); data.forEach((v) => cnt.set(v, (cnt.get(v) ?? 0) + 1));
  const top = Math.max(...cnt.values()), H = 50 + top * 15;
  const X = (v) => 24 + ((v - lo) / (hi - lo)) * (w - 48), base = H - 44;
  let s = "";
  for (const [v, c] of cnt) for (let k = 0; k < c; k++) s += `<circle cx="${X(v)}" cy="${base - 8 - k * 15}" r="6" fill="${COL.blue}"/>`;
  s += axis(X, base, lo, hi, step, label);
  return wrap(w, H + (label ? 10 : 0), s);
}

export function histogramSvg({ bins, step = null, xlabel = "", ylabel = "frequency", ystep = null, w = 440, color = "violet" }) {
  const lo = bins[0][0], hi = bins[bins.length - 1][1], top = Math.max(...bins.map((b) => b[2]));
  const ys = ystep ?? (top > 20 ? 5 : top > 8 ? 2 : 1), ytop = Math.ceil((top + 0.5) / ys) * ys;
  const PL = 44, PB = 40, PT = 14, Hh = 190, W = w - PL - 14;
  const X = (v) => PL + ((v - lo) / (hi - lo)) * W, Y = (c) => PT + Hh - (c / ytop) * Hh;
  let s = "";
  for (let c = 0; c <= ytop; c += ys) s += `<line x1="${PL}" y1="${Y(c)}" x2="${PL + W}" y2="${Y(c)}" stroke="#eef2f7"/><text x="${PL - 6}" y="${Y(c) + 4}" font-size="12" text-anchor="end" fill="${COL.gray}">${c}</text>`;
  for (const [a, b, c] of bins) s += `<rect x="${X(a)}" y="${Y(c)}" width="${X(b) - X(a)}" height="${Y(0) - Y(c)}" fill="#ede9fe" stroke="${COL[color]}" stroke-width="1.6"/>`;
  const st = step ?? bins[0][1] - bins[0][0];
  for (let v = lo; v <= hi + 1e-9; v += st) s += `<text x="${X(v)}" y="${PT + Hh + 16}" font-size="12" text-anchor="middle" fill="${COL.gray}">${fmt(v)}</text>`;
  s += `<line x1="${PL}" y1="${Y(0)}" x2="${PL + W}" y2="${Y(0)}" stroke="${COL.ink}" stroke-width="1.5"/><line x1="${PL}" y1="${PT}" x2="${PL}" y2="${Y(0)}" stroke="${COL.ink}" stroke-width="1.5"/>`;
  s += `<text x="${PL + W}" y="${PT + Hh + 34}" font-size="12" font-weight="700" text-anchor="end" fill="${COL.ink}">${esc(xlabel)}</text><text x="${PL + 4}" y="${PT + 10}" font-size="12" font-weight="700" fill="${COL.ink}">${esc(ylabel)}</text>`;
  return wrap(w, PT + Hh + PB + 4, s);
}

export function barChartSvg({ bars, base = 0, top = null, step = null, ylabel = "", w = 440, color = "blue" }) {
  const mx = top ?? Math.max(...bars.map((b) => b[1])) * 1.1, ys = step ?? Math.max(1, Math.round((mx - base) / 5));
  const PL = 44, PT = 14, Hh = 190, W = w - PL - 14, bw = W / bars.length;
  const Y = (v) => PT + Hh - ((v - base) / (mx - base)) * Hh;
  let s = "";
  for (let v = base; v <= mx + 1e-9; v += ys) s += `<line x1="${PL}" y1="${Y(v)}" x2="${PL + W}" y2="${Y(v)}" stroke="#eef2f7"/><text x="${PL - 6}" y="${Y(v) + 4}" font-size="12" text-anchor="end" fill="${COL.gray}">${fmt(v)}</text>`;
  bars.forEach(([lab, v], i) => { s += `<rect x="${PL + i * bw + bw * 0.18}" y="${Y(v)}" width="${bw * 0.64}" height="${Y(base) - Y(v)}" fill="${COL[color]}" opacity="0.85"/><text x="${PL + i * bw + bw / 2}" y="${PT + Hh + 16}" font-size="12" text-anchor="middle" fill="${COL.gray}">${esc(lab)}</text>`; });
  s += `<line x1="${PL}" y1="${Y(base)}" x2="${PL + W}" y2="${Y(base)}" stroke="${COL.ink}" stroke-width="1.5"/><line x1="${PL}" y1="${PT}" x2="${PL}" y2="${Y(base)}" stroke="${COL.ink}" stroke-width="1.5"/>`;
  if (ylabel) s += `<text x="${PL + 4}" y="${PT + 10}" font-size="12" font-weight="700" fill="${COL.ink}">${esc(ylabel)}</text>`;
  return wrap(w, PT + Hh + 26, s);
}

export function scatterSvg({ pts, view, step, xlabel = "x", ylabel = "y", line = null, curve = null, w = 420, color = "blue" }) {
  return planeSvg({ view, step, xlabel, ylabel, points: pts.map(([x, y]) => ({ x, y, color })), lines: line ? [{ ...line, color: line.color ?? "red", dash: line.dash }] : [], curves: curve ? [{ f: curve, color: "violet" }] : [], width: w, height: Math.round(w * 0.62) });
}

const html = ({ svg, w }, caption) => `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`;
/** For lessons: wrapped HTML. */
export const boxPlot = (o, cap = "") => html(boxPlotSvg(o), cap);
export const dotPlot = (o, cap = "") => html(dotPlotSvg(o), cap);
export const histogram = (o, cap = "") => html(histogramSvg(o), cap);
export const barChart = (o, cap = "") => html(barChartSvg(o), cap);
export const scatter = (o, cap = "") => html(scatterSvg(o), cap);
/** For bank/assignments/worksheets: SVG documents. */
export const boxPlotDoc = (o) => boxPlotSvg(o).svg;
export const dotPlotDoc = (o) => dotPlotSvg(o).svg;
export const histogramDoc = (o) => histogramSvg(o).svg;
export const barChartDoc = (o) => barChartSvg(o).svg;
export const scatterDoc = (o) => scatterSvg(o).svg;
