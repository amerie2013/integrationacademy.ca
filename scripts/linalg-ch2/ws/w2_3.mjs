// LINALG1 Worksheet 2.3 — Row Echelon Form and Reduced Row Echelon Form
// Self-contained: complete notes (REF, RREF, pivots, uniqueness, reading every solution, vector form), 9 worked
// examples with figures, 13 practice problems at three levels, answer key.
import { gridT, svgT } from "./figT.mjs";
import { S, def, thm, side } from "./wkit.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg, flowSvg } from "./fig2.mjs";
import { sys, am, steps } from "../bank/la.mjs";

const F = (svg, w = 5.2) => svgT(svg, w);
const V = (xmin, xmax, ymin, ymax) => ({ xmin, xmax, ymin, ymax });

// ── notes figures ──
const F_REF = F(stairSvg([["p", "*", "*", "*", "*", "*"], ["0", "0", "p", "*", "*", "*"], ["0", "0", "0", "p", "*", "*"], ["0", "0", "0", "0", "0", "0"]]), 5.4);
const F_RREF = F(stairSvg([["1", "*", "0", "0", "*", "*"], ["0", "0", "1", "0", "*", "*"], ["0", "0", "0", "1", "*", "*"], ["0", "0", "0", "0", "0", "0"]]), 5.4);
const F_TWO = F(matSvg([[2, 4, 6], [0, 1, 2]], [[0, 0], [1, 1]]), 3.4) + F(matSvg([[1, 3, 5], [0, -2, -4]], [[0, 0], [1, 1]]), 3.4);
const F_DECIDE = F(flowSvg([["Is there a row [0 … 0 | 1]?", "yes → no solution (inconsistent)", "red"], ["Is every unknown a pivot variable?", "yes → exactly one solution", "green"], ["Otherwise: some columns have no pivot", "free variables → infinitely many solutions", "blue"]], 330), 6);
const F_LINE = F(planesSvg([[1, 0, 2, 1], [0, 1, -1, 3]], { center: [0, 3, 0.5], size: 1.5, len: 4, line: { p: [1, 3, 0], d: [-2, 1, 1], t0: -0.6, t1: 1.3 } }), 5.2);

