// 3.3 Finite Differences and Quadratic Models — 20 hard questions
import { ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const S = String.raw;
const dots = (pts, view, step, xlabel = "x", ylabel = "y") => planeDoc({ view, points: pts.map(([x, y]) => P(x, y, false)), xlabel, ylabel, ...(step ? { step } : {}) });

export const TOPIC = "3.3 Finite Differences and Quadratic Models";
export const Q = [
  num(S`A quadratic passes through $(-1,10)$, $(0,4)$ and $(2,4)$. Find the y-coordinate of its vertex.`, 2, "c = 4, b = −2a, a + 2a = 6 → a = 2, b = −4; vertex at x = 1."),
  num("A quadratic table uses x-values 3 apart; its second differences are 54. Find a.", 3, "2a(3²) = 54."),
  tf("If a quadratic table has negative second differences, the parabola opens down.", true, "2a < 0."),
  num(S`A quadratic table gives $y=1,2,7,k$ at $x=0,1,2,3$. Find $k$.`, 16, "Differences 1, 5 → second 4 → next difference 9."),
  num("x = 0, 3, 6, 9 and y = 2, 20, 74, 164 is quadratic. Find a.", 2, "First 18, 54, 90; second 36 = 2a(3²)."),
  num("A quadratic table (x-step 1) begins y = 2, 7, 16 at x = 0, 1, 2. What is y at x = 5?", 67, "First 5, 9 → 13, 17, 21: 29, 46, 67."),
  num(S`A quadratic passes through $(-1,6)$, $(1,2)$ and $(2,6)$. Find $a$.`, 2, "Subtracting the first two: b = −2, a + c = 4; 4a − 4 + c = 6 → 3a = 6."),
  num(S`A quadratic passes through $(1,0)$, $(2,3)$ and $(4,15)$. Find $c$.`, -1, "3a + b = 3 and 12a + 2b = 12 → a = 1, b = 0."),
  num("Stopping distances (shown): v = 10, 20, 30, 40 km/h give d = 3, 8, 15, 24 m. Use a quadratic model to predict d at 60 km/h.", 48, "Second difference 2 = 2a(10²) → a = 0.01; d(0) = 0; b = 0.2: 36 + 12.", dots([[10, 3], [20, 8], [30, 15], [40, 24]], { xmin: -5, xmax: 70, ymin: -2, ymax: 55 }, { x: 10, y: 5 }, "v", "d")),
  num("Dot pattern n uses 2, 6, 12, 20 dots for n = 1, 2, 3, 4. How many dots are in pattern 10?", 110, "Second difference 2 → a = 1; d(0) = 0; n² + n."),
  num("Pattern n uses 4, 9, 16, 25 squares for n = 1, 2, 3, 4. Which pattern uses 169 squares?", 12, "(n + 1)² = 169."),
  tf("If the third differences of a table are constant and the second are not, the relation is quadratic.", false, "Constant third differences mean cubic."),
  num(S`The second differences of $y=ax^2+bx+c$ for an x-step of 0.5 are 3. Find $a$.`, 6, "2a(0.25) = 3."),
  num("The plotted points (x = 0 to 3) lie on a quadratic. Find the y-coordinate of its vertex.", 1.75, "y = 4, 2, 2, 4: a = 1, c = 4, b = −3; vertex at x = 1.5.", dots([[0, 4], [1, 2], [2, 2], [3, 4]], { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }), 0.001),
  num("A ball's heights at t = 0, 0.5, 1, 1.5 s are 1, 6.775, 10.1, 10.975 m. Find a in h = at² + bt + c.", -4.9, "First 5.775, 3.325, 0.875; second −2.45 = 2a(0.5²).", null, 0.001),
  num("A price increase of x steps (x = 0, 1, 2, 3) gives revenue 1000, 1150, 1260, 1330 dollars (shown). Use a quadratic model to find the maximum revenue (2 decimals).", 1361.25, "a = −20, b = 170, c = 1000; vertex x = 4.25.", dots([[0, 1000], [1, 1150], [2, 1260], [3, 1330]], { xmin: -1, xmax: 9, ymin: 900, ymax: 1400 }, { x: 1, y: 100 }, "x", "R"), 0.01),
  ms("Which tables (x = 0 to 4) are quadratic? Select all.", ["y: 1, 3, 7, 13, 21", "y: 2, 4, 8, 16, 32", "y: 0, −1, 0, 3, 8", "y: 5, 8, 11, 14, 17"], [0, 2], "Second differences 2 and 2; the others are exponential and linear."),
  num("A quadratic table (x-step 1) has y(0) = 4, first difference −5 from x = 0 to 1, and second differences 6. Find y at x = 3.", 7, "First differences −5, 1, 7: y = 4, −1, 0, 7."),
  num("The quadratic through the three points shown, (0, 6), (1, 2) and (3, 0), has two zeros. Find the larger one.", 3, "c = 6; a + b = −4; 3a + b = −2 → a = 1, b = −5: (x − 2)(x − 3).", dots([[0, 6], [1, 2], [3, 0]], { xmin: -1, xmax: 5, ymin: -1, ymax: 7 })),
  tf("Two different quadratics can pass through the same three points with different x-values.", false, "Three such points fix a, b and c."),
];
