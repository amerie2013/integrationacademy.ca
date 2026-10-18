// MCR3U Worksheet 1.8 — Combining Transformations (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Root with all four parameters", q: String.raw`Graph $y=3\sqrt{2(x+1)}-4$.`,
    fig: F({ view: { xmin: -2, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 3 * Math.sqrt(2 * (x + 1)) - 4, a: -1 }], points: [pt(-1, -4), pt(-0.5, -1), pt(1, 2), pt(3.5, 5)] }),
    steps: [String.raw`$(x,y)\to(\tfrac x2-1,\ 3y-4)$.`, String.raw`$(0,0)\to(-1,-4)$, $(1,1)\to(-0.5,-1)$, $(4,2)\to(1,2)$, $(9,3)\to(3.5,5)$.`], ans: String.raw`$D: x\ge-1$, $R: y\ge-4$` },
  { title: "Downward parabola, stretched", q: String.raw`Graph $y=-\left(\tfrac12(x-4)\right)^2+3$.`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -3, ymax: 4 }, curves: [{ f: (x) => -((0.5 * (x - 4)) ** 2) + 3 }], points: [pt(4, 3), pt(0, -1), pt(8, -1), pt(2, 2, false), pt(6, 2, false)] }),
    steps: [String.raw`$(x,y)\to(2x+4,\ -y+3)$: $(-2,4)\to(0,-1)$, $(-1,1)\to(2,2)$, $(0,0)\to(4,3)$, $(1,1)\to(6,2)$, $(2,4)\to(8,-1)$.`], ans: String.raw`vertex $(4,3)$; $R: y\le3$` },
  { title: "Factor first", q: String.raw`Graph $y=|3x-6|+1$.`,
    steps: [String.raw`$|3(x-2)|+1$: $(x,y)\to(\tfrac x3+2,\ y+1)$.`, String.raw`$(-3,3)\to(1,4)$, $(0,0)\to(2,1)$, $(3,3)\to(3,4)$.`], ans: String.raw`vertex $(2,1)$, slopes $\pm3$` },
  { title: "Reciprocal with k", q: String.raw`Describe $y=\frac4{2x+2}$.`,
    steps: [String.raw`$\frac{4}{2(x+1)}$: $a=4$, $k=2$, $d=-1$.`, String.raw`Asymptotes $x=-1$, $y=0$; $(1,1)\to(-0.5,4)$, $(-1,-1)\to(-1.5,-4)$.`], ans: String.raw`same as $y=\frac2{x+1}$` },
  { title: "Reflection in both axes", q: String.raw`Graph $y=-2\sqrt{3-x}$.`,
    steps: [String.raw`$-2\sqrt{-(x-3)}$: $(x,y)\to(-x+3,\ -2y)$.`, String.raw`$(0,0)\to(3,0)$, $(1,1)\to(2,-2)$, $(4,2)\to(-1,-4)$.`], ans: String.raw`$D: x\le3$, $R: y\le0$` },
  { title: "Description to equation", q: String.raw`$x^2$ is stretched vertically by 3, compressed horizontally by $\tfrac12$, reflected in the y-axis, then moved 2 right and 1 down.`,
    steps: [String.raw`$a=3$, $k=-2$, $d=2$, $c=-1$.`], ans: String.raw`$y=3\left(-2(x-2)\right)^2-1$, i.e. $y=12(x-2)^2-1$` },
  { title: "Equation from a graph", q: "Write the equation of the V-shaped graph.",
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => -2 * Math.abs(x - 1) + 2, color: "amber" }], points: [pt(1, 2), pt(3, -2)] }),
    steps: [String.raw`Vertex $(1,2)$, opens down; from $(1,2)$ to $(3,-2)$ the slope is $-2$.`], ans: String.raw`$y=-2|x-1|+2$` },
  { title: "Domain and range from f", q: String.raw`$f$: $D: -2\le x\le4$, $R: -1\le y\le3$. Find them for $g(x)=2f(-(x+1))+5$.`,
    steps: [String.raw`$x\to-x-1$: $-2\to1$, $4\to-5$.`, String.raw`$y\to2y+5$: $-1\to3$, $3\to11$.`], ans: String.raw`$D: -5\le x\le1$, $R: 3\le y\le11$` },
  { title: "Order matters", q: String.raw`Where does $(1,4)$ go under $y=2f(x)+3$ and under $y=2(f(x)+3)$?`,
    steps: [String.raw`$2(4)+3=11$; $2(4+3)=14$.`], ans: String.raw`$(1,11)$ vs $(1,14)$ — different` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State $a,k,d,c$ for $y=-4f(3(x+2))-1$.`, recap: "Identify parameters.", ans: String.raw`$a=-4$, $k=3$, $d=-2$, $c=-1$` },
  { level: 1, q: String.raw`Find the image of $(2,6)$ under $y=\tfrac12f(x-3)+4$.`, recap: "Map a point.", ans: "$(5,7)$" },
  { level: 1, q: String.raw`Write $y=\sqrt{5x-10}$ in the form $y=\sqrt{k(x-d)}$.`, recap: "Factor k.", ans: String.raw`$\sqrt{5(x-2)}$: $k=5$, $d=2$` },
  { level: 2, q: String.raw`Sketch $y=2|x+3|-4$ and list three key points.`, recap: "Sketch a V.", ans: String.raw`$(-3,-4)$, $(-4,-2)$, $(-2,-2)$`, fig: gridT({ xmin: -8, xmax: 2, ymin: -5, ymax: 5 }) },
  { level: 2, q: String.raw`Map $(1,1),(4,2),(9,3)$ under $y=-\sqrt{2(x-1)}+3$ and state the domain and range.`, recap: "Map root points.", ans: String.raw`$(1.5,2),(3,1),(5.5,0)$; $x\ge1$; $y\le3$` },
  { level: 2, q: String.raw`Write: $\frac1x$ stretched vertically by 3, reflected in the x-axis, 4 left and 2 up.`, recap: "Reciprocal equation.", ans: String.raw`$y=-\frac3{x+4}+2$` },
  { level: 2, q: String.raw`For $y=-2\left(\tfrac12(x-6)\right)^2+8$, find the vertex and the x-intercepts.`, recap: "Vertex and zeros.", ans: String.raw`$(6,8)$; $x=2$ and $x=10$` },
  { level: 2, q: String.raw`State the domain and range of $y=3\sqrt{2-x}-5$.`, recap: "Domain and range.", ans: String.raw`$x\le2$; $y\ge-5$` },
  { level: 3, space: 5, q: String.raw`A transformed $\sqrt x$ starts at $(4,-1)$, extends to the left, and passes through $(-5,5)$. Find its equation.`, recap: "Build a root.", ans: String.raw`$y=2\sqrt{4-x}-1$` },
  { level: 3, space: 4, q: String.raw`$f$: $D: 0\le x\le8$, $R: -2\le y\le6$. Find the domain and range of $g(x)=-\tfrac12f(2x-4)+1$.`, recap: "Domain and range.", ans: String.raw`$D: 2\le x\le6$; $R: -2\le y\le2$` },
  { level: 3, space: 4, q: String.raw`Show that $y=(2x-4)^2$ and $y=4(x-2)^2$ are the same graph, and describe each as a transformation of $x^2$.`, recap: "Same graph.", ans: String.raw`$(2(x-2))^2=4(x-2)^2$: compress by $\tfrac12$ then 2 right; or stretch by 4 then 2 right` },
  { level: 3, space: 4, q: String.raw`$(3,-2)$ on $y=f(x)$ maps to $(-1,7)$ under $y=af(k(x-d))+c$ with $k=-2$ and $c=1$. Find $a$ and $d$.`, recap: "Find a and d.", ans: String.raw`$a=-3$, $d=0.5$` },
  { level: 3, space: 5, q: String.raw`A ramp follows $y=\sqrt x$. Write an equation for a ramp twice as tall and half as long that starts at $(3,1)$. Check one point.`, recap: "Design a ramp.", ans: String.raw`$y=2\sqrt{2(x-3)}+1$; $(3.5,3)$ ✓` },
];

export const WS = {
  code: "1.8",
  title: "Combining Transformations",
  bigideas: String.raw`For $y=af(k(x-d))+c$ every point $(x,y)$ moves to $\left(\frac xk+d,\ ay+c\right)$. Factor $k$ out of the bracket before reading $d$. Stretches and reflections come first, translations last. The domain follows the x-mapping and the range follows the y-mapping.`,
  goals: ["Identify a, k, d, c.", "Map key points in one step.", "Sketch and state domain and range.", "Write equations from descriptions and graphs."],
  curriculum: "A1.8, A1.9",
  vocab: [["Mapping", "$(x,y)\\to(\\frac xk+d,\\ ay+c)$"], ["Factor k", "$f(2x-6)=f(2(x-3))$"]],
  hook: String.raw`Give groups $y=\sqrt{2x-6}$ and ask: “Is this 6 right or 3 right?” Let them test the starting point.`,
  concepts: [
    ["1. One rule", String.raw`Inside acts on $x$ (divide by $k$, add $d$); outside acts on $y$ (multiply by $a$, add $c$).`],
    ["2. Example", String.raw`${F({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => -Math.abs(2 * (x - 1)) + 4, color: "amber" }], points: [pt(1, 4)] }, 5, "y = −|2(x − 1)| + 4")}`],
    ["3. Domain and range", String.raw`Apply $x\to\frac xk+d$ to the domain ends and $y\to ay+c$ to the range ends; reorder if a sign flips.`],
  ],
  tips: ["Factor k first.", "Translations last.", "Negative a or k reverses interval ends.", "Check an image point in the equation.", "Keep a table of key points."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
