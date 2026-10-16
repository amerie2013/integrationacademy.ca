// Worksheet 1.3 — Multiplying & Dividing Integers (teacher edition, one PDF with answer key)
import { numberLine, pointsGraph, raw } from "./tikz.mjs";

const jumps = (n, size, extra = {}) => numberLine({
  min: Math.min(0, n * size) - 1, max: Math.max(0, n * size) + 1, unit: extra.unit ?? 0.8,
  arrows: Array.from({ length: n }, (_, i) => ({ from: i * size, to: (i + 1) * size, label: `$${size}$`.replace("$-", "$-"), color: size < 0 ? "red" : "blue", lane: i % 2 })),
  dots: [{ at: n * size, label: `$${n * size}$`, color: "green" }], caption: extra.caption,
});

const SIGNS = raw(String.raw`\node[draw,thick,minimum width=2.4cm,minimum height=0.8cm,fill=black!5] at (0,0) {$\times$ or $\div$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=blue!8] at (2.6,0) {\bfseries positive};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=red!8] at (5.2,0) {\bfseries negative};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=blue!8] at (0,-0.9) {\bfseries positive};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (2.6,-0.9) {\Large $+$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (5.2,-0.9) {\Large $-$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=red!8] at (0,-1.8) {\bfseries negative};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (2.6,-1.8) {\Large $-$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (5.2,-1.8) {\Large $+$};`, "Same signs give a positive result; different signs give a negative result.");

