// 6.1 Sampling and Data Collection — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const grid = (chosen) => Array.from({ length: 50 }, (_, i) => ({ x: (i % 10) + 1, y: 5 - Math.floor(i / 10), color: chosen.includes(i) ? "red" : "gray" }));

export const E = [
  mc("The number of people in a car is:", "discrete", ["continuous", "neither", "both"], "It is counted."),
  mc("The time taken to boil a kettle is:", "continuous", ["discrete", "neither", "categorical only"], "It is measured."),
  mc("The whole group about which information is wanted is the:", "population", ["sample", "statistic", "census"], "A sample is part of it."),
  tf("A sample is part of a population.", true, "By definition."),
  tf("Convenience sampling is a random method.", false, "Members are chosen because they are easy to reach."),
  fill("A systematic tendency for a sample to misrepresent the population is called ___.", ["bias", "Bias", "sampling bias"], "It comes from the method."),
  num("A systematic sample of 40 is taken from 1200 names. Find the interval k.", 30, "1200 ÷ 40."),
  num("A systematic sample of 16 is taken from 400 names. Find k.", 25, "400 ÷ 16."),
  num("A school has 300 girls and 200 boys. In a stratified sample of 25, how many girls?", 15, "300/500 × 25."),
  num("A club has 45 juniors and 135 seniors. In a stratified sample of 20, how many juniors?", 5, "45/180 × 20."),
  mc("Choosing every 10th name from a list after a random start is:", "systematic sampling", ["simple random sampling", "quota sampling", "stratified sampling"], "Fixed interval from a random start."),
  mc("Splitting a population into groups and sampling each in proportion is:", "stratified sampling", ["quota sampling", "systematic sampling", "convenience sampling"], "Random within each stratum, in proportion."),
  tf("A larger sample always removes bias.", false, "A biased method stays biased however large."),
  mc("Which is a parameter?", "the mean height of all students in a school", ["the mean height of 30 sampled students", "a sample proportion", "the sample size"], "A parameter describes the population."),
  num("The red dots show a systematic sample from a population of 50. What is the sampling interval?", 5, "Every 5th member is chosen.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 6 }, points: grid([2, 7, 12, 17, 22, 27, 32, 37, 42, 47]), step: { x: 1, y: 1 } })),
  num("The bar chart shows a stratified sample from Years 10, 11 and 12. How many students were sampled in total?", 40, "12 + 16 + 12.", planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 18 }, segs: [...bars([[1, 12]], "blue"), ...bars([[2, 16]], "violet"), ...bars([[3, 12]], "green")], step: { x: 1, y: 2 } })),
  mc("A survey of shoppers at 10 am on a weekday is likely to under-represent:", "people who work full time", ["retired people", "parents with young children", "shop staff"], "They are at work."),
  tf("Shoe size is discrete data.", true, "It takes only certain values."),
  mc("The number used from a sample to estimate a population value is a:", "statistic", ["parameter", "population", "frame"], "It is calculated from the sample."),
  num("A company has 80 managers and 720 workers. In a stratified sample of 40, how many managers?", 4, "80/800 × 40."),
];

export const M = [
  num("Strata of sizes 210, 140 and 350 are sampled in proportion with n = 50. How many from the 350 stratum?", 25, "350/700 × 50."),
  num("A stratified sample of 30 from a club of 450 contains 12 juniors. Estimate the number of juniors in the club.", 180, "12/30 × 450."),
  num("A systematic sample uses k = 12 and starts at 5. What is the 6th member chosen?", 65, "5 + 5 × 12."),
  num("A list of 960 names is sampled with k = 24. How many are in the sample?", 40, "960 ÷ 24."),
  ms("Which are random sampling methods? Select all.", ["simple random", "systematic (random start)", "stratified", "quota"], [0, 1, 2], "Quota sampling is chosen by the interviewer."),
  mc("Which survey is most likely biased for estimating the average income of a city?", "asking diners at an expensive restaurant", ["a simple random sample from the electoral roll", "a stratified sample by district", "a systematic sample from the tax list"], "Diners at expensive restaurants are richer than average."),
  tf("In stratified sampling the number from each stratum is proportional to the stratum's size.", true, "That keeps the sample representative."),
  num("Year groups have 96, 120 and 84 students. A stratified sample of 50 is taken. How many from the 120 group?", 20, "120/300 × 50."),
  num("For the strata 96, 120 and 84 with n = 50, how many from the 84 group?", 14, "84/300 × 50."),
  mc("A teacher records every student's mark in her class to find the class average. This is a:", "census", ["sample", "quota sample", "stratified sample"], "Every member is included."),
  num("The bar chart shows a population with groups A, B, C of sizes 60, 90, 150. In a stratified sample of 40, how many from C?", 20, "150/300 × 40.", planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 160 }, segs: [...bars([[1, 60]], "blue"), ...bars([[2, 90]], "violet"), ...bars([[3, 150]], "green")], step: { x: 1, y: 20 } })),
  num("The grid shows a population of 50 with a convenience sample in red. What fraction of the population was sampled? Give a decimal.", 0.2, "10 of 50.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 6 }, points: grid([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), step: { x: 1, y: 1 } }), 1e-9),
  mc("An online poll gets 2000 replies. The main problem is:", "self-selection: people with strong views reply", ["the sample is too small", "it is a stratified sample", "it uses a sampling frame"], "Respondents choose themselves."),
  mc("A recorded age of 214 years in a survey is best treated as:", "an error to be checked and corrected or removed", ["a genuine outlier to keep", "the new maximum", "a reason to discard the survey"], "It is impossible."),
  tf("Quota sampling guarantees the sample is unbiased.", false, "The interviewer chooses who to ask."),
  num("A town has 4800 adults: 1800 aged under 40 and 3000 aged 40 or over. In a stratified sample of 120, how many under 40?", 45, "1800/4800 × 120."),
  ms("Which are continuous? Select all.", ["mass of a parcel", "number of goals", "temperature", "time to finish a race"], [0, 2, 3], "Goals are counted."),
  num("A sample of 60 is taken from a population of 2400. What percentage of the population is sampled?", 2.5, "60/2400 × 100.", null, 1e-9),
  mc("A systematic sample is a poor choice when:", "the list has a repeating pattern with the same period as k", ["the list is in random order", "the population is large", "the sample is small"], "It could pick the same type every time."),
  num("A stratified sample of 36 takes 15 from a stratum of size 250. Find the population size.", 600, "15/36 = 250/N."),
];
