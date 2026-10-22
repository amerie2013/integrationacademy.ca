// 10.6 Kinematics with Integration — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const E = [
  mc("Velocity is found from acceleration by:", "integrating", ["differentiating", "multiplying by t", "squaring"], "v = ∫a dt."),
  mc("Displacement is found from velocity by:", "integrating", ["differentiating", "dividing by t", "taking the absolute value"], "s = ∫v dt."),
  mc(S`Total distance travelled from $t_1$ to $t_2$ is:`, S`$\int_{t_1}^{t_2}|v|\,dt$`, [S`$\int_{t_1}^{t_2}v\,dt$`, S`$v(t_2)-v(t_1)$`, S`$\int_{t_1}^{t_2}a\,dt$`], "Count backward motion as positive."),
  num(S`$v(t)=10$ m/s. Find the displacement from $t=0$ to $t=6$.`, 60, "10 × 6."),
  num(S`$v(t)=2t$. Find the displacement from $t=0$ to $t=5$.`, 25, "[t²]₀⁵."),
  num(S`$v(t)=3t^2$. Find the displacement from $t=1$ to $t=2$.`, 7, "[t³]₁²."),
  num(S`$a(t)=2$ and $v(0)=5$. Find $v(4)$.`, 13, "v = 2t + 5."),
  num(S`$v(t)=6t$ and $s(0)=4$. Find $s(1)$.`, 7, "s = 3t² + 4."),
  num(S`$v(t)=4-2t$. When is the particle at rest?`, 2, "4 − 2t = 0."),
  tf("Displacement can be negative.", true, "It is signed."),
  tf("Distance travelled can be negative.", false, "Distance is never negative."),
  tf("If a particle never changes direction, its distance equals the size of its displacement.", true, "No backward motion."),
  fill(S`A particle changes direction when $v=$ ___ and changes sign.`, ["0"], "It momentarily stops."),
  ms("Which give displacement on a v–t graph? Select all.", ["signed area under the graph", "∫v dt", "the gradient of the graph", "∫|v| dt"], [0, 1], "∫|v| is distance; gradient is acceleration."),
  mc("The v–t graph shows a particle with constant velocity 3 m/s for 4 s. The shaded area is:", "12 m", ["7 m", "0.75 m", "3 m"], "3 × 4.", areaDoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 4 }, step: { x: 1, y: 1 }, lines: [{ m: 0, b: 3 }], xlabel: "t", ylabel: "v" }, [{ f: () => 3, a: 0, b: 4 }])),
  mc("The particle in the v–t graph moves backward between t = 2 and t = 4. During that time its velocity is:", "negative", ["positive", "zero", "increasing"], "Below the axis.", areaDoc({ view: { xmin: -0.5, xmax: 5, ymin: -3, ymax: 3 }, step: { x: 1, y: 1 }, curves: [{ f: (t) => (t - 2) * (t - 4) }], xlabel: "t", ylabel: "v" }, [{ f: (t) => (t - 2) * (t - 4), a: 2, b: 4, color: "red" }])),
  num(S`$v(t)=t-1$. Find the displacement from $t=0$ to $t=2$.`, 0, "[½t² − t]₀² = 0."),
  num(S`$v(t)=t-1$. Find the distance from $t=0$ to $t=2$.`, 1, "½ + ½."),
  mc(S`If $s(0)=3$, it means:`, "the particle starts 3 units from the origin", ["it travels 3 units", "its speed is 3", "it stops after 3 seconds"], "Initial position."),
  num(S`$v(t)=e^{t}$. Find the displacement from $t=0$ to $t=1$ (3 d.p.).`, d3(Math.E - 1), "e − 1.", null, 0.001),
];

