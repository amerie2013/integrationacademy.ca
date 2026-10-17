// Worksheet 6.2 — One-Variable Data & Statistics (teacher edition)
import { boxT, dotT, histT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Centre of an even-sized set", q: String.raw`Daily high temperatures (°C) for a week and a day: $18, 22, 19, 25, 21, 19, 24, 20$. Find the mean, median and mode.`,
    steps: [String.raw`Sum $=168$; mean $=168\div8=21$ °C.`, String.raw`Ordered: $18, 19, 19, 20, 21, 22, 24, 25$; median $=\frac{20+21}{2}=20.5$ °C.`, String.raw`Mode $=19$ °C.`], ans: "mean 21, median 20.5, mode 19 °C" },
  { title: "Five-number summary, odd n", q: String.raw`Find the five-number summary and IQR: $31, 45, 28, 39, 50, 42, 36, 33, 47, 40, 29$.`,
    steps: [String.raw`Ordered: $28, 29, 31, 33, 36, 39, 40, 42, 45, 47, 50$; median (6th) $=39$.`, String.raw`Lower half $28, 29, 31, 33, 36$: $Q_1=31$. Upper half $40, 42, 45, 47, 50$: $Q_3=45$.`, String.raw`IQR $=14$.`], ans: String.raw`$28, 31, 39, 45, 50$; IQR $=14$` },
  { title: "Drawing the box plot", q: "Draw a box plot for Example 2.", fig: boxT({ five: [28, 31, 39, 45, 50], lo: 25, hi: 55, step: 5, showValues: true }, 7),
    steps: ["Draw a number line covering 28 to 50.", "Box from Q1 = 31 to Q3 = 45, line at the median 39.", "Whiskers to 28 and 50."], ans: "as shown" },
  { title: "Reading a box plot", q: String.raw`A box plot of commute times has min $5$, $Q_1=12$, median $18$, $Q_3=25$, max $55$ (minutes). About what percent of students commute (a) more than $18$ min, (b) between $12$ and $25$ min, (c) less than $12$ min?`,
    steps: ["(a) Half the data are above the median: 50%.", "(b) The box holds the middle half: 50%.", "(c) Below Q1: 25%."], ans: "50%, 50%, 25%" },
  { title: "Outlier test", q: String.raw`Ages of members of a chess club: $13, 14, 14, 15, 15, 16, 16, 17, 44$. Is $44$ an outlier?`,
    steps: [String.raw`Median $15$; $Q_1=\frac{14+14}{2}=14$; $Q_3=\frac{16+17}{2}=16.5$; IQR $=2.5$.`, String.raw`Upper fence $16.5+3.75=20.25$; $44>20.25$: outlier (probably the coach).`], ans: "yes" },
  { title: "Effect of an outlier", q: String.raw`For the chess club, find the mean and median with and without $44$.`,
    steps: [String.raw`With: sum $164$, mean $\approx18.2$, median $15$.`, String.raw`Without: sum $120$, mean $=15$, median $=\frac{15+15}{2}=15$.`, "The outlier raises the mean by about 3 years but does not change the median."], ans: "mean 18.2 → 15; median stays 15" },
  { title: "Mean from a frequency table", q: String.raw`Goals per game in a season: $0$ goals: $4$ games, $1$: $7$, $2$: $6$, $3$: $2$, $4$: $1$. Find the mean, median and mode.`,
    steps: [String.raw`Games $=20$; goals $=0+7+12+6+4=29$; mean $=1.45$.`, String.raw`Median: average of the 10th and 11th games; games 5–11 have 1 goal, so the median is $1$.`, "Mode: 1 goal."], ans: "mean 1.45, median 1, mode 1" },
  { title: "Estimating the mean from a histogram", q: String.raw`The histogram shows the times (min) $25$ students took to finish a test. Estimate the mean using interval midpoints.`,
    fig: histT({ bins: [[20, 30, 3], [30, 40, 9], [40, 50, 10], [50, 60, 3]], xlabel: "time (min)" }, 5.6),
    steps: [String.raw`Midpoints $25, 35, 45, 55$ with frequencies $3, 9, 10, 3$.`, String.raw`$\frac{25(3)+35(9)+45(10)+55(3)}{25}=\frac{75+315+450+165}{25}=\frac{1005}{25}=40.2$.`], ans: "about 40.2 min" },
  { title: "Comparing two data sets", q: String.raw`Team A's player heights: median $178$ cm, IQR $6$ cm. Team B: median $182$ cm, IQR $14$ cm. Write a two-sentence comparison.`,
    steps: ["Centre: Team B is taller in the middle by 4 cm.", "Spread: Team A's heights are much more consistent (IQR 6 vs 14)."], ans: "B is taller on average; A is more consistent" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the mean, median, mode and range of $6, 9, 4, 9, 12, 8, 7$.`, recap: "6, 9, 4, 9, 12, 8, 7.", ans: String.raw`mean $\approx7.86$, median $8$, mode $9$, range $8$` },
  { level: 1, q: String.raw`Find the five-number summary of $15, 22, 18, 30, 25, 19, 27, 21$.`, recap: "Eight values.", ans: String.raw`$15, 18.5, 21.5, 26, 30$` },
  { level: 1, q: String.raw`A data set has $Q_1=24$ and $Q_3=36$. Find the IQR and the outlier fences.`, recap: "Q1 = 24, Q3 = 36.", ans: String.raw`IQR $12$; fences $6$ and $54$` },
  { level: 2, q: String.raw`Draw a box plot of $3, 5, 6, 6, 7, 8, 9, 10, 12, 13, 21$ and mark any outliers.`, recap: "Box plot with an outlier.", fig: dotT({ data: [3, 5, 6, 6, 7, 8, 9, 10, 12, 13, 21], lo: 0, hi: 24, step: 2 }, 6), space: 4, ans: String.raw`$Q_1=6$, median $8$, $Q_3=12$, IQR $6$, fence $21$: $21$ is not an outlier (it is exactly on the fence); whiskers $3$ and $21$` },
  { level: 2, q: String.raw`Five marks have mean $70$. Four of them are $62, 75, 68, 80$. Find the fifth mark.`, recap: "Find the missing mark.", ans: "$65$" },
  { level: 2, q: String.raw`Shoe sizes in a class: size $7$: $3$ students, $8$: $6$, $9$: $8$, $10$: $5$, $11$: $2$. Find the mean (2 d.p.), median and mode.`, recap: "Shoe-size frequency table.", ans: String.raw`mean $213\div24\approx8.88$, median $9$, mode $9$` },
  { level: 2, q: String.raw`Explain which measure of centre a store should use for shoe sizes, and which a city should use for household incomes.`, recap: "Choosing a measure.", ans: "store: mode (most common size); incomes: median (resists very high incomes)" },
  { level: 2, q: String.raw`Two box plots: Class X min $40$, $Q_1$ $55$, median $68$, $Q_3$ $75$, max $92$; Class Y min $50$, $Q_1$ $62$, median $66$, $Q_3$ $70$, max $85$. Compare the classes.`, recap: "Compare classes X and Y.", ans: "X has a slightly higher median (68 vs 66) but much larger IQR (20 vs 8): Y is more consistent" },
  { level: 3, space: 5, q: String.raw`Create a data set of $7$ whole numbers with median $10$, mode $12$, range $9$ and mean $9$. Show that your set works.`, recap: "Build a data set.", ans: String.raw`sample: $3, 7, 8, 10, 11, 12, 12$: median $10$, mode $12$, range $9$, mean $63\div7=9$` },
  { level: 3, space: 5, q: String.raw`The mean of $10$ numbers is $14$. When one number is removed, the mean of the rest is $13$. What number was removed?`, recap: "Removed number.", ans: String.raw`$140-117=23$` },
  { level: 3, space: 5, q: String.raw`A histogram of $40$ heights has intervals $150$–$160$ ($6$), $160$–$170$ ($15$), $170$–$180$ ($13$), $180$–$190$ ($6$) cm.
(a) Estimate the mean.
(b) In which interval is the median? Explain.`, recap: "Height histogram.", ans: String.raw`(a) $\frac{155(6)+165(15)+175(13)+185(6)}{40}=\frac{6790}{40}\approx169.8$ cm (b) 20th/21st values are in $160$–$170$` },
  { level: 3, space: 5, q: String.raw`A teacher adds $5$ marks to every student's test score. Explain what happens to the mean, median, range and IQR. Then explain what happens if every score is multiplied by $1.1$.`, recap: "Adding to / scaling every value.", ans: String.raw`$+5$: mean and median $+5$; range and IQR unchanged. $\times1.1$: all four are multiplied by $1.1$` },
  { level: 3, space: 5, q: String.raw`Collect the number of minutes of screen time yesterday from at least $12$ classmates (or use: $45, 120, 90, 30, 200, 75, 60, 150, 95, 110, 80, 65$). Find the five-number summary, draw a box plot, test for outliers and write a two-sentence summary.`, recap: "Screen-time investigation.", ans: String.raw`given data: $30, 62.5, 85, 115, 200$; IQR $52.5$; fence $193.75$: $200$ is an outlier` },
];

