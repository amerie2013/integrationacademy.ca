// LINALG1 Worksheet 2.4 — Gaussian and Gauss–Jordan Elimination
// Self-contained: complete notes (the algorithm, back substitution vs the backward phase, choosing pivots, partial
// pivoting, systems with parameters), 9 worked examples with figures, 13 practice problems, answer key.
import { gridT, svgT } from "./figT.mjs";
import { S, def, thm, side } from "./wkit.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg, flowSvg } from "./fig2.mjs";
import { sys, am, steps } from "../bank/la.mjs";

const F = (svg, w = 5.2) => svgT(svg, w);
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;
const V = (xmin, xmax, ymin, ymax) => ({ xmin, xmax, ymin, ymax });

// ── notes figures ──
const F_FLOW = F(flowSvg([["1. Leftmost column with a nonzero entry", "swap a nonzero entry to the top", "blue"], ["2. Zeros below the pivot", "Rᵢ → Rᵢ − (a/p)·R_pivot", "blue"], ["3. Repeat on the rows below", "→ row echelon form", "blue"], ["4. Scale pivots to 1, bottom up", "backward phase", "amber"], ["5. Zeros above each pivot", "→ reduced row echelon form", "amber"]], 330), 5.8);
const F_PHASES = F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "p", "*"]]), 3) + F(stairSvg([["1", "0", "0", "*"], ["0", "1", "0", "*"], ["0", "0", "1", "*"]]), 3);
const F_PIVOT = F(matSvg([[2, 1, -1, 3], [-5, 3, 2, 1], [1, 0, 4, 2]], [[1, 0]], true, 1), 4.4);
const F_FREE = F(planesSvg([[1, 0, 1, 2], [0, 1, -1, 1]], { center: [1, 1, 0.5], size: 1.4, len: 3.5, line: { p: [2, 1, 0], d: [-1, 1, 1], t0: -0.5, t1: 1.6 } }), 5);
const F_PARAM = F(stairSvg([["p", "*", "*", "*"], ["0", "p", "*", "*"], ["0", "0", "k−5", "h−3"]]), 4);

