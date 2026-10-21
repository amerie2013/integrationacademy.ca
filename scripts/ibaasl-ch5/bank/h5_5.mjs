// 5.5 Optimisation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "5.5 Optimisation";
export const Q = [
  num("An open box is made from a 16 cm by 10 cm sheet by cutting squares of side x from the corners. Find x for maximum volume.", 2, "V = x(16 − 2x)(10 − 2x) = 4x³ − 52x² + 160x; V′ = 12x² − 104x + 160 = 4(3x − 20)(x − 2).", planeDoc({ view: { xmin: -0.2, xmax: 5.2, ymin: -10, ymax: 160 }, curves: [{ f: (x) => x * (16 - 2 * x) * (10 - 2 * x), a: 0, b: 5 }], step: { x: 0.5, y: 20 }, xlabel: "x", ylabel: "V" })),
  num("For the same 16 cm by 10 cm box, find the maximum volume (cm³).", 144, "2 × 12 × 6."),
  num(S`A closed cylinder has volume 1000 cm³. Find the minimum surface area (3 s.f.).`, 2 * Math.PI * Math.cbrt(500 / Math.PI) ** 2 + 2000 / Math.cbrt(500 / Math.PI), "r³ = 500/π; A = 2πr² + 2000/r.", null, 0.5),
  num("A rectangle is drawn under y = 12 − x² with its base on the x-axis, symmetric about the y-axis (shown). Find the maximum area.", 32, "A = 2x(12 − x²); x = 2.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 13 }, curves: [{ f: (x) => 12 - x * x }], segs: [{ pts: [[-2, 0], [-2, 8], [2, 8], [2, 0]], color: "red" }], points: [P(2, 8)] })),
  num(S`Find the point on $y=x^2$ closest to $(0,3)$; give the positive x-coordinate (3 s.f.).`, Math.sqrt(2.5), "D = x² + (x² − 3)²; D′ = 4x³ − 10x = 0.", null, 0.005),
  num("A window has a rectangle of width 2r with a semicircle on top; the perimeter is 12 m. Find r for maximum area (3 s.f.).", 12 / (4 + Math.PI), "A = 12r − 2r² − πr²/2; A′ = 12 − 4r − πr = 0.", null, 0.005),
  num(S`For $f(x)=2x^3-15x^2+36x$ on $0\le x\le5$, find the global maximum.`, 55, "Stationary f(2) = 28, f(3) = 27; ends f(0) = 0, f(5) = 250 − 375 + 180 = 55."),
  num(S`For the same $f$ on $0\le x\le5$, find the global minimum.`, 0, "f(0) = 0 is less than f(3) = 27."),
  num("A field is to be fenced as a rectangle and divided into 3 equal parts by 2 fences parallel to one side, using 800 m in total. Find the maximum total area (m²).", 20000, "4x + 2y = 800 → A = x(400 − 2x); x = 100, y = 200."),
  mc(S`A function has $f'(x)=x^2(x-3)$ on $0<x<5$. Its global minimum on this interval is at:`, S`$x=3$`, [S`$x=0$`, S`$x=5$`, "there is none"], "f decreases until 3, then increases; x = 0 is a horizontal inflection."),
  num("A cone-shaped cup has slant height 6 cm. With radius r and height h (r² + h² = 36), V = (π/3)(36 − h²)h. Find h for maximum volume (3 s.f.).", Math.sqrt(12), "V′ = (π/3)(36 − 3h²) = 0 → h² = 12.", null, 0.005),
  num(S`Find the maximum of $xy$ given $x+3y=24$, $x,y>0$.`, 48, "x(24 − x)/3 is greatest at x = 12."),
  num("A cylinder fits inside a sphere of radius 3 cm (shown in section); with half-height h, V = 2πh(9 − h²). Find h for maximum volume (3 s.f.).", Math.sqrt(3), "V′ = 2π(9 − 3h²) = 0.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3 }, { f: (x) => -Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3 }], segs: [{ pts: [[-Math.sqrt(6), -Math.sqrt(3)], [Math.sqrt(6), -Math.sqrt(3)], [Math.sqrt(6), Math.sqrt(3)], [-Math.sqrt(6), Math.sqrt(3)], [-Math.sqrt(6), -Math.sqrt(3)]], color: "red" }] }), 0.005),
  tf("For a fixed perimeter, the rectangle of largest area is a square.", true, "A = x(p/2 − x) is greatest at x = p/4."),
  num(S`Profit is $P(x)=-0.02x^3+3x^2-90x$ for $0\le x\le120$. Find $x$ for maximum profit (1 d.p.).`, 50 + Math.sqrt(1000), "P′ = −0.06x² + 6x − 90 = 0 → x² − 100x + 1500 = 0 → x = 50 ± √1000. P″ < 0 at 81.6 (18.4 is a minimum); P(81.6) ≈ 1765 beats P(0) = 0 and P(120) = −2160.", null, 0.1),
  ms(S`$f(x)=x+\frac{16}{x}$ for $x>0$. Which are true? Select all.`, ["f has a minimum at x = 4", "the minimum value is 8", "f has a maximum at x = 4", "f decreases for x > 4"], [0, 1], "f″ = 32/x³ > 0."),
  num("The cost per km of running a ship at v km/h is C = 0.5v + 800/v. Find the speed that minimises C.", 40, "C′ = 0.5 − 800/v² = 0 → v² = 1600; C″ = 1600/v³ > 0."),
  num("The graph of the surface area of a 64 cm³ closed box with a square base against the base side x is shown. Find the minimum surface area.", 96, "A = 2x² + 256/x; x = 4: 32 + 64.", planeDoc({ view: { xmin: 0, xmax: 9, ymin: -5, ymax: 220 }, curves: [{ f: (x) => 2 * x * x + 256 / x, a: 1.3, b: 9 }], points: [P(4, 96)], step: { x: 1, y: 20 } })),
  num(S`A rectangle in the first quadrant has one corner at the origin and the opposite corner on $y=9-x^2$. Find the maximum area (3 s.f.).`, 6 * Math.sqrt(3), "A = x(9 − x²); A′ = 9 − 3x² = 0 → x = √3; A = √3 × 6.", null, 0.01),
  num(S`Find the x-coordinate of the point on $y=x^2$ closest to $(3,0)$.`, 1, "D = (x − 3)² + x⁴; D′ = 4x³ + 2x − 6 = 2(x − 1)(2x² + 2x + 3) = 0."),
];
