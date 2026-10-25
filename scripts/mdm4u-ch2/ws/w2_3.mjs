// MDM4U Worksheet 2.3 — Odds & the Complement (teacher edition)
import { svgT, spinnerSvg, poolSvg, diceGridSvg, barsSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Odds from outcomes", q: "A die is rolled. Find the odds in favour of rolling a number greater than 2, and the odds against.", steps: ["Favourable 4 (3, 4, 5, 6), unfavourable 2.", S`In favour $4:2=2:1$; against $1:2$.`], ans: "2 : 1 and 1 : 2" },
  { title: "Spinner", q: "The spinner has 5 equal sectors, 2 of them blue. Find P(blue) and the odds against blue.", fig: svgT(spinnerSvg([["B", 0.2, "blue"], ["B", 0.2, "blue"], ["R", 0.2, "red"], ["R", 0.2, "red"], ["R", 0.2, "red"]], { r: 55 }), 3.2), steps: [S`$P=\frac25$.`, S`Against $3:2$.`], ans: "2/5; 3 : 2" },
  { title: "Odds to probability", q: "The odds in favour of a horse winning are 2 : 13. Find the probability it wins.", steps: [S`$\frac{2}{2+13}=\frac2{15}$.`], ans: "2/15" },
  { title: "Odds against to probability", q: "The odds against an event are 11 : 4. Find P(event) and P(not event).", steps: [S`$P=\frac4{15}$; $P'=\frac{11}{15}$.`], ans: "4/15 and 11/15" },
  { title: "Decimal probability to odds", q: "P(a delivery is late) = 0.08. Find the odds against it being late.", steps: [S`$0.92:0.08=92:8=23:2$.`], ans: "23 : 2" },
  { title: "At least one", q: "Two dice are rolled. Find P(at least one die shows an even number).", fig: svgT(diceGridSvg((a, b) => a % 2 === 0 || b % 2 === 0), 3.8), steps: [S`None even: both odd: $\frac9{36}$.`, S`$1-\frac14=\frac34$.`], ans: "3/4" },
  { title: "Repeated trials", q: "A spinner lands on red with probability 0.2. It is spun 5 times. Find P(at least one red).", steps: [S`$1-0.8^5=1-0.32768$.`], ans: S`$0.67232$` },
  { title: "Bag of tiles", q: "A bag has 7 vowel tiles and 18 consonant tiles. Find the odds in favour of drawing a vowel.", fig: svgT(poolSvg([[7, "red", "vowels"], [18, "blue", "consonants"]], { per: 13 }), 4.4), steps: [S`$7:18$.`], ans: "7 : 18" },
  { title: "Odds and fairness", q: "A game pays 4 dollars profit if you roll a 6 and you lose 1 dollar otherwise. Compare the payout ratio with the odds against rolling a 6.", steps: [S`Odds against a 6: $5:1$.`, "The game pays 4 : 1, less than the true odds 5 : 1, so it favours the house."], ans: "unfair to the player" },
];

const PROBLEMS = [
  { level: 1, q: "A card is drawn. Find the odds in favour of drawing a club and the odds against drawing an ace.", ans: "1 : 3; 12 : 1" },
  { level: 1, q: "Convert to a probability: (a) odds in favour 3 : 7 (b) odds against 5 : 1.", ans: "(a) 3/10 (b) 1/6" },
  { level: 1, q: "P(snow) = 0.15. Find P(no snow) and the odds in favour of snow.", ans: "0.85; 3 : 17" },
  { level: 2, q: "Three coins are tossed. Find the odds in favour of getting at least one head.", ans: "7 : 1" },
  { level: 2, q: "The odds against a team winning are 4 : 3. What is the probability that the team does NOT win?", ans: "4/7" },
  { level: 2, q: "Two dice are rolled. Find the odds against rolling doubles.", ans: "5 : 1" },
  { level: 2, q: "A game has P(win) = 0.35. What are the odds in favour of winning, in lowest terms?", ans: "7 : 13" },
  { level: 2, q: "Use the bar chart of a spinner's sector probabilities to find the odds in favour of landing on C or D.", fig: svgT(barsSvg([0.3, 0.25, 0.25, 0.2], { labels: ["A", "B", "C", "D"], top: true, fmt: (v) => v.toFixed(2), ylabel: "probability" }), 4.4), ans: "0.45 : 0.55 = 9 : 11", space: 4 },
  { level: 3, space: 4.5, q: "A die is rolled 3 times. Find P(at least one 6) and the odds against at least one 6.", ans: S`$1-\left(\frac56\right)^3=\frac{91}{216}$; odds against $125:91$` },
  { level: 3, space: 4.5, q: "The odds in favour of A are 3 : 5 and the odds in favour of B are 1 : 3. A and B are mutually exclusive. Find P(A or B) and the odds in favour of A or B.", ans: S`$\frac38+\frac14=\frac58$; $5:3$` },
  { level: 3, space: 4.5, q: "How many times must a fair coin be tossed so that P(at least one head) is greater than 0.99?", ans: S`$1-0.5^n>0.99\Rightarrow0.5^n<0.01\Rightarrow n=7$` },
  { level: 3, space: 4.5, q: "A raffle sells 500 tickets with 3 prizes. You buy 4 tickets. Find P(you win at least one prize). (Each ticket can win at most one prize.)", ans: S`$1-\frac{\binom{496}{3}}{\binom{500}{3}}\approx${r3(1 - (496 * 495 * 494) / (500 * 499 * 498))}$` },
  { level: 3, space: 5, q: "A sportsbook lists odds against Team A as 2 : 1 and against Team B as 3 : 2 (no draws). Find the implied probabilities, their total, and explain what the total means for a bettor.", ans: S`$\frac13+\frac25=\frac{11}{15}\approx0.733<1$: the odds are generous; a real bookmaker's total is above 1, giving the house an edge` },
];

export const WS = {
  code: "2.3",
  title: "Odds & the Complement",
  bigideas: S`Odds in favour of $A$ $=P(A):P(A')$; odds against $=P(A'):P(A)$. Odds in favour $m:n$ give $P(A)=\frac{m}{m+n}$. The complement rule $P(A')=1-P(A)$ makes “at least one” easy: $P(\text{at least one})=1-P(\text{none})$.`,
  goals: ["Find odds in favour and against.", "Convert between odds and probability.", "Use the complement rule.", "Solve “at least one” problems."],
  curriculum: "A1.5 (complements; P(~A)); A1.1",
  vocab: [["Odds in favour", "favourable : unfavourable"], ["Odds against", "unfavourable : favourable"], ["Complement", "$A'$, with $P(A')=1-P(A)$"]],
  hook: "A game show offers odds of 9 : 1 against winning a prize. Is that the same as a 1 in 9 chance? Discuss before calculating.",
  concepts: [
    ["1. Odds", S`${svgT(spinnerSvg([["win", 0.3, "green"], ["lose", 0.7, "red"]], { r: 45 }), 2.6)}P(win) = 0.3: odds in favour $3:7$, against $7:3$.`],
    ["2. Conversions", S`$m:n$ in favour $\Rightarrow P=\frac{m}{m+n}$. $P=\frac ab$ $\Rightarrow$ odds in favour $a:(b-a)$.`],
    ["3. Complement", S`$P(A')=1-P(A)$; at least one $=1-$ none.`],
  ],
  tips: ["Reduce odds like ratios.", "Odds are not fractions of the whole.", "Divide by m + n for probability.", "Look for “at least”.", "Check that P + P′ = 1."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
