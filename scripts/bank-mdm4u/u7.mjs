// MDM4U Unit 7 — The Culminating Investigation: question bank.
// The methodology unit: designing a study, collecting/managing data, analysing,
// and communicating. 60 per topic: 20 easy / 20 medium / 20 hard.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 7.1 Designing the Study ─────────────────────────────────
function g71() {
  const q = [];
  // EASY
  q.push(mc("easy", "A good research question should be:", ["focused and measurable", "vague", "unanswerable", "about many topics at once"], 0));
  q.push(mc("easy", "The variable you think influences another is the:", ["explanatory variable", "response variable", "confounder", "sample"], 0));
  q.push(mc("easy", "A testable prediction of a relationship is a:", ["hypothesis", "conclusion", "sample", "census"], 0));
  q.push(mc("easy", "Only which design can establish causation?", ["an experiment", "an observational study", "a survey", "a case study"], 0));
  q.push(mc("easy", "The whole group of interest is the:", ["population", "sample", "statistic", "frame"], 0));
  q.push(mc("easy", "A subset actually studied is the:", ["sample", "population", "parameter", "census"], 0));
  q.push(ms("easy", "Which are parts of designing a study?", ["a research question", "identifying variables", "a hypothesis", "the final graph only"], [0, 1, 2]));
  q.push(ms("easy", "Which are study designs?", ["observational", "experimental", "survey", "guessing"], [0, 1, 2]));
  q.push(tf("easy", "An experiment imposes a treatment; an observational study does not.", true));
  q.push(tf("easy", "Only a controlled experiment can show cause and effect.", true));
  q.push(tf("easy", "A hypothesis is a testable prediction.", true));
  q.push(fill("easy", "The variable that responds is the ___ variable.", ["response"]));
  q.push(fill("easy", "The whole group of interest is the ___.", ["population"]));
  q.push(mc("easy", "In 'does study time affect scores', the response variable is:", ["test score", "study time", "the student", "the sample"], 0));
  q.push(mc("easy", "Informed consent is an example of a:", ["ethical requirement", "sampling method", "statistic", "graph"], 0));
  q.push(tf("easy", "Studies of people require ethical safeguards like consent and privacy.", true));
  q.push(mc("easy", "A one-variable question asks about:", ["a single measured quantity", "a relationship between two variables", "three variables", "causation"], 0));
  q.push(fill("easy", "A testable prediction is a ___.", ["hypothesis"]));
  q.push(tf("easy", "A researchable question is specific and answerable with data.", true));
  q.push(mc("easy", "'Is height related to shoe size?' is a ___ question.", ["two-variable", "one-variable", "categorical only", "causal"], 0));
  // MEDIUM
  q.push(mc("medium", "To test whether a fertilizer boosts yield, the design that proves cause is:", ["randomly assign plots to fertilizer or not", "survey farmers who use it", "observe existing fields", "correlate use with yield"], 0));
  q.push(mc("medium", "A study links coffee to poor sleep, but coffee drinkers also work late. The design must control the:", ["confounder (work hours)", "sample size", "response variable", "graph type"], 0));
  q.push(mc("medium", "The target population differs from the sampling frame when:", ["the list you sample from misses some of the population", "they are identical", "you use a census", "you randomize"], 0));
  q.push(mc("medium", "Classify: 'What is the average commute time?'", ["one-variable", "two-variable", "causal", "experimental"], 0));
  q.push(mc("medium", "Classify: 'Does commute distance affect commute time?'", ["two-variable", "one-variable", "categorical", "a census"], 0));
  q.push(mc("medium", "To ethically study sleep and grades, you would likely use:", ["an observational study (can't force sleep)", "a forced-sleep experiment", "no consent", "a census only"], 0));
  q.push(ms("medium", "Which improve a study's design?", ["random assignment", "controlling confounders", "a clear hypothesis", "a leading question"], [0, 1, 2]));
  q.push(ms("medium", "Which are two-variable questions?", ["does exercise affect heart rate?", "is age related to income?", "what is the median salary?", "does diet affect weight?"], [0, 1, 3]));
  q.push(tf("medium", "Randomly assigning a treatment controls for confounding variables.", true));
  q.push(tf("medium", "You cannot ethically force people to change sleep, so observational study is used.", true));
  q.push(mc("medium", "The explanatory variable in 'does fertilizer amount change plant height?' is:", ["fertilizer amount", "plant height", "the plot", "the season"], 0));
  q.push(fill("medium", "A study that imposes a treatment is an ___.", ["experiment"]));
  q.push(fill("medium", "'How many hours do teens sleep?' is a ___-variable question.", ["one", "single"]));
  q.push(mc("medium", "A confounder is a variable that:", ["affects both the explanatory and response variables", "is the outcome", "is never measured", "is random"], 0));
  q.push(ms("medium", "Which are ethical requirements when studying people?", ["informed consent", "privacy/anonymity", "right to withdraw", "a leading question"], [0, 1, 2]));
  q.push(tf("medium", "A well-chosen hypothesis states the expected relationship.", true));
  q.push(mc("medium", "The best population definition for a school-policy study is:", ["all students affected by the policy", "only the principal", "a random number", "the researcher"], 0));
  q.push(fill("medium", "A variable that influences both others is a ___ variable.", ["confounding", "lurking"]));
  q.push(mc("medium", "'Does music while studying affect recall?' — a design that could show causation:", ["a randomized experiment", "an online poll", "an observational survey", "a correlation"], 0));
  q.push(tf("medium", "Identifying explanatory and response variables is part of designing a study.", true));
  // HARD
  q.push(mc("hard", "A drug trial randomly assigns patients to the drug or a placebo. Randomization mainly ensures:", ["the groups differ only by treatment (on average)", "a larger sample", "a higher correlation", "no need for ethics"], 0));
  q.push(mc("hard", "A sleep-and-grades observational study finds a link. To strengthen a causal claim, you should:", ["control confounders (e.g., study time, income)", "increase $r$ only", "ignore other variables", "use a leading question"], 0));
  q.push(mc("hard", "A phone survey during work hours will under-represent:", ["people at work (nonresponse/coverage)", "no one", "the whole population equally", "retirees"], 0));
  q.push(mc("hard", "A study wants to compare two teaching methods. The strongest design is:", ["randomly assign classes to each method", "let teachers choose their method", "compare volunteers", "survey students' opinions"], 0));
  q.push(mc("hard", "Blinding (subjects/assessors unaware of the group) reduces:", ["bias from expectations", "sample size", "the correlation", "randomization"], 0));
  q.push(mc("hard", "A 'placebo' is used to:", ["control for the expectation of treatment", "increase the dose", "bias results", "replace randomization"], 0));
  q.push(ms("hard", "Which features make an experiment convincing for causation?", ["randomization", "a control group", "blinding", "self-selection"], [0, 1, 2]));
  q.push(ms("hard", "Which threaten a causal conclusion?", ["confounding variables", "self-selection", "nonresponse bias", "random assignment"], [0, 1, 2]));
  q.push(tf("hard", "Random assignment (not just random sampling) is what supports causal claims.", true));
  q.push(tf("hard", "A control group provides a baseline to compare the treatment against.", true));
  q.push(mc("hard", "An observational study can suggest a relationship but cannot rule out:", ["lurking variables", "the mean", "the sample size", "the graph"], 0));
  q.push(mc("hard", "To study whether a new app improves fitness, the best design assigns users:", ["randomly to the app or a control", "by who volunteers", "by who is already fit", "by age only"], 0));
  q.push(ms("hard", "For a diet experiment, which confounders should be controlled?", ["baseline weight", "exercise level", "age", "the final weight (the outcome)"], [0, 1, 2]));
  q.push(mc("hard", "A study's sampling frame is a phone book. A likely coverage problem is:", ["people without listed phones are excluded", "the sample is too random", "there is no population", "everyone is included"], 0));
  q.push(tf("hard", "Matching subjects on key variables is one way to control confounders.", true));
  q.push(mc("hard", "The difference between random SAMPLING and random ASSIGNMENT is:", ["sampling picks who is studied; assignment sets who gets the treatment", "they are identical", "only sampling matters for causation", "assignment picks the population"], 0));
  q.push(ms("hard", "Which are ethical concerns in a human experiment?", ["informed consent", "minimizing harm", "confidentiality", "hiding the true purpose without justification"], [0, 1, 2]));
  q.push(tf("hard", "Random sampling supports generalization; random assignment supports causation.", true));
  q.push(mc("hard", "A design flaw where the treatment group self-selects leads to:", ["selection bias (confounded results)", "a stronger conclusion", "randomization", "no bias"], 0));
  q.push(fill("hard", "Random ___ (of the treatment) is what lets an experiment support causation.", ["assignment"]));
  return q;
}

