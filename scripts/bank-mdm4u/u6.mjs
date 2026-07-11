// MDM4U Unit 6 — Two-Variable Statistics: question bank.
// IN SCOPE: r and the line of best fit come FROM TECHNOLOGY, then are interpreted;
// residual = observed - predicted; r^2. NO by-hand least-squares derivation.
// 60 per topic: 20 easy / 20 medium / 20 hard. Original, creative contexts.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 6.1 Scatter Plots & Correlation ─────────────────────────
function g61() {
  const q = [];
  // EASY
  q.push(mc("easy", "The correlation coefficient $r$ ranges from:", ["$-1$ to $1$", "$0$ to $1$", "$0$ to $100$", "$-\\infty$ to $\\infty$"], 0));
  q.push(mc("easy", "In 'hours studied vs. test score', the explanatory variable is:", ["hours studied", "test score", "both", "neither"], 0));
  q.push(mc("easy", "$r=0.9$ describes a relationship that is:", ["strong positive", "weak negative", "no correlation", "strong negative"], 0));
  q.push(mc("easy", "$r=-0.85$ describes:", ["strong negative", "strong positive", "weak positive", "no correlation"], 0));
  q.push(mc("easy", "$r=0$ means:", ["no linear correlation", "perfect correlation", "strong positive", "an error"], 0));
  q.push(mc("easy", "A scatter plot displays:", ["paired (two-variable) data", "one variable", "a single value", "frequencies"], 0));
  q.push(ms("easy", "Which describe a scatter?", ["direction", "form", "strength", "the mode"], [0, 1, 2]));
  q.push(ms("easy", "Which indicate a strong linear relationship?", ["$r=0.95$", "$r=-0.9$", "points hug a line", "$r=0.1$"], [0, 1, 2]));
  q.push(tf("easy", "The sign of $r$ gives the direction of the relationship.", true));
  q.push(tf("easy", "$|r|$ close to $1$ means a strong linear relationship.", true));
  q.push(tf("easy", "$r$ measures only LINEAR association.", true));
  q.push(num("easy", "The maximum possible value of $r$?", 1, 0));
  q.push(num("easy", "The minimum possible value of $r$?", -1, 0));
  q.push(fill("easy", "The sign of $r$ gives the ___ of the relationship.", ["direction"]));
  q.push(fill("easy", "$|r|$ measures the ___ of a linear relationship.", ["strength"]));
  q.push(mc("easy", "Which is stronger: $r=0.8$ or $r=-0.9$?", ["$r=-0.9$", "$r=0.8$", "equal", "cannot tell"], 0));
  q.push(mc("easy", "The likely sign of $r$ for ice-cream sales vs. temperature:", ["positive", "negative", "zero", "undefined"], 0));
  q.push(tf("easy", "Two unrelated variables have $r\\approx0$.", true));
  q.push(mc("easy", "In 'age vs. vocabulary', the explanatory variable is:", ["age", "vocabulary", "both", "neither"], 0));
  q.push(fill("easy", "$r$ ranges from $-1$ to ___.", ["1"]));
  // MEDIUM
  q.push(mc("medium", "A scatter curves sharply upward (non-linear). Is $r$ a good summary?", ["no", "yes", "always", "only if $r>0$"], 0));
  q.push(mc("medium", "Estimate $r$ for a tight, downward-sloping band of points:", ["near $-1$", "near $+1$", "near $0$", "exactly $0.5$"], 0));
  q.push(mc("medium", "Estimate $r$ for a shapeless cloud of points:", ["near $0$", "near $1$", "near $-1$", "exactly $0.9$"], 0));
  q.push(mc("medium", "Rank by strength: $r=0.3,\\ -0.7,\\ 0.95$. Strongest is:", ["$0.95$", "$-0.7$", "$0.3$", "all equal"], 0));
  q.push(mc("medium", "$r=-0.99$ describes:", ["a very strong negative linear relationship", "a weak relationship", "no correlation", "a positive relationship"], 0));
  q.push(mc("medium", "For 'exercise (h/week) vs. resting heart rate', the likely sign of $r$:", ["negative", "positive", "zero", "undefined"], 0));
  q.push(ms("medium", "Which are true of $r$?", ["ranges $-1$ to $1$", "sign $=$ direction", "$|r|=$ strength", "measures curved fits well"], [0, 1, 2]));
  q.push(ms("medium", "Which scatters have $|r|$ near $1$?", ["a tight rising line", "a tight falling line", "a shapeless cloud", "points on a straight band"], [0, 1, 3]));
  q.push(tf("medium", "$r$ understates a strong but curved relationship.", true));
  q.push(tf("medium", "A tight downward line has $r$ near $-1$.", true));
  q.push(num("medium", "Given $r=0.1,-0.6,0.99,-0.95$: the largest $|r|$ value (type the $r$)?", 0.99, 0.001));
  q.push(num("medium", "Given $r=0.1,-0.6,0.99,-0.95$: the weakest (smallest $|r|$) value?", 0.1, 0.001));
  q.push(fill("medium", "For a perfect positive linear relationship, $r=$ ___.", ["1"]));
  q.push(fill("medium", "For a perfect negative linear relationship, $r=$ ___.", ["-1"]));
  q.push(mc("medium", "In a study, one variable is thought to influence the other. The influencer is the:", ["explanatory variable", "response variable", "residual", "outlier"], 0));
  q.push(num("medium", "Interpreting $r=-0.99$: is it strong (type 1) or weak (type 0)?", 1, 0));
  q.push(tf("medium", "A near-linear scatter with a slight negative slope has $r$ slightly below $0$.", true));
  q.push(mc("medium", "'Screen time vs. sleep hours' likely has $r$:", ["negative", "positive", "zero", "exactly 1"], 0));
  q.push(fill("medium", "Rank strongest of $0.3,-0.7,0.95$: ___.", ["0.95"]));
  q.push(mc("medium", "Two variables with no relationship show $r$:", ["near $0$", "near $1$", "near $-1$", "exactly $0.5$"], 0));
  // HARD
  q.push(mc("hard", "A strong quadratic (U-shaped) relationship can have $r\\approx0$ because:", ["$r$ measures only linear association", "there is no relationship", "the data are random", "$r$ is always $0$"], 0));
  q.push(mc("hard", "Adding one far-off outlier to a tight positive scatter tends to:", ["weaken (reduce $|r|$)", "always strengthen $r$", "have no effect", "make $r>1$"], 0));
  q.push(mc("hard", "A scatter has $r=0.6$. Its coefficient of determination is:", ["$0.36$", "$0.6$", "$0.77$", "$0.8$"], 0));
  q.push(mc("hard", "Which relationship is likely to have the HIGHEST $|r|$?", ["a tight straight-line trend", "a loose cloud", "a U-shaped curve", "random noise"], 0));
  q.push(mc("hard", "$r$ for a data set is $0.9$; after a units change (cm to m) on one axis, $r$ becomes:", ["$0.9$ (unchanged)", "$0.09$", "$90$", "$0$"], 0));
  q.push(mc("hard", "Removing a strong outlier that was OFF the trend usually makes $|r|$:", ["increase", "decrease", "stay $0$", "exceed $1$"], 0));
  q.push(num("hard", "$r=0.6$: its coefficient of determination $r^2$?", 0.36, 0.001));
  q.push(num("hard", "$r=-0.8$: its $r^2$?", 0.64, 0.001));
  q.push(num("hard", "A positive scatter has $r^2=0.81$: its $r$?", 0.9, 0.001));
  q.push(num("hard", "A negative scatter has $r^2=0.49$: its $r$ (type the negative value)?", -0.7, 0.001));
  q.push(tf("hard", "A linear correlation coefficient does not change when the units of a variable change.", true));
  q.push(tf("hard", "A curved (non-linear) relationship can have a small $r$ despite being strong.", true));
  q.push(ms("hard", "Which are true about outliers and $r$?", ["an off-trend outlier can lower $|r|$", "an on-trend extreme point can raise $|r|$", "outliers never matter", "$r$ is resistant to all outliers"], [0, 1]));
  q.push(mc("hard", "A researcher reports $r=1.4$. This is:", ["impossible ($r\\le1$)", "very strong", "weak", "negative"], 0));
  q.push(num("hard", "If $r^2=0.25$ for a rising scatter, then $r=$", 0.5, 0.001));
  q.push(fill("hard", "$r=-0.9$: $r^2=$ ___.", ["0.81"]));
  q.push(mc("hard", "For a perfectly straight non-horizontal line of points, $r$ is:", ["$\\pm1$", "$0$", "$0.5$", "undefined"], 0));
  q.push(num("hard", "For a perfect negative linear relationship, $r=$", -1, 0));
  q.push(tf("hard", "$|r|$ and $r^2$ both increase as points hug the line more tightly.", true));
  q.push(mc("hard", "A dataset shows a clear curve. The best next step before trusting $r$ is:", ["consider a non-linear model", "report $r$ as final", "delete the curve", "ignore the shape"], 0));
  return q;
}

