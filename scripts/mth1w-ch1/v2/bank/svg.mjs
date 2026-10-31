// Standalone SVG figures for bank questions and assignments (uploaded to the public graph-images bucket).
// Every function returns a complete <svg> document string with a white background.
const FONT = `font-family="Arial, Helvetica, sans-serif"`;
const C = { blue: "#1e40af", red: "#be123c", green: "#15803d", amber: "#b45309", gray: "#475569", violet: "#6d28d9", ink: "#0f172a" };
const soft = { blue: "#dbeafe", red: "#ffe4e6", green: "#dcfce7", amber: "#fef3c7", gray: "#f1f5f9", violet: "#ede9fe" };
const doc = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ${FONT}><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
const fmt = (v) => (v < 0 ? `−${+(-v).toFixed(3)}` : `${+v.toFixed(3)}`);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Number line: ticks every `step`, labels every `labelEvery` ticks (or custom labels), dots [{at,label,color}], arrows [{from,to,label,color,lane}] */
export function numberLine({ min, max, step = 1, labelEvery = 1, labels, dots = [], arrows = [], width = 560, letters = [] }) {
  const lanes = Math.max(0, ...arrows.map((a) => (a.lane ?? 0) + 1));
  const axisY = 40 + lanes * 30, H = axisY + 44, X = (v) => 30 + ((v - min) / (max - min)) * (width - 60);
  let s = `<line x1="14" y1="${axisY}" x2="${width - 14}" y2="${axisY}" stroke="${C.ink}" stroke-width="2"/>`;
  s += `<path d="M14,${axisY} l9,-5 v10z M${width - 14},${axisY} l-9,-5 v10z" fill="${C.ink}"/>`;
  const n = Math.round((max - min) / step);
  for (let k = 0; k <= n; k++) {
    const v = min + k * step, x = X(v);
    s += `<line x1="${x}" y1="${axisY - 6}" x2="${x}" y2="${axisY + 6}" stroke="${C.ink}" stroke-width="${Math.abs(v) < 1e-9 ? 2.4 : 1.2}"/>`;
    const lab = labels ? labels[k] : k % labelEvery === 0 ? fmt(v) : "";
    if (lab) s += `<text x="${x}" y="${axisY + 22}" font-size="13" text-anchor="middle" fill="${C.ink}">${esc(lab)}</text>`;
  }
  arrows.forEach((a) => {
    const y = axisY - 18 - (a.lane ?? 0) * 30, c = C[a.color ?? "blue"], x1 = X(a.from), x2 = X(a.to), dir = x2 > x1 ? -1 : 1;
    s += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${c}" stroke-width="2.4"/><path d="M${x2},${y} l${dir * 8},-5 v10z" fill="${c}"/><line x1="${x1}" y1="${y}" x2="${x1}" y2="${axisY}" stroke="${c}" stroke-dasharray="3 3"/>`;
    if (a.label) s += `<text x="${(x1 + x2) / 2}" y="${y - 6}" font-size="13" font-weight="700" text-anchor="middle" fill="${c}">${esc(a.label)}</text>`;
  });
  dots.forEach((d) => { const c = C[d.color ?? "red"]; s += `<circle cx="${X(d.at)}" cy="${axisY}" r="6" fill="${c}" stroke="#fff" stroke-width="1.5"/>` + (d.label ? `<text x="${X(d.at)}" y="${axisY - 12}" font-size="14" font-weight="700" text-anchor="middle" fill="${c}">${esc(d.label)}</text>` : ""); });
  letters.forEach((d) => { s += `<line x1="${X(d.at)}" y1="${axisY - 22}" x2="${X(d.at)}" y2="${axisY - 4}" stroke="${C.violet}" stroke-width="2"/><text x="${X(d.at)}" y="${axisY - 27}" font-size="15" font-weight="700" text-anchor="middle" fill="${C.violet}">${esc(d.label)}</text>`; });
  return doc(width, H, s);
}

