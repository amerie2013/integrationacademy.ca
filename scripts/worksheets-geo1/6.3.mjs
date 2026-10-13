import { fig, rightTri } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "6.3",
  title: "Sine, Cosine, and Tangent (SOH-CAH-TOA)",
  intro: "For an acute angle $\\theta$ in a right triangle, label the sides relative to $\\theta$: the <b>hypotenuse</b> (always opposite the right angle), the <b>opposite</b> side (across from $\\theta$), and the <b>adjacent</b> side (next to $\\theta$, not the hypotenuse). The three basic trig ratios are $\\sin\\theta=\\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta=\\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta=\\dfrac{\\text{opp}}{\\text{adj}}$ — remembered by <b>SOH-CAH-TOA</b>. Because all right triangles with the same acute angle are similar, these ratios depend only on the angle, never on the triangle's size. A useful consequence: the two acute angles $A$ and $B$ of a right triangle are complementary ($A+B=90^{\\circ}$), and the side opposite $A$ is the same side that's adjacent to $B$ — so $\\sin A=\\cos B$ always. This worksheet practises writing ratios, solving for missing sides, and combining trig with the Pythagorean Theorem.",
  examples: [
    ["Example 1: Write $\\sin$",
      "Right $\\triangle ABC$ has a right angle at $C$. The side opposite $\\angle A$ is $5$, the side adjacent to $\\angle A$ is $12$, and the hypotenuse is $13$. Find $\\sin A$.",
      fig(rightTri("12", "5", "13"), "Relative to $\\angle A$: opposite $=5$, adjacent $=12$, hypotenuse $=13$.") +
      "Identify the parts relative to $\\angle A$: opposite $=5$, hypotenuse $=13$.<br>" +
      "Apply SOH: $\\sin A=\\dfrac{\\text{opp}}{\\text{hyp}}$<br>" +
      "$\\sin A=\\dfrac{5}{13}$.<br>" +
      "<b>Answer:</b> $\\sin A=\\dfrac{5}{13}$."],

    ["Example 2: Write $\\cos$",
      "Using the same triangle as Example 1 (opposite $=5$, adjacent $=12$, hypotenuse $=13$), find $\\cos A$.",
      "Identify the parts relative to $\\angle A$: adjacent $=12$, hypotenuse $=13$.<br>" +
      "Apply CAH: $\\cos A=\\dfrac{\\text{adj}}{\\text{hyp}}$<br>" +
      "$\\cos A=\\dfrac{12}{13}$.<br>" +
      "<b>Answer:</b> $\\cos A=\\dfrac{12}{13}$."],

    ["Example 3: Write $\\tan$",
      "A right triangle has, relative to angle $\\theta$: opposite $=8$, adjacent $=15$. Find $\\tan\\theta$.",
      "Identify the parts: opposite $=8$, adjacent $=15$.<br>" +
      "Apply TOA: $\\tan\\theta=\\dfrac{\\text{opp}}{\\text{adj}}$<br>" +
      "$\\tan\\theta=\\dfrac{8}{15}$.<br>" +
      "<b>Answer:</b> $\\tan\\theta=\\dfrac{8}{15}$."],

    ["Example 4: Find the opposite side",
      "$\\sin\\theta=\\dfrac{3}{5}$ and the hypotenuse is $20$. Find the opposite side.",
      "Set up the ratio: $\\sin\\theta=\\dfrac{\\text{opp}}{\\text{hyp}} \\Rightarrow \\dfrac{3}{5}=\\dfrac{\\text{opp}}{20}$<br>" +
      "Solve: opp $=20\\times\\dfrac{3}{5}=12$.<br>" +
      "<b>Answer:</b> $12$."],

    ["Example 5: Find the adjacent side",
      "$\\cos\\theta=\\dfrac{4}{5}$ and the hypotenuse is $15$. Find the adjacent side.",
      "Set up the ratio: $\\cos\\theta=\\dfrac{\\text{adj}}{\\text{hyp}} \\Rightarrow \\dfrac{4}{5}=\\dfrac{\\text{adj}}{15}$<br>" +
      "Solve: adj $=15\\times\\dfrac{4}{5}=12$.<br>" +
      "<b>Answer:</b> $12$."],

    ["Example 6: Find the opposite side using $\\tan$",
      "$\\tan A=\\dfrac{3}{4}$ and the adjacent side is $8$. Find the opposite side.",
      "Set up the ratio: $\\tan A=\\dfrac{\\text{opp}}{\\text{adj}} \\Rightarrow \\dfrac{3}{4}=\\dfrac{\\text{opp}}{8}$<br>" +
      "Solve: opp $=8\\times\\dfrac{3}{4}=6$.<br>" +
      "<b>Answer:</b> $6$."],

    ["Example 7: Why $\\sin A=\\cos B$",
      "In a right triangle with right angle $C$, prove that $\\sin A=\\cos B$ where $A$ and $B$ are the two acute angles.",
      "Since $\\angle C=90^{\\circ}$, the Angle-Sum Theorem gives $\\angle A+\\angle B=90^{\\circ}$ — the acute angles are complementary.<br>" +
      "The side opposite $\\angle A$ (call it $a$) is the same side that touches $\\angle B$ but is not the hypotenuse — so $a$ is <i>adjacent</i> to $\\angle B$.<br>" +
      "Therefore $\\sin A=\\dfrac{a}{\\text{hyp}}$ and $\\cos B=\\dfrac{a}{\\text{hyp}}$ — the same ratio.<br>" +
      "Numeric check with $a=5$, hyp $=13$: $\\sin A=\\dfrac{5}{13}$ and $\\cos B=\\dfrac{5}{13}$ ✓.<br>" +
      "<b>Conclusion:</b> $\\sin A=\\cos B$ always, for complementary acute angles."],

    ["Example 8: Find the hypotenuse",
      "$\\sin\\theta=\\dfrac{5}{13}$ and the opposite side is $10$. Find the hypotenuse.",
      "Set up the ratio: $\\sin\\theta=\\dfrac{\\text{opp}}{\\text{hyp}} \\Rightarrow \\dfrac{5}{13}=\\dfrac{10}{\\text{hyp}}$<br>" +
      "Solve: hyp $=10\\div\\dfrac{5}{13}=10\\times\\dfrac{13}{5}=26$.<br>" +
      "<b>Answer:</b> $26$."],

    ["Example 9: All three ratios from a $7$-$24$-$25$ triangle",
      "A right triangle has opposite $=7$, adjacent $=24$, hypotenuse $=25$ (relative to $\\theta$). Find $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.",
      fig(rightTri("24", "7", "25"), "A $7$-$24$-$25$ right triangle.") +
      "Apply each ratio directly from the given sides:<br>" +
      "$\\sin\\theta=\\dfrac{7}{25}$<br>" +
      "$\\cos\\theta=\\dfrac{24}{25}$<br>" +
      "$\\tan\\theta=\\dfrac{7}{24}$.<br>" +
      "<b>Answer:</b> $\\sin\\theta=\\dfrac{7}{25}$, $\\cos\\theta=\\dfrac{24}{25}$, $\\tan\\theta=\\dfrac{7}{24}$."],

    ["Example 10: Pythagorean Theorem, then trig",
      "A right triangle has legs $9$ and $40$. Find the hypotenuse, then $\\sin\\theta$ and $\\cos\\theta$ for the acute angle opposite the leg of length $9$.",
      fig(rightTri("40", "9", "c"), "First find $c$, then use all three sides for the trig ratios.") +
      "Find the hypotenuse using the Pythagorean Theorem: $c^{2}=9^{2}+40^{2}=81+1600=1681$<br>" +
      "$c=\\sqrt{1681}=41$.<br>" +
      "Now apply the trig ratios relative to the angle opposite $9$: $\\sin\\theta=\\dfrac{9}{41}$; $\\cos\\theta=\\dfrac{40}{41}$.<br>" +
      "<b>Answer:</b> hypotenuse $=41$; $\\sin\\theta=\\dfrac{9}{41}$, $\\cos\\theta=\\dfrac{40}{41}$."],
  ],
  questions: [
    ["Problem 1: $\\sin$", "Opposite $=9$, hypotenuse $=15$. Find $\\sin\\theta$.", "$\\dfrac{3}{5}$"],
    ["Problem 2: $\\cos$", "Adjacent $=8$, hypotenuse $=17$. Find $\\cos\\theta$.", "$\\dfrac{8}{17}$"],
    ["Problem 3: $\\tan$", "Opposite $=5$, adjacent $=12$. Find $\\tan\\theta$.", "$\\dfrac{5}{12}$"],
    ["Problem 4: Find opposite", "$\\sin\\theta=\\dfrac{4}{5}$, hypotenuse $=25$. Find the opposite side.", "$20$"],
    ["Problem 5: Find adjacent", "$\\cos\\theta=\\dfrac{3}{5}$, hypotenuse $=20$. Find the adjacent side.", "$12$"],
    ["Problem 6: Find opposite", "$\\tan\\theta=\\dfrac{5}{12}$, adjacent $=24$. Find the opposite side.", "$10$"],
    ["Problem 7: Find hypotenuse", "$\\sin\\theta=\\dfrac{8}{17}$, opposite $=16$. Find the hypotenuse.", "$34$"],
    ["Problem 8: All ratios", "Opposite $=6$, adjacent $=8$, hypotenuse $=10$. Find $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$.", "$\\dfrac{3}{5}$; $\\dfrac{4}{5}$; $\\dfrac{3}{4}$"],
    ["Problem 9: Find adjacent", "$\\tan\\theta=\\dfrac{7}{24}$, opposite $=14$. Find the adjacent side.", "$48$"],
    ["Problem 10: $\\cos$", "Adjacent $=20$, hypotenuse $=25$. Find $\\cos\\theta$.", "$\\dfrac{4}{5}$"],
    ["Problem 11: Find hypotenuse", "$\\cos\\theta=\\dfrac{12}{13}$, adjacent $=36$. Find the hypotenuse.", "$39$"],
    ["Problem 12: Complementary", "If $\\sin A=\\dfrac{5}{13}$, what is $\\cos B$ for the other acute angle $B$?", "$\\dfrac{5}{13}$"],
    ["Problem 13: Challenge — Pythagorean + trig", "A right triangle has legs $20$ and $21$. Find the hypotenuse, then $\\sin\\theta$ and $\\cos\\theta$ for the angle opposite the leg of $20$.", "Hypotenuse $=29$; $\\sin\\theta=\\dfrac{20}{29}$, $\\cos\\theta=\\dfrac{21}{29}$"],
    ["Problem 14: Challenge — from $\\tan$ to all ratios", "$\\tan\\theta=\\dfrac{3}{4}$. Find $\\sin\\theta$ and $\\cos\\theta$.", "$\\sin\\theta=\\dfrac{3}{5}$, $\\cos\\theta=\\dfrac{4}{5}$"],
    ["Problem 15: Challenge — multi-step", "A right triangle has hypotenuse $50$ and $\\sin\\theta=0.6$ for one acute angle. Find the opposite side, then the adjacent side (Pythagorean Theorem), then $\\cos\\theta$.", "Opposite $=30$; adjacent $=40$; $\\cos\\theta=\\dfrac{4}{5}$"],
  ],
};
