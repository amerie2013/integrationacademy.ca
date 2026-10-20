// MCR3U Worksheet 3.4 — Maximum and Minimum Values (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Completing the square", q: String.raw`Find the minimum of $f(x)=2x^2+12x+11$.`,
    steps: [String.raw`$2(x^2+6x+9-9)+11=2(x+3)^2-18+11$.`], ans: String.raw`$2(x+3)^2-7$: minimum $-7$ at $x=-3$` },
  { title: "Odd b", q: String.raw`Find the maximum of $f(x)=-x^2+7x-3$.`,
    steps: [String.raw`$-(x^2-7x+12.25-12.25)-3=-(x-3.5)^2+12.25-3$.`], ans: String.raw`maximum $9.25$ at $x=3.5$` },
  { title: "Partial factoring", q: String.raw`Find the minimum of $f(x)=3x^2-9x+4$.`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 3 * x * x - 9 * x + 4 }], points: [pt(0, 4, null, "green"), pt(3, 4, null, "green"), pt(1.5, -2.75)] }),
    steps: [String.raw`$3x(x-3)+4$: $f(0)=f(3)=4$; axis $x=1.5$.`, String.raw`$f(1.5)=6.75-13.5+4=-2.75$.`], ans: String.raw`minimum $-2.75$` },
  { title: "Averaging the zeros", q: String.raw`Find the maximum of $f(x)=-4(x-1)(x-7)$.`,
    steps: [String.raw`Axis $x=4$: $-4(3)(-3)=36$.`], ans: "maximum 36" },
  { title: "Projectile", q: String.raw`$h(t)=-4.9t^2+29.4t+3$. Find the maximum height.`,
    steps: [String.raw`$t=\frac{-29.4}{-9.8}=3$; $h(3)=-44.1+88.2+3$.`], ans: "47.1 m after 3 s" },
  { title: "Revenue", q: "A bus tour charges 40 dollars and has 60 riders. Each 2-dollar increase loses 2 riders. Find the best price.",
    fig: F({ view: { xmin: -22, xmax: 32, ymin: 0, ymax: 2800 }, curves: [{ f: (x) => (40 + 2 * x) * (60 - 2 * x), a: -20, b: 30 }], points: [pt(5, 2500)], step: { x: 5, y: 500 } }),
    steps: [String.raw`$R=(40+2x)(60-2x)$, zeros $-20$, $30$, axis $x=5$.`], ans: "50 dollars, 50 riders, 2500 dollars" },
  { title: "Profit", q: String.raw`$R(x)=-3x^2+66x$, $C(x)=12x+150$ (thousands). Find the maximum profit.`,
    steps: [String.raw`$P=-3x^2+54x-150$; axis $x=9$.`, String.raw`$P(9)=-243+486-150=93$.`], ans: "93 thousand dollars" },
  { title: "Fence along a river", q: "80 m of fence encloses a rectangle against a river (no fence on that side). Find the largest area.",
    steps: [String.raw`$A=w(80-2w)$, zeros 0, 40; $w=20$.`], ans: "20 m by 40 m, 800 m²" },
  { title: "Numbers", q: "Two numbers have a sum of 18. What is their largest possible product?",
    steps: [String.raw`$P=x(18-x)$; axis $x=9$.`], ans: "81" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the minimum of $y=(x-5)^2+2$.`, recap: "Vertex form.", ans: "2" },
  { level: 1, q: String.raw`Find the maximum of $y=-x^2+6x$.`, recap: "Zeros 0 and 6.", ans: "9 at x = 3" },
  { level: 1, q: String.raw`Complete the square: $y=x^2+10x+18$.`, recap: "Complete the square.", ans: String.raw`$(x+5)^2-7$` },
  { level: 2, q: String.raw`Find the minimum of $y=3x^2-18x+20$.`, recap: "a = 3.", ans: String.raw`$3(x-3)^2-7$: $-7$` },
  { level: 2, q: String.raw`Find the maximum of $y=-2x^2-6x+1$.`, recap: "a = −2.", ans: String.raw`$5.5$ at $x=-1.5$` },
  { level: 2, q: String.raw`Use partial factoring to find the vertex of $y=4x^2+12x-5$.`, recap: "Partial factoring.", ans: String.raw`$(-1.5,-14)$` },
  { level: 2, q: String.raw`A rocket's height is $h(t)=-5t^2+60t+2$ m. Find its maximum height.`, recap: "Rocket.", ans: "182 m at 6 s" },
  { level: 2, q: "Two numbers differ by 8. Find the smallest possible product.", recap: "Product.", ans: String.raw`$-16$` },
  { level: 3, space: 5, q: "A concert sells 900 tickets at 30 dollars. Each 1.50-dollar increase loses 30 sales. Find the price for maximum revenue and the revenue.", recap: "Concert.", ans: "37.50 dollars; 28 125 dollars", fig: gridT({ xmin: -22, xmax: 32, ymin: 0, ymax: 30000 }, { x: 5, y: 5000 }) },
  { level: 3, space: 5, q: String.raw`Price $p(x)=-0.4x+30$ dollars sells $x$ thousand items; cost $C(x)=6x+100$ thousand dollars. Find the maximum profit and the price.`, recap: "Demand and cost.", ans: "260 thousand dollars at price 18 dollars" },
  { level: 3, space: 5, q: "300 m of fence make a rectangle split into 2 pens by one fence parallel to the width. Find the dimensions for maximum total area.", recap: "Two pens.", ans: "50 m by 75 m, 3750 m²" },
  { level: 3, space: 4, q: String.raw`Show that $x^2-8x+20\ge4$ for every real $x$.`, recap: "Prove a bound.", ans: String.raw`$(x-4)^2+4\ge4$` },
  { level: 3, space: 5, q: String.raw`A rectangle has one corner at the origin and the opposite corner on $y=12-2x$ (first quadrant). Find its largest area.`, recap: "Inscribed rectangle.", ans: "18 (x = 3, y = 6)",
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 13 }, lines: [{ m: -2, b: 12, color: "violet" }], segs: [{ pts: [[0, 0], [2, 0], [2, 8], [0, 8], [0, 0]], color: "green" }], points: [pt(2, 8, "(x, y)")] }) },
];

