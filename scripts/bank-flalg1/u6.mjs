// ALG1 Chapter 6 — Exponential Functions & Bivariate Data. ~50 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);

// ── 6.1 Exponential Growth and Decay Models ──────────────────
function g61() {
  const q = [];
  for (let i = 0; i < 10; i++) { const a = ri(2, 10) * 10, b = pick([2, 3]), x = ri(1, 3); q.push(num(i < 5 ? "easy" : "medium", `For $y = ${a} \\cdot ${b}^x$, find $y$ when $x = ${x}$.`, a * b ** x, 0)); }
  q.push(mc("easy", "In $y = a\\,b^x$, the value $a$ is the…", ["starting amount", "growth rate", "exponent", "x-value"], 0));
  q.push(mc("easy", "$y = a\\,b^x$ shows GROWTH when…", ["$b > 1$", "$b < 1$", "$b = 0$", "$a < 0$"], 0));
  q.push(mc("easy", "$y = a\\,b^x$ shows DECAY when…", ["$0 < b < 1$", "$b > 1$", "$b = 1$", "$a > 1$"], 0));
  q.push(tf("easy", "$y = 50(0.8)^x$ models decay.", true));
  q.push(mc("easy", "The starting amount in $y = 30 \\cdot 3^x$ is…", ["30", "3", "90", "1"], 0));
  q.push(fill("easy", "For $y = 100 \\cdot 2^x$, at $x = 4$, $y = $ ___.", ["1600"]));
  q.push(mcv("medium", "A town of 500 grows 10% per year. The model is…", "$y = 500(1.1)^x$", ["$y = 500(0.1)^x$", "$y = 500(1.01)^x$", "$y = 500 + 1.1x$"]));
  q.push(mcv("medium", "A $2000 car loses 15%/yr. The model is…", "$y = 2000(0.85)^x$", ["$y = 2000(1.15)^x$", "$y = 2000(0.15)^x$", "$y = 2000 - 0.15x$"]));
  q.push(mc("medium", "12% growth means the factor $b$ is…", ["1.12", "0.12", "0.88", "12"], 0));
  q.push(mc("medium", "12% decay means the factor $b$ is…", ["0.88", "1.12", "0.12", "1.88"], 0));
  q.push(num("medium", "A $2000 car at 15%/yr decay: value after 2 years? $2000(0.85)^2$.", 1445, 1));
  q.push(mcv("hard", "Write a model: 400 bacteria doubling each hour.", "$y = 400 \\cdot 2^x$", ["$y = 400 \\cdot x^2$", "$y = 400 + 2x$", "$y = 2 \\cdot 400^x$"]));
  q.push(mcv("hard", "Write a model: $5000 growing 8%/yr.", "$y = 5000(1.08)^x$", ["$y = 5000(0.08)^x$", "$y = 5000(8)^x$", "$y = 5000 + 0.08x$"]));
  q.push(num("hard", "For $y = 200(1.05)^x$, find $y$ at $x = 3$ (round to nearest whole).", 232, 2));
  q.push(tf("hard", "In exponential models the quantity changes by a constant FACTOR each step.", true));
  q.push(num("hard", "$y = 3 \\cdot 2^x$: at $x = 5$, $y = $ ___.", 96, 0));
  return q;
}

