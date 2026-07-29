// ALG1 Chapter 2 — Linear Functions & Coordinate Geometry. ~60 per topic.
import { mc, mcv, ms, tf, num, fill, ri, rnz, pick } from "./helpers.mjs";
const sign = (n) => (n < 0 ? `- ${-n}` : `+ ${n}`);

// ── 2.1 Function Notation, Domain, and Range ─────────────────
function g21() {
  const q = [];
  for (let i = 0; i < 12; i++) { const a = rnz(-5, 6), b = rnz(-9, 9), k = ri(-5, 6); q.push(num("easy", `If $f(x) = ${a}x ${sign(b)}$, find $f(${k})$.`, a * k + b, 0)); }
  q.push(mc("easy", "In $f(x)$, what is $x$?", ["the input", "the output", "the slope", "a constant"], 0));
  q.push(tf("easy", "$f(x)$ means $f$ multiplied by $x$.", false));
  q.push(mc("easy", "The set of allowed inputs is the…", ["domain", "range", "slope", "vertex"], 0));
  q.push(mc("easy", "The set of outputs is the…", ["range", "domain", "intercept", "slope"], 0));
  q.push(fill("easy", "If $f(x) = 2x$, then $f(5) =$ ___.", ["10"]));
  q.push(tf("easy", "The vertical line test checks whether a graph is a function.", true));
  q.push(mc("easy", "Domain of $f(x) = 3x - 1$ (a line)?", ["all real numbers", "$x \\ge 0$", "$x > 0$", "just $x = 1$"], 0));
  q.push(num("easy", "If $f(x) = x + 9$, find $f(0)$.", 9, 0));
  for (let i = 0; i < 8; i++) { const k = ri(-4, 5), c = rnz(-6, 6); q.push(num("medium", `If $g(x) = x^2 ${sign(c)}$, find $g(${k})$.`, k * k + c, 0)); }
  q.push(mc("medium", "If $f(x) = 2x + 1$, for what $x$ is $f(x) = 9$?", ["$x = 4$", "$x = 5$", "$x = 3$", "$x = 19$"], 0));
  q.push(num("medium", "If $f(x) = 4x - 1$, for what $x$ is $f(x) = 15$?", 4, 0));
  q.push(num("medium", "If $g(x) = x^2 - 2x$, find $g(-2)$.", 8, 0));
  q.push(mc("medium", "A constant function $f(x) = 7$ has range…", ["$\\{7\\}$", "all reals", "$x = 7$", "$[0,7]$"], 0));
  q.push(tf("medium", "If a rental is $C(h) = 20 + 15h$ for $0 \\le h \\le 8$, the domain is $[0, 8]$.", true));
  q.push(num("medium", "If $f(x) = 5x - 4$, find $f(3)$.", 11, 0));
  q.push(fill("medium", "If $f(x) = x^2$, then $f(-3) =$ ___.", ["9"]));
  for (let i = 0; i < 6; i++) { const a = rnz(-4, 5), b = rnz(-8, 8), y = ri(-6, 8); const x = (y - b); if (a === 1) q.push(num("medium", `If $f(x) = x ${sign(b)}$, solve $f(x) = ${y}$.`, y - b, 0)); else i--; }
  q.push(mc("hard", "If $f(x) = 3x - 2$, find $f(a + 1)$.", ["$3a + 1$", "$3a - 1$", "$3a + 2$", "$a + 1$"], 0));
  q.push(mc("hard", "If $f(x) = x^2$, find $f(x + 1)$.", ["$x^2 + 2x + 1$", "$x^2 + 1$", "$x^2 + x$", "$2x + 1$"], 0));
  q.push(num("hard", "If $f(x) = 2x + 3$, find $f(f(1))$.", 13, 0, "$f(1)=5$, then $f(5)=13$."));
  q.push(num("hard", "If $f(x) = x^2 - 1$, find $f(4) - f(2)$.", 12, 0));
  q.push(mc("hard", "The range of $f(x) = x^2$ is…", ["$y \\ge 0$", "all reals", "$y > 0$", "$y \\le 0$"], 0));
  q.push(mc("hard", "For $f(x) = \\sqrt{x}$, the domain is…", ["$x \\ge 0$", "all reals", "$x > 0$", "$x \\le 0$"], 0));
  q.push(num("hard", "If $f(x) = -2x + 10$, for what $x$ is $f(x) = 0$?", 5, 0));
  q.push(tf("hard", "A tank $V(t) = 50 - 5t$ empties at $t = 10$, so its domain is $0 \\le t \\le 10$.", true));
  q.push(num("hard", "If $g(x) = x^2 + 3x$, find $g(3)$.", 18, 0));
  q.push(mc("hard", "If $f(x) = 4 - x^2$, the maximum output is…", ["4", "0", "-4", "unbounded"], 0));
  q.push(num("hard", "If $f(x) = 6x + 2$, solve $f(x) = 20$.", 3, 0));
  q.push(fill("hard", "If $f(x) = 10 - 2x$, then $f(x) = 0$ at $x =$ ___.", ["5"]));
  q.push(mc("hard", "Which is NOT a function (by the vertical line test)?", ["$x = y^2$", "$y = x^2$", "$y = 2x$", "$y = 5$"], 0));
  q.push(num("hard", "If $f(x) = x^2 - 4x + 4$, find $f(2)$.", 0, 0));
  q.push(tf("hard", "$f(a) = f(b)$ can happen for $a \\ne b$ in a quadratic.", true));
  q.push(num("hard", "If $f(x) = 3x$, find $f(2) + f(3)$.", 15, 0));
  return q;
}

