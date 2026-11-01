// LINALG1 Worksheet 2.1 — Systems of Linear Equations
// Self-contained: complete notes (definitions, the 0/1/∞ theorem with proof, figures), 9 worked examples with
// figures, 13 practice problems at three levels, answer key.
import { gridT } from "./figT.mjs";
import { svgT } from "./figT.mjs";
import { S, def, thm, side } from "./wkit.mjs";
import { linesSvg, planesSvg, stairSvg } from "./fig2.mjs";
import { sys, am } from "../bank/la.mjs";
import { steps } from "../bank/la.mjs";

const F = (svg, w = 5.6) => svgT(svg, w);
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;
const V = (xmin, xmax, ymin, ymax) => ({ xmin, xmax, ymin, ymax });

// ── notes figures ──
const F_LINE = F(linesSvg([[2, 3, 6]], V(-1, 5, -1, 4), null), 5.2);
const F_CROSS = F(linesSvg([[1, 1, 5], [1, -2, -1]], V(-1, 6, -1, 6), [3, 2]), 5.2);
const F_PAR = F(linesSvg([[1, -1, 1], [1, -1, -2]], V(-1, 5, -1, 5)), 5.2);
const F_PLANES = F(planesSvg([[0, 0, 1, 1.5], [1, 0, 0, 1.5]], { center: [1.5, 1.5, 1.5], size: 1.4, len: 3.4, line: { p: [1.5, 1.5, 1.5], d: [0, 1, 0], t0: -1.4, t1: 1.4 } }), 5.6);
const F_TWO = F(linesSvg([[1, -2, -2], [-2, 4, 4]], V(-3, 5, -1, 4), null), 5.2);
const F_STAIR = F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "p", "*"]]), 4.2);

