// MCV4U 2.6 — Rate of Change Problems: marginal cost, revenue and profit, the derivative as an estimate of the next unit,
// rates of change in the sciences (population, temperature, concentration, pressure), and interpreting sign and units
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "2.6 Rate of Change Problems";
export const ID = "e6e8bf63-8253-4acb-a156-022834c38c80";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Rate of Change Problems",
    overview: S`Every derivative is a rate: its units are "units of output per unit of input". In business, the derivative of the cost function \(C(x)\) is the <strong>marginal cost</strong> \(C'(x)\) — a very good estimate of what it costs to make one more item. In the same way, \(R'(x)\) is the marginal revenue and \(P'(x)=R'(x)-C'(x)\) is the marginal profit. In science, the derivative tells how fast a population grows, a liquid cools, or a pressure drops. The skill in this lesson is reading a model, differentiating it, and explaining what the number means, with units.`,
    goals: [
      "interpret the derivative as a rate with units;",
      "find and interpret marginal cost, revenue and profit;",
      "compare the marginal cost with the true cost of the next item;",
      "find when a rate is zero and explain what that means;",
      "apply derivatives to models from the natural and social sciences.",
    ],
    curriculum: "A3.5 (solve problems, using the derivative, that involve instantaneous rates of change, including problems arising from real-world applications)",
    prior: [
      [S`Units of \(\frac{\Delta C}{\Delta x}\) if \(C\) is in dollars and \(x\) in items?`, S`Dollars per item.`],
      [S`Derivative of \(0.02x^2\)?`, S`\(0.04x\).`],
      [S`Revenue if \(x\) items sell at \(p\) dollars each?`, S`\(R=xp\).`],
    ],
    words: [
      ["Marginal cost", "\\(C'(x)\\): approximate cost of the next item", "dollars per item"],
      ["Marginal revenue", "\\(R'(x)\\): approximate revenue from the next item", ""],
      ["Profit", "\\(P(x)=R(x)-C(x)\\)", "\\(P'=R'-C'\\)"],
      ["Demand function", "price \\(p\\) as a function of the quantity \\(x\\)", "\\(p=60-0.2x\\)"],
    ],
  }),

  section("📌 The derivative as the cost of one more", S`
  ${table(["Quantity", "Meaning", "Units"], [
    ["\\(C(x)\\)", "total cost of x items", "dollars"],
    ["\\(C(x+1)-C(x)\\)", "true cost of item number x + 1", "dollars"],
    ["\\(C'(x)\\)", "marginal cost (very close to the line above)", "dollars per item"],
    ["\\(\\frac{C(x)}{x}\\)", "average cost per item", "dollars per item"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 4000 }, curves: [{ f: (x) => 1500 + 12 * x + 0.02 * x * x, color: "violet" }, { f: (x) => 1500 + 12 * 100 + 0.02 * 1e4 + 16 * (x - 100), color: "green" }], points: [{ x: 100, y: 2900, label: "(100, 2900)", color: "red" }], step: { x: 25, y: 500 } }, "C(x) = 1500 + 12x + 0.02x² (violet) with its tangent at x = 100 (green): slope 16 dollars per item.")}
  ${keyIdea(S`The derivative \(f'(a)\) is the instantaneous rate of change of \(f\) at \(a\), in units of \(f\) per unit of \(x\). Marginal cost \(C'(x)\approx C(x+1)-C(x)\), and marginal profit \(P'(x)=R'(x)-C'(x)\).`)}`),

  section("📌 Explore", S`<p>The explorer uses \(C(x)=F+ax+bx^2\). Move the number of items: compare the marginal cost \(C'(x)\) with the true cost of one more item, \(C(x+1)-C(x)\). They differ by exactly \(b\). Then change \(F\): the fixed cost moves the graph up but never changes the marginal cost.</p>`),

  widget("marginalCost", { init: { F: 500, a: 20, b: 0.05, x: 100 } }),

  section("📌 Reading the answer", S`
  <p>State the number, its units, and what it means in the situation: "\(C'(100)=16\): when 100 items have been made, each extra item costs about 16 dollars."</p>
  ${watchOut([
    "C′(100) is a rate (dollars per item), not a total cost.",
    "A negative rate means the quantity is decreasing — say so in words.",
    "Revenue is a maximum where R′(x) = 0, not where R(x) = 0.",
    "Profit P = R − C, so P′ = R′ − C′: differentiate after subtracting, or subtract the derivatives.",
    "Check that the answer makes sense in context (no negative items, no times before t = 0).",
  ])}`),

  examples([
    ["Marginal cost", S`\(C(x)=1500+12x+0.02x^2\) dollars for \(x\) items. Find \(C'(100)\) and compare with the true cost of the 101st item.`,
      [S`\(C'(x)=12+0.04x\Rightarrow C'(100)=16\).`, S`\(C(101)-C(100)=(1500+1212+204.02)-(1500+1200+200)=16.02\).`],
      S`about 16 dollars per item; the true cost of the 101st item is 16.02 dollars`],
    ["Marginal revenue", S`\(R(x)=50x-0.1x^2\) dollars. Find \(R'(100)\) and the number of items that gives the greatest revenue.`,
      [S`\(R'(x)=50-0.2x\Rightarrow R'(100)=30\).`, S`\(R'(x)=0\Rightarrow x=250\).`],
      S`\(R'(100)=30\) dollars per item; maximum revenue at 250 items`,
      plane({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 7000 }, curves: [{ f: (x) => 50 * x - 0.1 * x * x, color: "violet" }], points: [{ x: 250, y: 6250, label: "(250, 6250)", color: "red" }], step: { x: 50, y: 1000 } })],
    ["Marginal profit", S`\(R(x)=50x-0.1x^2\) and \(C(x)=800+12x+0.02x^2\). When is the marginal profit zero?`,
      [S`\(P(x)=-800+38x-0.12x^2\Rightarrow P'(x)=38-0.24x\).`, S`\(P'=0\Rightarrow x=\tfrac{38}{0.24}\approx158.3\).`],
      S`at about 158 items (where profit is greatest)`],
    ["Population growth", S`A bacteria culture has \(P(t)=2000+150t-3t^2\) cells after \(t\) hours. Find the growth rate at 10 h, and when growth stops.`,
      [S`\(P'(t)=150-6t\Rightarrow P'(10)=90\).`, S`\(P'(t)=0\Rightarrow t=25\).`],
      S`90 cells per hour at \(t=10\); growth stops at \(t=25\) h`,
      plane({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 4200 }, curves: [{ f: (t) => 2000 + 150 * t - 3 * t * t, color: "violet" }, { f: (t) => 3200 + 90 * (t - 10), color: "green" }], points: [{ x: 10, y: 3200, label: "t = 10", color: "red" }, { x: 25, y: 3875, label: "t = 25", color: "red" }], step: { x: 5, y: 500 } })],
    ["Cooling", S`A drink's temperature is \(T(t)=20+\dfrac{80}{t+1}\) °C after \(t\) minutes. Find \(T'(3)\) and interpret it.`,
      [S`\(T'(t)=-\dfrac{80}{(t+1)^2}\).`, S`\(T'(3)=-\dfrac{80}{16}=-5\).`],
      S`\(-5\) °C per minute: after 3 minutes the drink is cooling at 5 degrees per minute`,
      plane({ view: { xmin: 0, xmax: 15, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 80 / (t + 1), color: "violet" }, { f: (t) => 40 - 5 * (t - 3), color: "green" }, { f: () => 20, color: "gray" }], points: [{ x: 3, y: 40, label: "(3, 40)", color: "red" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("marginal", S`\(C(x)=800+5x+0.03x^2\) dollars. Find the marginal cost at \(x=100\) (dollars per item).`, num(11),
      "C′ = 5 + 0.06x.", [S`\(5+6\).`], S`\(11\)`),
    q("marginal", S`\(R(x)=40x-0.1x^2\) dollars. Find \(R'(100)\).`, num(20),
      "R′ = 40 − 0.2x.", [S`\(40-20\).`], S`\(20\)`),
    q("maximum", S`\(R(x)=240x-x^2\) dollars. For how many items is revenue greatest?`, num(120),
      "R′ = 0.", [S`\(240-2x=0\).`], S`\(120\)`),
    q("science", S`A pollutant's concentration is \(C(t)=5+\dfrac{60}{t+2}\) mg/L after \(t\) days. Find \(C'(1)\) (4 decimals).`, num(-6.6667, 0.0005),
      "C′ = −60/(t + 2)².", [S`\(-\frac{60}{9}\).`], S`\(-6.6667\)`),
    q("meaning", S`\(R'(200)=-3\) dollars per item. What does this mean?`, choice(["Selling one more item after 200 would lower revenue by about 3 dollars", "Revenue at 200 items is −3 dollars", "Each item sells for 3 dollars less", "200 items lose 3 dollars in total"], 0),
      "A derivative is a rate, not a total.", ["Negative marginal revenue: the next sale reduces total revenue."], "revenue falls about 3 dollars per extra item"),
  ]),

  ...hard([
    ["Price, quantity and revenue", S`The demand for a product is \(p=60-0.2x\) dollars, where \(x\) items are sold. Find the number of items and the price that maximize revenue, and the maximum revenue.`,
      [S`\(R(x)=xp=60x-0.2x^2\).`, S`\(R'(x)=60-0.4x=0\Rightarrow x=150\).`, S`\(p=60-30=30\) dollars; \(R=150\cdot30=4500\) dollars.`],
      S`150 items at $30 each give the maximum revenue, $4500`,
      plane({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 5000 }, curves: [{ f: (x) => 60 * x - 0.2 * x * x, color: "violet" }], points: [{ x: 150, y: 4500, label: "(150, 4500)", color: "red" }], step: { x: 50, y: 1000 } })],
    ["Pressure and volume", S`For a gas at constant temperature, \(P=\dfrac{1000}{V}\) (kPa, \(V\) in litres). (a) Find \(\dfrac{dP}{dV}\) when \(V=20\). (b) If the volume grows at 2 L per minute, how fast is the pressure changing at that moment?`,
      [S`(a) \(\dfrac{dP}{dV}=-\dfrac{1000}{V^2}=-\dfrac{1000}{400}=-2.5\) kPa per L.`, S`(b) Chain rule: \(\dfrac{dP}{dt}=\dfrac{dP}{dV}\cdot\dfrac{dV}{dt}=-2.5\cdot2=-5\) kPa per min.`],
      S`(a) \(-2.5\) kPa per L; (b) pressure falls at 5 kPa per minute`,
      plane({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 120 }, curves: [...rat((v) => 1000 / v, [0], { xmin: 8, xmax: 60 }), { f: (v) => 50 - 2.5 * (v - 20), color: "green", a: 4, b: 40 }], points: [{ x: 20, y: 50, label: "(20, 50)", color: "red" }], step: { x: 10, y: 20 } })],
  ], [
    q("hard", S`\(R(x)=100x-0.05x^2\) dollars. At how many items is the marginal revenue zero?`, num(1000),
      "R′ = 100 − 0.1x.", [S`\(x=1000\).`], S`\(1000\)`),
    q("hard", S`A soup cools as \(T(t)=20+\dfrac{90}{t+1}\) °C. At what time \(t\) (min) is it cooling at 10 °C per minute?`, num(2),
      "T′ = −90/(t + 1)² = −10.", [S`\((t+1)^2=9\Rightarrow t=2\).`], S`\(t=2\)`),
    q("hard", S`The average cost per item is \(A(x)=x+\dfrac{100}{x}\) dollars. For what \(x\) is \(A'(x)=0\)?`, num(10),
      "A′ = 1 − 100/x².", [S`\(x^2=100\).`], S`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is C′(x) close to C(x + 1) − C(x)?", "Over one item the cost curve is almost straight, so the tangent slope and the slope over one step are nearly equal."],
      ["Why doesn't the fixed cost affect marginal cost?", "The derivative of a constant is 0: rent costs the same whether you make 100 items or 101."],
      ["What does a zero rate tell me?", "The quantity has stopped increasing or decreasing at that moment — often a maximum or minimum (e.g. maximum revenue)."],
      ["How do I choose the units?", "Units of the output divided by units of the input: dollars per item, cells per hour, °C per minute."],
      ["Where does the chain rule come in?", "When the input itself changes with time: dP/dt = dP/dV · dV/dt."],
    ],
    summary: [
      "f′(a) = rate, in output units per input unit.",
      "Marginal cost C′(x) ≈ C(x + 1) − C(x).",
      "P′ = R′ − C′; R is greatest where R′ = 0.",
      "Always interpret: number, units, meaning.",
    ],
    next: "2.7 reviews the whole chapter.",
  }),
];
