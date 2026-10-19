// MCV4U Worksheet 3.2 — Maxima and Minima (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "The first derivative test", q: S`Find and classify the critical points of $f(x)=x^3+3x^2-24x$.`,
    steps: [S`$f'(x)=3x^2+6x-24=3(x+4)(x-2)$.`, S`Signs $+,-,+$: maximum at $-4$, minimum at $2$.`, S`$f(-4)=80$, $f(2)=-28$.`], ans: S`local maximum $(-4,80)$; local minimum $(2,-28)$` },
  { title: "Absolute extrema", q: S`Find the absolute extrema of $f(x)=2x^3-3x^2-12x$ on $[-2,3]$.`,
    fig: F({ view: { xmin: -2.5, xmax: 3.5, ymin: -24, ymax: 10 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 12 * x, a: -2, b: 3 }], points: [pt(-2, -4), pt(-1, 7), pt(2, -20), pt(3, -9)], step: { x: 1, y: 4 } }),
    steps: [S`$f'(x)=6(x-2)(x+1)$; both critical numbers are inside.`, S`$f(-2)=-4$, $f(-1)=7$, $f(2)=-20$, $f(3)=-9$.`], ans: S`absolute maximum 7 at $x=-1$; absolute minimum $-20$ at $x=2$` },
  { title: "When the endpoints win", q: S`Find the absolute extrema of $f(x)=x^2-6x+10$ on $[4,7]$.`,
    steps: [S`$f'(x)=2x-6=0$ at $x=3$, outside the interval.`, S`$f(4)=2$, $f(7)=17$.`], ans: S`absolute minimum 2 at $x=4$; absolute maximum 17 at $x=7$` },
  { title: "Corners", q: S`Find the critical numbers of $f(x)=|x^2-4|$ and classify them.`,
    fig: F({ view: { xmin: -3.5, xmax: 3.5, ymin: -1, ymax: 7 }, curves: [{ f: (x) => Math.abs(x * x - 4) }], points: [pt(-2, 0), pt(0, 4), pt(2, 0)], step: { x: 1, y: 1 } }),
    steps: [S`$f'$ does not exist at $x=\pm2$ (corners); $f'(0)=0$ (from $f=4-x^2$ there).`, S`Falling then rising at $\pm2$; rising then falling at 0.`], ans: S`local minima $(\pm2,0)$; local maximum $(0,4)$` },
  { title: "No extremum", q: S`Does $f(x)=x^5$ have an extremum at its critical number?`,
    steps: [S`$f'(x)=5x^4=0$ at $x=0$, but $f'\ge0$ on both sides.`], ans: "no: f keeps increasing through x = 0" },
  { title: "A quartic", q: S`Find the local extrema of $f(x)=x^2(x-4)^2$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 20 }, curves: [{ f: (x) => x * x * (x - 4) ** 2 }], points: [pt(0, 0), pt(2, 16), pt(4, 0)], step: { x: 1, y: 2 } }),
    steps: [S`$f'(x)=2x(x-4)^2+2x^2(x-4)=4x(x-2)(x-4)$.`, S`Signs $-,+,-,+$.`], ans: S`local minima $(0,0)$ and $(4,0)$; local maximum $(2,16)$` },
  { title: "A rational function", q: S`Find the local extrema of $f(x)=\frac{x-1}{x^2+3}$.`,
    fig: F({ view: { xmin: -6, xmax: 8, ymin: -0.7, ymax: 0.4 }, curves: [{ f: (x) => (x - 1) / (x * x + 3) }], points: [pt(-1, -0.5), pt(3, 1 / 6)], step: { x: 1, y: 0.1 } }),
    steps: [S`$f'(x)=\frac{(x^2+3)-2x(x-1)}{(x^2+3)^2}=\frac{-(x-3)(x+1)}{(x^2+3)^2}$.`, S`Signs $-,+,-$.`], ans: S`local minimum $(-1,-\frac12)$; local maximum $\left(3,\frac16\right)$` },
  { title: "A root function", q: S`Find the absolute extrema of $f(x)=x\sqrt{4-x^2}$ on $[-2,2]$.`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => x * Math.sqrt(4 - x * x), a: -2, b: 2 }], points: [pt(Math.SQRT2, 2), pt(-Math.SQRT2, -2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$f'(x)=\sqrt{4-x^2}-\frac{x^2}{\sqrt{4-x^2}}=\frac{4-2x^2}{\sqrt{4-x^2}}$: zero at $x=\pm\sqrt2$.`, S`$f(\pm\sqrt2)=\pm2$; $f(\pm2)=0$.`], ans: S`absolute maximum 2 at $x=\sqrt2$; absolute minimum $-2$ at $x=-\sqrt2$` },
  { title: "Daily profit", q: S`A workshop's daily profit is $P(x)=-x^3+12x^2+60x$ dollars for $0\le x\le15$ items. Find the best production level.`,
    steps: [S`$P'(x)=-3x^2+24x+60=-3(x-10)(x+2)$.`, S`$P(0)=0$, $P(10)=800$, $P(15)=225$.`], ans: "10 items, for a profit of 800 dollars" },
];

const PROBLEMS = [
  { level: 1, q: S`Find the critical number of $f(x)=x^2+10x$ and classify it.`, recap: "f′ = 2x + 10.", ans: S`$x=-5$: local minimum` },
  { level: 1, q: S`Find the local maximum point of $f(x)=-x^2+6x$.`, recap: "Vertex.", ans: S`$(3,9)$` },
  { level: 1, q: S`$f'(c)=0$ and $f'$ changes from positive to negative at $c$. What is at $c$?`, recap: "First derivative test.", ans: "a local maximum" },
  { level: 2, q: S`Find the local extrema of $f(x)=x^3-27x+5$.`, recap: "f′ = 3(x² − 9).", ans: S`maximum $(-3,59)$; minimum $(3,-49)$` },
  { level: 2, q: S`Find the absolute extrema of $f(x)=x^3-3x^2-45x$ on $[-4,6]$.`, recap: "Compare four values.", ans: S`maximum 81 at $x=-3$; minimum $-175$ at $x=5$` },
  { level: 2, q: S`Find the absolute minimum of $f(x)=x^4-4x+1$.`, recap: "f′ = 4x³ − 4.", ans: S`$-2$ at $x=1$` },
  { level: 2, q: S`Find the absolute extrema of $f(x)=x^{3/2}-3x^{1/2}$ on $[0,4]$.`, recap: "f′ = 3(x − 1)/(2√x).", ans: S`maximum 2 at $x=4$; minimum $-2$ at $x=1$` },
  { level: 2, q: S`Classify the critical point of $f(x)=(x-2)^4$ and sketch the graph.`, recap: "Signs of f′ = 4(x − 2)³.", ans: S`local (absolute) minimum $(2,0)$`, fig: gridT({ xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Find $a$ and $b$ so that $f(x)=ax^3+bx$ has a local maximum at $(-1,4)$. Where is its local minimum?`, recap: "f′(−1) = 0 and f(−1) = 4.", ans: S`$a=2$, $b=-6$; local minimum $(1,-4)$` },
  { level: 3, space: 5, q: S`Find the absolute extrema of $f(x)=(x^2-1)^3$ on $[-2,2]$, and explain why $x=\pm1$ are critical numbers but not extrema.`, recap: "f′ = 6x(x² − 1)².", ans: S`maximum 27 at $x=\pm2$; minimum $-1$ at $x=0$; $f'$ does not change sign at $\pm1$` },
  { level: 3, space: 5, q: S`For which $c$ does $f(x)=x^3-3x+c$ have a local maximum value of 5?`, recap: "The local maximum is at x = −1.", ans: S`$f(-1)=2+c=5\Rightarrow c=3$` },
  { level: 3, space: 5, q: S`Revenue is $R(x)=x(60-0.5x)$ and cost $C(x)=200+12x$ dollars, $0\le x\le100$. Find the production level and the maximum profit.`, recap: "P = R − C; compare with endpoints.", ans: S`$P=48x-0.5x^2-200$; $x=48$, maximum profit 952 dollars` },
  { level: 3, space: 5, q: S`Sketch a continuous function on $[0,6]$ with a local maximum at $x=2$, a local minimum at $x=4$, and its absolute maximum at the endpoint $x=6$.`, recap: "Endpoints can be absolute extrema.", ans: "rises to x = 2, falls to x = 4, then rises above f(2) by x = 6", fig: gridT({ xmin: 0, xmax: 6.5, ymin: 0, ymax: 8 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "3.2",
  title: "Maxima and Minima",
  bigideas: S`Local maxima and minima can occur only at critical numbers, where $f'(c)=0$ or $f'(c)$ does not exist. The first derivative test classifies them: $+\to-$ is a local maximum, $-\to+$ a local minimum, no sign change is neither. On a closed interval $[a,b]$ a continuous function has an absolute maximum and minimum; find them by comparing $f$ at the critical numbers inside the interval and at both endpoints.`,
  goals: ["Find critical numbers.", "Classify them with the first derivative test.", "Find absolute extrema on a closed interval.", "Recognize critical numbers that are not extrema."],
  curriculum: "B1.2, B1.3",
  vocab: [["Local maximum", "highest point nearby"], ["Absolute maximum", "highest point on the interval"], ["Critical point", "$(c,f(c))$ with $f'(c)=0$ or no $f'(c)$"]],
  hook: S`On a hike from km 0 to km 10, where could the highest point be? Must the trail be level there?`,
  concepts: [
    ["1. Local vs absolute", S`$f(x)=x^3+3x^2-24x$ on $[-6,4]$: the local maximum $(-4,80)$ is also the absolute maximum here; the absolute minimum is the local minimum $(2,-28)$:
${F({ view: { xmin: -6.5, xmax: 4.5, ymin: -40, ymax: 100 }, curves: [{ f: (x) => x ** 3 + 3 * x * x - 24 * x, a: -6, b: 4 }], points: [pt(-4, 80), pt(2, -28), pt(-6, 36), pt(4, 16)], step: { x: 1, y: 20 } })}`],
    ["2. Candidates", S`Critical numbers inside $[a,b]$ plus $a$ and $b$.`],
    ["3. Not every critical number", S`$x^3$ and $x^5$ level off at 0 without turning.`],
  ],
  tips: ["Include points where f′ does not exist.", "Never forget the endpoints.", "Ignore critical numbers outside the interval.", "State values and locations.", "Use a table of candidates."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
