// MPM2D 5.5 — Quadratic Word Problems (self-study format): maximum height and landing time, interval questions
// (when is the height above H?), maximum area with fixed fencing, maximum revenue, and a border/deck problem
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, roots } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.5 Quadratic Word Problems";

const S = String.raw;
const t1 = (19.6 - Math.sqrt(19.6 ** 2 - 4 * 4.9 * 13)) / 9.8, t2 = (19.6 + Math.sqrt(19.6 ** 2 - 4 * 4.9 * 13)) / 9.8;
export const blocks = () => [
  intro({
    icon: "🏀",
    title: "Quadratic Word Problems",
    overview: S`Quadratic models describe thrown objects, areas built from a fixed amount of material, and revenue when a price change affects sales. Every question about such a model is one of three kinds: a <strong>maximum or minimum</strong> (the vertex), a <strong>zero</strong> (when the quantity is 0), or a <strong>given value</strong> (solve the equation \(=H\)) — including “between which times is it above \(H\)?”. In this lesson you will decide which kind each question is, solve it with the right method, and state the answer in context.`,
    goals: [
      "decide whether a question needs the vertex, the zeros or a given value;",
      "find maximum heights, areas and revenues;",
      "find when an object reaches the ground or a given height;",
      "answer interval questions such as ‘for how long is it above 15 m?’;",
      "write a quadratic model from a description and reject roots that don't fit.",
    ],
    curriculum: "QR4 (solve problems arising from a realistic situation, using a quadratic model: maximum/minimum, zeros, and interpreting the solutions — including the time interval for which the value is above a given amount)",
    prior: [
      [S`Vertex of \(h=-5(t-3)^2+46\)?`, S`\((3,46)\): maximum \(46\).`],
      [S`Axis of \(y=-2x^2+12x\)?`, S`\(x=-\frac{12}{2(-2)}=3\).`],
      [S`Solve \(t^2-8t+12=0\).`, S`\(t=2\) or \(t=6\).`],
    ],
    words: [
      ["Model", "an equation that describes a situation", "\\(h=-4.9t^2+20t+1\\)"],
      ["Maximum / minimum", "the y-value of the vertex", ""],
      ["Interval", "the set of times between two roots", "\\(2\\lt t\\lt6\\)"],
      ["Revenue", "price × number sold", ""],
    ],
  }),

  section("📌 Which kind of question?", S`
  ${keyIdea(S`<strong>“Maximum”, “minimum”, “highest”, “greatest”?</strong> Find the vertex (axis \(x=-\frac{b}{2a}\), or complete the square). <strong>“Hits the ground”, “break-even”, “zero”?</strong> Solve \(=0\). <strong>“Reaches \(H\)”, “above \(H\)”, “below \(H\)”?</strong> Solve \(=H\): the object is above \(H\) <em>between</em> the two roots (for a parabola opening down). Then write a sentence with units.`)}
  ${plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0, b: 4.1, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true, label: "h = 15" }], points: [{ x: 2, y: 21.6, label: "maximum (vertex)", color: "blue" }, { x: 4.1, y: 0, label: "lands (zero)", color: "violet" }, { x: t1, y: 15, color: "red" }, { x: t2, y: 15, color: "red" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } }, "One model, three questions: the vertex, the zero, and the times when h = 15.")}`),

  section("📌 Explore: height intervals", S`<p>Change the launch speed, launch height and target height. The shaded band shows when the object is above the target.</p>`),

  widget("heightInterval", { init: [20, 2, 15] }),

  section("📌 Explore: maximum area", S`<p>With a fixed length of fencing, change the width. The area is a quadratic in the width, with its maximum halfway between the zeros.</p>`),

  widget("fenceArea", { init: 60 }),

  section("📌 Setting up and checking", S`
  ${watchOut([
    "Let the variable stand for something specific, with units: “let w be the width in metres”.",
    "Time before launch (t < 0) and negative lengths are rejected.",
    "For ‘how long is it above H?’, subtract the two roots.",
    "The vertex x-value answers ‘when’ or ‘what width’; the vertex y-value answers ‘how high’ or ‘what area’.",
    "Round at the end, and only as much as the context needs.",
  ])}`),

  examples([
    ["Maximum height and landing", S`A ball's height is \(h=-4.9t^2+19.6t+2\) (m, s). Find its maximum height and when it lands.`,
      [S`Axis: \(t=\frac{-19.6}{2(-4.9)}=2\); \(h=-4.9(4)+39.2+2=21.6\).`, S`Lands when \(h=0\): \(D=384.16+39.2=423.36\), \(\sqrt D\approx20.576\).`, S`\(t=\frac{-19.6-20.576}{-9.8}\approx4.10\) (the other root is negative).`],
      S`maximum \(21.6\) m at \(2\) s; lands after about \(4.10\) s`],
    ["Above a height (interval)", S`For the same ball, for how long is it more than \(15\) m above the ground?`,
      [S`Solve \(-4.9t^2+19.6t+2=15\), that is \(-4.9t^2+19.6t-13=0\).`, S`\(D=384.16-254.8=129.36\), \(\sqrt D\approx11.374\).`, S`\(t\approx0.84\) or \(t\approx3.16\). It is above \(15\) m for \(0.84\lt t\lt3.16\).`],
      S`about \(3.16-0.84=2.32\) s`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0, b: 4.1, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true, label: "h = 15" }], segs: [{ pts: [[t1, 0], [t2, 0]], color: "green" }], points: [{ x: t1, y: 15, label: "≈ 0.84 s", color: "red" }, { x: t2, y: 15, label: "≈ 3.16 s", color: "red" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } })],
    ["Maximum area", S`A farmer has \(80\) m of fencing for a rectangular pen along a river (no fence on the river side). Find the largest possible area.`,
      [S`Let \(w\) be the width (the two sides at right angles to the river). Length \(=80-2w\).`, S`\(A=w(80-2w)\): zeros \(w=0\) and \(w=40\), so the vertex is at \(w=20\).`, S`\(A=20(80-40)=800\).`],
      S`\(800\) m² (\(20\) m by \(40\) m)`,
      plane({ view: { xmin: -2, xmax: 42, ymin: -60, ymax: 900 }, curves: [{ f: (w) => w * (80 - 2 * w), a: 0, b: 40, color: "violet" }], points: [{ x: 20, y: 800, label: "(20, 800)", color: "blue" }, { x: 0, y: 0, color: "red" }, { x: 40, y: 0, label: "(40, 0)", color: "red" }], xlabel: "w (m)", ylabel: "A (m²)", step: { x: 5, y: 100 } })],
    ["Maximum revenue", S`A club sells \(200\) tickets at \(10\) dollars. For every \(1\) dollar price increase, \(10\) fewer tickets sell. What price gives the most revenue?`,
      [S`Let \(x\) be the number of 1-dollar increases: \(R=(10+x)(200-10x)\).`, S`Zeros \(x=-10\) and \(x=20\); vertex halfway at \(x=5\).`, S`\(R=(15)(150)=2250\).`],
      S`price \(15\) dollars, revenue \(2250\) dollars`],
    ["A border", S`A \(6\) m by \(4\) m pool has a deck of uniform width around it. The pool and deck together cover \(48\) m². How wide is the deck?`,
      [S`Let \(x\) be the width: \((6+2x)(4+2x)=48\).`, S`\(4x^2+20x+24=48\Rightarrow4x^2+20x-24=0\Rightarrow x^2+5x-6=0\).`, S`\((x+6)(x-1)=0\); reject \(x=-6\).`],
      S`the deck is \(1\) m wide`],
  ]),

  practice([
    q("maximum", S`A rocket's height is \(h=-5t^2+30t+1\) metres. What is its maximum height?`, num(46),
      "Axis t = −b/(2a).", [S`\(t=3\); \(h=-45+90+1=46\).`], S`\(46\) m`),
    q("zero", S`A stone's height is \(h=-5t^2+20t+25\). After how many seconds does it land?`, num(5),
      "Set h = 0 and divide by −5.", [S`\(t^2-4t-5=0\Rightarrow(t-5)(t+1)=0\).`, "Reject t = −1."], S`\(5\) s`),
    q("interval", S`A ball's height is \(h=-5t^2+40t\). For how many seconds is it at least \(60\) m high?`, num(4),
      "Solve h = 60 and subtract the roots.", [S`\(-5t^2+40t=60\Rightarrow t^2-8t+12=0\).`, S`\(t=2\) or \(t=6\): \(6-2=4\).`], S`\(4\) s`),
    q("area", S`What is the greatest area (m²) of a rectangle with perimeter \(36\) m?`, num(81),
      "Width w, length 18 − w.", [S`\(A=w(18-w)\), vertex \(w=9\).`, S`\(9\times9=81\).`], S`\(81\) m²`),
    q("numbers", S`The sum of a number and its square is \(56\). Find both possible numbers.`, roots(7, -8),
      "x² + x = 56.", [S`\(x^2+x-56=0\Rightarrow(x+8)(x-7)=0\).`], S`\(7\) or \(-8\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I know whether to find the vertex or solve?", "Look at the question word. ‘Maximum/minimum/greatest/least’ → vertex. ‘When does it reach / hit / equal’ → solve the equation for that value."],
      ["Why is the object above H between the two roots?", "For a parabola opening down, the graph is above the line y = H only between the two places it crosses it."],
      ["What if the equation h = H has no real roots?", "The object never reaches that height — the maximum is below H."],
      ["Why is the maximum area a square (with 4 sides of fence)?", "A = w(P/2 − w) has zeros 0 and P/2; the vertex is halfway, at w = P/4, which makes the length P/4 too."],
      ["Should I give exact or decimal answers?", "Real situations need decimals with units, rounded sensibly (to 0.01 s or 0.1 m). Keep exact values until the last step."],
    ],
    summary: [
      "Maximum/minimum → vertex.",
      "Ground/zero → solve = 0; given height → solve = H.",
      "Above H between the roots; duration = difference.",
      "Define the variable, reject impossible roots, answer with units.",
    ],
    next: "5.6 (enrichment) finds where a line meets a parabola.",
  }),
];