/** Zero-pair chips. */
export function chips(pos, neg) {
  const g = 32, n = Math.max(pos, neg), W = n * g + 30, pairs = Math.min(pos, neg);
  let s = "";
  for (let i = 0; i < pairs; i++) s += `<rect x="${15 + i * g - 1}" y="8" width="${g - 2}" height="72" rx="8" fill="none" stroke="#94a3b8" stroke-dasharray="4 3"/>`;
  const chip = (cx, cy, p) => `<circle cx="${cx}" cy="${cy}" r="12" fill="${p ? "#fde68a" : "#fecdd3"}" stroke="${p ? C.amber : C.red}" stroke-width="1.6"/><text x="${cx}" y="${cy + 5}" font-size="16" font-weight="800" text-anchor="middle" fill="${p ? C.amber : C.red}">${p ? "+" : "−"}</text>`;
  for (let i = 0; i < pos; i++) s += chip(30 + i * g, 26, true);
  for (let i = 0; i < neg; i++) s += chip(30 + i * g, 62, false);
  return doc(W, 90, s);
}

/** Stacked fraction bars: rows [{n,d,label,color}] */
export function bars(rows, width = 420) {
  const H = rows.length * 46 + 14;
  let s = "";
  rows.forEach((r, k) => {
    const y = 10 + k * 46, w = width / r.d, c = C[r.color ?? "blue"];
    for (let i = 0; i < r.d; i++) s += `<rect x="${110 + i * w}" y="${y}" width="${w}" height="32" fill="${i < r.n ? soft[r.color ?? "blue"] : "#fff"}" stroke="${c}" stroke-width="1.5"/>`;
    s += `<text x="100" y="${y + 22}" font-size="15" font-weight="700" text-anchor="end" fill="${c}">${esc(r.label ?? "")}</text>`;
  });
  return doc(width + 130, H, s);
}

/** Area model grid: b columns, d rows; a columns blue, c rows amber, overlap green. */
export function areaModel(a, b, c, d) {
  const cw = Math.min(56, 360 / b), ch = Math.min(44, 260 / d);
  let s = "";
  for (let i = 0; i < b; i++) for (let j = 0; j < d; j++) {
    const A = i < a, B = j < c;
    s += `<rect x="${20 + i * cw}" y="${20 + j * ch}" width="${cw}" height="${ch}" fill="${A && B ? "#86efac" : A ? soft.blue : B ? soft.amber : "#fff"}" stroke="#475569" stroke-width="1.3"/>`;
  }
  return doc(b * cw + 40, d * ch + 40, s);
}

/** Tape diagram: segs [{n,label,color}], optional total label underneath. */
export function tape(segs, { unit = 40, total } = {}) {
  const N = segs.reduce((t, g) => t + g.n, 0), W = N * unit + 40, H = total ? 104 : 84;
  let s = "", x = 20;
  segs.forEach((g) => {
    const x0 = x, c = C[g.color ?? "blue"];
    for (let i = 0; i < g.n; i++) { s += `<rect x="${x}" y="34" width="${unit}" height="34" fill="${soft[g.color ?? "blue"]}" stroke="${c}" stroke-width="1.5"/>`; x += unit; }
    if (g.label) s += `<text x="${(x0 + x) / 2}" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="${c}">${esc(g.label)}</text>`;
  });
  if (total) s += `<path d="M20,78 v8 H${x} v-8" fill="none" stroke="${C.ink}"/><text x="${(20 + x) / 2}" y="100" font-size="14" text-anchor="middle" fill="${C.ink}">${esc(total)}</text>`;
  return doc(W, H, s);
}

/** Bar chart of [label, value] allowing negatives. */
export function barChart(items, { ylabel = "", min, max, step } = {}) {
  const vals = items.map((i) => i[1]);
  const lo = min ?? Math.min(0, ...vals), hi = max ?? Math.max(0, ...vals), st = step ?? Math.ceil((hi - lo) / 6);
  const W = 120 + items.length * 70, H = 280, Y = (v) => 240 - ((v - lo) / (hi - lo)) * 210;
  let s = "";
  for (let v = Math.ceil(lo / st) * st; v <= hi; v += st) s += `<line x1="60" y1="${Y(v)}" x2="${W - 20}" y2="${Y(v)}" stroke="#e2e8f0"/><text x="54" y="${Y(v) + 4}" font-size="12" text-anchor="end" fill="${C.gray}">${fmt(v)}</text>`;
  s += `<line x1="60" y1="${Y(0)}" x2="${W - 20}" y2="${Y(0)}" stroke="${C.ink}" stroke-width="1.6"/>`;
  items.forEach(([l, v], i) => {
    const x = 80 + i * 70, y = Math.min(Y(0), Y(v)), h = Math.abs(Y(v) - Y(0));
    s += `<rect x="${x}" y="${y}" width="40" height="${h}" fill="${v < 0 ? soft.red : soft.blue}" stroke="${v < 0 ? C.red : C.blue}" stroke-width="1.5"/>`;
    s += `<text x="${x + 20}" y="${v < 0 ? y + h + 15 : y - 6}" font-size="12" font-weight="700" text-anchor="middle" fill="${C.ink}">${fmt(v)}</text>`;
    s += `<text x="${x + 20}" y="268" font-size="13" text-anchor="middle" fill="${C.ink}">${esc(l)}</text>`;
  });
  if (ylabel) s += `<text x="14" y="20" font-size="12" fill="${C.gray}">${esc(ylabel)}</text>`;
  return doc(W, H, s);
}

