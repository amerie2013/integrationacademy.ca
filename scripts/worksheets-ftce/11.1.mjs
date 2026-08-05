const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "11.1",
  title: "Reasoning: Arguments, Deduction & Induction",
  intro: "Statements and arguments, the difference between deductive validity and inductive strength, and the role of counterexamples.",
  lesson: [
    ["Statements & arguments", R`A <b>statement</b> has a truth value. An <b>argument</b> has premises and a conclusion. Deductive arguments aim for <b>validity</b>; inductive arguments aim for <b>strength</b>.`],
    ["Deductive reasoning", R`In a <b>valid</b> deductive argument, if the premises are true the conclusion <b>must</b> be true. Validity is about the argument's form, not its content. Deduction reasons from general to specific.`],
    ["Inductive reasoning", R`Induction generalizes from specific examples; a strong inductive argument makes the conclusion <b>probable</b>, not certain. A single <b>counterexample</b> disproves a universal claim.`],
  ],
  examples: [
    ["Example 1: Valid deduction", R`"All men are mortal; Socrates is a man; therefore Socrates is mortal." Classify it.`, R`A valid deductive argument (general to specific).`],
    ["Example 2: Induction", R`Concluding "all swans are white" after seeing many white swans is what kind of reasoning?`, R`Inductive — probable but not certain (a black swan would refute it).`],
    ["Example 3: Validity is form", R`On what does deductive validity depend?`, R`The argument's form/structure, not the truth of its content.`],
    ["Example 4: Counterexample", R`How do you disprove "every prime is odd"?`, R`Give a counterexample: $2$ is prime and even.`],
    ["Example 5: General to specific", R`Reasoning from a general rule to a specific case is called?`, R`Deductive reasoning.`],
  ],
  questions: [
    ["Problem 1", R`Reasoning from general to specific is ___.`, R`deductive`],
    ["Problem 2", R`Reasoning from specific examples to a generalization is ___.`, R`inductive`],
    ["Problem 3", R`A valid deductive argument guarantees the conclusion if the premises are ___.`, R`true`],
    ["Problem 4", R`Inductive conclusions are ___ (not certain).`, R`probable`],
    ["Problem 5", R`Validity concerns an argument's ___.`, R`form`],
    ["Problem 6", R`A single ___ disproves a universal claim.`, R`counterexample`],
    ["Problem 7", R`Testing many cases supports but does not prove — that is ___ reasoning.`, R`inductive`],
    ["Problem 8", R`"All squares are rectangles; this is a square; so it is a rectangle" is a ___ argument.`, R`valid (deductive)`],
  ],
};
