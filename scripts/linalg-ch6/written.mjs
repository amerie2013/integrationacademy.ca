// LINALG1 chapter 6 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution in matrix form (every row operation followed by the whole matrix, products and cofactor
// expansions written out) with the marks per part.
//   node scripts/linalg-ch6/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch6/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen6.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "6.1 The Inverse of a Matrix", 2: "6.2 Computing Inverses by Row Reduction", 3: "6.3 Elementary Matrices", 4: "6.4 The Invertible Matrix Theorem",
  5: "6.5 Determinants and Cofactor Expansion", 6: "6.6 Properties of Determinants", 7: "6.7 Cramer's Rule, the Adjugate and Volume",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt: prompt.replace(/\\\(|\\\)/g, "$"), feedback: feedback.replace(/\\\(|\\\)/g, "$"), kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const I = (A) => A.map((r, i) => [...r, ...A.map((_, j) => (i === j ? 1 : 0))]);
const C = (...a) => am(a.map((x) => [x]), false);

// systems used below; CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  sys1: [[5, 3, 1], [3, 2, 2]],
  sing4: [[1, 2, 3, 0], [2, 3, 4, 0], [3, 4, 5, 0]],
  cram7: [[1, 2, 1, 5], [2, 1, 1, 5], [1, 1, 3, 8]],
};
const CHECK = [["sys1", [-4, 7]], ["sing4", [1, -2, 1]], ["cram7", [1, 1, 2]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let \(A=${M([[5, 3], [3, 2]])}\). (a) Find \(A^{-1}\) with the \(2\times2\) formula and check \(AA^{-1}=I\). (b) Solve \(5x_1+3x_2=1,\ 3x_1+2x_2=2\) with \(A^{-1}\). (c) Find \((A^T)^{-1}\).`,
    S`(a) \(ad-bc=10-9=1\): \(A^{-1}=${M([[2, -3], [-3, 5]])}\). Check: \(${M([[5, 3], [3, 2]])}${M([[2, -3], [-3, 5]])}=${M([["10-9", "-15+15"], ["6-6", "-9+10"]])}=I\) ✓. (b) \(\vec x=A^{-1}${C(1, 2)}=${C("2-6", "-3+10")}=${C(-4, 7)}\); check \(5(-4)+3(7)=1\) ✓, \(3(-4)+2(7)=2\) ✓. (c) \(A\) is symmetric, so \((A^T)^{-1}=A^{-1}\). [2, 1, 1.]`,
    F.row([[[[5, 3], [3, 2]], { label: "A" }], [[[2, -3], [-3, 5]], { label: "A⁻¹" }]])),
  W(1, "hard", 5, S`(a) Prove that an invertible matrix has only one inverse. (b) Solve \(AXB=C\) for \(X\) and compute it for \(A=${M([[1, 2], [0, 1]])}\), \(B=${M([[1, 0], [1, 1]])}\), \(C=${M([[5, 2], [2, 1]])}\).`,
    S`(a) If \(B\), \(C\) are inverses of \(A\): \(B=BI=B(AC)=(BA)C=IC=C\). (b) \(X=A^{-1}CB^{-1}\). \(A^{-1}=${M([[1, -2], [0, 1]])}\), \(B^{-1}=${M([[1, 0], [-1, 1]])}\). \(A^{-1}C=${M([["5-4", "2-2"], [2, 1]])}=${M([[1, 0], [2, 1]])}\); \(X=${M([[1, 0], [2, 1]])}${M([[1, 0], [-1, 1]])}=${M([[1, 0], ["2-1", 1]])}=${M([[1, 0], [1, 1]])}\). Check: \(AXB=${M([[1, 2], [0, 1]])}${M([[1, 0], [1, 1]])}${M([[1, 0], [1, 1]])}=${M([[3, 2], [1, 1]])}${M([[1, 0], [1, 1]])}=${M([[5, 2], [2, 1]])}\) ✓. [2, 3.]`,
    F.row([[[[1, 2], [0, 1]], { label: "A" }], [[["?", "?"], ["?", "?"]], { label: "X" }], [[[1, 0], [1, 1]], { label: "B" }], "=", [[[5, 2], [2, 1]], { label: "C" }]])),
  W(2, "medium", 4, S`Find \(A^{-1}\) for \(A=${M([[1, 1, 2], [0, 1, 1], [1, 2, 4]])}\) by row reducing \([\,A\mid I\,]\), showing every operation and matrix, and check one row of \(AA^{-1}\).`,
    S`${stepsLine(I([[1, 1, 2], [0, 1, 1], [1, 2, 4]]), { aug: 3, cols: 3 })} So \(A^{-1}=${M([[2, 0, -1], [1, 2, -1], [-1, -1, 1]])}\). Row 1 of \(AA^{-1}\): \((1,1,2)\cdot(2,1,-1)=1\), \((1,1,2)\cdot(0,2,-1)=0\), \((1,1,2)\cdot(-1,-1,1)=0\) ✓. [3, 1.]`,
    F.row([[I([[1, 1, 2], [0, 1, 1], [1, 2, 4]]), { label: "[ A | I ]" }]])),
  W(2, "hard", 5, S`Let \(A=${M([[1, 2, 1], [1, 3, 1], [0, 1, "k"]])}\). (a) For which \(k\) is \(A\) invertible? (b) Find \(A^{-1}\) for \(k=2\) by row reduction.`,
    S`(a) \(R_2-R_1\): \((0,1,0)\); then \(R_3-R_2\): \((0,0,k)\). Three pivots \(\iff k\ne0\). (b) ${stepsLine(I([[1, 2, 1], [1, 3, 1], [0, 1, 2]]), { aug: 3, cols: 3 })} \(A^{-1}=\tfrac12${M([[5, -3, -1], [-2, 2, 0], [1, -1, 1]])}\). [2, 3.]`,
    F.mat([[1, 2, 1], [1, 3, 1], [0, 1, "k"]], { cells: [[2, 2]], label: "A" })),
  W(3, "medium", 4, S`Reduce \(A=${M([[2, 5], [1, 3]])}\) to \(I\). (a) Record each step as an elementary matrix. (b) Compute \(A^{-1}\) as their product. (c) Write \(A\) as a product of elementary matrices.`,
    S`(a) \(E_1\): \(R_1\leftrightarrow R_2\), \(E_1=${M([[0, 1], [1, 0]])}\) → \(${M([[1, 3], [2, 5]])}\). \(E_2\): \(R_2-2R_1\), \(E_2=${M([[1, 0], [-2, 1]])}\) → \(${M([[1, 3], [0, -1]])}\). \(E_3\): \(R_2\to-R_2\), \(E_3=${M([[1, 0], [0, -1]])}\) → \(${M([[1, 3], [0, 1]])}\). \(E_4\): \(R_1-3R_2\), \(E_4=${M([[1, -3], [0, 1]])}\) → \(I\). (b) \(A^{-1}=E_4E_3E_2E_1=${M([[3, -5], [-1, 2]])}\) (check: \(${M([[2, 5], [1, 3]])}${M([[3, -5], [-1, 2]])}=${M([["6-5", "-10+10"], ["3-3", "-5+6"]])}=I\)). (c) \(A=E_1^{-1}E_2^{-1}E_3^{-1}E_4^{-1}=${M([[0, 1], [1, 0]])}${M([[1, 0], [2, 1]])}${M([[1, 0], [0, -1]])}${M([[1, 3], [0, 1]])}\). [2, 1, 1.]`,
    F.mat([[2, 5], [1, 3]], { label: "A" })),
  W(3, "hard", 5, S`(a) Prove that every elementary matrix is invertible and describe its inverse. (b) Prove that a square matrix is invertible if and only if it is a product of elementary matrices.`,
    S`(a) The reverse operation (swap again, scale by \(1/c\), subtract \(cR_j\)) applied after the operation restores \(I\), so \(E'E=I=EE'\). (b) ⇐: products of invertible matrices are invertible. ⇒: an invertible \(A\) has RREF \(I\): \(E_k\cdots E_1A=I\), so \(A=E_1^{-1}\cdots E_k^{-1}\), and each \(E_i^{-1}\) is elementary by (a). [2, 3.]`,
    F.row([[[[1, 0], ["c", 1]], { label: "E" }], [[[1, 0], ["−c", 1]], { label: "E⁻¹" }], "=", [[[1, 0], [0, 1]], { label: "I" }]])),
  W(4, "medium", 4, S`Let \(A=${M([[1, 2, 3], [2, 3, 4], [3, 4, 5]])}\). (a) Show \(A\) is singular by row reduction. (b) Find a nonzero \(\vec x\) with \(A\vec x=\vec 0\). (c) Name two other conditions of the Invertible Matrix Theorem that fail.`,
    S`(a) ${stepsLine(SYS.sing4)} Only two pivots: singular. (b) \(x_3=t\): \(\vec x=t(1,-2,1)\); \(A${C(1, -2, 1)}=${C("1-4+3", "2-6+4", "3-8+5")}=${C(0, 0, 0)}\) ✓. (c) e.g. the columns are dependent and do not span \(\mathbb R^3\); \(A^T\) is singular. [2, 1, 1.]`,
    F.v3([[[1, 2, 3], "a₁"], [[2, 3, 4], "a₂"], [[3, 4, 5], "a₃"]], { len: 6 })),
  W(4, "hard", 5, S`Let \(A,B\) be \(n\times n\). (a) Prove: if \(AB=I\) then \(BA=I\). (b) Prove: if \(AB\) is invertible then \(A\) and \(B\) are invertible.`,
    S`(a) \(B\vec x=\vec 0\Rightarrow\vec x=AB\vec x=\vec 0\), so \(B\) is invertible (only the trivial solution). Then \(A=ABB^{-1}=B^{-1}\), and \(BA=BB^{-1}=I\). (b) With \(C=(AB)^{-1}\): \(A(BC)=I\), so \(A\) is invertible by (a); and \((CA)B=I\), so \(B\) is invertible. [3, 2.]`,
    F.row([[[["*", "*"], ["*", "*"]], { label: "A" }], [[["*", "*"], ["*", "*"]], { label: "B" }], "=", [[[1, 0], [0, 1]], { label: "I" }]])),
  W(5, "medium", 4, S`Let \(A=${M([[2, 1, 3], [1, 0, 2], [4, 1, 1]])}\). (a) Compute \(\det A\) along row 1. (b) Compute it again along column 2. (c) Is \(A\) invertible?`,
    S`(a) \(2${D([[0, 2], [1, 1]])}-1${D([[1, 2], [4, 1]])}+3${D([[1, 0], [4, 1]])}=2(-2)-1(-7)+3(1)=-4+7+3=6\). (b) Column 2 \((1,0,1)\), signs \(-,+,-\): \(-1${D([[1, 2], [4, 1]])}+0-1${D([[2, 3], [1, 2]])}=-1(-7)-1(1)=6\) ✓. (c) \(\det A=6\ne0\): invertible. [2, 1, 1.]`,
    F.mat([[2, 1, 3], [1, 0, 2], [4, 1, 1]], { col: 1, label: "column 2 has a 0" })),
  W(5, "hard", 5, S`(a) Compute \(\det${M([[1, 2, 0, 1], [0, 1, 1, 0], [1, 0, 2, 1], [2, 1, 0, 1]])}\). (b) For which \(x\) is \(${D([["x", 2, 0], [2, "x", 2], [0, 2, "x"]])}=0\)?`,
    S`(a) Row reduce (replacements only): \(R_3-R_1=(0,-2,2,0)\), \(R_4-2R_1=(0,-3,0,-1)\); \(R_3+2R_2=(0,0,4,0)\), \(R_4+3R_2=(0,0,3,-1)\); \(R_4-\tfrac34R_3=(0,0,0,-1)\). \(\det=1\cdot1\cdot4\cdot(-1)=-4\). (b) Along row 1: \(x(x^2-4)-2(2x-0)+0=x^3-8x=x(x^2-8)\): \(x=0\) or \(x=\pm2\sqrt2\). [3, 2.]`,
    F.mat([[1, 2, 0, 1], [0, 1, 1, 0], [1, 0, 2, 1], [2, 1, 0, 1]], { label: "A" })),
  W(6, "medium", 4, S`(a) Compute \(\det${M([[0, 1, 2], [1, 3, 1], [2, 1, 0]])}\) by row reduction, recording each swap and scaling. (b) If this matrix is \(A\) and \(\det B=3\) (\(3\times3\)), find \(\det(AB^{-1})\) and \(\det(2A^T)\).`,
    S`(a) \(R_1\leftrightarrow R_2\) (\(\times-1\)): \(${M([[1, 3, 1], [0, 1, 2], [2, 1, 0]])}\); \(R_3-2R_1\): \((0,-5,-2)\); \(R_3+5R_2\): \((0,0,8)\). \(\det U=1\cdot1\cdot8=8\), so \(\det A=-8\). (b) \(\det(AB^{-1})=-8/3\); \(\det(2A^T)=2^3(-8)=-64\). [2, 2.]`,
    F.mat([[0, 1, 2], [1, 3, 1], [2, 1, 0]], { cells: [[0, 0]], label: "A" })),
  W(6, "hard", 5, S`(a) Prove \(\det A^{-1}=1/\det A\). (b) Prove that a skew-symmetric matrix of odd size has determinant 0. (c) If \(A^2=A\) and \(A\ne I\), show \(\det A=0\).`,
    S`(a) \(\det A\det A^{-1}=\det(AA^{-1})=\det I=1\). (b) \(\det A=\det A^T=\det(-A)=(-1)^n\det A=-\det A\) for odd \(n\), so \(\det A=0\). (c) \((\det A)^2=\det A\), so \(\det A\in\{0,1\}\). If \(\det A\ne0\), \(A\) is invertible and \(A=A^{-1}A^2=A^{-1}A=I\), contradiction. So \(\det A=0\). [1, 2, 2.]`,
    F.mat([[0, 2, -1], [-2, 0, 3], [1, -3, 0]], { label: "skew-symmetric, 3 × 3" })),
  W(7, "medium", 4, S`Solve \(x_1+2x_2+x_3=5,\ 2x_1+x_2+x_3=5,\ x_1+x_2+3x_3=8\) by Cramer's rule, then check by substitution.`,
    S`\(\det A=${D([[1, 2, 1], [2, 1, 1], [1, 1, 3]])}=1(3-1)-2(6-1)+1(2-1)=2-10+1=-7\). \(\det A_1(\vec b)=${D([[5, 2, 1], [5, 1, 1], [8, 1, 3]])}=5(2)-2(7)+1(-3)=-7\); \(\det A_2(\vec b)=${D([[1, 5, 1], [2, 5, 1], [1, 8, 3]])}=1(7)-5(5)+1(11)=-7\); \(\det A_3(\vec b)=${D([[1, 2, 5], [2, 1, 5], [1, 1, 8]])}=1(3)-2(11)+5(1)=-14\). So \(\vec x=(1,1,2)\). Check: \(${M([[1, 2, 1], [2, 1, 1], [1, 1, 3]])}${C(1, 1, 2)}=${C("1+2+2", "2+1+2", "1+1+6")}=${C(5, 5, 8)}\) ✓. [3, 1.]`,
    F.row([[[[1, 2, 1], [2, 1, 1], [1, 1, 3]], { label: "A" }], [[["x₁"], ["x₂"], ["x₃"]], {}], "=", [[[5], [5], [8]], { label: "b" }]])),
  W(7, "hard", 5, S`(a) Find \(\operatorname{adj}A\) and \(A^{-1}\) for \(A=${M([[1, 0, 2], [2, 1, 0], [0, 1, 1]])}\). (b) Find the volume of the box on the columns of \(A\), and the volume of the image of the unit cube under \(A^{-1}\).`,
    S`(a) \(\det A=1(1-0)-0+2(2-0)=5\). Cofactors: \(C_{11}=1\), \(C_{12}=-2\), \(C_{13}=2\); \(C_{21}=-(0-2)=2\), \(C_{22}=1\), \(C_{23}=-(1-0)=-1\); \(C_{31}=0-2=-2\), \(C_{32}=-(0-4)=4\), \(C_{33}=1\). \(\operatorname{adj}A=${M([[1, 2, -2], [-2, 1, 4], [2, -1, 1]])}\), \(A^{-1}=\tfrac15\operatorname{adj}A\). Check row 1 of \(A\operatorname{adj}A\): \((1,0,2)\cdot(1,-2,2)=5\), \((1,0,2)\cdot(2,1,-1)=0\), \((1,0,2)\cdot(-2,4,1)=0\) ✓. (b) Volume \(|\det A|=5\); under \(A^{-1}\) the unit cube has volume \(1/5\). [3, 2.]`,
    F.v3([[[1, 2, 0], "a₁"], [[0, 1, 1], "a₂"], [[2, 0, 1], "a₃"]])),
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