export const WS = {
  code: "3.4",
  title: "Maximum and Minimum Values",
  bigideas: String.raw`The optimal value of a quadratic is at its vertex, $x=-\frac b{2a}$. Find it by completing the square (factor $a$ from the x-terms, add and subtract $(\frac b{2a})^2$), by partial factoring ($x(ax+b)+c$), or by averaging the zeros. Revenue = price × quantity and profit = revenue − cost are quadratics in many problems.`,
  goals: ["Complete the square (a ≠ 1, odd b).", "Use partial factoring.", "Build revenue and profit functions.", "Solve area and number problems."],
  curriculum: "A2.2, A2.3",
  vocab: [["Optimal value", "max or min"], ["Revenue", "price × quantity"], ["Profit", "revenue − cost"]],
  hook: "Ask: “Should a café raise its coffee price?” Collect guesses, then build R(x) = (price)(cups) from invented data and find the vertex together.",
  concepts: [
    ["1. Three methods", String.raw`Complete the square; partial factoring; average the zeros. All give $x=-\frac b{2a}$.`],
    ["2. Revenue", String.raw`${F({ view: { xmin: -22, xmax: 32, ymin: 0, ymax: 2800 }, curves: [{ f: (x) => (40 + 2 * x) * (60 - 2 * x), a: -20, b: 30 }], points: [pt(-20, 0), pt(30, 0), pt(5, 2500)], step: { x: 5, y: 500 } }, 5, "zeros −20 and 30, maximum halfway")}`],
    ["3. Whole numbers", "If steps must be whole, test the integers next to the vertex."],
  ],
  tips: ["Factor a from x-terms only.", "Multiply the removed square by a.", "Revenue uses both price and quantity.", "Interpret the vertex in words.", "Check a for max vs min."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
