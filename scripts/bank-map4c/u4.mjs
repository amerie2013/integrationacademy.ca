// MAP4C Unit 4 — Data Management: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 4.1 One-Variable Statistics & Displaying Data ────────────
function g41() {
  const q = [];
  // EASY
  q.push(mc("easy", "The mean is the:", ["average (sum $\\div$ count)", "middle value", "most common value", "spread"], 0));
  q.push(mc("easy", "The median is the:", ["middle value (sorted)", "average", "most common value", "largest value"], 0));
  q.push(mc("easy", "The mode is the:", ["most frequent value", "average", "middle value", "range"], 0));
  q.push(mc("easy", "The range is:", ["max $-$ min", "the average", "the middle", "the mode"], 0));
  q.push(mc("easy", "Mean of $4,8,6,10,7$:", ["$7$", "$6$", "$8$", "$35$"], 0));
  q.push(mc("easy", "Median of $4,8,6,10,7$:", ["$7$", "$6$", "$8$", "$10$"], 0));
  q.push(mc("easy", "Range of $4,8,6,10,7$:", ["$6$", "$7$", "$10$", "$4$"], 0));
  q.push(ms("easy", "Measures of central tendency:", ["mean", "median", "mode", "range"], [0, 1, 2]));
  q.push(ms("easy", "Ways to display one-variable data:", ["bar graph", "histogram", "box plot", "scatter plot"], [0, 1, 2]));
  q.push(ms("easy", "The mode of $2,4,4,4,6,8$:", ["$4$", "most frequent", "occurs 3 times", "$6$"], [0, 1, 2]));
  q.push(tf("easy", "The mean is the sum divided by the count.", true));
  q.push(tf("easy", "The median is the middle value when data are ordered.", true));
  q.push(tf("easy", "The range is the most common value.", false, "The range is max $-$ min."));
  q.push(tf("easy", "The mode is the most frequent value.", true));
  q.push(num("easy", "Mean of $4,8,6,10,7$.", 7, 0));
  q.push(num("easy", "Median of $4,8,6,10,7$.", 7, 0));
  q.push(num("easy", "Range of $4,8,6,10,7$.", 6, 0));
  q.push(num("easy", "Mode of $2,4,4,4,6,8$.", 4, 0));
  q.push(fill("easy", "The average of a data set is called the ___.", ["mean"]));
  q.push(fill("easy", "The middle value of ordered data is the ___.", ["median"]));
  // MEDIUM
  q.push(mc("medium", "Mean of $12,15,15,18,20,22,25$ (2 dp):", ["$18.14$", "$18$", "$15$", "$20$"], 0));
  q.push(mc("medium", "Median of $12,15,15,18,20,22,25$:", ["$18$", "$18.14$", "$15$", "$20$"], 0));
  q.push(mc("medium", "Mode of $12,15,15,18,20,22,25$:", ["$15$", "$18$", "$25$", "none"], 0));
  q.push(mc("medium", "Median of $85,90,78,92,88,76$ (ordered):", ["$86.5$", "$88$", "$84.83$", "$85$"], 0));
  q.push(mc("medium", "Mean of $85,90,78,92,88,76$ (2 dp):", ["$84.83$", "$86.5$", "$85$", "$90$"], 0));
  q.push(mc("medium", "For $1,2,2,3,4,7,9$: median and mode:", ["$3$ and $2$", "$2$ and $3$", "$4$ and $2$", "$3$ and $4$"], 0));
  q.push(mc("medium", "A histogram groups data into:", ["intervals (bins)", "single points", "pie slices", "lines"], 0));
  q.push(mc("medium", "A box plot shows the:", ["five-number summary", "mean only", "mode only", "raw data"], 0));
  q.push(ms("medium", "For $12,15,15,18,20,22,25$:", ["mean $\\approx18.14$", "median $18$", "mode $15$", "range $10$"], [0, 1, 2]));
  q.push(ms("medium", "The five-number summary includes:", ["minimum", "median", "maximum", "mean"], [0, 1, 2]));
  q.push(tf("medium", "The median of $85,90,78,92,88,76$ is $86.5$.", true));
  q.push(tf("medium", "The mode of $12,15,15,18,20,22,25$ is $15$.", true));
  q.push(num("medium", "Mean of $12,15,15,18,20,22,25$ (2 dp).", 18.14, 0.02));
  q.push(num("medium", "Median of $85,90,78,92,88,76$.", 86.5, 0));
  q.push(num("medium", "Range of $12,15,15,18,20,22,25$.", 13, 0));
  q.push(num("medium", "Mean of $85,90,78,92,88,76$ (2 dp).", 84.83, 0.02));
  q.push(fill("medium", "For $1,2,2,3,4,7,9$, the median is ___.", ["3"]));
  q.push(fill("medium", "A graph grouping data into intervals is a ___.", ["histogram"]));
  q.push(mc("medium", "The mean of $10,20,30,40,50$:", ["$30$", "$25$", "$40$", "$150$"], 0));
  q.push(mc("medium", "For $2,4,4,4,6,8$, the mean (2 dp):", ["$4.67$", "$4$", "$5$", "$6$"], 0));
  // HARD
  q.push(mc("hard", "Adding the outlier $100$ to $5,6,7,8$ changes the mean to (2 dp):", ["$25.20$", "$6.50$", "$7.00$", "$26.00$"], 0));
  q.push(mc("hard", "For $5,6,7,8,100$, the median is:", ["$7$", "$25.2$", "$8$", "$100$"], 0));
  q.push(mc("hard", "An outlier most affects the:", ["mean", "median", "mode", "range... but mean most"], 0));
  q.push(mc("hard", "Which best summarizes skewed data with outliers?", ["median", "mean", "mode", "range"], 0));
  q.push(mc("hard", "Weighted mean: test $20\\%$ ($80$), test $30\\%$ ($90$), final $50\\%$ ($70$):", ["$78$", "$80$", "$76.7$", "$85$"], 0));
  q.push(mc("hard", "For $2,4,6,8,10,12,14,16$: $Q1$, median, $Q3$:", ["$5$, $9$, $13$", "$4$, $9$, $14$", "$5$, $8$, $13$", "$6$, $9$, $12$"], 0));
  q.push(mc("hard", "The interquartile range (IQR) of $2,4,6,8,10,12,14,16$:", ["$8$", "$14$", "$9$", "$4$"], 0));
  q.push(mc("hard", "If every value increases by $5$, the mean:", ["increases by $5$", "is unchanged", "doubles", "increases by $25$"], 0));
  q.push(ms("hard", "For $5,6,7,8,100$, which are true?", ["mean $=25.2$", "median $=7$", "outlier is $100$", "mean $=$ median"], [0, 1, 2]));
  q.push(ms("hard", "The median resists outliers because it:", ["depends on position", "ignores extreme values", "is the middle value", "sums all data"], [0, 1, 2]));
  q.push(tf("hard", "Adding $100$ to $5,6,7,8$ makes the mean $25.2$.", true));
  q.push(tf("hard", "The IQR of $2,4,6,8,10,12,14,16$ is $8$.", true));
  q.push(tf("hard", "The mean is more resistant to outliers than the median.", false, "The median is more resistant."));
  q.push(tf("hard", "Increasing every value by $5$ raises the mean by $5$.", true));
  q.push(num("hard", "Mean of $5,6,7,8,100$ (2 dp).", 25.2, 0.02));
  q.push(num("hard", "IQR of $2,4,6,8,10,12,14,16$.", 8, 0));
  q.push(num("hard", "Weighted mean: $0.2(80)+0.3(90)+0.5(70)$.", 78, 0));
  q.push(num("hard", "Median of $5,6,7,8,100$.", 7, 0));
  q.push(fill("hard", "The middle $50\\%$ of data is measured by the ___ (three letters).", ["IQR"]));
  q.push(fill("hard", "For $2,4,6,8,10,12,14,16$, $Q3=$ ___.", ["13"]));
  return q;
}

