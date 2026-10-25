// MDM4U Worksheet 1.1 — The Fundamental Counting Principle (teacher edition)
import { svgT, treeSvg, fullTree, slotsSvg, tableSvg, poolSvg } from "./figT.mjs";
import { n } from "../../mdm4u/count.mjs";

const S = String.raw;
const postal = 26 * 10 * 26 * 10 * 26 * 10;
const odd4 = 8 * 8 * 7 * 5; // odd 4-digit numbers with distinct digits: units 5, thousands 8, then 8, 7

const EXAMPLES = [
  { title: "Tree diagram", q: "A family chooses a vacation: a destination (beach B, city C or mountains M) and a season (summer S or winter W). Draw a tree diagram and list the outcomes.",
    fig: svgT(treeSvg(fullTree([["B", "C", "M"], ["S", "W"]]), { heads: ["place", "season"] }), 5.4),
    steps: ["Three destination branches, each splitting into two seasons.", "BS, BW, CS, CW, MS, MW."], ans: "6 outcomes" },
  { title: "Table", q: "Two spinners: the first shows 1, 2, 3, 4 and the second shows A, B, C. Make a table of outcomes.",
    fig: svgT(tableSvg([["", "A", "B", "C"], ["1", "1A", "1B", "1C"], ["2", "2A", "2B", "2C"], ["3", "3A", "3B", "3C"], ["4", "4A", "4B", "4C"]], { rowHead: true }), 4.6),
    steps: ["4 rows by 3 columns.", S`$4\times3=12$ cells.`], ans: "12 outcomes" },
  { title: "Multiplicative principle", q: "A car is ordered in 7 colours, 3 trim levels and 2 engines. How many versions?", steps: [S`$7\times3\times2$.`], ans: "42" },
  { title: "Postal codes", q: "A Canadian postal code has the pattern letter-digit-letter digit-letter-digit. If every letter and digit could be used, how many codes are possible?", steps: [S`$26\times10\times26\times10\times26\times10=26^3\times10^3$.`], ans: n(postal) },
  { title: "No repetition", q: "In how many ways can first, second and third prize go to 3 of 20 raffle entrants (one prize each)?", steps: [S`$20\times19\times18$.`], ans: "6840" },
  { title: "Additive principle", q: "A library lends one item: one of 14 novels or one of 9 audiobooks. How many choices?", fig: svgT(poolSvg([[14, "blue", "novels"], [9, "amber", "audiobooks"]], { per: 12 }), 5.2), steps: ["One OR the other.", S`$14+9$.`], ans: "23" },
  { title: "Restricted digit", q: "How many 3-digit numbers (100--999) end in 5?", steps: [S`First digit 1--9 (9), middle 0--9 (10), last 5 (1).`, S`$9\times10\times1$.`], ans: "90" },
  { title: "Restriction with no repeats", q: "How many odd 4-digit numbers have all different digits?",
    fig: svgT(slotsSvg([["thousands", 8, "amber"], ["hundreds", 8], ["tens", 7], ["units", 5, "red"]], { result: n(odd4) }), 6),
    steps: ["Units: odd (5 ways). Thousands: not 0 and not the units digit (8 ways).", "Hundreds: 8 left; tens: 7 left.", S`$8\times8\times7\times5$.`], ans: n(odd4) },
  { title: "Cases", q: "How many licence codes have either 2 or 3 characters, each a letter A--Z (repetition allowed)?", steps: [S`2 characters: $26^2=676$; 3 characters: $26^3=17\,576$.`, "The cases cannot overlap: add."], ans: n(676 + 17576) },
];

