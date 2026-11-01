// LINALG1 Worksheet 2.2 — Augmented Matrices and Elementary Row Operations
// Self-contained: complete notes (matrices of a system, the three operations and their inverses, why they keep
// the solutions — with proof), 9 worked examples with figures, 13 practice problems, answer key.
import { gridT, svgT } from "./figT.mjs";
import { S, def, thm, side } from "./wkit.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg, flowSvg } from "./fig2.mjs";
import { sys, am, steps } from "../bank/la.mjs";

const F = (svg, w = 5.4) => svgT(svg, w);
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;
const V = (xmin, xmax, ymin, ymax) => ({ xmin, xmax, ymin, ymax });

// ── notes figures ──
const F_MAT = F(matSvg([[3, -1, 0, 2, 5], [1, 0, 4, -1, 0], [0, 2, -3, 1, 7]]), 5.4);
const F_OPS = F(flowSvg([["Rᵢ ↔ Rⱼ  (swap)", "undone by the same swap", "blue"], ["Rᵢ → c·Rᵢ, c ≠ 0  (scale)", "undone by Rᵢ → (1/c)·Rᵢ", "blue"], ["Rᵢ → Rᵢ + c·Rⱼ, j ≠ i  (replace)", "undone by Rᵢ → Rᵢ − c·Rⱼ", "blue"]], 330), 6.4);
const F_GEO = F(linesSvg([[1, 1, 4], [2, -1, -1], [0, -3, -9]], V(-2, 5, -1, 6), [1, 3]), 5.2);
const F_ELIM = F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "p", "*"]]), 4);
const F_BAD = F(planesSvg([[1, 0, 0, 0.5], [1, 0, 0, 2]], { center: [1, 1.5, 1.2], size: 1.4, len: 3 }), 5);

