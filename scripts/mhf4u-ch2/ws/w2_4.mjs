// MHF4U Worksheet 2.4 — Families of Polynomial Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Write a family", q: String.raw`Write the family of cubics with zeros $3$, $-2$ and $\tfrac12$.`,
    steps: [String.raw`Zero $\tfrac12$ gives the factor $2x-1$.`], ans: String.raw`$y=k(x-3)(x+2)(2x-1)$, $k\ne0$` },
  { title: "Pick a member", q: String.raw`Find the member of $y=k(x-3)(x+2)(2x-1)$ through $(1,-24)$.`,
    steps: [String.raw`$k(-2)(3)(1)=-6k=-24\Rightarrow k=4$.`], ans: String.raw`$y=4(x-3)(x+2)(2x-1)$` },
  { title: "Members compared", q: String.raw`Compare $k=1$, $k=-1$ and $k=2$ in $y=k(x+2)(x-1)(x-3)$.`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -14, ymax: 14 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), color: "blue" }, { f: (x) => -(x + 2) * (x - 1) * (x - 3), color: "red" }, { f: (x) => 2 * (x + 2) * (x - 1) * (x - 3), color: "green" }], points: [pt(-2, 0, false), pt(1, 0, false), pt(3, 0, false)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Same zeros; $k=-1$ reflects $k=1$ in the x-axis; $k=2$ doubles every y-value.`], ans: "y-intercepts 6, −6, 12" },
  { title: "An even quartic", q: String.raw`A quartic has zeros $\pm1$ and $\pm2$ and y-intercept $-8$. Find its equation.`,
    steps: [String.raw`$y=k(x^2-1)(x^2-4)$; $f(0)=4k=-8\Rightarrow k=-2$.`], ans: String.raw`$y=-2(x^2-1)(x^2-4)$` },
  { title: "Conjugate zeros", q: String.raw`A cubic has zeros $2$ and $1\pm\sqrt3$ and y-intercept 4. Find its equation.`,
    steps: [String.raw`$(x-1)^2-3=x^2-2x-2$: $y=k(x-2)(x^2-2x-2)$.`, String.raw`$f(0)=k(-2)(-2)=4k=4\Rightarrow k=1$.`], ans: String.raw`$y=(x-2)(x^2-2x-2)$` },
  { title: "A double zero", q: String.raw`A cubic touches the x-axis at $-1$, crosses at $3$, and passes through $(1,16)$. Find its equation.`,
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 20 }, curves: [{ f: (x) => -2 * (x + 1) ** 2 * (x - 3) }], points: [pt(-1, 0), pt(3, 0), pt(1, 16)], step: { x: 1, y: 2 } }),
    steps: [String.raw`$y=k(x+1)^2(x-3)$; $k(4)(-2)=-8k=16\Rightarrow k=-2$.`], ans: String.raw`$y=-2(x+1)^2(x-3)$` },
  { title: "Zeros with no x-intercepts", q: String.raw`An even quartic has real zeros only at $\pm\sqrt5$, the other factor is $x^2+1$, and the y-intercept is 10. Find it.`,
    steps: [String.raw`$y=k(x^2-5)(x^2+1)$; $f(0)=-5k=10\Rightarrow k=-2$.`], ans: String.raw`$y=-2(x^2-5)(x^2+1)$` },
  { title: "Order 3 from a graph", q: String.raw`The cubic shown flattens as it crosses at $x=2$ and has y-intercept 4. Find its equation.`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => -0.5 * (x - 2) ** 3 }], points: [pt(2, 0), pt(0, 4)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$y=k(x-2)^3$; $k(-8)=4\Rightarrow k=-\tfrac12$.`], ans: String.raw`$y=-\tfrac12(x-2)^3$` },
  { title: "Which members?", q: String.raw`For which $k$ does $y=k(x+1)(x-2)$ pass above the point $(1,0)$?`,
    steps: [String.raw`At $x=1$: $y=k(2)(-1)=-2k>0\Rightarrow k\lt0$.`], ans: "k < 0" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Write the family of cubics with zeros $-4$, $1$ and $5$.`, recap: "Family.", ans: String.raw`$y=k(x+4)(x-1)(x-5)$` },
  { level: 1, q: String.raw`Find the y-intercept of $y=2(x-1)(x+3)(x-2)$.`, recap: "y-intercept.", ans: "12" },
  { level: 1, q: String.raw`Which point lies on every member of $y=k(x-2)(x+5)$: $(0,-10)$, $(2,0)$ or $(1,-6)$?`, recap: "Common points.", ans: "(2, 0)" },
  { level: 2, q: String.raw`Find the member of $y=k(x+2)(x-1)(x-4)$ through $(2,-16)$.`, recap: "Find k.", ans: String.raw`$-8k=-16$: $k=2$` },
  { level: 2, q: String.raw`A quartic has zeros $\pm1$, $\pm3$ and y-intercept 18. Find its equation.`, recap: "Even quartic.", ans: String.raw`$y=2(x^2-1)(x^2-9)$` },
  { level: 2, q: String.raw`Write the quadratic factor with zeros $3\pm\sqrt2$.`, recap: "Conjugates.", ans: String.raw`$x^2-6x+7$` },
  { level: 2, q: String.raw`A cubic has zeros $-1$ and $2\pm\sqrt3$ and y-intercept $-2$. Find its equation.`, recap: "Conjugates + point.", ans: String.raw`$y=-2(x+1)(x^2-4x+1)$` },
  { level: 2, q: String.raw`Find the equation of the cubic shown.`, recap: "From a graph.", ans: String.raw`$y=(x+2)^2(x-3)$`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -20, ymax: 6 }, curves: [{ f: (x) => (x + 2) ** 2 * (x - 3) }], points: [pt(-2, 0), pt(3, 0), pt(0, -12)], step: { x: 1, y: 2 } }) },
  { level: 3, space: 5, q: String.raw`A cubic has zeros $-1$, $2$, $4$ and passes through $(3,8)$. Find its equation and $f(5)$.`, recap: "Member, then evaluate.", ans: String.raw`$k=-2$; $f(5)=-36$` },
  { level: 3, space: 5, q: String.raw`Find the members of $y=k(x-1)(x+2)(x-3)$ with y-intercepts $6$ and $-6$. How are their graphs related?`, recap: "Reflections.", ans: "k = 1 and k = −1: reflections in the x-axis" },
  { level: 3, space: 5, q: String.raw`A quartic has a double zero at 1 and zeros $1\pm\sqrt2$, and passes through $(0,-3)$. Find its equation.`, recap: "Double + conjugate zeros.", ans: String.raw`$y=3(x-1)^2(x^2-2x-1)$` },
  { level: 3, space: 5, q: String.raw`Explain why a point on the x-axis at a zero cannot determine $k$, but any other point determines exactly one member.`, recap: "Why one point works.", ans: String.raw`at a zero every member gives 0; elsewhere $y_0=k\cdot(\text{nonzero})$ has exactly one solution for $k$` },
  { level: 3, space: 5, q: String.raw`For which $k$ does $y=k(x+2)(x-1)(x-3)$ have a y-intercept greater than 12? Sketch the members $k=2$ and $k=3$.`, recap: "Inequality in k.", ans: String.raw`$6k>12$: $k>2$`, fig: gridT({ xmin: -3, xmax: 4, ymin: -30, ymax: 30 }, { x: 1, y: 5 }) },
];

export const WS = {
  code: "2.4",
  title: "Families of Polynomial Functions",
  bigideas: String.raw`Polynomials with the same zeros form a family $y=k(x-r_1)(x-r_2)\cdots$; each $k\ne0$ is one member, stretched and possibly reflected. A zero of order $m$ contributes $(x-r)^m$; conjugate zeros $a\pm\sqrt b$ contribute $(x-a)^2-b$; a zero $\tfrac pq$ contributes $qx-p$. One point not on the x-axis fixes $k$.`,
  goals: ["Write the equation of a family.", "Find the member through a point.", "Include higher orders and conjugate zeros.", "Read equations from graphs."],
  curriculum: "C1.7, C1.8",
  vocab: [["Family", "same zeros, different $k$"], ["Member", "one value of $k$"], ["Conjugate zeros", "$a\\pm\\sqrt b$"]],
  hook: String.raw`Draw three different parabolas through $(-1,0)$ and $(3,0)$. What do their equations have in common?`,
  concepts: [
    ["1. One family", String.raw`$y=k(x+1)(x-2)$ for several $k$.
${F({ view: { xmin: -2, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => (x + 1) * (x - 2), color: "blue" }, { f: (x) => -2 * (x + 1) * (x - 2), color: "red" }, { f: (x) => 0.5 * (x + 1) * (x - 2), color: "green" }], step: { x: 1, y: 1 } })}`],
    ["2. Fix k", String.raw`Substitute a point $(x_0,y_0)$ with $y_0\ne0$.`],
    ["3. Special zeros", String.raw`$a\pm\sqrt b\to(x-a)^2-b$; $\tfrac pq\to qx-p$.`],
  ],
  tips: ["(x + 4) ↔ zero −4.", "Keep k outside the brackets.", "Points on the x-axis can't fix k.", "Orders add to the degree.", "Conjugates come in pairs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
