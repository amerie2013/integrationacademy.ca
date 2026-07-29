// ALG1 Chapter 6 — Exponential Functions & Bivariate Data. ~50 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);

// ── 6.1 Exponential Growth and Decay Models ──────────────────
function g61() {
  const q = [];
  for (let i = 0; i < 8; i++) { const a = ri(2, 10) * 10, b = pick([2, 3, 5, 10]), x = ri(1, 3); q.push(num("easy", `For $y = ${a}\\cdot ${b}^x$, find $y$ when $x = ${x}$.`, a * b ** x, 0)); }
  q.push(mc("easy", "In $y = a\\,b^x$, $a$ is the…", ["starting amount", "growth rate", "exponent", "slope"], 0));
  q.push(mc("easy", "$y = a\\,b^x$ is growth when…", ["$b > 1$", "$b < 1$", "$b = 0$", "$a < 0$"], 0));
  q.push(mc("easy", "$y = a\\,b^x$ is decay when…", ["$0 < b < 1$", "$b > 1$", "$b = 1$", "$a > 1$"], 0));
  q.push(tf("easy", "Exponential functions multiply by the same factor each step.", true));
  q.push(mc("easy", "Is $y = 50\\cdot(0.8)^x$ growth or decay?", ["decay", "growth", "linear", "constant"], 0));
  q.push(fill("easy", "For $y = 30\\cdot 3^x$, the starting amount is ___.", ["30"]));
  q.push(num("easy", "For $y = 100\\cdot 2^x$, find $y$ at $x = 4$.", 1600, 0));
  q.push(mc("medium", "A town of 500 grows 10% per year. The model is…", ["$y = 500(1.1)^x$", "$y = 500(0.1)^x$", "$y = 500 + 1.1x$", "$y = 500(1.01)^x$"], 0));
  q.push(mc("medium", "A $2000 car loses 15% per year. The model is…", ["$y = 2000(0.85)^x$", "$y = 2000(1.15)^x$", "$y = 2000(0.15)^x$", "$y = 2000 - 15x$"], 0));
  q.push(num("medium", "For $y = 2000(0.85)^x$, find the value at $x = 2$ (dollars).", 1445, 1));
  q.push(mc("medium", "12% growth gives $b = $", ["$1.12$", "$0.88$", "$0.12$", "$12$"], 0));
  q.push(mc("medium", "12% decay gives $b = $", ["$0.88$", "$1.12$", "$0.12$", "$1.88$"], 0));
  q.push(num("medium", "400 bacteria double each hour. How many after 3 hours?", 3200, 0));
  q.push(tf("medium", "A savings account earning fixed interest each year is an exponential model.", true));
  q.push(mc("medium", "A $5000 investment grows 8% per year. The model is…", ["$y = 5000(1.08)^x$", "$y = 5000(0.08)^x$", "$y = 5000 + 8x$", "$y = 5000(8)^x$"], 0));
  q.push(mc("hard", "For $y = 200(1.05)^x$, $y$ at $x = 3$ is about…", ["$231.5$", "$230$", "$215$", "$630$"], 0));
  q.push(num("hard", "A $\\$1000$ balance grows 100% per year (doubles). Value after 3 years?", 8000, 0));
  q.push(mc("hard", "Half-life: 80 g halves each hour. After 2 hours…", ["20 g", "40 g", "160 g", "10 g"], 0));
  q.push(num("hard", "For $y = 3\\cdot 2^x$, find $y$ at $x = 5$.", 96, 0));
  q.push(tf("hard", "In decay, the base $b$ is between 0 and 1.", true));
  q.push(mc("hard", "Which grows fastest for large $x$?", ["$y = 2^x$", "$y = 100x$", "$y = x^2$", "$y = 50x + 20$"], 0));
  q.push(fill("hard", "For $y = a\\,b^x$, the value at $x = 0$ is ___ (in terms of $a$).", ["a"]));
  return q;
}

