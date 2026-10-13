import { fig, perpBisectorFig, angleBisectorFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "11.2",
  title: "Bisecting Segments and Angles",
  intro: "To <b>bisect</b> means to split exactly in half. This worksheet builds the perpendicular bisector of a segment and the bisector of an angle using compass and straightedge, then proves — not just states — the two equidistance theorems that make these constructions useful: every point on a segment's perpendicular bisector is equidistant from the segment's endpoints, and every point on an angle's bisector is equidistant from the angle's two sides. These constructions and theorems are the direct foundation for locating a triangle's circumcenter and incenter in the next lesson.",
  examples: [
    ["Example 1: Perpendicular bisector — full justified steps",
      "Construct the perpendicular bisector of $\\overline{AB}$.",
      fig(perpBisectorFig(), "Two equal-radius circles centered at A and B always cross at two points that lie on the perpendicular bisector.") +
      "<ol>" +
      "<li>Open the compass to <i>more than half</i> of $AB$ (this is essential — see Example 8).</li>" +
      "<li>Centered at $A$, draw an arc above and below $\\overline{AB}$.</li>" +
      "<li>Without changing the radius, center the compass at $B$ and draw a second arc above and below, crossing the first arcs at two points.</li>" +
      "<li>Draw the line through those two intersection points.</li>" +
      "</ol>" +
      "<b>Justification:</b> both intersection points are the same distance from $A$ as from $B$ (equal compass radius both times), so the line through them is exactly the perpendicular bisector — the set of all points equidistant from $A$ and $B$.<br>" +
      "<b>Answer:</b> the constructed line passes through the midpoint $M$ of $\\overline{AB}$, perpendicular to it."],

    ["Example 2: Midpoint distance",
      "$AB=12$. After constructing the perpendicular bisector meeting $\\overline{AB}$ at $M$, find $AM$.",
      "The perpendicular bisector meets the segment at its midpoint, splitting it into two equal halves:<br>" +
      "$AM=MB=\\dfrac{12}{2}=6$.<br>" +
      "<b>Answer:</b> $AM=6$."],

    ["Example 3: Angle bisector — full justified steps",
      "Construct the bisector of $\\angle ABC$.",
      fig(angleBisectorFig(), "Equal-radius arcs from D and E cross at a point that must lie on the bisector, by symmetry.") +
      "<ol>" +
      "<li>Centered at vertex $B$, draw an arc crossing both rays of the angle, at points $D$ and $E$.</li>" +
      "<li>Centered at $D$, draw an arc inside the angle (any radius, but the <i>same</i> radius for the next step).</li>" +
      "<li>Without changing that radius, center the compass at $E$ and draw a second arc, crossing the first.</li>" +
      "<li>Draw the ray from $B$ through that intersection point.</li>" +
      "</ol>" +
      "<b>Justification:</b> the intersection point is equidistant from $D$ and $E$ (equal radii), and $BD=BE$ (step 1), so $\\triangle BD(\\text{pt})\\cong\\triangle BE(\\text{pt})$ by SSS, forcing the two half-angles to be congruent.<br>" +
      "<b>Answer:</b> the constructed ray bisects $\\angle ABC$ into two congruent angles."],

    ["Example 4: Splitting an angle",
      "$m\\angle ABC=80^\\circ$ is bisected. Find the measure of each resulting angle.",
      "Bisecting splits the angle into two congruent halves:<br>" +
      "$\\dfrac{80^\\circ}{2}=40^\\circ$ each.<br>" +
      "<b>Answer:</b> $40^\\circ$ and $40^\\circ$."],

    ["Example 5: Why the bisector meets the segment at exactly $90^\\circ$",
      "Explain, using the two arc-intersection points $C$ and $D$ from the perpendicular bisector construction, why the resulting line must be perpendicular to $\\overline{AB}$ (not just close to it).",
      "By construction, $CA=CB$ and $DA=DB$ (each pair from an equal-radius arc), so $ACBD$ is a kite (two pairs of adjacent congruent sides). A kite's diagonals are always perpendicular, and here one diagonal is $\\overline{AB}$ and the other is $\\overline{CD}$ — so $\\overline{CD}\\perp\\overline{AB}$ exactly, not approximately.<br>" +
      "<b>Answer:</b> $ACBD$ is a kite, and a kite's diagonals are perpendicular, so the constructed line meets $\\overline{AB}$ at exactly $90^\\circ$."],

    ["Example 6: Proving the Perpendicular Bisector Theorem",
      "Point $P$ lies on the perpendicular bisector of $\\overline{AB}$, meeting it at $M$. Prove $PA=PB$.",
      "Compare $\\triangle PMA$ and $\\triangle PMB$:<br>" +
      "$AM=MB$ (definition of bisector — $M$ is the midpoint).<br>" +
      "$\\angle PMA=\\angle PMB=90^\\circ$ (definition of perpendicular).<br>" +
      "$PM=PM$ (shared side).<br>" +
      "By <b>SAS</b>, $\\triangle PMA\\cong\\triangle PMB$, so their corresponding sides $PA$ and $PB$ are congruent.<br>" +
      "<b>Answer:</b> $PA=PB$, proven by SAS congruence."],

    ["Example 7: Proving the Angle Bisector Theorem",
      "Point $Q$ lies on the bisector of $\\angle ABC$. Perpendiculars are dropped from $Q$ to each side, meeting ray $BA$ at $R$ and ray $BC$ at $S$. Prove $QR=QS$.",
      "Compare $\\triangle BQR$ and $\\triangle BQS$:<br>" +
      "$\\angle QBR=\\angle QBS$ ($Q$ is on the bisector, so it splits $\\angle ABC$ into two equal parts).<br>" +
      "$\\angle BRQ=\\angle BSQ=90^\\circ$ (given, perpendiculars).<br>" +
      "$BQ=BQ$ (shared side).<br>" +
      "By <b>AAS</b>, $\\triangle BQR\\cong\\triangle BQS$, so $QR=QS$.<br>" +
      "<b>Answer:</b> $QR=QS$, proven by AAS congruence — $Q$ is equidistant from both sides of the angle."],

    ["Example 8: Why the compass radius must exceed half of $AB$",
      "Explain what goes wrong if the compass radius used for the perpendicular bisector arcs is <i>less than</i> half of $AB$.",
      "Each arc from $A$ and from $B$ has radius $r$. For the two arcs to intersect at all, the circles of radius $r$ centered at $A$ and $B$ (distance $AB$ apart) must overlap, which requires $2r>AB$, i.e. $r>\\dfrac{AB}{2}$. If $r\\le\\dfrac{AB}{2}$, the two circles are too far apart (or just touching) and never cross at two distinct points, so the construction fails to locate the bisector.<br>" +
      "<b>Answer:</b> the arcs would not intersect (or only touch at one point on $\\overline{AB}$ itself), so the perpendicular bisector could not be located."],

    ["Example 9: Algebra with an angle bisector",
      "An angle of measure $(4x)^\\circ$ is bisected into two angles each measuring $(x+10)^\\circ$. Find $x$.",
      "Each half equals half the whole angle:<br>" +
      "$4x=2(x+10)$<br>" +
      "$4x=2x+20$<br>" +
      "$2x=20$<br>" +
      "$x=10$.<br>" +
      "<b>Check:</b> whole angle $=4(10)=40^\\circ$; each half $=10+10=20^\\circ$; $2(20)=40$. ✓<br>" +
      "<b>Answer:</b> $x=10$."],

    ["Example 10: Algebra with a perpendicular bisector",
      "$M$ is the midpoint of $\\overline{AB}$. If $AM=3x-1$ and $AB=2x+6$, find $x$ and the length of $\\overline{AB}$.",
      "Since $M$ is the midpoint, $AM=\\dfrac12AB$:<br>" +
      "$3x-1=\\dfrac12(2x+6)$<br>" +
      "Multiply both sides by $2$: $6x-2=2x+6$<br>" +
      "$4x=8 \\Rightarrow x=2$.<br>" +
      "Then $AB=2(2)+6=10$, and $AM=3(2)-1=5$ (indeed half of $10$).<br>" +
      "<b>Answer:</b> $x=2$; $AB=10$."],

    ["Example 11: Combining both constructions — a real-world locator",
      "A new fire station must be built (a) equidistant from towns $A$ and $B$, and (b) equidistant from two straight roads that meet at an angle at point $C$. Describe the two constructions needed and what determines the final location.",
      "Condition (a) means the station lies on the <b>perpendicular bisector</b> of $\\overline{AB}$ (Example 1) — every point there is equidistant from $A$ and $B$.<br>" +
      "Condition (b) means the station lies on the <b>angle bisector</b> of the angle formed by the two roads at $C$ (Example 3) — every point there is equidistant from both roads.<br>" +
      "Constructing both lines and finding where they cross gives the one location (if any) satisfying both conditions simultaneously.<br>" +
      "<b>Answer:</b> construct the perpendicular bisector of $\\overline{AB}$ and the angle bisector at $C$; their intersection point is the required station location."],
  ],
  questions: [
    ["Problem 1: First arcs", "For the perpendicular bisector of $\\overline{AB}$, the first arcs are centered where?", "At $A$ and at $B$, using the same radius"],
    ["Problem 2: Midpoint", "$AB=20$. Find $AM$ after the perpendicular bisector is constructed.", "$10$"],
    ["Problem 3: Angle bisector step", "After the vertex arc crosses both rays, where are the next equal-radius arcs centered?", "At the two points where the vertex arc met the rays"],
    ["Problem 4: Half angle", "$m\\angle ABC=70^\\circ$ is bisected. Find each half.", "$35^\\circ$"],
    ["Problem 5: Equidistance (segment)", "A point on the perpendicular bisector of $\\overline{CD}$ is equidistant from which two points?", "$C$ and $D$"],
    ["Problem 6: Equidistance (angle)", "A point on an angle's bisector is equidistant from what?", "The two sides (rays) of the angle"],
    ["Problem 7: Right angle", "At what angle does a perpendicular bisector meet the original segment?", "$90^\\circ$"],
    ["Problem 8: Algebra", "An angle $(6x)^\\circ$ is bisected into two angles of $(2x+6)^\\circ$ each. Find $x$.", "$x=6$"],
    ["Problem 9: Radius condition", "Must the compass radius for a perpendicular bisector exceed $\\tfrac12AB$? Why?", "Yes — otherwise the two arcs cannot intersect"],
    ["Problem 10: Result (segment)", "What two things does bisecting a segment create?", "Two congruent segments and a midpoint"],
    ["Problem 11: Result (angle)", "What does bisecting an angle create?", "Two congruent angles"],
    ["Problem 12: Intersection count", "How many intersection points of the equal-radius arcs are needed to draw the perpendicular bisector line?", "Two (one on each side of $\\overline{AB}$)"],
    ["Problem 13: Vocabulary", "Define \"perpendicular bisector.\"", "A line through a segment's midpoint, perpendicular to the segment"],
    ["Problem 14: Algebra", "$M$ is the midpoint of $\\overline{AB}$, with $AM=2x+3$ and $AB=5x-2$. Find $x$ and $AB$.", "$x=8$; $AB=38$"],
    ["Problem 15: Challenge", "In $\\triangle ABC$, the perpendicular bisector of $\\overline{BC}$ turns out to be the exact same line as the bisector of $\\angle A$. What must be true about $\\triangle ABC$, and why?", "$\\triangle ABC$ is isosceles with $AB=AC$ — by symmetry, the angle bisector from the apex of an isosceles triangle also perpendicularly bisects the base"],
  ],
};
