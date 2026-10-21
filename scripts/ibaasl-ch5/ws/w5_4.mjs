// IB AA SL Worksheet 5.4 — First and Second Derivatives and Graphs (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Increasing and decreasing", q: S`Find where $f(x)=x^3-75x$ is increasing.`,
    steps: [S`$f'=3x^2-75=3(x-5)(x+5)$.`, S`$f'>0$ outside the roots.`], ans: S`$x<-5$ or $x>5$` },
  { title: "Stationary points", q: S`Find the stationary points of $y=x^3-6x^2+5$.`,
    steps: [S`$3x^2-12x=0\Rightarrow x=0,4$.`], ans: S`$(0,5)$, $(4,-27)$` },
  { title: "Second derivative test", q: S`Classify the stationary points of $y=x^3-6x^2+5$.`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -30, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 5 }], points: [pt(0, 5, null, "red"), pt(4, -27), pt(2, -11, null, "green")], step: { x: 1, y: 5 } }),
    steps: [S`$y''=6x-12$: $y''(0)=-12$ (max), $y''(4)=12$ (min).`], ans: "max (0, 5); min (4, −27)" },
  { title: "Point of inflection", q: S`Find the point of inflection of $y=x^3-6x^2+5$.`,
    steps: [S`$6x-12=0\Rightarrow x=2$; $y=-11$; $y''$ changes sign.`], ans: S`$(2,-11)$` },
  { title: "A sign table", q: S`Classify the stationary point of $y=(x-1)^3+2$.`,
    steps: [S`$y'=3(x-1)^2\ge0$, zero at $x=1$ only.`, "No sign change: horizontal point of inflection."], ans: S`inflection at $(1,2)$` },
  { title: "Concavity", q: S`Find where $f(x)=x^4-6x^2$ is concave up.`,
    steps: [S`$f''=12x^2-12>0\Rightarrow x^2>1$.`], ans: S`$x<-1$ or $x>1$` },
  { title: "Graph of f′ from f", q: "The graph of f is shown. Sketch f′.",
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => -(x ** 3) + 3 * x }, { f: (x) => -3 * x * x + 3, color: "amber" }], points: [pt(-1, -2), pt(1, 2, null, "red")] }),
    steps: [S`Turning points at $x=\pm1$ ⇒ zeros of $f'$; $f$ increases between them ⇒ $f'>0$ there.`], ans: "downward parabola with zeros ±1" },
  { title: "Unknown coefficient", q: S`$y=x^2+bx+3$ has a minimum at $x=-2$. Find $b$ and the minimum value.`,
    steps: [S`$2x+b=0$ at $x=-2\Rightarrow b=4$.`, S`$y(-2)=4-8+3$.`], ans: S`$b=4$; $-1$` },
  { title: "From the graph of f″", q: S`$f''(x)=2x-6$. Where is $f$ concave down, and where is its inflection point?`,
    steps: [S`$f''<0$ for $x<3$; sign change at $x=3$.`], ans: S`concave down $x<3$; inflection at $x=3$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find where $f(x)=x^2-10x$ is decreasing.`, recap: "Decreasing.", ans: S`$x<5$` },
  { level: 1, q: S`Find $f''(x)$ for $f(x)=4x^3-x^2$.`, recap: "Second derivative.", ans: S`$24x-2$` },
  { level: 1, q: S`$f'(a)=0$ and $f''(a)=3$. What kind of point is at $x=a$?`, recap: "Classify.", ans: "minimum" },
  { level: 2, q: S`Find and classify the stationary points of $y=x^3-3x+1$.`, recap: "Stationary points.", ans: S`max $(-1,3)$; min $(1,-1)$` },
  { level: 2, q: S`Find the point of inflection of $y=x^3+6x^2+1$.`, recap: "Inflection.", ans: S`$(-2,17)$` },
  { level: 2, q: S`Find where $y=2x^3-15x^2+24x$ is increasing.`, recap: "Increasing.", ans: S`$x<1$ or $x>4$` },
  { level: 2, q: S`Classify the stationary point of $y=4-(x+2)^4$.`, recap: "f″ = 0 case.", ans: S`maximum $(-2,4)$` },
  { level: 2, q: "The graph of f′ is shown. Give the x-coordinates of the stationary points of f and classify them.", recap: "Read f′.", ans: S`$x=-1$ min; $x=3$ max`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x + 1) * (x - 3), color: "amber" }] }) },
  { level: 3, space: 4, q: S`$f(x)=x^3+ax^2+bx+1$ has stationary points at $x=1$ and $x=3$. Find $a$ and $b$.`, recap: "Coefficients.", ans: S`$a=-6$, $b=9$` },
  { level: 3, space: 4, q: S`Find the values of $k$ for which $y=x^3-kx^2+3x$ has no stationary points.`, recap: "Discriminant of f′.", ans: S`$-3<k<3$` },
  { level: 3, space: 5, q: S`For $f(x)=x^4-8x^2$, find all stationary points and points of inflection, and sketch.`, recap: "Full analysis.", ans: S`min $(\pm2,-16)$, max $(0,0)$; inflection at $x=\pm\frac{2}{\sqrt3}$`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -20, ymax: 10 }, curves: [{ f: (x) => x ** 4 - 8 * x * x }], step: { x: 1, y: 4 } }) },
  { level: 3, space: 4, q: S`Explain why $y=x^5$ has $y''(0)=0$ and why $(0,0)$ is a point of inflection.`, recap: "Sign change.", ans: S`$y''=20x^3$ changes sign at 0` },
  { level: 3, space: 4, q: S`A cubic $f$ has $f'(x)=3(x+1)(x-2)$ and $f(0)=4$. Given $f(x)=x^3-1.5x^2-6x+4$, find the coordinates of the local maximum.`, recap: "Maximum.", ans: S`$(-1,7.5)$` },
];

export const WS = {
  code: "5.4",
  title: "First and Second Derivatives and Graphs",
  bigideas: S`$f'>0$: increasing; $f'<0$: decreasing; $f'=0$: stationary. Classify with $f''$ ($>0$ minimum, $<0$ maximum) or a sign table when $f''=0$. $f''>0$ means concave up, $f''<0$ concave down; a point of inflection is where $f''$ changes sign. Zeros of $f'$ are turning points of $f$; turning points of $f'$ are inflections of $f$.`,
  goals: ["Find increasing and decreasing intervals.", "Find and classify stationary points.", "Find points of inflection.", "Relate f, f′ and f″."],
  curriculum: "SL 5.2, SL 5.6, SL 5.7",
  vocab: [["Stationary point", S`$f'=0$`], ["Concave up", S`$f''>0$`], ["Inflection", S`$f''$ changes sign`]],
  hook: "Drive along a curvy road: when are you turning the wheel left, when right, and when is the wheel straight for an instant? Relate to concavity.",
  concepts: [
    ["1. f′ and direction", S`${F({ view: { xmin: -2, xmax: 6, ymin: -30, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 5 }, { f: (x) => 3 * x * x - 12 * x, color: "amber" }], step: { x: 1, y: 5 } }, 5)} f′ (amber) is zero at the turning points.`],
    ["2. f″ and bending", S`$f''>0$ ∪, $f''<0$ ∩.`],
    ["3. Classify", S`Second derivative test, or sign table of $f'$ when $f''=0$.`],
  ],
  tips: ["Give coordinates, not just x.", "Check sign change at f″ = 0.", "Use a sign table when f″ = 0.", "Intervals use x only.", "Read graphs of f′ carefully: it is not f."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
