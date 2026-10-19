// 2.6 Rate of Change Problems — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.6 Rate of Change Problems";
export const Q = [
  num(S`The demand is $p=120-0.4x$ dollars. Find the maximum revenue.`, 9000, "R = 120x − 0.4x²; R′ = 0 at x = 150, p = 60."),
  num(S`$C(x)=1600+10x+0.04x^2$. At what production level is the average cost lowest?`, 200, "A = 1600/x + 10 + 0.04x; A′ = 0 when x² = 40000."),
  num("C(x) = 900 + 6x + 0.25x². The average cost A(x) = C(x)/x is shown. Find the minimum average cost.", 36, "A′ = −900/x² + 0.25 = 0 at x = 60; A(60) = 15 + 6 + 15.", graph((x) => 900 / x + 6 + 0.25 * x, { xmin: 0, xmax: 160, ymin: 0, ymax: 80 }, [P(60, 36)], { a: 15, b: 160, step: { x: 20, y: 10 } })),
  num(S`For a gas, $P=\frac{1200}{V}$ kPa. Find $\frac{dP}{dV}$ at $V=30$ L (4 decimals).`, -1.3333, "−1200/V².", null, 0.0005),
  num(S`For a gas, $P=\frac{1200}{V}$ kPa, and the volume grows at 3 L/min. How fast is the pressure changing when $V=20$ L (kPa per min)?`, -9, "dP/dV = −3; dP/dt = −3 · 3."),
  num("R(x) = 80x − 0.02x² and C(x) = 5000 + 20x. The profit P = R − C is shown. Where is the marginal profit zero?", 1500, "P′ = 60 − 0.04x.", graph((x) => 60 * x - 0.02 * x * x - 5000, { xmin: 0, xmax: 3000, ymin: -6000, ymax: 42000 }, [P(1500, 40000)], { a: 0, b: 3000, step: { x: 500, y: 6000 } })),
  num(S`A tank holds $V(t)=3000\left(1-\frac{t}{60}\right)^2$ L. Find $V'(30)$ in L per min.`, -50, "6000(1 − t/60)(−1/60) at 30."),
  num(S`At a ticket price of $p$ dollars, $3000-50p$ tickets sell. What price maximizes revenue?`, 30, "R = 3000p − 50p²; R′ = 0."),
  tf("At the production level where the average cost is lowest, the average cost equals the marginal cost.", true, "A′ = (xC′ − C)/x² = 0 gives C′ = C/x."),
  num(S`A population is $P(t)=\frac{10000}{1+t}$. Find $P'(4)$.`, -400, "−10000/(1 + t)²."),
  num(S`A cylinder has height 8 cm. Find $\frac{dV}{dr}$ at $r=5$ cm (2 decimals).`, 251.33, "V = 8πr²; dV/dr = 16πr = 80π.", null, 0.01),
  num("C(x) = 0.002x³ − 0.6x² + 80x + 500. Its marginal cost C′(x) is shown. Find the lowest marginal cost.", 20, "C″ = 0.012x − 1.2 = 0 at x = 100; C′(100) = 60 − 120 + 80.", graph((x) => 0.006 * x * x - 1.2 * x + 80, { xmin: 0, xmax: 200, ymin: 0, ymax: 90 }, [P(100, 20)], { a: 0, b: 200, step: { x: 25, y: 10 } })),
  num("The profit P(x) = −0.5x² + 60x − 1000 is shown. Find the smaller break-even quantity.", 20, "x² − 120x + 2000 = 0: x = 20 or 100.", graph((x) => -0.5 * x * x + 60 * x - 1000, { xmin: 0, xmax: 120, ymin: -1200, ymax: 1000 }, [P(20, 0), P(100, 0), P(60, 800)], { a: 0, b: 120, step: { x: 10, y: 200 } })),
  num(S`Sound intensity is $I=\frac{500}{d^2}$. Find $\frac{dI}{dd}$ at $d=10$ m.`, -1, "−1000/d³."),
  mc("Which quantity best estimates the cost of producing the 51st item?", "C′(50)", ["C(51)", "C(50)/50", "C′(51) − C′(50)"], "Marginal cost at 50."),
  num(S`$R(x)=x(40-0.1x)$. At what $x$ is the marginal revenue zero?`, 200, "R′ = 40 − 0.2x."),
  num(S`An ice cube's edge is $s=3-0.1t$ cm. How fast is its volume changing at $t=10$ min (cm³ per min)?`, -1.2, "3s² · (−0.1) at s = 2.", null, 0.0001),
  num(S`A quantity is $Q(t)=\frac{4t+20}{t+1}$. Find $Q'(1)$.`, -4, "(4(t + 1) − (4t + 20))/(t + 1)² = −16/4."),
  num(S`$C(x)=1500+30x-0.1x^2+0.001x^3$. Find $C'(50)$.`, 27.5, "30 − 0.2(50) + 0.003(2500).", null, 0.0001),
  num("A braking car has s(t) = 25t − 2.5t² m (graph shown). How far does it travel before stopping?", 62.5, "v = 25 − 5t = 0 at t = 5.", graph((t) => 25 * t - 2.5 * t * t, { xmin: 0, xmax: 6, ymin: 0, ymax: 70 }, [P(5, 62.5)], { a: 0, b: 6, step: { x: 1, y: 10 } }), 0.0001),
];
