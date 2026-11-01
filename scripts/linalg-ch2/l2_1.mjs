// LINALG1 2.1 — Systems of Linear Equations: linear equations and what is not linear, systems and solution sets,
// the geometry (lines in R², planes in R³), the 0 / 1 / infinitely-many theorem with proof, consistent and
// inconsistent systems, and triangular systems solved by back substitution.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, sys, am, cv, steps } from "./lib.mjs";
import { vfig, scene3, patch3, line3, pt3 } from "./vecfig.mjs";

export const TITLE = "2.1 Systems of Linear Equations";
export const ID = "11a10001-0001-4001-8001-000000000201";

const S = String.raw;
/** the segment of a x + b y = c across a view, for vfig */
const ln = (a, b, c, v, color, w = 2.6, dash = false) => {
  const pts = b === 0 ? [[c / a, v.ymin], [c / a, v.ymax]] : [[v.xmin, (c - a * v.xmin) / b], [v.xmax, (c - a * v.xmax) / b]];
  return { pts, color, w, dash };
};
const V = { xmin: -1, xmax: 6, ymin: -2, ymax: 5 };
const caseFig = (lines, pt, label) => vfig({ view: V, step: 1, width: 230, segs: lines, points: pt ? [{ x: pt[0], y: pt[1], label: "", color: "amber" }] : [] }, label);

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Systems of Linear Equations",
    overview: S`Almost every problem in linear algebra comes down to solving a <strong>system of linear equations</strong>: several linear equations in the same unknowns, all required at once. This lesson sets up the language — linear equation, solution, solution set, consistent and inconsistent — and the geometric picture: each equation in two unknowns is a line and each equation in three unknowns is a plane, so solving a system means finding where they all meet. That picture explains the most important fact of the chapter: a linear system has <strong>no solution, exactly one, or infinitely many</strong> — never exactly two.`,
    goals: [
      "decide whether an equation is linear and whether a vector is a solution of a system;",
      "describe the solution set of a system geometrically with lines and planes;",
      "explain and prove why a linear system has 0, 1 or infinitely many solutions;",
      "solve triangular systems by back substitution;",
      "find parameter values that change the number of solutions.",
    ],
    outcomes: "systems of linear equations: solutions, consistency and their geometry",
    prior: [
      [S`Solve \(x+y=7,\ x-y=1\).`, S`Adding gives \(2x=8\), so \(x=4\), \(y=3\).`],
      [S`When are the lines \(y=2x+1\) and \(y=2x-3\) parallel?`, S`Always: equal slopes, different intercepts — they never meet.`],
      [S`What does the equation \(x_1+x_2+x_3=1\) describe in \(\mathbb R^3\)?`, S`A plane (Worksheet 1.6), with normal \((1,1,1)\).`],
    ],
    words: [
      ["Linear equation", "\\(a_1x_1+\\dots+a_nx_n=b\\)", "\\(3x_1-x_2=5\\)"],
      ["Solution", "a vector satisfying <em>every</em> equation", "\\((2,1)\\) solves \\(3x_1-x_2=5\\)"],
      ["Solution set", "the set of all solutions", "a point, a line, a plane, or empty"],
      ["Consistent", "has at least one solution", "two lines that cross"],
      ["Inconsistent", "has no solution", "two parallel lines"],
    ],
  }),

  section("📌 Linear equations and systems", S`
  ${definition("linear equation", S`A <strong>linear equation</strong> in the unknowns \(x_1,\dots,x_n\) has the form \(a_1x_1+a_2x_2+\dots+a_nx_n=b\), where the <em>coefficients</em> \(a_1,\dots,a_n\) and the <em>constant term</em> \(b\) are real numbers.`)}
  <p>Each unknown appears to the first power, multiplied only by a number. Products of unknowns (\(x_1x_2\)), powers (\(x_1^2\)), roots, reciprocals or functions of unknowns (\(\sin x_1\)) make an equation <strong>nonlinear</strong>. Coefficients may be any real numbers, such as \(\sqrt2\) or \(\pi\).</p>
  ${definition("system, solution", S`A <strong>system of linear equations</strong> is a finite collection of linear equations in the same unknowns. A vector \((s_1,\dots,s_n)\) is a <strong>solution</strong> if substituting \(x_i=s_i\) makes <em>every</em> equation true. The <strong>solution set</strong> is the set of all solutions. A system is <strong>consistent</strong> if it has at least one solution and <strong>inconsistent</strong> otherwise.`)}
  ${keyIdea(S`A solution must satisfy <em>all</em> the equations at once. Checking one equation is never enough.`)}`),

  section("📌 The geometry: lines and planes", S`
  <p>In \(\mathbb R^2\), each equation \(a_1x_1+a_2x_2=b\) (not both \(a_i\) zero) is a <strong>line</strong>, and a solution of the system is a point on every line. Two lines can cross once, be parallel, or coincide:</p>
  <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;">
  ${caseFig([ln(1, 1, 4, V, "#1e40af"), ln(1, -1, 0, V, "#be123c")], [2, 2], "cross once: one solution")}
  ${caseFig([ln(1, -1, 0, V, "#1e40af"), ln(1, -1, 2, V, "#be123c")], null, "parallel: no solution")}
  ${caseFig([ln(1, -1, 0, V, "#1e40af", 6), ln(2, -2, 0, V, "#be123c", 2.4, true)], null, "the same line: infinitely many")}
  </div>
  <p>In \(\mathbb R^3\), each equation in \(x_1,x_2,x_3\) is a <strong>plane</strong>. Two planes are parallel (no solution) or meet in a line; three planes can meet in a single point, along a common line, or not at all. In \(\mathbb R^n\) an equation describes a <em>hyperplane</em>, and the same three outcomes are the only possibilities.</p>
  ${vfig(scene3(3.4, { polys: [patch3([1, 1.4, 1.2], [1, 0, 0], [0, 1, 0], 1.4, "#dbeafe", "blue", 0.55), patch3([1, 1.4, 1.2], [1, 0, 0], [0, 0.3, 1], 1.4, "#fef3c7", "amber", 0.55)], segs: [line3([1, 1.4, 1.2], [1, 0, 0], -1.4, 1.4, "red", 3)] }), "two non-parallel planes meet in a line: infinitely many solutions")}
  ${theorem("number of solutions", S`A system of linear equations has either no solution, exactly one solution, or infinitely many solutions.`, S`Suppose \(\vec p\ne\vec q\) are two solutions. Each equation has the form \(\vec a\cdot\vec x=b\) with \(\vec a=(a_1,\dots,a_n)\), and \(\vec a\cdot\vec p=\vec a\cdot\vec q=b\). For every real \(t\), \(\vec a\cdot(\vec p+t(\vec q-\vec p))=b+t(b-b)=b\). So every point of the line through \(\vec p\) and \(\vec q\) is a solution — infinitely many.`)}`),

  section("📌 Explore", S`<p>Start with one of the three cases, then change the second line with the sliders. Try to turn a single crossing point into parallel lines (match the ratio \(a_2:b_2\) to the first line) and then into the same line. Switch to three equations: three lines usually have no common point.</p>`),
  widget("laLines", { init: { set: "one" } }),

  section("📌 Triangular systems and back substitution", S`
  <p>Some systems can be solved from the bottom up. In a <strong>triangular</strong> system each equation has fewer unknowns than the one above it:</p>
  \[${sys([[2, -1, 3, 9], [0, 3, -1, 7], [0, 0, 4, 8]]).replace("\\left\\{", "\\left\\{")}\]
  <p>The last equation gives \(x_3=2\). Substituting into the second, \(3x_2-2=7\), so \(x_2=3\). Then the first: \(2x_1-3+6=9\), so \(x_1=3\). This is <strong>back substitution</strong>. The rest of the chapter shows how to turn <em>any</em> system into this shape without changing its solutions.</p>
  ${watchOut([
    "A vector that satisfies some of the equations is not a solution — it must satisfy all of them.",
    "Products such as x₁x₂ and powers such as x₁² make an equation nonlinear; coefficients like √2 or π do not.",
    "A linear system never has exactly two solutions: two solutions force a whole line of them.",
    "Parallel lines (or planes) mean no solution; the same line means infinitely many — check the constants, not just the coefficients.",
    "In back substitution, substitute the values you already know before solving the next equation.",
  ])}`),

  examples([
    ["Linear or not?", S`Which are linear equations in \(x_1,x_2,x_3\)? (a) \(3x_1-2x_2+x_3=7\) (b) \(x_1x_2+x_3=1\) (c) \(\sqrt2\,x_1-\pi x_2=e\) (d) \(x_1^2+x_2=4\) (e) \(\dfrac{2}{x_1}+x_2=1\) (f) \(\sin\!\left(\tfrac{\pi}{6}\right)x_1+x_2=0\)`,
      [S`(a), (c) and (f) have each unknown to the first power times a number: \(\sqrt2\), \(\pi\), \(e\) and \(\sin\tfrac{\pi}6=\tfrac12\) are just real numbers.`, S`(b) has a product of unknowns, (d) a square and (e) an unknown in a denominator.`],
      S`(a), (c), (f) are linear; (b), (d), (e) are not`],
    ["Checking candidate solutions", S`Is \((2,3,2)\) a solution of the system below? Is \((1,1,2)\)? \[${sys([[2, -1, 1, 3], [1, 1, -2, 1], [3, 0, 2, 10]])}\]`,
      [S`<strong>Matrix form.</strong> The system is \(A\vec x=\vec b\) with \[A=${am([[2, -1, 1], [1, 1, -2], [3, 0, 2]], false)},\qquad \vec b=${cv(3, 1, 10)}.\]`,
        S`For \((2,3,2)\): \[A${cv(2, 3, 2)}=${cv("2(2)-1(3)+1(2)", "1(2)+1(3)-2(2)", "3(2)+0(3)+2(2)")}=${cv(3, 1, 10)}=\vec b\ \checkmark\]`,
        S`For \((1,1,2)\): \[A${cv(1, 1, 2)}=${cv("2(1)-1(1)+1(2)", "1(1)+1(1)-2(2)", "3(1)+0(1)+2(2)")}=${cv(3, -2, 7)}\ne${cv(3, 1, 10)}.\] Only the first entry matches.`],
      S`\((2,3,2)\) is a solution; \((1,1,2)\) is not (it satisfies only the first equation)`],
    ["Back substitution", S`Solve \[${sys([[1, 2, -1, 4], [0, 1, 3, 7], [0, 0, 2, 4]])}\]`,
      [...steps([[1, 2, -1, 4], [0, 1, 3, 7], [0, 0, 2, 4]], [
        [S`The matrix is already triangular, so we work from the bottom up (this is back substitution in matrix form). Make the last pivot 1: \(x_3=2\).`, ["R3*1/2"]],
        [S`Use \(x_3\) to clear column 3 above it: this substitutes \(x_3=2\) into equations 1 and 2.`, ["R2-3R3", "R1+R3"]],
        [S`Use \(x_2=1\) to clear column 2 above it.`, ["R1-2R2"]],
      ], { intro: "Write the augmented matrix" }).steps,
        S`Read the RREF: \(x_1=4\), \(x_2=1\), \(x_3=2\).`,
        S`Check: \(${am([[1, 2, -1], [0, 1, 3], [0, 0, 2]], false)}${cv(4, 1, 2)}=${cv("4+2-2", "0+1+6", "0+0+4")}=${cv(4, 7, 4)}\) ✓.`],
      S`\((x_1,x_2,x_3)=(4,1,2)\)`],
    ["Three systems, three outcomes", S`How many solutions does each system have? (a) \(x_1-x_2=1,\ 2x_1+x_2=8\) (b) \(x_1-x_2=1,\ -3x_1+3x_2=2\) (c) \(x_1-x_2=1,\ 4x_1-4x_2=4\)`,
      [...steps([[1, -1, 1], [2, 1, 8]], [
        [S`(a) Eliminate \(x_1\) from equation 2.`, ["R2-2R1"]],
        [S`Make the second pivot 1.`, ["R2*1/3"]],
        [S`Clear above it.`, ["R1+R2"]],
      ], { intro: "(a) Augmented matrix" }).steps,
        S`(a) One solution \((3,2)\): the lines cross once.`,
        ...steps([[1, -1, 1], [-3, 3, 2]], [
          [S`(b) Eliminate \(x_1\) from equation 2.`, ["R2+3R1"]],
        ], { intro: "(b) Augmented matrix" }).steps,
        S`(b) The last row says 0 equals 5: no solution (parallel lines).`,
        ...steps([[1, -1, 1], [4, -4, 4]], [
          [S`(c) Eliminate \(x_1\) from equation 2.`, ["R2-4R1"]],
        ], { intro: "(c) Augmented matrix" }).steps,
        S`(c) A zero row: \(x_2=t\) is free and \(x_1=1+t\). Infinitely many solutions \((1+t,\ t)\) — the same line twice.`],
      S`(a) one: \((3,2)\); (b) none; (c) infinitely many`,
      vfig({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, step: 1, width: 300, segs: [ln(1, -1, 1, { xmin: -1, xmax: 5 }, "#1e40af", 5), ln(2, 1, 8, { xmin: -1, xmax: 5 }, "#15803d"), ln(-3, 3, 2, { xmin: -1, xmax: 5 }, "#be123c", 2.4, true)], points: [{ x: 3, y: 2, label: "(3, 2)", color: "amber" }] }, "blue: x₁ − x₂ = 1 (and 4x₁ − 4x₂ = 4); green: (a); red dashed: (b)")],
    ["Two equations in three unknowns", S`Describe the solution set of each system: (a) \(x_1+x_2+x_3=3,\ x_1+x_2+x_3=5\); (b) \(x_1+x_2+x_3=3,\ x_1-x_2=1\).`,
      [...steps([[1, 1, 1, 3], [1, 1, 1, 5]], [
        [S`(a) Eliminate \(x_1\) from equation 2.`, ["R2-R1"]],
      ], { intro: "(a) Augmented matrix" }).steps,
        S`(a) The last row says 0 equals 2: no solution (two parallel planes).`,
        ...steps([[1, 1, 1, 3], [1, -1, 0, 1]], [
          [S`(b) Eliminate \(x_1\) from equation 2.`, ["R2-R1"]],
          [S`Make the second pivot 1.`, ["R2*-1/2"]],
          [S`Clear above it.`, ["R1-R2"]],
        ], { intro: "(b) Augmented matrix" }).steps,
        S`(b) Column 3 has no pivot: \(x_3=s\) is free; \(x_1=2-\tfrac12s\), \(x_2=1-\tfrac12s\). With \(s=2u\): \[\vec x=${cv("2-u", "1-u", "2u")}=${cv(2, 1, 0)}+u${cv(-1, -1, 2)},\] a line where the two planes meet.`,
        S`Check \(u=1\), \(\vec x=(1,0,2)\): \(1+0+2=3\) ✓ and \(1-0=1\) ✓.`],
      S`(a) no solution; (b) the line \((2,1,0)+u(-1,-1,2)\)`,
      vfig(scene3(3.6, { polys: [patch3([1, 0, 2], [1, -1, 0], [0, 1, -1], 1.6, "#dbeafe", "blue", 0.5), patch3([1, 0, 2], [1, 1, 0], [0, 0, 1], 1.6, "#fef3c7", "amber", 0.5)], segs: [line3([0, -1, 4], [1, 1, -2], -0.3, 2.3, "red", 3)], points: [pt3([2, 1, 0], "u = 0", { color: "red" })] }), "(b): the planes meet in a line")],
  ]),

  practice([
    q("solution?", S`Is \((1,-2,3)\) a solution of \(x_1+x_2+x_3=2,\ 2x_1-x_2=4\)?`, choice(["yes", "no — it fails the first equation", "no — it fails the second equation", "no — it fails both"], 0),
      "Substitute into every equation.", [S`\(1-2+3=2\) ✓ and \(2+2=4\) ✓.`], "yes"),
    q("back substitution", S`Solve \(3x_1-x_2+2x_3=7,\ 2x_2-x_3=1,\ 3x_3=9\). Enter \((x_1,x_2,x_3)\).`, vec(1, 2, 3),
      "Start from the last equation.", [S`\(x_3=3\); \(2x_2-3=1\) gives \(x_2=2\); \(3x_1-2+6=7\) gives \(x_1=1\).`], S`\((1,2,3)\)`),
    q("how many?", S`How many solutions does \(x_1+3x_2=2,\ 2x_1+6x_2=5\) have?`, choice(["none", "exactly one", "exactly two", "infinitely many"], 0),
      "Compare the second equation with twice the first.", [S`Twice the first gives \(2x_1+6x_2=4\ne5\): parallel lines.`], "none"),
    q("linear?", "Which equation is <strong>not</strong> linear in x₁, x₂, x₃?", choice([S`\(x_1x_3-x_2=0\)`, S`\(\pi x_1+x_3=\sqrt5\)`, S`\(x_2=4\)`, S`\(\tfrac12x_1-\tfrac13x_2+x_3=0\)`], 0),
      "Look for products, powers or functions of the unknowns.", [S`\(x_1x_3\) is a product of two unknowns.`], S`\(x_1x_3-x_2=0\)`),
    q("infinitely many", S`For which \(k\) does \(x_1+2x_2=3,\ 2x_1+kx_2=6\) have infinitely many solutions?`, num(4),
      "The second equation must be a multiple of the first.", [S`Twice the first is \(2x_1+4x_2=6\), which matches when \(k=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["Two solutions force infinitely many", S`Prove that if a system \(A\vec x=\vec b\) has two different solutions \(\vec p\) and \(\vec q\), then \(\vec x_t=(1-t)\vec p+t\vec q\) is a solution for every real \(t\).`,
      [S`In matrix form the hypotheses are \(A\vec p=\vec b\) and \(A\vec q=\vec b\).`, S`By linearity of the matrix–vector product, \[A\big((1-t)\vec p+t\vec q\big)=(1-t)A\vec p+tA\vec q=(1-t)\vec b+t\vec b=\vec b.\]`, S`Different \(t\) give different points because \(\vec x_t=\vec p+t(\vec q-\vec p)\) and \(\vec q-\vec p\ne\vec 0\).`],
      S`every point \((1-t)\vec p+t\vec q\) is a solution, so there are infinitely many`],
    ["One, none or infinitely many", S`For which \(a\) and \(b\) does \(x_1+ax_2=2,\ 3x_1+6x_2=b\) have exactly one solution, no solution, or infinitely many?`,
      [S`Write the augmented matrix with the letters kept: \[${am([[1, "a", 2], [3, 6, "b"]])}\]`,
        S`Eliminate \(x_1\) from row 2. Operation: \(R_2\to R_2-3R_1\). \[\longrightarrow\ ${am([[1, "a", 2], [0, "6-3a", "b-6"]])}\]`,
        S`If \(6-3a\ne0\) (\(a\ne2\)): two pivots, a unique solution \(x_2=\tfrac{b-6}{6-3a}\), \(x_1=2-ax_2\).`,
        S`If \(a=2\) the matrix is \[${am([[1, 2, 2], [0, 0, "b-6"]])}\] Row 2 reads 0 equals \(b-6\): no solution when \(b\ne6\); when \(b=6\) it is a zero row, \(x_2\) is free, and there are infinitely many solutions.`],
      S`\(a\ne2\): one; \(a=2,\ b\ne6\): none; \(a=2,\ b=6\): infinitely many`],
  ], [
    q("hard", S`The lines \(x_1+x_2=5\), \(x_1-x_2=1\) and \(2x_1+cx_2=10\) pass through one common point. Find \(c\).`, num(2),
      "Find where the first two lines meet.", [S`The first two give \((3,2)\).`, S`\(6+2c=10\).`], S`\(2\)`),
    q("hard", "Can a system of 2 linear equations in 3 unknowns have exactly one solution?", choice(["no", "yes, always", "yes, if the planes are not parallel", "only if both constants are 0"], 0),
      "Two planes in ℝ³ meet in a line, coincide, or are parallel.", ["Two planes never meet in a single point, so the answer is 0 or infinitely many."], "no"),
    q("hard", S`In \(x_1+x_2+x_3=6,\ x_2+x_3=5,\ x_3=k\), for which \(k\) is \(x_1=x_2\)?`, num(4),
      "Back substitute in terms of k.", [S`\(x_2=5-k\) and \(x_1=6-5=1\).`, S`\(1=5-k\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes an equation linear?", "Each unknown appears only to the first power, multiplied by a constant, with no products or functions of unknowns."],
      ["What is the solution set of a system?", "The set of all vectors that satisfy every equation: empty, a single point, or an infinite set such as a line or a plane."],
      ["Why can't a linear system have exactly two solutions?", "If p and q are solutions, so is every point (1 − t)p + tq on the line through them."],
      ["How do I see the number of solutions in ℝ²?", "Draw the lines: they cross once (one), are parallel (none), or coincide (infinitely many)."],
      ["What is back substitution?", "Solving a triangular system from the last equation upward, substituting known values as you go."],
    ],
    summary: [
      "Linear equation: a₁x₁ + … + aₙxₙ = b; a system is several of them at once.",
      "A solution satisfies every equation; consistent = at least one solution.",
      "Geometrically: intersections of lines (ℝ²), planes (ℝ³) or hyperplanes (ℝⁿ).",
      "Every linear system has 0, 1 or infinitely many solutions.",
      "Triangular systems are solved by back substitution.",
    ],
    next: "2.2 writes systems as augmented matrices and introduces the three row operations that simplify a system without changing its solutions.",
  }),
];
