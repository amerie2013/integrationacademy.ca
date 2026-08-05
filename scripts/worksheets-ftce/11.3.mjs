const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "11.3",
  title: "Methods of Proof: Induction & Indirect Proof",
  intro: "Direct proof, proof by contradiction (indirect proof), and mathematical induction.",
  lesson: [
    ["Direct vs indirect proof", R`A <b>direct</b> proof derives the conclusion from the premises. An <b>indirect</b> proof (by contradiction) assumes the negation of the conclusion and derives an impossibility.`],
    ["Proof by contradiction", R`Assume the opposite of the claim, reason to a contradiction, and conclude the original must hold. Classic example: $\sqrt2$ is irrational.`],
    ["Mathematical induction", R`Prove a <b>base case</b>, then assume the statement for $n=k$ (the inductive hypothesis) and prove it for $n=k+1$. This establishes the statement for all natural numbers.`],
  ],
  examples: [
    ["Example 1: Contradiction", R`To prove $\sqrt2$ is irrational, what do you assume?`, R`Assume it is rational and derive a contradiction.`],
    ["Example 2: Two parts of induction", R`What two parts does an induction proof require?`, R`A base case and an inductive step ($n=k\Rightarrow n=k+1$).`],
    ["Example 3: Indirect", R`An indirect proof assumes the ___ of the conclusion.`, R`negation.`],
    ["Example 4: Scope of induction", R`Induction proves statements for which numbers?`, R`All natural numbers (a well-ordered set).`],
    ["Example 5: Inductive hypothesis", R`In the inductive step, what do you assume?`, R`That the statement is true for $n=k$.`],
  ],
  questions: [
    ["Problem 1", R`Proof by contradiction assumes the ___ of the claim.`, R`opposite (negation)`],
    ["Problem 2", R`Induction first proves the ___.`, R`base case`],
    ["Problem 3", R`The inductive step proves $n=k$ ___ $n=k+1$.`, R`implies`],
    ["Problem 4", R`Induction proves statements about the ___ numbers.`, R`natural`],
    ["Problem 5", R`Deriving an impossibility proves the original by ___.`, R`contradiction`],
    ["Problem 6", R`A single counterexample is enough to ___ a universal statement.`, R`disprove`],
    ["Problem 7", R`"Assume true for $k$, prove for $k+1$" is the ___ step.`, R`inductive`],
    ["Problem 8", R`$\sqrt2$ is proven irrational by ___.`, R`contradiction`],
  ],
};
