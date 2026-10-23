// 15.4 Reflection, Academic Honesty and a Worked Mini-Exploration — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const r = (v, d = 2) => Math.round(v * 10 ** d) / 10 ** d;
const k4 = Math.log(39 / 64) / 8;

export const TOPIC = "15.4 Reflection, Academic Honesty and a Worked Mini-Exploration";
export const Q = [
  num(S`Soup cools in a 21 °C room: 85 °C at $t=0$ and 60 °C at $t=8$ min (graph shown). Using $T=21+64e^{kt}$, find k (4 d.p.).`, r(k4, 4), "64e^{8k} = 39.", planeDoc({ view: { xmin: 0, xmax: 42, ymin: 0, ymax: 95 }, step: { x: 5, y: 10 }, curves: [{ f: (t) => 21 + 64 * Math.exp(k4 * t), color: "red" }], points: [P(0, 85), P(8, 60)], lines: [{ m: 0, b: 21, color: "gray", dash: true }] }), 0.0001),
  num(S`For the soup model, find when T = 30 °C (1 d.p.).`, r(Math.log(9 / 64) / k4, 1), "64e^{kt} = 9.", null, 0.1),
  num(S`For the soup model, find the half-life of the temperature difference (1 d.p.).`, r(Math.log(2) / -k4, 1), "ln 2 / |k|.", null, 0.1),
  num(S`A culture follows $N=Ae^{kt}$ with $N(0)=120$ and $N(6)=300$. Find N at $t=10$ (nearest whole).`, Math.round(120 * Math.exp((Math.log(300 / 120) / 6) * 10)), "k = ln 2.5 / 6.", null, 1),
  num(S`For the culture above, find the doubling time (2 d.p.).`, r(Math.log(2) / (Math.log(2.5) / 6)), "ln 2 / k.", null, 0.01),
  mc("A culture is predicted to exceed the number of atoms in the dish after 5 days. The most appropriate reflection is:", "the exponential model cannot hold indefinitely; growth must level off", ["the prediction is accurate", "the dish is large enough", "exponential growth is always realistic"], "Resource limits."),
  mc("A student used an online solver to check an integral. Academic integrity requires them to:", "acknowledge the tool and show their own working", ["remove the integral", "hide the tool", "copy the solver's steps without comment"], "Credit tools; the work must be their own."),
  tf("Reflection about the method (e.g. measurement error) earns credit in criterion D as well as reflection about results.", true, "Critical reflection covers process and results."),
  ms("A projectile model ignores air resistance. Which reflections follow? Select all.", ["predicted ranges will be too large", "the effect grows with speed", "the model is exact", "an extension could include a drag term"], [0, 1, 3], "Air resistance reduces range."),
  num("The plot shows residuals from a model. Find the sum of squared residuals (2 d.p.).", r([0.5, -0.3, 0.2, -0.4, 0.1].reduce((a, v) => a + v * v, 0)), "0.25 + 0.09 + 0.04 + 0.16 + 0.01.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 1 }, step: { x: 1, y: 0.25 }, points: [P(1, 0.5, false), P(2, -0.3, false), P(3, 0.2, false), P(4, -0.4, false), P(5, 0.1, false)], lines: [{ m: 0, b: 0, color: "gray" }] }), 0.001),
  num("Another model on the same data has residuals 1.2, −0.8, 0.9, −1.1, 0.6. Find its sum of squared residuals (2 d.p.).", r([1.2, -0.8, 0.9, -1.1, 0.6].reduce((a, v) => a + v * v, 0)), "Square and add.", null, 0.001),
  num("How many times larger is the second model's sum of squared residuals than the first's (1 d.p.)?", r(4.46 / 0.55, 1), "4.46 / 0.55.", null, 0.05),
  num(S`A drink follows $T=20+65e^{-0.05t}$. Find the rate of change of T at $t=10$ (°C/min, 3 d.p.).`, r(-3.25 * Math.exp(-0.5), 3), "dT/dt = −3.25e^{−0.05t}.", null, 0.001),
  mc("Why should the cooling exploration state the room temperature it assumed?", "the model's asymptote depends on it and it may not be constant", ["it makes the work longer", "it is required in the title", "it is not important"], "A key assumption."),
  num("The graph shows two models extended to 60 min. By how many degrees do their predictions differ at t = 60 (nearest whole)?", Math.round(20 + 70 * Math.exp(-0.06 * 60) - (85 - 1.9 * 60)), "Exponential ≈ 21.9; linear = −29.", planeDoc({ view: { xmin: 0, xmax: 62, ymin: -35, ymax: 100 }, step: { x: 10, y: 10 }, curves: [{ f: (t) => 20 + 70 * Math.exp(-0.06 * t), color: "red" }], lines: [{ m: -1.9, b: 85, color: "amber", dash: true }] }), 1),
  tf("An exploration may use AI or online tools only if it hides their use.", false, "Tools must be acknowledged, following the academic integrity policy."),
  num(S`$P=500e^{0.04t}$ models savings (dollars). After how many years does P first exceed 1000 (2 d.p.)?`, r(Math.log(2) / 0.04), "e^{0.04t} = 2.", null, 0.01),
  num("The data shown level off near 100. If a logistic model has carrying capacity 100 and the value at t = 6 is 64, what percentage of the capacity is reached at t = 6?", 64, "64/100.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 110 }, step: { x: 2, y: 10 }, curves: [{ f: (t) => 100 / (1 + 19 * Math.exp(-0.6 * t)), color: "red" }], points: [P(0, 5, false), P(3, 22, false), P(6, 64, false), P(9, 91, false), P(12, 98.5, false)], lines: [{ m: 0, b: 100, color: "gray", dash: true }] })),
  mc("Which conclusion best answers an aim 'Which model best describes the cooling?'", "the exponential model, because its residuals are smallest and it approaches room temperature", ["the linear model, because it is simplest", "both, because they are similar", "no model works"], "Evidence plus physical sense."),
  num(S`For $T=21+64e^{kt}$ with $k=${r(k4, 4)}$, what is T after 40 minutes (1 d.p.)?`, r(21 + 64 * Math.exp(k4 * 40), 1), "Substitute.", null, 0.1),
];
