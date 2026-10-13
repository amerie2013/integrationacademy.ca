import { fig, triABC } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "4.4",
  title: "ASA and AAS Congruence",
  intro: "The <b>ASA Postulate</b> proves triangles congruent from two pairs of congruent angles plus the <i>included</i> side (the side between those two angles). The <b>AAS Theorem</b> proves congruence from two pairs of congruent angles plus a non-included side — a side that lies opposite one of the given angles rather than between them. AAS actually reduces to ASA: since two angles are congruent, the Angle-Sum Theorem forces the third pair of angles to be congruent too, which makes the given side included relative to that third angle. Note that <b>AAA is never a valid congruence criterion</b> — matching all three angles only guarantees the triangles are the same shape (similar), not the same size. This worksheet applies ASA and AAS with numeric, algebraic, and overlapping-triangle reasoning, and contrasts them with AAA.",
  examples: [
    ["Example 1: Apply ASA",
      "In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A \\cong \\angle D$, $AB = DE$ (the side between $\\angle A$ and $\\angle B$), and $\\angle B \\cong \\angle E$. What can you conclude?",
      fig(triABC({ marks: true }), "Two angles and the side directly between them are marked congruent.") +
      "Identify the given parts: $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and side $\\overline{AB}$ lies between $\\angle A$ and $\\angle B$ — it is the included side.<br>" +
      "Two angles and the included side are congruent.<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle DEF$ by ASA."],

    ["Example 2: Apply AAS",
      "In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and $BC = EF$. Is $\\overline{BC}$ included between the two given angles? What can you conclude?",
      "Side $\\overline{AB}$ (not $\\overline{BC}$) lies between $\\angle A$ and $\\angle B$, so $\\overline{BC}$ is <i>not</i> included — it lies opposite $\\angle A$.<br>" +
      "We have two pairs of congruent angles and one pair of congruent non-included sides.<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle DEF$ by AAS."],

    ["Example 3: Why AAS actually works",
      "Explain why AAS guarantees congruence, using the Angle-Sum Theorem.",
      "Given $\\angle A \\cong \\angle D$ and $\\angle B \\cong \\angle E$, apply the Angle-Sum Theorem to both triangles:<br>" +
      "$\\angle C = 180-\\angle A-\\angle B$ and $\\angle F=180-\\angle D-\\angle E$.<br>" +
      "Since $\\angle A=\\angle D$ and $\\angle B=\\angle E$, the right-hand sides are equal, so $\\angle C \\cong \\angle F$ as well.<br>" +
      "Now side $\\overline{BC}$ is included between $\\angle B$ and the newly-shown $\\angle C$ (and likewise $\\overline{EF}$ between $\\angle E$ and $\\angle F$).<br>" +
      "<b>Conclusion:</b> AAS is really ASA in disguise — the third angle pair is congruent \"for free\" from the Angle-Sum Theorem, making the given side included after all."],

    ["Example 4: Algebra for ASA",
      "In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A = 3x+5$, $\\angle D=2x+25$ (given congruent), $\\angle B \\cong \\angle E$, and included side $AB=DE=14$. Find $x$ and $\\angle A$.",
      "Set the two angle expressions equal (since $\\angle A \\cong \\angle D$):<br>" +
      "$3x+5=2x+25$<br>" +
      "$x=20$.<br>" +
      "$\\angle A = 3(20)+5=65^{\\circ}$ (check: $\\angle D=2(20)+25=65^{\\circ}$ ✓).<br>" +
      "With $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and included side $AB=DE=14$:<br>" +
      "<b>Conclusion:</b> $x=20$; $\\triangle ABC \\cong \\triangle DEF$ by ASA."],

    ["Example 5: Shared side via angle bisector (AAS)",
      "$\\overline{BD}$ bisects $\\angle ABC$ (so $\\angle ABD \\cong \\angle CBD$), and $\\angle A \\cong \\angle C$. Prove $\\triangle ABD \\cong \\triangle CBD$.",
      fig(triABC({ marks: true }), "$\\overline{BD}$ splits the triangle; the shared side $BD$ is opposite the marked angles at $A$ and $C$.") +
      "Identify the parts: $\\angle A \\cong \\angle C$ (given) and $\\angle ABD \\cong \\angle CBD$ (bisector, given) — two pairs of angles.<br>" +
      "$\\overline{BD} \\cong \\overline{BD}$ by the Reflexive Property (shared side).<br>" +
      "In each triangle, $\\overline{BD}$ is opposite $\\angle A$ (or $\\angle C$) — it is not between the two given angles, so it is a non-included side.<br>" +
      "<b>Conclusion:</b> $\\triangle ABD \\cong \\triangle CBD$ by AAS."],

    ["Example 6: AAA is not enough",
      "$\\triangle ABC$ has angles $40^{\\circ}$, $60^{\\circ}$, $80^{\\circ}$ and sides $5$, $7$, $8$. $\\triangle DEF$ has the same three angles $40^{\\circ}$, $60^{\\circ}$, $80^{\\circ}$ but sides $10$, $14$, $16$. Are the triangles congruent?",
      "Compare the angles: all three pairs match exactly ($40^{\\circ}=40^{\\circ}$, $60^{\\circ}=60^{\\circ}$, $80^{\\circ}=80^{\\circ}$) — this is AAA.<br>" +
      "Compare the sides: $5\\neq10$, $7\\neq14$, $8\\neq16$ — none of the corresponding sides match.<br>" +
      "The triangles are the same shape (each side of $\\triangle DEF$ is exactly double the corresponding side of $\\triangle ABC$) but not the same size.<br>" +
      "<b>Conclusion:</b> Not congruent — matching angles only (AAA) proves the triangles are <i>similar</i>, never congruence on its own."],

    ["Example 7: CPCTC after ASA",
      "$\\triangle ABC \\cong \\triangle DEF$ by ASA, with $AB=10$, $BC=14$, and $\\angle B=72^{\\circ}$. Find $DE$, $EF$, and $\\angle E$.",
      "The correspondence from $\\triangle ABC \\cong \\triangle DEF$ is $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$.<br>" +
      "By CPCTC: $DE=AB=10$, $EF=BC=14$, and $\\angle E=\\angle B=72^{\\circ}$.<br>" +
      "<b>Answer:</b> $DE=10$, $EF=14$, $\\angle E=72^{\\circ}$."],

    ["Example 8: Roof brackets (ASA in context)",
      "Two triangular roof brackets each have base angles $55^{\\circ}$ and $80^{\\circ}$ with the included side (between them) measuring $12$ in. Are the brackets congruent? Find the third angle of each.",
      fig(triABC(), "Each bracket is a triangle with two known base angles and the side between them.") +
      "Both brackets have $\\angle 1 = 55^{\\circ}$, $\\angle 2=80^{\\circ}$, and the included side $=12$ in — matching ASA information.<br>" +
      "Find the third angle using the Angle-Sum Theorem: $180-55-80=45^{\\circ}$.<br>" +
      "<b>Conclusion:</b> the brackets are congruent by ASA; each has a third angle of $45^{\\circ}$."],

    ["Example 9: Algebra with two given angle pairs",
      "In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A=(2x+6)^{\\circ}$ and $\\angle D=50^{\\circ}$ are congruent; $\\angle B=65^{\\circ}=\\angle E$; and $AB=DE=9$ is the side between $\\angle A$ and $\\angle B$. Find $x$ and name the postulate that proves the triangles congruent.",
      "Set $\\angle A = \\angle D$:<br>" +
      "$2x+6=50$<br>" +
      "$2x=44 \\Rightarrow x=22$.<br>" +
      "So $\\angle A = 50^{\\circ}$, matching $\\angle D$; also $\\angle B=\\angle E=65^{\\circ}$ (already given).<br>" +
      "Side $\\overline{AB}$ is included between $\\angle A$ and $\\angle B$ in $\\triangle ABC$ (and $\\overline{DE}$ between $\\angle D$ and $\\angle E$ in $\\triangle DEF$).<br>" +
      "<b>Conclusion:</b> $x=22$; $\\triangle ABC \\cong \\triangle DEF$ by ASA."],
  ],
  questions: [
    ["Problem 1: ASA meaning", "What does ASA stand for?", "Angle-Side-Angle"],
    ["Problem 2: AAS meaning", "What does AAS stand for?", "Angle-Angle-Side"],
    ["Problem 3: Included side", "In ASA, where must the given side be located?", "Between the two given angles (included)"],
    ["Problem 4: Conclude ASA", "Two angles and the included side are congruent between two triangles. Which postulate applies?", "ASA"],
    ["Problem 5: Conclude AAS", "Two angles and a non-included side are congruent. Which postulate applies?", "AAS"],
    ["Problem 6: AAA?", "Is matching all three pairs of angles (AAA) enough to prove congruence?", "No — AAA proves similarity, not congruence"],
    ["Problem 7: Third angle", "If two pairs of angles are congruent, why must the third pair also be congruent?", "By the Angle-Sum Theorem, the third angle equals $180^{\\circ}$ minus the other two, which are already equal"],
    ["Problem 8: Shared angle", "Two triangles share an angle at a common vertex. Which property justifies the angle is congruent to itself?", "Reflexive Property"],
    ["Problem 9: Correspondence", "$\\triangle ABC \\cong \\triangle XYZ$ by ASA. $\\angle B$ corresponds to which angle?", "$\\angle Y$"],
    ["Problem 10: Choose postulate", "Marks show: angle, included side, angle. Which postulate applies?", "ASA"],
    ["Problem 11: Choose postulate", "Marks show: angle, angle, side opposite one of them. Which postulate applies?", "AAS"],
    ["Problem 12: After proof", "After proving triangles congruent, corresponding sides are congruent by what idea?", "CPCTC"],
    ["Problem 13: Challenge — algebra + CPCTC", "In $\\triangle ABC$ and $\\triangle DEF$, $\\angle A=(4x-8)^{\\circ}$ and $\\angle D=60^{\\circ}$ are congruent; $\\angle B=45^{\\circ}=\\angle E$; and $AB=DE=13$ is the included side. Find $x$, name the postulate, then find $\\angle C$ and $\\angle F$.", "$x=17$; ASA; $\\angle C=\\angle F=75^{\\circ}$"],
    ["Problem 14: Challenge — AAS with algebra", "Two triangular braces each have angles $50^{\\circ}$ and $70^{\\circ}$. The side opposite the $70^{\\circ}$ angle measures $3x-2$ in one brace and $16$ in the other, and the braces are congruent by AAS. Find $x$ and the third angle of each brace.", "$x=6$; third angle $=60^{\\circ}$ in each"],
    ["Problem 15: Challenge — bisector proof with algebra", "$\\overline{BD}$ bisects $\\angle ABC$, with $\\angle ABD=(3x+5)^{\\circ}$ and $\\angle CBD=(2x+15)^{\\circ}$. Also $\\angle A \\cong \\angle C = 48^{\\circ}$, and $\\overline{BD}$ is shared (opposite the $48^{\\circ}$ angles). Find $x$, name the postulate proving $\\triangle ABD \\cong \\triangle CBD$, and find $\\angle ADB$.", "$x=10$; $\\angle ABD=\\angle CBD=35^{\\circ}$; AAS; $\\angle ADB=97^{\\circ}$"],
  ],
};