// ── 4.2 Sampling, Bias & the Misuse of Statistics ────────────
function g42() {
  const q = [];
  // EASY
  q.push(mc("easy", "A population is:", ["the whole group of interest", "a small subset", "one person", "a graph"], 0));
  q.push(mc("easy", "A sample is:", ["a subset of the population", "the whole group", "a mean", "a bias"], 0));
  q.push(mc("easy", "A random sample gives everyone:", ["an equal chance", "no chance", "a survey", "a bias"], 0));
  q.push(mc("easy", "Bias is:", ["a systematic error favouring an outcome", "random error", "a large sample", "a fair method"], 0));
  q.push(mc("easy", "A census surveys:", ["the entire population", "a sample", "no one", "volunteers only"], 0));
  q.push(mc("easy", "Sampling is used because a census is often:", ["costly or impractical", "always required", "biased", "random"], 0));
  q.push(mc("easy", "A biased sample leads to:", ["misleading conclusions", "perfect results", "a census", "no data"], 0));
  q.push(ms("easy", "Types of sampling:", ["simple random", "systematic", "stratified", "biased-on-purpose"], [0, 1, 2]));
  q.push(ms("easy", "Sources of bias:", ["leading questions", "unrepresentative samples", "voluntary response", "random selection"], [0, 1, 2]));
  q.push(ms("easy", "A good survey question is:", ["clear", "neutral", "unbiased", "leading"], [0, 1, 2]));
  q.push(tf("easy", "A sample is a subset of a population.", true));
  q.push(tf("easy", "Bias is a systematic error that skews results.", true));
  q.push(tf("easy", "A random sample gives some people no chance of selection.", false, "Everyone has an equal chance."));
  q.push(tf("easy", "A census surveys the entire population.", true));
  q.push(num("easy", "A class of $30$; a sample of $6$: the sample size.", 6, 0));
  q.push(num("easy", "A school of $500$; every $10$th student: sample size.", 50, 0));
  q.push(num("easy", "A population of $200$, sample $40$: sampling fraction as a percent.", 20, 0));
  q.push(num("easy", "Survey $25$ of $100$ people: percent sampled.", 25, 0));
  q.push(fill("easy", "The entire group under study is the ___.", ["population"]));
  q.push(fill("easy", "A systematic error favouring an outcome is ___.", ["bias"]));
  // MEDIUM
  q.push(mc("medium", "Surveying only your friends about a school issue is:", ["a biased (unrepresentative) sample", "a census", "random", "stratified"], 0));
  q.push(mc("medium", "'Don't you agree the cafeteria is terrible?' is a:", ["leading question", "neutral question", "random sample", "census"], 0));
  q.push(mc("medium", "Selecting every $10$th name on a list is:", ["systematic sampling", "stratified sampling", "voluntary response", "a census"], 0));
  q.push(mc("medium", "Dividing a school by grade, then sampling each, is:", ["stratified sampling", "systematic sampling", "convenience sampling", "a census"], 0));
  q.push(mc("medium", "An online poll where people opt in is:", ["voluntary-response (biased)", "random", "stratified", "a census"], 0));
  q.push(mc("medium", "A graph with a truncated (non-zero) $y$-axis can:", ["exaggerate differences", "show truth exactly", "reduce bias", "add data"], 0));
  q.push(mc("medium", "Surveying shoppers at one store about all citizens is:", ["convenience sampling (biased)", "stratified", "random", "a census"], 0));
  q.push(mc("medium", "To reduce bias, a sample should be:", ["representative and random", "small", "chosen by the researcher", "volunteers"], 0));
  q.push(ms("medium", "Which introduce bias?", ["leading questions", "voluntary response", "tiny samples", "random selection"], [0, 1, 2]));
  q.push(ms("medium", "Misleading graphs can:", ["truncate the axis", "use unequal scales", "distort areas", "start the axis at zero"], [0, 1, 2]));
  q.push(tf("medium", "A leading question can bias survey results.", true));
  q.push(tf("medium", "Voluntary-response samples are often biased.", true));
  q.push(tf("medium", "Stratified sampling divides the population into groups first.", true));
  q.push(tf("medium", "A truncated axis always makes a graph more honest.", false, "It can exaggerate differences."));
  q.push(num("medium", "Stratified: $300$ students in grades of $100,100,100$; sample $30$ total, per grade.", 10, 0));
  q.push(num("medium", "Every $20$th of $1000$ people: sample size.", 50, 0));
  q.push(num("medium", "A sample of $80$ from $400$: sampling percent.", 20, 0));
  q.push(num("medium", "Stratified sample of $60$ split evenly over $3$ strata: each stratum.", 20, 0));
  q.push(fill("medium", "Selecting every $k$th item is ___ sampling.", ["systematic"]));
  q.push(fill("medium", "A question that pushes an answer is a ___ question.", ["leading", "biased"]));
  // HARD
  q.push(mc("hard", "A poll of $50$ people found $60\\%$ support. The main weakness is:", ["small, possibly unrepresentative sample", "too large a sample", "a census", "no bias possible"], 0));
  q.push(mc("hard", "'Should the city waste money on more parks?' — this question is biased because:", ["'waste money' is loaded", "it is too short", "it names parks", "it is neutral"], 0));
  q.push(mc("hard", "A TV poll asks viewers to call in. Results are biased because:", ["only motivated viewers respond", "the sample is random", "everyone is included", "it is a census"], 0));
  q.push(mc("hard", "A bar graph's $y$-axis runs $90$–$100$, making a $2$-point gap look huge. This is:", ["a misleading (truncated) axis", "correct scaling", "stratified", "random"], 0));
  q.push(mc("hard", "To estimate average height at a school, the best method is:", ["stratified random sample by grade", "surveying the basketball team", "asking volunteers", "a convenience sample"], 0));
  q.push(mc("hard", "A study links ice-cream sales and drownings. The likely explanation is:", ["a lurking variable (hot weather)", "ice cream causes drowning", "drowning causes sales", "no relationship"], 0));
  q.push(mc("hard", "A survey mailed to homeowners over-represents:", ["property owners", "renters", "everyone equally", "no one"], 0));
  q.push(mc("hard", "Reporting only the mean of very skewed data can mislead because:", ["outliers inflate the mean", "the mean is always wrong", "medians lie", "data is fake"], 0));
  q.push(ms("hard", "Why might a $50$-person poll mislead?", ["small sample", "possible selection bias", "wide margin of error", "guaranteed accuracy"], [0, 1, 2]));
  q.push(ms("hard", "Ways to make a survey fair:", ["random sampling", "neutral wording", "representative coverage", "leading questions"], [0, 1, 2]));
  q.push(tf("hard", "Correlation between ice-cream sales and drownings implies causation.", false, "A lurking variable (heat) explains both."));
  q.push(tf("hard", "A truncated $y$-axis can exaggerate small differences.", true));
  q.push(tf("hard", "A voluntary call-in poll is a random sample.", false, "It is a biased, self-selected sample."));
  q.push(tf("hard", "Larger, representative samples generally give more reliable estimates.", true));
  q.push(num("hard", "A poll of $50$ finds $60\\%$ support: number supporting.", 30, 0));
  q.push(num("hard", "Of $400$ surveyed, $25\\%$ biased by wording: number affected.", 100, 0));
  q.push(num("hard", "A stratified sample of $200$ from strata $500,300,200$ (total $1000$), the smallest stratum gets (proportional).", 40, 0));
  q.push(num("hard", "If $30$ of $50$ support, the sample percent supporting.", 60, 0));
  q.push(fill("hard", "A hidden third factor behind a correlation is a ___ variable.", ["lurking", "confounding"]));
  q.push(fill("hard", "A call-in TV poll suffers from ___-response bias.", ["voluntary", "self-selection"]));
  return q;
}

