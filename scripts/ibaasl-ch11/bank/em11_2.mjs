// 11.2 Right-Angled Triangle Trigonometry — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, rightT, elevation } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, d2 = (v) => Math.round(v * 100) / 100;

export const E = [
  mc(S`$\cos\theta$ equals:`, "adjacent ÷ hypotenuse", ["opposite ÷ hypotenuse", "opposite ÷ adjacent", "hypotenuse ÷ adjacent"], "CAH."),
  mc("The hypotenuse is:", "the side opposite the right angle", ["the side next to θ", "the shortest side", "the side opposite θ"], "Always the longest side."),
  num(S`Find the side opposite a 30° angle when the hypotenuse is 16.`, 8, "16 sin 30°."),
  num(S`Find the side adjacent to a 60° angle when the hypotenuse is 18.`, 9, "18 cos 60°."),
  num(S`Find the side opposite a 45° angle when the adjacent side is 6.`, 6, "6 tan 45°."),
  num(S`Find the side opposite a 25° angle when the hypotenuse is 20 (2 d.p.).`, d2(20 * Math.sin(r(25))), "20 sin 25°.", null, 0.01),
  num(S`Find θ if $\sin\theta=0.5$ (acute).`, 30, "Exact value."),
  num(S`Find θ if $\tan\theta=1$ (acute).`, 45, "Exact value."),
  num(S`Find θ (2 d.p.) if opp = 4 and adj = 9.`, d2(g(Math.atan(4 / 9))), "tan⁻¹(4/9).", null, 0.01),
  mc(S`The exact value of $\sin60^\circ$ is:`, S`$\frac{\sqrt3}{2}$`, [S`$\frac12$`, S`$\frac{\sqrt2}{2}$`, S`$\sqrt3$`], "30–60–90 triangle."),
  mc(S`The exact value of $\cos45^\circ$ is:`, S`$\frac{\sqrt2}{2}$`, [S`$\frac12$`, S`$\frac{\sqrt3}{2}$`, "1"], "45–45–90 triangle."),
  tf("An angle of depression is measured downward from the horizontal.", true, "From the horizontal."),
  tf(S`$\sin\theta$ can be greater than 1 in a right triangle.`, false, "opp < hyp."),
  fill("SOH CAH TOA: T stands for ___.", ["tan", "tangent", "Tan", "Tangent"], "tan = opp/adj."),
  ms("Which equal 1/2? Select all.", [S`$\sin30^\circ$`, S`$\cos60^\circ$`, S`$\tan45^\circ$`, S`$\cos30^\circ$`], [0, 1], "tan 45° = 1."),
  mc("In the triangle shown, which ratio gives x directly?", "sin 34° = x/15", ["cos 34° = x/15", "tan 34° = x/15", "sin 34° = 15/x"], "x is opposite, 15 the hypotenuse.", figDoc({ items: rightT(12.44, 8.39, { lb: "x", lc: "15", angle: "34°" }) })),
  num(S`Using the triangle shown (hypotenuse 15, angle 34°), find x (2 d.p.).`, d2(15 * Math.sin(r(34))), "15 sin 34°.", null, 0.01),
  mc("The angle of elevation in the diagram is measured:", "from the horizontal ground up to the line of sight", ["from the vertical", "from the line of sight down", "at the top of the tower"], "Up from horizontal.", figDoc({ items: elevation(30, 18, { ld: "30 m", angle: "θ" }) })),
  num(S`From 20 m away, the elevation of a pole top is 45°. Find the pole's height.`, 20, "20 tan 45°."),
  num(S`A ramp is 5 m long and rises 2.5 m. Find its angle with the ground.`, 30, "sin θ = ½."),
];

