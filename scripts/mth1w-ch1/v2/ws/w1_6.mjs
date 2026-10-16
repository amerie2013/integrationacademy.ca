// Worksheet 1.6 — Powers: Zero & Negative Exponents (teacher edition)
import { pointsGraph, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_6.mjs";

const SQUARE_CUBE = raw(String.raw`\draw[blue!70!black,very thick] (0,0) -- (1.8,0) node[midway,below,font=\small] {length $x$};
\draw[blue!70!black,thick,fill=blue!10] (3,0) rectangle (4.8,1.8); \node at (3.9,0.9) {$x^2$}; \node[below,font=\small] at (3.9,0) {area $(x)(x)$};
\draw[violet!80!black,thick,fill=violet!10] (6.2,0) rectangle (7.8,1.6); \draw[violet!80!black,thick,fill=violet!20] (6.2,1.6) -- (6.8,2.1) -- (8.4,2.1) -- (7.8,1.6) -- cycle; \draw[violet!80!black,thick,fill=violet!30] (7.8,0) -- (8.4,0.5) -- (8.4,2.1) -- (7.8,1.6) -- cycle;
\node at (7,0.8) {$x^3$}; \node[below,font=\small] at (7.3,0) {volume $(x)(x)(x)$};`, "One, two and three dimensions: $x$, $x^2$ (squared), $x^3$ (cubed).");

export const WS = {
  code: "1.6",
  title: "Powers: Zero & Negative Exponents",
  bigideas: String.raw`A power $a^n$ is repeated multiplication: the \textbf{base} $a$ is used as a factor $n$ times. Brackets decide what the base is: $(-3)^2=9$ but $-3^2=-9$. Following the pattern “each step down divides by the base” forces $a^0=1$ and $a^{-n}=\frac{1}{a^n}$ (for $a\neq0$). A negative exponent means \textbf{reciprocal}, not negative.`,
  goals: [
    "Identify base and exponent; evaluate powers with integer, fraction and decimal bases.",
    String.raw`Explain the difference between $(-a)^n$ and $-a^n$, and predict the sign of a power.`,
    String.raw`Connect $x^2$ and $x^3$ to area and volume.`,
    String.raw`Use patterns to justify $a^0=1$ and $a^{-n}=\frac{1}{a^n}$; evaluate powers with zero and negative exponents.`,
    "Evaluate expressions with powers in the correct order and solve growth/decay problems.",
  ],
  curriculum: "B2.1",
  book: "Nelson Principles of Mathematics 9, §1.6, §2.1",
  vocab: [
    ["Power", "an expression $a^n$ (base $a$, exponent $n$)"],
    ["Base", "the factor being repeated"],
    ["Exponent", "how many times the base is a factor"],
    ["Squared / cubed", "exponent $2$ (area) / exponent $3$ (volume)"],
    ["Reciprocal", "$\\frac1x$; for a fraction, flip it"],
  ],
  hook: String.raw`Take a sheet of paper ($0.1$ mm thick) and fold it in half again and again. After $1$ fold it is $0.2$ mm, after $2$ folds $0.4$ mm, after $3$ folds $0.8$ mm\ldots\ Ask students to predict the thickness after $7$ folds ($12.8$ mm) and after $42$ folds (more than the distance to the Moon!). Then reverse the question: unfolding halves the thickness each time --- that is what negative exponents describe.`,
  concepts: [
    ["1. Powers as repeated multiplication", String.raw`$5^3=5\times5\times5=125$: base $5$, exponent $3$. Squares and cubes come from geometry:
${SQUARE_CUBE}`],
    ["2. Square roots and cube roots: undoing a power", String.raw`Squaring and taking a square root are \textbf{inverse operations}: $\sqrt{81}=9$ because $9^2=81$, so a square of area $81$ cm$^2$ has side $9$ cm.
\begin{center}\begin{tabular}{llll}\toprule Start & Square & Square root & Back to\\\midrule
$\frac35$ & $\frac{9}{25}$ & $\sqrt{\frac{9}{25}}$ & $\frac35$\\ $0.7$ & $0.49$ & $\sqrt{0.49}$ & $0.7$\\ $-9$ & $81$ & $\sqrt{81}$ & $9$ (not $-9$)\\\bottomrule\end{tabular}\end{center}
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $\sqrt{\ }$ means the \textbf{non-negative} root, but the equation $x^2=81$ has \textbf{two} solutions, $x=\pm9$.
\item $\sqrt{-81}$ is not a real number (no real number squared is negative); but $\sqrt[3]{-8}=-2$ because $(-2)^3=-8$.
\item \textbf{Cube roots} undo cubing: a cube of volume $64$ cm$^3$ has edge $\sqrt[3]{64}=4$ cm.
\item In BEDMAS, roots are done with the exponents: $2+\sqrt{25}\times3=17$.
\end{itemize}
\textbf{Teacher note.} This is the skill the Pythagorean theorem needs in Chapter 5 ($c=\sqrt{a^2+b^2}$), so practise it until it is automatic.`],
    ["3. Negative bases and brackets", String.raw`\begin{center}\begin{tabular}{llll}\toprule Expression & Base & Meaning & Value\\\midrule
$(-2)^4$ & $-2$ & $(-2)(-2)(-2)(-2)$ & $16$\\ $-2^4$ & $2$ & $-(2\cdot2\cdot2\cdot2)$ & $-16$\\ $(-2)^5$ & $-2$ & five negative factors & $-32$\\\bottomrule\end{tabular}\end{center}
A negative base with an \textbf{even} exponent is positive; with an \textbf{odd} exponent it is negative.`],
    ["4. Zero and negative exponents from a pattern", String.raw`Each step down the table divides by $3$. The pattern continues past $3^1$:
\begin{center}\begin{tabular}{c|ccccccc}
power & $3^3$ & $3^2$ & $3^1$ & $3^0$ & $3^{-1}$ & $3^{-2}$ & $3^{-3}$\\\hline
value & $27$ & $9$ & $3$ & $\mathbf{1}$ & $\mathbf{\frac13}$ & $\mathbf{\frac19}$ & $\mathbf{\frac1{27}}$
\end{tabular}\end{center}
So $a^0=1$ and $a^{-n}=\dfrac{1}{a^n}$ for any $a\neq0$. The graph of $2^n$ shows the values shrinking toward $0$ but never reaching it:
${pointsGraph({ pts: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]], xmin: -3.5, xmax: 3.5, ymin: 0, ymax: 8.5, xlabel: "$n$", ylabel: "$2^n$", xtick: "-3,-2,...,3", ytick: "0,1,...,8", height: 5 })}`],
    ["5. Fraction bases", String.raw`$\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$, so $\left(\frac25\right)^3=\frac{8}{125}$. A negative exponent flips the fraction: $\left(\frac{a}{b}\right)^{-n}=\left(\frac{b}{a}\right)^{n}$, e.g.\ $\left(\frac34\right)^{-3}=\left(\frac43\right)^3=\frac{64}{27}$.`],
    ["6. Powers in the order of operations", String.raw`Exponents come right after brackets: $3+2\times5^2=3+2\times25=53$. Teach students to underline every power and evaluate them first, then follow BEDMAS.`],
  ],
  tips: [
    String.raw`$a^n$ is not $a\times n$: $4^3=64$, not $12$.`,
    String.raw`$a^0=1$, not $0$ --- but $-7^0=-1$ because only $7$ is the base.`,
    String.raw`A negative exponent never makes the value negative: $2^{-3}=\frac18$.`,
    String.raw`Calculators: type $(-3)^2$ with brackets; many read \texttt{-3\^{}2} as $-9$.`,
    String.raw`Use the pattern table every time students doubt $a^0=1$ --- it is more convincing than a rule.`,
  ],
  examples: [
    { title: "Base and exponent", q: String.raw`Identify the base and exponent, then evaluate: (a) $2^5$ \quad (b) $(-4)^3$.`, steps: [String.raw`(a) Base $2$, exponent $5$: $2\cdot2\cdot2\cdot2\cdot2=32$.`, String.raw`(b) Base $-4$, exponent $3$: three negative factors, $-64$.`], ans: "(a) $32$ (b) $-64$" },
    { title: "Powers of $-1$", q: String.raw`Evaluate $(-1)^{20}$, $(-1)^{21}$ and $-1^{20}$.`, steps: [String.raw`Even number of $-1$ factors: $(-1)^{20}=1$.`, String.raw`Odd: $(-1)^{21}=-1$.`, String.raw`$-1^{20}=-(1^{20})=-1$.`], ans: "$1,\\ -1,\\ -1$" },
    { title: "Fraction bases", q: String.raw`Evaluate $\left(\frac34\right)^2$ and $\left(-\frac25\right)^3$.`, steps: [String.raw`$\frac{3^2}{4^2}=\frac{9}{16}$.`, String.raw`Odd exponent, negative base: $-\frac{2^3}{5^3}=-\frac{8}{125}$.`], ans: String.raw`$\frac{9}{16}$ and $-\frac{8}{125}$` },
    { title: "Undoing powers with roots", q: String.raw`Evaluate $\sqrt{0.81}$ and $\sqrt{\frac{25}{64}}$, then solve $x^2=144$ and find $\sqrt[3]{-27}$.`, steps: [String.raw`$0.9^2=0.81$, so $\sqrt{0.81}=0.9$; \ $\left(\frac58\right)^2=\frac{25}{64}$, so the root is $\frac58$.`, String.raw`$12^2=144$ and $(-12)^2=144$, so $x=\pm12$.`, String.raw`$(-3)^3=-27$, so $\sqrt[3]{-27}=-3$.`], ans: String.raw`$0.9$, $\frac58$, $x=\pm12$, $-3$` },
    { title: "The zero exponent", q: String.raw`Use a pattern of powers of $4$ to explain why $4^0=1$. Then evaluate $12^0$.`, steps: [String.raw`$4^3=64$, $4^2=16$, $4^1=4$: each step divides by $4$.`, String.raw`One more step: $4\div4=1$, so $4^0=1$. In the same way, $12^0=1$.`], ans: "$1$ and $1$" },
    { title: "Negative exponents", q: String.raw`Evaluate $4^{-3}$, $(-3)^{-2}$ and $-3^{-2}$.`, steps: [String.raw`$4^{-3}=\frac{1}{64}$.`, String.raw`$(-3)^{-2}=\frac{1}{(-3)^2}=\frac19$.`, String.raw`$-3^{-2}=-\frac{1}{3^2}=-\frac19$.`], ans: String.raw`$\frac{1}{64},\ \frac19,\ -\frac19$` },
    { title: "Negative exponent, fraction base", q: String.raw`Evaluate $\left(\frac32\right)^{-3}$ and $\left(-\frac14\right)^{-2}$.`, steps: [String.raw`Flip: $\left(\frac23\right)^3=\frac{8}{27}$.`, String.raw`Flip: $(-4)^2=16$.`], ans: String.raw`$\frac{8}{27}$ and $16$` },
    { title: "Order of operations", q: String.raw`Evaluate $2^3-3^2\times2^{-1}+(-2)^0$.`, steps: [String.raw`Powers: $8$, $9$, $\frac12$, $1$.`, String.raw`Multiply: $9\times\frac12=4.5$.`, String.raw`$8-4.5+1=4.5$.`], ans: "$4.5$" },
    { title: "Folding paper", q: String.raw`A sheet $0.1$ mm thick is folded in half $n$ times, so its thickness is $0.1\times2^n$ mm. Find the thickness after $7$ folds.`,
      fig: pointsGraph({ pts: [[0, 0.1], [1, 0.2], [2, 0.4], [3, 0.8], [4, 1.6], [5, 3.2], [6, 6.4], [7, 12.8]], xmin: 0, xmax: 7.5, ymin: 0, ymax: 14, xlabel: "folds $n$", ylabel: "mm", highlight: [7, 12.8], xtick: "0,1,...,7", ytick: "0,2,...,14", height: 5 }),
      steps: [String.raw`$2^7=128$.`, String.raw`$0.1\times128=12.8$ mm.`], ans: "$12.8$ mm" },
  ],
  problems: PROBLEMS,
};
