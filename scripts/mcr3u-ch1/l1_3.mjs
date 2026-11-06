// MCR3U 1.3 — Parent Functions: f(x) = x, x², √x, 1/x, |x| — shapes, key points, domain, range, asymptotes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
const S = String.raw;

export const TITLE = "1.3 Parent Functions";
export const ID = "5c3e0001-0001-4001-8001-000000000103";

const P = {
  x: { f: (x) => x, color: "gray" },
  x2: { f: (x) => x * x, color: "blue" },
  sqrt: { f: (x) => Math.sqrt(x), a: 0, color: "green" },
  recip: { f: (x) => 1 / x, color: "red" },
  abs: { f: (x) => Math.abs(x), color: "amber" },
};

export const blocks = () => [
  intro({
    icon: "🌳",
    title: "Parent Functions",
    overview: String.raw`Five simple functions — \(f(x)=x\), \(x^2\), \(\sqrt{x}\), \(\frac1x\) and \(|x|\) — are the "parents" of most graphs in this course. Knowing their shapes, a few key points, and their domains and ranges lets you sketch hundreds of related graphs quickly. In this lesson you will learn each parent's shape and properties, recognise them from tables and graphs, and compare them.`,
    goals: [
      "sketch the five parent functions from key points;",
      "state the domain and range of each parent;",
      "describe intercepts, symmetry, asymptotes and where each increases or decreases;",
      "identify a parent function from a table or a graph;",
      "compare parents and solve simple equations between them.",
    ],
    curriculum: "A1.3 (explain the meanings of domain and range through investigation of f(x) = x, f(x) = x², f(x) = √x and f(x) = 1/x), A1.8 (the parent functions used for transformations, including f(x) = |x|)",
    prior: [
      [String.raw`What is \(\sqrt{9}\)? Is \(\sqrt{-9}\) a real number?`, String.raw`\(3\); no — no real number squared gives \(-9\).`],
      [String.raw`What is \(|{-5}|\)?`, String.raw`\(5\): absolute value is distance from 0.`],
      [String.raw`What is \(1\div0.01\)?`, String.raw`\(100\).`],
    ],
    words: [
      ["Parent function", "the simplest function of a family", "\\(f(x)=x^2\\)"],
      ["Asymptote", "a line the graph approaches but never reaches", "\\(y=0\\) for \\(\\frac1x\\)"],
      ["Increasing", "y gets larger as x moves right", "\\(\\sqrt x\\) for \\(x>0\\)"],
      ["Even / odd symmetry", "mirror in the y-axis / half-turn about the origin", "\\(x^2\\) / \\(\\frac1x\\)"],
    ],
  }),

  section("📌 Meet the parents", String.raw`
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: Object.values(P), step: { x: 1, y: 1 } }, "grey x · blue x² · green √x · red 1/x · amber |x|")}
  ${table(["Parent", "Key points", "Domain", "Range", "Feature"], [
    ["\\(f(x)=x\\)", "\\((-1,-1),(0,0),(1,1)\\)", "\\(\\mathbb R\\)", "\\(\\mathbb R\\)", "line, slope 1"],
    ["\\(f(x)=x^2\\)", "\\((\\pm1,1),(\\pm2,4),(0,0)\\)", "\\(\\mathbb R\\)", "\\(y\\ge0\\)", "vertex \\((0,0)\\)"],
    ["\\(f(x)=\\sqrt x\\)", "\\((0,0),(1,1),(4,2),(9,3)\\)", "\\(x\\ge0\\)", "\\(y\\ge0\\)", "starts at the origin"],
    ["\\(f(x)=\\frac1x\\)", "\\((\\pm1,\\pm1),(2,\\tfrac12),(\\tfrac12,2)\\)", "\\(x\\ne0\\)", "\\(y\\ne0\\)", "asymptotes \\(x=0,\\ y=0\\)"],
    ["\\(f(x)=|x|\\)", "\\((\\pm1,1),(\\pm2,2),(0,0)\\)", "\\(\\mathbb R\\)", "\\(y\\ge0\\)", "V, vertex \\((0,0)\\)"],
  ])}
  ${keyIdea(String.raw`Learn each parent by its <strong>key points</strong>. In the next lessons every transformation is done by moving those points.`)}`),

  section("📌 Explore", String.raw`<p>Choose each parent. The table shows its key points; the readout lists the domain, range and the features worth remembering.</p>`),

  widget("parentGallery", { start: "recip" }),

  section("📌 Why the restrictions?", String.raw`
  <p>\(\sqrt x\) is not a real number when \(x<0\), so its domain stops at 0. \(\frac1x\) is undefined at \(x=0\) (you cannot divide by 0); as \(x\) gets close to 0 the output becomes huge, so the graph hugs the line \(x=0\). As \(x\) gets very large, \(\frac1x\) gets close to 0, so the graph hugs \(y=0\).</p>
  ${table(["x", "0.1", "0.01", "0.001", "10", "100", "1000"], [["\\(\\frac1x\\)", "10", "100", "1000", "0.1", "0.01", "0.001"]])}
  ${watchOut([
    "√x means the positive root only, so the range of √x is y ≥ 0.",
    "1/x never equals 0, so 0 is not in its range.",
    "x² and |x| have the same domain and range but different shapes (curve vs V).",
    "Between 0 and 1, x² is smaller than x; beyond 1 it is larger.",
  ])}`),

  examples([
    ["Identify from a table", S`Which parent fits \(x:-2,-1,0,1,2\) and \(y:2,1,0,1,2\)?`,
      [S`<b>Look for features.</b> The outputs are never negative, and matching values appear on both sides of \(x=0\). That symmetry fits \(y=x^2\) or \(y=|x|\).`,
        S`<b>Compare the candidates.</b> ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["given \\(y\\)", "2", "1", "0", "1", "2"], ["\\(x^2\\)", "4", "1", "0", "1", "4"], ["\\(|x|\\)", "2", "1", "0", "1", "2"])}`,
        S`<b>Find the deciding value.</b> The candidates agree at \(x=-1,0,1\), so those rows cannot decide. At \(x=2\), \(x^2=4\) but the table shows 2. So \(x^2\) is ruled out.`,
        S`<b>Confirm.</b> Every entry of the given row matches \(|x|\) ✓. The first differences for \(x\ge0\) are all 1, which shows the straight arms of a V.`],
      S`\(f(x)=|x|\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x), color: "violet" }, { f: (x) => x * x, color: "gray" }], points: [{ x: -2, y: 2, label: "(−2, 2)", color: "amber" }, { x: -1, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2, label: "(2, 2)", color: "amber" }], step: { x: 1, y: 1 } }, "violet y = |x|, gray y = x²")],
    ["A domain restriction", S`Explain why \(f(x)=\sqrt x\) has domain \(x\ge0\), and find \(f(6.25)\).`,
      [S`<b>Meaning of a root.</b> \(\sqrt x\) is the non-negative number whose square is \(x\).`,
        S`<b>Why negatives fail.</b> Any real number squared is 0 or positive, so no real number squares to a negative value. For example, \(\sqrt{-4}\) is not real.`,
        S`<b>Why 0 and positives work.</b> \(\sqrt0=0\), and every positive number has a positive root. So the domain is exactly \(x\ge0\).`,
        S`<b>Evaluate.</b> \(\sqrt{6.25}=2.5\), because \(2.5\times2.5=6.25\).`,
        S`<b>Check on the graph.</b> The curve starts at \((0,0)\), has nothing to the left of the y-axis, and passes through \((6.25,2.5)\) ✓`],
      S`domain \(\{x\in\mathbb R\mid x\ge0\}\); \(f(6.25)=2.5\)`,
      plane({ view: { xmin: -2, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 4, y: 2, label: "(4, 2)" }, { x: 6.25, y: 2.5, label: "(6.25, 2.5)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Asymptotes", S`Describe \(f(x)=\frac1x\) near \(x=0\) and for large \(x\).`,
      [S`<b>At zero.</b> \(\frac10\) has no value, so \(x=0\) is not in the domain. We study what happens close to it.`,
        S`<b>Near zero.</b> ${tv(["\\(x\\)", "\\(-0.05\\)", "\\(-0.5\\)", "\\(0.5\\)", "\\(0.05\\)"], ["\\(\\frac1x\\)", "\\(-20\\)", "\\(-2\\)", "\\(2\\)", "\\(20\\)"])} Dividing 1 by a tiny number gives a huge result. The curve shoots up to the right of 0 and down to the left. This makes \(x=0\) a vertical asymptote.`,
        S`<b>Far from zero.</b> \(f(500)=0.002\) and \(f(-500)=-0.002\). Dividing 1 by a huge number gives almost 0, but never exactly 0. So \(y=0\) is a horizontal asymptote.`,
        S`<b>Check on the graph.</b> Both branches hug the axes without touching them, and each point such as \((2,0.5)\) has a partner \((0.5,2)\) ✓`],
      S`vertical asymptote \(x=0\), horizontal asymptote \(y=0\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [P.recip], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: -1, label: "(−1, −1)" }, { x: 0.5, y: 2 }, { x: 2, y: 0.5 }], step: { x: 1, y: 1 } })],
    ["Comparing parents", S`Compare \(x\), \(x^2\) and \(\sqrt x\) at \(x=0.25\) and \(x=4\).`,
      [S`<b>Evaluate each.</b> ${tv(["\\(x\\)", "\\(x^2\\)", "\\(x\\) itself", "\\(\\sqrt x\\)"], ["\\(0.25\\)", "\\(0.0625\\)", "\\(0.25\\)", "\\(0.5\\)"], ["\\(4\\)", "\\(16\\)", "\\(4\\)", "\\(2\\)"])}`,
        S`<b>Between 0 and 1.</b> Multiplying a fraction by itself makes it smaller, so \(x^2<x\). The root goes the other way, because \(0.5\times0.5=0.25\) shows the root must be larger. So \(x^2<x<\sqrt x\).`,
        S`<b>Above 1.</b> Multiplying by a number above 1 makes things larger, so \(x^2>x\), and the root is smaller. So \(\sqrt x<x<x^2\).`,
        S`<b>Where the order changes.</b> All three equal 1 at \(x=1\), since \(1^2=1=\sqrt1\). The graph shows them crossing at \((1,1)\) ✓`],
      S`for \(0<x<1\): \(x^2<x<\sqrt x\); for \(x>1\) the order reverses`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 4 }, curves: [P.x, P.x2, P.sqrt], points: [{ x: 1, y: 1, label: "(1, 1)" }], step: { x: 0.5, y: 0.5 } })],
    ["Choosing a model", S`A 120 km trip takes \(t\) hours at speed \(v\) km/h. Which parent describes \(t\) as a function of \(v\)? Find \(t\) when \(v=80\).`,
      [S`<b>Build the rule.</b> Distance = speed × time, so \(120=vt\). Solve for the output: \(t=\dfrac{120}v\).`,
        S`<b>Recognize the parent.</b> The variable is in the denominator, so this is \(y=\frac1x\) stretched vertically by 120.`,
        S`<b>Test with a table.</b> Doubling the speed should halve the time. ${tv(["\\(v\\) (km/h)", "30", "60", "120"], ["\\(t\\) (h)", "4", "2", "1"])}`,
        S`<b>Evaluate.</b> \(t=\dfrac{120}{80}=1.5\) h.`,
        S`<b>Check.</b> \(80\times1.5=120\) km ✓. In this context only \(v>0\) makes sense, so the graph shows only the right branch.`],
      S`a stretched \(y=\frac1x\); \(1.5\) h`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 6 }, curves: [{ f: (v) => 120 / v, a: 20, color: "violet" }], points: [{ x: 30, y: 4, label: "(30, 4)" }, { x: 60, y: 2, label: "(60, 2)" }, { x: 80, y: 1.5, label: "(80, 1.5)", color: "amber" }], step: { x: 10, y: 1 }, xlabel: "v (km/h)", ylabel: "t (h)" })],
  ]),

  practice([
    q("domain", String.raw`Which parent function has domain \(\{x\in\mathbb R\mid x\ne0\}\)?`, choice([String.raw`\(\frac1x\)`, String.raw`\(\sqrt x\)`, String.raw`\(|x|\)`, String.raw`\(x^2\)`], 0),
      "Which one divides by x?", [String.raw`\(\frac10\) is undefined.`], String.raw`\(\frac1x\)`),
    q("evaluate", String.raw`For \(f(x)=\sqrt x\), find \(f(2.25)\).`, num(1.5),
      "Which number squared is 2.25?", [String.raw`\(1.5^2=2.25\).`], String.raw`\(1.5\)`),
    q("increasing", "Which parent function is increasing for every x?", choice([String.raw`\(x\)`, String.raw`\(x^2\)`, String.raw`\(|x|\)`, String.raw`\(\frac1x\)`], 0),
      "Picture each graph from left to right.", [String.raw`\(x^2\) and \(|x|\) decrease for \(x<0\); \(\frac1x\) decreases on each branch.`], String.raw`\(x\)`),
    q("compare", String.raw`For \(x>0\), where do \(y=x^2\) and \(y=|x|\) meet?`, num(1),
      "Solve x² = x for x > 0.", [String.raw`\(x^2-x=0\Rightarrow x(x-1)=0\).`], String.raw`\(x=1\)`),
    q("range", String.raw`What is the range of \(f(x)=|x|\)?`, choice([String.raw`\(y\ge0\)`, String.raw`\(y\in\mathbb R\)`, String.raw`\(y>0\)`, String.raw`\(y\ne0\)`], 0),
      "Can |x| be 0? negative?", [String.raw`\(|0|=0\); never negative.`], String.raw`\(y\ge0\)`),
  ]),

  ...hard([
    ["Where two parents meet", String.raw`Solve \(\sqrt x=\frac x2\) and explain the result with a graph.`,
      [String.raw`Square both sides: \(x=\frac{x^2}{4}\Rightarrow x^2-4x=0\Rightarrow x(x-4)=0\).`, String.raw`Check: \(x=0\): \(0=0\) ✓. \(x=4\): \(\sqrt4=2=\frac42\) ✓.`, String.raw`Between 0 and 4 the root curve is above the line; after 4 it is below.`],
      String.raw`\(x=0\) or \(x=4\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 4 }, curves: [P.sqrt], lines: [{ m: 0.5, b: 0, color: "violet" }], points: [{ x: 0, y: 0 }, { x: 4, y: 2, label: "(4, 2)" }], step: { x: 1, y: 1 } })],
    ["An inequality between parents", String.raw`For which \(x\) is \(\frac1x>x\)?`,
      [String.raw`The graphs meet where \(\frac1x=x\), i.e. \(x^2=1\): \(x=1\) or \(x=-1\).`, String.raw`For \(0<x<1\): e.g. \(x=0.5\): \(2>0.5\) ✓. For \(x>1\): \(\frac12<2\) ✗.`, String.raw`For \(x<-1\): e.g. \(x=-2\): \(-0.5>-2\) ✓. For \(-1<x<0\): \(x=-0.5\): \(-2>-0.5\) ✗.`],
      String.raw`\(x<-1\) or \(0<x<1\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [P.recip], lines: [{ m: 1, b: 0, color: "gray" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: -1, label: "(−1, −1)" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", String.raw`How many points do \(y=\frac1x\) and \(y=x^2\) have in common?`, num(1),
      "x² ≥ 0, so only x > 0 can work.", [String.raw`\(\frac1x=x^2\Rightarrow x^3=1\Rightarrow x=1\).`], String.raw`\(1\)`),
    q("hard", String.raw`How many real solutions does \(|x|=x^2\) have?`, num(3),
      "Try x = 0, and x² = |x| for x ≠ 0.", [String.raw`\(x=0\), or \(|x|=1\): \(x=\pm1\).`], String.raw`\(3\)`),
    q("hard", String.raw`Solve \(\sqrt x=x-2\).`, num(4),
      "Square, solve, then check — one answer is extraneous.", [String.raw`\(x=x^2-4x+4\Rightarrow x^2-5x+4=0\Rightarrow x=1\) or \(x=4\).`, String.raw`\(x=1\): \(1\ne-1\) ✗; \(x=4\): \(2=2\) ✓.`], String.raw`\(x=4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why call them parents?", "Every graph in the family y = af(k(x − d)) + c is the parent moved, stretched or flipped. Know the parent and you know the whole family."],
      ["Is a vertical line ever a parent here?", "No — a vertical line is not a function."],
      ["Does 1/x ever cross its asymptotes?", "No. It approaches x = 0 and y = 0 without touching them."],
      ["Why is the range of x² and |x| the same?", "Both give 0 at x = 0 and positive values elsewhere, and both reach every positive number."],
      ["How do I remember √x?", "It is the top half of a sideways parabola: the inverse of x² for x ≥ 0 (lesson 1.5)."],
    ],
    summary: [
      "Five parents: x, x², √x, 1/x, |x|.",
      "Domains: all reals, except √x (x ≥ 0) and 1/x (x ≠ 0).",
      "Ranges: all reals for x; y ≥ 0 for x², √x, |x|; y ≠ 0 for 1/x.",
      "1/x has asymptotes x = 0 and y = 0.",
      "Memorise key points — they are what you transform.",
    ],
    next: "1.4 finds the domain and range of any function, including restrictions from a context.",
  }),
];
