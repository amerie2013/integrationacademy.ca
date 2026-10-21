// IB AA SL Worksheet 5.6 — Kinematics and Rates of Change (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "v and a", q: S`$s=t^3-3t^2+5$ m. Find $v$ and $a$ at $t=4$ s.`,
    steps: [S`$v=3t^2-6t=24$; $a=6t-6=18$.`], ans: "24 m/s; 18 m/s²" },
  { title: "At rest", q: S`For $s=t^3-3t^2+5$, find when the particle is at rest.`,
    steps: [S`$3t(t-2)=0$.`], ans: S`$t=0$ and $t=2$` },
  { title: "Direction", q: S`For $s=t^3-3t^2+5$, when is the particle moving left?`,
    steps: [S`$v<0$ for $0<t<2$.`], ans: S`$0<t<2$` },
  { title: "Speeding up", q: S`For $s=t^3-3t^2+5$, is the particle speeding up at $t=0.5$?`,
    steps: [S`$v=-2.25$, $a=-3$: same sign.`], ans: "yes" },
  { title: "Distance", q: S`For $s=t^3-3t^2+5$, find the distance travelled from $t=0$ to $t=3$.`,
    fig: F({ view: { xmin: -0.2, xmax: 3.3, ymin: -1, ymax: 7 }, curves: [{ f: (t) => t ** 3 - 3 * t * t + 5, a: 0, b: 3 }], points: [pt(0, 5), pt(2, 1), pt(3, 5)], step: { x: 0.5, y: 1 } }),
    steps: [S`$s(0)=5$, $s(2)=1$, $s(3)=5$.`, S`$4+4$.`], ans: "8 m" },
  { title: "Vertical motion", q: S`A ball's height is $s=25t-5t^2$ m. Find the maximum height and the speed when it lands.`,
    steps: [S`$v=25-10t=0\Rightarrow t=2.5$; $s=31.25$.`, S`Lands at $t=5$: $v=-25$.`], ans: "31.25 m; 25 m/s" },
  { title: "Velocity graph", q: "The velocity of a particle is shown. When is it at rest, and when is its acceleration zero?",
    fig: F({ view: { xmin: -0.2, xmax: 5.2, ymin: -5, ymax: 8 }, curves: [{ f: (t) => t * t - 4 * t + 3, a: 0, b: 5 }], points: [pt(1, 0), pt(3, 0), pt(2, -1, null, "red")], step: { x: 0.5, y: 1 } }),
    steps: ["v = 0 at t = 1 and t = 3.", "a = v′ = 0 at the minimum of v, t = 2."], ans: "rest at t = 1, 3; a = 0 at t = 2" },
  { title: "Marginal revenue", q: S`Revenue is $R(x)=40x-0.1x^2$. Find and interpret $R'(150)$.`,
    steps: [S`$R'=40-0.2x=10$.`], ans: "about 10 dollars per extra item" },
  { title: "Rate of change of area", q: S`A square's side is $x$ cm. Find the rate of change of its area with respect to $x$ when $x=7$.`,
    steps: [S`$A=x^2$, $\frac{dA}{dx}=2x$.`], ans: "14 cm² per cm" },
];

const PROBLEMS = [
  { level: 1, q: S`$s=3t^2-2t$. Find $v$ at $t=2$.`, recap: "Velocity.", ans: "10" },
  { level: 1, q: S`$v=t^3+t$. Find $a$ at $t=1$.`, recap: "Acceleration.", ans: "4" },
  { level: 1, q: S`$s=t^2-8t$. When is the particle at rest?`, recap: "At rest.", ans: "t = 4" },
  { level: 2, q: S`$s=t^3-9t^2+24t$. Find the times when the particle is at rest.`, recap: "At rest.", ans: S`$t=2$, $4$` },
  { level: 2, q: S`For $s=t^3-9t^2+24t$, find the distance travelled from $t=0$ to $t=5$.`, recap: "Distance.", ans: "28 m" },
  { level: 2, q: S`For $s=t^3-9t^2+24t$, when is the acceleration zero, and what is the velocity then?`, recap: "a = 0.", ans: S`$t=3$; $v=-3$` },
  { level: 2, q: S`At an instant $v=6$ and $a=-2$. Is the particle speeding up?`, recap: "Signs.", ans: "no, slowing down" },
  { level: 2, q: S`$C(x)=800+25x-0.01x^2$. Find the marginal cost at $x=200$.`, recap: "Marginal cost.", ans: "21" },
  { level: 3, space: 4, q: S`A stone is thrown up from a 40 m cliff: $s=40+15t-5t^2$. Find the maximum height and when it hits the ground below.`, recap: "Projectile.", ans: S`51.25 m; $t\approx4.70$ s`,
    fig: F({ view: { xmin: -0.2, xmax: 5, ymin: -2, ymax: 56 }, curves: [{ f: (t) => 40 + 15 * t - 5 * t * t, a: 0, b: 4.7 }], step: { x: 0.5, y: 5 } }) },
  { level: 3, space: 4, q: S`$v=t^2-5t+6$. Given $s=\frac{t^3}{3}-2.5t^2+6t$, find the distance in the first 3 s.`, recap: "Distance from v.", ans: S`$\frac{29}{6}\approx4.83$ m` },
  { level: 3, space: 4, q: S`$s=2t^3-15t^2+36t$. Find the intervals when the particle is slowing down.`, recap: "Slowing down.", ans: S`$0\le t<2$ and $2.5<t<3$` },
  { level: 3, space: 4, q: S`A spherical balloon has volume $V=\frac43\pi r^3$. Find $\frac{dV}{dr}$ at $r=3$ cm and interpret it.`, recap: "Rate.", ans: S`$36\pi$ cm³ per cm` },
  { level: 3, space: 4, q: S`A particle has $s=t^3-3t^2$. Find its greatest speed for $0\le t\le4$.`, recap: "Greatest speed.", ans: S`24 m/s (at $t=4$; $|v(1)|=3$)` },
];

export const WS = {
  code: "5.6",
  title: "Kinematics and Rates of Change",
  bigideas: S`For motion along a line: $v=\frac{ds}{dt}$, $a=\frac{dv}{dt}$. At rest when $v=0$; the sign of $v$ gives the direction; speeding up when $v$ and $a$ have the same sign. Distance travelled: split at the times $v=0$ and add the sizes of the changes in $s$. Every derivative is a rate of change with units, e.g. marginal cost.`,
  goals: ["Find velocity and acceleration.", "Describe direction and speed changes.", "Find distance travelled.", "Interpret rates of change."],
  curriculum: "SL 5.9, SL 5.1",
  vocab: [["Velocity", S`$\frac{ds}{dt}$`], ["Acceleration", S`$\frac{dv}{dt}$`], ["Marginal cost", S`$C'(x)$`]],
  hook: "Walk forwards, stop, walk backwards along a tape measure while a partner records your position every second. Plot s against t and discuss the gradient.",
  concepts: [
    ["1. s, v, a", S`${F({ view: { xmin: -0.2, xmax: 3.3, ymin: -4, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 3 * t * t + 5, a: 0, b: 3.2 }, { f: (t) => 3 * t * t - 6 * t, a: 0, b: 3.2, color: "green" }], step: { x: 0.5, y: 2 } }, 5)} v (green) is zero where s turns.`],
    ["2. Speeding up", S`$v\cdot a>0$ speeding up; $v\cdot a<0$ slowing down.`],
    ["3. Distance", "Split at v = 0; add |Δs|."],
  ],
  tips: ["Keep signs.", "Speed = |v|.", "Split at v = 0.", "Give units.", "Marginal = derivative."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
