// Worksheet 2.2 — Equivalent Expressions (teacher edition)
import { tiles, polyT, raw } from "./tikz2.mjs";
import { PROBLEMS } from "./p2_2.mjs";

const LEGEND = raw(String.raw`\filldraw[fill=blue!12,draw=blue!70!black,thick] (0,0) rectangle (1,1); \node[font=\scriptsize] at (0.5,0.5) {$x^2$}; \node[below,font=\scriptsize] at (0.5,0) {$x$ by $x$};
\filldraw[fill=green!14,draw=green!50!black,thick] (2,0) rectangle (2.32,1); \node[below,font=\scriptsize] at (2.16,0) {$x$ by $1$};
\filldraw[fill=orange!18,draw=orange!85!black,thick] (3.4,0) rectangle (3.72,0.32); \node[below,font=\scriptsize] at (3.56,0) {$1$ by $1$};
\filldraw[fill=red!12,draw=red!75!black,thick] (4.8,0) rectangle (5.12,1); \filldraw[fill=red!12,draw=red!75!black,thick] (5.5,0) rectangle (5.82,0.32); \node[below,font=\scriptsize] at (5.3,0) {negatives};`,
  "Algebra tiles. A tile and its opposite (red) form a zero pair.");

export const WS = {
  code: "2.2",
  title: "Equivalent Expressions",
  bigideas: String.raw`Expressions are \textbf{equivalent} when they have the same value for every value of the variables. Only \textbf{like terms} --- the same variables with the same exponents --- can be combined, by adding their coefficients. Polynomials are added by collecting like terms and \textbf{subtracted by adding the opposite} of every term. One counter-example shows two expressions are not equivalent; simplifying proves that they are.`,
  goals: [
    "Classify polynomials (monomial, binomial, trinomial) and find the degree of a term and of a polynomial.",
    "Identify like terms, including terms in two variables.",
    "Model polynomials with algebra tiles and simplify with the zero principle.",
    "Add and subtract polynomials, with integer, fraction and decimal coefficients.",
    "Test expressions for equivalence by substitution and by simplifying.",
  ],
  curriculum: "C1.3, C1.4",
  book: "Nelson Principles of Mathematics 9, §2.4 Modelling and Simplifying Polynomials",
  vocab: [
    ["Polynomial", "a term, or a sum of terms, with whole-number exponents on the variables"],
    ["Degree", "of a term: sum of the exponents of its variables; of a polynomial: the highest term degree"],
    ["Like terms", String.raw`identical variable parts: $3x^2y$ and $-x^2y$`],
    ["Zero principle", "a quantity plus its opposite is zero"],
    ["Equivalent", "equal for every value of the variable(s)"],
  ],
  hook: String.raw`Show two “recipes”: Recipe A is $3$ apples $+\,2$ bananas $+\,4$ apples; Recipe B is $7$ apples $+\,2$ bananas. Same fruit? Then write $3a+2b+4a$ and $7a+2b$. Ask: “Can I simplify $7a+2b$ further?” (No --- apples and bananas don't combine.) Then: “What about $x^2$ and $x$?” Hand out algebra tiles and let students discover that the shapes don't match.`,
  concepts: [
    ["1. Polynomial vocabulary", String.raw`\begin{tabular}{@{}llll@{}}\toprule Polynomial & Terms & Name & Degree\\\midrule $9$ & 1 & monomial (constant) & 0\\ $-5x^3$ & 1 & monomial & 3\\ $2ab-7$ & 2 & binomial & 2\\ $x^2y+3xy^2-y$ & 3 & trinomial & 3\\ $a^4-a^2b^3+ab-1$ & 4 & polynomial & 5\\\bottomrule\end{tabular}\\
$\frac{x}{3}$ is a polynomial term (coefficient $\frac13$); $\frac{3}{x}$ and $\sqrt{x}$ are not.`],
    ["2. Algebra tiles and the zero principle", String.raw`${LEGEND}
${tiles([{ label: "first", x2: 2, x: 3, c: -4 }, { label: "second", x2: -1, x: -1, c: 6 }], "(2x² + 3x − 4) + (−x² − x + 6): one x² pair, one x pair and four unit pairs cancel; x² + 2x + 2 is left.", [{ row: 0, kind: "x2", n: 1 }, { row: 1, kind: "x2", n: 1 }, { row: 0, kind: "x", n: 1 }, { row: 1, kind: "x", n: 1 }, { row: 0, kind: "c", n: 4 }, { row: 1, kind: "c", n: 4 }])}`],
    ["3. Collecting like terms", String.raw`Group by variable part, add the coefficients, keep the variable part: $5xy^2-2x^2y-8xy^2+x^2y=-3xy^2-x^2y$. Exponents never change when adding. Write the answer in descending powers of one variable.`],
    ["4. Adding and subtracting polynomials", String.raw`\textbf{Add:} remove brackets, collect. \textbf{Subtract:} add the opposite --- change the sign of \emph{every} term in the bracket being subtracted:
\[(3x^2-x+5)-(x^2-4x-2)=3x^2-x+5-x^2+4x+2=2x^2+3x+7.\]
\textbf{Check by substitution:} at $x=1$, $(7)-(-5)=12$ and $2+3+7=12$ ✓. Vertical (column) addition with like terms lined up is a good alternative for long polynomials.`],
    ["5. Testing equivalence", String.raw`Substitute the same value in both. Different values $\Rightarrow$ \textbf{not} equivalent (a counter-example). Equal values are only evidence: $x^2$ and $3x-2$ agree at $x=1$ and $x=2$ but not at $x=3$. Avoid testing only with $0$ and $1$. Proof = simplify one into the other.`],
  ],
  tips: [
    String.raw`$3x^2+2x\neq5x^3$: different tiles; and adding never changes exponents.`,
    String.raw`When subtracting, students change only the first sign: $-(x^2-4x-2)$ is $-x^2+4x+2$.`,
    String.raw`$xy$ and $yx$ are like terms (multiplication is commutative); $x^2y$ and $xy^2$ are not.`,
    String.raw`Coefficient $1$ is invisible: $x-3x=-2x$, not $-3x$.`,
    "Have students check every simplification with one substitution --- it catches most sign errors.",
  ],
  examples: [
    { title: "Classifying", q: String.raw`Classify $-3x^4+2x^2y-7$ and state its degree.`,
      steps: [String.raw`Three terms: trinomial.`, String.raw`Degrees $4$, $2+1=3$, $0$; the highest is $4$.`], ans: "trinomial of degree $4$" },
    { title: "Spotting like terms", q: String.raw`Which of $5ab,\ -2a^2b,\ 7ba,\ ab^2,\ -ab$ are like terms? Simplify their sum.`,
      steps: [String.raw`$5ab$, $7ba$ and $-ab$ all have variable part $ab$.`, String.raw`$5+7-1=11$, so $11ab$.`], ans: "$11ab$" },
    { title: "Adding with tiles", q: String.raw`Use tiles to add $2x^2-3x+1$ and $-x^2+4x-3$.`,
      fig: tiles([{ label: "", x2: 2, x: -3, c: 1 }, { label: "", x2: -1, x: 4, c: -3 }], "", [{ row: 0, kind: "x2", n: 1 }, { row: 1, kind: "x2", n: 1 }, { row: 0, kind: "x", n: 3 }, { row: 1, kind: "x", n: 3 }, { row: 0, kind: "c", n: 1 }, { row: 1, kind: "c", n: 1 }]),
      steps: [String.raw`Zero pairs: one $x^2$, three $x$, one unit.`, String.raw`Left: one $x^2$, one $x$, two negative units.`], ans: "$x^2+x-2$" },
    { title: "Two variables", q: String.raw`Simplify $4x-3y+2-x+5y-6$.`,
      steps: [String.raw`$x$: $4-1=3$; $y$: $-3+5=2$; constants: $2-6=-4$.`], ans: "$3x+2y-4$" },
    { title: "Decimal coefficients", q: String.raw`Simplify $1.5m^2-0.4m+2.3m^2-1.1m$.`,
      steps: [String.raw`$m^2$: $1.5+2.3=3.8$. $m$: $-0.4-1.1=-1.5$.`], ans: "$3.8m^2-1.5m$" },
    { title: "Adding polynomials", q: String.raw`Simplify $(3a^2-2ab+b^2)+(-a^2+5ab-4b^2)$.`,
      steps: [String.raw`$a^2$: $3-1=2$; $ab$: $-2+5=3$; $b^2$: $1-4=-3$.`], ans: "$2a^2+3ab-3b^2$" },
    { title: "Subtracting polynomials", q: String.raw`Simplify $(5x^2-x+3)-(2x^2-4x-6)$ and check with $x=2$.`,
      steps: [String.raw`$5x^2-x+3-2x^2+4x+6=3x^2+3x+9$.`, String.raw`Check: $(20-2+3)-(8-8-6)=21+6=27$; $12+6+9=27$ ✓`], ans: "$3x^2+3x+9$" },
    { title: "Equivalent or not?", q: String.raw`(a) Is $2x-(3-x)$ equivalent to $3x-3$? (b) Is $x^2+x$ equivalent to $x^3$?`,
      steps: [String.raw`(a) $2x-3+x=3x-3$: equivalent (proved by simplifying).`, String.raw`(b) At $x=2$: $6$ and $8$ --- not equivalent.`], ans: "(a) yes (b) no" },
    { title: "Perimeter of a quadrilateral", q: String.raw`A quadrilateral has sides $2x+1$, $x+4$, $3x-2$ and $x+5$. Write its perimeter and evaluate it for $x=3$.`,
      fig: polyT([[0, 0], [4.2, 0], [4.8, 2.4], [0.6, 2.6]], ["2x+1", "x+4", "3x-2", "x+5"], ""),
      steps: [String.raw`$x$: $2+1+3+1=7$; constants: $1+4-2+5=8$.`, String.raw`$7(3)+8=29$.`], ans: "$7x+8$; $29$" },
  ],
  problems: PROBLEMS,
};
