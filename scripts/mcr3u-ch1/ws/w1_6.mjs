// MCR3U Worksheet 1.6 — Translations and Vertical Stretches (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Factoring k first", q: String.raw`Describe $y=(2x+8)^2-1$ and give the vertex.`,
    fig: F({ view: { xmin: -7, xmax: 2, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (2 * x + 8) ** 2 - 1 }], points: [pt(-4, -1), pt(-3, 3), pt(-5, 3)] }),
    steps: [String.raw`$2x+8=2(x+4)$: $k=2$, $d=-4$, $c=-1$.`, String.raw`$(x,y)\to\left(\frac x2-4,\ y-1\right)$: $(0,0)\to(-4,-1)$, $(\pm2,4)\to(-3,3),(-5,3)$.`], ans: String.raw`horizontal compression by $\tfrac12$, 4 left, 1 down; vertex $(-4,-1)$` },
  { title: "Horizontal translation", q: String.raw`Describe $y=|x-4|$.`, steps: [String.raw`$d=4$: right 4; vertex $(4,0)$.`], ans: "translation 4 right" },
  { title: "Two translations", q: String.raw`Graph $y=\sqrt{x+2}+1$ from key points.`,
    fig: F({ view: { xmin: -3, xmax: 8, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x + 2) + 1, a: -2 }], points: [pt(-2, 1), pt(-1, 2, false), pt(2, 3), pt(7, 4)] }),
    steps: [String.raw`$(x,y)\to(x-2,\ y+1)$: $(0,0)\to(-2,1)$, $(1,1)\to(-1,2)$, $(4,2)\to(2,3)$, $(9,3)\to(7,4)$.`], ans: String.raw`$D: x\ge-2$, $R: y\ge1$` },
  { title: "Reciprocal with translations", q: String.raw`Sketch $y=\frac1{x+1}-3$.`,
    fig: F({ view: { xmin: -6, xmax: 4, ymin: -8, ymax: 2 }, curves: [{ f: (x) => 1 / (x + 1) - 3, color: "red" }], vlines: [{ x: -1, color: "gray", dash: true }], lines: [{ m: 0, b: -3, color: "gray", dash: true }], points: [pt(0, -2), pt(-2, -4)] }),
    steps: [String.raw`Asymptotes $x=-1$, $y=-3$.`, String.raw`$(1,1)\to(0,-2)$, $(-1,-1)\to(-2,-4)$.`], ans: String.raw`$D: x\ne-1$, $R: y\ne-3$` },
  { title: "Horizontal stretch", q: String.raw`Map the key points of $x^2$ under $y=\left(\tfrac13x\right)^2$.`,
    steps: [String.raw`$k=\tfrac13$: $(x,y)\to(3x,\ y)$: $(\pm1,1)\to(\pm3,1)$, $(\pm2,4)\to(\pm6,4)$.`], ans: "3 times as wide; same range" },
  { title: "Reflection in the y-axis and translations", q: String.raw`Graph $y=\sqrt{1-x}+2$.`,
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(1 - x) + 2, b: 1 }], points: [pt(1, 2), pt(0, 3), pt(-3, 4)] }),
    steps: [String.raw`$1-x=-(x-1)$: $k=-1$, $d=1$, $c=2$.`, String.raw`$(x,y)\to(-x+1,\ y+2)$: $(0,0)\to(1,2)$, $(1,1)\to(0,3)$, $(4,2)\to(-3,4)$.`], ans: String.raw`$D: x\le1$, $R: y\ge2$` },
  { title: "Compression and translations", q: String.raw`Graph $y=\tfrac13(x-3)^2-2$.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -3, ymax: 3 }, curves: [{ f: (x) => (x - 3) ** 2 / 3 - 2 }], points: [pt(3, -2), pt(0, 1), pt(6, 1)] }),
    steps: [String.raw`$(x,y)\to(x+3,\ \tfrac13y-2)$: $(-3,9)\to(0,1)$, $(0,0)\to(3,-2)$, $(3,9)\to(6,1)$.`], ans: String.raw`vertex $(3,-2)$, wider than $x^2$` },
  { title: "Equation from a graph", q: "A parabola has vertex (2, −5) and passes through (4, 3). Find its equation.",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 5 }, curves: [{ f: (x) => 2 * (x - 2) ** 2 - 5 }], points: [pt(2, -5), pt(4, 3)] }),
    steps: [String.raw`$y=a(x-2)^2-5$; $3=4a-5\Rightarrow a=2$.`], ans: String.raw`$y=2(x-2)^2-5$` },
  { title: "Domain and range", q: String.raw`State the domain and range of $y=-2\sqrt{3x-9}+6$.`,
    steps: [String.raw`$3x-9=3(x-3)$: starts at $(3,6)$; $a<0$ sends it downward, $k>0$ sends it right.`], ans: String.raw`$D: x\ge3$; $R: y\le6$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Describe the transformation in $y=(x+6)^2$.`, recap: "(x + 6)².", ans: "6 left" },
  { level: 1, q: String.raw`Describe the transformation in $y=\sqrt x-7$.`, recap: "√x − 7.", ans: "7 down" },
  { level: 1, q: String.raw`Describe the transformation in $y=\sqrt{\tfrac15x}$.`, recap: "√(x/5).", ans: "horizontal stretch by 5" },
  { level: 2, q: String.raw`Find the image of $(4,2)$ on $y=\sqrt x$ under $y=3\sqrt{2(x-1)}-2$.`, recap: "Map a point.", ans: String.raw`$\left(\frac42+1,\ 3(2)-2\right)=(3,4)$` },
  { level: 2, q: String.raw`Sketch $y=-(x-1)^2+4$ on the grid. State the vertex and range.`, recap: "Sketch a parabola.", ans: String.raw`vertex $(1,4)$; $y\le4$`, fig: gridT({ xmin: -3, xmax: 5, ymin: -5, ymax: 5 }) },
  { level: 2, q: String.raw`For $y=\frac2{x-4}+1$, state the asymptotes, domain and range.`, recap: "Reciprocal.", ans: String.raw`$x=4$, $y=1$; $x\ne4$; $y\ne1$` },
  { level: 2, q: String.raw`Write the equation: $\sqrt x$ reflected in the x-axis, stretched vertically by 3, compressed horizontally by $\tfrac12$, then translated 2 left and 5 up.`, recap: "Write an equation.", ans: String.raw`$y=-3\sqrt{2(x+2)}+5$` },
  { level: 2, q: String.raw`State the range of $y=-\tfrac12\sqrt{x+8}-1$.`, recap: "Range.", ans: String.raw`$y\le-1$` },
  { level: 3, space: 4, q: String.raw`$y=a\sqrt{x-d}+c$ starts at $(-3,4)$ and passes through $(13,-4)$. Find the equation.`, recap: "Find a.", ans: String.raw`$y=-2\sqrt{x+3}+4$` },
  { level: 3, space: 4, q: String.raw`$y=\sqrt{k(x-d)}+c$ starts at $(2,1)$ and passes through $(5,4)$. Find $k$ and write the equation.`, recap: "Find k.", ans: String.raw`$\sqrt{3k}=3\Rightarrow k=3$; $y=\sqrt{3(x-2)}+1$` },
  { level: 3, space: 4, q: String.raw`$y=\frac{a}{x-d}+c$ has asymptotes $x=2$ and $y=-1$ and passes through $(4,2)$. Find it.`, recap: "Reciprocal from features.", ans: String.raw`$y=\frac6{x-2}-1$` },
  { level: 3, space: 4, q: String.raw`For which values of $c$ does $y=2|x-3|+c$ have no, one, or two x-intercepts?`, recap: "Number of zeros.", ans: String.raw`none: $c>0$; one: $c=0$; two: $c<0$` },
  { level: 3, space: 5, q: String.raw`Explain why $y=4x^2$ and $y=(2x)^2$ are the same graph, and give a different transformation description for each.`, recap: "Two descriptions.", ans: String.raw`$(2x)^2=4x^2$: vertical stretch by 4, or horizontal compression by $\tfrac12$` },
];

export const WS = {
  code: "1.6",
  title: "Translations and Vertical Stretches",
  bigideas: String.raw`In $y=af(k(x-d))+c$: $c$ translates vertically, $d$ translates horizontally (opposite sign inside the bracket), $a$ stretches ($|a|>1$), compresses ($|a|<1$) or reflects in the x-axis ($a<0$), and $k$ compresses ($|k|>1$), stretches ($|k|<1$) or reflects in the y-axis ($k<0$) horizontally. Map key points with $(x,y)\to\left(\frac xk+d,\ ay+c\right)$: factor $k$ out first, stretch first, translate last.`,
  goals: ["Describe a, k, d and c.", "Map key points with (x/k + d, ay + c).", "Sketch transformed parents.", "Write equations from graphs and descriptions."],
  curriculum: "A1.8, A1.9",
  vocab: [["Translation", "slide"], ["Vertical stretch / compression", "multiply y by |a|"], ["Reflection in the x-axis", "$a<0$"], ["Horizontal stretch / compression", "divide x by |k|"], ["Reflection in the y-axis", "$k<0$"]],
  hook: "Put y = x² on the projector and ask students to predict, before graphing, where y = (x − 3)² will sit, and then whether y = (2x)² is wider or narrower. Most get both wrong — let the graphs settle it.",
  concepts: [
    ["1. Translations", String.raw`${F({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (x - 2) ** 2 + 1 }] }, 5, "y = x² → y = (x − 2)² + 1")}`],
    ["2. Vertical stretches", String.raw`$y=3x^2$: each y-value tripled; $y=\tfrac12x^2$: halved; $y=-x^2$: flipped.`],
    ["3. Horizontal stretches", String.raw`${F({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(2 * x), a: 0 }, { f: (x) => Math.sqrt(x / 2), a: 0, color: "green" }] }, 5, "√x (grey), √(2x) compressed, √(x/2) stretched")} $k$ divides the x-coordinates; $k<0$ flips the graph across the y-axis.`],
    ["4. Mapping", String.raw`$(x,y)\to\left(\frac xk+d,\ ay+c\right)$, after writing the bracket as $k(x-d)$.`],
  ],
  tips: ["Inside sign is opposite to the movement.", "Factor k out before reading d.", "k divides x; a multiplies y.", "Stretch before translating.", "Move the asymptotes of 1/x with the graph.", "a < 0 reverses the range inequality; k < 0 reverses the domain inequality."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
