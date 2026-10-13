import { fig, parallelTransversal } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "2.2",
  title: "Theorems about Parallel Lines",
  intro: "Once two lines are known to be parallel, every angle a transversal creates is locked into place: corresponding, alternate interior, and alternate exterior pairs are congruent, while same-side interior pairs are supplementary — never the other way around, which is a common mix-up. This section also runs the logic backward with the <i>converse</i> theorems, which let you prove lines are parallel from an angle relationship instead of assuming it. Expect multi-step algebra, a brief look at why the theorems follow from the Corresponding Angles Postulate plus Vertical Angles, and problems that chain several angle facts together.",
  examples: [
    ["Example 1: Corresponding Angles Postulate",
      "Lines $\\ell \\parallel m$ are cut by a transversal. Corresponding angles measure $3x$ and $75^\\circ$. Find $x$.",
      fig(parallelTransversal(), "ℓ ∥ m — corresponding angles are congruent.") +
      "Postulate: when $\\ell \\parallel m$, corresponding angles are congruent (Corresponding Angles Postulate).<br>" +
      "Set the two measures equal: $3x = 75$.<br>" +
      "<b>Answer:</b> $x = 25$ (both angles measure $75^\\circ$)."],

    ["Example 2: Alternate Interior Angles Theorem",
      "$\\ell \\parallel m$, cut by a transversal. Alternate interior angles measure $2x + 10$ and $70^\\circ$. Find $x$, and briefly explain why the theorem is true.",
      "Theorem: alternate interior angles are congruent when $\\ell \\parallel m$. This follows from the Corresponding Angles Postulate plus the Vertical Angles Theorem — the alternate-interior angle is vertical to the angle corresponding to the other one, so by the Transitive Property all three are congruent.<br>" +
      "Set the measures equal: $2x+10 = 70$.<br>" +
      "$2x = 60 \\Rightarrow x = 30$.<br>" +
      "<b>Answer:</b> $x = 30$ (both angles measure $70^\\circ$)."],

    ["Example 3: Same-Side Interior Angles Theorem",
      "$\\ell \\parallel m$, cut by a transversal. Same-side interior angles measure $4x$ and $2x + 30$. Find $x$.",
      fig(parallelTransversal(), "Same-side interior angles are supplementary, not congruent, when ℓ ∥ m.") +
      "Theorem: same-side (consecutive) interior angles are <i>supplementary</i> when $\\ell \\parallel m$ — this is the one relationship in the chapter that is <b>not</b> congruence.<br>" +
      "$4x + (2x+30) = 180$<br>" +
      "$6x + 30 = 180 \\Rightarrow 6x = 150 \\Rightarrow x = 25$.<br>" +
      "<b>Check:</b> $4(25)=100^\\circ$ and $2(25)+30=80^\\circ$; $100^\\circ+80^\\circ=180^\\circ$. ✓"],

    ["Example 4: Alternate Exterior Angles Theorem",
      "$\\ell \\parallel m$, cut by a transversal. Alternate exterior angles both equal $x + 20$ and $3x - 40$. Find $x$.",
      "Theorem: alternate exterior angles are congruent when $\\ell \\parallel m$.<br>" +
      "Set the measures equal: $x + 20 = 3x - 40$.<br>" +
      "$60 = 2x \\Rightarrow x = 30$.<br>" +
      "<b>Check:</b> both angles equal $30+20=50^\\circ$. ✓"],

    ["Example 5: Direct application",
      "$\\ell \\parallel m$; one angle is $112^\\circ$. Find its corresponding angle.",
      "By the Corresponding Angles Postulate, corresponding angles are congruent whenever the lines are parallel — no algebra needed once the relationship is identified.<br>" +
      "<b>Answer:</b> $112^\\circ$."],

    ["Example 6: Same-side supplement",
      "$\\ell \\parallel m$; one same-side interior angle is $65^\\circ$. Find the other.",
      "By the Same-Side Interior Angles Theorem, the two measures must sum to $180^\\circ$.<br>" +
      "$65^\\circ + x = 180^\\circ \\Rightarrow x = 115^\\circ$.<br>" +
      "<b>Answer:</b> $115^\\circ$."],

    ["Example 7: Using the converse to prove parallel",
      "A transversal crosses lines $j$ and $k$, creating a pair of corresponding angles that both measure $58^\\circ$. What can you conclude about $j$ and $k$, and which theorem justifies it?",
      "This problem runs the logic backward from Examples 1–6: instead of <i>starting</i> from parallel lines to find equal angles, we <i>start</i> from equal angles to prove the lines are parallel.<br>" +
      "Converse of the Corresponding Angles Postulate: if corresponding angles formed by a transversal are congruent, the two lines are parallel.<br>" +
      "<b>Answer:</b> $j \\parallel k$ (by the Converse of the Corresponding Angles Postulate)."],

    ["Example 8: Chaining vertical, corresponding, and linear pair",
      "$\\ell \\parallel m$, cut by transversal $t$. One angle at the $\\ell$ intersection measures $50^\\circ$. Find (a) its vertical angle, (b) its corresponding angle at the $m$ intersection, and (c) the linear-pair partner of that corresponding angle.",
      fig(parallelTransversal(), "One value at ℓ propagates to every other angle in the figure.") +
      "(a) Vertical Angles Theorem: the vertical angle at the same intersection is congruent, so it is $50^\\circ$.<br>" +
      "(b) Corresponding Angles Postulate ($\\ell\\parallel m$): the corresponding angle at $m$ is also $50^\\circ$.<br>" +
      "(c) Linear Pair Postulate: the linear-pair partner is supplementary to that $50^\\circ$ angle: $180^\\circ - 50^\\circ = 130^\\circ$.<br>" +
      "<b>Answer:</b> (a) $50^\\circ$ (b) $50^\\circ$ (c) $130^\\circ$."],

    ["Example 9: Linear pair then corresponding",
      "$\\ell \\parallel m$; one angle at the $\\ell$ intersection is $130^\\circ$. Find its linear-pair partner, then find that partner's corresponding angle at $m$.",
      "Linear Pair Postulate: the partner angle is supplementary: $180^\\circ - 130^\\circ = 50^\\circ$.<br>" +
      "Corresponding Angles Postulate: the corresponding angle to that $50^\\circ$ angle at line $m$ is also $50^\\circ$.<br>" +
      "<b>Answer:</b> Linear-pair partner $= 50^\\circ$; its corresponding angle at $m$ $= 50^\\circ$."],

    ["Example 10: Solve for $x$ using the converse",
      "A transversal creates an angle of $(2x+5)^\\circ$ with line $\\ell$ and the corresponding angle of $(3x-15)^\\circ$ with line $m$. For what value of $x$ are $\\ell$ and $m$ guaranteed parallel, and what is the common angle measure?",
      fig(parallelTransversal(), "Corresponding angles equal exactly when the lines are parallel.") +
      "Converse of the Corresponding Angles Postulate: the lines are parallel exactly when the corresponding angles are equal.<br>" +
      "Set the expressions equal: $2x+5 = 3x-15$.<br>" +
      "$20 = x$.<br>" +
      "<b>Answer:</b> $x=20$; each angle measures $2(20)+5 = 45^\\circ$."],
  ],
  questions: [
    ["Problem 1: Corresponding", "Parallel; corresponding $5x$ and $80^\\circ$. Find $x$.", "$x = 16$"],
    ["Problem 2: Alternate interior", "Parallel; alt. interior $x + 15$ and $55^\\circ$. Find $x$.", "$x = 40$"],
    ["Problem 3: Same-side interior", "Parallel; same-side $3x$ and $x + 40$. Find $x$.", "$x = 35$"],
    ["Problem 4: Alternate exterior", "Parallel; alt. exterior $2x$ and $x + 28$. Find $x$.", "$x = 28$"],
    ["Problem 5: Congruent measure", "Parallel; corresponding to $95^\\circ$?", "$95^\\circ$"],
    ["Problem 6: Supplementary", "Parallel; same-side to $70^\\circ$?", "$110^\\circ$"],
    ["Problem 7: Converse", "Alt. interior angles are congruent. What can you conclude about the lines?", "Parallel (Converse of the Alternate Interior Angles Theorem)"],
    ["Problem 8: Find $x$", "Parallel; corresponding $4x - 8$ and $2x + 20$. Find $x$.", "$x = 14$"],
    ["Problem 9: Same-side", "Parallel; same-side $5x + 10$ and $4x$. Find $x$.", "$x = 20$"],
    ["Problem 10: Vertical", "Angle $48^\\circ$; its vertical is?", "$48^\\circ$"],
    ["Problem 11: Linear pair", "Angle $135^\\circ$; linear-pair partner?", "$45^\\circ$"],
    ["Problem 12: Alternate interior", "Parallel; alt. interior $7x - 5$ and $5x + 17$. Find $x$.", "$x = 11$"],
    ["Problem 13: Corresponding algebra", "Parallel; corresponding $3x + 6$ and $4x - 12$. Find $x$.", "$x = 18$"],
    ["Problem 14: Challenge — converse", "A transversal makes an angle of $(5x-10)^\\circ$ with $\\ell$ and the corresponding angle $(3x+24)^\\circ$ with $m$. Find $x$, and give the common angle measure that guarantees $\\ell \\parallel m$.", "$x = 17$; common angle $= 75^\\circ$"],
    ["Problem 15: Challenge — same-side plus linear pair", "$\\ell \\parallel m$. A same-side interior pair measures $4x$ and $2x+12$. Find $x$, both angle measures, and the linear-pair partner of the larger angle.", "$x=28$; angles $112^\\circ$ and $68^\\circ$; linear-pair partner of $112^\\circ$ is $68^\\circ$"],
  ],
};