// ── 2.2 Intercepts, Slope, and Rate of Change ────────────────
function g22() {
  const q = [];
  for (let i = 0; i < 12; i++) { const x1 = ri(-4, 4), y1 = rnz(-6, 6), dx = ri(1, 4), m = rnz(-4, 5); const x2 = x1 + dx, y2 = y1 + m * dx; q.push(num("easy", `Find the slope through $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`, m, 0)); }
  q.push(mc("easy", "To find the $y$-intercept, set…", ["$x = 0$", "$y = 0$", "$m = 0$", "$x = 1$"], 0));
  q.push(mc("easy", "To find the $x$-intercept, set…", ["$y = 0$", "$x = 0$", "$m = 1$", "$y = 1$"], 0));
  q.push(mc("easy", "Slope of a horizontal line is…", ["0", "1", "undefined", "$-1$"], 0));
  q.push(mc("easy", "Slope of a vertical line is…", ["undefined", "0", "1", "$-1$"], 0));
  q.push(tf("easy", "Slope is 'rise over run'.", true));
  q.push(num("easy", "Slope of $y = 3x + 5$?", 3, 0));
  q.push(fill("easy", "The $y$-intercept of $y = 2x - 7$ is $(0, \\text{___})$.", ["-7"]));
  q.push(mc("easy", "A negative slope means the line…", ["falls left to right", "rises left to right", "is flat", "is vertical"], 0));
  for (let i = 0; i < 8; i++) { const m = rnz(-6, 6), b = rnz(-9, 9); q.push(num("medium", `State the slope of $y = ${m}x ${sign(b)}$.`, m, 0)); }
  q.push(mc("medium", "$y$-intercept of $y = -\\tfrac{2}{3}x + 5$?", ["$(0, 5)$", "$(5, 0)$", "$(0, -\\tfrac23)$", "$(0, -5)$"], 0));
  q.push(mc("medium", "Intercepts of $2x + 3y = 12$?", ["$(6,0)$ and $(0,4)$", "$(0,6)$ and $(4,0)$", "$(12,0)$ and $(0,12)$", "$(2,0)$ and $(0,3)$"], 0));
  q.push(num("medium", "$x$-intercept of $y = 2x - 8$? Enter the $x$-value.", 4, 0));
  q.push(num("medium", "A pool fills as $V = 100 + 20t$. What's the fill rate (per minute)?", 20, 0));
  q.push(tf("medium", "In $C = 3 + 2m$, the slope 2 is the rate of change.", true));
  q.push(mc("medium", "Slope of the line through $(1,2)$ and $(4,11)$?", ["3", "9", "$\\tfrac13$", "$-3$"], 0));
  q.push(fill("medium", "The slope of $y = -4x + 1$ is ___.", ["-4"]));
  q.push(num("medium", "$y$-intercept value of $y = 5x - 6$?", -6, 0));
  q.push(mc("hard", "Slope through $(-2, 3)$ and $(2, 11)$?", ["2", "$\\tfrac12$", "$-2$", "4"], 0));
  q.push(mc("hard", "A line has slope 0 and passes through $(3, -4)$. Its equation is…", ["$y = -4$", "$x = 3$", "$y = 3$", "$x = -4$"], 0));
  q.push(mc("hard", "Rate of change of $y = 100 - 25t$?", ["$-25$ per unit", "$100$", "$25$", "$0$"], 0));
  q.push(num("hard", "Find the slope through $(0, -3)$ and $(4, 5)$.", 2, 0));
  q.push(num("hard", "Line $3x - y = 6$: find its slope.", 3, 0, "Solve for $y$: $y = 3x - 6$."));
  q.push(num("hard", "Line $2x + 4y = 8$: find its slope.", -0.5, 0.01));
  q.push(mc("hard", "As $x$ increases by 1, $y = -3x + 2$ changes by…", ["$-3$", "$+3$", "$+2$", "$-1$"], 0));
  q.push(tf("hard", "A vertical line has an undefined slope because the run is zero.", true));
  q.push(num("hard", "$x$-intercept of $3x + 2y = 12$? Enter the $x$-value.", 4, 0));
  q.push(num("hard", "$y$-intercept of $3x + 2y = 12$? Enter the $y$-value.", 6, 0));
  q.push(mc("hard", "Which line is steepest?", ["$y = 4x$", "$y = 2x$", "$y = -x$", "$y = 0.5x$"], 0));
  q.push(fill("hard", "The slope through $(2,2)$ and $(5,2)$ is ___.", ["0"]));
  q.push(num("hard", "A candle burns from 20 cm at 4 cm/hour. What's the rate of change (per hour)?", -4, 0));
  return q;
}

