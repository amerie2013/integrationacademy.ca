// Worksheet 1.9 — Rates, Percentages & Percent Change (teacher edition)
import { pointsGraph, percentBar, doubleLine } from "./tikz.mjs";
import { PROBLEMS } from "./p1_9.mjs";

export const WS = {
  code: "1.9",
  title: "Rates, Percentages & Percent Change",
  bigideas: String.raw`A \textbf{rate} compares quantities with \emph{different} units (km/h, dollars/kg); a \textbf{unit rate} is “per $1$”. A \textbf{rate of change} has a sign: positive when a quantity rises, negative when it falls. A \textbf{percent} is a ratio out of $100$, and every percent question is the proportion $\frac{\text{part}}{\text{whole}}=\frac{\%}{100}$. Percent changes are done in one step with a \textbf{multiplier}.`,
  goals: [
    "Write rates and unit rates and use them to compare prices and speeds.",
    "Calculate and interpret positive and negative rates of change, including from a graph.",
    "Convert among fractions, decimals and percents (including percents above 100% and below 1%).",
    "Find a percent of a number, a percent, or the whole, using proportions.",
    "Find percent increase/decrease and apply discounts, taxes and successive changes with multipliers.",
  ],
  curriculum: "B3.3, B3.5; links to F1",
  book: "Nelson Principles of Mathematics 9, Ch. 1 (proportional reasoning), Ch. 3 (rate of change)",
  vocab: [
    ["Rate / unit rate", "a comparison of different units / the rate for one unit: $72$ km/h"],
    ["Rate of change", "$\\frac{\\text{change in quantity}}{\\text{change in time}}$; its sign shows rising or falling"],
    ["Percent", "per hundred: $35\\%=\\frac{35}{100}=0.35$"],
    ["Multiplier", "the number that applies a percent change: $+13\\%\\to\\times1.13$, $-25\\%\\to\\times0.75$"],
  ],
  hook: String.raw`Bring two real flyers (or display them): cereal at $4.25$ dollars for $500$ g and the “family size” at $6.00$ dollars for $750$ g. Ask which is the better buy, and how sure they are. Then show a jacket advertised at “$35\%$ off” and ask what it really costs after $13\%$ HST. Unit rates and multipliers answer both questions --- skills every shopper needs.`,
  concepts: [
    ["1. Rates and unit rates", String.raw`Divide so the second quantity is $1$: $\frac{19.20\text{ dollars}}{12\text{ L}}=1.60$ dollars/L. On a distance--time graph, the unit rate (speed) is the steepness of the line:
${pointsGraph({ pts: [[0, 0], [20, 100], [40, 200], [60, 300], [80, 400]], xmin: 0, xmax: 85, ymin: 0, ymax: 420, xlabel: "time (s)", ylabel: "distance (m)", xtick: "0,20,...,80", ytick: "0,100,...,400", height: 5, caption: "Runner A: 400 m in 80 s, so 5 m/s --- the line rises 100 m every 20 s." })}`],
    ["2. Signed rates of change", String.raw`rate of change $=\dfrac{\text{final}-\text{initial}}{\text{time}}$. A pond's level falls from $120$ cm to $84$ cm in $12$ days: $\frac{84-120}{12}=\frac{-36}{12}=-3$ cm/day.
${pointsGraph({ pts: [[0, 120], [3, 111], [6, 102], [9, 93], [12, 84]], xmin: 0, xmax: 13, ymin: 70, ymax: 125, xlabel: "day", ylabel: "level (cm)", xtick: "0,3,...,12", ytick: "70,80,...,120", height: 4.8, caption: "A falling line has a negative rate of change." })}
Positive rate: increasing. Negative rate: decreasing. Zero: no change. (This is the integer sign rule from 1.3: negative change $\div$ positive time $=$ negative rate.)`],
    ["3. Fractions, decimals and percents", String.raw`\begin{center}\begin{tabular}{lll}\toprule Fraction & Decimal & Percent\\\midrule $\frac{3}{8}$ & $0.375$ & $37.5\%$\\ $\frac{7}{5}$ & $1.4$ & $140\%$\\ $\frac{9}{200}$ & $0.045$ & $4.5\%$\\ $\frac{1}{400}$ & $0.0025$ & $0.25\%$\\\bottomrule\end{tabular}\end{center}
Percent $\to$ decimal: divide by $100$. Decimal $\to$ percent: multiply by $100$. Fraction $\to$ percent: divide, then multiply by $100$.`],
    ["4. The three kinds of percent question", String.raw`${percentBar(72, 25, { caption: "$18$ out of $72$ is $25\\%$: the shaded part is one quarter of the bar." })}
${doubleLine(18, 25, 4, { top: "amount", bottom: "percent", mark: 1, caption: "Double number line: $18\\leftrightarrow25\\%$, so $72\\leftrightarrow100\\%$." })}
\textbf{Part:} $25\%$ of $72$ is $0.25\times72=18$. \quad \textbf{Percent:} $\frac{18}{72}=0.25=25\%$. \quad \textbf{Whole:} $18$ is $25\%$ of $w$: $0.25w=18$, $w=72$.`],
    ["5. Percent change and multipliers", String.raw`percent change $=\dfrac{\text{new}-\text{original}}{\text{original}}\times100\%$ (negative $=$ decrease).\\
Increase by $r\%$: $\times\left(1+\frac{r}{100}\right)$; decrease by $r\%$: $\times\left(1-\frac{r}{100}\right)$. Successive changes multiply: $35\%$ off then $13\%$ HST is $\times0.65\times1.13$.\\
\textbf{A rise and an equal fall do not cancel}: up $10\%$ then down $10\%$ is $\times1.1\times0.9=\times0.99$.`],
  ],
  tips: [
    String.raw`Percent change is divided by the \emph{original} value.`,
    String.raw`Compare unit prices in the same unit (convert mL to L, g to kg first).`,
    String.raw`Do not round in the middle of a money calculation; round once at the end.`,
    String.raw`Students often write $0.5\%$ as $0.5$ --- it is $0.005$.`,
    String.raw`Rates keep their units (km/h); ratios have none.`,
  ],
  examples: [
    { title: "Unit price", q: String.raw`$12$ L of gas costs $19.20$ dollars. Find the unit price.`, steps: [String.raw`$19.20\div12=1.60$.`], ans: "$1.60$ dollars/L" },
    { title: "Better buy", q: String.raw`Cereal: $500$ g for $4.25$ dollars or $750$ g for $6.00$ dollars. Which is the better buy?`, steps: [String.raw`Per $100$ g: $4.25\div5=0.85$ dollars.`, String.raw`Per $100$ g: $6.00\div7.5=0.80$ dollars.`], ans: "the 750 g box" },
    { title: "Comparing speeds", q: String.raw`Runner A covers $400$ m in $80$ s; runner B covers $300$ m in $50$ s. Who is faster?`, steps: [String.raw`A: $400\div80=5$ m/s.`, String.raw`B: $300\div50=6$ m/s.`], ans: "B (6 m/s vs 5 m/s)" },
    { title: "A negative rate", q: String.raw`A pond's level falls from $120$ cm to $84$ cm over $12$ days. Find the rate of change and predict the level after $20$ days if the rate stays the same.`, steps: [String.raw`Rate $=\frac{84-120}{12}=-3$ cm/day.`, String.raw`After $20$ days: $120+20(-3)=60$ cm.`], ans: String.raw`$-3$ cm/day; $60$ cm` },
    { title: "Conversions", q: String.raw`Write $\frac{3}{8}$ as a percent, $0.045$ as a percent, and $140\%$ as a decimal.`, steps: [String.raw`$3\div8=0.375=37.5\%$.`, String.raw`$0.045\times100=4.5$, so $0.045$ is $4.5\%$.`, String.raw`$140\div100=1.4$.`], ans: String.raw`$37.5\%$, $4.5\%$, $1.4$` },
    { title: "Finding the percent", q: String.raw`Ana answered $18$ of $72$ survey questions. What percent is that?`, fig: percentBar(72, 25), steps: [String.raw`$\frac{18}{72}=\frac14=0.25$.`], ans: String.raw`$25\%$` },
    { title: "Finding the whole", q: String.raw`$45$ students walk to school. They are $18\%$ of the school. How many students attend?`, steps: [String.raw`$0.18\times w=45$.`, String.raw`$w=45\div0.18=250$.`], ans: "$250$ students" },
    { title: "Percent change both ways", q: String.raw`A price rises from $80$ to $92$ dollars, then falls back to $80$. Find both percent changes.`, steps: [String.raw`Up: $\frac{92-80}{80}=\frac{12}{80}=15\%$.`, String.raw`Down: $\frac{80-92}{92}=\frac{-12}{92}\approx-13.0\%$.`, String.raw`The same $12$-dollar change is a smaller percent of the larger original.`], ans: String.raw`$+15\%$ and about $-13.0\%$` },
    { title: "Discount, then HST", q: String.raw`A $240$-dollar bike is $35\%$ off, then $13\%$ HST is added. Find the final price.`, steps: [String.raw`$240\times0.65=156$.`, String.raw`$156\times1.13=176.28$.`], ans: "$176.28$ dollars" },
  ],
  problems: PROBLEMS,
};
