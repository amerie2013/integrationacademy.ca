// Vector diagrams for MCV4U chapter 6 (lessons, worksheets, bank, assignments, written): one SVG builder with
// equal x/y scale, arrowheads, angle arcs, a north marker, shaded polygons and vector-notation labels.
//   vecSvg({ view, grid, axes, step, width,
//            arrows: [{ from:[x,y], to:[x,y] | d:[dx,dy], color, w, dash, label, vl, off }],   vl = letter drawn with an arrow over it
//            segs:   [{ pts:[[x,y]...], color, dash, w }],  polys: [{ pts, fill, stroke }],
//            arcs:   [{ at:[x,y], r, a, b, label, color }]  (degrees, counterclockwise from east),
//            points: [{ x, y, label, color }],  texts: [{ x, y, t, color, size, anchor }],
//            north:  [x, y, len] })
const COL = { blue: "#1e40af", red: "#be123c", green: "#15803d", violet: "#6d28d9", amber: "#b45309", gray: "#475569", black: "#0f172a" };
const RAD = Math.PI / 180;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const col = (c) => COL[c] ?? c ?? COL.violet;

export function vecSvg({ view = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, grid = true, axes = true, step = 1, width = 420, arrows = [], segs = [], polys = [], arcs = [], points = [], texts = [], north = null }) {
  const { xmin, xmax, ymin, ymax } = view;
  const P = 14, k = (width - 2 * P) / (xmax - xmin), H = Math.round((ymax - ymin) * k + 2 * P);
  const X = (x) => +(P + (x - xmin) * k).toFixed(1), Y = (y) => +(H - P - (y - ymin) * k).toFixed(1);
  let s = "";
  for (const g of polys) s += `<polygon points="${g.pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}" fill="${g.fill ?? "#f1f5f9"}" fill-opacity="${g.op ?? 1}" stroke="${g.stroke ? col(g.stroke) : "none"}" stroke-width="1.5"/>`;
  if (grid) {
    for (let x = Math.ceil(xmin / step) * step; x <= xmax + 1e-9; x += step) s += `<line x1="${X(x)}" y1="${Y(ymin)}" x2="${X(x)}" y2="${Y(ymax)}" stroke="#e5e9f0" stroke-width="1"/>`;
    for (let y = Math.ceil(ymin / step) * step; y <= ymax + 1e-9; y += step) s += `<line x1="${X(xmin)}" y1="${Y(y)}" x2="${X(xmax)}" y2="${Y(y)}" stroke="#e5e9f0" stroke-width="1"/>`;
  }
  if (axes && xmin < 0 && xmax > 0 && ymin < 0 && ymax > 0) s += `<line x1="${X(xmin)}" y1="${Y(0)}" x2="${X(xmax)}" y2="${Y(0)}" stroke="#94a3b8" stroke-width="1.4"/><line x1="${X(0)}" y1="${Y(ymin)}" x2="${X(0)}" y2="${Y(ymax)}" stroke="#94a3b8" stroke-width="1.4"/>`;
  for (const g of segs) s += `<polyline points="${g.pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}" fill="none" stroke="${col(g.color ?? "gray")}" stroke-width="${g.w ?? 1.8}"${g.dash ? ` stroke-dasharray="6 4"` : ""}/>`;
  for (const c of arcs) {
    let d = "";
    for (let i = 0; i <= 32; i++) { const t = (c.a + ((c.b - c.a) * i) / 32) * RAD; d += `${i ? "L" : "M"}${X(c.at[0] + c.r * Math.cos(t))},${Y(c.at[1] + c.r * Math.sin(t))} `; }
    s += `<path d="${d}" fill="none" stroke="${col(c.color ?? "amber")}" stroke-width="1.8"/>`;
    if (c.label) { const m = ((c.a + c.b) / 2) * RAD, rr = c.r + (c.lr ?? 0.5); s += `<text x="${X(c.at[0] + rr * Math.cos(m))}" y="${Y(c.at[1] + rr * Math.sin(m)) + 5}" font-size="14" font-weight="700" text-anchor="middle" fill="${col(c.color ?? "amber")}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(c.label)}</text>`; }
  }
  if (north) { const [nx, ny, len = 1.4] = north; s += `<line x1="${X(nx)}" y1="${Y(ny)}" x2="${X(nx)}" y2="${Y(ny + len)}" stroke="${COL.green}" stroke-width="1.6" stroke-dasharray="4 3"/><text x="${X(nx)}" y="${Y(ny + len) - 5}" font-size="14" font-weight="700" text-anchor="middle" fill="${COL.green}">N</text>`; }
  for (const p of points) s += `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="4.5" fill="${col(p.color ?? "black")}"/>`;
  for (const a of arrows) {
    const to = a.to ?? [a.from[0] + a.d[0], a.from[1] + a.d[1]];
    const x1 = X(a.from[0]), y1 = Y(a.from[1]), x2 = X(to[0]), y2 = Y(to[1]), L = Math.hypot(x2 - x1, y2 - y1);
    if (L < 1) continue;
    const ux = (x2 - x1) / L, uy = (y2 - y1) / L, h = Math.min(13, L * 0.45), bx = x2 - ux * h, by = y2 - uy * h, c = col(a.color);
    s += `<line x1="${x1}" y1="${y1}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${c}" stroke-width="${a.w ?? 3}"${a.dash ? ` stroke-dasharray="7 5"` : ""}/>`;
    s += `<polygon points="${x2},${y2} ${(bx - uy * h * 0.42).toFixed(1)},${(by + ux * h * 0.42).toFixed(1)} ${(bx + uy * h * 0.42).toFixed(1)},${(by - ux * h * 0.42).toFixed(1)}" fill="${c}"/>`;
    // labels sit beside the midpoint on the side given by `off` (sign) and are pushed out by half their width
    // when the arrow is steep, so text never covers the arrow
    const side = a.off ?? 15, sg = side < 0 ? -1 : 1, nx = -uy * sg, ny = ux * sg, cx0 = (x1 + x2) / 2, cy0 = (y1 + y2) / 2;
    const wv = 10 * (a.vl ?? "").length, dv = Math.abs(side) + Math.abs(nx) * Math.max(0, wv / 2 - 6);
    const mx = cx0 + nx * dv, my = cy0 + ny * dv;
    if (a.vl) s += `<text x="${mx.toFixed(1)}" y="${(my + 6).toFixed(1)}" font-size="17" font-weight="700" font-style="italic" text-anchor="middle" fill="${c}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(a.vl)}</text><line x1="${(mx - 6).toFixed(1)}" y1="${(my - 11).toFixed(1)}" x2="${(mx + 6).toFixed(1)}" y2="${(my - 11).toFixed(1)}" stroke="${c}" stroke-width="1.5"/><polygon points="${(mx + 8).toFixed(1)},${(my - 11).toFixed(1)} ${(mx + 4).toFixed(1)},${(my - 13.5).toFixed(1)} ${(mx + 4).toFixed(1)},${(my - 8.5).toFixed(1)}" fill="${c}"/>`;
    // the value label goes one step further out than the vector letter
    const wl = 7.2 * (a.label ?? "").length, dl = (a.vl ? dv + Math.abs(nx) * wv / 2 + Math.abs(ny) * 18 + 6 : Math.abs(side)) + Math.abs(nx) * wl / 2;
    const lx = cx0 + nx * dl, ly = cy0 + ny * dl;
    if (a.label) s += `<text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" font-size="13" font-weight="700" text-anchor="middle" fill="${c}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(a.label)}</text>`;
  }
  for (const p of points) if (p.label) s += `<text x="${X(p.x) + (p.dx ?? 7)}" y="${Y(p.y) + (p.dy ?? -7)}" font-size="14" font-weight="700" text-anchor="${p.anchor ?? "start"}" fill="${col(p.color ?? "black")}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(p.label)}</text>`;
  for (const t of texts) s += `<text x="${X(t.x)}" y="${Y(t.y)}" font-size="${t.size ?? 13}" font-weight="700" text-anchor="${t.anchor ?? "middle"}" fill="${col(t.color ?? "black")}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(t.t)}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${H}" width="${width}" height="${H}" font-family="Arial, sans-serif"><rect width="${width}" height="${H}" fill="#fff"/>${s}</svg>`;
}
/** lesson figure: centred, responsive, with an optional caption */
export const vfig = (o, caption = "") => { const svg = vecSvg(o), w = o.width ?? 420; return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`; };
/** standalone SVG document (bank, assignments, written) */
export const vdoc = (o) => vecSvg(o);
/** helpers: point at distance m along a math angle (degrees from east) and along a true bearing (degrees clockwise from north) */
export const pol = (m, deg, from = [0, 0]) => [from[0] + m * Math.cos(deg * RAD), from[1] + m * Math.sin(deg * RAD)];
export const brg = (m, b, from = [0, 0]) => pol(m, 90 - b, from);

// ---- three-space (oblique view): x comes toward the viewer (down and left), y runs right, z runs up
/** 2-D drawing position of the point (x, y, z) */
export const p3 = (x, y, z) => [y - 0.55 * x, z - 0.42 * x];
/** x, y, z axes (gray arrows) with labels, as { arrows, texts } to spread into vecSvg options */
export function axes3(len = 5, neg = 0.8) {
  const ax = [[len, 0, 0, "x"], [0, len, 0, "y"], [0, 0, len, "z"]];
  return {
    segs: ax.map(([x, y, z]) => ({ pts: [p3(-neg * Math.sign(x), -neg * Math.sign(y), -neg * Math.sign(z)), [0, 0]], color: "gray", dash: true, w: 1.2 })),
    arrows: ax.map(([x, y, z]) => ({ from: [0, 0], to: p3(x, y, z), color: "gray", w: 1.6 })),
    texts: ax.map(([x, y, z, t]) => { const q = p3(x * 1.08, y * 1.08, z * 1.08); return { x: q[0] + (t === "x" ? -0.25 : 0.3), y: q[1] + (t === "z" ? 0.25 : -0.1), t, color: "gray", size: 15 }; }),
  };
}
/** dashed guide box from the origin to the point (a, b, c), for plotting points */
export const box3 = (a, b, c, color = "gray") => [
  [[a, 0, 0], [a, b, 0], [0, b, 0]], [[a, b, 0], [a, b, c]], [[0, 0, c], [a, 0, c], [a, b, c], [0, b, c], [0, 0, c]], [[a, 0, 0], [a, 0, c]], [[0, b, 0], [0, b, c]],
].map((line) => ({ pts: line.map(([x, y, z]) => p3(x, y, z)), color, dash: true, w: 1.1 }));
/** merge several option fragments ({ arrows, segs, texts, points, ... }) into one vecSvg options object */
export function merge(...parts) {
  const out = {};
  for (const p of parts) for (const [k, v] of Object.entries(p)) out[k] = Array.isArray(v) ? [...(out[k] ?? []), ...v] : v;
  return out;
}

// ---- lines and planes in three-space
const lin3 = (p, m, t) => [p[0] + t * m[0], p[1] + t * m[1], p[2] + t * m[2]];
/** segment of the line r = p + t m for t in [t0, t1] */
export const line3 = (p, m, t0 = -2, t1 = 2, color = "violet", w = 2.4, dash = false) => ({ pts: [p3(...lin3(p, m, t0)), p3(...lin3(p, m, t1))], color, w, dash });
/** parallelogram patch of the plane through p spanned by u and v (s from −k to k, t from −k to k) */
export const patch3 = (p, u, v, k = 1, fill = "#dbeafe", stroke = "blue", op = 0.75) => ({ op, pts: [[-k, -k], [k, -k], [k, k], [-k, k]].map(([s, t]) => p3(p[0] + s * u[0] + t * v[0], p[1] + s * u[1] + t * v[1], p[2] + s * u[2] + t * v[2])), fill, stroke });
/** triangle cut from the first octant by the plane with intercepts a, b, c */
export const tri3 = (a, b, c, fill = "#dbeafe", stroke = "blue") => ({ pts: [p3(a, 0, 0), p3(0, b, 0), p3(0, 0, c)], fill, stroke });