// ── 2.3 Writing Linear Equations ─────────────────────────────
function g23() {
  const q = [];
  for (let i = 0; i < 10; i++) { const m = rnz(-5, 6), b = rnz(-8, 8); q.push(mcv("easy", `Write the line with slope $${m}$ and $y$-intercept $${b}$.`, `$y = ${m}x ${sign(b)}$`, [`$y = ${b}x ${sign(m)}$`, `$y = ${m}x ${sign(-b)}$`, `$y = ${-m}x ${sign(b)}$`])); }
  q.push(mc("easy", "Slope-intercept form is…", ["$y = mx + b$", "$Ax + By = C$", "$y - y_1 = m(x - x_1)$", "$x = a$"], 0));
  q.push(mc("easy", "Point-slope form is…", ["$y - y_1 = m(x - x_1)$", "$y = mx + b$", "$Ax + By = C$", "$y = a$"], 0));
  q.push(tf("easy", "In $y = mx + b$, $m$ is the slope.", true));
  q.push(fill("easy", "A line with slope 3 and $y$-intercept 0 is $y = \\text{___}x$.", ["3"]));
  q.push(mc("easy", "The line $y = -2x + 5$ has $y$-intercept…", ["$(0,5)$", "$(5,0)$", "$(0,-2)$", "$(-2,0)$"], 0));
  q.push(mc("easy", "Horizontal line through $(4, -1)$?", ["$y = -1$", "$x = 4$", "$y = 4$", "$x = -1$"], 0));
  q.push(mc("easy", "Vertical line through $(4, -1)$?", ["$x = 4$", "$y = -1$", "$x = -1$", "$y = 4$"], 0));
  for (let i = 0; i < 8; i++) { const m = rnz(-4, 5), x1 = ri(-3, 4), y1 = rnz(-6, 6); const b = y1 - m * x1; q.push(mcv("medium", `Write the line through $(${x1}, ${y1})$ with slope $${m}$.`, `$y = ${m}x ${sign(b)}$`, [`$y = ${m}x ${sign(-b)}$`, `$y = ${m}x ${sign(y1)}$`, `$y = ${x1}x ${sign(b)}$`])); }
  q.push(mc("medium", "Line through $(2, 5)$ with slope 3?", ["$y = 3x - 1$", "$y = 3x + 5$", "$y = 3x + 1$", "$y = 2x + 5$"], 0));
  q.push(mc("medium", "Line through $(1, 4)$ and $(3, 10)$?", ["$y = 3x + 1$", "$y = 3x - 1$", "$y = 2x + 2$", "$y = 6x - 2$"], 0));
  q.push(num("medium", "Line through $(1, 4)$ and $(3, 10)$: find its slope.", 3, 0));
  q.push(mcv("medium", "Convert $y = \\tfrac{2}{3}x + 4$ to standard form (integers).", "$2x - 3y = -12$", ["$2x + 3y = 12$", "$2x - 3y = 12$", "$3x - 2y = -12$"]));
  q.push(tf("medium", "Standard form is $Ax + By = C$.", true));
  q.push(fill("medium", "Line with slope $-4$, $y$-intercept 2: $y = -4x + \\text{___}$.", ["2"]));
  q.push(mc("medium", "Line through $(0, -3)$ and $(2, 1)$?", ["$y = 2x - 3$", "$y = 2x + 3$", "$y = -2x - 3$", "$y = x - 3$"], 0));
  q.push(num("hard", "Slope of the line through $(2, 3)$ and $(6, 11)$?", 2, 0));
  q.push(mc("hard", "Line through $(2, 3)$ and $(6, 11)$?", ["$y = 2x - 1$", "$y = 2x + 1$", "$y = 2x - 3$", "$y = 4x - 5$"], 0));
  q.push(mcv("hard", "Convert $y = -\\tfrac12 x + 3$ to standard form.", "$x + 2y = 6$", ["$x - 2y = 6$", "$x + 2y = -6$", "$2x + y = 6$"]));
  q.push(mc("hard", "Vertical line through $(-3, 7)$?", ["$x = -3$", "$y = 7$", "$x = 7$", "$y = -3$"], 0));
  q.push(mc("hard", "Line with slope 5 through $(1, 3)$?", ["$y = 5x - 2$", "$y = 5x + 3$", "$y = 5x - 3$", "$y = 3x + 5$"], 0));
  q.push(mc("hard", "A line passes through $(0, 0)$ with slope $-\\tfrac34$. Its equation?", ["$y = -\\tfrac34 x$", "$y = \\tfrac34 x$", "$y = -\\tfrac43 x$", "$y = -\\tfrac34 x + 1$"], 0));
  q.push(num("hard", "What is the $x$-intercept of $y = 2x - 6$? Enter the $x$-value.", 3, 0));
  q.push(tf("hard", "The point-slope form lets you write a line from one point and a slope.", true));
  q.push(mc("hard", "Which represents a horizontal line?", ["$y = 3$", "$x = 3$", "$y = 3x$", "$y = x + 3$"], 0));
  q.push(fill("hard", "In standard form $2x - 3y = -12$, the constant $C$ is ___.", ["-12"]));
  q.push(mc("hard", "Line through $(4, 1)$ and $(4, 6)$?", ["$x = 4$", "$y = 4$", "$y = x$", "undefined equation"], 0));
  q.push(mcv("hard", "Write the line with slope $\\tfrac13$ through $(3, 2)$.", "$y = \\tfrac13 x + 1$", ["$y = \\tfrac13 x - 1$", "$y = 3x + 1$", "$y = \\tfrac13 x + 2$"]));
  q.push(num("hard", "Slope of the line through $(-1, -2)$ and $(3, 6)$?", 2, 0));
  q.push(mc("hard", "Two points $(1,5)$ and $(4,5)$ give a line that is…", ["horizontal ($y=5$)", "vertical ($x=5$)", "slope 5", "undefined"], 0));
  return q;
}

