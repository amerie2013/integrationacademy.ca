// LINALG1 Worksheet 2.5 — Rank and the Number of Solutions
// Self-contained: complete notes (rank, its bounds, the rank theorem with proof, wide / tall / square systems,
// consistency conditions on b, parameters), 9 worked examples with figures, 13 practice problems, answer key.
import { gridT, svgT } from "./figT.mjs";
import { S, def, thm, side } from "./wkit.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg, flowSvg } from "./fig2.mjs";
import { sys, am, steps } from "../bank/la.mjs";

const F = (svg, w = 5.2) => svgT(svg, w);
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;
const V = (xmin, xmax, ymin, ymax) => ({ xmin, xmax, ymin, ymax });

// ── notes figures ──
const F_RANK = F(stairSvg([["p", "*", "*", "*", "*"], ["0", "0", "p", "*", "*"], ["0", "0", "0", "0", "0"], ["0", "0", "0", "0", "0"]], false), 4.4);
const F_TREE = F(flowSvg([["rank A < rank [A | b]", "→ no solution", "red"], ["rank A = rank [A | b] = n", "→ exactly one solution", "green"], ["rank A = rank [A | b] = r < n", "→ infinitely many, n − r parameters", "blue"], ["rank A = m (pivot in every row)", "→ consistent for every b", "amber"]], 330), 5.8);
const F_SHAPES = F(stairSvg([["p", "*", "*", "*", "*"], ["0", "p", "*", "*", "*"]], false), 3.6) + F(stairSvg([["p", "*"], ["0", "p"], ["0", "0"], ["0", "0"]], false), 1.8);
const F_COND = F(linesSvg([[1, -1, 1], [2, 1, 3], [1, 2, 2]], V(-1, 3, -1, 2.5), [4 / 3, 1 / 3], "(4/3, 1/3)"), 5);
const F_PAR = F(stairSvg([["1", "2", "3", "*"], ["0", "k−4", "0", "*"], ["0", "0", "k−5", "*"]]), 3.8);

