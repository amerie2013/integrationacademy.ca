// Coordinate-plane figures for chapter 4: one SVG builder used by lessons (HTML), bank and assignments (SVG docs).
//   plane({ view, lines:[{m,b,color,dash,label}], vlines:[{x,color,label}], curves:[{f,a,b,color,label,lx,ly,anchor}],
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
  // curve equation labels: { label, lx?, ly?, anchor? }. With ly given the text goes exactly there. Otherwise the
  // label is placed next to its own curve (at lx if given, else anywhere along it) in the spot that collides least
  // with the drawn curves, lines, axes, points and the other labels.
  if (curves.some((c) => c.label)) {
    const obs = [], rects = [], inV = (y) => y >= ymin && y <= ymax;
    const sample = (px, py) => { if (px >= PL && px <= PL + Wd && py >= PT && py <= PT + Ht) obs.push([px, py]); };
    for (const c of curves) for (let i = 0; i <= 300; i++) { const x = (c.a ?? xmin) + (((c.b ?? xmax) - (c.a ?? xmin)) * i) / 300, y = c.f(x); if (Number.isFinite(y) && inV(y)) sample(X(x), Y(y)); }
    for (const l of lines) for (let i = 0; i <= 200; i++) { const x = xmin + ((xmax - xmin) * i) / 200; sample(X(x), Y(l.m * x + l.b)); }
    for (const v of vlines) for (let i = 0; i <= 100; i++) sample(X(v.x), PT + (Ht * i) / 100);
    for (const g of segs) for (let k = 1; k < g.pts.length; k++) for (let i = 0; i <= 60; i++) { const [x1, y1] = g.pts[k - 1], [x2, y2] = g.pts[k]; sample(X(x1 + ((x2 - x1) * i) / 60), Y(y1 + ((y2 - y1) * i) / 60)); }
    if (!bare) { const ax = Math.max(xmin, Math.min(xmax, 0)), ay = Math.max(ymin, Math.min(ymax, 0)); for (let i = 0; i <= 120; i++) { sample(PL + (Wd * i) / 120, Y(ay)); sample(X(ax), PT + (Ht * i) / 120); } rects.push([PL, Y(ay) - 2, PL + Wd, Y(ay) + 17], [X(ax) - 34, PT, X(ax) + 2, PT + Ht]); }
    const tw = (t, size = 13) => String(t).length * size * 0.58;
    for (const p of points) { rects.push([X(p.x) - 6, Y(p.y) - 6, X(p.x) + 6, Y(p.y) + 6]); if (p.label) rects.push([X(p.x) + 8, Y(p.y) - 20, X(p.x) + 8 + tw(p.label, 12.5), Y(p.y) - 5]); }
    for (const l of [...lines, ...vlines]) if (l.label) { const lx = l.lx ?? (l.x ?? xmax - (xmax - xmin) * 0.18), ly = l.x !== undefined ? ymax - (ymax - ymin) * 0.08 : l.m * lx + l.b; rects.push([X(lx) + 6, Y(ly) - 20, X(lx) + 6 + tw(l.label), Y(ly) - 5]); }
    for (const c of curves) if (c.label) {
      const w = tw(c.label) + 4;
      let best = null;
      if (c.ly !== undefined) {
        const lx = c.lx ?? (xmin + xmax) / 2, anchor = c.anchor ?? (X(lx) > PL + Wd * 0.62 ? "end" : "start");
        best = { x: X(lx) + (anchor === "end" ? -7 : 7), y: Y(c.ly) - 9, anchor };
      } else {
        const a = Math.max(c.a ?? xmin, xmin), b = Math.min(c.b ?? xmax, xmax);
        const xs = c.lx !== undefined ? [c.lx] : Array.from({ length: 37 }, (_, i) => a + ((b - a) * (i + 1)) / 38);
        for (const [k, x] of xs.entries()) {
          const y = c.f(x); if (!Number.isFinite(y) || !inV(y)) continue;
          for (const anchor of c.anchor ? [c.anchor] : ["start", "end"]) for (const dy of [-9, 19, -22, 32, -36, 46]) {
            const tx = X(x) + (anchor === "end" ? -7 : 7), ty = Y(y) + dy, x0 = anchor === "end" ? tx - w : tx, box = [x0 - 2, ty - 13, x0 + w + 2, ty + 4];
            if (box[0] < PL + 2 || box[2] > PL + Wd - 2 || box[1] < PT + 1 || box[3] > PT + Ht - 1) continue;
            let hit = 0;
            for (const [px, py] of obs) if (px >= box[0] && px <= box[2] && py >= box[1] && py <= box[3]) hit++;
            for (const r of rects) if (r[0] < box[2] && r[2] > box[0] && r[1] < box[3] && r[3] > box[1]) hit += 25;
            const score = hit * 10 + Math.abs(dy) * 0.08 + (c.lx !== undefined ? 0 : Math.abs(k / Math.max(1, xs.length - 1) - 0.75) * 3);
            if (!best || score < best.score) best = { score, x: tx, y: ty, anchor, box };
          }
        }
        if (!best) { const x = c.lx ?? (a + b) / 2; best = { x: X(x) + 7, y: Math.max(PT + 13, Math.min(PT + Ht - 4, Y(c.f(x)) - 9)), anchor: "start" }; }
      }
      if (best.box) rects.push(best.box);
      s += `<text x="${best.x.toFixed(1)}" y="${best.y.toFixed(1)}" font-size="13" font-weight="700" font-style="italic" text-anchor="${best.anchor}" fill="${COL[c.color ?? "violet"]}" stroke="#fff" stroke-width="3.5" paint-order="stroke">${esc(c.label)}</text>`;
    }
  }
  for (const l of [...lines, ...vlines]) if (l.label) { const lx = l.lx ?? (l.x ?? xmax - (xmax - xmin) * 0.18), ly = l.x !== undefined ? ymax - (ymax - ymin) * 0.08 : l.m * lx + l.b; s += `<text x="${X(lx) + 6}" y="${Y(ly) - 8}" font-size="13" font-weight="700" fill="${COL[l.color ?? "violet"]}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(l.label)}</text>`; }
  for (const p of points) s += (p.open ? `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5.5" fill="#fff" stroke="${COL[p.color ?? "red"]}" stroke-width="2.5"/>` : `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5" fill="${COL[p.color ?? "red"]}" stroke="#fff" stroke-width="1.5"/>`) + (p.label ? `<text x="${X(p.x) + 8}" y="${Y(p.y) - 8}" font-size="12.5" font-weight="700" fill="${COL[p.color ?? "red"]}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(p.label)}</text>` : "");
  const TW = PL + Wd + PR, TH = PT + Ht + PB;
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TW} ${TH}" width="${TW}" height="${TH}" font-family="Arial, sans-serif"><rect width="${TW}" height="${TH}" fill="#fff"/>${s}</svg>`, w: TW };
}
/** For lessons: wrapped HTML with caption. */
export const plane = (opts, caption = "") => { const { svg, w } = planeSvg(opts); return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`; };
/** For bank/assignments: the SVG document. */
export const planeDoc = (opts) => planeSvg(opts).svg;
