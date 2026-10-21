// IB AA SL Worksheet 3.4 — Graphing Quadratic Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Vertex form", q: S`For $y=-(x+2)^2+9$, state the vertex, zeros, y-intercept and range.`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -2, ymax: 10 }, curves: [{ f: (x) => -((x + 2) ** 2) + 9 }], points: [pt(-2, 9, null, "amber"), pt(-5, 0), pt(1, 0), pt(0, 5, null, "green")] }),
    steps: [S`Vertex $(-2,9)$, maximum.`, S`$(x+2)^2=9\Rightarrow x=1$ or $-5$; $y(0)=5$.`], ans: S`$(-2,9)$; $1, -5$; $(0,5)$; $y\le9$` },
  { title: "Intercept form", q: S`For $y=2(x-1)(x-5)$, find the zeros, axis, vertex and y-intercept.`,
    steps: [S`Zeros 1, 5; axis $x=3$; $y(3)=2(2)(-2)=-8$; $y(0)=10$.`], ans: S`vertex $(3,-8)$; $(0,10)$` },
  { title: "Standard form", q: S`For $y=x^2-4x-5$, find the axis, vertex, zeros and y-intercept.`,
    steps: [S`$x=2$; $y(2)=-9$; $(x-5)(x+1)$.`], ans: S`$(2,-9)$; zeros $-1,5$; $(0,-5)$` },
  { title: "Negative leading coefficient", q: S`For $y=-2x^2+12x-10$, find the axis, vertex and y-intercept.`,
    steps: [S`$x=-\frac{12}{-4}=3$; $y(3)=-18+36-10=8$.`], ans: S`$x=3$; $(3,8)$; $(0,-10)$` },
  { title: "Width", q: S`Compare the graphs of $y=3x^2$, $y=x^2$ and $y=\frac13x^2$.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 3 * x * x }, { f: (x) => x * x, color: "gray" }, { f: (x) => x * x / 3, color: "blue" }] }),
    steps: [S`Larger $|a|$ gives a narrower parabola.`], ans: S`$3x^2$ narrowest, $\frac13x^2$ widest` },
  { title: "Zeros and the vertex height", q: S`A parabola has zeros $-3$ and $1$ and minimum value $-8$. Find its equation.`,
    steps: [S`$a(x+3)(x-1)$; axis $x=-1$: $a(2)(-2)=-8\Rightarrow a=2$.`], ans: S`$y=2(x+3)(x-1)$` },
  { title: "Vertex and y-intercept", q: S`A parabola has vertex $(2,-3)$ and y-intercept 5. Find its equation.`,
    steps: [S`$a(0-2)^2-3=5\Rightarrow a=2$.`], ans: S`$y=2(x-2)^2-3$` },
  { title: "Range", q: S`State the range of $y=-3(x-4)^2+6$.`,
    steps: [S`$a<0$: maximum 6.`], ans: S`$y\le6$` },
  { title: "From a graph", q: "Find the equation of the parabola shown.",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 2 * (x - 1) * (x - 3) }], points: [pt(1, 0), pt(3, 0), pt(0, 6, null, "green")] }),
    steps: [S`Zeros 1, 3: $a(x-1)(x-3)$; $a(-1)(-3)=6\Rightarrow a=2$.`], ans: S`$y=2x^2-8x+6$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertex of $y=(x+5)^2-1$.`, recap: "Vertex form.", ans: S`$(-5,-1)$` },
  { level: 1, q: S`State the zeros of $y=(x-2)(x+7)$.`, recap: "Intercept form.", ans: S`$2$, $-7$` },
  { level: 1, q: S`State the y-intercept of $y=4x^2-x+9$.`, recap: "Standard form.", ans: S`$(0,9)$` },
  { level: 2, q: S`Find the axis and vertex of $y=x^2+6x+8$.`, recap: "Axis formula.", ans: S`$x=-3$; $(-3,-1)$` },
  { level: 2, q: S`Sketch $y=-(x-1)^2+4$ on the grid, labelling the vertex and intercepts.`, recap: "Sketch.", ans: S`$(1,4)$; zeros $-1$, $3$; $(0,3)$`, fig: gridT({ xmin: -3, xmax: 5, ymin: -3, ymax: 5 }) },
  { level: 2, q: S`State the range of $y=2(x+1)^2-3$.`, recap: "Range.", ans: S`$y\ge-3$` },
  { level: 2, q: S`Find the parabola with zeros 2 and 6 through $(4,-8)$.`, recap: "Zeros and a point.", ans: S`$y=2(x-2)(x-6)$` },
  { level: 2, q: S`Find the vertex of $y=3x^2-12x+1$.`, recap: "Vertex.", ans: S`$(2,-11)$` },
  { level: 3, space: 4, q: S`A parabola has vertex $(-1,4)$ and passes through $(1,-4)$. Find its equation.`, recap: "Vertex and point.", ans: S`$y=-2(x+1)^2+4$` },
  { level: 3, space: 4, q: S`$f(x)=x^2+bx+c$ has axis $x=3$ and minimum value $-1$. Find $b$ and $c$.`, recap: "Axis and minimum.", ans: S`$b=-6$, $c=8$` },
  { level: 3, space: 5, q: S`A parabola passes through $(0,-4)$, $(1,0)$ and $(4,0)$. Find its equation and vertex.`, recap: "Three points.", ans: S`$-(x-1)(x-4)$; vertex $(2.5,2.25)$`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 3 }, points: [pt(0, -4), pt(1, 0), pt(4, 0)] }) },
  { level: 3, space: 5, q: S`Two parabolas both have zeros 0 and 6. One has maximum value 9, the other minimum value $-18$. Find both equations.`, recap: "Same zeros.", ans: S`$y=-x(x-6)$ and $y=2x(x-6)$` },
  { level: 3, space: 4, q: S`Find the values of $k$ for which the vertex of $y=x^2+kx+7$ lies on the x-axis.`, recap: "Vertex on the axis.", ans: S`$k=\pm2\sqrt7$` },
];

export const WS = {
  code: "3.4",
  title: "Graphing Quadratic Functions",
  bigideas: S`A parabola can be written as $a(x-h)^2+k$ (vertex $(h,k)$), $a(x-p)(x-q)$ (zeros $p$, $q$, axis $x=\frac{p+q}{2}$) or $ax^2+bx+c$ (y-intercept $c$, axis $x=-\frac b{2a}$). The sign of $a$ gives the direction and the range; $|a|$ gives the width. To find an equation, use the form that matches the information, then one more point for $a$.`,
  goals: ["Read features from each form.", "Find the axis and vertex.", "Sketch parabolas and state ranges.", "Find equations from features."],
  curriculum: "SL 2.6",
  vocab: [["Vertex", "turning point (h, k)"], ["Axis of symmetry", S`$x=h$`], ["Intercept form", S`$a(x-p)(x-q)$`]],
  hook: "Throw a ball across the room and freeze the path on a photo or sketch. Ask what features of the curve students would measure.",
  concepts: [
    ["1. Three forms", S`${F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 3) }], points: [pt(1, -4, null, "amber"), pt(-1, 0), pt(3, 0), pt(0, -3, null, "green")] }, 5)} $(x+1)(x-3)=(x-1)^2-4=x^2-2x-3$.`],
    ["2. Direction and width", S`$a>0$ opens up (minimum); $a<0$ opens down (maximum); larger $|a|$ is narrower.`],
    ["3. Equations", S`Zeros known → intercept form; vertex known → vertex form; then substitute a point for $a$.`],
  ],
  tips: ["(x − h): sign flips for the vertex.", "Axis is a line: x = ….", "Keep signs in −b/(2a).", "Use symmetry to plot extra points.", "Check the y-intercept."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
