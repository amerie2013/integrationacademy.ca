// Worksheet 7.2 — Appreciation & Depreciation (teacher edition). Money in LaTeX is written \$.
import { scatterT, planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Percent increase", q: String.raw`A rare trading card bought for \$$80$ is now worth \$$116$. Find the percent increase.`,
    steps: [String.raw`Increase $=116-80=\$36$.`, String.raw`$\frac{36}{80}=0.45=45\%$.`], ans: "45\\%" },
  { title: "Appreciation over several years", q: String.raw`A condo worth \$$520\,000$ appreciates $3.5\%$ per year. Find its value in $6$ years.`,
    steps: [String.raw`$V=520\,000(1.035)^6$.`, String.raw`$\approx520\,000\times1.22926\approx\$639\,213$.`], ans: String.raw`about \$$639\,213$` },
  { title: "Depreciation table", q: String.raw`A \$$28\,000$ truck depreciates $20\%$ a year. Make a table of its value for years $0$ to $3$.`,
    steps: [String.raw`Year 1: $28\,000\times0.8=22\,400$.`, String.raw`Year 2: $17\,920$. Year 3: $14\,336$.`, "Each year's loss is smaller: 5600, 4480, 3584."], ans: String.raw`\$$28\,000$, \$$22\,400$, \$$17\,920$, \$$14\,336$` },
  { title: "Straight-line depreciation", q: String.raw`Office furniture costing \$$6000$ is depreciated straight-line to \$$0$ over $8$ years. Write a model and find its value after $5$ years.`,
    steps: [String.raw`Yearly loss $=6000\div8=\$750$; $V=6000-750n$.`, String.raw`$V(5)=6000-3750=\$2250$.`], ans: String.raw`\$$2250$` },
  { title: "Comparing the two methods", q: String.raw`For a \$$10\,000$ machine, compare straight-line depreciation of \$$1500$ per year with $20\%$ per year over $4$ years.`,
    fig: scatterT({ pts: [[0, 10000], [1, 8000], [2, 6400], [3, 5120], [4, 4096]], view: { xmin: 0, xmax: 5, ymin: 0, ymax: 11000 }, step: { x: 1, y: 2000 }, xlabel: "years", ylabel: "value", line: { m: -1500, b: 10000, dash: true } }, 5.5),
    steps: [String.raw`Straight-line: $10\,000-4(1500)=\$4000$.`, String.raw`Percentage: $10\,000(0.8)^4=\$4096$.`, "Similar after 4 years, but the percentage curve loses more early and less later."], ans: String.raw`\$$4000$ vs \$$4096$` },
  { title: "Finding the rate", q: String.raw`A car bought for \$$25\,000$ is worth \$$16\,000$ two years later. Find the constant yearly depreciation rate.`,
    steps: [String.raw`$25\,000(1-r)^2=16\,000\Rightarrow(1-r)^2=0.64$.`, String.raw`$1-r=0.8\Rightarrow r=20\%$.`], ans: "20\\% per year" },
  { title: "Up then down", q: String.raw`A share price rises $25\%$ and then falls $20\%$. What is the overall change?`,
    steps: [String.raw`$1.25\times0.80=1.00$.`, "No overall change — the 20% fall is taken from a larger value."], ans: "0\\% (back to the start)" },
  { title: "Doubling time", q: String.raw`A collectible appreciates $8\%$ per year. About how many years until its value doubles? Check with the rule of $72$.`,
    steps: [String.raw`$1.08^9\approx1.999$, so about $9$ years.`, String.raw`Rule of 72: $72\div8=9$ years.`], ans: "about 9 years" },
  { title: "Factors and decisions", q: "Explain why a new car loses value faster than a classic car, and how that should affect a buying decision.",
    steps: ["New cars depreciate quickly: new models, mileage, wear, the “new” premium is lost on purchase.", "Rare classic cars in good condition can appreciate because supply is fixed and collectors want them.", "Buying a 2–3-year-old car avoids the steepest depreciation."], ans: "depreciation is steepest early; consider buying used" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Write the growth or decay factor for (a) a $7\%$ increase (b) a $7\%$ decrease (c) a $35\%$ decrease.`, recap: "Factors for +7\\%, −7\\%, −35\\%.", ans: "(a) 1.07 (b) 0.93 (c) 0.65" },
  { level: 1, q: String.raw`A \$$900$ phone loses $30\%$ of its value in the first year. What is it worth after one year?`, recap: "\\$900 phone, −30\\%.", ans: String.raw`\$$630$` },
  { level: 1, q: String.raw`A \$$2000$ painting appreciates $5\%$ per year. Find its value after $2$ years.`, recap: "\\$2000 painting, +5\\%.", ans: String.raw`\$$2205$` },
  { level: 2, q: String.raw`A \$$35\,000$ car depreciates $16\%$ a year. Find its value after $5$ years.`, recap: "\\$35 000 car, −16\\%, 5 years.", ans: String.raw`$\approx\$14\,637.42$` },
  { level: 2, q: String.raw`A house bought for \$$350\,000$ is worth \$$385\,875$ two years later. Find the yearly appreciation rate.`, recap: "House rate from two values.", ans: String.raw`$(1+r)^2=1.1025$: $5\%$` },
  { level: 2, q: String.raw`Equipment worth \$$12\,000$ depreciates straight-line by \$$1600$ a year. When will it be worth \$$4000$?`, recap: "Straight-line to \\$4000.", ans: "after 5 years" },
  { level: 2, q: String.raw`A bike depreciates $25\%$ a year. After how many whole years is it worth less than half its price?`, recap: "When below half.", ans: String.raw`$0.75^2=0.5625$, $0.75^3\approx0.42$: after $3$ years` },
  { level: 2, q: String.raw`A value falls $40\%$ and then rises $40\%$. Find the overall percent change.`, recap: "−40\\% then +40\\%.", ans: String.raw`$0.6\times1.4=0.84$: $-16\%$` },
  { level: 3, space: 5, q: String.raw`A \$$1500$ laptop can be depreciated by \$$300$ a year (straight-line) or by $30\%$ a year.
(a) Make a table of values for years $0$–$5$ for both.
(b) In which year is the straight-line value first lower?
(c) Which model fits laptops better? Explain.`, recap: "Laptop: two depreciation models.", ans: String.raw`(a) SL: $1500, 1200, 900, 600, 300, 0$; %: $1500, 1050, 735, 514.50, 360.15, 252.10$ (b) year 4 ($300<360.15$; before that straight-line is higher) (c) percentage: value never reaches zero and drops fastest early` },
  { level: 3, space: 5, q: String.raw`Two investments of \$$5000$: A appreciates $6\%$ per year; B appreciates \$$350$ per year.
(a) Write a model for each.
(b) Which is worth more after $5$ years? After $15$ years?
(c) Explain why the answer changes.`, recap: "Percentage vs fixed appreciation.", ans: String.raw`(a) $A=5000(1.06)^t$; $B=5000+350t$ (b) 5 yr: A \$$6691.13$, B \$$6750$; 15 yr: A \$$11\,982.79$, B \$$10\,250$ (c) A's gains grow each year (compounding)` },
  { level: 3, space: 5, q: String.raw`A car loses $15\%$ of its value each year. Sam can buy it new for \$$40\,000$ or at $3$ years old.
(a) What is the 3-year-old car worth?
(b) How much depreciation does Sam avoid by buying used?
(c) Give one reason someone might still buy new.`, recap: "New vs 3-year-old car.", ans: String.raw`(a) $40\,000(0.85)^3=\$24\,565$ (b) \$$15\,435$ (c) warranty, reliability, latest safety features, choice of options` },
  { level: 3, space: 5, q: String.raw`A painting appreciated from \$$1200$ to \$$2400$ in $12$ years at a constant rate.
(a) Use the rule of $72$ to estimate the rate.
(b) Check by computing $1.06^{12}$.
(c) Predict its value $6$ years later.`, recap: "Painting doubling in 12 years.", ans: String.raw`(a) $72\div12=6\%$ (b) $1.06^{12}\approx2.012$ ✓ (c) $2400(1.06)^6\approx\$3404.45$` },
  { level: 3, space: 5, q: "Choose an item you own or want (phone, bike, game console, sneakers). Research or estimate its price new and its resale value after one or two years. Find the yearly depreciation rate and describe the factors that caused it.", recap: "Your own depreciation study.", ans: "answers vary; must compute a rate from two values and name factors (new models, condition, demand)" },
];

