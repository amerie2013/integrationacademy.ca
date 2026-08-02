const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "3.5",
  title: "Graphing Linear Inequalities & Systems of Inequalities",
  intro: "A two-variable inequality shades a whole region of the plane. This worksheet practises boundary lines, choosing the side to shade, and overlapping regions.",
  lesson: [
    ["Boundary line", R`Graph the boundary from the inequality. Use a <b>solid</b> line for $\le$ or $\ge$ (included) and a <b>dashed</b> line for $<$ or $>$ (excluded).`],
    ["Which side to shade", "Test a point off the line (the origin is easiest). If it makes the inequality true, shade that side; if false, shade the other."],
    ["Systems of inequalities", "The solution is the region where all the shaded areas overlap."],
  ],
  examples: [
    ["Example 1: Solid boundary", R`Solid or dashed for $y \le 3x - 2$?`, R`$\le$ includes the line, so <b>solid</b>.`],
    ["Example 2: Dashed boundary", R`Solid or dashed for $y < 3x - 2$?`, R`$<$ excludes the line, so <b>dashed</b>.`],
    ["Example 3: Shade with the origin", R`For $y < 2x + 1$, which side?`, R`Test $(0,0)$: $0 < 1$ true, so shade the side containing the origin.`],
    ["Example 4: Shade away", R`For $y > x + 4$, which side?`, R`Test $(0,0)$: $0 > 4$ false, so shade the other side.`],
    ["Example 5: Vertical boundary", R`Describe the graph of $x \ge 2$.`, R`A solid vertical line at $x = 2$, shaded to the right.`],
    ["Example 6: A system", R`Describe the solution of $y < x + 1$ and $y > -2$.`, R`The overlap: below the dashed line $y = x + 1$ and above the dashed line $y = -2$.`],
  ],
  questions: [
    ["Problem 1", R`Solid or dashed for $y \ge 2x$?`, R`Solid`],
    ["Problem 2", R`Solid or dashed for $y > x - 1$?`, R`Dashed`],
    ["Problem 3", R`For $y < 2x + 1$, does $(0,0)$ satisfy it?`, R`Yes`],
    ["Problem 4", R`For $y > x + 4$, does $(0,0)$ satisfy it?`, R`No`],
    ["Problem 5", R`Is $(1,1)$ a solution of $y \ge 2x - 3$?`, R`Yes`],
    ["Problem 6", R`Which side of $x < -1$ do you shade?`, R`Left of the dashed line`],
    ["Problem 7", R`The solution of a system of inequalities is the ___ of the regions.`, R`Overlap`],
    ["Problem 8", R`Is $(0,0)$ a solution of $y < x + 1$ and $y > -2$?`, R`Yes`],
    ["Problem 9", R`Boundary of $y \le -x + 4$: solid or dashed?`, R`Solid`],
    ["Problem 10", R`Is $(0,5)$ a solution of $y < x + 1$?`, R`No`],
    ["Problem 11", R`For $2x - y > 4$, $(0,0)$ gives $0 > 4$ (false), so shade which side?`, R`The side away from the origin`],
    ["Problem 12", R`A solid line with "shade below" represents which inequality type?`, R`$y \le mx + b$`],
  ],
};
