// Chapter 8 figure helpers: cash-flow timelines (timelineSvg / TL) and money graphs (FG / fDoc). Money is written
// as "N dollars" (never with a dollar sign) so it is safe in every renderer.
import { plane, planeDoc } from "../../mth1w-ch4/figs4.mjs";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
export const money = (v) => (Math.round(v * 100) / 100).toFixed(2);
export const r2 = (v) => Math.round(v * 100) / 100;

/** cash-flow timeline. o = { n, unit, flows: [{ at, label, up?, color? }], top?, bottom?, title? }
 *  Periods beyond 6 are compressed: 0 1 2 3 … n−1 n. */
export function timelineSvg(o) {
  const n = o.n, show = n <= 8 ? [...Array(n + 1).keys()] : [0, 1, 2, 3, "…", n - 1, n];
  const W = 520, L = 40, R = W - 30, Y = 110, H = 190;
  const X = (k) => L + (k * (R - L)) / (show.length - 1);
  const pos = (at) => { const k = show.indexOf(at); return k >= 0 ? X(k) : null; };
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/><defs><marker id="tu" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#15803d"/></marker><marker id="td" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7c3aed"/></marker></defs>`;
  if (o.title) s += `<text x="${W / 2}" y="18" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${esc(o.title)}</text>`;
  s += `<line x1="${L - 10}" y1="${Y}" x2="${R + 10}" y2="${Y}" stroke="#334155" stroke-width="2.4"/>`;
  show.forEach((k, i) => {
    const x = X(i);
    if (k === "…") { s += `<text x="${x}" y="${Y + 5}" font-size="18" text-anchor="middle" fill="#334155">…</text>`; return; }
    s += `<line x1="${x}" y1="${Y - 7}" x2="${x}" y2="${Y + 7}" stroke="#334155" stroke-width="2"/><text x="${x}" y="${Y + 24}" font-size="13" text-anchor="middle" fill="#334155">${k}</text>`;
  });
  s += `<text x="${R + 8}" y="${Y + 42}" font-size="12" text-anchor="end" fill="#64748b">${esc(o.unit ?? "periods")}</text>`;
  for (const fl of o.flows ?? []) {
    const x = pos(fl.at); if (x == null) continue;
    const up = fl.up !== false, c = fl.color ?? (up ? "#15803d" : "#7c3aed");
    if (up) s += `<line x1="${x}" y1="${Y - 10}" x2="${x}" y2="${Y - 52}" stroke="${c}" stroke-width="2.4" marker-end="url(#tu)"/><text x="${x}" y="${Y - 60}" font-size="12.5" font-weight="700" text-anchor="middle" fill="${c}">${esc(fl.label)}</text>`;
    else s += `<line x1="${x}" y1="${Y + 30}" x2="${x}" y2="${Y + 62}" stroke="${c}" stroke-width="2.4" marker-end="url(#td)"/><text x="${x}" y="${Y + 76}" font-size="12.5" font-weight="700" text-anchor="middle" fill="${c}">${esc(fl.label)}</text>`;
  }
  return s + "</svg>";
}
export const TL = (o, cap = "") => { const svg = timelineSvg(o); return `<div style="text-align:center;margin:12px 0;">${svg.replace(/width="(\d+)" height/, 'width="$1" style="max-width:100%;height:auto;" height')}${cap ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${cap}</div>` : ""}</div>`; };
/** regular payments R at times 1..n (or 0..n−1 with o.due) */
export const payments = (n, label, extra = []) => [...Array.from({ length: n }, (_, k) => ({ at: k + 1, label })), ...extra];

const spec = (curves, o = {}) => ({
  view: o.view ?? { xmin: 0, xmax: 10, ymin: 0, ymax: 1000 },
  curves: curves.map((c) => (typeof c === "function" ? { f: c, color: "violet" } : c)),
  lines: o.lines ?? [], vlines: o.vlines ?? [], points: o.points ?? [], segs: o.segs ?? [],
  step: o.step ?? { x: 1, y: 100 }, xlabel: o.xlabel ?? "t (years)", ylabel: o.ylabel ?? "A",
});
export const FG = (curves, o = {}) => plane(spec(curves, o), o.cap ?? "");
export const fDoc = (curves, o = {}) => planeDoc(spec(curves, o));
/** bar staircase for a compound-interest balance at whole periods */
export const steps = (fn, n, color = "blue") => ({ pts: Array.from({ length: n + 1 }, (_, k) => [[k, fn(k)], [k + 1, fn(k)]]).flat().slice(0, -1), color });
export const P = (x, y, label, color = "blue") => ({ x, y, label: label === false ? undefined : label ?? `(${x}, ${y})`, color });
