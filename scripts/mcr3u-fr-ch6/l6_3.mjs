// MCR3U-FR 6.3 — Interpréter des graphiques sinusoïdaux : grandes roues, roues de vélo et autres objets en rotation;
// relier le rayon, la hauteur du centre et la durée d'un tour à l'amplitude, à l'axe et à la période; domaine et image en contexte
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.3 Interpréter des graphiques sinusoïdaux";
export const ID = lessonId(6, 3);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const wheel = (t) => 11 - 9 * Math.cos(r(9 * t));
const th = (Math.acos(-0.3) * 180) / Math.PI, t1 = th / 6, t2 = (360 - th) / 6;

export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Interpréter des graphiques sinusoïdaux",
    overview: S`Lorsqu'un objet tourne à vitesse constante — une grande roue, une roue de vélo, une éolienne — la hauteur d'un point sur cet objet est une fonction sinusoïdale du temps. Chaque caractéristique du graphique a une signification physique : l'axe est la hauteur du centre, l'amplitude est le rayon et la période est la durée d'un tour. Dans cette leçon, tu vas lire ces graphiques et les relier aux situations qu'ils décrivent.`,
    goals: [
      "repérer le maximum, le minimum, l'axe, l'amplitude et la période sur un graphique réel;",
      "relier chaque propriété à la situation physique;",
      "trouver les instants où se produisent un maximum, un minimum ou une valeur sur l'axe;",
      "donner des restrictions raisonnables du domaine et de l'image selon le contexte;",
      "comparer deux situations à partir de leurs graphiques.",
    ],
    curriculum: "D3.2 (reconnaître des fonctions périodiques et sinusoïdales, y compris celles qui proviennent d'applications réelles de phénomènes périodiques, à partir de diverses représentations, et expliquer les restrictions que le contexte impose au domaine et à l'image), D3.4 (formuler et résoudre des problèmes d'application portant sur une fonction sinusoïdale à l'aide d'un graphique donné)",
    prior: [
      ["Une roue a un diamètre de 18 m. Quel est son rayon?", "9 m."],
      ["Max 20, min 2 : quel est l'axe?", "y = 11."],
      ["Quelle est la circonférence d'un cercle de 66 cm de diamètre?", "environ 207.3 cm."],
    ],
    words: [
      ["Axe (hauteur du centre)", "la hauteur du moyeu de la roue", ""],
      ["Amplitude (rayon)", "la distance dont le point monte au-dessus du moyeu et descend sous le moyeu", ""],
      ["Période (durée d'un tour)", "la durée d'une révolution complète", ""],
      ["Domaine restreint", "seulement les instants qui ont du sens, p. ex. la durée du tour de manège", ""],
    ],
  }),

  section("📌 Une roue et son graphique", S`
  ${plane({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 22 }, curves: [{ f: wheel, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true, label: "moyeu 11 m" }], points: [{ x: 0, y: 2, label: "embarquement" }, { x: 20, y: 20, label: "sommet" }, { x: 40, y: 2, label: "bas" }], step: { x: 5, y: 2 } }, "rayon 9 m, moyeu à 11 m, un tour toutes les 40 s")}
  ${table(["Sur la roue", "Sur le graphique"], [["hauteur du moyeu", "axe : \\(\\frac{\\max+\\min}2\\)"], ["rayon", "amplitude : \\(\\frac{\\max-\\min}2\\)"], ["durée d'un tour", "période"], ["hauteur d'embarquement", "minimum (si on embarque au bas de la roue)"]])}
  ${keyIdea("Pars de la situation : max = moyeu + rayon, min = moyeu − rayon. Un quart de tour après le bas, la personne est à la hauteur du moyeu; un demi-tour après le bas, elle est au sommet.")}`),

  section("📌 Explorer", S`<p>Modifie la roue et observe le graphique. Quel curseur change l'axe, lequel change l'amplitude et lequel change la période?</p>`),

  widget("wheelLab", { init: [10, 12, 60] }),

  section("📌 Attention", watchOut([
    "L'amplitude est le rayon, et non le diamètre.",
    "La période est une durée (ou une distance), et non une hauteur.",
    "La personne est à la hauteur du moyeu deux fois par tour.",
    "Seuls les instants pendant le tour de manège ont du sens — restreins le domaine.",
  ])),

  examples([
    ["Lire la roue", "La hauteur d'une personne sur une grande roue est h = 11 − 9cos(9t)°, représentée sur le graphique. Donne le maximum, le minimum, l'axe, l'amplitude et la période, et ce que chacun signifie.",
      [S`<b>Maximum et minimum.</b> Le graphique culmine à 20 m et descend jusqu'à 2 m. Ce sont le sommet de la roue et la hauteur d'embarquement.`,
        S`<b>Axe.</b> \(h=\frac{20+2}2=11\) m. C'est la hauteur du moyeu.`,
        S`<b>Amplitude.</b> \(\frac{20-2}2=9\) m. C'est le rayon de la roue.`,
        S`<b>Période.</b> Des minimums en \(t=0\) et \(t=40\) donnent 40 s, la durée d'un tour.`,
        S`<b>Vérification.</b> Moyeu + rayon \(=20\) ✓ et moyeu − rayon \(=2\) ✓`],
      "max 20 m (sommet), min 2 m (embarquement), axe 11 m (moyeu), amplitude 9 m (rayon), période 40 s (un tour)",
      plane({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }], points: [{ x: 0, y: 2, label: "(0, 2)" }, { x: 20, y: 20, label: "(20, 20)", color: "amber" }, { x: 40, y: 2, label: "(40, 2)" }], step: { x: 10, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Les instants au sommet", "Pour la même roue (période 40 s, embarquement en t = 0), quand la personne est-elle au sommet pendant les 80 premières secondes?",
      [S`<b>Première fois.</b> La personne embarque au bas. Le sommet arrive un demi-tour plus tard : \(\frac{40}2=20\) s.`,
        S`<b>Répéter.</b> Le sommet revient à chaque période : \(20+40=60\) s.`,
        S`<b>Arrêter.</b> Le suivant, \(100\) s, dépasse 80 s.`,
        S`<b>Vérification.</b> \(h(20)=11-9\cos180^\circ=11+9=20\) ✓. \(h(60)=11-9\cos540^\circ=20\) ✓`],
      S`\(t=20\) s et \(t=60\) s`,
      plane({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "amber", dash: true }], points: [{ x: 20, y: 20, label: "(20, 20)", color: "amber" }, { x: 60, y: 20, label: "(60, 20)", color: "amber" }], step: { x: 10, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Domaine et image en contexte", "Le tour de manège dure exactement trois tours de roue. Donne le domaine et l'image de la fonction hauteur.",
      [S`<b>Domaine.</b> Il couvre la durée du tour de manège. Trois tours prennent \(3\times40=120\) s, donc \(0\le t\le120\).`,
        S`<b>Image.</b> Elle couvre les hauteurs atteintes. Chaque tour va de 2 m jusqu'à 20 m, donc \(2\le h\le20\).`,
        S`<b>Pourquoi pas tous les nombres réels?</b> La règle fonctionne pour tout \(t\), mais le tour de manège n'existe pas avant l'embarquement ni après la fin.`,
        S`<b>Vérification sur le graphique.</b> La courbe n'est tracée que de \(t=0\) à \(t=120\) et montre trois cycles complets ✓`],
      S`domaine \(0\le t\le120\); image \(2\le h\le20\)`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, b: 120, color: "violet" }], points: [{ x: 0, y: 2, label: "(0, 2)" }, { x: 120, y: 2, label: "(120, 2)", color: "amber" }], step: { x: 20, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["À la hauteur du moyeu", "À quels instants du premier tour la personne est-elle à la hauteur du moyeu, et à quelle hauteur est-elle alors?",
      [S`<b>Signification.</b> À la hauteur du moyeu signifie que la hauteur est sur l'axe, \(h=11\) m.`,
        S`<b>Où sur la roue?</b> En partant du bas, la personne atteint la hauteur du moyeu après un quart de tour, puis de nouveau après trois quarts de tour.`,
        S`<b>Instants.</b> \(\frac14(40)=10\) s et \(\frac34(40)=30\) s.`,
        S`<b>Vérification.</b> \(h(10)=11-9\cos90^\circ=11\) ✓. \(h(30)=11-9\cos270^\circ=11\) ✓`],
      S`\(t=10\) s et \(t=30\) s, à 11 m`,
      plane({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }], points: [{ x: 10, y: 11, label: "(10, 11)", color: "amber" }, { x: 30, y: 11, label: "(30, 11)", color: "amber" }], step: { x: 5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Un caillou dans un pneu", "Une roue de vélo a un diamètre de 66 cm. Un caillou est coincé dans la semelle du pneu. Décris le graphique de la hauteur du caillou en fonction de la distance parcourue par le vélo.",
      [S`<b>Extrêmes.</b> Le caillou touche le sol (0 cm) et atteint le haut de la roue (66 cm).`,
        S`<b>Axe et amplitude.</b> Axe \(\frac{66+0}2=33\) cm, à la hauteur de l'essieu. Amplitude \(\frac{66-0}2=33\) cm, le rayon.`,
        S`<b>Période.</b> La variable indépendante est la distance, et non le temps. Un tour complet fait avancer le vélo d'une circonférence : \(66\pi\approx${f(66 * Math.PI, 1)}\) cm.`,
        S`<b>Vérification du bon sens.</b> Le graphique commence à 0 et revient à 0 à chaque circonférence, comme le montre la figure ✓`],
      S`axe 33 cm, amplitude 33 cm, période \(\approx${f(66 * Math.PI, 1)}\) cm`,
      plane({ view: { xmin: 0, xmax: 450, ymin: 0, ymax: 75 }, curves: [{ f: (x) => 33 - 33 * Math.cos((2 * Math.PI * x) / (66 * Math.PI)), color: "violet" }], lines: [{ m: 0, b: 33, color: "green", dash: true }], points: [{ x: 66 * Math.PI, y: 0, label: "(207.3, 0)", color: "amber" }, { x: 33 * Math.PI, y: 66, label: "(103.7, 66)" }], step: { x: 50, y: 10 }, xlabel: "distance (cm)", ylabel: "hauteur (cm)" })],
  ]),

  practice([
    q("rayon", "Le graphique d'une grande roue a un maximum de 25 m et un minimum de 3 m. Quel est le rayon de la roue?", num(11),
      "L'amplitude.", [S`\(\frac{25-3}2\).`], S`\(11\) m`),
    q("moyeu", "Pour la même roue (max 25 m, min 3 m), à quelle hauteur se trouve le moyeu?", num(14),
      "L'axe.", [S`\(\frac{25+3}2\).`], S`\(14\) m`),
    q("période", "Sur un graphique hauteur-temps, des maximums consécutifs se trouvent en t = 15 s et t = 75 s. Combien de temps dure un tour?", num(60),
      "D'un sommet à l'autre.", [S`\(75-15\).`], S`\(60\) s`),
    q("signification", "Le graphique hauteur-temps d'une roue a une période de 30 s. Qu'est-ce que cela signifie?", choice(["la roue fait un tour toutes les 30 s", "la roue mesure 30 m de haut", "le tour de manège dure 30 s", "la personne reste au sommet pendant 30 s"], 0),
      "Période = durée d'un cycle.", ["Un cycle du graphique correspond à un tour."], "un tour toutes les 30 s"),
    q("minimum", "Une roue a un rayon de 8 m et son moyeu est à 10 m du sol. Quelle est la hauteur minimale d'une personne?", num(2),
      "moyeu − rayon.", [S`\(10-8\).`], S`\(2\) m`),
  ]),

  ...hard([
    ["Deux roues", "Des personnes embarquent au bas de deux roues en t = 0. Roue A : rayon 8 m, moyeu à 10 m, 32 s par tour. Roue B : rayon 6 m, moyeu à 9 m, 24 s par tour. Qui est le plus haut en t = 16 s?",
      [S`A : 16 s correspond à un demi-tour — au sommet, 18 m.`, S`B : 16 s correspond aux \(\tfrac23\) d'un tour : \(9-6\cos240^\circ=9+3=12\) m.`],
      "A est plus haut (18 m contre 12 m)",
      plane({ view: { xmin: 0, xmax: 48, ymin: 0, ymax: 20 }, curves: [{ f: (t) => 10 - 8 * Math.cos(r(11.25 * t)), color: "violet" }, { f: (t) => 9 - 6 * Math.cos(r(15 * t)), color: "amber" }], points: [{ x: 16, y: 18, label: "A" }, { x: 16, y: 12, label: "B" }], step: { x: 4, y: 2 } })],
    ["Combien de temps au-dessus de 15 m?", S`Une roue a un rayon de 10 m, un moyeu à 12 m et fait un tour toutes les 60 s; la hauteur de la personne est \(h=12-10\cos(6t)^\circ\). Pendant combien de temps, à chaque tour, la personne est-elle au-dessus de 15 m?`,
      [S`\(12-10\cos(6t)\ge15\Rightarrow\cos(6t)\le-0.3\).`, S`\(6t\) entre \(${f(th, 2)}^\circ\) et \(${f(360 - th, 2)}^\circ\) : \(t\) de \(${f(t1)}\) à \(${f(t2)}\) s.`],
      S`\(\approx${f(t2 - t1)}\) s par tour`],
  ], [
    q("difficile", "Une roue de vélo a un diamètre de 70 cm. Quelle est la période du graphique de la hauteur d'un caillou en fonction de la distance parcourue (cm, 2 décimales)?", num(70 * Math.PI, 0.01),
      "La circonférence.", [S`\(70\pi\).`], S`\(\approx${f(70 * Math.PI)}\) cm`),
    q("difficile", "Le graphique d'une personne sur une roue a un axe à 9 m et une amplitude de 7 m. Quelle est la hauteur minimale?", num(2),
      "axe − amplitude.", [S`\(9-7\).`], S`\(2\) m`),
    q("difficile", "Quelle fraction de chaque tour une personne passe-t-elle au-dessus du moyeu? Entre un nombre décimal.", num(0.5),
      "La symétrie.", ["La moitié du cercle est au-dessus du moyeu."], S`\(0.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le graphique commence-t-il au minimum?", "On embarque habituellement au bas de la roue."],
      ["Comment obtenir le rayon à partir d'un graphique?", "Amplitude = (max − min)/2."],
      ["Que se passe-t-il si la roue tourne plus vite?", "La période raccourcit; l'axe et l'amplitude restent les mêmes."],
      ["Pourquoi restreindre le domaine?", "Le modèle ne décrit le tour de manège que pendant qu'il a lieu."],
      ["Le graphique du caillou d'un vélo est-il en fonction du temps ou de la distance?", "Les deux conviennent; en fonction de la distance, la période est la circonférence."],
    ],
    summary: [
      "Axe = hauteur du moyeu; amplitude = rayon.",
      "Période = durée (ou distance) d'un tour.",
      "Max = moyeu + rayon; min = moyeu − rayon.",
      "Restreins le domaine et l'image selon le contexte.",
    ],
    next: "En 6.4, on étudie comment a, k, c et d transforment les graphiques du sinus et du cosinus.",
  }),
];
