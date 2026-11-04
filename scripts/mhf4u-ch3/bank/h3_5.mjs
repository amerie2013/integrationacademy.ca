// 3.5 Rational Function Models — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "3.5 Rational Function Models";
export const Q = [
  num(S`A boat goes at 12 km/h in still water. A 35 km trip upstream and back takes 6 h. Find the current in km/h.`, 2, "35·24/(144 − c²) = 6: 840 = 864 − 6c², c² = 4."),
  num(S`A plane flies at 300 km/h in still air. It flies 720 km into a wind and 720 km back in 5 h in total. Find the wind speed in km/h.`, 60, "720·600/(90000 − w²) = 5: w² = 3600."),
  num(S`Worker A takes $x$ h and B takes $x+3$ h. Together they take 2 h. Find $x$.`, 3, "x² − x − 6 = 0, reject x = −2."),
  num(S`Pipe A fills a pool 4 h faster than pipe B. Together they take 3.75 h. How many hours does A take alone?`, 6, "1/x + 1/(x + 4) = 4/15: 2x² − 7x − 30 = 0 gives (2x + 5)(x − 6) = 0."),
  num(S`A 500 L tank has 100 g of salt. Pure water enters at 25 L/min and no water leaves. Find the concentration in g/L after 20 min.`, 0.1, "100/(500 + 500).", null, 0.001),
  num(S`A 100 L tank has 2 g/L salt. Brine with 5 g/L enters at 20 L/min with nothing leaving. When is the concentration 4 g/L, in minutes?`, 10, "(200 + 100t)/(100 + 20t) = 4: 200 + 100t = 400 + 80t."),
  num(S`$C(t)=\dfrac{20t}{t^2+25}$ mg/L. For how many hours is $C\ge1.6$?`, 7.5, "t² − 12.5t + 25 ≤ 0 gives (t − 2.5)(t − 10) ≤ 0, from 2.5 h to 10 h.", null, 0.01),
  num(S`The largest value of $C(t)=\dfrac{20t}{t^2+25}$ occurs at $t=5$. What is it?`, 2, "100/50."),
  num(S`An open box with a square base holds 108 cm³. Its area is $S(x)=x^2+\dfrac{432}x$. Find the side $x$ that minimizes $S$.`, 6, "2x = 432/x² gives x³ = 216."),
  num(S`A closed box with square base holds 1000 cm³. Area is $S(x)=2x^2+\dfrac{4000}x$. Find the minimum area.`, 600, "x = 10: 200 + 400."),
  num(S`Estimate the instantaneous rate of change of $t=\dfrac{240}v$ at $v=60$ (2 decimals).`, -0.07, "−240/3600 ≈ −0.0667.", null, 0.005),
  num(S`For $I=\dfrac{k}{d^2}$, $I=20$ at $d=3$. Find $I$ at $d=6$.`, 5, "Doubling d divides I by 4."),
  num(S`For $I=\dfrac{k}{d^2}$, $I=45$ at $d=2$. Find the distance $d$ where $I=5$.`, 6, "k = 180; d² = 36."),
  mc(S`An average cost is $A(x)=\dfrac{F+vx}x$ with $A(50)=30$ and $A(200)=15$. Find $F$ and $v$.`, S`$F=1000,\ v=10$`, [S`$F=500,\ v=20$`, S`$F=1000,\ v=5$`, S`$F=1500,\ v=10$`], "F + 50v = 1500, F + 200v = 3000."),
  mc("The dashed line is the long-run level of P(t) = (at + 60)/(t + 3). What is a, and when does P reach 100?", S`$a=120$; $t=12$`, [S`$a=120$; $t=4$`, S`$a=60$; $t=12$`, S`$a=100$; $t=3$`], "Long-run 120; (120t + 60)/(t + 3) = 100 gives 20t = 240.", planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 140 }, curves: [{ f: (t) => (120 * t + 60) / (t + 3), a: 0, b: 30, color: "violet" }], lines: [{ m: 0, b: 120, color: "red", dash: true }], step: { x: 5, y: 20 } })),
  mc("The graph shows S(x) = x² + 54/x. Which side length gives the least surface area?", S`$x=3$`, [S`$x=1$`, S`$x=6$`, S`$x=9$`], "2x = 54/x² gives x³ = 27.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 70 }, curves: [{ f: (x) => x * x + 54 / x, a: 0.8, b: 8, color: "violet" }], points: [P(3, 27)], step: { x: 1, y: 10 } })),
  mc("The graph shows the lens relation v = 12u/(u − 12). What does the vertical asymptote mean?", "no image forms when the object is at the focal length", ["the image is at distance 12 always", "the object is 12 cm wide", "the lens has no focal length"], "v → ∞ as u → 12⁺.", planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 60 }, curves: [{ f: (u) => 12 * u / (u - 12), a: 15, b: 60, color: "violet" }], vlines: [{ x: 12, color: "red", dash: true }], lines: [{ m: 0, b: 12, color: "red", dash: true }], step: { x: 10, y: 10 } })),
  mc("The graph compares A(x) = (500 + 5x)/x (violet) with B(x) = (200 + 8x)/x (green). For which x is A cheaper?", S`$x>100$`, [S`$x\lt100$`, S`$x>8$`, "never"], "500 + 5x < 200 + 8x gives x > 100.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 30 }, curves: [{ f: (x) => (500 + 5 * x) / x, a: 25, b: 300, color: "violet" }, { f: (x) => (200 + 8 * x) / x, a: 10, b: 300, color: "green" }], points: [P(100, 10)], step: { x: 50, y: 5 } })),
  tf(S`If $C(t)=\dfrac{at}{b+t}$ with $a,b>0$, the concentration keeps rising but never reaches $a$.`, true, "C = a − ab/(b + t)."),
  num(S`A car uses $E(v)=\dfrac{900}v+\dfrac v4$ litres over a trip. Find the speed $v$ that minimizes $E$.`, 60, "900/v² = 1/4 gives v² = 3600."),
];
