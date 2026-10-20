// MCR3U Worksheet 3.7 — Families of Quadratic Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Describe a family", q: String.raw`What do the members of $y=a(x+3)(x-1)$ share?`,
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -8, ymax: 8 }, curves: [-2, -1, 1, 2].map((a, i) => ({ f: (x) => a * (x + 3) * (x - 1), color: ["red", "amber", "blue", "green"][i] })), points: [pt(-3, 0), pt(1, 0)] }),
    steps: [String.raw`Zeros $-3$ and $1$; axis $x=-1$.`, "They differ in a: direction and stretch."], ans: "zeros and axis" },
  { title: "Member through a point", q: String.raw`Find the member of $y=a(x+3)(x-1)$ through $(2,10)$.`, steps: [String.raw`$10=a(5)(1)$.`], ans: String.raw`$a=2$` },
  { title: "Another point", q: String.raw`Find the member of $y=a(x+3)(x-1)$ through $(-1,8)$.`, steps: [String.raw`$8=a(2)(-2)=-4a$.`], ans: String.raw`$a=-2$` },
  { title: "Irrational zeros", q: String.raw`Find the quadratic with zeros $2\pm\sqrt3$ through $(0,2)$.`, steps: [String.raw`$a[(x-2)^2-3]=a(x^2-4x+1)$; $a(1)=2$.`], ans: String.raw`$y=2x^2-8x+2$` },
  { title: "Irrational zeros, negative a", q: String.raw`Find the quadratic with zeros $-1\pm\sqrt5$ through $(1,2)$.`, steps: [String.raw`$a(x^2+2x-4)$; at $x=1$: $-a=2$.`], ans: String.raw`$y=-2x^2-4x+8$` },
  { title: "Vertex and point", q: String.raw`Vertex $(3,-4)$, through $(5,8)$.`, steps: [String.raw`$8=4a-4\Rightarrow a=3$.`], ans: String.raw`$y=3(x-3)^2-4$` },
  { title: "Zeros and maximum", q: "Zeros 0 and 6, maximum value 9.", steps: [String.raw`Vertex $(3,9)$: $9=a(3)(-3)$.`], ans: String.raw`$y=-x(x-6)$` },
  { title: "An arch", q: "An arch is 16 m wide and 12 m high. How high is it 4 m from one foot?",
    fig: F({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 14 }, curves: [{ f: (x) => -0.1875 * x * (x - 16), a: 0, b: 16 }], points: [pt(8, 12), pt(4, 9)], step: { x: 2, y: 2 } }),
    steps: [String.raw`$y=ax(x-16)$; $12=a(8)(-8)\Rightarrow a=-0.1875$.`, String.raw`$y(4)=-0.1875(4)(-12)=9$.`], ans: "9 m" },
  { title: "A family sharing a vertex", q: String.raw`Members of $y=a(x-2)^2+3$ share the vertex. Find the member through $(4,-5)$.`, steps: [String.raw`$-5=4a+3\Rightarrow a=-2$.`], ans: String.raw`$y=-2(x-2)^2+3$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the shared features of $y=a(x-5)(x+1)$.`, recap: "Shared features.", ans: String.raw`zeros $5$, $-1$; axis $x=2$` },
  { level: 1, q: String.raw`Find $a$ if $y=a(x-5)(x+1)$ passes through $(0,15)$.`, recap: "Find a.", ans: String.raw`$-3$` },
  { level: 1, q: String.raw`Find $a$ if $y=a(x-1)(x-7)$ passes through $(3,-16)$.`, recap: "Find a.", ans: "2" },
  { level: 2, q: String.raw`Find the quadratic with zeros $4\pm\sqrt2$ through $(3,3)$.`, recap: "Irrational zeros.", ans: String.raw`$y=-3(x^2-8x+14)$` },
  { level: 2, q: String.raw`Find the parabola with vertex $(-1,6)$ through $(1,-2)$.`, recap: "Vertex and point.", ans: String.raw`$y=-2(x+1)^2+6$` },
  { level: 2, q: "Find the parabola with zeros −4 and 2 and y-intercept 16.", recap: "Zeros and y-intercept.", ans: String.raw`$y=-2(x+4)(x-2)$` },
  { level: 2, q: String.raw`Sketch $y=ax(x-4)$ for $a=1$, $-1$ and $2$ on one grid.`, recap: "Sketch a family.", ans: "all through (0, 0) and (4, 0); vertices (2, −4), (2, 4), (2, −8)", fig: gridT({ xmin: -2, xmax: 6, ymin: -9, ymax: 6 }) },
  { level: 2, q: "Find the parabola with zeros 1 and 9 and minimum value −8.", recap: "Zeros and minimum.", ans: String.raw`$y=\tfrac12(x-1)(x-9)$` },
  { level: 3, space: 5, q: "A parabolic arch is 30 m wide and 12 m high. Can a load 8 m wide and 9 m tall pass through the middle?", recap: "Arch clearance.", ans: "yes: at 4 m from centre the arch is about 11.15 m high" },
  { level: 3, space: 4, q: String.raw`Find the quadratic with zeros $3\pm2\sqrt2$ through $(2,14)$.`, recap: "Conjugate zeros.", ans: String.raw`$y=-2(x^2-6x+1)$` },
  { level: 3, space: 5, q: String.raw`A parabola has zeros 2 and $-6$, and its vertex lies on $y=2x+8$. Find it.`, recap: "Vertex on a line.", ans: String.raw`vertex $(-2,4)$: $y=-\tfrac14(x-2)(x+6)$` },
  { level: 3, space: 5, q: String.raw`Two members of $y=a(x+2)(x-4)$ pass through $(1,9)$ and $(1,-18)$. Find both and the vertical distance between their vertices.`, recap: "Two members.", ans: String.raw`$a=-1$ and $a=2$; vertices $(1,9)$, $(1,-18)$: 27` },
  { level: 3, space: 4, q: String.raw`Explain why no member of $y=a(x-r)(x-s)$ can pass through $(r,5)$.`, recap: "Impossible point.", ans: String.raw`at $x=r$ every member gives 0` },
];

