// MDM4U Worksheet 3.5 — The Geometric Distribution (teacher edition)
import { svgT, barsSvg, treeSvg } from "./figT.mjs";
import { r3, geo } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Waiting for heads", q: "A coin is tossed until heads appears. Find P(X = 3), where X is the number of tails first.", steps: [S`TTTH: $0.5^3(0.5)$.`], ans: "0.0625" },
  { title: "Tree", q: "A player wins with p = 0.2. Draw the tree for X ≤ 2 and find P(X ≤ 2).", fig: svgT(treeSvg([{ t: "W", p: "0.2" }, { t: "L", p: "0.8", c: [{ t: "W", p: "0.2" }, { t: "L", p: "0.8", c: [{ t: "W", p: "0.2" }, { t: "L", p: "0.8" }] }] }], { heads: ["1", "2", "3"] }), 4.2), steps: [S`$0.2+0.16+0.128$.`], ans: "0.488" },
  { title: "Tail probability", q: "p = 0.1. Find P(X ≥ 5).", steps: [S`$0.9^5$.`], ans: `${r3(0.9 ** 5, 4)}` },
  { title: "Expected failures", q: "A basketball player hits 30% of three-point shots. Find the expected number of misses before her first hit.", steps: [S`$\frac{0.7}{0.3}$.`], ans: `≈ ${r3(0.7 / 0.3, 2)}` },
  { title: "Histogram", q: "Draw the distribution of X for p = 0.5 for X = 0 to 5.", fig: svgT(barsSvg([0, 1, 2, 3, 4, 5].map((k) => geo(0.5, k)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, top: ["1/2", "1/4", "1/8", "1/16", "1/32", "1/64"] }), 4.4), steps: ["Each bar is half the previous one."], ans: "1/2, 1/4, 1/8, …" },
  { title: "Trial number", q: "A card is drawn with replacement until a heart appears. Find P(the first heart is on the 3rd draw).", steps: [S`Two non-hearts then a heart: $\left(\frac34\right)^2\frac14$.`], ans: "9/64" },
  { title: "Within n tries", q: "A die is rolled until a 1 appears. Find P(it takes at most 4 rolls).", steps: [S`$1-\left(\frac56\right)^4$.`], ans: `${r3(1 - (5 / 6) ** 4, 4)}` },
  { title: "From E(X)", q: "A waiting-time variable has E(X) = 9. Find p.", steps: [S`$\frac{1-p}p=9\Rightarrow p=0.1$.`], ans: "0.1" },
  { title: "Geometric or binomial?", q: "Classify: (a) number of calls until a sale (b) number of sales in 20 calls.", steps: ["(a) geometric (waiting). (b) binomial (fixed n)."], ans: "geometric; binomial" },
];

const PROBLEMS = [
  { level: 1, q: "p = 0.25. Find P(X = 0), P(X = 1) and P(X = 2).", ans: "0.25, 0.1875, 0.1406" },
  { level: 1, q: "p = 0.4. Find E(X).", ans: "1.5" },
  { level: 1, q: "p = 0.3. Find P(X ≥ 4).", ans: `${r3(0.7 ** 4, 4)}` },
  { level: 2, q: "A die is rolled until a 6. Find P(exactly 2 non-6 rolls first) and the expected number of non-6 rolls.", ans: `${r3(geo(1 / 6, 2), 4)}; 5` },
  { level: 2, q: "2% of items are defective. Items are tested until a defective is found. Find P(the first defective is item 10).", ans: `${r3(geo(0.02, 9), 4)}` },
  { level: 2, q: "A student answers random true/false questions until one is wrong. Find P(at least 5 correct first).", ans: "1/32" },
  { level: 2, q: "Draw the histogram for p = 0.6, X = 0 to 4, and describe its shape.", ans: "0.6, 0.24, 0.096, 0.0384, 0.0154; decreasing", space: 4.5 },
  { level: 2, q: "A salesperson succeeds on 12% of calls. On average, how many calls does she make to get a sale (including the successful one)?", ans: S`$\frac1{0.12}\approx8.33$` },
  { level: 3, space: 4.5, q: "Two players take turns tossing a coin, A first; the first head wins. Find P(A wins).", ans: S`$\frac12+\frac18+\frac1{32}+\cdots=\frac23$` },
  { level: 3, space: 4.5, q: "Find the median of the geometric distribution with p = 0.2: the smallest k with P(X ≤ k) ≥ 0.5.", ans: S`$1-0.8^{k+1}\ge0.5\Rightarrow k=3$` },
  { level: 3, space: 4.5, q: "Show that the probabilities qᵏp (k = 0, 1, 2, …) add to 1.", ans: S`geometric series $\frac p{1-q}=1$` },
  { level: 3, space: 4.5, q: "A gambler bets on red (p = 18/38) until he wins. Find P(he needs more than 5 bets) and the expected number of losses.", ans: `${r3((20 / 38) ** 5, 4)}; ${r3(20 / 18, 3)}` },
  { level: 3, space: 5, q: "P(X ≥ 3) = 0.343 for a geometric variable. Find p and E(X).", ans: S`$q^3=0.343\Rightarrow q=0.7$, $p=0.3$; $E=\frac73$` },
];

export const WS = {
  code: "3.5",
  title: "The Geometric Distribution",
  bigideas: S`Repeat independent trials with success probability $p$ until the first success; $X$ = failures before it. $P(X=k)=q^kp$, $P(X\ge k)=q^k$, $E(X)=\frac qp$. The histogram always decreases.`,
  goals: ["Recognize waiting-time situations.", "Calculate P(X = k) and P(X ≥ k).", "Find E(X) = q/p.", "Distinguish from binomial."],
  curriculum: "B1.1–B1.3",
  vocab: [["Waiting time", "failures before first success"], ["$q^kp$", "k failures then a success"]],
  hook: "How many packs of cards must you buy, on average, to find a rare card that appears in 1 pack out of 20?",
  concepts: [
    ["1. Distribution", S`${svgT(barsSvg([0, 1, 2, 3, 4].map((k) => geo(0.4, k)), { labels: [0, 1, 2, 3, 4], histogram: true, fmt: (v) => v.toFixed(2) }), 3.4)}$P(X=k)=q^kp$.`],
    ["2. Tails", S`$P(X\ge k)=q^k$; $P(X\le k)=1-q^{k+1}$.`],
    ["3. Mean", S`$E(X)=\frac qp$; first success on trial $\frac1p$ on average.`],
  ],
  tips: ["Define X clearly (failures vs trials).", "Independence and constant p.", "Use tails for “more than”.", "Histogram decreases.", "Compare with binomial."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