const NOTES = [
  { h: "1. Row echelon form",
    lead: S`${def("row echelon form (REF)", S`A matrix is in \textbf{row echelon form} if
(1) all zero rows are at the bottom, and
(2) the \emph{leading entry} (first nonzero entry) of each nonzero row lies strictly to the right of the leading entry of the row above it.`)}
It follows that every entry \emph{below} a leading entry is 0: the nonzero rows form a staircase. In the figure ■ is any nonzero number and $*$ any number at all.`,
    fig: F_REF, w: 0.5,
    body: S`The positions of the leading entries are the \textbf{pivot positions}; their columns are the \textbf{pivot columns} (columns 1, 3 and 4 in the figure). A staircase may step over a column (column 2 above): that column has no pivot.` },

  { h: "2. Reduced row echelon form",
    lead: S`${def("reduced row echelon form (RREF)", S`A matrix in REF is in \textbf{reduced row echelon form} if also
(3) every leading entry equals 1, and
(4) each leading 1 is the only nonzero entry in its column.`)}
Compared with REF, the pivots are 1 and their columns are cleared \emph{above} as well as below. Columns without a pivot may contain anything.`,
    fig: F_RREF, w: 0.5,
    body: thm("uniqueness of the RREF", S`Every matrix is row equivalent to exactly one matrix in reduced row echelon form.`) + S`
So "the" RREF of a matrix is well defined, and so are its pivot positions and the number of pivots (the \emph{rank}, Worksheet 2.5). The proof compares two RREFs column by column using the fact that row-equivalent matrices have the same solutions; we use the result without proof.` },

  { h: "3. REF is not unique",
    lead: S`Row echelon forms are \emph{not} unique: scaling a row, or choosing a different order of operations, gives a different REF. Both matrices in the figure are REFs of $${am([[2, 4, 6], [1, 3, 5]])}$ --- the first from $R_2\to R_2-\tfrac12R_1$, the second from $R_1\leftrightarrow R_2$ then $R_2\to R_2-2R_1$.

What \emph{is} the same in all of them: the pivot positions (circled). Continuing either one to the RREF gives the same matrix $${am([[1, 0, -1], [0, 1, 2]])}$.`,
    fig: F_TWO, w: 0.48 },

  { h: "4. Reading the solutions from the RREF",
    lead: S`Write the RREF of $[A\mid\vec b]$ as equations. Unknowns whose columns hold a pivot are \textbf{basic} (leading) variables; the others are \textbf{free} variables.

Then decide (figure):
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item a pivot in the last column, i.e. a row $[\,0\ \cdots\ 0\mid1\,]$: \textbf{no solution};
\item otherwise, no free variables: \textbf{exactly one} solution, read off the last column;
\item otherwise: \textbf{infinitely many}, one parameter per free variable.
\end{itemize}`,
    fig: F_DECIDE, w: 0.48,
    body: S`\textbf{The general solution.} Give each free variable its own parameter, then solve each nonzero row for its basic variable (each row contains exactly one basic variable). For example
\[${am([[1, 3, 0, -2, 5], [0, 0, 1, 4, -1], [0, 0, 0, 0, 0]])}\ \Rightarrow\ x_2=s,\ x_4=t,\ x_1=5-3s+2t,\ x_3=-1-4t.\]` },

  { h: "5. Vector form and its geometry",
    lead: S`Collect the constants and the coefficients of each parameter:
\[\vec x=\underbrace{\vec p}_{\text{free variables }=0}+s\,\vec v_1+t\,\vec v_2+\cdots\]
$\vec p$ is one particular solution, and each $\vec v_k$ comes from one free variable (it has a 1 in that variable's place and 0 in the other free places). Geometrically the solution set is a point, a line, a plane, \dots{} in $\mathbb R^n$.

The figure shows the RREF $${am([[1, 0, 2, 1], [0, 1, -1, 3]])}$: two planes meeting in the line $\vec x=(1,3,0)+t(-2,1,1)$.`,
    fig: F_LINE, w: 0.52,
    body: S`\textbf{Counting.} The number of free variables is (number of unknowns) $-$ (number of pivots in the coefficient part). With $n$ unknowns and $r$ pivots, a consistent system has $n-r$ parameters.` },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "REF, RREF, or neither?", q: S`Classify $P=${am([[1, 0, 0, 4], [0, 1, 0, -2], [0, 0, 1, 1]], false)}$, $Q=${am([[1, 2, 0, 3], [0, 0, 1, -1], [0, 1, 0, 2]], false)}$, $R=${am([[3, -1, 2], [0, 0, 5], [0, 0, 0]], false)}$, $T=${am([[1, 0, 4], [0, 1, -3], [0, 0, 0]], false)}$.`,
    fig: F(matSvg([[1, 2, 0, 3], [0, 0, 1, -1], [0, 1, 0, 2]], [[0, 0], [1, 2], [2, 1]], false), 4.2),
    steps: [S`Test each matrix against the REF rules (zero rows at the bottom; each leading entry strictly to the right of the one above) and then the two extra RREF rules (every leading entry is $1$; it is the only nonzero entry in its column).`,
      S`$P$: leading entries in columns 1, 2, 3, stepping right; all are $1$; each column holds only its pivot. RREF.`,
      S`$T$: leading $1$s in columns 1 and 2, the zero row is at the bottom, and columns 1 and 2 contain nothing else. RREF.`,
      S`$R$: leading entries $3$ (column 1) and $5$ (column 3) step right and the zero row is last, so it is REF. But the leading entries are not $1$ (and the $2$ above the $5$ is not cleared): REF only.`,
      S`$Q$: row 2 leads in column 3 but row 3 leads in column 2, \emph{left} of it (circled in the figure). The staircase goes backwards: neither. (Swapping rows 2 and 3 would fix it.)`],
    ans: S`$P$, $T$ RREF; $R$ REF only; $Q$ neither` },
  { title: "Five unknowns, two parameters", q: S`The RREF of a system is $${am([[1, -2, 0, 0, 3, 1], [0, 0, 1, 0, -1, 4], [0, 0, 0, 1, 2, -3]])}$. Write the general solution in vector form.`,
    fig: F(stairSvg([["1", "*", "0", "0", "*", "*"], ["0", "0", "1", "0", "*", "*"], ["0", "0", "0", "1", "*", "*"]]), 4.6),
    steps: [S`Find the pivots: the leading $1$s are in columns 1, 3 and 4, so $x_1,x_3,x_4$ are \textbf{basic}. Columns 2 and 5 have no pivot, so $x_2$ and $x_5$ are \textbf{free}: let $x_2=s$, $x_5=t$.`,
      S`Write each row as an equation and solve for its basic variable: \[\begin{aligned}x_1-2x_2+3x_5&=1 &&\Rightarrow& x_1&=1+2s-3t\\ x_3-x_5&=4 &&\Rightarrow& x_3&=4+t\\ x_4+2x_5&=-3 &&\Rightarrow& x_4&=-3-2t\end{aligned}\]`,
      S`Collect the constants, the $s$ terms and the $t$ terms: \[\vec x=\begin{bmatrix}1+2s-3t\\ s\\ 4+t\\ -3-2t\\ t\end{bmatrix}=\begin{bmatrix}1\\0\\4\\-3\\0\end{bmatrix}+s\begin{bmatrix}2\\1\\0\\0\\0\end{bmatrix}+t\begin{bmatrix}-3\\0\\1\\-2\\1\end{bmatrix}.\]`,
      S`Check with $s=t=1$, the vector $(0,1,5,-5,1)$: row 1: $0-2+3=1$ \checkmark; row 2: $5-1=4$ \checkmark; row 3: $-5+2=-3$ \checkmark.`],
    ans: S`$\vec x=(1,0,4,-3,0)+s(2,1,0,0,0)+t(-3,0,1,-2,1)$` },
  { title: "From REF to RREF", q: S`Reduce $${am([[1, 3, -2, 5], [0, 2, 4, 2], [0, 0, 3, 6]])}$ to RREF and solve.`,
    fig: F(matSvg([[1, 0, 0, 18], [0, 1, 0, -3], [0, 0, 1, 2]], [[0, 0], [1, 1], [2, 2]]), 4),
    steps: [
      ...steps([[1, 3, -2, 5], [0, 2, 4, 2], [0, 0, 3, 6]], [
        [S`The matrix is already in REF. Make every leading entry $1$: divide row 3 by $3$ and row 2 by $2$.`, ["R3*1/3", "R2*1/2"]],
        [S`Work upward from the last pivot: clear column 3 above the leading $1$ of row 3.`, ["R2-2R3", "R1+2R3"]],
        [S`Clear column 2 above the leading $1$ of row 2.`, ["R1-3R2"]],
      ], { intro: "Start from the REF" }).steps,
      S`This is the RREF: the identity on the left, so $x_1=18$, $x_2=-3$, $x_3=2$ can be read off.`,
      S`Check in the starting rows: $18+3(-3)-2(2)=5$ \checkmark,\ $2(-3)+4(2)=2$ \checkmark,\ $3(2)=6$ \checkmark.`],
    ans: S`$(18,-3,2)$` },
  { title: "Reading the cases from an REF", q: S`An REF is $${am([[1, 2, 1, 3], [0, 1, -1, 2], [0, 0, "a", "b"]])}$. For which $a$, $b$ is there one solution, none, infinitely many?`,
    fig: F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "a", "b"]]), 3.6),
    steps: [S`Rows 1 and 2 always have pivots in columns 1 and 2. Everything depends on row 3, the equation $ax_3=b$.`,
      S`$a\ne0$: $a$ is a pivot in column 3, every column of the coefficient part has a pivot, no variable is free: \[${am([[1, 2, 1, 3], [0, 1, -1, 2], [0, 0, "a", "b"]])}\ \Rightarrow\ x_3=\tfrac ba,\ \text{one solution.}\]`,
      S`$a=0$, $b\ne0$: \[${am([[1, 2, 1, 3], [0, 1, -1, 2], [0, 0, 0, "b"]])}\] Row 3 says $0=b\ne0$, a pivot in the constant column: no solution.`,
      S`$a=b=0$: \[${am([[1, 2, 1, 3], [0, 1, -1, 2], [0, 0, 0, 0]])}\] Row 3 is $0=0$; column 3 has no pivot, so $x_3$ is free: infinitely many solutions.`],
    ans: S`$a\ne0$: one; $a=0,b\ne0$: none; $a=b=0$: infinitely many` },
  { title: "A free variable in column 1", q: S`The augmented matrix of a system in $x_1,x_2,x_3$ is $${am([[0, 2, 4, 2], [0, 1, 3, 4]])}$. Find its RREF and the solutions.`,
    fig: F(matSvg([[0, 1, 0, -5], [0, 0, 1, 3]], [[0, 1], [1, 2]]), 3.8),
    steps: [
      ...steps([[0, 2, 4, 2], [0, 1, 3, 4]], [
        [S`Column 1 is all zeros, so there is no pivot there; move to column 2. Its top entry is $2$: divide row 1 by $2$.`, ["R1*1/2"]],
        [S`Clear the $1$ below this pivot.`, ["R2-R1"]],
        [S`Row 2 now leads in column 3. Clear the $2$ above it.`, ["R1-2R2"]],
      ]).steps,
      S`RREF reached: pivots in columns 2 and 3. Column 1 has no pivot, so $x_1=t$ is free (it does not appear in any equation at all).`,
      S`Row 1: $x_2=-5$; row 2: $x_3=3$. So $\vec x=(t,-5,3)=(0,-5,3)+t(1,0,0)$. Check: $2(-5)+4(3)=2$ \checkmark,\ $-5+3(3)=4$ \checkmark.`],
    ans: S`$(t,-5,3)=(0,-5,3)+t(1,0,0)$` },
  { title: "Two REFs, one answer", q: S`Find two different REFs of $${am([[2, 4, 6], [1, 3, 5]])}$, then the RREF and the solution.`,
    fig: F(linesSvg([[2, 4, 6], [1, 3, 5]], V(-3, 3, -1, 4), [-1, 2]), 4.4),
    steps: [
      ...steps([[2, 4, 6], [1, 3, 5]], [
        [S`\textbf{Route A.} Use the $2$ in row 1 as pivot and clear the $1$ below it.`, ["R2-1/2R1"]],
      ]).steps,
      S`This is one REF. Continue to the RREF: \[\xrightarrow{R_1\to\frac12R_1}\ ${am([[1, 2, 3], [0, 1, 2]])}\ \xrightarrow{R_1\to R_1-2R_2}\ ${am([[1, 0, -1], [0, 1, 2]])}\]`,
      ...steps([[2, 4, 6], [1, 3, 5]], [
        [S`\textbf{Route B.} Swap first, to get a leading $1$ without fractions.`, ["R1<->R2"]],
        [S`Clear the $2$ below the leading $1$.`, ["R2-2R1"]],
      ], { intro: "Start again from" }).steps.slice(1),
      S`A different REF. Continue: \[\xrightarrow{R_2\to-\frac12R_2}\ ${am([[1, 3, 5], [0, 1, 2]])}\ \xrightarrow{R_1\to R_1-3R_2}\ ${am([[1, 0, -1], [0, 1, 2]])}\] The same RREF --- the RREF of a matrix is unique, an REF is not.`,
      S`Solution $x_1=-1$, $x_2=2$. Check: $2(-1)+4(2)=6$ \checkmark,\ $-1+3(2)=5$ \checkmark.`],
    ans: S`solution $(-1,2)$, the crossing point of the two lines` },
  { title: "A line of solutions in space", q: S`Interpret the RREF $${am([[1, 0, 2, 1], [0, 1, -1, 3], [0, 0, 0, 0]])}$ geometrically.`,
    fig: F_LINE,
    steps: [S`Pivots in columns 1 and 2; column 3 has none, so $x_3=t$ is free. Row 3 is $0=0$: no contradiction, the system is consistent.`,
      S`Row 1: $x_1+2x_3=1$, so $x_1=1-2t$. Row 2: $x_2-x_3=3$, so $x_2=3+t$.`,
      S`\[\vec x=\begin{bmatrix}1-2t\\3+t\\t\end{bmatrix}=\begin{bmatrix}1\\3\\0\end{bmatrix}+t\begin{bmatrix}-2\\1\\1\end{bmatrix}:\] a line through $(1,3,0)$ with direction $(-2,1,1)$.`,
      S`The two nonzero rows are the planes $x_1+2x_3=1$ and $x_2-x_3=3$; they meet in exactly this line (figure). Check $t=1$, the point $(-1,4,1)$: $-1+2=1$ \checkmark,\ $4-1=3$ \checkmark.`],
    ans: S`the line $(1,3,0)+t(-2,1,1)$` },
  { title: "An inconsistent RREF", q: S`What does the RREF $${am([[1, 0, -1, 0], [0, 1, 2, 0], [0, 0, 0, 1]])}$ say about the system?`,
    steps: [S`Write the last row as an equation: $0x_1+0x_2+0x_3=1$, i.e. $0=1$.`,
      S`The left side is $0$ for every choice of $x_1,x_2,x_3$, so this equation has no solution, and therefore the whole system has none --- whatever rows 1 and 2 say.`,
      S`In pivot language: the constant column (after the bar) contains a pivot. That is exactly the test for inconsistency.`],
    ans: S`no solution` },
  { title: "Counting free variables before solving", q: S`A system of 4 equations in 6 unknowns has an RREF with pivots in columns 1, 2, 4 and 5 and none in the constant column. Which variables are free, and how many parameters does the solution have?`,
    steps: [S`No pivot in the constant column, so the system is consistent.`,
      S`The pivot columns 1, 2, 4, 5 give the basic variables $x_1,x_2,x_4,x_5$. Columns 3 and 6 have no pivot, so $x_3$ and $x_6$ are free.`,
      S`Number of parameters $=$ (unknowns) $-$ (pivots) $=6-4=2$. The solution set has the form $\vec p+s\vec u+t\vec v$: a plane in $\mathbb R^6$.`],
    ans: S`$x_3$, $x_6$ free; 2 parameters` },
];

