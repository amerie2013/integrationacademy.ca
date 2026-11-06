// MHF4U 3.5 — Rational Function Models (NEW): average cost, concentration, inverse-square intensity, travel time and
// work rates; reading asymptotes in context; average and instantaneous rates of change of rational functions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.5 Rational Function Models";
export const ID = "6d4f0003-0001-4001-8001-000000000305";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🏭",
    title: "Rational Function Models",
    overview: S`Rational functions model situations where one quantity is shared out by another: cost per item, concentration of a mixture, time for a trip at a given speed, brightness at a distance. Their asymptotes have meaning — the long-run value, or a value that can never be reached — and their rates of change tell how quickly the quantity is rising or falling. In this lesson you will build, read and solve rational models, and compute average and instantaneous rates of change for them.`,
    goals: [
      "write rational models for average cost, concentration, travel time and work rates;",
      "interpret asymptotes, intercepts and restrictions in context;",
      "solve rational equations and inequalities arising from models;",
      "calculate average rates of change of rational functions;",
      "estimate instantaneous rates of change of rational functions.",
    ],
    curriculum: "C3.7 (solve problems involving applications of polynomial and rational functions), D1.9 (solve problems involving average and instantaneous rates of change, including rational functions)",
    prior: [
      [S`A $300 machine makes 50 items. Fixed cost per item?`, S`$6.`],
      [S`Horizontal asymptote of \(\frac{8x+500}{x}\)?`, S`\(y=8\).`],
      [S`Average rate of change of \(f\) on \([a,b]\)?`, S`\(\frac{f(b)-f(a)}{b-a}\).`],
    ],
    words: [
      ["Average cost", "total cost ÷ number of items", "\\(\\frac{F+vx}{x}\\)"],
      ["Concentration", "amount of substance ÷ volume", "g/L"],
      ["Inverse square law", "\\(I=\\frac k{d^2}\\)", "light, sound"],
      ["Work rate", "fraction of a job per hour, \\(\\frac1t\\)", ""],
    ],
  }),

  section("📌 Common models", S`
  ${table(["Situation", "Model", "Horizontal asymptote means"], [
    ["average cost", "\\(A(x)=\\frac{F+vx}{x}=v+\\frac Fx\\)", "the cost per item, v"],
    ["mixing", "\\(C(t)=\\frac{\\text{amount}_0+rt}{V_0+qt}\\)", "the concentration of what is added"],
    ["trip time", "\\(t(v)=\\frac dv\\)", "time → 0 as speed grows"],
    ["inverse square", "\\(I(d)=\\frac k{d^2}\\)", "intensity → 0 far away"],
    ["work", "\\(\\frac1a+\\frac1b=\\frac1T\\)", "rates add, times don't"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 120, ymin: 0, ymax: 40 }, curves: [{ f: (x) => 8 + 500 / x, a: 15, b: 120, color: "violet" }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [{ x: 50, y: 18, label: "(50, 18)", color: "blue" }, { x: 100, y: 13, label: "(100, 13)", color: "blue" }], step: { x: 10, y: 5 }, xlabel: "items", ylabel: "$ per item" }, "A(x) = (500 + 8x)/x: the average cost falls toward $8 per item.")}
  ${keyIdea(S`Rates of change of a rational model use the same formulas as before: average rate \(\frac{f(b)-f(a)}{b-a}\); instantaneous rate ≈ \(\frac{f(a+h)-f(a-h)}{2h}\) for small \(h\). For \(A(x)=v+\frac Fx\) both are negative and shrink toward 0: the cost keeps falling, but more and more slowly.`)}`),

  section("📌 Explore", S`<p>Change the fixed cost, the cost per item, and the point \(x_0\). Compare the amber secant (average rate) with the green tangent (instantaneous rate).</p>`),

  widget("rationalModel", { init: { F: 300, v: 6, x0: 25 } }),

  section("📌 Reading a model", S`
  <p>Before solving, decide which inputs make sense (items ≥ 1, time ≥ 0, speed > 0), and what the asymptotes say in words.</p>
  ${watchOut([
    "Average cost is total cost DIVIDED by the number of items — not the total cost.",
    "Work problems add RATES (jobs per hour), not times.",
    "Units of a rate of change: output units per input unit (dollars per item, g/L per minute).",
    "A rational model is only valid on its sensible domain; the other branch has no meaning.",
    "Keep exact fractions until the end, then round.",
  ])}`),

  examples([
    ["Average cost", S`A shop's average cost is \(A(x)=\dfrac{500+8x}{x}\) dollars per item. Find \(A(50)\), the horizontal asymptote, and the number of items for an average cost of 10 dollars.`,
      [S`<b>Evaluate.</b> \(A(50)=\frac{500+400}{50}=\frac{900}{50}=18\).`,
        S`<b>Asymptote.</b> Split the fraction: \(A(x)=8+\frac{500}x\). As \(x\) grows, \(\frac{500}x\to0\), so \(y=8\).`,
        S`<b>Meaning.</b> The fixed 500 is shared among more items, but no item can cost less than the 8 dollars it takes to make.`,
        S`<b>Solve.</b> \(\frac{500+8x}x=10\) gives \(500+8x=10x\), so \(x=250\).`,
        S`<b>Check.</b> \(A(250)=8+2=10\) ✓`],
      S`18 dollars; HA 8 dollars per item; 250 items`,
      plane({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 30 }, curves: [{ f: (x) => 8 + 500 / x, a: 20, b: 500, color: "violet" }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [{ x: 50, y: 18, label: "(50, 18)" }, { x: 250, y: 10, label: "(250, 10)", color: "amber" }], step: { x: 50, y: 5 }, xlabel: "x", ylabel: "A" })],
    ["Concentration", S`A tank has 100 L of water with 10 g of salt. Brine with 0.5 g/L flows in at 10 L/min. Write the concentration \(C(t)\) and find \(C(10)\) and the long-run value.`,
      [S`<b>Salt.</b> Each minute adds \(10\times0.5=5\) g: \(10+5t\).`,
        S`<b>Volume.</b> Each minute adds 10 L: \(100+10t\).`,
        S`<b>Model.</b> Concentration is salt over volume: \(C(t)=\dfrac{10+5t}{100+10t}\).`,
        S`<b>Evaluate.</b> \(C(10)=\frac{60}{200}=0.3\) g/L.`,
        S`<b>Long run.</b> The HA is \(\frac5{10}=0.5\) g/L. This makes sense: it is the concentration of the incoming brine ✓`],
      S`\(C(10)=0.3\) g/L; \(C\to0.5\) g/L`,
      plane({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 0.6 }, curves: [{ f: (t) => (10 + 5 * t) / (100 + 10 * t), a: 0, b: 100, color: "violet" }], lines: [{ m: 0, b: 0.5, color: "red", dash: true }], points: [{ x: 10, y: 0.3, label: "(10, 0.3)", color: "blue" }], step: { x: 10, y: 0.1 }, xlabel: "t (min)", ylabel: "C (g/L)" })],
    ["Inverse square law", S`Light intensity is \(I(d)=\dfrac{100}{d^2}\) at distance \(d\) m. Find the average rate of change on \([1,2]\) and estimate the instantaneous rate at \(d=2\).`,
      [S`<b>Average.</b> \(I(1)=100\) and \(I(2)=25\): \(\frac{25-100}{2-1}=-75\) units per m.`,
        S`<b>Instantaneous.</b> Centred with \(h=0.01\): \(I(2.01)\approx24.752\) and \(I(1.99)\approx25.252\).`,
        S`<b>Quotient.</b> \(\frac{24.752-25.252}{0.02}\approx-25\).`,
        S`<b>Interpret.</b> Both are negative, since light fades with distance. The rate at 2 m is smaller in size because the curve flattens ✓`],
      S`average \(-75\); instantaneous \(\approx-25\) units per metre`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 120 }, curves: [{ f: (d) => 100 / (d * d), a: 0.9, b: 5, color: "violet" }], points: [{ x: 1, y: 100, label: "(1, 100)", color: "blue" }, { x: 2, y: 25, label: "(2, 25)", color: "blue" }], lines: [{ m: -75, b: 175, color: "amber" }], step: { x: 0.5, y: 20 }, xlabel: "d (m)", ylabel: "I" })],
    ["Travel time", S`A 120 km trip at speed \(v\) km/h takes \(t(v)=\dfrac{120}v\) h. Find the average rate of change of \(t\) from \(v=60\) to \(v=80\).`,
      [S`<b>Values.</b> \(t(60)=2\) and \(t(80)=1.5\).`,
        S`<b>Compute.</b> \(\frac{1.5-2}{80-60}=\frac{-0.5}{20}=-0.025\) h per km/h.`,
        S`<b>Interpret.</b> Each extra km/h saves about \(0.025\) h, which is 1.5 minutes.`,
        S`<b>Sense check.</b> The negative sign fits: going faster means less time ✓`],
      S`\(-0.025\) h per km/h (about 1.5 min saved per extra km/h)`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 5 }, curves: [{ f: (v) => 120 / v, a: 25, b: 130, color: "violet" }], points: [{ x: 60, y: 2, label: "(60, 2)", color: "blue" }, { x: 80, y: 1.5, label: "(80, 1.5)", color: "blue" }], step: { x: 10, y: 0.5 }, xlabel: "v (km/h)", ylabel: "t (h)" })],
    ["Two pipes", S`One pipe fills a tank in 6 h. With a second pipe, the tank fills in 4 h. How long would the second pipe take alone?`,
      [S`<b>Rates.</b> A pipe that takes 6 h fills \(\frac16\) of the tank per hour. Let the second take \(x\) h, so its rate is \(\frac1x\).`,
        S`<b>Rates add.</b> \(\frac16+\frac1x=\frac14\).`,
        S`<b>Solve.</b> \(\frac1x=\frac14-\frac16=\frac3{12}-\frac2{12}=\frac1{12}\), so \(x=12\).`,
        S`<b>Check.</b> In 4 h: \(\frac46+\frac4{12}=\frac23+\frac13=1\) full tank ✓`],
      S`12 h`,
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 1.4 }, lines: [{ m: 1 / 6, b: 0, color: "blue" }, { m: 1 / 12, b: 0, color: "green" }, { m: 0.25, b: 0, color: "violet" }, { m: 0, b: 1, color: "gray", dash: true }], points: [{ x: 4, y: 1, label: "both: 4 h", color: "violet" }, { x: 6, y: 1, label: "first: 6 h", color: "blue" }, { x: 12, y: 1, label: "second: 12 h", color: "amber" }], step: { x: 1, y: 0.2 }, xlabel: "t (h)", ylabel: "tank filled" })],
  ]),

  practice([
    q("average cost", S`\(A(x)=\dfrac{300+5x}{x}\). Find \(A(60)\).`, num(10),
      "Substitute.", [S`\(\frac{600}{60}\).`], S`\(10\)`),
    q("long run", S`A concentration is \(C(t)=\dfrac{20+2t}{50+t}\) g/L. What value does it approach as \(t\) grows?`, num(2),
      "Ratio of the leading coefficients.", [S`\(\frac21\).`], S`\(2\) g/L`),
    q("work", S`Solve \(\dfrac14+\dfrac1x=\dfrac13\).`, num(12),
      "1/x = 1/3 − 1/4.", [S`\(\frac1{12}\).`], S`\(12\)`),
    q("rate", S`Find the average rate of change of \(t(v)=\dfrac{120}v\) from \(v=40\) to \(v=60\).`, num(-0.05, 0.0001),
      "(t(60) − t(40)) ÷ 20.", [S`\(\frac{2-3}{20}\).`], S`\(-0.05\)`),
    q("solve", S`For \(A(x)=\dfrac{300+5x}{x}\), how many items give an average cost of $8?`, num(100),
      "300 + 5x = 8x.", [S`\(3x=300\).`], S`\(100\)`),
  ]),

  ...hard([
    ["A drug in the bloodstream", S`The concentration of a drug is \(C(t)=\dfrac{5t}{t^2+4}\) mg/L after \(t\) h. (a) When is \(C\ge1\)? (b) Find the average rate of change on \([1,3]\) and estimate the instantaneous rate at \(t=1\).`,
      [S`(a) \(5t\ge t^2+4\Rightarrow t^2-5t+4\le0\Rightarrow(t-1)(t-4)\le0\): \(1\le t\le4\).`, S`(b) \(C(1)=1\), \(C(3)=\frac{15}{13}\approx1.154\): average \(\approx\frac{0.154}{2}\approx0.077\) mg/L per h.`, S`Centred estimate at \(t=1\): \(\frac{C(1.01)-C(0.99)}{0.02}\approx0.6\) mg/L per h.`],
      S`(a) \(1\le t\le4\) h; (b) \(\approx0.077\) and \(\approx0.6\) mg/L per h`,
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 1.6 }, curves: [{ f: (t) => (5 * t) / (t * t + 4), a: 0, b: 10, color: "violet" }, { f: () => 1, color: "green" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "blue" }, { x: 4, y: 1, label: "(4, 1)", color: "blue" }, { x: 2, y: 1.25, label: "max (2, 1.25)", color: "amber" }], step: { x: 1, y: 0.2 }, xlabel: "t (h)", ylabel: "C (mg/L)" })],
    ["Upstream and downstream", S`A boat moves at 10 km/h in still water. A 24 km trip upstream and back takes 5 h. Find the speed of the current.`,
      [S`\(\dfrac{24}{10-c}+\dfrac{24}{10+c}=5\).`, S`\(24(10+c)+24(10-c)=5(100-c^2)\Rightarrow480=500-5c^2\Rightarrow c^2=4\).`],
      S`2 km/h`],
  ], [
    q("hard", S`For \(C(t)=\dfrac{5t}{t^2+4}\), find \(C(4)\).`, num(1),
      "Substitute.", [S`\(\frac{20}{20}\).`], S`\(1\)`),
    q("hard", S`Solve \(\dfrac{30}x+\dfrac{30}{x+5}=5\) for \(x>0\).`, num(10),
      "Multiply by x(x + 5).", [S`\(60x+150=5x^2+25x\Rightarrow x^2-7x-30=0\Rightarrow x=10\).`], S`\(10\)`),
    q("hard", S`For \(A(x)=\dfrac{800+12x}{x}\), find the least number of items with \(A(x)\le20\).`, num(100),
      "800 + 12x ≤ 20x.", [S`\(800\le8x\).`], S`\(100\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does average cost have a horizontal asymptote?", "A(x) = v + F/x: as x grows, the fixed cost F is shared over so many items that F/x → 0, leaving the cost per item v."],
      ["Why do work rates add?", "Each pipe fills a fraction of the tank per hour; working together, those fractions add. Times don't add."],
      ["How do I estimate an instantaneous rate for a rational model?", "Use a centred interval: (f(a + h) − f(a − h))/(2h) with a small h like 0.01."],
      ["What does a negative rate of change mean here?", "The quantity is decreasing — e.g. average cost or intensity falling as x or d increases."],
      ["How do I choose the domain?", "Use the context: counts are whole numbers ≥ 1, times and distances are positive, speeds must keep denominators positive."],
    ],
    summary: [
      "Models: v + F/x, mixtures, k/d², d/v, 1/a + 1/b.",
      "Asymptotes = long-run or impossible values.",
      "Solve models with rational equations/inequalities.",
      "Rates: secant (average), centred estimate (instantaneous).",
    ],
    next: "3.6 reviews the chapter.",
  }),
];
