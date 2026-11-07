// MCV4U 3.2 — Maxima and Minima: local extrema and the first derivative test, critical numbers where f′ = 0 or f′
// does not exist, critical numbers that are not extrema, and absolute extrema on a closed interval (endpoints too)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "3.2 Maxima and Minima";
export const ID = "2278882a-3de0-417a-aa64-33738127b032";

const S = String.raw;
const h = (x) => 0.1 * x ** 3 - 1.5 * x * x + 6 * x + 10;
export const blocks = () => [
  intro({
    icon: "⛰️",
    title: "Maxima and Minima",
    overview: S`A <strong>local maximum</strong> is a point higher than every nearby point — a hilltop; a <strong>local minimum</strong> is a valley floor. Where a smooth graph turns, its tangent is horizontal, so local extrema can only occur at <strong>critical numbers</strong>: where \(f'(x)=0\) or \(f'(x)\) does not exist. The <strong>first derivative test</strong> decides which: if \(f'\) changes from \(+\) to \(-\), it is a maximum; from \(-\) to \(+\), a minimum; no change, neither. On a closed interval \([a,b]\) the <strong>absolute</strong> maximum and minimum are found by comparing \(f\) at the critical numbers <em>and</em> at the endpoints.`,
    goals: [
      "distinguish local and absolute extrema;",
      "find critical numbers, including where f′ does not exist;",
      "classify critical points with the first derivative test;",
      "recognize critical numbers that are not extrema;",
      "find absolute extrema on a closed interval.",
    ],
    curriculum: "B1.2 (determine local maximum and minimum points using the first derivative), B1.3 (recognize that critical points are not always extrema)",
    prior: [
      [S`Where is \(f(x)=x^3-12x+1\) increasing?`, S`On \((-\infty,-2)\) and \((2,\infty)\).`],
      [S`Derivative of \(x^{2/3}\)?`, S`\(\frac23x^{-1/3}\).`],
      [S`Value of \(x^3-3x\) at \(x=-1\)?`, S`\(2\).`],
    ],
    words: [
      ["Local maximum", "\\(f(c)\\ge f(x)\\) for all x near c", "a hilltop"],
      ["Absolute maximum", "\\(f(c)\\ge f(x)\\) for all x in the domain or interval", "the highest point"],
      ["Critical point", "\\((c,f(c))\\) where \\(f'(c)=0\\) or \\(f'(c)\\) does not exist", ""],
      ["First derivative test", "classify c by the sign change of \\(f'\\)", "+ → − is a max"],
    ],
  }),

  section("📌 The first derivative test", S`
  ${table(["Sign of f′ around c", "Shape", "Conclusion"], [
    ["\\(+\\) then \\(-\\)", "rises, then falls", "local maximum at c"],
    ["\\(-\\) then \\(+\\)", "falls, then rises", "local minimum at c"],
    ["same sign on both sides", "levels off, keeps going", "no extremum"],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 3.2, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 * x ** 3 - 9 * x * x + 12 * x, color: "violet" }, { f: () => 5, color: "green", a: 0.4, b: 1.6 }, { f: () => 4, color: "green", a: 1.4, b: 2.6 }], points: [{ x: 1, y: 5, label: "local max (1, 5)", color: "red" }, { x: 2, y: 4, label: "local min (2, 4)", color: "blue" }], step: { x: 0.5, y: 1 } }, "f(x) = 2x³ − 9x² + 12x: horizontal tangents at the local maximum and the local minimum.")}
  ${keyIdea(S`Local extrema occur only at critical numbers, but not every critical number gives one — use the sign of \(f'\) on each side. For absolute extrema on \([a,b]\): evaluate \(f\) at every critical number in the interval and at both endpoints; the largest value is the absolute maximum, the smallest the absolute minimum.`)}`),

  section("📌 Explore", S`<p>Choose a function and drag the endpoints of the interval. The candidates are the critical numbers inside the interval (blue) and the endpoints (amber); the winners are labelled. Make an endpoint the absolute maximum, then try \(f(x)=x^3\), whose critical number is not an extremum.</p>`),

  widget("extremaLab", { init: { fn: "quartic", a: -1.5, b: 2.5 } }),

  section("📌 Local or absolute?", S`
  <p>A local maximum need not be the highest point overall, and on a closed interval the absolute extremes are often at the endpoints. Always list every candidate in a table before deciding.</p>
  ${watchOut([
    "f′(c) = 0 does not guarantee an extremum: f(x) = x³ levels off at 0 and keeps rising.",
    "Critical numbers also include places where f′ does not exist, such as corners and cusps.",
    "On a closed interval, never forget the endpoints.",
    "Only critical numbers inside the interval are candidates.",
    "Give the extreme value (the y-value) and where it happens (the x-value).",
  ])}`),

  examples([
    ["The first derivative test", S`Find and classify the critical points of \(f(x)=2x^3-9x^2+12x\).`,
      [S`<b>Rule: the first derivative test.</b> At a critical number \(c\): if \(f'\) changes from \(+\) to \(-\), \(f(c)\) is a local maximum; from \(-\) to \(+\), a local minimum; no change, neither.`,
        S`<b>Differentiate and factor.</b> \(f'(x)=6x^2-18x+12=6(x^2-3x+2)=6(x-1)(x-2)\). Critical numbers: \(x=1\) and \(x=2\).`,
        S`<b>Sign chart.</b> ${chart({ cuts: [[1, "1"], [2, "2"]], factors: [["x-1", (x) => x - 1], ["x-2", (x) => x - 2]], d: ["f'(x)", (x) => 6 * x * x - 18 * x + 12], tests: [0, 1.5, 3] })}`,
        S`<b>The y-values.</b> \(f(1)=2-9+12=5\) and \(f(2)=16-36+24=4\).`,
        S`<b>Check with nearby values.</b> \(f(0.9)=4.968\lt5\) and \(f(1.1)=4.972\lt5\), so \((1,5)\) is higher than its neighbours ✓. \(f(1.9)=4.028\) and \(f(2.1)=4.032\) are both above 4 ✓`],
      S`local maximum \((1,5)\); local minimum \((2,4)\)`,
      plane({ view: { xmin: -0.5, xmax: 3, ymin: -2, ymax: 9 }, curves: [{ f: (x) => 2 * x ** 3 - 9 * x * x + 12 * x, color: "violet" }], points: [{ x: 1, y: 5, label: "max (1, 5)", color: "red" }, { x: 2, y: 4, label: "min (2, 4)", color: "blue" }], lines: [{ m: 0, b: 5, color: "gray", dash: true }, { m: 0, b: 4, color: "gray", dash: true }], step: { x: 0.5, y: 1 } }, "Dashed: the horizontal tangents at the two critical points.")],
    ["Absolute extrema on an interval", S`Find the absolute extrema of \(f(x)=x^3-3x^2-9x+2\) on \([-2,4]\).`,
      [S`<b>Rule: the closed interval method.</b> A continuous function on a closed interval \([a,b]\) has an absolute maximum and minimum. They occur at critical numbers inside the interval or at the endpoints, so compare \(f\) at all of these.`,
        S`<b>Critical numbers.</b> \(f'(x)=3x^2-6x-9=3(x^2-2x-3)=3(x-3)(x+1)\). Zeros \(x=-1\) and \(x=3\), both inside \([-2,4]\).`,
        S`<b>Evaluate at every candidate.</b> ${tv(["\\(x\\)", "\\(-2\\) (endpoint)", "\\(-1\\) (critical)", "\\(3\\) (critical)", "\\(4\\) (endpoint)"], ["\\(f(x)\\)", "\\(-8-12+18+2=0\\)", "\\(-1-3+9+2=7\\)", "\\(27-27-27+2=-25\\)", "\\(64-48-36+2=-18\\)"])}`,
        S`<b>Compare.</b> The largest value in the table is 7 and the smallest is \(-25\).`,
        S`<b>Check with the graph.</b> No point of the curve on \([-2,4]\) rises above 7 or falls below \(-25\). The right endpoint \((4,-18)\) is not the lowest point, because the curve has already turned up after \(x=3\) ✓`],
      S`absolute maximum 7 at \(x=-1\); absolute minimum \(-25\) at \(x=3\)`,
      plane({ view: { xmin: -2.5, xmax: 4.5, ymin: -28, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 2, a: -2, b: 4, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: -1, y: 7, label: "max (−1, 7)", color: "green" }, { x: 3, y: -25, label: "min (3, −25)", color: "red" }, { x: 4, y: -18, label: "(4, −18)", color: "amber" }], step: { x: 1, y: 4 } }, "Only the part on [−2, 4] is drawn; the endpoints are amber.")],
    ["A critical number that is not an extremum", S`Classify the critical point of \(f(x)=(x-1)^3+2\).`,
      [S`<b>Critical number.</b> By the chain rule \(f'(x)=3(x-1)^2\), which is 0 only at \(x=1\). The point is \((1,f(1))=(1,2)\).`,
        S`<b>Apply the first derivative test.</b> \((x-1)^2\) is a square, so it is positive on both sides of 1. ${chart({ cuts: [[1, "1"]], d: ["f'(x)", (x) => 3 * (x - 1) ** 2] })}`,
        S`<b>Conclusion.</b> \(f'\) does not change sign, so \(f\) keeps rising through \(x=1\). The tangent is horizontal there, but the point is neither a maximum nor a minimum.`,
        S`<b>Check.</b> \(f(0)=1\lt2\lt f(2)=3\): points on the left are lower and points on the right are higher, so \((1,2)\) cannot be a peak or a valley ✓`],
      S`\((1,2)\) is a critical point but neither a maximum nor a minimum`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => (x - 1) ** 3 + 2, color: "violet" }, { f: () => 2, color: "green", a: 0.3, b: 1.7 }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "amber" }, { x: 2, y: 3, label: "(2, 3)", color: "amber" }], step: { x: 0.5, y: 1 } }, "Green: the horizontal tangent at (1, 2). The curve passes through it.")],
    ["Where f′ does not exist", S`Find the critical numbers of \(f(x)=x^{2/3}\) and classify them.`,
      [S`<b>Definition.</b> A critical number is a value \(c\) in the domain where \(f'(c)=0\) or \(f'(c)\) does not exist. So check both kinds.`,
        S`<b>Differentiate.</b> Power rule: \(f'(x)=\tfrac23x^{-1/3}=\dfrac{2}{3\sqrt[3]{x}}\).`,
        S`<b>Find the critical numbers.</b> The numerator is 2, so \(f'(x)\) is never 0. At \(x=0\) the denominator is 0, so \(f'(0)\) does not exist. But \(f(0)=0\) is defined, so \(x=0\) is a critical number.`,
        S`<b>Sign chart.</b> \(\sqrt[3]{x}\) has the sign of \(x\). ${chart({ cuts: [[0, "0"]], dne: [0], d: ["f'(x)", (x) => 2 / (3 * Math.cbrt(x))] })}`,
        S`<b>Shape at 0.</b> The slopes become steeper and steeper on both sides (\(f'(x)\to\pm\infty\)), so the graph has a sharp point there, called a cusp.`,
        S`<b>Check.</b> \(f(x)=\left(\sqrt[3]x\right)^2\ge0\) for every \(x\), and \(f(0)=0\). So \((0,0)\) is the lowest point of the whole graph ✓`],
      S`critical number \(x=0\): local (and absolute) minimum \((0,0)\), at a sharp point called a cusp`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => Math.cbrt(x * x), color: "violet" }], points: [{ x: 0, y: 0, label: "cusp (0, 0)", color: "red" }, { x: -1, y: 1, label: "(−1, 1)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["A track profile", S`A roller-coaster track has height \(h(x)=0.1x^3-1.5x^2+6x+10\) m for \(0\le x\le12\). Find the highest and lowest points.`,
      [S`<b>Plan.</b> The track is a continuous function on the closed interval \([0,12]\). Its highest and lowest points are among the critical numbers and the endpoints.`,
        S`<b>Critical numbers.</b> \(h'(x)=0.3x^2-3x+6=0.3(x^2-10x+20)\). The quadratic formula gives \(x=\dfrac{10\pm\sqrt{100-80}}{2}=5\pm\sqrt5\approx2.76\) and \(7.24\). Both are in \([0,12]\).`,
        S`<b>Classify the turns.</b> ${chart({ from: [0, "0"], to: [12, "12"], cuts: [[5 - Math.sqrt(5), "5-\\sqrt5"], [5 + Math.sqrt(5), "5+\\sqrt5"]], d: ["h'(x)", (x) => 0.3 * x * x - 3 * x + 6], f: "h" })}`,
        S`<b>Compare all candidates.</b> ${tv(["\\(x\\)", "0", "\\(5-\\sqrt5\\approx2.76\\)", "\\(5+\\sqrt5\\approx7.24\\)", "12"], ["\\(h(x)\\) (m)", "10", "\\(\\approx17.24\\)", "\\(\\approx12.76\\)", "38.8"])}`,
        S`<b>Conclude.</b> The largest value is 38.8 m at the endpoint \(x=12\); the smallest is 10 m at the endpoint \(x=0\). The hill at \(x\approx2.76\) is only a local maximum, since the track later climbs higher.`,
        S`<b>Check.</b> \(h(12)=172.8-216+72+10=38.8\) ✓. The track keeps rising after \(x\approx7.24\), as the chart shows, so the end of the track is the top ✓`],
      S`highest 38.8 m at \(x=12\) (an endpoint); lowest 10 m at \(x=0\); the hill at \(x\approx2.76\) is only a local maximum`,
      plane({ view: { xmin: 0, xmax: 12.5, ymin: 0, ymax: 42 }, curves: [{ f: h, a: 0, b: 12, color: "violet" }], points: [{ x: 0, y: 10, label: "(0, 10)", color: "red" }, { x: 5 - Math.sqrt(5), y: h(5 - Math.sqrt(5)), label: "local max", color: "blue" }, { x: 5 + Math.sqrt(5), y: h(5 + Math.sqrt(5)), label: "local min", color: "blue" }, { x: 12, y: 38.8, label: "(12, 38.8)", color: "green" }], step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("local min", S`At what \(x\) does \(f(x)=x^2-8x+3\) have a local minimum?`, num(4),
      "f′(x) = 2x − 8.", [S`\(2x-8=0\).`], S`\(4\)`),
    q("local max", S`Find the local maximum value of \(f(x)=x^3-12x\).`, num(16),
      "f′ = 3x² − 12; + then − at x = −2.", [S`\(f(-2)=-8+24\).`], S`\(16\)`),
    q("absolute", S`Find the absolute maximum of \(f(x)=x^2-4x\) on \([0,5]\).`, num(5),
      "Compare f(0), f(2), f(5).", [S`\(0,\ -4,\ 5\).`], S`\(5\)`),
    q("meaning", S`If \(f'(c)=0\), then:`, choice(["c is a critical number, but f may have no extremum there", "f has a local maximum at c", "f has a local minimum at c", "f has an absolute extremum at c"], 0),
      "Think of x³ at 0.", ["The sign of f′ must change for an extremum."], "c is a critical number only"),
    q("absolute", S`Find the absolute minimum of \(f(x)=x^3-3x\) on \([0,2]\).`, num(-2),
      "Critical number 1 is inside.", [S`\(f(0)=0\), \(f(1)=-2\), \(f(2)=2\).`], S`\(-2\)`),
  ]),

  ...hard([
    ["Building in a minimum", S`Find \(a\) and \(b\) so that \(f(x)=x^3+ax^2+b\) has a local minimum at \((2,-1)\).`,
      [S`\(f'(x)=3x^2+2ax\); \(f'(2)=12+4a=0\Rightarrow a=-3\).`, S`\(f(2)=8-12+b=-1\Rightarrow b=3\).`, S`Check: \(f'(x)=3x(x-2)\) changes from \(-\) to \(+\) at 2 ✓.`],
      S`\(a=-3\), \(b=3\): \(f(x)=x^3-3x^2+3\)`,
      plane({ view: { xmin: -1.5, xmax: 3.5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3, color: "violet" }], points: [{ x: 2, y: -1, label: "min (2, −1)", color: "red" }, { x: 0, y: 3, label: "max (0, 3)", color: "blue" }], step: { x: 0.5, y: 1 } })],
    ["Absolute extrema of a rational function", S`Find the absolute extrema of \(f(x)=\dfrac{x}{x^2+9}\) on \([0,6]\).`,
      [S`\(f'(x)=\dfrac{9-x^2}{(x^2+9)^2}=0\Rightarrow x=3\) (inside).`, S`\(f(0)=0\), \(f(3)=\tfrac{3}{18}=\tfrac16\), \(f(6)=\tfrac{6}{45}\approx0.133\).`],
      S`absolute maximum \(\tfrac16\) at \(x=3\); absolute minimum 0 at \(x=0\)`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -0.03, ymax: 0.2 }, curves: [{ f: (x) => x / (x * x + 9), a: 0, b: 6, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 3, y: 1 / 6, label: "(3, 1/6)", color: "green" }, { x: 6, y: 6 / 45, label: "(6, 0.13)", color: "amber" }], step: { x: 1, y: 0.05 } })],
  ], [
    q("hard", S`Find the absolute maximum of \(f(x)=x^4-8x^2+3\) on \([-1,3]\).`, num(12),
      "Critical numbers in the interval: 0 and 2.", [S`\(f(-1)=-4\), \(f(0)=3\), \(f(2)=-13\), \(f(3)=12\).`], S`\(12\)`),
    q("hard", S`How many critical numbers does \(f(x)=x^4-10x^3\) have?`, num(2),
      "f′(x) = 4x³ − 30x² = 2x²(2x − 15).", [S`\(x=0\) and \(x=7.5\).`], S`\(2\)`),
    q("hard", S`Find the absolute minimum of \(f(x)=x+\dfrac9x\) on \([1,6]\).`, num(6),
      "f′ = 1 − 9/x².", [S`Critical number 3: \(f(1)=10\), \(f(3)=6\), \(f(6)=7.5\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must a local extremum be at a critical number?", "If f′(c) were positive or negative, f would still be rising or falling at c, so points just beside c would be higher or lower."],
      ["Why check the endpoints?", "On a closed interval the graph can keep rising right up to the end, so the highest point may be an endpoint where f′ is not 0."],
      ["Can a function have no absolute maximum?", "On an open interval or the whole real line, yes: x³ has none. On a closed interval, a continuous function always has both."],
      ["What is a cusp?", "A sharp point where the slopes approach ±∞ from the two sides, like x^(2/3) at 0; f′ does not exist there."],
      ["How do I present the answer?", "A table of candidates with their f-values, then state the extreme values and where they occur."],
    ],
    summary: [
      "Critical numbers: f′ = 0 or f′ does not exist.",
      "+ → − : max; − → + : min; no change: neither.",
      "Absolute on [a, b]: compare critical values and endpoints.",
      "Report the value and its location.",
    ],
    next: "3.3 uses the second derivative to describe how the graph bends.",
  }),
];
