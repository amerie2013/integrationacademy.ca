// Matrix pictures for LINALG1 chapter 3 (lessons, worksheets, bank): a matrix with highlighted entries / rows /
// columns, a product A·B with the row and column used for one entry, a matrix beside its transpose, and the zero
// pattern of a triangular or diagonal matrix. Each returns a raw SVG string.
const X = (t) => String(t).replace(/-/g, "−").replace(/&/g, "&amp;").replace(/</g, "&lt;");
const CW = 44, CH = 32;

/** one bracketed matrix at (x0, y0); opts: cells [[i, j, fill]], row i (fill), col j (fill); returns [svg, width, height] */
function block(m, xL, y0, { cells = [], row = -1, col = -1, rowFill = "#dbeafe", colFill = "#fee2e2", label = "" } = {}) {
  const r = m.length, c = m[0].length, W0 = c * CW + 16, H = r * CH + 12;
  // a label wider than the matrix widens the block, with the matrix centred in it
  const pad = Math.max(0, (String(label).length * 8.6 - W0) / 2), x0 = xL + pad, W = W0;
  let s = "";
  if (row >= 0) s += `<rect x="${x0 + 8}" y="${y0 + 6 + row * CH}" width="${c * CW}" height="${CH}" fill="${rowFill}" rx="5"/>`;
  if (col >= 0) s += `<rect x="${x0 + 8 + col * CW}" y="${y0 + 6}" width="${CW}" height="${r * CH}" fill="${colFill}" rx="5"/>`;
  for (const [i, j, f] of cells) s += `<circle cx="${x0 + 8 + j * CW + CW / 2}" cy="${y0 + 6 + i * CH + CH / 2}" r="15" fill="${f ?? "#fde68a"}" stroke="#b45309"/>`;
  m.forEach((rw, i) => rw.forEach((x, j) => { s += `<text x="${x0 + 8 + j * CW + CW / 2}" y="${y0 + 6 + i * CH + CH / 2 + 6}" font-size="17" font-weight="600" text-anchor="middle" fill="#0f172a">${X(x)}</text>`; }));
  const br = (x, d) => `<path d="M${x + 6 * d},${y0 + 2} L${x},${y0 + 2} L${x},${y0 + H - 2} L${x + 6 * d},${y0 + H - 2}" fill="none" stroke="#0f172a" stroke-width="2"/>`;
  s += br(x0 + 3, 1) + br(x0 + W - 3, -1);
  if (label) s += `<text x="${x0 + W / 2}" y="${y0 + H + 18}" font-size="15" font-weight="700" text-anchor="middle" fill="#334155">${X(label)}</text>`;
  return [s, W + 2 * pad, H];
}
const doc = (body, W, H) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>${body}</svg>`;

/** a matrix with optional highlights and a label underneath */
export function matPic(m, opts = {}) {
  const [s, W, H] = block(m, 6, 6, opts);
  return doc(s, W + 12, H + (opts.label ? 34 : 14));
}
/** several matrices in a row joined by symbols: parts = [matrix, opts] or a string such as "+", "=", "·" */
export function rowPic(parts) {
  let x = 6, body = "", maxH = 0;
  const blocks = parts.map((p) => (typeof p === "string" ? p : block(p[0], 0, 0, p[1] ?? {})));
  blocks.forEach((b) => { if (typeof b !== "string") maxH = Math.max(maxH, b[2]); });
  parts.forEach((p, k) => {
    if (typeof p === "string") { body += `<text x="${x + 14}" y="${6 + maxH / 2 + 7}" font-size="22" font-weight="700" text-anchor="middle" fill="#334155">${X(p)}</text>`; x += 28; return; }
    const [s, W, H] = block(p[0], x, 6 + (maxH - blocks[k][2]) / 2, p[1] ?? {});
    body += s; x += W + 4;
  });
  const lab = parts.some((p) => typeof p !== "string" && p[1]?.label);
  return doc(body, x + 6, maxH + (lab ? 36 : 14));
}
/** A · B = AB with row i of A, column j of B and entry (i, j) of AB highlighted */
export function prodPic(A, B, i, j) {
  const P = A.map((r) => B[0].map((_, q) => r.reduce((s, x, k) => s + x * B[k][q], 0)));
  return rowPic([[A, { row: i, label: "A" }], [B, { col: j, label: "B" }], "=", [P, { cells: [[i, j, "#bbf7d0"]], label: "AB" }]]);
}
/** A beside Aᵀ with one entry and its mirror highlighted */
export function transPic(A, i = 0, j = 1) {
  const T = A[0].map((_, q) => A.map((r) => r[q]));
  return rowPic([[A, { cells: [[i, j]], label: "A" }], "→", [T, { cells: [[j, i]], label: "Aᵀ" }]]);
}
/** zero pattern of an n × n matrix: "upper", "lower", "diag" (shaded = may be nonzero) */
export function patternPic(kind, n = 4) {
  const s0 = 34, W = n * s0 + 20;
  let s = "";
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const free = kind === "upper" ? j >= i : kind === "lower" ? j <= i : i === j;
    s += `<rect x="${10 + j * s0}" y="${10 + i * s0}" width="${s0 - 4}" height="${s0 - 4}" rx="4" fill="${free ? (i === j ? "#fde68a" : "#dbeafe") : "#f1f5f9"}" stroke="${free ? "#1e40af" : "#cbd5e1"}"/><text x="${10 + j * s0 + (s0 - 4) / 2}" y="${10 + i * s0 + (s0 - 4) / 2 + 6}" font-size="15" text-anchor="middle" fill="${free ? "#1e3a8a" : "#94a3b8"}">${free ? "*" : "0"}</text>`;
  }
  return doc(s, W, n * s0 + 20);
}
