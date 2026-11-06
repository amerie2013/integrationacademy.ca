// MCR3U 7.5 — Arithmetic Series: series vs sequence, the pairing argument, S_n = n(a + t_n)/2 = n[2a + (n − 1)d]/2,
// counting terms first, solving for n, recovering terms from S_n
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.5 Arithmetic Series";
export const ID = "4e5a8d47-b53f-4761-8904-1e14fd2954b8";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "➕",
    title: "Arithmetic Series",
    overview: S`A <strong>series</strong> is the sum of the terms of a sequence. To add an arithmetic sequence quickly, write it forwards and backwards: each pair of terms has the same total \(t_1+t_n\), and there are \(n\) pairs, so twice the sum is \(n(t_1+t_n)\). This gives \(S_n=\frac n2(t_1+t_n)=\frac n2\left[2a+(n-1)d\right]\). In this lesson you will use these formulas, count terms first when needed, and solve for the number of terms.`,
    goals: [
      "distinguish a sequence from a series;",
      "explain the pairing argument for the sum formula;",
      "use S_n = n(a + t_n)/2 and S_n = n[2a + (n − 1)d]/2;",
      "find the number of terms before summing;",
      "solve problems, including finding n from a sum.",
    ],
    curriculum: "C3.3 (determine the formula for the sum of an arithmetic series, through investigation using a variety of tools and strategies, and apply the formula to calculate the sum of a given number of consecutive terms), C3.4 (solve problems involving arithmetic sequences and series, including those arising from real-world applications)",
    prior: [
      ["How many terms are in 5, 8, 11, …, 62?", "20."],
      ["What is 1 + 2 + 3 + … + 10?", "55."],
      [S`Solve \(n(2n+1)=465\) for \(n>0\).`, "n = 15."],
    ],
    words: [
      ["Series", "the sum \\(t_1+t_2+\\cdots+t_n\\)", ""],
      ["Partial sum \\(S_n\\)", "the sum of the first n terms", ""],
      ["Arithmetic series", "the sum of an arithmetic sequence", ""],
      ["Pairing", "first + last = second + second-last = …", ""],
    ],
  }),

  section("📌 Two forms of the formula", S`
  ${table(["Use", "When you know"], [["\\(S_n=\\frac n2(t_1+t_n)\\)", "the first and last terms and n"], ["\\(S_n=\\frac n2\\left[2a+(n-1)d\\right]\\)", "a, d and n"], ["\\(n=\\frac{t_n-a}d+1\\)", "first, last and d (count the terms first)"]])}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 26 }, segs: Array.from({ length: 8 }, (_, i) => ({ pts: [[i + 0.6, 0], [i + 0.6, 2 + 3 * i], [i + 1.4, 2 + 3 * i], [i + 1.4, 0]], color: "blue" })), step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" }, "2 + 5 + 8 + … + 23: the bars add to 8(2 + 23)/2 = 100")}
  ${keyIdea(S`Average of the first and last term × number of terms. In \(1+2+\cdots+100\) there are 50 pairs each adding to 101, so the sum is 5050.`)}`),

  section("📌 Explore", S`<p>Each row joins a term (blue) with the matching term from the other end (amber). Change a, d and n: every row always has the same length.</p>`),

  widget("seriesPairs", { init: [2, 3, 8] }),

  section("📌 Watch out", watchOut([
    "Count the terms before using the formula: n is the number of terms, not the last term.",
    "S_n is a sum; t_n is a single term.",
    "When solving for n, reject negative or non-whole solutions.",
    "If d is negative, terms can become negative — the formula still works.",
  ])),

  examples([
    ["The classic sum", "Find 1 + 2 + 3 + … + 100.",
      [S`<b>The idea.</b> Write the sum forward and backward. Each column adds to 101: \(1+100\), \(2+99\), and so on. There are 100 columns, so twice the sum is \(100\times101\).`,
        S`<b>Formula.</b> That gives \(S_n=\frac n2(t_1+t_n)\): the number of terms times the average of the first and last.`,
        S`<b>Substitute.</b> \(n=100\), \(t_1=1\), \(t_{100}=100\): \(S_{100}=\frac{100}2(1+100)=50(101)\).`,
        S`<b>Evaluate.</b> \(S_{100}=5050\).`,
        S`<b>Check with a small case.</b> \(1+2+3+4=10\), and \(\frac42(5)=10\) ✓`],
      "5050",
      plane({ view: { xmin: 0, xmax: 110, ymin: 0, ymax: 5500 }, curves: [{ f: (n) => (n * (n + 1)) / 2, a: 0, color: "gray" }], points: [10, 20, 40, 60, 80].map((n) => ({ x: n, y: (n * (n + 1)) / 2 })).concat([{ x: 100, y: 5050, label: "(100, 5050)", color: "amber" }]), step: { x: 10, y: 500 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Using a, d and n", S`Find \(S_{20}\) for \(4+9+14+\cdots\)`,
      [S`<b>Identify.</b> \(a=4\), \(d=5\), \(n=20\). The last term is not given, so use the form with \(d\).`,
        S`<b>Formula.</b> \(S_n=\frac n2\left[2a+(n-1)d\right]\).`,
        S`<b>Substitute.</b> \(S_{20}=\frac{20}2\left[2(4)+19(5)\right]=10(8+95)=10(103)\).`,
        S`<b>Evaluate.</b> \(S_{20}=1030\).`,
        S`<b>Check with the other formula.</b> \(t_{20}=4+19(5)=99\), and \(\frac{20}2(4+99)=1030\) ✓`],
      "1030",
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 1200 }, curves: [{ f: (n) => (n / 2) * (8 + (n - 1) * 5), a: 0, color: "gray" }], points: [{ x: 1, y: 4 }, { x: 5, y: 70 }, { x: 10, y: 265 }, { x: 15, y: 585 }, { x: 20, y: 1030, label: "(20, 1030)", color: "amber" }], step: { x: 2, y: 100 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Count first", "Find 7 + 11 + 15 + … + 203.",
      [S`<b>Why count?</b> The sum formula needs \(n\), and it is not given.`,
        S`<b>Find \(n\).</b> \(t_n=7+(n-1)4=203\), so \((n-1)4=196\), \(n-1=49\) and \(n=50\).`,
        S`<b>Common mistake.</b> \(\frac{203-7}4=49\) counts the gaps. The number of terms is one more.`,
        S`<b>Sum.</b> \(S_{50}=\frac{50}2(7+203)=25(210)=5250\).`,
        S`<b>Check.</b> The average term is \(\frac{7+203}2=105\), and \(50\times105=5250\) ✓`],
      "5250",
      plane({ view: { xmin: 0, xmax: 55, ymin: 0, ymax: 220 }, lines: [{ m: 4, b: 3, color: "gray", dash: true }], points: [{ x: 1, y: 7, label: "(1, 7)" }, { x: 2, y: 11 }, { x: 3, y: 15 }, { x: 50, y: 203, label: "(50, 203)", color: "amber" }], step: { x: 5, y: 20 }, xlabel: "n", ylabel: "tₙ" })],
    ["A stack of logs", "Logs are stacked with 24 in the bottom row, one fewer in each row above, and 6 in the top row. How many logs are there?",
      [S`<b>Model.</b> The rows \(24,23,\ldots,6\) form an arithmetic sequence with \(d=-1\).`,
        S`<b>Count the rows.</b> \(24-6+1=19\). The difference is 18, and we add 1 because both end rows count.`,
        S`<b>Sum.</b> \(S_{19}=\frac{19}2(24+6)=\frac{19}2(30)=19(15)\).`,
        S`<b>Evaluate.</b> \(285\).`,
        S`<b>Check.</b> The middle row is the average, 15 logs, and \(19\times15=285\) ✓`],
      "285 logs",
      plane({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 20 }, segs: Array.from({ length: 19 }, (_, i) => ({ pts: [[i / 2, i + 0.5], [24 - i / 2, i + 0.5]], color: "amber" })), step: { x: 2, y: 2 }, xlabel: "logs in row", ylabel: "row" })],
    ["Finding n", "How many terms of 3 + 7 + 11 + … add to 465?",
      [S`<b>Set up.</b> \(a=3\), \(d=4\), \(S_n=465\), and \(n\) is unknown.`,
        S`<b>Simplify the formula.</b> \(\frac n2\left[6+4(n-1)\right]=\frac n2(4n+2)=n(2n+1)\).`,
        S`<b>Equation.</b> \(n(2n+1)=465\), so \(2n^2+n-465=0\).`,
        S`<b>Factor.</b> \((n-15)(2n+31)=0\), so \(n=15\) or \(n=-15.5\).`,
        S`<b>Choose.</b> A number of terms must be a positive whole number, so \(n=15\).`,
        S`<b>Check.</b> \(t_{15}=59\), and \(\frac{15}2(3+59)=465\) ✓`],
      S`\(n=15\)`,
      plane({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 650 }, curves: [{ f: (n) => n * (2 * n + 1), a: 0, color: "violet" }], lines: [{ m: 0, b: 465, color: "amber", dash: true }], points: [{ x: 15, y: 465, label: "(15, 465)", color: "amber" }], step: { x: 2, y: 100 }, xlabel: "n", ylabel: "Sₙ" })],
  ]),

  practice([
    q("sum", S`Find \(S_{10}\) for \(2+5+8+\cdots\)`, num(155),
      "S = n/2[2a + (n − 1)d].", [S`\(5(4+27)\).`], S`\(155\)`),
    q("odd numbers", "Find 1 + 3 + 5 + … + 99.", num(2500),
      "50 terms.", [S`\(\frac{50}2(1+99)\).`], S`\(2500\)`),
    q("negative d", S`Find \(S_{15}\) with \(a=20\) and \(d=-3\).`, num(-15),
      "Use the a, d, n form.", [S`\(7.5(40-42)\).`], S`\(-15\)`),
    q("first and last", "An arithmetic series has 25 terms, first term 6 and last term 102. Find its sum.", num(1350),
      "n(a + tₙ)/2.", [S`\(12.5(108)\).`], S`\(1350\)`),
    q("formula", "Which formula gives the sum of an arithmetic series?", choice([S`\(S_n=\frac n2(t_1+t_n)\)`, S`\(S_n=n\,t_n\)`, S`\(S_n=\frac{a(r^n-1)}{r-1}\)`, S`\(S_n=t_1+nd\)`], 0),
      "Average term × number of terms.", ["Pairing argument."], S`\(\frac n2(t_1+t_n)\)`),
  ]),

  ...hard([
    ["Multiples in a range", "Find the sum of all multiples of 7 between 100 and 500.",
      [S`First 105, last 497: \(n=\frac{497-105}7+1=57\).`, S`\(S=\frac{57}2(105+497)\).`],
      "17 157"],
    ["From the sum formula back to the terms", S`The sum of the first n terms of an arithmetic series is \(S_n=3n^2+2n\). Find \(t_1\) and \(d\).`,
      [S`\(t_1=S_1=5\).`, S`\(t_2=S_2-S_1=16-5=11\), so \(d=6\).`],
      S`\(t_1=5\), \(d=6\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 100 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 3 * n * n + 2 * n, label: `S${n} = ${3 * n * n + 2 * n}` })), step: { x: 1, y: 10 }, xlabel: "n", ylabel: "Sₙ" })],
  ], [
    q("hard", "How many terms of 5 + 9 + 13 + … give a sum of 860?", num(20),
      "n(2n + 3) = 860.", [S`\(2n^2+3n-860=0\Rightarrow(n-20)(2n+43)=0\).`], S`\(20\)`),
    q("hard", "A theatre has 24 rows: 18 seats in the first row and 2 more in each row after. How many seats in total?", num(984),
      "S = n/2[2a + (n − 1)d].", [S`\(12(36+46)\).`], S`\(984\)`),
    q("hard", S`For an arithmetic series \(S_n=2n^2-n\). Find \(t_{10}\).`, num(37),
      "t₁₀ = S₁₀ − S₉.", [S`\(190-153\).`], S`\(37\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between a sequence and a series?", "A sequence lists terms; a series adds them."],
      ["Why does pairing work?", "Moving one step in from each end adds d to one term and subtracts d from the other, so the pair total stays the same."],
      ["Which formula should I use?", "Use n(a + tₙ)/2 if you know the last term; otherwise n[2a + (n − 1)d]/2."],
      ["How do I find n from a sum?", "Substitute into the formula and solve the quadratic; keep the positive whole-number root."],
      ["Can I get tₙ from Sₙ?", "Yes: tₙ = Sₙ − Sₙ₋₁."],
    ],
    summary: [
      "Sₙ = n(t₁ + tₙ)/2.",
      "Sₙ = n[2a + (n − 1)d]/2.",
      "Count terms first: n = (tₙ − a)/d + 1.",
      "tₙ = Sₙ − Sₙ₋₁.",
    ],
    next: "7.6 adds the terms of a geometric sequence.",
  }),
];
