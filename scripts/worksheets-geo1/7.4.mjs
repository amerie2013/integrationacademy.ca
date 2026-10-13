import { fig, trapezoid, kite } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "7.4",
  title: "Trapezoids and Kites",
  intro: "A <b>trapezoid</b> has exactly one pair of parallel sides, called the bases. Its <b>midsegment</b> (median) connects the midpoints of the two legs, runs parallel to both bases, and has length equal to the average of the two base lengths: $m=\\dfrac{b_1+b_2}{2}$. An <b>isosceles trapezoid</b> (congruent legs) has an extra pair of properties: both base angles at each base are congruent to each other, and the diagonals are congruent. A <b>kite</b> has two distinct pairs of consecutive congruent sides (not opposite, like a parallelogram). Its diagonals are always perpendicular; the diagonal connecting the vertices between the congruent sides is the axis of symmetry — it bisects the other diagonal <i>and</i> bisects the two vertex angles it passes through, while the two angles between the unequal sides are congruent to each other. This worksheet uses all of these relationships together.",
  examples: [
    ["Example 1: Midsegment from two bases",
      "A trapezoid has bases $10$ and $16$. Find the length of the midsegment.",
      fig(trapezoid(), "The midsegment joins the midpoints of the legs and is parallel to both bases.") +
      "Identify the two bases: $b_1=10$, $b_2=16$.<br>" +
      "The midsegment is the average of the two bases:<br>" +
      "$m=\\dfrac{b_1+b_2}{2}=\\dfrac{10+16}{2}=\\dfrac{26}{2}=13$.<br>" +
      "<b>Answer:</b> $13$."],

    ["Example 2: Find a missing base",
      "A trapezoid has midsegment $14$ and one base $9$. Find the other base.",
      "Identify the known midsegment and base: $m=14$, $b_1=9$, and set up the midsegment equation with $b_2=b$ unknown.<br>" +
      "Solve for the missing base:<br>" +
      "$\\dfrac{9+b}{2}=14$<br>" +
      "$9+b=28$<br>" +
      "$b=19$.<br>" +
      "<b>Answer:</b> $19$."],

    ["Example 3: Isosceles trapezoid base angles",
      "An isosceles trapezoid has base angles of $70^\\circ$ at its longer base. Find the two angles at the shorter base.",
      "In an isosceles trapezoid, both base angles at the same base are congruent, and each pair of angles sharing a leg is supplementary (co-interior angles between the parallel bases).<br>" +
      "Angle at the shorter base $=180^\\circ-70^\\circ=110^\\circ$.<br>" +
      "By symmetry, both angles at the shorter base equal $110^\\circ$.<br>" +
      "<b>Answer:</b> $110^\\circ$ and $110^\\circ$."],

    ["Example 4: Isosceles trapezoid diagonals are congruent",
      "In isosceles trapezoid $ABCD$, diagonal $AC=5x-2$ and diagonal $BD=3x+8$. Find $x$ and the length of each diagonal.",
      "Diagonals of an isosceles trapezoid are congruent: $AC=BD$.<br>" +
      "$5x-2=3x+8$<br>" +
      "$2x=10 \\Rightarrow x=5$.<br>" +
      "$AC=5(5)-2=23$.<br>" +
      "<b>Answer:</b> $x=5$; each diagonal $=23$."],

    ["Example 5: Kite angle sum",
      "In kite $ABCD$ (with $AB=AD$ and $CB=CD$), the two congruent non-vertex angles are $m\\angle B=m\\angle D=100^\\circ$, and $m\\angle A=40^\\circ$. Find $m\\angle C$.",
      fig(kite(), "$AB=AD$ and $CB=CD$; the axis $\\overline{AC}$ splits the kite into two congruent triangles.") +
      "All four angles of any quadrilateral sum to $360^\\circ$:<br>" +
      "$40+100+100+m\\angle C=360$<br>" +
      "$240+m\\angle C=360$<br>" +
      "$m\\angle C=120^\\circ$.<br>" +
      "<b>Answer:</b> $120^\\circ$."],

    ["Example 6: Kite area from diagonals",
      "A kite has diagonals $12$ and $16$. Find its area.",
      "A kite's diagonals are perpendicular, so its area is half the product of the diagonals — just like a rhombus:<br>" +
      "$A=\\dfrac{1}{2}(12)(16)=\\dfrac{1}{2}(192)=96$.<br>" +
      "<b>Answer:</b> $96$."],

    ["Example 7: Isosceles trapezoid legs",
      "An isosceles trapezoid has legs $3x+2$ and $x+10$. Find $x$ and the length of each leg.",
      "The legs of an isosceles trapezoid are congruent:<br>" +
      "$3x+2=x+10$<br>" +
      "$2x=8 \\Rightarrow x=4$.<br>" +
      "Each leg $=3(4)+2=14$.<br>" +
      "<b>Answer:</b> $x=4$; each leg $=14$."],

    ["Example 8: Kite perimeter",
      "Kite $ABCD$ has $AB=AD=8$ and $CB=CD=5$. Find the perimeter.",
      "Identify the two pairs of consecutive congruent sides: $AB=AD=8$ and $CB=CD=5$.<br>" +
      "Add all four sides:<br>" +
      "Perimeter $=AB+BC+CD+DA=8+5+5+8=26$.<br>" +
      "<b>Answer:</b> $26$."],

    ["Example 9: Trapezoid consecutive angles along a leg",
      "In trapezoid $ABCD$, $\\overline{AB}\\parallel\\overline{DC}$, and $m\\angle A=95^\\circ$. Find $m\\angle D$ (the angle sharing leg $\\overline{AD}$ with $\\angle A$).",
      "$\\angle A$ and $\\angle D$ are co-interior (same-side interior) angles formed by transversal $\\overline{AD}$ across the parallel bases, so they are supplementary:<br>" +
      "$m\\angle D=180^\\circ-95^\\circ=85^\\circ$.<br>" +
      "<b>Answer:</b> $85^\\circ$."],

    ["Example 10: Application — window brace",
      "A trapezoidal window frame has a horizontal brace connecting the midpoints of its two slanted sides (legs). The bottom base is $34$ in, and the brace measures $24$ in. Find the length of the top base.",
      "The brace is the midsegment of the trapezoid, so it equals the average of the two bases:<br>" +
      "$\\dfrac{34+t}{2}=24$<br>" +
      "$34+t=48$<br>" +
      "$t=14$.<br>" +
      "<b>Answer:</b> the top base is $14$ in."],

    ["Example 11: Kite axis bisects the vertex angle",
      "In kite $ABCD$ with $AB=AD$ and $CB=CD$, diagonal $\\overline{AC}$ is the axis of symmetry. If $m\\angle A=68^\\circ$, find $m\\angle BAC$.",
      "The axis of symmetry $\\overline{AC}$ bisects the vertex angles it passes through (here, $\\angle A$ and $\\angle C$), splitting each into two congruent parts:<br>" +
      "$m\\angle BAC=\\dfrac{68^\\circ}{2}=34^\\circ$.<br>" +
      "<b>Answer:</b> $34^\\circ$."],
  ],
  questions: [
    ["Problem 1: Midsegment", "Bases $12$ and $20$. Midsegment?", "$16$"],
    ["Problem 2: Base", "Midsegment $11$, base $8$. Other base?", "$14$"],
    ["Problem 3: Isosceles", "Base angles $65^\\circ$, $65^\\circ$. Find the other two base angles.", "$115^\\circ$, $115^\\circ$"],
    ["Problem 4: Kite area", "Diagonals $10$ and $14$. Area?", "$70$"],
    ["Problem 5: Midsegment", "Bases $5$ and $17$. Midsegment?", "$11$"],
    ["Problem 6: Consecutive", "$\\overline{AB}\\parallel\\overline{DC}$; $m\\angle B=100^\\circ$. Find $m\\angle C$ (shares leg $\\overline{BC}$).", "$80^\\circ$"],
    ["Problem 7: Kite perimeter", "Sides $9$, $9$, $6$, $6$. Perimeter?", "$30$"],
    ["Problem 8: Legs", "Isosceles trapezoid; legs $4x-3$ and $2x+7$. Find $x$ and each leg.", "$x=5$; legs $=17$"],
    ["Problem 9: Base", "Midsegment $18$, base $22$. Other base?", "$14$"],
    ["Problem 10: Kite property", "Diagonals of a kite are always…", "Perpendicular"],
    ["Problem 11: Isosceles angles", "One base angle is $78^\\circ$. Find the other angle at the <i>same</i> base.", "$78^\\circ$ (base angles at the same base are congruent)"],
    ["Problem 12: Kite area", "Diagonals $9$ and $20$. Area?", "$90$"],
    ["Problem 13: Midsegment formula", "Bases $a$ and $b$. Write the midsegment formula.", "$m=\\dfrac{a+b}{2}$"],
    ["Problem 14: Challenge", "Isosceles trapezoid: diagonal $AC=4x-6$ and diagonal $BD=2x+10$. Find $x$ and the length of each diagonal.", "$x=8$; each diagonal $=26$"],
    ["Problem 15: Challenge", "Kite $ABCD$ has $m\\angle B=m\\angle D=110^\\circ$ (the non-vertex angles). If $m\\angle A=3x$ and $m\\angle C=x$, find $x$ and both vertex angles.", "$x=35^\\circ$; $m\\angle A=105^\\circ$, $m\\angle C=35^\\circ$"],
  ],
};
