// Worksheet 4.9 — Parallel and Perpendicular Lines (teacher edition)
import { EXAMPLES } from "./e4_9.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Give the slope of a line (a) parallel and (b) perpendicular to $y=\frac35x-1$.`, ans: String.raw`(a) $\frac35$ (b) $-\frac53$` },
  { level: 1, q: String.raw`Parallel, perpendicular or neither? (a) $y=2x+1$, $y=-\frac12x+4$ (b) $y=3x$, $y=3x-5$ (c) $y=x$, $y=2x$.`, recap: "Classify three pairs.", ans: "(a) perpendicular (b) parallel (c) neither" },
  { level: 1, q: String.raw`What is the slope perpendicular to a horizontal line?`, ans: "undefined (vertical)" },
  { level: 2, q: String.raw`Find the line parallel to $y=-2x+5$ through $(3,1)$.`, ans: "$y=-2x+7$" },
  { level: 2, q: String.raw`Find the line perpendicular to $y=\frac14x-3$ through $(1,2)$.`, ans: "$y=-4x+6$" },
  { level: 2, q: String.raw`Are $3x-4y+8=0$ and $8x+6y-1=0$ perpendicular? Explain.`, recap: "Two general-form lines.", ans: String.raw`yes: slopes $\frac34$ and $-\frac43$, product $-1$` },
  { level: 2, q: String.raw`Find $k$ so that $y=kx+2$ is perpendicular to $y=-\frac23x$.`, ans: String.raw`$k=\frac32$` },
  { level: 2, q: String.raw`Find the line through $(-2,5)$ parallel to $2x+y-3=0$. Give general form.`, recap: String.raw`Parallel to $2x+y-3=0$ through $(-2,5)$.`, ans: "$2x+y-1=0$" },
  { level: 3, space: 5.5,
    q: String.raw`Show that $P(1,1)$, $Q(5,3)$, $R(4,5)$, $S(0,3)$ form a rectangle.
${planeT({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }, segs: [{ pts: [[1, 1], [5, 3], [4, 5], [0, 3], [1, 1]], color: "violet" }], points: [{ x: 1, y: 1, label: "P" }, { x: 5, y: 3, label: "Q" }, { x: 4, y: 5, label: "R" }, { x: 0, y: 3, label: "S" }], step: { x: 1, y: 1 } }, 5)}
(a) Find the slopes of all four sides.
(b) Use them to show opposite sides are parallel and adjacent sides are perpendicular.
(c) Is it a square? (Hint: compare side lengths.)`,
    recap: "Rectangle PQRS.",
    ans: String.raw`(a) $PQ=\frac12$, $QR=-2$, $RS=\frac12$, $SP=-2$ (b) equal opposite slopes; $\frac12(-2)=-1$ (c) $PQ=\sqrt{20}$, $QR=\sqrt5$: not a square` },
  { level: 3, space: 5.5,
    q: String.raw`Triangle $A(-3,2)$, $B(1,4)$, $C(3,0)$.
(a) Show that the triangle has a right angle. At which vertex?
(b) Find the equation of the altitude from $B$ to side $AC$ (the line through $B$ perpendicular to $AC$).
(c) Find where the altitude meets $AC$.`,
    recap: "Right triangle ABC; altitude from B.",
    ans: String.raw`(a) $m_{AB}=\frac12$, $m_{BC}=-2$: right angle at $B$ (b) $m_{AC}=-\frac13$, altitude slope $3$: $y=3x+1$ (c) $AC$: $y=-\frac13x+1$; meet at $(0,1)$` },
  { level: 3, space: 5.5,
    q: String.raw`A road follows $y=\frac12x+2$. A new road must meet it at a right angle at the point $(4,4)$.
(a) Find the equation of the new road.
(b) Where does the new road cross the x-axis?
(c) A third road is parallel to the first and passes through $(0,-3)$. Where does it cross the new road?`,
    recap: String.raw`Roads perpendicular to $y=\frac12x+2$.`,
    ans: String.raw`(a) $y=-2x+12$ (b) $(6,0)$ (c) $\frac12x-3=-2x+12$, $x=6$: $(6,0)$` },
  { level: 3, space: 5,
    q: String.raw`Explain why the product of the slopes of two perpendicular lines is $-1$. Use a slope triangle with run $a$ and rise $b$ rotated $90^\circ$.`,
    recap: "Why perpendicular slopes multiply to −1.",
    ans: String.raw`rotating the triangle gives run $b$, rise $-a$: slopes $\frac ba$ and $-\frac ab$, product $-1$` },
  { level: 3, space: 5,
    q: String.raw`The lines $y=(2k-1)x+3$ and $y=(k+4)x-1$ are parallel.
(a) Find $k$.
(b) For which $k$ is the second line perpendicular to $y=2x$?
(c) Explain why the two given lines can never be the same line.`,
    recap: String.raw`Slopes $2k-1$ and $k+4$.`,
    ans: String.raw`(a) $2k-1=k+4$, $k=5$ (b) $k+4=-\frac12$, $k=-4.5$ (c) their y-intercepts are different ($3$ and $-1$)` },
];

export const WS = {
  code: "4.9",
  title: "Parallel and Perpendicular Lines",
  bigideas: String.raw`\textbf{Parallel} lines have equal slopes (and different intercepts). \textbf{Perpendicular} lines have slopes that are negative reciprocals: $m_1m_2=-1$; horizontal and vertical lines are perpendicular. These facts let us write lines parallel or perpendicular to a given line through a point, and prove right angles and rectangles in the coordinate plane.`,
  goals: ["Classify pairs of lines by their slopes.", "Find negative reciprocals.", "Write a parallel line through a point.", "Write a perpendicular line through a point.", "Use slopes to prove right angles and rectangles."],
  curriculum: "C4.2, C4.4",
  vocab: [["Parallel", "equal slopes"], ["Perpendicular", "slopes multiply to −1"], ["Negative reciprocal", "flip and change sign"], ["Altitude", "perpendicular from a vertex to the opposite side"]],
  hook: String.raw`Draw a rectangle on graph paper whose sides are not horizontal (e.g. $(1,1),(5,3),(4,5),(0,3)$). Ask: “How can we be sure this is a rectangle without a protractor?” Computing the slopes reveals the $\frac12$ and $-2$ pattern.`,
  concepts: [
    ["1. Slope tests", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue" }, { m: 2, b: -3, color: "blue" }, { m: -0.5, b: 1, color: "red" }] }, 5.5, "Blue: parallel (slope 2). Red: perpendicular (slope −½).")}`],
    ["2. Writing lines through a point", String.raw`Parallel to $y=-4x+1$ through $(2,3)$: $m=-4$, $b=11$. Perpendicular to $2x+3y-6=0$ through $(4,-1)$: given $m=-\frac23$, so $m_\perp=\frac32$, $b=-7$.`],
    ["3. Geometry with slopes", String.raw`Opposite sides parallel + adjacent sides perpendicular $\Rightarrow$ rectangle. One pair of sides with product $-1$ $\Rightarrow$ right triangle.`],
  ],
  tips: ["Flip AND change sign.", "Convert general form before comparing slopes.", "Horizontal ⟂ vertical even though the product rule fails.", "Equal slopes and equal intercepts: same line, not parallel.", "Label which vertex has the right angle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
