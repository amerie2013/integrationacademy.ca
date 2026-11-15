// MCR3U-FR chapitre 2 — aides LaTeX des fiches. pgf() vient tel quel de l'anglais (aucun mot n'y est dessiné ; la
// note est passée en français). eqTableTex() est une copie française (la ligne « same? » devient « identiques ? »).
import { fmtVal } from "./lib.mjs";
export { pgf } from "../mcr3u-ch2/lib2tex.mjs";

const r = String.raw;
const NUM = (n) => (n < 0 ? `-${-n}` : `${n}`);
const cell = (s) => r`\makebox[1.35cm]{\strut ${s}}`;
/** Tableau « détecteur d'équivalence » : rows [{tex, f}], xs ; blank=true laisse les cases vides pour l'élève. */
export function eqTableTex(rows, xs, { blank = false, check = true } = {}) {
  const spec = "l|" + "c".repeat(xs.length);
  const head = r`$x$ & ${xs.map((x) => `$${NUM(x)}$`).join(" & ")} \\ \hline`;
  const body = rows.map((row) => r`$${row.tex}$ & ${xs.map((x) => (blank ? cell("") : cell(`$${fmtVal(row.f(x)).replace("\u2212", "-").replace("non d\u00e9fini", r`\text{non d\u00e9fini}`)}$`))).join(" & ")} \\`).join("\n");
  const mark = (x) => { const v = rows.map((row) => row.f(x)); if (!v.every(Number.isFinite)) return "--"; return v.every((a) => Math.abs(a - v[0]) < 1e-9) ? r`$\checkmark$` : r`$\times$`; };
  const same = check ? r`\hline identiques ? & ${xs.map((x) => cell(blank ? "" : mark(x))).join(" & ")} \\` : "";
  return r`\begin{center}\renewcommand{\arraystretch}{1.35}\setlength{\tabcolsep}{3pt}\begin{tabular}{${spec}}
${head}
${body}
${same}
\end{tabular}\end{center}`;
}
