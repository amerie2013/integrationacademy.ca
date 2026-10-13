import { fig, copySegmentFig, copyAngleFig, triABC } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "11.1",
  title: "Copying Segments and Angles",
  intro: "Classical constructions use only two tools: an <b>unmarked straightedge</b> (draws lines, but never measures) and a <b>compass</b> (transfers a fixed distance). Every construction is a sequence of steps that can each be <i>justified</i> — usually by showing that the construction forces two triangles to be congruent (often by SSS). This worksheet builds the two most fundamental constructions — copying a segment and copying an angle — and uses them to copy an entire triangle. Each example gives a full, justified step list, not just a final picture: on a real exam you must be able to explain <i>why</i> each step guarantees congruence, not just perform it.",
  examples: [
    ["Example 1: Copy a segment — full justified steps",
      "Copy $\\overline{AB}$ onto a ray with endpoint $A'$.",
      fig(copySegmentFig(), "The compass carries the exact length $AB$ to the new ray without ever needing to measure a number.") +
      "<ol>" +
      "<li>Draw a ray starting at $A'$. <i>(This ray will contain the copy.)</i></li>" +
      "<li>Open the compass to width $AB$: point on $A$, pencil on $B$. <i>(The compass now physically stores the length $AB$.)</i></li>" +
      "<li>Without changing the compass width, place the point on $A'$ and swing an arc crossing the ray.</li>" +
      "<li>Label the crossing point $B'$.</li>" +
      "</ol>" +
      "<b>Justification:</b> the compass radius never changed between steps 2 and 3, so the distance from $A'$ to every point on the arc — including $B'$ — equals $AB$. Therefore $\\overline{A'B'}\\cong\\overline{AB}$.<br>" +
      "<b>Answer:</b> $\\overline{A'B'}\\cong\\overline{AB}$ by construction."],

    ["Example 2: Why the straightedge stays unmarked",
      "A student copying $\\overline{PQ}=7$ cm says, \"I'll just use a ruler and mark $7$ cm on the new ray.\" Explain why this is not a valid classical construction, even though the length is correct.",
      "A classical construction must work using only compass and straightedge — no numbers, no marked lengths. Using a ruler's tick marks to count out \"$7$ cm\" uses <i>measurement</i>, which was historically considered a different (less rigorous) tool than the compass.<br>" +
      "The compass method proves congruence directly from the unchanging radius (see Example 1), with no dependence on a numbered scale — it would work identically if the segment were relabeled in different units.<br>" +
      "<b>Answer:</b> Not valid — it uses measurement, not compass-transferred congruence, even though the resulting length happens to be correct."],

    ["Example 3: Copy an angle — full justified steps",
      "Copy $\\angle DBE$ to a new vertex $B'$.",
      fig(copyAngleFig(), "Copying the chord length $D'E'$ forces the new angle to match the original by SSS.") +
      "<ol>" +
      "<li>Draw a ray from $B'$ (this becomes one side of the new angle).</li>" +
      "<li>At the original vertex $B$, draw an arc of any radius crossing both rays of $\\angle DBE$, at points $D$ and $E$.</li>" +
      "<li>Without changing that radius, draw the same arc centered at $B'$, crossing the new ray at $D'$.</li>" +
      "<li>Open the compass to width $DE$ (the chord between the two original arc points).</li>" +
      "<li>Centered at $D'$, swing an arc of radius $DE$ crossing the new arc; label the intersection $E'$.</li>" +
      "<li>Draw ray $\\overrightarrow{B'E'}$.</li>" +
      "</ol>" +
      "<b>Justification:</b> $BD=B'D'$ and $BE=B'E'$ (same compass radius as steps 2–3), and $DE=D'E'$ (step 4–5). So $\\triangle BDE\\cong\\triangle B'D'E'$ by SSS, which forces $\\angle DBE\\cong\\angle D'B'E'$ (corresponding parts of congruent triangles).<br>" +
      "<b>Answer:</b> $\\angle D'B'E'\\cong\\angle DBE$."],

    ["Example 4: Algebra check on a copied angle",
      "An angle of measure $(3x+10)^\\circ$ is copied exactly. If the copy measures $70^\\circ$, find $x$.",
      "Since the copy is congruent to the original, the two measures are equal:<br>" +
      "$3x+10=70$<br>" +
      "$3x=60$<br>" +
      "$x=20$.<br>" +
      "<b>Answer:</b> $x=20$."],

    ["Example 5: Why the compass width can't drift mid-construction",
      "During the segment-copy construction, a student's compass slips slightly wider between steps 2 and 3. Explain what goes wrong.",
      "The entire justification in Example 1 depends on one fact: the radius used to swing the arc from $A'$ equals the radius that was set from $A$ to $B$. If the compass slips wider, the arc from $A'$ now represents some length <i>greater than</i> $AB$, so the resulting $B'$ would satisfy $A'B'>AB$ — the segments would no longer be congruent, defeating the purpose of the construction.<br>" +
      "<b>Answer:</b> The copied segment would be too long (or too short if it slipped narrower); it would fail to be congruent to the original."],

    ["Example 6: SSS triangle copy — full justified steps",
      "Given $\\triangle ABC$, construct $\\triangle DEF\\cong\\triangle ABC$ using only compass and straightedge.",
      fig(triABC(), "Copying all three side lengths pins down the triangle completely (SSS).") +
      "<ol>" +
      "<li>Draw a ray and copy $\\overline{AB}$ onto it (Example 1's method), labeling the endpoints $D$ and $E$, so $DE=AB$.</li>" +
      "<li>Open the compass to width $AC$. Centered at $D$, draw an arc.</li>" +
      "<li>Open the compass to width $BC$. Centered at $E$, draw a second arc, intersecting the first.</li>" +
      "<li>Label the intersection point $F$, and draw $\\overline{DF}$ and $\\overline{EF}$.</li>" +
      "</ol>" +
      "<b>Justification:</b> by construction, $DE=AB$, $DF=AC$, and $EF=BC$ — all three pairs of sides are congruent, so $\\triangle DEF\\cong\\triangle ABC$ by <b>SSS</b>.<br>" +
      "<b>Answer:</b> $\\triangle DEF\\cong\\triangle ABC$ by SSS."],

    ["Example 7: Checking feasibility before constructing",
      "Before attempting an SSS triangle copy with side lengths $4$, $5$, and $10$, check whether a triangle with these side lengths can even exist.",
      "By the <b>Triangle Inequality Theorem</b>, the sum of any two sides must exceed the third side. Test the two shortest sides against the longest:<br>" +
      "$4+5=9$, but the third side is $10$, and $9<10$.<br>" +
      "Since the inequality fails, <b>no triangle</b> can be formed — in the construction, the two arcs (radius $4$ from one endpoint, radius $5$ from the other, on a base of $10$) would never intersect.<br>" +
      "<b>Answer:</b> No triangle exists; the construction's arcs would fail to meet."],

    ["Example 8: Why the angle-copy method actually works",
      "Explain in one sentence why swinging equal arcs at both vertices and matching the chord distance guarantees the two angles are congruent — without just saying \"SSS.\"",
      "The two equal-radius arcs make $BD=B'D'$ and $BE=B'E'$, and copying the chord makes $DE=D'E'$; three pairs of equal sides between $\\triangle BDE$ and $\\triangle B'D'E'$ force the triangles to be congruent (SSS), and since $\\angle DBE$ and $\\angle D'B'E'$ are the angles included between the equal sides, they must be the corresponding congruent angles of those triangles.<br>" +
      "<b>Answer:</b> the two arc points and the chord create three congruent side pairs (SSS), and the angle in question is the included angle between the equal-radius sides in each triangle."],

    ["Example 9: Copying an obtuse angle",
      "$\\angle XYZ$ measures $130^\\circ$ (obtuse). Does the copying method from Example 3 need to change for an obtuse angle?",
      "No. The construction never refers to whether the angle is acute, right, or obtuse — it only uses arc radii and a chord length, which work identically regardless of angle measure. The only visual difference is that the two rays open wider apart.<br>" +
      "<b>Answer:</b> No changes needed; the same steps copy any angle from $0^\\circ$ to $180^\\circ$."],

    ["Example 10: Building a segment as a sum of two copies",
      "Segments $\\overline{PQ}$ (length $5$) and $\\overline{RS}$ (length $8$) are given. Construct a single segment of length $13$ using only compass and straightedge (no ruler).",
      "<ol>" +
      "<li>Draw a ray from a point $X$.</li>" +
      "<li>Copy $\\overline{PQ}$ onto the ray starting at $X$: swing an arc of radius $PQ$ from $X$, landing at $Y$, so $XY=5$.</li>" +
      "<li>Copy $\\overline{RS}$ onto the <i>same ray</i>, starting at $Y$ (not $X$): swing an arc of radius $RS$ from $Y$, landing at $Z$, so $YZ=8$.</li>" +
      "</ol>" +
      "By the Segment Addition Postulate, $XZ=XY+YZ=5+8=13$.<br>" +
      "<b>Answer:</b> $\\overline{XZ}$ has length $13$, built entirely by two compass copies laid end to end — no ruler needed."],
  ],
  questions: [
    ["Problem 1: Segment copy", "What is the first step to copy $\\overline{MN}$ onto a ray from $M'$?", "Draw a ray starting at $M'$"],
    ["Problem 2: Compass width", "Where do you place the compass point and pencil to set width $MN$?", "Point on $M$, pencil on $N$"],
    ["Problem 3: Angle copy step", "After arcing at the original vertex, what is drawn next at the new vertex?", "The same-radius arc, crossing the new ray"],
    ["Problem 4: Chord transfer", "What length is transferred to place the second ray when copying an angle?", "The chord distance between the two arc–ray intersection points"],
    ["Problem 5: SSS copy", "In an SSS triangle copy, after copying side $AB$ as $DE$, which two lengths locate point $F$?", "$AC$ (from $D$) and $BC$ (from $E$)"],
    ["Problem 6: Justification", "A copied angle is congruent to the original because of which triangle congruence postulate?", "SSS"],
    ["Problem 7: Tools", "Why is a protractor not allowed in a classical angle copy?", "Constructions must rely on compass-transferred congruence, not measured degree readings"],
    ["Problem 8: Feasibility check", "Can a triangle be constructed with sides $3$, $4$, and $9$? Justify using the Triangle Inequality.", "No — $3+4=7<9$"],
    ["Problem 9: Result", "After copying $\\overline{AB}$ to $\\overline{A'B'}$, what relationship holds, and why?", "$\\overline{A'B'}\\cong\\overline{AB}$, because the compass radius never changed"],
    ["Problem 10: Why unmarked", "Why must the straightedge used in constructions be unmarked?", "So that all lengths come from compass transfers, not from reading numbers off a ruler"],
    ["Problem 11: Copy vs. bisect", "How does copying a segment differ from bisecting one?", "Copying reproduces the same length elsewhere; bisecting splits one segment into two equal halves"],
    ["Problem 12: Arc role", "In an angle copy, what do the two points where the first arc crosses the rays represent?", "Two points equidistant from the vertex, used to build the congruent triangle for SSS"],
    ["Problem 13: SSS guarantee", "What does completing the SSS triangle construction guarantee about $\\triangle DEF$ and $\\triangle ABC$?", "$\\triangle DEF\\cong\\triangle ABC$"],
    ["Problem 14: Algebra check", "An angle $(5x-4)^\\circ$ is copied exactly, and the copy measures $41^\\circ$. Find $x$.", "$x=9$"],
    ["Problem 15: Challenge", "You are given three segments of lengths $5$, $12$, and $13$ to build $\\triangle DEF\\cong\\triangle ABC$ by SSS. (a) Verify a triangle is possible using the Triangle Inequality. (b) Explain why SSS produces exactly one triangle shape (up to flipping it over), not several different ones.", "(a) $5+12=17>13$, $5+13>12$, $12+13>5$ — valid triangle. (b) Fixing all three side lengths leaves no freedom to change any angle, so the triangle's shape is rigid and unique up to reflection"],
  ],
};