const NOTES = [
  { h: "1. Linear equations",
    lead: S`${def("linear equation", S`A \textbf{linear equation} in the unknowns $x_1,\dots,x_n$ has the form
\[a_1x_1+a_2x_2+\dots+a_nx_n=b,\]
where the \emph{coefficients} $a_1,\dots,a_n$ and the \emph{constant term} $b$ are real numbers.`)}
Every unknown appears to the first power and is multiplied only by a number. In $\mathbb R^2$ the graph of a linear equation (not both $a_i=0$) is a straight line, such as $2x_1+3x_2=6$ in the figure.`,
    fig: F_LINE, w: 0.56,
    body: S`\textbf{Not linear:} products of unknowns ($x_1x_2$), powers ($x_1^2$, $\sqrt{x_1}$), unknowns in a denominator ($1/x_1$), and functions of unknowns ($\sin x_1$, $e^{x_2}$, $|x_1|$). \textbf{Still linear:} any real coefficients, such as $\sqrt2\,x_1-\pi x_2=e$; unknowns on both sides, such as $x_1=3x_2-7$ (move everything to one side); and $\sin(\tfrac{\pi}{6})x_1$, since $\sin\tfrac{\pi}6=\tfrac12$ is just a number.` },

  { h: "2. Systems and their solutions",
    lead: S`${def("system, solution, consistency", S`A \textbf{system of linear equations} is a finite list of linear equations in the same unknowns. A vector $(s_1,\dots,s_n)$ is a \textbf{solution} if it satisfies \emph{every} equation. The set of all solutions is the \textbf{solution set}. The system is \textbf{consistent} if it has at least one solution and \textbf{inconsistent} if it has none.`)}
In $\mathbb R^2$, a solution is a point lying on every line. The lines $x_1+x_2=5$ and $x_1-2x_2=-1$ cross at $(3,2)$, the only solution.`,
    fig: F_CROSS, w: 0.56,
    body: S`\textbf{Checking a candidate.} Substitute it into each equation in turn. A vector that satisfies some equations but not all of them is \emph{not} a solution: $(1,4)$ satisfies $x_1+x_2=5$ but gives $1-8=-7\ne-1$ in the second equation.` },

  { h: "3. The three possibilities in the plane",
    lead: S`Two lines in $\mathbb R^2$ can
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{cross} once --- exactly one solution;
\item be \textbf{parallel} --- no solution (inconsistent): same slope, different intercepts, like $x_1-x_2=1$ and $x_1-x_2=-2$ in the figure;
\item \textbf{coincide} --- infinitely many solutions: one equation is a multiple of the other, e.g. $x_1-2x_2=-2$ and $-2x_1+4x_2=4$.
\end{itemize}
To tell parallel from coincident algebraically, compare the coefficients \emph{and} the constants: $x_1-x_2=1$ and $2x_1-2x_2=2$ coincide, while $2x_1-2x_2=3$ is parallel.`,
    fig: F_PAR, w: 0.56,
    body: side(S`\textbf{Infinitely many, written out.} When the lines coincide, choose $x_2=t$ freely and solve for $x_1$: for $x_1-2x_2=-2$, $x_1=2t-2$, so every solution is $(2t-2,\ t)=(-2,0)+t(2,1)$, $t\in\mathbb R$ --- one point of the line plus all multiples of a direction vector, exactly as in Worksheet 1.2.`, F_TWO, 0.56) },

  { h: "4. Equations in three unknowns: planes",
    lead: S`In $\mathbb R^3$ a linear equation $a_1x_1+a_2x_2+a_3x_3=b$ is a \textbf{plane} with normal $(a_1,a_2,a_3)$ (Worksheet 1.6), so a system asks where several planes meet:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item two planes: parallel (no solution), the same plane, or meeting in a \emph{line} (figure) --- never in a single point;
\item three planes: one common point, a common line, the same plane, or no common point at all.
\end{itemize}
In $\mathbb R^n$ an equation is a \emph{hyperplane}, and the same three outcomes are the only possibilities.`,
    fig: F_PLANES, w: 0.55 },

  { h: "5. Why never exactly two solutions",
    lead: thm("number of solutions", S`Every system of linear equations has either no solution, exactly one solution, or infinitely many solutions.`) + S`\pf{Suppose $\vec p\ne\vec q$ are solutions. Write equation $i$ as $\vec a_i\cdot\vec x=b_i$. For any real $t$,
\[\vec a_i\cdot\big((1-t)\vec p+t\vec q\big)=(1-t)\,\vec a_i\cdot\vec p+t\,\vec a_i\cdot\vec q=(1-t)b_i+tb_i=b_i.\]
So every point of the line through $\vec p$ and $\vec q$ is a solution, and different $t$ give different points.}`,
    body: S`\textbf{Consequence.} As soon as you find two different solutions, you know there are infinitely many, and the line through them consists of solutions. Geometrically: two lines (or planes) that share two points share the whole line through them.` },

  { h: "6. Triangular systems and back substitution",
    lead: S`A system is \textbf{triangular} (more precisely, in echelon shape) when each equation starts with a later unknown than the one above it. The pattern of coefficients is a staircase, with nonzero leading coefficients (the shaded squares) and zeros below them.

Such systems are solved from the bottom up by \textbf{back substitution}: the last equation gives the last unknown; substitute it into the equation above to get the next unknown; and so on.`,
    fig: F_STAIR, w: 0.6,
    body: S`\textbf{Example.} $2x_1-x_2+3x_3=9$, $3x_2-x_3=7$, $4x_3=8$: then $x_3=2$; $3x_2-2=7$ gives $x_2=3$; $2x_1-3+6=9$ gives $x_1=3$. The rest of the chapter shows how to bring \emph{every} system into this shape without changing its solutions.` },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "Which equations are linear?", q: S`Which of these are linear equations in $x_1,x_2,x_3$? (a) $4x_1-\tfrac13x_2=\sqrt7$ (b) $x_1+2x_2x_3=0$ (c) $e^{x_1}+x_2=1$ (d) $(\ln2)x_1+x_2=x_3$ (e) $|x_1|+x_2=3$ (f) $x_1=5$`,
    steps: [S`Test: after moving every unknown to the left, is each term a \emph{number} times \emph{one} unknown, and the right side a number?`,
      S`(a) $4x_1-\tfrac13x_2=\sqrt7$: the coefficients $4$, $-\tfrac13$ and the constant $\sqrt7$ are numbers --- linear.`,
      S`(d) $\ln2$ is a number; moving $x_3$ gives $(\ln2)x_1+x_2-x_3=0$ --- linear. (f) $x_1=5$ is $1x_1+0x_2+0x_3=5$ --- linear.`,
      S`(b) contains the product $x_2x_3$ of two unknowns; (c) applies the function $e^{(\cdot)}$ to an unknown; (e) applies the absolute value. None of these is a number times one unknown --- not linear.`],
    ans: S`(a), (d), (f) are linear; (b), (c), (e) are not` },
  { title: "Checking candidate solutions", q: S`Is $(2,1,3)$ a solution of $${sysT([[1, 2, -1, 1], [3, -1, 2, 11], [2, 1, 1, 8]])}$? Is $(1,2,4)$?`,
    fig: F(planesSvg([[1, 2, -1, 1], [3, -1, 2, 11], [2, 1, 1, 8]], { center: [2, 1, 3], size: 1.1, len: 3.5, point: [2, 1, 3] }), 5),
    steps: [S`\textbf{Matrix form.} The system is \(A\vec x=\vec b\) with \(A=${am([[1, 2, -1], [3, -1, 2], [2, 1, 1]], false)}\) and \(\vec b=${am([[1], [11], [8]], false)}\). A vector is a solution exactly when \(A\vec x=\vec b\) in \emph{every} entry.`,
      S`For \((2,1,3)\): \[A${am([[2], [1], [3]], false)}=${am([["1(2)+2(1)-1(3)"], ["3(2)-1(1)+2(3)"], ["2(2)+1(1)+1(3)"]], false)}=${am([[1], [11], [8]], false)}=\vec b\ \checkmark\]`,
      S`For \((1,2,4)\): \[A${am([[1], [2], [4]], false)}=${am([["1(1)+2(2)-1(4)"], ["3(1)-1(2)+2(4)"], ["2(1)+1(2)+1(4)"]], false)}=${am([[1], [9], [8]], false)}\ne${am([[1], [11], [8]], false)}.\] The second entry fails, so \((1,2,4)\) is not a solution.`],
    ans: S`$(2,1,3)$ is a solution; $(1,2,4)$ is not` },
  { title: "Two lines that cross", q: S`Solve $3x_1+2x_2=12$, $x_1-x_2=-1$ and interpret the answer geometrically.`,
    fig: F(linesSvg([[3, 2, 12], [1, -1, -1]], V(-1, 5, -1, 7), [2, 3])),
    steps: [...steps([[3, 2, 12], [1, -1, -1]], [
      [S`Bring the equation with leading coefficient 1 to the top.`, ["R1<->R2"]],
      [S`Eliminate \(x_1\) from row 2.`, ["R2-3R1"]],
      [S`Make the second pivot 1.`, ["R2*1/5"]],
      [S`Clear above the second pivot.`, ["R1+R2"]],
    ], { intro: "Write the augmented matrix" }).steps,
      S`So \(x_1=2\), \(x_2=3\). Check: \[${am([[3, 2], [1, -1]], false)}${am([[2], [3]], false)}=${am([["6+6"], ["2-3"]], false)}=${am([[12], [-1]], false)}\ \checkmark\]. Geometrically the two lines cross at exactly one point, \((2,3)\).`],
    ans: S`exactly one solution, $(2,3)$: the point where the two lines cross` },
  { title: "Parallel lines", q: S`Show that $2x_1-3x_2=6$, $-4x_1+6x_2=5$ has no solution.`,
    fig: F(linesSvg([[2, -3, 6], [-4, 6, 5]], V(-3, 5, -4, 3))),
    steps: [S`Multiply the first equation by $-2$: $-4x_1+6x_2=-12$.`,
      S`Add it to the second equation: \[\begin{array}{rcl}-4x_1+6x_2&=&5\\ -\,(-4x_1+6x_2)&=&-(-12)\\ \hline 0&=&17\end{array}\] A false statement: no pair $(x_1,x_2)$ can make the same left side equal both $-12$ and $5$.`,
      S`Geometrically, in slope form the lines are $x_2=\tfrac23x_1-2$ and $x_2=\tfrac23x_1+\tfrac56$: equal slopes, different intercepts --- parallel lines, no common point.`],
    ans: S`inconsistent --- no solution` },
  { title: "One line written twice", q: S`Solve $x_1+4x_2=2$, $3x_1+12x_2=6$.`,
    fig: F(linesSvg([[1, 4, 2], [3, 12, 6]], V(-3, 4, -1.5, 2), [2, 0], "t = 0")),
    steps: [...steps([[1, 4, 2], [3, 12, 6]], [
      [S`Eliminate \(x_1\) from row 2.`, ["R2-3R1"]],
    ], { intro: "Write the augmented matrix" }).steps,
      S`Row 2 became zero: the second equation was 3 times the first (the same line). One pivot, in column 1, so \(x_2=t\) is free and row 1 gives \(x_1=2-4t\).`,
      S`Every solution is \((2-4t,\ t)=(2,0)+t(-4,1)\). Check \(t=1\): \(${am([[1, 4], [3, 12]], false)}${am([[-2], [1]], false)}=${am([["-2+4"], ["-6+12"]], false)}=${am([[2], [6]], false)}\) \checkmark.`],
    ans: S`infinitely many: $(2-4t,\ t)=(2,0)+t(-4,1)$, $t\in\mathbb R$` },
  { title: "Three lines and a common point", q: S`Find $c$ so that $x_1+x_2=4$, $x_1-x_2=2$ and $x_1+2x_2=c$ have a common solution.`,
    fig: F(linesSvg([[1, 1, 4], [1, -1, 2], [1, 2, 5]], V(-1, 6, -2, 5), [3, 1])),
    steps: [S`Augmented matrix with \(c\) kept as a letter: \[${am([[1, 1, 4], [1, -1, 2], [1, 2, "c"]])}\]`,
      S`Clear column 1. Operations: \(R_2\to R_2-R_1,\ R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 1, 4], [0, -2, -2], [0, 1, "c-4"]])}\]`,
      S`Make the second pivot 1. Operation: \(R_2\to-\tfrac12R_2\). \[\longrightarrow\ ${am([[1, 1, 4], [0, 1, 1], [0, 1, "c-4"]])}\]`,
      S`Clear column 2. Operations: \(R_3\to R_3-R_2,\ R_1\to R_1-R_2\). \[\longrightarrow\ ${am([[1, 0, 3], [0, 1, 1], [0, 0, "c-5"]])}\]`,
      S`Row 3 reads 0 equals \(c-5\): consistent only for \(c=5\), and then \(x_1=3\), \(x_2=1\). For any other \(c\) the three lines share no point. Check for \(c=5\): \(${am([[1, 1], [1, -1], [1, 2]], false)}${am([[3], [1]], false)}=${am([[4], [2], [5]], false)}\) \checkmark.`],
    ans: S`$c=5$, common solution $(3,1)$` },
  { title: "Back substitution with four unknowns", q: S`Solve $${sysT([[1, -1, 2, 1, 5], [0, 1, 1, -2, -1], [0, 0, 2, 1, 7], [0, 0, 0, 3, 3]])}$.`,
    fig: F(stairSvg([["p", "*", "*", "*", "*"], ["0", "p", "*", "*", "*"], ["0", "0", "p", "*", "*"], ["0", "0", "0", "p", "*"]]), 4),
    steps: [...steps([[1, -1, 2, 1, 5], [0, 1, 1, -2, -1], [0, 0, 2, 1, 7], [0, 0, 0, 3, 3]], [
      [S`The matrix is triangular: work from the bottom up. Make the last pivot 1 (\(x_4=1\)).`, ["R4*1/3"]],
      [S`Clear column 4 above it — this substitutes \(x_4=1\) into the rows above.`, ["R3-R4", "R2+2R4", "R1-R4"]],
      [S`Make the third pivot 1 (\(x_3=3\)).`, ["R3*1/2"]],
      [S`Clear column 3 above it.`, ["R2-R3", "R1-2R3"]],
      [S`Clear column 2 above its pivot.`, ["R1+R2"]],
    ], { intro: "Write the augmented matrix" }).steps,
      S`Read the RREF: \(x_1=-4\), \(x_2=-2\), \(x_3=3\), \(x_4=1\). Check: \[${am([[1, -1, 2, 1], [0, 1, 1, -2], [0, 0, 2, 1], [0, 0, 0, 3]], false)}${am([[-4], [-2], [3], [1]], false)}=${am([["-4+2+6+1"], ["-2+3-2"], ["6+1"], [3]], false)}=${am([[5], [-1], [7], [3]], false)}\ \checkmark\].`],
    ans: S`$(x_1,x_2,x_3,x_4)=(-4,-2,3,1)$` },
  { title: "Two planes meet in a line", q: S`Describe the solution set of $x_1+x_2+x_3=4$, $x_1-x_3=0$.`,
    fig: F(planesSvg([[1, 1, 1, 4], [1, 0, -1, 0]], { center: [1, 2, 1], size: 1.5, len: 3.5, line: { p: [0, 4, 0], d: [1, -2, 1], t0: -0.2, t1: 2.2 } }), 5),
    steps: [...steps([[1, 1, 1, 4], [1, 0, -1, 0]], [
      [S`Eliminate \(x_1\) from row 2.`, ["R2-R1"]],
      [S`Make the second pivot 1.`, ["R2*-1"]],
      [S`Clear above it.`, ["R1-R2"]],
    ], { intro: "Write the augmented matrix" }).steps,
      S`Column 3 has no pivot: \(x_3=t\) is free. The rows give \(x_1=t\) and \(x_2=4-2t\): \[\vec x=${am([["t"], ["4-2t"], ["t"]], false)}=${am([[0], [4], [0]], false)}+t${am([[1], [-2], [1]], false)},\] the line where the two planes meet.`,
      S`Check \(t=1\): \(${am([[1, 1, 1], [1, 0, -1]], false)}${am([[1], [2], [1]], false)}=${am([["1+2+1"], ["1-1"]], false)}=${am([[4], [0]], false)}\) \checkmark.`],
    ans: S`the line $(0,4,0)+t(1,-2,1)$: infinitely many solutions` },
  { title: "A parameter decides", q: S`For which $k$ does $kx_1+x_2=1$, $x_1+kx_2=1$ have no solution, exactly one, or infinitely many?`,
    fig: F(linesSvg([[-1, 1, 1], [1, -1, 1]], V(-3, 3, -3, 3)), 4.6),
    steps: [S`Eliminate $x_1$: subtract $k$ times the second equation from the first. \[\begin{array}{rcl}kx_1+x_2&=&1\\ -\,(kx_1+k^2x_2)&=&-k\\ \hline (1-k^2)x_2&=&1-k\end{array}\]`,
      S`$k=1$: the new equation is $0=0$, and both original equations are $x_1+x_2=1$ --- the same line, infinitely many solutions.`,
      S`$k=-1$: the new equation is $0=2$ --- no solution. The lines $-x_1+x_2=1$ and $x_1-x_2=1$ are parallel (figure).`,
      S`$k\ne\pm1$: divide by $1-k^2=(1-k)(1+k)$: $x_2=\dfrac{1-k}{(1-k)(1+k)}=\dfrac1{1+k}$. By symmetry of the system, $x_1=\dfrac1{1+k}$ too --- exactly one solution. Check: $\dfrac{k}{1+k}+\dfrac1{1+k}=1$ \checkmark.`],
    ans: S`$k=1$: infinitely many; $k=-1$: none; otherwise one, $x_1=x_2=\tfrac1{1+k}$` },
];

