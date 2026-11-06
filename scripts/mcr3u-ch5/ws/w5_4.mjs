// MCR3U Worksheet 5.4 — The Sine Law and the Ambiguous Case (teacher edition)
import { polyT, sin, cos, asin, f, triSAS } from "./trigT.mjs";

const S = String.raw;
// Example 6/7: A = 36°, a = 10, b = 15 (two triangles)
const B1 = asin((15 * sin(36)) / 10), B2 = 180 - B1, C1 = 180 - 36 - B1, C2 = 180 - 36 - B2;
const c1 = (10 * sin(C1)) / sin(36), c2 = (10 * sin(C2)) / sin(36);
const Cx = 15 * cos(36), Cy = 15 * sin(36), dx = Math.sqrt(100 - Cy * Cy);
// Problem 9: A = 33°, a = 14, b = 22
const P1 = asin((22 * sin(33)) / 14), P2 = 180 - P1, Q1 = 180 - 33 - P1, Q2 = 180 - 33 - P2;
const q1 = (14 * sin(Q1)) / sin(33), q2 = (14 * sin(Q2)) / sin(33);
// Problem 11: lookouts 8 km apart, 37° and 58°
const L = (8 * sin(58)) / sin(85), dist = L * sin(37);

const EXAMPLES = [
  { title: "ASA", q: S`In $\triangle ABC$, $\angle A=38^\circ$, $\angle B=71^\circ$, $c=25$. Find $a$ and $b$.`,
    fig: triSAS(25, 25, 38, ["A 38°", "B 71°", "C 71°"]),
    steps: [S`\textbf{Third angle:} $\angle C=180^\circ-38^\circ-71^\circ=71^\circ$.`,
      S`\textbf{Find $a$:} $\frac a{\sin38^\circ}=\frac{25}{\sin71^\circ}$, so $a\approx${f((25 * sin(38)) / sin(71))}$.`,
      S`\textbf{Find $b$:} $b=\frac{25\sin71^\circ}{\sin71^\circ}=25$.`,
      S`\textbf{Notice:} $B=C$, so the triangle is isosceles with $b=c$ \checkmark`],
    ans: S`$a\approx${f((25 * sin(38)) / sin(71))}$, $b=25$` },
  { title: "AAS with an obtuse angle", q: S`$\angle B=110^\circ$, $\angle C=25^\circ$, $b=30$. Solve the triangle.`,
    fig: triSAS(30, (30 * sin(25)) / sin(110), 45, ["A 45°", "B 110°", "C 25°"]),
    steps: [S`\textbf{Third angle:} $\angle A=45^\circ$.`,
      S`\textbf{Known pair:} $b=30$ with $\sin110^\circ$.`,
      S`\textbf{Sides:} $a=\frac{30\sin45^\circ}{\sin110^\circ}\approx${f((30 * sin(45)) / sin(110))}$; $c=\frac{30\sin25^\circ}{\sin110^\circ}\approx${f((30 * sin(25)) / sin(110))}$.`,
      S`\textbf{Check:} the longest side $30$ faces the largest angle $110^\circ$ \checkmark`],
    ans: S`$A=45^\circ$, $a\approx${f((30 * sin(45)) / sin(110))}$, $c\approx${f((30 * sin(25)) / sin(110))}$` },
  { title: "SSA, one triangle", q: S`$\angle A=65^\circ$, $a=18$, $b=14$. Find $\angle B$.`,
    fig: triSAS(14, (18 * sin(180 - 65 - asin((14 * sin(65)) / 18))) / sin(65), 65, ["A 65°", "B", "C"]),
    steps: [S`\textbf{Count triangles:} $a\ge b$, so there is exactly one.`,
      S`\textbf{Why $B$ is acute:} $b<a$, so $B<A$. So we ignore the obtuse option.`,
      S`\textbf{Sine law:} $\sin B=\frac{14\sin65^\circ}{18}$, which gives $B\approx${f(asin((14 * sin(65)) / 18), 1)}^\circ$.`],
    ans: S`$B\approx${f(asin((14 * sin(65)) / 18), 1)}^\circ$` },
  { title: "SSA, no triangle", q: S`$\angle A=50^\circ$, $a=6$, $b=10$. How many triangles?`,
    fig: polyT([[0, 0], [10 * cos(50), 10 * sin(50)]], ["A", "C"], { open: true, extra: [{ pts: [[0, 0], [12, 0]], color: "gray" }, { pts: [[10 * cos(50), 10 * sin(50)], [10 * cos(50), 10 * sin(50) - 6]], color: "red" }], marks: [[10 * cos(50), 10 * sin(50) - 6, "a = 6 falls short"]] }),
    steps: [S`\textbf{Height:} the shortest distance from $C$ to the base is $h=10\sin50^\circ\approx${f(10 * sin(50))}$.`,
      S`\textbf{Compare:} $a=6<h$, so side $a$ cannot reach the base.`,
      S`\textbf{Check with the law:} $\sin B=\frac{10\sin50^\circ}6>1$, which is impossible \checkmark`],
    ans: "no triangle" },
  { title: "SSA, exactly one right triangle", q: S`$\angle A=30^\circ$, $b=16$, $a=8$. How many triangles?`,
    fig: triSAS(16, 16 * cos(30), 30, ["A 30°", "B 90°", "C"]),
    steps: [S`\textbf{Height:} $h=16\sin30^\circ=8$.`,
      S`\textbf{Compare:} $a=h$, so side $a$ just touches the base.`,
      S`\textbf{Conclude:} $\angle B=90^\circ$.`,
      S`\textbf{Check:} $\sin B=\frac{16\sin30^\circ}8=1$ \checkmark`],
    ans: "one right triangle" },
  { title: "SSA, two triangles", q: S`$\angle A=36^\circ$, $a=10$, $b=15$. How many triangles? Find both values of ∠B.`,
    fig: polyT([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx - dx, 0, "B₂"]] }),
    steps: [S`\textbf{Height:} $h=15\sin36^\circ\approx${f(15 * sin(36))}$.`,
      S`\textbf{Compare:} $h<a<b$, so there are two triangles.`,
      S`\textbf{Sine law:} $\sin B=\frac{15\sin36^\circ}{10}$, so $B_1\approx${f(B1, 1)}^\circ$.`,
      S`\textbf{Second angle:} $B_2=180^\circ-B_1\approx${f(B2, 1)}^\circ$, as sine is also positive in Quadrant 2.`],
    ans: S`$${f(B1, 1)}^\circ$ or $${f(B2, 1)}^\circ$` },
  { title: "Finishing both triangles", q: S`For $\angle A=36^\circ$, $a=10$, $b=15$, complete both possible triangles.`,
    fig: polyT([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx - dx, 0, "B₂"]] }),
    steps: [S`\textbf{Triangle 1:} $C_1=180^\circ-36^\circ-B_1\approx${f(C1, 1)}^\circ$.`,
      S`\textbf{Side:} $c_1=\frac{10\sin C_1}{\sin36^\circ}\approx${f(c1)}$.`,
      S`\textbf{Triangle 2:} $C_2\approx${f(C2, 1)}^\circ$ and $c_2=\frac{10\sin C_2}{\sin36^\circ}\approx${f(c2)}$.`,
      S`\textbf{Check:} the figure shows $c_1$ (to $B_1$) longer than $c_2$ (to $B_2$) \checkmark`],
    ans: S`$c\approx${f(c1)}$ or $${f(c2)}$` },
  { title: "Obtuse given angle", q: S`$\angle A=120^\circ$, $a=9$, $b=12$. How many triangles?`,
    fig: polyT([[0, 0], [12 * cos(120), 12 * sin(120)]], ["A 120°", "C"], { open: true, extra: [{ pts: [[0, 0], [8, 0]], color: "gray" }] , marks: [[-3, 5.2, "b = 12"]] }),
    steps: [S`\textbf{Rule:} the largest angle faces the longest side. An obtuse angle is always the largest.`,
      S`\textbf{Compare:} $A$ is obtuse, so $a$ must be longer than $b$. But $9<12$.`,
      S`\textbf{Picture:} $C$ is already $12$ from $A$, and every point to the right on the base is even farther away, so $a=9$ cannot reach.`],
    ans: "none" },
  { title: "Locating a fire", q: "Two ranger stations are 12 km apart. A fire is seen at 54° from the line joining them at station 1 and at 71° at station 2. How far is the fire from station 1?",
    fig: polyT([[0, 0], [12, 0], [(12 * sin(71) / sin(55)) * cos(54), (12 * sin(71) / sin(55)) * sin(54)]], ["station 1", "station 2", "fire"]),
    steps: [S`\textbf{Third angle:} at the fire, $180^\circ-54^\circ-71^\circ=55^\circ$.`,
      S`\textbf{Known pair:} $12$ km faces $55^\circ$.`,
      S`\textbf{Match:} the side from station 1 faces the $71^\circ$ angle.`,
      S`\textbf{Solve:} $\frac{12\sin71^\circ}{\sin55^\circ}\approx${f((12 * sin(71)) / sin(55))}$ km. It is longer than $12$, since $71^\circ>55^\circ$ \checkmark`],
    ans: S`$\approx${f((12 * sin(71)) / sin(55))}$ km` },
];

