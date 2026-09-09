// Adds assignments, question-bank questions, and printable worksheets for the
// private "Abstract Algebra I — Groups" course (see seed-abstract-algebra.mjs,
// which owns the course + lessons themselves — this script never touches
// those). Safe to re-run: assignments upsert by title (never deleted — their
// id is referenced by student submissions), bank_questions are fully
// replaced (no student data references them directly), worksheets upsert by
// (course_id, code). Lesson ids are looked up by title match at runtime since
// seed-abstract-algebra.mjs regenerates lesson rows (new ids) on every run.
//
// Usage: node scripts/seed-abstract-algebra-content.mjs
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const COURSE_CODE = "ABALG1";

// ================================================================
// ASSIGNMENTS — Knowledge & Understanding / Application / Thinking,
// same rubric style as the other courses (e.g. ALG1), adapted to a
// proof-based topic: "Thinking" here means write a short proof.
// ================================================================
const A3 = (code, topic, knowledge, application, thinking) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(knowledge),
    "Application", ...sec(application),
    "Thinking (short proof)", ...sec(thinking),
  ].join("\n");
  return { title: `Assignment ${code} — ${topic}`, description };
};

const ASSIGN = {
  "1.1": A3("1.1", "Groups: Definition and Basic Examples",
    ["State the four group axioms.",
     "Is $(\\mathbb{Z},+)$ a group? Justify briefly.",
     "Write the identity element of $(\\mathbb{R}^*,\\cdot)$.",
     "List the elements of $U(9)$."],
    ["Show that $(\\mathbb{Z}_8,+_8)$ is a group. State its identity and the inverse of $5$.",
     "Compute $4+_7 6$ and $3\\cdot_8 5$.",
     "Determine whether $\\{1,-1\\}$ under multiplication is an abelian group."],
    ["Explain why $(\\mathbb{Z},\\cdot)$ (integers under ordinary multiplication) is NOT a group.",
     "A classmate claims $(\\mathbb{Z}_6,\\cdot_6)$ — all of $\\mathbb{Z}_6$, not just $U(6)$ — is a group. Disprove this with a specific counterexample.",
     "Prove that a group has only one identity element (i.e. the identity is unique)."]),
  "1.2": A3("1.2", "Cayley Tables and the Order of an Element",
    ["What property of a Cayley table tells you the group is abelian?",
     "State the Latin square property.",
     "Define the order of an element $a$ (multiplicative notation).",
     "State $O(e)$ for any group $G$."],
    ["Build the Cayley table for $(\\mathbb{Z}_5,+_5)$.",
     "Find the order of every element of $U(8)$.",
     "In $(\\mathbb{Z}_8,+_8)$, find $O(2)$, $O(3)$, and $O(4)$."],
    ["Explain why every row and column of a Cayley table contains each group element exactly once.",
     "If $O(a)=6$, list the possible values of $O(a^2)$ and justify each.",
     "Prove that $O(a)=O(a^{-1})$ for every element $a$ in a group."]),
  "1.3": A3("1.3", "Subgroups and Cosets",
    ["State the two-step subgroup test.",
     "Why is associativity never checked when testing a subgroup?",
     "Define the (right) coset $Ha$.",
     "State the formula for $(ab)^{-1}$."],
    ["Show that $4\\mathbb{Z}$ is a subgroup of $(\\mathbb{Z},+)$.",
     "List all subgroups of $(\\mathbb{Z}_8,+_8)$.",
     "Find the cosets of $H=\\{1,4\\}$ in $U(5)=\\{1,2,3,4\\}$ under $\\cdot_5$."],
    ["Let $G$ be a group where $(ab)^{-1}=a^{-1}b^{-1}$ for all $a,b\\in G$ (note: not the usual reversed order). Prove $G$ is abelian.",
     "Show that if $H\\le G$ and $a,b\\in G$, then $Ha=Hb$ if and only if $ab^{-1}\\in H$.",
     "Let $G$ be a group with $(ab)^3=a^3b^3$ for all $a,b\\in G$, and suppose every element's order is coprime to $3$. Prove $G$ is abelian. (Hint: adapt the $(ab)^2=a^2b^2$ proof from Lesson 1.3.)"]),
  "1.4": A3("1.4", "Combining Subgroups, the Center, and Cyclic Groups",
    ["State the definition of $Z(G)$.",
     "If $G$ is abelian, what is $Z(G)$? Explain.",
     "What does it mean for $g$ to be a generator of $G$?",
     "True or false: every cyclic group is abelian. Justify."],
    ["Find $3\\mathbb{Z}\\cap5\\mathbb{Z}$ in $(\\mathbb{Z},+)$.",
     "Is $U(9)$ cyclic? If so, list all its generators.",
     "$G$ is abelian with $|G|=6$ — what is $Z(G)$?"],
    ["Prove: the union of two subgroups $H$ and $K$ of $G$ is itself a subgroup if and only if $H\\subseteq K$ or $K\\subseteq H$.",
     "Let $G=U(10)$ with generator $3$. Explain why $3^k$ is also a generator exactly when $\\gcd(k,4)=1$ (check $k=1,2,3$ against the orders you found in Lesson 1.2).",
     "Prove that every subgroup of a cyclic group is itself cyclic."]),
};

// ================================================================
// QUESTION BANK — bank_questions rows, topic-tagged per lesson.
// Shapes verified against existing rows: multiple_choice/multiple_select use
// choices:[{id,text}] + answer "id"/["id",...]; true_false answer is
// "true"/"false"; numeric answer is a number with a tolerance; fill_blank /
// short_answer answer is an array of accepted strings.
// ================================================================
const mc = (topic, difficulty, prompt, choices, answer, points = 1, feedback) =>
  ({ topic, difficulty, kind: "multiple_choice", prompt, choices: choices.map((text, i) => ({ id: "abcd"[i], text })), answer, points, feedback: feedback ?? null });
const tf = (topic, difficulty, prompt, answer, points = 1, feedback) =>
  ({ topic, difficulty, kind: "true_false", prompt, choices: null, answer: answer ? "true" : "false", points, feedback: feedback ?? null });
const num = (topic, difficulty, prompt, answer, tolerance = 0, points = 1, feedback) =>
  ({ topic, difficulty, kind: "numeric", prompt, choices: null, answer, tolerance, points, feedback: feedback ?? null });
const sa = (topic, difficulty, prompt, accepted, points = 1, feedback) =>
  ({ topic, difficulty, kind: "short_answer", prompt, choices: null, answer: accepted, points, feedback: feedback ?? null });
const ms = (topic, difficulty, prompt, choices, answerIds, points = 2, feedback) =>
  ({ topic, difficulty, kind: "multiple_select", prompt, choices: choices.map((text, i) => ({ id: "abcd"[i], text })), answer: answerIds, points, feedback: feedback ?? null });

const T11 = "1.1 Groups: Definition and Basic Examples";
const T12 = "1.2 Cayley Tables and the Order of an Element";
const T13 = "1.3 Subgroups and Cosets";
const T14 = "1.4 Combining Subgroups, the Center, and Cyclic Groups";

