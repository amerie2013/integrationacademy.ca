// 6.5 Correlation vs Causation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, tableSvg, barsSvg, boxTreeSvg } from "../../mdm4u/figs.mjs";
import { corr, linreg } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const yr = [1, 2, 3, 4, 5, 6, 7, 8], a = [21, 24, 26, 30, 31, 35, 38, 40], b = [140, 151, 158, 170, 176, 188, 196, 205];

export const TOPIC = "6.5 Correlation vs Causation";
export const Q = [
  num(`Two series rose each year: A: ${a.join(", ")}; B: ${b.join(", ")}. Find r between A and B (3 decimals).`, r3(corr(a, b)), "Technology.", scatterSvg(a.map((x, i) => [x, b[i]]), { xmin: 18, xmax: 42, ymin: 130, ymax: 215, line: linreg(a, b), xlabel: "series A", ylabel: "series B" }), 0.002),
  mc(`Series A: ${a.join(", ")} and B: ${b.join(", ")} are the number of hybrid cars sold and the number of pizza shops in a city over 8 years. The high r is best explained by…`, "a shared time trend (both grow with the city)", ["hybrid cars cause pizza shops", "pizza shops cause hybrid sales", "measurement error"], "Common cause: time/population."),
  num("An experiment: treatment mean change −11 mmHg (n = 50), placebo −3 mmHg (n = 50). Find the effect attributable to the treatment (as a positive number).", 8, "11 − 3."),
  mc("In the experiment above, why is a placebo group needed?", "to separate the drug's effect from the effect of expecting treatment", ["to increase the sample size", "to make r larger", "because placebos lower blood pressure more"], "Placebo effect."),
  mc("The diagram shows a design. Which flaw prevents a causal conclusion?", "volunteers chose their own group", ["there are two groups", "the outcome is measured", "it uses a control"], "Self-selection.", boxTreeSvg([{ t: "chose the program", color: "red", c: [{ t: "fitness test", color: "green" }] }, { t: "chose not to", color: "blue", c: [{ t: "fitness test", color: "green" }] }], { root: "volunteers" })),
  ms("A study finds that teens who use social media more report more anxiety. Which explanations are possible? Select all.", ["social media use increases anxiety", "anxious teens use social media more", "a third factor such as loneliness affects both", "it must be accidental", "the association could be confounded by sleep"], [0, 1, 2, 4], "Several plausible mechanisms."),
  mc("The table shows success rates of two treatments for two groups. Which hidden variable is at work?", "patient severity", ["the treatment colour", "the hospital name", "the year"], "Group sizes differ by severity.", tableSvg([["", "mild: success", "severe: success"], ["treatment A", "90/100", "30/100"], ["treatment B", "180/200", "6/20"]])),
  num("In the table, find treatment B's overall success rate as a percent (1 decimal).", Math.round((186 / 220) * 1000) / 10, "186/220.", tableSvg([["", "mild: success", "severe: success"], ["treatment A", "90/100", "30/100"], ["treatment B", "180/200", "6/20"]]), 0.1),
  num("In the same kind of table, treatment A succeeded 90/100 (mild) and 30/100 (severe). Find A's overall rate as a percent.", 60, "120/200."),
  tf("If treatment A has the same or higher success rate in every severity group, it is the better treatment even if its overall rate is lower.", true, "Compare within groups (Simpson's paradox)."),
  tf("An observational study with a very large sample can prove causation.", false, "Size does not remove confounding."),
  mc("A city installs speed cameras at the most dangerous intersections, then accidents fall. Besides the cameras, what could explain the drop?", "regression toward the mean: unusually bad sites tend to improve anyway", ["the cameras make roads wider", "drivers stop driving", "nothing else"], "Extreme values tend to return toward average."),
  num("A survey of 1000 adults finds r = 0.3 between income and happiness. What percent of the variation in happiness is associated with income?", 9, "0.3² = 0.09."),
  mc("The bar graph compares mean test scores of students who did and did not attend tutoring (not randomly assigned). Which conclusion is justified?", "attendees scored higher on average; the cause is unclear", ["tutoring raised scores by exactly the difference", "tutoring has no effect", "non-attendees are less intelligent"], "Association only.", barsSvg([78, 71], { labels: ["attended", "did not attend"], top: true, ymax: 90 })),
  num("For the bar graph of tutoring results (78 vs 71), find the difference in means.", 7, "78 − 71.", barsSvg([78, 71], { labels: ["attended", "did not attend"], top: true, ymax: 90 })),
  mc("To make the tutoring comparison causal, researchers should…", "randomly offer tutoring to some students and compare with a similar control group", ["survey more students", "report r instead", "use only the highest scorers"], "Experiment."),
  mc("A researcher notices that cities with more coffee shops have higher average incomes. Which is the most likely relationship?", "common cause / reverse cause (wealthy areas support more shops)", ["coffee shops cause higher incomes", "accidental", "cause and effect from coffee to income"], "Wealth drives shops."),
  ms("Which strengthen a causal claim from observational data? Select all.", ["a plausible mechanism", "a consistent association across many studies", "a dose-response pattern", "a single small study", "the cause comes before the effect"], [0, 1, 2, 4], "Criteria for causation."),
  tf("Accidental correlations become more likely when many pairs of variables are examined.", true, "Multiple comparisons."),
  mc("A study finds that people who floss have fewer heart attacks. Flossers also tend to exercise and not smoke. Classify.", "presence of a confounding variable", ["cause and effect", "reverse cause and effect", "accidental"], "Health habits mix with flossing."),
];
