// MCV4U 1.5 — Introduction to Derivatives: f′(x) as the limit of the difference quotient, notation, first-principles
// derivatives of polynomial, reciprocal and root functions, graphs of f and f′, and where a derivative fails to exist
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "1.5 Introduction to Derivatives";
export const ID = "87b0f574-9eb8-40ee-8aa6-14f60d314863";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Introduction to Derivatives",
    overview: S`So far the instantaneous rate of change was found one point at a time. Keeping \(x\) as a variable gives a whole new function, the <strong>derivative</strong>:
    \(f'(x)=\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\). Its value at any \(x\) is the slope of the tangent there. Finding it this way is called differentiating <strong>from first principles</strong>. The graph of \(f'\) tells the story of \(f\): positive where \(f\) rises, negative where it falls, zero at its turning points.`,
    goals: [
      "define the derivative as a limit and use the notations \\(f'(x)\\) and \\(\\frac{dy}{dx}\\);",
      "find derivatives of polynomial functions from first principles;",
      "differentiate simple reciprocal and square-root functions from first principles;",
      "connect the graph of f with the graph of f′;",
      "identify points where a function is not differentiable.",
    ],
    curriculum: "A1.5, A1.6 (instantaneous rate as the limit of the difference quotient), A2.1 (graph the instantaneous rates of a polynomial to recognize the derivative function; connect the graphs of f and f′), A1.7/A1.8 (determine derivatives of polynomial functions by simplifying (f(x + h) − f(x))/h and taking the limit)",
    prior: [
      [S`Expand \((x+h)^3\).`, S`\(x^3+3x^2h+3xh^2+h^3\).`],
      [S`Rate of \(x^2\) at \(x=a\)?`, S`\(2a\).`],
      [S`Where is \(y=x^2-4x\) decreasing?`, S`For \(x\lt2\).`],
    ],
    words: [
      ["Derivative", "\\(f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\)", ""],
      ["Leibniz notation", "\\(\\frac{dy}{dx}\\): rate of change of y with respect to x", ""],
      ["First principles", "using the limit definition directly", ""],
      ["Differentiable at a", "f′(a) exists (a unique, non-vertical tangent)", ""],
    ],
  }),

  section("📌 From rates to a function", S`
  ${table(["x", "−2", "−1", "0", "1", "2"], [
    ["f(x) = x³ − 3x", "−2", "2", "0", "−2", "2"],
    ["tangent slope f′(x)", "9", "0", "−3", "0", "9"],
  ])}
  ${plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -5, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }, { f: (x) => 3 * x * x - 3, color: "blue" }], points: [{ x: -1, y: 2, label: "turning point", color: "red" }, { x: 1, y: -2, color: "red" }, { x: -1, y: 0, label: "f′ = 0", color: "blue" }, { x: 1, y: 0, color: "blue" }], step: { x: 1, y: 1 } }, "f(x) = x³ − 3x (violet) and its derivative f′(x) = 3x² − 3 (blue): f′ is zero exactly where f turns.")}
  ${keyIdea(S`\(f'(x)\) is positive where \(f\) is increasing, negative where \(f\) is decreasing, and 0 where the tangent is horizontal. A polynomial of degree \(n\) has a derivative of degree \(n-1\).`)}`),

  section("📌 Explore", S`<p>Slide the point along the curve. Its tangent slope is plotted below as a green dot; together the dots draw the graph of \(f'\). Reveal the formula to compare.</p>`),

  widget("derivativeBuilder", { init: { fn: "quart", x: -2.5 } }),

  section("📌 When there is no derivative", S`
  <p>\(f'(a)\) fails to exist where the graph has a corner or cusp (one-sided slopes differ), a vertical tangent (slopes grow without bound), or a discontinuity. Every differentiable function is continuous, but a continuous function need not be differentiable.</p>
  ${watchOut([
    "f(x + h) means replace every x by (x + h).",
    "Keep the limit symbol until h has been cancelled and set to 0.",
    "f′(x) is a function; f′(a) is a number (a slope).",
    "dy/dx is one symbol, not a fraction to cancel (yet).",
    "Continuity does not guarantee a derivative: |x| is continuous at 0 but has no derivative there.",
  ])}`),

  examples([
    ["A quadratic from first principles", S`Find \(f'(x)\) for \(f(x)=x^2+3x\).`,
      [S`\(f(x+h)-f(x)=(x^2+2xh+h^2+3x+3h)-(x^2+3x)=2xh+h^2+3h\).`, S`\(\dfrac{2xh+h^2+3h}{h}=2x+h+3\to2x+3\).`],
      S`\(f'(x)=2x+3\)`],
    ["A cubic", S`Find \(\dfrac{dy}{dx}\) for \(y=x^3\).`,
      [S`\(\dfrac{(x+h)^3-x^3}{h}=\dfrac{3x^2h+3xh^2+h^3}{h}=3x^2+3xh+h^2\).`, S`As \(h\to0\): \(3x^2\).`],
      S`\(\dfrac{dy}{dx}=3x^2\)`],
    ["A reciprocal function", S`Find \(f'(x)\) for \(f(x)=\dfrac1x\).`,
      [S`\(\dfrac{\frac1{x+h}-\frac1x}{h}=\dfrac{x-(x+h)}{hx(x+h)}=\dfrac{-1}{x(x+h)}\).`, S`As \(h\to0\): \(-\dfrac1{x^2}\).`],
      S`\(f'(x)=-\dfrac1{x^2}\) (negative everywhere: \(\frac1x\) falls on each branch)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 1 / x, a: -4, b: -0.21, color: "violet" }, { f: (x) => 1 / x, a: 0.21, b: 4, color: "violet" }, { f: (x) => -1 / (x * x), a: -4, b: -0.45, color: "blue" }, { f: (x) => -1 / (x * x), a: 0.45, b: 4, color: "blue" }], step: { x: 1, y: 1 } })],
    ["Sketch f′ from f", S`Sketch the derivative of \(f(x)=x^2-4x+1\).`,
      [S`From first principles, \(f'(x)=2x-4\): a line.`, S`\(f'\) is negative for \(x\lt2\) (f falls), zero at the vertex \(x=2\), positive for \(x>2\).`],
      S`\(f'(x)=2x-4\), crossing zero at \(x=2\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 1, color: "violet" }, { f: (x) => 2 * x - 4, color: "blue" }], points: [{ x: 2, y: -3, label: "vertex (2, −3)", color: "red" }, { x: 2, y: 0, label: "f′(2) = 0", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Not differentiable", S`Explain why \(f(x)=|x-1|\) is not differentiable at \(x=1\), and why \(g(x)=\sqrt[3]{x}\) is not differentiable at \(x=0\).`,
      [S`\(|x-1|\): one-sided slopes are \(-1\) and \(+1\) — a corner.`, S`\(\sqrt[3]x\): \(\frac{\sqrt[3]h-0}{h}=h^{-2/3}\to\infty\) — a vertical tangent.`],
      S`corner at \(x=1\); vertical tangent at \(x=0\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 3 }, curves: [{ f: (x) => Math.abs(x - 1), color: "violet" }, { f: (x) => Math.cbrt(x), color: "green" }], points: [{ x: 1, y: 0, label: "corner", color: "red" }, { x: 0, y: 0, label: "vertical tangent", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("evaluate", S`For \(f(x)=5x^2\), \(f'(x)=10x\). Find \(f'(3)\).`, num(30),
      "Substitute.", [S`\(10(3)\).`], S`\(30\)`),
    q("slope", S`For \(y=x^2-7x\), find \(\dfrac{dy}{dx}\) at \(x=2\).`, num(-3),
      "dy/dx = 2x − 7.", [S`\(4-7\).`], S`\(-3\)`),
    q("linear", S`Find \(f'(x)\) for \(f(x)=4x-1\).`, expr("4"),
      "A line's slope.", [S`\(\frac{4h}{h}=4\).`], S`\(4\)`),
    q("cubic", S`For \(f(x)=x^3\), find \(f'(-1)\).`, num(3),
      "f′(x) = 3x².", [S`\(3(1)\).`], S`\(3\)`),
    q("first principles", S`Find \(f'(x)\) for \(f(x)=2x^2-x\).`, expr("4*x-1"),
      "Simplify (f(x + h) − f(x))/h.", [S`\(\frac{4xh+2h^2-h}{h}=4x+2h-1\to4x-1\).`], S`\(4x-1\)`),
  ]),

  ...hard([
    ["A square root", S`Use first principles to find the derivative of \(f(x)=\sqrt x\), then find the tangent at \(x=4\).`,
      [S`\(\dfrac{\sqrt{x+h}-\sqrt x}{h}\cdot\dfrac{\sqrt{x+h}+\sqrt x}{\sqrt{x+h}+\sqrt x}=\dfrac1{\sqrt{x+h}+\sqrt x}\to\dfrac1{2\sqrt x}\).`, S`At \(x=4\): slope \(\frac14\), point \((4,2)\): \(y-2=\frac14(x-4)\).`],
      S`\(f'(x)=\dfrac1{2\sqrt x}\); tangent \(y=\tfrac14x+1\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9, color: "violet" }, { f: (x) => 0.25 * x + 1, color: "green" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Horizontal tangents", S`For \(f(x)=x^3-3x^2\), find \(f'(x)\) from first principles and the points where the tangent is horizontal.`,
      [S`\(\dfrac{(x+h)^3-3(x+h)^2-x^3+3x^2}{h}=3x^2+3xh+h^2-6x-3h\to3x^2-6x\).`, S`\(3x(x-2)=0\Rightarrow x=0\) or \(2\): points \((0,0)\) and \((2,-4)\).`],
      S`\(f'(x)=3x^2-6x\); horizontal tangents at \((0,0)\) and \((2,-4)\)`],
  ], [
    q("hard", S`For \(f(x)=x^2-6x+2\), at what \(x\) is \(f'(x)=0\)?`, num(3),
      "f′(x) = 2x − 6.", [S`\(2x-6=0\).`], S`\(3\)`),
    q("hard", S`For \(f(x)=\dfrac2x\), find \(f'(2)\).`, num(-0.5, 0.0001),
      "f′(x) = −2/x².", [S`\(-\frac24\).`], S`\(-0.5\)`),
    q("hard", S`For \(f(x)=x^4\), find \(f'(1)\) from first principles.`, num(4),
      "Expand (1 + h)⁴.", [S`\(\frac{4h+6h^2+4h^3+h^4}{h}\to4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the derivative?", "The function giving the slope of the tangent (instantaneous rate of change) at every x: f′(x) = lim h→0 (f(x + h) − f(x))/h."],
      ["How do f and f′ relate graphically?", "Where f rises, f′ > 0; where f falls, f′ < 0; at turning points f′ = 0."],
      ["Is every continuous function differentiable?", "No: corners, cusps and vertical tangents are continuous but have no derivative."],
      ["What do f′(x) and dy/dx mean?", "The same thing: the rate of change of the output with respect to x."],
      ["Do I always have to use first principles?", "No — chapter 2 develops rules (power, product, chain, quotient) that give derivatives quickly."],
    ],
    summary: [
      "f′(x) = lim h→0 (f(x + h) − f(x))/h.",
      "f′(a) = slope of the tangent at x = a.",
      "f′ > 0: f rises; f′ < 0: f falls; f′ = 0: horizontal tangent.",
      "No derivative at corners, cusps, vertical tangents, breaks.",
    ],
    next: "1.6 reviews the chapter.",
  }),
];
