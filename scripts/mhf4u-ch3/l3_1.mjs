// MHF4U 3.1 — Reciprocal of a Linear Function: y = 1/(kx + c), vertical and horizontal asymptotes, domain and
// range, invariant points, increasing/decreasing behaviour, behaviour near the asymptotes, and rates of change
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.1 Reciprocal of a Linear Function";
export const ID = "59244325-5784-40b1-a10e-de02c0a075bd";

const S = String.raw;
const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Reciprocal of a Linear Function",
    overview: S`The reciprocal of \(f(x)\) is \(y=\dfrac1{f(x)}\). When \(f\) is linear, its reciprocal is a <strong>rational function</strong> whose graph has two branches. Where \(f(x)=0\), the reciprocal is undefined and the graph has a <strong>vertical asymptote</strong>; as \(|x|\) grows, \(f(x)\) gets large, so the reciprocal approaches 0 — a <strong>horizontal asymptote</strong> at \(y=0\). The points where \(f(x)=\pm1\) are on both graphs. With these facts you can sketch \(y=\dfrac1{kx+c}\) straight from the line \(y=kx+c\).`,
    goals: [
      "find the vertical and horizontal asymptotes of \\(y=\\frac1{kx+c}\\);",
      "state the domain and range;",
      "use invariant points and the line \\(y=f(x)\\) to sketch the reciprocal;",
      "describe the behaviour near the asymptotes and the intervals of increase/decrease;",
      "compare average rates of change on different intervals.",
    ],
    curriculum: "C2.1 (determine key features of the graphs of reciprocals of linear functions: domain, range, intercepts, asymptotes, increasing/decreasing intervals), C2.3 (sketch the graph of reciprocals of linear functions using the graph of the original)",
    prior: [
      [S`Zero of \(f(x)=2x-6\)?`, S`\(x=3\).`],
      [S`What is \(\frac1{0.01}\)? \(\frac1{-0.01}\)?`, S`\(100\) and \(-100\).`],
      [S`Sketch \(y=\frac1x\).`, S`Two branches in quadrants 1 and 3; asymptotes on the axes.`],
    ],
    words: [
      ["Reciprocal function", "\\(y=\\frac1{f(x)}\\)", ""],
      ["Vertical asymptote", "a line \\(x=a\\) the graph approaches but never meets", "where \\(f(a)=0\\)"],
      ["Horizontal asymptote", "a line \\(y=b\\) the graph approaches as \\(|x|\\to\\infty\\)", "\\(y=0\\) here"],
      ["Invariant point", "a point on both \\(y=f(x)\\) and \\(y=\\frac1{f(x)}\\)", "where \\(f=\\pm1\\)"],
    ],
  }),

  section("📌 From a line to its reciprocal", S`
  ${plane({ view: V8, curves: [{ f: (x) => x - 2, color: "blue" }, ...rat((x) => 1 / (x - 2), [2], V8)], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "green" }, { x: 1, y: -1, label: "(1, −1)", color: "green" }], step: { x: 1, y: 1 } }, "y = x − 2 (blue) and y = 1/(x − 2) (violet): asymptote x = 2, invariant points (3, 1) and (1, −1).")}
  ${table(["Feature of f(x) = kx + c", "Effect on y = 1/f(x)"], [
    ["zero at x = −c/k", "vertical asymptote x = −c/k"],
    ["|f| large far from the zero", "y → 0: horizontal asymptote y = 0"],
    ["f = 1 or f = −1", "invariant points (same y-value)"],
    ["f positive / negative", "1/f has the same sign"],
    ["f increasing (k > 0)", "1/f decreasing on each branch"],
  ])}
  ${keyIdea(S`For \(y=\dfrac1{kx+c}\): vertical asymptote \(x=-\dfrac ck\), horizontal asymptote \(y=0\), domain \(\{x\in\mathbb R\mid x\ne-\tfrac ck\}\), range \(\{y\in\mathbb R\mid y\ne0\}\). The y-intercept is \(\tfrac1c\) (if \(c\ne0\)); there is never an x-intercept.`)}`),

  section("📌 Explore", S`<p>Change the slope and intercept of the line. Watch the asymptote follow the zero of the line, the green invariant points stay on both graphs, and the table show the values exploding near the asymptote.</p>`),

  widget("reciprocalLinear", { init: { k: -1, c: 3 } }),

  section("📌 Behaviour near the asymptotes", S`
  <p>Close to the vertical asymptote, \(f(x)\) is a tiny number, so \(\frac1{f(x)}\) is huge — positive on one side and negative on the other. Far from it, \(f(x)\) is huge, so \(\frac1{f(x)}\) is tiny.</p>
  ${watchOut([
    "The asymptote is at the zero of the DENOMINATOR: 1/(2x + 6) has x = −3, not x = 6.",
    "A reciprocal of a linear function never crosses y = 0 — it has no x-intercept.",
    "Invariant points come from f(x) = 1 and f(x) = −1, not from f(x) = 0.",
    "If f increases, 1/f decreases (on each branch separately) — but it is not decreasing 'everywhere' across the asymptote.",
    "Draw asymptotes as dashed lines; they are not part of the graph.",
  ])}`),

  examples([
    ["Sketch from the line", S`Sketch \(f(x)=x-3\) and \(g(x)=\dfrac1{x-3}\).`,
      [S`Zero of \(f\): \(x=3\) → vertical asymptote. Horizontal asymptote \(y=0\).`, S`Invariant points: \(x-3=1\Rightarrow(4,1)\); \(x-3=-1\Rightarrow(2,-1)\).`, S`\(f\) is negative for \(x\lt3\), so \(g\) is too.`],
      S`branches in the regions \(x\lt3,\ y\lt0\) and \(x>3,\ y>0\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x - 3, color: "blue" }, ...rat((x) => 1 / (x - 3), [3], { xmin: -2, xmax: 8 })], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 4, y: 1, label: "(4, 1)", color: "green" }, { x: 2, y: -1, label: "(2, −1)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Key features", S`State the asymptotes, domain, range and intercepts of \(g(x)=\dfrac1{2x+5}\).`,
      [S`\(2x+5=0\Rightarrow x=-2.5\).`, S`y-intercept \(\frac15=0.2\); no x-intercept.`],
      S`VA \(x=-2.5\), HA \(y=0\); \(D: x\ne-2.5\), \(R: y\ne0\); y-intercept \(0.2\)`,
      plane({ view: V8, curves: rat((x) => 1 / (2 * x + 5), [-2.5], V8), vlines: [{ x: -2.5, color: "red", dash: true }], points: [{ x: 0, y: 0.2, label: "(0, 0.2)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Near the asymptote", S`Describe \(g(x)=\dfrac1{x+1}\) as \(x\) approaches \(-1\).`,
      [S`\(g(-1.1)=-10\), \(g(-1.01)=-100\): from the left, \(g\to-\infty\).`, S`\(g(-0.99)=100\), \(g(-0.9)=10\): from the right, \(g\to+\infty\).`],
      S`\(y\to-\infty\) as \(x\to-1^-\); \(y\to+\infty\) as \(x\to-1^+\)`],
    ["A decreasing line", S`Sketch \(g(x)=\dfrac1{-x+2}\) and describe where it increases.`,
      [S`Zero of \(-x+2\): \(x=2\). Invariant points: \(-x+2=1\Rightarrow(1,1)\); \(-x+2=-1\Rightarrow(3,-1)\).`, S`\(f\) decreases, so \(g\) increases on each branch.`],
      S`VA \(x=2\); increasing on \((-\infty,2)\) and on \((2,\infty)\)`,
      plane({ view: V8, curves: [{ f: (x) => -x + 2, color: "blue" }, ...rat((x) => 1 / (2 - x), [2], V8)], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "green" }, { x: 3, y: -1, label: "(3, −1)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Equation from a graph", S`A graph of the form \(y=\dfrac1{kx+c}\) has its vertical asymptote at \(x=-3\) and passes through \((-1,\tfrac14)\). Find the equation.`,
      [S`Zero at \(-3\): \(kx+c=k(x+3)\).`, S`\(\dfrac1{k(-1+3)}=\dfrac14\Rightarrow2k=4\Rightarrow k=2\).`],
      S`\(y=\dfrac1{2x+6}\)`,
      plane({ view: V8, curves: rat((x) => 1 / (2 * x + 6), [-3], V8), vlines: [{ x: -3, color: "red", dash: true }], points: [{ x: -1, y: 0.25, label: "(−1, ¼)", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("asymptote", S`Find the vertical asymptote of \(y=\dfrac1{x+7}\). Give the x-value.`, num(-7),
      "Set the denominator to 0.", [S`\(x+7=0\).`], S`\(x=-7\)`),
    q("y-intercept", S`Find the y-intercept of \(y=\dfrac1{4x-8}\).`, num(-0.125, 0.0001),
      "Substitute x = 0.", [S`\(\frac1{-8}\).`], S`\(-0.125\)`),
    q("invariant point", S`At what x-value is \(\dfrac1{x-5}=1\)?`, num(6),
      "x − 5 = 1.", [S`\(x=6\).`], S`\(6\)`),
    q("range", S`What is the range of \(y=\dfrac1{3x+1}\)?`, choice([S`\(\{y\in\mathbb R\mid y\ne0\}\)`, S`\(\{y\in\mathbb R\mid y\ne-\tfrac13\}\)`, S`\(\{y\in\mathbb R\mid y>0\}\)`, S`all real numbers`], 0),
      "The reciprocal is never 0.", ["Horizontal asymptote y = 0."], S`\(y\ne0\)`),
    q("evaluate", S`Evaluate \(g(2)\) for \(g(x)=\dfrac1{3x-4}\).`, num(0.5, 0.0001),
      "Substitute.", [S`\(\frac1{2}\).`], S`\(0.5\)`),
  ]),

  ...hard([
    ["Find the function, then solve", S`\(g(x)=\dfrac1{kx+c}\) has its vertical asymptote at \(x=-1\) and passes through \(\left(1,\tfrac12\right)\). Find \(g\), then find where \(g(x)=4\).`,
      [S`Zero at \(-1\): \(kx+c=k(x+1)\). At \(x=1\): \(\frac1{2k}=\frac12\Rightarrow k=1\): \(g(x)=\frac1{x+1}\).`, S`\(\frac1{x+1}=4\Rightarrow x+1=\frac14\Rightarrow x=-\frac34\).`],
      S`\(g(x)=\dfrac1{x+1}\); \(x=-0.75\)`,
      plane({ view: V8, curves: [...rat((x) => 1 / (x + 1), [-1], V8), { f: () => 4, color: "green" }], vlines: [{ x: -1, color: "red", dash: true }], points: [{ x: 1, y: 0.5, label: "(1, ½)", color: "blue" }, { x: -0.75, y: 4, label: "(−0.75, 4)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Rates of change of 1/x", S`For \(g(x)=\dfrac1x\), compare the average rates of change on \([1,2]\) and \([2,3]\), and show that the instantaneous rate at \(x=a\) is \(-\dfrac1{a^2}\).`,
      [S`\([1,2]\): \(\frac{0.5-1}{1}=-0.5\). \([2,3]\): \(\frac{\frac13-\frac12}{1}=-\frac16\): the graph flattens.`, S`\(\dfrac{\frac1{a+h}-\frac1a}{h}=\dfrac{a-(a+h)}{ha(a+h)}=-\dfrac1{a(a+h)}\to-\dfrac1{a^2}\) as \(h\to0\).`],
      S`\(-0.5\), \(-\tfrac16\); instantaneous rate \(-\tfrac1{a^2}\)`],
  ], [
    q("hard", S`Solve \(\dfrac1{2x-3}=-1\).`, num(1),
      "2x − 3 = −1.", [S`\(2x=2\).`], S`\(1\)`),
    q("hard", S`How many invariant points do \(y=x+2\) and \(y=\dfrac1{x+2}\) share?`, num(2),
      "x + 2 = ±1.", [S`\((-1,1)\) and \((-3,-1)\).`], S`\(2\)`),
    q("hard", S`Find \(k\) so that \(y=\dfrac1{kx-6}\) has its vertical asymptote at \(x=3\).`, num(2),
      "3k − 6 = 0.", [S`\(k=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is there a vertical asymptote at the zero of f?", "Division by 0 is undefined, and close to that x-value f is tiny, so 1/f is huge — the graph shoots up or down along the line."],
      ["Why is y = 0 the horizontal asymptote?", "Far from the zero, |f(x)| is very large, so 1/f(x) is very close to 0, but never equal to it."],
      ["Why are the points with y = ±1 invariant?", "1 and −1 are their own reciprocals: if f(x) = 1, then 1/f(x) = 1 too."],
      ["Is 1/x decreasing?", "On each branch, yes. But it is not decreasing over its whole domain: g(−1) = −1 < g(1) = 1."],
      ["How do I sketch quickly?", "Draw the line, the dashed asymptotes, the invariant points; then keep the sign of the line and bend toward the asymptotes."],
    ],
    summary: [
      "Zero of f → vertical asymptote of 1/f.",
      "y = 0 is the horizontal asymptote.",
      "f = ±1 → invariant points.",
      "Same sign as f; opposite increasing/decreasing behaviour.",
    ],
    next: "3.2 takes reciprocals of quadratic functions.",
  }),
];
