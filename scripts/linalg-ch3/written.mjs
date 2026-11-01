// LINALG1 chapter 3 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). The feedback is the
// full worked solution (every product term, or every row operation followed by the whole matrix) with the marks per part.
//   node scripts/linalg-ch3/written.mjs           -> dry run (checks the stated solutions)
//   node scripts/linalg-ch3/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { F } from "./bank/gen3.mjs";
import { am, solves, stepsLine } from "./bank/la.mjs";

const T = {
  1: "3.1 Matrices, Addition and Scalar Multiplication", 2: "3.2 The Transpose and Symmetric Matrices", 3: "3.3 Triangular, Diagonal and Other Special Matrices",
  4: "3.4 Matrix–Vector Multiplication", 5: "3.5 Linear Systems as Ax = b", 6: "3.6 Matrix Multiplication", 7: "3.7 Properties of Matrix Multiplication and Powers",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const M = (m) => am(m, false);

// systems used below; CHECK lists [system, claimed solution] pairs verified in the dry run
const SYS = {
  sys5: [[1, 2, -1, -1], [2, 5, 1, 0], [1, 3, 3, 2]],
  cons5: [[1, -1, 2, 2], [2, 1, 1, 1], [1, 2, -1, -1]],
  hom5: [[1, -1, 2], [2, 1, 1], [1, 2, -1]],
  tri3: [[2, 4, -2], [1, 5, 3], [-1, 1, 6]],
};
const CHECK = [["sys5", [2, -1, 1]], ["cons5", [1, -1, 0]], ["hom5", [-1, 1, 1]]];

export const WRITTEN = [
  W(1, "medium", 4, S`Let $A=${M([[3, -1, 0], [2, 4, -5]])}$ and $B=${M([[1, 2, -2], [0, -3, 1]])}$. (a) Compute $2A-3B$. (b) Solve $2X+A=B$ for $X$. (c) Explain why $A+B^T$ is undefined.`,
    S`(a) Entry by entry: $2A=${M([[6, -2, 0], [4, 8, -10]])}$, $3B=${M([[3, 6, -6], [0, -9, 3]])}$, so $2A-3B=${M([[3, -8, 6], [4, 17, -13]])}$. (b) $2X=B-A=${M([[-2, 3, -2], [-2, -7, 6]])}$, so $X=${M([[-1, 1.5, -1], [-1, -3.5, 3]])}$. Check entry (1,1): $2(-1)+3=1$ ✓. (c) $A$ is $2\times3$ but $B^T$ is $3\times2$; addition needs equal sizes. [2, 1, 1.]`,
    F.row([[[[3, -1, 0], [2, 4, -5]], { label: "A" }], [[[1, 2, -2], [0, -3, 1]], { label: "B" }]])),
  W(1, "hard", 5, S`(a) Find $X$ and $Y$ with $X+Y=${M([[4, 2], [1, 3]])}$ and $X-2Y=${M([[1, -4], [4, 0]])}$. (b) $A=[a_{ij}]$ is $4\times4$ with $a_{ij}=|i-j|$. Write $A$ and find the sum of its entries. (c) Prove $(k+l)A=kA+lA$.`,
    S`(a) Subtract: $3Y=${M([[3, 6], [-3, 3]])}$, so $Y=${M([[1, 2], [-1, 1]])}$ and $X=${M([[4, 2], [1, 3]])}-Y=${M([[3, 0], [2, 2]])}$. Check: $X-2Y=${M([[1, -4], [4, 0]])}$ ✓. (b) $A=${M([[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1], [3, 2, 1, 0]])}$; row sums $6+4+4+6=20$. (c) Entry $(i,j)$: $(k+l)a_{ij}=ka_{ij}+la_{ij}$ by the distributive law for numbers. [2, 2, 1.]`,
    F.mat([[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1], [3, 2, 1, 0]], { label: "aᵢⱼ = |i − j|" })),
  W(2, "medium", 4, S`Let $A=${M([[2, 5, -1], [1, 0, 4], [3, -2, 6]])}$. (a) Find $A^T$. (b) Write $A=S+K$ with $S$ symmetric and $K$ skew-symmetric. (c) Check that $S^T=S$ and $K^T=-K$.`,
    S`(a) $A^T=${M([[2, 1, 3], [5, 0, -2], [-1, 4, 6]])}$ (rows become columns). (b) $S=\tfrac12(A+A^T)=\tfrac12${M([[4, 6, 2], [6, 0, 2], [2, 2, 12]])}=${M([[2, 3, 1], [3, 0, 1], [1, 1, 6]])}$; $K=\tfrac12(A-A^T)=\tfrac12${M([[0, 4, -4], [-4, 0, 6], [4, -6, 0]])}=${M([[0, 2, -2], [-2, 0, 3], [2, -3, 0]])}$. Check $S+K=A$ ✓. (c) $S$ has equal mirror entries; $K$ has a zero diagonal and opposite mirror entries. [1, 2, 1.]`,
    F.trans([[2, 5, -1], [1, 0, 4], [3, -2, 6]], 0, 1)),
  W(2, "hard", 5, S`(a) Prove that $A+A^T$ is symmetric and $A-A^T$ is skew-symmetric for every square $A$. (b) Prove that the only matrix that is both symmetric and skew-symmetric is $0$. (c) Find all $2\times2$ $X$ with $X^T=2X$.`,
    S`(a) $(A+A^T)^T=A^T+(A^T)^T=A^T+A$; $(A-A^T)^T=A^T-A=-(A-A^T)$. (b) $A^T=A$ and $A^T=-A$ give $A=-A$, so $2A=0$, $A=0$. (c) $X=(X^T)^T=(2X)^T=2X^T=4X$, so $3X=0$: only $X=0$. [2, 1, 2.]`,
    F.pat("upper", 4)),
  W(3, "medium", 4, S`(a) Reduce $A=${M(SYS.tri3)}$ to an upper triangular matrix using only row replacements, showing every matrix. (b) Find $\operatorname{tr}A$ and the trace of your triangular matrix. Are they equal? (c) What kind of matrix is the product of two upper triangular matrices?`,
    S`(a) ${stepsLine(SYS.tri3, { aug: false, jordan: false })} (b) $\operatorname{tr}A=2+5+6=13$; compare with the diagonal of your echelon form — row operations do not preserve the trace in general. (c) Upper triangular, with diagonal equal to the products of the diagonal entries. [2, 1, 1.]`,
    F.row([[SYS.tri3, { label: "A" }], "→", [[["*", "*", "*"], [0, "*", "*"], [0, 0, "*"]], { label: "upper triangular" }]])),
  W(3, "hard", 5, S`(a) Let $D=\operatorname{diag}(d_1,d_2)$ and $A=${M([["a", "b"], ["c", "d"]])}$. Compute $DA$ and $AD$ and describe what $D$ does in each. (b) Show that if $d_1\ne d_2$, the matrices commuting with $D$ are exactly the diagonal ones. (c) Prove that $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for $2\times2$ matrices.`,
    S`(a) $DA=${M([["d_1a", "d_1b"], ["d_2c", "d_2d"]])}$ (rows scaled), $AD=${M([["d_1a", "d_2b"], ["d_1c", "d_2d"]])}$ (columns scaled). (b) $DA=AD$ needs $d_1b=d_2b$ and $d_2c=d_1c$; with $d_1\ne d_2$: $b=c=0$. (c) $\operatorname{tr}(AB)=a_{11}b_{11}+a_{12}b_{21}+a_{21}b_{12}+a_{22}b_{22}$, which is unchanged when the roles of $A$ and $B$ swap. [2, 2, 1.]`,
    F.pat("diag", 3)),
  W(4, "medium", 4, S`Let $A=${M([[2, -1, 3], [0, 4, 1]])}$ and $\vec x=(1,2,-1)$. (a) Compute $A\vec x$ row by row. (b) Compute it as a combination of the columns. (c) Find $A\vec e_3$ and explain the result.`,
    S`(a) Row 1: $2\cdot1+(-1)\cdot2+3\cdot(-1)=-3$; row 2: $0+8-1=7$. $A\vec x=(-3,7)$. (b) $1(2,0)+2(-1,4)-1(3,1)=(2-2-3,\ 0+8-1)=(-3,7)$ ✓. (c) $A\vec e_3=(3,1)$, column 3 of $A$: the weights pick out one column. [1, 2, 1.]`,
    F.row([[[[2, -1, 3], [0, 4, 1]], { row: 0, label: "A" }], [[[1], [2], [-1]], { col: 0, label: "x" }]])),
  W(4, "hard", 5, S`$A$ is $2\times2$ with $A(1,2)=(4,1)$ and $A(1,1)=(3,0)$. (a) Find $A\vec e_1$ and $A\vec e_2$ using linearity. (b) Write $A$ and check both given products. (c) Prove that a matrix is determined by its values on $\vec e_1,\dots,\vec e_n$.`,
    S`(a) $\vec e_2=(1,2)-(1,1)$, so $A\vec e_2=(4,1)-(3,0)=(1,1)$; $\vec e_1=(1,1)-\vec e_2$, so $A\vec e_1=(3,0)-(1,1)=(2,-1)$. (b) $A=${M([[2, 1], [-1, 1]])}$; $A(1,2)=(2+2,-1+2)=(4,1)$ ✓, $A(1,1)=(3,0)$ ✓. (c) $A\vec e_j$ is column $j$ of $A$, so knowing every $A\vec e_j$ gives every column. [2, 2, 1.]`,
    F.row([[[["?", "?"], ["?", "?"]], { label: "A" }], [[[1], [2]], { label: "(1, 2)" }], "=", [[[4], [1]], {}]])),
  W(5, "medium", 4, S`(a) Write $x_1+2x_2-x_3=-1$, $2x_1+5x_2+x_3=0$, $x_1+3x_2+3x_3=2$ as $A\vec x=\vec b$. (b) Solve it, showing every row operation and the whole matrix. (c) Check your solution in all three equations.`,
    S`(a) $A=${M([[1, 2, -1], [2, 5, 1], [1, 3, 3]])}$, $\vec b=(-1,0,2)$. (b) ${stepsLine(SYS.sys5)} So $\vec x=(2,-1,1)$. (c) $2-2-1=-1$ ✓, $4-5+1=0$ ✓, $2-3+3=2$ ✓. [1, 2, 1.]`,
    F.row([[[[1, 2, -1], [2, 5, 1], [1, 3, 3]], { label: "A" }], [[["x₁"], ["x₂"], ["x₃"]], { label: "x" }], "=", [[[-1], [0], [2]], { label: "b" }]])),
  W(5, "hard", 5, S`Let $A=${M(SYS.hom5)}$. (a) Solve $A\vec x=\vec 0$, showing every matrix. (b) Solve $A\vec x=(2,1,-1)$ and write the answer as particular + homogeneous. (c) Find the condition on $\vec b$ for $A\vec x=\vec b$ to be consistent.`,
    S`(a) ${stepsLine(SYS.hom5, { aug: false })} Free $x_3=t$: $\vec x=t(-1,1,1)$. (b) ${stepsLine(SYS.cons5)} One solution is $(1,-1,0)$ (check: $A(1,-1,0)=(2,1,-1)$ ✓), so all solutions are $(1,-1,0)+t(-1,1,1)$. (c) Row 3 of $A$ is row 2 − row 1, so the same must hold for $\vec b$: $b_3=b_2-b_1$. [2, 2, 1.]`,
    F.mat(SYS.hom5, { label: "A" })),
  W(6, "medium", 4, S`Let $A=${M([[2, -1, 3], [0, 4, 1]])}$ and $B=${M([[1, 2], [3, 0], [-2, 1]])}$. (a) Compute $AB$, writing each row-times-column sum. (b) Compute $BA$. (c) Explain why $AB\ne BA$ here without comparing entries.`,
    S`(a) $(AB)_{11}=2-3-6=-7$, $(AB)_{12}=4+0+3=7$, $(AB)_{21}=0+12-2=10$, $(AB)_{22}=0+0+1=1$: $AB=${M([[-7, 7], [10, 1]])}$. (b) $BA=${M([[2, 7, 5], [6, -3, 9], [-4, 6, -5]])}$ (e.g. $(BA)_{11}=1\cdot2+2\cdot0=2$). (c) $AB$ is $2\times2$ and $BA$ is $3\times3$. [2, 1, 1.]`,
    F.prod([[2, -1, 3], [0, 4, 1]], [[1, 2], [3, 0], [-2, 1]], 1, 0)),
  W(6, "hard", 5, S`(a) Find all $2\times2$ matrices commuting with $${M([[1, 2], [2, 1]])}$. (b) Show $${M([[1, 2], [2, 1]])}${M([[3, 0], [1, -1]])}\ne${M([[3, 0], [1, -1]])}${M([[1, 2], [2, 1]])}$. (c) Give nonzero $A,B$ with $AB=0$ and explain using the columns of $B$.`,
    S`(a) $B=${M([["a", "b"], ["c", "d"]])}$: $AB=${M([["a+2c", "b+2d"], ["2a+c", "2b+d"]])}$, $BA=${M([["a+2b", "2a+b"], ["c+2d", "2c+d"]])}$. Equal gives $c=b$ and $d=a$: $B=${M([["a", "b"], ["b", "a"]])}$. (b) $${M([[5, -2], [7, -1]])}\ne${M([[3, 6], [-1, 1]])}$. (c) $A=${M([[1, 1], [1, 1]])}$, $B=${M([[1, -1], [-1, 1]])}$: each column of $B$ solves $A\vec x=\vec 0$, so $AB=[A\vec b_1\ A\vec b_2]=0$. [2, 1, 2.]`,
    F.row([[[[1, 2], [2, 1]], { label: "A" }], [[["a", "b"], ["c", "d"]], { label: "B" }]])),
  W(7, "medium", 4, S`Let $A=${M([[3, -1], [2, 0]])}$. (a) Compute $A^2$. (b) Show $A^2-3A+2I=0$. (c) Use (b) to write $A^3$ as $aA+bI$ and compute it.`,
    S`(a) $A^2=${M([["9-2", "-3+0"], ["6+0", "-2+0"]])}=${M([[7, -3], [6, -2]])}$. (b) $${M([[7, -3], [6, -2]])}-${M([[9, -3], [6, 0]])}+${M([[2, 0], [0, 2]])}=0$ ✓. (c) $A^3=A\cdot A^2=A(3A-2I)=3A^2-2A=3(3A-2I)-2A=7A-6I=${M([[15, -7], [14, -6]])}$. [1, 1, 2.]`,
    F.mat([[3, -1], [2, 0]], { label: "A" })),
  W(7, "hard", 5, S`(a) Prove $(AB)^T=B^TA^T$ entry by entry. (b) Compute $A^TA$ and $AA^T$ for $A=${M([[2, 1], [-1, 3], [0, 2]])}$ and check both are symmetric. (c) Prove: if $N^3=0$ then $(I-N)(I+N+N^2)=I$.`,
    S`(a) $((AB)^T)_{ij}=(AB)_{ji}=\sum_k a_{jk}b_{ki}=\sum_k (B^T)_{ik}(A^T)_{kj}=(B^TA^T)_{ij}$. (b) $A^TA=${M([[5, -1], [-1, 14]])}$ (column dot products), $AA^T=${M([[5, 1, 2], [1, 10, 6], [2, 6, 4]])}$; both equal their transposes. (c) Expand: $I+N+N^2-N-N^2-N^3=I-N^3=I$. [2, 2, 1.]`,
    F.row([[[[2, -1, 0], [1, 3, 2]], { label: "Aᵀ" }], [[[2, 1], [-1, 3], [0, 2]], { label: "A" }]])),
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
