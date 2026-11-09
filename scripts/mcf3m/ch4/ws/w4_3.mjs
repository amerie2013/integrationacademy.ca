// MCF3M Worksheet 4.3 — The Quadratic Formula (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const Z = (f, view, zs, step) => F({ view, curves: [{ f, color: "violet" }], points: zs.map(([x, l]) => ({ x, y: 0, label: l, color: "amber" })), step });

const EXAMPLES = [
  { title: "Integer roots", q: S`Solve $x^2+x-20=0$ with the formula.`,
    fig: Z((x) => x * x + x - 20, { xmin: -7, xmax: 6, ymin: -22, ymax: 10 }, [[4, "(4, 0)"], [-5, "(−5, 0)"]], { x: 1, y: 4 }),
    steps: [S`$a=1$, $b=1$, $c=-20$; $D=1+80=81$.`, S`$x=\frac{-1\pm9}2$: $x=4$ or $x=-5$.`, S`\textbf{Check by factoring:} $(x+5)(x-4)$ \checkmark`],
    ans: S`$4$, $-5$` },
  { title: "Rational roots", q: S`Solve $6x^2-x-2=0$.`,
    fig: Z((x) => 6 * x * x - x - 2, { xmin: -1.5, xmax: 1.5, ymin: -3, ymax: 6 }, [[2 / 3, "(0.67, 0)"], [-0.5, "(−0.5, 0)"]], { x: 0.5, y: 1 }),
    steps: [S`$D=1+48=49$.`, S`$x=\frac{1\pm7}{12}$: $\frac23$ or $-\frac12$.`, S`$D$ a perfect square $\Rightarrow$ it factors: $(3x-2)(2x+1)$ \checkmark`],
    ans: S`$\frac23$, $-\frac12$` },
  { title: "Irrational roots", q: S`Solve $x^2-2x-4=0$ exactly and to two decimals.`,
    fig: Z((x) => x * x - 2 * x - 4, { xmin: -3, xmax: 5, ymin: -6, ymax: 6 }, [[1 + Math.sqrt(5), "(3.24, 0)"], [1 - Math.sqrt(5), "(−1.24, 0)"]], { x: 1, y: 1 }),
    steps: [S`$D=4+16=20$.`, S`$x=\frac{2\pm\sqrt{20}}2=1\pm\sqrt5$.`, S`$\approx3.24$, $-1.24$.`],
    ans: S`$1\pm\sqrt5$` },
  { title: "Negative b", q: S`Solve $3x^2-7x+1=0$ to two decimals.`,
    fig: Z((x) => 3 * x * x - 7 * x + 1, { xmin: -1, xmax: 3, ymin: -4, ymax: 6 }, [[(7 + Math.sqrt(37)) / 6, "(2.18, 0)"], [(7 - Math.sqrt(37)) / 6, "(0.15, 0)"]], { x: 1, y: 1 }),
    steps: [S`$-b=7$; $D=49-12=37$.`, S`$x=\frac{7\pm\sqrt{37}}6$.`, S`$\approx2.18$ and $0.15$.`],
    ans: S`$\approx2.18$, $0.15$` },
  { title: "Rearrange", q: S`Solve $2x^2=4x+3$.`,
    fig: Z((x) => 2 * x * x - 4 * x - 3, { xmin: -2, xmax: 4, ymin: -6, ymax: 8 }, [[1 + Math.sqrt(10) / 2, "(2.58, 0)"], [1 - Math.sqrt(10) / 2, "(−0.58, 0)"]], { x: 1, y: 2 }),
    steps: [S`$2x^2-4x-3=0$; $D=16+24=40$.`, S`$x=\frac{4\pm\sqrt{40}}4=1\pm\frac{\sqrt{10}}2$.`, S`$\approx2.58$, $-0.58$.`],
    ans: S`$1\pm\frac{\sqrt{10}}2$` },
  { title: "No real roots", q: S`Solve $2x^2+3x+5=0$.`,
    fig: F({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 * x * x + 3 * x + 5, color: "violet" }], points: [pt(-0.75, 3.875, null, "amber")] }),
    steps: [S`$D=9-40=-31<0$.`, S`No real square root: no real roots.`, S`The graph's minimum $3.875$ is above the axis \checkmark`],
    ans: S`no real roots` },
  { title: "Development, numerically", q: S`Solve $x^2+6x+2=0$ by completing the square, and compare with the formula.`,
    fig: Z((x) => x * x + 6 * x + 2, { xmin: -7, xmax: 1, ymin: -8, ymax: 4 }, [[-3 + Math.sqrt(7), "(−0.35, 0)"], [-3 - Math.sqrt(7), "(−5.65, 0)"]], { x: 1, y: 1 }),
    steps: [S`$x^2+6x=-2\Rightarrow x^2+6x+9=7\Rightarrow(x+3)^2=7$.`, S`$x=-3\pm\sqrt7$.`, S`\textbf{Formula:} $\frac{-6\pm\sqrt{28}}2=-3\pm\sqrt7$ \checkmark`],
    ans: S`$-3\pm\sqrt7$` },
  { title: "Decimals in the equation", q: S`Solve $0.2x^2-1.5x+2=0$.`,
    fig: Z((x) => 0.2 * x * x - 1.5 * x + 2, { xmin: 0, xmax: 7, ymin: -1, ymax: 2.5 }, [[(7.5 + Math.sqrt(16.25)) / 2, "(5.77, 0)"], [(7.5 - Math.sqrt(16.25)) / 2, "(1.73, 0)"]], { x: 1, y: 0.5 }),
    steps: [S`Multiply by $10$: $2x^2-15x+20=0$.`, S`$D=225-160=65$; $x=\frac{15\pm\sqrt{65}}4$.`, S`$\approx5.77$, $1.73$.`],
    ans: S`$\approx5.77$, $1.73$` },
  { title: "Context", q: S`A stone: $h(t)=-4.9t^2+12t+20$. When does it land?`,
    fig: F({ view: { xmin: -0.3, xmax: 3.8, ymin: -2, ymax: 30 }, curves: [{ f: (t) => -4.9 * t * t + 12 * t + 20, a: 0, b: 3.59, color: "violet" }], points: [pt(3.59, 0, null, "amber")], step: { x: 0.5, y: 5 } }),
    steps: [S`$a=-4.9$, $b=12$, $c=20$; $D=144+392=536$.`, S`$t=\frac{-12\pm23.15}{-9.8}$: $t\approx3.59$ or $-1.14$.`, S`Reject the negative: lands after about $3.59$ s.`],
    ans: S`$\approx3.59$ s` },
];

