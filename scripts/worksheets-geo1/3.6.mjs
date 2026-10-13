import { fig, triABC, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "3.6",
  title: "Transformations and Congruence",
  intro: "The modern definition of congruence is built entirely on rigid motions: two figures are congruent exactly when some sequence of translations, reflections, and rotations maps one perfectly onto the other. This is more powerful than just comparing measurements, because it explains <i>why</i> corresponding parts must match (CPCTC) and it works even when the mapping needs two or three steps chained together. This section proves congruence with explicit coordinates, contrasts congruence with dilation (which changes size and breaks the rigid-motion definition), and reverses the process to find the transformation sequence from two given triangles.",
  examples: [
    ["Example 1: Definition of congruence via rigid motions",
      "What must be true for two figures to be congruent, in terms of transformations?",
      fig(triABC() + triABC({ A: "D", B: "E", C: "F" }), "Two congruent triangles — one is a rigid-motion image of the other.") +
      "Two figures are congruent exactly when some sequence of rigid motions (translations, reflections, rotations) maps one exactly onto the other.<br>" +
      "Because rigid motions preserve both distance and angle measure, congruent figures automatically have equal corresponding side lengths and equal corresponding angles.<br>" +
      "<b>Answer:</b> A sequence of rigid motions maps one figure exactly onto the other."],

    ["Example 2: The three rigid motions",
      "Name the three basic rigid motions, and state the one property they all share that makes congruence proofs possible.",
      "The three basic rigid motions are translation, reflection, and rotation (compositions of these, like glide reflections, are also rigid motions).<br>" +
      "The shared property: every one of them preserves distance (and therefore angle measure) — nothing stretches, shrinks, or distorts.<br>" +
      "<b>Answer:</b> Translation, reflection, rotation; they all preserve distance."],

    ["Example 3: Proving congruence with coordinates",
      "$\\triangle ABC$ has $A(0,0)$, $B(4,0)$, $C(0,3)$. $\\triangle DEF$ has $D(0,0)$, $E(0,4)$, $F(-3,0)$. Show a rigid motion maps $\\triangle ABC$ to $\\triangle DEF$, proving they are congruent.",
      fig(coordPts([{ x: 0, y: 0, label: "A=D" }, { x: 4, y: 0, label: "B" }, { x: 0, y: 3, label: "C" }, { x: 0, y: 4, label: "E", color: "#2563eb" }, { x: -3, y: 0, label: "F", color: "#2563eb" }], { xmin: -4, xmax: 5, ymin: -1, ymax: 5 }), "Rotating △ABC by 90° CCW about the origin lands exactly on △DEF.") +
      "Test the $90^\\circ$ CCW rule $(x,y)\\to(-y,x)$ on each vertex: $A(0,0)\\to(0,0)=D$; $B(4,0)\\to(0,4)=E$; $C(0,3)\\to(-3,0)=F$.<br>" +
      "Every vertex lands exactly on its target, so this single rotation maps $\\triangle ABC$ onto $\\triangle DEF$.<br>" +
      "<b>Answer:</b> A $90^\\circ$ CCW rotation about the origin proves $\\triangle ABC \\cong \\triangle DEF$."],

    ["Example 4: CPCTC for sides",
      "If a rigid motion maps $\\triangle ABC$ to $\\triangle DEF$ (so $\\triangle ABC \\cong \\triangle DEF$), explain why $\\overline{AB} \\cong \\overline{DE}$ must be true.",
      "The rigid motion sends $A\\to D$ and $B\\to E$ by definition of the correspondence, and rigid motions preserve distance.<br>" +
      "So the distance from $A$ to $B$ must equal the distance from the image of $A$ to the image of $B$, which is the distance from $D$ to $E$.<br>" +
      "<b>Answer:</b> $\\overline{AB} \\cong \\overline{DE}$ — this is exactly what \"Corresponding Parts of Congruent Triangles are Congruent\" (CPCTC) means."],

    ["Example 5: CPCTC for angles",
      "$\\triangle ABC \\cong \\triangle DEF$. Explain why $\\angle C \\cong \\angle F$ must be true, using the same reasoning as Example 4.",
      "Rigid motions preserve angle measure just as they preserve distance, and the correspondence sends $C \\to F$ (along with $A\\to D$, $B\\to E$).<br>" +
      "So the angle at $C$ (between the images of the two sides meeting there) must equal the angle at $F$.<br>" +
      "<b>Answer:</b> $\\angle C \\cong \\angle F$ (CPCTC)."],

    ["Example 6: Why dilation breaks congruence",
      "A triangle with sides $3$, $4$, $5$ is dilated by scale factor $2$, producing sides $6$, $8$, $10$. Is the image congruent to the original? Explain using the rigid-motion definition.",
      "A dilation by a factor other than $1$ multiplies every length by that factor — it is <i>not</i> distance-preserving, so it is not a rigid motion.<br>" +
      "Since congruence requires a sequence of rigid motions, and dilation isn't one, the enlarged triangle is not congruent to the original — it is only <b>similar</b> (same shape, proportional sides).<br>" +
      "<b>Answer:</b> Not congruent — the side lengths $3,4,5$ vs. $6,8,10$ are proportional but not equal."],

    ["Example 7: Congruence through a two-step composition",
      "$\\triangle PQR$ has $P(1,1)$, $Q(4,1)$, $R(1,3)$. Reflect over the $x$-axis, then translate by $\\langle2,5\\rangle$. Verify the image triangle is congruent to $\\triangle PQR$ by checking that side $PQ$ keeps the same length.",
      fig(coordPts([{ x: 1, y: 1, label: "P" }, { x: 4, y: 1, label: "Q" }, { x: 1, y: 3, label: "R" }, { x: 3, y: 4, label: "P''", color: "#2563eb" }, { x: 6, y: 4, label: "Q''", color: "#2563eb" }, { x: 3, y: 2, label: "R''", color: "#2563eb" }], { xmin: -1, xmax: 7, ymin: -1, ymax: 6 }), "A composition of two rigid motions still preserves every length.") +
      "Original length: $PQ = |4-1| = 3$ (same $y$-coordinate).<br>" +
      "Reflect: $P\\to(1,-1)$, $Q\\to(4,-1)$; translate by $\\langle2,5\\rangle$: $P''=(3,4)$, $Q''=(6,4)$.<br>" +
      "New length: $P''Q'' = |6-3| = 3$ — identical to the original.<br>" +
      "<b>Answer:</b> $PQ = P''Q'' = 3$, confirming the composition preserved length, so the triangles are congruent."],

    ["Example 8: Congruent figures can have opposite orientation",
      "Two triangles are congruent, but one requires a reflection (an odd number of reflections) to map onto the other, while the other could be reached by rotations and translations alone. Are both pairs still congruent?",
      "Congruence only requires <i>some</i> sequence of rigid motions — reflections count just as much as translations and rotations.<br>" +
      "A figure and its mirror image (like a left hand and a right hand shape) are still congruent to each other; they simply have opposite orientation.<br>" +
      "<b>Answer:</b> Yes — congruence does not require matching orientation, only equal size and shape."],

    ["Example 9: Correspondence order matters",
      "$\\triangle ABC \\cong \\triangle DEF$ specifically means $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$. If someone instead writes $\\triangle ABC \\cong \\triangle EDF$ for the same two triangles, does that claim the same correspondence?",
      "No — the order of the letters names the correspondence: $\\triangle ABC\\cong\\triangle EDF$ claims $A\\leftrightarrow E$, $B\\leftrightarrow D$, $C\\leftrightarrow F$, a completely different pairing of parts.<br>" +
      "For a scalene triangle, only one correspondence (up to the triangle's own symmetry, usually none) will actually make every pair of sides and angles match — writing the letters in the wrong order states a false congruence, even if the two triangles happen to be congruent in general.<br>" +
      "<b>Answer:</b> No — correspondence order is part of the meaning of a congruence statement, not just labeling."],

    ["Example 10: Reverse-engineer the transformation",
      "$\\triangle ABC$ has $A(2,1)$, $B(6,1)$, $C(2,4)$. Its image is $A'(0,-3)$, $B'(-4,-3)$, $C'(0,0)$. Find a sequence of two rigid motions that maps $\\triangle ABC$ to $\\triangle A'B'C'$.",
      "Try a reflection over the $y$-axis first: $A(2,1)\\to(-2,1)$; $B(6,1)\\to(-6,1)$; $C(2,4)\\to(-2,4)$.<br>" +
      "Find the translation needed to finish matching $A$: $(-2,1)\\to(0,-3)$ requires vector $\\langle2,-4\\rangle$.<br>" +
      "Check the same vector on $B$: $(-6,1)+\\langle2,-4\\rangle=(-4,-3)$ — matches $B'$. ✓ Check on $C$: $(-2,4)+\\langle2,-4\\rangle=(0,0)$ — matches $C'$. ✓<br>" +
      "<b>Answer:</b> Reflect over the $y$-axis, then translate by $\\langle2,-4\\rangle$ — since every vertex matches, $\\triangle ABC \\cong \\triangle A'B'C'$."],
  ],
  questions: [
    ["Problem 1: Definition", "Congruent means same size and what?", "Shape"],
    ["Problem 2: Rigid motions", "List three rigid motions.", "Translation, reflection, rotation"],
    ["Problem 3: Map implies", "Rigid motion maps $\\triangle ABC$ to $\\triangle XYZ$. Conclude?", "$\\triangle ABC \\cong \\triangle XYZ$"],
    ["Problem 4: Sides", "$\\triangle ABC \\cong \\triangle DEF$. $\\overline{BC} \\cong$ ?", "$\\overline{EF}$"],
    ["Problem 5: Angles", "$\\triangle ABC \\cong \\triangle DEF$. $\\angle A \\cong$ ?", "$\\angle D$"],
    ["Problem 6: Dilation", "Is dilation (factor $2$) a congruence?", "No"],
    ["Problem 7: Symbol", "Congruence symbol?", "$\\cong$"],
    ["Problem 8: CPCTC idea", "Corresponding parts of congruent triangles are what?", "Congruent"],
    ["Problem 9: Reflection", "Can a reflection alone establish congruence?", "Yes"],
    ["Problem 10: Translation", "Can a translation alone establish congruence?", "Yes"],
    ["Problem 11: Scale", "Must congruent figures have equal corresponding side lengths?", "Yes"],
    ["Problem 12: Angles", "Must congruent figures have equal corresponding angles?", "Yes"],
    ["Problem 13: Sequence", "Translate then rotate a triangle. Congruent to original?", "Yes"],
    ["Problem 14: Challenge — prove with coordinates", "$\\triangle ABC$ has $A(0,0)$, $B(5,0)$, $C(0,2)$. $\\triangle DEF$ has $D(0,0)$, $E(-5,0)$, $F(0,-2)$. Find the single rigid motion mapping $\\triangle ABC$ to $\\triangle DEF$.", "$180^\\circ$ rotation about the origin (rule $(x,y)\\to(-x,-y)$)"],
    ["Problem 15: Challenge — reverse-engineer", "$\\triangle PQR$ has $P(1,2)$, $Q(4,2)$, $R(1,5)$. Its image is $P'(-1,-1)$, $Q'(-4,-1)$, $R'(-1,2)$. Find a sequence of two rigid motions that maps $\\triangle PQR$ to $\\triangle P'Q'R'$.", "Reflect over the $y$-axis, then translate by $\\langle0,-3\\rangle$ (check: $P(1,2)\\to(-1,2)\\to(-1,-1)$ ✓; $R(1,5)\\to(-1,5)\\to(-1,2)$ ✓)"],
  ],
};
