// IB AA SL 14.5 — Chapter 14 Review: discrete random variables and expected value, the binomial distribution, normal probabilities, inverse normal and combined problems
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard } from "./lib.mjs";
import { fig, probDoc, normalDoc, Phi, invPhi, binom, normCdf } from "./figs14.mjs";

export const TITLE = "14.5 Chapter 14 Review";
export const ID = "1baa0014-0001-4001-8001-000000001405";
const S = String.raw;
const r = (v, d = 4) => Math.round(v * 10 ** d) / 10 ** d;
const pLate = 1 - Phi(10 / 6), sM = 1 / invPhi(0.95);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 14 Review",
    overview: S`This review connects the chapter: discrete random variables and expected value, the binomial distribution, the normal distribution and the inverse normal. Exam questions often chain them — a normal probability becomes the p of a binomial, or an expected value decides whether a game is fair.`,
    goals: [
      "use probability distributions and expected value;",
      "recognise and use the binomial distribution;",
      "find normal probabilities and z-scores;",
      "find boundaries and parameters with the inverse normal;",
      "combine distributions in multi-step problems.",
    ],
    curriculum: "SL 4.7–4.9, 4.12 (probability distributions)",
    prior: [
      [S`\(E(X)\) for a fair die?`, S`\(3.5\).`],
      [S`Mean of \(B(30,0.2)\)?`, S`\(6\).`],
      [S`About what % of a normal distribution lies within 2σ of μ?`, "95%."],
    ],
    words: [
      ["14.1", "distributions, Σ P = 1, E(X), fair games", ""],
      ["14.2", "B(n, p), mean np, variance np(1 − p)", ""],
      ["14.3", "N(μ, σ²), 68–95–99.7, z-scores", ""],
      ["14.4", "inverse normal, unknown μ or σ", ""],
      ["Links", "normal probability → binomial p", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Topic", "Key fact"], [
    ["discrete RV", S`\(\sum P=1\); \(E(X)=\sum xP(X=x)\); fair game: \(E(\text{gain})=0\)`],
    ["binomial", S`\(P(X=r)=\binom nr p^r(1-p)^{n-r}\); \(np\), \(np(1-p)\)`],
    ["normal", S`area under the curve; \(z=\frac{x-\mu}{\sigma}\)`],
    ["inverse normal", S`left area → x; \(x=\mu+z\sigma\)`],
  ])}
  ${fig(probDoc([1, 2, 3, 4], [0.4, 0.3, 0.2, 0.1], { xlab: "x" }), "Example 1: P(X = x) = k(5 − x) with k = 0.1")}
  ${fig(normalDoc(35, 6, [{ a: 45, b: Infinity, color: "red" }], { lines: [45] }), "Example 3: P(commute > 45 min)")}
  ${keyIdea("Name the distribution first — discrete table, binomial or normal — then choose the tool.")}`),

  section("📌 Explore", S`<p>Use the explorer to check Example 2: set n = 8, p = 0.75 and the event X ≥ 7.</p>`),

  widget("ibBinomial", { init: [8, 0.75, 2, 7] }),

  examples([
    ["Level 1 · Distribution", S`\(P(X=x)=k(5-x)\) for \(x=1,2,3,4\). Find k and \(E(X)\).`,
      [S`\(k(4+3+2+1)=1\Rightarrow k=0.1\).`, S`\(E(X)=1(0.4)+2(0.3)+3(0.2)+4(0.1)=0.4+0.6+0.6+0.4\).`],
      S`\(k=0.1\), \(E(X)=2\)`],
    ["Level 2 · Binomial", S`A player scores a free throw with probability 0.75. In 8 attempts, find the probability of at least 7 successes.`,
      [S`\(X\sim B(8,0.75)\): \(P(7)+P(8)\).`],
      S`\(\approx${r(binom(8, 0.75, 7) + binom(8, 0.75, 8))}\)`,
      fig(probDoc(Array.from({ length: 9 }, (_, i) => i), Array.from({ length: 9 }, (_, i) => binom(8, 0.75, i)), { hi: [7, 8], labels: false, xlab: "successes" }), "B(8, 0.75): P(X ≥ 7)")],
    ["Level 2 · Normal", S`A commute takes \(N(35,6^2)\) minutes. Leaving 45 minutes before a meeting, find the probability of being late.`,
      [S`\(P(X>45)=1-P\left(Z<\frac{10}{6}\right)\).`],
      S`\(\approx${r(pLate)}\)`],
    ["Level 3 · Inverse normal", S`The same commute time is \(N(\mu,6^2)\) on a new route, and \(P(X>45)=0.02\). Find μ.`,
      [S`\(P(X<45)=0.98\Rightarrow z=${r(invPhi(0.98))}\).`, S`\(\mu=45-${r(invPhi(0.98))}(6)\).`],
      S`\(\mu\approx${r(45 - invPhi(0.98) * 6, 2)}\) min`],
    ["Level 3 · Normal then binomial", S`On the original route, find the probability of being late at least once in a 5-day week.`,
      [S`Daily \(p\approx${r(pLate)}\); \(Y\sim B(5,p)\).`, S`\(1-(1-p)^5\).`],
      S`\(\approx${r(1 - (1 - pLate) ** 5)}\)`,
      fig(probDoc([0, 1, 2, 3], [0, 1, 2, 3].map((k) => binom(5, pLate, k)), { hi: [1, 2, 3], xlab: "late days" }), "B(5, 0.0478): at least one late day")],
  ]),

  practice([
    q("Level 1 · expected value", S`\(P(X=x)=\frac{x}{15}\) for \(x=1,\dots,5\). Find \(E(X)\) (3 d.p.).`, num(r(55 / 15, 3), 0.001),
      "Σ x²/15.", [S`\(\frac{55}{15}\).`], S`\(\approx3.667\)`),
    q("Level 1 · binomial", S`\(X\sim B(20,0.1)\). Find \(P(X=0)\) (4 d.p.).`, num(r(0.9 ** 20), 0.0001),
      "0.9²⁰.", ["GDC."], S`\(${r(0.9 ** 20)}\)`),
    q("Level 2 · normal", S`\(X\sim N(12,2^2)\). Find \(P(10<X<14)\) (4 d.p.).`, num(r(normCdf(14, 12, 2) - normCdf(10, 12, 2)), 0.0005),
      "μ ± σ.", ["≈ 68%."], S`\(${r(normCdf(14, 12, 2) - normCdf(10, 12, 2))}\)`),
    q("Level 2 · critical value", S`Find z with \(P(Z>z)=0.1\) (4 d.p.).`, num(r(invPhi(0.9)), 0.0005),
      "Left area 0.9.", ["Inverse normal."], S`\(${r(invPhi(0.9))}\)`),
    q("Level 2 · variance", S`Find the variance of \(B(50,0.2)\).`, num(8),
      "np(1 − p).", [S`\(50(0.2)(0.8)\).`], S`\(8\)`),
  ]),

  ...hard([
    ["A fair prize", S`Two dice are rolled; a double wins \$k. Playing costs \$1. Find k for a fair game.`,
      [S`\(P(\text{double})=\frac16\); expected gain \(\frac16k-1=0\).`],
      S`\(k=6\)`,
      fig(probDoc(["−1", "+5"], [5 / 6, 1 / 6], { hi: ["+5"], xlab: "gain ($)", ylab: "P" }), "Gains −$1 and +$5 balance at 0 when k = 6")],
    ["Quality control", S`Rods have length \(N(20,\sigma^2)\) cm and 5% are longer than 21 cm. (a) Find σ. (b) Find the proportion between 19.5 and 20.5 cm.`,
      [S`(a) \(\frac{1}{\sigma}=${r(invPhi(0.95))}\Rightarrow\sigma\approx${r(sM)}\).`, S`(b) \(P(19.5<X<20.5)=2P(Z<\frac{0.5}{\sigma})-1\).`],
      S`(a) \(\sigma\approx${r(sM)}\); (b) \(\approx${r(2 * Phi(0.5 / sM) - 1)}\)`,
      fig(normalDoc(20, sM, [{ a: 19.5, b: 20.5, color: "green" }, { a: 21, b: Infinity, color: "red" }], { lines: [21] }), "Red: 5% longer than 21 cm; green: between 19.5 and 20.5")],
  ], [
    q("Level 3 · binomial from moments", S`\(X\sim B(n,p)\) with mean 6 and variance 4.2. Find \(P(X=6)\) (4 d.p.).`, num(r(binom(20, 0.3, 6)), 0.0005),
      "1 − p = 0.7, n = 20.", [S`\(X\sim B(20,0.3)\).`], S`\(${r(binom(20, 0.3, 6))}\)`),
    q("Level 3 · lower quartile", S`Find a with \(P(X<a)=0.25\) for \(X\sim N(70,10^2)\) (2 d.p.).`, num(r(70 + invPhi(0.25) * 10, 2), 0.01),
      "z ≈ −0.6745.", [S`\(70-6.745\).`], S`\(${r(70 + invPhi(0.25) * 10, 2)}\)`),
    q("Level 3 · game", S`A game costs \$2: roll a die and win \$x if the score x is 5 or 6, otherwise nothing. Find the expected gain (3 d.p.).`, num(r(11 / 6 - 2, 3), 0.001),
      "E(win) = (5 + 6)/6.", [S`\(\frac{11}{6}-2\).`], S`\(\approx-0.167\)`),
  ]),

  wrapUp({
    qas: [
      ["Which distribution is it?", "Listed values: discrete table; counted successes: binomial; continuous measurements: normal."],
      ["What is E(X) used for?", "Long-run averages and deciding whether a game is fair."],
      ["When does a normal feed a binomial?", "When each trial's success probability comes from a normal calculation."],
      ["How do I find an unknown σ?", "Use z = (x − μ)/σ with z from the inverse normal."],
      ["What must probabilities satisfy?", "Each between 0 and 1, summing to 1."],
    ],
    summary: [
      "Σ P = 1 and E(X) = Σ xP.",
      "B(n, p): np, np(1 − p).",
      "Normal: sketch, shade, calculate.",
      "Inverse normal: left area.",
    ],
    next: "Chapter 15 guides you through the mathematical exploration.",
  }),
];
