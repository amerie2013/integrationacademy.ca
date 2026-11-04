// MHF4U Worksheet 3.4 — Solving Rational Equations and Inequalities (teacher edition)
import { R, gridT, pt, F, rat } from "./figT.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "A one-step equation", q: S`Solve $\dfrac4{x+1}=2$.`,
    fig: F({ view: { xmin: -7, xmax: 5, ymin: -6, ymax: 6 }, curves: [...rat((x) => 4 / (x + 1), [-1], { xmin: -7, xmax: 5 }), { f: () => 2, color: "green" }], vlines: [{ x: -1, color: "red", dash: true }], points: [pt(1, 2)] }),
    steps: [S`Restriction: $x\ne-1$.`, S`Multiply by $x+1$: $4=2(x+1)=2x+2$.`, S`$2x=2$, so $x=1$. Check: $\frac42=2$.`], ans: S`$x=1$` },
  { title: "Cross-multiplying", q: S`Solve $\dfrac{x-2}{x+1}=\dfrac{x+3}{x-4}$.`,
    fig: F({ view: { xmin: -8, xmax: 10, ymin: -8, ymax: 10 }, curves: [...rat((x) => (x - 2) / (x + 1), [-1], { xmin: -8, xmax: 10 }, "violet"), ...rat((x) => (x + 3) / (x - 4), [4], { xmin: -8, xmax: 10 }, "green")], points: [pt(0.5, -1)], step: { x: 2, y: 2 } }),
    steps: [S`Restrictions: $x\ne-1$, $x\ne4$.`, S`$(x-2)(x-4)=(x+3)(x+1)$.`, S`$x^2-6x+8=x^2+4x+3$.`, S`$-10x=-5$, so $x=\frac12$. It meets the restrictions.`], ans: S`$x=\frac12$` },
  { title: "A quadratic after clearing", q: S`Solve $x+\dfrac8x=6$.`,
    fig: F({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 10 }, curves: [{ f: (x) => x + 8 / x, a: 0.8, b: 8, color: "violet" }, { f: () => 6, color: "green" }], vlines: [{ x: 0, color: "red", dash: true }], points: [pt(2, 6), pt(4, 6)] }),
    steps: [S`Restriction: $x\ne0$. Multiply by $x$: $x^2+8=6x$.`, S`$x^2-6x+8=(x-2)(x-4)=0$.`, S`Both meet the restriction.`], ans: S`$x=2$ or $x=4$` },
  { title: "An extraneous root", q: S`Solve $\dfrac x{x-2}=\dfrac2{x-2}+3$.`,
    steps: [S`Restriction: $x\ne2$. Multiply by $x-2$: $x=2+3(x-2)$.`, S`$x=3x-4$, so $x=2$.`, S`$x=2$ breaks the restriction, so it is rejected.`], ans: "no solution" },
  { title: "A sign chart", q: S`Solve $\dfrac{x+3}{x-1}\ge0$.`,
    fig: R((x) => (x + 3) / (x - 1), [1], { xmin: -8, xmax: 8, ymin: -6, ymax: 8 }, 1, [pt(-3, 0)]),
    steps: [S`Critical values: $x=-3$ (zero, included), $x=1$ (undefined, excluded).`, S`$x\lt-3$: $\frac{-}{-}=+$. $-3\lt x\lt1$: $\frac+-=-$. $x>1$: $\frac++=+$.`], ans: S`$(-\infty,-3]\cup(1,\infty)$` },
  { title: "Rewrite as one fraction", q: S`Solve $\dfrac{x+5}{x-1}\lt2$.`,
    fig: F({ view: { xmin: -6, xmax: 12, ymin: -6, ymax: 10 }, curves: [...rat((x) => (x + 5) / (x - 1), [1], { xmin: -6, xmax: 12 }), { f: () => 2, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [pt(7, 2)], step: { x: 2, y: 2 } }),
    steps: [S`Do not multiply by $x-1$: its sign is unknown.`, S`$\frac{x+5}{x-1}-2\lt0\Rightarrow\frac{x+5-2x+2}{x-1}\lt0\Rightarrow\frac{7-x}{x-1}\lt0$.`, S`Critical values 1 and 7. Signs: $-,+,-$.`], ans: S`$x\lt1$ or $x>7$` },
  { title: "Two fractions", q: S`Solve $\dfrac1x+\dfrac1{x+2}=\dfrac34$.`,
    steps: [S`Restrictions: $x\ne0,-2$. Multiply by $4x(x+2)$.`, S`$4(x+2)+4x=3x(x+2)\Rightarrow8x+8=3x^2+6x$.`, S`$3x^2-2x-8=(3x+4)(x-2)=0$.`], ans: S`$x=2$ or $x=-\frac43$` },
  { title: "A quadratic over a linear", q: S`Solve $\dfrac{x^2-4}{x+3}\ge0$.`,
    fig: R((x) => (x * x - 4) / (x + 3), [-3], { xmin: -8, xmax: 6, ymin: -12, ymax: 8 }, null, [pt(-2, 0), pt(2, 0)], { step: { x: 1, y: 2 } }),
    steps: [S`$\frac{(x-2)(x+2)}{x+3}$: critical values $-3$ (excluded), $-2$, $2$ (included).`, S`Signs: $x\lt-3$: $-$; $(-3,-2)$: $+$; $(-2,2)$: $-$; $x>2$: $+$.`], ans: S`$(-3,-2]\cup[2,\infty)$` },
  { title: "Reading a solution from graphs", q: S`Solve $\dfrac1x\lt x$ from the graphs of $y=\frac1x$ and $y=x$.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [...rat((x) => 1 / x, [0], { xmin: -4, xmax: 4 }), { f: (x) => x, color: "green" }], vlines: [{ x: 0, color: "red", dash: true }], points: [pt(1, 1), pt(-1, -1)] }),
    steps: [S`They meet where $x^2=1$: $x=\pm1$.`, S`$y=x$ is above $y=\frac1x$ between $-1$ and 0, and for $x>1$.`], ans: S`$-1\lt x\lt0$ or $x>1$` },
];

const PROBLEMS = [
  { level: 1, q: S`Solve $\dfrac5{x-3}=1$.`, ans: S`$x=8$` },
  { level: 1, q: S`Solve $\dfrac6x=\dfrac2{x+4}$.`, ans: S`$x=-6$` },
  { level: 1, q: S`Solve $\dfrac{x-5}{x+2}>0$.`, ans: S`$x\lt-2$ or $x>5$` },
  { level: 2, q: S`Solve $x-\dfrac6x=1$.`, ans: S`$x=3$ or $x=-2$` },
  { level: 2, q: S`Solve $\dfrac{x+1}{x-2}=\dfrac{x-3}{x+2}$.`, ans: S`$x=\frac12$` },
  { level: 2, q: S`Solve $\dfrac{x-1}{x+4}\le0$ with a sign chart.`, ans: S`$(-4,1]$` },
  { level: 2, q: S`Solve $\dfrac3{x+1}>1$.`, fig: gridT({ xmin: -6, xmax: 6, ymin: -5, ymax: 5 }), ans: S`$-1\lt x\lt2$` },
  { level: 2, q: S`Solve $\dfrac x{x-3}=\dfrac3{x-3}+2$, and explain your conclusion.`, ans: S`$x=3$ is rejected: no solution` },
  { level: 3, space: 5, q: S`Solve $\dfrac2{x-1}+\dfrac3{x+1}=2$. Give exact values and decimals to 2 places.`, ans: S`$x=\frac{5\pm\sqrt{33}}4\approx2.69,\ -0.19$` },
  { level: 3, space: 5, q: S`Solve $\dfrac{x^2-x-6}{x-1}\le0$.`, ans: S`$(-\infty,-2]\cup(1,3]$` },
  { level: 3, space: 5, q: S`Solve $\dfrac1{x-1}\ge\dfrac1{x+1}$, and show the answer on a sketch.`, fig: gridT({ xmin: -5, xmax: 5, ymin: -4, ymax: 4 }), ans: S`$x\lt-1$ or $x>1$` },
  { level: 3, space: 5, q: S`A student solves $\dfrac2{x-2}>1$ by multiplying by $x-2$ and writes $x\lt4$. Explain the error and give the correct answer.`, ans: S`the sign of $x-2$ was ignored; correct: $2\lt x\lt4$` },
  { level: 3, space: 5, q: S`Solve $\dfrac x{x+1}\le\dfrac2{x-2}$. Give the endpoints exactly.`, ans: S`$(-1,2-\sqrt6]\cup(2,2+\sqrt6]$` },
];

export const WS = {
  code: "3.4",
  title: "Solving Rational Equations and Inequalities",
  bigideas: S`To solve a rational equation, state the restrictions, multiply by the common denominator, solve the polynomial equation, and reject any root that breaks a restriction. To solve a rational inequality, move everything to one side, write it as one fraction, and use the zeros of the numerator and denominator as critical values on a sign chart. Never multiply an inequality by an expression whose sign is unknown.`,
  goals: ["State restrictions and reject extraneous roots.", "Solve rational equations by clearing denominators.", "Solve rational inequalities with a sign chart.", "Confirm solutions using graphs."],
  curriculum: "C3.5, C3.6, C4.1, C4.2",
  vocab: [["Restriction", "a value that makes a denominator 0"], ["Extraneous root", "a solution of the cleared equation that fails the original"], ["Critical value", "a zero of the numerator or denominator"], ["Sign chart", "a table of the signs of each factor on each interval"]],
  hook: S`A student multiplies both sides of $\frac1x>2$ by $x$ and gets $x\lt\frac12$. Test $x=-1$: it satisfies $x\lt\frac12$, but is $\frac1{-1}>2$? What went wrong?`,
  concepts: [
    ["1. Solving equations", S`\textbf{(a)} State the restrictions. \textbf{(b)} Multiply each term by the lowest common denominator. \textbf{(c)} Solve the polynomial equation. \textbf{(d)} Reject values that break the restrictions. \textbf{(e)} Check in the original equation. Graphically, the solutions of $f(x)=g(x)$ are the x-coordinates of the intersection points.`],
    ["2. Solving inequalities", S`\textbf{(a)} Rewrite so that one side is 0. \textbf{(b)} Write the other side as one fraction and factor. \textbf{(c)} Mark critical values on a number line. \textbf{(d)} Test the sign on each interval. \textbf{(e)} Include zeros of the numerator when the inequality is $\le$ or $\ge$; NEVER include zeros of the denominator.
\begin{center}\begin{tabular}{@{}lccc@{}}\textbf{Example:} $\frac{x-2}{x+4}$ & $x\lt-4$ & $-4\lt x\lt2$ & $x>2$\\ $x-2$ & $-$ & $-$ & $+$\\ $x+4$ & $-$ & $+$ & $+$\\ quotient & $+$ & $-$ & $+$\end{tabular}\end{center}`],
    ["3. The same idea on a graph", S`$\frac{x-2}{x+4}>0$ means the graph is above the x-axis.
${R((x) => (x - 2) / (x + 4), [-4], { xmin: -12, xmax: 8, ymin: -6, ymax: 8 }, 1, [pt(2, 0)], { step: { x: 2, y: 2 } })}`],
    ["4. Why you cannot multiply through", S`If $x-2$ is negative, multiplying an inequality by it reverses the direction. Multiplying by an expression with an unknown sign therefore gives wrong answers. Combining fractions keeps every interval honest.`],
  ],
  tips: ["State restrictions first, before you clear denominators.", "Denominator zeros are always open in the answer.", "Check each interval: a squared factor does not change the sign.", "Do not cross-multiply in an inequality.", "Report answers in interval notation with round brackets at $\\pm\\infty$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
