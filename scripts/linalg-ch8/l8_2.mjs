// LINALG1 8.2 — The Characteristic Equation: det(A − λI) = 0; the 2 × 2 shortcut λ² − (tr A)λ + det A; 3 × 3
// characteristic polynomials by cofactor expansion; algebraic multiplicity; complex roots; trace = sum and
// det = product of eigenvalues; similar matrices share the characteristic polynomial.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { eigLines } from "./ws/fig8.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "8.2 The Characteristic Equation";
export const ID = "11a10001-0001-4001-8001-000000000802";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const parab = (b, c, x0, x1) => { const pts = []; for (let x = x0; x <= x1 + 1e-9; x += 0.1) pts.push([x, x * x + b * x + c]); return pts; };
const polyFig = sfig(vecs2([], { xmin: -8, xmax: 5, ymin: -26, ymax: 10 }, { segs: [{ pts: parab(4, -21, -8, 5), color: "violet", w: 2.6 }], points: [{ x: 3, y: 0, color: "red", label: "λ = 3" }, { x: -7, y: 0, color: "red", label: "λ = −7" }], raw: true }),
  "the characteristic polynomial λ² + 4λ − 21 crosses zero at the eigenvalues");
const ex2Fig = sfig(eigLines([[5, -2], [4, -1]], [[[1, 1], 3], [[1, 2], 1]], { raw: true }), "eigenvalues 3 and 1 of [5 −2; 4 −1] with their eigen-lines");

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "The Characteristic Equation",
    overview: S`In 8.1 we tested one candidate \(\lambda\) at a time. To find all eigenvalues at once, use determinants: \(\lambda\) is an eigenvalue exactly when \(A-\lambda I\) is singular, that is when \(\det(A-\lambda I)=0\). Expanding this determinant gives a polynomial of degree \(n\) in \(\lambda\), the <strong>characteristic polynomial</strong>; its roots are the eigenvalues. For \(2\times2\) matrices it is simply \(\lambda^2-(\operatorname{tr}A)\lambda+\det A\). A repeated root has <strong>algebraic multiplicity</strong> greater than 1, and a polynomial with no real roots means no real eigenvalues.`,
    goals: [
      "form \\(\\det(A-\\lambda I)\\) and solve the characteristic equation;",
      "use \\(\\lambda^2-(\\operatorname{tr}A)\\lambda+\\det A\\) for \\(2\\times2\\) matrices;",
      "expand a \\(3\\times3\\) characteristic polynomial and factor it;",
      "state algebraic multiplicities and recognise complex roots;",
      "use \\(\\operatorname{tr}A=\\sum\\lambda_i\\), \\(\\det A=\\prod\\lambda_i\\) as checks.",
    ],
    outcomes: "eigenvalues and eigenvectors: the characteristic equation",
    prior: [
      [S`\(\det${M([["a", "b"], ["c", "d"]])}=\)?`, S`\(ad-bc\).`],
      [S`Factor \(\lambda^2-4\lambda+3\).`, S`\((\lambda-1)(\lambda-3)\).`],
      [S`\(\lambda\) is an eigenvalue of \(A\) exactly when \(A-\lambda I\) is …`, S`singular.`],
    ],
    words: [
      ["Characteristic polynomial", "\\(p(\\lambda)=\\det(A-\\lambda I)\\)", "degree \\(n\\)"],
      ["Characteristic equation", "\\(\\det(A-\\lambda I)=0\\)", "roots = eigenvalues"],
      ["Trace", "\\(\\operatorname{tr}A=a_{11}+\\dots+a_{nn}\\)", "sum of eigenvalues"],
      ["Algebraic multiplicity", "how often \\(\\lambda\\) is a root", "\\((\\lambda-5)^2\\): multiplicity 2"],
      ["Complex eigenvalues", "roots that are not real", "come in conjugate pairs"],
    ],
  }),

  section("📌 The characteristic equation", S`
  ${theorem("characteristic equation", S`\(\lambda\) is an eigenvalue of the \(n\times n\) matrix \(A\) \(\iff\det(A-\lambda I)=0\). The function \(p(\lambda)=\det(A-\lambda I)\) is a polynomial of degree \(n\).`, S`\(\lambda\) is an eigenvalue \(\iff A-\lambda I\) is singular \(\iff\det(A-\lambda I)=0\) (Invertible Matrix Theorem). Each term of the cofactor expansion is a product of \(n\) entries of \(A-\lambda I\), each of degree at most 1 in \(\lambda\); the product of the diagonal gives \((-\lambda)^n\).`)}
  ${theorem("2 × 2 shortcut", S`For \(A=${M([["a", "b"], ["c", "d"]])}\): \[\det(A-\lambda I)=${D([["a-\\lambda", "b"], ["c", "d-\\lambda"]])}=\lambda^2-(a+d)\lambda+(ad-bc)=\lambda^2-(\operatorname{tr}A)\lambda+\det A.\]`, S`\((a-\lambda)(d-\lambda)-bc=\lambda^2-(a+d)\lambda+ad-bc\).`)}
  ${polyFig}`),

  section("📌 Multiplicity, trace and determinant", S`
  ${definition("algebraic multiplicity", S`If \(p(\lambda)=(\lambda_1-\lambda)^{m_1}\cdots(\lambda_k-\lambda)^{m_k}\) (over the complex numbers), \(m_i\) is the <strong>algebraic multiplicity</strong> of \(\lambda_i\). The multiplicities add up to \(n\).`)}
  ${theorem("trace and determinant", S`Counting multiplicity (and complex roots), \(\lambda_1+\dots+\lambda_n=\operatorname{tr}A\) and \(\lambda_1\cdots\lambda_n=\det A\). Similar matrices have the same characteristic polynomial, hence the same eigenvalues.`, S`Put \(\lambda=0\): \(p(0)=\det A=\lambda_1\cdots\lambda_n\). The coefficient of \(\lambda^{n-1}\) comes only from the diagonal product and equals \((-1)^{n-1}\operatorname{tr}A=(-1)^{n-1}\sum\lambda_i\). For \(B=P^{-1}AP\): \(\det(B-\lambda I)=\det(P^{-1}(A-\lambda I)P)=\det(A-\lambda I)\).`)}
  ${keyIdea(S`Always check your eigenvalues: their sum must equal the trace and their product the determinant.`)}`),

  section("📌 Explore", S`<p>Set a \(2\times2\) matrix. The explorer draws the parabola \(p(\lambda)=\lambda^2-(\operatorname{tr}A)\lambda+\det A\) and marks its real roots — the eigenvalues. Make the discriminant negative and the roots leave the axis: the eigenvalues become complex.</p>`),
  widget("laCharPoly", { init: { a: 2, b: 3, c: 3, d: -6 } }),

  section("📌 Common mistakes", watchOut([
    "Use A − λI, not A − λ: subtract λ only on the diagonal.",
    "det(A − λI) is not (det A) − λ.",
    "Row reducing A first changes the eigenvalues — work with A − λI directly.",
    "Expand the determinant fully and keep common factors like (1 − λ) unexpanded: they give roots for free.",
    "A real matrix can have complex eigenvalues; they come in conjugate pairs.",
  ])),

  examples([
    ["A 2 × 2 characteristic equation", S`Find the eigenvalues of \(A=${M([[2, 3], [3, -6]])}\).`,
      [S`\[\det(A-\lambda I)=${D([["2-\\lambda", 3], [3, "-6-\\lambda"]])}=(2-\lambda)(-6-\lambda)-3\cdot3=(\lambda^2+4\lambda-12)-9=\lambda^2+4\lambda-21.\]`,
        S`\(\lambda^2+4\lambda-21=(\lambda+7)(\lambda-3)=0\): \(\lambda=3\) or \(\lambda=-7\).`,
        S`Check: sum \(3+(-7)=-4=\operatorname{tr}A=2+(-6)\) ✓; product \(-21=\det A=-12-9\) ✓.`],
      S`\(\lambda=3,\ -7\)`, polyFig],
    ["The trace–determinant shortcut", S`Find the eigenvalues and eigenvectors of \(A=${M([[5, -2], [4, -1]])}\).`,
      [S`\(\operatorname{tr}A=4\), \(\det A=-5+8=3\): \(p(\lambda)=\lambda^2-4\lambda+3=(\lambda-1)(\lambda-3)\).`,
        S`\(\lambda=3\): \(A-3I=${M([[2, -2], [4, -4]])}\xrightarrow{R_2\to R_2-2R_1}${M([[2, -2], [0, 0]])}\): \(\vec v_1=(1,1)\). \(\lambda=1\): \(A-I=${M([[4, -2], [4, -2]])}\xrightarrow{R_2\to R_2-R_1}${M([[4, -2], [0, 0]])}\): \(\vec v_2=(1,2)\).`,
        S`Check: \[A${cv(1, 1)}=${cv("5-2", "4-1")}=${cv(3, 3)}=3${cv(1, 1)},\qquad A${cv(1, 2)}=${cv("5-4", "4-2")}=${cv(1, 2)}.\]`],
      S`\(\lambda=3\): \((1,1)\); \(\lambda=1\): \((1,2)\)`, ex2Fig],
    ["No real eigenvalues", S`Show that \(A=${M([[1, -2], [1, 3]])}\) has no real eigenvalues, and find its complex ones.`,
      [S`\(\operatorname{tr}A=4\), \(\det A=3+2=5\): \(p(\lambda)=\lambda^2-4\lambda+5\).`,
        S`Discriminant \(16-20=-4<0\): no real roots. By the quadratic formula \(\lambda=\dfrac{4\pm\sqrt{-4}}2=2\pm i\).`,
        S`Check: \((2+i)+(2-i)=4=\operatorname{tr}A\) and \((2+i)(2-i)=4+1=5=\det A\) ✓. (8.6 interprets these.)`],
      S`\(\lambda=2\pm i\), no real eigenvalues`],
    ["A 3 × 3 characteristic polynomial", S`Find the eigenvalues of \(A=${M([[1, 1, 0], [1, 2, 1], [0, 1, 1]])}\).`,
      [S`Expand along row 1: \[\det(A-\lambda I)=${D([["1-\\lambda", 1, 0], [1, "2-\\lambda", 1], [0, 1, "1-\\lambda"]])}=(1-\lambda)${D([["2-\\lambda", 1], [1, "1-\\lambda"]])}-1\cdot${D([[1, 1], [0, "1-\\lambda"]])}+0.\]`,
        S`\(=(1-\lambda)\big[(2-\lambda)(1-\lambda)-1\big]-(1-\lambda)=(1-\lambda)\big[(2-\lambda)(1-\lambda)-2\big]=(1-\lambda)(\lambda^2-3\lambda)=(1-\lambda)\lambda(\lambda-3).\)`,
        S`Eigenvalues \(0,\ 1,\ 3\). Check: \(0+1+3=4=1+2+1=\operatorname{tr}A\); \(0\cdot1\cdot3=0\) and \(\det A=1(2-1)-1(1-0)+0=0\) ✓.`],
      S`\(\lambda=0,1,3\)`],
    ["A repeated eigenvalue", S`Find the eigenvalues and their algebraic multiplicities for \(A=${M([[5, 1, 0], [0, 5, 0], [2, 0, 3]])}\).`,
      [S`Column 3 has one nonzero entry, so expand along it: \[\det(A-\lambda I)=${D([["5-\\lambda", 1, 0], [0, "5-\\lambda", 0], [2, 0, "3-\\lambda"]])}=(3-\lambda)${D([["5-\\lambda", 1], [0, "5-\\lambda"]])}=(3-\lambda)(5-\lambda)^2.\]`,
        S`\(\lambda=5\) with algebraic multiplicity 2, \(\lambda=3\) with multiplicity 1.`,
        S`Check: \(5+5+3=13=\operatorname{tr}A\); \(5\cdot5\cdot3=75=\det A\) (expanding along column 3: \(3(25-0)=75\)) ✓.`],
      S`\(5\) (multiplicity 2), \(3\) (multiplicity 1)`],
  ]),

  practice([
    q("2 × 2", S`Find the larger eigenvalue of \(${M([[4, 1], [2, 3]])}\).`, num(5),
      "λ² − 7λ + 10.", [S`\((\lambda-2)(\lambda-5)\).`], S`\(5\)`),
    q("trace", S`A \(3\times3\) matrix has eigenvalues \(2,-1,4\). Find its trace.`, num(5),
      "Sum.", [S`\(2-1+4=5\).`], S`\(5\)`),
    q("det", S`A \(3\times3\) matrix has eigenvalues \(2,-1,4\). Find its determinant.`, num(-8),
      "Product.", [S`\(2(-1)(4)=-8\).`], S`\(-8\)`),
    q("complex", S`Does \(${M([[0, -1], [1, 0]])}\) have real eigenvalues?`, choice(["no", "yes"], 0),
      "λ² + 1.", [S`\(\lambda=\pm i\).`], S`no`),
    q("multiplicity", S`\(p(\lambda)=(2-\lambda)^3(7-\lambda)\). Find the algebraic multiplicity of 2.`, num(3),
      "The exponent.", [S`\((2-\lambda)^3\).`], S`\(3\)`),
  ]),

  ...hard([
    ["A parameter that creates an eigenvalue", S`For which \(k\) is \(5\) an eigenvalue of \(A=${M([[3, "k"], [1, 3]])}\)? Find the other eigenvalue and an eigenvector for each.`,
      [S`\(\det(A-5I)=${D([[-2, "k"], [1, -2]])}=4-k=0\iff k=4\).`,
        S`Then \(\operatorname{tr}A=6\), so the other eigenvalue is \(6-5=1\); check the product \(5\cdot1=5=\det A=9-4\) ✓.`,
        S`\(\lambda=5\): \(A-5I=${M([[-2, 4], [1, -2]])}\xrightarrow{R_2\to R_2+\frac12R_1}${M([[-2, 4], [0, 0]])}\): \((2,1)\). \(\lambda=1\): \(A-I=${M([[2, 4], [1, 2]])}\xrightarrow{R_2\to R_2-\frac12R_1}${M([[2, 4], [0, 0]])}\): \((-2,1)\). Check \(${M([[3, 4], [1, 3]])}${cv(2, 1)}=${cv(10, 5)}\) ✓.`],
      S`\(k=4\); eigenvalues \(5\) (\((2,1)\)) and \(1\) (\((-2,1)\))`],
    ["Why trace and determinant work", S`Prove that a \(2\times2\) matrix with eigenvalues \(\lambda_1,\lambda_2\) has \(\operatorname{tr}A=\lambda_1+\lambda_2\) and \(\det A=\lambda_1\lambda_2\), and that similar matrices have the same characteristic polynomial.`,
      [S`\(p(\lambda)=\lambda^2-(\operatorname{tr}A)\lambda+\det A\) has roots \(\lambda_1,\lambda_2\), so \(p(\lambda)=(\lambda-\lambda_1)(\lambda-\lambda_2)=\lambda^2-(\lambda_1+\lambda_2)\lambda+\lambda_1\lambda_2\). Compare coefficients.`,
        S`If \(B=P^{-1}AP\): \(B-\lambda I=P^{-1}AP-\lambda P^{-1}IP=P^{-1}(A-\lambda I)P\), so \(\det(B-\lambda I)=\tfrac1{\det P}\det(A-\lambda I)\det P=\det(A-\lambda I)\).`],
      S`compare coefficients of \((\lambda-\lambda_1)(\lambda-\lambda_2)\); \(\det(P^{-1}(A-\lambda I)P)=\det(A-\lambda I)\)`],
  ], [
    q("hard", S`Find the larger eigenvalue of \(${M([[0, 1], [-6, 5]])}\).`, num(3),
      "λ² − 5λ + 6.", [S`\((\lambda-2)(\lambda-3)\).`], S`\(3\)`),
    q("hard", S`\(A\) is \(2\times2\) with \(\operatorname{tr}A=7\) and \(\det A=10\). Find its smaller eigenvalue.`, num(2),
      "λ² − 7λ + 10.", [S`Roots 2 and 5.`], S`\(2\)`),
    q("hard", S`For which \(k\) is \(0\) an eigenvalue of \(${M([[1, "k"], [2, 4]])}\)?`, num(2),
      "det = 0.", [S`\(4-2k=0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find all eigenvalues?", "Solve det(A − λI) = 0."],
      ["What is the 2 × 2 shortcut?", "λ² − (tr A)λ + det A = 0."],
      ["What is algebraic multiplicity?", "The number of times λ appears as a root of the characteristic polynomial."],
      ["How can I check eigenvalues?", "Sum = trace, product = determinant."],
      ["Can a real matrix have complex eigenvalues?", "Yes, in conjugate pairs, e.g. rotations."],
    ],
    summary: [
      "λ eigenvalue ⇔ det(A − λI) = 0.",
      "2 × 2: λ² − (tr A)λ + det A.",
      "Degree n, so n eigenvalues counting multiplicity.",
      "Σλ = tr A, Πλ = det A.",
      "Similar matrices: same characteristic polynomial.",
    ],
    next: "8.3 finds the eigenspace of each eigenvalue and compares its dimension with the multiplicity.",
  }),
];
