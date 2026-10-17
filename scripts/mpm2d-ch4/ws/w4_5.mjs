// MPM2D Worksheet 4.5 — Factored Form & the Zeros (teacher edition)
import { F, gridT, rectT } from "./figT.mjs";

const ff = (f, r, s, v, view, step) => F({ view, curves: [{ f, color: "violet" }], points: [{ x: r, y: 0, label: `(${r}, 0)`, color: "red" }, { x: s, y: 0, label: `(${s}, 0)`, color: "red" }, { x: v[0], y: v[1], label: `(${v[0]}, ${v[1]})`, color: "blue" }], ...(step ? { step } : {}) });

const EXAMPLES = [
  { title: "Reading the features", q: String.raw`For $y=(x+1)(x-5)$, find the zeros, axis, vertex and $y$-intercept.`,
    fig: ff((x) => (x + 1) * (x - 5), -1, 5, [2, -9], { xmin: -3, xmax: 7, ymin: -10, ymax: 8 }, { x: 1, y: 2 }),
    steps: [String.raw`Zeros $-1$, $5$; axis $x=2$.`, String.raw`$(2+1)(2-5)=-9$; $y$-intercept $(1)(-5)=-5$.`], ans: String.raw`vertex $(2,-9)$; $y$-int $-5$` },
  { title: "Negative a", q: String.raw`For $y=-2(x-1)(x-7)$, find the zeros, vertex and $y$-intercept.`,
    fig: ff((x) => -2 * (x - 1) * (x - 7), 1, 7, [4, 18], { xmin: -1, xmax: 9, ymin: -16, ymax: 20 }, { x: 1, y: 4 }),
    steps: [String.raw`Axis $x=4$; $-2(3)(-3)=18$.`, String.raw`$y$-intercept $-2(-1)(-7)=-14$.`], ans: String.raw`zeros $1$, $7$; vertex $(4,18)$; $y$-int $-14$` },
  { title: "A compression", q: String.raw`For $y=\tfrac12(x+4)(x+2)$, find the vertex.`,
    fig: F({ view: { xmin: -6, xmax: 0, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 0.5 * (x + 4) * (x + 2), color: "violet" }], points: [{ x: -4, y: 0, color: "red" }, { x: -2, y: 0, color: "red" }, { x: -3, y: -0.5, label: "(−3, −0.5)", color: "blue" }] }),
    steps: [String.raw`Axis $x=-3$; $\frac12(1)(-1)=-\frac12$.`], ans: String.raw`$(-3,-\tfrac12)$` },
  { title: "Difference of squares", q: String.raw`Find the zeros and vertex of $y=x^2-9$.`,
    steps: [String.raw`$(x-3)(x+3)$: zeros $\pm3$; axis $x=0$; vertex $(0,-9)$.`], ans: String.raw`zeros $\pm3$; vertex $(0,-9)$` },
  { title: "Common factor first", q: String.raw`Find the zeros and vertex of $y=3x^2+6x-24$.`,
    fig: ff((x) => 3 * x * x + 6 * x - 24, -4, 2, [-1, -27], { xmin: -6, xmax: 4, ymin: -30, ymax: 12 }, { x: 1, y: 6 }),
    steps: [String.raw`$3(x^2+2x-8)=3(x+4)(x-2)$.`, String.raw`Axis $x=-1$; $3(3)(-3)=-27$.`], ans: String.raw`zeros $-4$, $2$; vertex $(-1,-27)$` },
  { title: "A zero at the origin", q: String.raw`Find the zeros and vertex of $y=x^2-6x$.`,
    steps: [String.raw`$x(x-6)$: zeros $0$, $6$; axis $x=3$; $3(-3)=-9$.`], ans: String.raw`zeros $0$, $6$; vertex $(3,-9)$` },
  { title: "Equation from zeros and a point", q: String.raw`Find the equation of the parabola with zeros $-3$ and $5$ through $(1,8)$.`,
    steps: [String.raw`$y=a(x+3)(x-5)$; $8=a(4)(-4)=-16a\Rightarrow a=-\frac12$.`], ans: String.raw`$y=-\frac12(x+3)(x-5)$` },
  { title: "Equation from a graph", q: "Find the equation of the parabola shown in factored form.",
    fig: ff((x) => 0.5 * (x - 1) * (x - 5), 1, 5, [3, -2], { xmin: -1, xmax: 7, ymin: -3, ymax: 5 }),
    steps: [String.raw`$y=a(x-1)(x-5)$; vertex $(3,-2)$: $-2=a(2)(-2)\Rightarrow a=\frac12$.`], ans: String.raw`$y=\frac12(x-1)(x-5)$` },
  { title: "A kicked ball", q: String.raw`A ball's path is $h=-0.02x(x-40)$, where $x$ is the horizontal distance in metres. How far does it travel and how high does it go?`,
    fig: F({ view: { xmin: -2, xmax: 44, ymin: -1, ymax: 10 }, curves: [{ f: (x) => -0.02 * x * (x - 40), a: 0, b: 40, color: "blue" }], points: [{ x: 40, y: 0, label: "(40, 0)", color: "red" }, { x: 20, y: 8, label: "(20, 8)", color: "blue" }], xlabel: "x (m)", ylabel: "h (m)", step: { x: 5, y: 2 } }),
    steps: [String.raw`Zeros $0$ and $40$: it lands $40$ m away.`, String.raw`Axis $x=20$; $h=-0.02(20)(-20)=8$.`], ans: "40 m; 8 m high" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the zeros of $y=(x-4)(x+6)$.`, recap: "Zeros.", ans: "$4$ and $-6$" },
  { level: 1, q: String.raw`Find the axis of symmetry of $y=(x+2)(x-8)$.`, recap: "Axis.", ans: "$x=3$" },
  { level: 1, q: String.raw`Find the $y$-intercept of $y=3(x-1)(x+2)$.`, recap: "y-intercept.", ans: "$-6$" },
  { level: 2, q: String.raw`Find the zeros, axis and vertex of $y=-(x+3)(x-1)$, then sketch it.`, recap: "Sketch.", ans: String.raw`zeros $-3$, $1$; axis $x=-1$; vertex $(-1,4)$`, fig: gridT({ xmin: -5, xmax: 3, ymin: -4, ymax: 6 }) },
  { level: 2, q: String.raw`Factor $y=x^2+x-20$ and state its zeros.`, recap: "Factor, zeros.", ans: String.raw`$(x+5)(x-4)$: $-5$ and $4$` },
  { level: 2, q: String.raw`Factor $y=2x^2-18$ and state its zeros.`, recap: "Factor, zeros.", ans: String.raw`$2(x-3)(x+3)$: $\pm3$` },
  { level: 2, q: String.raw`Find the equation with zeros $2$ and $6$ passing through $(0,6)$.`, recap: "Equation.", ans: String.raw`$y=\frac12(x-2)(x-6)$` },
  { level: 2, q: String.raw`Find the vertex of $y=4x(x-3)$.`, recap: "Vertex.", ans: String.raw`$(1.5,-9)$` },
  { level: 3, space: 5, q: String.raw`An arch is $30$ m wide at its base and $12$ m tall. Write its equation with one foot at the origin.`, recap: "Arch.", ans: String.raw`$y=-\frac{4}{75}x(x-30)$`, fig: F({ view: { xmin: -2, xmax: 32, ymin: -1, ymax: 14 }, curves: [{ f: (x) => (-4 / 75) * x * (x - 30), a: 0, b: 30, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 30, y: 0, label: "(30, 0)", color: "red" }], xlabel: "m", ylabel: "m", step: { x: 5, y: 2 } }) },
  { level: 3, space: 5, q: String.raw`Sketch $y=x(x-4)$ and $y=-2x(x-4)$ on one grid. What do they share? Find each vertex.`, recap: "Same zeros.", ans: String.raw`zeros $0$, $4$ and axis $x=2$; vertices $(2,-4)$, $(2,8)$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -6, ymax: 10 }) },
  { level: 3, space: 5, q: String.raw`A parabola has zeros $1$ and $-3$ and its vertex has $y$-coordinate $8$. Find its equation.`, recap: "Zeros and vertex height.", ans: String.raw`$y=-2(x-1)(x+3)$` },
  { level: 3, space: 5, q: String.raw`Explain why $y=x^2+4$ has no factored form over the real numbers.`, recap: "No factored form.", ans: "it has no zeros (minimum 4 > 0), and each factor would give a zero" },
  { level: 3, space: 5, q: String.raw`A rectangle has perimeter $40$ cm and length $x$ cm. Write its area in factored form, find the zeros, and the maximum area.`, recap: "Rectangle area.", ans: String.raw`$A=x(20-x)$; zeros $0$, $20$; max $100$ cm$^2$ at $x=10$`, fig: rectT("x", "20 − x", "perimeter 40 cm") },
];

