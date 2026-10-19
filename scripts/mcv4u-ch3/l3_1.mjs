// MCV4U 3.1 — Increasing and Decreasing Functions: the sign of f′ on intervals, critical numbers as the only places
// the sign can change, sign charts, reading f from the graph of f′, rational functions, and models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.1 Increasing and Decreasing Functions";
export const ID = "5a3b8fef-8ad3-468b-b6f2-0b2cbeade402";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Increasing and Decreasing Functions",
    overview: S`A function is <strong>increasing</strong> on an interval if its graph rises from left to right there, and <strong>decreasing</strong> if it falls. The derivative tells us which: where \(f'(x)\gt0\) every tangent slopes up, so \(f\) increases; where \(f'(x)\lt0\), \(f\) decreases. For a polynomial, \(f'\) can only change sign where \(f'(x)=0\), so we find those <strong>critical numbers</strong>, cut the number line there, and test one value in each piece. The result — a <strong>sign chart</strong> — is the backbone of every curve sketch in this chapter.`,
    goals: [
      "connect the sign of f′ with where f increases or decreases;",
      "find critical numbers and build a sign chart for f′;",
      "state intervals of increase and decrease;",
      "describe f from the graph of f′;",
      "apply the test to rational functions and to models.",
    ],
    curriculum: "B1.1 (describe key features of a polynomial function from its derivative), B1.2 (determine intervals of increase and decrease using the first derivative)",
    prior: [
      [S`Derivative of \(x^3-12x\)?`, S`\(3x^2-12\).`],
      [S`Solve \(3x^2-12=0\).`, S`\(x=\pm2\).`],
      [S`Is \(f'(0)\) positive or negative for \(f'(x)=3x^2-12\)?`, S`Negative: \(-12\).`],
    ],
    words: [
      ["Increasing", "\\(f(x_1)\\lt f(x_2)\\) whenever \\(x_1\\lt x_2\\)", "graph rises"],
      ["Decreasing", "\\(f(x_1)\\gt f(x_2)\\) whenever \\(x_1\\lt x_2\\)", "graph falls"],
      ["Critical number", "a value c in the domain where \\(f'(c)=0\\) or \\(f'(c)\\) does not exist", ""],
      ["Sign chart", "a number line showing the sign of \\(f'\\) on each interval", ""],
    ],
  }),

  section("📌 The sign of f′ tells the direction", S`
  ${table(["On an interval…", "the graph of f…", "the tangents…"], [
    ["\\(f'(x)\\gt0\\)", "increases (rises)", "slope up"],
    ["\\(f'(x)\\lt0\\)", "decreases (falls)", "slope down"],
    ["\\(f'(x)=0\\) at a point", "may turn, or may just level off", "horizontal"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -18, ymax: 18 }, curves: [{ f: (x) => x ** 3 - 12 * x + 1, a: -4, b: -2, color: "green" }, { f: (x) => x ** 3 - 12 * x + 1, a: -2, b: 2, color: "red" }, { f: (x) => x ** 3 - 12 * x + 1, a: 2, b: 4, color: "green" }, { f: (x) => 3 * x * x - 12, color: "blue" }], points: [{ x: -2, y: 17, label: "(−2, 17)", color: "violet" }, { x: 2, y: -15, label: "(2, −15)", color: "violet" }], step: { x: 1, y: 3 } }, "f(x) = x³ − 12x + 1: green where f′ > 0, red where f′ < 0. The blue graph is f′(x) = 3x² − 12.")}
  ${keyIdea(S`If \(f'(x)\gt0\) for every \(x\) in an interval, \(f\) is increasing there; if \(f'(x)\lt0\), \(f\) is decreasing. To find the intervals: (1) find \(f'\); (2) solve \(f'(x)=0\) (and find where \(f'\) is not defined); (3) test one value in each interval.`)}`),

  section("📌 Explore", S`<p>Change the coefficients of the cubic. The graph turns green where \(f'\gt0\) and red where \(f'\lt0\); the dashed blue curve is \(f'\). Notice that the colour only changes at a zero of \(f'\) — and that some cubics never change colour at all.</p>`),

  widget("monotonicityLab", { init: [-1, 0, 3, 1] }),

  section("📌 Building a sign chart", S`
  <p>Factor \(f'\) completely, mark its zeros on a number line, and test each interval with a convenient value. Write intervals with round brackets: at a critical number the function is neither rising nor falling.</p>
  ${watchOut([
    "Test the sign of f′, not of f: a function can be negative and still be increasing.",
    "A zero of f′ does not always change the sign: f′(x) = 3x² for f = x³ is never negative.",
    "For rational functions, also cut the number line at the vertical asymptotes.",
    "Use round brackets and don't join intervals across a critical number with ∪ as if they were one piece.",
    "Increasing/decreasing refers to x-intervals, not y-values.",
  ])}`),

  examples([
    ["A cubic", S`Find the intervals of increase and decrease of \(f(x)=x^3-12x+1\).`,
      [S`\(f'(x)=3x^2-12=3(x-2)(x+2)\); zeros \(x=\pm2\).`, S`Test \(x=-3\): \(15\gt0\); \(x=0\): \(-12\lt0\); \(x=3\): \(15\gt0\).`],
      S`increasing on \((-\infty,-2)\) and \((2,\infty)\); decreasing on \((-2,2)\)`],
    ["A quartic", S`Find the intervals of increase and decrease of \(f(x)=x^4-8x^2\).`,
      [S`\(f'(x)=4x^3-16x=4x(x-2)(x+2)\); zeros \(-2,0,2\).`, S`Signs from left: \(-,+,-,+\).`],
      S`decreasing on \((-\infty,-2)\) and \((0,2)\); increasing on \((-2,0)\) and \((2,\infty)\)`,
      plane({ view: { xmin: -3.2, xmax: 3.2, ymin: -18, ymax: 10 }, curves: [{ f: (x) => x ** 4 - 8 * x * x, color: "violet" }], points: [{ x: -2, y: -16, label: "(−2, −16)", color: "red" }, { x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 2, y: -16, label: "(2, −16)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Reading the graph of f′", S`The graph of \(f'(x)=(x+1)(x-3)\) is shown. Where is \(f\) increasing, and where does \(f\) change direction?`,
      [S`\(f'\gt0\) (graph above the axis) for \(x\lt-1\) and \(x\gt3\).`, S`\(f'\lt0\) on \((-1,3)\).`, S`\(f\) changes from rising to falling at \(x=-1\), and from falling to rising at \(x=3\).`],
      S`increasing on \((-\infty,-1)\) and \((3,\infty)\); local max at \(x=-1\), local min at \(x=3\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 3), color: "blue" }], points: [{ x: -1, y: 0, label: "−1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 1 } })],
    ["A rational function", S`Find the intervals of increase and decrease of \(f(x)=\dfrac{x}{x^2+4}\).`,
      [S`\(f'(x)=\dfrac{(x^2+4)-x(2x)}{(x^2+4)^2}=\dfrac{4-x^2}{(x^2+4)^2}\).`, S`The denominator is always positive, so the sign is that of \(4-x^2\): positive on \((-2,2)\).`],
      S`increasing on \((-2,2)\); decreasing on \((-\infty,-2)\) and \((2,\infty)\)`,
      plane({ view: { xmin: -8, xmax: 8, ymin: -0.4, ymax: 0.4 }, curves: [{ f: (x) => x / (x * x + 4), color: "violet" }], points: [{ x: 2, y: 0.25, label: "(2, ¼)", color: "red" }, { x: -2, y: -0.25, label: "(−2, −¼)", color: "red" }], step: { x: 1, y: 0.1 } })],
    ["A population model", S`A herd numbers \(P(t)=-t^3+9t^2+48t+500\) after \(t\) years, \(0\le t\le12\). When is it growing, and when shrinking?`,
      [S`\(P'(t)=-3t^2+18t+48=-3(t-8)(t+2)\).`, S`For \(0\le t\lt8\), \(P'\gt0\); for \(t\gt8\), \(P'\lt0\).`],
      S`growing for \(0\le t\lt8\), shrinking for \(8\lt t\le12\); largest at \(t=8\)`,
      plane({ view: { xmin: 0, xmax: 12.5, ymin: 400, ymax: 1100 }, curves: [{ f: (t) => -(t ** 3) + 9 * t * t + 48 * t + 500, a: 0, b: 12, color: "violet" }], points: [{ x: 8, y: 948, label: "(8, 948)", color: "red" }], step: { x: 1, y: 100 } })],
  ]),

  practice([
    q("interval", S`\(f(x)=x^2-6x\) is decreasing for \(x\lt a\). Find \(a\).`, num(3),
      "f′(x) = 2x − 6.", [S`\(2x-6\lt0\iff x\lt3\).`], S`\(3\)`),
    q("sign chart", S`Where is \(f(x)=2x^3-6x\) increasing?`, choice([S`\(x\lt-1\) or \(x\gt1\)`, S`\(-1\lt x\lt1\)`, S`\(x\gt0\) only`, S`everywhere`], 0),
      "f′(x) = 6x² − 6.", [S`\(6(x-1)(x+1)\gt0\) outside \([-1,1]\).`], S`\(x\lt-1\) or \(x\gt1\)`),
    q("count", S`On how many separate intervals is \(f(x)=x^3-3x^2\) increasing?`, num(2),
      "f′(x) = 3x(x − 2).", [S`Positive on \((-\infty,0)\) and \((2,\infty)\).`], S`\(2\)`),
    q("always", S`Describe \(f(x)=x^3+3x\).`, choice(["increasing everywhere", "decreasing everywhere", "increasing, then decreasing", "decreasing, then increasing"], 0),
      "Look at the sign of f′.", [S`\(f'(x)=3x^2+3\gt0\) for all \(x\).`], "increasing everywhere"),
    q("turn", S`At what positive \(x\) does \(f(x)=x^3-27x\) change from decreasing to increasing?`, num(3),
      "f′(x) = 3x² − 27.", [S`\(x^2=9\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Always increasing", S`For which values of \(k\) is \(f(x)=x^3-kx^2+3x\) increasing for all \(x\)?`,
      [S`\(f'(x)=3x^2-2kx+3\) must never be negative.`, S`A quadratic opening up is never negative when its discriminant is at most 0: \(4k^2-36\le0\).`, S`So \(k^2\le9\).`],
      S`\(-3\le k\le3\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3 * x, color: "violet" }, { f: (x) => x ** 3 - 5 * x * x + 3 * x, color: "amber" }], points: [{ x: 1, y: 1, label: "k = 3: levels off at (1, 1)", color: "red" }], step: { x: 1, y: 2 } })],
    ["A function from its sign chart", S`Find a cubic with \(f(0)=1\), \(f'\gt0\) for \(x\lt-1\) and \(x\gt2\), and \(f'\lt0\) on \((-1,2)\).`,
      [S`Choose \(f'(x)=6(x+1)(x-2)=6x^2-6x-12\).`, S`Reverse the power rule: \(f(x)=2x^3-3x^2-12x+C\), and \(f(0)=1\) gives \(C=1\).`],
      S`for example \(f(x)=2x^3-3x^2-12x+1\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -22, ymax: 12 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 12 * x + 1, color: "violet" }], points: [{ x: -1, y: 8, label: "(−1, 8)", color: "red" }, { x: 2, y: -19, label: "(2, −19)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }], step: { x: 1, y: 4 } })],
  ], [
    q("hard", S`\(f(x)=x^4-8x^3\) is decreasing for all \(x\lt a\). Find \(a\).`, num(6),
      "f′(x) = 4x²(x − 6); the zero at 0 does not change the sign.", [S`\(f'\lt0\) for \(x\lt6\), \(x\ne0\).`], S`\(6\)`),
    q("hard", S`\(f(x)=x+\dfrac4x\) is decreasing on \((0,b)\). Find \(b\).`, num(2),
      "f′(x) = 1 − 4/x².", [S`\(1-\frac4{x^2}\lt0\iff x^2\lt4\).`], S`\(2\)`),
    q("hard", S`What is the largest value of \(k\) for which \(f(x)=x^3-kx\) is increasing for all \(x\)?`, num(0),
      "f′(x) = 3x² − k ≥ 0 for all x.", [S`Need \(-k\ge0\).`], S`\(0\)`),
  ]),

  wrapUp({
    qas: [
      ["Why test only one value per interval?", "A polynomial f′ is continuous, so it can't change sign without passing through 0; between consecutive zeros its sign is constant."],
      ["Is f increasing at a critical number?", "We leave critical numbers out: the intervals are open. At x = c the tangent is horizontal."],
      ["Can f be increasing while its values are negative?", "Yes. Increasing is about direction, not height: f(x) = x on (−5, −1) is negative and increasing."],
      ["What changes for rational functions?", "Cut the number line at the vertical asymptotes too: the sign of f′ can change there even though f′ is never 0."],
      ["How does this help sketching?", "The sign chart shows where the graph rises and falls and where it turns — the skeleton of the sketch."],
    ],
    summary: [
      "f′ > 0 ⇒ f increasing; f′ < 0 ⇒ f decreasing.",
      "Critical numbers: f′ = 0 or f′ not defined.",
      "Test one value in each interval.",
      "Rational functions: cut at asymptotes too.",
    ],
    next: "3.2 uses the sign chart to find maximums and minimums.",
  }),
];
