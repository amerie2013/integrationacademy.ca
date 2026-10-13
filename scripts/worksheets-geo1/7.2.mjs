import { fig, parallelogram, parallelogramDiag } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "7.2",
  title: "Properties of Parallelograms",
  intro: "A parallelogram is a quadrilateral with both pairs of opposite sides parallel. From that one fact, four powerful properties follow: opposite sides are congruent, opposite angles are congruent, consecutive angles are supplementary ($180^\\circ$ total), and the diagonals bisect each other. These properties come from parallel lines cut by a transversal (each side of a parallelogram acts as a transversal across the opposite pair of parallel sides) and from congruent triangles formed by a diagonal. This worksheet uses all four properties together — often two variables in one problem — and asks you to justify, not just compute.",
  examples: [
    ["Example 1: Why consecutive angles are supplementary",
      "In parallelogram $ABCD$, $\\overline{AB}\\parallel\\overline{DC}$, and $\\overline{AD}$ is a transversal crossing both. Explain why $m\\angle A + m\\angle D = 180^\\circ$.",
      fig(parallelogram(), "$\\overline{AB}\\parallel\\overline{DC}$; side $\\overline{AD}$ acts as a transversal between them.") +
      "Since $\\overline{AB}\\parallel\\overline{DC}$, the transversal $\\overline{AD}$ creates a pair of co-interior (same-side interior) angles at vertices $A$ and $D$.<br>" +
      "Co-interior angles formed by a transversal across parallel lines are always supplementary, so $m\\angle A+m\\angle D=180^\\circ$.<br>" +
      "The same reasoning applies to every pair of consecutive vertices in a parallelogram, since each side is parallel to the side across from it. This is why consecutive angles in <i>any</i> parallelogram are supplementary."],

    ["Example 2: Find all four angles",
      "In parallelogram $ABCD$, $m\\angle A = 110^\\circ$. Find $m\\angle B$, $m\\angle C$, and $m\\angle D$.",
      fig(parallelogram(), "Opposite angles $A,C$ are congruent; consecutive angles like $A,B$ are supplementary.") +
      "Opposite angles are congruent: $m\\angle C = m\\angle A = 110^\\circ$.<br>" +
      "Consecutive angles are supplementary: $m\\angle B = 180^\\circ - 110^\\circ = 70^\\circ$.<br>" +
      "$m\\angle D = m\\angle B = 70^\\circ$ (opposite angles).<br>" +
      "<b>Check:</b> $110+70+110+70=360^\\circ$, the quadrilateral angle sum. ✓<br>" +
      "<b>Answer:</b> $\\angle B=70^\\circ$, $\\angle C=110^\\circ$, $\\angle D=70^\\circ$."],

    ["Example 3: Diagonals bisecting each other",
      "Diagonals of parallelogram $ABCD$ intersect at $O$. If $AC=20$ and $BO=8$, find $AO$ and the full length of $BD$.",
      fig(parallelogramDiag(), "Point $O$ is the midpoint of both diagonals.") +
      "Diagonals of a parallelogram bisect each other, so $O$ is the midpoint of $\\overline{AC}$: $AO=\\dfrac{AC}{2}=\\dfrac{20}{2}=10$.<br>" +
      "$O$ is also the midpoint of $\\overline{BD}$, so $BD=2\\cdot BO=2(8)=16$.<br>" +
      "<b>Answer:</b> $AO=10$; $BD=16$."],

    ["Example 4: Solve for $x$ using consecutive angles",
      "In parallelogram $ABCD$, $\\angle A=(3x+10)^\\circ$ and $\\angle B=(2x+20)^\\circ$ are consecutive. Find $x$ and both angles.",
      "Consecutive angles are supplementary:<br>" +
      "$(3x+10)+(2x+20)=180$<br>" +
      "$5x+30=180$<br>" +
      "$5x=150 \\Rightarrow x=30$.<br>" +
      "$\\angle A=3(30)+10=100^\\circ$; $\\angle B=2(30)+20=80^\\circ$.<br>" +
      "<b>Check:</b> $100+80=180^\\circ$. ✓"],

    ["Example 5: Solve for $x$ using diagonal segments",
      "In parallelogram $ABCD$, diagonals meet at $O$ with $AO=3x-1$ and $OC=2x+4$. Find $x$ and the full length of diagonal $AC$.",
      "Since diagonals bisect each other, $AO=OC$:<br>" +
      "$3x-1=2x+4 \\Rightarrow x=5$.<br>" +
      "$AO=3(5)-1=14$, so $AC=2(14)=28$.<br>" +
      "<b>Answer:</b> $x=5$; $AC=28$."],

    ["Example 6: Two-step opposite-angle problem",
      "In parallelogram $ABCD$, $\\angle A=4x$ and $\\angle C=3x+20$. Find $x$, then find $\\angle A$ and the consecutive angle $\\angle B$.",
      "Opposite angles are congruent: $4x=3x+20 \\Rightarrow x=20$.<br>" +
      "$\\angle A=4(20)=80^\\circ$.<br>" +
      "$\\angle B$ is consecutive to $\\angle A$, so $\\angle B=180^\\circ-80^\\circ=100^\\circ$.<br>" +
      "<b>Answer:</b> $x=20$; $\\angle A=80^\\circ$; $\\angle B=100^\\circ$."],

    ["Example 7: Solve for a side, then find the perimeter",
      "In parallelogram $ABCD$, $AB=5y-2$ and $CD=3y+8$. If $AD=15$, find $y$, $AB$, and the perimeter of $ABCD$.",
      "Opposite sides are congruent: $5y-2=3y+8 \\Rightarrow 2y=10 \\Rightarrow y=5$.<br>" +
      "$AB=5(5)-2=23$, and $BC=AD=15$ (opposite sides).<br>" +
      "Perimeter $=2(AB+AD)=2(23+15)=2(38)=76$.<br>" +
      "<b>Answer:</b> $y=5$; $AB=23$; perimeter $=76$."],

    ["Example 8: Can these be consecutive angles?",
      "A student claims a parallelogram can have consecutive angles of $95^\\circ$ and $90^\\circ$. Is this possible?",
      "Consecutive angles of a parallelogram must be supplementary, summing to exactly $180^\\circ$.<br>" +
      "$95^\\circ+90^\\circ=185^\\circ \\neq 180^\\circ$.<br>" +
      "<b>Answer:</b> No — the angles don't satisfy the supplementary requirement, so no such parallelogram exists."],

    ["Example 9: Capstone — two unknowns, three properties",
      "In parallelogram $WXYZ$, $m\\angle W=(5x-15)^\\circ$ and $m\\angle X=(3x+35)^\\circ$ are consecutive. The diagonals meet at point $P$ with $WP=2y+4$ and $PY=5y-11$. Find $x$, $y$, all four angles, and the length of diagonal $WY$.",
      "<b>Angles:</b> consecutive angles are supplementary: $(5x-15)+(3x+35)=180 \\Rightarrow 8x+20=180 \\Rightarrow 8x=160 \\Rightarrow x=20$.<br>" +
      "$m\\angle W=5(20)-15=85^\\circ$; $m\\angle X=3(20)+35=95^\\circ$. Then $m\\angle Y=m\\angle W=85^\\circ$ and $m\\angle Z=m\\angle X=95^\\circ$ (opposite angles).<br>" +
      "<b>Diagonal:</b> $P$ bisects $\\overline{WY}$, so $WP=PY$: $2y+4=5y-11 \\Rightarrow 15=3y \\Rightarrow y=5$.<br>" +
      "$WP=2(5)+4=14$, so $WY=2(14)=28$.<br>" +
      "<b>Answer:</b> $x=20$, $y=5$; angles $85^\\circ,95^\\circ,85^\\circ,95^\\circ$; $WY=28$."],

    ["Example 10: Application — crate lid brace",
      "A rectangular-shipping-crate lid is actually a slightly skewed parallelogram panel $ABCD$ with $AB=42$ cm. A diagonal support brace along $\\overline{AC}$ measures $90$ cm and crosses the other diagonal at $O$, where $BO=37$ cm. Find $CD$ and the full length of diagonal $BD$.",
      "Opposite sides are congruent, so $CD=AB=42$ cm.<br>" +
      "Diagonals bisect each other, so $O$ is the midpoint of $\\overline{BD}$: $BD=2\\cdot BO=2(37)=74$ cm.<br>" +
      "(Note: $AC=90$ cm was extra information confirming the diagonal length, not needed to find $CD$ or $BD$.)<br>" +
      "<b>Answer:</b> $CD=42$ cm; $BD=74$ cm."],
  ],
  questions: [
    ["Problem 1: Sides", "Parallelogram: $AB=15$, $AD=9$. Find $CD$ and $BC$.", "$CD=15$; $BC=9$"],
    ["Problem 2: Angles", "$\\angle A=125^\\circ$. Find $\\angle B$ and $\\angle C$.", "$\\angle B=55^\\circ$; $\\angle C=125^\\circ$"],
    ["Problem 3: Diagonal", "Diagonals meet at $O$; $BD=18$. Find $BO$.", "$9$"],
    ["Problem 4: Solve", "$\\angle A=2x+10$, $\\angle C=3x-20$. Find $x$.", "$x=30$"],
    ["Problem 5: Consecutive", "$\\angle A=4x$, $\\angle B=5x+9$. Find $x$.", "$x=19$"],
    ["Problem 6: Sides", "$AB=4x+1$, $CD=3x+6$. Find $AB$.", "$21$ ($x=5$)"],
    ["Problem 7: Diagonal", "$AO=x+3$, $OC=2x-1$. Find $AC$.", "$14$ ($x=4$)"],
    ["Problem 8: Angle", "$\\angle D=70^\\circ$. Find $\\angle A$.", "$110^\\circ$"],
    ["Problem 9: Property", "Do diagonals of a parallelogram always bisect each other?", "Yes"],
    ["Problem 10: Solve", "$AD=7x-4$, $BC=5x+8$. Find $AD$.", "$38$ ($x=6$)"],
    ["Problem 11: Angles", "$\\angle A=100^\\circ$. Find consecutive angle $\\angle D$.", "$80^\\circ$"],
    ["Problem 12: Diagonal", "$AO=6$. Find $AC$.", "$12$"],
    ["Problem 13: Consecutive", "$\\angle B=3x+15$, $\\angle C=2x+25$. Find $\\angle B$ (note $\\angle B,\\angle C$ are consecutive).", "$\\angle B=111^\\circ$ ($x=32$)"],
    ["Problem 14: Challenge", "In parallelogram $ABCD$, $m\\angle A=(5x-15)^\\circ$ and $m\\angle B=(3x+35)^\\circ$. Diagonals meet at $O$ with $AO=2y+4$ and $OC=5y-11$. Find $x$, $y$, $m\\angle A$, and $AC$.", "$x=20$, $y=5$; $m\\angle A=85^\\circ$; $AC=28$"],
    ["Problem 15: Challenge", "A parallelogram has perimeter $100$, and one side is $8$ more than twice the other. Find all four side lengths.", "$14, 36, 14, 36$"],
  ],
};
