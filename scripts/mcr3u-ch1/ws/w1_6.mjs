// MCR3U Worksheet 1.6 — Translations and Vertical Stretches (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Vertical translation", q: String.raw`Describe $y=x^2+5$.`, steps: [String.raw`$c=5$: every point moves up 5; vertex $(0,5)$.`], ans: "translation 5 up" },
  { title: "Horizontal translation", q: String.raw`Describe $y=|x-4|$.`, steps: [String.raw`$d=4$: right 4; vertex $(4,0)$.`], ans: "translation 4 right" },
  { title: "Two translations", q: String.raw`Graph $y=\sqrt{x+2}+1$ from key points.`,
    fig: F({ view: { xmin: -3, xmax: 8, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x + 2) + 1, a: -2 }], points: [pt(-2, 1), pt(-1, 2, false), pt(2, 3), pt(7, 4)] }),
    steps: [String.raw`$(x,y)\to(x-2,\ y+1)$: $(0,0)\to(-2,1)$, $(1,1)\to(-1,2)$, $(4,2)\to(2,3)$, $(9,3)\to(7,4)$.`], ans: String.raw`$D: x\ge-2$, $R: y\ge1$` },
  { title: "Reciprocal with translations", q: String.raw`Sketch $y=\frac1{x+1}-3$.`,
    fig: F({ view: { xmin: -6, xmax: 4, ymin: -8, ymax: 2 }, curves: [{ f: (x) => 1 / (x + 1) - 3, color: "red" }], vlines: [{ x: -1, color: "gray", dash: true }], lines: [{ m: 0, b: -3, color: "gray", dash: true }], points: [pt(0, -2), pt(-2, -4)] }),
    steps: [String.raw`Asymptotes $x=-1$, $y=-3$.`, String.raw`$(1,1)\to(0,-2)$, $(-1,-1)\to(-2,-4)$.`], ans: String.raw`$D: x\ne-1$, $R: y\ne-3$` },
  { title: "Vertical stretch", q: String.raw`Map the key points of $\sqrt x$ under $y=4\sqrt x$.`,
    steps: [String.raw`$(x,y)\to(x,4y)$: $(1,4)$, $(4,8)$, $(9,12)$.`], ans: "4 times as tall; same domain" },
  { title: "Reflection and translation", q: String.raw`Describe $y=-|x|+2$.`,
    steps: [String.raw`$a=-1$: reflect in the x-axis; $c=2$: up 2.`], ans: String.raw`an upside-down V with vertex $(0,2)$; $R: y\le2$` },
  { title: "Compression and translations", q: String.raw`Graph $y=\tfrac13(x-3)^2-2$.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -3, ymax: 3 }, curves: [{ f: (x) => (x - 3) ** 2 / 3 - 2 }], points: [pt(3, -2), pt(0, 1), pt(6, 1)] }),
    steps: [String.raw`$(x,y)\to(x+3,\ \tfrac13y-2)$: $(-3,9)\to(0,1)$, $(0,0)\to(3,-2)$, $(3,9)\to(6,1)$.`], ans: String.raw`vertex $(3,-2)$, wider than $x^2$` },
  { title: "Equation from a graph", q: "A parabola has vertex (2, −5) and passes through (4, 3). Find its equation.",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 5 }, curves: [{ f: (x) => 2 * (x - 2) ** 2 - 5 }], points: [pt(2, -5), pt(4, 3)] }),
    steps: [String.raw`$y=a(x-2)^2-5$; $3=4a-5\Rightarrow a=2$.`], ans: String.raw`$y=2(x-2)^2-5$` },
  { title: "Domain and range", q: String.raw`State the domain and range of $y=-2\sqrt{x-3}+6$.`,
    steps: [String.raw`Starts at $(3,6)$; $a<0$ sends it downward.`], ans: String.raw`$D: x\ge3$; $R: y\le6$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Describe the transformation in $y=(x+6)^2$.`, recap: "(x + 6)².", ans: "6 left" },
  { level: 1, q: String.raw`Describe the transformation in $y=\sqrt x-7$.`, recap: "√x − 7.", ans: "7 down" },
  { level: 1, q: String.raw`Describe the transformation in $y=5|x|$.`, recap: "5|x|.", ans: "vertical stretch by 5" },
  { level: 2, q: String.raw`Find the image of $(4,2)$ on $y=\sqrt x$ under $y=3\sqrt{x-1}-2$.`, recap: "Map a point.", ans: String.raw`$(5,4)$` },
  { level: 2, q: String.raw`Sketch $y=-(x-1)^2+4$ on the grid. State the vertex and range.`, recap: "Sketch a parabola.", ans: String.raw`vertex $(1,4)$; $y\le4$`, fig: gridT({ xmin: -3, xmax: 5, ymin: -5, ymax: 5 }) },
  { level: 2, q: String.raw`For $y=\frac2{x-4}+1$, state the asymptotes, domain and range.`, recap: "Reciprocal.", ans: String.raw`$x=4$, $y=1$; $x\ne4$; $y\ne1$` },
  { level: 2, q: String.raw`Write the equation: $|x|$ reflected in the x-axis, stretched vertically by 3, translated 2 left and 5 up.`, recap: "Write an equation.", ans: String.raw`$y=-3|x+2|+5$` },
  { level: 2, q: String.raw`State the range of $y=-\tfrac12\sqrt{x+8}-1$.`, recap: "Range.", ans: String.raw`$y\le-1$` },
  { level: 3, space: 4, q: String.raw`$y=a\sqrt{x-d}+c$ starts at $(-3,4)$ and passes through $(13,-4)$. Find the equation.`, recap: "Find a.", ans: String.raw`$y=-2\sqrt{x+3}+4$` },
  { level: 3, space: 4, q: String.raw`A parabola has vertex $(5,1)$ and y-intercept $-49$. Write its equation.`, recap: "Vertex and y-intercept.", ans: String.raw`$y=-2(x-5)^2+1$` },
  { level: 3, space: 4, q: String.raw`$y=\frac{a}{x-d}+c$ has asymptotes $x=2$ and $y=-1$ and passes through $(4,2)$. Find it.`, recap: "Reciprocal from features.", ans: String.raw`$y=\frac6{x-2}-1$` },
  { level: 3, space: 4, q: String.raw`For which values of $c$ does $y=2|x-3|+c$ have no, one, or two x-intercepts?`, recap: "Number of zeros.", ans: String.raw`none: $c>0$; one: $c=0$; two: $c<0$` },
  { level: 3, space: 5, q: String.raw`Explain why $y=4x^2$ and $y=(2x)^2$ are the same graph, and give a different transformation description for each.`, recap: "Two descriptions.", ans: String.raw`$(2x)^2=4x^2$: vertical stretch by 4, or horizontal compression by $\tfrac12$` },
];

export const WS = {
  code: "1.6",
  title: "Translations and Vertical Stretches",
  bigideas: String.raw`In $y=af(x-d)+c$: $c$ translates vertically, $d$ translates horizontally (opposite sign inside the bracket), and $a$ stretches ($|a|>1$), compresses ($|a|<1$) or reflects in the x-axis ($a<0$). Map key points with $(x,y)\to(x+d,\ ay+c)$: stretch first, translate last.`,
  goals: ["Describe a, d and c.", "Map key points.", "Sketch transformed parents.", "Write equations from graphs and descriptions."],
  curriculum: "A1.8, A1.9",
  vocab: [["Translation", "slide"], ["Vertical stretch / compression", "multiply y by |a|"], ["Reflection in the x-axis", "$a<0$"]],
  hook: "Put y = x² on the projector and ask students to predict, before graphing, where y = (x − 3)² will sit. Most say left — let the graph settle it.",
  concepts: [
    ["1. Translations", String.raw`${F({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (x - 2) ** 2 + 1 }] }, 5, "y = x² → y = (x − 2)² + 1")}`],
    ["2. Vertical stretches", String.raw`$y=3x^2$: each y-value tripled; $y=\tfrac12x^2$: halved; $y=-x^2$: flipped.`],
    ["3. Mapping", String.raw`$(x,y)\to(x+d,\ ay+c)$.`],
  ],
  tips: ["Inside sign is opposite to the movement.", "Stretch before translating.", "Move the asymptotes of 1/x with the graph.", "Find a last, using one more point.", "a < 0 reverses the range inequality."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
