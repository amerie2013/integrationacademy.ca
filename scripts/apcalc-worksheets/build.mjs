// Builds the AP Calculus AB worksheets (.tex) from the content modules in
// ./content. Every worksheet has the same parts: key ideas, three worked
// examples, practice at two levels, one free-response style question, and
// fully worked solutions on their own page. All problems are original and are
// different from the ones in the matching lesson.
//   node scripts/apcalc-worksheets/build.mjs            # every unit module
//   node scripts/apcalc-worksheets/build.mjs u1         # one unit
// Then compile and publish with scripts/apcalc-worksheet-publish.mjs.
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const DIR = path.dirname(fileURLToPath(import.meta.url));
const only = process.argv[2];

const items = (arr, work) => arr.map((q) => `  \\item ${q}${work ? `\\work{${work}}` : ""}`).join("\n");

function worksheet(w) {
  const n1 = w.core.length, n2 = w.exam.length;
  const frLabel = n1 + n2 + 1;
  return String.raw`\documentclass[11pt]{article}
\input{_preamble}
\fancyhead[R]{\footnotesize\color{black!60}Worksheet ${w.code}}
\begin{document}

\wstitle{${w.code}}{${w.title}}{${w.unit}}

\begin{ideabox}
\begin{itemize}[leftmargin=*,itemsep=2pt,topsep=2pt]
${w.ideas.map((i) => `  \\item ${i}`).join("\n")}
\end{itemize}
\end{ideabox}

\sech{Worked examples}
${w.examples.map((e, i) => String.raw`\begin{example}{Example ${i + 1} \textperiodcentered{} ${e.t}}
${e.q}\soln ${e.s}\result{${e.r}}
\end{example}`).join("\n\n")}

\newpage
\sech{Practice}
${w.pre ?? ""}
\level{Core}
\begin{enumerate}[leftmargin=*,itemsep=2pt]
${items(w.core, w.space?.core ?? "2.3cm")}
\end{enumerate}

\level{Exam level}
\begin{enumerate}[leftmargin=*,itemsep=2pt,start=${n1 + 1}]
${items(w.exam, w.space?.exam ?? "2.8cm")}
\end{enumerate}

\begin{frbox}{Question ${frLabel} \textperiodcentered{} Free-response practice}
${w.fr.intro}
\begin{enumerate}[label=(\alph*),leftmargin=*,itemsep=2pt]
${items(w.fr.parts, w.space?.fr ?? "2.6cm")}
\end{enumerate}
\end{frbox}

\newpage
\begin{solbox}
\begin{enumerate}[leftmargin=*,itemsep=4pt]
${items([...w.sol.core, ...w.sol.exam])}
  \item \begin{enumerate}[label=(\alph*),leftmargin=*,itemsep=3pt]
${w.sol.fr.map((s) => `    \\item ${s}`).join("\n")}
  \end{enumerate}
\end{enumerate}
\end{solbox}

\end{document}
`;
}

let n = 0;
for (const f of fs.readdirSync(path.join(DIR, "content")).filter((x) => x.endsWith(".mjs") && (!only || x === `${only}.mjs`))) {
  const mod = await import(pathToFileURL(path.join(DIR, "content", f)).href);
  for (const w of mod.default) {
    if (w.sol.core.length !== w.core.length || w.sol.exam.length !== w.exam.length || w.sol.fr.length !== w.fr.parts.length) throw new Error(`${w.code}: solutions do not match questions`);
    fs.writeFileSync(path.join(DIR, `${w.code}.tex`), worksheet(w));
    n++;
  }
  // free-standing documents (free-response sets and their scoring guides)
  for (const d of mod.documents ?? []) { fs.writeFileSync(path.join(DIR, `${d.file}.tex`), d.tex); n++; }
}
console.log(`Wrote ${n} .tex file(s) to ${path.relative(process.cwd(), DIR)}`);
