// MCR3U-FR chapitre 2 — fiches d'exercices : UN PDF par sujet (notions essentielles, 9 exemples résolus avec figures,
// 14 questions avec espace de travail, récapitulatif et corrigé). Copie française du gabarit anglais
// ../../mcr3u-worksheets/build.mjs + _preamble.tex (format des fiches LIVE 2.1–2.5) : tout le texte LaTeX est en
// français, cours = CID_FR.
//   node scripts/mcr3u-fr-ch2/ws/build.mjs 2.1 2.2        -> compile only (PDFs in ws/out/, nothing uploaded)
//   node scripts/mcr3u-fr-ch2/ws/build.mjs --all          -> compile every PDF (dry: nothing uploaded)
//   node scripts/mcr3u-fr-ch2/ws/build.mjs --all --apply  -> compile, upload to worksheets/CID_FR/<code>_worksheet.pdf, insert/update the MCR3U-FR rows
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { pathToFileURL } from "url";
import { CID_FR } from "../../mcr3u-fr/common.mjs";

const HERE = path.resolve("scripts/mcr3u-fr-ch2/ws");
const OUT = path.join(HERE, "out");
const BIN = "C:\\Users\\am778\\tools\\tectonic\\tectonic.exe";
const CID = CID_FR; // MCR3U-FR — never the English course
const APPLY = process.argv.includes("--apply");
let codes = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) codes = ["2.1", "2.2", "2.3", "2.4", "2.5"];

const PRE = String.raw`\documentclass[11pt]{article}
\usepackage[letterpaper,top=2.2cm,bottom=1.9cm,left=1.6cm,right=1.6cm,headheight=28pt,footskip=24pt]{geometry}
\usepackage{amsmath,amssymb}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage{xcolor}
\usepackage[most]{tcolorbox}
\usepackage{enumitem}
\usepackage{multicol}
\usepackage{fancyhdr}
\usepackage{tikz}
\usetikzlibrary{calc}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\definecolor{exblue}{HTML}{4A90E2}\definecolor{exbg}{HTML}{E6F3FF}\definecolor{qorange}{HTML}{E69138}\definecolor{qbg}{HTML}{FFF7CC}
\definecolor{keygray}{HTML}{475569}\definecolor{keybg}{HTML}{F1F5F9}\definecolor{iagreen}{HTML}{14653B}\definecolor{titleblue}{HTML}{1D4ED8}
\definecolor{ex0}{HTML}{2563A0}\definecolor{ex1}{HTML}{3B7D3B}\definecolor{ex2}{HTML}{8A5A00}
\definecolor{ex3}{HTML}{A3327A}\definecolor{ex4}{HTML}{6D28A3}\definecolor{ex5}{HTML}{B08900}
\definecolor{ex6}{HTML}{0E7490}\definecolor{ex7}{HTML}{9A3412}\definecolor{ex8}{HTML}{15803D}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\footnotesize NOM : \underline{\hspace{3.4cm}}}
\fancyhead[C]{\textbf{Integration Academy}\\[-2pt]{\scriptsize Math Simplified \textperiodcentered{} Success Amplified}}
\fancyfoot[L]{\scriptsize dr.merie@IntegrationAcademy.ca}
\fancyfoot[C]{\scriptsize\thepage}
\fancyfoot[R]{\scriptsize IntegrationAcademy.ca}
\renewcommand{\headrulewidth}{1.2pt}
\renewcommand{\footrulewidth}{0.4pt}
\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}
\newtcolorbox{example}[2]{colframe=#1,colback=#1!7,coltitle=white,colbacktitle=#1,fonttitle=\bfseries,title={#2},arc=3pt,boxrule=1pt}
\newtcolorbox{qbox}[1]{colframe=qorange,colback=qbg,coltitle=white,colbacktitle=qorange,fonttitle=\bfseries,title={#1},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{keybox}{colframe=keygray,colback=keybg,coltitle=white,colbacktitle=keygray,fonttitle=\bfseries,title={$\checkmark$\ Corrigé},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{recapbox}{colframe=keygray,colback=keybg,coltitle=white,colbacktitle=keygray,fonttitle=\bfseries,title={Récapitulatif des questions},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{ideabox}{colframe=titleblue,colback=titleblue!6,coltitle=white,colbacktitle=titleblue,fonttitle=\bfseries,title={Les grandes idées},arc=3pt,breakable,boxrule=1.2pt}
\newtcolorbox{learnbox}{colframe=iagreen,colback=iagreen!5,coltitle=white,colbacktitle=iagreen,fonttitle=\bfseries,title={L'essentiel des notions},arc=3pt,breakable,boxrule=1.2pt}
\newcommand{\lh}[1]{\par\smallskip{\bfseries\color{iagreen}#1}\par\nobreak\smallskip}
\newcommand{\soln}{\par\smallskip\textit{\textbf{Solution.}}\ }
\newcommand{\workspace}[1]{\par\vspace{3pt}\fcolorbox{black!30}{white}{\begin{minipage}[t][#1][t]{\dimexpr\linewidth-2\fboxsep\relax}\ \end{minipage}}\par}
\newcommand{\sech}[1]{\par\vspace{8pt}{\Large\bfseries\color{iagreen}#1}\par\nobreak\vspace{2pt}{\color{black!20}\hrule height1pt}\vspace{6pt}}
`;
const GRID = `\\begin{center}\\begin{tikzpicture}\\begin{axis}[width=8cm,height=6cm,axis lines=middle,grid=both,grid style={gray!16},xmin=-6,xmax=6,ymin=-6,ymax=6,xtick distance=2,ytick distance=2,tick label style={font=\\tiny}]\\end{axis}\\end{tikzpicture}\\end{center}`;
const esc = (s) => String(s).replace(/&/g, "\\&").replace(/_/g, "\\_"); // titles are text-mode

