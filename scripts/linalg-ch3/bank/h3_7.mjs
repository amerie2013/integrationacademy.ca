// 3.7 Properties of Matrix Multiplication and Powers — 20 hard questions
import { S, F, M, mc, num, tf, ms, powEntryQ } from "./gen3.mjs";

export const TOPIC = "3.7 Properties of Matrix Multiplication and Powers";
export const Q = [
  num(S`$A=${M([[1, 1], [1, 0]])}$. Find the $(1,1)$ entry of $A^{10}$.`, 89, S`$A^n=${M([["F_{n+1}", "F_n"], ["F_n", "F_{n-1}"]])}$ (Fibonacci numbers 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89): $(A^{10})_{11}=F_{11}=89$.`, F.mat([[1, 1], [1, 0]], { label: "A" })),
  powEntryQ([[1, 1, 0], [0, 1, 1], [0, 0, 1]], 4, 0, 2, F.pat("upper", 3)),
  num(S`$C=${M([[1, -1], [1, 1]])}$. Find the $(1,1)$ entry of $C^{8}$.`, 16, S`$C^2=${M([[0, -2], [2, 0]])}$, $C^4=-4I$, $C^8=16I$.`),
  num(S`$A=${M([[3, -2], [1, 0]])}$ satisfies $A^2-3A+2I=0$. Write $A^3=aA+bI$ and find $a$.`, 7, "A² = 3A − 2I; A³ = A·A² = 3A² − 2A = 3(3A − 2I) − 2A = 7A − 6I."),
  num(S`For $A=${M([[3, -2], [1, 0]])}$ with $A^3=7A-6I$, find the $(1,1)$ entry of $A^3$.`, 15, "7·3 − 6 = 15. (Directly: A² = [[7, −6], [3, −2]], A³ = [[15, −14], [7, −6]].)"),
  tf(S`If $A$ and $B$ commute, then $(A+B)^2=A^2+2AB+B^2$.`, true, "BA = AB turns AB + BA into 2AB."),
  tf(S`If $A^2=I$, then $A=I$ or $A=-I$.`, false, S`$${M([[0, 1], [1, 0]])}^2=I$.`),
  num(S`How many diagonal $2\times2$ real matrices satisfy $A^2=A$?`, 4, "Each diagonal entry d satisfies d² = d, so d ∈ {0, 1}: 2² = 4."),
  ms(S`Which matrices are nilpotent?`, [S`$${M([[0, 3], [0, 0]])}$`, S`$${M([[1, 1], [-1, -1]])}$`, S`$${M([[0, 1], [1, 0]])}$`, S`$${M([[2, -4], [1, -2]])}$`, S`$${M([[1, 0], [0, 0]])}$`], [0, 1, 3], S`$${M([[1, 1], [-1, -1]])}^2=0$ and $${M([[2, -4], [1, -2]])}^2=0$; the swap squares to $I$ and $\operatorname{diag}(1,0)$ squares to itself.`),
  tf(S`For every $A$, $AA^T$ and $A^TA$ have the same trace.`, true, "tr(AAᵀ) = tr(AᵀA) = the sum of the squares of all entries of A."),
  num(S`Find $\operatorname{tr}(A^TA)$ for $A=${M([[1, -2, 3], [0, 4, -1]])}$.`, 31, "The sum of squares of all entries: 1 + 4 + 9 + 0 + 16 + 1 = 31.", F.mat([[1, -2, 3], [0, 4, -1]], { label: "A" })),
  tf(S`If $A^TA=0$, then $A=0$.`, true, "tr(AᵀA) is the sum of the squares of the entries; it is 0 only if every entry is 0."),
  num(S`If $N^3=0$, then $(I-N)(I+N+N^2)=I$. For $N=${M([[0, 2, 1], [0, 0, 3], [0, 0, 0]])}$, find the $(1,3)$ entry of $I+N+N^2$.`, 7, S`$N^2=${M([[0, 0, 6], [0, 0, 0], [0, 0, 0]])}$, so $(I+N+N^2)_{13}=0+1+6=7$.`),
  num(S`$A=${M([[2, 1], [0, 2]])}$. Find the $(1,2)$ entry of $A^5$.`, 80, S`$A=2I+N$ with $N=${M([[0, 1], [0, 0]])}$, $N^2=0$ and $2I$ commuting with $N$: $A^5=32I+5\cdot16N$, so the entry is 80.`),
  mc(S`$(A^TB)^T=$`, S`$B^TA$`, [S`$A^TB$`, S`$B^TA^T$`, S`$AB^T$`], "Reverse the order and transpose each factor: Bᵀ(Aᵀ)ᵀ = BᵀA."),
  num(S`$\vec u=(1,2,2)$ and $P=\vec u\vec u^T$. Then $P^2=cP$. Find $c$.`, 9, "P² = u(uᵀu)uᵀ = (uᵀu)P = (1 + 4 + 4)P = 9P (associativity)."),
  num(S`$A$ is $3\times3$ with every entry equal to 1. Then $A^2=kA$. Find $k$.`, 3, "Each entry of A² is 1 + 1 + 1 = 3, so A² = 3A.", F.mat([[1, 1, 1], [1, 1, 1], [1, 1, 1]], { label: "A" })),
  num(S`For the same all-ones $3\times3$ matrix $A$, find the $(1,1)$ entry of $A^5$.`, 81, "A² = 3A gives Aⁿ = 3ⁿ⁻¹A: A⁵ = 81A."),
  tf(S`If $A^2=A$, then $A(I-A)=0$.`, true, "A(I − A) = A − A² = A − A = 0: a product of two factors that can both be nonzero (e.g. A = diag(1, 0))."),
  num(S`$R=${M([[0, -1], [1, 0]])}$. Find the smallest positive $k$ with $R^k=I$.`, 4, "R² = −I, R³ = −R, R⁴ = I: four quarter-turns make a full turn."),
];
