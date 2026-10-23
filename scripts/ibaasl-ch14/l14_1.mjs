// IB AA SL 14.1 — Discrete Random Variables and Expected Value: probability distributions as tables, graphs and formulas, finding unknown probabilities, expected value, fair games
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, probDoc } from "./figs14.mjs";

export const TITLE = "14.1 Discrete Random Variables and Expected Value";
export const ID = "5197825c-f14e-45e1-9db3-dee36e414eba";
const S = String.raw;
const sums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], sumP = sums.map((s) => (6 - Math.abs(s - 7)) / 36);

export const blocks = () => [
  intro({
    icon: "🎲",
    title: "Discrete Random Variables and Expected Value",
    overview: S`A random variable turns the outcome of an experiment into a number — the total on two dice, the number of heads, the prize won. When it takes separate (countable) values it is discrete, and its probability distribution lists every value with its probability. The probabilities must add to 1, and the expected value \(E(X)=\sum x\,P(X=x)\) is the long-run average. Expected value decides whether a game is fair.`,
    goals: [
      "describe a discrete random variable and its probability distribution;",
      "use the fact that the probabilities add to 1 to find unknowns;",
      "find probabilities of events from a table, graph or formula;",
      "calculate and interpret the expected value E(X);",
      "decide whether a game is fair.",
    ],
    curriculum: "SL 4.7 (discrete random variables and their probability distributions; expected value E(X) for discrete data; applications, including fair games)",
    prior: [
      [S`A fair die is rolled. Find \(P(\text{even})\).`, S`\(\frac12\).`],
      [S`Find the mean of 2, 2, 3, 5.`, S`\(3\).`],
      [S`Two coins are tossed. List the sample space.`, "HH, HT, TH, TT."],
    ],
    words: [
      ["Random variable", "a numerical quantity whose value depends on chance", "X = number of heads"],
      ["Discrete", "takes separate, countable values", "0, 1, 2, …"],
      ["Probability distribution", S`all values x with their \(P(X=x)\)`, ""],
      ["Expected value", S`\(E(X)=\sum x\,P(X=x)\), the long-run mean`, ""],
      ["Fair game", S`expected gain is 0`, ""],
    ],
  }),

  section("📌 Probability distributions", S`
  <p>Let X be the total when two fair dice are rolled. The 36 equally likely outcomes give the distribution below. For example \(P(X\ge10)=\frac{3+2+1}{36}=\frac16\) (green bars).</p>
  ${fig(probDoc(sums, sumP, { hi: [10, 11, 12], labels: false, xlab: "total x" }), "Total on two dice: P(X ≥ 10) = 6/36 (green)")}
  ${table(["x", "1", "2", "3", "4"], [["P(X = x)", "0.1", "0.15", "0.3", "0.45"]])}
  <p>Every probability is between 0 and 1, and \(0.1+0.15+0.3+0.45=1\). A distribution can also be a formula: \(P(X=x)=\frac{x}{10}\) for \(x=1,2,3,4\) is valid because \(\frac{1+2+3+4}{10}=1\).</p>
  ${fig(probDoc([1, 2, 3, 4], [0.1, 0.2, 0.3, 0.4], { xlab: "x" }), "P(X = x) = x/10 for x = 1, 2, 3, 4")}
  ${keyIdea(S`For a discrete random variable, \(0\le P(X=x)\le1\) and \(\sum P(X=x)=1\).`)}`),

  section("📌 Expected value and fair games", S`
  <p>For the distribution \(x=0,1,2,3\) with probabilities \(0.1,0.3,0.4,0.2\): \(E(X)=0(0.1)+1(0.3)+2(0.4)+3(0.2)=1.7\). Over many trials the average value of X approaches 1.7 — the balance point of the bars, even though X never equals 1.7.</p>
  ${fig(probDoc([0, 1, 2, 3], [0.1, 0.3, 0.4, 0.2], { hi: [], xlab: "x" }), "E(X) = 1.7: the bars balance at x = 1.7")}
  <p>A game costs \$3. You win \$10 with probability 0.2 and \$2 with probability 0.3. Expected winnings \(=10(0.2)+2(0.3)=2.6\), so the expected gain is \(2.6-3=-0.4\): on average you lose 40 cents a game. A game is fair when the expected gain is 0.</p>
  ${fig(probDoc(["−3", "−1", "+7"], [0.5, 0.3, 0.2], { hi: ["+7"], xlab: "gain ($)", ylab: "P" }), "Gain per game: −$3, −$1 or +$7; E(gain) = −0.4")}
  ${watchOut([
    "Check that the probabilities add to exactly 1.",
    "E(X) need not be a possible value of X.",
    "For games, subtract the cost: gain = prize − cost.",
    "P(X ≥ 3) includes x = 3.",
  ])}`),

  section("📌 Explore", S`<p>Choose a distribution and watch the balance point E(X). For the game, change the cost until it becomes fair.</p>`),

  widget("ibDiscreteRV", { init: [0, 3] }),

  examples([
    ["Level 1 · Find k", S`The distribution has \(x=1,2,3,4\) with \(P=0.1,\ k,\ 0.3,\ 3k\). Find k.`,
      [S`\(0.1+k+0.3+3k=1\Rightarrow4k=0.6\).`],
      S`\(k=0.15\)`],
    ["Level 1 · Probability of an event", S`For the same distribution, find \(P(X\ge3)\).`,
      [S`\(P(3)+P(4)=0.3+0.45\).`],
      S`\(0.75\)`],
    ["Level 2 · Expected value", S`Find \(E(X)\) for the same distribution.`,
      [S`\(1(0.1)+2(0.15)+3(0.3)+4(0.45)=0.1+0.3+0.9+1.8\).`],
      S`\(3.1\)`],
    ["Level 2 · A formula", S`\(P(X=x)=\frac{x^2}{30}\) for \(x=1,2,3,4\). Show it is a distribution and find \(E(X)\).`,
      [S`\(\frac{1+4+9+16}{30}=1\).`, S`\(E(X)=\frac{1+8+27+64}{30}=\frac{100}{30}\).`],
      S`\(E(X)=\frac{10}{3}\approx3.33\)`],
    ["Level 3 · Fair price", S`A spinner pays \$8 with probability \(\frac15\), \$3 with probability \(\frac14\), and nothing otherwise. What should a game cost to be fair?`,
      [S`\(E(\text{prize})=8\cdot\frac15+3\cdot\frac14=1.6+0.75\).`, "A fair cost equals the expected prize."],
      S`\$2.35`,
      fig(probDoc([0, 3, 8], [0.55, 0.25, 0.2], { hi: [3, 8], xlab: "prize ($)" }), "Prize distribution: E = $2.35")],
  ]),

  practice([
    q("Level 1 · unknown", S`\(x=0,1,2\) with \(P=0.3,\ 0.5,\ k\). Find k.`, num(0.2, 0.001),
      "Probabilities add to 1.", [S`\(1-0.8\).`], S`\(0.2\)`),
    q("Level 1 · expected value", S`\(x=1,2,3\) with \(P=0.2,\ 0.5,\ 0.3\). Find \(E(X)\).`, num(2.1, 0.001),
      "Σ x P(x).", [S`\(0.2+1+0.9\).`], S`\(2.1\)`),
    q("Level 2 · formula", S`\(P(X=x)=k(x+1)\) for \(x=0,1,2,3\). Find k.`, num(0.1, 0.001),
      "k(1 + 2 + 3 + 4) = 1.", [S`\(10k=1\).`], S`\(0.1\)`),
    q("Level 2 · valid?", "Which list could be a probability distribution?", choice(["0.25, 0.4, 0.35", "0.5, 0.6, −0.1", "0.3, 0.3, 0.3", "0.6, 0.5"], 0),
      "Each in [0, 1] and sum 1.", ["Only the first sums to 1 with no negatives."], "0.25, 0.4, 0.35"),
    q("Level 2 · game", S`A game costs \$2 and pays \$5 with probability 0.3 (otherwise nothing). Find the expected gain.`, num(-0.5, 0.001),
      "1.5 − 2.", [S`\(5(0.3)-2\).`], S`\(-\$0.50\)`),
  ]),

  ...hard([
    ["The larger of two dice", S`Two fair dice are rolled and X is the larger number. Show \(P(X=x)=\frac{2x-1}{36}\) and find \(E(X)\).`,
      [S`Pairs with maximum x: both ≤ x (\(x^2\)) minus both ≤ x − 1 (\((x-1)^2\)): \(2x-1\) outcomes.`, S`\(E(X)=\frac{1(1)+2(3)+3(5)+4(7)+5(9)+6(11)}{36}=\frac{161}{36}\).`],
      S`\(E(X)=\frac{161}{36}\approx4.47\)`,
      fig(probDoc([1, 2, 3, 4, 5, 6], [1, 3, 5, 7, 9, 11].map((v) => v / 36), { xlab: "larger number x" }), "P(X = x) = (2x − 1)/36")],
    ["Two unknowns", S`\(x=1,2,3\) with \(P=a,\ 0.4,\ b\) and \(E(X)=2.2\). Find a and b.`,
      [S`\(a+b=0.6\) and \(a+0.8+3b=2.2\Rightarrow a+3b=1.4\).`, S`Subtract: \(2b=0.8\).`],
      S`\(a=0.2,\ b=0.4\)`,
      fig(probDoc([1, 2, 3], [0.2, 0.4, 0.4], { xlab: "x" }), "The solved distribution balances at 2.2")],
  ], [
    q("Level 3 · without replacement", S`Two balls are drawn without replacement from 3 red and 2 blue. X is the number of red. Find \(E(X)\).`, num(1.2, 0.001),
      "P(0) = 0.1, P(1) = 0.6, P(2) = 0.3.", [S`\(0.6+0.6\).`], S`\(1.2\)`),
    q("Level 3 · insurance", "An insurer pays $10 000 with probability 0.002 and $2000 with probability 0.01. Find the expected payout.", num(40),
      "Σ x P(x).", [S`\(20+20\).`], S`\$40`),
    q("Level 3 · infinite values", S`\(P(X=x)=\left(\frac12\right)^x\) for \(x=1,2,3,\dots\) Find \(P(X\le3)\).`, num(0.875, 0.001),
      "½ + ¼ + ⅛.", [S`\(\frac78\).`], S`\(0.875\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes a distribution valid?", "Every probability is between 0 and 1 and they add to 1."],
      ["How do I find E(X)?", "Multiply each value by its probability and add."],
      ["What does E(X) mean?", "The long-run average value of X over many trials."],
      ["When is a game fair?", "When the expected gain (prize minus cost) is 0."],
      ["Can E(X) be a value X never takes?", "Yes — e.g. 3.5 for a die."],
    ],
    summary: [
      "Σ P(X = x) = 1.",
      "E(X) = Σ x P(X = x).",
      "Fair game: expected gain 0.",
      "Read events carefully (≤, <, ≥, >).",
    ],
    next: "14.2 studies the binomial distribution.",
  }),
];