const PROBLEMS = [
  { level: 1, q: S`Is $(3,-1,2)$ a solution of $x_1+x_2+x_3=4$, $2x_1-x_3=4$?`, ans: S`Yes: $3-1+2=4$ and $6-2=4$` },
  { level: 1, q: S`Which are linear in $x_1,x_2$: (a) $2x_1-\sqrt3\,x_2=0$ (b) $x_1x_2=1$ (c) $x_1=3x_2-7$ (d) $\tfrac1{x_1}=2$?`, ans: S`(a) and (c)` },
  { level: 1, q: S`Solve by back substitution: $2x_1+x_2-x_3=3$, $3x_2+x_3=5$, $2x_3=4$.`, ans: S`$(2,1,2)$`,
    sol: [S`Equation 3: $2x_3=4$, so $x_3=2$.`, S`Equation 2: $3x_2+2=5$, so $x_2=1$.`, S`Equation 1: $2x_1+1-2=3$, so $x_1=2$. Check: $4+1-2=3$ \checkmark.`] },
  { level: 2, space: 4, q: S`Solve $x_1+2x_2=7$, $2x_1-x_2=-1$ and draw both lines.`, ans: S`$(1,3)$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -2, ymax: 6 }),
    sol: [S`From equation 2: $x_2=2x_1+1$. Substitute: $x_1+2(2x_1+1)=7$, so $5x_1=5$, $x_1=1$, and $x_2=3$.`,
      S`Lines: $x_1+2x_2=7$ through $(7,0)$ and $(1,3)$; $2x_1-x_2=-1$ through $(0,1)$ and $(1,3)$. They cross at $(1,3)$. Check: $1+6=7$ \checkmark,\ $2-3=-1$ \checkmark.`] },
  { level: 2, space: 4, q: S`Without solving, decide how many solutions each system has, and sketch (a): (a) $3x_1-x_2=2$, $-6x_1+2x_2=-4$; (b) $3x_1-x_2=2$, $-6x_1+2x_2=1$.`, ans: S`(a) infinitely many (same line); (b) none (parallel)`, fig: gridT({ xmin: -3, xmax: 4, ymin: -4, ymax: 4 }),
    sol: [S`$-2$ times the first equation is $-6x_1+2x_2=-4$.`, S`(a) The second equation is exactly that: the same line $x_2=3x_1-2$ (through $(0,-2)$ and $(1,1)$), infinitely many solutions.`, S`(b) Same left side but constant $1\ne-4$: parallel lines, no solution.`] },
  { level: 2, q: S`Describe all solutions of $x_1+2x_2-x_3=4$, $x_2+x_3=1$ in vector form.`, ans: S`$(2,1,0)+t(3,-1,1)$`,
    sol: [S`Let $x_3=t$. Equation 2: $x_2=1-t$. Equation 1: $x_1=4-2x_2+x_3=4-2+2t+t=2+3t$.`, S`$\vec x=(2+3t,\,1-t,\,t)=(2,1,0)+t(3,-1,1)$. Check $t=1$, $(5,0,1)$: $5-1=4$ \checkmark,\ $0+1=1$ \checkmark.`] },
  { level: 2, q: S`Find $a$ and $b$ so that $(1,2)$ solves $ax_1+bx_2=8$ and $bx_1-ax_2=-1$.`, ans: S`$a=2$, $b=3$`,
    sol: [S`Substituting $(1,2)$ gives a linear system in $a,b$: $a+2b=8$ and $b-2a=-1$.`, S`From the second, $b=2a-1$; then $a+4a-2=8$, so $a=2$ and $b=3$. Check: $2+6=8$ \checkmark,\ $3-4=-1$ \checkmark.`] },
  { level: 2, space: 4, q: S`Find $c$ so that the lines $x_1+x_2=3$, $2x_1-x_2=0$ and $x_1+cx_2=5$ meet in one point. Draw all three.`, ans: S`$c=2$; common point $(1,2)$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -2, ymax: 5 }),
    sol: [S`Add the first two: $3x_1=3$, so $x_1=1$, $x_2=2$.`, S`The third line must pass through $(1,2)$: $1+2c=5$, so $c=2$.`] },
  { level: 3, space: 5, q: S`For which $h$ and $k$ does $x_1+hx_2=3$, $2x_1+4x_2=k$ have (a) exactly one solution, (b) no solution, (c) infinitely many?`, ans: S`(a) $h\ne2$; (b) $h=2$, $k\ne6$; (c) $h=2$, $k=6$`,
    sol: [S`Subtract twice the first equation from the second: \[\begin{array}{rcl}2x_1+4x_2&=&k\\ -\,(2x_1+2hx_2)&=&-6\\ \hline (4-2h)x_2&=&k-6\end{array}\]`,
      S`(a) $h\ne2$: $x_2=\dfrac{k-6}{4-2h}$ and then $x_1$ --- one solution. (b) $h=2$, $k\ne6$: $0=k-6\ne0$ --- none. (c) $h=2$, $k=6$: $0=0$, the two equations describe the same line --- infinitely many.`] },
  { level: 3, space: 5, q: S`$\vec p\ne\vec q$ both solve a linear system. Prove that $\tfrac12(\vec p+\vec q)$ and $2\vec p-\vec q$ are solutions too. Are $\vec p+\vec q$ and $2\vec p$ solutions?`, ans: S`Both are $(1-t)\vec p+t\vec q$ with $t=\tfrac12$ and $t=-1$; $\vec p+\vec q$ and $2\vec p$ give $2b_i$, so only if every $b_i=0$`,
    sol: [S`Take equation $i$: $a_{i1}x_1+\dots+a_{in}x_n=b_i$. For $\vec x=(1-t)\vec p+t\vec q$ the left side is $(1-t)(\text{value at }\vec p)+t(\text{value at }\vec q)=(1-t)b_i+tb_i=b_i$. So every such $\vec x$ is a solution.`,
      S`$t=\tfrac12$ gives $\tfrac12(\vec p+\vec q)$; $t=-1$ gives $2\vec p-\vec q$.`,
      S`For $\vec p+\vec q$ or $2\vec p$ the left side is $b_i+b_i=2b_i$, which equals $b_i$ only if $b_i=0$. So they are solutions only when every $b_i=0$.`] },
  { level: 3, space: 5, q: S`Show that the planes $x_1+x_2=0$, $x_2+x_3=0$, $x_1-x_3=1$ have no common point although no two of them are parallel. What do they look like together?`, ans: S`Equation 1 minus equation 2 gives $x_1-x_3=0$, contradicting the third; the normals are pairwise non-parallel: the three planes meet in pairs along three parallel lines (a triangular prism)`,
    fig: F(planesSvg([[1, 1, 0, 0], [0, 1, 1, 0], [1, 0, -1, 1]], { center: [0.5, 0, 0.5], size: 1.3, len: 3 }), 4.4),
    sol: [S`Equation 1 minus equation 2: $(x_1+x_2)-(x_2+x_3)=0$, i.e. $x_1-x_3=0$. Equation 3 says $x_1-x_3=1$. Both cannot hold: no common point.`,
      S`Normals $(1,1,0)$, $(0,1,1)$, $(1,0,-1)$: no two are multiples of each other, so no two planes are parallel; each pair meets in a line.`,
      S`All three lines have direction $(1,-1,1)$ (it is orthogonal to all three normals), so they are parallel: the planes form a triangular prism.`] },
  { level: 3, space: 5, q: S`A linear system has the solutions $(1,0,2)$ and $(3,4,-2)$. Find a third solution and describe infinitely many.`, ans: S`e.g. $(2,2,0)$; all $(1,0,2)+t(2,4,-4)$`,
    sol: [S`By Problem 10, every $(1-t)\vec p+t\vec q=\vec p+t(\vec q-\vec p)$ is a solution.`, S`$\vec q-\vec p=(2,4,-4)$, so $(1,0,2)+t(2,4,-4)$ are solutions for all $t$; $t=\tfrac12$ gives the midpoint $(2,2,0)$.`] },
  { level: 3, space: 5, q: S`A café sold 120 coffees, small at \$2 and large at \$3, for \$290 in total. Write a system and find how many of each were sold. Could the total have been \$400?`, ans: S`$x+y=120$, $2x+3y=290$: 70 small, 50 large; \$400 would need $y=160>120$ and $x<0$ --- impossible`,
    sol: [S`$x$ small, $y$ large: $x+y=120$ (cups) and $2x+3y=290$ (dollars).`, S`Subtract twice the first from the second: $y=290-240=50$; then $x=70$. Check: $140+150=290$ \checkmark.`, S`With \$400: $y=400-240=160$ and $x=120-160=-40<0$ --- impossible.`] },
];

