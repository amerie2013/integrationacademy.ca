// LINALG1 Worksheet 8.6 — Complex Eigenvalues
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { orbit } from "./fig8.mjs";
import { sqMap } from "./fig7.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const r3 = Math.sqrt(3);

const NOTES = [
  { h: "1. Complex eigenvalues",
    lead: S`If \(\det(A-\lambda I)=0\) has non-real roots, the eigenvalues are complex. For a real matrix they come in conjugate pairs \(a\pm bi\), and an eigenvector for \(\bar\lambda\) is the conjugate of one for \(\lambda\). Complex eigenvectors are found by row reducing \(A-\lambda I\) with complex arithmetic.`,
    fig: sqMap([[0.5, -r3 / 2], [r3 / 2, 0.5]], { w: 4 }), w: 0.5 },
  { h: "2. Rotation–scaling matrices",
    lead: thm("rotation–scaling", S`\(C=${M([["a", "-b"], ["b", "a"]])}\) has eigenvalues \(a\pm bi\) and equals \(rR_\varphi\), with \(r=\sqrt{a^2+b^2}\) and \(\varphi\) the angle of \((a,b)\).`) + S`\pf{\((a-\lambda)^2+b^2=0\); \(a=r\cos\varphi\), \(b=r\sin\varphi\).}`,
    fig: sqMap([[1, -r3], [r3, 1]], { w: 4 }), w: 0.5 },
  { h: "3. The real factorisation",
    lead: thm("A = PCP⁻¹", S`If \(A\) is real \(2\times2\) with eigenvalue \(\lambda=a-bi\) (\(b\ne0\)) and eigenvector \(\vec v\), then \(A=PCP^{-1}\) with \(P=[\operatorname{Re}\vec v\ \operatorname{Im}\vec v]\), \(C=${M([["a", "-b"], ["b", "a"]])}\).`) + S`\pf{Split \(A(\vec x+i\vec y)=(a-bi)(\vec x+i\vec y)\) into real and imaginary parts: \(A\vec x=a\vec x+b\vec y\), \(A\vec y=-b\vec x+a\vec y\), the columns of \(PC\).}`,
    fig: P(rowPic([[[["A"]], {}], [[["Re v", "Im v"]], { label: "P" }], "=", [[["Re v", "Im v"]], { label: "P" }], [[["a", "−b"], ["b", "a"]], { label: "C" }]]), 4.2), w: 0.5 },
  { h: "4. Spirals",
    lead: S`For \(\vec x_{k+1}=A\vec x_k\) with eigenvalues \(a\pm bi\), each step rotates (in the coordinates of \(P\)) by \(\varphi\) and scales by \(r=|\lambda|\). So orbits spiral inward if \(r<1\), outward if \(r>1\), and stay on closed curves if \(r=1\).`,
    fig: orbit([[1, -1], [1, 1]], [0.3, 0], 7, { w: 4 }), w: 0.5 },
  { h: "5. Trace and determinant",
    lead: S`For a \(2\times2\) matrix with eigenvalues \(a\pm bi\): \(\operatorname{tr}A=2a\) and \(\det A=a^2+b^2=|\lambda|^2\). So the modulus is \(\sqrt{\det A}\) and complex eigenvalues occur exactly when \((\operatorname{tr}A)^2<4\det A\).`,
    fig: P(matPic([["tr A = 2a"], ["det A = a² + b²"]], { label: "complex pair a ± bi" }), 2.2), w: 0.55 },
  { h: "6. Larger matrices",
    lead: S`A real \(n\times n\) matrix with odd \(n\) always has at least one real eigenvalue, since complex roots pair up. For example a rotation of \(\mathbb R^3\) about an axis has eigenvalue 1 (the axis) and a complex pair.`,
    fig: P(matPic([[0, -1, 0], [1, 0, 0], [0, 0, 2]], { label: "eigenvalues ±i and 2" }), 2), w: 0.55 },
];

