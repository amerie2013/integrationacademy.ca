// IB AA SL 5.4 — First and Second Derivatives and Graphs: increasing/decreasing, stationary points, second derivative, concavity, points of inflection, graphs of f, f′, f″
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.4 First and Second Derivatives and Graphs";
export const ID = "d9c076de-7b01-4013-ac3d-3a9f91a40790";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "First and Second Derivatives and Graphs",
    overview: S`The first derivative tells you which way a graph is going; the second derivative tells you how it bends. Together they locate and classify every turning point and show where the curve changes from bending down to bending up. In this lesson you will find intervals where a function increases or decreases, find and classify stationary points, use \(f''\) to describe concavity and find points of inflection, and move between the graphs of \(f\), \(f'\) and \(f''\).`,
    goals: [
      "find intervals where \\(f\\) is increasing (\\(f'>0\\)) or decreasing (\\(f'<0\\));",
      "find stationary points by solving \\(f'(x)=0\\);",
      "classify them with a sign table or the second derivative test;",
      "use \\(f''\\) to describe concavity and find points of inflection;",
      "relate the graphs of \\(f\\), \\(f'\\) and \\(f''\\).",
    ],
    curriculum: "SL 5.2 (increasing and decreasing functions), SL 5.6 (the second derivative) and SL 5.7 (local maximum and minimum points; testing for maximum and minimum; points of inflection with zero and non-zero gradients; graphical behaviour of f, f′ and f″)",
    prior: [
      [S`Differentiate \(x^3-6x^2+4\).`, S`\(3x^2-12x\).`],
      [S`Solve \(3x^2-12x=0\).`, S`\(x=0\) or \(4\).`],
      [S`What does \(f'(x)<0\) mean for the graph?`, S`\(f\) is decreasing there.`],
    ],
    words: [
      ["Stationary point", "\\(f'(x)=0\\): the tangent is horizontal", "max, min or horizontal inflection"],
      ["Second derivative", "\\(f''(x)\\), the derivative of \\(f'\\); also \\(\\frac{d^2y}{dx^2}\\)", "\\((x^3)''=6x\\)"],
      ["Concave up", "\\(f''>0\\): the gradient increases; the curve bends like ∪", "\\(x^2\\)"],
      ["Concave down", "\\(f''<0\\): the gradient decreases; bends like ∩", "\\(-x^2\\)"],
      ["Point of inflection", "where the concavity changes (\\(f''\\) changes sign)", "\\(x^3\\) at 0"],
    ],
  }),

  section("📌 Increasing, decreasing and stationary points", S`
  <p>For \(f(x)=x^3-3x^2-9x+5\): \(f'(x)=3x^2-6x-9=3(x+1)(x-3)\). The stationary points are at \(x=-1\) and \(x=3\). A sign table shows how \(f'\) changes:</p>
  ${table(["x", "x < −1", "−1", "−1 < x < 3", "3", "x > 3"], [["f′(x)", "+", "0", "−", "0", "+"], ["f", "increasing", "max (−1, 10)", "decreasing", "min (3, −22)", "increasing"]])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -26, ymax: 16 }, step: { x: 1, y: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 5, color: "violet" }, { f: (x) => 3 * x * x - 6 * x - 9, color: "amber" }], points: [P(-1, 10, "max (−1, 10)", "red"), P(3, -22, "min (3, −22)", "blue"), P(1, -6, "inflection (1, −6)", "green")] }, "f (violet) and f′ (amber): f′ changes from + to − at the maximum, − to + at the minimum")}
  ${keyIdea(S`Second derivative test at a stationary point: \(f''>0\) ⇒ minimum; \(f''<0\) ⇒ maximum; \(f''=0\) ⇒ no conclusion — use a sign table.`)}`),

  section("📌 Concavity and points of inflection", S`
  <p>\(f''(x)=6x-6\) is negative for \(x<1\) (concave down) and positive for \(x>1\) (concave up), so \((1,-6)\) is a point of inflection: the curve changes the way it bends. At an inflection point \(f''=0\) <em>and</em> \(f''\) changes sign.</p>
  ${plane({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => x ** 4 / 2, color: "green" }], points: [P(0, 0, "(0, 0)")] }, "x³ (violet) has a horizontal point of inflection at 0; x⁴/2 (green) has f″(0) = 0 but a minimum there")}
  ${table(["Graph of f", "f′", "f″"], [["increasing", "> 0", ""], ["decreasing", "< 0", ""], ["maximum / minimum", "= 0 and changes sign", "< 0 / > 0 (if not 0)"], ["concave up / down", "increasing / decreasing", "> 0 / < 0"], ["point of inflection", "has a max or min", "= 0 and changes sign"]])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (x * x * x) / 6 - 2 * x + 1, color: "violet" }, { f: (x) => (x * x) / 2 - 2, color: "amber" }], points: [P(-2, 11 / 3, "max (−2, 3.67)", "red"), P(2, -5 / 3, "min (2, −1.67)"), P(0, 1, "inflection (0, 1)", "green")] }, "f(x) = x³/6 − 2x + 1 (violet), f′(x) = x²/2 − 2 (amber): zeros of f′ are turning points of f; the minimum of f′ is the inflection of f")}
  ${watchOut([
    "f′(x) = 0 is necessary for a turning point but not enough: check the sign change.",
    "f″(x) = 0 does not prove an inflection point (x⁴ at 0): f″ must change sign.",
    "Give stationary points as coordinates: substitute back into f, not f′.",
    "Increasing/decreasing intervals use the x-values only.",
  ])}`),

  section("📌 Explore", S`<p>Change the coefficients of the cubic. Watch the stationary points (where f′ crosses zero) and the point of inflection (where f″ crosses zero), and switch the derivative graphs on and off.</p>`),

  widget("ibShape", { init: [1, -3, -9, 5] }),

  examples([
    ["Level 1 · Increasing and decreasing", S`Find the intervals where \(f(x)=x^2-8x+3\) is increasing and decreasing.`,
      [S`\(f'(x)=2x-8\), zero at \(x=4\).`, S`\(f'<0\) for \(x<4\), \(f'>0\) for \(x>4\).`],
      S`decreasing \(x<4\); increasing \(x>4\)`],
    ["Level 1 · Classify with f″", S`Find and classify the stationary points of \(y=2x^3-6x\).`,
      [S`\(y'=6x^2-6=0\Rightarrow x=\pm1\).`, S`\(y''=12x\): \(y''(1)=12>0\) (min), \(y''(-1)=-12<0\) (max).`, S`Min \((1,-4)\), max \((-1,4)\).`],
      S`max \((-1,4)\); min \((1,-4)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x ** 3 - 6 * x, color: "violet" }], points: [P(-1, 4, "(−1, 4)", "red"), P(1, -4, "(1, −4)")] })],
    ["Level 2 · Point of inflection", S`Find the point of inflection of \(f(x)=x^3+3x^2-2\) and describe the concavity.`,
      [S`\(f''(x)=6x+6=0\Rightarrow x=-1\); \(f(-1)=-1+3-2=0\).`, S`\(f''<0\) for \(x<-1\) (concave down), \(>0\) for \(x>-1\) (concave up).`],
      S`\((-1,0)\)`],
    ["Level 2 · When f″ = 0 is not enough", S`Find and classify the stationary points of \(f(x)=3x^4-4x^3\).`,
      [S`\(f'(x)=12x^3-12x^2=12x^2(x-1)=0\Rightarrow x=0\) or \(1\).`, S`\(f''(x)=36x^2-24x\): \(f''(1)=12>0\), minimum \((1,-1)\).`, S`At \(x=0\) the second derivative is 0: sign table — \(f'<0\) on both sides of 0, so \((0,0)\) is a horizontal point of inflection.`],
      S`min \((1,-1)\); inflection \((0,0)\)`,
      plane({ view: { xmin: -1, xmax: 2, ymin: -2, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 3 * x ** 4 - 4 * x ** 3, color: "violet" }], points: [P(0, 0, "(0, 0)", "green"), P(1, -1, "(1, −1)"), P(2 / 3, -48 / 81, "(0.67, −0.59)", "amber")] }, "Inflection points at (0, 0) (horizontal) and (2/3, −16/27)")],
    ["Level 3 · From the graph of f′", S`The graph of \(f'\) is shown. State the x-coordinates of the stationary points of \(f\) and classify them, and state where \(f\) is concave up.`,
      [S`\(f'=0\) at \(x=-2\) and \(x=1\).`, S`At \(-2\): \(f'\) goes + to −, a maximum; at \(1\): − to +, a minimum.`, S`\(f\) is concave up where \(f'\) is increasing: \(x>-0.5\).`],
      S`max at \(-2\), min at \(1\); concave up for \(x>-0.5\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (x + 2) * (x - 1), color: "amber" }], points: [P(-2, 0, "(−2, 0)"), P(1, 0, "(1, 0)"), P(-0.5, -2.25, "(−0.5, −2.25)", "green")] }, "The graph of y = f′(x)")],
  ]),

  practice([
    q("Level 1 · stationary x", S`Find the x-coordinate of the stationary point of \(y=x^2+10x\).`, num(-5),
      "2x + 10 = 0.", [S`\(x=-5\).`], S`\(-5\)`),
    q("Level 1 · second derivative", S`For \(f(x)=x^4\), find \(f''(1)\).`, num(12),
      "f′ = 4x³, f″ = 12x².", [S`\(12\).`], S`\(12\)`),
    q("Level 2 · classify", S`\(f'(2)=0\) and \(f''(2)=-5\). At \(x=2\), \(f\) has:`, choice(["a local maximum", "a local minimum", "a point of inflection", "no stationary point"], 0),
      "Second derivative test.", [S`\(f''<0\): concave down.`], "maximum"),
    q("Level 2 · inflection", S`Find the x-coordinate of the point of inflection of \(y=x^3-9x^2+4\).`, num(3),
      "y″ = 6x − 18.", [S`\(x=3\).`], S`\(3\)`),
    q("Level 2 · minimum value", S`Find the minimum value of \(y=x^2-6x+14\).`, num(5),
      "y′ = 0 at x = 3.", [S`\(9-18+14\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Unknown coefficients", S`\(f(x)=x^3+ax^2+bx\) has a stationary point at \((1,-4)\). Find \(a\) and \(b\), and classify the point.`,
      [S`\(f(1)=1+a+b=-4\); \(f'(1)=3+2a+b=0\).`, S`Subtract: \(2+a=4\Rightarrow a=2\), \(b=-7\).`, S`\(f''(1)=6+2a=10>0\): a minimum.`],
      S`\(a=2\), \(b=-7\); minimum`],
    ["Increasing everywhere", S`Find the values of \(k\) for which \(f(x)=x^3+kx^2+3x\) is increasing for all \(x\).`,
      [S`Need \(f'(x)=3x^2+2kx+3\ge0\) for all \(x\).`, S`Discriminant \(4k^2-36\le0\Rightarrow k^2\le9\).`, S`\(-3\le k\le3\).`],
      S`\(-3\le k\le3\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -10, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => x ** 3 + 3 * x * x + 3 * x, color: "violet" }, { f: (x) => x ** 3 + 5 * x * x + 3 * x, color: "gray" }], points: [P(-1, -1, "(−1, −1)")] }, "k = 3 (violet): increasing, with a horizontal inflection at (−1, −1); k = 5 (grey) turns")],
  ], [
    q("Level 3 · maximum value", S`Find the maximum value of \(y=x^3-12x+1\) (a local maximum).`, num(17),
      "y′ = 3x² − 12 = 0.", [S`\(x=-2\): \(-8+24+1\).`], S`\(17\)`),
    q("Level 3 · unknown", S`\(y=x^3-kx\) has a stationary point at \(x=2\). Find \(k\).`, num(12),
      "3(4) − k = 0.", [S`\(k=12\).`], S`\(12\)`),
    q("Level 3 · inflection y", S`Find the y-coordinate of the point of inflection of \(y=x^3-6x^2+9x+1\).`, num(3),
      "y″ = 6x − 12 = 0 at x = 2.", [S`\(8-24+18+1\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find where f is increasing?", "Solve f′(x) > 0; the turning points split the number line into intervals to test."],
      ["Which test should I use to classify?", "The second derivative test is quickest; if f″ = 0 at the point, use a sign table of f′."],
      ["What exactly is a point of inflection?", "A point where the concavity changes — f″ changes sign there. It need not be stationary."],
      ["How do I read f from a graph of f′?", "Zeros of f′ are stationary points of f; above the axis f increases, below it decreases; turning points of f′ are inflections of f."],
      ["Why can f″(0) = 0 at a minimum?", "For x⁴, f″ is 0 at 0 but does not change sign; the point is still a minimum."],
    ],
    summary: [
      "f′ > 0 increasing, f′ < 0 decreasing.",
      "Stationary points: f′ = 0; classify by sign change or f″.",
      "f″ > 0 concave up (min), f″ < 0 concave down (max).",
      "Inflection: f″ = 0 and changes sign.",
      "Zeros of f′ ↔ turning points of f; turning points of f′ ↔ inflections of f.",
    ],
    next: "5.5 uses stationary points to solve optimisation problems.",
  }),
];