const PROBLEMS = [
  { level: 1, q: "A coin is tossed and a 4-sided die (1--4) is rolled. Draw a tree diagram and state the number of outcomes.", ans: "8: H1, H2, H3, H4, T1, T2, T3, T4", space: 4 },
  { level: 1, q: "A sandwich shop offers 4 breads, 5 fillings and 3 sauces. How many sandwiches with one of each?", ans: "60" },
  { level: 1, q: "A student will buy one phone: one of 6 Android models or one of 4 Apple models. How many choices?", ans: "10" },
  { level: 2, q: "How many 5-character passwords use only digits if (a) repetition is allowed, (b) no digit repeats?", ans: S`(a) $10^5=100\,000$; (b) $10\times9\times8\times7\times6=30\,240$` },
  { level: 2, q: "A school's student council needs a president, a secretary and a treasurer from 16 candidates (no one holds two jobs). How many ways?", ans: "3360" },
  { level: 2, q: "How many even 3-digit numbers (100--999) are there if digits may repeat?", ans: S`$9\times10\times5=450$` },
  { level: 2, q: "Use the table to count the outcomes when a 6-sided die and a 3-coloured spinner (red R, green G, blue B) are used. How many outcomes show an even number?", fig: svgT(tableSvg([["", "R", "G", "B"], ["1", "", "", ""], ["2", "", "", ""], ["3", "", "", ""], ["4", "", "", ""], ["5", "", "", ""], ["6", "", "", ""]], { rowHead: true, cw: [40, 50, 50, 50] }), 3.6), ans: "18 outcomes; 9 show an even number", space: 4 },
  { level: 2, q: "A menu has 5 appetizers and 8 desserts. A combo is one appetizer OR one dessert, plus one of 4 drinks. How many combos?", ans: S`$(5+8)\times4=52$` },
  { level: 3, space: 4.5, q: "How many 4-digit numbers have all different digits and are greater than 5000?", ans: S`thousands digit 5--9 (5 ways), then $9\times8\times7$: $5\times504=2520$` },
  { level: 3, space: 4.5, q: "How many whole numbers from 1 to 9999 contain no 0 digit?", ans: S`$9+9^2+9^3+9^4=9+81+729+6561=7380$` },
  { level: 3, space: 4.5, q: "Licence plates are 4 letters followed by 3 digits. How many plates have no repeated letter but may repeat digits? How many more plates are there if letters may repeat?", ans: S`$26\cdot25\cdot24\cdot23\cdot10^3=358\,800\,000$; with repeats $26^4\cdot10^3=456\,976\,000$, so $98\,176\,000$ more` },
  { level: 3, space: 4.5, q: "A test has 10 true/false questions and 5 multiple-choice questions with 4 options each. In how many ways can the whole test be answered (every question answered)? Explain which principle you used.", ans: S`$2^{10}\times4^5=1\,048\,576$; multiplicative principle, one stage per question` },
  { level: 3, space: 5, q: "A code is 3 characters long. The first character is a letter, and each of the other characters is a letter or a digit. How many codes contain at least one digit? (Hint: count all codes, then subtract those with no digit.)", ans: S`all: $26\times36\times36=33\,696$; no digit: $26^3=17\,576$; at least one digit: $16\,120$` },
];

export const WS = {
  code: "1.1",
  title: "The Fundamental Counting Principle",
  bigideas: S`Outcomes can be organized in lists, tables and tree diagrams. When a task is done in stages, multiply the numbers of choices (AND $\Rightarrow$ multiply). When you choose from one group OR another group with no overlap, add (OR $\Rightarrow$ add). Restricted positions are filled first.`,
  goals: ["Organize outcomes with lists, tables and tree diagrams.", "Apply the multiplicative counting principle.", "Apply the additive counting principle.", "Fill restricted positions first; split into cases when needed."],
  curriculum: "A2.3 (additive and multiplicative counting principles); A2.1 (advantages of counting techniques over lists and trees)",
  vocab: [["Outcome", "one possible result"], ["Sample space", "the set of all outcomes"], ["Multiplicative principle", "m ways and n ways: $m\\times n$"], ["Additive principle", "m ways or n ways (no overlap): $m+n$"]],
  hook: "How many different Canadian postal codes could exist? Estimate first (thousands? millions? billions?), then count them by the end of the lesson.",
  concepts: [
    ["1. Organized counting", S`${svgT(treeSvg(fullTree([["X", "Y"], ["1", "2", "3"]]), { heads: ["stage 1", "stage 2"] }), 4.6)}Lists, tables and tree diagrams show every outcome. A tree has one level per stage; each end branch is one outcome.`],
    ["2. Multiplicative principle", S`If stage 1 has $n_1$ choices, stage 2 has $n_2$ choices, …, then the task has $n_1\times n_2\times\cdots\times n_k$ outcomes. Use slot diagrams: one box per stage.`],
    ["3. Additive principle", S`If groups A and B do not overlap, choosing one item from A OR B gives $n(A)+n(B)$ choices. Problems often combine both: add the cases, multiply the stages inside each case.`],
  ],
  tips: ["Ask “and” or “or” before calculating.", "Decide whether repetition is allowed.", "Fill the most restricted slot first.", "Check a large count with a small version you can list.", "Leading zeros: a 4-digit number cannot start with 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
