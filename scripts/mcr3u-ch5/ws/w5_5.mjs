// MCR3U Worksheet 5.5 — The Cosine Law (teacher edition)
import { polyT, triSAS, sin, cos, asin, lawC, angC, f } from "./trigT.mjs";

const S = String.raw;
const e9a = lawC(11, 6, 99), e9C = asin((6 * sin(99)) / e9a), e9B = 180 - 99 - e9C;
const tA = angC(13, 14, 15), tB = angC(14, 13, 15), tC = 180 - tA - tB;
const p13A = angC(12, 10, 7);
const PA = 180 - angC(15, 12, 8); // acute angle at A; the long diagonal AC faces the obtuse angle
const plane7 = lawC(220, 180, 130);

const EXAMPLES = [
  { title: "SAS", q: S`$b=9$, $c=14$, $\angle A=38^\circ$. Find $a$.`, fig: triSAS(9, 14, 38),
    steps: [S`$a^2=81+196-252\cos38^\circ\approx${f(lawC(9, 14, 38) ** 2)}$.`], ans: S`$a\approx${f(lawC(9, 14, 38))}$` },
  { title: "SAS with an obtuse angle", q: S`$a=6$, $b=10$, $\angle C=128^\circ$. Find $c$.`,
    steps: [S`$c^2=36+100-120\cos128^\circ$; $\cos128^\circ<0$, so the last term adds.`], ans: S`$c\approx${f(lawC(6, 10, 128))}$` },
  { title: "SSS: the largest angle", q: "A triangle has sides 8, 10 and 15. Find the largest angle.", steps: [S`Opposite 15: $\cos\theta=\frac{64+100-225}{160}=-\frac{61}{160}$.`], ans: S`$\approx${f(angC(15, 8, 10), 1)}^\circ$` },
  { title: "SSS: every angle", q: "Find all three angles of the triangle with sides 5, 7 and 9.",
    steps: [S`Opposite 9: $\cos C=\frac{25+49-81}{70}\Rightarrow C\approx${f(angC(9, 5, 7), 1)}^\circ$.`, S`Opposite 5: $\cos A=\frac{49+81-25}{126}\Rightarrow A\approx${f(angC(5, 7, 9), 1)}^\circ$.`, S`$B=180^\circ-A-C$.`], ans: S`$${f(angC(5, 7, 9), 1)}^\circ$, $${f(180 - angC(5, 7, 9) - angC(9, 5, 7), 1)}^\circ$, $${f(angC(9, 5, 7), 1)}^\circ$` },
  { title: "Choosing a law", q: S`Which law starts each problem? (a) $a,b,\angle C$ known. (b) $\angle A,\angle B,a$ known. (c) $a,b,c$ known.`, steps: [S`(a) SAS: cosine. (b) a side–angle pair: sine. (c) SSS: cosine.`], ans: "cosine, sine, cosine" },
  { title: "Pythagoras as a special case", q: S`What does the cosine law become when $\angle A=90^\circ$?`, steps: [S`$\cos90^\circ=0$, so $a^2=b^2+c^2$.`], ans: "the Pythagorean theorem" },
  { title: "A flight path", q: "A plane flies 220 km, turns 50° to the right and flies 180 km. How far is it from its start?",
    fig: polyT([[0, 0], [220, 0], [220 + 180 * cos(-50), 180 * sin(-50)]], ["start", "turn", "end"], { open: false }),
    steps: [S`The angle inside the triangle at the turn is $180^\circ-50^\circ=130^\circ$.`, S`$d^2=220^2+180^2-2(220)(180)\cos130^\circ$.`], ans: S`$\approx${f(plane7, 1)}$ km` },
  { title: "Across a lake", q: "From point P, the ends of a lake are 340 m and 410 m away, and the angle between the sightlines is 58°. How long is the lake?", steps: [S`$L^2=340^2+410^2-2(340)(410)\cos58^\circ$.`], ans: S`$\approx${f(lawC(340, 410, 58), 1)}$ m` },
  { title: "Cosine law, then sine law", q: S`$b=11$, $c=6$, $\angle A=99^\circ$. Solve the triangle.`,
    steps: [S`$a=\sqrt{121+36-132\cos99^\circ}\approx${f(e9a)}$.`, S`$C$ faces the shortest side, so it is acute: $\sin C=\frac{6\sin99^\circ}{${f(e9a)}}\Rightarrow C\approx${f(e9C, 1)}^\circ$; $B\approx${f(e9B, 1)}^\circ$.`], ans: S`$a\approx${f(e9a)}$, $B\approx${f(e9B, 1)}^\circ$, $C\approx${f(e9C, 1)}^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: S`$b=4$, $c=6$, $\angle A=90^\circ$. Find $a$.`, recap: "Right-angle case.", ans: S`$\sqrt{52}\approx7.21$` },
  { level: 1, q: S`$b=7$, $c=10$, $\angle A=45^\circ$. Find $a$.`, recap: "SAS.", ans: S`$\approx${f(lawC(7, 10, 45))}$` },
  { level: 1, q: "Which law do you use first for SSS?", recap: "Choose.", ans: "the cosine law" },
  { level: 2, q: "Find the largest angle of the triangle with sides 9, 11 and 16.", recap: "SSS largest.", ans: S`$\approx${f(angC(16, 9, 11), 1)}^\circ$` },
  { level: 2, q: S`$b=12$, $c=15$, $\angle A=110^\circ$. Find $a$.`, recap: "SAS obtuse.", ans: S`$\approx${f(lawC(12, 15, 110))}$` },
  { level: 2, q: "Two edges of a triangular sail are 4.2 m and 5.5 m with a 36° angle between them. Find the third edge.", recap: "Sail.", ans: S`$\approx${f(lawC(4.2, 5.5, 36))}$ m`, fig: triSAS(4.2, 5.5, 36, ["36°", "", ""]) },
  { level: 2, q: "Find the smallest angle of the triangle with sides 6, 8 and 9.", recap: "SSS smallest.", ans: S`opposite 6: $\approx${f(angC(6, 8, 9), 1)}^\circ$` },
  { level: 2, q: "Without finding angles, classify the triangle with sides 7, 8, 12 as acute, right or obtuse.", recap: "Classify.", ans: S`$49+64=113<144$: obtuse` },
  { level: 3, space: 5, q: "A parallelogram has sides 12 and 8 and one diagonal 15. Find its angles.", recap: "Parallelogram.", ans: S`$\cos\theta=\frac{144+64-225}{192}$: $\approx${f(angC(15, 12, 8), 1)}^\circ$ and $\approx${f(180 - angC(15, 12, 8), 1)}^\circ$`,
    fig: polyT([[0, 0], [12, 0], [12 + 8 * cos(PA), 8 * sin(PA)], [8 * cos(PA), 8 * sin(PA)]], ["", "", "", ""], { extra: [{ pts: [[0, 0], [12 + 8 * cos(PA), 8 * sin(PA)]], color: "red" }], marks: [[6, 0, "12"], [7, 4.2, "15"]] }) },
  { level: 3, space: 4, q: "Two boats leave port together. One travels at 14 km/h, the other at 18 km/h, on courses 62° apart. How far apart are they after 2 h?", recap: "Two boats.", ans: S`sides 28 and 36: $\approx${f(lawC(28, 36, 62), 1)}$ km` },
  { level: 3, space: 5, q: "Solve the triangle with sides 13, 14 and 15 completely.", recap: "Solve SSS.", ans: S`$${f(tA, 1)}^\circ$, $${f(tB, 1)}^\circ$, $${f(tC, 1)}^\circ$ (opposite 13, 14, 15)` },
  { level: 3, space: 4, q: "Use the cosine law to show that the triangle with sides 5, 12 and 13 has a right angle.", recap: "Prove right.", ans: S`$\cos\theta=\frac{25+144-169}{120}=0\Rightarrow\theta=90^\circ$` },
  { level: 3, space: 4, q: S`A triangle has sides $a=12$, $b=10$, $c=7$. Find $\angle A$ and the area $\frac12bc\sin A$.`, recap: "Angle then area.", ans: S`$A\approx${f(p13A, 1)}^\circ$; area $\approx${f(0.5 * 10 * 7 * sin(p13A))}$` },
];

export const WS = {
  code: "5.5",
  title: "The Cosine Law",
  bigideas: S`$a^2=b^2+c^2-2bc\cos A$ solves SAS (find a side) and, rearranged as $\cos A=\frac{b^2+c^2-a^2}{2bc}$, SSS (find an angle). It extends the Pythagorean theorem and has no ambiguous case.`,
  goals: ["Derive the cosine law.", "Solve SAS and SSS triangles.", "Choose the right law.", "Solve applied problems."],
  curriculum: "D1.6",
  vocab: [["SAS", "two sides and the contained angle"], ["SSS", "three sides"], ["Contained angle", "the angle between two given sides"]],
  hook: "Two sides of a triangle are 5 and 7. What can the third side be? Let students guess, then show how the angle between them decides it.",
  concepts: [
    ["1. Derivation", S`Place $A$ at the origin, $C=(b\cos A,b\sin A)$, $B=(c,0)$. Distance formula: $a^2=(c-b\cos A)^2+b^2\sin^2A=b^2+c^2-2bc\cos A$.${triSAS(6, 9, 50, ["A", "B", "C"], { width: 5 })}`],
    ["2. Signs", S`Acute $A$: $\cos A>0$, $a^2<b^2+c^2$. Right: equal. Obtuse: $a^2>b^2+c^2$.`],
    ["3. Choosing", S`Side–opposite-angle pair known → sine law. SAS or SSS → cosine law. After one cosine step, the sine law is fine for an angle opposite a shorter side.`],
  ],
  tips: ["Compute 2bc cos A as one product.", "Find the largest angle first in SSS.", "cos⁻¹ handles obtuse angles.", "Navigation: interior angle = 180° − turn.", "Check: largest side faces largest angle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
