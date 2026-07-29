// ALG1 Chapter 3 — Systems of Linear Equations & Inequalities. ~55 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);
const cases = (e1, e2) => `$\\begin{cases} ${e1} \\\\ ${e2} \\end{cases}$`;
const lin2 = (a, b, c) => `${a === 1 ? "" : a === -1 ? "-" : a}x ${sign(b)}y = ${c}`;

// ── 3.1 Solving Systems by Graphing & Substitution ───────────
function g31() {
  const q = [];
  // y = m1 x + b1 ; y = m2 x + b2, solution x0 (enter x)
  for (let i = 0; i < 30; i++) {
    const x0 = ri(-4, 6), m1 = rnz(-3, 4), b1 = rnz(-6, 6);
    let m2 = rnz(-3, 4); while (m2 === m1) m2 = rnz(-3, 4);
    const b2 = b1 + (m1 - m2) * x0;
    q.push(num(i < 10 ? "easy" : i < 22 ? "medium" : "hard", `Solve the system; enter the $x$-value.  ${cases(`y = ${m1}x ${sign(b1)}`, `y = ${m2}x ${sign(b2)}`)}`, x0, 0));
  }
  q.push(mc("easy", "The solution of a system is…", ["the point where the lines cross", "the y-intercept", "the slope", "always the origin"], 0));
  q.push(mc("easy", "Substitution works best when…", ["a variable is already isolated", "both are in standard form", "there is no solution", "the lines are parallel"], 0));
  q.push(tf("easy", "A solution must satisfy BOTH equations.", true));
  q.push(mc("easy", "Solve $y = 2x$, $x + y = 6$. Find $x$.", ["2", "3", "6", "4"], 0));
  q.push(tf("easy", "Graphing gives an exact answer even when the intersection isn't at whole numbers.", false));
  q.push(fill("easy", "In $y=3x$, $x+y=8$: substituting gives $x + 3x = 8$, so $x=$ ___.", ["2"]));
  q.push(num("medium", "Solve $y = x + 1$, $y = -x + 5$. Enter $x$.", 2, 0));
  q.push(num("medium", "Solve $x + y = 7$, $2x - y = 2$. Enter $x$.", 3, 0));
  q.push(num("medium", "Solve $y = 3x - 4$, $2x + y = 6$. Enter $x$.", 2, 0));
  q.push(mc("medium", "Is $(1, 5)$ a solution of $y = 4x + 1$ and $x + y = 6$?", ["Yes", "No — only the first", "No — only the second", "No — neither"], 0));
  q.push(num("hard", "Solve $y = 2x - 3$, $y = -x + 6$. Enter $x$.", 3, 0));
  q.push(num("hard", "Solve $3x + y = 10$, $y = x - 2$. Enter $x$.", 3, 0));
  q.push(mc("hard", "Solve $x - y = 1$, $2x + y = 8$. Find $x$.", ["3", "2", "1", "4"], 0));
  q.push(tf("hard", "When one equation is $y = \\ldots$, substitution is usually the fastest method.", true));
  q.push(num("hard", "Solve $y = -2x + 7$, $y = x - 5$. Enter $x$.", 4, 0));
  return q;
}

// ── 3.2 Solving Systems by Elimination ───────────────────────
function g32() {
  const q = [];
  for (let i = 0; i < 34; i++) {
    const x0 = ri(-4, 6), y0 = ri(-4, 6);
    const a1 = rnz(1, 4), b1 = rnz(-3, 4), a2 = rnz(1, 4), b2 = rnz(-3, 4);
    if (a1 * b2 - a2 * b1 === 0) { i--; continue; }
    const c1 = a1 * x0 + b1 * y0, c2 = a2 * x0 + b2 * y0;
    q.push(num(i < 12 ? "easy" : i < 24 ? "medium" : "hard", `Solve by elimination; enter the $x$-value.  ${cases(lin2(a1, b1, c1), lin2(a2, b2, c2))}`, x0, 0));
  }
  q.push(mc("easy", "To eliminate a variable you look for coefficients that are…", ["equal or opposite", "both zero", "prime", "fractions"], 0));
  q.push(mc("easy", "If the coefficients are opposite ($+3y$ and $-3y$) you should…", ["add the equations", "subtract them", "multiply them", "graph"], 0));
  q.push(mc("easy", "If the coefficients are equal ($2x$ and $2x$) you should…", ["subtract the equations", "add them", "divide them", "give up"], 0));
  q.push(tf("easy", "Elimination is fastest when both equations are in $Ax + By = C$ form.", true));
  q.push(num("easy", "Solve $x + y = 10$, $x - y = 4$. Enter $x$.", 7, 0));
  q.push(num("medium", "Solve $2x + 3y = 13$, $2x + y = 7$. Enter $x$.", 2, 0));
  q.push(num("medium", "Solve $x + 2y = 11$, $3x - y = 5$. Enter $x$.", 3, 0));
  q.push(mc("medium", "To eliminate $x$ from $x + 2y = 11$ and $3x - y = 5$, multiply the first by…", ["$-3$", "$2$", "$3$", "$-1$"], 0));
  q.push(num("hard", "Solve $2x + 3y = 7$, $3x + 2y = 8$. Enter $x$.", 2, 0));
  q.push(num("hard", "Solve $4x - 3y = 5$, $2x + 3y = 13$. Enter $x$.", 3, 0));
  q.push(num("hard", "Solve $5x + 2y = 1$, $2x + 3y = 7$. Enter $x$.", -1, 0));
  q.push(tf("hard", "Sometimes you must scale BOTH equations before a variable cancels.", true));
  return q;
}

