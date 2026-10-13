import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "3.4",
  title: "Compositions of Transformations",
  intro: "A composition applies one rigid motion, then another, to build a single combined transformation — and the order in which you apply them can change the final image, which surprises many students used to addition being commutative. This section proves two elegant theorems (two reflections over parallel lines make a translation; two reflections over intersecting lines make a rotation through double the angle between them), defines the glide reflection precisely, and works both forward (apply a sequence) and backward (find the missing vector or angle from a known result).",
  examples: [
    ["Example 1: Order can matter",
      "Translate $(2,1)$ by $\\langle3,0\\rangle$, then reflect over the $y$-axis. Separately, reflect $(2,1)$ over the $y$-axis first, then translate by $\\langle3,0\\rangle$. Compare the two results.",
      fig(coordPts([{ x: 2, y: 1, label: "start" }, { x: -5, y: 1, label: "translate→reflect", color: "#2563eb" }, { x: 1, y: 1, label: "reflect→translate", color: "#15803d" }], { xmin: -6, xmax: 3, ymin: 0, ymax: 2 }), "Two different orders give two different final points.") +
      "Translate-then-reflect: $(2,1)+\\langle3,0\\rangle=(5,1)$; reflect over the $y$-axis: $(-5,1)$.<br>" +
      "Reflect-then-translate: reflect $(2,1)$ over the $y$-axis first: $(-2,1)$; then translate: $(-2+3,\\,1)=(1,1)$.<br>" +
      "<b>Answer:</b> $(-5,1)$ vs. $(1,1)$ — different points, so composition order is <b>not</b> generally commutative."],

    ["Example 2: A true glide reflection",
      "A glide reflection translates a figure along a line, then reflects it over that same line. Apply \"translate by $\\langle4,0\\rangle$, then reflect over the $x$-axis\" to the point $(1,2)$.",
      fig(coordPts([{ x: 1, y: 2, label: "(1,2)" }, { x: 5, y: 2, label: "after slide", color: "#2563eb" }, { x: 5, y: -2, label: "after flip", color: "#15803d" }], { xmin: -1, xmax: 6, ymin: -3, ymax: 3 }), "Slide, then flip over the same line — like alternating footprints.") +
      "Translate: $(1,2)+\\langle4,0\\rangle=(5,2)$.<br>" +
      "Reflect over the $x$-axis: $(5,2)\\to(5,-2)$.<br>" +
      "<b>Answer:</b> $(5,-2)$ — this slide-then-flip pattern is exactly how alternating footprints are modeled in geometry."],

    ["Example 3: Two reflections over parallel lines make a translation",
      "Reflect $(x,y)$ over the line $x=1$, then reflect that image over the line $x=4$. Show the net result is a translation, and find the vector.",
      "First reflection over $x=1$: $x' = 2(1)-x = 2-x$ ($y$ unchanged).<br>" +
      "Second reflection over $x=4$: $x'' = 2(4)-x' = 8-(2-x) = x+6$ ($y$ still unchanged).<br>" +
      "Net effect: $(x,y)\\to(x+6,\\,y)$ — a translation by $\\langle6,0\\rangle$, and $6 = 2\\times(4-1)$ is exactly twice the gap between the mirror lines.<br>" +
      "<b>Answer:</b> The composition is a translation by $\\langle6,0\\rangle$."],

    ["Example 4: Two reflections over intersecting lines make a rotation",
      "Two lines intersect at the origin at an angle of $25^\\circ$ between them. A figure is reflected over the first line, then over the second. What single transformation is equivalent, and through what angle?",
      "Theorem: reflecting over two intersecting lines is equivalent to a single rotation about their intersection point, through an angle <i>twice</i> the angle between the lines.<br>" +
      "$2\\times25^\\circ = 50^\\circ$.<br>" +
      "<b>Answer:</b> A $50^\\circ$ rotation about the origin (the direction depends on the order of the two reflections)."],

    ["Example 5: Why a composition of rigid motions is rigid",
      "Explain why applying one rigid motion followed by another always produces another rigid motion.",
      "Let $T_1$ preserve distance: for any $P,Q$, the distance from $T_1(P)$ to $T_1(Q)$ equals the distance from $P$ to $Q$.<br>" +
      "Apply a second rigid motion $T_2$ to those images: since $T_2$ also preserves distance, the distance from $T_2(T_1(P))$ to $T_2(T_1(Q))$ equals the distance from $T_1(P)$ to $T_1(Q)$ — which already equals the distance from $P$ to $Q$.<br>" +
      "Chaining the two equalities shows the overall composition preserves distance too.<br>" +
      "<b>Answer:</b> Distance is preserved at every stage, so the composition of any two rigid motions is itself a rigid motion."],

    ["Example 6: Rotate then reflect",
      "Apply a $90^\\circ$ CCW rotation about the origin to $(3,1)$, then reflect the result over the $x$-axis. Find the final image.",
      fig(coordPts([{ x: 3, y: 1, label: "(3,1)" }, { x: -1, y: 3, label: "after rotate", color: "#2563eb" }, { x: -1, y: -3, label: "after reflect", color: "#15803d" }], { xmin: -2, xmax: 4, ymin: -4, ymax: 4 }), "Apply each step in order, one at a time.") +
      "Rotate using $(x,y)\\to(-y,x)$: $(3,1)\\to(-1,3)$.<br>" +
      "Reflect over the $x$-axis: $(-1,3)\\to(-1,-3)$.<br>" +
      "<b>Answer:</b> $(-1,-3)$."],

    ["Example 7: Confirming the intersecting-lines theorem with numbers",
      "Reflect $(4,1)$ over the $x$-axis, then reflect that image over the line $y=x$. Show the net result matches a single rotation about the origin, and state the angle.",
      "Reflect over the $x$-axis: $(4,1)\\to(4,-1)$.<br>" +
      "Reflect over $y=x$ (swap coordinates): $(4,-1)\\to(-1,4)$.<br>" +
      "Compare to the rotation rules: $(4,1)\\to(-1,4)$ matches the $90^\\circ$ CCW rule $(x,y)\\to(-y,x)$ exactly.<br>" +
      "This confirms the theorem: the angle between the $x$-axis and $y=x$ is $45^\\circ$, and $2\\times45^\\circ=90^\\circ$.<br>" +
      "<b>Answer:</b> The composition equals a $90^\\circ$ CCW rotation about the origin."],

    ["Example 8: Reflecting twice over the same line",
      "Reflect $(3,7)$ over $y=x$, then reflect that image over $y=x$ again. Explain why you always return to the start.",
      "First reflection swaps coordinates: $(3,7)\\to(7,3)$.<br>" +
      "Second reflection over the same line swaps them right back: $(7,3)\\to(3,7)$.<br>" +
      "<b>Answer:</b> $(3,7)$ — reflecting twice over the <i>same</i> line always undoes itself and produces the identity transformation."],

    ["Example 9: Testing for a true glide reflection",
      "A transformation reflects over the $x$-axis, then translates by $\\langle6,0\\rangle$. Is this a true glide reflection? Justify using the definition, then find the image of $(2,3)$.",
      "Definition check: a glide reflection requires the translation vector to be <i>parallel</i> to the line of reflection. Here the mirror is the $x$-axis (horizontal), and $\\langle6,0\\rangle$ is also horizontal — the condition holds.<br>" +
      "Apply to $(2,3)$: reflect over the $x$-axis: $(2,-3)$; translate by $\\langle6,0\\rangle$: $(8,-3)$.<br>" +
      "<b>Answer:</b> Yes, this is a true glide reflection; the image of $(2,3)$ is $(8,-3)$."],

    ["Example 10: Reverse-engineer a composition",
      "A composition of \"reflect over the $y$-axis, then translate\" maps $(1,2)$ to $(-3,5)$. Find the translation vector, then use it to find the image of $(4,0)$ under the same composition.",
      fig(coordPts([{ x: 1, y: 2, label: "(1,2)" }, { x: -1, y: 2, label: "after reflect", color: "#2563eb" }, { x: -3, y: 5, label: "(-3,5)", color: "#15803d" }], { xmin: -4, xmax: 2, ymin: 0, ymax: 6 }), "Undo the reflection first to isolate the translation vector.") +
      "Undo the reflection to expose the translation: reflect $(1,2)$ over the $y$-axis gives $(-1,2)$.<br>" +
      "The translation must carry $(-1,2)$ to $(-3,5)$: vector $=\\langle-3-(-1),\\ 5-2\\rangle=\\langle-2,3\\rangle$.<br>" +
      "Apply the full composition to $(4,0)$: reflect over the $y$-axis: $(-4,0)$; translate by $\\langle-2,3\\rangle$: $(-6,3)$.<br>" +
      "<b>Answer:</b> translation vector $\\langle-2,3\\rangle$; image of $(4,0)$ is $(-6,3)$."],
  ],
  questions: [
    ["Problem 1: Order", "Does composition order always commute?", "No"],
    ["Problem 2: Translate then reflect", "$(1, 2)$ by $\\langle 0, 3 \\rangle$, then over $y$-axis.", "$(-1, 5)$"],
    ["Problem 3: Glide reflection", "Translation + reflection over a parallel line is a what?", "Glide reflection"],
    ["Problem 4: Two parallel reflections", "Equivalent to a what?", "Translation"],
    ["Problem 5: Two intersecting reflections", "Equivalent to a what?", "Rotation"],
    ["Problem 6: Two $90^\\circ$", "Two successive $90^\\circ$ CCW about origin = ?", "$180^\\circ$ rotation"],
    ["Problem 7: Rigid?", "Composition of isometries is an isometry?", "Yes"],
    ["Problem 8: Sequence", "$(3, 1)$: $180^\\circ$ about origin, then reflect over $x$-axis.", "$(-3, 1)$"],
    ["Problem 9: Sequence", "$(2, 4)$: reflect over $x$-axis, then over $y$-axis.", "$(-2, -4)$"],
    ["Problem 10: Same as $180^\\circ$?", "Reflect over both axes (either order) equals what rotation?", "$180^\\circ$"],
    ["Problem 11: Translate twice", "$\\langle 2, 0 \\rangle$ then $\\langle 0, 5 \\rangle$ equals what vector?", "$\\langle 2, 5 \\rangle$"],
    ["Problem 12: Orientation", "Glide reflection reverses orientation?", "Yes"],
    ["Problem 13: Identity", "Reflect twice over the same line. Result?", "Identity (original figure)"],
    ["Problem 14: Challenge — intersecting lines with numbers", "Reflect $(5,-2)$ over $y=x$, then reflect that image over the $x$-axis. Find the result and identify the equivalent rotation.", "$(-2,-5)$; a $90^\\circ$ clockwise rotation about the origin (twice the $45^\\circ$ angle between the lines)"],
    ["Problem 15: Challenge — reverse-engineer", "A composition of \"rotate $90^\\circ$ CCW about the origin, then translate\" maps $(1,0)$ to $(4,6)$. Find the translation vector, then find the image of $(0,2)$ under the same composition.", "vector $\\langle4,5\\rangle$; image of $(0,2)$ is $(2,5)$"],
  ],
};
