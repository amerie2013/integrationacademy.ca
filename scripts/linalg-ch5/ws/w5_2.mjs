// LINALG1 Worksheet 5.2 — Spans and Solution Sets as Subspaces
// Self-contained: complete notes (span, spans are subspaces, solution spaces as spans, membership in a span,
// equations for a span, redundant vectors), 9 worked examples with figures, 13 problems with full solutions.
import { gridT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { planeFig, lineFig, vecs3, vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const F_SPAN = planeFig([1, 0, 1], [0, 1, 2], { lu: "v₁", lv: "v₂", more: [[[2, -1, 0], "2v₁ − v₂", "green"]] });
const F_REDUN = vecs3([[[1, 0, 1], "v₁"], [[0, 1, 1], "v₂"], [[1, 1, 2], "v₃ = v₁ + v₂", "green"]], { plane: [[1, 0, 1], [0, 1, 1], 1.1] });
const F_SOL = lineFig([1, -2, 1], { label: "(1, −2, 1)" });
const F_MEMB = planeFig([1, 1, 1], [0, 2, 1], { lu: "(1, 1, 1)", lv: "(0, 2, 1)", more: [[[1, 5, 3], "(1, 5, 3)", "green"], [[1, 5, 4], "(1, 5, 4)", "amber"]], len: 4 });
const F_NORMAL = planeFig([1, 1, 1], [0, 2, 1], { lu: "", lv: "", more: [[[-1, -1, 2], "normal (−1, −1, 2)", "red"]], len: 3 });

const NOTES = [
  { h: "1. Spans are subspaces",
    lead: S`${def("span", S`The \textbf{span} of \(\vec v_1,\dots,\vec v_k\in\mathbb R^n\) is the set of all their linear combinations: \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}=\{c_1\vec v_1+\dots+c_k\vec v_k: c_i\in\mathbb R\}\).`)}
${thm("spans are subspaces", S`\(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) is a subspace of \(\mathbb R^n\), and it is contained in every subspace that contains \(\vec v_1,\dots,\vec v_k\).`)}`,
    fig: F_SPAN, w: 0.55,
    body: S`\pf{\(\vec 0=0\vec v_1+\dots+0\vec v_k\). If \(\vec x=\sum c_i\vec v_i\) and \(\vec y=\sum d_i\vec v_i\), then \(\vec x+\vec y=\sum(c_i+d_i)\vec v_i\) and \(t\vec x=\sum(tc_i)\vec v_i\) are again combinations. A subspace containing every \(\vec v_i\) contains all multiples and sums of them, hence the whole span.}
So a set written as \(\{a\vec u+b\vec v+\dots\}\) is automatically a subspace. The span of one nonzero vector is a line through \(\vec 0\); of two non-parallel vectors, a plane through \(\vec 0\).` },

  { h: "2. Redundant vectors",
    lead: S`If one spanning vector is a combination of the others, it can be removed without changing the span. In the figure \(\vec v_3=\vec v_1+\vec v_2\), so any combination \(a\vec v_1+b\vec v_2+c\vec v_3=(a+c)\vec v_1+(b+c)\vec v_2\) needs only \(\vec v_1,\vec v_2\).`,
    fig: F_REDUN, w: 0.56,
    body: S`Two more span rules (each proved by rewriting combinations): \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\ \vec v+c\vec u\}\) and \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\ c\vec v\}\) for \(c\ne0\). These are exactly the row operations of Chapter 2, applied to vectors.` },

  { h: "3. Solution spaces as spans",
    lead: thm("solution spaces", S`The solution set of a homogeneous system \(A\vec x=\vec 0\) in \(n\) unknowns is a subspace of \(\mathbb R^n\).`) + S`To \textbf{write it as a span}: row reduce, give each free variable a parameter, and split the general solution by parameter. One spanning vector per free variable. The solutions of \(x_1+x_2+x_3=0,\ x_1-x_3=0\) form the line spanned by \((1,-2,1)\) (figure).`,
    fig: F_SOL, w: 0.56 },

  { h: "4. Is a vector in the span?",
    lead: S`\(\vec b\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) means \(c_1\vec v_1+\dots+c_k\vec v_k=\vec b\) for some numbers \(c_i\). Comparing components, this is a linear system whose augmented matrix is \[[\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\quad(\text{the vectors are the \textbf{columns}}).\]
Consistent \(\Rightarrow\) yes (and a solution gives the coefficients); a row \([\,0\ \cdots\ 0\mid c\,]\) with \(c\ne0\) \(\Rightarrow\) no.`,
    fig: F_MEMB, w: 0.55,
    body: S`In the figure, \((1,5,3)\) lies in the plane spanned by \((1,1,1)\) and \((0,2,1)\) while \((1,5,4)\) does not (Examples 4 and 5).` },

  { h: "5. From a span to equations",
    lead: S`Row reduce \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) with a \textbf{general} \(\vec b=(b_1,\dots,b_n)\). Each zero row of the coefficient part has a last entry that is a combination of the \(b_i\); setting it equal to \(0\) gives one homogeneous equation. Together these equations describe the span.`,
    fig: F_NORMAL, w: 0.56,
    body: S`For a plane in \(\mathbb R^3\) spanned by \(\vec u,\vec v\) there is a shortcut: the normal is \(\vec u\times\vec v\), and the plane is \((\vec u\times\vec v)\cdot\vec x=0\). Both routes give the same equation (Example 6).` },
];

