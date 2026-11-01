// LINALG1 Worksheet 8.5 — Powers and Dynamical Systems
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { orbit } from "./fig8.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Powers of a diagonalisable matrix",
    lead: thm("powers", S`If \(A=PDP^{-1}\) then \(A^k=PD^kP^{-1}\) with \(D^k=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k)\).`) + S`\pf{In \(A^k=PDP^{-1}PDP^{-1}\cdots\) every inner \(P^{-1}P\) is \(I\).}`,
    fig: P(rowPic([[[["P"]], {}], [[["λ₁ᵏ", 0], [0, "λ₂ᵏ"]], { label: "Dᵏ" }], [[["P⁻¹"]], {}]]), 3.4), w: 0.5 },
  { h: "2. Dynamical systems",
    lead: def("discrete dynamical system", S`\(\vec x_{k+1}=A\vec x_k\), so \(\vec x_k=A^k\vec x_0\).`) + thm("eigenvector solution", S`If \(\vec x_0=c_1\vec v_1+\dots+c_n\vec v_n\) (solve \(P\vec c=\vec x_0\)) for eigenvectors \(\vec v_i\), then \(\vec x_k=c_1\lambda_1^k\vec v_1+\dots+c_n\lambda_n^k\vec v_n\).`) + S`\pf{\(A^k\vec v_i=\lambda_i^k\vec v_i\) and linearity.}`,
    fig: orbit([[0.5, 0.25], [0.25, 0.5]], [4, 0], 8, { w: 4, lines: [[1, 1]] }), w: 0.5 },
  { h: "3. Long-run behaviour",
    lead: S`Each component \(c_i\lambda_i^k\vec v_i\) shrinks if \(|\lambda_i|<1\), stays if \(|\lambda_i|=1\) and grows if \(|\lambda_i|>1\). The term with the largest \(|\lambda_i|\) (and \(c_i\ne0\)) dominates: \(\vec x_k\) lines up with its eigenvector. Mixed sizes give a \emph{saddle}: growth along one line, decay along another.`,
    fig: orbit([[2, 0], [0, 0.5]], [0.05, 4], 6, { w: 4 }), w: 0.5 },
  { h: "4. Markov chains",
    lead: def("Markov chain", S`A stochastic matrix \(M\) has nonnegative entries and columns summing to 1; \(\vec x_{k+1}=M\vec x_k\) moves probability vectors. A steady state \(\vec q\) satisfies \(M\vec q=\vec q\) with entries summing to 1.`) + S`Every stochastic matrix has eigenvalue 1 (its rows of \(M^T\) sum to 1). If some power of \(M\) is positive, \(\vec x_k\to\vec q\) for every start.`,
    fig: orbit([[0.8, 0.3], [0.2, 0.7]], [0, 1], 10, { w: 4, lines: [[3, 2]] }), w: 0.5 },
  { h: "5. Limits of powers",
    lead: S`If \(|\lambda_i|<1\) for all eigenvalues except \(\lambda_1=1\), then \(D^k\to\operatorname{diag}(1,0,\dots,0)\) and \(A^k\to P\operatorname{diag}(1,0,\dots,0)P^{-1}\). For a Markov chain every column of the limit is the steady state.`,
    fig: P(matPic([["q₁", "q₁"], ["q₂", "q₂"]], { label: "lim Mᵏ: columns = steady state" }), 2), w: 0.55 },
  { h: "6. Linear recurrences",
    lead: S`A recurrence \(a_{k+2}=pa_{k+1}+qa_k\) becomes \(\vec x_{k+1}=A\vec x_k\) with \(\vec x_k=(a_k,a_{k+1})\) and \(A=${M([[0, 1], ["q", "p"]])}\). The eigenvalues of \(A\) are the roots of \(\lambda^2=p\lambda+q\), and \(a_k=c_1\lambda_1^k+c_2\lambda_2^k\).`,
    fig: P(matPic([[0, 1], ["q", "p"]], { label: "companion matrix" }), 1.8), w: 0.55 },
];