const BANK = [
  // ================= 1.1 — Groups: Definition and Basic Examples (42) =================
  mc(T11, "easy", "Which of these is NOT one of the four group axioms?", ["Closure", "Commutativity", "Associativity", "Identity"], "b", 1, "Commutativity is what makes a group *abelian* — it's not required for every group."),
  tf(T11, "easy", "$(\\mathbb{Z},+)$ is an abelian group.", true),
  tf(T11, "easy", "$(\\mathbb{Q},+)$ is a group.", true),
  tf(T11, "easy", "$(\\mathbb{R},+)$ is a group.", true),
  tf(T11, "easy", "$(\\mathbb{N},+)$, where $\\mathbb{N}=\\{0,1,2,\\dots\\}$, is a group.", false, 1, "Inverse fails: e.g. $3$ has no natural-number inverse (would need $-3$)."),
  tf(T11, "easy", "The identity element of $(\\mathbb{Z},+)$ is $0$.", true),
  tf(T11, "easy", "The identity element of $(\\mathbb{R}\\setminus\\{0\\},\\cdot)$ is $1$.", true),
  tf(T11, "easy", "$(\\mathbb{Z},\\cdot)$ has an identity element.", true, 1, "$1$ is the identity ($a\\cdot1=a$) — the group fails on *inverses*, not identity."),
  sa(T11, "easy", "List the elements of $U(8)$, separated by commas.", ["1,3,5,7", "1, 3, 5, 7"]),
  mc(T11, "easy", "In $U(12)=\\{1,5,7,11\\}$, what is the identity element?", ["$0$", "$1$", "$12$", "There is none"], "b"),
  num(T11, "easy", "Compute $2+_5 4$ in $\\mathbb{Z}_5$.", 1, 0),
  num(T11, "easy", "Compute $3+_8 6$ in $\\mathbb{Z}_8$.", 1, 0),
  tf(T11, "medium", "$(\\mathbb{Z},\\cdot)$ (integers under ordinary multiplication) is a group.", false, 1, "Inverse fails: most integers have no integer multiplicative inverse."),
  num(T11, "medium", "Compute $5+_7 4$ in $\\mathbb{Z}_7$.", 2, 0),
  num(T11, "medium", "Compute $4\\cdot_9 5$ in $\\mathbb{Z}_9$.", 2, 0),
  num(T11, "medium", "Compute $7\\cdot_{11} 8$ in $\\mathbb{Z}_{11}$.", 1, 0),
  sa(T11, "medium", "List the elements of $U(9)$, separated by commas.", ["1,2,4,5,7,8", "1, 2, 4, 5, 7, 8"]),
  sa(T11, "medium", "List the elements of $U(10)$, separated by commas.", ["1,3,7,9", "1, 3, 7, 9"]),
  sa(T11, "medium", "List the elements of $U(14)$, separated by commas.", ["1,3,5,9,11,13", "1, 3, 5, 9, 11, 13"]),
  tf(T11, "medium", "$\\{1,-1\\}$ under ordinary multiplication is an abelian group.", true),
  tf(T11, "medium", "$U(n)$ is always abelian, for every $n$.", true),
  num(T11, "medium", "Find the additive inverse of $3$ in $(\\mathbb{Z}_7,+_7)$.", 4, 0),
  num(T11, "medium", "Find the additive inverse of $5$ in $(\\mathbb{Z}_{11},+_{11})$.", 6, 0),
  tf(T11, "medium", "$(M_2(\\mathbb{R}),+)$ — all $2\\times2$ real matrices under matrix addition — is a group.", true, 1, "The zero matrix is the identity, and $-A$ is the inverse of $A$; matrix addition is associative and commutative."),
  tf(T11, "medium", "Every subset of a group $G$ is automatically a group under the same operation.", false, 1, "A subset must still satisfy closure and inverses — most subsets fail (e.g. $\\{1,2\\}\\subseteq U(10)$: $2\\cdot2=4\\notin\\{1,2\\}$)."),
  mc(T11, "medium", "Which of these operations on $\\mathbb{R}$ is NOT associative?", ["Addition", "Multiplication", "Subtraction", "None of these — all are associative"], "c", 1, "$(5-3)-1=1$ but $5-(3-1)=3$."),
  ms(T11, "hard", "Which sets, with the given operation, form a group? Select all that apply.", ["$(\\mathbb{Z},+)$", "$(\\mathbb{N},+)$ (naturals incl. 0)", "$(U(10),\\cdot_{10})$", "$(\\mathbb{Z}_6,\\cdot_6)$ (all of $\\mathbb{Z}_6$)"], ["a", "c"], 2, "The naturals fail inverse (no negative naturals); all of $\\mathbb{Z}_6$ under multiplication fails inverse for $0$ and other non-units."),
  mc(T11, "hard", "The order $|U(9)|$ (number of elements) is:", ["$4$", "$6$", "$8$", "$9$"], "b"),
  num(T11, "hard", "Compute $|U(16)|$ (the number of elements in $U(16)$).", 8, 0),
  num(T11, "hard", "Compute $|U(21)|$ (the number of elements in $U(21)$).", 12, 0),
  tf(T11, "hard", "$9\\in U(21)$.", false, 1, "$\\gcd(9,21)=3\\ne1$, so $9$ is not coprime to $21$."),
  tf(T11, "hard", "$7\\in U(20)$.", true, 1, "$\\gcd(7,20)=1$."),
  tf(T11, "hard", "$GL_2(\\mathbb{R})$ (invertible $2\\times2$ real matrices under multiplication) is abelian.", false, 1, "E.g. $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ and $\\begin{pmatrix}1&0\\\\3&-1\\end{pmatrix}$ don't commute."),
  sa(T11, "hard", "Give a counterexample matrix pair showing $2\\times2$ matrix multiplication is non-abelian (name any valid pair).", ["1 1 0 1 and 1 0 1 1", "any pair with AB != BA", "1,1,0,1 and 1,0,1,1"], 2, "Any $A,B$ with $AB\\ne BA$ is accepted — e.g. $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ and $\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$."),
  mc(T11, "hard", "Why does $a\\in\\mathbb{Z}$ have a multiplicative inverse mod $n$ exactly when $\\gcd(a,n)=1$?", ["It's just a definition with no deeper reason", "Bézout's identity gives $x,y$ with $ax+ny=1$, so $ax\\equiv1\\pmod n$", "Only prime $n$ allow inverses", "Every integer has an inverse mod every $n$"], "b"),
  sa(T11, "hard", "Prove: a group has at most one identity element. (State the key step.)", ["e1=e1e2=e2", "if e1 and e2 are both identities then e1=e1*e2=e2"], 2, "$e_1=e_1e_2$ (since $e_2$ is an identity) $=e_2$ (since $e_1$ is an identity)."),
  num(T11, "medium", "Compute $6+_9 8$ in $\\mathbb{Z}_9$.", 5, 0),
  num(T11, "medium", "Compute $3\\cdot_7 5$ in $\\mathbb{Z}_7$.", 1, 0),
  sa(T11, "easy", "List the elements of $U(7)$, separated by commas.", ["1,2,3,4,5,6", "1, 2, 3, 4, 5, 6"]),
  tf(T11, "easy", "Since $7$ is prime, $U(7)=\\{1,2,3,4,5,6\\}$ (every nonzero remainder).", true),
  mc(T11, "medium", "What is the identity of $(\\mathbb{Z}_n,+_n)$, for any $n$?", ["$1$", "$n$", "$0$", "$n-1$"], "c"),
  tf(T11, "hard", "$(\\{1,-1,i,-i\\},\\cdot)$, the 4th roots of unity, is a group.", true, 1, "Closed, identity $1$, every element's inverse is in the set (e.g. $i\\cdot(-i)=1$), and complex multiplication is associative and commutative."),

  // ================= 1.2 — Cayley Tables and the Order of an Element (43) =================
  tf(T12, "easy", "A Cayley table that is symmetric about its main diagonal belongs to an abelian group.", true),
  mc(T12, "easy", "The order of the identity element $e$ in any group is:", ["$0$", "$1$", "Undefined", "Equal to $|G|$"], "b"),
  tf(T12, "easy", "$O(e)=1$ in every group.", true),
  mc(T12, "easy", "The 'Latin square property' of a Cayley table means:", ["The table is square-shaped", "Every row and column contains each element exactly once", "The identity always appears first", "The table has an even number of rows"], "b"),
  tf(T12, "easy", "$O(a)=O(a^{-1})$ for every element $a$ in a group.", true),
  num(T12, "easy", "In $(\\mathbb{Z}_6,+_6)$, what is $O(4)$ — the order of the element $4$?", 3, 0),
  num(T12, "easy", "In $(\\mathbb{Z}_9,+_9)$, what is $O(3)$?", 3, 0),
  num(T12, "easy", "In $(\\mathbb{Z}_8,+_8)$, what is $O(2)$?", 4, 0),
  num(T12, "easy", "In $(\\mathbb{Z}_{10},+_{10})$, what is $O(6)$?", 5, 0),
  num(T12, "medium", "In $(\\mathbb{Z}_{12},+_{12})$, what is $O(4)$?", 3, 0),
  num(T12, "medium", "In $(\\mathbb{Z}_{12},+_{12})$, what is $O(5)$?", 12, 0),
  num(T12, "medium", "In $(\\mathbb{Z}_{15},+_{15})$, what is $O(1)$?", 15, 0),
  num(T12, "medium", "In $U(10)=\\{1,3,7,9\\}$, what is $O(3)$?", 4, 0),
  num(T12, "medium", "In $U(10)=\\{1,3,7,9\\}$, what is $O(7)$?", 4, 0),
  num(T12, "medium", "In $U(10)=\\{1,3,7,9\\}$, what is $O(9)$?", 2, 0),
  sa(T12, "medium", "In $U(12)=\\{1,5,7,11\\}$, what is $O(5)$? Give just the number.", ["2"]),
  num(T12, "medium", "In $U(9)=\\{1,2,4,5,7,8\\}$, what is $O(2)$?", 6, 0),
  num(T12, "medium", "In $U(9)=\\{1,2,4,5,7,8\\}$, what is $O(4)$?", 3, 0),
  num(T12, "medium", "In $U(9)=\\{1,2,4,5,7,8\\}$, what is $O(8)$?", 2, 0),
  num(T12, "medium", "In $U(7)=\\{1,\\dots,6\\}$, what is $O(2)$?", 3, 0),
  num(T12, "medium", "In $U(7)=\\{1,\\dots,6\\}$, what is $O(3)$?", 6, 0),
  num(T12, "medium", "In $U(7)=\\{1,\\dots,6\\}$, what is $O(6)$?", 2, 0),
  mc(T12, "medium", "Why does every row of a Cayley table contain each group element exactly once?", ["It's just a convention", "Left-multiplication by a fixed element is a bijection on the group", "Only true for abelian groups", "Only true for finite groups of even order"], "b"),
  tf(T12, "medium", "If the Cayley table entry at $(a,b)$ differs from the entry at $(b,a)$, the group is non-abelian.", true),
  tf(T12, "medium", "The Latin square property means every row is some rearrangement (permutation) of the group's elements.", true),
  num(T12, "medium", "In $(\\mathbb{Z}_5,+_5)$, what is $3+_5 4$ (the Cayley table entry at row $3$, column $4$)?", 2, 0),
  num(T12, "medium", "In $U(8)$ under $\\cdot_8$, what is $3\\cdot_8 5$?", 7, 0),
  num(T12, "medium", "In $(\\mathbb{Z}_8,+_8)$, what is the entry at row $6$, column $5$ (i.e. $6+_8 5$)?", 3, 0),
  tf(T12, "hard", "If $O(a)=6$ then $O(a^2)=3$.", true, 1, "$(a^2)^3=a^6=e$, and no smaller positive power of $a^2$ gives $e$ — check via $a^k=e \\iff 6\\mid k$."),
  tf(T12, "hard", "If $|G|=24$, an element with $O(a)=8$ is consistent with Lagrange's theorem.", true, 1, "$8$ divides $24$."),
  tf(T12, "hard", "A group of order $12$ can have an element of order $5$.", false, 1, "Impossible — $5$ does not divide $12$, contradicting Lagrange's theorem."),
  num(T12, "hard", "In $(\\mathbb{Z}_5,+_5)$, how many nonzero elements have order exactly $5$?", 4, 0, 1, "Since $5$ is prime, every nonzero element generates the whole group."),
  mc(T12, "hard", "If $O(a)=6$, then $O(a^{-1})=$", ["$2$", "$3$", "$6$", "$12$"], "c"),
  sa(T12, "hard", "Define the order of an element $a$ in a group, in your own words.", ["smallest positive n with a^n = e", "smallest positive integer n such that a^n equals the identity"], 2),
  sa(T12, "hard", "State why associativity is not something you need to prove separately when reading a Cayley table for a group.", ["it is inherited from the group's operation being associative everywhere", "already guaranteed since G is a group"], 2),
  mc(T12, "hard", "Building the Cayley table for $(\\mathbb{Z}_4,+_4)$: the entry at row $3$, column $3$ is:", ["$0$", "$1$", "$2$", "$6$"], "c", 1, "$3+_4 3=6\\bmod4=2$."),
  num(T12, "medium", "In $(\\mathbb{Z}_{11},+_{11})$, what is $O(1)$?", 11, 0),
  num(T12, "medium", "In $U(5)=\\{1,2,3,4\\}$, what is $O(2)$?", 4, 0),
  num(T12, "medium", "In $U(5)=\\{1,2,3,4\\}$, what is $O(4)$?", 2, 0),
  tf(T12, "easy", "A finite group's Cayley table has the same number of rows as columns.", true),
  tf(T12, "medium", "In an abelian group, the Cayley table equals its own transpose.", true),
  num(T12, "hard", "$|U(13)|=12$. If $O(a)=4$ for some $a\\in U(13)$, is this consistent with Lagrange's theorem? Answer $1$ for yes, $0$ for no.", 1, 0, 1, "$4$ divides $12$, so yes."),
  mc(T12, "medium", "In $(\\mathbb{Z}_6,+_6)$, which element(s) have order $6$?", ["$0$ only", "$1$ and $5$", "$2$ and $4$", "$3$ only"], "b"),

  // ================= 1.3 — Subgroups and Cosets (41) =================
  mc(T13, "easy", "The subgroup test requires checking closure and:", ["Associativity", "Commutativity", "Closed under inverses", "That $|H|$ is even"], "c"),
  tf(T13, "easy", "$3\\mathbb{Z}=\\{0,\\pm3,\\pm6,\\dots\\}$ is a subgroup of $(\\mathbb{Z},+)$.", true),
  tf(T13, "easy", "$4\\mathbb{Z}$ is a subgroup of $(\\mathbb{Z},+)$.", true),
  tf(T13, "easy", "Every subgroup of a group $G$ must contain the identity element of $G$.", true),
  tf(T13, "easy", "$\\{e\\}$ and $G$ itself are always subgroups of $G$.", true),
  tf(T13, "easy", "You must separately verify associativity when proving a subset is a subgroup.", false, 1, "Associativity is inherited automatically from $G$."),
  mc(T13, "easy", "The smallest possible subgroup of any group $G$ is:", ["$G$ itself", "$\\{e\\}$", "Any 2-element subset", "There is no smallest"], "b"),
  tf(T13, "medium", "$S=\\{0,\\pm1,\\pm3,\\pm5,\\dots\\}$ (zero and the odd integers) is a subgroup of $(\\mathbb{Z},+)$.", false, 1, "It fails closure: $1+3=4\\notin S$."),
  tf(T13, "medium", "The set of all odd integers (no zero) is a subgroup of $(\\mathbb{Z},+)$.", false, 1, "It doesn't even contain the identity $0$."),
  sa(T13, "medium", "List the elements of the nontrivial subgroup of $U(10)=\\{1,3,7,9\\}$.", ["1,9", "1, 9", "{1,9}"]),
  num(T13, "medium", "How many subgroups does $(\\mathbb{Z}_4,+_4)$ have (including trivial ones)?", 3, 0, 1, "$\\{0\\}$, $\\{0,2\\}$, and $\\mathbb{Z}_4$."),
  num(T13, "medium", "How many subgroups does $(\\mathbb{Z}_8,+_8)$ have?", 4, 0, 1, "$\\{0\\}$, $\\{0,4\\}$, $\\{0,2,4,6\\}$, $\\mathbb{Z}_8$ — matching the divisors of $8$."),
  num(T13, "medium", "How many subgroups does $(\\mathbb{Z}_{12},+_{12})$ have?", 6, 0, 1, "Matching the $6$ divisors of $12$: $1,2,3,4,6,12$."),
  tf(T13, "medium", "$(\\mathbb{Z}_p,+_p)$, for prime $p$, has exactly two subgroups.", true, 1, "Only $\\{0\\}$ and $\\mathbb{Z}_p$ itself — there are no divisors of $p$ other than $1$ and $p$."),
  mc(T13, "medium", "Which of the following is NOT a subgroup of $U(12)=\\{1,5,7,11\\}$?", ["$\\{1,5\\}$", "$\\{1,7\\}$", "$\\{1,11\\}$", "$\\{5,7,11\\}$"], "d", 1, "It's missing the identity $1$, so it can't be a subgroup."),
  tf(T13, "medium", "$\\{0,3,6,9\\}$ is a subgroup of $(\\mathbb{Z}_{12},+_{12})$.", true),
  tf(T13, "medium", "$\\{1,2,4,8\\}$ is a subgroup of $U(15)$ under $\\cdot_{15}$.", true, 1, "Check: $2\\cdot4=8$, $2\\cdot8=16\\equiv1$, $4\\cdot8=32\\equiv2$, $4\\cdot4=16\\equiv1$, $8\\cdot8=64\\equiv4$ — every product lands back in $\\{1,2,4,8\\}$."),
  num(T13, "medium", "The subgroup of $(\\mathbb{Z},+)$ generated by $\\{6,9\\}$ is $n\\mathbb{Z}$ for $n=$", 3, 0, 1, "$n=\\gcd(6,9)=3$."),
  mc(T13, "hard", "$(ab)^{-1}$ equals:", ["$a^{-1}b^{-1}$", "$b^{-1}a^{-1}$", "$ab$", "$ba$"], "b"),
  num(T13, "hard", "$H=\\{0,3\\}$ is a subgroup of $(\\mathbb{Z}_6,+_6)$. How many distinct cosets does $H$ have in $\\mathbb{Z}_6$?", 3, 0),
  ms(T13, "medium", "Which are trivial subgroups of any group $G$? Select all that apply.", ["$\\{e\\}$", "$G$ itself", "Any subset with 2 elements", "The set of all non-identity elements"], ["a", "b"], 2),
  num(T13, "hard", "$H=5\\mathbb{Z}$ in $(\\mathbb{Z},+)$. How many distinct cosets does $H$ have in $\\mathbb{Z}$?", 5, 0, 1, "The cosets are $0+5\\mathbb{Z},1+5\\mathbb{Z},2+5\\mathbb{Z},3+5\\mathbb{Z},4+5\\mathbb{Z}$ — even though both $H$ and $\\mathbb{Z}$ are infinite."),
  mc(T13, "hard", "Which integer is in the coset $2+4\\mathbb{Z}$?", ["$6$", "$7$", "$9$", "$11$"], "a"),
  mc(T13, "hard", "Which integer is in the coset $3+5\\mathbb{Z}$?", ["$7$", "$8$", "$9$", "$10$"], "b"),
  num(T13, "hard", "$H=\\{0,4,8\\}$ in $(\\mathbb{Z}_{12},+_{12})$. How many cosets does $H$ have?", 4, 0),
  num(T13, "hard", "$H=\\{0,6\\}$ in $(\\mathbb{Z}_{12},+_{12})$. How many cosets does $H$ have?", 6, 0),
  num(T13, "hard", "$H=\\{1,4\\}$ in $U(15)$ (order $8$). How many cosets does $H$ have?", 4, 0),
  tf(T13, "hard", "For left cosets, $aH=bH$ if and only if $a^{-1}b\\in H$.", true),
  mc(T13, "hard", "Two cosets of the same subgroup $H$ are always either identical or:", ["Overlapping in exactly one element", "Disjoint", "One contains the other", "The same size but different elements only if $G$ is abelian"], "b"),
  mc(T13, "hard", "Why do all cosets of $H$ have the same number of elements as $H$?", ["The map $h\\mapsto ha$ is a bijection $H\\to Ha$", "Cosets are defined to always be equal size, with no proof needed", "Only true when $G$ is abelian", "It isn't always true"], "a"),
  sa(T13, "hard", "State the two conditions of the subgroup test.", ["closed under the operation and closed under inverses", "closure and inverse"], 2),
  sa(T13, "medium", "Why is a subset containing no identity element automatically NOT a subgroup?", ["every subgroup must contain the identity of G", "the identity is required to be in every subgroup"], 2),
  tf(T13, "easy", "$7\\mathbb{Z}$ is a subgroup of $(\\mathbb{Z},+)$.", true),
  tf(T13, "medium", "$\\{0,2,4,6\\}$ is a subgroup of $(\\mathbb{Z}_8,+_8)$.", true),
  tf(T13, "medium", "$\\{1,2\\}$ is a subgroup of $U(15)$.", false, 1, "$2\\cdot2=4\\notin\\{1,2\\}$ — fails closure."),
  mc(T13, "medium", "In $(\\mathbb{Z}_9,+_9)$, the subgroup generated by $3$ is:", ["$\\{0,3\\}$", "$\\{0,3,6\\}$", "$\\{0,3,6,9\\}$", "All of $\\mathbb{Z}_9$"], "b"),
  num(T13, "hard", "If $a\\notin H$, how many cosets of $H$ contain $a$?", 1, 0, 1, "Exactly one — its own coset $aH$; cosets never overlap."),
  sa(T13, "hard", "Give one example of an infinite subgroup of an infinite group.", ["nZ for any n", "2Z", "any nZ"], 2),
  tf(T13, "hard", "$H=\\{1,5\\}$ is a subgroup of $U(12)$.", true, 1, "$5\\cdot5=25\\equiv1\\pmod{12}$, closed and self-inverse."),
  tf(T13, "hard", "A group of prime order $p$ has no subgroups other than $\\{e\\}$ and itself.", true, 1, "Any subgroup's order must divide $p$ (Lagrange preview) — since $p$'s only divisors are $1$ and $p$, no other subgroup size is possible."),

  // ================= 1.4 — Combining Subgroups, the Center, and Cyclic Groups (42) =================
  tf(T14, "easy", "The intersection of two subgroups of $G$ is always a subgroup of $G$.", true),
  tf(T14, "easy", "The union of two subgroups of $G$ is always a subgroup of $G$.", false, 1, "Counterexample: $2\\mathbb{Z}\\cup3\\mathbb{Z}$ is not closed — $2+3=5$ is in neither."),
  tf(T14, "easy", "$e\\in Z(G)$ for every group $G$.", true),
  tf(T14, "easy", "$Z(G)$ is always a subgroup of $G$.", true),
  tf(T14, "easy", "Every $\\mathbb{Z}_n$ is cyclic.", true),
  tf(T14, "easy", "Every cyclic group is abelian.", true),
  tf(T14, "easy", "Every abelian group is cyclic.", false, 1, "Counterexample: $U(8)$ is abelian but not cyclic."),
  mc(T14, "easy", "The center $Z(G)$ of a group is:", ["The set of elements with order $2$", "The elements that commute with every element of $G$", "The identity element only", "The largest subgroup of $G$"], "b"),
  tf(T14, "medium", "If $G$ is abelian, then $Z(G)=G$.", true),
  tf(T14, "medium", "If $Z(G)=G$, then $G$ is abelian.", true, 1, "This is the converse, and it also holds — it's an if-and-only-if."),
  tf(T14, "hard", "$U(8)$ is a cyclic group.", false, 1, "Every non-identity element of $U(8)$ has order 2, but $|U(8)|=4$ — no element generates the whole group."),
  mc(T14, "medium", "Which statement is correct?", ["Abelian $\\Rightarrow$ Cyclic", "Cyclic $\\Rightarrow$ Abelian", "Cyclic and Abelian are equivalent", "Neither implies the other"], "b"),
  num(T14, "medium", "Compute $2\\mathbb{Z}\\cap3\\mathbb{Z}=n\\mathbb{Z}$. Find $n$.", 6, 0),
  num(T14, "medium", "Compute $4\\mathbb{Z}\\cap6\\mathbb{Z}=n\\mathbb{Z}$. Find $n$.", 12, 0),
  num(T14, "medium", "Compute $3\\mathbb{Z}\\cap5\\mathbb{Z}=n\\mathbb{Z}$. Find $n$.", 15, 0),
  num(T14, "hard", "Compute $6\\mathbb{Z}\\cap10\\mathbb{Z}=n\\mathbb{Z}$. Find $n$.", 30, 0),
  tf(T14, "medium", "If $H\\subseteq K$ are both subgroups of $G$, then $H\\cup K$ is a subgroup (equal to $K$).", true),
  mc(T14, "hard", "In $GL_2(\\mathbb{R})$, the center consists of:", ["The identity matrix only", "All invertible matrices", "Nonzero scalar multiples of the identity matrix", "All upper-triangular matrices"], "c"),
  sa(T14, "medium", "Name one generator of $\\mathbb{Z}_6$.", ["1", "5"]),
  sa(T14, "medium", "Name one generator of $\\mathbb{Z}_{10}$.", ["1", "3", "7", "9"]),
  num(T14, "medium", "How many generators does $\\mathbb{Z}_7$ have?", 6, 0, 1, "Every nonzero element of $\\mathbb{Z}_p$ generates it, since $p$ is prime."),
  num(T14, "medium", "How many generators does $\\mathbb{Z}_8$ have?", 4, 0, 1, "The elements coprime to $8$: $1,3,5,7$."),
  num(T14, "hard", "How many generators does $U(10)$ have?", 2, 0, 1, "$U(10)$ is cyclic of order $4$; its generators are $3$ and $7$."),
  sa(T14, "hard", "Name one generator of $U(10)$.", ["3", "7"]),
  mc(T14, "medium", "Is $U(11)$ cyclic?", ["Yes", "No"], "a", 1, "$U(p)$ is always cyclic for prime $p$; $2$ is a generator."),
  mc(T14, "hard", "Is $U(16)$ cyclic?", ["Yes", "No"], "b", 1, "The maximum element order in $U(16)$ is $4$, less than $|U(16)|=8$ — no generator exists."),
  tf(T14, "medium", "$U(7)$ is cyclic.", true, 1, "$U(p)$ is always cyclic for prime $p$."),
  tf(T14, "medium", "$U(13)$ is cyclic.", true),
  mc(T14, "medium", "Which of these is a counterexample showing \"abelian does not imply cyclic\"?", ["$\\mathbb{Z}_6$", "$U(8)$", "$\\mathbb{Z}_p$ for prime $p$", "$U(10)$"], "b"),
  tf(T14, "hard", "Every subgroup of a cyclic group is itself cyclic.", true),
  num(T14, "hard", "In $(\\mathbb{Z}_{12},+_{12})$, let $H=\\langle2\\rangle$ and $K=\\langle3\\rangle$. Find the nonzero element in $H\\cap K$.", 6, 0, 1, "$H=\\{0,2,4,6,8,10\\}$, $K=\\{0,3,6,9\\}$; they share $0$ and $6$."),
  sa(T14, "hard", "Explain why the union of two subgroups usually fails to be a subgroup, in one sentence.", ["an element from H combined with an element from K need not land back in the union", "closure can fail because H union K need not be closed"], 2),
  mc(T14, "hard", "$Z(G)$ always contains, at minimum:", ["Only the identity $e$", "Every element of order $2$", "Half of $G$", "Nothing is guaranteed"], "a"),
  tf(T14, "medium", "The center $Z(G)$ measures, informally, how close $G$ is to being abelian.", true),
  num(T14, "medium", "In $(\\mathbb{Z}_9,+_9)$, how many generators does the group have?", 6, 0, 1, "The elements coprime to $9$: $1,2,4,5,7,8$."),
  tf(T14, "hard", "A cyclic group can have more than one generator.", true, 1, "E.g. $U(10)$ has generators $3$ and $7$."),
  mc(T14, "medium", "If $G$ is cyclic with generator $g$, every element of $G$ can be written as:", ["$g+n$ for some real $n$", "$g^n$ for some integer $n$", "$ng$ only for $n>0$", "A sum of two generators"], "b"),
  tf(T14, "easy", "$2\\mathbb{Z}$ and $3\\mathbb{Z}$ are both subgroups of $(\\mathbb{Z},+)$.", true),
  tf(T14, "medium", "$2,3\\in2\\mathbb{Z}\\cup3\\mathbb{Z}$ but $2+3=5\\notin2\\mathbb{Z}\\cup3\\mathbb{Z}$.", true),
  sa(T14, "medium", "Give an example of a group that is cyclic and give one of its generators.", ["Z6 with generator 1", "Z_n with generator 1", "any Zn, generator 1"], 2),
  num(T14, "hard", "$U(9)$ has $6$ elements and is cyclic. How many of its elements are generators?", 2, 0, 1, "The generators are the elements of order $6$ — that's $2$ and $5$; the count is $\\varphi(6)=2$."),
];