export const WS = {
  code: "7.2",
  title: "Appreciation & Depreciation",
  bigideas: String.raw`Values that change by a percentage each period are modelled with repeated multiplication: appreciation $V=V_0(1+r)^n$ and depreciation $V=V_0(1-r)^n$. Because the percent applies to the current value, gains grow and losses shrink over time --- unlike straight-line depreciation, which removes the same amount every year. Supply, demand, condition, age and technology explain why some things appreciate and others depreciate.`,
  goals: ["Calculate percent increase and decrease.", "Use growth and decay factors.", "Compare straight-line and percentage depreciation.", "Find a rate from two values.", "Explain the factors behind changes in value."],
  curriculum: "F1.2",
  vocab: [["Appreciation", "increase in value"], ["Depreciation", "decrease in value"], ["Growth factor", "$1+r$"], ["Decay factor", "$1-r$"], ["Straight-line", "the same dollar loss each year"]],
  hook: String.raw`Show the price of a new phone and the price of the same model on a resale site one year later. Ask: “What percent did it lose? Will it lose the same dollar amount next year?”`,
  concepts: [
    ["1. Factors", String.raw`Increase by $r$: $\times(1+r)$; decrease by $r$: $\times(1-r)$; over $n$ years, raise the factor to the power $n$. Percent changes do not cancel: $+20\%$ then $-20\%$ gives $\times0.96$.`],
    ["2. Two depreciation models", String.raw`Straight-line $V=V_0-dn$ (a line, reaches zero). Percentage $V=V_0(1-r)^n$ (a curve, never zero).
${planeT({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 22000 }, lines: [{ m: -2500, b: 20000, color: "gray", dash: true }], curves: [{ f: (t) => 20000 * 0.8 ** t, color: "red" }], step: { x: 1, y: 4000 }, xlabel: "years", ylabel: "value" }, 5.5)}`],
    ["3. Rates and doubling", String.raw`From two values: $(1\pm r)^n=\frac{V}{V_0}$. Doubling time $\approx\frac{72}{\text{rate in }\%}$ years (rule of 72).`],
  ],
  tips: ["Students use 0.2 instead of 0.8 for a 20\\% loss — insist on writing the factor.", "Show a table to make the shrinking yearly loss visible.", "Discuss why “up 50\\% then down 50\\%” loses money.", "Use local housing or car prices for context.", "Link to exponential relations from Chapter 6."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
