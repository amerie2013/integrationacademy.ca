// AP Calculus AB — Unit 1 Test (Limits and Continuity), as a printable timed
// paper with a separate answer key. Twenty original multiple-choice questions,
// none of which appear in the lessons, worksheets or online question bank.
// The split mirrors the exam: Part A without a calculator, Part B with one.
const r = String.raw;
const UNIT = "Unit 1: Limits and Continuity";
const L = (to, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}`;
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;

// q: −x−2 on [−4,−2), q(−2)=2, x+2 on (−2,1], 5−x on (1,5].
const GRAPH_Q = r`\begin{apgraph}{-5}{6}{-1.5}{5.5}
\addplot[domain=-4:-2]{-x-2};
\addplot[domain=-2:1]{x+2};
\addplot[domain=1:5]{5-x};
\closeddot{-4}{2}\closeddot{-2}{2}\closeddot{1}{3}\closeddot{5}{0}
\opendot{-2}{0}\opendot{1}{4}
\node[font=\small, color=ink] at (axis cs:3.9,2.2) {$y=q(x)$};
\end{apgraph}`;

const HEAD = (right) => r`\documentclass[11pt]{article}
\input{_preamble}
\fancyhead[R]{\footnotesize\color{black!60}${right}}
\begin{document}
`;

const TEST = HEAD("Unit 1 test") + r`
\wstitle{1.11}{Unit 1 Test: Limits and Continuity}{${UNIT} \textperiodcentered{} 20 questions \textperiodcentered{} 45 minutes}

\begin{scorebox}{Instructions}
\begin{itemize}[leftmargin=*,itemsep=2pt,topsep=2pt]
  \item \textbf{Part A} (questions 1--15): 32 minutes, \textbf{no calculator}.
  \item \textbf{Part B} (questions 16--20): 13 minutes, a graphing calculator is required.
  \item Each question has exactly one correct answer. Circle one letter. There is no penalty for a wrong answer, so answer every question.
  \item Questions 2, 3 and 14 refer to the graph of $q$ printed with question 2.
\end{itemize}
\end{scorebox}

\sech{Part A \textperiodcentered{} No calculator}
\begin{enumerate}[leftmargin=*,itemsep=0pt]
  \item $${L("2")}\dfrac{x^2-4}{x^2+x-6}=$
  \opts{$\dfrac45$}{$0$}{$1$}{does not exist}

  \item The graph of the function $q$, defined on $[-4,5]$, is shown.
` + GRAPH_Q + r`
  What is $${L("-2")}q(x)$?
  \opts{$2$}{$0$}{$-2$}{does not exist}

  \item For the function $q$ graphed above, $${L("1")}q(x)$ is
  \opts{$3$}{$4$}{$\dfrac72$}{nonexistent}

\newpage
  \item $${L("0")}\dfrac{\sin(3x)}{4x}=$
  \opts{$0$}{$\dfrac34$}{$\dfrac43$}{$1$}

  \item $${L("\\infty")}\dfrac{6x^2-1}{2x^2+5x}=$
  \opts{$0$}{$3$}{$6$}{$\infty$}

  \item $${L("-\\infty")}\dfrac{\sqrt{16x^2+3}}{2x}=$
  \opts{$-2$}{$2$}{$8$}{$-8$}

  \item For what value of $k$ is $f(x)=\begin{cases}x^2+k,&x\le1\\3x+2k,&x>1\end{cases}$ continuous at $x=1$?
  \opts{$2$}{$0$}{$-2$}{$-1$}

  \item At $x=5$, the function $f(x)=\dfrac{x^2-25}{x^2-4x-5}$ has
  \optsv{a removable discontinuity}{a jump discontinuity}{an infinite discontinuity}{no discontinuity}

  \item The function $f$ is continuous on $[0,8]$. Selected values are shown.