const NOTES = [
  { h: "1. The rank of a matrix",
    lead: S`${def("rank", S`The \textbf{rank} of a matrix $A$, written $\operatorname{rank}A$, is the number of leading entries (pivots) in a row echelon form of $A$.`)}
Because all REFs of $A$ have their pivots in the same positions (they reduce to the same RREF), the rank does not depend on the row operations used. The figure shows an REF with rank 2.

Each row and each column holds at most one pivot, so for an $m\times n$ matrix
\[\operatorname{rank}A\le\min(m,n).\]`,
    fig: F_RANK, w: 0.58,
    body: S`\textbf{Augmenting adds at most one pivot.} Reducing $[A\mid\vec b]$ reduces $A$ at the same time, and the extra column can hold at most one new pivot, so
\[\operatorname{rank}A\le\operatorname{rank}[A\mid\vec b]\le\operatorname{rank}A+1.\]
The second rank is larger exactly when the last column holds a pivot --- a row $[\,0\cdots0\mid c\,]$, $c\ne0$.` },

  { h: "2. The rank theorem",
    lead: thm("rank theorem", S`Let $A\vec x=\vec b$ be $m$ equations in $n$ unknowns.
\begin{enumerate}[leftmargin=*,itemsep=0pt]
\item Inconsistent $\iff\operatorname{rank}A<\operatorname{rank}[A\mid\vec b]$.
\item Exactly one solution $\iff\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=n$.
\item Infinitely many $\iff\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]<n$; the general solution then has $n-\operatorname{rank}A$ parameters.
\item Consistent for \emph{every} $\vec b\in\mathbb R^m\iff\operatorname{rank}A=m$.
\end{enumerate}`),
    fig: F_TREE, w: 0.5,
    body: S`\pf{(1) The ranks differ exactly when the RREF has a row $[0\cdots0\mid1]$ (Section 1). (2)--(3) Otherwise the system is consistent; the $\operatorname{rank}A$ pivot columns give basic variables and the remaining $n-\operatorname{rank}A$ columns give free variables. (4) If every row of the RREF of $A$ has a pivot, no row $[0\cdots0\mid c]$ can occur. If some row of the RREF of $A$ is zero, choose $\vec b$ so that the constant in that row becomes 1 (start from $[\,\text{RREF}\mid\vec e_m\,]$ and undo the row operations); that system is inconsistent.}` },

  { h: "3. Wide, tall and square systems",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Wide} ($m<n$, left figure): $\operatorname{rank}A\le m<n$, so at least $n-m$ variables are free. Never exactly one solution: none or infinitely many.
\item \textbf{Tall} ($m>n$, right figure): $\operatorname{rank}A\le n<m$, so some row of the RREF of $A$ is zero and some right-hand sides make the system inconsistent.
\item \textbf{Square} ($m=n$): $\operatorname{rank}A=n$ gives exactly one solution for \emph{every} $\vec b$; $\operatorname{rank}A<n$ gives none or infinitely many, depending on $\vec b$.
\end{itemize}`,
    fig: F_SHAPES, w: 0.6,
    body: S`\textbf{Caution.} "More unknowns than equations" does not guarantee a solution --- $x_1+x_2+x_3=1$, $x_1+x_2+x_3=2$ has none. It only rules out a \emph{unique} one.` },

  { h: "4. Which right-hand sides work?",
    lead: S`When $\operatorname{rank}A<m$, reduce $[A\mid\vec b]$ with $\vec b=(b_1,\dots,b_m)$ left as letters. Every zero row of the reduced $A$ ends in an expression in the $b_i$; the system is consistent exactly when all those expressions are 0. These are the \textbf{consistency conditions}.

\textbf{Example.} For $A=${am([[1, -1], [2, 1], [1, 2]], false)}$ the reduction ends with $[\,0\ 0\mid b_1-b_2+b_3\,]$, so $A\vec x=\vec b$ is consistent iff $b_1-b_2+b_3=0$. With $\vec b=(1,3,2)$ the three lines pass through one point (figure); change $b_3$ and they no longer do.`,
    fig: F_COND, w: 0.56 },

  { h: "5. Rank with a parameter",
    lead: S`If entries depend on a parameter, the rank can drop at special values. Eliminate keeping the parameter, and look for the entries that can vanish. For $${am([[1, 2, 3], [2, "k", 6], [3, 6, "k+4"]], false)}$ the reduction gives the pattern in the figure, so
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $k\ne4,5$: rank 3;
\item $k=4$ or $k=5$: rank 2.
\end{itemize}
For a system, combine this with the last column to decide between none and infinitely many (Example 6).`,
    fig: F_PAR, w: 0.6 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "Rank of a 4 × 4 matrix", q: S`Find the rank of $A=${am([[1, 2, 0, 1], [2, 4, 1, 3], [3, 6, 1, 4], [1, 2, 1, 2]], false)}$.`,
    fig: F(matSvg([[1, 2, 0, 1], [0, 0, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0], [1, 2]], false), 3.8),
    steps: [
      ...steps([[1, 2, 0, 1], [2, 4, 1, 3], [3, 6, 1, 4], [1, 2, 1, 2]], [
        [S`The rank is the number of pivots in an REF. Column 1: clear rows 2, 3, 4.`, ["R2-2R1", "R3-3R1", "R4-R1"]],
        [S`Column 2 is now zero below row 1 (no pivot). Column 3: the pivot is the $1$ in row 2; clear rows 3 and 4.`, ["R3-R2", "R4-R2"]],
      ], { bar: false, intro: "Start from the matrix" }).steps,
      S`REF reached: two nonzero rows, pivots in columns 1 and 3. So $\operatorname{rank}A=2$. (Rows 3 and 4 of $A$ were combinations of rows 1 and 2: row 3 $=$ row 1 $+$ row 2, row 4 $=$ row 2 $-$ row 1.)`],
    ans: S`$\operatorname{rank}A=2$` },
  { title: "Classify, then solve", q: S`Use ranks to classify $${sysT([[1, 2, -1, 1], [2, 3, 1, 4], [3, 5, 0, 5]])}$, then solve it.`,
    fig: F(planesSvg([[1, 2, -1, 1], [2, 3, 1, 4], [3, 5, 0, 5]], { center: [2.5, -0.5, 0.5], size: 1, len: 3.5, line: { p: [5, -2, 0], d: [-5, 3, 1], t0: 0.4, t1: 1 } }), 4.4),
    steps: [
      ...steps([[1, 2, -1, 1], [2, 3, 1, 4], [3, 5, 0, 5]], [
        [S`Column 1: clear the $2$ and the $3$.`, ["R2-2R1", "R3-3R1"]],
        [S`Column 2: rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      ]).steps,
      S`Count pivots: the coefficient part has 2 (columns 1, 2), and the constant column has none, so $\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=2$. Equal ranks: consistent. $2<n=3$: infinitely many solutions with $3-2=1$ parameter.`,
      S`Solve: $x_3=t$. Row 2: $-x_2+3x_3=2$, so $x_2=-2+3t$. Row 1: $x_1=1-2x_2+x_3=1+4-6t+t=5-5t$.`,
      S`$\vec x=(5,-2,0)+t(-5,3,1)$. Check $t=0$: $5-4=1$ \checkmark,\ $10-6=4$ \checkmark,\ $15-10=5$ \checkmark.`],
    ans: S`$(5,-2,0)+t(-5,3,1)$` },
  { title: "Counting parameters first", q: S`How many parameters does the general solution of $${sysT([[1, -1, 2, 0, 1, 3], [2, -2, 5, 1, 1, 8], [-1, 1, -1, 1, -2, -1]])}$ have? Find it.`,
    fig: F(stairSvg([["1", "*", "0", "*", "*", "*"], ["0", "0", "1", "*", "*", "*"], ["0", "0", "0", "0", "0", "0"]]), 4.2),
    steps: [
      ...steps([[1, -1, 2, 0, 1, 3], [2, -2, 5, 1, 1, 8], [-1, 1, -1, 1, -2, -1]], [
        [S`Column 1: clear rows 2 and 3. Column 2 becomes zero below row 1.`, ["R2-2R1", "R3+R1"]],
        [S`Column 3: the pivot is the $1$ in row 2; rows 2 and 3 are equal, subtract.`, ["R3-R2"]],
      ]).steps,
      S`Ranks: 2 pivots, none in the constant column, so $\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=2$, with $n=5$ unknowns: $5-2=3$ parameters.`,
      ...steps([[1, -1, 2, 0, 1, 3], [0, 0, 1, 1, -1, 2], [0, 0, 0, 0, 0, 0]], [
        [S`To solve, finish the RREF: clear the $2$ above the pivot of column 3.`, ["R1-2R2"]],
      ]).steps.slice(1),
      S`Free $x_2=s$, $x_4=t$, $x_5=u$. Row 1: $x_1=-1+s+2t-3u$. Row 2: $x_3=2-t+u$. Check $s=t=u=0$, $(-1,0,2,0,0)$: $-1+4=3$ \checkmark,\ $-2+10=8$ \checkmark,\ $1-2=-1$ \checkmark.`],
    ans: S`3 parameters: $(-1,0,2,0,0)+s(1,1,0,0,0)+t(2,0,-1,1,0)+u(-3,0,1,0,1)$` },
  { title: "A consistency condition", q: S`For $A=${am([[1, -1], [2, 1], [1, 2]], false)}$, find the condition on $\vec b$ for $A\vec x=\vec b$ to be consistent, and solve it for $\vec b=(1,3,2)$.`,
    fig: F_COND,
    steps: [S`Augment with a general $\vec b=(b_1,b_2,b_3)$: \[${am([[1, -1, "b_1"], [2, 1, "b_2"], [1, 2, "b_3"]])}\]`,
      S`Column 1. Operations: $R_2\to R_2-2R_1,\ R_3\to R_3-R_1$. \[\longrightarrow\ ${am([[1, -1, "b_1"], [0, 3, "b_2-2b_1"], [0, 3, "b_3-b_1"]])}\]`,
      S`Column 2. Operation: $R_3\to R_3-R_2$; the constant is $(b_3-b_1)-(b_2-2b_1)=b_1-b_2+b_3$. \[\longrightarrow\ ${am([[1, -1, "b_1"], [0, 3, "b_2-2b_1"], [0, 0, "b_1-b_2+b_3"]])}\]`,
      S`$\operatorname{rank}A=2$. Row 3 is $0=b_1-b_2+b_3$, so the system is consistent exactly when $b_1-b_2+b_3=0$ (otherwise $\operatorname{rank}[A\mid\vec b]=3$).`,
      S`For $\vec b=(1,3,2)$: $1-3+2=0$ \checkmark. Substituting into the last matrix: row 2: $3x_2=3-2=1$, so $x_2=\tfrac13$; row 1: $x_1=1+x_2=\tfrac43$.`,
      S`Check: $\tfrac43-\tfrac13=1$ \checkmark,\ $\tfrac83+\tfrac13=3$ \checkmark,\ $\tfrac43+\tfrac23=2$ \checkmark. The three lines meet at $\left(\tfrac43,\tfrac13\right)$ (figure).`],
    ans: S`$b_1-b_2+b_3=0$; $\left(\tfrac43,\tfrac13\right)$` },
  { title: "A square matrix of full rank", q: S`Show that $A\vec x=\vec b$ has exactly one solution for every $\vec b$ when $A=${am([[1, 2, 1], [0, 1, 1], [1, 0, 2]], false)}$.`,
    fig: F(stairSvg([["p", "*", "*"], ["0", "p", "*"], ["0", "0", "p"]], false), 2.8),
    steps: [
      ...steps([[1, 2, 1], [0, 1, 1], [1, 0, 2]], [
        [S`Column 1: clear the $1$ in row 3.`, ["R3-R1"]],
        [S`Column 2: clear the $-2$ below the pivot of row 2.`, ["R3+2R2"]],
      ], { bar: false, intro: "Reduce the coefficient matrix" }).steps,
      S`Three pivots: $\operatorname{rank}A=3$.`,
      S`$\operatorname{rank}A=m=3$ (a pivot in every row): no row of the REF of $A$ is zero, so a row $0=c$ can never appear --- consistent for every $\vec b$. $\operatorname{rank}A=n=3$ (a pivot in every column): no free variables --- the solution is unique.`],
    ans: S`$\operatorname{rank}A=3=m=n$: one solution for every $\vec b$` },
  { title: "Two special values", q: S`For which $k$ and $h$ does $${sysT([[1, 2, 3, 1], [2, "k", 6, 2], [3, 6, "k+4", "h"]])}$ have one solution, none, infinitely many?`,
    fig: F_PAR,
    steps: [S`Augmented matrix: \[${am([[1, 2, 3, 1], [2, "k", 6, 2], [3, 6, "k+4", "h"]])}\]`,
      S`Column 1. Operations: $R_2\to R_2-2R_1,\ R_3\to R_3-3R_1$ (entries $k-4$, $6-6=0$, $2-2=0$; $6-6=0$, $k+4-9=k-5$, $h-3$). \[\longrightarrow\ ${am([[1, 2, 3, 1], [0, "k-4", 0, 0], [0, 0, "k-5", "h-3"]])}\]`,
      S`$k\ne4$ and $k\ne5$: pivots $1$, $k-4$, $k-5$ in columns 1, 2, 3: rank $3=n$, one solution.`,
      S`$k=4$: \[${am([[1, 2, 3, 1], [0, 0, 0, 0], [0, 0, -1, "h-3"]])}\ \xrightarrow{R_2\leftrightarrow R_3}\ ${am([[1, 2, 3, 1], [0, 0, -1, "h-3"], [0, 0, 0, 0]])}\] Both ranks are 2 for every $h$: infinitely many solutions, $x_2$ free.`,
      S`$k=5$: \[${am([[1, 2, 3, 1], [0, 1, 0, 0], [0, 0, 0, "h-3"]])}\] If $h\ne3$, row 3 is $0=h-3\ne0$: none. If $h=3$, both ranks are 2: infinitely many, $x_3$ free.`],
    ans: S`$k\ne4,5$: one; $k=4$: infinitely many; $k=5$: none if $h\ne3$, infinitely many if $h=3$` },
  { title: "A wide system", q: S`Without solving, what can you say about $x_1+2x_2-x_3+x_4=3$, $2x_1+4x_2+x_3-x_4=6$? Then solve it.`,
    fig: F(stairSvg([["1", "2", "0", "0", "*"], ["0", "0", "1", "−1", "*"]]), 3.8),
    steps: [S`2 equations, 4 unknowns: $\operatorname{rank}A\le2<4$, so never exactly one solution. The left sides are not proportional, so $\operatorname{rank}A=2=m$: consistent for every right-hand side, with $4-2=2$ parameters.`,
      ...steps([[1, 2, -1, 1, 3], [2, 4, 1, -1, 6]], [
        [S`Now solve. Column 1: clear the $2$; column 2 has no pivot.`, ["R2-2R1"]],
        [S`Column 3: make the pivot $1$,`, ["R2*1/3"]],
        [S`and clear the $-1$ above it.`, ["R1+R2"]],
      ]).steps,
      S`Free $x_2=s$, $x_4=t$. Row 1: $x_1=3-2s$. Row 2: $x_3=x_4=t$. So $\vec x=(3,0,0,0)+s(-2,1,0,0)+t(0,0,1,1)$. Check $s=0,t=1$, $(3,0,1,1)$: $3-1+1=3$ \checkmark,\ $6+1-1=6$ \checkmark.`],
    ans: S`$(3,0,0,0)+s(-2,1,0,0)+t(0,0,1,1)$` },
  { title: "Augmenting raises the rank by at most one", q: S`Explain why $\operatorname{rank}[A\mid\vec b]\le\operatorname{rank}A+1$, and give $2\times2$ examples where the two ranks are equal and where they differ.`,
    fig: F(linesSvg([[1, 1, 1], [2, 2, 5]], V(-2, 3, -2, 3)), 4),
    steps: [S`The row operations that bring $[A\mid\vec b]$ to REF bring its left part $A$ to REF at the same time. Every pivot of $[A\mid\vec b]$ in the first $n$ columns is a pivot of $A$; only one more pivot is possible, in the last column. So $\operatorname{rank}[A\mid\vec b]\le\operatorname{rank}A+1$.`,
      ...steps([[1, 1, 1], [1, -1, 3]], [[S`Equal ranks. Clear the $1$ below the pivot.`, ["R2-R1"]]], { intro: "Example 1" }).steps,
      S`Pivots in columns 1 and 2, none after the bar: both ranks are 2 (one solution, $(2,-1)$).`,
      ...steps([[1, 1, 1], [2, 2, 5]], [[S`Different ranks. Clear the $2$ below the pivot.`, ["R2-2R1"]]], { intro: "Example 2" }).steps,
      S`$\operatorname{rank}A=1$ but the pivot $3$ after the bar makes $\operatorname{rank}[A\mid\vec b]=2$: no solution --- the parallel lines in the figure.`],
    ans: S`at most one extra pivot, in the last column` },
  { title: "When does a 2 × 2 matrix lose rank?", q: S`For which $t$ does $${am([[1, "t"], ["t", 4]], false)}$ have rank 1?`,
    fig: F(linesSvg([[1, 2, 0], [2, 4, 0]], V(-3, 3, -2, 2)), 3.8),
    steps: [S`Start: \[${am([[1, "t"], ["t", 4]], false)}\]`,
      S`Clear the $t$ below the pivot $1$: $(t,4)-t(1,t)=(0,\,4-t^2)$. Operation: $R_2\to R_2-tR_1$. \[\longrightarrow\ ${am([[1, "t"], [0, "4-t^2"]], false)}\]`,
      S`Row 1 always gives a pivot. Row 2 gives a second pivot unless $4-t^2=0$. So the rank is 1 exactly when $t=2$ or $t=-2$, and 2 otherwise.`,
      S`For $t=2$ the rows $(1,2)$ and $(2,4)$ are proportional: the lines $x_1+2x_2=0$ and $2x_1+4x_2=0$ coincide (figure).`],
    ans: S`$t=2$ or $t=-2$; otherwise rank 2` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the rank of $${am([[1, 2, 3, 4], [2, 4, 6, 8], [3, 5, 7, 9]], false)}$.`, ans: S`2`,
    sol: [...steps([[1, 2, 3, 4], [2, 4, 6, 8], [3, 5, 7, 9]], [
      [S`Column 1: clear rows 2 and 3.`, ["R2-2R1", "R3-3R1"]],
      [S`Move the zero row to the bottom.`, ["R2<->R3"]],
    ], { bar: false, intro: "Start from the matrix" }).steps,
      S`Two nonzero rows in REF: rank $2$.`] },
  { level: 1, q: S`$\operatorname{rank}A=3$, $\operatorname{rank}[A\mid\vec b]=3$, $n=5$. How many solutions, and how many parameters?`, ans: S`infinitely many; 2 parameters`,
    sol: [S`Equal ranks: consistent. $3<5$: there are $n-r=5-3=2$ free variables, so infinitely many solutions with 2 parameters.`] },
  { level: 1, q: S`What is the largest possible rank of a $3\times7$ matrix? Of a $7\times3$ matrix?`, ans: S`3 and 3`,
    sol: [S`Each pivot needs its own row and its own column, so $\operatorname{rank}\le\min(m,n)$: $\min(3,7)=3$ and $\min(7,3)=3$.`] },
  { level: 2, q: S`Use ranks to classify $${sysT([[1, 1, 2, 3], [2, 3, 5, 7], [1, 2, 3, 5]])}$.`, ans: S`$\operatorname{rank}A=2<\operatorname{rank}[A\mid\vec b]=3$: no solution`,
    fig: F(planesSvg([[1, 1, 2, 3], [2, 3, 5, 7], [1, 2, 3, 5]], { center: [1, 1, 0.5], size: 1, len: 3 }), 4),
    sol: [...steps([[1, 1, 2, 3], [2, 3, 5, 7], [1, 2, 3, 5]], [
      [S`Column 1: clear rows 2 and 3.`, ["R2-2R1", "R3-R1"]],
      [S`Column 2: subtract row 2 from row 3.`, ["R3-R2"]],
    ]).steps,
      S`The coefficient part has 2 pivots, but there is a third pivot after the bar ($0=1$): $\operatorname{rank}A=2<3=\operatorname{rank}[A\mid\vec b]$, so no solution.`] },
  { level: 2, q: S`Find the number of parameters and the general solution of $${sysT([[1, 2, 1, 0, 2], [2, 4, 3, 1, 7], [1, 2, 2, 1, 5]])}$.`, ans: S`2 parameters: $(-1,0,3,0)+s(-2,1,0,0)+t(1,0,-1,1)$`,
    sol: [...steps([[1, 2, 1, 0, 2], [2, 4, 3, 1, 7], [1, 2, 2, 1, 5]], [
      [S`Column 1: clear rows 2 and 3.`, ["R2-2R1", "R3-R1"]],
      [S`Column 3: rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      [S`Finish the RREF: clear above the pivot of column 3.`, ["R1-R2"]],
    ]).steps,
      S`Both ranks are 2, $n=4$: $4-2=2$ parameters. Free $x_2=s$, $x_4=t$: $x_1=-1-2s+t$, $x_3=3-t$.`,
      S`$\vec x=(-1,0,3,0)+s(-2,1,0,0)+t(1,0,-1,1)$. Check $s=t=0$: $-1+3=2$ \checkmark,\ $-2+9=7$ \checkmark,\ $-1+6=5$ \checkmark.`] },
  { level: 2, q: S`For $A=${am([[1, 2], [2, 3], [3, 5]], false)}$, find the condition on $\vec b$ for $A\vec x=\vec b$ to be consistent.`, ans: S`$b_1+b_2-b_3=0$`,
    fig: gridT({ xmin: -3, xmax: 3, ymin: -3, ymax: 3 }),
    sol: [S`Augment with $\vec b$: \[${am([[1, 2, "b_1"], [2, 3, "b_2"], [3, 5, "b_3"]])}\]`,
      S`Operations: $R_2\to R_2-2R_1,\ R_3\to R_3-3R_1$. \[\longrightarrow\ ${am([[1, 2, "b_1"], [0, -1, "b_2-2b_1"], [0, -1, "b_3-3b_1"]])}\]`,
      S`Operation: $R_3\to R_3-R_2$; constant $(b_3-3b_1)-(b_2-2b_1)=b_3-b_2-b_1$. \[\longrightarrow\ ${am([[1, 2, "b_1"], [0, -1, "b_2-2b_1"], [0, 0, "b_3-b_1-b_2"]])}\]`,
      S`Consistent exactly when the last constant is $0$: $b_1+b_2-b_3=0$. (Row 3 of $A$ is row 1 $+$ row 2, so $b_3$ must be $b_1+b_2$.)`] },
  { level: 2, q: S`For which $t$ is $${am([[1, 3], ["t", 6]], false)}$ of rank 1?`, ans: S`$t=2$`,
    sol: [S`Operation $R_2\to R_2-tR_1$: \[${am([[1, 3], ["t", 6]], false)}\ \longrightarrow\ ${am([[1, 3], [0, "6-3t"]], false)}\]`,
      S`Rank 1 exactly when $6-3t=0$, i.e. $t=2$ (then row 2 $=2\times$ row 1).`] },
  { level: 2, q: S`A $4\times4$ coefficient matrix has rank 4. How many solutions does $A\vec x=\vec b$ have, and why does the answer not depend on $\vec b$?`, ans: S`exactly one for every $\vec b$: rank $=m$ (always consistent) and rank $=n$ (no free variables)`,
    fig: F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "p", "*"], ["0", "0", "0", "p"]], false), 2.8),
    sol: [S`Rank $4=m$: every row of the REF of $A$ has a pivot, so no row $[\,0\ \cdots\ 0\mid c\,]$ can appear, whatever $\vec b$ is: always consistent.`,
      S`Rank $4=n$: every column has a pivot, so there are no free variables: at most one solution.`,
      S`Together: exactly one solution for every $\vec b$.`] },
  { level: 3, space: 5, q: S`For which $a$ and $b$ does $${sysT([[1, 1, 1, 2], [1, 2, "a", 3], [2, 3, 3, "b"]])}$ have one solution, none, infinitely many?`, ans: S`reduction ends with $(0,0,2-a\mid b-5)$: $a\ne2$ one; $a=2,b\ne5$ none; $a=2,b=5$ infinitely many`,
    sol: [S`Augmented matrix: \[${am([[1, 1, 1, 2], [1, 2, "a", 3], [2, 3, 3, "b"]])}\]`,
      S`Operations: $R_2\to R_2-R_1,\ R_3\to R_3-2R_1$. \[\longrightarrow\ ${am([[1, 1, 1, 2], [0, 1, "a-1", 1], [0, 1, 1, "b-4"]])}\]`,
      S`Operation: $R_3\to R_3-R_2$; entries $1-(a-1)=2-a$ and $(b-4)-1=b-5$. \[\longrightarrow\ ${am([[1, 1, 1, 2], [0, 1, "a-1", 1], [0, 0, "2-a", "b-5"]])}\]`,
      S`$a\ne2$: rank $3=n$, one solution. $a=2$, $b\ne5$: $\operatorname{rank}A=2<3$, none. $a=2$, $b=5$: both ranks 2, one parameter, infinitely many.`] },
  { level: 3, space: 5, q: S`Prove: if $m<n$ and $A\vec x=\vec b$ is consistent, it has infinitely many solutions.`, ans: S`$\operatorname{rank}A\le m<n$ leaves at least one free variable`,
    sol: [S`Each pivot uses its own row, so $r=\operatorname{rank}A\le m<n$.`,
      S`Consistent means $\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]$; the solutions then have $n-r\ge1$ free variables.`,
      S`Each value of a free variable gives a different solution, so there are infinitely many.`] },
  { level: 3, space: 5, q: S`Give an example of a $3\times2$ system that is consistent and one that is inconsistent, and explain with ranks why a $3\times2$ system cannot be consistent for every $\vec b$.`, ans: S`e.g. $x_1=1,x_2=1,x_1+x_2=2$ (consistent) and $\dots=3$ (inconsistent); $\operatorname{rank}A\le2<3=m$`,
    fig: gridT({ xmin: -1, xmax: 3, ymin: -1, ymax: 3 }),
    sol: [...steps([[1, 0, 1], [0, 1, 1], [1, 1, 2]], [[S`Consistent example: $x_1=1$, $x_2=1$, $x_1+x_2=2$.`, ["R3-R1", "R3-R2"]]]).steps,
      S`Zero last row: both ranks 2, solution $(1,1)$ --- three lines through one point.`,
      ...steps([[1, 0, 1], [0, 1, 1], [1, 1, 3]], [[S`Inconsistent example: change the last constant to $3$.`, ["R3-R1", "R3-R2"]]]).steps.slice(1),
      S`Row $0=1$: no solution. In general $\operatorname{rank}A\le2<3=m$, so the REF of $A$ always has a zero row, and a $\vec b$ that puts a nonzero constant there makes the system inconsistent.`] },
  { level: 3, space: 5, q: S`Show that $\operatorname{rank}A=\operatorname{rank}A'$ when $A'$ is obtained from $A$ by a row operation, and deduce that row-equivalent matrices have equal rank.`, ans: S`$A$ and $A'$ have the same RREF (row equivalence is transitive and the RREF is unique), hence the same number of pivots`,
    sol: [S`$A'\sim A$, and $A\sim R$ where $R$ is the RREF of $A$. By transitivity $A'\sim R$, so $R$ is also the RREF of $A'$ (the RREF is unique).`,
      S`The rank is the number of pivots of the RREF, so $\operatorname{rank}A'=\operatorname{rank}A$.`,
      S`Row-equivalent matrices are linked by a chain of single operations, each preserving the rank; hence they have equal rank.`] },
  { level: 3, space: 5, q: S`A factory makes 3 products from 2 raw materials; making $x_j$ units of product $j$ uses $A\vec x$ units of materials, where $A=${am([[1, 2, 1], [2, 1, 3]], false)}$. Can every supply vector $\vec b\in\mathbb R^2$ be used up exactly (ignoring signs)? Describe the production plans that use exactly $\vec b=(8,7)$.`, ans: S`yes, $\operatorname{rank}A=2=m$; $(2,3,0)+t(-\tfrac53,\tfrac13,1)$ (meaningful for $0\le t\le\tfrac65$)`,
    sol: [S`The rows $(1,2,1)$ and $(2,1,3)$ are not proportional, so $\operatorname{rank}A=2=m$: consistent for every $\vec b$.`,
      ...steps([[1, 2, 1, 8], [2, 1, 3, 7]], [
        [S`For $\vec b=(8,7)$: clear the $2$.`, ["R2-2R1"]],
        [S`Make the pivot $1$.`, ["R2*-1/3"]],
        [S`Clear above it.`, ["R1-2R2"]],
      ]).steps,
      S`$x_3=t$: $x_1=2-\tfrac53t$, $x_2=3+\tfrac13t$. Production amounts must be $\ge0$: $t\ge0$ and $2-\tfrac53t\ge0$, i.e. $0\le t\le\tfrac65$. Check $t=0$: $2+6=8$ \checkmark,\ $4+3=7$ \checkmark.`] },
];

