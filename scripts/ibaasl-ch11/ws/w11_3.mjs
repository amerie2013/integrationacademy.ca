// IB AA SL Worksheet 11.3 — The Sine Rule (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, tri } from "../figs11.mjs";

const S = String.raw;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI, sn = (d) => Math.sin(rad(d));
const T = (items, w = 5.4) => svgT(figDoc({ items }), w);
const triAc = (A, b, c, sides, angles = []) => tri([0, 0], [c, 0], [b * Math.cos(rad(A)), b * Math.sin(rad(A))], { sides, names: ["A", "B", "C"], angles });
const f2 = (v) => v.toFixed(2);

const EXAMPLES = [
  { title: "AAS", q: S`$A=44^\circ$, $B=67^\circ$, $a=12$. Find $b$.`,
    fig: T(triAc(44, 12 * sn(67) / sn(44), 12 * sn(69) / sn(44), ["c", "a = 12", "b"], [[0, "44°"], [1, "67°"]])),
    steps: [S`$b=\frac{12\sin67^\circ}{\sin44^\circ}$.`], ans: S`$\approx${f2(12 * sn(67) / sn(44))}$` },
  { title: "ASA", q: S`$B=38^\circ$, $C=95^\circ$, $a=20$. Find $b$.`,
    steps: [S`$A=47^\circ$.`, S`$b=\frac{20\sin38^\circ}{\sin47^\circ}$.`], ans: S`$\approx${f2(20 * sn(38) / sn(47))}$` },
  { title: "Finding an angle", q: S`$a=15$, $c=11$, $A=81^\circ$. Find $C$.`,
    steps: [S`$\sin C=\frac{11\sin81^\circ}{15}$.`, "Only the acute value works (A is already large)."], ans: S`$\approx${f2(deg(Math.asin(11 * sn(81) / 15)))}^\circ$` },
  { title: "No triangle", q: S`$A=50^\circ$, $a=5$, $b=9$. How many triangles?`,
    steps: [S`$\sin B=\frac{9\sin50^\circ}{5}\approx1.379>1$.`], ans: "none" },
  { title: "Two triangles", q: S`$A=28^\circ$, $a=9$, $b=15$. Find both values of B.`,
    steps: [S`$\sin B=\frac{15\sin28^\circ}{9}\approx${(15 * sn(28) / 9).toFixed(4)}$.`], ans: S`$\approx${f2(deg(Math.asin(15 * sn(28) / 9)))}^\circ$ or $\approx${f2(180 - deg(Math.asin(15 * sn(28) / 9)))}^\circ$` },
  { title: "Third side in each case", q: S`For $A=28^\circ$, $a=9$, $b=15$, find both values of $c$.`,
    steps: [S`$C=180^\circ-28^\circ-B$ for each $B$, then $c=\frac{9\sin C}{\sin28^\circ}$.`], ans: (() => { const B1 = deg(Math.asin(15 * sn(28) / 9)); return S`$\approx${f2(9 * sn(152 - B1) / sn(28))}$ or $\approx${f2(9 * sn(B1 - 28) / sn(28))}$`; })() },
  { title: "Right-angle boundary", q: S`$A=30^\circ$, $b=14$. Find $a$ so that B is a right angle.`,
    steps: [S`$a=b\sin A$.`], ans: "7" },
  { title: "Perimeter", q: S`$A=72^\circ$, $B=41^\circ$, $c=16$. Find the perimeter.`,
    fig: T(triAc(72, 16 * sn(41) / sn(67), 16, ["c = 16", "a", "b"], [[0, "72°"], [1, "41°"]])),
    steps: [S`$C=67^\circ$; $a=\frac{16\sin72^\circ}{\sin67^\circ}$, $b=\frac{16\sin41^\circ}{\sin67^\circ}$.`], ans: S`$\approx${f2(16 + 16 * sn(72) / sn(67) + 16 * sn(41) / sn(67))}$` },
  { title: "Two observers", q: "Observers A and B are 500 m apart. A ship S is seen at angles SAB = 58° and SBA = 49°. Find AS.",
    steps: [S`$S=73^\circ$; $AS=\frac{500\sin49^\circ}{\sin73^\circ}$.`], ans: S`$\approx${(500 * sn(49) / sn(73)).toFixed(1)}$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`$A=35^\circ$, $B=80^\circ$, $a=7$. Find $b$.`, recap: "AAS.", ans: S`$\approx${f2(7 * sn(80) / sn(35))}$` },
  { level: 1, q: S`State the sine rule for triangle PQR.`, recap: "Labelling.", ans: S`$\frac{p}{\sin P}=\frac{q}{\sin Q}=\frac{r}{\sin R}$` },
  { level: 1, q: S`$\frac{a}{\sin A}=24$ and $C=45^\circ$. Find $c$.`, recap: "Common ratio.", ans: S`$12\sqrt2\approx16.97$` },
  { level: 2, q: S`$a=10$, $b=14$, $B=110^\circ$. Find $A$.`, recap: "Acute only.", ans: S`$\approx${f2(deg(Math.asin(10 * sn(110) / 14)))}^\circ$` },
  { level: 2, q: S`$A=60^\circ$, $b=8$, $a=6$. How many triangles?`, recap: S`Compare with $b\sin A$.`, ans: S`$b\sin A\approx6.93>6$: none` },
  { level: 2, q: S`$A=40^\circ$, $b=10$, $a=12$. How many triangles?`, recap: S`$a\ge b$.`, ans: "one" },
  { level: 2, q: S`$C=120^\circ$, $c=20$, $a=12$. Find $A$ and $B$.`, recap: "Sine rule then angle sum.", ans: S`$A\approx${f2(deg(Math.asin(12 * sn(120) / 20)))}^\circ$, $B\approx${f2(60 - deg(Math.asin(12 * sn(120) / 20)))}^\circ$` },
  { level: 2, q: "Mark the known values on the triangle and find side b.", recap: "Label first.", ans: S`$b=\frac{9\sin55^\circ}{\sin50^\circ}\approx${f2(9 * sn(55) / sn(50))}$`,
    fig: T(triAc(50, 9 * sn(55) / sn(50), 9 * sn(75) / sn(50), ["", "a = 9", "b"], [[0, "50°"], [1, "55°"]]), 4.8) },
  { level: 3, space: 4, q: S`$A=33^\circ$, $a=11$, $b=18$. Find both possible triangles completely.`, recap: "Ambiguous case.", ans: (() => { const B1 = deg(Math.asin(18 * sn(33) / 11)); return S`$B\approx${f2(B1)}^\circ$, $C\approx${f2(147 - B1)}^\circ$, $c\approx${f2(11 * sn(147 - B1) / sn(33))}$; or $B\approx${f2(180 - B1)}^\circ$, $C\approx${f2(B1 - 33)}^\circ$, $c\approx${f2(11 * sn(B1 - 33) / sn(33))}$`; })() },
  { level: 3, space: 4, q: S`In triangle ABC, $A=45^\circ$ and $b=10$. Find the range of $a$ for which two triangles exist.`, recap: S`$b\sin A<a<b$.`, ans: S`$5\sqrt2<a<10$` },
  { level: 3, space: 4, q: "A tree on a slope: from A the angle of elevation of the top is 35°; 20 m closer (at B, on level ground) it is 52°. Find the distance from B to the top of the tree.", recap: "Triangle ABT.", ans: S`$\angle T=17^\circ$; $BT=\frac{20\sin35^\circ}{\sin17^\circ}\approx${(20 * sn(35) / sn(17)).toFixed(2)}$ m` },
  { level: 3, space: 4, q: S`Show that in any triangle $\frac{a+b}{c}=\frac{\sin A+\sin B}{\sin C}$.`, recap: "Use the common ratio k.", ans: S`$a=k\sin A$, etc.; divide` },
  { level: 3, space: 4, q: S`Explain why SSA with $a\ge b$ (A acute) gives exactly one triangle.`, recap: "Obtuse option fails.", ans: S`then $B\le A$, so $180^\circ-B\ge180^\circ-A$ makes the angle sum too large` },
];

export const WS = {
  code: "11.3",
  title: "The Sine Rule",
  bigideas: S`$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$ in any triangle. Use it with a side and its opposite angle. Two angles and a side give one triangle. Two sides and a non-included angle may give 0, 1 or 2 triangles: with A acute, two when $b\sin A<a<b$. Always test $180^\circ-\theta$.`,
  goals: ["Find sides.", "Find angles.", "Recognise the ambiguous case.", "Solve applications."],
  curriculum: "SL 3.3",
  vocab: [["Sine rule", S`$\frac{a}{\sin A}=\frac{b}{\sin B}$`], ["SSA", "side, side, non-included angle"], ["Ambiguous case", "two triangles"]],
  hook: "Two surveyors see the same tower from different places. Neither can reach it. How can they find its distance?",
  concepts: [
    ["1. The rule", S`${T(triAc(58, 8, 10, ["c", "a", "b"], [[0, "A"], [1, "B"]]), 4.6)} Pairs of side and opposite angle.`],
    ["2. Angles", "Check θ and 180° − θ."],
    ["3. Ambiguous case", "0, 1 or 2 triangles."],
  ],
  tips: ["Label opposite pairs.", "sin⁻¹ gives the acute angle.", "Check angle sums.", "sin > 1: no triangle.", "Keep accuracy."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
