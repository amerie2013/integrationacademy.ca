// Convert a worksheet content module (scripts/worksheets/*.mjs) into an
// editable, self-contained LaTeX document. The math in the content is already
// LaTeX ($\dfrac{...}$, \mathbb{}, …) so it passes straight through; only the
// little HTML in solutions (<b> <i> <br> <code> <div class='code'>) and any
// stray special chars / unicode in plain text are translated.

import { LESSONS } from "./worksheets/lessons-data.mjs";

const PALETTE = ["2563A0", "3B7D3B", "8A5A00", "A3327A", "6D28A3", "B08900", "0E7490", "9A3412", "15803D"];

const UNI = {
  "←": "$\\leftarrow$", "→": "$\\rightarrow$", "↑": "$\\uparrow$", "↓": "$\\downarrow$",
  "≤": "$\\le$", "≥": "$\\ge$", "≠": "$\\ne$", "≈": "$\\approx$",
  "×": "$\\times$", "÷": "$\\div$", "−": "$-$", "±": "$\\pm$",
  "√": "$\\surd$", "∞": "$\\infty$", "π": "$\\pi$", "°": "$^{\\circ}$",
  "…": "\\dots ", "∑": "$\\sum$", "∈": "$\\in$", "∉": "$\\notin$",
  "⊂": "$\\subset$", "⊆": "$\\subseteq$", "∩": "$\\cap$", "∪": "$\\cup$",
  "·": "$\\cdot$", "∅": "$\\emptyset$", "✓": "\\checkmark{}",
  "⇒": "$\\Rightarrow$", "⇐": "$\\Leftarrow$", "⇔": "$\\Leftrightarrow$",
  "∴": "$\\therefore$", "∵": "$\\because$", "∝": "$\\propto$", "√": "$\\surd$",
  "“": "``", "”": "''", "‘": "`", "’": "'", "–": "--", "—": "---",
};
const UNI_RE = new RegExp("[" + Object.keys(UNI).join("") + "]", "g");

// Same symbols, but written for use *inside* an existing $...$ span (no $ wrapper).
const MATH_UNI = {};
for (const [k, v] of Object.entries(UNI)) MATH_UNI[k] = v.replace(/^\$(.*)\$$/, "$1");
const MATH_RE = new RegExp("[" + Object.keys(MATH_UNI).join("") + "]", "g");
const fixMath = (m) => m.replace(MATH_RE, (ch) => MATH_UNI[ch] ?? ch);

