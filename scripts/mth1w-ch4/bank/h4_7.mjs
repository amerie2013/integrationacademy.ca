// 4.7 Finding the Equation of a Line — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.7 Finding the Equation of a Line";
export const Q = [
  mx(String.raw`Write the line through $(-4,1)$ and $(6,-4)$.`, "-0.5*x-1", "m = −5/10 = −1/2; 1 = 2 + b → b = −1."),
  num(String.raw`Points $(2,5)$, $(6,13)$ and $(k,21)$ are collinear. Find k.`, 10, "Slope 2: 21 = 2k + 1."),
  num(String.raw`Find the area of the triangle formed by the axes and the line through $(2,6)$ and $(4,2)$.`, 25, "y = −2x + 10: intercepts 5 and 10: ½ × 5 × 10."),
  mx(String.raw`A line has the same slope as the line through $(1,1)$ and $(4,7)$ and passes through $(-2,3)$. Write it.`, "2*x+7", "m = 2; 3 = −4 + b."),
  num(`A gym charged a member 180 dollars after 4 months and 255 after 7 months. How much will 12 months cost?`, 380, "m = 25; b = 80; 25·12 + 80."),
  num(`A spring is 14 cm with 200 g and 17.5 cm with 450 g hanging. What is its length with no mass (cm)?`, 11.2, "m = 3.5/250 = 0.014; 14 − 2.8.", null, 0.001),
  tf(String.raw`The points $(-3,-7)$, $(0,-1)$ and $(4,8)$ lie on one line.`, false, "Slopes 2 and 9/4 differ."),
  num(String.raw`The line through $(a, 3)$ and $(2, 9)$ has slope $-3$. Find a.`, 4, "(9 − 3)/(2 − a) = −3 → 2 − a = −2."),
  num(`Read the graph and find the x-intercept of the line.`, 6, "Through (0, 4) and (3, 2): slope −2/3; 0 = −2x/3 + 4 → x = 6.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 6 }, lines: [{ m: -2 / 3, b: 4 }], points: [{ x: 0, y: 4, label: "(0, 4)" }, { x: 3, y: 2, label: "(3, 2)" }], step: { x: 1, y: 1 } })),
  num(`Temperatures: 20 °C at 1 km altitude, 7 °C at 3 km (falling steadily). At what altitude is it 0 °C (km)?`, 4.0769, "m = −6.5; b = 26.5; 26.5 ÷ 6.5 ≈ 4.08.", null, 0.006),
  ms(`A line passes through (1, 4) and has a y-intercept of 1. Which are true? Select all.`, ["its slope is 3", "it passes through (2, 7)", "it is a direct variation", "its x-intercept is −1/3"], [0, 1, 3], "y = 3x + 1."),
  mx(String.raw`Write the line through $(-1,-1)$ that is parallel to the line through $(2,3)$ and $(6,1)$.`, "-0.5*x-1.5", "m = −1/2; −1 = 0.5 + b."),
  num(`A plumber's bills: 3 h cost 255 dollars, 5 h cost 385 dollars. Another plumber charges 80 dollars per hour, no fee. For how many hours do they cost the same?`, 4, "First: 65h + 60; 65h + 60 = 80h → h = 4."),
  num(String.raw`A table: $(2,-1)$, $(5,8)$, $(9,20)$, $(x,35)$. Find x.`, 14, "m = 3, b = −7: 3x − 7 = 35."),
  tf(String.raw`Two different lines can both pass through $(1,2)$ and $(4,8)$.`, false, "Two points determine exactly one line."),
  num(String.raw`What is the y-intercept of the line through $(-6,0)$ and $(0,b)$ if its slope is $\frac23$?`, 4, "b = 0 + (2/3)(6)."),
  mc(`A car's fuel: 52 L after 120 km, 34 L after 420 km. What does the slope mean?`, "it uses 0.06 L per km", ["it uses 18 L per km", "it started with 0.06 L", "it uses 6 L per km"], "−18 ÷ 300 = −0.06."),
  num(`A car has 52 L of fuel after 120 km and 34 L after 420 km. How much fuel did it start with (L)?`, 59.2, "52 = −0.06(120) + b.", null, 0.001),
  num(String.raw`Points $A(0,0)$, $B(4,2)$, $C(10,5)$: what is the slope of the line through A and C?`, 0.5, "5/10.", null, 0.001),
  mx(String.raw`Write the line through the midpoint of $(2,4)$ and $(6,10)$ with slope $-1$.`, "-x+11", "Midpoint (4, 7): 7 = −4 + b."),
];
