// MPM2D Worksheet 4.4 — Graphing from Vertex Form (teacher edition)
import { F, gridT } from "./figT.mjs";

const stepFig = (a, h, k, view, step) => {
  const pts = [[h, k]];
  for (const s of [1, 2]) { pts.push([h + s, k + a * s * s]); pts.push([h - s, k + a * s * s]); }
  return F({ view, curves: [{ f: (x) => a * (x - h) ** 2 + k, color: "violet" }], points: pts.map(([x, y], i) => ({ x, y, label: `(${x}, ${y})`, color: i ? "blue" : "red" })), ...(step ? { step } : {}) });
};

const EXAMPLES = [
  { title: "Up from a vertex below the axis", q: String.raw`Graph $y=(x+3)^2-4$; find its zeros and $y$-intercept.`,
    fig: stepFig(1, -3, -4, { xmin: -7, xmax: 1, ymin: -5, ymax: 6 }),
    steps: [String.raw`Vertex $(-3,-4)$; over 1 up 1; over 2 up 4: $(-1,0)$, $(-5,0)$.`, String.raw`Zeros $-1$, $-5$; $y$-intercept $9-4=5$.`], ans: String.raw`zeros $-5$, $-1$; $y$-int $5$` },
  { title: "Down from a vertex above the axis", q: String.raw`Graph $y=-(x-2)^2+9$; find its zeros.`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 10 }, curves: [{ f: (x) => -((x - 2) ** 2) + 9, color: "violet" }], points: [{ x: 2, y: 9, label: "(2, 9)", color: "red" }, { x: -1, y: 0, label: "(−1, 0)", color: "blue" }, { x: 5, y: 0, label: "(5, 0)", color: "blue" }] }),
    steps: [String.raw`Over 3 down 9 reaches the axis: $(5,0)$ and $(-1,0)$.`], ans: "zeros $-1$ and $5$" },
  { title: "A stretch", q: String.raw`Graph $y=3(x-1)^2-3$.`,
    fig: stepFig(3, 1, -3, { xmin: -2, xmax: 4, ymin: -4, ymax: 10 }, { x: 1, y: 2 }),
    steps: [String.raw`Vertex $(1,-3)$; over 1 up 3: $(0,0)$, $(2,0)$ — the zeros.`, String.raw`Over 2 up 12: $(-1,9)$, $(3,9)$.`], ans: "zeros 0 and 2" },
  { title: "A compression", q: String.raw`Graph $y=-\tfrac12(x+2)^2+8$ and find the zeros.`,
    fig: F({ view: { xmin: -8, xmax: 4, ymin: -2, ymax: 10 }, curves: [{ f: (x) => -0.5 * (x + 2) ** 2 + 8, color: "violet" }], points: [{ x: -2, y: 8, label: "(−2, 8)", color: "red" }, { x: 0, y: 6, color: "blue" }, { x: -4, y: 6, color: "blue" }, { x: 2, y: 0, color: "blue" }, { x: -6, y: 0, color: "blue" }] }),
    steps: [String.raw`Over 2 down 2: $(0,6)$, $(-4,6)$.`, String.raw`$(x+2)^2=16\Rightarrow x=2$ or $x=-6$.`], ans: "zeros $-6$ and $2$" },
  { title: "Zeros by isolating the square", q: String.raw`Find the zeros of $y=2(x-3)^2-50$.`,
    steps: [String.raw`$(x-3)^2=25$.`, String.raw`$x-3=\pm5$.`], ans: "$x=-2$ and $x=8$" },
  { title: "Irrational zeros", q: String.raw`Find the zeros of $y=(x-1)^2-5$ exactly and to two decimals.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 - 5, color: "violet" }], points: [{ x: 1 + Math.sqrt(5), y: 0, label: "≈3.24", color: "red" }, { x: 1 - Math.sqrt(5), y: 0, label: "≈−1.24", color: "red" }] }),
    steps: [String.raw`$(x-1)^2=5\Rightarrow x=1\pm\sqrt5$.`], ans: String.raw`$1\pm\sqrt5\approx3.24,\ -1.24$` },
  { title: "Counting zeros", q: String.raw`How many zeros do $y=(x-2)^2+1$, $y=-(x+1)^2$ and $y=4(x-5)^2-1$ have?`,
    steps: [String.raw`$a>0$, $k>0$: none. $k=0$: one. $a>0$, $k<0$: two.`], ans: "0, 1 and 2" },
  { title: "y-intercept", q: String.raw`Find the $y$-intercept of $y=2(x+4)^2-7$.`,
    steps: [String.raw`$2(16)-7=25$.`], ans: "$25$" },
  { title: "A fountain", q: String.raw`Water from a fountain follows $h=-0.5(d-4)^2+8$ (metres). Find the maximum height and where the water lands.`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 10 }, curves: [{ f: (d) => -0.5 * (d - 4) ** 2 + 8, a: 0, b: 8, color: "blue" }], points: [{ x: 4, y: 8, label: "(4, 8)", color: "red" }, { x: 8, y: 0, label: "(8, 0)", color: "red" }], xlabel: "d", ylabel: "h" }),
    steps: [String.raw`Maximum $8$ m at $d=4$ m.`, String.raw`$(d-4)^2=16\Rightarrow d=8$ (or $0$, the nozzle).`], ans: "8 m high; lands 8 m away" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Graph $y=(x-1)^2-4$ using the step pattern.`, recap: "Graph.", ans: String.raw`vertex $(1,-4)$; zeros $-1$, $3$`, fig: gridT({ xmin: -3, xmax: 5, ymin: -5, ymax: 6 }) },
  { level: 1, q: String.raw`Find the $y$-intercept of $y=2(x-3)^2+1$.`, recap: "y-intercept.", ans: "$19$" },
  { level: 1, q: String.raw`Find the zeros of $y=(x+2)^2-9$.`, recap: "Zeros.", ans: "$1$ and $-5$" },
  { level: 2, q: String.raw`Graph $y=-2(x+1)^2+2$ and state its zeros.`, recap: "Graph with a < 0.", ans: "zeros 0 and −2", fig: gridT({ xmin: -4, xmax: 2, ymin: -6, ymax: 3 }) },
  { level: 2, q: String.raw`Find the zeros of $y=3(x-4)^2-27$.`, recap: "Zeros.", ans: "$1$ and $7$" },
  { level: 2, q: String.raw`How many zeros does $y=-(x-6)^2-1$ have? Explain.`, recap: "Number of zeros.", ans: "none: maximum −1 < 0" },
  { level: 2, q: String.raw`Find four points on $y=\frac14(x-2)^2+1$ besides the vertex.`, recap: "Points.", ans: "$(0,2)$, $(4,2)$, $(-2,5)$, $(6,5)$" },
  { level: 2, q: String.raw`Find the zeros of $y=(x+3)^2-7$ exactly and to two decimals.`, recap: "Irrational zeros.", ans: String.raw`$-3\pm\sqrt7\approx-0.35,\ -5.65$` },
  { level: 3, space: 5, q: String.raw`A diver's height is $h=-5(t-0.5)^2+11.25$. Find the maximum height and when the diver reaches the water ($h=0$). Sketch the graph.`, recap: "Diver.", ans: String.raw`$11.25$ m at $0.5$ s; enters at $t=2$ s`, fig: gridT({ xmin: 0, xmax: 2.5, ymin: 0, ymax: 12 }, { x: 0.5, y: 2 }) },
  { level: 3, space: 5, q: String.raw`For which values of $k$ does $y=2(x-1)^2+k$ have (a) exactly one zero (b) two zeros?`, recap: "Values of k.", ans: String.raw`(a) $k=0$ (b) $k<0$` },
  { level: 3, space: 5, q: String.raw`A parabola has zeros $-1$ and $7$ and its vertex has $y$-coordinate $-8$. Write its equation in vertex form.`, recap: "Vertex form from zeros.", ans: String.raw`$y=\frac12(x-3)^2-8$` },
  { level: 3, space: 5, q: String.raw`Sketch $y=(x-2)^2+3$ and $y=-(x-2)^2+3$ on one grid. What do they share, and how are they different?`, recap: "Compare two parabolas.", ans: "same vertex (2, 3) and axis; one opens up (no zeros), one down (zeros 2 ± √3)", fig: gridT({ xmin: -2, xmax: 6, ymin: -4, ymax: 8 }) },
  { level: 3, space: 5, q: "Explain how to decide the number of zeros of y = a(x − h)² + k without graphing.", recap: "Number of zeros.", ans: "compare the signs of a and k: opposite → 2, k = 0 → 1, same → 0" },
];