function escapeText(s) {
  return String(s)
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([&%#_])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/{/g, "\\{").replace(/}/g, "\\}")
    .replace(/</g, "\\textless{}").replace(/>/g, "\\textgreater{}")
    .replace(UNI_RE, (ch) => UNI[ch] ?? ch);
}

function codeBlock(inner) {
  // keep <br> as LaTeX hard line breaks; drop inline <code> tags
  const lines = inner.replace(/<\/?code>/g, "").split(/<br\s*\/?>/g).map((l) => escapeText(l.trim()));
  return "\\begin{tcolorbox}[colback=black!3,colframe=black!14,boxrule=0.5pt,arc=2pt,left=6pt,right=6pt,top=4pt,bottom=4pt,fontupper=\\ttfamily\\small]\n" + lines.join("\\\\\n") + "\n\\end{tcolorbox}";
}

const NUL = String.fromCharCode(0);

// Translate one rich-text fragment (English + inline $math$ + a little HTML) to LaTeX.
export function tx(raw) {
  const store = [];
  const tok = (x) => { store.push(x); return NUL + (store.length - 1) + NUL; };
  let s = String(raw);
  // 1) protect real math spans  $...$  (a literal dollar is written \$)
  s = s.replace(/(?<!\\)\$([^$]*?)(?<!\\)\$/g, (_, m) => tok("$" + fixMath(m) + "$"));
  // 2) literal dollar sign
  s = s.replace(/\\\$/g, () => tok("\\$"));
  // 3) HTML -> LaTeX commands (stored verbatim so escaping won't touch them)
  s = s.replace(/<div class=['"]code['"]>([\s\S]*?)<\/div>/g, (_, c) => tok(codeBlock(c)));
  s = s.replace(/<br\s*\/?>/g, () => tok("\\\\\n"));
  s = s.replace(/<b>/g, () => tok("\\textbf{")).replace(/<\/b>/g, () => tok("}"));
  s = s.replace(/<i>/g, () => tok("\\textit{")).replace(/<\/i>/g, () => tok("}"));
  s = s.replace(/<code>/g, () => tok("\\texttt{")).replace(/<\/code>/g, () => tok("}"));
  // 4) escape specials/unicode in the remaining plain text
  s = escapeText(s);
  // 5) restore verbatim tokens (loop: a code block may itself contain math tokens)
  const re = new RegExp(NUL + "(\\d+)" + NUL, "g");
  while (re.test(s)) { re.lastIndex = 0; s = s.replace(re, (_, i) => store[+i]); }
  return s;
}

function preamble(s) {
  const colors = PALETTE.map((hex, i) => "\\definecolor{c" + i + "}{HTML}{" + hex + "}").join("\n");
  return `\\documentclass[11pt]{article}
% ===========================================================================
%  Integration Academy worksheet  --  ${s.code} ${s.title}
%  Edit freely, then compile to PDF (Overleaf, or pdflatex/lualatex locally).
% ===========================================================================
\\usepackage[letterpaper,top=2.1cm,bottom=1.7cm,left=1.4cm,right=1.4cm,headheight=26pt]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{xcolor}
\\usepackage[most]{tcolorbox}
\\usepackage{enumitem}
\\usepackage{multicol}
\\usepackage{fancyhdr}

\\definecolor{titleblue}{HTML}{1D4ED8}
\\definecolor{qgreen}{HTML}{15803D}
\\definecolor{keygray}{HTML}{475569}
${colors}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\footnotesize NAME: \\underline{\\hspace{3.6cm}}}
\\fancyhead[C]{\\textbf{Integration Academy}\\\\[-1pt]{\\scriptsize Math Simplified \\textperiodcentered{} Success Amplified}}
\\fancyhead[R]{\\footnotesize ${escapeText(s.grade)}}
\\fancyfoot[L]{\\scriptsize Email: dr.Merie@IntegrationAcademy.ca}
\\fancyfoot[R]{\\scriptsize IntegrationAcademy.ca}
\\renewcommand{\\headrulewidth}{1.2pt}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{4pt}

\\newtcolorbox{titlebox}[1]{colframe=titleblue,colback=titleblue!6,coltitle=white,colbacktitle=titleblue,fonttitle=\\bfseries,title={#1},arc=3pt,boxrule=1.2pt}
\\newtcolorbox{exbox}[2]{colframe=#1,colback=#1!7,coltitle=white,colbacktitle=#1,fonttitle=\\bfseries,title={#2},breakable,arc=3pt}
\\newtcolorbox{qbox}[1]{colframe=qgreen,colback=qgreen!7,coltitle=white,colbacktitle=qgreen,fonttitle=\\bfseries,title={#1},breakable,arc=3pt}
\\newtcolorbox{solbox}{colback=white,colframe=black!12,boxrule=0.6pt,arc=3pt,left=6pt,right=6pt,top=4pt,bottom=4pt}
\\newtcolorbox{keybox}{colframe=keygray,colback=white,coltitle=white,colbacktitle=keygray,fonttitle=\\bfseries,title={\\checkmark\\ Answer Key},breakable,arc=3pt}
\\newcommand{\\worklines}{\\par\\vspace{4pt}\\fcolorbox{black!35}{white}{\\begin{minipage}[t][2.6cm][t]{\\dimexpr\\linewidth-2\\fboxsep\\relax}\\ \\end{minipage}}\\par}
\\newcommand{\\iasection}[1]{\\par\\vspace{10pt}{\\Large\\bfseries\\color{qgreen!75!black}#1}\\par\\nobreak\\vspace{3pt}{\\color{black!25}\\hrule height1pt}\\vspace{6pt}}

\\begin{document}
`;
}

export function toTex(s) {
  const examples = s.examples.map((e, i) =>
    `\\begin{exbox}{c${i % PALETTE.length}}{${tx(e[0])}}
${tx(e[1])}

\\begin{solbox}\\textbf{Solution}\\\\
${tx(e[2])}
\\end{solbox}
\\end{exbox}`).join("\n\n");

  const probs = s.questions.map((q) =>
    `\\begin{qbox}{${tx(q[0])}}
${tx(q[1])}
\\worklines
\\noindent\\textbf{Answer:} \\underline{\\hspace{3.2cm}}\\quad\\textbf{Verification:} \\underline{\\hspace{3.2cm}}
\\end{qbox}`).join("\n\n");

  const key = s.questions.map((q) => `  \\item ${tx(q[2])}`).join("\n");

  const L = s.lesson || LESSONS[s.code];
  const lesson = !L ? "" :
`\\iasection{Learn the Concept}
${L.map(([h, b]) => `{\\bfseries\\color{titleblue}${tx(h)}}\\\\\n${tx(b)}\\par\\vspace{5pt}`).join("\n")}

`;

  return preamble(s) +
`\\begin{titlebox}{${tx(s.code + " " + s.title)}}
${tx(s.intro)}
\\end{titlebox}

${lesson}\\iasection{Examples}
${examples}

\\clearpage
\\iasection{Your Turn --- Show Your Work!}
For each problem, solve it and verify your solution. Show all steps clearly.

${probs}

\\clearpage
\\begin{keybox}
\\begin{multicols}{2}
\\begin{enumerate}[leftmargin=*,itemsep=2pt]
${key}
\\end{enumerate}
\\end{multicols}
\\end{keybox}

\\begin{center}\\color{titleblue}\\bfseries\\large Great work --- keep practising!\\end{center}

\\end{document}
`;
}

// Compact / answer-key version: all questions on a page, no work space, then key.
export function toTexCompact(s) {
  const probs = s.questions.map((q) =>
    `  \\item ${tx(String(q[1]).replace(/^Solve and verify:\s*/i, ""))}`).join("\n");
  const key = s.questions.map((q) => `  \\item ${tx(q[2])}`).join("\n");

  return preamble(s) +
`\\begin{titlebox}{${tx(s.code + " " + s.title)}}
${tx(s.intro)}
\\end{titlebox}

\\iasection{Practice Set --- All Questions}
${s.questions.length} questions. Work them on your own paper, then check the key below.

\\begin{enumerate}[leftmargin=*,itemsep=7pt]
${probs}
\\end{enumerate}

\\begin{keybox}
\\begin{multicols}{2}
\\begin{enumerate}[leftmargin=*,itemsep=2pt]
${key}
\\end{enumerate}
\\end{multicols}
\\end{keybox}

\\end{document}
`;
}