const PROBLEMS = [
  { level: 1, q: S`$\angle A=50^\circ$, $\angle B=60^\circ$, $a=10$. Find $b$.`, recap: "Sine law side.", ans: S`$\approx${f((10 * sin(60)) / sin(50))}$` },
  { level: 1, q: S`$\angle A=40^\circ$, $a=12$, $b=10$. How many triangles?`, recap: "Count.", ans: S`one ($a\ge b$)` },
  { level: 1, q: S`$\angle A=48^\circ$, $\angle B=67^\circ$. Find $\angle C$.`, recap: "Third angle.", ans: S`$65^\circ$` },
  { level: 2, q: S`$\angle A=35^\circ$, $\angle B=85^\circ$, $c=40$. Find $a$.`, recap: "ASA.", ans: S`$C=60^\circ$; $a\approx${f((40 * sin(35)) / sin(60))}$` },
  { level: 2, q: S`$\angle A=55^\circ$, $a=20$, $b=17$. Find $\angle B$.`, recap: "SSA, one.", ans: S`$\approx${f(asin((17 * sin(55)) / 20), 1)}^\circ$` },
  { level: 2, q: S`$\angle A=25^\circ$, $a=6$, $b=12$. How many triangles? Justify.`, recap: "Count with h.", ans: S`$h\approx${f(12 * sin(25))}<6<12$: two` },
  { level: 2, q: S`$\angle A=60^\circ$, $a=5$, $b=8$. How many triangles? Justify.`, recap: "Count with h.", ans: S`$h\approx${f(8 * sin(60))}>5$: none` },
  { level: 2, q: "Points A and B are 200 m apart on one side of a lake. A point C on the far side gives ∠CAB = 47° and ∠CBA = 68°. Find BC.", recap: "Lake survey.", ans: S`$\angle C=65^\circ$; $BC=\frac{200\sin47^\circ}{\sin65^\circ}\approx${f((200 * sin(47)) / sin(65), 1)}$ m`,
    fig: polyT([[0, 0], [200, 0], [((200 * sin(68)) / sin(65)) * cos(47), ((200 * sin(68)) / sin(65)) * sin(47)]], ["A", "B", "C"]) },
  { level: 3, space: 5, q: S`$\angle A=33^\circ$, $a=14$, $b=22$. Solve every possible triangle.`, recap: "Both triangles.", ans: S`$B\approx${f(P1, 1)}^\circ$, $C\approx${f(Q1, 1)}^\circ$, $c\approx${f(q1)}$; or $B\approx${f(P2, 1)}^\circ$, $C\approx${f(Q2, 1)}^\circ$, $c\approx${f(q2)}$`,
    fig: polyT([[32, 0], [0, 0], [22 * cos(33), 22 * sin(33)]], ["", "A", "C"], { open: true, cap: "side a = 14 swings from C to meet the base ray" }) },
  { level: 3, space: 4, q: S`$\angle A=40^\circ$ and $b=18$. Find all values of $a$ that give two triangles.`, recap: "Range of a.", ans: S`$18\sin40^\circ<a<18$, i.e. $${f(18 * sin(40))}<a<18$` },
  { level: 3, space: 5, q: "Two lookouts 8 km apart on a straight coast see a ship at 37° and 58° to the coastline. How far is the ship from the coast?", recap: "Sine law + right triangle.", ans: S`distance from first lookout $\frac{8\sin58^\circ}{\sin85^\circ}\approx${f(L)}$; times $\sin37^\circ$: $\approx${f(dist)}$ km`,
    fig: polyT([[0, 0], [8, 0], [L * cos(37), L * sin(37)]], ["", "", "ship"], { extra: [{ pts: [[L * cos(37), L * sin(37)], [L * cos(37), 0]], color: "red" }], marks: [[4, 0, "8 km"]] }) },
  { level: 3, space: 4, q: S`Explain why, when $\angle A$ is obtuse and $a\le b$, no triangle exists.`, recap: "Explain.", ans: "the largest angle faces the longest side; an obtuse A must face the longest side, so a > b is needed" },
  { level: 3, space: 4, q: S`$\angle A=28^\circ$ and $b=20$. For which values of $a$ is there exactly one triangle?`, recap: "Exactly one.", ans: S`$a=20\sin28^\circ\approx${f(20 * sin(28))}$ (right triangle) or $a\ge20$` },
];

