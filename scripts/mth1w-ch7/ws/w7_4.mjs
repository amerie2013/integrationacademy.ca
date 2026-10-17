// Worksheet 7.4 — Budgets (teacher edition). Money in LaTeX is written \$.
import { barT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Gross to net", q: String.raw`Jordan earns a gross salary of \$$3100$ per month. Deductions: income tax \$$390$, CPP \$$170$, EI \$$51$, union dues \$$40$. Find the net pay and the percent deducted.`,
    steps: [String.raw`Deductions $=390+170+51+40=\$651$.`, String.raw`Net $=3100-651=\$2449$; $\frac{651}{3100}=21\%$.`], ans: String.raw`\$$2449$; $21\%$ deducted` },
  { title: "Converting pay periods", q: String.raw`Convert to a monthly amount: (a) \$$520$ weekly (b) \$$1150$ bi-weekly (c) \$$980$ semi-monthly.`,
    steps: [String.raw`(a) $520\times52\div12\approx\$2253.33$.`, String.raw`(b) $1150\times26\div12\approx\$2491.67$.`, String.raw`(c) $980\times2=\$1960$.`], ans: String.raw`\$$2253.33$, \$$2491.67$, \$$1960$` },
  { title: "Building a budget", q: String.raw`Net income \$$2450$. Expenses: rent \$$950$, utilities \$$110$, groceries \$$380$, transit \$$156$, phone \$$55$, eating out \$$160$, entertainment \$$120$, savings \$$250$. Find the surplus or deficit.`,
    steps: [String.raw`Total $=950+110+380+156+55+160+120+250=\$2181$.`, String.raw`Surplus $=2450-2181=\$269$.`], ans: String.raw`\$$269$ surplus` },
  { title: "Comparing with 50/30/20", q: "Classify Example 3's expenses and compare with 50/30/20.",
    fig: barT({ bars: [["needs", 67.4], ["wants", 11.4], ["savings", 10.2]], base: 0, top: 80, step: 20, ylabel: "% of income", color: "green" }, 4.8),
    steps: [String.raw`Needs: $950+110+380+156+55=\$1651$ ($67.4\%$).`, String.raw`Wants: $280$ ($11.4\%$). Savings: $250$ ($10.2\%$).`, "Needs exceed 50% because of rent; adding the surplus to savings would bring savings to about 21%."], ans: "needs 67.4\\%, wants 11.4\\%, savings 10.2\\%" },
  { title: "Irregular expenses", q: String.raw`Yearly costs: car insurance \$$1680$, gifts \$$360$, school supplies \$$240$. How much should be set aside each month?`,
    steps: [String.raw`$1680+360+240=\$2280$ per year.`, String.raw`$2280\div12=\$190$ per month.`], ans: String.raw`\$$190$ per month` },
  { title: "Small costs add up", q: String.raw`A student buys a \$$5.75$ drink on each of $20$ school days a month. Find the yearly cost (10 school months) and what it would be if saved at $4\%$ for $5$ years (deposited once a year, compounded yearly).`,
    steps: [String.raw`Monthly $=5.75\times20=\$115$; yearly $=\$1150$.`, String.raw`Five deposits of $1150$ at $4\%$: $1150(1.04^5+1.04^4+1.04^3+1.04^2+1.04)\approx\$6477.92$.`], ans: String.raw`\$$1150$ a year; $\approx\$6478$ after 5 years` },
  { title: "Income drops", q: String.raw`In Example 3, income falls by $20\%$. Rebalance the budget, protecting needs.`,
    steps: [String.raw`New income $=2450\times0.8=\$1960$; expenses $\$2181$: deficit $\$221$.`, String.raw`Cut wants: eating out $160\to60$, entertainment $120\to60$ ($-\$160$); reduce savings $250\to180$ ($-\$70$).`, String.raw`New total $\$1951$: a surplus of $\$9$.`], ans: "cut wants first, then savings; needs stay" },
  { title: "Planning a savings goal", q: String.raw`Priya wants \$$2400$ for a trip in $10$ months. She has \$$450$. How much must she save per month? Per week?`,
    steps: [String.raw`Needed $=2400-450=\$1950$; per month $=\$195$.`, String.raw`Per week $=195\times12\div52=\$45$.`], ans: String.raw`\$$195$ a month (\$$45$ a week)` },
  { title: "Emergency fund", q: String.raw`Essential monthly expenses are \$$1650$. How long will it take to build a $3$-month emergency fund saving \$$275$ a month?`,
    steps: [String.raw`Goal $=3\times1650=\$4950$.`, String.raw`$4950\div275=18$ months.`], ans: "18 months" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Classify each expense as fixed or variable and as a need or a want: (a) rent (b) movie tickets (c) groceries (d) a gym membership.`, recap: "Classify four expenses.", ans: "(a) fixed, need (b) variable, want (c) variable, need (d) fixed, want" },
  { level: 1, q: String.raw`A part-time job pays \$$16.50$ per hour for $15$ hours a week. Find the weekly and monthly gross pay.`, recap: "\\$16.50/h, 15 h/week.", ans: String.raw`\$$247.50$; $\approx\$1072.50$` },
  { level: 1, q: String.raw`Net income \$$1980$; expenses \$$2045$. Find the surplus or deficit.`, recap: "Income 1980, expenses 2045.", ans: String.raw`deficit of \$$65$` },
  { level: 2, q: String.raw`Using 50/30/20 with net income \$$2850$, find the amounts for needs, wants and savings.`, recap: "50/30/20 on \\$2850.", ans: String.raw`\$$1425$, \$$855$, \$$570$` },
  { level: 2, q: String.raw`Gross pay is \$$2600$ a month and deductions are $18\%$. Find the net pay.`, recap: "Net from gross with 18\\%.", ans: String.raw`\$$2132$` },
  { level: 2, q: String.raw`Yearly expenses of \$$1440$ (insurance) and \$$600$ (gifts) must be budgeted monthly. Find the monthly amount.`, recap: "Monthly share of yearly costs.", ans: String.raw`\$$170$` },
  { level: 2, q: String.raw`Ben spends \$$12$ on lunch every school day ($20$ days a month). Bringing lunch costs \$$4$ a day. How much does he save in a $10$-month school year?`, recap: "Lunch savings.", ans: String.raw`$8\times20\times10=\$1600$` },
  { level: 2, q: String.raw`To save \$$3000$ in $15$ months, how much per month? If you already have \$$600$?`, recap: "Savings goal.", ans: String.raw`\$$200$; \$$160$` },
  { level: 3, space: 6, q: String.raw`Create a monthly budget for a first apartment with net income \$$2600$: include rent, utilities, groceries, transportation, phone, insurance, entertainment, clothing and savings.
(a) Show the total and the surplus or deficit.
(b) Compare with 50/30/20.`, recap: "First-apartment budget.", ans: "answers vary; must total correctly, classify needs/wants/savings and compare percents" },
  { level: 3, space: 5, q: String.raw`Your budget from problem 9 changes: rent rises by $8\%$ and you get a raise of \$$120$ a month. Adjust the budget and explain your choices.`, recap: "Adjust for rent increase and raise.", ans: "answers vary; recompute rent × 1.08 and income + 120, rebalance wants/savings" },
  { level: 3, space: 5, q: String.raw`A student earns \$$1400$ net a month. She wants a \$$1200$ phone. Option A: save \$$200$ a month and buy it later. Option B: buy now on a plan of \$$59$ a month for $24$ months.
(a) Find the total cost of each option.
(b) How many months until she can buy with Option A?
(c) Recommend an option.`, recap: "Phone: save first vs plan.", ans: String.raw`(a) A \$$1200$ (plus HST if not included); B \$$1416$ (b) $6$ months (c) answers vary; A saves \$$216$` },
  { level: 3, space: 5, q: String.raw`Essential expenses are \$$1800$ a month and you can save \$$300$ a month in an account paying $3\%$ simple interest.
(a) How long to reach a $4$-month emergency fund (ignore interest)?
(b) Why is an emergency fund important in a budget?`, recap: "Emergency fund.", ans: String.raw`(a) $7200\div300=24$ months (b) covers job loss, repairs or illness without debt` },
  { level: 3, space: 5, q: "Track your own (or a made-up) spending for one week. Classify each item as a need or a want, convert the totals to a monthly estimate, and suggest two changes that would increase savings.", recap: "Spending diary.", ans: "answers vary; correct conversion (× 52 ÷ 12) and reasonable suggestions" },
];

export const WS = {
  code: "7.4",
  title: "Budgets",
  bigideas: String.raw`A budget compares net income with expenses so you can cover needs, afford some wants and save. Expenses are fixed or variable, needs or wants. Surplus $=$ income $-$ expenses; a negative result is a deficit. The 50/30/20 guideline (needs, wants, savings) is a useful check. Budgets must be adjusted when circumstances change: protect needs, trim wants, keep saving, and build an emergency fund.`,
  goals: ["Find net income and convert pay periods.", "Classify expenses.", "Build a budget and find the surplus or deficit.", "Compare with 50/30/20.", "Adjust a budget and plan savings goals."],
  curriculum: "F1.4, F1.1",
  vocab: [["Gross / net income", "before / after deductions"], ["Deductions", "income tax, CPP, EI"], ["Fixed / variable expense", "same each month / changes"], ["Surplus / deficit", "money left / money short"], ["Emergency fund", "savings for unexpected costs"]],
  hook: String.raw`Ask students to estimate what it costs per month to live on their own in your city: rent, food, phone, transit. Compare guesses with real listings and prices, then ask what hourly wage would cover it.`,
  concepts: [
    ["1. Income", String.raw`Budget with net pay. Monthly from weekly: $\times52\div12$; bi-weekly: $\times26\div12$; semi-monthly: $\times2$.`],
    ["2. Expenses and the 50/30/20 check", String.raw`Needs, wants and savings as percents of net income; irregular yearly costs divided by 12.
${barT({ bars: [["needs", 50], ["wants", 30], ["savings", 20]], base: 0, top: 60, step: 10, ylabel: "% of net income", color: "green" }, 4.4)}`],
    ["3. Changing circumstances", String.raw`Recompute, find the new surplus or deficit, protect needs, trim wants, keep some saving, and plan goals by dividing the amount needed by the months available.`],
  ],
  tips: ["Students often budget gross pay.", "Insist on one time period (monthly) before adding.", "Irregular expenses are the most commonly forgotten.", "Let students research real local prices.", "Discuss that 50/30/20 is a guide, not a rule."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