// ── 6.2 Comparing Linear, Quadratic & Exponential ────────────
function g62() {
  const q = [];
  q.push(mc("easy", "Linear data has a constant…", ["difference", "ratio", "second difference", "product"], 0));
  q.push(mc("easy", "Exponential data has a constant…", ["ratio", "difference", "second difference", "sum"], 0));
  q.push(mc("easy", "Quadratic data has constant…", ["second differences", "first differences", "ratios", "products"], 0));
  q.push(mc("easy", "$y$: $3, 7, 11, 15$. Which model?", ["linear", "quadratic", "exponential", "none"], 0));
  q.push(mc("easy", "$y$: $2, 6, 18, 54$. Which model?", ["exponential", "linear", "quadratic", "none"], 0));
  q.push(mc("easy", "$y$: $1, 4, 9, 16$. Which model?", ["quadratic", "linear", "exponential", "none"], 0));
  q.push(tf("easy", "'Add the same each step' describes a linear pattern.", true));
  q.push(tf("easy", "'Multiply by the same each step' describes exponential.", true));
  q.push(mc("medium", "$y$: $5, 8, 11, 14$. Which model?", ["linear", "exponential", "quadratic", "none"], 0));
  q.push(mc("medium", "$y$: $3, 6, 12, 24$. Which model?", ["exponential", "linear", "quadratic", "none"], 0));
  q.push(mc("medium", "$y$: $2, 5, 10, 17$. Which model?", ["quadratic", "linear", "exponential", "none"], 0));
  q.push(mc("medium", "A car depreciates 12% per year. Which model?", ["exponential", "linear", "quadratic", "none"], 0));
  q.push(mc("medium", "You save $20 every week. Which model?", ["linear", "exponential", "quadratic", "none"], 0));
  q.push(mc("medium", "A balance earns 5% interest yearly. Which model?", ["exponential", "linear", "quadratic", "none"], 0));
  q.push(tf("medium", "For large $x$, exponential growth overtakes linear and quadratic.", true));
  q.push(mc("medium", "$y$: $1, 3, 9, 27$. The constant ratio is…", ["3", "2", "6", "9"], 0));
  q.push(mc("hard", "At $x = 10$: $y = 10x$ gives 100, $y = 2^x$ gives…", ["1024", "100", "20", "512"], 0));
  q.push(mc("hard", "Which table is quadratic? (first diffs then check second)", ["$0, 1, 4, 9$", "$1, 2, 4, 8$", "$2, 4, 6, 8$", "$3, 3, 3, 3$"], 0));
  q.push(mc("hard", "Which table is exponential?", ["$1, 2, 4, 8$", "$1, 4, 9, 16$", "$2, 5, 8, 11$", "$0, 1, 2, 3$"], 0));
  q.push(mc("hard", "Which table is linear?", ["$4, 7, 10, 13$", "$1, 2, 4, 8$", "$1, 4, 9, 16$", "$2, 6, 18, 54$"], 0));
  q.push(tf("hard", "If first differences are constant, the relationship is linear.", true));
  q.push(mc("hard", "Which grows fastest eventually?", ["exponential", "quadratic", "linear", "constant"], 0));
  q.push(fill("hard", "A constant ___ signals an exponential relationship.", ["ratio"]));
  return q;
}

// ── 6.3 Scatter Plots, Line of Best Fit & Residuals ──────────
function g63() {
  const q = [];
  for (let i = 0; i < 6; i++) { const m = ri(2, 6), b = ri(0, 10), x = ri(2, 9); q.push(num("easy", `A best-fit line is $y = ${m}x + ${b}$. Predict $y$ when $x = ${x}$.`, m * x + b, 0)); }
  q.push(mc("easy", "As study hours rise and scores rise, the correlation is…", ["positive", "negative", "none", "zero"], 0));
  q.push(mc("easy", "As temperature rises and hot-drink sales fall, the correlation is…", ["negative", "positive", "none", "strong positive"], 0));
  q.push(mc("easy", "A residual equals…", ["actual − predicted", "predicted − slope", "actual + predicted", "slope × x"], 0));
  q.push(tf("easy", "Correlation does not prove causation.", true));
  q.push(mc("easy", "A line of best fit is used to…", ["make predictions", "count points", "find the mean only", "sort data"], 0));
  q.push(fill("easy", "A scatter plot shows ___-variable data.", ["two", "2"]));
  q.push(mc("medium", "Best-fit $y = 5x + 50$. Predict at $x = 6$.", ["80", "56", "300", "55"], 0));
  q.push(num("medium", "Predicted 80, actual 85. Find the residual.", 5, 0));
  q.push(num("medium", "Predicted 23, actual 20. Find the residual.", -3, 0));
  q.push(mc("medium", "Data spans $x = 1$ to $8$. Predicting at $x = 5$ is…", ["interpolation", "extrapolation", "residual", "correlation"], 0));
  q.push(mc("medium", "Data spans $x = 0$ to $50$. Predicting at $x = 100$ is…", ["extrapolation", "interpolation", "a residual", "a mean"], 0));
  q.push(mc("medium", "In $y = 5x + 50$, the slope means…", ["+5 per unit of $x$", "+50 per unit", "the intercept", "the residual"], 0));
  q.push(tf("medium", "A positive residual means the point is above the line.", true));
  q.push(num("medium", "Best-fit $y = 2x + 3$. Predict at $x = 10$.", 23, 0));
  q.push(mc("hard", "In $y = -4x + 60$, as $x$ increases by 1, $y$…", ["drops by 4", "rises by 4", "drops by 60", "stays"], 0));
  q.push(num("hard", "Predicted 50, actual 44. Residual?", -6, 0));
  q.push(mc("hard", "Small, balanced residuals indicate…", ["a good fit", "a poor fit", "no correlation", "extrapolation"], 0));
  q.push(mc("hard", "Which is more reliable?", ["interpolation", "extrapolation", "both equal", "neither"], 0));
  q.push(tf("hard", "A strong correlation still might not mean one variable causes the other.", true));
  q.push(num("hard", "Best-fit $y = 3x - 2$. Predict at $x = 12$.", 34, 0));
  q.push(mc("hard", "No pattern in a scatter plot means…", ["no correlation", "perfect correlation", "positive", "negative"], 0));
  q.push(fill("hard", "Predicting outside the data range is called ___.", ["extrapolation"]));
  return q;
}