function render(w) {
  const ex = w.examples.map((e, i) => `\\begin{example}{ex${i % 9}}{Exemple ${i + 1} --- ${esc(e.t)}}\n${e.body}\n\\end{example}`).join("\n\n");
  const learnTex = w.learn ? `\\begin{learnbox}\n${w.learn.map(([h, b]) => `\\lh{${h}}${b}`).join("\n")}\n\\end{learnbox}\n\n` : "";
  const q = w.questions.map((qq, i) => {
    const head = `Question ${i + 1}${qq.challenge ? " --- Défi" : ""}`;
    const tail = qq.grid ? "\n" + GRID : `\\workspace{${qq.ws || "2.4cm"}}`;
    return `\\begin{qbox}{${head}}\n${qq.ask}${tail}\n\\end{qbox}`;
  }).join("\n\n");
  const recap = w.questions.map((qq) => `  \\item ${qq.ask}`).join("\n");
  const keys = w.answers.map((a) => `  \\item ${a}`).join("\n");
  const ideas = w.ideas.map((i) => `  \\item ${i}`).join("\n");
  return `${PRE}\\fancyhead[R]{\\footnotesize MCR3U \\textperiodcentered{} ${w.code}}
\\begin{document}

\\begin{center}
{\\LARGE\\bfseries\\color{titleblue}Fiche d'exercices ${w.code} --- ${esc(w.title)}}\\\\[2pt]
{\\small Fonctions, 11\\textsuperscript{e} année, cours préuniversitaire (MCR3U) \\textperiodcentered{} Chapitre ${w.unit}}
\\end{center}

\\begin{ideabox}
${w.intro ? w.intro + "\n" : ""}\\begin{itemize}[leftmargin=*,itemsep=2pt]
${ideas}
\\end{itemize}
\\end{ideabox}

${learnTex}\\sech{Exemples résolus}

${ex}

\\clearpage
\\sech{À toi --- montre ta démarche}
Pour chaque question, montre clairement toutes les étapes dans l'espace prévu.

${q}

\\clearpage
\\sech{Récapitulatif des questions et corrigé}

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

/** Same shape as the English worksheets.content column (format "tex"). */
const contentOf = (w) => ({
  format: "tex", title: w.title, unit: w.unit, intro: w.intro ?? "", ideas: w.ideas, learn: w.learn,
  examples: w.examples.map((e) => ({ t: e.t ?? "", body: e.body ?? "" })),
  questions: w.questions.map((q) => ({ ask: q.ask ?? "", grid: !!q.grid, ws: q.ws ?? "", challenge: !!q.challenge })),
  answers: w.answers,
});

/** rewrite accented letters and « » as LaTeX macros (replacement functions avoid the special $ patterns of String.replace) */
const ACC = { "é": "\\'{e}", "É": "\\'{E}", "è": "\\`{e}", "È": "\\`{E}", "ê": "\\^{e}", "Ê": "\\^{E}", "ë": '\\"{e}', "à": "\\`{a}", "À": "\\`{A}", "â": "\\^{a}", "ç": "\\c{c}", "Ç": "\\c{C}", "î": "\\^{\\i}", "ï": '\\"{\\i}', "ô": "\\^{o}", "Ô": "\\^{O}", "û": "\\^{u}", "ù": "\\`{u}", "œ": "\\oe{}", "Œ": "\\OE{}", "«": "\\guillemotleft{}", "»": "\\guillemotright{}", "\u00a0": "~", "\u202f": "\\,"};
const SYM = [["“", "\\textquotedblleft{}"], ["”", "\\textquotedblright{}"], ["’", "'"], ["−", "{\\ensuremath{-}}"], ["…", "\\ldots{}"], ["✓", "\\ensuremath{\\checkmark}"], ["²", "\\textsuperscript{2}"], ["³", "\\textsuperscript{3}"], ["≈", "\\ensuremath{\\approx}"], ["—", "---"], ["–", "--"], ["°", "\\ensuremath{^\\circ}"], ["≤", "\\ensuremath{\\le}"], ["≥", "\\ensuremath{\\ge}"], ["×", "\\ensuremath{\\times}"], ["÷", "\\ensuremath{\\div}"], ["→", "\\ensuremath{\\to}"], ["≠", "\\ensuremath{\\ne}"], ["π", "\\ensuremath{\\pi}"], ["√", "\\ensuremath{\\surd}"], ["±", "\\ensuremath{\\pm}"], ["·", "\\ensuremath{\\cdot}"]];
function frenchTex(src) {
  let s = src;
  for (const [a, b] of SYM) s = s.split(a).join(b);
  return s.replace(/[éÉèÈêÊëàÀâçÇîïôÔûùœŒ«»\u00a0\u202f]/g, (c) => ACC[c]);
}

fs.mkdirSync(OUT, { recursive: true });
let sb = null;
if (APPLY) {
  const { createClient } = await import("@supabase/supabase-js");
  const env = {};
  for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
}
for (const code of codes) {
  const file = path.join(HERE, `w${code.replace(".", "_")}.mjs`);
  if (!fs.existsSync(file)) { console.log(`skip ${code}: no ${path.basename(file)}`); continue; }
  const w = (await import(pathToFileURL(file).href)).WS;
  if (w.code !== code) throw new Error(`${code}: module says ${w.code}`);
  const E = (await import(pathToFileURL(path.resolve(`scripts/mcr3u-ch2/t${code.replace(".", "_")}.mjs`)).href))[`W${code.replace(".", "")}`];
  const L = (await import(pathToFileURL(path.resolve(`scripts/mcr3u-ch2/t${code.replace(".", "_")}.mjs`)).href))[`LEARN${code.replace(".", "")}`];
  const shape = (x) => [x.examples.length, x.questions.length, x.answers.length, x.questions.filter((q) => q.grid).length, x.questions.filter((q) => q.challenge).length, x.ideas.length, (x.examples.map((e) => e.body).join("").match(/tikzpicture\}/g) || []).length].join("/");
  if (shape(w) !== shape(E) || w.learn.length !== L.length || w.questions.some((q, i) => (q.ws ?? "") !== (E.questions[i].ws ?? ""))) throw new Error(`${code}: structure ${shape(w)} differs from English ${shape(E)} (examples/questions/answers/grids/challenges/ideas/figures)`);
  const name = `ws_${code}`;
  fs.writeFileSync(path.join(OUT, name + ".tex"), frenchTex(render(w)));
  try { execFileSync(BIN, ["-X", "compile", name + ".tex", "--outdir", "."], { cwd: OUT, stdio: "pipe" }); }
  catch (e) { console.error(`COMPILE FAIL ${code}:\n` + (e.stderr?.toString() || e.message).split("\n").filter((l) => /error|!|Undefined/i.test(l)).slice(0, 8).join("\n")); process.exit(1); }
  const pdf = fs.readFileSync(path.join(OUT, name + ".pdf"));
  const pages = execFileSync("pdftotext", ["-enc", "UTF-8", path.join(OUT, name + ".pdf"), "-"]).toString("utf8").split("\f").length - 1;
  console.log(`✓ ${code} ${w.title}: ${pages} pages, ${Math.round(pdf.length / 1024)} KB  (${path.join(OUT, name + ".pdf")})`);
  if (!APPLY) continue;
  const B = sb.storage.from("worksheets");
  const up = await B.upload(`${CID}/${code}_worksheet.pdf`, pdf, { upsert: true, contentType: "application/pdf" });
  if (up.error) throw up.error;
  const url = B.getPublicUrl(`${CID}/${code}_worksheet.pdf`).data.publicUrl + `?v=${Date.now()}`;
  const row = { worksheet_url: url, worksheet_name: `${code}_worksheet.pdf`, answers_url: null, answers_name: null, content: contentOf(w), title: w.title };
  const { data: have, error: e1 } = await sb.from("worksheets").select("id").eq("course_id", CID).eq("code", code);
  if (e1) throw e1;
  // no row yet for (CID_FR, code): insert at position chapter·1000 + lesson number; otherwise update in place
  const r = have.length
    ? await sb.from("worksheets").update(row).eq("course_id", CID).eq("code", code)
    : await sb.from("worksheets").insert({ ...row, course_id: CID, code, position: Number(code.split(".")[0]) * 1000 + Number(code.split(".")[1]), published: true });
  if (r.error) throw r.error;
  console.log(`  uploaded and ${have.length ? "linked" : "INSERTED as a new worksheet row"} (answer key is inside the same PDF)`);
}
