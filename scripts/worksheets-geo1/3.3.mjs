import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "3.3",
  title: "Rotations",
  intro: "A rotation turns every point of a figure through the same angle about a fixed center, which is why every image point stays exactly as far from the center as its preimage did. Beyond the three memorized rules for rotating about the origin ($90^\\circ$, $180^\\circ$, $270^\\circ$), this section extends rotation to a center that is <i>not</i> the origin (translate the center to the origin, rotate, translate back), works backward to identify an unknown rotation angle from a point and its image, and previews how repeated rotations connect to rotational symmetry in Section 3.5.",
  examples: [
    ["Example 1: $90^\\circ$ counterclockwise about the origin",
      "Rotate $(2, 1)$ $90^\\circ$ CCW about the origin, and explain where the rule $(x,y)\\to(-y,x)$ comes from.",
      fig(coordPts([{ x: 2, y: 1, label: "(2,1)" }, { x: -1, y: 2, label: "(-1,2)", color: "#2563eb" }], { xmin: -3, xmax: 4, ymin: -1, ymax: 4 }), "A quarter-turn CCW about the origin swaps coordinates and negates the new x.") +
      "Rule: a $90^\\circ$ CCW rotation about the origin sends $(x,y)\\to(-y,x)$ — swap the coordinates, then negate the new $x$.<br>" +
      "Apply it: $(2,1)\\to(-1,2)$.<br>" +
      "Check: both points are the same distance from the origin, $\\sqrt{2^2+1^2}=\\sqrt5=\\sqrt{(-1)^2+2^2}$. ✓<br>" +
      "<b>Answer:</b> $(-1, 2)$."],

    ["Example 2: $180^\\circ$ about the origin",
      "Rotate $(3, -4)$ $180^\\circ$ about the origin.",
      fig(coordPts([{ x: 3, y: -4, label: "(3,-4)" }, { x: -3, y: 4, label: "(-3,4)", color: "#2563eb" }], { xmin: -4, xmax: 4, ymin: -5, ymax: 5 }), "180° is a straight-through turn — negate both coordinates.") +
      "A $180^\\circ$ rotation is a half-turn, equivalent to two $90^\\circ$ turns in a row, which negates both coordinates: $(x,y)\\to(-x,-y)$.<br>" +
      "$(3,-4)\\to(-3,4)$.<br>" +
      "<b>Answer:</b> $(-3, 4)$."],

    ["Example 3: $270^\\circ$ counterclockwise about the origin",
      "Rotate $(2, 5)$ $270^\\circ$ CCW about the origin.",
      "Rule: $270^\\circ$ CCW (the same as $90^\\circ$ clockwise) sends $(x,y)\\to(y,-x)$.<br>" +
      "$(2,5)\\to(5,-2)$.<br>" +
      "<b>Answer:</b> $(5, -2)$."],

    ["Example 4: Rotate a whole triangle",
      "$\\triangle DEF$ has $D(1,2)$, $E(4,2)$, $F(1,5)$. Rotate $180^\\circ$ about the origin. Find all three image vertices.",
      fig(coordPts([{ x: 1, y: 2, label: "D" }, { x: 4, y: 2, label: "E" }, { x: 1, y: 5, label: "F" }, { x: -1, y: -2, label: "D'", color: "#2563eb" }, { x: -4, y: -2, label: "E'", color: "#2563eb" }, { x: -1, y: -5, label: "F'", color: "#2563eb" }], { xmin: -5, xmax: 5, ymin: -6, ymax: 6 }), "Every vertex negates both coordinates under a 180° turn.") +
      "Apply $(x,y)\\to(-x,-y)$ to each vertex: $D'=(-1,-2)$; $E'=(-4,-2)$; $F'=(-1,-5)$.<br>" +
      "<b>Answer:</b> $D'(-1,-2)$, $E'(-4,-2)$, $F'(-1,-5)$."],

    ["Example 5: Why rotations preserve distance",
      "Show algebraically that a $90^\\circ$ rotation about the origin preserves the distance between two points.",
      "Let $P_1=(x_1,y_1)$, $P_2=(x_2,y_2)$, rotated to $P_1'=(-y_1,x_1)$, $P_2'=(-y_2,x_2)$.<br>" +
      "The new coordinate differences are $-y_2-(-y_1) = -(y_2-y_1)$ and $x_2-x_1$ — the same two differences as before, just swapped and one sign-flipped.<br>" +
      "Since the distance formula squares both differences, the sign flip and the swap don't change the result: $(-(y_2-y_1))^2+(x_2-x_1)^2 = (x_2-x_1)^2+(y_2-y_1)^2$.<br>" +
      "<b>Answer:</b> The distance is identical before and after, so rotations preserve distance."],

    ["Example 6: Orientation is preserved",
      "Does a rotation reverse a figure's orientation, the way a reflection does? Explain.",
      "A rotation only turns a figure rigidly around a fixed point — it never flips the figure over, so the clockwise/counterclockwise order of its vertices stays the same.<br>" +
      "<b>Answer:</b> No — rotations preserve orientation, along with translations; only reflections (and glide reflections) reverse it."],

    ["Example 7: Rotating about a point other than the origin",
      "Rotate $(5, 3)$ $90^\\circ$ CCW about the center $(2, 3)$ (not the origin).",
      fig(coordPts([{ x: 2, y: 3, label: "center" }, { x: 5, y: 3, label: "(5,3)" }, { x: 2, y: 6, label: "(2,6)", color: "#2563eb" }], { xmin: -1, xmax: 6, ymin: -1, ymax: 7 }), "Shift the center to the origin, rotate, then shift back.") +
      "Step 1 — shift so the center is at the origin: subtract $(2,3)$ from the point: $(5-2,\\ 3-3)=(3,0)$.<br>" +
      "Step 2 — apply the $90^\\circ$ CCW rule $(x,y)\\to(-y,x)$: $(3,0)\\to(0,3)$.<br>" +
      "Step 3 — shift back by adding $(2,3)$: $(0+2,\\ 3+3)=(2,6)$.<br>" +
      "<b>Check:</b> distance from center to $(5,3)$ is $3$; distance from center to $(2,6)$ is $\\sqrt{0^2+3^2}=3$. ✓<br>" +
      "<b>Answer:</b> $(2, 6)$."],

    ["Example 8: Identify the rotation from a point and its image",
      "A point $(2,3)$ maps to $(-3,2)$ under a rotation about the origin. Which rotation is it?",
      "Compare to the three rules: $90^\\circ$ CCW gives $(x,y)\\to(-y,x)$, so $(2,3)\\to(-3,2)$ — an exact match.<br>" +
      "<b>Answer:</b> $90^\\circ$ counterclockwise (equivalently, $270^\\circ$ clockwise)."],

    ["Example 9: Composing two $90^\\circ$ rotations",
      "Rotate $(x,y)$ by $90^\\circ$ CCW, then rotate that image by another $90^\\circ$ CCW. Show the result matches the single $180^\\circ$ rule.",
      "First rotation: $(x,y)\\to(-y,x)$.<br>" +
      "Second rotation applied to $(-y,x)$: using the rule $(a,b)\\to(-b,a)$ with $a=-y,\\ b=x$, we get $(-x,-y)$.<br>" +
      "<b>Answer:</b> $(-x,-y)$ — exactly the $180^\\circ$ rule, confirming that two $90^\\circ$ turns combine into one $180^\\circ$ turn (a preview of composing transformations in Section 3.4)."],

    ["Example 10: From repeated rotation to rotational symmetry",
      "A figure looks unchanged after being rotated $72^\\circ$ about its center. How many such rotations are needed to complete a full $360^\\circ$ turn, and what does this preview about Section 3.5?",
      "Divide the full turn by the repeating angle: $360^\\circ \\div 72^\\circ = 5$.<br>" +
      "Preview: a figure that repeats every $72^\\circ$ has rotational symmetry of <b>order $5$</b> (like a regular pentagon) — Section 3.5 studies exactly this kind of repeat-angle counting.<br>" +
      "<b>Answer:</b> $5$ rotations of $72^\\circ$ complete the full turn."],
  ],
  questions: [
    ["Problem 1: $90^\\circ$ CCW", "Rotate $(3, 2)$ $90^\\circ$ CCW about origin.", "$(-2, 3)$"],
    ["Problem 2: $180^\\circ$", "Rotate $(5, -1)$ $180^\\circ$ about origin.", "$(-5, 1)$"],
    ["Problem 3: $270^\\circ$ CCW", "Rotate $(1, 4)$ $270^\\circ$ CCW about origin.", "$(4, -1)$"],
    ["Problem 4: $90^\\circ$ CW", "Rotate $(2, 3)$ $90^\\circ$ CW about origin.", "$(3, -2)$"],
    ["Problem 5: Rule $90^\\circ$ CCW", "$(x, y) \\rightarrow$ ?", "$(-y, x)$"],
    ["Problem 6: Rule $180^\\circ$", "$(x, y) \\rightarrow$ ?", "$(-x, -y)$"],
    ["Problem 7: Orientation", "Rotation reverse orientation?", "No"],
    ["Problem 8: Rigid?", "Is rotation a rigid motion?", "Yes"],
    ["Problem 9: $90^\\circ$ CCW", "Rotate $(-2, 5)$ $90^\\circ$ CCW.", "$(-5, -2)$"],
    ["Problem 10: $180^\\circ$", "Rotate $(-3, -6)$ $180^\\circ$.", "$(3, 6)$"],
    ["Problem 11: Equivalent", "$270^\\circ$ CCW equals how many degrees CW?", "$90^\\circ$ CW"],
    ["Problem 12: Center fixed", "Does the center of rotation move?", "No"],
    ["Problem 13: Congruent?", "Figure congruent to its rotate?", "Yes"],
    ["Problem 14: Challenge — rotate about another center", "Rotate $(6, 4)$ $90^\\circ$ CCW about the center $(3, 4)$ (not the origin).", "$(3, 7)$"],
    ["Problem 15: Challenge — identify the rotation", "A point $(4,-1)$ maps to $(1,4)$ under a rotation about the origin. Which rotation is it?", "$90^\\circ$ counterclockwise (rule $(x,y)\\to(-y,x)$: $(4,-1)\\to(1,4)$)"],
  ],
};
