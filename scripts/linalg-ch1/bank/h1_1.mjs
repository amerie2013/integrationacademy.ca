// 1.1 Vectors in Rⁿ and Linear Combinations — 20 hard questions
import { mc, num, tf, ms } from "./kit.mjs";
import { solve2 } from "./la.mjs";
import { vdoc, pol, scene3, pt3, seg3 } from "../vecfig.mjs";

const S = String.raw;
const HEX = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
const [alloyS, alloyT] = solve2([6, 2], [3, 5], [33, 27]);
export const TOPIC = "1.1 Vectors in Rⁿ and Linear Combinations";
export const Q = [
  num(S`For which $k$ is $(k,2,7)$ a linear combination of $(1,0,1)$ and $(1,1,2)$?`, 5, "t = 2 from the second component, then s = 3 from the third; k = s + t."),
  num(S`For which $h$ is $(2,h,1)$ in the span of $(1,2,0)$ and $(0,1,1)$?`, 5, "s = 2 and t = 1; h = 2s + t."),
  num(S`For which $k$ is $(1,3,k)$ a linear combination of $(1,1,0)$ and $(0,1,1)$?`, 2, "s = 1, t = 2, and the third component is t."),
  num(S`Bar A contains 6 kg of copper and 2 kg of zinc; bar B contains 3 kg of copper and 5 kg of zinc. How many B bars, together with some A bars, give exactly 33 kg of copper and 27 kg of zinc?`, alloyT, `s(6, 2) + t(3, 5) = (33, 27) gives s = ${alloyS}, t = ${alloyT}.`),
  num(S`A serving of food X has 10 g protein and 20 g carbohydrate; food Y has 25 g and 5 g. How many servings of X give exactly 80 g protein and 70 g carbohydrate (with some servings of Y)?`, 3, "10s + 25t = 80 and 20s + 5t = 70 give s = 3, t = 2."),
  num(S`The centroid of a triangle is $\tfrac13(\vec a+\vec b+\vec c)$. Find the second component of the centroid of $A(1,0,2)$, $B(4,3,-1)$, $C(1,6,5)$.`, 3, "(0 + 3 + 6)/3.",
    vdoc(scene3(5, { segs: [seg3([[1, 0, 2], [4, 3, -1], [1, 6, 5], [1, 0, 2]], { color: "blue", w: 2 })], points: [pt3([1, 0, 2], "A", { color: "black" }), pt3([4, 3, -1], "B", { color: "black" }), pt3([1, 6, 5], "C", { color: "black" }), pt3([2, 3, 2], "G", { color: "red" })] }))),
  num(S`$P$ is one third of the way from $A(3,0,6)$ to $B(0,9,-3)$. Find the third component of $P$.`, 3, "p = a + ⅓(b − a) = (2, 3, 3)."),
  tf(S`If $\vec u,\vec v\in\mathbb R^3$ are not parallel, every vector of $\mathbb R^3$ is a linear combination of $\vec u$ and $\vec v$.`, false, "Two vectors reach only a plane through the origin."),
  tf(S`The zero vector is a linear combination of any vectors $\vec v_1,\dots,\vec v_k$.`, true, "Take every coefficient 0."),
  tf(S`If $\vec w=2\vec u-\vec v$, then $\vec u$ is a linear combination of $\vec v$ and $\vec w$.`, true, "u = ½v + ½w."),
  mc(S`How many pairs $(s,t)$ satisfy $s(1,2)+t(2,4)=(3,6)$?`, "infinitely many", ["exactly one", "none", "exactly two"], "The vectors are parallel and (3, 6) is on their line: s = 3 − 2t."),
  mc(S`How many pairs $(s,t)$ satisfy $s(1,2)+t(2,4)=(3,5)$?`, "none", ["exactly one", "infinitely many", "exactly two"], "Every combination is a multiple of (1, 2); (3, 5) is not."),
  mc(S`How many pairs $(s,t)$ satisfy $s(1,2)+t(2,1)=(3,3)$?`, "exactly one", ["none", "infinitely many", "exactly two"], "Non-parallel vectors in ℝ²: a unique solution (s = t = 1)."),
  ms(S`Which vectors are in the span of $(1,0,1)$ and $(0,1,1)$?`, [S`$(1,1,2)$`, S`$(2,-1,1)$`, S`$(1,1,1)$`, S`$(0,0,0)$`], [0, 1, 3], "(a, b, a + b): the third component must be the sum of the first two."),
  num("In the figure, w = su + tv. Find s.", 1.5, "t = 2 from the vertical steps, then 2s + 2 = 5.",
    vdoc({ view: { xmin: -0.5, xmax: 6, ymin: -0.5, ymax: 5 }, step: 1, arrows: [{ from: [0, 0], to: [2, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1, 2], color: "red", vl: "v", off: -16 }, { from: [0, 0], to: [5, 4], color: "green", vl: "w", off: -16 }] }), 0.001),
  num("In the figure, w = su + tv. Find t.", 1, "s − t = 1 and s + t = 3.",
    vdoc({ view: { xmin: -2, xmax: 3, ymin: -0.5, ymax: 4 }, step: 1, arrows: [{ from: [0, 0], to: [1, 1], vl: "u", off: 16 }, { from: [0, 0], to: [-1, 1], color: "red", vl: "v", off: -16 }, { from: [0, 0], to: [1, 3], color: "green", vl: "w", off: -16 }] })),
  mc(S`To prove $0\vec x=\vec 0$ one writes $0\vec x=(0+0)\vec x=0\vec x+0\vec x$. Which property gives the second equality?`, "distributivity over scalar addition", ["associativity of addition", "commutativity of addition", "1x = x"], "(c + d)x = cx + dx."),
  num(S`In $\mathbb R^5$ let $\vec x=(1,2,3,4,5)-2(0,1,0,1,0)+3\vec e_5$. Find the sum of the components of $\vec x$.`, 14, "x = (1, 0, 3, 2, 8)."),
  num(S`$a(1,-1,2,0)+b(0,1,1,1)+c(1,0,0,1)=(2,1,4,3)$. Find $c$.`, 1, "Solve the four equations: a = 1, b = 2, c = 1."),
  num("ABCDEF is a regular hexagon with centre O, u = OA and v = OB (figure). Writing OC = su + tv, find s.", -1, "OC = AB = v − u.",
    vdoc({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.3, ymax: 3.3 }, grid: false, axes: false, segs: [{ pts: [...HEX, HEX[0]], color: "gray" }], arrows: [{ from: [0, 0], to: HEX[0], vl: "u", off: -16 }, { from: [0, 0], to: HEX[1], color: "red", vl: "v", off: -16 }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX[i][0], y: HEX[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 2, dy: i < 3 ? -8 : 18 })).concat([{ x: 0, y: 0, label: "O", dx: 6, dy: 16 }]) })),
];
