// MDM4U Unit 6 — Two-Variable Statistics: question bank.
// IN SCOPE: r and the line of best fit come FROM TECHNOLOGY, then are interpreted;
// residual = observed - predicted; r^2. NO by-hand least-squares derivation.
// 60 per topic: 20 easy / 20 medium / 20 hard. Original, creative contexts.
import { mc, ms, tf, num, fill, order, match } from "./helpers.mjs";

// ── 6.1 Scatter Plots & Correlation (incl. cause and effect) ───
// 60 questions (20 easy / 20 medium / 20 hard). Contexts are deliberately
// different from the lesson and worksheet. No probability. r values quoted for
// data sets were checked against the data; correct answers are spread across
// positions by MCV rather than always being first.
let _k = 0;
const MCV = (d, prompt, correct, wrong, fb = "") => {
  const pos = (_k++ * 3 + 1) % (wrong.length + 1);
  const ch = [...wrong]; ch.splice(pos, 0, correct);
  return mc(d, prompt, ch, pos, fb);
};
function g61() {
  const q = [];
  // EASY ---------------------------------------------------------------
  q.push(MCV("easy", "A baker records the oven temperature and the time a loaf takes to brown. Which is the explanatory variable?", "oven temperature", ["browning time", "both", "neither"], "The temperature is set first and is used to predict the time."));
  q.push(MCV("easy", "On a scatter plot the response variable is placed on the:", "vertical axis", ["horizontal axis", "either axis, chosen at random", "a third axis"]));
  q.push(tf("easy", "A scatter plot is made by joining consecutive points with line segments.", false, "Plot one point per pair and do not join them."));
  q.push(MCV("easy", "As $x$ increases, $y$ tends to decrease. The direction of the relationship is:", "negative", ["positive", "none", "curved"]));
  q.push(ms("easy", "Which belong in a complete description of a scatter plot?", ["direction", "form", "strength", "unusual features such as outliers or clusters", "the mode of $x$"], [0, 1, 2, 3]));
  q.push(fill("easy", "A single point lying far from the overall pattern is called an ___.", ["outlier"]));
  q.push(MCV("easy", "Which of these cannot be a correlation coefficient?", "$1.2$", ["$-0.9$", "$0.35$", "$0$"], "$r$ always lies between $-1$ and $1$."));
  q.push(MCV("easy", "A value of $r=-0.72$ describes a relationship that is:", "moderate, negative and linear", ["strong and positive", "weak and negative", "moderate and positive"], "The sign gives the direction; $|r|=0.72$ falls in the moderate band."));
  q.push(tf("easy", "A correlation of $r=0$ means there is no linear relationship between the variables.", true));
  q.push(MCV("easy", "Which value of $r$ shows the strongest linear relationship?", "$-0.85$", ["$0.6$", "$0.2$", "$-0.4$"], "Strength is $|r|$, so the negative sign does not make it weaker."));
  q.push(num("easy", "All points lie exactly on a line that falls to the right. What is $r$?", -1, 0));
  q.push(order("easy", "Put the steps for building a scatter plot in order.", ["Decide which variable is explanatory and which is the response", "Label both axes with names and units", "Choose an even scale for each axis that covers the data", "Plot one point for each pair of values"]));
  q.push(match("easy", "Match each correlation coefficient to its description.", ["$r=0.93$", "$r=-0.58$", "$r=0.12$", "$r=-0.97$"], ["very weak or none", "strong positive", "strong negative", "moderate negative"], [1, 3, 0, 2]));
  q.push(MCV("easy", "Unlike the axes of a bar graph, the axes of a scatter plot:", "do not have to start at 0", ["must always start at 0", "must have the same scale", "must be in the same units"]));
  q.push(MCV("easy", "Which spreadsheet function returns the correlation coefficient of two columns?", "CORREL", ["AVERAGE", "MEDIAN", "COUNTIF"]));
  q.push(MCV("easy", "Two variables are strongly correlated because both depend on a third variable. This type of relationship is:", "common cause", ["reverse cause and effect", "accidental", "cause and effect"]));
  q.push(fill("easy", "A strong correlation that exists purely by coincidence is called an ___ relationship.", ["accidental"]));
  q.push(tf("easy", "A strong correlation proves that one variable causes the other.", false));
  q.push(MCV("easy", "Which kind of study gives the strongest support for a cause-and-effect claim?", "a randomized experiment", ["a survey with no comparison group", "a single observed correlation", "a personal story"]));
  q.push(MCV("easy", "A coach records weekly swim laps and each swimmer's 400 m time. To predict the time from the laps, the explanatory variable is:", "weekly laps", ["400 m time", "the swimmer's name", "the coach"]));

  // MEDIUM -------------------------------------------------------------
  q.push(MCV("medium", "The points $(1,9),(2,8),(3,6),(4,5),(5,3),(6,2)$ give $r=-0.995$. The best description is:", "strong, negative, linear", ["strong, positive, linear", "weak, negative, linear", "strong, negative, curved"]));
  q.push(MCV("medium", "Distances measured in kilometres are converted to metres. The correlation with another variable:", "stays the same", ["is multiplied by $1000$", "becomes negative", "becomes $0$"]));
  q.push(MCV("medium", "Swapping which variable is on the $x$-axis and which is on the $y$-axis changes $r$ to:", "the same value", ["its negative", "its reciprocal", "$0$"]));
  q.push(num("medium", "Two variables have $r=0.64$. Every $y$-value is replaced by $50-y$. The new correlation is:", -0.64, 0.001));
  q.push(MCV("medium", "Study A reports $r=0.70$ and Study B reports $r=-0.78$. Which relationship is stronger and why?", "Study B, because $|-0.78|>|0.70|$", ["Study A, because it is positive", "Study B, because it is negative", "They are equal"]));
  q.push(ms("medium", "Which statements about $r$ are true?", ["$-1\\le r\\le1$", "the sign of $r$ gives the direction", "$r$ has no units", "$r$ is unaffected by outliers"], [0, 1, 2]));
  q.push(MCV("medium", "Points follow a clear, symmetric arch. The correlation coefficient will be close to $0$ because:", "$r$ measures only straight-line association", ["the points are unrelated", "arches always have $r=1$", "$r$ cannot be calculated for arches"]));
  q.push(MCV("medium", "A tight rising band of points has one extra point far above the band. Compared with the band alone, $|r|$ will most likely:", "decrease", ["increase", "stay exactly the same", "become greater than $1$"]));
  q.push(MCV("medium", "Two separate clusters give a strong overall $r$, but $r$ is near $0$ inside each cluster. The best conclusion is:", "the overall trend comes from the gap between the clusters, not a linear trend within them", ["the variables are strongly linearly related everywhere", "$r$ must have been calculated wrongly", "each cluster has $r=1$"]));
  q.push(tf("medium", "A relationship can be strong and non-linear while $r$ is close to $0$.", true));
  q.push(MCV("medium", "Sales of scarves and sales of mittens rise and fall together through the year. The most likely type of relationship is:", "common cause (cold weather)", ["cause and effect", "reverse cause and effect", "accidental"]));
  q.push(MCV("medium", "A drone's flight time is strongly correlated with its battery capacity. The most likely type of relationship is:", "cause and effect", ["common cause", "accidental", "presumed"], "A larger battery directly supplies more energy."));
  q.push(MCV("medium", "Cities with more ambulances report more heart-attack emergencies. The most likely type of relationship is:", "reverse cause and effect (more emergencies lead to more ambulances)", ["cause and effect (ambulances cause heart attacks)", "accidental", "presumed"]));
  q.push(MCV("medium", "A city's yearly rainfall is correlated with its hockey team's goals scored. The most likely type of relationship is:", "accidental", ["cause and effect", "reverse cause and effect", "common cause"]));
  q.push(MCV("medium", "Hours spent gardening are correlated with reported happiness. It seems sensible, but neither causes the other and no single third variable is obvious. The type is:", "presumed", ["cause and effect", "accidental", "reverse cause and effect"]));
  q.push(match("medium", "Match each description to the type of relationship.", ["Both variables depend on a third variable", "The roles of the variables are backwards", "A change in one directly produces a change in the other", "A pure coincidence"], ["accidental", "cause and effect", "common cause", "reverse cause and effect"], [2, 3, 1, 0]));
  q.push(MCV("medium", "A study finds that children who eat breakfast earn higher marks. A plausible lurking variable is:", "a stable family routine", ["the child's name", "the colour of the cereal box", "the number of letters in the school's name"]));
  q.push(tf("medium", "Calling a variable the explanatory variable means that it is the cause.", false));
  q.push(num("medium", "Given $r=-0.9,\\ 0.3,\\ -0.55,\\ 0.75$, how many show at least a moderate relationship ($|r|\\ge0.5$)?", 3, 0));
  q.push(MCV("medium", "Six points give $r=0.89$. The relationship is best described as:", "strong, positive, linear", ["moderate, positive, linear", "strong, negative, linear", "weak, positive, linear"], "Points: $(2,3),(4,5),(6,4),(8,7),(10,6),(12,9)$."));

  // HARD ---------------------------------------------------------------
  q.push(num("hard", "A scatter has $r=0.82$. After one off-trend point is removed it becomes $0.96$. By how much did $r$ increase?", 0.14, 0.001));
  q.push(MCV("hard", "Why can the axes of a scatter plot start above $0$ without being misleading?", "the pattern of the points, not the size of bars, carries the information", ["scatter plots never need labelled axes", "the axes must start at the smallest data value", "because $r$ ignores the scale"]));
  q.push(MCV("hard", "In 12 towns the number of bakeries is strongly correlated with the number of library hours ($r=0.88$). The best explanation is:", "a common cause: town population", ["bakeries cause libraries to open longer", "libraries cause bakeries to open", "the correlation must be accidental"]));
  q.push(ms("hard", "Which would weaken a claim that $x$ causes $y$?", ["a plausible third variable that drives both", "a plausible reason that $y$ could cause $x$", "the data are only observational, not experimental", "a clear physical mechanism linking $x$ to $y$"], [0, 1, 2]));
  q.push(MCV("hard", "The points $(0,10),(2,4),(4,1),(6,0),(8,1),(10,4),(12,10)$ give $r=0$. Which statement is correct?", "there is a strong U-shaped relationship but no linear relationship", ["there is no relationship of any kind", "there is a strong positive linear relationship", "$r$ was calculated incorrectly"]));
  q.push(num("hard", "Height in inches and weight in pounds have $r=0.76$. After converting height to centimetres and weight to kilograms, what is $r$?", 0.76, 0.001));
  q.push(num("hard", "$r=0.58$ for $(x,y)$. Every $y$ is replaced by $3-2y$. The new correlation is:", -0.58, 0.001));
  q.push(MCV("hard", "A scientist wants to know whether a new sleep schedule improves memory scores. Why should volunteers be assigned to the schedule at random?", "it spreads lurking variables evenly across the groups", ["it guarantees $r=1$", "it makes the sample larger", "it removes the need for a comparison group"]));
  q.push(ms("hard", "Which are sound reasons to remove an outlier?", ["a confirmed recording error", "a documented instrument malfunction", "it lowers $r$", "it makes the plot look untidy"], [0, 1]));
  q.push(MCV("hard", "An observational study of 400 adults finds $r=-0.91$ between daily servings of vegetables and body-mass index. The best statement is:", "a strong negative association was found, but cause and effect has not been established", ["vegetables are proven to lower body-mass index", "there is no relationship", "body-mass index is proven to cause vegetable eating"]));
  q.push(order("hard", "Order these from weakest to strongest evidence for a cause-and-effect claim.", ["a single personal story", "one observed correlation in a small data set", "repeated observed correlations with a sensible mechanism", "a randomized experiment with a comparison group"]));
  q.push(tf("hard", "If swapping the axes changes which variable is called explanatory, the value of $r$ also changes.", false));
  q.push(num("hard", "The points $(1,2),(2,4),(3,6),(4,8)$ lie on a rising line. What is $r$?", 1, 0));
  q.push(num("hard", "The points $(1,8),(2,6),(3,4),(4,2)$ lie on a falling line. What is $r$?", -1, 0));
  q.push(MCV("hard", "A student reads $r=-0.62$ and says, \"62% of nights have less sleep when screen time is higher.\" The error is:", "$r$ is not a percentage of cases; it measures the strength of a linear trend", ["there is none; the statement is correct", "$r$ should be positive", "$r=-0.62$ means no relationship"]));
  q.push(MCV("hard", "Two scatter plots have the same slope of trend, but plot A has $r=0.98$ and plot B has $r=0.55$. What differs?", "the points in A cluster much more tightly about the line", ["plot B rises faster", "plot A has more outliers", "plot B has a negative direction"]));
  q.push(MCV("hard", "It seems sensible that scores on a geography test and a history test move together, but neither causes the other and no single third variable is obvious. The best classification is:", "presumed relationship", ["cause and effect", "accidental relationship", "reverse cause and effect"]));
  q.push(MCV("hard", "A newspaper claims that a strong correlation between hours of video-gaming and weekly reading time shows gaming reduces reading. Which response is best?", "Ask whether a third variable or reverse cause could explain it, and look for experimental evidence", ["Accept the claim because $|r|$ is high", "Reject the data because $r$ is negative", "Conclude the relationship is accidental"]));
  q.push(MCV("hard", "A scatter plot rises quickly then levels off, and $r=0.9$. Which description is best?", "strong, positive and non-linear (curved)", ["strong, positive and linear", "no relationship", "strong, negative and linear"]));
  q.push(MCV("hard", "Before describing a scatter plot with $r$, the most important first step is to:", "look at the plot for curves, outliers and clusters", ["round $r$ to one decimal", "delete the largest value", "swap the axes"]));
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
