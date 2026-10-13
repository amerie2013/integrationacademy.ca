import { fig, triABC, rightTri, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "4.1",
  title: "Classifying Triangles & Angle Sum",
  intro: "Triangles are classified two independent ways. <b>By sides:</b> scalene (no two sides congruent), isosceles (at least two sides congruent), equilateral (all three sides congruent). <b>By angles:</b> acute (all three angles $&lt;90^\\circ$), right (exactly one $90^\\circ$ angle), obtuse (exactly one angle $&gt;90^\\circ$), equiangular (all three angles congruent, which forces equilateral). The <b>Triangle Angle-Sum Theorem</b> guarantees the interior angles of every triangle total $180^\\circ$; its corollary, the <b>Exterior Angle Theorem</b>, says an exterior angle equals the sum of the two non-adjacent (remote) interior angles. Because the angle sum is fixed at $180^\\circ$, a triangle can never have two right angles or two obtuse angles, and the acute angles of a right triangle must be complementary. This worksheet blends definitions, algebra, coordinate geometry, and short proofs.",
  examples: [
    ["Example 1: Classify by sides",
      "A triangle has sides $8$, $8$, and $13$. Classify it by its sides.",
      fig(triABC({ marks: true }), "Tick marks show the two congruent sides.") +
      "Compare all three side lengths: $8$, $8$, $13$.<br>" +
      "Two of the three sides are congruent ($8=8$); the third is different.<br>" +
      "This matches the definition of isosceles (not equilateral, since not all three match; not scalene, since two match).<br>" +
      "<b>Answer:</b> Isosceles."],

    ["Example 2: Classify by angles",
      "A triangle has angles $38^{\\circ}$, $52^{\\circ}$, and $90^{\\circ}$. Classify it by its angles, and check the angle sum.",
      fig(rightTri(), "One angle is exactly $90^\\circ$, so this is a right triangle.") +
      "Check the sum: $38+52+90=180$ ✓ (valid triangle).<br>" +
      "One angle equals exactly $90^{\\circ}$, so by definition this is a <b>right</b> triangle.<br>" +
      "Note the two acute angles are complementary: $38+52=90$, as they must be in any right triangle.<br>" +
      "<b>Answer:</b> Right triangle."],

    ["Example 3: Angles in a given ratio",
      "The three angles of a triangle are in the ratio $2:3:4$. Find each angle, then classify the triangle by angles.",
      "Let the angles be $2x$, $3x$, and $4x$.<br>" +
      "Apply the Angle-Sum Theorem: $2x+3x+4x=180$<br>" +
      "$9x=180 \\Rightarrow x=20$.<br>" +
      "Angles: $2(20)=40^{\\circ}$, $3(20)=60^{\\circ}$, $4(20)=80^{\\circ}$.<br>" +
      "Check: $40+60+80=180$ ✓. All three angles are less than $90^{\\circ}$.<br>" +
      "<b>Answer:</b> $40^{\\circ}, 60^{\\circ}, 80^{\\circ}$ — acute triangle."],

    ["Example 4: Algebraic angle sum",
      "In $\\triangle ABC$, $\\angle A = 3x+10$, $\\angle B = 2x-4$, and $\\angle C = 104^{\\circ}$. Find $x$ and each angle, then classify by angles.",
      "Identify the relationship: the three angles must sum to $180^{\\circ}$.<br>" +
      "Set up the equation: $(3x+10)+(2x-4)+104=180$<br>" +
      "Combine like terms: $5x+110=180$<br>" +
      "Solve: $5x=70 \\Rightarrow x=14$.<br>" +
      "Substitute back: $\\angle A = 3(14)+10=52^{\\circ}$, $\\angle B = 2(14)-4=24^{\\circ}$, $\\angle C = 104^{\\circ}$.<br>" +
      "Check: $52+24+104=180$ ✓. Since $\\angle C&gt;90^{\\circ}$, the triangle is obtuse.<br>" +
      "<b>Answer:</b> $x=14$; angles $52^{\\circ}, 24^{\\circ}, 104^{\\circ}$ — obtuse triangle."],

    ["Example 5: Prove the Exterior Angle Theorem",
      "Prove that an exterior angle of a triangle equals the sum of the two remote interior angles.",
      fig(triABC({ C: "C (extend to D)" }), "Extend a side of the triangle to form exterior $\\angle ACD$.") +
      "Let the triangle's interior angles be $\\angle A$, $\\angle B$, $\\angle C$, and extend side $\\overline{BC}$ through $C$ to point $D$, forming exterior angle $\\angle ACD$.<br>" +
      "By the Angle-Sum Theorem: $\\angle A+\\angle B+\\angle C=180^{\\circ}$, so $\\angle A+\\angle B=180^{\\circ}-\\angle C$.<br>" +
      "Because $\\angle ACD$ and $\\angle C$ form a linear pair (they lie on straight line $BD$): $\\angle ACD+\\angle C=180^{\\circ}$, so $\\angle ACD=180^{\\circ}-\\angle C$.<br>" +
      "Both expressions equal $180^{\\circ}-\\angle C$, so $\\angle ACD=\\angle A+\\angle B$. $\\blacksquare$<br>" +
      "<b>Conclusion:</b> the exterior angle equals the sum of the two remote (non-adjacent) interior angles."],

    ["Example 6: Apply the Exterior Angle Theorem",
      "An exterior angle of a triangle measures $130^{\\circ}$. One remote interior angle is $55^{\\circ}$. Find the other remote interior angle and the interior angle adjacent to the exterior angle.",
      "By the Exterior Angle Theorem, the exterior angle equals the sum of the two remote interior angles:<br>" +
      "$130 = 55 + (\\text{other remote})$<br>" +
      "Other remote angle $=130-55=75^{\\circ}$.<br>" +
      "The adjacent interior angle is supplementary to the exterior angle (linear pair): $180-130=50^{\\circ}$.<br>" +
      "Check all three interior angles: $55+75+50=180$ ✓.<br>" +
      "<b>Answer:</b> Other remote angle $=75^{\\circ}$; adjacent interior angle $=50^{\\circ}$."],

    ["Example 7: Exterior angle with two unknowns",
      "An exterior angle of a triangle measures $4x$. The two remote interior angles measure $2x+10$ and $x+20$. Find $x$ and the exterior angle.",
      "Apply the Exterior Angle Theorem: exterior $=$ sum of remotes.<br>" +
      "$4x = (2x+10)+(x+20)$<br>" +
      "$4x = 3x+30$<br>" +
      "$x = 30$.<br>" +
      "Exterior angle $=4(30)=120^{\\circ}$. Check remotes: $2(30)+10=70$ and $30+20=50$; $70+50=120$ ✓.<br>" +
      "<b>Answer:</b> $x=30$; exterior angle $=120^{\\circ}$."],

    ["Example 8: Classify a coordinate triangle",
      "Triangle has vertices $A(0,0)$, $B(4,0)$, $C(0,3)$. Find all three side lengths and classify the triangle by both sides and angles.",
      fig(coordPts([{ x: 0, y: 0, label: "A" }, { x: 4, y: 0, label: "B" }, { x: 0, y: 3, label: "C" }], { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }), "Right angle appears at $A$, where the legs meet the axes.") +
      "Use the distance formula for each side:<br>" +
      "$AB=\\sqrt{(4-0)^{2}+(0-0)^{2}}=\\sqrt{16}=4$<br>" +
      "$AC=\\sqrt{(0-0)^{2}+(3-0)^{2}}=\\sqrt{9}=3$<br>" +
      "$BC=\\sqrt{(0-4)^{2}+(3-0)^{2}}=\\sqrt{16+9}=\\sqrt{25}=5$.<br>" +
      "By sides: $3$, $4$, $5$ are all different $\\Rightarrow$ scalene.<br>" +
      "By angles: test the converse of the Pythagorean Theorem on the longest side: $3^{2}+4^{2}=9+16=25=5^{2}$ ✓, so the angle at $A$ is right.<br>" +
      "<b>Answer:</b> Scalene right triangle."],

    ["Example 9: Why two obtuse angles is impossible",
      "Explain why a triangle cannot have two obtuse angles.",
      "Suppose, for contradiction, a triangle had two obtuse angles, each greater than $90^{\\circ}$.<br>" +
      "Their sum alone would already exceed $90^{\\circ}+90^{\\circ}=180^{\\circ}$.<br>" +
      "But the full angle sum of any triangle is exactly $180^{\\circ}$, and angle measures must be positive.<br>" +
      "Adding a third positive angle would push the total above $180^{\\circ}$, contradicting the Angle-Sum Theorem.<br>" +
      "<b>Conclusion:</b> a triangle can have at most one obtuse angle (and, by the same reasoning, at most one right angle)."],

    ["Example 10: Isosceles triangle with an exterior angle",
      "In isosceles $\\triangle ABC$ with $AB=AC$, the exterior angle at base vertex $B$ measures $130^{\\circ}$. Find $\\angle B$, $\\angle C$, and vertex angle $\\angle A$.",
      "Identify: $\\angle B$ and its exterior angle form a linear pair, so they are supplementary.<br>" +
      "$\\angle B = 180-130=50^{\\circ}$.<br>" +
      "Since $AB=AC$, the base angles $\\angle B$ and $\\angle C$ are congruent (isosceles base angles): $\\angle C=50^{\\circ}$.<br>" +
      "Use the Angle-Sum Theorem for the vertex angle: $\\angle A = 180-50-50=80^{\\circ}$.<br>" +
      "Check: $50+50+80=180$ ✓; all angles acute, so the triangle is acute isosceles.<br>" +
      "<b>Answer:</b> $\\angle B=50^{\\circ}$, $\\angle C=50^{\\circ}$, $\\angle A=80^{\\circ}$."],
  ],
  questions: [
    ["Problem 1: Classify by sides", "A triangle has sides $9$, $9$, $9$. Classify it by sides.", "Equilateral"],
    ["Problem 2: Classify by sides", "A triangle has sides $6$, $9$, $11$. Classify it by sides.", "Scalene"],
    ["Problem 3: Classify by angles", "A triangle has angles $100^{\\circ}$, $40^{\\circ}$, $40^{\\circ}$. Classify by angles.", "Obtuse"],
    ["Problem 4: Classify by angles", "A triangle has angles $90^{\\circ}$, $45^{\\circ}$, $45^{\\circ}$. Classify by angles.", "Right"],
    ["Problem 5: Angle sum", "A triangle has angles $65^{\\circ}$, $75^{\\circ}$, and $x$. Find $x$.", "$x = 40^{\\circ}$"],
    ["Problem 6: Ratio of angles", "The angles of a triangle are in ratio $1:2:3$. Find each angle and classify by angles.", "$30^{\\circ}, 60^{\\circ}, 90^{\\circ}$ — right triangle"],
    ["Problem 7: Algebra", "In $\\triangle ABC$, $\\angle A = 2x+5$, $\\angle B = 3x-1$, $\\angle C = 91^{\\circ}$. Find $x$, each angle, and classify by angles.", "$x=17$; angles $39^{\\circ}, 50^{\\circ}, 91^{\\circ}$ — obtuse triangle"],
    ["Problem 8: Exterior angle", "The two remote interior angles are $48^{\\circ}$ and $62^{\\circ}$. Find the exterior angle.", "$110^{\\circ}$"],
    ["Problem 9: Exterior angle", "An exterior angle is $125^{\\circ}$; one remote interior angle is $70^{\\circ}$. Find the other remote angle.", "$55^{\\circ}$"],
    ["Problem 10: Exterior algebra", "Exterior angle $=4x$; remote angles are $2x+10$ and $x+20$. Find $x$ and the exterior angle.", "$x=30$; exterior angle $=120^{\\circ}$"],
    ["Problem 11: Coordinate triangle", "Vertices $A(0,0)$, $B(6,0)$, $C(0,8)$. Find all three side lengths and classify by sides and angles.", "$6, 8, 10$; right scalene triangle"],
    ["Problem 12: Justify", "Explain why a triangle cannot have two right angles.", "Two $90^{\\circ}$ angles already total $180^{\\circ}$, leaving no positive measure for the third angle — contradicting the Angle-Sum Theorem"],
    ["Problem 13: Challenge — isosceles + exterior", "In isosceles $\\triangle ABC$ with $AB=AC$, the exterior angle at $B$ measures $150^{\\circ}$. Find $\\angle B$, $\\angle C$, and $\\angle A$, then classify by angles.", "$\\angle B=\\angle C=30^{\\circ}$, $\\angle A=120^{\\circ}$ — obtuse isosceles"],
    ["Problem 14: Challenge — coordinate classification", "Vertices $A(1,1)$, $B(5,1)$, $C(1,5)$. Find all side lengths (exact form) and fully classify the triangle by sides and angles.", "$AB=AC=4$, $BC=4\\sqrt{2}$; isosceles right triangle (right angle at $A$)"],
    ["Problem 15: Challenge — exterior word problem", "In $\\triangle ABC$, $\\angle A=\\angle B$ (isosceles), and the exterior angle at $C$ measures $100^{\\circ}$. Find $\\angle C$, then $\\angle A$ and $\\angle B$, and classify by angles.", "$\\angle C=80^{\\circ}$, $\\angle A=\\angle B=50^{\\circ}$ — acute isosceles"],
  ],
};
