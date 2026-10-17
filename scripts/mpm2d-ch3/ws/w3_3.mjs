// MPM2D Worksheet 3.3 — Factoring Simple Trinomials (x² + bx + c) (teacher edition)
import { F, areaT, parT, rectT, gridT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Both positive", q: String.raw`Factor $x^2+10x+21$.`,
    fig: parT((x) => x * x + 10 * x + 21, [-3, -7], { xmin: -9, xmax: 1, ymin: -5, ymax: 12 }),
    steps: [String.raw`Product 21, sum 10: $3$ and $7$.`, String.raw`Zeros of $y=x^2+10x+21$: $-3$ and $-7$.`], ans: "$(x+3)(x+7)$" },
  { title: "Both negative", q: String.raw`Factor $x^2-12x+35$.`,
    fig: parT((x) => x * x - 12 * x + 35, [5, 7], { xmin: 2, xmax: 10, ymin: -3, ymax: 10 }),
    steps: [String.raw`Product $+35$, sum $-12$: $-5$ and $-7$.`], ans: "$(x-5)(x-7)$" },
  { title: "Opposite signs, b positive", q: String.raw`Factor $x^2+4x-32$.`,
    fig: parT((x) => x * x + 4 * x - 32, [-8, 4], { xmin: -10, xmax: 6, ymin: -40, ymax: 20 }, { step: { x: 2, y: 10 } }),
    steps: [String.raw`Product $-32$, sum $4$: $8$ and $-4$.`], ans: "$(x+8)(x-4)$" },
  { title: "Opposite signs, b negative", q: String.raw`Factor $x^2-3x-40$.`,
    fig: parT((x) => x * x - 3 * x - 40, [8, -5], { xmin: -7, xmax: 10, ymin: -45, ymax: 20 }, { step: { x: 2, y: 10 } }),
    steps: [String.raw`Product $-40$, sum $-3$: $-8$ and $5$.`], ans: "$(x-8)(x+5)$" },
  { title: "Two variables", q: String.raw`Factor $x^2+5xy+6y^2$.`,
    fig: areaT(["x", "+2y"], ["x", "+3y"], [["x^2", "3xy"], ["2xy", "6y^2"]]),
    steps: [String.raw`Product $6y^2$, sum $5y$: $2y$ and $3y$.`], ans: "$(x+2y)(x+3y)$" },
  { title: "Common factor first", q: String.raw`Factor fully: $4x^2-8x-60$.`,
    fig: parT((x) => 4 * x * x - 8 * x - 60, [5, -3], { xmin: -5, xmax: 7, ymin: -70, ymax: 30 }, { step: { x: 1, y: 10 } }),
    steps: [String.raw`$4(x^2-2x-15)$.`, String.raw`Product $-15$, sum $-2$: $-5$ and $3$.`], ans: "$4(x-5)(x+3)$" },
  { title: "Negative leading term", q: String.raw`Factor $-x^2+x+20$.`,
    fig: parT((x) => -x * x + x + 20, [5, -4], { xmin: -6, xmax: 7, ymin: -12, ymax: 24 }, { step: { x: 1, y: 4 } }),
    steps: [String.raw`Take out $-1$: $-(x^2-x-20)$.`, String.raw`Product $-20$, sum $-1$: $-5$ and $4$.`], ans: "$-(x-5)(x+4)$" },
  { title: "One that does not factor", q: String.raw`Factor $x^2+2x+4$, if possible.`,
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x + 2 * x + 4, color: "violet" }] }),
    steps: [String.raw`Pairs of 4: $(1,4)$, $(2,2)$, $(-1,-4)$, $(-2,-2)$ — sums $5$, $4$, $-5$, $-4$. None is $2$.`, "The graph never crosses the x-axis."], ans: "does not factor over the integers" },
  { title: "A missing side", q: String.raw`A rectangle has area $x^2+9x+18$ and length $x+6$. Find its width.`,
    fig: areaT(["x", "+3"], ["x", "+6"], [["x^2", "6x"], ["3x", "18"]]),
    steps: [String.raw`Product 18, sum 9: $3$ and $6$: $(x+3)(x+6)$.`], ans: "$x+3$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Factor $x^2+7x+10$.`, recap: "x² + 7x + 10.", ans: "$(x+2)(x+5)$" },
  { level: 1, q: String.raw`Factor $x^2-10x+16$.`, recap: "x² − 10x + 16.", ans: "$(x-2)(x-8)$" },
  { level: 1, q: String.raw`Factor $x^2+3x-18$.`, recap: "x² + 3x − 18.", ans: "$(x+6)(x-3)$" },
  { level: 2, q: String.raw`Factor $x^2-x-42$.`, recap: "x² − x − 42.", ans: "$(x-7)(x+6)$" },
  { level: 2, q: String.raw`Factor $x^2-13x+36$.`, recap: "x² − 13x + 36.", ans: "$(x-4)(x-9)$" },
  { level: 2, q: String.raw`Factor fully: $3x^2+21x+30$.`, recap: "3x² + 21x + 30.", ans: "$3(x+2)(x+5)$" },
  { level: 2, q: String.raw`Factor $x^2-4xy-21y^2$.`, recap: "x² − 4xy − 21y².", ans: "$(x-7y)(x+3y)$", fig: areaT(["x", "?"], ["x", "?"], [["x^2", "?"], ["?", "-21y^2"]]) },
  { level: 2, q: String.raw`Factor $-x^2-2x+24$.`, recap: "−x² − 2x + 24.", ans: "$-(x+6)(x-4)$" },
  { level: 3, space: 5, q: String.raw`Find all integers $k$ for which $x^2+kx+12$ can be factored.`, recap: "Values of k.", ans: String.raw`$\pm7$, $\pm8$, $\pm13$` },
  { level: 3, space: 5, q: String.raw`Find all positive integers $c$ for which $x^2+8x+c$ factors.`, recap: "Values of c.", ans: "$7$, $12$, $15$, $16$" },
  { level: 3, space: 5, q: String.raw`A rectangle has area $x^2+11x+28$ and width $x+4$. Find its length and perimeter.`, recap: "Rectangle from its area.", ans: String.raw`length $x+7$; perimeter $4x+22$`, fig: rectT("?", "x + 4", "area x² + 11x + 28") },
  { level: 3, space: 5, q: String.raw`Factor $y=x^2-6x+8$, state its zeros and $y$-intercept, and sketch the graph.`, recap: "Factor and sketch.", ans: String.raw`$(x-2)(x-4)$; zeros $2$, $4$; $y$-intercept $8$`, fig: gridT({ xmin: -1, xmax: 7, ymin: -2, ymax: 9 }) },
  { level: 3, space: 5, q: String.raw`Explain why $x^2+5x+7$ cannot be factored over the integers.`, recap: "Not factorable.", ans: "pairs of 7 are (1, 7) and (−1, −7), with sums 8 and −8 — never 5" },
];

