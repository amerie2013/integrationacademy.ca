// MCF3M Worksheet 5.5 — Solving Acute-Triangle Problems (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { sasD, triD, rightD, sin, cos, tan, acos, asin, atan } from "../../figs.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const L = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const Ang = (a, b, c) => acos((b * b + c * c - a * a) / (2 * b * c));
const side = (k, ak, ax) => (k * sin(ax)) / sin(ak);
const SAS = (b, c, A, labels = ["A", "B", "C"]) => svgT(sasD(b, c, A, labels), 5.4);

const EXAMPLES = [
  { title: "Choose: right triangle", q: S`A guy wire makes $62^\circ$ with the ground and is fixed $9$ m from the pole's base. How high up the pole is it attached?`,
    fig: svgT(rightD(9, 9 * tan(62), ["62°", "", ""], [[4.5, -1, "9 m"]]), 5),
    steps: [S`Right angle at the pole: $\tan62^\circ=\frac h9$.`, S`$h\approx${f(9 * tan(62))}$ m.`], ans: S`$\approx${f(9 * tan(62))}$ m` },
  { title: "Choose: sine law", q: S`$A=58^\circ$, $B=67^\circ$, $c=30$. Find $a$.`, fig: SAS(side(30, 55, 67), 30, 58),
    steps: [S`Two angles and a side: sine law. $C=55^\circ$.`, S`$a=\frac{30\sin58^\circ}{\sin55^\circ}\approx${f(side(30, 55, 58))}$.`], ans: S`$\approx${f(side(30, 55, 58))}$` },
  { title: "Choose: cosine law", q: S`Sides $13$ and $17$ with contained angle $49^\circ$. Find the third side.`, fig: SAS(13, 17, 49),
    steps: [S`SAS: cosine law.`, S`$\approx${f(L(13, 17, 49))}$.`], ans: S`$\approx${f(L(13, 17, 49))}$` },
  { title: "Area (SAS)", q: S`Find the area of a triangle with sides $16$ and $21$ and contained angle $57^\circ$.`, fig: SAS(16, 21, 57),
    steps: [S`$\tfrac12(16)(21)\sin57^\circ\approx${f(168 * sin(57))}$.`], ans: S`$\approx${f(168 * sin(57))}$` },
  { title: "Area (SSS)", q: S`Find the area of a triangle with sides $11$, $14$, $17$.`, fig: SAS(11, 14, Ang(17, 11, 14)),
    steps: [S`Angle opposite $17$: $\approx${f(Ang(17, 11, 14))}^\circ$.`, S`Area $\tfrac12(11)(14)\sin(\cdot)\approx${f(77 * sin(Ang(17, 11, 14)))}$.`], ans: S`$\approx${f(77 * sin(Ang(17, 11, 14)))}$` },
  { title: "Roof truss", q: S`Rafters $7$ m and $6$ m meet at the peak over a $9$ m span. Find the peak angle.`, fig: SAS(7, 9, Ang(6, 7, 9), ["", "", "peak"]),
    steps: [S`SSS; peak opposite the span: $\cos P=\frac{49+36-81}{84}$.`, S`$P\approx${f(Ang(9, 7, 6))}^\circ$.`], ans: S`$\approx${f(Ang(9, 7, 6))}^\circ$` },
  { title: "Height via sine law", q: S`Observers $120$ m apart on opposite sides of a tower see its top at $48^\circ$ and $63^\circ$. Find the height.`, fig: SAS(side(120, 69, 63), 120, 48, ["A", "B", "T"]),
    steps: [S`Angle at top $69^\circ$; $AT=\frac{120\sin63^\circ}{\sin69^\circ}\approx${f(side(120, 69, 63))}$.`, S`Height $=AT\sin48^\circ\approx${f(side(120, 69, 63) * sin(48))}$ m.`], ans: S`$\approx${f(side(120, 69, 63) * sin(48))}$ m` },
  { title: "Navigation", q: S`A boat is $8$ km from buoy $P$ and $10$ km from buoy $Q$, which are $11$ km apart. Find the angle at the boat.`, fig: SAS(8, 10, Ang(11, 8, 10), ["boat", "Q", "P"]),
    steps: [S`SSS: $\cos B=\frac{64+100-121}{160}$.`, S`$B\approx${f(Ang(11, 8, 10))}^\circ$.`], ans: S`$\approx${f(Ang(11, 8, 10))}^\circ$` },
  { title: "Two steps", q: S`In $\triangle ABC$, $b=10$, $c=13$, $A=62^\circ$. Find $a$, then $C$.`, fig: SAS(10, 13, 62),
    steps: [S`$a\approx${f(L(10, 13, 62))}$.`, S`$\sin C=\frac{13\sin62^\circ}{a}\Rightarrow C\approx${f(asin((13 * sin(62)) / L(10, 13, 62)))}^\circ$ (acute, check: $B\approx${f(118 - asin((13 * sin(62)) / L(10, 13, 62)))}^\circ$).`], ans: S`$a\approx${f(L(10, 13, 62))}$, $C\approx${f(asin((13 * sin(62)) / L(10, 13, 62)))}^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: S`Which law: two angles and one side?`, ans: S`sine law` },
  { level: 1, q: S`Which law: three sides, find an angle?`, ans: S`cosine law` },
  { level: 1, q: S`Area of a triangle with sides $10$, $12$ and contained angle $45^\circ$.`, ans: S`$\approx${f(60 * sin(45))}$` },
  { level: 2, q: S`$A=64^\circ$, $C=71^\circ$, $b=18$. Find $a$.`, ans: S`$\approx${f(side(18, 45, 64))}$` },
  { level: 2, q: S`Sides $14$, $16$, $20$: find the largest angle.`, ans: S`$\approx${f(Ang(20, 14, 16))}^\circ$` },
  { level: 2, q: S`Two sides $9$ and $12$ with contained angle $76^\circ$: find the third side and the area.`, ans: S`$\approx${f(L(9, 12, 76))}$; $\approx${f(54 * sin(76))}$` },
  { level: 2, q: S`A ladder $7$ m long reaches $6.3$ m up a wall. Find its angle with the ground.`, ans: S`$\approx${f(asin(0.9))}^\circ$` },
  { level: 2, q: S`Observers $200$ m apart see a balloon at $55^\circ$ and $65^\circ$ (opposite sides). Find its height.`, ans: S`$\approx${f(side(200, 60, 65) * sin(55))}$ m` },
  { level: 3, space: 5, q: S`A triangular field has sides $120$, $150$, $170$ m. Find its area.`, ans: S`$\approx${f(0.5 * 120 * 150 * sin(Ang(170, 120, 150)))}$ m$^2$` },
  { level: 3, space: 5, q: S`From $A$, $AB=500$ m and $AC=650$ m, $\angle A=58^\circ$. Find $BC$ and $\angle B$.`, ans: S`$BC\approx${f(L(500, 650, 58))}$; $B\approx${f(asin((650 * sin(58)) / L(500, 650, 58)))}^\circ$` },
  { level: 3, space: 5, q: S`A triangular sail has sides $4$ m, $5$ m and $6$ m. Find all its angles.`, ans: S`$${f(Ang(4, 5, 6))}^\circ$, $${f(Ang(5, 4, 6))}^\circ$, $${f(Ang(6, 4, 5))}^\circ$` },
  { level: 3, space: 5, q: S`Explain how to decide between the sine law and the cosine law, with one example of each.`, ans: S`pair known $\to$ sine; SAS/SSS $\to$ cosine` },
  { level: 3, space: 5, q: S`Two radio towers $15$ km apart; a car is $9$ km from one and $12$ km from the other. Find the angle at the car.`, ans: S`$90^\circ$ (a 9-12-15 right triangle)` },
];

export const WS = {
  code: "5.5",
  title: "Solving Acute-Triangle Problems",
  bigideas: S`Choosing the tool is the key step: right triangles use SOH CAH TOA; a complete side--opposite-angle pair uses the sine law; SAS and SSS use the cosine law. Multi-step problems chain these, and the area of any triangle is $\tfrac12ab\sin C$, because the height onto $a$ is $b\sin C$.`,
  goals: ["Choose a method from the data.", "Solve multi-step problems.", "Find areas with $\\tfrac12ab\\sin C$.", "Model construction, navigation and surveying."],
  curriculum: "C1.4, C1.5",
  vocab: [["Decision chart", "data $\\to$ method"], ["Area formula", "$\\tfrac12ab\\sin C$"], ["Multi-step", "result feeds next step"], ["Truss", "triangular frame"]],
  hook: S`Give three triangle problems on cards. For each, decide the method before calculating anything.`,
  concepts: [
    ["1. Decision chart", S`\begin{center}\begin{tabular}{@{}ll@{}}right triangle & SOH CAH TOA\\ AAS/ASA/SSA & sine law\\ SAS/SSS & cosine law\\ area (SAS) & $\tfrac12ab\sin C$\end{tabular}\end{center}`],
    ["2. Area", S`Height onto side $a$ is $b\sin C$, so area $=\tfrac12ab\sin C$.
${SAS(9, 12, 64)}`],
  ],
  tips: ["Always draw and label.", "Keep full precision.", "Check angle sum and side order."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