const EXAMPLES = [
  { title: "A fourth power", q: S`Compute \(A^4\) for \(A=${M([[1, 2], [3, 2]])}=PDP^{-1}\), \(P=${M([[2, 1], [3, -1]])}\), \(D=\operatorname{diag}(4,-1)\).`,
    fig: P(matPic([[256, 0], [0, 1]], { label: "D⁴" }), 1.6),
    steps: [S`\(\det P=-5\), \(P^{-1}=\tfrac15${M([[1, 1], [3, -2]])}\). \(PD^4=${M([[2, 1], [3, -1]])}${M([[256, 0], [0, 1]])}=${M([[512, 1], [768, -1]])}\).`, S`\[A^4=\tfrac15${M([[512, 1], [768, -1]])}${M([[1, 1], [3, -2]])}=\tfrac15${M([["512+3", "512-2"], ["768-3", "768+2"]])}=${M([[103, 102], [153, 154]])}.\]`, S`Check: \(\operatorname{tr}A^4=257=4^4+(-1)^4\) ✓.`],
    ans: S`\(${M([[103, 102], [153, 154]])}\)` },
  { title: "A formula for Aᵏ", q: S`Find \(A^k\) for \(A=${M([[4, 1], [2, 3]])}\) (\(P=${M([[1, 1], [1, -2]])}\), \(D=\operatorname{diag}(5,2)\)).`,
    fig: P(rowPic([[[[1, 1], [1, -2]], { label: "P" }], [[["5ᵏ", 0], [0, "2ᵏ"]], { label: "Dᵏ" }]]), 3),
    steps: [S`\(\det P=-3\), \(P^{-1}=\tfrac13${M([[2, 1], [1, -1]])}\). \(PD^k=${M([["5^k", "2^k"], ["5^k", "-2\\cdot2^k"]])}\).`, S`\[A^k=\tfrac13${M([["5^k", "2^k"], ["5^k", "-2\\cdot2^k"]])}${M([[2, 1], [1, -1]])}=\tfrac13${M([["2\\cdot5^k+2^k", "5^k-2^k"], ["2\\cdot5^k-2\\cdot2^k", "5^k+2\\cdot2^k"]])}.\]`, S`Check \(k=2\): \(\tfrac13${M([[54, 21], [42, 33]])}=${M([[18, 7], [14, 11]])}=A^2\) ✓.`],
    ans: S`as shown` },
  { title: "A Markov chain", q: S`\(M=${M([["0.8", "0.3"], ["0.2", "0.7"]])}\), \(\vec x_0=(0,1)\). Find \(\vec x_k\) and the steady state.`,
    fig: orbit([[0.8, 0.3], [0.2, 0.7]], [0, 1], 10, { w: 3.8, lines: [[3, 2]] }),
    steps: [S`\(\lambda=1\): \(M-I=${M([["-0.2", "0.3"], ["0.2", "-0.3"]])}\): \((3,2)\). \(\operatorname{tr}M=1.5\Rightarrow\lambda_2=0.5\): \(M-0.5I=${M([["0.3", "0.3"], ["0.2", "0.2"]])}\): \((1,-1)\).`, S`\(${am([[3, 1, 0], [2, -1, 1]])}\xrightarrow{R_2\to R_2-\frac23R_1}${am([[3, 1, 0], [0, "-\\tfrac53", 1]])}\): \(c_2=-0.6\), \(c_1=0.2\).`, S`\(\vec x_k=0.2${C(3, 2)}-0.6(0.5)^k${C(1, -1)}\to\vec q=(0.6,0.4)\). Check \(k=1\): \((0.6-0.3,\ 0.4+0.3)=(0.3,0.7)=M\vec x_0\) ✓.`],
    ans: S`\(\vec q=(0.6,0.4)\)` },
  { title: "Decay to the origin", q: S`\(A=${M([["0.5", "0.25"], ["0.25", "0.5"]])}\), \(\vec x_0=(4,0)\). Find \(\vec x_k\).`,
    fig: orbit([[0.5, 0.25], [0.25, 0.5]], [4, 0], 8, { w: 3.8, lines: [[1, 1]] }),
    steps: [S`\(A${C(1, 1)}=0.75${C(1, 1)}\), \(A${C(1, -1)}=0.25${C(1, -1)}\).`, S`\(\vec x_0=2${C(1, 1)}+2${C(1, -1)}\), so \(\vec x_k=2(0.75)^k${C(1, 1)}+2(0.25)^k${C(1, -1)}\to\vec 0\), approaching along \((1,1)\).`],
    ans: S`\(2(0.75)^k(1,1)+2(0.25)^k(1,-1)\)` },
  { title: "A saddle", q: S`\(A=\operatorname{diag}(2,\tfrac12)\), \(\vec x_0=(1,4)\). Describe \(\vec x_k\).`,
    fig: orbit([[2, 0], [0, 0.5]], [0.05, 4], 6, { w: 3.8 }),
    steps: [S`\(\vec x_k=A^k\vec x_0=${M([["2^k", 0], [0, "2^{-k}"]])}${C(1, 4)}=${C("2^k", "4\\cdot2^{-k}")}\).`, S`The first coordinate grows, the second decays: the orbit leaves along the \(x_1\)-axis (a saddle).`],
    ans: S`\((2^k,\ 4\cdot2^{-k})\)` },
  { title: "A recurrence", q: S`Solve \(a_{k+2}=a_{k+1}+6a_k\), \(a_0=1\), \(a_1=8\).`,
    fig: P(matPic([[0, 1], [6, 1]], { label: "A" }), 1.6),
    steps: [S`\(A=${M([[0, 1], [6, 1]])}\): \(\lambda^2-\lambda-6=(\lambda-3)(\lambda+2)\). \(\lambda=3\): \((1,3)\); \(\lambda=-2\): \((1,-2)\).`, S`\(${am([[1, 1, 1], [3, -2, 8]])}\xrightarrow{R_2\to R_2-3R_1}${am([[1, 1, 1], [0, -5, 5]])}\): \(c_2=-1\), \(c_1=2\).`, S`\(a_k=2\cdot3^k-(-2)^k\). Check \(a_2=8+6=14=18-4\) ✓.`],
    ans: S`\(a_k=2\cdot3^k-(-2)^k\)` },
  { title: "An oscillating population", q: S`\(\vec x_{k+1}=${M([[0, 2], ["0.5", 0]])}\vec x_k\), \(\vec x_0=(10,0)\). Find the first few states and explain.`,
    fig: orbit([[0, 2], [0.5, 0]], [10, 0], 4, { w: 3.8 }),
    steps: [S`\(\vec x_1=${C(0, 5)}\), \(\vec x_2=${C(10, 0)}\), \(\vec x_3=${C(0, 5)}\), …`, S`Eigenvalues: \(\lambda^2=1\), \(\lambda=\pm1\). Both have \(|\lambda|=1\): nothing grows or decays, and \(\lambda=-1\) makes the state alternate with period 2.`],
    ans: S`period 2: \((10,0),(0,5),\dots\)` },
  { title: "The limit of Mᵏ", q: S`Find \(\lim M^k\) for \(M=${M([["0.8", "0.3"], ["0.2", "0.7"]])}\).`,
    fig: P(matPic([["0.6", "0.6"], ["0.4", "0.4"]], { label: "lim Mᵏ" }), 1.8),
    steps: [S`\(P=${M([[3, 1], [2, -1]])}\), \(\det P=-5\), \(P^{-1}=\tfrac15${M([[1, 1], [2, -3]])}\).`, S`\(M^k\to P${M([[1, 0], [0, 0]])}P^{-1}=${M([[3, 0], [2, 0]])}\cdot\tfrac15${M([[1, 1], [2, -3]])}=\tfrac15${M([[3, 3], [2, 2]])}\).`],
    ans: S`\(${M([["0.6", "0.6"], ["0.4", "0.4"]])}\)` },
  { title: "Powers by induction", q: S`Prove \(A^k=PD^kP^{-1}\) for all \(k\ge1\) when \(A=PDP^{-1}\).`,
    steps: [S`\(k=1\) is given. If \(A^k=PD^kP^{-1}\), then \(A^{k+1}=A^kA=PD^kP^{-1}PDP^{-1}=PD^{k+1}P^{-1}\).`],
    ans: S`induction` },
];

