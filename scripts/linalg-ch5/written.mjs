// LINALG1 chapter 5 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution (every row operation followed by the whole matrix) with the marks per part.
//   node scripts/linalg-ch5/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch5/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen5.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "5.1 Subspaces and the Subspace Test", 2: "5.2 Spans and Solution Sets as Subspaces", 3: "5.3 Bases of a Subspace", 4: "5.4 Dimension",
  5: "5.5 Orthogonal and Orthonormal Bases", 6: "5.6 Null Space, Column Space and Row Space", 7: "5.7 Bases for the Fundamental Subspaces and the Rank–Nullity Theorem",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;

// systems used below; CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  span21: [[1, 0, 1], [2, 1, 1], [1, -1, 2]],
  span22: [[1, 0, 1], [2, 1, 1], [1, -1, 5]],
  null22: [[1, 2, -1, 1, 0], [2, 4, 0, 4, 0]],
  basis3: [[1, 2, 0, 1], [0, 1, 1, 1], [1, 1, -1, 1], [2, 3, -1, 1]],
  dim4: [[1, 2, 1, 3], [2, 1, -1, 3], [1, 0, -1, 1]],
  orth5: [[1, 1, 1], [1, -1, 0]],
  null6: [[1, 2, -1], [2, 1, 1]],
  row6: [[1, 2, 4], [2, 1, 5], [-1, 1, -1]],
  fund7: [[1, -2, 0, 3], [2, -4, 1, 7], [-1, 2, 1, -2]],
};
const CHECK = [["span21", [1, -1]], ["null22", [-2, 1, 0, 0]], ["null22", [-2, 0, -1, 1]], ["row6", [2, 1]], ["null6", [-1, 1, 1]],
  ["fund7", [2, 1, 0, 0]], ["fund7", [-3, 0, -1, 1]], ["orth5", [1, 1, -2]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let $S=\{\vec x\in\mathbb R^3: x_1-3x_2+x_3=0\}$. (a) Prove that $S$ is a subspace using the subspace test. (b) Give two different nonzero vectors of $S$ and check that their sum is in $S$. (c) Describe $S$ geometrically.`,
    S`(a) $\vec 0$: $0-0+0=0$. If $x_1-3x_2+x_3=0$ and $y_1-3y_2+y_3=0$, then $(x_1+y_1)-3(x_2+y_2)+(x_3+y_3)=0+0=0$; and $cx_1-3cx_2+cx_3=c\cdot0=0$. So $S$ is a subspace. (b) e.g. $(3,1,0)$ and $(-1,0,1)$; sum $(2,1,1)$: $2-3+1=0$ ✓. (c) The plane through $\vec 0$ with normal $(1,-3,1)$. [2, 1, 1.]`,
    F.plane([3, 1, 0], [-1, 0, 1], { lu: "(3, 1, 0)", lv: "(−1, 0, 1)", more: [[[2, 1, 1], "sum", "green"]] })),
  W(1, "hard", 5, S`(a) Show that $\{(x,y): xy\ge0\}$ is not a subspace of $\mathbb R^2$. (b) For which $c$ is $\{\vec x\in\mathbb R^3: x_1+x_2=c,\ x_3=c^2+c\}$ a subspace? (c) Prove that the intersection of two subspaces of $\mathbb R^n$ is a subspace.`,
    S`(a) $(1,0)$ and $(0,-1)$ are in it ($0\ge0$), but their sum $(1,-1)$ has $xy=-1\lt0$. (b) $\vec 0$ requires $c=0$ and $c^2+c=0$: $c=0$ (then both conditions are homogeneous). (c) $\vec 0$ is in both; if $\vec x,\vec y$ are in both, so are $\vec x+\vec y$ and $c\vec x$ by closure of each subspace. [1, 2, 2.]`,
    F.set("quad", { view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 }, arrows: [[[1, 0], "(1, 0)", "blue"], [[0, -1], "(0, −1)", "red"], [[1, -1], "sum", "green"]] })),
  W(2, "medium", 4, S`Let $\vec v_1=(1,2,1)$, $\vec v_2=(0,1,-1)$. (a) Is $(1,1,2)$ in $\operatorname{Span}\{\vec v_1,\vec v_2\}$? Show every matrix and give the coefficients. (b) Is $(1,1,5)$? (c) Describe the span.`,
    S`(a) ${stepsLine(SYS.span21)} Consistent: $c_2=-1$, $c_1=1$: $(1,1,2)=\vec v_1-\vec v_2$ ✓. (b) ${stepsLine(SYS.span22)} The last row reads 0 = 3: not in the span. (c) A plane through $\vec 0$ (two non-parallel vectors), with normal $\vec v_1\times\vec v_2=(-3,1,1)$: $-3x_1+x_2+x_3=0$. [2, 1, 1.]`,
    F.plane([1, 2, 1], [0, 1, -1], { lu: "v₁", lv: "v₂", more: [[[1, 1, 2], "(1, 1, 2)", "green"], [[1, 1, 5], "(1, 1, 5)", "amber"]], len: 4.5 })),
  W(2, "hard", 5, S`(a) Write the solution set of $x_1+2x_2-x_3+x_4=0,\ 2x_1+4x_2+4x_4=0$ as a span, showing every matrix. (b) Find a homogeneous equation describing $\operatorname{Span}\{(1,1,0),(1,0,2)\}$ by row reducing with a general $\vec b$.`,
    S`(a) ${stepsLine(SYS.null22)} Free $x_2=s$, $x_4=t$: $x_1=-2s-2t$, $x_3=-t$; the span of $(-2,1,0,0)$ and $(-2,0,-1,1)$. (b) Reduce $${am([[1, 1, "b_1"], [1, 0, "b_2"], [0, 2, "b_3"]])}$: $R_2\to R_2-R_1$ gives $(0,-1\mid b_2-b_1)$; $R_3\to R_3+2R_2$ gives $(0,0\mid b_3+2b_2-2b_1)$. So $2b_1-2b_2-b_3=0$. Check: $(1,1,0)$: $0$ ✓; $(1,0,2)$: $2-2=0$ ✓. [3, 2.]`,
    F.plane([1, 1, 0], [1, 0, 2], { lu: "(1, 1, 0)", lv: "(1, 0, 2)" })),
  W(3, "medium", 4, S`(a) Find a basis of the plane $2x_1+x_2-3x_3=0$. (b) Prove your vectors are independent. (c) Find the coordinates of $(2,-1,1)$ in your basis.`,
    S`(a) $x_2=-2x_1+3x_3$: $\vec x=s(1,-2,0)+t(0,3,1)$; basis $\{(1,-2,0),(0,3,1)\}$. (b) $s(1,-2,0)+t(0,3,1)=\vec 0$: entry 1 gives $s=0$, entry 3 gives $t=0$. (c) $(2,-1,1)=s(1,-2,0)+t(0,3,1)$: $s=2$, $t=1$, check entry 2: $-4+3=-1$ ✓. Coordinates $(2,1)$. [2, 1, 1.]`,
    F.plane([1, -2, 0], [0, 3, 1], { lu: "(1, −2, 0)", lv: "(0, 3, 1)", more: [[[2, -1, 1], "x", "green"]], len: 3.5 })),
  W(3, "hard", 5, S`Let $\vec v_1=(1,0,1,2)$, $\vec v_2=(2,1,1,3)$, $\vec v_3=(0,1,-1,-1)$, $\vec v_4=(1,1,1,1)$. (a) Row reduce the matrix with these columns, showing every matrix. (b) Give a basis of their span and its dimension. (c) Write the redundant vector as a combination of the others.`,
    S`(a) ${stepsLine(SYS.basis3, { aug: false })} (b) Pivots in columns 1, 2, 4: basis $\{\vec v_1,\vec v_2,\vec v_4\}$, dimension 3. (c) Column 3 of the RREF is $(-2,1,0,0)$: $\vec v_3=-2\vec v_1+\vec v_2$; check: $(-2,0,-2,-4)+(2,1,1,3)=(0,1,-1,-1)$ ✓. [2, 2, 1.]`,
    F.v3([[[1, 0, 1], "v₁ (first 3 entries)"], [[2, 1, 1], "v₂"], [[0, 1, -1], "v₃", "green"]], { plane: [[1, 0, 1], [2, 1, 1], 0.7] })),
  W(4, "medium", 4, S`Let $\vec u_1=(1,2,1)$, $\vec u_2=(2,1,0)$, $\vec u_3=(1,-1,-1)$, $\vec u_4=(3,3,1)$. (a) Without computing, explain why they are dependent. (b) Find the dimension of their span, showing the row reduction. (c) Describe the span geometrically.`,
    S`(a) Four vectors in $\mathbb R^3$, and $\dim\mathbb R^3=3\lt4$. (b) ${stepsLine(SYS.dim4, { aug: false, jordan: false })} Two pivots: dimension 2. ($\vec u_3=\vec u_2-\vec u_1$, $\vec u_4=\vec u_1+\vec u_2$.) (c) A plane through $\vec 0$, spanned by $\vec u_1,\vec u_2$. [1, 2, 1.]`,
    F.v3([[[1, 2, 1], "u₁"], [[2, 1, 0], "u₂"], [[3, 3, 1], "u₄", "green"]], { plane: [[1, 2, 1], [2, 1, 0], 0.8] })),
  W(4, "hard", 5, S`(a) For which $k$ is $\dim\operatorname{Span}\{(1,2,k),(0,1,1),(k,1,0)\}\lt3$? Show the reduction with $k$ kept as a letter. (b) Prove that two 2-dimensional subspaces of $\mathbb R^3$ always have a nonzero vector in common.`,
    S`(a) Columns $${am([[1, 0, "k"], [2, 1, 1], ["k", 1, 0]], false)}$; $R_2\to R_2-2R_1$, $R_3\to R_3-kR_1$: rows $(0,1,1-2k)$, $(0,1,-k^2)$; $R_3\to R_3-R_2$: $(0,0,-k^2-1+2k)=(0,0,-(k-1)^2)$. Dimension $\lt3$ exactly when $k=1$. (b) Take bases $\{\vec u_1,\vec u_2\}$ and $\{\vec w_1,\vec w_2\}$: four vectors in $\mathbb R^3$ are dependent, $a\vec u_1+b\vec u_2=c\vec w_1+d\vec w_2$ with not all zero; the left side is nonzero (else $a=b=0$ and then $c=d=0$), and it lies in both. [3, 2.]`,
    F.plane([1, 0, 0], [0, 1, 1], { lu: "", lv: "", line: [1, 2, 2] })),
  W(5, "medium", 4, S`$\mathcal B=\{(1,2,1),(1,-1,1),(1,0,-1)\}$. (a) Show $\mathcal B$ is an orthogonal basis of $\mathbb R^3$. (b) Find the coordinates of $\vec x=(4,5,-2)$ with the dot-product formula. (c) Normalise $\mathcal B$.`,
    S`(a) $1-2+1=0$, $1+0-1=0$, $1+0-1=0$; nonzero orthogonal vectors are independent, and 3 in $\mathbb R^3$ form a basis. (b) $c_1=\tfrac{4+10-2}{6}=2$, $c_2=\tfrac{4-5-2}{3}=-1$, $c_3=\tfrac{4+0+2}{2}=3$; check $2(1,2,1)-(1,-1,1)+3(1,0,-1)=(4,5,-2)$ ✓. (c) $\tfrac1{\sqrt6}(1,2,1)$, $\tfrac1{\sqrt3}(1,-1,1)$, $\tfrac1{\sqrt2}(1,0,-1)$. [1, 2, 1.]`,
    F.v3([[[1, 2, 1], "v₁"], [[1, -1, 1], "v₂"], [[1, 0, -1], "v₃"]])),
  W(5, "hard", 5, S`(a) Find a vector $\vec v_3$ orthogonal to $(1,1,1)$ and $(1,-1,0)$ by solving a homogeneous system, showing every matrix. (b) Give the resulting orthonormal basis of $\mathbb R^3$. (c) Prove that for an orthonormal basis, $\|\vec x\|^2$ is the sum of the squares of the coordinates.`,
    S`(a) Solve $x_1+x_2+x_3=0$, $x_1-x_2=0$: ${stepsLine(SYS.orth5, { aug: false })} $x_3=t$: $x_1=x_2=-\tfrac t2$; take $\vec v_3=(1,1,-2)$. (b) $\tfrac1{\sqrt3}(1,1,1)$, $\tfrac1{\sqrt2}(1,-1,0)$, $\tfrac1{\sqrt6}(1,1,-2)$. (c) $\|\vec x\|^2=\big(\sum c_i\vec w_i\big)\cdot\big(\sum c_j\vec w_j\big)=\sum_{i,j}c_ic_j\,\vec w_i\cdot\vec w_j=\sum c_i^2$, since $\vec w_i\cdot\vec w_j$ is 1 if $i=j$ and 0 otherwise. [2, 1, 2.]`,
    F.v3([[[1, 1, 1], "(1, 1, 1)"], [[1, -1, 0], "(1, −1, 0)"], [[1, 1, -2], "v₃", "green"]])),
  W(6, "medium", 4, S`Let $A=${am(SYS.null6, false)}$. (a) Find $\operatorname{Null}A$, showing every matrix. (b) Describe $\operatorname{Col}A$. (c) Is $(4,5,-1)$ in $\operatorname{Row}A$? (d) Check that your null vector is orthogonal to the rows.`,
    S`(a) ${stepsLine(SYS.null6, { aug: false })} $x_3=t$: $\operatorname{Null}A=\operatorname{Span}\{(-1,1,1)\}$. (b) Two pivots in 2 rows: $\operatorname{Col}A=\mathbb R^2$. (c) Solve $[A^T\mid\vec y]$: ${stepsLine(SYS.row6)} Consistent: $(4,5,-1)=2(1,2,-1)+(2,1,1)$ ✓. (d) $-1+2-1=0$, $-2+1+1=0$ ✓. [1.5, 0.5, 1.5, 0.5.]`,
    F.plane([1, 2, -1], [2, 1, 1], { lu: "row 1", lv: "row 2", line: [-1, 1, 1], fill: "#ede9fe", edge: "violet" })),
  W(6, "hard", 5, S`Let $A=${am([[1, 1], [2, 0], [1, 3]], false)}$. (a) Find an equation for $\operatorname{Col}A$ by row reducing $[A\mid\vec b]$. (b) For which $h$ is $A\vec x=(2,h,4)$ consistent? Solve it for that $h$. (c) Prove that $A\vec x=\vec b$ is consistent if and only if $\vec b\in\operatorname{Col}A$.`,
    S`(a) $${am([[1, 1, "b_1"], [2, 0, "b_2"], [1, 3, "b_3"]])}$: $R_2\to R_2-2R_1$, $R_3\to R_3-R_1$: rows $(0,-2\mid b_2-2b_1)$, $(0,2\mid b_3-b_1)$; $R_3\to R_3+R_2$: $(0,0\mid b_3+b_2-3b_1)$. So $3b_1-b_2-b_3=0$. (b) $3(2)-h-4=0$: $h=2$. Then $x_1+x_2=2$ and $2x_1=2$ give $x_1=1$, $x_2=1$; check row 3: $1+3=4$ ✓. (c) $A\vec x=x_1\vec a_1+x_2\vec a_2$, so a solution is exactly a set of coefficients writing $\vec b$ as a combination of the columns. [2, 2, 1.]`,
    F.plane([1, 2, 1], [1, 0, 3], { lu: "a₁", lv: "a₂", more: [[[2, 2, 4], "(2, 2, 4)", "green"]], len: 4.5 })),
  W(7, "medium", 5, S`Let $A=${am(SYS.fund7, false)}$. (a) Row reduce $A$, showing every matrix. (b) Give bases of $\operatorname{Null}A$, $\operatorname{Col}A$ and $\operatorname{Row}A$. (c) Verify the rank–nullity theorem.`,
    S`(a) ${stepsLine(SYS.fund7, { aug: false })} (b) Pivots in columns 1 and 3. Null: $x_2=s$, $x_4=t$, $x_1=2s-3t$, $x_3=-t$: $\{(2,1,0,0),(-3,0,-1,1)\}$. Col: columns 1, 3 of $A$: $\{(1,2,-1),(0,1,1)\}$. Row: $\{(1,-2,0,3),(0,0,1,1)\}$. (c) rank 2 + nullity 2 = 4 = number of columns ✓. [2, 2, 1.]`,
    F.plane([1, 2, -1], [0, 1, 1], { lu: "a₁", lv: "a₃" })),
  W(7, "hard", 5, S`Let $A=${am([[1, 2, 1], [2, "k", 2], [1, 2, "k"]], false)}$. (a) Reduce $A$ with $k$ kept as a letter. (b) Find the rank and nullity for every $k$. (c) For which $k$ is $A\vec x=\vec b$ uniquely solvable for every $\vec b$? (d) Prove the rank–nullity theorem.`,
    S`(a) $R_2\to R_2-2R_1$, $R_3\to R_3-R_1$: $${am([[1, 2, 1], [0, "k-4", 0], [0, 0, "k-1"]], false)}$. (b) $k\ne1,4$: rank 3, nullity 0. $k=4$ or $k=1$: rank 2, nullity 1. (c) Exactly when rank $=3$: $k\ne1$ and $k\ne4$. (d) In the RREF each of the $n$ columns is a pivot column (counted by the rank) or a free column (one null-space basis vector each). [1, 2, 1, 1.]`,
    F.line([1, 0, -1], { label: "Null A when k = 1" })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  let bad = 0;
  for (const [k, x] of CHECK) {
    const rows = SYS[k], aug = rows[0].length === x.length ? rows.map((r) => [...r, 0]) : rows;
    if (!solves(aug, x)) { bad++; console.log(`FAIL: ${x} does not solve ${k}`); }
  }
  if (bad) process.exit(1);
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "LINALG1").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures; all solutions check`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  for (const w of todo) {
    const key = `linalg1-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
