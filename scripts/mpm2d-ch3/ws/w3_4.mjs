// MPM2D Worksheet 3.4 — Factoring Complex Trinomials (ax² + bx + c) (teacher edition)
import { F, areaT, parT, rectT } from "./figT.mjs";

const EXAMPLES = [
  { title: "a·c positive, b positive", q: String.raw`Factor $2x^2+11x+12$.`,
    fig: areaT(["2x", "+3"], ["x", "+4"], [["2x^2", "8x"], ["3x", "12"]]),
    steps: [String.raw`$a\cdot c=24$; product 24, sum 11: $3$ and $8$.`, String.raw`$2x^2+3x+8x+12=x(2x+3)+4(2x+3)$.`], ans: "$(2x+3)(x+4)$" },
  { title: "b negative", q: String.raw`Factor $3x^2-14x+8$.`,
    fig: parT((x) => 3 * x * x - 14 * x + 8, [2 / 3, 4], { xmin: -1, xmax: 6, ymin: -10, ymax: 10 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`$a\cdot c=24$; sum $-14$: $-2$ and $-12$.`, String.raw`$3x^2-2x-12x+8=x(3x-2)-4(3x-2)$.`], ans: "$(3x-2)(x-4)$" },
  { title: "a·c negative", q: String.raw`Factor $4x^2+4x-3$.`,
    fig: parT((x) => 4 * x * x + 4 * x - 3, [-1.5, 0.5], { xmin: -3, xmax: 2, ymin: -5, ymax: 8 }),
    steps: [String.raw`$a\cdot c=-12$; sum 4: $6$ and $-2$.`, String.raw`$4x^2+6x-2x-3=2x(2x+3)-1(2x+3)$.`], ans: "$(2x+3)(2x-1)$" },
  { title: "a·c negative, b negative", q: String.raw`Factor $6x^2-7x-5$.`,
    fig: parT((x) => 6 * x * x - 7 * x - 5, [5 / 3, -0.5], { xmin: -2, xmax: 3, ymin: -8, ymax: 8 }),
    steps: [String.raw`$a\cdot c=-30$; sum $-7$: $-10$ and $3$.`, String.raw`$6x^2-10x+3x-5=2x(3x-5)+1(3x-5)$.`], ans: "$(3x-5)(2x+1)$" },
  { title: "Larger coefficients", q: String.raw`Factor $10x^2+11x+3$.`,
    fig: areaT(["5x", "+3"], ["2x", "+1"], [["10x^2", "5x"], ["6x", "3"]]),
    steps: [String.raw`$a\cdot c=30$; sum 11: $5$ and $6$.`, String.raw`$10x^2+5x+6x+3=5x(2x+1)+3(2x+1)$.`], ans: "$(2x+1)(5x+3)$" },
  { title: "Common factor first", q: String.raw`Factor fully: $8x^2-22x+12$.`,
    fig: parT((x) => 8 * x * x - 22 * x + 12, [0.75, 2], { xmin: -1, xmax: 3.5, ymin: -5, ymax: 14 }, { step: { x: 0.5, y: 2 } }),
    steps: [String.raw`$2(4x^2-11x+6)$.`, String.raw`$a\cdot c=24$, sum $-11$: $-3$ and $-8$. $4x^2-3x-8x+6=x(4x-3)-2(4x-3)$.`], ans: "$2(4x-3)(x-2)$" },
  { title: "Two variables", q: String.raw`Factor $3x^2+5xy-2y^2$.`,
    fig: areaT(["x", "+2y"], ["3x", "-y"], [["3x^2", "-xy"], ["6xy", "-2y^2"]]),
    steps: [String.raw`$a\cdot c=-6$; sum 5: $6$ and $-1$.`, String.raw`$3x^2+6xy-xy-2y^2=3x(x+2y)-y(x+2y)$.`], ans: "$(x+2y)(3x-y)$" },
  { title: "Negative leading coefficient", q: String.raw`Factor $-2x^2+x+6$.`,
    fig: parT((x) => -2 * x * x + x + 6, [2, -1.5], { xmin: -3, xmax: 3.5, ymin: -6, ymax: 8 }),
    steps: [String.raw`$-(2x^2-x-6)$.`, String.raw`$a\cdot c=-12$, sum $-1$: $-4$ and $3$. $2x^2-4x+3x-6=2x(x-2)+3(x-2)$.`], ans: "$-(x-2)(2x+3)$" },
  { title: "A missing side", q: String.raw`A rectangle has area $6x^2+17x+12$ and length $2x+3$. Find its width.`,
    fig: areaT(["2x", "+3"], ["3x", "+4"], [["6x^2", "8x"], ["9x", "12"]]),
    steps: [String.raw`$a\cdot c=72$; sum 17: $8$ and $9$.`, String.raw`$6x^2+8x+9x+12=2x(3x+4)+3(3x+4)=(3x+4)(2x+3)$.`], ans: "$3x+4$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Factor $2x^2+5x+2$.`, recap: "2x² + 5x + 2.", ans: "$(2x+1)(x+2)$", fig: areaT(["?", "?"], ["?", "?"], [["2x^2", "?"], ["?", "2"]]) },
  { level: 1, q: String.raw`Factor $3x^2+8x+4$.`, recap: "3x² + 8x + 4.", ans: "$(3x+2)(x+2)$" },
  { level: 1, q: String.raw`Factor $5x^2-11x+2$.`, recap: "5x² − 11x + 2.", ans: "$(5x-1)(x-2)$" },
  { level: 2, q: String.raw`Factor $2x^2-x-15$.`, recap: "2x² − x − 15.", ans: "$(x-3)(2x+5)$" },
  { level: 2, q: String.raw`Factor $6x^2+5x-4$.`, recap: "6x² + 5x − 4.", ans: "$(3x+4)(2x-1)$" },
  { level: 2, q: String.raw`Factor $4x^2-12x+9$.`, recap: "4x² − 12x + 9.", ans: "$(2x-3)^2$" },
  { level: 2, q: String.raw`Factor $9x^2+3x-2$.`, recap: "9x² + 3x − 2.", ans: "$(3x+2)(3x-1)$" },
  { level: 2, q: String.raw`Factor fully: $12x^2+10x-8$.`, recap: "12x² + 10x − 8.", ans: "$2(3x+4)(2x-1)$" },
  { level: 3, space: 5, q: String.raw`Find all integers $k$ for which $2x^2+kx+3$ can be factored.`, recap: "Values of k.", ans: String.raw`$\pm5$, $\pm7$` },
  { level: 3, space: 5, q: String.raw`Factor $6x^2-xy-12y^2$.`, recap: "Two variables.", ans: String.raw`$(2x-3y)(3x+4y)$` },
  { level: 3, space: 5, q: String.raw`A rectangle has area $8x^2+14x+3$ and width $2x+3$. Find its length and perimeter.`, recap: "Rectangle from its area.", ans: String.raw`length $4x+1$; perimeter $12x+8$`, fig: rectT("?", "2x + 3", "area 8x² + 14x + 3") },
  { level: 3, space: 5, q: String.raw`Use an area model to explain why decomposition uses two numbers with product $a\cdot c$. Use $3x^2+10x+8$ as your example.`, recap: "Why a·c works.", ans: String.raw`the two $x$-cells are $6x$ and $4x$: $6\times4=24=3\times8$ and $6+4=10$`, fig: areaT(["?", "?"], ["?", "?"], [["3x^2", "?"], ["?", "8"]]) },
  { level: 3, space: 5, q: String.raw`A student factored $6x^2+13x+6$ as $(6x+2)(x+3)$. Check the answer, explain the error and factor correctly.`, recap: "Error analysis.", ans: String.raw`expands to $6x^2+20x+6$; correct: $(3x+2)(2x+3)$` },
];

export const WS = {
  code: "3.4",
  title: "Factoring Complex Trinomials (ax² + bx + c)",
  bigideas: String.raw`To factor $ax^2+bx+c$ with $a\ne1$, find two numbers with product $a\cdot c$ and sum $b$, split the middle term into those two terms, and factor by grouping. This works because the two middle cells of the area model always multiply to $a\cdot c$. Take out a common factor first; trinomials in two variables factor the same way.`,
  goals: ["Explain why a·c is used.", "Factor by decomposition.", "Handle all sign patterns.", "Factor two-variable trinomials."],
  curriculum: "QR3",
  vocab: [["Decomposition", "split the middle term"], ["a·c", "first coefficient × last"], ["Grouping", "pairs with a common bracket"]],
  hook: String.raw`Ask students to factor $6x^2+19x+10$ by guess and check (there are many combinations). Then show decomposition: product $60$, sum $19$: $4$ and $15$ — done in one step.`,
  concepts: [
    ["1. Why a·c", String.raw`In $(px+q)(rx+s)$ the middle cells are $psx$ and $qrx$; their coefficients multiply to $pqrs=a\cdot c$.
${areaT(["2x", "+1"], ["x", "+3"], [["2x^2", "6x"], ["x", "3"]], 4.5)}`],
    ["2. Steps", String.raw`GCF; product $a\cdot c$, sum $b$; split; group; check.`],
    ["3. Special cases", String.raw`Negative leading coefficient: take out $-1$. Perfect squares also work by decomposition.`],
  ],
  tips: ["Use a·c, not c.", "Match the brackets: take a negative factor from the second pair if needed.", "Keep the GCF.", "Check by expanding.", "Area models help visual learners."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
