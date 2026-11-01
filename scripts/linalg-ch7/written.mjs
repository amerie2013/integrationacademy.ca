// LINALG1 chapter 7 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution in matrix form (every row operation followed by the whole matrix, every product written out
// entry by entry) with the marks per part.
//   node scripts/linalg-ch7/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch7/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen7.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "7.1 Matrix Transformations", 2: "7.2 Linear Transformations", 3: "7.3 The Standard Matrix", 4: "7.4 Geometric Transformations of the Plane",
  5: "7.5 Composition and Inverse Transformations", 6: "7.6 Kernel and Range; One-to-One and Onto", 7: "7.7 The Matrix of a Transformation Relative to a Basis",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt: prompt.replace(/\\\(|\\\)/g, "$"), feedback: feedback.replace(/\\\(|\\\)/g, "$"), kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const I = (A) => A.map((r, i) => [...r, ...A.map((_, j) => (i === j ? 1 : 0))]);

// systems used below; CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  t1: [[1, 2, 4], [2, 3, 7], [1, -1, 1]],
  t5: [[1, 2, 0, 5], [0, 1, 3, 4], [0, 0, 1, 1]],
  t6: [[1, 2, 1], [2, 4, 0], [3, 6, 1]],
};
const CHECK = [["t1", [2, 1]], ["t5", [3, 1, 1]], ["t6", [-2, 1, 0]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let \(T(\vec x)=A\vec x\) with \(A=${M([[1, 2], [2, 3], [1, -1]])}\). (a) State the domain and codomain and compute \(T(1,-1)\). (b) Find every \(\vec x\) with \(T(\vec x)=(4,7,1)\). (c) Is \((1,1,1)\) in the range of \(T\)?`,
    S`(a) \(A\) is \(3\times2\): \(T:\mathbb R^2\to\mathbb R^3\). \(${M([[1, 2], [2, 3], [1, -1]])}${C(1, -1)}=${C("1-2", "2-3", "1+1")}=${C(-1, -1, 2)}\). (b) ${stepsLine(SYS.t1)} So \(\vec x=(2,1)\), the only input; check \(${M([[1, 2], [2, 3], [1, -1]])}${C(2, 1)}=${C("2+2", "4+3", "2-1")}=${C(4, 7, 1)}\) ✓. (c) ${stepsLine([[1, 2, 1], [2, 3, 1], [1, -1, 1]])} The last row is impossible, so \((1,1,1)\) is not in the range. [1, 2, 1.]`,
    F.mat([[1, 2], [2, 3], [1, -1]], { label: "A (3 × 2)" })),
  W(1, "hard", 5, S`(a) For which \(h\) is \((1,h,2)\) in the range of \(T(\vec x)=${M([[1, 1], [1, 2], [2, 3]])}\vec x\)? (b) Find the image of the unit square under \(${M([[2, 1], [1, 3]])}\) using one product \(AP\), and its area.`,
    S`(a) \[${am([[1, 1, 1], [1, 2, "h"], [2, 3, 2]])}\xrightarrow{R_2\to R_2-R_1,\ R_3\to R_3-2R_1}${am([[1, 1, 1], [0, 1, "h-1"], [0, 1, 0]])}\xrightarrow{R_3\to R_3-R_2}${am([[1, 1, 1], [0, 1, "h-1"], [0, 0, "1-h"]])}.\] Consistent \(\iff h=1\). (b) \(${M([[2, 1], [1, 3]])}${M([[0, 1, 0, 1], [0, 0, 1, 1]])}=${M([[0, 2, 1, 3], [0, 1, 3, 4]])}\): corners \((0,0),(2,1),(1,3),(3,4)\); area \(|2(3)-1(1)|=5\). [3, 2.]`,
    F.sq([[2, 1], [1, 3]])),
  W(2, "medium", 4, S`(a) Prove that \(T(x_1,x_2,x_3)=(x_1+x_3,\ 2x_2-x_3)\) is linear, and verify \(T(\vec u+\vec v)=T(\vec u)+T(\vec v)\) for \(\vec u=(1,0,1)\), \(\vec v=(0,2,1)\). (b) Show that \(T(x_1,x_2)=(x_1,\ x_1x_2)\) is not linear.`,
    S`(a) \(T(\vec x)=${M([[1, 0, 1], [0, 2, -1]])}\vec x=A\vec x\), and \(A(\vec u+\vec v)=A\vec u+A\vec v\), \(A(c\vec u)=cA\vec u\). \(A\vec u=${C("1+0+1", "0+0-1")}=${C(2, -1)}\), \(A\vec v=${C("0+0+1", "0+4-1")}=${C(1, 3)}\), \(A(\vec u+\vec v)=A${C(1, 2, 2)}=${C("1+0+2", "0+4-2")}=${C(3, 2)}=${C(2, -1)}+${C(1, 3)}\) ✓. (b) \(T(2(1,1))=T(2,2)=(2,4)\) but \(2T(1,1)=2(1,1)=(2,2)\). [2, 2.]`,
    F.mat([[1, 0, 1], [0, 2, -1]], { label: "A" })),
  W(2, "hard", 5, S`\(T:\mathbb R^2\to\mathbb R^2\) is linear with \(T(1,1)=(4,1)\) and \(T(1,2)=(5,3)\). (a) Find the standard matrix of \(T\) and check it. (b) Compute \(T(3,-1)\). (c) Explain why the data determine \(T\).`,
    S`(a) \(AU=W\) with \(U=${M([[1, 1], [1, 2]])}\), \(W=${M([[4, 5], [1, 3]])}\); \(\det U=1\), \(U^{-1}=${M([[2, -1], [-1, 1]])}\). \(A=WU^{-1}=${M([[4, 5], [1, 3]])}${M([[2, -1], [-1, 1]])}=${M([["8-5", "-4+5"], ["2-3", "-1+3"]])}=${M([[3, 1], [-1, 2]])}\). Check \(AU=${M([["3+1", "3+2"], ["-1+2", "-1+4"]])}=W\) ✓. (b) \(${M([[3, 1], [-1, 2]])}${C(3, -1)}=${C("9-1", "-3-2")}=${C(8, -5)}\). (c) \((1,1)\), \((1,2)\) form a basis, so every \(\vec x\) is a combination of them and superposition fixes \(T(\vec x)\). [3, 1, 1.]`,
    F.v2([[[1, 1], "(1, 1)", "blue"], [[1, 2], "(1, 2)", "red"]], { xmin: -1, xmax: 2, ymin: -1, ymax: 3 })),
  W(3, "medium", 4, S`(a) Find the standard matrix of \(T(x_1,x_2,x_3)=(x_2-x_3,\ 4x_1,\ x_1+x_2+x_3)\). (b) Use it to compute \(T(1,2,3)\). (c) State the size of the matrix and why.`,
    S`(a) \(T(\vec e_1)=(0,4,1)\), \(T(\vec e_2)=(1,0,1)\), \(T(\vec e_3)=(-1,0,1)\): \(A=${M([[0, 1, -1], [4, 0, 0], [1, 1, 1]])}\). (b) \(${M([[0, 1, -1], [4, 0, 0], [1, 1, 1]])}${C(1, 2, 3)}=${C("0+2-3", "4+0+0", "1+2+3")}=${C(-1, 4, 6)}\). (c) \(3\times3\): three outputs (rows), three inputs (columns). [2, 1, 1.]`,
    F.mat([[0, 1, -1], [4, 0, 0], [1, 1, 1]], { label: "A" })),
  W(3, "hard", 5, S`\(T\) is linear with \(T(1,0,0)=(1,1)\), \(T(1,1,0)=(2,0)\), \(T(1,1,1)=(0,3)\). Find the standard matrix (a) by differences of the data and (b) as \(WU^{-1}\), showing the reduction of \([U\mid I]\).`,
    S`(a) \(T(\vec e_1)=(1,1)\); \(T(\vec e_2)=T(1,1,0)-T(1,0,0)=(1,-1)\); \(T(\vec e_3)=T(1,1,1)-T(1,1,0)=(-2,3)\): \(A=${M([[1, 1, -2], [1, -1, 3]])}\). (b) ${stepsLine(I([[1, 1, 1], [0, 1, 1], [0, 0, 1]]), { aug: 3, cols: 3 })} \(U^{-1}=${M([[1, -1, 0], [0, 1, -1], [0, 0, 1]])}\); \(WU^{-1}=${M([[1, 2, 0], [1, 0, 3]])}${M([[1, -1, 0], [0, 1, -1], [0, 0, 1]])}=${M([["1", "-1+2", "-2+0"], ["1", "-1+0", "0+3"]])}=${M([[1, 1, -2], [1, -1, 3]])}\) ✓. [2, 3.]`,
    F.mat([[1, 1, 1], [0, 1, 1], [0, 0, 1]], { label: "U" })),
  W(4, "medium", 4, S`Let \(L\) be the line \(x_2=-2x_1\). (a) Find the matrices \(P\) of the projection onto \(L\) and \(R\) of the reflection in \(L\). (b) Compute \(P\vec x\) and \(R\vec x\) for \(\vec x=(5,5)\) and check that \(P\vec x\) is their midpoint.`,
    S`(a) \(m=-2\), \(1+m^2=5\): \(P=\tfrac15${M([[1, -2], [-2, 4]])}\), \(R=2P-I=\tfrac15${M([["2-5", -4], [-4, "8-5"]])}=\tfrac15${M([[-3, -4], [-4, 3]])}\). (b) \(P${C(5, 5)}=\tfrac15${C("5-10", "-10+20")}=${C(-1, 2)}\); \(R${C(5, 5)}=\tfrac15${C("-15-20", "-20+15")}=${C(-7, -1)}\). Midpoint \(\tfrac12\big(${C(5, 5)}+${C(-7, -1)}\big)=${C(-1, 2)}\) ✓. [2, 2.]`,
    F.v2([[[5, 5], "x", "blue"], [[-1, 2], "Px", "violet"], [[-7, -1], "Rx", "red"]], { xmin: -8, xmax: 6, ymin: -4, ymax: 6 }, { segs: [{ pts: [[-2, 4], [2, -4]], color: "green", w: 2.4 }] })),
  W(4, "hard", 5, S`Let \(A=\tfrac15${M([[4, -3], [3, 4]])}\). (a) Show that \(A^TA=I\) and \(\det A=1\). (b) Identify the map and its angle (to 0.01°). (c) Find \(A^{-1}\) and the image of \((5,0)\).`,
    S`(a) \(A^TA=\tfrac1{25}${M([[4, 3], [-3, 4]])}${M([[4, -3], [3, 4]])}=\tfrac1{25}${M([["16+9", "-12+12"], ["-12+12", "9+16"]])}=I\); \(\det A=\tfrac1{25}(16+9)=1\). (b) A rotation \(R_\theta\) with \(\cos\theta=\tfrac45\), \(\sin\theta=\tfrac35\): \(\theta\approx36.87^\circ\). (c) \(A^{-1}=A^T=\tfrac15${M([[4, 3], [-3, 4]])}\); \(A${C(5, 0)}=\tfrac15${C(20, 15)}=${C(4, 3)}\). [2, 2, 1.]`,
    F.sq([[0.8, -0.6], [0.6, 0.8]])),
  W(5, "medium", 4, S`\(T\) rotates the plane by \(90^\circ\) and \(S\) projects onto the \(x_1\)-axis. (a) Find the matrices of \(S\circ T\) and \(T\circ S\). (b) Apply both to \((1,2)\). (c) Is either invertible?`,
    S`(a) \(A=${M([[0, -1], [1, 0]])}\), \(B=${M([[1, 0], [0, 0]])}\). \(BA=${M([["0+0", "-1+0"], ["0+0", "0+0"]])}=${M([[0, -1], [0, 0]])}\); \(AB=${M([["0+0", "0+0"], ["1+0", "0+0"]])}=${M([[0, 0], [1, 0]])}\). (b) \(BA${C(1, 2)}=${C(-2, 0)}\), \(AB${C(1, 2)}=${C(0, 1)}\). (c) Neither: both have determinant 0 (each contains the projection). [2, 1, 1.]`,
    F.sq([[0, -1], [0, 0]])),
  W(5, "hard", 5, S`(a) Find \(T^{-1}\) for \(T(\vec x)=${M([[1, 2, 0], [0, 1, 3], [0, 0, 1]])}\vec x\) by row reducing \([A\mid I]\). (b) Solve \(T(\vec x)=(5,4,1)\) and check. (c) Prove \((S\circ T)^{-1}=T^{-1}\circ S^{-1}\).`,
    S`(a) ${stepsLine(I([[1, 2, 0], [0, 1, 3], [0, 0, 1]]), { aug: 3, cols: 3 })} \(A^{-1}=${M([[1, -2, 6], [0, 1, -3], [0, 0, 1]])}\). (b) \(\vec x=A^{-1}${C(5, 4, 1)}=${C("5-8+6", "4-3", "1")}=${C(3, 1, 1)}\); check \(${M([[1, 2, 0], [0, 1, 3], [0, 0, 1]])}${C(3, 1, 1)}=${C("3+2", "1+3", "1")}=${C(5, 4, 1)}\) ✓. (c) \((BA)(A^{-1}B^{-1})=B(AA^{-1})B^{-1}=I\) and \((A^{-1}B^{-1})(BA)=I\). [2, 1, 2.]`,
    F.mat([[1, 2, 0], [0, 1, 3], [0, 0, 1]], { label: "A" })),
  W(6, "medium", 4, S`For \(A=${M([[1, 2, 1], [2, 4, 0], [3, 6, 1]])}\): (a) find a basis of \(\ker T\); (b) find a basis of the range; (c) decide whether \(T\) is one-to-one and whether it is onto.`,
    S`(a) ${stepsLine(SYS.t6, { aug: false })} \(x_2=t\), \(x_3=0\), \(x_1=-2t\): \(\ker T=\operatorname{span}\{(-2,1,0)\}\); check \(${M([[1, 2, 1], [2, 4, 0], [3, 6, 1]])}${C(-2, 1, 0)}=${C("-2+2+0", "-4+4+0", "-6+6+0")}=\vec 0\) ✓. (b) Pivot columns 1 and 3 of \(A\): \(\{(1,2,3),(1,0,1)\}\). (c) Neither: column 2 has no pivot, and only 2 of 3 rows have pivots; \(1+2=3\). [2, 1, 1.]`,
    F.ker([-2, 1])),
  W(6, "hard", 5, S`(a) Prove that \(\ker T\) is a subspace of \(\mathbb R^n\). (b) For which \(h\) is \(T(\vec x)=${M([[1, "h"], ["h", 4]])}\vec x\) not one-to-one? (c) For \(h=2\), find \(\ker T\) and the range.`,
    S`(a) \(T(\vec 0)=\vec 0\); if \(T\vec u=T\vec v=\vec 0\) then \(T(\vec u+\vec v)=\vec 0\) and \(T(c\vec u)=\vec 0\). (b) \(${M([[1, "h"], ["h", 4]])}\xrightarrow{R_2\to R_2-hR_1}${M([[1, "h"], [0, "4-h^2"]])}\): no second pivot when \(h=\pm2\). (c) \(${M([[1, 2], [2, 4]])}\xrightarrow{R_2\to R_2-2R_1}${M([[1, 2], [0, 0]])}\): \(\ker T=\operatorname{span}\{(-2,1)\}\), range \(=\operatorname{span}\{(1,2)\}\). [2, 1, 2.]`,
    F.sq([[1, 2], [2, 4]])),
  W(7, "medium", 4, S`\(A=${M([[2, 1], [1, 2]])}\), \(\mathcal B=\{(1,1),(1,-1)\}\). (a) Find \([T]_{\mathcal B}=P^{-1}AP\). (b) Find \([\vec x]_{\mathcal B}\) for \(\vec x=(5,1)\). (c) Compute \(T(\vec x)\) through \(\mathcal B\) and check directly.`,
    S`(a) \(P=${M([[1, 1], [1, -1]])}\), \(P^{-1}=\tfrac12${M([[1, 1], [1, -1]])}\). \(AP=${M([["2+1", "2-1"], ["1+2", "1-2"]])}=${M([[3, 1], [3, -1]])}\); \(P^{-1}(AP)=\tfrac12${M([["3+3", "1-1"], ["3-3", "1+1"]])}=${M([[3, 0], [0, 1]])}\). (b) \(\tfrac12${M([[1, 1], [1, -1]])}${C(5, 1)}=${C(3, 2)}\). (c) \([T\vec x]_{\mathcal B}=${M([[3, 0], [0, 1]])}${C(3, 2)}=${C(9, 2)}\); \(T\vec x=P${C(9, 2)}=${C(11, 7)}\); directly \(${M([[2, 1], [1, 2]])}${C(5, 1)}=${C("10+1", "5+2")}\) ✓. [2, 1, 1.]`,
    F.v2([[[1, 1], "b₁", "blue"], [[1, -1], "b₂", "red"], [[5, 1], "x", "violet"]], { xmin: -1, xmax: 6, ymin: -2, ymax: 3 })),
  W(7, "hard", 5, S`(a) Using \(A=PDP^{-1}\) from the previous question's \(A=${M([[2, 1], [1, 2]])}\), compute \(A^5\). (b) Prove that similar matrices have the same trace. (c) Show that \(${M([[3, 1], [0, 3]])}\) is not similar to \(3I\).`,
    S`(a) \(D^5=\operatorname{diag}(243,1)\); \(PD^5=${M([[243, 1], [243, -1]])}\); \(A^5=\tfrac12${M([[243, 1], [243, -1]])}${M([[1, 1], [1, -1]])}=\tfrac12${M([["243+1", "243-1"], ["243-1", "243+1"]])}=${M([[122, 121], [121, 122]])}\). (b) \(\operatorname{tr}(XY)=\operatorname{tr}(YX)\), so \(\operatorname{tr}(P^{-1}(AP))=\operatorname{tr}((AP)P^{-1})=\operatorname{tr}A\). (c) \(P^{-1}(3I)P=3I\ne${M([[3, 1], [0, 3]])}\) for every \(P\). [2, 2, 1.]`,
    F.mat([[122, 121], [121, 122]], { label: "A⁵" })),
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
