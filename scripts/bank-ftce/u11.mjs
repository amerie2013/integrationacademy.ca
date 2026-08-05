// FTCE Unit 11 — Mathematics as Reasoning. ~18 conceptual questions per topic.
import { mc, tf, fill } from "./helpers.mjs";
const R = String.raw;

// ── 11.1 Arguments, Deduction & Induction ────────────────────
const g111 = () => [
  mc("easy", R`Reasoning from general to specific is`, [R`deductive`, R`inductive`, R`circular`, R`inverse`], 0),
  mc("easy", R`Reasoning from specific examples to a generalization is`, [R`inductive`, R`deductive`, R`contrapositive`, R`direct`], 0),
  mc("medium", R`A valid deductive argument guarantees the conclusion if the premises are`, [R`true`, R`false`, R`probable`, R`general`], 0),
  mc("medium", R`Inductive conclusions are`, [R`probable, not certain`, R`always certain`, R`always false`, R`invalid`], 0),
  mc("medium", R`Validity concerns an argument's`, [R`form`, R`content`, R`length`, R`topic`], 0),
  mc("medium", R`A single ___ disproves a universal claim.`, [R`counterexample`, R`example`, R`premise`, R`theorem`], 0),
  mc("easy", R`"All men are mortal; Socrates is a man; so Socrates is mortal" is`, [R`valid deductive`, R`weak inductive`, R`invalid`, R`a counterexample`], 0),
  fill("medium", R`A statement has a ___ value.`, ["truth"]),
  mc("hard", R`Seeing many white swans and concluding all swans are white is`, [R`inductive (not certain)`, R`valid deductive`, R`a proof`, R`a contradiction`], 0),
  tf("medium", R`Deductive validity depends on the truth of the content, not the form.`, false),
  mc("hard", R`"$2$ is prime and even" shows "all primes are odd" is false; $2$ is a`, [R`counterexample`, R`premise`, R`lemma`, R`corollary`], 0),
  mc("medium", R`An argument consists of premises and a`, [R`conclusion`, R`counterexample`, R`converse`, R`negation`], 0),
  tf("easy", R`One counterexample is enough to disprove a universal statement.`, true),
  mc("medium", R`Testing many cases supports but does not prove a claim — that is`, [R`inductive`, R`deductive`, R`a proof`, R`contradiction`], 0),
  mc("hard", R`A strong inductive argument makes its conclusion`, [R`probable`, R`certain`, R`necessary`, R`valid`], 0),
  mc("easy", R`"All squares are rectangles; this is a square; so it is a rectangle" is`, [R`valid deductive`, R`inductive`, R`invalid`, R`circular`], 0),
];

// ── 11.2 Conditionals & Logical Equivalence ──────────────────
const g112 = () => [
  mc("easy", R`Converse of "if $A$ then $B$"?`, [R`if $B$ then $A$`, R`if not $A$ then not $B$`, R`if not $B$ then not $A$`, R`$A$ and $B$`], 0),
  mc("medium", R`Contrapositive of "if $A$ then $B$"?`, [R`if not $B$ then not $A$`, R`if $B$ then $A$`, R`if not $A$ then not $B$`, R`$A$ or $B$`], 0),
  mc("medium", R`Inverse of "if $A$ then $B$"?`, [R`if not $A$ then not $B$`, R`if $B$ then $A$`, R`if not $B$ then not $A$`, R`$B$ then $A$`], 0),
  mc("medium", R`Which is logically equivalent to the original conditional?`, [R`the contrapositive`, R`the converse`, R`the inverse`, R`the negation`], 0),
  mc("medium", R`The converse is logically equivalent to the`, [R`inverse`, R`contrapositive`, R`original`, R`biconditional`], 0),
  mc("easy", R`"If and only if" is a`, [R`biconditional`, R`conjunction`, R`disjunction`, R`converse`], 0),
  mc("medium", R`In $p\to q$, $p$ is ___ for $q$.`, [R`sufficient`, R`necessary`, R`equivalent`, R`opposite`], 0),
  mc("medium", R`In $p\to q$, $q$ is ___ for $p$.`, [R`necessary`, R`sufficient`, R`equivalent`, R`irrelevant`], 0),
  fill("easy", R`In "if $p$ then $q$", $p$ is the ___.`, ["hypothesis", "antecedent"]),
  fill("easy", R`In "if $p$ then $q$", $q$ is the ___.`, ["conclusion", "consequent"]),
  tf("medium", R`A conditional is logically equivalent to its contrapositive.`, true),
  tf("medium", R`A conditional is logically equivalent to its converse.`, false),
  mc("hard", R`A biconditional $p\leftrightarrow q$ requires`, [R`both $p\to q$ and $q\to p$`, R`only $p\to q$`, R`only $q\to p$`, R`neither direction`], 0),
  mc("hard", R`$\lnot q\to\lnot p$ is the`, [R`contrapositive`, R`converse`, R`inverse`, R`biconditional`], 0),
  mc("medium", R`$q\to p$ is the ___ of $p\to q$.`, [R`converse`, R`contrapositive`, R`inverse`, R`negation`], 0),
  tf("hard", R`Negating both parts of a conditional and swapping them gives the contrapositive.`, true),
];

// ── 11.3 Induction & Indirect Proof ──────────────────────────
const g113 = () => [
  mc("easy", R`A proof by contradiction assumes the ___ of the claim.`, [R`negation`, R`converse`, R`hypothesis`, R`conclusion`], 0),
  mc("easy", R`An induction proof first proves the`, [R`base case`, R`inductive step`, R`conclusion`, R`converse`], 0),
  mc("medium", R`The inductive step proves $n=k$ ___ $n=k+1$.`, [R`implies`, R`equals`, R`disproves`, R`contradicts`], 0),
  mc("medium", R`Induction establishes statements for the ___ numbers.`, [R`natural`, R`irrational`, R`complex`, R`negative`], 0),
  mc("medium", R`An indirect proof derives a`, [R`contradiction`, R`base case`, R`converse`, R`tautology`], 0),
  mc("medium", R`$\sqrt2$ is proven irrational by`, [R`contradiction`, R`induction`, R`direct proof`, R`example`], 0),
  fill("medium", R`The inductive hypothesis assumes the statement true for $n=$ ___.`, ["k"]),
  mc("easy", R`A single counterexample serves to ___ a universal statement.`, [R`disprove`, R`prove`, R`generalize`, R`define`], 0),
  mc("medium", R`A direct proof derives the conclusion from the`, [R`premises`, R`negation`, R`counterexample`, R`converse`], 0),
  tf("easy", R`Mathematical induction requires a base case.`, true),
  mc("medium", R`Proof by contradiction is also called`, [R`indirect proof`, R`direct proof`, R`inductive proof`, R`proof by example`], 0),
  mc("hard", R`In proof by contradiction you assume the opposite and reach`, [R`an impossibility`, R`the base case`, R`the converse`, R`a tautology`], 0),
  tf("medium", R`Proving a statement by its contrapositive is a valid method.`, true),
  mc("hard", R`Induction works because the natural numbers are`, [R`well-ordered`, R`dense`, R`bounded`, R`finite`], 0),
];

export default [
  { code: "11.1", gen: g111 }, { code: "11.2", gen: g112 }, { code: "11.3", gen: g113 },
];