export const M = [
  num(S`$a(t)=6t$, $v(0)=-12$. When is the particle at rest ($t>0$)?`, 2, "v = 3t² − 12."),
  num(S`$a(t)=6t$, $v(0)=-12$, $s(0)=0$. Find $s(2)$.`, -16, "s = t³ − 12t."),
  num(S`$v(t)=t^2-9$. Find the displacement from $t=0$ to $t=3$.`, -18, "[t³/3 − 9t]₀³."),
  num(S`$v(t)=t^2-9$. Find the distance from $t=0$ to $t=4$ (3 d.p.).`, d3(18 + 10 / 3), "18 + |∫₃⁴| = 18 + 10/3.", null, 0.001),
  num(S`$v(t)=8-2t$. Find the distance from $t=0$ to $t=6$.`, 20, "Split at 4: 16 + 4."),
  num(S`$v(t)=8-2t$. Find the displacement from $t=0$ to $t=6$.`, 12, "16 − 4."),
  num(S`$v(t)=\frac{1}{t+1}$. Find the displacement from $t=0$ to $t=4$ (3 d.p.).`, d3(Math.log(5)), "ln 5.", null, 0.001),
  num(S`$v(t)=4e^{-2t}$. Find the displacement from $t=0$ to $t=1$ (3 d.p.).`, d3(2 - 2 * Math.exp(-2)), "[−2e^(−2t)]₀¹.", null, 0.001),
  num(S`$a(t)=12t-6$, $v(1)=4$. Find $v(2)$.`, 16, "v = 6t² − 6t + 4."),
  num(S`$v(t)=3t^2-2t$ and $s(1)=5$. Find $s(2)$.`, 9, "s = t³ − t² + 5."),
  tf(S`For $v(t)=t^2+1$, distance equals displacement over any interval.`, true, "v > 0 always."),
  tf(S`If $\int_0^5v\,dt=0$, the particle did not move.`, false, "It may have returned to its start."),
  mc("A particle has v(t) = t² − 5t + 6. It changes direction at:", "t = 2 and t = 3", ["t = 5", "t = 6", "t = 1 and t = 6"], "(t − 2)(t − 3)."),
  num(S`For $v(t)=t^2-5t+6$, find the distance from $t=0$ to $t=3$ (3 d.p.).`, d3(14 / 3 + 1 / 6), "∫₀² = 14/3, |∫₂³| = 1/6.", null, 0.001),
  ms("For v(t) = 6 − 3t on [0, 4], which are true? Select all.", ["the particle turns at t = 2", "displacement = 0", "distance = 12", "distance = 0"], [0, 1, 2], "6 forward, 6 back."),
  mc("The v–t graph shows v = 10 − 2t on [0, 7]. The green area minus the red area is:", "the displacement, 21", ["the distance, 29", "the displacement, 29", "the distance, 21"], "25 − 4.", areaDoc({ view: { xmin: -0.5, xmax: 7.5, ymin: -5, ymax: 11 }, step: { x: 1, y: 1 }, curves: [{ f: (t) => 10 - 2 * t }], xlabel: "t", ylabel: "v" }, [{ f: (t) => 10 - 2 * t, a: 0, b: 5, color: "green" }, { f: (t) => 10 - 2 * t, a: 5, b: 7, color: "red" }])),
  mc("The graph shows the position s(t) = t³ − 6t² + 9t. The particle is at rest when:", "t = 1 and t = 3", ["t = 0 and t = 3", "t = 2", "never"], "v = 3t² − 12t + 9 = 0.", planeDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -1, ymax: 6 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, b: 4.5 }], step: { x: 1, y: 1 }, xlabel: "t", ylabel: "s" })),
  num(S`Two particles start together: $v_A=3$, $v_B=2t$. When do they meet again?`, 3, "3t = t²."),
  num(S`A ball is thrown up with $v=15-10t$ m/s. Find its maximum height above the start (3 d.p.).`, 11.25, "v = 0 at 1.5: ∫₀^1.5 = 22.5 − 11.25.", null, 0.001),
  num(S`$v(t)=2t-6$. Find the time $T>3$ at which the displacement from $t=0$ is zero.`, 6, "T² − 6T = 0."),
];
