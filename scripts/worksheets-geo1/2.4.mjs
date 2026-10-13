import { fig, coordPts } from "./_figs.mjs";

function slopeTriangle() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" width="220" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Slope triangle">
  <line x1="30" y1="130" x2="180" y2="40" stroke="#0f172a" stroke-width="2.2"/>
  <line x1="30" y1="130" x2="180" y2="130" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
  <line x1="180" y1="130" x2="180" y2="40" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
  <circle cx="30" cy="130" r="4" fill="#ea580c"/>
  <circle cx="180" cy="40" r="4" fill="#ea580c"/>
  <text x="100" y="148" font-size="12" fill="#334155" font-family="Georgia,serif" text-anchor="middle">run</text>
  <text x="195" y="88" font-size="12" fill="#334155" font-family="Georgia,serif">rise</text>
</svg>`;
}

function perpSlopesFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Perpendicular slopes">
  <line x1="30" y1="170" x2="170" y2="30" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="30" y1="30" x2="170" y2="170" stroke="#c2410c" stroke-width="2.2"/>
  <text x="140" y="22" font-size="12" fill="#1d4ed8" font-family="Georgia,serif">m = 2</text>
  <text x="115" y="188" font-size="12" fill="#c2410c" font-family="Georgia,serif">m = -1/2</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "2.4",
  title: "Parallel & Perpendicular Equations",
  intro: "Slope connects the visual idea of parallel and perpendicular lines to hard algebra: equal slopes force lines to run in the same direction forever without meeting, while a slope and its negative reciprocal force a perfect $90^\\circ$ turn. This section goes beyond just flipping a fraction — it uses the slope formula $m=\\dfrac{y_2-y_1}{x_2-x_1}$ from two raw points, tests whether three points are collinear, and solves for a missing coordinate that makes two lines parallel or perpendicular.",
  examples: [
    ["Example 1: Why parallel lines share slope",
      "A line has slope $3$. Explain why any line parallel to it must also have slope $3$, then state that slope.",
      fig(slopeTriangle(), "Slope measures steepness — the rise-to-run ratio never changes along a straight line.") +
      "Slope measures a line's steepness and direction; two distinct lines are parallel exactly when they never meet, which requires identical steepness.<br>" +
      "If the slopes differed even slightly, the lines would eventually converge or diverge and cross somewhere.<br>" +
      "<b>Answer:</b> The parallel line's slope is also $3$."],

    ["Example 2: Perpendicular slopes — negative reciprocal",
      "A line has slope $2$. Find the slope of a line perpendicular to it, and explain the negative reciprocal rule.",
      fig(perpSlopesFig(), "Perpendicular lines: slopes multiply to −1.") +
      "Rule: for two non-vertical, non-horizontal lines, perpendicular slopes multiply to $-1$: $m_1 \\cdot m_2 = -1$.<br>" +
      "Solve for the perpendicular slope: $2 \\cdot m_2 = -1 \\Rightarrow m_2 = -\\dfrac{1}{2}$.<br>" +
      "Shortcut: flip the fraction and switch the sign — the \"negative reciprocal.\"<br>" +
      "<b>Answer:</b> $-\\dfrac{1}{2}$."],

    ["Example 3: Negative reciprocal of a fraction",
      "A line has slope $-\\dfrac{3}{4}$. Find the perpendicular slope.",
      "Flip the fraction and switch the sign: $-\\dfrac{3}{4} \\rightarrow \\dfrac{4}{3}$.<br>" +
      "Check: $\\left(-\\dfrac{3}{4}\\right)\\left(\\dfrac{4}{3}\\right) = -1$. ✓<br>" +
      "<b>Answer:</b> $\\dfrac{4}{3}$."],

    ["Example 4: Slope from two points, then a parallel line",
      "Find the slope of the line through $(1,2)$ and $(5,10)$, then write the equation of a line parallel to it through $(0,-3)$.",
      fig(coordPts([{ x: 1, y: 2, label: "(1,2)" }, { x: 5, y: 10, label: "(5,10)" }], { xmin: -1, xmax: 6, ymin: -1, ymax: 11 }), "Two points determine both the slope and the direction of the line.") +
      "Apply the slope formula: $m = \\dfrac{y_2-y_1}{x_2-x_1} = \\dfrac{10-2}{5-1} = \\dfrac{8}{4} = 2$.<br>" +
      "A parallel line keeps the same slope, $m=2$, and uses the new $y$-intercept $-3$: $y = 2x - 3$.<br>" +
      "<b>Answer:</b> slope $=2$; parallel line: $y = 2x - 3$."],

    ["Example 5: Perpendicular through a point",
      "Write the equation of a line perpendicular to $y = -\\dfrac{1}{3}x + 4$ through $(0, 2)$.",
      "Find the perpendicular slope: negative reciprocal of $-\\dfrac{1}{3}$ is $3$.<br>" +
      "Use the given point as the $y$-intercept since it has $x=0$: $b = 2$.<br>" +
      "<b>Answer:</b> $y = 3x + 2$."],

    ["Example 6: Identify parallel from equations",
      "Are $y = 5x - 1$ and $y = 5x + 7$ parallel?",
      "Compare slopes directly from slope-intercept form: both have slope $5$.<br>" +
      "Same slope, different $y$-intercepts ($-1$ vs. $7$) means the lines are distinct but never meet.<br>" +
      "<b>Answer:</b> Yes — parallel."],

    ["Example 7: Identify perpendicular from equations",
      "Are $y = 4x$ and $y = -\\dfrac{1}{4}x + 1$ perpendicular?",
      "Multiply the slopes: $4 \\times \\left(-\\dfrac{1}{4}\\right) = -1$.<br>" +
      "The product is exactly $-1$, which is the perpendicular condition.<br>" +
      "<b>Answer:</b> Yes — perpendicular."],

    ["Example 8: Horizontal and vertical special cases",
      "State the slope of $y = 5$ and the slope of $x = 3$, and explain why the usual product rule can't test them against each other.",
      "$y=5$ is horizontal: slope $=0$ (rise is always $0$). $x=3$ is vertical: slope is undefined (run is always $0$, causing division by zero).<br>" +
      "The rule $m_1m_2=-1$ needs two actual numbers to multiply — \"undefined\" isn't a number, so the rule can't be applied directly, even though a horizontal and a vertical line ARE always perpendicular by definition.<br>" +
      "<b>Answer:</b> slope of $y=5$ is $0$; slope of $x=3$ is undefined; they are perpendicular by definition, not by the product rule."],

    ["Example 9: Are three points collinear?",
      "Determine whether $A(1,2)$, $B(3,6)$, and $C(5,10)$ are collinear.",
      fig(coordPts([{ x: 1, y: 2, label: "A" }, { x: 3, y: 6, label: "B" }, { x: 5, y: 10, label: "C" }], { xmin: -1, xmax: 6, ymin: -1, ymax: 11 }), "Equal slopes through a shared point force all three onto one line.") +
      "Compute the slope between the first two points: $m_{AB} = \\dfrac{6-2}{3-1} = \\dfrac{4}{2} = 2$.<br>" +
      "Compute the slope between the last two points: $m_{BC} = \\dfrac{10-6}{5-3} = \\dfrac{4}{2} = 2$.<br>" +
      "Equal slopes through the shared point $B$ mean all three points lie on the same line.<br>" +
      "<b>Answer:</b> Yes, $A$, $B$, $C$ are collinear."],

    ["Example 10: Solve for a coordinate using perpendicularity",
      "A line through $(2,1)$ and $(k,7)$ is perpendicular to a line with slope $-\\dfrac{1}{3}$. Find $k$.",
      "Perpendicular to $-\\dfrac{1}{3}$ means the target slope is the negative reciprocal: $3$.<br>" +
      "Set the slope formula for the two given points equal to $3$: $\\dfrac{7-1}{k-2} = 3$.<br>" +
      "$\\dfrac{6}{k-2}=3 \\Rightarrow 6 = 3(k-2) \\Rightarrow 6 = 3k-6 \\Rightarrow 12 = 3k \\Rightarrow k = 4$.<br>" +
      "<b>Check:</b> slope from $(2,1)$ to $(4,7)$ is $\\dfrac{6}{2}=3$, and $3 \\times \\left(-\\dfrac{1}{3}\\right) = -1$. ✓"],
  ],
  questions: [
    ["Problem 1: Parallel slope", "Slope of line parallel to slope $7$?", "$7$"],
    ["Problem 2: Perp slope", "Perpendicular to slope $5$?", "$-\\dfrac{1}{5}$"],
    ["Problem 3: Perp slope", "Perpendicular to slope $-\\dfrac{2}{3}$?", "$\\dfrac{3}{2}$"],
    ["Problem 4: Parallel equation", "Parallel to $y = -x + 4$ through $(0, 1)$.", "$y = -x + 1$"],
    ["Problem 5: Perp equation", "Perpendicular to $y = \\dfrac{1}{2}x$ through $(0, -3)$.", "$y = -2x - 3$"],
    ["Problem 6: Parallel?", "$y = 3x + 2$ and $y = 3x - 5$ parallel?", "Yes"],
    ["Problem 7: Perpendicular?", "$y = 2x$ and $y = 2x + 1$ perpendicular?", "No"],
    ["Problem 8: Perpendicular?", "$y = -\\dfrac{1}{4}x$ and $y = 4x + 3$ perpendicular?", "Yes"],
    ["Problem 9: Horizontal slope", "Slope of $y = 5$?", "$0$"],
    ["Problem 10: Vertical", "Equation of vertical line through $x = 3$?", "$x = 3$"],
    ["Problem 11: Perp to horizontal", "Line perpendicular to $y = 2$?", "A vertical line"],
    ["Problem 12: Slope product", "If lines are perpendicular (neither vertical), product of slopes?", "$-1$"],
    ["Problem 13: Write parallel", "Parallel to $y = 4x - 1$ through $(0, 0)$.", "$y = 4x$"],
    ["Problem 14: Challenge — collinearity", "Determine whether $A(-2,-1)$, $B(1,5)$, and $C(3,9)$ are collinear, showing the slope work.", "Yes; slope $AB = 2 =$ slope $BC$"],
    ["Problem 15: Challenge — solve for a coordinate", "A line through $(1,4)$ and $(m,10)$ is parallel to $y = \\dfrac{3}{2}x - 1$. Find $m$.", "$m = 5$"],
  ],
};
