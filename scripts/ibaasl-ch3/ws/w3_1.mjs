// IB AA SL Worksheet 3.1 — The Gradient of a Line (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Two points", q: S`Find the gradient through $(-3,2)$ and $(5,6)$.`,
    steps: [S`$m=\frac{6-2}{5-(-3)}=\frac48$.`], ans: S`$\frac12$` },
  { title: "A vertical line", q: S`Find the gradient through $(4,-1)$ and $(4,9)$.`,
    steps: [S`Run $4-4=0$: division by zero.`], ans: "no gradient (vertical line x = 4)" },
  { title: "A horizontal line", q: S`Find the gradient through $(-2,5)$ and $(6,5)$.`,
    steps: [S`Rise 0.`], ans: "0" },
  { title: "From a graph", q: "Find the gradient of the line shown.",
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 5 }, lines: [{ m: 2, b: -3 }], points: [pt(-1, -5), pt(3, 3)] }),
    steps: [S`Through $(-1,-5)$ and $(3,3)$: $\frac{8}{4}$.`], ans: "2" },
  { title: "A rate of change", q: S`A pool holds 120 L after 3 min and 300 L after 9 min, filling steadily. Find the rate.`,
    steps: [S`$\frac{300-120}{9-3}=\frac{180}{6}$.`], ans: "30 L per minute" },
  { title: "Parallel?", q: S`Is the line through $(1,1)$ and $(3,7)$ parallel to $y=3x-4$?`,
    steps: [S`$m=\frac{6}{2}=3$, the same gradient.`], ans: "yes" },
  { title: "A perpendicular gradient", q: S`Find the gradient perpendicular to $m=-\frac32$.`,
    steps: [S`Negative reciprocal.`], ans: S`$\frac23$` },
  { title: "Checking perpendicular lines", q: S`Show that the lines from the origin to $(2,6)$ and to $(6,-2)$ are perpendicular.`,
    steps: [S`Gradients $3$ and $-\frac13$; product $-1$.`], ans: "perpendicular" },
  { title: "Collinear points", q: S`Show that $(-1,-4)$, $(1,2)$ and $(4,11)$ are collinear.`,
    steps: [S`$\frac{2-(-4)}{1-(-1)}=3$ and $\frac{11-2}{4-1}=3$.`, "Equal gradients through a shared point."], ans: "collinear" },
];

const PROBLEMS = [
  { level: 1, q: S`Find the gradient through $(2,3)$ and $(6,11)$.`, recap: "Two points.", ans: "2" },
  { level: 1, q: S`Find the gradient through $(-4,1)$ and $(0,-7)$.`, recap: "Negative gradient.", ans: S`$-2$` },
  { level: 1, q: S`Find the gradient perpendicular to $m=5$.`, recap: "Perpendicular.", ans: S`$-0.2$` },
  { level: 2, q: "Find the gradient of the line shown.", recap: "From a graph.", ans: "1.5",
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 1.5, b: -2 }], points: [pt(0, -2), pt(4, 4)] }) },
  { level: 2, q: S`A car has travelled 240 km after 3 h and 400 km after 5 h at constant speed. Find the speed.`, recap: "Rate.", ans: "80 km/h" },
  { level: 2, q: S`The line through $(k,4)$ and $(3,10)$ has gradient 2. Find $k$.`, recap: "Unknown coordinate.", ans: S`$k=0$` },
  { level: 2, q: S`Are the line through $(1,2)$, $(5,10)$ and the line through $(-1,0)$, $(2,6)$ parallel?`, recap: "Parallel test.", ans: "yes, both have gradient 2" },
  { level: 2, q: S`Are lines with gradients $\frac35$ and $-\frac53$ perpendicular?`, recap: "Perpendicular test.", ans: S`yes: product $-1$` },
  { level: 3, space: 5, q: S`Show that $A(0,0)$, $B(4,2)$, $C(5,0)$, $D(1,-2)$ form a rectangle.`, recap: "Rectangle.", ans: S`$AB\parallel DC$ ($\frac12$), $AD\parallel BC$ ($-2$), $\frac12\times(-2)=-1$`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 3 }, segs: [{ pts: [[0, 0], [4, 2], [5, 0], [1, -2], [0, 0]] }], points: [pt(0, 0, "A"), pt(4, 2, "B"), pt(5, 0, "C"), pt(1, -2, "D")] }) },
  { level: 3, space: 4, q: S`The line through $(2,k)$ and $(6,1)$ is perpendicular to a line with gradient 2. Find $k$.`, recap: "Perpendicular with unknown.", ans: S`$k=3$` },
  { level: 3, space: 4, q: S`Show that $P(1,1)$, $Q(4,5)$, $R(8,2)$ form a right-angled triangle.`, recap: "Right angle.", ans: S`$m_{PQ}=\frac43$, $m_{QR}=-\frac34$: right angle at $Q$` },
  { level: 3, space: 4, q: "The temperature falls steadily from 24 °C at 2 pm to 15 °C at 5 pm. Find the rate of change and predict the temperature at 7 pm.", recap: "Rate and prediction.", ans: S`$-3$ °C per hour; 9 °C` },
  { level: 3, space: 4, q: S`Find $k$ so that $(0,k)$, $(2,5)$ and $(6,13)$ are collinear.`, recap: "Collinear.", ans: S`$k=1$` },
];

export const WS = {
  code: "3.1",
  title: "The Gradient of a Line",
  bigideas: S`The gradient $m=\frac{y_2-y_1}{x_2-x_1}$ measures steepness: positive rises, negative falls, zero is horizontal, and a vertical line has no gradient. In context it is a rate with units. Parallel lines have equal gradients; perpendicular lines have gradients with product $-1$.`,
  goals: ["Find gradients from points and graphs.", "Interpret gradients as rates.", "Use parallel and perpendicular rules.", "Show collinearity and right angles."],
  curriculum: "SL 2.1",
  vocab: [["Gradient", "rise ÷ run"], ["Parallel", S`$m_1=m_2$`], ["Perpendicular", S`$m_1m_2=-1$`]],
  hook: "Show photos of a ramp, a staircase and a ski slope. Ask students to rank them by steepness and to say how they could measure it with numbers.",
  concepts: [
    ["1. Rise over run", S`${F({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 13 }, lines: [{ m: 2, b: 1 }], tri: { x: 1, y: 3, run: 4, rise: 8 }, points: [pt(1, 3), pt(5, 11)] }, 5)} Run 4, rise 8: $m=2$.`],
    ["2. Rates", S`A gradient in context has units: (units of $y$) per (unit of $x$).`],
    ["3. Parallel and perpendicular", S`Equal gradients: parallel. Negative reciprocals: perpendicular (e.g. $\frac34$ and $-\frac43$).`],
  ],
  tips: ["Same order of subtraction top and bottom.", "Vertical lines have no gradient.", "Negative reciprocal: flip and change sign.", "Give units for rates.", "Use far-apart grid points on graphs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