// ================================================================
// WORKSHEETS — structured content (MTH1W-style), rendered to PDF by
// /api/worksheets/[id]/regenerate. Math uses single $...$ only (the
// worksheet renderer does not support \( \) or display math).
//
// Arabic notes: the worksheet renderer's md() only auto-KaTeXes $...$ and
// otherwise passes strings through as raw HTML, so a dir="rtl" block appended
// to a string renders fine in the generated PDF. These are genuine
// explanations (intuition, common pitfalls, forward-looking connections to
// later theorems) — not translations of the adjacent English.
// ================================================================
// Inline font-family (not just the shell's [dir="rtl"] CSS rule) because an
// inline style always wins the cascade over a stylesheet selector — the
// minimal serverless Chromium used to render these PDFs has zero
// Arabic-script glyphs in its built-in fonts, so without a real Arabic
// webfont here the text renders as blank/invisible boxes.
const arNote = (text) =>
  `<div dir="rtl" style="margin-top:8px;padding:8px 10px;background:#eef2ff;border-right:4px solid #3b5bdb;border-radius:6px;font-family:'Noto Naskh Arabic',Tahoma,'Segoe UI',Arial,sans-serif;line-height:1.85;text-align:right;font-size:10pt;">🗣️ ${text}</div>`;

const WS = [
  {
    code: "1.1",
    title: "Groups: Definition and Basic Examples",
    content: {
      grade: "University — Abstract Algebra",
      title: "Groups: Definition and Basic Examples",
      intro: "A group is a set $G$ with a binary operation satisfying four axioms: closure, associativity, identity, and inverse. Work through the examples, then check your understanding of each axiom on the problems below."
        + arNote("فكرة الزمرة (Group) هي تعميم: بدل أن ندرس الأعداد أو المصفوفات كل على حدة، نبحث عن الشروط المشتركة التي تجعل عملية ما \"تتصرف بانتظام\" — وأي مجموعة تحقّق هذه الشروط الأربعة تكتسب فورًا كل نظرية أُثبتت للزمر بشكل عام، دون أي إثبات إضافي. لهذا يجب التحقق من الشروط الأربعة بالترتيب في كل مرة، لا تفترض أي واحد منها."),
      lesson: [
        ["The Four Axioms", "Closure ($a*b\\in G$), Associativity ($(ab)c=a(bc)$), Identity ($\\exists\\,e: ae=a=ea$), Inverse ($\\forall a\\,\\exists\\,a^{-1}: aa^{-1}=e=a^{-1}a$)."
          + arNote("Closure (الانغلاق) هو أكثر شرط يُنسى لأنه يبدو بديهيًا — لكن في أمثلة مثل \"الأعداد الفردية مع الجمع\" ينهار فورًا (فردي + فردي = زوجي، خارج المجموعة). Associativity غالبًا ما تكون محقّقة تلقائيًا في الأمثلة الشائعة (أعداد، مصفوفات) فلا تحتاج إثباتًا مطوّلًا عادة — لكن Identity و Inverse هما مركز العمل الحقيقي: أول شيء تفعله دائمًا هو تحديد مَن هو العنصر المحايد $e$، لأن كل شيء آخر (خاصة المعكوس) يُقاس بالنسبة له.")],
        ["Abelian vs Non-Abelian", "A group is abelian if $ab=ba$ for every $a,b$. One counterexample pair is enough to prove a group is non-abelian."
          + arNote("لاحظ عدم التناظر في صعوبة الإثبات: لإثبات أن زمرة <strong>Abelian</strong>، يجب إثبات $ab=ba$ لكل عنصرين بشكل عام (غالبًا عبر معالجة جبرية). أما لإثبات أنها <strong>Non-Abelian</strong>، يكفي رقمان محدّدان فقط. هذا الفرق هو مصدر شائع لأخطاء الطلاب في الامتحانات — لا تحاول إثبات \"غير تبديلية\" بطريقة عامة، ابحث فقط عن مثال مضاد.")],
        ["The Group $U(n)$", "$U(n)$ = integers less than $n$, coprime to $n$, under multiplication mod $n$. Always abelian."
          + arNote("لماذا الأوّلية النسبية (Coprime) تحديدًا؟ لأن العنصر $a$ له معكوس ضربي Modulo $n$ إذا وفقط إذا كان $\\gcd(a,n)=1$ — وهذه نتيجة مباشرة من هوية Bézout: يوجد $x,y$ بحيث $ax+ny=1$، وبأخذ Modulo $n$ نحصل $ax\\equiv1$، أي $x$ هو معكوس $a$. هذا يفسّر لماذا استبعدنا العناصر غير الأوّلية نسبيًا — هي ببساطة لا تملك معكوسًا، فتكسر شرط Inverse.")],
      ],
      examples: [
        ["Example 1", "Show $(\\mathbb{Z}_5,+_5)$ is a group and find its identity.", "Closure/associativity hold for mod-addition. Identity $e=0$ since $a+_5 0=a$. Every $a$ has inverse $5-a$."
          + arNote("هذا النمط يعمم مباشرة على أي $\\mathbb{Z}_n$: الهوية دائمًا $0$، ومعكوس $a$ دائمًا $n-a$. احفظ هذا القالب — سيوفر عليك وقتًا كبيرًا في الامتحان بدل إعادة الإثبات من الصفر لكل $n$.")],
        ["Example 2", "Is $\\{1,-1\\}$ a group under multiplication?", "Identity $1$. Inverses: $1\\cdot1=1$, $(-1)(-1)=1$ — each element is its own inverse. Closed and associative (real number multiplication). Yes, a group."
          + arNote("هذه أصغر زمرة غير تافهة ممكنة (Order = 2)، وكل عنصر فيها معكوس نفسه — خاصية ستراها لاحقًا مرتبطة مباشرة بإثبات \"إذا كان $a^2=e$ للجميع فالزمرة تبديلية\" في الدرس ١.٣.")],
        ["Example 3", "List $U(15)$.", "Integers from $1$ to $14$ coprime to $15=3\\cdot5$: exclude multiples of $3$ and $5$. $U(15)=\\{1,2,4,7,8,11,13,14\\}$."
          + arNote("اختصار عملي: بدل فحص $\\gcd$ لكل عدد على حدة، استبعد مباشرة مضاعفات كل عامل أوّلي في $n$ (هنا: مضاعفات ٣ ومضاعفات ٥). هذا أسرع بكثير عندما يكون $n$ كبيرًا.")],
        ["Example 4", "Show $\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ and $\\begin{pmatrix}1&0\\\\3&-1\\end{pmatrix}$ don't commute.", "$AB=\\begin{pmatrix}7&-2\\\\15&-4\\end{pmatrix}$ but $BA=\\begin{pmatrix}1&2\\\\0&2\\end{pmatrix}$ — different matrices, so $GL_2(\\mathbb{R})$ is non-abelian."
          + arNote("لاحظ: لم نحتج لإثبات \"عام\" لكل المصفوفات — رقمان محددان كفيا لإسقاط خاصية Abelian بالكامل. هذا أسرع طريق لإثبات \"غير تبديلية\" في أي امتحان.")],
        ["Example 5", "Is $(\\mathbb{N},-)$ a group, where $\\mathbb{N}=\\{0,1,2,\\dots\\}$?", "No — fails closure: $2-5=-3\\notin\\mathbb{N}$. The result of the operation must stay inside the set."
          + arNote("Closure يبدو بديهيًا لكنه أول ما ينهار عمليًا. هنا الطرح ببساطة \"يخرج\" من المجموعة — لا حاجة للتحقق من باقي الشروط بعد فشل شرط واحد.")],
        ["Example 6", "Does $2$ have a multiplicative inverse in $(\\mathbb{Z}_6,\\cdot_6)$?", "Check $2\\cdot_6 x=1$ for $x=0,\\dots,5$: results are $0,2,4,0,2,4$ — $1$ never appears. No inverse exists."
          + arNote("هذا يثبت عمليًا التحذير في الدرس ١.١: ضرب Modulo على <strong>كل</strong> $\\mathbb{Z}_n$ ليس زمرة — العنصر $2$ هنا بلا معكوس لأن $\\gcd(2,6)=2\\ne1$.")],
        ["Example 7", "Verify closure for $\\{1,-1,i,-i\\}$ under multiplication using $i\\cdot(-i)$.", "$i\\cdot(-i)=-i^2=-(-1)=1\\in\\{1,-1,i,-i\\}$ — closed for this pair (and, checking every pair, the whole set is closed). This is a group — the 4th roots of unity."
          + arNote("هذه المجموعة ستظهر مرة أخرى في الدرس ١.٢ كمثال على استخدام جدول Cayley — تذكّرها.")],
        ["Example 8", "Prove a group has only one identity element.", "Suppose $e_1,e_2$ are both identities. Then $e_1=e_1e_2$ (since $e_2$ is an identity) $=e_2$ (since $e_1$ is an identity). So $e_1=e_2$."
          + arNote("هذا نمط إثبات كلاسيكي: افترض وجود عنصرين يحققان نفس الخاصية، ثم أثبت أنهما متطابقان بالضرورة. سيتكرر هذا الأسلوب لاحقًا لإثبات تفرّد المعكوس أيضًا.")],
        ["Example 9", "List $U(20)$.", "$20=2^2\\cdot5$: exclude multiples of $2$ and $5$ from $1,\\dots,19$. $U(20)=\\{1,3,7,9,11,13,17,19\\}$ — $8$ elements."
          + arNote("عدد عناصر $U(n)$ يُسمّى دالة أويلر $\\varphi(n)$ (Euler's totient function) — ستقابلها لاحقًا في المقرر. هنا $\\varphi(20)=8$.")],
      ],
      questions: [
        ["Q1", "State the four group axioms in your own words.", "Closure, associativity, identity, inverse."],
        ["Q2", "Is $(\\mathbb{Q},+)$ a group? Is it abelian?", "Yes, and yes — identity $0$, inverse $-a$, addition is commutative."],
        ["Q3", "Compute $4+_6 5$.", "$3$ (since $9 \\bmod 6 = 3$)."],
        ["Q4", "List $U(14)$.", "$\\{1,3,5,9,11,13\\}$."],
        ["Q5", "Give a counterexample showing $2\\times2$ matrix multiplication is non-abelian.", "Any pair $A,B$ with $AB\\ne BA$, e.g. $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ and $\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$."],
        ["Q6", "Why is $(\\mathbb{Z},\\cdot)$ not a group?", "Most integers (e.g. $2$) have no integer multiplicative inverse."],
        ["Q7", "Is $(\\mathbb{Z},-)$ a group?", "No — not associative: $(5-3)-1=1$ but $5-(3-1)=3$."],
        ["Q8", "Compute $6+_9 7$.", "$4$ (since $13\\bmod9=4$)."],
        ["Q9", "List $U(16)$.", "$\\{1,3,5,7,9,11,13,15\\}$."],
        ["Q10", "Is $\\{1,i,-1,-i\\}$ closed under multiplication? Check $i\\cdot(-i)$.", "Yes — $i\\cdot(-i)=1$, which is in the set."],
        ["Q11", "True or false: every group is abelian.", "False — e.g. $GL_2(\\mathbb{R})$ under matrix multiplication."],
        ["Q12", "Find the inverse of $4$ in $(\\mathbb{Z}_9,+_9)$.", "$5$, since $4+_9 5=9\\equiv0$."],
        ["Q13 — Challenge", "If a single element $a$ in a group $G$ satisfies $a^2=e$, does that force $G$ to be abelian?", "No — the Lesson 1.3 theorem needs $a^2=e$ for <em>every</em> element, not just one. A single self-inverse element proves nothing about the rest of $G$."],
      ],
    },
  },
  {
    code: "1.2",
    title: "Cayley Tables and the Order of an Element",
    content: {
      grade: "University — Abstract Algebra",
      title: "Cayley Tables and the Order of an Element",
      intro: "A Cayley table lists every product in a finite group. Use it to check the abelian property and the Latin square property, then practice finding the order of an element."
        + arNote("جدول Cayley يشبه \"بصمة\" الزمرة بالكامل: كل سلوك الزمرة المنتهية (Finite Group) يمكن قراءته من جدول واحد، دون أي جبر إضافي. هذا يجعله أداة تشخيص سريعة جدًا في الامتحان — قبل أن تبدأ أي إثبات، ارسم الجدول إن أمكن وستوفر وقتًا."),
      lesson: [
        ["Reading a Cayley Table", "Symmetric about the diagonal $\\Rightarrow$ abelian. Every row/column contains each element exactly once (Latin square property)."
          + arNote("لماذا يظهر كل عنصر مرة واحدة بالضبط في كل صف؟ لأن الدالة $x\\mapsto a*x$ (الضرب في عنصر ثابت $a$ من اليسار) هي دالة Bijection (تقابل) على الزمرة — لها دالة عكسية هي الضرب في $a^{-1}$. بما أنها تقابل، فهي تُرتّب عناصر الزمرة في الصف دون تكرار ودون نقصان. هذا التبرير أعمق من مجرد \"حفظ القاعدة\" — إذا فهمته فلن تنسى الخاصية أبدًا.")],
        ["Order of an Element", "$O(a)$ is the smallest positive $n$ with $a^n=e$ (or $na=0$ additively). $O(a)=O(a^{-1})$ always."
          + arNote("ملاحظة مهمة للأمام: رتبة أي عنصر $O(a)$ تقسم دائمًا رتبة الزمرة نفسها $|G|$ — هذه نتيجة من نظرية Lagrange التي ستدرسها لاحقًا، لكن يمكنك استخدامها الآن كأداة تحقّق سريعة: إذا حسبت $O(a)$ ولم تقسم $|G|$، فهناك خطأ في حسابك.")],
      ],
      examples: [
        ["Example 1", "Build the Cayley table for $(\\mathbb{Z}_4,+_4)$.", "Rows/cols $0,1,2,3$; entry $(r,c)=(r+c)\\bmod4$. Symmetric $\\Rightarrow$ abelian."
          + arNote("لا تفاجأ بالتماثل هنا — نعرف مسبقًا أن كل $\\mathbb{Z}_n$ تبديلية، فالهدف الحقيقي من هذا التمرين هو إتقان مهارة بناء الجدول نفسها، لا اكتشاف شيء جديد.")],
        ["Example 2", "Find $O(2)$ in $U(15)=\\{1,2,4,7,8,11,13,14\\}$.", "$2^1=2,2^2=4,2^3=8,2^4=16\\equiv1$. So $O(2)=4$."
          + arNote("تحقّق سريع: $|U(15)|=8$، و $O(2)=4$ يقسم $8$ ✓ — تمامًا كما توقّعنا في الملاحظة أعلاه.")],
        ["Example 3", "Find $O(3)$ in $(\\mathbb{Z}_9,+_9)$.", "$3,6,0$ — reaches $0$ in $3$ steps. $O(3)=3$."
          + arNote("مرة أخرى: $|\\mathbb{Z}_9|=9$، و $O(3)=3$ يقسم $9$ ✓. لاحظ الفرق بين هذا المثال (جمع Modulo) والمثال السابق (ضرب Modulo) — القاعدة $a^n=e$ تصبح $na=0$ لأن العملية هنا جمعية لا ضربية.")],
        ["Example 4", "Build the Cayley table for $U(5)=\\{1,2,3,4\\}$ under $\\cdot_5$ and read off the identity.", "Row $1$: $1,2,3,4$. Row $2$: $2,4,1,3$. Row $3$: $3,1,4,2$. Row $4$: $4,3,2,1$. Symmetric; identity is $1$ (its row/column just copies the header)."
          + arNote("طريقة سريعة لتحديد العنصر المحايد من الجدول مباشرة: هو العنصر الذي يجعل صفّه (وعموده) مطابقًا تمامًا لرأس الجدول.")],
        ["Example 5", "How would non-abelian behaviour show up in a Cayley table, without building the full table?", "Find one entry where row $a$/col $b$ differs from row $b$/col $a$ — e.g. Lesson 1.1's matrices give $AB\\ne BA$, so their table (if you built one) would NOT be symmetric across the diagonal."
          + arNote("هذا يوضح أن قراءة الجدول ليست فقط \"ابنِ الجدول ثم افحص\" — يمكنك أحيانًا التنبؤ بعدم التماثل من معرفة مسبقة بأن العملية غير تبديلية.")],
        ["Example 6", "Find $O(4)$ in $(\\mathbb{Z}_{10},+_{10})$.", "$4,8,12\\equiv2,16\\equiv6,20\\equiv0$ — $5$ steps. $O(4)=5$, which divides $|\\mathbb{Z}_{10}|=10$. ✓"
          + arNote("تحقّق القسمة يعمل دائمًا كأداة للتأكد من عدم وجود خطأ حسابي — إذا لم يقسم الناتج $|G|$ فأعد الحساب.")],
        ["Example 7", "Find $O(5)$ in $U(7)=\\{1,2,3,4,5,6\\}$.", "$5,25\\equiv4,20\\equiv6,30\\equiv2,10\\equiv3,15\\equiv1$ — $6$ steps. $O(5)=6=|U(7)|$, so $5$ is a generator."
          + arNote("عندما تساوي رتبة عنصر رتبة الزمرة بأكملها، فهذا العنصر \"مولّد\" (Generator) — سترى هذا المصطلح رسميًا في الدرس ١.٤.")],
        ["Example 8", "Find $O(2)$ in $U(9)=\\{1,2,4,5,7,8\\}$.", "$2,4,8,16\\equiv7,14\\equiv5,10\\equiv1$ — $6$ steps. $O(2)=6=|U(9)|$. ✓ divides."
          + arNote("نفس الفكرة مرة أخرى: الرتبة تساوي حجم الزمرة بالكامل، إذن $2$ مولّد لـ $U(9)$.")],
        ["Example 9", "In $(\\mathbb{Z}_{12},+_{12})$, find $O(1)$ — the element of maximum possible order.", "$1,2,3,\\dots,12\\equiv0$ — needs all $12$ steps. $O(1)=12=|\\mathbb{Z}_{12}|$: $1$ generates the whole group."
          + arNote("$1$ هو دائمًا مولّد لأي $\\mathbb{Z}_n$ — منطقي، لأن الجمع المتكرر لـ $1$ يمر بكل الأعداد بالترتيب قبل أن يعود للصفر.")],
      ],
      questions: [
        ["Q1", "Build the Cayley table for $U(9)=\\{1,2,4,5,7,8\\}$ under $\\cdot_9$.", "Symmetric table; identity row/col is $1$."],
        ["Q2", "Find $O(1)$ in any group.", "$1$ always."],
        ["Q3", "In $(\\mathbb{Z}_{10},+_{10})$, find $O(4)$.", "$O(4)=5$ (since $5\\times4=20\\equiv0$, and no smaller multiple works)."],
        ["Q4", "In $U(7)=\\{1,2,3,4,5,6\\}$, find $O(3)$.", "$3,2,6,4,5,1$ — $O(3)=6$."],
        ["Q5", "If a Cayley table is NOT symmetric, what does that tell you?", "The group is non-abelian."],
        ["Q6", "Explain why $O(a)=O(a^{-1})$.", "$(a^{-1})^n=(a^n)^{-1}$, so $a^n=e \\iff (a^{-1})^n=e$ — they reach the identity after the same number of steps."],
        ["Q7", "Build the Cayley table for $(\\mathbb{Z}_3,+_3)$.", "Rows/cols $0,1,2$; entry $(r,c)=(r+c)\\bmod3$. Symmetric."],
        ["Q8", "Find $O(5)$ in $(\\mathbb{Z}_{10},+_{10})$.", "$5,10\\equiv0$ — $O(5)=2$."],
        ["Q9", "Find $O(4)$ in $U(9)=\\{1,2,4,5,7,8\\}$.", "$4,16\\equiv7,28\\equiv1$ — $O(4)=3$."],
        ["Q10", "True or false: a Cayley table for an abelian group is always symmetric.", "True."],
        ["Q11", "In $U(11)=\\{1,\\dots,10\\}$, find $O(10)$.", "$10\\equiv-1$, and $(-1)^2=1$ — $O(10)=2$."],
        ["Q12", "If $O(a)=5$ for some element in a group of order $10$, is that possible? Explain.", "Yes — $5$ divides $10$, so it's consistent (though this alone doesn't prove such an element exists)."],
        ["Q13 — Challenge", "Build the Cayley table for $U(8)=\\{1,3,5,7\\}$ and explain what it reveals about every non-identity element's order.", "Every diagonal entry is $1$ ($3^2\\equiv1,5^2\\equiv1,7^2\\equiv1$) — every non-identity element has order $2$, foreshadowing that $U(8)$ is not cyclic (Lesson 1.4)."],
      ],
    },
  },
  {
    code: "1.3",
    title: "Subgroups and Cosets",
    content: {
      grade: "University — Abstract Algebra",
      title: "Subgroups and Cosets",
      intro: "A subgroup is a subset that's a group in its own right. Practice the two-step subgroup test, then find cosets — the partition of a group by a subgroup."
        + arNote("فكّر في الزمرة الجزئية (Subgroup) على أنها \"زمرة تعيش داخل زمرة أكبر\" — تمامًا مثل قواسم عدد صحيح. اكتشاف الزمر الجزئية لزمرة كبيرة يكشف بنيتها الداخلية، وهذا هو محور جزء كبير من الجبر المجرد بعد هذه المرحلة."),
      lesson: [
        ["Subgroup Test", "$H\\subseteq G$ nonempty is a subgroup if: (1) closed under the operation, (2) closed under inverses. Associativity and identity come free."
          + arNote("لماذا \"تأتي مجانًا\"؟ التجميعية محقّقة أصلًا لكل عناصر $G$، فبالتأكيد محقّقة لأي مجموعة جزئية منها. أما العنصر المحايد: خذ أي عنصر $a\\in H$ (موجود لأن $H$ غير خالية)، الشرط (٢) يعطينا $a^{-1}\\in H$، والشرط (١) يعطينا $a\\cdot a^{-1}=e\\in H$. هكذا يظهر $e$ تلقائيًا من الشرطين فقط — هذا هو التفسير المنطقي الكامل، ليس مجرد قاعدة تُحفظ.")],
        ["Cosets", "For $H\\le G$ and $a\\in G$: right coset $Ha=\\{ha:h\\in H\\}$, left coset $aH=\\{ah:h\\in H\\}$. Cosets partition $G$ into equal-size, non-overlapping pieces."
          + arNote("تخيّل الزمرة $G$ كقطعة بيتزا كبيرة، والـ Cosets هي تقطيعها إلى قطع متساوية الحجم تمامًا (بحجم $H$)، بدون أي تداخل، وتغطي البيتزا بالكامل. هذه الفكرة — \"تقسيم متساوٍ بلا تداخل\" — هي البذرة الأولى لنظرية Lagrange المهمة جدًا: عدد عناصر $H$ يجب أن يقسم عدد عناصر $G$، لأن $G$ هي ببساطة عدة نسخ متطابقة الحجم من $H$ مجتمعة معًا.")],
      ],
      examples: [
        ["Example 1", "Is $5\\mathbb{Z}$ a subgroup of $(\\mathbb{Z},+)$?", "Closed: multiples of $5$ sum to a multiple of $5$. Inverses: $-5k$ is a multiple of $5$. Yes."
          + arNote("هذا النمط $n\\mathbb{Z}\\le\\mathbb{Z}$ يعمل لأي عدد صحيح موجب $n$ — في الواقع، هذه هي الزمر الجزئية الوحيدة الممكنة لـ $(\\mathbb{Z},+)$، بلا استثناء.")],
        ["Example 2", "Find all subgroups of $(\\mathbb{Z}_4,+_4)$.", "Trivial: $\\{0\\}$, $\\mathbb{Z}_4$. Nontrivial: $\\{0,2\\}$ (multiples of $2$)."
          + arNote("لاحظ نمطًا عميقًا: الزمر الجزئية لـ $\\mathbb{Z}_n$ تُطابق تمامًا <strong>قواسم</strong> $n$. هنا قواسم $4$ هي $1,2,4$ — وهذا بالضبط عدد الزمر الجزئية ($\\{0\\}$ يقابل $4$، $\\{0,2\\}$ يقابل $2$، و$\\mathbb{Z}_4$ يقابل $1$). جرّب تطبيق هذه الملاحظة على $\\mathbb{Z}_6$ من الدرس ١.٣ للتأكد.")],
        ["Example 3", "Find the cosets of $H=\\{1,4\\}$ in $U(5)=\\{1,2,3,4\\}$ under $\\cdot_5$.", "$1H=\\{1,4\\}=H$. $2H=\\{2,8\\bmod5\\}=\\{2,3\\}$. Two cosets cover $U(5)$."
          + arNote("تحقّق العدّ: كل Coset حجمه $2=|H|$، وعدد الـ Cosets هو $2$، والمجموع $2\\times2=4=|U(5)|$ ✓ — هذا بالضبط مبدأ العدّ وراء نظرية Lagrange مطبّقًا هنا عمليًا.")],
        ["Example 4", "Show the diagonal invertible matrices $H=\\left\\{\\begin{pmatrix}a&0\\\\0&d\\end{pmatrix}:ad\\ne0\\right\\}$ form a subgroup of $GL_2(\\mathbb{R})$.", "Closed: $\\begin{pmatrix}a_1&0\\\\0&d_1\\end{pmatrix}\\begin{pmatrix}a_2&0\\\\0&d_2\\end{pmatrix}=\\begin{pmatrix}a_1a_2&0\\\\0&d_1d_2\\end{pmatrix}$, still diagonal with nonzero entries. Inverse: $\\begin{pmatrix}1/a&0\\\\0&1/d\\end{pmatrix}$, also diagonal. Subgroup confirmed."
          + arNote("هذا نسخة أبسط من مثال المصفوفات المثلثية العلوية في الدرس ١.٣ — نفس المنطق تمامًا، لكن بحساب أخف لأن المصفوفات القطرية لا تحتاج إلا لضرب الأقطار.")],
        ["Example 5", "Is $S=\\{1,2,3\\}\\subset\\mathbb{Z}_4$ a subgroup of $(\\mathbb{Z}_4,+_4)$?", "No — $S$ doesn't even contain the identity $0$, and $1+_4 3=0\\notin S$ fails closure too."
          + arNote("مثال مضاد سريع: إذا لم تجد $0$ (أو $e$ في الحالة العامة) داخل المجموعة الجزئية، فهي ليست زمرة جزئية على الفور — لا حاجة لفحص أي شرط آخر.")],
        ["Example 6", "Find all subgroups of $(\\mathbb{Z}_8,+_8)$.", "Divisors of $8$: $1,2,4,8$. Subgroups: $\\{0\\}$, $\\{0,4\\}$, $\\{0,2,4,6\\}$, $\\mathbb{Z}_8$."
          + arNote("تطبيق مباشر لملاحظة \"الزمر الجزئية = قواسم $n$\" من المثال الثاني أعلاه — أربعة قواسم لـ $8$، أربع زمر جزئية بالضبط.")],
        ["Example 7", "Find a nontrivial subgroup of $U(15)=\\{1,2,4,7,8,11,13,14\\}$.", "$H=\\{1,4\\}$: closed since $4\\cdot4=16\\equiv1\\pmod{15}$, and $4$ is its own inverse. Subgroup of order $2$."
          + arNote("عندما لا يكون $n$ أوّليًا، غالبًا يمكنك إيجاد زمرة جزئية صغيرة بالبحث عن عنصر $a$ بحيث $a^2\\equiv1$ — فيعطيك مباشرة $\\{1,a\\}$.")],
        ["Example 8", "Describe the cosets of $3\\mathbb{Z}$ in $(\\mathbb{Z},+)$.", "$3\\mathbb{Z}=\\{\\dots,-3,0,3,6,\\dots\\}$, $1+3\\mathbb{Z}=\\{\\dots,-2,1,4,\\dots\\}$, $2+3\\mathbb{Z}=\\{\\dots,-1,2,5,\\dots\\}$ — exactly the three remainder classes mod $3$."
          + arNote("هذا يربط Cosets مباشرة بفكرة تعرفها مسبقًا: \"باقي القسمة على $3$\" هي في الحقيقة تقسيم $\\mathbb{Z}$ إلى Cosets لـ $3\\mathbb{Z}$ — حتى في زمرة لا نهائية، الفكرة نفسها تعمل.")],
        ["Example 9", "Find all cosets of $H=\\{1,4\\}$ in $U(15)=\\{1,2,4,7,8,11,13,14\\}$.", "$1H=\\{1,4\\}$, $2H=\\{2,8\\}$, $7H=\\{7,13\\bmod15\\!=\\!28\\bmod15\\}=\\{7,13\\}$, $11H=\\{11,44\\bmod15\\}=\\{11,14\\}$. Four cosets of size $2$: $4\\times2=8=|U(15)|$. ✓"
          + arNote("مثال أكبر لنفس مبدأ العدّ: أربع Cosets × حجم ٢ لكل واحدة = ٨ = حجم الزمرة كاملة. هذا التكرار مقصود — احفظ هذا النمط جيدًا فهو أساس نظرية Lagrange.")],
      ],
      questions: [
        ["Q1", "Is $6\\mathbb{Z}$ a subgroup of $(\\mathbb{Z},+)$?", "Yes — same argument as $5\\mathbb{Z}$."],
        ["Q2", "Is $H=\\{0,1,3\\}$ a subgroup of $(\\mathbb{Z}_6,+_6)$?", "No — $1+_6 3=4\\notin H$, fails closure."],
        ["Q3", "List all subgroups of $(\\mathbb{Z}_5,+_5)$.", "Only $\\{0\\}$ and $\\mathbb{Z}_5$ (since $5$ is prime, no nontrivial subgroup)."],
        ["Q4", "State $(ab)^{-1}$ in terms of $a^{-1}$ and $b^{-1}$.", "$(ab)^{-1}=b^{-1}a^{-1}$."],
        ["Q5", "Find the cosets of $H=\\{0,2,4\\}$ in $(\\mathbb{Z}_6,+_6)$.", "$0+H=\\{0,2,4\\}$; $1+H=\\{1,3,5\\}$. Two cosets."],
        ["Q6", "Why is associativity never checked in the subgroup test?", "It already holds for every element of the larger group $G$, so it automatically holds for any subset."],
        ["Q7", "Is $7\\mathbb{Z}$ a subgroup of $(\\mathbb{Z},+)$?", "Yes — same pattern as $5\\mathbb{Z}$ and $6\\mathbb{Z}$."],
        ["Q8", "Is $H=\\{0,2,4,6\\}$ a subgroup of $(\\mathbb{Z}_8,+_8)$?", "Yes — closed and closed under inverses (matches the divisor-$2$ subgroup of $\\mathbb{Z}_8$)."],
        ["Q9", "List all subgroups of $(\\mathbb{Z}_{10},+_{10})$.", "Divisors of $10$: $1,2,5,10$. Subgroups: $\\{0\\}$, $\\{0,5\\}$, $\\{0,2,4,6,8\\}$, $\\mathbb{Z}_{10}$."],
        ["Q10", "Find the cosets of $H=\\{0,3\\}$ in $(\\mathbb{Z}_6,+_6)$.", "$0+H=\\{0,3\\}$, $1+H=\\{1,4\\}$, $2+H=\\{2,5\\}$ — three cosets."],
        ["Q11", "Is $\\{1,2\\}$ a subgroup of $U(15)$?", "No — fails closure: $2\\cdot2=4\\notin\\{1,2\\}$."],
        ["Q12", "Is $\\{1,14\\}$ a subgroup of $U(15)$?", "Yes — $14\\equiv-1\\pmod{15}$, and $(-1)^2=1$, so it's closed and $14$ is its own inverse."],
        ["Q13 — Challenge", "Prove that every right coset $Ha$ has exactly the same number of elements as $H$.", "The map $h\\mapsto ha$ is a bijection $H\\to Ha$ — its inverse is $x\\mapsto xa^{-1}$. A bijection between two sets means they have the same size, so $|Ha|=|H|$."],
      ],
    },
  },
  {
    code: "1.4",
    title: "Combining Subgroups, the Center, and Cyclic Groups",
    content: {
      grade: "University — Abstract Algebra",
      title: "Combining Subgroups, the Center, and Cyclic Groups",
      intro: "Wrap up the subgroup toolkit: intersections, unions, the center of a group, and cyclic groups — the simplest and best-understood groups in the theory."
        + arNote("هذا الدرس يُغلق \"صندوق أدوات\" الزمر الجزئية: بعد أن تعلّمنا ما هي الزمرة الجزئية وكيف نقسّم الزمرة بها (Cosets)، السؤال الطبيعي التالي هو: كيف تتفاعل الزمر الجزئية مع بعضها (تقاطع/اتحاد)؟ وأي جزء من الزمرة \"هادئ\" دائمًا (المركز)؟ وأي الزمر أبسط بنية ممكنة (الدورية)؟"),
      lesson: [
        ["Intersection & Union", "$H\\cap K$ is always a subgroup. $H\\cup K$ usually is NOT (e.g. $2\\mathbb{Z}\\cup3\\mathbb{Z}$ fails closure: $2+3=5$)."
          + arNote("فكّر في التقاطع (Intersection) كأداة \"AND\": العنصر يجب أن يحقق شروط $H$ وشروط $K$ معًا، وبما أن كلتا الزمرتين مغلقتان (Closed) على حدة، فإن التقاطع يرث الانغلاق من كليهما تلقائيًا. أما الاتحاد (Union) فهو \"OR\": العنصر يكفي أن يكون في أحدهما، لكن لا ضمان أن ناتج ضرب عنصر من $H$ مع عنصر من $K$ يبقى في الاتحاد — وهذا بالضبط ما ينهار في المثال.")],
        ["Center $Z(G)$", "$Z(G)=\\{x\\in G: xy=yx \\text{ for all } y\\in G\\}$ — always a subgroup. $G$ abelian $\\iff Z(G)=G$."
          + arNote("تخيّل $Z(G)$ كـ \"المنطقة الهادئة\" في الزمرة — العناصر التي لا يهمها الترتيب عند التعامل مع أي عنصر آخر. كلما كان $Z(G)$ أكبر، كانت الزمرة أقرب لأن تكون تبديلية داخليًا، حتى لو لم تكن $G$ نفسها Abelian بالكامل. أصغر $Z(G)$ ممكن هو $\\{e\\}$ فقط (زمرة \"غير هادئة\" تمامًا)، وأكبره هو $G$ نفسها (زمرة تبديلية بالكامل).")],
        ["Cyclic Groups", "$G$ is cyclic if some $g$ generates every element as a power of $g$. Cyclic $\\Rightarrow$ abelian, but not conversely (e.g. $U(8)$)."
          + arNote("تخيّل المولّد (Generator) كزرّ واحد — كل ضغطة عليه (كل قوة $g^k$) تنقلك لعنصر جديد، حتى تدور وتُغطي الزمرة بالكامل ثم تعود للبداية — من هنا جاء اسم \"Cyclic\" (دورية). هذه أبسط بنية ممكنة لزمرة، وهي مفهومة بالكامل رياضيًا: كل زمرة دورية تتصرف تمامًا مثل $\\mathbb{Z}_n$ لعدد معين $n$.")],
      ],
      examples: [
        ["Example 1", "Find $4\\mathbb{Z}\\cap6\\mathbb{Z}$.", "Multiples of $\\text{lcm}(4,6)=12$: $12\\mathbb{Z}$."
          + arNote("قاعدة عامة تستحق الحفظ: $n\\mathbb{Z}\\cap m\\mathbb{Z}=\\text{lcm}(n,m)\\mathbb{Z}$ دائمًا — لا حاجة لإعادة الاشتقاق كل مرة.")],
        ["Example 2", "Is $U(11)=\\{1,\\dots,10\\}$ cyclic?", "Powers of $2$: $2,4,8,5,10,9,7,3,6,1$ — all $10$ elements. Yes, cyclic; $2$ is a generator."
          + arNote("نتيجة عامة مهمة: $U(p)$ دورية (Cyclic) دائمًا عندما يكون $p$ عددًا أوّليًا — تحقّقنا من هذا هنا لـ $p=11$، وهي نفس النتيجة التي رأيناها سابقًا مع $U(5)$ و$U(7)$. قارن هذا مع $U(8)$ (حيث $8$ ليس أوّليًا) وهي ليست دورية — العددية الأوّلية شرط أساسي هنا.")],
        ["Example 3", "Find $Z(G)$ for an abelian group $G$.", "$Z(G)=G$, since every element commutes with every other by definition of abelian."
          + arNote("هذه أسهل حالة ممكنة لحساب المركز — الجزء الصعب فعليًا هو إيجاد $Z(G)$ لزمرة <strong>غير</strong> تبديلية، حيث $Z(G)$ يكون أصغر من $G$ بشكل حقيقي (مجموعة جزئية صريحة، وليس كل الزمرة).")],
        ["Example 4", "Find $\\langle2\\rangle\\cap\\langle3\\rangle$ in $(\\mathbb{Z}_{12},+_{12})$, where $\\langle2\\rangle=\\{0,2,4,6,8,10\\}$ and $\\langle3\\rangle=\\{0,3,6,9\\}$.", "Common elements: $\\{0,6\\}$ — matching $\\langle\\text{lcm}(2,3)\\rangle=\\langle6\\rangle$."
          + arNote("نفس قاعدة $n\\mathbb{Z}\\cap m\\mathbb{Z}=\\text{lcm}(n,m)\\mathbb{Z}$ من المثال الأول، لكن الآن داخل زمرة منتهية $\\mathbb{Z}_{12}$ بدل $\\mathbb{Z}$ اللانهائية — نفس المبدأ ينطبق بالضبط.")],
        ["Example 5", "Show $H\\cup K$ fails to be a subgroup of $(\\mathbb{Z}_6,+_6)$ for $H=\\{0,3\\}$, $K=\\{0,2,4\\}$.", "$H\\cup K=\\{0,2,3,4\\}$, but $2+_6 3=5\\notin H\\cup K$ — closure fails."
          + arNote("مثال ملموس داخل زمرة منتهية صغيرة يمكنك التحقق منه يدويًا كاملاً — أفضل طريقة لتصديق أن الاتحاد يفشل فعليًا، لا فقط نظريًا.")],
        ["Example 6", "Find the center of $GL_2(\\mathbb{R})$ (informally): which matrices commute with every invertible matrix?", "Scalar matrices $kI=\\begin{pmatrix}k&0\\\\0&k\\end{pmatrix}$ ($k\\ne0$): $(kI)A=kA=A(kI)$ for any matrix $A$. So $Z(GL_2(\\mathbb{R}))\\supseteq\\{kI:k\\ne0\\}$."
          + arNote("هذا مثال عملي على \"مركز غير تافه في زمرة غير تبديلية\" — بالرغم من أن $GL_2(\\mathbb{R})$ نفسها Non-Abelian، إلا أن مضاعفات مصفوفة الهوية تبقى \"هادئة\" دائمًا.")],
        ["Example 7", "Is $(\\mathbb{Z}_{12},+_{12})$ cyclic? Name a generator.", "Yes — $1$ generates every element ($1,2,3,\\dots,11,0$), so $O(1)=12=|\\mathbb{Z}_{12}|$."
          + arNote("$1$ (وأي عنصر أوّلي نسبيًا مع $n$) يُعتبر دائمًا مولّدًا لـ $\\mathbb{Z}_n$ — سترى في المثال التالي أن ليست كل الزمر بهذا الوضوح.")],
        ["Example 8", "Is $U(15)=\\{1,2,4,7,8,11,13,14\\}$ cyclic?", "$|U(15)|=8$, but checking every element gives maximum order $4$ (e.g. $O(2)=4$) — no element reaches order $8$. Not cyclic."
          + arNote("هذا يطابق نتيجة نظرية معروفة: $U(n)$ دورية فقط عندما $n\\in\\{1,2,4,p^k,2p^k\\}$ لعدد أوّلي $p$ — و $15=3\\times5$ لا يحقق هذا الشرط، فليست دورية.")],
        ["Example 9", "List all generators of $(\\mathbb{Z}_7,+_7)$.", "$7$ is prime, so every nonzero element generates: $\\{1,2,3,4,5,6\\}$ are all generators."
          + arNote("في $\\mathbb{Z}_p$ لعدد أوّلي $p$، كل عنصر غير صفري هو مولّد — الحالة الأبسط والأكثر تناظرًا بين كل الزمر الدورية.")],
      ],
      questions: [
        ["Q1", "Find $2\\mathbb{Z}\\cap5\\mathbb{Z}$.", "$10\\mathbb{Z}$."],
        ["Q2", "Give a counterexample showing $H\\cup K$ need not be a subgroup.", "$2\\mathbb{Z}\\cup3\\mathbb{Z}$: contains $2$ and $3$ but not $5=2+3$."],
        ["Q3", "Is $U(13)$ cyclic?", "Yes ($13$ is prime — $U(p)$ is always cyclic)."],
        ["Q4", "State the relationship between cyclic and abelian groups.", "Every cyclic group is abelian; not every abelian group is cyclic."],
        ["Q5", "If $x\\in Z(G)$, is $x^{-1}\\in Z(G)$? Why?", "Yes — $Z(G)$ is a subgroup, so it's closed under inverses."],
        ["Q6", "Name a generator of $(\\mathbb{Z}_7,+_7)$.", "Any nonzero element, e.g. $1$ (or $2,3,4,5,6$)."],
        ["Q7", "Find $4\\mathbb{Z}\\cap10\\mathbb{Z}$.", "$20\\mathbb{Z}$ (since $\\text{lcm}(4,10)=20$)."],
        ["Q8", "Find $\\langle2\\rangle\\cap\\langle4\\rangle$ in $(\\mathbb{Z}_{12},+_{12})$.", "$\\{0,4,8\\}=\\langle4\\rangle$ (since $\\langle4\\rangle\\subseteq\\langle2\\rangle$, matching $\\text{lcm}(2,4)=4$)."],
        ["Q9", "Can a non-abelian group have $Z(G)=\\{e\\}$?", "Yes — many non-abelian groups have a trivial center."],
        ["Q10", "Is $U(16)$ cyclic?", "No — $|U(16)|=8$ but the maximum element order is $4$, so no generator exists."],
        ["Q11", "Name a generator of $(\\mathbb{Z}_9,+_9)$.", "Any element coprime to $9$, e.g. $1$ (or $2,4,5,7,8$)."],
        ["Q12", "True or false: if $G$ is cyclic, every subgroup of $G$ is also cyclic.", "True."],
        ["Q13 — Challenge", "Find a case where $H\\cup K$ IS a subgroup (contrasting the usual failure).", "Whenever one contains the other, e.g. $H=\\{0,4\\}\\subseteq K=\\{0,2,4,6\\}$ in $\\mathbb{Z}_8$ — then $H\\cup K=K$, still a subgroup."],
      ],
    },
  },
];

