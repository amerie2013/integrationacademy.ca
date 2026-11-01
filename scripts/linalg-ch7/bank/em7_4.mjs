// 7.4 Geometric Transformations of the Plane — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, rotQ, projQ, reflQ, imgQ } from "./gen7.mjs";

const easy = [
  rotQ(90, [3, 1], 0, F.pt([[0, -1], [1, 0]], [3, 1])),
  rotQ(90, [3, 1], 1),
  rotQ(180, [2, -5], 1),
  num(S`Find the $(1,2)$ entry of $R_{90^\circ}$.`, -1, S`$R_{90^\circ}=${M([[0, -1], [1, 0]])}$.`),
  imgQ([[1, 0], [0, -1]], [4, 3], 1, F.pt([[1, 0], [0, -1]], [4, 3])),
  imgQ([[-1, 0], [0, 1]], [4, 3], 0),
  imgQ([[0, 1], [1, 0]], [2, 7], 0),
  imgQ([[0, -1], [-1, 0]], [2, 7], 1),
  projQ(1, [3, 1], 0),
  projQ(0, [4, 7], 1),
  imgQ([[1, 3], [0, 1]], [1, 2], 0),
  imgQ([[1, 0], [2, 1]], [3, 1], 1),
  imgQ([[3, 0], [0, 3]], [2, -1], 0),
  mc("The matrix [0 1; 1 0] is:", "the reflection in x₂ = x₁", ["the rotation by 90°", "a shear", "a projection"], "It swaps the coordinates."),
  mc("The matrix [1 2; 0 1] is:", "a horizontal shear", ["a vertical shear", "a rotation", "a reflection"], "e₁ stays, e₂ → (2, 1)."),
  fill("A projection matrix P satisfies P² = ___.", ["P"], "Projecting twice changes nothing more."),
  tf("A rotation keeps lengths.", true, "RᵀR = I."),
  tf("A shear changes areas.", false, "Its determinant is 1."),
  num(S`$\cos\theta$ is the $(1,1)$ entry of $R_\theta$. Find the $(1,1)$ entry of $R_{60^\circ}$.`, 0.5, "cos 60°.", undefined, 0.001),
  num(S`The dilation $kI$ sends $(1,2)$ to $(3,6)$. Find $k$.`, 3, "Each entry ×3."),
];

const medium = [
  rotQ(60, [4, 2], 0, F.pt([[0.5, -0.866], [0.866, 0.5]], [4, 2])),
  rotQ(45, [2, 0], 1),
  rotQ(120, [0, 2], 0),
  rotQ(-90, [5, 1], 1),
  projQ(2, [3, 1], 1, F.v2([[[3, 1], "x", "blue"], [[1, 2], "Px", "violet"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, { segs: [{ pts: [[-0.5, -1], [2, 4]], color: "green", w: 2.4 }] })),
  projQ(3, [5, 5], 0),
  projQ(-1, [3, 1], 0),
  reflQ(2, [3, 1], 0),
  reflQ(3, [5, 5], 1),
  reflQ(1, [4, -2], 0),
  num(S`Find the $(1,2)$ entry of the projection onto $x_2=2x_1$. (Decimal.)`, 0.4, S`$\tfrac15${M([[1, 2], [2, 4]])}$: $\tfrac25$.`, undefined, 0.001),
  num(S`Find the $(2,2)$ entry of the reflection in $x_2=2x_1$. (Decimal.)`, 0.6, S`$\tfrac15${M([[-3, 4], [4, 3]])}$: $\tfrac35$.`, undefined, 0.001),
  num(S`The unit square under the shear $${M([[1, -2], [0, 1]])}$ has corner $(1,1)\mapsto(a,b)$. Find $a$.`, -1, "1 − 2.", F.sq([[1, -2], [0, 1]])),
  num(S`Area of the image of the unit square under $\operatorname{diag}(3,\tfrac12)$? (Decimal.)`, 1.5, "3 · ½.", undefined, 0.001),
  mc(S`$A=${M([[0, 1], [-1, 0]])}$ is`, "rotation by 90° clockwise", ["rotation by 90° counterclockwise", "reflection in x₂ = −x₁", "a shear"], "e₁ → (0, −1), e₂ → (1, 0)."),
  mc(S`$A=\tfrac12${M([[1, 1], [1, 1]])}$ is`, S`the projection onto $x_2=x_1$`, [S`the reflection in $x_2=x_1$`, S`a rotation by $45^\circ$`, "a shear"], "A = uuᵀ with u = (1,1)/√2."),
  tf(S`For a reflection $R$, $R^2=I$.`, true, "Reflect twice: back to start."),
  tf(S`For a projection $P$ onto a line, $\det P=0$.`, true, "The plane is flattened onto the line."),
  num(S`$R_{30^\circ}$ applied 6 times is $R_{\theta}$. Find $\theta$ in degrees.`, 180, "6 · 30."),
  num(S`The reflection in the line at angle $30^\circ$ has $(1,1)$ entry $\cos60^\circ$. Give it.`, 0.5, S`$${M([["\\cos2\\theta", "\\sin2\\theta"], ["\\sin2\\theta", "-\\cos2\\theta"]])}$ with $2\theta=60^\circ$.`, undefined, 0.001),
];

export const E = easy;
export { medium as M };
