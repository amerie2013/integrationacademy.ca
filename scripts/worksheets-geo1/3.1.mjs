import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "3.1",
  title: "Translations",
  intro: "A translation slides every point of a figure the same distance in the same direction, and that single shared shift is why translations are rigid motions — distance, angle measure, and orientation all survive intact. This section goes past applying a rule to one point: it asks you to prove algebraically why distance is preserved, translate an entire triangle vertex by vertex, work backward from an image to a preimage, and combine two translations into one equivalent vector.",
  examples: [
    ["Example 1: Translate a point using vector notation",
      "Translate $(2, 3)$ by $\\langle 4, -1 \\rangle$. Find the image point.",
      fig(coordPts([{ x: 2, y: 3, label: "(2,3)" }, { x: 6, y: 2, label: "(6,2)", color: "#2563eb" }], { xmin: -1, xmax: 8, ymin: -1, ymax: 6 }), "Every point shifts by the same vector ⟨4,−1⟩.") +
      "A translation vector $\\langle a,b \\rangle$ shifts every point by adding $a$ to the $x$-coordinate and $b$ to the $y$-coordinate.<br>" +
      "$(2+4,\\ 3+(-1))$.<br>" +
      "<b>Answer:</b> $(6, 2)$."],

    ["Example 2: Apply a translation rule",
      "The rule $(x, y) \\rightarrow (x + 3, y - 5)$ translates a figure. Find the image of $(1, 8)$.",
      "Substitute the point's coordinates directly into the rule: $x=1 \\Rightarrow x+3=4$; $y=8 \\Rightarrow y-5=3$.<br>" +
      "<b>Answer:</b> $(4, 3)$."],

    ["Example 3: Find the vector, then apply it elsewhere",
      "$(1, 2)$ maps to $(5, 6)$ under a translation. Find the vector, then use it to find the image of $(0,0)$.",
      "Subtract coordinates to see how far the point moved: vector $= \\langle 5-1,\\ 6-2 \\rangle = \\langle 4, 4 \\rangle$.<br>" +
      "Apply that same vector to $(0,0)$: $(0+4,\\ 0+4)$.<br>" +
      "<b>Answer:</b> vector $\\langle 4,4 \\rangle$; the image of $(0,0)$ is $(4,4)$."],

    ["Example 4: Why translations preserve distance",
      "Explain, using coordinates, why a translation never changes the distance between two points.",
      "Let $P_1=(x_1,y_1)$ and $P_2=(x_2,y_2)$, translated by $\\langle a,b\\rangle$ to $P_1'=(x_1+a,\\,y_1+b)$ and $P_2'=(x_2+a,\\,y_2+b)$.<br>" +
      "The horizontal difference becomes $(x_2+a)-(x_1+a)=x_2-x_1$ — the $a$'s cancel; the vertical difference cancels the same way.<br>" +
      "Since both coordinate differences are unchanged, the distance formula gives the exact same result before and after.<br>" +
      "<b>Answer:</b> The shared shift cancels out when you subtract to find the difference, so distance is always preserved."],

    ["Example 5: Orientation is preserved",
      "Does a translation reverse a figure's orientation (the clockwise vs. counterclockwise order of its vertices)? Explain.",
      "Orientation depends only on the rotational order of the vertices, not on where the figure sits — sliding a shape without turning or flipping it cannot swap clockwise for counterclockwise.<br>" +
      "<b>Answer:</b> No — translations preserve orientation (unlike reflections, which reverse it)."],

    ["Example 6: Translate a whole triangle",
      "$\\triangle ABC$ has $A(0,0)$, $B(2,0)$, $C(0,3)$. Translate by $\\langle 1, 2 \\rangle$. Find all three image vertices.",
      fig(coordPts([{ x: 0, y: 0, label: "A" }, { x: 2, y: 0, label: "B" }, { x: 0, y: 3, label: "C" }, { x: 1, y: 2, label: "A'", color: "#2563eb" }, { x: 3, y: 2, label: "B'", color: "#2563eb" }, { x: 1, y: 5, label: "C'", color: "#2563eb" }], { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }), "Every vertex shifts by the same vector ⟨1,2⟩.") +
      "Add $\\langle1,2\\rangle$ to every vertex: $A'=(0+1,0+2)$; $B'=(2+1,0+2)$; $C'=(0+1,3+2)$.<br>" +
      "<b>Answer:</b> $A'(1,2)$, $B'(3,2)$, $C'(1,5)$ — same size and shape as $\\triangle ABC$, just shifted."],

    ["Example 7: Decompose a slide into left/right and up/down",
      "Describe the translation $(x, y) \\rightarrow (x - 4, y + 6)$ using direction words.",
      "The $x$-coordinate decreases by $4$: shift <b>left $4$</b>. The $y$-coordinate increases by $6$: shift <b>up $6$</b>.<br>" +
      "<b>Answer:</b> Left $4$ units and up $6$ units — equivalent to vector $\\langle -4, 6 \\rangle$."],

    ["Example 8: Find the preimage",
      "Under the rule $(x,y) \\rightarrow (x+2,\\, y-3)$, a point $P$ maps to $(2, 4)$. Find $P$.",
      "Reverse the rule by subtracting instead of adding: $x = 2-2=0$; $y = 4-(-3)=7$.<br>" +
      "<b>Check:</b> $(0+2,\\ 7-3) = (2,4)$. ✓<br>" +
      "<b>Answer:</b> $P = (1, 7)$."],

    ["Example 9: Combine two translations",
      "A robot starts at $(0,0)$. It moves by vector $\\langle 3, 4 \\rangle$, then by vector $\\langle -1, 2 \\rangle$. Find its final position, and the single vector that would take it there directly.",
      fig(coordPts([{ x: 0, y: 0, label: "start" }, { x: 3, y: 4, label: "step 1" }, { x: 2, y: 6, label: "final", color: "#2563eb" }], { xmin: -2, xmax: 5, ymin: -1, ymax: 7 }), "Two moves in a row equal one combined vector.") +
      "Apply the first move: $(0,0)+\\langle3,4\\rangle=(3,4)$.<br>" +
      "Apply the second move: $(3,4)+\\langle-1,2\\rangle=(2,6)$.<br>" +
      "A single equivalent vector is the sum of the two: $\\langle3,4\\rangle+\\langle-1,2\\rangle=\\langle2,6\\rangle$, matching the direct path from $(0,0)$ to $(2,6)$.<br>" +
      "<b>Answer:</b> Final position $(2,6)$; combined vector $\\langle2,6\\rangle$."],

    ["Example 10: Midpoint travels along with the segment",
      "$\\overline{AB}$ has midpoint $M$. If the segment is translated by $\\langle a,b\\rangle$, show that the image of $M$ is the midpoint of the image segment $\\overline{A'B'}$.",
      "Let $A=(x_1,y_1)$, $B=(x_2,y_2)$, so $M=\\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2}\\right)$.<br>" +
      "After translating, $A'=(x_1+a,\\,y_1+b)$ and $B'=(x_2+a,\\,y_2+b)$, so the midpoint of $\\overline{A'B'}$ is $\\left(\\dfrac{x_1+x_2}{2}+a,\\ \\dfrac{y_1+y_2}{2}+b\\right)$.<br>" +
      "That is exactly $M$ shifted by $\\langle a,b\\rangle$ — the midpoint moves along with the segment.<br>" +
      "<b>Answer:</b> The image of the midpoint equals the midpoint of the image; translations preserve midpoints."],
  ],
  questions: [
    ["Problem 1: Translate", "$(3, 1)$ by $\\langle 2, 5 \\rangle$?", "$(5, 6)$"],
    ["Problem 2: Rule", "$(x, y) \\rightarrow (x - 3, y + 4)$; image of $(4, 0)$?", "$(1, 4)$"],
    ["Problem 3: Vector", "$(0, 0)$ to $(3, -2)$. Vector?", "$\\langle 3, -2 \\rangle$"],
    ["Problem 4: Rigid?", "Is a translation a rigid motion?", "Yes"],
    ["Problem 5: Orientation", "Does translation reverse orientation?", "No"],
    ["Problem 6: Image", "$(-1, 5)$ by $\\langle 4, -3 \\rangle$?", "$(3, 2)$"],
    ["Problem 7: Direction", "$(x, y) \\rightarrow (x + 7, y)$ moves how?", "Right $7$"],
    ["Problem 8: Direction", "$(x, y) \\rightarrow (x, y - 2)$ moves how?", "Down $2$"],
    ["Problem 9: Preimage", "Rule $(x+1, y-3)$; image $(2, 4)$. Preimage?", "$(1, 7)$"],
    ["Problem 10: Triangle", "$A(1,1)$ by $\\langle -2, 3 \\rangle$?", "$(-1, 4)$"],
    ["Problem 11: Vector", "$(4, 7)$ to $(4, 1)$. Vector?", "$\\langle 0, -6 \\rangle$"],
    ["Problem 12: Congruence", "Is a figure congruent to its translate?", "Yes"],
    ["Problem 13: Rule", "Translate left $5$, up $2$: rule?", "$(x, y) \\rightarrow (x - 5, y + 2)$"],
    ["Problem 14: Challenge — translate a triangle", "Triangle $D(-1,2)$, $E(3,2)$, $F(1,-2)$ is translated by $\\langle -2, 5 \\rangle$. Find all three image vertices.", "$D'(-3,7)$, $E'(1,7)$, $F'(-1,3)$"],
    ["Problem 15: Challenge — midpoint two ways", "Segment endpoints $(2,-3)$ and $(6,1)$ have midpoint $(4,-1)$. Translate by $\\langle -5,2 \\rangle$. Find the new midpoint (a) by translating the midpoint directly and (b) by translating both endpoints and averaging. Confirm they match.", "Both methods give $(-1, 1)$"],
  ],
};
