// LINALG1 5.5 — Orthogonal and Orthonormal Bases: orthogonal sets, why orthogonal nonzero vectors are independent,
// orthogonal bases, coordinates by dot products (cᵢ = x·vᵢ / ‖vᵢ‖²), orthonormal sets and bases (cᵢ = x·vᵢ),
// normalising, and completing an orthogonal set in ℝ³.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, cv, am, steps } from "./lib.mjs";
import { vfig, scene3, a3, pt3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.5 Orthogonal and Orthonormal Bases";
export const ID = "11a10001-0001-4001-8001-000000000505";

const S = String.raw;
const orth2 = vfig({ view: { xmin: -1.5, xmax: 5.5, ymin: -2.5, ymax: 4.5 }, step: 1, width: 290,
  segs: [{ pts: [[2, 4], [4, 3]], color: "#94a3b8", w: 1.2, dash: true }, { pts: [[2, -1], [4, 3]], color: "#94a3b8", w: 1.2, dash: true }],
  arrows: [{ from: [0, 0], to: [2, 4], color: "blue", w: 1.6, dash: true }, { from: [0, 0], to: [1, 2], color: "blue", w: 2.8, label: "v₁" }, { from: [0, 0], to: [2, -1], color: "red", w: 2.8, label: "v₂" }, { from: [0, 0], to: [4, 3], color: "green", w: 2.8, label: "x" }] },
  "x = (4, 3) = 2v₁ + 1v₂ with v₁ = (1, 2), v₂ = (2, −1): c₁ = 10/5, c₂ = 5/5 (dashed: the projection 2v₁)");
const orthoR3 = vfig(scene3(1.4, { arrows: [a3([0, 0, 0], [1 / 3, 2 / 3, 2 / 3], { color: "blue", vl: "w₁", off: 12 }), a3([0, 0, 0], [2 / 3, 1 / 3, -2 / 3], { color: "red", vl: "w₂", off: -12 }), a3([0, 0, 0], [2 / 3, -2 / 3, 1 / 3], { color: "green", vl: "w₃", off: 12 })], points: [pt3([0, 0, 0], "0", { color: "black", dx: -12 })] }),
  "an orthonormal basis of ℝ³: three mutually perpendicular unit vectors");
const planeOrth = vfig(scene3(3, { polys: [patch3([0, 0, 0], [1, 0, -1], [1, 2, 1], 1.05, "#ede9fe", "violet", 0.5)],
  arrows: [a3([0, 0, 0], [1, 0, -1], { color: "blue", vl: "v₁", off: 14 }), a3([0, 0, 0], [1, 2, 1], { color: "red", vl: "v₂", off: -14 }), a3([0, 0, 0], [3, 4, 1], { color: "green", label: "x = v₁ + 2v₂", off: 14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "an orthogonal basis of a plane in ℝ³ and a vector of the plane");

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Orthogonal and Orthonormal Bases",
    overview: S`Finding coordinates in a general basis means solving a linear system. But if the basis vectors are mutually perpendicular — an <strong>orthogonal basis</strong> — each coordinate is a single dot product divided by a squared length, and if they also have length 1 — an <strong>orthonormal basis</strong> — each coordinate <em>is</em> a dot product. The standard basis is the most familiar example. This lesson shows why orthogonal nonzero vectors are automatically independent, derives the coordinate formula, and shows how to normalise an orthogonal basis.`,
    goals: [
      "decide whether a set of vectors is orthogonal or orthonormal;",
      "prove that an orthogonal set of nonzero vectors is linearly independent;",
      "find coordinates in an orthogonal basis with \\(c_i=\\vec x\\cdot\\vec v_i/\\|\\vec v_i\\|^2\\);",
      "normalise an orthogonal basis and find coordinates in an orthonormal basis;",
      "complete an orthogonal set in \\(\\mathbb R^3\\) by solving a homogeneous system.",
    ],
    outcomes: "subspaces of Rⁿ: orthogonal and orthonormal sets, bases and coordinates",
    prior: [
      [S`Compute \((1,2,-1)\cdot(3,0,3)\).`, S`\(3+0-3=0\): the vectors are orthogonal (Chapter 1).`],
      [S`Find \(\|(2,1,-2)\|\).`, S`\(\sqrt{4+1+4}=3\).`],
      [S`Find the coordinates of \((3,5)\) in the basis \(\{(1,1),(1,2)\}\).`, S`Solve a system: \((1,2)\) (5.3).`],
    ],
    words: [
      ["Orthogonal set", "every pair of distinct vectors has dot product 0", "\\(\\{(1,2),(2,-1)\\}\\)"],
      ["Orthonormal set", "orthogonal, and every vector has length 1", "\\(\\{\\vec e_1,\\vec e_2,\\vec e_3\\}\\)"],
      ["Orthogonal basis", "a basis that is an orthogonal set", "\\(\\{(1,1),(1,-1)\\}\\) of \\(\\mathbb R^2\\)"],
      ["Normalise", "divide a nonzero vector by its length", "\\((3,4)\\to(\\tfrac35,\\tfrac45)\\)"],
      ["Fourier coefficient", "\\(c_i=\\dfrac{\\vec x\\cdot\\vec v_i}{\\|\\vec v_i\\|^2}\\)", "a coordinate in an orthogonal basis"],
    ],
  }),

  section("📌 Orthogonal sets are independent", S`
  ${definition("orthogonal set", S`A set \(\{\vec v_1,\dots,\vec v_k\}\) in \(\mathbb R^n\) is <strong>orthogonal</strong> if \(\vec v_i\cdot\vec v_j=0\) whenever \(i\ne j\).`)}
  <p>An orthogonal set may contain \(\vec 0\) (which is orthogonal to everything) — and then it is dependent. Without the zero vector, orthogonality forces independence:</p>
  ${theorem("orthogonal ⇒ independent", S`An orthogonal set of <strong>nonzero</strong> vectors is linearly independent.`, S`Suppose \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\). Dot both sides with \(\vec v_i\): every term \(c_j\,\vec v_j\cdot\vec v_i\) with \(j\ne i\) vanishes, leaving \(c_i\|\vec v_i\|^2=\vec v_i\cdot\vec 0=0\). Since \(\vec v_i\ne\vec 0\), \(\|\vec v_i\|^2\ne0\), so \(c_i=0\) — for every \(i\).`)}
  ${keyIdea(S`So \(k\) nonzero orthogonal vectors in a \(k\)-dimensional subspace are automatically a basis (counting theorem, 5.4): an <strong>orthogonal basis</strong>.`)}`),

  section("📌 Coordinates by dot products", S`
  ${theorem("coordinates in an orthogonal basis", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is an orthogonal basis of \(S\) and \(\vec x\in S\), then \[\vec x=\frac{\vec x\cdot\vec v_1}{\|\vec v_1\|^2}\vec v_1+\dots+\frac{\vec x\cdot\vec v_k}{\|\vec v_k\|^2}\vec v_k.\]`, S`Write \(\vec x=c_1\vec v_1+\dots+c_k\vec v_k\) (possible since the basis spans \(S\)). Dot with \(\vec v_i\): orthogonality kills every term but one, so \(\vec x\cdot\vec v_i=c_i\|\vec v_i\|^2\).`)}
  <p>Each term \(\frac{\vec x\cdot\vec v_i}{\|\vec v_i\|^2}\vec v_i\) is the projection of \(\vec x\) onto \(\vec v_i\) (Chapter 1): for an orthogonal basis, \(\vec x\) is the sum of its projections onto the basis vectors.</p>
  <div style="text-align:center;">${orth2}</div>
  <p><strong>Warning.</strong> The formula assumes \(\vec x\in S\). For a vector outside \(S\) it still produces numbers, but their combination is <em>not</em> \(\vec x\) — always check.</p>`),

  section("📌 Orthonormal bases", S`
  ${definition("orthonormal", S`An orthogonal set is <strong>orthonormal</strong> if every vector has length 1. An orthonormal set that is a basis of \(S\) is an <strong>orthonormal basis</strong>.`)}
  <p><strong>Normalising.</strong> From an orthogonal basis \(\{\vec v_i\}\), the vectors \(\vec w_i=\dfrac{1}{\|\vec v_i\|}\vec v_i\) form an orthonormal basis of the same subspace.</p>
  <p>For an orthonormal basis the denominators are 1: \(\vec x=(\vec x\cdot\vec w_1)\vec w_1+\dots+(\vec x\cdot\vec w_k)\vec w_k\).</p>
  <div style="text-align:center;">${orthoR3}</div>`),

  section("📌 Explore", S`<p>Change \(\vec v_1\); \(\vec v_2\) is always perpendicular to it. Move \(\vec x\) and watch the two coefficients come from dot products. Switch to the orthonormal version: the coefficients change because the basis vectors change, but each is now simply \(\vec x\cdot\vec v_i\).</p>`),
  widget("laOrthoCoords", { init: { a: 1, b: 2 } }),

  section("📌 Common mistakes", watchOut([
    "Check EVERY pair for orthogonality — with 3 vectors that is 3 dot products.",
    "Divide by ‖vᵢ‖², not ‖vᵢ‖, in the orthogonal-basis formula.",
    "Orthogonal does not mean orthonormal: (1, 1) and (1, −1) are orthogonal but have length √2.",
    "The coordinate formula only reproduces x when x is in the subspace.",
    "An orthogonal set that contains 0 is not independent and not a basis.",
  ])),

  examples([
    ["An orthogonal basis of ℝ³", S`Show that \(\mathcal B=\{(1,-1,0),\ (1,1,1),\ (1,1,-2)\}\) is an orthogonal basis of \(\mathbb R^3\).`,
      [S`<strong>All dot products at once.</strong> Put the vectors in the columns of \(B\). Entry \((i,j)\) of \(B^TB\) is \(\vec b_i\cdot\vec b_j\): \[B^TB=${am([[1, -1, 0], [1, 1, 1], [1, 1, -2]], false)}${am([[1, 1, 1], [-1, 1, 1], [0, 1, -2]], false)}=${am([["1+1+0", "1-1+0", "1-1+0"], ["1-1+0", "1+1+1", "1+1-2"], ["1-1+0", "1+1-2", "1+1+4"]], false)}=${am([[2, 0, 0], [0, 3, 0], [0, 0, 6]], false)}.\]`,
        S`Every off-diagonal entry is 0: the vectors are pairwise orthogonal. The diagonal holds \(\|\vec b_1\|^2=2\), \(\|\vec b_2\|^2=3\), \(\|\vec b_3\|^2=6\), all nonzero.`,
        ...steps([[1, 1, 1], [-1, 1, 1], [0, 1, -2]], [
          [S`<strong>Confirm the basis.</strong> Clear column 1.`, ["R2+R1"]],
          [S`Clear column 2 below its pivot.`, ["R3-1/2R2"]],
        ], { bar: false, intro: "Row reduce B" }).steps,
        S`Three pivots: independent (as the theorem on nonzero orthogonal vectors promises), so the three vectors form a basis of \(\mathbb R^3\).`],
      S`an orthogonal basis of \(\mathbb R^3\)`],
    ["Coordinates without solving a system", S`Find the coordinates of \(\vec x=(3,1,2)\) in the orthogonal basis of the previous example.`,
      [S`<strong>All dot products \(\vec b_i\cdot\vec x\) at once:</strong> \[B^T\vec x=${am([[1, -1, 0], [1, 1, 1], [1, 1, -2]], false)}${cv(3, 1, 2)}=${cv("3-1+0", "3+1+2", "3+1-4")}=${cv(2, 6, 0)}.\]`,
        S`Divide each by \(\|\vec b_i\|^2\) (the diagonal \(2,3,6\) of \(B^TB\)): \[c_1=\tfrac22=1,\qquad c_2=\tfrac63=2,\qquad c_3=\tfrac06=0.\]`,
        S`Check by rebuilding \(\vec x=B\vec c\): \[${am([[1, 1, 1], [-1, 1, 1], [0, 1, -2]], false)}${cv(1, 2, 0)}=${cv("1+2+0", "-1+2+0", "0+2-0")}=${cv(3, 1, 2)}\ \checkmark\]`],
      S`\((c_1,c_2,c_3)=(1,2,0)\)`],
    ["An orthonormal basis", S`Normalise the orthogonal set \(\{(1,2,2),(2,1,-2),(2,-2,1)\}\) and find the coordinates of \(\vec x=(3,0,3)\) in the orthonormal basis.`,
      [S`With the vectors as the columns of \(B\): \[B^TB=${am([[1, 2, 2], [2, 1, -2], [2, -2, 1]], false)}${am([[1, 2, 2], [2, 1, -2], [2, -2, 1]], false)}=${am([["1+4+4", "2+2-4", "2-4+2"], ["2+2-4", "4+1+4", "4-2-2"], ["2-4+2", "4-2-2", "4+4+1"]], false)}=${am([[9, 0, 0], [0, 9, 0], [0, 0, 9]], false)}.\] Orthogonal, each of length \(\sqrt9=3\). (This \(B\) is symmetric, so \(B^T=B\).)`,
        S`Divide by 3: \(Q=\tfrac13B\) has orthonormal columns \(\vec w_1=\tfrac13(1,2,2)\), \(\vec w_2=\tfrac13(2,1,-2)\), \(\vec w_3=\tfrac13(2,-2,1)\), and \(Q^TQ=I\).`,
        S`Coordinates \(=Q^T\vec x\): \[\tfrac13${am([[1, 2, 2], [2, 1, -2], [2, -2, 1]], false)}${cv(3, 0, 3)}=\tfrac13${cv("3+0+6", "6+0-6", "6+0+3")}=${cv(3, 0, 3)}.\]`,
        S`Check \(Q\vec c=\vec x\): \[\tfrac13${am([[1, 2, 2], [2, 1, -2], [2, -2, 1]], false)}${cv(3, 0, 3)}=\tfrac13${cv("3+0+6", "6+0-6", "6+0+3")}=${cv(3, 0, 3)}\ \checkmark\]`],
      S`coordinates \((3,0,3)\): \(\vec x=3\vec w_1+0\vec w_2+3\vec w_3\)`, orthoR3],
    ["Inside or outside the plane?", S`\(\{\vec v_1,\vec v_2\}=\{(1,0,-1),(1,2,1)\}\) is an orthogonal basis of a plane \(P\). Use the formula on \(\vec x=(3,4,1)\) and on \(\vec y=(1,1,1)\), and decide which lies in \(P\).`,
      [S`Let \(V=[\,\vec v_1\ \vec v_2\,]\). \[V^TV=${am([[1, 0, -1], [1, 2, 1]], false)}${am([[1, 1], [0, 2], [-1, 1]], false)}=${am([["1+0+1", "1+0-1"], ["1+0-1", "1+4+1"]], false)}=${am([[2, 0], [0, 6]], false)}:\] orthogonal, with \(\|\vec v_1\|^2=2\), \(\|\vec v_2\|^2=6\).`,
        S`<strong>For \(\vec x\):</strong> \(V^T\vec x=${am([[1, 0, -1], [1, 2, 1]], false)}${cv(3, 4, 1)}=${cv("3+0-1", "3+8+1")}=${cv(2, 12)}\), so \(c_1=\tfrac22=1\), \(c_2=\tfrac{12}6=2\). Rebuild: \[V${cv(1, 2)}=${am([[1, 1], [0, 2], [-1, 1]], false)}${cv(1, 2)}=${cv("1+2", "0+4", "-1+2")}=${cv(3, 4, 1)}=\vec x\ \checkmark\] so \(\vec x\in P\).`,
        S`<strong>For \(\vec y\):</strong> \(V^T\vec y=${am([[1, 0, -1], [1, 2, 1]], false)}${cv(1, 1, 1)}=${cv("1+0-1", "1+2+1")}=${cv(0, 4)}\), so \(c_1=0\), \(c_2=\tfrac46=\tfrac23\). Rebuild: \[V${cv(0, "\\tfrac23")}=${cv("\\tfrac23", "\\tfrac43", "\\tfrac23")}\ne${cv(1, 1, 1)},\] so \(\vec y\notin P\).`],
      S`\(\vec x=\vec v_1+2\vec v_2\in P\); \(\vec y\notin P\)`, planeOrth],
    ["Completing an orthogonal set", S`Find a nonzero vector orthogonal to both \((1,1,0)\) and \((1,-1,2)\), and so an orthogonal basis of \(\mathbb R^3\) containing them.`,
      [S`\((1,1,0)\cdot(1,-1,2)=1-1+0=0\), so the two vectors are already orthogonal. We need \(\vec x\) with \(x_1+x_2=0\) and \(x_1-x_2+2x_3=0\).`,
        ...steps([[1, 1, 0], [1, -1, 2]], [
          [S`Clear column 1.`, ["R2-R1"]],
          [S`Make the second pivot 1,`, ["R2*-1/2"]],
          [S`and clear above it.`, ["R1-R2"]],
        ], { bar: false, intro: "Reduce the coefficient matrix of this homogeneous system" }).steps,
        S`\(x_3=t\): \(x_1=-t\), \(x_2=t\). Take \(t=1\): \((-1,1,1)\). Check: \(-1+1+0=0\) ✓, \(-1-1+2=0\) ✓.`],
      S`\((-1,1,1)\); \(\{(1,1,0),(1,-1,2),(-1,1,1)\}\) is an orthogonal basis of \(\mathbb R^3\)`],
  ]),

  practice([
    q("orthogonal?", S`Are \((1,2)\) and \((2,-1)\) orthogonal?`, choice(["yes", "no"], 0),
      "Dot product.", [S`\(2-2=0\).`], "yes"),
    q("coefficient", S`\(\{(1,1),(1,-1)\}\) is an orthogonal basis of \(\mathbb R^2\). Find the first coordinate of \(\vec x=(4,2)\).`, num(3),
      "x·v₁ / ‖v₁‖².", [S`\(\frac{4+2}{2}\).`], S`\(3\)`),
    q("normalise", S`Normalise \((3,4)\).`, choice([S`\((\tfrac35,\tfrac45)\)`, S`\((\tfrac37,\tfrac47)\)`, S`\((\tfrac{3}{25},\tfrac{4}{25})\)`, S`\((1,1)\)`], 0),
      "Divide by the length 5.", [S`\(\|(3,4)\|=5\).`], S`\((\tfrac35,\tfrac45)\)`),
    q("how many", S`Can \(\mathbb R^3\) contain an orthogonal set of 4 <strong>nonzero</strong> vectors?`, choice(["no", "yes", "only if they are unit vectors", "only in special cases"], 0),
      "They would be independent.", [S`4 independent vectors in a 3-dimensional space is impossible.`], "no"),
    q("orthonormal coordinate", S`\(\{\vec w_1,\vec w_2\}=\{(0.6,0.8),(-0.8,0.6)\}\) is orthonormal. Find the first coordinate of \(\vec x=(1,7)\).`, num(6.2),
      "x·w₁.", [S`\(0.6+5.6\).`], S`\(6.2\)`),
  ]),

  ...hard([
    ["Lengths from coordinates", S`Let \(\{\vec w_1,\dots,\vec w_k\}\) be an orthonormal basis of \(S\) and \(\vec x=c_1\vec w_1+\dots+c_k\vec w_k\). Prove \(\|\vec x\|^2=c_1^2+\dots+c_k^2\).`,
      [S`\(\|\vec x\|^2=\vec x\cdot\vec x=\sum_i\sum_j c_ic_j\,\vec w_i\cdot\vec w_j\).`, S`\(\vec w_i\cdot\vec w_j=0\) for \(i\ne j\) and \(\vec w_i\cdot\vec w_i=1\), so only the terms \(i=j\) survive.`, S`\(\|\vec x\|^2=\sum_i c_i^2\).`],
      S`in an orthonormal basis, lengths are computed from coordinates exactly as in the standard basis`],
    ["An orthonormal basis with a parameter", S`Find \(k\) so that \((2,2,k)\) and \((k,-2,2)\) are orthogonal, then complete them to an orthonormal basis of \(\mathbb R^3\).`,
      [S`Orthogonality as a matrix product: \[${am([[2, 2, "k"]], false)}${cv("k", -2, 2)}=${am([["2k-4+2k"]], false)}=${am([["4k-4"]], false)}=${am([[0]], false)}\] gives \(k=1\): \(\vec v_1=(2,2,1)\), \(\vec v_2=(1,-2,2)\).`,
        S`A third vector \(\vec x\) must satisfy \(\vec v_1\cdot\vec x=0\) and \(\vec v_2\cdot\vec x=0\): the homogeneous system with the vectors as rows.`,
        ...steps([[2, 2, 1, 0], [1, -2, 2, 0]], [
          [S`Bring the 1 up as the first pivot.`, ["R1<->R2"]],
          [S`Clear column 1.`, ["R2-2R1"]],
          [S`Make the second pivot 1.`, ["R2*1/6"]],
          [S`Clear above it.`, ["R1+2R2"]],
        ], { intro: "Augmented matrix [ v₁ᵀ ; v₂ᵀ | 0 ]" }).steps,
        S`\(x_3=t\) free: \(x_1=-t\), \(x_2=\tfrac12t\). With \(t=-2\): \(\vec v_3=(2,-1,-2)\).`,
        S`Check all at once with \(B=[\,\vec v_1\ \vec v_2\ \vec v_3\,]\): \[B^TB=${am([[2, 2, 1], [1, -2, 2], [2, -1, -2]], false)}${am([[2, 1, 2], [2, -2, -1], [1, 2, -2]], false)}=${am([["4+4+1", "2-4+2", "4-2-2"], ["2-4+2", "1+4+4", "2+2-4"], ["4-2-2", "2+2-4", "4+1+4"]], false)}=${am([[9, 0, 0], [0, 9, 0], [0, 0, 9]], false)}.\]`,
        S`Orthogonal, each of length 3. Divide by 3: \(\{\tfrac13(2,2,1),\ \tfrac13(1,-2,2),\ \tfrac13(2,-1,-2)\}\).`],
      S`\(k=1\); orthonormal basis \(\{\tfrac13(2,2,1),\tfrac13(1,-2,2),\tfrac13(2,-1,-2)\}\)`],
  ], [
    q("hard", S`\(\{(1,2),(2,-1)\}\) is an orthogonal basis of \(\mathbb R^2\). Find the second coordinate of \(\vec x=(5,5)\).`, num(1),
      "x·v₂ / ‖v₂‖².", [S`\(\frac{10-5}{5}\).`], S`\(1\)`),
    q("hard", S`For which \(k\) is \((1,k,2)\) orthogonal to \((3,1,-1)\)?`, num(-1),
      "Dot product 0.", [S`\(3+k-2=0\).`], S`\(-1\)`),
    q("hard", S`\(\{\vec w_1,\vec w_2,\vec w_3\}\) is orthonormal and \(\vec x=2\vec w_1-\vec w_2+2\vec w_3\). Find \(\|\vec x\|\).`, num(3),
      "Sum of squares of coordinates.", [S`\(\sqrt{4+1+4}\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["What is an orthogonal set?", "One in which every two different vectors have dot product 0."],
      ["Why is an orthogonal set of nonzero vectors independent?", "Dotting a combination equal to 0 with vᵢ isolates cᵢ‖vᵢ‖² = 0, so every cᵢ = 0."],
      ["How do I find coordinates in an orthogonal basis?", "cᵢ = (x·vᵢ)/‖vᵢ‖² — one dot product per coordinate, no system to solve."],
      ["What changes for an orthonormal basis?", "Every ‖vᵢ‖ = 1, so cᵢ = x·vᵢ."],
      ["How do I make an orthonormal basis from an orthogonal one?", "Divide each vector by its length."],
    ],
    summary: [
      "Orthogonal: vᵢ·vⱼ = 0 for i ≠ j; orthonormal: also ‖vᵢ‖ = 1.",
      "Orthogonal + nonzero ⇒ independent.",
      "Orthogonal basis: cᵢ = x·vᵢ / ‖vᵢ‖².",
      "Orthonormal basis: cᵢ = x·vᵢ, and ‖x‖² = Σcᵢ².",
      "The formula reproduces x only if x is in the subspace.",
    ],
    next: "5.6 meets the three subspaces that every matrix carries: its null space, column space and row space.",
  }),
];