const PROBLEMS = [
  { level: 1, q: S`Classify each as RREF, REF only, or neither: $${am([[1, 0, 3], [0, 1, -2]], false)}$, $${am([[1, 4, 2], [0, 0, 0], [0, 1, 1]], false)}$, $${am([[2, 1, 0], [0, 3, 1]], false)}$.`, ans: S`RREF; neither (zero row in the middle); REF only` },
  { level: 1, q: S`For the RREF $${am([[1, 0, -3, 0, 2], [0, 1, 4, 0, -1], [0, 0, 0, 1, 5]])}$, name the pivot columns and the free variables.`, ans: S`pivot columns 1, 2, 4; $x_3$ free`,
    fig: F(stairSvg([["1", "0", "*", "0", "*"], ["0", "1", "*", "0", "*"], ["0", "0", "0", "1", "*"]]), 3.6) },
  { level: 1, q: S`Write the general solution of the system in Problem 2 in vector form.`, ans: S`$(2,-1,0,5)+t(3,-4,1,0)$`,
    sol: [S`Pivots in columns 1, 2, 4; let the free variable be $x_3=t$.`,
      S`Row 1: $x_1-3x_3=2$, so $x_1=2+3t$. Row 2: $x_2+4x_3=-1$, so $x_2=-1-4t$. Row 3: $x_4=5$.`,
      S`$\vec x=(2+3t,\,-1-4t,\,t,\,5)=(2,-1,0,5)+t(3,-4,1,0)$. Check $t=1$: $(5,-5,1,5)$; row 1: $5-3=2$ \checkmark, row 2: $-5+4=-1$ \checkmark.`] },
  { level: 2, q: S`Reduce $${am([[1, 2, 1, 4], [2, 5, 4, 11], [1, 3, 4, 8]])}$ to RREF and solve.`, ans: S`RREF has the identity on the left; $(1,1,1)$`,
    sol: [...steps([[1, 2, 1, 4], [2, 5, 4, 11], [1, 3, 4, 8]], [
      [S`Column 1: clear the $2$ and the $1$ below the leading $1$.`, ["R2-2R1", "R3-R1"]],
      [S`Column 2: clear the $1$ below the leading $1$ of row 2. This is an REF.`, ["R3-R2"]],
      [S`Going up: clear column 3 above the leading $1$ of row 3.`, ["R2-2R3", "R1-R3"]],
      [S`Clear column 2 above the leading $1$ of row 2.`, ["R1-2R2"]],
    ], { intro: "Start from the matrix" }).steps,
      S`RREF: $x_1=1$, $x_2=1$, $x_3=1$. Check: $1+2+1=4$ \checkmark,\ $2+5+4=11$ \checkmark,\ $1+3+4=8$ \checkmark.`] },
  { level: 2, q: S`Find the RREF of $${am([[1, -1, 2, 3], [2, -2, 5, 4]])}$ (unknowns $x_1,x_2,x_3$) and the general solution.`, ans: S`$${am([[1, -1, 0, 7], [0, 0, 1, -2]])}$; $(7,0,-2)+t(1,1,0)$`,
    sol: [...steps([[1, -1, 2, 3], [2, -2, 5, 4]], [
      [S`Clear the $2$ below the leading $1$. Column 2 then has no pivot, and row 2 leads in column 3.`, ["R2-2R1"]],
      [S`Clear the $2$ above the leading $1$ of row 2.`, ["R1-2R2"]],
    ], { intro: "Start from the matrix" }).steps,
      S`Pivots in columns 1 and 3; $x_2=t$ is free. Row 1: $x_1-x_2=7$, so $x_1=7+t$. Row 2: $x_3=-2$.`,
      S`$\vec x=(7+t,\,t,\,-2)=(7,0,-2)+t(1,1,0)$. Check $t=0$: $7-0-4=3$ \checkmark,\ $14-0-10=4$ \checkmark.`] },
  { level: 2, q: S`A system has RREF $${am([[1, 0, 2, 3], [0, 1, -1, 1]])}$. Give the general solution and two particular solutions, and describe the solution set geometrically.`, ans: S`$(3,1,0)+t(-2,1,1)$; e.g. $(3,1,0)$, $(1,2,1)$; a line in $\mathbb R^3$`,
    fig: F(planesSvg([[1, 0, 2, 3], [0, 1, -1, 1]], { center: [1.5, 1.5, 0.5], size: 1.4, len: 3.5 }), 4.2),
    sol: [S`Pivots in columns 1, 2; $x_3=t$ free. Row 1: $x_1=3-2t$. Row 2: $x_2=1+t$.`,
      S`$\vec x=(3,1,0)+t(-2,1,1)$. With $t=0$: $(3,1,0)$; with $t=1$: $(1,2,1)$. Check $(1,2,1)$: $1+2=3$ \checkmark,\ $2-1=1$ \checkmark.`,
      S`One parameter: the solution set is the line in $\mathbb R^3$ where the planes $x_1+2x_3=3$ and $x_2-x_3=1$ meet.`] },
  { level: 2, space: 4, q: S`The system $x_1+2x_2=3$, $2x_1+4x_2=7$ reduces to $${am([[1, 2, 3], [0, 0, 1]])}$. Explain what the last row means and draw the two original lines.`, ans: S`$0=1$: inconsistent; the lines are parallel`, fig: gridT({ xmin: -2, xmax: 5, ymin: -2, ymax: 3 }),
    sol: [...steps([[1, 2, 3], [2, 4, 7]], [
      [S`Clear the $2$ below the leading $1$.`, ["R2-2R1"]],
    ]).steps,
      S`Row 2 is $[\,0\ \ 0\mid1\,]$, the equation $0x_1+0x_2=1$, i.e. $0=1$: false for every point, so the system is inconsistent.`,
      S`Lines: $x_1+2x_2=3$ through $(3,0)$ and $(1,1)$; $2x_1+4x_2=7$ through $(3.5,0)$ and $(1.5,1)$. Both have slope $-\tfrac12$ but different intercepts: parallel, no common point.`] },
  { level: 2, q: S`Give two different REFs of $${am([[3, 6, 9], [1, 4, 5]])}$ and its RREF.`, ans: S`e.g. $${am([[3, 6, 9], [0, 2, 2]])}$, $${am([[1, 4, 5], [0, -6, -6]])}$; RREF $${am([[1, 0, 1], [0, 1, 1]])}$`,
    sol: [...steps([[3, 6, 9], [1, 4, 5]], [[S`\textbf{REF 1.} Clear the $1$ below the pivot $3$.`, ["R2-1/3R1"]]], { intro: "Start from the matrix" }).steps,
      ...steps([[3, 6, 9], [1, 4, 5]], [[S`\textbf{REF 2.} Start again: swap the rows,`, ["R1<->R2"]], [S`then clear the $3$ below the leading $1$.`, ["R2-3R1"]]]).steps.slice(1),
      ...steps([[3, 6, 9], [0, 2, 2]], [[S`\textbf{RREF} (from REF 1). Make both leading entries $1$,`, ["R1*1/3", "R2*1/2"]], [S`then clear the $2$ above the second pivot.`, ["R1-2R2"]]]).steps.slice(1)] },
  { level: 3, space: 5, q: S`List all possible RREF patterns (use $*$ for an arbitrary entry) of a $2\times3$ matrix. How many are there?`, ans: S`7: pivots in columns $\{1,2\},\{1,3\},\{2,3\}$, one pivot in column 1, 2 or 3, or the zero matrix`,
    fig: F(stairSvg([["?", "?", "?"], ["?", "?", "?"]], false), 2.8),
    sol: [S`An RREF is decided by its pivot columns. A $2\times3$ matrix has 0, 1 or 2 pivots.`,
      S`Two pivots: columns $\{1,2\}$, $\{1,3\}$, $\{2,3\}$: \[${am([[1, 0, "*"], [0, 1, "*"]], false)},\quad ${am([[1, "*", 0], [0, 0, 1]], false)},\quad ${am([[0, 1, 0], [0, 0, 1]], false)}\]`,
      S`One pivot, in column 1, 2 or 3: \[${am([[1, "*", "*"], [0, 0, 0]], false)},\quad ${am([[0, 1, "*"], [0, 0, 0]], false)},\quad ${am([[0, 0, 1], [0, 0, 0]], false)}\]`,
      S`No pivot: the zero matrix. Total $3+3+1=7$ patterns.`] },
  { level: 3, space: 5, q: S`Prove: if the coefficient part of the RREF of $[A\mid\vec b]$ has a pivot in every column, the system has at most one solution.`, ans: S`No free variables: each unknown is a basic variable equal to a constant of the RREF (or a row $0=1$ shows there is none)`,
    sol: [S`If the RREF has a row $[\,0\ \cdots\ 0\mid1\,]$, there is no solution, and "at most one" holds.`,
      S`Otherwise every column $j$ of the coefficient part has a pivot, so every unknown is basic. In the RREF the pivot of column $j$ is the only nonzero entry of that column, and its row contains no other nonzero coefficient (all other columns are pivot columns too, cleared in that row). So that row reads $x_j=d_j$.`,
      S`Every unknown is forced to one value; row operations keep the solution set, so the original system has exactly the one solution $(d_1,\dots,d_n)$.`] },
  { level: 3, space: 5, q: S`For which $a$ does $${am([[1, 0, "a", 1], [0, 1, 2, 0], [0, 0, "a-2", "a-2"]])}$ have infinitely many solutions? Give them, and the unique solution for $a=3$.`, ans: S`$a=2$: $(1,0,0)+t(-2,-2,1)$; $a=3$: $x_3=1$, $(-2,-2,1)$`,
    sol: [S`Row 3 is $(a-2)x_3=a-2$. If $a\ne2$, divide by $a-2$: $x_3=1$, a pivot in column 3, one solution. If $a=2$ the row becomes $0=0$.`,
      S`$a=2$: \[${am([[1, 0, 2, 1], [0, 1, 2, 0], [0, 0, 0, 0]])}\] $x_3=t$ free; $x_1=1-2t$, $x_2=-2t$: $\vec x=(1,0,0)+t(-2,-2,1)$.`,
      ...steps([[1, 0, 3, 1], [0, 1, 2, 0], [0, 0, 1, 1]], [[S`Clear column 3 above the pivot.`, ["R1-3R3", "R2-2R3"]]], { intro: S`$a=3$ (row 3 divided by $a-2=1$)` }).steps,
      S`So $(x_1,x_2,x_3)=(-2,-2,1)$. Check in the $a=3$ matrix: $-2+3=1$ \checkmark,\ $-2+2=0$ \checkmark.`] },
  { level: 3, space: 5, q: S`Find an RREF whose system has exactly the solutions $\vec x=(1,2,0,0)+s(-1,1,1,0)+t(2,0,0,1)$.`, ans: S`$${am([[1, 0, 1, -2, 1], [0, 1, -1, 0, 2]])}$`,
    sol: [S`The parameters sit in positions 3 and 4 ($x_3=s$, $x_4=t$), so $x_3,x_4$ are free and $x_1,x_2$ are basic: pivots in columns 1 and 2.`,
      S`Read off: $x_1=1-s+2t=1-x_3+2x_4$ and $x_2=2+s=2+x_3$. Move the free variables left: $x_1+x_3-2x_4=1$, $x_2-x_3=2$.`,
      S`These two equations are already in RREF: \[${am([[1, 0, 1, -2, 1], [0, 1, -1, 0, 2]])}\] Check $s=t=1$, $\vec x=(2,3,1,1)$: $2+1-2=1$ \checkmark,\ $3-1=2$ \checkmark.`] },
  { level: 3, space: 5, q: S`A consistent system in 5 unknowns has an RREF with pivots in columns 1, 3, 4. Can the value of $x_2$ be determined from the system? Can $x_3$? Explain.`, ans: S`$x_2$ is free, so no; $x_3$ is basic, but it may depend on the free variable $x_5$, so it is determined only once $x_5$ is chosen (unless its row has 0 in column 5)`,
    sol: [S`Free variables are columns without a pivot: $x_2$ and $x_5$. A free variable can take any value, so $x_2$ is not determined.`,
      S`$x_3$ is basic; its row reads $x_3+c\,x_5=d$ (columns 1, 2 and 4 are zero there: 1 and 4 are pivot columns, and column 2 lies left of this pivot). So $x_3=d-cx_5$.`,
      S`If $c=0$, $x_3=d$ is determined; if $c\ne0$, $x_3$ changes with $x_5$ and is not determined by the system alone.`] },
];

