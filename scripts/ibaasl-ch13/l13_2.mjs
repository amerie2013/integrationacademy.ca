// IB AA SL 13.2 — Derivatives of Trigonometric Functions: derivatives of sin x, cos x and tan x, with the chain, product and quotient rules, second derivatives
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "13.2 Derivatives of Trigonometric Functions";
export const ID = "981191ee-a4e1-49ab-8b3c-8019b66dfaad";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Derivatives of Trigonometric Functions",
    overview: S`The gradient of \(y=\sin x\) is greatest where the curve crosses the axis going up and zero at the peaks — exactly the pattern of \(\cos x\). With x in radians, \(\frac{d}{dx}\sin x=\cos x\) and \(\frac{d}{dx}\cos x=-\sin x\); the quotient rule then gives \(\frac{d}{dx}\tan x=\frac{1}{\cos^2x}\). Combined with the chain, product and quotient rules, these differentiate any trigonometric expression in the course.`,
    goals: [
      "differentiate sin x, cos x and tan x;",
      S`differentiate \(\sin(ax+b)\), \(\cos^2x\), \(e^{\sin x}\) and similar with the chain rule;`,
      "combine trigonometric derivatives with the product and quotient rules;",
      "find second derivatives of trigonometric functions;",
      "find tangents and stationary points on trigonometric curves.",
    ],
    curriculum: "SL 5.6 (derivatives of sin x, cos x, tan x; chain, product and quotient rules), SL 5.7 (second derivative)",
    prior: [
      [S`State the chain rule.`, S`\(\frac{d}{dx}f(g(x))=f'(g(x))g'(x)\).`],
      [S`Find \(\sin\frac{\pi}{3}\) and \(\cos\frac{\pi}{3}\).`, S`\(\frac{\sqrt3}{2}\) and \(\frac12\).`],
      [S`Write \(2\sin x\cos x\) as a single function.`, S`\(\sin2x\).`],
    ],
    words: [
      ["Radian requirement", "the derivative results hold only for x in radians", ""],
      [S`\(\frac{d}{dx}\sin x\)`, S`\(\cos x\)`, ""],
      [S`\(\frac{d}{dx}\cos x\)`, S`\(-\sin x\)`, ""],
      [S`\(\frac{d}{dx}\tan x\)`, S`\(\frac{1}{\cos^2x}\)`, ""],
      ["Second derivative", S`the derivative of the derivative, \(f''(x)\)`, ""],
    ],
  }),

  section("📌 The three basic derivatives", S`
  <p>The tangent to \(y=\sin x\) is horizontal at \(x=\frac{\pi}{2}\) and \(\frac{3\pi}{2}\), has slope 1 at \(x=0\) and slope −1 at \(x=\pi\). Plotting these slopes reproduces \(y=\cos x\).</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }, { f: Math.cos, color: "green" }], points: [P(PI / 2, 1, "slope 0"), P(PI, 0, "slope −1"), P(PI / 2, 0, "", "green")] }, "y = sin x (violet) and its gradient curve y = cos x (green)")}
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.cos, color: "violet" }, { f: (x) => -Math.sin(x), color: "green" }], points: [P(PI, -1, "slope 0"), P(PI / 2, -1, "", "green")] }, "y = cos x (violet) and its gradient curve y = −sin x (green)")}
  <p>For tangent: \(\frac{d}{dx}\frac{\sin x}{\cos x}=\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2x}=\frac{1}{\cos^2x}\), always positive — tan increases on every branch.</p>
  ${plane({ view: { xmin: -PI / 2, xmax: PI / 2, ymin: -4, ymax: 6 }, step: { x: PI / 4, y: 1 }, curves: [{ f: Math.tan, color: "violet" }, { f: (x) => 1 / Math.cos(x) ** 2, color: "green" }], points: [P(0, 1, "(0, 1)", "green")] }, "y = tan x and its gradient 1/cos²x, never below 1")}
  ${table(["y", "dy/dx", "with chain rule"], [[S`\(\sin x\)`, S`\(\cos x\)`, S`\(\frac{d}{dx}\sin(ax+b)=a\cos(ax+b)\)`], [S`\(\cos x\)`, S`\(-\sin x\)`, S`\(\frac{d}{dx}\cos(ax+b)=-a\sin(ax+b)\)`], [S`\(\tan x\)`, S`\(\frac{1}{\cos^2x}\)`, S`\(\frac{d}{dx}\tan(ax+b)=\frac{a}{\cos^2(ax+b)}\)`]])}
  ${keyIdea("sin → cos → −sin → −cos → sin: each derivative moves one step around this cycle (x in radians).")}`),

  section("📌 Combining with the other rules", S`
  <p>\(\frac{d}{dx}\sin^3x=3\sin^2x\cos x\) (chain rule, outer \(u^3\)). \(\frac{d}{dx}e^{\cos x}=-\sin x\,e^{\cos x}\). \(\frac{d}{dx}(x\cos x)=\cos x-x\sin x\) (product rule).</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -6.5, ymax: 3 }, step: { x: PI / 2, y: 1 }, curves: [{ f: (x) => x * Math.cos(x), color: "violet" }, { f: (x) => Math.cos(x) - x * Math.sin(x), color: "green" }] }, "y = x cos x (violet) and its derivative cos x − x sin x (green)")}
  ${watchOut([
    "Use radians: in degrees the derivative of sin x is (π/180) cos x.",
    S`\(\frac{d}{dx}\cos x=-\sin x\): do not lose the minus sign.`,
    S`\(\sin^2x\) means \((\sin x)^2\): use the chain rule, not \(\cos^2x\).`,
    S`\(\sin3x\) differentiates to \(3\cos3x\), not \(\cos3x\).`,
  ])}`),

  section("📌 Explore", S`<p>Drag the point along sin x or cos x. The green trace of tangent slopes builds the derivative curve.</p>`),

  widget("ibTrigDeriv", { init: [0, 1] }),

  examples([
    ["Level 1 · Basic", S`Differentiate \(y=4\sin x-3\cos x\).`,
      [S`\(4\cos x-3(-\sin x)\).`],
      S`\(4\cos x+3\sin x\)`],
    ["Level 1 · Chain", S`Differentiate \(y=\sin5x\).`,
      [S`Inner derivative 5.`],
      S`\(5\cos5x\)`],
    ["Level 2 · Power of cosine", S`Differentiate \(y=\cos^2x\).`,
      [S`\(2\cos x\cdot(-\sin x)\).`, S`\(=-2\sin x\cos x=-\sin2x\).`],
      S`\(-\sin2x\)`],
    ["Level 2 · Product", S`Differentiate \(y=x^2\cos x\).`,
      [S`\(u=x^2\), \(v=\cos x\).`],
      S`\(2x\cos x-x^2\sin x\)`],
    ["Level 3 · Tangent", S`Find the tangent to \(y=\sin2x\) at \(x=\frac{\pi}{6}\).`,
      [S`\(y=\sin\frac{\pi}{3}=\frac{\sqrt3}{2}\).`, S`\(y'=2\cos2x\); \(y'\left(\frac{\pi}{6}\right)=2\cdot\frac12=1\).`],
      S`\(y=x-\frac{\pi}{6}+\frac{\sqrt3}{2}\)`,
      plane({ view: { xmin: 0, xmax: PI, ymin: -1.5, ymax: 2 }, step: { x: PI / 4, y: 0.5 }, curves: [{ f: (x) => Math.sin(2 * x), color: "violet" }], lines: [{ m: 1, b: Math.sqrt(3) / 2 - PI / 6, color: "amber", dash: true }], points: [P(PI / 6, Math.sqrt(3) / 2, "(π/6, √3/2)")] }, "y = sin 2x and its tangent at x = π/6 (slope 1)")],
  ]),

  practice([
    q("Level 1 · value", S`Find \(\frac{dy}{dx}\) at \(x=0\) for \(y=2\sin x\).`, num(2),
      "2 cos x.", [S`\(2\cos0\).`], S`\(2\)`),
    q("Level 1 · chain", S`Find \(\frac{dy}{dx}\) at \(x=\frac{\pi}{6}\) for \(y=\cos3x\).`, num(-3),
      "−3 sin 3x.", [S`\(-3\sin\frac{\pi}{2}\).`], S`\(-3\)`),
    q("Level 2 · tan", S`The derivative of \(\tan2x\) is:`, choice([S`\(\frac{2}{\cos^22x}\)`, S`\(\frac{1}{\cos^22x}\)`, S`\(2\tan2x\)`, S`\(-\frac{2}{\sin^22x}\)`], 0),
      "Chain rule, inner derivative 2.", [S`\(\frac{2}{\cos^22x}\).`], S`\(\frac{2}{\cos^22x}\)`),
    q("Level 2 · exponential", S`Find \(\frac{dy}{dx}\) at \(x=\frac{\pi}{2}\) for \(y=e^{\cos x}\).`, num(-1),
      "−sin x e^{cos x}.", [S`\(-1\cdot e^0\).`], S`\(-1\)`),
    q("Level 2 · product", S`Find \(\frac{dy}{dx}\) at \(x=\pi\) for \(y=x\sin x\) (3 d.p.).`, num(-PI, 0.001),
      "sin x + x cos x.", [S`\(0+\pi(-1)\).`], S`\(-\pi\approx-3.142\)`),
  ]),

  ...hard([
    ["Stationary points of a trigonometric curve", S`Find the stationary points of \(y=2\sin x+\cos2x\) for \(0\le x\le\pi\).`,
      [S`\(y'=2\cos x-2\sin2x=2\cos x-4\sin x\cos x=2\cos x(1-2\sin x)\).`, S`\(\cos x=0\Rightarrow x=\frac{\pi}{2}\), \(y=1\); \(\sin x=\frac12\Rightarrow x=\frac{\pi}{6},\frac{5\pi}{6}\), \(y=1.5\).`, "Maxima at π/6 and 5π/6, minimum at π/2."],
      S`max \(\left(\frac{\pi}{6},1.5\right)\), \(\left(\frac{5\pi}{6},1.5\right)\); min \(\left(\frac{\pi}{2},1\right)\)`,
      plane({ view: { xmin: 0, xmax: PI, ymin: 0, ymax: 2 }, step: { x: PI / 6, y: 0.5 }, curves: [{ f: (x) => 2 * Math.sin(x) + Math.cos(2 * x), color: "violet" }], points: [P(PI / 6, 1.5, "π/6"), P(PI / 2, 1, "π/2"), P((5 * PI) / 6, 1.5, "5π/6")] }, "y = 2 sin x + cos 2x: two maxima and a minimum")],
    ["A second-derivative identity", S`For \(y=e^x\sin x\), show that \(y''-2y'+2y=0\).`,
      [S`\(y'=e^x\sin x+e^x\cos x\).`, S`\(y''=e^x(\sin x+\cos x)+e^x(\cos x-\sin x)=2e^x\cos x\).`, S`\(2e^x\cos x-2e^x(\sin x+\cos x)+2e^x\sin x=0\).`],
      S`\(y''-2y'+2y=0\) ✓`,
      plane({ view: { xmin: 0, xmax: PI, ymin: -12, ymax: 10 }, step: { x: PI / 4, y: 2 }, curves: [{ f: (x) => Math.exp(x) * Math.sin(x), color: "violet" }, { f: (x) => 2 * Math.exp(x) * Math.cos(x), color: "green" }], points: [P(PI / 2, Math.exp(PI / 2), "inflection", "red")] }, "y = eˣ sin x (violet) and y″ = 2eˣ cos x (green): y″ = 0 at x = π/2")],
  ], [
    q("Level 3 · quotient", S`Find \(\frac{dy}{dx}\) at \(x=0\) for \(y=\frac{\sin x}{1+\cos x}\).`, num(0.5, 0.001),
      "The derivative simplifies to 1/(1 + cos x).", [S`\(\frac{\cos x(1+\cos x)+\sin^2x}{(1+\cos x)^2}=\frac{1}{1+\cos x}\).`], S`\(0.5\)`),
    q("Level 3 · velocity", S`A particle has displacement \(x=5\cos2t\). Find its velocity at \(t=\frac{\pi}{4}\).`, num(-10),
      "v = −10 sin 2t.", [S`\(-10\sin\frac{\pi}{2}\).`], S`\(-10\)`),
    q("Level 3 · power", S`Find \(\frac{dy}{dx}\) at \(x=\frac{\pi}{3}\) for \(y=\sin^3x\).`, num(1.125, 0.001),
      "3 sin²x cos x.", [S`\(3\cdot\frac34\cdot\frac12\).`], S`\(\frac98=1.125\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the derivative of sin x?", "cos x (x in radians)."],
      ["And of cos x?", "−sin x."],
      ["And of tan x?", "1/cos²x."],
      ["How do I differentiate sin(ax + b)?", "a cos(ax + b): chain rule."],
      ["Why must x be in radians?", "The limit sin h / h → 1 that gives these results holds only in radians."],
    ],
    summary: [
      "sin → cos, cos → −sin, tan → 1/cos².",
      "Chain rule for sin(ax + b), sinⁿx, e^{sin x}.",
      "Product and quotient rules combine as before.",
      "Second derivatives continue the cycle.",
    ],
    next: "13.3 applies these derivatives to tangents, normals, optimisation and rates.",
  }),
];
