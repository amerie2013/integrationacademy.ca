// Figures for the LINALG1 chapter 2 worksheets: systems drawn as lines (R²) or planes (R³), echelon staircases,
// and small diagrams. Each returns an SVG string; wrap it with VF/svgT from wkit/figT to place it.
import { vdoc, scene3, patch3, pt3, line3 } from "../vecfig.mjs";
import { lineSeg } from "../vecfig.mjs";

/** escape text for SVG */
const X = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const COLORS = ["blue", "red", "green", "violet"];
const FILLS = [["#dbeafe", "blue"], ["#fee2e2", "red"], ["#dcfce7", "green"], ["#ede9fe", "violet"]];
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a) => { const n = Math.sqrt(dot(a, a)); return a.map((x) => x / n); };

/** lines a·x₁ + b·x₂ = c (rows [a, b, c]) in a 2-D view, with an optional marked point */
export function linesSvg(rows, view, point = null, label = null, width = 300) {
  return vdoc({ view, step: 1, width, segs: rows.map(([a, b, c], i) => lineSeg(a, b, c, view, COLORS[i % 4], i === 1 && rows.length > 1 && rows[0][0] * b === rows[0][1] * a && rows[0][2] * (a || b) === c * (rows[0][0] || rows[0][1]) ? 5 : 2.6, i === 2)),
    points: point ? [{ x: point[0], y: point[1], label: label ?? `(${point.join(", ")})`, color: "amber" }] : [],
    texts: view.xmax > 0 && view.ymax > 0 ? [{ x: view.xmax - 0.25, y: (view.ymax - view.ymin) * 0.04, t: "x₁", color: "gray", anchor: "end" }, { x: (view.xmax - view.xmin) * 0.04, y: view.ymax - 0.35, t: "x₂", color: "gray", anchor: "start" }] : [] });
}

/** planes n·x = d (rows [a, b, c, d]) drawn as patches around `center` (a common point if there is one) */
export function planesSvg(rows, { center = null, size = 1.4, len = 3.5, point = null, label = null, line = null } = {}) {
  const polys = rows.map(([a, b, c, d], i) => {
    const n = [a, b, c];
    const e = Math.abs(n[0]) < 0.9 * Math.sqrt(dot(n, n)) ? [1, 0, 0] : [0, 1, 0];
    const u = unit(cross(n, e)), v = unit(cross(n, u));
    // the patch centre: the given common point, or the point of this plane nearest to `center`/origin
    const c0 = center ?? [0, 0, 0];
    const t = (d - dot(n, c0)) / dot(n, n);
    const p = c0.map((x, k) => x + t * n[k]);
    return patch3(p, u, v, size, FILLS[i % 4][0], FILLS[i % 4][1], 0.45);
  });
  return vdoc(scene3(len, {
    polys,
    segs: line ? [line3(line.p, line.d, line.t0 ?? -1.5, line.t1 ?? 1.5, "amber", 3)] : [],
    points: point ? [pt3(point, label ?? `(${point.join(", ")})`, { color: "amber" })] : [],
  }));
}

/** echelon staircase: cells "p" (pivot), "1" (leading 1), "*" (any), "0"; bar before the last column if aug */
export function stairSvg(rows, aug = true) {
  const m = rows.length, n = rows[0].length, c = 34, W = n * c + 24, H = m * c + 16;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  const piv = [];
  rows.forEach((r, i) => r.forEach((x, j) => {
    const X = 12 + j * c, Y = 8 + i * c, isP = x === "p" || x === "1";
    if (isP) piv.push([i, j]);
    s += `<rect x="${X + 2}" y="${Y + 2}" width="${c - 4}" height="${c - 4}" rx="5" fill="${isP ? "#fde68a" : x === "0" ? "#f8fafc" : "#e0e7ff"}" stroke="${isP ? "#b45309" : "#cbd5e1"}"/>`;
    s += `<text x="${X + c / 2}" y="${Y + c / 2 + 6}" font-size="17" font-weight="700" text-anchor="middle" fill="${isP ? "#92400e" : x === "0" ? "#94a3b8" : "#3730a3"}">${x === "p" ? "■" : x}</text>`;
  }));
  if (aug) s += `<line x1="${12 + (n - 1) * c}" y1="4" x2="${12 + (n - 1) * c}" y2="${H - 4}" stroke="#0f172a" stroke-width="2"/>`;
  let d = "";
  piv.forEach(([i, j], k) => { const X = 12 + j * c, Y = 8 + (i + 1) * c; d += `${k ? "L" : "M"}${X},${8 + i * c} L${X},${Y} L${X + c},${Y} `; });
  return s + `<path d="${d}" fill="none" stroke="#be123c" stroke-width="2.4"/></svg>`;
}

