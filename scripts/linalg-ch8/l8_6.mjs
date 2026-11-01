// LINALG1 8.6 — Complex Eigenvalues: complex roots of the characteristic polynomial, complex eigenvectors from
// A − λI, conjugate pairs, the rotation–scaling matrix C = [a −b; b a] = r R_φ, the factorisation A = PCP⁻¹ with
// P = [Re v  Im v] (checked as AP = PC), and spirals in x_{k+1} = Ax_k.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { orbit } from "./ws/fig8.mjs";
import { sqMap } from "./ws/fig7.mjs";

export const TITLE = "8.6 Complex Eigenvalues";
export const ID = "11a10001-0001-4001-8001-000000000806";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const r3 = Math.sqrt(3);
const spinFig = sfig(orbit([[0.5, -0.5], [0.5, 0.5]], [4, 0], 10, { raw: true }), "λ = 0.5 ± 0.5i: each step turns by 45° and shrinks by √0.5 — a spiral into 0");
const csFig = sfig(sqMap([[r3, -1], [1, r3]], { raw: true }), "C = [√3 −1; 1 √3] = 2R₃₀°: the unit square is turned 30° and doubled");
const outFig = sfig(orbit([[1, -0.3], [0.3, 1]], [2, 0], 10, { raw: true }), "|λ| > 1: the spiral moves outward");