// ── 2.4 Parallel and Perpendicular Lines ─────────────────────
function g24() {
  const q = [];
  for (let i = 0; i < 20; i++) { const m = rnz(-6, 6); q.push(num(i < 10 ? "easy" : "medium", `A line has slope $${m}$. What slope is parallel to it?`, m, 0)); }
  q.push(mc("easy", "Parallel lines have…", ["equal slopes", "opposite slopes", "reciprocal slopes", "zero slope"], 0));
  q.push(mc("easy", "Perpendicular slopes are…", ["negative reciprocals", "equal", "the same sign", "always 1"], 0));
  q.push(tf("easy", "$y = 2x + 1$ and $y = 2x - 4$ are parallel.", true));
  q.push(mc("easy", "Slope perpendicular to $m = 2$?", ["$-\\tfrac12$", "$2$", "$\\tfrac12$", "$-2$"], 0));
  q.push(fill("easy", "The slope parallel to $y = 7x$ is ___.", ["7"]));
  q.push(mc("easy", "Two perpendicular slopes multiply to…", ["$-1$", "$1$", "$0$", "$2$"], 0));
  q.push(mc("easy", "A horizontal line is perpendicular to a…", ["vertical line", "horizontal line", "slanted line", "parabola"], 0));
  q.push(mcv("medium", "Slope perpendicular to $m = 3$?", "$-\\tfrac13$", ["$\\tfrac13$", "$3$", "$-3$"]));
  q.push(mcv("medium", "Slope perpendicular to $m = -\\tfrac23$?", "$\\tfrac32$", ["$-\\tfrac32$", "$\\tfrac23$", "$-\\tfrac23$"]));
  q.push(mc("medium", "Line parallel to $y = 4x - 1$ through $(0, -2)$?", ["$y = 4x - 2$", "$y = -\\tfrac14 x - 2$", "$y = 4x + 2$", "$y = -4x - 2$"], 0));
  q.push(mc("medium", "Line perpendicular to $y = \\tfrac14 x + 5$ through $(0, 1)$?", ["$y = -4x + 1$", "$y = 4x + 1$", "$y = \\tfrac14 x + 1$", "$y = -\\tfrac14 x + 1$"], 0));
  q.push(mc("medium", "Are $y = 2x + 3$ and $y = 2x - 9$…", ["parallel", "perpendicular", "the same line", "neither"], 0));
  q.push(mc("medium", "Are $y = -3x + 2$ and $y = \\tfrac13 x - 4$…", ["perpendicular", "parallel", "the same line", "neither"], 0));
  q.push(tf("medium", "Parallel lines never intersect.", true));
  q.push(num("medium", "Slope perpendicular to a line of slope $\\tfrac15$? Enter as a whole number.", -5, 0));
  q.push(fill("medium", "The negative reciprocal of $\\tfrac25$ is $-\\tfrac{5}{\\text{___}}$.", ["2"]));
  q.push(mc("medium", "Line parallel to $y = -x + 4$ through the origin?", ["$y = -x$", "$y = x$", "$y = -x + 4$", "$y = 4$"], 0));
  q.push(mc("hard", "Perpendicular to $2x + 3y = 6$? (find its slope first)", ["slope $\\tfrac32$", "slope $-\\tfrac23$", "slope $\\tfrac23$", "slope $-\\tfrac32$"], 0, "The line's slope is $-\\tfrac23$; perpendicular is $\\tfrac32$."));
  q.push(mc("hard", "Line perpendicular to $y = \\tfrac12 x$ through $(2, 3)$?", ["$y = -2x + 7$", "$y = 2x - 1$", "$y = -2x - 7$", "$y = \\tfrac12 x + 2$"], 0));
  q.push(mc("hard", "Are $3x - y = 4$ and $x + 3y = 9$…", ["perpendicular", "parallel", "same line", "neither"], 0, "Slopes $3$ and $-\\tfrac13$ multiply to $-1$."));
  q.push(mc("hard", "For what $k$ is $y = kx + 1$ parallel to $y = 5x - 2$?", ["$k = 5$", "$k = -5$", "$k = \\tfrac15$", "$k = -\\tfrac15$"], 0));
  q.push(mc("hard", "For what $k$ is $y = kx$ perpendicular to $y = 2x$?", ["$k = -\\tfrac12$", "$k = 2$", "$k = \\tfrac12$", "$k = -2$"], 0));
  q.push(tf("hard", "Lines $y = 3x + 1$ and $y = 3x + 1$ are parallel (they're identical).", false, "Identical lines are the same line, not distinct parallels."));
  q.push(num("hard", "Two perpendicular slopes are $4$ and $k$. Find $k$ as a decimal.", -0.25, 0.001));
  q.push(mc("hard", "Which line is perpendicular to a vertical line $x = 5$?", ["a horizontal line", "another vertical line", "$y = x$", "$y = 5x$"], 0));
  q.push(mc("hard", "Line parallel to $2x - y = 3$ through $(1, 0)$?", ["$y = 2x - 2$", "$y = 2x + 2$", "$y = -\\tfrac12 x + \\tfrac12$", "$y = 2x$"], 0));
  q.push(fill("hard", "Perpendicular slopes multiply to ___.", ["-1"]));
  q.push(mcv("hard", "Slope perpendicular to $m = \\tfrac74$?", "$-\\tfrac47$", ["$\\tfrac47$", "$-\\tfrac74$", "$\\tfrac74$"]));
  q.push(tf("hard", "Two lines with slopes $\\tfrac12$ and $-2$ are perpendicular.", true));
  return q;
}

