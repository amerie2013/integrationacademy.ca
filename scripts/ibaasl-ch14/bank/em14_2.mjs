// 14.2 The Binomial Distribution — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { probDoc, binom, binomCdf } from "../figs14.mjs";

const S = String.raw;
const r4 = (v) => Math.round(v * 10000) / 10000;
const xs = (n) => Array.from({ length: n + 1 }, (_, k) => k);
const ps = (n, p) => xs(n).map((k) => binom(n, p, k));

export const E = [
  mc("Which is a condition for a binomial distribution?", "a fixed number of trials", ["the trials depend on each other", "p changes each trial", "more than two outcomes per trial"], "Fixed n, independent, constant p, two outcomes."),
  mc(S`For $X\sim B(n,p)$, $E(X)$ equals:`, S`$np$`, [S`$np(1-p)$`, S`$\frac np$`, S`$n+p$`], "Mean."),
  mc(S`For $X\sim B(n,p)$, $\mathrm{Var}(X)$ equals:`, S`$np(1-p)$`, [S`$np$`, S`$\sqrt{np}$`, S`$p(1-p)$`], "Variance."),
  mc(S`$P(X\ge4)$ for a binomial X equals:`, S`$1-P(X\le3)$`, [S`$1-P(X\le4)$`, S`$P(X\le4)$`, S`$1-P(X<3)$`], "Complement."),
  mc(S`$\binom{6}{2}$ equals:`, "15", ["12", "30", "6"], "6 · 5 / 2."),
  num(S`$X\sim B(3,0.5)$. Find $P(X=3)$.`, 0.125, "0.5³.", null, 0.0001),
  num(S`$X\sim B(4,0.1)$. Find $P(X=0)$ (4 d.p.).`, r4(0.9 ** 4), "0.9⁴.", null, 0.0001),
  num(S`Find the mean of $B(50,0.3)$.`, 15, "np."),
  num(S`Find the variance of $B(50,0.3)$.`, 10.5, "15 × 0.7.", null, 0.001),
  num(S`$X\sim B(5,0.2)$. Find $P(X=1)$ (4 d.p.).`, r4(binom(5, 0.2, 1)), "5(0.2)(0.8)⁴.", null, 0.0001),
  tf(S`Drawing 4 cards without replacement and counting kings is binomial.`, false, "p changes; not independent."),
  tf(S`$X\sim B(10,0.5)$ is symmetric about 5.`, true, "p = 0.5."),
  tf(S`For $X\sim B(n,p)$, $P(X=0)=(1-p)^n$.`, true, "All failures."),
  fill(S`If $X\sim B(n,p)$, the mean is ___.`, ["np", "n p", "n×p"], "E(X) = np."),
  ms("Which situations are binomial? Select all.", ["number of heads in 20 tosses", "number of 4s in 10 rolls of a die", "rolls needed to get a 6", "heights of 30 students"], [0, 1], "Fixed n, success counted."),
  mc("The graph shows B(4, 0.5). P(X = 2) is:", "0.375", ["0.25", "0.5", "0.0625"], "6/16.", probDoc(xs(4), ps(4, 0.5), { hi: [2], xlab: "x" })),
  mc("The graph shows a binomial distribution. Its shape suggests p is:", "less than 0.5", ["exactly 0.5", "greater than 0.5", "1"], "Skewed to the right: successes are rare.", probDoc(xs(8), ps(8, 0.15), { labels: false, xlab: "x" })),
  num(S`$X\sim B(2,0.3)$. Find $P(X=1)$.`, 0.42, "2(0.3)(0.7).", null, 0.0001),
  num(S`$X\sim B(6,0.5)$. Find $P(X=6)$ (6 d.p.).`, 0.015625, "0.5⁶ = 1/64.", null, 0.000001),
  mc(S`$X\sim B(100,0.02)$. $E(X)$ is:`, "2", ["0.02", "20", "1.96"], "100 × 0.02."),
];

