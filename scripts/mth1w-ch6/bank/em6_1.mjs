// 6.1 Big Data & Its Implications — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc } from "./fig.mjs";

export const E = [
  mc(`The number of goals a team scores in a game is…`, "discrete numerical data", ["continuous numerical data", "categorical data", "not data"], "Goals are counted."),
  mc(`A person's favourite music genre is…`, "categorical data", ["discrete numerical data", "continuous numerical data", "a sample"], "It is a label."),
  mc(`The time it takes to run 100 m is…`, "continuous numerical data", ["discrete numerical data", "categorical data", "a population"], "Time is measured."),
  mc(`The whole group you want to learn about is called the…`, "population", ["sample", "census", "variable"], "The sample is the part you study."),
  mc(`Collecting data from every member of the population is a…`, "census", ["sample", "survey question", "bias"], "Everyone is included."),
  tf(`In a simple random sample, every member of the population has the same chance of being chosen.`, true, "That is the definition."),
  mc(`Choosing every 20th name on a list after a random start is…`, "systematic sampling", ["simple random sampling", "stratified sampling", "convenience sampling"], "Fixed interval."),
  mc(`Asking the first people you meet in the hallway is…`, "convenience sampling", ["systematic sampling", "stratified sampling", "a census"], "Easy to reach, not random."),
  mc(`People choose whether to answer an online poll. This is…`, "voluntary response sampling", ["stratified sampling", "simple random sampling", "systematic sampling"], "Self-selected."),
  tf(`A larger sample always removes bias.`, false, "A biased method stays biased at any size."),
  num(`In a random sample of 50 students, 20 own a pet. What percent is that?`, 40, "20 ÷ 50 = 0.4."),
  num(`If 40% of a school's 800 students own a pet, how many is that?`, 320, "0.4 × 800."),
  mc(`A survey question that pushes people toward an answer causes…`, "response bias", ["sampling bias", "measurement bias", "no bias"], "The wording leads the answer."),
  tf(`A postal code is numerical data.`, false, "It is a label: categorical."),
  mc(`Which is an example of big data?`, "millions of transit card taps recorded every day", ["your class's test marks", "a list of 10 friends' birthdays", "one weather reading"], "Huge volume, arriving constantly."),
  mc(`Data you collect yourself is called…`, "primary data", ["secondary data", "big data", "biased data"], "Secondary data comes from others."),
  tf(`A bar graph whose vertical axis does not start at zero can exaggerate differences.`, true, "Truncated axes make small differences look large."),
  mc(`Which is a privacy concern with big data?`, "people can be identified from combined details", ["the data are too small", "graphs are too colourful", "numbers are rounded"], "Combining location, age and school can identify someone."),
  num(`A school has 4 grades with 150 students each. A stratified sample of 40 takes how many students from each grade?`, 10, "Equal grades: 40 ÷ 4."),
  mc(`A scale that always reads 0.5 kg too heavy causes…`, "measurement bias", ["sampling bias", "response bias", "voluntary bias"], "The tool is faulty."),
];

export const M = [
  num(`A random sample of 120 voters finds 66 support a proposal. Estimate the number of supporters among 45 000 voters.`, 24750, "66/120 = 0.55; 0.55 × 45 000."),
  num(`A school has 360 Grade 9s and 240 Grade 10s. In a stratified sample of 50, how many Grade 9s should be chosen?`, 30, "360/600 = 0.6; 0.6 × 50."),
  num(`To survey 40 of 1000 customers systematically, every how-many-th customer should be chosen?`, 25, "1000 ÷ 40."),
  ms(`Which sampling methods are generally fair (unbiased)? Select all.`, ["simple random", "systematic (list without a pattern)", "stratified random", "convenience"], [0, 1, 2], "Convenience samples are usually biased."),
  mc(`A survey of gym members about how much people in the city exercise is biased because…`, "gym members exercise more than the average person", ["the sample is random", "the question is neutral", "gyms are large"], "Sampling bias."),
  mc(`“Don't you agree that homework is too long?” is a problem because it…`, "suggests the answer", ["is too short", "uses numbers", "is anonymous"], "A leading question."),
  num(`A graph's axis starts at 50. Bar A reaches 55 and bar B reaches 70. How many times as tall does bar B look?`, 4, "Visible heights 20 and 5.", barChartDoc({ bars: [["A", 55], ["B", 70]], base: 50, top: 72, step: 5 })),
  num(`For that graph (A = 55, B = 70), what is the actual ratio B ÷ A, to 2 decimal places?`, 1.27, "70 ÷ 55 ≈ 1.27.", null, 0.006),
  tf(`Non-response bias can occur when many people chosen for a survey do not answer.`, true, "Those who respond may differ from those who don't."),
  mc(`Testing every light bulb from a factory to find the average lifetime is a poor idea because…`, "testing destroys the bulbs", ["bulbs are categorical", "a census is always biased", "the average cannot be found"], "Destructive testing requires a sample."),
  num(`A survey finds 18 of 75 sampled students are left-handed. What percent is that?`, 24, "18 ÷ 75 = 0.24."),
  mc(`The three V's of big data are…`, "volume, velocity, variety", ["value, vote, view", "variable, vertex, volume", "velocity, vision, vector"], "Size, speed and different types."),
  mc(`Which question is the most neutral?`, "Which do you prefer: a later or an earlier start time?", ["Wouldn't a later start be better?", "Do you agree an early start is bad for health?", "Why do you hate early mornings?"], "Offers options without leading."),
  ms(`Which are continuous data? Select all.`, ["the length of a song", "the number of songs on a playlist", "the mass of a parcel", "a parcel's postal code"], [0, 2], "Measurements are continuous."),
  num(`A stratified sample of 60 is taken from regions with 2000, 3000 and 1000 people. How many come from the region of 3000?`, 30, "3000/6000 = 0.5."),
  tf(`Anonymous surveys can reduce response bias on sensitive questions.`, true, "People answer more honestly when not identified."),
  mc(`An algorithm trained on past hiring data may be unfair because…`, "past decisions may have been biased", ["computers cannot use data", "data sets are always small", "algorithms ignore data"], "Bias in the data can be repeated."),
  num(`A random sample of 200 phones from a production run of 25 000 finds 3 defective. Estimate the number of defective phones in the run.`, 375, "3/200 = 0.015; × 25 000."),
  mc(`A call-in radio poll gets 2000 calls with 80% against a new law. Is this convincing?`, "no — voluntary response is biased", ["yes — 2000 is a large sample", "yes — 80% is a clear majority", "no — 2000 is too few people"], "Size cannot fix a biased method."),
  mc(`Which is secondary data?`, "population figures downloaded from Statistics Canada", ["a survey you give your class", "temperatures you measure each morning", "your own experiment's results"], "Collected by someone else."),
];
