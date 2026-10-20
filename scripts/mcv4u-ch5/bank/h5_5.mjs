// 5.5 Making Connections: Exponential Models — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "5.5 Making Connections: Exponential Models";
export const Q = [
  num("An object cools from 100 °C to 60 °C in 5 min in a 20 °C room. What is its temperature after 15 min?", 30, "T = 20 + 80e^(−kt) with e^(−5k) = ½; T(15) = 20 + 80/8."),
  num("For the object above (100 °C to 60 °C in 5 min, room 20 °C), how fast is it cooling at 15 min, in °C per minute (4 decimals)?", -1.3863, "T′ = −k(T − 20) with k = ln 2 / 5 and T − 20 = 10.", null, 0.0005),
  num(S`For $P(t)=\frac{900}{1+8e^{-0.3t}}$, how fast is $P$ growing when $P=300$?`, 60, "P′ = kP(1 − P/M) = 0.3 × 300 × ⅔."),
  num("A drug's concentration is C(t) = 12(e^(−0.2t) − e^(−t)) mg/L (graph shown). At what time is it greatest (4 decimals)?", 2.0118, "C′ = 12(−0.2e^(−0.2t) + e^(−t)) = 0 ⇒ e^(−0.8t) = 0.2.", graph((t) => 12 * (Math.exp(-0.2 * t) - Math.exp(-t)), { xmin: -0.5, xmax: 20, ymin: -0.5, ymax: 7.5 }, [P(2.0118, 6.4199)], { a: 0, step: { x: 2, y: 1 } }), 0.0005),
  num(S`For $C(t)=12\left(e^{-0.2t}-e^{-t}\right)$, find the greatest concentration (4 decimals).`, 6.4199, "Evaluate at t = ln 5 / 0.8.", null, 0.0005),
  num("30% of a substance decays in 50 years. Find its half-life (2 decimals).", 97.17, "e^(50k) = 0.7; half-life = ln 2 / |k|.", null, 0.01),
  num("A population grows exponentially from 2000 to 2600 in 5 years. How fast is it growing at the end of those 5 years (2 decimals)?", 136.43, "k = ln 1.3 / 5; P′ = 2600k.", null, 0.01),
  num("Investments A(t) = 1000e^(0.06t) and B(t) = 1500e^(0.04t) are graphed. When are they worth the same (4 decimals)?", 20.2733, "e^(0.02t) = 1.5.", graph((t) => 1000 * Math.exp(0.06 * t), { xmin: -1, xmax: 30, ymin: -200, ymax: 6500 }, [P(20.2733, 3373.4)], { a: 0, more: [{ f: (t) => 1500 * Math.exp(0.04 * t), color: "blue", a: 0 }], step: { x: 5, y: 1000 } }), 0.0005),
  num("For A(t) = 1000e^(0.06t) and B(t) = 1500e^(0.04t), at what time t ≥ 0 are they growing at the same rate?", 0, "60e^(0.06t) = 60e^(0.04t) only at t = 0."),
  tf("If P′ = kP and P triples in 4 hours, then P grows ninefold in 8 hours.", true, "Two tripling times."),
  num(S`A logistic population $P(t)=\frac{5000}{1+9e^{-0.6t}}$ starts at 500. When does it reach 4000 (4 decimals)?`, 5.9725, "1 + 9e^(−0.6t) = 1.25 ⇒ e^(−0.6t) = 1/36.", null, 0.0005),
  num("The graph of P(t) = 5000/(1 + 9e^(−0.6t)) is shown. What is its rate of growth at the inflection point?", 750, "kM/4 = 0.6 × 5000 / 4.", graph((t) => 5000 / (1 + 9 * Math.exp(-0.6 * t)), { xmin: -0.5, xmax: 12, ymin: -200, ymax: 5500 }, [P(Math.log(9) / 0.6, 2500)], { a: 0, lines: [{ m: 0, b: 5000, color: "gray", dash: true }], step: { x: 1, y: 500 } })),
  num(S`A skill score is $L(t)=90-70e^{-0.15t}$. When is it improving at 3 points per week (4 decimals)?`, 8.3518, "10.5e^(−0.15t) = 3.", null, 0.0005),
  mc(S`For $P=P_0e^{kt}$, the rate of change $P'$ doubles exactly when:`, S`$P$ doubles`, [S`$t$ doubles`, S`$k$ halves`, S`$P_0$ halves`], "P′ = kP is proportional to P."),
  num("A 2 g sample decays to 1.6 g in 3 days. How fast is it decaying at that moment, in g per day (4 decimals)?", -0.119, "k = ln 0.8 / 3; P′ = 1.6k.", null, 0.0005),
  num("What annual percentage rate, compounded once a year, matches 5% compounded continuously (4 decimals)?", 5.1271, "100(e^0.05 − 1).", null, 0.0005),
  num(S`A rumour spreads as $N(t)=\frac{10000}{1+499e^{-0.5t}}$. On what day is it spreading fastest (4 decimals)?`, 12.4252, "499e^(−0.5t) = 1.", null, 0.0005),
  num("Coffee cools as T = 20 + 70e^(−kt) °C and starts cooling at 7 °C per minute (graph shown). When does it reach 45 °C (4 decimals)?", 10.2962, "T′(0) = −70k = −7 so k = 0.1; 70e^(−0.1t) = 25.", graph((t) => 20 + 70 * Math.exp(-0.1 * t), { xmin: -1, xmax: 40, ymin: -5, ymax: 100 }, [P(0, 90), P(10.2962, 45)], { a: 0, lines: [{ m: 0, b: 20, color: "gray", dash: true }], step: { x: 5, y: 10 } }), 0.0005),
  tf("At any moment, a decaying exponential quantity with half-life h will lose half of its current amount over the next h units of time.", true, "Half-life does not depend on the starting point."),
  num(S`For $P(t)=P_0e^{kt}$, $P(2)=500$ and $P(6)=2000$. Find $P_0$.`, 250, "e^(4k) = 4 so e^(2k) = 2; P₀ = 500/2."),
];
