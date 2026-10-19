// MCV4U 4.2 — Derivatives of the Sine and Cosine Functions: (sin x)′ = cos x, (cos x)′ = −sin x, the four-step cycle,
// combining with the sum, product and quotient rules, the derivative of tan x, tangent lines and horizontal tangents
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.2 Derivatives of the Sine and Cosine Functions";
export const ID = "4777ea03-a457-4ffb-b2df-d348a36f92b4";

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Derivatives of the Sine and Cosine Functions",
    overview: S`In 4.1 the slopes of the sine curve traced out the cosine curve. Stated exactly, with \(x\) in radians: \(\dfrac{d}{dx}\sin x=\cos x\) and \(\dfrac{d}{dx}\cos x=-\sin x\). Differentiating again and again cycles through four functions — \(\sin x\to\cos x\to-\sin x\to-\cos x\to\sin x\) — so every fourth derivative returns to where it started. Combined with the sum, product and quotient rules, these two facts give the derivatives of many new functions, including \(\tan x\).`,
    goals: [
      "state and use the derivatives of sin x and cos x;",
      "find higher derivatives using the four-step cycle;",
      "differentiate products, quotients and sums involving sin x and cos x;",
      "derive the derivative of tan x;",
      "find tangent lines and horizontal tangents of trigonometric functions.",
    ],
    curriculum: "A2.4 (determine the derivatives of f(x) = sin x and f(x) = cos x), A3.3 (use the product and quotient rules with these functions)",
    prior: [
      [S`Slope of \(y=\sin x\) at \(x=0\)?`, S`\(1\).`],
      [S`\((uv)'\)?`, S`\(u'v+uv'\).`],
      [S`\(\cos\frac\pi3\) and \(\sin\frac\pi3\)?`, S`\(\frac12\) and \(\frac{\sqrt3}{2}\).`],
    ],
    words: [
      ["Derivative of sine", "\\(\\frac{d}{dx}\\sin x=\\cos x\\)", "x in radians"],
      ["Derivative of cosine", "\\(\\frac{d}{dx}\\cos x=-\\sin x\\)", "note the minus"],
      ["Derivative cycle", "sin → cos → −sin → −cos → sin", "period 4"],
      ["Derivative of tangent", "\\(\\frac{d}{dx}\\tan x=\\sec^2x\\)", "from the quotient rule"],
    ],
  }),

  section("📌 The two rules and the cycle", S`
  ${table(["n", "0", "1", "2", "3", "4"], [
    ["\\(\\frac{d^n}{dx^n}\\sin x\\)", "\\(\\sin x\\)", "\\(\\cos x\\)", "\\(-\\sin x\\)", "\\(-\\cos x\\)", "\\(\\sin x\\)"],
    ["\\(\\frac{d^n}{dx^n}\\cos x\\)", "\\(\\cos x\\)", "\\(-\\sin x\\)", "\\(-\\cos x\\)", "\\(\\sin x\\)", "\\(\\cos x\\)"],
  ])}
  ${plane({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.cos, color: "violet" }, { f: (x) => -Math.sin(x), color: "blue" }], step: { x: 1, y: 0.5 } }, "y = cos x (violet) and its derivative y = −sin x (blue): where cosine falls, −sin x is negative.")}
  ${keyIdea(S`\(\dfrac{d}{dx}\sin x=\cos x\), \(\dfrac{d}{dx}\cos x=-\sin x\) (radians). For higher derivatives, divide \(n\) by 4: the remainder tells you where you are in the cycle.`)}`),

  section("📌 Explore", S`<p>Choose sine or cosine and the number of derivatives \(n\). The grey curve is the original function; the coloured curve is its \(n\)-th derivative. Set \(n=4\) and \(n=8\): what do you notice?</p>`),

  widget("derivativeCycle", { init: { start: 1, n: 1, x: 1 } }),

  section("📌 Combining with the other rules", S`
  <p>Sine and cosine behave like any other differentiable functions: constants come along, sums split, products need the product rule and quotients the quotient rule. Simplify with identities such as \(\sin^2x+\cos^2x=1\).</p>
  ${watchOut([
    "(cos x)′ = −sin x: the minus sign is the most common slip.",
    "Radians only — these rules are false in degrees.",
    "(x sin x)′ needs the product rule: sin x + x cos x, not cos x.",
    "sin² x means (sin x)²; its derivative uses the chain or product rule (next lesson).",
    "Evaluate trig values exactly where you can: cos(π/3) = ½.",
  ])}`),

  examples([
    ["A sum", S`Differentiate \(y=3\sin x-2\cos x\).`,
      [S`\(y'=3\cos x-2(-\sin x)\).`],
      S`\(y'=3\cos x+2\sin x\)`],
    ["A tangent line", S`Find the tangent to \(y=\sin x\) at \(x=\frac\pi3\).`,
      [S`Point \(\left(\frac\pi3,\frac{\sqrt3}2\right)\); slope \(\cos\frac\pi3=\frac12\).`, S`\(y-\frac{\sqrt3}2=\frac12\left(x-\frac\pi3\right)\).`],
      S`\(y=\frac12x+\frac{\sqrt3}{2}-\frac{\pi}{6}\approx0.5x+0.342\)`,
      plane({ view: { xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 1.6 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => 0.5 * x + Math.sqrt(3) / 2 - PI / 6, color: "green" }], points: [{ x: PI / 3, y: Math.sqrt(3) / 2, label: "(π/3, 0.87)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["A product", S`Differentiate \(y=x^2\sin x\).`,
      [S`Product rule: \(2x\cdot\sin x+x^2\cdot\cos x\).`],
      S`\(y'=2x\sin x+x^2\cos x\)`],
    ["The derivative of tan x", S`Use the quotient rule on \(\tan x=\frac{\sin x}{\cos x}\).`,
      [S`\(\frac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{\cos^2x}=\frac{\cos^2x+\sin^2x}{\cos^2x}\).`, S`\(=\frac1{\cos^2x}=\sec^2x\).`],
      S`\(\frac{d}{dx}\tan x=\sec^2x\), always positive: tan x increases on every branch`,
      plane({ view: { xmin: -4.6, xmax: 4.6, ymin: -4, ymax: 4 }, curves: [{ f: Math.tan, a: -4.6, b: -PI / 2 - 0.05, color: "violet" }, { f: Math.tan, a: -PI / 2 + 0.05, b: PI / 2 - 0.05, color: "violet" }, { f: Math.tan, a: PI / 2 + 0.05, b: 4.6, color: "violet" }], vlines: [{ x: -PI / 2, color: "red", dash: true }, { x: PI / 2, color: "red", dash: true }], step: { x: 1, y: 1 } })],
    ["A high derivative", S`Find \(\dfrac{d^{10}}{dx^{10}}\cos x\).`,
      [S`\(10=4\cdot2+2\): two steps into the cycle from \(\cos x\).`, S`\(\cos x\to-\sin x\to-\cos x\).`],
      S`\(-\cos x\)`],
  ]),

  practice([
    q("derivative", S`For \(f(x)=5\cos x\), find \(f'\!\left(\frac\pi2\right)\).`, num(-5),
      "f′ = −5 sin x.", [S`\(-5\sin\frac\pi2\).`], S`\(-5\)`),
    q("evaluate", S`For \(y=\sin x+x\), find \(y'(\pi)\).`, num(0),
      "y′ = cos x + 1.", [S`\(-1+1\).`], S`\(0\)`),
    q("product", S`For \(f(x)=x\cos x\), find \(f'(0)\).`, num(1),
      "cos x − x sin x.", [S`\(1-0\).`], S`\(1\)`),
    q("second", S`For \(y=\sin x\), find \(y''\!\left(\frac\pi6\right)\).`, num(-0.5, 0.0001),
      "y″ = −sin x.", [S`\(-\frac12\).`], S`\(-0.5\)`),
    q("rule", S`Which is \(\frac{d}{dx}\cos x\)?`, choice([S`\(-\sin x\)`, S`\(\sin x\)`, S`\(-\cos x\)`, S`\(\cos x\)`], 0),
      "Cosine falls just after 0.", ["Slope at π/2 is −1."], S`\(-\sin x\)`),
  ]),

  ...hard([
    ["Horizontal tangents", S`Find the points on \(y=x+2\cos x\), \(0\le x\le2\pi\), where the tangent is horizontal.`,
      [S`\(y'=1-2\sin x=0\Rightarrow\sin x=\frac12\).`, S`\(x=\frac\pi6\) or \(\frac{5\pi}6\).`, S`\(y\left(\frac\pi6\right)=\frac\pi6+\sqrt3\approx2.26\); \(y\left(\frac{5\pi}6\right)=\frac{5\pi}6-\sqrt3\approx0.89\).`],
      S`\(\left(\frac\pi6,2.26\right)\) (local max) and \(\left(\frac{5\pi}6,0.89\right)\) (local min)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x + 2 * Math.cos(x), a: 0, b: 2 * PI, color: "violet" }], points: [{ x: PI / 6, y: PI / 6 + Math.sqrt(3), label: "max", color: "red" }, { x: (5 * PI) / 6, y: (5 * PI) / 6 - Math.sqrt(3), label: "min", color: "blue" }], step: { x: 0.5, y: 1 } })],
    ["The derivative of sec x", S`Show that \(\frac{d}{dx}\sec x=\sec x\tan x\), and find the slope of \(y=\sec x\) at \(x=\frac\pi4\).`,
      [S`\(\sec x=\frac1{\cos x}\): quotient rule \(\frac{0\cdot\cos x-1\cdot(-\sin x)}{\cos^2x}=\frac{\sin x}{\cos^2x}=\frac1{\cos x}\cdot\frac{\sin x}{\cos x}\).`, S`At \(\frac\pi4\): \(\sec\frac\pi4\tan\frac\pi4=\sqrt2\cdot1\).`],
      S`\(\sec x\tan x\); slope \(\sqrt2\approx1.414\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: 0, ymax: 4 }, curves: [{ f: (x) => 1 / Math.cos(x), a: -1.3, b: 1.3, color: "violet" }, { f: (x) => Math.SQRT2 + Math.SQRT2 * (x - PI / 4), a: 0.2, b: 1.4, color: "green" }], points: [{ x: PI / 4, y: Math.SQRT2, label: "(π/4, √2)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ], [
    q("hard", S`For \(f(x)=\sin x\cos x\), find \(f'\!\left(\frac\pi4\right)\).`, num(0),
      "cos²x − sin²x.", [S`\(\frac12-\frac12\).`], S`\(0\)`),
    q("hard", S`Find the 27th derivative of \(\sin x\) at \(x=0\).`, num(-1),
      "27 = 4 · 6 + 3: three steps.", [S`\(-\cos0\).`], S`\(-1\)`),
    q("hard", S`For \(g(x)=\dfrac{\sin x}{x}\), find \(g'(\pi)\) (4 decimals).`, num(-0.3183, 0.0005),
      "(x cos x − sin x)/x².", [S`\(\frac{-\pi-0}{\pi^2}=-\frac1\pi\).`], S`\(-0.3183\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is there a minus sign for cosine?", "Just after x = 0 the cosine curve starts falling from its peak, so its slopes are negative there — exactly −sin x."],
      ["Do these rules work in degrees?", "No. In degrees every derivative picks up a factor π/180. Calculus with trig always uses radians."],
      ["How do I find a 50th derivative?", "50 = 4 · 12 + 2, so it is the same as the 2nd derivative."],
      ["Why is (tan x)′ always positive?", "sec² x = 1/cos² x is a square, so tan x increases on each branch between its asymptotes."],
      ["What about sin(3x) or sin² x?", "Those are composite functions — the chain rule, in 4.3."],
    ],
    summary: [
      "(sin x)′ = cos x; (cos x)′ = −sin x.",
      "The cycle repeats every 4 derivatives.",
      "(tan x)′ = sec² x.",
      "Product and quotient rules apply as usual.",
    ],
    next: "4.3 uses the chain rule for sin(kx), cos² x and more.",
  }),
];
