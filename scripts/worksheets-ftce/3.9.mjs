const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.9",
  title: "Coordinate Geometry",
  intro: "Distance, midpoint, slope, and the point-to-line distance formula — the algebraic tools for geometry on the coordinate plane.",
  lesson: [
    ["Distance & midpoint", R`Distance between $(x_1,y_1)$ and $(x_2,y_2)$ is $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Midpoint is $\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$.`],
    ["Slope & lines", R`$m=\dfrac{y_2-y_1}{x_2-x_1}$. Parallel lines have equal slopes; perpendicular slopes are negative reciprocals. Distance from $(x_0,y_0)$ to $Ax+By+C=0$ is $\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$.`],
    ["Applications", R`Use distance to test for congruent sides or right angles, the midpoint for bisected diagonals, and slopes for parallel/perpendicular sides.`],
  ],
  examples: [
    ["Example 1: Distance", R`Distance between $(1,2)$ and $(4,6)$.`, R`$\sqrt{3^2+4^2}=\sqrt{25}=5$.`],
    ["Example 2: Midpoint", R`Midpoint of $(2,4)$ and $(6,10)$.`, R`$(4,7)$.`],
    ["Example 3: Distance", R`Distance between $(0,0)$ and $(5,12)$.`, R`$\sqrt{25+144}=13$.`],
    ["Example 4: Point to line", R`Distance from $(2,4)$ to the line $2x+y-3=0$.`, R`$\dfrac{|2(2)+4-3|}{\sqrt{4+1}}=\dfrac{5}{\sqrt5}=\sqrt5\approx 2.24$.`],
    ["Example 5: Right triangle", R`Are $(0,0),(4,0),(0,3)$ the vertices of a right triangle?`, R`Legs $4$ and $3$, hypotenuse $5$: yes ($3^2+4^2=5^2$).`],
  ],
  questions: [
    ["Problem 1", R`Distance between $(0,0)$ and $(3,4)$?`, R`$5$`],
    ["Problem 2", R`Midpoint of $(1,1)$ and $(5,7)$?`, R`$(3,4)$`],
    ["Problem 3", R`Distance between $(2,3)$ and $(2,8)$?`, R`$5$`],
    ["Problem 4", R`Midpoint of $(-2,4)$ and $(6,-2)$?`, R`$(2,1)$`],
    ["Problem 5", R`Distance between $(1,2)$ and $(4,6)$?`, R`$5$`],
    ["Problem 6", R`Slope through $(0,0)$ and $(2,6)$?`, R`$3$`],
    ["Problem 7", R`Distance from $(0,0)$ to $3x+4y-10=0$?`, R`$2$`],
    ["Problem 8", R`Midpoint of $(0,0)$ and $(10,0)$?`, R`$(5,0)$`],
  ],
};