// ── 2.5 Function Transformations ─────────────────────────────
function g25() {
  const q = [];
  for (let i = 0; i < 18; i++) { const k = rnz(-6, 6); q.push(mc(i < 9 ? "easy" : "medium", `From $f(x)=x^2$, describe $g(x) = x^2 ${sign(k)}$.`, [k > 0 ? `up ${k}` : `down ${-k}`, k > 0 ? `down ${k}` : `up ${-k}`, `left ${Math.abs(k)}`, `right ${Math.abs(k)}`], 0)); }
  q.push(mc("easy", "$f(x) + k$ shifts the graph…", ["vertically", "horizontally", "diagonally", "not at all"], 0));
  q.push(mc("easy", "$f(x) + 3$ shifts the graph…", ["up 3", "down 3", "left 3", "right 3"], 0));
  q.push(mc("easy", "$f(x) - 5$ shifts the graph…", ["down 5", "up 5", "left 5", "right 5"], 0));
  q.push(tf("easy", "$kf(x)$ is a vertical stretch or compression.", true));
  q.push(mc("easy", "$2f(x)$ makes the graph…", ["taller (stretch)", "shorter", "shifted left", "shifted up"], 0));
  q.push(mc("easy", "$f(x + k)$ shifts the graph…", ["horizontally", "vertically", "not at all", "diagonally"], 0));
  q.push(tf("easy", "$f(x - 2)$ shifts the graph right 2.", true));
  q.push(mc("easy", "$-f(x)$ reflects the graph over the…", ["$x$-axis", "$y$-axis", "line $y = x$", "origin only"], 0));
  q.push(mc("medium", "$f(x + 3)$ shifts the graph…", ["left 3", "right 3", "up 3", "down 3"], 0, "Inside changes act opposite to their sign."));
  q.push(mc("medium", "$f(x - 4)$ shifts the graph…", ["right 4", "left 4", "up 4", "down 4"], 0));
  q.push(mc("medium", "From $f(x)=x^2$, the vertex of $g(x) = (x - 1)^2 + 2$ is…", ["$(1, 2)$", "$(-1, 2)$", "$(1, -2)$", "$(2, 1)$"], 0));
  q.push(mc("medium", "$g(x) = 3f(x)$ where $f(x) = x^2$ is a…", ["vertical stretch by 3", "vertical compression", "shift up 3", "shift right 3"], 0));
  q.push(mc("medium", "$g(x) = \\tfrac12 f(x)$ is a…", ["vertical compression", "vertical stretch", "horizontal shift", "reflection"], 0));
  q.push(mc("medium", "Vertex of $g(x) = (x + 3)^2 - 1$?", ["$(-3, -1)$", "$(3, -1)$", "$(-3, 1)$", "$(3, 1)$"], 0));
  q.push(tf("medium", "$f(x) + k$ with $k < 0$ shifts the graph down.", true));
  q.push(fill("medium", "$(x - 5)^2$ shifts $x^2$ right by ___.", ["5"]));
  q.push(mc("medium", "$y = x^2 + 5$ vs $y = x^2$: the shift is…", ["up 5", "down 5", "right 5", "left 5"], 0));
  q.push(mc("hard", "Describe $g(x) = -2(x - 1)^2 + 3$ from $x^2$.", ["reflect, stretch 2, right 1, up 3", "stretch 2, left 1, down 3", "compress, right 1, up 3", "reflect, left 1, up 3"], 0));
  q.push(mc("hard", "The vertex of $g(x) = 2(x + 4)^2 - 5$?", ["$(-4, -5)$", "$(4, -5)$", "$(-4, 5)$", "$(4, 5)$"], 0));
  q.push(mc("hard", "$g(x) = f(x + 2) - 3$ shifts $f$…", ["left 2, down 3", "right 2, down 3", "left 2, up 3", "right 2, up 3"], 0));
  q.push(tf("hard", "$f(x + 3)$ moves the graph left because inputs reach their values sooner.", true));
  q.push(mc("hard", "A negative $k$ in $kf(x)$ produces a…", ["reflection over the $x$-axis", "horizontal shift", "vertical shift", "no change"], 0));
  q.push(mc("hard", "$|k| > 1$ in $kf(x)$ gives a…", ["stretch (taller/narrower)", "compression", "shift", "reflection only"], 0));
  q.push(mc("hard", "$0 < |k| < 1$ in $kf(x)$ gives a…", ["compression (shorter/wider)", "stretch", "shift", "reflection"], 0));
  q.push(fill("hard", "The vertex of $y = (x - 2)^2 + 7$ is $(2, \\text{___})$.", ["7"]));
  q.push(mc("hard", "Which moves $x^2$ up 4 and right 1?", ["$(x-1)^2 + 4$", "$(x+1)^2 + 4$", "$(x-1)^2 - 4$", "$(x+4)^2 + 1$"], 0));
  q.push(tf("hard", "$g(x) = f(x) - 2$ and $g(x) = f(x - 2)$ move the graph the same way.", false, "One is vertical (down), the other horizontal (right)."));
  q.push(mc("hard", "From $x^2$, $y = (x+5)^2 - 1$ has vertex…", ["$(-5, -1)$", "$(5, -1)$", "$(-5, 1)$", "$(5, 1)$"], 0));
  q.push(num("hard", "The graph of $f(x) - 7$ shifts down by how many units?", 7, 0));
  return q;
}