export const WS = {
  code: "2.5",
  title: "Rank and the Number of Solutions",
  bigideas: S`The \textbf{rank} of a matrix is the number of pivots in an echelon form; it never depends on how you row reduce. Comparing three numbers --- $\operatorname{rank}A$, $\operatorname{rank}[A\mid\vec b]$ and the number of unknowns $n$ --- classifies every system: no solution, exactly one, or infinitely many with $n-\operatorname{rank}A$ parameters. And $\operatorname{rank}A=m$ is exactly the condition for $A\vec x=\vec b$ to be solvable for every right-hand side.`,
  goals: ["Compute ranks from echelon forms and use rank ≤ min(m, n).", "State, prove and apply the rank theorem.", "Count the parameters of a general solution before solving.", "Find consistency conditions on b, and decide solvability for every b.", "Analyse how the rank changes with a parameter."],
  curriculum: "Systems of linear equations — rank and the structure of the solution set",
  vocab: [["Rank", "number of pivots in an echelon form"], ["Full row rank", "rank $=m$"], ["Full column rank", "rank $=n$"], ["Parameters", "$n-\\operatorname{rank}A$ free variables"], ["Consistency condition", "equation in $\\vec b$ that must hold for a solution"]],
  hook: S`Without doing any arithmetic: can 3 equations in 5 unknowns have exactly one solution? Can 5 equations in 3 unknowns have a solution for every right-hand side? Decide, then read Section 3.`,
  concepts: NOTES,
  summary: [
    S`$\operatorname{rank}A$ = number of pivots; $\operatorname{rank}A\le\min(m,n)$; $\operatorname{rank}A\le\operatorname{rank}[A\mid\vec b]\le\operatorname{rank}A+1$.`,
    S`None $\iff\operatorname{rank}A<\operatorname{rank}[A\mid\vec b]$.`,
    S`One $\iff$ ranks equal $=n$; infinitely many $\iff$ ranks equal $<n$, with $n-\operatorname{rank}A$ parameters.`,
    S`Consistent for every $\vec b\iff\operatorname{rank}A=m$; otherwise find the consistency conditions.`,
    S`Wide systems are never uniquely solvable; tall systems are not solvable for every $\vec b$.`,
  ],
  tips: ["Count pivots \\emph{after} reducing.", "Compare rank $A$ with rank $[A\\mid\\vec b]$ --- one alone does not decide consistency.", "Parameters $=n-\\operatorname{rank}A$ (unknowns), not $m-\\operatorname{rank}A$.", "More unknowns than equations rules out uniqueness, not inconsistency.", "With parameters, list every value that makes a pivot vanish.", "A zero row of the reduced $A$ is only a problem if its constant is nonzero."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
