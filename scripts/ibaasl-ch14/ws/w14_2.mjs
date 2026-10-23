// IB AA SL Worksheet 14.2 — The Binomial Distribution (teacher edition)
import { probT } from "./figT.mjs";
import { binom, binomCdf } from "../figs14.mjs";

const S = String.raw;
const r = (v) => (Math.round(v * 10000) / 10000).toFixed(4);
const xs = (n) => Array.from({ length: n + 1 }, (_, k) => k);
const ps = (n, p) => xs(n).map((k) => binom(n, p, k));

const EXAMPLES = [
  { title: "Is it binomial?", q: "A die is rolled 20 times and X counts the 1s. Explain why X is binomial and state its parameters.",
    steps: ["Fixed n = 20; success = rolling a 1; rolls independent; p = 1/6 each time."], ans: S`$X\sim B\left(20,\frac16\right)$` },
  { title: "Using the formula", q: S`$X\sim B(7,0.2)$. Find $P(X=1)$.`,
    steps: [S`$\binom71(0.2)(0.8)^6$.`], ans: S`$\approx${r(binom(7, 0.2, 1))}$` },
  { title: "A symmetric case", q: S`$X\sim B(10,0.5)$. Find $P(X=5)$.`,
    steps: [S`$\binom{10}{5}(0.5)^{10}=\frac{252}{1024}$.`], ans: S`$\approx${r(binom(10, 0.5, 5))}$` },
  { title: "Cumulative", q: S`$X\sim B(15,0.3)$. Find $P(X\le4)$.`,
    steps: ["GDC binomial cdf."], ans: S`$\approx${r(binomCdf(15, 0.3, 4))}$` },
  { title: "More than", q: S`For the same X, find $P(X>4)$.`,
    steps: [S`$1-P(X\le4)$.`], ans: S`$\approx${r(1 - binomCdf(15, 0.3, 4))}$` },
  { title: "Mean and variance", q: S`$X\sim B(30,0.1)$. Find $E(X)$ and $\mathrm{Var}(X)$.`,
    steps: [S`$np=3$; $np(1-p)=2.7$.`], ans: S`$3$ and $2.7$` },
  { title: "An interval", q: S`$X\sim B(12,0.6)$. Find $P(5\le X\le8)$.`,
    fig: probT(xs(12), ps(12, 0.6), { hi: [5, 6, 7, 8], labels: false, xlab: "x" }, 5.6),
    steps: [S`$P(X\le8)-P(X\le4)$.`], ans: S`$\approx${r(binomCdf(12, 0.6, 8) - binomCdf(12, 0.6, 4))}$` },
  { title: "Guessing on a quiz", q: "A quiz has 10 questions with 4 options each. A student guesses every answer and needs 5 to pass. Find the probability of passing.",
    steps: [S`$X\sim B(10,0.25)$; $P(X\ge5)=1-P(X\le4)$.`], ans: S`$\approx${r(1 - binomCdf(10, 0.25, 4))}$` },
  { title: "Finding n", q: "How many times must a fair die be rolled so that the probability of at least one six exceeds 0.9?",
    fig: probT(Array.from({ length: 16 }, (_, i) => i + 1), Array.from({ length: 16 }, (_, i) => 1 - (5 / 6) ** (i + 1)), { hi: [13, 14, 15, 16], labels: false, xlab: "n", ylab: "P(at least one six)" }, 5.6),
    steps: [S`$1-\left(\frac56\right)^n>0.9\Rightarrow n>\frac{\ln0.1}{\ln(5/6)}\approx12.6$.`], ans: S`$n=13$` },
];

