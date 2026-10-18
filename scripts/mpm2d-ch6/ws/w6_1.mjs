// MPM2D Worksheet 6.1 — Congruence & Similar Triangles (teacher edition)
import { sceneT, polygon } from "./figT.mjs";

const sh = (pts, dx, k = 1) => pts.map(([x, y]) => [x * k + dx, y * k]);
const two = (p1, p2, o1 = {}, o2 = {}, width = 6.5) => sceneT([...polygon(p1, o1), ...polygon(p2, { fill: "green", color: "green", ...o2 })], width, 420);
const nested = (labels, width = 5) => sceneT([...polygon([[0, 0], [10, 0], [3, 7]], { names: ["B", "C", "A"] }), { seg: [[1.8, 4.2], [5.8, 4.2]], color: "red", width: 2.6 }, { text: "D", at: [1.0, 4.3], bold: true }, { text: "E", at: [6.6, 4.3], bold: true }, ...labels], width, 320);

const EXAMPLES = [
  { title: "Congruent by SAS", q: String.raw`In $\triangle ABC$, $AB=5$, $BC=7$ and $\angle B=48^\circ$. In $\triangle DEF$, $DE=5$, $EF=7$ and $\angle E=48^\circ$. Are the triangles congruent?`,
    fig: two([[0, 0], [7, 0], [3.35, 3.72]], sh([[0, 0], [7, 0], [3.35, 3.72]], 9.5), { sides: ["7", "", "5"], names: ["B", "C", "A"], angles: [[0, "48°"]] }, { sides: ["7", "", "5"], names: ["E", "F", "D"], angles: [[0, "48°"]] }),
    steps: [String.raw`Two sides and the included angle are equal.`], ans: String.raw`yes: $\triangle ABC\cong\triangle DEF$ (SAS)` },
  { title: "Similar by SSS∼", q: String.raw`Are triangles with sides $4, 5, 7$ and $12, 15, 21$ similar?`,
    steps: [String.raw`$\frac{12}4=\frac{15}5=\frac{21}7=3$.`], ans: String.raw`yes, $k=3$` },
  { title: "Similar by AA", q: String.raw`In $\triangle JKL$, $\angle J=55^\circ$ and $\angle K=90^\circ$. In $\triangle MNO$, $\angle M=35^\circ$ and $\angle N=90^\circ$. Write a similarity statement.`,
    steps: [String.raw`$\angle L=35^\circ$ and $\angle O=55^\circ$.`, String.raw`Match: $J\leftrightarrow O$, $K\leftrightarrow N$, $L\leftrightarrow M$.`], ans: String.raw`$\triangle JKL\sim\triangle ONM$` },
  { title: "A scale factor less than 1", q: String.raw`$\triangle PQR\sim\triangle STU$ with $PQ=6$, $QR=9$, $PR=12$ and $ST=4$. Find $TU$ and $SU$.`,
    fig: two([[0, 0], [6, 0], [7.5, 8.9]].map(([x, y]) => [x * 0.5, y * 0.5]), sh([[0, 0], [6, 0], [7.5, 8.9]], 5, 1 / 3), { sides: ["6", "9", "12"], names: ["P", "Q", "R"] }, { sides: ["4", "TU", "SU"], names: ["S", "T", "U"] }),
    steps: [String.raw`$k=\frac46=\frac23$.`, String.raw`$TU=\frac23\times9=6$; $SU=\frac23\times12=8$.`], ans: String.raw`$TU=6$, $SU=8$` },
  { title: "Not similar", q: String.raw`Are triangles with sides $5, 6, 8$ and $10, 12, 15$ similar?`,
    steps: [String.raw`$\frac{10}5=2$, $\frac{12}6=2$, $\frac{15}8=1.875$.`], ans: "no — the ratios are not all equal" },
  { title: "Similar by SAS∼", q: String.raw`$AB=6$, $AC=9$, $\angle A=40^\circ$; $DE=8$, $DF=12$, $\angle D=40^\circ$. Are $\triangle ABC$ and $\triangle DEF$ similar?`,
    steps: [String.raw`$\frac86=\frac43$ and $\frac{12}9=\frac43$; the included angles are equal.`], ans: String.raw`yes (SAS∼), $k=\frac43$` },
  { title: "Nested triangles", q: String.raw`$DE\parallel BC$, $AD=5$, $AB=15$ and $AE=4$. Find $AC$ and $EC$.`,
    fig: nested([{ text: "5", at: [1.6, 5.8], color: "blue" }, { text: "4", at: [5.0, 5.9], color: "blue" }]),
    steps: [String.raw`$\triangle ADE\sim\triangle ABC$ with $k=\frac{15}5=3$.`, String.raw`$AC=3\times4=12$; $EC=12-4=8$.`], ans: String.raw`$AC=12$, $EC=8$` },
  { title: "Unknown in a nested triangle", q: String.raw`$DE\parallel BC$, $AD=x$, $DB=6$, $DE=4$ and $BC=10$. Find $x$.`,
    steps: [String.raw`$\frac{x}{x+6}=\frac4{10}$.`, String.raw`$10x=4x+24\Rightarrow x=4$.`], ans: String.raw`$x=4$` },
  { title: "Perimeters", q: String.raw`Two similar triangles have scale factor $2.5$. The smaller has perimeter $18$ cm. Find the larger perimeter.`,
    steps: [String.raw`Every side is multiplied by $2.5$, so the perimeter is too: $2.5\times18=45$.`], ans: String.raw`$45$ cm` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Are triangles with sides $3, 4, 6$ and $6, 8, 12$ similar? Give the scale factor if so.`, recap: "SSS∼.", ans: String.raw`yes, $k=2$` },
  { level: 1, q: String.raw`$\triangle ABC\cong\triangle XYZ$, $AB=7$ and $\angle B=40^\circ$. Find $XY$ and $\angle Y$.`, recap: "Congruent parts.", ans: String.raw`$7$; $40^\circ$` },
  { level: 1, q: String.raw`Find the scale factor from a triangle with sides $8, 10, 14$ to one with sides $12, 15, 21$.`, recap: "Scale factor.", ans: "$1.5$" },
  { level: 2, q: String.raw`$\triangle ABC\sim\triangle DEF$ with $AB=10$, $BC=8$, $AC=6$ and $DF=9$. Find $DE$ and $EF$.`, recap: "Missing sides.", ans: String.raw`$k=1.5$: $DE=15$, $EF=12$`,
    fig: two([[0, 0], [10, 0], [3.6, 4.8]], sh([[0, 0], [10, 0], [3.6, 4.8]], 11.5, 1.5), { sides: ["10", "8", "6"], names: ["A", "B", "C"] }, { sides: ["DE", "EF", "9"], names: ["D", "E", "F"] }) },
  { level: 2, q: String.raw`$\triangle ABC\sim\triangle DEF$, $\angle A=48^\circ$ and $\angle B=67^\circ$. Find $\angle F$.`, recap: "Angles.", ans: String.raw`$65^\circ$` },
  { level: 2, q: String.raw`Two triangles have two pairs of sides in the ratio $2:3$ and equal included angles. What can you conclude, and why?`, recap: "SAS∼.", ans: "similar (SAS∼)" },
  { level: 2, q: String.raw`$DE\parallel BC$, $AD=6$, $DB=4$ and $BC=15$. Find $DE$.`, recap: "Nested.", ans: String.raw`$DE=15\times\frac6{10}=9$`, fig: nested([{ text: "6", at: [1.6, 5.8], color: "blue" }, { text: "4", at: [0.3, 2.1], color: "blue" }, { text: "15", at: [5, -0.8], color: "blue" }]) },
  { level: 2, q: String.raw`$\angle A=50^\circ$, $AB=8$, $\angle B=70^\circ$ and $\angle D=50^\circ$, $DE=8$, $\angle E=70^\circ$. Are the triangles congruent? Which condition?`, recap: "ASA.", ans: "yes, ASA" },
  { level: 3, space: 4.5, q: String.raw`Explain why two triangles with all three pairs of angles equal are similar but not necessarily congruent. Give an example.`, recap: "AAA.", ans: "same shape, possibly different size, e.g. 3-4-5 and 6-8-10 right triangles" },
  { level: 3, space: 5, q: String.raw`$DE\parallel BC$, $AD=x$, $DB=9$, $DE=6$ and $BC=15$. Find $x$ and $AB$.`, recap: "Unknown in a nested triangle.", ans: String.raw`$\frac{x}{x+9}=\frac6{15}$: $x=6$, $AB=15$` },
  { level: 3, space: 5, q: String.raw`Segments $AE$ and $BD$ cross at $C$, with $AB\parallel DE$, as shown. Explain why $\triangle ABC\sim\triangle EDC$, then find $DE$ if $AC=4$, $CE=10$ and $AB=3$.`, recap: "Bow-tie triangles.", ans: String.raw`vertical angles and alternate angles (AA); $DE=7.5$`,
    fig: sceneT([{ seg: [[0, 3], [3, 3]], color: "blue" }, { seg: [[0, 3], [10.5, -4.5]], color: "blue" }, { seg: [[3, 3], [-4.5, -4.5]], color: "blue" }, { seg: [[-4.5, -4.5], [10.5, -4.5]], color: "green" }, { text: "A", at: [-0.5, 3.5], bold: true }, { text: "B", at: [3.5, 3.5], bold: true }, { text: "C", at: [2.6, 1.7], bold: true }, { text: "not to scale", at: [3, -6], size: 11, color: "gray" }, { text: "D", at: [-5, -5], bold: true }, { text: "E", at: [11, -5], bold: true }], 5, 320) },
  { level: 3, space: 5, q: String.raw`A triangle has sides $3$, $5$ and $6$ cm. A similar triangle has perimeter $42$ cm. Find its sides.`, recap: "Perimeter and sides.", ans: String.raw`$k=\frac{42}{14}=3$: $9$, $15$, $18$ cm` },
  { level: 3, space: 5, q: String.raw`True or false? Explain each. (a) All isosceles right triangles are similar. (b) All isosceles triangles are similar.`, recap: "Always similar?", ans: String.raw`(a) true: all have angles $45^\circ,45^\circ,90^\circ$; (b) false: the angles can differ` },
];

export const WS = {
  code: "6.1",
  title: "Congruence & Similar Triangles",
  bigideas: String.raw`Congruent triangles have equal corresponding sides and angles (same shape and size); SSS, SAS and ASA are enough to show it. Similar triangles have equal corresponding angles and proportional sides (same shape); AA, SSS∼ and SAS∼ are enough. The scale factor $k$ is image ÷ original for every pair of sides; congruence is the case $k=1$. A line parallel to one side of a triangle cuts off a smaller similar triangle.`,
  goals: ["Distinguish congruence and similarity.", "Use the conditions SSS, SAS, ASA; AA, SSS∼, SAS∼.", "Write matching similarity statements.", "Find missing sides with a scale factor, including nested triangles."],
  curriculum: "T1",
  vocab: [["Congruent", "same shape and size, $\\cong$"], ["Similar", "same shape, $\\sim$"], ["Scale factor", "$k=\\frac{\\text{image}}{\\text{original}}$"]],
  hook: String.raw`Show a photo and an enlargement of it. Ask: what stayed the same, and what changed? Then show two identical prints.`,
  concepts: [
    ["1. Congruent vs similar", String.raw`Same size → congruent; same shape → similar.
${two([[0, 0], [4, 0], [1.2, 2.6]], sh([[0, 0], [4, 0], [1.2, 2.6]], 5.2, 1.5), { names: ["A", "B", "C"] }, { names: ["P", "Q", "R"] }, 6)}`],
    ["2. Conditions", String.raw`Congruent: SSS, SAS, ASA. Similar: AA, SSS∼, SAS∼. AAA and SSA do not prove congruence.`],
    ["3. Scale factor", String.raw`$\triangle ABC\sim\triangle DEF$: $\frac{DE}{AB}=\frac{EF}{BC}=\frac{DF}{AC}=k$.`],
  ],
  tips: ["Match sides opposite equal angles.", "Keep every ratio image/original.", "AAA gives similarity only.", "Nested: use the whole side.", "Perimeters scale by k too."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
