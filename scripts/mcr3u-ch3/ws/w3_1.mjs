// MCR3U Worksheet 3.1 — Properties of Quadratic Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Vertex form", q: String.raw`State the key features of $f(x)=-(x-4)^2+9$.`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -8, ymax: 10 }, curves: [{ f: (x) => -((x - 4) ** 2) + 9 }], points: [pt(4, 9), pt(1, 0), pt(7, 0), pt(0, -7, null, "green")], step: { x: 1, y: 2 } }),
    steps: [String.raw`Vertex $(4,9)$, opens down: maximum 9.`, String.raw`Zeros: $(x-4)^2=9\Rightarrow x=1,7$. y-intercept $-16+9=-7$.`], ans: String.raw`range $y\le9$; zeros 1, 7; y-int $-7$` },
  { title: "Factored form", q: String.raw`State the key features of $f(x)=3(x+2)(x-4)$.`,
    steps: [String.raw`Zeros $-2$, $4$; axis $x=1$.`, String.raw`$f(1)=3(3)(-3)=-27$; $f(0)=-24$.`], ans: String.raw`vertex $(1,-27)$, min $-27$, y-int $-24$` },
  { title: "Standard form that factors", q: String.raw`Find the zeros and vertex of $f(x)=x^2+2x-15$.`,
    steps: [String.raw`$(x+5)(x-3)$: zeros $-5$, $3$.`, String.raw`Axis $x=-1$: $f(-1)=1-2-15=-16$.`], ans: String.raw`vertex $(-1,-16)$` },
  { title: "A missing constant", q: String.raw`Find the zeros and vertex of $f(x)=-2x^2+8x$.`,
    steps: [String.raw`$-2x(x-4)$: zeros 0 and 4.`, String.raw`Axis $x=2$: $f(2)=-8+16=8$.`], ans: String.raw`vertex $(2,8)$, max 8` },
  { title: "Quadratic from a table", q: String.raw`$x$: $0,1,2,3,4$; $y$: $-1,2,9,20,35$. Find the equation.`,
    steps: [String.raw`First differences $3,7,11,15$; second differences 4: $a=2$.`, String.raw`$c=-1$; $f(1)=2+b-1=2\Rightarrow b=1$.`], ans: String.raw`$f(x)=2x^2+x-1$` },
  { title: "Not quadratic", q: String.raw`$x$: $0,1,2,3$; $y$: $1,3,9,27$. Is the relation quadratic?`,
    steps: [String.raw`First differences $2,6,18$; second differences $4,12$ — not constant.`, "Each y is 3 times the previous: exponential."], ans: "no — exponential" },
  { title: "Vertex and a point", q: "A parabola has vertex (−1, −4) and passes through (1, 4). Find its equation.",
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 1) ** 2 - 4 }], points: [pt(-1, -4), pt(1, 4)] }),
    steps: [String.raw`$y=a(x+1)^2-4$; $4=4a-4\Rightarrow a=2$.`], ans: String.raw`$y=2(x+1)^2-4$` },
  { title: "Zeros and the y-intercept", q: "A parabola has zeros 3 and −1 and y-intercept 6. Find its equation.",
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 9 }, curves: [{ f: (x) => -2 * (x - 3) * (x + 1) }], points: [pt(3, 0), pt(-1, 0), pt(0, 6, null, "green")] }),
    steps: [String.raw`$y=a(x-3)(x+1)$; $6=a(-3)(1)\Rightarrow a=-2$.`], ans: String.raw`$y=-2(x-3)(x+1)$` },
  { title: "Domain and range in context", q: String.raw`A ball's height is $h(t)=-5(t-2)^2+21$ m. Give a sensible domain and range.`,
    steps: [String.raw`$h(0)=1$: launched from 1 m. Lands: $(t-2)^2=4.2\Rightarrow t\approx4.05$.`], ans: String.raw`$0\le t\le4.05$; $0\le h\le21$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the vertex and maximum value of $y=-3(x-1)^2+6$.`, recap: "Vertex form.", ans: String.raw`$(1,6)$; max 6` },
  { level: 1, q: String.raw`State the zeros and the axis of $y=2(x+3)(x-5)$.`, recap: "Factored form.", ans: String.raw`$-3$, $5$; $x=1$` },
  { level: 1, q: String.raw`State the y-intercept of $y=x^2-7x+10$.`, recap: "Standard form.", ans: "10" },
  { level: 2, q: String.raw`Find the zeros, vertex and y-intercept of $y=(x-2)^2-9$, then sketch it.`, recap: "All features.", ans: String.raw`zeros $-1$, $5$; $(2,-9)$; $-5$`, fig: gridT({ xmin: -3, xmax: 7, ymin: -10, ymax: 6 }) },
  { level: 2, q: String.raw`Write $y=-(x+1)(x-5)$ in standard form and in vertex form.`, recap: "Convert forms.", ans: String.raw`$-x^2+4x+5$; $-(x-2)^2+9$` },
  { level: 2, q: String.raw`$x$: $0,1,2,3$; $y$: $5,2,3,8$. Find the quadratic.`, recap: "From a table.", ans: String.raw`$y=2x^2-5x+5$` },
  { level: 2, q: "Find the equation of the parabola shown.", recap: "From a graph.", ans: String.raw`$y=-(x-2)^2+5$`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => -((x - 2) ** 2) + 5 }], points: [pt(2, 5), pt(0, 1)] }) },
  { level: 2, q: String.raw`State the range of $y=\tfrac12(x+4)^2-3$.`, recap: "Range.", ans: String.raw`$y\ge-3$` },
  { level: 3, space: 5, q: String.raw`A parabola has zeros $-2$ and $6$ and a maximum value of 8. Write it in all three forms.`, recap: "Three forms.", ans: String.raw`$-\tfrac12(x+2)(x-6)=-\tfrac12(x-2)^2+8=-\tfrac12x^2+2x+6$` },
  { level: 3, space: 5, q: String.raw`Find the quadratic through $(-2,11)$, $(0,-1)$ and $(1,-1)$, and its vertex.`, recap: "Three points.", ans: String.raw`$2x^2-2x-1$; $(0.5,-1.5)$` },
  { level: 3, space: 5, q: String.raw`A table uses $x=0,2,4,6$ with $y=3,11,35,75$. Find the quadratic.`, recap: "Step of 2.", ans: String.raw`second difference $16=2a(2^2)$: $a=2$; $y=2x^2+3$` },
  { level: 3, space: 4, q: String.raw`Use vertex form to prove that $f(x)=x^2-4x+7$ has no zeros.`, recap: "No zeros.", ans: String.raw`$(x-2)^2+3\ge3>0$` },
  { level: 3, space: 5, q: String.raw`Find the parabola with vertex $(3,-2)$ whose zeros are 4 units apart.`, recap: "Zeros 4 apart.", ans: String.raw`zeros 1 and 5: $y=\tfrac12(x-3)^2-2$` },
];

