// MCF3M Worksheet 5.1 — The Primary Trigonometric Ratios (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { triD, rightD, sin, cos, tan, asin, acos, atan } from "../../figs.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const R = (run, rise, labels, marks) => svgT(rightD(run, rise, labels, marks), 5.2);

const EXAMPLES = [
  { title: "Label and write ratios", q: S`In right $\triangle PQR$ with $\angle R=90^\circ$, $PR=20$, $QR=21$, $PQ=29$. Write $\sin P$, $\cos P$, $\tan P$.`,
    fig: R(20, 21, ["P", "R", "Q"], [[10, -1.5, "20"], [21.5, 10.5, "21"], [8, 12, "29"]]),
    steps: [S`\textbf{Label from P:} opposite $QR=21$, adjacent $PR=20$, hypotenuse $PQ=29$.`, S`$\sin P=\frac{21}{29}$, $\cos P=\frac{20}{29}$, $\tan P=\frac{21}{20}$.`, S`\textbf{Check:} $20^2+21^2=841=29^2$ \checkmark`],
    ans: S`$\frac{21}{29},\ \frac{20}{29},\ \frac{21}{20}$` },
  { title: "Side with sine", q: S`An acute angle is $27^\circ$ and the hypotenuse is $15$ m. Find the opposite side.`,
    fig: R(15 * cos(27), 15 * sin(27), ["27°", "", ""], [[7, -0.9, ""], [14.2, 3.4, "x"], [6, 4.4, "15"]]),
    steps: [S`$\sin27^\circ=\frac x{15}$.`, S`$x=15\sin27^\circ\approx${f(15 * sin(27))}$ m.`, S`Shorter than the hypotenuse \checkmark`],
    ans: S`$\approx${f(15 * sin(27))}$ m` },
  { title: "Side with cosine", q: S`An acute angle is $63^\circ$ and the hypotenuse is $40$ cm. Find the adjacent side.`,
    fig: R(40 * cos(63), 40 * sin(63), ["63°", "", ""], [[9, -2.5, "x"], [13, 18, ""], [5, 20, "40"]]),
    steps: [S`$\cos63^\circ=\frac x{40}$.`, S`$x=40\cos63^\circ\approx${f(40 * cos(63))}$ cm.`],
    ans: S`$\approx${f(40 * cos(63))}$ cm` },
  { title: "Unknown in the denominator", q: S`The side adjacent to a $36^\circ$ angle is $9$ m. Find the hypotenuse.`,
    fig: R(9, 9 * tan(36), ["36°", "", ""], [[4.5, -0.8, "9"], [4, 4, "x"]]),
    steps: [S`$\cos36^\circ=\frac9x$.`, S`$x=\frac9{\cos36^\circ}\approx${f(9 / cos(36))}$ m.`, S`Longer than $9$ \checkmark`],
    ans: S`$\approx${f(9 / cos(36))}$ m` },
  { title: "Find an angle", q: S`A right triangle has legs $8$ and $15$. Find both acute angles.`,
    fig: R(15, 8, ["θ", "", ""], [[7.5, -1, "15"], [15.8, 4, "8"]]),
    steps: [S`$\tan\theta=\frac8{15}\Rightarrow\theta\approx${f(atan(8 / 15))}^\circ$.`, S`Other angle $\approx${f(90 - atan(8 / 15))}^\circ$.`, S`\textbf{Check:} sum $90^\circ$ \checkmark`],
    ans: S`$\approx${f(atan(8 / 15))}^\circ$ and $${f(90 - atan(8 / 15))}^\circ$` },
  { title: "Angle of elevation", q: S`From $60$ m away, the top of a building is at $34^\circ$ elevation. Find the height.`,
    fig: R(60, 60 * tan(34), ["34°", "", ""], [[30, -3, "60 m"], [62, 20, "h"]]),
    steps: [S`$\tan34^\circ=\frac h{60}$.`, S`$h=60\tan34^\circ\approx${f(60 * tan(34))}$ m.`],
    ans: S`$\approx${f(60 * tan(34))}$ m` },
  { title: "Angle of depression", q: S`From a $25$ m tower, a car is seen at $18^\circ$ depression. How far is the car from the base?`,
    fig: R(25 / tan(18), 25, ["18°", "", "tower"], [[38, -3, "d"], [79, 12, "25"]]),
    steps: [S`By alternate angles the angle at the car is $18^\circ$.`, S`$\tan18^\circ=\frac{25}d\Rightarrow d=\frac{25}{\tan18^\circ}\approx${f(25 / tan(18))}$ m.`],
    ans: S`$\approx${f(25 / tan(18))}$ m` },
  { title: "Solve a triangle", q: S`Solve the right triangle with legs $7$ and $10$.`,
    fig: R(10, 7, ["", "", ""], [[5, -0.8, "10"], [10.8, 3.5, "7"]]),
    steps: [S`Hypotenuse $\sqrt{49+100}=\sqrt{149}\approx${f(Math.sqrt(149))}$.`, S`Angle opposite $7$: $\tan^{-1}\frac7{10}\approx${f(atan(0.7))}^\circ$; other $\approx${f(90 - atan(0.7))}^\circ$.`],
    ans: S`$\approx${f(Math.sqrt(149))}$; $${f(atan(0.7))}^\circ$, $${f(90 - atan(0.7))}^\circ$` },
  { title: "Ladder safety", q: S`A ladder should make $75^\circ$ with the ground. An $8$ m ladder: how high does it reach?`,
    fig: R(8 * cos(75), 8 * sin(75), ["75°", "", ""], [[1, -0.6, ""], [2.6, 3.8, "h"], [0.4, 4.4, "8"]]),
    steps: [S`$h=8\sin75^\circ\approx${f(8 * sin(75))}$ m.`, S`Base distance $8\cos75^\circ\approx${f(8 * cos(75))}$ m.`],
    ans: S`$\approx${f(8 * sin(75))}$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`In a right triangle, opposite $=12$, hypotenuse $=13$. Find $\sin\theta$, $\cos\theta$, $\tan\theta$.`, ans: S`$\frac{12}{13},\ \frac5{13},\ \frac{12}5$` },
  { level: 1, q: S`Find $x$: hypotenuse $18$, angle $50^\circ$, $x$ opposite.`, ans: S`$\approx${f(18 * sin(50))}$` },
  { level: 1, q: S`Find the angle with $\tan\theta=0.9$.`, ans: S`$\approx${f(atan(0.9))}^\circ$` },
  { level: 2, q: S`The adjacent side to a $28^\circ$ angle is $14$. Find the hypotenuse.`, ans: S`$\approx${f(14 / cos(28))}$` },
  { level: 2, q: S`A right triangle has hypotenuse $25$ and a leg $7$. Find the angle opposite the leg.`, ans: S`$\approx${f(asin(7 / 25))}^\circ$` },
  { level: 2, q: S`From $80$ m away, a tower top is at $22^\circ$ elevation. Find its height.`, ans: S`$\approx${f(80 * tan(22))}$ m` },
  { level: 2, q: S`A kite string is $50$ m long at $40^\circ$ to the ground. How high is the kite?`, ans: S`$\approx${f(50 * sin(40))}$ m` },
  { level: 2, q: S`Solve the right triangle with hypotenuse $12$ and an angle $35^\circ$.`, ans: S`$\approx${f(12 * sin(35))}$, $${f(12 * cos(35))}$; $55^\circ$` },
  { level: 3, space: 5, q: S`From the top of a $40$ m cliff, a boat is at $14^\circ$ depression. How far is the boat from the base?`, ans: S`$\approx${f(40 / tan(14))}$ m` },
  { level: 3, space: 5, q: S`A ramp must rise $0.9$ m at no more than $5^\circ$. Find the minimum ramp length.`, ans: S`$\approx${f(0.9 / sin(5))}$ m` },
  { level: 3, space: 5, q: S`An isosceles triangle has equal sides $10$ and base $12$. Find its base angles using a right triangle.`, ans: S`$\cos^{-1}0.6\approx${f(acos(0.6))}^\circ$` },
  { level: 3, space: 5, q: S`A road climbs $120$ m over a horizontal distance of $1.5$ km. Find the angle of the road and its length.`, ans: S`$\approx${f(atan(0.08))}^\circ$; $\approx${f(Math.sqrt(1500 ** 2 + 120 ** 2))}$ m` },
  { level: 3, space: 5, q: S`Explain why $\sin\theta$ is the same for all right triangles with the same angle $\theta$.`, ans: S`they are similar, so side ratios are equal` },
];

export const WS = {
  code: "5.1",
  title: "The Primary Trigonometric Ratios",
  bigideas: S`In a right triangle the ratios of sides depend only on the acute angle: $\sin\theta=\frac{\text{opp}}{\text{hyp}}$, $\cos\theta=\frac{\text{adj}}{\text{hyp}}$, $\tan\theta=\frac{\text{opp}}{\text{adj}}$. One side and one acute angle determine the triangle, and two sides determine the angles through the inverse ratios. Angles of elevation and depression turn real heights and distances into right triangles.`,
  goals: ["Label sides relative to an angle.", "Find sides and angles with SOH CAH TOA.", "Use angles of elevation and depression.", "Solve right triangles."],
  curriculum: "C1.1",
  vocab: [["Hypotenuse", "side opposite the right angle"], ["Opposite / adjacent", "relative to the angle"], ["Inverse ratio", "$\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$"], ["Elevation / depression", "angles from the horizontal"]],
  hook: S`Draw three different right triangles with a $30^\circ$ angle. Measure opposite/hypotenuse in each. What do you notice?`,
  concepts: [
    ["1. SOH CAH TOA", S`\begin{center}\begin{tabular}{@{}lll@{}}$\sin\theta=\frac{\text{opp}}{\text{hyp}}$ & $\cos\theta=\frac{\text{adj}}{\text{hyp}}$ & $\tan\theta=\frac{\text{opp}}{\text{adj}}$\end{tabular}\end{center}
${R(12, 9, ["θ", "", ""], [[6, -0.8, "adjacent"], [12.8, 4.5, "opposite"], [4, 5.5, "hypotenuse"]])}`],
    ["2. Finding sides and angles", S`Unknown in the numerator: multiply. Unknown in the denominator: divide. For angles, use the inverse ratio. Calculator in degree mode.`],
    ["3. Elevation and depression", S`Both are measured from the horizontal. The angle of depression from a high point equals the angle of elevation from the ground (alternate angles).`],
  ],
  tips: ["Relabel opposite/adjacent whenever the angle changes.", "Check degree mode with sin 30° = 0.5.", "Ask for a diagram in every problem."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
