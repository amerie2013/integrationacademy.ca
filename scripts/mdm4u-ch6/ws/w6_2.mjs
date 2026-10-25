// MDM4U Worksheet 6.2 — Correlation & Linear Regression (teacher edition)
import { svgT, scatterSvg, tableSvg } from "./figT.mjs";
import { linreg, sum, mean } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const x1 = [1, 3, 4, 6, 7, 9], y1 = [5, 9, 10, 15, 16, 21];
const n1 = 6, s = { sx: sum(x1), sy: sum(y1), sxy: sum(x1.map((x, i) => x * y1[i])), sxx: sum(x1.map((x) => x * x)) }, L1 = linreg(x1, y1);
const age = [1, 2, 3, 4, 5, 6], price = [27.5, 24.1, 21.3, 18.0, 15.2, 12.4], L2 = linreg(age, price);
const lineStr = (L) => `ŷ = ${r3(L.a)}x ${L.b < 0 ? "−" : "+"} ${r3(Math.abs(L.b))}`;

const EXAMPLES = [
  { title: "Sums table", q: `Make a table of x, y, xy and x² for x: ${x1.join(", ")}; y: ${y1.join(", ")}, and find the sums.`, fig: svgT(tableSvg([["x", ...x1.map(String)], ["y", ...y1.map(String)], ["xy", ...x1.map((x, i) => String(x * y1[i]))], ["x²", ...x1.map((x) => String(x * x))]]), 7), steps: ["Multiply and square each pair, then add."], ans: `Σx = ${s.sx}, Σy = ${s.sy}, Σxy = ${s.sxy}, Σx² = ${s.sxx}` },
  { title: "Slope", q: "Find the slope a of the least-squares line for the data in example 1.", steps: [S`$a=\frac{6(${s.sxy})-${s.sx}(${s.sy})}{6(${s.sxx})-${s.sx}^2}=\frac{${n1 * s.sxy - s.sx * s.sy}}{${n1 * s.sxx - s.sx * s.sx}}$.`], ans: `a ≈ ${r3(L1.a)}` },
  { title: "Intercept", q: "Find b and write the equation.", steps: [S`$\bar x=${mean(x1)}$, $\bar y=${r3(mean(y1))}$; $b=\bar y-a\bar x$.`], ans: lineStr(L1) },
  { title: "Graphing the line", q: "Plot the data and the line.", fig: svgT(scatterSvg(P(x1, y1), { xmin: 0, xmax: 10, ymin: 0, ymax: 25, line: L1 }), 6), steps: ["Plot two points of the line, e.g. at x = 0 and x = 10."], ans: "see figure" },
  { title: "Residual", q: "Find the residual of the point (6, 15).", steps: [S`$\hat y\approx${r2(L1.a * 6 + L1.b)}$; residual $15-${r2(L1.a * 6 + L1.b)}$.`], ans: `${r2(15 - (L1.a * 6 + L1.b))}` },
  { title: "Interpreting slope", q: `A used-phone price (hundreds of dollars) against age (years) gives ${lineStr(L2)}. Interpret the slope and intercept.`, steps: ["Slope: change in price per year. Intercept: predicted price when new."], ans: `loses about ${Math.abs(r2(L2.a * 100))} dollars per year; about ${r2(L2.b * 100)} dollars new` },
  { title: "From summary sums", q: "n = 10, Σx = 50, Σy = 300, Σxy = 1640, Σx² = 290. Find the regression line.", steps: [S`$a=\frac{16400-15000}{2900-2500}=3.5$; $b=30-3.5(5)=12.5$.`], ans: "ŷ = 3.5x + 12.5" },
  { title: "Slope from r", q: "r = −0.75, $s_x=6$, $s_y=16$, x̄ = 20, ȳ = 90. Find the regression line.", steps: [S`$a=-0.75\cdot\frac{16}{6}=-2$; $b=90+40=130$.`], ans: "ŷ = −2x + 130" },
  { title: "Predicting", q: "Use ŷ = 3.5x + 12.5 to predict y at x = 6.", steps: [S`$21+12.5$.`], ans: "33.5" },
];

