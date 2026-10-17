// Worksheet 6.1 — Big Data & Its Implications (teacher edition)
import { barT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Census or sample?", q: "Decide whether a census or a sample is better: (a) the average mass of apples in a 10 000-apple harvest; (b) the number of students in your class who own a bike; (c) how long a brand of battery lasts.",
    steps: ["(a) Sample: weighing every apple is slow and unnecessary.", "(b) Census: the class is small, so ask everyone.", "(c) Sample: testing destroys the battery, so a census is impossible."], ans: "sample; census; sample" },
  { title: "Classifying variables", q: "A sports survey records: favourite team, number of games watched last month, height, jersey number. Classify each variable.",
    steps: ["Favourite team: categorical.", "Games watched: numerical, discrete (a count).", "Height: numerical, continuous (measured).", "Jersey number: categorical — the digits are a label."], ans: "categorical, discrete, continuous, categorical" },
  { title: "Designing a stratified sample", q: String.raw`A school has $320$ Grade 9s, $280$ Grade 10s, $250$ Grade 11s and $150$ Grade 12s. Plan a stratified sample of $80$ students.`,
    steps: [String.raw`Total $=1000$; the sample is $\frac{80}{1000}=8\%$ of each grade.`, String.raw`Grade 9: $0.08\times320=25.6\approx26$; Grade 10: $22.4\approx22$; Grade 11: $20$; Grade 12: $12$.`, String.raw`Check: $26+22+20+12=80$. Choose students randomly within each grade.`], ans: "26, 22, 20 and 12 students, chosen randomly within each grade" },
  { title: "Systematic sampling", q: String.raw`A store wants to survey $50$ of the $1500$ customers who visit on Saturday. Describe a systematic sample.`,
    steps: [String.raw`Interval $k=1500\div50=30$.`, String.raw`Pick a random start between $1$ and $30$ (say $17$), then survey customers $17, 47, 77,\dots$`], ans: "every 30th customer from a random start" },
  { title: "Identifying bias", q: "A city council wants opinions on a new bike lane. It surveys people at a downtown bicycle shop. Identify the type of bias and its likely effect.",
    steps: ["Sampling bias: cyclists are over-represented.", "Likely effect: support for the bike lane is overestimated.", "Fix: random sample of residents from the voter list or postal codes."], ans: "sampling bias; overestimates support" },
  { title: "Leading and loaded questions", q: String.raw`Explain the bias in “Should the city waste money on a new arena?” and rewrite it.`,
    steps: ["The word “waste” pushes people to say no: response bias.", "Neutral: “Do you support or oppose building a new arena? (support / oppose / unsure)”"], ans: "loaded wording; ask neutrally with all options" },
  { title: "Estimating a total", q: String.raw`Of $120$ randomly chosen households in a town of $4500$ households, $27$ have an electric vehicle. Estimate the number of households in the town with an EV, and give one reason the estimate might be off.`,
    steps: [String.raw`$\frac{27}{120}=0.225$; $0.225\times4500=1012.5\approx1013$.`, "Random samples vary: a different sample could give 24 or 30. Larger samples reduce this variation."], ans: "about 1013 households" },
  { title: "A misleading graph", q: String.raw`A bar graph of two candidates' votes has an axis starting at $4000$: A has $4300$ and B has $4900$. How many times as tall does B's bar look, and what is the real ratio?`,
    fig: barT({ bars: [["A", 4300], ["B", 4900]], base: 4000, top: 5000, step: 200, ylabel: "votes" }, 5),
    steps: [String.raw`Visible heights $300$ and $900$: B looks $3$ times as tall.`, String.raw`Real ratio $4900\div4300\approx1.14$.`], ans: "looks 3 times; really about 1.14 times" },
  { title: "Big data trade-offs", q: "A city uses anonymized transit-card data to redesign bus routes. Describe one benefit and two concerns.",
    steps: ["Benefit: routes match where people actually travel, saving time and fuel.", "Concern 1: trips from home to work can identify individuals even without names.", "Concern 2: people without transit cards (cash riders, often lower-income) are missing, so their needs may be ignored."], ans: "better routes; privacy and representativeness concerns" },
];