// ── 7.2 Collecting & Managing Data ──────────────────────────
function g72() {
  const q = [];
  // EASY
  q.push(mc("easy", "Data you collect yourself is:", ["primary", "secondary", "categorical", "continuous"], 0));
  q.push(mc("easy", "Data already published by others is:", ["secondary", "primary", "numerical", "discrete"], 0));
  q.push(mc("easy", "Eye colour is what type of data?", ["categorical", "numerical", "continuous", "discrete numerical"], 0));
  q.push(mc("easy", "Number of siblings is:", ["numerical discrete", "categorical", "continuous", "primary only"], 0));
  q.push(mc("easy", "Exact height is:", ["numerical continuous", "categorical", "discrete", "secondary"], 0));
  q.push(mc("easy", "An age recorded as $200$ is likely:", ["an error/outlier", "correct", "a category", "a mean"], 0));
  q.push(ms("easy", "Which are categorical variables?", ["favourite colour", "brand of phone", "eye colour", "exact weight"], [0, 1, 2]));
  q.push(ms("easy", "Which are numerical variables?", ["number of pets", "height", "temperature", "hair colour"], [0, 1, 2]));
  q.push(tf("easy", "Primary data is collected first-hand.", true));
  q.push(tf("easy", "Number of pets is discrete; weight is continuous.", true));
  q.push(tf("easy", "Impossible values should be flagged and cleaned before analysis.", true));
  q.push(fill("easy", "Data collected first-hand is ___ data.", ["primary"]));
  q.push(fill("easy", "Data from a published source is ___ data.", ["secondary"]));
  q.push(mc("easy", "A survey with only a $10\\%$ reply rate risks:", ["non-response bias", "no issues", "a census", "continuity"], 0));
  q.push(mc("easy", "Anonymizing responses protects:", ["privacy", "the mean", "the sample size", "the slope"], 0));
  q.push(tf("easy", "Secondary sources should be cited.", true));
  q.push(mc("easy", "Number of goals scored is:", ["discrete", "continuous", "categorical", "secondary"], 0));
  q.push(num("easy", "A test score of $150$ on a $100$-point exam is (type 1 = error, 0 = valid):", 1, 0));
  q.push(tf("easy", "Mixing units (cm and inches) must be fixed before analysis.", true));
  q.push(fill("easy", "Exact weight is numerical ___.", ["continuous"]));
  // MEDIUM
  q.push(mc("medium", "You survey classmates about sleep. This is:", ["primary data", "secondary data", "a census", "categorical only"], 0));
  q.push(mc("medium", "You download Statistics Canada tables. This is:", ["secondary data", "primary data", "an experiment", "a survey"], 0));
  q.push(mc("medium", "A dataset has some blank income entries. Two valid options are:", ["exclude those rows, or impute and report it", "delete the whole dataset", "invent random values secretly", "ignore the analysis"], 0));
  q.push(mc("medium", "Half of the heights are in cm and half in inches. First you should:", ["convert all to one unit", "average them as-is", "delete the inches", "ignore units"], 0));
  q.push(mc("medium", "Brand of phone owned is:", ["categorical", "numerical discrete", "continuous", "an outlier"], 0));
  q.push(mc("medium", "Why cite a secondary data source?", ["credit, verification, and reliability", "to increase $r$", "to hide the source", "no reason"], 0));
  q.push(ms("medium", "Which are ways to handle missing data?", ["exclude those cases", "impute a reasonable value", "report what you did", "secretly fabricate data"], [0, 1, 2]));
  q.push(ms("medium", "Which are continuous variables?", ["exact time to finish", "temperature", "weight of a parcel", "number of emails"], [0, 1, 2]));
  q.push(tf("medium", "Imputing missing values should be disclosed in the report.", true));
  q.push(tf("medium", "An impossible outlier should be verified, then corrected or removed.", true));
  q.push(mc("medium", "Number of text messages sent is:", ["numerical discrete", "categorical", "continuous", "secondary"], 0));
  q.push(fill("medium", "Data you gather yourself is ___ data.", ["primary"]));
  q.push(fill("medium", "Favourite sport is ___ data.", ["categorical"]));
  q.push(mc("medium", "The biggest risk of mixing measurement units is:", ["corrupted calculations", "nicer graphs", "faster analysis", "no risk"], 0));
  q.push(ms("medium", "Which are ethical duties in data collection?", ["consent", "privacy", "honest reporting", "leading questions"], [0, 1, 2]));
  q.push(tf("medium", "Cleaning data means fixing errors, outliers, and missing values.", true));
  q.push(mc("medium", "An outlier that is a genuine (not error) extreme value should be:", ["kept but noted", "always deleted", "ignored", "changed to the mean"], 0));
  q.push(fill("medium", "Before analysis, convert all measurements to a single ___.", ["unit"]));
  q.push(mc("medium", "Which is primary data collection?", ["running your own survey", "citing a website", "reading a report", "using census tables"], 0));
  q.push(num("medium", "A person's age listed as $-3$ is (type 1 = error, 0 = valid):", 1, 0));
  // HARD
  q.push(mc("hard", "A downloaded table lists an age of $200$. The best action is:", ["verify, then correct or remove and note it", "keep it", "delete the whole column", "replace all ages with $200$"], 0));
  q.push(mc("hard", "Deleting all rows with any missing value can bias results if:", ["missingness is related to the outcome", "it never biases", "there are no missing values", "the sample is huge"], 0));
  q.push(mc("hard", "A survey codes 'yes/no' as $1/0$ and averages them to $0.7$. This mean represents:", ["the proportion answering yes", "a category", "an error", "a median"], 0));
  q.push(mc("hard", "Categorical data summarized best by:", ["counts/proportions (mode)", "the mean", "the standard deviation", "a regression line"], 0));
  q.push(mc("hard", "Genuine extreme values (not errors) should generally be:", ["kept, but their influence noted", "always removed", "changed to the mean", "hidden"], 0));
  q.push(mc("hard", "Combining two datasets with different definitions of a variable risks:", ["invalid comparisons", "a higher $r$", "cleaner data", "nothing"], 0));
  q.push(ms("hard", "Which are signs a value needs cleaning?", ["impossible range (age $200$)", "wrong units", "obvious typo", "a normal in-range value"], [0, 1, 2]));
  q.push(ms("hard", "Which protect data integrity?", ["consistent units", "documented cleaning", "citing sources", "silently dropping inconvenient data"], [0, 1, 2]));
  q.push(tf("hard", "Dropping missing data can introduce bias if the missingness isn't random.", true));
  q.push(tf("hard", "Averaging $1/0$ codes for yes/no gives the proportion of 'yes'.", true));
  q.push(mc("hard", "A dataset mixes 'age in years' and 'age in months' in one column. This is a:", ["data-consistency error to fix", "valid mix", "categorical variable", "a mean"], 0));
  q.push(mc("hard", "The most defensible way to handle an obvious data-entry typo is:", ["check the source and correct it", "keep the typo", "delete the dataset", "guess randomly"], 0));
  q.push(ms("hard", "Which are numerical-vs-categorical distinctions?", ["number of pets is numerical", "eye colour is categorical", "temperature is numerical", "brand is numerical"], [0, 1, 2]));
  q.push(mc("hard", "Reporting how you cleaned the data matters because:", ["it makes the analysis transparent and reproducible", "it looks nicer", "it raises $r^2$", "it hides mistakes"], 0));
  q.push(tf("hard", "Transparency about data cleaning supports reproducibility.", true));
  q.push(mc("hard", "A 'don't know' response coded as $0$ and averaged with real values would:", ["distort the mean", "improve accuracy", "have no effect", "fix bias"], 0));
  q.push(ms("hard", "Which are good practices for secondary data?", ["cite the source", "check its collection method", "note its limitations", "assume it is perfect"], [0, 1, 2]));
  q.push(tf("hard", "Secondary data may carry the biases of how it was originally collected.", true));
  q.push(mc("hard", "The safest response to an anomalous value you cannot verify is to:", ["report it and analyze with and without it", "silently delete it", "keep it unquestioned", "replace it with the mean"], 0));
  q.push(fill("hard", "Coding yes/no as $1/0$ turns the mean into a ___ of 'yes'.", ["proportion", "percentage"]));
  return q;
}