const PROBLEMS = [
  { level: 1, q: "For ŷ = 2.4x + 7, predict y at x = 5.", ans: "19" },
  { level: 1, q: "Find the residual of (5, 17) for ŷ = 2.4x + 7.", ans: "−2" },
  { level: 1, q: "A line has a = 1.5, x̄ = 8 and ȳ = 20. Find b.", ans: "8" },
  { level: 2, q: "Find the regression line for x: 2, 4, 6, 8; y: 3, 7, 8, 12.", ans: lineStr(linreg([2, 4, 6, 8], [3, 7, 8, 12])) },
  { level: 2, q: "n = 5, Σx = 25, Σy = 80, Σxy = 445, Σx² = 155. Find the regression line.", ans: "ŷ = 1.5x + 8.5" },
  { level: 2, q: "Interpret ŷ = 0.08x + 1.2, where x is kilometres driven and y is the fuel cost in dollars.", ans: "8 cents per km plus a fixed 1.20 dollars" },
  { level: 2, q: "Read the line from the graph and write its equation.", fig: svgT(scatterSvg([[1, 6], [2, 7.5], [4, 11], [5, 12], [7, 16]], { xmin: 0, xmax: 8, ymin: 0, ymax: 20, line: { a: 1.6, b: 4.6 } }), 5.5), ans: "ŷ ≈ 1.6x + 4.6" },
  { level: 2, q: "r = 0.5, $s_x=2$, $s_y=8$. Find the slope.", ans: "2" },
  { level: 3, space: 4.5, q: "Show that the least-squares line passes through (x̄, ȳ) by using b = ȳ − a x̄.", ans: "at x = x̄: ŷ = a x̄ + ȳ − a x̄ = ȳ" },
  { level: 3, space: 4.5, q: "For a data set r = 0.6, x̄ = 50, $s_x=10$, ȳ = 70, $s_y=15$. Find the regression of y on x and of x on y. Are they the same line?", ans: "ŷ = 0.9x + 25; x̂ = 0.4y + 22; different lines" },
  { level: 3, space: 4.5, q: "A line through (x̄, ȳ) = (4, 18) has residuals 2, −1, −3, x and 0.5. Find x and explain why it must take this value.", ans: "1.5; residuals of a least-squares line add to 0" },
  { level: 3, space: 4.5, q: "Prices in a data set are converted from dollars to cents. What happens to the slope, the intercept and r?", ans: "slope and intercept × 100; r unchanged" },
  { level: 3, space: 4.5, q: "Measure the length of a spring with 0, 1, 2, 3, 4 and 5 identical weights attached (or use made-up data), find the regression line and interpret the slope.", ans: "answers vary; slope = extension per weight" },
];

export const WS = {
  code: "6.2",
  title: "Correlation & Linear Regression",
  bigideas: S`The least-squares line $\hat y=ax+b$ minimizes the sum of squared residuals. $a=\frac{n\sum xy-\sum x\sum y}{n\sum x^2-(\sum x)^2}$, $b=\bar y-a\bar x$, and also $a=r\frac{s_y}{s_x}$. The line passes through $(\bar x,\bar y)$ and its residuals add to 0.`,
  goals: ["Compute a and b.", "Find residuals.", "Interpret slope and intercept.", "Use summary statistics."],
  curriculum: "D2.2, D2.3",
  vocab: [["Least squares", "minimizes the sum of squared residuals"], ["Residual", "y minus y-hat"], ["Slope", "change in y-hat per unit x"], ["Intercept", "y-hat at x = 0"]],
  hook: "Many lines can be drawn through a cloud of points. Which one is best, and how can everyone agree on it?",
  concepts: [
    ["1. Residuals", S`${svgT(scatterSvg(P(x1, y1), { xmin: 0, xmax: 10, ymin: 0, ymax: 25, line: L1, residuals: true }), 5.4)}`],
    ["2. Formulas", S`$a$ from the sums; $b=\bar y-a\bar x$.`],
    ["3. Meaning", "Slope: rate in context. Intercept: value at x = 0."],
  ],
  tips: ["Find a before b.", "Keep extra decimals until the end.", "Residual = observed − predicted.", "Give units when interpreting.", "Check with technology."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
