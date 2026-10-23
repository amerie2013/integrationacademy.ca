// 14.1 Discrete Random Variables and Expected Value — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { probDoc } from "../figs14.mjs";

const S = String.raw;

export const E = [
  mc("Which of these is a discrete random variable?", "the number of goals scored in a match", ["the time to run 100 m", "a person's height", "the mass of an apple"], "Counts are discrete."),
  mc("The probabilities in a discrete distribution must add to:", "1", ["0", "100", "the number of values"], "Total probability."),
  mc(S`$E(X)$ is calculated as:`, S`$\sum x\,P(X=x)$`, [S`$\sum P(X=x)$`, S`$\frac{\sum x}{n}$`, S`$\max x$`], "Weighted average."),
  mc("A game is fair when the expected gain is:", "0", ["1", "positive", "the cost"], "Definition."),
  mc(S`$x=1,2$ with $P=0.6,\ k$. Then k equals:`, "0.4", ["0.6", "1", "0.5"], "1 − 0.6."),
  num(S`$x=0,1,2$ with $P=0.25,\ 0.5,\ k$. Find k.`, 0.25, "1 − 0.75.", null, 0.001),
  num(S`$x=1,2,3$ with $P=0.5,\ 0.25,\ 0.25$. Find $E(X)$.`, 1.75, "0.5 + 0.5 + 0.75.", null, 0.001),
  num(S`$x=0,10$ with $P=0.9,\ 0.1$. Find $E(X)$.`, 1, "10 × 0.1."),
  num(S`$x=2,3,4,5$ with $P=0.1,\ 0.2,\ 0.3,\ 0.4$. Find $P(X\le3)$.`, 0.3, "0.1 + 0.2.", null, 0.001),
  num(S`A spinner gives 1, 2, 3 or 4 equally likely. Find $E(X)$.`, 2.5, "(1 + 2 + 3 + 4)/4.", null, 0.001),
  tf(S`$E(X)$ must be one of the values X can take.`, false, "A die has E(X) = 3.5."),
  tf(S`$x=1,2,3$ with $P=0.5,\ 0.4,\ 0.2$ is a valid distribution.`, false, "The probabilities add to 1.1."),
  tf("A probability in a distribution can never be negative.", true, "0 ≤ P ≤ 1."),
  fill("A game with expected gain 0 is called ___.", ["fair", "Fair"], "Definition."),
  ms("Which are valid lists of probabilities? Select all.", ["0.2, 0.3, 0.5", "0.4, 0.4, 0.2", "0.5, 0.6", "0.7, 0.4, −0.1"], [0, 1], "Each in [0, 1] and sum 1."),
  mc("The graph shows a distribution. P(X = 3) is:", "0.3", ["0.2", "0.4", "0.1"], "Height of the bar at 3.", probDoc([1, 2, 3, 4], [0.1, 0.4, 0.3, 0.2], { xlab: "x" })),
  mc("For the distribution shown, the most likely value of X is:", "2", ["1", "3", "4"], "Tallest bar.", probDoc([1, 2, 3, 4], [0.15, 0.45, 0.25, 0.15], { xlab: "x" })),
  num(S`$x=-1,1$ with $P=0.5,\ 0.5$. Find $E(X)$.`, 0, "Symmetric."),
  num(S`A ticket costs 2 dollars and wins 10 dollars with probability 0.1. Find the expected gain.`, -1, "1 − 2."),
  mc(S`$P(X=x)=\frac{1}{4}$ for $x=1,2,3,4$. $P(X>2)$ is:`, S`$\frac12$`, [S`$\frac14$`, S`$\frac34$`, "1"], "Two values."),
];

export const M = [
  num(S`$x=1,2,3,4$ with $P=k,\ 2k,\ 2k,\ 5k$. Find k.`, 0.1, "10k = 1.", null, 0.001),
  num(S`For $x=1,2,3,4$ with $P=0.1,\ 0.2,\ 0.2,\ 0.5$, find $E(X)$.`, 3.1, "0.1 + 0.4 + 0.6 + 2.", null, 0.001),
  num(S`$P(X=x)=\frac{x}{6}$ for $x=1,2,3$. Find $E(X)$ (3 d.p.).`, Math.round((14 / 6) * 1000) / 1000, "(1 + 4 + 9)/6.", null, 0.001),
  num(S`$P(X=x)=c\,x$ for $x=2,4,6$. Find c (4 d.p.).`, Math.round((1 / 12) * 10000) / 10000, "12c = 1.", null, 0.0001),
  num(S`A game costs 3 dollars and pays 12 dollars with probability $\frac14$. Find the expected gain.`, 0, "12/4 − 3."),
  num(S`$x=0,1,2$ with $P=0.2,\ 0.5,\ 0.3$. Find $P(X\ne1)$.`, 0.5, "0.2 + 0.3.", null, 0.001),
  mc(S`$x=1,2,3$ with $P=0.3,\ a,\ 0.2$ and $E(X)=1.9$. Then a is:`, "0.5", ["0.4", "0.6", "0.3"], "a = 1 − 0.5; check 0.3 + 1 + 0.6 = 1.9."),
  mc("A fair coin is tossed twice; X is the number of heads. E(X) is:", "1", ["0.5", "2", "1.5"], "0(¼) + 1(½) + 2(¼)."),
  mc("Expected value is best described as:", "the long-run average of X", ["the most likely value", "the middle value", "the largest value"], "Interpretation."),
  tf(S`If every value of X is doubled, $E(X)$ doubles.`, true, "E(2X) = 2E(X)."),
  tf("A game with positive expected gain favours the player.", true, "On average they win."),
  num(S`One card is drawn from 1, 2, 3, 4, 5 (equally likely); win 1 dollars per point. The game costs 3 dollars. Find the expected gain.`, 0, "E = 3."),
  num(S`$X$ is the score on a fair four-sided die (1–4). Find $E(X^2)$.`, 7.5, "(1 + 4 + 9 + 16)/4.", null, 0.001),
  num(S`$x=0,1,2,3$ with $P=0.4,\ 0.3,\ 0.2,\ 0.1$. Find $P(X\ge2)$.`, 0.3, "0.2 + 0.1.", null, 0.001),
  ms(S`For $x=1,2,3$ with $P=0.2,\ 0.3,\ 0.5$, which are true? Select all.`, [S`$E(X)=2.3$`, S`$P(X<3)=0.5$`, S`$P(X=2)=0.3$`, S`$E(X)=2$`], [0, 1, 2], "0.2 + 0.6 + 1.5 = 2.3."),
  mc("The distribution shown balances at:", "2", ["1.5", "2.5", "3"], "Symmetric about 2.", probDoc([0, 1, 2, 3, 4], [0.1, 0.2, 0.4, 0.2, 0.1], { xlab: "x" })),
  mc("For the distribution shown, P(X ≥ 3) is:", "0.45", ["0.3", "0.55", "0.15"], "0.3 + 0.15.", probDoc([1, 2, 3, 4], [0.2, 0.35, 0.3, 0.15], { hi: [3, 4], xlab: "x" })),
  num(S`A prize of 50 dollars is won with probability 0.02 and 10 dollars with probability 0.1. Find the fair price.`, 2, "1 + 1."),
  num(S`$P(X=x)=k(4-x)$ for $x=0,1,2,3$. Find k.`, 0.1, "k(4 + 3 + 2 + 1) = 1.", null, 0.001),
  num(S`For $P(X=x)=0.1(4-x)$, $x=0,1,2,3$, find $E(X)$.`, 1, "0(0.4) + 1(0.3) + 2(0.2) + 3(0.1).", null, 0.001),
];
