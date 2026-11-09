// MCF3M figure helpers shared by lessons, bank, assignments and written questions (standalone SVG documents).
// planeDoc(o) = coordinate plane (see scripts/mth1w-ch4/figs4.mjs for the options); mapDoc(pairs) = mapping diagram.
export { planeDoc, mapDoc, P, circ, sideways, graph } from "../mhf4u-ch7/bank/fig.mjs";
import { planeDoc } from "../mhf4u-ch7/bank/fig.mjs";

/** Area-model (box) diagram for multiplying/factoring: cols and rows are the factor terms (strings, shown as
 *  plain text such as "2x", "−3"); cells[r][c] the products. Optional title above. Standalone SVG document. */
export function areaBox(cols, rows, cells, title = "") {
  const cw = 92, ch = 54, L = 70, T = title ? 56 : 34, W = L + cols.length * cw + 16, H = T + rows.length * ch + 14;
  const tint = ["#ede9fe", "#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3", "#e0f2fe"];
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  if (title) s += `<text x="${W / 2}" y="22" font-size="15" font-weight="700" text-anchor="middle" fill="#0f172a">${title}</text>`;
  cols.forEach((c, j) => { s += `<text x="${L + j * cw + cw / 2}" y="${T - 10}" font-size="16" font-weight="700" text-anchor="middle" fill="#1e40af">${c}</text>`; });
  rows.forEach((r, i) => { s += `<text x="${L - 10}" y="${T + i * ch + ch / 2 + 6}" font-size="16" font-weight="700" text-anchor="end" fill="#be123c">${r}</text>`; });
  rows.forEach((_, i) => cols.forEach((_, j) => {
    s += `<rect x="${L + j * cw}" y="${T + i * ch}" width="${cw}" height="${ch}" fill="${tint[(i * cols.length + j) % tint.length]}" stroke="#334155" stroke-width="1.5"/>`;
    s += `<text x="${L + j * cw + cw / 2}" y="${T + i * ch + ch / 2 + 6}" font-size="16" font-weight="700" text-anchor="middle" fill="#0f172a">${cells[i][j]}</text>`;
  }));
  return s + "</svg>";
}

/** a parabola y = a(x-h)^2 + k as a curve spec */
export const para = (a, h, k, color = "violet", extra = {}) => ({ f: (x) => a * (x - h) ** 2 + k, color, ...extra });
/** the parent y = x^2 in grey */
export const PARENT = { f: (x) => x * x, color: "gray" };
/** quick plane with parabolas and labelled points */
export const quadDoc = (view, curves, points = [], more = {}) => planeDoc({ view, curves, points, ...more });

// Trigonometry (degrees) and triangle diagrams (standalone SVG) — shared with the MCR3U chapter 5 bank helpers.
export { triD, sasD, rightD, sin, cos, tan, asin, acos, atan, rd, lawC, angC, towerD } from "../mcr3u-ch5/bank/fig.mjs";
