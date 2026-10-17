// MPM2D Worksheet 3.5 — Special Products (teacher edition)
import { F, areaT, parT, sqInSqT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Difference of squares", q: String.raw`Factor $x^2-81$.`,
    fig: parT((x) => x * x - 81, [-9, 9], { xmin: -12, xmax: 12, ymin: -90, ymax: 60 }, { step: { x: 3, y: 30 } }),
    steps: [String.raw`$x^2-9^2$.`, String.raw`Zeros at $\pm9$.`], ans: "$(x-9)(x+9)$" },
  { title: "With coefficients", q: String.raw`Factor $49x^2-25$.`,
    fig: sqInSqT("7x", "5", "49x² − 25"),
    steps: [String.raw`$(7x)^2-5^2$.`], ans: "$(7x-5)(7x+5)$" },
  { title: "Two variables", q: String.raw`Factor $36a^2-b^2$.`,
    fig: sqInSqT("6a", "b", "36a² − b²"),
    steps: [String.raw`$(6a)^2-b^2$.`], ans: "$(6a-b)(6a+b)$" },
  { title: "Common factor first", q: String.raw`Factor fully: $3x^2-75$.`,
    fig: parT((x) => 3 * x * x - 75, [-5, 5], { xmin: -7, xmax: 7, ymin: -80, ymax: 40 }, { step: { x: 1, y: 20 } }),
    steps: [String.raw`$3(x^2-25)$.`, String.raw`$3(x-5)(x+5)$.`], ans: "$3(x-5)(x+5)$" },
  { title: "Perfect square (plus)", q: String.raw`Factor $x^2+16x+64$.`,
    fig: areaT(["x", "+8"], ["x", "+8"], [["x^2", "8x"], ["8x", "64"]]),
    steps: [String.raw`$x^2$ and $64=8^2$; $2\times x\times8=16x$ ✓`], ans: "$(x+8)^2$" },
  { title: "Perfect square (minus)", q: String.raw`Factor $25x^2-40x+16$.`,
    fig: parT((x) => 25 * x * x - 40 * x + 16, [0.8], { xmin: -0.5, xmax: 2, ymin: -2, ymax: 20 }, { step: { x: 0.5, y: 4 } }),
    steps: [String.raw`$(5x)^2$, $4^2$, $2\times5x\times4=40x$.`, String.raw`One zero, $x=0.8$: the graph only touches the axis.`], ans: "$(5x-4)^2$" },
  { title: "Common factor, perfect square", q: String.raw`Factor fully: $2x^2+12x+18$.`,
    fig: parT((x) => 2 * x * x + 12 * x + 18, [-3], { xmin: -6, xmax: 0, ymin: -2, ymax: 16 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`$2(x^2+6x+9)$.`, String.raw`$2(x+3)^2$.`], ans: "$2(x+3)^2$" },
  { title: "A binomial square minus a square", q: String.raw`Factor $(x+3)^2-25$.`,
    fig: parT((x) => (x + 3) ** 2 - 25, [2, -8], { xmin: -10, xmax: 4, ymin: -28, ymax: 12 }, { step: { x: 2, y: 4 } }),
    steps: [String.raw`$a=x+3$, $b=5$: $[(x+3)-5][(x+3)+5]$.`, String.raw`$(x-2)(x+8)$.`], ans: "$(x-2)(x+8)$" },
  { title: "Mental math", q: String.raw`Calculate $52\times48$ and $31^2$ using the patterns.`,
    fig: areaT(["30", "+1"], ["30", "+1"], [["900", "30"], ["30", "1"]]),
    steps: [String.raw`$52\times48=(50+2)(50-2)=2500-4=2496$.`, String.raw`$31^2=(30+1)^2=900+60+1=961$.`], ans: "$2496$ and $961$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Factor $x^2-36$.`, recap: "x² − 36.", ans: "$(x-6)(x+6)$" },
  { level: 1, q: String.raw`Factor $x^2+14x+49$.`, recap: "x² + 14x + 49.", ans: "$(x+7)^2$", fig: areaT(["x", "?"], ["x", "?"], [["x^2", "?"], ["?", "49"]]) },
  { level: 1, q: String.raw`Factor $9x^2-1$.`, recap: "9x² − 1.", ans: "$(3x-1)(3x+1)$" },
  { level: 2, q: String.raw`Factor $64x^2-25y^2$.`, recap: "64x² − 25y².", ans: "$(8x-5y)(8x+5y)$" },
  { level: 2, q: String.raw`Factor $16x^2-24x+9$.`, recap: "16x² − 24x + 9.", ans: "$(4x-3)^2$" },
  { level: 2, q: String.raw`Factor fully: $5x^2-45$.`, recap: "5x² − 45.", ans: "$5(x-3)(x+3)$" },
  { level: 2, q: String.raw`Factor $x^2-20x+100$.`, recap: "x² − 20x + 100.", ans: "$(x-10)^2$" },
  { level: 2, q: String.raw`Is $x^2+10x+16$ a perfect square? Factor it.`, recap: "Perfect square?", ans: String.raw`no ($2\times x\times4=8x$); $(x+2)(x+8)$` },
  { level: 3, space: 5, q: String.raw`Find all values of $k$ for which $9x^2+kx+4$ is a perfect square.`, recap: "Find k.", ans: String.raw`$k=\pm12$` },
  { level: 3, space: 5, q: String.raw`Factor $(x-1)^2-9$.`, recap: "Square minus square.", ans: String.raw`$(x-4)(x+2)$` },
  { level: 3, space: 5, q: String.raw`A square of side $x+1$ is cut from a square of side $3x+2$. Write the remaining area in factored form.`, recap: "Area left over.", ans: String.raw`$(3x+2)^2-(x+1)^2=(2x+1)(4x+3)$`, fig: sqInSqT("3x + 2", "x + 1", "remaining area") },
  { level: 3, space: 5, q: String.raw`Use the patterns to calculate $99\times101$ and $59^2$ without a calculator. Show the pattern you use.`, recap: "Mental math.", ans: String.raw`$10\,000-1=9999$; $(60-1)^2=3600-120+1=3481$` },
  { level: 3, space: 5, q: String.raw`Explain why $x^2+4$ does not factor over the real numbers. Use the graph of $y=x^2+4$ to support your answer.`, recap: "Sum of squares.", ans: "no real product gives x² + 4; the graph never touches the x-axis, so there are no zeros", fig: F({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x + 4, color: "violet" }] }) },
];

