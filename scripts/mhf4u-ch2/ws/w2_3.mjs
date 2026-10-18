// MHF4U Worksheet 2.3 — Polynomial Equations (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Factor theorem first", q: String.raw`Solve $x^3+x^2-10x+8=0$.`,
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -8, ymax: 20 }, curves: [{ f: (x) => x ** 3 + x * x - 10 * x + 8 }], points: [pt(-4, 0), pt(1, 0), pt(2, 0)], step: { x: 1, y: 4 } }),
    steps: [String.raw`$P(1)=0$; divide: $x^2+2x-8=(x+4)(x-2)$.`], ans: String.raw`$x=1, 2, -4$` },
  { title: "Common factor", q: String.raw`Solve $x^3-2x^2-3x=0$.`,
    steps: [String.raw`$x(x^2-2x-3)=x(x-3)(x+1)=0$.`], ans: String.raw`$x=0, 3, -1$` },
  { title: "Grouping", q: String.raw`Solve $3x^3+2x^2-12x-8=0$.`,
    steps: [String.raw`$x^2(3x+2)-4(3x+2)=(3x+2)(x-2)(x+2)$.`], ans: String.raw`$x=-\tfrac23, \pm2$` },
  { title: "Quadratic in form", q: String.raw`Solve $x^4-5x^2-36=0$.`,
    steps: [String.raw`$(x^2-9)(x^2+4)=0$; $x^2+4=0$ has no real roots.`], ans: String.raw`$x=\pm3$` },
  { title: "Irrational roots", q: String.raw`Solve $x^3+2x^2-2x-1=0$.`,
    fig: F({ view: { xmin: -3.5, xmax: 1.8, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 + 2 * x * x - 2 * x - 1 }], points: [pt(1, 0)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`$P(1)=0$; divide: $x^2+3x+1$.`, String.raw`$x=\dfrac{-3\pm\sqrt5}{2}\approx-0.38,\ -2.62$.`], ans: String.raw`$x=1, \tfrac{-3\pm\sqrt5}{2}$` },
  { title: "Sum of cubes", q: String.raw`Solve $27x^3+8=0$.`,
    steps: [String.raw`$(3x+2)(9x^2-6x+4)=0$; the quadratic has discriminant $36-144\lt0$.`], ans: String.raw`$x=-\tfrac23$` },
  { title: "Rearrange, then group", q: String.raw`Solve $x^3+12=4x^2+3x$.`,
    steps: [String.raw`$x^3-4x^2-3x+12=0$: $x^2(x-4)-3(x-4)=(x-4)(x^2-3)$.`], ans: String.raw`$x=4, \pm\sqrt3$` },
  { title: "f(x) = k on a graph", q: String.raw`Solve $x^3-3x=2$ and show it on the graph.`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x }, { f: () => 2, color: "green" }], points: [pt(-1, 2), pt(2, 2)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`$x^3-3x-2=0$; $P(-1)=0$; divide: $x^2-x-2=(x-2)(x+1)$.`, String.raw`$(x+1)^2(x-2)=0$: the line touches the curve at $x=-1$.`], ans: String.raw`$x=-1$ (double), $x=2$` },
  { title: "Box volume", q: String.raw`An open box from a 10 cm by 16 cm sheet (squares of side $x$ cut out) has volume 144 cm³. Find $x$.`,
    steps: [String.raw`$x(10-2x)(16-2x)=144\Rightarrow x^3-13x^2+40x-36=0$.`, String.raw`$P(2)=0$; divide: $x^2-11x+18=(x-2)(x-9)$. $x=9$ is too large ($x\lt5$).`], ans: "x = 2 cm" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $(x-2)(x+5)(2x-1)=0$.`, recap: "Zero product.", ans: String.raw`$2, -5, \tfrac12$` },
  { level: 1, q: String.raw`Solve $x^3-16x=0$.`, recap: "Common factor.", ans: String.raw`$0, \pm4$` },
  { level: 1, q: String.raw`Find the real root of $x^3-8=0$.`, recap: "Difference of cubes.", ans: "2" },
  { level: 2, q: String.raw`Solve $x^3-2x^2-11x+12=0$.`, recap: "Factor theorem.", ans: String.raw`$1, 4, -3$` },
  { level: 2, q: String.raw`Solve $2x^3-x^2-18x+9=0$.`, recap: "Grouping.", ans: String.raw`$\tfrac12, \pm3$` },
  { level: 2, q: String.raw`Solve $x^4-17x^2+16=0$.`, recap: "Quadratic in form.", ans: String.raw`$\pm1, \pm4$` },
  { level: 2, q: String.raw`Solve $x^3+x^2-7x-3=0$ exactly.`, recap: "Irrational roots.", ans: String.raw`$-3, 1\pm\sqrt2$` },
  { level: 2, q: String.raw`Use the graph to solve $x^3-6x^2+9x=4$, then confirm algebraically.`, recap: "f(x) = k.", ans: String.raw`$(x-1)^2(x-4)=0$: $1, 4$`,
    fig: F({ view: { xmin: -0.5, xmax: 4.8, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x }, { f: () => 4, color: "green" }], step: { x: 0.5, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Solve $x^4-2x^3-9x^2+2x+8=0$.`, recap: "Quartic.", ans: String.raw`$1, -1, 4, -2$` },
  { level: 3, space: 5, q: String.raw`$x=2$ is a root of $x^3+kx^2-4x-12=0$. Find $k$ and the other roots.`, recap: "Use a known root.", ans: String.raw`$k=3$; $(x+3)(x^2-4)$: $-3, -2$` },
  { level: 3, space: 5, q: String.raw`A box with dimensions $x$, $x+1$, $x+3$ has twice the volume of a cube with edge $x$. Find $x$.`, recap: "Model.", ans: String.raw`$x^2-4x-3=0$: $x=2+\sqrt7\approx4.65$` },
  { level: 3, space: 5, q: String.raw`Explain why every cubic equation has at least one real root, but a quartic equation might have none. Give an example of each.`, recap: "Existence of roots.", ans: "opposite end behaviour forces a crossing; e.g. x⁴ + 1 = 0 has none" },
  { level: 3, space: 5, q: String.raw`A square-based box has base $x$ by $x$ and height $x+1$, with volume 12. Find the dimensions; sketch $V=x^2(x+1)$ and the line $V=12$.`, recap: "Volume equation.", ans: String.raw`$x^3+x^2-12=0$: $x=2$; 2 by 2 by 3`, fig: gridT({ xmin: 0, xmax: 3, ymin: 0, ymax: 30 }, { x: 0.5, y: 5 }) },
];

