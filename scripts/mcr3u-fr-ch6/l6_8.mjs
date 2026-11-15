// MCR3U-FR 6.8 — Révision du chapitre 6 : propriétés périodiques, graphiques de base, interprétation, transformations,
// points clés, équations et modèles (notation française y = a sin(k(x − c)) + d)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.8 Révision du chapitre 6";
export const ID = lessonId(6, 8);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const boat = (t) => 1.5 * Math.cos(r(72 * t)) + 4;
const lowW = (2 * (180 - dg(Math.acos((3 - 4) / 1.5)))) / 72;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 6",
    overview: S`Cette révision relie les parties du chapitre : les propriétés périodiques, les graphiques du sinus et du cosinus, l'interprétation de graphiques réels, les paramètres a, k, c et d, l'esquisse à l'aide de points clés, l'écriture d'équations et la résolution de problèmes à l'aide de modèles. Les exemples combinent plusieurs habiletés; les exercices et les problèmes du niveau difficile sont du niveau d'un examen de chapitre.`,
    goals: [
      "lire la période, l'axe et l'amplitude sur des graphiques, des tables et des descriptions;",
      "donner les propriétés de y = a sin(k(x − c)) + d et de y = a cos(k(x − c)) + d;",
      "esquisser une sinusoïde transformée à partir de ses points clés;",
      "écrire une équation à partir d'un graphique ou d'une description;",
      "utiliser un modèle pour prédire et pour trouver quand il est au-dessus ou au-dessous d'un niveau.",
    ],
    curriculum: "D2–D3 (relier les graphiques et les équations des fonctions sinusoïdales; résoudre des problèmes portant sur des fonctions sinusoïdales)",
    prior: [
      ["Max 12, min 4 : amplitude et axe?", "4 et y = 8."],
      [S`Période de \(y=\cos3x\)?`, "120°."],
      [S`Déphasage de \(y=\sin(2x+60^\circ)\)?`, "30° vers la gauche."],
    ],
    words: [
      ["6.1–6.3", "propriétés périodiques, graphiques de base, interprétation", ""],
      ["6.4–6.5", "paramètres et points clés", ""],
      ["6.6", "équations à partir de graphiques et de propriétés", ""],
      ["6.7", "modèles et niveaux", ""],
    ],
  }),

  section("📌 Le chapitre en une page", S`
  ${table(["Habileté", "Fait clé"], [["Propriétés", "axe \\(\\frac{\\max+\\min}2\\), amplitude \\(\\frac{\\max-\\min}2\\), période = un cycle"], ["Paramètres", "amplitude |a|, période 360°/|k|, déphasage c, axe y = d"], ["Esquisse", "\\((x,y)\\to(\\frac xk+c,\\ ay+d)\\) pour cinq points clés"], ["Équations", "a, d à partir du max et du min; k à partir de la période; c à partir d'un max (cos) ou d'un passage par l'axe en montant (sin)"], ["Modèles", "k = 360/période; résoudre pour l'angle, puis pour le temps"]])}
  ${keyIdea("La plupart des questions de ce chapitre commencent de la même façon : trouve le maximum, le minimum et la période. Tout le reste découle de ces trois nombres et d'un point de départ.")}`),

  section("📌 Explorer", S`<p>Utilise l'outil d'exploration pour vérifier les équations des exemples et des problèmes ci-dessous.</p>`),

  widget("fitSinusoid", { target: { fn: "cos", a: 2, k: 3, d: 30, c: -1 } }),

  examples([
    ["Propriétés à partir d'une table", S`La hauteur (m) d'une bouée, toutes les 2 s, est \(1.2,\ 2.0,\ 2.8,\ 2.0,\ 1.2,\ 2.0,\ 2.8\). Donne la période, l'axe et l'amplitude, et prédis la hauteur à 30 s.`,
      [S`<b>Organiser.</b> ${tv(["\\(t\\) (s)", "0", "2", "4", "6", "8", "10", "12"], ["\\(h\\) (m)", "1.2", "2.0", "2.8", "2.0", "1.2", "2.0", "2.8"])}`,
        S`<b>Période.</b> La hauteur revient à 1.2 en \(t=8\), donc la période est de 8 s. Le pas en x est de 2; ne te contente donc pas de compter les valeurs.`,
        S`<b>Axe et amplitude.</b> Axe \(\frac{2.8+1.2}2=2.0\) m et amplitude \(\frac{2.8-1.2}2=0.8\) m.`,
        S`<b>Prédire.</b> Retire des périodes entières : \(30=3\times8+6\), donc \(h(30)=h(6)=2.0\) m.`,
        S`<b>Vérification.</b> \(t=24\) commence un cycle à 1.2, puis 2.0, 2.8 et 2.0 en \(t=30\) ✓`],
      "période 8 s, axe 2.0 m, amplitude 0.8 m; 2.0 m à 30 s",
      plane({ view: { xmin: 0, xmax: 34, ymin: 0, ymax: 3.4 }, curves: [{ f: (t) => 2 - 0.8 * Math.cos(r(45 * t)), a: 0, color: "violet" }], lines: [{ m: 0, b: 2, color: "green", dash: true }], points: [{ x: 4, y: 2.8, label: "(4, 2.8)" }, { x: 8, y: 1.2, label: "(8, 1.2)" }, { x: 30, y: 2, label: "(30, 2)", color: "amber" }], step: { x: 2, y: 0.4 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Lire une équation", S`Donne l'amplitude, la période, le déphasage, l'axe et l'image de \(y=-4\sin(3x+90^\circ)+2\).`,
      [S`<b>Mettre en évidence d'abord.</b> \(3x+90^\circ=3(x+30^\circ)\), donc \(k=3\) et \(c=-30^\circ\). La translation n'est pas de \(90^\circ\).`,
        S`<b>Amplitude.</b> \(|a|=4\). Le signe moins produit une réflexion de la courbe par rapport à son axe.`,
        S`<b>Période.</b> \(\frac{360^\circ}3=120^\circ\).`,
        S`<b>Translation et axe.</b> \(30^\circ\) vers la gauche; axe \(y=2\).`,
        S`<b>Image.</b> \(2-4\le y\le2+4\), donc \(-2\le y\le6\).`,
        S`<b>Vérification.</b> \(x=60^\circ\) : \(-4\sin270^\circ+2=6\) ✓, le maximum.`],
      S`amplitude 4 (avec réflexion), période \(120^\circ\), \(30^\circ\) vers la gauche, axe \(y=2\), image \(-2\le y\le6\)`,
      plane({ view: { xmin: -60, xmax: 210, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -4 * Math.sin(r(3 * x + 90)) + 2, color: "violet" }], lines: [{ m: 0, b: 2, color: "green", dash: true }], points: [{ x: -30, y: 2, label: "(−30°, 2)", color: "amber" }, { x: 0, y: -2, label: "(0°, −2)" }, { x: 60, y: 6, label: "(60°, 6)" }], step: { x: 30, y: 1 } })],
    ["Points clés", S`Trouve les points clés d'un cycle de \(y=2\cos(0.5(x+60^\circ))-1\).`,
      [S`<b>Règle.</b> \(a=2\), \(k=0.5\), \(c=-60^\circ\), \(d=-1\) : \((x,y)\to\left(\frac x{0.5}-60^\circ,\ 2y-1\right)=(2x-60^\circ,\ 2y-1)\).`,
        S`<b>L'appliquer.</b> ${tv(["\\(\\cos x\\)", "\\((0^\\circ,1)\\)", "\\((90^\\circ,0)\\)", "\\((180^\\circ,-1)\\)", "\\((270^\\circ,0)\\)", "\\((360^\\circ,1)\\)"], ["image", "\\((-60^\\circ,1)\\)", "\\((120^\\circ,-1)\\)", "\\((300^\\circ,-3)\\)", "\\((480^\\circ,-1)\\)", "\\((660^\\circ,1)\\)"])}`,
        S`<b>Lire les propriétés.</b> La première et la dernière abscisse diffèrent de \(720^\circ\), la période. Les hauteurs vont de \(-3\) à 1.`,
        S`<b>Vérification.</b> \(x=300^\circ\) : \(2\cos180^\circ-1=-3\) ✓`],
      "période 720°, image −3 ≤ y ≤ 1",
      plane({ view: { xmin: -90, xmax: 720, ymin: -4, ymax: 2 }, curves: [{ f: (x) => 2 * Math.cos(r(0.5 * (x + 60))) - 1, color: "violet" }], points: [[-60, 1], [120, -1], [300, -3], [480, -1], [660, 1]].map(([x, y]) => ({ x, y })), lines: [{ m: 0, b: -1, color: "green", dash: true }], step: { x: 90, y: 1 } })],
    ["Une équation à partir d'un graphique", "Un graphique a un maximum en (30°, 1) et le minimum suivant en (90°, −3). Écris une équation avec cosinus.",
      [S`<b>Amplitude et axe.</b> \(a=\frac{1-(-3)}2=2\) et \(d=\frac{1+(-3)}2=-1\).`,
        S`<b>Période.</b> Du max au min suivant, il y a un demi-cycle : \(90^\circ-30^\circ=60^\circ\). La période est donc de \(120^\circ\) et \(k=3\).`,
        S`<b>Déphasage.</b> Le cosinus commence à un maximum : \(c=30^\circ\).`,
        S`<b>Équation.</b> \(y=2\cos(3(x-30^\circ))-1\).`,
        S`<b>Vérification.</b> \(x=90^\circ\) : \(2\cos180^\circ-1=-3\) ✓`],
      S`\(y=2\cos(3(x-30^\circ))-1\)`,
      plane({ view: { xmin: -30, xmax: 210, ymin: -4, ymax: 2 }, curves: [{ f: (x) => 2 * Math.cos(r(3 * (x - 30))) - 1, color: "violet" }], lines: [{ m: 0, b: -1, color: "green", dash: true }], points: [{ x: 30, y: 1, label: "(30°, 1)", color: "amber" }, { x: 90, y: -3, label: "(90°, −3)", color: "amber" }, { x: 150, y: 1, label: "(150°, 1)" }], step: { x: 30, y: 1 } })],
    ["Un modèle avec un niveau", S`La profondeur de l'eau à une rampe de mise à l'eau est \(D=1.5\cos(72t)+4\) (m, t en heures). Pendant combien de temps, à chaque cycle, la profondeur est-elle inférieure à 3 m?`,
      [S`<b>Poser l'inéquation.</b> \(1.5\cos\theta+4<3\), avec \(\theta=72t\). Soustrais 4 : \(1.5\cos\theta<-1\). Divise : \(\cos\theta<-\frac23\).`,
        S`<b>Trouver les angles.</b> \(\cos^{-1}\left(-\frac23\right)\approx${f(dg(Math.acos(-2 / 3)))}^\circ\). Par symétrie, l'autre angle est \(360^\circ\) moins celui-ci, \(\approx${f(360 - dg(Math.acos(-2 / 3)))}^\circ\). Le cosinus est inférieur à \(-\frac23\) entre les deux.`,
        S`<b>Convertir en temps.</b> La largeur de l'intervalle d'angles est \(\approx${f(360 - 2 * dg(Math.acos(-2 / 3)))}^\circ\). Chaque heure correspond à \(72^\circ\), donc divise par 72.`,
        S`<b>Résultat.</b> \(\approx${f(lowW)}\) h sur un cycle de 5 h.`,
        S`<b>Vérification sur le graphique.</b> La courbe est sous la droite pointillée \(D=3\) près de son minimum en \(t=2.5\) ✓`],
      S`\(\approx${f(lowW)}\) h`,
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 6 }, curves: [{ f: boat, color: "violet" }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [{ x: 2.5, y: 2.5, label: "(2.5, 2.5)" }, { x: 2.5 - lowW / 2, y: 3 }, { x: 2.5 + lowW / 2, y: 3 }], step: { x: 1, y: 1 }, xlabel: "t (h)", ylabel: "D (m)" })],
  ]),

  practice([
    q("amplitude", "Un graphique périodique a un max de 3.5 et un min de −0.5. Quelle est son amplitude?", num(2),
      "(max − min)/2.", [S`\(\frac{4}{2}\).`], S`\(2\)`),
    q("période", S`Quelle est la période de \(y=3\cos(6x)-2\)?`, num(60),
      "360 ÷ 6.", [S`\(60^\circ\).`], S`\(60^\circ\)`),
    q("déphasage", S`Quel est le déphasage de \(y=\sin(3x-45^\circ)\) (en degrés, positif vers la droite)?`, num(15),
      "Mets 3 en évidence.", [S`\(3(x-15^\circ)\).`], S`\(15^\circ\)`),
    q("image", S`Quelle est l'image de \(y=-0.5\sin x+4\)?`, choice([S`\(3.5\le y\le4.5\)`, S`\(-0.5\le y\le4\)`, S`\(3\le y\le5\)`, S`\(4\le y\le4.5\)`], 0),
      "4 ± 0.5.", ["Axe 4, amplitude 0.5."], S`\(3.5\le y\le4.5\)`),
    q("modèle", "Une roue a un rayon de 6 m, un moyeu à 8 m et fait un tour toutes les 30 s; on embarque au bas de la roue. Que vaut k dans h = −6 cos(kt) + 8?", num(12),
      "360 ÷ 30.", [S`\(12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["Deux formes d'un même modèle", "Une sinusoïde a un maximum de 9 en x = 50° et le minimum suivant de 1 en x = 140°. Écris une équation avec cosinus et une équation avec sinus.",
      [S`\(a=4\), \(d=5\), période de 180°, \(k=2\).`, S`Cosinus : \(c=50^\circ\). Sinus : le passage par l'axe en montant se trouve un quart de période (45°) avant le max : \(c=5^\circ\).`],
      S`\(y=4\cos(2(x-50^\circ))+5=4\sin(2(x-5^\circ))+5\)`,
      plane({ view: { xmin: -45, xmax: 360, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 4 * Math.cos(r(2 * (x - 50))) + 5, color: "violet" }], points: [{ x: 50, y: 9, label: "(50°, 9)" }, { x: 140, y: 1, label: "(140°, 1)" }, { x: 5, y: 5, label: "(5°, 5)" }], step: { x: 45, y: 1 } })],
    ["Un modèle complet", "La durée du jour dans une ville varie de 9 h (jour 355) à 15.4 h (jour 172), avec une période de 365 jours. Écris un modèle avec cosinus et utilise-le pour trouver la durée du jour le jour 60.",
      [S`\(a=3.2\), \(d=12.2\), \(k=\frac{360}{365}\), \(c=172\).`, S`\(L(60)=3.2\cos\left(\frac{360}{365}(60-172)\right)+12.2\).`],
      S`\(\approx${f(3.2 * Math.cos(r((360 / 365) * (60 - 172))) + 12.2)}\) h`],
  ], [
    q("difficile", S`Pour \(y=3\sin(2(x-30^\circ))+1\), à quelle valeur de x entre 0° et 180° se trouve le premier maximum?`, num(75),
      "Le max du sinus arrive un quart de période après le début.", [S`\(30+\frac{180}4\).`], S`\(75^\circ\)`),
    q("difficile", S`Une sinusoïde a une période de 90° et passe par un maximum en x = 20°. Quelle est l'abscisse du minimum suivant?`, num(65),
      "Une demi-période plus tard.", [S`\(20+45\).`], S`\(65^\circ\)`),
    q("difficile", "Une grande roue fait un tour en 48 s; rayon 10 m, moyeu à 12 m, embarquement au bas de la roue. Pendant combien de temps, à chaque tour, une personne est-elle au-dessus de 17 m (2 décimales)?", num(16, 0.01),
      "−10 cos(7.5t) + 12 ≥ 17 → cos ≤ −0.5.", [S`Angles de 120° à 240° : \(\frac{120}{7.5}\).`], S`\(16\) s`),
  ]),

  wrapUp({
    qas: [
      ["Quelles sont les erreurs les plus fréquentes?", "Prendre k pour la période, oublier de mettre k en évidence et lire l'amplitude comme étant le max."],
      ["Comment commencer n'importe quelle question de modélisation?", "Trouve le max, le min, la période et un point de départ."],
      ["Comment vérifier une esquisse?", "Vérifie l'axe, l'image et un point clé dans l'équation."],
      ["Pourquoi deux équations différentes peuvent-elles être correctes?", "Le sinus et le cosinus ne diffèrent que par une translation d'un quart de période."],
      ["Comment étudier?", "Refais les problèmes du niveau difficile de chaque leçon, puis vérifie-les avec les outils d'exploration."],
    ],
    summary: [
      "Max, min, période, point de départ.",
      "|a|, 360°/|k|, c, d.",
      "Points clés : (x/k + c, ay + d).",
      "Modèles : résoudre pour l'angle, puis pour le temps.",
    ],
    next: "Le chapitre 7 porte sur les fonctions discrètes : les suites et les séries.",
  }),
];
