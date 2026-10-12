// Toolkit for MPM2D 4.1 "Introducing Quadratic Relations": difference tables (HTML + LaTeX), graph views, SVG graph images.
// Every table is computed from a function, so the differences shown can never disagree with the y-values.

export const poly = (a, b, c) => (x) => a * x * x + b * x + c;
export const round6 = (v) => Math.round(v * 1e6) / 1e6;
export const diffs = (arr) => arr.slice(1).map((v, i) => round6(v - arr[i]));
const fmt = (n) => { const s = String(round6(n)); return s.startsWith("-") ? "−" + s.slice(1) : s; };
const fmtSigned = (n) => (n > 0 ? "+" + fmt(n) : fmt(n));
const allEqual = (a) => a.length > 0 && a.every((v) => Math.abs(v - a[0]) < 1e-9);

/** Classify a table: returns {d1, d2, kind: "linear"|"quadratic"|"neither"}. */
export function classify(ys) {
  const d1 = diffs(ys), d2 = diffs(d1);
  const kind = allEqual(d1) ? "linear" : allEqual(d2) ? "quadratic" : "neither";
  return { d1, d2, kind };
}

// ───────── HTML difference table (lesson) ─────────
/** opts: {xs, ys, name='y', verdict=true, hideFrom (index to blank y), caption, mark: indices to highlight} */
export function diffTableHtml({ xs, ys, name = "y", verdict = true, caption = "", mark = [], blankY = [] }) {
  const n = xs.length, { d1, d2, kind } = classify(ys);
  const th = "padding:6px 10px;font-weight:800;text-align:left;white-space:nowrap;";
  const cell = (txt, bg, fg, extra = "") => `<td colspan="2" style="padding:5px 6px;text-align:center;background:${bg};color:${fg};font-weight:700;border-radius:6px;${extra}">${txt}</td>`;
  const gap = (span) => `<td colspan="${span}"></td>`;
  const hx = xs.map((x) => cell(fmt(x), "#14653b", "#fff")).join("");
  const hy = ys.map((y, i) => cell(blankY.includes(i) ? "?" : fmt(y), mark.includes(i) ? "#fde68a" : "#f1f5f9", "#0f172a", mark.includes(i) ? "border:2px solid #b45309;" : "")).join("");
  const r1 = gap(1) + d1.map((d) => cell(`<span style="font-size:11px;opacity:.7">↘</span> ${fmtSigned(d)}`, "#e6f3ff", "#1e40af")).join("") + gap(1);
  const r2 = gap(2) + d2.map((d) => cell(fmtSigned(d), "#fff7cc", "#92400e")).join("") + gap(2);
  const label = (txt, color) => `<th style="${th}color:${color};">${txt}</th>`;
  const hxStep = xs.length > 1 ? round6(xs[1] - xs[0]) : 1;
  const ok = kind === "quadratic", lin = kind === "linear";
  const banner = !verdict ? "" : `<div style="margin-top:8px;padding:8px 12px;border-radius:10px;font-weight:700;font-size:14px;${ok ? "background:#dcfce7;color:#14532d;border:1px solid #86efac;" : lin ? "background:#e0f2fe;color:#0c4a6e;border:1px solid #7dd3fc;" : "background:#fee2e2;color:#7f1d1d;border:1px solid #fca5a5;"}">${ok ? `✓ Second differences are constant (${fmt(d2[0])}) → quadratic` : lin ? `First differences are constant (${fmt(d1[0])}) → linear, not quadratic` : `✗ Neither the first nor the second differences are constant → not quadratic`}</div>`;
  return `<div style="overflow-x:auto;margin:12px 0;">${caption ? `<div style="font-size:13px;font-weight:700;color:#475569;margin-bottom:4px;">${caption}</div>` : ""}<table style="border-collapse:separate;border-spacing:4px 4px;font-size:15px;min-width:${60 + n * 64}px;"><tbody>
    <tr>${label(`x <span style="font-weight:500;font-size:11px;opacity:.8">(step ${fmt(hxStep)})</span>`, "#14653b")}${hx}</tr>
    <tr>${label(name, "#0f172a")}${hy}</tr>
    <tr>${label("1st differences", "#1e40af")}${r1}</tr>
    <tr>${label("2nd differences", "#92400e")}${r2}</tr>
  </tbody></table>${banner}</div>`;
}

/** Compact side-by-side cards for comparing several tables. items: [{title, xs, ys}] */
export function compareCards(items) {
  return `<div style="margin:12px 0;">${items.map((it) => diffTableHtml({ xs: it.xs, ys: it.ys, caption: it.title })).join("")}</div>`;
}

