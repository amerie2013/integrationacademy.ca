// MPM2D Worksheet 4.2 — Key Features of a Parabola (teacher edition)
import { F, gridT, parT } from "./figT.mjs";

const feat = (f, pts, view, step) => F({ view, curves: [{ f, color: "violet" }], points: pts, ...(step ? { step } : {}) });

const EXAMPLES = [
  { title: "All the features", q: String.raw`Find the axis, vertex, zeros and $y$-intercept of $y=x^2-8x+12$.`,
    fig: feat((x) => x * x - 8 * x + 12, [{ x: 4, y: -4, label: "(4, −4)", color: "blue" }, { x: 2, y: 0, label: "(2, 0)", color: "red" }, { x: 6, y: 0, label: "(6, 0)", color: "red" }, { x: 0, y: 12, label: "(0, 12)", color: "green" }], { xmin: -1, xmax: 9, ymin: -6, ymax: 14 }, { x: 1, y: 2 }),
    steps: [String.raw`Axis $x=-\frac{-8}{2}=4$; vertex $(4,16-32+12)=(4,-4)$.`, String.raw`Zeros: $(x-2)(x-6)=0$: $2$ and $6$. $y$-intercept $12$.`], ans: String.raw`axis $x=4$, vertex $(4,-4)$, zeros $2$, $6$, $y$-int $12$` },
  { title: "Opening down", q: String.raw`Find the features of $y=-x^2-2x+8$.`,
    fig: feat((x) => -x * x - 2 * x + 8, [{ x: -1, y: 9, label: "(−1, 9)", color: "blue" }, { x: -4, y: 0, color: "red" }, { x: 2, y: 0, color: "red" }], { xmin: -6, xmax: 4, ymin: -4, ymax: 11 }),
    steps: [String.raw`Axis $x=-\frac{-2}{2(-1)}=-1$; vertex $(-1,9)$, a maximum.`, String.raw`$-(x^2+2x-8)=-(x+4)(x-2)$: zeros $-4$, $2$. $y$-intercept $8$.`], ans: String.raw`vertex $(-1,9)$ (max), zeros $-4$, $2$, $y$-int $8$, range $y\le9$` },
  { title: "No zeros", q: String.raw`Find the vertex and range of $y=2x^2+4x+5$. Does it have zeros?`,
    fig: feat((x) => 2 * x * x + 4 * x + 5, [{ x: -1, y: 3, label: "(−1, 3)", color: "blue" }, { x: 0, y: 5, label: "(0, 5)", color: "green" }], { xmin: -4, xmax: 2, ymin: -1, ymax: 12 }),
    steps: [String.raw`Axis $x=-1$; $y=2-4+5=3$.`, "Minimum 3 is above the x-axis."], ans: String.raw`vertex $(-1,3)$; range $y\ge3$; no zeros` },
  { title: "Reading a graph", q: "State the features of the parabola shown.",
    fig: feat((x) => (x - 1) ** 2 - 4, [], { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }),
    steps: [String.raw`Zeros $-1$ and $3$; axis $x=1$.`, String.raw`Vertex $(1,-4)$, minimum; $y$-intercept $-3$.`], ans: String.raw`zeros $-1$, $3$; vertex $(1,-4)$; $y$-int $-3$` },
  { title: "Symmetric points", q: String.raw`$(-3,10)$ and $(5,10)$ are on a parabola. Find its axis of symmetry.`,
    fig: F({ view: { xmin: -5, xmax: 7, ymin: -1, ymax: 12 }, points: [{ x: -3, y: 10, label: "(−3, 10)", color: "blue" }, { x: 5, y: 10, label: "(5, 10)", color: "blue" }], vlines: [{ x: 1, color: "gray", dash: true }] }),
    steps: [String.raw`Halfway: $\frac{-3+5}{2}=1$.`], ans: "$x=1$" },
  { title: "Axis from the zeros", q: String.raw`A parabola has zeros $2$ and $8$. Find its axis.`,
    steps: [String.raw`Halfway between the zeros: $\frac{2+8}{2}=5$.`], ans: "$x=5$" },
  { title: "Domain and range in context", q: String.raw`A ball's height is $h=-5t^2+10t+15$ for $0\le t\le3$. Find the maximum and the range.`,
    fig: feat((t) => -5 * t * t + 10 * t + 15, [{ x: 1, y: 20, label: "(1, 20)", color: "blue" }, { x: 3, y: 0, label: "(3, 0)", color: "red" }], { xmin: -0.5, xmax: 3.5, ymin: -2, ymax: 22 }, { x: 0.5, y: 4 }),
    steps: [String.raw`Axis $t=1$; $h=-5+10+15=20$.`, String.raw`At $t=3$: $-45+30+15=0$ (it lands).`], ans: String.raw`maximum $20$ m at $1$ s; range $0\le h\le20$` },
  { title: "Zeros at the origin", q: String.raw`Find the features of $y=-3x^2+12x$.`,
    steps: [String.raw`$-3x(x-4)$: zeros $0$, $4$; axis $x=2$.`, String.raw`$y=-12+24=12$: vertex $(2,12)$, maximum.`], ans: String.raw`zeros $0$, $4$; vertex $(2,12)$` },
  { title: "A vertex on the x-axis", q: String.raw`For which $c$ does $y=x^2-6x+c$ have its vertex on the $x$-axis?`,
    steps: [String.raw`Axis $x=3$; vertex $y=9-18+c$.`, String.raw`$c-9=0\Rightarrow c=9$.`], ans: "$c=9$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the axis of symmetry of $y=x^2+10x-3$.`, recap: "y = x² + 10x − 3.", ans: "$x=-5$" },
  { level: 1, q: String.raw`Find the vertex of $y=x^2-2x-3$.`, recap: "y = x² − 2x − 3.", ans: "$(1,-4)$" },
  { level: 1, q: String.raw`Does $y=-4x^2+3x+1$ have a maximum or a minimum? Explain.`, recap: "Max or min.", ans: "maximum, because a < 0" },
  { level: 2, q: String.raw`Find the zeros, axis, vertex and $y$-intercept of $y=x^2+2x-15$, and sketch it.`, recap: "All features.", ans: String.raw`zeros $-5$, $3$; axis $x=-1$; vertex $(-1,-16)$; $y$-int $-15$`, fig: gridT({ xmin: -7, xmax: 5, ymin: -18, ymax: 8 }, { x: 1, y: 2 }) },
  { level: 2, q: String.raw`Find the vertex, zeros and range of $y=-2x^2+12x-10$.`, recap: "y = −2x² + 12x − 10.", ans: String.raw`vertex $(3,8)$; zeros $1$, $5$; $y\le8$` },
  { level: 2, q: String.raw`$(-4,7)$ and $(2,7)$ are on a parabola. Find its axis.`, recap: "Symmetric points.", ans: "$x=-1$" },
  { level: 2, q: "State the zeros, vertex and y-intercept of the parabola shown.", recap: "Read a graph.", ans: String.raw`zeros $-1$, $5$; vertex $(2,9)$; $y$-int $5$`, fig: feat((x) => -((x - 2) ** 2) + 9, [], { xmin: -3, xmax: 7, ymin: -4, ymax: 11 }) },
  { level: 2, q: String.raw`Find the range of $y=3x^2-12x+7$.`, recap: "Range.", ans: String.raw`vertex $(2,-5)$: $y\ge-5$` },
  { level: 3, space: 5, q: String.raw`A rocket's height is $h=-5t^2+40t+2$. Find its maximum height, when it occurs, and its height at launch.`, recap: "Rocket.", ans: String.raw`$82$ m at $4$ s; launched from $2$ m` },
  { level: 3, space: 5, q: String.raw`Find $b$ so that the axis of symmetry of $y=x^2+bx+1$ is $x=3$.`, recap: "Find b.", ans: "$b=-6$" },
  { level: 3, space: 5, q: String.raw`A parabola has zeros $-2$ and $6$ and a maximum value of $8$. Find its vertex and $y$-intercept.`, recap: "Zeros and max.", ans: String.raw`vertex $(2,8)$; $y=-\frac12(x+2)(x-6)$, so $y$-int $6$` },
  { level: 3, space: 5, q: "Explain how the sign of a and the vertex together determine the range of a parabola. Give an example of each case.", recap: "Range explained.", ans: "a > 0: y ≥ k; a < 0: y ≤ k, where k is the vertex y-value" },
  { level: 3, space: 5, q: String.raw`A parabola passes through $(0,5)$, $(4,5)$ and $(1,2)$. Find its vertex.`, recap: "Vertex from three points.", ans: String.raw`axis $x=2$; $y=a(x-2)^2+k$: $4a+k=5$, $a+k=2$: vertex $(2,1)$` },
];

export const WS = {
  code: "4.2",
  title: "Key Features of a Parabola",
  bigideas: String.raw`Every parabola has a vertex on a vertical axis of symmetry, an optimal value (minimum if $a>0$, maximum if $a<0$), a $y$-intercept and zero, one or two zeros. For $y=ax^2+bx+c$ the axis is $x=-\frac{b}{2a}$ and the $y$-intercept is $c$. Points with equal $y$-values, including the zeros, are symmetric about the axis. The domain is all real numbers (limited in context); the range is set by the vertex.`,
  goals: ["Name and find the key features.", "Use x = −b/(2a).", "Use symmetry.", "State domain and range; interpret in context."],
  curriculum: "QR1, QR4",
  vocab: [["Vertex", "turning point $(h,k)$"], ["Axis of symmetry", "$x=h$"], ["Optimal value", "max or min of $y$"], ["Zeros", "x-intercepts"]],
  hook: String.raw`Show a photo of a fountain's arc. Ask: where is it highest? where does the water land? what is the starting height? — the vertex, zeros and $y$-intercept.`,
  concepts: [
    ["1. Features", String.raw`Vertex, axis, zeros, $y$-intercept, max/min, domain, range.
${feat((x) => x * x - 8 * x + 12, [{ x: 4, y: -4, label: "vertex", color: "blue" }, { x: 2, y: 0, color: "red" }, { x: 6, y: 0, color: "red" }], { xmin: -1, xmax: 9, ymin: -6, ymax: 14 }, { x: 1, y: 2 })}`],
    ["2. From the equation", String.raw`$x=-\frac{b}{2a}$, substitute for $y$; $y$-intercept $c$.`],
    ["3. Symmetry", String.raw`Equal $y$-values are mirror images: the axis is halfway between them.`],
  ],
  tips: ["Write the axis as an equation.", "Keep the sign of b.", "No zeros is possible.", "Context restricts the domain.", "Check the vertex by symmetry."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
