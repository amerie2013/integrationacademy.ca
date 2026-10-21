// IB AA SL Worksheet 3.6 — The Quadratic Formula and the Discriminant (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Using the formula", q: S`Solve $x^2-3x-5=0$.`,
    steps: [S`$\Delta=9+20=29$; $x=\frac{3\pm\sqrt{29}}{2}$.`], ans: S`$x\approx4.19$ or $-1.19$` },
  { title: "a ≠ 1", q: S`Solve $3x^2+2x-4=0$.`,
    steps: [S`$\Delta=4+48=52$; $x=\frac{-2\pm\sqrt{52}}{6}$.`], ans: S`$x\approx0.869$ or $-1.54$` },
  { title: "Equal roots", q: S`Describe the roots of $4x^2-12x+9=0$.`,
    steps: [S`$\Delta=144-144=0$.`], ans: S`one repeated root $x=1.5$` },
  { title: "No real roots", q: S`Describe the roots of $2x^2+x+3=0$.`,
    steps: [S`$\Delta=1-24=-23<0$.`], ans: "no real roots" },
  { title: "Equal roots with a parameter", q: S`Find $k$ so that $2x^2+kx+8=0$ has equal roots.`,
    steps: [S`$k^2-64=0$.`], ans: S`$k=\pm8$` },
  { title: "No real roots with a parameter", q: S`For which $k$ does $x^2-6x+k=0$ have no real roots?`,
    steps: [S`$36-4k<0$.`], ans: S`$k>9$` },
  { title: "Tangent lines", q: S`Find $m$ so that $y=mx-1$ is a tangent to $y=x^2$.`,
    steps: [S`$x^2-mx+1=0$ with $\Delta=m^2-4=0$.`], ans: S`$m=\pm2$` },
  { title: "A quadratic inequality", q: S`Solve $x^2-5x+4\le0$.`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x * x - 5 * x + 4, a: -1, b: 1, color: "gray" }, { f: (x) => x * x - 5 * x + 4, a: 1, b: 4, color: "green" }, { f: (x) => x * x - 5 * x + 4, a: 4, b: 6, color: "gray" }], points: [pt(1, 0), pt(4, 0)] }),
    steps: [S`Roots 1 and 4; the parabola is below or on the axis between them.`], ans: S`$1\le x\le4$` },
  { title: "Line and parabola", q: S`Does $y=x+1$ cut, touch or miss $y=x^2-3x+5$?`,
    steps: [S`$x^2-4x+4=0$, $\Delta=0$.`, S`It touches at $x=2$, $y=3$.`], ans: S`tangent at $(2,3)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the discriminant of $x^2+4x+1$.`, recap: "Discriminant.", ans: "12" },
  { level: 1, q: S`How many real roots does $9x^2-6x+1=0$ have?`, recap: "Nature of roots.", ans: S`one ($\Delta=0$)` },
  { level: 1, q: S`Solve $x^2-2x-2=0$ with the formula.`, recap: "Formula.", ans: S`$1\pm\sqrt3$` },
  { level: 2, q: S`Solve $2x^2-5x+1=0$ (3 s.f.).`, recap: "Formula, a ≠ 1.", ans: S`$\frac{5\pm\sqrt{17}}{4}\approx2.28,\ 0.219$` },
  { level: 2, q: S`Find $k$ so that $x^2+kx+25=0$ has equal roots.`, recap: "Equal roots.", ans: S`$k=\pm10$` },
  { level: 2, q: S`For which $k$ does $kx^2-4x+2=0$ have two distinct real roots?`, recap: "Distinct roots.", ans: S`$k<2$, $k\ne0$` },
  { level: 2, q: S`Solve $x^2+2x-15>0$.`, recap: "Inequality.", ans: S`$x<-5$ or $x>3$`,
    fig: F({ view: { xmin: -7, xmax: 5, ymin: -17, ymax: 10 }, curves: [{ f: (x) => x * x + 2 * x - 15 }], step: { x: 1, y: 2 } }) },
  { level: 2, q: S`Find the points where $y=2x+3$ meets $y=x^2$.`, recap: "Line and parabola.", ans: S`$(3,9)$ and $(-1,1)$` },
  { level: 3, space: 4, q: S`Find $k$ so that $y=kx-4$ is a tangent to $y=x^2$.`, recap: "Tangent.", ans: S`$k=\pm4$` },
  { level: 3, space: 4, q: S`For which $k$ does $x^2+(k-2)x+1=0$ have real roots?`, recap: "Real roots with a parameter.", ans: S`$k\le0$ or $k\ge4$` },
  { level: 3, space: 4, q: S`Show that $x^2+kx-1=0$ has two distinct real roots for every real $k$.`, recap: "Always two roots.", ans: S`$\Delta=k^2+4>0$` },
  { level: 3, space: 4, q: S`Solve $2x^2+3x-2<0$.`, recap: "Inequality, a ≠ 1.", ans: S`$-2<x<0.5$` },
  { level: 3, space: 4, q: S`Find $p$ so that $px^2+4x+p=0$ has equal roots.`, recap: "Parameter in two places.", ans: S`$p=\pm2$` },
];

export const WS = {
  code: "3.6",
  title: "The Quadratic Formula and the Discriminant",
  bigideas: S`Every quadratic $ax^2+bx+c=0$ is solved by $x=\frac{-b\pm\sqrt{\Delta}}{2a}$ with $\Delta=b^2-4ac$. $\Delta>0$: two distinct real roots; $\Delta=0$: one repeated root (tangent to the axis); $\Delta<0$: none. Use $\Delta$ with a parameter to force equal, distinct or no roots, and to test whether a line cuts, touches or misses a parabola. Solve inequalities from the roots and a sketch.`,
  goals: ["Use the quadratic formula.", "Classify roots with the discriminant.", "Find parameters and tangents.", "Solve quadratic inequalities."],
  curriculum: "SL 2.7",
  vocab: [["Discriminant", S`$\Delta=b^2-4ac$`], ["Repeated root", S`$\Delta=0$`], ["Tangent", "one point of contact"]],
  hook: "Show three parabolas: one crossing the x-axis twice, one touching it, one missing it. Ask students how an equation could tell them which case they have without drawing.",
  concepts: [
    ["1. The formula", S`From completing the square on $ax^2+bx+c=0$: $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$.`],
    ["2. The discriminant", S`${F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 2 * x - 2, color: "green" }, { f: (x) => x * x - 2 * x + 1, color: "amber" }, { f: (x) => x * x - 2 * x + 3, color: "red" }] }, 5)} Same shape, different $c$: two, one and no zeros.`],
    ["3. Inequalities", "Find the roots, sketch, and read the x-values where the graph is above or below the axis."],
  ],
  tips: ["Bring everything to one side.", "Bracket negative b.", "'Real roots' means Δ ≥ 0.", "Check k ≠ 0 when k multiplies x².", "Sketch before solving inequalities."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