const PROBLEMS = [
  { level: 1, q: "Classify each as categorical, discrete or continuous: (a) the mass of a backpack; (b) the number of texts sent today; (c) favourite subject; (d) time to run 1 km.", recap: "Classify four variables.", ans: "(a) continuous (b) discrete (c) categorical (d) continuous" },
  { level: 1, q: "Name the sampling method: (a) picking names from a hat; (b) surveying every 10th person entering a mall; (c) asking friends at lunch; (d) randomly choosing 5 students from each homeroom.", recap: "Name four sampling methods.", ans: "(a) simple random (b) systematic (c) convenience (d) stratified" },
  { level: 1, q: String.raw`In a random sample of $40$ students, $14$ play an instrument. What percent is that? Estimate the number of players in a school of $900$.`, recap: "14 of 40; school of 900.", ans: String.raw`$35\%$; $315$ students` },
  { level: 2, q: "A magazine asks readers to mail in their opinion about a new law. Identify the method, the type of bias and how it might affect results.", recap: "Magazine mail-in survey.", ans: "voluntary response; people with strong opinions reply; results not representative" },
  { level: 2, q: String.raw`Rewrite to remove bias: “Most doctors agree that sugary drinks are harmful. Do you think they should be taxed?”`, recap: "Rewrite a leading question.", ans: "e.g. “Do you support or oppose a tax on sugary drinks?” (no lead-in statement)" },
  { level: 2, q: String.raw`A school has $600$ students in Grade 9 and $400$ in Grade 10. Plan a stratified sample of $50$.`, recap: "Stratified sample of 50.", ans: "30 from Grade 9 and 20 from Grade 10, chosen randomly" },
  { level: 2, q: String.raw`A graph's vertical axis starts at $70$. Bars show $75$ and $95$. How many times as tall does the second bar look? What is the actual ratio?`, recap: "Axis from 70: bars 75 and 95.", ans: String.raw`$5$ times; $\approx1.27$ times` },
  { level: 2, q: "Explain why a census of every fish in a lake is impractical, and describe how biologists might estimate the population instead.", recap: "Counting fish.", ans: "too many and they move; capture–tag–recapture sample: tag some, later sample and use the proportion tagged" },
  { level: 3, space: 5, q: String.raw`Biologists catch and tag $60$ fish in a lake and release them. A week later they catch $80$ fish, of which $12$ are tagged.
(a) Estimate the number of fish in the lake.
(b) State two assumptions behind the estimate.`, recap: "Capture–recapture.", ans: String.raw`(a) $\frac{12}{80}=\frac{60}{N}$, $N=400$ (b) tagged fish mix evenly; no fish are born, die or leave in the week; tags are not lost` },
  { level: 3, space: 5, q: "A streaming service recommends shows based on what similar users watched. Describe (a) the data it collects, (b) one benefit for users, (c) one way the system could be unfair or biased.", recap: "Recommendation systems.", ans: "(a) viewing history, ratings, time watched, device (b) easier to find shows you like (c) popular shows get promoted more; groups with fewer users get poor recommendations; past bias repeats" },
  { level: 3, space: 5, q: String.raw`Two polls ask about a later school start. Poll A: $1200$ online volunteers, $78\%$ in favour. Poll B: $150$ randomly chosen students, $58\%$ in favour. Which result is more trustworthy? Explain.`, recap: "Large voluntary vs small random poll.", ans: "Poll B: random sampling avoids bias; Poll A is larger but voluntary, so it over-represents keen supporters" },
  { level: 3, space: 5, q: "Design a survey to find out how much time Grade 9 students in your school spend on homework each week. Describe the population, sampling method, sample size, question wording and one possible source of bias.", recap: "Design a homework survey.", ans: "answers vary: population = all Grade 9s; stratified random by homeroom; about 50–80 students; neutral numeric question with units; bias: students may underreport or overreport" },
  { level: 3, space: 5, q: "Find (or describe) a graph in the media that could mislead. Explain the problem and redraw it fairly.", recap: "Fix a misleading graph.", ans: "answers vary: truncated axis, uneven scale, 3-D or picture distortion, missing data; redraw with axis at zero and even scale" },
];

export const WS = {
  code: "6.1",
  title: "Big Data & Its Implications",
  bigideas: String.raw`Good decisions need good data. Data can be categorical or numerical (discrete counts or continuous measurements). Because a census is often impractical, we study samples — and the way a sample is chosen matters more than its size. Random, systematic and stratified samples are fair; convenience and voluntary samples are usually biased. Big data (huge, fast, varied) gives powerful insights but raises questions of privacy, consent and fairness, and every graph should be checked for honest scales.`,
  goals: ["Classify data and variables.", "Describe and choose sampling methods.", "Identify and reduce bias.", "Estimate population values from samples.", "Discuss the implications of big data.", "Recognize misleading graphs."],
  curriculum: "D1.1, D1.2",
  vocab: [["Population / sample", "the whole group / the part studied"], ["Census", "data from the entire population"], ["Bias", "a systematic lean in results"], ["Stratified sample", "random samples from each group, in proportion"], ["Big data", "data sets of great volume, velocity and variety"]],
  hook: String.raw`Show two headlines about the same issue: “85\% of voters want change!” (an online poll) and “52\% support change” (a random phone survey). Ask: “Which do you believe, and why are they so different?”`,
  concepts: [
    ["1. Types of data", String.raw`Categorical (labels) vs numerical; numerical data are discrete (counts) or continuous (measurements). Primary data are collected by you; secondary data by others.`],
    ["2. Sampling", String.raw`Simple random, systematic (every $k$-th), stratified (random within groups, in proportion), convenience, voluntary response. Estimate: $\frac{\text{part in sample}}{\text{sample size}}\approx\frac{\text{part in population}}{\text{population size}}$.`],
    ["3. Bias and misleading graphs", String.raw`Sampling, response, non-response and measurement bias. Truncated axes, uneven scales and distorted pictures exaggerate differences.
${barT({ bars: [["2023", 61], ["2024", 64]], base: 60, top: 65, step: 1, ylabel: "%" }, 4.4, "A 3-point change looks huge when the axis starts at 60.")}`],
  ],
  tips: ["Students confuse “random” with “haphazard”: random means equal chance by a process.", "Postal codes and jersey numbers are categorical.", "Stress that a large biased sample is still biased.", "Have students rewrite real survey questions.", "Connect big data to their own phones and apps."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
