// MDM4U Worksheet 5.1 — Types of Data & Statistical Studies (teacher edition)
import { svgT, popGridSvg, boxTreeSvg, tableSvg } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Population and sample", q: "A province wants the average number of hours its 140 000 grade 11 students spend on homework. It surveys 2100 grade 11 students chosen at random. Identify the population, the sample and the variable.", steps: ["Population: all 140 000 grade 11 students in the province.", "Sample: the 2100 students surveyed.", "Variable: weekly homework hours."], ans: "140 000 students; 2100 students; homework hours" },
  { title: "Sampling fraction", q: "What fraction and what percent of the population in the previous example were surveyed?", steps: [S`$\frac{2100}{140\,000}=0.015$.`], ans: "0.015, i.e. 1.5 percent" },
  { title: "Nominal or ordinal", q: "Classify: (a) country of birth; (b) level of agreement (strongly disagree to strongly agree); (c) colour of a car; (d) a medal (gold, silver, bronze).", steps: ["Labels without order are nominal; ordered labels are ordinal."], ans: "(a) nominal (b) ordinal (c) nominal (d) ordinal" },
  { title: "Discrete or continuous", q: "Classify: (a) number of goals in a game; (b) length of a phone call; (c) number of students absent; (d) volume of water in a tank.", steps: ["Counted values are discrete; measured values are continuous."], ans: "(a) discrete (b) continuous (c) discrete (d) continuous" },
  { title: "Census or sample", q: "Should a census or a sample be used? (a) the strength of every cable in a new bridge before it opens; (b) the strength of steel bars produced in a mill (testing breaks the bar); (c) the favourite lunch of 22 students in a class.", steps: ["(a) Census: safety requires every cable, and testing need not break it.", "(b) Sample: testing is destructive.", "(c) Census: small and easy to reach."], ans: "census, sample, census" },
  { title: "Primary or secondary", q: "Classify each source: (a) your own count of cars passing the school in an hour; (b) a published table of national unemployment rates; (c) a hospital's records used by an outside researcher.", steps: ["Primary: collected by you for this purpose. Secondary: collected by someone else."], ans: "(a) primary (b) secondary (c) secondary" },
  { title: "Microdata or aggregate", q: "A data file lists, for each of 900 households, the number of people and the yearly energy bill. A report gives the mean bill for each city. Which is microdata and which is aggregate?", steps: ["One row per household: microdata. Summaries for groups: aggregate."], ans: "file: microdata; report: aggregate", fig: svgT(tableSvg([["household", "people", "energy bill"], ["0001", "3", "$2140"], ["0002", "1", "$1260"], ["0003", "5", "$2890"]]), 6.5) },
  { title: "Experiment or observational", q: "Researchers randomly give 40 tomato plants a new plant food and 40 plants water only, then measure the yield. Another team compares the yields of farms that already use the plant food with farms that do not. Classify each study.", steps: ["First: a treatment imposed at random: experiment.", "Second: existing practices recorded: observational."], ans: "experiment; observational study" },
  { title: "Cross-sectional or longitudinal", q: "(a) A survey records the screen time of 3000 people of all ages in one week. (b) A study measures the reading level of the same 250 children every year from grade 1 to grade 8. Classify each.", steps: ["One point in time: cross-sectional. Same individuals over time: longitudinal."], ans: "(a) cross-sectional (b) longitudinal" },
];

