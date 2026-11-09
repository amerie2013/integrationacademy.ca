// MCF3M 8.5 — Annuities: Future Value. Ordinary simple annuities: regular payments at the end of each period;
// FV as a sum of compound amounts; FV = R[(1 + i)ⁿ − 1]/i; interest earned; regular payment needed for a goal;
// the effect of starting early.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, r2, payments } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.5 Annuities: Future Value";
const fv = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;

export const blocks = () => [
  intro({
    icon: "💰",
    title: "Annuities: Future Value",
    overview: S`An <b>annuity</b> is a series of equal payments made at equal time intervals: saving \(150\) dollars every month, or depositing \(1000\) dollars every year. In an <b>ordinary simple annuity</b>, payments are made at the <b>end</b> of each period and the compounding period matches the payment period. Each payment earns compound interest for a different length of time; adding all of them gives the <b>future value</b> \(FV=R\cdot\frac{(1+i)^n-1}{i}\).`,
    goals: [
      "describe an ordinary simple annuity with a timeline;",
      "find the future value by adding compound amounts, then by the formula;",
      "calculate total deposits and interest earned;",
      "find the regular payment needed to reach a savings goal;",
      "explain why starting early matters.",
    ],
    curriculum: "D2.1 (gather and interpret information about annuities), D2.2 (determine the future value of an ordinary simple annuity), D2.4 (solve problems involving the future value of annuities), D2.5 (effect of changing the conditions)",
    prior: [
      [S`Evaluate \(1000(1.05)^3\).`, S`\(1157.63\).`],
      [S`Find \(i\) and \(n\): monthly payments for \(10\) years at \(4.2\%\) compounded monthly.`, S`\(0.0035\); \(120\).`],
      [S`Add \(1+1.05+1.05^2+1.05^3\).`, S`\(\approx4.310\).`],
    ],
    words: [
      ["Annuity", "equal payments at equal intervals", "150 dollars a month"],
      ["Ordinary annuity", "payments at the END of each period", "deposit on the last day"],
      ["Simple annuity", "payment period = compounding period", "monthly and monthly"],
      ["Regular payment R", "the size of each payment", "R = 150"],
      ["Future value FV", "total value of all payments plus interest at the end", "FV = R[(1 + i)ⁿ − 1]/i"],
    ],
  }),

  section("📌 Adding up the payments", S`
  ${TL({ n: 4, unit: "years", title: "1000 dollars at the end of each year, 5% compounded annually", flows: [...payments(4, "1000", []).map((f) => ({ ...f, up: false })), { at: 4, label: "FV = ?" }] })}
  ${table(["Payment at end of year", "Years earning interest", "Value at year 4"], [["1", "3", "\\(1000(1.05)^3\\approx1157.63\\)"], ["2", "2", "\\(1000(1.05)^2=1102.50\\)"], ["3", "1", "\\(1000(1.05)=1050\\)"], ["4", "0", "\\(1000\\)"], ["total", "", "\\(\\approx4310.13\\)"]])}
  ${keyIdea(S`The last payment earns nothing; the first earns for \(n-1\) periods. Adding them all gives \(FV=R\cdot\frac{(1+i)^n-1}{i}\) with \(i=\frac rm\) and \(n=mt\).`)}`),

  widget("annuityFV", { init: [1200, 4, 15] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "In an ordinary annuity the LAST payment earns no interest.",
    "Use the rate per payment period i and the number of payments n.",
    "Total deposits = n × R; interest = FV − nR.",
    "Do the whole formula in one calculator line, with brackets around (1 + i)ⁿ − 1.",
    "FV of an annuity is not P(1 + i)ⁿ: there is no single starting amount.",
  ])}`),

  examples([
    ["Add the payments", S`\(1000\) dollars is deposited at the end of each year for \(4\) years at \(5\%\) compounded annually. Find the future value by adding, then check with the formula.`,
      [S`<b>Each payment.</b> \(1157.63+1102.50+1050+1000\).`,
        S`<b>Sum.</b> \(\approx4310.13\) dollars.`,
        S`<b>Formula.</b> \(FV=1000\cdot\frac{1.05^4-1}{0.05}\approx1000(4.310125)\approx4310.13\) ✓`,
        S`<b>Interest.</b> \(4310.13-4000=310.13\) dollars.`],
      S`FV ≈ 4310.13 dollars`,
      TL({ n: 4, unit: "years", flows: [...payments(4, "1000").map((f) => ({ ...f, up: false })), { at: 4, label: "4310.13" }] })],

    ["Monthly savings", S`Mia saves \(150\) dollars at the end of every month for \(10\) years in an account paying \(4.2\%\) compounded monthly. Find the future value.`,
      [S`<b>Per period.</b> \(i=0.0035\); \(n=120\).`,
        S`<b>Formula.</b> \(FV=150\cdot\frac{1.0035^{120}-1}{0.0035}\).`,
        S`<b>Evaluate.</b> \(FV\approx22321.97\) dollars.`,
        S`<b>Sense check.</b> More than the \(18\,000\) deposited ✓`],
      S`FV ≈ 22 321.97 dollars`,
      TL({ n: 120, unit: "months", flows: [...payments(120, "150").map((f) => ({ ...f, up: false })), { at: 120, label: "22 321.97" }] })],

    ["Interest earned", S`For Mia's plan, how much did she deposit and how much interest did she earn?`,
      [S`<b>Deposits.</b> \(120\times150=18000\) dollars.`,
        S`<b>Interest.</b> \(22321.97-18000=4321.97\) dollars.`,
        S`<b>Share.</b> About \(19\%\) of the final amount is interest.`,
        S`<b>Graph.</b> The balance curve bends upward above the straight line of deposits ✓`],
      S`deposits 18 000 dollars; interest ≈ 4321.97 dollars`,
      FG([{ f: (t) => fv(150, 0.0035, 12 * t), color: "violet" }, { f: (t) => 1800 * t, color: "green" }], { view: { xmin: 0, xmax: 10.5, ymin: 0, ymax: 24000 }, step: { x: 1, y: 2000 }, points: [P(10, 22321.97, "(10, 22 321.97)"), P(10, 18000, "deposits 18 000", "green")] })],

    ["Payment for a goal", S`How much must be deposited at the end of each month at \(4.8\%\) compounded monthly to have \(20\,000\) dollars in \(5\) years?`,
      [S`<b>Rearrange.</b> \(R=\frac{FV\cdot i}{(1+i)^n-1}\).`,
        S`<b>Values.</b> \(i=0.004\), \(n=60\).`,
        S`<b>Evaluate.</b> \(R=\frac{20000(0.004)}{1.004^{60}-1}\approx295.59\) dollars per month.`,
        S`<b>Check.</b> \(295.59\cdot\frac{1.004^{60}-1}{0.004}\approx20000\) ✓`],
      S`R ≈ 295.59 dollars per month`,
      TL({ n: 60, unit: "months", flows: [...payments(60, "R").map((f) => ({ ...f, up: false })), { at: 60, label: "20 000" }] })],

    ["Start early", S`Compare \(100\) dollars a month for \(40\) years with \(200\) dollars a month for \(20\) years, both at \(6\%\) compounded monthly.`,
      [S`<b>Same total deposits.</b> \(480\times100=240\times200=48000\) dollars.`,
        S`<b>40 years.</b> \(100\cdot\frac{1.005^{480}-1}{0.005}\approx199149.07\).`,
        S`<b>20 years.</b> \(200\cdot\frac{1.005^{240}-1}{0.005}\approx92408.18\).`,
        S`<b>Lesson.</b> Same money in, but more than twice as much out: time does the work.`],
      S`≈ 199 149.07 vs ≈ 92 408.18 dollars`,
      FG([{ f: (t) => fv(100, 0.005, 12 * t), color: "violet" }, { f: (t) => (t > 20 ? fv(200, 0.005, 12 * (t - 20)) : 0), color: "green" }], { view: { xmin: 0, xmax: 42, ymin: 0, ymax: 210000 }, step: { x: 5, y: 20000 }, points: [P(40, 199149.07, "100/mo, 40 yr"), P(40, 92408.18, "200/mo, 20 yr", "green")] })],
  ]),

  practice([
    q("fv1", S`Find the future value of \(500\) dollars deposited at the end of each year for \(3\) years at \(4\%\) compounded annually.`, num(1560.80, 0.011), "500(1.04³ − 1)/0.04.", [S`\(1560.80\).`], S`\(1560.80\)`),
    q("n", S`Monthly payments for \(5\) years: how many payments?`, num(60), "12 × 5.", [S`\(60\).`], S`\(60\)`),
    q("dep", S`Total deposited by \(200\) dollars a month for \(2\) years?`, num(4800), "24 × 200.", [S`\(4800\).`], S`\(4800\)`),
    q("fv2", S`Find the future value of \(100\) dollars at the end of each quarter for \(2\) years at \(8\%\) compounded quarterly.`, num(858.30, 0.011), "i = 0.02, n = 8.", [S`\(\approx858.30\).`], S`\(858.30\)`),
    q("which", S`In an ordinary annuity, payments are made …`, choice(["at the end of each period", "at the start of each period", "only once", "at random times"], 0), "Definition.", [S`At the end.`], S`at the end of each period`),
  ]),

  ...hard([
    ["Monthly saving for a car", S`Raj wants \(20\,000\) dollars in \(5\) years. If he saves \(250\) dollars a month at \(3.6\%\) compounded monthly, will he reach the goal?`,
      [S`<b>Per period.</b> \(i=0.003\), \(n=60\).`,
        S`<b>FV.</b> \(250\cdot\frac{1.003^{60}-1}{0.003}\approx16407.90\).`,
        S`<b>Decision.</b> No — he is about \(3592\) dollars short; he needs about \(305\) dollars a month.`],
      S`No: ≈ 16 407.90 dollars`,
      FG([{ f: (t) => fv(250, 0.003, 12 * t), color: "violet" }], { view: { xmin: 0, xmax: 6, ymin: 0, ymax: 22000 }, step: { x: 1, y: 2000 }, lines: [{ m: 0, b: 20000, color: "green", dash: true, label: "goal" }], points: [P(5, 16407.9, "(5, 16 407.90)")] })],
    ["Early saver vs late saver", S`Ana deposits \(2000\) dollars at the end of each year from age \(25\) to \(35\) (\(10\) deposits), then stops. Ben deposits \(2000\) a year from \(35\) to \(65\) (\(30\) deposits). Both earn \(7\%\) compounded annually. Who has more at \(65\)?`,
      [S`<b>Ana at 35.</b> \(2000\cdot\frac{1.07^{10}-1}{0.07}\approx27632.90\).`,
        S`<b>Ana at 65.</b> Left \(30\) years: \(27632.90(1.07)^{30}\approx210348.65\).`,
        S`<b>Ben at 65.</b> \(2000\cdot\frac{1.07^{30}-1}{0.07}\approx188921.57\).`,
        S`<b>Conclusion.</b> Ana deposited \(20\,000\), Ben \(60\,000\) — yet Ana has more.`],
      S`Ana ≈ 210 348.65 vs Ben ≈ 188 921.57 dollars`],
  ], [
    q("hard", S`Find the future value of \(75\) dollars at the end of each month for \(3\) years at \(3\%\) compounded monthly.`, num(2821.54, 0.011), "i = 0.0025, n = 36.", [S`\(\approx2821.54\).`], S`\(2821.54\)`),
    q("hard", S`Find the future value of \(1200\) dollars at the end of each quarter for \(5\) years at \(6\%\) compounded quarterly.`, num(27748.40, 0.011), "i = 0.015, n = 20.", [S`\(\approx27748.40\).`], S`\(27748.40\)`),
    q("hard", S`\(300\) dollars a month for \(10\) years at \(4\%\) compounded monthly. How much interest is earned?`, num(8174.94, 0.011), "FV − 36 000.", [S`\(\approx8174.94\).`], S`\(8174.94\)`),
    q("hard", S`What quarterly deposit at \(4\%\) compounded quarterly grows to \(50\,000\) dollars in \(10\) years?`, num(1022.78, 0.011), "R = FV·i/((1+i)ⁿ − 1).", [S`\(\approx1022.78\).`], S`\(1022.78\)`),
    q("hard", S`How many end-of-year deposits of \(1000\) dollars at \(5\%\) compounded annually are needed to first reach \(10\,000\) dollars?`, num(9), "FV(8) ≈ 9549.11; FV(9) ≈ 11 026.56.", [S`\(9\).`], S`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["What is an ordinary simple annuity?", "Equal payments at the end of each period, with compounding matching the payment period."],
      ["What is the future-value formula?", "FV = R[(1 + i)ⁿ − 1]/i."],
      ["How do I find the interest earned?", "FV − nR."],
      ["How do I find the payment for a goal?", "R = FV·i ÷ [(1 + i)ⁿ − 1]."],
      ["Why start saving early?", "Early payments compound for longer; time multiplies them."],
    ],
    summary: [
      "Annuity: equal payments, equal intervals.",
      "FV = R[(1 + i)ⁿ − 1]/i.",
      "Interest = FV − nR.",
      "R = FV·i/[(1 + i)ⁿ − 1].",
    ],
    next: "8.6 finds the present value of an annuity: the loan you can afford.",
  }),
];
