// MDM4U Worksheet 6.5 — Correlation vs Causation (teacher edition)
import { svgT, scatterSvg, boxTreeSvg } from "./figT.mjs";
import { corr, linreg } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const heat = [2, 4, 6, 9, 12, 15, 18], hoods = [52, 47, 40, 31, 25, 18, 11]; // weekly hoodie and soup sales (both driven by cold weather)
const soup = [80, 74, 66, 55, 47, 38, 30];

const EXAMPLES = [
  { title: "Cause and effect", q: "The more a car's gas pedal is pressed, the faster it accelerates. Classify the relationship.", steps: ["A direct mechanism links them."], ans: "cause and effect" },
  { title: "Common cause", q: "Weekly sales of hoodies and of soup at a store are strongly correlated. Classify and name the common cause.", fig: svgT(scatterSvg(P(hoods, soup), { xmin: 0, xmax: 60, ymin: 20, ymax: 90, line: linreg(hoods, soup), xlabel: "hoodies sold", ylabel: "soup sold" }), 6), steps: [S`$r\approx${r3(corr(hoods, soup))}$; both rise in cold weather.`], ans: "common cause: temperature" },
  { title: "Reverse cause and effect", q: "Schools with more counsellors report more student stress. Someone concludes counsellors cause stress. Explain the error.", steps: ["Schools with more stressed students hire more counsellors."], ans: "reverse cause and effect" },
  { title: "Accidental", q: "The number of letters in the name of each month's movie hit correlates with that month's rainfall in a city. Classify.", steps: ["No plausible link."], ans: "accidental" },
  { title: "Confounding variable", q: "Patients who choose a new physiotherapy program recover faster. These patients are also younger on average. Classify.", steps: ["Age also affects recovery and goes with choosing the program."], ans: "presence of a confounding variable (age)" },
  { title: "The five types", q: "List the five types of relationship and give a test question for each.", fig: svgT(boxTreeSvg([{ t: "cause and effect", color: "green" }, { t: "common cause", color: "blue" }, { t: "reverse cause and effect", color: "violet" }, { t: "accidental", color: "amber" }, { t: "confounding variable", color: "red" }], { root: "correlation" }), 6.5), steps: ["Mechanism? Third variable? Which came first? Any link? Inseparable effects?"], ans: "see figure" },
  { title: "Designing an experiment", q: "Design an experiment to test whether background music improves typing speed.", steps: ["Randomly assign volunteers to music or silence; same typing test; compare means."], ans: "randomized controlled experiment" },
  { title: "Media claim", q: "A headline says “Coffee drinkers live longer.” Name two questions you would ask before believing that coffee causes long life.", steps: ["Was it an experiment? What other habits differ between coffee drinkers and others?"], ans: "study design; confounding variables (income, diet, health)" },
  { title: "Time trends", q: "From 2010 to 2020, the number of electric cars and the number of yoga studios both increased. r = 0.97. Classify.", steps: ["Both trend upward over time for unrelated reasons."], ans: "accidental (common time trend)" },
];

const PROBLEMS = [
  { level: 1, q: "Classify: the longer a candle burns, the shorter it gets.", ans: "cause and effect" },
  { level: 1, q: "Classify: sales of umbrellas and of rubber boots rise together.", ans: "common cause (rain)" },
  { level: 1, q: "What kind of study is needed to show cause and effect?", ans: "a randomized controlled experiment" },
  { level: 2, q: "Countries with more TVs per person have longer life expectancy. Name a common cause.", ans: "wealth" },
  { level: 2, q: "Students who sit at the front of class get higher marks. Give a reverse cause-and-effect or confounding explanation.", ans: "motivated students choose the front seats" },
  { level: 2, q: "Classify and explain: a city's number of fire hydrants and its number of dog owners.", ans: "common cause (city size)" },
  { level: 2, q: "Explain why random assignment controls confounding variables.", ans: "it spreads other variables evenly between groups" },
  { level: 2, q: "The scatter plot shows two quantities that both rose each year. Is r meaningful as evidence of a link?", fig: svgT(scatterSvg([[10, 2.1], [12, 2.4], [13, 2.6], [15, 2.9], [17, 3.3], [18, 3.4], [20, 3.8]], { xmin: 8, xmax: 22, ymin: 1.5, ymax: 4.2 }), 5), ans: "no — a shared time trend can create a high r" },
  { level: 3, space: 4.5, q: "A study of 5000 people finds those who own a pet visit the doctor less often. (a) Classify the study. (b) Name two confounding variables. (c) Describe how to test the claim that pets improve health.", ans: "(a) observational (b) age, income, activity level (c) randomized experiment (e.g. pet-visit program vs none)" },
  { level: 3, space: 4.5, q: "In an experiment, the treatment group's mean score rose by 12 points and the control group's by 4. The groups were randomly assigned. What can be concluded?", ans: "the treatment caused an improvement of about 8 points (beyond chance, if the difference is significant)" },
  { level: 3, space: 4.5, q: "Explain why reverse cause and effect is a concern in a study linking social media use to low mood.", ans: "people with low mood may use social media more" },
  { level: 3, space: 4.5, q: "Find a news headline claiming cause and effect. Identify the type of study and evaluate the claim.", ans: "answers vary" },
  { level: 3, space: 4.5, q: "A researcher searches 200 pairs of unrelated variables and reports the 5 with |r| > 0.8. Explain why these correlations may be accidental.", ans: "with many comparisons some strong correlations appear by chance" },
];

export const WS = {
  code: "6.5",
  title: "Correlation vs Causation",
  bigideas: S`A correlation can come from cause and effect, a common cause, reverse cause and effect, an accidental relationship, or a confounding variable. Only a controlled experiment with random assignment can establish that $x$ causes $y$.`,
  goals: ["Classify relationships.", "Identify hidden variables.", "Design experiments.", "Evaluate causal claims."],
  curriculum: "D2.4, D2.5",
  vocab: [["Common cause", "a third variable drives both"], ["Reverse cause", "y causes x"], ["Accidental", "coincidence"], ["Confounding", "inseparable effects of two variables"]],
  hook: "People who carry lighters are more likely to get lung disease. Do lighters cause lung disease?",
  concepts: [
    ["1. Five types", "Cause and effect, common cause, reverse, accidental, confounding."],
    ["2. Questions to ask", "Mechanism? Third variable? Direction? Link? Separable?"],
    ["3. Proof", "A randomized controlled experiment."],
  ],
  tips: ["Never conclude causation from r alone.", "Name the third variable.", "Ask which came first.", "Watch for time trends.", "Look for experiments."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
