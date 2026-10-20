// MCV4U Worksheet 8.1 — Equations of Lines in Two-Space and Three-Space (teacher edition)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const EXAMPLES = [
  { title: "Three forms", q: S`Write vector, parametric and scalar equations of the line through $(-1,4)$ with direction $[2,5]$.`,
    steps: [S`$\vec r=[-1,4]+t[2,5]$; $x=-1+2t$, $y=4+5t$.`, S`Normal $[5,-2]$: $5x-2y+C=0$ with $-5-8+C=0$, so $C=13$.`], ans: S`$\vec r=[-1,4]+t[2,5]$; $5x-2y+13=0$` },
  { title: "Through two points", q: S`Find a vector equation of the line through $(0,-3)$ and $(4,3)$, and its slope.`,
    steps: [S`Direction $[4,6]$, or $[2,3]$: $\vec r=[0,-3]+t[2,3]$.`, S`Slope $\frac32$.`], ans: S`$\vec r=[0,-3]+t[2,3]$, slope 1.5` },
  { title: "Scalar to vector", q: S`Write a vector equation of $3x-4y+12=0$.`,
    fig: VF({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 5 }, step: 1, segs: [L2([0, 3], [4, 3], -1.2, 0.6)], arrows: [{ from: [0, 3], to: [1.2, 1.4], vl: "n", color: "green", off: 16 }, { from: [0, 3], to: [2, 4.5], vl: "m", color: "red", off: -16 }], points: [{ x: 0, y: 3, label: "(0, 3)", dx: -42, dy: -6 }] }, 4.6),
    steps: [S`Normal $[3,-4]$, so direction $[4,3]$. A point: $x=0\Rightarrow y=3$.`], ans: S`$\vec r=[0,3]+t[4,3]$` },
  { title: "On the line?", q: S`Is $(7,2)$ on $\vec r=[1,-1]+t[2,1]$?`,
    steps: [S`$x$: $1+2t=7\Rightarrow t=3$. $y$: $-1+3=2$. ✓`], ans: "yes, at t = 3" },
  { title: "A line in three-space", q: S`Write parametric equations of the line through $(2,0,-3)$ with direction $[1,-2,4]$, and find the point with $t=2$.`,
    steps: [S`$x=2+t$, $y=-2t$, $z=-3+4t$.`, S`$t=2$: $(4,-4,5)$.`], ans: "(4, −4, 5)" },
  { title: "Two points in space", q: S`Find a vector equation of the line through $(1,1,1)$ and $(4,-1,3)$. Is $(7,-3,5)$ on it?`,
    steps: [S`$\vec r=[1,1,1]+t[3,-2,2]$.`, S`$x$: $t=2$; $y$: $1-4=-3$ ✓; $z$: $1+4=5$ ✓.`], ans: "yes, at t = 2" },
  { title: "A parallel line", q: S`Find a vector equation of the line through $(3,-2,1)$ parallel to $\vec r=[0,1,0]+t[2,2,-1]$.`,
    steps: [S`Use the same direction.`], ans: S`$\vec r=[3,-2,1]+t[2,2,-1]$` },
  { title: "Crossing coordinate planes", q: S`Where does $x=1+2t$, $y=-2+t$, $z=3-t$ cross the xy-plane and the yz-plane?`,
    fig: VF(merge(V3, axes3(4.8), { segs: [line3([1, -2, 3], [2, 1, -1], -0.8, 3.4, "violet", 2.8)] }, { points: [{ x: p3(7, 1, 0)[0], y: p3(7, 1, 0)[1], label: "(7, 1, 0)", dx: -60, dy: 14 }] }, { view: { xmin: -5, xmax: 6, ymin: -3.4, ymax: 6 } }), 4.6),
    steps: [S`$z=0$: $t=3$, giving $(7,1,0)$.`, S`$x=0$: $t=-0.5$, giving $(0,-2.5,3.5)$.`], ans: "(7, 1, 0) and (0, −2.5, 3.5)" },
  { title: "The angle between lines", q: S`Find the angle between lines with directions $[1,3]$ and $[3,1]$.`,
    steps: [S`$\cos\theta=\frac{3+3}{\sqrt{10}\sqrt{10}}=0.6$.`], ans: "about 53.13°" },
];

