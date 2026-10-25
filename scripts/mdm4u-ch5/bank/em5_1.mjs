// 5.1 Types of Data & Statistical Studies — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { popGridSvg, boxTreeSvg, tableSvg, barsSvg } from "../../mdm4u/figs.mjs";

const kinds = ["nominal", "ordinal", "discrete", "continuous"];
const kind = (prompt, k, why) => mc(`Classify the variable: ${prompt}.`, k, kinds.filter((x) => x !== k), why);

export const E = [
  kind("the number of cavities a patient has", "discrete", "Counted."),
  kind("the time a battery lasts", "continuous", "Measured."),
  kind("a person's favourite season", "nominal", "Unordered categories."),
  kind("a spice level: mild, medium, hot", "ordinal", "Ordered categories."),
  kind("the distance a ball is thrown", "continuous", "Measured."),
  kind("the language spoken at home", "nominal", "Labels."),
  kind("the number of courses a student takes", "discrete", "Counted."),
  kind("a hotel rating of one to five stars", "ordinal", "Ordered labels."),
  mc("A school surveys 90 of its 1350 students. The 1350 students are the…", "population", ["sample", "census", "variable"], "Everyone of interest."),
  mc("A school surveys 90 of its 1350 students. The 90 students are the…", "sample", ["population", "census", "sampling frame"], "Those actually surveyed."),
  num("A survey of 90 students is taken from 1350. What percent of the population is surveyed?", 6.67, "90/1350 ≈ 0.0667.", null, 0.01),
  mc("Data collected from every member of a population form a…", "census", ["sample", "survey of volunteers", "simulation"], "Definition."),
  tf("Postal codes are numerical data.", false, "They are labels (categorical)."),
  tf("A longitudinal study follows the same individuals over time.", true, "Definition."),
  mc("Data you collect yourself by measuring are…", "primary data", ["secondary data", "aggregate data", "census data"], "Collected first-hand."),
  mc("A published table of average incomes by city is…", "secondary, aggregate data", ["primary microdata", "primary aggregate data", "secondary microdata"], "Collected by others; summarized."),
  mc("In which study does the researcher impose a treatment?", "an experiment", ["an observational study", "a census", "a cross-sectional survey"], "Treatment imposed."),
  num("The figure shows a population with the sample as large dots. How many individuals are in the sample?", 10, "Count the large dots.", popGridSvg(4, 15, { selected: new Set([1, 8, 13, 19, 24, 33, 38, 46, 51, 57]) })),
  mc("In the classification chart, which type is missing from the empty box?", "ordinal", ["discrete", "continuous", "aggregate"], "Categorical: nominal and ordinal.", boxTreeSvg([{ t: "categorical", color: "green", c: [{ t: "nominal", color: "green" }, { t: "?", color: "green" }] }, { t: "numerical", color: "blue", c: [{ t: "discrete", color: "blue" }, { t: "continuous", color: "blue" }] }], { root: "variable" })),
  tf("A sample is usually cheaper and faster than a census.", true, "Fewer individuals."),
];

export const M = [
  num("A random sample of 375 people is 2.5% of a population. How large is the population?", 15000, "375/0.025."),
  num("A study begins with 600 participants and loses 10% of those remaining each year. How many remain after 2 years?", 486, "600(0.9)²."),
  mc("Testing how long every light bulb lasts would…", "destroy the bulbs, so a sample is needed", ["require a census", "be cheaper than a sample", "be an observational study"], "Destructive testing."),
  mc("Researchers compare the health of people who already drink green tea with those who do not. This is…", "an observational study", ["an experiment", "a census", "a longitudinal experiment"], "Nothing is imposed."),
  mc("Which conclusion can an observational study support?", "an association between variables", ["proof of cause and effect", "the effect of a treatment", "that no confounding variables exist"], "Only association."),
  ms("Which variables are numerical? Select all.", ["height in cm", "number of pets", "province", "shirt size S/M/L", "time to finish a test"], [0, 1, 4], "Measured or counted."),
  ms("Which are reasons to use a sample rather than a census? Select all.", ["lower cost", "the testing is destructive", "faster results", "it always has no error", "the population is very large"], [0, 1, 2, 4], "A sample still has sampling error."),
  mc("A study records the ages of all Ontario residents on one day. It is…", "cross-sectional", ["longitudinal", "experimental", "a sample"], "One point in time."),
  mc("Each row of a file gives one student's marks. This is…", "microdata", ["aggregate data", "secondary aggregate data", "a summary table"], "One record per individual."),
  tf("A rating scale from 1 to 10 is ordinal data.", true, "Ordered; gaps are not measured."),
  tf("A large survey of volunteers is a census.", false, "A census is the whole population."),
  num("The table shows how many of a school's students are in each grade. How many students are in the population?", 1240, "Add the counts.", tableSvg([["grade", "9", "10", "11", "12"], ["students", "340", "330", "300", "270"]])),
  num("The bar graph shows the numbers of students surveyed in each grade. What fraction of the sample is in grade 12? Answer as a decimal.", 0.2, "20 of 100.", barsSvg([30, 28, 22, 20], { labels: ["9", "10", "11", "12"], top: true, xlabel: "grade" }), 0.001),
  mc("“Hours of sleep last night”, recorded to the nearest half hour, is best described as…", "continuous (measured, then rounded)", ["nominal", "ordinal", "categorical"], "Underlying quantity is measured."),
  mc("A confounding variable is one that…", "is related to both variables and may explain the association", ["is measured incorrectly", "is the treatment", "is always categorical"], "Hidden third variable."),
  mc("Ice-cream sales and drownings rise together. The most likely explanation is…", "hot weather affects both", ["ice cream causes drowning", "drowning causes ice-cream sales", "the data are aggregate"], "A confounding variable."),
  mc("Which is primary data for a student's project on traffic?", "counting cars at an intersection for an hour", ["a city traffic report", "a government census table", "a news article's statistics"], "Collected first-hand."),
  num("A town has 18 400 households. A sample of 460 is planned. What percent is that?", 2.5, "460/18400.", null, 0.01),
  tf("In an experiment, random assignment helps make the groups alike except for the treatment.", true, "Balances other variables."),
  mc("A sampling frame is…", "the list of the population from which the sample is drawn", ["the sample size", "the questionnaire", "the graph of the results"], "Definition."),
];