// ── 4.3 Two-Variable Data & Scatter Plots ────────────────────
function g43() {
  const q = [];
  // EASY
  q.push(mc("easy", "A scatter plot shows the relationship between:", ["two variables", "one variable", "three variables", "no variables"], 0));
  q.push(mc("easy", "The independent variable goes on the:", ["$x$-axis", "$y$-axis", "diagonal", "legend"], 0));
  q.push(mc("easy", "The dependent variable goes on the:", ["$y$-axis", "$x$-axis", "legend", "title"], 0));
  q.push(mc("easy", "An upward trend shows a ___ relationship.", ["positive", "negative", "zero", "curved"], 0));
  q.push(mc("easy", "A downward trend shows a ___ relationship.", ["negative", "positive", "zero", "perfect"], 0));
  q.push(mc("easy", "Each point on a scatter plot represents:", ["one $(x,y)$ pair", "a mean", "a whole data set", "an axis"], 0));
  q.push(mc("easy", "Two-variable data is also called:", ["bivariate", "univariate", "categorical", "random"], 0));
  q.push(ms("easy", "A scatter plot can show:", ["positive trend", "negative trend", "no trend", "a pie chart"], [0, 1, 2]));
  q.push(ms("easy", "In (study hours, test score):", ["hours is independent", "score is dependent", "hours on $x$-axis", "score on $x$-axis"], [0, 1, 2]));
  q.push(ms("easy", "Bivariate data has:", ["two variables", "paired values", "$(x,y)$ points", "one variable"], [0, 1, 2]));
  q.push(tf("easy", "A scatter plot displays two-variable data.", true));
  q.push(tf("easy", "The independent variable is plotted on the $x$-axis.", true));
  q.push(tf("easy", "An upward trend indicates a negative relationship.", false, "Upward is positive."));
  q.push(tf("easy", "Each scatter-plot point is one paired observation.", true));
  q.push(num("easy", "A scatter plot of $12$ students uses how many points?", 12, 0));
  q.push(num("easy", "How many variables does bivariate data have?", 2, 0));
  q.push(num("easy", "A data table with $8$ paired rows plots how many points?", 8, 0));
  q.push(num("easy", "How many axes does a scatter plot use?", 2, 0));
  q.push(fill("easy", "Two-variable data is called ___ data.", ["bivariate"]));
  q.push(fill("easy", "The dependent variable is plotted on the ___-axis.", ["y"]));
  // MEDIUM
  q.push(mc("medium", "As study time rises, test scores rise. This is a:", ["positive relationship", "negative relationship", "no relationship", "curved-only relationship"], 0));
  q.push(mc("medium", "As a car's age rises, its value falls. This is a:", ["negative relationship", "positive relationship", "no relationship", "perfect relationship"], 0));
  q.push(mc("medium", "Shoe size vs test score likely shows:", ["no relationship", "strong positive", "strong negative", "perfect"], 0));
  q.push(mc("medium", "In (temperature, ice-cream sales), the independent variable is:", ["temperature", "sales", "the date", "the price"], 0));
  q.push(mc("medium", "A tight, near-linear cloud of points indicates:", ["a strong relationship", "a weak relationship", "no relationship", "an outlier"], 0));
  q.push(mc("medium", "A point far from the pattern is a(n):", ["outlier", "mean", "trend", "axis"], 0));
  q.push(mc("medium", "To predict $y$ within the data range you use:", ["interpolation", "extrapolation", "a census", "a mode"], 0));
  q.push(mc("medium", "To predict $y$ beyond the data range you use:", ["extrapolation", "interpolation", "a median", "a sample"], 0));
  q.push(ms("medium", "A scatter plot's strength and direction describe:", ["how tight the points are", "positive or negative slope", "the trend", "the title"], [0, 1, 2]));
  q.push(ms("medium", "Which pairs likely show a positive relationship?", ["height & weight", "study time & grade", "temperature & sales", "age & car value"], [0, 1, 2]));
  q.push(tf("medium", "Car age vs value is typically a negative relationship.", true));
  q.push(tf("medium", "Shoe size vs test score usually shows no relationship.", true));
  q.push(tf("medium", "An outlier lies close to the main pattern.", false, "An outlier lies far from it."));
  q.push(tf("medium", "Interpolation predicts within the observed data range.", true));
  q.push(num("medium", "Interpolating a line $y=2x+3$ at $x=5$.", 13, 0));
  q.push(num("medium", "Interpolating a line $y=5x+10$ at $x=4$.", 30, 0));
  q.push(num("medium", "A trend line $y=-2x+20$ predicts $y$ at $x=6$.", 8, 0));
  q.push(num("medium", "A trend line $y=1.5x+2$ predicts $y$ at $x=10$.", 17, 0));
  q.push(fill("medium", "Predicting beyond the data range is called ___.", ["extrapolation"]));
  q.push(fill("medium", "A point far from the overall pattern is an ___.", ["outlier"]));
  // HARD
  q.push(mc("hard", "A line of best fit $y=4x+20$ models sales vs ads (\\$1000s). At $x=10$ ads:", ["$60$", "$40$", "$200$", "$24$"], 0));
  q.push(mc("hard", "Extrapolating $y=4x+20$ to $x=100$ is risky because:", ["it is far beyond the data", "the slope is wrong", "$y$ is negative", "it is interpolation"], 0));
  q.push(mc("hard", "Temperature ($x$) vs cricket chirps ($y$): $y=3x-40$. At $20^\\circ$C:", ["$20$", "$60$", "$100$", "$0$"], 0));
  q.push(mc("hard", "A strong correlation between two variables means:", ["they move together predictably", "one causes the other", "no relationship", "a lurking variable is absent"], 0));
  q.push(mc("hard", "In (hours studied, grade), a point $(2,95)$ among low scorers is likely:", ["an outlier", "the mean", "the trend line", "the slope"], 0));
  q.push(mc("hard", "A best-fit line has slope $-1.5$ and intercept $30$. Predicted $y$ at $x=8$:", ["$18$", "$42$", "$12$", "$30$"], 0));
  q.push(mc("hard", "Which prediction from $y=2x+5$ (data $x:1$–$10$) is extrapolation?", ["$x=25$", "$x=5$", "$x=8$", "$x=3$"], 0));
  q.push(mc("hard", "Doubling $x$ in $y=4x+20$ from $10$ to $20$ changes $y$ from $60$ to:", ["$100$", "$120$", "$80$", "$140$"], 0));
  q.push(ms("hard", "For $y=4x+20$, which are true?", ["at $x=10$, $y=60$", "slope $4$", "intercept $20$", "at $x=0$, $y=4$"], [0, 1, 2]));
  q.push(ms("hard", "Cautions when predicting from a trend line:", ["extrapolation is risky", "correlation $\\ne$ causation", "outliers affect the fit", "predictions are exact"], [0, 1, 2]));
  q.push(tf("hard", "For $y=4x+20$, at $x=10$ the prediction is $60$.", true));
  q.push(tf("hard", "Extrapolating far beyond the data can give unreliable predictions.", true));
  q.push(tf("hard", "A strong correlation proves one variable causes the other.", false, "Correlation does not imply causation."));
  q.push(tf("hard", "For $y=3x-40$, at $x=20$ the value is $20$.", true));
  q.push(num("hard", "Predict $y=4x+20$ at $x=10$.", 60, 0));
  q.push(num("hard", "Predict $y=3x-40$ at $x=20$.", 20, 0));
  q.push(num("hard", "Predict $y=-1.5x+30$ at $x=8$.", 18, 0));
  q.push(num("hard", "Change in $y$ for $y=4x+20$ as $x$ goes $10\\to20$.", 40, 0));
  q.push(fill("hard", "In $y=4x+20$, the slope is ___.", ["4"]));
  q.push(fill("hard", "Predicting outside the data range (e.g. $x=25$ from $x:1$–$10$) is ___.", ["extrapolation"]));
  return q;
}

