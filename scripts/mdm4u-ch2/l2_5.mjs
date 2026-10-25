// MDM4U 2.5 — Independent & Dependent Events: P(A and B) = P(A)·P(B) for independent events, P(A)·P(B | A) for
// dependent events, with and without replacement, testing independence from data, and repeated independent trials
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, frac, hard, fig, treeSvg, poolSvg, tableSvg, spinnerSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "2.5 Independent & Dependent Events";
export const ID = "95ffa613-578c-47a4-bf70-476b1bf97a76";
const S = String.raw;

/** two-draw tree with branch probabilities given per node */
const draw2 = (r, b, rep) => {
  const n = r + b, f = (a, d) => `${a}/${d}`;
  const second = (rLeft, bLeft, tot) => [{ t: "R", p: f(rLeft, tot) }, { t: "B", p: f(bLeft, tot) }];
  return [
    { t: "R", p: f(r, n), c: rep ? second(r, b, n) : second(r - 1, b, n - 1) },
    { t: "B", p: f(b, n), c: rep ? second(r, b, n) : second(r, b - 1, n - 1) },
  ];
};

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Independent & Dependent Events",
    overview: S`Events are <strong>independent</strong> if one happening does not change the probability of the other — two coin tosses, or draws <em>with</em> replacement. Then \[P(A\text{ and }B)=P(A)\times P(B).\] Events are <strong>dependent</strong> if the first changes the second — draws <em>without</em> replacement. Then multiply by the probability of B <em>given</em> that A has happened: \[P(A\text{ and }B)=P(A)\times P(B\mid A).\]`,
    goals: [
      "decide whether two events are independent or dependent;",
      "find P(A and B) for independent events;",
      "find P(A and B) for dependent events using P(B | A);",
      "compare drawing with and without replacement;",
      "test independence from data by comparing P(A and B) with P(A)·P(B).",
    ],
    curriculum: "A1.6 (determine whether two events are independent or dependent, and solve related problems [P(A and B), P(A or B)] using tree diagrams, lists and formulas); A2.5 (draws with and without replacement)",
    prior: [
      ["Multiply 3/8 × 2/7.", "6/56 = 3/28."],
      ["A bag has 5 red and 3 blue marbles. One red is removed. What fraction of the bag is red now?", "4/7."],
      ["P(heads) on a fair coin?", "1/2."],
    ],
    words: [
      ["Independent events", "the outcome of one does not affect the other", "rolling a die twice"],
      ["Dependent events", "the outcome of one changes the probability of the other", "drawing two cards without replacement"],
      ["With replacement", "the item is put back before the next draw", "the sample space is the same each time"],
      ["P(B | A)", "probability of B given that A has happened", "P(2nd red | 1st red)"],
    ],
  }),

  section("📌 With and without replacement", S`
  <p>A bag holds 5 red and 3 blue marbles. Two are drawn.</p>
  ${fig(treeSvg(draw2(5, 3, true), { heads: ["1st", "2nd"], leaf: (p) => p.join("") }), "with replacement: the second draw always has 5/8 red — independent")}
  ${fig(treeSvg(draw2(5, 3, false), { heads: ["1st", "2nd"], leaf: (p) => p.join("") }), "without replacement: the second draw depends on the first — dependent")}
  ${table(["P(both red)", "Calculation", "Value"], [["with replacement", "\\(\\frac58\\times\\frac58\\)", `\\(\\frac{25}{64}\\approx${r3(25 / 64)}\\)`], ["without replacement", "\\(\\frac58\\times\\frac47\\)", `\\(\\frac{20}{56}=\\frac{5}{14}\\approx${r3(5 / 14)}\\)`]])}
  ${keyIdea(S`Multiply along a branch of a tree. For independent events every second-stage branch has the same probabilities; for dependent events they change.`)}`),

  section("📌 Testing independence from data", S`
  <p>Events A and B are independent exactly when \(P(A\cap B)=P(A)\,P(B)\) (equivalently \(P(B\mid A)=P(B)\)). With survey data, compare the two sides:</p>
  ${fig(tableSvg([["", "left-handed", "right-handed", "total"], ["plays guitar", "6", "24", "30"], ["no guitar", "14", "56", "70"], ["total", "20", "80", "100"]], { rowHead: true }), "P(left and guitar) = 0.06 = 0.20 × 0.30: independent in this data")}
  ${keyIdea(S`Mutually exclusive (cannot both happen) and independent (do not affect each other) are different ideas.`)}`),

  section("📌 Explore", S`<p>Change the numbers of red and blue marbles and switch between with and without replacement. Compare the second-stage branch probabilities.</p>`),

  widget("drawLab", { init: [5, 3] }),

  section("📌 Watch out", watchOut([
    "Without replacement, both the favourable count and the total go down by 1 after each draw.",
    "Multiply only along one path; add the probabilities of different paths.",
    "Do not assume independence in real data — check it.",
    "“At least one” in repeated trials: 1 − P(none), with P(none) = product of the single misses.",
  ])),

  examples([
    ["Independent", "A coin is tossed and a die is rolled. Find P(heads and a number greater than 4).",
      [S`Independent: \(\frac12\times\frac26=\frac16\).`],
      "1/6"],
    ["Dependent cards", "Two cards are drawn without replacement. Find P(both are aces).",
      [S`\(P(\text{1st ace})=\frac4{52}\), \(P(\text{2nd ace}\mid\text{1st ace})=\frac3{51}\).`, S`\(\frac4{52}\times\frac3{51}=\frac{12}{2652}=\frac1{221}\).`],
      "1/221"],
    ["Order of colours", "A box has 6 good and 2 defective fuses. Two are tested without replacement. Find P(one good and one defective).",
      [S`Good then defective: \(\frac68\cdot\frac27=\frac{12}{56}\). Defective then good: \(\frac28\cdot\frac67=\frac{12}{56}\).`, S`Add the two paths: \(\frac{24}{56}=\frac37\).`],
      "3/7",
      fig(poolSvg([[6, "green", "good"], [2, "red", "defective"]], { per: 8 }))],
    ["Repeated independent trials", "A spinner lands on blue with probability 0.3. It is spun 4 times. Find P(blue every time) and P(at least one blue).",
      [S`\(0.3^4=0.0081\).`, S`\(1-0.7^4=1-0.2401=0.7599\).`],
      "0.0081 and 0.7599",
      fig(spinnerSvg([["blue", 0.3, "blue"], ["other", 0.7, "gray"]], { r: 60 }))],
    ["Checking independence", "P(A) = 0.4, P(B) = 0.25 and P(A and B) = 0.1. Are A and B independent? Find P(A or B).",
      [S`\(P(A)P(B)=0.4\times0.25=0.1=P(A\cap B)\): independent.`, S`\(P(A\cup B)=0.4+0.25-0.1=0.55\).`],
      "independent; 0.55"],
  ]),

  practice([
    q("independent", "Two dice are rolled. What is P(both show a 6)?", frac(1, 36), "Independent.", [S`\(\frac16\times\frac16\).`], "1/36"),
    q("dependent", "Two cards are drawn without replacement. What is P(both hearts)?", frac(1, 17), "13/52 × 12/51.", [S`\(\frac{156}{2652}\).`], "1/17"),
    q("with", "A bag has 3 red and 7 white balls. Two are drawn WITH replacement. What is P(both red)?", num(0.09), "0.3 × 0.3.", [S`\(0.09\).`], "0.09"),
    q("without", "Same bag, two drawn WITHOUT replacement. What is P(both red)?", frac(1, 15), "3/10 × 2/9.", [S`\(\frac6{90}\).`], "1/15"),
    q("test", "P(A) = 0.5, P(B) = 0.6, P(A and B) = 0.2. Are A and B independent?", choice(["no", "yes"], 0), "Compare 0.5 × 0.6 with 0.2.", ["0.3 ≠ 0.2."], "no"),
  ]),

  ...hard([
    ["Three draws", "A committee of 3 is chosen at random one at a time from 5 women and 4 men. Find P(all three are women) and P(the first two are women and the third is a man).",
      [S`\(\frac59\cdot\frac48\cdot\frac37=\frac{60}{504}=\frac5{42}\).`, S`\(\frac59\cdot\frac48\cdot\frac47=\frac{80}{504}=\frac{10}{63}\).`],
      "5/42 and 10/63"],
    ["Independence from a table", "In a survey of 250 drivers, 80 had a ticket last year; 120 drive a red car; 40 have both. Are “ticket” and “red car” independent?",
      [S`\(P(T)=0.32\), \(P(R)=0.48\), \(P(T\cap R)=0.16\).`, S`\(P(T)P(R)=0.1536\ne0.16\), but very close.`, S`In this data they are not exactly independent; \(P(T\mid R)=\frac{40}{120}\approx0.333\) vs \(P(T)=0.32\) — red cars get tickets only slightly more often.`],
      "almost independent (0.16 vs 0.154)",
      fig(tableSvg([["", "ticket", "no ticket", "total"], ["red", "40", "80", "120"], ["not red", "40", "90", "130"], ["total", "80", "170", "250"]], { rowHead: true }))],
  ], [
    q("hard", "A family has 3 children. Assuming boys and girls are equally likely and independent, what is P(at least one girl)?", frac(7, 8), "1 − P(all boys).", [S`\(1-\frac18\).`], "7/8"),
    q("hard", "Three cards are drawn without replacement. What is P(no face cards)? (3 decimals)", num(r3((40 / 52) * (39 / 51) * (38 / 50)), 0.001), "40/52 × 39/51 × 38/50.", [S`\(\approx0.447\).`], "0.447"),
    q("hard", "A test has 5 multiple-choice questions with 4 options each. A student guesses every answer. What is P(all 5 wrong)? (4 decimals)", num(r3(0.75 ** 5, 4), 0.0001), "0.75⁵.", [S`\(0.2373\).`], "0.2373"),
  ]),

  wrapUp({
    qas: [
      ["How can I tell if events are independent?", "Ask whether knowing one happened changes the chance of the other; with numbers, check P(A and B) = P(A)·P(B)."],
      ["Why is drawing without replacement dependent?", "The first draw changes the contents of the bag, so the second probability changes."],
      ["When do I add and when do I multiply?", "Multiply along a path (A and then B); add different paths (this way or that way)."],
      ["Are mutually exclusive events independent?", "No (if both are possible): if one happens, the other cannot, so the first changes the second."],
      ["What does P(B | A) mean?", "The probability of B calculated knowing that A has already happened."],
    ],
    summary: [
      "Independent: P(A and B) = P(A)·P(B).",
      "Dependent: P(A and B) = P(A)·P(B | A).",
      "Without replacement → dependent; with replacement → independent.",
      "Independence test: P(A ∩ B) = P(A)·P(B).",
    ],
    next: "2.6 studies conditional probability P(B | A) in detail.",
  }),
];
