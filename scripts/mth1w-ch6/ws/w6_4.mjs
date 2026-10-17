// Worksheet 6.4 — The Mathematical Modelling Process (teacher edition)
import { scatterT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Stating assumptions", q: "Estimate how many litres of water your household uses for showers in a year. List your assumptions.",
    steps: ["Assume 4 people, one 8-minute shower each per day, shower head flow 9 L/min.", String.raw`Per day: $4\times8\times9=288$ L.`, String.raw`Per year: $288\times365=105\,120$ L.`], ans: "about 105 000 L under these assumptions" },
  { title: "Linear model from a rate", q: String.raw`A taxi charges a \$$4.50$ base fare plus \$$1.85$ per km. Write a model and find the cost of a $12$ km trip.`,
    steps: [String.raw`$C=1.85d+4.5$.`, String.raw`$C=1.85(12)+4.5=26.70$ dollars.`], ans: "26.70 dollars" },
  { title: "Linear model from data", q: String.raw`A candle's height (cm) at times $0, 1, 2, 3$ h is $24, 21.5, 19, 16.5$. Build a model and find when it burns out.`,
    steps: [String.raw`Differences $-2.5$ each hour: linear, $H=24-2.5t$.`, String.raw`$24-2.5t=0\Rightarrow t=9.6$ h.`], ans: String.raw`$H=24-2.5t$; about $9.6$ h` },
  { title: "Exponential model from data", q: String.raw`A bacteria culture has $400$, $600$, $900$, $1350$ cells after $0, 1, 2, 3$ hours. Build a model and predict the count after $6$ hours.`,
    steps: [String.raw`Ratios $1.5$ each hour: exponential, $N=400(1.5)^t$.`, String.raw`$N(6)=400(1.5)^6\approx4556$.`], ans: String.raw`$N=400(1.5)^t$; about $4556$` },
  { title: "Choosing between models", q: String.raw`Which model fits $x: 0, 1, 2, 3, 4$ and $y: 3, 5, 11, 21, 35$: linear, quadratic or exponential?`,
    steps: [String.raw`First differences: $2, 6, 10, 14$ — not constant.`, String.raw`Second differences: $4, 4, 4$ — constant: quadratic.`, String.raw`Ratios $1.67, 2.2, 1.9,\ldots$ are not constant.`], ans: "quadratic" },
  { title: "Testing a model", q: String.raw`A model for a plant's height is $h=2.8w+5$ (cm, weeks). Measured heights: week $3$: $13.2$ cm; week $6$: $22.0$ cm; week $10$: $28.5$ cm. Test the model.`,
    steps: [String.raw`Predictions: $13.4$, $21.8$, $33.0$ cm.`, "Weeks 3 and 6 are close; week 10 is 4.5 cm too high.", "The plant's growth slows: the linear model works only for the first weeks."], ans: "good early, poor later — refine" },
  { title: "Refining a model", q: String.raw`A phone plan model $C=0.10m$ (dollars, minutes) gave a bill of \$$30$ for $300$ min, but the real bill was \$$45$. The company charges a monthly fee. Refine the model.`,
    steps: [String.raw`Difference $45-30=15$: a fixed fee of \$$15$.`, String.raw`Refined model $C=0.10m+15$.`], ans: String.raw`$C=0.10m+15$` },
  { title: "Modelling with a graph", q: "Data on a cooling pie (°C vs min) are plotted with a model. Comment on the fit.",
    fig: scatterT({ pts: [[0, 180], [5, 140], [10, 110], [15, 88], [20, 72], [30, 50], [40, 38]], view: { xmin: 0, xmax: 45, ymin: 0, ymax: 200 }, step: { x: 5, y: 20 }, xlabel: "time (min)", ylabel: "T (°C)", curve: (t) => 22 + 158 * 0.95 ** t }, 6),
    steps: ["The curve passes close to every point.", "It levels off at about 22 °C (room temperature), which makes physical sense.", "Exponential decay toward room temperature is a good model."], ans: "a good fit with a sensible long-run value" },
  { title: "Communicating a result", q: String.raw`Using $N=400(1.5)^t$ from Example 4, write a short report predicting when the culture passes $10\,000$ cells.`,
    steps: [String.raw`Try values: $t=7$: $\approx6834$; $t=8$: $\approx10\,252$.`, "Report: “If growth continues at 50% per hour, the culture will pass 10 000 cells between 7 and 8 hours. Growth will slow as nutrients run out, so this is an upper estimate.”"], ans: "between 7 and 8 hours, with the limitation stated" },
];

