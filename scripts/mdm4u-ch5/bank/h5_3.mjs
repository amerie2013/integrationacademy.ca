// 5.3 Bias & Principles of Data Collection — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, pieSvg, boxTreeSvg, tableSvg } from "../../mdm4u/figs.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;

export const TOPIC = "5.3 Bias & Principles of Data Collection";
export const Q = [
  num("Each person rolls a die: 1 or 2, say “yes”; 3 to 6, answer truthfully. 40% say yes. Estimate p. Answer as a decimal (3 places).", r3((0.4 - 1 / 3) / (2 / 3)), "1/3 + (2/3)p = 0.4.", null, 0.0015),
  num("A coin method (heads truthful, tails “yes”) is used. If the true proportion is 0.24, what percent of answers are expected to be “yes”?", 62, "0.5 + 0.5(0.24).", null, 0.01),
  num("A mailed survey of 1200 gets 480 replies; 336 support a plan. What is the width of the range of possible support among all 1200 (highest − lowest)? Answer as a decimal.", 0.6, "Lowest 336/1200, highest 1056/1200.", null, 0.001),
  num("A population is 35% vegetarian. A survey gets 150 replies from a vegetarian festival (90% vegetarian) and 250 random replies. What proportion of the sample is vegetarian? Answer as a decimal (3 places).", r3((0.9 * 150 + 0.35 * 250) / 400), "(135 + 87.5)/400.", null, 0.0015),
  num("A survey's bias adds 0.12 to the true proportion; its standard error is 0.02. If the sample size is multiplied by 4, what is the new bias?", 0.12, "Bias does not depend on n.", null, 0.001),
  num("A survey's standard error is 0.02. If the sample size is multiplied by 4, what is the new standard error?", 0.01, "SE ∝ 1/√n.", null, 0.0001),
  num("A thermometer reads 1.5°C low. Recorded temperatures have mean 18.2°C and standard deviation 3.1°C. What is the true mean?", 19.7, "Add 1.5.", null, 0.001),
  num("The bar graph shows the reported support for a policy under three wordings. What is the difference between the highest and lowest reported support, in percentage points?", 40, "71 − 31.", barsSvg([40, 31, 71], { labels: ["neutral", "loaded against", "leading for"], top: true, ylabel: "percent support", ymax: 80 })),
  num("The circle graph shows the replies to a survey of 600 random households. How many households did not reply?", 252, "42% of 600.", pieSvg([["replied", 58, "green"], ["no reply", 42, "red"]])),
  mc("The design shown is missing which key feature of a good experiment?", "random assignment to the groups", ["a treatment", "a measured response", "a comparison"], "Volunteers chose their groups.", boxTreeSvg([{ t: "chose the app", color: "red", c: [{ t: "test score", color: "green" }] }, { t: "chose not to", color: "blue", c: [{ t: "test score", color: "green" }] }], { root: "volunteers" })),
  num("The table shows the results of an experiment. By how many points did the treatment group's mean improvement exceed the control group's?", 4.5, "7.3 − 2.8.", tableSvg([["group", "n", "mean improvement"], ["treatment", "40", "7.3"], ["control (placebo)", "40", "2.8"]]), 0.001),
  ms("Which reduce response bias? Select all.", ["anonymous questionnaires", "neutral wording", "randomized response for sensitive questions", "interviewers who show their opinion", "leading questions"], [0, 1, 2], "Protect honesty."),
  ms("Which are sources of bias that a larger sample cannot fix? Select all.", ["a leading question", "surveying only one neighbourhood", "random sampling variability", "a scale that reads high", "low response from busy people"], [0, 1, 3, 4], "Only random variability shrinks."),
  mc("A study of a new teaching method uses volunteers' teachers who are enthusiastic about it. Results are excellent. The best explanation for caution is…", "teacher enthusiasm is confounded with the method", ["the sample was random", "the study had a control group", "the placebo effect is impossible here"], "Confounding."),
  mc("An online news poll with 50 000 votes shows 80% support. A random poll of 1000 shows 52%. Which should be trusted?", "the random poll of 1000", ["the online poll: it is bigger", "both equally", "neither can be used"], "Voluntary response is biased."),
  tf("A double-blind design protects against both the placebo effect and researcher bias in measuring results.", true, "Neither side knows."),
  tf("If a survey has non-response bias, weighting the respondents can always remove it completely.", false, "Non-respondents may differ in ways not measured."),
  mc("In a randomized-response survey, why can't the interviewer tell whether a particular “yes” is true?", "the coin or die result is secret", ["the answers are anonymous by law", "the sample is random", "only a computer reads the answers"], "Privacy by design."),
  num("A survey of 900 adults using neutral wording found 46% support. With leading wording, the support in a similar sample was 59%. If the true support is 45%, what is the bias of the leading version in percentage points?", 14, "59 − 45.", null, 0.01),
  mc("Researchers want to study whether a new medication slows memory loss over 10 years. The most appropriate design is…", "a long-term randomized controlled experiment, double-blind, with consent", ["a one-day survey of patients", "a voluntary online poll", "a cross-sectional observational study"], "Treatment effect over time."),
];
