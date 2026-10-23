// IB AA SL 14.2 — The Binomial Distribution: conditions, the binomial formula, cumulative probabilities with technology, mean and variance, finding n or p
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, probDoc, binom, binomCdf } from "./figs14.mjs";

export const TITLE = "14.2 The Binomial Distribution";
export const ID = "1baa0014-0001-4001-8001-000000001402";
const S = String.raw;
const r4 = (v) => Math.round(v * 10000) / 10000;
const dist = (n, p) => Array.from({ length: n + 1 }, (_, k) => binom(n, p, k));
const xs = (n) => Array.from({ length: n + 1 }, (_, k) => k);

export const blocks = () => [
  intro({
    icon: "🪙",
    title: "The Binomial Distribution",
    overview: S`Many random variables count successes in a fixed number of repeated trials: heads in 10 tosses, faulty items in a batch of 20, correct guesses on a quiz. When the trials are independent and the success probability p stays the same, the count follows a binomial distribution \(X\sim B(n,p)\). Its probabilities come from a formula (or a GDC), and its mean and variance are simply \(np\) and \(np(1-p)\).`,
    goals: [
      "recognise when a situation is binomial;",
      S`use \(P(X=r)=\binom nr p^r(1-p)^{n-r}\);`,
      "find cumulative probabilities such as P(X ≤ r) and P(X ≥ r) with technology;",
      "find the mean and variance of a binomial distribution;",
      "find n or p from given information.",
    ],
    curriculum: "SL 4.8 (binomial distribution; mean and variance of the binomial distribution)",
    prior: [
      [S`Evaluate \(\binom52\).`, S`\(10\).`],
      [S`Find \(0.3^2\times0.7^3\) (4 d.p.).`, S`\(0.0309\).`],
      [S`Write \(P(X\ge3)\) using \(P(X\le2)\).`, S`\(1-P(X\le2)\).`],
    ],
    words: [
      ["Trial", "one repetition with outcome success or failure", ""],
      ["B(n, p)", "number of successes in n independent trials with success probability p", ""],
      ["Binomial coefficient", S`\(\binom nr=\frac{n!}{r!(n-r)!}\), the number of arrangements`, ""],
      ["Cumulative probability", S`\(P(X\le r)\)`, ""],
      ["Mean and variance", S`\(E(X)=np\), \(\mathrm{Var}(X)=np(1-p)\)`, ""],
    ],
  }),

  section("📌 When is it binomial?", S`
  <p>Four conditions: a fixed number of trials n; each trial is a success or a failure; the trials are independent; the probability of success p is the same every time. Then \(X\) = number of successes has \(X\sim B(n,p)\) and</p>
  <p style="text-align:center">\(P(X=r)=\binom nr p^r(1-p)^{n-r},\quad r=0,1,\dots,n.\)</p>
  ${fig(probDoc(xs(6), dist(6, 0.5), { xlab: "heads in 6 tosses" }), "B(6, 0.5) is symmetric about 3")}
  ${fig(probDoc(xs(10), dist(10, 0.2), { hi: [0, 1, 2], labels: false, xlab: "x" }), `B(10, 0.2): P(X ≤ 2) = ${r4(binomCdf(10, 0.2, 2))} (green), skewed right`)}
  ${table(["Situation", "Binomial?"], [["number of 6s in 12 rolls of a die", "yes: B(12, 1/6)"], ["cards drawn until an ace appears", "no: n is not fixed"], ["red balls in 3 draws without replacement", "no: p changes"], ["patients helped by a drug among 40 (p = 0.7 each)", "yes: B(40, 0.7)"]])}
  ${keyIdea("Fixed n, two outcomes, independent trials, constant p — then use B(n, p).")}`),

  section("📌 Cumulative probabilities, mean and variance", S`
  <p>A GDC gives \(P(X=r)\) (binomial pdf) and \(P(X\le r)\) (binomial cdf). Other events are rewritten: \(P(X\ge r)=1-P(X\le r-1)\), \(P(X<r)=P(X\le r-1)\), \(P(a\le X\le b)=P(X\le b)-P(X\le a-1)\).</p>
  ${fig(probDoc(xs(20), dist(20, 0.7), { hi: [14, 15, 16, 17, 18, 19, 20], labels: false, xlab: "x" }), `B(20, 0.7): P(X ≥ 14) = 1 − P(X ≤ 13) = ${r4(1 - binomCdf(20, 0.7, 13))}`)}
  <p>The mean \(np\) is where the distribution balances; the variance \(np(1-p)\) is largest when \(p=0.5\). For \(B(20,0.7)\): \(E(X)=14\), \(\mathrm{Var}(X)=4.2\), standard deviation \(\approx2.05\).</p>
  ${fig(probDoc(xs(12), dist(12, 0.3), { labels: false, xlab: "x" }), "B(12, 0.3): mean 3.6, variance 2.52")}
  ${watchOut([
    S`"At least 3" is \(X\ge3=1-P(X\le2)\), not \(1-P(X\le3)\).`,
    "Check independence and constant p before using the binomial.",
    "Variance is np(1 − p); standard deviation is its square root.",
    "Draws without replacement are not binomial.",
  ])}`),

  section("📌 Explore", S`<p>Change n and p, then choose an event. The green bars show the probability being calculated.</p>`),

  widget("ibBinomial", { init: [10, 0.3, 0, 3] }),

  examples([
    ["Level 1 · Formula", S`\(X\sim B(8,0.3)\). Find \(P(X=2)\).`,
      [S`\(\binom82(0.3)^2(0.7)^6=28(0.09)(0.117649)\).`],
      S`\(\approx${r4(binom(8, 0.3, 2))}\)`],
    ["Level 1 · Mean and variance", S`\(X\sim B(25,0.4)\). Find \(E(X)\) and \(\mathrm{Var}(X)\).`,
      [S`\(np=10\), \(np(1-p)=10(0.6)\).`],
      S`\(E(X)=10\), \(\mathrm{Var}(X)=6\)`],
    ["Level 2 · Cumulative", S`\(X\sim B(12,0.15)\). Find \(P(X\le2)\).`,
      [S`GDC binomial cdf, or \(P(0)+P(1)+P(2)\).`],
      S`\(\approx${r4(binomCdf(12, 0.15, 2))}\)`],
    ["Level 2 · At least", S`\(X\sim B(10,0.25)\). Find \(P(X\ge3)\).`,
      [S`\(1-P(X\le2)\).`],
      S`\(\approx${r4(1 - binomCdf(10, 0.25, 2))}\)`],
    ["Level 3 · Finding n", S`Each component fails with probability 0.2. How many must be tested so that the probability of at least one failure is at least 0.95?`,
      [S`\(1-0.8^n\ge0.95\Rightarrow0.8^n\le0.05\).`, S`\(n\ge\frac{\ln0.05}{\ln0.8}\approx13.4\).`],
      S`\(n=14\)`,
      fig(probDoc(Array.from({ length: 16 }, (_, i) => i + 1), Array.from({ length: 16 }, (_, i) => 1 - 0.8 ** (i + 1)), { hi: [14, 15, 16], labels: false, xlab: "n", ylab: "P(at least one)" }), "1 − 0.8ⁿ first reaches 0.95 at n = 14 (green)")],
  ]),

  practice([
    q("Level 1 · all successes", S`\(X\sim B(5,0.5)\). Find \(P(X=5)\) (5 d.p.).`, num(0.03125, 0.00001),
      "0.5⁵.", [S`\(\frac1{32}\).`], S`\(0.03125\)`),
    q("Level 1 · mean", S`Find the mean of \(B(40,0.15)\).`, num(6),
      "np.", [S`\(40\times0.15\).`], S`\(6\)`),
    q("Level 2 · formula", S`\(X\sim B(6,0.4)\). Find \(P(X=3)\) (4 d.p.).`, num(r4(binom(6, 0.4, 3)), 0.0001),
      "20(0.064)(0.216).", [S`\(\binom63(0.4)^3(0.6)^3\).`], S`\(${r4(binom(6, 0.4, 3))}\)`),
    q("Level 2 · conditions", "Which is binomial?", choice(["the number of correct answers when guessing 20 four-option questions", "the number of cards drawn until a heart appears", "the number of aces in 5 cards dealt from one deck", "the time taken to finish a test"], 0),
      "Fixed n, independent, constant p.", ["B(20, 0.25)."], "guessing 20 questions"),
    q("Level 2 · top two values", S`\(X\sim B(9,0.6)\). Find \(P(X\ge8)\) (4 d.p.).`, num(r4(binom(9, 0.6, 8) + binom(9, 0.6, 9)), 0.0001),
      "P(8) + P(9).", [S`\(9(0.6)^8(0.4)+0.6^9\).`], S`\(${r4(binom(9, 0.6, 8) + binom(9, 0.6, 9))}\)`),
  ]),

  ...hard([
    ["A binomial inside a binomial", S`A bus is late on a given day with probability 0.1, independently. (a) Find the probability it is late on at least 2 of the 5 school days in a week. (b) Find the probability that this happens in at least one of 4 weeks.`,
      [S`(a) \(Y\sim B(5,0.1)\): \(q=1-P(Y\le1)=1-0.9^5-5(0.1)(0.9)^4\approx${r4(1 - binomCdf(5, 0.1, 1))}\).`, S`(b) weeks \(W\sim B(4,q)\): \(1-(1-q)^4\).`],
      S`(a) \(\approx${r4(1 - binomCdf(5, 0.1, 1))}\); (b) \(\approx${r4(1 - binomCdf(5, 0.1, 1) ** 4)}\)`,
      fig(probDoc(xs(5), dist(5, 0.1), { hi: [2, 3, 4, 5], xlab: "late days in a week" }), "B(5, 0.1): the green bars give q")],
    ["Finding n and p", S`\(X\sim B(n,p)\) has mean 3.6 and variance 2.52. Find n and p.`,
      [S`\(\frac{np(1-p)}{np}=1-p=\frac{2.52}{3.6}=0.7\).`, S`\(p=0.3\), \(n=\frac{3.6}{0.3}=12\).`],
      S`\(n=12,\ p=0.3\)`,
      fig(probDoc(xs(12), dist(12, 0.3), { hi: [3, 4], labels: false, xlab: "x" }), "B(12, 0.3) peaks near its mean 3.6")],
  ], [
    q("Level 3 · smallest n", S`\(X\sim B(n,0.5)\). Find the smallest n with \(P(X=0)<0.01\).`, num(7),
      "0.5ⁿ < 0.01.", [S`\(0.5^6\approx0.0156\), \(0.5^7\approx0.0078\).`], S`\(7\)`),
    q("Level 3 · find p", S`\(X\sim B(10,p)\) with \(P(X=0)=0.1074\) (4 d.p.). Find p.`, num(0.2, 0.001),
      "(1 − p)¹⁰ = 0.1074.", [S`\(1-p=0.1074^{0.1}\approx0.8\).`], S`\(0.2\)`),
    q("Level 3 · interval", S`\(X\sim B(15,0.35)\). Find \(P(4\le X\le7)\) (4 d.p.).`, num(r4(binomCdf(15, 0.35, 7) - binomCdf(15, 0.35, 3)), 0.0001),
      "P(X ≤ 7) − P(X ≤ 3).", ["GDC cumulative."], S`\(${r4(binomCdf(15, 0.35, 7) - binomCdf(15, 0.35, 3))}\)`),
  ]),

  wrapUp({
    qas: [
      ["When can I use B(n, p)?", "Fixed number of independent trials, each a success with the same probability p."],
      ["What is P(X = r)?", "C(n, r) pʳ (1 − p)ⁿ⁻ʳ."],
      ["How do I find P(X ≥ r)?", "1 − P(X ≤ r − 1)."],
      ["What are the mean and variance?", "np and np(1 − p)."],
      ["How do I find n?", "Write an inequality such as 1 − (1 − p)ⁿ ≥ k and solve with logs or trial."],
    ],
    summary: [
      "Check the four conditions.",
      "pdf for one value, cdf for ≤.",
      "Rewrite ≥, <, intervals using ≤.",
      "Mean np, variance np(1 − p).",
    ],
    next: "14.3 introduces the normal distribution.",
  }),
];
