// MDM4U 6.6 — Residuals, Outliers & Hidden Variables: residuals and residual plots (random scatter vs pattern),
// outliers (large residuals) and influential points (far from the other x-values), deciding whether to remove a
// point, and hidden (lurking) variables revealed by grouping or by plotting residuals against another variable
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, residualPlotSvg, tableSvg } from "./lib.mjs";
import { corr, linreg, residuals } from "../mdm4u/count.mjs";

export const TITLE = "6.6 Residuals, Outliers & Hidden Variables";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00606";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const sg = (v, k = 3) => (v < 0 ? `-${Math.abs(Math.round(v * 10 ** k) / 10 ** k)}` : `+${Math.round(v * 10 ** k) / 10 ** k}`);

const hx = [1, 2, 3, 4, 5, 6], hy = [4, 7, 7, 10, 12, 13]; // small residual example
const Lh = linreg(hx, hy), res = residuals(hx, hy);
// enrolment of a new school (year 0 = opening) — year 0 had no grade 12 yet
const sx = [0, 1, 2, 3, 4, 5, 6], sy = [610, 820, 836, 851, 862, 878, 890];
const Ls = linreg(sx, sy), Ls2 = linreg(sx.slice(1), sy.slice(1));
// influential point: far-right x
const ix = [2, 3, 4, 5, 6, 7, 20], iy = [6, 7, 9, 10, 12, 13, 12];
const Li = linreg(ix, iy), Li2 = linreg(ix.slice(0, -1), iy.slice(0, -1));
// curved data fitted with a line
const cx = [1, 2, 3, 4, 5, 6, 7, 8], cy = [2, 5, 10, 17, 26, 37, 50, 65];
const Lc = linreg(cx, cy);

