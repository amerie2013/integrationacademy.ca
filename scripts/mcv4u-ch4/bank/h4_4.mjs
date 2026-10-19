// 4.4 Applications of Sinusoidal Functions and Their Derivatives — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = "4.4 Applications of Sinusoidal Functions and Their Derivatives";
export const Q = [
  num("A Ferris wheel of radius 20 m, centre 22 m high, turns once every 90 s; a rider starts at the bottom (graph shown). When does the rider first climb fastest?", 22.5, "h = 22 − 20 cos(2πt/90); h′ is largest at a quarter turn.", graph((t) => 22 - 20 * Math.cos(((2 * PI) / 90) * t), { xmin: 0, xmax: 185, ymin: 0, ymax: 45 }, [P(22.5, 22)], { a: 0, b: 180, step: { x: 15, y: 5 } }), 0.0001),
  num("A lighthouse 3 km from a straight shore turns twice per minute (4π rad/min). How fast does its beam move along the shore when θ = π/3 from the perpendicular (km/min, 2 decimals)?", 150.8, "x = 3 tan θ; dx/dt = 3 sec²θ · 4π = 3 · 4 · 4π.", null, 0.05),
  num("An observer is 500 m from a balloon's launch point. The balloon rises at 4 m/s. How fast is the angle of elevation changing when it is 500 m up (rad/s)?", 0.004, "tan θ = h/500; sec²θ = 2.", null, 0.00001),
  num("Two sides of a triangle add to 20 cm and the angle between them can vary. What is the largest possible area?", 50, "½ab sin θ with a = b = 10 and θ = π/2."),
  mc(S`For $s=A\sin(\omega t)$, the velocity graph is the position graph shifted:`, "a quarter period to the left", ["half a period", "a full period", "not at all"], "cos(ωt) = sin(ωt + π/2)."),
  num(S`For $s(t)=5\cos(2t)$, find the first time $t\gt0$ at which the speed is 5 (4 decimals).`, 0.2618, "|10 sin 2t| = 5: t = π/12.", null, 0.0005),
  num(S`The depth is $d(t)=2\cos\left(\frac\pi6t\right)+6$ m. For how many hours of the first 12 is the water falling faster than 0.5 m/h? (2 decimals)`, 4.1, "Falling when (π/3) sin(πt/6) > 0.5 on (0, 6).", null, 0.02),
  tf("In simple harmonic motion, the speed and the size of the acceleration are never largest at the same moment.", true, "Speed peaks at the centre, acceleration at the ends."),
  num("The area of an isosceles triangle inscribed in a circle of radius 5 is A(θ) = 25 sin θ (1 + cos θ) (graph shown). Find the largest area (2 decimals).", 32.48, "A′ = 0 at θ = π/3: the triangle is equilateral.", graph((t) => 25 * Math.sin(t) * (1 + Math.cos(t)), { xmin: 0, xmax: 3.3, ymin: 0, ymax: 36 }, [P(PI / 3, 32.48)], { a: 0, b: PI, step: { x: 0.5, y: 5 } }), 0.01),
  num(S`Daylight is $D(t)=12.2+3.4\sin\left(\frac{2\pi}{365}(t-80)\right)$ hours. What is the fastest change in minutes per day (3 decimals)?`, 3.512, "3.4 · 2π/365 · 60.", null, 0.002),
  num(S`Two masses move with $s_1=2\sin t$ and $s_2=2\cos t$. What is the greatest distance between them (4 decimals)?`, 2.8284, "|2 sin t − 2 cos t| ≤ 2√2.", null, 0.0005),
  mc("Ignoring air resistance, which launch angle gives the longest range on level ground?", "45°", ["30°", "60°", "90°"], "sin 2θ is largest at 2θ = 90°."),
  num("A rocket rises vertically at 50 m/s, watched from 1 km away. How fast is the angle of elevation changing when it is 1 km up (rad/s)?", 0.025, "tan θ = h/1000, sec²θ = 2.", null, 0.0001),
  num("The graph of s(t) = 4 cos(πt) is shown. At how many times in [0, 2] is the acceleration zero?", 2, "a = −4π² cos(πt) = 0 at t = 0.5 and 1.5.", graph((t) => 4 * Math.cos(PI * t), { xmin: 0, xmax: 2.1, ymin: -5, ymax: 5 }, [P(0.5, 0), P(1.5, 0)], { a: 0, b: 2, step: { x: 0.25, y: 1 } })),
  num("A Ferris wheel of radius 10 m turns once every 40 s. What is a rider's greatest vertical acceleration (m/s², 4 decimals)?", 0.2467, "Aω² = 10(π/20)².", null, 0.0005),
  tf("If the period of a sinusoidal motion doubles and the amplitude is unchanged, the maximum speed halves.", true, "ω halves."),
  num(S`A current is $I=10\sin(120\pi t)$. After $t=0$, when is the size of its rate of change next greatest (s, 4 decimals)?`, 0.0083, "I′ ∝ cos(120πt): next |cos| = 1 at t = 1/120.", null, 0.0001),
  num("Two 3 m wide corridors meet at a right angle. What is the longest rod that can be carried horizontally around the corner (m, 3 decimals)?", 8.485, "L(θ) = 3/sin θ + 3/cos θ is least at θ = π/4.", null, 0.002),
  num("A point on a wheel has height h(t) = 0.4 sin(6πt) + 0.5 m (graph shown). What is its greatest vertical speed (m/s, 3 decimals)?", 7.54, "0.4 · 6π.", graph((t) => 0.4 * Math.sin(6 * PI * t) + 0.5, { xmin: 0, xmax: 0.7, ymin: 0, ymax: 1 }, [P(0, 0.5)], { a: 0, b: 0.67, step: { x: 0.1, y: 0.1 } }), 0.002),
  num(S`What is the greatest speed of $s(t)=3\sin(2t)-4\cos(2t)$?`, 10, "Amplitude 5, ω = 2."),
];
