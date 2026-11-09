// 1.4 Comparing Linear and Quadratic Relations — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const pts = (f, xs) => xs.map((x) => ({ x, y: f(x), label: `(${x}, ${f(x)})`, color: "blue" }));

export const TOPIC = "1.4 Comparing Linear and Quadratic Relations";
export const Q = [
  num(S`At $x=0,3,6,9$ a quadratic takes $y=4,\,31,\,112,\,247$. Enter $a$.`, 3, "Second difference 54 = 2a(3)² = 18a."),
  num(S`A quadratic has $y(0)=3$, first difference $-5$ from $x=0$ to $1$, and second difference $4$. Enter $y(4)$.`, 7, "First differences −5, −1, 3, 7: 3, −2, −3, 0, 7."),
  mx(S`Find the quadratic $y=ax^2+bx+c$ through $x=0,1,2$: $y=5,\,4,\,7$.`, "2*x^2-3*x+5", "Second difference 4 ⇒ a = 2; c = 5; 2 + b + 5 = 4 ⇒ b = −3."),
  mx(S`Find the quadratic through $x=0,1,2$: $y=-1,\,-4,\,-9$.`, "-x^2-2*x-1", "Second difference −2 ⇒ a = −1; c = −1; −1 + b − 1 = −4 ⇒ b = −2."),
  num(S`For $y=ax^2+bx+c$ (step 1), the first difference from $x$ to $x+1$ is $2ax+a+b$. If the differences from $x=0$ are $7,\,11,\,15$, enter $b$.`, 5, "2a = 4 ⇒ a = 2; first difference at x = 0 is a + b = 7."),
  num(S`Heights of a ball at $t=0,1,2,3$ s are $3,\,23,\,33,\,33$ m. Enter the maximum height (m).`, 34.25, "a = −5, h = −5t² + 25t + 3; vertex t = 2.5: −31.25 + 62.5 + 3.", null, 0.01),
  num(S`For the same ball ($h=-5t^2+25t+3$), enter the time of maximum height (s).`, 2.5, "Symmetry: h(2) = h(3), so the vertex is at t = 2.5.", null, 1e-9),
  mc("The table shows the number of handshakes H when n people each shake hands once: n = 2, 3, 4, 5 give H = 1, 3, 6, 10. What type of relation is it?", "quadratic", ["linear", "neither", "exponential"], "First 2, 3, 4; second 1, 1: quadratic with a = ½."),
  num(S`Handshakes: $H(n)=\frac{n(n-1)}{2}$. Enter the number of handshakes among $20$ people.`, 190, "20 · 19 / 2."),
  ms("Select every TRUE statement.", ["a linear relation has second differences 0", "a quadratic relation can have a constant first difference", "if second differences are −6 (step 1), the parabola opens down", "the second difference does not depend on b or c"], [0, 2, 3], "Quadratics have changing first differences."),
  mc("Which graph matches a relation with first differences 9, 7, 5, 3 (step 1)?", "a parabola opening down", ["a line falling", "a parabola opening up", "a line rising"], "Second differences −2: a = −1.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 28 }, curves: [{ f: (x) => -x * x + 10 * x, color: "violet" }], step: { x: 1, y: 4 } })),
  num(S`A tiling pattern has $T(1)=3$, $T(2)=8$, $T(3)=15$, $T(4)=24$. Enter $T(10)$.`, 120, "T(n) = n² + 2n = n(n + 2)."),
  num(S`For $T(n)=n^2+2n$, which figure number has $143$ tiles?`, 11, "n(n + 2) = 143 = 11 · 13."),
  mc("The data in the figure: is a quadratic model exact or approximate?", "approximate: second differences are close but not equal", ["exact: second differences are equal", "linear: first differences are equal", "neither: no pattern"], "Values 2, 6.1, 14, 25.9, 42 give second differences 3.8, 4.0, 4.2.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 45 }, points: [[0, 2], [1, 6.1], [2, 14], [3, 25.9], [4, 42]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "blue" })), step: { x: 1, y: 5 } })),
  num(S`At $x=0,2,4,6$ a relation has $y=-3,\,1,\,5,\,9$. Enter its slope.`, 2, "First difference 4 per step of 2."),
  tf(S`If a table with step $0.5$ has second difference $1$, then $a=2$.`, true, "2a(0.5)² = a/2 = 1."),
  num(S`The table for $y=ax^2$ with step $h=2$ has second difference $12$. Enter $a$.`, 1.5, "2a · 4 = 12.", null, 1e-9),
  mc("Painted cubes: an n × n × n cube is dipped in paint. Which count is quadratic in n?", "cubes with exactly one painted face", ["cubes with three painted faces", "cubes with no paint", "total number of cubes"], "One face: 6(n − 2)²; three faces: always 8; none: (n − 2)³.", planeDoc({ view: { xmin: 1, xmax: 7, ymin: -5, ymax: 160 }, points: pts((n) => 6 * (n - 2) ** 2, [2, 3, 4, 5, 6]), step: { x: 1, y: 20 } })),
  num(S`Profit data: $x=1,2,3,4$ (thousand units) give $P=5,\,12,\,15,\,14$ (thousand dollars). Enter $a$.`, -2, "First 7, 3, −1; second −4: a = −2."),
  mc("For the profit data P = 5, 12, 15, 14 at x = 1, 2, 3, 4, where is the profit greatest, by symmetry?", "x = 3.25", ["x = 3", "x = 4", "x = 2.5"], "P = −2x² + 13x − 6; vertex x = 13/4.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -2, ymax: 18 }, curves: [{ f: (x) => -2 * x * x + 13 * x - 6, a: 0.5, b: 6, color: "violet" }], points: pts((x) => -2 * x * x + 13 * x - 6, [1, 2, 3, 4]), step: { x: 1, y: 2 } })),
];