export const WS = {
  code: "5.4",
  title: "The Sine Law and the Ambiguous Case",
  bigideas: S`In any triangle $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}$. ASA and AAS give one triangle. SSA (two sides and a non-contained angle) may give 0, 1 or 2 triangles: compare $a$ with $h=b\sin A$ and with $b$.`,
  goals: ["Derive and use the sine law.", "Solve ASA and AAS triangles.", "Decide the number of SSA triangles.", "Solve both triangles in the ambiguous case."],
  curriculum: "D1.6",
  vocab: [["Oblique", "no right angle"], ["Ambiguous case", "SSA that may give two triangles"], ["$h=b\\sin A$", "height from C to the base"]],
  hook: "Give students a fixed angle drawn on paper and a fixed side b, plus a string of length a. How many places can the string touch the base?",
  concepts: [
    ["1. Derivation", S`Drop $h$ from C: $h=b\sin A=a\sin B$, so $\frac a{\sin A}=\frac b{\sin B}$.`],
    ["2. The ambiguous case (∠A acute)", S`\begin{tabular}{ll}\toprule Condition & Triangles\\\midrule $a<h$ & 0\\ $a=h$ & 1 (right)\\ $h<a<b$ & 2\\ $a\ge b$ & 1\\\bottomrule\end{tabular}
${polyT([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A", "", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }, { pts: [[Cx, Cy], [Cx, 0]], color: "gray" }], marks: [[Cx, Cy / 2, "h"]], width: 5.5 })}`],
    ["3. The second angle", S`If $B_1$ works, test $B_2=180^\circ-B_1$: it works when $A+B_2<180^\circ$.`],
  ],
  tips: ["Pair each side with its opposite angle.", "sin⁻¹ gives only the acute angle.", "Check sin B > 1 means no triangle.", "Keep full accuracy between steps.", "Draw both triangles when there are two."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
