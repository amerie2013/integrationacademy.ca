// MCF3M Worksheet 5.4 — The Cosine Law (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { sasD, sin, cos, acos, asin } from "../../figs.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const L = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const Ang = (a, b, c) => acos((b * b + c * c - a * a) / (2 * b * c));
const SAS = (b, c, A, labels = ["A", "B", "C"]) => svgT(sasD(b, c, A, labels), 5.4);
const SSS = (a, b, c, labels) => SAS(b, c, Ang(a, b, c), labels);

const EXAMPLES = [
  { title: "SAS", q: S`$b=11$, $c=14$, $A=52^\circ$. Find $a$.`, fig: SAS(11, 14, 52),
    steps: [S`$a^2=121+196-308\cos52^\circ\approx${f(L(11, 14, 52) ** 2)}$.`, S`$a\approx${f(L(11, 14, 52))}$.`], ans: S`$\approx${f(L(11, 14, 52))}$` },
  { title: "SSS angle", q: S`Sides $a=6$, $b=9$, $c=11$. Find $A$.`, fig: SSS(6, 9, 11),
    steps: [S`$\cos A=\frac{81+121-36}{198}\approx${f((81 + 121 - 36) / 198)}$.`, S`$A\approx${f(Ang(6, 9, 11))}^\circ$.`], ans: S`$\approx${f(Ang(6, 9, 11))}^\circ$` },
  { title: "Largest angle", q: S`Find the largest angle of a triangle with sides $8$, $13$, $15$.`, fig: SSS(15, 8, 13),
    steps: [S`Largest angle is opposite $15$.`, S`$\cos C=\frac{64+169-225}{208}\approx${f(8 / 208)}$.`, S`$C\approx${f(Ang(15, 8, 13))}^\circ$ (acute).`], ans: S`$\approx${f(Ang(15, 8, 13))}^\circ$` },
  { title: "Pythagoras connection", q: S`Use the cosine law with $A=90^\circ$, $b=5$, $c=12$.`, fig: SAS(5, 12, 90),
    steps: [S`$\cos90^\circ=0$: $a^2=25+144=169$.`, S`$a=13$: Pythagoras is a special case \checkmark`], ans: S`$13$` },
  { title: "Ships", q: S`Two ships leave port on courses $55^\circ$ apart, travelling $28$ km and $40$ km. How far apart are they?`, fig: SAS(28, 40, 55, ["port", "", ""]),
    steps: [S`$d^2=784+1600-2240\cos55^\circ$.`, S`$d\approx${f(L(28, 40, 55))}$ km.`], ans: S`$\approx${f(L(28, 40, 55))}$ km` },
  { title: "Tunnel length", q: S`From point $C$, $CA=520$ m and $CB=610$ m with $\angle C=72^\circ$. Find tunnel $AB$.`, fig: SAS(520, 610, 72, ["C", "B", "A"]),
    steps: [S`$AB^2=520^2+610^2-2(520)(610)\cos72^\circ$.`, S`$AB\approx${f(L(520, 610, 72))}$ m.`], ans: S`$\approx${f(L(520, 610, 72))}$ m` },
  { title: "Cosine then sine law", q: S`Solve $b=9$, $c=12$, $A=48^\circ$.`, fig: SAS(9, 12, 48),
    steps: [S`$a\approx${f(L(9, 12, 48))}$.`, S`$\sin B=\frac{9\sin48^\circ}{${f(L(9, 12, 48))}}\Rightarrow B\approx${f(asin((9 * sin(48)) / L(9, 12, 48)))}^\circ$.`, S`$C\approx${f(132 - asin((9 * sin(48)) / L(9, 12, 48)))}^\circ$.`],
    ans: S`$a\approx${f(L(9, 12, 48))}$, $B\approx${f(asin((9 * sin(48)) / L(9, 12, 48)))}^\circ$` },
  { title: "Park diagonal", q: S`A triangular park has sides $45$ m and $70$ m with a $66^\circ$ angle between them. Find the third side.`, fig: SAS(45, 70, 66),
    steps: [S`Cosine law: $\approx${f(L(45, 70, 66))}$ m.`], ans: S`$\approx${f(L(45, 70, 66))}$ m` },
  { title: "All angles", q: S`Find all angles of a $10$-$12$-$14$ triangle.`, fig: SSS(10, 12, 14),
    steps: [S`Opposite 14: $\approx${f(Ang(14, 10, 12))}^\circ$; opposite 12: $\approx${f(Ang(12, 10, 14))}^\circ$.`, S`Opposite 10: $\approx${f(180 - Ang(14, 10, 12) - Ang(12, 10, 14))}^\circ$.`],
    ans: S`$${f(Ang(10, 12, 14))}^\circ$, $${f(Ang(12, 10, 14))}^\circ$, $${f(Ang(14, 10, 12))}^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: S`$b=5$, $c=8$, $A=60^\circ$. Find $a$.`, ans: S`$7$` },
  { level: 1, q: S`Sides $7$, $8$, $9$: find the angle opposite $9$.`, ans: S`$\approx${f(Ang(9, 7, 8))}^\circ$` },
  { level: 1, q: S`$a=12$, $b=10$, $C=40^\circ$. Find $c$.`, ans: S`$\approx${f(L(12, 10, 40))}$` },
  { level: 2, q: S`Two paths $85$ m and $110$ m meet at $58^\circ$. Distance between their ends?`, ans: S`$\approx${f(L(85, 110, 58))}$ m` },
  { level: 2, q: S`Find the smallest angle of a $9$-$11$-$13$ triangle.`, ans: S`$\approx${f(Ang(9, 11, 13))}^\circ$` },
  { level: 2, q: S`Ships travel $15$ km and $22$ km on courses $75^\circ$ apart. Distance apart?`, ans: S`$\approx${f(L(15, 22, 75))}$ km` },
  { level: 2, q: S`Solve $b=6$, $c=7$, $A=70^\circ$.`, ans: S`$a\approx${f(L(6, 7, 70))}$, $B\approx${f(asin((6 * sin(70)) / L(6, 7, 70)))}^\circ$` },
  { level: 2, q: S`Show that the cosine law gives $a^2=b^2+c^2$ when $A=90^\circ$.`, ans: S`$\cos90^\circ=0$` },
  { level: 3, space: 5, q: S`A plane flies $180$ km, then turns so the angle between the legs is $65^\circ$, and flies $240$ km. How far is it from the start?`, ans: S`$\approx${f(L(180, 240, 65))}$ km` },
  { level: 3, space: 5, q: S`A triangular lot has sides $30$, $40$, $45$ m. Find its largest angle and its area.`, ans: S`$\approx${f(Ang(45, 30, 40))}^\circ$; area $\approx${f(0.5 * 30 * 40 * sin(Ang(45, 30, 40)))}$ m$^2$` },
  { level: 3, space: 5, q: S`In a parallelogram with sides $8$ and $5$ and an angle of $64^\circ$, find the shorter diagonal.`, ans: S`$\approx${f(L(8, 5, 64))}$` },
  { level: 3, space: 5, q: S`Derive $a^2=b^2+c^2-2bc\cos A$ using a height from $C$ and Pythagoras.`, ans: S`$h^2=b^2-x^2$, $a^2=h^2+(c-x)^2$, $x=b\cos A$` },
  { level: 3, space: 5, q: S`Two wires $25$ m and $28$ m from the same point on the pole reach the ground $30$ m apart. Find the angle between the wires.`, ans: S`$\approx${f(Ang(30, 25, 28))}^\circ$` },
];

export const WS = {
  code: "5.4",
  title: "The Cosine Law",
  bigideas: S`For any triangle, $a^2=b^2+c^2-2bc\cos A$. It finds the third side when two sides and the contained angle are known (SAS), and any angle when all three sides are known (SSS): $\cos A=\frac{b^2+c^2-a^2}{2bc}$. When $A=90^\circ$ it becomes Pythagoras. After one cosine-law step, the sine law can usually finish the triangle.`,
  goals: ["State the cosine law.", "Find a side (SAS).", "Find an angle (SSS).", "Combine with the sine law; solve problems."],
  curriculum: "C1.3, C1.4, C1.5",
  vocab: [["Contained angle", "between two known sides"], ["SAS", "two sides + contained angle"], ["SSS", "three sides"], ["Angle form", "$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$"]],
  hook: S`Two hikers leave a camp on paths $60^\circ$ apart and walk $3$ km and $5$ km. Can you find the distance between them with SOH CAH TOA alone?`,
  concepts: [
    ["1. The law", S`$a^2=b^2+c^2-2bc\cos A$, and similarly for $b^2$ and $c^2$.
${SAS(9, 12, 40)}`],
    ["2. When to use it", S`SAS: third side. SSS: angles (find the largest first). Otherwise use the sine law.`],
  ],
  tips: ["Multiply $2bc\\cos A$ before subtracting.", "Largest angle first in SSS.", "Square root at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