// ── seeding ──────────────────────────────────────────────────
async function run() {
  const { data: course, error: ce } = await db.from("courses").select("id").eq("code", COURSE_CODE).single();
  if (ce || !course) throw ce || new Error(`Course ${COURSE_CODE} not found — run seed-abstract-algebra.mjs first.`);
  console.log("Course:", course.id);

  const { data: lessonRows } = await db.from("lessons").select("id, title").eq("course_id", course.id);
  const lessonIdByCode = {};
  for (const l of lessonRows ?? []) {
    const m = l.title.match(/^(\d\.\d)/);
    if (m) lessonIdByCode[m[1]] = l.id;
  }

  // ── Assignments (upsert by title; never delete — submissions reference them) ──
  let asg = 0;
  for (const code of Object.keys(ASSIGN)) {
    const ad = ASSIGN[code];
    const existing = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
    const { error } = existing.data
      ? await db.from("assignments").update({ description: ad.description, published: true }).eq("id", existing.data.id)
      : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
    if (error) throw error;
    asg++;
    console.log(`  Assignment ${code}`);
  }

  // ── Question bank (full replace — no student data references these rows) ──
  await db.from("bank_questions").delete().eq("course_id", course.id);
  const topicToLessonCode = { [T11]: "1.1", [T12]: "1.2", [T13]: "1.3", [T14]: "1.4" };
  const bankRows = BANK.map((q) => ({ ...q, course_id: course.id, lesson_id: lessonIdByCode[topicToLessonCode[q.topic]] ?? null }));
  const { error: bankErr } = await db.from("bank_questions").insert(bankRows);
  if (bankErr) throw bankErr;
  console.log(`  Question bank: ${bankRows.length} questions`);

  // ── Worksheets (upsert by course_id+code) ──
  let ws = 0;
  for (const w of WS) {
    const existing = await db.from("worksheets").select("id").eq("course_id", course.id).eq("code", w.code).maybeSingle();
    const row = { course_id: course.id, code: w.code, title: w.title, position: ws, content: w.content, published: true };
    const { error } = existing.data
      ? await db.from("worksheets").update(row).eq("id", existing.data.id)
      : await db.from("worksheets").insert(row);
    if (error) throw error;
    ws++;
    console.log(`  Worksheet ${w.code}`);
  }

  console.log(`\nDone. ${asg} assignments, ${bankRows.length} bank questions, ${ws} worksheets.`);
  console.log(`Worksheet PDFs are not generated yet — open each in /teacher/worksheets/[id] and click "Regenerate PDF", or ask to have it done via the API.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
