// MCR3U-FR 6.2 — Graphiques des fonctions sinus et cosinus : du cercle unitaire à y = sin x et y = cos x, propriétés
// clés, périodicité, lien de déphasage entre les deux, résolution à l'aide du graphique
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.2 Graphiques des fonctions sinus et cosinus";
export const ID = lessonId(6, 2);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const sinG = (more = {}) => plane({ view: { xmin: -90, xmax: 720, ymin: -1.6, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(r(x)), color: "violet" }, ...(more.curves ?? [])], lines: more.lines ?? [], points: more.points ?? [], step: { x: 90, y: 0.5 } }, more.cap ?? "");

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Graphiques des fonctions sinus et cosinus",
    overview: S`Lorsqu'un point se déplace sur le cercle unitaire, son ordonnée est \(\sin x\) et son abscisse est \(\cos x\). En les représentant en fonction de l'angle, on obtient deux ondes lisses. Dans cette leçon, tu vas construire les graphiques de \(y=\sin x\) et de \(y=\cos x\) à partir du cercle unitaire, énumérer leurs propriétés clés et utiliser les graphiques pour trouver tous les angles qui donnent une valeur donnée.`,
    goals: [
      "construire les graphiques de y = sin x et de y = cos x à partir du cercle unitaire;",
      "donner la période, l'amplitude, l'axe, le domaine, l'image, les zéros et les maximums;",
      "relier les deux graphiques par une translation horizontale de 90°;",
      "évaluer sin et cos d'angles très grands ou négatifs à l'aide de la période;",
      "résoudre des équations comme sin x = 0.5 sur plusieurs cycles à l'aide du graphique.",
    ],
    curriculum: "D2.3 (établir des liens entre le rapport sinus et la fonction sinus, et entre le rapport cosinus et la fonction cosinus, en représentant graphiquement la relation entre les angles de 0° à 360° et les rapports sinus ou cosinus correspondants, et en définissant cette relation comme la fonction f(x) = sin x ou f(x) = cos x), D2.4 (esquisser les graphiques de f(x) = sin x et de f(x) = cos x pour des mesures d'angles exprimées en degrés, et déterminer et décrire leurs propriétés clés)",
    prior: [
      [S`Que vaut \(\sin150^\circ\)?`, S`\(\frac12\).`],
      [S`Que vaut \(\cos180^\circ\)?`, S`\(-1\).`],
      ["Sur le cercle unitaire, quel est le point à 90°?", "(0, 1)."],
    ],
    words: [
      ["Fonction sinusoïdale", "une fonction dont le graphique a la forme d'une onde sinusoïdale", ""],
      ["Zéro", "une valeur de x où le graphique coupe l'axe y = 0", ""],
      ["Déphasage", "une translation horizontale d'un graphique sinusoïdal", ""],
      ["Périodicité", "\\(\\sin(x+360^\\circ)=\\sin x\\), \\(\\cos(x+360^\\circ)=\\cos x\\)", ""],
    ],
  }),

  section("📌 Les deux graphiques de base", S`
  ${sinG({ curves: [{ f: (x) => Math.cos(r(x)), color: "amber" }], cap: "y = sin x (violet) et y = cos x (ambre)" })}
  ${table(["Propriété", "y = sin x", "y = cos x"], [["Période", "360°", "360°"], ["Amplitude / axe", "1, y = 0", "1, y = 0"], ["Image", "\\(-1\\le y\\le1\\)", "\\(-1\\le y\\le1\\)"], ["Zéros (0°–360°)", "0°, 180°, 360°", "90°, 270°"], ["Maximum", "(90°, 1)", "(0°, 1), (360°, 1)"], ["Minimum", "(270°, −1)", "(180°, −1)"]])}
  ${keyIdea(S`Le graphique du cosinus est le graphique du sinus translaté de 90° vers la gauche : \(\cos x=\sin(x+90^\circ)\). Les deux se répètent tous les 360°, donc \(\sin(x+360^\circ k)=\sin x\) pour tout entier \(k\).`)}`),

  section("📌 Explorer", S`<p>Fais tourner l'angle au-delà de 360°. Le segment rouge sur le cercle représente la valeur tracée : sa hauteur pour le sinus, sa position horizontale pour le cosinus.</p>`),

  widget("unitWave", { fn: "sin" }),

  section("📌 Attention", watchOut([
    "Le sinus commence à 0 en montant; le cosinus commence à son maximum.",
    "Le domaine est l'ensemble des nombres réels — les angles peuvent dépasser 360° ou être négatifs.",
    "Une droite horizontale y = k avec −1 < k < 1 coupe chaque cycle complet deux fois.",
    "Gradue l'axe des x en degrés tous les 90° pour que les points clés tombent sur les lignes du quadrillage.",
  ])),

  examples([
    ["Une table de valeurs", S`Remplis une table de \(\sin x\) pour \(x=0^\circ,30^\circ,\ldots,180^\circ\) et décris la régularité.`,
      [S`<b>Valeurs exactes.</b> D'après les triangles remarquables : \(\sin30^\circ=0.5\), \(\sin60^\circ=\frac{\sqrt3}2\approx0.87\), \(\sin90^\circ=1\).`,
        S`<b>Angles de référence.</b> Pour \(120^\circ\) et \(150^\circ\), dans le quadrant 2, le sinus est positif, avec des angles de référence de \(60^\circ\) et \(30^\circ\).`,
        S`<b>Table.</b> ${tv(["\\(x\\)", "\\(0^\\circ\\)", "\\(30^\\circ\\)", "\\(60^\\circ\\)", "\\(90^\\circ\\)", "\\(120^\\circ\\)", "\\(150^\\circ\\)", "\\(180^\\circ\\)"], ["\\(\\sin x\\)", "0", "0.5", "0.87", "1", "0.87", "0.5", "0"])}`,
        S`<b>Régularité.</b> Les valeurs montent jusqu'à 1 à \(90^\circ\), puis se répètent dans l'ordre inverse jusqu'à 0.`,
        S`<b>Pourquoi.</b> \(\sin(180^\circ-x)=\sin x\), ce qui correspond à la symétrie par rapport à \(x=90^\circ\) visible sur le graphique ✓`],
      S`\(0,\ 0.5,\ 0.87,\ 1,\ 0.87,\ 0.5,\ 0\); symétrique par rapport à \(x=90^\circ\)`,
      sinG({ points: [0, 30, 60, 90, 120, 150, 180].map((x) => ({ x, y: Math.sin(r(x)), label: x === 90 ? "(90°, 1)" : undefined })) })],
    ["Propriétés de y = sin x", "Donne le domaine, l'image, la période, l'amplitude, l'axe et les zéros de y = sin x entre 0° et 720°.",
      [S`<b>Domaine.</b> Tout angle a un sinus, donc le domaine est \(\mathbb R\).`,
        S`<b>Image.</b> Sur le cercle unitaire, le sinus est l'ordonnée, donc \(-1\le y\le1\).`,
        S`<b>Période.</b> Un tour complet de \(360^\circ\) ramène au même point.`,
        S`<b>Axe et amplitude.</b> Axe \(y=\frac{1+(-1)}2=0\), et amplitude \(\frac{1-(-1)}2=1\).`,
        S`<b>Zéros.</b> \(y=0\) sur le cercle unitaire à \(0^\circ\) et à \(180^\circ\), puis tous les \(180^\circ\) : \(0^\circ,180^\circ,360^\circ,540^\circ,720^\circ\).`],
      S`domaine \(\mathbb R\), image \(-1\le y\le1\), période \(360^\circ\), amplitude 1, axe \(y=0\); zéros 0°, 180°, 360°, 540°, 720°`,
      sinG({ points: [0, 180, 360, 540, 720].map((x) => ({ x, y: 0, label: `${x}°`, color: "amber" })) })],
    ["Le cosinus, un sinus translaté", S`Montre que \(\cos0^\circ=\sin90^\circ\) et que \(\cos90^\circ=\sin180^\circ\), puis explique la régularité.`,
      [S`<b>Évaluer.</b> \(\cos0^\circ=1=\sin90^\circ\), et \(\cos90^\circ=0=\sin180^\circ\).`,
        S`<b>Chercher la règle.</b> L'angle du sinus est toujours plus grand de \(90^\circ\). Une table plus longue le montre : ${tv(["\\(x\\)", "\\(0^\\circ\\)", "\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(270^\\circ\\)"], ["\\(\\cos x\\)", "1", "0", "\\(-1\\)", "0"], ["\\(\\sin(x+90^\\circ)\\)", "1", "0", "\\(-1\\)", "0"])}`,
        S`<b>Conclure.</b> \(\cos x=\sin(x+90^\circ)\). Ajouter \(90^\circ\) à l'intérieur déplace le graphique de \(90^\circ\) vers la gauche.`,
        S`<b>Vérification sur le graphique.</b> Le maximum du sinus à \(90^\circ\) se déplace au maximum du cosinus à \(0^\circ\) ✓`],
      "cosinus = sinus translaté de 90° vers la gauche",
      plane({ view: { xmin: -90, xmax: 450, ymin: -1.6, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(r(x)), color: "gray" }, { f: (x) => Math.cos(r(x)), color: "violet" }], points: [{ x: 0, y: 1, label: "(0°, 1)", color: "violet" }, { x: 90, y: 1, label: "(90°, 1)", color: "gray" }], step: { x: 45, y: 0.5 } }, "gris y = sin x, violet y = cos x")],
    ["Résoudre à l'aide du graphique", S`Trouve toutes les valeurs de \(x\) de 0° à 720° telles que \(\sin x=0.5\).`,
      [S`<b>Image mentale.</b> Trace la droite \(y=0.5\). Chaque point d'intersection avec la courbe est une solution.`,
        S`<b>Premier cycle.</b> L'angle de référence est \(30^\circ\). Le sinus est positif dans les quadrants 1 et 2 : \(x=30^\circ\) et \(x=180^\circ-30^\circ=150^\circ\).`,
        S`<b>Deuxième cycle.</b> Le graphique se répète après \(360^\circ\), donc ajoute \(360^\circ\) à chacune : \(390^\circ\) et \(510^\circ\).`,
        S`<b>Arrêter.</b> Les suivantes, \(750^\circ\) et plus, dépassent \(720^\circ\).`,
        S`<b>Vérification.</b> \(\sin510^\circ=\sin150^\circ=0.5\) ✓. La figure montre quatre points d'intersection.`],
      S`\(30^\circ,150^\circ,390^\circ,510^\circ\)`,
      sinG({ lines: [{ m: 0, b: 0.5, color: "amber", dash: true }], points: [30, 150, 390, 510].map((x) => ({ x, y: 0.5, label: `${x}°` })) })],
    ["Angles très grands et négatifs", S`Évalue \(\sin750^\circ\) et \(\cos(-60^\circ)\).`,
      [S`<b>Idée.</b> Ajouter ou soustraire des multiples de \(360^\circ\) mène au même côté terminal, donc la valeur ne change pas.`,
        S`<b>Grand angle.</b> \(750^\circ-720^\circ=30^\circ\), donc \(\sin750^\circ=\sin30^\circ=0.5\).`,
        S`<b>Angle négatif.</b> \(-60^\circ+360^\circ=300^\circ\), donc \(\cos(-60^\circ)=\cos300^\circ\).`,
        S`<b>Évaluer.</b> \(300^\circ\) est dans le quadrant 4, avec un angle de référence de \(60^\circ\), et le cosinus y est positif : \(0.5\).`,
        S`<b>Vérification.</b> Le graphique du cosinus est symétrique par rapport à l'axe des y, donc \(\cos(-60^\circ)=\cos60^\circ=0.5\) ✓`],
      S`\(0.5\) et \(0.5\)`,
      plane({ view: { xmin: -90, xmax: 780, ymin: -1.6, ymax: 1.6 }, curves: [{ f: (x) => Math.sin(r(x)), color: "violet" }, { f: (x) => Math.cos(r(x)), color: "blue" }], points: [{ x: 750, y: 0.5, label: "(750°, 0.5)", color: "violet" }, { x: -60, y: 0.5, label: "(−60°, 0.5)", color: "blue" }], step: { x: 90, y: 0.5 } }, "violet sin x, bleu cos x")],
  ]),

  practice([
    q("valeur", S`Évalue \(\sin270^\circ\).`, num(-1),
      "Le bas du cercle unitaire.", [S`Le point \((0,-1)\).`], S`\(-1\)`),
    q("périodicité", S`Évalue \(\cos540^\circ\).`, num(-1),
      "Soustrais 360°.", [S`\(\cos180^\circ\).`], S`\(-1\)`),
    q("maximum", S`Où \(y=\cos x\) atteint-elle son maximum entre 0° et 360°?`, choice(["à 0° et à 360°", "à 90°", "à 180°", "à 270°"], 0),
      "Le cosinus commence en haut.", [S`\(\cos0^\circ=1\).`], "0° et 360°"),
    q("zéros", S`Combien de zéros \(y=\sin x\) a-t-elle de 0° à 720° inclusivement?`, num(5),
      "Tous les 180°.", ["0°, 180°, 360°, 540°, 720°."], S`\(5\)`),
    q("valeur", S`Évalue \(\sin405^\circ\) au dix-millième près.`, num(Math.sin(r(45)), 0.0001),
      "405° − 360°.", [S`\(\sin45^\circ\).`], S`\(\approx0.7071\)`),
  ]),

  ...hard([
    ["Où les graphiques se coupent", S`Trouve où \(y=\sin x\) et \(y=\cos x\) se coupent pour \(0^\circ\le x\le360^\circ\), ainsi que les valeurs de y en ces points.`,
      [S`\(\sin x=\cos x\Rightarrow\tan x=1\).`, S`\(x=45^\circ\) (les deux valent \(\frac1{\sqrt2}\)) et \(x=225^\circ\) (les deux valent \(-\frac1{\sqrt2}\)).`],
      S`\((45^\circ,\frac1{\sqrt2})\), \((225^\circ,-\frac1{\sqrt2})\)`,
      plane({ view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(r(x)), color: "violet" }, { f: (x) => Math.cos(r(x)), color: "amber" }], points: [{ x: 45, y: Math.SQRT1_2, label: "45°" }, { x: 225, y: -Math.SQRT1_2, label: "225°" }], step: { x: 45, y: 0.5 } })],
    ["Une roue à aubes", "Une roue à aubes de rayon 1 m a son centre à la surface de l'eau. Un clou part de la position 3 heures et tourne dans le sens antihoraire. À quelle profondeur sous la surface se trouve-t-il après une rotation de 210°, et pour quels angles (0°–360°) est-il sous l'eau?",
      [S`Sa hauteur est \(\sin\theta\) : \(\sin210^\circ=-0.5\).`, S`Sous l'eau lorsque \(\sin\theta<0\) : \(180^\circ<\theta<360^\circ\).`],
      "0.5 m sous la surface; de 180° à 360°"],
  ], [
    q("difficile", S`Combien de solutions \(\cos x=0.3\) a-t-elle pour \(0^\circ\le x\le720^\circ\)?`, num(4),
      "Deux par cycle.", ["Deux cycles, deux points d'intersection chacun."], S`\(4\)`),
    q("difficile", S`Évalue \(\cos1110^\circ\) au dix-millième près.`, num(Math.cos(r(30)), 0.0001),
      "Retire trois tours complets.", [S`\(1110-1080=30\).`], S`\(\approx0.8660\)`),
    q("difficile", S`Trouve la plus petite valeur positive de \(x\) telle que \(\sin x=-1\).`, num(270),
      "Le bas du cercle.", [S`\((0,-1)\) est à 270°.`], S`\(270^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la période est-elle de 360°?", "Après un tour complet, le point est revenu à son point de départ, donc les valeurs se répètent."],
      ["Pourquoi l'image va-t-elle de −1 à 1?", "Le cercle unitaire a un rayon de 1, donc x et y ne peuvent jamais dépasser 1 en valeur absolue."],
      ["Quel est le lien entre le sinus et le cosinus?", "cos x = sin(x + 90°) : l'onde du cosinus est l'onde du sinus déplacée de 90° vers la gauche."],
      ["Comment résoudre sin x = k sur deux cycles?", "Trouve les deux solutions entre 0° et 360° (règle CAST ou graphique), puis ajoute 360°."],
      ["Que signifie un angle négatif?", "Une rotation dans le sens horaire; utilise la période pour trouver un angle équivalent entre 0° et 360°."],
    ],
    summary: [
      "y = sin x : commence en (0, 0), max (90°, 1).",
      "y = cos x : commence en (0, 1), min (180°, −1).",
      "Période 360°, amplitude 1, axe y = 0.",
      "cos x = sin(x + 90°).",
    ],
    next: "En 6.3, on interprète des graphiques sinusoïdaux issus de situations réelles.",
  }),
];
