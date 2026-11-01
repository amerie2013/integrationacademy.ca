// 5.5 Orthogonal and Orthonormal Bases — 20 easy + 20 medium questions
import { S, F, mc, num, tf, fill, orthoQ, orthoCoordQ } from "./gen5.mjs";

const easy = [
  orthoQ([[1, 2], [2, -1]]),
  orthoQ([[1, 1], [1, 2]]),
  tf(S`$\{(1,0),(0,1)\}$ is orthonormal.`, true, "Orthogonal, and both vectors have length 1."),
  num(S`What is the length of $(3,4)$?`, 5, "√(9 + 16)."),
  mc(S`Normalise $(0,5)$.`, S`$(0,1)$`, [S`$(0,5)$`, S`$(0,\tfrac15)$`, S`$(1,0)$`], "Divide by the length 5."),
  orthoCoordQ([[1, 1], [1, -1]], [4, 6], 0),
  orthoCoordQ([[1, 1], [1, -1]], [2, 6], 1),
  tf("An orthogonal set that contains the zero vector is linearly independent.", false, "Any set containing 0 is dependent."),
  fill("An orthogonal set of unit vectors is called ___.", ["orthonormal"], "Orthogonal + length 1."),
  tf("An orthogonal set of nonzero vectors is linearly independent.", true, "Dotting a combination equal to 0 with vᵢ gives cᵢ‖vᵢ‖² = 0."),
  orthoQ([[1, 0, 0], [0, 1, 1], [0, 1, -1]], F.v3([[[1, 0, 0], "(1, 0, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[0, 1, -1], "(0, 1, −1)"]])),
  num(S`Compute $(1,2,3)\cdot(3,0,-1)$.`, 0, "3 + 0 − 3 = 0: the vectors are orthogonal."),
  mc(S`In an orthogonal basis $\{\vec v_i\}$, the coordinate $c_i$ of $\vec x$ is:`, S`$\dfrac{\vec x\cdot\vec v_i}{\|\vec v_i\|^2}$`, [S`$\vec x\cdot\vec v_i$`, S`$\dfrac{\vec x\cdot\vec v_i}{\|\vec v_i\|}$`, S`$\|\vec x\|\,\|\vec v_i\|$`], "Dot x = Σcⱼvⱼ with vᵢ."),
  tf(S`$\{(1,1),(1,-1)\}$ is orthonormal.`, false, "It is orthogonal, but each vector has length √2."),
  orthoCoordQ([[2, 0], [0, 3]], [4, 9], 1),
  num(S`For which $k$ is $(1,k)$ orthogonal to $(4,2)$?`, -2, "4 + 2k = 0."),
  tf(S`The standard basis $\vec e_1,\dots,\vec e_n$ is orthonormal.`, true, "eᵢ·eⱼ = 0 for i ≠ j and ‖eᵢ‖ = 1."),
  num(S`What is the largest possible number of nonzero, mutually orthogonal vectors in $\mathbb R^4$?`, 4, "They are independent, and dim ℝ⁴ = 4."),
  mc(S`The length of $\tfrac1{\sqrt2}(1,1)$ is:`, "1", ["√2", "2", "½"], "‖(1, 1)‖ = √2, divided by √2."),
  orthoQ([[2, 1], [-1, 2]], F.v2([[[2, 1], "(2, 1)", "blue"], [[-1, 2], "(−1, 2)", "red"]], { xmin: -2, xmax: 3, ymin: -1, ymax: 3 })),
];

const medium = [
  orthoCoordQ([[1, 0, 1], [1, 1, -1], [-1, 2, 1]], [0, 1, 4], 0),
  orthoCoordQ([[1, 0, 1], [1, 1, -1], [-1, 2, 1]], [0, 1, 4], 1),
  orthoQ([[1, 2, -1], [1, 0, 1], [2, -1, 0]]),
  num(S`What is $\|(2,-1,2)\|$?`, 3, "√(4 + 1 + 4)."),
  mc("Which set is orthonormal?", S`$\{(\tfrac35,\tfrac45),(-\tfrac45,\tfrac35)\}$`, [S`$\{(3,4),(-4,3)\}$`, S`$\{(\tfrac35,\tfrac45),(\tfrac45,\tfrac35)\}$`, S`$\{(1,0),(1,1)\}$`], "Dot product −12/25 + 12/25 = 0 and both lengths are 1."),
  tf("The formula cᵢ = x·vᵢ/‖vᵢ‖² reproduces x even when x is not in the span of the orthogonal basis.", false, "Then Σcᵢvᵢ is a different vector (the projection of x onto the subspace)."),
  orthoCoordQ([[3, 4], [-4, 3]], [10, 5], 0),
  num(S`For which $k$ is $(1,2,k)$ orthogonal to $(2,1,-4)$?`, 1, "2 + 2 − 4k = 0."),
  tf(S`In an orthonormal basis $\{\vec w_i\}$, the coordinates of $\vec x$ are $\vec x\cdot\vec w_i$.`, true, "The denominators ‖wᵢ‖² equal 1."),
  num(S`$\vec x$ has coordinates $(3,4)$ in an orthonormal basis. Find $\|\vec x\|$.`, 5, "‖x‖² = 3² + 4²."),
  orthoQ([[1, 1, 0], [1, -1, 1], [-1, 1, 2]], F.v3([[[1, 1, 0], "(1, 1, 0)"], [[1, -1, 1], "(1, −1, 1)"], [[-1, 1, 2], "(−1, 1, 2)"]])),
  mc(S`Which vector is orthogonal to both $(1,1,1)$ and $(1,-1,0)$?`, S`$(1,1,-2)$`, [S`$(1,-1,1)$`, S`$(1,1,1)$`, S`$(0,0,1)$`], "1 + 1 − 2 = 0 and 1 − 1 + 0 = 0."),
  tf("Three nonzero, mutually orthogonal vectors in ℝ³ form a basis of ℝ³.", true, "They are independent, and three independent vectors span ℝ³."),
  num(S`Find the second coordinate of $\vec x=(2,3)$ in the orthonormal basis $\{(0,1),(1,0)\}$.`, 2, "x·(1, 0) = 2."),
  orthoCoordQ([[1, 1, 0], [1, -1, 2]], [4, 2, 2], 1, F.plane([1, 1, 0], [1, -1, 2], { lu: "v₁", lv: "v₂", more: [[[4, 2, 2], "x", "green"]], len: 4 })),
  tf(S`If $\vec u\cdot\vec v=0$, then $\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2$.`, true, "Expand: the cross term 2u·v is 0."),
  num("How many dot products must be checked to show that 4 vectors form an orthogonal set?", 6, "One per pair: 4·3/2."),
  mc(S`Normalise $(1,1,1,1)$.`, S`$\tfrac12(1,1,1,1)$`, [S`$\tfrac14(1,1,1,1)$`, S`$(1,1,1,1)$`, S`$\tfrac1{\sqrt2}(1,1,1,1)$`], "Its length is √4 = 2."),
  num(S`For which $a$ is $(a,2)$ orthogonal to $(4,-a)$?`, 0, "4a − 2a = 2a = 0."),
  tf("The vectors (2, 1) and (−2, 4) in the figure are orthogonal.", true, "−4 + 4 = 0.", F.v2([[[2, 1], "(2, 1)", "blue"], [[-2, 4], "(−2, 4)", "red"]], { xmin: -3, xmax: 3, ymin: -1, ymax: 5 })),
];

export const E = easy;
export const M = medium;