// ── 3.3 Applications & Special Cases ─────────────────────────
function g33() {
  const q = [];
  // sum & difference word problems (enter the larger number)
  for (let i = 0; i < 20; i++) {
    const a = ri(6, 20), b = ri(1, a - 1);
    q.push(num(i < 8 ? "easy" : i < 15 ? "medium" : "hard", `Two numbers have sum ${a + b} and difference ${a - b}. Enter the larger number.`, a, 0));
  }
  q.push(mc("easy", "A system with parallel lines (same slope, different intercept) has…", ["no solution", "one solution", "infinitely many", "two solutions"], 0));
  q.push(mc("easy", "A system where both equations are the same line has…", ["infinitely many solutions", "no solution", "one solution", "zero"], 0));
  q.push(tf("easy", "To set up a word-problem system, define two variables and write two equations.", true));
  q.push(mc("easy", "If the variables cancel and you get $0 = 5$ (false), the system has…", ["no solution", "infinitely many", "one solution", "two solutions"], 0));
  q.push(mc("easy", "If the variables cancel and you get $0 = 0$ (true), the system has…", ["infinitely many solutions", "no solution", "one solution", "zero"], 0));
  q.push(num("medium", "20 tickets sold for $130. Adult $8, child $5. How many ADULT tickets? ($a+c=20$, $8a+5c=130$)", 10, 0));
  q.push(num("medium", "3 coffees + 2 muffins = $13; 1 coffee + 2 muffins = $7. Coffee price ($)?", 3, 0));
  q.push(num("medium", "15 coins (dimes & quarters) = $2.55. How many quarters? ($d+q=15$, $10d+25q=255$)", 7, 0));
  q.push(mc("medium", "How many solutions has $y = 2x + 1$, $y = 2x - 3$?", ["None (parallel)", "One", "Infinitely many", "Two"], 0));
  q.push(mc("medium", "How many solutions has $2x + y = 4$, $4x + 2y = 8$?", ["Infinitely many", "None", "One", "Two"], 0));
  q.push(num("hard", "2 shirts + 1 hat = $35; 1 shirt + 1 hat = $23. Shirt price ($)?", 12, 0));
  q.push(num("hard", "A boat goes 30 km downstream in 2 h and 30 km upstream in 3 h. Boat speed in still water (km/h)? (b+c=15, b−c=10)", 12.5, 0.1));
  q.push(mc("hard", "How many solutions has $x - y = 2$, $2x - 2y = 4$?", ["Infinitely many", "None", "One", "Two"], 0));
  q.push(mc("hard", "Two numbers: one is 4 more than the other, and they sum to 30. The larger is…", ["17", "13", "15", "26"], 0));
  q.push(tf("hard", "A 'count' equation and a 'value' equation is a common word-problem setup.", true));
  return q;
}