export const WS = {
  code: "2.1",
  title: "Systems of Linear Equations",
  bigideas: S`A \textbf{system of linear equations} asks for the vectors that satisfy several linear equations at once. Geometrically each equation is a line (in $\mathbb R^2$), a plane (in $\mathbb R^3$) or a hyperplane, and the solutions are the points common to all of them. That picture explains the central fact of the chapter: a linear system has \textbf{no solution, exactly one, or infinitely many} --- two solutions always force a whole line of them. Triangular systems are solved by back substitution, and the rest of the chapter reduces every system to that shape.`,
  goals: ["Recognise linear equations and check whether a vector solves a system.", "Interpret systems geometrically as intersecting lines and planes.", "Explain and prove why a system has 0, 1 or infinitely many solutions.", "Solve triangular systems by back substitution and write infinitely many solutions with a parameter.", "Find parameter values that change the number of solutions."],
  curriculum: "Systems of linear equations — solutions, consistency and geometry",
  vocab: [["Linear equation", "$a_1x_1+\\dots+a_nx_n=b$"], ["Solution", "a vector satisfying every equation"], ["Consistent", "at least one solution"], ["Inconsistent", "no solution"], ["Back substitution", "solving a triangular system from the last equation up"]],
  hook: S`A school sells adult tickets at \$8 and student tickets at \$5. Tonight 200 tickets brought in \$1270. How many of each were sold? Could a different mix of 200 tickets give the same total? Write two equations and think about two lines.`,
  concepts: NOTES,
  summary: [
    S`Linear: unknowns to the first power, times constants; a system = several linear equations in the same unknowns.`,
    S`A solution satisfies \emph{every} equation; consistent = at least one solution.`,
    S`In $\mathbb R^2$: lines cross (one), are parallel (none) or coincide (infinitely many); in $\mathbb R^3$ planes.`,
    S`Theorem: 0, 1 or infinitely many solutions; two solutions $\vec p,\vec q$ give all $(1-t)\vec p+t\vec q$.`,
    S`Triangular (staircase) systems: back substitution from the last equation up.`,
  ],
  tips: ["Check a candidate in \\emph{every} equation.", "Products and powers of unknowns are not linear, but any real number is allowed as a coefficient.", "Parallel versus coincident: compare the constants as well as the coefficients.", "Two planes in $\\mathbb R^3$ never meet in exactly one point.", "In back substitution, substitute every value already found before solving the next equation.", "Write infinitely many solutions with a parameter and check one of them."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
