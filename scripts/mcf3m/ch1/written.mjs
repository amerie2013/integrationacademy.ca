// MCF3M chapter 1 written-response questions (Part C of printed tests). Each has a figure and a marking guide.
import { planeDoc, mapDoc, P } from "../figs.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const side = (h, k, c = "violet") => [{ f: (x) => k + Math.sqrt(x - h), a: h, color: c }, { f: (x) => k - Math.sqrt(x - h), a: h, color: c }];

export const WRITTEN = [
  W("1.1", "medium", 4, S`(a) Decide whether the mapping diagram shows a function, and explain. (b) State its domain and range. (c) Change one arrow so that it becomes a function.`,
    S`(a) Not a function: the input $1$ has two outputs. (b) $D=\{-2,1,3\}$, $R=\{0,4,5\}$. (c) e.g. remove $1\to5$. [2, 1, 1.]`,
    mapDoc([[-2, 0], [1, 4], [1, 5], [3, 0]])),
  W("1.1", "hard", 5, S`For $x=(y-2)^2-1$: (a) solve for $y$; (b) explain with the vertical-line test why it is not a function, naming two points with the same input; (c) state the only input with one output.`,
    S`(a) $y=2\pm\sqrt{x+1}$. (b) $x=3$ gives $(3,4)$ and $(3,0)$. (c) $x=-1$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: side(-1, 2) })),
  W("1.2", "medium", 4, S`$f(x)=-x^2+6x-5$ (graph shown). (a) Find $f(1)$ and $f(4)$. (b) Solve $f(x)=3$. (c) Explain how part (b) appears on the graph.`,
    S`(a) $0$, $3$. (b) $x^2-6x+8=0$: $x=2$ or $4$. (c) the line $y=3$ meets the curve at $x=2$ and $x=4$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 5 }, curves: [{ f: (x) => -x * x + 6 * x - 5, color: "violet" }] })),
  W("1.2", "hard", 5, S`A rocket's height is $h(t)=-5t^2+50t$ m. (a) Find and interpret $h(3)$. (b) Find when the rocket is $80$ m high. (c) Find $h(12)$ and explain why it shows a limit of the model.`,
    S`(a) $105$: $105$ m after $3$ s. (b) $t^2-10t+16=0$: $t=2$, $t=8$. (c) $-120$: negative height, the rocket has landed at $t=10$. [1, 2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 11, ymin: -5, ymax: 135 }, curves: [{ f: (t) => -5 * t * t + 50 * t, a: 0, b: 10, color: "violet" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W("1.3", "medium", 4, S`State the domain and range of each: (a) $y=2(x+1)^2-6$; (b) the graph shown (closed dot at $(-4,\,1)$, open dot at $(2,\,-5)$); (c) $y=-x+3$.`,
    S`(a) $\mathbb{R}$; $y\ge-6$. (b) $-4\le x<2$; $-5<y\le1$. (c) $\mathbb{R}$; $\mathbb{R}$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -6, ymax: 3 }, segs: [{ pts: [[-4, 1], [2, -5]], color: "violet" }], points: [{ x: -4, y: 1, label: "closed", color: "violet" }, { x: 2, y: -5, label: "open", color: "red" }] })),
  W("1.3", "hard", 5, S`A ball is kicked from the ground: $h(t)=-4.9t^2+14.7t$. (a) When does it land? (b) Find its maximum height. (c) State the domain and range in context and explain each restriction.`,
    S`(a) $t=3$ s. (b) at $t=1.5$: $11.025$ m. (c) $0\le t\le3$ (from the kick to landing); $0\le h\le11.025$ (ground to peak). [1, 2, 2.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 3.5, ymin: -1, ymax: 13 }, curves: [{ f: (t) => -4.9 * t * t + 14.7 * t, a: 0, b: 3, color: "violet" }], step: { x: 0.5, y: 1 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W("1.4", "medium", 4, S`For $x=0,1,2,3,4$ the values are $y=-2,\,1,\,6,\,13,\,22$. (a) Show with a difference table that the relation is quadratic. (b) Find $a$, $b$, $c$. (c) Predict $y$ at $x=5$.`,
    S`(a) First $3,5,7,9$; second $2$. (b) $a=1$, $c=-2$, $b=2$: $y=x^2+2x-2$. (c) $33$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 35 }, points: [[0, -2], [1, 1], [2, 6], [3, 13], [4, 22]].map(([x, y]) => P(x, y)), step: { x: 1, y: 5 } })),
  W("1.4", "hard", 5, S`A pattern of dots has $D(1)=4$, $D(2)=10$, $D(3)=18$, $D(4)=28$. (a) Show the pattern is quadratic. (b) Find a formula. (c) Which figure has $108$ dots?`,
    S`(a) First $6,8,10$; second $2$. (b) $D(n)=n^2+3n$. (c) $n^2+3n-108=0$: $n=9$. [1, 2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, points: [[1, 4], [2, 10], [3, 18], [4, 28]].map(([x, y]) => P(x, y)), step: { x: 1, y: 5 } })),
  W("1.5", "medium", 4, S`The red and blue parabolas are each a single transformation of $y=x^2$ (grey). (a) Write both equations. (b) Describe each transformation. (c) Give the image of $(2,\,4)$ under each.`,
    S`(a) red $y=(x-3)^2$; blue $y=\tfrac12x^2$. (b) 3 right; compression by $\tfrac12$. (c) $(5,4)$; $(2,2)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 7, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (x - 3) ** 2, color: "red" }, { f: (x) => 0.5 * x * x, color: "blue" }] })),
  W("1.5", "hard", 5, S`(a) $y=(x-h)^2$ passes through $(1,\,16)$ and $(9,\,16)$; find $h$. (b) $y=ax^2$ passes through $(-4,\,-8)$; find $a$ and describe it. (c) $y=x^2+k$ touches the line $y=4x$; find $k$.`,
    S`(a) $h=5$. (b) $a=-\tfrac12$: compression by $\tfrac12$, reflection. (c) $x^2-4x+k=0$ has one root: $k=4$. [1, 2, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 18 }, curves: [{ f: (x) => (x - 5) ** 2, color: "violet" }], points: [P(1, 16), P(9, 16)], step: { x: 1, y: 2 } })),
  W("1.6", "medium", 4, S`Graph $y=-2(x-1)^2+8$ on the grid using the step pattern. State the vertex, axis, intercepts, domain and range.`,
    S`Vertex $(1,8)$; axis $x=1$; $x$-intercepts $-1$, $3$; $y$-intercept $6$; $D=\mathbb{R}$; $y\le8$. [2, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 10 } })),
  W("1.6", "hard", 6, S`A parabolic bridge arch spans $24$ m and is $9$ m high. (a) Choose axes and write its equation in vertex form. (b) Find the height $4$ m from one foot. (c) A boat $8$ m wide and $7.5$ m tall passes under the centre. Will it fit?`,
    S`(a) feet $(0,0),(24,0)$, vertex $(12,9)$: $h=-\tfrac1{16}(x-12)^2+9$. (b) $h(4)=-4+9=5$ m. (c) at $x=8$: $-1+9=8>7.5$: fits. [2, 2, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 26, ymin: -1, ymax: 11 }, curves: [{ f: (x) => -((x - 12) ** 2) / 16 + 9, a: 0, b: 24, color: "violet" }], step: { x: 2, y: 1 } })),
];
