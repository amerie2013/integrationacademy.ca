// Worksheet 6.3 — Scatter Plots & Correlation (teacher edition)
import { scatterT, planeT } from "./figT.mjs";

const arm = [[150, 148], [155, 156], [158, 155], [162, 163], [165, 166], [168, 165], [171, 173], [175, 174], [178, 180], [182, 181]];

const EXAMPLES = [
  { title: "Choosing variables", q: "For each pair, name the independent and dependent variable: (a) hours of sunlight and plant height; (b) price of a ticket and number sold; (c) age of a tree and its trunk diameter.",
    steps: ["(a) Independent: sunlight; dependent: plant height.", "(b) Independent: price; dependent: tickets sold.", "(c) Independent: age; dependent: diameter."], ans: "the cause/control variable is independent" },
  { title: "Drawing and describing a scatter plot", q: "Height and arm span (cm) of 10 students are plotted. Describe the correlation.",
    fig: scatterT({ pts: arm, view: { xmin: 145, xmax: 185, ymin: 145, ymax: 185 }, step: { x: 5, y: 5 }, xlabel: "height (cm)", ylabel: "arm span (cm)" }, 6),
    steps: ["As height increases, arm span increases: positive.", "The points lie very close to a line: strong."], ans: "strong positive correlation" },
  { title: "Equation of a line of best fit", q: String.raw`A line of best fit for the arm-span data passes through $(152, 151)$ and $(180, 179)$. Find its equation.`,
    steps: [String.raw`$m=\frac{179-151}{180-152}=\frac{28}{28}=1$.`, String.raw`$151=1(152)+b\Rightarrow b=-1$; $y=x-1$.`], ans: String.raw`$y=x-1$: arm span is about 1 cm less than height` },
  { title: "Predicting", q: String.raw`Use $y=x-1$ to predict the arm span of a student $160$ cm tall and of a basketball player $210$ cm tall. Which prediction is more reliable?`,
    steps: [String.raw`$160-1=159$ cm: interpolation (inside 150–182).`, String.raw`$210-1=209$ cm: extrapolation, far outside the data — less reliable.`], ans: "159 cm (reliable); 209 cm (extrapolation)" },
  { title: "Working backward", q: String.raw`Using $y=x-1$, how tall would a student with arm span $170$ cm be?`,
    steps: [String.raw`$170=x-1\Rightarrow x=171$ cm.`], ans: "about 171 cm" },
  { title: "Strength without a number", q: "Rank three data sets from strongest to weakest correlation: A — points in a tight band rising left to right; B — points in a loose cloud falling left to right; C — points in a medium-width band falling.",
    steps: ["A: strong positive.", "C: moderate negative.", "B: weak negative.", "Strength ignores direction."], ans: "A, C, B" },
  { title: "Lurking variables", q: "Cities with more libraries have more crime. Suggest a lurking variable and explain.",
    steps: ["Population: large cities have more of everything — libraries and crimes.", "Compare rates per 1000 people instead of totals."], ans: "population size" },
  { title: "Describing a distance–time graph", q: "Describe the walk shown, including speeds.",
    fig: planeT({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 2000 }, segs: [{ pts: [[0, 0], [10, 800], [15, 800], [25, 2000], [40, 2000]] }], step: { x: 5, y: 400 }, xlabel: "time (min)", ylabel: "distance (m)" }, 6),
    steps: ["0–10 min: walks away at 80 m/min.", "10–15 min: stopped at 800 m.", "15–25 min: walks away faster, 120 m/min, to 2000 m.", "25–40 min: stopped at 2000 m."], ans: "as described" },
  { title: "Non-linear trend", q: String.raw`A plot of car speed (km/h) and stopping distance (m) curves upward: $(20, 6)$, $(40, 18)$, $(60, 36)$, $(80, 60)$, $(100, 90)$. Is a line of best fit appropriate?`,
    steps: ["Differences in distance grow: 12, 18, 24, 30.", "The relationship is non-linear (curves upward): a curve of best fit is better."], ans: "no — use a curve" },
];