// ── 2.3 Point-Slope Form ─────────────────────────────────────
function g23ps() {
  const q = [];
  const ps = (m, x1, y1) => {
    const left = y1 === 0 ? "y" : y1 > 0 ? `y - ${y1}` : `y + ${-y1}`;
    const inner = x1 === 0 ? "x" : x1 > 0 ? `x - ${x1}` : `x + ${-x1}`;
    const coef = m === 1 ? "" : m === -1 ? "-" : `${m}`;
    return `${left} = ${coef}(${inner})`;
  };
  for (let i = 0; i < 16; i++) {
    const m = rnz(-4, 5), x1 = rnz(-4, 4), y1 = rnz(-6, 6);
    q.push(mcv(i < 8 ? "easy" : "medium", `Write point-slope form for the line with slope $${m}$ through $(${x1}, ${y1})$.`,
      `$${ps(m, x1, y1)}$`, [`$${ps(m, -x1, y1)}$`, `$${ps(m, x1, -y1)}$`, `$${ps(m + 1, x1, y1)}$`]));
  }
  for (let i = 0; i < 10; i++) {
    const m = rnz(-4, 5), x1 = rnz(-4, 4), y1 = rnz(-6, 6); const b = y1 - m * x1;
    q.push(num(i < 5 ? "medium" : "hard", `Simplify $${ps(m, x1, y1)}$ to $y = mx + b$; enter $b$.`, b, 0));
  }
  q.push(mc("easy", "Point-slope form is…", ["$y - y_1 = m(x - x_1)$", "$y = mx + b$", "$Ax + By = C$", "$y = a$"], 0));
  q.push(tf("easy", "Point-slope form needs one point and the slope.", true));
  q.push(mc("easy", "For a point $(-2, 5)$, the $(x - x_1)$ part becomes…", ["$(x + 2)$", "$(x - 2)$", "$(x - 5)$", "$(x + 5)$"], 0));
  q.push(fill("easy", "Slope 4 through $(1, 2)$: $y - 2 = 4(x - \\text{___})$.", ["1"]));
  q.push(mc("easy", "Which point does $y - 3 = 2(x - 5)$ pass through?", ["$(5, 3)$", "$(3, 5)$", "$(-5, -3)$", "$(2, 3)$"], 0));
  q.push(mc("medium", "Simplify $y - 2 = 4(x - 1)$.", ["$y = 4x - 2$", "$y = 4x + 2$", "$y = 4x - 1$", "$y = 4x + 6$"], 0));
  q.push(mc("medium", "Line through $(-2, 5)$ with slope $-3$, in point-slope form?", ["$y - 5 = -3(x + 2)$", "$y + 5 = -3(x - 2)$", "$y - 5 = -3(x - 2)$", "$y + 5 = -3(x + 2)$"], 0));
  q.push(tf("medium", "You can use either given point when writing a line through two points.", true));
  for (let i = 0; i < 6; i++) { const x1 = ri(-3, 3), dx = ri(1, 4), m = rnz(-4, 5); const x2 = x1 + dx, y1 = rnz(-5, 5), y2 = y1 + m * dx; q.push(num("hard", `Line through $(${x1}, ${y1})$ and $(${x2}, ${y2})$: find the slope $m$ (for point-slope).`, m, 0)); }
  q.push(mcv("hard", "Through $(1, 4)$ and $(3, 10)$, point-slope using $(1,4)$?", "$y - 4 = 3(x - 1)$", ["$y - 1 = 3(x - 4)$", "$y - 4 = 2(x - 1)$", "$y + 4 = 3(x + 1)$"]));
  q.push(mc("hard", "Slope $\\tfrac12$ through $(4, 1)$ simplifies to…", ["$y = \\tfrac12 x - 1$", "$y = \\tfrac12 x + 1$", "$y = \\tfrac12 x - 3$", "$y = 2x - 7$"], 0));
  return q;
}

