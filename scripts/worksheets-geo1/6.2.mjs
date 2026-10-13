import { fig, rightTri, triABC } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "6.2",
  title: "Special Right Triangles",
  intro: "Two right-triangle shapes recur so often that their side ratios are worth memorizing. A <b>$45$-$45$-$90$ triangle</b> is an isosceles right triangle: if each leg is $x$, the Pythagorean Theorem gives hypotenuse $=x\\sqrt{2}$. A <b>$30$-$60$-$90$ triangle</b> comes from bisecting an equilateral triangle: if the equilateral side is $2x$, the altitude splits it into two right triangles with short leg $x$ (opposite $30^{\\circ}$), long leg $x\\sqrt{3}$ (opposite $60^{\\circ}$), and hypotenuse $2x$ (the original side). Once you recognize either pattern from a single given length, every other side follows immediately — no need to re-derive the Pythagorean Theorem each time. This worksheet derives both patterns and then applies them to triangles, squares, and equilateral triangles.",
  examples: [
    ["Example 1: $45$-$45$-$90$ — find the hypotenuse",
      "A $45$-$45$-$90$ triangle has legs of length $7$. Find the hypotenuse.",
      fig(rightTri("7", "7", "7\\sqrt{2}"), "Both legs equal; hypotenuse is leg $\\times\\sqrt{2}$.") +
      "Identify the pattern: legs $x=7$; hypotenuse $=x\\sqrt{2}$.<br>" +
      "Substitute: hypotenuse $=7\\sqrt{2}$.<br>" +
      "Check with the Pythagorean Theorem: $7^{2}+7^{2}=49+49=98$, and $(7\\sqrt{2})^{2}=49\\times2=98$ ✓.<br>" +
      "<b>Answer:</b> $7\\sqrt{2}$."],

    ["Example 2: $45$-$45$-$90$ — find a leg",
      "A $45$-$45$-$90$ triangle has hypotenuse $10\\sqrt{2}$. Find each leg.",
      "Identify the pattern: hypotenuse $=x\\sqrt{2}=10\\sqrt{2}$, so $x=10$.<br>" +
      "Each leg $=10$.<br>" +
      "Check: $10^{2}+10^{2}=200$, and $(10\\sqrt{2})^{2}=200$ ✓.<br>" +
      "<b>Answer:</b> each leg $=10$."],

    ["Example 3: Derive the $45$-$45$-$90$ pattern",
      "Prove that an isosceles right triangle with legs $x$ has hypotenuse $x\\sqrt{2}$.",
      "Let the two legs both equal $x$ (isosceles right triangle, right angle between them).<br>" +
      "Apply the Pythagorean Theorem: $c^{2}=x^{2}+x^{2}=2x^{2}$.<br>" +
      "Solve for $c$: $c=\\sqrt{2x^{2}}=x\\sqrt{2}$ (length is positive).<br>" +
      "<b>Conclusion:</b> the hypotenuse of any $45$-$45$-$90$ triangle is always leg $\\times\\sqrt{2}$."],

    ["Example 4: $30$-$60$-$90$ from the short leg",
      "A $30$-$60$-$90$ triangle has short leg (opposite $30^{\\circ}$) of length $5$. Find the long leg and hypotenuse.",
      fig(rightTri("5\\sqrt{3}", "5", "10"), "Short leg $x$, long leg $x\\sqrt3$, hypotenuse $2x$.") +
      "Identify the pattern: short leg $=x=5$.<br>" +
      "Long leg $=x\\sqrt{3}=5\\sqrt{3}$; hypotenuse $=2x=10$.<br>" +
      "Check: $5^{2}+(5\\sqrt{3})^{2}=25+75=100=10^{2}$ ✓.<br>" +
      "<b>Answer:</b> long leg $=5\\sqrt{3}$; hypotenuse $=10$."],

    ["Example 5: $30$-$60$-$90$ from the hypotenuse",
      "A $30$-$60$-$90$ triangle has hypotenuse $14$. Find both legs.",
      "Identify the pattern: hypotenuse $=2x=14$, so $x=7$.<br>" +
      "Short leg $=x=7$; long leg $=x\\sqrt{3}=7\\sqrt{3}$.<br>" +
      "Check: $7^{2}+(7\\sqrt{3})^{2}=49+147=196=14^{2}$ ✓.<br>" +
      "<b>Answer:</b> short leg $=7$; long leg $=7\\sqrt{3}$."],

    ["Example 6: $30$-$60$-$90$ from the long leg",
      "A $30$-$60$-$90$ triangle has long leg (opposite $60^{\\circ}$) of length $6\\sqrt{3}$. Find the short leg and hypotenuse.",
      "Identify the pattern: long leg $=x\\sqrt{3}=6\\sqrt{3}$, so $x=6$.<br>" +
      "Short leg $=x=6$; hypotenuse $=2x=12$.<br>" +
      "Check: $6^{2}+(6\\sqrt{3})^{2}=36+108=144=12^{2}$ ✓.<br>" +
      "<b>Answer:</b> short leg $=6$; hypotenuse $=12$."],

    ["Example 7: Derive the $30$-$60$-$90$ pattern",
      "Prove that bisecting an equilateral triangle with side $2x$ produces a $30$-$60$-$90$ triangle with legs $x$ and $x\\sqrt{3}$.",
      fig(triABC({ marks: true }), "The altitude of an equilateral triangle bisects the base and the apex angle.") +
      "In equilateral $\\triangle ABC$ with side $2x$, drop the altitude from $A$ to the midpoint $D$ of $\\overline{BC}$.<br>" +
      "Since the altitude of an equilateral triangle bisects the base and the apex angle: $BD=x$, and $\\angle BAD=30^{\\circ}$, $\\angle ABD=60^{\\circ}$, $\\angle ADB=90^{\\circ}$.<br>" +
      "Apply the Pythagorean Theorem in $\\triangle ABD$: $AD^{2}=AB^{2}-BD^{2}=(2x)^{2}-x^{2}=4x^{2}-x^{2}=3x^{2}$.<br>" +
      "$AD=x\\sqrt{3}$.<br>" +
      "<b>Conclusion:</b> $\\triangle ABD$ has short leg $x$ (opposite $30^{\\circ}$), long leg $x\\sqrt{3}$ (opposite $60^{\\circ}$), hypotenuse $2x$ — the $30$-$60$-$90$ pattern."],

    ["Example 8: Square diagonal",
      "A square has side length $4$. Find the length of the diagonal.",
      "A diagonal splits the square into two $45$-$45$-$90$ triangles with legs $4$.<br>" +
      "Diagonal $=$ hypotenuse $=x\\sqrt{2}=4\\sqrt{2}$.<br>" +
      "<b>Answer:</b> $4\\sqrt{2}$."],

    ["Example 9: Equilateral triangle altitude and area",
      "An equilateral triangle has side length $10$. Find the altitude, then the area.",
      "The altitude splits the equilateral triangle into two $30$-$60$-$90$ triangles with hypotenuse $10$, so $x=5$.<br>" +
      "Altitude $=x\\sqrt{3}=5\\sqrt{3}$.<br>" +
      "Find the area using base $=10$ and height $=5\\sqrt{3}$: $A=\\dfrac{1}{2}(10)(5\\sqrt{3})=25\\sqrt{3}$.<br>" +
      "<b>Answer:</b> altitude $=5\\sqrt{3}$; area $=25\\sqrt{3}$ square units."],

    ["Example 10: Rectangle diagonal at $30^{\\circ}$",
      "A rectangle's diagonal is $20$ cm and makes a $30^{\\circ}$ angle with the longer side. Find both side lengths.",
      "The diagonal, the longer side, and the shorter side form a $30$-$60$-$90$ triangle, with the diagonal as the hypotenuse ($20$).<br>" +
      "The side adjacent to the $30^{\\circ}$ angle is the longer side (opposite the $60^{\\circ}$ angle): longer side $=20\\cdot\\dfrac{\\sqrt{3}}{2}=10\\sqrt{3}$.<br>" +
      "The side opposite the $30^{\\circ}$ angle is the shorter side: shorter side $=20\\cdot\\dfrac{1}{2}=10$.<br>" +
      "<b>Answer:</b> sides are $10$ cm and $10\\sqrt{3}$ cm."],
  ],
  questions: [
    ["Problem 1: $45$-$45$-$90$", "Legs $=9$. Find the hypotenuse.", "$9\\sqrt{2}$"],
    ["Problem 2: $45$-$45$-$90$", "Hypotenuse $=6\\sqrt{2}$. Find each leg.", "$6$"],
    ["Problem 3: $30$-$60$-$90$", "Short leg $=4$. Find the long leg and hypotenuse.", "$4\\sqrt{3}$; $8$"],
    ["Problem 4: $30$-$60$-$90$", "Hypotenuse $=18$. Find both legs.", "$9$; $9\\sqrt{3}$"],
    ["Problem 5: Square", "Square side $5$. Find the diagonal.", "$5\\sqrt{2}$"],
    ["Problem 6: $30$-$60$-$90$", "Long leg $=5\\sqrt{3}$. Find the short leg and hypotenuse.", "$5$; $10$"],
    ["Problem 7: Equilateral", "Side $8$. Find the altitude.", "$4\\sqrt{3}$"],
    ["Problem 8: $45$-$45$-$90$", "Hypotenuse $=14$. Find each leg.", "$7\\sqrt{2}$"],
    ["Problem 9: $30$-$60$-$90$", "Short leg $=\\sqrt{2}$. Find the hypotenuse.", "$2\\sqrt{2}$"],
    ["Problem 10: $45$-$45$-$90$", "Leg $=2\\sqrt{5}$. Find the hypotenuse.", "$2\\sqrt{10}$"],
    ["Problem 11: $30$-$60$-$90$", "Hypotenuse $=2\\sqrt{3}$. Find the short and long legs.", "$\\sqrt{3}$; $3$"],
    ["Problem 12: Square", "Diagonal $=10\\sqrt{2}$. Find the side length.", "$10$"],
    ["Problem 13: Challenge — equilateral area", "Equilateral triangle side $=12$. Find the altitude and the area.", "Altitude $=6\\sqrt{3}$; area $=36\\sqrt{3}$"],
    ["Problem 14: Challenge — rectangle diagonal", "A rectangle's diagonal is $16$ cm and makes a $60^{\\circ}$ angle with the shorter side. Find both side lengths.", "$8$ cm and $8\\sqrt{3}$ cm"],
    ["Problem 15: Challenge — combined patterns", "A $30$-$60$-$90$ triangle has short leg $6$. Its long leg is the hypotenuse of a $45$-$45$-$90$ triangle. Find the legs of that $45$-$45$-$90$ triangle.", "$3\\sqrt{6}$ each"],
  ],
};
