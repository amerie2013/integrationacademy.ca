// 6.5 Correlation vs Causation — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, boxTreeSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { linreg } from "../../mdm4u/count.mjs";

const T = ["cause and effect", "common cause", "reverse cause and effect", "accidental", "presence of a confounding variable"];
const cl = (situation, k, why) => mc(`Classify the relationship: ${situation}`, k, T.filter((t) => t !== k).slice(0, 3), why);

export const E = [
  cl("the more a tap is opened, the faster a bucket fills.", "cause and effect", "Direct mechanism."),
  cl("more sunscreen is sold in months when more people swim at beaches.", "common cause", "Hot weather drives both."),
  cl("the number of letters in a city's name and its average rainfall.", "accidental", "No logical link."),
  cl("towns with more doctors have more sick people (claim: doctors cause illness).", "reverse cause and effect", "Sickness attracts doctors."),
  cl("students who choose a new study app score higher, but they also study more hours.", "presence of a confounding variable", "Study hours are mixed with app use."),
  cl("pushing harder on a bicycle's pedals makes it go faster.", "cause and effect", "Mechanism."),
  cl("sales of mittens and of hot chocolate rise together.", "common cause", "Cold weather."),
  cl("in a given year, the number of new bridges built and the number of new pop songs.", "accidental", "Coincidence."),
  mc("Which type of study can establish cause and effect?", "a randomized controlled experiment", ["an observational survey", "a correlation study", "a case study"], "Random assignment."),
  mc("A third variable that causes both x and y is called…", "a common cause", ["a residual", "an outlier", "the response"], "Definition."),
  tf("A strong correlation proves that x causes y.", false, "Not by itself."),
  tf("A correlation can be produced by a hidden variable.", true, "Common cause or confounding."),
  tf("Reverse cause and effect means y actually causes x.", true, "Definition."),
  mc("Ice-cream sales and drownings rise together. The best explanation is…", "hot weather increases both", ["ice cream causes drowning", "drowning increases ice-cream sales", "it must be accidental"], "Common cause."),
  mc("Why does random assignment help show causation?", "it balances other variables between groups", ["it increases r", "it removes the need for a control group", "it makes the sample bigger"], "Controls confounding."),
  mc("A study finds people who own more books are happier. The first question to ask is…", "could another variable, such as income, explain both?", ["how many books are there?", "is r positive?", "is the study longitudinal?"], "Hidden variable."),
  num("In an experiment the treatment group improved by 9 points and the control group by 2. How many points of improvement are attributed to the treatment?", 7, "9 − 2."),
  num("A correlation of r = 0.8 is due to a common cause. What is r²?", 0.64, "0.8².", null, 0.001),
  mc("The chart lists five ways a correlation can arise. Which type is missing?", "reverse cause and effect", ["regression", "residual", "interpolation"], "The five types.", boxTreeSvg([{ t: "cause and effect", color: "green" }, { t: "common cause", color: "blue" }, { t: "?", color: "violet" }, { t: "accidental", color: "amber" }, { t: "confounding variable", color: "red" }], { root: "correlation" })),
  mc("The scatter plot shows that umbrella sales and car accidents rise together. The most likely explanation is…", "rain causes both", ["umbrellas cause accidents", "accidents cause umbrella sales", "pure coincidence"], "Common cause.", scatterSvg([[10, 3], [15, 5], [20, 6], [25, 8], [30, 9], [35, 11]], { xmin: 5, xmax: 40, ymin: 0, ymax: 13, line: linreg([10, 15, 20, 25, 30, 35], [3, 5, 6, 8, 9, 11]), xlabel: "umbrellas sold", ylabel: "accidents" })),
];

export const M = [
  cl("people who sleep more have fewer colds, and sleep strengthens the immune system (confirmed by experiments).", "cause and effect", "Mechanism plus experimental evidence."),
  cl("countries with more cars have longer life expectancy.", "common cause", "Wealth drives both."),
  cl("children with larger shoe sizes have better reading scores.", "common cause", "Age."),
  cl("patients who receive more medicine have worse health (sicker patients get more medicine).", "reverse cause and effect", "Illness causes treatment."),
  cl("employees who attend optional training earn more, but they are also more experienced.", "presence of a confounding variable", "Experience mixes with training."),
  cl("the yearly number of cheese sales and of engineering doctorates both rose from 2000 to 2010.", "accidental", "Two unrelated trends."),
  mc("A school finds students in the band have higher marks. To test whether band causes higher marks, the school should…", "randomly assign volunteers to band or no band and compare marks over time", ["compare current band and non-band students", "survey band students", "calculate r again"], "Experiment."),
  mc("In a double-blind experiment…", "neither subjects nor evaluators know who got the treatment", ["two control groups are used", "subjects choose their group", "the experiment is repeated twice"], "Definition."),
  ms("Which are possible explanations for a correlation between x and y? Select all.", ["x causes y", "y causes x", "a third variable causes both", "coincidence", "the correlation coefficient is too high"], [0, 1, 2, 3], "Four (plus confounding)."),
  ms("Which features make an experiment convincing? Select all.", ["random assignment", "a control group", "a large enough sample", "subjects choosing their treatment", "blinding"], [0, 1, 2, 4], "Self-selection is a flaw."),
  tf("Observational studies can show associations but cannot rule out confounding variables.", true, "No random assignment."),
  tf("If two variables both increase over time, they must be causally related.", false, "Time trends create accidental correlations."),
  mc("A headline says “Students who eat breakfast get better marks — so breakfast makes you smarter.” The main flaw is…", "concluding causation from an observational association", ["using a scatter plot", "reporting r", "the sample was random"], "Correlation ≠ causation."),
  mc("Which variable is a likely confounder in a study linking coffee drinking to heart disease?", "smoking", ["the colour of the cup", "the day of the week", "the researcher's name"], "Smokers may drink more coffee."),
  num("A study shows r = −0.6 between exercise and stress. What percent of the variation in stress is associated with exercise?", 36, "r² = 0.36."),
  num("A treatment group's mean drops from 140 to 128; the placebo group's from 141 to 137. Find the treatment effect beyond the placebo (as a positive number).", 8, "12 − 4.", barsSvg([12, 4], { labels: ["treatment", "placebo"], top: true, ylabel: "mean drop" })),
  mc("Researchers test 100 unrelated pairs of variables. About how many strong correlations might appear by chance, if 3% of unrelated pairs do?", "about 3", ["none", "about 30", "all of them"], "Multiple comparisons."),
  mc("Which design could best test whether a new fertilizer increases yield?", "randomly assign plots to fertilizer or none and compare yields", ["compare farms that already use it", "ask farmers their opinion", "plot yield against rainfall"], "Experiment."),
  mc("The scatter plot shows height and vocabulary for children aged 4–12. The correlation is mainly due to…", "age, a common cause", ["height causing vocabulary", "vocabulary causing height", "measurement error"], "Older children are taller and know more words.", scatterSvg([[105, 2.1], [112, 3.0], [120, 4.2], [128, 5.1], [134, 6.3], [140, 7.2], [148, 8.0]], { xmin: 100, xmax: 152, ymin: 1, ymax: 9, xlabel: "height (cm)", ylabel: "vocabulary (thousand words)" })),
  mc("Which statement is correct?", "causation implies association, but association does not imply causation", ["association implies causation", "neither implies the other in any case", "a high r² proves causation"], "One direction only."),
];
