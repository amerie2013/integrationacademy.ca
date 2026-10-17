// MPM2D Worksheet 1.1 — Review of Linear Relations (teacher edition)
import { planeT, F, pt, std, gridT, circ, poly, rectT, trackT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Slope from two points", q: String.raw`Find the slope of the line through $(-5,2)$ and $(3,-4)$ and describe the line.`,
    steps: [String.raw`$m=\frac{-4-2}{3-(-5)}=\frac{-6}{8}=-\frac34$.`, "Negative slope: the line falls 3 units for every 4 units to the right."], ans: String.raw`$m=-\frac34$` },
  { title: "Slope from a graph", q: "Find the slope and equation of the line shown.",
    fig: planeT({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 0.5, b: 1, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)" }, { x: 4, y: 3, label: "(4, 3)" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`$m=\frac{3-0}{4-(-2)}=\frac36=\frac12$.`, String.raw`y-intercept $1$: $y=\frac12x+1$.`], ans: String.raw`$y=\frac12x+1$` },
  { title: "Slope-intercept to standard form", q: String.raw`Write $y=-\frac25x+3$ in standard form with integer coefficients.`,
    steps: [String.raw`Multiply by $5$: $5y=-2x+15$.`, String.raw`$2x+5y=15$.`], ans: String.raw`$2x+5y=15$` },
  { title: "Standard form to slope-intercept", q: String.raw`Write $6x-4y=20$ in slope-intercept form.`,
    steps: [String.raw`$-4y=-6x+20$.`, String.raw`$y=\frac32x-5$.`], ans: String.raw`$y=\frac32x-5$` },
  { title: "Graphing with intercepts", q: String.raw`Find the intercepts of $3x-5y=15$ and graph it.`,
    fig: planeT({ view: { xmin: -3, xmax: 8, ymin: -5, ymax: 3 }, lines: [{ m: 0.6, b: -3, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)" }, { x: 0, y: -3, label: "(0, −3)" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`$x=0$: $-5y=15\Rightarrow y=-3$.`, String.raw`$y=0$: $3x=15\Rightarrow x=5$.`], ans: String.raw`$(5,0)$ and $(0,-3)$` },
  { title: "Line through two points", q: String.raw`Find the equation of the line through $(1,-3)$ and $(5,9)$ in both forms.`,
    steps: [String.raw`$m=\frac{12}{4}=3$; $-3=3(1)+b\Rightarrow b=-6$: $y=3x-6$.`, String.raw`Standard form: $3x-y=6$.`], ans: String.raw`$y=3x-6$; $3x-y=6$` },
  { title: "Parallel and perpendicular", q: String.raw`Find the equation of the line through $(4,3)$ (a) parallel to and (b) perpendicular to $y=2x-7$.`,
    steps: [String.raw`(a) $m=2$: $3=2(4)+b\Rightarrow b=-5$: $y=2x-5$.`, String.raw`(b) $m=-\frac12$: $3=-\frac12(4)+b\Rightarrow b=5$: $y=-\frac12x+5$.`], ans: String.raw`(a) $y=2x-5$ (b) $y=-\frac12x+5$` },
  { title: "Equation with brackets", q: String.raw`Solve $5(x-2)-2(3x+1)=-4$.`,
    steps: [String.raw`$5x-10-6x-2=-4$.`, String.raw`$-x-12=-4\Rightarrow x=-8$.`, String.raw`Check: $5(-10)-2(-23)=-50+46=-4$ ✓`], ans: "$x=-8$" },
  { title: "Equation with fractions", q: String.raw`Solve $\frac{2x-1}{5}+\frac{x}{2}=\frac{7}{10}$.`,
    steps: [String.raw`Multiply by $10$: $2(2x-1)+5x=7$.`, String.raw`$9x-2=7\Rightarrow x=1$.`, String.raw`Check: $\frac15+\frac12=\frac{7}{10}$ ✓`], ans: "$x=1$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the slope of the line through $(2,-6)$ and $(-4,3)$.`, recap: "(2, −6) and (−4, 3).", ans: String.raw`$-\frac32$` },
  { level: 1, q: String.raw`Find the slope and both intercepts of $4x+6y=24$.`, recap: "4x + 6y = 24.", ans: String.raw`$m=-\frac23$; $(6,0)$, $(0,4)$` },
  { level: 1, q: String.raw`Solve $7-3(x+4)=2x$.`, recap: "7 − 3(x + 4) = 2x.", ans: "$x=-1$" },
  { level: 2, q: String.raw`Write the equation of the line through $(-3,5)$ and $(6,-1)$ in standard form.`, recap: "Through (−3, 5), (6, −1).", ans: String.raw`$m=-\frac23$: $2x+3y=9$` },
  { level: 2, q: String.raw`Write $y=\frac34x-\frac52$ in standard form.`, recap: "y = ¾x − 5/2.", ans: String.raw`$3x-4y=10$` },
  { level: 2, q: String.raw`Find the equation of the line perpendicular to $5x-2y=8$ through $(5,-1)$.`, recap: "Perpendicular to 5x − 2y = 8.", ans: String.raw`$m=-\frac25$: $y=-\frac25x+1$, or $2x+5y=5$` },
  { level: 2, q: String.raw`Solve $\frac{x+5}{3}-\frac{x-1}{4}=3$.`, recap: "(x+5)/3 − (x−1)/4 = 3.", ans: "$x=13$" },
  { level: 2, q: String.raw`A taxi charges a fixed fee plus a rate per km. A $6$ km trip costs $\$17.60$ and a $10$ km trip costs $\$26$. Write the equation and give the meaning of the slope and intercept.`, recap: "Taxi: 6 km → 17.60, 10 km → 26.", ans: String.raw`$C=2.1d+5$: $\$2.10$ per km plus a $\$5$ fee` },
  { level: 3, space: 5, q: String.raw`The points $A(-2,1)$, $B(4,4)$ and $C(1,-5)$ form a triangle.
(a) Find the slope of each side.
(b) Is the triangle right-angled? Explain.
(c) Write the equation of the line through $C$ parallel to $AB$.`, recap: "Triangle A(−2,1), B(4,4), C(1,−5).", ans: String.raw`(a) $m_{AB}=\frac12$, $m_{BC}=3$, $m_{AC}=-2$ (b) yes: $\frac12\times(-2)=-1$, right angle at $A$ (c) $y=\frac12x-\frac{11}{2}$` },
  { level: 3, space: 5, q: String.raw`For what value of $k$ is the line through $(k,3)$ and $(2,-1)$ (a) parallel to $y=4x+1$ (b) perpendicular to it?`, recap: "Find k for parallel/perpendicular.", ans: String.raw`(a) $\frac{4}{k-2}=4\Rightarrow k=3$ (b) $\frac{4}{k-2}=-\frac14\Rightarrow k=-14$` },
  { level: 3, space: 5, q: String.raw`Solve $\frac{3x-2}{4}-\frac{2x+1}{6}=\frac{x}{3}-\frac12$ and check your answer.`, recap: "Equation with three fractions.", ans: String.raw`×12: $9x-6-4x-2=4x-6\Rightarrow x=2$` },
  { level: 3, space: 5, q: String.raw`A plumber's bill is modelled by $C=85h+60$.
(a) Graph the relation for $0\le h\le5$.
(b) Write it in standard form.
(c) A bill was \$$442.50$. How many hours were worked?`, recap: "Plumber C = 85h + 60.", ans: String.raw`(b) $85h-C=-60$ (c) $85h=382.5\Rightarrow h=4.5$ h` },
  { level: 3, space: 5, q: String.raw`Explain why the lines $ax+by=c$ and $bx-ay=d$ are always perpendicular (for $a,b\ne0$). Test your explanation with one example.`, recap: "Why ax + by = c ⟂ bx − ay = d.", ans: String.raw`slopes $-\frac ab$ and $\frac ba$ multiply to $-1$; e.g. $2x+3y=6$ and $3x-2y=1$` },
];

// ---- figures added to examples and problems
const ex = EXAMPLES, pr = PROBLEMS;
ex[0].fig = F({ view: { xmin: -7, xmax: 5, ymin: -6, ymax: 4 }, lines: [{ m: -0.75, b: -1.75, color: "violet" }], points: [pt(-5, 2), pt(3, -4)] });
ex[2].fig = F({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 5 }, lines: [{ m: -0.4, b: 3, color: "violet", label: "2x + 5y = 15", lx: 4 }], points: [pt(0, 3), { x: 7.5, y: 0, label: "(7.5, 0)", color: "blue" }] });
ex[3].fig = F({ view: { xmin: -2, xmax: 7, ymin: -7, ymax: 4 }, lines: [{ m: 1.5, b: -5, color: "violet" }], points: [pt(0, -5), { x: 10 / 3, y: 0, label: "(10/3, 0)", color: "blue" }] });
ex[5].fig = F({ view: { xmin: -2, xmax: 7, ymin: -5, ymax: 11 }, lines: [{ m: 3, b: -6, color: "violet" }], points: [pt(1, -3), pt(5, 9)], step: { x: 1, y: 2 } });
ex[6].fig = F({ view: { xmin: -2, xmax: 9, ymin: -4, ymax: 8 }, lines: [{ m: 2, b: -7, color: "gray", dash: true, label: "y = 2x − 7", lx: 6.3 }, { m: 2, b: -5, color: "blue", label: "(a)", lx: 5 }, { m: -0.5, b: 5, color: "red", label: "(b)", lx: 7 }], points: [pt(4, 3, null, "green")] });
ex[7].fig = F({ view: { xmin: -12, xmax: 2, ymin: -10, ymax: 2 }, lines: [{ m: -1, b: -12, color: "blue", label: "y = 5(x − 2) − 2(3x + 1)", lx: -11.5 }, { m: 0, b: -4, color: "red", label: "y = −4", lx: -3 }], points: [pt(-8, -4, null, "green")] }, 6.5, "Graphical check: the two sides are equal where the lines meet, at x = −8.");
ex[8].fig = F({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 3 }, lines: [{ m: 0.9, b: -0.2, color: "blue", label: "left side", lx: 2.2 }, { m: 0, b: 0.7, color: "red", label: "y = 0.7", lx: -1.5 }], points: [{ x: 1, y: 0.7, label: "(1, 0.7)", color: "green" }] }, 6.5, "The sides are equal at x = 1.");
pr[0].fig = F({ view: { xmin: -6, xmax: 4, ymin: -8, ymax: 5 }, points: [pt(2, -6), pt(-4, 3)] });
pr[1].fig = gridT({ xmin: -2, xmax: 8, ymin: -2, ymax: 6 });
pr[3].fig = F({ view: { xmin: -5, xmax: 8, ymin: -3, ymax: 7 }, points: [pt(-3, 5), pt(6, -1)] });
pr[4].fig = gridT({ xmin: -2, xmax: 6, ymin: -4, ymax: 2 });
pr[5].fig = F({ view: { xmin: -2, xmax: 7, ymin: -5, ymax: 4 }, lines: [{ m: 2.5, b: -4, color: "violet", label: "5x − 2y = 8", lx: 3.2 }], points: [pt(5, -1, null, "red")] });
pr[7].fig = F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 32 }, points: [{ x: 6, y: 17.6, label: "(6, 17.60)", color: "blue" }, pt(10, 26)], xlabel: "km", ylabel: "dollars", step: { x: 2, y: 4 } });
pr[8].fig = F({ view: { xmin: -4, xmax: 6, ymin: -7, ymax: 6 }, segs: [poly([[-2, 1], [4, 4], [1, -5]], "gray")], points: [pt(-2, 1, "A"), pt(4, 4, "B"), pt(1, -5, "C")] });
pr[9].fig = F({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 8 }, lines: [{ m: 4, b: 1, color: "violet", label: "y = 4x + 1", lx: 0.3 }], points: [pt(2, -1, null, "red")] });
pr[11].fig = gridT({ xmin: 0, xmax: 5, ymin: 0, ymax: 500 }, { x: 1, y: 50 }, 6.5, { xlabel: "h", ylabel: "C" });
pr[12].fig = gridT({ xmin: -6, xmax: 6, ymin: -6, ymax: 6 });
// ---- end figures