/** a numeric matrix as a picture, pivots highlighted: entries are numbers or strings; piv = [[i, j], ...] */
export function matSvg(rows, piv = [], aug = true, hi = -1) {
  const m = rows.length, n = rows[0].length, cw = 46, ch = 32, W = n * cw + 40, H = m * ch + 16;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  if (hi >= 0) s += `<rect x="18" y="${8 + hi * ch}" width="${W - 36}" height="${ch}" fill="#dbeafe" rx="4"/>`;
  rows.forEach((r, i) => r.forEach((x, j) => {
    const isP = piv.some(([a, b]) => a === i && b === j);
    s += `${isP ? `<circle cx="${20 + j * cw + cw / 2}" cy="${8 + i * ch + ch / 2}" r="14" fill="#fde68a" stroke="#b45309"/>` : ""}<text x="${20 + j * cw + cw / 2}" y="${8 + i * ch + ch / 2 + 6}" font-size="17" font-weight="${isP ? 800 : 600}" text-anchor="middle" fill="${isP ? "#92400e" : "#0f172a"}">${String(x).replace(/-/g, "−")}</text>`;
  }));
  const br = (x, dir) => `<path d="M${x + 6 * dir},6 L${x},6 L${x},${H - 6} L${x + 6 * dir},${H - 6}" fill="none" stroke="#0f172a" stroke-width="2"/>`;
  s += br(14, 1) + br(W - 14, -1);
  if (aug) s += `<line x1="${20 + (n - 1) * cw}" y1="8" x2="${20 + (n - 1) * cw}" y2="${H - 8}" stroke="#0f172a" stroke-width="1.6"/>`;
  return s + `</svg>`;
}

/** a flowchart of boxes joined by arrows: items = [[title, subtitle, colour], ...] */
export function flowSvg(items, width = 460) {
  const bh = 46, gap = 20, H = items.length * (bh + gap);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${H}" width="${width}" height="${H}" font-family="Arial, sans-serif"><rect width="${width}" height="${H}" fill="#fff"/>`;
  items.forEach(([t1, t2, col], i) => {
    const y = 4 + i * (bh + gap), [fill, stroke] = col === "amber" ? ["#fef3c7", "#b45309"] : col === "green" ? ["#dcfce7", "#15803d"] : col === "red" ? ["#ffe4e6", "#be123c"] : ["#eef2ff", "#4338ca"];
    s += `<rect x="10" y="${y}" width="${width - 20}" height="${bh}" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/><text x="${width / 2}" y="${y + 20}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${X(t1)}</text><text x="${width / 2}" y="${y + 37}" font-size="12.5" text-anchor="middle" fill="#475569">${X(t2)}</text>`;
    if (i < items.length - 1) s += `<line x1="${width / 2}" y1="${y + bh}" x2="${width / 2}" y2="${y + bh + gap - 6}" stroke="#475569" stroke-width="2"/><polygon points="${width / 2 - 6},${y + bh + gap - 8} ${width / 2 + 6},${y + bh + gap - 8} ${width / 2},${y + bh + gap - 1}" fill="#475569"/>`;
  });
  return s + `</svg>`;
}
