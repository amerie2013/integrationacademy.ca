// LINALG1 4.7 — Coordinates with Respect to a Basis: the coordinate vector [x]_B, finding it by solving
// P_B c = x with P_B = [b₁ … bₙ], rebuilding x = P_B [x]_B, linearity of coordinates, and comparing two bases.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps, vec } from "./lib.mjs";
import { vecs2, vecs3 } from "./ws/fig5.mjs";

export const TITLE = "4.7 Coordinates with Respect to a Basis";
export const ID = "11a10001-0001-4001-8001-000000000407";

const S = String.raw;
const M = (m) => am(m, false);
/** a skewed grid for the basis b1, b2: lines parallel to b1 through k·b2 and parallel to b2 through k·b1 */
const grid = (b1, b2, view) => {
  const segs = [];
  for (let k = -4; k <= 4; k++) {
    segs.push({ pts: [[k * b2[0] - 5 * b1[0], k * b2[1] - 5 * b1[1]], [k * b2[0] + 5 * b1[0], k * b2[1] + 5 * b1[1]]], color: "#bfdbfe", w: 1 });
    segs.push({ pts: [[k * b1[0] - 5 * b2[0], k * b1[1] - 5 * b2[1]], [k * b1[0] + 5 * b2[0], k * b1[1] + 5 * b2[1]]], color: "#fecaca", w: 1 });
  }
  return segs;
};
const V = { xmin: -1, xmax: 6, ymin: -1, ymax: 8 };
const coordFig = sfig(vecs2([[[2, 1], "b₁", "blue"], [[1, 3], "b₂", "red"], [[2, 1], "", "blue"], [[4, 7], "", "red", [2, 1], true], [[4, 7], "x = (4, 7)", "green"]], V, { segs: grid([2, 1], [1, 3], V), raw: true }),
  "in the grid of B = {(2, 1), (1, 3)}: x = 1b₁ + 2b₂, so [x]_B = (1, 2)");
const twoFig = sfig(vecs2([[[1, 1], "b₁", "blue"], [[1, -1], "b₂", "red"], [[3, 3], "", "blue", null, true], [[5, 1], "", "red", [3, 3], true], [[5, 1], "x = (5, 1)", "green"]], { xmin: -1, xmax: 6, ymin: -2, ymax: 4 }, { segs: grid([1, 1], [1, -1], { xmin: -1, xmax: 6, ymin: -2, ymax: 4 }), raw: true }),
  "the same x = (5, 1) has coordinates (3, 2) in B = {(1, 1), (1, −1)}");
const r3Fig = sfig(vecs3([[[1, 1, 1], "b₁"], [[0, 1, 1], "b₂"], [[0, 0, 1], "b₃"], [[2, 5, 4], "x", "violet"]], { raw: true }), "x = 2b₁ + 3b₂ − b₃");