const PROBLEMS = [
  { level: 1, q: S`$X\sim B(4,0.5)$. Find $P(X=2)$.`, recap: "Formula.", ans: S`$0.375$` },
  { level: 1, q: S`Find the mean of $B(60,0.25)$.`, recap: "np.", ans: S`$15$` },
  { level: 1, q: S`Find the variance of $B(20,0.5)$.`, recap: "np(1 − p).", ans: S`$5$` },
  { level: 2, q: S`$X\sim B(9,0.3)$. Find $P(X=0)$.`, recap: S`$0.7^9$.`, ans: S`$\approx${r(0.7 ** 9)}$` },
  { level: 2, q: S`$X\sim B(8,0.45)$. Find $P(X\le2)$.`, recap: "Cumulative.", ans: S`$\approx${r(binomCdf(8, 0.45, 2))}$` },
  { level: 2, q: S`$X\sim B(20,0.15)$. Find $P(X\ge3)$.`, recap: S`$1-P(X\le2)$.`, ans: S`$\approx${r(1 - binomCdf(20, 0.15, 2))}$` },
  { level: 2, q: S`$X\sim B(5,p)$ and $P(X=5)=0.32768$. Find p.`, recap: S`$p^5$.`, ans: S`$0.8$` },
  { level: 2, q: S`The graph shows $B(8,0.5)$. Find $P(X=4)$ exactly.`, recap: S`$\binom84/256$.`, ans: S`$\frac{70}{256}\approx0.2734$`,
    fig: probT(xs(8), ps(8, 0.5), { hi: [4], labels: false, xlab: "x" }, 5) },
  { level: 3, space: 4, q: "Seeds germinate with probability 0.85. Find the probability that at least 27 of 30 seeds germinate.", recap: S`$1-P(X\le26)$.`, ans: S`$\approx${r(1 - binomCdf(30, 0.85, 26))}$` },
  { level: 3, space: 4, q: "Items are defective with probability 0.05. Find the least number to inspect so that the probability of at least one defective is at least 0.99.", recap: S`$0.95^n\le0.01$.`, ans: S`$90$` },
  { level: 3, space: 4, q: S`$X\sim B(n,p)$ has mean 8 and variance 4.8. Find n and p.`, recap: S`$1-p=0.6$.`, ans: S`$n=20,\ p=0.4$` },
  { level: 3, space: 4, q: "Each item in a box of 10 is defective with probability 0.02. Find the probability that a box has no defectives, and that all 5 boxes in a delivery have none.", recap: "Two binomials.", ans: S`$0.98^{10}\approx${r(0.98 ** 10)}$; $\approx${r(0.98 ** 50)}$` },
  { level: 3, space: 4, q: "Explain why the number of hearts in 5 cards dealt from one deck is not binomial.", recap: "Without replacement.", ans: "p changes after each card; the trials are not independent" },
];

export const WS = {
  code: "14.2",
  title: "The Binomial Distribution",
  bigideas: S`If there are n independent trials, each a success with the same probability p, the number of successes is $X\sim B(n,p)$ with $P(X=r)=\binom nr p^r(1-p)^{n-r}$. Use technology for cumulative probabilities and rewrite other events with $P(X\le r)$. The mean is $np$ and the variance $np(1-p)$.`,
  goals: ["Recognise binomial situations.", "Use the formula.", "Find cumulative probabilities.", "Use np and np(1 − p)."],
  curriculum: "SL 4.8",
  vocab: [["Trial", "success or failure"], ["B(n, p)", "count of successes"], ["cdf", "P(X ≤ r)"], ["Mean, variance", "np, np(1 − p)"]],
  hook: "If you guess every answer on a 10-question quiz, how likely are you to pass?",
  concepts: [
    ["1. Conditions", S`${probT(xs(6), ps(6, 0.5), { labels: false, xlab: "x" }, 4.6)} $B(6,0.5)$ is symmetric.`],
    ["2. Cumulative", "Rewrite with ≤."],
    ["3. Moments", "np and np(1 − p)."],
  ],
  tips: ["Check the four conditions.", "At least r: 1 − P(X ≤ r − 1).", "Use the GDC for sums.", "Variance, not standard deviation.", "Without replacement is not binomial."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
