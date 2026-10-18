// MPM2D Worksheet 6.3 — The Primary Trigonometric Ratios (teacher edition)
import { sceneT, rtT } from "./figT.mjs";
import { rt } from "../lib.mjs";

const mv = (items, dx) => items.map((it) => { const f = (p) => [p[0] + dx, p[1]]; const o = { ...it }; for (const k of ["poly", "seg", "dim", "right", "arc"]) if (o[k]) o[k] = o[k].map(f); if (o.at) o.at = f(o.at); return o; });

const EXAMPLES = [
  { title: "All three ratios", q: String.raw`A right triangle has sides $6$, $8$, $10$. For the angle $\theta$ opposite the side $6$, write $\sin\theta$, $\cos\theta$ and $\tan\theta$.`,
    fig: rtT(8, 6, { adj: "8", opp: "6", hyp: "10", theta: "θ" }),
    steps: [String.raw`$\sin\theta=\frac6{10}=0.6$, $\cos\theta=\frac8{10}=0.8$, $\tan\theta=\frac68=0.75$.`], ans: String.raw`$0.6$, $0.8$, $0.75$` },
  { title: "Exact fractions", q: String.raw`A right triangle has legs $9$ and $40$ and hypotenuse $41$. For the angle opposite $9$, write the three ratios.`,
    steps: [String.raw`$\sin\theta=\frac9{41}$, $\cos\theta=\frac{40}{41}$, $\tan\theta=\frac9{40}$.`], ans: String.raw`$\frac9{41}$, $\frac{40}{41}$, $\frac9{40}$` },
  { title: "The other angle", q: String.raw`In the same $9$-$40$-$41$ triangle, write the ratios for the angle opposite $40$.`,
    fig: rtT(40, 9, { adj: "40", opp: "9", hyp: "41", theta: "α", other: "β" }),
    steps: [String.raw`Opposite and adjacent swap: $\sin\beta=\frac{40}{41}$, $\cos\beta=\frac9{41}$, $\tan\beta=\frac{40}9$.`], ans: String.raw`$\frac{40}{41}$, $\frac9{41}$, $\frac{40}9$` },
  { title: "Find the hypotenuse first", q: String.raw`A right triangle has legs $8$ and $15$. Find the ratios for the angle opposite $8$.`,
    steps: [String.raw`$c=\sqrt{64+225}=17$.`, String.raw`$\sin\theta=\frac8{17}$, $\cos\theta=\frac{15}{17}$, $\tan\theta=\frac8{15}$.`], ans: String.raw`$\frac8{17}$, $\frac{15}{17}$, $\frac8{15}$` },
  { title: "Similar triangles, same ratio", q: String.raw`Show that $\sin\theta$ is the same in a $5$-$12$-$13$ triangle and a $15$-$36$-$39$ triangle ($\theta$ opposite the shortest side).`,
    fig: sceneT([...rt(12, 5, { adj: "12", opp: "5", hyp: "13", theta: "θ" }), ...mv(rt(36, 15, { adj: "36", opp: "15", hyp: "39", theta: "θ", fill: "green" }), 15)], 6.5, 440),
    steps: [String.raw`$\frac5{13}$ and $\frac{15}{39}=\frac5{13}$.`, String.raw`The triangles are similar ($k=3$).`], ans: String.raw`both $\frac5{13}$` },
  { title: "Calculator values", q: String.raw`Evaluate $\sin48^\circ$, $\cos15^\circ$ and $\tan33^\circ$ to four decimal places.`,
    steps: [String.raw`Degree mode: $0.7431$, $0.9659$, $0.6494$.`], ans: String.raw`$0.7431$, $0.9659$, $0.6494$` },
  { title: "A missing leg", q: String.raw`A right triangle has hypotenuse $25$ and one leg $20$. Find the ratios for the angle opposite the other leg.`,
    steps: [String.raw`Other leg $\sqrt{625-400}=15$.`, String.raw`$\sin\theta=\frac{15}{25}=0.6$, $\cos\theta=\frac{20}{25}=0.8$, $\tan\theta=\frac{15}{20}=0.75$.`], ans: String.raw`$0.6$, $0.8$, $0.75$` },
  { title: "Impossible values", q: String.raw`Which value is impossible for an acute angle: $\sin\theta=1.2$, $\cos\theta=0.3$, $\tan\theta=3.5$?`,
    steps: [String.raw`$\sin\theta$ is a leg ÷ the hypotenuse, which is less than 1.`], ans: String.raw`$\sin\theta=1.2$` },
  { title: "From one ratio to the others", q: String.raw`For an acute angle, $\sin\theta=\frac35$. Find $\cos\theta$ and $\tan\theta$.`,
    fig: rtT(4, 3, { opp: "3", hyp: "5", adj: "?", theta: "θ" }),
    steps: [String.raw`Draw opposite $3$, hypotenuse $5$; adjacent $=\sqrt{25-9}=4$.`, String.raw`$\cos\theta=\frac45$, $\tan\theta=\frac34$.`], ans: String.raw`$\frac45$ and $\frac34$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`A right triangle has sides $12$, $16$, $20$. Find $\sin\theta$ for the angle opposite $12$.`, recap: "sin.", ans: "$0.6$" },
  { level: 1, q: String.raw`For the same angle, find $\cos\theta$.`, recap: "cos.", ans: "$0.8$" },
  { level: 1, q: String.raw`Evaluate $\tan70^\circ$ to three decimal places.`, recap: "Calculator.", ans: "$2.747$" },
  { level: 2, q: String.raw`Label the opposite, adjacent and hypotenuse relative to $\theta$, then write the three ratios.`, recap: "Label and write.", ans: String.raw`$\sin\theta=\frac{11}{61}$, $\cos\theta=\frac{60}{61}$, $\tan\theta=\frac{11}{60}$`, fig: rtT(60, 11, { adj: "60", opp: "11", hyp: "61", theta: "θ" }) },
  { level: 2, q: String.raw`$\cos\theta=\frac5{13}$ for an acute angle. Find $\sin\theta$ and $\tan\theta$.`, recap: "From cos.", ans: String.raw`$\frac{12}{13}$; $\frac{12}5$` },
  { level: 2, q: String.raw`Evaluate $\cos72^\circ$ and $\sin18^\circ$. What do you notice? Explain.`, recap: "Complementary.", ans: String.raw`both $\approx0.3090$; $72^\circ+18^\circ=90^\circ$, so the opposite side of one is the adjacent side of the other` },
  { level: 2, q: String.raw`A right triangle has legs $7$ and $24$. Find the hypotenuse and the three ratios for the angle opposite $24$.`, recap: "Find c first.", ans: String.raw`$25$; $\frac{24}{25}$, $\frac7{25}$, $\frac{24}7$` },
  { level: 2, q: String.raw`Explain, using the two triangles shown, why $\tan\theta$ is the same in both.`, recap: "Why constant.", ans: String.raw`they are similar ($k=2$): $\frac{7}{24}=\frac{14}{48}$`, fig: sceneT([...rt(24, 7, { adj: "24", opp: "7", theta: "θ" }), ...mv(rt(48, 14, { adj: "48", opp: "14", theta: "θ", fill: "green" }), 28)], 6.5, 440) },
  { level: 3, space: 5, q: String.raw`For an acute angle, $\tan\theta=2$. Find exact values of $\sin\theta$ and $\cos\theta$.`, recap: "From tan.", ans: String.raw`opposite $2$, adjacent $1$, hypotenuse $\sqrt5$: $\frac2{\sqrt5}$ and $\frac1{\sqrt5}$` },
  { level: 3, space: 4.5, q: String.raw`Explain why $\sin\theta$ and $\cos\theta$ are always less than $1$ for an acute angle, but $\tan\theta$ can be larger than $1$.`, recap: "Sizes of the ratios.", ans: "sin and cos divide a leg by the longest side; tan divides one leg by the other, and the opposite leg can be longer" },
  { level: 3, space: 5, q: String.raw`For which acute angle is $\sin\theta=\cos\theta$? Explain using a triangle.`, recap: "sin = cos.", ans: String.raw`$45^\circ$: the legs are equal (isosceles right triangle)` },
  { level: 3, space: 5, q: String.raw`In right $\triangle ABC$ with $\angle C=90^\circ$, show that $\sin A=\cos B$.`, recap: "sin A = cos B.", ans: String.raw`both equal $\frac{BC}{AB}$` },
  { level: 3, space: 5, q: String.raw`Make a table of $\sin\theta$ for $\theta=10^\circ,20^\circ,\ldots,80^\circ$. Describe the pattern and explain it using the triangle.`, recap: "Investigate sin.", ans: "sin increases from about 0.17 to 0.98; as θ grows, the opposite side grows toward the hypotenuse" },
];

export const WS = {
  code: "6.3",
  title: "The Primary Trigonometric Ratios",
  bigideas: String.raw`Right triangles with the same acute angle $\theta$ are similar, so the ratio of any two of their sides depends only on $\theta$. These ratios are $\sin\theta=\frac{\text{opp}}{\text{hyp}}$, $\cos\theta=\frac{\text{adj}}{\text{hyp}}$ and $\tan\theta=\frac{\text{opp}}{\text{adj}}$ (SOH CAH TOA). Label sides from the angle you are using; use the Pythagorean theorem for a missing side; use a calculator in degree mode for values.`,
  goals: ["Explain why the ratios are constant.", "Label opposite, adjacent and hypotenuse.", "Write exact ratios.", "Evaluate ratios with a calculator."],
  curriculum: "T2",
  vocab: [["sin θ", "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$"], ["cos θ", "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$"], ["tan θ", "$\\frac{\\text{opposite}}{\\text{adjacent}}$"]],
  hook: String.raw`Have groups draw right triangles of different sizes with a $35^\circ$ angle, measure the sides, and compute opposite ÷ hypotenuse. Compare the class results.`,
  concepts: [
    ["1. Similar right triangles", String.raw`Same angle → similar → same ratios.
${sceneT([...rt(4, 3, { adj: "4", opp: "3", hyp: "5", theta: "θ" }), ...mv(rt(8, 6, { adj: "8", opp: "6", hyp: "10", theta: "θ", fill: "green" }), 5.5)], 6, 420)}`],
    ["2. Labelling", String.raw`Hypotenuse opposite the right angle; opposite across from $\theta$; adjacent touching $\theta$.`],
    ["3. Calculator", String.raw`Degree mode: check $\sin30^\circ=0.5$.`],
  ],
  tips: ["Label from the angle used.", "The hypotenuse is never opposite or adjacent.", "sin and cos are below 1.", "Degree mode.", "Write the angle: sin θ, not sin."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