const PROBLEMS = [
  { level: 1, q: S`\(A=P\operatorname{diag}(3,-1)P^{-1}\). Write \(D^4\).`, ans: S`\(\operatorname{diag}(81,1)\)` },
  { level: 1, q: S`\(\vec x_k=5(0.9)^k\vec v_1+2(1)^k\vec v_2\). What does \(\vec x_k\) approach?`, ans: S`\(2\vec v_2\)` },
  { level: 1, q: S`Find the steady state of \(${M([["0.5", "0.5"], ["0.5", "0.5"]])}\).`, ans: S`\((0.5,0.5)\)`, fig: orbit([[0.5, 0.5], [0.5, 0.5]], [1, 0], 3, { w: 3.2, lines: [[1, 1]] }) },
  { level: 2, q: S`Compute \(A^3\) for \(A=${M([[2, 0], [1, 1]])}\) by diagonalising.`, ans: S`\(${M([[8, 0], [7, 1]])}\)` },
  { level: 2, q: S`Find the steady state of \(${M([["0.6", "0.1"], ["0.4", "0.9"]])}\).`, ans: S`\((0.2,0.8)\)` },
  { level: 2, q: S`\(\vec x_{k+1}=${M([["1.5", 0], [0, "0.5"]])}\vec x_k\), \(\vec x_0=(1,1)\). Find \(\vec x_4\).`, ans: S`\((5.0625,\ 0.0625)\)`, fig: orbit([[1.5, 0], [0, 0.5]], [1, 1], 4, { w: 3.2 }) },
  { level: 2, q: S`Solve \(a_{k+2}=5a_{k+1}-6a_k\), \(a_0=0\), \(a_1=1\).`, ans: S`\(a_k=3^k-2^k\)` },
  { level: 2, q: S`\(A\) has eigenvalues \(1.1\) and \(0.4\). Describe \(\vec x_k\) for a typical \(\vec x_0\).`, ans: S`grows like \(1.1^k\) along the first eigenvector` },
  { level: 3, space: 5, q: S`Find a formula for \(A^k\), \(A=${M([[3, 1], [0, 2]])}\).`, ans: S`\(${M([["3^k", "3^k-2^k"], [0, "2^k"]])}\)`, fig: P(matPic([[3, 1], [0, 2]], { label: "A" }), 1.6) },
  { level: 3, space: 5, q: S`Prove that every \(2\times2\) stochastic matrix has eigenvalue 1.`, ans: S`\(M^T(1,1)=(1,1)\); \(M\), \(M^T\) share eigenvalues` },
  { level: 3, space: 5, q: S`Find \(\lim A^k\) for \(A=${M([["0.7", "0.2"], ["0.3", "0.8"]])}\).`, ans: S`\(${M([["0.4", "0.4"], ["0.6", "0.6"]])}\)` },
  { level: 3, space: 5, q: S`Show that if all eigenvalues of a diagonalisable \(A\) satisfy \(|\lambda|<1\), then \(A^k\to0\).`, ans: S`\(D^k\to0\), so \(PD^kP^{-1}\to0\)` },
  { level: 3, space: 5, q: S`Solve \(a_{k+2}=a_{k+1}+a_k\) (Fibonacci, \(a_0=0\), \(a_1=1\)) in closed form.`, ans: S`\(a_k=\tfrac1{\sqrt5}\big(\varphi^k-\psi^k\big)\), \(\varphi,\psi=\tfrac{1\pm\sqrt5}2\)`, fig: P(matPic([[0, 1], [1, 1]], { label: "companion matrix" }), 1.6) },
];

