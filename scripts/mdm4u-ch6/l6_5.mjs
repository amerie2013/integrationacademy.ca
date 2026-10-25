// MDM4U 6.5 — Correlation vs Causation: the five ways a correlation can arise (cause and effect, common cause,
// reverse cause and effect, accidental relationship, presence of a confounding variable), hidden variables, and why
// only a controlled experiment establishes cause and effect
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, boxTreeSvg, lineSvg } from "./lib.mjs";
import { corr, linreg } from "../mdm4u/count.mjs";

export const TITLE = "6.5 Correlation vs Causation";
export const ID = "b8dc8beb-7b9f-4acd-99a4-3acd82eb3a64";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);

// monthly data: sunscreen sales (hundreds) and swimming-pool visits (thousands) — both driven by temperature
const sun = [3, 4, 7, 11, 16, 21, 24, 22, 15, 9, 5, 3], pool = [1.2, 1.5, 2.4, 3.6, 5.5, 7.1, 8.4, 7.6, 5.0, 3.1, 1.8, 1.1];
// an accidental relationship: two unrelated yearly series that both happened to rise
const yrs = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], seriesA = [212, 220, 231, 236, 248, 255, 263, 270], seriesB = [3.1, 3.3, 3.2, 3.6, 3.8, 3.9, 4.2, 4.3];

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Correlation vs Causation",
    overview: S`A strong correlation tells us that two variables move together — not <em>why</em>. The change in \(y\) might be caused by \(x\), but the correlation might also come from a third variable that drives both, from \(y\) causing \(x\), from pure coincidence, or from a confounding variable whose effect cannot be separated from \(x\)'s. Distinguishing these takes reasoning about the context, and proving cause and effect usually takes a controlled experiment.`,
    goals: [
      "explain why correlation does not prove causation;",
      "classify a relationship as cause and effect, common cause, reverse cause and effect, accidental, or confounded;",
      "identify possible hidden (lurking) variables;",
      "explain how a controlled experiment can establish cause and effect;",
      "evaluate causal claims in the media.",
    ],
    curriculum: "D2.4 (types of relationships: cause and effect, common cause, reverse cause and effect, accidental, presence of a confounding variable); D2.5 (interpreting and evaluating claims)",
    prior: [
      ["What is a confounding variable?", "A variable related to both x and y that may explain the association."],
      ["What does an experiment have that an observational study lacks?", "A treatment imposed with random assignment."],
      ["r = 0.95 means…", "a strong positive linear relationship."],
    ],
    words: [
      ["Cause and effect", "a change in x produces a change in y", "more exercise → lower resting heart rate"],
      ["Common cause", "a third variable causes both x and y", "heat → more pool visits and more sunscreen"],
      ["Reverse cause and effect", "y actually causes x", "more fires → more firefighters sent"],
      ["Accidental", "a coincidence with no logical link", "two unrelated series both rising"],
    ],
  }),

  section("📌 Five ways to get a correlation", S`
  ${fig(boxTreeSvg([{ t: "cause and effect", color: "green" }, { t: "common cause", color: "blue" }, { t: "reverse cause and effect", color: "violet" }, { t: "accidental", color: "amber" }, { t: "confounding variable", color: "red" }], { root: "x and y correlated", dy: 40 }), "a correlation can arise in any of these ways")}
  ${table(["Type", "Test question"], [["cause and effect", "Is there a direct mechanism by which x changes y?"], ["common cause", "Is there a third variable that drives both?"], ["reverse cause and effect", "Could y be causing x instead?"], ["accidental", "Is there any logical link at all?"], ["confounding variable", "Does another variable change together with x and also affect y, so the effects cannot be separated?"]])}`),

  section("📌 A common cause", S`
  ${fig(scatterSvg(P(sun, pool), { xmin: 0, xmax: 26, ymin: 0, ymax: 10, line: linreg(sun, pool), xlabel: "sunscreen sales (hundreds)", ylabel: "pool visits (thousands)" }), `r ≈ ${r3(corr(sun, pool))}, yet neither causes the other — hot weather drives both`)}
  ${keyIdea(S`To show that \(x\) causes \(y\), randomly assign values of \(x\) (a treatment) and keep everything else the same. Random assignment spreads hidden variables evenly between the groups, so a difference in \(y\) can be attributed to \(x\).`)}`),

  section("📌 Explore", S`<p>Classify each relationship. Read the explanation after each answer.</p>`),

  widget("causationLab", {}),

  section("📌 Watch out", watchOut([
    "A strong r is never by itself evidence of causation.",
    "Name the specific third variable when you claim a common cause.",
    "Reverse causation is easy to miss: ask which came first.",
    "Large data sets with many variables produce many accidental correlations.",
  ])),

  examples([
    ["Common cause", "Over 12 months, sunscreen sales and swimming-pool visits have r ≈ " + r3(corr(sun, pool)) + ". Classify the relationship.",
      [S`Buying sunscreen does not make people swim, and swimming does not cause sunscreen purchases.`, S`Hot, sunny weather increases both: common cause.`],
      "common cause (temperature)"],
    ["Cause and effect", "The longer a kettle is switched on (up to boiling), the higher the water temperature. Classify.",
      [S`There is a direct physical mechanism: electrical energy heats the water.`, S`Cause and effect.`],
      "cause and effect"],
    ["Reverse cause and effect", "A study finds that people who take more vitamins are less healthy. A headline says vitamins harm health. What else could explain it?",
      [S`People who are already unwell may take more vitamins.`, S`Reverse cause and effect: poor health causes vitamin use.`],
      "reverse cause and effect"],
    ["Accidental", "The yearly number of new apps in an online store and the average yearly rainfall in a small town both rose from 2016 to 2023. Classify.",
      [S`\(r\approx${r3(corr(seriesA, seriesB))}\) because both happened to increase over time.`, S`No logical link: accidental (both simply trend with time).`],
      "accidental",
      fig(lineSvg(seriesB.map((v) => v / 5), { xs: yrs, ymax: 1, nt: 5, xlabel: "year", ylabel: "rainfall (scaled)" }), "a rising series — any two rising series are correlated")],
    ["Confounding variable", "Students who attend an optional study session score higher on the test. Those who attend are also the students who do all their homework. Classify and explain.",
      [S`Attending the session might help, but homework completion also raises scores and goes together with attending.`, S`The two effects cannot be separated: presence of a confounding variable.`],
      "confounding variable (homework habits)"],
  ]),

  practice([
    q("type1", "Ice-cream sales and sunburn cases rise together. The relationship is…", choice(["common cause", "cause and effect", "reverse cause and effect", "accidental"], 0), "What drives both?", ["Sunny weather."], "common cause"),
    q("type2", "More hours of practice lead to more free throws made. This is most likely…", choice(["cause and effect", "accidental", "common cause", "reverse cause and effect"], 0), "A direct mechanism.", ["Practice improves skill."], "cause and effect"),
    q("type3", "Cities with more fire stations have more fires. A council concludes fire stations cause fires. The likely relationship is…", choice(["reverse cause and effect (or common cause: city size)", "cause and effect", "accidental", "no relationship"], 0), "Which came first?", ["More fires and larger cities lead to more stations."], "reverse / common cause"),
    q("exp", "Which design can establish cause and effect?", choice(["a randomized controlled experiment", "a large survey", "a strong correlation", "a long time series"], 0), "Random assignment.", ["Only experiments control hidden variables."], "a randomized controlled experiment"),
    q("r2", "Two variables have r = 0.9 because of a common cause. What is r²?", num(0.81, 0.001), "Square r.", [S`\(0.81\).`], "0.81"),
  ]),

  ...hard([
    ["Designing a test of causation", "A study of 2000 adults finds that people who drink green tea have lower blood pressure (r = −0.4). (a) Name two possible confounding variables. (b) Design an experiment to test whether green tea lowers blood pressure. (c) Why is random assignment essential?",
      [S`(a) e.g. diet, exercise, age, income, stress.`, S`(b) Randomly assign volunteers to drink green tea or a similar-tasting placebo drink daily for 8 weeks; measure blood pressure before and after; keep the measurers blind to the groups.`, S`(c) It spreads diet, exercise and other factors evenly, so a difference between groups can be attributed to the tea.`],
      "randomized controlled, blinded experiment"],
    ["Time as a hidden variable", "Two quantities that both grow over the years — a country's internet users and its average life expectancy — have r = 0.96. Explain why this correlation says little about any link between them.",
      [S`Both increase with time because of many separate developments (technology, medicine, wealth).`, S`Time (or general development) is a common cause; any two trending series will be highly correlated.`, S`To study a real link you would need data that remove the time trend, or an experiment.`],
      "a common time trend",
      fig(scatterSvg(P(seriesA, seriesB), { xmin: 200, xmax: 280, ymin: 2.8, ymax: 4.6, line: linreg(seriesA, seriesB), xlabel: "series A", ylabel: "series B" }), `two unrelated rising series: r ≈ ${r3(corr(seriesA, seriesB))}`)],
  ], [
    q("hard", "A correlation of r = 0.98 is found between the number of storks nesting in a region and the number of births there. The best explanation is…", choice(["a common cause such as the region's size or rural population", "storks deliver babies", "births attract storks", "measurement error"], 0), "Think of a third variable.", ["Larger rural regions have both more storks and more births."], "common cause"),
    q("hard", "In a randomized experiment, the treatment group improves by 8 points and the control group by 3 points. What improvement can be attributed to the treatment?", num(5, 0.001), "Compare with the control.", [S`\(8-3=5\).`], "5"),
    q("hard", "Which feature of an observational study makes it impossible to rule out confounding?", choice(["subjects choose or already have their x-values", "the sample is random", "the data are numerical", "r is calculated"], 0), "No assignment.", ["Groups may differ in other ways."], "subjects choose their x-values"),
  ]),

  wrapUp({
    qas: [
      ["Does correlation prove causation?", "No."],
      ["What is a common cause?", "A third variable that causes both x and y."],
      ["What is reverse cause and effect?", "y causes x, rather than x causing y."],
      ["How can cause and effect be established?", "With a randomized controlled experiment."],
      ["What is an accidental relationship?", "A coincidental correlation with no logical connection."],
    ],
    summary: [
      "Types: cause and effect, common cause, reverse, accidental, confounding.",
      "Look for hidden variables and ask which came first.",
      "Experiments with random assignment establish causation.",
      "Read causal headlines critically.",
    ],
    next: "6.6 studies residuals, outliers and hidden variables in detail.",
  }),
];
