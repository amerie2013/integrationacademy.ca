import { fig, rectangleDiag, rhombusFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "7.3",
  title: "Rectangles, Rhombi, and Squares",
  intro: "Rectangles, rhombi, and squares are all parallelograms, so they inherit every parallelogram property (opposite sides parallel and congruent, opposite angles congruent, consecutive angles supplementary, diagonals bisect each other) — plus one extra rule each. A <b>rectangle</b> has four right angles, which forces its diagonals to be <i>congruent</i>. A <b>rhombus</b> has four congruent sides, which forces its diagonals to be <i>perpendicular</i> and to <i>bisect the vertex angles</i>. A <b>square</b> is both a rectangle and a rhombus, so it has all of these properties at once. Because a rhombus's diagonals are perpendicular and bisect each other, each half-diagonal pair and a side form a right triangle — the Pythagorean Theorem connects diagonal lengths to side lengths. This worksheet uses all of these relationships, often in combination.",
  examples: [
    ["Example 1: Rectangle diagonals are congruent",
      "Rectangle $ABCD$ has diagonal $AC=16$. Find $BD$, and find $AO$, $BO$, $CO$, $DO$ where $O$ is the intersection of the diagonals.",
      fig(rectangleDiag(), "A rectangle's diagonals are congruent and bisect each other.") +
      "Rectangle diagonals are always congruent: $BD=AC=16$.<br>" +
      "Diagonals of any parallelogram bisect each other, so $O$ is the midpoint of both diagonals: $AO=OC=\\dfrac{16}{2}=8$ and $BO=OD=\\dfrac{16}{2}=8$.<br>" +
      "<b>Answer:</b> $BD=16$; all four segments $AO=BO=CO=DO=8$."],

    ["Example 2: Rhombus perimeter and diagonal",
      "A rhombus has perimeter $40$. One diagonal is $12$. Find the side length and the other diagonal.",
      fig(rhombusFig(), "Diagonals of a rhombus are perpendicular bisectors of each other, forming right triangles with the sides.") +
      "Side length: $\\dfrac{40}{4}=10$.<br>" +
      "The diagonals are perpendicular and bisect each other, so half of the given diagonal ($6$) and half of the unknown diagonal form the legs of a right triangle with the side ($10$) as hypotenuse:<br>" +
      "$6^2+h^2=10^2 \\Rightarrow 36+h^2=100 \\Rightarrow h^2=64 \\Rightarrow h=8$.<br>" +
      "Full diagonal $=2(8)=16$.<br>" +
      "<b>Answer:</b> side $=10$; other diagonal $=16$."],

    ["Example 3: Rhombus side from both diagonals",
      "A rhombus has diagonals $24$ and $10$. Find the side length.",
      "The diagonals bisect each other at right angles, giving half-diagonals $12$ and $5$.<br>" +
      "Side $=\\sqrt{12^2+5^2}=\\sqrt{144+25}=\\sqrt{169}=13$.<br>" +
      "<b>Answer:</b> $13$ (this is the $5$-$12$-$13$ Pythagorean triple)."],

    ["Example 4: Square diagonal and area",
      "A square has side $5$. Find the diagonal, and use it to find the area a second way.",
      "Diagonal: $d=5\\sqrt{2}$ (the diagonal of a square is $\\text{side}\\times\\sqrt{2}$, from the $45$-$45$-$90$ relationship).<br>" +
      "<b>Method 1 (side):</b> Area $=5^2=25$.<br>" +
      "<b>Method 2 (diagonal):</b> Area $=\\dfrac{d^2}{2}=\\dfrac{(5\\sqrt{2})^2}{2}=\\dfrac{50}{2}=25$. Same answer. ✓<br>" +
      "<b>Answer:</b> diagonal $=5\\sqrt{2}$; area $=25$."],

    ["Example 5: Rectangle diagonal angle",
      "In rectangle $ABCD$, diagonal $\\overline{AC}$ is drawn, and $m\\angle BAC=32^\\circ$. Find $m\\angle ACD$.",
      fig(rectangleDiag(), "$\\overline{AB}\\parallel\\overline{DC}$; diagonal $\\overline{AC}$ is the transversal.") +
      "$\\overline{AB}\\parallel\\overline{DC}$, and $\\overline{AC}$ is a transversal crossing both.<br>" +
      "$\\angle BAC$ and $\\angle ACD$ are alternate interior angles, so they are congruent: $m\\angle ACD=32^\\circ$.<br>" +
      "<b>Answer:</b> $32^\\circ$."],

    ["Example 6: Rhombus diagonals bisect the vertex angles",
      "In rhombus $ABCD$, $m\\angle A=70^\\circ$. Diagonal $\\overline{AC}$ is drawn. Find $m\\angle BAC$ and $m\\angle DAC$, then find $m\\angle B$.",
      "A rhombus's diagonal bisects the vertex angle it passes through, so it splits $\\angle A$ into two equal halves:<br>" +
      "$m\\angle BAC=m\\angle DAC=\\dfrac{70^\\circ}{2}=35^\\circ$.<br>" +
      "For the full angle: a rhombus is a parallelogram, so consecutive angles are supplementary: $m\\angle B=180^\\circ-70^\\circ=110^\\circ$.<br>" +
      "<b>Answer:</b> $\\angle BAC=\\angle DAC=35^\\circ$; $\\angle B=110^\\circ$."],

    ["Example 7: Square from its diagonal",
      "A square has diagonal $10\\sqrt{2}$. Find the side length and the perimeter.",
      "Since $d=s\\sqrt{2}$: $10\\sqrt{2}=s\\sqrt{2} \\Rightarrow s=10$.<br>" +
      "Perimeter $=4(10)=40$.<br>" +
      "<b>Answer:</b> side $=10$; perimeter $=40$."],

    ["Example 8: Identify the figure from its properties",
      "A parallelogram has perpendicular diagonals and also has a right angle. What figure must it be, and why?",
      "Perpendicular diagonals in a parallelogram force all four sides to be congruent — that makes it a <b>rhombus</b>.<br>" +
      "A rhombus with one right angle has all four angles equal to $90^\\circ$ (opposite angles congruent, consecutive angles supplementary) — that makes it a <b>rectangle</b> too.<br>" +
      "A figure that is both a rhombus and a rectangle is a <b>square</b>."],

    ["Example 9: Rectangle diagonal from side lengths",
      "A rectangle has sides $9$ and $12$. Find the length of a diagonal.",
      "A rectangle's diagonal is the hypotenuse of a right triangle formed with the two sides:<br>" +
      "$d=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}=15$.<br>" +
      "<b>Answer:</b> $15$."],

    ["Example 10: Rhombus — side and one diagonal given, find the other diagonal and the area",
      "A rhombus has side $17$ and one diagonal $16$. Find the other diagonal and the area of the rhombus.",
      "Half of the known diagonal: $\\dfrac{16}{2}=8$.<br>" +
      "This is a leg of a right triangle with hypotenuse $17$ (the side): $8^2+h^2=17^2 \\Rightarrow 64+h^2=289 \\Rightarrow h^2=225 \\Rightarrow h=15$.<br>" +
      "Full other diagonal $=2(15)=30$.<br>" +
      "Area of a rhombus $=\\dfrac{1}{2}d_1 d_2=\\dfrac{1}{2}(16)(30)=240$.<br>" +
      "<b>Answer:</b> other diagonal $=30$; area $=240$."],

    ["Example 11: Application — a square window brace",
      "A square window has a diagonal support brace measuring $8\\sqrt{2}$ ft. Find the perimeter and area of the window.",
      "Diagonal $=s\\sqrt{2}=8\\sqrt{2} \\Rightarrow s=8$ ft.<br>" +
      "Perimeter $=4(8)=32$ ft.<br>" +
      "Area $=8^2=64$ ft$^2$.<br>" +
      "<b>Answer:</b> perimeter $=32$ ft; area $=64$ ft$^2$."],
  ],
  questions: [
    ["Problem 1: Rectangle", "Diagonal $AC=22$. Find $BD$.", "$22$"],
    ["Problem 2: Rhombus", "Perimeter $60$. Each side?", "$15$"],
    ["Problem 3: Rhombus", "Diagonals $10$ and $24$. Side length?", "$13$"],
    ["Problem 4: Square", "Side $7$. Diagonal?", "$7\\sqrt{2}$"],
    ["Problem 5: Square", "Diagonal $6\\sqrt{2}$. Side?", "$6$"],
    ["Problem 6: Rhombus angles", "One angle $55^\\circ$. Adjacent angle?", "$125^\\circ$"],
    ["Problem 7: Rectangle", "Sides $5$ and $12$. Diagonal?", "$13$"],
    ["Problem 8: Identify", "Four congruent sides and four right angles. Name the figure.", "Square"],
    ["Problem 9: Rhombus", "Diagonals $8$ and $6$. Side?", "$5$"],
    ["Problem 10: Rectangle", "Do diagonals of a rectangle always bisect its angles?", "No (only if it's a square)"],
    ["Problem 11: Square", "Perimeter $36$. Diagonal?", "$9\\sqrt{2}$"],
    ["Problem 12: Rhombus", "Side $25$, one diagonal $14$. Find the other diagonal.", "$48$"],
    ["Problem 13: Property", "Diagonals of a rhombus are always…", "Perpendicular bisectors of each other, and they bisect the vertex angles"],
    ["Problem 14: Challenge", "A rhombus has diagonals in ratio $3:4$ and area $96$. Find both diagonal lengths and the side length.", "Diagonals $12$ and $16$; side $10$"],
    ["Problem 15: Challenge", "The diagonal of a square is $4$ cm longer than its side. Find the side length to the nearest tenth of a centimeter.", "$\\approx 9.7$ cm"],
  ],
};
