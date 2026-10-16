// Static SVG figures for the chapter 2 lessons (HTML blocks). Plain SVG text (no KaTeX inside SVG).
const wrap = (svg, caption) => `<div style="text-align:center;margin:12px 0;">${svg}<div style="font-size:13px;color:#64748b;margin-top:2px;">${caption}</div></div>`;
const svgOpen = (W, H, label) => `<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${label.replace(/"/g, "'").replace(/<[^>]+>/g, "")}"><g font-family="Arial, sans-serif">`;
const svgClose = `</g></svg>`;
const COL = { x2: ["#dbeafe", "#1e40af"], x: ["#dcfce7", "#15803d"], one: ["#fef3c7", "#b45309"], neg: ["#ffe4e6", "#be123c"], y: ["#ede9fe", "#6d28d9"] };
const minus = (s) => String(s).replace(/-/g, "−");

/** Algebra tiles. rows: [{ label, x2, x, c, y? }] (signed counts). Struck: [{row, kind, n}] zero pairs to cross out. */
export function tiles(rows, caption, struck = []) {
  const H = rows.length * 62 + 8;
  let s = "", W = 0;
  rows.forEach((r, ri) => {
    const y0 = ri * 62 + 6;
    s += `<text x="6" y="${y0 + 32}" font-size="13" font-weight="700" fill="#0f172a">${r.label ?? ""}</text>`;
    let x = r.label ? 92 : 8;
    const kinds = [["x2", 40, 40, "x²"], ["y", 14, 40, "y"], ["x", 14, 40, "x"], ["c", 14, 14, ""]];
    for (const [k, w, h, t] of kinds) {
      const n = r[k] ?? 0, neg = n < 0;
      const cut = struck.filter((z) => z.row === ri && z.kind === k).reduce((a, z) => a + z.n, 0);
      for (let i = 0; i < Math.abs(n); i++) {
        const [fill, stroke] = neg ? COL.neg : k === "c" ? COL.one : COL[k];
        const y = y0 + 46 - h;
        s += `<g opacity="${i < cut ? 0.35 : 1}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
        if (t && k === "x2") s += `<text x="${x + w / 2}" y="${y + 25}" font-size="11" text-anchor="middle" fill="${stroke}">${neg ? "−" : ""}${t}</text>`;
        if (i < cut) s += `<line x1="${x - 2}" y1="${y - 2}" x2="${x + w + 2}" y2="${y0 + 48}" stroke="#0f172a" stroke-width="1.6"/>`;
        s += `</g>`;
        x += w + 5;
      }
      if (Math.abs(n)) x += 8;
    }
    W = Math.max(W, x + 6);
  });
  return wrap(svgOpen(Math.max(W, 200), H, caption) + s + svgClose, caption);
}

/** Tile legend for the start of 2.2. */
export function tileLegend(caption) {
  const items = [["x2", 40, 40, "x²"], ["x", 14, 40, "x"], ["one", 14, 14, "1"], ["neg", 14, 40, "−x"], ["neg", 14, 14, "−1"]];
  let s = "", x = 10;
  for (const [k, w, h, t] of items) {
    const [fill, stroke] = COL[k];
    s += `<rect x="${x}" y="${52 - h}" width="${w}" height="${h}" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><text x="${x + w / 2}" y="72" font-size="13" text-anchor="middle" font-weight="700" fill="${stroke}">${t}</text>`;
    x += w + 46;
  }
  return wrap(svgOpen(x, 80, caption) + s + svgClose, caption);
}

/** Area model: left label, top labels (one per column), cells (strings). Negative cells (starting with −) shaded red. */
export function area(left, tops, cells, caption, rowsLeft = null) {
  const lefts = rowsLeft ?? [left];
  const cw = Math.max(86, ...tops.map((t) => t.length * 11 + 24)), ch = 58, L = Math.max(70, ...lefts.map((t) => t.length * 11 + 20));
  const W = L + cw * tops.length + 10, H = 30 + ch * lefts.length + 8;
  let s = "";
  tops.forEach((t, i) => (s += `<text x="${L + cw * i + cw / 2}" y="20" font-size="15" text-anchor="middle" font-weight="700" fill="#1e40af">${minus(t)}</text>`));
  lefts.forEach((lb, r) => {
    s += `<text x="${L - 10}" y="${30 + ch * r + ch / 2 + 5}" font-size="15" text-anchor="end" font-weight="700" fill="#6d28d9">${minus(lb)}</text>`;
    tops.forEach((_, i) => {
      const c = (rowsLeft ? cells[r] : cells)[i];
      const neg = /^[-−]/.test(c);
      s += `<rect x="${L + cw * i}" y="${30 + ch * r}" width="${cw}" height="${ch}" fill="${neg ? "#ffe4e6" : "#dcfce7"}" stroke="#0f172a" stroke-width="1.3"/><text x="${L + cw * i + cw / 2}" y="${30 + ch * r + ch / 2 + 5}" font-size="15" text-anchor="middle" font-weight="700" fill="#0f172a">${minus(c)}</text>`;
    });
  });
  return wrap(svgOpen(W, H, caption) + s + svgClose, caption);
}

