import { fig, triABC, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "4.6",
  title: "Overlapping Triangles & Special Segments",
  intro: "Triangles have four key special segments. A <b>median</b> connects a vertex to the midpoint of the opposite side. An <b>altitude</b> is a perpendicular segment from a vertex to the line containing the opposite side (in an obtuse triangle, the altitude from an acute vertex can land outside the triangle). An <b>angle bisector</b> splits a vertex angle into two congruent angles. A <b>perpendicular bisector</b> is perpendicular to a side at its midpoint, and the <b>Perpendicular Bisector Theorem</b> guarantees every point on it is equidistant from the side's two endpoints. The three medians of a triangle always meet at the <b>centroid</b>, which divides each median in a $2:1$ ratio from the vertex, and can be found by averaging the three vertices' coordinates. When triangles overlap (sharing a side, an angle, or lying across intersecting lines), a good first step is to redraw them separately, then look for shared parts via the Reflexive Property or the Vertical Angles Theorem. This worksheet combines overlapping-triangle proofs with numeric and coordinate work on medians, altitudes, bisectors, and centroids.",
  examples: [
    ["Example 1: Overlapping triangles with parallel sides",
      "$\\overline{AC}$ and $\\overline{BD}$ intersect at $E$, with $\\overline{AB}\\parallel\\overline{CD}$ and $AE=CE$. Prove $\\triangle ABE \\cong \\triangle CDE$.",
      fig(triABC(), "Redrawing the two overlapping triangles separately makes the shared parts easier to see.") +
      "Since $\\overline{AB}\\parallel\\overline{CD}$ and $\\overline{AC}$ is a transversal, alternate interior angles are congruent: $\\angle BAE \\cong \\angle DCE$.<br>" +
      "$\\angle AEB$ and $\\angle CED$ are vertical angles (formed by intersecting segments $\\overline{AC}$, $\\overline{BD}$), so $\\angle AEB \\cong \\angle CED$ by the Vertical Angles Theorem.<br>" +
      "$\\overline{AE} \\cong \\overline{CE}$ is given, and it is included between $\\angle BAE$ and $\\angle AEB$ (likewise $\\overline{CE}$ between $\\angle DCE$ and $\\angle CED$).<br>" +
      "<b>Conclusion:</b> $\\triangle ABE \\cong \\triangle CDE$ by ASA."],

    ["Example 2: Median length by coordinates",
      "Triangle has vertices $A(2,6)$, $B(-2,0)$, $C(6,0)$. Find the length of the median from $A$.",
      fig(coordPts([{ x: 2, y: 6, label: "A" }, { x: -2, y: 0, label: "B" }, { x: 6, y: 0, label: "C" }], { xmin: -3, xmax: 7, ymin: -1, ymax: 7 }), "The median from $A$ goes to the midpoint of $\\overline{BC}$.") +
      "Find the midpoint $M$ of $\\overline{BC}$ (the foot of the median): $M=\\left(\\dfrac{-2+6}{2},\\dfrac{0+0}{2}\\right)=(2,0)$.<br>" +
      "Apply the distance formula from $A(2,6)$ to $M(2,0)$:<br>" +
      "$AM=\\sqrt{(2-2)^{2}+(6-0)^{2}}=\\sqrt{0+36}=6$.<br>" +
      "<b>Answer:</b> median $\\overline{AM}=6$."],

    ["Example 3: Altitude outside an obtuse triangle",
      "In obtuse $\\triangle ABC$ with the obtuse angle at $B$, where does the altitude from $A$ meet line $BC$?",
      "The altitude from $A$ must be perpendicular to line $BC$.<br>" +
      "Because $\\angle B$ is obtuse (greater than $90^{\\circ}$), the perpendicular dropped from $A$ cannot land between $B$ and $C$ — it lands beyond $B$, on the extension of $\\overline{CB}$.<br>" +
      "<b>Conclusion:</b> the foot of the altitude lies outside segment $\\overline{BC}$; two of the three altitudes of an obtuse triangle fall outside the triangle."],

    ["Example 4: Angle bisector algebra",
      "$\\overline{BD}$ bisects $\\angle ABC$, with $\\angle ABD=3x+4$ and $\\angle DBC=5x-10$. Find $x$, each half-angle, and the full angle $\\angle ABC$.",
      "Since $\\overline{BD}$ bisects $\\angle ABC$, the two halves are congruent:<br>" +
      "$3x+4=5x-10$<br>" +
      "$14=2x \\Rightarrow x=7$.<br>" +
      "Each half: $\\angle ABD=3(7)+4=25^{\\circ}$ (check: $5(7)-10=25$ ✓).<br>" +
      "Full angle: $\\angle ABC=25+25=50^{\\circ}$.<br>" +
      "<b>Answer:</b> $x=7$; each half $=25^{\\circ}$; $\\angle ABC=50^{\\circ}$."],

    ["Example 5: Perpendicular Bisector Theorem",
      "Point $P$ lies on the perpendicular bisector of $\\overline{AB}$, which meets $\\overline{AB}$ at midpoint $M$. Prove $PA=PB$.",
      "Identify the given information: $\\overline{PM}$ is perpendicular to $\\overline{AB}$, so $\\angle PMA=\\angle PMB=90^{\\circ}$; and $M$ is the midpoint, so $AM=BM$.<br>" +
      "$\\overline{PM}\\cong\\overline{PM}$ by the Reflexive Property (shared leg).<br>" +
      "$\\triangle PMA$ and $\\triangle PMB$ are right triangles with two congruent legs ($PM=PM$, $AM=BM$) and the right angle included between them.<br>" +
      "By SAS, $\\triangle PMA \\cong \\triangle PMB$.<br>" +
      "<b>Conclusion:</b> $PA=PB$ by CPCTC — every point on the perpendicular bisector is equidistant from $A$ and $B$."],

    ["Example 6: Centroid ratio",
      "Median $\\overline{AM}$ of a triangle has length $18$. The centroid $G$ lies on $\\overline{AM}$. Find $AG$ and $GM$.",
      "The centroid divides every median in a $2:1$ ratio, measured from the vertex.<br>" +
      "So $AG:GM=2:1$, meaning $AG=\\dfrac{2}{3}(18)$ and $GM=\\dfrac{1}{3}(18)$.<br>" +
      "$AG=12$ and $GM=6$.<br>" +
      "Check: $AG+GM=12+6=18=AM$ ✓.<br>" +
      "<b>Answer:</b> $AG=12$, $GM=6$."],

    ["Example 7: Centroid from coordinates",
      "Triangle has vertices $A(1,2)$, $B(7,2)$, $C(4,11)$. Find the coordinates of the centroid.",
      fig(coordPts([{ x: 1, y: 2, label: "A" }, { x: 7, y: 2, label: "B" }, { x: 4, y: 11, label: "C" }], { xmin: -1, xmax: 8, ymin: -1, ymax: 12 }), "The centroid is the average of the three vertices.") +
      "The centroid is found by averaging the $x$-coordinates and averaging the $y$-coordinates of all three vertices:<br>" +
      "$G_x=\\dfrac{1+7+4}{3}=\\dfrac{12}{3}=4$<br>" +
      "$G_y=\\dfrac{2+2+11}{3}=\\dfrac{15}{3}=5$.<br>" +
      "<b>Answer:</b> $G(4,5)$."],

    ["Example 8: When median equals altitude",
      "In $\\triangle ABC$, $D$ is the midpoint of $\\overline{BC}$ (so $\\overline{AD}$ is a median), and also $\\overline{AD}\\perp\\overline{BC}$ (so $\\overline{AD}$ is an altitude). Prove $AB=AC$.",
      fig(triABC({ marks: true }), "$\\overline{AD}$ is both a median and an altitude — it will force the triangle to be isosceles.") +
      "Since $\\overline{AD}$ is an altitude, $\\angle ADB=\\angle ADC=90^{\\circ}$ (right angles).<br>" +
      "Since $\\overline{AD}$ is a median, $D$ is the midpoint of $\\overline{BC}$, so $BD=DC$.<br>" +
      "$\\overline{AD}\\cong\\overline{AD}$ by the Reflexive Property (shared leg).<br>" +
      "$\\triangle ABD$ and $\\triangle ACD$ are right triangles with two congruent legs and the right angle included — congruent by SAS (or HL, using $AD$ as the shared leg).<br>" +
      "<b>Conclusion:</b> $AB=AC$ by CPCTC — the triangle must be isosceles."],

    ["Example 9: Overlapping triangles — redraw first",
      "$\\triangle ABC$ and $\\triangle ADC$ overlap, sharing side $\\overline{AC}$, with $AB=AD$ and $\\angle BAC \\cong \\angle DAC$. Prove $\\triangle ABC \\cong \\triangle ADC$, and describe a helpful first step.",
      "A helpful first step is to redraw $\\triangle ABC$ and $\\triangle ADC$ separately, so the shared side $\\overline{AC}$ is easier to track in each copy.<br>" +
      "List the given parts: $AB=AD$ (given), $\\angle BAC \\cong \\angle DAC$ (given), $\\overline{AC}\\cong\\overline{AC}$ (Reflexive Property, shared side).<br>" +
      "Two sides and the included angle are congruent.<br>" +
      "<b>Conclusion:</b> $\\triangle ABC \\cong \\triangle ADC$ by SAS."],
  ],
  questions: [
    ["Problem 1: Shared side", "Two overlapping triangles share a side. Which property justifies the side is congruent to itself?", "Reflexive Property"],
    ["Problem 2: Shared angle", "Two overlapping triangles share an angle. Which property justifies the angle is congruent to itself?", "Reflexive Property"],
    ["Problem 3: Median", "A median connects a vertex to what point of the opposite side?", "The midpoint"],
    ["Problem 4: From a median", "$\\overline{AD}$ is a median to $\\overline{BC}$. What must be true about $BD$ and $DC$?", "$BD=DC$"],
    ["Problem 5: Altitude", "An altitude from a vertex is perpendicular to what?", "The opposite side (or the line containing it)"],
    ["Problem 6: Right angles", "An altitude always creates angles measuring what?", "$90^{\\circ}$"],
    ["Problem 7: Angle bisector", "An angle bisector splits an angle into two angles that are what?", "Congruent"],
    ["Problem 8: Overlap strategy", "What is a helpful first step when triangles overlap in a diagram?", "Redraw the triangles separately"],
    ["Problem 9: HL overlap", "Two right triangles share a leg and have congruent hypotenuses. Which postulate applies?", "HL"],
    ["Problem 10: Obtuse altitude", "In an obtuse triangle, where can an altitude from an acute vertex fall?", "Outside the triangle, on the extension of the opposite side"],
    ["Problem 11: Centroid ratio", "The centroid divides each median in what ratio, measured from the vertex?", "$2:1$"],
    ["Problem 12: Perpendicular bisector", "A point on the perpendicular bisector of a segment is always equidistant from what?", "The segment's two endpoints"],
    ["Problem 13: Challenge — angle bisector algebra", "$\\overline{BD}$ bisects $\\angle ABC$, with $\\angle ABD=(4x-3)^{\\circ}$ and $\\angle DBC=(2x+11)^{\\circ}$. Find $x$, each half-angle, and $\\angle ABC$.", "$x=7$; each half $=25^{\\circ}$; $\\angle ABC=50^{\\circ}$"],
    ["Problem 14: Challenge — median and isosceles test", "Triangle has vertices $A(0,8)$, $B(-6,0)$, $C(6,0)$. Find the median $\\overline{AM}$ from $A$ (to the midpoint of $\\overline{BC}$), determine if it is also an altitude, and state what that implies about the triangle.", "$AM=8$; since $AM\\perp BC$, it is also an altitude, so $\\triangle ABC$ is isosceles ($AB=AC=10$)"],
    ["Problem 15: Challenge — centroid verification", "Triangle has vertices $A(3,9)$, $B(-3,0)$, $C(9,0)$. Find the centroid $G$, the midpoint $M$ of $\\overline{BC}$, the median length $AM$, and verify $G$ divides $\\overline{AM}$ in ratio $2:1$ from $A$.", "$G(3,3)$; $M(3,0)$; $AM=9$; $AG=6$, $GM=3$ (ratio $2:1$) ✓"],
  ],
};
