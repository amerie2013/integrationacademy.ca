import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "3.2",
  title: "Reflections",
  intro: "A reflection flips a figure over a mirror line so that every point and its image are the same distance from the line, on opposite sides — which is why reflections preserve distance but reverse orientation, unlike translations. Beyond the four memorized rules ($x$-axis, $y$-axis, $y=x$, $y=-x$), this section covers reflecting over any horizontal or vertical line using a distance formula, proving algebraically why distance survives while orientation flips, and working backward to find the mirror line itself from a point and its image.",
  examples: [
    ["Example 1: Reflect over the $x$-axis",
      "Reflect $(3, 5)$ over the $x$-axis.",
      fig(coordPts([{ x: 3, y: 5, label: "(3,5)" }, { x: 3, y: -5, label: "(3,-5)", color: "#2563eb" }], { xmin: -1, xmax: 6, ymin: -6, ymax: 6 }), "Flipping over the x-axis keeps x the same and negates y.") +
      "Reflecting over the $x$-axis keeps $x$ the same and negates $y$ — the point flips vertically, landing the same distance below the axis as it started above.<br>" +
      "$(3,5) \\rightarrow (3,-5)$.<br>" +
      "<b>Answer:</b> $(3, -5)$."],

    ["Example 2: Reflect over the $y$-axis",
      "Reflect $(3, 5)$ over the $y$-axis.",
      "Reflecting over the $y$-axis keeps $y$ the same and negates $x$.<br>" +
      "$(3,5) \\rightarrow (-3,5)$.<br>" +
      "<b>Answer:</b> $(-3, 5)$."],

    ["Example 3: Reflect over $y = x$",
      "Reflect $(2, 7)$ over $y = x$.",
      fig(coordPts([{ x: 2, y: 7, label: "(2,7)" }, { x: 7, y: 2, label: "(7,2)", color: "#2563eb" }], { xmin: -1, xmax: 9, ymin: -1, ymax: 9 }), "Reflecting over y = x swaps the coordinates.") +
      "The mirror line $y=x$ treats horizontal and vertical distance symmetrically, so reflecting over it swaps the coordinates.<br>" +
      "$(2,7) \\rightarrow (7,2)$.<br>" +
      "<b>Answer:</b> $(7, 2)$."],

    ["Example 4: Reflect over $y = -x$",
      "Reflect $(4, 1)$ over $y = -x$.",
      "Reflecting over $y=-x$ swaps the coordinates <i>and</i> negates both (the extra negation accounts for the line's negative slope).<br>" +
      "$(4,1) \\rightarrow (-1,-4)$.<br>" +
      "<b>Answer:</b> $(-1, -4)$."],

    ["Example 5: Reflect over a vertical line",
      "Reflect $(1, 3)$ over the line $x = 2$.",
      "For a vertical mirror at $x=k$, $y$ stays the same, and the new $x$-coordinate is found with $x' = 2k - x$ (the image is as far past $k$ as the original was before it).<br>" +
      "$x' = 2(2) - 1 = 3$.<br>" +
      "<b>Answer:</b> $(3, 3)$."],

    ["Example 6: Reflect over a horizontal line",
      "Reflect $(5, 1)$ over the line $y = 3$.",
      "For a horizontal mirror at $y=k$, $x$ stays the same, and $y' = 2k - y$.<br>" +
      "$y' = 2(3) - 1 = 5$.<br>" +
      "<b>Answer:</b> $(5, 5)$."],

    ["Example 7: Distance preserved, orientation reversed",
      "Explain why a reflection preserves distances between points but reverses orientation.",
      "Reflecting over the $x$-axis sends $(x,y)\\to(x,-y)$. For two points $P_1=(x_1,y_1)$, $P_2=(x_2,y_2)$, the horizontal difference $x_2-x_1$ is unchanged, and the vertical difference becomes $-(y_2-y_1)$ — same size, opposite sign — so the (squared) distance formula gives an identical result.<br>" +
      "Orientation flips because a mirror image is like viewing a shape through glass: tracing clockwise around the original becomes counterclockwise around the image whenever exactly one coordinate direction is negated.<br>" +
      "<b>Answer:</b> Distance survives because squaring erases the sign flip; orientation reverses because exactly one direction is negated."],

    ["Example 8: Reflect a whole triangle",
      "$\\triangle ABC$ has $A(1,1)$, $B(4,1)$, $C(1,3)$. Reflect over the $y$-axis. Find all three image vertices.",
      fig(coordPts([{ x: 1, y: 1, label: "A" }, { x: 4, y: 1, label: "B" }, { x: 1, y: 3, label: "C" }, { x: -1, y: 1, label: "A'", color: "#2563eb" }, { x: -4, y: 1, label: "B'", color: "#2563eb" }, { x: -1, y: 3, label: "C'", color: "#2563eb" }], { xmin: -5, xmax: 5, ymin: -1, ymax: 4 }), "Every vertex negates its x-coordinate.") +
      "Negate the $x$-coordinate of each vertex, keeping $y$ the same: $A'=(-1,1)$; $B'=(-4,1)$; $C'=(-1,3)$.<br>" +
      "<b>Answer:</b> $A'(-1,1)$, $B'(-4,1)$, $C'(-1,3)$ — the mirror image, same size and shape."],

    ["Example 9: Find the line of reflection",
      "A point $(2,3)$ reflects to $(2,9)$. Find the equation of the line of reflection.",
      fig(coordPts([{ x: 2, y: 3, label: "(2,3)" }, { x: 2, y: 9, label: "(2,9)", color: "#2563eb" }, { x: 2, y: 6, label: "midpoint", color: "#15803d" }], { xmin: -1, xmax: 5, ymin: 0, ymax: 11 }), "The mirror line is the perpendicular bisector of the segment joining a point and its image.") +
      "The line of reflection is always the perpendicular bisector of the segment joining a point and its image.<br>" +
      "Both points share $x=2$, so the segment is vertical, making its perpendicular bisector horizontal.<br>" +
      "Find the midpoint's $y$-coordinate: $y = \\dfrac{3+9}{2} = 6$.<br>" +
      "<b>Answer:</b> The line of reflection is $y = 6$."],

    ["Example 10: Reflecting twice over the same line",
      "A point is reflected over the $x$-axis, then that image is reflected over the $x$-axis again. What is the net result, and why?",
      "First reflection: $(x,y) \\rightarrow (x,-y)$. Second reflection over the same line: $(x,-y) \\rightarrow (x, -(-y)) = (x,y)$.<br>" +
      "The two sign flips cancel, returning every point to its original location.<br>" +
      "<b>Answer:</b> The net result is the identity transformation — reflecting twice over the <i>same</i> line always undoes itself, a preview of composed transformations in Section 3.4."],
  ],
  questions: [
    ["Problem 1: $x$-axis", "Reflect $(4, -2)$ over $x$-axis.", "$(4, 2)$"],
    ["Problem 2: $y$-axis", "Reflect $(-3, 6)$ over $y$-axis.", "$(3, 6)$"],
    ["Problem 3: $y = x$", "Reflect $(5, 1)$ over $y = x$.", "$(1, 5)$"],
    ["Problem 4: $y = -x$", "Reflect $(2, 3)$ over $y = -x$.", "$(-3, -2)$"],
    ["Problem 5: Vertical", "Reflect $(0, 4)$ over $x = 1$.", "$(2, 4)$"],
    ["Problem 6: Horizontal", "Reflect $(3, 0)$ over $y = 2$.", "$(3, 4)$"],
    ["Problem 7: Orientation", "Reflection reverses orientation?", "Yes"],
    ["Problem 8: Congruent?", "Figure congruent to its reflection?", "Yes"],
    ["Problem 9: $x$-axis", "Reflect $(-1, -8)$ over $x$-axis.", "$(-1, 8)$"],
    ["Problem 10: $y$-axis", "Reflect $(7, -3)$ over $y$-axis.", "$(-7, -3)$"],
    ["Problem 11: Midpoint", "Segment joining a point to its image is bisected by what?", "The reflection line"],
    ["Problem 12: Over $x = 0$", "Reflecting over $x = 0$ is reflecting over which axis?", "$y$-axis"],
    ["Problem 13: Over $y = 0$", "Reflecting over $y = 0$ is reflecting over which axis?", "$x$-axis"],
    ["Problem 14: Challenge — reflect a triangle", "Triangle $P(1,1)$, $Q(4,1)$, $R(1,5)$ is reflected over the $y$-axis. Find all three image vertices.", "$P'(-1,1)$, $Q'(-4,1)$, $R'(-1,5)$"],
    ["Problem 15: Challenge — find the mirror line", "A point $(5,-2)$ reflects to $(5,8)$. Find the equation of the line of reflection.", "$y = 3$"],
  ],
};