// ── 3.4 Graphing Two-Variable Inequalities & Systems ─────────
function g34() {
  const q = [];
  q.push(mc("easy", "The boundary of $y \\le 3x - 2$ is drawn…", ["solid", "dashed", "not at all", "curved"], 0));
  q.push(mc("easy", "The boundary of $y < 3x - 2$ is drawn…", ["dashed", "solid", "double", "curved"], 0));
  q.push(mc("easy", "Solid boundary means the boundary points are…", ["included", "excluded", "shaded", "ignored"], 0));
  q.push(tf("easy", "$\\le$ and $\\ge$ use a solid line; $<$ and $>$ use a dashed line.", true));
  q.push(mc("easy", "To decide which side to shade you can test the point…", ["$(0,0)$ if not on the line", "$(1,1)$ always", "$(\\infty,\\infty)$", "the y-intercept only"], 0));
  q.push(tf("easy", "The solution of a linear inequality is a whole region, not a single line.", true));
  q.push(mc("easy", "The solution of a SYSTEM of inequalities is…", ["the overlap of the regions", "the union of the lines", "the intersection point", "the boundary"], 0));
  q.push(mc("easy", "$x \\ge 2$ is a boundary that is…", ["a vertical line, shade right", "a horizontal line", "dashed", "a point"], 0));
  q.push(mc("medium", "For $y < 2x + 1$, does $(0,0)$ satisfy it?", ["Yes → shade that side", "No → shade the other side", "It's on the line", "Undefined"], 0));
  q.push(mc("medium", "For $y > x + 4$, does $(0,0)$ satisfy it?", ["No → shade the other side", "Yes → shade that side", "On the line", "Undefined"], 0));
  q.push(tf("medium", "Is $(1,1)$ a solution of $y \\ge 2x - 3$?", true));
  q.push(tf("medium", "Is $(0,0)$ a solution of $y < x + 1$ AND $y > -2$?", true));
  q.push(mc("medium", "$y \\ge -x + 3$: after a false origin test, you shade…", ["above the line (away from origin)", "below the line", "left", "nothing"], 0));
  q.push(mc("medium", "Which side of $x < -1$ do you shade?", ["left of the dashed line", "right", "above", "below"], 0));
  q.push(fill("medium", "The boundary of $y \\ge 2x$ is drawn ___ (solid/dashed).", ["solid"]));
  q.push(mc("hard", "$2x - y > 4$: boundary dashed; testing $(0,0)$ gives $0 > 4$ (false), so shade…", ["the side away from the origin", "toward the origin", "both sides", "neither"], 0));
  q.push(mc("hard", "The overlap region of $y \\le x + 2$ and $y > -1$ is…", ["a band between the two boundaries", "the whole plane", "empty", "a single point"], 0));
  q.push(tf("hard", "A system of inequalities can have an empty solution set.", true));
  q.push(mc("hard", "Which point is in the solution of $\\begin{cases} y < x + 1 \\\\ y > -2 \\end{cases}$?", ["$(0, 0)$", "$(0, 5)$", "$(-5, -5)$", "$(0, 2)$"], 0));
  q.push(mc("hard", "A solid line and 'shade below' represents…", ["$y \\le mx + b$", "$y < mx + b$", "$y \\ge mx + b$", "$y > mx + b$"], 0));
  q.push(tf("hard", "The origin is a convenient test point unless the boundary passes through it.", true));
  q.push(fill("hard", "For $y > 3x$, the boundary line is drawn ___ (solid/dashed).", ["dashed"]));
  // extra: point-in-region checks (correct by construction)
  const pts = [
    ["y < x + 2", 0, 0, true], ["y > 2x", 1, 1, false], ["y \\ge x - 1", 0, 0, true],
    ["y \\le -x + 5", 0, 0, true], ["y > x + 3", 0, 0, false], ["y < 3x - 1", 2, 0, true],
    ["y \\ge 2x + 1", 0, 5, true], ["y < -x", 1, 1, false], ["y > x - 4", 0, 0, true],
    ["y \\le 4x", 0, 0, true],
  ];
  for (const [ineq, px, py, sol] of pts) q.push(tf("medium", `Is $(${px}, ${py})$ a solution of $${ineq}$?`, sol));
  const bd = [["y \\le 2x", "solid"], ["y > x - 1", "dashed"], ["y \\ge -3x", "solid"], ["y < 5x + 2", "dashed"], ["y \\le -x + 4", "solid"], ["y > 2x - 3", "dashed"]];
  for (const [ineq, kind] of bd) q.push(mcv("easy", `Is the boundary of $${ineq}$ solid or dashed?`, kind, [kind === "solid" ? "dashed" : "solid"]));
  return q;
}

export default [
  { code: "3.1", gen: g31 },
  { code: "3.2", gen: g32 },
  { code: "3.3", gen: g33 },
  { code: "3.4", gen: g34 },
];