// ── 6.4 Two-Way Frequency Tables & Categorical Data ──────────
function g64() {
  const q = [];
  const T = "Survey: Grade 9 (18 play a sport, 12 do not), Grade 10 (22 play, 8 do not). ";
  q.push(num("easy", T + "How many Grade 9 students play a sport?", 18, 0));
  q.push(num("easy", T + "How many Grade 10 students do not play a sport?", 8, 0));
  q.push(num("easy", T + "How many students are in Grade 9 in total?", 30, 0));
  q.push(num("easy", T + "How many students play a sport in total?", 40, 0));
  q.push(num("easy", T + "How many students are surveyed in total?", 60, 0));
  q.push(mc("easy", "A single inner-cell count is a ___ frequency.", ["joint", "marginal", "relative", "conditional"], 0));
  q.push(mc("easy", "A row or column total is a ___ frequency.", ["marginal", "joint", "relative", "conditional"], 0));
  q.push(tf("easy", "Categorical data sorts items into groups.", true));
  q.push(num("medium", T + "How many students do not play a sport in total?", 20, 0));
  q.push(num("medium", T + "How many students are in Grade 10 in total?", 30, 0));
  q.push(mc("medium", T + "What fraction of ALL students are Grade 9 athletes?", ["$\\tfrac{18}{60} = 0.30$", "$\\tfrac{18}{30}$", "$\\tfrac{18}{40}$", "$\\tfrac{30}{60}$"], 0));
  q.push(mc("medium", T + "Among Grade 9 students, what fraction play a sport?", ["$\\tfrac{18}{30} = 0.60$", "$\\tfrac{18}{60}$", "$\\tfrac{18}{40}$", "$\\tfrac{12}{30}$"], 0));
  q.push(mc("medium", "A count divided by the grand total is a…", ["relative frequency", "joint count", "marginal count", "residual"], 0));
  q.push(tf("medium", "A marginal frequency is found in the margins (totals) of the table.", true));
  q.push(num("medium", T + "What fraction of all students play a sport? Enter as a decimal (2 dp).", 0.67, 0.01));
  q.push(mc("hard", T + "Among Grade 10, what fraction play a sport?", ["$\\tfrac{22}{30} \\approx 0.73$", "$\\tfrac{22}{40}$", "$\\tfrac{22}{60}$", "$\\tfrac{8}{30}$"], 0));
  q.push(mc("hard", "Grade 9 play-rate is 60%, Grade 10 is 73%. This suggests…", ["an association", "no association", "causation", "a residual"], 0));
  q.push(num("hard", T + "Among Grade 10 students, how many (of 30) do NOT play? Enter the percent.", 27, 1, "8/30 ≈ 27%."));
  q.push(mc("hard", "A conditional relative frequency divides a cell by a…", ["row or column total", "grand total", "single cell", "margin sum of all"], 0));
  q.push(tf("hard", "If conditional rates differ across groups, the variables appear associated.", true));
  q.push(num("hard", T + "What is the joint frequency of Grade 10 who do not play?", 8, 0));
  q.push(mc("hard", "Which is a marginal frequency in the survey?", ["the 40 who play a sport", "the 18 Grade-9 athletes", "the 8 Grade-10 non-athletes", "60% play rate"], 0));
  return q;
}

export default [
  { code: "6.1", gen: g61 },
  { code: "6.2", gen: g62 },
  { code: "6.3", gen: g63 },
  { code: "6.4", gen: g64 },
];
