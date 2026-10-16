// TikZ figure builders for the chapter 2 (algebra) teacher worksheets. Re-exports the chapter 1 set.
export * from "../../mth1w-ch1/v2/ws/tikz.mjs";

const center = (body, caption) => String.raw`\begin{center}${body}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
const tikz = (body) => String.raw`\begin{tikzpicture}${body}\end{tikzpicture}`;

/** Algebra tiles. rows: [{ label, x2, x, c }] signed counts; struck: [{row, kind, n}] zero pairs crossed out. */
export function tiles(rows, caption, struck = []) {
  let s = "";
  rows.forEach((r, ri) => {
    const y0 = -ri * 1.45;
    let x = r.label ? 1.8 : 0;
    if (r.label) s += String.raw`\node[anchor=west,font=\small\bfseries] at (0,${y0 + 0.5}) {${r.label}};`;
    for (const [k, w, h] of [["x2", 1, 1], ["x", 0.32, 1], ["c", 0.32, 0.32]]) {
      const n = r[k] ?? 0, neg = n < 0;
      const cut = struck.filter((z) => z.row === ri && z.kind === k).reduce((a, z) => a + z.n, 0);
      for (let i = 0; i < Math.abs(n); i++) {
        const col = neg ? "red!75!black" : k === "x2" ? "blue!70!black" : k === "x" ? "green!50!black" : "orange!85!black";
        const fill = neg ? "red!12" : k === "x2" ? "blue!12" : k === "x" ? "green!14" : "orange!18";
        s += String.raw`\filldraw[draw=${col},fill=${fill},thick${i < cut ? ",opacity=0.4" : ""}] (${x.toFixed(2)},${y0}) rectangle (${(x + w).toFixed(2)},${y0 + h});`;
        if (k === "x2") s += String.raw`\node[font=\scriptsize,${col}] at (${(x + 0.5).toFixed(2)},${y0 + 0.5}) {$${neg ? "-" : ""}x^2$};`;
        if (i < cut) s += String.raw`\draw[thick] (${(x - 0.05).toFixed(2)},${y0 - 0.05}) -- (${(x + w + 0.05).toFixed(2)},${y0 + h + 0.05});`;
        x += w + 0.12;
      }
      if (Math.abs(n)) x += 0.25;
    }
  });
  return center(tikz(s), caption);
}

/** Area model: row label(s) on the left, column labels on top, cell contents (math). Negative cells shaded red. */
export function area(left, tops, cells, caption, rowsLeft = null) {
  const lefts = rowsLeft ?? [left], W = 2.3, H = 1.1;
  let s = "";
  tops.forEach((t, i) => (s += String.raw`\node[font=\small\bfseries,blue!70!black] at (${i * W + W / 2},0.3) {$${t}$};`));
  lefts.forEach((lb, r) => {
    s += String.raw`\node[font=\small\bfseries,violet!80!black,anchor=east] at (-0.15,${-r * H - H / 2}) {$${lb}$};`;
    tops.forEach((_, i) => {
      const c = (rowsLeft ? cells[r] : cells)[i];
      s += String.raw`\filldraw[fill=${/^-/.test(c) ? "red!10" : "green!10"},draw=black] (${i * W},${-r * H}) rectangle (${(i + 1) * W},${-(r + 1) * H});\node at (${i * W + W / 2},${-r * H - H / 2}) {$${c}$};`;
    });
  });
  return center(tikz(s), caption);
}

/** Balance scale with math on each pan. */
export function balance(l, r, caption) {
  return center(tikz(String.raw`\fill[black!35] (0,0) -- (-0.35,-0.6) -- (0.35,-0.6) -- cycle;\draw[very thick,black!60] (0,0) -- (0,1.5);
\draw[very thick,black!60] (-3,1.5) -- (3,1.5);\draw[black!40] (-2.3,1.5) -- (-3.4,0.75);\draw[black!40] (-2.3,1.5) -- (-1.2,0.75);\draw[black!40] (2.3,1.5) -- (1.2,0.75);\draw[black!40] (2.3,1.5) -- (3.4,0.75);
\filldraw[fill=blue!10,draw=blue!70!black] (-3.4,0.75) -- (-1.2,0.75) -- (-1.5,0.45) -- (-3.1,0.45) -- cycle;
\filldraw[fill=green!10,draw=green!50!black] (1.2,0.75) -- (3.4,0.75) -- (3.1,0.45) -- (1.5,0.45) -- cycle;
\node[above,font=\bfseries,blue!70!black,fill=white,inner sep=1.5pt] at (-2.3,0.8) {$${l}$};\node[above,font=\bfseries,green!50!black,fill=white,inner sep=1.5pt] at (2.3,0.8) {$${r}$};`), caption);
}

/** Graph of y = m x + b (pgfplots) with optional horizontal target y = c and its intersection. */
export function lineT({ m, b, c = null, xmin = 0, xmax, ymin = 0, ymax, xlabel = "$x$", ylabel = "$y$", xtick, ytick, width = 9, height = 5.6 }, caption) {
  const xs = c === null ? null : (c - b) / m;
  return center(String.raw`\begin{tikzpicture}\begin{axis}[width=${width}cm,height=${height}cm,axis lines=left,grid=both,grid style={gray!18},xmin=${xmin},xmax=${xmax},ymin=${ymin},ymax=${ymax},xlabel={\scriptsize ${xlabel}},ylabel={\scriptsize ${ylabel}},tick label style={font=\tiny}${xtick ? `,xtick={${xtick}}` : ""}${ytick ? `,ytick={${ytick}}` : ""}]