const NOTES = [
  { h: "1. The matrices of a system",
    lead: S`${def("coefficient matrix, augmented matrix", S`For the system $a_{i1}x_1+\dots+a_{in}x_n=b_i$ ($i=1,\dots,m$), the \textbf{coefficient matrix} is the $m\times n$ array $A=[a_{ij}]$, the \textbf{constant vector} is $\vec b=(b_1,\dots,b_m)$, and the \textbf{augmented matrix} is the $m\times(n+1)$ array $[A\mid\vec b]$.`)}
Row $i$ is equation $i$; column $j$ (before the bar) holds the coefficients of $x_j$; the entry $a_{ij}$ sits in row $i$, column $j$. The figure is the augmented matrix of
\[${sysT([[3, -1, 0, 2, 5], [1, 0, 4, -1, 0], [0, 2, -3, 1, 7]])}\]`,
    fig: F_MAT, w: 0.56,
    body: S`\textbf{Zeros matter.} A missing unknown has coefficient $0$, which must be written so that every column keeps belonging to one unknown. \textbf{Order matters} too: list the unknowns in the same order in every row. Going back from a matrix to a system just re-inserts the names of the unknowns, the plus signs and the equals signs.` },

  { h: "2. The three elementary row operations",
    lead: S`On an augmented matrix we allow exactly three \textbf{elementary row operations}:
\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item \textbf{swap} two rows: $R_i\leftrightarrow R_j$;
\item \textbf{scale} a row by a \emph{nonzero} number: $R_i\to cR_i$, $c\ne0$;
\item \textbf{replace} a row by itself plus a multiple of another row: $R_i\to R_i+cR_j$, $j\ne i$.
\end{enumerate}
On the system they mean: reorder the equations, multiply an equation by a nonzero number, add a multiple of one equation to another. Each has an \textbf{inverse} of the same kind (figure).`,
    fig: F_OPS, w: 0.52,
    body: S`Two matrices are \textbf{row equivalent}, written $A\sim B$, if a finite sequence of elementary row operations turns $A$ into $B$. Because each operation can be undone, $A\sim B$ implies $B\sim A$ (undo the steps in reverse order); and $A\sim B\sim C$ gives $A\sim C$.` },

  { h: "3. Row operations do not change the solutions",
    lead: thm("row-equivalent systems", S`If $[A\mid\vec b]\sim[C\mid\vec d]$, the two systems have exactly the same solution set.`) + S`\pf{Check one operation of each type. A swap only lists the equations in another order. If $\vec s$ satisfies equation $i$, it satisfies $c$ times it, and since $c\ne0$ the step can be divided back. If $\vec s$ satisfies equations $i$ and $j$, it satisfies "equation $i$ $+\,c\cdot$equation $j$", while equation $j$ is unchanged. So every solution of the old system solves the new one; applying the inverse operation shows the reverse.}`,
    fig: F_GEO, w: 0.6,
    body: S`\textbf{Geometrically}, an operation replaces the lines (or planes) by different ones through exactly the same common points. In the figure, $x_1+x_2=4$ (blue) and $2x_1-x_2=-1$ (red) meet at $(1,3)$; after $R_2\to R_2-2R_1$ the second equation is $-3x_2=-9$ (green, dashed), a horizontal line --- still through $(1,3)$.` },

  { h: "4. The strategy: elimination to a triangular shape",
    lead: S`Use the first row to create zeros in column 1 below it; then use the second row to create zeros in column 2 below it; and so on. Each step is an operation of type 3, $R_i\to R_i-\dfrac{a}{p}R_k$, where $p$ is the leading entry of the row being used and $a$ the entry to be cleared. Swaps bring a nonzero entry into position when needed.

The result has the staircase shape of Worksheet 2.1, and back substitution finishes the job.`,
    fig: F_ELIM, w: 0.62,
    body: S`\textbf{Reading the end result.}
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item A row $[\,0\ \cdots\ 0\mid c\,]$ with $c\ne0$ is the equation $0=c$: the system is \textbf{inconsistent}.
\item A row $[\,0\ \cdots\ 0\mid 0\,]$ says $0=0$: harmless; it means an equation was a combination of the others, and usually an unknown is left free --- \textbf{infinitely many} solutions.
\item A full staircase with a leading entry for every unknown gives \textbf{one} solution.
\end{itemize}` },

  { h: "5. What is not allowed",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Multiplying a row by 0} erases an equation; solutions can be gained, and the step cannot be undone.
\item \textbf{Replacing a row by a multiple of another row} ($R_2\to3R_1$) loses equation 2.
\item \textbf{Changing only some entries} of a row, or forgetting the constant after the bar, changes the equation.
\item \textbf{Column operations} rename or mix the unknowns; they are not row operations.
\end{itemize}
In the figure, two parallel planes $x_1=\tfrac12$ and $x_1=2$ have no common point. Multiplying the second equation by $0$ would delete that plane and "create" solutions that the original system never had.`,
    fig: F_BAD, w: 0.6 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "From a system to its matrices", q: S`Write the coefficient matrix, the constant vector and the augmented matrix of $${sysT([[4, 0, -1, 0, 2], [0, 1, 0, 3, -1], [1, -1, 1, -1, 0]])}$.`,
    fig: F(matSvg([[4, 0, -1, 0, 2], [0, 1, 0, 3, -1], [1, -1, 1, -1, 0]]), 5),
    steps: [S`Count: three equations and four unknowns $x_1,x_2,x_3,x_4$. So $A$ is $3\times4$ (one column per unknown) and $[A\mid\vec b]$ is $3\times5$ (one extra column for the constants).`,
      S`Line up every equation in the order $x_1,x_2,x_3,x_4$ and write $0$ for each missing unknown: equation 1 is $4x_1+0x_2-1x_3+0x_4=2$, equation 2 is $0x_1+1x_2+0x_3+3x_4=-1$, equation 3 is $1x_1-1x_2+1x_3-1x_4=0$.`,
      S`Copy the coefficients row by row: \[A=${am([[4, 0, -1, 0], [0, 1, 0, 3], [1, -1, 1, -1]], false)},\qquad \vec b=(2,-1,0).\]`,
      S`Put $\vec b$ after a bar as the last column: \[[A\mid\vec b]=${am([[4, 0, -1, 0, 2], [0, 1, 0, 3, -1], [1, -1, 1, -1, 0]])}.\] Check: the entry in row 2, column 4 is $3$, the coefficient of $x_4$ in equation 2 \checkmark.`],
    ans: S`$[A\mid\vec b]=${am([[4, 0, -1, 0, 2], [0, 1, 0, 3, -1], [1, -1, 1, -1, 0]])}$` },
  { title: "From a matrix back to the solution", q: S`A system has augmented matrix $${am([[2, 1, -1, 1], [0, 3, 2, 12], [0, 0, -1, -3]])}$. Write the system and solve it.`,
    fig: F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "p", "*"]]), 3.8),
    steps: [S`One equation per row: \[\left\{\begin{aligned}2x_1+x_2-x_3 &= 1 \\ 3x_2+2x_3 &= 12 \\ -x_3 &= -3\end{aligned}\right.\] The matrix is already triangular, so we finish the reduction from the bottom up.`,
      ...steps([[2, 1, -1, 1], [0, 3, 2, 12], [0, 0, -1, -3]], [
        [S`Make the last pivot 1 (\(x_3=3\)).`, ["R3*-1"]],
        [S`Clear column 3 above it (substitute \(x_3=3\)).`, ["R2-2R3", "R1+R3"]],
        [S`Make the second pivot 1 (\(x_2=2\)).`, ["R2*1/3"]],
        [S`Clear column 2 above it.`, ["R1-R2"]],
        [S`Make the first pivot 1.`, ["R1*1/2"]],
      ], { intro: "Start from the augmented matrix" }).steps,
      S`So \((x_1,x_2,x_3)=(1,2,3)\). Check: \[${am([[2, 1, -1], [0, 3, 2], [0, 0, -1]], false)}${am([[1], [2], [3]], false)}=${am([["2+2-3"], ["0+6+6"], ["0+0-3"]], false)}=${am([[1], [12], [-3]], false)}\ \checkmark\].`],
    ans: S`$(x_1,x_2,x_3)=(1,2,3)$` },
  { title: "Naming two operations and undoing them", q: S`Two row operations turn \[A=${am([[1, 2, 0, 3], [2, 1, -1, 0], [0, 1, 1, 2]])}\quad\text{into}\quad B=${am([[1, 2, 0, 3], [0, 1, 1, 2], [0, -3, -1, -6]])}.\] Find them, and the operations that turn $B$ back into $A$.`,
    fig: F(matSvg([[1, 2, 0, 3], [0, 1, 1, 2], [0, -3, -1, -6]], [], true, 2), 4.6),
    steps: [
      ...steps([[1, 2, 0, 3], [2, 1, -1, 0], [0, 1, 1, 2]], [
        [S`Row 1 is the same in $A$ and $B$. Row 3 of $B$, $(0,-3,-1\mid-6)$, has a $0$ where row 2 of $A$ has a $2$: it is row 2 of $A$ minus twice row 1, $(2,1,-1\mid0)-2(1,2,0\mid3)=(0,-3,-1\mid-6)$.`, ["R2-2R1"]],
        [S`Now the second and third rows are those of $B$ in the opposite order, so swap them.`, ["R2<->R3"]],
      ], { intro: S`Start from $A$` }).steps,
      S`This is exactly $B$. To go back, undo the operations \emph{in reverse order}: a swap is undone by the same swap, and $R_2\to R_2-2R_1$ is undone by $R_2\to R_2+2R_1$.`,
      ...steps([[1, 2, 0, 3], [0, 1, 1, 2], [0, -3, -1, -6]], [
        [S`Check: starting from $B$, undo the swap first.`, ["R2<->R3"]],
        [S`Then add back twice row 1.`, ["R2+2R1"]],
      ]).steps.slice(1),
      S`We are back at $A$ \checkmark.`],
    ans: S`$R_2\to R_2-2R_1$, then $R_2\leftrightarrow R_3$; undo with $R_2\leftrightarrow R_3$, then $R_2\to R_2+2R_1$` },
  { title: "An operation seen geometrically", q: S`Solve $x_1+2x_2=4$, $3x_1-x_2=5$ with one row operation, and describe what the operation does to the lines.`,
    fig: F(linesSvg([[1, 2, 4], [3, -1, 5], [0, -7, -7]], V(-1, 5, -2, 4), [2, 1])),
    steps: [
      ...steps([[1, 2, 4], [3, -1, 5]], [[S`Use the leading $1$ of row 1 to clear the $3$ below it: $(3,-1\mid5)-3(1,2\mid4)=(0,-7\mid-7)$.`, ["R2-3R1"]]]).steps,
      S`Row 2 now reads $-7x_2=-7$, so $x_2=1$. Row 1: $x_1+2(1)=4$, so $x_1=2$.`,
      S`Geometry: the red line $3x_1-x_2=5$ is replaced by the horizontal green line $x_2=1$. Both pass through $(2,1)$, so the intersection point did not move.`,
      S`Check: $2+2(1)=4$ \checkmark,\ $3(2)-1=5$ \checkmark.`],
    ans: S`$(2,1)$` },
  { title: "Solving a 3 × 3 system", q: S`Solve $${sysT([[1, 1, 2, 3], [2, 3, 1, 2], [3, -1, 4, 11]])}$.`,
    fig: F(planesSvg([[1, 1, 2, 3], [2, 3, 1, 2], [3, -1, 4, 11]], { center: [2, -1, 1], size: 1, len: 3, point: [2, -1, 1], label: "(2, −1, 1)" }), 4.6),
    steps: [
      ...steps([[1, 1, 2, 3], [2, 3, 1, 2], [3, -1, 4, 11]], [
        [S`Column 1: the leading entry of row 1 is $1$. Clear the $2$ and the $3$ below it.`, ["R2-2R1", "R3-3R1"]],
        [S`Column 2: the new row 2 has leading entry $1$. Clear the $-4$ below it.`, ["R3+4R2"]],
      ]).steps,
      S`The matrix is triangular. Back substitution, bottom row first: $-14x_3=-14$ gives $x_3=1$; row 2, $x_2-3x_3=-4$, gives $x_2=-4+3=-1$; row 1, $x_1+x_2+2x_3=3$, gives $x_1=3+1-2=2$.`,
      S`Check in the \emph{original} equations: $2-1+2=3$ \checkmark,\ $4-3+1=2$ \checkmark,\ $6+1+4=11$ \checkmark.`],
    ans: S`$(2,-1,1)$: three planes through one point` },
  { title: "A system with no solution", q: S`Decide whether $${sysT([[1, 2, -1, 2], [2, 5, 1, 7], [1, 3, 2, 4]])}$ is consistent.`,
    fig: F(planesSvg([[1, 2, -1, 2], [2, 5, 1, 7], [1, 3, 2, 4]], { center: [1, 1, 1], size: 1.1, len: 3 }), 4.6),
    steps: [
      ...steps([[1, 2, -1, 2], [2, 5, 1, 7], [1, 3, 2, 4]], [
        [S`Column 1: clear the $2$ and the $1$ below the leading $1$.`, ["R2-2R1", "R3-R1"]],
        [S`Column 2: rows 2 and 3 now have the same left side; subtract to clear the $1$ in row 3.`, ["R3-R2"]],
      ]).steps,
      S`Row 3 is $[\,0\ \ 0\ \ 0\mid-1\,]$, the equation $0x_1+0x_2+0x_3=-1$. The left side is $0$ for every vector, so no vector satisfies it.`,
      S`Geometrically: each pair of planes meets in a line, but the three lines are parallel, so there is no point on all three planes.`],
    ans: S`inconsistent` },
  { title: "A zero row and a free unknown", q: S`Solve $${sysT([[1, -1, 1, 2], [2, -1, 3, 7], [1, 0, 2, 5]])}$.`,
    fig: F(planesSvg([[1, -1, 1, 2], [2, -1, 3, 7], [1, 0, 2, 5]], { center: [3, 2, 1], size: 1.1, len: 3.5, line: { p: [5, 3, 0], d: [-2, -1, 1], t0: -0.3, t1: 2.3 } }), 4.6),
    steps: [
      ...steps([[1, -1, 1, 2], [2, -1, 3, 7], [1, 0, 2, 5]], [
        [S`Column 1: clear below the leading $1$.`, ["R2-2R1", "R3-R1"]],
        [S`Column 2: rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      ]).steps,
      S`Row 3 is $[\,0\ \ 0\ \ 0\mid0\,]$, i.e. $0=0$: equation 3 was a combination of the other two and gives no information. Two equations remain for three unknowns: $x_1-x_2+x_3=2$ and $x_2+x_3=3$.`,
      S`Column 3 has no leading entry, so $x_3$ is free: let $x_3=t$. Row 2: $x_2=3-t$. Row 1: $x_1=2+x_2-x_3=2+(3-t)-t=5-2t$.`,
      S`So $(x_1,x_2,x_3)=(5-2t,\,3-t,\,t)=(5,3,0)+t(-2,-1,1)$. Check with $t=1$, the point $(3,2,1)$: $3-2+1=2$ \checkmark,\ $6-2+3=7$ \checkmark,\ $3+2=5$ \checkmark.`],
    ans: S`$(5,3,0)+t(-2,-1,1)$: the planes share a line` },
  { title: "Why scaling by 0 is forbidden", q: S`The system $x_1+x_2=2$, $x_1-x_2=0$ has the single solution $(1,1)$. What happens to the solution set if we "multiply row 2 by 0"? Why is $R_2\to5R_2$ fine?`,
    fig: F(linesSvg([[1, 1, 2], [1, -1, 0]], V(-1, 3, -1, 3), [1, 1]), 4.4),
    steps: [S`Start: \[${am([[1, 1, 2], [1, -1, 0]])}\] Two lines crossing at $(1,1)$.`,
      S`"Multiply row 2 by 0" (not allowed): \[\longrightarrow\ ${am([[1, 1, 2], [0, 0, 0]])}\] Row 2 now says $0=0$. Only $x_1+x_2=2$ is left, a whole line of solutions such as $(2,0)$ and $(0,2)$ --- solutions were \emph{gained}, and no operation can bring row 2 back.`,
      S`$R_2\to5R_2$ (allowed): \[\longrightarrow\ ${am([[1, 1, 2], [5, -5, 0]])}\] The equation $5x_1-5x_2=0$ describes the same line as $x_1-x_2=0$, and $R_2\to\tfrac15R_2$ restores the original row. The solution is still only $(1,1)$.`],
    ans: S`scaling by 0 enlarges the solution set to a line; scaling by $5$ changes nothing` },
  { title: "A consistency condition", q: S`For which $h$ is the system with augmented matrix $${am([[1, -3, "h"], [-2, 6, -5]])}$ consistent? Describe the lines.`,
    fig: F(linesSvg([[1, -3, 2.5], [-2, 6, -5], [1, -3, -1]], V(-3, 5, -2.5, 1.5)), 4.8),
    steps: [S`Write the matrix with the unknown constant $h$: \[${am([[1, -3, "h"], [-2, 6, -5]])}\]`,
      S`Clear the $-2$ below the leading $1$ by adding twice row 1 to row 2: $(-2,6\mid-5)+2(1,-3\mid h)=(0,0\mid2h-5)$. Operation: $R_2\to R_2+2R_1$. \[\longrightarrow\ ${am([[1, -3, "h"], [0, 0, "2h-5"]])}\]`,
      S`Row 2 is the equation $0=2h-5$. If $2h-5\ne0$ it is a false statement and there is no solution. If $2h-5=0$, i.e. $h=\tfrac52$, it is $0=0$ and only $x_1-3x_2=\tfrac52$ remains.`,
      S`For $h=\tfrac52$ the two rows describe the same line (blue and red together): infinitely many solutions, $x_2=t$, $x_1=\tfrac52+3t$. For any other $h$ the lines are parallel (e.g. $h=-1$, green dashed): no solution.`],
    ans: S`$h=\tfrac52$ (then infinitely many solutions); otherwise none` },
];

