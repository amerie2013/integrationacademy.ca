// MPM2D Worksheet 1.2 — Solving Linear Systems by Graphing (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly, rectT, trackT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Checking an ordered pair", q: String.raw`Is $(-2,5)$ a solution of $3x+2y=4$ and $x-y=-7$?`,
    steps: [String.raw`$3(-2)+2(5)=-6+10=4$ ✓.`, String.raw`$-2-5=-7$ ✓.`], ans: "yes" },
  { title: "Checking another pair", q: String.raw`Is $(4,1)$ a solution of $y=\frac12x-1$ and $2x+3y=10$?`,
    steps: [String.raw`$\frac12(4)-1=1$ ✓.`, String.raw`$2(4)+3(1)=11\ne10$ ✗.`], ans: "no — it is on the first line only" },
  { title: "Graphing two slope-intercept lines", q: String.raw`Solve by graphing: $y=-x+4$ and $y=2x-5$.`,
    fig: planeT({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1, b: 4, color: "blue" }, { m: 2, b: -5, color: "red" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "green" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`Graph both lines; they cross at $(3,1)$.`, String.raw`Verify: $-3+4=1$ ✓; $6-5=1$ ✓.`], ans: "$(3,1)$" },
  { title: "Graphing from standard form", q: String.raw`Solve by graphing: $x+2y=8$ and $3x-2y=0$.`,
    fig: planeT({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 6 }, lines: [{ m: -0.5, b: 4, color: "blue" }, { m: 1.5, b: 0, color: "red" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`First line: intercepts $(8,0)$ and $(0,4)$. Second: through $(0,0)$ and $(2,3)$.`, String.raw`Intersection $(2,3)$. Verify: $2+6=8$ ✓; $6-6=0$ ✓.`], ans: "$(2,3)$" },
  { title: "Reading a graph in context", q: String.raw`Two cyclists ride toward each other on a 30 km trail. The graph shows their distances from the west end. When and where do they meet?`,
    fig: planeT({ view: { xmin: 0, xmax: 2.5, ymin: 0, ymax: 32 }, lines: [{ m: 16, b: 0, color: "blue", label: "A", lx: 2 }, { m: -14, b: 30, color: "red", label: "B", lx: 1.6 }], points: [{ x: 1, y: 16, label: "(1, 16)", color: "green" }], xlabel: "time (h)", ylabel: "km from west end", step: { x: 0.5, y: 4 } }, 5.5),
    steps: [String.raw`A: $d=16t$; B: $d=30-14t$.`, String.raw`They meet at $(1,16)$: after $1$ h, $16$ km from the west end.`], ans: "after 1 h, 16 km from the west end" },
  { title: "Comparing costs", q: String.raw`Gym A: $\$50$ joining fee plus $\$25$/month. Gym B: $\$40$/month, no fee. Graph and decide which is cheaper.`,
    steps: [String.raw`$C=25m+50$ and $C=40m$ meet where $15m=50$, $m=3\frac13$.`, "B is cheaper for 3 months or less; A is cheaper from 4 months on."], ans: String.raw`break-even at $3\frac13$ months` },
  { title: "Estimating", q: String.raw`Estimate the solution of $y=3x-2$ and $x+2y=6$ from a graph, then check with $x=\frac{10}{7}$.`,
    steps: [String.raw`The graph shows about $(1.4,\ 2.3)$.`, String.raw`$y=3\left(\frac{10}{7}\right)-2=\frac{16}{7}\approx2.29$; check $\frac{10}{7}+\frac{32}{7}=6$ ✓.`], ans: String.raw`$\left(\frac{10}{7},\frac{16}{7}\right)$` },
  { title: "Parallel lines", q: String.raw`Graph $y=\frac13x+2$ and $x-3y=6$. What do you notice?`,
    steps: [String.raw`Second line: $y=\frac13x-2$.`, "Same slope, different intercepts: the lines never meet."], ans: "no solution" },
  { title: "A line through an intersection", q: String.raw`Find the equation of the line through the origin and the intersection of $y=x+1$ and $y=-x+5$.`,
    steps: [String.raw`Intersection: $x+1=-x+5\Rightarrow x=2$, $y=3$.`, String.raw`Line through $(0,0)$ and $(2,3)$: $y=\frac32x$.`], ans: String.raw`$y=\frac32x$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Is $(1,-3)$ a solution of $2x-y=5$ and $x+3y=-8$?`, recap: "(1, −3) in two equations.", ans: String.raw`yes: $2+3=5$ ✓, $1-9=-8$ ✓` },
  { level: 1, q: String.raw`Solve by graphing: $y=x-1$ and $y=-2x+8$.`, recap: "y = x − 1, y = −2x + 8.", space: 5, ans: "$(3,2)$" },
  { level: 1, q: String.raw`Explain what the point of intersection of two lines represents.`, recap: "Meaning of the intersection.", ans: "the ordered pair that satisfies both equations" },
  { level: 2, q: String.raw`Solve by graphing using intercepts: $2x+y=6$ and $x-y=0$.`, recap: "2x + y = 6, x − y = 0.", space: 5, ans: "$(2,2)$" },
  { level: 2, q: String.raw`Solve by graphing: $x+3y=-3$ and $y=\frac23x-1$.`, recap: "x + 3y = −3, y = ⅔x − 1.", space: 5, ans: "$(0,-1)$" },
  { level: 2, q: String.raw`Phone plan A: $\$30$ plus $\$2$ per GB. Plan B: $\$10$ plus $\$6$ per GB. Write equations, graph them and find the break-even point.`, recap: "Phone plans A and B.", space: 5, ans: String.raw`$C=2g+30$, $C=6g+10$: $(5, 40)$` },
  { level: 2, q: String.raw`Without graphing, which of $(2,1)$, $(1,2)$ and $(3,0)$ solves $x+y=3$ and $2x-y=0$?`, recap: "Which point solves both?", ans: String.raw`$(1,2)$` },
  { level: 2, q: String.raw`The lines $y=4x-3$ and $y=-x+c$ meet at $x=2$. Find $c$.`, recap: "Find c.", ans: String.raw`$y=5$ at $x=2$: $c=7$` },
  { level: 3, space: 5, q: String.raw`Two candles are lit at the same time. Candle A is 24 cm tall and burns 2 cm/h; candle B is 18 cm tall and burns 1.25 cm/h.
(a) Write an equation for each height.
(b) Graph both and find when they are the same height.
(c) Which burns out first?`, recap: "Two candles.", ans: String.raw`(a) $h=24-2t$; $h=18-1.25t$ (b) $t=8$ h, $8$ cm (c) A at $12$ h (B at $14.4$ h)` },
  { level: 3, space: 5, q: String.raw`The lines $2x+y=7$, $x-y=-1$ and $x+ky=5$ all pass through one point. Find the point and $k$.`, recap: "Three concurrent lines.", ans: String.raw`$(2,3)$; $2+3k=5\Rightarrow k=1$` },
  { level: 3, space: 5, q: String.raw`A graph shows two lines meeting at about $(2.6, 4.1)$. The equations are $y=1.5x+0.2$ and $y=-x+6.7$. Find the exact intersection and explain why graphs give only estimates.`, recap: "Exact vs estimated intersection.", ans: String.raw`$2.5x=6.5\Rightarrow x=2.6$, $y=4.1$; graphs are limited by scale and drawing accuracy` },
  { level: 3, space: 5, q: String.raw`Create a system whose solution is $(-1,4)$, with one line horizontal. Graph it and verify.`, recap: "Create a system with solution (−1, 4).", ans: String.raw`e.g. $y=4$ and $y=2x+6$` },
  { level: 3, space: 5, q: String.raw`A car rental costs \$$49$/day plus $\$0.20$/km; another costs \$$35$/day plus $\$0.30$/km. Graph both for one day and explain which to choose for a $120$ km trip and for a $200$ km trip.`, recap: "Two car rentals.", ans: String.raw`break-even $140$ km; $120$ km: second ($\$71$ vs $\$73$); $200$ km: first ($\$89$ vs $\$95$)` },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
ex[0].fig = F({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 9 }, lines: [{ m: -1.5, b: 2, color: "blue", label: "3x + 2y = 4", lx: 0.8 }, { m: 1, b: 7, color: "red", label: "x − y = −7", lx: -5.5 }], points: [pt(-2, 5, null, "green")] });
ex[1].fig = F({ view: { xmin: -2, xmax: 8, ymin: -3, ymax: 6 }, lines: [{ m: 0.5, b: -1, color: "blue", label: "y = ½x − 1", lx: 6 }, { m: -2 / 3, b: 10 / 3, color: "red", label: "2x + 3y = 10", lx: 5.5 }], points: [pt(4, 1, null, "green")] }, 6.5, "(4, 1) is on the blue line but not on the red one.");
ex[5].fig = F({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 280 }, lines: [{ m: 25, b: 50, color: "blue", label: "A", lx: 6 }, { m: 40, b: 0, color: "red", label: "B", lx: 5.6 }], points: [{ x: 10 / 3, y: 400 / 3, label: "(3⅓, 133⅓)", color: "green" }], xlabel: "months", ylabel: "cost", step: { x: 1, y: 40 } });
ex[6].fig = F({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 5 }, lines: [{ m: 3, b: -2, color: "blue" }, { m: -0.5, b: 3, color: "red" }], points: [{ x: 10 / 7, y: 16 / 7, label: "≈(1.4, 2.3)", color: "green" }] });
ex[7].fig = F({ view: { xmin: -6, xmax: 6, ymin: -5, ymax: 5 }, lines: [{ m: 1 / 3, b: 2, color: "blue", label: "y = ⅓x + 2", lx: 1 }, { m: 1 / 3, b: -2, color: "red", label: "x − 3y = 6", lx: 1.5 }] });
ex[8].fig = F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 7 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: -1, b: 5, color: "red" }, { m: 1.5, b: 0, color: "green", dash: true }], points: [pt(2, 3, null, "green"), pt(0, 0, "O", "gray")] });
pr[0].fig = F({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 3 }, lines: [{ m: 2, b: -5, color: "blue", label: "2x − y = 5", lx: 3.3 }, { m: -1 / 3, b: -8 / 3, color: "red", label: "x + 3y = −8", lx: -2.8 }] });
pr[1].fig = gridT({ xmin: -2, xmax: 6, ymin: -4, ymax: 8 });
pr[2].fig = F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: 1, b: 0, color: "blue" }, { m: -0.5, b: 4.5, color: "red" }], points: [pt(3, 3, "P", "green")] }, 6.5, "What does P tell you about the two equations?");
pr[3].fig = gridT({ xmin: -2, xmax: 6, ymin: -2, ymax: 7 });
pr[4].fig = gridT({ xmin: -5, xmax: 5, ymin: -5, ymax: 5 });
pr[5].fig = gridT({ xmin: 0, xmax: 8, ymin: 0, ymax: 60 }, { x: 1, y: 10 }, 6.5, { xlabel: "GB", ylabel: "cost" });
pr[6].fig = F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, points: [pt(2, 1), pt(1, 2), pt(3, 0)] });
pr[7].fig = F({ view: { xmin: -2, xmax: 5, ymin: -4, ymax: 8 }, lines: [{ m: 4, b: -3, color: "blue", label: "y = 4x − 3", lx: 2.3 }], vlines: [{ x: 2, color: "gray", dash: true }] });
pr[8].fig = gridT({ xmin: 0, xmax: 16, ymin: 0, ymax: 26 }, { x: 2, y: 2 }, 6.5, { xlabel: "t (h)", ylabel: "h (cm)" });
pr[9].fig = gridT({ xmin: -4, xmax: 6, ymin: -4, ymax: 8 });
pr[10].fig = F({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 7 }, lines: [{ m: 1.5, b: 0.2, color: "blue" }, { m: -1, b: 6.7, color: "red" }] });
pr[11].fig = gridT({ xmin: -6, xmax: 4, ymin: -2, ymax: 8 });
pr[12].fig = gridT({ xmin: 0, xmax: 250, ymin: 0, ymax: 120 }, { x: 50, y: 20 }, 6.5, { xlabel: "km", ylabel: "cost" });
// ---- end figures

