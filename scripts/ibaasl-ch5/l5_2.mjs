// IB AA SL 5.2 — The Derivative Function: tangent gradient as a limit, first principles, notation, sketching f′ from f, rates of change
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.2 The Derivative Function";
export const ID = "1baa0005-0001-4001-8001-000000000502";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "📈",
    title: "The Derivative Function",
    overview: S`The gradient of a curve changes from point to point. At any point it is the gradient of the tangent, and that is the limit of the gradients of secants through nearby points. Doing this for every \(x\) gives a new function, the derivative \(f'(x)\), which tells you the gradient — the instantaneous rate of change — everywhere. In this lesson you will find derivatives from first principles, use the notation \(f'(x)\) and \(\frac{dy}{dx}\), and sketch the graph of \(f'\) from the graph of \(f\).`,
    goals: [
      "explain the tangent gradient as the limit of secant gradients;",
      "use \\(f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\) to differentiate simple polynomials from first principles;",
      "use the notations \\(f'(x)\\), \\(\\frac{dy}{dx}\\) and \\(\\frac{d}{dx}\\);",
      "sketch the graph of \\(f'\\) from the graph of \\(f\\) using the sign of the gradient;",
      "interpret the derivative as an instantaneous rate of change with units.",
    ],
    curriculum: "SL 5.1 (the derivative interpreted as gradient function and as rate of change; informal ideas of limit; notation f′(x) and dy/dx) and SL 5.2 (increasing and decreasing functions; graphical interpretation of f′(x) > 0, f′(x) = 0, f′(x) < 0)",
    prior: [
      [S`Find the gradient of the line through \((1,2)\) and \((3,10)\).`, S`\(4\).`],
      [S`Expand \((x+h)^2\).`, S`\(x^2+2xh+h^2\).`],
      [S`Find \(\lim_{h\to0}(4x+2h)\).`, S`\(4x\).`],
    ],
    words: [
      ["Secant", "a line through two points of a curve", "gradient \\(\\frac{f(x+h)-f(x)}{h}\\)"],
      ["Tangent", "the line touching the curve at a point, with the curve's gradient there", "gradient \\(f'(a)\\)"],
      ["Derivative", "\\(f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\)", "\\((x^2)'=2x\\)"],
      ["\\(\\frac{dy}{dx}\\)", "Leibniz notation for the derivative of \\(y\\) with respect to \\(x\\)", "\\(y=x^3\\): \\(\\frac{dy}{dx}=3x^2\\)"],
      ["Rate of change", "the derivative, with units 'y-units per x-unit'", "m/s"],
    ],
  }),

  section("📌 From secants to the derivative", S`
  <p>The secant through \((x,f(x))\) and \((x+h,f(x+h))\) has gradient \(\frac{f(x+h)-f(x)}{h}\). As \(h\to0\) the second point slides onto the first and the secant turns into the tangent. For \(f(x)=x^2\):</p>
  <p style="text-align:center">\(\displaystyle\frac{(x+h)^2-x^2}{h}=\frac{2xh+h^2}{h}=2x+h\ \longrightarrow\ 2x\quad(h\to0)\)</p>
  ${table(["h", "1", "0.1", "0.01", "0.001"], [["secant gradient at x = 1", "3", "2.1", "2.01", "2.001"]])}
  ${plane({ view: { xmin: -1, xmax: 3.5, ymin: -1, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 3 * (x - 1) + 1, color: "green" }, { f: (x) => 2.5 * (x - 1) + 1, color: "amber" }, { f: (x) => 2 * (x - 1) + 1, color: "red" }], points: [P(1, 1, "(1, 1)"), P(2, 4, "h = 1", "green"), P(1.5, 2.25, "h = 0.5", "amber")] }, "Secants with h = 1 (green), h = 0.5 (amber) approach the tangent (red, gradient 2)")}
  ${keyIdea(S`\(f'(x)=\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}\). It gives the gradient of the tangent at every point. If \(y=f(x)\) we also write \(\frac{dy}{dx}\).`)}`),

  section("📌 The graph of f′", S`
  <p>Where \(f\) is increasing its tangents slope up, so \(f'(x)>0\); where it is decreasing, \(f'(x)<0\); at a turning point the tangent is horizontal and \(f'(x)=0\). That is enough to sketch \(f'\) from \(f\).</p>
  ${plane({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }, { f: (x) => 3 * x * x - 3, color: "amber" }], points: [P(-1, 2, "(−1, 2)"), P(1, -2, "(1, −2)"), P(-1, 0, "", "amber"), P(1, 0, "", "amber")] }, "f(x) = x³ − 3x (violet) and f′(x) = 3x² − 3 (amber): f′ = 0 at the turning points x = ±1")}
  ${table(["On f", "On f′"], [["increasing", "above the x-axis"], ["decreasing", "below the x-axis"], ["turning point", "crosses (or touches) the x-axis"], ["steepest upward", "highest point"]])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 - x * x / 2, color: "violet" }, { f: (x) => -x, color: "amber" }], points: [P(0, 4, "(0, 4)")] }, "f(x) = 4 − x²/2 and f′(x) = −x: the maximum of f is where f′ crosses 0")}
  ${plane({ view: { xmin: -0.3, xmax: 6, ymin: -5, ymax: 50 }, step: { x: 1, y: 5 }, curves: [{ f: (t) => t * t + 5 * t, a: 0, b: 6, color: "violet" }, { f: (t) => 9 * (t - 2) + 14, a: 0.5, b: 4, color: "red" }], points: [P(2, 14, "(2, 14)")], xlabel: "t (s)", ylabel: "d (m)" }, "d = t² + 5t: the tangent at t = 2 has gradient 9 — the speed is 9 m/s")}
  ${watchOut([
    "Expand f(x + h) carefully: (x + h)² is not x² + h².",
    "Cancel the factor h before letting h → 0, never after.",
    "f′(x) is a function; f′(2) is a number, the gradient at x = 2.",
    "When sketching f′, use the x-values of turning points of f as its zeros.",
  ])}`),

  section("📌 Explore", S`<p>Choose a function, then move \(a\) and shrink \(h\). The red point in the lower graph traces the derivative: its height is the tangent gradient at \(a\).</p>`),

  widget("ibDerivative", { init: [0, 1, 1] }),

  examples([
    ["Level 1 · Secant gradients", S`For \(f(x)=x^2\), find the gradient of the secant from \(x=2\) to \(x=2.1\), and the gradient of the tangent at \(x=2\).`,
      [S`\(\frac{4.41-4}{0.1}=4.1\).`, S`\(f'(x)=2x\), so \(f'(2)=4\).`],
      S`\(4.1\); \(4\)`],
    ["Level 1 · Reading a graph", S`For the graph shown, state where \(f'(x)>0\), \(f'(x)<0\) and \(f'(x)=0\).`,
      [S`Decreasing to the left of the minimum at \(x=2\), increasing to the right.`],
      S`\(f'>0\) for \(x>2\); \(f'<0\) for \(x<2\); \(f'(2)=0\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (x - 2) ** 2 - 2, color: "violet" }], points: [P(2, -2, "(2, −2)", "red")] })],
    ["Level 2 · First principles", S`Use first principles to find \(f'(x)\) for \(f(x)=3x^2+x\).`,
      [S`\(f(x+h)=3x^2+6xh+3h^2+x+h\).`, S`\(\frac{f(x+h)-f(x)}{h}=\frac{6xh+3h^2+h}{h}=6x+3h+1\).`, S`Let \(h\to0\): \(f'(x)=6x+1\).`],
      S`\(f'(x)=6x+1\)`],
    ["Level 2 · A cubic", S`Use first principles to show that \(\frac{d}{dx}(x^3)=3x^2\).`,
      [S`\((x+h)^3=x^3+3x^2h+3xh^2+h^3\).`, S`\(\frac{(x+h)^3-x^3}{h}=3x^2+3xh+h^2\).`, S`As \(h\to0\): \(3x^2\).`],
      S`\(3x^2\)`],
    ["Level 3 · A rate of change", S`A tank holds \(V=200-8t+0.1t^2\) litres after \(t\) minutes (\(0\le t\le40\)). Find \(\frac{dV}{dt}\) from first principles and the rate of change at \(t=10\). Interpret.`,
      [S`\(\frac{V(t+h)-V(t)}{h}=\frac{-8h+0.2th+0.1h^2}{h}=-8+0.2t+0.1h\to-8+0.2t\).`, S`At \(t=10\): \(-8+2=-6\) L/min.`, S`The tank is losing 6 litres per minute at that instant.`],
      S`\(-6\) L/min`,
      plane({ view: { xmin: -1, xmax: 42, ymin: -10, ymax: 210 }, step: { x: 5, y: 20 }, curves: [{ f: (t) => 200 - 8 * t + 0.1 * t * t, a: 0, b: 40, color: "violet" }, { f: (t) => -6 * (t - 10) + 130, a: 0, b: 30, color: "red" }], points: [P(10, 130, "(10, 130)")], xlabel: "t", ylabel: "V" })],
  ]),

  practice([
    q("Level 1 · secant", S`For \(f(x)=x^2\), find the gradient of the secant from \(x=3\) to \(x=5\).`, num(8),
      "(25 − 9)/2.", [S`\(\frac{16}{2}\).`], S`\(8\)`),
    q("Level 1 · tangent", S`Given \(\frac{d}{dx}(x^2)=2x\), find the gradient of \(y=x^2\) at \(x=-4\).`, num(-8),
      "Substitute.", [S`\(2(-4)\).`], S`\(-8\)`),
    q("Level 2 · quotient", S`For \(f(x)=x^2+5x\), \(\frac{f(x+h)-f(x)}{h}\) simplifies to \(2x+h+5\). Find \(f'(1)\).`, num(7),
      "Let h → 0, then x = 1.", [S`\(2+5\).`], S`\(7\)`),
    q("Level 2 · sign", S`On an interval where \(f\) is decreasing, \(f'(x)\) is:`, choice(["negative", "positive", "zero", "not defined"], 0),
      "Think of the tangent slopes.", ["Tangents slope down."], "negative"),
    q("Level 2 · first principles", S`Use first principles: for \(f(x)=4x^2\), find \(f'(3)\).`, num(24),
      "f′(x) = 8x.", [S`\(\frac{8xh+4h^2}{h}=8x+4h\to8x\).`], S`\(24\)`),
  ]),

  ...hard([
    ["Sketching f′ from f", S`\(f(x)=x^3-6x^2+9x\) has a maximum at \((1,4)\) and a minimum at \((3,0)\). Describe the graph of \(f'\) and confirm with \(f'(x)=3x^2-12x+9\).`,
      [S`\(f'\) is positive for \(x<1\), negative for \(1<x<3\), positive for \(x>3\), with zeros at 1 and 3.`, S`\(3x^2-12x+9=3(x-1)(x-3)\): a parabola opening up with zeros 1 and 3 — it matches.`, S`Its minimum, at \(x=2\), is where \(f\) decreases most steeply.`],
      S`parabola with zeros 1 and 3`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x, color: "violet" }, { f: (x) => 3 * x * x - 12 * x + 9, color: "amber" }], points: [P(1, 4, "(1, 4)"), P(3, 0, "(3, 0)")] }, "f (violet) and f′ (amber)")],
    ["A tangent from first principles", S`Use first principles to find the derivative of \(f(x)=2x^2-3x\), then find the equation of the tangent at \(x=2\).`,
      [S`\(\frac{4xh+2h^2-3h}{h}=4x+2h-3\to4x-3\).`, S`\(f(2)=2\), \(f'(2)=5\).`, S`\(y-2=5(x-2)\Rightarrow y=5x-8\).`],
      S`\(y=5x-8\)`],
  ], [
    q("Level 3 · zero gradient", S`\(f'(x)=6x-12\). Find the x-coordinate where the tangent to \(f\) is horizontal.`, num(2),
      "f′(x) = 0.", [S`\(6x=12\).`], S`\(2\)`),
    q("Level 3 · from first principles", S`For \(f(x)=x^2-6x\), \(\frac{f(x+h)-f(x)}{h}=2x+h-6\). For which \(x\) is the gradient of the tangent equal to 4?`, num(5),
      "2x − 6 = 4.", [S`\(2x=10\).`], S`\(5\)`),
    q("Level 3 · rate", S`A ball's height is \(s=30t-5t^2\) m, with \(s'(t)=30-10t\). Find the rate of change of height (m/s) at \(t=1.5\).`, num(15),
      "Substitute t = 1.5.", [S`\(30-15\).`], S`\(15\) m/s`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between a secant and a tangent?", "A secant joins two points; a tangent touches at one point. The tangent gradient is the limit of secant gradients."],
      ["Why can't I just put h = 0 at the start?", "The quotient becomes 0/0. Simplify and cancel h first; then h → 0 is easy."],
      ["What does f′(x) = 0 tell me?", "The tangent is horizontal: usually a turning point."],
      ["How do I sketch f′ from f?", "Mark where f turns (zeros of f′), then use increasing (f′ above the axis) and decreasing (below)."],
      ["What are the units of a derivative?", "Units of y per unit of x, e.g. litres per minute or metres per second."],
    ],
    summary: [
      "f′(x) = lim (f(x + h) − f(x))/h as h → 0.",
      "Notation f′(x), dy/dx, d/dx.",
      "(x²)′ = 2x, (x³)′ = 3x² from first principles.",
      "f increasing ⇔ f′ > 0; decreasing ⇔ f′ < 0; turning point ⇒ f′ = 0.",
      "The derivative is the instantaneous rate of change.",
    ],
    next: "5.3 gives quick rules for differentiating, and uses them for tangents and normals.",
  }),
];