export const WS = {
  code: "4.4",
  title: "Graphing from Vertex Form",
  bigideas: String.raw`To graph $y=a(x-h)^2+k$, plot the vertex and use the step pattern: over 1, 2, 3 and up $a$, $4a$, $9a$ on both sides. The $y$-intercept is $ah^2+k$. Zeros come from isolating the square: $(x-h)^2=-\frac ka$ — two zeros, one or none depending on the signs of $a$ and $k$.`,
  goals: ["Graph with the step pattern.", "Find the y-intercept.", "Find zeros by isolating the square.", "Predict the number of zeros."],
  curriculum: "QR2, QR3",
  vocab: [["Step pattern", "1, 4, 9 × a"], ["Mirror points", "same y, either side of the axis"], ["Irrational zeros", "e.g. 1 ± √5"]],
  hook: String.raw`Race: one group graphs $y=2(x-1)^2-8$ with a table of values, another with the step pattern. Compare time and accuracy.`,
  concepts: [
    ["1. Step pattern", String.raw`Vertex, then over $\pm1$ up $a$, over $\pm2$ up $4a$.
${stepFig(2, -1, -6, { xmin: -4, xmax: 2, ymin: -7, ymax: 3 })}`],
    ["2. Zeros", String.raw`$a(x-h)^2+k=0\Rightarrow(x-h)^2=-\frac ka\Rightarrow x=h\pm\sqrt{-\frac ka}$.`],
    ["3. How many zeros", String.raw`Signs of $a$ and $k$ opposite: 2; $k=0$: 1; same: 0.`],
  ],
  tips: ["Multiply the steps by a.", "a < 0: steps go down.", "± when taking square roots.", "Use the y-intercept as a check.", "Plot symmetric pairs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