` + tab("x", [0, 2, 5, 8], "f(x)", [3, -4, 1, -2]) + r`
  What is the least number of zeros of $f$ in $[0,8]$?
  \opts{$1$}{$2$}{$3$}{$4$}

  \item $${L("9")}\dfrac{\sqrt x-3}{x-9}=$
  \opts{$\dfrac16$}{$\dfrac13$}{$0$}{does not exist}

  \item If $${L("4")}f(x)=2$ and $${L("4")}g(x)=-1$, then $${L("4")}\dfrac{3f(x)-[g(x)]^2}{f(x)+g(x)}=$
  \opts{$-5$}{$7$}{$\dfrac53$}{$5$}

\newpage
  \item A function $f$ satisfies $4-x^2\le f(x)\le4+x^2$ for all $x$. Then $${L("0")}f(x)$
  \optsv{is $0$}{is $4$}{is $8$}{cannot be determined from this information}

  \item $${L("3^-")}\dfrac{x+1}{x-3}=$
  \opts{$4$}{$\infty$}{$-\infty$}{$0$}

  \item For the function $q$ graphed in question 2, $${L("1^+")}q\big(q(x)\big)=$
  \opts{$2$}{$3$}{$0$}{$1$}

  \item The graph of $f(x)=\dfrac{x-1}{x^2-1}$ has a vertical asymptote at
  \optsv{$x=-1$ only}{$x=1$ only}{$x=-1$ and $x=1$}{no value of $x$}
\end{enumerate}

\newpage
\sech{Part B \textperiodcentered{} Graphing calculator required}
\begin{enumerate}[leftmargin=*,itemsep=0pt,start=16]
  \item To three decimal places, $${L("0")}\dfrac{e^{2x}-1}{\sin x}$ is
  \opts{$1.000$}{$0.500$}{$2.000$}{$0.035$}

  \item To three decimal places, $${L("0")}\dfrac{1-\cos(3x)}{x^2}$ is
  \opts{$9.000$}{$4.500$}{$1.500$}{$0.000$}

  \item Selected values of a function $g$ are shown.
` + tab("x", ["1.9", "1.99", "2", "2.01", "2.1"], "g(x)", ["4.61", "4.9601", "1", "5.0401", "5.41"]) + r`
  The best estimate of $${L("2")}g(x)$ is
  \opts{$1$}{$4.96$}{nonexistent}{$5$}

  \item To three decimal places, $${L("1")}\dfrac{\ln x}{x-1}$ is
  \opts{$1.000$}{$0.000$}{$2.718$}{$0.368$}

  \item A function $h$ is continuous on $[1,4]$ with $h(1)=-2.3$ and $h(4)=1.7$. Which statement must be true?
  \optsv{$h$ is increasing on $[1,4]$.}{$h(2.5)=-0.3$.}{$h(c)=0$ for some $c$ in $(1,4)$.}{$h$ has exactly one zero in $(1,4)$.}
\end{enumerate}

\end{document}
`;

const KEY = HEAD("Unit 1 test: answer key") + r`
\wstitle{1.11}{Unit 1 Test: Answer Key}{${UNIT} \textperiodcentered{} 20 points}

\begin{scorebox}{Answers}
\begin{center}\renewcommand{\arraystretch}{1.3}
\begin{tabular}{|c|c|c|c|c|c|c|c|c|c|c|}\hline
Question & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10\\\hline
Answer & A & B & D & B & B & A & C & A & C & A\\\hline
Question & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20\\\hline
Answer & D & B & C & D & A & C & B & D & A & C\\\hline
\end{tabular}\end{center}
\end{scorebox}

