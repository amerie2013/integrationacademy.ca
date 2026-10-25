// 5.2 Sampling Techniques — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { popGridSvg, tableSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

const G4 = (i, r) => ["blue", "red", "green", "amber"][Math.floor(r / 2)];

export const TOPIC = "5.2 Sampling Techniques";
export const Q = [
  num("A school has 425 grade 9, 400 grade 10, 375 grade 11 and 300 grade 12 students. In a proportional stratified sample of 120, how many grade 11 students are chosen?", 30, "120 × 375/1500."),
  num("A proportional stratified sample of a town took 21 of the 840 seniors. The town has 12 600 people. How large is the sample?", 315, "Fraction 1/40."),
  num("How many different simple random samples of 5 can be chosen from a class of 20?", C(20, 5), "C(20, 5)."),
  num("A systematic sample uses k = 18 and its 30th member is number 529. What was the random start?", 7, "529 − 29(18)."),
  num("A list of 1000 is sampled with k = 40. What is the probability that a particular person on the list is chosen? Answer as a decimal.", 0.025, "One of 40 starts includes them.", null, 0.0001),
  num("A cluster sample chooses 3 of 30 equal-sized homerooms. What is the probability that a particular student is surveyed? Answer as a decimal.", 0.1, "3/30.", null, 0.0001),
  num("A multistage sample chooses 4 of 20 schools, then 2 of 10 classes in each chosen school, then 5 of 25 students in each chosen class. What is the probability that a given student is chosen? Answer as a decimal.", 0.008, "(4/20)(2/10)(5/25).", null, 0.0001),
  num("Stratified sample of 80 from strata of 450, 330 and 420. With rounding, the second stratum gets how many?", 22, "80 × 330/1200 = 22."),
  num("The figure shows a population in four grades (rows of two) with a sample (large dots). How many grades are NOT represented in the sample?", 2, "Only blue and amber appear.", popGridSvg(8, 12, { groupOf: G4, selected: new Set([3, 9, 14, 20, 75, 80, 87, 93]) })),
  num("The figure shows a systematic sample of a population listed row by row. If the population is 120, how many are sampled?", 12, "Every 10th: 120/10.", popGridSvg(6, 20, { selected: new Set(Array.from({ length: 12 }, (_, j) => 6 + 10 * j)) })),
  num("Use the table: a proportional stratified sample of 75 is taken. How many come from region C?", 15, "75 × 2400/12000.", tableSvg([["region", "households"], ["A", "5400"], ["B", "4200"], ["C", "2400"]])),
  num("The bar graph shows the numbers chosen from each stratum in a proportional sample from a population of 2000. Stratum B has how many members in the population?", 640, "Total sample 125: fraction 1/16; 40 × 16.", barsSvg([50, 40, 35], { labels: ["A", "B", "C"], top: true, ylabel: "chosen" })),
  mc("A researcher wants to estimate mean income in a city whose neighbourhoods differ greatly. Which gives the most precise estimate for a fixed sample size?", "stratified by neighbourhood", ["cluster by neighbourhood", "systematic from a phone list", "voluntary online"], "Strata reduce variability between samples."),
  mc("A factory checks every 50th bottle on a line where a filler with 10 heads fills bottles in rotation. Why is k = 50 a problem?", "every checked bottle comes from the same filler head", ["the sample is too small", "the start is random", "it is a cluster sample"], "50 is a multiple of 10."),
  ms("Which statements are true? Select all.", ["a stratified sample can reduce variability between samples", "cluster sampling usually needs a list of every individual", "systematic sampling can be biased by a periodic list", "voluntary samples overrepresent strong opinions", "a convenience sample is fine if it is large"], [0, 2, 3], "Size does not fix bias."),
  tf("In a systematic sample of n from N (k = N/n), every possible group of n people is equally likely to be the sample.", false, "Only k different samples are possible."),
  tf("In a simple random sample, every individual has the same chance of being chosen, and so does every group of n individuals.", true, "Definition."),
  mc("A pollster calls random phone numbers but interviews whoever answers. The likely problem is…", "people who are home and answer phones may differ from others", ["it is a census", "it is systematic", "the frame is complete"], "Who is available."),
  num("A random-number generator gives 3-digit numbers from 000 to 999. Members are numbered 001 to 350. What fraction of generated numbers are usable on average? Answer as a decimal.", 0.35, "350 of 1000.", null, 0.001),
  mc("To survey 400 of a province's teachers, which plan is most practical and still random?", "randomly choose 20 schools, then 20 teachers from each", ["survey teachers at one conference", "email all teachers and use the replies", "survey teachers in the capital"], "Multistage."),
];
