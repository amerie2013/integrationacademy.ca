// MDM4U 6.7 — Comparing Groups & Contingency Tables: two categorical variables in a contingency (two-way) table,
// joint, marginal and conditional percentages, deciding whether the variables are associated, comparing a numerical
// variable across groups (summary statistics, side-by-side box plots, colour-coded scatter plots), and Simpson's paradox
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, tableSvg, barsSvg, boxPlotSvg, scatterSvg } from "./lib.mjs";
import { mean, median, quartiles, linreg } from "../mdm4u/count.mjs";

export const TITLE = "6.7 Comparing Groups & Contingency Tables";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00607";
const S = String.raw;
const r1 = (v) => Math.round(v * 10) / 10;
const r2 = (v) => Math.round(v * 100) / 100;

// sport participation by grade (contingency table)
const T = { jr: { yes: 126, no: 84 }, sr: { yes: 99, no: 141 } };
const jrN = T.jr.yes + T.jr.no, srN = T.sr.yes + T.sr.no, N = jrN + srN;
// commute times (min) of two transit routes
const A = [22, 25, 26, 28, 29, 30, 31, 33, 35, 41], B = [18, 21, 24, 27, 30, 33, 36, 40, 44, 52];
// prep course data
const noX = [64, 68, 72, 75, 79, 83], noY = [58, 63, 65, 69, 73, 76], yesX = [66, 70, 74, 78, 82, 86], yesY = [66, 70, 73, 78, 81, 86];

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Comparing Groups & Contingency Tables",
    overview: S`Many questions compare groups. When both variables are categorical (grade level and whether a student plays a sport), the data go in a <strong>contingency table</strong>, and we compare <strong>conditional percentages</strong>: if the percent who play differs by grade, the variables are associated. When one variable is numerical (commute time) and the other names groups (bus route), we compare centres and spreads with summary statistics and side-by-side box plots. Grouping can also uncover a hidden variable — sometimes reversing a conclusion (Simpson's paradox).`,
    goals: [
      "build and read a contingency table with marginal totals;",
      "calculate joint, marginal and conditional percentages;",
      "decide whether two categorical variables are associated;",
      "compare a numerical variable across groups;",
      "recognize Simpson's paradox and the effect of a grouping variable.",
    ],
    curriculum: "D2.1 (two-variable data, including categorical data in contingency tables); D2.4–D2.5 (hidden variables; analysing and interpreting data presented in different ways)",
    prior: [
      ["126 out of 210 as a percent?", "60%."],
      ["Median of 22, 25, 26, 28?", "25.5."],
      ["What does a box plot show?", "The five-number summary."],
    ],
    words: [
      ["Contingency table", "counts for two categorical variables in rows and columns", "grade × plays a sport"],
      ["Marginal total", "a row or column total", "210 juniors"],
      ["Conditional percentage", "a percent within one row (or column)", "60% of juniors play"],
      ["Simpson's paradox", "a trend in every group reverses when the groups are combined", "two hospitals' survival rates"],
    ],
  }),

  section("📌 Contingency tables", S`
  ${fig(tableSvg([["", "plays a sport", "does not", "total"], ["juniors (Gr 9–10)", T.jr.yes, T.jr.no, jrN], ["seniors (Gr 11–12)", T.sr.yes, T.sr.no, srN], ["total", T.jr.yes + T.sr.yes, T.jr.no + T.sr.no, N]]), "a contingency table with marginal totals")}
  ${table(["Percentage", "Calculation", "Value"], [["joint: juniors who play, of all students", `${T.jr.yes} ÷ ${N}`, `${r1((100 * T.jr.yes) / N)}%`], ["marginal: all students who play", `${T.jr.yes + T.sr.yes} ÷ ${N}`, `${r1((100 * (T.jr.yes + T.sr.yes)) / N)}%`], ["conditional: juniors who play", `${T.jr.yes} ÷ ${jrN}`, `${r1((100 * T.jr.yes) / jrN)}%`], ["conditional: seniors who play", `${T.sr.yes} ÷ ${srN}`, `${r1((100 * T.sr.yes) / srN)}%`]])}
  ${fig(barsSvg([r1((100 * T.jr.yes) / jrN), r1((100 * T.sr.yes) / srN)], { labels: ["juniors", "seniors"], top: true, ylabel: "% who play a sport", ymax: 80 }), "different conditional percentages: grade and sport participation are associated")}
  ${keyIdea(S`Compare <em>conditional</em> percentages, not raw counts — the groups usually have different sizes. If the conditional percentages are about equal, the variables are not associated.`)}`),

  section("📌 Comparing a numerical variable across groups", S`
  ${fig(boxPlotSvg([{ data: A, label: "Route A" }, { data: B, label: "Route B" }], { min: 15, max: 55, step: 5, xlabel: "commute time (min)" }), "similar centres, very different spreads")}`),

  section("📌 Explore", S`<p>The scatter plot shows grade 12 marks and first-year marks. Switch to separate groups: the students who took a summer preparation course form their own band.</p>`),

  widget("groupLab", { init: false }),

  section("📌 Watch out", watchOut([
    "Use the right denominator: a row total for row percentages, the grand total for joint percentages.",
    "Different-sized groups make counts misleading; compare percentages.",
    "An association in a table is not proof of cause and effect.",
    "Combining groups can hide or reverse a pattern (Simpson's paradox).",
  ])),

  examples([
    ["Building the table", "A survey of 450 students: 210 juniors, of whom 126 play a sport; 240 seniors, of whom 99 play. Complete the contingency table with totals.",
      [S`Juniors who do not play: \(210-126=84\); seniors who do not: \(240-99=141\).`, S`Totals: play \(126+99=225\), do not \(84+141=225\), grand total 450.`],
      "see the table above"],
    ["Conditional percentages", "Use the table to decide whether sport participation is associated with grade level.",
      [S`Juniors: \(\frac{126}{210}=0.6\), i.e. 60%. Seniors: \(\frac{99}{240}=0.4125\), i.e. about 41.3%.`, S`The percentages differ a lot: participation is associated with grade (juniors play more often).`],
      "associated: 60% vs about 41%"],
    ["Comparing two groups", `Commute times (min): Route A ${A.join(", ")}; Route B ${B.join(", ")}. Compare the routes.`,
      [S`Means: A ${mean(A)}, B ${mean(B)}; medians: A ${median(A)}, B ${median(B)}.`, S`IQR: A \(${quartiles(A)[2] - quartiles(A)[0]}\), B \(${quartiles(B)[2] - quartiles(B)[0]}\).`, S`Similar typical times, but route A is far more predictable.`],
      "similar centres; route A much less variable"],
    ["Groups in a scatter plot", "First-year marks against grade 12 marks for students with and without a summer preparation course are plotted with different colours. What does colouring by group show?",
      [S`Without course: \(\hat y\approx${r2(linreg(noX, noY).a)}x${r2(linreg(noX, noY).b) < 0 ? "" : "+"}${r2(linreg(noX, noY).b)}\); with course: \(\hat y\approx${r2(linreg(yesX, yesY).a)}x${r2(linreg(yesX, yesY).b) < 0 ? "" : "+"}${r2(linreg(yesX, yesY).b)}\).`, S`At the same grade 12 mark the course group tends to be higher, which the single combined line hides. (The course was not randomly assigned, so this is an association.)`],
      "a group effect hidden by one combined line",
      fig(scatterSvg([...noX.map((x, i) => [x, noY[i]]), ...yesX.map((x, i) => [x, yesY[i]])], { xmin: 60, xmax: 90, ymin: 55, ymax: 90, groups: [...noX.map(() => "blue"), ...yesX.map(() => "red")], xlabel: "grade 12 mark", ylabel: "first-year mark" }), "blue: no course; red: course")],
    ["Same data, two pictures", "A report shows the counts 126 and 99 as bars under the headline “Juniors far more active than seniors!” Critique it.",
      [S`The groups have different sizes (210 and 240); counts exaggerate the difference.`, S`Use percentages: 60% vs 41%. The difference is real but should be stated fairly, with the survey method and sample.`],
      "use conditional percentages, not counts"],
  ]),

  practice([
    q("cond", "In a table, 72 of 180 adults and 45 of 75 teens prefer streaming. What percent of teens prefer streaming?", num(60, 0.01), "45/75.", [S`\(0.6\).`], "60"),
    q("joint", "Using the same data (255 people in all), what percent of all people are teens who prefer streaming? (1 decimal)", num(r1((100 * 45) / 255), 0.05), "45/255.", [S`\(\approx17.6\%\).`], `${r1((100 * 45) / 255)}`),
    q("assoc", "Adults: 40% prefer streaming. Teens: 60%. Are age group and preference associated?", choice(["yes — the conditional percentages differ", "no — the counts are similar", "cannot tell without r", "only if the sample is a census"], 0), "Compare percentages.", ["40% vs 60%."], "yes"),
    q("total", "A contingency table has row totals 120 and 80. What is the grand total?", num(200, 0.001), "Add.", [S`200.`], "200"),
    q("compare", "To compare the commute times of two routes, the best display is…", choice(["side-by-side box plots", "a circle graph", "a contingency table", "a scatter plot of route vs time"], 0), "Numerical across groups.", ["Box plots compare centre and spread."], "side-by-side box plots"),
  ]),

  ...hard([
    ["Simpson's paradox", "Two clinics treat a condition. Clinic X: mild cases 90 of 100 recover, severe cases 30 of 100 recover. Clinic Y: mild 170 of 200 recover, severe 5 of 20 recover. (a) Compare the recovery rates for each type of case. (b) Compare the overall rates. (c) Explain the reversal.",
      [S`(a) Mild: X \(90\%\), Y \(85\%\). Severe: X \(30\%\), Y \(25\%\). X is better in both groups.`, S`(b) Overall: X \(\frac{120}{200}=60\%\); Y \(\frac{175}{220}\approx79.5\%\). Y looks better!`, S`(c) Y treats mostly mild cases, which recover more often. Case severity is a hidden variable: compare within groups.`],
      "X better in each group; Y better overall",
      fig(barsSvg([90, 85, 30, 25, 60, 79.5], { labels: ["X mild", "Y mild", "X severe", "Y severe", "X all", "Y all"], top: true, ylabel: "% recovered", ymax: 100 }))],
    ["Testing for association", "A school asks 300 students whether they eat breakfast and whether they feel tired in first period. Of 180 breakfast eaters, 45 feel tired; of 120 non-eaters, 66 feel tired. (a) Find the conditional percentages. (b) If there were no association, how many breakfast eaters would we expect to feel tired? (c) Conclude.",
      [S`(a) Eaters: \(\frac{45}{180}=25\%\); non-eaters: \(\frac{66}{120}=55\%\).`, S`(b) Overall \(\frac{111}{300}=37\%\) feel tired, so we would expect \(0.37\times180=66.6\) eaters to feel tired.`, S`(c) Only 45 do: a clear association between skipping breakfast and tiredness (not proof of cause).`],
      "associated: 25% vs 55%"],
  ], [
    q("hard", "Of 400 people, 160 are smokers; 48 smokers and 36 non-smokers have a cough. If smoking and coughing were not associated, how many smokers would be expected to have a cough?", num(33.6, 0.01), "Overall rate 84/400.", [S`\(0.21\times160\).`], "33.6"),
    q("hard", "Team A wins 60% of home games (30 games) and 40% of away games (10 games). Team B wins 55% at home (10 games) and 35% away (30 games). Which team has the higher overall win percentage?", choice(["Team A (55% vs 40%)", "Team B", "they are equal", "cannot tell"], 0), "Weight by games.", [S`A: \(\frac{18+4}{40}=55\%\); B: \(\frac{5.5+10.5}{40}=40\%\).`], "Team A"),
    q("hard", "In a contingency table, 25% of group 1 and 25% of group 2 answer yes. The variables are…", choice(["not associated", "strongly associated", "negatively correlated", "impossible to compare"], 0), "Equal conditional percentages.", ["No association."], "not associated"),
  ]),

  wrapUp({
    qas: [
      ["What is a contingency table?", "A table of counts for two categorical variables, with totals."],
      ["How do I test for association?", "Compare conditional percentages across the groups."],
      ["Why not compare counts?", "The groups usually have different sizes."],
      ["How do I compare a numerical variable across groups?", "Summary statistics and side-by-side box plots."],
      ["What is Simpson's paradox?", "A trend within every group reverses when the groups are combined."],
    ],
    summary: [
      "Joint ÷ grand total; marginal = row or column total; conditional ÷ row (or column) total.",
      "Different conditional percentages → association.",
      "Compare groups by centre, spread and shape.",
      "Watch for hidden grouping variables.",
    ],
    next: "6.8 reviews the whole chapter.",
  }),
];
