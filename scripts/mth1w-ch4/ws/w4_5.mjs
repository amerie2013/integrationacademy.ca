// Worksheet 4.5 — Special Lines and Linear Inequalities (teacher edition)
import { EXAMPLES } from "./e4_5.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Write the equation of (a) the horizontal line through $(3,-2)$ (b) the vertical line through $(3,-2)$.`, recap: String.raw`Lines through $(3,-2)$.`, ans: String.raw`(a) $y=-2$ (b) $x=3$` },
  { level: 1, q: String.raw`State the slope of (a) $y=7$ (b) $x=-4$ (c) $y=-2.5x$.`, ans: "(a) 0 (b) undefined (c) $-2.5$" },
  { level: 1, q: String.raw`Is $(2,3)$ a solution of $y>2x-2$?`, ans: String.raw`yes: $3>2$` },
  { level: 2, q: String.raw`Graph $y\ge-\frac12x+2$. State whether the boundary is solid or dashed and which side you shade.`, recap: String.raw`Graph $y\ge-\frac12x+2$.`, ans: "solid; shade above (test (0, 0): 0 ≥ 2 false)" },
  { level: 2, q: String.raw`Graph $y<3x-1$.`, ans: "dashed boundary; shade below" },
  { level: 2, q: String.raw`Write the inequality shown.${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: -2, dash: true }], shade: { m: 1, b: -2, above: true } }, 5)}`, recap: "Shaded above a dashed line y = x − 2.", ans: "$y>x-2$" },
  { level: 2, q: String.raw`Which points satisfy $2x+3y\le12$: $(0,0)$, $(3,2)$, $(4,2)$, $(6,0)$?`, recap: String.raw`Points in $2x+3y\le12$.`, ans: String.raw`$(0,0)$, $(3,2)$ ($12$) and $(6,0)$ ($12$); not $(4,2)$ ($14$)` },
  { level: 2, q: String.raw`Gas costs $1.60$ dollars per litre. Write the relation for the cost of $L$ litres; is it a direct variation? Find the cost of $45$ L.`, recap: "Gas 1.60 per litre.", ans: String.raw`$C=1.6L$, direct; $72$ dollars` },
  { level: 3, space: 5.5,
    q: String.raw`A student can spend at most $90$ dollars on music: songs cost $1.50$ each and albums $12$ each.
(a) Write an inequality for $s$ songs and $a$ albums.
(b) Graph it (songs horizontal) and give the intercepts.
(c) Can the student buy $20$ songs and $5$ albums? $36$ songs and $3$ albums? Show your tests.`,
    recap: "Music budget 1.5s + 12a ≤ 90.",
    ans: String.raw`(a) $1.5s+12a\le90$ (b) intercepts $(60,0)$, $(0,7.5)$ (c) $30+60=90$ ✓ (on the boundary); $54+36=90$ ✓` },
  { level: 3, space: 5.5,
    q: String.raw`A rectangle is drawn with vertices on the lines $x=-3$, $x=5$, $y=-1$ and $y=4$.
(a) Graph the four lines and name the vertices.
(b) Find the perimeter and area.
(c) Write two inequalities that describe all points inside the rectangle.`,
    recap: "Rectangle bounded by x = −3, x = 5, y = −1, y = 4.",
    ans: String.raw`(a) $(-3,-1),(5,-1),(5,4),(-3,4)$ (b) $P=26$, $A=40$ (c) $-3<x<5$ and $-1<y<4$` },
  { level: 3, space: 5.5,
    q: String.raw`A bakery has at most $24$ h of oven time: bread takes $2$ h per batch and muffins $1.5$ h per batch.
(a) Write and graph the inequality (bread $b$ horizontal, muffins $m$ vertical).
(b) Why is only the first quadrant used? Which points make sense?
(c) The bakery must make at least $4$ bread batches. What is the greatest number of muffin batches?`,
    recap: "Oven time 2b + 1.5m ≤ 24.",
    ans: String.raw`(a) $2b+1.5m\le24$; intercepts $(12,0)$, $(0,16)$ (b) batches cannot be negative; whole-number points (c) $b=4$: $1.5m\le16$, $m\le10.67$, so $10$` },
  { level: 3, space: 5,
    q: String.raw`(a) Graph $y\ge x-2$ and $y\le-x+6$ on the same axes and shade the region that satisfies both.
(b) Find the corner point of the region.
(c) Give two points in the region and one point that satisfies only the first inequality.`,
    recap: "Two inequalities together.",
    ans: String.raw`(b) $(4,2)$ (c) e.g. $(0,0)$ and $(1,2)$; $(0,8)$ satisfies only the first ($8\ge-2$ but $8>6$)` },
  { level: 3, space: 5,
    q: String.raw`Explain the differences between $y=4$, $x=4$, $y=4x$ and $y>4$. Sketch each.`,
    recap: "Four special graphs.",
    ans: "horizontal line; vertical line; line through the origin with slope 4; the region above the dashed line y = 4" },
];

export const WS = {
  code: "4.5",
  title: "Graphing Special Lines",
  bigideas: String.raw`Special lines: \textbf{horizontal} $y=k$ (slope $0$), \textbf{vertical} $x=k$ (slope undefined) and \textbf{direct variation} $y=mx$ (through the origin). A \textbf{linear inequality} describes a region: draw the boundary (dashed for $<,>$; solid for $\le,\ge$), test a point, and shade. Inequalities model budgets and limits.`,
  goals: ["Graph and write y = k and x = k.", "Explain slope 0 vs undefined slope.", "Recognize direct variation y = mx.", "Graph linear inequalities using a boundary and test point.", "Model and test situations with inequalities."],
  curriculum: "C4.2",
  book: "Nelson Principles of Mathematics 9, §5.1 (special cases); inequalities extend the text",
  vocab: [["Horizontal line", "y = k, slope 0"], ["Vertical line", "x = k, slope undefined"], ["Boundary line", "the line y = mx + b of an inequality"], ["Test point", "a point used to choose the side to shade"]],
  hook: String.raw`Mark a chalk line across the floor. Ask students to stand on the side where “distance from the door is less than $3$ metres”. The line is the boundary; the crowd is the shaded region. Now ask: “Should people standing \emph{on} the line count?” That decides solid vs dashed.`,
  concepts: [
    ["1. Special lines", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0, b: 3, color: "blue", label: "y = 3", lx: 3.5 }, { m: 1.5, b: 0, color: "green", label: "y = 1.5x", lx: 1.8 }], vlines: [{ x: -2, color: "red", label: "x = −2" }] }, 5.5)}`],
    ["2. Graphing an inequality", String.raw`(1) Write as $y\ \square\ mx+b$. (2) Boundary dashed for $<,>$; solid for $\le,\ge$. (3) Test $(0,0)$ (if not on the line); shade the side that makes it true.
${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1, b: 4 }], shade: { m: -1, b: 4, above: false }, points: [{ x: 0, y: 0, label: "(0, 0)", color: "green" }] }, 5, "y ≤ −x + 4: solid, shaded below.")}`],
    ["3. Inequalities in context", String.raw`Budget: $12x+5y\le60$. Rearranged $y\le-2.4x+12$. Only points with $x,y\ge0$ (and often whole numbers) make sense.`],
  ],
  tips: ["y = 3 is horizontal; x = 3 is vertical.", "Dividing an inequality by a negative flips the sign.", "If the boundary passes through (0, 0), test another point.", "In context, restrict to sensible values (non-negative, whole numbers).", "Points on a solid boundary are solutions."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