export const WS = {
  code: "8.5",
  title: "Powers and Dynamical Systems",
  bigideas: S`For \(A=PDP^{-1}\), \(A^k=PD^kP^{-1}\), and the solution of \(\vec x_{k+1}=A\vec x_k\) is \(\sum c_i\lambda_i^k\vec v_i\). Eigenvalues tell the future: \(|\lambda|<1\) decays, \(|\lambda|>1\) grows, \(\lambda=1\) gives steady states such as the long-run distribution of a Markov chain.`,
  goals: ["Compute \\(A^k=PD^kP^{-1}\\).", "Solve \\(\\vec x_{k+1}=A\\vec x_k\\) with eigenvectors.", "Find Markov steady states.", "Describe growth, decay, saddles.", "Solve linear recurrences."],
  curriculum: "Eigenvalues and eigenvectors — powers and dynamical systems",
  vocab: [["\\(A^k\\)", "\\(PD^kP^{-1}\\)"], ["Dynamical system", "\\(\\vec x_{k+1}=A\\vec x_k\\)"], ["Stochastic", "columns sum to 1"], ["Steady state", "\\(M\\vec q=\\vec q\\)"], ["Dominant eigenvalue", "largest \\(|\\lambda|\\)"]],
  hook: S`Where will the market shares be in ten years? The answer is hidden in one eigenvector.`,
  concepts: NOTES,
  summary: [
    S`\(A^k=PD^kP^{-1}\).`,
    S`\(\vec x_k=\sum c_i\lambda_i^k\vec v_i\), \(P\vec c=\vec x_0\).`,
    S`\(|\lambda|\) decides decay or growth.`,
    S`Markov: steady state = eigenvector for 1, scaled to sum 1.`,
    S`Recurrences \(\to\) companion matrices.`,
  ],
  tips: ["Find the weights c from Pc = x₀.", "Scale steady states to sum 1.", "Power only the diagonal D.", "Check with k = 1.", "The eigenvalue of largest absolute value wins."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
