// 1.1 Vectors in Rⁿ and Linear Combinations — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { add, sub, sc, tp, solve2, ord } from "./la.mjs";
import { vdoc } from "../vecfig.mjs";

const S = String.raw;
const sumQ = (u, v, i) => num(S`Find the ${ord(i)} component of $${tp(u)}+${tp(v)}$.`, add(u, v)[i], "Add matching components.");
const scQ = (k, u, i) => num(S`Find the ${ord(i)} component of $${k}${tp(u)}$.`, sc(k, u)[i], "Multiply every component by the scalar.");
const abQ = (a, b, i) => num(S`Find the ${ord(i)} component of $\overrightarrow{AB}$ for $A${tp(a)}$ and $B${tp(b)}$.`, sub(b, a)[i], "Head minus tail: b − a.");
const readQ = (v, i) => num(`The arrow in the figure starts at the origin. What is its ${ord(i)} component?`, v[i], "Count the steps along each axis.",
  vdoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 4 }, step: 1, arrows: [{ from: [0, 0], to: v, color: "blue" }] }));

const easy = [
  sumQ([3, -1, 4], [2, 5, -6], 1),
  sumQ([0, 7, -2, 1], [4, -3, 2, 6], 3),
  scQ(-3, [2, 0, -5], 2),
  scQ(0.5, [8, -6, 3], 0),
  abQ([1, 4, -2], [6, 0, 3], 0),
  abQ([-3, 2, 5], [1, -1, 5], 1),
  abQ([2, 2, 2, 2], [0, 5, -1, 4], 2),
  tf(S`$(1,2)=(2,1)$.`, false, "Order matters: the components must match place by place."),
  tf(S`$(4,0)+(1,2,3)$ is defined.`, false, "The vectors are in different spaces."),
  tf(S`$(0,0,0)$ is the zero vector of $\mathbb R^3$.`, true, "Every component is 0."),
  mc(S`Which vector is in $\mathbb R^4$?`, S`$(1,0,-2,5)$`, [S`$(1,0,-2)$`, S`$(4)$`, S`$(1,0,-2,5,0)$`], "Count the components: four."),
  fill("The vector whose components are all 0 is called the ___ vector.", ["zero"], "It is written 0."),
  mc(S`In $\mathbb R^3$, $\vec e_2=$`, S`$(0,1,0)$`, [S`$(1,0,0)$`, S`$(0,0,1)$`, S`$(0,2,0)$`], "1 in the second place, 0 elsewhere."),
  num(S`$(4,-1,7)=a\vec e_1+b\vec e_2+c\vec e_3$. Find $c$.`, 7, "The coefficient of e₃ is the third component."),
  readQ([3, -2], 0),
  readQ([-4, 1], 1),
  num(S`Find the first component of the midpoint of $A(2,5,-1)$ and $B(8,1,3)$.`, 5, "Average the first components."),
  num(S`Find the third component of the midpoint of $P(0,-4,7)$ and $Q(2,6,-3)$.`, 2, "Average the third components."),
  tf(S`$2(\vec u+\vec v)=2\vec u+2\vec v$ for all vectors in $\mathbb R^n$.`, true, "Distributive law."),
  num(S`How many components does a vector in $\mathbb R^{6}$ have?`, 6, "One for each coordinate."),
];

