// MCR3U 8.1 — Simple Interest: I = Prt, A = P(1 + rt), time in months and days, solving for P, r and t,
// simple interest as an arithmetic sequence and a linear function
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { m } from "./fin.mjs";

export const TITLE = "8.1 Simple Interest";
export const ID = "137abc87-9401-4ea2-80d9-a91681aeef52";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "💵",
    title: "Simple Interest",
    overview: S`When you borrow or invest money, <strong>interest</strong> is the extra amount paid for using it. With <strong>simple interest</strong> the interest is calculated only on the original principal, so the same amount is added every year: \(I=Prt\) and the amount is \(A=P+I=P(1+rt)\). In this lesson you will calculate simple interest and amounts, solve for the principal, rate or time, and see that the yearly amounts form an arithmetic sequence — a linear function of time.`,
    goals: [
      "calculate simple interest with I = Prt;",
      "find the amount A = P(1 + rt);",
      "convert months and days to years;",
      "solve for the principal, rate or time;",
      "connect simple interest to arithmetic sequences and linear growth.",
    ],
    curriculum: "C2.1 (make and describe connections between simple interest, arithmetic sequences and linear growth, through investigation with technology)",
    prior: [
      ["Write 4.5% as a decimal.", "0.045."],
      ["What fraction of a year is 9 months?", "0.75."],
      ["Find the common difference of 1050, 1100, 1150, …", "50."],
    ],
    words: [
      ["Principal P", "the money invested or borrowed", ""],
      ["Interest rate r", "per year (per annum, written %/a), as a decimal", ""],
      ["Time t", "in years", ""],
      ["Amount A", "principal plus interest (also called future value)", ""],
    ],
  }),

  section("📌 The formulas", S`
  ${table(["Find", "Formula"], [["interest", "\\(I=Prt\\)"], ["amount", "\\(A=P+I=P(1+rt)\\)"], ["rate", "\\(r=\\frac{I}{Pt}\\)"], ["time", "\\(t=\\frac{I}{Pr}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 2000 }, points: Array.from({ length: 8 }, (_, k) => ({ x: k + 1, y: 1200 + 84 * (k + 1) })), lines: [{ m: 84, b: 1200, color: "gray", dash: true }], step: { x: 1, y: 200 }, xlabel: "years", ylabel: "amount" }, "1200 dollars at 7%/a simple interest: 1284, 1368, 1452, … — add 84 each year")}
  ${keyIdea(S`Simple interest adds the same amount \(Pr\) every year, so the year-end amounts form an arithmetic sequence with \(a=P(1+r)\) and \(d=Pr\). Its graph is linear.`)}`),

  section("📌 Explore", S`<p>Compare simple interest (green) with compound interest (violet, next lesson). Increase the years: when does the gap become large?</p>`),

  widget("simpleCompound", { init: [1000, 6, 20] }),

  section("📌 Watch out", watchOut([
    "Write the rate as a decimal: 6% = 0.06.",
    "Time must be in years: 8 months = 8/12, 73 days = 73/365.",
    "I is only the interest; A includes the principal.",
    "Round money to the nearest cent only at the end.",
  ])),

  examples([
    ["Interest and amount", "Find the simple interest and the amount when 2500 dollars is invested at 4%/a for 3 years.",
      [S`\(I=2500(0.04)(3)=300\).`, S`\(A=2500+300\).`],
      "I = 300 dollars, A = 2800 dollars"],
    ["Time in months", "Find the simple interest on 1800 dollars at 5.5%/a for 8 months.",
      [S`\(t=\frac8{12}\): \(I=1800(0.055)\left(\frac8{12}\right)\).`],
      `${m(1800 * 0.055 * (8 / 12))} dollars`],
    ["Finding the rate", "An investment of 4000 dollars grows to 4720 dollars in 4 years at simple interest. Find the rate.",
      [S`\(I=720\): \(r=\frac{720}{4000(4)}=0.045\).`],
      "4.5%/a"],
    ["Finding the time", "How long does it take 600 dollars to earn 90 dollars of simple interest at 3%/a?",
      [S`\(t=\frac{90}{600(0.03)}=\frac{90}{18}\).`],
      "5 years"],
    ["An arithmetic sequence", "1200 dollars is invested at 7%/a simple interest. Write the amount at the end of year n and identify the type of sequence.",
      [S`Each year adds \(1200(0.07)=84\).`, S`\(t_n=1200+84n\): 1284, 1368, 1452, …`],
      "arithmetic, d = 84 (linear growth)"],
  ]),

  practice([
    q("interest", "Find the simple interest on 900 dollars at 3%/a for 5 years (dollars).", num(135),
      "I = Prt.", [S`\(900(0.03)(5)\).`], "135"),
    q("amount", "Find the amount when 1500 dollars earns 6%/a simple interest for 2 years (dollars).", num(1680),
      "A = P(1 + rt).", [S`\(1500(1.12)\).`], "1680"),
    q("rate", "2000 dollars grows to 2300 dollars in 3 years at simple interest. Find the rate (%/a).", num(5),
      "r = I/(Pt).", [S`\(\frac{300}{6000}\).`], "5"),
    q("time", "How many years does it take 5000 dollars to earn 1000 dollars at 4%/a simple interest?", num(5),
      "t = I/(Pr).", [S`\(\frac{1000}{200}\).`], "5"),
    q("pattern", "The year-end amounts of a simple-interest investment form which kind of sequence?", choice(["arithmetic", "geometric", "neither", "Fibonacci"], 0),
      "The same interest is added each year.", ["Constant difference Pr."], "arithmetic"),
  ]),

  ...hard([
    ["Interest for days", "Find the simple interest on 3650 dollars at 6%/a for 73 days.",
      [S`\(t=\frac{73}{365}=0.2\) years.`, S`\(I=3650(0.06)(0.2)\).`],
      `${m(3650 * 0.06 * 0.2)} dollars`],
    ["A loan between friends", "Sam lends Ali 800 dollars. After 9 months Ali repays 860 dollars. What simple interest rate is that?",
      [S`\(I=60\), \(t=0.75\): \(r=\frac{60}{800(0.75)}=0.1\).`],
      "10%/a",
      plane({ view: { xmin: 0, xmax: 12, ymin: 780, ymax: 900 }, lines: [{ m: 800 * 0.1 / 12, b: 800, color: "green" }], points: [{ x: 0, y: 800, label: "800" }, { x: 9, y: 860, label: "860 at 9 months" }], step: { x: 1, y: 20 }, xlabel: "months", ylabel: "owed" })],
  ], [
    q("hard", "A loan at 6%/a simple interest is repaid with 2240 dollars after 2 years. How much was borrowed (dollars)?", num(2000),
      "P = A/(1 + rt).", [S`\(\frac{2240}{1.12}\).`], "2000"),
    q("hard", "How many years does it take money to double at 8%/a simple interest?", num(12.5, 0.01),
      "I must equal P.", [S`\(rt=1\Rightarrow t=\frac1{0.08}\).`], "12.5"),
    q("hard", "One year of simple interest on 4500 dollars is 270 dollars. Find the rate (%/a).", num(6),
      "270 ÷ 4500.", [S`\(0.06\).`], "6"),
  ]),

  wrapUp({
    qas: [
      ["Why is it called simple interest?", "Interest is calculated only on the original principal, never on earlier interest."],
      ["Where is simple interest used?", "Short-term loans, some bonds and savings over less than a year."],
      ["How do I handle months or days?", "Divide by 12 or by 365 to convert to years."],
      ["Why is the graph a straight line?", "The same interest Pr is added every year: linear growth with slope Pr."],
      ["What is the difference between I and A?", "I is the interest only; A = P + I is the total."],
    ],
    summary: [
      "I = Prt; A = P(1 + rt).",
      "r and t in matching units (per year, years).",
      "Amounts form an arithmetic sequence.",
      "Simple interest = linear growth.",
    ],
    next: "8.2 introduces compound interest, where interest earns interest.",
  }),
];