export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Residuals, Outliers & Hidden Variables",
    overview: S`A regression line is only as good as the data and the pattern behind it. A <strong>residual plot</strong> — residuals \(y-\hat y\) against \(x\) — magnifies what the line misses: random scatter means the linear model is suitable, while a curve or a funnel means it is not. An <strong>outlier</strong> has a large residual; an <strong>influential point</strong> is far from the other \(x\)-values and pulls the line toward itself. A <strong>hidden variable</strong> that is not in the analysis can create, hide or distort a trend.`,
    goals: [
      "calculate residuals and draw a residual plot;",
      "decide from a residual plot whether a linear model is appropriate;",
      "distinguish outliers from influential points;",
      "decide, with reasons, whether to remove an unusual point;",
      "identify hidden variables and their effect on a correlation.",
    ],
    curriculum: "D2.4 (outliers and their effect on a trend; hidden and extraneous variables); D2.5 (interpreting lines of best fit and their misuse)",
    prior: [
      ["Residual of (4, 10) if ŷ = 2x + 1?", "1."],
      ["Mean of the residuals of a least-squares line?", "0."],
      ["What does r² = 0.36 mean?", "36% of the variation in y is explained."],
    ],
    words: [
      ["Residual plot", "residuals graphed against x (or ŷ)", "random band around 0 = good fit"],
      ["Outlier", "a point with an unusually large residual", "a year with very low enrolment"],
      ["Influential point", "a point whose removal changes the line a lot (usually extreme x)", "one city far larger than the rest"],
      ["Hidden (lurking) variable", "a variable not included that affects the relationship", "grade levels offered"],
    ],
  }),

  section("📌 Reading residual plots", S`
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:8px;">
  ${fig(residualPlotSvg(P(hx, hy), Lh, { xmin: 0, xmax: 7, xlabel: "x" }), "random scatter around 0: a line is suitable")}
  ${fig(residualPlotSvg(P(cx, cy), Lc, { xmin: 0, xmax: 9, xlabel: "x" }), "a U-shape: the data are curved")}
  </div>
  ${table(["Residual plot shows", "Meaning"], [["random scatter in a horizontal band", "linear model appropriate"], ["a curve (U or arch)", "relationship is not linear — try a curve"], ["a fan or funnel", "the spread changes with x; predictions vary in reliability"], ["one point far from 0", "an outlier"]])}`),

  section("📌 Outliers and influential points", S`
  ${fig(scatterSvg(P(ix, iy), { xmin: 0, xmax: 22, ymin: 0, ymax: 20, line: Li, hl: [6], xlabel: "x", ylabel: "y" }), `with the far point (red): slope ≈ ${r3(Li.a)}; without it: slope ≈ ${r3(Li2.a)}`)}
  ${keyIdea(S`Never delete a point just because it spoils the fit. Remove it only if it is an error or clearly belongs to a different situation — and report what you did. Otherwise, report the analysis with and without it.`)}`),

  section("📌 Explore", S`<p>Move the red point. Far to the side it is influential and drags the line; in the middle of the x-range with a large residual it is an outlier that moves the line only a little. Watch the residual plot.</p>`),

  widget("residualLab", { init: [16, 4] }),

  section("📌 Watch out", watchOut([
    "Residual = observed − predicted.",
    "A high r² does not guarantee that a line is the right model — check the residual plot.",
    "An influential point can have a small residual, because it pulls the line toward itself.",
    "Explain any removed point in your report.",
  ])),

  examples([
    ["Calculating residuals", `For x: ${hx.join(", ")}; y: ${hy.join(", ")}, the regression line is ŷ ≈ ${r3(Lh.a)}x ${sg(Lh.b).replace(/^\+/, "+ ").replace(/^-/, "− ")}. Find the residuals and describe the residual plot.`,
      [S`Predictions: ${hx.map((x) => r2(Lh.a * x + Lh.b)).join(", ")}.`, S`Residuals: ${res.map((e) => r2(e)).join(", ")} (they add to 0).`, S`They scatter randomly above and below 0: the linear model is appropriate.`],
      res.map((e) => r2(e)).join(", "),
      fig(tableSvg([["x", ...hx.map(String)], ["y", ...hy.map(String)], ["ŷ", ...hx.map((x) => String(r2(Lh.a * x + Lh.b)))], ["y − ŷ", ...res.map((e) => String(r2(e)))]]))],
    ["A curved residual plot", `A line fitted to x: ${cx.join(", ")}; y: ${cy.join(", ")} has r ≈ ${r3(corr(cx, cy))}. Should we use it?`,
      [S`\(r\) is very high, but the residual plot is U-shaped (positive, negative, positive).`, S`The relationship is curved (here \(y=x^2+1\)): use a quadratic model.`],
      "no — use a curve",
      fig(scatterSvg(P(cx, cy), { xmin: 0, xmax: 9, ymin: -5, ymax: 70, line: Lc, xlabel: "x", ylabel: "y" }))],
    ["An outlier with a reason", `A new school's enrolment for years 0 to 6 is ${sy.join(", ")}. Grade 12 was not offered in year 0. Compare the regression with and without year 0.`,
      [S`All years: \(\hat y\approx${r2(Ls.a)}x+${r2(Ls.b)}\), \(r\approx${r3(corr(sx, sy))}\).`, S`Without year 0: \(\hat y\approx${r2(Ls2.a)}x+${r2(Ls2.b)}\), \(r\approx${r3(corr(sx.slice(1), sy.slice(1)))}\).`, S`Year 0 belongs to a different situation (a missing grade), so removing it is justified; the second model describes the school's real growth.`],
      `growth ≈ ${r2(Ls2.a)} students per year without year 0`,
      fig(scatterSvg(P(sx, sy), { xmin: -1, xmax: 7, ymin: 550, ymax: 950, line: Ls2, hl: [0], xlabel: "year", ylabel: "enrolment" }))],
    ["An influential point", `For x: ${ix.join(", ")}; y: ${iy.join(", ")}, compare the slope with and without the point (20, 12).`,
      [S`With it: slope \(\approx${r3(Li.a)}\), \(r\approx${r3(corr(ix, iy))}\).`, S`Without it: slope \(\approx${r3(Li2.a)}\), \(r\approx${r3(corr(ix.slice(0, -1), iy.slice(0, -1)))}\).`, S`One point far from the other x-values changed the slope greatly: it is influential.`],
      "influential: the slope changes greatly"],
    ["A hidden variable", "For 20 cities, the number of libraries and the number of car accidents per year have r = 0.88. What hidden variable could explain this, and how could you check?",
      [S`Population: big cities have more libraries and more accidents.`, S`Check by using rates (per 100 000 people) or by comparing cities of similar size; the correlation should weaken greatly.`],
      "population size"],
  ]),

  practice([
    q("res", "A point (8, 30) and the line ŷ = 3.5x + 1. Find the residual.", num(1, 0.001), "y − ŷ.", [S`\(30-29=1\).`], "1"),
    q("plot", "A residual plot shows a clear arch (negative, positive, negative). The linear model is…", choice(["not appropriate — the data are curved", "appropriate", "perfect", "influenced by one outlier only"], 0), "Pattern = wrong form.", ["Systematic curvature."], "not appropriate"),
    q("infl", "Which point is most likely to be influential?", choice(["one with an x-value far from all the others", "one near the mean of x and y", "one with a residual of 0 near the centre", "any point above the line"], 0), "Leverage.", ["Extreme x pulls the line."], "far x-value"),
    q("sum", "The residuals of a least-squares line add to…", num(0, 0.001), "Property.", [S`0.`], "0"),
    q("remove", "When is it reasonable to remove an outlier?", choice(["when it is an error or comes from a different situation", "whenever it lowers r", "always", "never"], 0), "Need a reason.", ["Justify and report."], "error or different situation"),
  ]),

  ...hard([
    ["Before and after", "Data: (1, 3), (2, 5), (3, 6), (4, 8), (5, 9), (6, 25). (a) Find the regression line and r. (b) Repeat without (6, 25). (c) Which point is unusual and how did it affect the analysis?",
      (() => { const X = [1, 2, 3, 4, 5, 6], Y = [3, 5, 6, 8, 9, 25], A = linreg(X, Y), B = linreg(X.slice(0, 5), Y.slice(0, 5)); return [S`(a) \(\hat y\approx${r3(A.a)}x${sg(A.b)}\), \(r\approx${r3(corr(X, Y))}\).`, S`(b) \(\hat y\approx${r3(B.a)}x${sg(B.b)}\), \(r\approx${r3(corr(X.slice(0, 5), Y.slice(0, 5)))}\).`, S`(c) (6, 25) has a very large residual: it more than doubled the slope and lowered \(r\). Find out why before deciding to keep it.`]; })(),
      "(6, 25) is an outlier that distorts the line",
      fig(scatterSvg([[1, 3], [2, 5], [3, 6], [4, 8], [5, 9], [6, 25]], { xmin: 0, xmax: 7, ymin: 0, ymax: 28, line: linreg([1, 2, 3, 4, 5], [3, 5, 6, 8, 9]), hl: [5] }), "line fitted without the red point")],
    ["A funnel", "For households, income (x) and spending on vacations (y) give a residual plot that is narrow on the left and wide on the right. Interpret this and explain the consequence for predictions.",
      [S`The spread of vacation spending grows with income: low-income households spend similar small amounts; high-income households vary widely.`, S`Predictions for high incomes are much less precise than for low incomes, even though a single r² is reported for the whole range.`],
      "spread increases with x; predictions less reliable at high x",
      fig(scatterSvg([[20, 0.4], [25, -0.5], [30, 0.6], [35, -0.8], [40, 1.2], [45, -1.5], [50, 1.9], [55, -2.2], [60, 2.6], [65, -3]], { xmin: 15, xmax: 70, ymin: -4, ymax: 4, zero: true, xlabel: "income (thousands)", ylabel: "residual" }), "a funnel-shaped residual plot")],
  ], [
    q("hard", "A line ŷ = 2x + 3 has residuals 1, −2, 0.5, x and 1.5 for five points. Find x.", num(-1, 0.001), "Residuals sum to 0.", [S`\(1-2+0.5+1.5=1\).`], "-1"),
    q("hard", "Removing one point changes the slope from 2.4 to 0.6. By what factor did the slope change?", num(4, 0.001), "2.4/0.6.", [S`4.`], "4"),
    q("hard", "Crime and ice-cream sales are correlated across months. Which hidden variable is most plausible?", choice(["temperature (season)", "the price of ice cream", "the number of police", "none"], 0), "What changes with the season?", ["Warm weather increases both."], "temperature"),
  ]),

  wrapUp({
    qas: [
      ["What is a residual plot?", "A graph of the residuals against x; it shows what the line misses."],
      ["What does a good residual plot look like?", "Random scatter in a horizontal band around 0."],
      ["Outlier or influential point?", "Outlier: large residual. Influential: extreme x that changes the line."],
      ["Can I delete points I don't like?", "Only with a valid reason, and you must report it."],
      ["What is a hidden variable?", "A variable outside the analysis that affects the relationship."],
    ],
    summary: [
      "Residual = y − ŷ; plot residuals against x.",
      "Pattern in residuals → wrong model; funnel → changing spread.",
      "Influential points sit at extreme x; check slope with and without them.",
      "Look for hidden variables before drawing conclusions.",
    ],
    next: "6.7 compares groups and uses contingency tables for categorical data.",
  }),
];
