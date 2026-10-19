// MCV4U Worksheet 2.6 — Rate of Change Problems (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Marginal cost", q: S`$C(x)=3000+25x+0.01x^2$ dollars. Find $C'(200)$ and the true cost of the 201st item.`,
    steps: [S`$C'(x)=25+0.02x\Rightarrow C'(200)=29$.`, S`$C(201)-C(200)=25+0.01(201^2-200^2)=25+4.01$.`], ans: "about 29 dollars per item; the 201st item costs 29.01 dollars" },
  { title: "Average and marginal cost", q: S`$C(x)=400+6x+0.04x^2$. Compare the average cost and the marginal cost at $x=100$.`,
    fig: F({ view: { xmin: 0, xmax: 250, ymin: 0, ymax: 40 }, curves: [{ f: (x) => 400 / x + 6 + 0.04 * x, a: 15, b: 250 }, { f: (x) => 6 + 0.08 * x, color: "blue", a: 0, b: 250 }], points: [pt(100, 14)], step: { x: 50, y: 5 } }),
    steps: [S`$\frac{C(100)}{100}=\frac{400+600+400}{100}=14$.`, S`$C'(x)=6+0.08x\Rightarrow C'(100)=14$.`], ans: "both 14 dollars per item: the average cost is lowest where it equals the marginal cost" },
  { title: "Revenue from demand", q: S`The demand is $p=80-0.5x$ dollars. Find $R'(60)$ and the price that maximizes revenue.`,
    steps: [S`$R=80x-0.5x^2$, $R'=80-x$; $R'(60)=20$.`, S`$R'=0\Rightarrow x=80$, $p=40$, $R=3200$.`], ans: "R′(60) = 20 dollars per item; price 40 dollars, revenue 3200 dollars" },
  { title: "Profit", q: S`$R(x)=30x$ and $C(x)=200+10x+0.05x^2$. Find $P'(100)$ and the maximum profit.`,
    fig: F({ view: { xmin: 0, xmax: 400, ymin: -400, ymax: 2000 }, curves: [{ f: (x) => -200 + 20 * x - 0.05 * x * x, a: 0, b: 400 }], points: [pt(200, 1800)], step: { x: 50, y: 400 } }),
    steps: [S`$P=-200+20x-0.05x^2$, $P'=20-0.1x$; $P'(100)=10$.`, S`$P'=0$ at $x=200$: $P=1800$.`], ans: "10 dollars per item; maximum 1800 dollars at 200 items" },
  { title: "Population", q: S`A town has $P(t)=12000+400t+15t^2$ people $t$ years after 2025. How fast is it growing in 2030?`,
    steps: [S`$P'(t)=400+30t$; $t=5$.`], ans: "550 people per year" },
  { title: "Draining water", q: S`A tank holds $V(t)=50(10-t)^2$ L after $t$ min ($0\le t\le10$). How fast is it draining at $t=4$?`,
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 5000 }, curves: [{ f: (t) => 50 * (10 - t) ** 2, a: 0, b: 10 }, { f: (t) => 1800 - 600 * (t - 4), color: "green", a: 1, b: 7 }], points: [pt(4, 1800)], step: { x: 1, y: 500 } }),
    steps: [S`$V'(t)=100(10-t)(-1)$; $V'(4)=-600$.`], ans: "draining at 600 L per minute" },
  { title: "Electric current", q: S`The charge through a wire is $Q(t)=t^3-2t^2+5t$ coulombs. The current is $I=Q'(t)$ (amperes). Find $I(2)$.`,
    steps: [S`$I=3t^2-4t+5$; $I(2)=12-8+5$.`], ans: "9 A" },
  { title: "A sphere", q: S`Find the rate of change of the volume $V=\frac43\pi r^3$ of a sphere with respect to its radius when $r=10$ cm.`,
    steps: [S`$\frac{dV}{dr}=4\pi r^2=400\pi$.`], ans: S`$400\pi\approx1256.6$ cm³ per cm (the surface area)` },
  { title: "Force and distance", q: S`The attraction between two objects is $F(r)=\frac{4000}{r^2}$ N at distance $r$ m. Find $F'(20)$ and interpret.`,
    fig: F({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 40 }, curves: [{ f: (r) => 4000 / (r * r), a: 10, b: 50 }], points: [pt(20, 10)], step: { x: 5, y: 5 } }),
    steps: [S`$F'(r)=-8000r^{-3}$; $F'(20)=-\frac{8000}{8000}$.`], ans: "−1 N per m: the force drops about 1 N for each extra metre" },
];

