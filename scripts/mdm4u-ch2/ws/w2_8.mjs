// MDM4U Worksheet 2.8 — Counting & Probability (teacher edition)
import { svgT, poolSvg, tilesSvg, barsSvg, seatsSvg } from "./figT.mjs";
import { fact, C, multi, countPerms, r3 } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Committee", q: "A 5-person committee is chosen at random from 8 women and 7 men. Find P(3 women and 2 men).", fig: svgT(poolSvg([[8, "red", "women"], [7, "blue", "men"]], { per: 15 }), 5), steps: [S`$\frac{\binom83\binom72}{\binom{15}5}=\frac{56\times21}{3003}=\frac{1176}{3003}$.`], ans: `≈ ${r3(1176 / 3003)}` },
  { title: "Cards: all one suit", q: "Find P(a 5-card hand is a flush, all one suit, including straight flushes).", steps: [S`$\frac{4\binom{13}5}{\binom{52}5}=\frac{5148}{2\,598\,960}$.`], ans: `≈ ${r3(5148 / 2598960, 5)}` },
  { title: "Two pairs", q: "Find P(a 5-card hand has exactly two pairs).", steps: [S`Choose 2 ranks for the pairs $\binom{13}2$, suits $\binom42^2$, the fifth card from the other 44: $78\cdot36\cdot44=123\,552$.`, S`$\frac{123\,552}{2\,598\,960}$.`], ans: `≈ ${r3(123552 / 2598960, 4)}` },
  { title: "Arrangement", q: "Seven books, including a dictionary and an atlas, are shelved at random. Find P(the dictionary and atlas are at the two ends).", steps: [S`$\frac{2!\,5!}{7!}=\frac{240}{5040}=\frac1{21}$.`], ans: "1/21" },
  { title: "Letters with repeats", q: "The letters of BOOKKEEPER are arranged at random. Find P(the arrangement starts with B).", steps: [S`All: $\frac{10!}{2!\,2!\,3!}$. Start with B: $\frac{9!}{2!\,2!\,3!}$.`, S`Ratio $\frac{9!}{10!}=\frac1{10}$.`], ans: "1/10" },
  { title: "Defective items", q: "A box of 24 batteries has 4 dead. Three are chosen at random. Find P(none dead) and P(at least one dead).", steps: [S`$\frac{\binom{20}3}{\binom{24}3}=\frac{1140}{2024}$.`, S`At least one: $1-\frac{1140}{2024}\approx${r3(1 - 1140 / 2024)}$.`], ans: `${r3(1140 / 2024)} and ${r3(1 - 1140 / 2024)}` },
  { title: "Round table", q: "Six people sit at random around a round table. Find P(two particular people sit opposite each other).", fig: svgT(seatsSvg(["A", "", "", "B", "", ""], { hl: [0, 3] }), 3), steps: [S`Fix A; B can be in any of the other 5 seats equally likely; one is opposite.`], ans: "1/5" },
  { title: "Birthdays", q: "Find P(at least two of 10 people share a birthday).", steps: [S`$1-\frac{P(365,10)}{365^{10}}$.`], ans: `≈ ${r3(1 - Array.from({ length: 10 }, (_, i) => (365 - i) / 365).reduce((a, b) => a * b, 1))}` },
  { title: "Lottery", q: "A lottery draws 6 numbers from 49. Find P(a ticket matches exactly 4).", fig: svgT(barsSvg([3, 4, 5, 6].map((k) => (C(6, k) * C(43, 6 - k)) / C(49, 6)), { labels: ["3", "4", "5", "6"], top: true, fmt: (v) => v.toExponential(1), ylabel: "probability" }), 4.6), steps: [S`$\frac{\binom64\binom{43}2}{\binom{49}6}=\frac{15\times903}{13\,983\,816}$.`], ans: `≈ ${r3((15 * 903) / 13983816, 6)}` },
];

