// ALG1 Chapter 3 — Systems of Linear Equations & Inequalities. ~50 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);

// Build a solvable 2×2 system with integer solution (x0,y0); returns {p1,p2,x0,y0}
function sys(x0, y0, small = 4) {
  let a1, b1, a2, b2;
  do { a1 = rnz(-small, small); b1 = rnz(-small, small); a2 = rnz(-small, small); b2 = rnz(-small, small); } while (a1 * b2 - a2 * b1 === 0);
  const c1 = a1 * x0 + b1 * y0, c2 = a2 * x0 + b2 * y0;
  const t = (a, b, c) => `$${a}x ${sign(b)}y = ${c}$`;
  return { p1: t(a1, b1, c1), p2: t(a2, b2, c2) };
}

// ── 3.1 Solving Systems by Graphing & Substitution ───────────
function g31() {
  const q = [];
  for (let i = 0; i < 8; i++) { const x0 = ri(-4, 6), y0 = ri(-4, 6), m = rnz(-3, 3), b = y0 - m * x0, s = x0 + y0; q.push(num("easy", `Solve $\\begin{cases} y = ${m}x ${sign(b)} \\\\ x + y = ${s} \\end{cases}$ — enter the $x$-value.`, x0, 0)); }
  q.push(mc("easy", "The solution of a system is…", ["where the lines intersect", "the $y$-intercept", "the slope", "always the origin"], 0));
  q.push(mc("easy", "Substitution works best when…", ["a variable is already isolated", "both are in standard form", "the lines are parallel", "there is no solution"], 0));
  q.push(tf("easy", "A solution must satisfy BOTH equations.", true));
  q.push(mc("easy", "Solve $\\begin{cases} y = 2x \\\\ x + y = 6 \\end{cases}$ — the $x$-value is…", ["2", "3", "4", "6"], 0));
  q.push(fill("easy", "In $\\begin{cases} y = x \\\\ x + y = 8 \\end{cases}$, $x =$ ___.", ["4"]));
  q.push(tf("easy", "Graphing gives an exact answer even when the intersection isn't at whole numbers.", false));
  for (let i = 0; i < 8; i++) { const x0 = ri(-3, 5), y0 = ri(-3, 5), m = rnz(-3, 3), b = y0 - m * x0, s = x0 + y0; q.push(num("medium", `Solve $\\begin{cases} y = ${m}x ${sign(b)} \\\\ x + y = ${s} \\end{cases}$ — enter the $y$-value.`, y0, 0)); }
  q.push(mc("medium", "Solve $\\begin{cases} y = 3x - 4 \\\\ 2x + y = 6 \\end{cases}$ — the solution is…", ["$(2, 2)$", "$(2, -2)$", "$(1, -1)$", "$(3, 5)$"], 0));
  q.push(num("medium", "Solve $\\begin{cases} x + y = 7 \\\\ 2x - y = 2 \\end{cases}$ — enter $x$.", 3, 0));
  q.push(num("medium", "Solve $\\begin{cases} x + y = 7 \\\\ 2x - y = 2 \\end{cases}$ — enter $y$.", 4, 0));
  q.push(tf("medium", "Is $(1, 5)$ a solution of $\\begin{cases} y = 4x + 1 \\\\ x + y = 6 \\end{cases}$?", true));
  q.push(fill("medium", "Solve $\\begin{cases} y = 2x \\\\ x + y = 9 \\end{cases}$: $x =$ ___.", ["3"]));
  for (let i = 0; i < 6; i++) { const x0 = ri(-4, 6), y0 = ri(-4, 6); const s = sys(x0, y0); q.push(num("hard", `Solve $\\begin{cases} ${s.p1} \\\\ ${s.p2} \\end{cases}$ — enter the $x$-value.`, x0, 0)); }
  for (let i = 0; i < 6; i++) { const x0 = ri(-4, 6), y0 = ri(-4, 6); const s = sys(x0, y0); q.push(num("hard", `Solve $\\begin{cases} ${s.p1} \\\\ ${s.p2} \\end{cases}$ — enter the $y$-value.`, y0, 0)); }
  q.push(mc("hard", "Which method avoids the imprecision of reading a graph?", ["substitution", "estimating", "sketching", "guessing"], 0));
  q.push(tf("hard", "A system whose lines are parallel has no solution.", true));
  q.push(num("hard", "Solve $\\begin{cases} 2x + y = 5 \\\\ y = x - 1 \\end{cases}$ — enter $x$.", 2, 0));
  q.push(num("hard", "Solve $\\begin{cases} x + y = 10 \\\\ y = x + 2 \\end{cases}$ — enter $y$.", 6, 0));
  return q;
}

