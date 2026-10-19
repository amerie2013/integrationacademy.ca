// 2.6 Rate of Change Problems — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  num(S`$C(x)=200+15x$ dollars. What is the marginal cost (dollars per item)?`, 15, "C′(x) = 15."),
  mc("What does the marginal cost C′(x) estimate?", "the cost of producing one more item", ["the total cost", "the fixed cost", "the average cost per item"], "C′(x) ≈ C(x + 1) − C(x)."),
  num(S`$R(x)=20x-0.1x^2$. Find $R'(50)$.`, 10, "20 − 0.2(50)."),
  tf("Changing the fixed cost changes the marginal cost.", false, "The derivative of a constant is 0."),
  num(S`At some level, $R'(x)=40$ and $C'(x)=25$ dollars per item. What is the marginal profit?`, 15, "P′ = R′ − C′."),
  num(S`$C(x)=100+2x+0.01x^2$. Find $C'(50)$.`, 3, "2 + 0.02(50)."),
  fill("If C is in dollars and x is a number of items, C′(x) is measured in dollars per ___.", ["item", "items"], "Output units per input unit."),
  num(S`A town's population is $P(t)=1000+50t$. How fast is it growing (people per year)?`, 50, "Constant rate."),
  num(S`A liquid's temperature is $T(t)=30-2t$ °C. What is its rate of change (°C per min)?`, -2, "Slope −2."),
  num(S`A cube has volume $V=s^3$. Find $\frac{dV}{ds}$ when $s=3$.`, 27, "3s²."),
  num("The revenue R(x) = 60x − x² is shown. For how many items is revenue greatest?", 30, "R′ = 60 − 2x = 0.", graph((x) => 60 * x - x * x, { xmin: 0, xmax: 60, ymin: 0, ymax: 1000 }, [P(30, 900)], { a: 0, b: 60, step: { x: 10, y: 100 } })),
  tf("A negative rate of change means the quantity is decreasing.", true, "Slope below zero."),
  num(S`A charge is $Q(t)=t^2+3t$ C. Find the current $Q'(1)$ in amperes.`, 5, "2t + 3."),
  num(S`Find $\frac{dA}{dr}$ for a circle, $A=\pi r^2$, when $r=2$ (3 decimals).`, 12.566, "2πr = 4π.", null, 0.001),
  mc("T is in °C and t in minutes. What are the units of dT/dt?", "°C per minute", ["°C", "minutes per °C", "°C · minutes"], "Output per input."),
  num(S`The demand is $p=30-0.5x$. Find the marginal revenue at $x=10$.`, 20, "R = 30x − 0.5x²; R′ = 30 − x."),
  num(S`$C(x)=50+x^2$. Find $C'(4)$.`, 8, "2x."),
  num(S`A car has travelled $d=t^3$ m after $t$ s. Find its speed at $t=2$.`, 12, "3t²."),
  num("The cost C(x) = 40 + 2x + 0.2x² is shown with its tangent at x = 10. What is the marginal cost there?", 6, "2 + 0.4(10).", graph((x) => 40 + 2 * x + 0.2 * x * x, { xmin: 0, xmax: 20, ymin: 0, ymax: 160 }, [P(10, 80)], { a: 0, b: 20, more: [{ f: (x) => 80 + 6 * (x - 10), color: "green" }], step: { x: 2, y: 20 } })),
  num(S`$P(x)=-x^2+40x$. Find $P'(15)$.`, 10, "−2(15) + 40."),
];

export const M = [
  num(S`$C(x)=2000+40x-0.05x^2$. Find $C'(100)$.`, 30, "40 − 0.1(100)."),
  num(S`$C(x)=500+10x+0.1x^2$. Find the true cost of the 101st item, $C(101)-C(100)$.`, 30.1, "10 + 0.1(101² − 100²) = 10 + 20.1.", null, 0.0001),
  num(S`$R(x)=100x-0.25x^2$. For how many items is revenue greatest?`, 200, "100 − 0.5x = 0."),
  num(S`$R(x)=50x$ and $C(x)=1000+10x+0.04x^2$. For how many items is profit greatest?`, 500, "P′ = 40 − 0.08x = 0."),
  num(S`A population is $P(t)=5000+300t-10t^2$. When does it stop growing?`, 15, "300 − 20t = 0."),
  num(S`A drink cools as $T(t)=25+\frac{72}{t+2}$ °C. Find $T'(4)$.`, -2, "−72/(t + 2)² at 4."),
  num(S`A tank holds $V(t)=1000-20t+0.1t^2$ L. Find the rate of change at $t=50$ min.`, -10, "−20 + 0.2(50)."),
  mc(S`$R'(300)<0$. What does this mean?`, "selling more than 300 items lowers total revenue", ["revenue is negative", "each item loses money", "costs are rising"], "Marginal revenue is negative."),
  num(S`$C(x)=800+4x$. Find the average cost per item at $x=100$.`, 12, "C(100)/100 = 1200/100."),
  num(S`A force is $F(r)=\frac{900}{r^2}$ N. Find $F'(3)$ (2 decimals).`, -66.67, "−1800/r³ at 3.", null, 0.01),
  num(S`For a circle, find $\frac{dA}{dr}$ when $r=4$ (3 decimals).`, 25.133, "2πr = 8π.", null, 0.001),
  num(S`The demand is $p=90-0.3x$. What price maximizes revenue?`, 45, "R′ = 90 − 0.6x = 0 at x = 150."),
  tf("Revenue is greatest where R′(x) = 0.", true, "The top of the revenue curve."),
  num(S`A charge is $Q(t)=4t^3-t$ C. Find the current at $t=2$ s.`, 47, "12t² − 1."),
  num(S`A tank holds $V(t)=200(5-t)^2$ L. Find $V'(3)$.`, -800, "−400(5 − t)."),
  num(S`$R(x)=25x$ and $C(x)=100+5x+0.5x^2$. Find the marginal profit at $x=10$.`, 10, "20 − x."),
  num(S`A culture has $N(t)=100+20t^2$ cells. Find its growth rate at $t=3$ h.`, 120, "40t."),
  num("The revenue R(x) = 80x − 0.4x² is shown. What is the maximum revenue?", 4000, "R′ = 0 at x = 100.", graph((x) => 80 * x - 0.4 * x * x, { xmin: 0, xmax: 200, ymin: 0, ymax: 4500 }, [P(100, 4000)], { a: 0, b: 200, step: { x: 25, y: 500 } })),
  num(S`Air temperature falls with height as $T(h)=15-6.5h$ °C ($h$ in km). Find $\frac{dT}{dh}$.`, -6.5, "Slope of the line.", null, 0.0001),
  num("A population P(t) = 2000 + 100t − 5t² is shown. At what time is it growing at 50 per year?", 5, "100 − 10t = 50.", graph((t) => 2000 + 100 * t - 5 * t * t, { xmin: 0, xmax: 20, ymin: 1800, ymax: 2600 }, [P(5, 2375)], { a: 0, b: 20, more: [{ f: (t) => 2375 + 50 * (t - 5), color: "green" }], step: { x: 2, y: 100 } })),
];
