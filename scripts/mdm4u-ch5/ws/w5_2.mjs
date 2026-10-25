// MDM4U Worksheet 5.2 — Sampling Techniques (teacher edition)
import { svgT, popGridSvg, tableSvg } from "./figT.mjs";
import { C } from "../../mdm4u/count.mjs";

const S = String.raw;
const staff = [["nurses", 420], ["doctors", 90], ["support", 240], ["administration", 150]];
const GR = (i, r) => ["blue", "red", "green"][Math.floor(r / 2)];

const EXAMPLES = [
  { title: "Simple random sample", q: "The 80 members of a band are numbered 01 to 80. Use the random digits 47 93 05 61 05 28 84 12 to choose 4 members.", steps: ["Read two digits at a time; skip numbers above 80 and repeats.", "47 yes, 93 skip, 05 yes, 61 yes, 05 repeat, 28 yes."], ans: "members 47, 05, 61, 28" },
  { title: "Systematic sample", q: "A factory makes 1800 phone cases a shift. Quality control checks 60 of them systematically, starting at case 17. Find k, the first four cases and the last case checked.", steps: [S`$k=\frac{1800}{60}=30$.`, "17, 47, 77, 107, …", S`Last: $17+59(30)=1787$.`], ans: "k = 30; 17, 47, 77, 107; case 1787" },
  { title: "Stratified sample", q: "A hospital has 420 nurses, 90 doctors, 240 support staff and 150 administrators. Choose a proportional stratified sample of 60.", fig: svgT(tableSvg([["group", "staff", "sample"], ...staff.map(([g, k]) => [g, k, (60 * k) / 900]), ["total", 900, 60]]), 6), steps: [S`Fraction $\frac{60}{900}=\frac1{15}$.`, S`$\frac{420}{15}=28$, $\frac{90}{15}=6$, $\frac{240}{15}=16$, $\frac{150}{15}=10$.`], ans: "28, 6, 16, 10" },
  { title: "Cluster sample", q: "An airline wants to survey passengers on one day. It chooses 5 of its 64 flights at random and surveys every passenger on them. Name the technique, and give one advantage and one risk.", steps: ["Whole flights are the clusters.", "Advantage: cheap and quick. Risk: passengers on one flight (e.g. a business route) may be alike."], ans: "cluster sample" },
  { title: "Multistage sample", q: "A province chooses 6 of its 40 school districts at random, then 2 schools in each district, then 25 students in each school. How many students are in the sample? Name the technique.", steps: [S`$6\times2\times25=300$.`], ans: "300 students; multistage sample" },
  { title: "Name the technique", q: "Name each: (a) every 12th customer through a store door after a random start; (b) the first 30 people who reply to an online poll; (c) a random sample from each age group in proportion to its size; (d) interviewing friends at lunch.", steps: ["Identify who chooses: chance or the people themselves or the researcher."], ans: "(a) systematic (b) voluntary response (c) stratified (d) convenience" },
  { title: "Why convenience fails", q: "To estimate the average time students spend on homework, a teacher surveys the students in her own enriched mathematics class. Explain why the sample is not representative.", steps: ["The class is chosen for convenience.", "Students in an enriched class may do more homework than typical students: the estimate is likely too high."], ans: "convenience sample; likely overestimate" },
  { title: "Choosing a technique", q: "A city wants to know how residents of its 3 very different neighbourhoods (sizes 12 000, 30 000 and 18 000) feel about a new park. Recommend a technique and the sample size from each for a total of 400.", steps: [S`Stratify by neighbourhood: $\frac{400}{60\,000}=\frac{1}{150}$.`, "80, 200 and 120 residents, each a simple random sample."], ans: "stratified: 80, 200, 120" },
  { title: "Counting samples", q: "How many different simple random samples of 4 can be chosen from a group of 12? What is the probability that a particular person is chosen?", steps: [S`$\binom{12}{4}=${C(12, 4)}$.`, S`$\frac{4}{12}=\frac13$.`], ans: `${C(12, 4)}; 1/3` },
];

