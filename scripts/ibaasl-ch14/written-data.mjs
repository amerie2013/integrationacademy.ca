// IB AA SL chapter 14 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { probDoc, normalDoc, Phi, invPhi, binom, binomCdf } from "./figs14.mjs";

const T = { 1: "14.1 Discrete Random Variables and Expected Value", 2: "14.2 The Binomial Distribution", 3: "14.3 The Normal Distribution", 4: "14.4 Inverse Normal and Standardisation" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const f = (v, d = 4) => String(Math.round(v * 10 ** d) / 10 ** d);
const xs = (n) => Array.from({ length: n + 1 }, (_, k) => k);
const q20 = 1 - binomCdf(20, 0.05, 1), pLong = 1 - Phi(1.25);
const zA = invPhi(0.15), zB = invPhi(0.95), sMS = 40 / (zB - zA), mMS = 60 - zA * sMS;

export const WRITTEN = [
  W(1, "medium", 4, S`The distribution of X is shown, with $P(X=x)=k(x+2)$ for $x=0,1,2,3$. (a) Find k. (b) Find $P(X\ge2)$. (c) Find $E(X)$.`,
    S`(a) $k(2+3+4+5)=1\Rightarrow k=\frac{1}{14}$. (b) $\frac{4+5}{14}=\frac{9}{14}\approx0.643$. (c) $\frac{0(2)+1(3)+2(4)+3(5)}{14}=\frac{26}{14}\approx1.857$. [1, 1, 2.]`,
    probDoc([0, 1, 2, 3], [2, 3, 4, 5].map((v) => v / 14), { xlab: "x", labels: false })),
  W(1, "hard", 6, S`A game costs 5 dollars. Two fair coins are tossed: two heads win 12 dollars, one head wins 4 dollars, no heads wins nothing. The distribution of the gain G is shown. (a) Write the distribution of G. (b) Find $E(G)$. (c) Find the prize for two heads that makes the game fair. (d) Interpret $E(G)$ for a player who plays 40 times.`,
    S`(a) G = 7, −1, −5 with P = ¼, ½, ¼. (b) $E(G)=\frac74-\frac12-\frac54=0$. (c) It is already fair: 12 dollars. (d) Over 40 plays the expected total gain is 0, although actual results vary. [2, 2, 1, 1.]`,
    probDoc(["−5", "−1", "+7"], [0.25, 0.5, 0.25], { xlab: "gain (dollars)", ylab: "P" })),
  W(2, "medium", 4, S`$X\sim B(12,0.2)$ (shown). (a) Find $P(X=3)$. (b) Find $P(X\le1)$. (c) Find $P(X\ge3)$.`,
    S`(a) $\binom{12}{3}(0.2)^3(0.8)^9\approx${f(binom(12, 0.2, 3))}$. (b) $\approx${f(binomCdf(12, 0.2, 1))}$. (c) $1-P(X\le2)\approx${f(1 - binomCdf(12, 0.2, 2))}$. [1, 1, 2.]`,
    probDoc(xs(12), xs(12).map((k) => binom(12, 0.2, k)), { hi: [3], labels: false, xlab: "x" })),
  W(2, "hard", 6, S`A box of 20 light bulbs is rejected if it contains 2 or more faulty bulbs; each bulb is faulty with probability 0.05. (a) Find the probability a box is rejected. (b) Find the expected number of faulty bulbs per box. (c) Three boxes are checked. Find the probability at least one is rejected. (d) State one assumption made.`,
    S`(a) $1-P(X\le1)\approx${f(q20)}$ for $X\sim B(20,0.05)$. (b) $np=1$. (c) $1-(1-${f(q20)})^3\approx${f(1 - (1 - q20) ** 3)}$. (d) Bulbs are faulty independently with the same probability. [2, 1, 2, 1.]`,
    probDoc(xs(6), xs(6).map((k) => binom(20, 0.05, k)), { hi: [2, 3, 4, 5, 6], xlab: "faulty bulbs (0–6 shown)" })),
  W(3, "medium", 4, S`Reaction times are $N(0.4,0.05^2)$ s (shown). (a) Find $P(0.375<X<0.475)$. (b) Find $P(X>0.475)$. (c) Out of 1000 trials, how many are expected to exceed 0.475 s?`,
    S`(a) $\Phi(1.5)-\Phi(-0.5)\approx${f(Phi(1.5) - Phi(-0.5))}$. (b) $\approx${f(1 - Phi(1.5))}$. (c) about 67. [2, 1, 1.]`,
    normalDoc(0.4, 0.05, [{ a: 0.375, b: 0.475, color: "green" }, { a: 0.475, b: Infinity, color: "red" }])),
  W(3, "hard", 6, S`Phone calls last $N(8,1.6^2)$ minutes; a call over 10 minutes is "long" (shaded). (a) Find P(long). (b) For 10 calls, find P(exactly 2 long). (c) Find P(at least 2 long). (d) Explain why the binomial distribution applies in (b).`,
    S`(a) $P(Z>1.25)\approx${f(pLong)}$. (b) $B(10,${f(pLong)})$: $\approx${f(binom(10, pLong, 2))}$. (c) $1-P(Y\le1)\approx${f(1 - binomCdf(10, pLong, 1))}$. (d) 10 independent calls, each long with the same probability. [1, 2, 2, 1.]`,
    normalDoc(8, 1.6, [{ a: 10, b: Infinity, color: "amber" }], { lines: [10] })),
  W(4, "medium", 4, S`Scores are $N(75,8^2)$ (shown). (a) Find the score exceeded by only 10%. (b) Find the lower quartile. (c) Find the interquartile range.`,
    S`(a) $75+1.2816(8)\approx${f(75 + invPhi(0.9) * 8, 2)}$. (b) $75-0.6745(8)\approx${f(75 + invPhi(0.25) * 8, 2)}$. (c) $2(0.6745)(8)\approx${f(2 * invPhi(0.75) * 8, 2)}$. [1, 2, 1.]`,
    normalDoc(75, 8, [{ a: 75 + invPhi(0.25) * 8, b: 75 + invPhi(0.75) * 8, color: "blue" }, { a: 75 + invPhi(0.9) * 8, b: Infinity, color: "green" }], { lines: [75 + invPhi(0.9) * 8] })),
  W(4, "hard", 6, S`For $X\sim N(\mu,\sigma^2)$, 15% of values are below 60 and 5% are above 100 (shaded). (a) Write two equations in μ and σ. (b) Solve them. (c) Find $P(X>110)$.`,
    S`(a) $\mu${f(zA)}\sigma=60$, $\mu+${f(zB)}\sigma=100$. (b) $\sigma\approx${f(sMS, 3)}$, $\mu\approx${f(mMS, 2)}$. (c) $\approx${f(1 - Phi((110 - mMS) / sMS))}$. [2, 3, 1.]`,
    normalDoc(mMS, sMS, [{ a: -Infinity, b: 60, color: "red" }, { a: 100, b: Infinity, color: "red" }], { lines: [60, 100] })),
];
