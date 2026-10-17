// Worksheet 7.3 — Interest & Borrowing (teacher edition). Money in LaTeX is written \$.
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Simple interest", q: String.raw`Find the simple interest and the amount for \$$4200$ at $3.25\%$ per year for $5$ years.`,
    steps: [String.raw`$I=4200\times0.0325\times5=\$682.50$.`, String.raw`$A=4200+682.50=\$4882.50$.`], ans: String.raw`$I=\$682.50$, $A=\$4882.50$` },
  { title: "Finding the rate", q: String.raw`\$$1500$ earns \$$135$ simple interest in $2$ years. Find the annual rate.`,
    steps: [String.raw`$135=1500\times r\times2$.`, String.raw`$r=\frac{135}{3000}=0.045=4.5\%$.`], ans: "4.5\\%" },
  { title: "Finding the time", q: String.raw`How long does it take \$$800$ to earn \$$96$ at $4\%$ simple interest?`,
    steps: [String.raw`$96=800\times0.04\times t\Rightarrow t=\frac{96}{32}=3$ years.`], ans: "3 years" },
  { title: "Compound interest table", q: String.raw`\$$2000$ is invested at $6\%$ compounded yearly. Show the balance for $3$ years.`,
    steps: [String.raw`Year 1: $2000\times1.06=2120$.`, String.raw`Year 2: $2120\times1.06=2247.20$. Year 3: $2382.03$.`, String.raw`Formula: $2000(1.06)^3\approx2382.03$ ✓`], ans: String.raw`\$$2382.03$` },
  { title: "Monthly compounding", q: String.raw`\$$3500$ is saved at $4.8\%$ compounded monthly for $4$ years. Find the amount and the interest.`,
    steps: [String.raw`$\frac{r}{n}=0.004$, $nt=48$.`, String.raw`$A=3500(1.004)^{48}\approx\$4239.22$; interest $\approx\$739.22$.`], ans: String.raw`$A\approx\$4239.22$` },
  { title: "Frequency comparison", q: String.raw`Compare \$$10\,000$ at $5\%$ for $10$ years compounded yearly, quarterly and monthly.`,
    steps: [String.raw`Yearly: $10\,000(1.05)^{10}\approx\$16\,288.95$.`, String.raw`Quarterly: $10\,000(1.0125)^{40}\approx\$16\,436.19$.`, String.raw`Monthly: $10\,000(1+\frac{0.05}{12})^{120}\approx\$16\,470.09$.`], ans: "more frequent compounding earns a little more" },
  { title: "Simple vs compound graph", q: String.raw`Graph \$$1000$ at $8\%$ simple and compound interest for $20$ years. When does the gap first exceed \$$500$?`,
    fig: planeT({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 5000 }, lines: [{ m: 80, b: 1000, color: "blue", label: "simple", lx: 15 }], curves: [{ f: (t) => 1000 * 1.08 ** t, color: "green" }], step: { x: 2, y: 500 }, xlabel: "years", ylabel: "amount" }, 5.5),
    steps: [String.raw`Year 12: compound $2518.17$, simple $1960$: gap $\$558$.`, String.raw`Year 11: $2331.64-1880=\$451.64$.`], ans: "in year 12" },
  { title: "Credit-card interest", q: String.raw`A \$$800$ balance is charged $21\%$ per year, compounded monthly. If no payments are made, what is owed after $6$ months?`,
    steps: [String.raw`Monthly rate $0.21\div12=0.0175$.`, String.raw`$800(1.0175)^6\approx\$887.76$.`], ans: String.raw`\$$887.76$` },
  { title: "Comparing loans", q: String.raw`To borrow \$$6000$ for $3$ years: Loan A charges $7\%$ simple interest; Loan B charges $6.5\%$ compounded yearly (paid at the end). Which costs less?`,
    steps: [String.raw`A: $6000\times0.07\times3=\$1260$.`, String.raw`B: $6000(1.065)^3-6000\approx\$1247.70$.`], ans: "Loan B, by about \\$12.30" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the simple interest on \$$2400$ at $5\%$ for $3$ years.`, recap: "\\$2400, 5\\%, 3 years simple.", ans: String.raw`\$$360$` },
  { level: 1, q: String.raw`Find the amount when \$$1000$ is compounded yearly at $3\%$ for $4$ years.`, recap: "\\$1000, 3\\%, 4 years compound.", ans: String.raw`\$$1125.51$` },
  { level: 1, q: String.raw`For $6\%$ compounded monthly for $5$ years, state $\frac{r}{n}$ and $nt$.`, recap: "r/n and nt.", ans: "0.005 and 60" },
  { level: 2, q: String.raw`\$$5000$ earns \$$600$ simple interest in $4$ years. Find the rate.`, recap: "Find the simple rate.", ans: "3\\%" },
  { level: 2, q: String.raw`Find the amount: \$$7500$ at $4\%$ compounded quarterly for $6$ years.`, recap: "\\$7500, 4\\% quarterly, 6 years.", ans: String.raw`$7500(1.01)^{24}\approx\$9523.01$` },
  { level: 2, q: String.raw`How much more does \$$3000$ earn in $10$ years at $5\%$ compounded yearly than at $5\%$ simple interest?`, recap: "Compound minus simple.", ans: String.raw`$4886.68-4500=\$386.68$` },
  { level: 2, q: String.raw`A credit card charges $19.5\%$ per year compounded monthly. Find the balance after $1$ year on \$$1500$ with no payments.`, recap: "Card balance after a year.", ans: String.raw`$1500(1.01625)^{12}\approx\$1820.11$` },
  { level: 2, q: String.raw`How many years does it take \$$1000$ to double at $9\%$ compounded yearly? Use the rule of $72$ and check.`, recap: "Doubling at 9\\%.", ans: String.raw`$72\div9=8$; $1.09^8\approx1.993$ ✓` },
  { level: 3, space: 5, q: String.raw`Lena invests \$$3000$ at age $15$ and Max invests \$$6000$ at age $30$, both at $6\%$ compounded yearly.
(a) Find each amount at age $60$.
(b) Explain why Lena ends with more although she invested less.`, recap: "Early vs late investing.", ans: String.raw`(a) Lena $3000(1.06)^{45}\approx\$41\,293.83$; Max $6000(1.06)^{30}\approx\$34\,460.95$ (b) Lena's money compounds for 15 more years` },
  { level: 3, space: 5, q: String.raw`A \$$2000$ credit-card balance at $20\%$ per year (about $1.67\%$ per month) is paid off with \$$100$ each month.
(a) Find the interest charged in month 1 and the balance after the first payment.
(b) Explain why paying only \$$35$ a month would be a poor choice.`, recap: "Credit-card payoff.", ans: String.raw`(a) $\approx\$33.33$; $2000+33.33-100=\$1933.33$ (b) \$$35$ barely exceeds the interest, so the balance falls very slowly and total interest is huge` },
  { level: 3, space: 5, q: String.raw`A store offers a \$$2400$ furniture set with “no payments for 12 months”. If the balance is not paid by then, interest of $29.9\%$ per year compounded monthly is charged from the purchase date.
(a) What would be owed after 12 months in that case?
(b) What advice would you give a buyer?`, recap: "Deferred-payment offer.", ans: String.raw`(a) $2400(1.02492)^{12}\approx\$3224.59$ (b) pay the full balance before the deadline or avoid the offer` },
  { level: 3, space: 5, q: String.raw`Compare two savings accounts for \$$5000$ over $8$ years: Account A pays $4.2\%$ compounded yearly; Account B pays $4.1\%$ compounded monthly. Which earns more and by how much?`, recap: "Two savings accounts.", ans: String.raw`A $\approx\$6948.83$; B $\approx\$6937.07$: A by $\approx\$11.76$` },
  { level: 3, space: 5, q: "Explain the difference between saving and borrowing at the same interest rate, and why interest is called “the price of money”. Give a personal example of each.", recap: "Saving vs borrowing.", ans: "saving: the bank pays you to use your money; borrowing: you pay to use the lender's money; examples vary" },
];

