// MPM2D Worksheet 4.3 — Transformations & Vertex Form (teacher edition)
import { F, gridT } from "./figT.mjs";

const base = { f: (x) => x * x, color: "gray" };
const tr = (f, pts, view, step) => F({ view, curves: [base, { f, color: "violet" }], points: pts, ...(step ? { step } : {}) });

const EXAMPLES = [
  { title: "Two translations", q: String.raw`Describe $y=(x+2)^2-3$ as a transformation of $y=x^2$.`,
    fig: tr((x) => (x + 2) ** 2 - 3, [{ x: -2, y: -3, label: "(−2, −3)", color: "blue" }], { xmin: -6, xmax: 3, ymin: -5, ymax: 8 }),
    steps: [String.raw`$h=-2$: left 2. $k=-3$: down 3.`], ans: String.raw`left 2, down 3; vertex $(-2,-3)$` },
  { title: "A stretch", q: String.raw`Describe $y=3(x-1)^2$.`,
    fig: tr((x) => 3 * (x - 1) ** 2, [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }], { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }),
    steps: [String.raw`$a=3$: vertical stretch by 3. $h=1$: right 1.`], ans: String.raw`stretch by 3, right 1; vertex $(1,0)$` },
  { title: "Reflection, compression, translation", q: String.raw`Describe $y=-\tfrac12(x-4)^2+6$.`,
    fig: tr((x) => -0.5 * (x - 4) ** 2 + 6, [{ x: 4, y: 6, label: "(4, 6)", color: "blue" }], { xmin: -2, xmax: 9, ymin: -4, ymax: 9 }),
    steps: [String.raw`$a=-\frac12$: reflection in the $x$-axis and compression by $\frac12$.`, "Right 4, up 6."], ans: String.raw`vertex $(4,6)$, maximum $6$` },
  { title: "Mapping points", q: String.raw`Find the images of $(1,1)$ and $(2,4)$ under $y=-2(x+1)^2+3$.`,
    steps: [String.raw`$(x,y)\to(x-1,\ -2y+3)$.`, String.raw`$(1,1)\to(0,1)$; $(2,4)\to(1,-5)$.`], ans: "$(0,1)$ and $(1,-5)$" },
  { title: "Equation from a description", q: String.raw`Write the equation of the parabola with vertex $(-3,5)$, opening up, compressed by a factor of $\frac14$.`,
    steps: [String.raw`$a=\frac14$, $h=-3$, $k=5$.`], ans: String.raw`$y=\frac14(x+3)^2+5$` },
  { title: "Equation from a graph", q: String.raw`A parabola has vertex $(2,-1)$ and passes through $(4,7)$. Find its equation.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 9 }, curves: [{ f: (x) => 2 * (x - 2) ** 2 - 1, color: "violet" }], points: [{ x: 2, y: -1, label: "(2, −1)", color: "blue" }, { x: 4, y: 7, label: "(4, 7)", color: "red" }] }),
    steps: [String.raw`$y=a(x-2)^2-1$; $7=4a-1\Rightarrow a=2$.`], ans: "$y=2(x-2)^2-1$" },
  { title: "Inside or outside the bracket?", q: String.raw`Compare $y=(x-5)^2$ and $y=x^2-5$.`,
    fig: F({ view: { xmin: -4, xmax: 8, ymin: -6, ymax: 9 }, curves: [{ f: (x) => (x - 5) ** 2, color: "violet" }, { f: (x) => x * x - 5, color: "red" }] }),
    steps: [String.raw`$(x-5)^2$: right 5, vertex $(5,0)$.`, String.raw`$x^2-5$: down 5, vertex $(0,-5)$.`], ans: "different: right 5 vs down 5" },
  { title: "Axis, range and zeros", q: String.raw`For $y=-(x+6)^2-2$, state the axis, range and number of zeros.`,
    steps: [String.raw`Vertex $(-6,-2)$, opening down.`, "The maximum −2 is below the x-axis."], ans: String.raw`axis $x=-6$; $y\le-2$; no zeros` },
  { title: "Finding k", q: String.raw`$y=2(x-3)^2+k$ passes through $(5,1)$. Find $k$.`,
    steps: [String.raw`$1=2(2)^2+k=8+k$.`], ans: "$k=-7$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the vertex of $y=(x-7)^2+2$.`, recap: "Vertex.", ans: "$(7,2)$" },
  { level: 1, q: String.raw`Describe $y=4x^2$ compared with $y=x^2$.`, recap: "y = 4x².", ans: "vertical stretch by 4" },
  { level: 1, q: String.raw`State the axis of symmetry of $y=-(x+3)^2+1$.`, recap: "Axis.", ans: "$x=-3$" },
  { level: 2, q: String.raw`Describe $y=-3(x-2)^2-5$ as a sequence of transformations.`, recap: "Describe.", ans: "reflect, stretch by 3, right 2, down 5" },
  { level: 2, q: String.raw`Find the images of $(2,4)$ and $(-1,1)$ under $y=\frac12(x+4)^2-1$.`, recap: "Images.", ans: String.raw`$(-2,1)$ and $(-5,-\frac12)$` },
  { level: 2, q: String.raw`Write the equation with vertex $(4,-2)$, reflected in the $x$-axis and stretched by 2.`, recap: "Write the equation.", ans: "$y=-2(x-4)^2-2$" },
  { level: 2, q: String.raw`A parabola has vertex $(-1,-3)$ and passes through $(1,5)$. Find $a$.`, recap: "Find a.", ans: "$a=2$" },
  { level: 2, q: String.raw`State the range of $y=5(x-1)^2-4$.`, recap: "Range.", ans: String.raw`$y\ge-4$` },
  { level: 3, space: 5, q: "Find the equation of the parabola shown in vertex form.", recap: "Equation from a graph.", ans: String.raw`vertex $(-2,4)$, through $(0,0)$: $y=-(x+2)^2+4$`, fig: F({ view: { xmin: -5, xmax: 2, ymin: -3, ymax: 6 }, curves: [{ f: (x) => -((x + 2) ** 2) + 4, color: "violet" }], points: [{ x: -2, y: 4, label: "(−2, 4)", color: "blue" }, { x: 0, y: 0, label: "(0, 0)", color: "red" }] }) },
  { level: 3, space: 5, q: String.raw`Sketch $y=x^2$ and $y=-(x-3)^2+2$ on the same grid. Describe how to get from one to the other.`, recap: "Sketch two parabolas.", ans: "reflect in the x-axis, right 3, up 2", fig: gridT({ xmin: -4, xmax: 7, ymin: -6, ymax: 8 }) },
  { level: 3, space: 5, q: String.raw`An arch has its top at $(0,9)$ and meets the ground at $(3,0)$ and $(-3,0)$. Write its equation and find its width at a height of $5$ m.`, recap: "Arch.", ans: String.raw`$y=-x^2+9$; at $y=5$, $x=\pm2$: width $4$ m` },
  { level: 3, space: 5, q: String.raw`Explain why $y=(x-3)^2$ moves the parabola right, even though there is a minus sign.`, recap: "Why minus means right.", ans: "the vertex is where x − 3 = 0, i.e. x = 3" },
  { level: 3, space: 5, q: String.raw`$y=(x-h)^2+k$ has zeros $1$ and $7$ and its vertex is on the line $y=-9$. Find $h$ and $k$.`, recap: "Find h and k.", ans: String.raw`$h=4$ (halfway), $k=-9$; check $(1-4)^2-9=0$ ✓` },
];