// ── 6.2 Comparing Linear, Quadratic, and Exponential ─────────
function g62() {
  const q = [];
  q.push(mc("easy", "A LINEAR pattern has a constant…", ["difference", "ratio", "second difference", "product"], 0));
  q.push(mc("easy", "An EXPONENTIAL pattern has a constant…", ["ratio", "difference", "second difference", "sum"], 0));
  q.push(mc("easy", "A QUADRATIC pattern has a constant…", ["second difference", "ratio", "first difference", "product"], 0));
  q.push(mc("easy", "$y$: $3, 7, 11, 15$. Which model?", ["Linear", "Quadratic", "Exponential", "None"], 0));
  q.push(mc("easy", "$y$: $2, 6, 18, 54$. Which model?", ["Exponential", "Linear", "Quadratic", "None"], 0));
  q.push(mc("easy", "$y$: $1, 4, 9, 16$. Which model?", ["Quadratic", "Linear", "Exponential", "None"], 0));
  q.push(tf("easy", "Adding the same amount each step is linear; multiplying is exponential.", true));
  q.push(mc("easy", "Which grows fastest for large $x$?", ["Exponential", "Linear", "Quadratic", "Constant"], 0));
  q.push(mc("medium", "$y$: $5, 8, 11, 14$. Model?", ["Linear (+3)", "Exponential", "Quadratic", "None"], 0));
  q.push(mc("medium", "$y$: $3, 6, 12, 24$. Model?", ["Exponential (×2)", "Linear", "Quadratic", "None"], 0));
  q.push(mc("medium", "$y$: $2, 5, 10, 17$. Model?", ["Quadratic", "Linear", "Exponential", "None"], 0));
  q.push(mc("medium", "'Earns 5% interest each year' is which model?", ["Exponential", "Linear", "Quadratic", "Constant"], 0));
  q.push(mc("medium", "'Saves $20 every week' is which model?", ["Linear", "Exponential", "Quadratic", "None"], 0));
  q.push(mc("medium", "A car depreciating 12% per year is…", ["Exponential decay", "Linear", "Quadratic", "Growth"], 0));
  q.push(tf("medium", "To test a table, check first differences (linear) and ratios (exponential).", true));
  q.push(mc("hard", "At $x = 10$: $y = 10x$ gives 100, $y = 2^x$ gives 1024. This shows…", ["exponential eventually beats linear", "linear beats exponential", "they're equal", "both are constant"], 0));
  q.push(mc("hard", "Constant SECOND differences signal a…", ["quadratic", "linear", "exponential", "cubic"], 0));
  q.push(mc("hard", "$y$: $1, 3, 9, 27, 81$ — the ratio is…", ["3", "2", "changing", "1"], 0));
  q.push(tf("hard", "A pattern with neither constant difference nor constant ratio could be quadratic.", true));
  q.push(mc("hard", "Which table is exponential? $y$ = …", ["$4, 12, 36, 108$", "$4, 8, 12, 16$", "$4, 9, 16, 25$", "$4, 6, 8, 10$"], 0));
  return q;
}

// ── 6.3 Scatter Plots, Line of Best Fit, Residuals ───────────
function g63() {
  const q = [];
  for (let i = 0; i < 10; i++) { const m = ri(2, 6), c = ri(1, 10) * 5, x = ri(2, 12); q.push(num(i < 5 ? "easy" : "medium", `A best-fit line is $y = ${m}x + ${c}$. Predict $y$ when $x = ${x}$.`, m * x + c, 0)); }
  for (let i = 0; i < 6; i++) { const pred = ri(10, 90), act = pred + rnz(-8, 8); q.push(num("medium", `The line predicts ${pred} but the actual value is ${act}. Find the residual (actual − predicted).`, act - pred, 0)); }
  q.push(mc("easy", "As study hours rise, test scores rise. This is…", ["positive correlation", "negative correlation", "no correlation", "causation proven"], 0));
  q.push(mc("easy", "As temperature rises, hot-chocolate sales fall. This is…", ["negative correlation", "positive correlation", "no correlation", "a residual"], 0));
  q.push(mc("easy", "Residual $=$", ["actual − predicted", "predicted − actual", "actual + predicted", "actual × predicted"], 0));
  q.push(tf("easy", "A positive residual means the point is above the line.", true));
  q.push(tf("easy", "Correlation proves that one variable causes the other.", false));
  q.push(mc("medium", "Predicting inside the data range is called…", ["interpolation", "extrapolation", "correlation", "residual"], 0));
  q.push(mc("medium", "Predicting outside the data range is called…", ["extrapolation", "interpolation", "regression", "association"], 0));
  q.push(mc("medium", "In $y = 5x + 50$, the slope means…", ["+5 units of y per unit of x", "y starts at 5", "x per y", "no change"], 0));
  q.push(mc("hard", "Smaller residuals indicate…", ["a better fit", "a worse fit", "no correlation", "extrapolation"], 0));
  q.push(mc("hard", "Data span x = 0 to 50. Predicting at x = 100 is…", ["extrapolation (less reliable)", "interpolation", "always accurate", "a residual"], 0));
  q.push(num("hard", "Best-fit $y = 2x + 3$. Actual at $x = 10$ is 20. Residual?", -3, 0));
  q.push(mc("hard", "In $y = -4x + 60$, as $x$ increases by 1, $y$…", ["drops by 4", "rises by 4", "drops by 60", "stays the same"], 0));
  return q;
}

