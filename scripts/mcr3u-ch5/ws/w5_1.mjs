// MCR3U Worksheet 5.1 — Trigonometric Ratios and Special Angles (teacher edition)
import { polyT, sin, cos, tan, asin, atan, f } from "./trigT.mjs";

const S = String.raw;
const ex9 = { d: 30 / tan(35) };
ex9.up = ex9.d * tan(20);
const h9 = 50 / (1 / tan(25) - 1 / tan(40));

const EXAMPLES = [
  { title: "All three ratios", q: S`A right triangle has legs 20 and 21 and hypotenuse 29. Angle $A$ is opposite the side 20. Write the three primary ratios and find $\angle A$.`,
    fig: polyT([[0, 0], [21, 0], [21, 20]], ["A", "", ""], { marks: [[10.5, 0, "21"], [21, 10, "20"], [10, 11.5, "29"]] }),
    steps: [S`$\sin A=\frac{20}{29}$, $\cos A=\frac{21}{29}$, $\tan A=\frac{20}{21}$.`, S`$A=\tan^{-1}\frac{20}{21}\approx${f(atan(20 / 21), 1)}^\circ$.`], ans: S`$A\approx${f(atan(20 / 21), 1)}^\circ$` },
  { title: "Adjacent side from the hypotenuse", q: S`In a right triangle, one acute angle is $27^\circ$ and the hypotenuse is 15. Find the side adjacent to the $27^\circ$ angle.`,
    steps: [S`$\cos27^\circ=\frac{\text{adj}}{15}$.`, S`adj $=15\cos27^\circ$.`], ans: S`$\approx${f(15 * cos(27))}$` },
  { title: "An angle from two sides", q: "The side opposite θ is 11 and the hypotenuse is 16. Find θ.", steps: [S`$\sin\theta=\frac{11}{16}$, so $\theta=\sin^{-1}(0.6875)$.`], ans: S`$\approx${f(asin(11 / 16), 1)}^\circ$` },
  { title: "Exact values I", q: S`Evaluate $\cos^2 45^\circ+\sin30^\circ\tan60^\circ$ exactly.`, steps: [S`$\left(\tfrac1{\sqrt2}\right)^2+\tfrac12\cdot\sqrt3=\tfrac12+\tfrac{\sqrt3}2$.`], ans: S`$\frac{1+\sqrt3}{2}$` },
  { title: "Exact values II", q: S`Evaluate $\tan30^\circ\tan60^\circ$ and explain the result.`, steps: [S`$\frac1{\sqrt3}\cdot\sqrt3=1$.`, S`In one triangle, the tangents of the two acute angles are reciprocals (opp/adj swaps).`], ans: S`$1$` },
  { title: "Building the 30°–60°–90° triangle", q: "An equilateral triangle has side 6. Find its height exactly, and use it to read sin 60°.",
    fig: polyT([[0, 0], [6, 0], [3, 3 * Math.sqrt(3)]], ["", "", ""], { extra: [{ pts: [[3, 0], [3, 3 * Math.sqrt(3)]], color: "red" }], marks: [[1.5, 0, "3"], [3, 2.6, "h"], [1, 3, "6"]] }),
    steps: [S`Half the base is 3: $h=\sqrt{6^2-3^2}=\sqrt{27}=3\sqrt3$.`, S`$\sin60^\circ=\frac{h}{6}=\frac{3\sqrt3}6=\frac{\sqrt3}2$.`], ans: S`$h=3\sqrt3$; $\sin60^\circ=\frac{\sqrt3}2$` },
  { title: "Angle of depression", q: "From the top of a 45 m cliff, the angle of depression to a boat is 18°. How far is the boat from the foot of the cliff?",
    steps: [S`The angle of depression equals the angle of elevation from the boat (alternate angles).`, S`$\tan18^\circ=\frac{45}{d}\Rightarrow d=\frac{45}{\tan18^\circ}$.`], ans: S`$\approx${f(45 / tan(18), 1)}$ m` },
  { title: "Exact length from 45°", q: "A square has side 7. Use a 45° ratio to find its diagonal exactly.", steps: [S`$\cos45^\circ=\frac{7}{d}\Rightarrow d=\frac{7}{1/\sqrt2}=7\sqrt2$.`], ans: S`$7\sqrt2\approx${f(7 * Math.SQRT2)}$` },
  { title: "Two buildings", q: "From the roof of a 30 m building, the angle of elevation to the top of a taller building is 20° and the angle of depression to its base is 35°. How tall is the taller building?",
    fig: polyT([[0, 0], [0, 30], [ex9.d, 30 + ex9.up], [ex9.d, 0]], ["", "roof", "top", "base"], { open: true, extra: [{ pts: [[0, 0], [ex9.d, 0]], color: "green" }, { pts: [[0, 30], [ex9.d, 30]], color: "gray" }, { pts: [[0, 30], [ex9.d, 0]], color: "red" }] }),
    steps: [S`Horizontal distance: $d=\frac{30}{\tan35^\circ}\approx${f(ex9.d)}$ m.`, S`Extra height above the roof: $d\tan20^\circ\approx${f(ex9.up)}$ m.`, S`Total: $30+${f(ex9.up)}$.`], ans: S`$\approx${f(30 + ex9.up, 1)}$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`A right triangle has sides 12, 35 and 37, with $\angle A$ opposite 12. Find $\sin A$ (4 decimals).`, recap: "sin from a triangle.", ans: S`$\frac{12}{37}\approx0.3243$` },
  { level: 1, q: S`Give the exact value of $\sin60^\circ$ and of $\cos30^\circ$.`, recap: "Exact values.", ans: S`both $\frac{\sqrt3}2$` },
  { level: 1, q: S`$\tan\theta=1.8$ for an acute angle. Find θ to 1 decimal.`, recap: "Inverse tangent.", ans: S`$\approx${f(atan(1.8), 1)}^\circ$` },
  { level: 2, q: S`The hypotenuse of a right triangle is 22 and one angle is $41^\circ$. Find the side opposite that angle.`, recap: "Opposite side.", ans: S`$22\sin41^\circ\approx${f(22 * sin(41))}$` },
  { level: 2, q: S`Evaluate exactly: $4\cos^2 30^\circ-\tan^2 45^\circ$.`, recap: "Exact expression.", ans: S`$4\cdot\frac34-1=2$` },
  { level: 2, q: "A kite string is 80 m long and makes a 52° angle with the ground. How high is the kite (ignore sag)?", recap: "Kite height.", ans: S`$80\sin52^\circ\approx${f(80 * sin(52))}$ m` },
  { level: 2, q: "A 9 m pole casts a 13 m shadow. Find the angle of elevation of the sun.", recap: "Sun angle.", ans: S`$\tan^{-1}\frac9{13}\approx${f(atan(9 / 13), 1)}^\circ$` },
  { level: 2, q: "A 30°–60°–90° triangle has hypotenuse 10. Find its perimeter exactly.", recap: "Exact perimeter.", ans: S`$5+5\sqrt3+10=15+5\sqrt3$`,
    fig: polyT([[0, 0], [5 * Math.sqrt(3), 0], [5 * Math.sqrt(3), 5]], ["30°", "", "60°"], { marks: [[4, 3.4, "10"]] }) },
  { level: 3, space: 5, q: "Two points 50 m apart lie on a straight line toward a tower. The angles of elevation to its top are 25° (far point) and 40° (near point). Find the tower's height.", recap: "Two elevations.", ans: S`$h=\frac{50}{\cot25^\circ-\cot40^\circ}\approx${f(h9, 1)}$ m`,
    fig: polyT([[0, 0], [h9 / tan(25), 0], [h9 / tan(25), h9]], ["25°", "", "top"], { extra: [{ pts: [[50, 0], [h9 / tan(25), h9]], color: "red" }], marks: [[50, 0, "40°"], [25, 0, "50 m"]] }) },
  { level: 3, space: 4, q: S`Show, using exact values, that $\sin^2 60^\circ+\cos^2 60^\circ=1$ and that $\sin60^\circ=\cos30^\circ$. Explain each result with the special triangle.`, recap: "Explain two facts.", ans: S`$\frac34+\frac14=1$ (Pythagoras on sides $\frac{\sqrt3}2,\frac12,1$); the side opposite $60^\circ$ is adjacent to $30^\circ$` },
  { level: 3, space: 4, q: "Find the exact area of a regular hexagon with side 4. (Split it into six equilateral triangles.)", recap: "Hexagon area.", ans: S`each triangle $\frac12\cdot4\cdot4\sin60^\circ=4\sqrt3$; total $24\sqrt3\approx${f(24 * Math.sqrt(3))}$`,
    fig: polyT([0, 60, 120, 180, 240, 300].map((a) => [4 * cos(a), 4 * sin(a)]), ["", "", "", "", "", ""], { extra: [0, 60, 120, 180, 240, 300].map((a) => ({ pts: [[0, 0], [4 * cos(a), 4 * sin(a)]], color: "gray" })) }) },
  { level: 3, space: 4, q: "From the top of a 60 m lighthouse, two boats directly in line with it are seen at angles of depression 45° and 30°. Find the distance between the boats exactly.", recap: "Two boats, exact.", ans: S`$60\sqrt3-60=60(\sqrt3-1)\approx${f(60 * (Math.sqrt(3) - 1))}$ m` },
  { level: 3, space: 4, q: "An isosceles triangle has base 10 and base angles of 30°. Find its height and area exactly.", recap: "Isosceles, exact.", ans: S`$h=5\tan30^\circ=\frac{5}{\sqrt3}=\frac{5\sqrt3}3$; area $\frac{25\sqrt3}{3}\approx${f(25 / Math.sqrt(3))}$` },
];

export const WS = {
  code: "5.1",
  title: "Trigonometric Ratios and Special Angles",
  bigideas: S`In a right triangle, $\sin\theta=\frac{\text{opp}}{\text{hyp}}$, $\cos\theta=\frac{\text{adj}}{\text{hyp}}$ and $\tan\theta=\frac{\text{opp}}{\text{adj}}$. Two special triangles, $1:\sqrt3:2$ (30°–60°–90°) and $1:1:\sqrt2$ (45°–45°–90°), give exact values for 30°, 45° and 60°.`,
  goals: ["Write and use the primary ratios.", "Find unknown sides and angles.", "Derive and use exact values.", "Solve elevation and depression problems."],
  curriculum: "D1.1, D1.6",
  vocab: [["SOH CAH TOA", "the three primary ratios"], ["Exact value", "a value with radicals, e.g. $\\frac{\\sqrt3}2$"], ["Elevation / depression", "angle up from / down from the horizontal"]],
  hook: "Ask: if a ramp rises 1 m for every 1 m forward, what angle is it? Without a calculator! (45°, because the triangle is half a square.)",
  concepts: [
    ["1. The special triangles", S`${polyT([[0, 0], [Math.sqrt(3), 0], [Math.sqrt(3), 1]], ["30°", "", "60°"], { marks: [[0.85, 0, "√3"], [1.73, 0.5, "1"], [0.75, 0.65, "2"]], width: 5 })}
\begin{tabular}{lccc}\toprule $\theta$ & $\sin$ & $\cos$ & $\tan$\\\midrule $30^\circ$ & $\frac12$ & $\frac{\sqrt3}2$ & $\frac1{\sqrt3}$\\ $45^\circ$ & $\frac1{\sqrt2}$ & $\frac1{\sqrt2}$ & $1$\\ $60^\circ$ & $\frac{\sqrt3}2$ & $\frac12$ & $\sqrt3$\\\bottomrule\end{tabular}`],
    ["2. Solving right triangles", S`Label opp, adj and hyp from the angle you use; pick the ratio with one unknown. Use $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ for angles.`],
    ["3. Elevation and depression", S`Both are measured from the horizontal. The angle of depression from A to B equals the angle of elevation from B to A.`],
  ],
  tips: ["Calculator in degree mode.", "Opposite and adjacent swap for the other acute angle.", "Keep exact values exact.", "Draw the horizontal line for depression angles.", "Round only at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