export const WS = {
  code: "2.3",
  title: "Polynomial Equations",
  bigideas: String.raw`To solve $P(x)=0$, move every term to one side and factor completely: common factor, grouping, special products (including $a^3\pm b^3$), the factor theorem, and the quadratic formula for a leftover quadratic. Each factor gives roots; a quadratic factor with negative discriminant gives none. Real roots are the x-intercepts of $y=P(x)$; solutions of $P(x)=k$ are where the graph meets $y=k$.`,
  goals: ["Solve by factoring completely.", "Use sum and difference of cubes.", "Find irrational roots with the quadratic formula.", "Solve problems with polynomial models."],
  curriculum: "C3.3, C3.4, C3.7",
  vocab: [["Root", "a solution of $P(x)=0$"], ["$a^3\\pm b^3$", "$(a\\pm b)(a^2\\mp ab+b^2)$"], ["Quadratic in form", "quadratic in $x^2$"]],
  hook: String.raw`How many times can a horizontal line meet the graph of a cubic? Draw cases with 1, 2 and 3 meeting points.`,
  concepts: [
    ["1. Roots and intercepts", String.raw`The roots of $P(x)=0$ are the x-intercepts.
${F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "blue" }, { f: (x) => x ** 3 - 4 * x + 4, color: "red" }], step: { x: 1, y: 1 } })}`],
    ["2. Strategy list", String.raw`Common factor → grouping → patterns → factor theorem → quadratic formula.`],
    ["3. Count the roots", String.raw`At most $n$ real roots for degree $n$.`],
  ],
  tips: ["Never divide by x — factor it out.", "One side must be 0.", "SOAP for cubes.", "Check roots in context.", "Discriminant < 0: no real roots from that factor."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
