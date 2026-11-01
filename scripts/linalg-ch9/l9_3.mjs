// LINALG1 9.3 — Orthogonal Projection onto a Subspace: the orthogonal decomposition y = ŷ + z, the projection formula
// with an orthogonal basis (coefficients uᵢᵀy / uᵢᵀuᵢ, assembled as ŷ = Uc), the best-approximation theorem and the
// distance to W, and ŷ = UUᵀy for an orthonormal basis — with every dot product and product written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, frac, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { projPlane, projLine } from "./ws/fig9.mjs";

export const TITLE = "9.3 Orthogonal Projection onto a Subspace";
export const ID = "11a10001-0001-4001-8001-000000000903";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const plFig = sfig(projPlane([1, 1, 0], [1, -1, 2], [3, 1, 4], [11 / 3, 1 / 3, 10 / 3], { raw: true }), "ŷ is the point of the plane W closest to y; the error y − ŷ is perpendicular to W");
const lnFig = sfig(projLine([2, 1], [1, 3], { raw: true }), "projection onto a line: the special case of a one-vector basis");

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Orthogonal Projection onto a Subspace",
    overview: S`Every vector \(\vec y\) splits uniquely into a part \(\hat y\) inside a subspace \(W\) and a part \(\vec z=\vec y-\hat y\) perpendicular to \(W\). The part \(\hat y\) is the <strong>orthogonal projection</strong> of \(\vec y\) onto \(W\), and it is the point of \(W\) closest to \(\vec y\). With an orthogonal basis of \(W\) the projection is a sum of one-dimensional projections, one coefficient per basis vector. This is the geometric heart of least squares: when \(A\vec x=\vec b\) has no solution, the best we can do is to hit the projection of \(\vec b\) onto \(\operatorname{Col}A\).`,
    goals: [
      "state the orthogonal decomposition \\(\\vec y=\\hat y+\\vec z\\);",
      "compute \\(\\hat y\\) with an orthogonal basis: \\(c_i=\\vec u_i^T\\vec y/\\vec u_i^T\\vec u_i\\), \\(\\hat y=U\\vec c\\);",
      "check the answer with \\(U^T(\\vec y-\\hat y)=\\vec 0\\);",
      "find the closest point of \\(W\\) and the distance from \\(\\vec y\\) to \\(W\\);",
      "use \\(\\hat y=UU^T\\vec y\\) for an orthonormal basis.",
    ],
    outcomes: "orthogonality: orthogonal projections onto subspaces",
    prior: [
      [S`Projection of \(\vec y\) onto \(\vec u\)?`, S`\(\dfrac{\vec u^T\vec y}{\vec u^T\vec u}\vec u\).`],
      [S`Are \((1,1,0)\) and \((1,-1,2)\) orthogonal?`, S`\(1-1+0=0\): yes.`],
      [S`What is \(U^TU\) for orthonormal columns?`, S`\(I\).`],
    ],
    words: [
      ["Orthogonal projection \\(\\hat y\\)", "the part of \\(\\vec y\\) in \\(W\\)", "\\(\\operatorname{proj}_W\\vec y\\)"],
      ["Error \\(\\vec z\\)", "\\(\\vec y-\\hat y\\in W^\\perp\\)", "perpendicular to \\(W\\)"],
      ["Orthogonal basis", "pairwise orthogonal basis vectors", "needed for the simple formula"],
      ["Best approximation", "\\(|\\vec y-\\hat y|<|\\vec y-\\vec v|\\) for \\(\\vec v\\in W\\), \\(\\vec v\\ne\\hat y\\)", "closest point"],
      ["Distance to \\(W\\)", "\\(|\\vec y-\\hat y|\\)", "length of the error"],
    ],
  }),

  section("📌 The orthogonal decomposition", S`
  ${theorem("orthogonal decomposition", S`Let \(W\) be a subspace of \(\mathbb R^n\) with an orthogonal basis \(\vec u_1,\dots,\vec u_k\). Every \(\vec y\) can be written uniquely as \(\vec y=\hat y+\vec z\) with \(\hat y\in W\), \(\vec z\in W^\perp\), and \[\hat y=\frac{\vec u_1^T\vec y}{\vec u_1^T\vec u_1}\vec u_1+\dots+\frac{\vec u_k^T\vec y}{\vec u_k^T\vec u_k}\vec u_k=U\vec c,\quad c_i=\frac{\vec u_i^T\vec y}{\vec u_i^T\vec u_i}.\]`, S`\(\hat y\) lies in \(W\). For each \(j\), using \(\vec u_j^T\vec u_i=0\) (\(i\ne j\)): \(\vec u_j^T(\vec y-\hat y)=\vec u_j^T\vec y-c_j\vec u_j^T\vec u_j=0\). So \(\vec z\perp\) every basis vector, hence \(\vec z\in W^\perp\). Uniqueness: two decompositions give \(\hat y_1-\hat y_2=\vec z_2-\vec z_1\in W\cap W^\perp=\{\vec 0\}\).`)}
  ${keyIdea(S`Always check with one product: \(U^T(\vec y-\hat y)\) must be \(\vec 0\). If the basis is not orthogonal, the simple formula gives the wrong answer — use 9.4 or make the basis orthogonal first (9.5).`)}
  ${plFig}`),

  section("📌 Best approximation", S`
  ${theorem("best approximation", S`\(\hat y\) is the closest point of \(W\) to \(\vec y\): \(|\vec y-\hat y|<|\vec y-\vec v|\) for every \(\vec v\in W\) with \(\vec v\ne\hat y\). The distance from \(\vec y\) to \(W\) is \(|\vec y-\hat y|\).`, S`\(\vec y-\vec v=(\vec y-\hat y)+(\hat y-\vec v)\), with \(\vec y-\hat y\in W^\perp\) and \(\hat y-\vec v\in W\). By Pythagoras \(|\vec y-\vec v|^2=|\vec y-\hat y|^2+|\hat y-\vec v|^2>|\vec y-\hat y|^2\) when \(\vec v\ne\hat y\).`)}
  ${theorem("orthonormal basis", S`If \(U=[\vec u_1\cdots\vec u_k]\) has orthonormal columns spanning \(W\), then \(\hat y=UU^T\vec y\).`, S`Now \(\vec u_i^T\vec u_i=1\), so \(\vec c=U^T\vec y\) and \(\hat y=U\vec c=UU^T\vec y\).`)}
  ${lnFig}`),

  section("📌 Explore", S`<p>Turn the line \(W\) and move \(\vec y\). The explorer computes \(\hat y=\dfrac{\vec u^T\vec y}{\vec u^T\vec u}\vec u\), draws the perpendicular error and shows the distance from \(\vec y\) to \(W\). Drag a test point along \(W\): its distance to \(\vec y\) is never smaller.</p>`),
  widget("laProjLine", { init: { t: 27, x: 1, y: 3 } }),

  section("📌 Common mistakes", watchOut([
    "The projection formula requires an ORTHOGONAL basis; check uᵢᵀuⱼ = 0 first.",
    "Divide by uᵢᵀuᵢ (the squared length), not by the length.",
    "The error y − ŷ is perpendicular to W, not ŷ itself.",
    "If y is already in W, then ŷ = y and z = 0.",
    "UUᵀ is the projection; UᵀU is the identity (for orthonormal columns).",
  ])),

  examples([
    ["Projection onto a plane in ℝ³", S`\(W=\operatorname{span}\{\vec u_1,\vec u_2\}\), \(\vec u_1=(1,1,0)\), \(\vec u_2=(1,-1,2)\), \(\vec y=(3,1,4)\). Find \(\hat y\) and \(\vec z\).`,
      [S`Orthogonal basis: \(U^TU=${M([[1, 1, 0], [1, -1, 2]])}${M([[1, 1], [1, -1], [0, 2]])}=${M([[2, 0], [0, 6]])}\).`,
        S`\[U^T\vec y=${M([[1, 1, 0], [1, -1, 2]])}${cv(3, 1, 4)}=${cv("3+1+0", "3-1+8")}=${cv(4, 10)},\qquad \vec c=${cv("\\tfrac42", "\\tfrac{10}6")}=${cv(2, "\\tfrac53")}.\]`,
        S`\[\hat y=U\vec c=${M([[1, 1], [1, -1], [0, 2]])}${cv(2, "\\tfrac53")}=${cv("2+\\tfrac53", "2-\\tfrac53", "0+\\tfrac{10}3")}=${cv("\\tfrac{11}3", "\\tfrac13", "\\tfrac{10}3")},\qquad \vec z=\vec y-\hat y=${cv("-\\tfrac23", "\\tfrac23", "\\tfrac23")}.\]`,
        S`Check: \(U^T\vec z=${M([[1, 1, 0], [1, -1, 2]])}${cv("-\\tfrac23", "\\tfrac23", "\\tfrac23")}=${cv("-\\tfrac23+\\tfrac23+0", "-\\tfrac23-\\tfrac23+\\tfrac43")}=${cv(0, 0)}\) ✓.`],
      S`\(\hat y=(\tfrac{11}3,\tfrac13,\tfrac{10}3)\), \(\vec z=(-\tfrac23,\tfrac23,\tfrac23)\)`, plFig],
    ["The distance to a plane", S`With the same data, find the distance from \(\vec y\) to \(W\).`,
      [S`Distance \(=|\vec z|\): \[\vec z^T\vec z=${T(["-\\tfrac23", "\\tfrac23", "\\tfrac23"])}${cv("-\\tfrac23", "\\tfrac23", "\\tfrac23")}=\tfrac49+\tfrac49+\tfrac49=\tfrac43.\]`,
        S`\(|\vec z|=\sqrt{4/3}=\tfrac2{\sqrt3}\approx1.155\). No point of \(W\) is closer to \(\vec y\).`],
      S`\(\tfrac2{\sqrt3}\approx1.155\)`],
    ["Projection onto a line in ℝ³", S`Project \(\vec y=(2,1,3)\) onto \(W=\operatorname{span}\{(1,2,2)\}\).`,
      [S`\(c=\dfrac{\vec u^T\vec y}{\vec u^T\vec u}=\dfrac{${T([1, 2, 2])}${cv(2, 1, 3)}}{${T([1, 2, 2])}${cv(1, 2, 2)}}=\dfrac{2+2+6}{1+4+4}=\dfrac{10}9\).`,
        S`\(\hat y=\tfrac{10}9${cv(1, 2, 2)}=${cv("\\tfrac{10}9", "\\tfrac{20}9", "\\tfrac{20}9")}\), \(\vec z=${cv("\\tfrac89", "-\\tfrac{11}9", "\\tfrac79")}\). Check \(\vec u^T\vec z=\tfrac{8-22+14}9=0\) ✓.`],
      S`\(\hat y=\tfrac{10}9(1,2,2)\)`],
    ["Using an orthonormal basis: ŷ = UUᵀy", S`Normalise the basis of Example 1, form \(UU^T\) and recompute \(\hat y\).`,
      [S`\(\vec u_1=\tfrac1{\sqrt2}(1,1,0)\), \(\vec u_2=\tfrac1{\sqrt6}(1,-1,2)\). \[UU^T=\vec u_1\vec u_1^T+\vec u_2\vec u_2^T=\tfrac12${M([[1, 1, 0], [1, 1, 0], [0, 0, 0]])}+\tfrac16${M([[1, -1, 2], [-1, 1, -2], [2, -2, 4]])}=\tfrac13${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}.\]`,
        S`\[UU^T\vec y=\tfrac13${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}${cv(3, 1, 4)}=\tfrac13${cv("6+1+4", "3+2-4", "3-1+8")}=${cv("\\tfrac{11}3", "\\tfrac13", "\\tfrac{10}3")}\ \checkmark\]`],
      S`\(UU^T=\tfrac13${M([[2, 1, 1], [1, 2, -1], [1, -1, 2]])}\), the same \(\hat y\)`],
    ["Why the basis must be orthogonal", S`\(W=\operatorname{span}\{(1,1,0),(1,0,1)\}\) (the same plane), \(\vec y=(3,1,4)\). Show that the simple formula with this basis gives a wrong answer.`,
      [S`\((1,1,0)\cdot(1,0,1)=1\ne0\): not orthogonal. The formula would give \(\tfrac42(1,1,0)+\tfrac72(1,0,1)=(5.5,2,3.5)\).`,
        S`Error test: \(\vec y-(5.5,2,3.5)=(-2.5,-1,0.5)\), and \(${T([1, 1, 0])}${cv("-2.5", -1, "0.5")}=-3.5\ne0\): not perpendicular to \(W\).`,
        S`The correct projection is \((\tfrac{11}3,\tfrac13,\tfrac{10}3)\) (Example 1, same plane). Fix the basis first (9.5) or use the normal equations (9.4).`],
      S`the formula fails without orthogonality`],
  ]),

  practice([
    q("coefficient", S`\(\vec u=(2,1)\), \(\vec y=(4,3)\). Find \(c=\vec u^T\vec y/\vec u^T\vec u\).`, frac(11, 5),
      "11/5.", [S`\(\tfrac{8+3}{4+1}\).`], S`\(\tfrac{11}5\)`),
    q("projection", S`Project \((5,2,7)\) onto the \(x_1x_2\)-plane. Give the third entry.`, num(0),
      "Drop x₃.", [S`Basis \(\vec e_1,\vec e_2\): \(\hat y=(5,2,0)\).`], S`\(0\)`),
    q("distance", S`Distance from \((5,2,7)\) to the \(x_1x_2\)-plane?`, num(7),
      "|z|.", [S`\(\vec z=(0,0,7)\).`], S`\(7\)`),
    q("in W", S`\(\vec y\in W\). Then \(\operatorname{proj}_W\vec y=\)`, choice([S`\(\vec y\)`, S`\(\vec 0\)`, S`\(-\vec y\)`, S`depends on the basis`], 0),
      "Nothing to remove.", [S`\(\vec z=\vec 0\).`], S`\(\vec y\)`),
    q("orthogonal?", S`Can the formula \(\sum\frac{\vec u_i^T\vec y}{\vec u_i^T\vec u_i}\vec u_i\) be used with \((1,2),(2,1)\)?`, choice(["no", "yes"], 0),
      "Dot product.", [S`\(2+2=4\ne0\).`], S`no`),
  ]),

  ...hard([
    ["Closest point in a 2-dimensional subspace of ℝ⁴", S`\(W=\operatorname{span}\{(1,1,1,1),(1,-1,1,-1)\}\), \(\vec y=(4,0,2,2)\). Find the closest point of \(W\) to \(\vec y\) and the distance.`,
      [S`\(U^TU=${M([[1, 1, 1, 1], [1, -1, 1, -1]])}${M([[1, 1], [1, -1], [1, 1], [1, -1]])}=${M([[4, 0], [0, 4]])}\): orthogonal.`,
        S`\(U^T\vec y=${cv("4+0+2+2", "4-0+2-2")}=${cv(8, 4)}\), \(\vec c=${cv(2, 1)}\), \[\hat y=U\vec c=${M([[1, 1], [1, -1], [1, 1], [1, -1]])}${cv(2, 1)}=${cv(3, 1, 3, 1)},\qquad \vec z=${cv(1, -1, -1, 1)}.\]`,
        S`Check \(U^T\vec z=${cv("1-1-1+1", "1+1-1-1")}=\vec 0\) ✓. Distance \(|\vec z|=\sqrt{1+1+1+1}=2\).`],
      S`\(\hat y=(3,1,3,1)\), distance 2`],
    ["The best-approximation inequality", S`Using Example 1, verify that \(\vec v=(2,2,0)\in W\) is farther from \(\vec y\) than \(\hat y\), and explain the Pythagorean identity behind it.`,
      [S`\(\vec y-\vec v=(1,-1,4)\): \(|\vec y-\vec v|^2=1+1+16=18\). \(|\vec y-\hat y|^2=\tfrac43\).`,
        S`\(\hat y-\vec v=(\tfrac53,-\tfrac53,\tfrac{10}3)\in W\): \(|\hat y-\vec v|^2=\tfrac{25+25+100}9=\tfrac{50}3\).`,
        S`\(\tfrac43+\tfrac{50}3=18\) ✓: \(|\vec y-\vec v|^2=|\vec y-\hat y|^2+|\hat y-\vec v|^2\) because \(\vec y-\hat y\perp\hat y-\vec v\).`],
      S`\(18=\tfrac43+\tfrac{50}3\)`],
  ], [
    q("hard", S`Distance from \((1,2,3)\) to \(W=\operatorname{span}\{(1,0,0),(0,1,0)\}\)?`, num(3),
      "Only x₃ remains.", [S`\(\vec z=(0,0,3)\).`], S`\(3\)`),
    q("hard", S`\(W=\operatorname{span}\{(1,1)\}\), \(\vec y=(5,1)\). Find the second entry of \(\vec z=\vec y-\hat y\).`, num(-2),
      "ŷ = (3, 3).", [S`\(c=\tfrac62=3\); \(\vec z=(2,-2)\).`], S`\(-2\)`),
    q("hard", S`\(U\) has orthonormal columns spanning \(W\). Then \((UU^T)^2=\)`, choice([S`\(UU^T\)`, S`\(I\)`, S`\(U^TU\)`, S`\(0\)`], 0),
      "Projecting twice changes nothing.", [S`\(UU^TUU^T=U(U^TU)U^T=UU^T\).`], S`\(UU^T\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the orthogonal projection ŷ?", "The unique vector of W with y − ŷ ⟂ W; the closest point of W to y."],
      ["How do I compute it?", "With an orthogonal basis: cᵢ = uᵢᵀy / uᵢᵀuᵢ and ŷ = Uc."],
      ["How do I check it?", "Uᵀ(y − ŷ) must be 0."],
      ["What is the distance from y to W?", "|y − ŷ|."],
      ["What if the basis is orthonormal?", "ŷ = UUᵀy."],
    ],
    summary: [
      "y = ŷ + z, ŷ ∈ W, z ∈ W⊥.",
      "ŷ = Σ (uᵢᵀy / uᵢᵀuᵢ) uᵢ (orthogonal basis).",
      "Best approximation: ŷ is closest.",
      "Distance = |y − ŷ|.",
      "Orthonormal basis: ŷ = UUᵀy.",
    ],
    next: "9.4 projects onto Col A for ANY basis, through the normal equations AᵀAx̂ = Aᵀy and P = A(AᵀA)⁻¹Aᵀ.",
  }),
];
