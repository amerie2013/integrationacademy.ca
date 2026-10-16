// TikZ figure builders for the chapter 1 teacher worksheets (compiled with Tectonic).
// Every function returns a complete, centred tikzpicture (optionally with a caption line).
const fmt = (v) => (Number.isInteger(v) ? String(v) : String(+v.toFixed(3)));
const neg = (v) => (v < 0 ? `$-${fmt(-v)}$` : `$${fmt(v)}$`);
const center = (body, caption) => String.raw`\begin{center}${body}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;
const COL = { blue: "blue!70!black", red: "red!75!black", green: "green!50!black", amber: "orange!85!black", gray: "black!60", violet: "violet!80!black" };

/** Number line. dots: [{at,label,color}], arrows: [{from,to,label,color,lane}], step: tick step, labelEvery */
export function numberLine({ min, max, step = 1, labelEvery = 1, unit, dots = [], arrows = [], caption, labels }) {
  const n = (max - min) / step;
  const u = unit ?? Math.min(1, 15 / n);
  const X = (v) => +(((v - min) / step) * u).toFixed(3);
  let s = String.raw`\begin{tikzpicture}[>=stealth]`;
  s += String.raw`\draw[thick,<->] (${X(min) - 0.3},0) -- (${X(max) + 0.3},0);`;
  for (let k = 0; k <= n; k++) {
    const v = +(min + k * step).toFixed(6);
    s += String.raw`\draw (${X(v)},-0.12) -- (${X(v)},0.12);`;
    if (k % labelEvery === 0) s += String.raw`\node[below,font=\scriptsize] at (${X(v)},-0.12) {${labels?.[k] ?? neg(v)}};`;
  }
  arrows.forEach((a) => {
    const y = 0.55 + (a.lane ?? 0) * 0.55, c = COL[a.color ?? "blue"];
    s += String.raw`\draw[->,very thick,${c}] (${X(a.from)},${y}) -- (${X(a.to)},${y});\draw[${c},densely dotted] (${X(a.from)},0) -- (${X(a.from)},${y});`;
    if (a.label) s += String.raw`\node[above,font=\scriptsize,${c}] at (${(X(a.from) + X(a.to)) / 2},${y}) {${a.label}};`;
  });
  dots.forEach((d) => {
    const c = COL[d.color ?? "red"];
    s += String.raw`\fill[${c}] (${X(d.at)},0) circle (2.6pt);`;
    if (d.label) s += String.raw`\node[above,font=\scriptsize\bfseries,${c}] at (${X(d.at)},${0.12 + (d.raise ?? 0)}) {${d.label}};`;
  });
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Zero-pair chips: pos positive and neg negative chips; pairs are boxed. */
export function chips(pos, negN, caption) {
  const pairs = Math.min(pos, negN), g = 0.78; // centimetres between chips
  let s = String.raw`\begin{tikzpicture}`;
  for (let i = 0; i < pairs; i++) s += String.raw`\draw[black!45,dashed,rounded corners] (${(i * g - 0.36).toFixed(2)},-1.12) rectangle (${(i * g + 0.36).toFixed(2)},0.36);`;
  for (let i = 0; i < pos; i++) s += String.raw`\draw[orange!80!black,fill=yellow!35] (${(i * g).toFixed(2)},0) circle (0.28cm);\node[font=\bfseries\small,orange!80!black] at (${(i * g).toFixed(2)},0) {$+$};`;
  for (let i = 0; i < negN; i++) s += String.raw`\draw[red!70!black,fill=red!15] (${(i * g).toFixed(2)},-0.76) circle (0.28cm);\node[font=\bfseries\small,red!70!black] at (${(i * g).toFixed(2)},-0.76) {$-$};`;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Fraction bar(s): n of d equal parts shaded (n may exceed d → several bars). */
export function fracBar(n, d, { width = 7, color = "blue", label, caption } = {}) {
  const bars = Math.max(1, Math.ceil(Math.abs(n) / d)), w = width / d, c = COL[color];
  let s = String.raw`\begin{tikzpicture}`;
  for (let b = 0; b < bars; b++) {
    const y = -b * 0.8;
    for (let i = 0; i < d; i++) {
      const filled = b * d + i < Math.abs(n);
      s += String.raw`\draw[${c},thick${filled ? `,fill=${c}!20` : ""}] (${(i * w).toFixed(3)},${y}) rectangle (${((i + 1) * w).toFixed(3)},${y + 0.55});`;
    }
  }
  if (label) s += String.raw`\node[left,font=\small] at (-0.1,0.27) {${label}};`;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Several labelled bars stacked, each {n,d,label,color}, all the same total width (compare / add). */
export function barStack(rows, { width = 8, caption } = {}) {
  let s = String.raw`\begin{tikzpicture}`;
  rows.forEach((r, k) => {
    const y = -k * 0.85, w = width / r.d, c = COL[r.color ?? "blue"];
    for (let i = 0; i < r.d; i++) s += String.raw`\draw[${c},thick${i < r.n ? `,fill=${c}!20` : ""}] (${(i * w).toFixed(3)},${y}) rectangle (${((i + 1) * w).toFixed(3)},${y + 0.55});`;
    s += String.raw`\node[left,font=\small] at (-0.1,${y + 0.27}) {${r.label}};`;
  });
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Area model for (a/b) x (c/d): b columns, d rows; a columns blue, c rows amber, overlap green. */
export function areaModel(a, b, c, d, caption) {
  const cw = Math.min(1, 6 / b), ch = Math.min(0.8, 4 / d);
  let s = String.raw`\begin{tikzpicture}`;
  for (let i = 0; i < b; i++) for (let j = 0; j < d; j++) {
    const inA = i < a, inC = j < c;
    const fill = inA && inC ? "green!35" : inA ? "blue!15" : inC ? "orange!20" : "white";
    s += String.raw`\draw[black!70,fill=${fill}] (${(i * cw).toFixed(3)},${(-j * ch).toFixed(3)}) rectangle (${((i + 1) * cw).toFixed(3)},${(-(j + 1) * ch).toFixed(3)});`;
  }
  s += String.raw`\draw[decorate,decoration={brace,amplitude=4pt},blue!70!black] (0,0.1) -- (${(a * cw).toFixed(3)},0.1) node[midway,above=3pt,font=\scriptsize] {$\tfrac{${a}}{${b}}$};`;
  s += String.raw`\draw[decorate,decoration={brace,amplitude=4pt,mirror},orange!85!black] (-0.1,0) -- (-0.1,${(-c * ch).toFixed(3)}) node[midway,left=3pt,font=\scriptsize] {$\tfrac{${c}}{${d}}$};`;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Tape / bar model: segs [{n,label,color}] of equal unit boxes, with a brace over each group. */
export function tape(segs, { unit = 0.7, total, caption } = {}) {
  let s = String.raw`\begin{tikzpicture}`, x = 0;
  segs.forEach((g) => {
    const c = COL[g.color ?? "blue"], x0 = x;
    for (let i = 0; i < g.n; i++) { s += String.raw`\draw[${c},thick,fill=${c}!15] (${x.toFixed(2)},0) rectangle (${(x + unit).toFixed(2)},0.6);`; x += unit; }
    if (g.label) s += String.raw`\draw[decorate,decoration={brace,amplitude=4pt},${c}] (${x0.toFixed(2)},0.7) -- (${x.toFixed(2)},0.7) node[midway,above=3pt,font=\scriptsize] {${g.label}};`;
  });
  if (total) s += String.raw`\draw[decorate,decoration={brace,amplitude=5pt,mirror}] (0,-0.1) -- (${x.toFixed(2)},-0.1) node[midway,below=4pt,font=\scriptsize] {${total}};`;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Nested number-set diagram; marks place items in the innermost set: [{set:"N"|"W"|"Z"|"Q"|"I", label}] */
export function numberSets(marks = [], caption) {
  const by = (k) => marks.filter((m) => m.set === k).map((m) => m.label);
  const col = (items, x, yTop) => items.map((l, i) => String.raw`\node[font=\small] at (${x},${(yTop - i * 0.75).toFixed(2)}) {${l}};`).join("");
  const row = (items, x0, y) => items.map((l, i) => String.raw`\node[font=\small] at (${(x0 + i * 0.85).toFixed(2)},${y}) {${l}};`).join("");
  return center(String.raw`\begin{tikzpicture}[font=\small,scale=0.92]
