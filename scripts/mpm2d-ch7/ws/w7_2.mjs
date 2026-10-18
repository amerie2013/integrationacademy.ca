// MPM2D Worksheet 7.2 — The Cosine Law (teacher edition)
import { atriT, sceneT, polygon } from "./figT.mjs";

const r = Math.PI / 180;
// triangle from SAS: sides b (AC) and c (AB) with angle A between them
const sas = (b, c, A, l = {}) => { const C = [b * Math.cos(A * r), b * Math.sin(A * r)]; return sceneT(polygon([[0, 0], [c, 0], C], { sides: [l.c ?? "", l.a ?? "", l.b ?? ""], names: l.names ?? ["A", "B", "C"], angles: l.A ? [[0, l.A]] : [] }), l.width ?? 5.5, 340); };
const sss = (a, b, c, l = {}) => { const A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) / r; return sas(b, c, A, { a: l.a ?? String(a), b: l.b ?? String(b), c: l.c ?? String(c), A: l.A, names: l.names }); };

const EXAMPLES = [
  { title: "SAS: third side", q: String.raw`In acute $\triangle ABC$, $b=8$, $c=9$ and $\angle A=52^\circ$. Find $a$.`,
    fig: sas(8, 9, 52, { b: "8", c: "9", a: "a", A: "52°" }),
    steps: [String.raw`$a^2=64+81-144\cos52^\circ\approx56.34$.`, String.raw`$a\approx7.51$.`], ans: String.raw`$a\approx7.5$` },
  { title: "SAS: third side", q: String.raw`In acute $\triangle ABC$, $a=12$, $b=15$ and $\angle C=72^\circ$. Find $c$.`,
    steps: [String.raw`$c^2=144+225-360\cos72^\circ\approx257.75$.`, String.raw`$c\approx16.05$.`], ans: String.raw`$c\approx16.1$` },
  { title: "SAS with larger sides", q: String.raw`In acute $\triangle PQR$, $q=20$, $r=17$ and $\angle P=55^\circ$. Find $p$.`,
    steps: [String.raw`$p^2=400+289-680\cos55^\circ\approx298.97$.`, String.raw`$p\approx17.29$.`], ans: String.raw`$p\approx17.3$` },
  { title: "SSS: an angle", q: String.raw`A triangle has sides $8$, $9$ and $10$. Find the angle opposite $8$.`,
    fig: sss(8, 9, 10, { A: "θ" }),
    steps: [String.raw`$\cos\theta=\frac{81+100-64}{2(9)(10)}=\frac{117}{180}=0.65$.`, String.raw`$\theta\approx49.5^\circ$.`], ans: String.raw`$\approx49.5^\circ$` },
  { title: "SSS: the largest angle", q: String.raw`A triangle has sides $10$, $12$ and $14$. Find its largest angle. Is it acute?`,
    steps: [String.raw`Opposite $14$: $\cos\theta=\frac{100+144-196}{240}=0.2$.`, String.raw`$\theta\approx78.5^\circ$: acute.`], ans: String.raw`$\approx78.5^\circ$; yes` },
  { title: "Developing the law", q: String.raw`The altitude from $C$ meets $AB$ at a point $x$ from $A$. Show that $a^2=b^2+c^2-2bc\cos A$.`,
    fig: sceneT([...polygon([[0, 0], [10, 0], [4, 6.5]], { names: ["A", "B", "C"], sides: ["", "a", "b"], angles: [[0, "A"]] }), { seg: [[4, 0], [4, 6.5]], color: "red", dash: true }, { text: "h", at: [4.5, 3.2], color: "red", bold: true }, { text: "x", at: [2, -0.7], color: "green", bold: true }, { text: "c − x", at: [7, -0.7], color: "green", bold: true }], 5.5, 340),
    steps: [String.raw`$h^2=b^2-x^2$ and $a^2=h^2+(c-x)^2=b^2+c^2-2cx$.`, String.raw`$x=b\cos A$, so $a^2=b^2+c^2-2bc\cos A$.`], ans: "the cosine law" },
  { title: "Back to Pythagoras", q: String.raw`What does the cosine law become when $\angle A=90^\circ$? Why?`,
    steps: [String.raw`$\cos90^\circ=0$, so $a^2=b^2+c^2$.`], ans: "the Pythagorean theorem" },
  { title: "A pilot's route", q: String.raw`A pilot flies $250$ km, turns, and flies $180$ km. The angle between the two legs at the turn is $62^\circ$. How far is the plane from the start?`,
    fig: sas(250, 180, 62, { b: "250 km", c: "180 km", a: "d", A: "62°", names: ["turn", "", ""] }),
    steps: [String.raw`$d^2=250^2+180^2-2(250)(180)\cos62^\circ\approx52\,646$.`, String.raw`$d\approx229.4$.`], ans: String.raw`about $229$ km` },
  { title: "Across a pool", q: String.raw`From one corner, two sides of a triangular pool are $30$ m and $24$ m with a $66^\circ$ angle between them. How long is the third side?`,
    steps: [String.raw`$c^2=900+576-1440\cos66^\circ\approx890.3$.`, String.raw`$c\approx29.84$.`], ans: String.raw`about $29.8$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`In acute $\triangle ABC$, $b=10$, $c=12$ and $\angle A=50^\circ$. Find $a$.`, recap: "SAS.", ans: String.raw`$\approx9.5$` },
  { level: 1, q: String.raw`In acute $\triangle ABC$, $a=7$, $b=11$ and $\angle C=65^\circ$. Find $c$.`, recap: "SAS.", ans: String.raw`$\approx10.2$` },
  { level: 1, q: String.raw`A triangle has sides $6$, $7$ and $9$. Find the angle opposite $6$.`, recap: "SSS.", ans: String.raw`$\approx41.8^\circ$` },
  { level: 2, q: String.raw`Find the largest angle of the triangle shown and decide whether it is acute.`, recap: "Largest angle.", ans: String.raw`opposite $9$: $\approx87.3^\circ$; acute`, fig: sss(9, 7, 6, { a: "9", b: "7", c: "6" }) },
  { level: 2, q: String.raw`A triangle has sides $13$, $14$ and $15$. Find the angle opposite $15$.`, recap: "SSS.", ans: String.raw`$\approx67.4^\circ$` },
  { level: 2, q: String.raw`From a corner of a park, two straight paths run $260$ m and $220$ m with a $55^\circ$ angle between them. How far apart are their far ends?`, recap: "Park paths.", ans: String.raw`$\approx224.5$ m` },
  { level: 2, q: String.raw`A triangular lot has sides $30$ m, $40$ m and $45$ m. Find its largest and smallest angles.`, recap: "Lot angles.", ans: String.raw`$\approx78.6^\circ$ and $\approx40.8^\circ$` },
  { level: 2, q: String.raw`Find $x$ in the triangle shown.`, recap: "SAS figure.", ans: String.raw`$x^2=64+100-160\cos58^\circ$: $\approx8.9$`, fig: sas(8, 10, 58, { b: "8", c: "10", a: "x", A: "58°" }) },
  { level: 3, space: 5, q: String.raw`Develop the cosine law $a^2=b^2+c^2-2bc\cos A$ from an altitude, explaining each step.`, recap: "Develop the law.", ans: String.raw`$h^2=b^2-x^2$, $a^2=h^2+(c-x)^2$, $x=b\cos A$` },
  { level: 3, space: 5, q: String.raw`Two sides of a triangle are $8$ and $11$. For which included angles is the third side shorter than $8$? (Try the angle that makes it exactly $8$.)`, recap: "Find the angle.", ans: String.raw`$64=185-176\cos A$: $\cos A=\frac{121}{176}$, $A\approx46.6^\circ$; angles below that` },
  { level: 3, space: 5, q: String.raw`A student computes $a^2=8^2+9^2-2(8)(9)\cos52^\circ$ as $(145-144)\cos52^\circ$. Explain the error and find the correct value of $a$.`, recap: "Find the error.", ans: String.raw`multiply $144\cos52^\circ$ first: $a\approx7.51$` },
  { level: 3, space: 5, q: String.raw`Explain why, in an acute triangle, $a^2<b^2+c^2$ for every side.`, recap: "Acute test.", ans: String.raw`$\cos A>0$, so $2bc\cos A>0$ is subtracted` },
  { level: 3, space: 5, q: String.raw`Two ships leave port at the same time on courses $47^\circ$ apart, at $18$ km/h and $22$ km/h. How far apart are they after one hour?`, recap: "Ships.", ans: String.raw`$\approx16.4$ km` },
];

export const WS = {
  code: "7.2",
  title: "The Cosine Law",
  bigideas: String.raw`An altitude from $C$ splits $c$ into $x=b\cos A$ and $c-x$. The Pythagorean theorem in both right triangles gives the cosine law $a^2=b^2+c^2-2bc\cos A$. Use it for two sides and the included angle (SAS) to find the third side, or three sides (SSS) to find an angle with $\cos A=\frac{b^2+c^2-a^2}{2bc}$. At $90^\circ$ it is the Pythagorean theorem.`,
  goals: ["Develop the cosine law.", "Find the third side (SAS).", "Find angles (SSS).", "Solve distance problems."],
  curriculum: "T3",
  vocab: [["Cosine law", "$a^2=b^2+c^2-2bc\\cos A$"], ["Included angle", "between the two given sides"], ["SSS", "three sides known"]],
  hook: String.raw`Ask: two hikers leave the same point on paths 64° apart. How far apart are they after walking 3 km and 4 km? Why doesn't Pythagoras work?`,
  concepts: [
    ["1. Development", String.raw`Pythagoras twice with an altitude.
${sceneT([...polygon([[0, 0], [10, 0], [4, 6.5]], { names: ["A", "B", "C"], sides: ["c", "a", "b"] }), { seg: [[4, 0], [4, 6.5]], color: "red", dash: true }], 5, 320)}`],
    ["2. SAS", String.raw`$a^2=b^2+c^2-2bc\cos A$, then $\sqrt{\ }$.`],
    ["3. SSS", String.raw`$\cos A=\frac{b^2+c^2-a^2}{2bc}$; largest angle first.`],
  ],
  tips: ["Use the included angle.", "Multiply 2bc cos A first.", "Take the square root.", "Largest angle first in SSS.", "At 90°: Pythagoras."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
