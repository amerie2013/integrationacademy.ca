// IB AA SL Unit 4 — Statistics and Probability: question bank.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 4.1 Sampling & Presenting Data ───────────────
function g41() {
  const q = [];
  q.push(mc("easy", "Stratified sampling samples each subgroup:", ["proportionally to its size", "equally regardless of size", "randomly with no structure", "only the largest group"], 0));
  q.push(mc("easy", "The estimated mean from grouped data uses:", ["class midpoints", "class widths", "class boundaries only", "the mode"], 0));
  q.push(mc("easy", "Convenience sampling typically:", ["introduces bias toward easy-to-reach subjects", "is always unbiased", "is the same as stratified sampling", "guarantees a representative sample"], 0));
  q.push(mc("easy", "The modal class is the class interval with the:", ["highest frequency", "lowest frequency", "widest range", "smallest midpoint"], 0));
  q.push(mc("easy", "A population of 500 has 200 in group A; for a sample of 50, group A's stratified size is:", ["20", "25", "10", "15"], 0));
  q.push(ms("easy", "True facts about sampling:", ["stratified sampling preserves subgroup proportions", "convenience sampling can introduce bias", "grouped data loses individual values", "a census always beats a sample"], [0, 1, 2]));
  q.push(tf("easy", "Grouped data uses midpoints as an estimate for the mean.", true));
  q.push(tf("easy", "Convenience sampling always produces an unbiased sample.", false));
  q.push(fill("easy", "State the midpoint of the class interval $20$--$30$.", ["25"]));
  q.push(num("easy", "A population of 1000 has 400 in group X; for a sample of 50, find X's stratified size.", 20, 0));
  q.push(mc("medium", "Estimate the mean from: $0$--$10$(freq 4), $10$--$20$(freq 6). Midpoints 5,15.", ["11", "10", "12", "9"], 0));
  q.push(mc("medium", "State the modal class for: $0$--$5$(3), $5$--$10$(9), $10$--$15$(4).", ["5--10", "0--5", "10--15", "cannot be determined"], 0));
  q.push(mc("medium", "A population of 800 has 300 in P, 500 in Q; find stratified sizes for a sample of 40.", ["15 and 25", "20 and 20", "10 and 30", "16 and 24"], 0));
  q.push(ms("medium", "For grouped data $0$--$10$(4), $10$--$20$(6):", ["midpoints are 5 and 15", "$\\sum fm=20+90=110$", "$\\sum f=10$", "estimated mean $=11$"], [0, 1, 2, 3]));
  q.push(tf("medium", "For a population of 800 (300 in P, 500 in Q) sampled at 40 total, P's stratified size is 15.", true));
  q.push(fill("medium", "Estimate the mean from: $10$--$20$(2), $20$--$30$(6), $30$--$40$(2) (midpoints 15,25,35).", ["25"]));
  q.push(num("medium", "Estimate the mean from: $0$--$4$(5), $4$--$8$(10), $8$--$12$(5) (midpoints 2,6,10).", 6, 0));
  q.push(num("medium", "A school of 900 (500 juniors, 400 seniors) wants a sample of 45; find juniors' sample size.", 25, 0));
  q.push(match("medium", "Match each sampling scenario to its likely bias direction.", ["survey at a gym at 6am", "survey online tech forum users", "survey at a shopping mall midday"], ["over-represents very dedicated exercisers", "over-represents tech-savvy people", "under-represents working-hour employees"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to estimate a mean from grouped data with classes 0-10(3), 10-20(7).", ["Find midpoints: 5 and 15", "Compute $\\sum fm=15+105=120$", "Find $\\sum f=10$", "Divide: mean $=12$"]));
  q.push(mc("hard", "Estimate the mean from: $10$--$20$(3), $20$--$30$(8), $30$--$40$(12), $40$--$50$(7) (nearest 0.1).", ["32.7", "30.0", "35.0", "28.5"], 0));
  q.push(mc("hard", "A city surveys residents by calling only landlines during weekday afternoons; the main bias is:", ["over-represents people home during the day", "no bias exists", "under-represents retirees", "over-represents working adults"], 0));
  q.push(mc("hard", "A school of 1200 (700 juniors, 500 seniors) wants a stratified sample of 60; find seniors' sample size.", ["25", "30", "20", "35"], 0));
  q.push(ms("hard", "For estimating the mean of grouped data with classes 10-20(3),20-30(8),30-40(12),40-50(7):", ["midpoints are 15,25,35,45", "$\\sum fm=45+200+420+315=980$", "$\\sum f=30$", "mean $\\approx32.7$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A census is always more useful than a well-designed representative sample.", false));
  q.push(fill("hard", "A population of 1200 has 750 in group M; for a sample of 60, find M's stratified size.", ["37.5"]));
  q.push(num("hard", "Estimate the mean from: $0$--$5$(2),$5$--$10$(8),$10$--$15$(10) (midpoints 2.5,7.5,12.5), nearest 0.1.", 9.4, 0.2));
  q.push(order("hard", "Order the steps to critique a survey that only interviews people leaving a library at night.", ["Identify the population being surveyed (library visitors at night)", "Recognize this group over-represents heavy studiers", "Conclude estimates of average study time will be biased high", "Suggest a fix: sample across various times/locations"]));
  q.push(match("hard", "Match each grouped-data concept to its formula/idea.", ["estimated mean", "modal class", "class midpoint"], ["$\\sum fm/\\sum f$", "highest frequency class", "average of class boundaries"], [0, 1, 2]));
  return q;
}

// ── 4.2 Measures of Central Tendency & Spread ───────────────
function g42() {
  const q = [];
  q.push(mc("easy", "Standard deviation formula:", ["$\\sqrt{\\sum(x-\\bar x)^2/n}$", "$\\sum(x-\\bar x)/n$", "$\\sum x/n$", "$\\max-\\min$"], 0));
  q.push(mc("easy", "$IQR$ equals:", ["$Q_3-Q_1$", "$Q_3+Q_1$", "$Q_2-Q_1$", "max$-$min"], 0));
  q.push(mc("easy", "The outlier upper fence is:", ["$Q_3+1.5\\,IQR$", "$Q_3-1.5\\,IQR$", "$Q_1+1.5\\,IQR$", "$Q_3+IQR$"], 0));
  q.push(mc("easy", "Adding a constant $c$ to every value changes the SD by:", ["not at all", "adding $c$", "multiplying by $c$", "doubling it"], 0));
  q.push(mc("easy", "Find the median of $3,7,9,12,20$.", ["9", "7", "12", "10.2"], 0));
  q.push(ms("easy", "True facts about spread measures:", ["adding a constant leaves SD unchanged", "multiplying scales both mean and SD", "IQR is resistant to outliers", "SD is unaffected by outliers"], [0, 1, 2]));
  q.push(tf("easy", "Adding a constant to every data value does not change the standard deviation.", true));
  q.push(tf("easy", "The mean is resistant to outliers.", false));
  q.push(fill("easy", "Find the range of $4,9,15,22$.", ["18"]));
  q.push(num("easy", "Find the mean of $2,4,6,8,10$.", 6, 0));
  q.push(mc("medium", "Find the SD of $2,4,6,8,10$ (2 d.p.).", ["2.83", "2.00", "3.16", "2.50"], 0));
  q.push(mc("medium", "A data set has $Q_1=10,Q_3=20$. Is $36$ an outlier?", ["Yes, $36>35$", "No", "Cannot tell", "Yes, always"], 0));
  q.push(mc("medium", "A data set has mean 40, SD 5; every value has 10 added. New mean and SD:", ["50 and 5", "50 and 15", "40 and 15", "50 and 10"], 0));
  q.push(ms("medium", "For a data set with mean 40, SD 5, every value doubled:", ["new mean is 80", "new SD is 10", "new mean is 40", "new SD is 5"], [0, 1]));
  q.push(tf("medium", "Doubling every value in a data set doubles both the mean and the SD.", true));
  q.push(fill("medium", "Find the IQR if $Q_1=15$, $Q_3=27$.", ["12"]));
  q.push(num("medium", "Find the SD of $10,12,14,16,18$ (2 d.p.).", 2.83, 0.05));
  q.push(num("medium", "A data set has $Q_1=8$, $Q_3=16$; find the upper outlier fence.", 28, 0));
  q.push(match("medium", "Match each transformation to its effect on SD.", ["add a constant", "multiply by $k$", "no change"], ["SD unchanged", "SD scales by $|k|$", "identity operation"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to check if 50 is an outlier given $Q_1=20,Q_3=35$.", ["Find IQR: $35-20=15$", "Compute $1.5\\times IQR=22.5$", "Upper fence: $35+22.5=57.5$", "Compare: $50<57.5$, not an outlier"]));
  q.push(mc("hard", "Class A: median 78, IQR 8. Class B: median 74, IQR 20. The best comparison is:", ["A performed slightly better and far more consistently", "B performed better overall", "both are equally consistent", "A is less consistent"], 0));
  q.push(mc("hard", "A data set has mean 50, SD 6; every value is tripled then 5 subtracted. New mean and SD:", ["145 and 18", "150 and 18", "145 and 13", "155 and 18"], 0));
  q.push(mc("hard", "A data set has five-number summary $5,15,20,28,60$. Is 60 an outlier?", ["Yes, since $60>47.5$", "No", "Cannot tell without the mean", "Yes, always for a max value"], 0));
  q.push(ms("hard", "For a data set with mean 50, SD 6, transformed by tripling then subtracting 5:", ["tripling gives mean 150, SD 18", "subtracting 5 changes only the mean", "final mean is 145", "final SD is 18"], [0, 1, 2, 3]));
  q.push(tf("hard", "For five-number summary $5,15,20,28,60$, the value 60 is an outlier by the 1.5×IQR rule.", true));
  q.push(fill("hard", "A data set has mean 30, SD 4; every value is halved and 8 added. Find the new SD.", ["2"]));
  q.push(num("hard", "Find the SD of $5,10,15,20,25$ (2 d.p.).", 7.07, 0.05));
  q.push(order("hard", "Order the steps to compare Class A (median 80, IQR 6) and Class B (median 76, IQR 15).", ["Compare medians: A's 80 > B's 76 (better typical score)", "Compare IQRs: A's 6 < B's 15 (more consistent)", "Conclude A scored slightly higher on average", "Conclude A was much more consistent"]));
  q.push(match("hard", "Match each statistic to whether it's resistant to outliers.", ["mean", "median", "standard deviation"], ["not resistant", "resistant", "not resistant"], [0, 1, 2]));
  return q;
}

// ── 4.3 Bivariate Data & Correlation ───────────────
function g43() {
  const q = [];
  q.push(mc("easy", "The correlation coefficient $r$ ranges from:", ["$-1$ to $1$", "$0$ to $1$", "$-\\infty$ to $\\infty$", "$0$ to $100$"], 0));
  q.push(mc("easy", "$r$ close to $1$ indicates:", ["strong positive correlation", "strong negative correlation", "no correlation", "causation"], 0));
  q.push(mc("easy", "Interpolation means predicting:", ["inside the data range", "outside the data range", "using no data", "the mean only"], 0));
  q.push(mc("easy", "Extrapolation is generally:", ["riskier than interpolation", "always accurate", "the same as interpolation", "never used"], 0));
  q.push(mc("easy", "Correlation implies:", ["association, not necessarily causation", "definite causation", "no relationship", "an exact equation"], 0));
  q.push(ms("easy", "True facts about correlation:", ["$r$ near 0 means weak/no linear relationship", "correlation does not imply causation", "extrapolation is riskier than interpolation", "$r$ can exceed 1"], [0, 1, 2]));
  q.push(tf("easy", "Correlation does not automatically imply causation.", true));
  q.push(tf("easy", "$r=1.5$ is a valid correlation coefficient.", false));
  q.push(fill("easy", "State whether $r=-0.9$ indicates a strong or weak correlation.", ["strong"]));
  q.push(num("easy", "A line $y=2x+3$ predicts $y$ at $x=5$.", 13, 0));
  q.push(mc("medium", "A line $y=3x+10$ fits data for $x\\in[0,20]$; predict $y$ at $x=15$ and classify.", ["55, interpolation", "55, extrapolation", "45, interpolation", "60, extrapolation"], 0));
  q.push(mc("medium", "Using the same line, predict $y$ at $x=50$ and classify.", ["160, extrapolation", "160, interpolation", "150, extrapolation", "170, interpolation"], 0));
  q.push(mc("medium", "A line $y=5x+40$ relates study hours to score; interpret the intercept 40.", ["predicted score with 0 study hours", "the slope of the line", "the maximum score", "the number of students"], 0));
  q.push(ms("medium", "For a line $y=3x+10$ fit on $x\\in[0,20]$, predicting at $x=15$:", ["$x=15$ is inside $[0,20]$", "this is interpolation", "prediction is $y=55$", "this is extrapolation"], [0, 1, 2]));
  q.push(tf("medium", "Predicting within the original data's range is called interpolation.", true));
  q.push(fill("medium", "A line $y=1.5x+20$; predict $y$ at $x=10$.", ["35"]));
  q.push(num("medium", "A line $y=-2x+50$ predicts $y$ at $x=8$.", 34, 0));
  q.push(num("medium", "Describe the correlation strength of $r=0.3$ using a 0-3 scale (0=none,1=weak,2=moderate,3=strong); give the number.", 1, 0));
  q.push(match("medium", "Match each $r$ value to its correlation description.", ["$r=0.95$", "$r=-0.4$", "$r=0.05$"], ["strong positive", "moderate negative", "negligible"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to decide if a prediction is interpolation or extrapolation.", ["Identify the original data's $x$-range", "Compare the target $x$-value to that range", "If inside, it's interpolation", "If outside, it's extrapolation (riskier)"]));
  q.push(mc("hard", "Ice cream sales and drowning incidents correlate strongly; the best explanation is:", ["a confounding variable (hot weather) drives both", "ice cream causes drowning", "drowning causes ice cream sales", "pure coincidence, no explanation possible"], 0));
  q.push(mc("hard", "A line $y=-2.5x+95$ models a car's value (\\$1000s) vs age, fit for $x\\in[0,8]$; predicting at $x=30$ is unreliable because:", ["it extrapolates far outside the fitted range and ignores nonlinear depreciation", "the slope is negative", "the intercept is too high", "the line has no meaning at all"], 0));
  q.push(mc("hard", "A regression line's slope of $4.2$ relating advertising spend (\\$100s) to sales (units) means:", ["each extra \\$100 spent associates with about 4.2 more units sold on average", "sales always increase by exactly 4.2 units", "spending causes exactly 4.2 more units always", "the relationship is non-linear"], 0));
  q.push(ms("hard", "For the ice-cream/drowning correlation:", ["both increase with hot weather", "hot weather is a confounding variable", "this does not prove causation", "ice cream directly causes drowning"], [0, 1, 2]));
  q.push(tf("hard", "A confounding variable can produce a strong correlation between two variables with no direct causal link.", true));
  q.push(fill("hard", "A line $y=-3x+120$ models car value vs age (years) fit for $x\\in[0,10]$; state one reason predicting at $x=50$ is unrealistic.", ["extrapolation"]));
  q.push(num("hard", "A line $y=6x+15$ fits data for $x\\in[1,12]$; find the predicted value at the upper edge of the fitted range, $x=12$.", 87, 0));
  q.push(order("hard", "Order the steps to critique a claim that 'sunscreen sales cause more shark attacks' (both correlate with summer).", ["Note both variables increase in summer", "Identify summer/hot weather as the confounding variable", "Explain more beachgoers means both more sunscreen use and more shark encounters", "Conclude correlation reflects a shared cause, not direct causation"]));
  q.push(match("hard", "Match each regression concept to its risk/benefit.", ["interpolation", "extrapolation", "confounding variable"], ["generally reliable", "riskier, unproven pattern", "can fake a causal-looking correlation"], [0, 1, 2]));
  return q;
}

// ── 4.4 Probability Basics & Venn Diagrams ───────────────
function g44() {
  const q = [];
  q.push(mc("easy", "The addition rule states:", ["$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$", "$P(A\\cup B)=P(A)+P(B)$", "$P(A\\cap B)=P(A)+P(B)$", "$P(A\\cup B)=P(A)\\cdot P(B)$"], 0));
  q.push(mc("easy", "Two mutually exclusive events have:", ["$P(A\\cap B)=0$", "$P(A\\cap B)=1$", "$P(A)=P(B)$", "$P(A\\cup B)=0$"], 0));
  q.push(mc("easy", "Independent events satisfy:", ["$P(A\\cap B)=P(A)P(B)$", "$P(A\\cap B)=P(A)+P(B)$", "$P(A\\cap B)=0$", "$P(A)=P(B)$"], 0));
  q.push(mc("easy", "$P(A)=0.4$, $P(B)=0.3$, $P(A\\cap B)=0.1$; find $P(A\\cup B)$.", ["0.6", "0.7", "0.5", "0.4"], 0));
  q.push(mc("easy", "In a Venn diagram, the overlapping region represents:", ["$A\\cap B$", "$A\\cup B$", "neither $A$ nor $B$", "only $A$"], 0));
  q.push(ms("easy", "True facts about probability rules:", ["mutually exclusive means $P(A\\cap B)=0$", "independent means $P(A\\cap B)=P(A)P(B)$", "the addition rule subtracts the overlap", "mutually exclusive events are always independent"], [0, 1, 2]));
  q.push(tf("easy", "Mutually exclusive events (with nonzero probability) cannot be independent.", true));
  q.push(tf("easy", "$P(A\\cup B)=P(A)+P(B)$ always, regardless of overlap.", false));
  q.push(fill("easy", "$P(C)=0.5,P(D)=0.2$, mutually exclusive; find $P(C\\cup D)$.", ["0.7"]));
  q.push(num("easy", "$P(A)=0.6,P(B)=0.5,P(A\\cap B)=0.3$; find $P(A\\cup B)$.", 0.8, 0));
  q.push(mc("medium", "Of 40 students, 25 like math, 20 like science, 12 like both. Find $P(\\text{at least one})$.", ["0.825", "0.75", "0.9", "0.675"], 0));
  q.push(mc("medium", "Of 60 people, 35 own a car, 28 own a bike, 10 own neither. Find how many own both.", ["13", "15", "10", "8"], 0));
  q.push(mc("medium", "$P(A)=0.5,P(B)=0.4,P(A\\cap B)=0.2$. Are $A,B$ independent?", ["Yes, $0.5\\times0.4=0.2$", "No", "Cannot tell", "Only if mutually exclusive"], 0));
  q.push(ms("medium", "For 60 people (35 car, 28 bike, 10 neither):", ["at least one $=50$", "both $=35+28-50=13$", "both $=13$", "both $=8$"], [0, 1, 2]));
  q.push(tf("medium", "For $P(A)=0.5,P(B)=0.4,P(A\\cap B)=0.2$, $A$ and $B$ are independent.", true));
  q.push(fill("medium", "$P(C)=0.35,P(D)=0.5,P(C\\cup D)=0.85$; find $P(C\\cap D)$.", ["0"]));
  q.push(num("medium", "Of 50 people, 30 like tea, 25 like coffee, 15 like neither. Find how many like both.", 20, 0));
  q.push(num("medium", "Of 80 gym members, 50 use weights, 40 use cardio, all use at least one. Find how many use both.", 10, 0));
  q.push(match("medium", "Match each Venn scenario to its region formula.", ["at least one of A,B", "both A and B", "neither A nor B"], ["$P(A)+P(B)-P(A\\cap B)$", "$P(A\\cap B)$", "$1-P(A\\cup B)$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find the overlap of 70 (45 X, 38 Y, 5 neither).", ["Find at least one: $70-5=65$", "Apply addition rule: $65=45+38-\\text{both}$", "Solve: both $=83-65$", "Result: both $=18$"]));
  q.push(mc("hard", "Of 100 gym members, 60 use weights, 45 use cardio, and everyone uses at least one; find $P(\\text{weights only})$.", ["0.55", "0.60", "0.45", "0.05"], 0));
  q.push(mc("hard", "$P(C)=0.3,P(D)=0.45$; if mutually exclusive, find $P(\\text{neither})$.", ["0.25", "0.75", "0.15", "0.55"], 0));
  q.push(mc("hard", "Of 120 people, 70 like pop, 50 like rock, $x$ like both, 15 like neither. Find $x$.", ["15", "20", "25", "10"], 0));
  q.push(ms("hard", "For 100 members (60 weights, 45 cardio, everyone uses $\\geq1$):", ["both $=105-100=5$", "weights only $=60-5=55$", "$P(\\text{weights only})=0.55$", "weights only $=45$"], [0, 1, 2]));
  q.push(tf("hard", "For two mutually exclusive events with $P(C)=0.3,P(D)=0.45$, $P(\\text{neither})=0.25$.", true));
  q.push(fill("hard", "Of 120 people, 70 pop, 50 rock, $x$ both, 15 neither; find $x$.", ["15"]));
  q.push(num("hard", "Explain-style: of 90 students, 55 play soccer, 40 play basketball, 12 play neither; find how many play both.", 17, 0));
  q.push(order("hard", "Order the steps to find $P(\\text{tea only})$ for 100 people (65 tea, 45 coffee, 20 neither).", ["Find at least one: $100-20=80$", "Solve for both: $65+45-80=30$", "Tea only: $65-30=35$", "$P(\\text{tea only})=0.35$"]));
  q.push(match("hard", "Match each independence/exclusivity fact to its formula check.", ["test independence", "test mutually exclusive", "find unknown overlap"], ["compare $P(A)P(B)$ to $P(A\\cap B)$", "check if $P(A\\cap B)=0$", "use total minus 'neither'"], [0, 1, 2]));
  return q;
}

// ── 4.5 Conditional Probability & Tree Diagrams ───────────────
function g45() {
  const q = [];
  q.push(mc("easy", "$P(A\\mid B)$ equals:", ["$P(A\\cap B)/P(B)$", "$P(A)/P(B)$", "$P(A\\cap B)/P(A)$", "$P(A)\\cdot P(B)$"], 0));
  q.push(mc("easy", "On a tree diagram, you multiply:", ["along a branch", "across branches", "at the root only", "never"], 0));
  q.push(mc("easy", "On a tree diagram, you add probabilities for outcomes that:", ["lead to the same final result", "are on the same branch", "are at the first stage only", "never occur"], 0));
  q.push(mc("easy", "'Without replacement' means the second draw's probabilities:", ["depend on what was drawn first", "are always the same as the first", "are impossible to compute", "double every time"], 0));
  q.push(mc("easy", "$P(A)=0.5,P(A\\cap B)=0.2$; find $P(B\\mid A)$.", ["0.4", "0.1", "0.7", "2.5"], 0));
  q.push(ms("easy", "True facts about conditional probability and trees:", ["multiply along a branch", "add across matching outcomes", "without replacement changes later probabilities", "with replacement keeps probabilities constant"], [0, 1, 2, 3]));
  q.push(tf("easy", "Multiplying along a tree branch gives the probability of that whole sequence.", true));
  q.push(tf("easy", "Without replacement, the second draw's probability is unaffected by the first.", false));
  q.push(fill("easy", "$P(A)=0.8,P(A\\cap B)=0.4$; find $P(B\\mid A)$.", ["0.5"]));
  q.push(num("easy", "A bag has 4 red, 6 blue balls; find $P(\\text{first is red})$.", 0.4, 0));
  q.push(mc("medium", "A bag has 5 red, 3 blue balls. Two drawn without replacement; find $P(\\text{both red})$.", ["5/14", "5/8", "3/7", "15/56"], 0));
  q.push(mc("medium", "Using the same bag, find $P(\\text{at least one blue})$.", ["9/14", "5/14", "3/8", "1/2"], 0));
  q.push(mc("medium", "Two independent events each have probability 0.3; find $P(\\text{exactly one occurs})$.", ["0.42", "0.09", "0.6", "0.21"], 0));
  q.push(ms("medium", "For a bag with 5 red, 3 blue (two drawn without replacement):", ["$P(\\text{1st red})=5/8$", "$P(\\text{2nd red}\\mid\\text{1st red})=4/7$", "$P(\\text{both red})=5/14$", "$P(\\text{both red})=15/56$"], [0, 1, 2]));
  q.push(tf("medium", "For a bag with 5 red, 3 blue drawn without replacement, $P(\\text{both red})=5/14$.", true));
  q.push(fill("medium", "A bag has 6 green, 4 yellow; two drawn without replacement; find $P(\\text{both green})$ as a fraction.", ["1/3"]));
  q.push(num("medium", "Two independent events each have probability 0.2; find $P(\\text{neither occurs})$.", 0.64, 0));
  q.push(num("medium", "A box has 8 working, 2 faulty phones; find $P(\\text{first is faulty})$.", 0.2, 0));
  q.push(match("medium", "Match each scenario to its probability type.", ["draws without replacement", "two independent coin flips", "$P(A\\mid B)$ directly given"], ["dependent events", "independent events", "conditional probability"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $P(\\text{at least one blue})$ from a bag of 5 red, 3 blue (2 drawn, no replacement).", ["Find $P(\\text{both red})=5/8\\times4/7=5/14$", "Recognize 'at least one blue' is the complement", "Compute $1-5/14$", "Result: $9/14$"]));
  q.push(mc("hard", "Factory A makes 60\\% of items with 3\\% defects; Factory B makes 40\\% with 8\\% defects. Find $P(\\text{defective})$.", ["0.05", "0.055", "0.045", "0.06"], 0));
  q.push(mc("hard", "Using the previous scenario, given an item is defective, find $P(\\text{from B})$ (2 d.p.).", ["0.64", "0.50", "0.40", "0.73"], 0));
  q.push(mc("hard", "A box has 9 working, 3 faulty; two drawn without replacement; find $P(\\text{at least one faulty})$.", ["9/22", "3/11", "1/2", "13/22"], 0));
  q.push(ms("hard", "For Factory A (60\\%, 3\\% defect) and B (40\\%, 8\\% defect):", ["$P(A\\cap d)=0.018$", "$P(B\\cap d)=0.032$", "total $P(d)=0.05$", "$P(B\\mid d)=0.032/0.05=0.64$"], [0, 1, 2, 3]));
  q.push(tf("hard", "For the two-factory scenario, given an item is defective, it's more likely to be from Factory B despite B making less overall.", true));
  q.push(fill("hard", "A box has 9 working, 3 faulty phones; two drawn without replacement; find $P(\\text{both faulty})$ as a fraction.", ["1/22"]));
  q.push(num("hard", "Machine X makes 45\\% of output with 4\\% defects; Machine Y makes 55\\% with 2\\% defects; find overall $P(\\text{defective})$ (4 d.p.).", 0.029, 0.001));
  q.push(order("hard", "Order the steps to reverse a tree diagram: given defective, find $P(\\text{from Machine X})$ (X: 45\\%,4\\%; Y: 55\\%,2\\%).", ["Compute $P(X\\cap d)=0.45\\times0.04=0.018$", "Compute $P(Y\\cap d)=0.55\\times0.02=0.011$", "Total $P(d)=0.029$", "$P(X\\mid d)=0.018/0.029\\approx0.621$"]));
  q.push(match("hard", "Match each conditional-probability scenario to its key technique.", ["without-replacement sequential draws", "reversed conditional (given effect, find cause)", "independent event combination"], ["update probabilities each draw", "sum all paths to the effect, then divide", "multiply individual probabilities"], [0, 1, 2]));
  return q;
}

// ── 4.6 Discrete Random Variables & the Binomial Distribution ───────────────
function g46() {
  const q = [];
  q.push(mc("easy", "$E(X)$ equals:", ["$\\sum xP(X=x)$", "$\\sum P(X=x)$", "$\\max(x)$", "$n\\cdot p$ always"], 0));
  q.push(mc("easy", "For $X\\sim B(n,p)$, $E(X)$ equals:", ["$np$", "$np(1-p)$", "$n+p$", "$p/n$"], 0));
  q.push(mc("easy", "For $X\\sim B(n,p)$, $\\text{Var}(X)$ equals:", ["$np(1-p)$", "$np$", "$n(1-p)$", "$p(1-p)$"], 0));
  q.push(mc("easy", "The four binomial conditions include:", ["fixed number of trials, two outcomes, constant $p$, independence", "infinite trials", "changing $p$ each trial", "dependent trials"], 0));
  q.push(mc("easy", "$P(X=0)=0.2,P(X=1)=0.5,P(X=2)=k$; find $k$.", ["0.3", "0.5", "0.2", "0.7"], 0));
  q.push(ms("easy", "True facts about the binomial distribution:", ["requires a fixed number of trials", "requires independence between trials", "requires only two outcomes per trial", "allows $p$ to change each trial"], [0, 1, 2]));
  q.push(tf("easy", "$E(X)=np$ for a binomial random variable.", true));
  q.push(tf("easy", "The binomial distribution allows $p$ to vary trial to trial.", false));
  q.push(fill("easy", "$X\\sim B(10,0.3)$; find $E(X)$.", ["3"]));
  q.push(num("easy", "$X\\sim B(20,0.5)$; find $E(X)$.", 10, 0));
  q.push(mc("medium", "$X\\sim B(6,0.4)$; find $P(X=2)$ (3 d.p.).", ["0.311", "0.276", "0.187", "0.400"], 0));
  q.push(mc("medium", "$X\\sim B(8,0.2)$; find $P(X\\geq1)$ (3 d.p.).", ["0.832", "0.168", "0.900", "0.750"], 0));
  q.push(mc("medium", "$X\\sim B(15,0.3)$; find the variance.", ["3.15", "4.5", "2.1", "1.5"], 0));
  q.push(ms("medium", "For $X\\sim B(8,0.2)$, finding $P(X\\geq1)$:", ["use the complement $P(X=0)$", "$P(X=0)=(0.8)^8\\approx0.168$", "$P(X\\geq1)\\approx0.832$", "$P(X\\geq1)\\approx0.168$"], [0, 1, 2]));
  q.push(tf("medium", "$X\\sim B(8,0.2)$ has $P(X\\geq1)\\approx0.832$.", true));
  q.push(fill("medium", "$P(X=0)=0.1,P(X=1)=k,P(X=2)=0.6$; find $k$.", ["0.3"]));
  q.push(num("medium", "$X\\sim B(10,0.5)$; find $P(X=5)$ (3 d.p.).", 0.246, 0.005));
  q.push(num("medium", "$X\\sim B(25,0.2)$; find the mean.", 5, 0));
  q.push(match("medium", "Match each binomial scenario to its $n,p$.", ["10 coin flips, count heads", "20 items, 5\\% defect rate", "6 dice rolls, count sixes"], ["$n=10,p=0.5$", "$n=20,p=0.05$", "$n=6,p=1/6$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $P(X\\geq1)$ for $X\\sim B(5,0.15)$.", ["Find $P(X=0)=(0.85)^5$", "Compute $\\approx0.4437$", "Use complement: $1-0.4437$", "Result: $\\approx0.5563$"]));
  q.push(mc("hard", "A basketball player makes 70\\% of free throws; for 6 attempts, find $P(X\\geq5)$ (3 d.p.).", ["0.420", "0.302", "0.500", "0.118"], 0));
  q.push(mc("hard", "$X\\sim B(5,p)$ and $P(X=5)=0.00032$; find $p$.", ["0.2", "0.1", "0.3", "0.4"], 0));
  q.push(mc("hard", "A factory tests 12 items with 5\\% individual defect rate; find $P(\\text{at most 1 defective})$ (3 d.p.).", ["0.882", "0.540", "0.720", "0.950"], 0));
  q.push(ms("hard", "For a basketball player making 70\\% free throws, 6 attempts, finding $P(X\\geq5)$:", ["$P(X=5)=\\binom65(0.7)^5(0.3)\\approx0.303$", "$P(X=6)=(0.7)^6\\approx0.118$", "$P(X\\geq5)\\approx0.420$", "$P(X\\geq5)\\approx0.118$"], [0, 1, 2]));
  q.push(tf("hard", "For $X\\sim B(5,p)$ and $P(X=5)=0.00032$, $p=0.2$.", true));
  q.push(fill("hard", "$X\\sim B(4,p)$ and $P(X=0)=0.0625$; find $p$.", ["0.5"]));
  q.push(num("hard", "A quality-control test of 15 items has a 4\\% individual defect rate; find $E(X)$ and $\\text{Var}(X)$; give $\\text{Var}(X)$ (nearest 0.01).", 0.58, 0.03));
  q.push(order("hard", "Order the steps to find $P(X\\leq1)$ for $X\\sim B(10,0.03)$.", ["Compute $P(X=0)=(0.97)^{10}$", "Compute $P(X=1)=\\binom{10}1(0.03)(0.97)^9$", "Add both probabilities", "Result: $\\approx0.9655$"]));
  q.push(match("hard", "Match each binomial calculation type to its formula approach.", ["exact count $P(X=k)$", "at least one $P(X\\geq1)$", "solve for unknown $p$"], ["binomial formula directly", "complement of $P(X=0)$", "isolate $p$ algebraically"], [0, 1, 2]));
  return q;
}

// ── 4.7 The Normal Distribution ───────────────
function g47() {
  const q = [];
  q.push(mc("easy", "The z-score formula is:", ["$z=(x-\\mu)/\\sigma$", "$z=\\mu/\\sigma$", "$z=(x+\\mu)/\\sigma$", "$z=x-\\mu\\sigma$"], 0));
  q.push(mc("easy", "The normal distribution is symmetric about:", ["the mean $\\mu$", "zero always", "the median only", "the mode only"], 0));
  q.push(mc("easy", "$P(X<\\mu)$ for any normal distribution equals:", ["0.5", "1", "0", "depends on $\\sigma$"], 0));
  q.push(mc("easy", "The empirical rule states about 68\\% of data lies within:", ["1 SD of the mean", "2 SD of the mean", "3 SD of the mean", "0.5 SD of the mean"], 0));
  q.push(mc("easy", "$\\mu=50,\\sigma=5$; find the z-score for $x=60$.", ["2", "1", "10", "0.5"], 0));
  q.push(ms("easy", "True facts about the normal distribution:", ["symmetric about the mean", "$P(X<\\mu)=0.5$", "z-scores standardize any normal distribution", "68\\% of data lies within 1 SD"], [0, 1, 2, 3]));
  q.push(tf("easy", "A z-score of 0 corresponds to $x=\\mu$.", true));
  q.push(tf("easy", "About 95\\% of data lies within 1 SD of the mean.", false));
  q.push(fill("easy", "$\\mu=30,\\sigma=4$; find the z-score for $x=38$.", ["2"]));
  q.push(num("easy", "$\\mu=100,\\sigma=15$; find the z-score for $x=115$.", 1, 0));
  q.push(mc("medium", "$\\mu=70,\\sigma=8$; find $P(X<86)$ given $P(Z<2)\\approx0.9772$.", ["0.9772", "0.0228", "0.5000", "0.8413"], 0));
  q.push(mc("medium", "$\\mu=70,\\sigma=8$; find the 90th percentile given $P(Z<1.2816)\\approx0.90$.", ["80.25", "78.00", "82.50", "76.00"], 0));
  q.push(mc("medium", "$\\mu=70,\\sigma=8$; find $P(62<X<86)$ given $P(Z<-1)\\approx0.1587$, $P(Z<2)\\approx0.9772$.", ["0.8185", "0.9772", "0.1587", "0.6598"], 0));
  q.push(ms("medium", "For $\\mu=70,\\sigma=8$, finding $P(62<X<86)$:", ["$z_1=(62-70)/8=-1$", "$z_2=(86-70)/8=2$", "$P=0.9772-0.1587$", "result $\\approx0.8185$"], [0, 1, 2, 3]));
  q.push(tf("medium", "For $\\mu=70,\\sigma=8$, $P(X<86)\\approx0.9772$.", true));
  q.push(fill("medium", "$\\mu=200,\\sigma=25$; find $z$ for $x=175$.", ["-1"]));
  q.push(num("medium", "$\\mu=500,\\sigma=12$; find $z$ for $x=524$.", 2, 0));
  q.push(num("medium", "$\\mu=60,\\sigma=5$; find the value at $z=1.5$.", 67.5, 0));
  q.push(match("medium", "Match each z-score to its approximate cumulative probability.", ["$z=0$", "$z=1$", "$z=-1$"], ["0.50", "0.8413", "0.1587"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $P(X<89)$ for $\\mu=80,\\sigma=6$ given $P(Z<1.5)\\approx0.9332$.", ["Compute $z=(89-80)/6$", "Simplify: $z=1.5$", "Look up $P(Z<1.5)$", "Result: $\\approx0.9332$"]));
  q.push(mc("hard", "$P(X<490)=0.1587$, $P(X>520)=0.0228$ for a normal distribution; find $\\mu$ (using $z=-1$ and $z=2$).", ["500", "505", "495", "510"], 0));
  q.push(mc("hard", "Using the previous scenario, find $\\sigma$.", ["10", "15", "5", "20"], 0));
  q.push(mc("hard", "A machine's fill weights are normal; $P(X<480)=0.1587$, $P(X<540)=0.8413$; find $\\sigma$.", ["30", "25", "35", "20"], 0));
  q.push(ms("hard", "For $P(X<490)=0.1587$, $P(X>520)=0.0228$:", ["$z_1=-1$ at $x=490$: $\\mu-\\sigma=490$", "$z_2=2$ at $x=520$ (since $P(X<520)=0.9772$): $\\mu+2\\sigma=520$", "solving gives $\\sigma=10$", "solving gives $\\mu=500$"], [0, 1, 2, 3]));
  q.push(tf("hard", "For $P(X<490)=0.1587$ and $P(X>520)=0.0228$, the distribution has $\\mu=500,\\sigma=10$.", true));
  q.push(fill("hard", "$P(X<45)=0.1587$, $P(X<75)=0.8413$; find $\\mu$ (using $z=\\pm1$).", ["60"]));
  q.push(num("hard", "Using the previous scenario, find $\\sigma$.", 15, 0));
  q.push(order("hard", "Order the steps to find $\\mu,\\sigma$ given $P(X<60)=0.1587$ and $P(X<100)=0.8413$.", ["Recognize $z=-1$ at $x=60$: $\\mu-\\sigma=60$", "Recognize $z=1$ at $x=100$: $\\mu+\\sigma=100$", "Add the equations: $2\\mu=160\\Rightarrow\\mu=80$", "Subtract: $2\\sigma=40\\Rightarrow\\sigma=20$"]));
  q.push(match("hard", "Match each normal-distribution question type to its method.", ["find a probability given $x$", "find $x$ given a probability", "find $\\mu,\\sigma$ given two probabilities"], ["standardize then look up", "inverse normal (work backward)", "solve a system of two z-equations"], [0, 1, 2]));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
  { code: "4.5", gen: g45 },
  { code: "4.6", gen: g46 },
  { code: "4.7", gen: g47 },
];
