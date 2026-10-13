import { fig, inscribedAngle, thalesFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "9.2",
  title: "Inscribed Angles",
  intro: "An <b>inscribed angle</b> has its vertex on the circle and its two sides are chords. The <b>Inscribed Angle Theorem</b> says an inscribed angle is always <i>half</i> its intercepted arc: $m\\angle=\\dfrac{1}{2}m\\widehat{\\text{arc}}$. Two immediate consequences: inscribed angles that intercept the <i>same</i> arc are congruent to each other, and an inscribed angle is half of the central angle on the same arc (since the central angle equals the arc). A special case called <b>Thales' Theorem</b> follows directly: if a triangle is inscribed in a circle with one side as a diameter, the angle opposite that diameter is always a right angle, because a diameter's arc is $180^\\circ$ and half of $180^\\circ$ is $90^\\circ$. This worksheet includes the reasoning behind the theorem, not just its use.",
  examples: [
    ["Example 1: Angle from an arc",
      "An inscribed angle intercepts an arc of $84^\\circ$. Find the angle.",
      fig(inscribedAngle(), "Inscribed angle $C$ is half of arc $AB$.") +
      "Identify the theorem: an inscribed angle is always half of its intercepted arc, $m\\angle=\\dfrac{1}{2}m\\widehat{\\text{arc}}$.<br>" +
      "Compute: $m\\angle=\\dfrac{1}{2}(84^\\circ)=42^\\circ$.<br>" +
      "<b>Answer:</b> $42^\\circ$."],

    ["Example 2: Arc from an angle",
      "An inscribed angle measures $55^\\circ$. Find its intercepted arc.",
      "Identify: this reverses the Inscribed Angle Theorem — since the angle is half the arc, the arc must be double the angle.<br>" +
      "Compute: arc $=2\\times55^\\circ=110^\\circ$.<br>" +
      "<b>Answer:</b> $110^\\circ$."],

    ["Example 3: Angles on the same arc are congruent",
      "Inscribed angles $\\angle ACB$ and $\\angle ADB$ both intercept arc $AB$: $m\\angle ACB=(3x+5)^\\circ$ and $m\\angle ADB=(4x-10)^\\circ$. Find $x$ and the angle measure.",
      "Angles intercepting the same arc are congruent:<br>" +
      "$3x+5=4x-10$<br>" +
      "$x=15$.<br>" +
      "Angle $=3(15)+5=50^\\circ$.<br>" +
      "<b>Answer:</b> $x=15$; each angle $=50^\\circ$."],

    ["Example 4: Thales' Theorem",
      "Triangle $ABC$ is inscribed in a circle with diameter $\\overline{AB}$. $m\\angle A=35^\\circ$. Find $m\\angle B$.",
      fig(thalesFig(), "A triangle inscribed with a diameter as one side always has a right angle opposite that diameter.") +
      "Since $\\overline{AB}$ is a diameter, its arc is a semicircle ($180^\\circ$), so the inscribed angle at $C$ is $\\dfrac{1}{2}(180^\\circ)=90^\\circ$.<br>" +
      "The triangle's angles sum to $180^\\circ$: $m\\angle B=180^\\circ-90^\\circ-35^\\circ=55^\\circ$.<br>" +
      "<b>Answer:</b> $55^\\circ$."],

    ["Example 5: Central angle vs. inscribed angle",
      "Central angle $\\angle AOB=100^\\circ$. Point $C$ lies on the major arc. Find inscribed angle $\\angle ACB$.",
      "The central angle equals its intercepted arc: $m\\widehat{AB}=100^\\circ$.<br>" +
      "The inscribed angle on that same arc is half: $m\\angle ACB=\\dfrac{1}{2}(100^\\circ)=50^\\circ$.<br>" +
      "<b>Answer:</b> $50^\\circ$."],

    ["Example 6: Angle from an arc",
      "An inscribed angle intercepts an arc of $96^\\circ$. Find the angle.",
      "Identify: apply the Inscribed Angle Theorem directly — the angle is half the arc.<br>" +
      "Compute: $\\dfrac{1}{2}(96^\\circ)=48^\\circ$.<br>" +
      "<b>Answer:</b> $48^\\circ$."],

    ["Example 7: Arc from an angle",
      "An inscribed angle measures $63^\\circ$. Find its intercepted arc.",
      "Identify: work backward from the angle to the arc by doubling.<br>" +
      "Compute: $2(63^\\circ)=126^\\circ$.<br>" +
      "<b>Answer:</b> $126^\\circ$."],

    ["Example 8: Same-arc equation",
      "Two inscribed angles on the same arc measure $(2x+8)^\\circ$ and $(5x-19)^\\circ$. Find $x$ and the angle.",
      "$2x+8=5x-19$<br>" +
      "$27=3x \\Rightarrow x=9$.<br>" +
      "Angle $=2(9)+8=26^\\circ$.<br>" +
      "<b>Answer:</b> $x=9$; angle $=26^\\circ$."],

    ["Example 9: Semicircle triangle",
      "A right triangle is inscribed with its hypotenuse as a diameter. One acute angle is $28^\\circ$. Find the other.",
      "Identify: by Thales' Theorem, the angle opposite a diameter is always $90^\\circ$, so this is a right triangle with one leg-angle already known.<br>" +
      "Compute the missing angle using the triangle angle sum: $180^\\circ-90^\\circ-28^\\circ=62^\\circ$.<br>" +
      "<b>Answer:</b> $62^\\circ$."],

    ["Example 10: Why is the inscribed angle half the arc?",
      "Prove the Inscribed Angle Theorem for the case where one side of the inscribed angle is a diameter: circle with center $O$, diameter $\\overline{CB}$, and point $A$ on the circle, forming inscribed angle $\\angle ACB$.",
      "Draw radius $\\overline{OA}$. Since $OA=OC=r$, triangle $OAC$ is isosceles, so its base angles are equal: $m\\angle OCA=m\\angle OAC=x$ (note $\\angle OCA$ is the same angle as $\\angle ACB$).<br>" +
      "Because $C$, $O$, $B$ lie on a straight diameter, $\\angle AOB$ is the <i>exterior</i> angle of triangle $OAC$ at vertex $O$.<br>" +
      "By the Exterior Angle Theorem, an exterior angle equals the sum of the two remote interior angles: $m\\angle AOB=m\\angle OCA+m\\angle OAC=x+x=2x$.<br>" +
      "But $\\angle AOB$ is a central angle, so $m\\angle AOB=m\\widehat{AB}$. Therefore $m\\widehat{AB}=2x$, which means $x=\\dfrac{1}{2}m\\widehat{AB}$ — exactly the Inscribed Angle Theorem."],

    ["Example 11: Application — lighthouses on a bay",
      "A curved shoreline is modeled as an arc of a circle. Two lighthouses sit on the shoreline, and a ship at a third point on the same circle sights both lighthouses. The arc between the lighthouses that does <i>not</i> contain the ship measures $130^\\circ$. Find the angle at which the ship views the two lighthouses.",
      "The ship's viewing angle is an inscribed angle intercepting the arc between the lighthouses that does not contain the ship:<br>" +
      "$m\\angle=\\dfrac{1}{2}(130^\\circ)=65^\\circ$.<br>" +
      "<b>Answer:</b> $65^\\circ$."],
  ],
  questions: [
    ["Problem 1: Angle from arc", "An inscribed angle intercepts an arc of $110^\\circ$. Find the angle.", "$55^\\circ$"],
    ["Problem 2: Arc from angle", "An inscribed angle measures $37^\\circ$. Find its intercepted arc.", "$74^\\circ$"],
    ["Problem 3: Central vs inscribed", "A central angle measures $150^\\circ$. Find the inscribed angle on the same arc.", "$75^\\circ$"],
    ["Problem 4: Same arc", "Two inscribed angles on the same arc measure $(4x-6)^\\circ$ and $(2x+10)^\\circ$. Find $x$ and the angle.", "$x=8$; angle $26^\\circ$"],
    ["Problem 5: Thales", "Diameter $\\overline{PQ}$ with $R$ on the circle. $m\\angle P=42^\\circ$. Find $m\\angle Q$.", "$48^\\circ$"],
    ["Problem 6: Angle from arc", "Inscribed angle intercepts a $68^\\circ$ arc. Find the angle.", "$34^\\circ$"],
    ["Problem 7: Arc from angle", "Inscribed angle is $81^\\circ$. Find the intercepted arc.", "$162^\\circ$"],
    ["Problem 8: Half the central", "Central angle is $88^\\circ$. Find the inscribed angle on the same arc.", "$44^\\circ$"],
    ["Problem 9: Thales", "Inscribed triangle with diameter hypotenuse; acute angles $3x$ and $2x$. Find $x$ and both angles.", "$x=18^\\circ$; angles $54^\\circ$, $36^\\circ$"],
    ["Problem 10: Same arc", "Angles $(x+12)^\\circ$ and $(3x-8)^\\circ$ intercept the same arc. Find $x$ and the angle.", "$x=10$; angle $22^\\circ$"],
    ["Problem 11: Find angle", "Arc measure $140^\\circ$. Find the inscribed angle intercepting it.", "$70^\\circ$"],
    ["Problem 12: Find arc", "Inscribed angle $49^\\circ$. Find the arc.", "$98^\\circ$"],
    ["Problem 13: Vocabulary", "Where is the vertex of an inscribed angle located?", "On the circle"],
    ["Problem 14: Challenge", "Two inscribed angles intercept arcs that together make up the whole circle, and one angle is $3$ times the other. Find both inscribed angles.", "$135^\\circ$ and $45^\\circ$"],
    ["Problem 15: Challenge", "A right triangle is inscribed with the hypotenuse as a diameter of length $26$. One leg is $24$. Find the other leg and both acute angles (nearest degree).", "Other leg $=10$; angles $\\approx67^\\circ$ and $\\approx23^\\circ$"],
  ],
};
