// MDM4U 5.2 — Sampling Techniques: sampling frame, simple random, systematic (k = N/n, random start), stratified
// (proportional allocation), cluster, multistage and destructive sampling; non-random convenience and voluntary
// response samples; choosing a technique
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, popGridSvg, tableSvg } from "./lib.mjs";
import { C } from "../mdm4u/count.mjs";

export const TITLE = "5.2 Sampling Techniques";
export const ID = "19d248a9-0217-4c9f-bc00-890bc716bac2";
const S = String.raw;

// figures: a population of 160 (8 rows × 20) — rows 0–1 grade 9, 2–3 grade 10, 4–5 grade 11, 6–7 grade 12; clusters of 4 columns
const GRADE = (i, r) => ["blue", "red", "green", "amber"][Math.floor(r / 2)];
const LEG = [["Gr 9", "blue"], ["Gr 10", "red"], ["Gr 11", "green"], ["Gr 12", "amber"]];
const srsSel = new Set([5, 18, 27, 44, 51, 66, 79, 83, 97, 104, 119, 122, 138, 145, 151, 158]);
const sysSel = new Set(Array.from({ length: 20 }, (_, j) => 3 + 8 * j));
const strSel = new Set([2, 13, 26, 37, 41, 55, 62, 77, 84, 90, 106, 115, 121, 133, 148, 157]);
const cluSel = new Set(Array.from({ length: 160 }, (_, i) => i).filter((i) => Math.floor((i % 20) / 4) === 1 || Math.floor((i % 20) / 4) === 3));

// example: stratified allocation of 80 from 1200
const strata = [["Grade 9", 340], ["Grade 10", 320], ["Grade 11", 290], ["Grade 12", 250]];
const alloc = strata.map(([, k]) => (80 * k) / 1200);