const PROBLEMS = [
  { level: 1, q: "Put the modelling stages in order: interpret and check; build the model; understand the problem; refine and communicate; make assumptions; analyse.", recap: "Order the stages.", ans: "understand, assumptions, build, analyse, interpret/check, refine/communicate" },
  { level: 1, q: String.raw`Decide whether each table is linear or exponential: (a) $10, 13, 16, 19$ (b) $10, 20, 40, 80$ (c) $81, 27, 9, 3$.`, recap: "Linear or exponential?", ans: "(a) linear (b) exponential (c) exponential" },
  { level: 1, q: String.raw`Evaluate $250(1.08)^3$ to the nearest whole number.`, recap: "250(1.08)³.", ans: "$315$" },
  { level: 2, q: String.raw`A pool holds $45\,000$ L and is filled at $750$ L/h. It already has $6000$ L. Write a model and find how long it takes to fill.`, recap: "Filling a pool.", ans: String.raw`$V=750t+6000$; $52$ h` },
  { level: 2, q: String.raw`A car worth \$$28\,000$ loses $15\%$ of its value each year. Write a model and find its value after $4$ years.`, recap: "Depreciating car.", ans: String.raw`$V=28\,000(0.85)^t$; $\approx\$14\,616$` },
  { level: 2, q: String.raw`A gym charges \$$40$ to join and \$$25$ per month. After how many months will a member have paid \$$340$?`, recap: "Gym membership.", ans: "12 months" },
  { level: 2, q: "A model predicts that a city's population will double every 20 years forever. Give two reasons this assumption may fail.", recap: "Population assumption.", ans: "limited land, housing, water, jobs; birth and migration rates change" },
  { level: 2, q: String.raw`Estimate how many times your heart beats in a year. State your assumptions and show your model.`, recap: "Heartbeats in a year.", ans: String.raw`e.g. $70$ beats/min: $70\times60\times24\times365\approx36.8$ million` },
  { level: 3, space: 5, q: String.raw`A school fundraiser sells T-shirts. At \$$15$ each they expect to sell $200$; for every \$$1$ increase in price, they sell $10$ fewer.
(a) Write expressions for the number sold and the revenue at price $15+x$.
(b) Make a table for $x=0, 2, 4, 6, 8$ and find the best price.
(c) State one assumption of the model.`, recap: "T-shirt revenue.", ans: String.raw`(a) $200-10x$; $R=(15+x)(200-10x)$ (b) $3000, 3060, 3040, 2940, 2760$: best near \$$17$ ($x=2$; exact optimum $x=2.5$) (c) demand drops evenly by 10 per dollar` },
  { level: 3, space: 5, q: String.raw`Data for a cooling cup of tea (°C): $(0, 95)$, $(5, 70)$, $(10, 54)$, $(15, 43)$, $(20, 36)$; room temperature $21$ °C.
(a) Explain why a linear model is not appropriate.
(b) Show that $T-21$ is roughly multiplied by the same number every 5 minutes.
(c) Write an exponential model and predict the temperature at $30$ min.`, recap: "Tea cooling model.", ans: String.raw`(a) differences $-25,-16,-11,-7$ shrink (b) $74, 49, 33, 22, 15$: ratio $\approx0.67$ (c) $T=21+74(0.67)^{t/5}$; $t=30$: $\approx28$ °C` },
  { level: 3, space: 5, q: String.raw`A store sells $3600$ hockey cards in week 1 and sales fall by $20\%$ each week.
(a) Build a model.
(b) In which week do sales first drop below $1000$?
(c) Estimate total sales in the first $5$ weeks.`, recap: "Falling card sales.", ans: String.raw`(a) $S=3600(0.8)^{w-1}$ (b) week 7 ($\approx944$) (c) $3600+2880+2304+1843+1475\approx12\,102$` },
  { level: 3, space: 5, q: "Choose a question you care about (for example: How much money will I save by bringing lunch from home this year?). Carry out all six stages of the modelling process and write a short report.", recap: "Your own modelling question.", ans: "answers vary; must show assumptions, a model, a calculation, a check and a refinement" },
  { level: 3, space: 5, q: String.raw`Two models fit the data $(0, 50)$, $(1, 60)$, $(2, 72)$: Model A $y=11x+49.7$ and Model B $y=50(1.2)^x$. Predict $y$ at $x=10$ with each. What extra data would help you decide which model is better?`, recap: "Comparing two models.", ans: String.raw`A: $159.7$; B: $\approx309.6$; collect more data at larger $x$ to see whether growth is constant or accelerating` },
];

export const WS = {
  code: "6.4",
  title: "The Mathematical Modelling Process",
  bigideas: String.raw`Mathematical modelling turns a real question into mathematics and back again: understand the problem, make assumptions and choose variables, build a model, analyse it, interpret and check the result against reality, then refine and communicate. Constant differences suggest a linear model; constant ratios suggest an exponential one. Every model has assumptions and a domain where it works, and both must be stated with the answer.`,
  goals: ["Describe the modelling cycle.", "State assumptions and variables.", "Build linear and exponential models from rates, ratios and data.", "Choose a model using differences and ratios.", "Test, refine and communicate a model."],
  curriculum: "D2.1--D2.5",
  vocab: [["Model", "a mathematical description of a situation"], ["Assumption", "a simplification taken as true"], ["Validate", "check against data or common sense"], ["Refine", "improve after testing"], ["Domain", "values for which the model makes sense"]],
  hook: String.raw`Ask: “How many piano tuners are there in Toronto?” (or “How many pizzas are eaten in Ontario each week?”). Let groups estimate, then compare how different assumptions led to different answers.`,
  concepts: [
    ["1. The cycle", String.raw`Understand $\to$ assume $\to$ build $\to$ analyse $\to$ interpret and check $\to$ refine and communicate --- and repeat.`],
    ["2. Choosing a model", String.raw`Equal $x$-steps: constant first differences $\Rightarrow$ linear $y=mx+b$; constant ratios $\Rightarrow$ exponential $y=ab^x$; constant second differences $\Rightarrow$ quadratic.`],
    ["3. Testing and refining", String.raw`Compare predictions with data; if errors grow, change an assumption or the type of model. Always state the domain.`],
  ],
  tips: ["Reward clearly stated assumptions, not just answers.", "Check differences and ratios before choosing a model.", "Ask “Does this answer make sense?” after every calculation.", "Open-ended tasks work well in groups.", "Have students present models and critique each other's assumptions."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