export const WS = {
  code: "3.3",
  title: "Factoring Simple Trinomials (x² + bx + c)",
  bigideas: String.raw`Expanding $(x+m)(x+n)$ gives $x^2+(m+n)x+mn$, so factoring $x^2+bx+c$ means finding two numbers with product $c$ and sum $b$. The sign pattern narrows the search. Take out a common factor first. Some trinomials do not factor over the integers. The numbers in the brackets, with opposite signs, are the zeros of the parabola.`,
  goals: ["Use sum and product.", "Handle every sign pattern.", "Take out a common factor first.", "Connect factors to zeros."],
  curriculum: "QR3",
  vocab: [["Trinomial", "three terms"], ["Leading coefficient", "coefficient of x²"], ["Zero", "x-value where y = 0"]],
  hook: String.raw`Show the graph of $y=x^2-x-6$ crossing at $-2$ and $3$. Ask students to write a product of two brackets that is zero at those values, then expand it.`,
  concepts: [
    ["1. Sum and product", String.raw`$x^2+bx+c=(x+m)(x+n)$ with $mn=c$, $m+n=b$.
${parT((x) => x * x - x - 6, [-2, 3], { xmin: -4, xmax: 5, ymin: -8, ymax: 8 }, {})}`],
    ["2. Signs", String.raw`$c>0$: same signs as $b$. $c<0$: opposite signs, larger has the sign of $b$.`],
    ["3. Special cases", String.raw`Common factor first; negative leading term: take out $-1$; check whether it factors at all.`],
  ],
  tips: ["Check sum AND product.", "List factor pairs systematically.", "Keep the common factor in the answer.", "Expand to verify.", "Link zeros to factors."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
