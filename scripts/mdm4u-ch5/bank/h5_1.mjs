// 5.1 Types of Data & Statistical Studies — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { popGridSvg, barsSvg, tableSvg, boxTreeSvg } from "../../mdm4u/figs.mjs";

export const TOPIC = "5.1 Types of Data & Statistical Studies";
export const Q = [
  mc("Students who use a tutoring service have higher marks. Which design best tests whether tutoring causes higher marks?", "randomly assign volunteers to tutoring or no tutoring and compare the change in marks", ["survey students who already use tutoring", "compare schools with and without tutoring", "ask teachers which students improved"], "Random assignment removes confounding."),
  mc("A study finds that students with more books at home read better. A likely confounding variable is…", "family income or parents' education", ["the number of pages read", "the reading test", "the sample size"], "Related to both."),
  num("A longitudinal study keeps 85% of its participants each year. It must still have at least 500 after 4 years. What is the smallest starting number?", 958, "500/0.85⁴ ≈ 957.9, so 958."),
  num("A sample of 540 is 1.8% of a population. How many people are not in the sample?", 29460, "N = 30 000; 30 000 − 540."),
  ms("Which are nominal? Select all.", ["jersey number", "blood type", "finishing place in a race", "postal code", "number of goals"], [0, 1, 3], "Labels without order."),
  ms("Which studies are experiments? Select all.", ["random half of a class gets a new app", "survey of students' phone use", "plots randomly given fertilizer", "comparing smokers and non-smokers", "volunteers randomly given caffeine or placebo"], [0, 2, 4], "A treatment is assigned."),
  mc("A researcher records whether each of 400 patients already takes vitamin D and whether they catch a cold. Which conclusion is justified?", "an association, if one appears, but not cause and effect", ["vitamin D prevents colds", "colds cause low vitamin D", "nothing at all can be learned"], "Observational."),
  tf("A census can still contain errors, such as non-response and measurement error.", true, "Only sampling error is removed."),
  tf("Rounding a continuous variable to whole numbers makes the underlying variable discrete.", false, "Only the recorded values are rounded."),
  mc("A provincial table gives the percent of students passing in each school. A researcher concludes that a particular student in a high-passing school will pass. The error is…", "applying aggregate data to an individual", ["using primary data", "using a sample", "using a longitudinal design"], "Aggregate data describe groups."),
  num("The figure shows a population of 96 with the sample as large dots. What percent is sampled?", 12.5, "12 of 96.", popGridSvg(6, 16, { selected: new Set([3, 10, 21, 30, 37, 45, 52, 60, 68, 77, 84, 91]) }), 0.01),
  num("The bar graph shows survey replies by grade. The school has 300 students in each grade. Which grade has the highest sampling fraction? Enter the grade number.", 11, "60/300 = 0.2 is the largest.", barsSvg([45, 40, 60, 30], { labels: ["9", "10", "11", "12"], top: true, xlabel: "grade", ylabel: "replies" })),
  num("Using the table, what percent of the town's adults are in the sample?", 4, "Sample 600 of 15 000.", tableSvg([["", "adults"], ["town population", "15 000"], ["surveyed", "600"]]), 0.01),
  mc("Which box in the chart is wrongly placed?", "“number of siblings” under continuous", ["“province” under nominal", "“size S/M/L” under ordinal", "“height” under continuous"], "Siblings are counted: discrete.", boxTreeSvg([{ t: "nominal", color: "green", c: [{ t: "province", color: "gray" }] }, { t: "ordinal", color: "green", c: [{ t: "size S/M/L", color: "gray" }] }, { t: "continuous", color: "blue", c: [{ t: "number of siblings", color: "gray" }, { t: "height", color: "gray" }] }], { root: "variable" })),
  mc("Why might a 20-year longitudinal study give biased results even if it starts with a random sample?", "people who drop out may differ from those who stay", ["the sample is too large", "it is cross-sectional", "it uses primary data"], "Attrition."),
  mc("A pharmaceutical company funds a study of its own drug. The main concern is…", "a conflict of interest that may bias design or reporting", ["the data are secondary", "the study is longitudinal", "the sample is a census"], "Who collected and why."),
  num("A survey is planned so that each of 4 regions gives 150 responses. The response rate is expected to be 30%. How many surveys must be sent in total?", 2000, "600 responses / 0.3."),
  num("A study's sample shrinks from 2000 to 1280 over 4 years with the same percent lost each year. What percent is lost each year?", 10.56, "(1280/2000)^(1/4) ≈ 0.8944.", null, 0.05),
  ms("Which statements about secondary data are true? Select all.", ["they are usually cheaper to obtain", "you know exactly how they were collected", "they may not match your question exactly", "they can be out of date", "they are always microdata"], [0, 2, 3], "Check source and fit."),
  mc("In a study of whether music helps memory, subjects choose for themselves whether to listen to music. The main flaw is…", "self-selection: the groups may differ in other ways", ["the sample is too large", "the data are aggregate", "it is longitudinal"], "No random assignment."),
];
