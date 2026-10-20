// MCV4U Worksheet 8.3 — Properties of Planes (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Point and normal", q: S`Find the scalar equation of the plane through $(3,0,-1)$ with normal $[2,-5,1]$.`,
    steps: [S`$2x-5y+z=2(3)-0+(-1)=5$.`], ans: S`$2x-5y+z-5=0$` },
  { title: "Vector to scalar", q: S`Find a scalar equation of $\vec r=[2,1,0]+s[1,0,2]+t[0,1,-1]$.`,
    steps: [S`$\vec n=[1,0,2]\times[0,1,-1]=[-2,1,1]$.`, S`$-2x+y+z=-4+1+0=-3$.`], ans: S`$2x-y-z-3=0$` },
  { title: "From intercepts", q: S`Find the scalar equation of the plane through $(1,0,0)$, $(0,2,0)$ and $(0,0,4)$.`,
    fig: VF(merge(V3, axes3(4.8), { polys: [tri3(1, 2, 4)] }), 4),
    steps: [S`$\frac x1+\frac y2+\frac z4=1$; multiply by 4.`], ans: S`$4x+2y+z=4$` },
  { title: "Parallel planes and their distance", q: S`Show that $3x-y+2z=1$ and $6x-2y+4z=9$ are parallel, and find the distance between them.`,
    steps: [S`$[6,-2,4]=2[3,-1,2]$; rewrite the first as $6x-2y+4z=2$.`, S`Distance $\frac{|9-2|}{\sqrt{36+4+16}}=\frac{7}{\sqrt{56}}$.`], ans: "parallel; about 0.94 apart" },
  { title: "Perpendicular planes", q: S`Are $x+2y-2z=3$ and $4x-y+z=0$ perpendicular?`,
    steps: [S`$4-2-2=0$.`], ans: "yes" },
  { title: "The angle between planes", q: S`Find the angle between $2x+y-z=4$ and $x-y+3z=1$.`,
    steps: [S`$|\vec n_1\cdot\vec n_2|=|2-1-3|=2$; $|\vec n_1||\vec n_2|=\sqrt6\sqrt{11}$.`, S`$\cos\theta\approx0.2462$.`], ans: "about 75.75°" },
  { title: "Intercepts", q: S`Find the intercepts of $5x-2y+10z=20$.`,
    steps: [S`x: 4; y: $-10$; z: 2.`], ans: "4, −10 and 2" },
  { title: "Distance to a plane", q: S`Find the distance from $(2,-1,4)$ to $6x+2y-3z=1$.`,
    steps: [S`$\frac{|12-2-12-1|}{\sqrt{36+4+9}}=\frac37$.`], ans: "about 0.43" },
  { title: "A parallel plane through a point", q: S`Find the plane through $(1,2,3)$ parallel to $4x-y+2z=7$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [patch3([1, 2, 3], [1, 4, 0], [0, 2, 1], 0.7, "#dcfce7", "green", 0.6), patch3([1.2, 0.6, 1.2], [1, 4, 0], [0, 2, 1], 0.7, "#dbeafe", "blue", 0.6)] }), 4),
    steps: [S`Same normal: $4x-y+2z=4-2+6$.`], ans: S`$4x-y+2z=8$` },
];

const PROBLEMS = [
  { level: 1, q: S`Give a normal to $-x+3y=5$ (a plane in three-space).`, recap: "The z coefficient is 0.", ans: "[−1, 3, 0]" },
  { level: 1, q: S`Write the plane through the origin with normal $[1,1,1]$.`, recap: "D = 0.", ans: S`$x+y+z=0$` },
  { level: 1, q: S`Find the intercepts of $x+2y+3z=6$.`, recap: "Set two variables to 0.", ans: "6, 3 and 2" },
  { level: 2, q: S`Find the plane through $(2,1,-1)$ with normal $[3,0,4]$.`, recap: S`$3x+4z=6-4$.`, ans: S`$3x+4z-2=0$` },
  { level: 2, q: S`Find a scalar equation of $\vec r=[0,0,1]+s[1,1,0]+t[1,0,2]$.`, recap: "Cross the directions.", ans: S`$2x-2y-z+1=0$` },
  { level: 2, q: S`Are $2x+y-z=1$ and $x-y+z=0$ parallel, perpendicular, or neither?`, recap: "Dot the normals.", ans: "perpendicular" },
  { level: 2, q: S`Find the angle between $x+y=0$ and $y+z=0$.`, recap: S`$\cos\theta=\frac12$.`, ans: "60°" },
  { level: 2, q: S`Find the distance from the origin to $x+2y+2z=6$.`, recap: "|−6| / 3.", ans: "2" },
  { level: 3, space: 5, q: S`Find the plane through $(1,1,1)$ perpendicular to both $x+y=1$ and $y-z=0$.`, recap: "Its normal is perpendicular to both normals.", ans: S`$x-y-z+1=0$` },
  { level: 3, space: 5, q: S`Find the distance between $2x-y+2z=4$ and $2x-y+2z=-5$.`, recap: S`$\frac{|D_1-D_2|}{|\vec n|}$.`, ans: "3" },
  { level: 3, space: 5, q: S`Find the plane containing $(2,0,0)$ and $(0,3,0)$ that is perpendicular to the xy-plane.`, recap: S`Its normal is perpendicular to $\vec k$ and to $[-2,3,0]$.`, ans: S`$3x+2y=6$` },
  { level: 3, space: 5, q: S`Find $D\gt0$ so that $2x+2y+z=D$ is 4 units from the origin.`, recap: "D / 3 = 4.", ans: "12" },
  { level: 3, space: 5, q: S`Explain why $kx+2y-z=3$ can never be parallel to $x+y+z=1$.`, recap: "Compare normals.", ans: "[k, 2, −1] is a multiple of [1, 1, 1] only if 2 = −1, which is impossible" },
];

export const WS = {
  code: "8.3",
  title: "Properties of Planes",
  bigideas: S`A normal $\vec n=[A,B,C]$ is perpendicular to every vector in the plane. The plane through $P_0$ with normal $\vec n$ is $\vec n\cdot(\vec r-\vec r_0)=0$, that is, $Ax+By+Cz+D=0$. From a vector equation, $\vec n=\vec a\times\vec b$. Planes are parallel when their normals are parallel and perpendicular when the normals' dot product is 0; the angle between planes is the angle between normals. Distance from a point: $\frac{|Ax_0+By_0+Cz_0+D|}{|\vec n|}$.`,
  goals: ["Write scalar equations of planes.", "Convert from vector form.", "Compare planes.", "Find angles, intercepts and distances."],
  curriculum: "C4.3, C4.4, C4.6, C4.7",
  vocab: [["Normal", "$[A,B,C]$"], ["Scalar equation", "$Ax+By+Cz+D=0$"], ["Parallel", "normals parallel"], ["Distance", "$\\frac{|Ax_0+By_0+Cz_0+D|}{|\\vec n|}$"]],
  hook: S`A tabletop is level when a pencil standing straight up on it points directly at the ceiling. Which vector describes the tabletop best?`,
  concepts: [
    ["1. The normal", S`$\vec n$ sticks straight out of the plane:
${VF(merge(V3, axes3(4.6), { polys: [tri3(4, 3, 2)] }, { arrows: [{ from: p3(4 / 3, 1, 2 / 3), to: p3(4 / 3 + 0.9, 1 + 1.2, 2 / 3 + 1.8), vl: "n", color: "green", off: -16 }] }), 4)}`],
    ["2. Comparing planes", S`Parallel: $\vec n_2=k\vec n_1$. Perpendicular: $\vec n_1\cdot\vec n_2=0$.`],
    ["3. Distance", S`Substitute the point into $Ax+By+Cz+D$ and divide by $|\vec n|$.`],
  ],
  tips: ["Normal from coefficients.", "a × b gives a normal.", "Acute angle between planes.", "Write ... + D = 0 before using the distance formula.", "Same normal: parallel planes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
