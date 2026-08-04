const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.6",
  title: "Quadrilaterals",
  intro: "The quadrilateral family — parallelograms, rectangles, rhombi, squares, and trapezoids — their defining properties and areas.",
  lesson: [
    ["The family", R`<b>Parallelogram</b>: both pairs of opposite sides parallel. <b>Rectangle</b>: a parallelogram with right angles. <b>Rhombus</b>: a parallelogram with all sides equal. <b>Square</b>: both. <b>Trapezoid</b>: exactly one pair of parallel sides.`],
    ["Properties", R`Parallelogram: opposite sides and angles equal, diagonals bisect each other. Rectangle: diagonals equal. Rhombus: diagonals perpendicular and bisect the angles. Trapezoid: midsegment $=$ the average of the two bases.`],
    ["Area", R`Parallelogram $bh$; rectangle $lw$; rhombus $\tfrac12 d_1 d_2$; trapezoid $\tfrac12(b_1+b_2)h$.`],
  ],
  examples: [
    ["Example 1: Parallelogram angles", R`One angle of a parallelogram is $70^\circ$. Find the others.`, R`Opposite $70^\circ$; the two adjacent angles are $110^\circ$.`],
    ["Example 2: Rhombus area", R`A rhombus has diagonals $6$ and $8$. Find its area.`, R`$\tfrac12(6)(8)=24$.`],
    ["Example 3: Trapezoid midsegment", R`A trapezoid has bases $10$ and $16$. Find the midsegment.`, R`$\tfrac{10+16}{2}=13$.`],
    ["Example 4: Rectangle diagonal", R`Find the diagonal of a $5\times 12$ rectangle.`, R`$\sqrt{5^2+12^2}=\sqrt{169}=13$.`],
    ["Example 5: Square", R`A square has side $6$. Find its diagonal and area.`, R`Diagonal $6\sqrt2$; area $36$.`],
  ],
  questions: [
    ["Problem 1", R`Opposite angles of a parallelogram are ___.`, R`equal`],
    ["Problem 2", R`Diagonals of a rectangle are ___.`, R`equal`],
    ["Problem 3", R`Area of a rhombus with diagonals $10$ and $12$?`, R`$60$`],
    ["Problem 4", R`Trapezoid midsegment with bases $8$ and $12$?`, R`$10$`],
    ["Problem 5", R`Sum of the angles of any quadrilateral?`, R`$360^\circ$`],
    ["Problem 6", R`A square is a special rhombus and a special ___.`, R`rectangle`],
    ["Problem 7", R`Diagonals of a rhombus are ___.`, R`perpendicular`],
    ["Problem 8", R`Area of a parallelogram with base $9$, height $5$?`, R`$45$`],
  ],
};