// ── 2.4 General (Standard) Form ──────────────────────────────
function g24gf() {
  const q = [];
  // Ax + By = C built from integer intercepts (p, 0) and (0, q): A=q, B=p, C=p·q
  for (let i = 0; i < 18; i++) {
    const p = rnz(-6, 6), qq = rnz(-6, 6); const A = qq, B = p, C = p * qq;
    const askX = i % 2 === 0;
    const lhs = `${A === 1 ? "" : A === -1 ? "-" : A}x ${B < 0 ? `- ${-B}` : `+ ${B}`}y = ${C}`;
    q.push(num(i < 8 ? "easy" : i < 14 ? "medium" : "hard",
      `For $${lhs}$, find the ${askX ? "$x$" : "$y$"}-intercept; enter the ${askX ? "$x$" : "$y$"}-value.`, askX ? p : qq, 0));
  }
  q.push(mc("easy", "Standard (general) form is…", ["$Ax + By = C$", "$y = mx + b$", "$y - y_1 = m(x - x_1)$", "$y = a$"], 0));
  q.push(mc("easy", "To find the $x$-intercept of $Ax + By = C$, set…", ["$y = 0$", "$x = 0$", "$C = 0$", "$A = 0$"], 0));
  q.push(mc("easy", "To find the $y$-intercept of $Ax + By = C$, set…", ["$x = 0$", "$y = 0$", "$B = 0$", "$C = 1$"], 0));
  q.push(tf("easy", "In standard form we prefer integer coefficients with $A \\ge 0$.", true));
  q.push(fill("easy", "For $2x + 3y = 12$, the $x$-intercept is $(\\text{___}, 0)$.", ["6"]));
  q.push(mc("medium", "Intercepts of $3x + 2y = 12$?", ["$(4,0)$ and $(0,6)$", "$(6,0)$ and $(0,4)$", "$(3,0)$ and $(0,2)$", "$(12,0)$ and $(0,12)$"], 0));
  q.push(mcv("medium", "Write $y = 2x - 3$ in standard form ($A \\ge 0$).", "$2x - y = 3$", ["$2x + y = 3$", "$-2x + y = 3$", "$2x - y = -3$"]));
  q.push(mcv("medium", "Write $y = -3x + 5$ in standard form.", "$3x + y = 5$", ["$3x - y = 5$", "$-3x + y = 5$", "$3x + y = -5$"]));
  q.push(mcv("medium", "Clear fractions: $y = \\tfrac23 x + 4$ in standard form.", "$2x - 3y = -12$", ["$2x + 3y = 12$", "$2x - 3y = 12$", "$3x - 2y = 12$"]));
  q.push(tf("medium", "The $x$-intercept of $Ax + By = C$ is $\\tfrac{C}{A}$.", true));
  q.push(num("medium", "For $5x - 2y = 20$, find the $x$-intercept ($x$-value).", 4, 0));
  q.push(num("medium", "For $5x - 2y = 20$, find the $y$-intercept ($y$-value).", -10, 0));
  q.push(mc("hard", "Slope of $6x + 3y = 9$? (use $m = -A/B$)", ["$-2$", "$2$", "$-\\tfrac12$", "$6$"], 0));
  q.push(num("hard", "For $Ax + By = C$ with $A=4, B=-2$, the slope $m = -A/B$ is… (decimal)", 2, 0.001));
  q.push(mcv("hard", "Write $y = -\\tfrac12 x + 3$ in standard form (integers).", "$x + 2y = 6$", ["$x - 2y = 6$", "$x + 2y = -6$", "$2x + y = 6$"]));
  q.push(mc("hard", "Which is a vertical line in 'standard' style?", ["$x + 0y = 4$", "$0x + y = 4$", "$x + y = 4$", "$y = 4$"], 0));
  q.push(fill("hard", "In $2x - 3y = -12$, the constant $C$ is ___.", ["-12"]));
  q.push(tf("hard", "Graphing $Ax+By=C$ is quick because both intercepts come from one-step equations.", true));
  return q;
}

export default [
  { code: "2.1", gen: g21 },
  { code: "2.2", gen: g22 },
  { code: "2.3", gen: g23ps }, // Point-Slope Form
  { code: "2.4", gen: g24gf }, // General (Standard) Form
  { code: "2.5", gen: g23 },   // Converting Between Forms (was "Writing Linear Equations")
  { code: "2.6", gen: g24 },   // Parallel & Perpendicular (was 2.4)
  { code: "5.6", gen: g25 },   // Function Transformations (moved to Chapter 5)
];
