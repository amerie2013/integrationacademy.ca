// IB AA SL Worksheet 3.2 — Linear Functions and Models (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A point and a gradient", q: S`Find the line with gradient $-2$ through $(3,1)$.`,
    steps: [S`$y-1=-2(x-3)$.`], ans: S`$y=-2x+7$` },
  { title: "Two points", q: S`Find the line through $(2,-3)$ and $(6,5)$ in gradient–intercept and general form.`,
    steps: [S`$m=\frac{8}{4}=2$; $y+3=2(x-2)$.`], ans: S`$y=2x-7$; $2x-y-7=0$` },
  { title: "Intercepts", q: S`Find the intercepts and gradient of $5x+2y-10=0$.`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, lines: [{ m: -2.5, b: 5 }], points: [pt(2, 0), pt(0, 5)] }),
    steps: [S`$y=0$: $x=2$. $x=0$: $y=5$.`, S`$m=-\frac52$.`], ans: S`$(2,0)$, $(0,5)$, $m=-2.5$` },
  { title: "A parallel line", q: S`Find the line parallel to $y=4x-1$ through $(-1,2)$.`,
    steps: [S`$y-2=4(x+1)$.`], ans: S`$y=4x+6$` },
  { title: "A perpendicular line", q: S`Find the line perpendicular to $2x-3y=6$ through $(2,0)$.`,
    steps: [S`$2x-3y=6$ has $m=\frac23$, so use $-\frac32$.`, S`$y=-\frac32(x-2)$.`], ans: S`$y=-1.5x+3$` },
  { title: "Intersection by substitution", q: S`Find where $y=3x-2$ meets $y=-x+6$.`,
    steps: [S`$3x-2=-x+6\Rightarrow x=2$, $y=4$.`], ans: S`$(2,4)$` },
  { title: "Intersection by elimination", q: S`Solve $2x+3y=7$ and $x-y=1$.`,
    steps: [S`$x=y+1$: $2y+2+3y=7\Rightarrow y=1$, $x=2$.`], ans: S`$(2,1)$` },
  { title: "A linear model", q: S`A gym charges a 30 joining fee and 15 per month. Write the cost $C$ after $n$ months and find the cost for 8 months.`,
    steps: [S`$C=30+15n$; $C(8)=150$.`], ans: S`$C=30+15n$; 150` },
  { title: "Break-even", q: S`$C(q)=500+8q$ and $R(q)=18q$. Find the break-even quantity.`,
    fig: F({ view: { xmin: -5, xmax: 90, ymin: -50, ymax: 1600 }, lines: [{ m: 8, b: 500 }, { m: 18, b: 0, color: "green" }], points: [pt(50, 900, null, "red")], step: { x: 10, y: 200 } }),
    steps: [S`$18q=500+8q\Rightarrow q=50$.`], ans: "50 items (900)" },
];

const PROBLEMS = [
  { level: 1, q: S`State the gradient and y-intercept of $y=0.5x-3$.`, recap: "Read m and c.", ans: S`$0.5$; $-3$` },
  { level: 1, q: S`Find the y-intercept of $3x+y=12$.`, recap: "y-intercept.", ans: "12" },
  { level: 1, q: S`Find the x-intercept of $2x-5y=10$.`, recap: "x-intercept.", ans: "5" },
  { level: 2, q: S`Find the line through $(-2,4)$ with gradient 3.`, recap: "Point and gradient.", ans: S`$y=3x+10$` },
  { level: 2, q: S`Find the line through $(1,1)$ and $(4,-5)$.`, recap: "Two points.", ans: S`$y=-2x+3$` },
  { level: 2, q: S`Find the line perpendicular to $y=-\frac14x+1$ through $(1,3)$.`, recap: "Perpendicular.", ans: S`$y=4x-1$` },
  { level: 2, q: S`Find where $2x+y=8$ meets $y=x-1$.`, recap: "Intersection.", ans: S`$(3,2)$`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 9 }, lines: [{ m: -2, b: 8 }, { m: 1, b: -1, color: "blue" }] }) },
  { level: 2, q: S`Write $y=\frac23x-1$ in general form with integer coefficients.`, recap: "General form.", ans: S`$2x-3y-3=0$` },
  { level: 3, space: 5, q: S`Find the area of the triangle formed by $y=2x+4$, $y=-x+4$ and the x-axis.`, recap: "Triangle area.", ans: S`vertices $(-2,0)$, $(4,0)$, $(0,4)$; area 12` },
  { level: 3, space: 4, q: S`Taxi A charges $3+2d$ and taxi B charges $5+1.6d$ for $d$ km. When do they cost the same, and which is cheaper for 10 km?`, recap: "Compare models.", ans: S`$d=5$; B (21 vs 23)` },
  { level: 3, space: 5, q: S`Find the perpendicular bisector of the segment from $(1,2)$ to $(5,6)$.`, recap: "Perpendicular bisector.", ans: S`midpoint $(3,4)$, $m=-1$: $y=-x+7$` },
  { level: 3, space: 4, q: "Tank A holds 500 L and loses 20 L per minute; tank B holds 100 L and gains 30 L per minute. When do they hold the same amount, and how much?", recap: "Two linear models.", ans: "after 8 minutes, 340 L" },
  { level: 3, space: 4, q: S`Find $k$ so that $kx+2y=5$ is parallel to $3x-y=1$.`, recap: "Parallel with parameter.", ans: S`$k=-6$` },
];

export const WS = {
  code: "3.2",
  title: "Linear Functions and Models",
  bigideas: S`A line can be written as $y=mx+c$, $y-y_1=m(x-x_1)$ or $ax+by+d=0$ (gradient $-\frac ab$). Intercepts come from setting $x=0$ or $y=0$. Two lines meet where both equations hold. In models, $m$ is a rate and $c$ a starting value; break-even is where cost equals revenue.`,
  goals: ["Write equations of lines in three forms.", "Find intercepts.", "Find intersections.", "Build linear models."],
  curriculum: "SL 2.1, SL 2.4",
  vocab: [["Gradient–intercept", "$y=mx+c$"], ["General form", "$ax+by+d=0$"], ["Break-even", "C = R"]],
  hook: "Give two phone plans as tables and ask which is cheaper. Let students discover the crossing point before writing equations.",
  concepts: [
    ["1. Three forms", S`$y=3x-1$, $y-5=3(x-2)$ and $3x-y-1=0$ describe the same line.`],
    ["2. Intersections", S`${F({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 7 }, lines: [{ m: 3, b: -2 }, { m: -1, b: 6, color: "blue" }], points: [pt(2, 4, null, "red")] }, 5)} $y=3x-2$ meets $y=-x+6$ at $(2,4)$.`],
    ["3. Models", S`Fixed cost = y-intercept; cost per item = gradient; check the domain.`],
  ],
  tips: [S`Signs flip inside $y-y_1=m(x-x_1)$.`, "m = −a/b in general form.", "Integer coefficients for general form.", "Substitute back to check intersections.", "Interpret m and c with units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
