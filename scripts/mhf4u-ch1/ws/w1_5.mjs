// MHF4U Worksheet 1.5 — Slopes of Secants and Average Rate of Change (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Secant on a cubic", q: String.raw`Find the average rate of change of $f(x)=x^3$ on $[1,3]$.`,
    fig: F({ view: { xmin: -0.5, xmax: 3.5, ymin: -2, ymax: 30 }, curves: [{ f: (x) => x ** 3 }, { f: (x) => 13 * (x - 1) + 1, color: "red", a: 0.6, b: 3.3 }], points: [pt(1, 1), pt(3, 27)], step: { x: 1, y: 5 } }),
    steps: [String.raw`$\dfrac{f(3)-f(1)}{3-1}=\dfrac{27-1}{2}$.`, String.raw`$=13$: the slope of the red secant.`], ans: "13" },
  { title: "From a table", q: String.raw`Temperatures at $t=0,2,4,6$ h are $12, 18, 21, 15$ °C. Find the average rate of change on $[0,4]$ and on $[4,6]$.`,
    steps: [String.raw`$[0,4]$: $\dfrac{21-12}{4}=2.25$ °C/h.`, String.raw`$[4,6]$: $\dfrac{15-21}{2}=-3$ °C/h.`], ans: "2.25 °C/h; −3 °C/h (cooling)" },
  { title: "Average speed", q: String.raw`An object has travelled $d(t)=2t^2$ m after $t$ s. Find its average speed on $[1,4]$.`,
    steps: [String.raw`$d(4)=32$, $d(1)=2$.`, String.raw`$\dfrac{32-2}{4-1}=10$ m/s.`], ans: "10 m/s" },
  { title: "A negative rate", q: String.raw`A tank holds $V(t)=500-20t$ L after $t$ min. Interpret the average rate of change on any interval.`,
    steps: [String.raw`$V$ is linear with slope $-20$, so every secant has slope $-20$.`], ans: "−20 L/min: the tank loses 20 L each minute" },
  { title: "Same function, different intervals", q: String.raw`For $f(x)=-x^2+6x$, compare the average rates of change on $[0,2]$ and $[2,4]$.`,
    fig: F({ view: { xmin: -0.5, xmax: 6.5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => -x * x + 6 * x }, { f: (x) => 4 * x, color: "red", a: 0, b: 2 }, { f: (x) => 8, color: "green", a: 2, b: 4 }], points: [pt(0, 0), pt(2, 8), pt(4, 8)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$f(0)=0$, $f(2)=8$, $f(4)=8$.`, String.raw`$[0,2]$: $\tfrac{8}{2}=4$. $[2,4]$: $\tfrac{0}{2}=0$.`], ans: "4, then 0: the graph rises and falls back to the same height" },
  { title: "Compound interest", q: String.raw`An investment is worth $A(t)=1000(1.05)^t$ dollars after $t$ years. Find the average rate of change over the first 10 years.`,
    steps: [String.raw`$A(10)=1000(1.05)^{10}\approx1628.89$.`, String.raw`$\dfrac{1628.89-1000}{10}\approx62.89$ dollars per year.`], ans: String.raw`$\approx\$62.89$ per year` },
  { title: "A secant on a turning curve", q: String.raw`Find the slope of the secant to $f(x)=x^3-3x$ from $x=-2$ to $x=2$.`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }, { f: (x) => x, color: "red", a: -2, b: 2 }], points: [pt(-2, -2), pt(2, 2)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$f(-2)=-2$, $f(2)=2$.`, String.raw`$\dfrac{2-(-2)}{4}=1$, even though the graph goes up, down and up.`], ans: "1" },
  { title: "Cost per item", q: String.raw`The cost of making $x$ items is $C(x)=0.01x^2+5x+200$ dollars. Find the average rate of change from 100 to 200 items.`,
    steps: [String.raw`$C(100)=100+500+200=800$; $C(200)=400+1000+200=1600$.`, String.raw`$\dfrac{1600-800}{100}=8$ dollars per item.`], ans: String.raw`\$8 per item` },
  { title: "Find an endpoint", q: String.raw`The average rate of change of $f(x)=x^3$ on $[0,b]$ ($b>0$) is 16. Find $b$.`,
    steps: [String.raw`$\dfrac{b^3-0}{b-0}=b^2=16$.`, String.raw`$b=4$ (since $b>0$).`], ans: "b = 4" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the average rate of change of $f(x)=x^2+1$ on $[2,5]$.`, recap: "Average rate.", ans: String.raw`$\tfrac{26-5}{3}=7$` },
  { level: 1, q: String.raw`A town had 4500 people in 2010 and 5700 in 2020. Find the average rate of change.`, recap: "From data.", ans: "120 people per year" },
  { level: 1, q: String.raw`Find the slope of the secant through $(-1,4)$ and $(3,-4)$.`, recap: "Secant slope.", ans: "−2" },
  { level: 2, q: String.raw`A ball's height is $h(t)=-4.9t^2+30t+2$ m. Find its average velocity on $[1,3]$.`, recap: "Average velocity.", ans: String.raw`$\tfrac{47.9-27.1}{2}=10.4$ m/s` },
  { level: 2, q: String.raw`Find the average rate of change of $f(x)=2x^3-x$ on $[-1,2]$.`, recap: "Cubic.", ans: String.raw`$\tfrac{14-(-1)}{3}=5$` },
  { level: 2, q: String.raw`Use the graph of $y=0.25x^3$ to find the average rate of change on $[0,2]$ and on $[2,4]$. What do the two answers say about the graph?`, recap: "From a graph.", ans: "1 and 7: the graph gets steeper",
    fig: F({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 0.25 * x ** 3 }], points: [pt(0, 0), pt(2, 2), pt(4, 16)], step: { x: 1, y: 2 } }) },
  { level: 2, q: String.raw`\$2000 is invested at 4\% per year compounded annually: $A(t)=2000(1.04)^t$. Find the average rate of change over the first 5 years.`, recap: "Exponential.", ans: String.raw`$A(5)\approx2433.31$; $\approx\$86.66$ per year` },
  { level: 2, q: String.raw`A car's distance at $t=0,10,20,30$ s is $0, 150, 400, 750$ m. Find its average speed on $[0,30]$ and on $[10,20]$.`, recap: "Table.", ans: "25 m/s both times" },
  { level: 3, space: 5, q: String.raw`The average rate of change of $f(x)=x^2-2x$ on $[1,b]$ is 5. Find $b$.`, recap: "Unknown endpoint.", ans: String.raw`$\tfrac{(b-1)^2}{b-1}=b-1=5$: $b=6$` },
  { level: 3, space: 5, q: String.raw`Find $a$ so that the average rate of change of $f(x)=ax^3$ on $[1,3]$ is 52.`, recap: "Unknown coefficient.", ans: String.raw`$\tfrac{26a}{2}=13a=52$: $a=4$` },
  { level: 3, space: 5, q: String.raw`For $f(x)=x^3-4x$, find every $b>-2$ for which the secant from $x=-2$ to $x=b$ is horizontal. Show it on the graph.`, recap: "Zero average rate.", ans: String.raw`$f(-2)=0$, so $f(b)=0$: $b=0$ or $b=2$`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }], points: [pt(-2, 0)], step: { x: 1, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Explain why a linear function has the same average rate of change on every interval but $y=x^2$ does not. Use $[0,1]$ and $[1,2]$ for $y=x^2$.`, recap: "Linear vs nonlinear.", ans: "a line has one slope; for x² the rates are 1 and 3" },
  { level: 3, space: 5, q: String.raw`A tank drains so that $V(t)=50(10-t)^2$ L after $t$ min, $0\le t\le10$. Find the average rate of change on $[0,5]$ and on $[5,10]$, explain the difference, and sketch $V$.`, recap: "Draining tank.", ans: "−750 L/min, then −250 L/min: it drains more slowly as it empties", fig: gridT({ xmin: 0, xmax: 10, ymin: 0, ymax: 5000 }, { x: 1, y: 500 }) },
];

export const WS = {
  code: "1.5",
  title: "Slopes of Secants and Average Rate of Change",
  bigideas: String.raw`The average rate of change of $f$ on $[a,b]$ is $\dfrac{f(b)-f(a)}{b-a}$, the slope of the secant through the endpoints. Its units are output units per input unit. For a linear function it is constant; for other functions it depends on the interval. A rate of 0 means the endpoints are at the same height, not that nothing changed in between.`,
  goals: ["Calculate average rates of change.", "Connect them to secant slopes.", "Use tables, graphs and equations.", "Interpret rates with units."],
  curriculum: "D1.1–D1.4",
  vocab: [["Secant", "a line through two points of a curve"], ["Average rate of change", "$\\dfrac{\\Delta y}{\\Delta x}$ over an interval"], ["Units", "output per input, e.g. m/s"]],
  hook: String.raw`A driver covers 180 km in 2 h. Was the speedometer ever at exactly 90 km/h? Was it always at 90?`,
  concepts: [
    ["1. Secant slope", String.raw`$\dfrac{f(b)-f(a)}{b-a}$.
${F({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 0.5 * x * x }, { f: (x) => 2.5 * (x - 1) + 0.5, color: "red", a: 0.6, b: 4.3 }], points: [pt(1, 0.5, "A"), pt(4, 8, "B")], step: { x: 1, y: 1 } })}`],
    ["2. Units", String.raw`Always state the rate with units.`],
    ["3. Intervals matter", String.raw`For nonlinear functions, different intervals give different rates.`],
  ],
  tips: ["Subtract in the same order on top and bottom.", "Negative rate = decreasing on average.", "Rate 0 ≠ constant.", "Use exact values, round at the end.", "Include units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
