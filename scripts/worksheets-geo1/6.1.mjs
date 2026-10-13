import { fig, rightTri, elevationFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "6.1",
  title: "Pythagorean Theorem",
  intro: "In a right triangle with legs $a$ and $b$ and hypotenuse $c$, the Pythagorean Theorem says $a^{2}+b^{2}=c^{2}$. The converse lets you classify any triangle as acute, right, or obtuse by comparing $a^{2}+b^{2}$ with $c^{2}$ (where $c$ is the longest side). This worksheet goes beyond one-step triples: expect radicals, multi-step applications, and classification with careful ordering of sides.",
  examples: [
    ["Example 1: Find the hypotenuse (full steps)",
      "In right $\\triangle ABC$ with right angle at $C$, $AC = 9$ and $BC = 12$. Find $AB$.",
      fig(rightTri("12", "9", "c"), "Right angle at $C$; hypotenuse is opposite the right angle.") +
      "Identify the hypotenuse: $AB = c$ is opposite $\\angle C$.<br>" +
      "Apply $a^{2}+b^{2}=c^{2}$:<br>" +
      "$9^{2}+12^{2}=c^{2}$<br>" +
      "$81+144=c^{2}$<br>" +
      "$c^{2}=225$<br>" +
      "$c=\\sqrt{225}=15$ (length is positive).<br>" +
      "<b>Answer:</b> $AB = 15$."],

    ["Example 2: Find a leg — leave exact form",
      "A right triangle has hypotenuse $10$ and one leg $4$. Find the other leg in simplest radical form.",
      "Let the unknown leg be $x$. Then<br>" +
      "$4^{2}+x^{2}=10^{2}$<br>" +
      "$16+x^{2}=100$<br>" +
      "$x^{2}=84$<br>" +
      "$x=\\sqrt{84}=\\sqrt{4\\cdot21}=2\\sqrt{21}$.<br>" +
      "<b>Answer:</b> $2\\sqrt{21}$."],

    ["Example 3: Converse — prove it is right",
      "A triangle has sides $20$, $21$, and $29$. Show it is a right triangle.",
      "Longest side is $29$, so test whether $20^{2}+21^{2}=29^{2}$.<br>" +
      "$20^{2}+21^{2}=400+441=841$<br>" +
      "$29^{2}=841$<br>" +
      "Equal $\\Rightarrow$ by the converse of the Pythagorean Theorem, the triangle is <b>right</b> (right angle opposite $29$)."],

    ["Example 4: Classify carefully",
      "Sides $7$, $10$, and $12$. Classify as acute, right, or obtuse.",
      "Longest side $c=12$. Compare $7^{2}+10^{2}$ with $12^{2}$:<br>" +
      "$49+100=149$ and $144$.<br>" +
      "Since $a^{2}+b^{2} > c^{2}$ ($149>144$), the triangle is <b>acute</b>.<br>" +
      "<i>Memory:</i> $>$ acute, $=$ right, $<$ obtuse (always using the longest side as $c$)."],

    ["Example 5: Ladder against a wall",
      "A $25$ ft ladder leans against a wall. Its base is $7$ ft from the wall. How high up the wall does it reach?",
      fig(elevationFig(), "Model: ladder = hypotenuse; wall height and ground distance are legs.") +
      "Let $h$ be the height on the wall.<br>" +
      "$7^{2}+h^{2}=25^{2}$<br>" +
      "$49+h^{2}=625$<br>" +
      "$h^{2}=576$<br>" +
      "$h=24$ ft.<br>" +
      "<b>Check:</b> $7$-$24$-$25$ is a scaled $7$-$24$-$25$ triple. ✓"],

    ["Example 6: Diagonal of a rectangle",
      "A rectangular courtyard is $16$ m by $30$ m. Find the length of a diagonal walkway.",
      "The diagonal is the hypotenuse of a right triangle with legs $16$ and $30$:<br>" +
      "$d^{2}=16^{2}+30^{2}=256+900=1156$<br>" +
      "$d=\\sqrt{1156}=34$ m.<br>" +
      "<b>Answer:</b> $34$ m."],

    ["Example 7: Two steps — find then classify",
      "A triangle has sides $x$, $15$, and $17$, and you are told $x^{2}+15^{2}=17^{2}$. Find $x$, then state what kind of triangle it is.",
      "From the given: $x^{2}+225=289$ $\\Rightarrow$ $x^{2}=64$ $\\Rightarrow$ $x=8$.<br>" +
      "Sides $8$, $15$, $17$ satisfy $8^{2}+15^{2}=17^{2}$, so the triangle is <b>right</b>."],

    ["Example 8: Isosceles right triangle",
      "An isosceles right triangle has legs of length $5\\sqrt{2}$. Find the hypotenuse.",
      "Both legs equal $5\\sqrt{2}$:<br>" +
      "$c^{2}=(5\\sqrt{2})^{2}+(5\\sqrt{2})^{2}=50+50=100$<br>" +
      "$c=10$.<br>" +
      "(Shortcut: in a $45$-$45$-$90$ triangle, hypotenuse $=\\text{leg}\\cdot\\sqrt{2}=(5\\sqrt{2})\\sqrt{2}=10$.)"],

    ["Example 9: Word problem with a missing piece",
      "A guy wire is anchored $9$ m from the base of a vertical pole and reaches a point $12$ m up the pole. A second wire from the same anchor reaches the top of the pole. If the pole is $20$ m tall, how long is the second wire?",
      "The second wire is the hypotenuse for legs $9$ and $20$:<br>" +
      "$L^{2}=9^{2}+20^{2}=81+400=481$<br>" +
      "$L=\\sqrt{481}$ m ( $481=13\\cdot37$, so this does not simplify further).<br>" +
      "<b>Answer:</b> $\\sqrt{481}$ m.<br>" +
      "<i>Note:</i> The $9$-$12$ wire is a red herring for the final length — draw the diagram and use the full height $20$."],

    ["Example 10: Oblique classification trap",
      "Sides $9$, $40$, and $41$. A student claims $9^{2}+40^{2} \\neq 41^{2}$ so it is not right. Check their claim.",
      "Compute carefully: $81+1600=1681$ and $41^{2}=1681$. They <b>are</b> equal — it is a right triangle ($9$-$40$-$41$ triple). The student likely mis-multiplied $41^{2}$."],
  ],
  questions: [
    ["Problem 1: Hypotenuse", "Legs $11$ and $60$. Find the hypotenuse.", "$61$"],
    ["Problem 2: Leg (radical)", "Hypotenuse $14$, one leg $6$. Find the other leg in simplest radical form.", "$4\\sqrt{10}$"],
    ["Problem 3: Converse", "Sides $12$, $35$, $37$. Is the triangle right? Show the test.", "Yes; $12^{2}+35^{2}=37^{2}$"],
    ["Problem 4: Classify", "Sides $6$, $9$, $11$. Acute, right, or obtuse?", "Obtuse ($36+81=117<121$)"],
    ["Problem 5: Ladder", "A $29$ ft ladder's base is $20$ ft from a wall. How high does it reach?", "$21$ ft"],
    ["Problem 6: Diagonal", "TV screen $27$ in by $36$ in (rectangular). Find the diagonal.", "$45$ in"],
    ["Problem 7: Classify", "Sides $13$, $14$, $15$. Classify.", "Acute ($169+196=365>225$)"],
    ["Problem 8: Exact length", "Legs $5$ and $5\\sqrt{3}$. Find the hypotenuse.", "$10$"],
    ["Problem 9: Missing leg", "Hypotenuse $2\\sqrt{13}$, leg $4$. Find the other leg.", "$6$"],
    ["Problem 10: Application", "A baseball diamond is a square with side $90$ ft. Find the distance from home to second (exact form).", "$90\\sqrt{2}$ ft"],
    ["Problem 11: Converse false friend", "Sides $5$, $12$, $14$. Right triangle? Justify.", "No; $25+144=169\\neq196$ (obtuse)"],
    ["Problem 12: Multi-step", "Right triangle: one leg is $8$, hypotenuse is $3$ more than the other leg. Find all three sides.", "Legs $8$ and $15$; hypotenuse $17$"],
    ["Problem 13: Perimeter path", "A rectangular park is $40$ m by $42$ m. You walk the two short sides and one long side, or you cut the diagonal then walk one short side. Which route is shorter, and by how much?", "Diagonal+short is shorter by $14$ m"],
    ["Problem 14: Challenge", "An isosceles triangle has sides $10$, $10$, and base $12$. Classify the apex angle (between the equal sides). Hint: compare $10^{2}+10^{2}$ with $12^{2}$.", "Acute ($100+100=200>144$)"],
    ["Problem 15: Challenge", "A wire from the top of a $15$ m pole to the ground is $25$ m long. How far from the base is the anchor? If the wire slips so the anchor moves $8$ m farther from the base, how high on the pole does the wire now reach?", "First distance $20$ m; new height $7$ m"],
  ],
};
