// MDM4U 5.1 — Types of Data & Statistical Studies: why data vary, population / sample / census, kinds of variables
// (categorical nominal and ordinal, numerical discrete and continuous), primary and secondary data, microdata and
// aggregate data, observational studies and experiments, cross-sectional and longitudinal studies
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, popGridSvg, boxTreeSvg, tableSvg, barsSvg } from "./lib.mjs";

export const TITLE = "5.1 Types of Data & Statistical Studies";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00501";
const S = String.raw;

const kinds = [
  { t: "categorical", color: "green", c: [{ t: "nominal", color: "green", c: [{ t: "e.g. eye colour", color: "gray" }] }, { t: "ordinal", color: "green", c: [{ t: "e.g. rating 1–5 stars", color: "gray" }] }] },
  { t: "numerical", color: "blue", c: [{ t: "discrete", color: "blue", c: [{ t: "e.g. number of pets", color: "gray" }] }, { t: "continuous", color: "blue", c: [{ t: "e.g. height", color: "gray" }] }] },
];

export const blocks = () => [
  intro({
    icon: "🗃️",
    title: "Types of Data & Statistical Studies",
    overview: S`Statistics is the science of collecting, organizing and interpreting data. Before any calculation, a statistician asks: <strong>who</strong> are we studying (the population), <strong>whom</strong> do we actually measure (a sample or a census), <strong>what kind</strong> of variable is recorded, and <strong>how</strong> the data are obtained (by observing, or by running an experiment). These choices decide which graphs and summaries make sense, and which conclusions are justified.`,
    goals: [
      "explain why data vary and why we collect data;",
      "identify the population, the sample and the variable in a study;",
      "classify variables as categorical (nominal, ordinal) or numerical (discrete, continuous);",
      "distinguish primary from secondary data and microdata from aggregate data;",
      "distinguish observational studies from experiments, and cross-sectional from longitudinal studies.",
    ],
    curriculum: "C1.1–C1.3 (the role of data, variability, types of data); C2.1–C2.2 (populations and samples, primary and secondary data)",
    prior: [
      ["Is 'number of siblings' counted or measured?", "Counted."],
      ["What percent of 800 is 60?", "7.5%."],
      ["Name one reason a survey cannot ask every Canadian.", "Cost, time or practicality."],
    ],
    words: [
      ["Population", "every individual of interest", "all Ontario high-school students"],
      ["Sample", "the part of the population actually studied", "600 students chosen at random"],
      ["Census", "data from every member of the population", "the national census of households"],
      ["Variable", "a characteristic that changes from one individual to another", "hours of sleep"],
    ],
  }),

  section("📌 Population, sample, census", S`
  <p>A <strong>population</strong> is the whole group we want to learn about. Collecting data from all of it is a <strong>census</strong>. Usually that is too costly, too slow, impossible (the population is too large or keeps changing) or destructive (testing how long a battery lasts uses it up), so we study a <strong>sample</strong> and use it to estimate a population value. The list from which the sample is drawn is the <strong>sampling frame</strong>.</p>
  ${fig(popGridSvg(6, 20, { selected: new Set([2, 9, 17, 26, 33, 41, 48, 55, 63, 70, 78, 86, 95, 101, 108, 116]), legend: [["population (120 people)", "blue"]] }), "a sample (large dots) chosen from a population")}
  ${keyIdea(S`Data <strong>vary</strong>: different individuals give different values, and different samples give different results. Statistics describes that variability and draws conclusions in spite of it.`)}`),

  section("📌 Kinds of variables", S`
  ${fig(boxTreeSvg(kinds, { root: "variable" }), "categorical variables are labels; numerical variables are counted or measured")}
  ${table(["Kind", "Meaning", "Examples"], [["nominal", "categories with no order", "province, favourite sport, blood type"], ["ordinal", "categories with a natural order", "T-shirt size, a satisfaction scale"], ["discrete", "counted: separate values", "number of cars in a household"], ["continuous", "measured: any value in an interval", "mass, time, temperature"]])}
  <p>Numbers are not always numerical data: a jersey number or a postal code is a <em>label</em> (nominal).</p>`),

  section("📌 Where the data come from", S`
  ${table(["Term", "Meaning"], [["primary data", "collected by the researcher for this study (your own survey or measurements)"], ["secondary data", "collected by someone else (a government statistics agency, a published table)"], ["microdata", "one record per individual"], ["aggregate data", "summaries of many records (totals, averages, percents)"]])}
  ${table(["Type of study", "What happens"], [["observational study", "the researcher records what already happens — nothing is imposed"], ["experiment", "the researcher imposes a treatment, ideally assigning it at random"], ["cross-sectional", "data from many individuals at one point in time"], ["longitudinal", "the same individuals followed over a period of time"]])}
  ${keyIdea(S`Only a well-designed experiment can show that one variable <em>causes</em> a change in another. An observational study shows an association, which could be due to a hidden (confounding) variable.`)}`),

  section("📌 Explore", S`<p>Classify each variable, then switch to the study mode and decide whether each design is an experiment or an observational study.</p>`),

  widget("dataTypes", { init: "variable" }),

  section("📌 Watch out", watchOut([
    "The population is the whole group of interest, not the people who happened to answer.",
    "A census is not automatically better: it is expensive and can be slower than a careful sample.",
    "Numbers used as labels (room numbers, phone numbers) are categorical.",
    "Association in an observational study is not proof of cause and effect.",
  ])),

  examples([
    ["Population and sample", "A city council mails a recycling survey to 600 randomly chosen households out of 48 000 households in the city. Identify the population, the sample and the variable.",
      [S`Population: all 48 000 households in the city.`, S`Sample: the 600 households that receive the survey.`, S`Variable: each household's recycling habits (for example, how often it recycles).`],
      "population 48 000 households; sample 600; variable recycling habits"],
    ["Classifying variables", "A student record lists: grade level (9, 10, 11 or 12), hours of sleep last night, number of courses taken and first language. Classify each variable.",
      [S`Grade level: ordinal categories (they have an order, and are used as groups).`, S`Hours of sleep: continuous (measured).`, S`Number of courses: discrete (counted).`, S`First language: nominal.`],
      "ordinal, continuous, discrete, nominal"],
    ["Census or sample?", "Decide whether a census or a sample is appropriate: (a) the lifetime of the light bulbs made in a factory this week; (b) the shoe sizes of the 14 players on a basketball team; (c) the opinions of all Canadian voters about a new law.",
      [S`(a) Sample: testing a bulb's lifetime destroys it.`, S`(b) Census: the population is small and easy to reach.`, S`(c) Sample: a census of millions of voters is too costly and slow.`],
      "sample, census, sample"],
    ["Experiment or observation", "(a) Researchers compare the reading scores of students who own e-readers with those who do not. (b) Researchers randomly give half of 60 volunteers a caffeine drink and half a decaffeinated drink, then time a reaction test. Classify each study.",
      [S`(a) Nothing is imposed; ownership already exists: an observational study.`, S`(b) A treatment is assigned at random: an experiment (with a control group).`],
      "(a) observational; (b) experiment"],
    ["Primary or secondary", "A student downloads a table of the average weekly earnings in each province from a national statistics agency, then surveys 50 classmates about their part-time jobs. Classify each data set.",
      [S`The table: secondary data (collected by the agency) and aggregate (averages).`, S`The survey: primary data (collected by the student) and microdata (one response per student).`],
      "table: secondary, aggregate; survey: primary, microdata",
      fig(tableSvg([["province", "average weekly earnings"], ["Ontario", "$1240"], ["Quebec", "$1150"], ["Alberta", "$1330"]]), "an aggregate table (illustrative values)")],
  ]),

  practice([
    q("population", "A gym surveys 120 of its 2400 members about opening hours. The population is…", choice(["the 2400 members", "the 120 members surveyed", "everyone in the city", "the opening hours"], 0), "Whom does the gym want to learn about?", ["All members."], "the 2400 members"),
    q("percent", "What percent of the 2400 members were surveyed?", num(5), "120/2400.", [S`\(\frac{120}{2400}=0.05\).`], "5"),
    q("type", "The time it takes to finish a 5 km run is…", choice(["continuous", "discrete", "nominal", "ordinal"], 0), "Is it counted or measured?", ["Measured."], "continuous"),
    q("type2", "A restaurant rating of 1, 2, 3, 4 or 5 stars is best described as…", choice(["ordinal", "continuous", "nominal", "discrete and continuous"], 0), "Ordered categories.", ["Order matters, but the gaps are not measured."], "ordinal"),
    q("study", "Following the same 300 children from age 5 to age 15 and recording their screen time is…", choice(["a longitudinal observational study", "a cross-sectional experiment", "a census", "a longitudinal experiment"], 0), "Same people, over time, nothing imposed.", ["Longitudinal and observational."], "a longitudinal observational study"),
  ]),

  ...hard([
    ["Association is not causation", "A survey of 2000 students finds that those who eat breakfast every day have higher average marks. A newspaper headline says: “Breakfast raises marks.” (a) What type of study is this? (b) Explain why the headline may be wrong, naming a possible confounding variable. (c) Describe an experiment that could test the claim.",
      [S`(a) An observational (cross-sectional) study: nothing was imposed.`, S`(b) Students who eat breakfast may differ in other ways — for example, more regular sleep or family routines — and that variable could explain the higher marks.`, S`(c) Randomly assign volunteers to a breakfast group and a no-breakfast group for several weeks, keep other conditions alike, and compare the change in marks.`],
      "observational; a confounding variable such as sleep; a randomized experiment",
      fig(barsSvg([74, 68], { labels: ["breakfast", "no breakfast"], top: true, ylabel: "average mark", ymax: 90 }), "an association, not a proof of cause")],
    ["Tricky classifications", "Classify each and justify: (a) a jersey number; (b) age in completed years; (c) the percent of students in each school who pass a test, from a provincial report; (d) a pain scale of 0 to 10.",
      [S`(a) Nominal: the number is a label; arithmetic with it is meaningless.`, S`(b) Discrete as recorded (whole years), although age itself is continuous.`, S`(c) Numerical, continuous-style percentages — and secondary, aggregate data.`, S`(d) Ordinal: the order matters but the difference between 2 and 3 need not equal the difference between 7 and 8.`],
      "nominal; discrete as recorded; aggregate secondary percentages; ordinal"],
  ], [
    q("hard", "A random sample of 240 people is 8% of a population. How large is the population?", num(3000), "0.08 N = 240.", [S`\(N=\frac{240}{0.08}=3000\).`], "3000"),
    q("hard", "A longitudinal study starts with 1200 people and loses 15% of the remaining participants each year. About how many remain after 3 years?", num(737, 1), "1200(0.85)³.", [S`\(1200(0.85)^3\approx736.95\).`], "737"),
    q("hard", "Cities with more fire trucks at a fire have more damage. The most likely explanation is…", choice(["a confounding variable: bigger fires bring more trucks and cause more damage", "fire trucks cause damage", "the data must be wrong", "it is a census"], 0), "What causes both?", ["The size of the fire."], "a confounding variable"),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between a population and a sample?", "The population is everyone of interest; the sample is the part actually measured."],
      ["When is a census sensible?", "When the population is small and easy to reach, and measuring does not destroy anything."],
      ["How do I tell discrete from continuous?", "Discrete values are counted; continuous values are measured."],
      ["Why can't an observational study prove cause and effect?", "A hidden (confounding) variable may cause both."],
      ["What makes data secondary?", "They were collected by someone else, for another purpose."],
    ],
    summary: [
      "Population → sample (or census); the sampling frame is the list sampled from.",
      "Categorical: nominal, ordinal. Numerical: discrete, continuous.",
      "Primary vs secondary; microdata vs aggregate.",
      "Experiment (treatment imposed) vs observational study; cross-sectional vs longitudinal.",
    ],
    next: "5.2 shows how to choose a sample so that it represents the population.",
  }),
];