// ── 7.3 Analyzing the Data ──────────────────────────────────
function g73() {
  const q = [];
  // EASY
  q.push(mc("easy", "For strongly skewed data, the best measure of centre is:", ["the median", "the mean", "the mode", "the range"], 0));
  q.push(mc("easy", "For data with outliers, the most resistant spread is:", ["the IQR", "the range", "the mean", "the sum"], 0));
  q.push(mc("easy", "To measure the strength of a linear relationship, use:", ["$r$", "the mean", "the mode", "the range"], 0));
  q.push(mc("easy", "To predict $y$ from $x$, use a:", ["regression line", "histogram", "pie chart", "box plot"], 0));
  q.push(mc("easy", "$r=0.9$ describes a relationship that is:", ["strong positive", "weak negative", "none", "strong negative"], 0));
  q.push(mc("easy", "Which display compares two groups' distributions?", ["side-by-side box plots", "a scatter plot", "a single number", "a slope"], 0));
  q.push(ms("easy", "Which are one-variable tools?", ["mean", "median", "standard deviation", "regression line"], [0, 1, 2]));
  q.push(ms("easy", "Which are two-variable tools?", ["correlation $r$", "a regression line", "$r^2$", "the mode of one variable"], [0, 1, 2]));
  q.push(tf("easy", "The median resists outliers better than the mean.", true));
  q.push(tf("easy", "A scatter plot shows the relationship between two variables.", true));
  q.push(tf("easy", "$r$ ranges from $-1$ to $1$.", true));
  q.push(num("easy", "Median of $\\{2,3,3,4,50\\}$?", 3, 0));
  q.push(num("easy", "Mean of $\\{4,6,6,8,11\\}$?", 7, 0));
  q.push(fill("easy", "For skewed data, report the ___ as the centre.", ["median"]));
  q.push(fill("easy", "The strength of a linear relationship is measured by ___.", ["r", "the correlation"]));
  q.push(mc("easy", "$r=-0.8$ describes:", ["a strong negative relationship", "a weak positive one", "no relationship", "a perfect fit"], 0));
  q.push(num("easy", "Using $\\hat y=3x+2$, predict $y$ at $x=5$.", 17, 0));
  q.push(tf("easy", "A histogram displays one variable's shape.", true));
  q.push(mc("easy", "A volunteer online poll suffers from:", ["self-selection bias", "no bias", "a census", "randomization"], 0));
  q.push(num("easy", "$r^2$ when $r=0.6$?", 0.36, 0.001));
  // MEDIUM
  q.push(mc("medium", "Incomes are right-skewed. To report a typical income use:", ["the median", "the mean", "the range", "the mode"], 0));
  q.push(mc("medium", "Technology reports $r=0.9$ for study time vs. score. This means:", ["a strong positive linear relationship", "no relationship", "a weak one", "causation"], 0));
  q.push(mc("medium", "A model has $r^2=0.81$. It explains:", ["$81\\%$ of the variation", "$81$ points", "$8.1\\%$", "nothing"], 0));
  q.push(mc("medium", "To compare two classes' test results, use:", ["centres and spreads (e.g. box plots)", "a single scatter point", "the slope only", "$r$ only"], 0));
  q.push(mc("medium", "Data from a volunteer web poll affects analysis because of:", ["self-selection bias", "too much randomness", "a census", "no effect"], 0));
  q.push(mc("medium", "Would a scatter plot or a histogram reveal a two-variable relationship?", ["scatter plot", "histogram", "neither", "both equally"], 0));
  q.push(ms("medium", "Which are correct analysis choices?", ["median for skewed centre", "IQR for resistant spread", "$r$ for linear strength", "the mode for a scatter's trend"], [0, 1, 2]));
  q.push(ms("medium", "Which indicate a strong relationship?", ["$r=0.95$", "$r=-0.9$", "$r^2=0.9$", "$r=0.1$"], [0, 1, 2]));
  q.push(tf("medium", "The IQR is a resistant measure of spread.", true));
  q.push(tf("medium", "A model with $r^2=0.64$ explains $64\\%$ of the variation.", true));
  q.push(num("medium", "Using $\\hat y=2x+5$, predict $y$ at $x=10$.", 25, 0));
  q.push(num("medium", "$r^2$ when $r=-0.7$?", 0.49, 0.001));
  q.push(num("medium", "Median of $\\{5,10,12,15,100\\}$?", 12, 0));
  q.push(fill("medium", "For two-variable strength, compute ___.", ["r", "the correlation coefficient"]));
  q.push(fill("medium", "A resistant measure of spread is the ___.", ["IQR"]));
  q.push(mc("medium", "For symmetric data with no outliers, an acceptable centre is:", ["the mean", "only the mode", "the range", "the IQR"], 0));
  q.push(num("medium", "Mean of $\\{10,20,30,40,50\\}$?", 30, 0));
  q.push(tf("medium", "Bias in the sample can invalidate the analysis conclusions.", true));
  q.push(mc("medium", "$r=0.2$ indicates a linear relationship that is:", ["weak", "strong", "perfect", "negative"], 0));
  q.push(num("medium", "$r^2$ when $r=0.5$ (percent explained, whole number)?", 25, 0));
  // HARD
  q.push(mc("hard", "A dataset $\\{3,5,5,7,9,13\\}$ is roughly symmetric. The most representative centre is:", ["the mean ($7$)", "the mode", "the range", "the max"], 0));
  q.push(mc("hard", "Salaries $\\{30,32,35,38,150\\}$ (thousands): report which centre and why?", ["median, because of the outlier", "mean, always", "mode, always", "range, for centre"], 0));
  q.push(mc("hard", "A two-variable study gives $\\hat y=2x+5$ with $r=0.95$. Predicting at $x=8$ (within data) gives:", ["$21$", "$16$", "$13$", "$26$"], 0));
  q.push(mc("hard", "Two classes have equal medians but class A has a larger IQR. A correct analysis says A is:", ["more variable", "more consistent", "identical", "higher-centred"], 0));
  q.push(mc("hard", "A report claims causation from an observational correlation. The right critique is:", ["correlation is not causation here", "the $r$ is too high", "the sample is too small only", "use a pie chart"], 0));
  q.push(mc("hard", "For a right-skewed distribution, which is largest?", ["the mean", "the median", "the mode", "they are equal"], 0));
  q.push(num("hard", "Salaries $\\{30,32,35,38,150\\}$: the median?", 35, 0));
  q.push(num("hard", "Salaries $\\{30,32,35,38,150\\}$: the mean?", 57, 0));
  q.push(num("hard", "$\\hat y=2x+5$, actual $y=25$ at $x=8$: the residual?", 4, 0.01));
  q.push(num("hard", "A model with $r=0.85$: percent of variation explained (whole number)?", 72, 1));
  q.push(tf("hard", "For skewed data, the median and IQR summarize centre and spread better than mean and $\\sigma$.", true));
  q.push(tf("hard", "A strong $r$ from an observational study still does not prove causation.", true));
  q.push(ms("hard", "For a skewed dataset with an outlier, which analysis choices are best?", ["median for centre", "IQR for spread", "note the outlier", "mean and $\\sigma$ as the main summary"], [0, 1, 2]));
  q.push(mc("hard", "A scatter shows a clear curve. The correct analysis is to:", ["fit a non-linear model", "force a line and trust $r$", "report the mode", "ignore the shape"], 0));
  q.push(num("hard", "Median of $\\{4,7,8,10,12,14,15,18,21,50\\}$?", 13, 0));
  q.push(num("hard", "Using $\\hat y=1.2x+3$, predict $y$ at $x=10$?", 15, 0.01));
  q.push(fill("hard", "For $\\{30,32,35,38,150\\}$, report the ___ as the typical value.", ["median"]));
  q.push(mc("hard", "Combining one- and two-variable analysis, a good report includes:", ["centre, spread, shape, and the relationship", "only the mean", "only $r$", "only a graph"], 0));
  q.push(tf("hard", "Accounting for bias and variability is part of a sound analysis.", true));
  q.push(num("hard", "$r^2$ for a model with $r=0.9$ (percent, whole number)?", 81, 0));
  return q;
}