// ── 6.2 Correlation & Linear Regression ─────────────────────
function g62() {
  const q = [];
  // EASY
  q.push(mc("easy", "The line of best fit is written:", ["$\\hat y=ax+b$", "$y=r$", "$\\hat y=x^2$", "$y=\\sigma$"], 0));
  q.push(mc("easy", "For $\\hat y=2x+5$, the prediction at $x=10$ is:", ["$25$", "$20$", "$15$", "$7$"], 0));
  q.push(mc("easy", "In $\\hat y=ax+b$, the slope $a$ is the:", ["rate of change", "starting value", "correlation", "residual"], 0));
  q.push(mc("easy", "In $\\hat y=ax+b$, the intercept $b$ is the value when:", ["$x=0$", "$x=1$", "$y=0$", "$x=\\infty$"], 0));
  q.push(mc("easy", "A residual is:", ["observed $-$ predicted", "predicted $-$ mean", "$r^2$", "the slope"], 0));
  q.push(mc("easy", "For $\\hat y=2x+1$, the prediction at $x=6$ is:", ["$13$", "$12$", "$7$", "$11$"], 0));
  q.push(ms("easy", "Which are true of $\\hat y=ax+b$?", ["$a$ is the slope", "$b$ is the intercept", "you predict by substituting $x$", "$a$ is the correlation"], [0, 1, 2]));
  q.push(ms("easy", "Which give the residual at a point?", ["observed $-$ predicted", "actual $y$ minus $\\hat y$", "$y-\\hat y$", "$\\hat y - $ mean"], [0, 1, 2]));
  q.push(tf("easy", "You predict from a regression line by substituting an $x$-value.", true));
  q.push(tf("easy", "A residual is observed minus predicted.", true));
  q.push(tf("easy", "Technology finds the line of best fit from the data.", true));
  q.push(num("easy", "$\\hat y=2x+5$: the prediction at $x=10$?", 25, 0));
  q.push(num("easy", "$\\hat y=3x+2$: the prediction at $x=5$?", 17, 0));
  q.push(num("easy", "$\\hat y=1.5x+2$: the prediction at $x=4$?", 8, 0));
  q.push(fill("easy", "A residual $=$ observed $-$ ___.", ["predicted"]));
  q.push(fill("easy", "$\\hat y=2x+1$ at $x=6$ is ___.", ["13"]));
  q.push(mc("easy", "For $\\hat y=-0.5x+20$, the prediction at $x=10$ is:", ["$15$", "$25$", "$20$", "$10$"], 0));
  q.push(num("easy", "$\\hat y=-0.5x+20$: the prediction at $x=10$?", 15, 0));
  q.push(tf("easy", "The slope tells how much $\\hat y$ changes per unit of $x$.", true));
  q.push(mc("easy", "For $\\hat y=4x+50$, the intercept is:", ["$50$", "$4$", "$0$", "$54$"], 0));
  // MEDIUM
  q.push(mc("medium", "For $\\hat y=2x+1$, the actual $y$ at $x=5$ is $13$. The residual is:", ["$+2$", "$-2$", "$0$", "$11$"], 0));
  q.push(mc("medium", "A cost model is $\\hat y=0.5x+20$. The slope means:", ["each unit adds \\$0.50", "the fixed cost is \\$0.50", "the total is \\$20", "no change"], 0));
  q.push(mc("medium", "In $\\hat y=3x+12$, the intercept means:", ["value when $x=0$ is $12$", "slope is $12$", "value at $x=1$ is $12$", "residual is $12$"], 0));
  q.push(mc("medium", "If $r=-0.9$, the best-fit slope is:", ["negative", "positive", "zero", "cannot tell"], 0));
  q.push(mc("medium", "For $\\hat y=1.2x+3$, the prediction at $x=6$ is:", ["$10.2$", "$9$", "$7.2$", "$18$"], 0));
  q.push(mc("medium", "Predicted $y=20$, actual $y=22$. The residual is:", ["$+2$", "$-2$", "$42$", "$0$"], 0));
  q.push(ms("medium", "Which describe the slope of a regression line?", ["rate of change of $\\hat y$", "change per unit $x$", "carries units", "the same as $r$"], [0, 1, 2]));
  q.push(ms("medium", "Which are residuals?", ["observed $-$ predicted", "$+2$ if actual is 2 above the line", "$0$ if the point is on the line", "always positive"], [0, 1, 2]));
  q.push(tf("medium", "A positive residual means the point lies above the line.", true));
  q.push(tf("medium", "$r$ and the best-fit slope always share the same sign.", true));
  q.push(num("medium", "$\\hat y=2x+1$, actual $y=13$ at $x=5$: the residual?", 2, 0));
  q.push(num("medium", "Predicted $18$, actual $15$: the residual?", -3, 0));
  q.push(num("medium", "$\\hat y=3x+10$: prediction at $x=8$?", 34, 0));
  q.push(fill("medium", "For $\\hat y=4x+50$, the slope means each unit of $x$ adds ___.", ["4"]));
  q.push(fill("medium", "If actual $=22$ and predicted $=20$, residual $=$ ___.", ["2", "+2"]));
  q.push(mc("medium", "For $\\hat y=-2x+30$, at what $x$ is $\\hat y=10$?", ["$10$", "$20$", "$5$", "$-10$"], 0));
  q.push(num("medium", "$\\hat y=-2x+30$: the $x$ giving $\\hat y=10$?", 10, 0));
  q.push(tf("medium", "Predicting inside the data range (interpolation) is more reliable than outside.", true));
  q.push(mc("medium", "Which describes the strength of the fit, not the steepness?", ["$r$", "the slope", "the intercept", "the residual"], 0));
  q.push(num("medium", "$\\hat y=0.9x+1.3$: the residual at the point $(3,5)$ (actual $5$)?", 1, 0.01));
  // HARD
  q.push(mc("hard", "Ad spend model: $\\hat y=3x+10$ (\\$1000s of sales). At $x=8$, actual sales are $40$. The residual is:", ["$+6$", "$-6$", "$34$", "$+34$"], 0));
  q.push(mc("hard", "For $\\hat y=0.9x+1.3$, which point has the largest positive residual: $(2,4),\\ (3,5),\\ (4,4)$?", ["$(3,5)$", "$(2,4)$", "$(4,4)$", "all equal"], 0));
  q.push(mc("hard", "A regression predicts $\\hat y=0.1x+5$ over data with $x\\le50$. Predicting at $x=100$ is:", ["extrapolation (risky)", "interpolation (safe)", "impossible", "always accurate"], 0));
  q.push(mc("hard", "Two lines both have slope $2$, but $r=0.99$ and $r=0.6$. What differs?", ["the tightness of the fit", "the steepness", "the intercept only", "nothing"], 0));
  q.push(mc("hard", "A model gives $\\hat y=2.5x+40$ for plant height (cm) vs. weeks. The predicted height at week $6$:", ["$55$", "$40$", "$15$", "$65$"], 0));
  q.push(mc("hard", "If the residuals show a clear curved pattern, the linear model is:", ["inappropriate (try non-linear)", "perfect", "unbiased", "the best possible"], 0));
  q.push(num("hard", "$\\hat y=3x+10$: residual when actual is $40$ at $x=8$?", 6, 0));
  q.push(num("hard", "$\\hat y=2.5x+40$: prediction at $x=6$?", 55, 0));
  q.push(num("hard", "$\\hat y=0.9x+1.3$: the residual at $(3,5)$?", 1, 0.01));
  q.push(num("hard", "$\\hat y=1.2x+3$, actual $y=12$ at $x=6$: the residual?", 1.8, 0.01));
  q.push(tf("hard", "A curved pattern in the residuals signals the linear model is a poor fit.", true));
  q.push(tf("hard", "The slope carries units (e.g. sales per dollar of ad spend).", true));
  q.push(ms("hard", "Which are true about extrapolation?", ["it predicts outside the data range", "it is risky", "the pattern may not continue", "it is always accurate"], [0, 1, 2]));
  q.push(mc("hard", "A screen-time (h) vs. GPA model is $\\hat y=-0.2x+3.8$. The predicted GPA at $4$ h:", ["$3.0$", "$3.8$", "$3.6$", "$2.6$"], 0));
  q.push(num("hard", "$\\hat y=-0.2x+3.8$: prediction at $x=4$?", 3.0, 0.01));
  q.push(num("hard", "$\\hat y=5x+2$, actual $y=30$ at $x=5$: the residual?", 3, 0.01));
  q.push(fill("hard", "$\\hat y=3x+10$ with actual $40$ at $x=8$: residual $=$ ___.", ["6", "+6"]));
  q.push(mc("hard", "The intercept of a regression should be interpreted cautiously when:", ["$x=0$ is far outside the data", "$x=0$ is in the data", "the slope is positive", "$r$ is high"], 0));
  q.push(tf("hard", "Interpolation (inside the data) is generally trustworthy; extrapolation is not.", true));
  q.push(num("hard", "$\\hat y=-2x+30$: prediction at $x=12$ (note: extrapolation if data end at 10)?", 6, 0.01));
  return q;
}