export const M = [
  num(S`$X\sim B(8,0.25)$. Find $P(X=3)$ (4 d.p.).`, r4(binom(8, 0.25, 3)), "56(0.25)³(0.75)⁵.", null, 0.0001),
  num(S`$X\sim B(10,0.4)$. Find $P(X\le2)$ (4 d.p.).`, r4(binomCdf(10, 0.4, 2)), "Cumulative.", null, 0.0001),
  num(S`$X\sim B(10,0.4)$. Find $P(X\ge7)$ (4 d.p.).`, r4(1 - binomCdf(10, 0.4, 6)), "1 − P(X ≤ 6).", null, 0.0001),
  num(S`$X\sim B(14,0.2)$. Find $P(X<3)$ (4 d.p.).`, r4(binomCdf(14, 0.2, 2)), "P(X ≤ 2).", null, 0.0001),
  num(S`$X\sim B(16,0.5)$. Find $P(6\le X\le10)$ (4 d.p.).`, r4(binomCdf(16, 0.5, 10) - binomCdf(16, 0.5, 5)), "P(X ≤ 10) − P(X ≤ 5).", null, 0.0001),
  num(S`$X\sim B(n,0.25)$ has mean 7. Find n.`, 28, "0.25n = 7."),
  mc(S`$X\sim B(n,p)$ has mean 12 and variance 3. Then p is:`, "0.75", ["0.25", "0.5", "0.8"], "1 − p = 3/12."),
  mc(S`A test has 12 true/false questions answered at random. The expected number correct is:`, "6", ["12", "3", "4"], "B(12, 0.5)."),
  mc("Which expression gives P(X = 3) for B(7, 0.4)?", S`$\binom73(0.4)^3(0.6)^4$`, [S`$\binom73(0.4)^4(0.6)^3$`, S`$(0.4)^3(0.6)^4$`, S`$7(0.4)^3$`], "Choose positions, then multiply."),
  tf(S`For fixed n, the variance of $B(n,p)$ is greatest when $p=0.5$.`, true, "p(1 − p) peaks at 0.5."),
  tf(S`$P(X\le3)+P(X\ge3)=1$ for a binomial X.`, false, "P(X = 3) is counted twice."),
  num(S`Each light bulb is faulty with probability 0.03. In a pack of 12, find P(no faulty bulbs) (4 d.p.).`, r4(0.97 ** 12), "0.97¹².", null, 0.0001),
  num(S`A basketball player scores 70% of free throws. In 6 attempts, find P(exactly 5) (4 d.p.).`, r4(binom(6, 0.7, 5)), "6(0.7)⁵(0.3).", null, 0.0001),
  num(S`$X\sim B(20,0.35)$. Find the standard deviation (3 d.p.).`, Math.round(Math.sqrt(20 * 0.35 * 0.65) * 1000) / 1000, "√(np(1 − p)).", null, 0.001),
  ms(S`For $X\sim B(5,0.6)$, which are true? Select all.`, [S`$E(X)=3$`, S`$\mathrm{Var}(X)=1.2$`, S`$P(X=0)=0.4^5$`, S`$P(X=5)=0.4^5$`], [0, 1, 2], "P(X = 5) = 0.6⁵."),
  mc("The graph shows B(10, 0.3). The shaded bars represent:", S`$P(X\ge5)$`, [S`$P(X\le5)$`, S`$P(X=5)$`, S`$P(X>5)$`], "Bars 5 to 10.", probDoc(xs(10), ps(10, 0.3), { hi: [5, 6, 7, 8, 9, 10], labels: false, xlab: "x" })),
  mc("The graph shows B(9, 0.5). The most likely values are:", "4 and 5", ["4.5", "5 only", "0 and 9"], "Symmetric with two equal peaks.", probDoc(xs(9), ps(9, 0.5), { labels: false, xlab: "x" })),
  num(S`$X\sim B(11,0.9)$. Find $P(X=11)$ (4 d.p.).`, r4(0.9 ** 11), "0.9¹¹.", null, 0.0001),
  num(S`$X\sim B(25,0.08)$. Find $P(X\ge1)$ (4 d.p.).`, r4(1 - 0.92 ** 25), "1 − 0.92²⁵.", null, 0.0001),
  num(S`$X\sim B(7,0.5)$. Find $P(X\le3)$.`, 0.5, "Symmetry: P(X ≤ 3) = P(X ≥ 4).", null, 0.0001),
];
