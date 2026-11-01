// LINALG1 chapter 2 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution (every row operation followed by the whole matrix) with the marks per part.
//   node scripts/linalg-ch2/written.mjs           -> dry run (checks every solution against its system)
//   node scripts/linalg-ch2/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { scene3, line3, pt3 } from "./vecfig.mjs";
import { vdoc } from "./vecfig.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg } from "./ws/fig2.mjs";
import { networkSvg, curveSvg } from "./bank/app27.mjs";
import { am, sys, solve, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "2.1 Systems of Linear Equations", 2: "2.2 Augmented Matrices and Elementary Row Operations", 3: "2.3 Row Echelon Form and Reduced Row Echelon Form",
  4: "2.4 Gaussian and Gauss–Jordan Elimination", 5: "2.5 Rank and the Number of Solutions", 6: "2.6 Homogeneous Systems and the Structure of Solutions", 7: "2.7 Applications of Linear Systems",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;

// systems used below, each checked against the stated solution in the dry run
const SYS = {
  s22: [[1, -1, 2, 5], [2, 1, 1, 1], [1, 2, 3, 0]],
  s22h: [[1, 2, -1, 4], [2, 5, 1, 9], [1, 3, 2, 5]],
  s23: [[1, 2, 0, 3, 1], [2, 4, 1, 8, 4], [1, 2, 1, 5, 3]],
  s23k: [[1, -1, 1, 2], [2, -2, 3, 7], [3, -3, 4, 9]],
  s24: [[0, 2, 4, 6], [1, 1, 1, 2], [2, 1, 3, 7]],
  s25: [[1, 2, -1, 1, 1], [2, 4, 1, 5, 8], [1, 2, 2, 4, 7]],
  s25b: [[1, 1, 2, 1], [1, 2, 3, 1], [2, 1, 3, 2]],
  s26: [[1, -2, 1, 0], [2, -3, 4, 0], [1, -1, 3, 0]],
  s26b: [[1, -2, 1, 1], [2, -3, 4, 3], [1, -1, 3, 2]],
  s27: [[1, 1, 0, 120], [1, 0, -1, 50], [0, 1, 1, 70]],
  s27h: [[1, 1, 1, 2], [1, 2, 4, 3], [6, 6, 8, 15]],
};
const CHECK = [["s22", [1, -2, 1]], ["s22h", [2, 1, 0]], ["s22h", [9, -2, 1]], ["s23", [1, 0, 2, 0]], ["s23", [-4, 1, 0, 1]], ["s23k", [-1, 0, 3]], ["s24", [1, -1, 2]],
  ["s25", [3, 0, 2, 0]], ["s25", [1, 0, 1, 1]], ["s25b", [1, 0, 0]], ["s25b", [0, -1, 1]], ["s26b", [3, 1, 0]], ["s26b", [-2, -1, 1]], ["s27", [50, 70, 0]], ["s27", [120, 0, 70]], ["s27h", [4, -3.5, 1.5]]];

export const WRITTEN = [
  W(1, "medium", 4, S`(a) Solve $2x_1+3x_2=7$, $x_1-x_2=1$ by elimination. (b) Explain what your answer means for the two lines in the figure. (c) For which $c$ does the third line $x_1+x_2=c$ pass through the same point? What happens for any other $c$?`,
    S`(a) Subtract twice the second equation from the first: $(2x_1+3x_2)-2(x_1-x_2)=7-2$, so $5x_2=5$, $x_2=1$; then $x_1=1+x_2=2$. Check: $4+3=7$ ✓, $2-1=1$ ✓. Solution $(2,1)$. (b) Exactly one solution: the lines cross at the single point $(2,1)$. (c) $c=2+1=3$; for $c\ne3$ the three lines have no common point and the system of three equations is inconsistent. [2, 1, 1.]`,
    linesSvg([[2, 3, 7], [1, -1, 1]], { xmin: -2, xmax: 5, ymin: -2, ymax: 4 }, [2, 1])),
  W(1, "hard", 4, S`Consider $x_1+2x_2=3$, $2x_1+ax_2=b$. (a) Eliminate $x_1$ and find, in terms of $a$ and $b$, when the system has exactly one solution, none, or infinitely many. (b) Describe each case geometrically (the figure shows one case). (c) For the case of infinitely many solutions, write the solution set in vector form.`,
    S`(a) Second equation minus twice the first: $(a-4)x_2=b-6$. If $a\ne4$: $x_2=\dfrac{b-6}{a-4}$ and $x_1=3-2x_2$ --- exactly one solution. If $a=4$, $b\ne6$: $0=b-6\ne0$ --- none. If $a=4$, $b=6$: $0=0$ --- infinitely many. (b) One solution: two lines crossing. None: parallel lines with equal slopes $-\tfrac12$ but different intercepts (figure: $a=4$, $b=5$). Infinitely many: the same line written twice. (c) $x_2=t$, $x_1=3-2t$: $\vec x=(3,0)+t(-2,1)$. [2, 1, 1.]`,
    linesSvg([[1, 2, 3], [2, 4, 5]], { xmin: -2, xmax: 5, ymin: -2, ymax: 3 })),
  W(2, "medium", 4, S`(a) Write the augmented matrix of $${sysT(SYS.s22)}$. (b) Solve the system with elementary row operations, naming each operation and showing the whole matrix after it. (c) Check your answer in the original equations.`,
    S`(a) $${am(SYS.s22)}$. (b) ${stepsLine(SYS.s22)} So $(x_1,x_2,x_3)=(1,-2,1)$. (c) $1+2+2=5$ ✓, $2-2+1=1$ ✓, $1-4+3=0$ ✓. [1, 2, 1.]`,
    planesSvg(SYS.s22, { center: [1, -2, 1], size: 1, len: 3.5, point: [1, -2, 1], label: "?" })),
  W(2, "hard", 4, S`The system with augmented matrix $${am([[1, 2, -1, 4], [2, 5, 1, 9], [1, 3, 2, "h"]])}$ depends on $h$. (a) Reduce it to echelon form, showing every matrix. (b) For which $h$ is it consistent? (c) For that $h$, find all solutions and describe them geometrically.`,
    S`(a) $R_2\to R_2-2R_1$, $R_3\to R_3-R_1$: $${am([[1, 2, -1, 4], [0, 1, 3, 1], [0, 1, 3, "h-4"]])}$; then $R_3\to R_3-R_2$: $${am([[1, 2, -1, 4], [0, 1, 3, 1], [0, 0, 0, "h-5"]])}$. (b) Row 3 reads $0=h-5$: consistent only for $h=5$. (c) For $h=5$: ${stepsLine(SYS.s22h)} With $x_3=t$: $x_1=2+7t$, $x_2=1-3t$, i.e. $\vec x=(2,1,0)+t(7,-3,1)$: the three planes share a line. Check $t=1$, $(9,-2,1)$: $9-4-1=4$ ✓, $18-10+1=9$ ✓, $9-6+2=5$ ✓. [2, 1, 1.]`,
    planesSvg(SYS.s22h, { center: [2, 1, 0], size: 1.1, len: 3.5, line: { p: [2, 1, 0], d: [7, -3, 1], t0: -0.2, t1: 0.3 } })),
  W(3, "medium", 4, S`(a) Find the reduced row echelon form of $${am(SYS.s23)}$, showing every matrix. (b) Name the pivot columns and the free variables. (c) Write the general solution in vector form and check one particular solution.`,
    S`(a) ${stepsLine(SYS.s23)} (b) Pivot columns 1 and 3; $x_2$ and $x_4$ are free. (c) $x_2=s$, $x_4=t$: $x_1=1-2s-3t$, $x_3=2-2t$, so $\vec x=(1,0,2,0)+s(-2,1,0,0)+t(-3,0,-2,1)$. Check $s=t=1$, $(-4,1,0,1)$: $-4+2+3=1$ ✓, $-8+8+4=4$ ✓, $-4+2+5=3$ ✓. [2, 1, 1.]`,
    stairSvg([["1", "*", "0", "*", "*"], ["0", "0", "1", "*", "*"], ["0", "0", "0", "0", "0"]])),
  W(3, "hard", 4, S`Let $M=${am([[1, -1, 1, 2], [2, -2, 3, 7], [3, -3, 4, "k"]])}$. (a) Reduce $M$ to row echelon form in terms of $k$. (b) For which $k$ is the system inconsistent? (c) For the other value of $k$, find the RREF and the general solution. (d) Explain why no value of $k$ gives a unique solution.`,
    S`(a) $R_2\to R_2-2R_1$, $R_3\to R_3-3R_1$: $${am([[1, -1, 1, 2], [0, 0, 1, 3], [0, 0, 1, "k-6"]])}$; $R_3\to R_3-R_2$: $${am([[1, -1, 1, 2], [0, 0, 1, 3], [0, 0, 0, "k-9"]])}$. (b) Inconsistent for $k\ne9$ (row $0=k-9\ne0$). (c) $k=9$: ${stepsLine(SYS.s23k)} $x_2=t$: $\vec x=(-1,0,3)+t(1,1,0)$. (d) Column 2 never has a pivot, so $x_2$ is always free when the system is consistent. [1, 1, 1, 1.]`,
    stairSvg([["1", "−1", "1", "2"], ["0", "0", "1", "3"], ["0", "0", "0", "k−9"]])),
  W(4, "medium", 4, S`(a) Solve $${sysT(SYS.s24)}$ by Gauss–Jordan elimination, naming each operation and showing every matrix. (b) Why is a row swap needed first? (c) Interpret the answer for the three planes in the figure.`,
    S`(a) ${stepsLine(SYS.s24)} So $(x_1,x_2,x_3)=(1,-1,2)$. Check: $-2+8=6$ ✓, $1-1+2=2$ ✓, $2-1+6=7$ ✓. (b) The first equation has no $x_1$, so the entry in the pivot position of column 1 is $0$; a swap brings a nonzero entry up. (c) Three pivots: the three planes meet in exactly one point, $(1,-1,2)$. [2, 1, 1.]`,
    planesSvg(SYS.s24, { center: [1, -1, 2], size: 1, len: 3.5, point: [1, -1, 2], label: "?" })),
  W(4, "hard", 4, S`For the system $${sysT([[1, 2, 1, 1], [2, "k", 2, 2], [1, 2, "k-1", "h"]])}$: (a) reduce the augmented matrix to echelon form, showing every matrix; (b) find all $k$, $h$ giving exactly one solution, none, or infinitely many; (c) solve the case $k=4$, $h=3$.`,
    S`(a) $R_2\to R_2-2R_1$, $R_3\to R_3-R_1$: $${am([[1, 2, 1, 1], [0, "k-4", 0, 0], [0, 0, "k-2", "h-1"]])}$. (b) $k\ne4$ and $k\ne2$: three pivots, one solution. $k=4$: row 2 is zero, row 3 is $(0,0,2\mid h-1)$: infinitely many ($x_2$ free) for every $h$. $k=2$: rows $(0,-2,0\mid0)$, $(0,0,0\mid h-1)$: none if $h\ne1$, infinitely many if $h=1$. (c) $k=4$, $h=3$: ${stepsLine([[1, 2, 1, 1], [0, 0, 0, 0], [0, 0, 2, 2]])} $x_2=t$: $\vec x=(0,0,1)+t(-2,1,0)$. Check $t=0$: $0+0+1=1$ ✓, $2=2$ ✓, $3=3$ ✓. [1, 2, 1.]`,
    stairSvg([["1", "2", "1", "1"], ["0", "k−4", "0", "0"], ["0", "0", "k−2", "h−1"]])),
  W(5, "medium", 4, S`For $${sysT(SYS.s25)}$: (a) reduce the augmented matrix and find $\operatorname{rank}A$ and $\operatorname{rank}[A\mid\vec b]$; (b) use the ranks to state how many solutions there are and how many parameters; (c) find the general solution.`,
    S`(a) ${stepsLine(SYS.s25)} Two pivots, none in the last column: $\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=2$. (b) Equal ranks: consistent; $n-r=4-2=2$ parameters, infinitely many solutions. (c) $x_2=s$, $x_4=t$: $x_1=3-2s-2t$, $x_3=2-t$; $\vec x=(3,0,2,0)+s(-2,1,0,0)+t(-2,0,-1,1)$. Check $s=0$, $t=1$, $(1,0,1,1)$: $1-1+1=1$ ✓, $2+1+5=8$ ✓, $1+2+4=7$ ✓. [2, 1, 1.]`,
    matSvg(SYS.s25)),
  W(5, "hard", 5, S`Let $A=${am([[1, 1, 2], [1, 2, 3], [2, 1, 3]], false)}$. (a) Find $\operatorname{rank}A$. (b) Find the condition on $\vec b=(b_1,b_2,b_3)$ for $A\vec x=\vec b$ to be consistent. (c) Explain with ranks why $A\vec x=\vec b$ cannot have a unique solution for any $\vec b$. (d) Solve $A\vec x=(1,1,2)$.`,
    S`(a) $R_2\to R_2-R_1$, $R_3\to R_3-2R_1$: $${am([[1, 1, 2], [0, 1, 1], [0, -1, -1]], false)}$; $R_3\to R_3+R_2$: $${am([[1, 1, 2], [0, 1, 1], [0, 0, 0]], false)}$: rank 2. (b) The same operations on $[A\mid\vec b]$ give last row $(0,0,0\mid b_3-2b_1+(b_2-b_1))=(0,0,0\mid b_3+b_2-3b_1)$: consistent iff $b_3=3b_1-b_2$. (c) $\operatorname{rank}A=2<3=n$, so a consistent system always has a free variable. (d) $3(1)-1=2$ ✓. ${stepsLine(SYS.s25b)} $x_3=t$: $\vec x=(1,0,0)+t(-1,-1,1)$. [1, 2, 1, 1.]`,
    planesSvg(SYS.s25b, { center: [0.5, -0.5, 0.5], size: 1.1, len: 3, line: { p: [1, 0, 0], d: [-1, -1, 1], t0: -0.5, t1: 1.2 } })),
  W(6, "medium", 4, S`(a) Solve the homogeneous system with coefficient matrix $${am(SYS.s26.map((r) => r.slice(0, 3)), false)}$ and describe the solution set. (b) Solve $A\vec x=(1,3,2)$ for the same $A$. (c) Show that your answer to (b) is a particular solution plus the solutions from (a).`,
    S`(a) ${stepsLine(SYS.s26)} $x_3=t$: $\vec x=t(-5,-2,1)$, a line through the origin. (b) ${stepsLine(SYS.s26b)} $x_3=t$: $\vec x=(3,1,0)+t(-5,-2,1)$. (c) $(3,1,0)$ solves the system ($3-2=1$ ✓, $6-3=3$ ✓, $3-1=2$ ✓) and the rest is exactly the homogeneous line of (a): the solution line is the homogeneous line shifted by $(3,1,0)$. [2, 1, 1.]`,
    planesSvg(SYS.s26, { center: [0, 0, 0], size: 1.1, len: 2.8, line: { p: [0, 0, 0], d: [-5, -2, 1], t0: -0.3, t1: 0.3 } })),
  W(6, "hard", 4, S`(a) Prove that if $\vec u$ and $\vec v$ solve $A\vec x=\vec b$, then $\vec u-\vec v$ solves $A\vec x=\vec 0$. (b) A system $A\vec x=\vec b$ in three unknowns has the solutions $(1,0,2)$ and $(3,1,1)$. Find infinitely many more. (c) Can it have exactly these two solutions? (d) What are the possible values of $\operatorname{rank}A$?`,
    S`(a) Each equation is linear: $A(\vec u-\vec v)=A\vec u-A\vec v=\vec b-\vec b=\vec 0$. (b) $\vec h=(3,1,1)-(1,0,2)=(2,1,-1)$ solves $A\vec x=\vec 0$, and so does $t\vec h$; hence $(1,0,2)+t(2,1,-1)$ solves $A\vec x=\vec b$ for every $t$ (the line in the figure). (c) No: two different solutions force infinitely many. (d) There is a nonzero homogeneous solution, so $\operatorname{rank}A<3$; $\operatorname{rank}A=0$ only for $A=0$, which needs $\vec b=\vec 0$. So rank 1 or 2 (or 0 when $\vec b=\vec 0$). [1, 1, 1, 1.]`,
    vdoc(scene3(4, { segs: [line3([1, 0, 2], [2, 1, -1], -0.8, 1.8, "violet")], points: [pt3([1, 0, 2], "(1,0,2)", { color: "red" }), pt3([3, 1, 1], "(3,1,1)", { color: "red" })] }))),
  W(7, "medium", 4, S`In the network shown (cars per hour, one-way streets): (a) write one equation per intersection; (b) solve the system, showing the row reduction; (c) find the smallest and largest possible values of $x_1$.`,
    S`(a) $A$: $x_1+x_2=120$; $B$: $x_1=50+x_3$; $C$: $x_2+x_3=70$. (b) ${stepsLine(SYS.s27)} $x_3=t$: $x_1=50+t$, $x_2=70-t$. (c) All flows $\ge0$: $t\ge0$ and $t\le70$; so $50\le x_1\le120$. [1, 2, 1.]`,
    networkSvg({ A: [0, 0], B: [3, 2.5], C: [6, 0] }, [["A", "B", "x₁"], ["A", "C", "x₂"], ["B", "C", "x₃"]], [["A", -1.4, 0, "120", true], ["B", 0, 1.3, "50", false], ["C", 1.4, 0, "70", false]], { xmin: -2, xmax: 8, ymin: -0.9, ymax: 4.3 })),
  W(7, "hard", 5, S`Find the polynomial $p(x)=a_0+a_1x+a_2x^2$ with $p(1)=2$, $p(2)=3$ and $\int_0^2p(x)\,dx=5$. (a) Explain why each condition is a linear equation in $a_0,a_1,a_2$, and write the system. (b) Solve it with row operations, showing every matrix. (c) Check all three conditions.`,
    S`(a) Values and integrals of $p$ are linear combinations of the coefficients: $a_0+a_1+a_2=2$, $a_0+2a_1+4a_2=3$, $\int_0^2p=2a_0+2a_1+\tfrac83a_2=5$, i.e. $6a_0+6a_1+8a_2=15$. (b) ${stepsLine(SYS.s27h)} So $p(x)=4-\tfrac72x+\tfrac32x^2$. (c) $p(1)=4-3.5+1.5=2$ ✓; $p(2)=4-7+6=3$ ✓; $\int_0^2p=8-7+4=5$ ✓. [2, 2, 1.]`,
    curveSvg((x) => 4 - 3.5 * x + 1.5 * x * x, [[1, 2], [2, 3]], { xmin: -1, xmax: 3, ymin: -1, ymax: 9 })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  let bad = 0;
  for (const [k, x] of CHECK) if (!solves(SYS[k], x)) { bad++; console.log(`FAIL: ${x} does not solve ${k}`); }
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
