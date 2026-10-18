// MHF4U Worksheet 1.4 — Transformations of Power Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Describe a quartic", q: String.raw`Describe $y=3(x+2)^4-5$ as transformations of $y=x^4$.`,
    fig: F({ view: { xmin: -4.5, xmax: 1.5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 4, color: "gray" }, { f: (x) => 3 * (x + 2) ** 4 - 5 }], points: [pt(-2, -5), pt(-1, -2), pt(-3, -2)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$a=3$: vertical stretch by 3. $d=-2$: 2 left. $c=-5$: 5 down.`, String.raw`Vertex $(-2,-5)$; range $y\ge-5$.`], ans: "stretch 3, left 2, down 5; vertex (−2, −5)" },
  { title: "Describe a cubic", q: String.raw`Describe $y=-\tfrac12(x-1)^3+2$.`,
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -0.5 * (x - 1) ** 3 + 2, color: "red" }], points: [pt(1, 2), pt(3, -2), pt(-1, 6)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$a=-\tfrac12$: compression by $\tfrac12$ and a reflection in the x-axis.`, String.raw`1 right and 2 up: the point of symmetry moves from $(0,0)$ to $(1,2)$.`], ans: "compress ½, reflect in x-axis, right 1, up 2" },
  { title: "A horizontal stretch", q: String.raw`Describe $y=\left(\tfrac13x\right)^3$ and write it in the form $y=ax^3$.`,
    steps: [String.raw`$k=\tfrac13$: horizontal stretch by a factor of 3.`, String.raw`$\left(\tfrac13x\right)^3=\tfrac1{27}x^3$: also a vertical compression by $\tfrac1{27}$.`], ans: String.raw`horizontal stretch 3; $y=\tfrac1{27}x^3$` },
  { title: "Map key points", q: String.raw`Map $(-1,-1)$, $(0,0)$, $(1,1)$, $(2,8)$ on $y=x^3$ under $y=2(x-3)^3+1$.`,
    steps: [String.raw`Rule: $(x,y)\to(x+3,\,2y+1)$.`, String.raw`Images: $(2,-1)$, $(3,1)$, $(4,3)$, $(5,17)$.`], ans: "(2, −1), (3, 1), (4, 3), (5, 17)" },
  { title: "Reflection in the y-axis", q: String.raw`Compare $y=(-x)^4$ with $y=x^4$, and $y=(-x)^3$ with $y=x^3$.`,
    steps: [String.raw`$(-x)^4=x^4$: an even function is unchanged by a y-axis reflection.`, String.raw`$(-x)^3=-x^3$: for an odd function a y-axis reflection is the same as an x-axis reflection.`], ans: "x⁴ unchanged; (−x)³ = −x³" },
  { title: "Domain and range", q: String.raw`State the domain, range and vertex of $y=-4(x+5)^6+7$.`,
    steps: [String.raw`Even power, reflected: opens down, maximum at the vertex $(-5,7)$.`], ans: String.raw`$D=\mathbb R$; $y\le7$; vertex $(-5,7)$` },
  { title: "Equation from a description", q: String.raw`$y=x^4$ is stretched vertically by 2, reflected in the y-axis, then translated 4 right and 1 up. Write the equation.`,
    steps: [String.raw`The y-axis reflection does nothing to $x^4$.`, String.raw`$y=2(x-4)^4+1$.`], ans: String.raw`$y=2(x-4)^4+1$` },
  { title: "Equation from a graph", q: String.raw`The cubic shown has its point of symmetry at $(-1,3)$ and passes through $(0,1)$. Find its equation.`,
    fig: F({ view: { xmin: -3, xmax: 1, ymin: -1, ymax: 7 }, curves: [{ f: (x) => -2 * (x + 1) ** 3 + 3, color: "green" }], points: [pt(-1, 3), pt(0, 1)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$y=a(x+1)^3+3$.`, String.raw`$1=a(1)^3+3$, so $a=-2$.`], ans: String.raw`$y=-2(x+1)^3+3$` },
  { title: "Factor out k", q: String.raw`Describe $y=(3x+6)^4$ and find the image of $(1,1)$.`,
    steps: [String.raw`$y=(3(x+2))^4$: horizontal compression by $\tfrac13$, then 2 left.`, String.raw`$(x,y)\to\left(\tfrac x3-2,\,y\right)$: $(1,1)\to\left(-\tfrac53,1\right)$.`], ans: String.raw`compress $\tfrac13$, left 2; $\left(-\tfrac53,1\right)$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Describe $y=(x-6)^4+2$ as transformations of $y=x^4$.`, recap: "Translations.", ans: "6 right, 2 up" },
  { level: 1, q: String.raw`Give the vertex of $y=-2(x+3)^4-1$.`, recap: "Vertex.", ans: "(−3, −1)" },
  { level: 1, q: String.raw`State the range of $y=5(x-1)^4-8$.`, recap: "Range.", ans: String.raw`$y\ge-8$` },
  { level: 2, q: String.raw`Sketch $y=-(x+2)^3+4$ using at least three mapped points.`, recap: "Sketch a cubic.", ans: "(−3, 5), (−2, 4), (−1, 3)", fig: gridT({ xmin: -5, xmax: 1, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 2, q: String.raw`Map $(1,1)$ and $(2,16)$ on $y=x^4$ under $y=\tfrac12(x+1)^4-3$.`, recap: "Map points.", ans: "(0, −2.5), (1, 5)" },
  { level: 2, q: String.raw`$y=x^3$ is compressed vertically by $\tfrac14$, then translated 2 left and 5 down. Write the equation.`, recap: "Equation from description.", ans: String.raw`$y=\tfrac14(x+2)^3-5$` },
  { level: 2, q: String.raw`Write $y=(4-2x)^3$ in the form $y=a(x-d)^3$ and describe it.`, recap: "Rewrite first.", ans: String.raw`$(-2(x-2))^3=-8(x-2)^3$: stretch 8, reflect, right 2` },
  { level: 2, q: String.raw`A quartic $y=a(x-2)^4-3$ passes through $(3,1)$. Find $a$.`, recap: "Find a.", ans: "a = 4" },
  { level: 3, space: 5, q: String.raw`$y=a(x+1)^3+c$ passes through $(0,4)$ and $(1,18)$. Find $a$ and $c$.`, recap: "Two parameters.", ans: String.raw`$a+c=4$, $8a+c=18$: $a=2$, $c=2$` },
  { level: 3, space: 5, q: String.raw`Describe $y=-2(3x-6)^4+5$ in a correct order, find the image of $(1,1)$, and state the range.`, recap: "All four parameters.", ans: String.raw`$k=3$, $d=2$: compress $\tfrac13$, stretch 2, reflect, right 2, up 5; $\left(\tfrac73,3\right)$; $y\le5$` },
  { level: 3, space: 5, q: String.raw`Show that $y=(1-x)^5$ and $y=-(x-1)^5$ are the same function. Describe it as a transformation of $y=x^5$ in two different ways.`, recap: "Equivalent forms.", ans: String.raw`$(1-x)^5=(-(x-1))^5=-(x-1)^5$; reflect in x-axis then right 1, or reflect in y-axis then right 1` },
  { level: 3, space: 5, q: String.raw`The quartic shown has vertex $(1,4)$ and passes through $(3,-4)$. Find its equation and its x-intercepts.`, recap: "Equation, then zeros.", ans: String.raw`$y=-\tfrac12(x-1)^4+4$; $x=1\pm\sqrt[4]8\approx1\pm1.68$`,
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -0.5 * (x - 1) ** 4 + 4, color: "violet" }], points: [pt(1, 4), pt(3, -4)], step: { x: 1, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`A cubic $y=a(x-2)^3-1$ has an x-intercept at $x=4$. Find $a$, then sketch the graph.`, recap: "Use an intercept.", ans: String.raw`$8a-1=0$: $a=\tfrac18$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -4, ymax: 4 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "1.4",
  title: "Transformations of Power Functions",
  bigideas: String.raw`$y=a[k(x-d)]^n+c$ is $y=x^n$ transformed: $|a|$ stretches vertically, $a\lt0$ reflects in the x-axis, $|k|$ compresses horizontally by $\tfrac1{|k|}$, $k\lt0$ reflects in the y-axis, $d$ shifts right and $c$ shifts up. A point $(x,y)$ maps to $\left(\tfrac xk+d,\ ay+c\right)$. Factor out $k$ before reading $d$.`,
  goals: ["Describe transformations of power functions.", "Map key points and sketch.", "State domain, range and vertex.", "Write equations from descriptions and graphs."],
  curriculum: "C1.4",
  vocab: [["Mapping rule", "$(x,y)\\to\\left(\\tfrac xk+d,\\ ay+c\\right)$"], ["Vertex", "turning point of an even power function"], ["Point of symmetry", "image of $(0,0)$ for odd powers"]],
  hook: String.raw`Ask: if $y=(x-3)^2$ moves right 3, why does $y=(2x-6)^4$ not move right 6?`,
  concepts: [
    ["1. Parameters", String.raw`Stretch/reflect with $a$ and $k$; translate with $d$ and $c$.
${F({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3, color: "gray" }, { f: (x) => 0.5 * (x - 1) ** 3 + 2, color: "blue" }], points: [pt(0, 0, false), pt(1, 2)], step: { x: 1, y: 1 } })}`],
    ["2. Order", String.raw`Stretches and reflections first, translations last.`],
    ["3. Even vs odd", String.raw`Even powers have a vertex and a one-sided range; odd powers have range $\mathbb R$.`],
  ],
  tips: ["(x + 2) means 2 left.", "Factor k out first.", "Divide x by k when mapping.", "y-axis reflection does nothing to even powers.", "Range of an even power starts at c."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
