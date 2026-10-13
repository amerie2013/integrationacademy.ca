import { fig, elevationFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "6.5",
  title: "Angles of Elevation and Depression",
  intro: "The <b>angle of elevation</b> is measured upward from a horizontal line of sight to an object above; the <b>angle of depression</b> is measured downward from horizontal to an object below. Because the horizontal lines at the observer and at the object are parallel, and the line of sight is a transversal between them, the angle of elevation from the lower point equals the angle of depression from the higher point — they are alternate interior angles. Every elevation/depression problem becomes a right triangle: the horizontal distance is one leg, the height difference is the other leg, and $\\tan\\theta=\\dfrac{\\text{height}}{\\text{distance}}$ connects them (with $\\sin$ or $\\cos$ used when the hypotenuse — the actual line of sight — is involved instead). Some problems require an extra step, such as adding an observer's eye height, or subtracting two elevation readings to isolate the height of just part of an object (like a window). This worksheet models real situations with full multi-step right-triangle trigonometry.",
  examples: [
    ["Example 1: Basic elevation",
      "From a point $40$ ft from the base of a building, the angle of elevation to the top is $30^{\\circ}$. Find the building's height.",
      fig(elevationFig(), "Horizontal distance $=40$; angle of elevation $=30^{\\circ}$; height is the unknown leg.") +
      "Identify the right triangle: horizontal distance $=40$ (adjacent to $\\theta$), height $=h$ (opposite).<br>" +
      "Apply TOA: $\\tan 30^{\\circ}=\\dfrac{h}{40}$<br>" +
      "Solve: $h=40\\tan 30^{\\circ}=40\\cdot\\dfrac{1}{\\sqrt{3}}=\\dfrac{40\\sqrt{3}}{3}$ ft.<br>" +
      "<b>Answer:</b> $\\dfrac{40\\sqrt{3}}{3}$ ft."],

    ["Example 2: Depression to find distance",
      "From the top of a $50$ m cliff, the angle of depression to a boat is $25^{\\circ}$. Find the horizontal distance to the boat.",
      "The angle of depression from the cliff top equals the angle of elevation from the boat (alternate interior angles, parallel horizontals) $=25^{\\circ}$.<br>" +
      "In the right triangle: opposite (cliff height) $=50$, adjacent (distance) $=d$.<br>" +
      "Apply TOA: $\\tan 25^{\\circ}=\\dfrac{50}{d}$<br>" +
      "Solve: $d=\\dfrac{50}{\\tan 25^{\\circ}}$ m.<br>" +
      "<b>Answer:</b> $d=\\dfrac{50}{\\tan 25^{\\circ}}$ m."],

    ["Example 3: Elevation of $45^{\\circ}$",
      "From $20$ m away, the angle of elevation to the top of a pole is $45^{\\circ}$. Find the height.",
      "Identify the right triangle: horizontal distance $=20$ (adjacent to $\\theta$), height $=h$ (opposite).<br>" +
      "Apply TOA: $\\tan 45^{\\circ}=\\dfrac{h}{20}$<br>" +
      "Since $\\tan 45^{\\circ}=1$: $h=20\\times1=20$ m.<br>" +
      "<b>Answer:</b> $20$ m (at $45^{\\circ}$, height always equals distance)."],

    ["Example 4: Prove the equal-angles relationship",
      "Prove that the angle of elevation from a ground point $A$ to a point $B$ above equals the angle of depression from $B$ back to $A$.",
      "The horizontal line at $A$ and the horizontal line at $B$ are both horizontal, so they are parallel.<br>" +
      "Segment $\\overline{AB}$ (the line of sight) is a transversal cutting these two parallel horizontal lines.<br>" +
      "The angle of elevation at $A$ (above the horizontal at $A$) and the angle of depression at $B$ (below the horizontal at $B$) are alternate interior angles formed by this transversal.<br>" +
      "<b>Conclusion:</b> alternate interior angles of parallel lines are congruent, so the angle of elevation from $A$ equals the angle of depression from $B$."],

    ["Example 5: Tree height at $60^{\\circ}$",
      "From $15$ ft away, the angle of elevation to a tree's top is $60^{\\circ}$. Find the height.",
      "Identify the right triangle: horizontal distance $=15$ (adjacent to $\\theta$), height $=h$ (opposite).<br>" +
      "Apply TOA: $\\tan 60^{\\circ}=\\dfrac{h}{15}$<br>" +
      "$h=15\\tan 60^{\\circ}=15\\sqrt{3}$ ft.<br>" +
      "<b>Answer:</b> $15\\sqrt{3}$ ft."],

    ["Example 6: Find the angle from a ramp",
      "A ramp rises $4$ ft over a horizontal run of $12$ ft. Find the angle of elevation.",
      "Identify the legs of the right triangle: rise (opposite) $=4$, run (adjacent) $=12$.<br>" +
      "Apply TOA: $\\tan\\theta=\\dfrac{4}{12}=\\dfrac{1}{3}$<br>" +
      "Solve with the inverse tangent, since the angle itself — not a side — is unknown:<br>" +
      "$\\theta=\\tan^{-1}\\!\\left(\\dfrac{1}{3}\\right)$.<br>" +
      "<b>Answer:</b> $\\theta=\\tan^{-1}\\!\\left(\\dfrac{1}{3}\\right)$."],

    ["Example 7: Depression from a lighthouse",
      "From a lighthouse $80$ ft tall, the angle of depression to a ship is $20^{\\circ}$. Express the ship's distance from the base.",
      "By the equal-angles relationship, the angle of elevation from the ship is also $20^{\\circ}$.<br>" +
      "Apply TOA: $\\tan 20^{\\circ}=\\dfrac{80}{d}$<br>" +
      "Solve: $d=\\dfrac{80}{\\tan 20^{\\circ}}$ ft.<br>" +
      "<b>Answer:</b> $d=\\dfrac{80}{\\tan 20^{\\circ}}$ ft."],

    ["Example 8: Window height (subtracting two elevations)",
      "From $25$ m away, the angle of elevation to the top of a window is $50^{\\circ}$, and to the bottom of the window is $30^{\\circ}$. Find the window's height.",
      "Find the height to the top: $h_{\\text{top}}=25\\tan 50^{\\circ}$.<br>" +
      "Find the height to the bottom: $h_{\\text{bottom}}=25\\tan 30^{\\circ}$.<br>" +
      "The window's height is the difference between these two heights: $h_{\\text{top}}-h_{\\text{bottom}}=25\\tan 50^{\\circ}-25\\tan 30^{\\circ}$.<br>" +
      "<b>Answer:</b> $25(\\tan 50^{\\circ}-\\tan 30^{\\circ})$ m."],

    ["Example 9: Ladder at an angle",
      "A ladder leans at a $70^{\\circ}$ angle of elevation from the ground, with its base $3$ ft from the wall. Find how high it reaches on the wall.",
      fig(elevationFig(), "The ladder is the hypotenuse; the wall height is the opposite leg.") +
      "Identify the right triangle: horizontal base distance $=3$ (adjacent to $\\theta$), height on the wall $=h$ (opposite).<br>" +
      "Apply TOA: $\\tan 70^{\\circ}=\\dfrac{h}{3}$<br>" +
      "$h=3\\tan 70^{\\circ}$ ft.<br>" +
      "<b>Answer:</b> $3\\tan 70^{\\circ}$ ft."],

    ["Example 10: Compound problem with eye height",
      "A person whose eyes are $5$ ft above the ground stands $60$ ft from a tower. The angle of elevation from her eyes to the top of the tower is $35^{\\circ}$. Find the tower's total height.",
      "Find the rise above eye level using the right triangle from eye level: $\\tan 35^{\\circ}=\\dfrac{x}{60}$<br>" +
      "$x=60\\tan 35^{\\circ}$ (height above eye level).<br>" +
      "Add the eye height, since the sightline starts $5$ ft off the ground, not at ground level: total $=60\\tan 35^{\\circ}+5$.<br>" +
      "<b>Answer:</b> $(60\\tan 35^{\\circ}+5)$ ft."],
  ],
  questions: [
    ["Problem 1: Elevation", "From $30$ ft away, elevation $45^{\\circ}$. Find the building height.", "$30$ ft"],
    ["Problem 2: Elevation", "From $10$ m away, elevation $30^{\\circ}$. Find the height (exact).", "$\\dfrac{10\\sqrt{3}}{3}$ m"],
    ["Problem 3: Depression", "From $60$ ft up, depression $45^{\\circ}$. Find the horizontal distance.", "$60$ ft"],
    ["Problem 4: Angle", "Rise $5$, run $12$. Find the angle of elevation.", "$\\tan^{-1}\\!\\left(\\dfrac{5}{12}\\right)$"],
    ["Problem 5: Tree", "From $20$ ft away, elevation $60^{\\circ}$. Find the tree height.", "$20\\sqrt{3}$ ft"],
    ["Problem 6: Depression", "Cliff $100$ m, depression $30^{\\circ}$. Find the distance to the boat.", "$100\\sqrt{3}$ m"],
    ["Problem 7: Ladder", "Base $4$ ft out, elevation $65^{\\circ}$. Find the height on the wall.", "$4\\tan 65^{\\circ}$ ft"],
    ["Problem 8: Equal angles", "The angle of elevation from the ground to the top of a tower equals what angle measured from the top?", "The angle of depression from the top to the ground"],
    ["Problem 9: Elevation", "Distance $50$, elevation $20^{\\circ}$. Find the height.", "$50\\tan 20^{\\circ}$"],
    ["Problem 10: Ramp", "Rise $3$ ft, run $15$ ft. Find the angle.", "$\\tan^{-1}\\!\\left(\\dfrac{1}{5}\\right)$"],
    ["Problem 11: Depression", "Height $45$, depression $15^{\\circ}$. Find the distance.", "$\\dfrac{45}{\\tan 15^{\\circ}}$"],
    ["Problem 12: Elevation", "From $8$ m away, elevation $45^{\\circ}$. Find the height.", "$8$ m"],
    ["Problem 13: Challenge — window height", "From $40$ ft away: elevation to the top of a window is $50^{\\circ}$, to the bottom is $25^{\\circ}$. Find the window's height.", "$40(\\tan 50^{\\circ}-\\tan 25^{\\circ})$ ft"],
    ["Problem 14: Challenge — eye height compound", "A person's eyes are $6$ ft above the ground, standing $45$ ft from a tower. The angle of elevation from her eyes to the top is $40^{\\circ}$. Find the tower's total height.", "$(45\\tan 40^{\\circ}+6)$ ft"],
    ["Problem 15: Challenge — two depressions", "From the top of a $120$ m bridge tower, the angle of depression to a boat is $22^{\\circ}$, and to a buoy farther away is $14^{\\circ}$. Express the distance between the boat and the buoy.", "$\\dfrac{120}{\\tan 14^{\\circ}}-\\dfrac{120}{\\tan 22^{\\circ}}$ m"],
  ],
};
