// MTH1W 7.3 — Interest & Borrowing (self-study format): simple and compound interest, compounding periods,
// saving vs borrowing, credit cards, comparing loans
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";

export const TITLE = "7.3 Interest & Borrowing";

export const blocks = () => [
  intro({
    icon: "🏦",
    title: "Interest & Borrowing",
    overview: String.raw`Interest is the price of using money. When you save or invest, a bank pays you interest; when you borrow — a car loan, a student loan, a credit card balance — you pay interest. In this lesson you will calculate simple and compound interest, see why compounding matters so much over time, and work out the real cost of carrying a credit-card balance.`,
    goals: [
      "calculate simple interest with \\(I=Prt\\) and the amount \\(A=P(1+rt)\\);",
      "calculate compound interest with \\(A=P\\left(1+\\frac{r}{n}\\right)^{nt}\\);",
      "explain how the compounding frequency and the time affect growth;",
      "compare saving and borrowing options with different rates;",
      "estimate the cost and time of paying off a credit-card balance.",
    ],
    curriculum: "F1.3 (simple and compound interest; borrowing and saving; credit), F1.1",
    prior: [
      [String.raw`\(4\%\) of \(\$2500\)?`, String.raw`\(\$100\).`],
      [String.raw`Write \(3.5\%\) as a decimal.`, String.raw`\(0.035\).`],
      [String.raw`Evaluate \(1000(1.05)^2\).`, String.raw`\(1102.50\).`],
    ],
    words: [
      ["Principal (P)", "the amount saved or borrowed", "$2000"],
      ["Interest rate (r)", "percent per year, as a decimal", "0.04"],
      ["Simple interest", "interest on the principal only", "I = Prt"],
      ["Compound interest", "interest earned on interest as well", "A = P(1 + r/n)ⁿᵗ"],
      ["Compounding period", "how often interest is added (n times a year)", "monthly: n = 12"],
      ["APR", "annual percentage rate charged on a loan or card", "19.99%"],
    ],
  }),

  section("📌 Simple interest", String.raw`
  ${keyIdea(String.raw`\(I=Prt\) and \(A=P+I=P(1+rt)\), with \(r\) as a decimal and \(t\) in years. Simple interest grows by the same amount every year: a <strong>linear</strong> relation.`)}
  <p>Months must be changed to years: \(9\) months is \(t=\frac{9}{12}=0.75\).</p>`),

  section("📌 Compound interest", String.raw`
  <p>With compound interest, each period's interest is added to the balance, and the next period's interest is calculated on the new, larger balance.</p>
  ${table(["Year", "Start", "Interest at 5%", "End"], [["1", "$1000.00", "$50.00", "$1050.00"], ["2", "$1050.00", "$52.50", "$1102.50"], ["3", "$1102.50", "$55.13", "$1157.63"]])}
  ${keyIdea(String.raw`\(A=P\left(1+\dfrac{r}{n}\right)^{nt}\), where \(n\) is the number of compounding periods per year (\(1\) yearly, \(2\) semi-annually, \(4\) quarterly, \(12\) monthly). Compound growth is <strong>exponential</strong>.`)}
  <p>Compare the two kinds of interest in the explorer. Try 40 years, and try monthly compounding.</p>`),

  widget("interestGrowth"),

  section("📌 Borrowing and credit cards", String.raw`
  <p>Credit cards are convenient, but unpaid balances are charged high interest (often around \(20\%\) a year), compounded monthly. Paying only the minimum can stretch a small balance into years of payments. Paying the full balance by the due date avoids interest entirely.</p>`),

  widget("creditPayoff"),

  section("📌 Strategy", watchOut([
    "Convert the rate to a decimal and the time to years.",
    "For compound interest, divide the yearly rate by n and multiply the years by n.",
    "Interest earned = A − P; don't report A as the interest.",
    "Compare loans by total cost, not just by the monthly payment.",
  ])),

  examples([
    ["Simple interest", String.raw`Find the simple interest on \(\$2500\) at \(4\%\) per year for \(3\) years, and the total amount.`,
      [String.raw`\(I=2500\times0.04\times3=\$300\).`, String.raw`\(A=2500+300=\$2800\).`],
      String.raw`\(I=\$300\), \(A=\$2800\)`],
    ["Simple interest for months", String.raw`A \(\$1800\) loan is charged \(6.5\%\) simple interest for \(8\) months. How much interest is owed?`,
      [String.raw`\(t=\frac{8}{12}\).`, String.raw`\(I=1800\times0.065\times\frac{8}{12}=\$78\).`],
      String.raw`\(\$78\)`],
    ["Compound interest, yearly", String.raw`\(\$1500\) is invested at \(5\%\) compounded yearly for \(10\) years. Find the amount and the interest earned.`,
      [String.raw`\(A=1500(1.05)^{10}\approx1500\times1.62889=\$2443.34\).`, String.raw`Interest \(=2443.34-1500=\$943.34\) (simple interest would give only \(\$750\)).`],
      String.raw`\(A\approx\$2443.34\); interest \(\approx\$943.34\)`],
    ["Compounding monthly", String.raw`\(\$2000\) is saved at \(3.6\%\) compounded monthly for \(5\) years. Find the amount.`,
      [String.raw`\(\frac{r}{n}=\frac{0.036}{12}=0.003\); \(nt=60\).`, String.raw`\(A=2000(1.003)^{60}\approx2000\times1.19689=\$2393.79\).`],
      String.raw`about \(\$2393.79\)`],
    ["The cost of a credit-card balance", String.raw`A student owes \(\$1000\) on a card charging \(19.8\%\) per year, compounded monthly, and makes no payments for one year. How much is owed?`,
      [String.raw`\(\frac{0.198}{12}=0.0165\) per month.`, String.raw`\(1000(1.0165)^{12}\approx1000\times1.2170=\$1216.99\).`, String.raw`About \(\$217\) of interest in one year — almost \(22\%\) of the balance.`],
      String.raw`about \(\$1216.99\)`],
  ]),

  practice([
    q("simple", String.raw`Find the simple interest on \(\$3200\) at \(3.5\%\) per year for \(4\) years.`, num(448),
      "I = Prt.", [String.raw`\(3200\times0.035\times4=448\).`], String.raw`\(\$448\)`),
    q("simple, months", String.raw`Find the simple interest on \(\$900\) at \(8\%\) per year for \(6\) months.`, num(36),
      "t = 6/12.", [String.raw`\(900\times0.08\times0.5=36\).`], String.raw`\(\$36\)`),
    q("compound", String.raw`\(\$1000\) is invested at \(4\%\) compounded yearly for \(3\) years. Find the amount (to the cent).`, num(1124.86, 0.006),
      "A = P(1 + r)ⁿ.", [String.raw`\(1000(1.04)^3=1124.864\).`], String.raw`\(\$1124.86\)`),
    q("compound quarterly", String.raw`\(\$5000\) at \(6\%\) compounded quarterly for \(2\) years. Find the amount (to the cent).`, num(5632.46, 0.006),
      "r/n = 0.015, nt = 8.", [String.raw`\(5000(1.015)^8\approx5632.46\).`], String.raw`\(\$5632.46\)`),
    q("better option", String.raw`Which grows \(\$1000\) more in \(10\) years?`, choice(["\\(5\\%\\) compounded yearly", "\\(5.5\\%\\) simple interest", "they grow the same", "cannot tell"], 0),
      "Compute both.", [String.raw`Compound: \(1000(1.05)^{10}\approx1628.89\); simple: \(1000(1+0.055\times10)=1550\).`], "5% compounded yearly"),
  ]),

  wrapUp({
    qas: [
      ["Why does compound interest beat simple interest over time?", "Each year's interest is added to the balance and then earns interest itself. The effect is small at first and huge after decades."],
      ["Does compounding more often help a lot?", "A little. Monthly compounding beats yearly at the same rate, but the rate and the time matter far more than the frequency."],
      ["Why start saving early?", "Time is the most powerful factor in compound growth: money invested at 15 grows for many more periods than money invested at 35."],
      ["Is a low monthly payment a good deal?", "Not necessarily. A longer loan means lower payments but more interest in total. Compare total costs."],
      ["How do I avoid credit-card interest?", "Pay the full statement balance by the due date every month. Interest is charged only on balances carried over."],
    ],
    summary: [
      "Simple interest: I = Prt, A = P(1 + rt) — linear growth.",
      "Compound interest: A = P(1 + r/n)ⁿᵗ — exponential growth.",
      "Interest = A − P.",
      "Rate and time matter most; frequency adds a little.",
      "Credit-card balances grow quickly at high rates: pay in full when possible.",
    ],
    next: "7.4 puts income, spending and saving together in a budget.",
  }),
];