// ── 6.3 The Coefficient of Determination & Prediction ───────
function g63() {
  const q = [];
  // EASY
  q.push(mc("easy", "$r^2$ measures:", ["the fraction of variation explained", "the slope", "the mean", "the range"], 0));
  q.push(mc("easy", "If $r=0.8$, then $r^2=$", ["$0.64$", "$0.8$", "$0.9$", "$1.6$"], 0));
  q.push(mc("easy", "$r^2=0.81$ means the model explains:", ["$81\\%$ of the variation", "$81$ points", "$8.1\\%$", "nothing"], 0));
  q.push(mc("easy", "Predicting inside the data range is:", ["interpolation", "extrapolation", "correlation", "causation"], 0));
  q.push(mc("easy", "Predicting outside the data range is:", ["extrapolation", "interpolation", "regression", "residual"], 0));
  q.push(mc("easy", "A residual of $0$ means the point:", ["lies on the line", "is an outlier", "is the mean", "is missing"], 0));
  q.push(ms("easy", "Which are true of $r^2$?", ["between $0$ and $1$", "fraction of variation explained", "higher $=$ better fit", "can be negative"], [0, 1, 2]));
  q.push(ms("easy", "Which are safer predictions?", ["interpolation", "inside the data range", "near the mean of $x$", "far extrapolation"], [0, 1, 2]));
  q.push(tf("easy", "$r^2$ lies between $0$ and $1$.", true));
  q.push(tf("easy", "A higher $r^2$ means the line fits better.", true));
  q.push(tf("easy", "Extrapolation is riskier than interpolation.", true));
  q.push(num("easy", "If $r=0.6$, then $r^2=$", 0.36, 0.001));
  q.push(num("easy", "If $r^2=0.81$, the percent explained (a whole number)?", 81, 0));
  q.push(fill("easy", "$r^2$ is the fraction of variation ___.", ["explained"]));
  q.push(fill("easy", "$r=0.9\\Rightarrow r^2=$ ___.", ["0.81"]));
  q.push(mc("easy", "If $r=-0.7$, then $r^2=$", ["$0.49$", "$-0.49$", "$0.7$", "$0.7^2=0.49$ (same)"], 0));
  q.push(num("easy", "If $r=-0.7$, then $r^2=$", 0.49, 0.001));
  q.push(tf("easy", "$r^2=1$ indicates a perfect linear fit.", true));
  q.push(mc("easy", "Predicting far beyond the data is:", ["unreliable", "always reliable", "impossible", "interpolation"], 0));
  q.push(fill("easy", "A residual of ___ means the point is on the line.", ["0", "zero"]));
  // MEDIUM
  q.push(mc("medium", "A model has $r^2=0.64$. The percent of variation UNexplained is:", ["$36\\%$", "$64\\%$", "$8\\%$", "$100\\%$"], 0));
  q.push(mc("medium", "A positive scatter has $r^2=0.64$. Then $r=$", ["$0.8$", "$-0.8$", "$0.64$", "$0.4$"], 0));
  q.push(mc("medium", "Model A: $r^2=0.9$; Model B: $r^2=0.5$. Which explains more?", ["A", "B", "equal", "cannot tell"], 0));
  q.push(mc("medium", "$r^2=0.25$ means the model explains:", ["$25\\%$ of variation", "$75\\%$", "$50\\%$", "all"], 0));
  q.push(mc("medium", "Observed $y=30$, predicted $27$. The residual:", ["$+3$", "$-3$", "$57$", "$0$"], 0));
  q.push(mc("medium", "Data span $x=0$ to $50$. A prediction at $x=20$ is:", ["interpolation", "extrapolation", "impossible", "a residual"], 0));
  q.push(ms("medium", "Which are true when $r^2=0.36$?", ["$36\\%$ explained", "$64\\%$ unexplained", "$r=\\pm0.6$", "$r^2=0.6$"], [0, 1, 2]));
  q.push(ms("medium", "Which increase confidence in a prediction?", ["high $r^2$", "interpolating", "no residual pattern", "far extrapolation"], [0, 1, 2]));
  q.push(tf("medium", "$r^2=0.9$ leaves $10\\%$ of the variation unexplained.", true));
  q.push(tf("medium", "A positive scatter with $r^2=0.64$ has $r=0.8$.", true));
  q.push(num("medium", "If $r^2=0.36$, the percent unexplained (whole number)?", 64, 0));
  q.push(num("medium", "A positive scatter with $r^2=0.49$: its $r$?", 0.7, 0.001));
  q.push(num("medium", "Observed $30$, predicted $27$: the residual?", 3, 0));
  q.push(fill("medium", "$r^2=0.81$ explains ___ percent of variation.", ["81"]));
  q.push(fill("medium", "Predicting inside the data range is called ___.", ["interpolation"]));
  q.push(mc("medium", "Which is the better model, all else equal?", ["higher $r^2$", "lower $r^2$", "$r^2=0$", "negative $r^2$"], 0));
  q.push(num("medium", "If $r=0.5$, the percent of variation explained (whole number)?", 25, 0));
  q.push(tf("medium", "A residual of $0$ means observed equals predicted.", true));
  q.push(mc("medium", "$r^2=0.49$ (rising scatter) gives $r=$", ["$0.7$", "$-0.7$", "$0.49$", "$0.24$"], 0));
  q.push(fill("medium", "A negative scatter with $r^2=0.64$ has $r=$ ___.", ["-0.8"]));
  // HARD
  q.push(mc("hard", "A model has $r=0.85$. Its $r^2$ (percent explained) is about:", ["$72\\%$", "$85\\%$", "$92\\%$", "$43\\%$"], 0));
  q.push(mc("hard", "A quadratic fit gives $r^2=0.99$; a line gives $r^2=0.70$ on curved data. Choose:", ["the quadratic", "the line", "either", "neither"], 0));
  q.push(mc("hard", "A model with $r^2=0.95$ is used to predict far beyond the data. This is:", ["still risky (extrapolation)", "reliable because $r^2$ is high", "interpolation", "guaranteed"], 0));
  q.push(mc("hard", "Two models on the SAME data: A has $r^2=0.88$ with random residuals; B has $r^2=0.90$ with a curved residual pattern. Prefer:", ["A (better residual behaviour)", "B (higher $r^2$)", "either", "neither"], 0));
  q.push(mc("hard", "$r^2=0.7225$ corresponds to $r=$ (positive scatter):", ["$0.85$", "$0.72$", "$0.52$", "$0.90$"], 0));
  q.push(mc("hard", "If a model explains $64\\%$ of the variation, the correlation (negative scatter) is:", ["$-0.8$", "$0.8$", "$-0.64$", "$-0.4$"], 0));
  q.push(num("hard", "$r=0.85$: its $r^2$ to 4 decimals?", 0.7225, 0.0005));
  q.push(num("hard", "A model explains $64\\%$: its $|r|$?", 0.8, 0.001));
  q.push(num("hard", "$r^2=0.7225$ (rising scatter): its $r$?", 0.85, 0.001));
  q.push(num("hard", "A model has $r=0.9$; the percent of variation it does NOT explain (whole number)?", 19, 0));
  q.push(tf("hard", "A high $r^2$ does not justify far extrapolation.", true));
  q.push(tf("hard", "Between two similar models, prefer the one with no leftover pattern in the residuals.", true));
  q.push(ms("hard", "Which should guide model choice?", ["a high $r^2$", "randomly scattered residuals", "fits the context", "far extrapolation accuracy"], [0, 1, 2]));
  q.push(mc("hard", "$r^2=0.81$ means the UNexplained fraction of variation is:", ["$0.19$", "$0.81$", "$0.9$", "$0.09$"], 0));
  q.push(num("hard", "$r^2=0.81$: the fraction unexplained (decimal)?", 0.19, 0.001));
  q.push(fill("hard", "$r=0.85$: $r^2=$ ___ (4 decimals).", ["0.7225"]));
  q.push(mc("hard", "Interpolating at the centre of the data vs. extrapolating far out — which prediction is more trustworthy?", ["interpolating at the centre", "extrapolating far out", "equal", "neither"], 0));
  q.push(num("hard", "A rising scatter has $r^2=0.36$: its $r$?", 0.6, 0.001));
  q.push(tf("hard", "$r^2$ near $0$ means the linear model explains almost none of the variation.", true));
  q.push(mc("hard", "A residual plot with an obvious 'smile' (U-shape) suggests:", ["a non-linear model is needed", "a perfect linear fit", "no pattern", "high $r$"], 0));
  return q;
}

