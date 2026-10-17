// Geometry & measurement figures for chapter 5: one small SVG scene builder used by lessons (HTML),
// bank, written questions and assignments (SVG documents).
//   scene({ w, h, items }) — items in world units (y up), auto-fitted to the picture:
//     { poly:[[x,y]...], fill, color, dash, open }   { seg:[[x,y],[x,y]], color, dash, width }
//     { circle:[cx,cy,r], fill, color, dash }       { ellipse:[cx,cy,rx,ry], fill, color, dash, half:"top"|"bottom" }
//     { text:"...", at:[x,y], color, size, anchor, bold }   { dot:[x,y], color }
//     { right:[P,Q,R] } (right-angle mark at Q)      { arc:[P,Q,R], label, r } (angle mark at Q from QP to QR)
//     { dim:[P,Q], label, off } (dimension label beside segment PQ, offset off world units to the left of P→Q)
// Shape helpers return item lists: triangle(), rect(), prism(), cylinder(), cone(), pyramid(), sphere(), nets.
const COL = { blue: "#1e40af", red: "#be123c", green: "#15803d", violet: "#6d28d9", amber: "#b45309", gray: "#475569", ink: "#0f172a" };
const FILL = { blue: "#dbeafe", red: "#ffe4e6", green: "#dcfce7", violet: "#ede9fe", amber: "#fef3c7", gray: "#f1f5f9", none: "none" };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/(\d)-(\d)/g, "$1−$2").replace(/(^|[\s(])-(\d)/g, "$1−$2");
const c = (k, d = "ink") => COL[k] ?? k ?? COL[d];
const f = (k) => (k === undefined ? "none" : FILL[k] ?? k);

export function sceneSvg({ w = 360, h = null, items = [], pad = 14 }) {
  const geo = [];
  for (const it of items) {
    if (it.poly) geo.push(...it.poly);
    if (it.seg) geo.push(...it.seg);
    if (it.circle) { const [x, y, r] = it.circle; geo.push([x - r, y - r], [x + r, y + r]); }
    if (it.ellipse) { const [x, y, rx, ry] = it.ellipse; geo.push([x - rx, y - ry], [x + rx, y + ry]); }
    if (it.dot) geo.push(it.dot);
  }
  const gx = geo.map((p) => p[0]), gy = geo.map((p) => p[1]);
  const S = Math.max(Math.max(...gx) - Math.min(...gx), Math.max(...gy) - Math.min(...gy), 1e-9);
  // resolve dimension / angle labels to world positions (offsets scale with the figure)
  const labels = [];
  for (const it of items) {
    if (it.dim) {
      const [A, B] = it.dim, off = it.off ?? -0.07 * S, n = [-(B[1] - A[1]), B[0] - A[0]], L = Math.hypot(...n) || 1;
      it._at = [(A[0] + B[0]) / 2 + (n[0] / L) * off, (A[1] + B[1]) / 2 + (n[1] / L) * off]; labels.push([it._at, it.label, it.size ?? 13.5, "middle"]);
    }
    if (it.arc) {
      const [A, Q, B] = it.arc, r = it.r ?? 0.11 * S;
      const a1 = Math.atan2(A[1] - Q[1], A[0] - Q[0]), a2 = Math.atan2(B[1] - Q[1], B[0] - Q[0]);
      let d = a2 - a1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
      it._r = r; it._a1 = a1; it._d = d;
      if (it.label) { const m = a1 + d / 2, rr = r + (it.lr ?? 0.08 * S); it._at = [Q[0] + rr * Math.cos(m), Q[1] + rr * Math.sin(m)]; labels.push([it._at, it.label, 13, "middle"]); }
    }
    if (it.text !== undefined) labels.push([it.at, it.text, it.size ?? 13.5, it.anchor ?? "middle"]);
    if (it.right) it._k = it.size ?? 0.05 * S;
  }
  let x0 = Math.min(...gx), x1 = Math.max(...gx), y0 = Math.min(...gy), y1 = Math.max(...gy);
  // two passes: estimate the scale, then grow the box so every label fits
  let sc = 1;
  for (let pass = 0; pass < 3; pass++) {
    sc = Math.min((w - 2 * pad) / Math.max(x1 - x0, 1e-9), h ? (h - 2 * pad) / Math.max(y1 - y0, 1e-9) : Infinity);
    for (const [at, t, sz, anc] of labels) {
      const tw = (String(t).length * sz * 0.58) / sc, th = (sz * 0.7) / sc;
      const lx = anc === "start" ? at[0] : anc === "end" ? at[0] - tw : at[0] - tw / 2, rx = lx + tw;
      x0 = Math.min(x0, lx); x1 = Math.max(x1, rx); y0 = Math.min(y0, at[1] - th); y1 = Math.max(y1, at[1] + th);
    }
  }
  sc = Math.min((w - 2 * pad) / Math.max(x1 - x0, 1e-9), h ? (h - 2 * pad) / Math.max(y1 - y0, 1e-9) : Infinity);
  const H = h ?? Math.round((y1 - y0) * sc + 2 * pad);
  const ox = (w - (x1 - x0) * sc) / 2, oy = (H - (y1 - y0) * sc) / 2;
  const X = (x) => +(ox + (x - x0) * sc).toFixed(1), Y = (y) => +(H - oy - (y - y0) * sc).toFixed(1);
  const P = (p) => `${X(p[0])},${Y(p[1])}`;
  let s = "";
  for (const it of items) {
    const dash = it.dash ? ` stroke-dasharray="6 4"` : "";
    const sw = it.width ?? 2.2;
    if (it.poly) s += it.open
      ? `<polyline points="${it.poly.map(P).join(" ")}" fill="none" stroke="${c(it.color)}" stroke-width="${sw}"${dash} stroke-linejoin="round"/>`
      : `<polygon points="${it.poly.map(P).join(" ")}" fill="${f(it.fill)}" stroke="${c(it.color)}" stroke-width="${sw}"${dash} stroke-linejoin="round"/>`;
    if (it.seg) s += `<line x1="${X(it.seg[0][0])}" y1="${Y(it.seg[0][1])}" x2="${X(it.seg[1][0])}" y2="${Y(it.seg[1][1])}" stroke="${c(it.color)}" stroke-width="${sw}"${dash}/>`;
    if (it.circle) { const [x, y, r] = it.circle; s += `<circle cx="${X(x)}" cy="${Y(y)}" r="${(r * sc).toFixed(1)}" fill="${f(it.fill)}" stroke="${c(it.color)}" stroke-width="${sw}"${dash}/>`; }
    if (it.ellipse) {
      const [x, y, rx, ry] = it.ellipse, RX = (rx * sc).toFixed(1), RY = (ry * sc).toFixed(1);
      if (it.half) { const top = it.half === "top" ? 1 : 0; s += `<path d="M${X(x - rx)},${Y(y)} A${RX},${RY} 0 0 ${top} ${X(x + rx)},${Y(y)}" fill="none" stroke="${c(it.color)}" stroke-width="${sw}"${dash}/>`; }
      else s += `<ellipse cx="${X(x)}" cy="${Y(y)}" rx="${RX}" ry="${RY}" fill="${f(it.fill)}" stroke="${c(it.color)}" stroke-width="${sw}"${dash}/>`;
    }
    if (it.right) {
      const [A, Q, B] = it.right, k = it._k;
      const u = unit(Q, A), v = unit(Q, B);
      const p1 = [Q[0] + u[0] * k, Q[1] + u[1] * k], p2 = [p1[0] + v[0] * k, p1[1] + v[1] * k], p3 = [Q[0] + v[0] * k, Q[1] + v[1] * k];
      s += `<polyline points="${[p1, p2, p3].map(P).join(" ")}" fill="none" stroke="${c(it.color, "gray")}" stroke-width="1.6"/>`;
    }
    if (it.arc) {
      const [, Q] = it.arc, r = it._r, a1 = it._a1, d = it._d;
      const e1 = [Q[0] + r * Math.cos(a1), Q[1] + r * Math.sin(a1)], e2 = [Q[0] + r * Math.cos(a1 + d), Q[1] + r * Math.sin(a1 + d)];
      s += `<path d="M${P(e1)} A${(r * sc).toFixed(1)},${(r * sc).toFixed(1)} 0 0 ${d > 0 ? 0 : 1} ${P(e2)}" fill="none" stroke="${c(it.color, "amber")}" stroke-width="2"/>`;
      if (it.label) s += label(it.label, it._at, it.color ?? "amber", 13, "middle", true, X, Y);
    }
    if (it.dim) s += label(it.label, it._at, it.color ?? "blue", it.size ?? 13.5, "middle", true, X, Y);
    if (it.dot) s += `<circle cx="${X(it.dot[0])}" cy="${Y(it.dot[1])}" r="${it.r ?? 3.5}" fill="${c(it.color)}"/>`;
    if (it.text !== undefined) s += label(it.text, it.at, it.color ?? "ink", it.size ?? 13.5, it.anchor ?? "middle", it.bold ?? false, X, Y);
  }
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${H}" width="${w}" height="${H}" font-family="Arial, sans-serif"><rect width="${w}" height="${H}" fill="#fff"/>${s}</svg>`, w };
}
function unit(Q, A) { const dx = A[0] - Q[0], dy = A[1] - Q[1], L = Math.hypot(dx, dy) || 1; return [dx / L, dy / L]; }
function label(t, at, col, size, anchor, bold, X, Y) {
  return `<text x="${X(at[0])}" y="${Y(at[1]) + size * 0.35}" font-size="${size}" text-anchor="${anchor}"${bold ? ` font-weight="700"` : ""} fill="${c(col)}" stroke="#fff" stroke-width="3" paint-order="stroke">${esc(t)}</text>`;
}

/** For lessons: wrapped HTML with caption. */
export const fig = (opts, caption = "") => { const { svg, w } = sceneSvg(opts); return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:100%;height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`; };
/** For bank/assignments: the SVG document. */
export const figDoc = (opts) => sceneSvg(opts).svg;

/* ------------------------------------------------------------------ 2-D helpers */
const mid = (A, B) => [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
/** polygon with optional side labels (outside, assuming counter-clockwise order) and vertex names. */
export function polygon(pts, { sides = [], names = [], fill = "blue", color = "blue", rightAt = [], angles = [] } = {}) {
  const out = [{ poly: pts, fill, color }];
  const n = pts.length;
  sides.forEach((t, i) => { if (t) out.push({ dim: [pts[i], pts[(i + 1) % n]], label: t }); });
  rightAt.forEach((i) => out.push({ right: [pts[(i + n - 1) % n], pts[i], pts[(i + 1) % n]] }));
  angles.forEach(([i, t]) => out.push({ arc: [pts[(i + 1) % n], pts[i], pts[(i + n - 1) % n]], label: t }));
  names.forEach((t, i) => { if (t) { const g = centroid(pts), d = unit(g, pts[i]); out.push({ text: t, at: [pts[i][0] + d[0] * 0.07 * size(pts), pts[i][1] + d[1] * 0.07 * size(pts)], bold: true }); } });
  return out;
}
const size = (pts) => Math.max(Math.max(...pts.map((p) => p[0])) - Math.min(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1])) - Math.min(...pts.map((p) => p[1])));
const centroid = (pts) => [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];

/** right triangle with legs a (horizontal) and b (vertical); labels for a, b, c. */
export function rightTri(a, b, { la = String(a), lb = String(b), lc = "", fill = "blue" } = {}) {
  const A = [0, 0], B = [a, 0], C = [a, b];
  return polygon([A, B, C], { sides: [la, lb, lc], fill, rightAt: [1] });
}
export function rect(wd, ht, { lw = String(wd), lh = String(ht), fill = "blue", at = [0, 0] } = {}) {
  const [x, y] = at;
  return polygon([[x, y], [x + wd, y], [x + wd, y + ht], [x, y + ht]], { sides: [lw, lh, "", ""], fill });
}

/* ------------------------------------------------------------------ 3-D helpers (oblique projection) */
const OB = [0.45, 0.32]; // depth direction
const pr = (x, y, z) => [x + z * OB[0], y + z * OB[1]];
/** rectangular prism l (width) × w (depth) × h (height) */
export function prism(l, w, h, { ll = `${l}`, lw = `${w}`, lh = `${h}`, fill = "blue" } = {}) {
  const V = (x, y, z) => pr(x, y, z);
  const out = [
    { poly: [V(0, 0, 0), V(l, 0, 0), V(l, h, 0), V(0, h, 0)], fill, color: "blue" },
    { poly: [V(0, h, 0), V(l, h, 0), V(l, h, w), V(0, h, w)], fill: "#eff6ff", color: "blue" },
    { poly: [V(l, 0, 0), V(l, 0, w), V(l, h, w), V(l, h, 0)], fill: "#bfdbfe", color: "blue" },
    { seg: [V(0, 0, 0), V(0, 0, w)], color: "blue", dash: true, width: 1.5 },
    { seg: [V(0, 0, w), V(l, 0, w)], color: "blue", dash: true, width: 1.5 },
    { seg: [V(0, 0, w), V(0, h, w)], color: "blue", dash: true, width: 1.5 },
  ];
  const s = Math.max(l, h, w);
  if (ll) out.push({ text: ll, at: [l / 2, -0.09 * s], bold: true, color: "blue" });
  if (lh) out.push({ text: lh, at: [-0.05 * s, h / 2], bold: true, color: "blue", anchor: "end" });
  if (lw) out.push({ text: lw, at: [...(() => { const p = V(l, 0, w / 2); return [p[0] + 0.07 * s, p[1] - 0.03 * s]; })()], bold: true, color: "blue", anchor: "start" });
  return out;
}
/** triangular prism: right-triangle (or any) cross-section with base b, height t, apex offset ax; length L into the page */
export function triPrism(b, t, L, { lb = `${b}`, lt = `${t}`, lL = `${L}`, ax = 0, fill = "green" } = {}) {
  const V = (x, y, z) => pr(x, y, z);
  const s = Math.max(b, t, L);
  const out = [
    { poly: [V(0, 0, 0), V(b, 0, 0), V(ax, t, 0)], fill, color: "green" },
    { poly: [V(b, 0, 0), V(b, 0, L), V(ax, t, L), V(ax, t, 0)], fill: "#bbf7d0", color: "green" },
    { seg: [V(0, 0, 0), V(0, 0, L)], color: "green", dash: true, width: 1.5 },
    { seg: [V(0, 0, L), V(b, 0, L)], color: "green", dash: true, width: 1.5 },
    { seg: [V(0, 0, L), V(ax, t, L)], color: "green", dash: true, width: 1.5 },
  ];
  if (ax === 0) out.push({ right: [V(b, 0, 0), V(0, 0, 0), V(0, t, 0)] });
  else out.push({ seg: [V(ax, 0, 0), V(ax, t, 0)], color: "gray", dash: true, width: 1.3 }, { right: [V(b, 0, 0), V(ax, 0, 0), V(ax, t, 0)] });
  if (lb) out.push({ text: lb, at: [b / 2, -0.08 * s], bold: true, color: "green" });
  if (lt) out.push({ text: lt, at: [(ax === 0 ? 0 : ax) - 0.04 * s, t / 2], bold: true, color: "green", anchor: "end" });
  if (lL) { const p = V(b, 0, L / 2); out.push({ text: lL, at: [p[0] + 0.06 * s, p[1] - 0.03 * s], bold: true, color: "green", anchor: "start" }); }
  return out;
}
/** cylinder radius r, height h (upright). */
export function cylinder(r, h, { lr = `r = ${r}`, lh = `${h}`, fill = "violet" } = {}) {
  const ry = r * 0.32, s = Math.max(2 * r, h);
  return [
    { ellipse: [0, 0, r, ry], fill, color: "none", width: 0 },
    { poly: [[-r, 0], [-r, h], [r, h], [r, 0]], fill, color: "none", width: 0 },
    { ellipse: [0, 0, r, ry], half: "bottom", color: "violet" },
    { ellipse: [0, 0, r, ry], half: "top", color: "violet", dash: true, width: 1.5 },
    { seg: [[-r, 0], [-r, h]], color: "violet" }, { seg: [[r, 0], [r, h]], color: "violet" },
    { ellipse: [0, h, r, ry], fill: "#f5f3ff", color: "violet" },
    { seg: [[0, h], [r, h]], color: "red", width: 1.8 }, { dot: [0, h], color: "red", r: 3 },
    ...(lr ? [{ text: lr, at: [r / 2, h + ry * 0.55], color: "red", bold: true, size: 12.5 }] : []),
    ...(lh ? [{ text: lh, at: [r + 0.06 * s, h / 2], color: "violet", bold: true, anchor: "start" }] : []),
  ];
}
/** cone radius r, height h; optional slant label. */
export function cone(r, h, { lr = `r = ${r}`, lh = `h = ${h}`, ls = "", fill = "amber" } = {}) {
  const ry = r * 0.32, s = Math.max(2 * r, h);
  return [
    { ellipse: [0, 0, r, ry], fill, color: "none", width: 0 },
    { poly: [[-r, 0], [0, h], [r, 0]], fill, color: "none", width: 0 },
    { ellipse: [0, 0, r, ry], half: "bottom", color: "amber" },
    { ellipse: [0, 0, r, ry], half: "top", color: "amber", dash: true, width: 1.5 },
    { seg: [[-r, 0], [0, h]], color: "amber" }, { seg: [[r, 0], [0, h]], color: "amber" },
    ...(lh ? [{ seg: [[0, 0], [0, h]], color: "gray", dash: true, width: 1.4 }, { right: [[r, 0], [0, 0], [0, h]] }, { text: lh, at: [0.04 * s, h * 0.55], color: "gray", bold: true, anchor: "start", size: 12.5 }] : []),
    ...(lr ? [{ seg: [[0, 0], [r, 0]], color: "red", width: 1.8 }, { text: lr, at: [r / 2, -0.07 * s], color: "red", bold: true, size: 12.5 }] : []),
    ...(ls ? [{ dim: [[0, h], [-r, 0]], label: ls, color: "amber", off: 0.07 * s }] : []),
  ];
}
/** square-based pyramid with base side b, height h; optional slant height label. */
export function pyramid(b, h, { lb = `${b}`, lh = `h = ${h}`, ls = "", fill = "amber" } = {}) {
  const V = (x, y, z) => pr(x, y, z), A = V(0, 0, 0), B = V(b, 0, 0), C = V(b, 0, b), D = V(0, 0, b), T = V(b / 2, h, b / 2), O = V(b / 2, 0, b / 2), M = V(b / 2, 0, 0);
  const s = Math.max(b, h);
  return [
    { poly: [A, B, T], fill, color: "amber" }, { poly: [B, C, T], fill: "#fde68a", color: "amber" },
    { seg: [A, D], color: "amber", dash: true, width: 1.4 }, { seg: [D, C], color: "amber", dash: true, width: 1.4 }, { seg: [D, T], color: "amber", dash: true, width: 1.4 },
    ...(lh ? [{ seg: [O, T], color: "gray", dash: true, width: 1.4 }, { text: lh, at: [O[0] + 0.03 * s, (O[1] + T[1]) / 2], color: "gray", bold: true, anchor: "start", size: 12.5 }] : []),
    ...(ls ? [{ seg: [M, T], color: "red", dash: true, width: 1.6 }, { dim: [M, T], label: ls, color: "red", off: 0.06 * s }] : []),
    ...(lb ? [{ text: lb, at: [b / 2, -0.08 * s], bold: true, color: "amber" }] : []),
  ];
}
export function sphere(r, { lr = `r = ${r}`, fill = "green" } = {}) {
  return [
    { circle: [0, 0, r], fill, color: "green" },
    { ellipse: [0, 0, r, r * 0.28], half: "bottom", color: "green", width: 1.5 },
    { ellipse: [0, 0, r, r * 0.28], half: "top", color: "green", dash: true, width: 1.3 },
    { seg: [[0, 0], [r, 0]], color: "red", width: 1.8 }, { dot: [0, 0], color: "red", r: 3 },
    ...(lr ? [{ text: lr, at: [r / 2, 0.12 * r], color: "red", bold: true, size: 12.5 }] : []),
  ];
}
/** net of a rectangular prism l × w × h, face areas written inside. */
export function prismNet(l, w, h, { areas = true } = {}) {
  const R = (x, y, wd, ht, fill, t) => [{ poly: [[x, y], [x + wd, y], [x + wd, y + ht], [x, y + ht]], fill, color: "blue", width: 1.8 }, ...(t ? [{ text: t, at: [x + wd / 2, y + ht / 2], size: 12.5, bold: true, color: "blue" }] : [])];
  const A = (a, b) => (areas ? `${a}×${b}` : "");
  return [
    ...R(0, w, w, h, "#bfdbfe", A(w, h)), ...R(w, w, l, h, "#dbeafe", A(l, h)), ...R(w + l, w, w, h, "#bfdbfe", A(w, h)), ...R(2 * w + l, w, l, h, "#dbeafe", A(l, h)),
    ...R(w, 0, l, w, "#eff6ff", A(l, w)), ...R(w, w + h, l, w, "#eff6ff", A(l, w)),
  ];
}
/** net of a cylinder: two circles and the rectangle 2πr × h */
export function cylinderNet(r, h, { lr = `r = ${r}`, lh = `${h}`, lc = "2πr" } = {}) {
  const L = 2 * Math.PI * r;
  return [
    { poly: [[0, 0], [L, 0], [L, h], [0, h]], fill: "#ede9fe", color: "violet" },
    { circle: [L / 2, h + r, r], fill: "#f5f3ff", color: "violet" }, { circle: [L / 2, -r, r], fill: "#f5f3ff", color: "violet" },
    { seg: [[L / 2, h + r], [L / 2 + r, h + r]], color: "red", width: 1.6 }, { text: lr, at: [L / 2 + r / 2, h + r + 0.25 * r], color: "red", bold: true, size: 12 },
    { text: lc, at: [L / 2, h * 0.5], color: "violet", bold: true }, { text: lh, at: [L + 0.04 * L, h / 2], color: "violet", bold: true, anchor: "start" },
  ];
}
export { mid };
