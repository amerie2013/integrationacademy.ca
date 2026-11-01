// 1.6 Normal Vectors and Scalar Equations of Planes — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf, fill } from "./kit.mjs";
import { cross, dot, norm, sub, tp, ord } from "./la.mjs";
import { vdoc, scene3, a3, pt3, tri3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const eq = (n, d) => { const t = n.map((c, i) => (c === 0 ? "" : `${c < 0 ? "-" : "+"}${Math.abs(c) === 1 ? "" : Math.abs(c)}x_${i + 1}`)).join("").replace(/^\+/, ""); return `${t}=${d}`; };
const dQ = (p, n) => num(S`The plane through $${tp(p)}$ with normal $${tp(n)}$ is $${eq(n, "d")}$. Find $d$.`, dot(n, p), "d = n · p.");
const onQ = (n, d, x) => tf(S`$${tp(x)}$ lies on the plane $${eq(n, d)}$.`, dot(n, x) === d, `Substituting gives ${dot(n, x)}.`);
const intQ = (n, d, i) => num(S`Find the $x_${i + 1}$-intercept of $${eq(n, d)}$.`, d / n[i], "Set the other two variables to 0.", null, 0.001);
const angQ = (n1, n2) => { const c = Math.abs(dot(n1, n2)) / (norm(n1) * norm(n2)); return num(S`Find the acute angle in degrees between the planes with normals $${tp(n1)}$ and $${tp(n2)}$ (1 decimal).`, Math.round((Math.acos(c) * 1800) / Math.PI) / 10, "Use |n₁ · n₂| / (‖n₁‖‖n₂‖).", null, 0.06); };
const vecToScalar = (p, u, v) => { const n = cross(u, v); return num(S`Write $\vec x=${tp(p)}+s${tp(u)}+t${tp(v)}$ as $\vec n\cdot\vec x=d$ with $\vec n=\vec u\times\vec v=${tp(n)}$. Find $d$.`, dot(n, p), "d = n · p."); };
const lineMeet = (p, m, n, d) => num(S`At what $t$ does $\vec x=${tp(p)}+t${tp(m)}$ meet $${eq(n, d)}$?`, (d - dot(n, p)) / dot(n, m), "Substitute the parametric equations and solve for t.", null, 0.001);

const easy = [
  dQ([1, 2, 3], [2, -1, 4]), dQ([0, -3, 5], [1, 1, 1]), dQ([4, 0, -2], [3, 5, -2]),
  num(S`Give the second component of a normal vector to $3x_1-7x_2+x_3=4$.`, -7, "The coefficients form a normal."),
  num(S`Give the third component of the normal $(a,b,c)$ read from $5x_1+2x_2=9$ in $\mathbb R^3$.`, 0, "No x₃ term: coefficient 0."),
  onQ([2, 1, -1], 3, [1, 2, 1]), onQ([1, -3, 2], 0, [3, 1, 0]), onQ([4, 0, 1], 7, [2, 5, 0]),
  intQ([2, 3, 6], 12, 0), intQ([1, -4, 2], 8, 1), intQ([5, 2, 4], 20, 2),
  tf(S`The planes $x_1+2x_2-x_3=4$ and $2x_1+4x_2-2x_3=1$ are parallel.`, true, "Normals (1, 2, −1) and 2(1, 2, −1)."),
  tf(S`The planes $x_1+x_2=1$ and $x_2+x_3=1$ are parallel.`, false, "(1, 1, 0) and (0, 1, 1) are not multiples."),
  tf(S`The planes $x_1-x_2+2x_3=0$ and $2x_1+4x_2+x_3=5$ are perpendicular.`, true, "2 − 4 + 2 = 0."),
  mc(S`Which vector is normal to the plane $x_3=-2$?`, S`$(0,0,1)$`, [S`$(1,1,0)$`, S`$(0,1,0)$`, S`$(1,0,0)$`], "Only x₃ appears."),
  fill("A nonzero vector perpendicular to a plane is called a ___ vector.", ["normal"], "Normal vector."),
  mc("Which equation describes the shaded plane (intercepts 2, 3 and 6)?", S`$3x_1+2x_2+x_3=6$`, [S`$2x_1+3x_2+6x_3=6$`, S`$x_1+x_2+x_3=6$`, S`$6x_1+3x_2+2x_3=6$`], "x₁-intercept 6/3 = 2, x₂-intercept 6/2 = 3, x₃-intercept 6.",
    vdoc(scene3(6.5, { polys: [tri3(2, 3, 6, "#dbeafe", "blue")], points: [pt3([2, 0, 0], "2", { color: "black" }), pt3([0, 3, 0], "3", { color: "black" }), pt3([0, 0, 6], "6", { color: "black" })] }))),
  mc("The green arrow is a normal to the shaded plane through the origin. The plane contains u = (1, 0, 0) and v = (0, 1, 1). Which is the normal?", S`$(0,-1,1)$`, [S`$(1,1,0)$`, S`$(0,1,1)$`, S`$(1,0,1)$`], "u × v = (0, −1, 1).",
    vdoc(scene3(3.5, { polys: [patch3([0, 0, 0], [1, 0, 0], [0, 1, 1], 1.4, "#ede9fe", "violet", 0.7)], arrows: [a3([0, 0, 0], [0, -1.4, 1.4], { color: "green", label: "n", off: -14 })] }))),
  num(S`The line $3x_1-2x_2=6$ in $\mathbb R^2$ has normal $(3,b)$. Find $b$.`, -2, "Coefficients again."),
  num(S`Find $d$ so that the plane $x_1+x_2+x_3=d$ passes through $(2,-5,7)$.`, 4, "2 − 5 + 7."),
];

const medium = [
  vecToScalar([1, 0, 1], [1, 2, 0], [0, 1, 3]), vecToScalar([2, 2, 0], [1, 0, -1], [0, 1, 2]), vecToScalar([0, 1, -1], [2, 1, 1], [1, 0, 1]),
  num(S`The plane through $(1,0,0)$, $(0,2,0)$, $(0,0,4)$ is $4x_1+2x_2+x_3=d$. Find $d$.`, 4, "Substitute (1, 0, 0).",
    vdoc(scene3(4.5, { polys: [tri3(1, 2, 4, "#dbeafe", "blue")], points: [pt3([1, 0, 0], "(1, 0, 0)", { color: "black" }), pt3([0, 2, 0], "(0, 2, 0)", { color: "black" }), pt3([0, 0, 4], "(0, 0, 4)", { color: "black" })] }))),
  num(S`The plane through $A(1,1,0)$, $B(2,0,1)$, $C(0,2,3)$ has normal $\overrightarrow{AB}\times\overrightarrow{AC}$. Find the third component of this normal.`, cross(sub([2, 0, 1], [1, 1, 0]), sub([0, 2, 3], [1, 1, 0]))[2], "AB = (1, −1, 1), AC = (−1, 1, 3)."),
  angQ([1, 0, 1], [0, 1, 1]), angQ([2, 1, -2], [1, 2, 2]), angQ([1, 1, 0], [1, 0, 0]),
  num(S`Find $k$ so that $kx_1+2x_2-x_3=5$ is perpendicular to $x_1-x_2+3x_3=0$.`, 5, "k − 2 − 3 = 0."),
  num(S`Find $k$ so that $x_1+kx_2+x_3=0$ is perpendicular to $3x_1+x_2-x_3=2$.`, -2, "3 + k − 1 = 0."),
  num(S`Find $k$ so that $2x_1-4x_2+kx_3=1$ is parallel to $x_1-2x_2+3x_3=7$.`, 6, "Normals proportional: factor 2."),
  lineMeet([1, 0, 2], [1, 1, 1], [1, 2, 3], 10), lineMeet([0, 0, 0], [2, -1, 1], [3, 1, 2], 14),
  mc(S`Which is a vector equation of $x_1+x_2+x_3=3$?`, S`$\vec x=(3,0,0)+s(-1,1,0)+t(-1,0,1)$`, [S`$\vec x=(1,1,1)+s(1,1,1)+t(1,0,0)$`, S`$\vec x=(3,0,0)+s(1,1,0)+t(1,0,1)$`, S`$\vec x=(0,0,3)+s(1,1,1)$`], "Directions must have dot product 0 with (1, 1, 1)."),
  num(S`The plane through $(3,-1,2)$ parallel to $2x_1+x_2-x_3=0$ is $2x_1+x_2-x_3=d$. Find $d$.`, 3, "6 − 1 − 2."),
  num(S`The plane through $(0,4,1)$ parallel to $x_1-3x_3=8$ is $x_1-3x_3=d$. Find $d$.`, -3, "0 − 3."),
  num(S`Find the first component of a direction vector $\vec n_1\times\vec n_2$ of the line where $x_1+x_2+2x_3=1$ meets $x_1-x_3=0$.`, cross([1, 1, 2], [1, 0, -1])[0], "(1, 1, 2) × (1, 0, −1)."),
  num(S`Find the third component of $\vec n_1\times\vec n_2$ for the planes $2x_1-x_2=3$ and $x_2+4x_3=0$.`, cross([2, -1, 0], [0, 1, 4])[2], "(2, −1, 0) × (0, 1, 4)."),
  tf(S`The line $\vec x=(1,1,1)+t(1,-1,0)$ is parallel to the plane $x_1+x_2+5x_3=2$.`, true, "The direction has dot product 0 with the normal."),
  num(S`The plane in the figure is $2x_1+2x_2+x_3=d$ and passes through $(1,1,2)$. Find $d$.`, 6, "2 + 2 + 2.",
    vdoc(scene3(6.5, { polys: [tri3(3, 3, 6, "#dbeafe", "blue")], points: [pt3([1, 1, 2], "(1, 1, 2)", { color: "red" })] }))),
];

export const E = easy;
export const M = medium;
