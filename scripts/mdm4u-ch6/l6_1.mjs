// MDM4U 6.1 — Scatter Plots & Correlation: explanatory and response variables, scatter plots, describing direction,
// form, strength and outliers, the correlation coefficient r (meaning, formula, calculation from sums), and what r
// cannot tell us (curved patterns, outliers)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, tableSvg } from "./lib.mjs";
import { corr, linreg, sum } from "../mdm4u/count.mjs";

export const TITLE = "6.1 Scatter Plots & Correlation";
export const ID = "ee47f51f-d489-4cea-8a74-0b61f61aaa94";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);

const hx = [1, 2, 3, 4, 5], hy = [3, 5, 4, 7, 8];
const sx = sum(hx), sy = sum(hy), sxy = sum(hx.map((x, i) => x * hy[i])), sxx = sum(hx.map((x) => x * x)), syy = sum(hy.map((y) => y * y));
const temp = [14, 17, 19, 22, 24, 27, 29, 31], cones = [215, 240, 262, 290, 305, 342, 360, 378];
const age = [2, 3, 4, 5, 6, 7, 8, 9], value = [24.5, 21, 19.2, 16.1, 14.8, 12.2, 10.9, 8.4];
const curveX = [-4, -3, -2, -1, 0, 1, 2, 3, 4], curveY = curveX.map((x) => 20 - x * x);

