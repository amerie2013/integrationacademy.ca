import { fig } from "./_figs.mjs";

function perpFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Perpendicular lines">
  <line x1="20" y1="90" x2="160" y2="90" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="90" y1="20" x2="90" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="90" y="78" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="2"/>
</svg>`;
}

function perpTransversalFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="220" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Perpendicular transversal">
  <line x1="20" y1="60" x2="200" y2="60" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="20" y1="150" x2="200" y2="150" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="110" y1="20" x2="110" y2="190" stroke="#2563eb" stroke-width="2.2"/>
  <rect x="110" y="48" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="205" y="64" font-size="12" fill="#334155" font-family="Georgia,serif">ℓ</text>
  <text x="205" y="154" font-size="12" fill="#334155" font-family="Georgia,serif">m</text>
  <text x="118" y="18" font-size="12" fill="#334155" font-family="Georgia,serif">t</text>
</svg>`;
}

function twoPerpsFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="240" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Two lines perpendicular to a third">
  <line x1="20" y1="60" x2="220" y2="60" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="70" y1="20" x2="70" y2="160" stroke="#2563eb" stroke-width="2.2"/>
  <line x1="170" y1="20" x2="170" y2="160" stroke="#15803d" stroke-width="2.2"/>
  <rect x="70" y="48" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="2"/>
  <rect x="158" y="48" width="12" height="12" fill="none" stroke="#ea580c" stroke-width="2"/>
  <text x="76" y="18" font-size="12" fill="#1d4ed8" font-family="Georgia,serif">a</text>
  <text x="176" y="18" font-size="12" fill="#15803d" font-family="Georgia,serif">b</text>
  <text x="225" y="64" font-size="12" fill="#334155" font-family="Georgia,serif">c</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "2.3",
  title: "Theorems about Perpendicular Lines",
  intro: "Perpendicularity is a stronger statement than just \"one right angle\" — it forces all four angles at the intersection to be $90^\\circ$, which is what lets a single right-angle mark unlock an entire figure. This section links perpendicularity to parallelism in two directions: two lines each perpendicular to a third must be parallel to each other, and a line perpendicular to one of two parallel lines is automatically perpendicular to the other (the Perpendicular Transversal Theorem). Expect a short proof, not just a fact to quote, along with algebra where the right-angle condition itself becomes an equation.",
  examples: [
    ["Example 1: Definition of perpendicular",
      "If $\\ell_1 \\perp \\ell_2$, what angle measure is formed, and how many angles have that measure?",
      fig(perpFig(), "Perpendicular lines mark a right angle with a small square, not an arc.") +
      "By definition, perpendicular lines intersect to form right angles — each exactly $90^\\circ$.<br>" +
      "Saying $\\ell_1\\perp\\ell_2$ isn't just about one angle: it guarantees <i>all four</i> angles at the intersection are $90^\\circ$, not only the one drawn.<br>" +
      "<b>Answer:</b> $90^\\circ$, and all four angles at the intersection equal it."],

    ["Example 2: Why all four angles must be right",
      "Two lines are perpendicular. Explain, starting from just one $90^\\circ$ angle, why the other three angles at the intersection must also be $90^\\circ$.",
      "Start from one right angle ($90^\\circ$) at the intersection.<br>" +
      "Its linear-pair partner is supplementary: $180^\\circ - 90^\\circ = 90^\\circ$ — also right.<br>" +
      "Its vertical angle is congruent to it (Vertical Angles Theorem), so it is also $90^\\circ$; the fourth angle, vertical to the second, is $90^\\circ$ as well.<br>" +
      "<b>Answer:</b> All four angles measure $90^\\circ$ — it only takes knowing <i>one</i> of them is right to force perpendicularity."],

    ["Example 3: Two perpendiculars to the same line",
      "If $\\ell_1 \\perp t$ and $\\ell_2 \\perp t$, what can you conclude about $\\ell_1$ and $\\ell_2$?",
      fig(twoPerpsFig(), "Lines a and b are both perpendicular to c — they never meet.") +
      "Both intersections with $t$ create $90^\\circ$ angles in corresponding position (same side of $t$, same corner).<br>" +
      "Since those corresponding angles are congruent ($90^\\circ = 90^\\circ$), the Converse of the Corresponding Angles Postulate applies.<br>" +
      "<b>Answer:</b> $\\ell_1 \\parallel \\ell_2$."],

    ["Example 4: Perpendicular Transversal Theorem",
      "$\\ell \\parallel m$ and $t \\perp \\ell$. What can you conclude about $t$ and $m$?",
      fig(perpTransversalFig(), "t is perpendicular to ℓ; since ℓ ∥ m, it must be perpendicular to m too.") +
      "Perpendicular Transversal Theorem: if a line is perpendicular to one of two parallel lines, it is automatically perpendicular to the other.<br>" +
      "Here $t\\perp\\ell$ and $\\ell\\parallel m$ satisfy exactly the theorem's hypothesis.<br>" +
      "<b>Answer:</b> $t \\perp m$."],

    ["Example 5: Any labeled angle is $90^\\circ$",
      "Two lines are perpendicular. One of the four angles at the intersection is labeled $x$. Find $x$.",
      "It doesn't matter which of the four angles is labeled — perpendicularity forces every one of them to be a right angle.<br>" +
      "<b>Answer:</b> $x = 90$."],

    ["Example 6: Linear pair with a right angle",
      "One angle at an intersection is $90^\\circ$. Find the measure of the angle adjacent to it (its linear-pair partner).",
      "Linear Pair Postulate: adjacent angles whose outer sides form a line are supplementary.<br>" +
      "$180^\\circ - 90^\\circ = 90^\\circ$.<br>" +
      "<b>Answer:</b> $90^\\circ$ — confirming that a linear pair including one right angle always produces another right angle."],

    ["Example 7: Horizontal and vertical lines",
      "On a coordinate plane, why are a horizontal line and a vertical line always perpendicular, even though the usual \"slopes multiply to $-1$\" rule doesn't directly apply?",
      "The product rule ($m_1 m_2 = -1$) fails here because a vertical line's slope is undefined — you can't multiply by \"undefined.\"<br>" +
      "Instead, use the definition directly: a horizontal line makes a $0^\\circ$ angle with the $x$-axis, and a vertical line makes a $90^\\circ$ angle with it, so the angle between the two lines themselves is $90^\\circ$.<br>" +
      "<b>Answer:</b> Horizontal and vertical lines are always perpendicular — this is the one case handled by definition rather than the slope-product rule (see Section 2.4)."],

    ["Example 8: Reading the right-angle mark",
      "A diagram shows a small square drawn at an intersection instead of a curved arc. What does that convention mean, and why is it different from a general angle mark?",
      "A curved arc marks a generic angle of unspecified measure; a small square specifically marks a $90^\\circ$ angle — it is a promise, not just a label.<br>" +
      "Seeing the square lets you use $90^\\circ$ immediately in any equation, without being told the measure in words.<br>" +
      "<b>Answer:</b> The square symbol means the angle is exactly $90^\\circ$ (the lines are perpendicular there)."],

    ["Example 9: A short proof that two perpendiculars are parallel",
      "Given: $a \\perp c$ and $b \\perp c$. Prove: $a \\parallel b$.",
      fig(twoPerpsFig(), "Both a and b meet c at 90°, in matching corresponding positions.") +
      "1. $a \\perp c$ and $b \\perp c$ — <i>Given</i><br>" +
      "2. The angle formed by $a,c$ is $90^\\circ$; the corresponding angle formed by $b,c$ is $90^\\circ$ — <i>Definition of perpendicular</i><br>" +
      "3. $90^\\circ = 90^\\circ$, so the two corresponding angles are congruent — <i>Substitution</i><br>" +
      "4. $a \\parallel b$ — <i>Converse of the Corresponding Angles Postulate</i><br>" +
      "<b>∎ Proved:</b> $a \\parallel b$."],

    ["Example 10: Algebra inside a right-angle condition",
      "Transversal $t$ meets line $\\ell$, forming an angle of $(2x+10)^\\circ$ that is marked as a right angle. Given $\\ell \\parallel m$, find $x$, and explain why $t$ must also be perpendicular to $m$.",
      "The right-angle mark tells us the expression itself equals $90^\\circ$: $2x+10 = 90$.<br>" +
      "$2x = 80 \\Rightarrow x = 40$.<br>" +
      "Since $t \\perp \\ell$ and $\\ell \\parallel m$, the Perpendicular Transversal Theorem guarantees $t \\perp m$ as well.<br>" +
      "<b>Answer:</b> $x = 40$; $t \\perp m$."],
  ],
  questions: [
    ["Problem 1: Definition", "$\\ell \\perp m$ means they form what measure?", "$90^\\circ$"],
    ["Problem 2: Count right angles", "Perpendicular lines form how many right angles?", "$4$"],
    ["Problem 3: Two perps", "$a \\perp c$ and $b \\perp c$. Then $a$ and $b$ are?", "Parallel"],
    ["Problem 4: Perp transversal", "$\\ell_1 \\parallel \\ell_2$ and $t \\perp \\ell_1$. Then $t$ and $\\ell_2$?", "Perpendicular"],
    ["Problem 5: Measure", "Perpendicular intersection; one angle is?", "$90^\\circ$"],
    ["Problem 6: Adjacent", "Right angle's linear-pair partner?", "$90^\\circ$"],
    ["Problem 7: Horiz/vert", "Horizontal line and vertical line are always?", "Perpendicular"],
    ["Problem 8: Symbol", "Symbol for perpendicular?", "$\\perp$"],
    ["Problem 9: Parallel symbol", "Symbol for parallel?", "$\\parallel$"],
    ["Problem 10: Conclusion", "Two lines each $\\perp$ to same line. They are?", "Parallel"],
    ["Problem 11: Find $x$", "Perpendicular lines; one angle measures $x$. Find $x$.", "$x = 90$"],
    ["Problem 12: Transversal", "Parallel lines; transversal $\\perp$ one. It is $\\perp$ the other?", "Yes"],
    ["Problem 13: Not parallel?", "Can two distinct lines both $\\perp$ the same line and also intersect each other?", "No"],
    ["Problem 14: Challenge — explain the logic", "Lines $a$ and $b$ are both perpendicular to line $c$. Explain in one sentence, using corresponding angles, why $a$ must be parallel to $b$.", "Both $a$ and $b$ meet $c$ at $90^\\circ$ in matching corresponding positions, so those corresponding angles are congruent, and by the Converse of the Corresponding Angles Postulate $a\\parallel b$"],
    ["Problem 15: Challenge — algebra with a right angle", "Transversal $t$ meets $\\ell$ at an angle marked $(4x-6)^\\circ$ as a right angle, and $\\ell \\parallel m$. Find $x$, and state the measure of the angle $t$ forms with $m$.", "$x = 24$; $t$ meets $m$ at $90^\\circ$"],
  ],
};