export const WS = {
  code: "1.2",
  title: "Solving Linear Systems by Graphing",
  bigideas: String.raw`The solution of a linear system is the ordered pair that satisfies every equation: on a graph, the point where the lines intersect. Graphing both lines, reading the intersection and verifying it in both equations solves the system --- exactly when the point lies on grid lines, approximately otherwise. Graphs also show which option is better on each side of a break-even point.`,
  goals: ["Check an ordered pair in a system.", "Solve systems by graphing and verify.", "Interpret intersections in context.", "Recognize the limits of graphing."],
  curriculum: "AG1",
  vocab: [["Linear system", "two linear equations in the same variables"], ["Solution", "ordered pair satisfying both"], ["Point of intersection", "where the lines meet"], ["Break-even", "where two options are equal"]],
  hook: String.raw`Two students walk toward each other from opposite ends of a hallway at different speeds. Ask: “Where will they meet?” Sketch distance–time lines on the board and let the class find the crossing point.`,
  concepts: [
    ["1. What a solution is", String.raw`A point on both lines satisfies both equations. Verify by substituting into each equation.
${planeT({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: -1, b: 5, color: "red" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }], step: { x: 1, y: 1 } }, 4.5)}`],
    ["2. Solving by graphing", String.raw`Graph each line (slope--intercept or intercepts), read the intersection, verify. Choose a scale that shows the intersection.`],
    ["3. Limits", String.raw`Intersections between grid points can only be estimated; algebra (1.3, 1.4) gives exact values.`],
  ],
  tips: ["Insist on rulers and labelled axes.", "Students often verify in one equation only.", "Discuss scale choice when the intersection is far from the origin.", "Graphing technology can confirm hand graphs.", "Use context graphs to interpret both sides of the intersection."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
