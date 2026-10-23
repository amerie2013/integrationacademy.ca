// 14.2 The Binomial Distribution — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { probDoc, binom, binomCdf } from "../figs14.mjs";

const S = String.raw;
const r4 = (v) => Math.round(v * 10000) / 10000;
const xs = (n) => Array.from({ length: n + 1 }, (_, k) => k);
const ps = (n, p) => xs(n).map((k) => binom(n, p, k));
const qDay = 1 - binomCdf(4, 0.3, 1);

export const TOPIC = "14.2 The Binomial Distribution";
export const Q = [
  num(S`The graph shows $B(12,0.4)$. Find $P(X>E(X))$ (4 d.p.).`, r4(1 - binomCdf(12, 0.4, 4)), "E(X) = 4.8, so P(X ≥ 5) = 1 − P(X ≤ 4).", probDoc(xs(12), ps(12, 0.4), { hi: [5, 6, 7, 8, 9, 10, 11, 12], labels: false, xlab: "x" }), 0.0001),
  num(S`$X\sim B(20,0.25)$. Find $P(|X-5|\le2)$ (4 d.p.).`, r4(binomCdf(20, 0.25, 7) - binomCdf(20, 0.25, 2)), "P(3 ≤ X ≤ 7).", null, 0.0001),
  num(S`Find the least n such that $P(X\ge1)>0.99$ when $X\sim B(n,0.1)$.`, 44, "0.9ⁿ < 0.01 ⇒ n > 43.7."),
  num(S`$X\sim B(n,p)$ with $E(X)=4$ and $\mathrm{Var}(X)=3.2$. Find $P(X=4)$ (4 d.p.).`, r4(binom(20, 0.2, 4)), "1 − p = 0.8, p = 0.2, n = 20.", null, 0.0001),
  num(S`A machine is serviced if at least 2 of 4 daily checks fail; each fails with probability 0.3. Over 5 days, find P(it is serviced on exactly 1 day) (4 d.p.).`, r4(binom(5, qDay, 1)), "Daily q = 1 − P(Y ≤ 1) for B(4, 0.3); then B(5, q).", null, 0.0001),
  mc(S`$X\sim B(n,0.5)$ and $P(X=1)=P(X=2)$. Then n is:`, "3", ["2", "4", "5"], "n(0.5)ⁿ = C(n, 2)(0.5)ⁿ ⇒ n = n(n − 1)/2."),
  num(S`$X\sim B(5,p)$ and $P(X=0)=P(X=1)$. Find p (4 d.p.).`, r4(1 / 6), "(1 − p)⁵ = 5p(1 − p)⁴ ⇒ 1 − p = 5p.", null, 0.0001),
  tf(S`If $X\sim B(n,p)$ then $n-X\sim B(n,1-p)$.`, true, "Counting failures instead of successes."),
  ms(S`For $X\sim B(10,0.2)$, which are true? Select all.`, [S`$P(X\le1)\approx0.3758$`, S`$E(X)=2$`, S`$P(X\ge2)=1-P(X\le1)$`, S`$\mathrm{Var}(X)=2$`], [0, 1, 2], "Var = 1.6."),
  num(S`The graph shows $B(6,p)$ with $P(X=6)\approx0.1176$. Find p (2 d.p.).`, 0.7, "p⁶ = 0.1176 ⇒ p ≈ 0.7.", probDoc(xs(6), ps(6, 0.7), { hi: [6], labels: false, xlab: "x" }), 0.005),
  num(S`On a multiple-choice test of 15 questions with 5 options, a student knows 6 answers and guesses the rest. Find P(at least 9 correct) (4 d.p.).`, r4(1 - binomCdf(9, 0.2, 2)), "Needs at least 3 of the 9 guesses: B(9, 0.2).", null, 0.0001),
  num(S`A biased coin with P(head) = p is tossed 3 times. P(exactly 2 heads) = 0.384 and p > 0.6. Find p.`, 0.8, "3p²(1 − p) = 0.384; p = 0.8 gives 3(0.64)(0.2) = 0.384 and is the only root above 0.6.", null, 0.001),
  num(S`$X\sim B(30,0.6)$. Find the probability that X is within one standard deviation of its mean (4 d.p.).`, r4(binomCdf(30, 0.6, 20) - binomCdf(30, 0.6, 15)), "μ = 18, σ ≈ 2.683: 16 ≤ X ≤ 20.", null, 0.0001),
  num(S`Each egg in a box of 6 is cracked with probability 0.05. A shop rejects a box with 2 or more cracked eggs. Find the probability a box is rejected (4 d.p.).`, r4(1 - binomCdf(6, 0.05, 1)), "1 − P(X ≤ 1).", null, 0.0001),
  mc(S`$X\sim B(8,p)$. For which p is $P(X=4)$ largest?`, "0.5", ["0.4", "0.6", "0.25"], "The distribution centres at 4 when np = 4."),
  num(S`The graph shows $B(15,0.2)$. Find the most likely value of X.`, 3, "The tallest bar, at np = 3.", probDoc(xs(15), ps(15, 0.2), { labels: false, xlab: "x" })),
  num(S`$X\sim B(n,0.3)$ and $P(X=0)<0.05$. Find the least n.`, 9, "0.7ⁿ < 0.05 ⇒ n > 8.4."),
  tf(S`For $X\sim B(n,p)$, $E(X^2)=np(1-p)+n^2p^2$.`, true, "Var = E(X²) − [E(X)]²."),
  num(S`The graph shows $B(10,0.5)$ with the event shaded. Find the probability shown (4 d.p.).`, r4(binomCdf(10, 0.5, 2) + 1 - binomCdf(10, 0.5, 7)), "P(X ≤ 2) + P(X ≥ 8).", probDoc(xs(10), ps(10, 0.5), { hi: [0, 1, 2, 8, 9, 10], labels: false, xlab: "x" }), 0.0001),
  num(S`Two players each have $B(5,0.5)$ heads. Find P(both get exactly 3 heads) (4 d.p.).`, r4(binom(5, 0.5, 3) ** 2), "(10/32)².", null, 0.0001),
];
