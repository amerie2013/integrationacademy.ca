// MDM4U Worksheet 1.2 — Factorials & Permutations of Distinct Objects (teacher edition)
import { svgT, slotsSvg, hbarsSvg, tilesSvg } from "./figT.mjs";
import { fact, P, n } from "../../mdm4u/count.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Evaluating factorials", q: "Evaluate $8!$ and $\\dfrac{8!}{6!}$.", steps: [S`$8!=8\times7\times6\times5\times4\times3\times2\times1=40\,320$.`, S`$\frac{8!}{6!}=8\times7=56$.`], ans: "40 320 and 56" },
  { title: "A quotient of factorials", q: "Evaluate $\\dfrac{12!}{9!\\,2!}$.", steps: [S`$\frac{12!}{9!}=12\times11\times10=1320$.`, S`$\frac{1320}{2}=660$.`], ans: "660" },
  { title: "Factorial notation", q: "Write $15\\times14\\times13\\times12$ as a quotient of factorials.", steps: [S`It is the first 4 factors of $15!$; cancel the rest, $11!$.`], ans: S`$\frac{15!}{11!}$` },
  { title: "All objects", q: "In how many ways can 9 different trophies be lined up on a shelf?", fig: svgT(hbarsSvg([5, 6, 7, 8, 9].map((k) => [`${k}!`, fact(k)]), { hl: [4] }), 5.6), steps: [S`$9!$.`], ans: n(fact(9)) },
  { title: "r from n", q: "A 4-digit code uses 4 different digits from 0--9. How many codes?", fig: svgT(slotsSvg([["1st", 10], ["2nd", 9], ["3rd", 8], ["4th", 7]], { result: n(P(10, 4)) }), 5.6), steps: [S`$\,{}_{10}P_4=10\times9\times8\times7$.`], ans: n(P(10, 4)) },
  { title: "Formula", q: "Use $P(n,r)=\\dfrac{n!}{(n-r)!}$ to evaluate $P(11,3)$.", steps: [S`$\frac{11!}{8!}=11\times10\times9$.`], ans: "990" },
  { title: "Simplifying with n", q: "Simplify $\\dfrac{n!}{(n-3)!}$.", steps: [S`$n!=n(n-1)(n-2)(n-3)!$.`], ans: S`$n(n-1)(n-2)$` },
  { title: "Solving an equation", q: "Solve ${}_nP_2=110$.", steps: [S`$n(n-1)=110\Rightarrow n^2-n-110=0$.`, S`$(n-11)(n+10)=0$; $n=11$.`], ans: "n = 11" },
  { title: "Two separate arrangements", q: "A band plays 5 different fast songs, then 3 different slow songs. How many set lists?", fig: svgT(tilesSvg(["F", "F", "F", "F", "F", "S", "S", "S"], { colors: { F: "red", S: "blue" }, groups: [[0, 4], [5, 7]], tw: 34 }), 5.6), steps: [S`$5!\times3!=120\times6$.`], ans: "720" },
];