export const blocks = () => [
  intro({
    icon: "🔵",
    title: "Scatter Plots & Correlation",
    overview: S`When two variables are measured on the same individuals we have <strong>two-variable (bivariate) data</strong>. A <strong>scatter plot</strong> shows each pair as a point, with the <strong>explanatory</strong> variable \(x\) on the horizontal axis and the <strong>response</strong> variable \(y\) on the vertical axis. We describe the pattern by its direction, form, strength and any outliers, and measure the strength of a <em>linear</em> pattern with the <strong>correlation coefficient</strong> \(r\), a number from −1 to 1.`,
    goals: [
      "identify explanatory and response variables;",
      "draw and describe a scatter plot: direction, form, strength, outliers;",
      "interpret the correlation coefficient r;",
      "calculate r from data or from summary sums;",
      "recognize when r is misleading (curves, outliers).",
    ],
    curriculum: "D2.1 (scatter plots, explanatory and response variables); D2.2–D2.3 (the correlation coefficient and its interpretation)",
    prior: [
      ["Plot (3, 7) — which number is horizontal?", "3."],
      ["Slope of the line through (0, 2) and (4, 10)?", "2."],
      ["√(50 × 18) = ?", "30."],
    ],
    words: [
      ["Explanatory variable", "the variable used to explain or predict (x)", "hours of practice"],
      ["Response variable", "the variable being explained (y)", "test score"],
      ["Correlation coefficient r", "measures the strength and direction of a linear relationship", "r = 0.94"],
      ["Outlier", "a point that does not follow the pattern", "one very high score"],
    ],
  }),

  section("📌 Reading a scatter plot", S`
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:8px;">
  ${fig(scatterSvg(P(temp, cones), { xmin: 10, xmax: 34, ymin: 180, ymax: 400, xlabel: "daily high (°C)", ylabel: "cones sold" }), `strong positive: r ≈ ${r3(corr(temp, cones))}`)}
  ${fig(scatterSvg(P(age, value), { xmin: 0, xmax: 10, ymin: 0, ymax: 30, xlabel: "age of car (years)", ylabel: "value (thousands)" }), `strong negative: r ≈ ${r3(corr(age, value))}`)}
  </div>
  ${table(["Feature", "Ask"], [["direction", "positive (up to the right), negative (down to the right), or none"], ["form", "linear, curved, or no pattern"], ["strength", "how closely the points follow the form"], ["outliers", "points far from the overall pattern"]])}
  ${table(["|r|", "Linear correlation"], [["0.9 to 1", "strong"], ["0.67 to 0.9", "moderate"], ["0.33 to 0.67", "weak"], ["0 to 0.33", "very weak or none"]])}`),

  section("📌 Calculating r", S`
  \[r=\frac{n\sum xy-\sum x\sum y}{\sqrt{\left[n\sum x^2-\left(\sum x\right)^2\right]\left[n\sum y^2-\left(\sum y\right)^2\right]}}\]
  <p>The sign of \(r\) gives the direction and its size gives the strength. \(r=\pm1\) means all points lie exactly on a line. \(r\) has no units and does not change if we change the units of \(x\) or \(y\).</p>
  ${keyIdea(S`\(r\) measures <em>linear</em> association only. A perfect curved pattern can have \(r\) near 0, and one outlier can change \(r\) a lot. Always look at the scatter plot first.`)}`),

  section("📌 Explore", S`<p>Set a target strength, then press “new sample” several times. Notice how the cloud changes shape as \(r\) moves from −1 to 1, and how much \(r\) varies when there are few points.</p>`),

  widget("scatterLab", { init: 0.8 }),

  section("📌 Watch out", watchOut([
    "Put the explanatory variable on the horizontal axis.",
    "A strong correlation does not mean one variable causes the other.",
    "r near 0 means no LINEAR relationship — there may still be a curved one.",
    "r is not a percent and is not the slope of the line.",
  ])),

  examples([
    ["Choosing the roles", "A study records each student's hours of sleep and reaction time. Which is the explanatory variable?",
      [S`Sleep is thought to affect reaction time, not the reverse.`, S`Explanatory \(x\): hours of sleep; response \(y\): reaction time.`],
      "x = hours of sleep, y = reaction time"],
    ["Describing a plot", `The plot shows a café's daily cone sales against the day's high temperature. Describe the relationship.`,
      [S`Direction: positive — warmer days, more cones.`, S`Form: linear.`, S`Strength: strong; \(r\approx${r3(corr(temp, cones))}\). No outliers.`],
      "strong positive linear, no outliers",
      fig(scatterSvg(P(temp, cones), { xmin: 10, xmax: 34, ymin: 180, ymax: 400, xlabel: "daily high (°C)", ylabel: "cones sold" }))],
    ["Calculating r", `Find r for the data x: ${hx.join(", ")}; y: ${hy.join(", ")}.`,
      [S`\(n=5\), \(\sum x=${sx}\), \(\sum y=${sy}\), \(\sum xy=${sxy}\), \(\sum x^2=${sxx}\), \(\sum y^2=${syy}\).`, S`Numerator \(5(${sxy})-${sx}(${sy})=${5 * sxy - sx * sy}\).`, S`Denominator \(\sqrt{(${5 * sxx - sx * sx})(${5 * syy - sy * sy})}\approx${r3(Math.sqrt((5 * sxx - sx * sx) * (5 * syy - sy * sy)))}\).`, S`\(r\approx${r3(corr(hx, hy))}\).`],
      `r ≈ ${r3(corr(hx, hy))}, strong positive`,
      fig(tableSvg([["x", ...hx.map(String)], ["y", ...hy.map(String)], ["xy", ...hx.map((x, i) => String(x * hy[i]))], ["x²", ...hx.map((x) => String(x * x))], ["y²", ...hy.map((y) => String(y * y))]]))],
    ["Negative correlation", "The second plot shows the value of a car against its age. Estimate r and interpret it.",
      [S`The points fall steadily: negative and very close to a line.`, S`\(r\approx${r3(corr(age, value))}\): strong negative linear correlation — older cars are worth less.`],
      `r ≈ ${r3(corr(age, value))}`,
      fig(scatterSvg(P(age, value), { xmin: 0, xmax: 10, ymin: 0, ymax: 30, xlabel: "age of car (years)", ylabel: "value (thousands)" }))],
    ["When r misleads", "The height of a thrown ball (above its launch point, in a convenient scale) is recorded at equally spaced times. The points form a perfect arch. Find r and explain.",
      [S`The pattern is symmetric: the rise and the fall cancel in the formula.`, S`\(r=${r3(corr(curveX, curveY))}\), yet the relationship is perfect — just not linear.`],
      "r = 0, but a strong curved relationship",
      fig(scatterSvg(P(curveX, curveY), { xmin: -5, xmax: 5, ymin: 0, ymax: 22, xlabel: "time (relative)", ylabel: "height" }))],
  ]),

  practice([
    q("roles", "A study records the number of hours of TV watched and the marks of students. The explanatory variable is…", choice(["hours of TV", "marks", "both", "neither"], 0), "Which might explain the other?", ["TV time may affect marks."], "hours of TV"),
    q("strength", "Which value of r shows the strongest linear relationship?", choice(["−0.92", "0.85", "0.4", "0"], 0), "Largest |r|.", ["|−0.92| is largest."], "−0.92"),
    q("describe", "r = −0.45 describes a…", choice(["weak negative linear correlation", "strong negative correlation", "weak positive correlation", "no correlation"], 0), "Size 0.45: weak.", ["Negative sign, |r| between 0.33 and 0.67."], "weak negative"),
    q("calc", "For n = 4, Σx = 10, Σy = 20, Σxy = 60, Σx² = 30, Σy² = 120. Find r.", num(1, 0.001), "Use the formula.", [S`\(\frac{4(60)-200}{\sqrt{(120-100)(480-400)}}=\frac{40}{40}\).`], "1"),
    q("units", "Heights are converted from centimetres to inches. The correlation with mass…", choice(["stays the same", "is multiplied by 2.54", "is divided by 2.54", "becomes 0"], 0), "r has no units.", ["Changing units does not change r."], "stays the same"),
  ]),

  ...hard([
    ["r from summary sums", "For 6 students, Σx = 42 (hours of practice), Σy = 450 (scores), Σxy = 3270, Σx² = 318, Σy² = 34 100. Find r and describe the correlation.",
      [S`Numerator \(6(3270)-42(450)=19620-18900=720\).`, S`\(6(318)-42^2=1908-1764=144\); \(6(34100)-450^2=204600-202500=2100\).`, S`\(r=\frac{720}{\sqrt{144(2100)}}\approx${r3(720 / Math.sqrt(144 * 2100))}\).`],
      `r ≈ ${r3(720 / Math.sqrt(144 * 2100))}: strong positive`],
    ["One point changes everything", `Five points lie close to a horizontal band: (1, 5), (2, 4), (3, 6), (4, 5), (5, 4). A sixth point (12, 15) is added. Compare r before and after.`,
      [S`Before: \(r\approx${r3(corr([1, 2, 3, 4, 5], [5, 4, 6, 5, 4]))}\) — essentially no linear relationship.`, S`After: \(r\approx${r3(corr([1, 2, 3, 4, 5, 12], [5, 4, 6, 5, 4, 15]))}\) — the single far-away point creates a strong-looking correlation.`, S`A conclusion based on \(r\) alone would be wrong: report the outlier and describe both.`],
      "one outlier can create a strong r",
      fig(scatterSvg([[1, 5], [2, 4], [3, 6], [4, 5], [5, 4], [12, 15]], { xmin: 0, xmax: 14, ymin: 0, ymax: 18, hl: [5], line: linreg([1, 2, 3, 4, 5, 12], [5, 4, 6, 5, 4, 15]) }), "the red point creates most of the correlation")],
  ], [
    q("hard", "For n = 5: Σx = 20, Σy = 40, Σxy = 180, Σx² = 90, Σy² = 370. Find r (3 decimals).", num(r3((5 * 180 - 800) / Math.sqrt((450 - 400) * (1850 - 1600))), 0.002), "Formula.", [S`\(\frac{100}{\sqrt{50\cdot250}}\).`], `${r3((5 * 180 - 800) / Math.sqrt((450 - 400) * (1850 - 1600)))}`),
    q("hard", "Every y-value is multiplied by −2. What happens to r?", choice(["it changes sign but keeps its size", "it doubles", "it is unchanged", "it becomes −2r"], 0), "Direction reverses.", ["Multiplying by a negative flips the direction."], "it changes sign"),
    q("hard", "Points (1, 1), (2, 4), (3, 9), (4, 16) lie on a curve. Is r equal to 1?", choice(["no — r < 1 because the pattern is curved", "yes — the points are perfectly related", "no — r is negative", "r cannot be calculated"], 0), "r measures linear fit only.", [S`\(r\approx${r3(corr([1, 2, 3, 4], [1, 4, 9, 16]))}\).`], "no"),
  ]),

  wrapUp({
    qas: [
      ["Which variable goes on the x-axis?", "The explanatory variable."],
      ["What four features describe a scatter plot?", "Direction, form, strength and outliers."],
      ["What does r = −0.95 mean?", "A strong negative linear relationship."],
      ["Can r be 1.2?", "No — r is always between −1 and 1."],
      ["Why look at the plot before trusting r?", "Curves and outliers can make r misleading."],
    ],
    summary: [
      "Scatter plot: x explanatory, y response.",
      "Describe direction, form, strength, outliers.",
      "r = [nΣxy − ΣxΣy] / √([nΣx² − (Σx)²][nΣy² − (Σy)²]).",
      "|r| near 1: strong linear; near 0: weak or none (linear).",
    ],
    next: "6.2 finds the line of best fit by least squares.",
  }),
];
