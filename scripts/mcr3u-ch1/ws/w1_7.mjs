// MCR3U Worksheet 1.7 — Horizontal Stretches, Compressions and Reflections (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Horizontal compression", q: String.raw`Map the key points of $\sqrt x$ under $y=\sqrt{3x}$.`,
    fig: F({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(3 * x), a: 0 }], points: [pt(3, 3), pt(9, 3, null, "gray")] }),
    steps: [String.raw`$(x,y)\to(\tfrac x3,\ y)$: $(1,1)\to(\tfrac13,1)$, $(4,2)\to(\tfrac43,2)$, $(9,3)\to(3,3)$.`], ans: String.raw`compressed horizontally by $\tfrac13$` },
  { title: "Horizontal stretch", q: String.raw`Map the key points of $x^2$ under $y=\left(\tfrac13x\right)^2$.`,
    steps: [String.raw`$(x,y)\to(3x,\ y)$: $(1,1)\to(3,1)$, $(2,4)\to(6,4)$.`], ans: String.raw`stretched horizontally by 3 (same as $y=\tfrac19x^2$)` },
  { title: "Absolute value", q: String.raw`Describe $y=|-2x|$.`,
    steps: [String.raw`$k=-2$: reflect in the y-axis, compress by $\tfrac12$.`, String.raw`But $|-2x|=2|x|$ — the reflection changes nothing because $|x|$ is symmetric.`], ans: String.raw`same graph as $y=2|x|$` },
  { title: "Two reflections agree", q: String.raw`Compare $y=\frac1{-x}$ with $y=-\frac1x$.`,
    steps: [String.raw`$\frac1{-x}=-\frac1x$: reflecting $\frac1x$ in the y-axis is the same as reflecting it in the x-axis.`], ans: "identical graphs" },
  { title: "Reflection and compression", q: String.raw`Graph $y=\sqrt{-4x}$ and give its domain.`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(-4 * x), b: 0 }], points: [pt(-1, 2), pt(-4, 4)] }),
    steps: [String.raw`$(x,y)\to(-\tfrac x4,\ y)$: $(4,2)\to(-1,2)$, $(16,4)\to(-4,4)$.`], ans: String.raw`$D: x\le0$, $R: y\ge0$` },
  { title: "Points of a function", q: String.raw`$f$ contains $(-6,1),(2,5),(10,-3)$. Find the points of $y=f(2x)$.`,
    steps: ["Divide each x by 2."], ans: String.raw`$(-3,1),(1,5),(5,-3)$` },
  { title: "Negative fractional k", q: String.raw`Same $f$. Find the points of $y=f(-\tfrac13x)$.`,
    steps: [String.raw`Divide x by $-\tfrac13$, i.e. multiply by $-3$.`], ans: String.raw`$(18,1),(-6,5),(-30,-3)$` },
  { title: "Equivalent stretches", q: String.raw`Show that $y=\sqrt{4x}$ is also a vertical stretch of $\sqrt x$.`,
    steps: [String.raw`$\sqrt{4x}=\sqrt4\sqrt x=2\sqrt x$.`], ans: "horizontal compression by ¼ = vertical stretch by 2" },
  { title: "Effect on the domain", q: String.raw`$f$ has domain $-4\le x\le8$. Find the domain of $y=f(\tfrac12x)$.`,
    steps: ["Multiply each endpoint by 2."], ans: String.raw`$-8\le x\le16$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`$(12,4)$ is on $y=f(x)$. Find its image on $y=f(4x)$.`, recap: "f(4x).", ans: "$(3,4)$" },
  { level: 1, q: String.raw`$(-5,2)$ is on $y=f(x)$. Find its image on $y=f(-x)$.`, recap: "f(−x).", ans: "$(5,2)$" },
  { level: 1, q: String.raw`Describe $y=\left|\tfrac14x\right|$.`, recap: "|¼x|.", ans: "horizontal stretch by 4" },
  { level: 2, q: String.raw`Find the image of $(25,5)$ on $y=\sqrt x$ under $y=\sqrt{5x}$.`, recap: "√(5x).", ans: "$(5,5)$" },
  { level: 2, q: String.raw`Simplify $y=(-2x)^2$ and describe it two ways.`, recap: "(−2x)².", ans: String.raw`$4x^2$: horizontal compression by $\tfrac12$ (reflection has no effect), or vertical stretch by 4` },
  { level: 2, q: String.raw`$f$ contains $(-2,3),(0,0),(4,-8)$. List the points of $y=f(-2x)$.`, recap: "f(−2x).", ans: String.raw`$(1,3),(0,0),(-2,-8)$` },
  { level: 2, q: String.raw`State the domain and range of $y=\sqrt{-3x}$ and sketch it.`, recap: "√(−3x).", ans: String.raw`$D: x\le0$, $R: y\ge0$`, fig: gridT({ xmin: -10, xmax: 2, ymin: -1, ymax: 6 }) },
  { level: 2, q: String.raw`$f$ has zeros $-8$ and $6$. Find the zeros of $y=f(4x)$.`, recap: "Zeros of f(4x).", ans: "$-2$ and $1.5$" },
  { level: 3, space: 5, q: String.raw`$f(x)=x^2+2x-8$. Find the zeros and vertex of $y=f(-\tfrac12x)$ without expanding.`, recap: "Zeros and vertex.", ans: String.raw`zeros of $f$: $-4,2$ → $8,-4$; vertex $(-1,-9)\to(2,-9)$` },
  { level: 3, space: 4, q: String.raw`$y=\sqrt{kx}$ passes through $(-3,6)$. Find $k$.`, recap: "Find k.", ans: "$k=-12$" },
  { level: 3, space: 4, q: String.raw`Show that for $f(x)=\sqrt x$, a horizontal compression by $\tfrac14$ gives the same graph as a vertical stretch by 2.`, recap: "Equivalent transformations.", ans: String.raw`$\sqrt{4x}=2\sqrt x$` },
  { level: 3, space: 4, q: String.raw`$f$ has domain $-6\le x\le9$ and range $0\le y\le4$. Find the domain and range of $y=f(-\tfrac13x)$.`, recap: "Domain and range.", ans: String.raw`$-27\le x\le18$; $0\le y\le4$` },
  { level: 3, space: 4, q: String.raw`$f$ has x-intercepts $-4$ and $10$. Find $k$ so that $y=f(kx)$ has x-intercepts $2$ and $-5$.`, recap: "Find k from zeros.", ans: "$k=-2$" },
];

export const WS = {
  code: "1.7",
  title: "Horizontal Stretches, Compressions and Reflections",
  bigideas: String.raw`In $y=f(kx)$ every point moves to $(\frac xk,\ y)$. $|k|>1$ compresses horizontally, $0<|k|<1$ stretches, by a factor of $\frac1{|k|}$; $k<0$ also reflects in the y-axis. The range does not change. For some parents a horizontal change equals a vertical one.`,
  goals: ["Describe the role of k.", "Map points with (x/k, y).", "Distinguish reflections in the two axes.", "Find new domains and zeros."],
  curriculum: "A1.8, A1.9",
  vocab: [["Factor", "$\\frac1{|k|}$"], ["$y=f(-x)$", "reflection in the y-axis"], ["$y=-f(x)$", "reflection in the x-axis"]],
  hook: String.raw`Ask: “If a video plays at double speed, does the song end sooner or later?” Connect to $f(2x)$ reaching each value sooner.`,
  concepts: [
    ["1. Divide by k", String.raw`${F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => 4 * x * x }], points: [pt(1, 4), pt(2, 4, null, "gray")] }, 5, "y = (2x)²: (2, 4) → (1, 4)")}`],
    ["2. Reflections", String.raw`$f(-x)$: $(x,y)\to(-x,y)$. $-f(x)$: $(x,y)\to(x,-y)$.`],
    ["3. Equivalences", String.raw`$(kx)^2=k^2x^2$, $|kx|=|k||x|$, $\sqrt{kx}=\sqrt k\sqrt x$ for $k>0$.`],
  ],
  tips: ["The factor is 1/|k|, not k.", "Only x-coordinates change.", "Zeros are divided by k.", "√(−x) lives on the left.", "Check with one substitution."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
