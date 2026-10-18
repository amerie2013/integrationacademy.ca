// MPM2D Worksheet 5.1 — Solving Quadratic Equations by Factoring (teacher edition)
import { F, gridT, parT, rectT } from "./figT.mjs";

const EXAMPLES = [
  { title: "A simple trinomial", q: String.raw`Solve $x^2+7x+10=0$.`,
    fig: parT((x) => x * x + 7 * x + 10, [-5, -2], { xmin: -7, xmax: 1, ymin: -3, ymax: 6 }),
    steps: [String.raw`Product $10$, sum $7$: $2$ and $5$.`, String.raw`$(x+2)(x+5)=0\Rightarrow x=-2$ or $x=-5$.`], ans: String.raw`$x=-2$ or $x=-5$` },
  { title: "Both roots positive", q: String.raw`Solve $x^2-9x+14=0$.`,
    steps: [String.raw`Product $14$, sum $-9$: $-2$ and $-7$.`, String.raw`$(x-2)(x-7)=0$.`], ans: String.raw`$x=2$ or $x=7$` },
  { title: "Rearrange first", q: String.raw`Solve $x^2=5x+24$.`,
    fig: parT((x) => x * x - 5 * x - 24, [-3, 8], { xmin: -5, xmax: 10, ymin: -32, ymax: 10 }, { step: { x: 1, y: 4 } }),
    steps: [String.raw`$x^2-5x-24=0$.`, String.raw`$(x-8)(x+3)=0$.`, String.raw`Check $x=-3$: $9=-15+24$.`], ans: String.raw`$x=8$ or $x=-3$` },
  { title: "Leading coefficient 3", q: String.raw`Solve $3x^2+5x-2=0$.`,
    fig: parT((x) => 3 * x * x + 5 * x - 2, [-2, 1 / 3], { xmin: -3, xmax: 2, ymin: -5, ymax: 6 }),
    steps: [String.raw`$ac=-6$; numbers $6$ and $-1$: $3x^2+6x-x-2$.`, String.raw`$3x(x+2)-(x+2)=(3x-1)(x+2)$.`, String.raw`$x=\tfrac13$ or $x=-2$.`], ans: String.raw`$x=\tfrac13$ or $x=-2$` },
  { title: "A common factor of x", q: String.raw`Solve $6x^2=18x$.`,
    steps: [String.raw`Do not divide by $x$: $6x^2-18x=0$.`, String.raw`$6x(x-3)=0\Rightarrow x=0$ or $x=3$.`], ans: String.raw`$x=0$ or $x=3$` },
  { title: "Difference of squares", q: String.raw`Solve $25x^2-49=0$.`,
    steps: [String.raw`$(5x-7)(5x+7)=0$.`, String.raw`$x=\pm\tfrac75$.`], ans: String.raw`$x=\pm\tfrac75$` },
  { title: "A double root", q: String.raw`Solve $x^2-12x+36=0$.`,
    fig: F({ view: { xmin: 2, xmax: 10, ymin: -2, ymax: 12 }, curves: [{ f: (x) => (x - 6) ** 2, color: "violet" }], points: [{ x: 6, y: 0, label: "(6, 0)", color: "amber" }], step: { x: 1, y: 2 } }),
    steps: [String.raw`$(x-6)^2=0$.`, String.raw`Both factors give $x=6$: the vertex touches the x-axis.`], ans: String.raw`$x=6$ (double root)` },
  { title: "Common factor, then trinomial", q: String.raw`Solve $2x^2-4x-30=0$.`,
    steps: [String.raw`$2(x^2-2x-15)=0$.`, String.raw`$2(x-5)(x+3)=0$; the factor $2$ is never zero.`], ans: String.raw`$x=5$ or $x=-3$` },
  { title: "A garden", q: String.raw`A rectangular garden is $4$ m longer than it is wide. Its area is $96$ m$^2$. Find its dimensions.`,
    fig: rectT("w + 4", "w", "area 96 m²"),
    steps: [String.raw`$w(w+4)=96\Rightarrow w^2+4w-96=0$.`, String.raw`$(w+12)(w-8)=0$; a width can't be $-12$.`], ans: String.raw`$8$ m by $12$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $x^2-6x+8=0$.`, recap: "Trinomial.", ans: String.raw`$x=2$ or $x=4$` },
  { level: 1, q: String.raw`Solve $(x+7)(2x-3)=0$.`, recap: "Zero product.", ans: String.raw`$x=-7$ or $x=\tfrac32$` },
  { level: 1, q: String.raw`Solve $x^2-81=0$.`, recap: "Difference of squares.", ans: String.raw`$x=\pm9$` },
  { level: 2, q: String.raw`Solve $x^2+x-42=0$. Then sketch $y=x^2+x-42$, marking the zeros.`, recap: "Solve and sketch.", ans: String.raw`$x=6$ or $x=-7$`, fig: gridT({ xmin: -9, xmax: 9, ymin: -46, ymax: 10 }, { x: 1, y: 4 }) },
  { level: 2, q: String.raw`Solve $x^2=10x-21$.`, recap: "Rearrange.", ans: String.raw`$x=3$ or $x=7$` },
  { level: 2, q: String.raw`Solve $2x^2-x-6=0$.`, recap: "a ≠ 1.", ans: String.raw`$(2x+3)(x-2)=0$: $x=-\tfrac32$ or $x=2$` },
  { level: 2, q: String.raw`Solve $4x^2=12x$.`, recap: "Don't divide by x.", ans: String.raw`$x=0$ or $x=3$` },
  { level: 2, q: String.raw`Solve $3x^2+12x-63=0$.`, recap: "Common factor.", ans: String.raw`$3(x+7)(x-3)=0$: $x=-7$ or $x=3$` },
  { level: 3, space: 5, q: String.raw`A rectangle has perimeter $34$ cm and area $60$ cm$^2$. Write a quadratic equation for its width and find its dimensions.`, recap: "Perimeter and area.", ans: String.raw`$w(17-w)=60\Rightarrow(w-5)(w-12)=0$: $5$ cm by $12$ cm`, fig: rectT("17 − w", "w", "area 60 cm²") },
  { level: 3, space: 4.5, q: String.raw`Write a quadratic equation with integer coefficients whose roots are $4$ and $-\tfrac32$.`, recap: "Equation from roots.", ans: String.raw`$(x-4)(2x+3)=0$, i.e. $2x^2-5x-12=0$` },
  { level: 3, space: 5, q: String.raw`A student solves $x^2-2x=15$ by writing $x(x-2)=15$, so $x=15$ or $x-2=15$. Explain the error and solve correctly.`, recap: "Find the error.", ans: String.raw`one side must be $0$: $x^2-2x-15=0$, $(x-5)(x+3)=0$: $x=5$ or $x=-3$` },
  { level: 3, space: 5, q: String.raw`The parabola $y=x^2+bx+c$ crosses the x-axis at $-2$ and $6$, as shown. Find $b$ and $c$.`, recap: "b and c from zeros.", ans: String.raw`$(x+2)(x-6)=x^2-4x-12$: $b=-4$, $c=-12$`, fig: parT((x) => x * x - 4 * x - 12, [-2, 6], { xmin: -4, xmax: 8, ymin: -18, ymax: 8 }, { step: { x: 1, y: 2 } }) },
  { level: 3, space: 5, q: String.raw`A ball's height is $h=-5t^2+15t+20$ metres after $t$ seconds. When does it hit the ground? Explain which root you reject.`, recap: "Landing time.", ans: String.raw`$-5(t-4)(t+1)=0$: $t=4$ s; reject $t=-1$ (before the throw)` },
];