const PROBLEMS = [
  { level: 1, q: "Describe the correlation you would expect: (a) hours of TV and marks; (b) age of a car and its value; (c) a person's birth month and height.", recap: "Expected correlations.", ans: "(a) weak negative (b) strong negative (c) none" },
  { level: 1, q: String.raw`Find the slope of a line of best fit through $(4, 30)$ and $(12, 70)$.`, recap: "Slope through (4, 30), (12, 70).", ans: "$5$" },
  { level: 1, q: String.raw`A line of best fit is $y=3.5x+12$. Predict $y$ when $x=8$.`, recap: "y = 3.5x + 12 at x = 8.", ans: "$40$" },
  { level: 2, q: String.raw`Data: $(1, 15)$, $(2, 21)$, $(3, 24)$, $(4, 31)$, $(5, 34)$, $(6, 40)$. Plot the points, draw a line of best fit and find its equation.`, recap: "Six points: line of best fit.", space: 5, ans: String.raw`about $y=5x+10$ (through e.g. $(1, 15)$ and $(6, 40)$)` },
  { level: 2, q: String.raw`For the line $y=-2.4x+96$ (minutes of battery left vs. minutes of gaming, $0\le x\le30$), predict the battery left after $15$ min and after $50$ min. Comment.`, recap: "Battery model.", ans: String.raw`$60$; $-24$ — impossible: extrapolation beyond the data` },
  { level: 2, q: "Explain the difference between interpolation and extrapolation, with an example of each.", recap: "Interpolation vs extrapolation.", ans: "inside vs outside the data range; extrapolation is less reliable" },
  { level: 2, q: "A study finds that students who sleep more have higher marks. Give two possible explanations other than “sleep causes higher marks”.", recap: "Sleep and marks.", ans: "lurking variable (healthy routines, less stress, less part-time work); reverse (students who keep up with work can go to bed earlier)" },
  { level: 2, q: String.raw`A cyclist's distance–time graph rises from $0$ km to $9$ km in $30$ min, is flat for $10$ min, then falls to $0$ in $20$ min. Find each speed in km/h.`, recap: "Cyclist speeds.", ans: "18 km/h; 0; 27 km/h" },
  { level: 3, space: 5, q: String.raw`Ice cream sales (\$) and temperature (°C): $(14, 210)$, $(17, 260)$, $(20, 300)$, $(23, 390)$, $(26, 420)$, $(29, 490)$, $(32, 540)$.
(a) Draw a scatter plot and describe the correlation.
(b) Find an equation of a line of best fit.
(c) Predict sales at $25$ °C and at $40$ °C. Which is more reliable?`, recap: "Ice cream sales.", ans: String.raw`(a) strong positive (b) about $y=18.5x-50$ (c) $\approx412$; $\approx690$ — extrapolation, less reliable` },
  { level: 3, space: 5, q: String.raw`Two students draw lines of best fit for the same data: $y=4x+20$ and $y=3.5x+24$. Predict $y$ at $x=8$ and at $x=40$ with both. Why do the predictions agree better at $x=8$?`, recap: "Two lines of best fit.", ans: String.raw`$x=8$: $52$ and $52$; $x=40$: $180$ and $164$; the lines cross near the data and spread apart further away` },
  { level: 3, space: 5, q: "Design an investigation to test whether reaction time is related to hours of sleep. State the variables, how you would collect data, the graph you would draw and how you would decide whether there is a relationship.", recap: "Design a two-variable study.", ans: "independent: hours of sleep; dependent: reaction time; ruler-drop test for ~20 students; scatter plot; look for direction and strength; note correlation is not causation" },
  { level: 3, space: 5, q: String.raw`Sketch a distance–time graph for: Maya walks $600$ m to a store in $8$ min, shops for $12$ min, then jogs home in $4$ min. Find her speed each way and her average speed for the whole trip (including shopping).`, recap: "Maya's trip.", ans: String.raw`$75$ m/min; $150$ m/min; average $1200\div24=50$ m/min` },
  { level: 3, space: 5, q: String.raw`Explain why the points $(1, 2)$, $(2, 8)$, $(3, 18)$, $(4, 32)$ should not be modelled with a line of best fit, and suggest a better model.`, recap: "A curved pattern.", ans: String.raw`differences $6, 10, 14$ grow (second differences $4$): quadratic, $y=2x^2$` },
];

export const WS = {
  code: "6.3",
  title: "Scatter Plots & Correlation",
  bigideas: String.raw`A scatter plot shows whether two variables are related. A correlation has a \textbf{direction} (positive, negative or none) and a \textbf{strength} (strong, moderate, weak). A line of best fit summarizes a linear trend; its equation, found from two points on the line, lets us predict --- reliably by interpolation, cautiously by extrapolation. Correlation alone never proves causation: look for lurking variables. Graphs such as distance--time graphs also tell stories that can be read segment by segment.`,
  goals: ["Choose independent and dependent variables.", "Describe correlation.", "Draw a line of best fit and find its equation.", "Interpolate and extrapolate.", "Distinguish correlation from causation.", "Interpret distance--time graphs."],
  curriculum: "D1.3, D2, C1",
  vocab: [["Correlation", "a relationship between two variables"], ["Line of best fit", "trend line through the middle of the points"], ["Interpolation / extrapolation", "predicting inside / outside the data"], ["Lurking variable", "a hidden variable affecting both"]],
  hook: String.raw`Measure the height and arm span of a few volunteers and plot them live on the board. Ask: “What do you notice? Could you predict someone's arm span from their height?”`,
  concepts: [
    ["1. Correlation", String.raw`Positive: both increase. Negative: one increases as the other decreases. None: no pattern. Strength = how tightly the points follow a line.`],
    ["2. Line of best fit", String.raw`About half the points above and half below; use two points on the line: $m=\frac{y_2-y_1}{x_2-x_1}$, then $b=y-mx$.
${scatterT({ pts: [[1, 4], [2, 5], [3, 7.5], [4, 7], [5, 9.5], [6, 10]], view: { xmin: 0, xmax: 7, ymin: 0, ymax: 12 }, step: { x: 1, y: 2 }, line: { m: 1.3, b: 2.7, dash: true } }, 5)}`],
    ["3. Causation and stories", String.raw`Correlation $\ne$ causation (lurking variables, coincidence, reverse cause). Distance--time: rising = away, flat = stopped, falling = returning; steepness = speed.`],
  ],
  tips: ["Students often join dots instead of drawing a trend line.", "Use points on the line, not data points, for the equation.", "Ask “Is that prediction inside the data?” every time.", "Have students invent their own lurking-variable examples.", "Check units of speed on distance–time graphs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
