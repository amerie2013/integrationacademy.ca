// 8.2 The Characteristic Equation — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, eig2Q, eig3Q, cplxQ } from "./gen8.mjs";

const easy = [
  eig2Q([[4, 1], [2, 3]], "max"),
  eig2Q([[4, 1], [2, 3]], "min"),
  eig2Q([[1, 4], [2, 3]], "max", F.eig([[1, 4], [2, 3]], [[[1, 1], 5], [[2, -1], -1]])),
  eig2Q([[0, 1], [-6, 5]], "min"),
  eig2Q([[5, -2], [4, -1]], "max"),
  num(S`Find the trace of $${M([[3, 7], [-1, 5]])}$.`, 8, "3 + 5."),
  num(S`A $2\times2$ matrix has eigenvalues 3 and $-2$. Find its determinant.`, -6, "Product of eigenvalues."),
  num(S`A $2\times2$ matrix has eigenvalues 3 and $-2$. Find its trace.`, 1, "Sum of eigenvalues."),
  fill("For a 2 × 2 matrix, det(A − λI) = λ² − (___)λ + det A.", ["tr A", "trace A", "trace", "tr(A)", "the trace"], "The coefficient of λ is minus the trace."),
  mc("det(A − λI) = 0 is called the:", "characteristic equation", ["eigen equation", "normal equation", "determinant equation"], "Its roots are the eigenvalues."),
  num(S`$\det(A-\lambda I)=(2-\lambda)^3(5-\lambda)$. Find the algebraic multiplicity of 2.`, 3, "Exponent 3."),
  num(S`$\det(A-\lambda I)=(2-\lambda)^3(5-\lambda)$. Find $\det A$.`, 40, "Put λ = 0: 8 · 5."),
  tf(S`$${M([[0, -1], [1, 0]])}$ has real eigenvalues.`, false, "λ² + 1 = 0.", F.sq([[0, -1], [1, 0]])),
  tf("Similar matrices have the same characteristic polynomial.", true, "det(P⁻¹(A − λI)P) = det(A − λI)."),
  num(S`The characteristic polynomial of a $5\times5$ matrix has degree`, 5, "n."),
  num(S`Find the larger eigenvalue of $${M([[2, 0], [7, 6]])}$.`, 6, "Triangular."),
  cplxQ([[0, -1], [1, 0]], "im"),
  num(S`A $3\times3$ matrix has eigenvalues $1,2,4$. Find $\det A$.`, 8, "1 · 2 · 4."),
  tf(S`$\det(A-\lambda I)=\det A-\lambda$.`, false, "The determinant is not linear like that."),
  num(S`$\operatorname{tr}A=6$, $\det A=9$ ($2\times2$). Find the (repeated) eigenvalue.`, 3, "λ² − 6λ + 9 = (λ − 3)²."),
];

const medium = [
  eig3Q([[1, 1, 0], [1, 2, 1], [0, 1, 1]], [0, 1, 3], "max", F.mat([[1, 1, 0], [1, 2, 1], [0, 1, 1]], { label: "A" })),
  eig3Q([[5, 1, 0], [0, 5, 0], [2, 0, 3]], [5, 5, 3], "min"),
  eig3Q([[2, 0, 1], [0, 3, 0], [1, 0, 2]], [1, 3, 3], "min"),
  eig3Q([[1, 2, 0], [2, 1, 0], [0, 0, -1]], [-1, -1, 3], "max"),
  eig3Q([[4, -1, 6], [2, 1, 6], [2, -1, 8]], [2, 2, 9], "max"),
  eig2Q([[2, 3], [3, -6]], "min"),
  eig2Q([[7, 2], [-4, 1]], "min"),
  cplxQ([[1, -2], [1, 3]], "re"),
  cplxQ([[1, -2], [1, 3]], "mod", F.orb([[0.5, -0.4], [0.2, 0.7]], [3, 0], 8)),
  cplxQ([[2, -5], [1, 0]], "im"),
  num(S`For which $k$ is 5 an eigenvalue of $${M([[3, "k"], [1, 3]])}$?`, 4, S`$\det(A-5I)=4-k=0$.`),
  num(S`For which $k$ is 0 an eigenvalue of $${M([[1, "k"], [2, 4]])}$?`, 2, "det = 4 − 2k."),
  num(S`For which $k$ does $${M([[1, "k"], [1, 1]])}$ have a repeated eigenvalue?`, 0, S`$(1-\lambda)^2-k$: discriminant $4k=0$.`),
  num(S`A $2\times2$ matrix has trace 5 and eigenvalue 2. Find $\det A$.`, 6, "Other eigenvalue 3."),
  tf(S`$${M([[2, -1], [1, 2]])}$ has eigenvalues $2\pm i$.`, true, "λ² − 4λ + 5."),
  mc(S`The discriminant $(\operatorname{tr}A)^2-4\det A<0$ means`, "a complex pair of eigenvalues", ["a repeated real eigenvalue", "two distinct real eigenvalues", "A is singular"], "No real roots."),
  num(S`$\det(A-\lambda I)=-\lambda^3+6\lambda^2-11\lambda+6$. Find $\operatorname{tr}A$.`, 6, "Coefficient of λ² (for n = 3) is tr A."),
  num(S`Same polynomial. Find $\det A$.`, 6, "p(0)."),
  num(S`Find the largest root of $-\lambda^3+6\lambda^2-11\lambda+6$.`, 3, "−(λ − 1)(λ − 2)(λ − 3)."),
  tf("Row reducing A does not change its eigenvalues.", false, "e.g. [1 1; 1 1] (eigenvalues 0, 2) reduces to [1 1; 0 0] (eigenvalues 0, 1).", F.mat([[1, 1], [0, 0]], { label: "after reduction" })),
];

export const E = easy;
export { medium as M };
