// Chapitre 2 (MTH1W-FR) — fiches d'exercices pour l'enseignant, UN PDF par sujet : notes avec figures, exemples résolus,
// exercices à trois niveaux avec espace de travail, et le corrigé complet à la fin. Mirror of ../../mth1w-ch2/ws/build.mjs.
//   node scripts/mth1w-fr-ch2/ws/build.mjs 2.1 2.2      -> compile only (PDFs in ws/out/, nothing uploaded)
//   node scripts/mth1w-fr-ch2/ws/build.mjs --all        -> compile every French worksheet
//   node scripts/mth1w-fr-ch2/ws/build.mjs --all --apply  -> compile, upload to worksheets/${CID_FR}/{code}_worksheet.pdf,
//        insert/update the worksheets row for (CID_FR, code) at position 2·1000 + k with the French title
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { pathToFileURL } from "url";
import { CID_FR } from "../../mth1w-fr/common.mjs";

const HERE = path.resolve("scripts/mth1w-fr-ch2/ws");
const OUT = path.join(HERE, "out");
const BIN = "C:\\Users\\am778\\tools\\tectonic\\tectonic.exe";
const APPLY = process.argv.includes("--apply");
let codes = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (process.argv.includes("--all")) codes = ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"];

const esc = (s) => String(s).replace(/&/g, "\\&");
const PRE = String.raw`\documentclass[11pt]{article}
\usepackage[letterpaper,top=2.1cm,bottom=1.9cm,left=1.6cm,right=1.6cm,headheight=28pt,footskip=24pt]{geometry}
\usepackage{amsmath,amssymb,cancel}
\usepackage[T1]{fontenc}\usepackage[utf8]{inputenc}\usepackage{lmodern}
\usepackage{xcolor}\usepackage[most]{tcolorbox}\usepackage{enumitem}\usepackage{multicol}\usepackage{array}\usepackage{booktabs}\usepackage{fancyhdr}
\usepackage{tikz}\usetikzlibrary{calc,decorations.pathreplacing,arrows.meta}
\usepackage{pgfplots}\pgfplotsset{compat=1.18}
\definecolor{titleblue}{HTML}{1D4ED8}\definecolor{iagreen}{HTML}{14653B}\definecolor{keygray}{HTML}{475569}\definecolor{keybg}{HTML}{F1F5F9}
\definecolor{tipred}{HTML}{B91C1C}\definecolor{hookviolet}{HTML}{6D28D9}
\definecolor{lv1}{HTML}{15803D}\definecolor{lv2}{HTML}{B45309}\definecolor{lv3}{HTML}{7C2D12}
\definecolor{ex0}{HTML}{2563A0}\definecolor{ex1}{HTML}{3B7D3B}\definecolor{ex2}{HTML}{8A5A00}\definecolor{ex3}{HTML}{A3327A}\definecolor{ex4}{HTML}{6D28A3}\definecolor{ex5}{HTML}{0E7490}\definecolor{ex6}{HTML}{9A3412}\definecolor{ex7}{HTML}{15803D}\definecolor{ex8}{HTML}{1D4ED8}
\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\footnotesize NOM : \underline{\hspace{3.4cm}}}
\fancyhead[C]{\textbf{Integration Academy}\\[-2pt]{\scriptsize Math Simplified \textperiodcentered{} Success Amplified}}
\fancyfoot[L]{\scriptsize IntegrationAcademy.ca}\fancyfoot[C]{\scriptsize\thepage}
\renewcommand{\headrulewidth}{1.2pt}\renewcommand{\footrulewidth}{0.4pt}
\setlength{\parindent}{0pt}\setlength{\parskip}{4pt}\renewcommand{\arraystretch}{1.45}
\newtcolorbox{ideabox}{colframe=titleblue,colback=titleblue!6,coltitle=white,colbacktitle=titleblue,fonttitle=\bfseries,title={Les grandes idées},arc=3pt,breakable,boxrule=1.2pt}
\newtcolorbox{goalbox}{colframe=iagreen,colback=iagreen!5,coltitle=white,colbacktitle=iagreen,fonttitle=\bfseries,title={Objectifs d'apprentissage et curriculum},arc=3pt,breakable,boxrule=1.2pt}
\newtcolorbox{hookbox}{colframe=hookviolet,colback=hookviolet!5,coltitle=white,colbacktitle=hookviolet,fonttitle=\bfseries,title={Mise en situation --- pour commencer la leçon},arc=3pt,breakable,boxrule=1.2pt}
\newtcolorbox{conceptbox}[1]{colframe=iagreen,colback=white,coltitle=white,colbacktitle=iagreen,fonttitle=\bfseries,title={#1},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{tipbox}{colframe=tipred,colback=tipred!4,coltitle=white,colbacktitle=tipred,fonttitle=\bfseries,title={Erreurs fréquentes et conseils},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{example}[2]{colframe=#1,colback=#1!6,coltitle=white,colbacktitle=#1,fonttitle=\bfseries,title={#2},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{qbox}[2]{colframe=#1,colback=white,coltitle=white,colbacktitle=#1,fonttitle=\bfseries,title={#2},arc=3pt,boxrule=0.9pt}
\newtcolorbox{recapbox}[1]{colframe=keygray,colback=keybg,coltitle=white,colbacktitle=keygray,fonttitle=\bfseries,title={#1},arc=3pt,boxrule=0.8pt}
\newtcolorbox{keyitem}[1]{colframe=keygray,colback=keybg,coltitle=white,colbacktitle=keygray,fonttitle=\bfseries,title={#1},arc=3pt,breakable,boxrule=0.8pt}
\newcommand{\sech}[1]{\par\vspace{8pt}{\Large\bfseries\color{iagreen}#1}\par\nobreak\vspace{2pt}{\color{black!20}\hrule height1pt}\vspace{6pt}}
\newcommand{\workspace}[1]{\par\vspace{3pt}\fcolorbox{black!30}{white}{\begin{minipage}[t][#1][t]{\dimexpr\linewidth-2\fboxsep\relax}\ \end{minipage}}\par}
\newcommand{\step}[2]{\par\noindent\textbf{Étape #1.}\ #2}
`;

