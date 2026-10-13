import { fig, centralAngle, circleChord } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "9.1",
  title: "Circle Vocabulary & Central Angles",
  intro: "A circle is the set of all points a fixed distance (the <b>radius</b>) from a center point. A <b>chord</b> connects any two points on the circle; a <b>diameter</b> is a chord through the center and is the longest possible chord, with length $2r$. A <b>central angle</b> has its vertex at the center, and its measure always equals the measure of the arc it intercepts — this is the single most important rule in circle geometry, since it converts angle problems into arc problems and back. Arcs smaller than a semicircle are <b>minor arcs</b>; arcs larger are <b>major arcs</b>; an arc cut off by a diameter is a <b>semicircle</b> ($180^\\circ$). The <b>Arc Addition Postulate</b> works just like the Segment and Angle Addition Postulates: adjacent arcs add up. Since central angles all the way around a point sum to $360^\\circ$, so do all the arcs of a circle. This worksheet uses these rules together, including algebra and real-world angle problems.",
  examples: [
    ["Example 1: Minor and major arcs",
      "Central angle $\\angle AOB=72^\\circ$. Find the measures of minor arc $AB$ and major arc $AB$.",
      fig(centralAngle("72°"), "The central angle and its intercepted (minor) arc always have equal measure.") +
      "Minor arc equals the central angle: $m\\widehat{AB}=72^\\circ$.<br>" +
      "Major arc is the rest of the circle: $360^\\circ-72^\\circ=288^\\circ$.<br>" +
      "<b>Answer:</b> minor arc $=72^\\circ$; major arc $=288^\\circ$."],

    ["Example 2: Arc Addition Postulate",
      "$m\\widehat{AB}=40^\\circ$ and $m\\widehat{BC}=65^\\circ$, with $B$ between $A$ and $C$ on the circle. Find $m\\widehat{AC}$.",
      "Adjacent arcs add, just like adjacent angles:<br>" +
      "$m\\widehat{AC}=m\\widehat{AB}+m\\widehat{BC}=40^\\circ+65^\\circ=105^\\circ$.<br>" +
      "<b>Answer:</b> $105^\\circ$."],

    ["Example 3: Central angles around a point sum to $360^\\circ$",
      "Three central angles around a center measure $110^\\circ$, $95^\\circ$, and $x$. Find $x$.",
      "Identify the relationship: all central angles around a point sum to $360^\\circ$.<br>" +
      "Set up and solve the equation:<br>" +
      "$110^\\circ+95^\\circ+x=360^\\circ$<br>" +
      "$205^\\circ+x=360^\\circ$<br>" +
      "$x=155^\\circ$.<br>" +
      "<b>Answer:</b> $155^\\circ$."],

    ["Example 4: Diameter forms a linear pair of central angles",
      "$A$ and $B$ are endpoints of a diameter; $C$ is another point on the circle. $m\\angle AOC=2x$ and $m\\angle BOC=3x$. Find $x$ and each angle.",
      "$\\angle AOC$ and $\\angle BOC$ form a straight (linear) angle along the diameter, so they sum to $180^\\circ$:<br>" +
      "$2x+3x=180^\\circ$<br>" +
      "$5x=180^\\circ \\Rightarrow x=36^\\circ$.<br>" +
      "$m\\angle AOC=2(36)=72^\\circ$; $m\\angle BOC=3(36)=108^\\circ$.<br>" +
      "<b>Answer:</b> $x=36^\\circ$; angles $72^\\circ$ and $108^\\circ$."],

    ["Example 5: Testing the longest-chord rule",
      "A circle has radius $9$. Is a chord of length $20$ possible?",
      fig(circleChord(), "No chord can be longer than the diameter — the diameter is the longest chord.") +
      "The diameter is $2(9)=18$, and no chord can exceed the diameter.<br>" +
      "Since $20>18$, <b>no</b> such chord is possible."],

    ["Example 6: Radius from diameter",
      "A circle has diameter $14$. Find the radius.",
      "Identify the given value: $d=14$.<br>" +
      "The radius is always half the diameter:<br>" +
      "$r=\\dfrac{d}{2}=\\dfrac{14}{2}=7$.<br>" +
      "<b>Answer:</b> $7$."],

    ["Example 7: Central angle from an arc",
      "Minor arc $PQ$ measures $130^\\circ$. Find the central angle that intercepts it.",
      "A central angle equals its intercepted arc: $m\\angle POQ=130^\\circ$.<br>" +
      "<b>Answer:</b> $130^\\circ$."],

    ["Example 8: Semicircle",
      "Chord $\\overline{AB}$ is a diameter of the circle. What is $m\\widehat{AB}$ (the arc on either side)?",
      "A diameter divides the circle into two semicircles, each measuring $180^\\circ$: $m\\widehat{AB}=180^\\circ$.<br>" +
      "<b>Answer:</b> $180^\\circ$."],

    ["Example 9: Chord vs. diameter",
      "A circle has radius $6.5$. What is the longest possible chord?",
      "The diameter is the longest chord: $d=2(6.5)=13$.<br>" +
      "<b>Answer:</b> $13$."],

    ["Example 10: Central angles in a given ratio",
      "Four central angles around a point are in the ratio $1:2:3:4$. Find each angle.",
      "Let the angles be $x$, $2x$, $3x$, $4x$. They sum to $360^\\circ$:<br>" +
      "$x+2x+3x+4x=360^\\circ$<br>" +
      "$10x=360^\\circ \\Rightarrow x=36^\\circ$.<br>" +
      "Angles: $36^\\circ$, $72^\\circ$, $108^\\circ$, $144^\\circ$.<br>" +
      "<b>Check:</b> $36+72+108+144=360^\\circ$. ✓"],

    ["Example 11: Application — a clock face",
      "A clock face is a circle with the center at the pivot of its hands. Find the central angle (and the corresponding arc) from the $12$ to the $4$.",
      "A clock's $12$ hour marks divide the circle into $12$ equal central angles: each is $\\dfrac{360^\\circ}{12}=30^\\circ$.<br>" +
      "From $12$ to $4$ spans $4$ of these equal angles: $4(30^\\circ)=120^\\circ$.<br>" +
      "Since the central angle equals its intercepted arc, the arc from $12$ to $4$ also measures $120^\\circ$.<br>" +
      "<b>Answer:</b> $120^\\circ$."],
  ],
  questions: [
    ["Problem 1: Minor and major arcs", "A central angle measures $130^\\circ$. Find the minor and major arc measures.", "Minor $130^\\circ$; major $230^\\circ$"],
    ["Problem 2: Arc Addition", "$m\\widehat{AB}=52^\\circ$, $m\\widehat{BC}=88^\\circ$. Find $m\\widehat{AC}$.", "$140^\\circ$"],
    ["Problem 3: Sum to $360^\\circ$", "Three central angles measure $100^\\circ$, $120^\\circ$, and $x$. Find $x$.", "$x=140^\\circ$"],
    ["Problem 4: Diameter linear pair", "$A$, $B$ are diameter endpoints; $m\\angle AOC=4x$ and $m\\angle BOC=5x$. Find $x$ and each angle.", "$x=20^\\circ$; angles $80^\\circ$ and $100^\\circ$"],
    ["Problem 5: Radius and diameter", "A circle has radius $6.5$. Find its diameter.", "$13$"],
    ["Problem 6: Longest chord", "A circle has radius $8$. Can it contain a chord of length $17$?", "No ($d=16$)"],
    ["Problem 7: Central from arc", "Minor arc $CD$ measures $95^\\circ$. Find the central angle intercepting it.", "$95^\\circ$"],
    ["Problem 8: Major arc", "Central angle $\\angle XOY=48^\\circ$. Find the major arc $XY$.", "$312^\\circ$"],
    ["Problem 9: Arc Addition", "$m\\widehat{PQ}=75^\\circ$ and $m\\widehat{QR}=55^\\circ$. Find $m\\widehat{PR}$.", "$130^\\circ$"],
    ["Problem 10: Semicircle", "What is the measure of a semicircle's arc?", "$180^\\circ$"],
    ["Problem 11: Sum to $360^\\circ$", "Four equal central angles fill a circle. Find each measure.", "$90^\\circ$"],
    ["Problem 12: Diameter", "A circle has diameter $22$. Find the radius.", "$11$"],
    ["Problem 13: Vocabulary", "Is a diameter also a chord? Explain briefly.", "Yes — it's the longest possible chord, since it also connects two points on the circle"],
    ["Problem 14: Challenge", "Four central angles around a point are in the ratio $2:3:4:6$. Find each angle.", "$48^\\circ$, $72^\\circ$, $96^\\circ$, $144^\\circ$"],
    ["Problem 15: Challenge", "A pizza is cut into $5$ slices whose central angles form an arithmetic sequence with common difference $8^\\circ$ (each slice $8^\\circ$ bigger than the last). Find the smallest and largest slice angles.", "Smallest $56^\\circ$, largest $88^\\circ$"],
  ],
};
