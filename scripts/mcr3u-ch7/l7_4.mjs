// MCR3U 7.4 — Sequences Defined by Two Previous Terms: Fibonacci and related sequences, working backwards, ratio of
// consecutive terms (golden ratio), counting problems such as climbing stairs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.4 Sequences Defined by Two Previous Terms";
export const ID = "5c3e0001-0001-4001-8001-000000000704";
const S = String.raw;
const fib = (n, a = 1, b = 1, m = 1) => { const v = [a, b]; for (let i = 2; i < n; i++) v.push(v[i - 1] + m * v[i - 2]); return v; };
const F = fib(14);

export const blocks = () => [
  intro({
    icon: "🌻",
    title: "Sequences Defined by Two Previous Terms",
    overview: S`In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, … each term is the sum of the two before it: \(t_n=t_{n-1}+t_{n-2}\). Rules like this need <strong>two</strong> starting terms. In this lesson you will generate such sequences, work backwards, discover that the ratio of consecutive terms settles toward a fixed number, and use these rules to count arrangements.`,
    goals: [
      "generate terms of the Fibonacci sequence and related sequences;",
      "explain why two starting terms are needed;",
      "work backwards to find earlier terms;",
      "investigate the ratio of consecutive terms;",
      "model counting problems with two-term recursions.",
    ],
    curriculum: "C1.5 (determine, through investigation, recursive patterns in the Fibonacci sequence, in related sequences and in Pascal's triangle, and represent the patterns in a variety of ways)",
    prior: [
      ["Continue: 1, 1, 2, 3, 5, …", "8."],
      [S`Evaluate \(\frac{1+\sqrt5}2\) to 3 decimals.`, "1.618."],
      ["If x + 7 = 11, what is x?", "4."],
    ],
    words: [
      ["Fibonacci sequence", "\\(t_1=t_2=1\\), \\(t_n=t_{n-1}+t_{n-2}\\)", ""],
      ["Initial conditions", "the given starting terms", ""],
      ["Golden ratio φ", "\\(\\frac{1+\\sqrt5}2\\approx1.618\\)", ""],
      ["Ratio of terms", "\\(\\frac{t_n}{t_{n-1}}\\)", ""],
    ],
  }),

  section("📌 The Fibonacci pattern", S`
  ${table(["n", ...F.slice(0, 10).map((_, i) => String(i + 1))], [["tₙ", ...F.slice(0, 10).map(String)], ["tₙ ÷ tₙ₋₁", "—", ...F.slice(1, 10).map((v, i) => (v / F[i]).toFixed(3))]])}
  ${plane({ view: { xmin: 1, xmax: 13, ymin: 0.8, ymax: 2.2 }, points: F.slice(1, 12).map((v, i) => ({ x: i + 2, y: v / F[i] })), lines: [{ m: 0, b: (1 + Math.sqrt(5)) / 2, color: "amber", dash: true, label: "1.618…" }], step: { x: 1, y: 0.2 }, xlabel: "n", ylabel: "ratio" }, "the ratios zig-zag toward the golden ratio")}
  ${keyIdea(S`For any rule \(t_n=t_{n-1}+t_{n-2}\) with positive starting terms, the ratio \(\frac{t_n}{t_{n-1}}\) approaches \(\varphi=\frac{1+\sqrt5}2\approx1.618\).`)}`),

  section("📌 Explore", S`<p>Change the two starting terms: do the ratios still approach 1.618? Then change m in \(t_n=t_{n-1}+m\,t_{n-2}\).</p>`),

  widget("fibLab", { init: [1, 1] }),

  section("📌 Watch out", watchOut([
    "You need both t₁ and t₂ — one starting term is not enough.",
    "Keep careful track of which two terms you are adding.",
    "Working backwards: t_(n−2) = t_n − t_(n−1).",
    "The ratio approaches φ but never exactly equals it for whole-number terms.",
  ])),

  examples([
    ["Fibonacci terms", "Find t₁₀ of the Fibonacci sequence.",
      ["1, 1, 2, 3, 5, 8, 13, 21, 34, 55."],
      S`\(t_{10}=55\)`],
    ["Different starting terms", S`List the first seven terms of \(t_1=2\), \(t_2=1\), \(t_n=t_{n-1}+t_{n-2}\).`,
      ["2, 1, 3, 4, 7, 11, 18."],
      "2, 1, 3, 4, 7, 11, 18"],
    ["Ratios", "Compute the ratios 21 ÷ 13 and 34 ÷ 21 in the Fibonacci sequence.",
      [S`\(\frac{21}{13}\approx1.6154\), \(\frac{34}{21}\approx1.6190\).`, "They are closing in on 1.618 from both sides."],
      "≈ 1.6154 and 1.6190"],
    ["Working backwards", S`A sequence follows \(t_n=t_{n-1}+t_{n-2}\) with \(t_5=7\) and \(t_6=11\). Find \(t_3\) and \(t_4\).`,
      [S`\(t_4=t_6-t_5=4\).`, S`\(t_3=t_5-t_4=3\).`],
      S`\(t_3=3\), \(t_4=4\)`],
    ["A different two-term rule", S`List six terms of \(t_1=t_2=1\), \(t_n=t_{n-1}+2t_{n-2}\), and describe the ratios.`,
      [S`\(1,1,3,5,11,21\).`, S`Ratios \(1,3,1.67,2.2,1.91,\ldots\) approach 2.`],
      "1, 1, 3, 5, 11, 21; ratios → 2",
      plane({ view: { xmin: 1, xmax: 11, ymin: 0.5, ymax: 3.2 }, points: fib(11, 1, 1, 2).slice(1).map((v, i, arr) => ({ x: i + 2, y: v / fib(11, 1, 1, 2)[i] })), lines: [{ m: 0, b: 2, color: "amber", dash: true }], step: { x: 1, y: 0.5 }, xlabel: "n", ylabel: "ratio" })],
  ]),

  practice([
    q("Fibonacci", "Find t₁₂ of the Fibonacci sequence 1, 1, 2, 3, …", num(144),
      "Keep adding.", ["…, 55, 89, 144."], S`\(144\)`),
    q("terms", S`\(t_1=3\), \(t_2=4\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_6\).`, num(29),
      "3, 4, 7, …", [S`\(3,4,7,11,18,29\).`], S`\(29\)`),
    q("other rule", S`\(t_1=1\), \(t_2=3\), \(t_n=t_{n-1}-t_{n-2}\). Find \(t_7\).`, num(1),
      "Subtract instead of add.", [S`\(1,3,2,-1,-3,-2,1\).`], S`\(1\)`),
    q("starting terms", S`How many starting terms must be given for \(t_n=t_{n-1}+t_{n-2}\)?`, choice(["2", "1", "3", "none"], 0),
      "Each term uses two earlier terms.", ["t₃ needs t₁ and t₂."], "2"),
    q("ratio", "In the Fibonacci sequence, find t₈ ÷ t₇ to 4 decimals.", num(21 / 13, 0.0001),
      "t₇ = 13, t₈ = 21.", [S`\(21\div13\).`], S`\(\approx1.6154\)`),
  ]),

  ...hard([
    ["A sum pattern", "Show that the sum of the first 6 Fibonacci numbers is one less than t₈, and predict the sum of the first 10.",
      [S`\(1+1+2+3+5+8=20=21-1\).`, S`The pattern is \(t_1+\cdots+t_n=t_{n+2}-1\): sum of first 10 is \(t_{12}-1=143\).`],
      "143"],
    ["Climbing stairs", "You climb stairs taking 1 or 2 steps at a time. Let W_n be the number of ways to climb n steps. Explain why W_n = W_(n−1) + W_(n−2) and find W₁₀.",
      [S`The first move is 1 step (then \(W_{n-1}\) ways) or 2 steps (then \(W_{n-2}\) ways).`, S`\(W_1=1\), \(W_2=2\): 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.`],
      S`\(W_{10}=89\)`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 100 }, points: fib(10, 1, 2).map((v, i) => ({ x: i + 1, y: v })), step: { x: 1, y: 10 }, xlabel: "steps", ylabel: "ways" })],
  ], [
    q("hard", "How many ways are there to climb 8 stairs taking 1 or 2 steps at a time?", num(34),
      "W₁ = 1, W₂ = 2, then add.", [S`\(1,2,3,5,8,13,21,34\).`], S`\(34\)`),
    q("hard", S`A sequence follows \(t_n=t_{n-1}+t_{n-2}\) with \(t_1=2\) and \(t_5=19\). Find \(t_2\).`, num(5),
      "Write t₅ in terms of t₁ and t₂.", [S`\(t_5=2t_1+3t_2=4+3t_2=19\).`], S`\(5\)`),
    q("hard", S`\(t_1=t_2=1\), \(t_n=2t_{n-1}+3t_{n-2}\). Find \(t_5\).`, num(41),
      "Build term by term.", [S`\(1,1,5,13,41\).`], S`\(41\)`),
  ]),

  wrapUp({
    qas: [
      ["Why two starting terms?", "The rule uses the two previous terms, so the first two cannot be calculated."],
      ["Where does the Fibonacci sequence appear?", "In spirals of seeds and pine cones, branching plants, and counting problems."],
      ["Why do the ratios approach 1.618?", "If tₙ ≈ φ·tₙ₋₁ for large n, the rule gives φ² = φ + 1, whose positive solution is (1 + √5)/2."],
      ["How do I work backwards?", "Rearrange: tₙ₋₂ = tₙ − tₙ₋₁."],
      ["Does every two-term rule have a limiting ratio?", "Many do; for tₙ = tₙ₋₁ + m·tₙ₋₂ it is (1 + √(1 + 4m))/2."],
    ],
    summary: [
      "tₙ = tₙ₋₁ + tₙ₋₂ needs t₁ and t₂.",
      "Fibonacci: 1, 1, 2, 3, 5, 8, …",
      "Ratios → φ ≈ 1.618.",
      "Counting by first move gives two-term rules.",
    ],
    next: "7.5 adds the terms of an arithmetic sequence.",
  }),
];