/** Line/point graph. series: [{pts:[[x,y]], color, join}] */
export function graph({ series, xmin, xmax, ymin, ymax, xstep = 1, ystep = 1, xlabel = "x", ylabel = "y", width = 460, height = 320 }) {
  const L = 56, R = width - 24, T = 20, B = height - 44;
  const X = (x) => L + ((x - xmin) / (xmax - xmin)) * (R - L), Y = (y) => B - ((y - ymin) / (ymax - ymin)) * (B - T);
  let s = "";
  for (let x = xmin; x <= xmax + 1e-9; x += xstep) s += `<line x1="${X(x)}" y1="${T}" x2="${X(x)}" y2="${B}" stroke="#eef2f7"/><text x="${X(x)}" y="${B + 16}" font-size="12" text-anchor="middle" fill="${C.gray}">${fmt(x)}</text>`;
  for (let y = ymin; y <= ymax + 1e-9; y += ystep) s += `<line x1="${L}" y1="${Y(y)}" x2="${R}" y2="${Y(y)}" stroke="#eef2f7"/><text x="${L - 6}" y="${Y(y) + 4}" font-size="12" text-anchor="end" fill="${C.gray}">${fmt(y)}</text>`;
  s += `<line x1="${L}" y1="${Y(Math.max(ymin, Math.min(ymax, 0)))}" x2="${R}" y2="${Y(Math.max(ymin, Math.min(ymax, 0)))}" stroke="${C.ink}" stroke-width="1.5"/><line x1="${X(Math.max(xmin, Math.min(xmax, 0)))}" y1="${T}" x2="${X(Math.max(xmin, Math.min(xmax, 0)))}" y2="${B}" stroke="${C.ink}" stroke-width="1.5"/>`;
  series.forEach((sr) => {
    const c = C[sr.color ?? "violet"];
    if (sr.join !== false) s += `<polyline points="${sr.pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}" fill="none" stroke="${c}" stroke-width="2.2"/>`;
    sr.pts.forEach(([x, y]) => (s += `<circle cx="${X(x)}" cy="${Y(y)}" r="4" fill="${c}"/>`));
    if (sr.label) { const [lx, ly] = sr.pts[sr.pts.length - 1]; s += `<text x="${X(lx) + 6}" y="${Y(ly) - 6}" font-size="13" font-weight="700" fill="${c}">${esc(sr.label)}</text>`; }
  });
  s += `<text x="${(L + R) / 2}" y="${height - 6}" font-size="13" text-anchor="middle" fill="${C.ink}">${esc(xlabel)}</text><text x="14" y="${T - 4}" font-size="13" fill="${C.ink}">${esc(ylabel)}</text>`;
  return doc(width, height, s);
}

/** Thermometer with marked readings. */
export function thermometer({ lo, hi, step = 5, marks = [] }) {
  const H = 300, Y = (v) => 260 - ((v - lo) / (hi - lo)) * 230;
  let s = `<rect x="150" y="${Y(hi) - 8}" width="22" height="${Y(lo) - Y(hi) + 16}" rx="11" fill="#fff" stroke="${C.ink}" stroke-width="2"/><circle cx="161" cy="${Y(lo) + 20}" r="16" fill="#f87171" stroke="${C.ink}" stroke-width="2"/>`;
  for (let v = lo; v <= hi; v += step) s += `<line x1="172" y1="${Y(v)}" x2="182" y2="${Y(v)}" stroke="${C.ink}"/><text x="186" y="${Y(v) + 4}" font-size="12" fill="${C.ink}">${fmt(v)}</text>`;
  marks.forEach((m) => { const c = C[m.color ?? "red"]; s += `<line x1="70" y1="${Y(m.at)}" x2="146" y2="${Y(m.at)}" stroke="${c}" stroke-width="2.2"/><path d="M146,${Y(m.at)} l-8,-5 v10z" fill="${c}"/><text x="66" y="${Y(m.at) + 4}" font-size="13" font-weight="700" text-anchor="end" fill="${c}">${esc(m.label)}</text>`; });
  return doc(260, H + 20, s);
}

