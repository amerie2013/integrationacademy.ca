// Python listings for the chapter 3 LaTeX worksheets, and outputs computed by running the code.
import { runAll } from "../../../lib/miniPython.ts";

const ESC = {
  "\\": String.raw`\textbackslash{}`, "#": String.raw`\#`, $: String.raw`\$`, "%": String.raw`\%`, "&": String.raw`\&`, _: String.raw`\_`,
  "{": String.raw`\{`, "}": String.raw`\}`, "^": String.raw`\^{}`, "~": String.raw`\~{}`, "'": String.raw`\textquotesingle{}`,
  '"': String.raw`\textquotedbl{}`, " ": "~", "<": String.raw`\textless{}`, ">": String.raw`\textgreater{}`,
};
const escLine = (l) => [...l].map((c) => ESC[c] ?? c).join("");

/** A boxed, line-numbered Python listing (one LaTeX line: no raw newlines). */
export const codeT = (code) => {
  const lines = code.replace(/^\n/, "").replace(/\n$/, "").split("\n");
  const body = lines.map((l, i) => String.raw`{\color{black!45}\makebox[1.4em][r]{${i + 1}}}\ \ ${l ? escLine(l) : String.raw`\mbox{}`}`).join(String.raw`\\`);
  return String.raw`\par\smallskip\noindent\colorbox{black!4}{\begin{minipage}{0.96\linewidth}\ttfamily\small\setlength{\baselineskip}{1.25em}${body}\end{minipage}}\par\smallskip `;
};
/** Inline code. */
export const ct = (s) => String.raw`\texttt{${escLine(s)}}`;
/** Output of a program (trailing newline removed); throws if it fails. */
export function out(code) {
  const r = runAll(code.replace(/^\n/, ""));
  if (r.error) throw new Error(`program failed (${r.error.message}):\n${code}`);
  return r.output.replace(/\n$/, "");
}
/** Output as a small boxed console. */
export const outT = (code) => String.raw`\par\noindent{\small\textit{Output:}}\ \fbox{\begin{minipage}[t]{0.6\linewidth}\ttfamily\small ${out(code).split("\n").map(escLine).join(String.raw`\\`)}\end{minipage}}\par `;
/** The error raised by a failing program. */
export function errOf(code) { const r = runAll(code.replace(/^\n/, "")); if (!r.error) throw new Error("expected an error"); return r.error; }
