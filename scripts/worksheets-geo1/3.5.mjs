import { fig, parallelogram } from "./_figs.mjs";

function equilTriFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180" width="200" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Equilateral triangle with lines of symmetry">
  <polygon points="100,20 170,150 30,150" fill="#f0fdf4" stroke="#15803d" stroke-width="2.2"/>
  <line x1="100" y1="20" x2="100" y2="150" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="170" y1="150" x2="65" y2="85" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="30" y1="150" x2="135" y2="85" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
</svg>`;
}

function squareFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Square with lines of symmetry">
  <rect x="30" y="30" width="120" height="120" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="30" y1="30" x2="150" y2="150" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="150" y1="30" x2="30" y2="150" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="90" y1="18" x2="90" y2="162" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="18" y1="90" x2="162" y2="90" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
</svg>`;
}

function hexagonFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Regular hexagon with lines of symmetry">
  <polygon points="100,30 160.6,65 160.6,135 100,170 39.4,135 39.4,65" fill="#faf5ff" stroke="#7c3aed" stroke-width="2.2"/>
  <line x1="100" y1="30" x2="100" y2="170" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="39.4" y1="65" x2="160.6" y2="135" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="39.4" y1="135" x2="160.6" y2="65" stroke="#ea580c" stroke-width="1.4" stroke-dasharray="4,3"/>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "3.5",
  title: "Line and Rotational Symmetry",
  intro: "A figure has line symmetry if some reflection maps it onto itself, and rotational symmetry if some rotation less than $360^\\circ$ does the same — and these two properties are surprisingly independent, since a shape can have one without the other. This section explains <i>why</i> a regular $n$-gon always has exactly $n$ lines of symmetry and rotational order $n$, using the Section 3.4 theorem that two reflections compose into a rotation, and it highlights the classic trap that a non-square rectangle's diagonals are not lines of symmetry at all.",
  examples: [
    ["Example 1: Equilateral triangle — three lines through vertex and opposite midpoint",
      "How many lines of symmetry does an equilateral triangle have, and where exactly do they lie?",
      fig(equilTriFig(), "Each line runs from a vertex through the midpoint of the opposite side.") +
      "Each line of symmetry must map the triangle onto itself, which means it has to pass through one vertex and the midpoint of the side opposite that vertex (this keeps the two remaining vertices swapping places correctly).<br>" +
      "Since there are $3$ vertices, there are $3$ such lines — one per vertex.<br>" +
      "<b>Answer:</b> $3$ lines of symmetry."],

    ["Example 2: Square — four lines, not just the diagonals",
      "How many lines of symmetry does a square have, and what are they?",
      fig(squareFig(), "Two diagonals plus a horizontal and a vertical midline — four lines total.") +
      "A square's high symmetry comes from two different kinds of mirror lines: the $2$ diagonals (which swap opposite vertices) and the $2$ lines through the midpoints of opposite sides (horizontal and vertical).<br>" +
      "$2 + 2 = 4$ lines total.<br>" +
      "<b>Answer:</b> $4$ lines of symmetry."],

    ["Example 3: Why a rectangle's diagonals are NOT lines of symmetry",
      "A non-square rectangle has $2$ lines of symmetry. Explain why the diagonals do <i>not</i> count, even though they do for a square.",
      "Reflecting a rectangle over a diagonal would have to swap the two triangles the diagonal creates — but those triangles are only mirror images of each other when all four sides are equal (a square). In a non-square rectangle, the two legs of each triangle have different lengths, so the reflection does not land back on the original rectangle.<br>" +
      "Only the line through the midpoints of the long sides, and the line through the midpoints of the short sides, actually work.<br>" +
      "<b>Answer:</b> $2$ lines of symmetry (through the midpoints of opposite sides) — the diagonals fail because the side lengths are unequal."],

    ["Example 4: Isosceles (non-equilateral) triangle",
      "How many lines of symmetry does an isosceles triangle have if its three side lengths are not all equal?",
      "Only the line through the apex (where the two equal sides meet) and the midpoint of the base works — it swaps the two equal sides onto each other.<br>" +
      "Any other candidate line would have to match up sides of different lengths, which a reflection can never do (reflections preserve length).<br>" +
      "<b>Answer:</b> $1$ line of symmetry."],

    ["Example 5: Scalene triangle has none",
      "Explain why a scalene triangle (all three sides different lengths) has zero lines of symmetry.",
      "Any line of symmetry for a triangle must swap two of its sides, which requires those two sides to be equal in length (since reflections preserve length).<br>" +
      "A scalene triangle has no two sides equal, so no such swap is possible.<br>" +
      "<b>Answer:</b> $0$ lines of symmetry."],

    ["Example 6: Connecting lines of symmetry to rotational order",
      "A square has $4$ lines of symmetry, each pair of adjacent lines meeting at $45^\\circ$. Using the Section 3.4 theorem that two reflections compose into a rotation of double the angle between the lines, find the square's smallest positive angle of rotational symmetry.",
      "Section 3.4 theorem: reflecting over two intersecting lines equals a single rotation through twice the angle between them.<br>" +
      "Two adjacent lines of symmetry meet at $45^\\circ$, so composing those two reflections gives a rotation of $2\\times45^\\circ = 90^\\circ$ — and since both reflections map the square onto itself, so must the resulting rotation.<br>" +
      "<b>Answer:</b> $90^\\circ$, matching rotational symmetry of order $4$ — in general, a shape with $n$ evenly spaced lines of symmetry through one center automatically has rotational order $n$."],

    ["Example 7: Regular hexagon",
      "Using the pattern from Example 6, state the number of lines of symmetry and the order of rotational symmetry for a regular hexagon.",
      fig(hexagonFig(), "A regular n-gon always has n lines of symmetry and rotational order n.") +
      "A regular $n$-gon always has $n$ lines of symmetry and rotational order $n$ (adjacent lines meet at $\\dfrac{180^\\circ}{n}$, so composing them gives a $\\dfrac{360^\\circ}{n}$ rotation).<br>" +
      "For a hexagon, $n=6$.<br>" +
      "<b>Answer:</b> $6$ lines of symmetry; rotational symmetry of order $6$ (smallest angle $60^\\circ$)."],

    ["Example 8: Regular pentagon",
      "A regular pentagon has $5$ lines of symmetry. Find its smallest positive angle of rotational symmetry, and verify using $360^\\circ \\div \\text{order}$.",
      "By the $n$-gon pattern, order $=5$ (matching the $5$ lines of symmetry).<br>" +
      "Smallest angle $= \\dfrac{360^\\circ}{5} = 72^\\circ$.<br>" +
      "<b>Answer:</b> $72^\\circ$."],

    ["Example 9: Rotational symmetry without line symmetry",
      "A parallelogram that is not a rectangle or a rhombus has $180^\\circ$ rotational symmetry about the intersection of its diagonals, but $0$ lines of symmetry. Explain how both facts can be true at once.",
      fig(parallelogram(), "A generic parallelogram: rotates onto itself, but no mirror line works.") +
      "Rotating $180^\\circ$ about the diagonals' intersection swaps each vertex with the opposite one, and opposite sides of a parallelogram are always equal and parallel — so the rotated figure lands back on the original.<br>" +
      "No reflection works, though: a general parallelogram's slanted sides are not mirror images of each other across any line, since neither pair of sides is perpendicular to a potential mirror in the right way (unlike a rectangle or rhombus).<br>" +
      "<b>Answer:</b> Rotational and line symmetry are independent properties — a shape can have one without the other."],

    ["Example 10: The circle — a limiting case",
      "How many lines of symmetry does a circle have, and what is its rotational symmetry?",
      "A circle looks identical from every direction, so <i>any</i> line through its center is a line of symmetry, and <i>any</i> rotation about its center (any angle at all) maps it onto itself.<br>" +
      "This is the limiting case of a regular $n$-gon as $n\\to\\infty$: infinitely many lines, and rotational symmetry with no smallest positive angle.<br>" +
      "<b>Answer:</b> Infinitely many lines of symmetry; rotational symmetry for every angle."],
  ],
  questions: [
    ["Problem 1: Equilateral", "Lines of symmetry of equilateral triangle?", "$3$"],
    ["Problem 2: Square", "Lines of symmetry of a square?", "$4$"],
    ["Problem 3: Rectangle", "Lines of symmetry of non-square rectangle?", "$2$"],
    ["Problem 4: Isosceles", "Lines of symmetry of isosceles (not equilateral)?", "$1$"],
    ["Problem 5: Scalene", "Lines of symmetry of scalene triangle?", "$0$"],
    ["Problem 6: Square rotation", "Least positive rotational angle for square?", "$90^\\circ$"],
    ["Problem 7: Equilateral rotation", "Least positive rotational angle for equilateral triangle?", "$120^\\circ$"],
    ["Problem 8: Regular pentagon", "Order of rotational symmetry?", "$5$"],
    ["Problem 9: Regular hexagon", "Lines of symmetry?", "$6$"],
    ["Problem 10: Circle", "Lines of symmetry of a circle?", "Infinitely many"],
    ["Problem 11: Parallelogram", "Lines of symmetry of a non-rhombus parallelogram?", "$0$"],
    ["Problem 12: Rhombus (not square)", "Lines of symmetry of a non-square rhombus?", "$2$"],
    ["Problem 13: $180^\\circ$ only", "A figure mapped to itself by $180^\\circ$ but no smaller positive angle has order?", "$2$"],
    ["Problem 14: Challenge — regular octagon", "A regular octagon has how many lines of symmetry, and what is its smallest positive angle of rotational symmetry?", "$8$ lines; $45^\\circ$"],
    ["Problem 15: Challenge — composing symmetry lines", "A shape has exactly $2$ lines of symmetry crossing at $90^\\circ$. Using the Section 3.4 composition theorem, what rotational symmetry angle must the shape also have?", "$180^\\circ$ (composing the two reflections gives a rotation of $2\\times90^\\circ=180^\\circ$)"],
  ],
};
