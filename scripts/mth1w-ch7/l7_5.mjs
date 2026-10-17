// MTH1W 7.5 — Chapter 7 Review (NEW lesson, placed after 7.4)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";

export const TITLE = "7.5 Chapter 7 Review";
export const NEW = { id: "7c7e7c1a-0a75-4d1e-9c75-c7a9f0000705", position: 50 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 7 Review — Financial Literacy",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, questions where you must choose the right method, multi-step money problems, mixed practice and a readiness checklist. Work through it after 7.1–7.4 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key formula and the common mistake of each lesson;",
      "choose the right calculation for a financial question;",
      "solve multi-step problems that combine prices, interest, value changes and budgets;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "F1.1–F1.4 (whole strand F)",
    prior: [
      [String.raw`Price of a \(\$60\) item with \(13\%\) HST?`, String.raw`\(\$67.80\).`],
      [String.raw`Decay factor for a \(20\%\) loss?`, String.raw`\(0.8\).`],
      [String.raw`Simple interest on \(\$500\) at \(4\%\) for \(2\) years?`, String.raw`\(\$40\).`],
    ],
    words: [
      ["Break-even point", "where two options cost the same", "set costs equal"],
      ["Growth / decay factor", "1 + r / 1 − r", "1.05 / 0.85"],
      ["Compound interest", "A = P(1 + r/n)ⁿᵗ", ""],
      ["Surplus", "net income − expenses", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["7.1 Decisions", "unit price; × (1 − d) × 1.13; fixed + variable; break-even; inflation P(1 + r)ⁿ", "30 + 5n = 75 → n = 9", "compare totals, not monthly payments"],
    ["7.2 Value change", "V₀(1 + r)ⁿ and V₀(1 − r)ⁿ; straight-line V₀ − dn", "32 000(0.82)⁴ ≈ 14 468", "percent changes don't cancel"],
    ["7.3 Interest", "I = Prt; A = P(1 + r/n)ⁿᵗ", "1500(1.05)¹⁰ ≈ 2443.34", "months → years; r/n and nt"],
    ["7.4 Budgets", "net income; needs, wants, savings; surplus or deficit; 50/30/20", "2200 − 2051 = 149", "convert to monthly first"],
  ])),

  section("📌 Which calculation?", keyIdea(String.raw`<strong>Which size or plan is cheaper?</strong> unit price or break-even. <strong>Price at the register?</strong> discount, then \(\times1.13\). <strong>Value after years?</strong> growth or decay factor. <strong>Money growing in an account?</strong> compound interest. <strong>Can I afford it each month?</strong> a budget.`)),

  practice([
    q("method", "To decide between a $50/month unlimited plan and a $20 + $1.50/GB plan, you should…", choice(["find the break-even point", "compare only the fixed fees", "compute compound interest", "use the 50/30/20 rule"], 0),
      "Two linear cost models.", ["Set 50 = 20 + 1.5x."], "break-even"),
    q("method", "A car loses 15% of its value each year. To find its value in 5 years, multiply by…", choice(["\\(0.85^5\\)", "\\(0.15^5\\)", "\\(1.15^5\\)", "\\(5\\times0.15\\)"], 0),
      "Decay factor to the power of the years.", [String.raw`\((1-0.15)^5=0.85^5\).`], "0.85⁵"),
    q("method", String.raw`For \(\$800\) at \(6\%\) compounded monthly, the base of the power is…`, choice(["\\(1.005\\)", "\\(1.06\\)", "\\(1.5\\)", "\\(0.995\\)"], 0),
      "1 + r/n.", [String.raw`\(1+\frac{0.06}{12}=1.005\).`], "1.005"),
    q("method", "Which income should a budget use?", choice(["net (take-home) income", "gross income", "yearly income before tax", "the largest paycheque"], 0),
      "What actually reaches your account?", ["Deductions are taken before you are paid."], "net income"),
    q("method", "A bank asks you by text to confirm your PIN. You should…", choice(["not reply, and contact the bank using its official number", "reply quickly to keep your account open", "send the PIN by email instead", "post about it online"], 0),
      "Banks never ask for PINs by text.", ["This is a phishing attempt."], "contact the bank yourself"),
  ]),

  examples([
    ["Discounts, tax and unit price", String.raw`A 6-pack of sports drinks costs \(\$7.49\); a 15-pack costs \(\$16.99\) but is on sale for \(15\%\) off. Which has the lower price per bottle including \(13\%\) HST?`,
      [String.raw`6-pack: \(7.49\times1.13\div6\approx\$1.41\) per bottle.`, String.raw`15-pack: \(16.99\times0.85\times1.13\div15\approx\$1.09\) per bottle.`],
      "the 15-pack on sale"],
    ["Depreciation and a loan", String.raw`Sam buys a \(\$14\,000\) used car with a loan at \(7\%\) compounded yearly, paid in one lump sum after \(3\) years. The car depreciates \(15\%\) per year. Compare what Sam owes with what the car is worth after \(3\) years.`,
      [String.raw`Owed: \(14\,000(1.07)^3\approx\$17\,150.60\).`, String.raw`Worth: \(14\,000(0.85)^3\approx\$8597.75\).`, "Sam owes about twice what the car is worth — borrowing for things that lose value is expensive."],
      String.raw`owes \(\approx\$17\,151\); car worth \(\approx\$8598\)`],
    ["Saving with compound interest", String.raw`At age 16 Lee invests \(\$2000\) at \(5\%\) compounded yearly. How much will it be at age 30? At age 60?`,
      [String.raw`Age 30 (\(14\) years): \(2000(1.05)^{14}\approx\$3959.86\).`, String.raw`Age 60 (\(44\) years): \(2000(1.05)^{44}\approx\$17\,114.30\).`],
      String.raw`\(\approx\$3960\) and \(\approx\$17\,114\)`],
    ["Inflation and wages", String.raw`Jo's pay rises \(2\%\) a year while prices rise \(3\%\) a year. After \(5\) years, by what percent has Jo's buying power changed?`,
      [String.raw`Pay factor \(1.02^5\approx1.1041\); price factor \(1.03^5\approx1.1593\).`, String.raw`Buying power factor \(1.1041\div1.1593\approx0.9524\): a drop of about \(4.8\%\).`],
      String.raw`about \(4.8\%\) less buying power`],
    ["Adjusting a budget", String.raw`A student's net income is \(\$1400\) a month with expenses of \(\$1310\). Her hours are cut, reducing income by \(12\%\). Find the new surplus or deficit, and suggest a fix.`,
      [String.raw`New income: \(1400\times0.88=\$1232\).`, String.raw`\(1232-1310=-\$78\): a deficit.`, "Fix: cut wants by at least $78 (eating out, subscriptions) or pause a savings goal briefly."],
      String.raw`deficit of \(\$78\); reduce wants`],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses more than one lesson.</p>`),

  practice([
    q("tax + discount", String.raw`A \(\$64\) game is \(25\%\) off. What is the price with \(13\%\) HST?`, num(54.24, 0.006),
      "× 0.75 × 1.13.", [String.raw`\(64\times0.75=48\); \(48\times1.13=54.24\).`], String.raw`\(\$54.24\)`),
    q("depreciation", String.raw`A \(\$1500\) e-bike depreciates \(22\%\) per year. What is it worth after \(2\) years (to the cent)?`, num(912.6, 0.006),
      "× 0.78².", [String.raw`\(1500\times0.6084=912.60\).`], String.raw`\(\$912.60\)`),
    q("compound", String.raw`\(\$3000\) at \(4\%\) compounded semi-annually for \(3\) years. Find the amount (to the cent).`, num(3378.49, 0.006),
      "r/n = 0.02, nt = 6.", [String.raw`\(3000(1.02)^6\approx3378.49\).`], String.raw`\(\$3378.49\)`),
    q("break-even", String.raw`A car rental costs \(\$45\) a day plus \(\$0.20\)/km, or \(\$70\) a day with unlimited km. Above how many km per day is the unlimited option cheaper?`, num(125),
      "Set 45 + 0.2k = 70.", [String.raw`\(0.2k=25\Rightarrow k=125\).`], String.raw`\(125\) km`),
    q("budget", String.raw`Net income is \(\$2600\) a month. Using 50/30/20, how much should go to savings each year?`, num(6240),
      "20% per month, then × 12.", [String.raw`\(0.2\times2600=520\); \(520\times12=6240\).`], String.raw`\(\$6240\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["7.1", "I can compare unit prices, apply discounts and HST, find break-even points, calculate inflation and spot fraud."],
      ["7.2", "I can calculate appreciation and depreciation with percentage and straight-line models and explain what affects value."],
      ["7.3", "I can calculate simple and compound interest and explain the cost of borrowing and of credit-card balances."],
      ["7.4", "I can build a budget from net income, find a surplus or deficit and adjust it when circumstances change."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("interestGrowth"),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes, then redo the explorer and practice set of each lesson where you made a mistake. Try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Using 0.15 instead of 0.85 for a 15% decrease, forgetting to divide the rate by n, mixing months and years, budgeting with gross pay, and treating a lower monthly payment as a cheaper loan."],
      ["What should I show in a money problem?", "The formula, the substitution with units, the answer rounded to the cent, and a sentence answering the question in context."],
      ["Why does this chapter matter outside school?", "Every phone plan, car purchase, loan, savings account and paycheque uses these ideas. Good habits now save thousands of dollars later."],
      ["How does this connect to earlier chapters?", "Fixed + variable costs are linear relations (Chapter 4); appreciation, depreciation and compound interest are exponential models (Chapter 6)."],
    ],
    summary: [
      "Unit price, × (1 − d) × 1.13, break-even, inflation.",
      "Value change: V₀(1 ± r)ⁿ or straight-line.",
      "Interest: I = Prt and A = P(1 + r/n)ⁿᵗ.",
      "Budgets: net income, needs/wants/savings, surplus or deficit.",
    ],
    next: "Write the Chapter 7 test — this completes the MTH1W course.",
  }),
];
