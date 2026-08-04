const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.2",
  title: "Proof: Congruent Segments, Angles & Perpendiculars",
  intro: "The building blocks of synthetic geometry proof — midpoints, bisectors, perpendiculars, and the reasoning of a two-column proof.",
  lesson: [
    ["Building blocks", R`A <b>midpoint</b> divides a segment into two congruent parts. An <b>angle bisector</b> splits an angle into two congruent angles. A <b>perpendicular bisector</b> is perpendicular to a segment at its midpoint.`],
    ["Two-column proof", R`Each step is a statement justified by a reason: given information, definitions, or postulates/theorems. Common reasons include the reflexive property, definition of midpoint/bisector, vertical angles, and segment/angle addition.`],
    ["Perpendiculars & distance", R`Perpendicular lines meet at $90^\circ$. The distance from a point to a line is measured along the perpendicular. Every point on the perpendicular bisector of a segment is <b>equidistant</b> from its endpoints.`],
  ],
  examples: [
    ["Example 1: Midpoint", R`$M$ is the midpoint of $\overline{AB}$ with $AB=12$. Find $AM$.`, R`$AM=\tfrac12(12)=6$.`],
    ["Example 2: Angle bisector", R`A ray bisects an $80^\circ$ angle. Find each part.`, R`$40^\circ$ each.`],
    ["Example 3: Reflexive property", R`Why is $\overline{AB}\cong\overline{AB}$?`, R`By the reflexive property — a segment is congruent to itself (common in proofs sharing a side).`],
    ["Example 4: Perpendicular bisector", R`A point $P$ lies on the perpendicular bisector of $\overline{AB}$. What can you conclude?`, R`$PA=PB$ — $P$ is equidistant from $A$ and $B$.`],
    ["Example 5: Congruent linear pair", R`Two angles form a linear pair and are congruent. Find each.`, R`They sum to $180^\circ$ and are equal, so each is $90^\circ$ (the sides are perpendicular).`],
  ],
  questions: [
    ["Problem 1", R`$M$ midpoint of $\overline{AB}$, $AB=20$. Find $AM$.`, R`$10$`],
    ["Problem 2", R`A bisector splits a $100^\circ$ angle into?`, R`$50^\circ$ each`],
    ["Problem 3", R`Perpendicular lines meet at what angle?`, R`$90^\circ$`],
    ["Problem 4", R`A segment is congruent to itself by which property?`, R`reflexive`],
    ["Problem 5", R`A perpendicular bisector passes through the ___ of the segment.`, R`midpoint`],
    ["Problem 6", R`If $AM=MB$ then $M$ is the ___ of $\overline{AB}$.`, R`midpoint`],
    ["Problem 7", R`Points on the perpendicular bisector of $\overline{AB}$ are equidistant from?`, R`$A$ and $B$`],
    ["Problem 8", R`Distance from a point to a line is measured along the ___.`, R`perpendicular`],
  ],
};
