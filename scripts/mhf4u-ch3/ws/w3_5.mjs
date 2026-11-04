// MHF4U Worksheet 3.5 — Rational Function Models (teacher edition)
import { gridT, pt, F } from "./figT.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "Average cost", q: S`A bakery's average cost is $A(x)=\dfrac{1200+15x}x$ dollars per cake. Find $A(100)$, the horizontal asymptote and the number of cakes with $A=20$.`,
    fig: F({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 60 }, curves: [{ f: (x) => (1200 + 15 * x) / x, a: 25, b: 500, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true }], points: [pt(100, 27), pt(240, 20)], step: { x: 100, y: 10 }, xlabel: "cakes", ylabel: "dollars" }),
    steps: [S`$A(100)=\frac{1200+1500}{100}=27$ dollars.`, S`For large $x$, $A\to15$, the cost of ingredients per cake.`, S`$1200+15x=20x\Rightarrow x=240$.`], ans: S`27 dollars; $y=15$; 240 cakes` },
  { title: "Concentration", q: S`A 200 L tank holds water with 20 g of salt. Brine with 1 g/L flows in at 5 L/min. Write $C(t)$ in g/L, find $C(20)$ and the long-run value, and when $C=0.5$.`,
    fig: F({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 1.2 }, curves: [{ f: (t) => (4 + t) / (40 + t), a: 0, b: 200, color: "violet" }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [pt(32, 0.5)], step: { x: 20, y: 0.2 }, xlabel: "t (min)", ylabel: "C (g/L)" }),
    steps: [S`Salt: $20+5t$. Volume: $200+5t$. $C(t)=\frac{20+5t}{200+5t}=\frac{4+t}{40+t}$.`, S`$C(20)=\frac{24}{60}=0.4$. As $t$ grows, $C\to1$.`, S`$\frac{4+t}{40+t}=\frac12\Rightarrow8+2t=40+t\Rightarrow t=32$.`], ans: S`$0.4$ g/L; $1$ g/L; $t=32$ min` },
  { title: "Inverse square law", q: S`A force is $F(r)=\dfrac{400}{r^2}$ at distance $r$ m. Find the average rate of change on $[2,4]$ and estimate the instantaneous rate at $r=2$.`,
    fig: F({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 120 }, curves: [{ f: (r) => 400 / r ** 2, a: 1.85, b: 8, color: "violet" }], points: [pt(2, 100), pt(4, 25)], step: { x: 1, y: 20 } }),
    steps: [S`$\frac{25-100}{4-2}=-37.5$.`, S`On $[2,2.001]$: $F(2.001)\approx99.90$, so the rate is about $\frac{99.90-100}{0.001}=-100$.`], ans: S`$-37.5$ per m; about $-100$ per m` },
  { title: "Travel time", q: S`A 300 km trip at speed $v$ takes $t(v)=\dfrac{300}v$ h. Find the average rate from $v=60$ to $v=100$ and interpret it.`,
    fig: F({ view: { xmin: 0, xmax: 150, ymin: 0, ymax: 12 }, curves: [{ f: (v) => 300 / v, a: 26, b: 150, color: "violet" }], points: [pt(60, 5), pt(100, 3)], step: { x: 25, y: 2 } }),
    steps: [S`$t(60)=5$, $t(100)=3$.`, S`$\frac{3-5}{100-60}=-0.05$.`, S`Each extra km/h saves about 0.05 h, or 3 minutes, on average.`], ans: S`$-0.05$ h per km/h` },
  { title: "Work rates", q: S`Hose A fills a pool in 3 h. With hose B the pool fills in 2 h. How long would B take alone?`,
    steps: [S`Rates add: $\frac13+\frac1B=\frac12$.`, S`$\frac1B=\frac12-\frac13=\frac16$.`], ans: S`6 h` },
  { title: "A drug model", q: S`A concentration is $C(t)=\dfrac{8t}{t^2+1}$ mg/L after $t$ h. (a) When is $C\ge3.2$? (b) Find the average rate on $[1,2]$.`,
    fig: F({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 5 }, curves: [{ f: (t) => 8 * t / (t * t + 1), a: 0, b: 8, color: "violet" }, { f: () => 3.2, color: "green" }], points: [pt(0.5, 3.2), pt(2, 3.2), pt(1, 4)] }),
    steps: [S`$8t\ge3.2t^2+3.2\Rightarrow t^2-2.5t+1\le0\Rightarrow(t-2)(t-0.5)\le0$.`, S`$C(1)=4$, $C(2)=3.2$: rate $-0.8$ mg/L per h.`], ans: S`$0.5\le t\le2$; $-0.8$ mg/L per h` },
  { title: "Against a current", q: S`A boat moves at 15 km/h in still water. A 36 km trip up and back takes 5 h. Find the current.`,
    steps: [S`$\frac{36}{15-c}+\frac{36}{15+c}=5$.`, S`$\frac{36\cdot30}{225-c^2}=5\Rightarrow1080=1125-5c^2$.`, S`$c^2=9$, so $c=3$ (the current is positive).`], ans: S`3 km/h` },
  { title: "A levelling-off population", q: S`A town's population in thousands is $P(t)=\dfrac{500t+200}{t+4}$. Find $P(0)$, the long-run value and when $P=300$.`,
    fig: F({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 600 }, curves: [{ f: (t) => (500 * t + 200) / (t + 4), a: 0, b: 40, color: "violet" }], lines: [{ m: 0, b: 500, color: "red", dash: true }], points: [pt(5, 300)], step: { x: 5, y: 100 } }),
    steps: [S`$P(0)=50$. HA: $y=500$.`, S`$500t+200=300t+1200\Rightarrow t=5$.`], ans: S`50 thousand; 500 thousand; $t=5$` },
  { title: "Thin lens", q: S`For a lens with focal length 10 cm, $\frac1u+\frac1v=\frac1{10}$. Write $v$ as a function of $u$, find $v$ when $u=30$ and interpret the asymptote.`,
    fig: F({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 60 }, curves: [{ f: (u) => 10 * u / (u - 10), a: 12, b: 60, color: "violet" }], vlines: [{ x: 10, color: "red", dash: true }], lines: [{ m: 0, b: 10, color: "red", dash: true }], points: [pt(30, 15)], step: { x: 10, y: 10 } }),
    steps: [S`$\frac1v=\frac1{10}-\frac1u=\frac{u-10}{10u}$, so $v=\frac{10u}{u-10}$.`, S`$v(30)=\frac{300}{20}=15$ cm.`, S`As $u\to10^+$, $v\to\infty$: no image forms at the focal point.`], ans: S`$v=\dfrac{10u}{u-10}$; 15 cm` },
];

