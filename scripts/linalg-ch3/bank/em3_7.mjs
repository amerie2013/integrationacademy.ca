// 3.7 Properties of Matrix Multiplication and Powers — 20 easy + 20 medium questions
import { S, F, M, mc, num, tf, fill, powEntryQ, mul, T } from "./gen3.mjs";

const easy = [
  tf(S`$A(BC)=(AB)C$ whenever the products are defined.`, true, "Matrix multiplication is associative."),
  tf(S`$A(B+C)=AB+AC$.`, true, "Distributive law (keep A on the left)."),
  mc(S`$(AB)^T=$`, S`$B^TA^T$`, [S`$A^TB^T$`, S`$AB$`, S`$BA$`], "Transposing a product reverses the order."),
  mc(S`$A^0$ for a square matrix $A$ is defined as:`, S`$I$`, [S`$0$`, S`$A$`, "undefined"], "As for numbers, the zero power is the identity."),
  powEntryQ([[1, 1], [0, 1]], 2, 0, 1),
  powEntryQ([[2, 0], [0, 3]], 3, 1, 1, F.mat([[2, 0], [0, 3]], { label: "A" })),
  num(S`$D=\operatorname{diag}(2,-1)$. Find the $(1,1)$ entry of $D^5$.`, 32, "Powers of a diagonal matrix act on each diagonal entry: 2⁵ = 32."),
  num(S`$D=\operatorname{diag}(2,-1)$. Find the $(2,2)$ entry of $D^5$.`, -1, "(−1)⁵ = −1."),
  tf(S`$A^2A^3=A^5$ for square $A$.`, true, "Associativity lets us regroup the five factors."),
  tf(S`$(AB)^2=A^2B^2$ for all square $A,B$.`, false, "(AB)² = ABAB; turning it into AABB needs BA = AB."),
  fill(S`A square matrix $N$ with $N^k=0$ for some $k$ is called ___.`, ["nilpotent"], "E.g. strictly upper triangular matrices."),
  powEntryQ([[0, 1], [0, 0]], 2, 0, 1),
  mc(S`Simplify $A(2B)-3(AB)$.`, S`$-AB$`, [S`$-BA$`, S`$5AB$`, S`$-A^2B$`], "Scalars move freely: 2AB − 3AB = −AB."),
  tf(S`$(kA)^2=k^2A^2$.`, true, "(kA)(kA) = k²AA: scalars commute with matrices."),
  num(S`$I^{10}$ has trace (for $I=I_3$):`, 3, "I^10 = I, whose trace is 3."),
  tf(S`$A^TA$ is a square matrix for every $A$.`, true, "If A is m × n, then AᵀA is n × n."),
  mc(S`$A$ is $2\times5$. The size of $A^TA$ is:`, S`$5\times5$`, [S`$2\times2$`, S`$2\times5$`, S`$5\times2$`], "(5 × 2)(2 × 5) = 5 × 5.", F.row([[[["*", "*"], ["*", "*"], ["*", "*"], ["*", "*"], ["*", "*"]], { label: "Aᵀ (5 × 2)" }], [[["*", "*", "*", "*", "*"], ["*", "*", "*", "*", "*"]], { label: "A (2 × 5)" }]])),
  powEntryQ([[1, 0], [2, 1]], 3, 1, 0),
  tf(S`$(A+B)C=AC+BC$.`, true, "Distributive law on the right."),
  num(S`$A$ is $2\times2$ with $A^2=I$. Find the $(1,2)$ entry of $A^4$.`, 0, "A⁴ = (A²)² = I² = I."),
];