const EXAMPLES = [
  { title: "A parametric set is a span", q: S`Write \(S=\{(a+b,\ 2a,\ b-a): a,b\in\mathbb R\}\) as a span and describe it.`,
    fig: planeFig([1, 2, -1], [1, 0, 1], { lu: "(1, 2, −1)", lv: "(1, 0, 1)" }),
    steps: [S`Split by parameter: \((a+b,\ 2a,\ b-a)=a(1,2,-1)+b(1,0,1)\).`, S`So \(S=\operatorname{Span}\{(1,2,-1),(1,0,1)\}\), a subspace by Note 1.`, S`The vectors are not multiples of each other (the second entry of \((1,0,1)\) is 0 but its others are not), so \(S\) is a plane through \(\vec 0\).`],
    ans: S`\(\operatorname{Span}\{(1,2,-1),(1,0,1)\}\): a plane` },
  { title: "One equation, a plane of solutions", q: S`Write the solution set of \(x_1+2x_2-x_3=0\) as a span.`,
    fig: planeFig([-2, 1, 0], [1, 0, 1], { lu: "(−2, 1, 0)", lv: "(1, 0, 1)" }),
    steps: [...steps([[1, 2, -1, 0]], [], { intro: "The augmented matrix [A | 0] is already in RREF" }).steps,
      S`One pivot (column 1); free \(x_2=s\), \(x_3=t\). The row gives \(x_1=-2s+t\).`,
      S`Vector form: \[\vec x=${am([["-2s+t"], ["s"], ["t"]], false)}=s${am([[-2], [1], [0]], false)}+t${am([[1], [0], [1]], false)}.\]`,
      S`Check: \[${am([[1, 2, -1]], false)}${am([[-2], [1], [0]], false)}=-2+2-0=0\ ✓\] and \(${am([[1, 2, -1]], false)}${am([[1], [0], [1]], false)}=1+0-1=0\) ✓.`],
    ans: S`\(\operatorname{Span}\{(-2,1,0),(1,0,1)\}\)` },
  { title: "Two equations, a line of solutions", q: S`Write the solution set of \(x_1+x_2-x_3=0,\ 2x_1+3x_2+x_3=0\) as a span.`,
    fig: lineFig([4, -3, 1], { label: "(4, −3, 1)" }),
    steps: [...steps([[1, 1, -1], [2, 3, 1]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear above the second pivot: RREF.`, ["R1-R2"]],
    ], { bar: false, intro: "Reduce the coefficient matrix (the zero constants never change)" }).steps,
      S`\(x_3=t\): \(x_1=4t\), \(x_2=-3t\). So the solutions are \(\operatorname{Span}\{(4,-3,1)\}\). Check: \(4-3-1=0\) ✓, \(8-9+1=0\) ✓.`],
    ans: S`\(\operatorname{Span}\{(4,-3,1)\}\), a line` },
  { title: "A vector in the span", q: S`Is \(\vec b=(1,5,3)\) in \(\operatorname{Span}\{(1,1,1),(0,2,1)\}\)? Find the coefficients.`,
    fig: F_MEMB,
    steps: [...steps([[1, 0, 1], [1, 2, 5], [1, 1, 3]], [
      [S`Clear column 1.`, ["R2-R1", "R3-R1"]],
      [S`Clear column 2 below the pivot \(2\).`, ["R3-1/2R2"]],
    ], { intro: S`Augmented matrix \([\,\vec v_1\ \vec v_2\mid\vec b\,]\)` }).steps,
      S`Consistent: \(2c_2=4\), so \(c_2=2\); \(c_1=1\). Check: \(1(1,1,1)+2(0,2,1)=(1,5,3)\) ✓.`],
    ans: S`yes: \(\vec b=1(1,1,1)+2(0,2,1)\)` },
  { title: "A vector not in the span", q: S`Is \((1,5,4)\) in \(\operatorname{Span}\{(1,1,1),(0,2,1)\}\)?`,
    fig: F_MEMB,
    steps: [...steps([[1, 0, 1], [1, 2, 5], [1, 1, 4]], [
      [S`The same operations as in Example 4.`, ["R2-R1", "R3-R1"]],
      [S`Clear column 2.`, ["R3-1/2R2"]],
    ], { intro: "Augmented matrix" }).steps,
      S`The last row is \([\,0\ \ 0\mid1\,]\): no coefficients work. \((1,5,4)\) lies off the plane.`],
    ans: S`no` },
  { title: "Equations for the span", q: S`Find a homogeneous equation describing \(\operatorname{Span}\{(1,1,1),(0,2,1)\}\).`,
    fig: F_NORMAL,
    steps: [S`Reduce with a general \(\vec b\): \[${am([[1, 0, "b_1"], [1, 2, "b_2"], [1, 1, "b_3"]])}\]`,
      S`Clear column 1: \(R_2\to R_2-R_1\), \(R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 2, "b_2-b_1"], [0, 1, "b_3-b_1"]])}\]`,
      S`Clear column 2: \(R_3\to R_3-\tfrac12R_2\); the last entry is \(b_3-b_1-\tfrac12(b_2-b_1)=b_3-\tfrac12b_1-\tfrac12b_2\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 2, "b_2-b_1"], [0, 0, "b_3-\\tfrac12b_1-\\tfrac12b_2"]])}\]`,
      S`Consistent iff \(-b_1-b_2+2b_3=0\) (times 2). Cross-product check: \((1,1,1)\times(0,2,1)=(-1,-1,2)\) ✓. And \((1,5,3)\): \(-1-5+6=0\) ✓, \((1,5,4)\): \(-1-5+8=2\ne0\) ✓.`],
    ans: S`\(-x_1-x_2+2x_3=0\)` },
  { title: "Do three vectors span ℝ³?", q: S`Does \(\{(1,0,1),(1,1,0),(0,1,1)\}\) span \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 0, 1], "(1, 0, 1)"], [[1, 1, 0], "(1, 1, 0)"], [[0, 1, 1], "(0, 1, 1)"]]),
    steps: [...steps([[1, 1, 0], [0, 1, 1], [1, 0, 1]], [
      [S`Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2.`, ["R3+R2"]],
    ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
      S`A pivot in every row: for every \(\vec b\) the system \([\,\cdot\mid\vec b\,]\) has no row \(0=\text{nonzero}\), so every \(\vec b\in\mathbb R^3\) is a combination.`],
    ans: S`yes --- they span \(\mathbb R^3\)` },
  { title: "Dropping a redundant vector", q: S`Show that \(\operatorname{Span}\{(1,2,0),(0,1,1),(2,5,1)\}\) is a plane, and give two vectors spanning it.`,
    fig: vecs3([[[1, 2, 0], "(1, 2, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[2, 5, 1], "(2, 5, 1)", "green"]], { len: 3.5, plane: [[1, 2, 0], [0, 1, 1], 0.9] }),
    steps: [...steps([[1, 0, 2], [2, 1, 5], [0, 1, 1]], [
      [S`Columns are the vectors. Clear column 1.`, ["R2-2R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { bar: false, intro: "Test for redundancy" }).steps,
      S`Column 3 has no pivot: \((2,5,1)\) is a combination of the first two. The echelon form says \(c_1+2c_3=0\) and \(c_2+c_3=0\); with \(c_3=-1\): \(c_1=2\), \(c_2=1\), i.e. \((2,5,1)=2(1,2,0)+(0,1,1)\) ✓.`,
      S`So the span is \(\operatorname{Span}\{(1,2,0),(0,1,1)\}\), a plane.`],
    ans: S`a plane spanned by \((1,2,0)\) and \((0,1,1)\)` },
  { title: "A parameter in the vector", q: S`For which \(k\) is \((k,1,2)\) in \(\operatorname{Span}\{(1,0,1),(2,1,1)\}\)?`,
    steps: [S`Reduce \([\,\vec v_1\ \vec v_2\mid\vec b\,]\): \[${am([[1, 2, "k"], [0, 1, 1], [1, 1, 2]])}\]`,
      S`\(R_3\to R_3-R_1\): \[\longrightarrow\ ${am([[1, 2, "k"], [0, 1, 1], [0, -1, "2-k"]])}\]`,
      S`\(R_3\to R_3+R_2\): \[\longrightarrow\ ${am([[1, 2, "k"], [0, 1, 1], [0, 0, "3-k"]])}\]`,
      S`Consistent iff \(3-k=0\). For \(k=3\): \(c_2=1\), \(c_1=1\), and \((1,0,1)+(2,1,1)=(3,1,2)\) ✓.`],
    ans: S`\(k=3\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Is \((6,-3)\) in \(\operatorname{Span}\{(-2,1)\}\)? If so, with which coefficient?`, ans: S`yes: \((6,-3)=-3(-2,1)\)` },
  { level: 1, q: S`Write \(\{(s,\ 2s,\ -s): s\in\mathbb R\}\) as a span and describe it.`, ans: S`\(\operatorname{Span}\{(1,2,-1)\}\), a line through \(\vec 0\)`, fig: lineFig([1, 2, -1], { label: "s = 1" }) },
  { level: 1, q: S`Describe \(\operatorname{Span}\{(1,0,0),(0,0,1)\}\) geometrically.`, ans: S`the \(x_1x_3\)-plane (\(x_2=0\))` },
  { level: 2, q: S`Write the solution set of \(x_1-x_2+x_3-x_4=0\) in \(\mathbb R^4\) as a span.`, ans: S`\(\operatorname{Span}\{(1,1,0,0),(-1,0,1,0),(1,0,0,1)\}\)`,
    sol: [S`Pivot \(x_1\); free \(x_2=r\), \(x_3=s\), \(x_4=t\): \(x_1=r-s+t\).`, S`\(\vec x=r(1,1,0,0)+s(-1,0,1,0)+t(1,0,0,1)\). Check \((1,0,0,1)\): \(1-0+0-1=0\) ✓.`] },
  { level: 2, q: S`Is \((2,1,5)\) in \(\operatorname{Span}\{(1,1,2),(0,1,-1)\}\)? Find the coefficients.`, ans: S`yes: \(2(1,1,2)-(0,1,-1)\)`,
    fig: planeFig([1, 1, 2], [0, 1, -1], { lu: "(1, 1, 2)", lv: "(0, 1, −1)", more: [[[2, 1, 5], "(2, 1, 5)", "green"]], len: 3.6 }),
    sol: [...steps([[1, 0, 2], [1, 1, 1], [2, -1, 5]], [
      [S`Clear column 1.`, ["R2-R1", "R3-2R1"]],
      [S`Clear column 2.`, ["R3+R2"]],
    ]).steps, S`Consistent: \(c_2=-1\), \(c_1=2\). Check: \((2,2,4)-(0,1,-1)=(2,1,5)\) ✓.`] },
  { level: 2, q: S`Find a homogeneous equation for \(\operatorname{Span}\{(1,2,0),(0,1,3)\}\).`, ans: S`\(6x_1-3x_2+x_3=0\)`,
    sol: [S`Reduce with general \(\vec b\): \(R_2\to R_2-2R_1\): \[${am([[1, 0, "b_1"], [2, 1, "b_2"], [0, 3, "b_3"]])}\longrightarrow${am([[1, 0, "b_1"], [0, 1, "b_2-2b_1"], [0, 3, "b_3"]])}\]`, S`\(R_3\to R_3-3R_2\): last entry \(b_3-3b_2+6b_1\). So \(6b_1-3b_2+b_3=0\). Cross-product check: \((1,2,0)\times(0,1,3)=(6,-3,1)\) ✓.`] },
  { level: 2, q: S`Is \(\operatorname{Span}\{(1,2),(3,6),(2,1)\}=\mathbb R^2\)?`, ans: S`yes: \((1,2)\) and \((2,1)\) are not parallel`,
    fig: vecs2([[[1, 2], "(1, 2)"], [[3, 6], "(3, 6)", "red", null, true], [[2, 1], "(2, 1)", "green"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 6.5 }),
    sol: [S`\((3,6)=3(1,2)\) is redundant. \((1,2)\) and \((2,1)\) are not multiples, so their span is a plane through \(\vec 0\) in \(\mathbb R^2\) --- all of \(\mathbb R^2\).`] },
  { level: 2, q: S`Write the solution set of \(x_1+2x_2+x_3=0,\ 2x_1+4x_2+3x_3=0\) as a span.`, ans: S`\(\operatorname{Span}\{(-2,1,0)\}\)`,
    sol: [...steps([[1, 2, 1], [2, 4, 3]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear above the pivot of column 3.`, ["R1-R2"]],
    ], { bar: false, intro: "Reduce the coefficient matrix" }).steps, S`\(x_2=t\): \(x_1=-2t\), \(x_3=0\).`] },
  { level: 3, space: 5, q: S`Prove that \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u+\vec v,\ \vec u-\vec v\}\).`, ans: S`each spanning vector of one set is a combination of the other set`,
    sol: [S`\(\vec u+\vec v\) and \(\vec u-\vec v\) are combinations of \(\vec u,\vec v\), so the right span is inside the left.`, S`\(\vec u=\tfrac12(\vec u+\vec v)+\tfrac12(\vec u-\vec v)\) and \(\vec v=\tfrac12(\vec u+\vec v)-\tfrac12(\vec u-\vec v)\), so the left span is inside the right.`] },
  { level: 3, space: 5, q: S`For which \(h\) is \((1,h,3)\) in \(\operatorname{Span}\{(1,1,0),(0,1,1)\}\)?`, ans: S`\(h=4\)`,
    sol: [S`\(a(1,1,0)+b(0,1,1)=(a,\ a+b,\ b)\). Matching: \(a=1\), \(b=3\), so \(h=a+b=4\).`] },
  { level: 3, space: 5, q: S`Prove: if \(\vec w\in\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\), then \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k,\vec w\}=\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\).`, ans: S`substitute \(\vec w=\sum d_i\vec v_i\) into any combination`,
    sol: [S`"\(\supseteq\)": take the coefficient of \(\vec w\) to be 0.`, S`"\(\subseteq\)": write \(\vec w=\sum d_i\vec v_i\); then \(\sum c_i\vec v_i+t\vec w=\sum(c_i+td_i)\vec v_i\).`] },
  { level: 3, space: 5, q: S`Find a spanning set for \(\{\vec x\in\mathbb R^4: x_1+x_2=x_3+x_4,\ x_1=x_2\}\).`, ans: S`\(\{(1,1,2,0),(0,0,-1,1)\}\)`,
    sol: [S`Let \(x_1=x_2=s\) and \(x_4=t\). Then \(x_3=x_1+x_2-x_4=2s-t\).`, S`\(\vec x=(s,s,2s-t,t)=s(1,1,2,0)+t(0,0,-1,1)\). Check \((1,1,2,0)\): \(2=2\) ✓.`] },
  { level: 3, space: 5, q: S`For which \(b\) is \(\operatorname{Span}\{(1,b),(b,4)\}\) only a line in \(\mathbb R^2\)? Sketch the case \(b=2\).`, ans: S`\(b=\pm2\)`, fig: gridT({ xmin: -3, xmax: 5, ymin: -2, ymax: 5 }),
    sol: [S`Reduce \(${am([[1, "b"], ["b", 4]], false)}\) with \(R_2\to R_2-bR_1\): second row \((0,\ 4-b^2)\).`, S`Only one pivot exactly when \(4-b^2=0\), i.e. \(b=\pm2\). For \(b=2\): \((2,4)=2(1,2)\), the line \(y=2x\).`] },
];

export const WS = {
  code: "5.2",
  title: "Spans and Solution Sets as Subspaces",
  bigideas: S`Subspaces arise in two ways. A \textbf{span} \(\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) --- all combinations of given vectors --- is always a subspace, the smallest one containing them. The \textbf{solution set of a homogeneous system} is always a subspace too. Solving the system writes it as a span; row reducing \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) with a general \(\vec b\) turns a span into equations, and the same matrix with a specific \(\vec b\) decides whether \(\vec b\) lies in the span.`,
  goals: ["Prove that a span is a subspace and recognise parametric sets as spans.", "Write the solution set of a homogeneous system as a span.", "Decide whether a vector lies in a span and find the coefficients.", "Describe a span by homogeneous equations.", "Remove redundant vectors from a spanning set."],
  curriculum: "Subspaces of Rⁿ — spans and solution spaces",
  vocab: [["Linear combination", "\\(c_1\\vec v_1+\\dots+c_k\\vec v_k\\)"], ["Span", "all linear combinations of the vectors"], ["Spanning set", "vectors whose span is the subspace"], ["Solution space", "solutions of \\(A\\vec x=\\vec 0\\)"], ["Redundant vector", "a combination of the other spanning vectors"]],
  hook: S`Which points can you reach from the origin using only steps along \((1,1,1)\) and \((0,2,1)\), any number of times, forwards or backwards, including fractions? Can you reach \((1,5,3)\)? \((1,5,4)\)?`,
  concepts: NOTES,
  summary: [
    S`\(\operatorname{Span}\{\vec v_i\}\) = all combinations; always a subspace.`,
    S`Solutions of \(A\vec x=\vec 0\) form a subspace; solving writes it as a span (one vector per free variable).`,
    S`\(\vec b\in\operatorname{Span}\iff[\,\vec v_1\ \cdots\ \vec v_k\mid\vec b\,]\) consistent.`,
    S`General \(\vec b\) + row reduction \(\Rightarrow\) equations for the span.`,
    S`Redundant vectors can be removed without changing the span.`,
  ],
  tips: ["The spanning vectors go in the columns of the matrix.", "Check coefficients by recombining the vectors.", "One free variable per spanning vector of a solution space.", "For a plane in \\(\\mathbb R^3\\), the cross product of two spanning vectors gives the normal.", "A span always contains \\(\\vec 0\\) and is never empty."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