const PROBLEMS = [
  { level: 1, q: S`Write the augmented matrix of $2x_1-x_2=7$, $x_1+4x_3=0$, $-x_2+x_3=5$.`, ans: S`$${am([[2, -1, 0, 7], [1, 0, 4, 0], [0, -1, 1, 5]])}$` },
  { level: 1, q: S`Write the system whose augmented matrix is $${am([[1, 0, -2, 3], [0, 1, 5, -1]])}$ and give one of its solutions.`, ans: S`$x_1-2x_3=3$, $x_2+5x_3=-1$; e.g. $(3,-1,0)$` },
  { level: 1, q: S`Which operation turns $${am([[1, 2, 4], [3, 1, 7]])}$ into $${am([[1, 2, 4], [0, -5, -5]])}$, and which operation undoes it?`, ans: S`$R_2\to R_2-3R_1$; undone by $R_2\to R_2+3R_1$` },
  { level: 2, space: 4, q: S`Solve $x_1-2x_2=-3$, $3x_1+x_2=5$ with one row operation. Draw the two original lines and the new second line.`, ans: S`$R_2\to R_2-3R_1$: $7x_2=14$; $(1,2)$`, fig: gridT({ xmin: -3, xmax: 4, ymin: -1, ymax: 5 }),
    sol: [...steps([[1, -2, -3], [3, 1, 5]], [[S`Clear the $3$ below the leading $1$: $(3,1\mid5)-3(1,-2\mid-3)=(0,7\mid14)$.`, ["R2-3R1"]]]).steps,
      S`Row 2: $7x_2=14$, so $x_2=2$. Row 1: $x_1-2(2)=-3$, so $x_1=1$.`,
      S`Lines: $x_1-2x_2=-3$ passes through $(-3,0)$ and $(1,2)$; $3x_1+x_2=5$ through $(0,5)$ and $(1,2)$; the new row is the horizontal line $x_2=2$, also through $(1,2)$. Check: $1-4=-3$ \checkmark,\ $3+2=5$ \checkmark.`] },
  { level: 2, q: S`Solve $${sysT([[1, 1, 1, 4], [1, 2, 3, 9], [2, 3, 5, 14]])}$ with row operations.`, ans: S`$(0,3,1)$`,
    fig: F(planesSvg([[1, 1, 1, 4], [1, 2, 3, 9], [2, 3, 5, 14]], { center: [0, 3, 1], size: 1, len: 3.5, point: [0, 3, 1], label: "?" }), 4.2),
    sol: [...steps([[1, 1, 1, 4], [1, 2, 3, 9], [2, 3, 5, 14]], [
      [S`Column 1: clear the $1$ and the $2$ below the leading $1$.`, ["R2-R1", "R3-2R1"]],
      [S`Column 2: clear the $1$ below the leading $1$ of row 2.`, ["R3-R2"]],
    ]).steps,
      S`Back substitution: $x_3=1$; $x_2+2x_3=5$ gives $x_2=3$; $x_1+x_2+x_3=4$ gives $x_1=0$.`,
      S`Check: $0+3+1=4$ \checkmark,\ $0+6+3=9$ \checkmark,\ $0+9+5=14$ \checkmark.`] },
  { level: 2, q: S`Is the system with augmented matrix $${am([[1, 2, -1, 1], [3, 7, -1, 5], [2, 5, 0, 3]])}$ consistent?`, ans: S`No: the reduction ends with $(0,0,0\mid-1)$`,
    fig: F(matSvg([[1, 2, -1, 1], [3, 7, -1, 5], [2, 5, 0, 3]]), 4),
    sol: [...steps([[1, 2, -1, 1], [3, 7, -1, 5], [2, 5, 0, 3]], [
      [S`Column 1: clear the $3$ and the $2$.`, ["R2-3R1", "R3-2R1"]],
      [S`Column 2: rows 2 and 3 have the same left side; subtract.`, ["R3-R2"]],
    ], { intro: "Start from the matrix" }).steps,
      S`Row 3 says $0x_1+0x_2+0x_3=-1$, which is false for every vector: the system is inconsistent.`] },
  { level: 2, q: S`Show that $${am([[1, 2], [3, 4]], false)}\sim${am([[1, 0], [0, 1]], false)}$ by listing row operations.`, ans: S`$R_2\to R_2-3R_1$, $R_2\to-\tfrac12R_2$, $R_1\to R_1-2R_2$`,
    sol: steps([[1, 2], [3, 4]], [
      [S`Clear the $3$ below the leading $1$.`, ["R2-3R1"]],
      [S`Make the leading entry of row 2 equal to $1$.`, ["R2*-1/2"]],
      [S`Clear the $2$ above it.`, ["R1-2R2"]],
    ], { bar: false, intro: "Start from the matrix" }).steps },
  { level: 2, space: 4, q: S`For which $h$ is the system with augmented matrix $${am([[2, -4, "h"], [-3, 6, 9]])}$ consistent? Sketch the lines for that $h$.`, ans: S`$h=-6$ (then the rows describe the same line)`, fig: gridT({ xmin: -4, xmax: 4, ymin: -4, ymax: 3 }),
    sol: [S`Start: \[${am([[2, -4, "h"], [-3, 6, 9]])}\]`,
      S`Clear the $-3$ by adding $\tfrac32$ times row 1: $(-3,6\mid9)+\tfrac32(2,-4\mid h)=(0,0\mid9+\tfrac32h)$. Operation: $R_2\to R_2+\tfrac32R_1$. \[\longrightarrow\ ${am([[2, -4, "h"], [0, 0, "9+\\tfrac32h"]])}\]`,
      S`Row 2 is $0=9+\tfrac32h$: consistent only when $9+\tfrac32h=0$, i.e. $h=-6$.`,
      S`For $h=-6$ both rows describe $x_1-2x_2=-3$, the line through $(-3,0)$ and $(1,2)$: infinitely many solutions.`] },
  { level: 3, space: 5, q: S`Prove that row equivalence is symmetric and transitive: if $A\sim B$ then $B\sim A$, and if $A\sim B$ and $B\sim C$ then $A\sim C$.`, ans: S`Undo $A\to B$ by the inverse operations in reverse order; concatenate the two sequences of operations`,
    sol: [S`Suppose operations $E_1,\dots,E_k$ (in that order) turn $A$ into $B$. Each $E_i$ has an inverse operation $E_i^{-1}$ of the same type (swap $\to$ same swap; $R_i\to cR_i$ $\to$ $R_i\to\tfrac1cR_i$; $R_i\to R_i+cR_j$ $\to$ $R_i\to R_i-cR_j$).`,
      S`Apply $E_k^{-1},\dots,E_1^{-1}$ to $B$: the first undoes $E_k$, the next undoes $E_{k-1}$, and so on, ending at $A$. So $B\sim A$ (symmetry).`,
      S`If $E_1,\dots,E_k$ turn $A$ into $B$ and $F_1,\dots,F_l$ turn $B$ into $C$, then $E_1,\dots,E_k,F_1,\dots,F_l$ turn $A$ into $C$. So $A\sim C$ (transitivity).`] },
  { level: 3, space: 5, q: S`Swapping columns 1 and 2 of an augmented matrix is \emph{not} a row operation. What does it do to the system and to its solutions? Illustrate with $x_1+2x_2=5$, $x_1-x_2=2$.`, ans: S`It exchanges the roles of $x_1$ and $x_2$; the solution $(3,1)$ becomes $(1,3)$, so the solution set changes`,
    sol: [...steps([[1, 2, 5], [1, -1, 2]], [[S`Solve the original: clear the $1$ below the leading $1$.`, ["R2-R1"]]]).steps,
      S`$-3x_2=-3$, so $x_2=1$ and $x_1=5-2=3$: the solution is $(3,1)$.`,
      S`Swap columns 1 and 2: \[${am([[2, 1, 5], [-1, 1, 2]])}\] This is the system $2x_1+x_2=5$, $-x_1+x_2=2$, whose solution is $(1,3)$ (check: $2+3=5$, $-1+3=2$).`,
      S`The column swap exchanged the names of the unknowns, so the solution set changed from $\{(3,1)\}$ to $\{(1,3)\}$ --- that is why it is not allowed.`] },
  { level: 3, space: 5, q: S`For which $a$ and $b$ does the system with augmented matrix $${am([[1, "a", 2], ["a", 4, "b"]])}$ have exactly one solution, none, or infinitely many?`, ans: S`$R_2-aR_1$: $(0,\ 4-a^2\mid b-2a)$. $a\ne\pm2$: one; $a=2$: infinitely many if $b=4$, else none; $a=-2$: infinitely many if $b=-4$, else none`,
    sol: [S`Start: \[${am([[1, "a", 2], ["a", 4, "b"]])}\]`,
      S`Clear the $a$ below the leading $1$: $(a,4\mid b)-a(1,a\mid2)=(0,\,4-a^2\mid b-2a)$. Operation: $R_2\to R_2-aR_1$. \[\longrightarrow\ ${am([[1, "a", 2], [0, "4-a^2", "b-2a"]])}\]`,
      S`If $4-a^2\ne0$, i.e. $a\ne\pm2$, row 2 has a leading entry: $x_2=\dfrac{b-2a}{4-a^2}$ and then $x_1$ follows --- exactly one solution.`,
      S`If $a=2$, row 2 is $[\,0\ \ 0\mid b-4\,]$: infinitely many solutions when $b=4$, none otherwise. If $a=-2$, row 2 is $[\,0\ \ 0\mid b+4\,]$: infinitely many when $b=-4$, none otherwise.`] },
  { level: 3, space: 5, q: S`Solve the $4\times4$ system $${sysT([[1, 1, 0, 1, 3], [2, 1, 1, 0, 1], [0, 1, 2, 1, 0], [1, 0, 1, 1, 2]])}$ with row operations.`, ans: S`$(1,0,-1,2)$`,
    sol: [...steps([[1, 1, 0, 1, 3], [2, 1, 1, 0, 1], [0, 1, 2, 1, 0], [1, 0, 1, 1, 2]], [
      [S`Column 1: clear the $2$ in row 2 and the $1$ in row 4 (row 3 already has a $0$).`, ["R2-2R1", "R4-R1"]],
      [S`Column 2: the leading entry of row 2 is $-1$. Clear the $1$ in row 3 and the $-1$ in row 4.`, ["R3+R2", "R4-R2"]],
    ]).steps,
      S`Already triangular. Row 4: $2x_4=4$, so $x_4=2$. Row 3: $3x_3-x_4=-5$, so $3x_3=-3$ and $x_3=-1$.`,
      S`Row 2: $-x_2+x_3-2x_4=-5$, so $-x_2-1-4=-5$ and $x_2=0$. Row 1: $x_1+x_2+x_4=3$, so $x_1=1$.`,
      S`Check: $1+0+2=3$ \checkmark,\ $2+0-1=1$ \checkmark,\ $0-2+2=0$ \checkmark,\ $1-1+2=2$ \checkmark.`] },
  { level: 3, space: 5, q: S`After row operations a system reads $${am([[1, 2, -1, 3], [0, 1, "k", 1], [0, 0, "k^2-1", "k-1"]])}$. For which $k$ does it have no solution, one solution, infinitely many?`, ans: S`$k=-1$: none (row $0=-2$); $k=1$: infinitely many; otherwise one`,
    fig: F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "?", "*"]]), 3.6),
    sol: [S`Everything depends on row 3, the equation $(k^2-1)x_3=k-1$, i.e. $(k-1)(k+1)x_3=k-1$.`,
      S`If $k\ne\pm1$, the entry $k^2-1\ne0$ is a leading entry: $x_3=\dfrac{1}{k+1}$, and rows 2 and 1 give $x_2$ and $x_1$ --- one solution.`,
      S`If $k=1$: \[${am([[1, 2, -1, 3], [0, 1, 1, 1], [0, 0, 0, 0]])}\] Row 3 is $0=0$ and $x_3$ is free --- infinitely many solutions.`,
      S`If $k=-1$: \[${am([[1, 2, -1, 3], [0, 1, -1, 1], [0, 0, 0, -2]])}\] Row 3 is $0=-2$ --- no solution.`] },
];