export const WS = {
  code: "2.3",
  title: "Row Echelon Form and Reduced Row Echelon Form",
  bigideas: S`Row operations need a target. In \textbf{row echelon form} the nonzero rows form a staircase of leading entries with zeros below; in \textbf{reduced row echelon form} each leading entry is 1 and is the only nonzero entry in its column. Every matrix has exactly one RREF, so its pivot positions are fixed. From the RREF every solution can be read directly: pivot columns give basic variables, the other columns give free parameters, and a pivot in the constant column means there is no solution.`,
  goals: ["Decide whether a matrix is in REF, RREF or neither.", "Identify pivot positions, pivot columns, basic and free variables.", "Know that the RREF is unique while REFs are not.", "Read the solution set from an RREF and write it in parametric and vector form.", "Interpret the solution set geometrically and count its parameters."],
  curriculum: "Systems of linear equations — echelon forms and the general solution",
  vocab: [["Leading entry", "first nonzero entry of a row"], ["REF", "staircase: zero rows last, leading entries step right"], ["RREF", "REF with leading 1s alone in their columns"], ["Basic variable", "unknown in a pivot column"], ["Free variable", "unknown in a column without a pivot"]],
  hook: S`Here are the final matrices of three students who solved the same system: $${am([[1, 2, 3], [0, 1, 2]])}$, $${am([[2, 4, 6], [0, -1, -2]])}$, $${am([[1, 0, -1], [0, 1, 2]])}$. Can they all be right? Which one shows the answer most directly?`,
  concepts: NOTES,
  summary: [
    S`REF: zero rows at the bottom; each leading entry strictly right of the one above.`,
    S`RREF: REF + leading 1s + zeros above and below each leading 1; unique for every matrix.`,
    S`Pivot columns ↔ basic variables; other columns ↔ free variables.`,
    S`Pivot in the constant column ⇒ none; no free variables ⇒ one; free variables ⇒ infinitely many.`,
    S`General solution $\vec x=\vec p+s\vec v_1+t\vec v_2+\cdots$ with $n-r$ parameters.`,
  ],
  tips: ["A zero row in the middle means the matrix is not yet in REF.", "In RREF the leading entries must be exactly 1.", "Free variables come from columns without pivots, not from zero rows.", "$[0\\cdots0\\mid0]$ is harmless; $[0\\cdots0\\mid c]$ with $c\\ne0$ is not.", "Each free variable needs its own parameter, and its own line $x_j=t$ in the solution.", "Check a particular solution in the original system."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