const EXAMPLES = [
  { title: "Eigenvalues of a rotation", q: S`Find the eigenvalues of \(R_{60^\circ}\).`,
    fig: sqMap([[0.5, -r3 / 2], [r3 / 2, 0.5]], { w: 3.6 }),
    steps: [S`\(R_{60^\circ}=${M([["\\tfrac12", "-\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "\\tfrac12"]])}\): trace 1, determinant 1.`, S`\(\lambda^2-\lambda+1=0\Rightarrow\lambda=\tfrac12\pm\tfrac{\sqrt3}2i=\cos60^\circ\pm i\sin60^\circ\).`],
    ans: S`\(\tfrac12\pm\tfrac{\sqrt3}2i\)` },
  { title: "A complex eigenvector", q: S`Find the eigenvalues of \(A=${M([[1, -1], [1, 1]])}\) and an eigenvector for \(1-i\).`,
    fig: orbit([[1, -1], [1, 1]], [0.3, 0], 7, { w: 3.6 }),
    steps: [S`\(\operatorname{tr}A=2\), \(\det A=2\): \(\lambda^2-2\lambda+2=0\), \(\lambda=1\pm i\).`, S`\(A-(1-i)I=${M([["i", -1], [1, "i"]])}\). Row 2: \(x_1+ix_2=0\): \(\vec v=(-i,1)\).`, S`Check: \(A${C("-i", 1)}=${C("-i-1", "-i+1")}\) and \((1-i)${C("-i", 1)}=${C("-i+i^2", "1-i")}=${C("-1-i", "1-i")}\) ✓.`],
    ans: S`\(1\pm i\); \((-i,1)\)` },
  { title: "Factor A = PCP⁻¹", q: S`Factor \(A=${M([[2, -1], [5, 0]])}\) as \(PCP^{-1}\).`,
    fig: P(rowPic([[[[1, 0], [1, 2]], { label: "P" }], [[[1, -2], [2, 1]], { label: "C" }]]), 2.8),
    steps: [S`\(\operatorname{tr}A=2\), \(\det A=5\): \(\lambda=1\pm2i\). Take \(\lambda=1-2i\): \(A-\lambda I=${M([["1+2i", -1], [5, "-1+2i"]])}\); row 1 gives \(x_2=(1+2i)x_1\): \(\vec v=(1,\ 1+2i)=${C(1, 1)}+i${C(0, 2)}\).`, S`\(P=${M([[1, 0], [1, 2]])}\), \(C=${M([[1, -2], [2, 1]])}\). \[AP=${M([[2, -1], [5, 0]])}${M([[1, 0], [1, 2]])}=${M([["2-1", "0-2"], [5, 0]])}=${M([[1, -2], [5, 0]])},\quad PC=${M([[1, -2], ["1+4", "-2+2"]])}=${M([[1, -2], [5, 0]])}\ \checkmark\]`],
    ans: S`\(P=${M([[1, 0], [1, 2]])}\), \(C=${M([[1, -2], [2, 1]])}\)` },
  { title: "Reading C", q: S`Describe \(C=${M([[1, "-\\sqrt3"], ["\\sqrt3", 1]])}\).`,
    fig: sqMap([[1, -r3], [r3, 1]], { w: 3.6 }),
    steps: [S`\(a=1\), \(b=\sqrt3\): \(r=\sqrt{1+3}=2\), \(\varphi=60^\circ\).`, S`\(C=2R_{60^\circ}\); eigenvalues \(1\pm\sqrt3\,i\).`],
    ans: S`\(2R_{60^\circ}\)` },
  { title: "An outward spiral", q: S`For \(A=${M([[1, -1], [1, 1]])}\), compute \(A^8\) and describe the orbit of \((1,0)\).`,
    fig: orbit([[1, -1], [1, 1]], [0.3, 0], 7, { w: 3.6 }),
    steps: [S`\(A^2=${M([["1-1", "-1-1"], ["1+1", "-1+1"]])}=${M([[0, -2], [2, 0]])}\), \(A^4=${M([[0, -2], [2, 0]])}^2=${M([[-4, 0], [0, -4]])}\), \(A^8=${M([[16, 0], [0, 16]])}\).`, S`\(r=\sqrt2\), \(\varphi=45^\circ\): each step turns \(45^\circ\) and grows by \(\sqrt2\); after 8 steps \((1,0)\to(16,0)\).`],
    ans: S`\(A^8=16I\); outward spiral` },
  { title: "Closed orbits", q: S`Show the orbits of \(A=${M([["0.6", "-0.8"], ["0.8", "0.6"]])}\) stay on circles.`,
    fig: orbit([[0.6, -0.8], [0.8, 0.6]], [3, 0], 10, { w: 3.6 }),
    steps: [S`\(a=0.6\), \(b=0.8\): \(r=\sqrt{0.36+0.64}=1\). \(A=R_\varphi\) with \(\cos\varphi=0.6\).`, S`A rotation keeps lengths, so \(|\vec x_k|=|\vec x_0|\) for all \(k\).`],
    ans: S`\(|\lambda|=1\)` },
  { title: "A 3 × 3 matrix", q: S`Find the eigenvalues of \(A=${M([[0, -1, 0], [1, 0, 0], [0, 0, 2]])}\).`,
    fig: P(matPic([[0, -1, 0], [1, 0, 0], [0, 0, 2]], { label: "rotation block + stretch" }), 2),
    steps: [S`Expand along row 3: \(\det(A-\lambda I)=(2-\lambda)${D([["-\\lambda", -1], [1, "-\\lambda"]])}=(2-\lambda)(\lambda^2+1)\).`, S`Eigenvalues \(2\) (eigenvector \(\vec e_3\)) and \(\pm i\).`],
    ans: S`\(2,\ \pm i\)` },
  { title: "From trace and determinant", q: S`A real \(2\times2\) matrix has trace 4 and determinant 13. Find its eigenvalues and \(|\lambda|\).`,
    fig: P(matPic([["2a = 4"], ["a² + b² = 13"]], { label: "a ± bi" }), 2),
    steps: [S`\(\lambda^2-4\lambda+13=0\Rightarrow\lambda=2\pm3i\).`, S`\(|\lambda|=\sqrt{13}=\sqrt{\det A}\).`],
    ans: S`\(2\pm3i\), \(|\lambda|=\sqrt{13}\)` },
  { title: "Conjugate pairs", q: S`Prove that if \(A\) is real and \(A\vec v=\lambda\vec v\), then \(A\bar{\vec v}=\bar\lambda\bar{\vec v}\).`,
    steps: [S`Conjugate both sides: \(\overline{A\vec v}=\bar A\bar{\vec v}=A\bar{\vec v}\) since \(A\) is real.`, S`\(\overline{\lambda\vec v}=\bar\lambda\bar{\vec v}\). So \(A\bar{\vec v}=\bar\lambda\bar{\vec v}\).`],
    ans: S`conjugate the equation` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the eigenvalues of \(${M([[0, -2], [2, 0]])}\).`, ans: S`\(\pm2i\)` },
  { level: 1, q: S`Give \(r\) and \(\varphi\) for \(${M([[3, -3], [3, 3]])}\).`, ans: S`\(r=3\sqrt2\), \(\varphi=45^\circ\)`, fig: sqMap([[3, -3], [3, 3]], { w: 3.2 }) },
  { level: 1, q: S`A real matrix has eigenvalue \(4-i\). Name another.`, ans: S`\(4+i\)` },
  { level: 2, q: S`Find the eigenvalues of \(${M([[3, -2], [1, 1]])}\).`, ans: S`\(2\pm i\)` },
  { level: 2, q: S`Find an eigenvector of \(${M([[0, -1], [1, 0]])}\) for \(\lambda=-i\).`, ans: S`\((-i,1)\) (or a multiple)` },
  { level: 2, q: S`Factor \(${M([[1, -5], [1, -3]])}=PCP^{-1}\).`, ans: S`\(\lambda=-1\pm i\); \(P=${M([[2, -1], [1, 0]])}\), \(C=${M([[-1, -1], [1, -1]])}\)`, fig: P(matPic([[1, -5], [1, -3]], { label: "A" }), 1.6) },
  { level: 2, q: S`Do the orbits of \(${M([["0.9", "-0.2"], ["0.2", "0.9"]])}\) spiral in or out?`, ans: S`in (\(r=\sqrt{0.85}<1\))`, fig: orbit([[0.9, -0.2], [0.2, 0.9]], [3, 0], 12, { w: 3.2 }) },
  { level: 2, q: S`Compute \(C^4\) for \(C=${M([[1, 1], [-1, 1]])}\).`, ans: S`\(-4I\)` },
  { level: 3, space: 5, q: S`Show that \(\det A=|\lambda|^2\) for a real \(2\times2\) matrix with eigenvalues \(\lambda,\bar\lambda\).`, ans: S`\(\det A=\lambda\bar\lambda=|\lambda|^2\)` },
  { level: 3, space: 5, q: S`For which \(k\) does \(${M([[1, "k"], [1, 1]])}\) have non-real eigenvalues?`, ans: S`\(k<0\)` },
  { level: 3, space: 5, q: S`Prove that a real \(3\times3\) matrix has a real eigenvalue.`, ans: S`degree-3 polynomial with real coefficients has a real root` },
  { level: 3, space: 5, q: S`Find the smallest \(n\ge1\) with \(R_{40^\circ}^n=I\).`, ans: S`\(9\)`, fig: orbit([[Math.cos(0.698), -Math.sin(0.698)], [Math.sin(0.698), Math.cos(0.698)]], [3, 0], 9, { w: 3.2 }) },
  { level: 3, space: 5, q: S`Show that \(\operatorname{Re}\vec v\) and \(\operatorname{Im}\vec v\) are independent for an eigenvector \(\vec v\) of a non-real eigenvalue.`, ans: S`dependence would make \(\lambda\) real` },
];

export const WS = {
  code: "8.6",
  title: "Complex Eigenvalues",
  bigideas: S`Complex eigenvalues describe rotation. A real \(2\times2\) matrix with eigenvalues \(a\pm bi\) is similar to \(C=${M([["a", "-b"], ["b", "a"]])}=rR_\varphi\) via \(P=[\operatorname{Re}\vec v\ \operatorname{Im}\vec v]\), and its dynamical system spirals according to \(r=|\lambda|\).`,
  goals: ["Find complex eigenvalues and eigenvectors.", "Use conjugate pairs.", "Read \\(r\\) and \\(\\varphi\\) from \\(C\\).", "Factor \\(A=PCP^{-1}\\).", "Predict spirals."],
  curriculum: "Eigenvalues and eigenvectors — complex eigenvalues",
  vocab: [["Complex pair", "\\(a\\pm bi\\)"], ["Rotation–scaling", "\\(rR_\\varphi\\)"], ["\\(r\\)", "\\(|\\lambda|=\\sqrt{\\det A}\\)"], ["\\(P\\)", "\\([\\operatorname{Re}\\vec v\\ \\operatorname{Im}\\vec v]\\)"], ["Spiral", "orbit of \\(\\vec x_{k+1}=A\\vec x_k\\)"]],
  hook: S`A matrix that moves every direction still has eigenvalues — they just are not real. What do they mean?`,
  concepts: NOTES,
  summary: [
    S`Real matrices: complex eigenvalues in conjugate pairs.`,
    S`\(C=${M([["a", "-b"], ["b", "a"]])}=rR_\varphi\).`,
    S`\(A=PCP^{-1}\), \(P=[\operatorname{Re}\vec v\ \operatorname{Im}\vec v]\), \(\lambda=a-bi\).`,
    S`\(r<1\) in, \(r>1\) out, \(r=1\) closed.`,
    S`\(|\lambda|^2=\det A\).`,
  ],
  tips: ["Use lambda = a − bi for C = [a −b; b a].", "Check AP = PC.", "r is the square root of det A.", "One complex equation suffices for 2 × 2.", "Odd size ⇒ a real eigenvalue exists."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