// ── 6.4 Non-Linear Regression & Modelling ───────────────────
function g64() {
  const q = [];
  // EASY
  q.push(mc("easy", "Constant first differences suggest a:", ["linear model", "quadratic model", "exponential model", "no model"], 0));
  q.push(mc("easy", "Constant ratios suggest a:", ["exponential model", "linear model", "quadratic model", "no model"], 0));
  q.push(mc("easy", "Constant second differences suggest a:", ["quadratic model", "linear model", "exponential model", "no model"], 0));
  q.push(mc("easy", "For $y=2,4,8,16$, the next value is:", ["$32$", "$24$", "$18$", "$20$"], 0));
  q.push(mc("easy", "For $y=5,10,15,20$, the model is:", ["linear", "quadratic", "exponential", "none"], 0));
  q.push(mc("easy", "For $y=1,4,9,16$, the model is:", ["quadratic", "linear", "exponential", "none"], 0));
  q.push(ms("easy", "Which are common non-linear models?", ["quadratic", "exponential", "power", "linear"], [0, 1, 2]));
  q.push(ms("easy", "Which signal an exponential pattern?", ["constant ratio", "doubling each step", "multiplying by a constant", "adding a constant"], [0, 1, 2]));
  q.push(tf("easy", "A constant ratio between terms indicates exponential growth.", true));
  q.push(tf("easy", "A single-arch (rise then fall) pattern suggests a quadratic model.", true));
  q.push(tf("easy", "Constant first differences indicate a linear model.", true));
  q.push(num("easy", "For $y=2,4,8,16$, the next value?", 32, 0));
  q.push(num("easy", "For $y=5,10,15,20$, the next value?", 25, 0));
  q.push(num("easy", "For $y=3,6,12,24$, the next value?", 48, 0));
  q.push(fill("easy", "Constant ratios $\\Rightarrow$ ___ model.", ["exponential"]));
  q.push(fill("easy", "Constant first differences $\\Rightarrow$ ___ model.", ["linear"]));
  q.push(mc("easy", "A population that doubles each year is:", ["exponential", "linear", "quadratic", "constant"], 0));
  q.push(num("easy", "For $y=1,2,4,8$, the next value?", 16, 0));
  q.push(tf("easy", "A quadratic has a single turning point (a parabola).", true));
  q.push(mc("easy", "For $y=100,50,25,12.5$ (halving), the model is:", ["exponential decay", "linear", "quadratic", "none"], 0));
  // MEDIUM
  q.push(mc("medium", "A table has first differences $3,3,3$. The model is:", ["linear", "quadratic", "exponential", "power"], 0));
  q.push(mc("medium", "Ratios of successive terms are $2,2,2$. The model is:", ["exponential", "linear", "quadratic", "power"], 0));
  q.push(mc("medium", "A projectile's height rises then falls in one arch. The model is:", ["quadratic", "linear", "exponential", "power"], 0));
  q.push(mc("medium", "Curved data: a line gives $r^2=0.7$; a quadratic gives $r^2=0.99$. Choose:", ["the quadratic", "the line", "either", "neither"], 0));
  q.push(mc("medium", "For $y=3,6,12,24$, an equation is:", ["$y=3\\cdot2^{x-1}$", "$y=3x$", "$y=x^2$", "$y=3+x$"], 0));
  q.push(mc("medium", "Constant first differences of $5$ give a linear model with slope:", ["$5$", "$1$", "$0$", "$25$"], 0));
  q.push(ms("medium", "Which are true for exponential data?", ["constant ratio", "$y=ab^x$ form", "rapid growth or decay", "constant difference"], [0, 1, 2]));
  q.push(ms("medium", "Which choose a model correctly?", ["constant 2nd differences $\\to$ quadratic", "constant ratio $\\to$ exponential", "constant 1st differences $\\to$ linear", "any curve $\\to$ linear"], [0, 1, 2]));
  q.push(tf("medium", "Fitting a line to clearly curved data is a poor choice.", true));
  q.push(tf("medium", "$y=3\\cdot2^{x-1}$ models $3,6,12,24,\\dots$", true));
  q.push(num("medium", "For $y=3,6,12,24$: the value at $x=5$?", 48, 0));
  q.push(num("medium", "For $y=1,4,9,16$ (perfect squares): the value at $x=5$?", 25, 0));
  q.push(num("medium", "First differences of $5$: the slope of the linear model?", 5, 0));
  q.push(fill("medium", "$y=2,4,8,16$ is modelled by $y=2^x$; the base is ___.", ["2"]));
  q.push(fill("medium", "A single-arch scatter fits a ___ model.", ["quadratic"]));
  q.push(mc("medium", "Bacteria triple every hour. The model is:", ["exponential", "linear", "quadratic", "power"], 0));
  q.push(num("medium", "Bacteria start at $10$ and triple hourly: the count after $2$ h?", 90, 0));
  q.push(tf("medium", "Comparing $r^2$ helps choose between candidate models.", true));
  q.push(mc("medium", "For $y=5,10,20,40$, the model and next value are:", ["exponential, $80$", "linear, $50$", "quadratic, $70$", "none"], 0));
  q.push(num("medium", "For $y=5,10,20,40$: the next value?", 80, 0));
  // HARD
  q.push(mc("hard", "A table $x:1,2,3,4$; $y:2,6,12,20$. First differences $4,6,8$; second differences $2,2$. The model is:", ["quadratic", "linear", "exponential", "power"], 0));
  q.push(mc("hard", "For $y=2,6,12,20$ (from $y=x^2+x$), the value at $x=5$ is:", ["$30$", "$28$", "$26$", "$32$"], 0));
  q.push(mc("hard", "An exponential model of growth extended 50 years out is risky because:", ["unbounded growth is unrealistic", "$r^2$ is low", "it is linear", "extrapolation is always fine"], 0));
  q.push(mc("hard", "Two competing models both give $r^2=0.97$. The tie-breaker should be:", ["residual pattern and context", "pick either", "the higher slope", "the larger intercept"], 0));
  q.push(mc("hard", "For $y=100,50,25,12.5$, the model is $y=100(0.5)^x$; the value at $x=4$ is:", ["$6.25$", "$12.5$", "$3.125$", "$25$"], 0));
  q.push(mc("hard", "Data $y:4,9,16,25$ (from $(x+1)^2$). The model is:", ["quadratic", "linear", "exponential", "power"], 0));
  q.push(num("hard", "$y=x^2+x$ (matching $2,6,12,20$): the value at $x=5$?", 30, 0));
  q.push(num("hard", "$y=100(0.5)^x$: the value at $x=4$?", 6.25, 0.01));
  q.push(num("hard", "$y=3\\cdot2^{x-1}$: the value at $x=6$?", 96, 0));
  q.push(num("hard", "Bacteria start at $20$ and double hourly: the count after $3$ h?", 160, 0));
  q.push(tf("hard", "When first differences aren't constant but second differences are, the data are quadratic.", true));
  q.push(tf("hard", "Two models with equal $r^2$ are best distinguished by their residual plots and context.", true));
  q.push(ms("hard", "Which support choosing a quadratic over a line?", ["curved scatter", "constant second differences", "a U-shaped residual plot from the line", "constant ratio"], [0, 1, 2]));
  q.push(mc("hard", "A savings account grows by $5\\%$ per year. The model is $y=P(1.05)^x$, which is:", ["exponential", "linear", "quadratic", "power"], 0));
  q.push(num("hard", "\\$1000 growing at $5\\%$/yr: the value after $2$ years to the nearest dollar ($1000\\cdot1.05^2$)?", 1103, 1));
  q.push(fill("hard", "$y=5,10,20,40$: the constant ratio is ___.", ["2"]));
  q.push(mc("hard", "For $y=3,6,12,24$, doubling means the constant ___ is $2$.", ["ratio", "difference", "second difference", "slope"], 0));
  q.push(num("hard", "$y=2^x$: the value at $x=6$?", 64, 0));
  q.push(tf("hard", "Exponential decay has a constant ratio between $0$ and $1$.", true));
  q.push(mc("hard", "A model $y=ab^x$ with $b=1.2$ describes:", ["growth (ratio $>1$)", "decay", "a line", "a parabola"], 0));
  return q;
}

