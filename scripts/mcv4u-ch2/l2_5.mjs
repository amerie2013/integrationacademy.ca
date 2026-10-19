// MCV4U 2.5 — Derivatives of Quotients: the quotient rule (u/v)′ = (u′v − uv′)/v², why it follows from the product and
// chain rules, horizontal tangents of rational functions, tangent lines, and optimizing a rational model
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane, rat } from "./lib.mjs";

export const TITLE = "2.5 Derivatives of Quotients";
export const ID = "60dcb0bb-06ff-4f35-884c-d558ff79a342";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➗",
    title: "Derivatives of Quotients",
    overview: S`A rational function such as \(h(x)=\dfrac{2x+1}{x-3}\) is a quotient of two polynomials. Writing it as a product, \(h=u\cdot v^{-1}\), and using the product and chain rules gives the <strong>quotient rule</strong>: \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\). The order in the numerator matters (it has a minus sign), and the denominator is never expanded — it is useful exactly as it is, because the sign of \(v^2\) is always positive.`,
    goals: [
      "derive the quotient rule from the product and chain rules;",
      "differentiate rational functions;",
      "find tangent lines and horizontal tangents of rational functions;",
      "decide when to use the quotient rule and when to rewrite first;",
      "use the derivative of a rational model in context.",
    ],
    curriculum: "A3.3–A3.4 (determine derivatives of rational functions, using the rules in combination)",
    prior: [
      [S`Write \(\dfrac1{x-3}\) as a power.`, S`\((x-3)^{-1}\).`],
      [S`Derivative of \((x-3)^{-1}\)?`, S`\(-(x-3)^{-2}\).`],
      [S`Where is \(\dfrac{2x+1}{x-3}\) not defined?`, S`At \(x=3\).`],
    ],
    words: [
      ["Quotient rule", "\\(\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}\\)", ""],
      ["Rational function", "a quotient of two polynomials", "\\(\\frac{x^2}{x+1}\\)"],
      ["Horizontal tangent", "a point where \\(f'(x)=0\\)", "numerator of f′ is 0"],
      ["Restriction", "a value where the denominator is 0", "excluded from the domain"],
    ],
  }),

  section("📌 Where the rule comes from", S`
  ${table(["Step", "Work"], [
    ["Rewrite", "\\(\\frac uv=u\\,v^{-1}\\)"],
    ["Product rule", "\\(u'v^{-1}+u\\cdot(v^{-1})'\\)"],
    ["Chain rule", "\\((v^{-1})'=-v^{-2}v'\\)"],
    ["Common denominator", "\\(\\frac{u'v}{v^2}-\\frac{uv'}{v^2}=\\frac{u'v-uv'}{v^2}\\)"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 9, ymin: -10, ymax: 14 }, curves: [...rat((x) => (2 * x + 1) / (x - 3), [3], { xmin: -3, xmax: 9 }), ...rat((x) => -7 / (x - 3) ** 2, [3], { xmin: -3, xmax: 9 }, "blue")], vlines: [{ x: 3, color: "red", dash: true }], step: { x: 1, y: 2 } }, "h(x) = (2x + 1)/(x − 3) (violet) and h′(x) = −7/(x − 3)² (blue): h′ < 0 on both sides of x = 3, so h decreases on each piece.")}
  ${keyIdea(S`\(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\), where \(v\neq0\). Memory aid: "low d-high minus high d-low, over low squared."`)}`),

  section("📌 Explore", S`<p>The explorer uses \(y=\dfrac{ax+b}{x^2+1}\). Set \(a\) and \(b\), then move the point: the panel shows \(u'v\), \(uv'\) and \(v^2\) at that \(x\), and the green tangent's slope is \((u'v-uv')/v^2\). Find the two places where the tangent is horizontal.</p>`),

  widget("quotientLab", { init: { a: 2, b: 1, x: 1 } }),

  section("📌 Using the rule well", S`
  <p>Label \(u\), \(u'\), \(v\), \(v'\) first. To find horizontal tangents, set only the <em>numerator</em> of the derivative equal to zero, then check that the denominator is not zero there.</p>
  ${watchOut([
    "The order is u′v − uv′, not uv′ − u′v: swapping it changes the sign.",
    "Square the whole denominator: (x − 3)², not x² − 3.",
    "Don't expand the denominator — it is easier to read factored.",
    "If the denominator is a constant (like (x² + 4)/5), just divide: no quotient rule needed.",
    "A monomial denominator (like (x² + 1)/x) can be split: x + x⁻¹ is quicker.",
  ])}`),

  examples([
    ["Linear over linear", S`Differentiate \(h(x)=\dfrac{2x+1}{x-3}\).`,
      [S`\(u=2x+1\), \(u'=2\); \(v=x-3\), \(v'=1\).`, S`\(h'=\dfrac{2(x-3)-(2x+1)(1)}{(x-3)^2}=\dfrac{-7}{(x-3)^2}\).`],
      S`\(h'(x)=-\dfrac{7}{(x-3)^2}\)`],
    ["Quadratic over linear", S`Differentiate \(y=\dfrac{x^2}{x+1}\).`,
      [S`\(y'=\dfrac{2x(x+1)-x^2(1)}{(x+1)^2}=\dfrac{x^2+2x}{(x+1)^2}\).`],
      S`\(y'=\dfrac{x(x+2)}{(x+1)^2}\)`],
    ["Evaluate the slope", S`Find the slope of \(f(x)=\dfrac{x+2}{x-1}\) at \(x=2\).`,
      [S`\(f'(x)=\dfrac{(x-1)-(x+2)}{(x-1)^2}=\dfrac{-3}{(x-1)^2}\).`, S`\(f'(2)=-3\).`],
      S`slope \(-3\)`],
    ["A horizontal tangent", S`Find the tangent to \(y=\dfrac{x}{x^2+1}\) at \(x=1\).`,
      [S`\(y'=\dfrac{(x^2+1)-x(2x)}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}\).`, S`\(y'(1)=0\), \(y(1)=\tfrac12\).`],
      S`\(y=\tfrac12\) (horizontal)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 1 }, curves: [{ f: (x) => x / (x * x + 1), color: "violet" }, { f: () => 0.5, color: "green" }], points: [{ x: 1, y: 0.5, label: "(1, ½)", color: "red" }], step: { x: 1, y: 0.25 } })],
    ["All horizontal tangents", S`Find the points where \(y=\dfrac{x^2+3}{x-1}\) has a horizontal tangent.`,
      [S`\(y'=\dfrac{2x(x-1)-(x^2+3)}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}\).`, S`\(x^2-2x-3=(x-3)(x+1)=0\Rightarrow x=3,\,-1\).`, S`\(y(3)=6\), \(y(-1)=-2\).`],
      S`\((3,6)\) and \((-1,-2)\)`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -12, ymax: 16 }, curves: rat((x) => (x * x + 3) / (x - 1), [1], { xmin: -5, xmax: 7 }), vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: 3, y: 6, label: "(3, 6)", color: "red" }, { x: -1, y: -2, label: "(−1, −2)", color: "red" }], step: { x: 1, y: 4 } })],
  ]),

  practice([
    q("evaluate", S`For \(f(x)=\dfrac{x}{x+1}\), find \(f'(1)\).`, num(0.25, 0.0001),
      "f′ = 1/(x + 1)².", [S`\(\frac{(x+1)-x}{(x+1)^2}=\frac14\).`], S`\(0.25\)`),
    q("differentiate", S`Find \(\dfrac{d}{dx}\,\dfrac{x+2}{x-1}\).`, expr("-3/(x-1)^2"),
      "Low d-high minus high d-low.", [S`\(\frac{(x-1)-(x+2)}{(x-1)^2}\).`], S`\(-\dfrac3{(x-1)^2}\)`),
    q("evaluate", S`For \(y=\dfrac{3x+1}{x+1}\), find \(y'(1)\).`, num(0.5, 0.005),
      "u′v − uv′ = 3(x + 1) − (3x + 1).", [S`\(\frac{2}{(x+1)^2}=\frac24\).`], S`\(0.5\)`),
    q("rule", S`Which is the quotient rule?`, choice([S`\(\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\)`, S`\(\left(\frac uv\right)'=\frac{uv'-u'v}{v^2}\)`, S`\(\left(\frac uv\right)'=\frac{u'}{v'}\)`, S`\(\left(\frac uv\right)'=\frac{u'v+uv'}{v^2}\)`], 0),
      "Low d-high minus high d-low.", ["The u′v term comes first."], S`\(\frac{u'v-uv'}{v^2}\)`),
    q("count", S`How many horizontal tangents does \(y=\dfrac{x^2}{x-2}\) have?`, num(2),
      "Numerator of y′ is x² − 4x.", [S`\(x(x-4)=0\): \(x=0\) and \(x=4\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Minimum average cost", S`Making \(x\) items costs \(C(x)=500+3x^2\) dollars, so the average cost per item is \(A(x)=\dfrac{500+3x^2}{x}\). Find the production level that minimizes the average cost.`,
      [S`\(A'(x)=\dfrac{6x\cdot x-(500+3x^2)}{x^2}=\dfrac{3x^2-500}{x^2}\).`, S`\(A'=0\Rightarrow x^2=\tfrac{500}3\Rightarrow x\approx12.91\).`, S`\(A(12.91)\approx\dfrac{500+500}{12.91}\approx77.46\).`],
      S`about 12.91 items, minimum average cost about $77.46 per item`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 200 }, curves: [{ f: (x) => (500 + 3 * x * x) / x, color: "violet" }], points: [{ x: Math.sqrt(500 / 3), y: 2 * Math.sqrt(1500), label: "(12.91, 77.46)", color: "red" }], step: { x: 5, y: 25 } })],
    ["Drug concentration", S`The concentration of a drug in the blood \(t\) hours after a dose is \(C(t)=\dfrac{10t}{t^2+9}\) mg/L. (a) Find \(C'(1)\). (b) When is the concentration highest?`,
      [S`\(C'(t)=\dfrac{10(t^2+9)-10t(2t)}{(t^2+9)^2}=\dfrac{90-10t^2}{(t^2+9)^2}\).`, S`(a) \(C'(1)=\dfrac{80}{100}=0.8\) mg/L per h.`, S`(b) \(90-10t^2=0\Rightarrow t=3\); \(C(3)=\tfrac{30}{18}\approx1.67\) mg/L.`],
      S`(a) 0.8 mg/L per hour; (b) at \(t=3\) h, about 1.67 mg/L`,
      plane({ view: { xmin: 0, xmax: 15, ymin: 0, ymax: 2 }, curves: [{ f: (t) => (10 * t) / (t * t + 9), color: "violet" }], points: [{ x: 3, y: 5 / 3, label: "(3, 1.67)", color: "red" }], step: { x: 1, y: 0.5 } })],
  ], [
    q("hard", S`For \(f(x)=\dfrac{1-x}{x^2+3}\), find \(f'(2)\) (4 decimals).`, num(-0.0612, 0.0005),
      "u′v − uv′ = −(x² + 3) − (1 − x)(2x) = x² − 2x − 3.", [S`At 2: numerator \(4-4-3=-3\), denominator \(7^2=49\).`, S`\(f'(2)=-\frac{3}{49}\).`], S`\(-0.0612\)`),
    q("hard", S`\(f(1)=2\), \(f'(1)=3\), \(g(1)=4\), \(g'(1)=-1\). Find \(\left(\dfrac fg\right)'(1)\).`, num(0.875, 0.0001),
      "(f′g − fg′)/g².", [S`\(\frac{12+2}{16}\).`], S`\(0.875\)`),
    q("hard", S`At what positive \(x\) is the tangent to \(y=\dfrac{x^2+36}{x}\) horizontal?`, num(6),
      "y′ = (x² − 36)/x².", [S`\(x^2=36\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is there a minus sign?", "The quotient is u·v⁻¹; differentiating v⁻¹ with the chain rule gives −v⁻²v′, which produces the minus."],
      ["Does the order in the numerator matter?", "Yes. u′v − uv′ and uv′ − u′v differ by a sign, which flips increasing and decreasing."],
      ["Should I expand v²?", "No. Leaving it as (x − 3)² shows at a glance that it is positive and where it is zero."],
      ["When can I avoid the quotient rule?", "When the denominator is a constant or a single power of x: split or rewrite with negative exponents."],
      ["How do I find horizontal tangents?", "Set the numerator of f′ to zero and make sure the denominator is not zero there."],
    ],
    summary: [
      "(u/v)′ = (u′v − uv′)/v².",
      "Keep v² factored.",
      "Horizontal tangents: numerator of f′ = 0.",
      "Rewrite first when the denominator is simple.",
    ],
    next: "2.6 uses derivatives as rates of change in business and science.",
  }),
];
