// Figures for IB AA SL chapter 8 (probability): Venn diagrams, tree diagrams, sample-space grids and relative-frequency
// charts as standalone SVG documents. Lessons wrap them with fig(); the bank, assignments and written questions use
// the raw SVG; worksheets use svgT().
export { fig } from "../ibaasl-ch1/figs.mjs";

const COL = { violet: "#7c3aed", blue: "#2563eb", red: "#dc2626", green: "#16a34a", amber: "#d97706", gray: "#64748b", ink: "#0f172a" };
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const doc = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif"><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;

/**
 * Two-set Venn diagram. vals = { a, both, b, out } (numbers or strings shown in each region);
 * shade: any of "a", "both", "b", "out" to highlight; names = ["A", "B"]; U = label for the universal set.
 */
export function vennDoc(vals, { shade = [], names = ["A", "B"], U = "U", single = false, apart = false } = {}) {
  const W = 360, H = 230, cy = 120;
  const cx1 = apart ? 100 : 140, cx2 = apart ? 260 : 220, r = apart ? 62 : 78;
  const sh = (k) => shade.includes(k);
  if (single) {
    const t = (x, y, v) => (v === undefined || v === null ? "" : `<text x="${x}" y="${y}" font-size="17" font-weight="700" text-anchor="middle" fill="${COL.ink}">${esc(v)}</text>`);
    return doc(W, H, `<rect x="8" y="8" width="${W - 16}" height="${H - 16}" fill="${sh("out") ? "#fef3c7" : "#fff"}" stroke="${COL.ink}" stroke-width="1.6"/><circle cx="${W / 2}" cy="${cy}" r="${r}" fill="${sh("a") ? "#fef3c7" : "#fff"}" stroke="${COL.blue}" stroke-width="2.4"/><text x="22" y="30" font-size="15" font-weight="700" fill="${COL.ink}">${esc(U)}</text><text x="${W / 2 - 62}" y="${cy - 62}" font-size="16" font-weight="700" fill="${COL.blue}">${esc(names[0])}</text>${t(W / 2, cy + 6, vals.a)}${t(W - 40, H - 22, vals.out)}`);
  }
  let s = `<defs><clipPath id="vA"><circle cx="${cx1}" cy="${cy}" r="${r}"/></clipPath><clipPath id="vB"><circle cx="${cx2}" cy="${cy}" r="${r}"/></clipPath></defs>`;
  s += `<rect x="8" y="8" width="${W - 16}" height="${H - 16}" fill="${sh("out") ? "#fef3c7" : "#fff"}" stroke="${COL.ink}" stroke-width="1.6"/>`;
  s += `<circle cx="${cx1}" cy="${cy}" r="${r}" fill="${sh("a") ? "#fef3c7" : "#fff"}"/><circle cx="${cx2}" cy="${cy}" r="${r}" fill="${sh("b") ? "#fef3c7" : "#fff"}"/>`;
  s += `<g clip-path="url(#vA)"><circle cx="${cx2}" cy="${cy}" r="${r}" fill="${sh("both") ? "#fde68a" : sh("a") && sh("b") ? "#fef3c7" : "#fff"}"/></g>`;
  s += `<circle cx="${cx1}" cy="${cy}" r="${r}" fill="none" stroke="${COL.blue}" stroke-width="2.4"/><circle cx="${cx2}" cy="${cy}" r="${r}" fill="none" stroke="${COL.red}" stroke-width="2.4"/>`;
  s += `<text x="22" y="30" font-size="15" font-weight="700" fill="${COL.ink}">${esc(U)}</text>`;
  s += `<text x="${cx1 - 62}" y="${cy - 62}" font-size="16" font-weight="700" fill="${COL.blue}">${esc(names[0])}</text><text x="${cx2 + 50}" y="${cy - 62}" font-size="16" font-weight="700" fill="${COL.red}">${esc(names[1])}</text>`;
  const t = (x, y, v) => (v === undefined || v === null ? "" : `<text x="${x}" y="${y}" font-size="17" font-weight="700" text-anchor="middle" fill="${COL.ink}">${esc(v)}</text>`);
  s += apart ? t(cx1, cy + 6, vals.a) + t(cx2, cy + 6, vals.b) + t(W - 40, H - 22, vals.out)
    : t(cx1 - 38, cy + 6, vals.a) + t((cx1 + cx2) / 2, cy + 6, vals.both) + t(cx2 + 38, cy + 6, vals.b) + t(W - 40, H - 22, vals.out);
  return doc(W, H, s);
}

/**
 * Tree diagram with two stages. first = [[label, prob], ...]; second = for each first branch, [[label, prob], ...].
 * Probabilities are shown on the branches; outcomes (product) are listed at the right when ends = true.
 */