export const blocks = () => [
  intro({
    icon: "📍",
    title: "Coordinates with Respect to a Basis",
    overview: S`A basis is a coordinate system. Because every \(\vec x\in\mathbb R^n\) is a combination of the basis vectors in exactly one way, the weights are well defined — they are the <strong>coordinates</strong> of \(\vec x\) with respect to the basis, collected in the coordinate vector \([\vec x]_{\mathcal B}\). The usual coordinates are just the coordinates in the standard basis. Finding \([\vec x]_{\mathcal B}\) means solving one linear system; going back is a single matrix–vector product \(\vec x=P_{\mathcal B}[\vec x]_{\mathcal B}\).`,
    goals: [
      "define the coordinate vector \\([\\vec x]_{\\mathcal B}\\) and explain why it is unique;",
      "find coordinates by row reducing \\([\\,P_{\\mathcal B}\\mid\\vec x\\,]\\);",
      "rebuild \\(\\vec x\\) from its coordinates with \\(\\vec x=P_{\\mathcal B}[\\vec x]_{\\mathcal B}\\);",
      "use linearity: \\([\\vec x+\\vec y]_{\\mathcal B}=[\\vec x]_{\\mathcal B}+[\\vec y]_{\\mathcal B}\\), \\([c\\vec x]_{\\mathcal B}=c[\\vec x]_{\\mathcal B}\\);",
      "compare the coordinates of one vector in two bases.",
    ],
    outcomes: "span and linear independence: coordinates relative to a basis",
    prior: [
      [S`Is \(\{(2,1),(1,3)\}\) a basis of \(\mathbb R^2\)?`, S`Yes — not parallel.`],
      [S`Why is a representation in a basis unique?`, S`Two representations would give a nontrivial relation, contradicting independence.`],
      [S`Compute \(${M([[2, 1], [1, 3]])}${cv(1, 2)}\).`, S`\((4,7)\).`],
    ],
    words: [
      ["Ordered basis", "a basis with its vectors in a fixed order", "\\(\\mathcal B=\\{\\vec b_1,\\vec b_2\\}\\)"],
      ["Coordinates", "the unique weights \\(c_1,\\dots,c_n\\)", "\\(\\vec x=c_1\\vec b_1+\\dots+c_n\\vec b_n\\)"],
      ["\\([\\vec x]_{\\mathcal B}\\)", "the coordinate vector \\((c_1,\\dots,c_n)\\)", "\\([\\vec b_1]_{\\mathcal B}=\\vec e_1\\)"],
      ["\\(P_{\\mathcal B}\\)", "the matrix \\([\\,\\vec b_1\\ \\cdots\\ \\vec b_n\\,]\\)", "\\(\\vec x=P_{\\mathcal B}[\\vec x]_{\\mathcal B}\\)"],
      ["Standard coordinates", "coordinates in \\(\\{\\vec e_1,\\dots,\\vec e_n\\}\\)", "\\([\\vec x]=\\vec x\\)"],
    ],
  }),

  section("📌 Coordinates", S`
  ${theorem("unique representation", S`If \(\mathcal B=\{\vec b_1,\dots,\vec b_n\}\) is a basis of \(\mathbb R^n\), each \(\vec x\in\mathbb R^n\) can be written as \(\vec x=c_1\vec b_1+\dots+c_n\vec b_n\) in exactly one way.`, S`Spanning gives at least one way. If \(\sum c_i\vec b_i=\sum d_i\vec b_i\), then \(\sum(c_i-d_i)\vec b_i=\vec 0\), and independence forces \(c_i=d_i\).`)}
  ${definition("coordinate vector", S`The <strong>coordinates</strong> of \(\vec x\) with respect to the (ordered) basis \(\mathcal B\) are these unique weights, and \[[\vec x]_{\mathcal B}=(c_1,\dots,c_n)\quad\text{when}\quad\vec x=c_1\vec b_1+\dots+c_n\vec b_n.\]`)}
  ${coordFig}`),

  section("📌 Computing coordinates", S`
  <p>Let \(P_{\mathcal B}=[\,\vec b_1\ \cdots\ \vec b_n\,]\). Then \(c_1\vec b_1+\dots+c_n\vec b_n=P_{\mathcal B}\vec c\), so</p>
  \[\vec x=P_{\mathcal B}\,[\vec x]_{\mathcal B}.\]
  ${keyIdea(S`To <strong>find</strong> \([\vec x]_{\mathcal B}\): row reduce \([\,P_{\mathcal B}\mid\vec x\,]\) — the solution is unique because \(P_{\mathcal B}\) has \(n\) pivots. To <strong>rebuild</strong> \(\vec x\): multiply \(P_{\mathcal B}[\vec x]_{\mathcal B}\).`)}
  ${theorem("coordinates are linear", S`\([\vec x+\vec y]_{\mathcal B}=[\vec x]_{\mathcal B}+[\vec y]_{\mathcal B}\) and \([c\vec x]_{\mathcal B}=c[\vec x]_{\mathcal B}\). Also \([\vec b_i]_{\mathcal B}=\vec e_i\).`, S`If \(\vec x=\sum c_i\vec b_i\) and \(\vec y=\sum d_i\vec b_i\), then \(\vec x+\vec y=\sum(c_i+d_i)\vec b_i\) and \(c\vec x=\sum(cc_i)\vec b_i\); by uniqueness these are the coordinates. And \(\vec b_i=1\vec b_i+\sum_{j\ne i}0\vec b_j\).`)}
  ${r3Fig}`),

  section("📌 Explore", S`<p>Drag the basis vectors \(\vec b_1,\vec b_2\) and the point \(\vec x\). The grid follows the basis, and the explorer reads off \([\vec x]_{\mathcal B}\) — the same point, different numbers.</p>`),
  widget("laCoords", { init: { b1: [2, 1], b2: [1, 3], x: [4, 7] } }),

  section("📌 Common mistakes", watchOut([
    "Coordinates depend on the ORDER of the basis vectors: swapping b₁ and b₂ swaps the coordinates.",
    "[x]_B is NOT x itself (unless B is the standard basis).",
    "To find coordinates, solve P_B c = x; do not multiply P_B by x.",
    "Coordinates are only defined for a basis — a dependent set gives many representations.",
    "Check by rebuilding: c₁b₁ + … + cₙbₙ must give x back.",
  ])),

  examples([
    ["Coordinates in ℝ²", S`\(\mathcal B=\{(2,1),(1,3)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(4,7)\).`,
      [...steps([[2, 1, 4], [1, 3, 7]], [
        [S`Bring the 1 up as the first pivot.`, ["R1<->R2"]],
        [S`Clear below the first pivot.`, ["R2-2R1"]],
        [S`Make the second pivot 1.`, ["R2*-1/5"]],
        [S`Clear above the second pivot.`, ["R1-3R2"]],
      ], { intro: String.raw`Row reduce \([\,P_{\mathcal B}\mid\vec x\,]\)` }).steps,
        S`\(c_1=1\), \(c_2=2\). Check: \(1(2,1)+2(1,3)=(4,7)\) ✓.`],
      S`\([\vec x]_{\mathcal B}=(1,2)\)`, coordFig],
    ["Rebuilding a vector", S`\(\mathcal B=\{(1,2),(-1,1)\}\) and \([\vec x]_{\mathcal B}=(3,-1)\). Find \(\vec x\).`,
      [S`\(\vec x=3\vec b_1-1\vec b_2=3(1,2)-(-1,1)\).`, S`\(=(3+1,\ 6-1)=(4,5)\).`, S`Matrix form: \(${M([[1, -1], [2, 1]])}${cv(3, -1)}=${cv(4, 5)}\) ✓.`],
      S`\(\vec x=(4,5)\)`],
    ["Coordinates in ℝ³", S`\(\mathcal B=\{(1,1,1),(0,1,1),(0,0,1)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(2,5,4)\).`,
      [...steps([[1, 0, 0, 2], [1, 1, 0, 5], [1, 1, 1, 4]], [
        [S`Clear column 1.`, ["R2-R1", "R3-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { intro: String.raw`Row reduce \([\,P_{\mathcal B}\mid\vec x\,]\)` }).steps,
        S`Back-substitute: \(c_1=2\), \(c_2=3\), \(c_3=-1\).`, S`Check: \(2(1,1,1)+3(0,1,1)-(0,0,1)=(2,5,4)\) ✓.`],
      S`\([\vec x]_{\mathcal B}=(2,3,-1)\)`, r3Fig],
    ["One vector, two bases", S`Find the coordinates of \(\vec x=(5,1)\) in the standard basis and in \(\mathcal C=\{(1,1),(1,-1)\}\).`,
      [S`Standard basis: \((5,1)=5\vec e_1+1\vec e_2\), so the coordinates are \((5,1)\).`, ...steps([[1, 1, 5], [1, -1, 1]], [
        [S`Basis \(\mathcal C\): clear below the first pivot.`, ["R2-R1"]],
        [S`Make the second pivot 1.`, ["R2*-1/2"]],
        [S`Clear above it.`, ["R1-R2"]],
      ], { intro: String.raw`Row reduce \([\,P_{\mathcal C}\mid\vec x\,]\)` }).steps,
        S`\([\vec x]_{\mathcal C}=(3,2)\). Check: \(3(1,1)+2(1,-1)=(5,1)\) ✓.`],
      S`\((5,1)\) and \((3,2)\)`, twoFig],
    ["Using linearity", S`In some basis \(\mathcal B\), \([\vec u]_{\mathcal B}=(1,4)\) and \([\vec v]_{\mathcal B}=(-2,3)\). Find \([2\vec u-\vec v]_{\mathcal B}\).`,
      [S`Coordinates are linear: \([2\vec u-\vec v]_{\mathcal B}=2[\vec u]_{\mathcal B}-[\vec v]_{\mathcal B}\).`, S`\(=2(1,4)-(-2,3)=(2+2,\ 8-3)=(4,5)\).`, S`No knowledge of the basis vectors is needed.`],
      S`\((4,5)\)`],
  ]),

  practice([
    q("coordinates", S`\(\mathcal B=\{(1,0),(1,1)\}\). Find \([\vec x]_{\mathcal B}\) for \(\vec x=(5,2)\).`, vec(3, 2),
      "c₂ comes from the second entry.", [S`\(c_2=2\), \(c_1+c_2=5\Rightarrow c_1=3\).`], S`\((3,2)\)`),
    q("rebuild", S`\(\mathcal B=\{(2,0),(1,1)\}\), \([\vec x]_{\mathcal B}=(1,3)\). Find \(\vec x\).`, vec(5, 3),
      "x = 1b₁ + 3b₂.", [S`\((2,0)+(3,3)\).`], S`\((5,3)\)`),
    q("basis vector", S`For any basis, \([\vec b_2]_{\mathcal B}\) in \(\mathbb R^3\) is:`, vec(0, 1, 0),
      "b₂ = 0b₁ + 1b₂ + 0b₃.", [S`\(\vec e_2\).`], S`\((0,1,0)\)`),
    q("order", S`\([\vec x]_{\mathcal B}=(4,-1)\) for \(\mathcal B=\{\vec b_1,\vec b_2\}\). What is \([\vec x]_{\mathcal B'}\) for \(\mathcal B'=\{\vec b_2,\vec b_1\}\)?`, vec(-1, 4),
      "Swap the order.", [S`\(\vec x=-1\vec b_2+4\vec b_1\).`], S`\((-1,4)\)`),
    q("linearity", S`\([\vec u]_{\mathcal B}=(2,0,1)\). Find \([-3\vec u]_{\mathcal B}\).`, vec(-6, 0, -3),
      "Scale the coordinates.", [S`\(-3(2,0,1)\).`], S`\((-6,0,-3)\)`),
  ]),

  ...hard([
    ["Finding a basis from coordinates", S`Find a basis \(\mathcal B=\{\vec b_1,\vec b_2\}\) of \(\mathbb R^2\) with \(\vec b_1=(1,1)\) such that \([(3,5)]_{\mathcal B}=(1,1)\).`,
      [S`Matrix form: \(P_{\mathcal B}[\vec x]_{\mathcal B}=\vec x\) with \(\vec b_2=(p,q)\): \[${am([[1, "p"], [1, "q"]], false)}${cv(1, 1)}=${cv("1+p", "1+q")}=${cv(3, 5)}.\]`,
        S`So \(p=2\), \(q=4\): \(\vec b_2=(2,4)\).`,
        ...steps([[1, 2], [1, 4]], [
          [S`<strong>Check it is a basis.</strong> Clear below the pivot.`, ["R2-R1"]],
        ], { bar: false, intro: "P_B" }).steps,
        S`Two pivots: \(\{(1,1),(2,4)\}\) is a basis of \(\mathbb R^2\).`],
      S`\(\vec b_2=(2,4)\)`],
    ["From one basis to another", S`\(\mathcal B=\{(1,1),(1,-1)\}\), \(\mathcal C=\{(1,0),(1,2)\}\). If \([\vec x]_{\mathcal B}=(2,1)\), find \([\vec x]_{\mathcal C}\).`,
      [S`<strong>Rebuild \(\vec x\).</strong> \[\vec x=P_{\mathcal B}[\vec x]_{\mathcal B}=${am([[1, 1], [1, -1]], false)}${cv(2, 1)}=${cv("2+1", "2-1")}=${cv(3, 1)}.\]`,
        ...steps([[1, 1, 3], [0, 2, 1]], [
          [S`<strong>Solve \(P_{\mathcal C}\vec c=\vec x\).</strong> Make the second pivot 1.`, ["R2*1/2"]],
          [S`Clear above it.`, ["R1-R2"]],
        ], { intro: "Augmented matrix [ P_C | x ]" }).steps,
        S`\([\vec x]_{\mathcal C}=(\tfrac52,\tfrac12)\). Check: \(${am([[1, 1], [0, 2]], false)}${cv("\\tfrac52", "\\tfrac12")}=${cv("\\tfrac52+\\tfrac12", "0+1")}=${cv(3, 1)}\) ✓.`],
      S`\([\vec x]_{\mathcal C}=(\tfrac52,\tfrac12)\)`],
  ], [
    q("hard", S`\(\mathcal B=\{(1,2),(3,5)\}\). Find the second coordinate of \(\vec x=(1,1)\).`, num(1),
      "Solve c₁ + 3c₂ = 1, 2c₁ + 5c₂ = 1.", [S`\(R_2-2R_1\): \(-c_2=-1\).`], S`\(1\)`),
    q("hard", S`\(\mathcal B=\{(1,0,0),(1,1,0),(1,1,1)\}\). Find \([(4,3,2)]_{\mathcal B}\).`, vec(1, 1, 2),
      "Work from the last entry up.", [S`\(c_3=2\), \(c_2+c_3=3\Rightarrow c_2=1\), \(c_1+c_2+c_3=4\Rightarrow c_1=1\).`], S`\((1,1,2)\)`),
    q("hard", S`\([\vec x]_{\mathcal B}=(1,2)\) and \([\vec y]_{\mathcal B}=(3,-1)\). Find \(a\) with \([\vec x+a\vec y]_{\mathcal B}=(7,0)\).`, num(2),
      "Linearity.", [S`\((1+3a,\ 2-a)=(7,0)\Rightarrow a=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What are coordinates in a basis?", "The unique weights c₁, …, cₙ with x = c₁b₁ + … + cₙbₙ."],
      ["Why are they unique?", "Independence of the basis rules out two different representations."],
      ["How do I find [x]_B?", "Row reduce [P_B | x], where P_B has the basis vectors as columns."],
      ["How do I get x back?", "x = P_B [x]_B."],
      ["Do coordinates respect sums and multiples?", "Yes: [x + y]_B = [x]_B + [y]_B and [cx]_B = c[x]_B."],
    ],
    summary: [
      "Basis ⇒ unique representation.",
      "[x]_B = (c₁, …, cₙ).",
      "Find it: solve P_B c = x.",
      "Rebuild: x = P_B [x]_B.",
      "Coordinates are linear; [bᵢ]_B = eᵢ.",
    ],
    next: "Chapter 5 generalises spans and bases from ℝⁿ to any subspace, and measures subspaces by their dimension.",
  }),
];
