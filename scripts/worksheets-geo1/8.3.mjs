import { fig, triABC, parallelogram, trapezoid, rhombusFig, polygonFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "8.3",
  title: "Area of 2D Figures",
  intro: "Every area formula for a polygon can be built from the rectangle. A triangle is exactly half of the parallelogram formed by duplicating it and rotating the copy $180^\\circ$, so $A=\\dfrac{1}{2}bh$. A trapezoid can be doubled the same way into a parallelogram with base $b_1+b_2$, giving $A=\\dfrac{1}{2}(b_1+b_2)h$. A rhombus or kite splits along its diagonals into four right triangles that reassemble into a rectangle with sides $d_1$ and $d_2$, cut in half: $A=\\dfrac{1}{2}d_1d_2$. A regular polygon splits into $n$ congruent triangles from the center, each with height equal to the apothem, so its total area is $A=\\dfrac{1}{2}\\cdot\\text{apothem}\\cdot\\text{perimeter}$. This worksheet also uses composite-figure decomposition and <b>Heron's formula</b>, $A=\\sqrt{s(s-a)(s-b)(s-c)}$ with $s=\\dfrac{a+b+c}{2}$, for triangles where only the three side lengths are known.",
  examples: [
    ["Example 1: Triangle area",
      "A triangle has base $10$ and height $6$. Find its area.",
      fig(triABC(), "Height is measured perpendicular to the chosen base.") +
      "Identify the base and height: $b=10$, $h=6$.<br>" +
      "Apply the triangle area formula:<br>" +
      "$A=\\dfrac{1}{2}bh=\\dfrac{1}{2}(10)(6)=30$.<br>" +
      "<b>Answer:</b> $30$."],

    ["Example 2: Parallelogram area",
      "A parallelogram has base $12$ and height $5$. Find its area.",
      fig(parallelogram(), "Area $=$ base $\\times$ height, just like a rectangle sheared sideways.") +
      "Identify the base and height: $b=12$, $h=5$.<br>" +
      "Apply the parallelogram area formula:<br>" +
      "$A=bh=12(5)=60$.<br>" +
      "<b>Answer:</b> $60$."],

    ["Example 3: Trapezoid area (and why we average the bases)",
      "A trapezoid has bases $8$ and $14$ and height $5$. Find its area.",
      fig(trapezoid(), "Two copies of the trapezoid form a parallelogram with base $b_1+b_2$.") +
      "Two congruent copies of the trapezoid fit together to form a parallelogram with base $8+14=22$ and height $5$, area $=22(5)=110$.<br>" +
      "The trapezoid is half of that parallelogram: $A=\\dfrac{1}{2}(8+14)(5)=\\dfrac{1}{2}(22)(5)=55$.<br>" +
      "<b>Answer:</b> $55$."],

    ["Example 4: Rhombus area from diagonals",
      "A rhombus has diagonals $10$ and $16$. Find its area.",
      fig(rhombusFig(), "The diagonals split the rhombus into four right triangles that rearrange into a $d_1$-by-$d_2$ rectangle, cut in half.") +
      "Identify the diagonals: $d_1=10$, $d_2=16$.<br>" +
      "Apply the rhombus area formula:<br>" +
      "$A=\\dfrac{1}{2}d_1d_2=\\dfrac{1}{2}(10)(16)=80$.<br>" +
      "<b>Answer:</b> $80$."],

    ["Example 5: Regular hexagon area (two ways)",
      "A regular hexagon has side length $4$. Find its area.",
      fig(polygonFig(6, "6 sides"), "A regular hexagon splits into $6$ congruent equilateral triangles.") +
      "<b>Method 1 (six equilateral triangles):</b> each has area $\\dfrac{\\sqrt3}{4}s^2=\\dfrac{\\sqrt3}{4}(16)=4\\sqrt3$; total $=6(4\\sqrt3)=24\\sqrt3$.<br>" +
      "<b>Method 2 (formula):</b> $A=\\dfrac{3\\sqrt3}{2}s^2=\\dfrac{3\\sqrt3}{2}(16)=24\\sqrt3$.<br>" +
      "Both agree.<br>" +
      "<b>Answer:</b> $24\\sqrt3$."],

    ["Example 6: Rectangle area",
      "A rectangle has length $9$ and width $4$. Find its area.",
      "Identify the length and width: $l=9$, $w=4$.<br>" +
      "Apply the rectangle area formula:<br>" +
      "$A=lw=9(4)=36$.<br>" +
      "<b>Answer:</b> $36$."],

    ["Example 7: Composite figure by decomposition",
      "An L-shaped room is a $10\\times8$ rectangle with a $3\\times4$ rectangular corner removed. Find the room's area.",
      "Area of the full rectangle: $10\\times8=80$.<br>" +
      "Area of the removed corner: $3\\times4=12$.<br>" +
      "Area of the L-shaped room: $80-12=68$.<br>" +
      "<b>Answer:</b> $68$ square units."],

    ["Example 8: Regular polygon from apothem and perimeter",
      "A regular polygon has apothem $4$ and perimeter $30$. Find its area.",
      "The polygon splits into $n$ congruent triangles from the center, each with height $=$ apothem and total base length $=$ perimeter, so $A=\\dfrac{1}{2}\\cdot\\text{apothem}\\cdot\\text{perimeter}$:<br>" +
      "$A=\\dfrac{1}{2}(4)(30)=60$.<br>" +
      "<b>Answer:</b> $60$."],

    ["Example 9: Heron's formula — area from three sides",
      "A triangle has sides $13$, $14$, and $15$. Find its area using Heron's formula.",
      "Semi-perimeter: $s=\\dfrac{13+14+15}{2}=\\dfrac{42}{2}=21$.<br>" +
      "$A=\\sqrt{s(s-a)(s-b)(s-c)}=\\sqrt{21(21-13)(21-14)(21-15)}=\\sqrt{21\\cdot8\\cdot7\\cdot6}$.<br>" +
      "$21\\cdot8=168$; $168\\cdot7=1176$; $1176\\cdot6=7056$.<br>" +
      "$A=\\sqrt{7056}=84$.<br>" +
      "<b>Answer:</b> $84$."],

    ["Example 10: Algebra with a kite's diagonals",
      "A kite's diagonals are $3x$ and $4x$, and its area is $54$. Find $x$ and both diagonal lengths.",
      "$A=\\dfrac{1}{2}d_1d_2=\\dfrac{1}{2}(3x)(4x)=6x^2$.<br>" +
      "$6x^2=54 \\Rightarrow x^2=9 \\Rightarrow x=3$.<br>" +
      "Diagonals: $3x=9$ and $4x=12$.<br>" +
      "<b>Check:</b> $\\dfrac{1}{2}(9)(12)=54$. ✓<br>" +
      "<b>Answer:</b> $x=3$; diagonals $9$ and $12$."],

    ["Example 11: Application — mulching a garden bed",
      "A trapezoidal garden bed has parallel sides $6$ ft and $10$ ft, and height $4$ ft. Mulch costs $\\$2.50$ per square foot. Find the area and the total cost to mulch the bed.",
      "Area: $A=\\dfrac{1}{2}(6+10)(4)=\\dfrac{1}{2}(16)(4)=32$ ft$^2$.<br>" +
      "Cost: $32\\times\\$2.50=\\$80$.<br>" +
      "<b>Answer:</b> area $=32$ ft$^2$; cost $=\\$80$."],
  ],
  questions: [
    ["Problem 1: Triangle", "Base $14$, height $9$. Area?", "$63$"],
    ["Problem 2: Parallelogram", "Base $11$, height $6$. Area?", "$66$"],
    ["Problem 3: Trapezoid", "Bases $7$ and $13$, height $4$. Area?", "$40$"],
    ["Problem 4: Kite", "Diagonals $9$ and $12$. Area?", "$54$"],
    ["Problem 5: Rectangle", "Sides $8$ and $5$. Area?", "$40$"],
    ["Problem 6: Square", "Side $12$. Area?", "$144$"],
    ["Problem 7: Triangle", "Base $20$, height $7$. Area?", "$70$"],
    ["Problem 8: Rhombus", "Diagonals $6$ and $10$. Area?", "$30$"],
    ["Problem 9: Trapezoid", "Bases $10$ and $18$, height $6$. Area?", "$84$"],
    ["Problem 10: Regular polygon", "Apothem $4$, perimeter $30$. Area?", "$60$"],
    ["Problem 11: Parallelogram", "Base $15$, height $8$. Area?", "$120$"],
    ["Problem 12: Hexagon", "Regular hexagon, side $2$. Area?", "$6\\sqrt3$"],
    ["Problem 13: Triangle", "Base $9$, height $12$. Area?", "$54$"],
    ["Problem 14: Challenge", "Use Heron's formula to find the area of a triangle with sides $9$, $10$, $17$.", "$36$"],
    ["Problem 15: Challenge", "An L-shaped patio is a $12\\times9$ rectangle with a $5\\times3$ rectangular corner removed. Find the remaining area.", "$93$ square units"],
  ],
};
