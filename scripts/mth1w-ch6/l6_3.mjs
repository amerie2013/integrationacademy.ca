// MTH1W 6.3 — Scatter Plots & Correlation (self-study format): scatter plots, correlation, line of best fit,
// interpolation/extrapolation, correlation vs causation, describing graphs that tell a story
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { scatter } from "./figs6.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "6.3 Scatter Plots & Correlation";

const pos = [[1, 3], [2, 4.5], [3, 4], [4, 6], [5, 6.5], [6, 8], [7, 7.5], [8, 9.5]];
const neg = [[1, 9], [2, 8.5], [3, 7], [4, 6.5], [5, 5], [6, 4.5], [7, 3.5], [8, 2]];
const none = [[1, 5], [2, 8], [3, 3], [4, 6], [5, 4], [6, 8.5], [7, 2.5], [8, 6]];

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Scatter Plots & Correlation",
    overview: String.raw`Does studying more raise marks? Does a car lose value as it ages? A scatter plot shows two variables at once so you can see whether they are related. In this lesson you will describe the direction and strength of a relationship, draw a line of best fit, use its equation to make predictions, and learn why a relationship between two variables does not prove that one causes the other. You will also read graphs that tell a story, such as a trip on a distance–time graph.`,
    goals: [
      "identify the independent and dependent variables and draw a scatter plot;",
      "describe a correlation by its direction (positive, negative, none) and strength;",
      "draw a line of best fit and find its equation from two points on the line;",
      "make predictions by interpolation and extrapolation, and judge their reliability;",
      "explain the difference between correlation and causation;",
      "describe the situation shown by a distance–time graph.",
    ],
    curriculum: "D1.3 (two-variable data: scatter plots, correlation, lines of best fit), D2 (modelling with data), C1 (relations)",
    prior: [
      [String.raw`Slope through \((2, 10)\) and \((6, 22)\)?`, String.raw`\(\frac{12}{4}=3\).`],
      [String.raw`If \(y=3x+4\), find \(y\) at \(x=5\).`, String.raw`\(19\).`],
      ["Which variable goes on the horizontal axis?", "The independent variable."],
    ],
    words: [
      ["Scatter plot", "a graph of ordered pairs (x, y) for two variables", "hours vs mark"],
      ["Correlation", "a relationship between two variables", "positive, negative, none"],
      ["Line of best fit", "a straight line that passes through the middle of the points", "half above, half below"],
      ["Interpolation", "predicting inside the range of the data", "more reliable"],
      ["Extrapolation", "predicting beyond the data", "less reliable"],
      ["Causation", "one variable directly changes the other", "needs an experiment"],
    ],
  }),

  section("📌 Correlation: direction and strength", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px;">
  ${scatter({ pts: pos, view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 }, w: 230 }, "Positive: as x increases, y tends to increase.")}
  ${scatter({ pts: neg, view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 }, w: 230 }, "Negative: as x increases, y tends to decrease.")}
  ${scatter({ pts: none, view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 }, w: 230 }, "No correlation: no clear pattern.")}
  </div>
  ${keyIdea(String.raw`<strong>Strength</strong> describes how closely the points follow a line: <strong>strong</strong> (tight band), <strong>moderate</strong>, <strong>weak</strong> (loose cloud). The correlation coefficient \(r\) (between \(-1\) and \(1\)) measures it: near \(\pm1\) is strong, near \(0\) is none.`)}`),

  section("📌 The line of best fit", String.raw`
  <ol><li>Draw a straight line that follows the trend, with about as many points above as below. It does not have to pass through any data point.</li>
  <li>Choose two points <strong>on your line</strong> (not data points), far apart.</li>
  <li>Find the slope \(m=\frac{\Delta y}{\Delta x}\) and the intercept \(b\): the equation is \(y=mx+b\).</li></ol>
  <p>The slope is the rate in context: for study time and marks, “about \(4\) percentage points per extra hour”.</p>`),

  widget("scatterFit"),

  section("📌 Correlation is not causation", String.raw`
  <p>Ice-cream sales and swimming accidents are positively correlated — but ice cream does not cause accidents. Both increase in hot weather: temperature is a <strong>lurking (hidden) variable</strong>. Two variables can also be correlated by coincidence, or the cause can run the other way.</p>
  ${table(["Possible explanation", "Example"], [
    ["x causes y", "more hours of practice → more free throws made"],
    ["a lurking variable affects both", "shoe size and reading level in young children (both grow with age)"],
    ["coincidence", "two unrelated trends that happen to rise in the same years"],
    ["y causes x (reverse)", "fitter people exercise more because they enjoy it"],
  ])}
  ${keyIdea("To show causation you need a controlled experiment, not just a correlation.")}`),

  section("📌 Graphs that tell a story", String.raw`
  <p>A distance–time graph describes a trip: a rising segment means moving away, a flat segment means stopped, a falling segment means returning. The steepness is the speed.</p>
  ${plane({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 12 }, segs: [{ pts: [[0, 0], [15, 6], [25, 6], [35, 10], [60, 0]] }], step: { x: 10, y: 2 }, xlabel: "time (min)", ylabel: "distance from home (km)" }, "A bike ride: out 6 km, a 10-minute stop, on to 10 km, then home.")}
  ${watchOut([
    "A line of best fit is drawn through the trend, not dot-to-dot.",
    "Use points on the line, not data points, to find its equation.",
    "Extrapolating far beyond the data can give silly predictions.",
    "A strong correlation still does not prove cause and effect.",
  ])}`),

  examples([
    ["Describing a correlation", String.raw`A table gives the age of a used bike (years) and its price (dollars): \((1, 420)\), \((2, 360)\), \((3, 330)\), \((4, 260)\), \((5, 230)\), \((6, 170)\). Describe the correlation.`,
      ["Independent: age; dependent: price.", "As age increases, price decreases: negative.", "The points lie close to a line: strong."],
      "a strong negative correlation",
      scatter({ pts: [[1, 420], [2, 360], [3, 330], [4, 260], [5, 230], [6, 170]], view: { xmin: 0, xmax: 7, ymin: 0, ymax: 500 }, step: { x: 1, y: 100 }, xlabel: "age (years)", ylabel: "price ($)", w: 300 })],
    ["Equation of a line of best fit", String.raw`For the bike data, a line of best fit passes through \((1.5, 400)\) and \((5.5, 200)\). Find its equation and interpret the slope.`,
      [String.raw`\(m=\frac{200-400}{5.5-1.5}=\frac{-200}{4}=-50\).`, String.raw`\(400=-50(1.5)+b\Rightarrow b=475\).`, "The bike loses about 50 dollars of value per year."],
      String.raw`\(P=-50a+475\)`],
    ["Interpolate or extrapolate?", String.raw`Use \(P=-50a+475\) to predict the price of a bike that is (a) \(3.5\) years old, (b) \(12\) years old. Comment on each.`,
      [String.raw`(a) \(-50(3.5)+475=300\) dollars: interpolation (inside 1–6 years), reasonable.`, String.raw`(b) \(-50(12)+475=-125\) dollars: extrapolation, and a negative price is impossible — the trend cannot continue forever.`],
      String.raw`(a) \(300\) dollars (b) \(-125\) — not meaningful`],
    ["Correlation vs causation", "A study finds that students who eat breakfast have higher marks. Does breakfast cause higher marks? Suggest a lurking variable.",
      ["The data show a correlation, not a cause.", "A lurking variable could be home routines: families with regular routines may provide breakfast and also support homework and sleep.", "A controlled experiment would be needed to test causation."],
      "not proven; a possible lurking variable is family routine or sleep"],
    ["Reading a distance–time story", String.raw`In the bike-ride graph above, find the speed on each moving part, in km/min.`,
      [String.raw`0–15 min: \(6\div15=0.4\) km/min.`, String.raw`25–35 min: \(4\div10=0.4\) km/min.`, String.raw`35–60 min (home): \(10\div25=0.4\) km/min.`],
      "0.4 km/min on every moving part (a steady 24 km/h); stopped from 15 to 25 min"],
  ]),

  practice([
    q("correlation", "As the outside temperature increases, the cost of heating a home tends to decrease. This is…", choice(["a negative correlation", "a positive correlation", "no correlation", "causation proved"], 0),
      "One goes up while the other goes down.", ["Opposite directions: negative."], "negative"),
    q("slope", String.raw`A line of best fit passes through \((2, 58)\) and \((8, 82)\). Find its slope.`, num(4),
      "Slope = change in y ÷ change in x.", [String.raw`\(\frac{82-58}{8-2}=\frac{24}{6}=4\).`], String.raw`\(4\)`),
    q("predict", String.raw`A line of best fit is \(y=4x+50\), where \(x\) is hours studied (data from 1 to 9 hours). Predict the mark for \(6.5\) hours.`, num(76),
      "Substitute x = 6.5.", [String.raw`\(4(6.5)+50=26+50=76\).`], String.raw`\(76\)`),
    q("causation", "Towns with more fire trucks have more fire damage. The most likely explanation is…", choice(["a lurking variable: bigger towns have both more trucks and more fires", "fire trucks cause fire damage", "fire damage causes fire trucks", "it is impossible to explain"], 0),
      "Think of what affects both.", ["Town size drives both quantities."], "lurking variable (town size)"),
    q("story", String.raw`On a distance–time graph, a walker goes from \(0\) m to \(450\) m in \(5\) minutes. What is the speed in m/min?`, num(90),
      "Speed = distance ÷ time.", [String.raw`\(450\div5=90\).`], String.raw`\(90\) m/min`),
  ]),

  wrapUp({
    qas: [
      ["Why don't we just connect the dots?", "Real data have natural variation. Connecting the dots copies the noise; a line of best fit shows the underlying trend and lets you predict."],
      ["Can two people draw different lines of best fit?", "Yes, by eye the lines differ slightly, so predictions differ too. Technology finds the single line that makes the squared vertical distances smallest."],
      ["Why is extrapolation risky?", "We have no data there, and trends often change: a car's value cannot fall below zero; growth cannot continue forever."],
      ["What if the points follow a curve?", "Then a straight line is a poor model. A curve of best fit (6.4) may describe the relationship better."],
      ["How strong is “strong”?", "Roughly: |r| above 0.8 strong, 0.5–0.8 moderate, 0.25–0.5 weak, below 0.25 little or none. The picture matters as much as the number."],
    ],
    summary: [
      "Scatter plot: independent variable horizontal, dependent vertical.",
      "Correlation: positive, negative or none; strong, moderate or weak.",
      "Line of best fit through the middle of the points; equation from two points on the line.",
      "Interpolation is safer than extrapolation.",
      "Correlation ≠ causation: look for lurking variables.",
    ],
    next: "6.4 puts it all together in the mathematical modelling process.",
  }),
];
