// MCF3M Worksheet 5.3 — The Sine Law (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { triD, sin, cos, asin } from "../../figs.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
/** triangle with angles A, B at the ends of AB = c */
const ABc = (A, B, c, labels = ["A", "B", "C"]) => { const C = 180 - A - B; const b = (c * sin(B)) / sin(C); return svgT(triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], labels), 5.4); };
const side = (known, angK, angX) => (known * sin(angX)) / sin(angK);

const EXAMPLES = [
  { title: "Verify the law", q: S`A triangle has $A=45^\circ$, $B=75^\circ$, $C=60^\circ$, $a=10$. Find $b$ and $c$ and show the three ratios are equal.`,
    fig: ABc(45, 75, side(10, 45, 60)),
    steps: [S`$\frac a{\sin A}=\frac{10}{\sin45^\circ}\approx${f(10 / sin(45))}$.`, S`$b\approx${f(side(10, 45, 75))}$, $c\approx${f(side(10, 45, 60))}$.`, S`$\frac b{\sin75^\circ}\approx\frac c{\sin60^\circ}\approx${f(10 / sin(45))}$ \checkmark`],
    ans: S`$b\approx${f(side(10, 45, 75))}$, $c\approx${f(side(10, 45, 60))}$` },
  { title: "AAS", q: S`$A=38^\circ$, $B=79^\circ$, $a=16$. Find $b$.`,
    fig: ABc(38, 79, side(16, 38, 63)),
    steps: [S`$\frac b{\sin79^\circ}=\frac{16}{\sin38^\circ}$.`, S`$b\approx${f(side(16, 38, 79))}$.`],
    ans: S`$\approx${f(side(16, 38, 79))}$` },
  { title: "ASA", q: S`$A=52^\circ$, $C=64^\circ$, $b=20$. Find $a$ and $c$.`,
    fig: ABc(52, 64, side(20, 64, 64)),
    steps: [S`$B=180-52-64=64^\circ$.`, S`$a=\frac{20\sin52^\circ}{\sin64^\circ}\approx${f(side(20, 64, 52))}$; $c=20$ (isosceles).`],
    ans: S`$a\approx${f(side(20, 64, 52))}$, $c=20$` },
  { title: "Find an angle", q: S`$a=13$, $b=10$, $A=70^\circ$ (acute triangle). Find $B$ and $C$.`,
    fig: ABc(70, asin((10 * sin(70)) / 13), side(13, 70, 180 - 70 - asin((10 * sin(70)) / 13))),
    steps: [S`$\sin B=\frac{10\sin70^\circ}{13}\approx${f((10 * sin(70)) / 13)}$.`, S`$B\approx${f(asin((10 * sin(70)) / 13))}^\circ$; $C\approx${f(110 - asin((10 * sin(70)) / 13))}^\circ$.`],
    ans: S`$B\approx${f(asin((10 * sin(70)) / 13))}^\circ$, $C\approx${f(110 - asin((10 * sin(70)) / 13))}^\circ$` },
  { title: "Surveying", q: S`Baseline $AB=180$ m; a tower $T$ is sighted at $\angle A=66^\circ$, $\angle B=58^\circ$. Find $AT$.`,
    fig: ABc(66, 58, 180, ["A", "B", "T"]),
    steps: [S`$\angle T=56^\circ$.`, S`$AT=\frac{180\sin58^\circ}{\sin56^\circ}\approx${f(side(180, 56, 58))}$ m.`],
    ans: S`$\approx${f(side(180, 56, 58))}$ m` },
  { title: "Distance across a canyon", q: S`Points $A$, $B$ are $90$ m apart on one rim; $C$ is on the far rim with $\angle A=72^\circ$, $\angle B=61^\circ$. Find $BC$ and the canyon width (distance from $C$ to line $AB$).`,
    fig: ABc(72, 61, 90),
    steps: [S`$\angle C=47^\circ$; $BC=\frac{90\sin72^\circ}{\sin47^\circ}\approx${f(side(90, 47, 72))}$.`, S`Width $=BC\sin61^\circ\approx${f(side(90, 47, 72) * sin(61))}$ m.`],
    ans: S`$BC\approx${f(side(90, 47, 72))}$; width $\approx${f(side(90, 47, 72) * sin(61))}$ m` },
  { title: "Navigation", q: S`Two radar stations $25$ km apart detect a plane at $54^\circ$ and $68^\circ$ from the line joining them. Find the plane's distance from each station.`,
    fig: ABc(54, 68, 25, ["R1", "R2", "plane"]),
    steps: [S`Angle at the plane $58^\circ$.`, S`From R1: $\frac{25\sin68^\circ}{\sin58^\circ}\approx${f(side(25, 58, 68))}$; from R2: $\frac{25\sin54^\circ}{\sin58^\circ}\approx${f(side(25, 58, 54))}$ km.`],
    ans: S`$\approx${f(side(25, 58, 68))}$ and $${f(side(25, 58, 54))}$ km` },
  { title: "Isosceles check", q: S`$A=B=65^\circ$ and $c=8$. Find $a$.`,
    fig: ABc(65, 65, 8),
    steps: [S`$C=50^\circ$.`, S`$a=\frac{8\sin65^\circ}{\sin50^\circ}\approx${f(side(8, 50, 65))}$; $b=a$.`],
    ans: S`$\approx${f(side(8, 50, 65))}$` },
  { title: "Perimeter", q: S`$A=48^\circ$, $B=72^\circ$, $c=11$. Find the perimeter.`,
    fig: ABc(48, 72, 11),
    steps: [S`$C=60^\circ$; $a\approx${f(side(11, 60, 48))}$, $b\approx${f(side(11, 60, 72))}$.`, S`Perimeter $\approx${f(11 + side(11, 60, 48) + side(11, 60, 72))}$.`],
    ans: S`$\approx${f(11 + side(11, 60, 48) + side(11, 60, 72))}$` },
];

