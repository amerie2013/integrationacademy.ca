// LINALG1 9.7 — Least-Squares Problems: the least-squares solution of an inconsistent Ax = b via the normal equations
// AᵀAx̂ = Aᵀb (row reduced in full), the least-squares error |b − Ax̂|, fitting lines and parabolas to data, and the
// QR route Rx̂ = Qᵀb — every product and reduction written out.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, frac, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { autoPlan } from "./bank/la.mjs";
import { lsqLine, projPlane } from "./ws/fig9.mjs";

export const TITLE = "9.7 Least-Squares Problems";
export const ID = "11a10001-0001-4001-8001-000000000907";

const S = String.raw;
const M = (m) => am(m, false);
const T = (v) => M([v]);
const lineFig = sfig(lsqLine([[0, 1], [1, 2], [2, 2], [3, 4]], 0.9, 0.9, { raw: true }), "the least-squares line y = 0.9 + 0.9x minimises the sum of the squared vertical residuals");
const line3Fig = sfig(lsqLine([[0, 1], [1, 2], [2, 4]], 5 / 6, 1.5, { raw: true }), "y = 5/6 + 1.5x through three points that are not collinear");
const geoFig = sfig(projPlane([1, 1, 2], [2, -1, 1], [3, 1, 1], [2, 0, 2], { raw: true, names: ["b", "Ax̂"] }), "Ax̂ is the projection of b onto Col A; the error b − Ax̂ is perpendicular to Col A");
const N3 = [[4, 2, 6, 9], [2, 6, 8, 8], [6, 8, 18, 24]];

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Least-Squares Problems",
    overview: S`Real data are noisy, so a system \(A\vec x=\vec b\) with more equations than unknowns is usually inconsistent: no line passes exactly through all the measured points. Instead of giving up, we look for the \(\hat x\) that makes \(A\hat x\) as close as possible to \(\vec b\). By 9.3–9.4, the closest vector of \(\operatorname{Col}A\) to \(\vec b\) is its projection, so \(\hat x\) solves the normal equations \(A^TA\hat x=A^T\vec b\). This <strong>least-squares solution</strong> is behind regression lines, curve fitting and countless estimation problems.`,
    goals: [
      "define a least-squares solution and the least-squares error;",
      "solve \\(A^TA\\hat x=A^T\\vec b\\) by row reduction and check \\(A^T(\\vec b-A\\hat x)=\\vec 0\\);",
      "fit a line \\(y=\\beta_0+\\beta_1x\\) and a parabola to data;",
      "compute the residuals and the sum of squared errors;",
      "use QR: \\(R\\hat x=Q^T\\vec b\\).",
    ],
    outcomes: "orthogonality: least-squares problems",
    prior: [
      [S`The normal equations for projecting \(\vec y\) onto \(\operatorname{Col}A\)?`, S`\(A^TA\hat x=A^T\vec y\).`],
      [S`When is \(A^TA\) invertible?`, S`When the columns of \(A\) are independent.`],
      [S`Solve \(${M([[3, 3], [3, 5]])}\vec x=${cv(7, 10)}\).`, S`\(\vec x=(\tfrac56,\tfrac32)\).`],
    ],
    words: [
      ["Least-squares solution \\(\\hat x\\)", "minimises \\(|\\vec b-A\\vec x|\\)", "solves \\(A^TA\\hat x=A^T\\vec b\\)"],
      ["Residual / error", "\\(\\vec e=\\vec b-A\\hat x\\)", "perpendicular to \\(\\operatorname{Col}A\\)"],
      ["Least-squares error", "\\(|\\vec b-A\\hat x|\\)", "its square is the SSE"],
      ["Design matrix", "rows \\((1,x_i)\\) for a line", "\\((1,x_i,x_i^2)\\) for a parabola"],
      ["Observation vector", "\\(\\vec b=(y_1,\\dots,y_m)\\)", "the measured values"],
    ],
  }),

  section("📌 Least-squares solutions", S`
  ${definition("least-squares solution", S`For \(A\) (\(m\times n\)) and \(\vec b\in\mathbb R^m\), \(\hat x\) is a <strong>least-squares solution</strong> of \(A\vec x=\vec b\) if \(|\vec b-A\hat x|\le|\vec b-A\vec x|\) for every \(\vec x\in\mathbb R^n\). The number \(|\vec b-A\hat x|\) is the <strong>least-squares error</strong>.`)}
  ${theorem("normal equations", S`The least-squares solutions of \(A\vec x=\vec b\) are exactly the solutions of \(A^TA\vec x=A^T\vec b\). If the columns of \(A\) are independent, there is exactly one: \(\hat x=(A^TA)^{-1}A^T\vec b\).`, S`\(A\hat x\) must be the closest point of \(\operatorname{Col}A\) to \(\vec b\), i.e. the projection \(\hat b\) (9.3). That happens exactly when \(\vec b-A\hat x\perp\operatorname{Col}A\), i.e. \(A^T(\vec b-A\hat x)=\vec 0\). Independent columns make \(A^TA\) invertible (9.4).`)}
  ${geoFig}`),

  section("📌 Fitting curves to data", S`
  <p>To fit \(y=\beta_0+\beta_1x\) to points \((x_1,y_1),\dots,(x_m,y_m)\), write the wished-for equations \(\beta_0+\beta_1x_i=y_i\) as \(X\vec\beta=\vec y\) with design matrix \(X=${M([[1, "x_1"], [1, "\\vdots"], [1, "x_m"]])}\). The least-squares line solves \(X^TX\vec\beta=X^T\vec y\) and minimises \(\sum(y_i-\beta_0-\beta_1x_i)^2\), the sum of squared vertical residuals. For a parabola use rows \((1,x_i,x_i^2)\).</p>
  ${keyIdea(S`Always finish with the check \(A^T\vec e=\vec 0\) for \(\vec e=\vec b-A\hat x\). For a line fit, its first entry says the residuals add up to 0.`)}
  ${theorem("least squares by QR", S`If \(A=QR\), the least-squares solution is the solution of \(R\hat x=Q^T\vec b\).`, S`\(A^TA=R^TR\) and \(A^T\vec b=R^TQ^T\vec b\); since \(R^T\) is invertible, \(R^TR\hat x=R^TQ^T\vec b\iff R\hat x=Q^T\vec b\).`)}
  ${lineFig}`),

  section("📌 Explore", S`<p>Pick a data set. Drag the intercept and slope to fit a line by eye and watch the sum of squared residuals; then reveal the least-squares line computed from the normal equations and compare the two totals.</p>`),
  widget("laLsq", { init: { set: "a" } }),

  section("📌 Common mistakes", watchOut([
    "Do not try to row reduce the inconsistent Ax = b itself — form AᵀA and Aᵀb first.",
    "Least squares minimises VERTICAL distances for a line fit, not perpendicular distances.",
    "The design matrix needs a column of 1s for the intercept.",
    "x̂ is unique only when the columns of A are independent.",
    "The least-squares error is |b − Ax̂|, not |x̂|.",
  ])),

  examples([
    ["An inconsistent 3 × 2 system", S`Find the least-squares solution and error of \(A\vec x=\vec b\), \(A=${M([[1, 2], [1, -1], [2, 1]])}\), \(\vec b=(3,1,1)\).`,
      [S`\[A^TA=${M([[1, 1, 2], [2, -1, 1]])}${M([[1, 2], [1, -1], [2, 1]])}=${M([["1+1+4", "2-1+2"], ["2-1+2", "4+1+1"]])}=${M([[6, 3], [3, 6]])},\quad A^T\vec b=${cv("3+1+2", "6-1+1")}=${cv(6, 6)}.\]`,
        ...steps([[6, 3, 6], [3, 6, 6]], [[S`Bring the smaller pivot up.`, ["R1<->R2"]], [S`Clear column 1.`, ["R2-2R1"]], [S`Scale the pivot.`, ["R2*-1/9"]], [S`Clear column 2 above.`, ["R1-6R2"]], [S`Scale row 1.`, ["R1*1/3"]]], { intro: S`Solve \([\,A^TA\mid A^T\vec b\,]\)` }).steps,
        S`\(\hat x=(\tfrac23,\tfrac23)\). \(A\hat x=${M([[1, 2], [1, -1], [2, 1]])}${cv("\\tfrac23", "\\tfrac23")}=${cv(2, 0, 2)}\), \(\vec e=\vec b-A\hat x=${cv(1, 1, -1)}\). Check \(A^T\vec e=${cv("1+1-2", "2-1-1")}=\vec 0\) ✓. Error \(|\vec e|=\sqrt3\).`],
      S`\(\hat x=(\tfrac23,\tfrac23)\), error \(\sqrt3\)`, geoFig],
    ["A line through three points", S`Find the least-squares line through \((0,1),(1,2),(2,4)\).`,
      [S`\(X=${M([[1, 0], [1, 1], [1, 2]])}\), \(\vec y=${cv(1, 2, 4)}\). \(X^TX=${M([[3, 3], [3, 5]])}\), \(X^T\vec y=${cv("1+2+4", "0+2+8")}=${cv(7, 10)}\).`,
        S`\[${am([[3, 3, 7], [3, 5, 10]])}\xrightarrow{R_2\to R_2-R_1}${am([[3, 3, 7], [0, 2, 3]])}:\ \beta_1=\tfrac32,\ 3\beta_0=7-\tfrac92=\tfrac52,\ \beta_0=\tfrac56.\]`,
        S`\(y=\tfrac56+\tfrac32x\). Residuals \(\vec e=\vec y-X\vec\beta=${cv("1-\\tfrac56", "2-\\tfrac73", "4-\\tfrac{23}6")}=${cv("\\tfrac16", "-\\tfrac13", "\\tfrac16")}\); \(X^T\vec e=${cv("\\tfrac16-\\tfrac13+\\tfrac16", "0-\\tfrac13+\\tfrac13")}=\vec 0\) ✓.`],
      S`\(y=\tfrac56+\tfrac32x\)`, line3Fig],
    ["A line through four points", S`Fit \(y=\beta_0+\beta_1x\) to \((0,1),(1,2),(2,2),(3,4)\) and find the sum of squared residuals.`,
      [S`\(X^TX=${M([[1, 1, 1, 1], [0, 1, 2, 3]])}${M([[1, 0], [1, 1], [1, 2], [1, 3]])}=${M([[4, 6], [6, 14]])}\), \(X^T\vec y=${cv("1+2+2+4", "0+2+4+12")}=${cv(9, 18)}\).`,
        S`\[${am([[4, 6, 9], [6, 14, 18]])}\xrightarrow{R_2\to R_2-\frac32R_1}${am([[4, 6, 9], [0, 5, "\\tfrac92"]])}:\ \beta_1=0.9,\ 4\beta_0=9-5.4,\ \beta_0=0.9.\]`,
        S`Predictions \((0.9,1.8,2.7,3.6)\), residuals \((0.1,0.2,-0.7,0.4)\); SSE \(=0.01+0.04+0.49+0.16=0.70\). Check \(X^T\vec e=(0.1+0.2-0.7+0.4,\ 0+0.2-1.4+1.2)=(0,0)\) ✓.`],
      S`\(y=0.9+0.9x\), SSE \(=0.70\)`, lineFig],
    ["Least squares through QR", S`Use \(A=${M([[1, 3], [2, 3], [2, 0]])}=QR\) with \(Q=\tfrac13${M([[1, 2], [2, 1], [2, -2]])}\), \(R=${M([[3, 3], [0, 3]])}\) (9.6) to solve \(A\vec x=(3,0,3)\) in the least-squares sense.`,
      [S`\[Q^T\vec b=\tfrac13${M([[1, 2, 2], [2, 1, -2]])}${cv(3, 0, 3)}=\tfrac13${cv("3+0+6", "6+0-6")}=${cv(3, 0)}.\]`,
        S`\(R\hat x=Q^T\vec b\): \(3\hat x_2=0\Rightarrow\hat x_2=0\); \(3\hat x_1+0=3\Rightarrow\hat x_1=1\).`,
        S`Check with the normal equations: \(A^TA=${M([[9, 9], [9, 18]])}\), \(A^T\vec b=${cv(9, 9)}\), and \(${M([[9, 9], [9, 18]])}${cv(1, 0)}=${cv(9, 9)}\) ✓. Error \(\vec b-A\hat x=(2,-2,1)\), length 3.`],
      S`\(\hat x=(1,0)\), error 3`],
    ["When is the least-squares solution not unique?", S`Find all least-squares solutions of \(${M([[1, 2], [1, 2], [1, 2]])}\vec x=(1,2,6)\).`,
      [S`\(A^TA=${M([[3, 6], [6, 12]])}\), \(A^T\vec b=${cv(9, 18)}\): \(${am([[3, 6, 9], [6, 12, 18]])}\xrightarrow{R_2\to R_2-2R_1}${am([[3, 6, 9], [0, 0, 0]])}\).`,
        S`\(x_1+2x_2=3\): infinitely many solutions \(\hat x=(3,0)+t(-2,1)\) — the columns are dependent.`,
        S`All give the same \(A\hat x=(3,3,3)\), the projection of \(\vec b\) onto the line \(\operatorname{Col}A\).`],
      S`\(\hat x=(3,0)+t(-2,1)\), all with \(A\hat x=(3,3,3)\)`],
  ]),

  practice([
    q("normal", S`For \(A=${M([[1, 0], [1, 1], [1, 2]])}\), find the \((2,2)\) entry of \(A^TA\).`, num(5),
      "0 + 1 + 4.", [S`Column 2 dotted with itself.`], S`\(5\)`),
    q("Aᵀb", S`Same \(A\), \(\vec b=(2,1,3)\). Find the second entry of \(A^T\vec b\).`, num(7),
      "0 + 1 + 6.", [S`Column 2 · \(\vec b\).`], S`\(7\)`),
    q("slope", S`The least-squares line through \((0,0),(1,1),(2,3)\) has slope:`, frac(3, 2),
      "Normal equations.", [S`\(X^TX=${M([[3, 3], [3, 5]])}\), \(X^T\vec y=(4,7)\): \(2\beta_1=3\).`], S`\(\tfrac32\)`),
    q("residuals", S`For any least-squares line (with intercept), the residuals sum to:`, num(0),
      "First row of Xᵀe = 0.", [S`The column of 1s is orthogonal to \(\vec e\).`], S`\(0\)`),
    q("unique", S`\(A\) has independent columns. The least-squares solution is`, choice(["unique", "never unique", "always zero", "undefined"], 0),
      "AᵀA invertible.", [S`\(\hat x=(A^TA)^{-1}A^T\vec b\).`], "unique"),
  ]),

  ...hard([
    ["Fitting a parabola", S`Fit \(y=\beta_0+\beta_1x+\beta_2x^2\) to \((-1,3),(0,0),(1,1),(2,5)\).`,
      [S`\(X=${M([[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]])}\): \(X^TX=${M([[4, 2, 6], [2, 6, 8], [6, 8, 18]])}\), \(X^T\vec y=${cv("3+0+1+5", "-3+0+1+10", "3+0+1+20")}=${cv(9, 8, 24)}\).`,
        ...steps(N3, autoPlan(N3, { cols: 3 }), { intro: S`Solve the normal equations` }).steps,
        S`\(\vec\beta=(0.15,-1.05,1.75)\): \(y=0.15-1.05x+1.75x^2\). Predictions \((2.95,0.15,0.85,5.05)\), residuals \((0.05,-0.15,0.15,-0.05)\), SSE \(=0.05\).`],
      S`\(y=0.15-1.05x+1.75x^2\)`],
    ["Why x̂ is the best", S`Prove that a solution \(\hat x\) of \(A^TA\hat x=A^T\vec b\) satisfies \(|\vec b-A\hat x|\le|\vec b-A\vec x|\) for every \(\vec x\).`,
      [S`Write \(\vec b-A\vec x=(\vec b-A\hat x)+A(\hat x-\vec x)\). The first part \(\vec e\) satisfies \(A^T\vec e=\vec 0\), so it is orthogonal to \(A(\hat x-\vec x)\in\operatorname{Col}A\): \(\big(A(\hat x-\vec x)\big)^T\vec e=(\hat x-\vec x)^TA^T\vec e=0\).`,
        S`Pythagoras: \(|\vec b-A\vec x|^2=|\vec e|^2+|A(\hat x-\vec x)|^2\ge|\vec e|^2\).`],
      S`orthogonal split and Pythagoras`],
  ], [
    q("hard", S`Least-squares line through \((1,1),(2,2),(3,2)\): find the slope. (Decimal.)`, num(0.5),
      "Normal equations.", [S`\(X^TX=${M([[3, 6], [6, 14]])}\), \(X^T\vec y=(5,11)\): \(\beta_1=\tfrac{3\cdot11-6\cdot5}{3\cdot14-36}=\tfrac36\).`], S`\(0.5\)`),
    q("hard", S`Same data: find the intercept. (Decimal.)`, num(0.6667),
      "β₀ = (5 − 6β₁)/3.", [S`\(\tfrac{5-3}{3}\).`], S`\(\tfrac23\)`),
    q("hard", S`\(\vec b\) lies in \(\operatorname{Col}A\). The least-squares error is`, num(0),
      "Exact solution exists.", [S`\(A\hat x=\vec b\).`], S`\(0\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a least-squares solution?", "An x̂ minimising |b − Ax|; it solves AᵀAx̂ = Aᵀb."],
      ["Why the normal equations?", "The error must be perpendicular to Col A."],
      ["How do I fit a line?", "Design matrix with rows (1, xᵢ); solve XᵀXβ = Xᵀy."],
      ["How can QR help?", "Solve Rx̂ = Qᵀb — triangular and numerically stable."],
      ["When is x̂ unique?", "When the columns of A are independent."],
    ],
    summary: [
      "AᵀAx̂ = Aᵀb.",
      "Ax̂ = projection of b onto Col A.",
      "Error e = b − Ax̂ ⟂ Col A; check Aᵀe = 0.",
      "Line/parabola fits via design matrices.",
      "QR: Rx̂ = Qᵀb.",
    ],
    next: "This completes Linear Algebra I.",
  }),
];
