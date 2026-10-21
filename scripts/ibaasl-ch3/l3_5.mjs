// IB AA SL 3.5 — Factorising and Completing the Square: solving by factors, special factors, a ≠ 1, completing the square, vertex form
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "3.5 Factorising and Completing the Square";
export const ID = "1baa0003-0001-4001-8001-000000000305";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Factorising and Completing the Square",
    overview: S`To solve \(ax^2+bx+c=0\), we can either factorise and use the fact that a product is zero only when a factor is zero, or rewrite the quadratic as a perfect square plus a constant. Completing the square also gives the vertex form, so it connects solving with graphing. In this lesson you will solve quadratics by factorising (including \(a\ne1\) and special cases) and by completing the square.`,
    goals: [
      "solve quadratic equations by factorising, using the zero-product property;",
      "use common factors and the difference of two squares;",
      "factorise quadratics with \\(a\\ne1\\);",
      "complete the square to write \\(ax^2+bx+c\\) as \\(a(x-h)^2+k\\);",
      "solve quadratic equations by completing the square and read off the vertex.",
    ],
    curriculum: "SL 2.7 (solution of quadratic equations and inequalities by factorising and completing the square), SL 2.6 (the form f(x) = a(x − h)² + k)",
    prior: [
      [S`Expand \((x-7)(x+2)\).`, S`\(x^2-5x-14\).`],
      [S`Expand \((x+3)^2\).`, S`\(x^2+6x+9\).`],
      [S`Solve \((x-2)^2=9\).`, S`\(x=5\) or \(x=-1\).`],
    ],
    words: [
      ["Zero-product property", "if \\(AB=0\\) then \\(A=0\\) or \\(B=0\\)", "\\((x-7)(x+2)=0\\)"],
      ["Difference of squares", "\\(A^2-B^2=(A-B)(A+B)\\)", "\\(x^2-4=(x-2)(x+2)\\)"],
      ["Root / solution", "a value of \\(x\\) that makes the equation true", "\\(x=7\\)"],
      ["Perfect square", "\\((x+p)^2=x^2+2px+p^2\\)", "\\(x^2+6x+9\\)"],
      ["Completing the square", "adding and subtracting \\(\\left(\\frac b2\\right)^2\\)", "\\(x^2+6x+2=(x+3)^2-7\\)"],
    ],
  }),

  section("📌 Solving by factorising", S`
  <p>Rearrange so one side is 0, factorise, then set each factor equal to 0.</p>
  ${table(["Type", "Example", "Factors"], [
    ["common factor", S`\(2x^2-8x\)`, S`\(2x(x-4)\)`],
    ["difference of squares", S`\(3x^2-12\)`, S`\(3(x-2)(x+2)\)`],
    [S`\(a=1\) trinomial`, S`\(x^2-5x-14\)`, S`\((x-7)(x+2)\): product −14, sum −5`],
    [S`\(a\ne1\) trinomial`, S`\(2x^2+5x-3\)`, S`\((2x-1)(x+3)\)`],
  ])}
  ${plane({ view: { xmin: -4, xmax: 9, ymin: -22, ymax: 8 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x * x - 5 * x - 14, color: "violet" }], points: [P(-2, 0, "(−2, 0)"), P(7, 0, "(7, 0)")] }, "The roots of x² − 5x − 14 = 0 are the zeros of the graph: −2 and 7")}
  ${keyIdea(S`The solutions of \(f(x)=0\) are the x-intercepts of \(y=f(x)\). Factorising works when the roots are rational; completing the square works every time.`)}`),

  section("📌 Completing the square", S`
  <p>Half the coefficient of \(x\), square it, add and subtract: \(x^2+bx+c=\left(x+\frac b2\right)^2-\left(\frac b2\right)^2+c\). If \(a\ne1\), factor \(a\) out of the \(x\)-terms first.</p>
  ${plane({ view: { xmin: -7, xmax: 2, ymin: -8, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x + 6 * x + 2, color: "violet" }], points: [P(-3, -7, "(−3, −7)", "amber"), P(-3 + Math.sqrt(7), 0, "(−0.35, 0)"), P(-3 - Math.sqrt(7), 0, "(−5.65, 0)")] }, "x² + 6x + 2 = (x + 3)² − 7: vertex (−3, −7), roots −3 ± √7")}
  ${watchOut([
    "Set the equation equal to 0 before factorising: x² = 3x gives x(x − 3) = 0, not 'divide by x' (that loses x = 0).",
    "Taking a square root gives ±: (x + 3)² = 7 ⇒ x + 3 = ±√7.",
    "When a ≠ 1, factor a out of the x² and x terms only, then complete the square inside.",
    "Check factorised answers by expanding.",
  ])}`),

  section("📌 Explore", S`<p>Change \(b\) and \(c\). The area picture shows why \(\left(\frac b2\right)^2\) completes the square; the graph shows the vertex and the roots.</p>`),

  widget("ibSquare", { init: [6, 5] }),

  examples([
    ["Level 1 · A trinomial", S`Solve \(x^2-5x-14=0\).`,
      [S`Two numbers with product \(-14\) and sum \(-5\): \(-7\) and \(2\).`, S`\((x-7)(x+2)=0\Rightarrow x=7\) or \(x=-2\).`],
      S`\(x=7\) or \(x=-2\)`],
    ["Level 1 · Special factors", S`Solve (a) \(3x^2-12=0\) and (b) \(2x^2-8x=0\).`,
      [S`(a) \(3(x^2-4)=3(x-2)(x+2)=0\Rightarrow x=\pm2\).`, S`(b) \(2x(x-4)=0\Rightarrow x=0\) or \(x=4\).`],
      S`(a) \(\pm2\) (b) \(0, 4\)`],
    ["Level 2 · a ≠ 1", S`Solve \(2x^2+5x-3=0\).`,
      [S`\(ac=-6\): use \(6\) and \(-1\): \(2x^2+6x-x-3=2x(x+3)-(x+3)\).`, S`\((2x-1)(x+3)=0\Rightarrow x=\frac12\) or \(x=-3\).`],
      S`\(x=\frac12\) or \(x=-3\)`,
      plane({ view: { xmin: -5, xmax: 2, ymin: -7, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x * x + 5 * x - 3, color: "violet" }], points: [P(0.5, 0, "(0.5, 0)"), P(-3, 0, "(−3, 0)")] })],
    ["Level 2 · Completing the square", S`Write \(x^2+6x+2\) in the form \((x+p)^2+q\), state the vertex, and solve \(x^2+6x+2=0\).`,
      [S`\(x^2+6x+2=(x+3)^2-9+2=(x+3)^2-7\).`, S`Vertex \((-3,-7)\).`, S`\((x+3)^2=7\Rightarrow x=-3\pm\sqrt7\approx-0.354\) or \(-5.646\).`],
      S`\((x+3)^2-7\); \(x=-3\pm\sqrt7\)`],
    ["Level 3 · Completing the square with a ≠ 1", S`Write \(2x^2-8x+3\) in vertex form and solve \(2x^2-8x+3=0\).`,
      [S`\(2(x^2-4x)+3=2\big((x-2)^2-4\big)+3=2(x-2)^2-5\).`, S`Vertex \((2,-5)\).`, S`\((x-2)^2=2.5\Rightarrow x=2\pm\sqrt{2.5}\approx3.58\) or \(0.42\).`],
      S`\(2(x-2)^2-5\); \(x\approx3.58, 0.42\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x * x - 8 * x + 3, color: "violet" }], points: [P(2, -5, "(2, −5)", "amber"), P(2 + Math.sqrt(2.5), 0, "(3.58, 0)"), P(2 - Math.sqrt(2.5), 0, "(0.42, 0)")] })],
  ]),

  practice([
    q("Level 1 · factorise", S`Solve \(x^2-x-12=0\) and give the larger root.`, num(4),
      "Product −12, sum −1.", [S`\((x-4)(x+3)=0\).`], S`\(4\)`),
    q("Level 1 · square root", S`Solve \(x^2=49\) and give the positive root.`, num(7),
      "Square root both sides.", [S`\(x=\pm7\).`], S`\(7\)`),
    q("Level 2 · a ≠ 1", S`Solve \(2x^2-7x+3=0\) and give the smaller root.`, num(0.5),
      "Factorise with ac = 6.", [S`\((2x-1)(x-3)=0\).`], S`\(0.5\)`),
    q("Level 2 · complete the square", S`\(x^2+8x+10=(x+4)^2+k\). Find \(k\).`, num(-6),
      "Subtract 4² = 16.", [S`\(10-16\).`], S`\(-6\)`),
    q("Level 2 · vertex", S`Complete the square on \(x^2-10x+18\). What is the y-coordinate of the vertex?`, num(-7),
      "(x − 5)² − 25 + 18.", [S`\((x-5)^2-7\).`], S`\(-7\)`),
  ]),

  ...hard([
    ["Exact roots", S`Solve \(x^2-4x-1=0\) by completing the square, and find the sum and product of the roots.`,
      [S`\((x-2)^2-4-1=0\Rightarrow(x-2)^2=5\Rightarrow x=2\pm\sqrt5\).`, S`Sum \((2+\sqrt5)+(2-\sqrt5)=4\).`, S`Product \(4-5=-1\).`],
      S`\(x=2\pm\sqrt5\); sum 4, product \(-1\)`],
    ["A rectangle", S`A rectangle is 3 cm longer than it is wide and has area 40 cm². Find its width.`,
      [S`Width \(x\): \(x(x+3)=40\Rightarrow x^2+3x-40=0\).`, S`\((x+8)(x-5)=0\Rightarrow x=5\) or \(x=-8\).`, S`A width must be positive: \(x=5\) cm (length 8 cm).`],
      "width 5 cm",
      plane({ view: { xmin: -10, xmax: 7, ymin: -45, ymax: 20 }, step: { x: 1, y: 5 }, curves: [{ f: (x) => x * x + 3 * x - 40, color: "violet" }], points: [P(5, 0, "(5, 0)", "green"), P(-8, 0, "(−8, 0)", "red")] }, "Only the positive root makes sense as a width")],
  ], [
    q("Level 3 · a ≠ 1", S`\(3x^2-12x+7=3(x-2)^2+k\). Find \(k\).`, num(-5),
      "3(x − 2)² = 3x² − 12x + 12.", [S`\(7-12\).`], S`\(-5\)`),
    q("Level 3 · exact root", S`Find the positive root of \(x^2+2x-2=0\) (3 d.p.).`, num(0.732, 0.001),
      "Complete the square.", [S`\((x+1)^2=3\Rightarrow x=-1+\sqrt3\).`], S`\(0.732\)`),
    q("Level 3 · rearrange first", S`Solve \((x-3)^2=2x\) and give the larger root (3 d.p.).`, num(6.646, 0.001),
      "Expand and set to 0.", [S`\(x^2-8x+9=0\Rightarrow(x-4)^2=7\).`], S`\(6.646\)`),
  ]),

  wrapUp({
    qas: [
      ["When should I factorise and when complete the square?", "Factorise when nice integer factors exist; complete the square (or use the formula, 3.6) otherwise."],
      ["Why can't I divide both sides by x?", "x might be 0 — dividing would lose that solution. Factor x out instead."],
      ["How do I factorise when a ≠ 1?", "Find two numbers multiplying to ac and adding to b, split the middle term, and group."],
      ["What does completing the square tell me about the graph?", "The vertex: (x + p)² + q has vertex (−p, q)."],
      ["Can I use a GDC?", "On Paper 2 the polynomial solver or graph zeros are fine; Paper 1 needs algebra."],
    ],
    summary: [
      "Set = 0, factorise, set each factor = 0.",
      "Special cases: common factor, A² − B², a ≠ 1 by splitting the middle term.",
      "x² + bx + c = (x + b/2)² − (b/2)² + c.",
      "Square roots give ±; check solutions make sense in context.",
    ],
    next: "3.6 develops the quadratic formula and uses the discriminant to count roots.",
  }),
];
