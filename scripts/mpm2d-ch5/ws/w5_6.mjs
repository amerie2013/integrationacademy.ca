// MPM2D Worksheet 5.6 — Linear–Quadratic Systems (enrichment; teacher edition)
import { F, gridT } from "./figT.mjs";

const sys = (f, line, pts, view, step) => F({ view, curves: [{ f, color: "violet" }], lines: [{ ...line, color: "blue" }], points: pts.map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "red" })), ...(step ? { step } : {}) });

const EXAMPLES = [
  { title: "Two points", q: String.raw`Solve $y=x^2$ and $y=2x+3$.`,
    fig: sys((x) => x * x, { m: 2, b: 3 }, [[3, 9], [-1, 1]], { xmin: -3, xmax: 5, ymin: -2, ymax: 12 }, { x: 1, y: 2 }),
    steps: [String.raw`$x^2=2x+3\Rightarrow x^2-2x-3=0$.`, String.raw`$(x-3)(x+1)=0$; line: $y=9$, $y=1$.`], ans: String.raw`$(3,9)$ and $(-1,1)$` },
  { title: "A shifted parabola", q: String.raw`Solve $y=x^2-4$ and $y=x+2$.`,
    fig: sys((x) => x * x - 4, { m: 1, b: 2 }, [[3, 5], [-2, 0]], { xmin: -4, xmax: 5, ymin: -5, ymax: 8 }),
    steps: [String.raw`$x^2-x-6=0\Rightarrow(x-3)(x+2)=0$.`], ans: String.raw`$(3,5)$ and $(-2,0)$` },
  { title: "A tangent", q: String.raw`Solve $y=x^2+3$ and $y=2x+2$.`,
    fig: sys((x) => x * x + 3, { m: 2, b: 2 }, [[1, 4]], { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }),
    steps: [String.raw`$x^2-2x+1=0\Rightarrow(x-1)^2=0$.`, String.raw`One point: the line is tangent.`], ans: String.raw`$(1,4)$` },
  { title: "No intersection", q: String.raw`Show that $y=x^2+1$ and $y=-x-1$ do not meet.`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x * x + 1, color: "violet" }], lines: [{ m: -1, b: -1, color: "blue" }] }),
    steps: [String.raw`$x^2+x+2=0$: $D=1-8=-7<0$.`], ans: "no intersection" },
  { title: "Parabola opening down", q: String.raw`Solve $y=-x^2+4$ and $y=x+2$.`,
    fig: sys((x) => -x * x + 4, { m: 1, b: 2 }, [[1, 3], [-2, 0]], { xmin: -4, xmax: 3, ymin: -4, ymax: 6 }),
    steps: [String.raw`$-x^2+4=x+2\Rightarrow x^2+x-2=0$.`, String.raw`$(x+2)(x-1)=0$.`], ans: String.raw`$(1,3)$ and $(-2,0)$` },
  { title: "Leading coefficient 2", q: String.raw`Solve $y=2x^2-3x$ and $y=x+6$.`,
    steps: [String.raw`$2x^2-4x-6=0\Rightarrow x^2-2x-3=0$.`, String.raw`$x=3$, $y=9$; $x=-1$, $y=5$.`], ans: String.raw`$(3,9)$ and $(-1,5)$` },
  { title: "Irrational coordinates", q: String.raw`Solve $y=x^2$ and $y=x+1$ to two decimals.`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: (1 + Math.sqrt(5)) / 2, y: (3 + Math.sqrt(5)) / 2, color: "red" }, { x: (1 - Math.sqrt(5)) / 2, y: (3 - Math.sqrt(5)) / 2, color: "red" }] }),
    steps: [String.raw`$x^2-x-1=0\Rightarrow x=\frac{1\pm\sqrt5}{2}$.`, String.raw`$x\approx1.62$, $y\approx2.62$; $x\approx-0.62$, $y\approx0.38$.`], ans: String.raw`$(1.62,\,2.62)$ and $(-0.62,\,0.38)$` },
  { title: "Find k for a tangent", q: String.raw`Find $k$ so that $y=4x+k$ is tangent to $y=x^2+5$.`,
    steps: [String.raw`$x^2-4x+(5-k)=0$; tangent: $D=0$.`, String.raw`$16-4(5-k)=0\Rightarrow k=1$.`], ans: String.raw`$k=1$` },
  { title: "Count first", q: String.raw`How many times does $y=2x-6$ meet $y=x^2-6x+10$?`,
    steps: [String.raw`$x^2-8x+16=0$: $D=64-64=0$.`, String.raw`Once, at $x=4$, $y=2$.`], ans: String.raw`once, at $(4,2)$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $y=x^2$ and $y=4$.`, recap: "Horizontal line.", ans: String.raw`$(2,4)$ and $(-2,4)$` },
  { level: 1, q: String.raw`Solve $y=x^2$ and $y=x$.`, recap: "Through the origin.", ans: String.raw`$(0,0)$ and $(1,1)$` },
  { level: 1, q: String.raw`How many times do $y=x^2+2$ and $y=1$ meet?`, recap: "Count.", ans: String.raw`none ($x^2=-1$)` },
  { level: 2, q: String.raw`Solve $y=x^2-2x$ and $y=x+4$. Sketch both to check.`, recap: "Solve and sketch.", ans: String.raw`$(4,8)$ and $(-1,3)$`, fig: gridT({ xmin: -3, xmax: 6, ymin: -2, ymax: 10 }) },
  { level: 2, q: String.raw`Solve $y=x^2+4x$ and $y=2x+3$.`, recap: "Two points.", ans: String.raw`$(1,5)$ and $(-3,-3)$` },
  { level: 2, q: String.raw`Solve $y=-x^2+2x+3$ and $y=-x+3$.`, recap: "Opening down.", ans: String.raw`$(0,3)$ and $(3,0)$` },
  { level: 2, q: String.raw`How many intersection points do $y=x^2+x+1$ and $y=3x$ have?`, recap: "Tangent?", ans: String.raw`$x^2-2x+1=0$: one, $(1,3)$` },
  { level: 2, q: String.raw`How many intersection points do $y=x^2-1$ and $y=2x-3$ have?`, recap: "Count.", ans: String.raw`$x^2-2x+2=0$, $D=-4$: none` },
  { level: 3, space: 4.5, q: String.raw`Find $k$ so that $y=2x+k$ is tangent to $y=x^2-2x$.`, recap: "Tangent k.", ans: String.raw`$x^2-4x-k=0$, $16+4k=0$: $k=-4$` },
  { level: 3, space: 4.5, q: String.raw`For which slopes $m$ is $y=mx$ tangent to $y=x^2+1$?`, recap: "Tangent slopes.", ans: String.raw`$x^2-mx+1=0$, $m^2-4=0$: $m=\pm2$` },
  { level: 3, space: 5, q: String.raw`A ball follows $y=-0.05x^2+2x$ and lands on a ramp $y=0.5x$ (metres). Where does it land?`, recap: "Ball and ramp.", ans: String.raw`$-0.05x^2+1.5x=0$: $x=30$, at $(30,15)$` },
  { level: 3, space: 5, q: String.raw`Explain why a line and a parabola can never meet in three points.`, recap: "At most two.", ans: "substitution gives a quadratic equation, which has at most two roots" },
  { level: 3, space: 5, q: String.raw`Find $b$ so that the line $y=x+1$ meets $y=x^2+bx+5$ at exactly one point.`, recap: "Find b.", ans: String.raw`$x^2+(b-1)x+4=0$, $(b-1)^2=16$: $b=5$ or $b=-3$` },
];