// ── 7.4 Communicating Conclusions ───────────────────────────
function g74() {
  const q = [];
  // EASY
  q.push(mc("easy", "A conclusion should be interpreted:", ["in real-world context", "without units", "as certain fact", "without limitations"], 0));
  q.push(mc("easy", "From an observational correlation you may NOT conclude:", ["causation", "an association", "a trend", "a correlation"], 0));
  q.push(mc("easy", "Predicting far outside the data is:", ["risky (extrapolation)", "always safe", "interpolation", "impossible"], 0));
  q.push(mc("easy", "To show one variable's shape, use a:", ["histogram", "scatter plot", "regression line", "single number"], 0));
  q.push(mc("easy", "A margin of error expresses:", ["sampling uncertainty", "a guaranteed value", "the mean", "the mode"], 0));
  q.push(mc("easy", "A small sample size is a:", ["limitation to report", "strength", "a graph", "a parameter"], 0));
  q.push(ms("easy", "Which belong in a good conclusion?", ["context", "limitations", "matching claim to evidence", "overstating certainty"], [0, 1, 2]));
  q.push(ms("easy", "Which are limitations worth stating?", ["small sample", "possible bias", "extrapolation risk", "a high $r$"], [0, 1, 2]));
  q.push(tf("easy", "Correlation is not causation.", true));
  q.push(tf("easy", "Extrapolation beyond the data is risky.", true));
  q.push(tf("easy", "Reporting limitations makes a conclusion more credible.", true));
  q.push(fill("easy", "Correlation does not prove ___.", ["causation"]));
  q.push(fill("easy", "Predicting outside the data range is ___.", ["extrapolation"]));
  q.push(mc("easy", "To display a single variable's distribution, use:", ["a histogram or box plot", "a scatter plot", "a slope", "$r$"], 0));
  q.push(mc("easy", "Reporting units with a mean makes it:", ["meaningful", "wrong", "smaller", "categorical"], 0));
  q.push(tf("easy", "A conclusion should not claim more than the data support.", true));
  q.push(mc("easy", "'Linked to' is more appropriate than 'causes' for a(n):", ["observational study", "randomized experiment", "census", "controlled trial"], 0));
  q.push(fill("easy", "A ___ of error conveys sampling uncertainty.", ["margin"]));
  q.push(tf("easy", "A scatter plot is for relationships, not a single variable's shape.", true));
  q.push(mc("easy", "Which is the safer claim from a survey?", ["'associated with'", "'causes'", "'guarantees'", "'proves'"], 0));
  // MEDIUM
  q.push(mc("medium", "A regression slope of $2$ marks per study-hour means:", ["each extra hour is associated with about $2$ more marks", "study time is $2$", "marks are $2$", "no relationship"], 0));
  q.push(mc("medium", "A survey of 15 friends finds a trend. The key limitation is:", ["the tiny, non-random sample", "too much data", "the graph", "the mean"], 0));
  q.push(mc("medium", "Data span years $1$--$5$. Predicting year $20$ is unwise because:", ["it is far extrapolation", "the mean is unknown", "it is interpolation", "$r$ is high"], 0));
  q.push(mc("medium", "A large study finds a real but tiny effect. You should note:", ["statistical vs. practical significance", "that it is huge", "nothing", "that it proves cause"], 0));
  q.push(mc("medium", "Which display best shows one variable's shape?", ["histogram", "scatter plot", "a slope", "$r^2$"], 0));
  q.push(mc("medium", "A sample over-represents one region. The conclusion should:", ["note the bias limits generalization", "ignore it", "claim full generality", "hide it"], 0));
  q.push(ms("medium", "Which are responsible reporting practices?", ["state limitations", "match claim to evidence", "give units and context", "overstate certainty"], [0, 1, 2]));
  q.push(ms("medium", "Which show sampling uncertainty?", ["a margin of error", "a confidence range", "variability from sampling", "a single point estimate alone"], [0, 1, 2]));
  q.push(tf("medium", "A tiny non-random sample limits how far results generalize.", true));
  q.push(tf("medium", "A statistically significant tiny effect may not matter practically.", true));
  q.push(mc("medium", "Rewrite 'sunscreen causes more beach trips' responsibly:", ["'sunscreen use is associated with more beach trips'", "'sunscreen guarantees beach trips'", "'beach trips are impossible'", "'no relationship'"], 0));
  q.push(fill("medium", "For an observational study, prefer 'associated with' over ___.", ["causes", "causation"]));
  q.push(fill("medium", "Predicting beyond the data range is ___.", ["extrapolation"]));
  q.push(mc("medium", "A conclusion that ignores a known bias is:", ["misleading", "complete", "rigorous", "unbiased"], 0));
  q.push(ms("medium", "Which limitations should a report mention?", ["sample size", "sampling bias", "extrapolation", "a high correlation"], [0, 1, 2]));
  q.push(tf("medium", "Including units and context makes a reported number meaningful.", true));
  q.push(mc("medium", "The best display to compare two groups' spreads is:", ["side-by-side box plots", "a scatter plot", "a single mean", "a pie chart"], 0));
  q.push(fill("medium", "A responsible causal claim needs a controlled ___.", ["experiment", "trial"]));
  q.push(mc("medium", "A poll reports $52\\%\\pm3\\%$. The true value likely lies:", ["between $49\\%$ and $55\\%$", "exactly $52\\%$", "above $55\\%$", "below $49\\%$"], 0));
  q.push(tf("medium", "A margin of error gives a plausible range for the true value.", true));
  // HARD
  q.push(mc("hard", "A survey concludes 'video games cause better reflexes.' The main flaw and fix are:", ["causation claimed from a survey; reword as 'associated with'", "sample too big; shrink it", "no correlation; add one", "wrong graph; change it"], 0));
  q.push(mc("hard", "A poll of $52\\%\\pm4\\%$ support: a headline 'majority supports' is:", ["not justified (range includes $<50\\%$)", "fully justified", "proven", "about causation"], 0));
  q.push(mc("hard", "A model with $r^2=0.95$ predicts far beyond the data. The report should say:", ["extrapolation is unreliable despite high $r^2$", "the prediction is guaranteed", "$r^2$ makes it safe", "interpolation is risky"], 0));
  q.push(mc("hard", "A study with self-selected participants concludes a treatment works. The honest conclusion notes:", ["self-selection limits causal claims", "the result proves cause", "the sample was random", "no limitations"], 0));
  q.push(mc("hard", "A large study finds a difference that is statistically significant but tiny. The best communication:", ["reports both significance and small effect size", "says the effect is large", "hides the effect size", "claims causation"], 0));
  q.push(mc("hard", "A conclusion generalizes a mall-survey result to the whole country. This is flawed because:", ["the sample isn't representative", "the mean is wrong", "the graph is wrong", "there is no data"], 0));
  q.push(ms("hard", "Which make a conclusion responsible?", ["state assumptions", "acknowledge bias/variability", "avoid over-claiming causation", "extrapolate freely"], [0, 1, 2]));
  q.push(ms("hard", "Which weaken a reported conclusion?", ["small non-random sample", "unstated bias", "far extrapolation", "clear context and units"], [0, 1, 2]));
  q.push(tf("hard", "A margin of error that crosses $50\\%$ means a 'majority' claim is unsupported.", true));
  q.push(tf("hard", "A high $r^2$ does not make far extrapolation reliable.", true));
  q.push(mc("hard", "Rewrite 'phones cause lower grades' (from a survey) responsibly:", ["'phone use is associated with lower grades'", "'phones definitely lower grades'", "'grades cause phones'", "'phones are harmless'"], 0));
  q.push(mc("hard", "A report should distinguish an effect's statistical significance from its:", ["practical importance (effect size)", "graph colour", "sample name", "units"], 0));
  q.push(ms("hard", "Which belong in the limitations section?", ["sample size and representativeness", "possible confounders", "extrapolation caution", "the title font"], [0, 1, 2]));
  q.push(mc("hard", "The most defensible summary of an observational finding uses:", ["'associated with'", "'proves'", "'causes'", "'guarantees'"], 0));
  q.push(tf("hard", "Effect size communicates whether a significant result actually matters.", true));
  q.push(mc("hard", "A conclusion drawn only from data within $x=0$ to $10$ should avoid claims about:", ["$x=25$", "$x=5$", "$x=7$", "the data centre"], 0));
  q.push(ms("hard", "Which are appropriate displays for the stated goal?", ["histogram for one variable's shape", "scatter plot for a relationship", "box plots to compare groups", "a scatter plot for a single variable"], [0, 1, 2]));
  q.push(tf("hard", "Matching the strength of the claim to the strength of the evidence is central to good communication.", true));
  q.push(fill("hard", "For an observational study, the safest verb is 'associated with' rather than ___.", ["causes", "causation"]));
  q.push(mc("hard", "A poll result of $48\\%\\pm3\\%$ supports the statement:", ["the true value may be under or over $50\\%$", "a clear majority", "exactly $48\\%$", "causation"], 0));
  return q;
}

export default [
  { code: "7.1", gen: g71 },
  { code: "7.2", gen: g72 },
  { code: "7.3", gen: g73 },
  { code: "7.4", gen: g74 },
];