export function treeDoc(first, second, { ends = true, highlight = [] } = {}) {
  const n2 = second.reduce((s, b) => s + b.length, 0), W = ends ? 470 : 360, H = Math.max(160, n2 * 42 + 20);
  let s = "", row = 0;
  const x0 = 20, x1 = 150, x2 = 300, y0 = H / 2;
  const ys1 = [];
  first.forEach((_, i) => { const kids = second[i].length; ys1.push(20 + (row + kids / 2) * ((H - 20) / n2)); row += kids; });
  row = 0;
  first.forEach(([lab, p], i) => {
    const y1 = ys1[i];
    s += `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${COL.violet}" stroke-width="2.2"/>`;
    s += `<text x="${(x0 + x1) / 2 - 4}" y="${(y0 + y1) / 2 + (y1 < y0 + 4 ? -6 : 16)}" font-size="13" font-weight="700" fill="${COL.blue}" text-anchor="middle">${esc(p)}</text>`;
    s += `<text x="${x1 + 6}" y="${y1 + 5}" font-size="15" font-weight="700" fill="${COL.ink}">${esc(lab)}</text>`;
    second[i].forEach(([lab2, p2], j) => {
      const y2 = 20 + (row + 0.5) * ((H - 20) / n2); row++;
      const hl = highlight.includes(`${i}${j}`);
      s += `<line x1="${x1 + 12 + 9 * String(lab).length}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${hl ? COL.red : COL.violet}" stroke-width="${hl ? 3 : 2.2}"/>`;
      s += `<text x="${(x1 + 12 + 9 * String(lab).length + x2) / 2}" y="${(y1 + y2) / 2 + (y2 < y1 + 4 ? -6 : 16)}" font-size="13" font-weight="700" fill="${COL.blue}" text-anchor="middle">${esc(p2)}</text>`;
      s += `<text x="${x2 + 6}" y="${y2 + 5}" font-size="15" font-weight="700" fill="${COL.ink}">${esc(lab2)}</text>`;
      if (ends) s += `<text x="${x2 + 46}" y="${y2 + 5}" font-size="13" fill="${hl ? COL.red : COL.gray}">${esc(lab)}${esc(lab2)}</text>`;
    });
  });
  return doc(W, H, s);
}

/** sample-space grid for two dice (or any two lists); mark(a, b) returns true for highlighted cells; cell(a, b) gives the text */
export function gridDoc(rows, cols, { mark = () => false, cell = (a, b) => `${a},${b}`, rowName = "first", colName = "second" } = {}) {
  const c = 42, W = 70 + cols.length * c, H = 60 + rows.length * c;
  let s = `<text x="${70 + (cols.length * c) / 2}" y="18" font-size="13" font-weight="700" text-anchor="middle" fill="${COL.ink}">${esc(colName)}</text>`;
  s += `<text x="16" y="${60 + (rows.length * c) / 2}" font-size="13" font-weight="700" text-anchor="middle" fill="${COL.ink}" transform="rotate(-90 16 ${60 + (rows.length * c) / 2})">${esc(rowName)}</text>`;
  cols.forEach((b, j) => { s += `<text x="${70 + j * c + c / 2}" y="44" font-size="14" font-weight="700" text-anchor="middle" fill="${COL.red}">${esc(b)}</text>`; });
  rows.forEach((a, i) => {
    s += `<text x="44" y="${60 + i * c + c / 2 + 5}" font-size="14" font-weight="700" text-anchor="middle" fill="${COL.blue}">${esc(a)}</text>`;
    cols.forEach((b, j) => {
      const m = mark(a, b);
      s += `<rect x="${70 + j * c}" y="${52 + i * c}" width="${c}" height="${c}" fill="${m ? "#fde68a" : "#fff"}" stroke="#cbd5e1"/>`;
      s += `<text x="${70 + j * c + c / 2}" y="${52 + i * c + c / 2 + 4}" font-size="11.5" text-anchor="middle" fill="${m ? COL.ink : COL.gray}">${esc(cell(a, b))}</text>`;
    });
  });
  return doc(W, H, s);
}

/** relative frequency against number of trials (a running proportion), with the theoretical value as a dashed line */
export function relFreqDoc(props, theory, { label = "relative frequency" } = {}) {
  const W = 420, H = 230, L = 46, B = 196, Tt = 16, R = 404, n = props.length;
  const X = (i) => L + (i / (n - 1)) * (R - L), Y = (p) => B - p * (B - Tt);
  let s = `<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" stroke="${COL.ink}"/><line x1="${L}" y1="${Tt}" x2="${L}" y2="${B}" stroke="${COL.ink}"/>`;
  [0, 0.25, 0.5, 0.75, 1].forEach((p) => { s += `<line x1="${L}" y1="${Y(p)}" x2="${R}" y2="${Y(p)}" stroke="#eef2f7"/><text x="${L - 6}" y="${Y(p) + 4}" font-size="11" text-anchor="end" fill="${COL.gray}">${p}</text>`; });
  s += `<line x1="${L}" y1="${Y(theory)}" x2="${R}" y2="${Y(theory)}" stroke="${COL.red}" stroke-width="2" stroke-dasharray="7 5"/>`;
  s += `<polyline points="${props.map((p, i) => `${X(i)},${Y(p)}`).join(" ")}" fill="none" stroke="${COL.violet}" stroke-width="2.4"/>`;
  s += `<text x="${(L + R) / 2}" y="${H - 8}" font-size="12" text-anchor="middle" fill="${COL.ink}">number of trials</text><text x="${L + 6}" y="${Tt + 12}" font-size="12" fill="${COL.ink}">${esc(label)}</text>`;
  return doc(W, H, s);
}
