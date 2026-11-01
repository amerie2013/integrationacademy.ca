// LINALG1 chapter 9 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution in matrix form (every row operation followed by the whole matrix, every product written out
// entry by entry) with the marks per part.
//   node scripts/linalg-ch9/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch9/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen9.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "9.1 Orthogonal Complements", 2: "9.2 Orthogonal Matrices", 3: "9.3 Orthogonal Projection onto a Subspace",
  4: "9.4 Projection Matrices and the Normal Equations", 5: "9.5 The Gram–Schmidt Process", 6: "9.6 QR Factorisation", 7: "9.7 Least-Squares Problems",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt: prompt.replace(/\\\(|\\\)/g, "$"), feedback: feedback.replace(/\\\(|\\\)/g, "$"), kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const R = (...a) => am([a], false);

// systems used below (homogeneous ones without a right-hand column); CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  perp: [[1, 2, -1], [2, 5, 0]],
  nul: [[1, 2, 0, 1], [2, 4, 1, 4], [1, 2, 1, 3]],
  ne4: [[5, 1, 7], [1, 5, 5]],
  ne7: [[4, 6, 8], [6, 14, 17]],
  par: [[5, 0, 10, 15], [0, 10, 0, -10], [10, 0, 34, 44]],
  ls6: [[9, 18, 15], [18, 45, 33]],
};
const CHECK = [["perp", [5, -2, 1]], ["nul", [-2, 1, 0, 0]], ["nul", [-1, 0, -2, 1]], ["ne4", [1.25, 0.75]], ["ne7", [0.5, 1]], ["par", [1, -1, 1]], ["ls6", [1, 1 / 3]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let \(W=\operatorname{span}\{(1,2,-1),(2,5,0)\}\) in \(\mathbb R^3\). (a) Find a basis of \(W^\perp\) by solving \(A\vec x=\vec 0\), where the rows of \(A\) span \(W\). (b) Write \(\vec y=(6,-1,4)\) as \(\hat y+\vec z\) with \(\hat y\in W\), \(\vec z\in W^\perp\). (c) Check \(\dim W+\dim W^\perp=3\).`,
    S`(a) ${stepsLine(SYS.perp, { aug: false })} \(x_3\) free: \(x_1=5x_3\), \(x_2=-2x_3\), so \(W^\perp=\operatorname{span}\{\vec n\}\), \(\vec n=(5,-2,1)\). Check \(A\vec n=${M(SYS.perp)}${C(5, -2, 1)}=${C("5-4-1", "10-10+0")}=${C(0, 0)}\) ✓. (b) \(\vec z=\dfrac{\vec y\cdot\vec n}{\vec n\cdot\vec n}\vec n=\dfrac{30+2+4}{25+4+1}\vec n=1.2\,\vec n=(6,-2.4,1.2)\); \(\hat y=\vec y-\vec z=(0,1.4,2.8)=-2.8(1,2,-1)+1.4(2,5,0)\in W\). (c) \(\dim W=\operatorname{rank}A=2\), \(\dim W^\perp=1\): \(2+1=3\) ✓. [2, 1.5, 0.5.]`,
    F.v3([[[1, 2, -1], "a₁", "blue"], [[2, 5, 0], "a₂", "blue"], [[5, -2, 1], "n", "red"]])),
  W(1, "hard", 5, S`Let \(A=${M(SYS.nul)}\). (a) Find a basis of \(\operatorname{Nul}A\) and of \(\operatorname{Row}A\). (b) Verify with a matrix product that every basis vector of \(\operatorname{Nul}A\) is orthogonal to every basis vector of \(\operatorname{Row}A\). (c) Prove that \((\operatorname{Row}A)^\perp=\operatorname{Nul}A\) for any matrix \(A\).`,
    S`(a) ${stepsLine(SYS.nul, { aug: false })} Row \(A\) has basis \((1,2,0,1)\), \((0,0,1,2)\). Free \(x_2,x_4\): \(x_1=-2x_2-x_4\), \(x_3=-2x_4\): Nul \(A\) has basis \((-2,1,0,0)\), \((-1,0,-2,1)\). (b) \(${M([[1, 2, 0, 1], [0, 0, 1, 2]])}${M([[-2, -1], [1, 0], [0, -2], [0, 1]])}=${M([["-2+2+0+0", "-1+0+0+1"], ["0+0+0+0", "0+0-2+2"]])}=${M([[0, 0], [0, 0]])}\) ✓. (c) \(A\vec x\) has entries \(\vec r_i\cdot\vec x\) for the rows \(\vec r_i\). So \(A\vec x=\vec 0\iff\vec x\perp\) every row \(\iff\vec x\perp\) every combination of rows \(\iff\vec x\in(\operatorname{Row}A)^\perp\). [2, 1, 2.]`,
    F.mat(SYS.nul, { label: "A" })),
  W(2, "medium", 4, S`Let \(Q=\tfrac13${M([[-1, 2, 2], [2, -1, 2], [2, 2, -1]])}\). (a) Show \(Q\) is orthogonal by computing \(Q^TQ\). (b) Solve \(Q\vec x=(3,6,9)\) without row reduction. (c) Check \(|\vec x|=|\vec b|\) and explain why it must hold.`,
    S`(a) \(Q^T=Q\), so \(Q^TQ=\tfrac19${M([[-1, 2, 2], [2, -1, 2], [2, 2, -1]])}${M([[-1, 2, 2], [2, -1, 2], [2, 2, -1]])}=\tfrac19${M([["1+4+4", "-2-2+4", "-2+4-2"], ["-2-2+4", "4+1+4", "4-2-2"], ["-2+4-2", "4-2-2", "4+4+1"]])}=I\) ✓. (b) \(\vec x=Q^T\vec b=\tfrac13${M([[-1, 2, 2], [2, -1, 2], [2, 2, -1]])}${C(3, 6, 9)}=\tfrac13${C("-3+12+18", "6-6+18", "6+12-9")}=${C(9, 6, 3)}\). (c) \(|\vec x|^2=81+36+9=126=9+36+81=|\vec b|^2\) ✓; \(|Q\vec x|^2=\vec x^TQ^TQ\vec x=\vec x^T\vec x\). [2, 1, 1.]`,
    F.mat([[-1, 2, 2], [2, -1, 2], [2, 2, -1]], { label: "3Q" })),
  W(2, "hard", 5, S`Let \(U=\tfrac13${M([[2, 2], [-1, 2], [2, -1]])}\). (a) Show \(U^TU=I\). (b) Compute \(UU^T\) and show it is not \(I\); what does it do to \(\mathbb R^3\)? (c) Prove that a square matrix \(Q\) with \(Q^TQ=I\) has \(\det Q=\pm1\) and preserves dot products.`,
    S`(a) \(U^TU=\tfrac19${M([[2, -1, 2], [2, 2, -1]])}${M([[2, 2], [-1, 2], [2, -1]])}=\tfrac19${M([["4+1+4", "4-2-2"], ["4-2-2", "4+4+1"]])}=${M([[1, 0], [0, 1]])}\) ✓. (b) \(UU^T=\tfrac19${M([[2, 2], [-1, 2], [2, -1]])}${M([[2, -1, 2], [2, 2, -1]])}=\tfrac19${M([["4+4", "-2+4", "4-2"], ["-2+4", "1+4", "-2-2"], ["4-2", "-2-2", "4+1"]])}=\tfrac19${M([[8, 2, 2], [2, 5, -4], [2, -4, 5]])}\ne I\) (trace 2); it is the orthogonal projection onto \(\operatorname{Col}U\). (c) \(1=\det(Q^TQ)=(\det Q)^2\), so \(\det Q=\pm1\); \((Q\vec x)\cdot(Q\vec y)=\vec x^TQ^TQ\vec y=\vec x\cdot\vec y\). [1, 2, 2.]`,
    F.v3([[[2, -1, 2], "u₁", "blue"], [[2, 2, -1], "u₂", "red"]])),
  W(3, "medium", 4, S`Let \(\vec u_1=(1,1,1)\), \(\vec u_2=(1,-2,1)\) and \(\vec y=(3,0,6)\). (a) Check that \(\{\vec u_1,\vec u_2\}\) is orthogonal. (b) Find \(\hat y=\operatorname{proj}_W\vec y\) for \(W=\operatorname{span}\{\vec u_1,\vec u_2\}\). (c) Verify \(\vec y-\hat y\perp W\) and find the distance from \(\vec y\) to \(W\).`,
    S`(a) \(\vec u_1\cdot\vec u_2=1-2+1=0\). (b) \(\hat y=\dfrac{3+0+6}{3}${C(1, 1, 1)}+\dfrac{3-0+6}{6}${C(1, -2, 1)}=${C(3, 3, 3)}+${C(1.5, -3, 1.5)}=${C(4.5, 0, 4.5)}\). (c) \(\vec z=\vec y-\hat y=(-1.5,0,1.5)\); \(${M([[1, 1, 1], [1, -2, 1]])}${C(-1.5, 0, 1.5)}=${C("-1.5+0+1.5", "-1.5+0+1.5")}=${C(0, 0)}\) ✓. Distance \(|\vec z|=\sqrt{2.25+2.25}=1.5\sqrt2\approx2.121\). [0.5, 2, 1.5.]`,
    F.pp([1, 1, 1], [1, -2, 1], [3, 0, 6], [4.5, 0, 4.5])),
  W(3, "hard", 5, S`In \(\mathbb R^4\), let \(\vec u_1=(1,1,0,0)\), \(\vec u_2=(0,0,1,1)\), \(\vec u_3=(1,-1,1,-1)\), \(W=\operatorname{span}\{\vec u_1,\vec u_2,\vec u_3\}\) and \(\vec y=(4,2,1,5)\). (a) Find the point of \(W\) closest to \(\vec y\). (b) Find the distance and a basis of \(W^\perp\). (c) Prove that \(\hat y\) is the closest point: \(|\vec y-\vec w|>|\vec y-\hat y|\) for every \(\vec w\in W\), \(\vec w\ne\hat y\).`,
    S`(a) The \(\vec u_i\) are orthogonal (\(0\), \(1-1\), \(1-1\)). \(\hat y=\tfrac62\vec u_1+\tfrac62\vec u_2+\tfrac{4-2+1-5}{4}\vec u_3=${C(3, 3, 0, 0)}+${C(0, 0, 3, 3)}+${C(-0.5, 0.5, -0.5, 0.5)}=${C(2.5, 3.5, 2.5, 3.5)}\). (b) \(\vec z=\vec y-\hat y=(1.5,-1.5,-1.5,1.5)\); \(${M([[1, 1, 0, 0], [0, 0, 1, 1], [1, -1, 1, -1]])}${C(1.5, -1.5, -1.5, 1.5)}=${C("1.5-1.5", "-1.5+1.5", "1.5+1.5-1.5-1.5")}=${C(0, 0, 0)}\) ✓; distance \(\sqrt{4(2.25)}=3\); \(W^\perp=\operatorname{span}\{(1,-1,-1,1)\}\). (c) \(\vec y-\vec w=(\vec y-\hat y)+(\hat y-\vec w)\) with \(\vec y-\hat y\in W^\perp\), \(\hat y-\vec w\in W\); Pythagoras: \(|\vec y-\vec w|^2=|\vec y-\hat y|^2+|\hat y-\vec w|^2>|\vec y-\hat y|^2\). [2, 1.5, 1.5.]`,
    F.mat([[1, 0, 1], [1, 0, -1], [0, 1, 1], [0, 1, -1]], { label: "U" })),
  W(4, "medium", 4, S`Let \(A=${M([[2, 0], [1, 1], [0, 2]])}\) and \(\vec y=(2,3,1)\). (a) Write and solve the normal equations \(A^TA\hat x=A^T\vec y\). (b) Find \(\hat y=A\hat x\) and the error \(\vec e=\vec y-\hat y\). (c) Verify \(A^T\vec e=\vec 0\).`,
    S`(a) \(A^TA=${M([[2, 1, 0], [0, 1, 2]])}${M([[2, 0], [1, 1], [0, 2]])}=${M([["4+1+0", "0+1+0"], ["0+1+0", "0+1+4"]])}=${M([[5, 1], [1, 5]])}\), \(A^T\vec y=${C("4+3+0", "0+3+2")}=${C(7, 5)}\). ${stepsLine(SYS.ne4)} \(\hat x=(1.25,0.75)\). (b) \(\hat y=${M([[2, 0], [1, 1], [0, 2]])}${C(1.25, 0.75)}=${C("2.5+0", "1.25+0.75", "0+1.5")}=${C(2.5, 2, 1.5)}\), \(\vec e=(-0.5,1,-0.5)\). (c) \(${M([[2, 1, 0], [0, 1, 2]])}${C(-0.5, 1, -0.5)}=${C("-1+1+0", "0+1-1")}=${C(0, 0)}\) ✓. [2, 1, 1.]`,
    F.pp([2, 1, 0], [0, 1, 2], [2, 3, 1], [2.5, 2, 1.5], { names: ["y", "ŷ"] })),
  W(4, "hard", 5, S`Let \(\vec a=(1,2,2)\). (a) Find the projection matrix \(P\) onto \(\operatorname{span}\{\vec a\}\) and verify \(P^2=P\). (b) Find the projection matrix onto the plane \(x_1+2x_2+2x_3=0\) and project \(\vec y=(3,3,0)\) onto the line and onto the plane. (c) Prove that a projection matrix can only have eigenvalues 0 and 1, and give the eigenvalues of \(P\).`,
    S`(a) \(P=\dfrac{\vec a\vec a^T}{\vec a^T\vec a}=\tfrac19${M([[1, 2, 2], [2, 4, 4], [2, 4, 4]])}\). \(P^2=\dfrac{\vec a(\vec a^T\vec a)\vec a^T}{81}=\dfrac{9\,\vec a\vec a^T}{81}=P\) ✓. (b) \(I-P=\tfrac19${M([[8, -2, -2], [-2, 5, -4], [-2, -4, 5]])}\). \(P\vec y=\tfrac19${C("3+6+0", "6+12+0", "6+12+0")}=${C(1, 2, 2)}\); \((I-P)\vec y=\tfrac19${C("24-6+0", "-6+15+0", "-6-12+0")}=${C(2, 1, -2)}\), and \((2,1,-2)\cdot(1,2,2)=2+2-4=0\) ✓. (c) \(P\vec v=\lambda\vec v\Rightarrow P^2\vec v=\lambda^2\vec v=\lambda\vec v\Rightarrow\lambda^2=\lambda\), so \(\lambda\in\{0,1\}\). \(P\) has eigenvalues \(1,0,0\) (trace \(1\) = rank). [1.5, 2, 1.5.]`,
    F.v3([[[1, 2, 2], "a", "blue"], [[3, 3, 0], "y", "green"], [[2, 1, -2], "(I−P)y", "red"]])),
  W(5, "medium", 4, S`(a) Apply Gram–Schmidt to \(\vec v_1=(3,1)\), \(\vec v_2=(2,4)\). (b) Normalise to an orthonormal basis \(\{\vec q_1,\vec q_2\}\). (c) Verify \(Q^TQ=I\) for \(Q=[\vec q_1\ \vec q_2]\).`,
    S`(a) \(\vec w_1=(3,1)\); \(\vec w_2=\vec v_2-\dfrac{6+4}{9+1}\vec w_1=${C(2, 4)}-${C(3, 1)}=${C(-1, 3)}\); check \(\vec w_1\cdot\vec w_2=-3+3=0\). (b) \(|\vec w_1|=|\vec w_2|=\sqrt{10}\): \(\vec q_1=\tfrac1{\sqrt{10}}(3,1)\), \(\vec q_2=\tfrac1{\sqrt{10}}(-1,3)\). (c) \(Q^TQ=\tfrac1{10}${M([[3, 1], [-1, 3]])}${M([[3, -1], [1, 3]])}=\tfrac1{10}${M([["9+1", "-3+3"], ["-3+3", "1+9"]])}=I\) ✓. [2, 1, 1.]`,
    F.gs([3, 1], [2, 4])),
  W(5, "hard", 5, S`Let \(\vec v_1=(1,1,0)\), \(\vec v_2=(2,0,1)\), \(\vec v_3=(0,1,2)\). (a) Apply Gram–Schmidt (scale to integer vectors where convenient). (b) Verify that \(W^TW\) is diagonal for \(W=[\vec w_1\ \vec w_2\ \vec w_3]\). (c) Prove that \(\operatorname{span}\{\vec w_1,\vec w_2\}=\operatorname{span}\{\vec v_1,\vec v_2\}\).`,
    S`(a) \(\vec w_1=(1,1,0)\). \(\vec w_2=\vec v_2-\tfrac22\vec w_1=(1,-1,1)\). \(\vec v_3-\tfrac12\vec w_1-\tfrac{0-1+2}{3}\vec w_2=${C(0, 1, 2)}-${C("\\tfrac12", "\\tfrac12", 0)}-${C("\\tfrac13", "-\\tfrac13", "\\tfrac13")}=${C("-\\tfrac56", "\\tfrac56", "\\tfrac53")}\); scale by \(\tfrac65\): \(\vec w_3=(-1,1,2)\). (b) \(W^TW=${M([[1, 1, 0], [1, -1, 1], [-1, 1, 2]])}${M([[1, 1, -1], [1, -1, 1], [0, 1, 2]])}=${M([["1+1+0", "1-1+0", "-1+1+0"], ["1-1+0", "1+1+1", "-1-1+2"], ["-1+1+0", "-1-1+2", "1+1+4"]])}=${M([[2, 0, 0], [0, 3, 0], [0, 0, 6]])}\) ✓. (c) \(\vec w_2=\vec v_2-c\vec v_1\in\operatorname{span}\{\vec v_1,\vec v_2\}\), and \(\vec v_2=\vec w_2+c\vec w_1\in\operatorname{span}\{\vec w_1,\vec w_2\}\); each span contains the other. [2.5, 1, 1.5.]`,
    F.v3([[[1, 1, 0], "v₁", "blue"], [[2, 0, 1], "v₂", "blue"], [[0, 1, 2], "v₃", "blue"], [[-1, 1, 2], "w₃", "red"]])),
  W(6, "medium", 4, S`Let \(A=${M([[3, -1], [4, 7]])}\). (a) Find the QR factorisation of \(A\). (b) Verify \(QR=A\). (c) Solve \(A\vec x=(5,15)\) using \(R\vec x=Q^T\vec b\).`,
    S`(a) \(r_{11}=|(3,4)|=5\), \(\vec q_1=\tfrac15(3,4)\); \(r_{12}=\vec q_1\cdot(-1,7)=\tfrac{-3+28}5=5\); \(\vec w_2=(-1,7)-5\vec q_1=(-4,3)\), \(r_{22}=5\), \(\vec q_2=\tfrac15(-4,3)\). \(Q=\tfrac15${M([[3, -4], [4, 3]])}\), \(R=${M([[5, 5], [0, 5]])}\). (b) \(QR=\tfrac15${M([["15+0", "15-20"], ["20+0", "20+15"]])}=${M([[3, -1], [4, 7]])}\) ✓. (c) \(Q^T\vec b=\tfrac15${C("15+60", "-20+45")}=${C(15, 5)}\); \(5x_2=5\Rightarrow x_2=1\), \(5x_1+5=15\Rightarrow x_1=2\). Check \(A${C(2, 1)}=${C("6-1", "8+7")}=${C(5, 15)}\) ✓. [2, 1, 1.]`,
    F.gs([3, 4], [-1, 7])),
  W(6, "hard", 5, S`Let \(A=${M([[1, 4], [2, 2], [2, 5]])}\) and \(\vec b=(3,3,3)\). (a) Find the QR factorisation of \(A\) and verify it. (b) Find the least-squares solution of \(A\vec x=\vec b\) from \(R\hat x=Q^T\vec b\), and check it against the normal equations. (c) Prove that \(A^TA=R^TR\).`,
    S`(a) \(r_{11}=3\), \(\vec q_1=\tfrac13(1,2,2)\); \(r_{12}=\tfrac{4+4+10}3=6\); \(\vec w_2=(4,2,5)-2(1,2,2)=(2,-2,1)\), \(r_{22}=3\). \(Q=\tfrac13${M([[1, 2], [2, -2], [2, 1]])}\), \(R=${M([[3, 6], [0, 3]])}\); \(QR=\tfrac13${M([["3+0", "6+6"], ["6+0", "12-6"], ["6+0", "12+3"]])}=A\) ✓. (b) \(Q^T\vec b=\tfrac13${C("3+6+6", "6-6+3")}=${C(5, 1)}\): \(3\hat x_2=1\), \(3\hat x_1+6\cdot\tfrac13=5\): \(\hat x=(1,\tfrac13)\). Normal equations \(${M([[9, 18], [18, 45]])}\hat x=${C(15, 33)}\): ${stepsLine(SYS.ls6)} ✓. (c) \(A^TA=(QR)^T(QR)=R^TQ^TQR=R^TR\) since \(Q^TQ=I\). [2, 2, 1.]`,
    F.mat([[1, 4], [2, 2], [2, 5]], { label: "A" })),
  W(7, "medium", 4, S`Fit a least-squares line \(y=\beta_0+\beta_1x\) to \((0,1),(1,1),(2,2),(3,4)\). (a) Write the design matrix and the normal equations. (b) Solve them. (c) Give the residuals and SSE, and check \(X^T\vec e=\vec 0\).`,
    S`(a) \(X=${M([[1, 0], [1, 1], [1, 2], [1, 3]])}\), \(X^TX=${M([["1+1+1+1", "0+1+2+3"], ["0+1+2+3", "0+1+4+9"]])}=${M([[4, 6], [6, 14]])}\), \(X^T\vec y=${C("1+1+2+4", "0+1+4+12")}=${C(8, 17)}\). (b) ${stepsLine(SYS.ne7)} \(y=0.5+x\). (c) Predictions \(0.5,1.5,2.5,3.5\); \(\vec e=(0.5,-0.5,-0.5,0.5)\), SSE \(=4(0.25)=1\). \(X^T\vec e=${R(1, 1, 1, 1)}\vec e,\ ${R(0, 1, 2, 3)}\vec e=(0.5-0.5-0.5+0.5,\ 0-0.5-1+1.5)=(0,0)\) ✓. [1.5, 1.5, 1.]`,
    F.lsq([[0, 1], [1, 1], [2, 2], [3, 4]], 0.5, 1)),
  W(7, "hard", 5, S`Fit \(y=\beta_0+\beta_1x+\beta_2x^2\) to \((-2,6),(-1,5),(0,1),(1,-1),(2,4)\). (a) Write \(X\), \(X^TX\) and \(X^T\vec y\). (b) Solve the normal equations by row reduction. (c) Find the residuals and SSE, verify \(X^T\vec e=\vec 0\), and explain why no other parabola has a smaller SSE.`,
    S`(a) Rows of \(X\): \((1,x_i,x_i^2)\). \(X^TX=${M([[5, 0, 10], [0, 10, 0], [10, 0, 34]])}\) (\(\sum x=0\), \(\sum x^2=10\), \(\sum x^3=0\), \(\sum x^4=34\)); \(X^T\vec y=(6+5+1-1+4,\ -12-5+0-1+8,\ 24+5+0-1+16)=(15,-10,44)\). (b) ${stepsLine(SYS.par)} \(y=1-x+x^2\). (c) Predictions \(7,3,1,1,3\); \(\vec e=(-1,2,0,-2,1)\), SSE \(=1+4+0+4+1=10\). \(X^T\vec e=(-1+2+0-2+1,\ 2-2+0-2+2,\ -4+2+0-2+4)=(0,0,0)\) ✓. \(X\hat\beta\) is the projection of \(\vec y\) onto \(\operatorname{Col}X\), the closest point, so SSE \(=|\vec y-X\vec\beta|^2\) is minimal at \(\hat\beta\). [1.5, 2, 1.5.]`,
    F.mat([[5, 0, 10], [0, 10, 0], [10, 0, 34]], { label: "XᵀX" })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  let bad = 0;
  for (const [k, x] of CHECK) {
    const rows = SYS[k], aug = rows[0].length === x.length ? rows.map((r) => [...r, 0]) : rows;
    if (!solves(aug, x)) { bad++; console.log(`FAIL: ${x} does not solve ${k}`); }
  }
  if (bad) process.exit(1);
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "LINALG1").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures; all solutions check`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  for (const w of todo) {
    const key = `linalg1-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