/** Nested number-set diagram with labelled points A, B, C... at chosen regions. */
export function setsDiagram(points = []) {
  const box = (x, y, w, h, c, t) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${soft[c] ?? "#fff"}" stroke="${C[c] ?? C.ink}" stroke-width="2"/><text x="${x + 10}" y="${y + 20}" font-size="14" font-weight="700" fill="${C[c] ?? C.ink}">${t}</text>`;
  let s = box(6, 6, 588, 248, "gray", "Real numbers") + box(20, 34, 380, 210, "violet", "Rational") + box(34, 62, 310, 172, "blue", "Integers") + box(48, 90, 240, 134, "green", "Whole") + box(62, 118, 170, 96, "amber", "Natural") + box(414, 34, 166, 210, "red", "Irrational");
  const spot = { N: [140, 170], W: [260, 160], Z: [316, 150], Q: [372, 150], I: [497, 150] };
  points.forEach((p, i) => { const [x, y] = spot[p.set]; const yy = y + (p.dy ?? 0); s += `<circle cx="${x}" cy="${yy}" r="13" fill="#fff" stroke="${C.ink}" stroke-width="1.6"/><text x="${x}" y="${yy + 5}" font-size="14" font-weight="800" text-anchor="middle">${esc(p.label)}</text>`; });
  return doc(600, 260, s);
}

/** Double number line a:b for 0..k (labels top/bottom). */
export function doubleLine(a, b, k, { top = "", bottom = "", blank } = {}) {
  const W = 560, X = (i) => 30 + (i / k) * 460;
  let s = `<line x1="20" y1="40" x2="510" y2="40" stroke="${C.amber}" stroke-width="2"/><line x1="20" y1="100" x2="510" y2="100" stroke="${C.blue}" stroke-width="2"/><text x="516" y="44" font-size="13" fill="${C.amber}">${esc(top)}</text><text x="516" y="104" font-size="13" fill="${C.blue}">${esc(bottom)}</text>`;
  for (let i = 0; i <= k; i++) {
    const bt = blank?.top === i ? "?" : fmt(a * i), bb = blank?.bottom === i ? "?" : fmt(b * i);
    s += `<line x1="${X(i)}" y1="33" x2="${X(i)}" y2="47" stroke="${C.amber}" stroke-width="1.6"/><text x="${X(i)}" y="26" font-size="13" text-anchor="middle" fill="${C.ink}">${bt}</text>`;
    s += `<line x1="${X(i)}" y1="93" x2="${X(i)}" y2="107" stroke="${C.blue}" stroke-width="1.6"/><text x="${X(i)}" y="124" font-size="13" text-anchor="middle" fill="${C.ink}">${bb}</text>`;
  }
  return doc(W + 40, 136, s);
}

/** Percent bar with optional shaded percent and labels. */
export function percentBar({ pct, leftLabel = "", rightLabel = "" }) {
  const W = 520;
  let s = `<rect x="20" y="30" width="${W - 40}" height="40" fill="${soft.blue}" stroke="${C.blue}" stroke-width="1.6"/><rect x="20" y="30" width="${((W - 40) * pct) / 100}" height="40" fill="${soft.amber}" stroke="${C.amber}" stroke-width="2"/>`;
  for (let i = 0; i <= 10; i++) s += `<line x1="${20 + (i * (W - 40)) / 10}" y1="70" x2="${20 + (i * (W - 40)) / 10}" y2="78" stroke="${C.ink}"/><text x="${20 + (i * (W - 40)) / 10}" y="92" font-size="11" text-anchor="middle" fill="${C.gray}">${i * 10}%</text>`;
  s += `<text x="24" y="22" font-size="13" font-weight="700" fill="${C.amber}">${esc(leftLabel)}</text><text x="${W - 24}" y="22" font-size="13" font-weight="700" text-anchor="end" fill="${C.blue}">${esc(rightLabel)}</text>`;
  return doc(W, 100, s);
}

