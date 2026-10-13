// LaTeX (worksheet) helpers for the MCR3U chapter 2 rebuild: pgfplots graphs and equivalence tables.
import { fmtVal } from "./lib2.mjs";

const r = String.raw;
const NUM = (n) => (n < 0 ? `-${-n}` : `${n}`);

/** pgfplots graph. curves: [{f:"x^2+1", color, dash, dom:[a,b], samples, unbounded}]; dots: [[x,y,label?]]; holes: [[x,y]] drawn open. */
export function pgf({ curves, bounds, dots = [], holes = [], xt = 1, yt = 1, w = 8.2, h = 5.2, note = "" }) {
  const [x0, x1, y0, y1] = bounds;
  const cs = curves.map((c, i) => {
    const style = c.dash ?? i > 0 ? "dashed,thick" : "very thick";
    const color = c.color ?? (i ? "red!75!black" : "exblue");
    const dom = c.dom ?? [x0, x1];
    const clip = c.unbounded ? "" : `,restrict y to domain=${y0 - 1}:${y1 + 1}`;
    return `\\addplot[${color},${style},domain=${dom[0]}:${dom[1]},samples=${c.samples ?? 120}${clip}]{${c.f}};`;
  }).join("\n");
  const ds = dots.length
    ? `\\addplot[only marks,mark=*,mark size=2pt,green!45!black]coordinates{${dots.map(([x, y]) => `(${x},${y})`).join("")}};` +
      dots.filter((d) => d[2]).map(([x, y, l]) => `\\node[font=\\tiny,anchor=south west,green!30!black] at (axis cs:${x},${y}){$${l}$};`).join("")
    : "";
  const hs = holes.length
    ? `\\addplot[only marks,mark=o,mark size=2.6pt,very thick,red!75!black]coordinates{${holes.map(([x, y]) => `(${x},${y})`).join("")}};` +
      holes.map(([x, y]) => `\\node[font=\\tiny,anchor=south west,red!70!black] at (axis cs:${x},${y}){$(${NUM(x)},${NUM(y)})$};`).join("")
    : "";
  const cap = note ? r`\\[-2pt]{\scriptsize ${note}}` : "";
  return r`\begin{center}\begin{tikzpicture}\begin{axis}[width=${w}cm,height=${h}cm,axis lines=middle,xlabel={\scriptsize$x$},ylabel={\scriptsize$y$},grid=both,grid style={gray!16},xmin=${x0},xmax=${x1},ymin=${y0},ymax=${y1},xtick distance=${xt},ytick distance=${yt},tick label style={font=\tiny},axis line style={-}]
${cs}${ds}${hs}
\end{axis}\end{tikzpicture}${cap}\end{center}`;
}

const cell = (s) => r`\makebox[1.35cm]{\strut ${s}}`;
/** Equivalence-detector table for worksheets: rows [{tex, f}], xs; blank=true leaves the value cells empty for students. */
export function eqTableTex(rows, xs, { blank = false, check = true } = {}) {
  const spec = "l|" + "c".repeat(xs.length);
  const head = r`$x$ & ${xs.map((x) => `$${NUM(x)}$`).join(" & ")} \\ \hline`;
  const body = rows.map((row) => r`$${row.tex}$ & ${xs.map((x) => (blank ? cell("") : cell(`$${fmtVal(row.f(x)).replace("\u2212", "-")}$`))).join(" & ")} \\`).join("\n");
  const mark = (x) => { const v = rows.map((row) => row.f(x)); if (!v.every(Number.isFinite)) return "--"; return v.every((a) => Math.abs(a - v[0]) < 1e-9) ? r`$\checkmark$` : r`$\times$`; };
  const same = check ? r`\hline same? & ${xs.map((x) => cell(blank ? "" : mark(x))).join(" & ")} \\` : "";
  return r`\begin{center}\renewcommand{\arraystretch}{1.35}\setlength{\tabcolsep}{3pt}\begin{tabular}{${spec}}
${head}
${body}
${same}
\end{tabular}\end{center}`;
}
