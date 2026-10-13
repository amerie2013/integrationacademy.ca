import { fig, triABC, parallelTransversal } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "5.2",
  title: "Similarity Theorems (AA, SAS~, SSS~)",
  intro: "Similar triangles have the same shape but not necessarily the same size: corresponding angles are congruent, and corresponding sides are in a constant ratio (the scale factor). Three shortcuts prove similarity without checking every part. <b>AA (Angle-Angle):</b> two pairs of congruent angles are enough, since the third pair automatically matches (Angle-Sum Theorem). <b>SAS~ (Side-Angle-Side):</b> two pairs of sides in the same ratio, with the included angle congruent. <b>SSS~ (Side-Side-Side):</b> all three pairs of corresponding sides in the same ratio. A key skill is matching corresponding sides correctly — often this means sorting each triangle's sides from shortest to longest before comparing ratios. Once similarity is established, a proportion between corresponding sides (written in the order given by the similarity statement) solves for missing lengths, and perimeters of similar triangles share the same ratio as their sides.",
  examples: [
    ["Example 1: AA Similarity",
      "$\\angle A=50^{\\circ}$, $\\angle B=70^{\\circ}$ in $\\triangle ABC$; $\\angle D=50^{\\circ}$, $\\angle E=70^{\\circ}$ in $\\triangle DEF$. Determine if the triangles are similar, and write a similarity statement.",
      fig(triABC(), "Matching angle pairs is enough to guarantee the same shape.") +
      "Compare the given angles: $\\angle A=\\angle D=50^{\\circ}$ and $\\angle B=\\angle E=70^{\\circ}$ — two pairs of congruent angles.<br>" +
      "By the Angle-Sum Theorem, the third angles must also match: $\\angle C=\\angle F=180-50-70=60^{\\circ}$.<br>" +
      "Two pairs of congruent angles is enough for similarity.<br>" +
      "<b>Answer:</b> $\\triangle ABC \\sim \\triangle DEF$ by AA."],

    ["Example 2: SSS~ — sort the sides first",
      "$\\triangle ABC$ has sides $4$, $5$, $7$. $\\triangle DEF$ has sides $10$, $14$, $8$. Determine if the triangles are similar.",
      "Sort each triangle's sides from shortest to longest so corresponding sides line up:<br>" +
      "$\\triangle ABC$: $4, 5, 7$. $\\quad\\triangle DEF$: $8, 10, 14$.<br>" +
      "Form the three ratios (larger to smaller): $\\dfrac{8}{4}=2$, $\\dfrac{10}{5}=2$, $\\dfrac{14}{7}=2$.<br>" +
      "All three ratios are equal.<br>" +
      "<b>Conclusion:</b> the triangles are similar by SSS~, with scale factor $2$."],

    ["Example 3: SAS Similarity",
      "$MN=4$, $MP=6$, $\\angle M=40^{\\circ}$ (included) in $\\triangle MNP$; $QR=6$, $QS=9$, $\\angle Q=40^{\\circ}$ (included) in $\\triangle QRS$. Determine if the triangles are similar.",
      "Check the ratio of the two given sides in each triangle:<br>" +
      "$\\dfrac{MN}{QR}=\\dfrac{4}{6}=\\dfrac{2}{3}$ and $\\dfrac{MP}{QS}=\\dfrac{6}{9}=\\dfrac{2}{3}$ — equal ratios.<br>" +
      "The included angles are congruent: $\\angle M=\\angle Q=40^{\\circ}$.<br>" +
      "Two pairs of proportional sides with the included angle congruent.<br>" +
      "<b>Conclusion:</b> $\\triangle MNP \\sim \\triangle QRS$ by SAS~."],

    ["Example 4: Find a missing side",
      "$\\triangle ABC \\sim \\triangle DEF$, with $AB=8$, $DE=12$, and $BC=10$. Find $EF$.",
      "Write a proportion using corresponding sides, in the order given by the similarity statement:<br>" +
      "$\\dfrac{AB}{DE}=\\dfrac{BC}{EF}$<br>" +
      "$\\dfrac{8}{12}=\\dfrac{10}{EF}$<br>" +
      "Cross-multiply: $8\\cdot EF=120$<br>" +
      "$EF=15$.<br>" +
      "<b>Answer:</b> $EF=15$."],

    ["Example 5: Parallel line creates AA similarity",
      "In $\\triangle ABC$, $\\overline{DE}\\parallel\\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. If $AD=6$, $AB=10$, $DE=9$, find $BC$.",
      fig(parallelTransversal(), "Parallel lines cut by the two transversals $AB$ and $AC$ create congruent corresponding angles.") +
      "Since $\\overline{DE}\\parallel\\overline{BC}$: $\\angle ADE \\cong \\angle ABC$ (corresponding angles, transversal $\\overline{AB}$), and $\\angle AED \\cong \\angle ACB$ (corresponding angles, transversal $\\overline{AC}$).<br>" +
      "Two pairs of congruent angles $\\Rightarrow$ $\\triangle ADE \\sim \\triangle ABC$ by AA.<br>" +
      "Set up the proportion: $\\dfrac{AD}{AB}=\\dfrac{DE}{BC}$<br>" +
      "$\\dfrac{6}{10}=\\dfrac{9}{BC}$<br>" +
      "$BC=\\dfrac{9\\times10}{6}=15$.<br>" +
      "<b>Answer:</b> $BC=15$."],

    ["Example 6: Scale factor and perimeter",
      "$\\triangle PQR \\sim \\triangle XYZ$ with corresponding sides $5$ and $20$. If the perimeter of $\\triangle PQR$ is $33$, find the perimeter of $\\triangle XYZ$.",
      "Find the scale factor from $\\triangle PQR$ to $\\triangle XYZ$: $k=\\dfrac{20}{5}=4$.<br>" +
      "Perimeters of similar triangles share the same ratio as their corresponding sides.<br>" +
      "Perimeter of $\\triangle XYZ = 4\\times33=132$.<br>" +
      "<b>Answer:</b> $132$."],

    ["Example 7: Not similar (sorting reveals it)",
      "$\\triangle ABC$ has sides $3$, $4$, $5$. $\\triangle DEF$ has sides $6$, $8$, $12$. Are the triangles similar?",
      "Sort each set of sides: $3,4,5$ and $6,8,12$ (already in order).<br>" +
      "Form the ratios: $\\dfrac{6}{3}=2$, $\\dfrac{8}{4}=2$, $\\dfrac{12}{5}=2.4$.<br>" +
      "The first two ratios equal $2$, but the third equals $2.4$ — not all three match.<br>" +
      "<b>Conclusion:</b> Not similar — SSS~ fails because the ratios are not all equal."],

    ["Example 8: Third angle confirms AA",
      "Two triangles each have angles $40^{\\circ}$ and $65^{\\circ}$. Find the third angle in each, and state whether the triangles are similar.",
      "Apply the Angle-Sum Theorem to each triangle: third angle $=180-40-65=75^{\\circ}$.<br>" +
      "Both triangles have angle sets $\\{40^{\\circ}, 65^{\\circ}, 75^{\\circ}\\}$ — all three angles match.<br>" +
      "<b>Conclusion:</b> the triangles are similar by AA (only two pairs needed to be checked; the third followed automatically)."],

    ["Example 9: Nested triangle — solve for $x$",
      "In $\\triangle ABC$, $\\overline{DE}\\parallel\\overline{BC}$, with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. $AD=2x$, $DB=x+3$, $AE=8$, $EC=10$, and $\\triangle ADE\\sim\\triangle ABC$. Find $x$.",
      "Since $\\overline{DE}\\parallel\\overline{BC}$, $\\triangle ADE\\sim\\triangle ABC$ by AA, so $\\dfrac{AD}{AB}=\\dfrac{AE}{AC}$.<br>" +
      "$AB=AD+DB=2x+(x+3)=3x+3$; $\\quad AC=AE+EC=8+10=18$.<br>" +
      "Set up the proportion: $\\dfrac{2x}{3x+3}=\\dfrac{8}{18}=\\dfrac{4}{9}$<br>" +
      "Cross-multiply: $9(2x)=4(3x+3)$<br>" +
      "$18x=12x+12$<br>" +
      "$6x=12 \\Rightarrow x=2$.<br>" +
      "Check: $AD=4$, $AB=9$, $\\dfrac{4}{9}=\\dfrac{8}{18}$ ✓.<br>" +
      "<b>Answer:</b> $x=2$."],
  ],
  questions: [
    ["Problem 1: AA", "Two triangles each have angles $55^{\\circ}$ and $70^{\\circ}$. Are they similar? Why?", "Yes; AA (matching angle pairs $55^{\\circ}$ and $70^{\\circ}$)"],
    ["Problem 2: SSS~", "Sides $4$, $6$, $8$ and $6$, $9$, $12$. Similar?", "Yes; all ratios equal $\\dfrac{3}{2}$"],
    ["Problem 3: Missing side", "$\\triangle ABC\\sim\\triangle DEF$, $AB=5$, $DE=15$, $BC=7$. Find $EF$.", "$21$"],
    ["Problem 4: Scale factor", "Corresponding sides $8$ and $2$. Scale factor from larger to smaller?", "$\\dfrac{1}{4}$"],
    ["Problem 5: SAS~", "Sides $3$, $5$ with included $60^{\\circ}$; sides $6$, $10$ with included $60^{\\circ}$. Similar?", "Yes; SAS~"],
    ["Problem 6: Proportion", "$\\triangle GHI\\sim\\triangle JKL$, $GH=10$, $JK=4$, $HI=15$. Find $KL$.", "$6$"],
    ["Problem 7: Not similar", "Sides $5$, $7$, $9$ and $10$, $14$, $20$. Similar?", "No; $\\dfrac{20}{9}\\neq 2$ (the other two ratios equal $2$)"],
    ["Problem 8: Parallel", "$\\overline{DE}\\parallel\\overline{BC}$ in $\\triangle ABC$, $AD=4$, $AB=10$, $DE=6$. Find $BC$.", "$15$"],
    ["Problem 9: AA statement", "$\\angle A\\cong\\angle D$ and $\\angle B\\cong\\angle E$. Write a similarity statement.", "$\\triangle ABC\\sim\\triangle DEF$"],
    ["Problem 10: Missing side", "$\\triangle RST\\sim\\triangle UVW$, $RS=9$, $UV=12$, $ST=15$. Find $VW$.", "$20$"],
    ["Problem 11: Scale factor", "Sides $6$, $8$, $10$ correspond to $9$, $12$, $15$. Scale factor?", "$\\dfrac{3}{2}$"],
    ["Problem 12: Third angle", "Angles $30^{\\circ}$, $80^{\\circ}$ in one triangle; $30^{\\circ}$, $70^{\\circ}$ in another. Similar?", "No; third angles differ ($70^{\\circ}$ vs $80^{\\circ}$)"],
    ["Problem 13: Challenge — nested triangle algebra", "In $\\triangle ABC$, $\\overline{DE}\\parallel\\overline{BC}$, $AD=3x$, $DB=x+2$, $AE=9$, $EC=6$, and $\\triangle ADE\\sim\\triangle ABC$. Find $x$.", "$x=2$"],
    ["Problem 14: Challenge — scale factor and perimeter", "$\\triangle PQR\\sim\\triangle XYZ$. $PQ=7$, $QR=9$, $RP=11$, and $XY=21$. Find the scale factor, $YZ$, $ZX$, and the perimeter of $\\triangle XYZ$.", "Scale factor $=3$; $YZ=27$, $ZX=33$; perimeter of $\\triangle XYZ=81$"],
    ["Problem 15: Challenge — sorting trap with algebra", "A triangle with sides $x$, $12$, $15$ (where $x$ is shortest) is similar to a triangle with sides $8$, $20$, $25$. Find $x$.", "$x=4.8$"],
  ],
};
