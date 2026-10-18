// MPM2D Worksheet 7.3 — Choosing the Right Law (teacher edition)
import { atriT, rtA, sceneT, polygon } from "./figT.mjs";

const r = Math.PI / 180;
const sas = (b, c, A, l = {}) => { const C = [b * Math.cos(A * r), b * Math.sin(A * r)]; return sceneT(polygon([[0, 0], [c, 0], C], { sides: [l.c ?? "", l.a ?? "", l.b ?? ""], names: ["A", "B", "C"], angles: l.A ? [[0, l.A]] : [] }), 5.5, 340); };

const EXAMPLES = [
  { title: "AAS → sine law", q: String.raw`In acute $\triangle ABC$, $\angle A=55^\circ$, $\angle B=70^\circ$ and $a=13$. Which law? Find $b$.`,
    steps: [String.raw`$a$ and $\angle A$ are a pair: sine law.`, String.raw`$b=\frac{13\sin70^\circ}{\sin55^\circ}\approx14.91$.`], ans: String.raw`$b\approx14.9$` },
  { title: "SAS → cosine law", q: String.raw`In acute $\triangle ABC$, $b=8$, $c=10$ and $\angle A=58^\circ$. Find $a$.`,
    fig: sas(8, 10, 58, { b: "8", c: "10", a: "a", A: "58°" }),
    steps: [String.raw`No pair: cosine law.`, String.raw`$a^2=64+100-160\cos58^\circ\approx79.21$, $a\approx8.90$.`], ans: String.raw`$a\approx8.9$` },
  { title: "SSS → cosine law", q: String.raw`A triangle has sides $9$, $11$ and $12$. Find its smallest angle.`,
    steps: [String.raw`Opposite $9$: $\cos\theta=\frac{121+144-81}{2(11)(12)}=\frac{184}{264}$.`, String.raw`$\theta\approx45.8^\circ$.`], ans: String.raw`$\approx45.8^\circ$` },
  { title: "Right triangle → ratios", q: String.raw`A right triangle has hypotenuse $14$ and a $36^\circ$ angle. Find the side opposite it.`,
    fig: rtA(36, { hyp: "14", opp: "x", theta: "36°" }),
    steps: [String.raw`No law needed: $x=14\sin36^\circ\approx8.23$.`], ans: String.raw`$\approx8.2$` },
  { title: "SSA → sine law", q: String.raw`In acute $\triangle ABC$, $a=10$, $b=12$ and $\angle B=74^\circ$. Find $\angle A$ and $\angle C$.`,
    steps: [String.raw`$b$ and $\angle B$ are a pair: $\sin A=\frac{10\sin74^\circ}{12}\approx0.801$.`, String.raw`$\angle A\approx53.2^\circ$; $\angle C\approx52.8^\circ$.`], ans: String.raw`$53.2^\circ$ and $52.8^\circ$` },
  { title: "Both laws", q: String.raw`In acute $\triangle ABC$, $b=11$, $c=13$ and $\angle A=49^\circ$. Solve the triangle.`,
    fig: sas(11, 13, 49, { b: "11", c: "13", a: "a", A: "49°" }),
    steps: [String.raw`Cosine law: $a^2=121+169-286\cos49^\circ\approx102.37$, $a\approx10.12$.`, String.raw`Sine law: $\sin B=\frac{11\sin49^\circ}{10.12}$, $\angle B\approx55.1^\circ$; $\angle C\approx75.9^\circ$.`], ans: String.raw`$a\approx10.1$, $\angle B\approx55.1^\circ$, $\angle C\approx75.9^\circ$` },
  { title: "ASA with the side between", q: String.raw`In acute $\triangle ABC$, $\angle A=62^\circ$, $\angle B=48^\circ$ and $c=16$. Find $a$ and $b$.`,
    fig: atriT(62, 48, 16, { c: "16", A: "62°", B: "48°", a: "a", b: "b" }),
    steps: [String.raw`$\angle C=70^\circ$ — now $c$ and $\angle C$ are a pair.`, String.raw`$a=\frac{16\sin62^\circ}{\sin70^\circ}\approx15.03$; $b=\frac{16\sin48^\circ}{\sin70^\circ}\approx12.65$.`], ans: String.raw`$a\approx15.0$, $b\approx12.7$` },
  { title: "Spot the case", q: String.raw`Which law is needed first? (a) $a$, $b$, $\angle C$ (b) $\angle A$, $\angle B$, $c$ (c) $a$, $b$, $c$ (d) $a$, $\angle A$, $b$.`,
    steps: [String.raw`(a) SAS: cosine. (b) ASA: sine (after $\angle C$). (c) SSS: cosine. (d) SSA: sine.`], ans: "cosine, sine, cosine, sine" },
  { title: "A common mix-up", q: String.raw`A student uses the cosine law with $b=9$, $c=12$ and $\angle B=50^\circ$. Why is that not SAS, and what should be used?`,
    steps: [String.raw`$\angle B$ is opposite $b$, not between $b$ and $c$.`, String.raw`$b$ and $\angle B$ are a pair: use the sine law to find $\angle C$.`], ans: "it is SSA; use the sine law" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Which law finds $c$ when $a$, $b$ and $\angle C$ are known?`, recap: "Choose.", ans: "cosine law (SAS)" },
  { level: 1, q: String.raw`Which law finds $b$ when $\angle A$, $\angle B$ and $a$ are known?`, recap: "Choose.", ans: "sine law (AAS)" },
  { level: 1, q: String.raw`Which law finds an angle when all three sides are known?`, recap: "Choose.", ans: "cosine law (SSS)" },
  { level: 2, q: String.raw`Solve the triangle shown.`, recap: "SAS, then sine.", ans: String.raw`$a\approx9.5$; $\angle B\approx54.0^\circ$ (opposite $10$), $\angle C\approx76.0^\circ$`, fig: sas(10, 12, 50, { b: "10", c: "12", a: "a", A: "50°" }) },
  { level: 2, q: String.raw`In acute $\triangle ABC$, $\angle B=66^\circ$, $\angle C=51^\circ$ and $a=20$. Find $b$ and $c$.`, recap: "ASA.", ans: String.raw`$\angle A=63^\circ$; $b\approx20.5$, $c\approx17.4$` },
  { level: 2, q: String.raw`Find all three angles of a triangle with sides $5$, $6$ and $7$.`, recap: "SSS.", ans: String.raw`$\approx44.4^\circ$, $57.1^\circ$, $78.5^\circ$` },
  { level: 2, q: String.raw`In acute $\triangle ABC$, $a=14$, $\angle A=72^\circ$ and $c=11$. Find $\angle C$.`, recap: "SSA.", ans: String.raw`$\approx48.4^\circ$` },
  { level: 2, q: String.raw`A right triangle has legs $5$ and $9$. Find its smaller acute angle. Why is no law needed?`, recap: "Right triangle.", ans: String.raw`$\tan^{-1}\frac59\approx29.1^\circ$; it has a right angle` },
  { level: 3, space: 5, q: String.raw`Make a flow chart that decides which tool to use for any triangle you are given.`, recap: "Flow chart.", ans: "right angle? → ratios; side–angle pair? → sine law; otherwise → cosine law" },
  { level: 3, space: 5, q: String.raw`Solve the triangle with $\angle A=58^\circ$, $b=15$ and $c=18$ completely. Show how you checked your answer.`, recap: "Solve and check.", ans: String.raw`$a\approx16.2$; $\angle B\approx51.7^\circ$, $\angle C\approx70.3^\circ$; angles add to $180^\circ$` },
  { level: 3, space: 5, q: String.raw`Can you solve a triangle if you know only its three angles? Explain.`, recap: "AAA.", ans: "no: the shape is fixed but not the size — infinitely many similar triangles" },
  { level: 3, space: 5, q: String.raw`Explain why both laws reduce to familiar right-triangle facts when one angle is $90^\circ$.`, recap: "Right angle.", ans: String.raw`sine law: $\sin A=\frac ac$; cosine law: $\cos90^\circ=0$ gives Pythagoras` },
  { level: 3, space: 5, q: String.raw`Two sides of an acute triangle are $9$ and $13$ and the angle opposite $13$ is $70^\circ$. Solve the triangle, explaining your choice of law at each step.`, recap: "SSA solve.", ans: String.raw`sine law: $\angle$ opposite $9\approx40.6^\circ$; third angle $\approx69.4^\circ$; third side $\approx12.96$` },
];

export const WS = {
  code: "7.3",
  title: "Choosing the Right Law",
  bigideas: String.raw`If the triangle has a right angle, use the primary ratios. Otherwise ask whether a side is known together with its opposite angle: if yes (AAS, ASA after the third angle, or SSA in an acute triangle), use the sine law; if not (SAS or SSS), use the cosine law first — it creates a side–angle pair, and the sine law finishes the triangle. Check that the angles add to $180^\circ$ and the sides are in the same order as their opposite angles.`,
  goals: ["Classify the given information.", "Choose the law.", "Solve whole triangles with both laws.", "Check solutions."],
  curriculum: "T3",
  vocab: [["AAS/ASA", "two angles and a side"], ["SAS", "two sides and the included angle"], ["SSS", "three sides"]],
  hook: String.raw`Show four triangles with different information marked and ask the class to sort them into “sine law” and “cosine law” before any calculation.`,
  concepts: [
    ["1. The key question", String.raw`Is a side known with its opposite angle?`],
    ["2. Decision", String.raw`Right angle → ratios; pair → sine; SAS/SSS → cosine.
${atriT(58, 64, 9, { a: "a", b: "b", c: "c" }, 4.5)}`],
    ["3. Finishing", String.raw`Cosine law first, then the sine law, then $180^\circ$.`],
  ],
  tips: ["Included angle for SAS.", "Third angle first in ASA.", "Unrounded values.", "Check the angle sum.", "Right angle: no law needed."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
