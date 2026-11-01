// LINALG1 2.6 — Homogeneous Systems and the Structure of Solutions: homogeneous systems, the trivial solution,
// when nontrivial solutions exist (rank < n, in particular m < n), the solution set as all combinations of
// spanning vectors (closed under addition and scaling), and every solution of a non-homogeneous system as one
// particular solution plus a homogeneous solution.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, dir, am, sys, steps, cv } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "2.6 Homogeneous Systems and the Structure of Solutions";
export const ID = "11a10001-0001-4001-8001-000000000206";

const S = String.raw;
const D = [7, -3, 1], P = [-3, 3, 0];
const twoLines = vfig(scene3(4, { segs: [line3([0, 0, 0], D, -0.55, 0.55, "violet", 2.6, true), line3(P, D, -0.4, 0.75, "red", 2.8)], arrows: [a3([0, 0, 0], P, { color: "amber", vl: "p", off: 14 }), a3([0, 0, 0], [3.5, -1.5, 0.5], { color: "green", w: 2.2, vl: "h", off: -14 })], points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "dashed violet: solutions of Ax = 0; red: solutions of Ax = b, the same line shifted by p");

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Homogeneous Systems and the Structure of Solutions",
    overview: S`A system is <strong>homogeneous</strong> when every constant term is 0. Such a system always has the solution \(\vec x=\vec 0\), so the only question is whether it has others. Its solution set has a beautiful structure: sums and multiples of solutions are again solutions, so the set is a line, a plane or a higher-dimensional "flat" through the origin, described by a few <strong>spanning vectors</strong>. Better still, homogeneous systems explain <em>all</em> systems: every solution of \(A\vec x=\vec b\) is one particular solution plus a solution of \(A\vec x=\vec 0\). This idea returns throughout linear algebra — and in differential equations.`,
    goals: [
      "recognise homogeneous systems and their trivial solution;",
      "decide when a homogeneous system has nontrivial solutions, using rank;",
      "write the solution set of a homogeneous system as all combinations of spanning vectors;",
      "prove that solutions of a homogeneous system are closed under addition and scalar multiplication;",
      "write every solution of a non-homogeneous system as a particular solution plus a homogeneous one.",
    ],
    outcomes: "systems of linear equations: homogeneous systems and the structure of the solution set",
    prior: [
      [S`Write \(\vec x=(3-2t,\ t,\ 1+t)\) in vector form.`, S`\((3,0,1)+t(-2,1,1)\).`],
      [S`How many free parameters when \(\operatorname{rank}A=2\) and \(n=5\)?`, S`\(5-2=3\) (2.5).`],
      [S`What is the span of one nonzero vector \(\vec v\) in \(\mathbb R^3\)?`, S`The line \(\{t\vec v\}\) through the origin (Worksheet 1.1).`],
    ],
    words: [
      ["Homogeneous system", "every constant term is 0: \\([A\\mid\\vec 0]\\)", "\\(x_1-x_2=0\\)"],
      ["Trivial solution", "\\(\\vec x=\\vec 0\\)", "always solves a homogeneous system"],
      ["Nontrivial solution", "a solution other than \\(\\vec 0\\)", "\\((1,1)\\) for \\(x_1-x_2=0\\)"],
      ["Particular solution", "any one solution \\(\\vec p\\) of \\(A\\vec x=\\vec b\\)", "found by setting free variables to 0"],
      ["Spanning vectors", "vectors whose combinations give every solution", "one per free variable"],
    ],
  }),

  section("📌 Homogeneous systems", S`
  ${definition("homogeneous system", S`A linear system is <strong>homogeneous</strong> if all its constant terms are 0: \(a_{i1}x_1+\dots+a_{in}x_n=0\) for every \(i\). We write it as \(A\vec x=\vec 0\). Its <strong>trivial solution</strong> is \(\vec x=\vec 0\).`)}
  <p>Because the constant column is all zeros and stays all zeros under row operations, we usually row reduce \(A\) alone. A homogeneous system is <strong>always consistent</strong>, so by the rank theorem it has either only the trivial solution or infinitely many.</p>
  ${theorem("nontrivial solutions", S`\(A\vec x=\vec 0\) has nontrivial solutions exactly when \(\operatorname{rank}A\lt n\). In particular, a homogeneous system with more unknowns than equations (\(m\lt n\)) always has nontrivial solutions.`, S`The system is consistent, so it has a unique solution (necessarily \(\vec 0\)) exactly when \(\operatorname{rank}A=n\), and infinitely many when \(\operatorname{rank}A\lt n\). If \(m\lt n\) then \(\operatorname{rank}A\le m\lt n\).`)}`),

  section("📌 The solution set is closed under addition and scaling", S`
  <p>Row reduce \(A\), give each free variable a parameter, and write the solution in vector form. For a homogeneous system there is no constant vector, only directions:</p>
  \[\vec x=t_1\vec v_1+t_2\vec v_2+\dots+t_k\vec v_k,\qquad k=n-\operatorname{rank}A.\]
  <p>The solution set is the <strong>span</strong> of \(\vec v_1,\dots,\vec v_k\): a line through \(\vec 0\) (\(k=1\)), a plane through \(\vec 0\) (\(k=2\)), and so on.</p>
  ${theorem("closure", S`If \(\vec u\) and \(\vec v\) solve \(A\vec x=\vec 0\), then so does \(s\vec u+t\vec v\) for all scalars \(s,t\).`, S`Take any equation \(\vec a\cdot\vec x=0\). Then \(\vec a\cdot(s\vec u+t\vec v)=s(\vec a\cdot\vec u)+t(\vec a\cdot\vec v)=s\cdot0+t\cdot0=0\). This holds for every equation.`)}
  ${keyIdea(S`Solution sets of homogeneous systems pass through the origin and are closed under linear combinations. In Chapter 5 such sets are called <em>subspaces</em>.`)}`),

  section("📌 Every solution = particular + homogeneous", S`
  ${theorem("structure of solutions", S`Let \(\vec p\) be one solution of \(A\vec x=\vec b\). Then \(\vec x\) is a solution of \(A\vec x=\vec b\) if and only if \(\vec x=\vec p+\vec h\) for some solution \(\vec h\) of \(A\vec x=\vec 0\).`, S`For each equation \(\vec a\cdot\vec x=b_i\): if \(\vec x\) is a solution, \(\vec a\cdot(\vec x-\vec p)=b_i-b_i=0\), so \(\vec h=\vec x-\vec p\) solves the homogeneous system. Conversely, if \(\vec a\cdot\vec h=0\) for every equation, then \(\vec a\cdot(\vec p+\vec h)=b_i+0=b_i\).`)}
  <p>Geometrically the solution set of \(A\vec x=\vec b\) is the solution set of \(A\vec x=\vec 0\) <strong>shifted</strong> by \(\vec p\) — parallel to it, but (when \(\vec b\ne\vec 0\)) not through the origin:</p>
  <div style="text-align:center;">${twoLines}</div>
  <p>That is why the general solution from Gauss–Jordan always looks like \(\vec p+t_1\vec v_1+\dots\): the constant vector is a particular solution and the rest is the homogeneous part.</p>`),

  section("📌 Explore", S`<p>The dashed violet line is the homogeneous equation \(ax_1+bx_2=0\); the red line is \(ax_1+bx_2=c\). Move \(c\): the red line slides parallel to the violet one. Move \(t\): the green point \(\vec p+t\vec v\) runs along the red line, always the amber particular solution plus a homogeneous solution. Set \(c=0\) and the two lines coincide.</p>`),
  widget("laSolSet", { init: { a: 1, b: -2 } }),

  section("📌 Common mistakes", watchOut([
    "A homogeneous system is never inconsistent — the zero vector always works.",
    "'Infinitely many solutions' for Ax = 0 means nontrivial ones exist; it does not mean every vector is a solution.",
    "Solutions of Ax = b with b ≠ 0 are NOT closed under addition: A(p + q) = 2b.",
    "The particular solution is not unique — any one solution works, but the homogeneous part is the same.",
    "Square systems can still have nontrivial solutions: it is rank A < n that matters, not m < n.",
  ])),

  examples([
    ["A line of solutions", S`Solve the homogeneous system \[${sys([[1, 2, -1, 0], [2, 5, 1, 0]])}\]`,
      [...steps([[1, 2, -1], [2, 5, 1]], [
        [S`Clear column 1 below the pivot.`, ["R2-2R1"]],
        [S`Clear column 2 above the pivot of row 2. This is the RREF.`, ["R1-2R2"]],
      ], { bar: false, intro: "The constants are all 0 and stay 0, so reduce the coefficient matrix alone" }).steps, S`Column 3 has no pivot, so \(x_3=t\) is free. Row 1: \(x_1-7x_3=0\), so \(x_1=7t\). Row 2: \(x_2+3x_3=0\), so \(x_2=-3t\).`, S`So \(\vec x=(7t,-3t,t)=t(7,-3,1)\). Check \(t=1\): \(7-6-1=0\) ✓ and \(14-15+1=0\) ✓.`],
      S`\(\vec x=t(7,-3,1)\): the line through \(\vec 0\) spanned by \((7,-3,1)\)`],
    ["A plane of solutions in ℝ⁴", S`Find spanning vectors for the solutions of \(x_1-x_2+2x_3+x_4=0,\ 2x_1-2x_2+5x_3+4x_4=0\).`,
      [...steps([[1, -1, 2, 1], [2, -2, 5, 4]], [
        [S`Clear column 1 below the pivot.`, ["R2-2R1"]],
        [S`Column 2 has no pivot; the second pivot is in column 3. Clear above it to reach the RREF.`, ["R1-2R2"]],
      ], { bar: false, intro: "Reduce the coefficient matrix (the zero constants never change)" }).steps, S`Pivots in columns 1 and 3, so \(x_2=s\) and \(x_4=t\) are free. Row 1: \(x_1-x_2-3x_4=0\), so \(x_1=s+3t\). Row 2: \(x_3+2x_4=0\), so \(x_3=-2t\).`, S`\(\vec x=(s+3t,\ s,\ -2t,\ t)=s(1,1,0,0)+t(3,0,-2,1)\). Check \((3,0,-2,1)\) in both equations: \(3-0-4+1=0\) ✓, \(6-0-10+4=0\) ✓.`],
      S`spanning vectors \((1,1,0,0)\) and \((3,0,-2,1)\); \(n-\operatorname{rank}A=4-2=2\)`],
    ["Only the trivial solution", S`Does \(x_1+x_2=0,\ x_2+x_3=0,\ x_1+x_3=0\) have nontrivial solutions?`,
      [...steps([[1, 1, 0], [0, 1, 1], [1, 0, 1]], [
        [S`Clear column 1 below the pivot.`, ["R3-R1"]],
        [S`Clear column 2 below the pivot of row 2.`, ["R3+R2"]],
      ], { bar: false, intro: "Reduce the coefficient matrix" }).steps, S`There are three pivots, so \(\operatorname{rank}A=3=n\): no free variables. Back substitution gives \(2x_3=0\), then \(x_2=0\), then \(x_1=0\) — only the trivial solution.`],
      S`no — only \(\vec x=\vec 0\)`],
    ["Particular plus homogeneous", S`Solve \(x_1+2x_2-x_3=3,\ 2x_1+5x_2+x_3=9\) and compare with the first example.`,
      [...steps([[1, 2, -1, 3], [2, 5, 1, 9]], [
        [S`The coefficient matrix is the one of Example 1, so use the same operations; now the constant column changes too.`, ["R2-2R1"]],
        [S`Clear above the pivot of row 2: this is the RREF.`, ["R1-2R2"]],
      ]).steps, S`\(x_3=t\) is free. Row 1: \(x_1-7x_3=-3\), so \(x_1=-3+7t\). Row 2: \(x_2+3x_3=3\), so \(x_2=3-3t\). Hence \(\vec x=(-3,3,0)+t(7,-3,1)\).`, S`\(\vec p=(-3,3,0)\) is a particular solution (\(-3+6=3\) ✓, \(-6+15=9\) ✓) and \(t(7,-3,1)\) is exactly the homogeneous solution of the first example.`],
      S`\(\vec x=(-3,3,0)+t(7,-3,1)\): the homogeneous line shifted by \(\vec p\)`,
      twoLines],
    ["Why b ≠ 0 breaks closure", S`Show that the solutions of \(x_1+x_2=2\) are not closed under addition, and explain in general.`,
      [S`<strong>Matrix form.</strong> \(x_1+x_2=2\) is \(A\vec x=b\) with \(A=${am([[1, 1]], false)}\) and \(b=${am([[2]], false)}\).`,
        S`\(\vec p=${cv(2, 0)}\) and \(\vec q=${cv(0, 2)}\) are solutions: \(A\vec p=${am([["2+0"]], false)}=${am([[2]], false)}\), \(A\vec q=${am([["0+2"]], false)}=${am([[2]], false)}\). But \[A(\vec p+\vec q)=${am([[1, 1]], false)}${cv(2, 2)}=${am([["2+2"]], false)}=${am([[4]], false)}\ne${am([[2]], false)}.\]`,
        S`In general, if \(A\vec p=\vec b\) and \(A\vec q=\vec b\), then \(A(\vec p+\vec q)=A\vec p+A\vec q=2\vec b\), which equals \(\vec b\) only when \(\vec b=\vec 0\).`],
      S`closure under addition holds only for homogeneous systems`,
      vfig({ view: { xmin: -1, xmax: 3.4, ymin: -1, ymax: 3.4 }, step: 1, width: 280, segs: [{ pts: [[-1, 3], [3, -1]], color: "red", w: 2.6 }, { pts: [[-1, 1], [1, -1]], color: "violet", w: 2.2, dash: true }], arrows: [{ from: [0, 0], to: [2, 0], color: "blue", w: 2 }, { from: [0, 0], to: [0, 2], color: "blue", w: 2 }, { from: [0, 0], to: [2, 2], color: "green", w: 2.4 }], points: [{ x: 2, y: 2, label: "(2, 2) not on the line", color: "green", dx: -8, anchor: "end" }] })],
  ]),

  practice([
    q("consistent?", "Is a homogeneous system always consistent?", choice(["yes — x = 0 is always a solution", "no — it may have no solution", "only if it is square", "only if rank A = n"], 0),
      "Try x = 0.", ["Every equation reads 0 = 0 at x = 0."], "yes"),
    q("wide", "A homogeneous system has 3 equations in 5 unknowns. Does it have nontrivial solutions?", choice(["always", "never", "only if rank A = 3", "only if the equations are different"], 0),
      "rank A ≤ 3 < 5.", ["There is at least one free variable."], "always"),
    q("spanning vector", S`Give a nonzero vector that spans the solutions of \(x_1-3x_2=0\) in \(\mathbb R^2\).`, dir(3, 1),
      "Let x₂ = t.", [S`\(x_1=3t\), so \(\vec x=t(3,1)\).`], S`\((3,1)\) (or any nonzero multiple)`),
    q("parameters", S`A homogeneous system has \(n=4\) unknowns and \(\operatorname{rank}A=2\). How many parameters does its general solution have?`, num(2),
      "n − rank A.", [S`\(4-2\).`], S`\(2\)`),
    q("another solution", S`\(\vec p=(1,2)\) solves \(x_1-x_2=-1\), and \((1,1)\) spans the solutions of \(x_1-x_2=0\). Which is also a solution of \(x_1-x_2=-1\)?`, choice([S`\((3,4)\)`, S`\((2,2)\)`, S`\((1,1)\)`, S`\((2,1)\)`], 0),
      "p + t(1, 1).", [S`\((1,2)+2(1,1)=(3,4)\), and \(3-4=-1\) ✓.`], S`\((3,4)\)`),
  ]),

  ...hard([
    ["Closure, from the equations", S`Prove: if \(\vec u\) and \(\vec v\) are solutions of a homogeneous system, then every linear combination \(s\vec u+t\vec v\) is a solution. Use the form \(a_{i1}x_1+\dots+a_{in}x_n=0\).`,
      [S`Fix row \(i\): \(\sum_j a_{ij}u_j=0\) and \(\sum_j a_{ij}v_j=0\).`, S`\(\sum_j a_{ij}(su_j+tv_j)=s\sum_j a_{ij}u_j+t\sum_j a_{ij}v_j=0\).`, S`This holds for every row \(i\).`],
      S`\(s\vec u+t\vec v\) solves the system, so the solution set is closed under linear combinations`],
    ["Differences of solutions", S`Prove that if \(\vec x_1\) and \(\vec x_2\) both solve \(A\vec x=\vec b\), then \(\vec x_1-\vec x_2\) solves \(A\vec x=\vec 0\). Deduce that \(A\vec x=\vec b\) has at most one solution when \(A\vec x=\vec 0\) has only the trivial solution.`,
      [S`For each equation, \(\vec a\cdot(\vec x_1-\vec x_2)=b_i-b_i=0\).`, S`If the only homogeneous solution is \(\vec 0\), then \(\vec x_1-\vec x_2=\vec 0\), so \(\vec x_1=\vec x_2\).`],
      S`uniqueness for \(A\vec x=\vec b\) is decided by \(A\vec x=\vec 0\)`],
  ], [
    q("hard", S`For which <strong>positive</strong> \(k\) does \(x_1+kx_2=0,\ kx_1+4x_2=0\) have nontrivial solutions?`, num(2),
      "The rows must be proportional.", [S`\(R_2\to R_2-kR_1\): \((0,\ 4-k^2)\). Nontrivial solutions need \(4-k^2=0\).`], S`\(2\)`),
    q("hard", S`How many free parameters does the solution set of the single equation \(x_1+x_2+x_3+x_4=0\) have?`, num(3),
      "One pivot, four unknowns.", [S`\(4-1\).`], S`\(3\)`),
    q("hard", S`\(A\vec x=\vec b\) has the solution \(\vec p=(1,0,2)\), and the homogeneous solutions are \(t(1,1,-1)\). Find the solution of \(A\vec x=\vec b\) with \(x_2=3\).`, vec(4, 3, -1),
      "x = p + t(1, 1, −1) with t chosen from x₂.", [S`\(x_2=t=3\).`, S`\((1,0,2)+3(1,1,-1)\).`], S`\((4,3,-1)\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a homogeneous system?", "One whose constant terms are all 0. It always has the trivial solution x = 0."],
      ["When are there nontrivial solutions?", "Exactly when rank A < n — always when there are more unknowns than equations."],
      ["What does the solution set of Ax = 0 look like?", "All combinations of n − rank A spanning vectors: a line, plane or flat through the origin."],
      ["How are Ax = b and Ax = 0 related?", "Every solution of Ax = b is one particular solution plus a solution of Ax = 0."],
      ["Why can't I add two solutions of Ax = b?", "Each equation would give 2bᵢ instead of bᵢ — closure only works when b = 0."],
    ],
    summary: [
      "Homogeneous: Ax = 0; always consistent (x = 0).",
      "Nontrivial solutions ⇔ rank A < n; guaranteed if m < n.",
      "Solutions of Ax = 0: x = t₁v₁ + … + tₖvₖ, closed under + and scaling.",
      "Solutions of Ax = b: x = p + h with Ah = 0.",
      "Geometrically: the homogeneous flat shifted by p.",
    ],
    next: "2.7 puts systems to work: fitting curves through points, traffic and network flows, balancing chemical equations and electrical circuits.",
  }),
];
