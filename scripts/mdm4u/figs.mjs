// Shared SVG figures for the MDM4U (Data Management) self-study rebuild: tree diagrams, slot (box) diagrams,
// Venn diagrams, Pascal's triangle, street grids, tiles in a row, round tables and bar charts.
// Every builder returns a standalone SVG document string (bank, assignments, written questions, worksheets);
// fig(svg, caption) wraps one for a lesson's HTML.
const COL = { blue: "#1e40af", red: "#be123c", green: "#15803d", violet: "#6d28d9", amber: "#b45309", gray: "#475569", ink: "#0f172a", teal: "#0f766e" };
const FILL = { blue: "#dbeafe", red: "#ffe4e6", green: "#dcfce7", violet: "#ede9fe", amber: "#fef3c7", gray: "#f1f5f9", teal: "#ccfbf1" };
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const doc = (W, H, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>${body}</svg>`;
const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.size ?? 14}" ${o.bold === false ? "" : `font-weight="700"`} text-anchor="${o.anchor ?? "middle"}" fill="${COL[o.color] ?? o.color ?? COL.ink}"${o.halo ? ` stroke="#fff" stroke-width="3" paint-order="stroke"` : ""}${o.italic ? ` font-style="italic"` : ""}>${esc(s)}</text>`;

/** lesson wrapper */
export const fig = (svg, caption = "", max = null) => {
  const w = svg.match(/width="([\d.]+)"/)[1];
  return `<div style="text-align:center;margin:12px 0;">${svg.replace(`width="${w}"`, `width="${w}" style="max-width:${max ?? "100%"};height:auto;"`)}${caption ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div>` : ""}</div>`;
};

/* ------------------------------------------------------------------ tree diagrams */
/** full tree from stage options: fullTree([["H","T"],["1","2","3"]]) → nodes { t, c } */
export const fullTree = (levels, probs = null) => {
  const build = (d) => (d >= levels.length ? [] : levels[d].map((t, i) => ({ t, p: probs?.[d]?.[i], c: build(d + 1) })));
  return build(0);
};
/**
 * Left-to-right tree. nodes = [{ t: label, p: edge label (optional), c: [children], hl: true }].
 * o: { root: "Start", leaf: (path) => text | false, heads: ["Stage 1", ...], w (stage spacing), dy (leaf spacing) }
 */
export function treeSvg(nodes, o = {}) {
  const leaves = [];
  const count = (n) => (n.c?.length ? n.c.reduce((s, k) => s + count(k), 0) : 1);
  const depth = (ns) => (ns.length ? 1 + Math.max(...ns.map((n) => depth(n.c ?? []))) : 0);
  const D = depth(nodes), total = nodes.reduce((s, n) => s + count(n), 0);
  const dy = o.dy ?? (total > 16 ? 22 : total > 9 ? 27 : 34), sw = o.w ?? (D > 3 ? 92 : 118);
  const leafW = o.leaf === false ? 10 : o.leafW ?? 110, top = o.heads ? 34 : 14;
  const W = 60 + D * sw + leafW, H = top + total * dy + 10;
  let s = "", row = 0;
  const place = (ns, x0, y0, path) => {
    for (const n of ns) {
      const k = count(n), y = top + (row + k / 2) * dy, x = x0 + sw;
      const hl = n.hl ? COL.red : COL.gray;
      s += `<line x1="${x0 + 8}" y1="${y0}" x2="${x - 14}" y2="${y}" stroke="${hl}" stroke-width="${n.hl ? 2.8 : 1.6}"/>`;
      if (n.p !== undefined) s += txt((x0 + x) / 2 - 2, (y0 + y) / 2 - 5, n.p, { size: 12, color: "violet", halo: true });
      const p = [...path, n.t];
      if (n.c?.length) place(n.c, x, y, p);
      else {
        row += 1;
        const lt = o.leaf === false ? "" : o.leaf ? o.leaf(p, n) : p.join("");
        if (lt) s += txt(x + 18, y + 5, lt, { size: 12.5, anchor: "start", color: n.hl ? "red" : "blue", bold: !!n.hl });
        leaves.push(p);
      }
      s += `<circle cx="${x}" cy="${y}" r="13" fill="${n.hl ? FILL.red : FILL.blue}" stroke="${n.hl ? COL.red : COL.blue}" stroke-width="1.5"/>` + txt(x, y + 5, n.t, { size: String(n.t).length > 2 ? 10 : 13 });
    }
  };
  const ry = top + (total / 2) * dy;
  place(nodes, 30, ry, []);
  s = `<circle cx="30" cy="${ry}" r="6" fill="${COL.ink}"/>` + (o.root ? txt(30, ry - 12, o.root, { size: 11 }) : "") + s;
  if (o.heads) o.heads.forEach((h, i) => { s += txt(30 + (i + 1) * sw, 18, h, { size: 12, color: "gray" }); });
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ slot (box) diagrams */
/** slots([["1st", 8], ["2nd", 7]], { op: "×", result: 56, title }) — boxes with the number of choices */
export function slotsSvg(items, o = {}) {
  const bw = o.bw ?? 66, gap = 34, n = items.length, op = o.op ?? "×";
  const res = o.result !== undefined ? 90 : 0, W = 20 + n * bw + (n - 1) * gap + res + 20, H = o.title ? 118 : 96, top = o.title ? 28 : 8;
  let s = o.title ? txt(W / 2, 18, o.title, { size: 13, color: "gray" }) : "";
  items.forEach(([lab, v, col], i) => {
    const x = 20 + i * (bw + gap), c = col ?? (o.colors?.[i]) ?? "blue";
    s += `<rect x="${x}" y="${top}" width="${bw}" height="52" rx="6" fill="${FILL[c]}" stroke="${COL[c]}" stroke-width="2"/>` + txt(x + bw / 2, top + 34, v, { size: 22, color: c });
    s += txt(x + bw / 2, top + 72, lab, { size: 11.5, color: "gray", bold: false });
    if (i < n - 1) s += txt(x + bw + gap / 2, top + 33, op, { size: 20, color: "gray" });
  });
  if (res) { const x = 20 + n * bw + (n - 1) * gap; s += txt(x + 12, top + 33, "=", { size: 20, color: "gray" }) + txt(x + 52, top + 34, o.result, { size: 22, color: "red" }); }
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ tiles in a row (arrangements) */
/** tilesSvg(["A","B","C"], { groups: [[0,1]] (outlined together), colors: {A:"red"}, fixed: {0: true}, gaps: true }) */
export function tilesSvg(tiles, o = {}) {
  const tw = o.tw ?? 44, gap = 8, n = tiles.length, W = 20 + n * tw + (n - 1) * gap + 20, H = o.caption ? 96 : 76;
  let s = "";
  tiles.forEach((t, i) => {
    const x = 20 + i * (tw + gap), c = o.colors?.[t] ?? o.colorAt?.[i] ?? (t === "_" ? "gray" : "blue");
    s += `<rect x="${x}" y="14" width="${tw}" height="${tw}" rx="6" fill="${FILL[c]}" stroke="${COL[c]}" stroke-width="${o.fixed?.[i] ? 3.2 : 1.8}"${t === "_" ? ` stroke-dasharray="5 4"` : ""}/>` + (t === "_" ? "" : txt(x + tw / 2, 14 + tw / 2 + 7, t, { size: 19, color: c }));
    if (o.pos) s += txt(x + tw / 2, 14 + tw + 15, i + 1, { size: 10.5, color: "gray", bold: false });
  });
  for (const [a, b] of o.groups ?? []) { const x1 = 20 + a * (tw + gap) - 5, x2 = 20 + b * (tw + gap) + tw + 5; s += `<rect x="${x1}" y="8" width="${x2 - x1}" height="${tw + 12}" rx="9" fill="none" stroke="${COL.red}" stroke-width="2.4" stroke-dasharray="7 4"/>`; }
  if (o.caption) s += txt(W / 2, H - 6, o.caption, { size: 12, color: "gray", bold: false });
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ round table */
/** seatsSvg(["A","B","C","D","E"], { hl: [0,1] }) — people around a circular table */
export function seatsSvg(names, o = {}) {
  const n = names.length, R = 74, cx = 120, cy = 112, W = 240, H = 226;
  let s = `<circle cx="${cx}" cy="${cy}" r="${R - 26}" fill="#fef3c7" stroke="${COL.amber}" stroke-width="2"/>` + txt(cx, cy + 5, o.label ?? "table", { size: 12, color: "amber" });
  names.forEach((t, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n, x = cx + R * Math.cos(a) * 1.18, y = cy + R * Math.sin(a) * 1.18, h = o.hl?.includes(i);
    s += `<circle cx="${x}" cy="${y}" r="17" fill="${h ? FILL.red : FILL.blue}" stroke="${h ? COL.red : COL.blue}" stroke-width="2"/>` + txt(x, y + 5, t, { size: 14, color: h ? "red" : "blue" });
  });
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ Venn diagrams */
/**
 * vennSvg({ A: "label", B: "label", C?: "label", n: { a, b, ab, out } or 3-set { a, b, c, ab, ac, bc, abc, out },
 *           shade: ["a","ab",...] regions to shade, U: "U" })
 */
export function vennSvg(o) {
  const three = !!o.C, W = 360, H = three ? 290 : 220;
  const sh = new Set(o.shade ?? []);
  const cA = three ? [142, 112] : [140, 110], cB = three ? [218, 112] : [220, 110], cC = [180, 180], r = three ? 70 : 76;
  let s = `<rect x="8" y="8" width="${W - 16}" height="${H - 16}" rx="8" fill="${sh.has("out") ? "#fde68a" : "#fff"}" stroke="${COL.gray}" stroke-width="1.6"/>` + txt(24, 28, o.U ?? "U", { size: 14, color: "gray" });
  // shading by regions: draw clipped fills
  const circ = (c, extra = "") => `<circle cx="${c[0]}" cy="${c[1]}" r="${r}"${extra}/>`;
  s += `<defs><clipPath id="vA">${circ(cA)}</clipPath><clipPath id="vB">${circ(cB)}</clipPath>${three ? `<clipPath id="vC">${circ(cC)}</clipPath>` : ""}<mask id="mA"><rect width="${W}" height="${H}" fill="#fff"/>${circ(cA, ` fill="#000"`)}</mask><mask id="mB"><rect width="${W}" height="${H}" fill="#fff"/>${circ(cB, ` fill="#000"`)}</mask>${three ? `<mask id="mC"><rect width="${W}" height="${H}" fill="#fff"/>${circ(cC, ` fill="#000"`)}</mask>` : ""}</defs>`;
  const Y = "#fde68a";
  const region = (inA, inB, inC) => {
    // nested groups: clip to included circles, mask out excluded ones
    let shape = `<rect width="${W}" height="${H}" fill="${Y}"/>`;
    const wrap = (inner, attr) => `<g ${attr}>${inner}</g>`;
    if (inA) shape = wrap(shape, `clip-path="url(#vA)"`); else shape = wrap(shape, `mask="url(#mA)"`);
    if (inB) shape = wrap(shape, `clip-path="url(#vB)"`); else shape = wrap(shape, `mask="url(#mB)"`);
    if (three) { if (inC) shape = wrap(shape, `clip-path="url(#vC)"`); else shape = wrap(shape, `mask="url(#mC)"`); }
    return shape;
  };
  const REG = three
    ? { a: [1, 0, 0], b: [0, 1, 0], c: [0, 0, 1], ab: [1, 1, 0], ac: [1, 0, 1], bc: [0, 1, 1], abc: [1, 1, 1] }
    : { a: [1, 0], b: [0, 1], ab: [1, 1] };
  for (const [k, v] of Object.entries(REG)) if (sh.has(k)) s += region(...v);
  s += circ(cA, ` fill="none" stroke="${COL.blue}" stroke-width="2.4"`) + circ(cB, ` fill="none" stroke="${COL.red}" stroke-width="2.4"`) + (three ? circ(cC, ` fill="none" stroke="${COL.green}" stroke-width="2.4"`) : "");
  s += txt(cA[0] - r * 0.55, cA[1] - r - 6, o.A, { size: 13, color: "blue" }) + txt(cB[0] + r * 0.55, cB[1] - r - 6, o.B, { size: 13, color: "red" }) + (three ? txt(cC[0], cC[1] + r + 18, o.C, { size: 13, color: "green" }) : "");
  const n = o.n ?? {};
  const put = (k, x, y) => { if (n[k] !== undefined && n[k] !== null) s += txt(x, y, n[k], { size: 16 }); };
  if (three) { put("a", 112, 92); put("b", 248, 92); put("c", 180, 212); put("ab", 180, 82); put("ac", 140, 160); put("bc", 220, 160); put("abc", 180, 132); put("out", W - 34, H - 22); }
  else { put("a", 100, 116); put("b", 260, 116); put("ab", 180, 116); put("out", W - 34, H - 22); }
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ Pascal's triangle */
/** pascalSvg(rows, { hl: [[n, r], ...] red, hl2: [[n,r]] green, notation: true (nCr labels), sums: true }) */
export const C = (n, r) => { if (r < 0 || r > n) return 0; let v = 1; for (let k = 1; k <= r; k++) v = (v * (n - r + k)) / k; return Math.round(v); };
export function pascalSvg(rows, o = {}) {
  const cw = o.notation ? 64 : rows > 9 ? 40 : 46, rh = 34, W = Math.max(260, (rows + 1) * cw + 40) + (o.sums ? 70 : 0), H = rows * rh + 40, cx = (W - (o.sums ? 70 : 0)) / 2;
  const key = (a) => new Set((a ?? []).map(([n, r]) => `${n},${r}`));
  const h1 = key(o.hl), h2 = key(o.hl2);
  let s = "";
  for (let n = 0; n < rows; n++) {
    s += txt(14, 26 + n * rh, `row ${n}`, { size: 10, color: "gray", anchor: "start", bold: false });
    for (let r = 0; r <= n; r++) {
      const x = cx + (r - n / 2) * cw, y = 22 + n * rh, k = `${n},${r}`, c = h1.has(k) ? "red" : h2.has(k) ? "green" : null;
      if (c) s += `<rect x="${x - cw / 2 + 4}" y="${y - 15}" width="${cw - 8}" height="26" rx="6" fill="${FILL[c]}" stroke="${COL[c]}" stroke-width="1.8"/>`;
      s += o.notation ? txt(x, y + 4, `C(${n},${r})`, { size: 11.5, color: c ?? "ink", bold: !!c }) : txt(x, y + 4, C(n, r), { size: C(n, r) > 999 ? 11 : 13.5, color: c ?? "ink", bold: !!c });
    }
    if (o.sums) s += txt(W - 36, 26 + n * rh, `= ${2 ** n}`, { size: 12, color: "violet" });
  }
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ street grids */
/** gridSvg(w, h, { path: "RRUURU", blocked: [[x1,y1,x2,y2]] (removed edges), mark: [[x,y,label]], counts: true }) */
export function gridSvg(w, h, o = {}) {
  const u = o.u ?? (Math.max(w, h) > 6 ? 38 : 50), L = 30, T = 24, W = L + w * u + 46, H = T + h * u + 34;
  const X = (x) => L + x * u, Y = (y) => T + (h - y) * u;
  const blocked = new Set((o.blocked ?? []).map((e) => e.join(",")));
  let s = "";
  for (let y = 0; y <= h; y++) for (let x = 0; x < w; x++) { const b = blocked.has([x, y, x + 1, y].join(",")); s += `<line x1="${X(x)}" y1="${Y(y)}" x2="${X(x + 1)}" y2="${Y(y)}" stroke="${b ? "#fecaca" : "#94a3b8"}" stroke-width="${b ? 2 : 2.2}"${b ? ` stroke-dasharray="4 4"` : ""}/>`; }
  for (let x = 0; x <= w; x++) for (let y = 0; y < h; y++) { const b = blocked.has([x, y, x, y + 1].join(",")); s += `<line x1="${X(x)}" y1="${Y(y)}" x2="${X(x)}" y2="${Y(y + 1)}" stroke="${b ? "#fecaca" : "#94a3b8"}" stroke-width="${b ? 2 : 2.2}"${b ? ` stroke-dasharray="4 4"` : ""}/>`; }
  for (const e of o.blocked ?? []) s += txt((X(e[0]) + X(e[2])) / 2, (Y(e[1]) + Y(e[3])) / 2 + 5, "✕", { size: 15, color: "red" });
  if (o.path) { let x = 0, y = 0, pts = [`${X(0)},${Y(0)}`]; for (const ch of o.path) { if (ch === "R") x++; else y++; pts.push(`${X(x)},${Y(y)}`); } s += `<polyline points="${pts.join(" ")}" fill="none" stroke="${COL.violet}" stroke-width="4" stroke-linejoin="round"/>`; }
  if (o.counts) {
    const cnt = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
    for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) {
      if (!x && !y) { cnt[x][y] = 1; continue; }
      const fromL = x > 0 && !blocked.has([x - 1, y, x, y].join(",")) ? cnt[x - 1][y] : 0, fromD = y > 0 && !blocked.has([x, y - 1, x, y].join(",")) ? cnt[x][y - 1] : 0;
      cnt[x][y] = fromL + fromD;
    }
    for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) s += `<circle cx="${X(x)}" cy="${Y(y)}" r="10.5" fill="#fff" stroke="${COL.blue}" stroke-width="1.4"/>` + txt(X(x), Y(y) + 4, cnt[x][y], { size: cnt[x][y] > 99 ? 8.5 : 11, color: "blue" });
  }
  s += (o.counts ? "" : `<circle cx="${X(0)}" cy="${Y(0)}" r="7" fill="${COL.green}"/>`) + txt(X(0) - 4, Y(0) + 26, o.start ?? "A", { size: 14, color: "green" });
  s += (o.counts ? "" : `<circle cx="${X(w)}" cy="${Y(h)}" r="7" fill="${COL.red}"/>`) + txt(X(w) + 20, Y(h) - 10, o.end ?? "B", { size: 14, color: "red" });
  for (const [x, y, lab] of o.mark ?? []) s += `<circle cx="${X(x)}" cy="${Y(y)}" r="7" fill="${COL.amber}"/>` + txt(X(x) + 12, Y(y) - 9, lab, { size: 13, color: "amber", halo: true });
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ bar charts / histograms */
/**
 * barsSvg(values, { labels: x labels, xlabel, ylabel, top: value labels on bars (true | array), color, hl: [indexes], ymax,
 *                   histogram: true (touching bars), fmt: v => text })
 */
export function barsSvg(vals, o = {}) {
  const n = vals.length, bw = o.bw ?? Math.max(18, Math.min(52, 360 / n)), gapw = o.histogram ? 0 : Math.round(bw * 0.35);
  const L = 52, B = 44, T = 16, plotW = n * (bw + gapw) + gapw, W = L + plotW + 20, Hp = o.h ?? 190, H = T + Hp + B;
  const hi = o.ymax ?? Math.max(...vals) * 1.15, nice = [0.01, 0.02, 0.025, 0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000, 10000].find((st) => hi / st <= 6) ?? 20000;
  const Y = (v) => T + Hp - (v / hi) * Hp, fmt = o.fmt ?? ((v) => String(Math.round(v * 10000) / 10000));
  let s = "";
  for (let v = 0; v <= hi + 1e-9; v += nice) s += `<line x1="${L}" y1="${Y(v)}" x2="${L + plotW}" y2="${Y(v)}" stroke="#eef2f7"/>` + txt(L - 6, Y(v) + 4, fmt(Math.round(v / nice) * nice), { size: 11, anchor: "end", color: "gray", bold: false });
  vals.forEach((v, i) => {
    const x = L + gapw + i * (bw + gapw), c = o.hl?.includes(i) ? "red" : o.color ?? "blue";
    s += `<rect x="${x}" y="${Y(v)}" width="${bw}" height="${Y(0) - Y(v)}" fill="${FILL[c]}" stroke="${COL[c]}" stroke-width="1.6"/>`;
    if (o.top) s += txt(x + bw / 2, Y(v) - 5, Array.isArray(o.top) ? o.top[i] : fmt(v), { size: 10.5, color: c });
    if (o.labels) s += txt(x + bw / 2, T + Hp + 16, o.labels[i], { size: 11, color: "ink", bold: false });
  });
  s += `<line x1="${L}" y1="${Y(0)}" x2="${L + plotW}" y2="${Y(0)}" stroke="${COL.ink}" stroke-width="1.5"/><line x1="${L}" y1="${T}" x2="${L}" y2="${Y(0)}" stroke="${COL.ink}" stroke-width="1.5"/>`;
  if (o.xlabel) s += txt(L + plotW / 2, H - 8, o.xlabel, { size: 12 });
  if (o.ylabel) s += `<text x="14" y="${T + Hp / 2}" font-size="12" font-weight="700" text-anchor="middle" fill="${COL.ink}" transform="rotate(-90 14 ${T + Hp / 2})">${esc(o.ylabel)}</text>`;
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ simple panels */
/** a labelled set of objects (e.g. a bag of marbles / a committee pool): groups = [[count, color, label]] */
export function poolSvg(groups, o = {}) {
  const per = o.per ?? 10, r = 11, all = groups.flatMap(([k, c, l]) => Array.from({ length: k }, () => [c, l]));
  const rows = Math.ceil(all.length / per), W = 30 + per * 28 + 10, H = 24 + rows * 28 + 30;
  let s = "";
  all.forEach(([c], i) => { const x = 30 + (i % per) * 28, y = 24 + Math.floor(i / per) * 28; s += `<circle cx="${x}" cy="${y}" r="${r}" fill="${FILL[c]}" stroke="${COL[c]}" stroke-width="2"/>`; });
  let lx = 20; for (const [k, c, l] of groups) { const t = `${k} ${l}`; s += `<circle cx="${lx + 6}" cy="${H - 14}" r="6" fill="${COL[c]}"/>` + txt(lx + 16, H - 9, t, { size: 12, anchor: "start", color: c }); lx += 26 + t.length * 7.2; }
  return doc(Math.max(W, lx + 10), H, s);
}

/** factorial growth / any sequence of (label, value) as a horizontal bar list */
export function hbarsSvg(rows, o = {}) {
  const W = 460, rh = 26, H = 16 + rows.length * rh + 8, max = Math.max(...rows.map((r) => (o.log ? Math.log10(r[1] + 1) : r[1])));
  let s = "";
  rows.forEach(([lab, v], i) => {
    const y = 14 + i * rh, len = ((o.log ? Math.log10(v + 1) : v) / max) * 260, c = o.hl?.includes(i) ? "red" : o.color ?? "violet";
    s += txt(70, y + 14, lab, { size: 12.5, anchor: "end" }) + `<rect x="78" y="${y}" width="${Math.max(2, len)}" height="${rh - 8}" rx="3" fill="${FILL[c]}" stroke="${COL[c]}"/>` + txt(84 + Math.max(2, len), y + 14, o.fmt ? o.fmt(v) : v.toLocaleString("en-US"), { size: 12, anchor: "start", color: c });
  });
  return doc(W, H, s);
}

/** a small table as SVG: rows of cells, first row bold header */
export function tableSvg(rows, o = {}) {
  const cw = o.cw ?? rows[0].map((_, j) => Math.max(...rows.map((r) => String(r[j]).length)) * 8.4 + 22), rh = 28, W = cw.reduce((a, b) => a + b, 0) + 2, H = rows.length * rh + 2;
  let s = "";
  rows.forEach((r, i) => { let x = 1; r.forEach((c, j) => { s += `<rect x="${x}" y="${1 + i * rh}" width="${cw[j]}" height="${rh}" fill="${i === 0 ? "#e2e8f0" : o.hl?.some(([a, b]) => a === i && b === j) ? FILL.amber : "#fff"}" stroke="#94a3b8"/>` + txt(x + cw[j] / 2, 1 + i * rh + 19, c, { size: 12.5, bold: i === 0 || j === 0 && o.rowHead }); x += cw[j]; }); });
  return doc(W, H, s);
}

/* ------------------------------------------------------------------ probability panels */
/** diceGridSvg((a, b) => boolean, { faces: 6, label: (a, b) => text }) — the sample space of two dice, event cells shaded */
export function diceGridSvg(pred = () => false, o = {}) {
  const f = o.faces ?? 6, u = o.u ?? 38, L = 44, T = 30, W = L + f * u + 12, H = T + f * u + 10;
  let s = txt(L + (f * u) / 2, 14, o.colTitle ?? "second die", { size: 12, color: "red" }) + `<text x="14" y="${T + (f * u) / 2}" font-size="12" font-weight="700" text-anchor="middle" fill="${COL.blue}" transform="rotate(-90 14 ${T + (f * u) / 2})">${esc(o.rowTitle ?? "first die")}</text>`;
  for (let b = 1; b <= f; b++) s += txt(L + (b - 0.5) * u, T - 5, b, { size: 12, color: "red" });
  for (let a = 1; a <= f; a++) {
    s += txt(L - 8, T + (a - 0.5) * u + 4, a, { size: 12, color: "blue", anchor: "end" });
    for (let b = 1; b <= f; b++) {
      const on = pred(a, b), lab = o.label ? o.label(a, b) : `${a},${b}`;
      s += `<rect x="${L + (b - 1) * u + 2}" y="${T + (a - 1) * u + 2}" width="${u - 4}" height="${u - 4}" rx="5" fill="${on ? FILL.green : "#fff"}" stroke="${on ? COL.green : "#cbd5e1"}" stroke-width="${on ? 2 : 1}"/>` + txt(L + (b - 0.5) * u, T + (a - 0.5) * u + 4, lab, { size: 11, color: on ? "green" : "gray", bold: on });
    }
  }
  return doc(W, H, s);
}
/** spinnerSvg([[label, fraction, color], ...]) — a spinner divided into sectors (fractions add to 1) */
export function spinnerSvg(sectors, o = {}) {
  const R = o.r ?? 80, cx = R + 20, cy = R + 20, W = 2 * R + 40, H = 2 * R + 40;
  let s = "", a0 = -Math.PI / 2;
  for (const [lab, fr, col] of sectors) {
    const a1 = a0 + fr * 2 * Math.PI, large = fr > 0.5 ? 1 : 0, mid = (a0 + a1) / 2;
    s += `<path d="M${cx},${cy} L${cx + R * Math.cos(a0)},${cy + R * Math.sin(a0)} A${R},${R} 0 ${large} 1 ${cx + R * Math.cos(a1)},${cy + R * Math.sin(a1)} Z" fill="${FILL[col] ?? FILL.gray}" stroke="${COL[col] ?? COL.gray}" stroke-width="2"/>`;
    s += txt(cx + R * 0.6 * Math.cos(mid), cy + R * 0.6 * Math.sin(mid) + 5, lab, { size: 14, color: col });
    a0 = a1;
  }
  s += `<line x1="${cx}" y1="${cy}" x2="${cx + R * 0.55 * Math.cos(o.arrow ?? 0.6)}" y2="${cy + R * 0.55 * Math.sin(o.arrow ?? 0.6)}" stroke="${COL.ink}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="6" fill="${COL.ink}"/>`;
  return doc(W, H, s);
}
/** lineSvg(values, { p: reference line, xlabel, ylabel, xs }) — a running relative frequency (0..1) as a line chart */
export function lineSvg(vals, o = {}) {
  const W = 460, H = 220, L = 46, T = 14, R = 14, B = 34, w = W - L - R, h = H - T - B, n = vals.length;
  const X = (i) => L + (n === 1 ? w / 2 : (i / (n - 1)) * w), Y = (v) => T + h - (v / (o.ymax ?? 1)) * h;
  let s = `<rect x="${L}" y="${T}" width="${w}" height="${h}" fill="#fff" stroke="#cbd5e1"/>`;
  const nt = o.nt ?? 4; for (let k = 0; k <= nt; k++) { const v = ((o.ymax ?? 1) * k) / nt; s += `<line x1="${L}" y1="${Y(v)}" x2="${L + w}" y2="${Y(v)}" stroke="#eef2f7"/>` + txt(L - 6, Y(v) + 4, Math.round(v * 100) / 100, { size: 11, anchor: "end", color: "gray", bold: false }); }
  if (o.p !== undefined) s += `<line x1="${L}" y1="${Y(o.p)}" x2="${L + w}" y2="${Y(o.p)}" stroke="${COL.red}" stroke-width="2" stroke-dasharray="7 5"/>` + txt(L + w - 4, Y(o.p) - 6, o.pLabel ?? `theoretical ${Math.round(o.p * 1000) / 1000}`, { size: 11, anchor: "end", color: "red", halo: true });
  s += `<polyline points="${vals.map((v, i) => `${X(i)},${Y(v)}`).join(" ")}" fill="none" stroke="${COL.violet}" stroke-width="2.4"/>` + vals.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="3.5" fill="${COL.violet}"/>`).join("");
  (o.xs ?? vals.map((_, i) => i + 1)).forEach((x, i) => { if (n <= 12 || i % Math.ceil(n / 10) === 0) s += txt(X(i), T + h + 15, x, { size: 10.5, color: "gray", bold: false }); });
  if (o.xlabel) s += txt(L + w / 2, H - 4, o.xlabel, { size: 12 });
  if (o.ylabel) s += `<text x="13" y="${T + h / 2}" font-size="12" font-weight="700" text-anchor="middle" fill="${COL.ink}" transform="rotate(-90 13 ${T + h / 2})">${esc(o.ylabel)}</text>`;
  return doc(W, H, s);
}
