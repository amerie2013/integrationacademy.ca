// 7.1 Designing the Study — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, boxTreeSvg, popGridSvg } from "../../mdm4u/figs.mjs";

const nFor = (E, p = 0.5, z = 1.96) => Math.ceil((z / E) ** 2 * p * (1 - p));

export const TOPIC = "7.1 Designing the Study";
export const Q = [
  num("Find n for ±2 percentage points at 99% confidence (z* = 2.576) with no prior estimate.", nFor(0.02, 0.5, 2.576), "(2.576/0.02)² × 0.25, rounded up."),
  num("Find n for ±3 percentage points at 90% confidence (z* = 1.645) with p̂ ≈ 0.25.", nFor(0.03, 0.25, 1.645), "(1.645/0.03)² × 0.1875, rounded up."),
  num("A study can afford 600 surveys and expects a 40% response rate. What margin of error (percentage points, 95%, p̂ = 0.5) can it expect? (1 decimal)", Math.round(1.96 * Math.sqrt(0.25 / 240) * 1000) / 10, "240 responses.", null, 0.1),
  num("A study needs ±5 points for each of 4 regions separately (p̂ = 0.5). How many responses are needed in total?", 4 * nFor(0.05), "385 per region."),
  num("A two-stage plan picks 8 of 40 schools, then 25 students from each. What is the probability that a particular student in a school of 500 is chosen?", 0.01, "(8/40)(25/500).", null, 0.0001),
  num("The table gives a district's schools. In a proportional stratified sample of 250, how many come from the urban stratum?", 150, "250 × 3600/6000.", tableSvg([["stratum", "students"], ["urban", "3600"], ["suburban", "1800"], ["rural", "600"]])),
  mc("A study of whether a reading program improves scores uses volunteer classes as the treatment group and other classes as controls. The main weakness is…", "teachers who volunteer may differ (confounding)", ["the sample is too large", "scores are numerical", "it uses a control group"], "Self-selection of classes."),
  mc("Which design best tests whether a 15-minute daily walk lowers stress in adults, ethically?", "randomly assign consenting volunteers to walking or a usual routine for 6 weeks and compare stress scores", ["survey walkers and non-walkers once", "ask doctors their opinion", "force all employees to walk"], "Randomized, consenting, controlled."),
  mc("The diagram shows a design. What should be added to support a causal conclusion?", "random assignment to the two groups", ["a larger font", "a third outcome", "more questions"], "Groups chose themselves.", boxTreeSvg([{ t: "chose tutoring", color: "red", c: [{ t: "final mark", color: "green" }] }, { t: "chose no tutoring", color: "blue", c: [{ t: "final mark", color: "green" }] }], { root: "students" })),
  mc("The figure shows a cluster plan (whole homerooms, dashed boxes). What is its main risk?", "students in the same homeroom may be similar", ["it needs a list of every student", "it is not random", "it is too expensive"], "Clusters can be alike.", popGridSvg(5, 16, { clusters: 4, selected: new Set([4, 5, 6, 7, 20, 21, 22, 23, 36, 37, 38, 39, 52, 53, 54, 55, 68, 69, 70, 71]), pickClusters: new Set(["0,4"]) })),
  ms("A student plans to email a survey to all 1400 students and analyse whoever replies. Which problems does this plan have? Select all.", ["voluntary response", "non-response bias", "no control over who answers", "it is a stratified sample"], [0, 1, 2], "Self-selected replies."),
  tf("If the population is 1 000 000 instead of 10 000, the sample size needed for ±3 points (random sample) is about the same.", true, "n depends on E and p̂, not on N (for large N)."),
  tf("An experiment can always be used instead of an observational study.", false, "Ethics or practicality may prevent it."),
  num("The bar graph shows the responses expected from four grades with equal response rates of 50%. If each grade needs 60 responses, how many students must be contacted in total?", 480, "4 × 120.", barsSvg([60, 60, 60, 60], { labels: ["9", "10", "11", "12"], top: true, ylabel: "responses needed" })),
  num("For a margin of error of 0.04 with z* = 1.96 and p̂ unknown, the formula gives 600.25. A student rounds down to 600. By how much does this change the sample size?", 1, "Always round up: 601."),
  mc("Which hypothesis can be tested with the data from “weekly hours of exercise” and “resting heart rate”?", "more exercise is associated with a lower resting heart rate", ["exercise is fun", "heart rate is important", "people should exercise"], "Testable with the variables."),
  mc("A study wants to compare commute times of two transit routes. Which variables and design are needed?", "route (categorical) and commute time (numerical); random samples of riders on each route", ["one numerical variable only", "a census of the city", "an experiment assigning homes"], "Groups compared."),
  num("A pilot gives p̂ = 0.12. Find n for ±2 points at 95% confidence.", nFor(0.02, 0.12), "(1.96/0.02)² × 0.1056."),
  num("Compare the sample sizes for ±5 points with p̂ = 0.5 and p̂ = 0.1. Find the difference.", nFor(0.05) - nFor(0.05, 0.1), "385 − 139."),
  mc("A student has two weeks. Which question is most feasible?", "Is the number of hours students spend on homework related to their grade level at our school?", ["How has world happiness changed since 1900?", "Do all humans prefer warm weather?", "What will be the most popular job in 2080?"], "Data reachable in time."),
];