export const M = [
  num(S`The side opposite a 40° angle is 9. Find the hypotenuse (2 d.p.).`, d2(9 / Math.sin(r(40))), "9/sin 40°.", null, 0.01),
  num(S`The side adjacent to a 55° angle is 7. Find the opposite side (2 d.p.).`, d2(7 * Math.tan(r(55))), "7 tan 55°.", null, 0.01),
  num(S`The hypotenuse is 25 and the opposite side is 7. Find the angle (2 d.p.).`, d2(g(Math.asin(7 / 25))), "sin⁻¹(7/25).", null, 0.01),
  num(S`Legs 9 and 40. Find the larger acute angle (2 d.p.).`, d2(g(Math.atan(40 / 9))), "tan⁻¹(40/9).", null, 0.01),
  num(S`A 12 m ladder makes 72° with the ground. How high up the wall does it reach (2 d.p.)?`, d2(12 * Math.sin(r(72))), "12 sin 72°.", null, 0.01),
  num(S`From a 42 m tower, the angle of depression of a car is 16°. How far is the car from the base (1 d.p.)?`, Math.round((42 / Math.tan(r(16))) * 10) / 10, "42/tan 16°.", null, 0.1),
  num(S`A person 1.8 m tall (to the eyes) is 22 m from a wall and sees its top at 33°. Find the wall's height (2 d.p.).`, d2(22 * Math.tan(r(33)) + 1.8), "22 tan 33° + 1.8.", null, 0.01),
  num(S`Find the exact value of $\tan60^\circ\times\cos30^\circ$ as a decimal.`, 1.5, "√3 × √3/2.", null, 0.001),
  num(S`Find the exact value of $2\sin30^\circ+\tan45^\circ$.`, 2, "1 + 1."),
  mc(S`In a right triangle, $\tan\theta=\frac34$. Then $\sin\theta$ is:`, S`$\frac35$`, [S`$\frac45$`, S`$\frac34$`, S`$\frac43$`], "3-4-5 triangle."),
  mc(S`If $\cos\theta=\frac{5}{13}$ (acute), then $\tan\theta$ is:`, S`$\frac{12}{5}$`, [S`$\frac{5}{12}$`, S`$\frac{12}{13}$`, S`$\frac{13}{5}$`], "5-12-13 triangle."),
  tf(S`For any acute angle, $\sin\theta=\cos(90^\circ-\theta)$.`, true, "Opposite and adjacent swap."),
  ms("A kite string 60 m long makes 48° with the ground. Which are correct? Select all.", [S`height $=60\sin48^\circ$`, S`horizontal distance $=60\cos48^\circ$`, S`height $\approx44.6$ m`, S`height $=60\tan48^\circ$`], [0, 1, 2], "tan needs the adjacent side."),
  mc("The diagram shows a triangle with legs 8 and 15. Angle θ (opposite 8) is about:", "28.07°", ["61.93°", "32.23°", "57.77°"], "tan⁻¹(8/15).", figDoc({ items: rightT(15, 8, { la: "15", lb: "8", angle: "θ" }) })),
  num(S`An isosceles triangle has base 16 and apex angle 50°. Find the height (2 d.p.).`, d2(8 / Math.tan(r(25))), "8/tan 25°.", null, 0.01),
  num(S`A rectangle has diagonal 20 making 35° with the longer side. Find the shorter side (2 d.p.).`, d2(20 * Math.sin(r(35))), "20 sin 35°.", null, 0.01),
  num(S`The angle of elevation of the sun is 62°. A tree casts a 9 m shadow. Find the tree's height (2 d.p.).`, d2(9 * Math.tan(r(62))), "9 tan 62°.", figDoc({ items: elevation(9, 9 * Math.tan(r(62)), { ld: "9 m", lh: "h", angle: "62°" }) }), 0.01),
  num(S`A road climbs at 6° for 800 m along the road. Find the vertical rise (1 d.p.).`, Math.round(800 * Math.sin(r(6)) * 10) / 10, "800 sin 6°.", null, 0.1),
  mc(S`Which is the exact value of $\sin^245^\circ$?`, S`$\frac12$`, [S`$\frac{\sqrt2}{2}$`, "1", S`$\frac14$`], "(√2/2)²."),
  num(S`A regular hexagon has side 6. Find its apothem (centre to edge midpoint) exactly as a decimal (2 d.p.).`, d2(3 * Math.sqrt(3)), "6 cos 30°.", null, 0.01),
];