export const WS = {
  code: "1.1",
  title: "Review of Linear Relations",
  bigideas: String.raw`A linear relation has a constant rate of change, its slope $m=\frac{\Delta y}{\Delta x}$. The same line can be written in slope-intercept form $y=mx+b$ or standard form $Ax+By=C$; standard form gives the intercepts quickly and has slope $-\frac AB$. Every method in this chapter ends with a linear equation, so solving equations with brackets and fractions must be reliable.`,
  goals: ["Find slopes from points, graphs and equations.", "Convert between slope-intercept and standard form.", "Graph lines using intercepts.", "Write equations from given information.", "Solve linear equations with brackets and fractions."],
  curriculum: "review for AG1",
  vocab: [["Slope", "$m=\\frac{y_2-y_1}{x_2-x_1}$"], ["Standard form", "$Ax+By=C$, integers, $A\\ge0$"], ["Intercepts", "set the other variable to 0"], ["Parallel / perpendicular", "equal slopes / product $-1$"]],
  hook: String.raw`Show two cell-phone plans as equations, one in each form. Ask: “Which plan has the bigger monthly fee? Which charges more per GB?” Students quickly see why being able to switch forms matters.`,
  concepts: [
    ["1. Slope and forms", String.raw`$m=\frac{\Delta y}{\Delta x}$. $y=mx+b$ shows slope and intercept; $Ax+By=C$ shows intercepts; $m=-\frac AB$.
${planeT({ view: { xmin: -2, xmax: 7, ymin: -2, ymax: 5 }, lines: [{ m: -2 / 3, b: 4, color: "violet", label: "2x + 3y = 12", lx: 3 }], points: [{ x: 6, y: 0, label: "(6, 0)" }, { x: 0, y: 4, label: "(0, 4)" }], step: { x: 1, y: 1 } }, 5)}`],
    ["2. Writing equations", String.raw`Two points: slope first, then $b=y-mx$. Parallel: same slope. Perpendicular: negative reciprocal.`],
    ["3. Solving equations", String.raw`Expand, clear fractions by multiplying every term by the LCD, collect like terms, divide, check.`],
  ],
  tips: ["Students drop the negative when computing m = −A/B.", "Clearing fractions: every term, including whole numbers.", "Standard form needs integers; multiply through by the LCD.", "Check equations by substituting both points.", "Emphasize units for slope in context."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
