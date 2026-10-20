// 3.7 Families of Quadratic Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

export const TOPIC = "3.7 Families of Quadratic Functions";
export const Q = [
  num("A tunnel arch is 16 m wide; 3 m from one side it is 6 m high. A truck 4 m wide drives down the middle. What is the arch's height above the truck's edges (2 decimals)?", (6 / 39) * 6 * 10, "y = ax(x − 16): a(3)(−13) = 6 → a = −6/39; y(6) = (6/39)(6)(10).", planeDoc({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 11 }, curves: [{ f: (x) => (-6 / 39) * x * (x - 16), a: 0, b: 16, color: "violet" }], segs: [{ pts: [[6, 0], [6, 5.5], [10, 5.5], [10, 0]], color: "blue" }], points: [P(3, 6)], step: { x: 1, y: 1 } }), 0.01),
  num(String.raw`A parabola has zeros $2\pm\sqrt5$ and y-intercept 3. What is its maximum value?`, 15, "a[(x − 2)² − 5]: −a = 3 → a = −3; vertex value −3(−5)."),
  num("A parabola has zeros 0 and 8 and its vertex lies on y = x + 2. Find a.", -0.375, "Vertex (4, 6): a(4)(−4) = 6.", null, 0.001),
  num(String.raw`Which member of $y=a(x-1)(x-5)$ has its vertex on the line $y=6$? Give $a$.`, -1.5, "Vertex (3, −4a): −4a = 6.", null, 0.001),
  num(String.raw`A parabola has zeros $-3\pm\sqrt2$ and y-intercept 14. Find its minimum value.`, -4, "a(x² + 6x + 7): 7a = 14 → a = 2; vertex value 2(−2)."),
  num("Both parabolas have zeros 0 and 6. The blue one passes through (3, 9). The red one passes through (3, −4.5). Find a for the red one.", 0.5, "a(3)(−3) = −4.5.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 10 }, curves: [{ f: (x) => -x * (x - 6), color: "blue" }, { f: (x) => 0.5 * x * (x - 6), color: "red" }], points: [P(3, 9), P(3, -4.5)] }), 0.001),
  num("A suspension cable hangs between two 30 m towers 100 m apart; its lowest point is 5 m above the road at the centre. How high is it 20 m from a tower?", 14, "y = a(x − 50)² + 5, 2500a + 5 = 30 → a = 0.01; at x = 20: 9 + 5.", planeDoc({ view: { xmin: -5, xmax: 105, ymin: 0, ymax: 35 }, curves: [{ f: (x) => 0.01 * (x - 50) ** 2 + 5, a: 0, b: 100, color: "violet" }], points: [P(0, 30), P(100, 30), P(50, 5)], step: { x: 10, y: 5 } })),
  mc(String.raw`Which point lies on every member of $y=a(x^2-4x)+3$?`, String.raw`$(4,3)$`, [String.raw`$(4,0)$`, String.raw`$(2,3)$`, String.raw`$(3,4)$`], "At x = 0 and x = 4 the bracket is 0, so y = 3."),
  num(String.raw`$y=a(x-2)^2-4a$ is a family with shared zeros. What is the larger zero?`, 4, "a[(x − 2)² − 4] = a·x(x − 4)."),
  tf(String.raw`The family $y=(x-1)(x-5)+k$ shares its zeros.`, false, "Changing k is a vertical shift — the zeros move; the axis is shared."),
  num("The arch has zeros −6 and 6 and passes through (4, 5). How high is it at the centre?", 9, "a(10)(−2) = 5 → a = −¼; −¼(6)(−6).", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -1, ymax: 10 }, curves: [{ f: (x) => -0.25 * (x + 6) * (x - 6), a: -6, b: 6, color: "violet" }], points: [P(4, 5), P(-6, 0), P(6, 0)] })),
  num(String.raw`A parabola has zeros $1\pm\sqrt3$ and passes through $(3,8)$. Find the y-coordinate of its vertex.`, -24, "a[(x − 1)² − 3]: a(1) = 8; vertex value 8(−3)."),
  num(String.raw`Two members of $y=a(x-2)(x-8)$ are reflections of each other in the x-axis; one has vertex $(5,18)$. Find $a$ for the other.`, 2, "a(3)(−3) = 18 → a = −2; the reflection has a = 2."),
  num("A parabola has zeros 6 units apart, axis x = 1, and passes through (0, −16). Find the y-coordinate of its vertex.", -18, "Zeros −2 and 4: −8a = −16 → a = 2; 2(3)(−3)."),
  mc("The red, blue and green curves are members of y = a(x + 2)(x − 2). Which a belongs to the red curve?", String.raw`$a=-2$`, [String.raw`$a=-\tfrac12$`, String.raw`$a=1$`, String.raw`$a=2$`], "Red opens down and is the narrowest: y-intercept 8.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 9 }, curves: [{ f: (x) => -2 * (x + 2) * (x - 2), color: "red" }, { f: (x) => -0.5 * (x + 2) * (x - 2), color: "blue" }, { f: (x) => 1 * (x + 2) * (x - 2), color: "green" }], points: [P(0, 8)] })),
  num("A parabolic dome is 50 m wide and 20 m tall. How tall is it 10 m from its edge?", 12.8, "a(25)(−25) = 20 → a = −0.032; 0.032(10)(40).", null, 0.001),
  num(String.raw`$y=k(x^2-9)$ passes through $(1,16)$. Find $k$.`, -2, "−8k = 16."),
  num(String.raw`How far apart are the vertices of the members $a=1$ and $a=-1$ of $y=a(x+2)(x-4)$?`, 18, "(1, −9) and (1, 9)."),
  num("The two curves are y = (x − 1)(x − 3) and y = 3(x − 1)(x − 3). How far apart are they vertically at x = 2?", 2, "−1 versus −3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => (x - 1) * (x - 3), color: "blue" }, { f: (x) => 3 * (x - 1) * (x - 3), color: "red" }], points: [P(2, -1), P(2, -3)] })),
  num(String.raw`Find the sum of all $a$ for which the vertex of $y=a(x-1)(x-4)$ is 9 units from the x-axis.`, 0, "Vertex value −2.25a: |2.25a| = 9 → a = ±4."),
];
