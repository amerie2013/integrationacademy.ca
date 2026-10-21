// IB AA SL Worksheet 1.4 — Financial Applications of Sequences (teacher edition)
import { svgT } from "./figT.mjs";
import { moneyDoc, barsDoc } from "../figs.mjs";

const S = String.raw;
const yrs = (n, f) => Array.from({ length: n + 1 }, (_, t) => Math.round(f(t) * 100) / 100);
const EXAMPLES = [
  { title: "Annual compounding", q: S`7500 is invested at 3% per year compounded annually. Find the value after 10 years.`,
    steps: [S`$FV=7500(1.03)^{10}$.`], ans: S`$\approx10079.37$` },
  { title: "Monthly compounding", q: S`2500 is invested at 4.8% per year compounded monthly. Find the value after 6 years.`,
    steps: [S`Monthly multiplier $1+\frac{4.8}{1200}=1.004$; $12\times6=72$ months.`, S`$FV=2500(1.004)^{72}$.`], ans: S`$\approx3332.48$` },
  { title: "Annual or quarterly?", q: S`Compare 10 000 at 5% per year for 5 years compounded annually and compounded quarterly.`,
    steps: [S`Annually: $10000(1.05)^5\approx12762.82$.`, S`Quarterly: $10000(1.0125)^{20}\approx12820.37$.`], ans: "quarterly gives about 57.55 more" },
  { title: "Depreciation", q: S`A computer bought for 2400 loses 25% of its value each year. Find its value after 3 years.`,
    fig: svgT(barsDoc(yrs(3, (t) => 2400 * 0.75 ** t), { start: 0, color: "#b91c1c", xlab: "year" }), 5.5),
    steps: [S`$V=2400(0.75)^3$.`], ans: "1012.50" },
  { title: "Time to reach a target", q: S`8000 is invested at 3.5% per year compounded annually. After how many whole years is it first worth at least 12 000?`,
    steps: [S`$(1.035)^n\ge1.5\Rightarrow n\ge\frac{\ln1.5}{\ln1.035}\approx11.79$.`], ans: "12 years" },
  { title: "Finding the rate", q: S`6000 grows to 7500 in 5 years with annual compounding. Find the rate.`,
    steps: [S`$\left(1+\frac{r}{100}\right)^5=1.25\Rightarrow1+\frac{r}{100}=1.25^{0.2}$.`], ans: S`$r\approx4.56\%$` },
  { title: "Population decline", q: S`A town of 50 000 people shrinks by 1.8% per year. Find the population after 10 years.`,
    steps: [S`Multiplier $0.982$: $50000(0.982)^{10}$.`], ans: S`$\approx41695$` },
  { title: "When is it worth less than…?", q: S`A car bought for 32 000 depreciates by 15% per year. After how many whole years is it first worth less than 10 000?`,
    fig: svgT(moneyDoc([yrs(9, (t) => 32000 * 0.85 ** t)], { years: 9, colors: ["red"] }), 6),
    steps: [S`$(0.85)^n<0.3125\Rightarrow n>\frac{\ln0.3125}{\ln0.85}\approx7.16$.`], ans: "8 years" },
  { title: "Rising prices", q: S`An item costs 250 and prices rise by 2.5% per year. Find the price after 12 years.`,
    steps: [S`$250(1.025)^{12}$.`], ans: S`$\approx336.22$` },
];

