import { fig, coordQuad } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "8.4",
  title: "Perimeter and Area on the Coordinate Plane",
  intro: "On the coordinate plane, the distance formula gives every side length, so perimeter is just a sum of distances. For area, axis-aligned rectangles and right triangles can be read directly off the grid, and figures with horizontal bases can use the familiar area formulas. For an irregular polygon whose vertices are not conveniently aligned with the axes, use the <b>Shoelace Formula</b>: list the vertices in order around the polygon, then $A=\\dfrac{1}{2}\\left|\\sum (x_i y_{i+1} - x_{i+1} y_i)\\right|$ — multiply each $x$ by the next $y$, subtract the next $x$ times the current $y$, add up all these terms, take the absolute value, and halve it. This worksheet builds from basic axis-aligned figures up to the Shoelace Formula for general polygons.",
  examples: [
    ["Example 1: Rectangle perimeter from vertices",
      "Vertices $(0,0)$, $(6,0)$, $(6,4)$, $(0,4)$. Find the perimeter.",
      fig(coordQuad([{ x: 0, y: 0, label: "A" }, { x: 6, y: 0, label: "B" }, { x: 6, y: 4, label: "C" }, { x: 0, y: 4, label: "D" }]), "Sides read directly from the grid: $6$ and $4$.") +
      "Side lengths: $6$ and $4$ (read directly since the sides are horizontal/vertical).<br>" +
      "$P=2(6+4)=20$.<br>" +
      "<b>Answer:</b> $20$."],

    ["Example 2: Rectangle area from the same vertices",
      "Using the rectangle from Example 1, find the area.",
      "Identify the shape: the vertices from Example 1 form an axis-aligned rectangle with a horizontal side of length $6$ and a vertical side of length $4$, so those are the length and width.<br>" +
      "Compute: $A=lw=6(4)=24$.<br>" +
      "<b>Answer:</b> $24$ square units."],

    ["Example 3: Right triangle area from legs on the axes",
      "Vertices $(0,0)$, $(8,0)$, $(0,6)$. Find the area.",
      "Identify the legs: one side runs along the $x$-axis from $(0,0)$ to $(8,0)$ (length $8$), and the other runs along the $y$-axis from $(0,0)$ to $(0,6)$ (length $6$). Since these two sides meet at a right angle at the origin, they are the legs of a right triangle.<br>" +
      "Compute the area using $A=\\dfrac{1}{2}(\\text{leg}_1)(\\text{leg}_2)$: $A=\\dfrac{1}{2}(8)(6)=24$.<br>" +
      "<b>Answer:</b> $24$ square units."],

    ["Example 4: Distance for one side",
      "Find the length of the side from $(1,2)$ to $(4,6)$.",
      "Identify the tool: with two coordinate points and no shared axis, the distance formula $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ is the way to find this side's length.<br>" +
      "Compute: $d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.<br>" +
      "<b>Answer:</b> $5$ units. <i>Notice this is just a $3$-$4$-$5$ right triangle tilted on the grid.</i>"],

    ["Example 5: Right triangle perimeter (Pythagorean triple)",
      "Vertices $(0,0)$, $(3,0)$, $(0,4)$. Find the perimeter.",
      "Identify the sides: two legs lie along the axes with lengths $3$ and $4$; the third side (from $(3,0)$ to $(0,4)$) is the hypotenuse and must be computed.<br>" +
      "Compute the hypotenuse with the Pythagorean Theorem: $\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.<br>" +
      "Add all three sides: $P=3+4+5=12$.<br>" +
      "<b>Answer:</b> $12$ units."],

    ["Example 6: Parallelogram area on the plane",
      "Vertices $A(-1,0)$, $B(3,0)$, $C(6,3)$, $D(2,3)$. Find the area.",
      fig(coordQuad([{ x: -1, y: 0, label: "A" }, { x: 3, y: 0, label: "B" }, { x: 6, y: 3, label: "C" }, { x: 2, y: 3, label: "D" }], { xmin: -2, xmax: 7 }), "Base $\\overline{AB}$ is horizontal; the height is the vertical gap between $y=0$ and $y=3$.") +
      "Base $AB=3-(-1)=4$ (horizontal side). Height $=$ vertical distance between the two horizontal sides $=3-0=3$.<br>" +
      "$A=bh=4(3)=12$.<br>" +
      "<b>Answer:</b> $12$."],

    ["Example 7: Square area from vertices",
      "Vertices $(2,2)$, $(2,7)$, $(7,7)$, $(7,2)$. Find the area.",
      "Identify the figure: all four sides are horizontal or vertical, and each side has the same length, so this is a square. Read the side length directly from the grid: $7-2=5$.<br>" +
      "Compute: $A=s^2=5^2=25$.<br>" +
      "<b>Answer:</b> $25$ square units."],

    ["Example 8: Trapezoid area on the plane",
      "Vertices $A(-1,0)$, $B(3,0)$, $C(6,3)$, $D(-4,3)$. Find the area.",
      "$\\overline{AB}$ (length $4$) and $\\overline{DC}$ (length $10$) are the two horizontal bases. Height $=$ vertical gap $=3$.<br>" +
      "$A=\\dfrac{1}{2}(4+10)(3)=\\dfrac{1}{2}(14)(3)=21$.<br>" +
      "<b>Answer:</b> $21$."],

    ["Example 9: Equilateral triangle — verify with distance, then find perimeter",
      "Vertices $(0,0)$, $(6,0)$, $(3,3\\sqrt3)$. Verify the triangle is equilateral, then find its perimeter.",
      "$d_1=\\sqrt{(6-0)^2+(0-0)^2}=6$.<br>" +
      "$d_2=\\sqrt{(3-6)^2+(3\\sqrt3-0)^2}=\\sqrt{9+27}=\\sqrt{36}=6$.<br>" +
      "$d_3=\\sqrt{(0-3)^2+(0-3\\sqrt3)^2}=\\sqrt{9+27}=6$.<br>" +
      "All three sides equal $6$, confirming an equilateral triangle. Perimeter $=3(6)=18$.<br>" +
      "<b>Answer:</b> equilateral, confirmed; perimeter $=18$."],

    ["Example 10: Shoelace Formula — verify against the basic formula",
      "Vertices $(0,0)$, $(8,0)$, $(0,6)$ (same triangle as Example 3). Find the area using the Shoelace Formula and confirm it matches.",
      "List vertices in order and apply $A=\\dfrac{1}{2}|\\sum(x_iy_{i+1}-x_{i+1}y_i)|$:<br>" +
      "$x_1y_2-x_2y_1 = 0(0)-8(0)=0$<br>" +
      "$x_2y_3-x_3y_2 = 8(6)-0(0)=48$<br>" +
      "$x_3y_1-x_1y_3 = 0(0)-0(6)=0$<br>" +
      "Sum $=0+48+0=48$.<br>" +
      "$A=\\dfrac{1}{2}|48|=24$ — matches Example 3. ✓"],

    ["Example 11: Shoelace Formula for an irregular quadrilateral",
      "Vertices (in order) $(1,1)$, $(5,2)$, $(6,6)$, $(2,5)$. Find the area.",
      fig(coordQuad([{ x: 1, y: 1, label: "A" }, { x: 5, y: 2, label: "B" }, { x: 6, y: 6, label: "C" }, { x: 2, y: 5, label: "D" }], { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }), "No horizontal or vertical sides — this needs the Shoelace Formula.") +
      "$x_1y_2-x_2y_1 = 1(2)-5(1) = 2-5 = -3$<br>" +
      "$x_2y_3-x_3y_2 = 5(6)-6(2) = 30-12 = 18$<br>" +
      "$x_3y_4-x_4y_3 = 6(5)-2(6) = 30-12 = 18$<br>" +
      "$x_4y_1-x_1y_4 = 2(1)-1(5) = 2-5 = -3$<br>" +
      "Sum $=-3+18+18-3=30$.<br>" +
      "$A=\\dfrac{1}{2}|30|=15$.<br>" +
      "<b>Answer:</b> $15$ square units."],
  ],
  questions: [
    ["Problem 1: Perimeter", "Rectangle $(0,0)$, $(5,0)$, $(5,3)$, $(0,3)$. Perimeter?", "$16$"],
    ["Problem 2: Area", "Same rectangle. Area?", "$15$"],
    ["Problem 3: Triangle", "$(0,0)$, $(10,0)$, $(0,4)$. Area?", "$20$"],
    ["Problem 4: Perimeter", "$(0,0)$, $(6,0)$, $(0,8)$. Perimeter?", "$6+8+10=24$"],
    ["Problem 5: Square", "Side endpoints $(1,1)$ and $(1,6)$. Area of the square?", "$25$"],
    ["Problem 6: Distance", "$(2,3)$ to $(8,11)$. Length?", "$10$"],
    ["Problem 7: Area", "Rectangle width $7$, height $2$. Area?", "$14$"],
    ["Problem 8: Perimeter", "Square side $9$. Perimeter?", "$36$"],
    ["Problem 9: Triangle", "$(0,0)$, $(12,0)$, $(0,5)$. Area?", "$30$"],
    ["Problem 10: Trapezoid", "Bases $6$ and $10$, height $4$. Area?", "$32$"],
    ["Problem 11: Perimeter", "Rhombus side $7$. Perimeter?", "$28$"],
    ["Problem 12: Area", "$(1,1)$, $(7,1)$, $(7,4)$, $(1,4)$. Area?", "$18$"],
    ["Problem 13: Perimeter", "$(0,0)$, $(5,0)$, $(5,12)$. Perimeter of the triangle?", "$5+12+13=30$"],
    ["Problem 14: Challenge", "Use the Shoelace Formula for vertices (in order) $(0,0)$, $(6,1)$, $(5,5)$, $(1,4)$.", "$20$ square units"],
    ["Problem 15: Challenge", "Vertices $(2,3)$, $(7,3)$, $(5,9)$. Find the area two ways: using base $\\times$ height, and using the Shoelace Formula. Confirm they match.", "Both methods give $15$ square units"],
  ],
};
