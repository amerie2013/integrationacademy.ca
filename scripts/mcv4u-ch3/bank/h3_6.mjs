// 3.6 Optimization Problems — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.6 Optimization Problems";
export const Q = [
  num("An open box is made from a 24 cm by 15 cm sheet by cutting squares of side x from the corners. Its volume is graphed. What is the largest volume (cm³)?", 486, "V′ = 12(x − 3)(x − 10): x = 3 (10 is outside 0 ≤ x ≤ 7.5).", graph((x) => x * (24 - 2 * x) * (15 - 2 * x), { xmin: 0, xmax: 8, ymin: 0, ymax: 550 }, [P(3, 486)], { a: 0, b: 7.5, step: { x: 1, y: 50 } })),
  num("A cylinder is inscribed in a cone of radius 6 and height 12. What is its largest volume? (2 decimals)", 201.06, "h = 12 − 2r; V = πr²(12 − 2r): r = 4, V = 64π.", null, 0.01),
  num("A lifeguard runs along the beach at 6 m/s and swims at 2 m/s to a swimmer 40 m offshore and 100 m along the beach. How far before the point opposite the swimmer should she enter the water (m, 2 decimals)?", 14.14, "x/(2√(1600 + x²)) = 1/6 ⇒ 8x² = 1600.", null, 0.01),
  num("A page has 50 cm² of print with 2 cm margins at top and bottom and 1 cm at the sides. What is the smallest page area (cm²)?", 98, "(x + 2)(50/x + 4) = 58 + 4x + 100/x: x = 5."),
  num("Poles 12 m and 28 m tall stand 30 m apart. A wire runs from the top of one to a point on the ground, then to the top of the other. What is the shortest wire (m)?", 50, "Reflect one pole: √(30² + 40²)."),
  num("A company's profit is P(x) = x(200 − 0.5x) − (4000 + 20x) dollars (graph shown). What is the maximum profit?", 12200, "P = 180x − 0.5x² − 4000: x = 180.", graph((x) => (x * (200 - 0.5 * x) - (4000 + 20 * x)) / 1000, { xmin: 0, xmax: 380, ymin: -6, ymax: 14 }, [P(180, 12.2)], { a: 0, b: 360, step: { x: 50, y: 2 } })),
  num(S`Find the shortest distance from $(3,0)$ to the parabola $y=x^2$ (3 decimals).`, 2.236, "D′ ∝ 2x³ + x − 3 = 0 at x = 1: distance √5.", null, 0.001),
  num("What is the largest area of a triangle inscribed in a circle of radius 3? (2 decimals)", 11.69, "Equilateral, side 3√3.", null, 0.01),
  tf("If the only critical number on an open domain has V″ < 0 there, it gives the absolute maximum.", true, "V rises before it and falls after it."),
  num("An open box with a square base holds 12 m³. The base costs 3 dollars per m² and the sides 2 dollars per m². What is the least cost (dollars, 2 decimals)?", 57.15, "C = 3x² + 96/x: x = ∛16.", null, 0.01),
  num("A rectangle has its base on the x-axis and upper corners on y = 8 − x² (graph shown). What is its largest area? (2 decimals)", 17.42, "A = 2x(8 − x²): x = √(8/3).", graph((x) => 8 - x * x, { xmin: -3.2, xmax: 3.2, ymin: -1, ymax: 9 }, [P(Math.sqrt(8 / 3), 16 / 3), P(-Math.sqrt(8 / 3), 16 / 3)], { segs: [{ pts: [[-Math.sqrt(8 / 3), 0], [-Math.sqrt(8 / 3), 16 / 3], [Math.sqrt(8 / 3), 16 / 3], [Math.sqrt(8 / 3), 0]], color: "green" }] }), 0.01),
  num("A stadium sells 30 000 tickets at 50 dollars; each 5 dollar increase loses 2000 sales. What price maximizes revenue (dollars)?", 62.5, "R = (50 + 5n)(30000 − 2000n): n = 2.5.", null, 0.01),
  num("A 20 cm wire is cut: one piece bent into a square, the other into a circle. How much wire (cm, 2 decimals) should go to the square to minimize the total area?", 11.2, "Side s = 20/(4 + π); square uses 4s.", null, 0.05),
  mc("For the same wire, how should it be cut to maximize the total area?", "use all of it for the circle", ["use all of it for the square", "cut it in half", "use 11.2 cm for the square"], "Check the endpoints: the circle alone encloses most."),
  num("A cone has slant height 9 cm. What is its largest volume (cm³, 2 decimals)?", 293.84, "V = (π/3)(81h − h³): h = √27.", null, 0.01),
  num("A truck's running cost is 50 + v²/200 dollars per hour at v km/h on a 400 km trip (total cost graphed). What speed minimizes the cost (km/h)?", 100, "Total 400(50/v + v/200): v² = 10000.", graph((v) => 400 * (50 / v + v / 200), { xmin: 0, xmax: 200, ymin: 0, ymax: 1200 }, [P(100, 400)], { a: 20, b: 200, step: { x: 20, y: 100 } })),
  num(S`For $x\gt0$, at what $x$ is $\frac{x}{x^2+4}$ largest?`, 2, "4 − x² = 0."),
  num("A rectangle with perimeter 36 cm is rotated about one side to form a cylinder. What length (cm) of the other side gives the largest volume?", 12, "V = πx²(18 − x): x = 12."),
  tf("A complete optimization answer gives the requested quantity with units, not just the value of x.", true, "Answer the question asked."),
  num("A 2 m fence stands 1 m from a wall. What is the shortest ladder that reaches the wall over the fence (m, 3 decimals)?", 4.162, "L = (2^(2/3) + 1)^(3/2).", null, 0.005),
];
