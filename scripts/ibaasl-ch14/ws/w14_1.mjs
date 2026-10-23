// IB AA SL Worksheet 14.1 — Discrete Random Variables and Expected Value (teacher edition)
import { probT } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Is it a distribution?", q: S`Is $x=1,2,3$ with $P=0.2,\ 0.5,\ 0.3$ a probability distribution?`,
    steps: [S`Each value is in $[0,1]$ and $0.2+0.5+0.3=1$.`], ans: "Yes" },
  { title: "Finding k", q: S`$x=0,1,2,3$ with $P=2k,\ 3k,\ 4k,\ k$. Find $k$.`,
    steps: [S`$10k=1$.`], ans: S`$k=0.1$` },
  { title: "Probability of an event", q: S`For the same distribution, find $P(X<2)$.`,
    steps: [S`$P(0)+P(1)=0.2+0.3$.`], ans: S`$0.5$` },
  { title: "Expected value", q: S`Find $E(X)$ for the same distribution.`,
    fig: probT([0, 1, 2, 3], [0.2, 0.3, 0.4, 0.1], { xlab: "x" }, 5.6),
    steps: [S`$0(0.2)+1(0.3)+2(0.4)+3(0.1)$.`], ans: S`$1.4$` },
  { title: "Checking a formula", q: S`Is $P(X=x)=\frac{x+2}{18}$ for $x=1,2,3$ a distribution? If not, find c so that $P(X=x)=c(x+2)$ is.`,
    steps: [S`$\frac{3+4+5}{18}=\frac{12}{18}\ne1$.`, S`$12c=1$.`], ans: S`No; $c=\frac{1}{12}$` },
  { title: "Tails in two tosses", q: S`X is the number of tails in two tosses of a fair coin. Write its distribution and find $E(X)$.`,
    fig: probT([0, 1, 2], [0.25, 0.5, 0.25], { xlab: "tails" }, 5.6),
    steps: [S`$P(0)=\frac14$, $P(1)=\frac12$, $P(2)=\frac14$.`, S`$E(X)=\frac12+\frac24$.`], ans: S`$E(X)=1$` },
  { title: "A raffle", q: S`200 tickets are sold at \$5. Prizes are \$400 and \$100. Find the expected gain per ticket.`,
    steps: [S`$E(\text{prize})=\frac{400+100}{200}=2.5$.`, "Subtract the cost."], ans: S`$-\$2.50$` },
  { title: "Fair prize", q: S`A game costs \$4 and pays \$x with probability 0.25 (otherwise nothing). Find x for a fair game.`,
    steps: [S`$0.25x=4$.`], ans: S`$x=16$` },
  { title: "Two unknowns", q: S`$x=0,1,2$ with $P=a,\ b,\ 0.3$ and $E(X)=1.1$. Find a and b.`,
    fig: probT([0, 1, 2], [0.2, 0.5, 0.3], { xlab: "x" }, 5.6),
    steps: [S`$b+0.6=1.1\Rightarrow b=0.5$.`, S`$a=1-0.5-0.3$.`], ans: S`$a=0.2,\ b=0.5$` },
];

const PROBLEMS = [
  { level: 1, q: S`$x=1,2,3,4$ with $P=0.3,\ 0.2,\ k,\ 0.1$. Find $k$.`, recap: "Sum to 1.", ans: S`$0.4$` },
  { level: 1, q: S`$x=2,4,6$ with $P=0.5,\ 0.3,\ 0.2$. Find $E(X)$.`, recap: "Σ x P.", ans: S`$3.4$` },
  { level: 1, q: S`For the distribution in question 2, find $P(X\ge4)$.`, recap: "Add.", ans: S`$0.5$` },
  { level: 2, q: S`$P(X=x)=kx^2$ for $x=1,2,3$. Find $k$.`, recap: "14k = 1.", ans: S`$\frac{1}{14}$` },
  { level: 2, q: S`Find $E(X)$ for the distribution in question 4.`, recap: S`$\frac{1+8+27}{14}$.`, ans: S`$\frac{36}{14}\approx2.571$` },
  { level: 2, q: S`A game costs \$1.50: roll a die and win \$6 for a six. Find the expected gain.`, recap: "1 − 1.5.", ans: S`$-\$0.50$` },
  { level: 2, q: S`The graph shows a distribution. Find $E(X)$.`, recap: "Symmetric.", ans: S`$3$`,
    fig: probT([1, 2, 3, 4, 5], [0.1, 0.2, 0.4, 0.2, 0.1], { xlab: "x" }, 5) },
  { level: 2, q: S`Two balls are drawn without replacement from 4 red and 1 blue. X is the number of blue balls. Find $E(X)$.`, recap: S`$P(X=1)=\frac25$.`, ans: S`$0.4$` },
  { level: 3, space: 4, q: S`A coin is tossed 3 times; X = heads − tails. Find the distribution of X and $E(X)$.`, recap: "Values −3, −1, 1, 3.", ans: S`$P=\frac18,\frac38,\frac38,\frac18$; $E(X)=0$` },
  { level: 3, space: 4, q: S`A spinner has sectors \$0 (180°), \$5 (120°) and \$20 (60°). Find the fair price to play.`, recap: "Angles give probabilities.", ans: S`$\frac{5}{3}+\frac{20}{6}=\$5$` },
  { level: 3, space: 4, q: S`$x=1,2,3,4$ with $P=0.1,\ a,\ b,\ 0.3$ and $E(X)=2.7$. Find a and b.`, recap: "Two equations.", ans: S`$a=0.4,\ b=0.2$` },
  { level: 3, space: 4, q: S`Show that $E(X)=3.5$ for a fair die, and explain why this value can never be rolled.`, recap: "Long-run mean.", ans: S`$\frac{21}{6}=3.5$; E(X) is an average, not an outcome` },
  { level: 3, space: 4, q: S`A game has expected gain $-\$0.20$ per play. What is the expected total loss after 50 plays, and why might a real player do better or worse?`, recap: "Multiply.", ans: S`\$10; outcomes vary around the expected value` },
];

export const WS = {
  code: "14.1",
  title: "Discrete Random Variables and Expected Value",
  bigideas: S`A discrete random variable takes separate values, each with a probability. Every probability is between 0 and 1 and they add to 1. The expected value $E(X)=\sum x\,P(X=x)$ is the long-run mean. A game is fair when the expected gain (prize minus cost) is 0.`,
  goals: ["Recognise a valid distribution.", "Find unknown probabilities.", "Calculate E(X).", "Decide whether games are fair."],
  curriculum: "SL 4.7",
  vocab: [["Random variable", "numerical outcome of chance"], ["Distribution", "values with probabilities"], ["E(X)", "Σ x P(X = x)"], ["Fair game", "expected gain 0"]],
  hook: String.raw`A raffle ticket costs \$5. Is it worth buying — on average?`,
  concepts: [
    ["1. Distributions", S`${probT([1, 2, 3, 4, 5, 6], [1, 1, 1, 1, 1, 1].map((v) => v / 6), { xlab: "die score" }, 4.6)} Each probability is $\frac16$.`],
    ["2. Expected value", "The balance point of the bars."],
    ["3. Fair games", "Prize value equals cost on average."],
  ],
  tips: ["Check Σ P = 1.", "E(X) may not be a possible value.", "Gain = prize − cost.", "Read ≤ and < carefully.", "Use fractions for exact answers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