/** Multi-part problems: start each "a)", "b)", … that begins a new source line on its own line. */
const partLines = (q) => clean(q).replace(/\n(?=\(?[a-z]\))/g, "\\par\\smallskip ");
/** Plain-text safety: a bare % would start a LaTeX comment; → is not in the font. */
const clean = (s) => String(s).replace(/(?<!\\)%/g, "\\%").replace(/→/g, "$\\to$");

function texDoc(t) {
  const goals = t.goals.map((g) => String.raw`\item ${g}`).join("\n");
  const vocab = t.vocab?.length ? String.raw`\par\smallskip\textbf{Vocabulaire clé}\\[2pt]\begin{tabular}{@{}>{\bfseries}p{3.4cm}p{13.4cm}@{}}${t.vocab.map(([w, m]) => `${w} & ${m}\\\\`).join("\n")}\end{tabular}` : "";
  const concepts = t.concepts.map(([h, body]) => String.raw`\begin{conceptbox}{${h}}
${body}
\end{conceptbox}`).join("\n");
  const tips = t.tips.map((x) => String.raw`\item ${x}`).join("\n");
  const examples = t.examples.map((e, i) => String.raw`\begin{example}{ex${i % 9}}{Exemple ${i + 1} --- ${e.title}}
${e.q}
${e.fig ?? ""}
\par\smallskip\textbf{\textit{Solution.}}
${e.steps.map((s, k) => String.raw`\step{${k + 1}}{${s}}`).join("\n")}
\par\smallskip\colorbox{white}{\textbf{Réponse :} ${e.ans}}
\end{example}`).join("\n");
  const LV = { 1: ["lv1", "Niveau 1 --- Connaissance et compréhension"], 2: ["lv2", "Niveau 2 --- Mise en application"], 3: ["lv3", "Niveau 3 --- Habiletés de la pensée et résolution de problèmes (défi)"] };
  let n = 0;
  const practice = [1, 2, 3].map((lv) => {
    const ps = t.problems.filter((p) => p.level === lv);
    if (!ps.length) return "";
    return String.raw`\par\medskip{\large\bfseries\color{${LV[lv][0]}}${LV[lv][1]}}\par\smallskip
` + ps.map((p) => { n++; return String.raw`\begin{qbox}{${LV[lv][0]}}{Problème ${n}}
${partLines(p.q)}
${p.fig ?? ""}
\workspace{${p.space ?? 3.2}cm}
\end{qbox}`; }).join("\n");
  }).join("\n");
  // Last page: compact two-column question recap (full problems) and answer key.
  const ordered = [1, 2, 3].flatMap((lv) => t.problems.filter((p) => p.level === lv));
  const list = (items) => String.raw`\begin{multicols}{2}\small
\begin{enumerate}[leftmargin=*,itemsep=4pt,label=\arabic*.]
${items.map((s) => String.raw`\item ${clean(s)}`).join("\n")}
\end{enumerate}
\end{multicols}`;
  const key = String.raw`\begin{recapbox}{Récapitulatif des questions}
${list(ordered.map((p) => p.q))}
\end{recapbox}
\begin{recapbox}{$\checkmark$\ Corrigé}
${list(ordered.map((p) => p.ans))}
\end{recapbox}`;

  return PRE + String.raw`\fancyhead[R]{\footnotesize MTH1W \textperiodcentered{} ${t.code}}
\begin{document}
\begin{center}
{\LARGE\bfseries\color{titleblue}Fiche d'exercices ${t.code} --- ${esc(t.title)}}\\[2pt]
{\small Mathématiques, 9e année (MTH1W) \textperiodcentered{} Unité 2 : Algèbre \textperiodcentered{} Notes pour l'enseignant, exemples résolus, exercices et corrigé}
\end{center}
\begin{ideabox}
${t.bigideas}
\end{ideabox}
\begin{goalbox}
\begin{itemize}[leftmargin=*,itemsep=1pt]
${goals}
\end{itemize}
{\small\textbf{MTH1W (Ontario) :} ${t.curriculum}}
${vocab}
\end{goalbox}
\begin{hookbox}
${t.hook}
\end{hookbox}

\sech{Enseigner les concepts}
${concepts}
\begin{tipbox}
\begin{itemize}[leftmargin=*,itemsep=2pt]
${tips}
\end{itemize}
\end{tipbox}

\sech{Exemples résolus}
${examples}

\clearpage
\sech{Exercices --- ${t.code} ${esc(t.title)}}
Montre clairement ton raisonnement dans l'espace prévu. Le niveau 1 vérifie les habiletés, le niveau 2 les applique, le niveau 3 te demande de réfléchir et d'expliquer.
${practice}

\clearpage
\sech{Récapitulatif des questions et corrigé}
${key}
\end{document}
`;
}

