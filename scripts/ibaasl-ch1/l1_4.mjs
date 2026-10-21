// IB AA SL 1.4 — Financial Applications of Sequences: compound interest, compounding periods, depreciation, solving for n and r
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard } from "./lib.mjs";
import { fig, moneyDoc, barsDoc } from "./figs.mjs";

export const TITLE = "1.4 Financial Applications of Sequences";
export const ID = "1baa0001-0001-4001-8001-000000000104";
const S = String.raw;
const years = (n, f) => Array.from({ length: n + 1 }, (_, t) => Math.round(f(t) * 100) / 100);

export const blocks = () => [
  intro({
    icon: "💰",
    title: "Financial Applications of Sequences",
    overview: S`Money that earns compound interest grows by the same factor every period, and a car that loses a fixed percentage of its value each year shrinks by the same factor every year: both are geometric sequences. In this lesson you will use the compound interest and depreciation formulas, handle interest compounded several times a year, and solve for the time or the rate needed to reach a target.`,
    goals: [
      "compare simple interest (arithmetic) with compound interest (geometric);",
      "use \\(FV=PV\\left(1+\\frac{r}{100k}\\right)^{kn}\\) for interest compounded \\(k\\) times a year;",
      "use \\(V=V_0\\left(1-\\frac{r}{100}\\right)^{n}\\) for annual depreciation;",
      "find the time needed to reach a target value;",
      "find the interest or depreciation rate from two values.",
    ],
    curriculum: "SL 1.4 (financial applications of geometric sequences and series: compound interest, annual depreciation)",
    prior: [
      [S`Write a 6% increase as a multiplier.`, S`\(1.06\).`],
      [S`Write a 15% decrease as a multiplier.`, S`\(0.85\).`],
      [S`Solve \(x^6=1.25\) for \(x>0\) (3 d.p.).`, S`\(x\approx1.038\).`],
    ],
    words: [
      ["Present value \\(PV\\)", "the amount invested or borrowed now", "\\(5000\\)"],
      ["Future value \\(FV\\)", "the value after \\(n\\) years", "\\(6326.60\\)"],
      ["Compounding periods \\(k\\)", "how many times a year interest is added", "monthly: \\(k=12\\)"],
      ["Depreciation", "loss of value by a fixed percentage of the current value each year", "15% a year"],
      ["Multiplier", "the factor applied each period", "\\(1+\\tfrac{r}{100k}\\)"],
    ],
  }),

  section("📌 Simple versus compound interest", S`
  <p>With <strong>simple interest</strong> the same amount (a percentage of the original) is added every year: an arithmetic sequence. With <strong>compound interest</strong> the interest is a percentage of the current balance, so the balance is multiplied by the same factor every year: a geometric sequence.</p>
  ${fig(moneyDoc([years(15, (t) => 1000 * 1.08 ** t), years(15, (t) => 1000 * (1 + 0.08 * t))], { years: 15, labels: ["compound ", "simple "] }), "1000 at 8% a year: compound (green) pulls away from simple (amber)")}
  ${table(["", "Simple interest", "Compound interest"], [
    ["each year", "add the same amount", "multiply by the same factor"],
    ["sequence", "arithmetic", "geometric"],
    ["after n years", S`\(PV\left(1+\frac{r}{100}n\right)\)`, S`\(PV\left(1+\frac{r}{100}\right)^{n}\)`],
  ])}`),

  section("📌 Compounding more often, and depreciation", S`
  <p>If interest of \(r\%\) a year is compounded \(k\) times a year, each period adds \(\frac{r}{k}\%\) and there are \(kn\) periods in \(n\) years:</p>
  <p style="text-align:center">\(FV=PV\left(1+\dfrac{r}{100k}\right)^{kn}\).</p>
  <p>Depreciation works the same way with a multiplier below 1: \(V=V_0\left(1-\dfrac{r}{100}\right)^{n}\).</p>
  ${fig(barsDoc(years(6, (t) => 28000 * 0.85 ** t), { start: 0, color: "#b91c1c", xlab: "year", title: "A 28 000 car losing 15% of its value each year" }), "Each bar is 85% of the one before: the value never reaches 0")}
  ${keyIdea(S`Write every percentage change as a multiplier: up \(r\%\) → \(1+\frac{r}{100}\); down \(r\%\) → \(1-\frac{r}{100}\). Repeated changes multiply.`)}
  ${watchOut([
    "r is a percentage: 4% gives 1.04, not 1.4 or 5.",
    "With monthly compounding both the rate and the number of periods change: 1 + r/(100·12) and 12n.",
    "A question asking 'how many years' wants a whole number: round UP when the value must reach the target.",
    "Depreciation is a percentage of the current value, not of the original value.",
  ])}`),

  section("📌 Explore", S`<p>Change the rate, the number of compounding periods and the time. Compare the compound balance with simple interest (dashed), then switch to depreciation.</p>`),

  widget("interestLab", { init: [1000, 6, 12, 10] }),

  examples([
    ["Level 1 · Compound interest", S`5000 is invested at 4% per year, compounded annually. Find its value after 6 years.`,
      [S`Multiplier \(1.04\) each year for 6 years.`, S`\(FV=5000(1.04)^6\approx6326.60\).`],
      S`\(6326.60\)`,
      fig(moneyDoc([years(6, (t) => 5000 * 1.04 ** t)], { years: 6 }))],
    ["Level 1 · Monthly compounding", S`2000 is invested at 3.6% per year, compounded monthly. Find its value after 5 years.`,
      [S`Each month: \(1+\frac{3.6}{100(12)}=1.003\); number of months \(12(5)=60\).`, S`\(FV=2000(1.003)^{60}\approx2393.79\).`],
      S`\(2393.79\)`],
    ["Level 2 · Depreciation", S`A car bought for 28 000 loses 15% of its value each year. Find its value after 4 years.`,
      [S`Multiplier \(0.85\).`, S`\(V=28000(0.85)^4\approx14616.17\).`],
      S`\(14616.17\)`],
    ["Level 2 · How long to double?", S`3000 is invested at 5% per year compounded quarterly. After how many whole years will it first be at least 6000?`,
      [S`Each quarter: \(1.0125\). Solve \(3000(1.0125)^{q}\ge6000\), \(q\) = number of quarters.`, S`\((1.0125)^q\ge2\Rightarrow q\ge\frac{\ln2}{\ln1.0125}\approx55.8\), so \(q=56\) quarters.`, S`56 quarters = 14 years (check: \(3000(1.0125)^{56}\approx6015.10\)).`],
      S`14 years`,
      fig(moneyDoc([years(14, (t) => 3000 * 1.0125 ** (4 * t))], { years: 14 }), "The balance passes 6000 during year 14")],
    ["Level 3 · Finding the rate", S`4000 grows to 5000 in 6 years with interest compounded annually. Find the annual rate to 2 d.p.`,
      [S`\(4000\left(1+\frac{r}{100}\right)^6=5000\Rightarrow\left(1+\frac{r}{100}\right)^6=1.25\).`, S`\(1+\frac{r}{100}=1.25^{1/6}\approx1.03789\).`, S`\(r\approx3.79\).`],
      S`\(3.79\%\)`],
  ]),

  practice([
    q("Level 1 · compound", S`1200 is invested at 5% per year compounded annually. Find the value after 3 years (2 d.p.).`, num(1389.15, 0.01),
      "1200 × 1.05³.", [S`\(1200(1.157625)\).`], S`\(1389.15\)`),
    q("Level 1 · depreciation", S`A machine worth 15 000 depreciates by 20% per year. Find its value after 2 years.`, num(9600),
      "Multiplier 0.8.", [S`\(15000(0.8)^2\).`], S`\(9600\)`),
    q("Level 2 · simple vs compound", S`1000 is invested for 10 years at 6% per year. How much more does compound interest (annually) earn than simple interest? (2 d.p.)`, num(190.85, 0.01),
      "Compound 1000(1.06)¹⁰; simple 1000 + 10(60).", [S`\(1790.85-1600\).`], S`\(190.85\)`),
    q("Level 2 · growth", S`A town of 12 000 people grows by 2.5% per year. Find its population after 8 years, to the nearest person.`, num(14621),
      "12000 × 1.025⁸.", [S`\(\approx14620.83\).`], S`\(14621\)`),
    q("Level 2 · time", S`A car worth 20 000 loses 12% of its value per year. After how many whole years is it first worth less than 10 000?`, num(6),
      "Solve 0.88ⁿ < 0.5.", [S`\(n>\frac{\ln0.5}{\ln0.88}\approx5.42\).`], S`\(6\)`),
  ]),

  ...hard([
    ["A savings plan", S`At the start of every year Lena deposits 1000 into an account paying 4% per year, compounded annually. Find the balance at the end of the 10th year.`,
      [S`The first deposit earns interest for 10 years, the second for 9, …, the last for 1 year.`, S`Balance \(=1000(1.04+1.04^2+\dots+1.04^{10})\), a geometric series with \(u_1=1040\), \(r=1.04\), \(n=10\).`, S`\(S_{10}=\dfrac{1040(1.04^{10}-1)}{0.04}\approx12486.35\).`],
      S`\(12486.35\)`,
      fig(barsDoc(years(9, (t) => 1000 * 1.04 * (1.04 ** (t + 1) - 1) / 0.04).slice(0, 10), { color: "#15803d", xlab: "year", labels: false, title: "Balance at the end of each year" }))],
    ["Which account is better?", S`Account A pays 5% per year compounded annually. Account B pays 4.9% per year compounded monthly. Which gives more on 10 000 after 10 years, and by how much?`,
      [S`A: \(10000(1.05)^{10}\approx16288.95\).`, S`B: \(10000\left(1+\frac{0.049}{12}\right)^{120}\approx16306.88\).`, S`B gives about 17.93 more: compounding monthly makes its effective annual rate \(\left(1+\frac{0.049}{12}\right)^{12}-1\approx5.01\%\).`],
      S`B, by about 17.93`],
  ], [
    q("Level 3 · inflation", S`An item costs 80 and prices rise by 3% per year. Find its price after 5 years (2 d.p.).`, num(92.74, 0.01),
      "80 × 1.03⁵.", [S`\(80(1.159274)\).`], S`\(92.74\)`),
    q("Level 3 · months", S`5000 is invested at 6% per year compounded monthly. After how many whole months does it first exceed 6000?`, num(37),
      "Monthly multiplier 1.005.", [S`\((1.005)^m>1.2\Rightarrow m>36.56\).`], S`\(37\)`),
    q("Level 3 · depreciation rate", S`A car bought for 30 000 is worth 18 000 after 4 years. Find the annual depreciation rate as a percentage (2 d.p.).`, num(11.99, 0.01),
      "(1 − r/100)⁴ = 0.6.", [S`\(1-\frac{r}{100}=0.6^{1/4}\approx0.88011\).`], S`\(11.99\)`),
  ]),

  wrapUp({
    qas: [
      ["Do I need to memorise the formulas?", "They are in the formula booklet, but you must know what PV, r, k and n stand for and how to rearrange them."],
      ["Can I use the GDC finance solver?", "Yes, on Paper 2. Show the values you entered (N, I%, PV, PMT, FV, P/Y, C/Y) as your working."],
      ["Why round up the number of years?", "The balance only passes the target during the next whole period, so the earlier whole number is not enough."],
      ["Is depreciation ever arithmetic?", "Straight-line depreciation (the same amount each year) is arithmetic; the reducing-balance method here is geometric."],
      ["What is an effective annual rate?", "The single annual rate that gives the same growth as the compounding actually used, (1 + r/(100k))ᵏ − 1."],
    ],
    summary: [
      "Simple interest: arithmetic; compound interest: geometric.",
      "FV = PV(1 + r/(100k))^(kn).",
      "Depreciation: V = V₀(1 − r/100)ⁿ.",
      "Solve for n with logarithms or a table (round up); solve for r with a root.",
    ],
    next: "1.5 expands (a + b)ⁿ quickly with Pascal's triangle and the binomial theorem.",
  }),
];
