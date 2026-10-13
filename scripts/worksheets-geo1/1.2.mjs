import { fig, segmentMid, numberLine } from "./_figs.mjs";

function threeCollinear(l1 = "A", l2 = "B", l3 = "C") {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="280" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Three collinear points">
  <line x1="30" y1="40" x2="250" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  <circle cx="30" cy="40" r="4.5" fill="#ea580c"/><text x="30" y="65" text-anchor="middle" font-size="13" fill="#9a3412" font-family="Georgia,serif">${l1}</text>
  <circle cx="140" cy="40" r="4.5" fill="#2563eb"/><text x="140" y="65" text-anchor="middle" font-size="13" fill="#1d4ed8" font-family="Georgia,serif">${l2}</text>
  <circle cx="250" cy="40" r="4.5" fill="#ea580c"/><text x="250" y="65" text-anchor="middle" font-size="13" fill="#9a3412" font-family="Georgia,serif">${l3}</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "1.2",
  title: "Measuring and Constructing Segments",
  intro: "Segment length is a number, not just a picture — and the Segment Addition Postulate and the Midpoint definition turn that number into an algebra tool. This section goes past single-step \"add the two pieces\" problems into equations with a variable on both sides, midpoints of midpoints, and word problems where you must first decide which points are the endpoints before any arithmetic happens. Expect to justify each step (postulate or definition) as much as to compute the final number.",
  examples: [
    ["Example 1: Distance on a number line",
      "Find $AB$ if $A$ is at $-3$ and $B$ is at $5$ on a number line.",
      fig(numberLine(-3, 5), "Distance is the positive gap between coordinates.") +
      "Identify the formula: distance between two points on a number line is $|x_2 - x_1|$ (order doesn't matter because of the absolute value).<br>" +
      "Substitute: $AB = |5 - (-3)| = |8|$.<br>" +
      "<b>Answer:</b> $AB = 8$."],

    ["Example 2: Segment Addition Postulate",
      "$B$ is between $A$ and $C$. If $AB = 4$ and $BC = 7$, find $AC$.",
      fig(threeCollinear("A", "B", "C"), "B is between A and C, so the two small pieces add to the whole.") +
      "Identify the relationship: since $B$ is between $A$ and $C$, the Segment Addition Postulate applies: $AB + BC = AC$.<br>" +
      "Substitute the known values: $AC = 4 + 7$.<br>" +
      "<b>Answer:</b> $AC = 11$."],

    ["Example 3: Find a missing part",
      "$B$ is between $A$ and $C$. If $AC = 20$ and $AB = 8$, find $BC$.",
      "Start from the same postulate, but solve for the middle piece instead of the whole: $AB + BC = AC$.<br>" +
      "$8 + BC = 20$<br>" +
      "$BC = 20 - 8$.<br>" +
      "<b>Answer:</b> $BC = 12$."],

    ["Example 4: Midpoint doubles the half",
      "$M$ is the midpoint of $\\overline{AB}$. If $AM = 9$, find $AB$.",
      fig(segmentMid(), "M splits AB into two equal pieces, AM and MB.") +
      "Identify: a midpoint splits a segment into two <i>congruent</i> pieces, so $AM = MB$.<br>" +
      "Since $AM = 9$, also $MB = 9$; then $AB = AM + MB = 9 + 9$.<br>" +
      "(Shortcut for any midpoint problem: $AB = 2 \\cdot AM$.)<br>" +
      "<b>Answer:</b> $AB = 18$."],

    ["Example 5: Midpoint algebra",
      "$M$ is the midpoint of $\\overline{PQ}$. If $PM = 3x + 1$ and $MQ = 5x - 5$, find $x$.",
      "Set the two halves equal, since a midpoint makes them congruent: $PM = MQ$.<br>" +
      "$3x + 1 = 5x - 5$<br>" +
      "$1 + 5 = 5x - 3x \\Rightarrow 6 = 2x$<br>" +
      "$x = 3$.<br>" +
      "<b>Check:</b> $PM = 3(3)+1 = 10$ and $MQ = 5(3)-5 = 10$ — equal, as required. ✓"],

    ["Example 6: Congruent segments and transitivity",
      "$\\overline{AB} \\cong \\overline{CD}$ and $\\overline{CD} \\cong \\overline{EF}$. If $AB = 12$, find $CD$ and $EF$, and name the property that lets you compare $AB$ and $EF$ directly.",
      "Definition of congruent segments: congruent means equal length. $\\overline{AB}\\cong\\overline{CD} \\Rightarrow CD = AB = 12$.<br>" +
      "$\\overline{CD}\\cong\\overline{EF} \\Rightarrow EF = CD = 12$.<br>" +
      "Since $AB = CD$ and $CD = EF$, the <b>Transitive Property of Equality</b> gives $AB = EF$ without re-measuring.<br>" +
      "<b>Answer:</b> $CD = 12$, $EF = 12$."],

    ["Example 7: Solve with Segment Addition",
      "$B$ is between $A$ and $C$. $AB = 2x$, $BC = x + 4$, and $AC = 19$. Find $x$.",
      fig(threeCollinear("A", "B", "C"), "The two algebraic pieces must add to the given whole.") +
      "Write the postulate as an equation: $AB + BC = AC$.<br>" +
      "$2x + (x + 4) = 19$<br>" +
      "$3x + 4 = 19 \\Rightarrow 3x = 15 \\Rightarrow x = 5$.<br>" +
      "<b>Check:</b> $AB = 10$, $BC = 9$, and $10 + 9 = 19$. ✓"],

    ["Example 8: Midpoint coordinate on a number line",
      "$A$ is at $2$ and $B$ is at $14$. Find the coordinate of the midpoint $M$.",
      fig(numberLine(2, 14), "The midpoint coordinate is the average of the two endpoints.") +
      "Formula: the midpoint coordinate is the average of the endpoints, $M = \\dfrac{x_A + x_B}{2}$.<br>" +
      "$M = \\dfrac{2 + 14}{2} = \\dfrac{16}{2}$.<br>" +
      "<b>Answer:</b> $M = 8$."],

    ["Example 9: Find a missing endpoint",
      "$M$ is the midpoint of $\\overline{AB}$. $A$ is at $4$ and $M$ is at $10$. Find $B$.",
      "Use the midpoint formula, but solve for the unknown endpoint instead of the midpoint: $M = \\dfrac{A+B}{2}$.<br>" +
      "$10 = \\dfrac{4+B}{2} \\Rightarrow 20 = 4 + B$<br>" +
      "$B = 16$.<br>" +
      "<b>Check:</b> the midpoint of $4$ and $16$ is $\\dfrac{20}{2}=10$. ✓"],

    ["Example 10: Nested midpoints — a hallway word problem",
      "A water fountain $F$ is at mile-marker $5$ and a door $D$ is at marker $35$ along a straight hallway. A bench $B$ is placed at the midpoint of $\\overline{FD}$, and a trophy case $T$ is placed at the midpoint of $\\overline{FB}$. Find the coordinates of $B$ and $T$, and find $FT$.",
      "Find $B$ first, since $T$ depends on it: $B = \\dfrac{F+D}{2} = \\dfrac{5+35}{2} = \\dfrac{40}{2} = 20$.<br>" +
      "Now find $T$, the midpoint of $\\overline{FB}$: $T = \\dfrac{F+B}{2} = \\dfrac{5+20}{2} = \\dfrac{25}{2} = 12.5$.<br>" +
      "Finally, $FT = |T - F| = |12.5 - 5| = 7.5$.<br>" +
      "<b>Answer:</b> $B = 20$, $T = 12.5$, $FT = 7.5$."],
  ],
  questions: [
    ["Problem 1: Distance", "$A$ at $-2$, $B$ at $6$. Find $AB$.", "$8$"],
    ["Problem 2: Segment Addition", "$B$ between $A$ and $C$, $AB = 5$, $BC = 9$. Find $AC$.", "$14$"],
    ["Problem 3: Find a part", "$AC = 25$, $AB = 11$, $B$ between $A$ and $C$. Find $BC$.", "$14$"],
    ["Problem 4: Midpoint length", "$M$ midpoint of $\\overline{AB}$, $AM = 7$. Find $AB$.", "$14$"],
    ["Problem 5: Midpoint algebra", "$PM = 2x + 3$, $MQ = 4x - 5$, $M$ midpoint. Find $x$.", "$x = 4$"],
    ["Problem 6: Congruent segments", "$\\overline{RS} \\cong \\overline{TU}$ and $RS = 15$. Find $TU$.", "$15$"],
    ["Problem 7: Solve for $x$", "$AB = x$, $BC = 2x + 1$, $AC = 16$, $B$ between. Find $x$.", "$x = 5$"],
    ["Problem 8: Midpoint coordinate", "$A$ at $3$, $B$ at $11$. Midpoint $M$?", "$7$"],
    ["Problem 9: Endpoint", "$A$ at $1$, midpoint $M$ at $5$. Find $B$.", "$9$"],
    ["Problem 10: Distance", "$P$ at $-8$, $Q$ at $-1$. Find $PQ$.", "$7$"],
    ["Problem 11: Segment Addition", "$AB = 3x - 1$, $BC = x + 5$, $AC = 20$. Find $x$.", "$x = 4$"],
    ["Problem 12: Midpoint length", "$MQ = 6$, $M$ midpoint of $\\overline{PQ}$. Find $PQ$.", "$12$"],
    ["Problem 13: Midpoint algebra", "$AM = 5x - 2$, $MB = 3x + 6$. Find $x$.", "$x = 4$"],
    ["Problem 14: Challenge — nested midpoints", "Trail markers: $A$ at mile $3$, $D$ at mile $27$. $B$ is the midpoint of $\\overline{AD}$, and $C$ is the midpoint of $\\overline{BD}$. Find $B$, $C$, and $BC$.", "$B = 15$, $C = 21$, $BC = 6$"],
    ["Problem 15: Challenge — Segment Addition plus midpoint", "$B$ is between $A$ and $C$. $AB = 2x+3$, $BC = 3x-1$, and $AC = 32$. Find $x$, then find $AM$ where $M$ is the midpoint of $\\overline{AC}$.", "$x = 6$; $AC = 32$; $AM = 16$"],
  ],
};
