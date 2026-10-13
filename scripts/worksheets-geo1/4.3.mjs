import { fig, triABC, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "4.3",
  title: "SSS and SAS Congruence",
  intro: "Two triangles are congruent when there is a correspondence between their vertices such that all corresponding sides and angles match. Rather than checking all six parts, shortcut postulates let us prove congruence from partial information. The <b>SSS Postulate</b> says three pairs of congruent corresponding sides are enough. The <b>SAS Postulate</b> says two pairs of congruent sides plus the <i>included</i> angle (the angle directly between those two sides) are enough. The angle's position matters: if the given angle is not between the two given sides (the \"SSA\" case), the triangle is not guaranteed to be unique — this is why SSA is <i>not</i> a valid congruence shortcut. Shared sides use the Reflexive Property, and intersecting segments often supply a hidden congruent angle pair via the Vertical Angles Theorem. This worksheet applies SSS and SAS with numeric, algebraic, and coordinate reasoning.",
  examples: [
    ["Example 1: SSS from a diagonal",
      "Quadrilateral $ABCD$ has diagonal $\\overline{AC}$. Given $AB=CD=6$ and $BC=DA=9$, prove $\\triangle ABC \\cong \\triangle CDA$.",
      fig(triABC({ marks: true }), "One triangle formed by the diagonal; tick marks show a pair of congruent sides.") +
      "List the three pairs of corresponding sides:<br>" +
      "$AB=CD=6$ (given)<br>" +
      "$BC=DA=9$ (given)<br>" +
      "$AC=CA$ (Reflexive Property — shared diagonal).<br>" +
      "All three pairs of corresponding sides are congruent.<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle CDA$ by SSS."],

    ["Example 2: Why the included angle matters",
      "A triangle has sides $5$ and $8$ with the angle between them measuring $40^{\\circ}$. Explain why this fixes a unique triangle, while knowing sides $5$ and $8$ with a $40^{\\circ}$ angle opposite the side of length $5$ (not between the two sides) would not.",
      "When the $40^{\\circ}$ angle is <i>included</i> (between the two given sides), the two sides are locked at that fixed angle, so their endpoints can only be joined by one possible third side — the triangle is unique. This is the SAS Postulate.<br>" +
      "When the given angle is not included (adjacent to only one of the two sides), the second side can often \"swing\" and land in two different positions while still satisfying all the given measurements, producing two non-congruent triangles.<br>" +
      "<b>Conclusion:</b> this ambiguity is exactly why SSA is not accepted as a congruence postulate, while SAS is."],

    ["Example 3: Coordinate SSS proof",
      "$\\triangle ABC$ has vertices $A(0,0)$, $B(4,0)$, $C(0,3)$. $\\triangle DEF$ has vertices $D(10,0)$, $E(14,0)$, $F(10,3)$. Prove the triangles are congruent.",
      fig(coordPts([{ x: 0, y: 0, label: "A" }, { x: 4, y: 0, label: "B" }, { x: 0, y: 3, label: "C" }], { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }), "$\\triangle DEF$ is the same shape, shifted $10$ units right.") +
      "Compute the sides of $\\triangle ABC$ using the distance formula:<br>" +
      "$AB=\\sqrt{(4-0)^2+0^2}=4$, $\\quad BC=\\sqrt{4^2+3^2}=5$, $\\quad CA=\\sqrt{0^2+3^2}=3$.<br>" +
      "Compute the sides of $\\triangle DEF$:<br>" +
      "$DE=\\sqrt{(14-10)^2+0^2}=4$, $\\quad EF=\\sqrt{4^2+3^2}=5$, $\\quad FD=\\sqrt{0^2+3^2}=3$.<br>" +
      "Corresponding sides match: $AB=DE=4$, $BC=EF=5$, $CA=FD=3$.<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle DEF$ by SSS."],

    ["Example 4: Algebra for SAS",
      "In $\\triangle ABC$ and $\\triangle DEF$, $AB=2x+3$, $DE=11$, $AC=DF=9$, and $\\angle A \\cong \\angle D$ (the angle included between the given sides in each triangle). Find $x$ so the triangles are congruent by SAS.",
      "For SAS, we need $AB=DE$:<br>" +
      "$2x+3=11$<br>" +
      "$2x=8 \\Rightarrow x=4$.<br>" +
      "Check: $AB=2(4)+3=11=DE$ ✓, and $AC=DF=9$ is already given, with $\\angle A\\cong\\angle D$ included between them.<br>" +
      "<b>Conclusion:</b> with $x=4$, $\\triangle ABC \\cong \\triangle DEF$ by SAS."],

    ["Example 5: Vertical angles supply the included angle",
      "Segments $\\overline{AC}$ and $\\overline{BD}$ intersect at $E$. Given $AE=CE$ and $BE=DE$, prove $\\triangle AEB \\cong \\triangle CED$.",
      "Identify the given congruent sides: $AE=CE$ and $BE=DE$.<br>" +
      "$\\angle AEB$ and $\\angle CED$ are vertical angles (formed by the two intersecting segments), so $\\angle AEB \\cong \\angle CED$ by the Vertical Angles Theorem.<br>" +
      "This angle is included between $\\overline{AE}, \\overline{BE}$ in one triangle and $\\overline{CE}, \\overline{DE}$ in the other.<br>" +
      "Two pairs of sides and the included angle are congruent.<br>" +
      "<b>Conclusion:</b> $\\triangle AEB \\cong \\triangle CED$ by SAS."],

    ["Example 6: Parallelogram diagonal SSS",
      "Parallelogram $ABCD$ has diagonal $\\overline{BD}$. Opposite sides of a parallelogram are congruent, so $AB=CD$ and $AD=CB$. Prove $\\triangle ABD \\cong \\triangle CDB$.",
      "List the three pairs of corresponding sides:<br>" +
      "$AB=CD$ (opposite sides of parallelogram)<br>" +
      "$AD=CB$ (opposite sides of parallelogram)<br>" +
      "$BD=DB$ (Reflexive Property — shared diagonal).<br>" +
      "All three pairs of sides are congruent.<br>" +
      "<b>Conclusion:</b> $\\triangle ABD \\cong \\triangle CDB$ by SSS."],

    ["Example 7: CPCTC after SSS",
      "$\\triangle ABC \\cong \\triangle DEF$ by SSS, with $\\angle A=50^{\\circ}$ and $\\angle B=65^{\\circ}$. Find $\\angle D$, $\\angle E$, and $\\angle F$.",
      "The congruence statement $\\triangle ABC \\cong \\triangle DEF$ tells the correspondence: $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$.<br>" +
      "By CPCTC (Corresponding Parts of Congruent Triangles are Congruent): $\\angle D=\\angle A=50^{\\circ}$ and $\\angle E=\\angle B=65^{\\circ}$.<br>" +
      "Find $\\angle C$ using the Angle-Sum Theorem: $\\angle C=180-50-65=65^{\\circ}$.<br>" +
      "By CPCTC again, $\\angle F=\\angle C=65^{\\circ}$.<br>" +
      "<b>Answer:</b> $\\angle D=50^{\\circ}$, $\\angle E=65^{\\circ}$, $\\angle F=65^{\\circ}$."],

    ["Example 8: When no postulate applies (SSA)",
      "In $\\triangle ABC$ and $\\triangle DEF$: $AB=DE$, $BC=EF$, and $\\angle A \\cong \\angle D$, where $\\angle A$ is not included between the two given sides. Can you conclude the triangles are congruent?",
      "Check which parts are given: two pairs of sides ($AB=DE$, $BC=EF$) and one pair of angles ($\\angle A \\cong \\angle D$).<br>" +
      "The angle is adjacent to only one of the given sides, not included between both — this is the SSA arrangement.<br>" +
      "As shown in Example 2, SSA can produce two different triangles from the same measurements.<br>" +
      "<b>Conclusion:</b> No — congruence cannot be concluded from SSA (this is not a valid postulate, apart from the special right-triangle HL case)."],

    ["Example 9: Truss manufacturing (SSS in context)",
      "A truss manufacturer builds two triangular braces to the same specifications: side lengths $7$ ft, $7$ ft, and $10$ ft. Explain why the two braces must be congruent, and name the postulate.",
      "Both braces have matching corresponding side lengths: $7=7$, $7=7$, and $10=10$.<br>" +
      "Three pairs of corresponding sides are congruent, regardless of how each brace is oriented on the factory floor.<br>" +
      "<b>Conclusion:</b> the braces are congruent by SSS — matching all three side lengths always produces the same triangle shape."],
  ],
  questions: [
    ["Problem 1: SSS meaning", "What does SSS stand for?", "Side-Side-Side"],
    ["Problem 2: SAS meaning", "What does SAS stand for?", "Side-Angle-Side"],
    ["Problem 3: Included angle", "In SAS, where must the given angle be located?", "Between the two given sides (included)"],
    ["Problem 4: Apply SSS", "Three pairs of corresponding sides are congruent. What can you conclude, and by what postulate?", "The triangles are congruent, by SSS"],
    ["Problem 5: Apply SAS", "Two pairs of sides and the included angle are congruent. Conclusion and postulate?", "The triangles are congruent, by SAS"],
    ["Problem 6: SSA check", "Two sides and a non-included angle are congruent between two triangles. Can you conclude congruence by SAS?", "No — the angle is not included, so SAS does not apply (SSA is not a valid shortcut)"],
    ["Problem 7: Shared side", "Two triangles share a side. What property justifies that the side is congruent to itself?", "Reflexive Property"],
    ["Problem 8: Correspondence", "$\\triangle ABC \\cong \\triangle DEF$. Side $\\overline{AB}$ corresponds to which side?", "$\\overline{DE}$"],
    ["Problem 9: Correspondence", "$\\triangle ABC \\cong \\triangle DEF$. $\\angle C$ corresponds to which angle?", "$\\angle F$"],
    ["Problem 10: Choose postulate", "All three pairs of sides are marked congruent. Which postulate applies?", "SSS"],
    ["Problem 11: Choose postulate", "Two pairs of sides and the included angle are marked congruent. Which postulate applies?", "SAS"],
    ["Problem 12: Statement order", "In a congruence statement like $\\triangle ABC \\cong \\triangle DEF$, does the order of the letters matter?", "Yes — it identifies the correspondence between vertices"],
    ["Problem 13: Challenge — coordinate SSS", "$\\triangle ABC$ has vertices $A(0,0)$, $B(6,0)$, $C(0,8)$. $\\triangle DEF$ has vertices $D(0,0)$, $E(0,-6)$, $F(8,0)$. Compute all three side lengths of each triangle and determine whether they are congruent.", "$AB=DE=6$, $BC=EF=10$, $CA=FD=8$ — congruent by SSS despite the different orientation"],
    ["Problem 14: Challenge — vertical angles + algebra", "Segments $\\overline{AC}$ and $\\overline{BD}$ intersect at $E$. $AE=3x-1$, $CE=11$, $BE=5x-6$, $DE=14$. Find $x$, then explain why $\\angle AEB \\cong \\angle CED$, and name the postulate proving $\\triangle AEB \\cong \\triangle CED$.", "$x=4$; $AE=CE=11$, $BE=DE=14$; $\\angle AEB\\cong\\angle CED$ by the Vertical Angles Theorem; congruent by SAS"],
    ["Problem 15: Challenge — CPCTC multi-step", "$\\triangle ABC \\cong \\triangle DEF$ by SAS, with $\\angle A=48^{\\circ}$, $\\angle B=(2x+10)^{\\circ}$, and $\\angle E=76^{\\circ}$. Find $x$, then find $\\angle C$ and $\\angle F$.", "$x=33$; $\\angle B=\\angle E=76^{\\circ}$; $\\angle C=\\angle F=56^{\\circ}$"],
  ],
};