const PROBLEMS = [
  { level: 1, q: S`State $a$, $b$, $c$ for $5x^2=3-2x$ after rearranging.`, ans: S`$5x^2+2x-3=0$: $5,2,-3$` },
  { level: 1, q: S`Solve $x^2-5x+6=0$ with the formula.`, ans: S`$2$, $3$` },
  { level: 1, q: S`Solve $x^2+4x-1=0$ exactly.`, ans: S`$-2\pm\sqrt5$` },
  { level: 2, q: S`Solve $2x^2+5x-1=0$ to two decimals.`, ans: S`$0.19$, $-2.69$` },
  { level: 2, q: S`Solve $3x^2=x+5$ to two decimals.`, ans: S`$1.47$, $-1.14$` },
  { level: 2, q: S`Solve $x^2-6x+10=0$.`, ans: S`no real roots ($D=-4$)` },
  { level: 2, q: S`Solve $4x^2-4x-1=0$ exactly.`, ans: S`$\frac{1\pm\sqrt2}2$` },
  { level: 2, q: S`Solve $0.5x^2-x-3=0$ to two decimals.`, ans: S`$3.65$, $-1.65$` },
  { level: 3, space: 5, q: S`$h(t)=-5t^2+18t+4$. Find when the object lands, to two decimals.`, ans: S`$\approx3.81$ s` },
  { level: 3, space: 5, q: S`Solve $x(x+4)=2(x+6)$ using the formula and check by factoring.`, ans: S`$x^2+2x-12=0$: $-1\pm\sqrt{13}$ (does not factor)` },
  { level: 3, space: 5, q: S`Complete the square on $ax^2+bx+c=0$ to derive the quadratic formula. Show each step.`, ans: S`see notes table` },
  { level: 3, space: 5, q: S`Solve $x^2-2x-6=0$ by graphing (estimate), by completing the square, and by the formula. Compare the methods.`, fig: F({ view: { xmin: -3, xmax: 5, ymin: -8, ymax: 6 } }), ans: S`$1\pm\sqrt7\approx3.65,-1.65$` },
  { level: 3, space: 5, q: S`A device's power is $P=20I-2.5I^2$. For which currents is $P=30$ W?`, ans: S`$I^2-8I+12=0$: $2$ A, $6$ A` },
];

export const WS = {
  code: "4.3",
  title: "The Quadratic Formula",
  bigideas: S`Completing the square on $ax^2+bx+c=0$ gives the quadratic formula $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$, which solves every quadratic equation. Rearrange to $=0$, read $a,b,c$ with signs, simplify the discriminant first, and give exact or decimal roots as needed. Compared with factoring and graphing, it is slower but always works.`,
  goals: ["Follow the development of the formula.", "Use the formula with exact and decimal answers.", "Rearrange and identify coefficients.", "Compare solution strategies."],
  curriculum: "A1.6, A1.8",
  vocab: [["Quadratic formula", "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$"], ["Discriminant", "$b^2-4ac$"], ["Exact root", "with a radical"], ["Approximate root", "rounded decimal"]],
  hook: S`Try to factor $x^2-4x+1$. Why does it fail? Is there still a solution? Look at its graph.`,
  concepts: [
    ["1. Development", S`\begin{center}\begin{tabular}{@{}ll@{}}$ax^2+bx+c=0$ & divide by $a$, move $\frac ca$\\ $x^2+\frac bax=-\frac ca$ & add $\frac{b^2}{4a^2}$\\ $\left(x+\frac b{2a}\right)^2=\frac{b^2-4ac}{4a^2}$ & square-root\\ $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ & \end{tabular}\end{center}`],
    ["2. Using it", S`Rearrange; list $a,b,c$; compute $D$; substitute; simplify radicals; round if needed; reject impossible roots in context.
${Z((x) => x * x - 4 * x + 1, { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, [[2 + Math.sqrt(3), "(3.73, 0)"], [2 - Math.sqrt(3), "(0.27, 0)"]])}`],
    ["3. Choosing a method", S`Factoring: fast if it works. Graphing: shows the picture, estimates. Formula: always works, exact.`],
  ],
  tips: ["Brackets for negative values.", "Divide the WHOLE numerator by $2a$.", "Compute $D$ first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
