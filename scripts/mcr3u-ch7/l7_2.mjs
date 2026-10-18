// MCR3U 7.2 — Geometric Sequences: common ratio, general term, recursive formula, discrete exponential graphs,
// finding a term number, finding a and r from two terms, applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.2 Geometric Sequences";
export const ID = "205d328e-8311-42c3-ba14-b2309892ebb8";
const S = String.raw;
const pts = (f, n) => Array.from({ length: n }, (_, i) => ({ x: i + 1, y: f(i + 1) }));
const f = (v, k = 3) => String(Math.round(v * 10 ** k) / 10 ** k);

export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Geometric Sequences",
    overview: S`In a <strong>geometric sequence</strong> you multiply by the same number, the common ratio \(r\), to get from one term to the next. Its general term is \(t_n=ar^{n-1}\) and its graph is a set of points on an exponential curve. In this lesson you will find the ratio, write general and recursive formulas, find a term number, and model situations such as bouncing balls and spreading messages.`,
    goals: [
      "recognise a geometric sequence and find its common ratio;",
      "write and use the general term t_n = a·r^(n − 1);",
      "write a recursive formula t_n = r·t_(n−1);",
      "find which term has a given value;",
      "find a and r from two terms and solve problems.",
    ],
    curriculum: "C1.4 (represent a sequence algebraically using a recursion formula, function notation or the formula for the nth term), C3.1 (identify sequences as arithmetic, geometric or neither), C3.2 (determine the formula for the general term of a geometric sequence and apply it)",
    prior: [
      [S`Evaluate \(3\cdot2^5\).`, "96."],
      [S`Solve \(2^k=256\).`, "k = 8."],
      ["What is 20% less than 150?", "120."],
    ],
    words: [
      ["Common ratio r", "\\(\\frac{t_n}{t_{n-1}}\\), the same for every n", ""],
      ["General term", "\\(t_n=ar^{n-1}\\)", ""],
      ["Recursive formula", "\\(t_1=a,\\ t_n=r\\,t_{n-1}\\)", ""],
      ["Alternating sequence", "a geometric sequence with r < 0; signs switch", ""],
    ],
  }),

  section("📌 Arithmetic vs geometric", S`
  ${table(["", "Arithmetic", "Geometric"], [["Step", "add d", "multiply by r"], ["Test", "\\(t_n-t_{n-1}\\) constant", "\\(\\frac{t_n}{t_{n-1}}\\) constant"], ["General term", "\\(a+(n-1)d\\)", "\\(ar^{n-1}\\)"], ["Graph", "points on a line", "points on an exponential curve"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 100 }, points: pts((n) => 3 * 2 ** (n - 1), 6), curves: [{ f: (x) => 3 * 2 ** (x - 1), a: 0.5, b: 6.5, color: "gray" }], step: { x: 1, y: 10 }, xlabel: "n", ylabel: "tₙ" }, "3, 6, 12, 24, 48, 96 lie on the exponential curve y = 3(2)^(x − 1)")}
  ${keyIdea(S`To find which term equals a value, set \(ar^{n-1}\) equal to it and write both sides as powers of the same base.`)}`),

  section("📌 Explore", S`<p>Try a ratio greater than 1, between 0 and 1, and negative. How does the graph change each time?</p>`),

  widget("geoLab", { init: [3, 2] }),

  section("📌 Watch out", watchOut([
    "r = (a term) ÷ (the term before it).",
    "The exponent is n − 1, not n.",
    "With a negative r, put r in brackets: (−2)^(n − 1).",
    "A percent decrease of p% gives r = 1 − p/100.",
  ])),

  examples([
    ["Identify and extend", "Is 5, 15, 45, 135, … geometric? Find the next term.",
      ["Each ratio is 3."],
      "405"],
    ["An alternating sequence", S`Find the general term of \(64,-32,16,\ldots\) and \(t_8\).`,
      [S`\(r=-\frac12\): \(t_n=64\left(-\frac12\right)^{n-1}\).`, S`\(t_8=64\left(-\frac12\right)^7=-\frac{64}{128}\).`],
      S`\(t_8=-0.5\)`],
    ["Which term?", "Which term of 3, 6, 12, … is 1536?",
      [S`\(3(2)^{n-1}=1536\Rightarrow2^{n-1}=512=2^9\).`],
      "the 10th term"],
    ["From two terms", S`A geometric sequence has \(t_2=12\) and \(t_5=324\). Find \(a\) and \(r\).`,
      [S`Three ratios apart: \(r^3=\frac{324}{12}=27\Rightarrow r=3\).`, S`\(a=\frac{12}3=4\).`],
      S`\(a=4\), \(r=3\)`],
    ["A bouncing ball", "A ball is dropped from 200 cm and each bounce reaches 60% of the previous height. How high is the 5th bounce?",
      [S`Bounce heights: \(t_1=120\), \(r=0.6\).`, S`\(t_5=120(0.6)^4\).`],
      S`\(${f(120 * 0.6 ** 4)}\) cm`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 140 }, points: pts((n) => 120 * 0.6 ** (n - 1), 6), step: { x: 1, y: 20 }, xlabel: "bounce", ylabel: "height (cm)" })],
  ]),

  practice([
    q("ratio", "Find the common ratio of 7, 28, 112, …", num(4),
      "Divide consecutive terms.", [S`\(28\div7\).`], S`\(4\)`),
    q("term", S`Find \(t_6\) for \(2, 6, 18,\ldots\)`, num(486),
      "a·r⁵.", [S`\(2\cdot3^5\).`], S`\(486\)`),
    q("next", "Find the next term of 81, 27, 9, …", num(3),
      "r = ⅓.", [S`\(9\div3\).`], S`\(3\)`),
    q("recognise", "Which sequence is geometric?", choice(["4, −8, 16, −32, …", "4, 8, 12, 16, …", "4, 6, 10, 16, …", "4, 5, 7, 10, …"], 0),
      "Look for a constant ratio.", ["Each term × (−2)."], "4, −8, 16, −32, …"),
    q("formula", S`For \(t_n=5(2)^{n-1}\), find \(t_7\).`, num(320),
      "5 × 2⁶.", [S`\(5\cdot64\).`], S`\(320\)`),
  ]),

  ...hard([
    ["A negative ratio", S`A geometric sequence has \(t_3=18\) and \(t_6=-486\). Find its general term and which term is 1458.`,
      [S`\(r^3=-27\Rightarrow r=-3\); \(a=\frac{18}{9}=2\): \(t_n=2(-3)^{n-1}\).`, S`\((-3)^{n-1}=729=(-3)^6\Rightarrow n=7\).`],
      S`\(t_n=2(-3)^{n-1}\); the 7th term`],
    ["A message spreads", "A message is first seen by 2 people. Each hour, everyone who saw it in the previous hour shows it to 3 new people, so 2, 6, 18, … people see it for the first time each hour. In which hour do more than 10 000 new people see it?",
      [S`\(2(3)^{n-1}>10000\Rightarrow3^{n-1}>5000\).`, S`\(3^7=2187\), \(3^8=6561\): \(n-1=8\).`],
      "the 9th hour",
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 14000 }, points: pts((n) => 2 * 3 ** (n - 1), 9), lines: [{ m: 0, b: 10000, color: "amber", dash: true }], step: { x: 1, y: 2000 }, xlabel: "hour", ylabel: "new viewers" })],
  ], [
    q("hard", "x, x + 6 and 4x (x > 0) are consecutive terms of a geometric sequence. Find x.", num(6),
      "The ratios must be equal.", [S`\((x+6)^2=4x^2\Rightarrow x+6=2x\).`], S`\(x=6\)`),
    q("hard", "How many terms are in 3, 6, 12, …, 3072?", num(11),
      "Solve 3·2^(n − 1) = 3072.", [S`\(2^{n-1}=1024=2^{10}\).`], S`\(11\)`),
    q("hard", S`A geometric sequence with \(r>0\) has \(t_2=-6\) and \(t_4=-54\). Find \(t_6\).`, num(-486),
      "r² = 9.", [S`\(r=3\), \(a=-2\): \(-2\cdot3^5\).`], S`\(-486\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I tell arithmetic from geometric?", "Check differences (constant → arithmetic) and ratios (constant → geometric)."],
      ["What does a negative ratio do?", "The terms alternate in sign."],
      ["What if 0 < r < 1?", "The terms get smaller and approach 0."],
      ["How is a geometric sequence like an exponential function?", "t_n = a·r^(n−1) is an exponential function with domain {1, 2, 3, …}."],
      ["How do I solve for n?", "Write both sides as powers of the same base, or test values of n."],
    ],
    summary: [
      "t_n = a·r^(n − 1).",
      "Recursive: t₁ = a, tₙ = r·tₙ₋₁.",
      "Graph: discrete exponential points.",
      "Two terms → r (a root) → a.",
    ],
    next: "7.3 builds rules for sequences that are neither arithmetic nor geometric.",
  }),
];