// ── 4.4 Correlation, Trends & the Line of Best Fit ───────────
function g44() {
  const q = [];
  // EASY
  q.push(mc("easy", "The correlation coefficient $r$ ranges from:", ["$-1$ to $1$", "$0$ to $1$", "$0$ to $100$", "$-100$ to $100$"], 0));
  q.push(mc("easy", "$r=1$ means:", ["perfect positive correlation", "no correlation", "perfect negative", "weak"], 0));
  q.push(mc("easy", "$r=-1$ means:", ["perfect negative correlation", "perfect positive", "no correlation", "weak positive"], 0));
  q.push(mc("easy", "$r=0$ means:", ["no linear correlation", "perfect correlation", "strong positive", "strong negative"], 0));
  q.push(mc("easy", "The line of best fit:", ["models the trend of the data", "connects all points", "is always horizontal", "passes through no points"], 0));
  q.push(mc("easy", "A positive $r$ shows points trending:", ["upward", "downward", "flat", "in a circle"], 0));
  q.push(mc("easy", "The line of best fit is used to:", ["make predictions", "list the data", "count points", "shuffle data"], 0));
  q.push(ms("easy", "The correlation coefficient measures:", ["strength", "direction of a linear trend", "how tight the points are", "the mean"], [0, 1, 2]));
  q.push(ms("easy", "Strong correlations have $r$ near:", ["$1$", "$-1$", "$0$", "$0.1$"], [0, 1]));
  q.push(ms("easy", "The line of best fit:", ["minimizes overall distance to points", "models the trend", "enables prediction", "hits every point"], [0, 1, 2]));
  q.push(tf("easy", "The correlation coefficient $r$ lies between $-1$ and $1$.", true));
  q.push(tf("easy", "$r=0$ indicates no linear correlation.", true));
  q.push(tf("easy", "The line of best fit passes exactly through every data point.", false, "It models the overall trend."));
  q.push(tf("easy", "$r=-1$ is a perfect negative correlation.", true));
  q.push(num("easy", "The maximum possible value of $r$.", 1, 0));
  q.push(num("easy", "The minimum possible value of $r$.", -1, 0));
  q.push(num("easy", "The value of $r$ for no linear correlation.", 0, 0));
  q.push(num("easy", "Predict from $y=2x+1$ at $x=3$.", 7, 0));
  q.push(fill("easy", "The correlation coefficient is denoted by the letter ___.", ["r"]));
  q.push(fill("easy", "A line that models a scatter plot's trend is the line of best ___.", ["fit"]));
  // MEDIUM
  q.push(mc("medium", "$r=0.9$ indicates:", ["strong positive correlation", "weak positive", "strong negative", "no correlation"], 0));
  q.push(mc("medium", "$r=-0.85$ indicates:", ["strong negative correlation", "weak negative", "strong positive", "no correlation"], 0));
  q.push(mc("medium", "$r=0.2$ indicates:", ["weak positive correlation", "strong positive", "strong negative", "perfect"], 0));
  q.push(mc("medium", "A line of best fit is $y=2.5x+10$. Predicted $y$ at $x=6$:", ["$25$", "$15$", "$22.5$", "$16$"], 0));
  q.push(mc("medium", "The slope of a best-fit line represents:", ["the rate of change", "the intercept", "the correlation", "the mean"], 0));
  q.push(mc("medium", "The $y$-intercept of $y=2.5x+10$ is:", ["$10$", "$2.5$", "$0$", "$12.5$"], 0));
  q.push(mc("medium", "Which $r$ is the strongest relationship?", ["$-0.95$", "$0.5$", "$0.1$", "$-0.3$"], 0));
  q.push(mc("medium", "A best-fit line $y=-3x+50$ has slope:", ["$-3$", "$50$", "$3$", "$-50$"], 0));
  q.push(ms("medium", "Which indicate strong correlation?", ["$r=0.92$", "$r=-0.88$", "$r=0.15$", "$r=-0.97$"], [0, 1, 3]));
  q.push(ms("medium", "The best-fit line's slope tells you:", ["rate of change", "direction of trend", "units of $y$ per unit $x$", "the correlation exactly"], [0, 1, 2]));
  q.push(tf("medium", "$r=0.9$ is a strong positive correlation.", true));
  q.push(tf("medium", "$r=-0.85$ is a strong negative correlation.", true));
  q.push(num("medium", "Predict $y=2.5x+10$ at $x=6$.", 25, 0));
  q.push(num("medium", "The slope of $y=-3x+50$.", -3, 0));
  q.push(num("medium", "The $y$-intercept of $y=2.5x+10$.", 10, 0));
  q.push(num("medium", "Predict $y=0.5x+4$ at $x=20$.", 14, 0));
  q.push(fill("medium", "An $r$ of $-0.9$ describes a strong ___ correlation.", ["negative"]));
  q.push(fill("medium", "The slope of $y=2.5x+10$ is ___.", ["2.5"]));
  q.push(mc("medium", "Which $r$ shows almost no linear relationship?", ["$0.05$", "$0.9$", "$-0.8$", "$1$"], 0));
  q.push(mc("medium", "A best-fit line predicts best:", ["within the data range", "far beyond the data", "for random points", "never"], 0));
  // HARD
  q.push(mc("hard", "Correlation does not imply:", ["causation", "a trend", "a pattern", "an $r$ value"], 0));
  q.push(mc("hard", "$r=0.8$ between coffee and productivity means:", ["they tend to rise together", "coffee causes productivity", "no relationship", "a perfect line"], 0));
  q.push(mc("hard", "A best-fit line $y=1.8x+5$ models weight (kg) vs age (mo). Rate of change:", ["$1.8$ kg/month", "$5$ kg", "$1.8$ months", "$5$ months"], 0));
  q.push(mc("hard", "Using $y=1.8x+5$ at age $10$ months, predicted weight:", ["$23$ kg", "$18$ kg", "$5$ kg", "$15$ kg"], 0));
  q.push(mc("hard", "An outlier can ___ the line of best fit.", ["pull/distort", "never affect", "delete", "straighten"], 0));
  q.push(mc("hard", "A strong $r$ with a lurking variable suggests:", ["correlation without causation", "direct causation", "no correlation", "a data error"], 0));
  q.push(mc("hard", "A best-fit line $y=-0.6x+40$; when does it predict $y=10$?", ["$x=50$", "$x=30$", "$x=25$", "$x=60$"], 0));
  q.push(mc("hard", "Two variables with $r=0.99$ but no causal link likely share a:", ["lurking variable", "perfect cause", "zero trend", "negative slope"], 0));
  q.push(ms("hard", "For $y=1.8x+5$, which are true?", ["slope $1.8$", "at $x=10$, $y=23$", "intercept $5$", "at $x=0$, $y=1.8$"], [0, 1, 2]));
  q.push(ms("hard", "True about correlation:", ["$-1\\le r\\le1$", "correlation $\\ne$ causation", "outliers distort $r$", "$r=2$ is possible"], [0, 1, 2]));
  q.push(tf("hard", "A high correlation can occur without any causal link.", true));
  q.push(tf("hard", "An outlier can distort the slope of a best-fit line.", true));
  q.push(tf("hard", "$r$ can equal $1.5$ for a very strong trend.", false, "$r$ is capped at $1$."));
  q.push(tf("hard", "For $y=1.8x+5$, the predicted value at $x=10$ is $23$.", true));
  q.push(num("hard", "Predict $y=1.8x+5$ at $x=10$.", 23, 0));
  q.push(num("hard", "Solve $-0.6x+40=10$ for $x$.", 50, 0));
  q.push(num("hard", "The rate of change (slope) of $y=1.8x+5$.", 1.8, 0.01));
  q.push(num("hard", "Predict $y=-0.6x+40$ at $x=20$.", 28, 0));
  q.push(fill("hard", "Correlation does not imply ___.", ["causation"]));
  q.push(fill("hard", "A hidden variable driving a correlation is a ___ variable.", ["lurking", "confounding"]));
  return q;
}