// ───────── LaTeX difference table (worksheet) ─────────
/** Colour-coded difference table for the worksheet. blank: leave the difference boxes empty for students; blankY: indices whose y-value is hidden. */
export function diffTableTex({ xs, ys, name = "y", blank = false, blankY = [] }) {
  const n = xs.length, { d1, d2 } = classify(ys), cols = 2 * n, W = 0.62;
  const spec = "r|" + `>{\\centering\\arraybackslash}p{${W}cm}`.repeat(cols);
  const tx = (v) => `$${fmt(v).replace("−", "-")}$`;
  const sg = (d) => `$${(d >= 0 ? "+" + fmt(d) : fmt(d)).replace("−", "-")}$`;
  const box = (content, bg, fg) => `\\multicolumn{2}{c}{\\colorbox{${bg}}{\\makebox[${(2 * W - 0.12).toFixed(2)}cm]{\\strut ${fg ? `\\textcolor{${fg}}{${content}}` : content}}}}`;
  const empty = () => `\\multicolumn{2}{c}{\\fbox{\\makebox[${(2 * W - 0.3).toFixed(2)}cm]{\\strut}}}`;
  const rowX = `$x$ & ${xs.map((x) => box(`\\color{white}\\bfseries ${tx(x)}`, "iagreen")).join(" & ")} \\\\[2pt]`;
  const rowY = `$${name}$ & ${ys.map((y, i) => (blankY.includes(i) ? empty() : box(tx(y), "keybg"))).join(" & ")} \\\\[2pt]`;
  const c1 = d1.map((d) => (blank ? empty() : box(sg(d), "exbg", "exblue")));
  const row1 = `\\textcolor{exblue}{\\scriptsize 1st diff} & & ${c1.join(" & ")} & \\\\[2pt]`;
  const c2 = d2.map((d) => (blank ? empty() : box(sg(d), "qbg", "qorange!70!black")));
  const row2 = `\\textcolor{qorange}{\\scriptsize 2nd diff} & & & ${c2.join(" & ")} & & \\\\`;
  return `\\begin{center}\\renewcommand{\\arraystretch}{1.15}\\setlength{\\tabcolsep}{2pt}\\begin{tabular}{${spec}}
${rowX}
${rowY}
${row1}
${row2}
\\end{tabular}\\end{center}`;
}

// ───────── graph views ─────────
/** gframe view options that fit [xmin,xmax]×[ymin,ymax] into the visible part of the embedded graph (calibrated in the browser). */
export function gview(xmin, xmax, ymin, ymax) {
  const W = 700, H = 300; // usable css px in the 340px-high embed
  const dx = xmax - xmin, dy = ymax - ymin;
  xmin -= dx * 0.06; xmax += dx * 0.06; ymin -= dy * 0.08; ymax += dy * 0.24; // headroom for the graph title and labels
  const zoom = Math.max(8, Math.min(120, W / (xmax - xmin)));
  const zoomY = Math.max(8, Math.min(120, H / (ymax - ymin)));
  const xc = (xmin + xmax) / 2, yc = (ymin + ymax) / 2;
  return { zoom: Math.round(zoom), zoomY: Math.round(zoomY), ox: Math.round(-xc * zoom), oy: Math.round(yc * zoomY - 90) };
}

// ───────── SVG graph image for bank questions ─────────
/** fn: x => y. points: [{x,y,label?,color?,hollow?}]. Returns an SVG string (400×300). */
export function graphSvg({ fn, xmin, xmax, ymin, ymax, points = [], curveColor = "#2563a0", extraCurves = [], title = "", domain }) {
  const W = 420, H = 320, L = 38, R = 14, T = 26, B = 28;
  const X = (x) => L + ((x - xmin) / (xmax - xmin)) * (W - L - R);
  const Y = (y) => T + (1 - (y - ymin) / (ymax - ymin)) * (H - T - B);
  const stepFor = (span) => (span <= 10 ? 1 : span <= 20 ? 2 : span <= 50 ? 5 : 10);
  const sx = stepFor(xmax - xmin), sy = stepFor(ymax - ymin);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Inter,Arial,sans-serif"><rect width="${W}" height="${H}" fill="#ffffff"/>`;
  if (title) s += `<text x="${W / 2}" y="16" font-size="12" font-weight="700" text-anchor="middle" fill="#334155">${title}</text>`;
  for (let x = Math.ceil(xmin / sx) * sx; x <= xmax; x += sx) s += `<line x1="${X(x)}" y1="${T}" x2="${X(x)}" y2="${H - B}" stroke="#e2e8f0" stroke-width="1"/><text x="${X(x)}" y="${H - B + 14}" font-size="10" text-anchor="middle" fill="#64748b">${x}</text>`;
  for (let y = Math.ceil(ymin / sy) * sy; y <= ymax; y += sy) s += `<line x1="${L}" y1="${Y(y)}" x2="${W - R}" y2="${Y(y)}" stroke="#e2e8f0" stroke-width="1"/><text x="${L - 5}" y="${Y(y) + 3}" font-size="10" text-anchor="end" fill="#64748b">${y}</text>`;
  if (xmin <= 0 && xmax >= 0) s += `<line x1="${X(0)}" y1="${T}" x2="${X(0)}" y2="${H - B}" stroke="#334155" stroke-width="1.6"/>`;
  if (ymin <= 0 && ymax >= 0) s += `<line x1="${L}" y1="${Y(0)}" x2="${W - R}" y2="${Y(0)}" stroke="#334155" stroke-width="1.6"/>`;
  const curve = (f, color, dom) => {
    const [d0, d1] = dom ?? [xmin, xmax]; const pts = [];
    for (let i = 0; i <= 400; i++) { const x = d0 + ((d1 - d0) * i) / 400; const y = f(x); if (y >= ymin && y <= ymax) pts.push(`${X(x).toFixed(1)},${Y(y).toFixed(1)}`); }
    return `<polyline points="${pts.join(" ")}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linejoin="round"/>`;
  };
  if (fn) s += curve(fn, curveColor, domain);
  for (const c of extraCurves) s += curve(c.fn, c.color ?? "#be123c", c.domain);
  for (const p of points) {
    const col = p.color ?? "#15803d";
    s += `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="4.6" fill="${p.hollow ? "#fff" : col}" stroke="${col}" stroke-width="2"/>`;
    if (p.label) s += `<text x="${X(p.x) + (p.dx ?? 7)}" y="${Y(p.y) + (p.dy ?? -7)}" font-size="11" font-weight="700" fill="${col}">${p.label}</text>`;
  }
  s += `<text x="${W - R - 2}" y="${Y(0) - 5}" font-size="11" font-style="italic" text-anchor="end" fill="#334155">x</text><text x="${X(0) + 6}" y="${T + 8}" font-size="11" font-style="italic" fill="#334155">y</text></svg>`;
  return s;
}
