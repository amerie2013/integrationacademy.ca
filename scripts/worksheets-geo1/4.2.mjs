import { fig, triABC, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "4.2",
  title: "Isosceles & Equilateral Triangle Theorems",
  intro: "The <b>Base Angles Theorem</b> states that if two sides of a triangle are congruent, the angles opposite those sides (the base angles) are congruent. Its <b>converse</b> is also true: if two angles of a triangle are congruent, the sides opposite them are congruent. An equilateral triangle is a special case where all three sides are congruent; applying the Base Angles Theorem to each pair of equal sides shows all three angles must also be congruent, and since they sum to $180^{\\circ}$, each equals exactly $60^{\\circ}$ (the Equilateral Triangle Corollary). Conversely, an equiangular triangle must be equilateral. This worksheet applies these theorems with numeric problems, algebra, coordinates, and a short proof.",
  examples: [
    ["Example 1: Base angles from vertex angle",
      "Isosceles $\\triangle ABC$ has $AB=AC$ and vertex angle $\\angle A = 40^{\\circ}$. Find each base angle.",
      fig(triABC({ marks: true }), "$AB=AC$ (tick marks), so $\\angle B \\cong \\angle C$ by the Base Angles Theorem.") +
      "Identify: $\\angle B$ and $\\angle C$ are the base angles (opposite the congruent legs $AB$ and $AC$), so $\\angle B=\\angle C$.<br>" +
      "Apply the Angle-Sum Theorem: $\\angle A+\\angle B+\\angle C=180$<br>" +
      "$40+2\\angle B=180$<br>" +
      "$2\\angle B=140 \\Rightarrow \\angle B=70^{\\circ}$.<br>" +
      "<b>Answer:</b> $\\angle B=\\angle C=70^{\\circ}$."],

    ["Example 2: Vertex angle from base angles",
      "Isosceles $\\triangle ABC$ has base angles $55^{\\circ}$ each. Find the vertex angle.",
      "Identify: the two given $55^{\\circ}$ angles are the base angles; the vertex angle is the remaining one.<br>" +
      "Apply the Angle-Sum Theorem: vertex $=180-55-55$<br>" +
      "$=180-110=70^{\\circ}$.<br>" +
      "Check: $55+55+70=180$ ✓.<br>" +
      "<b>Answer:</b> Vertex angle $=70^{\\circ}$."],

    ["Example 3: Converse of the Base Angles Theorem",
      "In $\\triangle ABC$, $\\angle B \\cong \\angle C$. What can you conclude about $\\overline{AB}$ and $\\overline{AC}$? Justify.",
      "Identify: $\\angle B$ and $\\angle C$ are congruent angles.<br>" +
      "The sides opposite these angles are $\\overline{AC}$ (opposite $\\angle B$) and $\\overline{AB}$ (opposite $\\angle C$).<br>" +
      "By the <b>Converse of the Base Angles Theorem</b>, congruent angles imply the sides opposite them are congruent.<br>" +
      "<b>Answer:</b> $\\overline{AB}\\cong\\overline{AC}$ (so $\\triangle ABC$ is isosceles with vertex $A$)."],

    ["Example 4: Prove the Equilateral Triangle Corollary",
      "Prove: if a triangle is equilateral, each of its angles measures $60^{\\circ}$.",
      "Let $\\triangle ABC$ have $AB=BC=CA$ (equilateral, given).<br>" +
      "Since $AB=AC$, the Base Angles Theorem gives $\\angle B \\cong \\angle C$.<br>" +
      "Since $BA=BC$, the Base Angles Theorem gives $\\angle A \\cong \\angle C$.<br>" +
      "Combining, $\\angle A = \\angle B = \\angle C$. Let each equal $x$.<br>" +
      "By the Angle-Sum Theorem: $x+x+x=180 \\Rightarrow 3x=180 \\Rightarrow x=60$. $\\blacksquare$<br>" +
      "<b>Conclusion:</b> every angle of an equilateral triangle measures exactly $60^{\\circ}$."],

    ["Example 5: Algebra — congruent base angles",
      "Isosceles triangle has base angles $2x+10$ and $3x-5$. Find $x$, the base angles, and the vertex angle.",
      "Identify: base angles are congruent, so set the expressions equal.<br>" +
      "$2x+10=3x-5$<br>" +
      "$15=x$, so $x=15$.<br>" +
      "Each base angle $=2(15)+10=40^{\\circ}$ (check other expression: $3(15)-5=40$ ✓).<br>" +
      "Vertex angle $=180-40-40=100^{\\circ}$.<br>" +
      "<b>Answer:</b> $x=15$; base angles $40^{\\circ}$ each; vertex angle $100^{\\circ}$."],

    ["Example 6: Algebra — vertex and base together",
      "Isosceles triangle has vertex angle $3x$ and base angles $x+30$ each. Find $x$ and all three angles.",
      "Set up the angle-sum equation using both base angles and the vertex angle:<br>" +
      "$3x+(x+30)+(x+30)=180$<br>" +
      "$5x+60=180$<br>" +
      "$5x=120 \\Rightarrow x=24$.<br>" +
      "Vertex $=3(24)=72^{\\circ}$; base angles $=24+30=54^{\\circ}$ each.<br>" +
      "Check: $72+54+54=180$ ✓.<br>" +
      "<b>Answer:</b> $x=24$; vertex $=72^{\\circ}$; base angles $=54^{\\circ}$ each."],

    ["Example 7: Equilateral side algebra and perimeter",
      "An equilateral triangle has two sides represented by $4x-3$ and $2x+7$. Find $x$, the side length, and the perimeter.",
      "Since the triangle is equilateral, all sides are equal, so set the two expressions equal:<br>" +
      "$4x-3=2x+7$<br>" +
      "$2x=10 \\Rightarrow x=5$.<br>" +
      "Side length $=4(5)-3=17$ (check: $2(5)+7=17$ ✓).<br>" +
      "Perimeter $=3\\times17=51$.<br>" +
      "<b>Answer:</b> $x=5$; each side $=17$; perimeter $=51$."],

    ["Example 8: Roof truss word problem",
      "A gable roof truss is shaped like an isosceles triangle. Each base angle measures $x$, and the peak (vertex) angle measures $40^{\\circ}$ less than twice a base angle. Find all three angles.",
      "Translate: vertex angle $=2x-40$.<br>" +
      "Apply the Angle-Sum Theorem: $x+x+(2x-40)=180$<br>" +
      "$4x-40=180$<br>" +
      "$4x=220 \\Rightarrow x=55$.<br>" +
      "Base angles $=55^{\\circ}$ each; vertex $=2(55)-40=70^{\\circ}$.<br>" +
      "Check: $55+55+70=180$ ✓.<br>" +
      "<b>Answer:</b> Base angles $55^{\\circ}$ each; vertex angle $70^{\\circ}$."],

    ["Example 9: Coordinate isosceles triangle",
      "Triangle has vertices $A(0,5)$, $B(-4,0)$, $C(4,0)$. Show it is isosceles, and state which angle is the vertex angle.",
      fig(coordPts([{ x: 0, y: 5, label: "A" }, { x: -4, y: 0, label: "B" }, { x: 4, y: 0, label: "C" }], { xmin: -6, xmax: 6, ymin: -2, ymax: 6 }), "By symmetry about the $y$-axis, $AB=AC$.") +
      "Use the distance formula for the two legs:<br>" +
      "$AB=\\sqrt{(0-(-4))^{2}+(5-0)^{2}}=\\sqrt{16+25}=\\sqrt{41}$<br>" +
      "$AC=\\sqrt{(0-4)^{2}+(5-0)^{2}}=\\sqrt{16+25}=\\sqrt{41}$.<br>" +
      "Since $AB=AC=\\sqrt{41}$, the triangle is isosceles with legs $\\overline{AB}$ and $\\overline{AC}$.<br>" +
      "<b>Answer:</b> Vertex angle is $\\angle A$ (between the congruent legs); $\\angle B$ and $\\angle C$ are the base angles."],

    ["Example 10: Vertex is a multiple of the base angle",
      "In isosceles $\\triangle ABC$, the vertex angle is $4$ times each base angle. Find all three angles and classify by angles.",
      "Let each base angle $=x$; then the vertex angle $=4x$.<br>" +
      "Apply the Angle-Sum Theorem: $x+x+4x=180$<br>" +
      "$6x=180 \\Rightarrow x=30$.<br>" +
      "Base angles $=30^{\\circ}$ each; vertex $=4(30)=120^{\\circ}$.<br>" +
      "Check: $30+30+120=180$ ✓. Since the vertex angle exceeds $90^{\\circ}$, the triangle is obtuse.<br>" +
      "<b>Answer:</b> Base angles $30^{\\circ}$ each; vertex $120^{\\circ}$ — obtuse isosceles triangle."],
  ],
  questions: [
    ["Problem 1: Base angles", "Isosceles triangle, vertex angle $50^{\\circ}$. Find each base angle.", "$65^{\\circ}$"],
    ["Problem 2: Vertex angle", "Isosceles triangle, base angles $62^{\\circ}$ each. Find the vertex angle.", "$56^{\\circ}$"],
    ["Problem 3: Converse", "In $\\triangle ABC$, $\\angle B \\cong \\angle C$. What can you conclude about $\\overline{AB}$ and $\\overline{AC}$?", "$\\overline{AB}\\cong\\overline{AC}$"],
    ["Problem 4: Equilateral angle", "Find each angle of an equilateral triangle.", "$60^{\\circ}$"],
    ["Problem 5: Algebra — base angles", "Base angles are $4x$ and $3x+12$. Find $x$ and each base angle.", "$x=12$; base angles $48^{\\circ}$ each"],
    ["Problem 6: Algebra — vertex and base", "Vertex angle is $x$, base angles are $2x$ each. Find $x$ and all three angles.", "$x=36$; angles $36^{\\circ}, 72^{\\circ}, 72^{\\circ}$"],
    ["Problem 7: Perimeter", "Equilateral triangle has side length $9$. Find the perimeter.", "$27$"],
    ["Problem 8: Identify base angles", "$AB=AC$ in $\\triangle ABC$. Which two angles are the base angles?", "$\\angle B$ and $\\angle C$"],
    ["Problem 9: Base angle from vertex", "Isosceles triangle, vertex angle $110^{\\circ}$. Find each base angle.", "$35^{\\circ}$"],
    ["Problem 10: Equiangular", "An equiangular triangle is also what type of triangle by sides?", "Equilateral"],
    ["Problem 11: Algebra — base angles", "Base angles are $5x-4$ and $3x+10$. Find $x$, each base angle, and the vertex angle.", "$x=7$; base angles $31^{\\circ}$ each; vertex $118^{\\circ}$"],
    ["Problem 12: Vertex from base", "Isosceles triangle, base angles $48^{\\circ}$ each. Find the vertex angle.", "$84^{\\circ}$"],
    ["Problem 13: Challenge — equilateral algebra", "An equilateral triangle has two sides represented by $4x-3$ and $2x+7$. Find $x$, the side length, and the perimeter.", "$x=5$; side $=17$; perimeter $=51$"],
    ["Problem 14: Challenge — coordinate isosceles", "Vertices $A(0,6)$, $B(-8,0)$, $C(8,0)$. Find all three side lengths, identify the vertex angle and base angles, and find the perimeter.", "$AB=AC=10$, $BC=16$; vertex angle at $A$, base angles at $B$ and $C$; perimeter $=36$"],
    ["Problem 15: Challenge — truss word problem", "An isosceles roof truss has each base angle $=x$ and vertex angle $=3x-10$. Find $x$, all three angles, and classify by angles.", "$x=38$; base angles $38^{\\circ}$ each, vertex $104^{\\circ}$ — obtuse isosceles"],
  ],
};
