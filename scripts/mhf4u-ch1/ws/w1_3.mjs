// MHF4U Worksheet 1.3 — Equations and Graphs of Polynomial Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Zeros, orders and intercept", q: String.raw`Describe $f(x)=0.5(x-4)(x+3)^2$.`,
    fig: F({ view: { xmin: -5, xmax: 6, ymin: -30, ymax: 15 }, curves: [{ f: (x) => 0.5 * (x - 4) * (x + 3) ** 2 }], points: [pt(-3, 0), pt(4, 0), pt(0, -18)], step: { x: 1, y: 5 } }),
    steps: [String.raw`Zeros: $4$ (order 1, crosses), $-3$ (order 2, touches).`, String.raw`Degree $1+2=3$, $a=0.5>0$: Q3 → Q1.`, String.raw`$f(0)=0.5(-4)(9)=-18$.`], ans: "zeros 4 and −3 (double); Q3 → Q1; y-int −18" },
  { title: "Sign chart for a quartic", q: String.raw`Find where $f(x)=-(x+3)(x+1)(x-1)(x-2)$ is positive and negative.`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -8, ymax: 12 }, curves: [{ f: (x) => -(x + 3) * (x + 1) * (x - 1) * (x - 2), color: "red" }], points: [pt(0, -6)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Degree 4, $a=-1$: negative at both ends.`, String.raw`All zeros have order 1, so the sign alternates: $-,+,-,+,-$.`, String.raw`Check: $f(0)=-(3)(1)(-1)(-2)=-6$, negative on $(-1,1)$.`], ans: String.raw`positive on $(-3,-1)$ and $(1,2)$; negative elsewhere (except at zeros)` },
  { title: "A zero of order 3", q: String.raw`Describe $f(x)=(x-1)^3(x+2)$ near each zero.`,
    fig: F({ view: { xmin: -3, xmax: 2.5, ymin: -8, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 3 * (x + 2), color: "violet" }], points: [pt(-2, 0), pt(1, 0), pt(0, -2)], step: { x: 1, y: 2 } }),
    steps: [String.raw`At $x=1$ (order 3): crosses with a flat bend. At $x=-2$ (order 1): crosses like a line.`, String.raw`Degree 4, $a=1$: up at both ends; $f(0)=(-1)^3(2)=-2$.`], ans: "flat crossing at 1, straight crossing at −2" },
  { title: "Solve a polynomial inequality", q: String.raw`Solve $(x+4)(x-1)(x-5)\ge0$.`,
    steps: [String.raw`Zeros $-4, 1, 5$, all order 1; degree 3, $a>0$: starts negative.`, String.raw`Signs: $x\lt-4$: −; $(-4,1)$: +; $(1,5)$: −; $x>5$: +.`], ans: String.raw`$-4\le x\le1$ or $x\ge5$` },
  { title: "Equation from zeros and a point", q: String.raw`A cubic has zeros $-1$, $2$ and $5$ and y-intercept $20$. Find its equation.`,
    steps: [String.raw`$f(x)=a(x+1)(x-2)(x-5)$.`, String.raw`$f(0)=a(1)(-2)(-5)=10a=20$, so $a=2$.`], ans: String.raw`$f(x)=2(x+1)(x-2)(x-5)$` },
  { title: "Equation from a graph with bounces", q: String.raw`The quartic shown touches the x-axis at $-1$ and $3$ and passes through $(1,8)$. Find its equation.`,
    fig: F({ view: { xmin: -2.5, xmax: 4.5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 0.5 * (x + 1) ** 2 * (x - 3) ** 2, color: "green" }], points: [pt(-1, 0), pt(3, 0), pt(1, 8)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Both zeros have order 2: $f(x)=a(x+1)^2(x-3)^2$.`, String.raw`$f(1)=a(4)(4)=16a=8$, so $a=\tfrac12$.`], ans: String.raw`$f(x)=\tfrac12(x+1)^2(x-3)^2$` },
  { title: "A family of cubics", q: String.raw`Describe the family $y=k(x+2)(x-1)(x-4)$ for $k=1$, $0.5$ and $-1$.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 4), color: "blue" }, { f: (x) => 0.5 * (x + 2) * (x - 1) * (x - 4), color: "green" }, { f: (x) => -(x + 2) * (x - 1) * (x - 4), color: "red" }], step: { x: 1, y: 2 } }),
    steps: [String.raw`Same zeros for every $k\ne0$; $k$ stretches the graph and $k\lt0$ reflects it.`, String.raw`y-intercepts: $8k$, so $8$, $4$, $-8$.`], ans: "same x-intercepts, different stretch and direction" },
  { title: "A fractional zero", q: String.raw`Find the zeros, orders and end behaviour of $f(x)=(2x-3)(x+1)^2$.`,
    steps: [String.raw`$2x-3=0$ gives $x=\tfrac32$ (order 1); $x=-1$ (order 2).`, String.raw`Leading term $2x\cdot x^2=2x^3$: Q3 → Q1. $f(0)=-3$.`], ans: String.raw`$\tfrac32$ (crosses), $-1$ (touches); Q3 → Q1` },
  { title: "Factor first", q: String.raw`Sketch $f(x)=x^3-9x$.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -12, ymax: 12 }, curves: [{ f: (x) => x ** 3 - 9 * x, color: "blue" }], points: [pt(-3, 0), pt(0, 0), pt(3, 0)], step: { x: 1, y: 2 } }),
    steps: [String.raw`$f(x)=x(x^2-9)=x(x-3)(x+3)$: zeros $-3,0,3$.`, String.raw`$a=1$, degree 3: Q3 → Q1. Only odd powers, so it is symmetric about the origin.`], ans: "zeros −3, 0, 3; odd function" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the zeros and their orders: $y=(x-5)^2(x+1)$.`, recap: "Zeros and orders.", ans: "5 (order 2), −1 (order 1)" },
  { level: 1, q: String.raw`Describe the graph of $y=(x-2)^3(x+4)$ at $x=2$.`, recap: "Order 3.", ans: "crosses with a flat bend" },
  { level: 1, q: String.raw`Find the y-intercept of $y=-3(x+1)(x-2)(x+4)$.`, recap: "y-intercept.", ans: String.raw`$-3(1)(-2)(4)=24$` },
  { level: 2, q: String.raw`Sketch $y=(x+3)(x-1)(x-4)$. Label the zeros and the y-intercept.`, recap: "Sketch a cubic.", ans: "zeros −3, 1, 4; y-int 12; Q3 → Q1", fig: gridT({ xmin: -4, xmax: 5, ymin: -20, ymax: 25 }, { x: 1, y: 5 }) },
  { level: 2, q: String.raw`Sketch $y=-(x-2)^2(x+1)^2$.`, recap: "Double zeros.", ans: "touches at −1 and 2, down at both ends, y-int −4", fig: gridT({ xmin: -2, xmax: 3, ymin: -8, ymax: 2 }, { x: 1, y: 1 }) },
  { level: 2, q: String.raw`Where is $y=(x+2)(x-3)^2$ positive?`, recap: "Sign intervals.", ans: String.raw`$x>-2$, $x\ne3$` },
  { level: 2, q: String.raw`A cubic has zeros $-3$, $1$, $2$ and passes through $(0,12)$. Find its equation.`, recap: "Equation from zeros.", ans: String.raw`$6a=12$: $y=2(x+3)(x-1)(x-2)$` },
  { level: 2, q: String.raw`Factor $y=x^4-9x^2$ and give its zeros and their orders.`, recap: "Factor first.", ans: String.raw`$x^2(x-3)(x+3)$: 0 (order 2), ±3` },
  { level: 3, space: 5, q: String.raw`Find the equation of the quartic shown.`, recap: "Equation from a graph.", ans: String.raw`$y=a(x+2)^2(x-1)(x-4)$; $16a=8$: $y=\tfrac12(x+2)^2(x-1)(x-4)$`,
    fig: F({ view: { xmin: -4, xmax: 5, ymin: -30, ymax: 30 }, curves: [{ f: (x) => 0.5 * (x + 2) ** 2 * (x - 1) * (x - 4), color: "violet" }], points: [pt(-2, 0), pt(1, 0), pt(4, 0), pt(0, 8)], step: { x: 1, y: 5 } }) },
  { level: 3, space: 5, q: String.raw`Solve $x^3-x^2-6x\le0$.`, recap: "Factor, then sign chart.", ans: String.raw`$x(x-3)(x+2)\le0$: $x\le-2$ or $0\le x\le3$` },
  { level: 3, space: 5, q: String.raw`Write two different polynomial functions whose only zeros are $-1$ and $2$ and which both pass through $(0,-4)$.`, recap: "More than one polynomial fits.", ans: String.raw`e.g. $2(x+1)(x-2)$ and $-(x+1)(x-2)^2$` },
  { level: 3, space: 5, q: String.raw`Sketch $f(x)=-x(x+3)^2(x-2)^2$ and state the intervals where $f(x)>0$ and $f(x)\lt0$.`, recap: "A quintic.", ans: String.raw`$f>0$ for $x\lt-3$ and $-3\lt x\lt0$; $f\lt0$ for $0\lt x\lt2$ and $x>2$`, fig: gridT({ xmin: -4, xmax: 3, ymin: -20, ymax: 20 }, { x: 1, y: 5 }) },
  { level: 3, space: 5, q: String.raw`An open box is made from a 12 cm square sheet by cutting squares of side $x$ from the corners: $V=x(12-2x)^2$. Give the zeros and their orders, explain the domain, and sketch $V$.`, recap: "Model with a double zero.", ans: String.raw`zeros 0 and 6 (order 2); $0\lt x\lt6$; $V(2)=128$`, fig: gridT({ xmin: 0, xmax: 6, ymin: 0, ymax: 140 }, { x: 1, y: 20 }) },
];

export const WS = {
  code: "1.3",
  title: "Equations and Graphs of Polynomial Functions",
  bigideas: String.raw`In factored form each factor $(x-r)^m$ gives a zero at $r$ of order $m$. Order 1: the graph crosses; even order: it touches and turns back; odd order above 1: it crosses with a flat bend. The degree is the sum of the orders, and the leading coefficient fixes the end behaviour. Zeros alone give a family of polynomials; one more point fixes the stretch $a$.`,
  goals: ["Find zeros and their orders.", "Use signs on intervals to sketch.", "Solve polynomial inequalities.", "Write equations from graphs and conditions."],
  curriculum: "C1.5, C1.7",
  vocab: [["Order (multiplicity)", "the power of a repeated factor"], ["Family", "$y=k(x-r_1)(x-r_2)\\cdots$, same zeros"], ["Test value", "an x-value used to find a sign"]],
  hook: String.raw`Give the class $y=(x-1)(x-3)$, $y=(x-1)^2(x-3)$ and $y=(x-1)^3(x-3)$. What happens at $x=1$ as the power grows?`,
  concepts: [
    ["1. Behaviour at a zero", String.raw`Order 1 crosses, order 2 touches, order 3 flattens.
${F({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => 0.4 * (x + 2) * (x - 1) ** 2 * (x - 3) ** 3 / 2, color: "violet" }], points: [pt(-2, 0, false), pt(1, 0, false), pt(3, 0, false)], step: { x: 1, y: 2 } })}`],
    ["2. Signs", String.raw`The sign changes at odd-order zeros and stays the same at even-order zeros.`],
    ["3. Families", String.raw`$y=a(x-r_1)(x-r_2)\cdots$: use one more point to find $a$.`],
  ],
  tips: ["(x + 3) gives the zero −3.", "Degree = sum of the orders.", "Include a when finding f(0).", "Even order: no sign change.", "Factor out common factors first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