// ── 6.5 Correlation vs Causation ────────────────────────────
function g65() {
  const q = [];
  // EASY
  q.push(mc("easy", "A strong correlation, by itself:", ["does not prove causation", "proves causation", "means no relationship", "is impossible"], 0));
  q.push(mc("easy", "A hidden variable affecting both quantities is a:", ["confounding (lurking) variable", "residual", "response variable", "outlier"], 0));
  q.push(mc("easy", "Ice-cream sales and drownings both rise in summer because of:", ["hot weather (a confounder)", "ice cream causing drownings", "coincidence only", "no reason"], 0));
  q.push(mc("easy", "To establish causation, you generally need:", ["a controlled experiment", "a bigger correlation", "an observational study", "more variables"], 0));
  q.push(mc("easy", "Correlation measures association; causation means:", ["one variable causes the change in another", "two variables are equal", "no relationship", "a high $r$"], 0));
  q.push(mc("easy", "An observational study can show:", ["correlation", "causation", "neither", "a controlled effect"], 0));
  q.push(ms("easy", "Which can explain a correlation WITHOUT causation?", ["a confounding variable", "reverse causation", "coincidence", "a randomized experiment"], [0, 1, 2]));
  q.push(ms("easy", "Which are true?", ["correlation $\\ne$ causation", "a lurking variable can drive both", "experiments can show causation", "high $r$ proves cause"], [0, 1, 2]));
  q.push(tf("easy", "Correlation does not imply causation.", true));
  q.push(tf("easy", "A confounding variable can create a correlation without a direct cause.", true));
  q.push(tf("easy", "A controlled experiment can establish causation.", true));
  q.push(fill("easy", "A hidden variable affecting both is a ___ variable.", ["confounding", "lurking"]));
  q.push(fill("easy", "Correlation does not imply ___.", ["causation"]));
  q.push(mc("easy", "Does $r=0.99$ prove one variable causes the other?", ["no", "yes", "only if positive", "always"], 0));
  q.push(tf("easy", "An observational study alone cannot prove cause and effect.", true));
  q.push(mc("easy", "Two variables both rise because a third drives them. This is:", ["a common cause", "reverse causation", "coincidence", "direct cause"], 0));
  q.push(fill("easy", "To prove causation, use a controlled ___.", ["experiment"]));
  q.push(tf("easy", "A randomized experiment controls for confounding variables.", true));
  q.push(mc("easy", "A spurious correlation with no real link is:", ["coincidental", "causal", "confounded only", "reverse"], 0));
  q.push(ms("easy", "Which are alternatives to direct causation?", ["confounding", "reverse causation", "coincidence", "a perfect experiment"], [0, 1, 2]));
  // MEDIUM
  q.push(mc("medium", "Bigger shoe size correlates with better reading in children. The lurking variable is:", ["age", "shoe brand", "book length", "none"], 0));
  q.push(mc("medium", "Towns with more churches have more bars. The lurking variable is:", ["population size", "religion", "alcohol", "none"], 0));
  q.push(mc("medium", "Sick people take more medicine, yet medicine helps. This illustrates:", ["reverse causation", "a confounder", "coincidence", "no relationship"], 0));
  q.push(mc("medium", "Why is a controlled experiment better than an observational study for causation?", ["it randomizes and controls other factors", "it uses more data", "it has higher $r$", "it is cheaper"], 0));
  q.push(mc("medium", "Coffee drinkers live longer. Does coffee cause longevity?", ["not necessarily (possible confounders)", "yes, definitely", "no, impossible", "only for tea"], 0));
  q.push(mc("medium", "Two unrelated trends happen to move together for a few years. This is:", ["coincidental correlation", "causation", "a confounder", "reverse causation"], 0));
  q.push(ms("medium", "Which are lurking-variable examples?", ["age in shoe-size vs. reading", "population in churches vs. bars", "wealth in books-at-home vs. grades", "the response variable itself"], [0, 1, 2]));
  q.push(ms("medium", "Which strengthen a causal claim?", ["a randomized controlled experiment", "controlling confounders", "replication", "a single observational correlation"], [0, 1, 2]));
  q.push(tf("medium", "Age is a lurking variable behind shoe size and reading ability in children.", true));
  q.push(tf("medium", "A high correlation can arise purely by coincidence.", true));
  q.push(mc("medium", "A study finds students with more books at home score higher. This does NOT prove:", ["that books cause higher scores", "a correlation exists", "an association", "a positive trend"], 0));
  q.push(mc("medium", "The best design to test whether a drug works is:", ["a randomized controlled trial", "an online poll", "a case study", "a correlation"], 0));
  q.push(tf("medium", "Reverse causation means $Y$ may actually cause $X$, not $X$ causing $Y$.", true));
  q.push(fill("medium", "Bigger shoe size vs. reading: the lurking variable is ___.", ["age"]));
  q.push(fill("medium", "Churches vs. bars per town: the lurking variable is ___.", ["population", "population size"]));
  q.push(mc("medium", "An observational study establishes:", ["correlation, not causation", "causation", "neither", "a controlled effect"], 0));
  q.push(ms("medium", "Which are confounders you might control in a diet study?", ["age", "exercise level", "baseline health", "the outcome weight itself"], [0, 1, 2]));
  q.push(tf("medium", "Randomization is what lets an experiment support causal claims.", true));
  q.push(mc("medium", "'Cities with more police have more crime.' A likely lurking variable is:", ["city population", "police uniforms", "crime type", "none"], 0));
  q.push(fill("medium", "To move from correlation to causation, run a controlled ___.", ["experiment", "trial"]));
  // HARD
  q.push(mc("hard", "A survey concludes 'video games cause better reflexes.' The main flaw is:", ["claiming causation from a correlation", "a small sample only", "no correlation", "too much data"], 0));
  q.push(mc("hard", "Ice cream and sunburn are strongly correlated. The best causal explanation is:", ["a common cause (sunny weather)", "ice cream causes sunburn", "sunburn causes ice cream", "coincidence"], 0));
  q.push(mc("hard", "To test whether a tutoring program raises grades, the strongest design is:", ["randomly assign students to tutoring or not", "compare volunteers to non-volunteers", "survey tutored students only", "correlate hours with grades"], 0));
  q.push(mc("hard", "A study of self-selected gym members finds they are healthier. This is weak evidence for causation because:", ["healthier people may choose to join (self-selection)", "the sample is too big", "there is no correlation", "gyms are random"], 0));
  q.push(mc("hard", "'Countries eating more chocolate win more Nobel prizes.' This is most likely:", ["a confounded/coincidental correlation", "chocolate causing intelligence", "reverse causation", "a controlled result"], 0));
  q.push(mc("hard", "A randomized experiment differs from an observational study mainly by:", ["randomly assigning the treatment", "having more subjects", "computing $r$", "using a survey"], 0));
  q.push(ms("hard", "Which would a good study do to support causation?", ["randomize treatment", "control confounders", "replicate results", "rely on one correlation"], [0, 1, 2]));
  q.push(ms("hard", "Which are non-causal explanations for a correlation?", ["confounding (common cause)", "reverse causation", "coincidence", "a randomized experiment showing an effect"], [0, 1, 2]));
  q.push(tf("hard", "Self-selection bias undermines causal claims from observational studies.", true));
  q.push(tf("hard", "A common cause can produce a strong correlation between two effects that don't cause each other.", true));
  q.push(mc("hard", "A responsible rewording of 'phones cause lower grades' (from a survey) is:", ["'phone use is associated with lower grades'", "'phones definitely lower grades'", "'grades cause phones'", "'no relationship exists'"], 0));
  q.push(mc("hard", "'Cities with more firefighters have more fire damage.' The lurking variable is:", ["the size of the fire (bigger fires draw more firefighters)", "firefighter training", "coincidence only", "reverse only"], 0));
  q.push(tf("hard", "More firefighters at a fire is a response to a bigger fire, not a cause of the damage (reverse/confounded).", true));
  q.push(ms("hard", "For 'books at home vs. grades', which are plausible lurking variables?", ["family income", "parental education", "home study support", "the grade itself"], [0, 1, 2]));
  q.push(mc("hard", "The single most convincing evidence for causation is:", ["a well-designed randomized controlled experiment", "a strong correlation", "a large observational study", "a plausible story"], 0));
  q.push(tf("hard", "Even a near-perfect correlation ($r\\approx1$) does not, alone, prove causation.", true));
  q.push(mc("hard", "A confounding variable in 'coffee vs. heart disease' might be:", ["smoking (linked to both)", "coffee temperature", "cup size", "none"], 0));
  q.push(fill("hard", "The strongest design for causation is a randomized controlled ___.", ["experiment", "trial"]));
  q.push(mc("hard", "'Students who skip breakfast score lower.' Before claiming breakfast causes scores, control for:", ["confounders like sleep and home support", "nothing", "the score itself", "the correlation"], 0));
  q.push(tf("hard", "Reporting an observational finding as 'associated with' rather than 'causes' is more accurate.", true));
  return q;
}

export default [
  { code: "6.1", gen: g61 },
  { code: "6.2", gen: g62 },
  { code: "6.3", gen: g63 },
  { code: "6.4", gen: g64 },
  { code: "6.5", gen: g65 },
];
