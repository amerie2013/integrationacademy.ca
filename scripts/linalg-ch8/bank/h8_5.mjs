// 8.5 Powers and Dynamical Systems — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, powQ, steadyQ } from "./gen8.mjs";

export const TOPIC = "8.5 Powers and Dynamical Systems";
export const Q = [
  powQ([[7, 2], [-4, 1]], [[1, 1], [-1, -2]], [5, 3], 4, 1, 1, F.mat([[625, 0], [0, 81]], { label: "D⁴" })),
  powQ([[1, 2], [3, 2]], [[2, 1], [3, -1]], [4, -1], 5, 1, 0),
  powQ([[0, 1], [6, 1]], [[1, 1], [3, -2]], [3, -2], 4, 0, 1),
  powQ([[1, 1, 0], [1, 2, 1], [0, 1, 1]], [[1, 1, 1], [2, 0, -1], [1, -1, 1]], [3, 1, 0], 3, 1, 1, F.mat([[1, 1, 1], [2, 0, -1], [1, -1, 1]], { label: "P" })),
  steadyQ([[0.5, 0.25, 0], [0.5, 0.5, 0.5], [0, 0.25, 0.5]], 1, F.mat([["0.5", "0.25", 0], ["0.5", "0.5", "0.5"], [0, "0.25", "0.5"]], { label: "M" })),
  steadyQ([[0.7, 0.1, 0.2], [0.2, 0.8, 0.2], [0.1, 0.1, 0.6]], 1),
  num(S`Solve $a_{k+2}=4a_{k+1}-3a_k$, $a_0=2$, $a_1=4$. Find $a_5$.`, 244, S`Roots 1, 3: $a_k=c_1+c_23^k$; $c_1+c_2=2$, $c_1+3c_2=4$: $c_1=c_2=1$; $a_5=1+243$.`, F.mat([[0, 1], [-3, 4]], { label: "companion" })),
  num(S`Fibonacci $a_{k+2}=a_{k+1}+a_k$: find the dominant eigenvalue of its companion matrix. (3 decimals)`, 1.618, "λ² = λ + 1: (1 + √5)/2.", undefined, 0.001),
  num(S`For Fibonacci, $a_{k+1}/a_k\to$? (3 decimals)`, 1.618, "The dominant eigenvalue.", undefined, 0.001),
  num(S`$\lim M^k$ for $M=${M([["0.8", "0.3"], ["0.2", "0.7"]])}$: find the $(2,1)$ entry. (Decimal.)`, 0.4, "Columns equal the steady state (0.6, 0.4).", F.orb([[0.8, 0.3], [0.2, 0.7]], [1, 0], 8, { lines: [[3, 2]] }), 0.001),
  ms("Which give x_k → 0 for every x₀ (A diagonalisable)?", ["eigenvalues 0.5, −0.9", "eigenvalues 1, 0.5", "eigenvalues 0.99, 0.1", "eigenvalues 1.01, 0"], [0, 2], "All |λ| < 1."),
  num(S`$\vec x_k=4(1.2)^k\vec v_1+(0.5)^k\vec v_2$. For large $k$, $|\vec x_{k+1}|/|\vec x_k|\to$? (Decimal.)`, 1.2, "The dominant eigenvalue.", undefined, 0.001),
  tf(S`$A=${M([[1, 1], [0, 1]])}$: the powers $A^k$ can be computed by diagonalisation.`, false, S`$A$ is defective; directly $A^k=${M([[1, "k"], [0, 1]])}$.`),
  num(S`$A=${M([[1, 1], [0, 1]])}$. Find the $(1,2)$ entry of $A^{10}$.`, 10, S`$A^k=${M([[1, "k"], [0, 1]])}$.`),
  num(S`$A=${M([[3, 1], [0, 2]])}$. Find the $(1,2)$ entry of $A^3$.`, 19, S`$A^k=${M([["3^k", "3^k-2^k"], [0, "2^k"]])}$: $27-8$.`, F.mat([[3, 1], [0, 2]], { label: "A" })),
  num(S`A population grows by $\vec x_{k+1}=${M([[0, 3], ["0.25", "0.5"]])}\vec x_k$. Find the dominant eigenvalue. (Decimal.)`, 1.1514, S`$\lambda^2-0.5\lambda-0.75=0$: $\lambda=\tfrac{0.5+\sqrt{3.25}}2$.`, undefined, 0.001),
  tf("A population with dominant eigenvalue 1.15 grows by about 15% per step in the long run.", true, "x_{k+1} ≈ 1.15 x_k."),
  mc("A Markov chain whose matrix has eigenvalues 1 and −1:", "can oscillate forever", ["always converges", "always decays to 0", "has no steady state"], "The −1 component flips sign each step."),
  num(S`$A=P\operatorname{diag}(1,0.2)P^{-1}$. Find $\det(\lim A^k)$.`, 0, "lim D^k = diag(1, 0)."),
  num(S`$A$ has eigenvalues 2 and $-1$. Find $\operatorname{tr}(A^4)$.`, 17, "16 + 1."),
];
