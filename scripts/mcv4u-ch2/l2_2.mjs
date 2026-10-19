// MCV4U 2.2 — The Product Rule: (uv)′ = u′v + uv′, why it holds (area model), products of two and three factors,
// tangent lines, horizontal tangents, and rates of change of a product (revenue = price × quantity)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "2.2 The Product Rule";
export const ID = "a6fefb25-8412-441f-b3ec-ce0b5f2d4e42";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "The Product Rule",
    overview: S`The derivative of a product is <em>not</em> the product of the derivatives: \(\frac{d}{dx}(x\cdot x)=2x\), but \(1\cdot1=1\). The correct rule comes from thinking of \(u\cdot v\) as the area of a rectangle with sides \(u\) and \(v\): when both sides grow, the area gains a strip \(u\,\Delta v\), a strip \(v\,\Delta u\), and a tiny corner that vanishes in the limit. So \((uv)'=u'v+uv'\). The rule saves expanding long products and is essential when the factors are roots or powers.`,
    goals: [
      "explain the product rule with an area model;",
      "differentiate products of two (and three) functions;",
      "find tangents and horizontal tangents of products;",
      "use the product rule for rates of change of products in context;",
      "check answers by expanding.",
    ],
    curriculum: "A3.3 (verify the product rule for polynomial functions by comparing with expanding, and apply it)",
    prior: [
      [S`Expand \((x^2+1)(3x-2)\).`, S`\(3x^3-2x^2+3x-2\).`],
      [S`Derivative of \(x^5\)?`, S`\(5x^4\).`],
      [S`Is \(\frac{d}{dx}(x^2\cdot x^3)=2x\cdot3x^2\)?`, S`No: \(x^5\to5x^4\), not \(6x^3\).`],
    ],
    words: [
      ["Product rule", "\\((uv)'=u'v+uv'\\)", ""],
      ["Factor", "each function being multiplied", "u and v"],
      ["Three factors", "\\((uvw)'=u'vw+uv'w+uvw'\\)", ""],
      ["Revenue", "price × quantity sold", "R = pq"],
    ],
  }),

  section("📌 Why u′v + uv′?", S`
  ${table(["Piece of new area", "Size", "After ÷ Δx, as Δx → 0"], [
    ["right strip", "v · Δu", "v · u′"],
    ["top strip", "u · Δv", "u · v′"],
    ["corner", "Δu · Δv", "0 (Δu·Δv/Δx → 0)"],
  ])}
  ${plane({ view: { xmin: -2, xmax: 2.5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (x * x + 1) * (3 * x - 2), color: "violet" }, { f: (x) => 9 * x * x - 4 * x + 3, color: "blue" }], step: { x: 0.5, y: 2 } }, "y = (x² + 1)(3x − 2) (violet) and y′ = 9x² − 4x + 3 (blue): y′ > 0 everywhere, so y always increases.")}
  ${keyIdea(S`\((uv)'=u'v+uv'\): "derivative of the first times the second, plus the first times the derivative of the second." It extends to three factors: \((uvw)'=u'vw+uv'w+uvw'\).`)}`),

  section("📌 Explore", S`<p>Grow the rectangle with sides \(u=x+1\) and \(v=x^2\) by \(\Delta x\). The two strips are \(v\,\Delta u\) and \(u\,\Delta v\); shrink \(\Delta x\) and watch the corner become negligible.</p>`),

  widget("productRuleLab", { init: { x: 1.5, dx: 0.8 } }),

  section("📌 Using the rule", S`
  <p>Write \(u\), \(v\), \(u'\), \(v'\) before combining. Simplify by factoring common factors when the result will be set equal to zero.</p>
  ${watchOut([
    "(uv)′ ≠ u′v′ — that is the most common mistake.",
    "Keep the brackets: 2x(3x − 2) + 3(x² + 1), then expand.",
    "Factor the answer before solving y′ = 0.",
    "A constant factor needs no product rule: (5f)′ = 5f′.",
    "Check a product-rule answer by expanding first when the product is a polynomial.",
  ])}`),

  examples([
    ["Two polynomial factors", S`Differentiate \(y=(x^2+1)(3x-2)\).`,
      [S`\(u=x^2+1\), \(u'=2x\); \(v=3x-2\), \(v'=3\).`, S`\(y'=2x(3x-2)+3(x^2+1)=9x^2-4x+3\).`],
      S`\(y'=9x^2-4x+3\)`],
    ["A power times a binomial", S`Differentiate \(y=x^3(2x+5)\).`,
      [S`\(3x^2(2x+5)+x^3(2)=6x^3+15x^2+2x^3\).`],
      S`\(y'=8x^3+15x^2\)`],
    ["Check by expanding", S`Differentiate \(f(x)=(x-1)(x^2+x+1)\) with the product rule, then check.`,
      [S`\(f'=(1)(x^2+x+1)+(x-1)(2x+1)=x^2+x+1+2x^2-x-1=3x^2\).`, S`Check: \(f(x)=x^3-1\Rightarrow f'=3x^2\) ✓.`],
      S`\(f'(x)=3x^2\)`],
    ["A tangent line", S`Find the tangent to \(y=(x+2)(x^2-3)\) at \(x=1\).`,
      [S`\(y(1)=3(-2)=-6\).`, S`\(y'=(1)(x^2-3)+(x+2)(2x)\); \(y'(1)=-2+6=4\).`, S`\(y+6=4(x-1)\).`],
      S`\(y=4x-10\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -12, ymax: 6 }, curves: [{ f: (x) => (x + 2) * (x * x - 3), color: "violet" }, { f: (x) => 4 * x - 10, color: "green" }], points: [{ x: 1, y: -6, label: "(1, −6)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Three factors", S`Differentiate \(y=x(x+1)(x-2)\).`,
      [S`\((1)(x+1)(x-2)+x(1)(x-2)+x(x+1)(1)\).`, S`\(=(x^2-x-2)+(x^2-2x)+(x^2+x)=3x^2-2x-2\).`],
      S`\(y'=3x^2-2x-2\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * (x + 1) * (x - 2), color: "violet" }, { f: (x) => 3 * x * x - 2 * x - 2, color: "blue" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("evaluate", S`For \(f(x)=x^2(x+3)\), find \(f'(1)\).`, num(9),
      "u′v + uv′.", [S`\(2x(x+3)+x^2\) at 1: \(8+1\).`], S`\(9\)`),
    q("evaluate", S`For \(y=(2x+1)(x-4)\), find \(y'(2)\).`, num(1),
      "2(x − 4) + (2x + 1).", [S`\(-4+5\).`], S`\(1\)`),
    q("differentiate", S`Find \(\dfrac{d}{dx}\left[x^2(x^3-1)\right]\).`, expr("5*x^4-2*x"),
      "Product rule or expand.", [S`\(2x(x^3-1)+3x^4\).`], S`\(5x^4-2x\)`),
    q("slope", S`Find the slope of \(y=(x+1)(x-1)\) at \(x=3\).`, num(6),
      "Product rule gives 2x.", [S`\((x-1)+(x+1)=2x\).`], S`\(6\)`),
    q("rule", S`Which is the product rule?`, choice([S`\((uv)'=u'v+uv'\)`, S`\((uv)'=u'v'\)`, S`\((uv)'=u'v-uv'\)`, S`\((uv)'=\frac{u'}{v'}\)`], 0),
      "Area model.", ["Two strips."], S`\(u'v+uv'\)`),
  ]),

  ...hard([
    ["Revenue changing over time", S`A product sells for $8, rising $0.50 per month, while monthly sales are 1200 units, falling by 40 units per month. How fast is revenue changing?`,
      [S`\(R=pq\Rightarrow R'=p'q+pq'\).`, S`\(R'=(0.5)(1200)+(8)(-40)=600-320\).`],
      S`revenue rises at $280 per month`],
    ["Horizontal tangents", S`Find the x-values where \(f(x)=(x^2-4)(x+1)\) has horizontal tangents.`,
      [S`\(f'=2x(x+1)+(x^2-4)=3x^2+2x-4\).`, S`\(x=\dfrac{-2\pm\sqrt{4+48}}{6}=\dfrac{-1\pm\sqrt{13}}{3}\).`],
      S`\(x\approx0.87\) and \(x\approx-1.54\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -6, ymax: 4 }, curves: [{ f: (x) => (x * x - 4) * (x + 1), color: "violet" }], points: [{ x: (-1 + Math.sqrt(13)) / 3, y: ((((-1 + Math.sqrt(13)) / 3) ** 2) - 4) * ((-1 + Math.sqrt(13)) / 3 + 1), label: "x ≈ 0.87", color: "red" }, { x: (-1 - Math.sqrt(13)) / 3, y: ((((-1 - Math.sqrt(13)) / 3) ** 2) - 4) * ((-1 - Math.sqrt(13)) / 3 + 1), label: "x ≈ −1.54", color: "red" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("hard", S`\(f(2)=3\), \(f'(2)=-1\), \(g(2)=4\), \(g'(2)=5\). Find \((fg)'(2)\).`, num(11),
      "f′g + fg′.", [S`\((-1)(4)+(3)(5)\).`], S`\(11\)`),
    q("hard", S`Find \(\dfrac{d}{dx}\left[x^2\sqrt x\right]\) at \(x=4\).`, num(20),
      "x^(5/2).", [S`\(\frac52x^{3/2}=\frac52\cdot8\).`], S`\(20\)`),
    q("hard", S`Where is the tangent to \(y=(3x-1)(2x+5)\) horizontal? (4 decimals)`, num(-1.0833, 0.0005),
      "y′ = 12x + 13.", [S`\(x=-\frac{13}{12}\).`], S`\(-1.0833\)`),
  ]),

  wrapUp({
    qas: [
      ["Why isn't (uv)′ = u′v′?", "Try u = v = x: (x²)′ = 2x, but u′v′ = 1. The area model shows the true change: two strips, u′v and uv′."],
      ["When should I expand instead?", "For short polynomial products either way works; for roots, high powers or many factors, the product rule is faster."],
      ["Does the order matter?", "No: u′v + uv′ = v′u + vu′. Pick whichever labelling is clearer."],
      ["How do I handle three factors?", "Differentiate one factor at a time, keeping the other two: u′vw + uv′w + uvw′."],
      ["Where does it show up in applications?", "Any quantity that is a product of two changing quantities: revenue = price × quantity, area = length × width, mass = density × volume."],
    ],
    summary: [
      "(uv)′ = u′v + uv′.",
      "(uvw)′ = u′vw + uv′w + uvw′.",
      "Factor before solving y′ = 0.",
      "Products of changing quantities change by both effects.",
    ],
    next: "2.3 uses derivatives for velocity and acceleration.",
  }),
];
