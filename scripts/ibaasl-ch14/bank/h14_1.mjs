// 14.1 Discrete Random Variables and Expected Value — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { probDoc } from "../figs14.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const diff = [0, 1, 2, 3, 4, 5], diffP = [6, 10, 8, 6, 4, 2].map((v) => v / 36);

export const TOPIC = "14.1 Discrete Random Variables and Expected Value";
export const Q = [
  num(S`Two dice are rolled and X is the absolute difference of the scores (graph shown). Find $E(X)$ (3 d.p.).`, r3(70 / 36), "Σ x P: (0·6 + 1·10 + 2·8 + 3·6 + 4·4 + 5·2)/36 = 70/36.", probDoc(diff, diffP, { xlab: "difference" }), 0.001),
  num(S`For the difference X above, find $P(X\ge3)$ (4 d.p.).`, Math.round((12 / 36) * 10000) / 10000, "(6 + 4 + 2)/36.", null, 0.0001),
  num(S`$x=1,2,3,4$ with $P=a,\ b,\ 0.3,\ 0.2$ and $E(X)=2.6$. Find a.`, 0.1, "a + b = 0.5 and a + 2b = 0.9 ⇒ b = 0.4.", null, 0.001),
  num(S`A bag has 3 red and 2 green balls. Balls are drawn without replacement until a green appears; X is the number of draws. Find $E(X)$.`, 2, "P(1) = 0.4, P(2) = 0.3, P(3) = 0.2, P(4) = 0.1."),
  num(S`A game: roll a die; win x dollars for a score x of 4, 5 or 6, lose 2 dollars otherwise. Find the expected gain.`, 1.5, "(4 + 5 + 6)/6 − 2(3/6) = 2.5 − 1.", null, 0.001),
  mc(S`$P(X=x)=\frac{k}{x}$ for $x=1,2,3$. k equals:`, S`$\frac{6}{11}$`, [S`$\frac{11}{6}$`, S`$\frac16$`, S`$\frac{1}{3}$`], "k(1 + ½ + ⅓) = 1."),
  num(S`For $P(X=x)=\frac{6}{11x}$, $x=1,2,3$, find $E(X)$ (3 d.p.).`, r3(18 / 11), "Σ x · 6/(11x) = 18/11.", null, 0.001),
  tf(S`If $E(X)=2$, then $E(3X+1)=7$.`, true, "E(aX + b) = aE(X) + b."),
  ms(S`X takes values 0, 1, 2. Which conditions alone guarantee $E(X)=1$? Select all.`, ["P(0) = P(2)", "the distribution is symmetric about 1", "P(1) = 1", "P(0) = 0.5"], [0, 1, 2], "Symmetry about 1."),
  num(S`The graph shows the prize X (in dollars) in a scratch card game costing 4 dollars. Find the expected gain.`, -0.75, "E(prize) = 0(0.5) + 2(0.25) + 5(0.15) + 20(0.1) = 3.25.", probDoc([0, 2, 5, 20], [0.5, 0.25, 0.15, 0.1], { hi: [20], xlab: "prize ($)" }), 0.001),
  num(S`In the game above, what top prize (instead of 20 dollars) makes the game fair?`, 27.5, "0.5 + 0.75 + 0.1T = 4 ⇒ 0.1T = 2.75.", null, 0.01),
  num(S`$X$ is the number of sixes when two fair dice are rolled. Find $E(X)$ (4 d.p.).`, Math.round((1 / 3) * 10000) / 10000, "P(1) = 10/36, P(2) = 1/36: (10 + 2)/36.", null, 0.0001),
  num(S`Three coins are tossed; X is the number of heads. Find $P(X\ge2)$.`, 0.5, "(3 + 1)/8.", null, 0.001),
  num(S`An insurance policy costs 150 dollars per year. The company pays 5000 dollars with probability 0.02. Find the company's expected profit per policy.`, 50, "150 − 100."),
  mc(S`$x=1,2,3$ with $P=p^2,\ p,\ 0.5$. p equals (to 3 d.p.):`, "0.366", ["0.5", "0.25", "0.618"], "p² + p − 0.5 = 0 ⇒ p = (−1 + √3)/2."),
  num(S`The graph shows a distribution in which the bar at $x=3$ is unlabelled. Find $P(X=3)$ and hence $E(X)$; enter $E(X)$.`, 2.1, "P(X = 3) = 1 − 0.1 − 0.2 − 0.2 = 0.5; E = 0(0.1) + 1(0.2) + 2(0.2) + 3(0.5).", probDoc([0, 1, 2, 3], [0.1, 0.2, 0.2, 0.5], { xlab: "x", labels: false }), 0.001),
  num(S`A player rolls a die until a 6 appears, up to 3 rolls. X is the number of rolls used. Find $E(X)$ (3 d.p.).`, r3(1 * (1 / 6) + 2 * (5 / 36) + 3 * (25 / 36)), "P(1) = 1/6, P(2) = 5/36, P(3) = 25/36.", null, 0.001),
  tf("Two games with the same expected gain must be equally risky.", false, "The spread of outcomes can differ."),
  num(S`The graph shows X with probabilities $\frac{2x-1}{16}$ for $x=1,2,3,4$. Find $P(X\le2)$.`, 0.25, "(1 + 3)/16.", probDoc([1, 2, 3, 4], [1, 3, 5, 7].map((v) => v / 16), { hi: [1, 2], xlab: "x" }), 0.001),
  num(S`A raffle sells 500 tickets at 2 dollars with one 300 dollars prize and two 100 dollars prizes. Find the expected gain per ticket.`, -1, "(300 + 200)/500 − 2."),
];