\begin{solbox}
\begin{enumerate}[leftmargin=*,itemsep=3pt]
  \item $\dfrac{(x-2)(x+2)}{(x-2)(x+3)}=\dfrac{x+2}{x+3}\to\dfrac45$. \textbf{(A)} \hfill{\footnotesize Lesson 1.5}
  \item Both branches approach the open circle at height 0; the filled dot at height 2 is $q(-2)$. \textbf{(B)} \hfill{\footnotesize Lesson 1.2}
  \item The left-hand limit is 3 and the right-hand limit is 4, so the limit does not exist. \textbf{(D)} \hfill{\footnotesize Lesson 1.2}
  \item $\dfrac34\cdot\dfrac{\sin(3x)}{3x}\to\dfrac34$. \textbf{(B)} \hfill{\footnotesize Lesson 1.6}
  \item Equal degrees: $\dfrac62=3$. \textbf{(B)} \hfill{\footnotesize Lesson 1.9}
  \item $\sqrt{16x^2+3}=-x\sqrt{16+\tfrac{3}{x^2}}$ for $x<0$, so the limit is $\dfrac{-4}{2}=-2$. \textbf{(A)} \hfill{\footnotesize Lesson 1.9}
  \item $1+k=3+2k$ gives $k=-2$. \textbf{(C)} \hfill{\footnotesize Lesson 1.8}
  \item $\dfrac{(x-5)(x+5)}{(x-5)(x+1)}$: the factor cancels, and the limit $\tfrac{10}{6}$ exists. \textbf{(A)} \hfill{\footnotesize Lesson 1.7}
  \item The sign changes on $[0,2]$, $[2,5]$ and $[5,8]$: at least 3 zeros, by the Intermediate Value Theorem. \textbf{(C)} \hfill{\footnotesize Lesson 1.10}
  \item $\dfrac{\sqrt x-3}{(\sqrt x-3)(\sqrt x+3)}\to\dfrac16$. \textbf{(A)} \hfill{\footnotesize Lesson 1.5}
  \item $\dfrac{3(2)-(-1)^2}{2+(-1)}=\dfrac51=5$. \textbf{(D)} \hfill{\footnotesize Lesson 1.4}
  \item Both bounds tend to 4, so by the squeeze theorem the limit is 4. \textbf{(B)} \hfill{\footnotesize Lesson 1.6}
  \item Numerator near 4; denominator small and negative. \textbf{(C)} \hfill{\footnotesize Lesson 1.9}
  \item As $x\to1^+$, $q(x)=5-x\to4$ through values less than 4, and $${L("4^-", "u")}q(u)=5-4=1$. \textbf{(D)} \hfill{\footnotesize Lesson 1.2}
  \item $\dfrac{x-1}{(x-1)(x+1)}=\dfrac{1}{x+1}$ for $x\neq1$: a hole at $x=1$, an asymptote at $x=-1$. \textbf{(A)} \hfill{\footnotesize Lesson 1.7}
  \item A table at $x=\pm0.001$ gives $2.002$ and $1.998$. \textbf{(C)} \hfill{\footnotesize Lesson 1.3}
  \item A table at $x=\pm0.01$ gives $4.4997$. \textbf{(B)} \hfill{\footnotesize Lesson 1.3}
  \item The entries on both sides approach 5; $g(2)=1$ is the function value. \textbf{(D)} \hfill{\footnotesize Lesson 1.3}
  \item A table at $x=1\pm0.001$ gives $0.9995$ and $1.0005$. \textbf{(A)} \hfill{\footnotesize Lesson 1.3}
  \item $h$ is continuous and $h(1)<0<h(4)$, so the Intermediate Value Theorem gives a zero. It does not give uniqueness. \textbf{(C)} \hfill{\footnotesize Lesson 1.10}
\end{enumerate}
\end{solbox}

\begin{scorebox}{Using your score}
One point per question. 17 or more: ready to move on. 13 to 16: rework the lessons named beside the questions you missed, then try the online practice for those lessons. 12 or fewer: review the unit summary pages before continuing to Unit 2.
\end{scorebox}
\end{document}
`;

export default [];
export const documents = [
  { file: "1.11", tex: TEST },
  { file: "1.11-key", tex: KEY },
];
