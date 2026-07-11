// MDM4U Unit 3 — Discrete Probability Distributions: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard (hard = genuinely hard, in scope).
// Original, creative contexts. Fractions/decimals via mc/fill; num for clean values.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 3.1 Random Variables & Discrete Distributions ───────────
function g31() {
  const q = [];
  // EASY
  q.push(mc("easy", "A random variable assigns a number to each:", ["outcome", "probability", "graph", "certain event only"], 0));
  q.push(mc("easy", "In a valid distribution the probabilities sum to:", ["$1$", "$0$", "$100$", "the number of outcomes"], 0));
  q.push(mc("easy", "$X=$ heads in 2 coin flips. $P(X=1)=$", ["$\\tfrac12$", "$\\tfrac14$", "$\\tfrac13$", "$1$"], 0));
  q.push(mc("easy", "A cafe logs $X=$ pastries per customer: $P(0)=0.5,\\ P(1)=0.3$. $P(2)=$", ["$0.2$", "$0.3$", "$0.1$", "$0.5$"], 0));
  q.push(mc("easy", "A discrete random variable takes:", ["separate, countable values", "any value in an interval", "only $0$ and $1$", "only decimals"], 0));
  q.push(mc("easy", "Which is a discrete random variable?", ["texts received in an hour", "exact height of a tree", "time to run a race", "litres of water in a tank"], 0));
  q.push(mc("easy", "$E(X)=$", ["$\\sum x\\,P(x)$", "$\\sum P(x)$", "$\\tfrac1n$", "$\\sum x$"], 0));
  q.push(ms("easy", "Which are valid probability distributions?", ["$0.2,0.5,0.3$", "$0.4,0.4,0.2$", "$0.5,0.6$", "$0.1,-0.1,1.0$"], [0, 1]));
  q.push(ms("easy", "Which are discrete random variables?", ["goals scored in a game", "emails received today", "exact weight of a letter", "cars passing per minute"], [0, 1, 3]));
  q.push(tf("easy", "The probabilities in a distribution must sum to $1$.", true));
  q.push(tf("easy", "A probability in a distribution can be negative.", false));
  q.push(tf("easy", "$E(X)$ is the long-run average of $X$.", true));
  q.push(num("easy", "For $P(0)=0.2,\\ P(1)=0.5$, find $P(2)$ as a decimal.", 0.3, 0));
  q.push(num("easy", "$X=$ heads in 3 coins. $P(X=3)=\\tfrac{1}{k}$; find $k$.", 8, 0));
  q.push(num("easy", "$P(1)=0.3,\\ P(2)=0.3,\\ P(3)=0.4$. Find $E(X)$.", 2.1, 0.001));
  q.push(fill("easy", "For $P(x)=kx$ on $x=1,2,3,4$, $k=$ ___.", ["1/10", "0.1"]));
  q.push(fill("easy", "$X=$ heads in 2 coins. $E(X)=$ ___.", ["1"]));
  q.push(mc("easy", "$P(0)=0.1,P(1)=0.4,P(2)=0.3,P(3)=0.2$. $P(X\\ge2)=$", ["$0.5$", "$0.3$", "$0.2$", "$0.7$"], 0));
  q.push(num("easy", "A fair die, $X=$ value. Find $E(X)$.", 3.5, 0));
  q.push(tf("easy", "$P(X\\le2)$ adds $P(0),P(1),P(2)$.", true));
  // MEDIUM
  q.push(mc("medium", "$P(x)=kx^2$ on $x=1,2,3$. $k=$", ["$\\tfrac{1}{14}$", "$\\tfrac16$", "$\\tfrac19$", "$\\tfrac{1}{36}$"], 0));
  q.push(mc("medium", "$E(X)=2$. Then $E(3X+1)=$", ["$7$", "$6$", "$3$", "$4$"], 0));
  q.push(mc("medium", "$P(0)=0.4,P(1)=0.4,P(2)=0.2$. $E(X)=$", ["$0.8$", "$1$", "$1.2$", "$0.6$"], 0));
  q.push(mc("medium", "From 4 red, 2 blue, draw 2 (no replacement). $X=$ red. $P(X=2)=$", ["$\\tfrac25$", "$\\tfrac13$", "$\\tfrac12$", "$\\tfrac{4}{15}$"], 0));
  q.push(mc("medium", "A streamer's new subs per stream: $P(0)=0.5,P(5)=0.3,P(10)=0.2$. $E(X)=$", ["$3.5$", "$5$", "$2$", "$15$"], 0));
  q.push(mc("medium", "$X=$ girls in a family of 3 children (each B/G equally likely). $E(X)=$", ["$1.5$", "$1$", "$3$", "$0.5$"], 0));
  q.push(ms("medium", "For $P(x)=kx$ on $x=1..4$, which are true?", ["$k=\\tfrac{1}{10}$", "$P(4)=0.4$", "$E(X)=3$", "$\\sum P=1$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which equal $E(X)$ for $P(0)=0.4,P(1)=0.4,P(2)=0.2$?", ["$0.8$", "$0(0.4)+1(0.4)+2(0.2)$", "$0.4+0.4$", "$1.2$"], [0, 1]));
  q.push(tf("medium", "If $E(X)=5$ then $E(2X)=10$.", true));
  q.push(tf("medium", "$E(X+3)=E(X)+3$.", true));
  q.push(num("medium", "$P(x)=kx^2$ on $x=1,2,3$; $k=\\tfrac{1}{m}$; find $m$.", 14, 0));
  q.push(num("medium", "$E(X)=4$. Find $E(2X-3)$.", 5, 0));
  q.push(num("medium", "$P(10)=0.3,P(20)=0.5,P(30)=0.2$. Find $E(X)$.", 19, 0));
  q.push(num("medium", "From 4R 2B, draw 2 (no replacement): $P(2\\text{ red})=\\tfrac{2}{k}$; find $k$.", 5, 0));
  q.push(fill("medium", "$E(3X+2)$ when $E(X)=1$ is ___.", ["5"]));
  q.push(fill("medium", "For a family of 3 children, $E(\\text{girls})=$ ___.", ["1.5", "3/2"]));
  q.push(mc("medium", "$P(1)=P(2)=P(3)=P(4)=P(5)=0.2$. $E(X)=$", ["$3$", "$2.5$", "$15$", "$5$"], 0));
  q.push(num("medium", "$X=$ heads in 4 coins. $E(X)=$", 2, 0));
  q.push(tf("medium", "For $P(x)=kx$ on $x=1..4$, $E(X)=3$.", true));
  q.push(mc("medium", "A dating app returns $X$ matches: $P(0)=0.3,P(1)=0.5,P(2)=0.2$. $E(X)=$", ["$0.9$", "$1$", "$1.1$", "$0.7$"], 0));
  // HARD
  q.push(mc("hard", "$X$: $P(0)=0.5,P(1)=0.3,P(2)=0.2$. $\\text{Var}(X)=$", ["$0.61$", "$0.7$", "$0.49$", "$0.8$"], 0));
  q.push(mc("hard", "$X$: $P(1)=0.2,P(2)=0.5,P(3)=0.3$. $\\text{SD}(X)\\approx$", ["$0.7$", "$0.49$", "$2.1$", "$1$"], 0));
  q.push(mc("hard", "If $\\text{Var}(X)=4$, then $\\text{Var}(3X)=$", ["$36$", "$12$", "$4$", "$9$"], 0));
  q.push(mc("hard", "If $\\text{Var}(X)=5$, then $\\text{Var}(X+10)=$", ["$5$", "$15$", "$25$", "$105$"], 0));
  q.push(mc("hard", "A payout is \\$5 with $P=0.4$, else \\$0. $\\text{Var}(X)=$", ["$6$", "$4$", "$2$", "$9$"], 0));
  q.push(mc("hard", "For $X=$ value on a fair die, $\\text{Var}(X)=$", ["$\\tfrac{35}{12}$", "$3.5$", "$\\tfrac{35}{6}$", "$2.9$"], 0));
  q.push(mc("hard", "$X$ has $E(X)=3,\\ E(X^2)=13$. $\\text{SD}(X)=$", ["$2$", "$4$", "$\\sqrt{13}$", "$10$"], 0));
  q.push(mc("hard", "A fair coin pays $+1$ (H) or $-1$ (T). $\\text{Var}(X)=$", ["$1$", "$0$", "$2$", "$\\tfrac12$"], 0));
  q.push(ms("hard", "Which are true about variance?", ["$\\text{Var}(aX)=a^2\\text{Var}(X)$", "$\\text{Var}(X+c)=\\text{Var}(X)$", "$\\text{Var}(X)=E(X^2)-[E(X)]^2$", "$\\text{Var}(X)=[E(X)]^2$"], [0, 1, 2]));
  q.push(tf("hard", "$\\text{Var}(2X+5)=4\\,\\text{Var}(X)$.", true));
  q.push(tf("hard", "Standard deviation is the square root of the variance.", true));
  q.push(num("hard", "$X$: $P(0)=0.5,P(1)=0.3,P(2)=0.2$. $\\text{Var}(X)$ (2 decimals).", 0.61, 0.005));
  q.push(num("hard", "$X$: $P(1)=0.2,P(2)=0.5,P(3)=0.3$. $\\text{SD}(X)$ (1 decimal).", 0.7, 0.05));
  q.push(num("hard", "$\\text{Var}(X)=4$; find $\\text{Var}(5X)$.", 100, 0));
  q.push(num("hard", "Payout \\$5 with $P=0.4$ else \\$0: find $\\text{Var}$.", 6, 0.01));
  q.push(num("hard", "$E(X)=3,\\ E(X^2)=13$; find $\\text{SD}(X)$.", 2, 0));
  q.push(fill("hard", "$\\text{Var}(X)=E(X^2)-$ ___.", ["[E(X)]^2", "(E(X))^2", "mu^2"]));
  q.push(mc("hard", "Two independent dice; $\\text{Var}(\\text{sum})=$", ["$\\tfrac{35}{6}$", "$\\tfrac{35}{12}$", "$7$", "$\\tfrac{70}{12}$"], 0));
  q.push(tf("hard", "Adding a constant shifts the mean but not the variance.", true));
  q.push(mc("hard", "$X$: $P(0)=0.2,P(1)=0.3,P(2)=0.5$. $E(X^2)=$", ["$2.3$", "$1.3$", "$1.69$", "$0.61$"], 0));
  return q;
}

// ── 3.2 Expected Value ───────────────────────────────────────
function g32() {
  const q = [];
  // EASY
  q.push(mc("easy", "$E(X)=\\sum$", ["$x\\,P(x)$", "$P(x)$", "$x$", "$x^2$"], 0));
  q.push(mc("easy", "A fair die pays its face value. $E(\\text{payout})=$", ["$3.5$", "$3$", "$6$", "$21$"], 0));
  q.push(mc("easy", "A game is 'fair' when the expected net gain is:", ["$0$", "positive", "negative", "$1$"], 0));
  q.push(mc("easy", "$P(\\$0)=0.5,P(\\$10)=0.5$. $E=$", ["$\\$5$", "$\\$10$", "$\\$0$", "$\\$2.50$"], 0));
  q.push(mc("easy", "Payouts \\$2, \\$4 with $P=0.5,0.5$. $E=$", ["$\\$3$", "$\\$6$", "$\\$2$", "$\\$4$"], 0));
  q.push(mc("easy", "Expected value is best described as a:", ["long-run average", "guaranteed amount", "maximum", "minimum"], 0));
  q.push(ms("easy", "Which describe a fair game?", ["expected net $=0$", "fee equals expected winnings", "house always profits", "no one can win"], [0, 1]));
  q.push(ms("easy", "Which equal $E$ for payouts \\$0,\\$10 at $P=0.5,0.5$?", ["$\\$5$", "$0(0.5)+10(0.5)$", "$\\$10$", "half of \\$10"], [0, 1, 3]));
  q.push(tf("easy", "A fair game has expected net gain $0$.", true));
  q.push(tf("easy", "Expected value must be one of the possible outcomes.", false));
  q.push(tf("easy", "$E(\\text{fair die payout})=3.5$.", true));
  q.push(num("easy", "$P(\\$0)=0.7,P(\\$10)=0.3$. $E$ in dollars?", 3, 0));
  q.push(num("easy", "$P(0)=0.5,P(4)=0.5$. $E(X)$?", 2, 0));
  q.push(fill("easy", "$E$ of a fair-die payout $=$ ___.", ["3.5", "7/2"]));
  q.push(fill("easy", "A fair fee for a game paying an expected \\$4 is ___.", ["4", "$4"]));
  q.push(mc("easy", "$P(1)=0.2,P(2)=0.3,P(3)=0.5$. $E(X)=$", ["$2.3$", "$2$", "$3$", "$1.5$"], 0));
  q.push(num("easy", "$P(1)=0.2,P(2)=0.3,P(3)=0.5$. $E(X)$?", 2.3, 0.001));
  q.push(tf("easy", "If a game costs \\$3 and returns an expected \\$3, it is fair.", true));
  q.push(mc("easy", "Expected number of heads in 4 fair coins:", ["$2$", "$4$", "$1$", "$2.5$"], 0));
  q.push(num("easy", "Expected number of heads in 10 fair coins?", 5, 0));
  // MEDIUM
  q.push(mc("medium", "Pay \\$3 to play; win \\$10 with $P=0.25$, else nothing. Expected net?", ["$-\\$0.50$", "$\\$2.50$", "$\\$0.50$", "$-\\$2.50$"], 0));
  q.push(mc("medium", "A raffle sells 500 tickets at \\$1; one \\$100 prize. Expected net per ticket?", ["$-\\$0.80$", "$\\$0.20$", "$-\\$0.20$", "$\\$0.80$"], 0));
  q.push(mc("medium", "Win \\$6 with $P=\\tfrac13$, lose \\$3 with $P=\\tfrac23$. $E=$", ["$\\$0$", "$\\$3$", "$-\\$1$", "$\\$1$"], 0));
  q.push(mc("medium", "Expected number of aces when 5 cards are drawn?", ["$\\tfrac{5}{13}$", "$\\tfrac{4}{13}$", "$1$", "$\\tfrac{5}{52}$"], 0));
  q.push(mc("medium", "A loot box gives \\$0,\\$2,\\$20 with $P=0.7,0.25,0.05$. $E=$", ["$\\$1.50$", "$\\$2$", "$\\$1$", "$\\$22$"], 0));
  q.push(mc("medium", "A game pays \\$0 or \\$10 with $P=0.9,0.1$. Fair entry fee?", ["$\\$1$", "$\\$10$", "$\\$5$", "$\\$0.10$"], 0));
  q.push(ms("medium", "Which give the expected value of a spinner paying \\$2,\\$5,\\$8 at $P=0.5,0.3,0.2$?", ["$0.5(2)+0.3(5)+0.2(8)$", "$\\$4.10$", "$1+1.5+1.6$", "$\\$15$"], [0, 1, 2]));
  q.push(ms("medium", "Which make a game fair?", ["fee $=E(\\text{winnings})$", "expected net $=0$", "fee $>E$", "fee $<E$"], [0, 1]));
  q.push(tf("medium", "Expected number of sixes in 12 die rolls is $2$.", true));
  q.push(tf("medium", "A \\$2 lottery ticket winning \\$1000 with $P=\\tfrac{1}{1000}$ has expected net $-\\$1$.", true));
  q.push(num("medium", "Expected number of sixes in 12 rolls of a die?", 2, 0));
  q.push(num("medium", "Spinner pays \\$2,\\$5,\\$8 with $P=0.5,0.3,0.2$. $E$ in dollars?", 4.1, 0.001));
  q.push(num("medium", "Pay \\$3; win \\$10 with $P=0.25$: expected net in dollars?", -0.5, 0.001));
  q.push(fill("medium", "Expected aces when 4 cards are drawn $=$ ___.", ["4/13"]));
  q.push(fill("medium", "Fair fee for a game paying \\$0 or \\$10 at $P=0.9,0.1$ is ___.", ["1", "$1"]));
  q.push(mc("medium", "Expected number of hearts when 4 cards are drawn?", ["$1$", "$\\tfrac{4}{13}$", "$\\tfrac{13}{52}$", "$4$"], 0));
  q.push(num("medium", "Expected hearts when 8 cards are drawn?", 2, 0));
  q.push(tf("medium", "Expected value is linear: $E(\\text{count of successes})=\\sum P(\\text{each})$.", true));
  q.push(mc("medium", "A claw machine pays a \\$6 prize with $P=0.1$; a play costs \\$1. Expected net?", ["$-\\$0.40$", "$\\$0.60$", "$-\\$0.60$", "$\\$0.40$"], 0));
  q.push(num("medium", "Loot box pays \\$0,\\$2,\\$20 at $P=0.7,0.25,0.05$. $E$ in dollars?", 1.5, 0.001));
  // HARD
  q.push(mc("hard", "Roll two dice: win \\$10 on a sum of 7, \\$5 on a sum of 11, else nothing. Fair price to play?", ["$\\approx\\$1.94$", "$\\$7.50$", "$\\$1$", "$\\$3.50$"], 0));
  q.push(mc("hard", "A \\$5 ticket wins \\$1000 with $P=\\tfrac{1}{400}$ or \\$50 with $P=\\tfrac{1}{40}$. Expected net?", ["$-\\$1.25$", "$\\$1.25$", "$-\\$3.75$", "$\\$3.75$"], 0));
  q.push(mc("hard", "A gacha pull costs \\$2 and yields an item worth \\$0,\\$1,\\$50 with $P=0.8,0.18,0.02$. Expected net?", ["$-\\$0.82$", "$\\$0.82$", "$-\\$1$", "$\\$1.18$"], 0));
  q.push(mc("hard", "Game A: win \\$4 with $P=0.5$. Game B: win \\$10 with $P=0.25$. Compare expected payouts:", ["B is higher (\\$2.50 vs \\$2)", "A is higher", "equal", "cannot tell"], 0));
  q.push(mc("hard", "An insurance policy pays \\$10\\,000 with $P=0.002$; the premium is \\$30. Company's expected profit per policy?", ["$\\$10$", "$-\\$10$", "$\\$20$", "$\\$30$"], 0));
  q.push(mc("hard", "A carnival game pays \\$1 for any face card and \\$5 for an ace (one card). $E(\\text{payout})=$", ["$\\approx\\$0.62$", "$\\$0.23$", "$\\$1$", "$\\$0.31$"], 0));
  q.push(num("hard", "Two dice: win \\$10 on sum 7, \\$5 on sum 11, else \\$0. Expected payout in dollars (2 decimals)?", 1.94, 0.01));
  q.push(num("hard", "\\$5 ticket wins \\$1000 ($P=\\tfrac{1}{400}$) or \\$50 ($P=\\tfrac{1}{40}$): expected net in dollars?", -1.25, 0.01));
  q.push(num("hard", "Insurance: pays \\$10000 with $P=0.002$, premium \\$30. Expected profit per policy in dollars?", 10, 0.01));
  q.push(num("hard", "Expected number of face cards when 13 cards are drawn (linearity, $13\\cdot\\tfrac{12}{52}$)?", 3, 0.01));
  q.push(mc("hard", "One card pays \\$1 (face) or \\$5 (ace) or \\$0. There are 12 face cards and 4 aces. $E=\\tfrac{12(1)+4(5)}{52}=$", ["$\\approx\\$0.62$", "$\\$0.50$", "$\\$1.20$", "$\\$0.31$"], 0));
  q.push(tf("hard", "For the two-dice game (win \\$10 on 7, \\$5 on 11), a \\$2 fee makes the house profit on average.", true));
  q.push(tf("hard", "An insurer setting premium $=$ expected payout makes zero expected profit (before costs).", true));
  q.push(ms("hard", "Which equal the fair price for the two-dice game (\\$10 on 7, \\$5 on 11)?", ["$10\\cdot\\tfrac{6}{36}+5\\cdot\\tfrac{2}{36}$", "$\\tfrac{70}{36}$", "$\\approx1.94$", "$\\$7.50$"], [0, 1, 2]));
  q.push(mc("hard", "A subscription box costs \\$20 and contains items worth \\$5,\\$20,\\$60 with $P=0.5,0.4,0.1$. Expected net for the buyer?", ["$-\\$3.50$", "$\\$3.50$", "$\\$16.50$", "$-\\$16.50$"], 0));
  q.push(num("hard", "Subscription box (\\$20) with item values \\$5,\\$20,\\$60 at $P=0.5,0.4,0.1$: expected net in dollars?", -3.5, 0.01));
  q.push(fill("hard", "Expected profit per insurance policy (pays \\$10000, $P=0.002$, premium \\$30) $=$ ___ dollars.", ["10"]));
  q.push(mc("hard", "You may roll a die once and take its value in dollars, OR take a guaranteed \\$4. Best choice by expected value?", ["roll (expected \\$3.50)... take \\$4", "roll, it is higher", "they are equal", "take \\$4 (\\$4 > \\$3.50)"], 3));
  q.push(tf("hard", "A guaranteed \\$4 beats the expected \\$3.50 from rolling a die for its value.", true));
  q.push(num("hard", "Expected number of red cards when 6 cards are drawn ($6\\cdot\\tfrac12$)?", 3, 0.01));
  return q;
}

// ── 3.3 The Uniform Distribution ─────────────────────────────
function g33() {
  const q = [];
  // EASY
  q.push(mc("easy", "For a discrete uniform on $n$ outcomes, each probability is:", ["$\\tfrac1n$", "$n$", "$\\tfrac{n}{2}$", "$1$"], 0));
  q.push(mc("easy", "A fair die is a uniform distribution with $E(X)=$", ["$3.5$", "$3$", "$6$", "$1$"], 0));
  q.push(mc("easy", "A random integer $1$--$10$. $P(X=7)=$", ["$\\tfrac{1}{10}$", "$\\tfrac{7}{10}$", "$\\tfrac17$", "$\\tfrac12$"], 0));
  q.push(mc("easy", "Uniform on $1$--$10$. $E(X)=$", ["$5.5$", "$5$", "$10$", "$4.5$"], 0));
  q.push(mc("easy", "A spinner has 8 equal wedges. $P(\\text{a specific wedge})=$", ["$\\tfrac18$", "$\\tfrac78$", "$\\tfrac14$", "$1$"], 0));
  q.push(mc("easy", "Which is uniform?", ["a fair die", "the sum of two dice", "heads in 3 coins", "a skewed spinner"], 0));
  q.push(ms("easy", "Which are true of a discrete uniform on $\\{1,\\dots,n\\}$?", ["each $P=\\tfrac1n$", "mean $=\\tfrac{n+1}{2}$", "all outcomes equally likely", "mean $=n$"], [0, 1, 2]));
  q.push(ms("easy", "Which distributions are uniform?", ["a fair coin", "a fair die", "a fair 12-sided die", "the sum of two dice"], [0, 1, 2]));
  q.push(tf("easy", "In a uniform distribution all outcomes are equally likely.", true));
  q.push(tf("easy", "The sum of two dice is uniform.", false));
  q.push(tf("easy", "A fair die has $E(X)=3.5$.", true));
  q.push(num("easy", "Uniform on $1$--$10$: $P(X\\le3)=\\tfrac{3}{k}$; find $k$.", 10, 0));
  q.push(num("easy", "$E(X)$ for a uniform on $\\{1,\\dots,9\\}$?", 5, 0));
  q.push(fill("easy", "For a uniform on $\\{1,\\dots,n\\}$, $E(X)=$ ___.", ["(n+1)/2"]));
  q.push(fill("easy", "$P$ of a specific wedge on an 8-wedge spinner $=$ ___.", ["1/8"]));
  q.push(mc("easy", "Random integer $1$--$20$. $P(\\text{even})=$", ["$\\tfrac12$", "$\\tfrac{1}{20}$", "$\\tfrac{10}{20}$", "$\\tfrac14$"], 0));
  q.push(num("easy", "$E(X)$ for a uniform spinner labelled $0$--$9$?", 4.5, 0));
  q.push(tf("easy", "A fair 20-sided die is a uniform distribution.", true));
  q.push(mc("easy", "Uniform on $1$--$6$: $P(X>4)=$", ["$\\tfrac13$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac23$"], 0));
  q.push(num("easy", "$E(X)$ for a fair 8-sided die (faces $1$--$8$)?", 4.5, 0));
  // MEDIUM
  q.push(mc("medium", "Random integer $1$--$20$. $P(\\text{multiple of }3)=$", ["$\\tfrac{3}{10}$", "$\\tfrac14$", "$\\tfrac{1}{3}$", "$\\tfrac{1}{5}$"], 0));
  q.push(mc("medium", "Random integer $1$--$50$. $P(\\text{not a multiple of }5)=$", ["$\\tfrac45$", "$\\tfrac15$", "$\\tfrac{9}{10}$", "$\\tfrac{1}{10}$"], 0));
  q.push(mc("medium", "Uniform on $1$--$12$. $P(\\text{prime})=$", ["$\\tfrac{5}{12}$", "$\\tfrac12$", "$\\tfrac13$", "$\\tfrac{1}{4}$"], 0));
  q.push(mc("medium", "Students numbered $1$--$30$; one chosen at random. $P(\\text{number ends in }0)=$", ["$\\tfrac{1}{10}$", "$\\tfrac{1}{15}$", "$\\tfrac13$", "$\\tfrac{1}{30}$"], 0));
  q.push(mc("medium", "Uniform on $1$--$100$. $P(\\text{multiple of }10)=$", ["$\\tfrac{1}{10}$", "$\\tfrac{1}{100}$", "$\\tfrac{10}{10}$", "$\\tfrac15$"], 0));
  q.push(mc("medium", "Uniform on $1$--$15$. $P(\\text{multiple of }3)=$", ["$\\tfrac13$", "$\\tfrac15$", "$\\tfrac{1}{6}$", "$\\tfrac14$"], 0));
  q.push(ms("medium", "For a uniform on $1$--$12$, which are true?", ["$P(\\text{prime})=\\tfrac{5}{12}$", "$E(X)=6.5$", "$P(X>9)=\\tfrac14$", "$P(X=13)=\\tfrac{1}{12}$"], [0, 1, 2]));
  q.push(ms("medium", "Which explain why two-dice sums are NOT uniform?", ["middle sums have more outcomes", "sum 7 has six ways", "sum 2 has one way", "all sums are equally likely"], [0, 1, 2]));
  q.push(tf("medium", "A random integer $1$--$20$ has $P(\\text{even})=\\tfrac12$.", true));
  q.push(tf("medium", "Uniform on $1$--$12$ has $E(X)=6.5$.", true));
  q.push(num("medium", "Uniform on $1$--$20$: number of multiples of $3$?", 6, 0));
  q.push(num("medium", "Uniform on $1$--$50$: $P(\\text{not a multiple of }5)=\\tfrac{k}{5}$; find $k$.", 4, 0));
  q.push(num("medium", "$E(X)$ for a uniform on $\\{1,\\dots,12\\}$?", 6.5, 0.001));
  q.push(fill("medium", "Uniform on $1$--$12$: $P(\\text{prime})=$ ___.", ["5/12"]));
  q.push(fill("medium", "Uniform on $1$--$100$: $P(\\text{multiple of }10)=$ ___.", ["1/10", "10/100"]));
  q.push(mc("medium", "A lottery ball is drawn from $1$--$49$ (uniform). $P(\\text{a specific number})=$", ["$\\tfrac{1}{49}$", "$\\tfrac{1}{6}$", "$\\tfrac{6}{49}$", "$\\tfrac12$"], 0));
  q.push(num("medium", "Uniform on $1$--$30$: $P(\\text{ends in }0)=\\tfrac{1}{k}$; find $k$.", 10, 0));
  q.push(tf("medium", "For a uniform on $\\{1,\\dots,9\\}$, $E(X)=5$.", true));
  q.push(mc("medium", "Uniform on $1$--$12$. $P(X\\ge9)=$", ["$\\tfrac13$", "$\\tfrac14$", "$\\tfrac{5}{12}$", "$\\tfrac12$"], 0));
  q.push(fill("medium", "Uniform on $1$--$20$: $P(\\text{multiple of }3)=$ ___.", ["3/10", "6/20"]));
  // HARD
  q.push(mc("hard", "For a discrete uniform on $\\{1,\\dots,n\\}$, $\\text{Var}(X)=$", ["$\\tfrac{n^2-1}{12}$", "$\\tfrac{n+1}{2}$", "$\\tfrac{n^2}{12}$", "$\\tfrac{n-1}{2}$"], 0));
  q.push(mc("hard", "The variance of a fair die is:", ["$\\tfrac{35}{12}$", "$\\tfrac{35}{6}$", "$3.5$", "$\\tfrac{11}{12}$"], 0));
  q.push(mc("hard", "Two fair dice are rolled; $M=$ the larger value (a max). $P(M=6)=$", ["$\\tfrac{11}{36}$", "$\\tfrac16$", "$\\tfrac{6}{36}$", "$\\tfrac{1}{6}$"], 0));
  q.push(mc("hard", "Two fair dice; $M=$ the maximum. $P(M\\le4)=$", ["$\\tfrac{16}{36}$", "$\\tfrac{4}{6}$", "$\\tfrac{4}{36}$", "$\\tfrac{2}{3}$"], 0));
  q.push(mc("hard", "Two fair dice; $m=$ the minimum. $P(m\\ge5)=$", ["$\\tfrac{4}{36}$", "$\\tfrac{2}{6}$", "$\\tfrac{5}{36}$", "$\\tfrac13$"], 0));
  q.push(mc("hard", "A number is chosen uniformly from $1$--$n$. If $P(X\\le5)=\\tfrac14$, then $n=$", ["$20$", "$5$", "$25$", "$10$"], 0));
  q.push(num("hard", "Variance of a fair die $=\\tfrac{35}{k}$; find $k$.", 12, 0));
  q.push(num("hard", "Two dice, $M=\\max$: $P(M=6)=\\tfrac{11}{k}$; find $k$.", 36, 0));
  q.push(num("hard", "Two dice, $M=\\max$: how many of 36 outcomes have $M\\le4$?", 16, 0));
  q.push(num("hard", "Uniform on $1$--$n$ with $P(X\\le5)=\\tfrac14$: find $n$.", 20, 0));
  q.push(mc("hard", "Two fair dice; $M=\\max$. $E(M)=$", ["$\\approx4.47$", "$3.5$", "$6$", "$4$"], 0));
  q.push(num("hard", "Two dice, $M=\\max$: $E(M)$ to 2 decimals (i.e. $\\tfrac{161}{36}$).", 4.47, 0.02));
  q.push(tf("hard", "For a uniform on $\\{1,\\dots,n\\}$, $\\text{Var}(X)=\\tfrac{n^2-1}{12}$.", true));
  q.push(tf("hard", "The maximum of two dice is NOT uniform.", true));
  q.push(ms("hard", "Which are true for the max $M$ of two dice?", ["$P(M=6)=\\tfrac{11}{36}$", "$P(M\\le k)=\\tfrac{k^2}{36}$", "$M$ is uniform", "$P(M\\le4)=\\tfrac{16}{36}$"], [0, 1, 3]));
  q.push(mc("hard", "A random integer $1$--$8$; $Y=2X-1$ (the odd numbers $1$--$15$). $E(Y)=$", ["$8$", "$7$", "$4.5$", "$9$"], 0));
  q.push(num("hard", "$X$ uniform on $1$--$8$, $Y=2X-1$: $E(Y)$?", 8, 0.01));
  q.push(fill("hard", "$\\text{Var}$ of a fair die $=$ ___.", ["35/12"]));
  q.push(mc("hard", "Two dice, $m=\\min$. $P(m\\ge5)=$", ["$\\tfrac{4}{36}$", "$\\tfrac{1}{9}$", "$\\tfrac{2}{6}$", "$\\tfrac{5}{36}$"], 0));
  q.push(num("hard", "Two dice, $m=\\min$: how many of 36 outcomes have $m\\ge5$ (both dice $\\ge5$)?", 4, 0));
  return q;
}

// ── 3.4 The Binomial Distribution ────────────────────────────
function g34() {
  const q = [];
  // EASY
  q.push(mc("easy", "A binomial needs (BINS):", ["fixed trials, 2 outcomes, independent, same $p$", "any trials", "dependent trials", "no fixed $p$"], 0));
  q.push(mc("easy", "$P(X=k)=$", ["$\\binom{n}{k}p^k q^{n-k}$", "$\\binom{n}{k}p^k$", "$p^k$", "$np$"], 0));
  q.push(mc("easy", "For a binomial, the mean is:", ["$np$", "$npq$", "$\\sqrt{np}$", "$\\tfrac{n}{p}$"], 0));
  q.push(mc("easy", "5 fair coins. $P(\\text{exactly 3 heads})=$", ["$\\tfrac{5}{16}$", "$\\tfrac{1}{2}$", "$\\tfrac{3}{5}$", "$\\tfrac{1}{32}$"], 0));
  q.push(mc("easy", "$n=20,\\ p=0.5$. The mean number of successes is:", ["$10$", "$20$", "$5$", "$40$"], 0));
  q.push(mc("easy", "Which is a binomial situation?", ["number of heads in 10 flips", "time until a bus arrives", "a card's suit", "height of a plant"], 0));
  q.push(ms("easy", "Which are binomial requirements?", ["a fixed number of trials", "two outcomes per trial", "constant $p$", "trials depend on each other"], [0, 1, 2]));
  q.push(ms("easy", "Which equal the binomial mean?", ["$np$", "$E(X)$", "$n\\cdot p$", "$npq$"], [0, 1, 2]));
  q.push(tf("easy", "For a binomial, $E(X)=np$.", true));
  q.push(tf("easy", "Binomial trials must be independent.", true));
  q.push(tf("easy", "The standard deviation of a binomial is $\\sqrt{npq}$.", true));
  q.push(num("easy", "$n=40,\\ p=0.25$: mean number of successes?", 10, 0));
  q.push(num("easy", "$n=100,\\ p=0.5$: the mean?", 50, 0));
  q.push(num("easy", "5 fair coins: $P(\\text{exactly 3 heads})=\\tfrac{5}{k}$; find $k$.", 16, 0));
  q.push(fill("easy", "Binomial mean $=$ ___ (in terms of $n,p$).", ["np", "n*p", "n p"]));
  q.push(fill("easy", "Binomial standard deviation $=$ ___.", ["sqrt(npq)", "root(npq)"]));
  q.push(mc("easy", "$n=50,\\ p=0.2$: mean?", ["$10$", "$40$", "$25$", "$70$"], 0));
  q.push(num("easy", "$n=60,\\ p=\\tfrac16$ (rolling a 6): expected number of sixes?", 10, 0));
  q.push(tf("easy", "A binomial has a fixed number of trials.", true));
  q.push(mc("easy", "$n=8,\\ p=0.5$: mean number of heads?", ["$4$", "$8$", "$2$", "$16$"], 0));
  // MEDIUM
  q.push(mc("medium", "A player makes 80\\% of free throws. $P(\\text{exactly 5 of 6})\\approx$", ["$0.393$", "$0.262$", "$0.8$", "$0.5$"], 0));
  q.push(mc("medium", "$n=10,\\ p=0.3$. $P(\\text{exactly 2})\\approx$", ["$0.233$", "$0.3$", "$0.09$", "$0.121$"], 0));
  q.push(mc("medium", "$n=200,\\ p=0.1$: standard deviation $\\approx$", ["$4.24$", "$20$", "$18$", "$14$"], 0));
  q.push(mc("medium", "$n=50,\\ p=0.4$: standard deviation $\\approx$", ["$3.46$", "$20$", "$12$", "$5$"], 0));
  q.push(mc("medium", "A spam filter flags 90\\% of spam. Of 20 spam emails, expected number flagged?", ["$18$", "$2$", "$20$", "$16$"], 0));
  q.push(mc("medium", "$n=7$ true/false guesses ($p=0.5$). $P(\\text{exactly 4 correct})=$", ["$\\tfrac{35}{128}$", "$\\tfrac{1}{2}$", "$\\tfrac{4}{7}$", "$\\tfrac{7}{128}$"], 0));
  q.push(ms("medium", "For $n=50,\\ p=0.4$, which are true?", ["mean $=20$", "$\\sigma=\\sqrt{12}$", "$\\sigma\\approx3.46$", "mean $=0.4$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $P(\\text{exactly 3 heads in 5 flips})$?", ["$\\binom{5}{3}(\\tfrac12)^5$", "$\\tfrac{10}{32}$", "$\\tfrac{5}{16}$", "$\\tfrac{3}{5}$"], [0, 1, 2]));
  q.push(tf("medium", "$n=200,\\ p=0.1$ gives $\\sigma=\\sqrt{18}\\approx4.24$.", true));
  q.push(tf("medium", "A spam filter that catches 90\\% flags about 18 of 20 spam emails on average.", true));
  q.push(num("medium", "$n=50,\\ p=0.4$: variance $npq$?", 12, 0));
  q.push(num("medium", "$n=100,\\ p=0.5$: standard deviation?", 5, 0));
  q.push(num("medium", "6 free throws at $p=0.8$: $P(\\text{all 6})$ to 3 decimals ($0.8^6$)?", 0.262, 0.002));
  q.push(fill("medium", "$n=200,\\ p=0.1$: $\\sigma=\\sqrt{\\;}$ ___.", ["18"]));
  q.push(fill("medium", "$n=7$ T/F guesses: $P(\\text{exactly 4 correct})=$ ___.", ["35/128"]));
  q.push(mc("medium", "$n=12,\\ p=\\tfrac16$ (rolling a 6). $P(\\text{exactly two 6s})\\approx$", ["$0.296$", "$0.167$", "$0.5$", "$0.032$"], 0));
  q.push(num("medium", "A conversion rate is $5\\%$. Of 300 visitors, expected conversions?", 15, 0));
  q.push(tf("medium", "For a binomial, variance $=npq$.", true));
  q.push(mc("medium", "20 seeds each germinate with $p=0.85$. Expected number that germinate?", ["$17$", "$3$", "$20$", "$15$"], 0));
  q.push(num("medium", "20 seeds at $p=0.85$: expected germinations?", 17, 0));
  // HARD
  q.push(mc("hard", "$n=10,\\ p=0.2$. $P(X\\le1)\\approx$", ["$0.376$", "$0.107$", "$0.5$", "$0.268$"], 0));
  q.push(mc("hard", "15 items each defective with $p=0.1$. $P(\\text{at least one defective})\\approx$", ["$0.794$", "$0.206$", "$0.9$", "$0.5$"], 0));
  q.push(mc("hard", "The MOST likely number of heads in 9 flips is:", ["$4$ or $5$", "$3$", "$9$", "$0$"], 0));
  q.push(mc("hard", "For $n=10,\\ p=0.3$, the most likely value (mode) is:", ["$3$", "$2$", "$5$", "$0$"], 0));
  q.push(mc("hard", "A 10-question test, 5 options each, all guessed ($p=0.2$). $P(\\text{at least one correct})\\approx$", ["$0.893$", "$0.107$", "$0.2$", "$0.5$"], 0));
  q.push(mc("hard", "$n=4$ shots at $p=0.7$. $P(\\text{exactly 3 hits})\\approx$", ["$0.412$", "$0.7$", "$0.343$", "$0.24$"], 0));
  q.push(num("hard", "$n=10,\\ p=0.2$: $P(X\\le1)$ to 3 decimals ($0.8^{10}+10(0.2)0.8^9$)?", 0.376, 0.003));
  q.push(num("hard", "15 items at $p=0.1$: $P(\\text{at least one defective})$ to 3 decimals ($1-0.9^{15}$)?", 0.794, 0.003));
  q.push(num("hard", "10-question test guessed at $p=0.2$: $P(\\text{at least one correct})$ to 3 decimals ($1-0.8^{10}$)?", 0.893, 0.003));
  q.push(num("hard", "The mode of a binomial with $n=10,\\ p=0.3$ (i.e. $\\lfloor(n+1)p\\rfloor$)?", 3, 0));
  q.push(mc("hard", "$n=100,\\ p=0.5$: within one $\\sigma$ of the mean is roughly the interval:", ["$45$ to $55$", "$40$ to $60$", "$49$ to $51$", "$0$ to $100$"], 0));
  q.push(num("hard", "$n=64,\\ p=0.5$: $\\sigma=\\sqrt{npq}$?", 4, 0));
  q.push(tf("hard", "For $n=10,\\ p=0.3$ the mode is $3$.", true));
  q.push(tf("hard", "$P(\\text{at least one correct on a 10-Q, 5-option guessed test})=1-0.8^{10}\\approx0.893$.", true));
  q.push(ms("hard", "Which equal $P(\\text{at least one 6 in 4 rolls})$?", ["$1-(\\tfrac56)^4$", "$\\tfrac{671}{1296}$", "$\\approx0.518$", "$\\tfrac46$"], [0, 1, 2]));
  q.push(mc("hard", "$n=4$ dice. $P(\\text{at least one 6})=$", ["$\\tfrac{671}{1296}$", "$\\tfrac{4}{6}$", "$\\tfrac{1}{1296}$", "$\\tfrac{625}{1296}$"], 0));
  q.push(num("hard", "$P(\\text{at least one 6 in 4 rolls})=\\tfrac{k}{1296}$; find $k$.", 671, 0));
  q.push(fill("hard", "$P(\\text{at least one defective, 15 items }p=0.1)\\approx$ ___ (3 decimals).", ["0.794"]));
  q.push(mc("hard", "A/B test: a button converts at $p=0.1$. Of 50 visitors, $P(\\text{exactly 5 convert})\\approx$", ["$0.185$", "$0.1$", "$0.5$", "$0.05$"], 0));
  q.push(num("hard", "$n=50,\\ p=0.1$: $P(\\text{exactly 5})$ to 3 decimals?", 0.185, 0.003));
  return q;
}

// ── 3.5 The Geometric Distribution ───────────────────────────
function g35() {
  const q = [];
  // EASY
  q.push(mc("easy", "The geometric distribution counts:", ["trials until the first success", "successes in $n$ trials", "all outcomes", "the mean"], 0));
  q.push(mc("easy", "$P(X=k)=$", ["$q^{k-1}p$", "$\\binom{n}{k}p^k q^{n-k}$", "$p^k$", "$\\tfrac1p$"], 0));
  q.push(mc("easy", "The mean of a geometric distribution is:", ["$\\tfrac1p$", "$np$", "$p$", "$q$"], 0));
  q.push(mc("easy", "Roll a die until a 6. $P(\\text{first 6 on the 1st roll})=$", ["$\\tfrac16$", "$\\tfrac56$", "$\\tfrac{1}{36}$", "$1$"], 0));
  q.push(mc("easy", "Expected number of rolls to get a 6:", ["$6$", "$\\tfrac16$", "$36$", "$3$"], 0));
  q.push(mc("easy", "With $p=0.5$, expected trials to the first success:", ["$2$", "$0.5$", "$1$", "$4$"], 0));
  q.push(ms("easy", "Which are true of the geometric distribution?", ["$E(X)=\\tfrac1p$", "$P(X=k)=q^{k-1}p$", "it counts trials to first success", "it needs a fixed number of trials"], [0, 1, 2]));
  q.push(ms("easy", "Which equal the mean when $p=\\tfrac14$?", ["$4$", "$\\tfrac1p$", "$\\tfrac{1}{0.25}$", "$0.25$"], [0, 1, 2]));
  q.push(tf("easy", "For a geometric distribution, $E(X)=\\tfrac1p$.", true));
  q.push(tf("easy", "Rarer successes mean longer expected waits.", true));
  q.push(tf("easy", "A geometric distribution has a fixed number of trials.", false));
  q.push(num("easy", "Expected rolls to get a 6?", 6, 0));
  q.push(num("easy", "With $p=0.5$, expected trials to first success?", 2, 0));
  q.push(num("easy", "With $p=0.2$, expected trials to first success?", 5, 0));
  q.push(fill("easy", "Geometric mean $=$ ___ (in terms of $p$).", ["1/p"]));
  q.push(fill("easy", "Roll a die until a 6: $P(\\text{first 6 on roll 1})=$ ___.", ["1/6"]));
  q.push(mc("easy", "$P(\\text{first head on the 2nd toss})=$", ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac18$", "$\\tfrac13$"], 0));
  q.push(num("easy", "With $p=0.1$, expected trials to first success?", 10, 0));
  q.push(tf("easy", "$P(X=k)=q^{k-1}p$ multiplies $k-1$ failures by one success.", true));
  q.push(mc("easy", "A gacha game has a $\\tfrac{1}{50}$ pull rate. Expected pulls to the first rare item:", ["$50$", "$\\tfrac{1}{50}$", "$25$", "$100$"], 0));
  // MEDIUM
  q.push(mc("medium", "Roll a die until a 6. $P(\\text{first 6 on the 3rd roll})=$", ["$\\tfrac{25}{216}$", "$\\tfrac16$", "$\\tfrac{1}{216}$", "$\\tfrac{5}{216}$"], 0));
  q.push(mc("medium", "$P(\\text{no 6 in the first 4 rolls})=$", ["$\\left(\\tfrac56\\right)^4$", "$\\left(\\tfrac16\\right)^4$", "$\\tfrac46$", "$\\tfrac{4}{6}$"], 0));
  q.push(mc("medium", "$P(\\text{first 6 within 3 rolls})=$", ["$\\tfrac{91}{216}$", "$\\tfrac{125}{216}$", "$\\tfrac16$", "$\\tfrac12$"], 0));
  q.push(mc("medium", "A player makes 80\\% of shots. $P(\\text{first miss on the 4th shot})=$", ["$0.1024$", "$0.2$", "$0.512$", "$0.8$"], 0));
  q.push(mc("medium", "With $p=0.4$, $P(\\text{first success on the 4th trial})=$", ["$0.0864$", "$0.4$", "$0.216$", "$0.6$"], 0));
  q.push(mc("medium", "A connection succeeds with $p=0.9$ per try. Expected tries to connect:", ["$\\approx1.11$", "$0.9$", "$10$", "$9$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{first 6 on the 3rd roll})$?", ["$\\left(\\tfrac56\\right)^2\\tfrac16$", "$\\tfrac{25}{216}$", "$q^2p$", "$\\tfrac{1}{216}$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $P(X>k)$ for a geometric distribution?", ["$q^k$", "$P(\\text{no success in }k\\text{ trials})$", "$(1-p)^k$", "$\\tfrac1p$"], [0, 1, 2]));
  q.push(tf("medium", "$P(X>k)=q^k$ for a geometric distribution.", true));
  q.push(tf("medium", "$P(\\text{first 6 within 3 rolls})=1-(\\tfrac56)^3=\\tfrac{91}{216}$.", true));
  q.push(num("medium", "$P(\\text{first 6 on the 3rd roll})=\\tfrac{25}{k}$; find $k$.", 216, 0));
  q.push(num("medium", "$P(\\text{first 6 within 3 rolls})=\\tfrac{k}{216}$; find $k$.", 91, 0));
  q.push(num("medium", "$p=0.4$: $P(\\text{first success on the 4th trial})$ to 4 decimals ($0.6^3\\cdot0.4$)?", 0.0864, 0.0005));
  q.push(fill("medium", "$P(\\text{no 6 in the first 3 rolls})=$ ___.", ["125/216"]));
  q.push(fill("medium", "$p=0.8$ shooter: $P(\\text{first miss on shot 3})=$ ___ ($0.9^2\\cdot0.1$ style, here $0.8^2\\cdot0.2$).", ["0.128"]));
  q.push(mc("medium", "A shooter makes 90\\% of shots. $P(\\text{first miss on the 3rd shot})=$", ["$0.081$", "$0.9$", "$0.729$", "$0.1$"], 0));
  q.push(num("medium", "With $p=0.25$, expected trials to first success?", 4, 0));
  q.push(tf("medium", "For a geometric with $p=0.9$, the expected number of tries is about $1.11$.", true));
  q.push(fill("medium", "$P(\\text{first success on the 5th trial}),\\ p=0.3=$ ___ (4 decimals, $0.7^4\\cdot0.3$).", ["0.0720", "0.072"]));
  q.push(mc("medium", "With $p=0.3$, $P(\\text{more than 5 trials needed})=$", ["$0.7^5$", "$0.3^5$", "$0.7\\cdot5$", "$0.3$"], 0));
  // HARD
  q.push(mc("hard", "Toss a fair coin. $P(\\text{first head on an even-numbered toss})=$", ["$\\tfrac13$", "$\\tfrac12$", "$\\tfrac14$", "$\\tfrac23$"], 0));
  q.push(mc("hard", "A game is won with $p=0.25$ each try. $P(\\text{win on the 3rd try})=$", ["$\\approx0.141$", "$0.25$", "$0.5625$", "$0.75$"], 0));
  q.push(mc("hard", "Same game ($p=0.25$). $P(\\text{win within 2 tries})=$", ["$0.4375$", "$0.5$", "$0.0625$", "$0.75$"], 0));
  q.push(mc("hard", "Geometric memorylessness: given no success in the first 3 trials, $P(\\text{success on the 4th})=$", ["$p$", "$q^3 p$", "$0$", "$\\tfrac1p$"], 0));
  q.push(mc("hard", "With $p=0.2$, $P(\\text{more than 4 trials needed})=$", ["$0.4096$", "$0.2$", "$0.0016$", "$0.8$"], 0));
  q.push(mc("hard", "Toss a coin. $P(\\text{first head on an ODD-numbered toss})=$", ["$\\tfrac23$", "$\\tfrac13$", "$\\tfrac12$", "$\\tfrac34$"], 0));
  q.push(num("hard", "$P(\\text{first head on an even toss})=\\tfrac1k$; find $k$.", 3, 0));
  q.push(num("hard", "$p=0.25$: $P(\\text{win on the 3rd try})$ to 4 decimals ($0.75^2\\cdot0.25$)?", 0.1406, 0.0005));
  q.push(num("hard", "$p=0.2$: $P(\\text{more than 4 trials needed})$ to 4 decimals ($0.8^4$)?", 0.4096, 0.0005));
  q.push(num("hard", "$p=0.25$: $P(\\text{win within 2 tries})$ as a decimal ($1-0.75^2$)?", 0.4375, 0.0005));
  q.push(tf("hard", "The geometric distribution is memoryless: past failures do not change the next trial.", true));
  q.push(tf("hard", "$P(\\text{first head on an even toss})=\\tfrac13$.", true));
  q.push(ms("hard", "Which equal $P(\\text{win within 2 tries}),\\ p=0.25$?", ["$1-0.75^2$", "$0.25+0.75(0.25)$", "$0.4375$", "$0.75^2$"], [0, 1, 2]));
  q.push(mc("hard", "A rare event has $p=0.01$. $P(\\text{it first occurs after trial 100})=$", ["$0.99^{100}$", "$0.01^{100}$", "$\\tfrac{1}{100}$", "$0.99$"], 0));
  q.push(num("hard", "$p=0.01$: $P(\\text{first success after trial 100})$ to 3 decimals ($0.99^{100}$)?", 0.366, 0.003));
  q.push(mc("hard", "A dating app returns a match with $p=0.1$ per swipe. Expected swipes to the first match, and $P(\\text{more than 10})$:", ["$10$ and $0.9^{10}$", "$0.1$ and $0.1^{10}$", "$10$ and $0.1$", "$1$ and $0.9$"], 0));
  q.push(num("hard", "$p=0.1$: $P(\\text{more than 10 swipes to first match})$ to 3 decimals ($0.9^{10}$)?", 0.349, 0.003));
  q.push(fill("hard", "$P(\\text{first head on an even toss})=$ ___.", ["1/3"]));
  q.push(mc("hard", "For a geometric with mean $5$, the success probability is:", ["$0.2$", "$5$", "$0.5$", "$0.05$"], 0));
  q.push(num("hard", "A geometric distribution has mean $8$. Find $p$ (a decimal).", 0.125, 0.001));
  return q;
}

// ── 3.6 The Hypergeometric Distribution ──────────────────────
function g36() {
  const q = [];
  // EASY
  q.push(mc("easy", "The hypergeometric distribution models sampling:", ["without replacement", "with replacement", "of independent trials", "of a single trial"], 0));
  q.push(mc("easy", "$P(X=k)=$", ["$\\dfrac{\\binom{a}{k}\\binom{N-a}{n-k}}{\\binom{N}{n}}$", "$\\binom{n}{k}p^k q^{n-k}$", "$q^{k-1}p$", "$\\tfrac1n$"], 0));
  q.push(mc("easy", "The mean of a hypergeometric is:", ["$n\\cdot\\tfrac{a}{N}$", "$np$", "$\\tfrac1p$", "$N$"], 0));
  q.push(mc("easy", "What distinguishes hypergeometric from binomial?", ["no replacement", "more trials", "a fixed mean", "two outcomes"], 0));
  q.push(mc("easy", "Draw 3 from 5 red, 5 blue (no replacement). $X=$ red. This is:", ["hypergeometric", "binomial", "geometric", "uniform"], 0));
  q.push(mc("easy", "Drawing cards from a deck without replacement is:", ["hypergeometric", "binomial", "geometric", "uniform"], 0));
  q.push(ms("easy", "Which are hypergeometric?", ["draw 5 cards from a deck", "pick 3 marbles without replacement", "flip a coin 10 times", "choose 4 of 12 committee members"], [0, 1, 3]));
  q.push(ms("easy", "Which equal the hypergeometric mean?", ["$n\\cdot\\tfrac{a}{N}$", "$E(X)$", "$\\tfrac{na}{N}$", "$np$ with $p=\\tfrac{a}{N}$"], [0, 1, 2, 3]));
  q.push(tf("easy", "Hypergeometric sampling is without replacement.", true));
  q.push(tf("easy", "The hypergeometric mean is $n\\cdot\\tfrac{a}{N}$.", true));
  q.push(tf("easy", "The binomial replaces each draw; the hypergeometric does not.", true));
  q.push(num("easy", "10 items, 4 defective, draw 3: expected defectives ($3\\cdot\\tfrac{4}{10}$)?", 1.2, 0.001));
  q.push(num("easy", "8 items, 2 defective, draw 4: expected defectives ($4\\cdot\\tfrac{2}{8}$)?", 1, 0));
  q.push(fill("easy", "Hypergeometric mean $=$ ___ (in terms of $n,a,N$).", ["na/N", "n a / N", "n*a/N"]));
  q.push(fill("easy", "Sampling WITHOUT replacement is modelled by the ___ distribution.", ["hypergeometric"]));
  q.push(mc("easy", "20 items, 5 defective, draw 4: expected defectives:", ["$1$", "$5$", "$4$", "$0.25$"], 0));
  q.push(num("easy", "12 items, 3 red, draw 4: expected red ($4\\cdot\\tfrac{3}{12}$)?", 1, 0));
  q.push(tf("easy", "For a small population, without replacement matters (use hypergeometric).", true));
  q.push(mc("easy", "Draw 2 from 5 red, 5 blue. $P(\\text{both red})=$", ["$\\tfrac{2}{9}$", "$\\tfrac14$", "$\\tfrac{1}{2}$", "$\\tfrac{25}{100}$"], 0));
  q.push(num("easy", "Draw 2 from 5R 5B: $P(\\text{both red})=\\tfrac{2}{k}$; find $k$.", 9, 0));
  // MEDIUM
  q.push(mc("medium", "10 items, 4 defective, draw 3. $P(\\text{exactly 1 defective})=$", ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac14$", "$\\tfrac{2}{5}$"], 0));
  q.push(mc("medium", "Draw 3 from 6 red, 4 green. $P(\\text{all red})=$", ["$\\tfrac16$", "$\\tfrac{1}{2}$", "$\\tfrac{1}{12}$", "$\\tfrac{1}{5}$"], 0));
  q.push(mc("medium", "12 people, 5 women; choose 4. $P(\\text{exactly 2 women})=$", ["$\\tfrac{14}{33}$", "$\\tfrac12$", "$\\tfrac{5}{12}$", "$\\tfrac{10}{33}$"], 0));
  q.push(mc("medium", "A box has 7 good, 3 bad; draw 3. $P(\\text{no bad})=$", ["$\\tfrac{7}{24}$", "$\\tfrac12$", "$\\tfrac{7}{10}$", "$\\tfrac13$"], 0));
  q.push(mc("medium", "From that box, $P(\\text{at least one bad})=$", ["$\\tfrac{17}{24}$", "$\\tfrac{7}{24}$", "$\\tfrac12$", "$\\tfrac{3}{10}$"], 0));
  q.push(mc("medium", "Find $P(\\text{exactly 2 aces in a 5-card hand})$:", ["$\\dfrac{\\binom{4}{2}\\binom{48}{3}}{\\binom{52}{5}}$", "$\\binom{4}{2}(\\tfrac{1}{13})^2$", "$\\dfrac{\\binom{48}{5}}{\\binom{52}{5}}$", "$\\tfrac{2}{13}$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{exactly 1 defective, 10 items 4 def, draw 3})$?", ["$\\dfrac{\\binom{4}{1}\\binom{6}{2}}{\\binom{10}{3}}$", "$\\tfrac{60}{120}$", "$\\tfrac12$", "$\\tfrac13$"], [0, 1, 2]));
  q.push(ms("medium", "Which are true for a hypergeometric?", ["mean $=n\\tfrac aN$", "no replacement", "draws are dependent", "constant $p$ per draw"], [0, 1, 2]));
  q.push(tf("medium", "$P(\\text{exactly 1 defective, 10 items 4 def, draw 3})=\\tfrac12$.", true));
  q.push(tf("medium", "Drawing 5 cards is hypergeometric; 5 die rolls are binomial.", true));
  q.push(num("medium", "10 items, 4 defective, draw 3: number of ways with exactly 1 defective ($\\binom41\\binom62$)?", 60, 0));
  q.push(num("medium", "Draw 3 from 6R 4G: $P(\\text{all red})=\\tfrac16$; number of all-red ways ($\\binom63$)?", 20, 0));
  q.push(num("medium", "12 people, 5 women, choose 4: $P(\\text{exactly 2 women})=\\tfrac{14}{k}$; find $k$.", 33, 0));
  q.push(fill("medium", "$P(\\text{no bad, box of 7 good 3 bad, draw 3})=$ ___.", ["7/24", "35/120"]));
  q.push(fill("medium", "$P(\\text{at least one bad, that box})=$ ___.", ["17/24"]));
  q.push(mc("medium", "Draw 4 from 5 red, 5 blue. $P(\\text{2 red and 2 blue})=$", ["$\\tfrac{10}{21}$", "$\\tfrac12$", "$\\tfrac{5}{14}$", "$\\tfrac{3}{7}$"], 0));
  q.push(num("medium", "20 items, 4 defective, draw 5: expected defectives ($5\\cdot\\tfrac{4}{20}$)?", 1, 0));
  q.push(tf("medium", "$P(\\text{2 red 2 blue, draw 4 from 5R 5B})=\\tfrac{10}{21}$.", true));
  q.push(fill("medium", "$P(\\text{exactly 1 defective, 10 items 4 def, draw 3})=$ ___.", ["1/2", "60/120"]));
  q.push(mc("medium", "A deck: $P(\\text{a 5-card hand has all 4 aces})=$", ["$\\dfrac{\\binom{4}{4}\\binom{48}{1}}{\\binom{52}{5}}$", "$\\tfrac{4}{52}$", "$\\dfrac{1}{\\binom{52}{5}}$", "$\\tfrac{1}{13}$"], 0));
  // HARD
  q.push(mc("hard", "Capture-recapture: 20 fish are tagged and released; later 25 are caught and 5 are tagged. Estimate the population $N$:", ["$100$", "$50$", "$500$", "$45$"], 0));
  q.push(mc("hard", "Capture-recapture: tag 40, recapture 50, find 8 tagged. Estimate $N$:", ["$250$", "$200$", "$320$", "$98$"], 0));
  q.push(mc("hard", "A box of 6 good, 4 bad bulbs; draw 3. $P(\\text{exactly 1 bad})=$", ["$\\tfrac12$", "$\\tfrac16$", "$\\tfrac{15}{28}$", "$\\tfrac13$"], 0));
  q.push(mc("hard", "From that box, $E(\\text{bad})=$", ["$1.2$", "$1$", "$0.4$", "$2$"], 0));
  q.push(mc("hard", "$P(\\text{a 5-card hand is exactly 3 hearts and 2 spades})=$", ["$\\dfrac{\\binom{13}{3}\\binom{13}{2}}{\\binom{52}{5}}$", "$\\dfrac{\\binom{26}{5}}{\\binom{52}{5}}$", "$\\dfrac{\\binom{13}{5}}{\\binom{52}{5}}$", "$\\tfrac{6}{52}$"], 0));
  q.push(mc("hard", "In 6/49, $P(\\text{match exactly 4})=$", ["$\\dfrac{\\binom{6}{4}\\binom{43}{2}}{\\binom{49}{6}}$", "$\\dfrac{\\binom{6}{4}}{\\binom{49}{6}}$", "$\\binom{6}{4}(\\tfrac{6}{49})^4$", "$\\tfrac{4}{49}$"], 0));
  q.push(num("hard", "Capture-recapture: tag $20$, recapture $25$, find $5$ tagged. Estimate $N$ ($\\tfrac{20\\cdot25}{5}$).", 100, 0));
  q.push(num("hard", "Capture-recapture: tag $40$, recapture $50$, find $8$ tagged. Estimate $N$.", 250, 0));
  q.push(num("hard", "How many 5-card hands are exactly 3 hearts and 2 spades ($\\binom{13}{3}\\binom{13}{2}$)?", 22308, 0));
  q.push(num("hard", "Box of 6 good, 4 bad, draw 3: $P(\\text{all good})=\\tfrac{\\binom63}{\\binom{10}3}=\\tfrac1k$; find $k$.", 6, 0));
  q.push(mc("hard", "For large populations, the hypergeometric is well approximated by the:", ["binomial", "geometric", "uniform", "normal only"], 0));
  q.push(num("hard", "6/49: number of ways to match exactly 4 ($\\binom64\\binom{43}{2}$)?", 13545, 0));
  q.push(tf("hard", "Capture-recapture estimates $N\\approx\\dfrac{(\\text{tagged})(\\text{recaptured})}{\\text{tagged in recapture}}$.", true));
  q.push(tf("hard", "As the population grows, hypergeometric probabilities approach binomial ones.", true));
  q.push(ms("hard", "Which are correct capture-recapture estimates?", ["tag 20, recap 25, 5 tagged $\\Rightarrow N=100$", "tag 40, recap 50, 8 tagged $\\Rightarrow N=250$", "tag 10, recap 20, 4 tagged $\\Rightarrow N=50$", "tag 20, recap 25, 5 tagged $\\Rightarrow N=5$"], [0, 1, 2]));
  q.push(mc("hard", "A 5-card hand: $P(\\text{exactly 3 hearts})=$", ["$\\dfrac{\\binom{13}{3}\\binom{39}{2}}{\\binom{52}{5}}$", "$\\binom53(\\tfrac14)^3$", "$\\dfrac{\\binom{13}{3}}{\\binom{52}{5}}$", "$\\tfrac{3}{13}$"], 0));
  q.push(num("hard", "Box of 6 good, 4 bad, draw 3: expected number of bad ($3\\cdot\\tfrac{4}{10}$)?", 1.2, 0.001));
  q.push(fill("hard", "Capture-recapture with tag 30, recapture 40, 6 tagged: $N\\approx$ ___.", ["200"]));
  q.push(mc("hard", "A batch of 100 has 10 defective. In a sample of 5 (no replacement), the expected number defective is:", ["$0.5$", "$5$", "$1$", "$10$"], 0));
  q.push(num("hard", "Batch of 100 (10 defective), sample 5: expected defectives ($5\\cdot\\tfrac{10}{100}$)?", 0.5, 0.001));
  return q;
}

export default [
  { code: "3.1", gen: g31 },
  { code: "3.2", gen: g32 },
  { code: "3.3", gen: g33 },
  { code: "3.4", gen: g34 },
  { code: "3.5", gen: g35 },
  { code: "3.6", gen: g36 },
];