export const WS = {
  code: "5.6",
  title: "Linear–Quadratic Systems",
  bigideas: String.raw`(Enrichment — this extends the Grade 10 expectations and is studied fully in Grade 11.) To solve a line and a parabola, set the expressions for $y$ equal, rearrange to $ax^2+bx+c=0$ and solve; find each $y$ from the line. The discriminant of that equation counts the intersection points: two (secant), one (tangent) or none.`,
  goals: ["Solve linear–quadratic systems by substitution.", "Find intersection coordinates.", "Count intersections with D.", "Find k for a tangent line."],
  curriculum: "Enrichment (extends AG1 and QR3; MCR3U)",
  vocab: [["Secant", "line meeting the parabola twice"], ["Tangent", "line touching the parabola once"], ["Substitution", "set the y-expressions equal"]],
  hook: String.raw`Draw $y=x^2$ and slide a ruler across it at different heights and tilts. Ask: how many crossings are possible?`,
  concepts: [
    ["1. Three possibilities", String.raw`Secant, tangent, or no intersection.
${F({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 9 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 2, color: "green" }, { m: 2, b: -1, color: "amber" }, { m: 0, b: -1, color: "red" }] })}`],
    ["2. Method", String.raw`Set equal → $=0$ → solve → $y$ from the line → check in the parabola.`],
    ["3. Discriminant", String.raw`$D>0$: two points; $D=0$: tangent; $D<0$: none.`],
  ],
  tips: ["Subtract every term of the line.", "Find y for each x.", "Use the line for y.", "Tangent ⇒ D = 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