const C = [[1, 2], [3, 0]];
const medium = [
  powEntryQ([[1, 2], [3, 0]], 3, 0, 0),
  powEntryQ([[0, 1, 2], [0, 0, 3], [0, 0, 0]], 2, 0, 2, F.pat("upper", 3)),
  num(S`$A=${M([[1, 2], [3, 4]])}$. Compute $A^2-5A$ and give its $(1,1)$ entry.`, 2, S`$A^2=${M([[7, 10], [15, 22]])}$; $A^2-5A=${M([[2, 0], [0, 2]])}=2I$.`),
  num(S`Find the $(1,2)$ entry of $(A+B)^2$ for $A=${M([[1, 0], [0, 2]])}$, $B=${M([[0, 1], [0, 0]])}$.`, 3, S`$A+B=${M([[1, 1], [0, 2]])}$, $(A+B)^2=${M([[1, 3], [0, 4]])}$.`),
  num(S`For the same $A=${M([[1, 0], [0, 2]])}$, $B=${M([[0, 1], [0, 0]])}$, find the $(1,2)$ entry of $A^2+2AB+B^2$.`, 2, S`$A^2=\operatorname{diag}(1,4)$, $AB=${M([[0, 1], [0, 0]])}$, $B^2=0$: $A^2+2AB+B^2=${M([[1, 2], [0, 4]])}$ — not $(A+B)^2$, because $AB\ne BA$.`),
  mc(S`$(A+B)(A-B)=$`, S`$A^2-AB+BA-B^2$`, [S`$A^2-B^2$`, S`$A^2+AB-BA-B^2$`, S`$A^2-2AB+B^2$`], "Distribute in order: A·A − A·B + B·A − B·B."),
  num(S`$A=${M([[1, 2], [0, 1]])}$. Find the $(1,2)$ entry of $A^{10}$.`, 20, S`$A^2=${M([[1, 4], [0, 1]])}$, $A^3=${M([[1, 6], [0, 1]])}$: the pattern is $A^n=${M([[1, "2n"], [0, 1]])}$, so 20.`),
  num(S`$R=${M([[0, -1], [1, 0]])}$. Find the $(1,1)$ entry of $R^{6}$.`, -1, S`$R^2=-I$, so $R^6=(R^2)^3=-I$.`, F.mat([[0, -1], [1, 0]], { label: "R" })),
  num(S`For $A=${M([[1, 2], [0, 1], [2, 0]])}$, find the $(1,2)$ entry of $A^TA$.`, mul(T([[1, 2], [0, 1], [2, 0]]), [[1, 2], [0, 1], [2, 0]])[0][1], S`$(A^TA)_{12}$ = column 1 · column 2 $=1\cdot2+0\cdot1+2\cdot0=2$; $A^TA=${M(mul(T([[1, 2], [0, 1], [2, 0]]), [[1, 2], [0, 1], [2, 0]]))}$.`),
  tf(S`$(ABC)^T=C^TB^TA^T$.`, true, "Apply the reverse-order rule twice."),
  tf(S`If $A$ is symmetric, then $A^2$ is symmetric.`, true, "(A²)ᵀ = AᵀAᵀ = AA = A²."),
  tf(S`If $A$ and $B$ are symmetric, then $AB$ is symmetric.`, false, S`$${M([[1, 0], [0, 2]])}${M([[0, 1], [1, 0]])}=${M([[0, 1], [2, 0]])}$.`),
  mc(S`$A^2=A$. Then $(I-A)^2=$`, S`$I-A$`, [S`$I$`, S`$I-2A$`, S`$0$`], "I − 2A + A² = I − 2A + A = I − A."),
  num(S`$p(t)=t^2-3t+1$ and $A=${M([[2, 1], [1, 1]])}$. Find the $(1,1)$ entry of $p(A)$.`, 0, S`$A^2=${M([[5, 3], [3, 2]])}$; $p(A)=A^2-3A+I=${M([[5 - 6 + 1, 3 - 3], [3 - 3, 2 - 3 + 1]])}$.`),
  num(S`$N$ is $4\times4$ strictly upper triangular. What is the smallest $k$ that guarantees $N^k=0$?`, 4, "Each multiplication pushes the nonzero entries one diagonal further up; after 4 there is no room left.", F.pat("upper", 4)),
  tf(S`$A^2=0$ implies $A=0$.`, false, S`$${M([[0, 1], [0, 0]])}^2=0$.`),
  num(S`$A=\operatorname{diag}(1,-2,3)$. Find $\operatorname{tr}(A^2)$.`, 14, "1 + 4 + 9 = 14."),
  mc(S`$(A^2)^T=$`, S`$(A^T)^2$`, [S`$A^2$`, S`$2A^T$`, S`$A^TA$`], "(AA)ᵀ = AᵀAᵀ."),
  powEntryQ(C, 2, 1, 1),
  num(S`$A$ is $3\times3$ with $A^3=0$. Simplify $(I-A)(I+A+A^2)$ and give its trace.`, 3, "I + A + A² − A − A² − A³ = I − A³ = I; trace 3."),
];

export const E = easy;
export { medium as M };
