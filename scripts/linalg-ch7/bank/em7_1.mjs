// 7.1 Matrix Transformations — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, imgQ, inputQ, inRangeQ } from "./gen7.mjs";

const easy = [
  num(S`$A$ is $3\times5$. $T(\vec x)=A\vec x$ maps $\mathbb R^n\to\mathbb R^m$. Find $n$.`, 5, "Columns = input size."),
  num(S`$A$ is $3\times5$. $T(\vec x)=A\vec x$ maps $\mathbb R^n\to\mathbb R^m$. Find $m$.`, 3, "Rows = output size.", F.mat([[1, 2, 0, 1, 3], [0, 1, 1, 2, 0], [2, 0, 1, 1, 1]], { label: "3 × 5" })),
  imgQ([[2, 1], [0, 3]], [1, 2], 0),
  imgQ([[2, 1], [0, 3]], [1, 2], 1, F.pt([[2, 1], [0, 3]], [1, 2])),
  imgQ([[1, -1], [2, 0], [0, 4]], [3, 1], 2),
  imgQ([[1, 0, 2], [3, -1, 1]], [1, 1, 1], 0),
  imgQ([[1, 0, 2], [3, -1, 1]], [2, 0, -1], 1),
  fill("The set of all images T(x) is called the ___ of T.", ["range", "image"], "Range = {T(x)} = Col A."),
  mc("The range of T(x) = Ax equals:", "Col A", ["Nul A", "Row A", "the codomain always"], "Ax is a combination of the columns."),
  inRangeQ([[1, 0], [0, 1]], [5, -2]),
  inRangeQ([[1, 2], [2, 4]], [1, 2]),
  inRangeQ([[1, 2], [2, 4]], [2, 5]),
  inputQ([[1, 0], [0, 2]], [3, 8], 1),
  inputQ([[1, 1], [0, 1]], [5, 2], 0),
  num(S`Under $T(\vec x)=${M([[3, 1], [1, 2]])}\vec x$, the corner $(1,1)$ of the unit square goes to $(a,b)$. Find $a$.`, 4, "Sum of the columns: (3 + 1, 1 + 2).", F.sq([[3, 1], [1, 2]])),
  num(S`Under $T(\vec x)=${M([[3, 1], [1, 2]])}\vec x$, $T(\vec e_2)=(a,b)$. Find $b$.`, 2, "T(e₂) is column 2."),
  tf(S`For $T(\vec x)=A\vec x$, $T(\vec 0)=\vec 0$.`, true, "A0 = 0."),
  tf(S`If $A$ is $2\times3$, then $T(\vec x)=A\vec x$ can be applied to vectors in $\mathbb R^2$.`, false, "Inputs must have 3 entries."),
  mc(S`$T(\vec x)=A\vec x=\vec b$ can have how many solutions $\vec x$?`, "0, 1 or infinitely many", ["always exactly 1", "always infinitely many", "at most 2"], "The same as any linear system."),
  imgQ([[0, -1], [1, 0]], [4, 3], 0),
];

const medium = [
  inputQ([[1, 2], [2, 5], [1, 3]], [4, 9, 5], 0),
  inputQ([[1, 2], [2, 5], [1, 3]], [4, 9, 5], 1, F.mat([[1, 2, 4], [2, 5, 9], [1, 3, 5]], { label: "[A | b]" })),
  inputQ([[2, 1], [1, 1]], [7, 4], 0),
  inputQ([[1, -1, 0], [0, 1, 1], [1, 0, 2]], [1, 3, 5], 2),
  inRangeQ([[1, -1], [2, 1], [0, 3]], [0, 3, 3]),
  inRangeQ([[1, -1], [2, 1], [0, 3]], [0, 3, 4], F.mat([[1, -1, 0], [2, 1, 3], [0, 3, 4]], { label: "[A | b]" })),
  inRangeQ([[1, 2, 1], [2, 4, 3]], [3, 7]),
  inRangeQ([[1, 3], [2, 6], [0, 1]], [2, 4, 5]),
  imgQ([[1, 2, -1], [0, 1, 3], [2, -1, 1]], [2, -1, 1], 1),
  imgQ([[1, 2, -1], [0, 1, 3], [2, -1, 1]], [2, -1, 1], 2),
  num(S`The unit square is mapped by $${M([[2, -1], [1, 3]])}$. Find the first coordinate of the image of $(1,1)$.`, 1, "A(1, 1) = column 1 + column 2 = (2 − 1, 1 + 3).", F.sq([[2, -1], [1, 3]])),
  num(S`The triangle $(0,0),(1,0),(0,1)$ is mapped by $${M([[1, 2], [3, 1]])}$. Find the second coordinate of the image of $(1,0)$.`, 3, "Column 1 = (1, 3).", F.shape([[1, 2], [3, 1]], [[0, 0], [1, 0], [0, 1]])),
  num(S`The line $\vec x=(1,0)+t(1,1)$ is mapped by $${M([[2, 0], [1, 1]])}$ to $\vec p+t\vec d$. Find the second entry of $\vec d$.`, 2, S`$\vec d=A(1,1)=${col([2, 2])}$.`),
  tf(S`$A(\vec p+t\vec d)=A\vec p+tA\vec d$ for every matrix $A$.`, true, "Distributive and scalar rules."),
  mc(S`The image of a line under $${M([[1, 1], [1, 1]])}$ along direction $(1,-1)$ is:`, "a single point", ["a line", "a plane", "the whole plane"], S`$A(1,-1)=(0,0)$, so every point of the line has the same image.`),
  num(S`For which $h$ is $(1,h)$ in the range of $${M([[1, 2], [3, 6]])}\vec x$?`, 3, "The range is the line through (1, 3)."),
  num(S`All inputs with $T(\vec x)=(4,5)$ for $A=${M([[1, 2, -1], [2, 4, 1]])}$ are $(3,0,-1)+t\vec d$. Find the first entry of $\vec d$ with second entry 1.`, -2, S`$\vec d$ solves $A\vec d=\vec 0$: $${M([[1, 2, -1], [2, 4, 1]])}${col([-2, 1, 0])}=${col([0, 0])}$.`),
  tf(S`If $A$ is $3\times2$, every $\vec b\in\mathbb R^3$ is in the range of $T(\vec x)=A\vec x$.`, false, "Two columns span at most a plane in ℝ³."),
  mc(S`Corners of a shape as the columns of $P$: the image corners are the columns of`, S`$AP$`, [S`$PA$`, S`$P^TA$`, S`$A+P$`], "Column j of AP is A times column j of P."),
  imgQ([[1, 1, 1, 1], [1, -1, 1, -1]], [1, 2, 3, 4], 1),
];

export const E = easy;
export { medium as M };