/** Balance scale with text on each pan (e.g. "3x + 5" and "20"). tilt: 0 level, ±1 tipped. */
export function balance(leftText, rightText, caption, tilt = 0) {
  const a = tilt * 7;
  const s = `<polygon points="200,170 186,140 214,140" fill="#94a3b8"/><line x1="200" y1="140" x2="200" y2="62" stroke="#475569" stroke-width="4"/>
<g transform="rotate(${a} 200 62)"><line x1="60" y1="62" x2="340" y2="62" stroke="#475569" stroke-width="4"/>
<line x1="90" y1="62" x2="90" y2="96" stroke="#94a3b8"/><line x1="310" y1="62" x2="310" y2="96" stroke="#94a3b8"/>
<path d="M 40 96 L 140 96 L 126 110 L 54 110 Z" fill="#dbeafe" stroke="#1e40af"/><path d="M 260 96 L 360 96 L 346 110 L 274 110 Z" fill="#dcfce7" stroke="#15803d"/>
<text x="90" y="88" font-size="17" text-anchor="middle" font-weight="700" fill="#1e40af">${minus(leftText)}</text><text x="310" y="88" font-size="17" text-anchor="middle" font-weight="700" fill="#15803d">${minus(rightText)}</text></g>`;
  return wrap(svgOpen(400, 178, caption) + s + svgClose, caption);
}

/** Horizontal timeline. events: [[yearLabel, title, line2]] */
export function timeline(events, caption) {
  const W = 680, step = (W - 160) / (events.length - 1);
  let s = `<line x1="20" y1="60" x2="${W - 20}" y2="60" stroke="#334155" stroke-width="2.5"/>`;
  events.forEach(([yr, t, l2], i) => {
    const x = 80 + i * step, up = i % 2 === 0;
    s += `<circle cx="${x}" cy="60" r="7" fill="#6d28d9"/><text x="${x}" y="${up ? 40 : 88}" font-size="13" text-anchor="middle" font-weight="800" fill="#6d28d9">${yr}</text>`;
    s += `<text x="${x}" y="${up ? 22 : 106}" font-size="12.5" text-anchor="middle" font-weight="700" fill="#0f172a">${t}</text>`;
    if (l2) s += `<text x="${x}" y="${up ? 8 : 121}" font-size="11.5" text-anchor="middle" fill="#475569">${l2}</text>`;
  });
  return wrap(svgOpen(W, 128, caption) + s + svgClose, caption);
}

/** Rectangle with side labels (strings). Optional inner rectangle (frame) with a label. */
export function rect(wLabel, hLabel, caption, { inner = null, w = 240, h = 120, fill = "#dbeafe" } = {}) {
  const L = Math.max(40, hLabel.length * 8.5 + 16);
  let s = `<rect x="${L}" y="20" width="${w}" height="${h}" fill="${fill}" stroke="#1e40af" stroke-width="2"/>`;
  if (inner) s += `<rect x="${L + inner.pad}" y="${20 + inner.pad}" width="${w - 2 * inner.pad}" height="${h - 2 * inner.pad}" fill="#fff" stroke="#1e40af" stroke-width="1.5"/>` + (inner.label ? `<text x="${L + w / 2}" y="${20 + h / 2 + 5}" font-size="13" text-anchor="middle" fill="#475569">${inner.label}</text>` : "");
  s += `<text x="${L + w / 2}" y="${20 + h + 22}" font-size="15" text-anchor="middle" font-weight="700" fill="#0f172a">${minus(wLabel)}</text>`;
  s += `<text x="${L - 8}" y="${20 + h / 2 + 5}" font-size="15" text-anchor="end" font-weight="700" fill="#0f172a">${minus(hLabel)}</text>`;
  return wrap(svgOpen(L + w + 10, h + 50, caption) + s + svgClose, caption);
}

