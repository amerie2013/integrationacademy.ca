// MCR3U-FR 5.7 — Révision du chapitre 5 : angles remarquables, angles jusqu'à 360°, identités, loi des sinus (cas
// ambigu), loi des cosinus, 3-D. Miroir de ../mcr3u-ch5/l5_7.mjs (mêmes nombres, mêmes figures).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.7 Révision du chapitre 5";
export const ID = lessonId(5, 7);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const sin = (d) => Math.sin(r(d)), cos = (d) => Math.cos(r(d)), tan = (d) => Math.tan(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
// Exemple 4 : CCA, dénombrer et résoudre
const B4 = dg(Math.asin((13 * sin(41)) / 9)), B4b = 180 - B4;
// Exemple 5 : CAC puis loi des sinus
const e5a = Math.sqrt(12 ** 2 + 7 ** 2 - 2 * 12 * 7 * cos(73)), e5C = dg(Math.asin((7 * sin(73)) / e5a));
// Défi 1 : champ à quatre côtés (deux triangles qui partagent une diagonale)
const hD = Math.sqrt(90 ** 2 + 70 ** 2 - 2 * 90 * 70 * cos(64)), hAng = dg(Math.acos((60 ** 2 + 55 ** 2 - hD ** 2) / (2 * 60 * 55)));
// Défi 2 : tour vue de deux directions
const hh = 75 * tan(33), hB = hh / tan(24), hAB = Math.sqrt(75 ** 2 + hB ** 2 - 2 * 75 * hB * cos(110));

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 5",
    overview: S`Cette révision relie les notions du chapitre : valeurs exactes, angles jusqu'à 360°, rapports inverses et identités, loi des sinus et son cas ambigu, loi des cosinus et problèmes à trois dimensions. Les exemples combinent plusieurs habiletés; les exercices et les problèmes de niveau difficile sont du niveau d'un test de chapitre.`,
    goals: [
      "utiliser les valeurs exactes des angles remarquables, y compris au-delà de 90°;",
      "trouver deux angles ayant un rapport donné à l'aide de la règle CAST;",
      "démontrer des identités simples;",
      "choisir et appliquer la loi des sinus ou la loi des cosinus, y compris dans le cas ambigu;",
      "résoudre des problèmes en plusieurs étapes en 2-D et en 3-D.",
    ],
    curriculum: "D1 (déterminer et appliquer des rapports trigonométriques : D1.1 à D1.7)",
    prior: [
      [S`Quelle est la valeur exacte de \(\cos210^\circ\)?`, S`\(-\frac{\sqrt3}2\).`],
      [S`Quelle loi permet de résoudre le cas CCC?`, "La loi des cosinus."],
      [S`\(\angle A=30^\circ\), \(b=10\), \(a=5\) : combien y a-t-il de triangles?`, S`Un seul (un triangle rectangle, \(a=h\)).`],
    ],
    words: [
      ["5.1–5.2", "triangles remarquables, côté terminal, règle CAST", ""],
      ["5.3", "rapports inverses, identités", ""],
      ["5.4", "loi des sinus, cas ambigu", ""],
      ["5.5–5.6", "loi des cosinus, problèmes en 3-D", ""],
    ],
  }),

  section("📌 Le chapitre en une page", S`
  ${table(["Habileté", "Fait clé"], [
    ["Valeurs exactes", "triangles \\(1,\\sqrt3,2\\) et \\(1,1,\\sqrt2\\)"],
    ["Angle quelconque", "\\(\\sin\\theta=\\frac yr\\), \\(\\cos\\theta=\\frac xr\\), \\(\\tan\\theta=\\frac yx\\); la règle CAST donne les signes"],
    ["Identités", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\), \\(\\sin^2\\theta+\\cos^2\\theta=1\\)"],
    ["Loi des sinus", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}\\); le cas CCA peut donner 0, 1 ou 2 triangles"],
    ["Loi des cosinus", "\\(a^2=b^2+c^2-2bc\\cos A\\) pour les cas CAC et CCC"],
  ])}
  ${keyIdea("Avant de choisir une loi, dresse la liste de ce que tu connais : un côté avec son angle opposé → loi des sinus; sinon (CAC, CCC) → loi des cosinus. En 3-D, résous un triangle plat à la fois.")}`),

  section("📌 Explore", S`<p>Utilise l'outil d'exploration pour vérifier les exemples et les problèmes du cas ambigu ci-dessous.</p>`),

  widget("ambiguousCase", { init: [41, 13, 9] }),

  examples([
    ["Valeurs exactes", S`Évalue \(\sin240^\circ\cos150^\circ+\tan315^\circ\) de façon exacte.`,
      [S`<b>Chaque rapport.</b> Trouve le quadrant, l'angle de référence et le signe. ${tv(["rapport", "quadrant", "angle de référence", "signe", "valeur"], ["\\(\\sin240^\\circ\\)", "3", "\\(60^\\circ\\)", "négatif", "\\(-\\frac{\\sqrt3}2\\)"], ["\\(\\cos150^\\circ\\)", "2", "\\(30^\\circ\\)", "négatif", "\\(-\\frac{\\sqrt3}2\\)"], ["\\(\\tan315^\\circ\\)", "4", "\\(45^\\circ\\)", "négatif", "\\(-1\\)"])}`,
        S`<b>Multiplie.</b> \(\left(-\frac{\sqrt3}2\right)\left(-\frac{\sqrt3}2\right)=\frac34\). Deux négatifs donnent un positif.`,
        S`<b>Additionne.</b> \(\frac34+(-1)=-\frac14\).`,
        S`<b>Vérifie avec une calculatrice.</b> \((-0.866)(-0.866)-1\approx-0.25\) ✓`],
      S`\(-\frac14\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [-2.5, -4.33]], color: "violet" }, { pts: [[0, 0], [-4.33, 2.5]], color: "blue" }, { pts: [[0, 0], [3.54, -3.54]], color: "green" }], points: [{ x: -2.5, y: -4.33, label: "240°", color: "violet" }, { x: -4.33, y: 2.5, label: "150°" }, { x: 3.54, y: -3.54, label: "315°", color: "green" }], step: { x: 1, y: 1 } })],
    ["Deux angles", S`Résous \(3\tan\theta+\sqrt3=0\) pour \(0^\circ\le\theta\le360^\circ\).`,
      [S`<b>Isole le rapport.</b> \(3\tan\theta=-\sqrt3\), donc \(\tan\theta=-\frac{\sqrt3}3=-\frac1{\sqrt3}\).`,
        S`<b>Angle de référence.</b> \(\tan\alpha=\frac1{\sqrt3}\) donne \(\alpha=30^\circ\).`,
        S`<b>Quadrants.</b> La tangente est négative dans les quadrants 2 et 4.`,
        S`<b>Construis les angles.</b> \(180^\circ-30^\circ=150^\circ\) et \(360^\circ-30^\circ=330^\circ\).`,
        S`<b>Vérifie.</b> \(3\tan150^\circ+\sqrt3=3\left(-\frac1{\sqrt3}\right)+\sqrt3=-\sqrt3+\sqrt3=0\) ✓. Les deux côtés terminaux sont opposés l'un à l'autre, puisque la tangente se répète tous les \(180^\circ\).`],
      S`\(150^\circ,\ 330^\circ\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[-4.33, 2.5], [4.33, -2.5]], color: "violet" }], points: [{ x: -4.33, y: 2.5, label: "150°", color: "amber" }, { x: 4.33, y: -2.5, label: "330°", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une identité", S`Démontre que \(\dfrac{\cos^2\theta}{1-\sin\theta}=1+\sin\theta\).`,
      [S`<b>Commence par le membre le plus compliqué.</b> MG \(=\dfrac{\cos^2\theta}{1-\sin\theta}\). On veut simplifier le dénominateur.`,
        S`<b>Réécris le numérateur.</b> L'identité de Pythagore donne \(\cos^2\theta=1-\sin^2\theta\).`,
        S`<b>Factorise.</b> C'est une différence de carrés : \(1-\sin^2\theta=(1-\sin\theta)(1+\sin\theta)\).`,
        S`<b>Simplifie,</b> pour \(\sin\theta\ne1\). MG \(=1+\sin\theta=\) MD.`,
        S`<b>Teste une valeur.</b> À \(\theta=30^\circ\) : \(\frac{3/4}{1/2}=\frac32\) et \(1+\frac12=\frac32\) ✓. Le graphique est celui de \(1+\sin\theta\), avec un trou à \(90^\circ\), là où le membre de gauche n'est pas défini.`],
      "MG = MD ∎",
      plane({ view: { xmin: 0, xmax: 360, ymin: -0.5, ymax: 2.5 }, curves: [{ f: (x) => 1 + sin(x), color: "violet" }], points: [{ x: 30, y: 1.5, label: "(30°, 3/2)", color: "amber" }, { x: 90, y: 2, label: "trou à 90°", color: "red" }], step: { x: 30, y: 0.5 }, xlabel: "θ" })],
    ["Le cas ambigu", S`\(\angle A=41^\circ\), \(a=9\), \(b=13\). Trouve toutes les valeurs possibles de ∠B.`,
      [S`<b>Reconnais le cas CCA.</b> L'angle donné n'est pas compris entre les côtés donnés; vérifie donc le nombre de triangles.`,
        S`<b>Hauteur.</b> \(h=b\sin A=13\sin41^\circ\approx${f(13 * sin(41))}\).`,
        S`<b>Compare.</b> \(${f(13 * sin(41))}<9<13\), c'est-à-dire \(h<a<b\); il y a donc deux triangles.`,
        S`<b>Loi des sinus.</b> \(\sin B=\frac{13\sin41^\circ}9\), donc \(B\approx${f(B4, 1)}^\circ\) ou \(B\approx180^\circ-${f(B4, 1)}^\circ=${f(B4b, 1)}^\circ\).`,
        S`<b>Vérifie.</b> Les deux conviennent : \(41^\circ+${f(B4b, 1)}^\circ<180^\circ\) ✓. La figure montre le côté \(a\) qui atteint la base en deux endroits.`],
      S`\(B\approx${f(B4, 1)}^\circ\) ou \(${f(B4b, 1)}^\circ\)`,
      plane({ view: { xmin: -1, xmax: 15, ymin: -1, ymax: 10 }, segs: [{ pts: [[0, 0], [13 * cos(41), 13 * sin(41)]], color: "blue" }, { pts: [[13 * cos(41), 13 * sin(41)], [13 * cos(41) - Math.sqrt(81 - (13 * sin(41)) ** 2), 0]], color: "amber" }, { pts: [[13 * cos(41), 13 * sin(41)], [13 * cos(41) + Math.sqrt(81 - (13 * sin(41)) ** 2), 0]], color: "violet" }, { pts: [[0, 0], [14, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A" }, { x: 13 * cos(41), y: 13 * sin(41), label: "C" }, { x: 13 * cos(41) - Math.sqrt(81 - (13 * sin(41)) ** 2), y: 0, label: "B₂" }, { x: 13 * cos(41) + Math.sqrt(81 - (13 * sin(41)) ** 2), y: 0, label: "B₁" }], step: { x: 1, y: 1 } })],
    ["Loi des cosinus, puis loi des sinus", S`\(b=12\), \(c=7\), \(\angle A=73^\circ\). Trouve \(a\) et \(\angle C\).`,
      [S`<b>Départ.</b> L'angle est compris entre les deux côtés (CAC); la loi des cosinus vient donc en premier : \(a^2=144+49-168\cos73^\circ\).`,
        S`<b>Calcule.</b> \(a^2\approx193-${f(168 * cos(73))}\), donc \(a\approx${f(e5a)}\).`,
        S`<b>Choisis bien l'angle suivant.</b> \(C\) est opposé au plus petit côté, 7; il est donc forcément aigu. Cela évite l'ambiguïté de \(\sin^{-1}\).`,
        S`<b>Loi des sinus.</b> \(\sin C=\frac{7\sin73^\circ}{${f(e5a)}}\), donc \(C\approx${f(e5C, 1)}^\circ\).`,
        S`<b>Vérifie.</b> \(B\approx180^\circ-73^\circ-${f(e5C, 1)}^\circ=${f(180 - 73 - e5C, 1)}^\circ\). Le plus grand côté, 12, fait face à ce plus grand angle, comme il se doit ✓`],
      S`\(a\approx${f(e5a)}\), \(C\approx${f(e5C, 1)}^\circ\)`,
      plane({ view: { xmin: -1, xmax: 13, ymin: -1, ymax: 9 }, segs: [{ pts: [[0, 0], [12, 0], [7 * cos(73), 7 * sin(73)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A" }, { x: 12, y: 0, label: "C" }, { x: 7 * cos(73), y: 7 * sin(73), label: "B" }, { x: 6, y: 0, label: "12" }], step: { x: 2, y: 2 } })],
  ]),

  practice([
    q("exacte", S`Que vaut \(\sin330^\circ\)?`, choice([S`\(-\frac12\)`, S`\(\frac12\)`, S`\(-\frac{\sqrt3}2\)`, S`\(\frac{\sqrt3}2\)`], 0),
      "Angle de référence 30°, quadrant 4.", [S`\(-\sin30^\circ\).`], S`\(-\frac12\)`),
    q("deux angles", S`Résous \(\cos\theta=-\frac1{\sqrt2}\) pour \(0^\circ\le\theta\le360^\circ\).`, roots(135, 225),
      "Angle de référence 45°, Q2 et Q3.", [S`\(180-45\), \(180+45\).`], S`\(135^\circ,\ 225^\circ\)`),
    q("rapport inverse", S`Évalue \(\sec^2 45^\circ\).`, num(2),
      "sec 45° = √2.", [S`\((\sqrt2)^2\).`], S`\(2\)`),
    q("loi des sinus", S`\(\angle A=55^\circ\), \(\angle C=80^\circ\), \(c=20\). Trouve \(a\) (au centième près).`, num((20 * sin(55)) / sin(80), 0.01),
      "a / sin A = c / sin C.", [S`\(\frac{20\sin55^\circ}{\sin80^\circ}\).`], S`\(\approx${f((20 * sin(55)) / sin(80))}\)`),
    q("loi des cosinus", "Un triangle a des côtés de 6, 7 et 11. Trouve son plus grand angle (au dixième près).", num(dg(Math.acos((36 + 49 - 121) / 84)), 0.05),
      "Opposé au côté 11.", [S`\(\cos\theta=\frac{36+49-121}{84}\).`], S`\(\approx${f(dg(Math.acos(-36 / 84)), 1)}^\circ\)`),
  ]),

  ...hard([
    ["Un champ à quatre côtés", "Un champ ABCD a AB = 90 m, AD = 70 m et ∠BAD = 64°. Les deux autres côtés mesurent BC = 60 m et CD = 55 m. Trouve la diagonale BD et ∠BCD.",
      [S`Triangle ABD (CAC) : \(BD^2=90^2+70^2-2(90)(70)\cos64^\circ\Rightarrow BD\approx${f(hD, 1)}\) m.`, S`Triangle BCD (CCC) : \(\cos\angle BCD=\frac{60^2+55^2-BD^2}{2(60)(55)}\Rightarrow\angle BCD\approx${f(hAng, 1)}^\circ\).`],
      S`\(BD\approx${f(hD, 1)}\) m, \(\angle BCD\approx${f(hAng, 1)}^\circ\)`,
      plane({ view: { xmin: -10, xmax: 100, ymin: -10, ymax: 100 }, segs: [{ pts: [[0, 0], [90, 0]], color: "blue" }, { pts: [[0, 0], [70 * cos(64), 70 * sin(64)]], color: "blue" }, { pts: [[90, 0], [70 * cos(64), 70 * sin(64)]], color: "red" }], points: [{ x: 0, y: 0, label: "A" }, { x: 90, y: 0, label: "B" }, { x: 70 * cos(64), y: 70 * sin(64), label: "D" }], step: { x: 10, y: 10 } }, "triangle ABD; C se trouve au-delà de la diagonale BD")],
    ["Une tour vue de deux côtés", "À partir de A, situé à 75 m de la base C d'une tour, on voit le sommet sous un angle de 33°. À partir de B, on voit le sommet sous un angle de 24°. Au sol, ∠ACB = 110°. Trouve la hauteur de la tour et AB.",
      [S`\(h=75\tan33^\circ\approx${f(hh, 1)}\) m.`, S`\(BC=\frac h{\tan24^\circ}\approx${f(hB, 1)}\) m.`, S`\(AB^2=75^2+BC^2-2(75)(BC)\cos110^\circ\Rightarrow AB\approx${f(hAB, 1)}\) m.`],
      S`\(h\approx${f(hh, 1)}\) m, \(AB\approx${f(hAB, 1)}\) m`],
  ], [
    q("difficile", S`\(\sin\theta=-\frac{8}{17}\) et \(\tan\theta>0\). Trouve \(\sec\theta\) (4 décimales).`, num(-17 / 15, 0.0001),
      "Quadrant 3 : x = −15.", [S`\(\cos\theta=-\frac{15}{17}\).`], S`\(\approx-1.1333\)`),
    q("difficile", S`\(\angle A=35^\circ\), \(b=20\). Pour combien de valeurs entières de \(a\) y a-t-il deux triangles?`, num(20 - Math.floor(20 * sin(35)) - 1),
      "Il faut h < a < b avec h = 20 sin 35°.", [S`\(h\approx${f(20 * sin(35))}\), donc \(a=12,13,\ldots,19\).`], S`\(${20 - Math.floor(20 * sin(35)) - 1}\)`),
    q("difficile", "Un prisme mesure 6 sur 8 sur 10. Trouve l'angle entre sa diagonale de l'espace et la base de 6 sur 8 (au dixième près).", num(dg(Math.atan(10 / 10)), 0.05),
      "Diagonale de la base : 10.", [S`\(\tan\theta=\frac{10}{10}\).`], S`\(45^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelles sont les erreurs les plus fréquentes?", "Oublier le deuxième triangle dans le cas CCA, confondre les côtés opposés et oublier le mode de la calculatrice."],
      ["Comment choisir rapidement une loi?", "Cherche une paire connue côté–angle opposé : s'il y en a une, utilise la loi des sinus."],
      ["Comment trouver les deux angles ayant un rapport donné?", "Trouve l'angle de référence, puis place-le dans les deux quadrants permis par la règle CAST."],
      ["Comment aborder les problèmes en 3-D?", "Trouve un triangle plat qui contient assez de données et transmets le côté de liaison."],
      ["Comment devrais-je étudier?", "Refais les problèmes de niveau difficile de chaque leçon, puis vérifie avec les outils d'exploration."],
    ],
    summary: [
      "Les valeurs exactes viennent de deux triangles remarquables et de la règle CAST.",
      "Identités : réécris un membre en fonction de sin et de cos.",
      "CCA : vérifie s'il y a 0, 1 ou 2 triangles.",
      "CAC, CCC : loi des cosinus; 3-D : un plan à la fois.",
    ],
    next: "Le chapitre 6 étudie les fonctions sinusoïdales.",
  }),
];
