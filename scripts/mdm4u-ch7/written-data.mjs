// MDM4U chapter 7 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters; money is written as "dollars".
import { boxTreeSvg, barsSvg, tableSvg, scatterSvg, residualPlotSvg, boxPlotSvg, dotPlotSvg, intervalsSvg } from "../mdm4u/figs.mjs";
import { mean, median, sdS, quartiles, fences, corr, linreg } from "../mdm4u/count.mjs";

const T = {
  1: "7.1 Designing the Study", 2: "7.2 Collecting & Managing Data", 3: "7.3 Analyzing the Data",
  4: "7.4 Communicating Conclusions", 5: "7.5 Critiquing Statistical Studies",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const nFor = (E, p = 0.5) => Math.ceil((1.96 / E) ** 2 * p * (1 - p));

const raw = [42, 38, 45, 410, 40, 44, 39, 41]; // minutes; 410 should be 41
const fixd = raw.map((v) => (v === 410 ? 41 : v));
const ax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ay = [3.1, 3.4, 3.9, 4.0, 4.6, 4.8, 5.3, 5.5, 6.1, 6.2]; // weeks of training vs distance run (km)
const L = linreg(ax, ay);
const g1 = [52, 58, 61, 63, 66, 70, 74], g2 = [60, 64, 67, 69, 72, 75, 79];

export const WRITTEN = [
  W(1, "medium", 5, S`A student is interested in whether part-time work affects school. (a) Write a specific, researchable question. (b) Name the explanatory and response variables and how each will be measured. (c) State a hypothesis. (d) Choose a design and explain why an experiment is not appropriate.`,
    S`(a) e.g. “Is weekly hours of part-time work related to average marks for grade 12 students at our school?” (b) x: hours worked per week (survey); y: current average (school records, with consent). (c) More hours worked is associated with lower marks. (d) Observational survey; assigning students to work would be impractical and unethical. [1, 2, 1, 1.]`,
    boxTreeSvg([{ t: "1. question", color: "blue" }, { t: "2. design", color: "violet" }, { t: "3. collect", color: "green" }, { t: "4. analyse", color: "amber" }, { t: "5. communicate", color: "red" }], { root: "investigation", dy: 36 })),
  W(1, "hard", 6, S`A town of 24 000 households wants the proportion that compost, within ±4 percentage points at 95% confidence. A pilot suggests about 35%. The town has three districts with 12 000, 8000 and 4000 households, and expects a 50% response rate. (a) Find the sample size. (b) Design a proportional stratified plan. (c) How many households should be contacted in each district? (d) Name one ethical safeguard.`,
    S`(a) $n=\left(\frac{1.96}{0.04}\right)^2(0.35)(0.65)\approx${((1.96 / 0.04) ** 2 * 0.2275).toFixed(1)}\Rightarrow${nFor(0.04, 0.35)}$. (b) ${Math.round((nFor(0.04, 0.35) * 12) / 24)}, ${Math.round((nFor(0.04, 0.35) * 8) / 24)}, ${nFor(0.04, 0.35) - Math.round((nFor(0.04, 0.35) * 12) / 24) - Math.round((nFor(0.04, 0.35) * 8) / 24)} (random within each district). (c) double each: ${2 * Math.round((nFor(0.04, 0.35) * 12) / 24)}, ${2 * Math.round((nFor(0.04, 0.35) * 8) / 24)}, ${2 * (nFor(0.04, 0.35) - Math.round((nFor(0.04, 0.35) * 12) / 24) - Math.round((nFor(0.04, 0.35) * 8) / 24))}. (d) anonymous responses; consent; no identifying details published. [2, 2, 1, 1.]`,
    tableSvg([["district", "households"], ["A", "12 000"], ["B", "8 000"], ["C", "4 000"]])),
  W(2, "medium", 4, S`Commute times (min) were entered as ${raw.join(", ")}. The original form shows 41, not 410. (a) Find the mean and median before and after correcting. (b) Explain why the mean changed much more than the median. (c) Describe two other cleaning steps a researcher should check for.`,
    S`(a) before: mean $${r2(mean(raw))}$, median $${median(raw)}$; after: mean $${r2(mean(fixd))}$, median $${median(fixd)}$. (b) the mean uses every value's size; the median depends on the middle position. (c) duplicates, missing values, inconsistent units or codes. [2, 1, 1.]`,
    dotPlotSvg(fixd, { min: 36, max: 47, step: 1, xlabel: "commute (min), corrected" })),
  W(2, "hard", 5, S`A student plans to use an online table that reports “youth unemployment” for 2012 in a study about teenagers today. (a) Give three questions to judge this source. (b) Identify two problems with using it. (c) Suggest a better data plan.`,
    S`(a) Who collected it and why? How was the sample chosen? How is “youth” defined? How recent is it? Is the method published? (b) out of date; “youth” may mean ages 15–24, not teenagers. (c) a recent table from the national statistics agency with a matching age definition, or a primary survey with a random sample. [2, 2, 1.]`,
    barsSvg([2012, 2026], { labels: ["data year", "study year"], top: true, ymax: 2100 })),
  W(3, "medium", 5, S`Weeks of training (x) and the distance (km) a runner can run without stopping (y): x ${ax.join(", ")}; y ${ay.join(", ")}. (a) Describe the relationship and find $r$. (b) Find the regression line and interpret the slope. (c) Use the residual plot to judge the model.`,
    S`(a) strong positive linear; $r\approx${r3(corr(ax, ay))}$. (b) $\hat y\approx${r3(L.a)}x+${r3(L.b)}$: about ${r2(L.a)} km more per extra week. (c) residuals scatter randomly: linear model appropriate. [2, 2, 1.]`,
    residualPlotSvg(ax.map((x, i) => [x, ay[i]]), L, { xmin: 0, xmax: 11, xlabel: "weeks of training" })),
  W(3, "hard", 6, S`Two classes' test marks: class 1: ${g1.join(", ")}; class 2: ${g2.join(", ")}. A random sample of 300 students in the school found 186 passed a fitness test. (a) Compare the classes using centre and spread. (b) Draw or describe side-by-side box plots. (c) Find a 95% confidence interval for the school's pass rate. (d) State one limitation of each analysis.`,
    S`(a) medians $${median(g1)}$ and $${median(g2)}$; $s\approx${r2(sdS(g1))}$ and $${r2(sdS(g2))}$: class 2 higher, similar spread. (b) class 2's box shifted right, similar width. (c) $\hat p=0.62$, $E\approx${r3(moe(0.62, 300))}$: $${r3(0.62 - moe(0.62, 300))}$ to $${r3(0.62 + moe(0.62, 300))}$. (d) small classes, not randomly formed; the interval covers only random error, not test-day bias. [2, 1, 2, 1.]`,
    boxPlotSvg([{ data: g1, label: "class 1" }, { data: g2, label: "class 2" }], { min: 45, max: 85, step: 5 })),
  W(4, "medium", 4, S`A random sample of 520 adults found that 286 read news online daily. (a) Write a conclusion with a 95% confidence interval. (b) Rewrite the overstatement “Most people in the world read the news online.” (c) Name one limitation.`,
    S`(a) $\hat p=0.55$, $E\approx${r3(moe(0.55, 520))}$: between about ${Math.round((0.55 - moe(0.55, 520)) * 100)}% and ${Math.round((0.55 + moe(0.55, 520)) * 100)}% of adults in the sampled population read news online daily (95% confidence). (b) “About 55% of the adults in our sample read news online daily.” (c) self-reported; one region; time of year. [2, 1, 1.]`,
    intervalsSvg([[0.55 - moe(0.55, 520), 0.55 + moe(0.55, 520)]], { truth: 0.5, label: "50%", min: 0.44, max: 0.64, ticks: [0.45, 0.5, 0.55, 0.6] })),
  W(4, "hard", 5, S`Write the conclusion and limitations sections of a report on the training study (weeks of training vs distance run, $r\approx${r3(corr(ax, ay))}$, one runner, 10 weeks). Include the answer, evidence, uncertainty or variability, scope, and at least three limitations.`,
    S`Conclusion: for this runner, distance increased steadily with training — about ${r2(L.a)} km per week ($r^2\approx${r3(corr(ax, ay) ** 2)}$). Scope: one runner over 10 weeks. Limitations: one person; weather and sleep not controlled; growth cannot continue linearly (no extrapolation); possible measurement error. [1, 1, 1, 2.]`,
    scatterSvg(ax.map((x, i) => [x, ay[i]]), { xmin: 0, xmax: 11, ymin: 2, ymax: 7, line: L, xlabel: "weeks", ylabel: "distance (km)" })),
  W(4, "medium", 4, S`A bar graph compares this year's graduation rate (88%) with last year's (85%), with the vertical axis starting at 84%. (a) How many times taller does this year's bar look? (b) What is the true ratio? (c) Describe an honest version and an unbiased title.`,
    S`(a) $\frac{88-84}{85-84}=4$. (b) $\frac{88}{85}\approx${r3(88 / 85)}$. (c) axis from 0, labelled; title “Graduation rate, last year and this year”. [1, 1, 2.]`,
    barsSvg([4, 1], { labels: ["this year", "last year"], top: ["88%", "85%"], fmt: (v) => String(Math.round(v + 84)) + "%", ymax: 5 })),
  W(5, "medium", 4, S`A beverage company reports: “In our survey of 40 customers at our flagship store, 90% said our new drink gives them more energy.” Critique the study using at least four checklist questions.`,
    S`Source: the company (conflict of interest). Sample: 40 customers at its own store — convenience, unrepresentative, small. Measurement: self-reported energy; a possibly leading question. Design: no control group or placebo, so no causal claim. [1 each.]`,
    boxTreeSvg([{ t: "source", color: "red" }, { t: "sample", color: "red" }, { t: "measurement", color: "red" }, { t: "design", color: "red" }], { root: "critique", dy: 34 })),
  W(5, "hard", 6, S`A report states: “Of 300 students, 45% of the 140 boys and 55% of the 160 girls support a new schedule, so 60% of students support it. Accurate to ±2 points, 19 times out of 20.” (a) Check the overall percent. (b) Check the margin of error. (c) Write a corrected summary sentence. (d) Name a question you would ask about the sampling.`,
    S`(a) $0.45(140)+0.55(160)=63+88=151$; $\frac{151}{300}\approx50.3\%$, not 60%. (b) $1.96\sqrt{\frac{0.503(0.497)}{300}}\approx${r3(moe(0.503, 300))}$, about ±5.7 points, not ±2. (c) “About 50% (±5.7 points, 95%) of the students surveyed support the new schedule.” (d) Was the sample random, and what was the response rate? [2, 2, 1, 1.]`,
    tableSvg([["", "support", "total"], ["boys", "63", "140"], ["girls", "88", "160"], ["total", "151", "300"]])),
  W(5, "hard", 5, S`A classmate's investigation surveyed 25 friends, found $r=0.78$ between hours of gaming and reaction speed, and concluded “gaming makes you faster.” Write constructive peer feedback with two strengths and three improvements (problem, effect, fix).`,
    S`Strengths: clear variables; correct use of $r$ and a scatter plot. Improvements: convenience sample of friends → may not represent students → random sample; causal claim → observational data → use association language or an experiment; small $n$ → unstable $r$ → larger sample. [2, 3.]`,
    scatterSvg([[1, 410], [2, 395], [4, 380], [5, 372], [7, 350], [8, 345], [10, 330]], { xmin: 0, xmax: 11, ymin: 320, ymax: 420, xlabel: "gaming hours per week", ylabel: "reaction time (ms)" })),
  W(3, "medium", 4, S`For your culminating investigation, describe: (a) the variable types you will collect; (b) the summaries and displays you will use for each; (c) how you will check whether a regression model is appropriate; (d) how you will express uncertainty.`,
    S`(a) e.g. one categorical, two numerical. (b) percents/bar graph; mean, median, s/box plot; scatter plot, $r$, regression. (c) residual plot; look for outliers and influential points. (d) margin of error for proportions; spread for means; $r^2$ for models. [1 each.]`,
    tableSvg([["variable types", "tools"], ["one categorical", "percents, bar graph"], ["one numerical", "centre, spread, box plot"], ["two numerical", "scatter, r, regression"], ["proportion", "confidence interval"]])),
];