const PROBLEMS = [
  { level: 1, q: S`For $A(x)=\dfrac{800+5x}x$, find $A(200)$.`, ans: S`$9$` },
  { level: 1, q: S`A 90 km trip takes $t=\dfrac{90}v$ h. Find the time at 45 km/h.`, ans: S`2 h` },
  { level: 1, q: S`Light intensity is $I=\dfrac{72}{d^2}$. Find $I$ when $d=3$.`, ans: S`$8$` },
  { level: 2, q: S`$A(x)=\dfrac{2400+30x}x$ is an average cost. Find the horizontal asymptote and the number of items with $A=38$.`, ans: S`$y=30$; 300 items` },
  { level: 2, q: S`$C(t)=\dfrac{6t}{t^2+9}$ mg/L. Find $C(3)$ and when $C\ge0.6$.`, fig: gridT({ xmin: 0, xmax: 12, ymin: 0, ymax: 2 }, { x: 1, y: 0.5 }), ans: S`$1$; $1\le t\le9$` },
  { level: 2, q: S`Pipe A fills a tank in 4 h, pipe B in 12 h. How long do they take together?`, ans: S`3 h` },
  { level: 2, q: S`A tank has 100 L of pure water. Brine with 2 g/L flows in at 4 L/min. Write $C(t)$, find when $C=1$ and the long-run value.`, ans: S`$C=\frac{2t}{25+t}$; $t=25$ min; $2$ g/L` },
  { level: 2, q: S`$F(r)=\dfrac{200}{r^2}$. Find the average rate on $[1,2]$ and estimate the instantaneous rate at $r=2$.`, ans: S`$-150$; about $-50$` },
  { level: 3, space: 5, q: S`A plane flies 300 km into a wind and 300 km back, at 200 km/h in still air, in 3.125 h. Find the wind speed.`, ans: S`40 km/h` },
  { level: 3, space: 5, q: S`An open box with a square base holds $500$ cm$^3$. Show the surface area is $S(x)=x^2+\dfrac{2000}x$, and use technology to find the base side with least area.`, fig: gridT({ xmin: 0, xmax: 25, ymin: 0, ymax: 800 }, { x: 5, y: 100 }), ans: S`$x=10$ cm, $S=300$ cm$^2$` },
  { level: 3, space: 5, q: S`$A(x)=\dfrac{F+vx}x$ is an average cost with fixed cost $F$ and unit cost $v$. Explain what the horizontal asymptote means and why the average cost never reaches it.`, ans: S`$A=v+\frac Fx$; asymptote $y=v$; $\frac Fx>0$ for every $x$` },
  { level: 3, space: 5, q: S`$C(t)=\dfrac{10t}{t^2+16}$ mg/L. A dose is effective while $C\ge1$. How long is it effective? Find the largest concentration by testing a graph.`, fig: gridT({ xmin: 0, xmax: 12, ymin: 0, ymax: 2 }, { x: 1, y: 0.5 }), ans: S`$2\le t\le8$: 6 h; max $1.25$ at $t=4$` },
  { level: 3, space: 5, q: S`Worker A takes $x$ h for a job, worker B takes $x+5$ h, and together they take 6 h. Find $x$ and explain why you reject one root.`, ans: S`$x^2-7x-30=0$: $x=10$; $x=-3$ is rejected (time is positive)` },
];

