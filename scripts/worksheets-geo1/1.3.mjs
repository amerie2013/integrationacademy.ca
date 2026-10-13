import { fig, angleFig } from "./_figs.mjs";

function angleAddFig(labelA = "A", labelD = "D", labelC = "C", labelV = "B") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" width="220" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Angle addition">
  <line x1="30" y1="140" x2="200" y2="140" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="30" y1="140" x2="190" y2="55" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="30" y1="140" x2="115" y2="20" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M75,140 A45,45 0 0 1 68,105" fill="none" stroke="#15803d" stroke-width="2"/>
  <path d="M95,133 A65,65 0 0 1 108,98" fill="none" stroke="#ea580c" stroke-width="2"/>
  <circle cx="30" cy="140" r="4" fill="#0f172a"/>
  <text x="14" y="153" font-size="13" fill="#0f172a" font-family="Georgia,serif">${labelV}</text>
  <text x="203" y="144" font-size="13" fill="#334155" font-family="Georgia,serif">${labelC}</text>
  <text x="117" y="14" font-size="13" fill="#334155" font-family="Georgia,serif">${labelA}</text>
  <text x="193" y="52" font-size="13" fill="#334155" font-family="Georgia,serif">${labelD}</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "1.3",
  title: "Measuring and Constructing Angles",
  intro: "Angle measure turns a picture of two rays into a number you can compute with, the same way segment length did for two points. The Angle Addition Postulate and the definition of an angle bisector let you build equations with a variable buried inside a measure, not just read a protractor. This section also connects back to earlier ideas — opposite rays make a straight angle, and a bisector's two halves are congruent — so several problems ask you to justify a step, not only find a number.",
  examples: [
    ["Example 1: Classify by range",
      "Classify $\\angle A$ if $m\\angle A = 47^\\circ$.",
      fig(angleFig("47^\\circ"), "An angle less than 90° is acute.") +
      "Recall the ranges: acute is $0^\\circ$ to $90^\\circ$, right is exactly $90^\\circ$, obtuse is $90^\\circ$ to $180^\\circ$, straight is exactly $180^\\circ$.<br>" +
      "Compare: $47^\\circ$ falls between $0^\\circ$ and $90^\\circ$.<br>" +
      "<b>Answer:</b> $\\angle A$ is <b>acute</b>."],

    ["Example 2: Right angle",
      "What is the measure of a right angle, and how is it marked in a diagram?",
      "By definition, a right angle is formed by two perpendicular rays.<br>" +
      "A right angle is always drawn with a small square at the vertex, not a curved arc — that square <i>is</i> the symbol for $90^\\circ$.<br>" +
      "<b>Answer:</b> $90^\\circ$."],

    ["Example 3: Straight angle",
      "What is the measure of a straight angle, and how do its two sides relate to Section 1.1's opposite rays?",
      "A straight angle's two sides are opposite rays — they share the vertex and point in exactly opposite directions, forming one straight line.<br>" +
      "By definition, a straight angle measures exactly $180^\\circ$.<br>" +
      "<b>Answer:</b> $180^\\circ$."],

    ["Example 4: Angle Addition Postulate",
      "$D$ is in the interior of $\\angle ABC$. If $m\\angle ABD = 35^\\circ$ and $m\\angle DBC = 50^\\circ$, find $m\\angle ABC$.",
      fig(angleAddFig(), "D is inside angle ABC, splitting it into two smaller angles.") +
      "Identify the relationship: since $D$ is in the interior of $\\angle ABC$, the Angle Addition Postulate applies: $m\\angle ABD + m\\angle DBC = m\\angle ABC$.<br>" +
      "Substitute: $35^\\circ + 50^\\circ = m\\angle ABC$.<br>" +
      "<b>Answer:</b> $m\\angle ABC = 85^\\circ$."],

    ["Example 5: Find a missing part",
      "$m\\angle ABC = 110^\\circ$ and $m\\angle ABD = 70^\\circ$, with $D$ interior to $\\angle ABC$. Find $m\\angle DBC$.",
      "Start from the same postulate, solving for the smaller piece instead of the whole: $m\\angle ABD + m\\angle DBC = m\\angle ABC$.<br>" +
      "$70^\\circ + m\\angle DBC = 110^\\circ$<br>" +
      "<b>Answer:</b> $m\\angle DBC = 40^\\circ$."],

    ["Example 6: Angle bisector",
      "$\\overrightarrow{BD}$ bisects $\\angle ABC$. If $m\\angle ABD = 28^\\circ$, find $m\\angle ABC$.",
      fig(angleAddFig(), "A bisector splits the angle into two congruent halves.") +
      "Definition: a bisector splits an angle into two <i>congruent</i> halves, so $m\\angle ABD = m\\angle DBC = 28^\\circ$.<br>" +
      "$m\\angle ABC = m\\angle ABD + m\\angle DBC = 28^\\circ + 28^\\circ$.<br>" +
      "(Shortcut for any bisector problem: $m\\angle ABC = 2\\cdot m\\angle ABD$.)<br>" +
      "<b>Answer:</b> $56^\\circ$."],

    ["Example 7: Bisector algebra",
      "$\\overrightarrow{BD}$ bisects $\\angle ABC$. If $m\\angle ABD = 3x+2$ and $m\\angle DBC = 5x-10$, find $x$.",
      "A bisector means the two halves are equal: $m\\angle ABD = m\\angle DBC$.<br>" +
      "$3x+2 = 5x-10$<br>" +
      "$12 = 2x \\Rightarrow x = 6$.<br>" +
      "<b>Check:</b> both halves equal $3(6)+2 = 20^\\circ$. ✓"],

    ["Example 8: Classify and preview supplements",
      "Classify $\\angle Q$ if $m\\angle Q = 125^\\circ$, and find its supplement.",
      "Compare to the ranges: $90^\\circ < 125^\\circ < 180^\\circ$, so $\\angle Q$ is <b>obtuse</b>.<br>" +
      "Its supplement is $180^\\circ - 125^\\circ = 55^\\circ$, which is acute — a preview of Section 1.4, where supplementary pairs are studied directly.<br>" +
      "<b>Answer:</b> obtuse; supplement $55^\\circ$."],

    ["Example 9: Solve with Angle Addition",
      "$D$ is interior to $\\angle ABC$. $m\\angle ABD = 2x$, $m\\angle DBC = x + 15$, and $m\\angle ABC = 75^\\circ$. Find $x$.",
      fig(angleAddFig(), "The two algebraic angle pieces must add to the given whole angle.") +
      "Write the postulate as an equation: $m\\angle ABD + m\\angle DBC = m\\angle ABC$.<br>" +
      "$2x + (x+15) = 75$<br>" +
      "$3x+15 = 75 \\Rightarrow 3x = 60 \\Rightarrow x = 20$.<br>" +
      "<b>Check:</b> $m\\angle ABD = 40^\\circ$, $m\\angle DBC = 35^\\circ$, and $40^\\circ+35^\\circ=75^\\circ$. ✓"],

    ["Example 10: Reading a protractor",
      "A protractor's center is placed at vertex $B$. Ray $BA$ lines up with the $20^\\circ$ mark and ray $BC$ lines up with the $145^\\circ$ mark on the same scale. Find $m\\angle ABC$ and classify it.",
      "On a single protractor scale, the measure of the angle between two rays is the positive difference of their readings.<br>" +
      "$m\\angle ABC = |145^\\circ - 20^\\circ| = 125^\\circ$.<br>" +
      "Since $90^\\circ < 125^\\circ < 180^\\circ$, the angle is <b>obtuse</b>.<br>" +
      "<b>Answer:</b> $125^\\circ$, obtuse."],
  ],
  questions: [
    ["Problem 1: Classify", "Classify $m\\angle A = 72^\\circ$.", "Acute"],
    ["Problem 2: Classify", "Classify $m\\angle B = 90^\\circ$.", "Right"],
    ["Problem 3: Classify", "Classify $m\\angle C = 140^\\circ$.", "Obtuse"],
    ["Problem 4: Straight angle", "Measure of a straight angle?", "$180^\\circ$"],
    ["Problem 5: Angle Addition", "$m\\angle ABD = 40^\\circ$, $m\\angle DBC = 55^\\circ$. Find $m\\angle ABC$.", "$95^\\circ$"],
    ["Problem 6: Find a part", "$m\\angle ABC = 100^\\circ$, $m\\angle ABD = 65^\\circ$. Find $m\\angle DBC$.", "$35^\\circ$"],
    ["Problem 7: Bisector", "$\\overrightarrow{BD}$ bisects $\\angle ABC$, $m\\angle ABD = 32^\\circ$. Find $m\\angle ABC$.", "$64^\\circ$"],
    ["Problem 8: Bisector algebra", "$m\\angle ABD = 4x$, $m\\angle DBC = 2x + 18$, bisector. Find $x$.", "$x = 9$"],
    ["Problem 9: Solve for $x$", "$m\\angle ABD = x$, $m\\angle DBC = 2x$, $m\\angle ABC = 84^\\circ$. Find $x$.", "$x = 28$"],
    ["Problem 10: Classify", "Classify $m\\angle D = 180^\\circ$.", "Straight"],
    ["Problem 11: Angle Addition", "$m\\angle PQR = 130^\\circ$, $m\\angle PQS = 80^\\circ$. Find $m\\angle SQR$.", "$50^\\circ$"],
    ["Problem 12: Bisector", "$m\\angle ABC = 70^\\circ$, $\\overrightarrow{BD}$ bisects. Find $m\\angle ABD$.", "$35^\\circ$"],
    ["Problem 13: Bisector algebra", "$m\\angle ABD = 5x - 4$, $m\\angle DBC = 3x + 8$. Find $x$.", "$x = 6$"],
    ["Problem 14: Challenge — protractor", "Ray $BA$ reads $15^\\circ$ and ray $BC$ reads $162^\\circ$ on the same protractor scale. Find $m\\angle ABC$ and classify it.", "$147^\\circ$, obtuse"],
    ["Problem 15: Challenge — double bisector", "$\\overrightarrow{BD}$ bisects $\\angle ABC$, and $\\overrightarrow{BE}$ bisects $\\angle ABD$. If $m\\angle EBD = 18^\\circ$, find $m\\angle ABC$.", "$72^\\circ$"],
  ],
};