export const WS = {
  code: "3.5",
  title: "Special Products",
  bigideas: String.raw`A difference of squares $a^2-b^2$ factors as $(a-b)(a+b)$, and a perfect-square trinomial $a^2\pm2ab+b^2$ factors as $(a\pm b)^2$. Recognizing them saves time; check the middle term for perfect squares. Take out a common factor first. A sum of squares does not factor over the real numbers.`,
  goals: ["Factor differences of squares.", "Factor perfect-square trinomials.", "Common factor first.", "Use the patterns for mental math."],
  curriculum: "QR3",
  vocab: [["Difference of squares", "$a^2-b^2$"], ["Perfect-square trinomial", "$a^2\\pm2ab+b^2$"], ["Sum of squares", "does not factor"]],
  hook: String.raw`Challenge: compute $41\times39$ and $201\times199$ in your head. Reveal the trick $(a+b)(a-b)=a^2-b^2$.`,
  concepts: [
    ["1. Difference of squares", String.raw`An L-shape rearranges into a rectangle: $a^2-b^2=(a-b)(a+b)$.
${sqInSqT("a", "b", "a² − b²", 4)}`],
    ["2. Perfect squares", String.raw`First and last terms squares; middle $=2\times$ product of the roots.`],
    ["3. Order of checks", String.raw`GCF $\to$ pattern $\to$ general method.`],
  ],
  tips: ["x² + 9 does not factor.", "Check the middle term.", "Both terms must be squares.", "GCF first.", "(x − 4)² is fully factored."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
