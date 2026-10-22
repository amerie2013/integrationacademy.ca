// IB AA SL 7.2 — Pearson's Correlation Coefficient: meaning and range of r, calculation (by hand and GDC), interpretation, effect of outliers and scaling, limitations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.2 Pearson's Correlation Coefficient";
export const ID = "1baa0007-0001-4001-8001-000000000702";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Pearson's Correlation Coefficient",
    overview: S`Words like 'strong' and 'weak' are useful but vague. Pearson's product-moment correlation coefficient \(r\) measures the strength and direction of a <em>linear</em> relationship with a single number between \(-1\) and \(1\). In this lesson you will calculate \(r\) by hand for small data sets and with a GDC, interpret its value, see how outliers and changes of units affect it, and recognise when \(r\) is the wrong tool.`,
    goals: [
      "state the range and meaning of Pearson's \\(r\\);",
      "calculate \\(r=\\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}\\) for a small data set and with a GDC;",
      "interpret \\(r\\) in words and in context;",
      "describe the effect of outliers and of linear changes of units on \\(r\\);",
      "explain why \\(r\\) measures only linear association and does not show causation.",
    ],
    curriculum: "SL 4.4 (Pearson's product-moment correlation coefficient r; use of GDC to calculate r; interpretation of r; correlation does not imply causation)",
    prior: [
      ["Find the mean of 1, 2, 3, 4, 5.", "3."],
      [S`Evaluate \((-2)(-1)+0+(1)(2)\).`, "4."],
      ["Describe a scatter diagram whose points rise steeply and lie almost on a line.", "Strong positive linear correlation."],
    ],
    words: [
      ["Pearson's r", "measure of linear correlation, \\(-1\\le r\\le1\\)", "\\(r=0.87\\)"],
      ["\\(S_{xy}\\)", "\\(\\sum(x-\\bar x)(y-\\bar y)\\)", "10"],
      ["\\(S_{xx}\\), \\(S_{yy}\\)", "\\(\\sum(x-\\bar x)^2\\), \\(\\sum(y-\\bar y)^2\\)", "10, 13.2"],
      ["Perfect correlation", "\\(r=\\pm1\\): all points on a line", "\\(r=-1\\)"],
      ["No linear correlation", "\\(r\\approx0\\)", "random cloud"],
    ],
  }),

  section("📌 What r measures", S`
  <p>For each point, \((x-\bar x)(y-\bar y)\) is positive in the top-right and bottom-left quadrants around the mean point, negative in the other two. Their total \(S_{xy}\) is large and positive for a positive trend; dividing by \(\sqrt{S_{xx}S_{yy}}\) scales it to lie between \(-1\) and \(1\).</p>
  <p style="text-align:center">\(r=\dfrac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}=\dfrac{\sum(x-\bar x)(y-\bar y)}{\sqrt{\sum(x-\bar x)^2\sum(y-\bar y)^2}}\)</p>
  ${table(["|r|", "Description"], [["0.75 ≤ |r| ≤ 1", "strong"], ["0.5 ≤ |r| < 0.75", "moderate"], ["0.25 ≤ |r| < 0.5", "weak"], ["0 ≤ |r| < 0.25", "very weak / none"]])}
  ${plane({ view: { xmin: 0, xmax: 10, ymin: 40, ymax: 85 }, step: { x: 1, y: 5 }, points: pts([2, 3, 4, 5, 6, 7, 8, 9], [48, 55, 53, 62, 66, 70, 75, 79]), xlabel: "hours studied", ylabel: "score" }, "r = 0.987: strong positive linear correlation")}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 15, ymax: 42 }, step: { x: 1, y: 5 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8], [40, 36, 35, 30, 27, 25, 20, 18], "green") }, "r = −0.995: strong negative linear correlation")}
  ${keyIdea(S`The sign of \(r\) gives the direction; its size gives the strength of the <em>linear</em> relationship. In exams, find \(r\) with the GDC and interpret it in context.`)}`),

  section("📌 Outliers, units and limitations", S`
  <p>Because \(r\) uses every point, a single outlier can change it a lot. Changing units (for example cm to m, or °C to °F) does not change \(r\): the pattern of points is only stretched or shifted.</p>
  ${plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 3.5, 5, 5.5, 6, 7.5, 8, 9]), P(11, 1, "outlier", "red")] }, "Without the red point r ≈ 0.995; with it r drops to about 0.36")}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, points: pts([-3, -2, -1, 0, 1, 2, 3], [9, 4, 1, 0, 1, 4, 9], "amber") }, "y = x²: a perfect relationship, but r = 0 — it is not linear")}
  ${watchOut([
    "r near 0 means no linear correlation — there may still be a curved relationship.",
    "Always look at the scatter diagram before quoting r.",
    "Changing units or swapping x and y does not change r.",
    "A large |r| does not prove causation.",
  ])}`),

  section("📌 Explore", S`<p>Choose a trend and increase the scatter. Then drag the red 11th point away from the pattern and watch \(r\) change.</p>`),

  widget("ibPearson", { init: [1, 1, 5] }),

  examples([
    ["Level 1 · Interpret r", S`For data on outdoor temperature and electricity use, \(r=-0.82\). Interpret this.`,
      ["Negative: higher temperatures go with lower electricity use.", "|r| = 0.82: strong linear correlation."],
      "strong negative linear correlation"],
    ["Level 1 · Match", S`Match \(r=0.95\), \(r=0.1\) and \(r=-0.6\) to the descriptions strong positive, moderate negative, very weak.`,
      ["Use the size for strength, the sign for direction."],
      "0.95 strong positive; −0.6 moderate negative; 0.1 very weak"],
    ["Level 2 · By hand", S`Calculate \(r\) for (1, 2), (2, 4), (3, 5), (4, 4), (5, 7).`,
      [S`\(\bar x=3\), \(\bar y=4.4\).`, S`\(S_{xy}=10\), \(S_{xx}=10\), \(S_{yy}=13.2\).`, S`\(r=\frac{10}{\sqrt{132}}\approx0.870\).`],
      S`\(r\approx0.870\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 8 }, step: { x: 1, y: 1 }, points: [...pts([1, 2, 3, 4, 5], [2, 4, 5, 4, 7]), P(3, 4.4, "(3, 4.4)", "amber")], vlines: [{ x: 3, color: "amber", dash: true }], lines: [{ m: 0, b: 4.4, color: "amber", dash: true }] })],
    ["Level 2 · Units", S`Arm spans and heights of 7 people (in cm) give \(r=0.994\). What is \(r\) if both are measured in metres? And if the variables are swapped?`,
      ["Dividing by 100 rescales both axes; the pattern is unchanged.", "Swapping x and y gives the same r (the formula is symmetric)."],
      "0.994 in both cases"],
    ["Level 3 · Evaluate", S`A study of 12 countries finds \(r=0.91\) between chocolate consumption per person and the number of Nobel prizes per million people. Evaluate the claim 'eating chocolate makes you a Nobel prize winner'.`,
      ["r = 0.91 shows a strong positive linear association between the country-level figures.", "It does not show cause: wealth is a likely lurking variable affecting both.", "Country averages say nothing about individuals; only 12 points."],
      "association, not causation",
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 33 }, step: { x: 1, y: 5 }, points: pts([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11.5, 12], [1, 3, 4, 8, 7, 12, 15, 18, 20, 24, 26, 31], "green"), xlabel: "chocolate (kg/person)", ylabel: "Nobel prizes" })],
  ]),

  practice([
    q("Level 1 · range", "Which value cannot be a correlation coefficient?", choice(["1.2", "−0.98", "0", "0.45"], 0),
      "−1 ≤ r ≤ 1.", ["1.2 > 1."], "1.2"),
    q("Level 1 · strongest", "Which r shows the strongest linear correlation?", choice(["−0.91", "0.85", "0.5", "−0.2"], 0),
      "Compare |r|.", ["|−0.91| is largest."], "−0.91"),
    q("Level 2 · calculate", S`For a data set, \(S_{xy}=24\), \(S_{xx}=16\), \(S_{yy}=50\). Find \(r\) (3 d.p.).`, num(0.849, 0.001),
      "r = Sxy/√(Sxx Syy).", [S`\(\frac{24}{\sqrt{800}}\).`], S`\(0.849\)`),
    q("Level 2 · units", S`Masses in kg and heights in cm give \(r=0.78\). Masses are converted to pounds. The new \(r\) is:`, num(0.78, 0.001),
      "Changing units does not change r.", ["The pattern is only rescaled."], S`\(0.78\)`),
    q("Level 2 · interpret", S`\(r=-0.35\) describes:`, choice(["weak negative linear correlation", "strong negative linear correlation", "weak positive correlation", "no relationship of any kind"], 0),
      "Size 0.35, negative sign.", ["0.25 ≤ 0.35 < 0.5: weak."], "weak negative"),
  ]),

  ...hard([
    ["r from summary data", S`For 6 pairs, \(\sum x=21\), \(\sum y=46\), \(\sum xy=195\), \(\sum x^2=91\), \(\sum y^2=420\). Using \(S_{xy}=\sum xy-\frac{\sum x\sum y}{n}\) and similar for \(S_{xx}\), \(S_{yy}\), find \(r\).`,
      [S`\(S_{xy}=195-\frac{966}{6}=34\); \(S_{xx}=91-73.5=17.5\); \(S_{yy}=420-\frac{2116}{6}\approx67.33\).`, S`\(r=\frac{34}{\sqrt{17.5\times67.33}}\approx0.991\).`],
      S`\(r\approx0.991\)`],
    ["The effect of one point", "Ten points lie close to a line with r = 0.97. An eleventh point, far below the line, is added and r becomes 0.62. Explain why, and what should be done.",
      ["r uses every deviation from the means; one extreme point adds large negative products (x − x̄)(y − ȳ).", "Check whether the point is an error or a genuine but unusual case; report r with and without it."],
      "one outlier can greatly reduce r",
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4.5, 6, 7, 7.5, 9, 10, 11]), P(11, 2, "added point", "red")] }, "The red point lowers r sharply")],
  ], [
    q("Level 3 · from sums", S`For 5 pairs, \(S_{xy}=-18\), \(S_{xx}=10\), \(S_{yy}=40\). Find \(r\).`, num(-0.9, 0.001),
      "r = −18/√400.", [S`\(-\frac{18}{20}\).`], S`\(-0.9\)`),
    q("Level 3 · perfect line", S`All points lie on \(y=7-2x\). Find \(r\).`, num(-1),
      "Perfect negative linear relationship.", [S`\(r=-1\).`], S`\(-1\)`),
    q("Level 3 · parabola", S`Points \((-2,4),(-1,1),(0,0),(1,1),(2,4)\) lie on \(y=x^2\). Find \(S_{xy}\).`, num(0),
      "x̄ = 0, ȳ = 2.", [S`\(\sum x(y-2)=-4+1+0-1+4\).`], S`\(0\)`),
  ]),

  wrapUp({
    qas: [
      ["What does r tell me?", "The direction (sign) and strength (size) of a linear relationship, on a scale from −1 to 1."],
      ["Do I need to calculate r by hand?", "Usually the GDC gives it; the formula helps you understand it and handle summary-statistics questions."],
      ["Can r be 0 when the variables are related?", "Yes — for a curved relationship such as y = x²."],
      ["Does changing units change r?", "No: rescaling or shifting either variable leaves r unchanged (unless one is multiplied by a negative number)."],
      ["Why should I look at the graph first?", "Outliers and curves can make r misleading."],
    ],
    summary: [
      "−1 ≤ r ≤ 1; sign = direction, size = strength.",
      "r = Sxy/√(Sxx Syy); GDC in exams.",
      "|r| ≥ 0.75 strong, 0.5–0.75 moderate, 0.25–0.5 weak.",
      "Outliers can change r a lot; units do not.",
      "r is linear only and is not causation.",
    ],
    next: "7.3 fits a line of best fit and uses regression to make predictions.",
  }),
];