export const WS = {
  code: "7.3",
  title: "Interest & Borrowing",
  bigideas: String.raw`Interest is the price of money. Simple interest, $I=Prt$, grows by the same amount each year (linear). Compound interest, $A=P\left(1+\frac rn\right)^{nt}$, adds interest to the balance so it earns interest itself (exponential). Over long times compounding makes a huge difference --- a benefit when saving early, and a danger when carrying high-interest debt such as credit-card balances.`,
  goals: ["Calculate simple interest, rate and time.", "Calculate compound interest for different compounding periods.", "Compare simple and compound growth.", "Calculate the cost of credit-card balances and compare loans."],
  curriculum: "F1.3, F1.1",
  vocab: [["Principal", "amount saved or borrowed"], ["Simple interest", "$I=Prt$"], ["Compound interest", "$A=P(1+\\frac rn)^{nt}$"], ["APR", "annual percentage rate"], ["Compounding period", "how often interest is added"]],
  hook: String.raw`Offer a choice: “\$1000 a day for 30 days, or 1 cent doubled every day for 30 days?” Let students vote, then reveal that the doubling penny reaches over \$5 million on day 30. That is compounding.`,
  concepts: [
    ["1. Simple interest", String.raw`$I=Prt$, $A=P(1+rt)$; $r$ as a decimal, $t$ in years (months $\div12$). Rearrange to find $r$ or $t$.`],
    ["2. Compound interest", String.raw`$A=P\left(1+\frac rn\right)^{nt}$; $n=1, 2, 4, 12$ for yearly, semi-annual, quarterly, monthly. Interest $=A-P$.`],
    ["3. Borrowing", String.raw`Credit cards charge about $20\%$ per year compounded monthly; small payments mostly cover interest. Compare loans by total cost, and pay card balances in full when possible.`],
  ],
  tips: ["Students forget to convert months to years.", "In the compound formula, divide the rate by n AND multiply the time by n.", "Report interest separately from the amount.", "Year-by-year tables build understanding before the formula.", "Discuss real credit-card statements and minimum payments."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
