// MTH1W-FR — the English SVG figure helpers (../../mth1w-ch1/v2/bank/svg.mjs) re-exported; the only helper that draws
// built-in English words, setsDiagram(), is redefined here with French set names (same drawing, same coordinates).
export * from "../../mth1w-ch1/v2/bank/svg.mjs";

const FONT = `font-family="Arial, Helvetica, sans-serif"`;
const C = { blue: "#1e40af", red: "#be123c", green: "#15803d", amber: "#b45309", gray: "#475569", violet: "#6d28d9", ink: "#0f172a" };
const soft = { blue: "#dbeafe", red: "#ffe4e6", green: "#dcfce7", amber: "#fef3c7", gray: "#f1f5f9", violet: "#ede9fe" };
const doc = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ${FONT}><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Nested number-set diagram with labelled points A, B, C... at chosen regions (French labels). */
export function setsDiagram(points = []) {
  const box = (x, y, w, h, c, t) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${soft[c] ?? "#fff"}" stroke="${C[c] ?? C.ink}" stroke-width="2"/><text x="${x + 10}" y="${y + 20}" font-size="14" font-weight="700" fill="${C[c] ?? C.ink}">${t}</text>`;
  let s = box(6, 6, 588, 248, "gray", "Nombres réels") + box(20, 34, 380, 210, "violet", "Rationnels") + box(34, 62, 310, 172, "blue", "Entiers") + box(48, 90, 240, 134, "green", "Entiers non négatifs") + box(62, 118, 170, 96, "amber", "Naturels") + box(414, 34, 166, 210, "red", "Irrationnels");
  const spot = { N: [140, 170], W: [260, 160], Z: [316, 150], Q: [372, 150], I: [497, 150] };
  points.forEach((p) => { const [x, y] = spot[p.set]; const yy = y + (p.dy ?? 0); s += `<circle cx="${x}" cy="${yy}" r="13" fill="#fff" stroke="${C.ink}" stroke-width="1.6"/><text x="${x}" y="${yy + 5}" font-size="14" font-weight="800" text-anchor="middle">${esc(p.label)}</text>`; });
  return doc(600, 260, s);
}