/** Plain-text content for the worksheets.content column (the admin "regenerate" path). */
const plain = (s) => String(s).replace(/\\begin\{center\}[\s\S]*?\\end\{center\}/g, "").replace(/\\textbf\{([^{}]*)\}/g, "$1").replace(/\\emph\{([^{}]*)\}/g, "$1").replace(/\\(par|smallskip|medskip|noindent)\b/g, " ").replace(/\s+/g, " ").trim();
function contentOf(t) {
  let n = 0;
  return {
    grade: "MTH1W", title: t.title, intro: plain(t.bigideas),
    lesson: t.concepts.map(([h, b]) => [h, plain(b)]),
    examples: t.examples.map((e, i) => [`Exemple ${i + 1} : ${e.title}`, plain(e.q), plain(e.steps.join(" ")) + " Réponse : " + plain(e.ans)]),
    questions: [1, 2, 3].flatMap((lv) => t.problems.filter((p) => p.level === lv)).map((p) => [`Problème ${++n}`, plain(p.q), plain(p.ans)]),
  };
}

fs.mkdirSync(OUT, { recursive: true });
let sb = null;
if (APPLY) {
  const { createClient } = await import("@supabase/supabase-js");
  const env = {};
  for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
}
let failed = 0;
for (const code of codes) {
  const file = path.join(HERE, `w${code.replace(".", "_")}.mjs`);
  if (!fs.existsSync(file)) { console.log(`skip ${code}: no ${path.basename(file)}`); continue; }
  const t = (await import(pathToFileURL(file).href)).WS;
  if (t.examples.length !== 9) throw new Error(`${code}: need 9 examples (has ${t.examples.length})`);
  if (t.problems.length !== 13 || [[1, 3], [2, 5], [3, 5]].some(([lv, k]) => t.problems.filter((p) => p.level === lv).length !== k)) throw new Error(`${code}: need 13 problems (3 + 5 + 5 by level)`);
  const name = `ws_${code}`;
  fs.writeFileSync(path.join(OUT, name + ".tex"), texDoc(t).replace(/“/g, "\\textquotedblleft{}").replace(/”/g, "\\textquotedblright{}").replace(/’/g, "'").replace(/§/g, "\\S{}").replace(/ā/g, "\\={a}").replace(/ī/g, "\\={\\i}").replace(/−/g, "{\\ensuremath{-}}").replace(/…/g, "\\ldots{}").replace(/✓/g, "\\ensuremath{\\checkmark}").replace(/²/g, "\\textsuperscript{2}").replace(/³/g, "\\textsuperscript{3}").replace(/⁴/g, "\\textsuperscript{4}").replace(/⁵/g, "\\textsuperscript{5}").replace(/≈/g, "\\ensuremath{\\approx}").replace(/—/g, "---").replace(/–/g, "--").replace(/°/g, "\\ensuremath{^\\circ}").replace(/\u00a0/g, "~")
    // tectonic runs XeTeX: with the T1 font, U+00AB/U+00BB/U+00D7/U+00F7 would land on the wrong glyph slots (\u0144 \u017c \u0152 \u0153)
    .replace(/\u00ab/g, "\\guillemotleft{}").replace(/\u00bb/g, "\\guillemotright{}").replace(/\u00d7/g, "\\ensuremath{\\times}").replace(/\u00f7/g, "\\ensuremath{\\div}").replace(/\u0153/g, "\\oe{}").replace(/\u0152/g, "\\OE{}"));
  try { execFileSync(BIN, ["-X", "compile", name + ".tex", "--outdir", "."], { cwd: OUT, stdio: "pipe" }); }
  catch (e) { failed++; console.error(`COMPILE FAIL ${code}:\n` + (e.stderr?.toString() || e.message).split("\n").filter((l) => /error|!|Undefined/i.test(l)).slice(0, 8).join("\n")); continue; }
  const pdf = fs.readFileSync(path.join(OUT, name + ".pdf"));
  console.log(`✓ ${code} ${t.title}: ${Math.round(pdf.length / 1024)} KB  (${path.join(OUT, name + ".pdf")})`);
  if (!APPLY) continue;
  const B = sb.storage.from("worksheets");
  const key = `${CID_FR}/${code}_worksheet.pdf`;
  const up = await B.upload(key, pdf, { upsert: true, contentType: "application/pdf" });
  if (up.error) throw up.error;
  const url = B.getPublicUrl(key).data.publicUrl;
  const row = { worksheet_url: url, worksheet_name: `${code}_worksheet.pdf`, answers_url: null, answers_name: null, content: contentOf(t), title: t.title };
  const { data: have, error: e1 } = await sb.from("worksheets").select("id").eq("course_id", CID_FR).eq("code", code);
  if (e1) throw e1;
  const r = have.length
    ? await sb.from("worksheets").update(row).eq("course_id", CID_FR).eq("code", code)
    : await sb.from("worksheets").insert({ ...row, course_id: CID_FR, code, position: 2 * 1000 + Number(code.split(".")[1]), published: true });
  if (r.error) throw r.error;
  console.log(`  uploaded and ${have.length ? "updated" : "INSERTED"} worksheet row (answer key is inside the same PDF)`);
}
if (failed) { console.log(`\n${failed} worksheet(s) failed to compile`); process.exit(1); }
if (!APPLY) console.log("\nCompile only — re-run with --apply to upload to the MTH1W-FR course.");