const PROBLEMS = [
  { level: 1, q: "A 3-person team is chosen at random from 10 people, including Ann. Find P(Ann is on the team).", ans: S`$\frac{\binom92}{\binom{10}3}=\frac{36}{120}=\frac3{10}$` },
  { level: 1, q: "Two cards are dealt. Find P(both are face cards).", ans: S`$\frac{\binom{12}2}{\binom{52}2}=\frac{66}{1326}=\frac{11}{221}$` },
  { level: 1, q: "The letters of HOUSE are arranged at random. Find P(it starts with H and ends with E).", ans: S`$\frac{3!}{5!}=\frac1{20}$` },
  { level: 2, q: "Five cards are dealt. Find P(exactly 2 aces).", ans: S`$\frac{\binom42\binom{48}3}{\binom{52}5}=\frac{6\times17\,296}{2\,598\,960}\approx${r3((6 * 17296) / 2598960, 4)}$` },
  { level: 2, q: "A jury of 12 is chosen from 10 women and 10 men. Find P(6 women and 6 men).", ans: S`$\frac{\binom{10}6^2}{\binom{20}{12}}=\frac{44\,100}{125\,970}\approx${r3(44100 / 125970)}$` },
  { level: 2, q: "Eight runners, including 3 from the same club, line up in random lanes 1–8. Find P(the club's runners are in lanes 1, 2, 3).", ans: S`$\frac{3!\,5!}{8!}=\frac1{56}$` },
  { level: 2, q: "Find P(a random arrangement of the letters of CANADA has the three A's together).", fig: svgT(tilesSvg("CANADA".split(""), { colors: { A: "red" } }), 3.6), ans: S`$\frac{4!}{6!/3!}=\frac{24}{120}=\frac15$` },
  { level: 2, q: "A 4-digit PIN with digits 0–9 is chosen at random (repeats allowed). Find P(at least one digit repeats).", ans: S`$1-\frac{10\cdot9\cdot8\cdot7}{10^4}=0.496$` },
  { level: 3, space: 4.5, q: "Find P(a 5-card hand contains at least one card of each suit).", ans: S`$\frac{4\binom{13}2\cdot13^3}{\binom{52}5}=\frac{685\,464}{2\,598\,960}\approx${r3(685464 / 2598960)}$` },
  { level: 3, space: 4.5, q: "A committee of 4 is chosen at random from 5 married couples. Find P(no married couple is on the committee).", ans: S`$\frac{\binom54\,2^4}{\binom{10}4}=\frac{80}{210}=\frac8{21}$` },
  { level: 3, space: 4.5, q: "How many people are needed so that P(at least two share a birthday) is greater than 0.5? Show the calculation for that number.", ans: S`23: $1-\frac{P(365,23)}{365^{23}}\approx0.507$ (22 people give about 0.476)` },
  { level: 3, space: 4.5, q: "The letters of STATISTICS are arranged at random. Find P(the arrangement begins and ends with S).", ans: S`$\frac{8!/(3!\,2!)}{10!/(3!\,3!\,2!)}=\frac{3360}{50\,400}=\frac1{15}$` },
  { level: 3, space: 5, q: "Five people check their coats and get them back at random. Find P(nobody gets their own coat).", ans: S`derangements of 5: 44; $\frac{44}{120}=\frac{11}{30}\approx0.367$` },
];

export const WS = {
  code: "2.8",
  title: "Counting & Probability",
  bigideas: S`For equally likely outcomes $P(A)=\frac{n(A)}{n(S)}$. Count both with the same method: combinations when order does not matter (hands, committees, samples) and permutations when it does (line-ups, codes, words). Use $1-P(\text{none})$ for “at least one”.`,
  goals: ["Count n(A) and n(S) with combinations or permutations.", "Find probabilities for cards, committees and samples.", "Find probabilities for arrangements.", "Use the complement; solve the birthday problem."],
  curriculum: "A2.5 (probability using counting principles for equally likely outcomes)",
  vocab: [["Random selection", "every selection equally likely"], ["Favourable outcome", "an outcome in the event"]],
  hook: "How many students must be in a room before a shared birthday is more likely than not? Guess first.",
  concepts: [
    ["1. Selections", S`${svgT(poolSvg([[4, "red", "A"], [6, "blue", "B"]], { per: 10 }), 3.6)}$P(\text{exactly }k\text{ of A})=\frac{\binom{a}{k}\binom{b}{r-k}}{\binom{a+b}{r}}$.`],
    ["2. Arrangements", S`$P=\frac{\text{arrangements with the condition}}{\text{all arrangements}}$, both with $n!$ or $P(n,r)$.`],
    ["3. Complement", S`At least one $=1-$ none; birthday problem $1-\frac{P(365,k)}{365^k}$.`],
  ],
  tips: ["Same counting method top and bottom.", "Exactly k: the rest from the others.", "Check with small cases.", "Use technology for large numbers.", "Probabilities of all cases add to 1."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
