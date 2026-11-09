// Chapter 7 figure helpers. strip(...) draws rows of factor boxes (exponent laws); EG/eDoc graph exponential curves.
import { plane, planeDoc } from "../../mth1w-ch4/figs4.mjs";
const COL = { violet: "#7c3aed", blue: "#2563eb", green: "#15803d", red: "#dc2626", amber: "#d97706", gray: "#64748b" };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
/** rows: [{ label, items: [text…], color, brace? }] → SVG string */
export function stripSvg(rows, title = "") {
  const bw = 34, gap = 4, lx = 150, top = title ? 34 : 12, rh = 46;
  const maxN = Math.max(...rows.map((r) => r.items.length));
  const W = Math.max(380, lx + maxN * (bw + gap) + 20), H = top + rows.length * rh + 6;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  if (title) s += `<text x="${W / 2}" y="22" font-size="15" font-weight="700" text-anchor="middle" fill="#0f172a">${esc(title)}</text>`;
  rows.forEach((r, i) => {
    const y = top + i * rh, c = COL[r.color ?? "violet"];
    s += `<text x="${lx - 10}" y="${y + 23}" font-size="14" font-weight="700" text-anchor="end" fill="#0f172a">${esc(r.label)}</text>`;
    r.items.forEach((t, k) => {
      const x = lx + k * (bw + gap), cc = Array.isArray(r.colors) ? COL[r.colors[k]] ?? c : c;
      s += `<rect x="${x}" y="${y + 4}" width="${bw}" height="30" rx="5" fill="${cc}22" stroke="${cc}" stroke-width="1.8"/><text x="${x + bw / 2}" y="${y + 24}" font-size="14" font-weight="700" text-anchor="middle" fill="${cc}">${esc(t)}</text>`;
    });
  });
  return s + "</svg>";
}
export const strip = (rows, title = "", cap = "") => { const svg = stripSvg(rows, title); return `<div style="text-align:center;margin:12px 0;">${svg.replace(/width="(\d+)" height/, 'width="$1" style="max-width:100%;height:auto;" height')}${cap ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${cap}</div>` : ""}</div>`; };
export const rep = (t, n) => Array.from({ length: n }, () => t);

const spec = (curves, o = {}) => ({
  view: o.view ?? { xmin: -4, xmax: 4, ymin: -1, ymax: 10 },
  curves: curves.map((c) => (typeof c === "function" ? { f: c, color: "violet" } : c)),
  lines: o.lines ?? [], vlines: o.vlines ?? [], points: o.points ?? [], segs: o.segs ?? [],
  step: o.step ?? { x: 1, y: 1 }, xlabel: o.xlabel ?? "x", ylabel: o.ylabel ?? "y",
});
export const EG = (curves, o = {}) => plane(spec(curves, o), o.cap ?? "");
export const eDoc = (curves, o = {}) => planeDoc(spec(curves, o));
export const P = (x, y, label, color = "blue") => ({ x, y, label: label === false ? undefined : label ?? `(${x}, ${y})`, color });
export const r2 = (v) => Math.round(v * 100) / 100;