const NOTES = [
  { h: "1. The elimination algorithm",
    lead: S`\textbf{Gaussian elimination} (forward phase, steps 1--3) turns any matrix into a row echelon form; back substitution then solves the system. \textbf{Gauss--Jordan elimination} adds a backward phase (steps 4--5) and ends with the reduced row echelon form, from which the solution is read off.

The forward phase works column by column, left to right. In step 2 the entry $a$ below the pivot $p$ is cleared by $R_i\to R_i-\dfrac ap\,R_{\text{pivot}}$; the pivot row itself does not change. After a pass, the pivot row is "covered" and the algorithm repeats on the rows below it.`,
    fig: F_FLOW, w: 0.52,
    body: thm("termination", S`Applied to any matrix, the algorithm stops after finitely many row operations, with the matrix in RREF.`) + S`\pf{Each pass of steps 1--3 fixes one pivot and continues on a strictly smaller block of rows, so there are at most $m$ passes; the backward phase visits each pivot once. The result has leading 1s with zeros above and below them.}` },

  { h: "2. Back substitution or backward phase?",
    lead: S`Both finish the job; they do the same arithmetic in a different order.
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Back substitution} (from REF, left figure): solve the last equation, substitute upward. Fewer operations; natural for a unique solution.
\item \textbf{Backward phase} (to RREF, right figure): scale each pivot to 1 starting from the bottom, then clear the entries \emph{above} it. The solution --- including free variables --- is read off with no substitution.
\end{itemize}`,
    fig: F_PHASES, w: 0.56,
    body: S`\textbf{Tip.} In the backward phase work from the \emph{lowest} pivot upward: clearing above a lower pivot never disturbs the zeros already created in higher columns.` },

  { h: "3. Choosing pivots",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item If the entry in the pivot position is 0, \textbf{swap} with a lower row that has a nonzero entry there. If there is none, the column has no pivot: move one column right, \emph{same} row.
\item By hand, prefer a pivot equal to $\pm1$ (swap it up): no fractions appear.
\item On a computer, use \textbf{partial pivoting}: in each column choose the entry of \emph{largest absolute value} (in the figure: $-5$). Dividing by tiny pivots magnifies rounding errors (Example 9).
\end{itemize}
Different choices give different intermediate matrices but the same RREF and the same solutions.`,
    fig: F_PIVOT, w: 0.58 },

  { h: "4. When columns have no pivot",
    lead: S`If elimination leaves a column without a pivot, that variable is \textbf{free}. Gauss--Jordan then expresses each basic variable in terms of the free ones. For instance a reduction ending with
\[${am([[1, 0, 1, 2], [0, 1, -1, 1], [0, 0, 0, 0]])}\]
gives $x_3=t$, $x_1=2-t$, $x_2=1+t$: the line $(2,1,0)+t(-1,1,1)$ where the two planes $x_1+x_3=2$ and $x_2-x_3=1$ meet (figure).`,
    fig: F_FREE, w: 0.56,
    body: S`If a row $[\,0\ \cdots\ 0\mid c\,]$ with $c\ne0$ appears at any stage, you may stop: the system is inconsistent, whatever happens to the other rows.` },

  { h: "5. Systems with a parameter",
    lead: S`When a coefficient or constant is a letter, eliminate as usual, keeping the letter in the entries. Divide only by expressions you know are nonzero. At the end the last nonzero rows look like $[\,0\ 0\ k-5\mid h-3\,]$ (figure), and you split into cases:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $k-5\ne0$: a pivot --- exactly one solution;
\item $k-5=0$, $h-3\ne0$: the row reads $0=$ nonzero --- no solution;
\item $k-5=0$, $h-3=0$: a zero row --- infinitely many.
\end{itemize}`,
    fig: F_PARAM, w: 0.6 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "Gaussian elimination and back substitution", q: S`Solve $${sysT([[1, 3, -1, -8], [2, 5, 1, -5], [-1, -2, 3, 12]])}$.`,
    fig: F(planesSvg([[1, 3, -1, -8], [2, 5, 1, -5], [-1, -2, 3, 12]], { center: [1, -2, 3], size: 0.9, len: 3.5, point: [1, -2, 3], label: "(1, −2, 3)" }), 4.6),
    steps: [
      ...steps([[1, 3, -1, -8], [2, 5, 1, -5], [-1, -2, 3, 12]], [
        [S`\textbf{Forward phase}, column 1: the pivot is the leading $1$. Clear the $2$ and the $-1$ below it.`, ["R2-2R1", "R3+R1"]],
        [S`Column 2: the pivot is the $-1$ in row 2. Clear the $1$ below it by adding row 2.`, ["R3+R2"]],
      ]).steps,
      S`\textbf{Back substitution}, bottom row first. Row 3: $5x_3=15$, so $x_3=3$. Row 2: $-x_2+3x_3=11$, so $-x_2+9=11$ and $x_2=-2$. Row 1: $x_1+3x_2-x_3=-8$, so $x_1-6-3=-8$ and $x_1=1$.`,
      S`Check in the original equations: $1-6-3=-8$ \checkmark,\ $2-10+3=-5$ \checkmark,\ $-1+4+9=12$ \checkmark.`],
    ans: S`$(1,-2,3)$` },
  { title: "Gauss–Jordan all the way", q: S`Use Gauss--Jordan elimination on $${am([[2, -2, 4, -2], [1, 0, 3, -1], [3, -1, 5, 0]])}$.`,
    fig: F(matSvg([[1, 0, 0, 2], [0, 1, 0, 1], [0, 0, 1, -1]], [[0, 0], [1, 1], [2, 2]]), 3.8),
    steps: [
      ...steps([[2, -2, 4, -2], [1, 0, 3, -1], [3, -1, 5, 0]], [
        [S`Column 1: make the pivot $1$ (every entry of row 1 is even, so no fractions appear).`, ["R1*1/2"]],
        [S`Clear the $1$ and the $3$ below the pivot.`, ["R2-R1", "R3-3R1"]],
        [S`Column 2: the pivot of row 2 is already $1$. Clear the $2$ below it.`, ["R3-2R2"]],
        [S`Column 3: make the pivot $1$. The forward phase is finished (REF).`, ["R3*-1/3"]],
        [S`\textbf{Backward phase}: clear column 3 above its pivot.`, ["R2-R3", "R1-2R3"]],
        [S`Clear column 2 above its pivot.`, ["R1+R2"]],
      ], { intro: "Start from the matrix" }).steps,
      S`RREF $[\,I\mid(2,1,-1)\,]$: read off $x_1=2$, $x_2=1$, $x_3=-1$. Check: $4-2-4=-2$ \checkmark,\ $2+0-3=-1$ \checkmark,\ $6-1-5=0$ \checkmark.`],
    ans: S`RREF $[\,I\mid(2,1,-1)\,]$: $(2,1,-1)$` },
  { title: "A zero appears in the pivot position", q: S`Solve $${sysT([[1, 2, 1, 4], [2, 4, 3, 9], [1, 3, 5, 11]])}$.`,
    fig: F(matSvg([[1, 2, 1, 4], [0, 0, 1, 1], [0, 1, 4, 7]], [[0, 0]], true, 1), 4),
    steps: [
      ...steps([[1, 2, 1, 4], [2, 4, 3, 9], [1, 3, 5, 11]], [
        [S`Column 1: clear the $2$ and the $1$ below the leading $1$.`, ["R2-2R1", "R3-R1"]],
        [S`Column 2: the entry in the pivot position (row 2) is now $0$ (highlighted row in the figure), so it cannot be a pivot. Row 3 has a $1$ there: swap.`, ["R2<->R3"]],
      ]).steps,
      S`The matrix is in REF. Back substitution: $x_3=1$; row 2: $x_2+4x_3=7$, so $x_2=3$; row 1: $x_1+2x_2+x_3=4$, so $x_1=4-6-1=-3$.`,
      S`Check: $-3+6+1=4$ \checkmark,\ $-6+12+3=9$ \checkmark,\ $-3+9+5=11$ \checkmark.`],
    ans: S`$(-3,3,1)$` },
  { title: "Two free variables", q: S`Solve $${sysT([[1, -2, 1, 3, 2], [2, -4, 3, 5, 7], [-1, 2, 1, -5, 4]])}$.`,
    fig: F(stairSvg([["1", "*", "0", "*", "*"], ["0", "0", "1", "*", "*"], ["0", "0", "0", "0", "0"]]), 4),
    steps: [
      ...steps([[1, -2, 1, 3, 2], [2, -4, 3, 5, 7], [-1, 2, 1, -5, 4]], [
        [S`Column 1: clear below the leading $1$. Column 2 then becomes all zeros below row 1, so it has no pivot.`, ["R2-2R1", "R3+R1"]],
        [S`Column 3: the pivot is the $1$ in row 2. Clear the $2$ below it.`, ["R3-2R2"]],
        [S`Row 3 is all zeros. \textbf{Backward phase}: clear the $1$ above the pivot of column 3.`, ["R1-R2"]],
      ]).steps,
      S`RREF with pivots in columns 1 and 3. Free: $x_2=s$, $x_4=t$. Row 1: $x_1-2x_2+4x_4=-1$, so $x_1=-1+2s-4t$. Row 2: $x_3-x_4=3$, so $x_3=3+t$.`,
      S`$\vec x=(-1,0,3,0)+s(2,1,0,0)+t(-4,0,1,1)$. Check $s=t=0$: $-1+3=2$ \checkmark,\ $-2+9=7$ \checkmark,\ $1+3=4$ \checkmark.`],
    ans: S`$(-1,0,3,0)+s(2,1,0,0)+t(-4,0,1,1)$` },
  { title: "Stopping early: inconsistent", q: S`Solve $${sysT([[1, 1, -2, 1], [3, 2, 1, 5], [4, 3, -1, 7]])}$.`,
    fig: F(planesSvg([[1, 1, -2, 1], [3, 2, 1, 5], [4, 3, -1, 7]], { center: [1, 0.5, 0.5], size: 1, len: 3 }), 4.4),
    steps: [
      ...steps([[1, 1, -2, 1], [3, 2, 1, 5], [4, 3, -1, 7]], [
        [S`Column 1: clear the $3$ and the $4$.`, ["R2-3R1", "R3-4R1"]],
        [S`Column 2: rows 2 and 3 have the same left side; subtract.`, ["R3-R2"]],
      ]).steps,
      S`Row 3 is $[\,0\ \ 0\ \ 0\mid1\,]$, the equation $0=1$. Stop: the system is inconsistent, and no backward phase is needed.`,
      S`Why: equation 3 has the left side of equations 1 $+$ 2, namely $4x_1+3x_2-x_3$, but its constant is $7$, not $1+5=6$.`],
    ans: S`no solution` },
  { title: "Pivots of 1 avoid fractions", q: S`Solve $${sysT([[3, 2, -1, 4], [2, -1, 3, 9], [1, 1, 1, 6]])}$ without fractions.`,
    fig: F(planesSvg([[3, 2, -1, 4], [2, -1, 3, 9], [1, 1, 1, 6]], { center: [1, 2, 3], size: 0.9, len: 3.5, point: [1, 2, 3] }), 4.4),
    steps: [
      ...steps([[3, 2, -1, 4], [2, -1, 3, 9], [1, 1, 1, 6]], [
        [S`Row 3 starts with $1$: swap it to the top so the first pivot is $1$.`, ["R1<->R3"]],
        [S`Clear the $2$ and the $3$ below the pivot (whole-number multipliers).`, ["R2-2R1", "R3-3R1"]],
        [S`In column 2 the entry $-1$ (row 3) divides everything; swap it up to be the pivot.`, ["R2<->R3"]],
        [S`Clear the $-3$ below the pivot $-1$.`, ["R3-3R2"]],
      ]).steps,
      S`Back substitution: $13x_3=39$, so $x_3=3$; $-x_2-4x_3=-14$, so $-x_2=-2$ and $x_2=2$; $x_1+x_2+x_3=6$, so $x_1=1$. No fraction appeared anywhere.`,
      S`Check: $3+4-3=4$ \checkmark,\ $2-2+9=9$ \checkmark,\ $1+2+3=6$ \checkmark.`],
    ans: S`$(1,2,3)$` },
  { title: "A parameter in two places", q: S`For which $k$ and $h$ does $${sysT([[1, 1, 1, 1], [1, 2, 3, 2], [1, 3, "k", "h"]])}$ have one solution, none, or infinitely many?`,
    fig: F_PARAM,
    steps: [S`Write the augmented matrix: \[${am([[1, 1, 1, 1], [1, 2, 3, 2], [1, 3, "k", "h"]])}\]`,
      S`Column 1: clear below the leading $1$. Operations: $R_2\to R_2-R_1,\ R_3\to R_3-R_1$. \[\longrightarrow\ ${am([[1, 1, 1, 1], [0, 1, 2, 1], [0, 2, "k-1", "h-1"]])}\]`,
      S`Column 2: clear the $2$. Operation: $R_3\to R_3-2R_2$; entries $(k-1)-2(2)=k-5$ and $(h-1)-2(1)=h-3$. \[\longrightarrow\ ${am([[1, 1, 1, 1], [0, 1, 2, 1], [0, 0, "k-5", "h-3"]])}\]`,
      S`$k\ne5$: $k-5$ is a third pivot, no free variables --- one solution. $k=5$, $h\ne3$: row 3 is $0=h-3\ne0$ --- none.`,
      S`$k=5$, $h=3$: row 3 is $0=0$ and $x_3=t$ is free; row 2: $x_2=1-2t$; row 1: $x_1=1-x_2-x_3=1-(1-2t)-t=t$. So $\vec x=(0,1,0)+t(1,-2,1)$; check $t=1$, $(1,-1,1)$: $1-1+1=1$ \checkmark,\ $1-2+3=2$ \checkmark,\ $1-3+5=3$ \checkmark.`],
    ans: S`$k\ne5$: one; $k=5,h\ne3$: none; $k=5,h=3$: $(0,1,0)+t(1,-2,1)$` },
  { title: "A 4 × 4 system", q: S`Solve $${sysT([[1, 1, 1, 1, 2], [1, -1, 1, -1, 0], [1, 1, -1, -1, 2], [2, 1, 0, 1, 5]])}$.`,
    fig: F(stairSvg([["p", "*", "*", "*", "*"], ["0", "p", "*", "*", "*"], ["0", "0", "p", "*", "*"], ["0", "0", "0", "p", "*"]]), 3.8),
    steps: [
      ...steps([[1, 1, 1, 1, 2], [1, -1, 1, -1, 0], [1, 1, -1, -1, 2], [2, 1, 0, 1, 5]], [
        [S`Column 1: clear rows 2, 3, 4.`, ["R2-R1", "R3-R1", "R4-2R1"]],
        [S`Column 2: scale row 2 to get a pivot $1$, then clear the $-1$ in row 4 (row 3 already has $0$).`, ["R2*-1/2", "R4+R2"]],
        [S`Column 3: the pivot is the $-2$ in row 3; clear the $-2$ below it.`, ["R4-R3"]],
      ]).steps,
      S`Back substitution: row 4: $2x_4=2$, so $x_4=1$. Row 3: $-2x_3-2x_4=0$, so $x_3=-1$. Row 2: $x_2+x_4=1$, so $x_2=0$. Row 1: $x_1+x_2+x_3+x_4=2$, so $x_1=2$.`,
      S`Check: $2+0-1+1=2$ \checkmark,\ $2-0-1-1=0$ \checkmark,\ $2+0+1-1=2$ \checkmark,\ $4+0+0+1=5$ \checkmark.`],
    ans: S`$(2,0,-1,1)$` },
  { title: "Why computers pivot", q: S`Solve $0.0001x_1+x_2=1$, $x_1+x_2=2$ rounding every result to 3 significant digits, (a) using the first row as the pivot row, (b) after swapping the rows. Compare with the exact solution $x_1=\tfrac{10000}{9999}\approx1.0001$, $x_2\approx0.9999$.`,
    fig: F(linesSvg([[0.0001, 1, 1], [1, 1, 2]], V(-0.5, 2.5, -0.5, 2.5), [1, 1], "≈ (1, 1)"), 4.2),
    steps: [S`(a) Pivot $0.0001$, multiplier $1/0.0001=10000$. Operation $R_2\to R_2-10000R_1$: \[${am([["0.0001", 1, 1], [1, 1, 2]])}\ \longrightarrow\ ${am([["0.0001", 1, 1], [0, "-9999", "-9998"]])}\ \xrightarrow{\text{round}}\ ${am([["0.0001", 1, 1], [0, "-10000", "-10000"]])}\]`,
      S`Then $x_2=1.00$, and row 1 gives $0.0001x_1=1-1=0$, so $x_1=0$ --- completely wrong.`,
      S`(b) Swap first, so the pivot is $1$ and the multiplier is $0.0001$. Operation $R_2\to R_2-0.0001R_1$: \[${am([[1, 1, 2], ["0.0001", 1, 1]])}\ \longrightarrow\ ${am([[1, 1, 2], [0, "0.9999", "0.9998"]])}\ \xrightarrow{\text{round}}\ ${am([[1, 1, 2], [0, "1.00", "1.00"]])}\]`,
      S`Then $x_2=1.00$ and $x_1=2-1=1.00$, correct to 3 digits. The tiny pivot multiplied the rounding error by $10000$; the large pivot did not. This is why programs use \emph{partial pivoting}.`],
    ans: S`(a) $(0,1)$ --- wrong; (b) $(1.00,1.00)$ --- correct to 3 digits` },
];

const PROBLEMS = [
  { level: 1, q: S`Use one row operation and back substitution to solve $x_1+2x_2=5$, $3x_1+4x_2=6$.`, ans: S`$R_2-3R_1$: $-2x_2=-9$; $(-4,\ 4.5)$`,
    sol: [...steps([[1, 2, 5], [3, 4, 6]], [[S`Clear the $3$ below the leading $1$.`, ["R2-3R1"]]]).steps,
      S`$-2x_2=-9$, so $x_2=4.5$; then $x_1=5-2(4.5)=-4$. Check: $3(-4)+4(4.5)=6$ \checkmark.`] },
  { level: 1, q: S`Partial pivoting is used on $${am([[2, 1, 3], [-5, 4, 0], [3, -2, 1]])}$. Which entry of column 1 becomes the first pivot, and which operation comes first?`, ans: S`$-5$; $R_1\leftrightarrow R_2$`,
    sol: [S`Partial pivoting picks the entry of largest absolute value in the column: $|2|,|-5|,|3|$, so $-5$.`,
      ...steps([[2, 1, 3], [-5, 4, 0], [3, -2, 1]], [
        [S`Bring it to the top.`, ["R1<->R2"]],
        [S`Then clear below it (multipliers $\tfrac25$ and $\tfrac35$, both less than $1$ in size).`, ["R2+2/5R1", "R3+3/5R1"]],
      ], { bar: false, intro: "Start" }).steps] },
  { level: 1, q: S`Back-substitute in the REF $${am([[2, -1, 3, 7], [0, 4, -2, 2], [0, 0, 5, 10]])}$.`, ans: S`$x_3=2$, $x_2=1.5$, $x_1=1.25$`,
    sol: [S`Row 3: $5x_3=10$, so $x_3=2$.`, S`Row 2: $4x_2-2(2)=2$, so $4x_2=6$ and $x_2=1.5$.`, S`Row 1: $2x_1-1.5+3(2)=7$, so $2x_1=2.5$ and $x_1=1.25$.`] },
  { level: 2, q: S`Solve $${sysT([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]])}$ by Gaussian elimination.`, ans: S`$(1,2,3)$`,
    fig: F(planesSvg([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]], { center: [1, 2, 3], size: 0.9, len: 3.5, point: [1, 2, 3], label: "?" }), 4),
    sol: [...steps([[1, 1, 1, 6], [2, -1, 1, 3], [1, 2, -1, 2]], [
      [S`Column 1: clear below the leading $1$.`, ["R2-2R1", "R3-R1"]],
      [S`Column 2: swap so that the pivot is $1$ instead of $-3$.`, ["R2<->R3"]],
      [S`Clear the $-3$ below the pivot.`, ["R3+3R2"]],
    ]).steps,
      S`$-7x_3=-21$, so $x_3=3$; $x_2-2x_3=-4$, so $x_2=2$; $x_1+x_2+x_3=6$, so $x_1=1$.`,
      S`Check: $1+2+3=6$ \checkmark,\ $2-2+3=3$ \checkmark,\ $1+4-3=2$ \checkmark.`] },
  { level: 2, q: S`Solve $${sysT([[1, 2, 0, -1, 4], [2, 4, 1, 1, 11], [0, 0, 1, 3, 3]])}$ by Gauss--Jordan elimination.`, ans: S`$(4,0,3,0)+s(-2,1,0,0)+t(1,0,-3,1)$`,
    sol: [...steps([[1, 2, 0, -1, 4], [2, 4, 1, 1, 11], [0, 0, 1, 3, 3]], [
      [S`Column 1: clear the $2$. Column 2 then has no pivot; row 2 leads in column 3.`, ["R2-2R1"]],
      [S`Clear the $1$ below the pivot of column 3. Column 3 has nothing above the pivot, so this is already the RREF.`, ["R3-R2"]],
    ]).steps,
      S`Pivots in columns 1 and 3; free $x_2=s$, $x_4=t$. Row 1: $x_1=4-2s+t$. Row 2: $x_3=3-3t$.`,
      S`$\vec x=(4,0,3,0)+s(-2,1,0,0)+t(1,0,-3,1)$. Check $s=0,t=1$, $(5,0,0,1)$: $5-1=4$ \checkmark,\ $10+1=11$ \checkmark,\ $0+3=3$ \checkmark.`] },
  { level: 2, q: S`Solve $${sysT([[0, 1, -1, 1], [2, 4, 2, 8], [1, 1, 2, 5]])}$ (a swap is needed) or show it is inconsistent.`, ans: S`inconsistent (a row $0=2$ appears)`,
    sol: [...steps([[0, 1, -1, 1], [2, 4, 2, 8], [1, 1, 2, 5]], [
      [S`Row 1 has $0$ in column 1; bring row 3 (leading $1$) to the top.`, ["R1<->R3"]],
      [S`Clear the $2$ below the pivot.`, ["R2-2R1"]],
      [S`Column 2: make the pivot $1$.`, ["R2*1/2"]],
      [S`Clear the $1$ below it.`, ["R3-R2"]],
    ]).steps,
      S`Row 3 reads $0=2$: the system is inconsistent.`] },
  { level: 2, q: S`How many solutions does $${sysT([[1, -1, 2, 3], [2, 1, 1, 9], [3, 0, 3, 10]])}$ have? Show the elimination.`, ans: S`none: the elimination ends with $0=-2$`,
    fig: F(planesSvg([[1, -1, 2, 3], [2, 1, 1, 9], [3, 0, 3, 10]], { center: [2, 1, 1], size: 1, len: 3 }), 4),
    sol: [...steps([[1, -1, 2, 3], [2, 1, 1, 9], [3, 0, 3, 10]], [
      [S`Column 1: clear the $2$ and the $3$.`, ["R2-2R1", "R3-3R1"]],
      [S`Column 2: rows 2 and 3 have the same left side; subtract.`, ["R3-R2"]],
    ]).steps,
      S`Row 3 says $0=-2$: no solution. (Equation 3 has the left side of equations 1 $+$ 2 but constant $10\ne12$.)`] },
  { level: 2, q: S`Find the RREF of $${am([[1, 1, 2, 0, 1], [2, 2, 5, 1, 3], [1, 1, 3, 1, 2]])}$ and the general solution.`, ans: S`$${am([[1, 1, 0, -2, -1], [0, 0, 1, 1, 1], [0, 0, 0, 0, 0]])}$; $(-1,0,1,0)+s(-1,1,0,0)+t(2,0,-1,1)$`,
    fig: F(stairSvg([["?", "?", "?", "?", "?"], ["?", "?", "?", "?", "?"], ["?", "?", "?", "?", "?"]]), 3.6),
    sol: [...steps([[1, 1, 2, 0, 1], [2, 2, 5, 1, 3], [1, 1, 3, 1, 2]], [
      [S`Column 1: clear below the leading $1$. Column 2 becomes zero below row 1: no pivot there.`, ["R2-2R1", "R3-R1"]],
      [S`Column 3: the pivot is the $1$ in row 2; clear the $1$ below it.`, ["R3-R2"]],
      [S`Backward phase: clear the $2$ above that pivot.`, ["R1-2R2"]],
    ], { intro: "Start from the matrix" }).steps,
      S`Pivots in columns 1, 3; free $x_2=s$, $x_4=t$. Row 1: $x_1=-1-s+2t$. Row 2: $x_3=1-t$. So $\vec x=(-1,0,1,0)+s(-1,1,0,0)+t(2,0,-1,1)$.`] },
  { level: 3, space: 5, q: S`For which $k$ and $h$ does $x+y+z=2$, $x+2y-z=1$, $2x+3y+kz=h$ have one solution, none, infinitely many?`, ans: S`$(0,0,k\mid h-3)$ at the end: $k\ne0$ one; $k=0,h\ne3$ none; $k=0,h=3$ infinitely many`,
    sol: [S`Augmented matrix: \[${am([[1, 1, 1, 2], [1, 2, -1, 1], [2, 3, "k", "h"]])}\]`,
      S`Column 1. Operations: $R_2\to R_2-R_1,\ R_3\to R_3-2R_1$. \[\longrightarrow\ ${am([[1, 1, 1, 2], [0, 1, -2, -1], [0, 1, "k-2", "h-4"]])}\]`,
      S`Column 2. Operation: $R_3\to R_3-R_2$; entries $(k-2)+2=k$ and $(h-4)+1=h-3$. \[\longrightarrow\ ${am([[1, 1, 1, 2], [0, 1, -2, -1], [0, 0, "k", "h-3"]])}\]`,
      S`$k\ne0$: three pivots, one solution. $k=0$, $h\ne3$: $0=h-3\ne0$, none. $k=0$, $h=3$: zero row, $z$ free, infinitely many.`] },
  { level: 3, space: 5, q: S`Solve $${sysT([[2, 1, 0, 1, 5], [1, 0, 1, 2, 4], [0, 1, 1, -1, -2], [1, 1, 0, 0, 2]])}$.`, ans: S`$(1,1,-1,2)$`,
    sol: [...steps([[2, 1, 0, 1, 5], [1, 0, 1, 2, 4], [0, 1, 1, -1, -2], [1, 1, 0, 0, 2]], [
      [S`Put a leading $1$ on top.`, ["R1<->R2"]],
      [S`Column 1: clear the $2$ and the $1$.`, ["R2-2R1", "R4-R1"]],
      [S`Column 2: the pivot is the $1$ in row 2; clear rows 3 and 4.`, ["R3-R2", "R4-R2"]],
      [S`Column 3: row 4 has a $1$ there, a better pivot than $3$; swap.`, ["R3<->R4"]],
      [S`Clear the $3$ below the pivot.`, ["R4-3R3"]],
    ]).steps,
      S`Back substitution: $-x_4=-2$, so $x_4=2$; $x_3+x_4=1$, so $x_3=-1$; $x_2-2x_3-3x_4=-3$, so $x_2=-3-2+6=1$; $x_1+x_3+2x_4=4$, so $x_1=4+1-4=1$.`,
      S`Check: $2+1+0+2=5$ \checkmark,\ $1-1+4=4$ \checkmark,\ $1-1-2=-2$ \checkmark,\ $1+1=2$ \checkmark.`] },
  { level: 3, space: 5, q: S`Solve $0.0002x_1+x_2=1$, $x_1-x_2=0$ with 3-significant-digit rounding, with and without swapping the rows. Which answer is right?`, ans: S`no swap: $x_2=1.00$, $x_1=0$ (wrong); swap: $x_1=x_2=1.00$ (right; exact $\approx0.9998$)`,
    fig: gridT({ xmin: -1, xmax: 2, ymin: -1, ymax: 2 }),
    sol: [S`No swap, $R_2\to R_2-5000R_1$: \[${am([["0.0002", 1, 1], [1, -1, 0]])}\ \longrightarrow\ ${am([["0.0002", 1, 1], [0, "-5001", "-5000"]])}\ \xrightarrow{\text{round}}\ ${am([["0.0002", 1, 1], [0, "-5000", "-5000"]])}\] so $x_2=1.00$ and $0.0002x_1=0$, $x_1=0$: wrong.`,
      S`Swap, then $R_2\to R_2-0.0002R_1$: \[${am([[1, -1, 0], ["0.0002", 1, 1]])}\ \longrightarrow\ ${am([[1, -1, 0], [0, "1.0002", 1]])}\ \xrightarrow{\text{round}}\ ${am([[1, -1, 0], [0, "1.00", "1.00"]])}\] so $x_2=1.00$, $x_1=1.00$.`,
      S`Exact: $x_1=x_2=1/1.0002\approx0.9998$. The swapped version is right to 3 digits.`] },
  { level: 3, space: 5, q: S`Count the multiplications and divisions in the forward phase for a $3\times4$ augmented matrix with nonzero pivots (one division per multiplier, one multiplication per updated entry).`, ans: S`pass 1: $2\times(1+3)=8$; pass 2: $1\times(1+2)=3$; total 11`,
    sol: [S`Pass 1 (column 1): rows 2 and 3 each need one division (the multiplier) and one multiplication for each of the 3 entries to the right of column 1: $2\times(1+3)=8$.`,
      S`Pass 2 (column 2): row 3 needs one division and multiplications for the 2 entries right of column 2: $1\times(1+2)=3$.`,
      S`Total $8+3=11$. (The entries in the pivot column become $0$ by design, so they are not computed.)`] },
  { level: 3, space: 5, q: S`Find all solutions of $x_1+x_2+x_3=10$, $x_1-x_2+2x_3=4$ in nonnegative integers.`, ans: S`$x_3=t$, $x_1=7-1.5t$, $x_2=3+0.5t$: $(7,3,0)$, $(4,4,2)$, $(1,5,4)$`,
    sol: [...steps([[1, 1, 1, 10], [1, -1, 2, 4]], [
      [S`Clear the $1$ below the leading $1$.`, ["R2-R1"]],
      [S`Make the pivot $1$.`, ["R2*-1/2"]],
      [S`Clear above it.`, ["R1-R2"]],
    ]).steps,
      S`$x_3=t$ free: $x_1=7-\tfrac32t$, $x_2=3+\tfrac12t$. Integers need $t$ even; $x_1\ge0$ needs $t\le\tfrac{14}3$; $x_3\ge0$ needs $t\ge0$. So $t=0,2,4$.`,
      S`$t=0$: $(7,3,0)$; $t=2$: $(4,4,2)$; $t=4$: $(1,5,4)$. Check $(4,4,2)$: $4+4+2=10$ \checkmark,\ $4-4+4=4$ \checkmark.`] },
];

export const WS = {
  code: "2.4",
  title: "Gaussian and Gauss–Jordan Elimination",
  bigideas: S`Row operations applied in a fixed order give an algorithm that solves every linear system. \textbf{Gaussian elimination} works column by column, creating zeros below each pivot until the matrix is in row echelon form, then back-substitutes. \textbf{Gauss--Jordan elimination} continues upward to the reduced row echelon form. The same steps reveal a unique solution, free variables, or an inconsistency, and with a sensible choice of pivots they are exactly what computers use.`,
  goals: ["Carry out the forward phase and back substitution.", "Carry out the backward phase to reach the RREF.", "Choose pivots well: swap zeros away, avoid fractions, use partial pivoting with decimals.", "Solve systems with one solution, free variables or none.", "Analyse systems whose coefficients depend on parameters."],
  curriculum: "Systems of linear equations — Gaussian and Gauss–Jordan elimination",
  vocab: [["Pivot", "the entry used to clear its column"], ["Forward phase", "zeros below the pivots → REF"], ["Backward phase", "leading 1s and zeros above → RREF"], ["Back substitution", "solving an REF from the bottom up"], ["Partial pivoting", "choosing the pivot of largest absolute value"]],
  hook: S`A computer solves systems with a million unknowns. It cannot "look for a clever trick" --- it needs a recipe that always works. Write down, in words, a recipe for solving three equations in three unknowns that never needs guessing.`,
  concepts: NOTES,
  summary: [
    S`Forward phase: leftmost nonzero column, pivot at the top, zeros below; repeat below → REF.`,
    S`Finish with back substitution, or with the backward phase (pivots to 1 from the bottom, zeros above) → RREF.`,
    S`Swap when the pivot position is 0; by hand prefer pivots $\pm1$; by computer use partial pivoting.`,
    S`A column without a pivot gives a free variable; a row $[0\cdots0\mid c\ne0]$ means stop: no solution.`,
    S`With parameters, split into cases only at the end, at the entries that may vanish.`,
  ],
  tips: ["Use the \\emph{current} pivot row, not the original one.", "Clear below first (forward), then above (backward).", "Keep the constant column in every operation.", "If a column has no pivot, move right but stay in the same row.", "Never divide by an expression that might be 0 without splitting into cases.", "Check the answer in the original system."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