const PROBLEMS = [
  { level: 1, q: S`$C(x)=500+8x$ dollars. What is the marginal cost?`, recap: "Linear cost.", ans: "8 dollars per item" },
  { level: 1, q: S`$R(x)=15x-0.02x^2$. Find $R'(100)$.`, recap: "R′ = 15 − 0.04x.", ans: "11 dollars per item" },
  { level: 1, q: S`The charge is $Q(t)=2t^2+t$ C. Find the current at $t=3$ s.`, recap: "I = Q′.", ans: "13 A" },
  { level: 2, q: S`$C(x)=1200+30x-0.02x^2+0.0001x^3$. Find the marginal cost at $x=100$.`, recap: "C′ = 30 − 0.04x + 0.0003x².", ans: "29 dollars per item" },
  { level: 2, q: S`$R(x)=45x$ and $C(x)=500+5x+0.1x^2$. Find the marginal profit at $x=150$.`, recap: "P′ = R′ − C′.", ans: "10 dollars per item" },
  { level: 2, q: S`The demand is $p=50-0.25x$. Find the quantity, price and revenue that maximize revenue.`, recap: "R = xp, R′ = 0.", ans: "100 items at 25 dollars; 2500 dollars" },
  { level: 2, q: S`An oven's temperature is $T(t)=20+15t-0.25t^2$ °C after $t$ min. Find $T'(10)$.`, recap: "Units: °C per minute.", ans: "10 °C per minute" },
  { level: 2, q: S`A colony has $P(t)=900-\frac{600}{t+1}$ insects. Find $P'(4)$ and sketch $P$.`, recap: "P′ = 600/(t + 1)².", ans: "24 insects per day", fig: gridT({ xmin: 0, xmax: 20, ymin: 0, ymax: 1000 }, { x: 2, y: 100 }) },
  { level: 3, space: 5, q: S`$C(x)=900+4x+0.01x^2$. Find the production level that minimizes the average cost, and show that the average and marginal costs are equal there.`, recap: "A(x) = C(x)/x, A′ = 0.", ans: S`$x=300$; $A(300)=10=C'(300)$` },
  { level: 3, space: 5, q: S`The quantity sold at price $p$ is $x=1000-20p$. Write revenue as a function of $p$, find $\frac{dR}{dp}$ at $p=20$, and the price that maximizes revenue.`, recap: "R(p) = p(1000 − 20p).", ans: S`$R'(p)=1000-40p$; $200$ dollars per dollar; $p=25$` },
  { level: 3, space: 5, q: S`A cylinder has height 10 cm. Find the rate of change of its volume with respect to its radius at $r=3$ cm, and explain the result geometrically.`, recap: "V = 10πr².", ans: S`$60\pi\approx188.5$ cm³ per cm: the curved surface area` },
  { level: 3, space: 5, q: S`A tank holds $V(t)=2000\left(1-\frac{t}{40}\right)^2$ L. Find the draining rate at $t=10$ min, and the time when it drains at 50 L per minute.`, recap: "Chain rule on the square.", ans: S`$-75$ L per min; $t=20$ min` },
  { level: 3, space: 5, q: S`A company's profit is $P(x)=-0.02x^2+12x-800$. Find the break-even quantities, the maximum profit, and sketch $P$.`, recap: "P = 0 and P′ = 0.", ans: S`$x\approx76.4$ and $523.6$; maximum 1000 dollars at $x=300$`, fig: gridT({ xmin: 0, xmax: 600, ymin: -1000, ymax: 1200 }, { x: 50, y: 200 }) },
];

export const WS = {
  code: "2.6",
  title: "Rate of Change Problems",
  bigideas: S`A derivative is a rate with units: output units per input unit. In economics, $C'(x)$ (marginal cost) estimates the cost of the next item, $R'(x)$ is marginal revenue, and $P'(x)=R'(x)-C'(x)$ is marginal profit; revenue $R=xp$ uses the demand function $p(x)$. In science, derivatives give growth rates, draining rates, currents and forces. A rate of zero often marks a maximum or minimum. Always state the number, its units and its meaning.`,
  goals: ["Interpret derivatives with units.", "Use marginal cost, revenue and profit.", "Build revenue from a demand function.", "Apply derivatives to science models."],
  curriculum: "A3.5",
  vocab: [["Marginal cost", "$C'(x)\\approx C(x+1)-C(x)$"], ["Demand function", "price as a function of quantity"], ["Average cost", "$\\frac{C(x)}{x}$"]],
  hook: S`A bakery's cost to make $x$ loaves is $C(x)$. Which number helps decide whether to bake one more loaf: $C(100)$, $\frac{C(100)}{100}$ or $C'(100)$?`,
  concepts: [
    ["1. The tangent estimates the next unit", S`$C(x)=500+20x+0.05x^2$ with its tangent at $x=100$ (slope $C'(100)=30$):
${F({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 7000 }, curves: [{ f: (x) => 500 + 20 * x + 0.05 * x * x, a: 0, b: 200 }, { f: (x) => 3000 + 30 * (x - 100), color: "green", a: 20, b: 180 }], points: [pt(100, 3000)], step: { x: 25, y: 1000 } })}`],
    ["2. Profit", S`$P=R-C$, so $P'=R'-C'$; profit is greatest where $R'=C'$.`],
    ["3. Interpret", S`Number $+$ units $+$ meaning, e.g. "$-5$ °C per min: cooling at 5 degrees per minute".`],
  ],
  tips: ["A rate is not a total.", "Fixed costs disappear in C′.", "Revenue is greatest where R′ = 0, not where R = 0.", "Negative rates mean decreasing — say so.", "Keep answers in the realistic domain."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
