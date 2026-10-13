import { fig, triABC, parallelTransversal, rightTri } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "1.5",
  title: "Conditional Statements",
  intro: "Every theorem in geometry is really a conditional statement in disguise, so learning to dissect \"if $p$, then $q$\" into its converse, inverse, and contrapositive is what makes later proofs readable. Beyond just rewriting a sentence, this section asks you to judge <i>truth</i> — proving a statement false with a single counterexample, or recognizing when a conditional and its contrapositive must share a truth value while the converse might not. It also introduces the two rules that power two-column proofs: the Law of Detachment and the Law of Syllogism, along with the classic converse-error trap of \"affirming the consequent.\"",
  examples: [
    ["Example 1: Hypothesis, conclusion, and truth value",
      "Consider: \"If a figure is a square, then it is a rectangle.\" Identify the hypothesis and conclusion, and determine whether the conditional is true.",
      "Split the sentence at \"if\" and \"then\": hypothesis $p$: a figure is a square; conclusion $q$: it is a rectangle.<br>" +
      "Check truth: every square has four right angles, which is exactly the definition of a rectangle, so whenever $p$ holds, $q$ holds too.<br>" +
      "<b>Answer:</b> $p$: square; $q$: rectangle; the conditional is <b>true</b>."],

    ["Example 2: Converse, and why it can fail",
      "Write the converse of \"If a figure is a square, then it is a rectangle,\" and determine whether the converse is true.",
      "Form the converse by swapping hypothesis and conclusion: \"If a figure is a rectangle, then it is a square.\"<br>" +
      "Test with a counterexample: a $4\\times 8$ rectangle has four right angles (satisfying the hypothesis) but unequal side lengths, so it is not a square.<br>" +
      "<b>Answer:</b> Converse: \"If a figure is a rectangle, then it is a square\" — <b>false</b> (counterexample: any non-square rectangle)."],

    ["Example 3: Inverse and why it can differ from the original",
      "Write the inverse of \"If it rains, then the ground is wet,\" and explain why a conditional and its inverse don't have to share a truth value.",
      "Form the inverse by negating both parts: \"If it does not rain, then the ground is not wet.\"<br>" +
      "This can fail even when the original is true: a sprinkler could wet the ground with no rain, so \"no rain\" does not guarantee \"ground not wet.\"<br>" +
      "<b>Answer:</b> Inverse: \"If it does not rain, then the ground is not wet\" — not guaranteed true, even though the original conditional is."],

    ["Example 4: Contrapositive is always equivalent",
      "Write the contrapositive of \"If two lines are parallel, then they do not intersect,\" and explain why a contrapositive always shares the truth value of the original.",
      "Form the contrapositive by negating both parts <i>and</i> swapping their order: \"If two lines intersect, then they are not parallel.\"<br>" +
      "Logically, $p\\rightarrow q$ and $\\lnot q \\rightarrow \\lnot p$ describe the same relationship from two angles — whenever one is true the other must be true (and likewise false), unlike the converse or inverse.<br>" +
      "<b>Answer:</b> \"If two lines intersect, then they are not parallel\" — logically equivalent to the original."],

    ["Example 5: Disproving with a counterexample",
      "Conditional: \"If $x^2 = 9$, then $x = 3$.\" Show the statement is false by giving a counterexample.",
      "To disprove a conditional, you need only one case where the hypothesis is true but the conclusion is false.<br>" +
      "Let $x=-3$: then $x^2 = (-3)^2 = 9$, so the hypothesis holds — but $x = -3 \\neq 3$, so the conclusion fails.<br>" +
      "<b>Answer:</b> $x=-3$ is a counterexample, so the conditional as stated is false."],

    ["Example 6: Building a biconditional",
      "Given two true conditionals — (1) If a triangle is equilateral, then all three sides are congruent; (2) If all three sides of a triangle are congruent, then it is equilateral — combine them into a biconditional statement.",
      fig(triABC({ marks: true }), "Triangle ABC with all sides congruent — the two directions describe the same fact.") +
      "A biconditional joins $p\\rightarrow q$ with its converse $q\\rightarrow p$ using \"if and only if,\" and is true exactly when <i>both</i> directions are true.<br>" +
      "Both given conditionals are true, so they may be merged.<br>" +
      "<b>Answer:</b> \"A triangle is equilateral if and only if all three of its sides are congruent.\""],

    ["Example 7: Law of Detachment",
      "Given: (1) If two lines are parallel, then their corresponding angles are congruent. (2) Lines $\\ell$ and $m$ are parallel. What can you validly conclude, and which law justifies it?",
      fig(parallelTransversal(), "Lines ℓ and m are parallel, cut by a transversal.") +
      "Identify the forms: statement (1) is $p\\rightarrow q$ (parallel $\\Rightarrow$ congruent corresponding angles); statement (2) asserts $p$ is true.<br>" +
      "Law of Detachment: if $p\\rightarrow q$ is true and $p$ is true, then $q$ must be true.<br>" +
      "<b>Answer:</b> The corresponding angles formed by $\\ell$, $m$, and the transversal are congruent (by the Law of Detachment)."],

    ["Example 8: Law of Syllogism",
      "Given: (1) If a figure is a square, then it is a rectangle. (2) If a figure is a rectangle, then it is a parallelogram. Combine these into one conditional, and name the law used.",
      "Identify the chain: (1) is $p\\rightarrow q$ (square $\\Rightarrow$ rectangle); (2) is $q\\rightarrow r$ (rectangle $\\Rightarrow$ parallelogram) — the conclusion of (1) matches the hypothesis of (2).<br>" +
      "Law of Syllogism: from $p\\rightarrow q$ and $q\\rightarrow r$, conclude $p\\rightarrow r$.<br>" +
      "<b>Answer:</b> \"If a figure is a square, then it is a parallelogram\" (by the Law of Syllogism)."],

    ["Example 9: Spotting an invalid argument",
      "Given: (1) If a quadrilateral is a square, then it has four right angles. (2) Quadrilateral $R$ has four right angles. A student concludes $R$ must be a square. Is this reasoning valid?",
      "Compare to the Law of Detachment: that law requires the <i>hypothesis</i> (square) to be known true in order to conclude the <i>conclusion</i> (four right angles). Here the conclusion is given and the hypothesis is being guessed — that is not a recognized law.<br>" +
      "Counterexample exposing the flaw: a non-square rectangle also has four right angles, satisfying (2) without being a square.<br>" +
      "<b>Answer:</b> Not valid — this is the converse error (\"affirming the consequent\"); $R$ could be a rectangle instead of a square."],

    ["Example 10: Symbolic biconditional",
      "Let $p$: \"an angle is right\" and $q$: \"the angle measures $90^\\circ$.\" Write the biconditional in symbols and in words, and state its truth value.",
      fig(rightTri("a", "b", "c"), "The angle at C is right — exactly 90°, by definition.") +
      "Symbolic form: $p \\leftrightarrow q$.<br>" +
      "In words: \"An angle is right if and only if it measures $90^\\circ$.\"<br>" +
      "Both directions (right $\\Rightarrow 90^\\circ$, and $90^\\circ \\Rightarrow$ right) hold by definition, so the biconditional is true.<br>" +
      "<b>Answer:</b> $p\\leftrightarrow q$; the statement is <b>true</b>."],
  ],
  questions: [
    ["Problem 1: Hypothesis", "\"If $n$ is even, then $n$ is divisible by $2$.\" Hypothesis?", "$n$ is even"],
    ["Problem 2: Conclusion", "Same statement. Conclusion?", "$n$ is divisible by $2$"],
    ["Problem 3: Converse", "If a polygon is a triangle, then it has $3$ sides. Converse?", "If a polygon has $3$ sides, then it is a triangle"],
    ["Problem 4: Inverse", "If an angle is right, then it measures $90^\\circ$. Inverse?", "If an angle is not right, then it does not measure $90^\\circ$"],
    ["Problem 5: Contrapositive", "If two lines are parallel, then they do not intersect. Contrapositive?", "If two lines intersect, then they are not parallel"],
    ["Problem 6: Equivalent form", "Which is logically equivalent to a conditional?", "Contrapositive"],
    ["Problem 7: Counterexample", "If $x^2 = 9$, then $x = 3$. Counterexample?", "$x = -3$"],
    ["Problem 8: Biconditional", "When is a biconditional true?", "When both the conditional and its converse are true"],
    ["Problem 9: Converse truth", "True conditional: If a figure is a square, then it is a rhombus. Is the converse always true?", "No"],
    ["Problem 10: Write conditional", "Hypothesis: angle is straight. Conclusion: measure is $180^\\circ$. Write if–then.", "If an angle is straight, then its measure is $180^\\circ$"],
    ["Problem 11: Inverse", "If $AB = CD$, then $\\overline{AB} \\cong \\overline{CD}$. Inverse?", "If $AB \\neq CD$, then $\\overline{AB} \\not\\cong \\overline{CD}$"],
    ["Problem 12: Contrapositive", "If $m\\angle A = 90^\\circ$, then $\\angle A$ is right. Contrapositive?", "If $\\angle A$ is not right, then $m\\angle A \\neq 90^\\circ$"],
    ["Problem 13: Symbols", "Symbolic form of \"if $p$ then $q$\"?", "$p \\rightarrow q$"],
    ["Problem 14: Challenge — Law of Syllogism", "(1) If a polygon is a regular hexagon, then all its sides are congruent. (2) If all of a polygon's sides are congruent, then it is equilateral. Combine using the Law of Syllogism.", "If a polygon is a regular hexagon, then it is equilateral"],
    ["Problem 15: Challenge — Law of Detachment", "If two angles form a linear pair, then they are supplementary. $\\angle 1$ and $\\angle 2$ are a linear pair, and $m\\angle 1 = 112^\\circ$. Find $m\\angle 2$ and name the law used.", "$m\\angle 2 = 68^\\circ$; Law of Detachment"],
  ],
};
