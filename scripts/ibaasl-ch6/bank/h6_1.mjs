// 6.1 Sampling and Data Collection — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const grid = (chosen) => Array.from({ length: 60 }, (_, i) => ({ x: (i % 12) + 1, y: 5 - Math.floor(i / 12), color: chosen.includes(i) ? "red" : "gray" }));

export const TOPIC = "6.1 Sampling and Data Collection";
export const Q = [
  num("A college has 527 first-years, 391 second-years and 282 third-years. In a stratified sample of 60, how many second-years (to the nearest whole number)?", 20, "391/1200 × 60 = 19.55."),
  num("For the same college (527, 391, 282) and n = 60, how many first-years (nearest whole number)?", 26, "527/1200 × 60 = 26.35."),
  num("The bar chart shows the strata sizes of a population. A stratified sample contains 9 from the smallest stratum. How large is the whole sample?", 45, "Smallest 60 of 300 = 1/5; 9 ÷ 1/5.", planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 140 }, segs: [...bars([[1, 60]], "blue"), ...bars([[2, 110]], "violet"), ...bars([[3, 130]], "green")], step: { x: 1, y: 20 } })),
  num("A systematic sample of 25 from a numbered list starts at 7 and ends at 487. Find the sampling interval.", 20, "7 + 24k = 487."),
  num("A population is split into strata of sizes x and 3x. A stratified sample of 48 is taken. How many come from the larger stratum?", 36, "3/4 of 48."),
  mc("The red dots show a sample from a population of 60 arranged in rows by year group (top two rows Year 11, rest Year 12). Which method is it most like?", "stratified (in proportion to the rows)", ["convenience", "systematic with k = 6", "quota with equal numbers"], "Four from the 24 Year 11s and six from the 36 Year 12s: 2 : 3, as in the population.", planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 6 }, points: grid([1, 7, 14, 20, 25, 30, 37, 44, 50, 57]), step: { x: 1, y: 1 } })),
  tf("In a simple random sample of size n, every possible group of n members is equally likely to be chosen.", true, "That is the definition."),
  num("A school of 900 has 40% in Year 11. A stratified sample of 45 is taken. How many are not in Year 11?", 27, "60% of 45."),
  ms("A survey on bus use asks passengers on one route at 8 am. Which are valid criticisms? Select all.", ["only bus users are asked", "only one route and time are covered", "the sample is random", "commuters are over-represented"], [0, 1, 3], "It is a convenience sample."),
  num("A stratified sample of 50 from a firm includes 8 managers. The firm has 64 managers. How many employees does it have?", 400, "8/50 = 64/N."),
  mc("A researcher wants each region represented in proportion and chooses people at random within each region. This is:", "stratified sampling", ["quota sampling", "cluster sampling", "convenience sampling"], "Random within strata, in proportion."),
  num("The chart shows a stratified sample of 30 from groups A, B, C. Group A has 200 members. Find the population size.", 600, "A contributes 10 of 30, i.e. 1/3: N = 3 × 200.", planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 14 }, segs: [...bars([[1, 10]], "blue"), ...bars([[2, 12]], "violet"), ...bars([[3, 8]], "green")], step: { x: 1, y: 2 } })),
  num("For the same sample (A 10, B 12, C 8 from a population of 600), how many members does group B have?", 240, "12/30 × 600."),
  tf("Removing an outlier is always the correct thing to do.", false, "Only errors should be removed; genuine values should be kept and discussed."),
  num("A systematic sample is taken with k = 15 from 600 names, starting at a random number from 1 to 15. How many different samples are possible?", 15, "One for each possible start."),
  mc("Why might a stratified sample be better than a simple random sample of the same size?", "it guarantees each group is represented in proportion", ["it is always cheaper", "it needs no list", "it removes all sampling error"], "Random samples can over- or under-represent groups by chance."),
  num("Three strata have sizes in the ratio 2 : 3 : 5. A stratified sample of 80 is taken. How many from the largest stratum?", 40, "5/10 × 80."),
  num("A sample of 12 heights (cm) is shown with one value far from the rest. The values other than the outlier have mean 165. If the outlier is 251, by how much does including it raise the mean (1 d.p.)?", 86 / 12, "Mean with it: (11 × 165 + 251)/12 = 172.2; rise 7.2.", planeDoc({ view: { xmin: 150, xmax: 260, ymin: 0, ymax: 2 }, points: [158, 160, 162, 163, 164, 165, 166, 167, 168, 170, 172, 251].map((x) => ({ x, y: 1, color: x > 200 ? "red" : "violet" })), step: { x: 10, y: 1 } }), 0.05),
  mc("A data value of 251 cm for a student's height is most likely:", "a recording error (perhaps 151) to check", ["a genuine value to keep", "the mean", "a reason to use a larger sample"], "No student is 2.51 m tall."),
  num("A stratified sample of 40 must be taken from strata of 125, 175 and 100. To the nearest whole number, how many from the 175 stratum?", 18, "175/400 × 40 = 17.5 → 18 (then adjust another to keep 40)."),
];