export const WS = {
  code: "2.2",
  title: "Augmented Matrices and Elementary Row Operations",
  bigideas: S`All the information in a linear system is in its numbers. The \textbf{augmented matrix} $[A\mid\vec b]$ keeps exactly those numbers, one row per equation. Three \textbf{elementary row operations} --- swap two rows, scale a row by a nonzero number, add a multiple of one row to another --- change the equations but never the solutions, because every operation can be undone. Used systematically they reduce any system to a triangular shape, where the solution (or the impossibility of one) can be read off.`,
  goals: ["Write the coefficient matrix, constant vector and augmented matrix of a system, and recover the system from a matrix.", "Perform and name the three elementary row operations and their inverses.", "Prove that row operations preserve the solution set, and say which operations are not allowed.", "Reduce systems to triangular form and solve them.", "Recognise inconsistent systems and find consistency conditions on a parameter."],
  curriculum: "Systems of linear equations — augmented matrices and elementary row operations",
  vocab: [["Coefficient matrix", "$A=[a_{ij}]$, $m\\times n$"], ["Augmented matrix", "$[A\\mid\\vec b]$, $m\\times(n+1)$"], ["Elementary row operation", "swap, scale by $c\\ne0$, add $c$ times another row"], ["Row equivalent", "$A\\sim B$: related by row operations"], ["Inconsistent row", "$[\\,0\\ \\cdots\\ 0\\mid c\\,]$ with $c\\ne0$"]],
  hook: S`Solve $x_1+x_2+x_3=6$, $x_1+2x_2+3x_3=14$, $x_1+4x_2+9x_3=36$ by any method you like. Then do it again writing only the numbers. Which steps did you actually need?`,
  concepts: NOTES,
  summary: [
    S`$[A\mid\vec b]$: row $i$ = equation $i$, column $j$ = unknown $x_j$; write 0 for missing unknowns.`,
    S`Operations: $R_i\leftrightarrow R_j$; $R_i\to cR_i$ ($c\ne0$); $R_i\to R_i+cR_j$ ($j\ne i$); each has an inverse of the same type.`,
    S`Row-equivalent systems have the same solutions (proof: each operation keeps solutions and is reversible).`,
    S`Strategy: zeros below each leading entry, then back substitution.`,
    S`$[\,0\cdots0\mid c\,]$, $c\ne0$: inconsistent; $[\,0\cdots0\mid0\,]$: harmless.`,
  ],
  tips: ["Write a 0 for every missing unknown.", "Apply each operation to the \\emph{whole} row, constant included.", "Only the row being replaced changes in $R_i\\to R_i+cR_j$.", "Never multiply a row by 0, and never replace a row by a multiple of another row.", "To undo a sequence of operations, undo them in reverse order.", "Check the final answer in the original equations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
