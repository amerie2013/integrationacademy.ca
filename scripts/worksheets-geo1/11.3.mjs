import { fig, incircleFig, circumcircleFig, triABC } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "11.3",
  title: "Incircle and Circumcircle",
  intro: "Every triangle has exactly one <b>incenter</b> (where the three angle bisectors meet, always inside the triangle) and exactly one <b>circumcenter</b> (where the three perpendicular bisectors of the sides meet, which can be inside, on, or outside the triangle). The incenter is the center of the <b>incircle</b> — the largest circle that fits inside the triangle, tangent to all three sides — with radius $r=\\dfrac{\\text{Area}}{s}$ ($s$ = semiperimeter). The circumcenter is the center of the <b>circumcircle</b> — the unique circle through all three vertices — with radius $R=\\dfrac{abc}{4\\cdot\\text{Area}}$. This worksheet constructs both centers and computes both radii, including with Heron's Formula for the area.",
  examples: [
    ["Example 1: Constructing the incenter — full justified steps",
      "Construct the incenter of $\\triangle ABC$.",
      fig(incircleFig(), "The three angle bisectors of any triangle are concurrent — they always meet at one point, the incenter I.") +
      "<ol>" +
      "<li>Construct the bisector of $\\angle A$ (Lesson 11.2's method).</li>" +
      "<li>Construct the bisector of $\\angle B$.</li>" +
      "<li>The two bisectors intersect at a point — label it $I$. (The third bisector, from $\\angle C$, will automatically pass through $I$ too — only two are needed to locate it.)</li>" +
      "</ol>" +
      "<b>Justification:</b> $I$ lies on the bisector of $\\angle A$, so it is equidistant from sides $\\overline{AB}$ and $\\overline{AC}$ (Angle Bisector Theorem). $I$ also lies on the bisector of $\\angle B$, so it is equidistant from $\\overline{AB}$ and $\\overline{BC}$. Combining both, $I$ is equidistant from <i>all three</i> sides — exactly what's needed to be the center of an inscribed circle.<br>" +
      "<b>Answer:</b> $I$, the incenter, is equidistant from all three sides."],

    ["Example 2: Constructing the circumcenter — full justified steps",
      "Construct the circumcenter of $\\triangle ABC$.",
      fig(circumcircleFig(), "The three perpendicular bisectors of the sides are also always concurrent — they meet at the circumcenter O.") +
      "<ol>" +
      "<li>Construct the perpendicular bisector of $\\overline{AB}$ (Lesson 11.2's method).</li>" +
      "<li>Construct the perpendicular bisector of $\\overline{BC}$.</li>" +
      "<li>The two bisectors intersect at a point — label it $O$. (The perpendicular bisector of $\\overline{AC}$ will also pass through $O$.)</li>" +
      "</ol>" +
      "<b>Justification:</b> $O$ lies on the perpendicular bisector of $\\overline{AB}$, so $OA=OB$ (Perpendicular Bisector Theorem). $O$ also lies on the perpendicular bisector of $\\overline{BC}$, so $OB=OC$. Combining both, $OA=OB=OC$ — $O$ is equidistant from all three vertices, so a circle centered at $O$ through any one vertex passes through all three.<br>" +
      "<b>Answer:</b> $O$, the circumcenter, is equidistant from all three vertices."],

    ["Example 3: Inradius via Heron's Formula",
      "A triangle has sides $13$, $14$, $15$. Find its inradius.",
      "<b>Step 1 — semiperimeter:</b> $s=\\dfrac{13+14+15}{2}=\\dfrac{42}{2}=21$.<br>" +
      "<b>Step 2 — area (Heron's Formula):</b> $\\text{Area}=\\sqrt{s(s-a)(s-b)(s-c)}=\\sqrt{21(8)(7)(6)}=\\sqrt{7056}=84$.<br>" +
      "<b>Step 3 — inradius:</b> $r=\\dfrac{\\text{Area}}{s}=\\dfrac{84}{21}=4$.<br>" +
      "<b>Answer:</b> $r=4$."],

    ["Example 4: Circumradius via the $\\dfrac{abc}{4K}$ formula",
      "Using the same triangle from Example 3 (sides $13,14,15$; area $84$), find the circumradius.",
      "$R=\\dfrac{abc}{4\\cdot\\text{Area}}=\\dfrac{13\\times14\\times15}{4(84)}=\\dfrac{2730}{336}$.<br>" +
      "Simplify: $\\dfrac{2730}{336}=\\dfrac{65}{8}$ (dividing by $42$).<br>" +
      "<b>Answer:</b> $R=\\dfrac{65}{8}=8.125$."],

    ["Example 5: Right triangle — circumcenter at the hypotenuse's midpoint",
      "A right triangle has legs $6$ and $8$ (hypotenuse $10$). Find its circumradius.",
      "<b>Thales' Theorem</b> (converse): the circumcenter of any right triangle is always the midpoint of the hypotenuse, so the circumradius is always half the hypotenuse.<br>" +
      "$R=\\dfrac{10}{2}=5$.<br>" +
      "<b>Check with the formula:</b> $\\text{Area}=\\dfrac12(6)(8)=24$; $R=\\dfrac{6\\times8\\times10}{4(24)}=\\dfrac{480}{96}=5$. ✓<br>" +
      "<b>Answer:</b> $R=5$."],

    ["Example 6: Why the circumcenter moves inside/outside",
      "Explain why the circumcenter is inside an acute triangle but outside an obtuse triangle.",
      "Each perpendicular bisector is perpendicular to a side at its midpoint. In an acute triangle, all three angles are less than $90^\\circ$, which keeps all three perpendicular bisectors crossing within the triangle's interior. In an obtuse triangle, the obtuse angle \"pushes\" the triangle's shape so far that the perpendicular bisectors of the two sides forming that angle only meet <i>outside</i> the triangle, on the far side of the longest side. (In a right triangle, this boundary case lands exactly on the hypotenuse — Example 5.)<br>" +
      "<b>Answer:</b> acute $\\Rightarrow$ inside; right $\\Rightarrow$ on the hypotenuse's midpoint; obtuse $\\Rightarrow$ outside."],

    ["Example 7: Equilateral triangle — incenter equals circumcenter",
      "An equilateral triangle has side length $6$. Find its inradius and circumradius, and describe how they compare.",
      "For an equilateral triangle of side $s$: $r=\\dfrac{s}{2\\sqrt3}$ and $R=\\dfrac{s}{\\sqrt3}$.<br>" +
      "$r=\\dfrac{6}{2\\sqrt3}=\\dfrac{3}{\\sqrt3}=\\sqrt3$.<br>" +
      "$R=\\dfrac{6}{\\sqrt3}=2\\sqrt3$.<br>" +
      "Notice $R=2r$ exactly ($2\\sqrt3=2(\\sqrt3)$) — this $R=2r$ relationship is special to equilateral triangles, and by symmetry the incenter and circumcenter are the very same point.<br>" +
      "<b>Answer:</b> $r=\\sqrt3$; $R=2\\sqrt3$; both centers coincide."],

    ["Example 8: Finishing the incircle after locating $I$",
      "After constructing the incenter $I$, describe the remaining steps to draw the actual incircle.",
      "<ol>" +
      "<li>From $I$, construct a perpendicular segment to any one side (e.g., drop a perpendicular from $I$ to $\\overline{AB}$, meeting it at point $F$).</li>" +
      "<li>Set the compass to radius $IF$.</li>" +
      "<li>Centered at $I$, draw the circle — it will be tangent to all three sides automatically, since $I$ is equidistant from all three (Example 1).</li>" +
      "</ol>" +
      "<b>Answer:</b> measure the perpendicular distance from $I$ to one side; that distance is the radius for the incircle."],

    ["Example 9: Word problem — the largest circular flower bed",
      "A triangular garden has sides $9$ m, $10$ m, and $17$ m. Find the radius of the largest circular flower bed that fits entirely inside it (tangent to all three fences).",
      "This is the inradius. <b>Step 1 — semiperimeter:</b> $s=\\dfrac{9+10+17}{2}=18$.<br>" +
      "<b>Step 2 — area:</b> $\\text{Area}=\\sqrt{18(9)(8)(1)}=\\sqrt{1296}=36$.<br>" +
      "<b>Step 3 — inradius:</b> $r=\\dfrac{36}{18}=2$.<br>" +
      "<b>Answer:</b> the largest flower bed has radius $2$ m."],

    ["Example 10: Word problem — equidistant cell tower",
      "Three towns $A$, $B$, $C$ (not in a line) need a single cell tower built equidistant from all three. Describe how to locate it, and what determines the tower's coverage radius.",
      "The set of points equidistant from all three towns is exactly the <b>circumcenter</b> of $\\triangle ABC$: construct the perpendicular bisectors of any two sides (say $\\overline{AB}$ and $\\overline{BC}$); their intersection is the tower's location. The distance from that point to any one town (they're all equal) is the circumradius $R$, which is also the minimum broadcast radius needed to reach all three towns.<br>" +
      "<b>Answer:</b> build at the circumcenter; the required coverage radius is the circumradius $R$."],
  ],
  questions: [
    ["Problem 1: Incenter", "The incenter is the intersection of which three lines?", "The three angle bisectors"],
    ["Problem 2: Circumcenter", "The circumcenter is the intersection of which three lines?", "The perpendicular bisectors of the three sides"],
    ["Problem 3: Incircle", "What is the incircle tangent to?", "All three sides of the triangle"],
    ["Problem 4: Circumcircle", "What does the circumcircle pass through?", "All three vertices of the triangle"],
    ["Problem 5: Right triangle", "Where is the circumcenter of a right triangle located?", "At the midpoint of the hypotenuse"],
    ["Problem 6: Obtuse triangle", "Where is the circumcenter of an obtuse triangle located?", "Outside the triangle"],
    ["Problem 7: Acute triangle", "Where is the circumcenter of an acute triangle located?", "Inside the triangle"],
    ["Problem 8: Incenter location", "Is the incenter ever outside the triangle?", "No — it is always inside"],
    ["Problem 9: Equilateral triangle", "In an equilateral triangle, how do the incenter and circumcenter compare?", "They are the same point"],
    ["Problem 10: Inradius", "A triangle has sides $5$, $12$, $13$. Find its inradius.", "$r=2$"],
    ["Problem 11: Circumradius", "The same triangle ($5,12,13$) — find its circumradius, and check it two ways.", "$R=\\dfrac{13}{2}$ (matches half the hypotenuse, since it's a right triangle)"],
    ["Problem 12: Finish the incircle", "After locating the incenter, what additional measurement is needed to draw the incircle?", "The perpendicular distance from the incenter to any one side"],
    ["Problem 13: Finish the circumcircle", "After locating the circumcenter, what additional measurement is needed to draw the circumcircle?", "The distance from the circumcenter to any one vertex"],
    ["Problem 14: Word problem", "A triangular plot has sides $7$, $15$, $20$. Find the radius of the largest circular pond that fits entirely inside it.", "$r=2$"],
    ["Problem 15: Challenge", "Prove that $r=\\dfrac{\\text{Area}}{s}$ for any triangle by connecting the incenter $I$ to all three vertices, splitting the triangle into three smaller triangles.", "Each small triangle has height $r$ (the perpendicular distance from $I$ to that side) and base equal to that side; summing their areas gives $\\text{Area}=\\dfrac12r(a+b+c)=\\dfrac12r(2s)=rs$, so $r=\\dfrac{\\text{Area}}{s}$"],
  ],
};