export const WS = {
  code: "3.7",
  title: "Families of Quadratic Functions",
  bigideas: String.raw`Parabolas $y=a(x-r)(x-s)$ form a family: they share zeros and axis and differ by a vertical stretch $a$. One extra point determines $a$. Zeros $h\pm\sqrt m$ give $y=a[(x-h)^2-m]$. A vertex and one point give $y=a(x-h)^2+k$.`,
  goals: ["Describe families.", "Find the member through a point.", "Use irrational zeros.", "Model arches."],
  curriculum: "A2.4",
  vocab: [["Family", "same zeros, varying a"], ["Conjugate zeros", "$h\\pm\\sqrt m$"]],
  hook: "Draw two dots on the x-axis and ask everyone to sketch a parabola through them. Compare: what is the same, what differs?",
  concepts: [
    ["1. One family", String.raw`${F({ view: { xmin: -5, xmax: 3, ymin: -8, ymax: 8 }, curves: [-2, -1, 1, 2].map((a, i) => ({ f: (x) => a * (x + 3) * (x - 1), color: ["red", "amber", "blue", "green"][i] })) }, 5, "y = a(x + 3)(x − 1)")}`],
    ["2. Conjugate zeros", String.raw`$(x-h-\sqrt m)(x-h+\sqrt m)=(x-h)^2-m$.`],
    ["3. Arches", "Put the feet at x = 0 and x = width; the top is at the middle."],
  ],
  tips: ["Use a point that is not a zero.", "Keep brackets when substituting.", "Vertex form for vertex problems.", "Check the arch at the load's edges.", "Conjugates multiply to (x − h)² − m."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
