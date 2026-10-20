// 5.5 Making Connections: Exponential Models — 20 easy + 20 medium questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  num(S`For $P(t)=250e^{0.2t}$, find $P'(0)$.`, 50, "kP₀ = 0.2 × 250."),
  num(S`Find the doubling time when $k=0.05$ (4 decimals).`, 13.8629, "ln 2 / 0.05.", null, 0.0005),
  num(S`Find the half-life when $k=-0.2$ (4 decimals).`, 3.4657, "ln 2 / 0.2.", null, 0.0005),
  tf(S`For $P(t)=P_0e^{kt}$, the rate of change is proportional to $P$.`, true, "P′ = kP."),
  num(S`An account grows as $A(t)=2400e^{0.025t}$ dollars. Find $A'(0)$ in dollars per year.`, 60, "0.025 × 2400."),
  mc(S`In $P(t)=P_0e^{kt}$, decay means:`, S`$k\lt0$`, [S`$k\gt0$`, S`$P_0\lt0$`, S`$k=1$`], "The amount shrinks."),
  num(S`For $P(t)=600e^{0.1t}$, find $P(10)$ (2 decimals).`, 1630.97, "600e.", null, 0.01),
  num(S`A population satisfies $P'=0.08P$. How fast is it growing when $P=500$?`, 40, "0.08 × 500."),
  num("A quantity doubles every 10 years. Find its growth constant k (4 decimals).", 0.0693, "k = ln 2 / 10.", null, 0.0005),
  num("The graph of P(t) = 50e^(0.4t) is shown. What is its rate of growth at t = 0?", 20, "0.4 × 50.", graph((t) => 50 * Math.exp(0.4 * t), { xmin: -0.5, xmax: 6, ymin: -10, ymax: 600 }, [P(0, 50)], { a: 0, more: [{ f: (t) => 50 + 20 * t, color: "green", a: 0, b: 5 }], step: { x: 1, y: 100 } })),
  tf("The half-life of a decaying quantity depends on how much you start with.", false, "Half-life is ln 2 / |k|, independent of P₀."),
  num(S`For $A(t)=1000e^{-0.05t}$, find $A'(0)$.`, -50, "−0.05 × 1000."),
  num(S`Soup cools as $T(t)=25+50e^{-0.1t}$ °C. What is its starting temperature?`, 75, "25 + 50."),
  num(S`For $T(t)=25+50e^{-0.1t}$, find $T'(0)$ in °C per minute.`, -5, "−0.1 × 50."),
  mc(S`What value does $P(t)=\frac{1200}{1+5e^{-t}}$ approach as $t\to\infty$?`, "1200", ["200", "6000", "1"], "e^(−t) → 0."),
  num(S`How long does $P(t)=40e^{0.25t}$ take to reach 80 (4 decimals)?`, 2.7726, "e^(0.25t) = 2.", null, 0.0005),
  tf(S`For $P(t)=P_0e^{kt}$ with $P_0,k\gt0$, the rate of growth itself keeps increasing.`, true, "P′ = kP grows as P grows."),
  num("A substance has a half-life of 5 years. Find its decay constant k (4 decimals).", -0.1386, "k = −ln 2 / 5.", null, 0.0005),
  num("The graph of A(t) = 200e^(−0.3t) is shown. What is its rate of change at t = 0?", -60, "−0.3 × 200.", graph((t) => 200 * Math.exp(-0.3 * t), { xmin: -0.5, xmax: 12, ymin: -10, ymax: 220 }, [P(0, 200)], { a: 0, more: [{ f: (t) => 200 - 60 * t, color: "green", a: 0, b: 3.2 }], step: { x: 1, y: 20 } })),
  num("What fraction of a radioactive sample remains after two half-lives?", 0.25, "½ × ½.", null, 0.0001),
];
const medium = [
  num(S`For $P(t)=1200e^{0.15t}$, find $P'(4)$ (2 decimals).`, 327.98, "180e^0.6.", null, 0.01),
  num("A bacteria culture triples every 5 hours. Find its growth constant k (4 decimals).", 0.2197, "e^(5k) = 3.", null, 0.0005),
  num("A town grows continuously at 2.5% per year. How fast is it growing when its population is 4500?", 112.5, "P′ = 0.025P."),
  num("A 60 mg sample has a half-life of 8 hours. How fast is it decaying right now, in mg per hour (4 decimals)?", -5.1986, "k = −ln 2 / 8; P′ = kP.", null, 0.0005),
  num("5000 dollars earns 3% compounded continuously. When does it reach 8000 dollars (4 decimals)?", 15.6668, "e^(0.03t) = 1.6.", null, 0.0005),
  num(S`Tea cools as $T(t)=18+62e^{-0.07t}$ °C. When does it reach 50 °C (4 decimals)?`, 9.4485, "62e^(−0.07t) = 32.", null, 0.0005),
  num(S`For $T(t)=18+62e^{-0.07t}$, how fast is it cooling when $T=50$ °C (in °C per minute)?`, -2.24, "T′ = −0.07(T − 18) = −0.07 × 32.", null, 0.0001),
  num("The graph of P(t) = 2400/(1 + 11e^(−0.4t)) is shown. When is it growing fastest (4 decimals)?", 5.9947, "At P = 1200: 11e^(−0.4t) = 1.", graph((t) => 2400 / (1 + 11 * Math.exp(-0.4 * t)), { xmin: -0.5, xmax: 16, ymin: -100, ymax: 2600 }, [P(Math.log(11) / 0.4, 1200)], { a: 0, lines: [{ m: 0, b: 2400, color: "gray", dash: true }], step: { x: 2, y: 400 } }), 0.0005),
  num(S`What is the greatest rate of growth of $P(t)=\frac{2400}{1+11e^{-0.4t}}$?`, 240, "At P = M/2: kM/4 = 0.4 × 2400 / 4."),
  mc(S`Which function satisfies $P'=0.03P$ with $P(0)=P_0$?`, S`$P_0e^{0.03t}$`, [S`$P_0+0.03t$`, S`$P_0(0.03)^t$`, S`$0.03e^{P_0t}$`], "Rate proportional to amount."),
  num("A drug's concentration is C(t) = 8te^(−0.4t) mg/L (graph shown). Find its greatest value (4 decimals).", 7.3576, "C′ = 8e^(−0.4t)(1 − 0.4t) = 0 at t = 2.5; 20/e.", graph((t) => 8 * t * Math.exp(-0.4 * t), { xmin: -0.5, xmax: 15, ymin: -0.5, ymax: 9 }, [P(2.5, 20 / Math.E)], { a: 0, step: { x: 1, y: 1 } }), 0.0005),
  num(S`Light under water has intensity $I(d)=800e^{-0.25d}$ lux at depth $d$ m. Find $I'(4)$ (4 decimals).`, -73.5759, "−200e^(−1).", null, 0.0005),
  tf(S`A logistic model $P=\frac{M}{1+Ae^{-kt}}$ grows fastest when $P=\frac M2$.`, true, "Its inflection point is at half the limit."),
  num("What effective annual rate, as a percent, does 4.5% compounded continuously give (4 decimals)?", 4.6028, "100(e^0.045 − 1).", null, 0.0005),
  num(S`Sales of a new product are $S(t)=50\left(1-e^{-0.4t}\right)$ thousand after $t$ months. Find $S'(2)$ (4 decimals).`, 8.9866, "20e^(−0.8).", null, 0.0005),
  num(S`For $P(t)=300(1.08)^t$, find the relative rate $\frac{P'}{P}$ (4 decimals).`, 0.077, "ln 1.08.", null, 0.0005),
  num(S`When is $P(t)=500e^{0.12t}$ growing at 300 per year (4 decimals)?`, 13.412, "60e^(0.12t) = 300.", null, 0.0005),
  num("Only 20% of a substance remains after 10 days. Find its decay constant k (4 decimals).", -0.1609, "e^(10k) = 0.2.", null, 0.0005),
  tf("If a quantity grows exponentially and doubles in 7 years, it quadruples in 14 years.", true, "Two doubling times."),
  mc("In Newton's law of cooling, the rate of cooling is proportional to:", "the difference between the object's and the surroundings' temperatures", ["the object's temperature", "the time elapsed", "the surroundings' temperature"], "T′ = −k(T − Tₛ)."),
];
export { easy as E, medium as M };