export const WS = {
  code: "1.3",
  title: "Multiplying & Dividing Integers",
  bigideas: String.raw`Multiplication is repeated addition, and a negative multiplier means “the opposite of”. That gives the sign rules: \textbf{same signs $\Rightarrow$ positive, different signs $\Rightarrow$ negative}, for both multiplying and dividing. Division undoes multiplication, so every quotient can be checked by multiplying back. With several operations, follow \textbf{BEDMAS}.`,
  goals: [
    "Multiply and divide integers, predicting the sign before calculating.",
    "Explain the sign rules with repeated jumps on a number line and with number patterns.",
    "Find the sign of a product of many factors by counting negative factors.",
    String.raw`Explain why dividing by $0$ is undefined.`,
    "Evaluate integer expressions with brackets, powers and all four operations, and substitute negative values into formulas.",
  ],
  curriculum: "B3.1, B3.3, B3.4",
  book: "Nelson Principles of Mathematics 9, §1.3",
  vocab: [
    ["Product / quotient", "the result of multiplying / dividing"],
    ["Factor", "a number being multiplied"],
    ["Undefined", "has no value: there is no number that works"],
    ["BEDMAS", "Brackets, Exponents, Division \\& Multiplication (left to right), Addition \\& Subtraction (left to right)"],
  ],
  hook: String.raw`A freezer starts at $0\,^\circ$C and its temperature \emph{falls} $3$ degrees every hour. Ask: “What is the temperature after $4$ hours?” ($4\times(-3)=-12$). “What was it $2$ hours \emph{before} it reached $0$?” Going back in time is a negative number of hours: $(-2)\times(-3)=+6$ --- it was warmer. Students meet “negative times negative is positive” as common sense before they meet it as a rule.`,
  concepts: [
    ["1. Multiplication as repeated jumps", String.raw`$4\times(-3)$ means four jumps of $-3$, starting at $0$:
${jumps(4, -3, { caption: "$4\\times(-3)=-12$: each jump goes left." })}
A \textbf{negative multiplier} reverses direction: $(-4)\times(-3)$ is the opposite of $4\times(-3)$, so it is $+12$.`],
    ["2. The pattern that forces the rules", String.raw`Keep one factor fixed and count the other down. The products change by the same amount each step, so the pattern must continue past zero:
\begin{center}\begin{tabular}{rr@{\qquad\qquad}rr}
$3\times(-4)=$ & $-12$ & $3\times4=$ & $12$\\
$2\times(-4)=$ & $-8$ & $2\times4=$ & $8$\\
$1\times(-4)=$ & $-4$ & $1\times4=$ & $4$\\
$0\times(-4)=$ & $0$ & $0\times4=$ & $0$\\
$-1\times(-4)=$ & $\mathbf{4}$ & $-1\times4=$ & $\mathbf{-4}$\\
$-2\times(-4)=$ & $\mathbf{8}$ & $-2\times4=$ & $\mathbf{-8}$
\end{tabular}\end{center}
Left column: products go \emph{up} by $4$ each row, so after $0$ they are positive. Right column: they go \emph{down} by $4$, so after $0$ they are negative.
${SIGNS}`],
    ["3. Many factors, division and zero", String.raw`\textbf{Many factors.} Negative factors cancel in pairs. An \emph{even} number of negative factors gives a positive product; an \emph{odd} number gives a negative product: $(-1)^{10}=1$, $(-1)^{11}=-1$.\\[3pt]
\textbf{Division} follows the same sign rules, because $a\div b=q$ means $q\times b=a$. Check: $-48\div(-6)=8$ because $8\times(-6)=-48$.\\[3pt]
\textbf{Zero.} $0\div(-5)=0$ (since $0\times(-5)=0$), but $-5\div0$ is \textbf{undefined}: no number times $0$ gives $-5$.`],
    ["4. Order of operations and substitution", String.raw`\textbf{B}rackets $\to$ \textbf{E}xponents $\to$ \textbf{D}ivide/\textbf{M}ultiply left to right $\to$ \textbf{A}dd/\textbf{S}ubtract left to right.
\begin{center}$\begin{aligned}
-20\div(3-8)\times2-(-3)^2 &= -20\div(-5)\times2-9 && \text{brackets, exponent}\\
&= 4\times2-9 && \text{divide (left to right)}\\
&= 8-9=-1
\end{aligned}$\end{center}
\textbf{Brackets decide the base:} $(-3)^2=9$ but $-3^2=-9$. When you substitute a negative value, \emph{always} put it in brackets: if $x=-4$, then $x^2=(-4)^2=16$.`],
  ],
  tips: [
    String.raw`Students mix up the adding rule and the multiplying rule. Ask: “Is this adding or multiplying?” before they decide the sign.`,
    String.raw`Division and multiplication have equal priority: $12\div(-2)\times3=(-6)\times3=-18$, not $12\div(-6)$.`,
    String.raw`Forgetting brackets on substituted negatives is the most common error: with $x=-2$, $-x^2=-(-2)^2=-4$.`,
    String.raw`Have students \emph{predict the sign} first, then compute the size. Most errors are sign errors.`,
    String.raw`Undefined is not the same as zero: $0\div7=0$, but $7\div0$ has no answer.`,
  ],
  examples: [
    { title: "Repeated jumps", q: String.raw`Use jumps on a number line to evaluate $5\times(-2)$.`, fig: jumps(5, -2, { unit: 0.9 }),
      steps: [String.raw`Five jumps of $-2$ starting at $0$: $0\to-2\to-4\to-6\to-8\to-10$.`], ans: "$-10$" },
    { title: "Negative times negative", q: String.raw`Evaluate $(-6)(-7)$ and use a pattern to justify the sign.`,
      steps: [String.raw`Pattern: $2(-7)=-14$, $1(-7)=-7$, $0(-7)=0$, $(-1)(-7)=7$ --- each step adds $7$.`, String.raw`Continuing: $(-6)(-7)=42$.`], ans: "$42$" },
    { title: "Five negative factors", q: String.raw`Evaluate $(-1)(-2)(-3)(-4)(-5)$.`,
      steps: [String.raw`Five negative factors (odd) $\Rightarrow$ negative.`, String.raw`Size: $1\times2\times3\times4\times5=120$.`], ans: "$-120$" },
    { title: "Dividing and checking", q: String.raw`Evaluate $-54\div6$ and $-54\div(-6)$. Check each by multiplying.`,
      steps: [String.raw`$-54\div6=-9$ (different signs). Check: $-9\times6=-54$ \checkmark`, String.raw`$-54\div(-6)=9$ (same signs). Check: $9\times(-6)=-54$ \checkmark`], ans: "$-9$ and $9$" },
    { title: "Zero in a division", q: String.raw`Evaluate, or explain why it is impossible: (a) $0\div(-8)$ \quad (b) $-8\div0$.`,
      steps: [String.raw`(a) $0\times(-8)=0$, so $0\div(-8)=0$.`, String.raw`(b) We need a number $q$ with $q\times0=-8$; every number times $0$ is $0$, so there is none.`], ans: "(a) $0$ \\quad (b) undefined" },
    { title: "Multiplication before addition", q: String.raw`Evaluate $-3+4(-5)$.`,
      steps: [String.raw`Multiply first: $4(-5)=-20$.`, String.raw`$-3+(-20)=-23$.`], ans: "$-23$" },
    { title: "Brackets and exponents", q: String.raw`Evaluate $(-12+4)\div(-2)-3^2$.`,
      steps: [String.raw`Brackets: $-12+4=-8$.`, String.raw`Exponent: $3^2=9$.`, String.raw`Divide: $-8\div(-2)=4$.`, String.raw`Subtract: $4-9=-5$.`], ans: "$-5$" },
    { title: "Substituting a negative", q: String.raw`Evaluate $-2x^2+5x-1$ when $x=-3$.`,
      steps: [String.raw`Substitute with brackets: $-2(-3)^2+5(-3)-1$.`, String.raw`Exponent: $(-3)^2=9$, so $-2(9)=-18$.`, String.raw`$5(-3)=-15$.`, String.raw`$-18+(-15)-1=-34$.`], ans: "$-34$" },
    { title: "A falling temperature", q: String.raw`At 6 p.m.\ the temperature is $4\,^\circ$C and it falls $3$ degrees per hour. What is it at 1 a.m.?`,
      fig: pointsGraph({ pts: [[0, 4], [1, 1], [2, -2], [3, -5], [4, -8], [5, -11], [6, -14], [7, -17]], xmin: 0, xmax: 7.5, ymin: -19, ymax: 6, xlabel: "hours after 6 p.m.", ylabel: "temp ($^\\circ$C)", highlight: [7, -17], xtick: "0,1,...,7", ytick: "-18,-15,...,6" }),
      steps: [String.raw`6 p.m.\ to 1 a.m.\ is $7$ hours.`, String.raw`Change $=7\times(-3)=-21$.`, String.raw`$4+(-21)=-17$.`], ans: String.raw`$-17\,^\circ$C` },
  ],
  problems: [
    { level: 1, q: String.raw`Evaluate $(-9)(4)$.`, ans: "$-36$", sol: String.raw`Different signs: negative; $9\times4=36$.` },
    { level: 1, q: String.raw`Evaluate $(-8)(-11)$.`, ans: "$88$", sol: String.raw`Same signs: positive; $8\times11=88$.` },
    { level: 1, q: String.raw`Evaluate $-63\div(-9)$.`, ans: "$7$", sol: String.raw`Same signs: positive; $63\div9=7$. Check $7\times(-9)=-63$.` },
    { level: 1, q: String.raw`Evaluate $120\div(-8)$.`, ans: "$-15$", sol: String.raw`Different signs: negative; $120\div8=15$.` },
    { level: 1, q: String.raw`Predict the sign, then evaluate $(-2)(-3)(-4)(5)$.`, ans: "negative; $-120$", sol: String.raw`Three negative factors (odd) $\Rightarrow$ negative. $2\times3\times4\times5=120$, so $-120$.` },
    { level: 2, q: String.raw`Evaluate $7-2(-6)$.`, ans: "$19$", sol: String.raw`$2(-6)=-12$; $7-(-12)=19$.` },
    { level: 2, q: String.raw`Evaluate $-36\div(-4)\times(-3)$.`, ans: "$-27$", sol: String.raw`Left to right: $-36\div(-4)=9$; $9\times(-3)=-27$.` },
    { level: 2, q: String.raw`Evaluate $(-5)^2-3(-4)+(-10)\div2$.`, ans: "$32$", sol: String.raw`$25+12+(-5)=32$.` },
    { level: 2, q: String.raw`Evaluate $4a-b^2$ when $a=-2$ and $b=-3$.`, ans: "$-17$", sol: String.raw`$4(-2)-(-3)^2=-8-9=-17$.` },
    { level: 2, q: String.raw`A diver starts at the surface and descends $4$ m every $30$ seconds. Write and evaluate an expression for her depth after $3$ minutes.`, ans: "$-24$ m", sol: String.raw`$3$ minutes $=6$ half-minutes. Depth $=6\times(-4)=-24$ m.` },
    { level: 3, q: String.raw`Find the integer $n$ if $n\times(-6)=54$. Explain how you know the sign.`, ans: "$-9$", sol: String.raw`$54$ is positive and $-6$ is negative, so $n$ must be negative (different signs would give a negative). $n=54\div(-6)=-9$.` },
    { level: 3, q: String.raw`Find the mean of the daily temperature changes $-8,\ 5,\ -12,\ 3,\ -3$. What does the sign tell you?`, ans: "$-3$; on average it got colder", sol: String.raw`Sum: $-8+5-12+3-3=-15$. Mean $=-15\div5=-3$. Negative: on average the temperature fell $3$ degrees per day.` },
    { level: 3, q: String.raw`Write a pattern of at least five lines that shows why $(-4)(-5)=20$.`, space: 4, ans: "pattern with steps of $+5$", sol: String.raw`$2(-5)=-10$, $1(-5)=-5$, $0(-5)=0$, $(-1)(-5)=5$, $(-2)(-5)=10$, $(-3)(-5)=15$, $(-4)(-5)=20$. Each time the first factor decreases by $1$, the product increases by $5$.` },
    { level: 3, q: String.raw`Insert one pair of brackets to make the statement true: $-2+6\times-3=-12$.`, ans: "$(-2+6)\\times(-3)=-12$", sol: String.raw`Without brackets: $-2+(-18)=-20$. With $(-2+6)\times(-3)=4\times(-3)=-12$ \checkmark` },
    { level: 3, q: String.raw`A quiz gives $+4$ for a correct answer, $-2$ for a wrong answer and $0$ for a blank. (a) Liam has $13$ correct, $5$ wrong, $2$ blank. Find his score. (b) Ana has $12$ correct and scored $36$. How many did she get wrong?`, space: 4, ans: "(a) $42$ (b) $6$", sol: String.raw`(a) $13(4)+5(-2)=52-10=42$. (b) $12(4)=48$; $48+w(-2)=36$, so $-2w=-12$ and $w=6$.` },
  ],
};