export const WS = {
  code: "3.1",
  title: "Properties of Quadratic Functions",
  bigideas: String.raw`A quadratic function has three useful forms: factored $a(x-r)(x-s)$ shows the zeros, vertex $a(x-h)^2+k$ shows the vertex and the optimal value, standard $ax^2+bx+c$ shows the y-intercept. The axis is halfway between the zeros. Second differences of a quadratic table (x-steps of 1) are constant and equal $2a$.`,
  goals: ["Identify the features of each form.", "Convert between forms.", "Use second differences.", "Find equations from graphs and tables."],
  curriculum: "A1.2, A2.2",
  vocab: [["Vertex", "turning point $(h,k)$"], ["Axis of symmetry", "$x=h=\\frac{r+s}2$"], ["Second difference", "$2a$ (x-steps of 1)"]],
  hook: "Show the same parabola written three ways on three cards. Ask groups to find the vertex, zeros and y-intercept from whichever card is fastest.",
  concepts: [
    ["1. Three forms", String.raw`${F({ view: { xmin: -1, xmax: 7, ymin: -9, ymax: 11 }, curves: [{ f: (x) => 2 * (x - 1) * (x - 5) }], points: [pt(1, 0), pt(5, 0), pt(3, -8), pt(0, 10, null, "green")], step: { x: 1, y: 2 } }, 5, "2(x − 1)(x − 5) = 2(x − 3)² − 8 = 2x² − 12x + 10")}`],
    ["2. Finite differences", String.raw`Linear: first differences constant. Quadratic: second differences constant ($2a$). Exponential: constant ratio.`],
    ["3. Equations from data", String.raw`Zeros + one point: $a(x-r)(x-s)$. Vertex + one point: $a(x-h)^2+k$. Three points: solve for $a,b,c$.`],
  ],
  tips: ["Opposite sign inside vertex form.", "Axis = average of zeros.", "2a only for steps of 1.", "Check by substituting a point.", "a > 0 minimum, a < 0 maximum."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
