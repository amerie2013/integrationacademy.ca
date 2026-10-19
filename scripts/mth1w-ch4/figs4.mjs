// Coordinate-plane figures for chapter 4: one SVG builder used by lessons (HTML), bank and assignments (SVG docs).
//   plane({ view, lines:[{m,b,color,dash,label}], vlines:[{x,color,label}], curves:[{f,a,b,color}],
//           points:[{x,y,label,color}], shade:{m,b,above}, segs:[{pts:[[x,y]...],color}], tri:{x,y,run,rise},
//           xlabel, ylabel, step, bare (no grid or axes: 3-D sketches) }, caption)
const COL = { blue: "#1e40af", red: "#be123c", green: "#15803d", violet: "#6d28d9", amber: "#b45309", gray: "#475569" };
const fmt = (v) => { const r = Math.round(v * 100) / 100; return r < 0 ? `−${-r}` : String(r); };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/-/g, "−");

export function planeSvg({ view = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, lines = [], vlines = [], curves = [], points = [], shade = null, segs = [], tri = null, xlabel = "x", ylabel = "y", step = null, width = 420, height = null, bare = false }) {
  const { xmin, xmax, ymin, ymax } = view;
  // equal ranges (geometry grids) stay square so slopes and right angles look true; data graphs use a fixed aspect
  const Wd = width, Ht = height ?? (Math.abs((ymax - ymin) - (xmax - xmin)) < 1e-9 ? width : Math.round(width * 0.68));
  const PL = 34, PB = 26, PT = 10, PR = 14;
  const X = (x) => PL + ((x - xmin) / (xmax - xmin)) * Wd, Y = (y) => PT + Ht - ((y - ymin) / (ymax - ymin)) * Ht;
  const sx = step?.x ?? Math.max(1, Math.round((xmax - xmin) / 10)), sy = step?.y ?? Math.max(1, Math.round((ymax - ymin) / 10));
  const cid = `pc${Wd}${Ht}${Math.round(xmin)}${Math.round(ymax)}`;
  let s = `<clipPath id="${cid}"><rect x="${PL}" y="${PT}" width="${Wd}" height="${Ht}"/></clipPath><rect x="${PL}" y="${PT}" width="${Wd}" height="${Ht}" fill="#fff"${bare ? "" : ` stroke="#cbd5e1"`}/>`;
  if (shade) {
    const y1 = shade.m * xmin + shade.b, y2 = shade.m * xmax + shade.b, edge = shade.above ? PT : PT + Ht;
    s += `<g clip-path="url(#${cid})"><polygon points="${X(xmin)},${Y(y1)} ${X(xmax)},${Y(y2)} ${PL + Wd},${edge} ${PL},${edge}" fill="#dcfce7" opacity="0.85"/></g>`;
  }
  if (!bare) {
    for (let x = Math.ceil(xmin / sx) * sx; x <= xmax + 1e-9; x += sx) s += `<line x1="${X(x)}" y1="${PT}" x2="${X(x)}" y2="${PT + Ht}" stroke="#eef2f7"/>` + (Math.abs(x) > 1e-9 ? `<text x="${X(x)}" y="${Math.min(PT + Ht + 15, Math.max(PT + 12, Y(Math.max(ymin, Math.min(ymax, 0))) + 15))}" font-size="12.5" text-anchor="middle" fill="#475569">${fmt(x)}</text>` : "");
    for (let y = Math.ceil(ymin / sy) * sy; y <= ymax + 1e-9; y += sy) s += `<line x1="${PL}" y1="${Y(y)}" x2="${PL + Wd}" y2="${Y(y)}" stroke="#eef2f7"/>` + (Math.abs(y) > 1e-9 ? `<text x="${Math.max(PL - 4, X(Math.max(xmin, Math.min(xmax, 0))) - 5)}" y="${Y(y) + 4}" font-size="12.5" text-anchor="end" fill="#475569">${fmt(y)}</text>` : "");
    const ax = Math.max(xmin, Math.min(xmax, 0)), ay = Math.max(ymin, Math.min(ymax, 0));
    s += `<line x1="${PL}" y1="${Y(ay)}" x2="${PL + Wd}" y2="${Y(ay)}" stroke="#0f172a" stroke-width="1.5"/><line x1="${X(ax)}" y1="${PT}" x2="${X(ax)}" y2="${PT + Ht}" stroke="#0f172a" stroke-width="1.5"/>`;
    s += `<text x="${PL + Wd - 2}" y="${Y(ay) - 6}" font-size="12" font-weight="700" text-anchor="end" fill="#0f172a">${esc(xlabel)}</text><text x="${X(ax) + 6}" y="${PT + 12}" font-size="12" font-weight="700" fill="#0f172a">${esc(ylabel)}</text>`;
  }
  let clip = "";
  for (const l of lines) clip += `<line x1="${X(xmin)}" y1="${Y(l.m * xmin + l.b)}" x2="${X(xmax)}" y2="${Y(l.m * xmax + l.b)}" stroke="${COL[l.color ?? "violet"]}" stroke-width="2.6"${l.dash ? ` stroke-dasharray="8 6"` : ""}/>`;
  for (const v of vlines) clip += `<line x1="${X(v.x)}" y1="${PT}" x2="${X(v.x)}" y2="${PT + Ht}" stroke="${COL[v.color ?? "red"]}" stroke-width="2.6"${v.dash ? ` stroke-dasharray="8 6"` : ""}/>`;
  for (const c of curves) {
    let d = "", pen = false;
    for (let i = 0; i <= 240; i++) { const x = (c.a ?? xmin) + (((c.b ?? xmax) - (c.a ?? xmin)) * i) / 240, y = c.f(x); if (!Number.isFinite(y) || y > ymax + 3 * (ymax - ymin) || y < ymin - 3 * (ymax - ymin)) { pen = false; continue; } d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true; }
    clip += `<path d="${d}" fill="none" stroke="${COL[c.color ?? "violet"]}" stroke-width="2.6"/>`;
  }
  for (const g of segs) clip += `<polyline points="${g.pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}" fill="none" stroke="${COL[g.color ?? "blue"]}" stroke-width="2.8"/>`;
  if (tri) clip += `<line x1="${X(tri.x)}" y1="${Y(tri.y)}" x2="${X(tri.x + tri.run)}" y2="${Y(tri.y)}" stroke="${COL.blue}" stroke-width="2" stroke-dasharray="5 3"/><line x1="${X(tri.x + tri.run)}" y1="${Y(tri.y)}" x2="${X(tri.x + tri.run)}" y2="${Y(tri.y + tri.rise)}" stroke="${COL.red}" stroke-width="2" stroke-dasharray="5 3"/><text x="${(X(tri.x) + X(tri.x + tri.run)) / 2}" y="${Y(tri.y) + (tri.rise >= 0 ? 15 : -6)}" font-size="12" font-weight="700" text-anchor="middle" fill="${COL.blue}">run ${fmt(tri.run)}</text><text x="${X(tri.x + tri.run) + 5}" y="${(Y(tri.y) + Y(tri.y + tri.rise)) / 2 + 4}" font-size="12" font-weight="700" fill="${COL.red}">rise ${fmt(tri.rise)}</text>`;
  s += `<g clip-path="url(#${cid})">${clip}</g>`;
  for (const l of [...lines, ...vlines]) if (l.label) { const lx = l.lx ?? (l.x ?? xmax - (xmax - xmin) * 0.18), ly = l.x !== undefined ? ymax - (ymax - ymin) * 0.08 : l.m * lx + l.b; s += `<text x="${X(lx) + 6}" y="${Y(ly) - 8}" font-size="13" font-weight="700" fill="${COL[l.color ?? "violet"]}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(l.label)}</text>`; }
  for (const p of points) s += (p.open ? `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5.5" fill="#fff" stroke="${COL[p.color ?? "red"]}" stroke-width="2.5"/>` : `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5" fill="${COL[p.color ?? "red"]}" stroke="#fff" stroke-width="1.5"/>`) + (p.label ? `<text x="${X(p.x) + 8}" y="${Y(p.y) - 8}" font-size="12.5" font-weight="700" fill="${COL[p.color ?? "red"]}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(p.label)}</text>` : "");
  const TW = PL + Wd + PR, TH = PT + Ht + PB;
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TW} ${TH}" width="${TW}" height="${TH}" font-family="Arial, sans-serif"><rect width="${TW}" height="${TH}" fill="#fff"/>${s}</svg>`, w: TW };
}
/** For lessons: wrapped HTML with caption. */
export const plane = (opts, caption = "") => { const { svg, w } = planeSvg(opts); return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`; };
/** For bank/assignments: the SVG document. */
export const planeDoc = (opts) => planeSvg(opts).svg;