// ── 4.5 Probability & Making Decisions ───────────────────────
function g45() {
  const q = [];
  // EASY
  q.push(mc("easy", "A probability is always between:", ["$0$ and $1$", "$-1$ and $1$", "$0$ and $100$", "$1$ and $10$"], 0));
  q.push(mc("easy", "$P(\\text{certain event})=$", ["$1$", "$0$", "$0.5$", "$100$"], 0));
  q.push(mc("easy", "$P(\\text{impossible event})=$", ["$0$", "$1$", "$0.5$", "$-1$"], 0));
  q.push(mc("easy", "$P(\\text{heads})$ on a fair coin:", ["$\\tfrac12$", "$1$", "$\\tfrac14$", "$0$"], 0));
  q.push(mc("easy", "$P(\\text{even})$ on a fair die:", ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac16$", "$\\tfrac23$"], 0));
  q.push(mc("easy", "$P(\\text{rolling a }3)$ on a die:", ["$\\tfrac16$", "$\\tfrac12$", "$\\tfrac13$", "$3$"], 0));
  q.push(mc("easy", "Probability $=\\dfrac{\\text{favourable}}{\\text{?}}$", ["total outcomes", "favourable", "$1$", "the mean"], 0));
  q.push(ms("easy", "Which are valid probabilities?", ["$0$", "$0.5$", "$1$", "$1.5$"], [0, 1, 2]));
  q.push(ms("easy", "On a fair die, $P(\\text{even})=\\tfrac12$ because:", ["$3$ evens", "$6$ outcomes", "$3/6$", "only $1$ even"], [0, 1, 2]));
  q.push(ms("easy", "Complementary events:", ["sum to $1$", "$P(A)+P(\\text{not }A)=1$", "are opposites", "sum to $0$"], [0, 1, 2]));
  q.push(tf("easy", "A probability can be greater than $1$.", false, "It is between $0$ and $1$."));
  q.push(tf("easy", "$P(\\text{impossible})=0$.", true));
  q.push(tf("easy", "$P(\\text{heads})=\\tfrac12$ on a fair coin.", true));
  q.push(tf("easy", "Complementary probabilities sum to $1$.", true));
  q.push(num("easy", "$P(\\text{even})$ on a fair die as a decimal.", 0.5, 0.001));
  q.push(num("easy", "$P(\\text{rolling a }3)$ on a die as a decimal (2 dp).", 0.17, 0.01));
  q.push(num("easy", "$P(\\text{heads})$ on a fair coin as a decimal.", 0.5, 0.001));
  q.push(num("easy", "$P(\\text{drawing a heart})$ from a deck as a decimal.", 0.25, 0.001));
  q.push(fill("easy", "The probability of a certain event is ___.", ["1"]));
  q.push(fill("easy", "$P(A)+P(\\text{not }A)=$ ___.", ["1"]));
  // MEDIUM
  q.push(mc("medium", "$P(\\text{sum}=7)$ with two dice:", ["$\\tfrac16$", "$\\tfrac{1}{12}$", "$\\tfrac{7}{36}$", "$\\tfrac{5}{36}$"], 0));
  q.push(mc("medium", "$P(\\text{face card})$ from a deck:", ["$\\tfrac{3}{13}$", "$\\tfrac{1}{4}$", "$\\tfrac{1}{13}$", "$\\tfrac{4}{13}$"], 0));
  q.push(mc("medium", "A bag of $5$ red, $3$ blue. $P(\\text{red})$:", ["$\\tfrac58$", "$\\tfrac38$", "$\\tfrac12$", "$\\tfrac53$"], 0));
  q.push(mc("medium", "$P(\\text{not red})$ from that bag:", ["$\\tfrac38$", "$\\tfrac58$", "$\\tfrac13$", "$\\tfrac12$"], 0));
  q.push(mc("medium", "Two coins: $P(\\text{both heads})$:", ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac34$", "$1$"], 0));
  q.push(mc("medium", "Two coins: $P(\\text{at least one head})$:", ["$\\tfrac34$", "$\\tfrac14$", "$\\tfrac12$", "$1$"], 0));
  q.push(mc("medium", "Independent events $A,B$: $P(A\\text{ and }B)=$", ["$P(A)\\cdot P(B)$", "$P(A)+P(B)$", "$P(A)-P(B)$", "$1$"], 0));
  q.push(mc("medium", "$P(6\\text{ then }6)$ on two rolls:", ["$\\tfrac{1}{36}$", "$\\tfrac16$", "$\\tfrac{2}{6}$", "$\\tfrac{1}{12}$"], 0));
  q.push(ms("medium", "For a bag of $5$R, $3$B:", ["$P(R)=\\tfrac58$", "$P(B)=\\tfrac38$", "$P(R)+P(B)=1$", "$P(R)=\\tfrac53$"], [0, 1, 2]));
  q.push(ms("medium", "Independent events:", ["multiply probabilities", "one doesn't affect the other", "e.g. two coin flips", "always add"], [0, 1, 2]));
  q.push(tf("medium", "$P(\\text{sum}=7)$ with two dice is $\\tfrac16$.", true));
  q.push(tf("medium", "For independent events, $P(A\\text{ and }B)=P(A)P(B)$.", true));
  q.push(num("medium", "$P(\\text{sum}=7)$ with two dice as a decimal (2 dp).", 0.17, 0.01));
  q.push(num("medium", "$P(\\text{red})$ from $5$R, $3$B as a decimal (3 dp).", 0.625, 0.005));
  q.push(num("medium", "$P(\\text{both heads})$ on two coins as a decimal.", 0.25, 0.001));
  q.push(num("medium", "$P(\\text{at least one head})$ on two coins as a decimal.", 0.75, 0.001));
  q.push(fill("medium", "$P(\\text{face card})$ from a deck is $\\tfrac{3}{\\text{___}}$.", ["13"]));
  q.push(fill("medium", "For independent events you ___ the probabilities.", ["multiply"]));
  q.push(mc("medium", "$P(A)=0.5$, $P(B)=0.3$, independent. $P(A\\text{ and }B)$:", ["$0.15$", "$0.8$", "$0.2$", "$0.5$"], 0));
  q.push(mc("medium", "Odds of $3:2$ in favour correspond to probability:", ["$\\tfrac35$", "$\\tfrac23$", "$\\tfrac32$", "$\\tfrac25$"], 0));
  // HARD
  q.push(mc("hard", "A bag of $5$R, $3$B; draw $2$ without replacement. $P(\\text{both red})$ (2 dp):", ["$0.36$", "$0.39$", "$0.63$", "$0.25$"], 0));
  q.push(mc("hard", "Expected value: win \\$10 with $P=0.7$, lose \\$5 with $P=0.3$:", ["\\$5.50", "\\$5.00", "\\$7.00", "\\$2.50"], 0));
  q.push(mc("hard", "A \\$2 lottery ticket wins \\$100 with $P=0.01$. Expected value of a ticket:", ["\\$1.00", "\\$100", "\\$0.02", "\\$2.00"], 0));
  q.push(mc("hard", "Given the \\$2 cost, that lottery ticket has a net expected value of:", ["$-\\$1.00$", "\\$1.00", "\\$0", "$-\\$2.00$"], 0));
  q.push(mc("hard", "Two independent events, each $P=0.4$. $P(\\text{both})$:", ["$0.16$", "$0.8$", "$0.4$", "$0.2$"], 0));
  q.push(mc("hard", "$P(\\text{at least one 6})$ in two rolls (2 dp):", ["$0.31$", "$0.17$", "$0.03$", "$0.33$"], 0));
  q.push(mc("hard", "A game: win \\$6 with $P=\\tfrac13$, lose \\$3 with $P=\\tfrac23$. Expected value:", ["$\\$0$", "\\$1", "$-\\$1$", "\\$3"], 0));
  q.push(mc("hard", "Should you play a game with expected value $-\\$1$ per play?", ["no (you lose on average)", "yes (you win)", "it is fair", "always yes"], 0));
  q.push(ms("hard", "For draw-2-no-replacement from $5$R, $3$B:", ["$P(\\text{RR})=\\tfrac58\\cdot\\tfrac47$", "$=\\tfrac{5}{14}\\approx0.36$", "no replacement changes the 2nd draw", "draws are independent"], [0, 1, 2]));
  q.push(ms("hard", "Expected value:", ["weights outcomes by probability", "guides decisions", "can be negative", "is always positive"], [0, 1, 2]));
  q.push(tf("hard", "$P(\\text{both red})$ drawing $2$ of $5$R, $3$B without replacement is about $0.36$.", true));
  q.push(tf("hard", "An expected value of $-\\$1$ per play means a long-run loss.", true));
  q.push(tf("hard", "Drawing without replacement makes the two draws independent.", false, "It makes them dependent."));
  q.push(tf("hard", "$P(\\text{at least one 6})$ in two rolls is about $0.31$.", true));
  q.push(num("hard", "Expected value: $0.7(10)+0.3(-5)$ (dollars).", 5.5, 0.01));
  q.push(num("hard", "$P(\\text{both red})$ from $5$R, $3$B, no replacement (2 dp).", 0.36, 0.01));
  q.push(num("hard", "$P(\\text{at least one 6})$ in two rolls (2 dp).", 0.31, 0.01));
  q.push(num("hard", "Expected value: win \\$6 at $\\tfrac13$, lose \\$3 at $\\tfrac23$ (dollars).", 0, 0.01));
  q.push(fill("hard", "The long-run average outcome of a random event is its ___ value.", ["expected"]));
  q.push(fill("hard", "Odds of $3:2$ give a probability of $\\tfrac35$, i.e. ___ as a decimal.", ["0.6"]));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
  { code: "4.5", gen: g45 },
];
