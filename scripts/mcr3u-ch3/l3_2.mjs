// MCR3U 3.2 — Maximum and Minimum Values: completing the square (a ≠ 1, fractions), partial factoring, averaging zeros,
// revenue from price changes, profit = revenue − cost, area optimisation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "3.2 Maximum and Minimum Values";
export const ID = "5c3e0001-0001-4001-8001-000000000302";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🏔️",
    title: "Maximum and Minimum Values",
    overview: S`The vertex of a parabola gives the largest or smallest value of a quadratic function — the best price, the greatest area, the lowest cost. In this lesson you will find it algebraically in three ways (completing the square, partial factoring, and averaging the zeros) and use it to solve revenue, profit and area problems.`,
    goals: [
      "complete the square, including when a ≠ 1 or b is odd;",
      "use partial factoring to find the axis without the zeros;",
      "find the vertex by averaging the zeros;",
      "build revenue and profit functions and maximise them;",
      "interpret the optimal value in context (including whole-number answers).",
    ],
    curriculum: "A2.2 (determine the maximum or minimum value of a quadratic function in the form f(x) = ax² + bx + c, using an algebraic method), A2.3 (solve problems involving quadratic functions arising from real-world applications)",
    prior: [
      [S`Expand \((x-4)^2\).`, S`\(x^2-8x+16\).`],
      [S`What number completes \(x^2+10x+\square\) to a square?`, S`\(25\).`],
      [S`Factor \(3x^2-12x\).`, S`\(3x(x-4)\).`],
    ],
    words: [
      ["Optimal value", "the maximum or minimum of the function", ""],
      ["Completing the square", "rewriting \\(ax^2+bx+c\\) as \\(a(x-h)^2+k\\)", ""],
      ["Partial factoring", "\\(ax^2+bx+c=x(ax+b)+c\\)", ""],
      ["Revenue / profit", "price × quantity / revenue − cost", ""],
    ],
  }),

  section("📌 Three algebraic methods", S`
  ${table(["Method", "How", "Best when"], [
    ["Complete the square", "factor \\(a\\) from the x-terms, add and subtract \\((\\frac{b}{2a})^2\\) inside", "you want vertex form"],
    ["Partial factoring", "\\(x(ax+b)+c\\) equals \\(c\\) at \\(x=0\\) and \\(x=-\\frac ba\\); axis halfway", "it does not factor"],
    ["Average the zeros", "axis \\(=\\frac{r+s}2\\), then substitute", "it factors, or is given in factored form"],
  ])}
  ${keyIdea(S`All three give the same axis \(x=-\frac{b}{2a}\). Substitute that x to get the optimal value.`)}`),

  section("📌 Explore: revenue", S`<p>A store raises its price in equal steps and loses customers with each step. Revenue \(=\) price \(\times\) quantity is a product of two linear factors — a parabola whose zeros are easy to read. The best number of steps is halfway between them.</p>`),

  widget("revenueLab", { init: [18, 400, 1, 15] }),

  section("📌 Completing the square with fractions", S`
  <p>\(f(x)=x^2+5x-2\): half of 5 is \(\tfrac52\), and \((\tfrac52)^2=6.25\):</p>
  <p style="text-align:center">\(f(x)=(x^2+5x+6.25)-6.25-2=(x+2.5)^2-8.25\)</p>
  ${plane({ view: { xmin: -7, xmax: 3, ymin: -9, ymax: 5 }, curves: [{ f: (x) => x * x + 5 * x - 2, color: "violet" }], points: [{ x: -2.5, y: -8.25, label: "(−2.5, −8.25)" }], step: { x: 1, y: 1 } })}
  ${watchOut([
    "Factor a out of the x-terms only, not the constant.",
    "When the square leaves the bracket it is multiplied by a.",
    "Revenue = price × number sold — both change with the number of steps.",
    "If the steps must be whole numbers, test the nearest whole numbers to the vertex.",
  ])}`),

  examples([
    ["Completing the square, a ≠ 1", S`Find the minimum of \(f(x)=3x^2-12x+7\).`,
      [S`\(3(x^2-4x)+7=3(x^2-4x+4-4)+7\).`, S`\(=3(x-2)^2-12+7=3(x-2)^2-5\).`],
      S`minimum \(-5\) at \(x=2\)`],
    ["Partial factoring", S`Find the maximum of \(f(x)=-2x^2+10x+3\).`,
      [S`\(f(x)=-2x(x-5)+3\): \(f(0)=f(5)=3\).`, S`Axis \(x=2.5\); \(f(2.5)=-12.5+25+3=15.5\).`],
      S`maximum \(15.5\) at \(x=2.5\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 17 }, curves: [{ f: (x) => -2 * x * x + 10 * x + 3, color: "violet" }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "green" }, { x: 5, y: 3, label: "(5, 3)", color: "green" }, { x: 2.5, y: 15.5, label: "(2.5, 15.5)" }], step: { x: 1, y: 2 } })],
    ["An odd b", S`Write \(f(x)=x^2+5x-2\) in vertex form.`,
      [S`Add and subtract \((\tfrac52)^2=6.25\).`],
      S`\(f(x)=(x+2.5)^2-8.25\); minimum \(-8.25\)`],
    ["Maximum revenue", S`Tickets cost 18 dollars and 400 are sold. Each 1-dollar increase loses 15 sales. What price maximises revenue?`,
      [S`\(R(x)=(18+x)(400-15x)\) for \(x\) increases.`, S`Zeros \(x=-18\) and \(x=\tfrac{80}{3}\approx26.67\); axis \(x\approx4.33\).`, S`Whole dollars: \(R(4)=22(340)=7480\), \(R(5)=23(325)=7475\).`],
      "charge 22 dollars: revenue 7480 dollars"],
    ["Maximum profit", S`A company's revenue is \(R(x)=-2x^2+60x\) and its cost is \(C(x)=10x+200\) (thousands of dollars, \(x\) thousand items). Find the maximum profit.`,
      [S`\(P(x)=R(x)-C(x)=-2x^2+50x-200\).`, S`Axis \(x=\frac{-50}{-4}=12.5\); \(P(12.5)=-312.5+625-200=112.5\).`],
      "112.5 thousand dollars at 12 500 items"],
  ]),

  practice([
    q("complete the square", S`Find the minimum value of \(f(x)=x^2-8x+21\).`, num(5),
      "Half of −8 is −4.", [S`\((x-4)^2-16+21\).`], S`\(5\)`),
    q("a ≠ 1", S`Find the maximum value of \(f(x)=-4x^2+24x-11\).`, num(25),
      "Axis −b/(2a).", [S`\(x=3\): \(-36+72-11\).`], S`\(25\)`),
    q("axis", S`Find the x-coordinate of the vertex of \(f(x)=5x^2+15x-2\).`, num(-1.5),
      "Partial factoring: 5x(x + 3) − 2.", [S`Halfway between 0 and −3.`], S`\(-1.5\)`),
    q("revenue", S`\(R(x)=(10+x)(200-8x)\). For what \(x\) is revenue greatest?`, num(7.5),
      "Average the zeros.", [S`Zeros \(-10\) and \(25\).`], S`\(7.5\)`),
    q("profit", S`Profit is \(P(x)=-x^2+14x-24\) (thousands of dollars). Find the maximum profit.`, num(25),
      "x = 7.", [S`\(-49+98-24\).`], S`\(25\) thousand dollars`),
  ]),

  ...hard([
    ["Three pens", S`A farmer has 240 m of fence to build a rectangle split into 3 pens by 2 fences parallel to the width. What dimensions give the greatest total area?`,
      [S`With width \(w\) and length \(L\): \(4w+2L=240\Rightarrow L=120-2w\).`, S`\(A(w)=w(120-2w)\), zeros 0 and 60, axis \(w=30\).`, S`\(L=60\), \(A=1800\).`],
      "30 m by 60 m, 1800 m²",
      plane({ view: { xmin: 0, xmax: 62, ymin: 0, ymax: 2000 }, curves: [{ f: (w) => w * (120 - 2 * w), a: 0, b: 60, color: "violet" }], points: [{ x: 30, y: 1800, label: "(30, 1800)" }], step: { x: 10, y: 200 }, xlabel: "w (m)", ylabel: "A (m²)" })],
    ["Demand and cost", S`The price that sells \(x\) thousand items is \(p(x)=-0.5x+25\) dollars, and the cost is \(C(x)=5x+60\) thousand dollars. Find the price that maximises profit and the maximum profit.`,
      [S`Revenue \(R=x(-0.5x+25)=-0.5x^2+25x\).`, S`Profit \(P=-0.5x^2+20x-60\); axis \(x=20\).`, S`\(P(20)=-200+400-60=140\); price \(p(20)=15\).`],
      "price 15 dollars, profit 140 thousand dollars"],
  ], [
    q("hard", S`Find the minimum value of \(x^2+7x+15\).`, num(2.75),
      "Half of 7 is 3.5.", [S`\((x+3.5)^2-12.25+15\).`], S`\(2.75\)`),
    q("hard", "Two numbers differ by 10. What is the smallest possible product?", num(-25),
      "Use x and x + 10.", [S`\(x(x+10)\) has its vertex at \(x=-5\).`], S`\(-25\)`),
    q("hard", S`A booth sells 800 drinks at 4 dollars. Each 0.25-dollar increase loses 40 sales. What is the maximum revenue?`, num(3240),
      "R(x) = (4 + 0.25x)(800 − 40x).", [S`Zeros \(-16\) and 20; axis \(x=2\): price 4.50, 720 drinks.`], S`\(3240\) dollars`),
  ]),

  wrapUp({
    qas: [
      ["Which method is fastest?", "If it factors, average the zeros. If not, partial factoring finds the axis quickly; completing the square gives the full vertex form."],
      ["Why is revenue a parabola?", "It is (price) × (quantity) and both are linear in the number of steps, so the product is quadratic."],
      ["What if the vertex is not a whole number?", "If only whole steps make sense, compare the two nearest whole numbers."],
      ["Is maximum profit the same as maximum revenue?", "No. Costs shift the vertex: profit peaks at a different quantity."],
      ["How do I know it is a maximum and not a minimum?", "Look at a: negative means the parabola opens down, so the vertex is a maximum."],
    ],
    summary: [
      "Complete the square: a(x − h)² + k.",
      "Partial factoring: x(ax + b) + c; axis halfway between 0 and −b/a.",
      "Axis = average of the zeros = −b/(2a).",
      "Revenue = price × quantity; profit = revenue − cost.",
    ],
    next: "3.3 solves quadratic equations that come from models.",
  }),
];