\addplot[blue!70!black,very thick,domain=${xmin}:${xmax},samples=2] {${m}*x+${b}};
${c !== null ? String.raw`\addplot[red!75!black,thick,dashed,domain=${xmin}:${xmax},samples=2] {${c}};` : ""}
${xs !== null && xs >= xmin && xs <= xmax ? String.raw`\addplot[green!50!black,thick,densely dotted] coordinates {(${xs},${c}) (${xs},${ymin})};\addplot[only marks,mark=*,mark size=2.6pt,green!50!black] coordinates {(${xs},${c})};` : ""}
\end{axis}\end{tikzpicture}`, caption);
}

/** Rectangle with side labels (math), optional inner rectangle (frame). Units in cm of paper. */
export function rectT(wl, hl, caption, { w = 5, h = 2.4, inner = null, fill = "blue!8" } = {}) {
  let s = String.raw`\filldraw[fill=${fill},draw=blue!70!black,thick] (0,0) rectangle (${w},${h});`;
  if (inner) s += String.raw`\filldraw[fill=white,draw=blue!70!black] (${inner},${inner}) rectangle (${w - inner},${h - inner});`;
  s += String.raw`\node[below] at (${w / 2},0) {$${wl}$};\node[left] at (0,${h / 2}) {$${hl}$};`;
  return center(tikz(s), caption);
}

/** Polygon with math side labels; pts in cm. labels[i] labels side i → i+1 (empty string = none). */
export function polyT(pts, labels, caption, { fill = "green!10", draw = "green!50!black" } = {}) {
  const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
  let s = String.raw`\filldraw[fill=${fill},draw=${draw},thick] ${pts.map((p) => `(${p[0]},${p[1]})`).join(" -- ")} -- cycle;`;
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length];
    if (!labels[i]) return;
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, d = Math.hypot(mx - cx, my - cy) || 1;
    s += String.raw`\node[font=\small] at (${(mx + ((mx - cx) / d) * 0.45).toFixed(2)},${(my + ((my - cy) / d) * 0.35).toFixed(2)}) {$${labels[i]}$};`;
  });
  return center(tikz(s), caption);
}

/** Angles on a straight line, split into labelled sectors (not to scale). */
export function angleLine(labels, caption) {
  const n = labels.length, R = 2.6;
  let s = String.raw`\draw[thick] (-3.2,0) -- (3.2,0);`;
  for (let i = 1; i < n; i++) { const t = 180 - (180 * i) / n; s += String.raw`\draw[thick] (0,0) -- (${t}:${R});`; }
  labels.forEach((lb, i) => { const t = 180 - (180 * (i + 0.5)) / n; s += String.raw`\node[font=\small,violet!80!black] at (${t}:1.45) {$${lb}$};`; });
  return center(tikz(s), caption);
}

/** Growing tile pattern: figures 1..count, figure k has a·k + b tiles. */
export function patternT(a, b, caption, count = 3) {
  let s = "", x0 = 0;
  for (let k = 1; k <= count; k++) {
    for (let i = 0; i < b; i++) s += String.raw`\filldraw[fill=orange!18,draw=orange!85!black] (${x0},${i * 0.42}) rectangle (${x0 + 0.38},${i * 0.42 + 0.38});`;
    for (let c = 0; c < k; c++) for (let r = 0; r < a; r++) { const x = x0 + (c + (b ? 1 : 0)) * 0.42; s += String.raw`\filldraw[fill=blue!12,draw=blue!70!black] (${x.toFixed(2)},${r * 0.42}) rectangle (${(x + 0.38).toFixed(2)},${r * 0.42 + 0.38});`; }
    s += String.raw`\node[below,font=\scriptsize] at (${x0 + 0.5},-0.05) {Figure ${k}};`;
    x0 += Math.max((k + (b ? 1 : 0)) * 0.42, 1.4) + 0.9;
  }
  return center(tikz(s), caption);
}

/** Operation flow chart (math labels): start → ops → end, optional reverse row. */
export function flowT(start, ops, end, caption, reverse = null) {
  const row = (items, y, mid, id) => items.map((t, i) => String.raw`\node[draw=${i === 0 || i === items.length - 1 ? "violet!80!black" : mid},fill=${i === 0 || i === items.length - 1 ? "violet!8" : mid + "!8"},rounded corners,minimum height=0.7cm,inner sep=4pt] (${id}${i}) at (${i * 2.1},${y}) {$${t}$};`).join("") + items.slice(1).map((_, i) => String.raw`\draw[->,thick] (${id}${i}) -- (${id}${i + 1});`).join("");
  return center(tikz(row([start, ...ops, end], 0, "blue", "f") + (reverse ? row(reverse, -1.1, "green", "r") : "")), caption);
}
