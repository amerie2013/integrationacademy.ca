// MCV4U 2.2 — The Product Rule: (uv)′ = u′v + uv′, why it holds (area model), products of two and three factors,
// tangent lines, horizontal tangents, and rates of change of a product (revenue = price × quantity)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
      [S`<b>Product rule.</b> If \(y=uv\), then \(y'=u'v+uv'\): "derivative of the first times the second, plus the first times the derivative of the second." It is <em>not</em> \(u'v'\).`,
        S`<b>Name the parts.</b> \(u=x^2+1\), \(u'=2x\); \(v=3x-2\), \(v'=3\).`,
        S`<b>Apply.</b> \(y'=2x(3x-2)+(x^2+1)(3)=6x^2-4x+3x^2+3\).`,
        S`<b>Simplify.</b> \(y'=9x^2-4x+3\).`,
        S`<b>Check by expanding first.</b> \(y=3x^3-2x^2+3x-2\), so \(y'=9x^2-4x+3\) ✓. Note \(u'v'=6x\) would be wrong.`],
      S`\(y'=9x^2-4x+3\)`,
      plane({ view: { xmin: -1.5, xmax: 2, ymin: -8, ymax: 12 }, curves: [{ f: (x) => (x * x + 1) * (3 * x - 2), color: "violet", label: "y = (x² + 1)(3x − 2)" }, { f: (x) => 9 * x * x - 4 * x + 3, color: "blue", label: "y′ = 9x² − 4x + 3" }], step: { x: 0.5, y: 2 } }, "y′ is always positive (its discriminant 16 − 108 is negative), so y always rises")],
    ["A power times a binomial", S`Differentiate \(y=x^3(2x+5)\).`,
      [S`<b>Parts.</b> \(u=x^3\), \(u'=3x^2\); \(v=2x+5\), \(v'=2\).`,
        S`<b>Product rule.</b> \(y'=3x^2(2x+5)+x^3(2)=6x^3+15x^2+2x^3\).`,
        S`<b>Collect like terms.</b> \(y'=8x^3+15x^2\), which factors as \(x^2(8x+15)\).`,
        S`<b>Use the factored form.</b> \(y'=0\) at \(x=0\) and \(x=-\tfrac{15}{8}\): the graph has horizontal tangents there.`,
        S`<b>Check.</b> Expanding first: \(y=2x^4+5x^3\Rightarrow y'=8x^3+15x^2\) ✓`],
      S`\(y'=8x^3+15x^2\)`,
      plane({ view: { xmin: -3, xmax: 1, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 * (2 * x + 5), color: "violet", label: "y = x³(2x + 5)" }], points: [{ x: -15 / 8, y: (-15 / 8) ** 3 * (2 * (-15 / 8) + 5), label: "flat at x = −15/8", color: "red" }, { x: 0, y: 0, label: "flat at 0", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Check by expanding", S`Differentiate \(f(x)=(x-1)(x^2+x+1)\) with the product rule, then check.`,
      [S`<b>Parts.</b> \(u=x-1\), \(u'=1\); \(v=x^2+x+1\), \(v'=2x+1\).`,
        S`<b>Product rule.</b> \(f'=(1)(x^2+x+1)+(x-1)(2x+1)\).`,
        S`<b>Expand the second product.</b> \((x-1)(2x+1)=2x^2+x-2x-1=2x^2-x-1\).`,
        S`<b>Add.</b> \(x^2+x+1+2x^2-x-1=3x^2\).`,
        S`<b>Check.</b> \((x-1)(x^2+x+1)=x^3-1\) (difference of cubes), whose derivative is \(3x^2\) ✓. Both methods must agree, because they differentiate the same function.`],
      S`\(f'(x)=3x^2\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 1, color: "violet", label: "f(x) = x³ − 1" }, { f: (x) => 3 * x * x, color: "blue", label: "f′(x) = 3x²" }], points: [{ x: 0, y: -1, label: "flat at (0, −1)", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["A tangent line", S`Find the tangent to \(y=(x+2)(x^2-3)\) at \(x=1\).`,
      [S`<b>Point.</b> \(y(1)=(3)(1-3)=-6\): the point \((1,-6)\).`,
        S`<b>Derivative.</b> \(u=x+2\), \(u'=1\); \(v=x^2-3\), \(v'=2x\). So \(y'=(1)(x^2-3)+(x+2)(2x)\).`,
        S`<b>Slope at 1.</b> \(y'(1)=(1-3)+(3)(2)=-2+6=4\).`,
        S`<b>Equation.</b> \(y-(-6)=4(x-1)\Rightarrow y=4x-10\).`,
        S`<b>Check.</b> \(y=x^3+2x^2-3x-6\), so \(y'=3x^2+4x-3\) and \(y'(1)=4\) ✓. The line passes through \((1,-6)\): \(4-10=-6\) ✓`],
      S`\(y=4x-10\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -12, ymax: 6 }, curves: [{ f: (x) => (x + 2) * (x * x - 3), color: "violet", label: "y = (x + 2)(x² − 3)" }, { f: (x) => 4 * x - 10, color: "green", label: "y = 4x − 10" }], points: [{ x: 1, y: -6, label: "(1, −6)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Three factors", S`Differentiate \(y=x(x+1)(x-2)\).`,
      [S`<b>Extended product rule.</b> For \(y=uvw\): \(y'=u'vw+uv'w+uvw'\). Differentiate one factor at a time, keeping the other two.`,
        S`<b>Parts.</b> \(u=x\), \(v=x+1\), \(w=x-2\); each has derivative 1.`,
        S`<b>Apply.</b> \(y'=(1)(x+1)(x-2)+x(1)(x-2)+x(x+1)(1)\).`,
        S`<b>Expand and add.</b> \((x^2-x-2)+(x^2-2x)+(x^2+x)=3x^2-2x-2\).`,
        S`<b>Check.</b> \(y=x^3-x^2-2x\), so \(y'=3x^2-2x-2\) ✓. ${tv(["\\(x\\)", "−1", "0", "1", "2"], ["\\(y'(x)\\)", "3", "−2", "−1", "6"])} The slope changes sign between \(-1\) and \(0\) and between \(1\) and \(2\), where the graph turns.`],
      S`\(y'=3x^2-2x-2\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * (x + 1) * (x - 2), color: "violet", label: "y = x(x + 1)(x − 2)" }, { f: (x) => 3 * x * x - 2 * x - 2, color: "blue", label: "y′ = 3x² − 2x − 2" }], step: { x: 0.5, y: 1 } })],
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
