// LINALG1 8.5 — Powers and Dynamical Systems: A^k = PD^kP⁻¹; a closed formula for A^k; x_k = A^k x₀ written as
// c₁λ₁^k v₁ + … + cₙλₙ^k vₙ with the weights found from Pc = x₀; Markov chains and steady states; growth and decay
// along eigen-directions; linear recurrences as matrix systems.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { orbit } from "./ws/fig8.mjs";

export const TITLE = "8.5 Powers and Dynamical Systems";
export const ID = "11a10001-0001-4001-8001-000000000805";

const S = String.raw;
const M = (m) => am(m, false);
const markovFig = sfig(orbit([[0.9, 0.2], [0.1, 0.8]], [1, 0], 12, { raw: true, lines: [[2, 1]] }), "the Markov chain approaches the steady state on the eigen-line of λ = 1");
const growFig = sfig(orbit([[1.25, 0.25], [0.25, 1.25]], [3, 1], 5, { raw: true, lines: [[1, 1]] }), "growth: the iterates turn toward the eigen-line of the largest eigenvalue, 1.5");

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Powers and Dynamical Systems",
    overview: S`Many processes update a state vector by the same matrix each step: \(\vec x_{k+1}=A\vec x_k\), so \(\vec x_k=A^k\vec x_0\). Population models, Markov chains of customers or weather, and linear recurrences all have this form. Computing \(A^{100}\) by repeated multiplication is hopeless, but if \(A=PDP^{-1}\) then \(A^k=PD^kP^{-1}\), and \(D^k\) just raises the eigenvalues to the \(k\)th power. Even better, writing \(\vec x_0\) in the eigenvector basis shows the whole future at a glance: each eigen-component is multiplied by its eigenvalue every step.`,
    goals: [
      "compute \\(A^k=PD^kP^{-1}\\) and a closed formula for \\(A^k\\);",
      "write \\(\\vec x_0=c_1\\vec v_1+\\dots+c_n\\vec v_n\\) by solving \\(P\\vec c=\\vec x_0\\);",
      "give \\(\\vec x_k=c_1\\lambda_1^k\\vec v_1+\\dots+c_n\\lambda_n^k\\vec v_n\\);",
      "find the steady state of a Markov chain;",
      "predict growth, decay and the long-run direction from the eigenvalues.",
    ],
    outcomes: "eigenvalues and eigenvectors: powers and dynamical systems",
    prior: [
      [S`\(\operatorname{diag}(2,3)^4=\)?`, S`\(\operatorname{diag}(16,81)\).`],
      [S`Diagonalisation of \(${M([[7, 2], [-4, 1]])}\)? (8.4)`, S`\(P=${M([[1, 1], [-1, -2]])}\), \(D=\operatorname{diag}(5,3)\).`],
      [S`What happens to \(0.7^k\) as \(k\to\infty\)?`, S`It tends to 0.`],
    ],
    words: [
      ["Dynamical system", "\\(\\vec x_{k+1}=A\\vec x_k\\)", "\\(\\vec x_k=A^k\\vec x_0\\)"],
      ["Eigen-decomposition of \\(\\vec x_0\\)", "\\(\\vec x_0=P\\vec c\\)", "weights \\(\\vec c=P^{-1}\\vec x_0\\)"],
      ["Markov (stochastic) matrix", "nonnegative entries, columns sum to 1", "always has \\(\\lambda=1\\)"],
      ["Steady state", "a probability vector with \\(M\\vec q=\\vec q\\)", "eigenvector for \\(\\lambda=1\\)"],
      ["Dominant eigenvalue", "largest \\(|\\lambda|\\)", "controls the long run"],
    ],
  }),

  section("📌 Powers", S`
  ${theorem("powers of a diagonalisable matrix", S`If \(A=PDP^{-1}\) then \(A^k=PD^kP^{-1}\), where \(D^k=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k)\).`, S`\(A^2=PDP^{-1}PDP^{-1}=PD^2P^{-1}\); each extra factor cancels one \(P^{-1}P\). Induction gives every \(k\).`)}
  ${theorem("solution of x_{k+1} = Ax_k", S`If \(\vec v_1,\dots,\vec v_n\) are independent eigenvectors and \(\vec x_0=c_1\vec v_1+\dots+c_n\vec v_n\) (i.e. \(P\vec c=\vec x_0\)), then \[\vec x_k=A^k\vec x_0=c_1\lambda_1^k\vec v_1+\dots+c_n\lambda_n^k\vec v_n=P\,D^k\vec c.\]`, S`\(A^k\vec v_i=\lambda_i^k\vec v_i\) (apply \(A\) \(k\) times), then use linearity.`)}
  ${keyIdea(S`Components with \(|\lambda|<1\) die out, \(|\lambda|=1\) stay, \(|\lambda|>1\) grow. In the long run \(\vec x_k\) points along the eigenvector of the eigenvalue with the largest \(|\lambda|\) (if its weight is nonzero).`)}
  ${growFig}`),

  section("📌 Markov chains", S`
  ${definition("Markov chain", S`A <strong>stochastic matrix</strong> \(M\) has nonnegative entries and columns summing to 1. With a probability vector \(\vec x_0\) (entries \(\ge0\), sum 1), \(\vec x_{k+1}=M\vec x_k\) is a <strong>Markov chain</strong>. A <strong>steady state</strong> is a probability vector \(\vec q\) with \(M\vec q=\vec q\).`)}
  ${theorem("λ = 1", S`Every stochastic matrix has eigenvalue 1. If some power of \(M\) has all entries positive, the steady state is unique and \(\vec x_k\to\vec q\) for every starting probability vector.`, S`The rows of \(M^T\) sum to 1, so \(M^T${cv(1, "\\vdots", 1)}=${cv(1, "\\vdots", 1)}\); \(M\) and \(M^T\) have the same eigenvalues. (The convergence statement is the Perron–Frobenius theorem, quoted here.)`)}
  ${markovFig}`),

  section("📌 Explore", S`<p>Choose a \(2\times2\) matrix and a starting vector. The explorer plots \(\vec x_0,\vec x_1,\vec x_2,\dots\) and the eigen-lines. Make one eigenvalue larger than 1 and one smaller and watch the iterates line up with the dominant direction.</p>`),
  widget("laOrbit", { init: { set: "markov" } }),

  section("📌 Common mistakes", watchOut([
    "A^k ≠ (entries of A)^k: only the diagonal matrix D is powered entrywise.",
    "Find the weights c from Pc = x₀ — do not read them off x₀.",
    "A Markov steady state must be scaled so its entries sum to 1.",
    "Columns (not rows) of a stochastic matrix sum to 1 when states are column vectors.",
    "Eigenvalues with |λ| < 1 shrink but never reach exactly 0 in finitely many steps.",
  ])),

  examples([
    ["A cube by diagonalisation", S`Compute \(A^3\) for \(A=${M([[7, 2], [-4, 1]])}\) using \(A=PDP^{-1}\), \(P=${M([[1, 1], [-1, -2]])}\), \(D=\operatorname{diag}(5,3)\), \(P^{-1}=${M([[2, 1], [-1, -1]])}\).`,
      [S`\(D^3=\operatorname{diag}(125,27)\). \[PD^3=${M([[1, 1], [-1, -2]])}${M([[125, 0], [0, 27]])}=${M([[125, 27], [-125, -54]])}.\]`,
        S`\[A^3=(PD^3)P^{-1}=${M([[125, 27], [-125, -54]])}${M([[2, 1], [-1, -1]])}=${M([["250-27", "125-27"], ["-250+54", "-125+54"]])}=${M([[223, 98], [-196, -71]])}.\]`,
        S`Check: \(\operatorname{tr}A^3=223-71=152=5^3+3^3\) ✓ and \(\det A^3=15^3=3375=223(-71)+98\cdot196\) ✓.`],
      S`\(A^3=${M([[223, 98], [-196, -71]])}\)`],
    ["A formula for every power", S`Find a formula for \(A^k\), \(A=${M([[7, 2], [-4, 1]])}\).`,
      [S`\[A^k=PD^kP^{-1}=${M([[1, 1], [-1, -2]])}${M([["5^k", 0], [0, "3^k"]])}${M([[2, 1], [-1, -1]])}=${M([["5^k", "3^k"], ["-5^k", "-2\\cdot3^k"]])}${M([[2, 1], [-1, -1]])}.\]`,
        S`\[A^k=${M([["2\\cdot5^k-3^k", "5^k-3^k"], ["-2\\cdot5^k+2\\cdot3^k", "-5^k+2\\cdot3^k"]])}.\]`,
        S`Check \(k=1\): \(${M([["10-3", "5-3"], ["-10+6", "-5+6"]])}=${M([[7, 2], [-4, 1]])}\) ✓; \(k=3\): \(2(125)-27=223\) ✓.`],
      S`\(A^k=${M([["2\\cdot5^k-3^k", "5^k-3^k"], ["-2\\cdot5^k+2\\cdot3^k", "-5^k+2\\cdot3^k"]])}\)`],
    ["A Markov chain", S`Each month 10% of customers of company X switch to Y and 20% of Y's switch to X: \(M=${M([["0.9", "0.2"], ["0.1", "0.8"]])}\). Starting with all customers at X, find \(\vec x_k\), \(\vec x_{10}\) and the steady state.`,
      [S`\(\lambda=1\): \(M-I=${M([["-0.1", "0.2"], ["0.1", "-0.2"]])}\xrightarrow{R_2\to R_2+R_1}${M([["-0.1", "0.2"], [0, 0]])}\): \(\vec v_1=(2,1)\). \(\operatorname{tr}M=1.7\), so \(\lambda_2=0.7\): \(M-0.7I=${M([["0.2", "0.2"], ["0.1", "0.1"]])}\): \(\vec v_2=(1,-1)\).`,
        S`Weights: \(P\vec c=\vec x_0\): \[${am([[2, 1, 1], [1, -1, 0]])}\xrightarrow{R_1\leftrightarrow R_2}${am([[1, -1, 0], [2, 1, 1]])}\xrightarrow{R_2\to R_2-2R_1}${am([[1, -1, 0], [0, 3, 1]])}:\ c_2=\tfrac13,\ c_1=\tfrac13.\]`,
        S`\[\vec x_k=\tfrac13${cv(2, 1)}+\tfrac13(0.7)^k${cv(1, -1)}.\] With \(0.7^{10}\approx0.02825\): \(\vec x_{10}\approx(0.6761,\ 0.3239)\).`,
        S`As \(k\to\infty\), \(\vec x_k\to\vec q=(\tfrac23,\tfrac13)\). Check \(M\vec q=${cv("0.9\\cdot\\tfrac23+0.2\\cdot\\tfrac13", "0.1\\cdot\\tfrac23+0.8\\cdot\\tfrac13")}=${cv("\\tfrac23", "\\tfrac13")}\) ✓.`],
      S`\(\vec x_k=\tfrac13(2,1)+\tfrac13(0.7)^k(1,-1)\); steady state \((\tfrac23,\tfrac13)\)`, markovFig],
    ["Growth along the dominant direction", S`\(\vec x_{k+1}=A\vec x_k\) with \(A=${M([["1.25", "0.25"], ["0.25", "1.25"]])}\) and \(\vec x_0=(3,1)\). Find \(\vec x_k\) and describe the long run.`,
      [S`\(A${cv(1, 1)}=${cv("1.25+0.25", "0.25+1.25")}=1.5${cv(1, 1)}\) and \(A${cv(1, -1)}=${cv("1.25-0.25", "0.25-1.25")}=1${cv(1, -1)}\).`,
        S`\(\vec x_0=c_1(1,1)+c_2(1,-1)\): \(${am([[1, 1, 3], [1, -1, 1]])}\xrightarrow{R_2\to R_2-R_1}${am([[1, 1, 3], [0, -2, -2]])}\): \(c_2=1\), \(c_1=2\).`,
        S`\[\vec x_k=2(1.5)^k${cv(1, 1)}+${cv(1, -1)}.\] The first part grows by 50% each step, the second stays fixed: \(\vec x_k\) grows without bound and its direction approaches \((1,1)\).`,
        S`Check \(k=1\): \(A${cv(3, 1)}=${cv("3.75+0.25", "0.75+1.25")}=${cv(4, 2)}\) and \(2(1.5)${cv(1, 1)}+${cv(1, -1)}=${cv(4, 2)}\) ✓.`],
      S`\(\vec x_k=2(1.5)^k(1,1)+(1,-1)\): growth along \((1,1)\)`, growFig],
    ["A 3 × 3 system", S`\(A=${M([[1, 1, 0], [1, 2, 1], [0, 1, 1]])}\) has eigenvectors \((1,2,1)\), \((1,0,-1)\), \((1,-1,1)\) with eigenvalues \(3,1,0\) (8.3). Find \(\vec x_k=A^k\vec x_0\) for \(\vec x_0=(1,0,0)\).`,
      [S`Solve \(P\vec c=\vec x_0\): \[${am([[1, 1, 1, 1], [2, 0, -1, 0], [1, -1, 1, 0]])}\xrightarrow{R_2\to R_2-2R_1,\ R_3\to R_3-R_1}${am([[1, 1, 1, 1], [0, -2, -3, -2], [0, -2, 0, -1]])}\xrightarrow{R_3\to R_3-R_2}${am([[1, 1, 1, 1], [0, -2, -3, -2], [0, 0, 3, 1]])}.\]`,
        S`\(c_3=\tfrac13\); \(-2c_2-1=-2\Rightarrow c_2=\tfrac12\); \(c_1=1-\tfrac12-\tfrac13=\tfrac16\).`,
        S`For \(k\ge1\) the \(\lambda=0\) part vanishes: \[\vec x_k=\tfrac16\,3^k${cv(1, 2, 1)}+\tfrac12${cv(1, 0, -1)}.\] Check \(k=1\): \(\tfrac12${cv(1, 2, 1)}+\tfrac12${cv(1, 0, -1)}=${cv(1, 1, 0)}=A${cv(1, 0, 0)}\) ✓.`],
      S`\(\vec x_k=\tfrac16 3^k(1,2,1)+\tfrac12(1,0,-1)\) for \(k\ge1\)`],
  ]),

  practice([
    q("power", S`\(A=P\operatorname{diag}(2,-1)P^{-1}\). Find the \((1,1)\) entry of \(D^5\).`, num(32),
      "2⁵.", [S`\(D^5=\operatorname{diag}(32,-1)\).`], S`\(32\)`),
    q("long run", S`\(\vec x_k=4(0.5)^k\vec v_1+3\vec v_2\). As \(k\to\infty\), \(\vec x_k\to c\vec v_2\). Find \(c\).`, num(3),
      "0.5ᵏ → 0.", [S`Only the \(\lambda=1\) term remains.`], S`\(3\)`),
    q("Markov", S`The steady state of \(${M([["0.7", "0.4"], ["0.3", "0.6"]])}\) is \((q,1-q)\). Find \(q\). (Decimal.)`, num(0.5714, 0.001),
      "Solve (M − I)q = 0.", [S`\(-0.3q+0.4(1-q)=0\Rightarrow q=\tfrac47\).`], S`\(\tfrac47\)`),
    q("growth", S`\(A\) has eigenvalues \(1.2\) and \(0.8\). For a typical \(\vec x_0\), \(\vec x_k\):`, choice(["grows without bound", "tends to 0", "stays bounded and nonzero", "oscillates"], 0),
      "|1.2| > 1.", [S`The \(1.2^k\) term dominates.`], S`grows without bound`),
    q("stochastic", S`Every stochastic matrix has which eigenvalue?`, num(1),
      "Columns sum to 1.", [S`\(M^T(1,\dots,1)=(1,\dots,1)\).`], S`\(1\)`),
  ]),

  ...hard([
    ["The limit of the powers", S`For \(M=${M([["0.9", "0.2"], ["0.1", "0.8"]])}\), find \(\lim_{k\to\infty}M^k\) and interpret it.`,
      [S`\(M=PDP^{-1}\) with \(P=${M([[2, 1], [1, -1]])}\), \(D=\operatorname{diag}(1,\ 0.7)\), \(\det P=-3\), \(P^{-1}=\tfrac13${M([[1, 1], [1, -2]])}\).`,
        S`\(D^k\to\operatorname{diag}(1,0)\), so \[M^k\to P${M([[1, 0], [0, 0]])}P^{-1}=${M([[2, 0], [1, 0]])}\cdot\tfrac13${M([[1, 1], [1, -2]])}=\tfrac13${M([[2, 2], [1, 1]])}.\]`,
        S`Every column is the steady state \((\tfrac23,\tfrac13)\): whatever the starting split, the market ends at two thirds X, one third Y.`],
      S`\(\lim M^k=\tfrac13${M([[2, 2], [1, 1]])}\)`],
    ["A recurrence as a matrix system", S`Solve \(a_{k+2}=3a_{k+1}-2a_k\) with \(a_0=1\), \(a_1=3\) by writing \(\vec x_k=(a_k,a_{k+1})\).`,
      [S`\(\vec x_{k+1}=${cv("a_{k+1}", "a_{k+2}")}=${M([[0, 1], [-2, 3]])}${cv("a_k", "a_{k+1}")}=A\vec x_k\), \(\vec x_0=(1,3)\).`,
        S`\(p(\lambda)=\lambda^2-3\lambda+2=(\lambda-1)(\lambda-2)\). \(\lambda=1\): \(A-I=${M([[-1, 1], [-2, 2]])}\): \((1,1)\). \(\lambda=2\): \(A-2I=${M([[-2, 1], [-2, 1]])}\): \((1,2)\).`,
        S`\(${am([[1, 1, 1], [1, 2, 3]])}\xrightarrow{R_2\to R_2-R_1}${am([[1, 1, 1], [0, 1, 2]])}\): \(c_2=2\), \(c_1=-1\). \(\vec x_k=-${cv(1, 1)}+2\cdot2^k${cv(1, 2)}\), so \(a_k=2^{k+1}-1\).`,
        S`Check: \(a_0=1\), \(a_1=3\), \(a_2=3(3)-2(1)=7=2^3-1\), \(a_3=3(7)-2(3)=15=2^4-1\) ✓.`],
      S`\(a_k=2^{k+1}-1\)`],
  ], [
    q("hard", S`\(a_k=2^{k+1}-1\) solves \(a_{k+2}=3a_{k+1}-2a_k\). Find \(a_5\).`, num(63),
      "2⁶ − 1.", [S`\(64-1\).`], S`\(63\)`),
    q("hard", S`\(A=P\operatorname{diag}(1,\tfrac12)P^{-1}\) with \(P=${M([[1, 1], [1, -1]])}\). Find the \((1,1)\) entry of \(\lim A^k\). (Decimal.)`, num(0.5, 0.001),
      "P diag(1,0) P⁻¹.", [S`\(${M([[1, 0], [1, 0]])}\cdot\tfrac12${M([[1, 1], [1, -1]])}=\tfrac12${M([[1, 1], [1, 1]])}\).`], S`\(\tfrac12\)`),
    q("hard", S`\(\vec x_k=c_1(1.1)^k\vec v_1+c_2(0.9)^k\vec v_2\) with \(c_1=0\), \(c_2\ne0\). Then \(\vec x_k\):`, choice(["tends to 0", "grows", "is constant", "oscillates"], 0),
      "Only the 0.9 term.", [S`\(0.9^k\to0\).`], S`tends to 0`),
  ]),

  wrapUp({
    qas: [
      ["How do I compute A^k?", "A^k = PD^kP⁻¹ with D^k = diag(λᵢ^k)."],
      ["How do I solve x_{k+1} = Ax_k?", "Solve Pc = x₀; then x_k = Σ cᵢλᵢ^k vᵢ."],
      ["What decides the long run?", "The eigenvalue of largest absolute value with a nonzero weight."],
      ["What is a steady state?", "A probability vector with Mq = q — an eigenvector for λ = 1."],
      ["How do recurrences fit in?", "Stack consecutive terms into a vector; the recurrence becomes x_{k+1} = Ax_k."],
    ],
    summary: [
      "A^k = PD^kP⁻¹.",
      "x_k = c₁λ₁^k v₁ + … + cₙλₙ^k vₙ, Pc = x₀.",
      "|λ| < 1 decays, = 1 persists, > 1 grows.",
      "Markov: λ = 1, steady state = scaled eigenvector.",
      "Recurrences become matrix systems.",
    ],
    next: "8.6 handles matrices whose eigenvalues are complex: rotations combined with scaling.",
  }),
];