export const WS = {
  code: "3.5",
  title: "Rational Function Models",
  bigideas: S`Rational functions model quantities that are a ratio of two changing amounts: average cost, concentration, intensity, travel time and work rates. The horizontal asymptote gives the long-run value, a vertical asymptote gives a limit on the input, and the context restricts the domain. Rates of change are found with secants and shrinking intervals, exactly as for polynomials.`,
  goals: ["Build a rational model from a description.", "Interpret asymptotes in context.", "Solve equations and inequalities from a model.", "Find average and estimate instantaneous rates of change."],
  curriculum: "C3.7, D1.9",
  vocab: [["Average cost", "total cost divided by the number of items"], ["Concentration", "amount of substance divided by volume"], ["Inverse square law", "output proportional to $\\frac1{d^2}$"], ["Work rate", "the fraction of a job done per unit of time; rates add"]],
  hook: S`A club orders T-shirts: 240 dollars for setup and 6 dollars per shirt. What is the cost per shirt for 10 shirts? 100 shirts? 10 000 shirts? Will it ever reach 6 dollars?`,
  concepts: [
    ["1. Building a model", S`Name the two quantities in the ratio, write each as a function of the same variable, and state the domain. For salt in a tank: $C(t)=\dfrac{\text{salt}(t)}{\text{volume}(t)}$.`],
    ["2. Reading the asymptotes", S`$A(x)=\frac{500+4x}x=4+\frac{500}x$ has HA $y=4$: for a large order, cost per item approaches the unit cost. The asymptote at $x=0$ says the first item carries all the fixed cost.
${F({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 30 }, curves: [{ f: (x) => (500 + 4 * x) / x, a: 20, b: 300, color: "violet" }], lines: [{ m: 0, b: 4, color: "red", dash: true }], step: { x: 50, y: 5 } })}`],
    ["3. Work and motion", S`For work, rates add: if A takes $a$ hours and B takes $b$ hours, together they do $\frac1a+\frac1b$ of the job per hour. For motion, time $=\frac{\text{distance}}{\text{speed}}$, so a trip with a current or wind leads to a rational equation.`],
    ["4. Rates of change", S`Average rate: slope of a secant. Instantaneous rate: slope of the tangent, estimated with a very short interval. Include units, such as mg/L per hour, and interpret the sign.`],
  ],
  tips: ["State the domain from the context; negative time or a negative count makes no sense.", "Reject roots that are not realistic, and say why.", "Interpret rates with units.", "Work rates add; times do not.", "A horizontal asymptote is approached, not reached, in these models."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
