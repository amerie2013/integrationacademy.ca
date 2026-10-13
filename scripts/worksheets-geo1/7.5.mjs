import { fig, coordQuad } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "7.5",
  title: "Coordinate Proofs for Quadrilaterals",
  intro: "On the coordinate plane, three algebraic tools let you prove exactly what kind of quadrilateral you have — no protractor needed. <b>Slope</b> ($m=\\dfrac{y_2-y_1}{x_2-x_1}$) tests parallel sides (equal slopes) and perpendicular sides (slopes multiply to $-1$). <b>Distance</b> ($d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$) tests congruent sides or diagonals. <b>Midpoint</b> tests whether diagonals bisect each other. Chain these together to climb the hierarchy: both pairs of opposite sides parallel $\\Rightarrow$ parallelogram; add perpendicular adjacent sides (or congruent diagonals) $\\Rightarrow$ rectangle; add congruent sides (or perpendicular diagonals) $\\Rightarrow$ rhombus; both $\\Rightarrow$ square. Only one pair of parallel sides $\\Rightarrow$ trapezoid. Two distinct pairs of consecutive congruent sides (with perpendicular diagonals but no parallel sides) $\\Rightarrow$ kite. This worksheet uses full coordinates and asks you to justify the most specific classification possible.",
  examples: [
    ["Example 1: Prove a parallelogram using slope",
      "Vertices $A(0,0)$, $B(4,1)$, $C(5,4)$, $D(1,3)$. Show that $ABCD$ is a parallelogram.",
      fig(coordQuad([{ x: 0, y: 0, label: "A" }, { x: 4, y: 1, label: "B" }, { x: 5, y: 4, label: "C" }, { x: 1, y: 3, label: "D" }]), "Opposite sides have equal slope, so $\\overline{AB}\\parallel\\overline{DC}$ and $\\overline{AD}\\parallel\\overline{BC}$.") +
      "Slope of $\\overline{AB}$: $\\dfrac{1-0}{4-0}=\\dfrac{1}{4}$. Slope of $\\overline{DC}$: $\\dfrac{4-3}{5-1}=\\dfrac{1}{4}$. Equal $\\Rightarrow \\overline{AB}\\parallel\\overline{DC}$.<br>" +
      "Slope of $\\overline{AD}$: $\\dfrac{3-0}{1-0}=3$. Slope of $\\overline{BC}$: $\\dfrac{4-1}{5-4}=3$. Equal $\\Rightarrow \\overline{AD}\\parallel\\overline{BC}$.<br>" +
      "Both pairs of opposite sides are parallel, so $ABCD$ is a <b>parallelogram</b>."],

    ["Example 2: Upgrade to a rectangle",
      "In parallelogram $ABCD$, adjacent sides have slopes $2$ and $-\\dfrac{1}{2}$. Show that $ABCD$ must be a rectangle.",
      "Two lines are perpendicular exactly when their slopes multiply to $-1$:<br>" +
      "$2\\times\\left(-\\dfrac{1}{2}\\right)=-1$.<br>" +
      "So the adjacent sides meet at a right angle. Since $ABCD$ is already a parallelogram, one right angle forces all four angles to be right angles (opposite angles congruent, consecutive angles supplementary).<br>" +
      "<b>Answer:</b> $ABCD$ is a <b>rectangle</b>."],

    ["Example 3: Prove a rhombus using distance",
      "Vertices $A(0,0)$, $B(3,4)$, $C(8,4)$, $D(5,0)$. Show that $ABCD$ is a rhombus.",
      fig(coordQuad([{ x: 0, y: 0, label: "A" }, { x: 3, y: 4, label: "B" }, { x: 8, y: 4, label: "C" }, { x: 5, y: 0, label: "D" }]), "All four sides have length $5$.") +
      "$AB=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.<br>" +
      "$BC=\\sqrt{(8-3)^2+(4-4)^2}=\\sqrt{25}=5$.<br>" +
      "$CD=\\sqrt{(5-8)^2+(0-4)^2}=\\sqrt{9+16}=5$.<br>" +
      "$DA=\\sqrt{(0-5)^2+(0-0)^2}=\\sqrt{25}=5$.<br>" +
      "All four sides equal $5$, so $ABCD$ is a <b>rhombus</b>. (It is also a parallelogram, since $\\overline{AB}$ and $\\overline{DC}$ are both the vector $(3,4)$.)"],

    ["Example 4: Verify a square using slope and distance together",
      "Vertices $A(0,0)$, $B(4,0)$, $C(4,4)$, $D(0,4)$. Verify that $ABCD$ is a square.",
      "<b>Sides equal?</b> $AB=4$, $BC=4$, $CD=4$, $DA=4$ — all congruent.<br>" +
      "<b>Right angles?</b> Slope of $\\overline{AB}$ is $0$ (horizontal); slope of $\\overline{BC}$ is undefined (vertical). A horizontal side and a vertical side are always perpendicular, so $\\angle B=90^\\circ$. The same reasoning applies at every vertex.<br>" +
      "Four congruent sides and four right angles $\\Rightarrow$ <b>square</b>."],

    ["Example 5: Prove a trapezoid — only one pair parallel",
      "Vertices $A(0,0)$, $B(6,0)$, $C(4,3)$, $D(1,3)$. Classify $ABCD$.",
      "Slope of $\\overline{AB}$: $\\dfrac{0-0}{6-0}=0$. Slope of $\\overline{DC}$: $\\dfrac{3-3}{4-1}=0$. Equal $\\Rightarrow \\overline{AB}\\parallel\\overline{DC}$.<br>" +
      "Slope of $\\overline{AD}$: $\\dfrac{3-0}{1-0}=3$. Slope of $\\overline{BC}$: $\\dfrac{3-0}{4-6}=-\\dfrac{3}{2}$. Not equal $\\Rightarrow$ $\\overline{AD}$ and $\\overline{BC}$ are <i>not</i> parallel.<br>" +
      "Exactly one pair of opposite sides is parallel, so $ABCD$ is a <b>trapezoid</b> (with bases $\\overline{AB}$ and $\\overline{DC}$)."],

    ["Example 6: Square from diagonals alone",
      "A quadrilateral has diagonals from $(0,0)$ to $(6,6)$ and from $(0,6)$ to $(6,0)$. Classify the quadrilateral.",
      "Diagonal $1$ length: $\\sqrt{6^2+6^2}=6\\sqrt{2}$. Diagonal $2$ length: $\\sqrt{6^2+6^2}=6\\sqrt{2}$ — congruent diagonals.<br>" +
      "Slope of diagonal $1$: $\\dfrac{6-0}{6-0}=1$. Slope of diagonal $2$: $\\dfrac{0-6}{6-0}=-1$. Product $=1\\times(-1)=-1$ — perpendicular diagonals.<br>" +
      "Midpoint of diagonal $1$: $(3,3)$. Midpoint of diagonal $2$: $(3,3)$ — same midpoint, so the diagonals bisect each other (parallelogram).<br>" +
      "Congruent, perpendicular diagonals that bisect each other $\\Rightarrow$ the quadrilateral is a <b>square</b>."],

    ["Example 7: Midpoint test proves a parallelogram",
      "$ABCD$ has diagonals $\\overline{AC}$ with $A(1,2)$, $C(7,8)$, and $\\overline{BD}$ with $B(2,7)$, $D(6,3)$. Show $ABCD$ is a parallelogram.",
      "Midpoint of $\\overline{AC}$: $\\left(\\dfrac{1+7}{2},\\dfrac{2+8}{2}\\right)=(4,5)$.<br>" +
      "Midpoint of $\\overline{BD}$: $\\left(\\dfrac{2+6}{2},\\dfrac{7+3}{2}\\right)=(4,5)$.<br>" +
      "Both diagonals share the same midpoint $(4,5)$, so they bisect each other. A quadrilateral whose diagonals bisect each other is a <b>parallelogram</b>."],

    ["Example 8: Basic distance for adjacent sides",
      "Points $P(1,1)$, $Q(4,1)$, $R(4,5)$, $S(1,5)$. Find $PQ$ and $PS$.",
      "$PQ=\\sqrt{(4-1)^2+(1-1)^2}=\\sqrt{9}=3$.<br>" +
      "$PS=\\sqrt{(1-1)^2+(5-1)^2}=\\sqrt{16}=4$.<br>" +
      "<b>Answer:</b> $PQ=3$; $PS=4$ (this is a $3$-by-$4$ rectangle)."],

    ["Example 9: Perpendicular slope check with fractions",
      "Slopes $m_1=\\dfrac{2}{3}$ and $m_2=-\\dfrac{3}{2}$. Are the corresponding sides perpendicular?",
      "Multiply the slopes: $\\dfrac{2}{3}\\times\\left(-\\dfrac{3}{2}\\right)=-\\dfrac{6}{6}=-1$.<br>" +
      "Since the product is $-1$, the sides are <b>perpendicular</b>."],

    ["Example 10: Capstone — classify as specifically as possible",
      "Vertices $A(0,0)$, $B(5,2)$, $C(7,7)$, $D(2,5)$. Classify $ABCD$ as specifically as possible.",
      "<b>Check for parallelogram (slopes):</b> $\\overline{AB}$: slope $\\dfrac{2}{5}$; $\\overline{DC}$: $\\dfrac{7-5}{7-2}=\\dfrac{2}{5}$ — equal. $\\overline{AD}$: slope $\\dfrac{5}{2}$; $\\overline{BC}$: $\\dfrac{7-2}{7-5}=\\dfrac{5}{2}$ — equal. Both pairs parallel $\\Rightarrow$ parallelogram.<br>" +
      "<b>Check side lengths:</b> $AB=\\sqrt{5^2+2^2}=\\sqrt{29}$; $AD=\\sqrt{2^2+5^2}=\\sqrt{29}$ — adjacent sides congruent, so <i>all four</i> sides are congruent (opposite sides already matched by the parallelogram property) $\\Rightarrow$ rhombus.<br>" +
      "<b>Check right angles:</b> $\\overrightarrow{AB}=(5,2)$, $\\overrightarrow{AD}=(2,5)$. Dot product $=5(2)+2(5)=20\\neq0$, so the sides are <i>not</i> perpendicular — not a rectangle, so not a square.<br>" +
      "<b>Answer:</b> $ABCD$ is a <b>rhombus that is not a square</b>, with side length $\\sqrt{29}$."],

    ["Example 11: Coordinate proof of a kite",
      "Vertices $A(0,3)$, $B(2,0)$, $C(0,-4)$, $D(-2,0)$. Show that $ABCD$ is a kite (and not a rhombus).",
      "$AB=\\sqrt{2^2+3^2}=\\sqrt{13}$.<br>" +
      "$AD=\\sqrt{2^2+3^2}=\\sqrt{13}$ — matches $AB$.<br>" +
      "$BC=\\sqrt{2^2+4^2}=\\sqrt{20}$.<br>" +
      "$CD=\\sqrt{2^2+4^2}=\\sqrt{20}$ — matches $BC$, but $\\sqrt{20}\\neq\\sqrt{13}$.<br>" +
      "Two distinct pairs of consecutive congruent sides ($AB=AD$ and $CB=CD$), with the pairs unequal to each other $\\Rightarrow$ $ABCD$ is a <b>kite</b>, not a rhombus (a rhombus would need <i>all four</i> sides equal)."],
  ],
  questions: [
    ["Problem 1: Parallel", "Slopes $\\dfrac{3}{4}$ and $\\dfrac{3}{4}$. Parallel?", "Yes"],
    ["Problem 2: Perpendicular", "Slopes $4$ and $-\\dfrac{1}{4}$. Perpendicular?", "Yes"],
    ["Problem 3: Midpoint", "Diagonals share midpoint $(2,3)$. The figure must be a…", "Parallelogram"],
    ["Problem 4: Distance", "$A(0,0)$, $B(6,0)$. Find $AB$.", "$6$"],
    ["Problem 5: Classify", "A parallelogram has four congruent sides. Name it.", "Rhombus"],
    ["Problem 6: Classify", "A parallelogram has a right angle. Name it.", "Rectangle"],
    ["Problem 7: Trapezoid", "A quadrilateral has exactly one pair of parallel sides. Name it.", "Trapezoid"],
    ["Problem 8: Square test", "A rhombus has congruent diagonals. Name it.", "Square"],
    ["Problem 9: Slope", "A vertical side has slope…", "Undefined"],
    ["Problem 10: Distance", "$C(2,3)$, $D(2,8)$. Find $CD$.", "$5$"],
    ["Problem 11: Perpendicular", "Slopes $\\dfrac{5}{2}$ and $\\dfrac{2}{5}$. Perpendicular?", "No (product $\\neq -1$)"],
    ["Problem 12: Rectangle diagonals", "In a rectangle, the diagonals are always…", "Congruent"],
    ["Problem 13: Proof idea", "To prove a quadrilateral is a parallelogram using only its diagonals, you show that they…", "Bisect each other (share the same midpoint)"],
    ["Problem 14: Challenge", "Vertices $A(0,0)$, $B(4,2)$, $C(6,6)$, $D(2,4)$. Classify $ABCD$ as specifically as possible and give the side length.", "Rhombus (not a square); side $=2\\sqrt{5}$"],
    ["Problem 15: Challenge", "Vertices $W(0,4)$, $X(3,0)$, $Y(0,-5)$, $Z(-3,0)$. Show $WXYZ$ is a kite and give both distinct side lengths.", "Kite; $WX=ZW=5$, $XY=YZ=\\sqrt{34}$"],
  ],
};