const PROBLEMS = [
  { level: 1, q: S`$A=50^\circ$, $B=60^\circ$, $a=9$. Find $b$.`, ans: S`$\approx${f(side(9, 50, 60))}$` },
  { level: 1, q: S`$B=44^\circ$, $C=81^\circ$, $b=15$. Find $c$.`, ans: S`$\approx${f(side(15, 44, 81))}$` },
  { level: 1, q: S`$a=12$, $b=9$, $A=75^\circ$. Find $B$.`, ans: S`$\approx${f(asin((9 * sin(75)) / 12))}^\circ$` },
  { level: 2, q: S`$A=63^\circ$, $C=58^\circ$, $b=22$. Find $a$.`, ans: S`$\approx${f(side(22, 59, 63))}$` },
  { level: 2, q: S`$a=14$, $c=12$, $A=66^\circ$. Find $C$ and $B$.`, ans: S`$C\approx${f(asin((12 * sin(66)) / 14))}^\circ$; $B\approx${f(114 - asin((12 * sin(66)) / 14))}^\circ$` },
  { level: 2, q: S`Baseline $300$ m, angles $55^\circ$ and $70^\circ$. Find the distance from the $55^\circ$ end to the object.`, ans: S`$\approx${f(side(300, 55, 70))}$ m` },
  { level: 2, q: S`Verify the sine law for a triangle with $A=40^\circ$, $B=60^\circ$, $a=6$ by finding all ratios.`, ans: S`all $\approx${f(6 / sin(40))}$` },
  { level: 2, q: S`$A=72^\circ$, $B=48^\circ$, $c=18$. Find $a$.`, ans: S`$\approx${f(side(18, 60, 72))}$` },
  { level: 3, space: 5, q: S`Two stations $40$ km apart see a ship at $62^\circ$ and $70^\circ$ from the coast. Find the ship's distance from the coast.`, ans: S`$\approx${f(side(40, 48, 70) * sin(62))}$ km` },
  { level: 3, space: 5, q: S`Solve the acute triangle with $a=11$, $b=13$, $B=72^\circ$.`, ans: S`$A\approx${f(asin((11 * sin(72)) / 13))}^\circ$, $C\approx${f(108 - asin((11 * sin(72)) / 13))}^\circ$, $c\approx${f(side(13, 72, 108 - asin((11 * sin(72)) / 13)))}$` },
  { level: 3, space: 5, q: S`Derive the sine law by drawing the height from $C$ in $\triangle ABC$.`, ans: S`$h=b\sin A=a\sin B$` },
  { level: 3, space: 5, q: S`From points $A$ and $B$ $50$ m apart, a balloon is seen at $\angle A=58^\circ$, $\angle B=64^\circ$ (opposite sides). Find its height.`, ans: S`$\approx${f(side(50, 58, 64) * sin(58))}$ m` },
  { level: 3, space: 5, q: S`Explain why the sine law cannot be used directly when you know three sides.`, ans: S`no complete side--angle pair` },
];

export const WS = {
  code: "5.3",
  title: "The Sine Law",
  bigideas: S`In any triangle, $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}$: each side over the sine of its opposite angle gives the same number. The law follows from a height $h=b\sin A=a\sin B$. It finds a side when two angles and a side are known, and an angle in an acute triangle when two sides and an opposite angle are known.`,
  goals: ["Verify and explain the sine law.", "Find sides (AAS/ASA).", "Find angles (acute SSA).", "Solve surveying and navigation problems."],
  curriculum: "C1.3, C1.4, C1.5",
  vocab: [["Opposite pair", "side $a$ with angle $A$"], ["AAS / ASA", "two angles and a side"], ["Acute triangle", "all angles $<90^\\circ$"], ["Baseline", "measured line for sighting"]],
  hook: S`Draw any triangle, measure its sides and angles, and compute $\frac a{\sin A}$, $\frac b{\sin B}$, $\frac c{\sin C}$. Compare with a classmate.`,
  concepts: [
    ["1. Derivation", S`Height from $C$: $h=b\sin A$ and $h=a\sin B$, so $\frac a{\sin A}=\frac b{\sin B}$.
${svgT(triD([[0, 0], [10, 0], [3.6, 6]], ["A", "B", "C"], { extra: [{ pts: [[3.6, 6], [3.6, 0]], color: "red" }] }), 5)}`],
    ["2. Use", S`Need a complete pair. Sides: $x=\frac{a\sin X}{\sin A}$. Angles: $\sin X=\frac{x\sin A}a$. Find the third angle first when two are known.`],
  ],
  tips: ["Pair sides with opposite angles.", "Check: largest side faces largest angle.", "SAS/SSS need the cosine law."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
