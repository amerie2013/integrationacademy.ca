// MDM4U Worksheet 1.5 — Combinations (teacher edition)
import { svgT, poolSvg, barsSvg, slotsSvg } from "./figT.mjs";
import { P, C, n } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Order matters or not?", q: "From a class of 18, choose (a) 2 students to clean the board together, (b) a class representative and an alternate.", steps: [S`(a) A pair, no roles: $\binom{18}2=153$.`, S`(b) Two different roles: $P(18,2)=306=153\times2!$.`], ans: "(a) 153 (b) 306" },
  { title: "Evaluating", q: "Evaluate $\\binom{9}{4}$ with factorials.", steps: [S`$\frac{9!}{4!\,5!}=\frac{9\times8\times7\times6}{24}=\frac{3024}{24}$.`], ans: "126" },
  { title: "From permutations", q: "$P(12,3)=1320$. Use it to find $\\binom{12}3$.", steps: [S`Each selection of 3 is counted $3!=6$ times: $\frac{1320}{6}$.`], ans: "220" },
  { title: "Symmetry", q: "Evaluate $\\binom{30}{28}$ without a calculator.", steps: [S`$\binom{30}{28}=\binom{30}2=\frac{30\times29}2$.`], ans: "435" },
  { title: "Lottery", q: "A lottery draws 6 numbers from 1 to 49 (order does not matter). How many tickets are possible?", steps: [S`$\binom{49}6$.`], ans: n(C(49, 6)) },
  { title: "Round robin", q: "In a league of 14 teams, every team plays every other team twice (home and away). How many games?", fig: svgT(barsSvg([4, 6, 8, 10, 12, 14].map((k) => C(k, 2)), { labels: ["4", "6", "8", "10", "12", "14"], top: true, xlabel: "teams", ylabel: "pairs of teams" }), 5.2), steps: [S`Pairs: $\binom{14}2=91$. Two games per pair: $182$.`], ans: "182" },
  { title: "Two groups", q: "A committee of 3 nurses and 2 doctors is chosen from 10 nurses and 6 doctors. How many committees?", fig: svgT(poolSvg([[10, "green", "nurses"], [6, "blue", "doctors"]], { per: 8 }), 4.6), steps: [S`$\binom{10}3\binom62=120\times15$.`], ans: "1800" },
  { title: "Cards", q: "How many 5-card hands contain 3 cards of one rank and 2 of another (a full house)?", steps: [S`Rank for the three: 13; choose 3 of its 4 suits: $\binom43$.`, S`Rank for the pair: 12; choose 2 of 4: $\binom42$.`, S`$13\times4\times12\times6$.`], ans: n(13 * 4 * 12 * 6) },
  { title: "Choose, then arrange", q: "From 8 candidates, a committee of 4 is chosen and then a chair is named from the committee. How many ways?", fig: svgT(slotsSvg([["choose 4", 70, "green"], ["name chair", 4, "red"]], { result: 280, bw: 76 }), 4.6), steps: [S`$\binom84=70$, then 4 choices for the chair.`], ans: "280" },
];