const comboQ = (u, v, w, which, fig = null) => { const [s, t] = solve2(u, v, w); return num(S`$${tp(w)}=s${tp(u)}+t${tp(v)}$. Find $${which}$.`, which === "s" ? s : t, "Match components to get two equations; solve them.", fig, 0.001); };
const medium = [
  num(S`Solve $2\vec x+(3,-1)=(7,5)$ and give the second component of $\vec x$.`, 3, "2x = (4, 6)."),
  num(S`Solve $\vec x-4(1,0,2)=(0,3,-1)$ and give the third component of $\vec x$.`, 7, "x = (0, 3, −1) + (4, 0, 8)."),
  num(S`Solve $3\vec x=\vec x+(6,-2,10)$ and give the first component of $\vec x$.`, 3, "2x = (6, −2, 10)."),
  comboQ([1, 1], [1, -1], [6, 2], "s", vdoc({ view: { xmin: -0.5, xmax: 6.5, ymin: -1.5, ymax: 4.5 }, step: 1, arrows: [{ from: [0, 0], to: [1, 1], vl: "u", off: -16 }, { from: [0, 0], to: [1, -1], color: "red", vl: "v", off: 16 }, { from: [0, 0], to: [6, 2], color: "green", vl: "w", off: -16 }] })),
  comboQ([2, 1], [1, 3], [7, 11], "t"),
  comboQ([3, -1], [1, 2], [5, 3], "s"),
  comboQ([1, 4], [-2, 1], [-3, 6], "t"),
  tf(S`$(2,3,5)$ is a linear combination of $(1,1,1)$ and $(0,1,3)$.`, true, "s = 2 from the first component; then t = 1 works in both others."),
  tf(S`$(1,4,2)$ is a linear combination of $(1,0,1)$ and $(0,2,0)$.`, false, "s = 1 from the first; the third then needs s = 2."),
  tf(S`$(5,-1,0)$ is a linear combination of $\vec e_1$ and $\vec e_2$.`, true, "5e₁ − e₂."),
  num(S`$ABCD$ is a parallelogram with $A(0,0)$, $B(5,1)$, $C(7,4)$. Find the second component of $D$.`, 3, "d = a + c − b.",
    vdoc({ view: { xmin: -0.5, xmax: 8, ymin: -0.5, ymax: 5 }, step: 1, polys: [{ pts: [[0, 0], [5, 1], [7, 4], [2, 3]], fill: "#ecfdf5", stroke: "green" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 5, y: 1, label: "B", dx: 6, dy: 14 }, { x: 7, y: 4, label: "C", dx: 6, dy: -6 }, { x: 2, y: 3, label: "D", dx: -16, dy: -6 }] })),
  num(S`$ABCD$ is a parallelogram with $A(1,-2,0)$, $B(3,1,2)$, $C(4,0,5)$. Find the third component of $D$.`, 3, "d = a + c − b = (2, −3, 3)."),
  num(S`$A(1,1,1)$, $B(2,3,0)$ and $C(4,7,k)$ are collinear. Find $k$.`, -2, "AC = 3AB."),
  num(S`$P(0,2)$, $Q(1,5)$ and $R(k,14)$ are collinear. Find $k$.`, 4, "PR must be a multiple of PQ = (1, 3)."),
  mc(S`Which property justifies $(\vec u+\vec v)+\vec w=\vec u+(\vec v+\vec w)$?`, "associativity of addition", ["commutativity of addition", "distributivity", "existence of negatives"], "Brackets move: associativity."),
  mc(S`Which property gives $(3+5)\vec x=3\vec x+5\vec x$?`, "distributivity over scalar addition", ["associativity of addition", "commutativity", "the zero vector"], "A sum of scalars distributes."),
  num(S`Find the fourth component of $2(1,0,-1,3)-3(0,2,1,-1)$.`, 9, "6 − (−3) = 9."),
  num(S`Find the second component of $(1,2,0,4)-(5,-1,2,0)+2(0,1,1,1)$.`, 5, "2 + 1 + 2."),
  ms(S`Which of these are linear combinations of $(1,0)$ and $(1,1)$?`, [S`$(3,2)$`, S`$(0,-4)$`, S`$(7,7)$`, S`$(-1,5)$`], [0, 1, 2, 3], "Two non-parallel vectors in ℝ² reach every vector."),
  num(S`Solve $5\vec x-(2,0)=2\vec x+(4,9)$ and give the second component of $\vec x$.`, 3, "3x = (6, 9)."),
];

export const E = easy;
export const M = medium;
