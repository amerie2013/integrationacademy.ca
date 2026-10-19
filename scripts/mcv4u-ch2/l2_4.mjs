// MCV4U 2.4 — The Chain Rule: composite functions, dy/dx = dy/du · du/dx, power of a function, roots and reciprocals,
// tangent lines, and combining the chain rule with the product rule
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "2.4 The Chain Rule";
export const ID = "a2b0cded-b983-4900-937b-637840fc19ce";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⛓️",
    title: "The Chain Rule",
    overview: S`Many functions are built by putting one function inside another: \(y=(3x^2-1)^4\) is "the fourth power of \(3x^2-1\)". For such a <strong>composite function</strong> \(y=f(g(x))\), rates multiply: if \(y\) changes 4 times as fast as \(u\), and \(u\) changes 6 times as fast as \(x\), then \(y\) changes 24 times as fast as \(x\). This is the <strong>chain rule</strong>: \(\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}\), or \((f(g(x)))'=f'(g(x))\,g'(x)\) — differentiate the outside, keep the inside, then multiply by the derivative of the inside.`,
    goals: [
      "identify the inner and outer functions of a composite function;",
      "use the chain rule in Leibniz and function notation;",
      "differentiate powers, roots and reciprocals of functions;",
      "find tangent lines to composite functions;",
      "combine the chain rule with the product rule.",
    ],
    curriculum: "A3.4 (verify the chain rule by developing patterns and use it to determine derivatives of composite functions)",
    prior: [
      [S`If \(f(x)=x^2\) and \(g(x)=3x-1\), what is \(f(g(x))\)?`, S`\((3x-1)^2\).`],
      [S`Write \(\sqrt{x^2+1}\) as a power.`, S`\((x^2+1)^{1/2}\).`],
      [S`Derivative of \(u^4\) with respect to \(u\)?`, S`\(4u^3\).`],
    ],
    words: [
      ["Composite function", "\\(f(g(x))\\): g inside, f outside", ""],
      ["Inner function", "the 'inside' expression \\(u=g(x)\\)", ""],
      ["Chain rule", "\\(\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}\\)", ""],
      ["Power of a function", "\\(\\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)\\)", ""],
    ],
  }),

  section("📌 Outside, inside, multiply", S`
  ${table(["Function", "Outer", "Inner u", "Derivative"], [
    ["\\((3x^2-1)^4\\)", "\\(u^4\\)", "\\(3x^2-1\\)", "\\(4(3x^2-1)^3\\cdot6x\\)"],
    ["\\(\\sqrt{2x+5}\\)", "\\(u^{1/2}\\)", "\\(2x+5\\)", "\\(\\tfrac12(2x+5)^{-1/2}\\cdot2\\)"],
    ["\\(\\dfrac1{x^2+1}\\)", "\\(u^{-1}\\)", "\\(x^2+1\\)", "\\(-(x^2+1)^{-2}\\cdot2x\\)"],
  ])}
  ${plane({ view: { xmin: -1.8, xmax: 1.8, ymin: -1, ymax: 12 }, curves: [{ f: (x) => (x * x + 1) ** 2, color: "violet" }, { f: (x) => 4 * x * (x * x + 1), color: "blue" }], step: { x: 0.5, y: 2 } }, "y = (x² + 1)² (violet) and y′ = 2(x² + 1)·2x (blue): one horizontal tangent, at x = 0.")}
  ${keyIdea(S`\(\dfrac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)\). The most common case is the power of a function: \(\dfrac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}\,g'(x)\).`)}`),

  section("📌 Explore", S`<p>Choose the inner function and the outer power. At the chosen \(x\), the outer rate \(\frac{dy}{du}\) and the inner rate \(\frac{du}{dx}\) multiply to give the slope of the green tangent.</p>`),

  widget("chainRuleLab", { init: { inner: "lin", n: 2, x: 0.5 } }),

  section("📌 Avoiding the usual errors", S`
  <p>Write \(u\) for the inside expression. After differentiating the outside, the inside stays exactly as it was; the factor \(u'\) goes on the end.</p>
  ${watchOut([
    "Don't forget the inner derivative: d/dx (2x − 1)⁵ = 5(2x − 1)⁴ · 2, not 5(2x − 1)⁴.",
    "Don't differentiate the inside inside the bracket: keep (3x² − 1) unchanged in the outer derivative.",
    "Rewrite roots and reciprocals as powers first.",
    "For a product of composites, use the product rule AND the chain rule.",
    "Factor common powers when simplifying: 2x(3x + 1)³[...].",
  ])}`),

  examples([
    ["Power of a polynomial", S`Differentiate \(y=(3x^2-1)^4\).`,
      [S`Outer \(u^4\), inner \(u=3x^2-1\), \(u'=6x\).`, S`\(y'=4(3x^2-1)^3\cdot6x\).`],
      S`\(y'=24x(3x^2-1)^3\)`],
    ["A root", S`Differentiate \(y=\sqrt{2x+5}\).`,
      [S`\(y=(2x+5)^{1/2}\Rightarrow y'=\tfrac12(2x+5)^{-1/2}\cdot2\).`],
      S`\(y'=\dfrac1{\sqrt{2x+5}}\)`],
    ["Leibniz notation", S`\(y=u^3\) and \(u=2x+1\). Find \(\dfrac{dy}{dx}\).`,
      [S`\(\frac{dy}{du}=3u^2\), \(\frac{du}{dx}=2\).`, S`\(\frac{dy}{dx}=3u^2\cdot2=6(2x+1)^2\).`],
      S`\(6(2x+1)^2\)`],
    ["Function notation", S`\(f(x)=x^2+1\) and \(g(x)=3x-2\). Differentiate \(h(x)=f(g(x))\).`,
      [S`\(f'(x)=2x\), \(g'(x)=3\).`, S`\(h'(x)=f'(g(x))\,g'(x)=2(3x-2)\cdot3\).`],
      S`\(h'(x)=6(3x-2)=18x-12\)`],
    ["A tangent line", S`Find the tangent to \(y=(x^2-3)^3\) at \(x=2\).`,
      [S`\(y(2)=1^3=1\).`, S`\(y'=3(x^2-3)^2\cdot2x\); \(y'(2)=3(1)(4)=12\).`, S`\(y-1=12(x-2)\).`],
      S`\(y=12x-23\)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -30, ymax: 20 }, curves: [{ f: (x) => (x * x - 3) ** 3, color: "violet" }, { f: (x) => 12 * x - 23, color: "green" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "red" }], step: { x: 0.5, y: 5 } })],
  ]),

  practice([
    q("evaluate", S`For \(y=(x+5)^3\), find \(y'\) at \(x=-4\).`, num(3),
      "3(x + 5)² · 1.", [S`\(3(1)^2\).`], S`\(3\)`),
    q("differentiate", S`Find \(\dfrac{d}{dx}(2x-1)^5\).`, expr("10*(2*x-1)^4"),
      "Don't forget the inner 2.", [S`\(5(2x-1)^4\cdot2\).`], S`\(10(2x-1)^4\)`),
    q("root", S`For \(f(x)=\sqrt{x+5}\), find \(f'(4)\) (4 decimals).`, num(0.1667, 0.0005),
      "½(x + 5)^(−½).", [S`\(\frac1{2\cdot3}\).`], S`\(\tfrac16\)`),
    q("reciprocal", S`For \(y=\dfrac1{x^2+1}\), find \(y'(1)\).`, num(-0.5, 0.0001),
      "−(x² + 1)⁻² · 2x.", [S`\(-\frac{2}{4}\).`], S`\(-\tfrac12\)`),
    q("rule", S`Which is the chain rule?`, choice([S`\((f(g(x)))'=f'(g(x))\,g'(x)\)`, S`\((f(g(x)))'=f'(x)\,g'(x)\)`, S`\((f(g(x)))'=f'(g'(x))\)`, S`\((f(g(x)))'=f(g'(x))\)`], 0),
      "Outside at the inside, times the inside's derivative.", ["Outer derivative evaluated at g(x)."], S`\(f'(g(x))g'(x)\)`),
  ]),

  ...hard([
    ["Product and chain together", S`Differentiate \(y=x^2(3x+1)^4\) and factor completely.`,
      [S`Product rule: \(2x(3x+1)^4+x^2\cdot4(3x+1)^3\cdot3\).`, S`Factor \(2x(3x+1)^3\): \(2x(3x+1)^3[(3x+1)+6x]\).`],
      S`\(y'=2x(3x+1)^3(9x+1)\)`,
      plane({ view: { xmin: -0.8, xmax: 0.4, ymin: -0.02, ymax: 0.1 }, curves: [{ f: (x) => x * x * (3 * x + 1) ** 4, color: "violet" }], points: [{ x: 0, y: 0, label: "x = 0", color: "red" }, { x: -1 / 3, y: 0, label: "x = −⅓", color: "red" }, { x: -1 / 9, y: (1 / 81) * (2 / 3) ** 4, label: "x = −1/9", color: "red" }], step: { x: 0.2, y: 0.02 } })],
    ["Chain rule from tables, and a balloon", S`(a) \(f(2)=3\), \(f'(2)=5\), \(g(3)=1\), \(g'(3)=-2\). Find \((g\circ f)'(2)\). (b) A balloon's radius grows as \(r(t)=2+0.5t\) cm. Find \(\frac{dV}{dt}\) when \(t=2\), where \(V=\frac43\pi r^3\).`,
      [S`(a) \(g'(f(2))\,f'(2)=g'(3)\cdot5=-10\).`, S`(b) \(\frac{dV}{dt}=4\pi r^2\cdot\frac{dr}{dt}\); at \(t=2\), \(r=3\): \(4\pi(9)(0.5)=18\pi\approx56.55\) cm³/s.`],
      S`(a) \(-10\); (b) \(18\pi\approx56.55\) cm³ per s`],
  ], [
    q("hard", S`How many horizontal tangents does \(y=(x^2+1)^3\) have?`, num(1),
      "y′ = 6x(x² + 1)².", [S`Only \(x=0\).`], S`\(1\)`),
    q("hard", S`Find \(\dfrac{d}{dx}\sqrt{x^3+1}\) at \(x=2\).`, num(2),
      "3x²/(2√(x³ + 1)).", [S`\(\frac{12}{2\cdot3}\).`], S`\(2\)`),
    q("hard", S`\(g(1)=2\), \(g'(1)=3\), \(f'(2)=4\). Find \((f\circ g)'(1)\).`, num(12),
      "f′(g(1)) g′(1).", [S`\(4\cdot3\).`], S`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do the rates multiply?", "If y changes k times as fast as u, and u changes m times as fast as x, then y changes km times as fast as x."],
      ["How do I spot the inner function?", "Ask what you'd compute first: in (3x² − 1)⁴ you compute 3x² − 1 first, so that's the inside."],
      ["Is the power rule a special case?", "Yes: with u = x, du/dx = 1, so d/dx uⁿ = nuⁿ⁻¹."],
      ["What if there are three layers?", "Keep multiplying: d/dx f(g(h(x))) = f′(g(h(x))) · g′(h(x)) · h′(x)."],
      ["Why factor the answer?", "Factored derivatives make it easy to find where y′ = 0 (horizontal tangents)."],
    ],
    summary: [
      "dy/dx = dy/du · du/dx.",
      "[g(x)]ⁿ → n[g(x)]ⁿ⁻¹ g′(x).",
      "Roots, reciprocals → powers first.",
      "Products of composites: product + chain.",
    ],
    next: "2.5 differentiates quotients.",
  }),
];