\draw[rounded corners,thick,black!70] (0,0) rectangle (14,6.5); \node[anchor=north west,font=\bfseries] at (0.1,6.45) {Real numbers $\mathbb{R}$};
\draw[rounded corners,thick,violet!80!black,fill=violet!5] (0.3,0.3) rectangle (9.6,5.85); \node[anchor=north west,violet!80!black,font=\bfseries] at (0.4,5.8) {Rational $\mathbb{Q}$};
\draw[rounded corners,thick,blue!70!black,fill=blue!5] (0.6,0.6) rectangle (7.9,4.95); \node[anchor=north west,blue!70!black,font=\bfseries] at (0.7,4.9) {Integers $\mathbb{Z}$};
\draw[rounded corners,thick,green!50!black,fill=green!6] (0.9,0.9) rectangle (6.1,4.05); \node[anchor=north west,green!50!black,font=\bfseries] at (1.0,4.0) {Whole $\mathbb{W}$};
\draw[rounded corners,thick,orange!85!black,fill=orange!8] (1.2,1.2) rectangle (4.75,3.15); \node[anchor=north west,orange!85!black,font=\bfseries] at (1.3,3.1) {Natural $\mathbb{N}$};
\draw[rounded corners,thick,red!75!black,fill=red!5] (9.9,0.3) rectangle (13.7,5.85); \node[anchor=north west,red!75!black,font=\bfseries] at (10.0,5.8) {Irrational};
${row(by("N"), 1.7, 1.75)}${col(by("W"), 5.4, 3.3)}${col(by("Z"), 7.0, 4.2)}${col(by("Q"), 8.75, 5.1)}${col(by("I"), 11.8, 4.9)}
\end{tikzpicture}`, caption);
}

/** Line graph of points (x,y) with optional dashed curve; xs/ys numeric arrays. */
export function pointsGraph({ pts, xmin, xmax, ymin, ymax, xlabel = "x", ylabel = "y", join = true, highlight, caption, width = 8.5, height = 5.5, xtick, ytick }) {
  const coords = pts.map(([x, y]) => `(${x},${y})`).join(" ");
  return center(String.raw`\begin{tikzpicture}\begin{axis}[width=${width}cm,height=${height}cm,axis lines=middle,grid=both,grid style={gray!18},xmin=${xmin},xmax=${xmax},ymin=${ymin},ymax=${ymax},xlabel={\scriptsize ${xlabel}},ylabel={\scriptsize ${ylabel}},tick label style={font=\tiny},${xtick ? `xtick={${xtick}},` : ""}${ytick ? `ytick={${ytick}},` : ""}every axis x label/.style={at={(ticklabel* cs:1)},anchor=north west},every axis y label/.style={at={(ticklabel* cs:1)},anchor=south}]
