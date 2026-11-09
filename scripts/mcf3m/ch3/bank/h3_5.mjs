// 3.5 Quadratic Models from Data — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const sc = (data, view, curves = [], step) => planeDoc({ view, points: data.map(([x, y]) => ({ x, y, label: "", color: "blue" })), curves, ...(step ? { step } : {}) });

export const TOPIC = "3.5 Quadratic Models from Data";
export const Q = [
  num(S`A bridge cable hangs between towers $60$ m apart, $2$ m above the road at the middle and $47$ m high at the towers. Enter $a$ in $y=a(x-30)^2+2$.`, 0.05, "47 = 900a + 2.", planeDoc({ view: { xmin: -2, xmax: 62, ymin: 0, ymax: 50 }, curves: [{ f: (x) => 0.05 * (x - 30) ** 2 + 2, a: 0, b: 60, color: "violet" }], points: [{ x: 30, y: 2, label: "(30, 2)", color: "amber" }, { x: 0, y: 47, label: "(0, 47)" }], step: { x: 10, y: 5 } }), 1e-9),
  num(S`For the cable $y=0.05(x-30)^2+2$, enter its height $10$ m from a tower.`, 22, "0.05(400) + 2."),
  num(S`Data: $(0,1)$, $(1,9)$, $(2,13)$, $(3,13)$, $(4,9)$, $(5,1)$. A vertex model uses vertex $(2.5,\,14)$ and point $(0,\,1)$. Enter $a$ (two decimals).`, -2.08, "1 = 6.25a + 14.", null, 0.01),
  num(S`Using $y=-2.08(x-2.5)^2+14$, enter the residual at $(1,\,9)$ (two decimals).`, -0.32, "Predicted −2.08(2.25) + 14 = 9.32; 9 − 9.32.", null, 0.01),
  num(S`A rocket model $h=-4.9t^2+44.1t$. Enter the landing time (s).`, 9, "−4.9t(t − 9)."),
  num(S`For $h=-4.9t^2+44.1t$, enter the maximum height (m, one decimal).`, 99.2, "Vertex t = 4.5: −99.225 + 198.45.", null, 0.06),
  mc("The scatter plot and two models are shown (violet and green). Which fits the data better?", "violet", ["green", "both equally", "neither"], "The violet curve passes close to every point.", sc([[0, 0.3], [1, 7.2], [2, 11.8], [3, 13.9], [4, 12.1], [5, 7.3], [6, 0.2]], { xmin: -1, xmax: 7, ymin: -1, ymax: 16 }, [{ f: (x) => -1.55 * x * (x - 6), color: "violet" }, { f: (x) => -0.9 * x * (x - 6), color: "green" }], { x: 1, y: 2 })),
  mc("The scatter plot shows a car's fuel use vs speed. The data dip and rise. Which model shape fits?", "a parabola opening up", ["a parabola opening down", "a horizontal line", "a decreasing line"], "There is a minimum (best speed).", sc([[40, 8.1], [60, 6.6], [80, 6.1], [100, 6.6], [120, 8.0]], { xmin: 30, xmax: 130, ymin: 4, ymax: 10 }, [{ f: (v) => 0.0005 * (v - 80) ** 2 + 6.1, color: "violet" }], { x: 10, y: 1 })),
  num(S`For the fuel model $F=0.0005(v-80)^2+6.1$, predict the use at $v=110$ km/h (two decimals).`, 6.55, "0.0005(900) + 6.1.", null, 0.01),
  ms("Select every statement that is true about extrapolation.", ["it predicts outside the data range", "it is always accurate for quadratic models", "a ball model can give negative heights when extrapolated", "it should be done with caution"], [0, 2, 3], "Models may break down outside the data."),
  num(S`Data have zeros $1$ and $11$. Point $(4,\,42)$ gives $a$; enter the predicted value at $x=6$.`, 50, "42 = a(3)(−7) ⇒ a = −2; −2(5)(−5) = 50."),
  num(S`Two points give $a=-1.9$ and $a=-2.1$ for $y=a(x-1)(x-11)$. Enter the average $a$.`, -2, "(−1.9 − 2.1)/2.", null, 1e-9),
  tf(S`For data with zeros $r$ and $s$, the model's vertex is at $x=\frac{r+s}2$ no matter which point is used for $a$.`, true, "a changes the height, not the axis."),
  num(S`An arch is modelled by $h=-0.08x(x-25)$. Enter the maximum height (m, two decimals).`, 12.5, "x = 12.5: −0.08(12.5)(−12.5).", null, 0.01),
  num(S`Stopping distances (m) at $v=20,40,60$ km/h are $6,\,20,\,42$. Assuming $d=av^2+bv$, enter $a$.`, 0.01, "First differences 14, 22; second difference 8 = 2a(20)² = 800a.", null, 1e-6),
  num(S`For the stopping data ($d=0.01v^2+0.1v$), predict $d$ at $80$ km/h.`, 72, "64 + 8."),
  mc(S`A model built from $t=0$ to $t=4$ s predicts a ball's height at $t=10$ s as $-300$ m. What should you conclude?`, "the model is not valid at t = 10", ["the ball went underground", "the data are wrong", "the model is linear"], "Extrapolation beyond landing."),
  num(S`A projectile passes $(1,\,25)$ and $(5,\,25)$ and its maximum is $45$. Enter $a$ in $y=a(x-3)^2+45$.`, -5, "25 = 4a + 45."),
  num(S`For $y=-5(x-3)^2+45$, enter the larger zero.`, 6, "(x − 3)² = 9."),
  mc("The data shown are modelled by y = a(x − 2)(x − 8). Which value of a is most reasonable?", S`$a=-1$`, [S`$a=1$`, S`$a=-3$`, S`$a=-0.2$`], "Vertex at 5 should be near 9: a(3)(−3) = 9 ⇒ a = −1.", sc([[2, 0.2], [3, 5.1], [4, 7.9], [5, 9.1], [6, 8.0], [7, 4.8], [8, 0.1]], { xmin: 0, xmax: 10, ymin: -1, ymax: 11 }, [], { x: 1, y: 1 })),
];