const PROBLEMS = [
  { level: 1, q: "A store asks 150 of its 6000 loyalty-card holders to rate its service. Identify the population and the sample.", ans: "population: 6000 card holders; sample: 150 card holders" },
  { level: 1, q: "Classify each variable as nominal, ordinal, discrete or continuous: (a) mass of a newborn; (b) province of residence; (c) number of text messages; (d) movie rating G, PG, 14A, 18A.", ans: "(a) continuous (b) nominal (c) discrete (d) ordinal" },
  { level: 1, q: "Give one reason why a census of every Canadian's daily water use would be impractical.", ans: "too costly, too slow, or impossible to reach everyone" },
  { level: 2, q: "A survey of 360 people is 4.5 percent of a town's adults. How many adults live in the town?", ans: "8000" },
  { level: 2, q: "A study follows 800 graduates for 10 years, and 12 percent drop out each year. About how many remain after 10 years?", ans: `about ${Math.round(800 * 0.88 ** 10)}` },
  { level: 2, q: "A researcher downloads the number of hospital visits per month for each province from a government website. Classify the data as primary or secondary, and as microdata or aggregate.", ans: "secondary, aggregate" },
  { level: 2, q: "Explain why a shoe size (such as 8 or 8.5) is usually treated as discrete even though foot length is continuous.", ans: "only certain listed sizes exist, so the recorded values are separate" },
  { level: 2, q: "The figure shows a population with a sample highlighted. What fraction of the population is in the sample?", fig: svgT(popGridSvg(5, 16, { selected: new Set([2, 9, 14, 21, 27, 35, 40, 46, 53, 60, 66, 75]) }), 6.5), ans: "12 out of 80, which is 0.15" },
  { level: 3, space: 4.5, q: "A study finds that people who own a dog have lower blood pressure than people who do not. (a) Is this an experiment or an observational study? (b) Name a possible confounding variable. (c) Could an experiment test this ethically? Explain.", ans: "(a) observational (b) e.g. daily walking or income (c) assigning dogs at random is difficult; a short-term experiment with walking or visiting dogs could be designed with consent" },
  { level: 3, space: 4.5, q: "Classify each and justify: (a) the number of a hockey player's jersey; (b) a student's age in months; (c) the percent of voters who voted in each riding; (d) a rating from 1 (worst) to 10 (best).", ans: "(a) nominal label (b) discrete as recorded (c) numerical aggregate (secondary) data (d) ordinal" },
  { level: 3, space: 4.5, q: "Design a study to decide whether listening to music while studying affects test scores. State whether it is an experiment or observational, the population, how participants are chosen, and the variable measured.", ans: "e.g. an experiment: volunteers from a school randomly assigned to study with or without music; measure test scores; compare the group means" },
  { level: 3, space: 4.5, q: "The tree shows a classification. Copy it and add two examples of your own under each of the four types.", fig: svgT(boxTreeSvg([{ t: "categorical", color: "green", c: [{ t: "nominal", color: "green" }, { t: "ordinal", color: "green" }] }, { t: "numerical", color: "blue", c: [{ t: "discrete", color: "blue" }, { t: "continuous", color: "blue" }] }], { root: "variable" }), 7), ans: "e.g. nominal: hair colour, sport; ordinal: grade level, size; discrete: siblings, pets; continuous: time, mass" },
  { level: 3, space: 4.5, q: "A city has 52 000 households. A survey of 650 households is planned. (a) What percent of households is that? (b) A second plan surveys every household on 4 randomly chosen streets. Explain one advantage and one disadvantage of the second plan.", ans: "(a) 1.25 percent (b) cheaper and quicker, but households on the same street are similar, so the results may not represent the city" },
];

export const WS = {
  code: "5.1",
  title: "Types of Data & Statistical Studies",
  bigideas: S`A statistical study starts with a question about a population. Because a census is often impractical, a sample is studied instead. Variables are categorical (nominal or ordinal) or numerical (discrete or continuous). Data may be primary or secondary, microdata or aggregate, and come from an experiment (treatment imposed) or an observational study.`,
  goals: ["Identify population, sample and variable.", "Classify variables.", "Classify data sources.", "Classify studies."],
  curriculum: "C1.1, C1.2, C1.3, C2.1, C2.2",
  vocab: [["Population", "all individuals of interest"], ["Sample", "the part actually studied"], ["Census", "data from the whole population"], ["Longitudinal", "the same individuals over time"]],
  hook: "A headline says: “Teens who play sports get better marks.” What would you need to know before believing that sports cause better marks?",
  concepts: [
    ["1. Who is studied", "Population, sample, census, sampling frame."],
    ["2. What is recorded", S`${svgT(boxTreeSvg([{ t: "categorical", color: "green", c: [{ t: "nominal", color: "green" }, { t: "ordinal", color: "green" }] }, { t: "numerical", color: "blue", c: [{ t: "discrete", color: "blue" }, { t: "continuous", color: "blue" }] }], { root: "variable" }), 6.2)}`],
    ["3. How it is collected", "Experiment or observational; cross-sectional or longitudinal; primary or secondary."],
  ],
  tips: ["Name the population precisely.", "Counted means discrete; measured means continuous.", "Numbers used as labels are categorical.", "Only experiments show cause and effect.", "Ask who collected the data and why."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
