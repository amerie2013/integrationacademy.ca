// MCV4U Worksheet 1.1 — Rates of Change and the Slope of a Curve (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Average rate from a table", q: String.raw`A town's population is 1200, 1450, 1800, 2300, 2950 at $t=0,2,4,6,8$ years. Find the average rate of change on $[0,8]$ and on $[6,8]$.`,
    steps: [String.raw`$[0,8]$: $\frac{2950-1200}{8}=218.75$ people per year.`, String.raw`$[6,8]$: $\frac{2950-2300}{2}=325$ people per year.`], ans: "218.75 and 325 people per year: growth is speeding up" },
  { title: "Average speed from an equation", q: String.raw`A car's distance is $s(t)=3t^2$ m. Find its average speed on $[2,5]$.`,
    fig: F({ view: { xmin: -0.3, xmax: 5.5, ymin: -5, ymax: 85 }, curves: [{ f: (t) => 3 * t * t, a: 0, b: 5.4 }, { f: (t) => 12 + 21 * (t - 2), color: "amber", a: 1, b: 5.5 }], points: [pt(2, 12), pt(5, 75)], step: { x: 1, y: 10 } }),
    steps: [String.raw`$\frac{s(5)-s(2)}{5-2}=\frac{75-12}{3}$.`], ans: "21 m/s" },
  { title: "Tangent slope from a graph", q: String.raw`The tangent to $y=\sqrt x$ at $x=4$ passes through $(0,1)$. Estimate the instantaneous rate of change at $x=4$.`,
    fig: F({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9 }, { f: (x) => 1 + 0.25 * x, color: "green" }], points: [pt(4, 2), pt(0, 1)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Tangent through $(0,1)$ and $(4,2)$: slope $\frac{2-1}{4-0}$.`], ans: "0.25" },
  { title: "Secants closing in", q: String.raw`Water volume is $V(t)=t^3$ L. Estimate the rate at $t=2$ using secants to $t=3, 2.5, 2.1, 2.01$.`,
    steps: [String.raw`$\frac{27-8}{1}=19$; $\frac{15.625-8}{0.5}=15.25$; $\frac{9.261-8}{0.1}=12.61$; $\frac{8.120601-8}{0.01}=12.0601$.`], ans: "≈ 12 L per unit time" },
  { title: "A centred estimate", q: String.raw`Estimate the instantaneous rate of change of $f(x)=2^x$ at $x=3$ using $[2.99,3.01]$.`,
    steps: [String.raw`$\frac{2^{3.01}-2^{2.99}}{0.02}\approx\frac{8.0556-7.9447}{0.02}\approx5.545$.`], ans: "≈ 5.55" },
  { title: "A corner", q: String.raw`Explain why $f(x)=|2x-4|$ has no tangent at $x=2$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(2 * x - 4) }], points: [pt(2, 0)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Secants from the left have slope $-2$; from the right, slope $2$.`], ans: "the one-sided slopes differ: no tangent" },
  { title: "Rate with units", q: String.raw`Producing $n$ items costs $C(n)=500+12n-0.01n^2$ dollars. Find the average rate of change from 100 to 200 items.`,
    steps: [String.raw`$C(100)=1600$, $C(200)=2500$.`, String.raw`$\frac{2500-1600}{100}=9$.`], ans: "9 dollars per item" },
  { title: "Where is the rate zero?", q: String.raw`The temperature graph peaks at $t=6$ h. Where is the instantaneous rate of change zero, positive, negative?`,
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 22 }, curves: [{ f: (t) => -0.5 * (t - 2) * (t - 10) + 12, a: 0, b: 12 }], points: [pt(6, 20)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Horizontal tangent at the peak $t=6$; rising before, falling after.`], ans: "0 at t = 6; positive for t < 6; negative for t > 6" },
  { title: "A piecewise distance graph", q: String.raw`A walker's distance graph goes from $(0,0)$ to $(10,800)$, stays level to $(15,800)$, then reaches $(25,2000)$ (min, m). Find the speed on each part.`,
    fig: F({ view: { xmin: -1, xmax: 27, ymin: -100, ymax: 2200 }, curves: [], segs: [{ pts: [[0, 0], [10, 800], [15, 800], [25, 2000]], color: "violet" }], points: [pt(10, 800), pt(15, 800), pt(25, 2000)], step: { x: 5, y: 400 } }),
    steps: [String.raw`$\frac{800}{10}=80$; $0$; $\frac{1200}{10}=120$ m/min.`], ans: "80, 0, 120 m/min" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the slope of the secant through $(-2,7)$ and $(3,-8)$.`, recap: "Secant slope.", ans: "−3" },
  { level: 1, q: String.raw`Find the average rate of change of $f(x)=x^2-1$ on $[0,3]$.`, recap: "Average rate.", ans: "3" },
  { level: 1, q: String.raw`Fuel is measured in litres and distance in kilometres. State the units of the rate of fuel use with respect to distance.`, recap: "Units.", ans: "L/km" },
  { level: 2, q: String.raw`Water temperature is 20, 32, 41, 47 °C at $t=0,5,10,15$ min. Find the average rate on $[0,15]$ and on $[10,15]$.`, recap: "Table.", ans: "1.8 and 1.2 °C/min" },
  { level: 2, q: String.raw`Draw the tangent to $y=0.25x^2$ at $x=2$ and estimate its slope.`, recap: "Tangent from a graph.", ans: "≈ 1",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 0.25 * x * x }], points: [pt(2, 1)], step: { x: 1, y: 1 } }) },
  { level: 2, q: String.raw`For $f(x)=x^2+2$, compute the secant slopes from $x=1$ to $x=2, 1.5, 1.1, 1.01$ and estimate the tangent slope at $x=1$.`, recap: "Shrinking secants.", ans: "3, 2.5, 2.1, 2.01 → 2" },
  { level: 2, q: String.raw`A ball's height is $h(t)=-4.9t^2+15t$ m. Estimate its velocity at $t=1$ using $[0.99,1.01]$.`, recap: "Centred estimate.", ans: "5.2 m/s" },
  { level: 2, q: String.raw`On which intervals is the instantaneous rate of change of the function shown negative?`, recap: "Sign from a graph.", ans: String.raw`$-1\lt x\lt1$ (between the turning points)`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x }], step: { x: 0.5, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Show that $f(x)=|x^2-1|$ has no tangent at $x=1$ by finding the one-sided limits of the secant slopes.`, recap: "Corner.", ans: "left slope −2, right slope 2" },
  { level: 3, space: 5, q: String.raw`A driver's average speed over a trip is 60 km/h. Explain, using secants and tangents of the distance-time graph, why the speedometer must read exactly 60 km/h at some moment.`, recap: "Reasoning.", ans: "the tangent turns smoothly, so somewhere it is parallel to the secant (slope 60)" },
  { level: 3, space: 5, q: String.raw`For $f(x)=x^2$, find $b>1$ so that the average rate of change on $[1,b]$ equals the instantaneous rate at $x=3$.`, recap: "Match rates.", ans: String.raw`$1+b=6$: $b=5$` },
  { level: 3, space: 5, q: String.raw`Coffee cools as $T(t)=20+60(0.9)^t$ °C. Find the average rate on $[0,10]$ and estimate the instantaneous rate at $t=5$. Which is larger in size, and why?`, recap: "Compare rates.", ans: "≈ −3.91 and ≈ −3.73 °C/min; it cools fastest at the start" },
  { level: 3, space: 5, q: String.raw`Sketch a smooth graph whose instantaneous rate of change is positive and increasing on $[0,2]$, zero at $x=4$, and negative on $(4,6]$.`, recap: "Rates to a graph.", ans: "concave-up rise, then bending over to a peak at x = 4, then falling", fig: gridT({ xmin: 0, xmax: 6, ymin: 0, ymax: 10 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "1.1",
  title: "Rates of Change and the Slope of a Curve",
  bigideas: String.raw`A rate of change compares the change in one quantity with the change in another. The average rate on $[a,b]$ is the slope of the secant: $\frac{f(b)-f(a)}{b-a}$. The instantaneous rate at $x=a$ is the slope of the tangent; it can be estimated from a drawn tangent or from secants whose second point approaches $a$ (a centred interval is often best). At a corner the one-sided slopes differ, so no tangent exists.`,
  goals: ["Compute average rates as secant slopes.", "Estimate instantaneous rates from tangents.", "Use approaching secants and centred intervals.", "Recognize points with no tangent."],
  curriculum: "A1.1–A1.3",
  vocab: [["Secant", "line through two points of a curve"], ["Tangent", "line matching the curve's direction at a point"], ["Average rate", "$\\frac{\\Delta y}{\\Delta x}$"]],
  hook: String.raw`Your phone shows an average speed of 48 km/h for a drive. Did you ever drive at exactly 48 km/h? At 80 km/h?`,
  concepts: [
    ["1. Secant to tangent", String.raw`As $B$ approaches $A$, the secant becomes the tangent.
${F({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 0.6 * x * x }, { f: (x) => 0.6 + 2.4 * (x - 1), color: "amber" }, { f: (x) => 0.6 + 1.2 * (x - 1), color: "green" }], points: [pt(1, 0.6, "A"), pt(3, 5.4, "B")], step: { x: 1, y: 1 } })}`],
    ["2. Units", String.raw`Output units per input unit.`],
    ["3. Smoothness", String.raw`No corners or breaks → a tangent exists.`],
  ],
  tips: ["Subtract in the same order.", "Read tangent slopes from far-apart points.", "Centred intervals are more accurate.", "State units.", "Corners have no tangent."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