const PROBLEMS = [
  { level: 1, q: S`Write a vector equation of the line through $(4,-1)$ with direction $[-2,5]$.`, recap: S`$\vec r=\vec r_0+t\vec m$.`, ans: S`$\vec r=[4,-1]+t[-2,5]$` },
  { level: 1, q: S`Write parametric equations of $\vec r=[0,2,-1]+t[3,1,4]$.`, recap: "One equation per coordinate.", ans: S`$x=3t$, $y=2+t$, $z=-1+4t$` },
  { level: 1, q: S`Find the point with $t=-2$ on $\vec r=[1,0,5]+t[2,3,-1]$.`, recap: "Substitute t.", ans: "(−3, −6, 7)" },
  { level: 2, q: S`Find the scalar equation of the line through $(2,3)$ with direction $[1,4]$.`, recap: "Normal [4, −1].", ans: S`$4x-y-5=0$` },
  { level: 2, q: S`Write a vector equation of $2x+y-6=0$.`, recap: "Direction from the normal; a point.", ans: S`$\vec r=[3,0]+t[1,-2]$` },
  { level: 2, q: S`Find a vector equation of the line through $(1,2,3)$ and $(3,-2,4)$. Is $(5,-6,5)$ on it?`, recap: "Find t from x; check y and z.", ans: S`$\vec r=[1,2,3]+t[2,-4,1]$; yes ($t=2$)` },
  { level: 2, q: S`Where does $x=2+t$, $y=4-2t$, $z=-1+3t$ cross the xz-plane?`, recap: "y = 0.", ans: "(4, 0, 5)" },
  { level: 2, q: S`Draw the line $\vec r=[-2,1]+t[3,1]$ on the grid, marking the points with $t=0,1,2$.`, recap: "Start at (−2, 1).", ans: "(−2, 1), (1, 2), (4, 3)", fig: gridT({ xmin: -4, xmax: 6, ymin: -2, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Find the acute angle between $2x+3y=6$ and $x-5y=1$.`, recap: "Angle between the normals, then the acute one.", ans: "45°" },
  { level: 3, space: 5, q: S`Find a vector equation of the line through $(1,-1,2)$ perpendicular to both $[1,0,1]$ and $[0,1,1]$.`, recap: "Cross product.", ans: S`$\vec r=[1,-1,2]+t[-1,-1,1]$` },
  { level: 3, space: 5, q: S`Find the distance from $(5,2)$ to $3x-4y+1=0$.`, recap: S`$\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$.`, ans: "1.6" },
  { level: 3, space: 5, q: S`Show that $\vec r=[1,2]+t[3,-1]$ and $\vec r=[7,0]+s[-6,2]$ are the same line.`, recap: "Parallel directions and a shared point.", ans: S`$[-6,2]=-2[3,-1]$, and $(7,0)$ is the first line's point with $t=2$` },
  { level: 3, space: 5, q: S`Describe the line through $(2,3,-1)$ and $(2,1,3)$ as the intersection of two planes.`, recap: "x is constant; eliminate t from y and z.", ans: S`$x=2$ and $2y+z=5$` },
];

export const WS = {
  code: "8.1",
  title: "Equations of Lines in Two-Space and Three-Space",
  bigideas: S`A line is fixed by a point and a direction: $\vec r=\vec r_0+t\vec m$. Its components give parametric equations. In two-space it also has a scalar equation $Ax+By+C=0$ whose normal $[A,B]$ is perpendicular to $\vec m$. In three-space a line has only vector and parametric equations — a single scalar equation describes a plane — so a three-space line can be described as the intersection of two planes.`,
  goals: ["Write vector and parametric equations.", "Convert to and from scalar form in two-space.", "Test points on lines.", "Work with lines in three-space."],
  curriculum: "C4.1, C4.2",
  vocab: [["Direction vector", "$\\vec m$"], ["Parameter", "t"], ["Normal (2-D)", "$[A,B]$"], ["Vector equation", "$\\vec r=\\vec r_0+t\\vec m$"]],
  hook: S`A ship leaves port at $(2,1)$ and each hour moves $[3,4]$ km. Where is it after $t$ hours? Is it ever at $(14,17)$?`,
  concepts: [
    ["1. A point and a direction", S`Every point is $\vec r_0+t\vec m$:
${VF({ view: { xmin: -1, xmax: 8, ymin: -2, ymax: 5 }, step: 1, segs: [L2([2, -1], [3, 2], -1, 1.8)], arrows: [{ from: [2, -1], to: [5, 1], vl: "m", color: "green", off: 16 }], points: [{ x: 2, y: -1, label: "r₀", dx: -18, dy: 0, color: "blue" }] }, 4.2)}`],
    ["2. Two-space scalar form", S`$Ax+By+C=0$ with normal $[A,B]\perp\vec m$.`],
    ["3. Three-space", S`No scalar equation; use $\vec r=[x_0,y_0,z_0]+t[m_1,m_2,m_3]$.`],
  ],
  tips: ["Normal ⟂ direction.", "Check every coordinate.", "Many equations, one line.", "3-D lines: two planes.", "Acute angle between lines."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