export const WS = {
  code: "4.3",
  title: "Transformations & Vertex Form",
  bigideas: String.raw`In $y=a(x-h)^2+k$, $a$ stretches ($|a|>1$), compresses ($|a|<1$) or reflects ($a<0$) the parabola $y=x^2$; $h$ translates it horizontally and $k$ vertically. The vertex is $(h,k)$, the axis $x=h$, the optimal value $k$. Points map by $(x,y)\to(x+h,\ ay+k)$. One extra point determines $a$.`,
  goals: ["Describe transformations.", "Read vertex, axis, optimal value.", "Map points.", "Write equations from descriptions and graphs."],
  curriculum: "QR2",
  vocab: [["Vertex form", "$a(x-h)^2+k$"], ["Translation", "shift"], ["Stretch / compression", "$|a|>1$ / $|a|<1$"], ["Reflection", "$a<0$"]],
  hook: String.raw`Show a parabola drawn on a transparency over $y=x^2$. Slide and flip it. Ask students to describe each move in words, then match them to $a$, $h$, $k$.`,
  concepts: [
    ["1. Each parameter", String.raw`$a$: shape and direction; $h$: left/right (watch the sign); $k$: up/down.
${tr((x) => 2 * (x - 3) ** 2 - 4, [{ x: 3, y: -4, label: "(3, −4)", color: "blue" }], { xmin: -4, xmax: 7, ymin: -6, ymax: 9 })}`],
    ["2. Mapping rule", String.raw`$(x,y)\to(x+h,\ ay+k)$: stretch first, then translate.`],
    ["3. Finding a", String.raw`Substitute another point into $y=a(x-h)^2+k$.`],
  ],
  tips: ["(x + 2) is a shift LEFT.", "a never moves the vertex.", "Stretch before translating.", "Check a with a second point.", "Sketch y = x² lightly first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
