// LINALG1 chapter 4 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution (every row operation followed by the whole matrix) with the marks per part.
//   node scripts/linalg-ch4/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch4/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen4.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "4.1 Linear Combinations and Span", 2: "4.2 Spanning Sets of ℝⁿ", 3: "4.3 Linear Dependence and Independence",
  4: "4.4 Independence: Theorems and Geometry", 5: "4.5 Dependence Relations and Reducing a Spanning Set", 6: "4.6 Bases of ℝⁿ", 7: "4.7 Coordinates with Respect to a Basis",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const M = (m) => am(m, false);

// systems used below; CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  span1: [[1, 0, 2], [1, 1, 5], [0, 2, 6]],
  span1n: [[1, 0, 3], [1, 1, 4], [0, 2, 1]],
  sp3: [[1, 2, 1], [2, 1, -1], [1, 1, 0]],
  ind5: [[1, 0, 2], [1, 1, 5], [2, 3, 13]],
  cnt4: [[1, 0, 1, 3], [0, 1, 1, 2], [1, 1, 0, 3]],
  red5: [[1, 2, 0, 1, 1], [2, 4, 1, 3, 0], [0, 0, 1, 1, 1]],
  bas6: [[1, 0, 1, 3], [1, 1, 0, 2], [2, 1, 2, 7]],
  crd7: [[2, 1, 5], [1, -1, 1]],
};
const CHECK = [["span1", [2, 3]], ["sp3", [1, -1, 1]], ["ind5", [2, 3, -1]], ["cnt4", [2, 1, 1, -1]], ["red5", [2, -1, 0, 0, 0]], ["red5", [1, 0, 1, -1, 0]], ["bas6", [1, 1, 2]], ["crd7", [2, 1]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let \(\vec v_1=(1,1,0)\), \(\vec v_2=(0,1,2)\). (a) Is \((2,5,6)\in\operatorname{Span}\{\vec v_1,\vec v_2\}\)? Show every matrix and give the weights. (b) Is \((3,4,1)\)? (c) Describe the span geometrically.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) ${stepsLine(SYS.span1)} Consistent: \(c_1=2\), \(c_2=3\); check \(2(1,1,0)+3(0,1,2)=(2,5,6)\) ✓. (b) ${stepsLine(SYS.span1n)} The last row reads 0 = nonzero: not in the span. (c) A plane through \(\vec 0\) with normal \(\vec v_1\times\vec v_2=(2,-2,1)\): \(2x_1-2x_2+x_3=0\). [2, 1, 1.]`.replace(/\\\(|\\\)/g, "$"),
    F.plane([1, 1, 0], [0, 1, 2], { lu: "v₁", lv: "v₂", more: [[[2, 5, 6], "(2, 5, 6)", "green"]], len: 6 })),
  W(1, "hard", 5, S`(a) For which \(h\) is \((1,h,4)\in\operatorname{Span}\{(1,2,1),(0,1,3)\}\)? (b) Prove \(\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u-\vec v,\ \vec u+2\vec v\}\).`.replace(/\\\(|\\\)/g, "$"),
    S`(a) \(c_1(1,2,1)+c_2(0,1,3)=(c_1,\ 2c_1+c_2,\ c_1+3c_2)\). Entry 1: \(c_1=1\); entry 3: \(1+3c_2=4\), \(c_2=1\); entry 2: \(h=2+1=3\). (b) \(\supseteq\): \(\vec u-\vec v\) and \(\vec u+2\vec v\) are combinations of \(\vec u,\vec v\). \(\subseteq\): \(\vec v=\tfrac13[(\vec u+2\vec v)-(\vec u-\vec v)]\) and \(\vec u=(\vec u-\vec v)+\vec v\), so \(\vec u,\vec v\) are combinations of the new pair, hence so is every \(a\vec u+b\vec v\). [2, 3.]`.replace(/\\\(|\\\)/g, "$"),
    F.plane([1, 2, 1], [0, 1, 3], { lu: "(1, 2, 1)", lv: "(0, 1, 3)" })),
  W(2, "medium", 4, S`Let \(\vec v_1=(1,2,1)\), \(\vec v_2=(2,1,1)\), \(\vec v_3=(1,-1,0)\). (a) Do they span \(\mathbb R^3\)? Show every matrix. (b) Find an equation of their span.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Vectors as columns: ${stepsLine(SYS.sp3, { aug: false, jordan: false })} Only two pivots: they do not span \(\mathbb R^3\) (indeed \(\vec v_3=\vec v_2-\vec v_1\)). (b) Reduce \([\,\vec v_1\ \vec v_2\mid\vec b\,]\): \(R_2-2R_1\) gives \((0,-3\mid b_2-2b_1)\), \(R_3-R_1\) gives \((0,-1\mid b_3-b_1)\); then \(R_2-3R_3\) gives \((0,0\mid b_2-2b_1-3b_3+3b_1)=(0,0\mid b_1+b_2-3b_3)\). Equation \(x_1+x_2-3x_3=0\); check \(1+2-3=0\) ✓, \(2+1-3=0\) ✓. [2, 2.]`.replace(/\\\(|\\\)/g, "$"),
    F.plane([1, 2, 1], [2, 1, 1], { lu: "v₁", lv: "v₂", more: [[[1, -1, 0], "v₃", "green"]] })),
  W(2, "hard", 5, S`(a) For which \(k\) do \((1,0,k)\), \((1,1,1)\), \((0,1,2)\) span \(\mathbb R^3\)? (b) Prove that if the columns of an \(m\times n\) matrix span \(\mathbb R^m\), then \(m\le n\).`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Columns \(${M([[1, 1, 0], [0, 1, 1], ["k", 1, 2]])}\). \(R_3-kR_1\): \((0,\ 1-k,\ 2)\). \(R_3-(1-k)R_2\): \((0,\ 0,\ 2-(1-k))=(0,0,1+k)\). Three pivots \(\iff k\ne-1\). (b) Spanning needs a pivot in each of the \(m\) rows; each pivot lies in a different column, so there are at most \(n\) pivots: \(m\le n\). [3, 2.]`.replace(/\\\(|\\\)/g, "$"),
    F.v3([[[1, 0, 2], "(1, 0, k)"], [[1, 1, 1], "(1, 1, 1)"], [[0, 1, 2], "(0, 1, 2)"]])),
  W(3, "medium", 4, S`Test \(\vec v_1=(1,1,2)\), \(\vec v_2=(0,1,3)\), \(\vec v_3=(2,5,13)\) for linear independence. If dependent, find a relation and check it.`.replace(/\\\(|\\\)/g, "$"),
    S`Vectors as columns: ${stepsLine(SYS.ind5, { aug: false })} Column 3 has no pivot: dependent. From the RREF, \(\vec v_3=2\vec v_1+3\vec v_2\), i.e. \(2\vec v_1+3\vec v_2-\vec v_3=\vec 0\). Check: \((2,2,4)+(0,3,9)-(2,5,13)=(0,0,0)\) ✓. [2, 1, 1.]`.replace(/\\\(|\\\)/g, "$"),
    F.plane([1, 1, 2], [0, 1, 3], { lu: "v₁", lv: "v₂", more: [[[2, 5, 13], "v₃", "green"]], len: 8 })),
  W(3, "hard", 5, S`(a) For which \(a\) is \(\{(1,a),(a,9)\}\) dependent? (b) Prove: if \(\{\vec u,\vec v,\vec w\}\) is independent, then \(\{\vec u,\ \vec u+\vec v,\ \vec v+\vec w\}\) is independent.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Columns \(${M([[1, "a"], ["a", 9]])}\); \(R_2-aR_1\) gives \((0,\ 9-a^2)\). Dependent \(\iff a^2=9\iff a=\pm3\). (b) Suppose \(x\vec u+y(\vec u+\vec v)+z(\vec v+\vec w)=\vec 0\), i.e. \((x+y)\vec u+(y+z)\vec v+z\vec w=\vec 0\). Independence gives \(z=0\), then \(y=0\), then \(x=0\). [2, 3.]`.replace(/\\\(|\\\)/g, "$"),
    F.v2([[[1, 3], "(1, 3)", "blue"], [[3, 9], "(3, 9)", "red", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 10 })),
  W(4, "medium", 4, S`Let \(\vec v_1=(1,0,1)\), \(\vec v_2=(0,1,1)\), \(\vec v_3=(1,1,0)\), \(\vec v_4=(3,2,3)\). (a) Explain without computing why they are dependent. (b) Find a dependence relation, showing every matrix. (c) Are \(\vec v_1,\vec v_2,\vec v_3\) a basis of \(\mathbb R^3\)?`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Four vectors in \(\mathbb R^3\): more than 3, so dependent. (b) ${stepsLine(SYS.cnt4, { aug: false })} Column 4 of the RREF is \((2,1,1)\): \(\vec v_4=2\vec v_1+\vec v_2+\vec v_3\); check \((2,0,2)+(0,1,1)+(1,1,0)=(3,2,3)\) ✓. (c) The first three columns carry three pivots: independent, three vectors in \(\mathbb R^3\), so a basis. [1, 2, 1.]`.replace(/\\\(|\\\)/g, "$"),
    F.v3([[[1, 0, 1], "v₁"], [[0, 1, 1], "v₂"], [[1, 1, 0], "v₃"], [[3, 2, 3], "v₄", "violet"]])),
  W(4, "hard", 5, S`(a) Prove: if \(\{\vec v_1,\dots,\vec v_k\}\) is independent and \(\vec w\notin\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\), then \(\{\vec v_1,\dots,\vec v_k,\vec w\}\) is independent. (b) Use (a) to extend \(\{(1,2,0)\}\) to three independent vectors in \(\mathbb R^3\).`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Let \(\sum c_i\vec v_i+d\vec w=\vec 0\). If \(d\ne0\), then \(\vec w=-\tfrac1d\sum c_i\vec v_i\) lies in the span — contradiction. So \(d=0\), and independence of the \(\vec v_i\) gives all \(c_i=0\). (b) \((0,0,1)\) is not a multiple of \((1,2,0)\): \(\{(1,2,0),(0,0,1)\}\) is independent, with span the plane \(2x_1-x_2=0\). \((1,0,0)\) gives \(2\ne0\), so it is outside; \(\{(1,2,0),(0,0,1),(1,0,0)\}\) is independent. [3, 2.]`.replace(/\\\(|\\\)/g, "$"),
    F.plane([1, 2, 0], [0, 0, 1], { lu: "(1, 2, 0)", lv: "(0, 0, 1)", more: [[[1, 0, 0], "(1, 0, 0)", "green"]] })),
  W(5, "medium", 4, S`Let \(\vec v_1=(1,2,0)\), \(\vec v_2=(2,4,0)\), \(\vec v_3=(0,1,1)\), \(\vec v_4=(1,3,1)\), \(\vec v_5=(1,0,1)\). (a) Row reduce \([\,\vec v_1\ \cdots\ \vec v_5\,]\), showing every matrix. (b) State the dependence relations. (c) Give an independent subset with the same span.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) ${stepsLine(SYS.red5, { aug: false })} (b) Pivots in columns 1, 3, 5. Column 2: \(\vec v_2=2\vec v_1\). Column 4: \(\vec v_4=\vec v_1+\vec v_3\); check \((1,2,0)+(0,1,1)=(1,3,1)\) ✓. (c) \(\{\vec v_1,\vec v_3,\vec v_5\}\) — three pivots, so the span is all of \(\mathbb R^3\). [2, 1, 1.]`.replace(/\\\(|\\\)/g, "$"),
    F.v3([[[1, 2, 0], "v₁"], [[0, 1, 1], "v₃"], [[1, 0, 1], "v₅"]])),
  W(5, "hard", 5, S`(a) Prove: \(\{\vec v_1,\dots,\vec v_k\}\) is dependent \(\iff\) some \(\vec v_i\) is a combination of the others. (b) Explain why removing such a vector leaves the span unchanged, and why a vector whose coefficient is 0 in every relation cannot be removed.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) ⇒: a relation \(\sum c_j\vec v_j=\vec 0\) with \(c_i\ne0\) gives \(\vec v_i=-\tfrac1{c_i}\sum_{j\ne i}c_j\vec v_j\). ⇐: \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\) gives the relation \(\sum_{j\ne i}a_j\vec v_j-\vec v_i=\vec 0\). (b) Substituting \(\vec v_i=\sum_{j\ne i}a_j\vec v_j\) turns every combination into one of the others. If \(\vec v_i\) were a combination of the others, (a)'s ⇐ would give a relation with coefficient \(-1\) on \(\vec v_i\); so a vector with coefficient 0 in every relation is not reachable without itself. [3, 2.]`.replace(/\\\(|\\\)/g, "$"),
    F.v2([[[1, 2], "(1, 2)", "blue"], [[2, 4], "(2, 4)", "red", null, true], [[1, 0], "(1, 0)", "green"]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 })),
  W(6, "medium", 4, S`(a) Show \(\mathcal B=\{(1,1,2),(0,1,1),(1,0,2)\}\) is a basis of \(\mathbb R^3\). (b) Write \((3,2,7)\) in this basis, showing every matrix.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Columns \(${M([[1, 0, 1], [1, 1, 0], [2, 1, 2]])}\): \(R_2-R_1\to(0,1,-1)\), \(R_3-2R_1\to(0,1,0)\), \(R_3-R_2\to(0,0,1)\). Three pivots: a basis. (b) ${stepsLine(SYS.bas6)} \((3,2,7)=1(1,1,2)+1(0,1,1)+2(1,0,2)\); check \((1+0+2,\ 1+1+0,\ 2+1+4)=(3,2,7)\) ✓. [2, 2.]`.replace(/\\\(|\\\)/g, "$"),
    F.v3([[[1, 1, 2], "b₁"], [[0, 1, 1], "b₂"], [[1, 0, 2], "b₃"]])),
  W(6, "hard", 5, S`(a) For which \(t\) is \(\{(1,t,0),(0,1,t),(1,0,1)\}\) a basis of \(\mathbb R^3\)? (b) Prove that every basis of \(\mathbb R^n\) has exactly \(n\) vectors.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Columns \(${M([[1, 0, 1], ["t", 1, 0], [0, "t", 1]])}\). \(R_2-tR_1\): \((0,\ 1,\ -t)\). \(R_3-tR_2\): \((0,\ 0,\ 1+t^2)\), never zero. So it is a basis for every \(t\). (b) A basis with \(k\) vectors gives an \(n\times k\) matrix with a pivot in every column (independent, so \(k\le n\)) and in every row (spanning, so \(n\le k\)). [2, 3.]`.replace(/\\\(|\\\)/g, "$"),
    F.v3([[[1, 1, 0], "(1, t, 0)"], [[0, 1, 1], "(0, 1, t)"], [[1, 0, 1], "(1, 0, 1)"]])),
  W(7, "medium", 4, S`\(\mathcal B=\{(2,1),(1,-1)\}\). (a) Find \([\vec x]_{\mathcal B}\) for \(\vec x=(5,1)\), showing every matrix. (b) Find \(\vec y\) with \([\vec y]_{\mathcal B}=(-1,3)\). (c) Find \([\vec x+\vec y]_{\mathcal B}\) without solving a system.`.replace(/\\\(|\\\)/g, "$"),
    S`(a) ${stepsLine(SYS.crd7)} \([\vec x]_{\mathcal B}=(2,1)\); check \(2(2,1)+(1,-1)=(5,1)\) ✓. (b) \(\vec y=-(2,1)+3(1,-1)=(1,-4)\). (c) Coordinates add: \((2,1)+(-1,3)=(1,4)\); check \(1(2,1)+4(1,-1)=(6,-3)=\vec x+\vec y\) ✓. [2, 1, 1.]`.replace(/\\\(|\\\)/g, "$"),
    F.v2([[[2, 1], "b₁", "blue"], [[1, -1], "b₂", "red"], [[5, 1], "x", "green"]], { xmin: -1, xmax: 6, ymin: -2, ymax: 2 })),
  W(7, "hard", 5, S`\(\mathcal B=\{(1,2),(1,3)\}\), \(\mathcal C=\{(1,1),(0,1)\}\). (a) If \([\vec x]_{\mathcal B}=(3,1)\), find \([\vec x]_{\mathcal C}\). (b) Prove that \([\vec x+\vec y]_{\mathcal B}=[\vec x]_{\mathcal B}+[\vec y]_{\mathcal B}\) for any basis \(\mathcal B\).`.replace(/\\\(|\\\)/g, "$"),
    S`(a) Rebuild: \(\vec x=3(1,2)+(1,3)=(4,9)\). In \(\mathcal C\): \(c_1(1,1)+c_2(0,1)=(4,9)\) gives \(c_1=4\), \(c_1+c_2=9\), \(c_2=5\). So \([\vec x]_{\mathcal C}=(4,5)\); check \(4(1,1)+5(0,1)=(4,9)\) ✓. (b) If \(\vec x=\sum c_i\vec b_i\) and \(\vec y=\sum d_i\vec b_i\), then \(\vec x+\vec y=\sum(c_i+d_i)\vec b_i\); by uniqueness of coordinates these weights are \([\vec x+\vec y]_{\mathcal B}\). [3, 2.]`.replace(/\\\(|\\\)/g, "$"),
    F.v2([[[1, 2], "b₁", "blue"], [[1, 3], "b₂", "red"], [[4, 9], "x", "green"]], { xmin: -1, xmax: 5, ymin: -1, ymax: 10 })),
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
