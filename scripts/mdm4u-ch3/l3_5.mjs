// MDM4U 3.5 — The Geometric Distribution: waiting time for the first success in independent trials,
// X = number of failures before the first success, P(X = k) = q^k p, P(X ≥ k) = q^k, E(X) = q/p
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, treeSvg } from "./lib.mjs";
import { r3, geo } from "../mdm4u/count.mjs";

export const TITLE = "3.5 The Geometric Distribution";
export const ID = "80e7dad8-6d62-4315-8dce-40923aca8c8c";
const S = String.raw;

const chain = (p, depth) => { const q = String(Math.round((1 - p) * 100) / 100), ps = String(p); let node = { t: "F", p: q, c: [{ t: "S", p: ps }, { t: "…", p: q }] }; for (let i = 1; i < depth; i++) node = { t: "F", p: q, c: [{ t: "S", p: ps }, node] }; return [{ t: "S", p: ps }, node]; };

export const blocks = () => [
  intro({
    icon: "⏳",
    title: "The Geometric Distribution",
    overview: S`In a <strong>geometric</strong> (waiting-time) situation, independent trials with constant success probability \(p\) are repeated until the <em>first</em> success. Let \(X\) be the number of <strong>failures before the first success</strong>. Then \[P(X=k)=q^k\,p,\qquad P(X\ge k)=q^k,\qquad E(X)=\frac qp,\] where \(q=1-p\). The first success is expected on trial \(\frac1p\). Unlike the binomial, the number of trials is not fixed.`,
    goals: [
      "recognize a waiting-time (geometric) situation;",
      "calculate P(X = k) = qᵏp and P(X ≥ k) = qᵏ;",
      "draw the decreasing probability histogram;",
      "find and interpret the expected waiting time q/p;",
      "distinguish geometric from binomial situations.",
    ],
    curriculum: "B1.1–B1.3 (discrete random variables, distributions, expected value and histograms); A1.6 (independent events)",
    prior: [
      ["P(miss) = 0.6. Find P(miss, miss, hit) if P(hit) = 0.4.", "0.6² × 0.4 = 0.144."],
      ["Evaluate 0.8³.", "0.512."],
      ["Are successive rolls of a die independent?", "Yes."],
    ],
    words: [
      ["Waiting time", "the number of failures before the first success", "rolls before the first 6"],
      ["P(X = k) = qᵏp", "k failures, then a success", "q²p: F F S"],
      ["P(X ≥ k) = qᵏ", "the first k trials all fail", "q³: no success in 3 tries"],
      ["E(X) = q/p", "expected number of failures", "die: (5/6)/(1/6) = 5"],
    ],
  }),

  section("📌 The waiting-time tree", S`
  ${fig(treeSvg(chain(0.3, 2), { heads: ["trial 1", "trial 2", "trial 3", "…"], leaf: (p) => (p[p.length - 1] === "S" ? `X = ${p.length - 1}` : "") }), "each path is a run of failures (F) ending with the first success (S)")}
  ${table(["k (failures)", "0", "1", "2", "3", "k"], [["path", "S", "FS", "FFS", "FFFS", "F…FS"], ["P(X = k), p = 0.3", "0.3", "0.21", "0.147", `${r3(geo(0.3, 3), 4)}`, "\\(0.7^k(0.3)\\)"]])}
  ${fig(barsSvg(Array.from({ length: 11 }, (_, k) => geo(0.3, k)), { labels: Array.from({ length: 11 }, (_, k) => k), histogram: true, fmt: (v) => v.toFixed(2), xlabel: "failures before the first success (p = 0.3)", ylabel: "P(X = k)" }), "each bar is 0.7 times the previous one: the histogram always decreases")}
  ${keyIdea(S`The most likely value is always \(X=0\) (success on the first try), yet the expected number of failures \(\frac qp\) can be large.`)}`),

  section("📌 Explore", S`<p>Change p and k. The red bar is P(X = k); compare the expected waiting time q/p with the shape of the histogram.</p>`),

  widget("geometricDist", { init: 0.25 }),

  section("📌 Watch out", watchOut([
    "Here X counts failures before the first success. If a question counts trials until the first success, the trial number is X + 1.",
    "P(X ≥ k) = qᵏ: the first k trials are all failures.",
    "The trials must be independent with the same p.",
    "Geometric: number of trials not fixed. Binomial: number of trials fixed.",
  ])),

  examples([
    ["Rolling for a 6", "A die is rolled until a 6 appears. Find P(exactly 3 failures first) and the expected number of failures.",
      [S`\(P(X=3)=\left(\frac56\right)^3\frac16\approx${r3(geo(1 / 6, 3), 4)}\).`, S`\(E(X)=\frac{5/6}{1/6}=5\).`],
      `${r3(geo(1 / 6, 3), 4)}; 5 failures`],
    ["At least k failures", "A salesperson makes a sale on 20% of calls. Find P(no sale in the first 5 calls).",
      [S`\(P(X\ge5)=0.8^5\).`],
      `${r3(0.8 ** 5, 4)}`],
    ["Trial number", "A quarterback completes 65% of passes. Find P(the first incomplete pass is the 4th pass).",
      [S`Success here = incomplete, \(p=0.35\). Three completions first: \(X=3\).`, S`\(0.65^3(0.35)\approx${r3(0.65 ** 3 * 0.35, 4)}\).`],
      `${r3(0.65 ** 3 * 0.35, 4)}`],
    ["Expected wait", "A cereal box contains a prize with probability 0.15. How many boxes without a prize do you expect to buy before getting one? On which box do you expect the first prize?",
      [S`\(E(X)=\frac{0.85}{0.15}\approx${r3(0.85 / 0.15, 2)}\).`, S`First prize expected on box \(\frac1{0.15}\approx${r3(1 / 0.15, 2)}\).`],
      `≈ ${r3(0.85 / 0.15, 2)} boxes; box ${r3(1 / 0.15, 2)}`],
    ["Within n trials", "A player makes 40% of three-point shots. Find P(she makes one within her first 4 attempts).",
      [S`\(P(X\le3)=1-P(X\ge4)=1-0.6^4\).`],
      `${r3(1 - 0.6 ** 4, 4)}`],
  ]),

  practice([
    q("P", "p = 0.5. Find P(X = 2), the probability of exactly 2 failures before the first success.", num(0.125), "0.5² × 0.5.", [S`\(0.125\).`], "0.125"),
    q("E", "p = 0.2. Find E(X), the expected number of failures.", num(4), "q/p.", [S`\(\frac{0.8}{0.2}\).`], "4"),
    q("tail", "p = 0.25. Find P(X ≥ 3). (4 decimals)", num(r3(0.75 ** 3, 4), 0.0001), "q³.", [S`\(0.421875\).`], "0.4219"),
    q("first", "p = 0.4. Find P(success on the first trial).", num(0.4), "X = 0.", [S`\(q^0p\).`], "0.4"),
    q("type", "Which is a geometric situation?", choice(["tossing a coin until heads appears", "tossing a coin 10 times and counting heads", "drawing 5 cards and counting hearts", "rolling 2 dice and adding"], 0), "Wait for the first success.", ["Number of trials not fixed."], "until heads"),
  ]),

  ...hard([
    ["Who wins first?", "Ana and Ben take turns rolling a die, Ana first. The first to roll a 6 wins. Find P(Ana wins).",
      [S`Ana wins on her turns 1, 3, 5, … of the combined sequence: \(\frac16+\left(\frac56\right)^2\frac16+\left(\frac56\right)^4\frac16+\cdots\)`, S`A geometric series with ratio \(\frac{25}{36}\): \(\frac{1/6}{1-25/36}=\frac{6}{11}\).`],
      "6/11 ≈ 0.545"],
    ["Comparing waiting times", "Light bulbs from supplier A fail on a given day with probability 0.002, from supplier B with probability 0.003. Compare the expected number of days before failure.",
      [S`A: \(\frac{0.998}{0.002}=499\) days. B: \(\frac{0.997}{0.003}\approx332\) days.`, S`A lasts about 167 days longer on average.`],
      "499 vs about 332 days",
      fig(barsSvg([499, 332.3], { labels: ["supplier A", "supplier B"], top: ["499", "332"], ylabel: "expected days" }))],
  ], [
    q("hard", "p = 0.1. What is the smallest k with P(X ≥ k) < 0.5?", num(7), "0.9ᵏ < 0.5.", [S`\(0.9^6\approx0.531\), \(0.9^7\approx0.478\).`], "7"),
    q("hard", "A die is rolled until a 6 appears. What is P(more than 10 rolls are needed)? (4 decimals)", num(r3((5 / 6) ** 10, 4), 0.0001), "At least 10 failures: (5/6)¹⁰.", [S`\(\approx0.1615\).`], `${r3((5 / 6) ** 10, 4)}`),
    q("hard", "E(X) = 3 for a geometric variable (failures before the first success). Find p.", num(0.25), "q/p = 3.", [S`\(1-p=3p\Rightarrow p=0.25\).`], "0.25"),
  ]),

  wrapUp({
    qas: [
      ["What does X count here?", "The number of failures before the first success; the success then happens on trial X + 1."],
      ["Why does the histogram always decrease?", "Each value needs one more failure, so it is q times the previous probability."],
      ["What is the expected waiting time?", "q/p failures; the first success is expected on trial 1/p."],
      ["How is it different from binomial?", "Binomial fixes the number of trials and counts successes; geometric waits for the first success."],
      ["What is P(no success in k trials)?", "qᵏ."],
    ],
    summary: [
      "P(X = k) = qᵏ p.",
      "P(X ≥ k) = qᵏ.",
      "E(X) = q/p.",
      "Independent trials, constant p, until the first success.",
    ],
    next: "3.6 samples without replacement: the hypergeometric distribution.",
  }),
];
