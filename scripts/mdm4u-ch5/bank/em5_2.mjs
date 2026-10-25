// 5.2 Sampling Techniques — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { popGridSvg, tableSvg } from "../../mdm4u/figs.mjs";

const tech = ["simple random", "systematic", "stratified", "cluster", "multistage", "convenience", "voluntary response"];
const name = (prompt, k, why) => mc(prompt, k, tech.filter((x) => x !== k).slice(0, 3), why);
const G3 = (i, r) => ["blue", "red", "green"][Math.floor(r / 2)];

export const E = [
  num("A systematic sample of 40 is taken from a list of 1200. Find the sampling interval k.", 30, "1200/40."),
  num("A systematic sample of 25 is taken from 500 names. Find k.", 20, "500/25."),
  num("With k = 15 and random start 4, what is the 3rd member chosen?", 34, "4 + 2(15)."),
  num("With k = 12 and random start 9, what is the 10th member chosen?", 117, "9 + 9(12)."),
  num("A school has 600 boys and 400 girls. How many girls are in a proportional stratified sample of 50?", 20, "50 × 400/1000."),
  num("A company has 80 managers and 720 workers. How many managers are in a proportional stratified sample of 40?", 4, "40 × 80/800."),
  name("Names are drawn from a hat so that every group of 10 students is equally likely. This is a … sample.", "simple random", "Every group equally likely."),
  name("Every 20th customer through the door is surveyed after a random start. This is a … sample.", "systematic", "Fixed interval."),
  name("Random samples are taken from each grade in proportion to the grade's size. This is a … sample.", "stratified", "Strata."),
  name("Four homerooms are chosen at random and every student in them is surveyed. This is a … sample.", "cluster", "Whole groups."),
  name("A website asks visitors to click to vote. This is a … sample.", "voluntary response", "Self-selected."),
  name("A reporter interviews people in a mall food court. This is a … sample.", "convenience", "Easy to reach."),
  tf("In a systematic sample, the starting point should be chosen at random.", true, "Random start."),
  tf("A convenience sample is a random sample.", false, "Chosen for ease."),
  tf("In a cluster sample, every member of each chosen cluster is surveyed.", true, "Definition."),
  num("A district chooses 5 schools, then 4 classes in each, then 6 students in each class. How many students are sampled?", 120, "5 × 4 × 6."),
  num("In a simple random sample of 30 from 600 people, what is the probability that a particular person is chosen? Answer as a decimal.", 0.05, "30/600.", null, 0.0001),
  num("The figure shows a population of 3 groups (blue, red, green) with the sample as large dots. How many green individuals are sampled?", 4, "Count large green dots.", popGridSvg(6, 16, { groupOf: G3, selected: new Set([2, 12, 20, 29, 37, 42, 55, 61, 66, 75, 82, 93]) })),
  num("The table shows a club's members. How many juniors belong in a proportional stratified sample of 30?", 18, "30 × 120/200.", tableSvg([["group", "members"], ["juniors", "120"], ["seniors", "80"]])),
  mc("Which technique needs a complete list of the population?", "simple random", ["convenience", "voluntary response", "none of these"], "Number every member."),
];

export const M = [
  num("A hospital has 360 nurses, 60 doctors and 180 other staff. How many doctors are in a proportional stratified sample of 50?", 5, "50 × 60/600."),
  num("In a proportional stratified sample, 12 of the 240 seniors were chosen. How many of the 520 juniors were chosen?", 26, "Fraction 1/20."),
  num("In a proportional stratified sample, 9 of the 180 part-time staff were chosen from a company of 1400. What is the total sample size?", 70, "1400/20."),
  num("A list of 2000 items is sampled systematically with k = 25. How many items are in the sample?", 80, "2000/25."),
  num("How many different systematic samples are possible from a list of 900 with a sample of 45?", 20, "One for each start 1 to k = 20."),
  num("How many different simple random samples of 2 can be chosen from 8 people?", 28, "C(8, 2)."),
  num("Members are numbered 01 to 60. Random digits: 72 15 08 15 44 91 37. Which member is chosen 4th? (skip numbers over 60 and repeats)", 37, "15, 08, 44, 37."),
  mc("A city has four very different wards. To make sure each is represented in proportion, use…", "a stratified sample", ["a cluster sample", "a convenience sample", "a voluntary sample"], "Strata = wards."),
  mc("Why might a cluster sample be less reliable than a simple random sample of the same size?", "members of a cluster tend to be alike", ["it needs a list of everyone", "it is always biased", "it is a census"], "Less variety."),
  mc("A list of apartments repeats every 8 units (corner unit last). A systematic sample with k = 8 will…", "pick all corner units or none", ["be a census", "be unbiased", "be a cluster sample"], "Periodic pattern."),
  ms("Which are random (probability) samples? Select all.", ["systematic with random start", "voluntary online poll", "stratified", "interviewing friends", "cluster"], [0, 2, 4], "Chance decides."),
  ms("Which describe a multistage sample? Select all.", ["random selection at more than one level", "provinces, then towns, then households chosen at random", "everyone in one city", "the first 50 people to arrive"], [0, 1], "Several stages."),
  tf("Quota sampling, where the interviewer picks people to fill each group, is a random sample.", false, "The interviewer chooses."),
  tf("A stratified sample guarantees that each stratum is represented.", true, "Sample from every stratum."),
  mc("A teacher surveys the students in her own class about the whole school's homework load. The sample is…", "convenience, probably not representative", ["simple random", "stratified", "a census"], "Easy to reach."),
  num("The figure shows a systematic sample (large dots) of a population listed row by row. What is the sampling interval?", 8, "Positions 3, 11, 19, … differ by 8.", popGridSvg(5, 16, { selected: new Set([2, 10, 18, 26, 34, 42, 50, 58, 66, 74]) })),
  num("The table gives the sizes of three faculties. How many Science students are in a proportional stratified sample of 90?", 36, "90 × 1200/3000.", tableSvg([["faculty", "students"], ["Arts", "1050"], ["Science", "1200"], ["Business", "750"]])),
  mc("A national survey picks 10 provinces/territories at random, then towns, then households. This is…", "multistage", ["cluster", "systematic", "convenience"], "Several stages."),
  num("In a simple random sample of 75 from 1500, what is the probability that a particular person is NOT chosen? Answer as a decimal.", 0.95, "1 − 0.05.", null, 0.0001),
  mc("Which is the best way to choose 100 of 2000 students for a dress-code survey when opinions vary by grade?", "stratify by grade and sample randomly within grades", ["survey the first 100 students to arrive", "post an online poll", "survey one homeroom"], "Strata."),
];
