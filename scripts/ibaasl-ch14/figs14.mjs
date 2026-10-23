// Figures for IB AA SL chapter 14 (probability distributions): probability bar charts for discrete random variables
// (with highlighted bars for an event) and normal curves with shaded probability regions. Lessons wrap them with fig();
// bank/assignments/written use the raw SVG; worksheets use svgT().
export { fig, areaDoc } from "../ibaasl-ch10/figs10.mjs";
export { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { areaDoc } from "../ibaasl-ch10/figs10.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const lab = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : String(Math.round(v * 1000) / 1000));

/** probability bar chart: xs values, ps probabilities; hi = values to highlight (event); labels: show p on bars */
export function probDoc(xs, ps, { hi = [], labels = true, title = "", xlab = "x", ylab = "P(X = x)", w = 420, h = 260, color = "#6d28d9", hiColor = "#16a34a" } = {}) {
  const top = Math.max(...ps) * 1.18 || 1;
  const PL = 46, PB = 30, PT = title ? 26 : 12, PR = 12, Wd = w - PL - PR, Ht = h - PT - PB;
  const n = xs.length, bw = Math.min(36, (Wd / n) * 0.66);
  const X = (i) => PL + ((i + 0.5) / n) * Wd, Y = (v) => PT + Ht - (v / top) * Ht;
  const raw = top / 5, mag = 10 ** Math.floor(Math.log10(raw)), st = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((k) => k >= raw);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif"><rect width="${w}" height="${h}" fill="#fff"/>`;
  if (title) s += `<text x="${w / 2}" y="17" font-size="13.5" font-weight="700" text-anchor="middle" fill="#0f172a">${esc(title)}</text>`;
  for (let v = 0; v <= top + 1e-9; v += st) s += `<line x1="${PL}" y1="${Y(v)}" x2="${PL + Wd}" y2="${Y(v)}" stroke="#eef2f7"/><text x="${PL - 5}" y="${Y(v) + 4}" font-size="11" text-anchor="end" fill="#475569">${lab(v)}</text>`;
  s += `<line x1="${PL}" y1="${Y(0)}" x2="${PL + Wd}" y2="${Y(0)}" stroke="#0f172a" stroke-width="1.4"/>`;
  xs.forEach((x, i) => {
    const c = hi.includes(x) ? hiColor : color;
    s += `<rect x="${X(i) - bw / 2}" y="${Y(ps[i])}" width="${bw}" height="${Y(0) - Y(ps[i])}" fill="${c}" opacity="0.8"/>`;
    s += `<text x="${X(i)}" y="${PT + Ht + 16}" font-size="11.5" text-anchor="middle" fill="#475569">${esc(x)}</text>`;
    if (labels) s += `<text x="${X(i)}" y="${Y(ps[i]) - 4}" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0f172a">${lab(ps[i])}</text>`;
  });
  s += `<text x="${PL + Wd}" y="${h - 4}" font-size="12" font-weight="700" text-anchor="end" fill="#0f172a">${esc(xlab)}</text>`;
  s += `<text x="${PL + 2}" y="${PT - 2}" font-size="11.5" font-weight="700" fill="#0f172a">${esc(ylab)}</text>`;
  return s + "</svg>";
}

export const pdf = (mu, sd) => (x) => Math.exp(-(((x - mu) / sd) ** 2) / 2) / (sd * Math.sqrt(2 * Math.PI));

/** normal curve N(mu, sd²) over mu ± 3.6sd with shaded regions [{a, b, color}] (a/b may be ±Infinity) */
export function normalDoc(mu, sd, regions = [], { step = null, lines = [] } = {}) {
  const f = pdf(mu, sd), lo = mu - 3.6 * sd, hi = mu + 3.6 * sd, top = f(mu) * 1.15;
  const rs = regions.map((r) => ({ f, a: Math.max(lo, r.a ?? -Infinity), b: Math.min(hi, r.b ?? Infinity), color: r.color ?? "green" }));
  const sy = Math.max(top / 5, 1e-6), mag = 10 ** Math.floor(Math.log10(sy)), yst = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((k) => k >= sy);
  return areaDoc({ view: { xmin: lo, xmax: hi, ymin: -top * 0.04, ymax: top }, step: step ?? { x: sd, y: yst }, curves: [{ f, color: "violet" }], vlines: lines.map((x) => ({ x, color: "red", dash: true })), ylabel: "" }, rs);
}

// exact distribution helpers (shared by lessons, bank and checks)
export const C = (n, k) => { let c = 1; for (let i = 1; i <= k; i++) c = (c * (n - k + i)) / i; return c; };
export const binom = (n, p, k) => C(n, k) * p ** k * (1 - p) ** (n - k);
export const binomCdf = (n, p, k) => { let s = 0; for (let i = 0; i <= k; i++) s += binom(n, p, i); return s; };
/** standard normal CDF (Abramowitz–Stegun 7.1.26 via erf, |error| < 1.5e-7) */
export function Phi(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2), y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(z * z) / 2);
  return z >= 0 ? 0.5 * (1 + y) : 0.5 * (1 - y);
}
export const normCdf = (x, mu, sd) => Phi((x - mu) / sd);
/** inverse standard normal by bisection */
export const invPhi = (p) => { let a = -8, b = 8; for (let i = 0; i < 100; i++) { const m = (a + b) / 2; if (Phi(m) < p) a = m; else b = m; } return (a + b) / 2; };