export const blocks = () => [
  intro({
    icon: "🌀",
    title: "Complex Eigenvalues",
    overview: S`A rotation of the plane turns every nonzero vector, so it has no real eigenvectors — its characteristic polynomial has complex roots. Complex eigenvalues are not a failure: they describe rotation. For a real \(2\times2\) matrix with eigenvalues \(a\pm bi\), there is a real change of basis \(P\) that turns \(A\) into the <strong>rotation–scaling matrix</strong> \(C=${M([["a", "-b"], ["b", "a"]])}\), which rotates by the angle \(\varphi\) of \(a+bi\) and scales by \(r=|\lambda|=\sqrt{a^2+b^2}\). Iterating such a matrix produces spirals: inward when \(r<1\), outward when \(r>1\), closed orbits when \(r=1\).`,
    goals: [
      "find complex eigenvalues and complex eigenvectors;",
      "use that complex eigenvalues and eigenvectors of real matrices come in conjugate pairs;",
      S`read the angle and scale of \(C=${M([["a", "-b"], ["b", "a"]])}\);`,
      "factor \\(A=PCP^{-1}\\) with \\(P=[\\operatorname{Re}\\vec v\\ \\operatorname{Im}\\vec v]\\) and check \\(AP=PC\\);",
      "predict spirals in \\(\\vec x_{k+1}=A\\vec x_k\\) from \\(|\\lambda|\\).",
    ],
    outcomes: "eigenvalues and eigenvectors: complex eigenvalues",
    prior: [
      [S`\((2-i)(-1-i)=\)?`, S`\(-2-2i+i+i^2=-3-i\).`],
      [S`\(|3+4i|=\)?`, S`\(5\).`],
      [S`\(R_\theta=\)?`, S`\(${M([["\\cos\\theta", "-\\sin\\theta"], ["\\sin\\theta", "\\cos\\theta"]])}\).`],
    ],
    words: [
      ["Complex eigenvalue", "a non-real root of \\(\\det(A-\\lambda I)\\)", "\\(\\lambda=a\\pm bi\\)"],
      ["Conjugate pair", "\\(\\lambda,\\bar\\lambda\\) with eigenvectors \\(\\vec v,\\bar{\\vec v}\\)", "for real \\(A\\)"],
      ["Rotation–scaling matrix", S`\(C=${M([["a", "-b"], ["b", "a"]])}=rR_\varphi\)`,"\\(r=\\sqrt{a^2+b^2}\\)"],
      ["\\(\\operatorname{Re}\\vec v,\\ \\operatorname{Im}\\vec v\\)", "real and imaginary parts of \\(\\vec v\\)", "columns of \\(P\\)"],
      ["Spiral", "orbit of \\(\\vec x_{k+1}=A\\vec x_k\\)", "in if \\(r<1\\), out if \\(r>1\\)"],
    ],
  }),

  section("📌 Complex eigenvalues and eigenvectors", S`
  ${theorem("conjugate pairs", S`If \(A\) is a real matrix and \(A\vec v=\lambda\vec v\) with \(\lambda\) complex, then \(A\bar{\vec v}=\bar\lambda\bar{\vec v}\). So non-real eigenvalues of real matrices come in conjugate pairs, with conjugate eigenvectors.`, S`Take complex conjugates of \(A\vec v=\lambda\vec v\): \(\bar A\bar{\vec v}=\bar\lambda\bar{\vec v}\), and \(\bar A=A\) because \(A\) is real.`)}
  ${keyIdea(S`Complex eigenvectors are found exactly as real ones: row reduce \(A-\lambda I\) with complex arithmetic. For a \(2\times2\) matrix one row is a multiple of the other, so one equation is enough.`)}`),

  section("📌 Rotation–scaling", S`
  ${theorem("rotation–scaling matrix", S`\(C=${M([["a", "-b"], ["b", "a"]])}\) has eigenvalues \(a\pm bi\). With \(r=\sqrt{a^2+b^2}\) and \(\varphi\) the angle of the point \((a,b)\), \[C=r${M([["\\cos\\varphi", "-\\sin\\varphi"], ["\\sin\\varphi", "\\cos\\varphi"]])}=rR_\varphi.\]`, S`\(\det(C-\lambda I)=(a-\lambda)^2+b^2=0\iff\lambda=a\pm bi\). Since \(a=r\cos\varphi\) and \(b=r\sin\varphi\), factor out \(r\).`)}
  ${theorem("real factorisation", S`Let \(A\) be a real \(2\times2\) matrix with eigenvalue \(\lambda=a-bi\) (\(b\ne0\)) and eigenvector \(\vec v\). With \(P=[\,\operatorname{Re}\vec v\ \ \operatorname{Im}\vec v\,]\), \[A=PCP^{-1},\qquad C=${M([["a", "-b"], ["b", "a"]])}.\]`, S`Write \(\vec v=\vec x+i\vec y\). Then \(A\vec x+iA\vec y=(a-bi)(\vec x+i\vec y)=(a\vec x+b\vec y)+i(-b\vec x+a\vec y)\). Comparing parts: \(A\vec x=a\vec x+b\vec y\) and \(A\vec y=-b\vec x+a\vec y\) — exactly the two columns of \(PC\). \(\vec x,\vec y\) are independent (otherwise \(\lambda\) would be real), so \(P\) is invertible.`)}
  ${csFig}`),

  section("📌 Explore", S`<p>Set \(a\) and \(b\). The explorer shows \(C=${M([["a", "-b"], ["b", "a"]])}\), its eigenvalues \(a\pm bi\), the angle and scale, and the orbit \(\vec x_0,C\vec x_0,C^2\vec x_0,\dots\) Change \(r\) across 1 to switch between inward and outward spirals.</p>`),
  widget("laSpiral", { init: { a: 0.5, b: 0.5 } }),

  section("📌 Common mistakes", watchOut([
    "No real eigenvalues does not mean no eigenvalues — they are complex.",
    "With λ = a − bi the matrix is C = [a −b; b a]; using a + bi instead swaps the sign convention (and P's second column).",
    "P uses the real and imaginary PARTS of one eigenvector, not the two conjugate eigenvectors.",
    "Check the factorisation as AP = PC — no inverse needed.",
    "The spiral's growth rate is |λ| = √(a² + b²), not a.",
  ])),

  examples([
    ["A rotation's eigenvalues", S`Find the eigenvalues and an eigenvector of the rotation \(R_{90^\circ}=${M([[0, -1], [1, 0]])}\).`,
      [S`\(\det(A-\lambda I)=${D([["-\\lambda", -1], [1, "-\\lambda"]])}=\lambda^2+1=0\): \(\lambda=\pm i\).`,
        S`\(\lambda=i\): \(A-iI=${M([["-i", -1], [1, "-i"]])}\). Row 2: \(x_1-ix_2=0\), so \(\vec v=(i,1)\).`,
        S`Check: \[A${cv("i", 1)}=${M([[0, -1], [1, 0]])}${cv("i", 1)}=${cv(-1, "i")}=i${cv("i", 1)}\ \checkmark\] By conjugation, \(\lambda=-i\) has eigenvector \((-i,1)\).`],
      S`\(\lambda=\pm i\); \(\vec v=(i,1)\) for \(\lambda=i\)`],
    ["A complex eigenvector", S`Find the eigenvalues of \(A=${M([[1, -2], [1, 3]])}\) and an eigenvector for \(\lambda=2-i\).`,
      [S`\(\operatorname{tr}A=4\), \(\det A=5\): \(\lambda^2-4\lambda+5=0\), \(\lambda=2\pm i\).`,
        S`\(A-(2-i)I=${M([["-1+i", -2], [1, "1+i"]])}\). Row 2: \(x_1+(1+i)x_2=0\). With \(x_2=1\): \(\vec v=(-1-i,\ 1)\).`,
        S`Check row 1: \((-1+i)(-1-i)-2\cdot1=(1+1)-2=0\) ✓. And \[A\vec v=${M([[1, -2], [1, 3]])}${cv("-1-i", 1)}=${cv("-1-i-2", "-1-i+3")}=${cv("-3-i", "2-i")},\quad (2-i)${cv("-1-i", 1)}=${cv("-3-i", "2-i")}\ \checkmark\]`],
      S`\(\lambda=2\pm i\); \(\vec v=(-1-i,1)\) for \(\lambda=2-i\)`],
    ["Reading a rotation–scaling matrix", S`Describe \(C=${M([["\\sqrt3", -1], [1, "\\sqrt3"]])}\) geometrically and give its eigenvalues.`,
      [S`\(a=\sqrt3\), \(b=1\): eigenvalues \(\sqrt3\pm i\). \(r=\sqrt{3+1}=2\), and \((\sqrt3,1)\) has angle \(\varphi=30^\circ\).`,
        S`\[C=2${M([["\\tfrac{\\sqrt3}2", "-\\tfrac12"], ["\\tfrac12", "\\tfrac{\\sqrt3}2"]])}=2R_{30^\circ}.\]`,
        S`Check on \(\vec e_1\): \(C${cv(1, 0)}=${cv("\\sqrt3", 1)}\), length 2 at angle \(30^\circ\) ✓.`],
      S`rotation by \(30^\circ\) and scaling by 2; \(\lambda=\sqrt3\pm i\)`, csFig],
    ["The real factorisation A = PCP⁻¹", S`Factor \(A=${M([[1, -2], [1, 3]])}\) as \(PCP^{-1}\) using \(\lambda=2-i\), \(\vec v=(-1-i,1)\).`,
      [S`\(\vec v=${cv(-1, 1)}+i${cv(-1, 0)}\): \(P=[\operatorname{Re}\vec v\ \operatorname{Im}\vec v]=${M([[-1, -1], [1, 0]])}\); \(a=2\), \(b=1\): \(C=${M([[2, -1], [1, 2]])}\).`,
        S`\[AP=${M([[1, -2], [1, 3]])}${M([[-1, -1], [1, 0]])}=${M([["-1-2", "-1+0"], ["-1+3", "-1+0"]])}=${M([[-3, -1], [2, -1]])},\]`,
        S`\[PC=${M([[-1, -1], [1, 0]])}${M([[2, -1], [1, 2]])}=${M([["-2-1", "1-2"], ["2+0", "-1+0"]])}=${M([[-3, -1], [2, -1]])}=AP\ \checkmark\]`,
        S`\(\det P=0+1=1\ne0\). So \(A\) acts, in the basis \(\operatorname{Re}\vec v,\operatorname{Im}\vec v\), as rotation by \(\arctan\tfrac12\approx26.57^\circ\) with scaling \(\sqrt5\).`],
      S`\(P=${M([[-1, -1], [1, 0]])}\), \(C=${M([[2, -1], [1, 2]])}\)`],
    ["A spiral into the origin", S`\(\vec x_{k+1}=A\vec x_k\) with \(A=${M([["0.5", "-0.5"], ["0.5", "0.5"]])}\). Describe the orbit and compute \(A^8\).`,
      [S`\(A\) is already a rotation–scaling matrix: \(a=b=0.5\), \(r=\sqrt{0.5}\approx0.707\), \(\varphi=45^\circ\). Each step turns by \(45^\circ\) and shrinks by about 29%: a spiral into \(\vec 0\).`,
        S`\[A^2=${M([["0.5", "-0.5"], ["0.5", "0.5"]])}${M([["0.5", "-0.5"], ["0.5", "0.5"]])}=${M([["0.25-0.25", "-0.25-0.25"], ["0.25+0.25", "-0.25+0.25"]])}=${M([[0, "-0.5"], ["0.5", 0]])}.\]`,
        S`\[A^4=(A^2)^2=${M([[0, "-0.5"], ["0.5", 0]])}${M([[0, "-0.5"], ["0.5", 0]])}=${M([["-0.25", 0], [0, "-0.25"]])},\qquad A^8=(A^4)^2=${M([["\\tfrac1{16}", 0], [0, "\\tfrac1{16}"]])}.\]`,
        S`This matches \(r^8R_{360^\circ}=(\sqrt{0.5})^8I=\tfrac1{16}I\): after 8 steps the orbit is back on its starting ray, 16 times closer.`],
      S`inward spiral; \(A^8=\tfrac1{16}I\)`, spinFig],
  ]),

  practice([
    q("eigenvalues", S`Find the real part of the eigenvalues of \(${M([[3, -4], [4, 3]])}\).`, num(3),
      "C = [a −b; b a].", [S`\(\lambda=3\pm4i\).`], S`\(3\)`),
    q("modulus", S`Find \(|\lambda|\) for the eigenvalues of \(${M([[3, -4], [4, 3]])}\).`, num(5),
      "√(a² + b²).", [S`\(\sqrt{9+16}\).`], S`\(5\)`),
    q("angle", S`\(C=${M([[1, -1], [1, 1]])}\) rotates by how many degrees?`, num(45),
      "Angle of (1, 1).", [S`\(C=\sqrt2R_{45^\circ}\).`], S`\(45\)`),
    q("pairs", S`A real \(3\times3\) matrix has eigenvalue \(2+i\). It must also have eigenvalue:`, choice([S`\(2-i\)`, S`\(-2+i\)`, S`\(-2-i\)`, S`\(i\)`], 0),
      "Conjugate pairs.", [S`Real coefficients.`], S`\(2-i\)`),
    q("spiral", S`\(A\) has eigenvalues \(0.6\pm0.8i\). The orbits of \(\vec x_{k+1}=A\vec x_k\):`, choice(["stay on closed curves", "spiral in", "spiral out", "go to infinity along a line"], 0),
      "|λ| = 1.", [S`\(\sqrt{0.36+0.64}=1\).`], S`stay on closed curves`),
  ]),

  ...hard([
    ["A full rotation–scaling factorisation", S`Find \(P\) and \(C\) with \(A=PCP^{-1}\) for \(A=${M([[3, -5], [1, -1]])}\), and check.`,
      [S`\(\operatorname{tr}A=2\), \(\det A=-3+5=2\): \(\lambda^2-2\lambda+2=0\), \(\lambda=1\pm i\). Take \(\lambda=1-i\).`,
        S`\(A-(1-i)I=${M([["2+i", -5], [1, "-2+i"]])}\). Row 2: \(x_1=(2-i)x_2\); \(\vec v=(2-i,\ 1)=${cv(2, 1)}+i${cv(-1, 0)}\). Row 1 check: \((2+i)(2-i)-5=5-5=0\) ✓.`,
        S`\(P=${M([[2, -1], [1, 0]])}\), \(C=${M([[1, -1], [1, 1]])}\). \[AP=${M([[3, -5], [1, -1]])}${M([[2, -1], [1, 0]])}=${M([["6-5", "-3+0"], ["2-1", "-1+0"]])}=${M([[1, -3], [1, -1]])},\quad PC=${M([[2, -1], [1, 0]])}${M([[1, -1], [1, 1]])}=${M([["2-1", "-2-1"], [1, -1]])}=${M([[1, -3], [1, -1]])}\ \checkmark\]`],
      S`\(P=${M([[2, -1], [1, 0]])}\), \(C=${M([[1, -1], [1, 1]])}=\sqrt2R_{45^\circ}\)`, outFig],
    ["Why P is invertible", S`Prove that \(\operatorname{Re}\vec v\) and \(\operatorname{Im}\vec v\) are independent when \(\vec v\) is an eigenvector of a real \(2\times2\) matrix for a non-real \(\lambda\).`,
      [S`Write \(\vec v=\vec x+i\vec y\). If \(\vec y=c\vec x\) for a real \(c\) (or \(\vec x=\vec 0\)), then \(\vec v=(1+ic)\vec x\) is a complex multiple of the real vector \(\vec x\), which is then also an eigenvector: \(A\vec x=\lambda\vec x\).`,
        S`But \(A\vec x\) is real and \(\vec x\ne\vec 0\) is real, so \(\lambda\) would be real — a contradiction.`,
        S`Hence \(\vec x,\vec y\) are independent and \(P=[\vec x\ \vec y]\) is invertible.`],
      S`dependence would make \(\lambda\) real`],
  ], [
    q("hard", S`\(A=${M([[3, -5], [1, -1]])}\). Find \(|\lambda|^2\) for its eigenvalues.`, num(2),
      "|λ|² = det A for a 2 × 2 with complex eigenvalues.", [S`\(\lambda\bar\lambda=\det A=2\).`], S`\(2\)`),
    q("hard", S`\(C=${M([["a", "-b"], ["b", "a"]])}\) with \(a=0\), \(b=2\). Find the smallest \(k\ge1\) with \(C^k=cI\) for a real \(c\).`, num(2),
      "Rotation by 90°.", [S`\(C^2=${M([[-4, 0], [0, -4]])}\).`], S`\(2\)`),
    q("hard", S`Find the \((1,1)\) entry of \(C^4\) for \(C=${M([[1, -1], [1, 1]])}\).`, num(-4),
      "(√2)⁴ R₁₈₀.", [S`\(C^4=4R_{180^\circ}=-4I\).`], S`\(-4\)`),
  ]),

  wrapUp({
    qas: [
      ["What do complex eigenvalues mean?", "The matrix rotates: no real direction is kept."],
      ["How are complex eigenvectors found?", "Row reduce A − λI with complex arithmetic."],
      ["What is the rotation–scaling form?", "C = [a −b; b a] = rR_φ with r = |λ|."],
      ["How do I get A = PCP⁻¹?", "λ = a − bi, eigenvector v, P = [Re v  Im v]."],
      ["What do the orbits look like?", "Spirals: inward for |λ| < 1, outward for |λ| > 1, closed for |λ| = 1."],
    ],
    summary: [
      "Complex eigenvalues of real matrices come in conjugate pairs.",
      "C = [a −b; b a] has eigenvalues a ± bi.",
      "C = rR_φ, r = √(a² + b²).",
      "A = PCP⁻¹ with P = [Re v  Im v]; check AP = PC.",
      "|λ| decides the spiral's direction.",
    ],
    next: "8.7 shows that symmetric matrices never have complex eigenvalues — and their eigenvectors are orthogonal.",
  }),
];