export const WS = {
  code: "5.1",
  title: "Solving Quadratic Equations by Factoring",
  bigideas: String.raw`A quadratic equation $ax^2+bx+c=0$ has up to two roots, which are the x-intercepts of $y=ax^2+bx+c$. To solve by factoring: rearrange so one side is $0$, factor fully, set each factor equal to $0$ (zero product property), and check. Never divide by $x$ — factor it out. In problems, reject roots that do not fit the situation.`,
  goals: ["Use the zero product property.", "Rearrange to standard form first.", "Solve with common factors, a ≠ 1 and differences of squares.", "Solve and check area and height problems."],
  curriculum: "QR3, QR4",
  vocab: [["Root", "a solution of the equation"], ["Zero product property", "$AB=0\\Rightarrow A=0$ or $B=0$"], ["Double root", "a repeated root, e.g. $(x-6)^2=0$"]],
  hook: String.raw`Ask: “I'm thinking of two numbers whose product is 0. What do you know?” Then: “…whose product is 12?” Use the contrast to motivate getting 0 on one side.`,
  concepts: [
    ["1. Roots are zeros", String.raw`The roots of $x^2-2x-8=0$ are where $y=x^2-2x-8$ meets the x-axis.
${parT((x) => x * x - 2 * x - 8, [-2, 4], { xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, { step: { x: 1, y: 2 } })}`],
    ["2. The steps", String.raw`Standard form $=0$ → factor fully → each factor $=0$ → check in the original equation.`],
    ["3. In context", String.raw`Define the variable with units; reject negative lengths and times before launch.`],
  ],
  tips: ["Get 0 on one side first.", "Factor x out; never divide by x.", "(x + 5) = 0 gives −5.", "Finish 3x − 1 = 0: x = 1/3.", "Check roots in the original equation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
