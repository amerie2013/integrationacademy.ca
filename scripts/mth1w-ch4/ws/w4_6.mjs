// Worksheet 4.6 — Transformations of Lines (teacher edition)
import { EXAMPLES } from "./e4_6.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Describe how $y=x+4$ is related to $y=x$.`, ans: "translated up 4 (parallel)" },
  { level: 1, q: String.raw`Describe how $y=5x-1$ is related to $y=2x-1$.`, ans: "rotated about (0, −1); steeper" },
  { level: 1, q: String.raw`Write the line $y=3x+5$ after a translation down $6$.`, ans: "$y=3x-1$" },
  { level: 2, q: String.raw`Write the reflection of $y=-\frac25x+3$ in the y-axis.`, ans: String.raw`$y=\frac25x+3$` },
  { level: 2, q: String.raw`Order from least steep to steepest: $y=-3x$, $y=\frac12x+5$, $y=2x-7$, $y=-\frac14x$.`, recap: "Order four lines by steepness.", ans: String.raw`$-\frac14$, $\frac12$, $2$, $-3$` },
  { level: 2, q: String.raw`Describe $y=-2x+3$ as a transformation of $y=x$ (three changes).`, ans: "steeper (×2), reflected (falls), translated up 3" },
  { level: 2, q: String.raw`Which lines belong to the same family as $y=4x-1$ (parallel)? $y=4x+7$, $y=-4x-1$, $8x-2y=5$, $y=\frac14x$.`, recap: String.raw`Parallels to $y=4x-1$.`, ans: String.raw`$y=4x+7$ and $8x-2y=5$ ($y=4x-2.5$)` },
  { level: 2, q: String.raw`The line $y=mx+2$ passes through $(3,11)$. Find $m$ and describe the line relative to $y=x+2$.`, recap: String.raw`$y=mx+2$ through $(3,11)$.`, ans: String.raw`$m=3$; rotated about $(0,2)$, steeper` },
  { level: 3, space: 5.5,
    q: String.raw`A taxi's rate is $C=2.2d+5$.
(a) The fee rises by $2$ dollars. Write the new equation and describe the graph's change.
(b) Instead, the rate per km rises to $2.70$ dollars. Write the new equation and describe the change.
(c) For a $12$-km ride, which change costs the rider more?`,
    recap: "Taxi 2.2d + 5: fee vs rate change.",
    ans: String.raw`(a) $C=2.2d+7$: up 2 (parallel) (b) $C=2.7d+5$: steeper about $(0,5)$ (c) (a) $33.40$, (b) $37.40$: the rate change costs more` },
  { level: 3, space: 5.5,
    q: String.raw`The graph shows $y=x$ and three transformed lines.
${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 0, color: "gray", label: "y = x", lx: 4 }, { m: 1, b: -3, color: "blue", label: "A", lx: 4.5 }, { m: 3, b: 0, color: "red", label: "B", lx: 1.5 }, { m: -0.5, b: 2, color: "green", label: "C", lx: -4.5 }] }, 5.5)}
(a) Write the equation of each of A, B and C.
(b) Describe each as a transformation of $y=x$.
(c) Do any two of A, B, C intersect on the y-axis? Explain how you know.`,
    recap: "Identify lines A, B, C.",
    ans: String.raw`(a) A: $y=x-3$; B: $y=3x$; C: $y=-\frac12x+2$ (b) A: down 3; B: steeper; C: flatter, reflected, up 2 (c) none share an intercept: A at $-3$, B at $0$, C at $2$` },
  { level: 3, space: 5.5,
    q: String.raw`A family of lines is $y=mx+4$.
(a) Sketch the members with $m=-2,-1,0,1,2$. What do they have in common?
(b) Which member passes through $(2,0)$?
(c) Which members never enter the third quadrant (x and y both negative)? Explain.`,
    recap: String.raw`Family $y=mx+4$.`,
    ans: String.raw`(a) all pass through $(0,4)$ (b) $m=-2$ (c) $m\le0$: for $x<0$ these lines have $y\ge4$; a positive slope makes $y<0$ once $x<-\frac4m$` },
  { level: 3, space: 5,
    q: String.raw`Phone plan $C=0.10t+25$ is changed twice: the monthly fee drops by $5$ dollars and the cost per text doubles.
(a) Write the new equation.
(b) For how many texts does the old plan cost the same as the new plan?
(c) Who benefits from the change?`,
    recap: "Plan 0.10t + 25 → 0.20t + 20.",
    ans: String.raw`(a) $C=0.2t+20$ (b) $0.1t+25=0.2t+20$, $t=50$ (c) people sending fewer than $50$ texts` },
  { level: 3, space: 5,
    q: String.raw`Explain, with examples, whether each statement is always, sometimes or never true:
(a) Changing $b$ changes the slope. (b) Changing $m$ changes the y-intercept. (c) Changing $m$ changes the x-intercept.`,
    recap: "Always / sometimes / never: effects of m and b.",
    ans: String.raw`(a) never (b) never (c) sometimes: for $b\ne0$ yes ($-\frac bm$ changes); for $b=0$ the x-intercept stays $0$` },
];

export const WS = {
  code: "4.6",
  title: "Transformations of Lines",
  bigideas: String.raw`Starting from $y=x$, changing $b$ \textbf{translates} the line vertically (parallel lines), changing the size of $m$ \textbf{rotates} it about $(0,b)$ (steeper or flatter), and changing the sign of $m$ \textbf{reflects} it in the y-axis. In context: a new fixed fee moves the graph up or down; a new rate changes its steepness.`,
  goals: ["Describe the effect of changing b.", "Describe the effect of changing m.", "Describe reflections from changing the sign of m.", "Write equations after transformations.", "Interpret transformations in real situations."],
  curriculum: "C4.2, C4.3",
  book: "Nelson Principles of Mathematics 9, §5.1",
  vocab: [["Translation", "slide: change b"], ["Rotation", "turn about (0, b): change m"], ["Reflection", "mirror in the y-axis: m → −m"], ["Family of lines", "lines sharing a slope or an intercept"]],
  hook: String.raw`Give each pair of students a strand of spaghetti on a grid. “Make $y=x$. Now slide it up 3 without turning it. Now pin it at $(0,3)$ and make it steeper.” Students physically perform translations and rotations before seeing the equations.`,
  concepts: [
    ["1. Changing b", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 1, b: 0, color: "gray", label: "y = x", lx: 4 }, { m: 1, b: 3, color: "blue", label: "y = x + 3", lx: 2.5 }, { m: 1, b: -2, color: "red", label: "y = x − 2", lx: 4.2 }] }, 5.5)}`],
    ["2. Changing m", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 0.5, b: 1, color: "green" }, { m: 1, b: 1, color: "gray" }, { m: 3, b: 1, color: "blue" }, { m: -1, b: 1, color: "red" }], points: [{ x: 0, y: 1, color: "violet" }] }, 5.5, "Slopes ½, 1, 3 and −1, all through (0, 1).")}`],
    ["3. Summary", String.raw`\begin{center}\begin{tabular}{ll}\toprule change & effect\\\midrule $b$ up/down & translation, parallel\\ $|m|$ larger/smaller & steeper/flatter (rotation)\\ $m\to-m$ & reflection in the y-axis\\\bottomrule\end{tabular}\end{center}`],
  ],
  tips: ["Steepness is |m|.", "A rotation keeps the y-intercept.", "Changing b moves the x-intercept too (unless m changes).", "Use a table of values to show a translation adds the same amount to every y.", "In context, connect b to fixed costs and m to rates."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
