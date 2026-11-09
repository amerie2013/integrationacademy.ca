// MCF3M 8.3 — Present Value: PV = A(1 + i)⁻ⁿ; how much to invest now for a future goal; comparing payments made
// at different times by moving them to the same date; PV shrinks as the goal moves further away.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { FG, TL, P, r2 } from "./ffig.mjs";
const S = String.raw;

export const TITLE = "8.3 Present Value";
const pv = (A, r, m, t) => A * (1 + r / m) ** (-m * t);

export const blocks = () => [
  intro({
    icon: "⏪",
    title: "Present Value",
    overview: S`Future value answers "what will my money grow to?". <b>Present value</b> answers the reverse question: "how much must I invest <i>now</i> to have a certain amount later?". Since \(A=P(1+i)^n\), solving for \(P\) gives \(PV=\frac{A}{(1+i)^n}=A(1+i)^{-n}\). Present value is also the fair way to compare money paid at different times: move every amount to today and compare.`,
    goals: [
      "explain present value as the reverse of future value;",
      "calculate PV = A(1 + i)⁻ⁿ for any compounding frequency;",
      "find the interest that the investment will earn;",
      "compare payments at different times using present value;",
      "describe how present value changes with time and rate.",
    ],
    curriculum: "D1.3 (solve problems involving compound interest, including present value), D1.4 (determine the principal needed to reach a goal)",
    prior: [
      [S`Solve \(P(1.05)^2=1102.50\).`, S`\(P=1000\).`],
      [S`Evaluate \(1.04^{-2}\).`, S`\(\frac1{1.0816}\approx0.9246\).`],
      [S`Find \(i\) and \(n\): \(6\%\) compounded monthly, \(4\) years.`, S`\(0.005\); \(48\).`],
    ],
    words: [
      ["Present value PV", "the amount needed now to grow to A", "PV = A(1 + i)⁻ⁿ"],
      ["Future value A", "the amount at the end", "the goal"],
      ["Discounting", "moving money back in time by dividing by (1 + i)ⁿ", "PV of 12 000"],
      ["Maturity", "the date the investment ends", "in 6 years"],
      ["Equivalent values", "amounts at different times worth the same at a given rate", "10 000 now ≈ 12 000 later"],
    ],
  }),

  section("📌 Going back in time", S`
  ${TL({ n: 6, unit: "years", title: "How much now grows to 8000 dollars in 6 years at 4.5%?", flows: [{ at: 0, label: "PV = ?", up: false }, { at: 6, label: "A = 8000" }] })}
  ${table(["Future value", "Present value"], [["\\(A=P(1+i)^n\\)", "\\(PV=A(1+i)^{-n}=\\frac{A}{(1+i)^n}\\)"], ["multiply by the growth factor n times", "divide by the growth factor n times"]])}
  ${keyIdea(S`To compare amounts at different times, move them all to the same date. Moving back \(n\) periods means multiplying by \((1+i)^{-n}\).`)}`),

  widget("presentValueLab", { init: [8000, 4.5, 6] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The exponent is NEGATIVE for present value: (1 + i)⁻ⁿ.",
    "PV is always smaller than A when the rate is positive.",
    "Use the same i and n as for future value: i = r/m, n = mt.",
    "Compare payments only after moving them to the same date.",
    "Interest earned = A − PV.",
  ])}`),

  examples([
    ["Saving for a goal", S`How much must be invested now at \(4.5\%\) compounded annually to have \(8000\) dollars in \(6\) years?`,
      [S`<b>Values.</b> \(A=8000\), \(i=0.045\), \(n=6\).`,
        S`<b>Formula.</b> \(PV=8000(1.045)^{-6}\).`,
        S`<b>Evaluate.</b> \(1.045^6\approx1.302260\): \(PV\approx6143.17\) dollars.`,
        S`<b>Check forward.</b> \(6143.17(1.045)^6\approx8000\) ✓`],
      S`PV ≈ 6143.17 dollars`,
      TL({ n: 6, unit: "years", flows: [{ at: 0, label: "6143.17", up: false }, { at: 6, label: "8000" }] })],

    ["Monthly compounding", S`Find the present value of \(15\,000\) dollars due in \(4\) years at \(3.6\%\) compounded monthly.`,
      [S`<b>Per period.</b> \(i=0.003\); \(n=48\).`,
        S`<b>Formula.</b> \(PV=15000(1.003)^{-48}\).`,
        S`<b>Evaluate.</b> \(PV\approx12991.12\) dollars.`,
        S`<b>Reasonable?</b> About \(3.6\%\times4\approx14\%\) less than \(15\,000\) ✓`],
      S`PV ≈ 12 991.12 dollars`,
      TL({ n: 48, unit: "months", flows: [{ at: 0, label: "12 991.12", up: false }, { at: 48, label: "15 000" }] })],

    ["Interest earned", S`For the investment in the previous example, how much interest is earned?`,
      [S`<b>Interest.</b> \(I=A-PV\).`,
        S`<b>Compute.</b> \(15000-12991.12=2008.88\) dollars.`,
        S`<b>Fraction of the goal.</b> About \(13\%\) of the \(15\,000\) is interest.`,
        S`<b>Graph.</b> The balance curve rises from \(12\,991.12\) to \(15\,000\) ✓`],
      S`I ≈ 2008.88 dollars`,
      FG([{ f: (t) => pv(15000, 0.036, 12, 4) * 1.003 ** (12 * t), color: "violet" }], { view: { xmin: 0, xmax: 4.5, ymin: 12500, ymax: 15500 }, step: { x: 0.5, y: 500 }, points: [P(0, 12991.12, "(0, 12 991.12)"), P(4, 15000, "(4, 15 000)")] })],

    ["Now or later?", S`You are offered \(10\,000\) dollars now or \(12\,000\) dollars in \(3\) years. Money can earn \(5\%\) compounded quarterly. Which is worth more?`,
      [S`<b>Move the later payment to today.</b> \(PV=12000(1.0125)^{-12}\).`,
        S`<b>Evaluate.</b> \(PV\approx10338.10\) dollars.`,
        S`<b>Compare.</b> \(10338.10>10000\).`,
        S`<b>Decision.</b> The \(12\,000\) in \(3\) years is worth more today (by about \(338\) dollars).`],
      S`take 12 000 dollars later`,
      TL({ n: 12, unit: "quarters", flows: [{ at: 0, label: "10 000 now", up: false }, { at: 12, label: "12 000 later" }, { at: 0, label: "PV = 10 338.10", up: true, color: "#dc2626" }] })],

    ["Present value and time", S`Find the present value of \(10\,000\) dollars due in \(5\), \(10\), \(15\) and \(20\) years at \(6\%\) compounded annually. Describe the pattern.`,
      [S`<b>Values.</b> \(t=5\): \(7472.58\); \(t=10\): \(5583.95\); \(t=15\): \(4172.65\); \(t=20\): \(3118.05\).`,
        S`<b>Pattern.</b> Each extra \(5\) years multiplies the PV by \(1.06^{-5}\approx0.747\).`,
        S`<b>Graph.</b> PV is an exponential decay function of time.`,
        S`<b>Meaning.</b> The further away a goal, the less you need now.`],
      S`7472.58, 5583.95, 4172.65, 3118.05 dollars`,
      FG([{ f: (t) => 10000 * 1.06 ** -t, color: "violet" }], { view: { xmin: 0, xmax: 22, ymin: 0, ymax: 11000 }, step: { x: 5, y: 1000 }, points: [P(5, 7472.58, "(5, 7472.58)"), P(10, 5583.95, "(10, 5583.95)"), P(20, 3118.05, "(20, 3118.05)")], ylabel: "PV" })],
  ]),

  practice([
    q("pv1", S`Find the present value of \(1000\) dollars due in \(1\) year at \(10\%\) compounded annually.`, num(909.09, 0.011), "1000 ÷ 1.1.", [S`\(\approx909.09\).`], S`\(909.09\)`),
    q("pv2", S`Find the present value of \(5000\) dollars due in \(2\) years at \(4\%\) compounded annually.`, num(4622.78, 0.011), "5000(1.04)⁻².", [S`\(\approx4622.78\).`], S`\(4622.78\)`),
    q("pv3", S`Find the present value of \(2000\) dollars due in \(3\) years at \(6\%\) compounded semi-annually.`, num(1674.97, 0.011), "2000(1.03)⁻⁶.", [S`\(\approx1674.97\).`], S`\(1674.97\)`),
    q("n", S`For a present value due in \(5\) years with quarterly compounding, how many periods \(n\) are there?`, num(20), "4 × 5.", [S`\(20\).`], S`\(20\)`),
    q("which", S`For a positive rate, the present value of an amount is …`, choice(["less than the future amount", "more than the future amount", "equal to it", "zero"], 0), "Divide by a factor > 1.", [S`Less.`], S`less than the future amount`),
  ]),

  ...hard([
    ["Two goals", S`You need \(5000\) dollars in \(2\) years and another \(5000\) dollars in \(5\) years. Money earns \(5\%\) compounded annually. What single amount invested now covers both?`,
      [S`<b>First goal.</b> \(5000(1.05)^{-2}\approx4535.15\).`,
        S`<b>Second goal.</b> \(5000(1.05)^{-5}\approx3917.63\).`,
        S`<b>Total.</b> \(\approx8452.78\) dollars.`,
        S`<b>Why add PVs?</b> Both are now at the same date (today), so they can be added.`],
      S`≈ 8452.78 dollars`,
      TL({ n: 5, unit: "years", flows: [{ at: 0, label: "PV = 8452.78", up: false }, { at: 2, label: "5000" }, { at: 5, label: "5000" }] })],
    ["Pay now or later?", S`A car costs \(22\,000\) dollars now, or \(24\,500\) dollars paid in \(2\) years. Your savings earn \(4.8\%\) compounded monthly. Which option is cheaper?`,
      [S`<b>Present value of the later price.</b> \(24500(1.004)^{-24}\approx22261.63\).`,
        S`<b>Compare.</b> \(22\,000<22\,261.63\).`,
        S`<b>Decision.</b> Paying \(22\,000\) now is cheaper by about \(262\) dollars in today's money.`],
      S`pay now`],
  ], [
    q("hard", S`Find the present value of \(20\,000\) dollars due in \(10\) years at \(5\%\) compounded monthly.`, num(12143.22, 0.011), "20 000(1 + 0.05/12)⁻¹²⁰.", [S`\(\approx12143.22\).`], S`\(12143.22\)`),
    q("hard", S`Find the present value of \(7500\) dollars due in \(18\) months at \(6\%\) compounded monthly.`, num(6856.02, 0.011), "7500(1.005)⁻¹⁸.", [S`\(\approx6856.02\).`], S`\(6856.02\)`),
    q("hard", S`How much must be invested now at \(7\%\) compounded annually to have one million dollars in \(40\) years?`, num(66780.38, 0.011), "10⁶(1.07)⁻⁴⁰.", [S`\(\approx66780.38\).`], S`\(66780.38\)`),
    q("hard", S`An investment will be worth \(3000\) dollars in \(4\) years at \(3\%\) compounded quarterly. How much interest will it earn?`, num(338.05, 0.011), "3000 − 3000(1.0075)⁻¹⁶.", [S`\(\approx338.05\).`], S`\(338.05\)`),
    q("hard", S`At \(5\%\) compounded annually, is \(1000\) dollars now worth more than \(1100\) dollars in \(2\) years? Enter the present value of the \(1100\).`, num(997.73, 0.011), "1100(1.05)⁻².", [S`\(\approx997.73<1000\): the \(1000\) now is worth more.`], S`\(997.73\)`),
  ]),

  wrapUp({
    qas: [
      ["What is present value?", "The amount needed now to grow to a given future amount: PV = A(1 + i)⁻ⁿ."],
      ["How is it related to future value?", "It undoes it: divide by (1 + i)ⁿ instead of multiplying."],
      ["How do I compare payments at different times?", "Find all their present values (same date) and compare."],
      ["What happens to PV as the time grows?", "It decreases exponentially."],
      ["How do I find the interest earned?", "A − PV."],
    ],
    summary: [
      "PV = A(1 + i)⁻ⁿ.",
      "Same i and n as future value.",
      "Compare money at the same date.",
      "Further away ⇒ smaller PV.",
    ],
    next: "8.4 finds the rate or the time when the others are known.",
  }),
];