export const blocks = () => [
  intro({
    icon: "🎲",
    title: "Sampling Techniques",
    overview: S`A sample is useful only if it <strong>represents</strong> the population. In a <strong>random</strong> (probability) sample, chance — not the researcher's convenience — decides who is chosen, so every member of the population has a known chance of selection. This lesson compares the main random techniques (simple random, systematic, stratified, cluster, multistage) with non-random ones (convenience, voluntary response) and shows how to choose a technique for a situation.`,
    goals: [
      "describe the sampling frame for a study;",
      "select simple random, systematic, stratified, cluster and multistage samples;",
      "calculate a sampling interval and a proportional stratified allocation;",
      "explain why convenience and voluntary-response samples are not representative;",
      "choose an appropriate technique and justify the choice.",
    ],
    curriculum: "C2.3 (sampling techniques: simple random, systematic, stratified, cluster, multistage, convenience, voluntary); C2.1 (principles of sampling)",
    prior: [
      ["What is a sampling frame?", "The list of the population from which the sample is drawn."],
      ["1200 ÷ 80 = ?", "15."],
      ["80 × 340 ÷ 1200 ≈ ?", "22.7."],
    ],
    words: [
      ["Simple random sample", "every group of n members is equally likely to be chosen", "names drawn by a random number generator"],
      ["Sampling interval k", "N ÷ n for a systematic sample", "k = 1200 ÷ 80 = 15"],
      ["Stratum (strata)", "a group of similar members; sample from every stratum", "each grade in a school"],
      ["Cluster", "a ready-made group; all members of chosen clusters are surveyed", "a homeroom class"],
    ],
  }),

  section("📌 Random sampling techniques", S`
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:8px;">
  ${fig(popGridSvg(8, 20, { u: 15, groupOf: GRADE, selected: srsSel, legend: LEG }), "simple random: any 16 students")}
  ${fig(popGridSvg(8, 20, { u: 15, groupOf: GRADE, selected: sysSel, legend: LEG }), "systematic: 20 students, every 8th from a random start (the 4th)")}
  ${fig(popGridSvg(8, 20, { u: 15, groupOf: GRADE, selected: strSel, legend: LEG }), "stratified: 4 students at random from each grade")}
  ${fig(popGridSvg(8, 20, { u: 15, groupOf: GRADE, selected: cluSel, clusters: 4, pickClusters: new Set(["0,4", "0,12"]), legend: LEG }), "cluster: 2 homerooms chosen at random; everyone in them")}
  </div>
  ${table(["Technique", "How", "Strength / weakness"], [
    ["simple random", "number the frame; pick n numbers at random (no repeats)", "fair; needs a complete list"],
    ["systematic", "k = N/n; random start from 1 to k; then every k-th member", "quick; biased if the list has a repeating pattern"],
    ["stratified", "split into strata; random sample from each, in proportion to its size", "guarantees each group is represented"],
    ["cluster", "choose whole groups at random; survey everyone in them", "cheap; clusters may not be alike"],
    ["multistage", "random choices in stages (schools → classes → students)", "practical for large, spread-out populations"],
    ["destructive", "the item is used up by the measurement", "only a sample is possible"],
  ])}`),

  section("📌 Non-random samples", S`
  ${table(["Technique", "Why it is biased"], [["convenience", "the easiest people to reach (friends, people at the mall) are unlikely to be typical"], ["voluntary response", "only people who choose to reply — often those with strong opinions"], ["quota (without random choice)", "the interviewer picks people to fill each group, so personal choice decides who is included"]])}
  ${keyIdea(S`Random selection protects against bias from the researcher's choices. Stratifying also reduces the variability between samples when the strata differ from one another.`)}`),

  section("📌 Explore", S`<p>The school below has 200 students. Try each method, press “new sample”, and compare the grade mix and the estimate with the population. Notice which methods are consistently wrong.</p>`),

  widget("schoolSampling", { init: "srs" }),

  section("📌 Watch out", watchOut([
    "Random does not mean haphazard: use a random number generator, not “whoever comes along”.",
    "In a systematic sample the start must be random (between 1 and k).",
    "Stratified: sample from every group. Cluster: survey every member of a few groups.",
    "Round stratum sizes sensibly and check that they add up to the sample size.",
  ])),

  examples([
    ["Systematic sample", "A school list has 960 students. A systematic sample of 40 is needed, and the random start is 7. Find the sampling interval and the first five students chosen.",
      [S`\(k=\frac{960}{40}=24\).`, S`Start at 7 and add 24 each time: 7, 31, 55, 79, 103, …`],
      "k = 24; 7, 31, 55, 79, 103"],
    ["Stratified allocation", "A school of 1200 students has 340 in grade 9, 320 in grade 10, 290 in grade 11 and 250 in grade 12. Find the number to choose from each grade for a proportional stratified sample of 80.",
      [S`Sampling fraction \(\frac{80}{1200}=\frac{1}{15}\).`, ...strata.map(([g, k], i) => S`${g}: \(\frac{${k}}{15}\approx${alloc[i].toFixed(2)}\)`), S`Rounded: 23, 21, 19, 17 (total 80).`],
      "23, 21, 19 and 17",
      fig(tableSvg([["grade", "students", "share", "in sample"], ...strata.map(([g, k], i) => [g, k, `${((100 * k) / 1200).toFixed(1)}%`, Math.round(alloc[i])]), ["total", 1200, "100%", 80]]))],
    ["Simple random with random numbers", "Members of a club are numbered 001 to 500. Use the random digits 382 917 045 382 211 498 to choose a simple random sample of 4.",
      [S`Read three digits at a time.`, S`382 ✓, 917 (greater than 500: skip), 045 ✓, 382 (repeat: skip), 211 ✓, 498 ✓.`],
      "members 382, 045, 211 and 498"],
    ["Name the technique", "(a) A district picks 5 of its 32 schools at random and surveys every teacher in them. (b) It then picks 5 schools, 3 classes in each, and 4 students in each class, all at random. (c) A radio station asks listeners to phone in their opinion.",
      [S`(a) Cluster sample: whole schools.`, S`(b) Multistage sample: random choice at three levels; \(5\times3\times4=60\) students.`, S`(c) Voluntary response: not random.`],
      "cluster; multistage (60 students); voluntary response"],
    ["Choosing a technique", "A city wants the opinions of residents about a new transit line. Opinions are likely to differ between the four city wards. Which technique should it use, and why?",
      [S`Opinions differ by ward, so every ward must be represented in the right proportion.`, S`Use a stratified sample with the wards as strata and a simple random sample within each ward.`],
      "a stratified random sample by ward"],
  ]),

  practice([
    q("k", "A systematic sample of 30 is taken from a list of 750. What is the sampling interval k?", num(25), "N ÷ n.", [S`\(\frac{750}{30}=25\).`], "25"),
    q("k-th", "With k = 25 and random start 12, which list position is the 8th member of the sample?", num(187), "12 + 7k.", [S`\(12+7(25)=187\).`], "187"),
    q("strat", "A company has 450 office staff and 1350 factory staff. In a proportional stratified sample of 120, how many factory staff are chosen?", num(90), "1350/1800 of 120.", [S`\(120\times\frac{1350}{1800}=90\).`], "90"),
    q("name", "Choosing 6 of 40 apartment buildings at random and surveying every household in them is…", choice(["a cluster sample", "a stratified sample", "a systematic sample", "a convenience sample"], 0), "Whole groups.", ["Every member of the chosen clusters."], "a cluster sample"),
    q("bias", "A reporter interviews the first 50 people leaving a hockey arena about a new sports tax. The sample is…", choice(["a convenience sample, probably biased", "a simple random sample", "a stratified sample", "a census"], 0), "Who is easy to reach?", ["Hockey fans are not typical of all voters."], "a convenience sample, probably biased"),
  ]),

  ...hard([
    ["Working backwards from a stratum", "In a proportional stratified sample of a school, 18 of the 270 grade 12 students were chosen. The school has 1500 students. (a) Find the total sample size. (b) The grade 9 stratum has 420 students. How many were chosen from it?",
      [S`Sampling fraction \(\frac{18}{270}=\frac{1}{15}\).`, S`(a) \(\frac{1500}{15}=100\).`, S`(b) \(\frac{420}{15}=28\).`],
      "(a) 100; (b) 28"],
    ["When systematic sampling fails", "A street has 200 houses numbered in order, and every 10th house (numbers 10, 20, 30, …) is a large corner house. A survey of home heating costs uses a systematic sample with k = 10. Explain the danger and suggest a fix.",
      [S`With \(k=10\) the sample contains either every corner house (start 10) or none of them (any other start).`, S`The estimate of heating costs would be far too high or too low: the list's pattern matches the interval.`, S`Use a simple random sample, or a stratified sample with corner and non-corner houses as strata.`],
      "the interval matches the pattern; use random or stratified sampling",
      fig(popGridSvg(2, 20, { groupOf: (i) => ((i + 1) % 10 === 0 ? "red" : "blue"), selected: new Set([9, 19, 29, 39]), legend: [["corner house", "red"], ["other house", "blue"]] }), "start 10, k = 10: every chosen house is a corner house")],
  ], [
    q("hard", "How many different simple random samples of 3 can be chosen from 10 people?", num(C(10, 3)), "Combinations.", [S`\(\binom{10}{3}=120\).`], "120"),
    q("hard", "How many different systematic samples of 40 are possible from a list of 600 (start chosen from 1 to k)?", num(15), "One sample per start.", [S`\(k=\frac{600}{40}=15\).`], "15"),
    q("hard", "In a simple random sample of 40 from 800 students, what is the probability that a particular student is chosen?", num(0.05), "n/N.", [S`\(\frac{40}{800}=0.05\).`], "0.05"),
  ]),

  wrapUp({
    qas: [
      ["What makes a sample random?", "Chance decides who is chosen, and every member has a known chance of selection."],
      ["How do I find the interval for a systematic sample?", "k = N ÷ n, with a random start between 1 and k."],
      ["What is the difference between strata and clusters?", "Sample from every stratum; survey all of a few randomly chosen clusters."],
      ["When is a stratified sample best?", "When the groups differ and each must be represented in proportion."],
      ["Why avoid voluntary-response samples?", "People with strong opinions are more likely to reply, so the results are biased."],
    ],
    summary: [
      "Random: simple random, systematic, stratified, cluster, multistage.",
      "Non-random: convenience, voluntary response — usually biased.",
      "Systematic k = N/n; stratified n_i = n × N_i/N.",
      "Choose the method that represents the population at a reasonable cost.",
    ],
    next: "5.3 looks at bias — ways in which a study can give systematically wrong answers — and how to design good surveys and experiments.",
  }),
];