const PROBLEMS = [
  { level: 1, q: "A systematic sample of 80 is taken from a list of 2400. Find the sampling interval.", ans: "30" },
  { level: 1, q: "A club has 180 juniors and 120 seniors. How many of each belong in a proportional stratified sample of 25?", ans: "15 juniors, 10 seniors" },
  { level: 1, q: "Name the technique: a radio host invites listeners to text their opinion.", ans: "voluntary response" },
  { level: 2, q: "With k = 40 and random start 23, list the first three members and the 15th member of a systematic sample.", ans: "23, 63, 103; 583" },
  { level: 2, q: "Members are numbered 001 to 600. Use the digits 512 734 090 512 466 601 238 to choose 4 members.", ans: "512, 090, 466, 238" },
  { level: 2, q: "Describe how you would choose a cluster sample of the students in a school with 48 homerooms.", ans: "number the homerooms, choose a few at random, survey every student in them" },
  { level: 2, q: "The figure shows a population of three groups (blue, red, green) with a sample highlighted. Is the sample stratified? Justify.", fig: svgT(popGridSvg(6, 16, { groupOf: GR, selected: new Set([4, 11, 21, 29, 35, 44, 54, 60, 70, 77, 81, 93]) }), 6.5), ans: "yes: 4 from each group of 32, i.e. each group sampled in proportion" },
  { level: 2, q: "A sample of 50 is chosen from 1250 people by simple random sampling. What is the probability that a particular person is chosen?", ans: "0.04" },
  { level: 3, space: 4.5, q: "A list of 400 apartments is ordered floor by floor; each floor has 10 apartments and apartment 10 on each floor is the large corner unit. Explain what happens with a systematic sample using k = 10, and propose a better plan.", ans: "every unit chosen is the same position on its floor: all corner units or none; use simple random or stratify by unit type" },
  { level: 3, space: 4.5, q: "In a proportional stratified sample of a company, 14 of the 210 part-time workers were chosen. The company has 1500 workers. (a) Find the total sample size. (b) How many of the 840 full-time staff were chosen?", ans: "(a) 100 (b) 56" },
  { level: 3, space: 4.5, q: "A national survey wants 1200 adults. Design a multistage plan using provinces, towns and households, and give the numbers chosen at each stage.", ans: "e.g. 10 regions in proportion, 12 towns per region, 10 households per town: 10 × 12 × 10 = 1200" },
  { level: 3, space: 4.5, q: "How many different systematic samples of 25 are possible from a list of 500? How many different simple random samples of 2 are possible from 500? Comment.", ans: `20; ${C(500, 2)}; a systematic sample allows far fewer possible samples` },
  { level: 3, space: 4.5, q: "A school wants the opinion of its 1500 students on the dress code. Compare a simple random sample of 100 with a stratified sample of 100 by grade. When is stratifying worth the extra work?", ans: "stratified guarantees each grade in proportion; worth it when opinions differ by grade" },
];

export const WS = {
  code: "5.2",
  title: "Sampling Techniques",
  bigideas: S`A random sample lets chance decide who is chosen. Simple random: every group of $n$ is equally likely. Systematic: $k=\frac Nn$, random start, then every $k$th. Stratified: a random sample from each group in proportion to its size. Cluster: all members of a few random groups. Multistage: random choices at several levels. Convenience and voluntary-response samples are not random and are usually biased.`,
  goals: ["Select samples by each method.", "Compute k and stratum sizes.", "Recognize non-random samples.", "Choose and justify a method."],
  curriculum: "C2.1, C2.3",
  vocab: [["Sampling frame", "the list sampled from"], ["Stratum", "a group sampled separately"], ["Cluster", "a whole group surveyed"], ["Interval k", "N divided by n"]],
  hook: "You must survey 100 of the 2000 students in your school by Friday. How would you choose them so the results are fair?",
  concepts: [
    ["1. Random methods", S`${svgT(popGridSvg(6, 16, { groupOf: GR, selected: new Set([3, 11, 19, 27, 35, 43, 51, 59, 67, 75, 83, 91]) }), 5.6)}A systematic sample: every 8th member from a random start.`],
    ["2. Allocation", S`$n_i=n\times\frac{N_i}{N}$ for each stratum.`],
    ["3. Non-random", "Convenience and voluntary response: who answers is not decided by chance."],
  ],
  tips: ["Use a random start for systematic samples.", "Check that stratum sizes add to n.", "Clusters: survey everyone in them.", "Skip out-of-range and repeated random numbers.", "Say why the method suits the situation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
