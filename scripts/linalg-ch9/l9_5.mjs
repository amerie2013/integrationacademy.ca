// LINALG1 9.5 — The Gram–Schmidt Process: turning a basis into an orthogonal (then orthonormal) basis of the same
// subspace by subtracting projections, in ℝ², ℝ³ and ℝ⁴; scaling to clear fractions; detecting dependence (a zero
// vector); checking with WᵀW diagonal — every dot product and combination written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, frac, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { gsPlane } from "./ws/fig9.mjs";
import { vecs3 } from "./ws/fig5.mjs";

export const TITLE = "9.5 The Gram–Schmidt Process";
export const ID = "11a10001-0001-4001-8001-000000000905";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const gsFig = sfig(gsPlane([3, 1], [1, 2], { raw: true }), "w₂ = v₂ − (projection of v₂ onto w₁) is perpendicular to w₁");
const gs3Fig = sfig(vecs3([[[1, 1, 0], "w₁", "blue"], [[1, -1, 2], "w₂", "red"], [[-1, 1, 1], "w₃", "green"]], { raw: true }), "the orthogonal basis produced in Example 2");

export const blocks = () => [
  intro({
    icon: "🧹",
    title: "The Gram–Schmidt Process",
    overview: S`Orthogonal bases make projections, coordinates and least squares easy — but subspaces rarely come with one. The <strong>Gram–Schmidt process</strong> manufactures an orthogonal basis from any basis: keep the first vector, then from each new vector subtract its projections onto the vectors already chosen. What remains is perpendicular to all of them, and the span never changes. Normalising at the end gives an orthonormal basis, ready for \(Q\) in the QR factorisation of 9.6.`,
    goals: [
      "apply Gram–Schmidt to two, three or four vectors;",
      "compute each coefficient \\(\\vec v_k^T\\vec w_j/\\vec w_j^T\\vec w_j\\) as a dot-product quotient;",
      "scale intermediate vectors to clear fractions;",
      "normalise to an orthonormal basis and check \\(W^TW\\) is diagonal;",
      "recognise a dependent input (a zero vector appears).",
    ],
    outcomes: "orthogonality: the Gram–Schmidt process",
    prior: [
      [S`Projection of \((1,2)\) onto \((3,1)\)?`, S`\(\tfrac{5}{10}(3,1)=(1.5,0.5)\).`],
      [S`Does scaling a vector change its span?`, S`No (for a nonzero scale factor).`],
      [S`What does \(W^TW\) diagonal mean?`, S`The columns of \(W\) are orthogonal.`],
    ],
    words: [
      ["Gram–Schmidt", "subtract projections onto earlier vectors", "orthogonalises a basis"],
      ["\\(\\vec w_k\\)", "\\(\\vec v_k\\) minus its projections onto \\(\\vec w_1,\\dots,\\vec w_{k-1}\\)", "perpendicular to them"],
      ["Same span", "\\(\\operatorname{span}\\{\\vec w_1..\\vec w_k\\}=\\operatorname{span}\\{\\vec v_1..\\vec v_k\\}\\)", "at every stage"],
      ["Normalise", "\\(\\vec q_k=\\vec w_k/|\\vec w_k|\\)", "orthonormal basis"],
      ["Rescaling", "replace \\(\\vec w_k\\) by a multiple", "keeps orthogonality, clears fractions"],
    ],
  }),

  section("📌 The process", S`
  ${theorem("Gram–Schmidt", S`Given a basis \(\vec v_1,\dots,\vec v_p\) of \(W\), define \[\vec w_1=\vec v_1,\qquad \vec w_k=\vec v_k-\frac{\vec v_k^T\vec w_1}{\vec w_1^T\vec w_1}\vec w_1-\dots-\frac{\vec v_k^T\vec w_{k-1}}{\vec w_{k-1}^T\vec w_{k-1}}\vec w_{k-1}.\] Then \(\vec w_1,\dots,\vec w_p\) is an orthogonal basis of \(W\), and \(\operatorname{span}\{\vec w_1,\dots,\vec w_k\}=\operatorname{span}\{\vec v_1,\dots,\vec v_k\}\) for each \(k\).`, S`Induction: if \(\vec w_1,\dots,\vec w_{k-1}\) are orthogonal with the right span, then \(\vec w_k=\vec v_k-\hat v_k\), where \(\hat v_k\) is the projection of \(\vec v_k\) onto \(W_{k-1}=\operatorname{span}\{\vec w_1..\vec w_{k-1}\}\) (9.3). So \(\vec w_k\perp W_{k-1}\). \(\vec w_k\ne\vec 0\) because \(\vec v_k\notin W_{k-1}\), and \(\vec w_k\) is a combination of \(\vec v_1..\vec v_k\), so the spans agree.`)}
  ${keyIdea(S`After each step you may replace \(\vec w_k\) by any nonzero multiple (to clear fractions) — orthogonality and span are unchanged. Just use the scaled vector consistently in later steps.`)}
  ${gsFig}`),

  section("📌 Orthonormal bases and checks", S`
  <p>Divide each \(\vec w_k\) by its length to get an orthonormal basis \(\vec q_1,\dots,\vec q_p\). A quick check of the whole computation is one product: \(W^TW\) must be diagonal, where \(W=[\vec w_1\cdots\vec w_p]\), and \(Q^TQ=I\) after normalising.</p>
  ${definition("dependence detector", S`If the input vectors are dependent, at some step \(\vec v_k\) already lies in the span of the earlier vectors, and Gram–Schmidt produces \(\vec w_k=\vec 0\). Drop that vector and continue.`)}
  ${gs3Fig}`),

  section("📌 Explore", S`<p>Move \(\vec v_1\) and \(\vec v_2\). The explorer subtracts the projection of \(\vec v_2\) onto \(\vec v_1\) and draws \(\vec w_2\); the readout shows the coefficient and the check \(\vec w_1^T\vec w_2=0\). Make the vectors parallel and \(\vec w_2\) collapses to \(\vec 0\).</p>`),
  widget("laGS", { init: { a: 3, b: 1, c: 1, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "Subtract projections onto the NEW vectors w₁, …, not onto the original v's.",
    "The coefficient is vₖᵀwⱼ / wⱼᵀwⱼ — divide by the squared length of wⱼ.",
    "If you rescale a wⱼ, use the rescaled vector in every later step.",
    "Normalise at the end (or at each step), but do not forget to.",
    "A zero vector means the inputs were dependent — not an arithmetic error.",
  ])),

  examples([
    ["Two vectors in ℝ²", S`Apply Gram–Schmidt to \(\vec v_1=(3,1)\), \(\vec v_2=(1,2)\).`,
      [S`\(\vec w_1=\vec v_1=(3,1)\). Coefficient: \(\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{${T([1, 2])}${cv(3, 1)}}{${T([3, 1])}${cv(3, 1)}}=\dfrac{3+2}{9+1}=\dfrac12\).`,
        S`\[\vec w_2=\vec v_2-\tfrac12\vec w_1=${cv(1, 2)}-\tfrac12${cv(3, 1)}=${cv("-\\tfrac12", "\\tfrac32")};\ \text{rescale: }\vec w_2=${cv(-1, 3)}.\]`,
        S`Check: \(\vec w_1^T\vec w_2=${T([3, 1])}${cv(-1, 3)}=-3+3=0\) ✓. Orthonormal: \(\tfrac1{\sqrt{10}}(3,1)\), \(\tfrac1{\sqrt{10}}(-1,3)\).`],
      S`\(\vec w_1=(3,1)\), \(\vec w_2=(-1,3)\)`, gsFig],
    ["Three vectors in ℝ³", S`Apply Gram–Schmidt to \(\vec v_1=(1,1,0)\), \(\vec v_2=(1,0,1)\), \(\vec v_3=(0,1,1)\).`,
      [S`\(\vec w_1=(1,1,0)\). \(\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{1+0+0}{2}=\dfrac12\): \(\vec w_2=${cv(1, 0, 1)}-\tfrac12${cv(1, 1, 0)}=${cv("\\tfrac12", "-\\tfrac12", 1)}\); rescale \(\vec w_2=(1,-1,2)\).`,
        S`\(\dfrac{\vec v_3^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{0+1+0}2=\dfrac12\), \(\dfrac{\vec v_3^T\vec w_2}{\vec w_2^T\vec w_2}=\dfrac{0-1+2}{1+1+4}=\dfrac16\): \[\vec w_3=${cv(0, 1, 1)}-\tfrac12${cv(1, 1, 0)}-\tfrac16${cv(1, -1, 2)}=${cv("0-\\tfrac12-\\tfrac16", "1-\\tfrac12+\\tfrac16", "1-0-\\tfrac13")}=${cv("-\\tfrac23", "\\tfrac23", "\\tfrac23")};\ \text{rescale }(-1,1,1).\]`,
        S`Check all at once: \[W^TW=${M([[1, 1, 0], [1, -1, 2], [-1, 1, 1]])}${M([[1, 1, -1], [1, -1, 1], [0, 2, 1]])}=${M([[2, 0, 0], [0, 6, 0], [0, 0, 3]])}\ \checkmark\]`],
      S`\((1,1,0)\), \((1,-1,2)\), \((-1,1,1)\)`, gs3Fig],
    ["An orthonormal basis", S`Normalise the result of Example 2 and verify \(Q^TQ=I\).`,
      [S`Lengths \(\sqrt2,\sqrt6,\sqrt3\) (the diagonal of \(W^TW\)): \[Q=${M([["\\tfrac1{\\sqrt2}", "\\tfrac1{\\sqrt6}", "-\\tfrac1{\\sqrt3}"], ["\\tfrac1{\\sqrt2}", "-\\tfrac1{\\sqrt6}", "\\tfrac1{\\sqrt3}"], [0, "\\tfrac2{\\sqrt6}", "\\tfrac1{\\sqrt3}"]])}.\]`,
        S`\(Q^TQ=\operatorname{diag}\big(\tfrac22,\tfrac66,\tfrac33\big)=I\): dividing column \(j\) by \(|\vec w_j|\) divides the \((j,j)\) entry of \(W^TW\) by \(|\vec w_j|^2\), and the off-diagonal zeros stay zero.`],
      S`\(Q\) as shown`],
    ["A subspace of ℝ⁴", S`Find an orthogonal basis of \(W=\operatorname{span}\{(1,1,1,1),(1,2,0,1),(2,1,1,0)\}\).`,
      [S`\(\vec w_1=(1,1,1,1)\), \(\vec w_1^T\vec w_1=4\). \(\vec v_2^T\vec w_1=1+2+0+1=4\): \(\vec w_2=${cv(1, 2, 0, 1)}-1\cdot${cv(1, 1, 1, 1)}=${cv(0, 1, -1, 0)}\), \(\vec w_2^T\vec w_2=2\).`,
        S`\(\vec v_3^T\vec w_1=2+1+1+0=4\) (coefficient 1), \(\vec v_3^T\vec w_2=0+1-1+0=0\) (coefficient 0): \[\vec w_3=${cv(2, 1, 1, 0)}-${cv(1, 1, 1, 1)}-0\cdot${cv(0, 1, -1, 0)}=${cv(1, 0, 0, -1)}.\]`,
        S`Check: \(W^TW=${M([[1, 1, 1, 1], [0, 1, -1, 0], [1, 0, 0, -1]])}${M([[1, 0, 1], [1, 1, 0], [1, -1, 0], [1, 0, -1]])}=${M([[4, 0, 0], [0, 2, 0], [0, 0, 2]])}\) ✓.`],
      S`\((1,1,1,1)\), \((0,1,-1,0)\), \((1,0,0,-1)\)`],
    ["A dependent input", S`Apply Gram–Schmidt to \(\vec v_1=(1,2,1)\), \(\vec v_2=(2,4,2)\), \(\vec v_3=(1,0,1)\).`,
      [S`\(\vec w_1=(1,2,1)\). \(\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{2+8+2}{6}=2\): \(\vec w_2=${cv(2, 4, 2)}-2${cv(1, 2, 1)}=\vec 0\) — \(\vec v_2\) depends on \(\vec v_1\). Drop it.`,
        S`\(\dfrac{\vec v_3^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{1+0+1}6=\dfrac13\): \(\vec w_3=${cv(1, 0, 1)}-\tfrac13${cv(1, 2, 1)}=${cv("\\tfrac23", "-\\tfrac23", "\\tfrac23")}\), rescale \((1,-1,1)\). Check \((1,2,1)\cdot(1,-1,1)=1-2+1=0\) ✓.`],
      S`the span is a plane with orthogonal basis \((1,2,1)\), \((1,-1,1)\)`],
  ]),

  practice([
    q("coefficient", S`\(\vec w_1=(1,1)\), \(\vec v_2=(4,2)\). Find \(\vec v_2^T\vec w_1/\vec w_1^T\vec w_1\).`, num(3),
      "6/2.", [S`\(\tfrac{4+2}{2}\).`], S`\(3\)`),
    q("w₂", S`Same data: \(\vec w_2=\vec v_2-3\vec w_1=(a,b)\). Find \(a\).`, num(1),
      "4 − 3.", [S`\((4,2)-(3,3)=(1,-1)\).`], S`\(1\)`),
    q("check", S`Gram–Schmidt produced \(\vec w_1=(1,2,0)\), \(\vec w_2=(2,k,5)\). Find \(k\).`, num(-1),
      "w₁ · w₂ = 0.", [S`\(2+2k=0\).`], S`\(-1\)`),
    q("zero", S`Gram–Schmidt gives \(\vec w_3=\vec 0\). This means:`, choice(["v₃ is in the span of v₁, v₂", "an arithmetic error was made", "v₃ = 0", "W is not a subspace"], 0),
      "Nothing new left.", [S`\(\vec v_3\) equals its projection onto \(W_2\).`], "v₃ is in the span of v₁, v₂"),
    q("normalise", S`Normalise \((2,-1,2)\). Give the first entry. (Decimal.)`, num(0.6667),
      "Length 3.", [S`\(\tfrac13(2,-1,2)\).`], S`\(\tfrac23\)`),
  ]),

  ...hard([
    ["An orthogonal basis of a plane given by an equation", S`Find an orthonormal basis of the plane \(W:\ x_1+x_2-x_3=0\) in \(\mathbb R^3\).`,
      [S`A basis: \(x_2=s\), \(x_3=t\), \(x_1=-s+t\): \(\vec v_1=(-1,1,0)\), \(\vec v_2=(1,0,1)\).`,
        S`\(\vec w_1=(-1,1,0)\). \(\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}=\dfrac{-1+0+0}{2}=-\tfrac12\): \(\vec w_2=${cv(1, 0, 1)}+\tfrac12${cv(-1, 1, 0)}=${cv("\\tfrac12", "\\tfrac12", 1)}\); rescale \((1,1,2)\).`,
        S`Check: \((-1,1,0)\cdot(1,1,2)=0\) ✓, and \(1+1-2=0\) ✓ (in \(W\)). Orthonormal: \(\tfrac1{\sqrt2}(-1,1,0)\), \(\tfrac1{\sqrt6}(1,1,2)\).`],
      S`\(\tfrac1{\sqrt2}(-1,1,0)\), \(\tfrac1{\sqrt6}(1,1,2)\)`],
    ["Why each new vector is perpendicular", S`Prove that \(\vec w_2=\vec v_2-\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}\vec w_1\) is orthogonal to \(\vec w_1\), and that \(\vec w_2\ne\vec 0\) when \(\vec v_1,\vec v_2\) are independent.`,
      [S`\(\vec w_1^T\vec w_2=\vec w_1^T\vec v_2-\dfrac{\vec v_2^T\vec w_1}{\vec w_1^T\vec w_1}\vec w_1^T\vec w_1=\vec w_1^T\vec v_2-\vec v_2^T\vec w_1=0\).`,
        S`If \(\vec w_2=\vec 0\), then \(\vec v_2=c\vec w_1=c\vec v_1\), contradicting independence.`],
      S`\(\vec w_1^T\vec w_2=0\); \(\vec w_2=\vec 0\) would make \(\vec v_2\) a multiple of \(\vec v_1\)`],
  ], [
    q("hard", S`Gram–Schmidt on \((1,0,1),(1,1,1)\): find the second entry of \(\vec w_2\).`, num(1),
      "Coefficient 2/2 = 1.", [S`\(\vec w_2=(1,1,1)-(1,0,1)=(0,1,0)\).`], S`\(1\)`),
    q("hard", S`Gram–Schmidt on \((1,1,1,1),(1,1,0,0)\): \(\vec w_2=(a,a,-a,-a)\). Find \(a\). (Decimal.)`, num(0.5),
      "Coefficient 2/4.", [S`\((1,1,0,0)-\tfrac12(1,1,1,1)\).`], S`\(\tfrac12\)`),
    q("hard", S`Gram–Schmidt on \(p\) vectors spanning a 2-dimensional subspace produces how many nonzero \(\vec w\)'s?`, num(2),
      "One per dimension.", [S`The others become \(\vec 0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What does Gram–Schmidt do?", "Turns any basis into an orthogonal basis of the same subspace."],
      ["What is the formula?", "wₖ = vₖ − Σ (vₖᵀwⱼ / wⱼᵀwⱼ) wⱼ over the earlier w's."],
      ["Can I rescale?", "Yes — any nonzero multiple of wₖ keeps orthogonality and span."],
      ["How do I check the result?", "WᵀW must be diagonal; after normalising, QᵀQ = I."],
      ["What if a zero vector appears?", "That input depended on the earlier ones; drop it."],
    ],
    summary: [
      "w₁ = v₁; wₖ = vₖ − projections onto w₁…wₖ₋₁.",
      "Same span at every stage.",
      "Rescale to clear fractions.",
      "Normalise for an orthonormal basis.",
      "Zero vector ⇒ dependence.",
    ],
    next: "9.6 records Gram–Schmidt as a factorisation A = QR.",
  }),
];