// ── 3.2 Solving Systems by Elimination ───────────────────────
function g32() {
  const q = [];
  for (let i = 0; i < 8; i++) { const x0 = ri(-4, 6), y0 = ri(-4, 6); const s = sys(x0, y0, 3); q.push(num("easy", `By elimination, solve $\\begin{cases} ${s.p1} \\\\ ${s.p2} \\end{cases}$ — enter $x$.`, x0, 0)); }
  q.push(mc("easy", "Elimination: you add the equations when the matching coefficients are…", ["opposite", "equal", "both positive", "zero"], 0));
  q.push(mc("easy", "You subtract when the matching coefficients are…", ["equal", "opposite", "reciprocal", "negative"], 0));
  q.push(tf("easy", "Sometimes you must scale an equation before eliminating.", true));
  q.push(num("easy", "Solve $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ — enter $x$.", 7, 0));
  q.push(num("easy", "Solve $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ — enter $y$.", 3, 0));
  q.push(mc("easy", "To eliminate, you first line up…", ["like terms", "constants only", "the $x$'s under the $y$'s", "nothing"], 0));
  for (let i = 0; i < 8; i++) { const x0 = ri(-4, 6), y0 = ri(-4, 6); const s = sys(x0, y0, 4); q.push(num("medium", `Solve $\\begin{cases} ${s.p1} \\\\ ${s.p2} \\end{cases}$ — enter $y$.`, y0, 0)); }
  q.push(num("medium", "Solve $\\begin{cases} 2x + 3y = 13 \\\\ 2x + y = 7 \\end{cases}$ — enter $y$.", 3, 0));
  q.push(num("medium", "Solve $\\begin{cases} 2x + 3y = 13 \\\\ 2x + y = 7 \\end{cases}$ — enter $x$.", 2, 0));
  q.push(mc("medium", "Solve $\\begin{cases} x + 2y = 11 \\\\ 3x - y = 5 \\end{cases}$ — the solution is…", ["$(3, 4)$", "$(4, 3)$", "$(1, 5)$", "$(5, 3)$"], 0));
  q.push(tf("medium", "To eliminate $x$ from $x + 2y = 11$ and $3x - y = 5$, multiply the first by $-3$.", true));
  q.push(fill("medium", "Solve $\\begin{cases} x + y = 9 \\\\ x - y = 1 \\end{cases}$: $x =$ ___.", ["5"]));
  q.push(num("medium", "Solve $\\begin{cases} 5x + 2y = 1 \\\\ 2x + 3y = 7 \\end{cases}$ — enter $x$.", -1, 0));
  for (let i = 0; i < 8; i++) { const x0 = ri(-5, 6), y0 = ri(-5, 6); const s = sys(x0, y0, 5); q.push(num("hard", `Solve $\\begin{cases} ${s.p1} \\\\ ${s.p2} \\end{cases}$ — enter $x$.`, x0, 0)); }
  q.push(num("hard", "Solve $\\begin{cases} 2x + 3y = 7 \\\\ 3x + 2y = 8 \\end{cases}$ — enter $x$.", 2, 0));
  q.push(num("hard", "Solve $\\begin{cases} 2x + 3y = 7 \\\\ 3x + 2y = 8 \\end{cases}$ — enter $y$.", 1, 0));
  q.push(mc("hard", "Which scaling eliminates $x$ from $\\begin{cases} 2x + 3y = 7 \\\\ 3x + 2y = 8 \\end{cases}$?", ["×3 and ×2", "×2 and ×2", "add directly", "×3 and ×3"], 0));
  q.push(tf("hard", "Elimination is usually fastest when both equations are in $Ax + By = C$ form.", true));
  return q;
}