export const WS = {
  code: "4.5",
  title: "Factored Form & the Zeros",
  bigideas: String.raw`In $y=a(x-r)(x-s)$ the zeros are $r$ and $s$ (a product is zero only when a factor is zero). The axis is halfway, $x=\frac{r+s}{2}$; substituting it gives the vertex; the $y$-intercept is $ars$. Factor standard form to find zeros, and use one extra point to find $a$ when writing an equation from given zeros.`,
  goals: ["Read zeros, axis, vertex, y-intercept.", "Factor to find zeros.", "Write equations from zeros and a point.", "Solve arch and path problems."],
  curriculum: "QR3",
  vocab: [["Factored form", "$a(x-r)(x-s)$"], ["Zero product property", "$AB=0\\Rightarrow A=0$ or $B=0$"], ["Axis", "halfway between zeros"]],
  hook: String.raw`Show the graph of a bridge arch with its two feet marked. Ask students to write a product that is zero at both feet.`,
  concepts: [
    ["1. Reading", String.raw`Zeros $r$, $s$; axis halfway; vertex by substitution.
${ff((x) => (x - 2) * (x - 6), 2, 6, [4, -4], { xmin: -1, xmax: 9, ymin: -5, ymax: 12 }, { x: 1, y: 2 })}`],
    ["2. From standard form", String.raw`Factor fully (common factor first); the common factor is part of $a$.`],
    ["3. Writing equations", String.raw`$y=a(x-r)(x-s)$, then substitute a point for $a$.`],
  ],
  tips: ["(x + 4) gives −4.", "Vertex y needs substitution.", "Keep the common factor as a.", "One more point for a.", "Arches open down: a < 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
