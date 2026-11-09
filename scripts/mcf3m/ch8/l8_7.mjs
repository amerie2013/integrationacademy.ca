// MCF3M 8.7 — Savings Plans and Loans: loan payments R = PV·i/[1 − (1 + i)⁻ⁿ]; the first rows of an amortization
// table; comparing loan terms; savings plans that combine a lump sum with regular deposits; paying extra.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, payments } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.7 Savings Plans and Loans";
const pmt = (PV, i, n) => (PV * i) / (1 - (1 + i) ** -n);
const fv = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;
const bal = (PV, i, R, k) => PV * (1 + i) ** k - fv(R, i, k);

export const blocks = () => [
  intro({
    icon: "🚗",
    title: "Savings Plans and Loans",
    overview: S`Real money decisions combine everything in this chapter. A <b>loan</b> is an annuity whose present value is the amount borrowed, so the payment is \(R=\frac{PV\cdot i}{1-(1+i)^{-n}}\). An <b>amortization table</b> shows how each payment is split between interest and principal. A <b>savings plan</b> often mixes a lump sum (which grows as \(P(1+i)^n\)) with regular deposits (which grow as an annuity). Comparing options — shorter or longer loans, paying extra, saving more — shows the true cost of borrowing.`,
    goals: [
      "find the regular payment on a loan;",
      "build the first rows of an amortization table;",
      "compare loan terms by payment and total interest;",
      "plan savings that combine a lump sum with regular deposits;",
      "explain the effect of paying extra or saving longer.",
    ],
    curriculum: "D2.4 (solve problems involving annuities, including loans and savings plans), D2.5 (determine the effects of changing the conditions: payment, rate, term)",
    prior: [
      [S`Find the PV of \(350\) dollars a month for \(5\) years at \(6.6\%\) compounded monthly.`, S`\(\approx17845.29\).`],
      [S`Find one month's interest on \(18\,000\) dollars at \(5.4\%\) compounded monthly.`, S`\(18000(0.0045)=81\).`],
      [S`Find \(2000(1.0025)^{60}\).`, S`\(\approx2323.23\).`],
    ],
    words: [
      ["Loan payment R", "R = PV·i / [1 − (1 + i)⁻ⁿ]", "417.80 dollars a month"],
      ["Amortization", "paying off a loan with regular payments", "48 monthly payments"],
      ["Interest portion", "balance × i for that period", "81 dollars"],
      ["Principal portion", "payment − interest portion", "336.80 dollars"],
      ["Term", "the length of the loan or plan", "4 years"],
    ],
  }),

  section("📌 Where a loan payment goes", S`
  ${table(["Month", "Payment", "Interest (balance × 0.0045)", "Principal", "Balance"], [["0", "", "", "", "18 000.00"], ["1", "417.80", "81.00", "336.80", "17 663.20"], ["2", "417.80", "79.48", "338.31", "17 324.89"], ["3", "417.80", "77.96", "339.83", "16 985.06"]])}
  ${FG([{ f: (t) => bal(18000, 0.0045, pmt(18000, 0.0045, 48), t), color: "violet" }], { view: { xmin: 0, xmax: 50, ymin: 0, ymax: 19000 }, step: { x: 6, y: 2000 }, points: [P(0, 18000, "(0, 18 000)"), P(48, 0, "(48, 0)")], xlabel: "month", ylabel: "balance", cap: "loan balance: falls slowly at first, faster at the end" })}
  ${keyIdea(S`Early payments are mostly interest; later payments are mostly principal. Total interest \(=nR-PV\). A longer term lowers the payment but raises the total interest.`)}`),

  widget("amortLab", { init: [18000, 5.4, 4] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The payment formula uses PV (the loan), not FV.",
    "Interest each month is the CURRENT balance × i, not the original loan × i.",
    "A lower payment usually means more total interest.",
    "In a savings plan, grow the lump sum and the deposits separately, then add.",
    "Round payments to the cent at the end; the last payment may differ slightly.",
  ])}`),

  examples([
    ["A car-loan payment", S`Ella borrows \(18\,000\) dollars at \(5.4\%\) compounded monthly, to be repaid in \(4\) years with monthly payments. Find the payment and the total interest.`,
      [S`<b>Per period.</b> \(i=0.0045\), \(n=48\).`,
        S`<b>Payment.</b> \(R=\frac{18000(0.0045)}{1-1.0045^{-48}}\approx417.80\) dollars.`,
        S`<b>Total paid.</b> \(48\times417.80\approx20054.24\) dollars.`,
        S`<b>Interest.</b> \(\approx2054.24\) dollars.`],
      S`R ≈ 417.80 dollars; interest ≈ 2054.24 dollars`,
      TL({ n: 48, unit: "months", flows: [{ at: 0, label: "18 000 borrowed" }, ...payments(48, "417.80").map((f) => ({ ...f, up: false }))] })],

    ["Amortization table", S`Build the first three rows of Ella's amortization table.`,
      [S`<b>Month 1.</b> Interest \(18000(0.0045)=81.00\); principal \(417.80-81.00=336.80\); balance \(17663.20\).`,
        S`<b>Month 2.</b> Interest \(17663.20(0.0045)\approx79.48\); principal \(338.31\); balance \(17324.89\).`,
        S`<b>Month 3.</b> Interest \(\approx77.96\); principal \(339.83\); balance \(16985.06\).`,
        S`<b>Pattern.</b> Interest shrinks and principal grows each month ✓`],
      S`balances 17 663.20, 17 324.89, 16 985.06 dollars`,
      FG([], { view: { xmin: 0, xmax: 4, ymin: 0, ymax: 450 }, step: { x: 1, y: 50 }, xlabel: "month", ylabel: "dollars", segs: [{ pts: [[1, 81], [2, 79.48], [3, 77.96]], color: "red" }, { pts: [[1, 336.8], [2, 338.31], [3, 339.83]], color: "green" }], points: [P(1, 81, "interest 81.00", "red"), P(1, 336.8, "principal 336.80", "green")] })],

    ["Comparing terms", S`Compare Ella's loan over \(3\) years and over \(5\) years at the same rate.`,
      [S`<b>3 years.</b> \(R=\frac{18000(0.0045)}{1-1.0045^{-36}}\approx542.71\); interest \(\approx1537.73\).`,
        S`<b>5 years.</b> \(R\approx342.99\); interest \(\approx2579.44\).`,
        S`<b>Trade-off.</b> The longer loan saves about \(200\) dollars a month but costs about \(1042\) more in interest.`,
        S`<b>Choice.</b> Pick the shortest term whose payment fits the budget.`],
      S`3 yr: 542.71/month, 1537.73 interest; 5 yr: 342.99/month, 2579.44 interest`,
      FG([{ f: (t) => bal(18000, 0.0045, pmt(18000, 0.0045, 36), t), color: "green" }, { f: (t) => bal(18000, 0.0045, pmt(18000, 0.0045, 60), t), color: "violet" }], { view: { xmin: 0, xmax: 62, ymin: 0, ymax: 19000 }, step: { x: 6, y: 2000 }, xlabel: "month", ylabel: "balance", cap: "green: 3-year loan · violet: 5-year loan" })],

    ["A combined savings plan", S`Sam deposits \(2000\) dollars now and \(100\) dollars at the end of each month for \(5\) years at \(3\%\) compounded monthly. Find the value at the end.`,
      [S`<b>Lump sum.</b> \(2000(1.0025)^{60}\approx2323.23\).`,
        S`<b>Deposits.</b> \(100\cdot\frac{1.0025^{60}-1}{0.0025}\approx6464.67\).`,
        S`<b>Total.</b> \(\approx8787.90\) dollars.`,
        S`<b>Check.</b> Money put in: \(2000+6000=8000\); interest \(\approx787.90\) ✓`],
      S`≈ 8787.90 dollars`,
      TL({ n: 60, unit: "months", flows: [{ at: 0, label: "2000", up: false }, ...payments(60, "100").map((f) => ({ ...f, up: false })), { at: 60, label: "8787.90" }] })],

    ["Saving for a down payment", S`Leo has \(5000\) dollars and wants \(30\,000\) dollars in \(6\) years at \(4.2\%\) compounded monthly. What monthly deposit does he need?`,
      [S`<b>Lump sum grows to.</b> \(5000(1.0035)^{72}\approx6430.15\).`,
        S`<b>Still needed.</b> \(30000-6430.15=23569.85\) from deposits.`,
        S`<b>Payment.</b> \(R=\frac{23569.85(0.0035)}{1.0035^{72}-1}\approx288.41\) dollars a month.`,
        S`<b>Check.</b> \(6430.15+288.41\cdot\frac{1.0035^{72}-1}{0.0035}\approx30000\) ✓`],
      S`≈ 288.41 dollars per month`,
      FG([{ f: (t) => 5000 * 1.0035 ** (12 * t) + fv(288.41, 0.0035, 12 * t), color: "violet" }, { f: (t) => 5000 * 1.0035 ** (12 * t), color: "green" }], { view: { xmin: 0, xmax: 6.5, ymin: 0, ymax: 32000 }, step: { x: 1, y: 4000 }, lines: [{ m: 0, b: 30000, color: "red", dash: true, label: "goal" }], cap: "green: lump sum alone · violet: lump sum + deposits" })],
  ]),

  practice([
    q("pmt", S`Find the monthly payment on a \(5000\) dollar loan repaid in \(12\) months at \(6\%\) compounded monthly.`, num(430.33, 0.011), "R = PV·i/[1 − (1 + i)⁻ⁿ].", [S`\(\approx430.33\).`], S`\(430.33\)`),
    q("int1", S`A \(10\,000\) dollar loan is at \(6\%\) compounded monthly. Find the interest in the first month.`, num(50), "10 000 × 0.005.", [S`\(50\).`], S`\(50\)`),
    q("tot", S`A \(10\,000\) dollar loan is repaid with \(24\) payments of \(450\) dollars. Find the total interest.`, num(800), "24 × 450 − 10 000.", [S`\(800\).`], S`\(800\)`),
    q("plan", S`\(1000\) dollars is deposited now and \(500\) dollars at the end of each year for \(2\) years at \(4\%\) compounded annually. Find the value after \(2\) years.`, num(2101.6, 0.011), "1000(1.04)² + 500(1.04) + 500.", [S`\(1081.60+520+500=2101.60\).`], S`\(2101.60\)`),
    q("which", S`For the same loan and rate, a longer term gives …`, choice(["a smaller payment but more total interest", "a larger payment and more interest", "a smaller payment and less interest", "the same interest"], 0), "Trade-off.", [S`Smaller payment, more interest.`], S`a smaller payment but more total interest`),
  ]),

  ...hard([
    ["A mortgage", S`A family borrows \(250\,000\) dollars at \(4.8\%\) compounded monthly for \(25\) years. Find the monthly payment and the total interest.`,
      [S`<b>Per period.</b> \(i=0.004\), \(n=300\).`,
        S`<b>Payment.</b> \(R=\frac{250000(0.004)}{1-1.004^{-300}}\approx1432.49\) dollars.`,
        S`<b>Total paid.</b> \(300\times1432.49\approx429747.72\).`,
        S`<b>Interest.</b> \(\approx179747.72\) dollars — over \(70\%\) of the amount borrowed.`],
      S`R ≈ 1432.49 dollars; interest ≈ 179 747.72 dollars`,
      FG([{ f: (t) => bal(250000, 0.004, pmt(250000, 0.004, 300), 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 26, ymin: 0, ymax: 260000 }, step: { x: 5, y: 25000 }, xlabel: "years", ylabel: "balance" })],
    ["Paying extra", S`Ella (\(18\,000\) dollars at \(5.4\%\) compounded monthly) pays \(500\) dollars a month instead of \(417.80\). How many months until the loan is paid off?`,
      [S`<b>Balance each month.</b> New balance \(=\) old balance \(\times1.0045-500\).`,
        S`<b>Trial.</b> Repeating this, the balance first drops to \(0\) or below at month \(40\) (the last payment is smaller than \(500\)).`,
        S`<b>Saving.</b> About \(8\) months sooner, and less interest because the balance falls faster.`],
      S`40 months`],
  ], [
    q("hard", S`Find the monthly payment on a \(12\,000\) dollar loan at \(6.6\%\) compounded monthly for \(5\) years.`, num(235.36, 0.011), "i = 0.0055, n = 60.", [S`\(\approx235.36\).`], S`\(235.36\)`),
    q("hard", S`Find the monthly payment on a \(30\,000\) dollar loan at \(3.6\%\) compounded monthly for \(3\) years.`, num(880.39, 0.011), "i = 0.003, n = 36.", [S`\(\approx880.39\).`], S`\(880.39\)`),
    q("hard", S`Find the monthly payment on an \(8000\) dollar loan at \(12\%\) compounded monthly for \(2\) years.`, num(376.59, 0.011), "i = 0.01, n = 24.", [S`\(\approx376.59\).`], S`\(376.59\)`),
    q("hard", S`\(1000\) dollars now plus \(50\) dollars a month for \(20\) years at \(4.8\%\) compounded monthly. Find the final value.`, num(22690.45, 0.011), "Lump sum + annuity.", [S`\(\approx22690.45\).`], S`\(22690.45\)`),
    q("hard", S`Find the monthly payment on a \(200\,000\) dollar loan at \(4.2\%\) compounded monthly for \(20\) years.`, num(1233.14, 0.011), "i = 0.0035, n = 240.", [S`\(\approx1233.14\).`], S`\(1233.14\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find a loan payment?", "R = PV·i ÷ [1 − (1 + i)⁻ⁿ]."],
      ["How is each payment split?", "Interest = current balance × i; principal = payment − interest."],
      ["How do I compare loan terms?", "Compare monthly payment and total interest nR − PV."],
      ["How do I handle a lump sum plus deposits?", "Grow each separately to the same date and add."],
      ["Why pay extra?", "The balance falls faster, so less interest is charged and the loan ends sooner."],
    ],
    summary: [
      "Payment: R = PV·i/[1 − (1 + i)⁻ⁿ].",
      "Interest portion = balance × i.",
      "Longer term: lower payment, more interest.",
      "Savings plan = lump-sum FV + annuity FV.",
    ],
    next: "8.8 reviews the whole chapter.",
  }),
];