// ── 3.3 Applications & Special Cases ─────────────────────────
function g33() {
  const q = [];
  q.push(num("easy", "Two numbers add to 24; their difference is 6. Enter the larger number.", 15, 0));
  q.push(num("easy", "Two numbers add to 30; their difference is 8. Enter the smaller number.", 11, 0));
  q.push(mc("easy", "A system with no solution has lines that are…", ["parallel", "the same", "perpendicular", "intersecting"], 0));
  q.push(mc("easy", "A system with infinitely many solutions is really…", ["one line drawn twice", "two parallel lines", "perpendicular lines", "no lines"], 0));
  q.push(tf("easy", "'The variables cancel and leave $0 = 5$' means no solution.", true));
  q.push(tf("easy", "'The variables cancel and leave $0 = 0$' means infinitely many solutions.", true));
  q.push(mc("easy", "To model a word problem you usually define…", ["two variables", "one variable", "no variables", "three variables"], 0));
  q.push(num("easy", "20 tickets sold for $130; adult $8, child $5. How many adult tickets ($a+c=20,\\ 8a+5c=130$)?", 10, 0));
  q.push(num("medium", "20 tickets for $130 (adult $8, child $5). How many child tickets?", 10, 0));
  q.push(num("medium", "15 coins (dimes & quarters) worth $2.55. How many quarters ($d+q=15,\\ 10d+25q=255$)?", 7, 0));
  q.push(num("medium", "15 coins worth $2.55 (dimes & quarters). How many dimes?", 8, 0));
  q.push(num("medium", "2 shirts + 1 hat = $35; 1 shirt + 1 hat = $23. Price of a shirt?", 12, 0));
  q.push(num("medium", "2 shirts + 1 hat = $35; 1 shirt + 1 hat = $23. Price of a hat?", 11, 0));
  q.push(mc("medium", "How many solutions has $\\begin{cases} y = 2x + 1 \\\\ y = 2x - 3 \\end{cases}$?", ["none", "one", "infinitely many", "two"], 0));
  q.push(mc("medium", "How many solutions has $\\begin{cases} 2x + y = 4 \\\\ 4x + 2y = 8 \\end{cases}$?", ["infinitely many", "none", "one", "two"], 0));
  q.push(num("medium", "Two consecutive integers sum to 45. Enter the smaller.", 22, 0));
  q.push(num("hard", "3 coffees + 2 muffins = $13; 1 coffee + 2 muffins = $7. Price of a coffee?", 3, 0));
  q.push(num("hard", "3 coffees + 2 muffins = $13; 1 coffee + 2 muffins = $7. Price of a muffin?", 2, 0));
  q.push(num("hard", "A boat goes 30 km downstream in 2 h and upstream in 3 h. Enter the boat speed (km/h). ($2(b+c)=30,\\ 3(b-c)=30$)", 12.5, 0.1));
  q.push(mc("hard", "How many solutions has $\\begin{cases} y = 3x + 2 \\\\ y = 3x - 5 \\end{cases}$?", ["none", "one", "infinitely many", "two"], 0));
  q.push(mc("hard", "How many solutions has $\\begin{cases} x - y = 2 \\\\ 2x - 2y = 4 \\end{cases}$?", ["infinitely many", "none", "one", "two"], 0));
  q.push(tf("hard", "Same slope and same intercept ⇒ infinitely many solutions.", true));
  q.push(tf("hard", "Same slope, different intercept ⇒ no solution.", true));
  q.push(num("hard", "A number is 3 times another; they sum to 40. Enter the smaller number.", 10, 0));
  q.push(num("hard", "The sum of two numbers is 50 and one is 10 more than the other. Enter the larger.", 30, 0));
  q.push(mc("hard", "You set up a system and get $0 = 7$. This means…", ["no solution", "infinitely many", "$x = 7$", "$y = 0$"], 0));
  q.push(num("hard", "A rectangle: length is 3 more than width, perimeter 26. Enter the width.", 5, 0));
  return q;
}

