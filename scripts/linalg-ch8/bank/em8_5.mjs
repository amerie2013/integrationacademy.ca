// 8.5 Powers and Dynamical Systems — 20 easy + 20 medium questions
import { S, F, M, col, mc, num, tf, fill, powQ, steadyQ } from "./gen8.mjs";

const easy = [
  num(S`$D=\operatorname{diag}(2,-1)$. Find the $(1,1)$ entry of $D^5$.`, 32, "2⁵."),
  num(S`$D=\operatorname{diag}(2,-1)$. Find the $(2,2)$ entry of $D^5$.`, -1, "(−1)⁵."),
  mc("If A = PDP⁻¹, then Aᵏ =", "PDᵏP⁻¹", ["PᵏDᵏP⁻ᵏ", "DᵏPP⁻¹", "PDP⁻ᵏ"], "Inner P⁻¹P cancel."),
  tf("A Markov (stochastic) matrix always has eigenvalue 1.", true, "Columns sum to 1."),
  fill("A probability vector q with Mq = q is called a ___ state.", ["steady", "stationary", "equilibrium"], "Eigenvector for λ = 1, scaled to sum 1."),
  steadyQ([[0.5, 0.5], [0.5, 0.5]], 0),
  steadyQ([[0.9, 0.2], [0.1, 0.8]], 0, F.orb([[0.9, 0.2], [0.1, 0.8]], [1, 0], 10, { lines: [[2, 1]] })),
  num(S`$\vec x_k=3(0.5)^k\vec v_1+2\vec v_2$. As $k\to\infty$, $\vec x_k\to c\vec v_2$. Find $c$.`, 2, "0.5ᵏ → 0."),
  mc("If all eigenvalues satisfy |λ| < 1, then x_k = Aᵏx₀:", "tends to 0", ["grows", "is constant", "oscillates forever"], "Every component shrinks."),
  mc("If one eigenvalue is 1.2 and the other 0.5, a typical x_k:", "grows along the 1.2 eigenvector", ["tends to 0", "stays fixed", "spirals"], "The dominant eigenvalue wins.", F.orb([[1.2, 0], [0, 0.5]], [0.3, 3], 6)),
  num(S`$A\vec v=0.5\vec v$. Find the factor by which $\vec v$ is multiplied after 3 steps of $\vec x_{k+1}=A\vec x_k$. (Decimal.)`, 0.125, "0.5³.", undefined, 0.001),
  tf("Columns of a stochastic matrix sum to 1.", true, "Definition (with states as column vectors)."),
  num(S`$\vec x_{k+1}=2\vec x_k$ in $\mathbb R$ with $x_0=3$. Find $x_4$.`, 48, "3·2⁴."),
  powQ([[2, 0], [0, 3]], [[1, 0], [0, 1]], [2, 3], 3, 1, 1),
  tf(S`If $A=PDP^{-1}$ then $A^0=I$.`, true, "PIP⁻¹."),
  num(S`The recurrence $a_{k+2}=3a_{k+1}-2a_k$ has companion matrix $${M([[0, 1], ["q", "p"]])}$. Find $q$.`, -2, "a_{k+2} = pa_{k+1} + qa_k."),
  num(S`Which eigenvalue decides the long-run behaviour of $A$ with eigenvalues $0.3,-1.5,0.9$? Give it.`, -1.5, "Largest absolute value.", undefined, 0.001),
  tf(S`$\vec x_k=A^k\vec x_0$ for $\vec x_{k+1}=A\vec x_k$.`, true, "Apply A k times."),
  steadyQ([[0.7, 0.4], [0.3, 0.6]], 0),
  num(S`$a_k=2^{k+1}-1$. Find $a_4$.`, 31, "32 − 1."),
];