const PROBLEMS = [
  { level: 1, q: S`3000 is invested at 6% per year compounded annually. Find the value after 4 years.`, recap: "Compound interest.", ans: "3787.43" },
  { level: 1, q: S`A phone worth 900 depreciates by 10% per year. Find its value after 3 years.`, recap: "Depreciation.", ans: "656.10" },
  { level: 1, q: S`Write the quarterly multiplier for 3.2% per year compounded quarterly.`, recap: "Multiplier.", ans: "1.008" },
  { level: 2, q: S`4000 is invested at 5.4% per year compounded monthly. Find the value after 3 years.`, recap: "Monthly compounding.", ans: "4701.73" },
  { level: 2, q: S`A car worth 18 000 depreciates by 22% per year. Find its value after 5 years.`, recap: "Depreciation.", ans: "5196.91" },
  { level: 2, q: S`How many whole years does 5000 at 4% per year (annual compounding) take to reach 8000?`, recap: "Time.", ans: "12 years" },
  { level: 2, q: S`2000 grows to 2600 in 4 years with annual compounding. Find the annual rate.`, recap: "Rate.", ans: S`$\approx6.78\%$` },
  { level: 2, q: S`5000 is invested for 8 years at 7% per year. How much more does annual compound interest earn than simple interest?`, recap: "Simple vs compound.", ans: "790.93" },
  { level: 3, space: 5, q: S`500 is deposited at the start of every year into an account paying 6% per year compounded annually. Find the balance at the end of the 8th year.`, recap: "Savings plan.", ans: S`$\frac{530(1.06^8-1)}{0.06}\approx5245.66$`,
    fig: svgT(barsDoc(yrs(7, (t) => 530 * (1.06 ** (t + 1) - 1) / 0.06), { color: "#15803d", xlab: "year", labels: false }), 5.5) },
  { level: 3, space: 4, q: S`Which is better: 6% per year compounded annually, or 5.85% per year compounded monthly? Justify with effective annual rates.`, recap: "Effective rates.", ans: S`monthly: $\approx6.01\%$, slightly better` },
  { level: 3, space: 5, q: S`Town A has 80 000 people and grows by 2% per year. Town B has 100 000 people and shrinks by 1% per year. After how many whole years does A first have more people than B?`, recap: "Two models.", ans: "8 years" },
  { level: 3, space: 4, q: S`How many whole years does money take to double at 7% per year compounded annually?`, recap: "Doubling time.", ans: "11 years" },
  { level: 3, space: 4, q: S`An investment loses 20% in one year and gains 20% the next. What is the overall percentage change?`, recap: "Successive changes.", ans: S`$0.8\times1.2=0.96$: a 4% loss` },
];

export const WS = {
  code: "1.4",
  title: "Financial Applications of Sequences",
  bigideas: S`Compound interest and reducing-balance depreciation multiply a value by the same factor each period, so they are geometric sequences: $FV=PV\left(1+\frac{r}{100k}\right)^{kn}$ and $V=V_0\left(1-\frac{r}{100}\right)^n$. Simple interest is arithmetic. Solve for time with logarithms or a table (round up), and for the rate with a root.`,
  goals: ["Use the compound interest formula.", "Handle different compounding periods.", "Model depreciation.", "Solve for the time or the rate."],
  curriculum: "SL 1.4",
  vocab: [["PV, FV", "present and future value"], ["k", "compounding periods per year"], ["Depreciation", "loss of a fixed percentage of the current value"]],
  hook: "Ask students which they would rather have after 30 years: 10 000 dollars at 5% simple interest or at 5% compound interest, and to estimate the difference before computing it.",
  concepts: [
    ["1. Simple versus compound", S`${svgT(moneyDoc([yrs(15, (t) => 1000 * 1.08 ** t), yrs(15, (t) => 1000 * (1 + 0.08 * t))], { years: 15, labels: ["compound ", "simple "] }), 6)} Simple interest adds a fixed amount (arithmetic); compound interest multiplies (geometric).`],
    ["2. Compounding periods", S`Rate per period $\frac{r}{k}\%$, number of periods $kn$. More frequent compounding gives slightly more.`],
    ["3. Solving for n and r", S`$n=\frac{\ln(FV/PV)}{\ln(\text{multiplier})}$, rounded up; $1+\frac{r}{100}=\left(\frac{FV}{PV}\right)^{1/n}$.`],
  ],
  tips: ["Write percentages as multipliers.", "Monthly: divide the rate by 12, multiply the years by 12.", "Round the time up.", "Depreciation uses the current value.", "Show GDC inputs on Paper 2."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