export const WS = {
  code: "6.2",
  title: "One-Variable Data & Statistics",
  bigideas: String.raw`A data set is described by its \textbf{centre} (mean, median, mode) and its \textbf{spread} (range, interquartile range). The five-number summary --- min, $Q_1$, median, $Q_3$, max --- gives a box plot, where each section holds about a quarter of the data. Values more than $1.5\times$IQR beyond the box are outliers; they pull the mean but barely move the median. Frequency tables and histograms organize larger and continuous data sets.`,
  goals: ["Find and choose measures of centre.", "Find quartiles, IQR and the five-number summary.", "Draw and read box plots.", "Test for outliers and describe their effect.", "Use frequency tables and histograms."],
  curriculum: "D1.2, D1.3",
  vocab: [["Mean / median / mode", "average / middle / most frequent"], ["Quartiles", "medians of the lower and upper halves"], ["IQR", "$Q_3-Q_1$"], ["Outlier", "beyond $1.5\\times$IQR from the box"], ["Histogram", "touching bars for continuous intervals"]],
  hook: String.raw`Tell students the mean salary at a small company is $\$95\,000$, but nine of the ten employees earn $\$50\,000$. Ask: “Is the mean a fair description? What would be better?”`,
  concepts: [
    ["1. Centre", String.raw`Mean $=\frac{\text{sum}}{n}$; median at position $\frac{n+1}{2}$ of the ordered data; mode = most frequent.`],
    ["2. Quartiles and box plots", String.raw`Split at the median (leave it out when $n$ is odd); $Q_1$, $Q_3$ are the medians of the halves. Box from $Q_1$ to $Q_3$, line at the median, whiskers to the extremes (or to the last non-outlier).
${boxT({ five: [12, 20, 26, 31, 40], lo: 10, hi: 42, step: 4, showValues: true }, 6.5)}`],
    ["3. Outliers and frequency tables", String.raw`Fences: $Q_1-1.5\,\text{IQR}$ and $Q_3+1.5\,\text{IQR}$. Mean from a table: $\frac{\sum(\text{value}\times\text{frequency})}{\sum\text{frequency}}$; from a histogram use interval midpoints.`],
  ],
  tips: ["Insist on ordering data first.", "Students often include the median in both halves when n is odd.", "Ask for a sentence of interpretation, not just numbers.", "Histogram bars touch; bar graphs have gaps.", "Point out that the mean need not be a data value."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
