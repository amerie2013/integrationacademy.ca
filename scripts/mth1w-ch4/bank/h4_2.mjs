// 4.2 Linear vs Non-Linear Relations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.2 Linear vs Non-Linear Relations";
export const Q = [
  num(String.raw`A table is linear: $x$: $-3, 1, 6$; $y$: $11, \square, -16$. Find the missing value.`, -1, String.raw`Rate $\frac{-16-11}{6-(-3)}=\frac{-27}{9}=-3$; from $x=-3$ to $1$: $11-3(4)=-1$.`),
  num(String.raw`A linear table: $x$: $2, 5, 11$; $y$: $7, 16, \square$. Find the missing value.`, 34, "Rate 9/3 = 3; from x = 5 to 11: 16 + 18 = 34."),
  num(String.raw`For $y=ax^2+bx+c$, the second differences (x-steps of 1) equal $2a$. If the second differences of a table are $-6$, what is $a$?`, -3, "2a = −6."),
  num(String.raw`A table has $y=5, 8, 15, 26, 41$ for $x=0..4$. Predict $y$ at $x=5$.`, 60, "First 3, 7, 11, 15 (second 4); next first difference 19: 41 + 19."),
  ms(String.raw`Which relations have a constant rate of change? Select all.`, [String.raw`$3x-4y=12$`, String.raw`$y=(x+1)^2-x^2$`, String.raw`$y=\frac{x+6}{3}$`, String.raw`$y=x(x-2)$`, String.raw`$y=\frac{3}{x}$`], [0, 1, 2], String.raw`$(x+1)^2-x^2=2x+1$ is linear; $x(x-2)$ is quadratic; $\frac3x$ is inverse.`),
  num(String.raw`A car's value falls 15% each year from 24 000 dollars. What is its value after 3 years (nearest dollar)?`, 14739, "24000 × 0.85³ = 14739.0.", null, 1),
  mc(String.raw`Linear model A: $V=24000-3000t$. Exponential model B: $V=24000(0.85)^t$. Which is true at $t=8$?`, "A gives 0; B is still about 6540", ["both give 0", "A gives more than B", "they are equal"], "24000 − 24000 = 0; 24000 × 0.85⁸ ≈ 6540."),
  num(String.raw`$y$ varies inversely as $x$. When $x$ is tripled, $y$ is multiplied by what number? (Give a decimal to 3 places.)`, 1 / 3, "xy constant: y becomes y/3.", null, 0.001),
  tf(String.raw`If a relation's first differences are $4, 4, 4$ for x-values $0, 1, 3, 4$, the relation is linear.`, false, "The x-steps are not equal; Δy/Δx is 4, 2, 4 — not constant."),
  num(String.raw`It takes 6 workers 10 days to build a shed. Assuming inverse variation, how many days for 15 workers?`, 4, "6 × 10 = 60 worker-days; 60 ÷ 15."),
  ms(String.raw`Which tables could be quadratic? Select all.`, ["0, 1, 4, 9, 16", "1, 2, 4, 8, 16", "10, 7, 2, −5, −14", "3, 3, 3, 3, 3", "0, 3, 12, 27, 48"], [0, 2, 4], "Second differences: 2; −2; 6 (constant). 1, 2, 4… is exponential; 3, 3, … is linear."),
  num(String.raw`A savings account grows from 2000 to 2420 dollars in 2 years with the same percent each year. What is the yearly growth factor?`, 1.1, "2000r² = 2420 → r² = 1.21 → r = 1.1.", null, 0.001),
  mc(`Which description fits the graph?`, "exponential growth", ["linear growth", "quadratic (parabola)", "inverse variation"], "The rise gets steeper every step, starting from a positive y-intercept with no turning point.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 34 }, curves: [{ f: (x) => 2 * 2 ** x }], points: [0, 1, 2, 3, 4].map((x) => ({ x, y: 2 * 2 ** x })), step: { x: 1, y: 4 } })),
  num(String.raw`For $y=-x^2+6x$, find the greatest value of $y$ for whole-number $x$.`, 9, "x = 3: −9 + 18 = 9 (the parabola's vertex)."),
  num(String.raw`A rectangle has area 48 cm². If its length is 6.4 cm, what is its width (cm)?`, 7.5, "lw = 48.", null, 0.001),
  tf(String.raw`The relation $y=3$ has constant second differences.`, true, "First and second differences are all 0 — but it is also linear (a horizontal line)."),
  num(String.raw`A pattern has $3, 10, 21, 36$ dots in Figures 1–4 and is quadratic. How many dots in Figure 6?`, 78, "First 7, 11, 15; second 4; next first differences 19, 23: 36 + 19 + 23."),
  mc(String.raw`Which relation's graph passes through $(0,5)$ and gets closer to 0 without reaching it as x increases?`, String.raw`$y=5(0.5)^x$`, [String.raw`$y=5-0.5x$`, String.raw`$y=5-x^2$`, String.raw`$y=\frac5x$`], "Exponential decay."),
  num(String.raw`A linear relation has rate of change $-2.5$ and passes through $(4, 3)$. What is y when x = 10?`, -12, "3 − 2.5(6)."),
  num(String.raw`Light intensity varies inversely as the square of the distance: $I\cdot d^2=k$. If $I=36$ at $d=2$, find $I$ at $d=6$.`, 4, "k = 144; 144 ÷ 36."),
];