/** A quotient written out as factors: columns [{sym, top, bottom}], one per variable. Pairs that cancel are crossed out. */
export function quotientTiles(columns) {
  const u = 34, gap = 16;
  const row = (sym, n, crossed, x, y, col, bg) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const tx = x + i * u;
      s += `<rect x="${tx + 2}" y="${y}" width="${u - 4}" height="30" rx="5" fill="${i < crossed ? "#f1f5f9" : bg}" stroke="${i < crossed ? "#94a3b8" : col}" stroke-width="1.6"/><text x="${tx + u / 2}" y="${y + 21}" font-size="18" font-style="italic" font-family="Georgia, serif" text-anchor="middle" fill="${i < crossed ? "#94a3b8" : col}">${sym}</text>`;
      if (i < crossed) s += `<line x1="${tx + 5}" y1="${y + 27}" x2="${tx + u - 5}" y2="${y + 3}" stroke="${C.red}" stroke-width="2.2"/>`;
    }
    return s;
  };
  let s = "", x = 14;
  const palette = [[C.blue, soft.blue], [C.amber, soft.amber], [C.green, soft.green]];
  columns.forEach((c, k) => {
    const n = Math.max(c.top, c.bottom), crossed = Math.min(c.top, c.bottom), [col, bg] = palette[k % 3];
    s += row(c.sym, c.top, crossed, x, 12, col, bg) + row(c.sym, c.bottom, crossed, x, 62, col, bg);
    x += n * u + gap;
  });
  s += `<line x1="8" y1="53" x2="${x - gap + 6}" y2="53" stroke="${C.ink}" stroke-width="2.4"/>`;
  return doc(x - gap + 14, 104, s);
}

/** A cube drawn in perspective with its edge labelled. */
export function cube(edge) {
  const a = 110, d = 42, X = 40, Y = 60;
  const face = (pts, fill) => `<polygon points="${pts}" fill="${fill}" stroke="${C.blue}" stroke-width="2"/>`;
  const s = face(`${X},${Y} ${X + a},${Y} ${X + a},${Y + a} ${X},${Y + a}`, soft.blue)
    + face(`${X},${Y} ${X + d},${Y - d} ${X + a + d},${Y - d} ${X + a},${Y}`, "#eff6ff")
    + face(`${X + a},${Y} ${X + a + d},${Y - d} ${X + a + d},${Y + a - d} ${X + a},${Y + a}`, "#bfdbfe")
    + `<text x="${X + a / 2}" y="${Y + a + 24}" font-size="15" font-weight="700" text-anchor="middle" fill="${C.ink}">${esc(edge)}</text>`;
  return doc(X + a + d + 30, Y + a + 36, s);
}

/** A rectangle with its two side lengths labelled. */
export function rectangle(w, h) {
  const s = `<rect x="80" y="20" width="240" height="120" fill="${soft.green}" stroke="${C.green}" stroke-width="2.2"/>`
    + `<text x="200" y="164" font-size="17" font-weight="700" font-style="italic" text-anchor="middle" fill="${C.ink}">${esc(w)}</text>`
    + `<text x="70" y="85" font-size="17" font-weight="700" font-style="italic" text-anchor="end" fill="${C.ink}">${esc(h)}</text>`;
  return doc(350, 176, s);
}

/** Factor tiles: groups [{n, sym}] drawn as boxed groups of letter tiles. */
export function tiles(groups) {
  let s = "", x = 16;
  groups.forEach((g, gi) => {
    const x0 = x, col = gi % 2 ? C.amber : C.blue, bg = gi % 2 ? soft.amber : soft.blue;
    for (let i = 0; i < g.n; i++) { s += `<rect x="${x + 4}" y="20" width="36" height="36" rx="6" fill="${bg}" stroke="${col}" stroke-width="1.8"/><text x="${x + 22}" y="45" font-size="20" font-style="italic" font-family="Georgia, serif" text-anchor="middle" fill="${col}">${g.sym}</text>`; x += 42; }
    s += `<rect x="${x0}" y="12" width="${x - x0 + 2}" height="52" rx="9" fill="none" stroke="#94a3b8" stroke-dasharray="4 3"/>`;
    x += 18;
  });
  return doc(x, 76, s);
}
