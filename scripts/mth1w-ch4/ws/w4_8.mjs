// Worksheet 4.8 — General Form vs Slope-Intercept Form (teacher edition)
import { EXAMPLES } from "./e4_8.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Write $y=3x-5$ in general form.`, ans: "$3x-y-5=0$" },
  { level: 1, q: String.raw`Write $2x+y-8=0$ in slope-intercept form.`, ans: "$y=-2x+8$" },
  { level: 1, q: String.raw`Find the intercepts of $x+4y-12=0$.`, ans: "$(12,0)$ and $(0,3)$" },
  { level: 2, q: String.raw`Write $y=-\frac25x+3$ in general form.`, ans: "$2x+5y-15=0$" },
  { level: 2, q: String.raw`Find the slope and y-intercept of $6x-4y+20=0$.`, ans: String.raw`$m=\frac32$, $b=5$` },
  { level: 2, q: String.raw`Graph $3x+5y-15=0$ using its intercepts.`, ans: "$(5,0)$ and $(0,3)$" },
  { level: 2, q: String.raw`Write the general form of the line through $(1,-2)$ and $(4,7)$.`, recap: String.raw`General form through $(1,-2)$, $(4,7)$.`, ans: "$3x-y-5=0$" },
  { level: 2, q: String.raw`Which lines are the same? (a) $y=\frac12x-2$ (b) $x-2y-4=0$ (c) $2x-y-4=0$`, recap: "Same line?", ans: "(a) and (b)" },
  { level: 3, space: 5.5,
    q: String.raw`A club sells hot dogs for $3$ dollars and drinks for $2$ dollars, and wants to raise exactly $360$ dollars.
(a) Write the relation in general form, using $h$ hot dogs and $d$ drinks.
(b) Find and interpret both intercepts.
(c) If $80$ hot dogs are sold, how many drinks are needed? Show the point on a graph.`,
    recap: "Fundraiser 3h + 2d = 360.",
    ans: String.raw`(a) $3h+2d-360=0$ (b) $(120,0)$: only hot dogs; $(0,180)$: only drinks (c) $60$ drinks` },
  { level: 3, space: 5.5,
    q: String.raw`For the line $Ax+By+C=0$ ($B\ne0$):
(a) Show that the slope is $-\frac AB$ and the y-intercept is $-\frac CB$.
(b) Find the x-intercept in terms of $A$ and $C$.
(c) Use your results to find the slope and intercepts of $4x-6y+18=0$, and check by graphing.`,
    recap: "General-form shortcuts.",
    ans: String.raw`(a) $By=-Ax-C$, $y=-\frac ABx-\frac CB$ (b) $-\frac CA$ (c) $m=\frac23$, y-int $3$, x-int $-4.5$` },
  { level: 3, space: 5.5,
    q: String.raw`The line $kx+3y-12=0$ passes through $(2,6)$.
(a) Find $k$.
(b) Write the line in slope-intercept form.
(c) Find the area of the triangle formed by the line and the two axes.`,
    recap: String.raw`$kx+3y-12=0$ through $(2,6)$.`,
    ans: String.raw`(a) $2k+18-12=0$, $k=-3$ (b) $y=x+4$ (c) intercepts $(-4,0)$, $(0,4)$: area $8$` },
  { level: 3, space: 5,
    q: String.raw`Explain when each form is most useful: slope-intercept $y=mx+b$, general $Ax+By+C=0$. Give one real situation that naturally produces each form.`,
    recap: "When to use each form.",
    ans: "y = mx + b: graphing and rates (taxi fare); general form: two quantities sharing a total (budget 3h + 2d = 360) and intercepts" },
  { level: 3, space: 5,
    q: String.raw`The line $2x-5y+10=0$ is translated up $3$ units.
(a) Write the new line in slope-intercept form and in general form.
(b) Find both intercepts of the new line.
(c) Describe how the intercepts changed.`,
    recap: String.raw`$2x-5y+10=0$ moved up 3.`,
    ans: String.raw`(a) $y=\frac25x+5$; $2x-5y+25=0$ (b) $(-12.5,0)$, $(0,5)$ (c) y-intercept up 3 (from 2); x-intercept moved left from $-5$ to $-12.5$` },
];

export const WS = {
  code: "4.8",
  title: "General Form vs Slope-Intercept Form",
  bigideas: String.raw`A line can be written in \textbf{slope-intercept form} $y=mx+b$ (shows slope and y-intercept) or \textbf{general form} $Ax+By+C=0$ (integers, $A\ge0$; good for intercepts and for situations where two quantities share a total). Convert by rearranging; $m=-\frac AB$, $b=-\frac CB$. Intercepts: set $y=0$ for the x-intercept, $x=0$ for the y-intercept.`,
  goals: ["Write lines in general form.", "Convert general form to slope-intercept form.", "Find intercepts and graph from them.", "Use m = −A/B and b = −C/B.", "Model situations in general form."],
  curriculum: "C4.2, C4.3",
  vocab: [["General form", "Ax + By + C = 0"], ["Slope-intercept form", "y = mx + b"], ["x-intercept", "y = 0"], ["y-intercept", "x = 0"]],
  hook: String.raw`A class has $360$ dollars to spend on $3$-dollar hot dogs and $2$-dollar drinks. Students list possible orders: $(120, 0)$, $(100, 30)$, $(0, 180)$\ldots Plotting them gives a line whose natural equation is $3h+2d=360$ — general form.`,
  concepts: [
    ["1. Converting", String.raw`$y=\frac23x-4\Rightarrow3y=2x-12\Rightarrow2x-3y-12=0$. \quad $4x+2y-10=0\Rightarrow y=-2x+5$.`],
    ["2. Intercepts", String.raw`${planeT({ view: { xmin: -10, xmax: 4, ymin: -2, ymax: 8 }, lines: [{ m: 0.75, b: 6 }], points: [{ x: -8, y: 0, label: "(−8, 0)", color: "green" }, { x: 0, y: 6, label: "(0, 6)", color: "green" }] }, 6, "3x − 4y + 24 = 0 from its intercepts.")}`],
    ["3. Shortcuts", String.raw`From $Ax+By+C=0$: $m=-\frac AB$, $b=-\frac CB$, x-intercept $-\frac CA$.`],
  ],
  tips: ["Divide every term by B.", "Clear fractions with the LCD.", "Make A positive.", "Vertical lines exist only in general form (B = 0).", "Interpret intercepts in context."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