/** A polygon with labelled sides: pts [[x,y]...], labels per side (same order). */
export function polygon(pts, labels, caption, { fill = "#dcfce7", stroke = "#15803d" } = {}) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const minX = Math.min(...xs) - 80, minY = Math.min(...ys) - 30, W = Math.max(...xs) - minX + 80, H = Math.max(...ys) - minY + 34;
  const cx = xs.reduce((a, b) => a + b) / xs.length, cy = ys.reduce((a, b) => a + b) / ys.length;
  let s = `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length];
    if (!labels[i]) return;
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    const dx = mx - cx, dy = my - cy, d = Math.hypot(dx, dy) || 1;
    const lx = mx + (dx / d) * 22, ly = my + (dy / d) * 18 + 5;
    s += `<text x="${lx}" y="${ly}" font-size="14" text-anchor="middle" font-weight="700" fill="#0f172a">${minus(labels[i])}</text>`;
  });
  return wrap(`<svg viewBox="${minX} ${minY} ${W} ${H}" width="${W}" style="max-width:100%;height:auto;" role="img" aria-label="${caption.replace(/<[^>]+>/g, "")}"><g font-family="Arial, sans-serif">` + s + svgClose, caption);
}

/** Angles on a straight line / around a point: labels for sectors drawn as rays from a centre. */
export function straightAngle(labels, caption) {
  const n = labels.length, cx = 200, cy = 120, R = 110;
  let s = `<line x1="${cx - R - 20}" y1="${cy}" x2="${cx + R + 20}" y2="${cy}" stroke="#0f172a" stroke-width="2"/>`;
  // equal-looking sectors (diagram not to scale)
  for (let i = 1; i < n; i++) { const t = Math.PI - (Math.PI * i) / n; s += `<line x1="${cx}" y1="${cy}" x2="${cx + R * Math.cos(t)}" y2="${cy - R * Math.sin(t)}" stroke="#0f172a" stroke-width="2"/>`; }
  labels.forEach((lb, i) => { const t = Math.PI - (Math.PI * (i + 0.5)) / n; s += `<text x="${cx + 62 * Math.cos(t)}" y="${cy - 52 * Math.sin(t) + 4}" font-size="14" text-anchor="middle" font-weight="700" fill="#6d28d9">${minus(lb)}</text>`; });
  return wrap(svgOpen(400, 140, caption) + s + svgClose, caption);
}

/** Line graph y = m x + b over [0, xMax] with an optional horizontal target line y = c and its intersection. */
export function lineGraph({ m, b, c = null, xMax, yMax, xStep, yStep, xLabel, yLabel, yMin = 0, points = [], mark = true }, caption) {
  const W = 460, H = 270, L = 54, B = 40, T = 12, R = 14;
  const X = (x) => L + (x / xMax) * (W - L - R), Y = (y) => H - B - ((y - yMin) / (yMax - yMin)) * (H - B - T);
  let s = "";
  for (let x = 0; x <= xMax + 1e-9; x += xStep) s += `<line x1="${X(x)}" y1="${Y(yMin)}" x2="${X(x)}" y2="${Y(yMax)}" stroke="#e2e8f0"/><text x="${X(x)}" y="${H - B + 15}" font-size="11" text-anchor="middle" fill="#475569">${minus(+x.toFixed(2))}</text>`;
  for (let y = yMin; y <= yMax + 1e-9; y += yStep) s += `<line x1="${X(0)}" y1="${Y(y)}" x2="${X(xMax)}" y2="${Y(y)}" stroke="#e2e8f0"/><text x="${L - 6}" y="${Y(y) + 4}" font-size="11" text-anchor="end" fill="#475569">${minus(+y.toFixed(2))}</text>`;
  s += `<line x1="${X(0)}" y1="${Y(Math.max(yMin, 0))}" x2="${X(xMax)}" y2="${Y(Math.max(yMin, 0))}" stroke="#0f172a" stroke-width="1.5"/><line x1="${X(0)}" y1="${Y(yMin)}" x2="${X(0)}" y2="${Y(yMax)}" stroke="#0f172a" stroke-width="1.5"/>`;
  s += `<text x="${(L + W) / 2}" y="${H - 6}" font-size="12" text-anchor="middle" font-weight="700" fill="#0f172a">${xLabel}</text><text x="13" y="${(H - B) / 2}" font-size="12" text-anchor="middle" font-weight="700" fill="#0f172a" transform="rotate(-90 13 ${(H - B) / 2})">${yLabel}</text>`;
  let x1 = xMax; const yEnd = m * xMax + b;
  if (yEnd > yMax) x1 = (yMax - b) / m; else if (yEnd < yMin) x1 = (yMin - b) / m;
  s += `<line x1="${X(0)}" y1="${Y(b)}" x2="${X(x1)}" y2="${Y(m * x1 + b)}" stroke="#1e40af" stroke-width="3"/>`;
  if (c !== null) {
    const xs = (c - b) / m;
    s += `<line x1="${X(0)}" y1="${Y(c)}" x2="${X(xMax)}" y2="${Y(c)}" stroke="#be123c" stroke-width="2" stroke-dasharray="6 4"/>`;
    if (mark && xs >= 0 && xs <= xMax) s += `<line x1="${X(xs)}" y1="${Y(c)}" x2="${X(xs)}" y2="${Y(Math.max(yMin, 0))}" stroke="#15803d" stroke-width="2" stroke-dasharray="3 3"/><circle cx="${X(xs)}" cy="${Y(c)}" r="5.5" fill="#15803d"/>`;
  }
  for (const [px, py] of points) s += `<circle cx="${X(px)}" cy="${Y(py)}" r="4.5" fill="#1e40af"/>`;
  return wrap(svgOpen(W, H, caption) + s + svgClose, caption);
}

/** Growing pattern of square tiles: figures 1..count with a·n + b tiles (b fixed tiles drawn on the left). */
export function pattern(a, b, caption, count = 3) {
  const S = 15;
  let s = "", x0 = 10;
  const H = Math.max(a, b, 1) * S + 32;
  for (let k = 1; k <= count; k++) {
    const cols = k + (b ? 1 : 0);
    for (let i = 0; i < b; i++) s += `<rect x="${x0}" y="${H - 24 - (i + 1) * S}" width="${S - 2}" height="${S - 2}" rx="2" fill="#fef3c7" stroke="#b45309" stroke-width="1.3"/>`;
    for (let c = 0; c < k; c++) for (let r = 0; r < a; r++) s += `<rect x="${x0 + (c + (b ? 1 : 0)) * S}" y="${H - 24 - (r + 1) * S}" width="${S - 2}" height="${S - 2}" rx="2" fill="#dbeafe" stroke="#1e40af" stroke-width="1.3"/>`;
    s += `<text x="${x0}" y="${H - 6}" font-size="12" font-weight="700" fill="#475569">Figure ${k}</text>`;
    x0 += Math.max(cols * S, 60) + 30;
  }
  return wrap(svgOpen(x0, H, caption) + s + svgClose, caption);
}

/** Flow chart of operations: start → op → op → result, and optionally the reverse row underneath. */
export function flow(start, ops, end, caption, reverse = null) {
  const box = (x, y, t, fill, stroke) => `<rect x="${x}" y="${y}" width="${Math.max(54, t.length * 8.5 + 18)}" height="32" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/><text x="${x + Math.max(54, t.length * 8.5 + 18) / 2}" y="${y + 21}" font-size="14" text-anchor="middle" font-weight="700" fill="${stroke}">${minus(t)}</text>`;
  const row = (items, y, cols) => {
    let s = "", x = 8;
    items.forEach((t, i) => {
      const w = Math.max(54, t.length * 8.5 + 18);
      s += box(x, y, t, cols[i === 0 || i === items.length - 1 ? 0 : 1][0], cols[i === 0 || i === items.length - 1 ? 0 : 1][1]);
      x += w;
      if (i < items.length - 1) { s += `<line x1="${x + 4}" y1="${y + 16}" x2="${x + 22}" y2="${y + 16}" stroke="#475569" stroke-width="2"/><path d="M${x + 22},${y + 11} L${x + 30},${y + 16} L${x + 22},${y + 21} z" fill="#475569"/>`; x += 34; }
    });
    return [s, x];
  };
  const [a, w1] = row([start, ...ops, end], 6, [["#ede9fe", "#6d28d9"], ["#dbeafe", "#1e40af"]]);
  let s = a, W = w1, H = 46;
  if (reverse) { const [b, w2] = row(reverse, 52, [["#ede9fe", "#6d28d9"], ["#dcfce7", "#15803d"]]); s += b; W = Math.max(W, w2); H = 92; }
  return wrap(svgOpen(W + 8, H, caption) + s + svgClose, caption);
}
