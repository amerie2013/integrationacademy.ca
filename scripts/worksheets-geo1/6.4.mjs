import { fig, rightTri } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "6.4",
  title: "Solving Right Triangles",
  intro: "\"Solving\" a right triangle means finding every missing side and acute angle. Use the <b>Pythagorean Theorem</b> when two sides are known and you need the third. Use a <b>trig ratio</b> (SOH-CAH-TOA) when one side and one acute angle are known and you need another side. Use an <b>inverse trig function</b> ($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$) when two sides are known and you need an angle — for example, if $\\tan\\theta=\\dfrac{3}{4}$, then $\\theta=\\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right)$. Once one acute angle is known, the other follows immediately since the two acute angles are complementary ($90^{\\circ}$ minus the first). This worksheet combines all three tools, and several problems ask you to fully solve a triangle — finding all three sides and both acute angles.",
  examples: [
    ["Example 1: Two legs — find hypotenuse and an angle",
      "Legs $9$ and $12$. Find the hypotenuse and both acute angles (express angles using inverse trig).",
      fig(rightTri("12", "9", "c"), "Two legs known; find $c$, then an angle.") +
      "Find the hypotenuse with the Pythagorean Theorem: $c^{2}=9^{2}+12^{2}=81+144=225$<br>" +
      "$c=15$.<br>" +
      "Find one acute angle using $\\tan$: $\\theta=\\tan^{-1}\\!\\left(\\dfrac{9}{12}\\right)=\\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right)$.<br>" +
      "The other acute angle is the complement: $90^{\\circ}-\\theta$.<br>" +
      "<b>Answer:</b> $c=15$; angles are $\\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right)$ and $90^{\\circ}-\\tan^{-1}\\!\\left(\\dfrac{3}{4}\\right)$."],

    ["Example 2: Leg and angle — find the hypotenuse",
      "One leg is $10$, adjacent to a $35^{\\circ}$ angle. Find the hypotenuse.",
      "Identify the ratio linking the adjacent side and the hypotenuse: CAH.<br>" +
      "$\\cos 35^{\\circ}=\\dfrac{10}{\\text{hyp}}$<br>" +
      "Solve: hyp $=\\dfrac{10}{\\cos 35^{\\circ}}$.<br>" +
      "<b>Answer:</b> hyp $=\\dfrac{10}{\\cos 35^{\\circ}}$."],

    ["Example 3: Hypotenuse and angle — find the opposite side",
      "The hypotenuse is $20$, and one acute angle is $40^{\\circ}$. Find the opposite side.",
      "Identify the ratio linking the opposite side and the hypotenuse: SOH.<br>" +
      "$\\sin 40^{\\circ}=\\dfrac{\\text{opp}}{20}$<br>" +
      "Solve: opp $=20\\sin 40^{\\circ}$.<br>" +
      "<b>Answer:</b> opp $=20\\sin 40^{\\circ}$."],

    ["Example 4: Two sides — find the angle",
      "Opposite side $=5$, adjacent side $=12$. Find the acute angle $\\theta$.",
      "Identify the ratio linking opposite and adjacent: TOA.<br>" +
      "$\\tan\\theta=\\dfrac{5}{12}$<br>" +
      "Solve using the inverse tangent: $\\theta=\\tan^{-1}\\!\\left(\\dfrac{5}{12}\\right)$.<br>" +
      "<b>Answer:</b> $\\theta=\\tan^{-1}\\!\\left(\\dfrac{5}{12}\\right)$."],

    ["Example 5: Verify a special triangle and name the angles",
      "A triangle has sides $5$, $5\\sqrt{3}$, and $10$. Verify it is a right triangle, then identify all three angles.",
      "Check the Pythagorean Theorem with the longest side as the hypotenuse: $5^{2}+(5\\sqrt{3})^{2}=25+75=100=10^{2}$ ✓.<br>" +
      "The side ratios $x : x\\sqrt{3} : 2x$ (with $x=5$) match the $30$-$60$-$90$ pattern.<br>" +
      "<b>Answer:</b> angles are $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$."],

    ["Example 6: Find the other acute angle",
      "One acute angle of a right triangle is $52^{\\circ}$. Find the other.",
      "The two acute angles of a right triangle are complementary: they sum to $90^{\\circ}$.<br>" +
      "Other angle $=90-52=38^{\\circ}$.<br>" +
      "<b>Answer:</b> $38^{\\circ}$."],

    ["Example 7: Side then angle",
      "Legs $8$ and $15$. Find the hypotenuse, then the angle opposite the leg of length $8$.",
      "Find the hypotenuse: $c^{2}=8^{2}+15^{2}=64+225=289$<br>" +
      "$c=17$.<br>" +
      "Find the angle using SOH: $\\theta=\\sin^{-1}\\!\\left(\\dfrac{8}{17}\\right)$.<br>" +
      "<b>Answer:</b> hypotenuse $=17$; $\\theta=\\sin^{-1}\\!\\left(\\dfrac{8}{17}\\right)$."],

    ["Example 8: Adjacent side from angle",
      "Hypotenuse $=18$, angle $=28^{\\circ}$. Find the adjacent side.",
      "Identify the ratio linking adjacent and hypotenuse: CAH.<br>" +
      "$\\cos 28^{\\circ}=\\dfrac{\\text{adj}}{18}$<br>" +
      "Solve: adj $=18\\cos 28^{\\circ}$.<br>" +
      "<b>Answer:</b> adj $=18\\cos 28^{\\circ}$."],

    ["Example 9: Inverse cosine",
      "Adjacent $=9$, hypotenuse $=15$. Find $\\theta$.",
      "Identify the ratio: CAH.<br>" +
      "$\\cos\\theta=\\dfrac{9}{15}=\\dfrac{3}{5}$<br>" +
      "Solve using the inverse cosine: $\\theta=\\cos^{-1}\\!\\left(\\dfrac{3}{5}\\right)$.<br>" +
      "<b>Answer:</b> $\\theta=\\cos^{-1}\\!\\left(\\dfrac{3}{5}\\right)$."],

    ["Example 10: Fully solve a triangle",
      "A right triangle has leg $10$ and hypotenuse $26$. Solve the triangle completely (find the other leg and both acute angles).",
      fig(rightTri("b", "10", "26"), "One leg and the hypotenuse are known; find $b$ first.") +
      "Find the other leg using the Pythagorean Theorem: $b^{2}=26^{2}-10^{2}=676-100=576$<br>" +
      "$b=24$.<br>" +
      "Find one acute angle: $\\theta=\\sin^{-1}\\!\\left(\\dfrac{10}{26}\\right)=\\sin^{-1}\\!\\left(\\dfrac{5}{13}\\right)$.<br>" +
      "Find the other acute angle: $\\phi=\\sin^{-1}\\!\\left(\\dfrac{24}{26}\\right)=\\sin^{-1}\\!\\left(\\dfrac{12}{13}\\right)$; note $\\theta+\\phi=90^{\\circ}$ since the acute angles are complementary.<br>" +
      "<b>Answer:</b> other leg $=24$; angles $=\\sin^{-1}\\!\\left(\\dfrac{5}{13}\\right)$ and $\\sin^{-1}\\!\\left(\\dfrac{12}{13}\\right)$."],
  ],
  questions: [
    ["Problem 1: Hypotenuse", "Legs $5$ and $12$. Find $c$.", "$13$"],
    ["Problem 2: Other acute angle", "One acute angle is $41^{\\circ}$. Find the other.", "$49^{\\circ}$"],
    ["Problem 3: Opposite side", "Hypotenuse $=25$, angle $=30^{\\circ}$. Find the opposite side (exact).", "$12.5$"],
    ["Problem 4: Inverse tangent", "Opposite $=7$, adjacent $=24$. Express $\\theta$.", "$\\tan^{-1}\\!\\left(\\dfrac{7}{24}\\right)$"],
    ["Problem 5: Adjacent side", "Hypotenuse $=14$, angle $=60^{\\circ}$. Find the adjacent side (exact).", "$7$"],
    ["Problem 6: Hypotenuse", "Adjacent $=8$, angle $=45^{\\circ}$. Find the hypotenuse (exact).", "$8\\sqrt{2}$"],
    ["Problem 7: Inverse sine", "Opposite $=9$, hypotenuse $=15$. Express $\\theta$.", "$\\sin^{-1}\\!\\left(\\dfrac{3}{5}\\right)$"],
    ["Problem 8: Hypotenuse", "Legs $20$ and $21$. Find the hypotenuse.", "$29$"],
    ["Problem 9: Opposite side", "Adjacent $=12$, $\\tan\\theta=\\dfrac{5}{12}$. Find the opposite side.", "$5$"],
    ["Problem 10: Other acute angle", "Angle $A=67^{\\circ}$ in a right triangle. Find angle $B$.", "$23^{\\circ}$"],
    ["Problem 11: Inverse cosine", "Adjacent $=8$, hypotenuse $=17$. Express $\\theta$.", "$\\cos^{-1}\\!\\left(\\dfrac{8}{17}\\right)$"],
    ["Problem 12: Opposite side", "Hypotenuse $=30$, angle $=45^{\\circ}$. Find the opposite side (exact).", "$15\\sqrt{2}$"],
    ["Problem 13: Challenge — fully solve", "A right triangle has legs $10$ and $24$. Find the hypotenuse and both acute angles (as inverse-sine expressions).", "Hypotenuse $=26$; angles $=\\sin^{-1}\\!\\left(\\dfrac{5}{13}\\right)$ and $\\sin^{-1}\\!\\left(\\dfrac{12}{13}\\right)$"],
    ["Problem 14: Challenge — angle and hypotenuse given", "A right triangle has hypotenuse $34$ and one acute angle $28^{\\circ}$. Find both legs (in terms of $\\sin28^{\\circ}$ and $\\cos28^{\\circ}$), then the other acute angle.", "Opposite leg $=34\\sin28^{\\circ}$; adjacent leg $=34\\cos28^{\\circ}$; other angle $=62^{\\circ}$"],
    ["Problem 15: Challenge — scaled special triangle", "A right triangle is similar to a $3$-$4$-$5$ triangle, scaled so its hypotenuse is $45$. Find both legs, and express one acute angle as an inverse-sine ratio in lowest terms.", "Legs $=27$ and $36$; one acute angle $=\\sin^{-1}\\!\\left(\\dfrac{3}{5}\\right)$"],
  ],
};
