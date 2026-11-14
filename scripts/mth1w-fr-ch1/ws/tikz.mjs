// MTH1W-FR — TikZ figure builders for the chapter 1 worksheets. Re-exports the English helpers
// (../../mth1w-ch1/v2/ws/tikz.mjs); the three that draw built-in English words are redefined here in French
// with the same drawing: numberSets (set names), percentBar ("whole"), mapScale ("cm on the map", "Scale").
export * from "../../mth1w-ch1/v2/ws/tikz.mjs";

const center = (body, caption) => String.raw`\begin{center}${body}${caption ? String.raw`\\[-2pt]{\footnotesize\itshape ${caption}}` : ""}\end{center}`;

/** Nested number-set diagram; marks place items in the innermost set: [{set:"N"|"W"|"Z"|"Q"|"I", label}] */
export function numberSets(marks = [], caption) {
  const by = (k) => marks.filter((m) => m.set === k).map((m) => m.label);
  const col = (items, x, yTop) => items.map((l, i) => String.raw`\node[font=\small] at (${x},${(yTop - i * 0.75).toFixed(2)}) {${l}};`).join("");
  const row = (items, x0, y) => items.map((l, i) => String.raw`\node[font=\small] at (${(x0 + i * 0.85).toFixed(2)},${y}) {${l}};`).join("");
  return center(String.raw`\begin{tikzpicture}[font=\small,scale=0.92]
\draw[rounded corners,thick,black!70] (0,0) rectangle (14,6.5); \node[anchor=north west,font=\bfseries] at (0.1,6.45) {Nombres réels $\mathbb{R}$};
\draw[rounded corners,thick,violet!80!black,fill=violet!5] (0.3,0.3) rectangle (9.6,5.85); \node[anchor=north west,violet!80!black,font=\bfseries] at (0.4,5.8) {Rationnels $\mathbb{Q}$};
\draw[rounded corners,thick,blue!70!black,fill=blue!5] (0.6,0.6) rectangle (7.9,4.95); \node[anchor=north west,blue!70!black,font=\bfseries] at (0.7,4.9) {Entiers $\mathbb{Z}$};
\draw[rounded corners,thick,green!50!black,fill=green!6] (0.9,0.9) rectangle (6.1,4.05); \node[anchor=north west,green!50!black,font=\bfseries] at (1.0,4.0) {Entiers non négatifs $\mathbb{W}$};
\draw[rounded corners,thick,orange!85!black,fill=orange!8] (1.2,1.2) rectangle (4.75,3.15); \node[anchor=north west,orange!85!black,font=\bfseries] at (1.3,3.1) {Naturels $\mathbb{N}$};
\draw[rounded corners,thick,red!75!black,fill=red!5] (9.9,0.3) rectangle (13.7,5.85); \node[anchor=north west,red!75!black,font=\bfseries] at (10.0,5.8) {Irrationnels};
${row(by("N"), 1.7, 1.75)}${col(by("W"), 5.4, 3.3)}${col(by("Z"), 7.0, 4.2)}${col(by("Q"), 8.75, 5.1)}${col(by("I"), 11.8, 4.9)}
\end{tikzpicture}`, caption);
}

/** Percent bar: whole bar 0..100%, shaded part pct, labels for amounts. */
export function percentBar(whole, pct, { unitLabel = "", caption, extra } = {}) {
  const W = 11, P = +((pct / 100) * W).toFixed(3);
  let s = String.raw`\begin{tikzpicture}`;
  s += String.raw`\draw[thick,blue!70!black,fill=blue!8] (0,0) rectangle (${W},0.7);\fill[orange!35] (0,0) rectangle (${Math.min(P, W)},0.7);\draw[thick,orange!85!black] (0,0) rectangle (${Math.min(P, W)},0.7);`;
  for (let i = 0; i <= 10; i++) s += String.raw`\draw (${(i * W) / 10},-0.08) -- (${(i * W) / 10},0.08);\node[below,font=\tiny] at (${(i * W) / 10},-0.08) {${i * 10}\%};`;
  s += String.raw`\node[above,font=\scriptsize] at (${W / 2},0.75) {tout $=${whole}$${unitLabel}};`;
  if (extra) s += extra;
  return center(s + String.raw`\end{tikzpicture}`, caption);
}

/** Simple scale-drawing/map figure: two points joined with a measured segment. */
export function mapScale({ cm, scaleText, from = "A", to = "B", caption }) {
  return center(String.raw`\begin{tikzpicture}\draw[black!30,fill=green!4] (-0.5,-0.8) rectangle (${cm + 0.5},1);\fill (0,0) circle (2pt) node[above] {${from}};\fill (${cm},0) circle (2pt) node[above] {${to}};
\draw[<->,thick,blue!70!black] (0,-0.35) -- (${cm},-0.35) node[midway,below,font=\scriptsize] {${cm} cm sur la carte};
\node[anchor=south east,font=\scriptsize] at (${cm + 0.45},0.45) {Échelle ${scaleText}};\end{tikzpicture}`, caption);
}