\addplot[${join ? "densely dashed,violet!60" : "only marks"},mark=*,mark options={fill=violet!70,draw=violet!80!black,solid},mark size=2pt] coordinates {${coords}};
${highlight ? String.raw`\addplot[only marks,mark=*,mark size=3.6pt,red!75!black] coordinates {(${highlight[0]},${highlight[1]})};` : ""}
\end{axis}\end{tikzpicture}`, caption);
}

/** Bars for a list of [label, value] (e.g. temperatures); negative values go below the axis. */
export function barChart(items, { ylabel = "", caption, ymin, ymax } = {}) {
  const sym = items.map(([l]) => l).join(",");
  const coords = items.map(([l, v]) => `(${l},${v})`).join(" ");
  return center(String.raw`\begin{tikzpicture}\begin{axis}[ybar,width=9cm,height=5.2cm,bar width=14pt,symbolic x coords={${sym}},xtick=data,ymajorgrids,grid style={gray!20},ylabel={\scriptsize ${ylabel}},tick label style={font=\scriptsize},nodes near coords,every node near coord/.append style={font=\tiny},axis x line*=middle,${ymin !== undefined ? `ymin=${ymin},` : ""}${ymax !== undefined ? `ymax=${ymax},` : ""}enlarge x limits=0.12]
