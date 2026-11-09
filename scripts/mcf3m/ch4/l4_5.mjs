// MCF3M 4.5 — Maximum and Minimum Problems: projectile maximum, fencing area, revenue with price changes,
// two numbers, power in a circuit; vertex by completing the square or zeros.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "4.5 Maximum and Minimum Problems";

export const blocks = () => [
  intro({
    icon: "🏔️",
    title: "Maximum and Minimum Problems",
    overview: S`Many real questions ask for the <b>best</b> value: the greatest height, the largest area, the highest revenue, the smallest cost. When the quantity is modelled by a quadratic, the best value is at the <b>vertex</b>: a maximum if the parabola opens down, a minimum if it opens up. You can find the vertex by completing the square, by averaging the zeros, or by partial factoring — and then you must interpret it: both the optimal value and the input that produces it.`,
    goals: [
      "write a quadratic model for a maximum or minimum situation;",
      "find the vertex by completing the square, by the zeros, or by partial factoring;",
      "state both the optimal value and the input that produces it, with units;",
      "solve revenue problems with price increases or decreases;",
      "check that the optimum is within the allowed domain.",
    ],
    curriculum: "A3.3 (solve problems arising from real-world applications, given the algebraic representation of a quadratic function, involving maximum height and other optimal values), A2.4, A2.11",
    prior: [
      [S`Vertex of \(y=-2(x-5)^2+40\)?`, S`\((5,\,40)\), a maximum.`],
      [S`Zeros of \(y=x(30-x)\)?`, S`\(0\) and \(30\); axis \(x=15\).`],
      [S`Complete the square: \(-x^2+8x\).`, S`\(-(x-4)^2+16\).`],
    ],
    words: [
      ["Optimal value", "the maximum or minimum of the quantity", "largest area 200 m²"],
      ["Optimal input", "the value of the variable giving the optimum", "width 10 m"],
      ["Revenue", "price × number sold", "\\(R=(10+x)(500-20x)\\)"],
      ["Maximum", "vertex of a parabola opening down", "a < 0"],
      ["Minimum", "vertex of a parabola opening up", "a > 0"],
    ],
  }),

  section("📌 Three ways to find the vertex", S`
  ${table(["Method", "Best when", "Example: \\(A=x(40-2x)\\)"], [
    ["Average the zeros", "the model is in factored form", "zeros 0 and 20 → x = 10"],
    ["Complete the square", "standard form, vertex needed exactly", "\\(-2(x-10)^2+200\\)"],
    ["Partial factoring / x = −b/(2a)", "quick check from standard form", "\\(-2x^2+40x\\): x = 40/4 = 10"],
  ])}
  ${keyIdea(S`A complete answer gives <b>both</b> numbers: "The maximum area is \(200\) m², when the width is \(10\) m." Always check the input is allowed (a negative price or a width larger than the fence makes no sense).`)}
  ${plane({ view: { xmin: -1, xmax: 21, ymin: -10, ymax: 220 }, curves: [{ f: (x) => x * (40 - 2 * x), a: 0, b: 20, color: "violet" }], points: [{ x: 10, y: 200, label: "max (10, 200)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "gray" }, { x: 20, y: 0, label: "(20, 0)", color: "gray" }], step: { x: 2, y: 20 } }, "A = x(40 − 2x): the maximum is midway between the zeros.")}`),

  widget("revenueLab", { init: [12, 500, 1, 20] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The maximum is the y-value of the vertex; the x-value tells you WHEN or WHERE it happens.",
    "In revenue problems, the new price is (old price + x) and the new quantity is (old quantity − rate·x).",
    "Answer the question asked: 'what price?' needs the price, not just x.",
    "Check the optimum lies in the domain (e.g. widths between 0 and half the fence).",
    "A parabola opening up has a minimum, not a maximum.",
  ])}`),

  examples([
    ["Maximum height", S`A ball's height is \(h(t)=-5t^2+30t+2\) m. Find its maximum height and when it occurs.`,
      [S`<b>Plan.</b> \(a=-5<0\): the vertex is a maximum.`,
        S`<b>Complete the square.</b> \(-5(t^2-6t)+2=-5(t^2-6t+9-9)+2=-5(t-3)^2+45+2\).`,
        S`<b>Vertex form.</b> \(h=-5(t-3)^2+47\).`,
        S`<b>Answer.</b> Maximum \(47\) m at \(t=3\) s.`,
        S`<b>Check.</b> \(h(3)=-45+90+2=47\) ✓; symmetric: \(h(2)=h(4)=42\) ✓`],
      S`47 m at 3 s`,
      plane({ view: { xmin: -0.3, xmax: 6.5, ymin: -2, ymax: 52 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 2, a: 0, b: 6.06, color: "violet" }], points: [{ x: 3, y: 47, label: "(3, 47)", color: "amber" }, { x: 2, y: 42, label: "(2, 42)", color: "gray" }, { x: 4, y: 42, label: "(4, 42)", color: "gray" }], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" })],

    ["Fencing a rectangle", S`A farmer has \(120\) m of fencing for a rectangular field divided into two equal parts by one fence parallel to the width. Find the maximum total area.`,
      [S`<b>Model.</b> Let the width be \(w\) (three fences of length \(w\)); the length is \(\frac{120-3w}2=60-1.5w\).`,
        S`<b>Area.</b> \(A=w(60-1.5w)\).`,
        S`<b>Zeros.</b> \(w=0\) and \(w=40\); vertex at \(w=20\).`,
        S`<b>Maximum.</b> \(A=20(60-30)=600\) m²; dimensions \(20\) m by \(30\) m.`,
        S`<b>Check.</b> \(w=19\): \(19(31.5)=598.5<600\) ✓`],
      S`600 m² with width 20 m and length 30 m`,
      plane({ view: { xmin: -1, xmax: 42, ymin: -20, ymax: 660 }, curves: [{ f: (w) => w * (60 - 1.5 * w), a: 0, b: 40, color: "violet" }], points: [{ x: 20, y: 600, label: "(20, 600)", color: "amber" }], step: { x: 5, y: 100 }, xlabel: "w (m)", ylabel: "A (m²)" })],

    ["Revenue with price increases", S`A gym charges \(30\) dollars a month and has \(600\) members. For every \(1\)-dollar increase, \(10\) members leave. What price maximizes revenue?`,
      [S`<b>Model.</b> After \(x\) increases: price \(30+x\), members \(600-10x\). \(R=(30+x)(600-10x)\).`,
        S`<b>Zeros.</b> \(x=-30\) and \(x=60\); vertex at \(x=\frac{-30+60}2=15\).`,
        S`<b>Optimum.</b> Price \(30+15=45\) dollars, members \(600-150=450\).`,
        S`<b>Maximum revenue.</b> \(45\times450=20\,250\) dollars per month.`,
        S`<b>Check.</b> At \(x=14\): \(44\times460=20\,240\); at \(x=16\): \(46\times440=20\,240\) ✓ both smaller.`],
      S`45 dollars per month (revenue 20 250 dollars)`,
      plane({ view: { xmin: -32, xmax: 62, ymin: -1000, ymax: 22000 }, curves: [{ f: (x) => (30 + x) * (600 - 10 * x), a: -30, b: 60, color: "violet" }], points: [{ x: 15, y: 20250, label: "(15, 20250)", color: "amber" }, { x: 0, y: 18000, label: "(0, 18000)", color: "blue" }], step: { x: 10, y: 4000 } })],

    ["Two numbers", S`Two numbers differ by \(12\). Find the numbers whose product is as small as possible.`,
      [S`<b>Model.</b> Numbers \(n\) and \(n+12\); product \(P=n(n+12)=n^2+12n\).`,
        S`<b>Opens up.</b> \(a=1>0\): the vertex is a minimum.`,
        S`<b>Complete the square.</b> \(P=(n+6)^2-36\): minimum \(-36\) at \(n=-6\).`,
        S`<b>Numbers.</b> \(-6\) and \(6\).`,
        S`<b>Check.</b> \(-6\times6=-36\); try \(-5\) and \(7\): \(-35>-36\) ✓`],
      S`−6 and 6 (product −36)`,
      plane({ view: { xmin: -14, xmax: 3, ymin: -40, ymax: 15 }, curves: [{ f: (n) => n * n + 12 * n, color: "violet" }], points: [{ x: -6, y: -36, label: "(−6, −36)", color: "amber" }], step: { x: 2, y: 5 } })],

    ["Power in a circuit", S`A device in a \(24\) V circuit with resistance \(1.5\) Ω uses power \(P=24I-1.5I^2\) watts at current \(I\) amperes. Find the current that gives maximum power.`,
      [S`<b>Opens down.</b> \(a=-1.5\).`,
        S`<b>Zeros.</b> \(I(24-1.5I)=0\Rightarrow I=0\) or \(I=16\).`,
        S`<b>Vertex.</b> \(I=8\) A: \(P=192-96=96\) W.`,
        S`<b>Check by completing the square.</b> \(-1.5(I^2-16I+64)+96=-1.5(I-8)^2+96\) ✓`],
      S`8 A gives the maximum power, 96 W`,
      plane({ view: { xmin: -1, xmax: 17, ymin: -5, ymax: 110 }, curves: [{ f: (i) => 24 * i - 1.5 * i * i, a: 0, b: 16, color: "violet" }], points: [{ x: 8, y: 96, label: "(8, 96)", color: "amber" }], step: { x: 2, y: 10 }, xlabel: "I (A)", ylabel: "P (W)" })],
  ]),

  practice([
    q("height", S`\(h(t)=-5t^2+40t+3\). Enter the maximum height (m).`, num(83), "Vertex t = 4.", [S`\(-80+160+3=83\).`], S`\(83\)`),
    q("area", S`A rectangle has perimeter \(64\) m. Enter its maximum area (m²).`, num(256), "A = x(32 − x).", [S`Vertex \(x=16\): \(256\).`], S`\(256\)`),
    q("revenue", S`\(R=(20+x)(400-10x)\). Enter the \(x\) giving maximum revenue.`, num(10), "Zeros −20 and 40.", [S`\(x=10\).`], S`\(10\)`),
    q("numbers", S`Two numbers sum to \(30\). Enter their maximum product.`, num(225), "n(30 − n).", [S`\(n=15\): \(225\).`], S`\(225\)`),
    q("minmax", S`Does \(y=3x^2-12x+20\) have a maximum or a minimum?`, choice(["minimum", "maximum", "neither", "both"], 0), "a > 0.", [S`Opens up: minimum \(8\) at \(x=2\).`], S`minimum`),
  ]),

  ...hard([
    ["A price decrease", S`A theatre sells \(300\) tickets at \(40\) dollars. Each \(2\)-dollar decrease sells \(30\) more tickets. Find the price for maximum revenue.`,
      [S`<b>Model.</b> After \(x\) decreases: price \(40-2x\), tickets \(300+30x\): \(R=(40-2x)(300+30x)\).`,
        S`<b>Zeros.</b> \(x=20\) and \(x=-10\); vertex \(x=5\).`,
        S`<b>Optimum.</b> Price \(30\) dollars, \(450\) tickets, revenue \(13\,500\) dollars.`,
        S`<b>Check.</b> \(x=4\): \(32(420)=13\,440\); \(x=6\): \(28(480)=13\,440\) ✓`],
      S`30 dollars (revenue 13 500 dollars)`,
      plane({ view: { xmin: -11, xmax: 21, ymin: -500, ymax: 15000 }, curves: [{ f: (x) => (40 - 2 * x) * (300 + 30 * x), a: -10, b: 20, color: "violet" }], points: [{ x: 5, y: 13500, label: "(5, 13500)", color: "amber" }], step: { x: 5, y: 3000 } })],
    ["Fence along a river", S`\(200\) m of fencing encloses a rectangle along a straight river (no fence on the river side). Find the maximum area and dimensions.`,
      [S`<b>Model.</b> Two widths \(w\), length \(200-2w\): \(A=w(200-2w)\).`,
        S`<b>Vertex.</b> Zeros \(0\) and \(100\): \(w=50\).`,
        S`<b>Answer.</b> \(50\) m by \(100\) m, area \(5000\) m².`],
      S`5000 m² (50 m × 100 m)`],
  ], [
    q("hard", S`A store sells \(500\) items at \(10\) dollars; each \(0.50\)-dollar increase loses \(20\) sales. Enter the optimal price (dollars).`, num(11.25, 0.001), "R = (10 + 0.5x)(500 − 20x).", [S`Zeros \(x=-20\) and \(25\): \(x=2.5\).`, S`Price \(10+1.25=11.25\).`], S`\(11.25\)`),
    q("hard", S`Two numbers differ by \(8\). Enter the minimum of their product.`, num(-16), "n(n + 8) = (n + 4)² − 16.", [S`\(-16\).`], S`\(-16\)`),
    q("hard", S`\(P=18I-2I^2\). Enter the maximum power.`, num(40.5, 1e-9), "Vertex I = 4.5.", [S`\(81-40.5=40.5\).`], S`\(40.5\)`),
    q("hard", S`A rectangle has two sides on the positive axes and its opposite corner on the line \(y=10-2x\). Enter its maximum area.`, num(12.5, 1e-9), "A = x(10 − 2x).", [S`Zeros \(0\) and \(5\): \(x=2.5\), \(A=2.5(5)=12.5\).`], S`\(12.5\)`),
    q("hard", S`A cost model is \(C(x)=0.5x^2-30x+800\) dollars. Enter the minimum cost.`, num(350), "Vertex x = 30.", [S`\(450-900+800=350\).`], S`\(350\)`),
  ]),

  wrapUp({
    qas: [
      ["Where is the maximum or minimum of a quadratic?", "At the vertex: maximum if a < 0, minimum if a > 0."],
      ["What are the fastest ways to find the vertex?", "Average the zeros, complete the square, or use x = −b/(2a)."],
      ["How do I set up a revenue model?", "R = (new price)(new quantity), each written in terms of the number of changes x."],
      ["What makes an answer complete?", "Both the optimal value and the input that gives it, with units."],
      ["Why check the domain?", "The vertex might fall where the model does not make sense."],
    ],
    summary: [
      "Optimum = vertex.",
      "Factored form → average the zeros; standard form → complete the square.",
      "Revenue: (price)(quantity).",
      "State the value and where it occurs.",
    ],
    next: "4.6 reviews chapter 4.",
  }),
];
