// Worksheet 1.3 — Multiplying & Dividing Integers (teacher edition, one PDF with answer key)
import { numberLine, pointsGraph, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_3.mjs";

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
    { title: "Working backward from a contest score", q: String.raw`A contest gives $+6$ for a correct answer and $-2$ for a wrong one. Ali answered all $18$ questions and scored $60$. How many did Ali get right?`, steps: [String.raw`A perfect score would be $18\times6=108$.`, String.raw`Each answer that changes from right to wrong changes the score by $-2-6=-8$.`, String.raw`Ali is $108-60=48$ below perfect, so there are $48\div8=6$ wrong answers.`, String.raw`Right answers: $18-6=12$. Check: $12(6)+6(-2)=72-12=60$.`], ans: "$12$ right" },
  ],
  problems: PROBLEMS,
};
