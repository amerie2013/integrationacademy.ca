// IB AA SL 7.1 — Scatter Diagrams and Correlation: bivariate data, scatter diagrams, direction/strength/form, mean point, outliers, correlation vs causation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.1 Scatter Diagrams and Correlation";
export const ID = "5a2adac6-0959-4279-b65f-d748ba16ee15";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));
const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;

const HX = [150, 155, 158, 162, 165, 168, 171, 175, 178, 183], HY = [52, 55, 54, 60, 63, 62, 68, 70, 74, 79];
const TX = [5, 8, 10, 12, 15, 18, 20, 23, 25, 28], TY = [95, 90, 82, 80, 70, 66, 58, 55, 47, 40];

export const blocks = () => [
  intro({
    icon: "⁘",
    title: "Scatter Diagrams and Correlation",
    overview: S`Bivariate data pair two measurements on each individual — height and mass, temperature and ice-cream sales. A scatter diagram shows whether the two variables are related. In this lesson you will draw and read scatter diagrams, describe correlation by its direction, strength and form, plot the mean point, spot outliers, and learn why a correlation does not prove that one variable causes the other.`,
    goals: [
      "identify the explanatory (independent) and response (dependent) variables;",
      "draw a scatter diagram and describe the correlation (direction, strength, form);",
      "calculate and plot the mean point \\((\\bar x,\\bar y)\\);",
      "identify outliers and comment on their effect;",
      "distinguish correlation from causation and recognise lurking variables.",
    ],
    curriculum: "SL 4.4 (linear correlation of bivariate data; scatter diagrams; positive, zero, negative, strong, weak correlations; correlation does not imply causation)",
    prior: [
      ["Find the mean of 2, 5, 8, 9.", "6."],
      ["Plot the point (3, 7): which axis does 3 go on?", "The horizontal (x) axis."],
      ["Does a line with gradient −2 go up or down from left to right?", "Down."],
    ],
    words: [
      ["Bivariate data", "pairs (x, y) measured on the same individuals", "(height, mass)"],
      ["Explanatory variable", "x: the variable that may explain changes in the other", "hours studied"],
      ["Response variable", "y: the variable that responds", "test score"],
      ["Correlation", "how closely the points follow a straight line, and in which direction", "strong positive"],
      ["Mean point", "\\((\\bar x,\\bar y)\\)", "(166.5, 63.7)"],
    ],
  }),

  section("📌 Reading a scatter diagram", S`
  <p>Each individual is one point. Put the explanatory variable on the horizontal axis. Describe what you see in three words: the <em>direction</em> (positive: both increase; negative: one increases as the other decreases), the <em>strength</em> (how tightly the points cluster about a line) and the <em>form</em> (linear or not).</p>
  ${plane({ view: { xmin: 145, xmax: 188, ymin: 45, ymax: 85 }, step: { x: 5, y: 5 }, points: [...pts(HX, HY), P(mean(HX), mean(HY), "mean point", "amber")], xlabel: "height (cm)", ylabel: "mass (kg)" }, "Height and mass of 10 students: strong positive linear correlation")}
  ${plane({ view: { xmin: 0, xmax: 31, ymin: 30, ymax: 100 }, step: { x: 5, y: 10 }, points: pts(TX, TY), xlabel: "temperature (°C)", ylabel: "hot drinks sold" }, "Temperature and hot drinks sold: strong negative linear correlation")}
  ${table(["Pattern", "Description"], [["points close to an upward line", "strong positive"], ["loose upward cloud", "weak positive"], ["no pattern", "no correlation"], ["points close to a downward line", "strong negative"], ["a curve", "non-linear: linear correlation is not appropriate"]])}
  ${keyIdea(S`Describe correlation with direction + strength + form, in context: 'There is a strong negative linear correlation between temperature and the number of hot drinks sold.'`)}`),

  section("📌 Mean point, outliers and causation", S`
  <p>The mean point \((\bar x,\bar y)\) is the centre of the data; any line of best fit should pass through it. For the height data, \(\bar x=166.5\) and \(\bar y=63.7\).</p>
  ${plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 12 }, step: { x: 1, y: 1 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 2.5, 3.5, 4, 5, 5.5, 7, 7.5, 8.5]), P(3, 10, "outlier", "red")] }, "An outlier (red) far from the pattern of the other points")}
  ${plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, step: { x: 1, y: 1 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [9, 6, 4, 2.5, 2, 2, 2.5, 4, 6, 9]) }, "A strong non-linear relationship with almost zero linear correlation")}
  <p>A strong correlation does not mean that changing one variable changes the other. Ice-cream sales and drownings are positively correlated, but both are driven by a third, <em>lurking</em> variable: hot weather.</p>
  ${plane({ view: { xmin: 0, xmax: 110, ymin: 0, ymax: 22 }, step: { x: 10, y: 2 }, points: pts([20, 30, 45, 50, 60, 70, 80, 85, 95, 100], [3, 5, 6, 8, 10, 11, 14, 15, 17, 19], "green"), xlabel: "ice creams sold", ylabel: "drownings" }, "Correlated, but hot weather drives both")}
  ${watchOut([
    "Put the explanatory variable on the x-axis.",
    "Always mention the context, not just 'positive'.",
    "A curved pattern can have r near 0 but a strong relationship.",
    "Correlation is not causation: look for a lurking variable.",
  ])}`),

  section("📌 Explore", S`<p>Choose a data set and switch on the mean point. Points in the blue quadrants support a positive correlation, those in the red quadrants a negative one.</p>`),

  widget("ibScatter", { init: 0 }),

  examples([
    ["Level 1 · Variables", "A study records the number of hours of sleep and the reaction time of 20 drivers. Identify the explanatory and response variables.",
      ["Sleep may affect reaction time, not the other way round."],
      "explanatory: hours of sleep; response: reaction time"],
    ["Level 1 · Describe", "Describe the correlation shown.",
      ["Points slope down and lie fairly close to a line."],
      "strong negative linear correlation",
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 22 }, step: { x: 1, y: 2 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [20, 19, 16, 15, 13, 12, 9, 8, 6, 4]), xlabel: "age of car (years)", ylabel: "value (thousands)" })],
    ["Level 2 · Mean point", "Find the mean point of (2, 5), (4, 9), (5, 8), (7, 12), (12, 16).",
      [S`\(\bar x=\frac{30}{5}=6\); \(\bar y=\frac{50}{5}=10\).`],
      S`\((6,10)\)`,
      plane({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 18 }, step: { x: 1, y: 2 }, points: [...pts([2, 4, 5, 7, 12], [5, 9, 8, 12, 16]), P(6, 10, "(6, 10)", "amber")] })],
    ["Level 2 · Outlier", "A data set relating revision hours to test scores includes the point (2, 95). Explain whether it is an outlier and what might cause it.",
      ["The other points follow a positive trend; 2 hours with 95% is far above it.", "Possibly a student who already knew the material, or a recording error — check it."],
      "an outlier; investigate before removing"],
    ["Level 3 · Causation", "In towns, the number of churches and the number of crimes are strongly positively correlated. Does building churches cause crime? Explain.",
      ["No: both increase with the size of the town (population is the lurking variable).", "Correlation shows association, not cause."],
      "no — population is a lurking variable"],
  ]),

  practice([
    q("Level 1 · direction", "As temperature rises, heating bills fall. The correlation is:", choice(["negative", "positive", "zero", "non-linear"], 0),
      "One goes up, the other down.", ["Opposite directions: negative."], "negative"),
    q("Level 1 · mean x", "Find the mean x-value of (3, 7), (5, 9), (10, 14).", num(6),
      "Average of 3, 5, 10.", [S`\(\frac{18}{3}\).`], S`\(6\)`),
    q("Level 2 · mean y", "Find the mean y-value of (1, 4), (2, 7), (4, 8), (5, 13).", num(8),
      "Average of 4, 7, 8, 13.", [S`\(\frac{32}{4}\).`], S`\(8\)`),
    q("Level 2 · variables", "In a study of fertiliser amount and plant height, the response variable is:", choice(["plant height", "fertiliser amount", "time", "both"], 0),
      "Which one responds?", ["Height responds to fertiliser."], "plant height"),
    q("Level 2 · missing value", "The mean point of (2, a), (6, 10), (7, 12) is (5, 9). Find a.", num(5),
      "ȳ = 9.", [S`\(a+22=27\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Interpreting with context", "A scatter diagram of daily hours of screen time (x) against hours of sleep (y) for 30 teenagers shows a moderate negative linear correlation with one point at (1, 3). Describe the relationship and comment on the point.",
      ["As screen time increases, sleep tends to decrease, moderately consistently.", "(1, 3): low screen time but very little sleep — far from the trend; possibly illness or an error.", "It weakens the correlation; investigate it."],
      "moderate negative; (1, 3) is an outlier",
      plane({ view: { xmin: 0, xmax: 9, ymin: 2, ymax: 11 }, step: { x: 1, y: 1 }, points: [...pts([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8], [9.5, 9, 8, 9, 8.5, 7.5, 8, 7, 7.5, 6.5, 6, 6.5, 5.5]), P(1, 3, "(1, 3)", "red")], xlabel: "screen time (h)", ylabel: "sleep (h)" })],
    ["A mean point with unknowns", "Four points (1, 3), (3, k), (5, 9), (h, 11) have mean point (4, 7.5). Find h and k.",
      [S`\(\bar x\): \(9+h=16\Rightarrow h=7\).`, S`\(\bar y\): \(23+k=30\Rightarrow k=7\).`],
      S`\(h=7\), \(k=7\)`],
  ], [
    q("Level 3 · mean point", "Five points have mean point (8, 20). Four of them are (4, 12), (6, 18), (9, 21), (11, 25). Find the y-coordinate of the fifth point.", num(24),
      "Total of y = 100.", [S`\(100-76\).`], S`\(24\)`),
    q("Level 3 · fifth x", "For the same data (mean x 8), find the x-coordinate of the fifth point.", num(10),
      "Total of x = 40.", [S`\(40-30\).`], S`\(10\)`),
    q("Level 3 · lurking", "Shoe size and reading ability are positively correlated among primary-school children. The most likely lurking variable is:", choice(["age", "height", "shoe brand", "school"], 0),
      "What makes both increase?", ["Older children have bigger feet and read better."], "age"),
  ]),

  wrapUp({
    qas: [
      ["How do I choose which variable goes on the x-axis?", "The explanatory variable — the one that might explain or influence the other."],
      ["What three things describe a correlation?", "Direction (positive/negative), strength (strong/weak) and form (linear/non-linear)."],
      ["Why plot the mean point?", "It is the centre of the data; lines of best fit pass through it."],
      ["What should I do about an outlier?", "Check it: correct errors, keep genuine values, and say how it affects the correlation."],
      ["Does strong correlation prove cause?", "No — a third variable may drive both, or the link may be coincidence."],
    ],
    summary: [
      "Explanatory on x, response on y.",
      "Describe direction, strength, form in context.",
      "Mean point (x̄, ȳ).",
      "Outliers can distort correlation.",
      "Correlation ≠ causation.",
    ],
    next: "7.2 measures linear correlation with Pearson's correlation coefficient r.",
  }),
];
