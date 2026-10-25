// MDM4U chapter 5 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters; money is written as "dollars".
import { popGridSvg, boxTreeSvg, barsSvg, pieSvg, dotPlotSvg, boxPlotSvg, stemLeafSvg, tableSvg, normalSvg } from "../mdm4u/figs.mjs";
import { mean, median, quartiles, fences, sdS, sdP, sum, tphi } from "../mdm4u/count.mjs";

const T = {
  1: "5.1 Types of Data & Statistical Studies", 2: "5.2 Sampling Techniques", 3: "5.3 Bias & Principles of Data Collection",
  4: "5.4 Measures of Central Tendency", 5: "5.5 Measures of Spread", 6: "5.6 Quartiles, Percentiles & Box Plots",
  7: "5.7 Displaying & Describing Distributions", 8: "5.8 The z-Score & Comparing Data",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;

const fuel = [6.8, 7.2, 7.5, 7.5, 7.9, 8.1, 8.4, 8.8, 9.0, 12.6];
const [fq1, fmd, fq3] = quartiles(fuel), [flf, fuf] = fences(fuel);
const lap = [52, 55, 57, 58, 60, 61, 61, 63, 66, 70];
const sc = [41, 47, 52, 55, 58, 58, 63, 66, 69, 72, 74, 78, 85, 91];

export const WRITTEN = [
  W(1, "medium", 4, S`A provincial agency wants to know how many hours per week secondary students spend on part-time jobs. (a) Identify the population and suggest a sample. (b) Classify the variable “hours worked” and the variable “type of job”. (c) Explain why a census is not practical.`,
    S`(a) all secondary students in the province; e.g. a random sample of 2000 students. (b) continuous (measured) and nominal. (c) hundreds of thousands of students: too costly and slow. [2, 1, 1.]`,
    boxTreeSvg([{ t: "categorical", color: "green", c: [{ t: "nominal", color: "green" }, { t: "ordinal", color: "green" }] }, { t: "numerical", color: "blue", c: [{ t: "discrete", color: "blue" }, { t: "continuous", color: "blue" }] }], { root: "variable" })),
  W(1, "hard", 5, S`A study reports that adults who garden live longer than adults who do not. (a) Is this an experiment or an observational study? Explain. (b) Name two possible confounding variables. (c) Design a study that could better test whether gardening improves health, and explain the role of random assignment.`,
    S`(a) observational: no treatment was imposed. (b) e.g. physical activity, income, age at retirement, diet. (c) randomly assign volunteers to a gardening program or a control activity for a period, measure health outcomes; random assignment balances other variables between groups. [1, 2, 2.]`,
    barsSvg([81, 77], { labels: ["gardeners", "non-gardeners"], top: true, ylabel: "mean age at death", ymax: 90 })),
  W(2, "medium", 5, S`A college has 2400 students in Business, 1500 in Health and 1100 in Technology. (a) Find the numbers chosen from each program in a proportional stratified sample of 200. (b) Describe how to choose the Business students. (c) Explain one advantage of stratifying here.`,
    S`(a) fraction $\frac{200}{5000}=\frac{1}{25}$: 96, 60, 44. (b) number the 2400 Business students and choose 96 with a random number generator (no repeats). (c) each program is represented in proportion, which matters if opinions differ by program. [2, 2, 1.]`,
    tableSvg([["program", "students"], ["Business", "2400"], ["Health", "1500"], ["Technology", "1100"]])),
  W(2, "hard", 5, S`A city wants to survey 300 of its 45 000 households about garbage collection. (a) Describe a systematic sample, giving $k$ and how to start. (b) Describe a cluster sample using city blocks. (c) The city's list is ordered by street, with corner houses listed every 15th. Which of your plans could be biased and why?`,
    S`(a) $k=\frac{45\,000}{300}=150$; choose a random start from 1 to 150, then every 150th household. (b) number the blocks, choose blocks at random and survey every household in them until about 300. (c) systematic: 150 is a multiple of 15, so the sample would be all corner houses or none. [2, 2, 1.]`,
    popGridSvg(3, 15, { groupOf: (i) => ((i + 1) % 15 === 0 ? "red" : "blue"), selected: new Set([14, 29, 44]), legend: [["corner house", "red"], ["other", "blue"]] })),
  W(3, "medium", 4, S`A school posts an online poll asking: “Wouldn't a longer lunch break improve student well-being?” 180 of its 1400 students answer, and 88% say yes. (a) Identify two sources of bias. (b) Rewrite the question neutrally. (c) Describe a better way to choose respondents.`,
    S`(a) voluntary response (and non-response: 87% did not answer); leading question (response bias). (b) “Should the lunch break be (shorter / the same / longer)?” (c) a stratified random sample by grade, with follow-up of non-respondents. [2, 1, 1.]`,
    pieSvg([["answered", 180, "green"], ["did not answer", 1220, "red"]])),
  W(3, "hard", 6, S`To estimate the proportion $p$ of students who have used a phone during a test, each student secretly rolls a die. On a 1 the student answers “yes”; on a 6, “no”; on 2 to 5 the student answers truthfully. Of 600 students, 190 say yes. (a) Write $P(\text{yes})$ in terms of $p$. (b) Estimate $p$. (c) Explain why the method reduces response bias. (d) Explain why this method needs a larger sample than direct questioning.`,
    S`(a) $\frac16+\frac46p$. (b) $\frac{190}{600}\approx0.3167$: $\frac46p\approx0.15\Rightarrow p\approx0.225$. (c) no one can tell whether a particular yes is true. (d) the random answers add noise, so the estimate varies more. [1, 2, 1, 2.]`,
    boxTreeSvg([{ t: "roll 1", p: "1/6", color: "red", c: [{ t: "says yes", color: "red" }] }, { t: "roll 2 to 5", p: "4/6", color: "green", c: [{ t: "answers truthfully", color: "green" }] }, { t: "roll 6", p: "1/6", color: "blue", c: [{ t: "says no", color: "blue" }] }], { root: "die", dy: 44 })),
  W(4, "medium", 4, S`The dot plot shows the lap times (s) of 10 swimmers. (a) Find the mean, median and mode. (b) The slowest swimmer's time was recorded wrongly and is really 90 s. Which measures change, and how? (c) Which measure would you report then? Why?`,
    S`(a) mean $${mean(lap)}$, median $${median(lap)}$, mode 61. (b) mean rises to $${mean([...lap.slice(0, -1), 90])}$; median and mode unchanged. (c) the median: resistant to the outlier. [2, 1, 1.]`,
    dotPlotSvg(lap, { min: 50, max: 72, step: 2, xlabel: "lap time (s)" })),
  W(4, "hard", 5, S`A teacher computes term marks as 25% quizzes, 35% unit tests and 40% final exam. (a) Lin has 84 on quizzes and 76 on tests. What exam mark gives a term mark of at least 80? (b) Lin's class of 24 has a mean term mark of 72 and another class of 16 has 80. Find the mean of all 40 students. (c) Explain why the answer to (b) is not 76.`,
    S`(a) $0.25(84)+0.35(76)+0.4x\ge80\Rightarrow21+26.6+0.4x\ge80\Rightarrow x\ge81$. (b) $\frac{24(72)+16(80)}{40}=\frac{1728+1280}{40}=75.2$. (c) 76 averages the means equally; the larger class carries more weight. [2, 2, 1.]`,
    barsSvg([25, 35, 40], { labels: ["quizzes", "tests", "exam"], top: ["25%", "35%", "40%"], ylabel: "weight (%)", ymax: 50 })),
  W(5, "medium", 4, S`Two coffee machines are tested with five cups each (mL): A: 248, 251, 250, 252, 249; B: 240, 258, 246, 255, 251. (a) Find each mean. (b) Find each sample standard deviation. (c) Which machine would you buy? Explain.`,
    S`(a) both 250. (b) $s_A\approx${r2(sdS([248, 251, 250, 252, 249]))}$, $s_B\approx${r2(sdS([240, 258, 246, 255, 251]))}$. (c) A: far more consistent fills. [1, 2, 1.]`,
    boxPlotSvg([{ data: [248, 251, 250, 252, 249], label: "A" }, { data: [240, 258, 246, 255, 251], label: "B" }], { min: 236, max: 262, step: 4 })),
  W(5, "hard", 5, S`Daily commute times (min) for a sample of workers are grouped in the table. (a) Estimate the mean. (b) Estimate the sample standard deviation. (c) Explain why both are estimates. (d) If every commute increased by 6 minutes, what would the mean and standard deviation become?`,
    (() => { const m = [5, 15, 25, 35, 45], f = [4, 11, 13, 8, 4], n = sum(f), x = sum(m.map((v, i) => v * f[i])) / n, s = Math.sqrt(sum(m.map((v, i) => f[i] * (v - x) ** 2)) / (n - 1)); return S`(a) $\bar x\approx\frac{${sum(m.map((v, i) => v * f[i]))}}{${n}}=${r2(x)}$. (b) $s\approx${r2(s)}$. (c) midpoints replace the actual values. (d) mean $${r2(x + 6)}$, $s$ unchanged. [1, 2, 1, 1.]`; })(),
    tableSvg([["minutes", "0–10", "10–20", "20–30", "30–40", "40–50"], ["workers", "4", "11", "13", "8", "4"]])),
  W(6, "medium", 5, S`The fuel use (L/100 km) of 10 cars is: ${fuel.join(", ")}. (a) Find the five-number summary. (b) Find the IQR and the fences, and identify any outliers. (c) Draw the box plot.`,
    S`(a) 6.8, $Q_1=${fq1}$, median $${fmd}$, $Q_3=${fq3}$, 12.6. (b) IQR $${r2(fq3 - fq1)}$; fences $${r2(flf)}$ and $${r2(fuf)}$; 12.6 is an outlier. (c) box from ${fq1} to ${fq3}, whiskers to 6.8 and 9.0, point at 12.6. [2, 2, 1.]`,
    boxPlotSvg([{ data: fuel }], { min: 6, max: 13, step: 1 })),
  W(7, "medium", 5, S`The stem-and-leaf plot shows the scores of 14 players. (a) Find the median and range. (b) Draw a histogram with intervals 40–50, 50–60, …, 90–100. (c) Describe the shape, centre and spread.`,
    S`(a) median $${median(sc)}$, range 50. (b) frequencies 2, 4, 3, 3, 1, 1. (c) roughly symmetric to slightly right-skewed, centre about 65, spread from 41 to 91. [2, 2, 1.]`,
    stemLeafSvg(sc)),
  W(8, "hard", 5, S`Three students compare results. Asha: 82 in Chemistry (μ = 71, σ = 6). Ben: 77 in English (μ = 70, σ = 4). Carla: 12.4 s in the 100 m (μ = 13.1 s, σ = 0.35 s; lower is better). (a) Find each z-score. (b) Rank the three performances. (c) If the marks are roughly normal, estimate the percent of the chemistry class that Asha outscored.`,
    S`(a) ${r2(11 / 6)}, 1.75, −2. (b) Carla (2 standard deviations better), then Asha, then Ben. (c) $P(Z<1.83)\approx${tphi(1.83)}$, about ${Math.round(100 * tphi(1.83))}%. [2, 2, 1.]`,
    normalSvg({ mu: 71, s: 6, shade: [[-Infinity, 82, "green"]], marks: [[82, "82"]] })),
];
