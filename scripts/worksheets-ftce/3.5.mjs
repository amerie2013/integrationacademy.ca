const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.5",
  title: "Regular Polygons, Area & Perimeter",
  intro: "Interior and exterior angles of polygons, the standard area formulas, and the apothem–perimeter area formula for regular polygons.",
  lesson: [
    ["Polygon angles", R`The interior angles of an $n$-gon sum to $(n-2)\cdot 180^\circ$. Each interior angle of a <b>regular</b> $n$-gon is $\dfrac{(n-2)180^\circ}{n}$, and each exterior angle is $\dfrac{360^\circ}{n}$.`],
    ["Area formulas", R`Rectangle $lw$; triangle $\tfrac12 bh$; parallelogram $bh$; trapezoid $\tfrac12(b_1+b_2)h$; circle $\pi r^2$.`],
    ["Regular polygons", R`Perimeter $=n\cdot s$. The <b>apothem</b> is the distance from the center to a side's midpoint, and the area is $\tfrac12\cdot(\text{apothem})\cdot(\text{perimeter})$.`],
  ],
  examples: [
    ["Example 1: Angle sum", R`Sum of the interior angles of a pentagon.`, R`$(5-2)180=540^\circ$.`],
    ["Example 2: Regular interior angle", R`Each interior angle of a regular hexagon.`, R`$\dfrac{(6-2)180}{6}=120^\circ$.`],
    ["Example 3: Exterior angle", R`Each exterior angle of a regular octagon.`, R`$\dfrac{360}{8}=45^\circ$.`],
    ["Example 4: Trapezoid area", R`Area of a trapezoid with bases $8$ and $14$, height $6$.`, R`$\tfrac12(8+14)(6)=66$.`],
    ["Example 5: Regular polygon area", R`Area of a regular polygon with apothem $5$ and perimeter $30$.`, R`$\tfrac12(5)(30)=75$.`],
  ],
  questions: [
    ["Problem 1", R`Sum of the interior angles of a quadrilateral?`, R`$360^\circ$`],
    ["Problem 2", R`Each interior angle of a regular pentagon?`, R`$108^\circ$`],
    ["Problem 3", R`Each exterior angle of a regular hexagon?`, R`$60^\circ$`],
    ["Problem 4", R`Area of a triangle with base $10$, height $6$?`, R`$30$`],
    ["Problem 5", R`Area of a parallelogram with base $7$, height $4$?`, R`$28$`],
    ["Problem 6", R`Area of a circle with radius $3$?`, R`$9\pi$`],
    ["Problem 7", R`Number of sides if each exterior angle is $30^\circ$?`, R`$12$`],
    ["Problem 8", R`Area of a regular polygon with apothem $4$, perimeter $20$?`, R`$40$`],
  ],
};