// ── 6.4 Two-Way Frequency Tables & Categorical Data ──────────
// Fixed table: Grade9 (sport 18, none 12, tot 30); Grade10 (22, 8, 30); tot (40, 20, 60)
function g64() {
  const q = [];
  const T = "In a survey: Grade 9 — 18 play a sport, 12 don't (30 total); Grade 10 — 22 play, 8 don't (30 total); column totals 40 play, 20 don't, 60 overall. ";
  q.push(num("easy", T + "How many Grade 9 students play a sport?", 18, 0));
  q.push(num("easy", T + "How many Grade 10 students don't play a sport?", 8, 0));
  q.push(num("easy", T + "How many students are in Grade 10 total?", 30, 0));
  q.push(num("easy", T + "How many students play no sport in total?", 20, 0));
  q.push(num("easy", T + "How many students play a sport in total?", 40, 0));
  q.push(num("easy", T + "How many students were surveyed in all?", 60, 0));
  q.push(mc("easy", "A single inner-cell count is a…", ["joint frequency", "marginal frequency", "relative frequency", "mean"], 0));
  q.push(mc("easy", "A row or column total is a…", ["marginal frequency", "joint frequency", "residual", "ratio"], 0));
  q.push(mc("medium", "What fraction of ALL students are Grade 9 athletes? (18/60)", ["0.30", "0.60", "0.18", "0.50"], 0));
  q.push(mc("medium", "Among Grade 9, what fraction play a sport? (18/30)", ["0.60", "0.30", "0.18", "0.40"], 0));
  q.push(mc("medium", "Among Grade 10, what fraction play a sport? (22/30)", ["about 0.73", "0.22", "0.30", "0.50"], 0));
  q.push(num("medium", "What fraction (as a decimal) of all students play a sport? (40/60, round to 2 dp)", 0.67, 0.02));
  q.push(mc("medium", "A count divided by a total is a…", ["relative frequency", "joint frequency", "marginal frequency", "mode"], 0));
  q.push(tf("medium", "18 (Grade 9 who play) is a joint frequency.", true));
  q.push(mc("hard", "The 'play a sport' rate is 60% (Gr 9) vs 73% (Gr 10). This suggests…", ["an association between grade and playing", "no association", "causation", "a marginal total"], 0));
  q.push(num("hard", "Among Grade 10, what fraction play NO sport? (8/30, 2 dp)", 0.27, 0.02));
  q.push(mc("hard", "A conditional relative frequency divides a cell by its…", ["row or column total", "grand total", "opposite cell", "mean"], 0));
  q.push(tf("hard", "Marginal frequencies are found in the margins (totals) of the table.", true));
  q.push(num("hard", "What percent (whole number) of the whole survey is Grade 9 non-athletes? (12/60)", 20, 0));
  return q;
}

export default [
  { code: "6.1", gen: g61 },
  { code: "6.2", gen: g62 },
  { code: "6.3", gen: g63 },
  { code: "6.4", gen: g64 },
];