const PROBLEMS = [
  { level: 1, q: "Evaluate (a) $\\binom{7}{2}$ (b) $\\binom{10}{0}$ (c) $\\binom{15}{14}$.", ans: "(a) 21 (b) 1 (c) 15" },
  { level: 1, q: "Is each a permutation or a combination? (a) a 4-digit PIN (b) 5 toppings for a pizza (c) a 3-person relay team running legs 1, 2, 3.", ans: "(a) permutation (b) combination (c) permutation" },
  { level: 1, q: "How many ways can 3 of 12 books be chosen to take on holiday?", ans: "220" },
  { level: 2, q: "How many handshakes take place when 16 people each shake hands once with everyone else?", ans: "120" },
  { level: 2, q: "How many diagonals does a polygon with 12 sides have?", ans: S`$\binom{12}2-12=54$` },
  { level: 2, q: "A quiz asks students to answer any 6 of 9 questions. How many choices are there? How many if questions 1 and 2 are compulsory?", ans: S`$\binom96=84$; $\binom74=35$` },
  { level: 2, q: "How many 5-card hands contain exactly 2 spades and 3 diamonds?", ans: S`$\binom{13}2\binom{13}3=78\times286=22\,308$` },
  { level: 2, q: "Use the bar chart idea: for which value of $r$ is $\\binom{11}{r}$ largest? Give the value.", fig: svgT(barsSvg(Array.from({ length: 12 }, (_, r) => C(11, r)), { labels: Array.from({ length: 12 }, (_, r) => r), xlabel: "r", ylabel: "11Cr" }), 5), ans: S`$r=5$ and $r=6$ (tie): $\binom{11}5=462$`, space: 4 },
  { level: 3, space: 4.5, q: "Solve $\\binom{n}{2}=105$.", ans: S`$n(n-1)=210\Rightarrow n=15$` },
  { level: 3, space: 4.5, q: "Twelve points lie on a circle. How many triangles have vertices at these points? How many of those triangles have a given point P as a vertex?", ans: S`$\binom{12}3=220$; with P: $\binom{11}2=55$` },
  { level: 3, space: 4.5, q: "Show algebraically that $\\binom{n}{r}=\\binom{n}{n-r}$ and explain it in words.", ans: S`both equal $\frac{n!}{r!\,(n-r)!}$; choosing $r$ to take = choosing $n-r$ to leave` },
  { level: 3, space: 4.5, q: "A basketball coach picks a starting five from 12 players: 2 guards from 5 guards, 2 forwards from 4 forwards, and 1 centre from 3 centres. How many starting fives? If any player could play any position, how many more starting fives would be possible?", ans: S`$\binom52\binom42\binom31=10\times6\times3=180$; any position: $\binom{12}5=792$, so 612 more` },
  { level: 3, space: 5, q: "The executive of a 10-member club (president, vice-president, secretary, treasurer) can be chosen in $P(10,4)$ ways. Use this number to find the number of 4-member committees of equal standing, and explain the relationship between the two counts.", ans: S`$P(10,4)=5040$; committees $=\frac{5040}{4!}=210$; every committee can be turned into $4!=24$ executives by assigning the jobs` },
];

export const WS = {
  code: "1.5",
  title: "Combinations",
  bigideas: S`A combination is a selection in which order does not matter. Each selection of $r$ objects can be arranged in $r!$ ways, so $\binom nr=\frac{P(n,r)}{r!}=\frac{n!}{r!\,(n-r)!}$. Choosing $r$ to take is the same as choosing $n-r$ to leave: $\binom nr=\binom n{n-r}$.`,
  goals: ["Decide whether order matters.", "Calculate nCr.", "Relate nPr and nCr.", "Combine selections from several groups."],
  curriculum: "A2.1 (distinguish and connect permutations and combinations); A2.2 (combinations in standard notation); A2.3 (multiplicative principle with selections)",
  vocab: [["Combination", "an unordered selection"], ["$\\binom nr$", "“n choose r”, also ${}_nC_r$ or $C(n,r)$"]],
  hook: "Lottery 6/49: is it easier to win the jackpot or to be struck by lightning? Count the tickets first.",
  concepts: [
    ["1. Permutation vs combination", S`Swap two chosen objects: if the result changes, order matters (permutation); if not, it is a combination.`],
    ["2. The formula", S`$\binom nr=\frac{n!}{r!\,(n-r)!}$; $\binom n0=\binom nn=1$; $\binom n1=n$; $\binom n2=\frac{n(n-1)}2$.`],
    ["3. Several groups", S`${svgT(poolSvg([[4, "red", "A"], [5, "blue", "B"]], { per: 9 }), 3.8)}Choose from each group and multiply: $\binom{n_A}{a}\binom{n_B}{b}$.`],
  ],
  tips: ["Teams, committees, hands, samples: combinations.", "Jobs, ranks, codes, orders: permutations.", "Two groups: multiply.", "Choose then arrange = permutation.", "Use symmetry to shorten calculations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
