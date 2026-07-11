// MDM4U Unit 5 — One-Variable Statistics: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Original, creative contexts.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 5.1 Sampling Techniques & Bias ──────────────────────────
function g51() {
  const q = [];
  // EASY
  q.push(mc("easy", "A true value describing a whole population is a:", ["parameter", "statistic", "sample", "bias"], 0));
  q.push(mc("easy", "A value computed from a sample is a:", ["statistic", "parameter", "population", "census"], 0));
  q.push(mc("easy", "Choosing every 20th person is which method?", ["systematic", "stratified", "cluster", "convenience"], 0));
  q.push(mc("easy", "Sampling whole randomly chosen groups is:", ["cluster", "stratified", "systematic", "simple random"], 0));
  q.push(mc("easy", "Sampling proportionally from subgroups is:", ["stratified", "cluster", "systematic", "convenience"], 0));
  q.push(mc("easy", "An online poll of only website visitors likely has:", ["sampling bias", "no bias", "measurement error only", "a census"], 0));
  q.push(ms("easy", "Which are sampling methods?", ["simple random", "stratified", "systematic", "cluster"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are types of bias?", ["sampling", "non-response", "response (wording)", "measurement"], [0, 1, 2, 3]));
  q.push(tf("easy", "A parameter describes a population; a statistic describes a sample.", true));
  q.push(tf("easy", "A leading question causes response bias.", true));
  q.push(tf("easy", "A low response rate can cause non-response bias.", true));
  q.push(num("easy", "To sample 40 from 2000 systematically, the interval $k$ is:", 50, 0));
  q.push(num("easy", "To sample 50 from 1000 systematically, $k=$", 20, 0));
  q.push(fill("easy", "A value describing a population is a ___.", ["parameter"]));
  q.push(fill("easy", "Sampling WITHOUT bias needs a ___ sample (representative).", ["random", "representative"]));
  q.push(mc("easy", "A survey mailed out gets a 10\\% reply rate. This risks:", ["non-response bias", "no bias", "a census", "stratification"], 0));
  q.push(num("easy", "To sample 25 from 500 systematically, $k=$", 20, 0));
  q.push(tf("easy", "A census surveys the entire population.", true));
  q.push(mc("easy", "Surveying people at a hockey game about favourite sport shows:", ["sampling bias", "measurement bias", "no bias", "stratification"], 0));
  q.push(fill("easy", "Choosing every 10th name is ___ sampling.", ["systematic"]));
  // MEDIUM
  q.push(mc("medium", "From 600 grade-9 and 400 grade-10 students, a stratified sample of 50 takes how many grade-9?", ["$30$", "$25$", "$40$", "$20$"], 0));
  q.push(mc("medium", "From 800 women and 200 men, a proportional sample of 50 takes how many men?", ["$10$", "$25$", "$40$", "$5$"], 0));
  q.push(mc("medium", "Is 'the mean height of all 2000 students' a parameter or statistic?", ["parameter", "statistic", "neither", "both"], 0));
  q.push(mc("medium", "Is '52\\% of 500 surveyed support the plan' a parameter or statistic?", ["statistic", "parameter", "census", "neither"], 0));
  q.push(mc("medium", "Which is likely biased? A survey about a policy conducted only among the policy's supporters.", ["yes, sampling bias", "no bias", "measurement bias", "a census"], 0));
  q.push(mc("medium", "Grades of 300, 200, 100 students; a proportional sample of 60 takes how many from the 100-group?", ["$10$", "$20$", "$30$", "$6$"], 0));
  q.push(ms("medium", "Which reduce bias?", ["random selection", "high response rate", "neutral wording", "a leading question"], [0, 1, 2]));
  q.push(ms("medium", "Which are statistics (not parameters)?", ["a sample mean", "$52\\%$ of those surveyed", "the true population mean", "an estimate from a poll"], [0, 1, 3]));
  q.push(tf("medium", "Stratified sampling draws proportionally from subgroups.", true));
  q.push(tf("medium", "A voluntary online poll suffers from self-selection bias.", true));
  q.push(num("medium", "600 grade-9 and 400 grade-10; stratified sample of 50: number of grade-10?", 20, 0));
  q.push(num("medium", "Grades 300/200/100; proportional sample of 60: number from the 300-group?", 30, 0));
  q.push(num("medium", "A town of 5000 sampled systematically for 100 people: interval $k$?", 50, 0));
  q.push(fill("medium", "800 women, 200 men; proportional sample of 50: number of women $=$ ___.", ["40"]));
  q.push(fill("medium", "A poll result is a ___ (parameter/statistic).", ["statistic"]));
  q.push(mc("medium", "Which sampling method best represents distinct subgroups?", ["stratified", "convenience", "voluntary", "systematic"], 0));
  q.push(num("medium", "12000 people, stratified sample of 300, group is 40\\% of the population: how many from that group?", 120, 0));
  q.push(tf("medium", "Convenience sampling tends to be biased.", true));
  q.push(mc("medium", "'Don't you agree our great mayor should be re-elected?' shows:", ["response (wording) bias", "sampling bias", "no bias", "measurement bias"], 0));
  q.push(fill("medium", "300/200/100 students, proportional sample of 60: number from the 200-group $=$ ___.", ["20"]));
  // HARD
  q.push(mc("hard", "A school has 500 grade-9, 400 grade-10, 300 grade-11, 300 grade-12. A stratified sample of 75 takes how many grade-9?", ["$25$", "$20$", "$30$", "$15$"], 0));
  q.push(mc("hard", "A company has 1200 staff: 60\\% sales, 25\\% support, 15\\% admin. A stratified sample of 80 takes how many support?", ["$20$", "$25$", "$48$", "$12$"], 0));
  q.push(mc("hard", "A polling firm phones landlines only. Its estimate of youth opinion is likely:", ["biased (coverage)", "unbiased", "a census", "stratified"], 0));
  q.push(mc("hard", "A survey over-samples a supportive region. To fix the estimate, one can:", ["weight responses by population share", "ignore it", "add a leading question", "reduce the sample"], 0));
  q.push(mc("hard", "A sample of 200 has 40\\% from group A but group A is 25\\% of the population. This sample is:", ["not representative (A over-sampled)", "representative", "a census", "stratified"], 0));
  q.push(mc("hard", "To sample 6 whole neighbourhoods at random and survey every resident is:", ["cluster sampling", "stratified sampling", "systematic sampling", "a census"], 0));
  q.push(num("hard", "500/400/300/300 students, stratified sample of 75: number of grade-9 ($\\tfrac{500}{1500}\\cdot75$)?", 25, 0));
  q.push(num("hard", "1200 staff (60/25/15\\%), stratified sample of 80: number of support ($0.25\\cdot80$)?", 20, 0));
  q.push(num("hard", "A stratified sample of 120 must include a group that is 35\\% of the population. How many from that group?", 42, 0));
  q.push(num("hard", "500/400/300/300 students, stratified sample of 75: number of grade-12?", 15, 0));
  q.push(tf("hard", "Weighting responses by each group's population share corrects for over/under-sampling.", true));
  q.push(tf("hard", "A landline-only poll under-covers younger people, biasing youth estimates.", true));
  q.push(ms("hard", "Which describe a voluntary call-in TV poll?", ["self-selection bias", "coverage bias", "not reliable for the population", "a random sample"], [0, 1, 2]));
  q.push(mc("hard", "A factory tests every 50th item off a line. If a machine fault recurs every 50 items, this systematic sample may be:", ["biased (hidden periodicity)", "unbiased always", "stratified", "a census"], 0));
  q.push(mc("hard", "Nonresponse from busy workers in a daytime phone survey biases results toward:", ["those available at home", "no one", "a census", "the whole population equally"], 0));
  q.push(num("hard", "A stratified sample of 250 from a population that is 8\\% a minority group: how many from that group?", 20, 0));
  q.push(fill("hard", "1200 staff (60/25/15\\%), stratified sample of 80: number of admin $=$ ___.", ["12"]));
  q.push(tf("hard", "Systematic sampling can fail if the list has a repeating pattern matching the interval.", true));
  q.push(mc("hard", "The best way to generalize to a whole population is:", ["a random, representative sample", "a convenience sample", "a voluntary poll", "surveying only supporters"], 0));
  q.push(num("hard", "500/400/300/300 students, stratified sample of 75: number of grade-10?", 20, 0));
  return q;
}

// ── 5.2 Measures of Central Tendency ────────────────────────
function g52() {
  const q = [];
  // EASY
  q.push(mc("easy", "The mean of $\\{3,7,7,9,14\\}$ is:", ["$8$", "$7$", "$40$", "$9$"], 0));
  q.push(mc("easy", "The median of $\\{3,7,7,9,14\\}$ is:", ["$7$", "$8$", "$9$", "$14$"], 0));
  q.push(mc("easy", "The mode of $\\{3,7,7,9,14\\}$ is:", ["$7$", "$8$", "$9$", "$3$"], 0));
  q.push(mc("easy", "The median of $\\{2,5,8,11\\}$ is:", ["$6.5$", "$8$", "$5$", "$6$"], 0));
  q.push(mc("easy", "The mean is:", ["$\\tfrac{\\sum x}{n}$", "the middle value", "the most frequent value", "the range"], 0));
  q.push(mc("easy", "For $\\{10,20,30,40,50\\}$, the mean is:", ["$30$", "$25$", "$150$", "$35$"], 0));
  q.push(ms("easy", "Which are measures of centre?", ["mean", "median", "mode", "range"], [0, 1, 2]));
  q.push(ms("easy", "For $\\{4,4,6,8\\}$, which are true?", ["mode $=4$", "mean $=5.5$", "median $=5$", "range $=4$"], [0, 1, 2]));
  q.push(tf("easy", "The median is the middle value of ordered data.", true));
  q.push(tf("easy", "The mode is the most frequent value.", true));
  q.push(tf("easy", "The mean of $\\{2,4,6\\}$ is $4$.", true));
  q.push(num("easy", "Mean of $\\{3,7,7,9,14\\}$?", 8, 0));
  q.push(num("easy", "Median of $\\{2,5,8,11\\}$?", 6.5, 0));
  q.push(num("easy", "Mode of $\\{5,6,6,7,8\\}$?", 6, 0));
  q.push(fill("easy", "The mean of $\\{10,20,30,40,50\\}$ is ___.", ["30"]));
  q.push(fill("easy", "The median of $\\{1,3,5,7,9\\}$ is ___.", ["5"]));
  q.push(mc("easy", "Which measure is best for 'most common shoe size sold'?", ["mode", "mean", "median", "range"], 0));
  q.push(num("easy", "Median of $\\{12,15,18,20,22,25\\}$?", 19, 0));
  q.push(tf("easy", "For an even count, the median is the average of the two middle values.", true));
  q.push(mc("easy", "For $\\{2,2,3,4,9\\}$, the mode is:", ["$2$", "$3$", "$4$", "$9$"], 0));
  // MEDIUM
  q.push(mc("medium", "A mark is $70,80,90$ weighted $20\\%,30\\%,50\\%$. The weighted mean is:", ["$83$", "$80$", "$85$", "$82$"], 0));
  q.push(mc("medium", "For $x=1,2,3$ with frequencies $4,6,10$, the mean is:", ["$2.3$", "$2$", "$2.5$", "$3$"], 0));
  q.push(mc("medium", "Four numbers have mean $12$; three are $8,10,15$. The fourth is:", ["$15$", "$12$", "$10$", "$13$"], 0));
  q.push(mc("medium", "For $\\{5,6,7,8,100\\}$, which centre is most representative?", ["median", "mean", "mode", "range"], 0));
  q.push(mc("medium", "The mean of $\\{5,6,7,8,100\\}$ is:", ["$25.2$", "$7$", "$26$", "$20$"], 0));
  q.push(mc("medium", "A class of 20 averages $70$; a class of 30 averages $80$. The combined mean is:", ["$76$", "$75$", "$77$", "$74$"], 0));
  q.push(ms("medium", "Which are true for $\\{5,6,7,8,100\\}$?", ["mean $=25.2$", "median $=7$", "the outlier inflates the mean", "mode exists"], [0, 1, 2]));
  q.push(ms("medium", "Which equal the weighted mean of $70,80,90$ at $0.2,0.3,0.5$?", ["$0.2(70)+0.3(80)+0.5(90)$", "$83$", "$14+24+45$", "$80$"], [0, 1, 2]));
  q.push(tf("medium", "Adding $5$ to every value increases the mean by $5$.", true));
  q.push(tf("medium", "Doubling every value doubles the mean.", true));
  q.push(num("medium", "Weighted mean of $70,80,90$ at $0.2,0.3,0.5$?", 83, 0));
  q.push(num("medium", "For $x=1,2,3$, $f=4,6,10$: the mean?", 2.3, 0.001));
  q.push(num("medium", "Four numbers have mean $12$; three are $8,10,15$. Find the fourth.", 15, 0));
  q.push(num("medium", "Combined mean of a class of 20 (avg 70) and 30 (avg 80)?", 76, 0));
  q.push(fill("medium", "Combined mean of 20 at $70$ and $30$ at $80$ $=$ ___.", ["76"]));
  q.push(fill("medium", "Weighted mean of $70,80,90$ at $20\\%,30\\%,50\\%$ $=$ ___.", ["83"]));
  q.push(mc("medium", "If every value is multiplied by $3$ and then $2$ is added, a mean of $10$ becomes:", ["$32$", "$30$", "$12$", "$36$"], 0));
  q.push(num("medium", "A mean of $10$ under the transformation $3x+2$ becomes:", 32, 0));
  q.push(tf("medium", "An outlier moves the mean more than the median.", true));
  q.push(mc("medium", "Grouped data $x=10,20,30$ with $f=3,5,2$: the mean is:", ["$19$", "$20$", "$18$", "$21$"], 0));
  // HARD
  q.push(mc("hard", "A student's GPA weights courses by credit: grades $90,80,70$ with credits $4,3,3$. Weighted mean $\\approx$", ["$81$", "$80$", "$82$", "$79$"], 0));
  q.push(mc("hard", "A team of 11 averages $6$ points; adding a 12th player raises the average to $6.5$. The new player scored:", ["$12$", "$11$", "$7$", "$6.5$"], 0));
  q.push(mc("hard", "A class of 25 averages $72$. If one score of $72$ is replaced by $97$, the new mean is:", ["$73$", "$72$", "$74$", "$75$"], 0));
  q.push(mc("hard", "Grouped data (interval midpoints $5,15,25$ with frequencies $2,5,3$): the mean is:", ["$16$", "$15$", "$17$", "$18$"], 0));
  q.push(mc("hard", "The mean of $n$ numbers is $M$. If each is increased by $c$, the new mean is:", ["$M+c$", "$M$", "$Mc$", "$M+nc$"], 0));
  q.push(mc("hard", "Salaries are strongly right-skewed. Which best represents a 'typical' salary?", ["median", "mean", "mode", "range"], 0));
  q.push(num("hard", "GPA: grades $90,80,70$ with credits $4,3,3$: weighted mean ($\\tfrac{360+240+210}{10}$)?", 81, 0));
  q.push(num("hard", "A team of 11 averages $6$; after a 12th player the average is $6.5$. That player's score?", 12, 0));
  q.push(num("hard", "Class of 25 averages $72$; a $72$ is replaced by $97$. New mean?", 73, 0));
  q.push(num("hard", "Grouped: midpoints $5,15,25$, frequencies $2,5,3$: the mean?", 16, 0));
  q.push(tf("hard", "Replacing one value by another changes the mean by $\\tfrac{\\text{change}}{n}$.", true));
  q.push(tf("hard", "For right-skewed data, the mean exceeds the median.", true));
  q.push(ms("hard", "Which correctly combine group means?", ["weight each mean by its group size", "$\\tfrac{20(70)+30(80)}{50}=76$", "just average the two means", "$\\tfrac{n_1\\bar x_1+n_2\\bar x_2}{n_1+n_2}$"], [0, 1, 3]));
  q.push(mc("hard", "Two groups: 40 people average $60$, 60 people average $80$. Combined mean:", ["$72$", "$70$", "$74$", "$76$"], 0));
  q.push(num("hard", "40 people avg $60$ and 60 people avg $80$: combined mean?", 72, 0));
  q.push(mc("hard", "The mean of 5 numbers is $20$. Four of them are $18,22,19,25$. The fifth is:", ["$16$", "$20$", "$18$", "$21$"], 0));
  q.push(num("hard", "Mean of 5 numbers is $20$; four are $18,22,19,25$. Find the fifth.", 16, 0));
  q.push(fill("hard", "Combined mean of 40 at $60$ and 60 at $80$ $=$ ___.", ["72"]));
  q.push(mc("hard", "If a data set's every value is transformed by $y=2x-3$, a mean of $15$ becomes:", ["$27$", "$30$", "$12$", "$33$"], 0));
  q.push(num("hard", "A mean of $15$ under $y=2x-3$ becomes:", 27, 0));
  return q;
}

// ── 5.3 Measures of Spread ──────────────────────────────────
function g53() {
  const q = [];
  // EASY
  q.push(mc("easy", "The range of $\\{5,8,12,20\\}$ is:", ["$15$", "$20$", "$12$", "$8$"], 0));
  q.push(mc("easy", "Range $=$", ["$\\max-\\min$", "$Q_3-Q_1$", "$\\tfrac{\\sum x}{n}$", "the middle value"], 0));
  q.push(mc("easy", "IQR $=$", ["$Q_3-Q_1$", "$\\max-\\min$", "the mean", "$\\tfrac{Q_1+Q_3}{2}$"], 0));
  q.push(mc("easy", "Standard deviation measures:", ["spread about the mean", "the centre", "the mode", "the median"], 0));
  q.push(mc("easy", "$\\sigma$ for $\\{10,10,10,10\\}$ is:", ["$0$", "$10$", "$1$", "$5$"], 0));
  q.push(mc("easy", "Two sets share a mean; the one with smaller $\\sigma$ is:", ["more consistent", "less consistent", "larger", "skewed"], 0));
  q.push(ms("easy", "Which measure spread?", ["range", "IQR", "standard deviation", "mode"], [0, 1, 2]));
  q.push(ms("easy", "Which are true?", ["range $=\\max-\\min$", "IQR $=Q_3-Q_1$", "$\\sigma=\\sqrt{\\text{variance}}$", "range resists outliers"], [0, 1, 2]));
  q.push(tf("easy", "Standard deviation is the square root of the variance.", true));
  q.push(tf("easy", "If all values are equal, the standard deviation is $0$.", true));
  q.push(tf("easy", "A larger standard deviation means more spread.", true));
  q.push(num("easy", "Range of $\\{5,8,12,20\\}$?", 15, 0));
  q.push(num("easy", "Range of scores from $45$ to $98$?", 53, 0));
  q.push(num("easy", "$\\sigma$ of $\\{7,7,7,7\\}$?", 0, 0));
  q.push(fill("easy", "IQR $=Q_3-$ ___.", ["Q_1", "Q1"]));
  q.push(fill("easy", "Range of $\\{3,3,3,10\\}$ $=$ ___.", ["7"]));
  q.push(mc("easy", "Which resists outliers better?", ["IQR", "range", "mean", "sum"], 0));
  q.push(num("easy", "Range of $\\{2,9,4,15,6\\}$?", 13, 0));
  q.push(tf("easy", "The range uses only the largest and smallest values.", true));
  q.push(mc("easy", "Set A range $20$, set B range $5$: which is more spread?", ["A", "B", "equal", "cannot tell"], 0));
  // MEDIUM
  q.push(mc("medium", "The (population) $\\sigma$ of $\\{2,4,6,8,10\\}$ is:", ["$\\sqrt8\\approx2.83$", "$6$", "$8$", "$2$"], 0));
  q.push(mc("medium", "The IQR of $\\{3,5,7,9,11,13,15\\}$ is:", ["$8$", "$12$", "$6$", "$9$"], 0));
  q.push(mc("medium", "The (population) variance of $\\{1,3,5,7,9\\}$ is:", ["$8$", "$4$", "$16$", "$5$"], 0));
  q.push(mc("medium", "Adding $5$ to every value changes $\\sigma$ by:", ["nothing", "$+5$", "$\\times5$", "$-5$"], 0));
  q.push(mc("medium", "Multiplying every value by $3$ changes $\\sigma$ by:", ["$\\times3$", "nothing", "$+3$", "$\\times9$"], 0));
  q.push(mc("medium", "The IQR of $\\{2,4,6,8,10,12,14,16\\}$ is:", ["$8$", "$14$", "$6$", "$4$"], 0));
  q.push(ms("medium", "For $\\{2,4,6,8,10\\}$, which are true?", ["mean $=6$", "variance $=8$", "$\\sigma\\approx2.83$", "range $=10$"], [0, 1, 2]));
  q.push(ms("medium", "Which leave $\\sigma$ unchanged?", ["adding a constant to each value", "shifting all data up", "multiplying by $2$", "subtracting $10$ from each"], [0, 1, 3]));
  q.push(tf("medium", "Adding a constant to every value does not change the spread.", true));
  q.push(tf("medium", "The (population) $\\sigma$ of $\\{2,4,6,8,10\\}$ is $\\sqrt8$.", true));
  q.push(num("medium", "(Population) variance of $\\{1,3,5,7,9\\}$?", 8, 0));
  q.push(num("medium", "IQR of $\\{3,5,7,9,11,13,15\\}$?", 8, 0));
  q.push(num("medium", "(Population) $\\sigma$ of $\\{2,4,6,8,10\\}$ to 2 decimals?", 2.83, 0.01));
  q.push(fill("medium", "Multiplying data by $3$ multiplies $\\sigma$ by ___.", ["3"]));
  q.push(fill("medium", "IQR of $\\{2,4,6,8,10,12,14,16\\}$ $=$ ___.", ["8"]));
  q.push(mc("medium", "Two data sets average $50$ with $\\sigma=2$ and $\\sigma=10$. The more consistent has:", ["$\\sigma=2$", "$\\sigma=10$", "equal", "cannot tell"], 0));
  q.push(num("medium", "(Population) variance of $\\{2,4,6,8,10\\}$?", 8, 0));
  q.push(tf("medium", "IQR ignores the extreme values, so it resists outliers.", true));
  q.push(mc("medium", "The range of $\\{4,4,4,4\\}$ is:", ["$0$", "$4$", "$1$", "$16$"], 0));
  q.push(fill("medium", "(Population) $\\sigma$ of $\\{1,3,5,7,9\\}$ to 2 decimals $=$ ___.", ["2.83"]));
  // HARD
  q.push(mc("hard", "The (population) $\\sigma$ of $\\{2,4,4,4,5,5,7,9\\}$ is:", ["$2$", "$4$", "$\\sqrt2$", "$3$"], 0));
  q.push(mc("hard", "A data set has mean $50,\\ \\sigma=5$. Under $y=2x+10$, the new $\\sigma$ is:", ["$10$", "$5$", "$20$", "$15$"], 0));
  q.push(mc("hard", "Under $y=2x+10$, a mean of $50$ becomes:", ["$110$", "$100$", "$60$", "$120$"], 0));
  q.push(mc("hard", "The coefficient of variation ($\\tfrac{\\sigma}{\\bar x}$) for $\\bar x=50,\\ \\sigma=5$ is:", ["$0.1$", "$10$", "$0.5$", "$5$"], 0));
  q.push(mc("hard", "Two sets have equal $\\sigma$ but means $20$ and $100$. Relative spread (CV) is larger for:", ["the mean-$20$ set", "the mean-$100$ set", "equal", "cannot tell"], 0));
  q.push(mc("hard", "A set of 5 has mean $6$ and each deviation squared sums to $20$. Its (population) variance is:", ["$4$", "$20$", "$5$", "$100$"], 0));
  q.push(num("hard", "(Population) $\\sigma$ of $\\{2,4,4,4,5,5,7,9\\}$?", 2, 0));
  q.push(num("hard", "Under $y=2x+10$, a set with $\\sigma=5$ has new $\\sigma=$", 10, 0));
  q.push(num("hard", "Coefficient of variation for $\\bar x=50,\\ \\sigma=5$ (a decimal)?", 0.1, 0.001));
  q.push(num("hard", "A set of 5 with squared deviations summing to $20$: population variance?", 4, 0));
  q.push(tf("hard", "The transformation $y=ax+b$ scales $\\sigma$ by $|a|$ and leaves it unaffected by $b$.", true));
  q.push(tf("hard", "The coefficient of variation compares spread relative to the mean.", true));
  q.push(ms("hard", "For $\\{2,4,4,4,5,5,7,9\\}$, which are true?", ["mean $=5$", "variance $=4$", "$\\sigma=2$", "range $=7$"], [0, 1, 2, 3]));
  q.push(mc("hard", "A set has variance $9$. Multiplying every value by $4$ gives variance:", ["$144$", "$36$", "$9$", "$81$"], 0));
  q.push(num("hard", "A set has variance $9$; multiply each value by $4$: new variance?", 144, 0));
  q.push(mc("hard", "The (population) $\\sigma$ of $\\{4,8,8,8,10,10,14,18\\}$ (double of $\\{2,4,4,4,5,5,7,9\\}$) is:", ["$4$", "$2$", "$8$", "$16$"], 0));
  q.push(num("hard", "(Population) $\\sigma$ of $\\{4,8,8,8,10,10,14,18\\}$?", 4, 0));
  q.push(fill("hard", "Coefficient of variation $=\\dfrac{\\sigma}{\\;}$ ___.", ["mean", "\\bar x", "xbar"]));
  q.push(mc("hard", "A sample of 6: $\\{3,5,5,7,9,13\\}$ has mean $7$; its (population) variance is:", ["$\\tfrac{64}{6}$", "$7$", "$10$", "$64$"], 0));
  q.push(num("hard", "$\\{3,5,5,7,9,13\\}$ mean $7$: sum of squared deviations?", 64, 0));
  return q;
}

// ── 5.4 Quartiles, Percentiles & Box Plots ──────────────────
function g54() {
  const q = [];
  // EASY
  q.push(mc("easy", "The five-number summary is:", ["min, $Q_1$, median, $Q_3$, max", "mean, mode, range", "$Q_1,Q_2,Q_3$", "min, mean, max"], 0));
  q.push(mc("easy", "A box plot's box spans:", ["$Q_1$ to $Q_3$", "min to max", "the mean $\\pm\\sigma$", "$0$ to the median"], 0));
  q.push(mc("easy", "The median is also the:", ["50th percentile", "25th percentile", "75th percentile", "mean"], 0));
  q.push(mc("easy", "The IQR from $Q_1=6,\\ Q_3=15$ is:", ["$9$", "$21$", "$6$", "$15$"], 0));
  q.push(mc("easy", "The 25th percentile is:", ["$Q_1$", "$Q_3$", "the median", "the max"], 0));
  q.push(mc("easy", "The whiskers of a (basic) box plot reach:", ["the min and max", "$Q_1$ and $Q_3$", "the mean", "the mode"], 0));
  q.push(ms("easy", "Which are in the five-number summary?", ["minimum", "$Q_1$", "median", "maximum"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which equal the IQR?", ["$Q_3-Q_1$", "the box length", "the middle 50\\% spread", "$\\max-\\min$"], [0, 1, 2]));
  q.push(tf("easy", "The IQR is the length of the box in a box plot.", true));
  q.push(tf("easy", "The median is the 50th percentile.", true));
  q.push(tf("easy", "The IQR resists outliers better than the range.", true));
  q.push(num("easy", "IQR when $Q_1=6,\\ Q_3=15$?", 9, 0));
  q.push(num("easy", "IQR when $Q_1=20,\\ Q_3=40$?", 20, 0));
  q.push(fill("easy", "The median is the ___ percentile.", ["50", "50th"]));
  q.push(fill("easy", "$Q_1$ is the ___ percentile.", ["25", "25th"]));
  q.push(mc("easy", "The median of $\\{5,10,15,20,25,30,35,40\\}$ is:", ["$22.5$", "$20$", "$25$", "$27.5$"], 0));
  q.push(num("easy", "Median of $\\{2,4,6,8,10,12,14\\}$?", 8, 0));
  q.push(tf("easy", "The 90th percentile means 90\\% of data lie at or below it.", true));
  q.push(mc("easy", "A percentile rank of 75 means the value is:", ["above 75\\% of the data", "the 75th value", "the maximum", "the mean"], 0));
  q.push(fill("easy", "$Q_3$ is the ___ percentile.", ["75", "75th"]));
  // MEDIUM
  q.push(mc("medium", "Five-number summary of $\\{3,6,7,9,12,15,18\\}$: $Q_1=$", ["$6$", "$7$", "$9$", "$3$"], 0));
  q.push(mc("medium", "For that data, $Q_3=$", ["$15$", "$12$", "$18$", "$9$"], 0));
  q.push(mc("medium", "With $Q_1=20,\\ Q_3=40$, is $75$ an outlier? (fence $=Q_3+1.5\\,\\text{IQR}$)", ["yes ($>70$)", "no", "cannot tell", "only if mean high"], 0));
  q.push(mc("medium", "The median of $\\{5,10,15,20,25,30,35,40\\}$ is:", ["$22.5$", "$20$", "$25$", "$30$"], 0));
  q.push(mc("medium", "For $\\{5,10,15,20,25,30,35,40\\}$, $Q_1=$", ["$12.5$", "$10$", "$15$", "$20$"], 0));
  q.push(mc("medium", "A box plot with the median near the left of the box shows:", ["right (positive) skew", "left skew", "symmetry", "no data"], 0));
  q.push(ms("medium", "Which describe the outlier test?", ["below $Q_1-1.5\\,\\text{IQR}$", "above $Q_3+1.5\\,\\text{IQR}$", "uses the IQR", "uses the mean"], [0, 1, 2]));
  q.push(ms("medium", "For $\\{3,6,7,9,12,15,18\\}$, which are true?", ["$Q_1=6$", "median $=9$", "$Q_3=15$", "IQR $=9$"], [0, 1, 2, 3]));
  q.push(tf("medium", "With $Q_1=20,\\ Q_3=40$, the upper fence is $70$.", true));
  q.push(tf("medium", "A median near the left of the box suggests right skew.", true));
  q.push(num("medium", "For $\\{3,6,7,9,12,15,18\\}$: the IQR?", 9, 0));
  q.push(num("medium", "$Q_1$ and $Q_3$ are $12.5$ and $32.5$ for a set; the IQR?", 20, 0));
  q.push(num("medium", "Out of 20 values, 15 are below a score. Its percentile rank?", 75, 0));
  q.push(fill("medium", "Upper outlier fence with $Q_1=10,\\ Q_3=18$ $=$ ___ ($Q_3+1.5\\,\\text{IQR}$).", ["30"]));
  q.push(fill("medium", "Median of $\\{2,4,4,6,8,10,12\\}$ $=$ ___.", ["6"]));
  q.push(mc("medium", "With $Q_1=10,\\ Q_3=18$, is $2$ an outlier? (lower fence $=Q_1-1.5\\,\\text{IQR}$)", ["no ($2>-2$)", "yes", "cannot tell", "only if skewed"], 0));
  q.push(num("medium", "$Q_1=10,\\ Q_3=18$: the lower fence?", -2, 0));
  q.push(tf("medium", "The five-number summary drives the box plot.", true));
  q.push(mc("medium", "For $\\{5,10,15,20,25,30,35,40\\}$, $Q_3=$", ["$32.5$", "$30$", "$35$", "$25$"], 0));
  q.push(num("medium", "IQR of $\\{5,10,15,20,25,30,35,40\\}$ ($Q_3-Q_1$)?", 20, 0));
  // HARD
  q.push(mc("hard", "For $\\{4,7,8,10,12,14,15,18,21,50\\}$, the median is:", ["$13$", "$12$", "$14$", "$12.5$"], 0));
  q.push(mc("hard", "For that data, $Q_1=8,\\ Q_3=18$. Is $50$ an outlier? (upper fence $=18+15$)", ["yes ($50>33$)", "no", "cannot tell", "it is the median"], 0));
  q.push(mc("hard", "For that data, the IQR is:", ["$10$", "$46$", "$15$", "$5$"], 0));
  q.push(mc("hard", "A score is at the 80th percentile of 200 values. About how many are below it?", ["$160$", "$80$", "$120$", "$200$"], 0));
  q.push(mc("hard", "With $Q_1=15,\\ Q_3=27$, the two outlier fences are:", ["$-3$ and $45$", "$3$ and $39$", "$0$ and $42$", "$15$ and $27$"], 0));
  q.push(mc("hard", "A right-skewed distribution's box plot typically has:", ["a longer right whisker", "a longer left whisker", "equal whiskers", "no whiskers"], 0));
  q.push(num("hard", "$\\{4,7,8,10,12,14,15,18,21,50\\}$: the median?", 13, 0));
  q.push(num("hard", "For that data ($Q_1=8,\\ Q_3=18$): the upper outlier fence?", 33, 0));
  q.push(num("hard", "For that data: the IQR?", 10, 0));
  q.push(num("hard", "With $Q_1=15,\\ Q_3=27$: the upper fence ($Q_3+1.5\\,\\text{IQR}$)?", 45, 0));
  q.push(tf("hard", "For $\\{4,7,8,10,12,14,15,18,21,50\\}$, the value $50$ is an outlier.", true));
  q.push(tf("hard", "A longer right whisker indicates right (positive) skew.", true));
  q.push(ms("hard", "For $\\{4,7,8,10,12,14,15,18,21,50\\}$, which are true?", ["median $=13$", "$Q_1=8$", "$Q_3=18$", "$50$ is an outlier"], [0, 1, 2, 3]));
  q.push(mc("hard", "A value is at the 30th percentile of 50 data points. Its rank from the bottom is about:", ["$15$th", "$30$th", "$20$th", "$35$th"], 0));
  q.push(num("hard", "80th percentile of 200 values: about how many lie below it?", 160, 0));
  q.push(num("hard", "With $Q_1=15,\\ Q_3=27$: the lower fence?", -3, 0));
  q.push(fill("hard", "For $\\{4,7,8,10,12,14,15,18,21,50\\}$, the upper outlier fence $=$ ___.", ["33"]));
  q.push(mc("hard", "Comparing two box plots: box A is higher and shorter than box B. Box A is:", ["higher-centred and more consistent", "lower and more spread", "identical", "skewed left"], 0));
  q.push(num("hard", "A data set of 40 values: the 25th percentile is about the ___th value from the bottom.", 10, 0));
  q.push(tf("hard", "The $1.5\\times\\text{IQR}$ rule flags values far below $Q_1$ or far above $Q_3$.", true));
  return q;
}

// ── 5.5 Displaying & Describing Distributions ───────────────
function g55() {
  const q = [];
  // EASY
  q.push(mc("easy", "A histogram shows a distribution's:", ["shape", "individual names", "mode only", "sampling method"], 0));
  q.push(mc("easy", "A distribution with a long right tail is:", ["right- (positively) skewed", "left-skewed", "symmetric", "uniform"], 0));
  q.push(mc("easy", "A distribution with two peaks is:", ["bimodal", "unimodal", "symmetric", "skewed"], 0));
  q.push(mc("easy", "A symmetric distribution has:", ["mean $\\approx$ median", "mean $>$ median", "mean $<$ median", "no median"], 0));
  q.push(mc("easy", "Relative frequency $=$", ["frequency $\\div$ total", "frequency $\\times$ total", "frequency $+$ total", "the mode"], 0));
  q.push(mc("easy", "A histogram with one peak is:", ["unimodal", "bimodal", "skewed", "uniform"], 0));
  q.push(ms("easy", "Which describe a distribution's shape?", ["symmetric", "skewed", "unimodal/bimodal", "the sample size"], [0, 1, 2]));
  q.push(ms("easy", "Which are true of a right-skewed distribution?", ["long right tail", "mean $>$ median", "tail points to larger values", "perfectly symmetric"], [0, 1, 2]));
  q.push(tf("easy", "Relative frequencies sum to $1$.", true));
  q.push(tf("easy", "A right-skewed distribution has a long right tail.", true));
  q.push(tf("easy", "A symmetric distribution has mean approximately equal to median.", true));
  q.push(num("easy", "A frequency of $12$ out of $40$ has relative frequency (decimal):", 0.3, 0));
  q.push(num("easy", "Relative frequency of $8$ out of $50$ (decimal)?", 0.16, 0));
  q.push(fill("easy", "A long left tail means ___ skew.", ["left", "negative"]));
  q.push(fill("easy", "Two peaks make a distribution ___.", ["bimodal"]));
  q.push(mc("easy", "Frequencies $3,7,5,1$: the modal class is the one with frequency:", ["$7$", "$5$", "$3$", "$1$"], 0));
  q.push(num("easy", "Frequencies $5,8,10,4,3$: total number of values?", 30, 0));
  q.push(tf("easy", "The modal class is the tallest bar of a histogram.", true));
  q.push(mc("easy", "For a left-skewed distribution:", ["mean $<$ median", "mean $>$ median", "mean $=$ median", "no mode"], 0));
  q.push(fill("easy", "Relative frequency of $12$ of $40$ $=$ ___.", ["0.3", "3/10"]));
  // MEDIUM
  q.push(mc("medium", "Frequencies $2,5,9,7,3$ (classes $1$--$5$): the modal class is:", ["class $3$", "class $2$", "class $4$", "class $5$"], 0));
  q.push(mc("medium", "For frequencies $5,8,10,4,3$, how many values are in classes $3$ or higher?", ["$17$", "$14$", "$10$", "$30$"], 0));
  q.push(mc("medium", "Incomes are right-skewed. Which is larger?", ["mean", "median", "they are equal", "cannot tell"], 0));
  q.push(mc("medium", "Test scores bunch near the top with a low tail. This is:", ["left-skewed", "right-skewed", "symmetric", "bimodal"], 0));
  q.push(mc("medium", "A histogram symmetric with one peak suggests:", ["mean $\\approx$ median", "mean $>$ median", "mean $<$ median", "bimodal"], 0));
  q.push(mc("medium", "Two histograms share a mean; one is wider. The wider one has:", ["greater spread", "less spread", "the same spread", "no mean"], 0));
  q.push(ms("medium", "Which are true for a right-skewed distribution?", ["mean $>$ median", "long right tail", "median is more typical", "mean $<$ median"], [0, 1, 2]));
  q.push(ms("medium", "Which sum to $1$?", ["relative frequencies", "proportions of the whole", "all the fractions of the total", "raw frequencies"], [0, 1, 2]));
  q.push(tf("medium", "A wider histogram (same mean) has a larger standard deviation.", true));
  q.push(tf("medium", "For right-skewed data, the median better represents a typical value.", true));
  q.push(num("medium", "Frequencies $2,5,9,7,3$: the total?", 26, 0));
  q.push(num("medium", "Frequencies $5,8,10,4,3$: values in classes $3$ or higher?", 17, 0));
  q.push(num("medium", "A relative-frequency histogram's bars sum to (a number):", 1, 0));
  q.push(fill("medium", "For right-skewed data, mean is ___ than median.", ["greater", "larger", "more"]));
  q.push(fill("medium", "Frequencies $2,5,9,7,3$: modal class number $=$ ___.", ["3"]));
  q.push(mc("medium", "A bimodal histogram often signals:", ["two subgroups mixed", "one group", "no variation", "an error"], 0));
  q.push(num("medium", "Frequencies $1,3,8,6,2$: the total?", 20, 0));
  q.push(tf("medium", "Comparing distributions means comparing centre, spread, and shape.", true));
  q.push(mc("medium", "A relative frequency of $0.25$ from a total of $60$ means a count of:", ["$15$", "$25$", "$0.25$", "$240$"], 0));
  q.push(num("medium", "A relative frequency of $0.25$ from a total of $60$: the count?", 15, 0));
  // HARD
  q.push(mc("hard", "For a strongly right-skewed distribution, the usual order is:", ["mode $<$ median $<$ mean", "mean $<$ median $<$ mode", "mean $=$ median $=$ mode", "median $<$ mode $<$ mean"], 0));
  q.push(mc("hard", "For a left-skewed distribution, the usual order is:", ["mean $<$ median $<$ mode", "mode $<$ median $<$ mean", "all equal", "median $<$ mean"], 0));
  q.push(mc("hard", "A histogram of exam scores is left-skewed. Which is true?", ["mean $<$ median", "mean $>$ median", "mean $=$ median", "no median"], 0));
  q.push(mc("hard", "Two classes have equal medians but class A has a larger IQR. Class A is:", ["more spread out", "more consistent", "identical", "skewed left"], 0));
  q.push(mc("hard", "A cumulative frequency reaching $80\\%$ at a value means that value is about the:", ["80th percentile", "median", "mode", "mean"], 0));
  q.push(mc("hard", "Frequencies (classes $0$--$10,\\dots$): $4,10,20,10,4$ (symmetric). The mean is:", ["$20$", "$15$", "$25$", "$10$"], 0));
  q.push(num("hard", "Symmetric frequencies $4,10,20,10,4$ over midpoints $0,10,20,30,40$: the mean?", 20, 0.01));
  q.push(num("hard", "Frequencies $2,5,9,7,3$ over midpoints $1,2,3,4,5$: the mean to 2 decimals?", 3.15, 0.01));
  q.push(tf("hard", "For a right-skewed distribution, mode $<$ median $<$ mean.", true));
  q.push(tf("hard", "A cumulative frequency curve (ogive) can read off percentiles.", true));
  q.push(ms("hard", "Which are true for right-skewed data?", ["mean $>$ median", "long right tail", "mode is the smallest of the three", "mean $<$ median"], [0, 1, 2]));
  q.push(mc("hard", "Grouped frequencies $3,5,2$ over midpoints $10,20,30$: the mean is:", ["$19$", "$20$", "$18$", "$21$"], 0));
  q.push(num("hard", "Grouped frequencies $3,5,2$ over midpoints $10,20,30$: the mean?", 19, 0.01));
  q.push(mc("hard", "Which measure of centre is LEAST affected by a strong right skew?", ["median", "mean", "mode is best", "range"], 0));
  q.push(num("hard", "Frequencies $4,10,20,10,4$: total number of values?", 48, 0));
  q.push(fill("hard", "For left-skewed data, mean is ___ than median.", ["less", "smaller", "lower"]));
  q.push(mc("hard", "A dataset's mean $=52$, median $=60$. The distribution is likely:", ["left-skewed", "right-skewed", "symmetric", "uniform"], 0));
  q.push(tf("hard", "If mean $<$ median, the distribution is likely left-skewed.", true));
  q.push(num("hard", "Frequencies $1,3,8,6,2$ over midpoints $5,15,25,35,45$: the mean to 1 decimal?", 27.5, 0.1));
  q.push(mc("hard", "A distribution with mean $70$, median $70$, one clear peak is best called:", ["symmetric unimodal", "right-skewed", "bimodal", "left-skewed"], 0));
  return q;
}

// ── 5.6 The z-Score & Comparing Data ────────────────────────
function g56() {
  const q = [];
  // EASY
  q.push(mc("easy", "The $z$-score is:", ["$\\dfrac{x-\\bar x}{\\sigma}$", "$\\dfrac{\\sigma}{x}$", "$x-\\bar x$", "$\\bar x\\sigma$"], 0));
  q.push(mc("easy", "A score of $85$ with $\\bar x=70,\\ \\sigma=10$ has $z=$", ["$1.5$", "$-1.5$", "$15$", "$1$"], 0));
  q.push(mc("easy", "A $z$-score of $0$ means the value is:", ["at the mean", "the maximum", "one $\\sigma$ up", "below the mean"], 0));
  q.push(mc("easy", "A negative $z$-score means:", ["below the mean", "above the mean", "at the mean", "an error"], 0));
  q.push(mc("easy", "With $\\bar x=60,\\ \\sigma=8$, the value at $z=1$ is:", ["$68$", "$52$", "$60$", "$8$"], 0));
  q.push(mc("easy", "A larger $z$-score means the value is:", ["relatively higher", "relatively lower", "at the mean", "unrelated"], 0));
  q.push(ms("easy", "Which are true about $z$-scores?", ["$z=\\tfrac{x-\\bar x}{\\sigma}$", "negative means below the mean", "$z=0$ at the mean", "$z$ has units"], [0, 1, 2]));
  q.push(ms("easy", "Which give the value from a $z$-score?", ["$x=\\bar x+z\\sigma$", "add $z\\sigma$ to the mean", "$\\bar x - z\\sigma$ for negative $z$", "$x=z$"], [0, 1, 2]));
  q.push(tf("easy", "A $z$-score standardizes a value's position.", true));
  q.push(tf("easy", "A $z$-score of $-2$ is two standard deviations below the mean.", true));
  q.push(tf("easy", "$z$-scores let you compare values from different data sets.", true));
  q.push(num("easy", "Score $92$, $\\bar x=80,\\ \\sigma=6$: the $z$-score?", 2, 0));
  q.push(num("easy", "$\\bar x=50,\\ \\sigma=4$: the $z$-score of $42$?", -2, 0));
  q.push(num("easy", "With $\\bar x=70,\\ \\sigma=10$: the value at $z=2$?", 90, 0));
  q.push(fill("easy", "$z=\\dfrac{x-\\bar x}{\\;}$ ___.", ["sigma", "\\sigma"]));
  q.push(fill("easy", "$x=\\bar x+z\\;$ ___.", ["sigma", "\\sigma"]));
  q.push(mc("easy", "Which is more extreme: $z=-1.9$ or $z=1.5$?", ["$z=-1.9$", "$z=1.5$", "equal", "cannot tell"], 0));
  q.push(num("easy", "With $\\bar x=25,\\ \\sigma=3$: the value at $z=-1$?", 22, 0));
  q.push(tf("easy", "Comparing $|z|$ tells which value is farther from its mean.", true));
  q.push(mc("easy", "Who did better relatively: $z=1.2$ or $z=0.9$?", ["$z=1.2$", "$z=0.9$", "equal", "cannot tell"], 0));
  // MEDIUM
  q.push(mc("medium", "Ann: $82$ on $\\bar x=75,\\ \\sigma=5$. Ben: $88$ on $\\bar x=80,\\ \\sigma=8$. Who is relatively higher?", ["Ann ($z=1.4$)", "Ben ($z=1$)", "equal", "cannot tell"], 0));
  q.push(mc("medium", "For normal data, $z=1$ corresponds to about the:", ["84th percentile", "68th percentile", "50th percentile", "16th percentile"], 0));
  q.push(mc("medium", "For normal data, $z=2$ is about the:", ["98th percentile", "95th percentile", "90th percentile", "84th percentile"], 0));
  q.push(mc("medium", "With $\\bar x=500,\\ \\sigma=100$ (normal): the value at $z=1.28$ ($\\approx$ 90th percentile) is:", ["$628$", "$564$", "$672$", "$600$"], 0));
  q.push(mc("medium", "Which value is more unusual: $z=2.3$ or $z=-1.8$?", ["$z=2.3$", "$z=-1.8$", "equal", "both typical"], 0));
  q.push(mc("medium", "A time of $12$ s with $\\bar x=15,\\ \\sigma=1.5$: $z=$ (faster is better)", ["$-2$", "$2$", "$-1.5$", "$3$"], 0));
  q.push(ms("medium", "Which are true when comparing via $z$-scores?", ["higher $z$ $=$ relatively higher", "$z$ removes units", "you can compare different tests", "raw scores are enough"], [0, 1, 2]));
  q.push(ms("medium", "For normal data, which percentile matches?", ["$z=1\\to84$th", "$z=0\\to50$th", "$z=2\\to98$th", "$z=1\\to68$th"], [0, 1, 2]));
  q.push(tf("medium", "A $z$-score of $1$ is about the 84th percentile for normal data.", true));
  q.push(tf("medium", "Ann ($z=1.4$) did relatively better than Ben ($z=1$).", true));
  q.push(num("medium", "Ann's $z$: $82$ on $\\bar x=75,\\ \\sigma=5$?", 1.4, 0.001));
  q.push(num("medium", "Ben's $z$: $88$ on $\\bar x=80,\\ \\sigma=8$?", 1, 0.001));
  q.push(num("medium", "$\\bar x=500,\\ \\sigma=100$: the value at $z=1.28$?", 628, 0));
  q.push(fill("medium", "For normal data, $z=1$ is about the ___ percentile.", ["84", "84th"]));
  q.push(fill("medium", "A run of $12$ s ($\\bar x=15,\\ \\sigma=1.5$) has $z=$ ___.", ["-2"]));
  q.push(mc("medium", "Standardizing $x=118$ with $\\bar x=100,\\ \\sigma=12$ gives:", ["$1.5$", "$18$", "$1$", "$2$"], 0));
  q.push(num("medium", "Standardize $x=76$ with $\\bar x=100,\\ \\sigma=12$: the $z$-score?", -2, 0));
  q.push(tf("medium", "A lower time with a negative $z$ can still be a better performance (in a race).", true));
  q.push(mc("medium", "For normal data, $z=0$ is the:", ["50th percentile", "0th percentile", "100th percentile", "84th percentile"], 0));
  q.push(num("medium", "For normal data, $z=2$ is about the ___th percentile.", 98, 0));
  // HARD
  q.push(mc("hard", "Heights $N(165,7)$. The $z$-score of $179$ cm and its percentile:", ["$z=2$, about 98th", "$z=1$, about 84th", "$z=2$, about 95th", "$z=1.5$, about 93rd"], 0));
  q.push(mc("hard", "For heights $N(165,7)$, the height at the 16th percentile ($z=-1$) is:", ["$158$", "$172$", "$151$", "$165$"], 0));
  q.push(mc("hard", "A diver scores $z=1.5$ on style ($\\bar x=6,\\ \\sigma=0.8$) and $z=1.0$ on difficulty. Style raw score:", ["$7.2$", "$6.8$", "$7.5$", "$6.5$"], 0));
  q.push(mc("hard", "Two students: $X$ has $z=1.8$ in a class with $\\bar x=70,\\ \\sigma=10$; $Y$ scored $88$ with $\\bar x=80,\\ \\sigma=5$. Who is higher?", ["$Y$ ($z=1.6$)... $X$ ($z=1.8$)", "$X$ ($z=1.8$)", "$Y$", "equal"], 1));
  q.push(mc("hard", "A value at the 97.5th percentile of a normal distribution has $z\\approx$", ["$1.96$", "$1.28$", "$2.5$", "$1.645$"], 0));
  q.push(mc("hard", "Standardized test $A$: score $130$, $\\bar x=100,\\ \\sigma=15$. Test $B$: score $65$, $\\bar x=50,\\ \\sigma=10$. Which is higher relatively?", ["both $z=2$ (tie)", "$A$", "$B$", "cannot tell"], 0));
  q.push(num("hard", "Heights $N(165,7)$: the $z$-score of $179$ cm?", 2, 0));
  q.push(num("hard", "Heights $N(165,7)$: the height at the 16th percentile ($z=-1$)?", 158, 0));
  q.push(num("hard", "Diver style: $z=1.5$, $\\bar x=6,\\ \\sigma=0.8$: raw score?", 7.2, 0.01));
  q.push(num("hard", "$X$: $z=1.8$; $Y$: $88$ with $\\bar x=80,\\ \\sigma=5$ ($z=1.6$). Higher $z$ value?", 1.8, 0.001));
  q.push(tf("hard", "Test $A$ ($130$ on $N(100,15)$) and test $B$ ($65$ on $N(50,10)$) both give $z=2$.", true));
  q.push(tf("hard", "The 97.5th percentile corresponds to $z\\approx1.96$.", true));
  q.push(ms("hard", "Which are true for heights $N(165,7)$?", ["$179$ gives $z=2$", "$179$ is about the 98th percentile", "16th percentile $=158$", "$179$ is the mean"], [0, 1, 2]));
  q.push(mc("hard", "Comparing $z=2.1$ and $z=-2.4$: the more extreme (unusual) is:", ["$z=-2.4$", "$z=2.1$", "equal", "both typical"], 0));
  q.push(num("hard", "A test value has $z=1.96$ with $\\bar x=100,\\ \\sigma=15$: the raw score to 1 decimal?", 129.4, 0.2));
  q.push(num("hard", "Standardize $65$ with $\\bar x=50,\\ \\sigma=10$: the $z$-score?", 1.5, 0.001));
  q.push(fill("hard", "The 97.5th percentile of a normal distribution has $z\\approx$ ___.", ["1.96"]));
  q.push(mc("hard", "A marathon time of $210$ min with $\\bar x=240,\\ \\sigma=20$ has $z=-1.5$; relative to the field this runner is:", ["faster than most", "slower than most", "exactly average", "the slowest"], 0));
  q.push(num("hard", "Marathon $210$ min, $\\bar x=240,\\ \\sigma=20$: the $z$-score?", -1.5, 0.001));
  q.push(tf("hard", "For a race, a more negative $z$-score (faster time) is a better result.", true));
  return q;
}

export default [
  { code: "5.1", gen: g51 },
  { code: "5.2", gen: g52 },
  { code: "5.3", gen: g53 },
  { code: "5.4", gen: g54 },
  { code: "5.5", gen: g55 },
  { code: "5.6", gen: g56 },
];
