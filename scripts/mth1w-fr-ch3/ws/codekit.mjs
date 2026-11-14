// Listes de code Python pour les fiches LaTeX françaises du chapitre 3 : mêmes aides que ../../mth1w-ch3/ws/codekit.mjs
// (codeT, ct, out, errOf exécutent le code avec lib/miniPython), avec l'étiquette de sortie en français.
import { ct, out } from "../../mth1w-ch3/ws/codekit.mjs";
export { codeT, ct, out, errOf } from "../../mth1w-ch3/ws/codekit.mjs";

const ESC = {
  "\\": String.raw`\textbackslash{}`, "#": String.raw`\#`, $: String.raw`\$`, "%": String.raw`\%`, "&": String.raw`\&`, _: String.raw`\_`,
  "{": String.raw`\{`, "}": String.raw`\}`, "^": String.raw`\^{}`, "~": String.raw`\~{}`, "'": String.raw`\textquotesingle{}`,
  '"': String.raw`\textquotedbl{}`, " ": "~", "<": String.raw`\textless{}`, ">": String.raw`\textgreater{}`,
};
const escLine = (l) => [...l].map((c) => ESC[c] ?? c).join("");

/** Sortie affichée dans une petite console encadrée. */
export const outT = (code) => String.raw`\par\noindent{\small\textit{Sortie :}}\ \fbox{\begin{minipage}[t]{0.6\linewidth}\ttfamily\small ${out(code).split("\n").map(escLine).join(String.raw`\\`)}\end{minipage}}\par `;
/** liste des lignes affichées, chacune en code */
export const lines = (code, sep = "; ") => out(code).split("\n").map((l) => ct(l)).join(sep);
