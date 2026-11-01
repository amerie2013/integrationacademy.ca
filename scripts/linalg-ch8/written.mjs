// LINALG1 chapter 8 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution in matrix form (every row operation followed by the whole matrix, every product written out
// entry by entry) with the marks per part.
//   node scripts/linalg-ch8/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch8/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen8.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "8.1 Eigenvectors and Eigenvalues", 2: "8.2 The Characteristic Equation", 3: "8.3 Eigenspaces and Multiplicity", 4: "8.4 Diagonalisation",
  5: "8.5 Powers and Dynamical Systems", 6: "8.6 Complex Eigenvalues", 7: "8.7 Symmetric Matrices",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt: prompt.replace(/\\\(|\\\)/g, "$"), feedback: feedback.replace(/\\\(|\\\)/g, "$"), kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;

// homogeneous systems (A − λI)x = 0 used below; CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  e2: [[4, 1], [4, 1]],
  e4: [[-3, 0, 3], [0, 0, 0], [3, 0, -3]],
  e0: [[0, 0, 0], [0, 1, 1], [0, 1, 1]],
};
const CHECK = [["e2", [1, -4]], ["e4", [1, 0, 1]], ["e4", [0, 1, 0]], ["e0", [0, 1, -1]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let \(A=${M([[2, 1], [4, -1]])}\). (a) Show that \((1,1)\) is an eigenvector and give its eigenvalue. (b) Show that \(-2\) is an eigenvalue and find an eigenvector. (c) Is \(A\) invertible? Use the eigenvalues.`,
    S`(a) \(${M([[2, 1], [4, -1]])}${C(1, 1)}=${C("2+1", "4-1")}=${C(3, 3)}=3${C(1, 1)}\): \(\lambda=3\). (b) \(A+2I=${M([[4, 1], [4, 1]])}\xrightarrow{R_2\to R_2-R_1}${M([[4, 1], [0, 0]])}\): rank 1, so \(-2\) is an eigenvalue; \(4x_1+x_2=0\): \(\vec v=(1,-4)\). Check \(A${C(1, -4)}=${C("2-4", "4+4")}=${C(-2, 8)}=-2${C(1, -4)}\) ✓. (c) The eigenvalues are 3 and \(-2\); 0 is not one, so \(A\) is invertible (\(\det A=-6\)). [1, 2, 1.]`,
    F.eig([[2, 1], [4, -1]], [[[1, 1], 3], [[1, -4], -2]])),
  W(1, "hard", 5, S`Let \(A=${M([[1, 0, 3], [0, 4, 0], [3, 0, 1]])}\). (a) Show \(\lambda=4\) is an eigenvalue and find a basis of \(E_4\). (b) Find an eigenvector for \(\lambda=-2\). (c) Prove that if \(A\vec x=\lambda\vec x\) then \(A^2\vec x=\lambda^2\vec x\), and give the eigenvalues of \(A^2\).`,
    S`(a) ${stepsLine(SYS.e4, { aug: false })} \(x_2\), \(x_3\) free, \(x_1=x_3\): \(E_4=\operatorname{span}\{(1,0,1),(0,1,0)\}\). Check \(A${C(1, 0, 1)}=${C("1+0+3", 0, "3+0+1")}=4${C(1, 0, 1)}\) ✓. (b) \(A+2I=${M([[3, 0, 3], [0, 6, 0], [3, 0, 3]])}\xrightarrow{R_3\to R_3-R_1}${M([[3, 0, 3], [0, 6, 0], [0, 0, 0]])}\): \((1,0,-1)\); \(A${C(1, 0, -1)}=${C("1-3", 0, "3-1")}=-2${C(1, 0, -1)}\) ✓. (c) \(A^2\vec x=A(\lambda\vec x)=\lambda A\vec x=\lambda^2\vec x\); eigenvalues of \(A^2\): 16, 16, 4. [2, 1, 2.]`,
    F.mat([[1, 0, 3], [0, 4, 0], [3, 0, 1]], { label: "A" })),
  W(2, "medium", 4, S`(a) Find the characteristic polynomial and eigenvalues of \(A=${M([[3, -2], [4, -3]])}\). (b) Check them with the trace and determinant. (c) Find an eigenvector for each.`,
    S`(a) \(\det(A-\lambda I)=${D([["3-\\lambda", -2], [4, "-3-\\lambda"]])}=(3-\lambda)(-3-\lambda)+8=\lambda^2-9+8=\lambda^2-1\): \(\lambda=\pm1\). (b) Sum \(0=3-3=\operatorname{tr}A\); product \(-1=-9+8=\det A\) ✓. (c) \(A-I=${M([[2, -2], [4, -4]])}\): \((1,1)\); \(A+I=${M([[4, -2], [4, -2]])}\): \((1,2)\). Check \(A${C(1, 2)}=${C("3-4", "4-6")}=-${C(1, 2)}\) ✓. [2, 1, 1.]`,
    F.eig([[3, -2], [4, -3]], [[[1, 1], 1], [[1, 2], -1]])),
  W(2, "hard", 5, S`Let \(A=${M([[2, 1, 0], [1, 2, 0], [0, 0, "k"]])}\). (a) Find the characteristic polynomial and the eigenvalues in terms of \(k\). (b) For which \(k\) is there a repeated eigenvalue? (c) For which \(k\) is \(A\) singular?`,
    S`(a) Expand along row 3: \(\det(A-\lambda I)=(k-\lambda)${D([["2-\\lambda", 1], [1, "2-\\lambda"]])}=(k-\lambda)\big[(2-\lambda)^2-1\big]=(k-\lambda)(1-\lambda)(3-\lambda)\). Eigenvalues \(1,3,k\). (b) Repeated when \(k=1\) or \(k=3\). (c) Singular \(\iff\) 0 is an eigenvalue \(\iff k=0\) (\(\det A=3k\)). [3, 1, 1.]`,
    F.mat([[2, 1, 0], [1, 2, 0], [0, 0, "k"]], { label: "A" })),
  W(3, "medium", 4, S`For \(A=${M([[2, 0, 0], [0, 1, 1], [0, 1, 1]])}\) (eigenvalues \(2,2,0\)): (a) find a basis of each eigenspace; (b) state the geometric multiplicities; (c) decide whether \(A\) has an eigenbasis.`,
    S`(a) \(A-2I=${M([[0, 0, 0], [0, -1, 1], [0, 1, -1]])}\xrightarrow{R_3\to R_3+R_2}${M([[0, 0, 0], [0, -1, 1], [0, 0, 0]])}\): \(x_2=x_3\), \(x_1\) free: \(E_2=\operatorname{span}\{(1,0,0),(0,1,1)\}\). ${stepsLine(SYS.e0, { aug: false })} \(E_0=\operatorname{span}\{(0,1,-1)\}\). (b) 2 and 1, equal to the algebraic multiplicities. (c) Yes: \(\{(1,0,0),(0,1,1),(0,1,-1)\}\). [2, 1, 1.]`,
    F.mat([[2, 0, 0], [0, 1, 1], [0, 1, 1]], { label: "A" })),
  W(3, "hard", 5, S`(a) Show that \(A=${M([[3, 1, 0], [0, 3, 0], [0, 0, 3]])}\) has one eigenvalue of algebraic multiplicity 3 and find \(\dim E_3\). (b) Is \(A\) defective? (c) Prove that every eigenvalue has geometric multiplicity at least 1.`,
    S`(a) Triangular, diagonal \(3,3,3\): \(p(\lambda)=(3-\lambda)^3\). \(A-3I=${M([[0, 1, 0], [0, 0, 0], [0, 0, 0]])}\) has rank 1, so \(\dim E_3=3-1=2\), \(E_3=\operatorname{span}\{(1,0,0),(0,0,1)\}\). (b) Yes: \(2<3\). (c) An eigenvalue has a nonzero eigenvector \(\vec x\), which lies in \(E_\lambda\); hence \(\dim E_\lambda\ge1\). [2, 1, 2.]`,
    F.mat([[0, 1, 0], [0, 0, 0], [0, 0, 0]], { label: "A − 3I" })),
  W(4, "medium", 4, S`Diagonalise \(A=${M([[2, 1], [4, -1]])}\): give \(P\), \(D\), \(P^{-1}\), and verify \(A=PDP^{-1}\).`,
    S`Eigenvalues \(3\) (\((1,1)\)) and \(-2\) (\((1,-4)\)): \(P=${M([[1, 1], [1, -4]])}\), \(D=\operatorname{diag}(3,-2)\). \(\det P=-5\), \(P^{-1}=\tfrac15${M([[4, 1], [1, -1]])}\). \(PD=${M([[3, -2], [3, 8]])}\); \(PDP^{-1}=\tfrac15${M([[3, -2], [3, 8]])}${M([[4, 1], [1, -1]])}=\tfrac15${M([["12-2", "3+2"], ["12+8", "3-8"]])}=${M([[2, 1], [4, -1]])}\) ✓. [1, 1, 1, 1.]`,
    F.eig([[2, 1], [4, -1]], [[[1, 1], 3], [[1, -4], -2]])),
  W(4, "hard", 5, S`(a) Find the matrix \(A\) with eigenvector \((1,2)\) for \(\lambda=1\) and \((2,1)\) for \(\lambda=-1\). (b) Show that \(A^2=I\). (c) Describe \(A\) geometrically.`,
    S`(a) \(P=${M([[1, 2], [2, 1]])}\), \(D=\operatorname{diag}(1,-1)\), \(\det P=-3\), \(P^{-1}=\tfrac13${M([[-1, 2], [2, -1]])}\). \(PD=${M([[1, -2], [2, -1]])}\); \(A=\tfrac13${M([["-1-4", "2+2"], ["-2-2", "4+1"]])}=\tfrac13${M([[-5, 4], [-4, 5]])}\). Check \(A${C(1, 2)}=\tfrac13${C("-5+8", "-4+10")}=${C(1, 2)}\) ✓. (b) \(A^2=PD^2P^{-1}=PIP^{-1}=I\). (c) It fixes the line along \((1,2)\) and reverses \((2,1)\): an (oblique) reflection across the line through \((1,2)\) along the direction \((2,1)\). [3, 1, 1.]`,
    F.eig([[-5 / 3, 4 / 3], [-4 / 3, 5 / 3]], [[[1, 2], 1], [[2, 1], -1]])),
  W(5, "medium", 4, S`Use the diagonalisation of \(A=${M([[2, 1], [4, -1]])}\) (\(P=${M([[1, 1], [1, -4]])}\), \(D=\operatorname{diag}(3,-2)\)) to compute \(A^4\), and solve \(\vec x_{k+1}=A\vec x_k\) with \(\vec x_0=(2,-3)\).`,
    S`\(D^4=\operatorname{diag}(81,16)\), \(PD^4=${M([[81, 16], [81, -64]])}\), \(A^4=\tfrac15${M([[81, 16], [81, -64]])}${M([[4, 1], [1, -1]])}=\tfrac15${M([["324+16", "81-16"], ["324-64", "81+64"]])}=${M([[68, 13], [52, 29]])}\). Weights: \(${am([[1, 1, 2], [1, -4, -3]])}\xrightarrow{R_2\to R_2-R_1}${am([[1, 1, 2], [0, -5, -5]])}\): \(c_2=1\), \(c_1=1\). \(\vec x_k=3^k${C(1, 1)}+(-2)^k${C(1, -4)}\). Check \(k=1\): \(A${C(2, -3)}=${C("4-3", "8+3")}=${C(1, 11)}=${C("3+(-2)", "3+8")}\) ✓. [2, 2.]`,
    F.mat([[81, 0], [0, 16]], { label: "D⁴" })),
  W(5, "hard", 5, S`A Markov chain has \(M=${M([["0.75", "0.5"], ["0.25", "0.5"]])}\) and \(\vec x_0=(0,1)\). (a) Find the eigenvalues and eigenvectors. (b) Write \(\vec x_k\). (c) Find the steady state and \(\lim M^k\).`,
    S`(a) \(\operatorname{tr}M=1.25\), so the eigenvalues are 1 and 0.25. \(M-I=${M([["-0.25", "0.5"], ["0.25", "-0.5"]])}\): \((2,1)\); \(M-0.25I=${M([["0.5", "0.5"], ["0.25", "0.25"]])}\): \((1,-1)\). (b) \(${am([[2, 1, 0], [1, -1, 1]])}\xrightarrow{R_1\leftrightarrow R_2}${am([[1, -1, 1], [2, 1, 0]])}\xrightarrow{R_2\to R_2-2R_1}${am([[1, -1, 1], [0, 3, -2]])}\): \(c_2=-\tfrac23\), \(c_1=\tfrac13\). \(\vec x_k=\tfrac13${C(2, 1)}-\tfrac23(0.25)^k${C(1, -1)}\); \(k=1\): \((\tfrac23-\tfrac16,\ \tfrac13+\tfrac16)=(0.5,0.5)=M\vec x_0\) ✓. (c) \(\vec q=(\tfrac23,\tfrac13)\); \(\lim M^k=${M([["\\tfrac23", "\\tfrac23"], ["\\tfrac13", "\\tfrac13"]])}\). [2, 2, 1.]`,
    F.orb([[0.75, 0.5], [0.25, 0.5]], [0, 1], 8, { lines: [[2, 1]] })),
  W(6, "medium", 4, S`Let \(A=${M([[1, -2], [2, 1]])}\). (a) Find its eigenvalues. (b) Find an eigenvector for \(1-2i\) and check it. (c) Give \(r\) and \(\varphi\) and describe the orbits of \(\vec x_{k+1}=A\vec x_k\).`,
    S`(a) \(\lambda^2-2\lambda+5=0\): \(\lambda=1\pm2i\). (b) \(A-(1-2i)I=${M([["2i", -2], [2, "2i"]])}\); row 2: \(x_1=-ix_2\): \(\vec v=(-i,1)\). \(A\vec v=${C("-i-2", "-2i+1")}\) and \((1-2i)${C("-i", 1)}=${C("-i+2i^2", "1-2i")}=${C("-2-i", "1-2i")}\) ✓. (c) \(r=\sqrt5\approx2.236\), \(\varphi=\arctan2\approx63.43^\circ\): outward spirals. [1, 2, 1.]`,
    F.sq([[1, -2], [2, 1]])),
  W(6, "hard", 5, S`Factor \(A=${M([[3, -1], [2, 1]])}\) as \(PCP^{-1}\) with \(C\) a rotation–scaling matrix, verify \(AP=PC\), and describe the action of \(A\).`,
    S`\(\operatorname{tr}A=4\), \(\det A=5\): \(\lambda=2\pm i\). For \(\lambda=2-i\): \(A-\lambda I=${M([["1+i", -1], [2, "-1+i"]])}\); row 1: \(x_2=(1+i)x_1\): \(\vec v=(1,1+i)=${C(1, 1)}+i${C(0, 1)}\). \(P=${M([[1, 0], [1, 1]])}\), \(C=${M([[2, -1], [1, 2]])}\). \(AP=${M([["3-1", -1], ["2+1", 1]])}=${M([[2, -1], [3, 1]])}\); \(PC=${M([[2, -1], ["2+1", "-1+2"]])}=${M([[2, -1], [3, 1]])}\) ✓. \(C=\sqrt5R_{26.57^\circ}\): in the basis of \(P\)'s columns, \(A\) rotates by about \(26.57^\circ\) and scales by \(\sqrt5\). [2, 2, 1.]`,
    F.row([[[[1, 0], [1, 1]], { label: "P" }], [[[2, -1], [1, 2]], { label: "C" }]])),
  W(7, "medium", 4, S`Orthogonally diagonalise \(A=${M([[6, 2], [2, 3]])}\) and verify \(QDQ^T=A\).`,
    S`\(\operatorname{tr}A=9\), \(\det A=14\): \((\lambda-7)(\lambda-2)\). \(A-7I=${M([[-1, 2], [2, -4]])}\): \((2,1)\); \(A-2I=${M([[4, 2], [2, 1]])}\): \((1,-2)\) — perpendicular. \(Q=\tfrac1{\sqrt5}${M([[2, 1], [1, -2]])}\), \(D=\operatorname{diag}(7,2)\). \(QDQ^T=\tfrac15${M([[14, 2], [7, -4]])}${M([[2, 1], [1, -2]])}=\tfrac15${M([["28+2", "14-4"], ["14-4", "7+8"]])}=${M([[6, 2], [2, 3]])}\) ✓. [1, 1, 1, 1.]`,
    F.eig([[6, 2], [2, 3]], [[[2, 1], 7], [[1, -2], 2]])),
  W(7, "hard", 5, S`(a) Write \(Q(\vec x)=2x_1^2+2x_1x_2+2x_2^2\) as \(\vec x^TA\vec x\) and find the principal axes. (b) Find the maximum and minimum of \(Q\) on the unit circle. (c) Prove that the eigenvalues of a real symmetric matrix are real.`,
    S`(a) \(A=${M([[2, 1], [1, 2]])}\): eigenvalues 3 (\(\tfrac1{\sqrt2}(1,1)\)) and 1 (\(\tfrac1{\sqrt2}(1,-1)\)); with \(\vec x=Q\vec y\), \(Q(\vec x)=3y_1^2+y_2^2\). (b) Max 3 at \(\pm\tfrac1{\sqrt2}(1,1)\), min 1 at \(\pm\tfrac1{\sqrt2}(1,-1)\). (c) If \(A\vec v=\lambda\vec v\), then \(\bar{\vec v}^TA\vec v=\lambda|\vec v|^2\); its conjugate is \(\vec v^TA\bar{\vec v}=\bar\lambda|\vec v|^2\), and these numbers are equal because \(A\) is real symmetric (transpose of a \(1\times1\) matrix). So \(\lambda=\bar\lambda\). [2, 1, 2.]`,
    F.eig([[2, 1], [1, 2]], [[[1, 1], 3], [[1, -1], 1]])),
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
