// MCR3U-FR 5.1 — Rapports trigonométriques et angles remarquables : rapports de base dans le triangle rectangle,
// côtés et angles manquants, valeurs exactes tirées des triangles 30°–60°–90° et 45°–45°–90°, problèmes d'élévation
// à deux triangles. Miroir de ../mcr3u-ch5/l5_1.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.1 Rapports trigonométriques et angles remarquables";
export const ID = lessonId(5, 1);
const S = String.raw;
const tri = (pts, labels, extra = {}) => plane({ view: extra.view ?? { xmin: -1, xmax: 18, ymin: -1, ymax: 10 }, segs: [{ pts: [...pts, pts[0]], color: "blue" }], points: labels, step: extra.step ?? { x: 2, y: 2 } });

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Rapports trigonométriques et angles remarquables",
    overview: S`Les rapports de base \(\sin\theta=\frac{\text{opp}}{\text{hyp}}\), \(\cos\theta=\frac{\text{adj}}{\text{hyp}}\) et \(\tan\theta=\frac{\text{opp}}{\text{adj}}\) relient les angles et les côtés d'un triangle rectangle. Dans cette leçon, tu vas les utiliser pour trouver des côtés et des angles, et tu vas apprendre les valeurs exactes pour 30°, 45° et 60° à partir de deux triangles remarquables — des valeurs utilisées tout au long de ce chapitre et du suivant.`,
    goals: [
      "écrire les rapports de base d'un angle aigu d'un triangle rectangle;",
      "résoudre un triangle rectangle pour trouver un côté ou un angle manquant;",
      "déduire les valeurs exactes pour 30°, 45° et 60° à partir des triangles remarquables;",
      "évaluer des expressions à l'aide de valeurs exactes;",
      "résoudre des problèmes comportant des angles d'élévation et de dépression.",
    ],
    curriculum: "D1.1 (déterminer les valeurs exactes du sinus, du cosinus et de la tangente des angles remarquables 0°, 30°, 45°, 60° et 90°), D1.6 (résoudre des problèmes comportant des triangles rectangles)",
    prior: [
      [S`Dans un triangle rectangle dont les cathètes mesurent 6 et 8, quelle est la longueur de l'hypoténuse?`, S`\(10\).`],
      [S`Simplifie \(\frac{1}{\sqrt2}\).`, S`\(\frac{\sqrt2}{2}\).`],
      [S`Résous \(\frac{x}{12}=0.5\).`, S`\(x=6\).`],
    ],
    words: [
      ["Côté opposé / adjacent", "le côté en face de l'angle / à côté de l'angle (pas l'hypoténuse)", ""],
      ["SOH CAH TOA", "sin = opp/hyp, cos = adj/hyp, tan = opp/adj", ""],
      ["Valeur exacte", "une valeur écrite avec des radicaux ou des fractions, pas avec des décimales", "\\(\\sin60^\\circ=\\frac{\\sqrt3}2\\)"],
      ["Angle d'élévation", "angle mesuré au-dessus de l'horizontale jusqu'à un objet", ""],
    ],
  }),

  section("📌 Les deux triangles remarquables", S`
  ${table(["θ", "sin θ", "cos θ", "tan θ"], [
    ["0°", "0", "1", "0"], ["30°", "\\(\\frac12\\)", "\\(\\frac{\\sqrt3}2\\)", "\\(\\frac1{\\sqrt3}\\)"], ["45°", "\\(\\frac1{\\sqrt2}\\)", "\\(\\frac1{\\sqrt2}\\)", "1"],
    ["60°", "\\(\\frac{\\sqrt3}2\\)", "\\(\\frac12\\)", "\\(\\sqrt3\\)"], ["90°", "1", "0", "non définie"],
  ])}
  ${keyIdea(S`La moitié d'un triangle équilatéral de côté 2 a des côtés \(1,\sqrt3,2\) et des angles de 30°, 60° et 90°. La moitié d'un carré unité a des côtés \(1,1,\sqrt2\) et des angles de 45°, 45° et 90°. Lis chaque valeur exacte sur ces deux figures.`)}`),

  section("📌 Explore", S`<p>Passe d'un triangle à l'autre et d'un angle aigu à l'autre du triangle 30°–60°–90°. Remarque que \(\sin30^\circ=\cos60^\circ\) — le côté opposé à un angle aigu est adjacent à l'autre.</p>`),

  widget("specialTriangles", { start: "30" }),

  section("📌 Attention", watchOut([
    "Repère le côté opposé et le côté adjacent à partir de l'angle que tu utilises — ils s'échangent pour l'autre angle aigu.",
    "Règle ta calculatrice en degrés.",
    S`Utilise la touche inverse (\(\sin^{-1}\)) pour trouver un angle, pas \(\frac1{\sin}\).`,
    "Garde les valeurs exactes exactes; n'arrondis qu'une mesure finale.",
  ])),

  examples([
    ["Les trois rapports", S`Un triangle rectangle a des cathètes de 8 et 15 et une hypoténuse de 17. L'angle A est opposé au côté 8. Écris les trois rapports et trouve ∠A.`,
      [S`<b>Nomme les côtés à partir de l'angle A.</b> Opposé \(=8\), adjacent \(=15\), hypoténuse \(=17\). L'hypoténuse est toujours le côté en face de l'angle droit.`,
        S`<b>Vérifie qu'il s'agit d'un triangle rectangle.</b> \(8^2+15^2=64+225=289=17^2\) ✓`,
        S`<b>Écris les rapports.</b> \(\sin A=\frac{\text{opp}}{\text{hyp}}=\frac8{17}\), \(\cos A=\frac{\text{adj}}{\text{hyp}}=\frac{15}{17}\), \(\tan A=\frac{\text{opp}}{\text{adj}}=\frac8{15}\).`,
        S`<b>Trouve l'angle.</b> Un rapport inverse transforme un rapport en angle : \(A=\tan^{-1}\frac8{15}\approx28.1^\circ\).`,
        S`<b>Vérifie avec un autre rapport.</b> \(\sin^{-1}\frac8{17}\approx28.1^\circ\) ✓. L'angle est inférieur à \(45^\circ\), ce qui est logique puisque le côté opposé est plus court que le côté adjacent.`],
      S`\(\sin A=\frac8{17}\), \(\cos A=\frac{15}{17}\), \(\tan A=\frac8{15}\); \(A\approx28.1^\circ\)`,
      tri([[0, 0], [15, 0], [15, 8]], [{ x: 0, y: 0, label: "A" }, { x: 7.5, y: 0, label: "15" }, { x: 15, y: 4, label: "8" }, { x: 7.5, y: 4.4, label: "17" }])],
    ["Trouver un côté", S`Dans le triangle rectangle \(\triangle PQR\), \(\angle Q=90^\circ\), \(\angle P=38^\circ\) et \(PR=12\). Trouve \(QR\).`,
      [S`<b>Fais un croquis et nomme les côtés à partir de \(P\).</b> \(PR\) est en face de l'angle droit, c'est donc l'hypoténuse. \(QR\) est en face de \(P\), c'est donc le côté opposé.`,
        S`<b>Choisis le rapport.</b> On connaît l'hypoténuse et on cherche le côté opposé, donc on utilise le sinus : \(\sin38^\circ=\frac{QR}{12}\).`,
        S`<b>Résous.</b> Multiplie les deux membres par 12 : \(QR=12\sin38^\circ\approx12(0.6157)\approx7.39\).`,
        S`<b>Vérifie.</b> Le troisième côté est \(PQ=12\cos38^\circ\approx9.46\). Alors \(7.39^2+9.46^2\approx144=12^2\) ✓`],
      S`\(QR\approx7.39\)`,
      tri([[0, 0], [9.46, 0], [9.46, 7.39]], [{ x: 0, y: 0, label: "P" }, { x: 9.46, y: 0, label: "Q" }, { x: 9.46, y: 7.39, label: "R" }, { x: 4.2, y: 3.9, label: "12" }], { view: { xmin: -1, xmax: 12, ymin: -1, ymax: 9 } })],
    ["Trouver un angle", "Les cathètes d'un triangle rectangle mesurent 5 (opposée à θ) et 9 (adjacente). Trouve θ.",
      [S`<b>Choisis le rapport.</b> On connaît le côté opposé et le côté adjacent, donc on utilise la tangente : \(\tan\theta=\frac59\).`,
        S`<b>Utilise l'inverse.</b> \(\theta=\tan^{-1}\left(\frac59\right)\). Garde la fraction, ou utilise beaucoup de décimales, pour éviter les erreurs d'arrondi.`,
        S`<b>Évalue.</b> La calculatrice doit être en mode degrés : \(\theta\approx29.1^\circ\).`,
        S`<b>Vérifie avec le sinus.</b> L'hypoténuse est \(\sqrt{25+81}=\sqrt{106}\approx10.30\), et \(\sin^{-1}\frac5{10.30}\approx29.1^\circ\) ✓`],
      S`\(\theta\approx29.1^\circ\)`,
      tri([[0, 0], [9, 0], [9, 5]], [{ x: 0, y: 0, label: "θ" }, { x: 4.5, y: 0, label: "9" }, { x: 9, y: 2.5, label: "5" }], { view: { xmin: -1, xmax: 11, ymin: -1, ymax: 7 } })],
    ["Valeurs exactes", S`Évalue \(\sin60^\circ\cos30^\circ+\tan45^\circ\) de façon exacte.`,
      [S`<b>Pourquoi exacte?</b> « Exacte » signifie sans décimales de calculatrice; on lit donc les valeurs sur les triangles remarquables.`,
        S`<b>Du triangle 30°–60°–90°</b> de côtés \(1,\sqrt3,2\) : \(\sin60^\circ=\frac{\sqrt3}2\) et \(\cos30^\circ=\frac{\sqrt3}2\).`,
        S`<b>Du triangle 45°–45°–90°</b> de côtés \(1,1,\sqrt2\) : \(\tan45^\circ=\frac11=1\).`,
        S`<b>Remplace.</b> \(\frac{\sqrt3}2\cdot\frac{\sqrt3}2+1=\frac34+1=\frac74\). Remarque que \(\sqrt3\cdot\sqrt3=3\).`,
        S`<b>Vérifie avec une calculatrice.</b> \(0.8660\times0.8660+1\approx1.75=\frac74\) ✓`],
      S`\(\frac74\)`,
      tri([[0, 0], [1.732, 0], [1.732, 1]], [{ x: 0, y: 0, label: "30°" }, { x: 1.732, y: 1, label: "60°" }, { x: 0.87, y: 0, label: "√3" }, { x: 1.732, y: 0.5, label: "1" }, { x: 0.8, y: 0.55, label: "2" }], { view: { xmin: -0.3, xmax: 2.3, ymin: -0.3, ymax: 1.4 }, step: { x: 0.5, y: 0.5 } })],
    ["Longueurs exactes", "Une échelle de 6 m forme un angle de 30° avec le sol. À quelle hauteur atteint-elle le mur, et à quelle distance du mur se trouve son pied (valeurs exactes)?",
      [S`<b>Modélise.</b> L'échelle est l'hypoténuse (6 m). Le mur est opposé à l'angle de \(30^\circ\), et le sol est adjacent.`,
        S`<b>Hauteur.</b> \(\sin30^\circ=\frac h6\), donc \(h=6\sin30^\circ=6\left(\frac12\right)=3\) m.`,
        S`<b>Distance.</b> \(\cos30^\circ=\frac d6\), donc \(d=6\cos30^\circ=6\left(\frac{\sqrt3}2\right)=3\sqrt3\) m.`,
        S`<b>Vérifie avec Pythagore.</b> \(3^2+(3\sqrt3)^2=9+27=36=6^2\) ✓`],
      S`\(3\) m et \(3\sqrt3\approx5.20\) m`,
      tri([[0, 0], [5.196, 0], [5.196, 3]], [{ x: 0, y: 0, label: "30°" }, { x: 2.6, y: 0, label: "3√3" }, { x: 5.196, y: 1.5, label: "3" }, { x: 2.3, y: 1.7, label: "6" }], { view: { xmin: -1, xmax: 7, ymin: -1, ymax: 4.5 } })],
  ]),

  practice([
    q("sinus", S`Un triangle rectangle a des côtés de 7, 24 et 25, et ∠A est opposé au côté 7. Trouve \(\sin A\).`, num(0.28),
      "opp/hyp.", [S`\(\frac7{25}\).`], S`\(0.28\)`),
    q("côté", S`Dans un triangle rectangle, un angle de 50° a un côté adjacent de 10. Trouve le côté opposé, au centième près.`, num(10 * Math.tan(50 * Math.PI / 180), 0.01),
      "tan = opp/adj.", [S`\(10\tan50^\circ\).`], S`\(\approx11.92\)`),
    q("angle", S`\(\cos A=0.6\) pour un angle aigu A. Trouve A, au centième près.`, num(Math.acos(0.6) * 180 / Math.PI, 0.01),
      "Utilise cos⁻¹.", [S`\(\cos^{-1}0.6\).`], S`\(\approx53.13^\circ\)`),
    q("exacte", S`Évalue \(2\sin30^\circ+\cos60^\circ\).`, num(1.5),
      "Les deux valent ½.", [S`\(1+\frac12\).`], S`\(1.5\)`),
    q("exacte", S`Quelle est la valeur exacte de \(\tan60^\circ\)?`, choice([S`\(\sqrt3\)`, S`\(\frac{\sqrt3}2\)`, S`\(\frac1{\sqrt3}\)`, S`\(\frac12\)`], 0),
      "opp/adj dans le triangle 30°–60°–90°.", [S`\(\frac{\sqrt3}{1}\).`], S`\(\sqrt3\)`),
  ]),

  ...hard([
    ["Deux angles d'élévation", S`D'un point sur un terrain plat, l'angle d'élévation du sommet d'une tour est de 30°. Après avoir marché 20 m en ligne droite vers la tour, il devient 60°. Trouve la hauteur exacte de la tour.`,
      [S`Soit \(h\) la hauteur. Les distances jusqu'à la base sont \(\frac{h}{\tan30^\circ}=h\sqrt3\) et \(\frac{h}{\tan60^\circ}=\frac h{\sqrt3}\).`, S`\(h\sqrt3-\frac h{\sqrt3}=20\Rightarrow h\cdot\frac{2}{\sqrt3}=20\Rightarrow h=10\sqrt3\).`],
      S`\(h=10\sqrt3\approx17.32\) m`,
      plane({ view: { xmin: -1, xmax: 36, ymin: -1, ymax: 20 }, segs: [{ pts: [[0, 0], [30, 0], [30, 17.32], [0, 0]], color: "blue" }, { pts: [[20, 0], [30, 17.32]], color: "red" }], points: [{ x: 0, y: 0, label: "30°" }, { x: 20, y: 0, label: "60°" }, { x: 30, y: 17.32, label: "sommet" }, { x: 10, y: 0, label: "20 m" }], step: { x: 5, y: 5 } })],
    ["Aire exacte", S`Trouve l'aire exacte d'un triangle équilatéral de côté 8.`,
      [S`Sa hauteur est \(8\sin60^\circ=4\sqrt3\).`, S`Aire \(=\tfrac12(8)(4\sqrt3)\).`],
      S`\(16\sqrt3\)`],
  ], [
    q("difficile", S`Évalue \((\sin45^\circ)^2+\cos60^\circ\tan45^\circ\) de façon exacte.`, num(1),
      "½ + ½.", [S`\(\frac12+\frac12\cdot1\).`], S`\(1\)`),
    q("difficile", "De deux points distants de 30 m, alignés avec une tour, les angles d'élévation sont de 30° et de 45°. Trouve la hauteur, au centième près.", num(30 / (Math.sqrt(3) - 1), 0.01),
      "Les distances h√3 et h diffèrent de 30.", [S`\(h\sqrt3-h=30\Rightarrow h=\frac{30}{\sqrt3-1}\).`], S`\(\approx40.98\) m`),
    q("difficile", "Un triangle isocèle a deux côtés égaux de 10 et un angle au sommet de 120°. Trouve sa base, au centième près.", num(10 * Math.sqrt(3), 0.01),
      "Divise-le en deux triangles 30°–60°–90°.", [S`La moitié de la base \(=10\sin60^\circ=5\sqrt3\).`], S`\(10\sqrt3\approx17.32\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi 30°, 45° et 60° sont-ils remarquables?", "Leurs triangles ont des rapports de côtés simples, donc leurs valeurs trigonométriques sont exactes."],
      ["Pourquoi sin 30° est-il égal à cos 60°?", "Dans un même triangle, le côté opposé à 30° est adjacent à 60° : sin θ = cos(90° − θ)."],
      ["Pourquoi tan 90° n'est-elle pas définie?", "Le côté adjacent devient 0, donc le rapport exigerait une division par 0."],
      ["Quand dois-je utiliser des valeurs exactes?", "Chaque fois que l'angle est remarquable et que la question demande une réponse exacte."],
      ["Comment résoudre un problème d'élévation à deux triangles?", "Écris chaque distance horizontale en fonction de la hauteur, puis utilise la différence donnée."],
    ],
    summary: [
      "SOH CAH TOA pour les angles aigus des triangles rectangles.",
      "Triangles remarquables : 1–√3–2 et 1–1–√2.",
      "Les rapports inverses permettent de trouver des angles.",
      "Les valeurs exactes restent exactes jusqu'à la fin.",
    ],
    next: "La leçon 5.2 étend les rapports aux angles de 0° à 360°.",
  }),
];
