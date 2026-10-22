// IB AA SL 13.3 — Applications of Derivatives: tangents and normals, stationary points and their nature, points of inflection and optimisation with trigonometric and exponential functions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "13.3 Applications of Derivatives";
export const ID = "1baa0013-0001-4001-8001-000000001303";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });
const XR = 0.8603335890193797; // root of x tan x = 1

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Applications of Derivatives",
    overview: S`With the chain, product and quotient rules and the trigonometric derivatives, the familiar applications now work for far more functions: tangents and normals, stationary points and their nature, points of inflection and optimisation. Many real optimisation problems — gutters, inscribed shapes, light and sound — involve angles or exponential decay, so their models use exactly these functions.`,
    goals: [
      "find equations of tangents and normals to trigonometric, exponential and logarithmic curves;",
      "find stationary points and classify them with the first or second derivative;",
      "find points of inflection where f″ changes sign;",
      "solve optimisation problems whose models involve sin, cos, eˣ or ln x;",
      "justify that an answer is a maximum or a minimum.",
    ],
    curriculum: "SL 5.4 (tangents and normals), SL 5.7 (second derivative, maxima, minima, inflection), SL 5.8 (optimisation)",
    prior: [
      [S`Differentiate \(xe^{-2x}\).`, S`\(e^{-2x}(1-2x)\).`],
      [S`A tangent has slope \(m\). What is the slope of the normal?`, S`\(-\frac1m\).`],
      [S`Solve \(\cos x=\frac12\) for \(0\le x\le2\pi\).`, S`\(\frac{\pi}{3},\ \frac{5\pi}{3}\).`],
    ],
    words: [
      ["Normal", "the line perpendicular to the tangent at the point of contact", ""],
      ["Stationary point", S`a point where \(f'(x)=0\)`, ""],
      ["Second-derivative test", S`\(f''<0\): maximum; \(f''>0\): minimum`, ""],
      ["Point of inflection", "a point where the concavity changes (f″ changes sign)", ""],
      ["Optimisation", "finding the largest or smallest value of a modelled quantity", ""],
    ],
  }),

  section("📌 Tangents, normals and stationary points", S`
  <p>For \(y=3e^{2x}\) at \(x=0\): \(y=3\), \(y'=6e^{2x}=6\). Tangent \(y=6x+3\); normal slope \(-\frac16\), so the normal is \(y=-\frac16x+3\).</p>
  ${plane({ view: { xmin: -2, xmax: 1, ymin: -1, ymax: 8 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 3 * Math.exp(2 * x), color: "violet" }], lines: [{ m: 6, b: 3, color: "amber" }, { m: -1 / 6, b: 3, color: "green", dash: true }], points: [P(0, 3, "(0, 3)")] }, "y = 3e²ˣ with its tangent (amber) and normal (green) at x = 0")}
  <p>For \(y=x-2\sin x\) on \([0,2\pi]\): \(y'=1-2\cos x=0\Rightarrow x=\frac{\pi}{3},\frac{5\pi}{3}\). Since \(y''=2\sin x\) is positive at \(\frac{\pi}{3}\) and negative at \(\frac{5\pi}{3}\), there is a minimum \(\left(\frac{\pi}{3},-0.685\right)\) and a maximum \(\left(\frac{5\pi}{3},6.968\right)\).</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 8 }, step: { x: PI / 3, y: 1 }, curves: [{ f: (x) => x - 2 * Math.sin(x), color: "violet" }], points: [P(PI / 3, PI / 3 - Math.sqrt(3), "min"), P((5 * PI) / 3, (5 * PI) / 3 + Math.sqrt(3), "max"), P(PI, PI, "inflection", "blue")] }, "y = x − 2 sin x: minimum at π/3, maximum at 5π/3, inflection at π")}
  ${table(["Step", "Action"], [["1", "Differentiate and solve f′(x) = 0"], ["2", "Find the y-values"], ["3", "Classify with f″ (or the sign of f′ either side)"], ["4", "Inflection: f″ = 0 AND f″ changes sign"]])}
  ${keyIdea("Tangent slope f′(a), normal slope −1/f′(a). At a stationary point f′ = 0, and the sign of f″ decides maximum or minimum.")}`),

  section("📌 Optimisation with trigonometric models", S`
  <p>A rectangle sits under \(y=\cos x\) with corners at \((\pm x,0)\) and \((\pm x,\cos x)\). Its area is \(A=2x\cos x\). Then \(A'=2\cos x-2x\sin x=0\Rightarrow x\tan x=1\), solved with a GDC: \(x\approx0.860\), \(A\approx1.122\).</p>
  ${plane({ view: { xmin: -PI / 2, xmax: PI / 2, ymin: -0.2, ymax: 1.2 }, step: { x: PI / 4, y: 0.2 }, curves: [{ f: Math.cos, color: "violet" }], segs: [{ pts: [[-XR, 0], [-XR, Math.cos(XR)], [XR, Math.cos(XR)], [XR, 0]], color: "amber" }], points: [P(XR, Math.cos(XR), "(0.860, 0.652)")] }, "the largest rectangle under y = cos x has half-width x ≈ 0.860")}
  ${plane({ view: { xmin: 0, xmax: PI / 2, ymin: -0.2, ymax: 1.3 }, step: { x: PI / 8, y: 0.2 }, curves: [{ f: (x) => 2 * x * Math.cos(x), color: "green" }], points: [P(XR, 2 * XR * Math.cos(XR), "max 1.122")] }, "the area function A(x) = 2x cos x peaks at x ≈ 0.860")}
  ${watchOut([
    "Check endpoints of the domain as well as stationary points.",
    S`Divide by \(\cos x\) only when you know \(\cos x\ne0\) in the domain.`,
    "Use radians in every calculus step.",
    "A point where f″ = 0 is not always an inflection: check the sign change.",
  ])}`),

  section("📌 Explore", S`<p>Choose a curve and slide a. Watch the tangent and normal, and see where the tangent becomes horizontal at the stationary points.</p>`),

  widget("ibTangentNormal", { init: [0, 1] }),

  examples([
    ["Level 1 · Normal", S`Find the equation of the normal to \(y=4\sin x\) at \(x=\frac{\pi}{3}\).`,
      [S`\(y=2\sqrt3\); \(y'=4\cos x=2\).`, S`Normal slope \(-\frac12\): \(y-2\sqrt3=-\frac12\left(x-\frac{\pi}{3}\right)\).`],
      S`\(y=-\frac12x+\frac{\pi}{6}+2\sqrt3\)`],
    ["Level 1 · Horizontal tangent", S`Find where \(y=e^x-3x\) has a horizontal tangent.`,
      [S`\(y'=e^x-3=0\Rightarrow x=\ln3\), \(y=3-3\ln3\).`],
      S`\((\ln3,\ 3-3\ln3)\approx(1.099,-0.296)\)`],
    ["Level 2 · Second-derivative test", S`Find and classify the stationary point of \(y=xe^{-2x}\).`,
      [S`\(y'=e^{-2x}(1-2x)=0\Rightarrow x=\frac12\).`, S`\(y''=e^{-2x}(4x-4)\); \(y''\left(\frac12\right)=-2e^{-1}<0\).`],
      S`maximum \(\left(\frac12,\frac{1}{2e}\right)\approx(0.5,0.184)\)`],
    ["Level 2 · Inflection", S`Find the points of inflection of \(y=\sin x+\cos x\) for \(0\le x\le2\pi\).`,
      [S`\(y''=-\sin x-\cos x=0\Rightarrow\tan x=-1\).`, S`\(x=\frac{3\pi}{4},\frac{7\pi}{4}\); y″ changes sign at each, and \(y=0\) there.`],
      S`\(\left(\frac{3\pi}{4},0\right)\), \(\left(\frac{7\pi}{4},0\right)\)`],
    ["Level 3 · Gutter", S`A gutter has a base 10 cm wide and two sides 10 cm long, each tilted outward at angle θ to the horizontal. Find θ for the largest cross-section.`,
      [S`Area \(A=100\sin\theta(1+\cos\theta)\).`, S`\(A'=100(\cos\theta+\cos^2\theta-\sin^2\theta)=100(2\cos^2\theta+\cos\theta-1)\).`, S`\((2\cos\theta-1)(\cos\theta+1)=0\Rightarrow\theta=\frac{\pi}{3}\); \(A=75\sqrt3\approx129.9\) cm².`],
      S`\(\theta=\frac{\pi}{3}\), \(A\approx129.9\) cm²`,
      plane({ view: { xmin: 0, xmax: PI / 2, ymin: 0, ymax: 140 }, step: { x: PI / 12, y: 20 }, curves: [{ f: (t) => 100 * Math.sin(t) * (1 + Math.cos(t)), color: "violet" }], points: [P(PI / 3, 75 * Math.sqrt(3), "(π/3, 129.9)")] }, "cross-section area A(θ) = 100 sin θ(1 + cos θ) peaks at θ = π/3")],
  ]),

  practice([
    q("Level 1 · tangent slope", S`Find the gradient of the tangent to \(y=4\cos x\) at \(x=\frac{\pi}{2}\).`, num(-4),
      "−4 sin x.", [S`\(-4\cdot1\).`], S`\(-4\)`),
    q("Level 1 · normal slope", S`Find the gradient of the normal to \(y=e^x+x\) at \(x=0\).`, num(-0.5, 0.001),
      "Tangent slope 2.", [S`\(-\frac12\).`], S`\(-0.5\)`),
    q("Level 2 · maximum", S`Find the x-coordinate of the maximum of \(y=xe^{-x/2}\).`, num(2),
      "y′ = e^{−x/2}(1 − x/2).", [S`\(1-\frac x2=0\).`], S`\(2\)`),
    q("Level 2 · nature", S`The stationary point of \(y=\cos2x\) at \(x=0\) is a:`, choice(["maximum", "minimum", "point of inflection", "not stationary"], 0),
      "y″ = −4 cos 2x = −4 < 0.", ["Maximum."], "maximum"),
    q("Level 2 · minimum value", S`Find the minimum value of \(y=e^x-2x\) (3 d.p.).`, num(2 - 2 * Math.log(2), 0.001),
      "x = ln 2.", [S`\(2-2\ln2\).`], S`\(\approx0.614\)`),
  ]),

  ...hard([
    ["Tangent to a log-trig curve", S`Find the tangent to \(y=\ln(\cos x)\) at \(x=\frac{\pi}{4}\).`,
      [S`\(y=\ln\frac{\sqrt2}{2}\approx-0.347\).`, S`\(y'=\frac{-\sin x}{\cos x}=-\tan x\); at \(\frac{\pi}{4}\): \(-1\).`, S`\(y+0.347=-\left(x-\frac{\pi}{4}\right)\).`],
      S`\(y=-x+\frac{\pi}{4}+\ln\frac{\sqrt2}{2}\approx-x+0.439\)`,
      plane({ view: { xmin: -1.4, xmax: 1.4, ymin: -2.5, ymax: 1 }, step: { x: PI / 8, y: 0.5 }, curves: [{ f: (x) => Math.log(Math.cos(x)), color: "violet" }], lines: [{ m: -1, b: PI / 4 + Math.log(Math.SQRT1_2), color: "amber", dash: true }], points: [P(PI / 4, Math.log(Math.SQRT1_2), "(π/4, −0.347)")] }, "y = ln(cos x) and its tangent at x = π/4")],
    ["The largest rectangle under a cosine arch", S`Find the largest area of a rectangle with base on the x-axis and top corners on \(y=\cos x\), \(-\frac{\pi}{2}\le x\le\frac{\pi}{2}\).`,
      [S`\(A=2x\cos x\), \(A'=2\cos x-2x\sin x\).`, S`\(A'=0\Rightarrow x\tan x=1\Rightarrow x\approx0.860\) (GDC).`, S`\(A''<0\) there; \(A\approx2(0.860)\cos0.860\approx1.122\).`],
      S`\(A_{\max}\approx1.122\) at \(x\approx0.860\)`,
      plane({ view: { xmin: 0, xmax: PI / 2, ymin: -0.2, ymax: 1.5 }, step: { x: PI / 8, y: 0.25 }, curves: [{ f: (x) => x * Math.tan(x), color: "violet" }], lines: [{ m: 0, b: 1, color: "amber", dash: true }], points: [P(XR, 1, "x ≈ 0.860")] }, "x tan x = 1 has the solution x ≈ 0.860")],
  ], [
    q("Level 3 · maximum position", S`Find the x-coordinate of the maximum of \(y=e^x\cos x\) on \([0,\pi]\) (3 d.p.).`, num(PI / 4, 0.001),
      "y′ = eˣ(cos x − sin x).", [S`\(\tan x=1\Rightarrow x=\frac{\pi}{4}\).`], S`\(\frac{\pi}{4}\approx0.785\)`),
    q("Level 3 · greatest value", S`Use calculus to find the greatest value of \(3\sin\theta+4\cos\theta\).`, num(5),
      "tan θ = 3/4 at the maximum.", [S`\(\sin\theta=\frac35\), \(\cos\theta=\frac45\): \(\frac95+\frac{16}5\).`], S`\(5\)`),
    q("Level 3 · intercept", S`The normal to \(y=\sin x\) at \(x=\pi\) meets the y-axis at y = ? (3 d.p.)`, num(-PI, 0.001),
      "Tangent slope −1, normal slope 1.", [S`\(y=x-\pi\).`], S`\(-\pi\approx-3.142\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find a normal?", "Find f′(a), take −1/f′(a), and use the point (a, f(a))."],
      ["How do I classify a stationary point?", "f″ < 0 maximum, f″ > 0 minimum; if f″ = 0, check the sign of f′ either side."],
      ["What is a point of inflection?", "Where f″ changes sign — the curve changes from concave up to concave down or back."],
      ["What if I can't solve f′(x) = 0 exactly?", "Use a GDC to find the root, as with x tan x = 1."],
      ["Do I need endpoints?", "Yes: on a closed interval the maximum may occur at an endpoint."],
    ],
    summary: [
      "Tangent slope f′(a); normal slope −1/f′(a).",
      "Stationary: f′ = 0; classify with f″.",
      "Inflection: f″ changes sign.",
      "Optimise: model, differentiate, solve, justify.",
    ],
    next: "13.4 integrates trigonometric and exponential functions.",
  }),
];
