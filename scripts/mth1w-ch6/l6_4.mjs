// MTH1W 6.4 — The Mathematical Modelling Process (self-study format): the modelling cycle, assumptions,
// linear and exponential models from data, testing and refining a model
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { scatter } from "./figs6.mjs";

export const TITLE = "6.4 The Mathematical Modelling Process";

const steps = ["1. Understand the problem", "2. Assumptions & variables", "3. Build the model", "4. Analyse & solve", "5. Interpret & check", "6. Refine & communicate"];
const cycle = () => {
  const cx = 280, cy = 170, rx = 190, ry = 125, bw = 190, bh = 40;
  const at = (i) => { const a = ((-90 + i * 60) * Math.PI) / 180; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; };
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 340" width="560" height="340" style="max-width:100%;height:auto;" font-family="Arial, sans-serif"><rect width="560" height="340" fill="#fff"/><defs><marker id="arr6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#15803d"/></marker></defs>`;
  steps.forEach((_, i) => {
    const [x1, y1] = at(i), [x2, y2] = at((i + 1) % 6);
    const t = 0.32, u = 0.68;
    s += `<line x1="${x1 + (x2 - x1) * t}" y1="${y1 + (y2 - y1) * t}" x2="${x1 + (x2 - x1) * u}" y2="${y1 + (y2 - y1) * u}" stroke="#15803d" stroke-width="2" marker-end="url(#arr6)"/>`;
  });
  steps.forEach((t, i) => {
    const [x, y] = at(i);
    s += `<rect x="${x - bw / 2}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="10" fill="#ecfdf5" stroke="#15803d" stroke-width="1.8"/><text x="${x}" y="${y + 5}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${t.replace("&", "&amp;")}</text>`;
  });
  s += `<text x="${cx}" y="${cy - 4}" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">repeat until the model</text><text x="${cx}" y="${cy + 16}" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">is good enough</text></svg>`;
  return `<div style="text-align:center;margin:12px 0;">${s}</div>`;
};

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "The Mathematical Modelling Process",
    overview: String.raw`A mathematical model is an equation, graph or table that represents a real situation so you can predict and decide. Real problems are messy: you must decide what matters, make assumptions, build a model, test it against reality and improve it. This lesson walks through that cycle with linear and exponential models built from data, and shows how to tell when a model has stopped making sense.`,
    goals: [
      "describe the six stages of the modelling process;",
      "state reasonable assumptions and identify the variables in a real problem;",
      "build a linear model from a constant rate and an exponential model from a constant ratio;",
      "use first differences and ratios to choose between linear and non-linear models;",
      "test a model's predictions, describe its limitations and refine it.",
    ],
    curriculum: "D2.1–D2.5 (the mathematical modelling process), C (relations)",
    prior: [
      [String.raw`First differences of \(5, 8, 11, 14\)?`, String.raw`\(3, 3, 3\): linear.`],
      [String.raw`Ratios of \(4, 8, 16, 32\)?`, String.raw`each term is \(\times2\).`],
      [String.raw`Evaluate \(200(1.5)^2\).`, String.raw`\(450\).`],
    ],
    words: [
      ["Model", "a mathematical description of a real situation", "\\(C=12n+40\\)"],
      ["Assumption", "something taken as true to make the problem manageable", "the price stays the same"],
      ["Variable", "a quantity that changes", "time, cost"],
      ["Validate", "check a model against real data or common sense", "does it predict known values?"],
      ["Refine", "improve a model after testing it", "add a fee, change the rate"],
    ],
  }),

  section("📌 The modelling cycle", String.raw`
  ${cycle()}
  ${table(["Stage", "Questions to ask"], [
    ["Understand", "What exactly is being asked? What information do I have, and what do I need?"],
    ["Assume", "What can I ignore or keep constant? Which variables matter? What units?"],
    ["Build", "Is the pattern linear (constant difference) or non-linear (constant ratio, curve)? Write an equation, table or graph."],
    ["Analyse", "Use the model to calculate the answer."],
    ["Interpret & check", "Does the answer make sense in context? Does the model match the data I have?"],
    ["Refine & communicate", "Improve the assumptions, then explain the result, the model and its limits."],
  ])}`),

  section("📌 Choosing a model from data", String.raw`
  ${table(["Pattern in the table (equal x-steps)", "Model", "Equation"], [
    ["constant first differences", "linear", "\\(y=mx+b\\)"],
    ["constant ratios (each y is the previous × r)", "exponential", "\\(y=a\\,r^x\\)"],
    ["constant second differences", "quadratic", "\\(y=ax^2+bx+c\\)"],
  ])}
  ${keyIdea(String.raw`A model is only as good as its assumptions. Every model has a <strong>domain</strong> where it works; outside it, predictions can become impossible (negative heights, coffee colder than the room).`)}
  <p>In the explorer, try each type of model on the cooling-coffee data. Which one matches the data <em>and</em> makes physical sense?</p>`),

  widget("modelFit"),

  section("📌 Strategy", watchOut([
    "Write your assumptions down — they are part of the answer.",
    "Check differences and ratios before choosing a linear model.",
    "Test the model on a known data point before trusting a prediction.",
    "State the domain where the model is reasonable.",
  ])),

  examples([
    ["Understanding and assumptions", String.raw`A class is planning an end-of-year party. Estimate the cost of pizza for the class. List the variables and assumptions you would use.`,
      ["Variables: number of students (\\(n\\)), slices per student, slices per pizza, price per pizza.", "Assumptions: \\(30\\) students; each eats \\(3\\) slices; a pizza has \\(8\\) slices and costs \\(18\\) dollars; no delivery fee.", String.raw`Model: pizzas \(=\lceil\frac{3n}{8}\rceil\); \(n=30\): \(90\div8=11.25\), so \(12\) pizzas; cost \(12\times18=216\) dollars.`],
      String.raw`about \(216\) dollars, under the stated assumptions`],
    ["A linear model from data", String.raw`A phone's battery reads \(100\%\) at noon, \(88\%\) at 2 p.m., \(76\%\) at 4 p.m. and \(64\%\) at 6 p.m. Build a model and predict when it reaches \(10\%\).`,
      [String.raw`Every 2 hours it drops \(12\%\): a constant rate of \(6\%\) per hour (linear).`, String.raw`Model: \(B=100-6t\) (\(t\) hours after noon).`, String.raw`\(100-6t=10\Rightarrow t=15\): at 3 a.m.`],
      String.raw`\(B=100-6t\); about 3 a.m. (assuming the same use all night)`,
      scatter({ pts: [[0, 100], [2, 88], [4, 76], [6, 64]], view: { xmin: 0, xmax: 16, ymin: 0, ymax: 110 }, step: { x: 2, y: 20 }, xlabel: "hours after noon", ylabel: "battery (%)", line: { m: -6, b: 100, dash: true }, w: 320 })],
    ["Linear or exponential?", String.raw`A town's population was \(12\,000\), \(12\,600\), \(13\,230\) and \(13\,892\) in four consecutive years. Choose a model and predict the population \(5\) years after the first reading.`,
      [String.raw`Differences: \(600, 630, 662\) — not constant.`, String.raw`Ratios: \(\frac{12\,600}{12\,000}=1.05\), \(\frac{13\,230}{12\,600}=1.05\): constant, so exponential.`, String.raw`\(P=12\,000(1.05)^t\); \(t=5\): \(12\,000(1.05)^5\approx15\,315\).`],
      String.raw`\(P=12\,000(1.05)^t\); about \(15\,300\)`],
    ["When a model breaks down", String.raw`A linear model for a cooling drink is \(T=85-4t\) (°C, minutes). The room is \(20\) °C. Use it to predict the temperature after \(20\) minutes. Is the prediction reasonable?`,
      [String.raw`\(T=85-4(20)=5\) °C.`, "A drink cannot cool below room temperature (20 °C), so the model fails here.", "Refine: an exponential model that levels off at 20 °C, such as \\(T=20+65(0.9)^t\\)."],
      String.raw`\(5\) °C — not reasonable; use a model that levels off at room temperature`],
    ["A full modelling task", String.raw`A school wants to replace its \(48\) classroom light fixtures (each uses \(120\) W) with LED fixtures (each uses \(40\) W) that cost \(95\) dollars each. Electricity costs \(0.13\) dollars per kWh and lights are on \(8\) h a day, \(190\) days a year. How long until the switch pays for itself?`,
      [String.raw`Savings per fixture per year: \(80\) W \(\times8\times190=121\,600\) Wh \(=121.6\) kWh; \(121.6\times0.13\approx15.81\) dollars.`, String.raw`For \(48\) fixtures: \(\approx758.78\) dollars per year; cost \(48\times95=4560\) dollars.`, String.raw`Payback \(=4560\div758.78\approx6.0\) years.`, "Assumptions: same hours each year, constant price, no installation cost — the answer changes if these do."],
      "about 6 years, under the stated assumptions"],
  ]),

  practice([
    q("exponential", String.raw`A model is \(y=300(1.2)^x\). Find \(y\) when \(x=3\).`, num(518.4),
      "Multiply by 1.2 three times.", [String.raw`\(300\times1.728=518.4\).`], String.raw`\(518.4\)`),
    q("rate", String.raw`A tank holds \(500\) L at \(t=0\) and \(380\) L at \(t=8\) min, draining at a constant rate. Find the rate (L/min).`, num(15),
      "Change ÷ time.", [String.raw`\(120\div8=15\).`], String.raw`\(15\) L/min`),
    q("predict", String.raw`Using \(V=500-15t\), when will the tank be empty (minutes, 1 decimal place)?`, num(33.3, 0.06),
      "Set V = 0.", [String.raw`\(15t=500\Rightarrow t\approx33.3\).`], String.raw`\(\approx33.3\) min`),
    q("model type", String.raw`Which model fits \(x: 0,1,2,3\), \(y: 5, 15, 45, 135\)?`, choice(["exponential", "linear", "quadratic", "none"], 0),
      "Check differences and ratios.", ["Each y is 3 times the last: constant ratio."], "exponential"),
    q("assumption", "A model predicts next year's school enrolment from this year's growth rate. Which is an assumption of the model?", choice(["the growth rate stays the same", "enrolment is a whole number", "the school has a name", "students attend classes"], 0),
      "What is being taken as true about the future?", ["The model assumes the past rate continues."], "the rate stays the same"),
  ]),

  wrapUp({
    qas: [
      ["Is there one correct model?", "No. Different reasonable assumptions give different models. A good model is simple, fits the data, makes sense in context and states its limits."],
      ["Why are assumptions so important?", "They decide what the model includes. If an assumption is wrong (prices rise, usage changes), the prediction will be wrong too — so state them clearly."],
      ["How do I know the model is good enough?", "Test it: compare its predictions with real data or common sense. If errors are small for the purpose, it is good enough; if not, refine it."],
      ["What does “refine” mean in practice?", "Change an assumption or the type of model: add a fixed fee, use a curve instead of a line, split the problem into cases."],
      ["Where are models used?", "Weather forecasts, disease spread, budgets, traffic lights, sports analytics, climate projections — anywhere decisions depend on predictions."],
    ],
    summary: [
      "Cycle: understand → assume → build → analyse → interpret and check → refine and communicate.",
      "Constant differences → linear; constant ratios → exponential.",
      "Test every model; know its domain and limitations.",
      "State assumptions as part of the answer.",
    ],
    next: "6.5 reviews the whole chapter.",
  }),
];
