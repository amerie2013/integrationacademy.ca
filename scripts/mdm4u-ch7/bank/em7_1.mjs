// 7.1 Designing the Study — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, boxTreeSvg } from "../../mdm4u/figs.mjs";

const nFor = (E, p = 0.5) => Math.ceil((1.96 / E) ** 2 * p * (1 - p));
const ns = (E, p) => num(`Find the sample size needed to estimate a proportion within ±${Math.round(E * 1000) / 10} percentage points at 95% confidence${p === undefined ? " with no prior estimate" : ` if p̂ ≈ ${p}`}.`, nFor(E, p ?? 0.5), "n = (1.96/E)² p̂(1 − p̂), rounded up.");
const contact = (need, rate) => num(`A study needs ${need} responses and expects a ${rate}% response rate. How many people should be contacted?`, Math.ceil(need / (rate / 100)), "Responses ÷ response rate, rounded up.");

export const E = [
  ns(0.1), ns(0.05), ns(0.08), ns(0.07),
  contact(100, 50), contact(240, 60), contact(90, 75),
  mc("Which research question is best?", "Is there a relationship between daily screen time and hours of sleep for grade 10 students at our school?", ["Are screens bad?", "What do people think about phones?", "Is technology good for the world?"], "Specific population and measurable variables."),
  mc("A hypothesis is…", "a testable prediction about the variables", ["the final conclusion", "the sample size", "a graph of the data"], "Definition."),
  mc("To test whether a new study method causes higher marks, the best design is…", "a randomized experiment", ["a survey of students", "secondary data", "a census"], "Cause needs random assignment."),
  mc("Data on Canada's population by province since 1950 are best obtained from…", "a secondary source such as a national statistics agency", ["a class survey", "an experiment", "interviews with friends"], "Existing reliable data."),
  mc("Which is the first stage of a statistical investigation?", "posing a question", ["analysing data", "collecting data", "writing the report"], "Question first."),
  tf("A researchable question must name a specific population.", true, "Otherwise it is vague."),
  tf("A larger margin of error requires a larger sample.", false, "A smaller margin needs a larger sample."),
  tf("Participants should give informed consent.", true, "Ethics."),
  num("A school has 500 students in grade 11 and 300 in grade 12. How many grade 12 students belong in a proportional stratified sample of 80?", 30, "80 × 300/800."),
  num("The bar graph shows the sample sizes for three margins of error. About how many times larger is the sample for ±4% than for ±8%?", 4, "Halving E quadruples n.", barsSvg([nFor(0.08), nFor(0.04)], { labels: ["±8%", "±4%"], top: true })),
  mc("In the process diagram, which stage is missing?", "analyse", ["guess", "publish first", "sample size"], "Question, design, collect, analyse, communicate.", boxTreeSvg([{ t: "question", color: "blue" }, { t: "design", color: "violet" }, { t: "collect", color: "green" }, { t: "?", color: "amber" }, { t: "communicate", color: "red" }], { root: "investigation", dy: 32 })),
  mc("“Students who sleep more get higher marks” is…", "a hypothesis", ["a sampling frame", "a census", "a confidence interval"], "A testable prediction."),
  ms("Which make a research question feasible? Select all.", ["data can be collected in the time available", "the population can be reached", "the variables can be measured", "it requires surveying everyone on Earth"], [0, 1, 2], "Practical limits."),
];

export const M = [
  ns(0.03), ns(0.04, 0.3), ns(0.05, 0.2), ns(0.06, 0.4), ns(0.025),
  contact(385, 45), contact(150, 35),
  num("A study needs 200 usable responses. 70% respond and 5% of responses are unusable. How many people should be contacted?", Math.ceil(200 / (0.7 * 0.95)), "200 ÷ (0.7 × 0.95)."),
  num("By what factor must the sample size be multiplied to cut the margin of error from ±9 to ±3 percentage points?", 9, "3²."),
  num("The table shows a school's enrolment. Find the number of grade 10 students in a proportional stratified sample of 150.", 39, "150 × 312/1200.", tableSvg([["grade", "9", "10", "11", "12"], ["students", "330", "312", "288", "270"]])),
  num("Using the same enrolment (330, 312, 288, 270), how many grade 12 students belong in a sample of 200?", 45, "200 × 270/1200."),
  mc("A researcher wants to know whether caffeine improves reaction time. Why is an observational study weaker than an experiment?", "people who drink caffeine may differ in other ways (confounding)", ["observational studies have no data", "experiments never need consent", "reaction time cannot be measured"], "Self-selection."),
  mc("Which plan is ethical for studying the effect of sleep on memory?", "compare students' self-chosen sleep with memory scores, with consent", ["force students to stay awake all night", "secretly record students", "punish students who sleep less"], "No harm."),
  mc("Why use p̂ = 0.5 when there is no prior estimate?", "it gives the largest, safest sample size", ["it is always the true value", "it makes the margin larger", "it removes bias"], "p̂q̂ is largest at 0.5."),
  ms("Which belong in a sampling plan? Select all.", ["the population and sampling frame", "the sampling technique", "the sample size", "the conclusion", "how non-response will be handled"], [0, 1, 2, 4], "The conclusion comes later."),
  tf("Using p̂ = 0.2 instead of 0.5 gives a smaller required sample size.", true, "0.16 < 0.25."),
  tf("A good design can make up for a vague research question.", false, "The question comes first."),
  mc("Which variable is the response in “Is weekly exercise related to resting heart rate?”", "resting heart rate", ["weekly exercise", "both", "neither"], "The outcome."),
  mc("The bar graph shows planned sample sizes by grade. Which is NOT proportional for grades of equal size?", "grade 12", ["grade 9", "grade 10", "grade 11"], "Grade 12 is under-sampled.", barsSvg([40, 40, 40, 20], { labels: ["9", "10", "11", "12"], top: true, ylabel: "sample" })),
  num("A margin of error of ±4 points needs n = 601. Roughly what n gives ±2 points?", 2401, "(1.96/0.02)² × 0.25 = 2401."),
];
