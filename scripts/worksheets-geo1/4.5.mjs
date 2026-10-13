import { fig, rightTri, triABC, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "4.5",
  title: "Hypotenuse-Leg (HL) Congruence",
  intro: "The <b>HL Theorem</b> is a congruence shortcut that applies only to right triangles: if the hypotenuse and one leg of a right triangle are congruent to the hypotenuse and corresponding leg of another right triangle, the triangles are congruent. HL is really a special case of \"SSA,\" which is normally not a valid shortcut — but for right triangles it works because the Pythagorean Theorem <i>uniquely</i> determines the missing leg once the hypotenuse and one leg are fixed ($b=\\sqrt{c^{2}-a^{2}}$ has only one positive solution). That forces all three sides to match, turning the situation into SSS. This worksheet applies HL numerically, algebraically, and with coordinates, and contrasts it with SAS when two legs (rather than the hypotenuse) are given.",
  examples: [
    ["Example 1: Apply HL",
      "Right $\\triangle ABC$ (right angle at $C$) and right $\\triangle DEF$ (right angle at $F$) have $AB=DE=17$ and $AC=DF=8$. What can you conclude?",
      fig(rightTri("8", "", "17"), "Hypotenuse is opposite the right angle; here it is $17$, with a known leg of $8$.") +
      "Identify the parts: $AB$ and $DE$ are the hypotenuses (opposite the right angles at $C$ and $F$), and both equal $17$.<br>" +
      "$AC$ and $DF$ are corresponding legs, both equal to $8$.<br>" +
      "Both triangles are right triangles with a congruent hypotenuse and a congruent leg.<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle DEF$ by HL."],

    ["Example 2: Why HL works",
      "Explain why HL is a valid shortcut even though it is essentially an SSA situation.",
      "In a right triangle, once the hypotenuse $c$ and one leg $a$ are fixed, the Pythagorean Theorem gives $b^{2}=c^{2}-a^{2}$.<br>" +
      "Since side lengths must be positive, $b=\\sqrt{c^{2}-a^{2}}$ has exactly <b>one</b> possible value — there is no ambiguity like in general SSA.<br>" +
      "So if two right triangles share the same $c$ and $a$, they must also share the same $b$, giving three matching sides.<br>" +
      "<b>Conclusion:</b> the right angle removes the ambiguity that normally makes SSA invalid, so HL (really SSS in disguise) is a safe shortcut."],

    ["Example 3: Coordinate HL proof",
      "Right $\\triangle ABC$ has $A(0,0)$, $B(0,5)$, $C(12,0)$ (right angle at $A$). Right $\\triangle DEF$ has $D(0,0)$, $E(0,-5)$, $F(-12,0)$ (right angle at $D$). Prove the triangles are congruent.",
      fig(coordPts([{ x: 0, y: 0, label: "A" }, { x: 0, y: 5, label: "B" }, { x: 12, y: 0, label: "C" }], { xmin: -2, xmax: 13, ymin: -2, ymax: 6 }), "Legs $5$ and $12$ meet at the right angle; the hypotenuse is $13$.") +
      "Compute the sides of $\\triangle ABC$: legs $AB=5$, $AC=12$; hypotenuse $BC=\\sqrt{5^{2}+12^{2}}=\\sqrt{169}=13$.<br>" +
      "Compute the sides of $\\triangle DEF$: legs $DE=5$, $DF=12$; hypotenuse $EF=\\sqrt{5^{2}+12^{2}}=13$.<br>" +
      "Both are right triangles with hypotenuse $13$ and a corresponding leg of $5$ (or $12$).<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle DEF$ by HL."],

    ["Example 4: Algebra for HL",
      "Two right triangles have hypotenuses $4x-3$ and $25$, and a corresponding leg of $7$ in each. Find $x$, then use the Pythagorean Theorem to find the other leg (which must also match).",
      "Set the hypotenuse expressions equal:<br>" +
      "$4x-3=25$<br>" +
      "$4x=28 \\Rightarrow x=7$.<br>" +
      "Hypotenuse $=25$, leg $=7$ in both triangles $\\Rightarrow$ congruent by HL.<br>" +
      "Find the other leg: $b=\\sqrt{25^{2}-7^{2}}=\\sqrt{625-49}=\\sqrt{576}=24$.<br>" +
      "<b>Answer:</b> $x=7$; the other leg in each triangle is $24$ (confirming full SSS agreement, as guaranteed by HL)."],

    ["Example 5: Altitude of an isosceles triangle",
      "In isosceles $\\triangle ABC$ with $AB=AC$, altitude $\\overline{AD}$ is drawn to base $\\overline{BC}$, meeting it at $D$. Prove $\\triangle ABD \\cong \\triangle ACD$.",
      fig(triABC({ marks: true }), "Altitude $AD$ splits the isosceles triangle into two right triangles sharing leg $AD$.") +
      "The altitude creates right angles: $\\angle ADB = \\angle ADC = 90^{\\circ}$, so both small triangles are right triangles (right angle at $D$).<br>" +
      "$\\overline{AB}$ and $\\overline{AC}$ are the hypotenuses (opposite the right angles), and $AB=AC$ is given.<br>" +
      "$\\overline{AD} \\cong \\overline{AD}$ by the Reflexive Property (shared leg).<br>" +
      "<b>Conclusion:</b> $\\triangle ABD \\cong \\triangle ACD$ by HL. (By CPCTC, $BD=DC$, so the altitude is also a median!)"],

    ["Example 6: HL versus SAS",
      "Two right triangles each have legs $6$ and $9$ (not the hypotenuse) congruent to the corresponding legs of the other. Which postulate applies: HL or SAS?",
      "Here, the two given sides are both <i>legs</i>, not the hypotenuse — HL specifically requires the hypotenuse to be one of the two given sides.<br>" +
      "The right angle sits directly between the two legs, so it is the included angle.<br>" +
      "Two sides ($6$ and $9$) and the included right angle are congruent.<br>" +
      "<b>Conclusion:</b> This is SAS, not HL — HL is reserved for the hypotenuse-and-leg case."],

    ["Example 7: Support struts (HL in context)",
      "Two triangular support struts are both right triangles with hypotenuse $13$ ft and one leg $5$ ft. Are the struts congruent? Find the missing leg for quality control.",
      "Both struts are right triangles with matching hypotenuse ($13$) and a matching leg ($5$).<br>" +
      "<b>Conclusion:</b> the struts are congruent by HL.<br>" +
      "Find the missing leg: $b=\\sqrt{13^{2}-5^{2}}=\\sqrt{169-25}=\\sqrt{144}=12$ ft.<br>" +
      "<b>Answer:</b> Congruent by HL; missing leg $=12$ ft in each strut."],

    ["Example 8: CPCTC after HL",
      "Two right triangles are congruent by HL. In the first, the acute angle adjacent to the known leg measures $27^{\\circ}$. Find the corresponding acute angle in the second triangle, and the remaining acute angle in each.",
      "By CPCTC, the corresponding acute angle in the second triangle also measures $27^{\\circ}$.<br>" +
      "The acute angles of a right triangle are complementary (they sum to $90^{\\circ}$ along with the right angle summing to $180^{\\circ}$ total).<br>" +
      "Remaining acute angle $=90-27=63^{\\circ}$ in each triangle.<br>" +
      "<b>Answer:</b> Corresponding angle $=27^{\\circ}$; remaining acute angle $=63^{\\circ}$ in each."],

    ["Example 9: Careful correspondence",
      "Right $\\triangle ABC$ (right angle $C$) has hypotenuse $AB=25$ and leg $BC=7$. Right $\\triangle DEF$ (right angle $F$) has hypotenuse $DE=25$ and leg $EF=24$. Do the triangles have to be congruent, even though the given legs ($7$ vs. $24$) look different?",
      "Find the missing leg of $\\triangle ABC$: $AC=\\sqrt{25^{2}-7^{2}}=\\sqrt{625-49}=\\sqrt{576}=24$.<br>" +
      "Find the missing leg of $\\triangle DEF$: $DF=\\sqrt{25^{2}-24^{2}}=\\sqrt{625-576}=\\sqrt{49}=7$.<br>" +
      "So $\\triangle ABC$ has legs $\\{7,24\\}$ and $\\triangle DEF$ also has legs $\\{7,24\\}$ — both are $7$-$24$-$25$ right triangles.<br>" +
      "<b>Conclusion:</b> Yes, they are congruent by HL — just match $BC\\leftrightarrow DF$ ($7\\leftrightarrow7$) and $AC\\leftrightarrow EF$ ($24\\leftrightarrow24$) instead of the original letter order."],
  ],
  questions: [
    ["Problem 1: Applies to", "HL is a valid shortcut for which kind of triangles?", "Right triangles"],
    ["Problem 2: Parts needed", "HL requires the hypotenuse and what else to be congruent?", "One leg"],
    ["Problem 3: Hypotenuse", "What is the name of the side opposite the right angle?", "Hypotenuse"],
    ["Problem 4: Identify", "Right angle at $C$ in $\\triangle ABC$. Which side is the hypotenuse?", "$\\overline{AB}$"],
    ["Problem 5: Conclude", "Two right triangles have a congruent hypotenuse and a congruent leg. Which postulate applies?", "HL"],
    ["Problem 6: Shared leg", "A shared leg between two right triangles is congruent to itself by which property?", "Reflexive Property"],
    ["Problem 7: Two legs", "Two legs (not the hypotenuse) and the right angle between them are congruent. Which postulate applies?", "SAS"],
    ["Problem 8: Not for acute", "Can HL be used to prove two acute (non-right) triangles congruent?", "No"],
    ["Problem 9: After HL", "After proving triangles congruent by HL, corresponding parts are congruent by what idea?", "CPCTC"],
    ["Problem 10: Longest side", "In a right triangle, the hypotenuse is always the ___ side.", "Longest"],
    ["Problem 11: Choose postulate", "Right triangles with hypotenuses $\\overline{AB}\\cong\\overline{DE}$ and legs $\\overline{BC}\\cong\\overline{EF}$. Which postulate applies?", "HL"],
    ["Problem 12: Precondition", "Must both triangles be confirmed as right triangles before applying HL?", "Yes"],
    ["Problem 13: Challenge — algebra", "Two right triangles have hypotenuses $6x-9$ and $39$, and a corresponding leg of $15$ in each. Find $x$, then find the other leg using the Pythagorean Theorem.", "$x=8$; hypotenuse $=39$; other leg $=36$"],
    ["Problem 14: Challenge — isosceles altitude", "Isosceles $\\triangle ABC$ has $AB=AC=17$ and base $BC=16$. Altitude $\\overline{AD}$ meets $\\overline{BC}$ at $D$. Using HL/CPCTC (the altitude bisects the base), find $BD$, $DC$, and $AD$.", "$BD=DC=8$; $AD=15$"],
    ["Problem 15: Challenge — correspondence puzzle", "Right $\\triangle ABC$ (right angle $C$) has hypotenuse $AB=25$, leg $BC=7$. Right $\\triangle DEF$ (right angle $F$) has hypotenuse $DE=25$, leg $EF=24$. Determine whether the triangles must be congruent, and state a valid correspondence.", "Yes — both are $7$-$24$-$25$ triangles ($AC=24$; $\\triangle DEF$'s missing leg $=7$); congruent by HL with $C\\leftrightarrow F$, $B\\leftrightarrow E$ (leg $7$), $A\\leftrightarrow D$ (leg $24$)"],
  ],
};
