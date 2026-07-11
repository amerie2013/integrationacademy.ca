// Generate MPM2D worksheet .tex files from a content module.
//   node scripts/mpm2d-worksheets/build.mjs scripts/mpm2d-worksheets/content/u1.mjs
// Each content module default-exports an array of worksheet objects:
//   { code, unit, title, intro?, ideas:[tex], examples:[{t,body}],
//     questions:[{ask, ws?, grid?, challenge?}], answers:[tex] }
// Examples' body is raw LaTeX (use \soln and \plot{..}{..}{..}{..}{body}).
import fs from "fs";
import path from "path";
import { LEARN } from "./lessons.mjs";

const DIR = path.resolve("scripts/mpm2d-worksheets");
const GRID = `\\begin{center}\\begin{tikzpicture}\\begin{axis}[width=8cm,height=6cm,axis lines=middle,grid=both,grid style={gray!16},xmin=-6,xmax=6,ymin=-6,ymax=6,xtick distance=2,ytick distance=2,tick label style={font=\\tiny}]\\end{axis}\\end{tikzpicture}\\end{center}`;

function render(w) {
  const ex = w.examples.map((e, i) => `\\begin{example}{ex${i % 9}}{Example ${i + 1} --- ${e.t}}\n${e.body}\n\\end{example}`).join("\n\n");
  const learn = LEARN[w.code];
  const learnTex = learn ? `\\begin{learnbox}\n${learn.map(([h, b]) => `\\lh{${h}}${b}`).join("\n")}\n\\end{learnbox}\n\n` : "";
  const q = w.questions.map((qq, i) => {
    const head = `Question ${i + 1}${qq.challenge ? " --- Challenge" : ""}`;
    const tail = qq.grid ? "\n" + GRID : `\\workspace{${qq.ws || "2.4cm"}}`;
    return `\\begin{qbox}{${head}}\n${qq.ask}${tail}\n\\end{qbox}`;
  }).join("\n\n");
  const recap = w.questions.map((qq) => `  \\item ${qq.ask}`).join("\n");
  const keys = w.answers.map((a) => `  \\item ${a}`).join("\n");
  const ideas = w.ideas.map((i) => `  \\item ${i}`).join("\n");
  return `\\documentclass[11pt]{article}
\\input{_preamble}
\\fancyhead[R]{\\footnotesize MPM2D \\textperiodcentered{} ${w.code}}
\\begin{document}

\\begin{center}
{\\LARGE\\bfseries\\color{titleblue}Worksheet ${w.code} --- ${w.title}}\\\\[2pt]
{\\small Grade 10 Academic (MPM2D) \\textperiodcentered{} Unit ${w.unit}}
\\end{center}

\\begin{ideabox}
${w.intro ? w.intro + "\n" : ""}\\begin{itemize}[leftmargin=*,itemsep=2pt]
${ideas}
\\end{itemize}
\\end{ideabox}

${learnTex}\\sech{Worked Examples}

${ex}

\\clearpage
\\sech{Your Turn --- Show Your Work}
For each question, show all steps clearly in the space provided.

${q}

\\clearpage
\\sech{Question Recap \\& Answer Key}

\\begin{recapbox}
\\begin{multicols}{2}
\\small
\\begin{enumerate}[leftmargin=*,itemsep=3pt]
${recap}
\\end{enumerate}
\\end{multicols}
\\end{recapbox}

\\begin{keybox}
\\begin{multicols}{2}
\\small
\\begin{enumerate}[leftmargin=*,itemsep=3pt]
${keys}
\\end{enumerate}
\\end{multicols}
\\end{keybox}

\\end{document}
`;
}

const arg = process.argv[2];
if (!arg) { console.error("usage: build.mjs <content-module>"); process.exit(1); }
const mod = await import("file://" + path.resolve(arg));
let n = 0;
for (const w of mod.default) {
  fs.writeFileSync(path.join(DIR, `${w.code}.tex`), render(w));
  console.log("wrote", w.code);
  n++;
}
console.log(`built ${n} worksheet(s)`);
