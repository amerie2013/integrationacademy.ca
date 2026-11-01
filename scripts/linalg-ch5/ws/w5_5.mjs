// LINALG1 Worksheet 5.5 — Orthogonal and Orthonormal Bases
// Self-contained: complete notes (orthogonal sets, orthogonal nonzero vectors are independent, coordinates by dot
// products, orthonormal bases and normalising, completing an orthogonal set), 9 worked examples with figures,
// 13 problems with full solutions.
import { S, def, thm } from "./wkit.mjs";
import { planeFig, vecs3, vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const F_PAIR = vecs2([[[3, 1], "(3, 1)", "blue"], [[-1, 3], "(−1, 3)", "red"]], { xmin: -2, xmax: 4, ymin: -1, ymax: 4 });
const F_TRIPLE = vecs3([[[1, 2, -1], "(1, 2, −1)"], [[1, 0, 1], "(1, 0, 1)"], [[1, -1, -1], "(1, −1, −1)"]]);
const F_PROJ = vecs2([[[3, 1], "v₁", "blue"], [[-1, 3], "v₂", "red"], [[-1, 3], "", "red", null, true], [[2, 4], "x", "green"], [[2, 4], "", "green", [3, 1], true]], { xmin: -2, xmax: 4, ymin: -1, ymax: 5 });
const s2 = Math.SQRT1_2;
const F_UNIT = vecs2([[[s2, s2], "w₁", "blue"], [[-s2, s2], "w₂", "red"], [[3, 5], "x = (3, 5)", "green"]], { xmin: -2, xmax: 4, ymin: -1, ymax: 6 });
const F_COMPLETE = vecs3([[[1, 2, 1], "(1, 2, 1)"], [[1, 0, -1], "(1, 0, −1)"], [[1, -1, 1], "(1, −1, 1)", "green"]]);

const NOTES = [
  { h: "1. Orthogonal sets",
    lead: S`${def("orthogonal set", S`A set \(\{\vec v_1,\dots,\vec v_k\}\subseteq\mathbb R^n\) is \textbf{orthogonal} if \(\vec v_i\cdot\vec v_j=0\) for all \(i\ne j\) --- every pair of different vectors is perpendicular.`)}
With \(k\) vectors there are \(\tfrac{k(k-1)}2\) pairs to check (3 pairs for 3 vectors). The figure shows the orthogonal pair \((3,1),(-1,3)\): \(-3+3=0\).`,
    fig: F_PAIR, w: 0.58,
    body: S`The zero vector is orthogonal to every vector, so an orthogonal set may contain \(\vec 0\) --- and such a set is dependent. The standard basis \(\vec e_1,\dots,\vec e_n\) is orthogonal.` },

  { h: "2. Orthogonal nonzero vectors are independent",
    lead: thm("orthogonal ⇒ independent", S`An orthogonal set of nonzero vectors is linearly independent.`) + S`\pf{Let \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\). Dot with \(\vec v_i\): all terms \(c_j\,\vec v_j\cdot\vec v_i\) with \(j\ne i\) are 0, leaving \(c_i\|\vec v_i\|^2=0\). As \(\vec v_i\ne\vec 0\), \(c_i=0\).}`,
    fig: F_TRIPLE, w: 0.58,
    body: S`\textbf{Consequence.} \(k\) nonzero orthogonal vectors in a \(k\)-dimensional subspace form a basis (counting theorem) --- an \textbf{orthogonal basis}. Three nonzero, mutually perpendicular vectors in \(\mathbb R^3\) (figure) are a basis of \(\mathbb R^3\).` },

  { h: "3. Coordinates by dot products",
    lead: thm("coordinates in an orthogonal basis", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is an orthogonal basis of \(S\) and \(\vec x\in S\), then \[\vec x=c_1\vec v_1+\dots+c_k\vec v_k\quad\text{with}\quad c_i=\frac{\vec x\cdot\vec v_i}{\|\vec v_i\|^2}.\]`) + S`\pf{Dot \(\vec x=\sum_j c_j\vec v_j\) with \(\vec v_i\): only \(c_i\|\vec v_i\|^2\) survives.}`,
    fig: F_PROJ, w: 0.56,
    body: S`Each term \(c_i\vec v_i\) is the \textbf{projection} of \(\vec x\) onto \(\vec v_i\). The formula needs \(\vec x\in S\): for \(\vec x\notin S\) the sum \(\sum c_i\vec v_i\) is a different vector (the projection onto \(S\)), so always recombine and compare. Figure: \((2,4)=1(3,1)+1(-1,3)\) since \(\tfrac{6+4}{10}=1\) and \(\tfrac{-2+12}{10}=1\).` },

  { h: "4. Orthonormal bases",
    lead: S`${def("orthonormal", S`An orthogonal set is \textbf{orthonormal} if every vector has length 1; an orthonormal basis is an orthonormal set that is a basis.`)}
\textbf{Normalising:} \(\vec w_i=\vec v_i/\|\vec v_i\|\) turns an orthogonal basis into an orthonormal one. Then \(c_i=\vec x\cdot\vec w_i\) --- no denominators --- and \(\|\vec x\|^2=c_1^2+\dots+c_k^2\).`,
    fig: F_UNIT, w: 0.56,
    body: S`Figure: \(\vec w_1=\tfrac1{\sqrt2}(1,1)\), \(\vec w_2=\tfrac1{\sqrt2}(-1,1)\); for \(\vec x=(3,5)\): \(c_1=\tfrac8{\sqrt2}=4\sqrt2\), \(c_2=\tfrac2{\sqrt2}=\sqrt2\), and \(c_1^2+c_2^2=32+2=34=\|\vec x\|^2\).` },

  { h: "5. Completing an orthogonal set",
    lead: S`To add a vector orthogonal to \(\vec v_1,\dots,\vec v_k\), solve the homogeneous system \(\vec v_1\cdot\vec x=0,\ \dots,\ \vec v_k\cdot\vec x=0\) (the \(\vec v_i\) are the \textbf{rows}). In \(\mathbb R^3\) with two vectors, the cross product \(\vec v_1\times\vec v_2\) also works.`,
    fig: F_COMPLETE, w: 0.58,
    body: S`Figure: \((1,-1,1)\) is orthogonal to \((1,2,1)\) and \((1,0,-1)\), completing an orthogonal basis of \(\mathbb R^3\) (Example 7).` },
];

const EXAMPLES = [
  { title: "Checking an orthogonal basis", q: S`Show that \(\{(1,2,-1),(1,0,1),(1,-1,-1)\}\) is an orthogonal basis of \(\mathbb R^3\).`,
    fig: F_TRIPLE,
    steps: [S`Put the vectors in the columns of \(B\). Entry \((i,j)\) of \(B^TB\) is \(\vec v_i\cdot\vec v_j\): \[B^TB=${am([[1, 2, -1], [1, 0, 1], [1, -1, -1]], false)}${am([[1, 1, 1], [2, 0, -1], [-1, 1, -1]], false)}=${am([["1+4+1", "1+0-1", "1-2+1"], ["1+0-1", "1+0+1", "1+0-1"], ["1-2+1", "1+0-1", "1+1+1"]], false)}=${am([[6, 0, 0], [0, 2, 0], [0, 0, 3]], false)}.\]`,
      S`All off-diagonal entries are 0: pairwise orthogonal. The diagonal \(6,2,3\) (squared lengths) is nonzero, so the vectors are nonzero.`,
      ...steps([[1, 1, 1], [2, 0, -1], [-1, 1, -1]], [
        [S`\textbf{Confirm independence.} Clear column 1.`, ["R2-2R1", "R3+R1"]],
        [S`Clear column 2 below its pivot.`, ["R3+R2"]],
      ], { bar: false, intro: "Row reduce B" }).steps,
      S`Three pivots: independent, so the three vectors form an orthogonal basis of \(\mathbb R^3\).`],
    ans: S`an orthogonal basis of \(\mathbb R^3\)` },
  { title: "Coordinates in that basis", q: S`Find the coordinates of \(\vec x=(6,0,0)\) in the basis of Example 1.`,
    fig: vecs3([[[1, 2, -1], "v₁"], [[1, 0, 1], "v₂"], [[1, -1, -1], "v₃"], [[6, 0, 0], "x", "green"]]),
    steps: [S`All dot products \(\vec v_i\cdot\vec x\) at once: \[B^T\vec x=${am([[1, 2, -1], [1, 0, 1], [1, -1, -1]], false)}${am([[6], [0], [0]], false)}=${am([["6+0+0"], ["6+0+0"], ["6+0+0"]], false)}=${am([[6], [6], [6]], false)}.\]`,
      S`Divide by the squared lengths \(6,2,3\) (the diagonal of \(B^TB\)): \(c_1=\tfrac66=1\), \(c_2=\tfrac62=3\), \(c_3=\tfrac63=2\).`,
      S`Check \(B\vec c=\vec x\): \[${am([[1, 1, 1], [2, 0, -1], [-1, 1, -1]], false)}${am([[1], [3], [2]], false)}=${am([["1+3+2"], ["2+0-2"], ["-1+3-2"]], false)}=${am([[6], [0], [0]], false)}\ \checkmark\]`],
    ans: S`\((1,3,2)\)` },
  { title: "An orthogonal set with the zero vector", q: S`Is \(\{(1,1),(0,0),(-1,1)\}\) orthogonal? Independent? A basis of \(\mathbb R^2\)?`,
    fig: vecs2([[[1, 1], "(1, 1)", "blue"], [[-1, 1], "(−1, 1)", "red"]], { xmin: -2, xmax: 2, ymin: -1, ymax: 2 }),
    steps: [S`Pairs: \((1,1)\cdot\vec 0=0\), \(\vec 0\cdot(-1,1)=0\), \((1,1)\cdot(-1,1)=0\): orthogonal.`, S`It contains \(\vec 0\), so it is dependent (\(1\cdot\vec 0=\vec 0\)) and not a basis.`, S`Dropping \(\vec 0\) leaves \(\{(1,1),(-1,1)\}\): orthogonal and nonzero, so an orthogonal basis of \(\mathbb R^2\).`],
    ans: S`orthogonal but dependent; without \(\vec 0\) it is a basis` },
  { title: "Normalising a basis of a plane", q: S`\(\vec v_1=(2,-1,2)\), \(\vec v_2=(1,2,0)\). Show they are orthogonal, normalise them, and find the coordinates of \(\vec x=(3,1,2)\) in the orthonormal basis of their plane.`,
    fig: planeFig([2, -1, 2], [1, 2, 0], { lu: "v₁", lv: "v₂", more: [[[3, 1, 2], "x", "green"]], len: 3.5 }),
    steps: [S`With \(V=[\,\vec v_1\ \vec v_2\,]\): \[V^TV=${am([[2, -1, 2], [1, 2, 0]], false)}${am([[2, 1], [-1, 2], [2, 0]], false)}=${am([["4+1+4", "2-2+0"], ["2-2+0", "1+4+0"]], false)}=${am([[9, 0], [0, 5]], false)}.\] Orthogonal, with \(\|\vec v_1\|=3\), \(\|\vec v_2\|=\sqrt5\).`,
      S`Normalise: \(\vec w_1=\tfrac13(2,-1,2)\), \(\vec w_2=\tfrac1{\sqrt5}(1,2,0)\).`,
      S`\(V^T\vec x=${am([[2, -1, 2], [1, 2, 0]], false)}${am([[3], [1], [2]], false)}=${am([["6-1+4"], ["3+2+0"]], false)}=${am([[9], [5]], false)}\), so \(\vec x\cdot\vec w_1=\tfrac93=3\) and \(\vec x\cdot\vec w_2=\tfrac5{\sqrt5}=\sqrt5\).`,
      S`Check: \[3\vec w_1+\sqrt5\,\vec w_2=${am([[2], [-1], [2]], false)}+${am([[1], [2], [0]], false)}=${am([[3], [1], [2]], false)}=\vec x\ ✓\], so \(\vec x\) lies in the plane.`],
    ans: S`\(\vec x=3\vec w_1+\sqrt5\,\vec w_2\)` },
  { title: "Coordinates in ℝ²", q: S`\(\{(3,1),(-1,3)\}\) is an orthogonal basis of \(\mathbb R^2\). Find the coordinates of \((2,4)\).`,
    fig: F_PROJ,
    steps: [S`\(B^TB=${am([[3, 1], [-1, 3]], false)}${am([[3, -1], [1, 3]], false)}=${am([["9+1", "-3+3"], ["-3+3", "1+9"]], false)}=${am([[10, 0], [0, 10]], false)}\): orthogonal, both squared lengths 10.`,
      S`\(B^T\vec x=${am([[3, 1], [-1, 3]], false)}${am([[2], [4]], false)}=${am([["6+4"], ["-2+12"]], false)}=${am([[10], [10]], false)}\), so \(c_1=\tfrac{10}{10}=1\), \(c_2=\tfrac{10}{10}=1\).`,
      S`Check \(B\vec c\): \(${am([[3, -1], [1, 3]], false)}${am([[1], [1]], false)}=${am([["3-1"], ["1+3"]], false)}=${am([[2], [4]], false)}\) ✓.`],
    ans: S`\((1,1)\)` },
  { title: "In the plane or not?", q: S`\(\{(2,1,-1),(1,-1,1)\}\) is an orthogonal basis of a plane \(P\). Decide whether \((4,-1,1)\) and \((0,0,1)\) lie in \(P\).`,
    fig: planeFig([2, 1, -1], [1, -1, 1], { lu: "v₁", lv: "v₂", more: [[[4, -1, 1], "(4, −1, 1)", "green"], [[0, 0, 1], "(0, 0, 1)", "amber"]], len: 3.5 }),
    steps: [S`\(V^TV=${am([[2, 1, -1], [1, -1, 1]], false)}${am([[2, 1], [1, -1], [-1, 1]], false)}=${am([["4+1+1", "2-1-1"], ["2-1-1", "1+1+1"]], false)}=${am([[6, 0], [0, 3]], false)}\): orthogonal, squared lengths 6 and 3.`,
      S`\((4,-1,1)\): \(V^T\vec x=${am([[2, 1, -1], [1, -1, 1]], false)}${am([[4], [-1], [1]], false)}=${am([["8-1-1"], ["4+1+1"]], false)}=${am([[6], [6]], false)}\), so \(c_1=1\), \(c_2=2\). Rebuild: \(${am([[2, 1], [1, -1], [-1, 1]], false)}${am([[1], [2]], false)}=${am([["2+2"], ["1-2"], ["-1+2"]], false)}=${am([[4], [-1], [1]], false)}\) ✓ — in \(P\).`,
      S`\((0,0,1)\): \(V^T\vec y=${am([[2, 1, -1], [1, -1, 1]], false)}${am([[0], [0], [1]], false)}=${am([[-1], [1]], false)}\), so \(c_1=-\tfrac16\), \(c_2=\tfrac13\). Rebuild: \(-\tfrac16${am([[2], [1], [-1]], false)}+\tfrac13${am([[1], [-1], [1]], false)}=${am([[0], ["-\\tfrac12"], ["\\tfrac12"]], false)}\ne${am([[0], [0], [1]], false)}\) — not in \(P\).`],
    ans: S`\((4,-1,1)\in P\); \((0,0,1)\notin P\)` },
  { title: "Completing to an orthogonal basis", q: S`Find a nonzero vector orthogonal to \((1,2,1)\) and \((1,0,-1)\).`,
    fig: F_COMPLETE,
    steps: [S`First, \((1,2,1)\cdot(1,0,-1)=1-1=0\). We need \(x_1+2x_2+x_3=0\) and \(x_1-x_3=0\).`,
      ...steps([[1, 2, 1], [1, 0, -1]], [
        [S`Clear column 1.`, ["R2-R1"]],
        [S`Make the second pivot 1,`, ["R2*-1/2"]],
        [S`and clear above it.`, ["R1-2R2"]],
      ], { bar: false, intro: "The given vectors are the rows of the coefficient matrix" }).steps,
      S`\(x_3=t\): \(x_1=t\), \(x_2=-t\). Take \((1,-1,1)\): \(1-2+1=0\) ✓, \(1+0-1=0\) ✓.`],
    ans: S`\((1,-1,1)\)` },
  { title: "A rotated orthonormal basis", q: S`Find the coordinates of \((3,5)\) in the orthonormal basis \(\vec w_1=\tfrac1{\sqrt2}(1,1)\), \(\vec w_2=\tfrac1{\sqrt2}(-1,1)\), and check the length.`,
    fig: F_UNIT,
    steps: [S`With \(Q=\tfrac1{\sqrt2}${am([[1, -1], [1, 1]], false)}\): \(Q^TQ=\tfrac12${am([[1, 1], [-1, 1]], false)}${am([[1, -1], [1, 1]], false)}=\tfrac12${am([["1+1", "-1+1"], ["-1+1", "1+1"]], false)}=${am([[1, 0], [0, 1]], false)}\): orthonormal.`,
      S`Coordinates \(=Q^T\vec x=\tfrac1{\sqrt2}${am([[1, 1], [-1, 1]], false)}${am([[3], [5]], false)}=\tfrac1{\sqrt2}${am([["3+5"], ["-3+5"]], false)}=${am([["4\\sqrt2"], ["\\sqrt2"]], false)}\).`,
      S`Length check: \(c_1^2+c_2^2=32+2=34=3^2+5^2\) ✓ (orthonormal coordinates preserve length).`],
    ans: S`\((4\sqrt2,\ \sqrt2)\)` },
  { title: "Making a set orthogonal", q: S`For which \(a,b\) is \(\{(1,a,1),(b,1,2),(1,0,-1)\}\) orthogonal?`,
    steps: [S`All pairwise dot products are the off-diagonal entries of \(B^TB\) for \(B=[\,(1,a,1)\ (b,1,2)\ (1,0,-1)\,]\): \[B^TB=${am([[1, "a", 1], ["b", 1, 2], [1, 0, -1]], false)}${am([[1, "b", 1], ["a", 1, 0], [1, 2, -1]], false)}=${am([["2+a^2", "b+a+2", 0], ["b+a+2", "b^2+5", "b-2"], [0, "b-2", 2]], false)}.\]`,
      S`Orthogonal \(\iff\) every off-diagonal entry is 0: \(b-2=0\) and \(b+a+2=0\). So \(b=2\) and \(a=-4\).`,
      S`Check with \(a=-4\), \(b=2\): the off-diagonal entries are \(2-4+2=0\), \(0\), \(2-2=0\) ✓.`],
    ans: S`\(a=-4\), \(b=2\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Are \((3,-2)\) and \((4,6)\) orthogonal?`, ans: S`yes: \(12-12=0\)` },
  { level: 1, q: S`Is \(\{(1,0,0),(0,1,1)\}\) orthonormal? Orthogonal?`, ans: S`orthogonal yes; orthonormal no (\(\|(0,1,1)\|=\sqrt2\))` },
  { level: 1, q: S`Normalise \((1,-2,2)\).`, ans: S`\(\tfrac13(1,-2,2)\)` },
  { level: 2, q: S`Show that \(\{(1,1,0),(1,-1,1),(1,-1,-2)\}\) is an orthogonal basis of \(\mathbb R^3\).`, ans: S`all three dot products are 0 and the vectors are nonzero`,
    fig: vecs3([[[1, 1, 0], "v₁"], [[1, -1, 1], "v₂"], [[1, -1, -2], "v₃"]]),
    sol: [S`\(1-1+0=0\), \(1-1+0=0\), \(1+1-2=0\).`, S`Nonzero and orthogonal \(\Rightarrow\) independent; three in \(\mathbb R^3\) \(\Rightarrow\) basis.`] },
  { level: 2, q: S`Find the coordinates of \((4,0,-1)\) in the basis of Problem 4.`, ans: S`\((2,1,1)\)`,
    sol: [S`\(\|\vec v_1\|^2=2\), \(\|\vec v_2\|^2=3\), \(\|\vec v_3\|^2=6\).`, S`\(c_1=\tfrac{4}{2}=2\), \(c_2=\tfrac{4-0-1}{3}=1\), \(c_3=\tfrac{4-0+2}{6}=1\).`, S`Check: \((2,2,0)+(1,-1,1)+(1,-1,-2)=(4,0,-1)\) ✓.`] },
  { level: 2, q: S`\(\vec w_1=(\tfrac35,\tfrac45)\), \(\vec w_2=(-\tfrac45,\tfrac35)\). Find the coordinates of \((5,10)\).`, ans: S`\((11,2)\)`,
    fig: vecs2([[[0.6, 0.8], "w₁", "blue"], [[-0.8, 0.6], "w₂", "red"], [[5, 10], "x", "green"]], { xmin: -2, xmax: 6, ymin: -1, ymax: 11 }),
    sol: [S`\(c_1=3+8=11\), \(c_2=-4+6=2\).`, S`Check: \(11(\tfrac35,\tfrac45)+2(-\tfrac45,\tfrac35)=(\tfrac{33-8}5,\tfrac{44+6}5)=(5,10)\) ✓.`] },
  { level: 2, q: S`Find a nonzero vector orthogonal to both \((1,1,1)\) and \((1,-1,0)\).`, ans: S`\((1,1,-2)\) (or a multiple)`,
    sol: [S`Cross product: \((1,1,1)\times(1,-1,0)=(1\cdot0-1\cdot(-1),\ 1\cdot1-1\cdot0,\ 1\cdot(-1)-1\cdot1)=(1,1,-2)\).`, S`Check: \(1+1-2=0\), \(1-1+0=0\).`] },
  { level: 2, q: S`\(\{(1,1,1),(1,-1,0)\}\) is an orthogonal basis of a plane \(P\). Is \((2,3,5)\) in \(P\)?`, ans: S`no`,
    fig: planeFig([1, 1, 1], [1, -1, 0], { lu: "(1, 1, 1)", lv: "(1, −1, 0)", more: [[[2, 3, 5], "(2, 3, 5)", "green"]], len: 4 }),
    sol: [S`\(c_1=\tfrac{10}{3}\), \(c_2=\tfrac{2-3}{2}=-\tfrac12\).`, S`\(\tfrac{10}3(1,1,1)-\tfrac12(1,-1,0)=(\tfrac{17}6,\tfrac{23}6,\tfrac{10}3)\ne(2,3,5)\): not in \(P\).`] },
  { level: 3, space: 5, q: S`Prove: if \(\vec u\cdot\vec v=0\), then \(\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2\).`, ans: S`expand \((\vec u+\vec v)\cdot(\vec u+\vec v)\)`,
    sol: [S`\(\|\vec u+\vec v\|^2=\vec u\cdot\vec u+2\vec u\cdot\vec v+\vec v\cdot\vec v=\|\vec u\|^2+0+\|\vec v\|^2\).`] },
  { level: 3, space: 5, q: S`Let \(\{\vec w_1,\dots,\vec w_k\}\) be an orthonormal basis of \(S\), \(\vec x=\sum a_i\vec w_i\), \(\vec y=\sum b_i\vec w_i\). Prove \(\vec x\cdot\vec y=\sum a_ib_i\).`, ans: S`expand; \(\vec w_i\cdot\vec w_j=0\) for \(i\ne j\), 1 for \(i=j\)`,
    sol: [S`\(\vec x\cdot\vec y=\sum_i\sum_j a_ib_j\,\vec w_i\cdot\vec w_j\).`, S`Only \(i=j\) terms survive, each with \(\vec w_i\cdot\vec w_i=1\): \(\sum_i a_ib_i\).`] },
  { level: 3, space: 5, q: S`For which \(k\) is \(\{(1,k,2),(k,1,-1)\}\) orthogonal?`, ans: S`\(k=1\)`,
    sol: [S`\(k+k-2=0\), so \(k=1\). Check: \((1,1,2)\cdot(1,1,-1)=1+1-2=0\).`] },
  { level: 3, space: 5, q: S`Prove that any orthogonal set of \(n\) nonzero vectors in \(\mathbb R^n\) is a basis of \(\mathbb R^n\).`, ans: S`independent by orthogonality; \(n\) independent vectors in dimension \(n\)`,
    sol: [S`Orthogonal and nonzero \(\Rightarrow\) independent (Note 2).`, S`\(n\) independent vectors in the \(n\)-dimensional \(\mathbb R^n\) form a basis (counting theorem).`] },
  { level: 3, space: 5, q: S`In the orthogonal basis \(\{(1,1),(1,-1)\}\), write \(\vec x=(2,6)\) as a sum of its projections onto the basis vectors and draw them.`, ans: S`\((4,4)+(-2,2)\)`,
    fig: vecs2([[[1, 1], "v₁", "blue"], [[1, -1], "v₂", "red"], [[2, 6], "x", "green"]], { xmin: -3, xmax: 5, ymin: -2, ymax: 7 }),
    sol: [S`\(c_1=\tfrac{2+6}{2}=4\), \(c_2=\tfrac{2-6}{2}=-2\).`, S`Projections: \(4(1,1)=(4,4)\) and \(-2(1,-1)=(-2,2)\); their sum is \((2,6)\) ✓.`] },
];

export const WS = {
  code: "5.5",
  title: "Orthogonal and Orthonormal Bases",
  bigideas: S`An \textbf{orthogonal} set has every pair of vectors perpendicular; if its vectors are nonzero it is automatically independent, so the right number of them is a basis. In an \textbf{orthogonal basis}, coordinates need no system: \(c_i=\dfrac{\vec x\cdot\vec v_i}{\|\vec v_i\|^2}\), the projection coefficients. Dividing each vector by its length gives an \textbf{orthonormal basis}, where \(c_i=\vec x\cdot\vec w_i\) and lengths are computed from coordinates as in the standard basis.`,
  goals: ["Check whether a set is orthogonal or orthonormal.", "Prove that orthogonal nonzero vectors are independent.", "Find coordinates in an orthogonal basis with dot products, and decide membership in a subspace.", "Normalise an orthogonal basis and use an orthonormal basis.", "Complete an orthogonal set by solving a homogeneous system."],
  curriculum: "Subspaces of Rⁿ — orthogonal and orthonormal bases",
  vocab: [["Orthogonal set", "\\(\\vec v_i\\cdot\\vec v_j=0\\) for \\(i\\ne j\\)"], ["Orthonormal set", "orthogonal with all lengths 1"], ["Orthogonal basis", "a basis that is an orthogonal set"], ["Normalise", "\\(\\vec w=\\vec v/\\|\\vec v\\|\\)"], ["Coordinate formula", "\\(c_i=\\vec x\\cdot\\vec v_i/\\|\\vec v_i\\|^2\\)"]],
  hook: S`Find the coordinates of \((2,4)\) in the basis \(\{(3,1),(-1,3)\}\) by solving a system. Then compute \(\tfrac{(2,4)\cdot(3,1)}{10}\) and \(\tfrac{(2,4)\cdot(-1,3)}{10}\). Coincidence?`,
  concepts: NOTES,
  summary: [
    S`Orthogonal: every pair has dot product 0; orthonormal: also length 1.`,
    S`Orthogonal + nonzero \(\Rightarrow\) independent.`,
    S`Orthogonal basis: \(c_i=\vec x\cdot\vec v_i/\|\vec v_i\|^2\); orthonormal: \(c_i=\vec x\cdot\vec w_i\).`,
    S`Normalise with \(\vec v/\|\vec v\|\); then \(\|\vec x\|^2=\sum c_i^2\).`,
    S`Recombine to check --- the formula reproduces \(\vec x\) only if \(\vec x\) is in the subspace.`,
  ],
  tips: ["Check every pair: 3 vectors means 3 dot products.", "Divide by the squared length, not the length.", "Orthogonal does not mean unit length.", "Remove a zero vector before calling a set a basis.", "Use the cross product to complete an orthogonal pair in \\(\\mathbb R^3\\)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
