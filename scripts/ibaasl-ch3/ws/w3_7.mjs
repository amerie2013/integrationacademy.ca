// IB AA SL Worksheet 3.7 — Applications of Quadratics (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Maximum height", q: S`$h(t)=-5t^2+25t+1$ m. Find the maximum height.`,
    steps: [S`$t=2.5$; $h=-31.25+62.5+1$.`], ans: "32.25 m" },
  { title: "Landing time", q: S`When does the object in the previous example land?`,
    steps: [S`$5t^2-25t-1=0\Rightarrow t=\frac{25+\sqrt{645}}{10}$.`], ans: S`$t\approx5.04$ s` },
  { title: "Greatest product", q: "Two numbers add to 30. Find the greatest possible product.",
    steps: [S`$x(30-x)$ is greatest at $x=15$.`], ans: "225" },
  { title: "A rectangle", q: "60 m of fence encloses a rectangle. Find the greatest area.",
    steps: [S`$A=x(30-x)$, maximum at $x=15$.`], ans: "225 m²" },
  { title: "Against a wall", q: "100 m of fence makes three sides of a rectangle against a wall. Find the greatest area.",
    fig: F({ view: { xmin: -2, xmax: 52, ymin: -50, ymax: 1400 }, curves: [{ f: (x) => x * (100 - 2 * x), a: 0, b: 50 }], points: [pt(25, 1250, null, "amber")], step: { x: 5, y: 200 } }),
    steps: [S`$A=x(100-2x)$; roots 0, 50; $x=25$.`], ans: "1250 m²" },
  { title: "Revenue", q: S`At 8 each, 500 items sell; each 0.50 increase loses 20 sales. Find the best price.`,
    steps: [S`$R=(8+0.5x)(500-20x)$; roots $-16$, $25$; $x=4.5$.`], ans: "10.25 (revenue 4202.50)" },
  { title: "An arch", q: S`An arch is 30 m wide and 12 m high. How high is it 5 m from one foot?`,
    steps: [S`$y=12-\frac{12}{225}(x-15)^2$; $x=5$: $12-\frac{1200}{225}$.`], ans: "about 6.67 m" },
  { title: "A garden", q: "A garden is 2 m longer than it is wide and has area 63 m². Find its width.",
    steps: [S`$x(x+2)=63\Rightarrow(x+9)(x-7)=0$.`], ans: "7 m" },
  { title: "Time above a height", q: S`$h(t)=-5t^2+40t$. For how long is $h>60$?`,
    steps: [S`$t^2-8t+12<0\Rightarrow2<t<6$.`], ans: "4 s" },
];

const PROBLEMS = [
  { level: 1, q: S`Find the maximum of $h(t)=-5t^2+10t+15$.`, recap: "Maximum.", ans: "20" },
  { level: 1, q: S`When is $h(t)=-4.9t^2+9.8t$ greatest?`, recap: "Time of maximum.", ans: "t = 1" },
  { level: 1, q: "Two numbers add to 16. Find the greatest product.", recap: "Product.", ans: "64" },
  { level: 2, q: S`When does $h(t)=-5t^2+10t+15$ reach the ground?`, recap: "Landing.", ans: "t = 3" },
  { level: 2, q: "A rectangle has perimeter 48 m. Find its greatest area.", recap: "Area.", ans: "144 m²" },
  { level: 2, q: "80 m of fence makes three sides of a rectangle against a wall. Find the greatest area.", recap: "Wall.", ans: "800 m²" },
  { level: 2, q: "Two positive numbers differ by 4 and have product 96. Find them.", recap: "Numbers.", ans: "8 and 12" },
  { level: 2, q: S`$R=(10+x)(200-10x)$, where the price is $10+x$. Find the best price.`, recap: "Revenue.", ans: "15" },
  { level: 3, space: 5, q: S`$h(t)=-4.9t^2+19.6t+2$. For how long is the ball above 12 m?`, recap: "Time above.", ans: "about 2.80 s",
    fig: F({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0, b: 4.1 }], lines: [{ m: 0, b: 12, color: "green", dash: true }], step: { x: 0.5, y: 2 } }) },
  { level: 3, space: 5, q: "An arch is 40 m wide and 16 m high. Find its width at a height of 12 m.", recap: "Arch.", ans: "20 m" },
  { level: 3, space: 5, q: "300 seats; at 9 each, 200 sell; each 0.50 decrease sells 20 more. Find the price for maximum revenue.", recap: "Revenue with a cap.", ans: "7 (280 seats, 1960)" },
  { level: 3, space: 5, q: "120 m of fence makes a rectangle split into 3 pens by 2 extra fences parallel to the width. Find the greatest total area.", recap: "Pens.", ans: S`$A=x(60-2x)$: 450 m²` },
  { level: 3, space: 4, q: S`Profit is $P(x)=-2x^2+80x-600$. Find the break-even points and the maximum profit.`, recap: "Profit.", ans: S`$x=10, 30$; 200 at $x=20$` },
];

export const WS = {
  code: "3.7",
  title: "Applications of Quadratics",
  bigideas: S`Quadratic models describe projectiles, areas, revenues and arches. The vertex gives the maximum or minimum and when it occurs; the roots give start and end points; solving $f(x)=k$ answers 'when' questions. Always define the variable, restrict the domain to what makes sense, and give units.`,
  goals: ["Use projectile models.", "Maximise areas and revenue.", "Model arches.", "Interpret answers in context."],
  curriculum: "SL 2.6, SL 2.7",
  vocab: [["Projectile", S`$h=-4.9t^2+v_0t+h_0$`], ["Revenue", "price × quantity"], ["Optimise", "find the max or min"]],
  hook: "Ask: with 40 m of rope, what rectangle encloses the most area? Let students test a few rectangles and plot area against width.",
  concepts: [
    ["1. Projectiles", S`${F({ view: { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 36 }, curves: [{ f: (t) => -5 * t * t + 25 * t + 1, a: 0, b: 5.04 }], points: [pt(2.5, 32.25, null, "amber")], step: { x: 0.5, y: 5 } }, 5)} Vertex: highest point; root: landing.`],
    ["2. Areas and revenue", "Products of two linear factors; the vertex is halfway between the roots."],
    ["3. Context", "Reject negative times and lengths; round sensibly; give units."],
  ],
  tips: ["Define the variable.", "Answer the question asked.", "Reject impossible roots.", "Give units.", "Use the GDC maximum and zero tools on Paper 2."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
