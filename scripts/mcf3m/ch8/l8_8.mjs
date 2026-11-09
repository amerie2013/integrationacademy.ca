// MCF3M 8.8 — Chapter 8 Review: simple vs compound interest, future and present value, finding rate and time,
// annuity future and present value, loans and savings plans.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, payments } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.8 Chapter 8 Review";
const fv = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 8 Review",
    overview: S`Chapter 8 turned exponential growth into money tools. One lump sum: \(A=P(1+i)^n\) forward, \(PV=A(1+i)^{-n}\) back. Regular payments: \(FV=R\frac{(1+i)^n-1}{i}\) forward, \(PV=R\frac{1-(1+i)^{-n}}{i}\) back. With \(i=\frac rm\) and \(n=mt\), and a timeline drawn first, almost every problem becomes one of these four.`,
    goals: [
      "compare simple and compound interest;",
      "find future and present values of a lump sum;",
      "find an unknown rate or time;",
      "find future and present values of annuities;",
      "solve loan and savings problems.",
    ],
    curriculum: "D1.1–D1.5, D2.1–D2.5 (chapter 8 review)",
    prior: [
      [S`\(i\) and \(n\) for \(6\%\) quarterly over \(5\) years?`, S`\(0.015\); \(20\).`],
      [S`Simple interest on \(1000\) at \(5\%\) for \(3\) years?`, S`\(150\).`],
      [S`Which formula has \(1-(1+i)^{-n}\)?`, S`PV of an annuity.`],
    ],
    words: [
      ["Lump sum", "one amount", "A = P(1 + i)ⁿ"],
      ["Annuity", "equal regular payments", "FV / PV formulas"],
      ["Present value", "value today", "discount by (1 + i)⁻ⁿ"],
      ["Future value", "value at the end", "grow by (1 + i)ⁿ"],
      ["Amortization", "paying off a loan by instalments", "interest + principal"],
    ],
  }),

  section("📌 Choosing the formula", S`
  ${table(["", "Toward the future", "Back to today"], [["one lump sum", "\\(A=P(1+i)^n\\)", "\\(PV=A(1+i)^{-n}\\)"], ["regular payments", "\\(FV=R\\frac{(1+i)^n-1}{i}\\)", "\\(PV=R\\frac{1-(1+i)^{-n}}{i}\\)"], ["simple interest", "\\(A=P(1+rt)\\)", "\\(P=\\frac{A}{1+rt}\\)"]])}
  ${keyIdea(S`Draw a timeline. Ask: one payment or many? Toward the end or back to today? Then set \(i=\frac rm\), \(n=mt\).`)}`),

  widget("compoundLab", { init: [10000, 3.6, 12] }),

  examples([
    ["Simple vs compound", S`Compare \(4500\) dollars for \(6\) years at \(3.5\%\) simple interest and at \(3.5\%\) compounded annually.`,
      [S`<b>Simple.</b> \(4500(1+0.035\times6)=5445\) dollars.`,
        S`<b>Compound.</b> \(4500(1.035)^6\approx5531.65\) dollars.`,
        S`<b>Difference.</b> \(\approx86.65\) dollars more with compounding.`,
        S`<b>Graph.</b> Line vs upward curve ✓`],
      S`5445 vs ≈ 5531.65 dollars`,
      FG([{ f: (t) => 4500 * (1 + 0.035 * t), color: "green" }, { f: (t) => 4500 * 1.035 ** t, color: "violet" }], { view: { xmin: 0, xmax: 8, ymin: 4300, ymax: 6200 }, step: { x: 1, y: 200 }, points: [P(6, 5445, "5445", "green"), P(6, 5531.65, "5531.65")] })],

    ["Present value", S`What must be invested now at \(5\%\) compounded quarterly to have \(9000\) dollars in \(5\) years?`,
      [S`<b>Per period.</b> \(i=0.0125\), \(n=20\).`,
        S`<b>PV.</b> \(9000(1.0125)^{-20}\approx7020.08\) dollars.`,
        S`<b>Interest.</b> \(\approx1979.92\) dollars.`,
        S`<b>Check.</b> \(7020.08(1.0125)^{20}\approx9000\) ✓`],
      S`≈ 7020.08 dollars`,
      TL({ n: 20, unit: "quarters", flows: [{ at: 0, label: "7020.08", up: false }, { at: 20, label: "9000" }] })],

    ["Finding a rate", S`An investment grew from \(8000\) to \(12\,000\) dollars in \(4\) years, compounded semi-annually. Find the annual rate.`,
      [S`<b>Periods.</b> \(n=8\); \((1+i)^8=1.5\).`,
        S`<b>Root.</b> \(1+i=1.5^{\frac18}\approx1.051990\).`,
        S`<b>Annual.</b> \(r=2i\approx10.40\%\) compounded semi-annually.`,
        S`<b>Check.</b> \(8000(1.05199)^8\approx12000\) ✓`],
      S`≈ 10.40% compounded semi-annually`,
      TL({ n: 8, unit: "half-years", flows: [{ at: 0, label: "8000", up: false }, { at: 8, label: "12 000" }] })],

    ["Annuity future value", S`Zoe saves \(200\) dollars at the end of each month for \(8\) years at \(4.8\%\) compounded monthly. Find the future value and the interest.`,
      [S`<b>Per period.</b> \(i=0.004\), \(n=96\).`,
        S`<b>FV.</b> \(200\cdot\frac{1.004^{96}-1}{0.004}\approx23351.07\) dollars.`,
        S`<b>Deposits.</b> \(19200\).`,
        S`<b>Interest.</b> \(\approx4151.07\) dollars.`],
      S`≈ 23 351.07 dollars; interest ≈ 4151.07 dollars`,
      FG([{ f: (t) => fv(200, 0.004, 12 * t), color: "violet" }, { f: (t) => 2400 * t, color: "green" }], { view: { xmin: 0, xmax: 9, ymin: 0, ymax: 25000 }, step: { x: 1, y: 2500 }, points: [P(8, 23351.07, "(8, 23 351.07)")] })],

    ["A loan", S`A \(15\,000\) dollar loan at \(6\%\) compounded monthly is repaid monthly over \(3\) years. Find the payment and the total interest.`,
      [S`<b>Per period.</b> \(i=0.005\), \(n=36\).`,
        S`<b>Payment.</b> \(R=\frac{15000(0.005)}{1-1.005^{-36}}\approx456.33\) dollars.`,
        S`<b>Total paid.</b> \(36\times456.33\approx16427.88\).`,
        S`<b>Interest.</b> \(\approx1427.88\) dollars.`],
      S`R ≈ 456.33 dollars; interest ≈ 1427.88 dollars`,
      TL({ n: 36, unit: "months", flows: [{ at: 0, label: "15 000 borrowed" }, ...payments(36, "456.33").map((f) => ({ ...f, up: false }))] })],
  ]),

  practice([
    q("si", S`Find the simple interest on \(2400\) dollars at \(2.5\%\) for \(4\) years.`, num(240), "Prt.", [S`\(240\).`], S`\(240\)`),
    q("fv", S`Find the future value of \(6000\) dollars at \(5.4\%\) compounded monthly for \(3\) years.`, num(7052.60, 0.011), "6000(1.0045)³⁶.", [S`\(\approx7052.60\).`], S`\(7052.60\)`),
    q("pv", S`Find the present value of \(12\,000\) dollars due in \(2.5\) years at \(8\%\) compounded quarterly.`, num(9844.18, 0.011), "12 000(1.02)⁻¹⁰.", [S`\(\approx9844.18\).`], S`\(9844.18\)`),
    q("rate", S`\(2500\) dollars grew to \(3600\) dollars in \(4\) years, compounded annually. Find the rate (percent, two decimals).`, num(9.54, 0.011), "1.44^(1/4) − 1.", [S`\(\approx9.54\%\).`], S`\(9.54\)`),
    q("which", S`To find how much you can borrow if you can pay \(300\) dollars a month, use …`, choice(["the present value of an annuity", "the future value of an annuity", "simple interest", "A = P(1 + i)ⁿ"], 0), "Loan = PV of payments.", [S`PV of an annuity.`], S`the present value of an annuity`),
  ]),

  ...hard([
    ["Afford a car?", S`Nora can pay \(450\) dollars a month for \(5\) years at \(6\%\) compounded monthly. What loan can she afford, and how much interest will she pay?`,
      [S`<b>PV.</b> \(450\cdot\frac{1-1.005^{-60}}{0.005}\approx23276.50\) dollars.`,
        S`<b>Total paid.</b> \(60\times450=27000\).`,
        S`<b>Interest.</b> \(\approx3723.50\) dollars.`],
      S`≈ 23 276.50 dollars; interest ≈ 3723.50 dollars`,
      TL({ n: 60, unit: "months", flows: [{ at: 0, label: "PV = 23 276.50", up: false }, ...payments(60, "450")] })],
    ["Saving and spending", S`Omar saves \(300\) dollars a month for \(4\) years at \(4.5\%\) compounded monthly, then uses the money as a lump sum. Find the amount saved and the interest earned.`,
      [S`<b>FV.</b> \(300\cdot\frac{1.00375^{48}-1}{0.00375}\approx15745.15\).`,
        S`<b>Deposits.</b> \(14400\).`,
        S`<b>Interest.</b> \(\approx1345.15\) dollars.`],
      S`≈ 15 745.15 dollars; interest ≈ 1345.15 dollars`],
  ], [
    q("hard", S`How many whole years for \(5000\) dollars at \(4\%\) compounded annually to first reach \(7000\) dollars?`, num(9), "1.04⁸ ≈ 1.369; 1.04⁹ ≈ 1.423.", [S`\(9\).`], S`\(9\)`),
    q("hard", S`Find the effective annual rate (percent, two decimals) of \(4.8\%\) compounded monthly.`, num(4.91, 0.011), "1.004¹² − 1.", [S`\(\approx4.91\%\).`], S`\(4.91\)`),
    q("hard", S`Find the present value of \(800\) dollars at the end of each quarter for \(4\) years at \(6\%\) compounded quarterly.`, num(11305.01, 0.011), "i = 0.015, n = 16.", [S`\(\approx11305.01\).`], S`\(11305.01\)`),
    q("hard", S`What monthly deposit at \(3.6\%\) compounded monthly grows to \(10\,000\) dollars in \(3\) years?`, num(263.46, 0.011), "R = FV·i/[(1 + i)ⁿ − 1].", [S`\(\approx263.46\).`], S`\(263.46\)`),
    q("hard", S`A \(9000\) dollar loan at \(7.2\%\) compounded monthly is repaid over \(2\) years. Find the monthly payment.`, num(403.77, 0.011), "i = 0.006, n = 24.", [S`\(\approx403.77\).`], S`\(403.77\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose a formula?", "One payment or many? Toward the future or back to today?"],
      ["What are i and n?", "i = r/m and n = mt."],
      ["How do I find a rate?", "i = (A/P)^(1/n) − 1, then r = m·i."],
      ["How do I find a time?", "Try whole periods until the goal is reached."],
      ["How do I find a loan payment?", "R = PV·i ÷ [1 − (1 + i)⁻ⁿ]."],
    ],
    summary: [
      "A = P(1 + i)ⁿ; PV = A(1 + i)⁻ⁿ.",
      "FV = R[(1 + i)ⁿ − 1]/i; PV = R[1 − (1 + i)⁻ⁿ]/i.",
      "Draw a timeline first.",
      "Interest = what you pay or receive − what you put in.",
    ],
    next: "Congratulations — this completes MCF3M.",
  }),
];
