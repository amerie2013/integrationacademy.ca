import { fig, parallelTransversal } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "2.1",
  title: "Lines and Angles",
  intro: "A transversal crossing two lines creates eight angles, and the names — corresponding, alternate interior, alternate exterior, same-side interior — describe exact positional relationships, not vague location. Learning to read these positions correctly (interior vs. exterior, same side vs. opposite side of the transversal) is what makes Section 2.2's parallel-line theorems almost automatic once you get there. This section pushes past simple recall by asking you to classify a pair from a description, count angles across multiple lines, and work out every relationship a single angle has with all seven others.",
  examples: [
    ["Example 1: Setting up the figure",
      "Line $t$ is a transversal crossing lines $\\ell$ and $m$, creating angles $1$–$8$ as shown. List which angles are interior and which are exterior.",
      fig(parallelTransversal(), "Transversal t crosses lines ℓ and m, forming 8 angles.") +
      "A transversal is a line that crosses two or more coplanar lines at distinct points — here that's $t$, crossing $\\ell$ and $m$.<br>" +
      "Interior angles lie between $\\ell$ and $m$: at the $\\ell$ crossing those are $\\angle3,\\angle4$; at the $m$ crossing, $\\angle5,\\angle6$.<br>" +
      "Exterior angles lie outside the two lines: $\\angle1,\\angle2$ (above $\\ell$) and $\\angle7,\\angle8$ (below $m$).<br>" +
      "<b>Answer:</b> Interior: $\\angle3,\\angle4,\\angle5,\\angle6$; Exterior: $\\angle1,\\angle2,\\angle7,\\angle8$."],

    ["Example 2: Corresponding angles",
      "Explain what makes two angles \"corresponding,\" and name all four corresponding pairs in the figure.",
      "Corresponding angles occupy the <i>same relative position</i> at each intersection — same side of the transversal, and the same rotational corner, just at a different crossing.<br>" +
      "Matching corners: top-left↔top-left, top-right↔top-right, bottom-left↔bottom-left, bottom-right↔bottom-right.<br>" +
      "<b>Answer:</b> $(\\angle1,\\angle5)$, $(\\angle2,\\angle6)$, $(\\angle3,\\angle7)$, $(\\angle4,\\angle8)$."],

    ["Example 3: Alternate interior angles",
      "Which two pairs of angles are alternate interior angles? State the two conditions they must satisfy.",
      fig(parallelTransversal(), "∠3, ∠4 are interior at ℓ; ∠5, ∠6 are interior at m.") +
      "Two conditions must both hold: (1) both angles are interior (between $\\ell$ and $m$), and (2) they lie on <i>opposite</i> sides of the transversal.<br>" +
      "Interior angles are $\\angle3,\\angle4$ (at $\\ell$) and $\\angle5,\\angle6$ (at $m$); pairing opposite sides gives $\\angle3$ (left) with $\\angle6$ (right), and $\\angle4$ (right) with $\\angle5$ (left).<br>" +
      "<b>Answer:</b> $(\\angle3,\\angle6)$ and $(\\angle4,\\angle5)$."],

    ["Example 4: Same-side interior angles",
      "Which two pairs of angles are same-side (consecutive) interior angles?",
      "Same two \"interior\" angles as before, but now paired on the <i>same</i> side of the transversal instead of opposite sides.<br>" +
      "$\\angle3$ (left, at $\\ell$) pairs with $\\angle5$ (left, at $m$); $\\angle4$ (right, at $\\ell$) pairs with $\\angle6$ (right, at $m$).<br>" +
      "<b>Answer:</b> $(\\angle3,\\angle5)$ and $(\\angle4,\\angle6)$."],

    ["Example 5: Alternate exterior angles",
      "Which two pairs of angles are alternate exterior angles?",
      "Exterior angles are $\\angle1,\\angle2$ (above $\\ell$) and $\\angle7,\\angle8$ (below $m$); alternate means opposite sides of the transversal.<br>" +
      "$\\angle1$ (left, exterior) pairs with $\\angle8$ (right, exterior); $\\angle2$ (right, exterior) pairs with $\\angle7$ (left, exterior).<br>" +
      "<b>Answer:</b> $(\\angle1,\\angle8)$ and $(\\angle2,\\angle7)$."],

    ["Example 6: Vertical and linear pairs at one intersection",
      "At the intersection of $t$ and $\\ell$ alone, name the vertical pair(s) and all linear pairs among $\\angle1,\\angle2,\\angle3,\\angle4$.",
      fig(parallelTransversal(), "Two lines crossing always make 2 vertical pairs and 4 linear pairs.") +
      "At any single intersection of two lines, four angles are formed, giving 2 pairs directly across from each other (vertical) and 4 adjacent pairs (linear pairs).<br>" +
      "Vertical: $\\angle1 \\& \\angle4$, and $\\angle2 \\& \\angle3$.<br>" +
      "Linear pairs (adjacent, sum to $180^\\circ$): $(\\angle1,\\angle2)$, $(\\angle2,\\angle4)$, $(\\angle4,\\angle3)$, $(\\angle3,\\angle1)$.<br>" +
      "<b>Note:</b> this is true at <i>any</i> intersection of two lines — the transversal isn't even needed for this fact."],

    ["Example 7: Counting angles with more lines",
      "A transversal crosses $3$ distinct parallel lines (not just $2$). How many angles are formed in total, and how many at each intersection?",
      "Each place the transversal meets one of the lines is a single intersection of two lines, and two crossing lines always create $4$ angles.<br>" +
      "With $3$ lines being crossed, there are $3$ separate intersections.<br>" +
      "Total angles $= 4 \\times 3 = 12$.<br>" +
      "<b>Answer:</b> $12$ angles total — $4$ at each of the $3$ intersections."],

    ["Example 8: Interior vs. exterior by coordinates",
      "Horizontal lines $\\ell: y=6$ and $m: y=2$ are cut by a transversal. A point on the transversal has $y$-coordinate $4$. Is the angle at that point interior or exterior? What about a point with $y = 8$?",
      "Interior means between the two lines: since $2 < 4 < 6$, the point at $y=4$ sits between $m$ and $\\ell$ — <b>interior</b>.<br>" +
      "Since $8 > 6$, the point at $y=8$ is above both lines, outside the strip between them — <b>exterior</b>.<br>" +
      "<b>Answer:</b> $y=4$: interior; $y=8$: exterior."],

    ["Example 9: Classify from a description",
      "$\\angle4$ and $\\angle5$ are both interior angles, and they lie on the same side of transversal $t$. What are they called, and what will Section 2.2 say about them if $\\ell \\parallel m$?",
      "Both interior + same side of the transversal matches exactly one name: <b>same-side interior angles</b> (also called co-interior or consecutive interior angles).<br>" +
      "Preview: once $\\ell \\parallel m$ is established, Section 2.2 proves that same-side interior angles are <i>supplementary</i> — unlike corresponding or alternate pairs, which turn out to be congruent instead.<br>" +
      "<b>Answer:</b> Same-side interior angles."],

    ["Example 10: All seven relationships of one angle",
      "For $\\angle2$ in the figure, classify its relationship to each of $\\angle1, \\angle3, \\angle4, \\angle5, \\angle6, \\angle7, \\angle8$.",
      fig(parallelTransversal(), "Work outward from ∠2 to every other numbered angle.") +
      "Go through each angle relative to $\\angle2$ (top-right, exterior): $\\angle1$ is adjacent at $\\ell$ with outer sides forming a line — <b>linear pair</b>. $\\angle3$ is directly across at $\\ell$ — <b>vertical</b>. $\\angle4$ is the other angle adjacent to $\\angle2$ at $\\ell$ — <b>linear pair</b>.<br>" +
      "$\\angle5$ is on the opposite side of $t$ from $\\angle2$ <i>and</i> a different interior/exterior status — <b>no standard named relationship</b>. $\\angle6$ is the same corner position at the other intersection — <b>corresponding</b>. $\\angle7$ is exterior, opposite side of $t$ — <b>alternate exterior</b>. $\\angle8$ is exterior, same side of $t$ — <b>same-side exterior</b>.<br>" +
      "<b>Answer:</b> linear pair: $\\angle1,\\angle4$; vertical: $\\angle3$; corresponding: $\\angle6$; alternate exterior: $\\angle7$; same-side exterior: $\\angle8$; no special relationship: $\\angle5$."],
  ],
  questions: [
    ["Problem 1: Define transversal", "A line intersecting two coplanar lines at different points is a what?", "Transversal"],
    ["Problem 2: Corresponding", "Matching-position angles at two intersections are called what?", "Corresponding"],
    ["Problem 3: Alternate interior", "Interior angles on opposite sides of the transversal?", "Alternate interior"],
    ["Problem 4: Same-side interior", "Interior angles on the same side of the transversal?", "Same-side interior"],
    ["Problem 5: Alternate exterior", "Exterior angles on opposite sides of the transversal?", "Alternate exterior"],
    ["Problem 6: How many angles", "Two lines cut by a transversal form how many angles?", "$8$"],
    ["Problem 7: Interior location", "Interior angles lie where?", "Between the two lines"],
    ["Problem 8: Exterior location", "Exterior angles lie where?", "Outside the two lines"],
    ["Problem 9: Vertical at intersection", "At one intersection, opposite angles are what?", "Vertical"],
    ["Problem 10: Linear pair", "Adjacent angles on a straight line at an intersection form a what?", "Linear pair"],
    ["Problem 11: Name the pair", "Top-left at first intersection and top-left at second: what pair?", "Corresponding"],
    ["Problem 12: Name the pair", "Bottom-left interior and top-right interior: what pair?", "Alternate interior"],
    ["Problem 13: Coplanar", "Must the two lines cut by a transversal be coplanar for these angle pairs?", "Yes"],
    ["Problem 14: Challenge — three lines", "A single transversal crosses $4$ distinct parallel lines. How many intersection points and how many total angles are formed?", "$4$ intersection points; $16$ angles total"],
    ["Problem 15: Challenge — full classification", "In the standard $8$-angle figure, classify $\\angle6$'s relationship to $\\angle1$, and separately to $\\angle4$.", "$\\angle6$ & $\\angle1$: no special named relationship; $\\angle6$ & $\\angle4$: same-side interior angles"],
  ],
};