const PROBLEMS = [
  { level: 1, q: "Evaluate (a) $5!$ (b) $\\dfrac{10!}{8!}$ (c) $0!$.", ans: "(a) 120 (b) 90 (c) 1" },
  { level: 1, q: "Evaluate ${}_7P_3$ and ${}_7P_7$.", ans: "210 and 5040" },
  { level: 1, q: "In how many orders can 6 different cars park in 6 numbered spots?", ans: "720" },
  { level: 2, q: "Evaluate $\\dfrac{9!}{4!\\,5!}$.", ans: "126" },
  { level: 2, q: "Write $20\\times19\\times18\\times17\\times16$ in the form $\\dfrac{a!}{b!}$ and in the form ${}_nP_r$.", ans: S`$\frac{20!}{15!}={}_{20}P_5$` },
  { level: 2, q: "Eleven horses run a race. In how many ways can the win, place and show (1st, 2nd, 3rd) be decided?", ans: "990" },
  { level: 2, q: "Simplify $\\dfrac{(n+1)!}{(n-1)!}$.", ans: S`$(n+1)n=n^2+n$` },
  { level: 2, q: "How many 3-letter arrangements (no letter repeated) can be made from the letters of the word FACTOR?", ans: S`$\,{}_6P_3=120$` },
  { level: 3, space: 4.5, q: "Solve $\\dfrac{n!}{(n-2)!}=72$.", ans: S`$n(n-1)=72\Rightarrow n=9$` },
  { level: 3, space: 4.5, q: "Show that ${}_nP_r=n\\times{}_{n-1}P_{r-1}$ and explain the identity in words (think about filling the first slot).", ans: S`$n\cdot\frac{(n-1)!}{(n-r)!}=\frac{n!}{(n-r)!}$; choose the first object ($n$ ways), then arrange $r-1$ of the remaining $n-1$` },
  { level: 3, space: 4.5, q: "How many ways can 4 different math books, 3 different science books and 2 different art books be placed on a shelf if books of the same subject must stay together?", ans: S`$3!\times4!\times3!\times2!=6\times24\times6\times2=1728$` },
  { level: 3, space: 4.5, q: "A 4-digit number is formed from the digits 1--7 with no digit repeated. How many such numbers are there, and how many of them are greater than 5000?", ans: S`$\,{}_7P_4=840$; first digit 5, 6 or 7: $3\times{}_6P_3=360$` },
  { level: 3, space: 5, q: "Find the smallest $n$ for which $n!$ is greater than one billion ($10^9$). Use the bar chart idea: how many times larger is each factorial than the one before?", fig: svgT(hbarsSvg([10, 11, 12, 13].map((k) => [`${k}!`, fact(k)]), { fmt: (v) => v.toExponential(2) }), 5.4), ans: S`$12!=479\,001\,600<10^9<13!=6\,227\,020\,800$, so $n=13$; each is $n$ times the previous one` },
];

export const WS = {
  code: "1.2",
  title: "Factorials & Permutations of Distinct Objects",
  bigideas: S`A permutation is an arrangement in which order matters. $n$ distinct objects can be arranged in $n!=n(n-1)\cdots(2)(1)$ ways, and $r$ of them in $\,{}_nP_r=\frac{n!}{(n-r)!}$ ways. By definition $0!=1$.`,
  goals: ["Evaluate and simplify factorials.", "Count arrangements of n distinct objects.", "Use nPr = n!/(n − r)!.", "Solve simple equations involving nPr and factorials."],
  curriculum: "A2.2 (permutations of distinct objects in standard notation); A2.1 (permutations as a counting technique)",
  vocab: [["$n!$", "$n(n-1)(n-2)\\cdots1$"], ["${}_nP_r$, $P(n,r)$", "arrangements of $r$ of $n$ distinct objects"], ["Permutation", "an ordered arrangement"]],
  hook: "Shuffle a deck of 52 cards. Has that exact order ever appeared before in history? ($52!\\approx8\\times10^{67}$.)",
  concepts: [
    ["1. Factorials", S`$n!=n\times(n-1)!$, $1!=1$, $0!=1$. To simplify a quotient, expand the larger factorial until the smaller appears and cancel.`],
    ["2. Permutations", S`${svgT(slotsSvg([["1st", "n"], ["2nd", "n−1"], ["…", "…"], ["rth", "n−r+1"]]), 5.2)}$\,{}_nP_r=n(n-1)\cdots(n-r+1)=\frac{n!}{(n-r)!}$: $r$ falling factors.`],
    ["3. Technology", "Calculators: n!, nPr keys. Spreadsheets: =FACT(n), =PERMUT(n, r)."],
  ],
  tips: ["$\\frac{8!}{4!}\\ne2!$.", "$(2n)!\\ne2\\cdot n!$.", "Reject negative or non-integer n.", "Order matters for permutations only.", "Show the setup, not just the number."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
