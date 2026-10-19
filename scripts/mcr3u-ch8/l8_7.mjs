// MCR3U 8.7 — Chapter 8 Review: simple and compound interest, present value, annuities (FV and PV), loans
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fv, pv, annFV, annPV, payPV, payFV, periodsTo, m } from "./fin.mjs";

export const TITLE = "8.7 Chapter 8 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000807";
const S = String.raw;
const save = annFV(250, 0.004, 120), loanR = payPV(15000, 0.006, 48);
const goal = payFV(40000, 0.045 / 4, 72), need = pv(40000, 0.045 / 4, 72);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 8 Review",
    overview: S`This review connects the chapter: simple interest (linear growth), compound interest and present value (exponential growth), and annuities — regular payments whose future and present values are geometric series. The examples combine skills; the practice and hard-level problems are at chapter-test level.`,
    goals: [
      "choose between simple and compound interest formulas;",
      "find future value, present value, rate and number of periods;",
      "identify whether a situation is a single amount or an annuity;",
      "use FV and PV annuity formulas and find payments;",
      "compare financial options.",
    ],
    curriculum: "C2 (solving problems involving financial applications)",
    prior: [
      ["Simple or compound: interest is added to the principal each period?", "Compound."],
      ["Single amount or annuity: 200 dollars a month for 3 years?", "Annuity."],
      ["What is i for 9%/a compounded monthly?", "0.0075."],
    ],
    words: [
      ["8.1", "simple interest I = Prt", ""],
      ["8.2–8.3", "A = P(1 + i)ⁿ; PV = A(1 + i)⁻ⁿ", ""],
      ["8.4–8.5", "annuity FV and PV", ""],
      ["8.6", "amortization and changing conditions", ""],
    ],
  }),

  section("📌 Which formula?", S`
  ${table(["Situation", "Formula"], [["one deposit, simple interest", "\\(A=P(1+rt)\\)"], ["one deposit, compound, find the future", "\\(A=P(1+i)^n\\)"], ["one amount, compound, find today's value", "\\(PV=A(1+i)^{-n}\\)"], ["regular deposits, find the future", "\\(FV=\\frac{R[(1+i)^n-1]}{i}\\)"], ["regular payments, find today's value (loans)", "\\(PV=\\frac{R[1-(1+i)^{-n}]}{i}\\)"]])}
  ${keyIdea("Ask two questions: one amount or regular payments? Looking forward (future value) or back (present value)? The answers pick the formula.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the annuity examples and problems below.</p>`),

  widget("annuityFV", { init: [2000, 6, 15] }),

  examples([
    ["Simple vs compound", "Compare 4000 dollars invested for 8 years at 5%/a simple interest and at 5%/a compounded annually.",
      [`Simple: 4000(1 + 0.05 × 8) = 5600.`, `Compound: 4000(1.05)⁸ ≈ ${m(fv(4000, 0.05, 8))}.`],
      `compound earns ${m(fv(4000, 0.05, 8) - 5600)} dollars more`],
    ["Present value and time", "How much must be invested now at 3.6%/a compounded monthly to have 10 000 dollars in 5 years, and how long would it take that amount to double?",
      [S`\(PV=10000(1.003)^{-60}\approx${m(pv(10000, 0.003, 60))}\).`, `Doubling: 1.003ⁿ ≥ 2 ⇒ n = ${periodsTo(2, 0.003)} months.`],
      `${m(pv(10000, 0.003, 60))} dollars; about ${(periodsTo(2, 0.003) / 12).toFixed(1)} years to double`],
    ["Savings plan", "250 dollars is saved at the end of each month for 10 years at 4.8%/a compounded monthly. Find the future value and the interest earned.",
      [S`\(FV=\frac{250(1.004^{120}-1)}{0.004}\).`],
      `${m(save)} dollars; interest ${m(save - 30000)} dollars`],
    ["A loan", "A 15 000-dollar loan at 7.2%/a compounded monthly is repaid over 4 years. Find the payment and total interest.",
      [S`\(R=\frac{15000(0.006)}{1-1.006^{-48}}\).`],
      `${m(loanR)} dollars a month; interest ${m(loanR * 48 - 15000)} dollars`],
    ["Two ways to reach a goal", "To have 40 000 dollars in 18 years at 4.5%/a compounded quarterly, compare a single deposit now with quarterly deposits.",
      [`Single deposit: 40 000(1.01125)⁻⁷² ≈ ${m(need)}.`, `Quarterly: R = 40 000(0.01125)/(1.01125⁷² − 1) ≈ ${m(goal)}.`],
      `${m(need)} now, or ${m(goal)} each quarter (${m(goal * 72)} in total)`,
      plane({ view: { xmin: 0, xmax: 19, ymin: 0, ymax: 42000 }, curves: [{ f: (t) => need * 1.01125 ** (4 * t), a: 0, b: 18, color: "violet" }, { f: (t) => annFV(goal, 0.01125, Math.floor(4 * t)), a: 0, b: 18, color: "amber" }], step: { x: 2, y: 5000 }, xlabel: "years", ylabel: "value" })],
  ]),

  practice([
    q("simple", "Find the simple interest on 2400 dollars at 3.5%/a for 6 months (dollars).", num(42),
      "t = 0.5.", [S`\(2400(0.035)(0.5)\).`], "42"),
    q("compound", "Find the future value of 6000 dollars at 4%/a compounded semi-annually for 9 years (dollars).", num(+m(fv(6000, 0.02, 18)), 0.02),
      "i = 0.02, n = 18.", [S`\(6000(1.02)^{18}\).`], m(fv(6000, 0.02, 18))),
    q("PV", "Find the present value of 9000 dollars due in 7 years at 5%/a compounded annually (dollars).", num(+m(pv(9000, 0.05, 7)), 0.02),
      "9000(1.05)⁻⁷.", [S`\(\div1.05^7\).`], m(pv(9000, 0.05, 7))),
    q("annuity FV", "Find the future value of 75 dollars deposited at the end of each month for 6 years at 6%/a compounded monthly (dollars).", num(+m(annFV(75, 0.005, 72)), 0.02),
      "i = 0.005, n = 72.", [S`\(\frac{75(1.005^{72}-1)}{0.005}\).`], m(annFV(75, 0.005, 72))),
    q("which", "You want to know how much to borrow if you can afford 400 dollars a month for 5 years. Which formula?", choice(["present value of an annuity", "future value of an annuity", "compound interest future value", "simple interest"], 0),
      "Regular payments, value today.", ["Loan = PV of payments."], "PV of an annuity"),
  ]),

  ...hard([
    ["Save first, then withdraw", "Mia deposits 300 dollars at the end of each month for 20 years at 6%/a compounded monthly. Then she withdraws equal monthly amounts for 15 years at the same rate until the money runs out. Find the withdrawal.",
      [`Saved: FV = 300(1.005²⁴⁰ − 1)/0.005 ≈ ${m(annFV(300, 0.005, 240))}.`, `Withdrawal: R = FV(0.005)/(1 − 1.005⁻¹⁸⁰).`],
      `${m(payPV(annFV(300, 0.005, 240), 0.005, 180))} dollars a month`],
    ["Buy or lease?", "A car costs 28 000 dollars. Option A: borrow it all at 5.4%/a compounded monthly for 5 years. Option B: lease at 420 dollars a month for 5 years, then return the car. Find the payment for A and the present value of B's payments at the same rate.",
      [`A: R ≈ ${m(payPV(28000, 0.0045, 60))}.`, `B: PV of 420 a month ≈ ${m(annPV(420, 0.0045, 60))}.`],
      "A costs more per month but you own the car"],
  ], [
    q("hard", "How many years (whole) does it take money to triple at 6%/a compounded annually?", num(periodsTo(3, 0.06)),
      "1.06ⁿ ≥ 3.", ["Guess and check."], String(periodsTo(3, 0.06))),
    q("hard", "What monthly deposit at 3%/a compounded monthly grows to 15 000 dollars in 6 years (dollars)?", num(+m(payFV(15000, 0.0025, 72)), 0.02),
      "i = 0.0025, n = 72.", [S`\(\frac{15000(0.0025)}{1.0025^{72}-1}\).`], m(payFV(15000, 0.0025, 72))),
    q("hard", "How much can be borrowed at 8.4%/a compounded monthly if the payments are 350 dollars a month for 4 years (dollars)?", num(+m(annPV(350, 0.007, 48)), 0.02),
      "PV of the payments.", [S`\(\frac{350(1-1.007^{-48})}{0.007}\).`], m(annPV(350, 0.007, 48))),
  ]),

  wrapUp({
    qas: [
      ["What is the most common error?", "Mixing up i and the annual rate, or n and the number of years."],
      ["How do I choose between the annuity formulas?", "Future value for savings goals; present value for loans and funding withdrawals."],
      ["How are these connected to sequences?", "Simple interest is arithmetic; compound interest is geometric; annuities are geometric series."],
      ["How do I compare options fairly?", "Bring everything to the same date, usually today, with present value."],
      ["How should I study?", "Redo each lesson's hard-level problems, then check with the explorers."],
    ],
    summary: [
      "Simple: linear; compound: exponential.",
      "One amount: A = P(1 + i)ⁿ.",
      "Regular payments: annuity FV or PV.",
      "Compare at the same date.",
    ],
    next: "This completes the course. Use the chapter reviews to prepare for the final exam.",
  }),
];