\addplot[fill=blue!25,draw=blue!70!black] coordinates {${coords}};
\end{axis}\end{tikzpicture}`, caption);
}

/** Double number line for a ratio a:b scaled 0..k times. */
export function doubleLine(a, b, k, { top = "", bottom = "", mark, caption } = {}) {
  const W = 12, X = (i) => +((i / k) * W).toFixed(3);
  let s = String.raw`\begin{tikzpicture}`;
  s += String.raw`\draw[thick,orange!85!black] (0,1.2) -- (${W + 0.3},1.2) node[right,font=\scriptsize] {${top}};\draw[thick,blue!70!black] (0,0) -- (${W + 0.3},0) node[right,font=\scriptsize] {${bottom}};`;
  for (let i = 0; i <= k; i++) {
    const hl = mark === i;
    s += String.raw`\draw[orange!85!black${hl ? ",very thick" : ""}] (${X(i)},1.08) -- (${X(i)},1.32) node[above,font=\scriptsize${hl ? "\\bfseries" : ""}] {${fmt(a * i)}};`;
    s += String.raw`\draw[blue!70!black${hl ? ",very thick" : ""}] (${X(i)},-0.12) -- (${X(i)},0.12);\node[below,font=\scriptsize${hl ? "\\bfseries" : ""}] at (${X(i)},-0.12) {${fmt(b * i)}};`;
    if (hl) s += String.raw`\draw[green!50!black,densely dashed,thick] (${X(i)},1.08) -- (${X(i)},0.12);`;
  }
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Percent bar: whole bar 0..100%, shaded part pct, labels for amounts. */
export function percentBar(whole, pct, { unitLabel = "", caption, extra } = {}) {
  const W = 11, P = +((pct / 100) * W).toFixed(3);
  let s = String.raw`\begin{tikzpicture}`;
  s += String.raw`\draw[thick,blue!70!black,fill=blue!8] (0,0) rectangle (${W},0.7);\fill[orange!35] (0,0) rectangle (${Math.min(P, W)},0.7);\draw[thick,orange!85!black] (0,0) rectangle (${Math.min(P, W)},0.7);`;
  for (let i = 0; i <= 10; i++) s += String.raw`\draw (${(i * W) / 10},-0.08) -- (${(i * W) / 10},0.08);\node[below,font=\tiny] at (${(i * W) / 10},-0.08) {${i * 10}\%};`;
  s += String.raw`\node[above,font=\scriptsize] at (${W / 2},0.75) {whole $=${whole}$${unitLabel}};`;
  if (extra) s += extra;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Thermometer column from lo to hi with marked readings [{at,label,color}]. */
export function thermometer({ lo, hi, step = 5, marks = [], caption }) {
  const H = 4.2, Y = (v) => +(((v - lo) / (hi - lo)) * H).toFixed(3);
  let s = String.raw`\begin{tikzpicture}\draw[thick,rounded corners=3pt] (0,0) rectangle (0.5,${H});\fill[red!60] (0.25,-0.25) circle (0.32);`;
  for (let v = lo; v <= hi; v += step) s += String.raw`\draw (0.5,${Y(v)}) -- (0.7,${Y(v)}) node[right,font=\tiny] {${neg(v)}};`;
  s += String.raw`\draw[blue!70!black,thick] (-0.15,${Y(0)}) -- (0.65,${Y(0)});`;
  marks.forEach((m) => { const c = COL[m.color ?? "red"]; s += String.raw`\draw[${c},very thick,->] (-1.4,${Y(m.at)}) -- (-0.05,${Y(m.at)});\node[left,font=\scriptsize,${c}] at (-1.4,${Y(m.at)}) {${m.label}};`; });
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Logarithmic size scale 10^lo..10^hi with labelled objects [{p (log10), label}] */
export function logScale({ lo, hi, objects, mark, caption }) {
  const W = 15, X = (p) => +(((p - lo) / (hi - lo)) * W).toFixed(3);
  let s = String.raw`\begin{tikzpicture}\draw[thick,->] (0,0) -- (${W + 0.3},0);`;
  for (let p = lo; p <= hi; p++) s += String.raw`\draw (${X(p)},-0.08) -- (${X(p)},0.08);` + ((p - lo) % 3 === 0 ? String.raw`\node[below,font=\tiny] at (${X(p)},-0.08) {$10^{${p}}$};` : "");
  objects.forEach((o, i) => { const y = 0.55 + (i % 2) * 0.55; s += String.raw`\draw[black!50] (${X(o.p)},0) -- (${X(o.p)},${y - 0.1});\node[above,font=\tiny] at (${X(o.p)},${y - 0.1}) {${o.label}};\fill (${X(o.p)},0) circle (1.6pt);`; });
  if (mark !== undefined) s += String.raw`\fill[violet!80!black] (${X(mark)},0) circle (3pt);`;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Boxes of factor tiles, e.g. expandPower("x",[3,2]) draws (x x x)(x x). */
export function factorTiles(groups, { cancel = 0, caption } = {}) {
  let s = String.raw`\begin{tikzpicture}[x=0.75cm]`, x = 0, idx = 0;
  groups.forEach((g, gi) => {
    const x0 = x;
    for (let i = 0; i < g.n; i++) {
      const crossed = g.cancel !== undefined ? i < g.cancel : idx < cancel;
      s += String.raw`\draw[thick,${gi % 2 ? "orange!85!black,fill=orange!12" : "blue!70!black,fill=blue!10"},rounded corners=2pt] (${x + 0.08},0) rectangle (${x + 0.68},0.6);\node at (${x + 0.38},0.3) {$${g.sym}$};`;
      if (crossed) s += String.raw`\draw[red!75!black,thick] (${x + 0.12},0.04) -- (${x + 0.64},0.56);`;
      x += 0.8; idx++;
    }
    s += String.raw`\draw[black!40,dashed,rounded corners] (${x0},-0.1) rectangle (${x - 0.05},0.7);`;
    if (g.label) s += String.raw`\node[below,font=\scriptsize] at (${(x0 + x) / 2},-0.12) {${g.label}};`;
    x += 0.3;
  });
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Simple scale-drawing/map figure: two points joined with a measured segment. */
export function mapScale({ cm, scaleText, from = "A", to = "B", caption }) {
  return center(String.raw`\begin{tikzpicture}\draw[black!30,fill=green!4] (-0.5,-0.8) rectangle (${cm + 0.5},1);\fill (0,0) circle (2pt) node[above] {${from}};\fill (${cm},0) circle (2pt) node[above] {${to}};
\draw[<->,thick,blue!70!black] (0,-0.35) -- (${cm},-0.35) node[midway,below,font=\scriptsize] {${cm} cm on the map};
\node[anchor=south east,font=\scriptsize] at (${cm + 0.45},0.45) {Scale ${scaleText}};\end{tikzpicture}`, caption);
}

/** Generic wrapper so data files can drop in raw tikz. */
export const raw = (body, caption) => center(String.raw`\begin{tikzpicture}${body}\end{tikzpicture}`, caption);
