// MPM2D Worksheet 7.1 — The Sine Law (teacher edition)
import { atriT, sceneT } from "./figT.mjs";
import { atri } from "../lib.mjs";

const r = Math.PI / 180;
const alt = (A, B, c) => { const b = (c * Math.sin(B * r)) / Math.sin((180 - A - B) * r), x = b * Math.cos(A * r), h = b * Math.sin(A * r); return [{ seg: [[x, 0], [x, h]], color: "red", dash: true }, { text: "h", at: [x + 0.06 * c, h / 2], color: "red", bold: true }]; };

const EXAMPLES = [
  { title: "Find a side (AAS)", q: String.raw`In acute $\triangle ABC$, $\angle A=58^\circ$, $\angle B=70^\circ$ and $a=15$. Find $b$.`,
    fig: atriT(58, 70, 15 * Math.sin(52 * r) / Math.sin(58 * r), { a: "15", b: "b", A: "58°", B: "70°" }),
    steps: [String.raw`$\frac b{\sin70^\circ}=\frac{15}{\sin58^\circ}$.`, String.raw`$b=\frac{15\sin70^\circ}{\sin58^\circ}\approx16.62$.`], ans: String.raw`$b\approx16.6$` },
  { title: "Find a side (AAS)", q: String.raw`In acute $\triangle PQR$, $\angle P=43^\circ$, $\angle Q=80^\circ$ and $p=9$. Find $q$.`,
    steps: [String.raw`$q=\frac{9\sin80^\circ}{\sin43^\circ}\approx13.00$.`], ans: String.raw`$q\approx13.0$` },
  { title: "Third angle first (ASA)", q: String.raw`In acute $\triangle ABC$, $\angle A=64^\circ$, $\angle B=43^\circ$ and $c=20$. Find $a$.`,
    steps: [String.raw`$\angle C=180^\circ-64^\circ-43^\circ=73^\circ$.`, String.raw`$a=\frac{20\sin64^\circ}{\sin73^\circ}\approx18.80$.`], ans: String.raw`$a\approx18.8$` },
  { title: "Find an angle", q: String.raw`In acute $\triangle ABC$, $a=13$, $b=16$ and $\angle B=66^\circ$. Find $\angle A$.`,
    fig: atriT(47.9, 66, 16 * Math.sin(66.1 * r) / Math.sin(66 * r), { a: "13", b: "16", B: "66°", A: "?" }),
    steps: [String.raw`$\sin A=\frac{13\sin66^\circ}{16}\approx0.742$.`, String.raw`$\angle A\approx47.9^\circ$.`], ans: String.raw`$\angle A\approx47.9^\circ$` },
  { title: "Find an angle", q: String.raw`In acute $\triangle XYZ$, $x=7.5$, $y=9$ and $\angle Y=78^\circ$. Find $\angle X$ and $\angle Z$.`,
    steps: [String.raw`$\sin X=\frac{7.5\sin78^\circ}{9}\approx0.815$, $\angle X\approx54.6^\circ$.`, String.raw`$\angle Z\approx180^\circ-78^\circ-54.6^\circ=47.4^\circ$.`], ans: String.raw`$\angle X\approx54.6^\circ$, $\angle Z\approx47.4^\circ$` },
  { title: "Developing the law", q: String.raw`In acute $\triangle ABC$, the altitude from $C$ has length $h$. Write $h$ two ways and show that $\frac a{\sin A}=\frac b{\sin B}$.`,
    fig: sceneT([...atri(56, 64, 9, { a: "a", b: "b", c: "c" }), ...alt(56, 64, 9)], 5.5, 340),
    steps: [String.raw`$h=b\sin A$ (left right triangle) and $h=a\sin B$ (right right triangle).`, String.raw`$a\sin B=b\sin A\Rightarrow\frac a{\sin A}=\frac b{\sin B}$.`], ans: String.raw`$\frac a{\sin A}=\frac b{\sin B}$` },
  { title: "Solve a triangle", q: String.raw`In acute $\triangle ABC$, $\angle A=40^\circ$, $\angle C=64^\circ$ and $b=25$. Solve the triangle.`,
    steps: [String.raw`$\angle B=76^\circ$.`, String.raw`$a=\frac{25\sin40^\circ}{\sin76^\circ}\approx16.56$; $c=\frac{25\sin64^\circ}{\sin76^\circ}\approx23.16$.`], ans: String.raw`$\angle B=76^\circ$, $a\approx16.6$, $c\approx23.2$` },
  { title: "Common ratio", q: String.raw`In a triangle, $c=12$ and $\angle C=52^\circ$. Find $\frac c{\sin C}$ and use it to find $a$ if $\angle A=70^\circ$.`,
    steps: [String.raw`$\frac{12}{\sin52^\circ}\approx15.23$.`, String.raw`$a\approx15.23\sin70^\circ\approx14.31$.`], ans: String.raw`$\approx15.23$; $a\approx14.3$` },
  { title: "Surveying", q: String.raw`Two markers $A$ and $B$ are $300$ m apart. A buoy $C$ makes $\angle CAB=65^\circ$ and $\angle CBA=61^\circ$. How far is the buoy from each marker?`,
    fig: atriT(65, 61, 300, { c: "300 m", A: "65°", B: "61°", names: ["A", "B", "C"], fill: "green", color: "green" }),
    steps: [String.raw`$\angle C=54^\circ$.`, String.raw`$AC=\frac{300\sin61^\circ}{\sin54^\circ}\approx324.3$; $BC=\frac{300\sin65^\circ}{\sin54^\circ}\approx336.1$.`], ans: String.raw`$324.3$ m and $336.1$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`In acute $\triangle ABC$, $\angle A=50^\circ$, $\angle B=65^\circ$ and $a=10$. Find $b$.`, recap: "Find a side.", ans: String.raw`$\approx11.8$` },
  { level: 1, q: String.raw`In acute $\triangle ABC$, $\angle B=75^\circ$, $\angle C=55^\circ$ and $b=18$. Find $c$.`, recap: "Find a side.", ans: String.raw`$\approx15.3$` },
  { level: 1, q: String.raw`In acute $\triangle ABC$, $a=6$, $b=8$ and $\angle B=70^\circ$. Find $\angle A$.`, recap: "Find an angle.", ans: String.raw`$\approx44.8^\circ$` },
  { level: 2, q: String.raw`Find $a$ and $b$ in the triangle shown.`, recap: "ASA.", ans: String.raw`$\angle C=58^\circ$; $a\approx12.3$, $b\approx15.9$`, fig: atriT(48, 74, 14, { c: "14", a: "a", b: "b", A: "48°", B: "74°" }) },
  { level: 2, q: String.raw`In acute $\triangle ABC$, $a=20$, $\angle A=80^\circ$ and $b=15$. Find $\angle B$, $\angle C$ and $c$.`, recap: "SSA, then solve.", ans: String.raw`$\angle B\approx47.6^\circ$, $\angle C\approx52.4^\circ$, $c\approx16.1$` },
  { level: 2, q: String.raw`Show the steps that develop the sine law from the altitude in the triangle shown.`, recap: "Develop the law.", ans: String.raw`$h=b\sin A=a\sin B$, so $\frac a{\sin A}=\frac b{\sin B}$`, fig: sceneT([...atri(62, 57, 9, { a: "a", b: "b", c: "c" }), ...alt(62, 57, 9)], 5.5, 340) },
  { level: 2, q: String.raw`In acute $\triangle PQR$, $\angle P=72^\circ$, $\angle R=48^\circ$ and $q=12$. Find $p$.`, recap: "Third angle first.", ans: String.raw`$\angle Q=60^\circ$; $p\approx13.2$` },
  { level: 2, q: String.raw`Explain why the sine law cannot be used directly when you know only three sides of a triangle.`, recap: "When it fails.", ans: "no side is known together with its opposite angle; use the cosine law" },
  { level: 3, space: 5, q: String.raw`Points $A$ and $B$ are $80$ m apart on a riverbank. A tree $C$ on the other bank makes $\angle CAB=72^\circ$ and $\angle CBA=63^\circ$. Find $AC$ and the width of the river.`, recap: "River width.", ans: String.raw`$AC\approx100.8$ m; width $\approx95.9$ m`, fig: atriT(72, 63, 80, { c: "80 m", A: "72°", B: "63°", names: ["A", "B", "C"], fill: "green", color: "green" }) },
  { level: 3, space: 5, q: String.raw`Show that in a right triangle (with $\angle C=90^\circ$) the sine law gives $\sin A=\frac ac$.`, recap: "Right-triangle check.", ans: String.raw`$\frac a{\sin A}=\frac c{\sin90^\circ}=c$` },
  { level: 3, space: 5, q: String.raw`In acute $\triangle ABC$, $\angle A=2\angle B$, $\angle C=72^\circ$ and $c=10$. Find $a$ and $b$.`, recap: "Angles from a relation.", ans: String.raw`$3\angle B=108^\circ$: $B=36^\circ$, $A=72^\circ$; $a=10$, $b\approx6.2$` },
  { level: 3, space: 5, q: String.raw`Two lighthouses are $12$ km apart. A ship is seen at $55^\circ$ from one and $68^\circ$ from the other (angles measured from the line joining them). Which lighthouse is the ship closer to, and how far is it?`, recap: "Ship position.", ans: String.raw`third angle $57^\circ$; closer to the $68^\circ$ lighthouse: $\frac{12\sin55^\circ}{\sin57^\circ}\approx11.7$ km` },
  { level: 3, space: 5, q: String.raw`A student writes $\frac a{\sin B}=\frac b{\sin A}$. Explain the error using a sketch and correct it.`, recap: "Find the error.", ans: String.raw`each side must be divided by the sine of its opposite angle: $\frac a{\sin A}=\frac b{\sin B}$` },
];

export const WS = {
  code: "7.1",
  title: "The Sine Law",
  bigideas: String.raw`An altitude from $C$ splits an acute triangle into two right triangles, so $h=b\sin A=a\sin B$, which gives the sine law $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}$. Use it when a side and its opposite angle are known, plus one more part (AAS, ASA after finding the third angle, or SSA). Put the unknown on top; to find an angle, solve for its sine and use $\sin^{-1}$.`,
  goals: ["Develop the sine law from an altitude.", "Find sides (AAS, ASA).", "Find angles (SSA in acute triangles).", "Solve surveying problems."],
  curriculum: "T3",
  vocab: [["Sine law", "$\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}$"], ["Opposite side", "$a$ is across from $\\angle A$"], ["Altitude", "perpendicular from a vertex"]],
  hook: String.raw`Give the class a triangle with no right angle and ask them to find a side using SOH CAH TOA. Let them discover that they need to draw an altitude.`,
  concepts: [
    ["1. Development", String.raw`$h=b\sin A=a\sin B$.
${sceneT([...atri(58, 66, 9, { a: "a", b: "b", c: "c" }), ...alt(58, 66, 9)], 5.5, 340)}`],
    ["2. Finding a side", String.raw`$\frac a{\sin A}=\frac b{\sin B}$ with the unknown side on top.`],
    ["3. Finding an angle", String.raw`$\sin B=\frac{b\sin A}a$, then $\sin^{-1}$.`],
  ],
  tips: ["Pair sides with opposite angles.", "Third angle first.", "Unknown on top.", "Degree mode.", "Largest side ↔ largest angle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