const medium = [
  powQ([[7, 2], [-4, 1]], [[1, 1], [-1, -2]], [5, 3], 3, 0, 1, F.mat([[125, 0], [0, 27]], { label: "D³" })),
  powQ([[1, 2], [3, 2]], [[2, 1], [3, -1]], [4, -1], 4, 0, 0),
  powQ([[4, 1], [2, 3]], [[1, 1], [1, -2]], [5, 2], 2, 1, 0),
  powQ([[3, -2], [1, 0]], [[2, 1], [1, 1]], [2, 1], 5, 0, 0),
  steadyQ([[0.8, 0.3], [0.2, 0.7]], 0, F.orb([[0.8, 0.3], [0.2, 0.7]], [0, 1], 10, { lines: [[3, 2]] })),
  steadyQ([[0.6, 0.1], [0.4, 0.9]], 1),
  steadyQ([[0.5, 0.2, 0.3], [0.3, 0.6, 0.3], [0.2, 0.2, 0.4]], 0),
  num(S`$\vec x_{k+1}=${M([["1.25", "0.25"], ["0.25", "1.25"]])}\vec x_k$, $\vec x_0=(3,1)=2(1,1)+(1,-1)$. Find the first entry of $\vec x_2$. (Decimal.)`, 5.5, "2(1.5)² + 1 = 4.5 + 1.", F.orb([[1.25, 0.25], [0.25, 1.25]], [3, 1], 4, { lines: [[1, 1]] }), 0.001),
  num(S`For $M=${M([["0.9", "0.2"], ["0.1", "0.8"]])}$ and $\vec x_0=(1,0)$, $\vec x_k=\tfrac13(2,1)+c(0.7)^k(1,-1)$. Find $c$. (Decimal.)`, 0.3333, "At k = 0: 2/3 + c = 1.", undefined, 0.001),
  num(S`Solve $a_{k+2}=a_{k+1}+6a_k$, $a_0=1$, $a_1=8$: $a_k=2\cdot3^k-(-2)^k$. Find $a_3$.`, 62, "2·27 − (−2)³ = 54 + 8."),
  num(S`$a_{k+2}=5a_{k+1}-6a_k$, $a_0=0$, $a_1=1$. Find $a_4$.`, 65, "a_k = 3ᵏ − 2ᵏ: 81 − 16."),
  num(S`$\lim A^k$ for $A=P\operatorname{diag}(1,\tfrac12)P^{-1}$, $P=${M([[1, 1], [1, -1]])}$: find the $(1,2)$ entry. (Decimal.)`, 0.5, S`$P${M([[1, 0], [0, 0]])}P^{-1}=\tfrac12${M([[1, 1], [1, 1]])}$.`, undefined, 0.001),
  mc(S`$\vec x_{k+1}=${M([[0, 2], ["0.5", 0]])}\vec x_k$ from $(10,0)$ gives`, "a 2-cycle (10,0), (0,5), (10,0), …", ["decay to 0", "growth", "a fixed point"], "Eigenvalues ±1."),
  tf("If λ = 1 is the dominant eigenvalue and the others have |λ| < 1, then x_k converges.", true, "To the λ = 1 component."),
  num(S`$A=\operatorname{diag}(2,\tfrac12)$, $\vec x_0=(1,4)$. Find the second entry of $\vec x_3$. (Decimal.)`, 0.5, "4·(½)³.", undefined, 0.001),
  num(S`$A=P\operatorname{diag}(3,1)P^{-1}$. Find $\det(A^4)$.`, 81, "(3·1)⁴."),
  tf(S`$\lim_{k\to\infty}M^k$ for a regular Markov matrix has all columns equal to the steady state.`, true, "Every start converges to q."),
  num(S`$M$ is a $3\times3$ stochastic matrix. Find the sum of the entries of $M\vec x$ when the entries of $\vec x$ sum to 1.`, 1, "Columns sum to 1, so totals are preserved."),
  num(S`$A^k=${M([["2\\cdot5^k-3^k", "5^k-3^k"], ["-2\\cdot5^k+2\\cdot3^k", "-5^k+2\\cdot3^k"]])}$. Find the $(1,1)$ entry of $A^2$.`, 41, "2·25 − 9."),
  num(S`$\vec x_{k+1}=A\vec x_k$ with eigenvalues $1.1$ and $0.9$, $\vec x_0=\vec v_2$ (eigenvector for 0.9). Then $\vec x_{10}=c\vec v_2$. Find $c$. (3 decimals)`, 0.3487, "0.9¹⁰.", F.orb([[1.1, 0], [0, 0.9]], [0, 3], 10), 0.001),
];

export const E = easy;
export { medium as M };