// ── 3.4 Graphing Two-Variable Inequalities & Systems ─────────
function g34() {
  const q = [];
  q.push(mc("easy", "The boundary of $y \\le 2x + 1$ is drawn…", ["solid", "dashed", "dotted", "not at all"], 0));
  q.push(mc("easy", "The boundary of $y < 2x + 1$ is drawn…", ["dashed", "solid", "thick", "red"], 0));
  q.push(mc("easy", "Solid boundary lines are used for…", ["$\\le$ and $\\ge$", "$<$ and $>$", "$=$ only", "never"], 0));
  q.push(mc("easy", "To decide which side to shade, you can test…", ["a point off the line (like the origin)", "the slope", "the $y$-intercept", "the boundary itself"], 0));
  q.push(tf("easy", "A two-variable inequality is satisfied by a whole region.", true));
  q.push(tf("easy", "$\\ge$ uses a dashed boundary line.", false));
  q.push(mc("easy", "The solution of a system of inequalities is…", ["the overlap of the regions", "one point", "a single line", "the whole plane"], 0));
  q.push(mc("easy", "For $x \\ge 2$ you shade…", ["right of the vertical line $x = 2$", "left of it", "above", "below"], 0));
  q.push(mc("medium", "For $y < 2x + 1$, testing $(0,0)$ gives $0 < 1$ (true), so shade…", ["the side with the origin", "the other side", "nothing", "the line"], 0));
  q.push(mc("medium", "For $y \\ge -x + 3$, testing $(0,0)$ gives $0 \\ge 3$ (false), so shade…", ["the side without the origin", "the side with the origin", "both", "neither"], 0));
  q.push(tf("medium", "Is $(1, 1)$ a solution of $y \\ge 2x - 3$? ($1 \\ge -1$)", true));
  q.push(tf("medium", "Is $(0, 0)$ a solution of $y > x + 4$?", false));
  q.push(mc("medium", "The boundary for $2x - y > 4$ is…", ["dashed", "solid", "vertical", "horizontal"], 0));
  q.push(mc("medium", "Which point satisfies $y \\le x + 2$?", ["$(0, 0)$", "$(0, 5)$", "$(1, 10)$", "$(0, 3)$"], 0));
  q.push(fill("medium", "For $y > 3x - 2$, is the boundary solid or dashed? Answer 'solid' or 'dashed'.", ["dashed"]));
  q.push(mc("medium", "For $x < -1$ you shade…", ["left of the dashed line", "right of it", "above", "below"], 0));
  q.push(mc("hard", "The solution region of a system of two inequalities is…", ["where both shadings overlap", "either shading", "the boundary lines", "the origin"], 0));
  q.push(tf("hard", "Is $(0,0)$ in the solution of $\\begin{cases} y < x + 1 \\\\ y > -2 \\end{cases}$?", true));
  q.push(mc("hard", "A dashed boundary tells you the points on the line are…", ["not included", "included", "doubled", "the solution"], 0));
  q.push(mc("hard", "Which describes the region where $y \\ge 0$ and $x \\ge 0$?", ["the first quadrant", "the whole plane", "a single line", "the origin only"], 0));
  q.push(tf("hard", "If the test point makes the inequality false, shade the opposite side.", true));
  q.push(mc("hard", "For $3x + 2y \\le 12$, testing $(0,0)$ gives $0 \\le 12$ (true), so shade…", ["toward the origin", "away from the origin", "the boundary", "nothing"], 0));
  q.push(mc("hard", "Which system could have NO solution region?", ["$y > x + 5$ and $y < x - 5$", "$y > 0$ and $x > 0$", "$y \\le x$ and $y \\ge -x$", "$y < 3$ and $x < 3$"], 0));
  q.push(fill("hard", "The overlap of $y \\le 4$ and $y \\ge 4$ is the line $y = \\text{___}$.", ["4"]));
  q.push(tf("hard", "$y \\ge 2x$ and $y \\le 2x$ overlap only on the line $y = 2x$.", true));
  return q;
}

export default [
  { code: "3.1", gen: g31 },
  { code: "3.2", gen: g32 },
  { code: "3.3", gen: g33 },
  { code: "3.4", gen: g34 },
];
