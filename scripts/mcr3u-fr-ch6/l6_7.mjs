// MCR3U-FR 6.7 — Résoudre des problèmes à l'aide de modèles sinusoïdaux : construire des modèles à partir de
// descriptions et de données, évaluer, modifier les conditions, et trouver quand un modèle est au-dessus ou au-dessous
// d'un niveau (notation française y = a sin(k(x − c)) + d)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.7 Résoudre des problèmes à l'aide de modèles sinusoïdaux";
export const ID = lessonId(6, 7);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const wheel = (t) => -12 * Math.cos(r(4.5 * t)) + 14;
const tide = (t) => 3.9 * Math.cos(r(28.8 * (t - 3))) + 5.3;
const day = (t) => 3.1 * Math.sin(r((360 / 365) * (t - 81))) + 12.2;
const spring = (t) => 10 * Math.cos(r(225 * t)) + 15;
const warmW = (2 * dg(Math.acos(0.625)) * 365) / 360;
const tideW = (2 * dg(Math.acos((7 - 5.3) / 3.9))) / 28.8;

export const blocks = () => [
  intro({
    icon: "🌊",
    title: "Résoudre des problèmes à l'aide de modèles sinusoïdaux",
    overview: S`Un modèle sinusoïdal transforme une situation qui se répète en une équation avec laquelle tu peux calculer. À partir d'une description (une grande roue, une marée, la durée du jour), tu trouves le maximum, le minimum, la période et un point de départ, puis tu écris \(y=a\sin(k(x-c))+d\) ou une version avec cosinus. Tu peux ensuite prédire des valeurs, voir comment le modèle change lorsque la situation change, et trouver quand la grandeur est au-dessus ou au-dessous d'un niveau.`,
    goals: [
      "écrire un modèle sinusoïdal à partir d'une description verbale;",
      "utiliser un modèle pour prédire une valeur à un instant donné;",
      "expliquer comment un changement de la situation modifie a, k, c ou d;",
      "trouver les instants où un modèle est au-dessus ou au-dessous d'un niveau donné;",
      "juger dans quelle mesure un modèle s'ajuste aux données.",
    ],
    curriculum: "D3.1 (recueillir des données pouvant être modélisées par une fonction sinusoïdale, au moyen d'une exploration avec ou sans technologie, à partir de sources primaires ou secondaires, et représenter graphiquement les données), D3.3 (prédire les effets sur un modèle mathématique d'une application portant sur des phénomènes périodiques lorsque les conditions de l'application varient), D3.4 (formuler et résoudre des problèmes d'application portant sur une fonction sinusoïdale à l'aide d'un graphique donné ou d'un graphique produit avec la technologie à partir de son équation)",
    prior: [
      ["Une période de 80 s donne quelle valeur de k?", "360/80 = 4.5."],
      [S`Résous \(\cos\theta=-0.5\) pour \(0^\circ\le\theta\le360^\circ\).`, "120° et 240°."],
      [S`Que vaut \(-12\cos0^\circ+14\)?`, "2."],
    ],
    words: [
      ["Modèle", "une équation qui décrit une situation réelle", ""],
      ["Variable de temps", "t — mesuré en secondes, en heures ou en jours; l'angle est kt", ""],
      ["Seuil", "un niveau, comme une profondeur sécuritaire ou une température", ""],
      ["Ajustement", "dans quelle mesure le modèle correspond aux données", ""],
    ],
  }),

  section("📌 D'une description à un modèle", S`
  ${table(["Description", "Paramètre"], [["valeurs la plus haute et la plus basse", "\\(a=\\frac{\\max-\\min}2\\), \\(d=\\frac{\\max+\\min}2\\)"], ["durée d'un cycle", "\\(k=\\frac{360}{\\text{période}}\\)"], ["instant d'un maximum", "cosinus avec c = cet instant"], ["commence au minimum (p. ex. l'embarquement)", "\\(y=-a\\cos(kt)+d\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 160, ymin: 0, ymax: 28 }, curves: [{ f: wheel, color: "violet" }], lines: [{ m: 0, b: 20, color: "amber", dash: true, label: "20 m" }], points: [{ x: 26.67, y: 20, label: "26.7 s" }, { x: 53.33, y: 20, label: "53.3 s" }], step: { x: 20, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" }, "h = −12 cos(4.5t) + 14 : au-dessus de 20 m entre 26.7 s et 53.3 s de chaque tour")}
  ${keyIdea("Pour répondre à « quand est-ce au-dessus d'un niveau? », pose le modèle égal au niveau, résous pour l'angle kt sur un cycle, puis convertis en temps. La durée entre les deux solutions est le temps passé au-dessus.")}`),

  section("📌 Explorer", S`<p>Ajuste la courbe aux données, puis déplace la droite de niveau. L'affichage donne les intervalles de temps pendant lesquels le modèle est au-dessus de ce niveau.</p>`),

  widget("modelLab", { dataset: "daylight" }),

  section("📌 Attention", watchOut([
    "Utilise les degrés : k = 360 ÷ période.",
    "Si le cycle commence en bas, utilise −a cos — une source d'erreurs fréquente.",
    "Vérifie les unités : les heures, les jours ou les secondes doivent correspondre à la période.",
    "Il y a habituellement deux instants par cycle à un niveau donné.",
  ])),

  examples([
    ["Un modèle de grande roue", "Une roue de rayon 12 m a son moyeu à 14 m du sol et fait un tour toutes les 80 s. On embarque au bas de la roue. Écris un modèle et trouve la hauteur en t = 50 s.",
      [S`<b>Paramètres.</b> Le rayon donne \(a=12\). Le moyeu donne \(d=14\). La période donne \(k=\frac{360}{80}=4.5\).`,
        S`<b>Choisir la fonction.</b> En \(t=0\), la personne est en bas. Un cosinus négatif commence à son minimum, donc aucun déphasage n'est nécessaire : \(h=-12\cos(4.5t)+14\).`,
        S`<b>Vérifier le début.</b> \(h(0)=-12+14=2\) m, soit le moyeu moins le rayon ✓`,
        S`<b>Évaluer.</b> \(h(50)=-12\cos(225^\circ)+14\). Comme \(\cos225^\circ\approx-0.7071\), cela donne \(\approx8.49+14\).`,
        S`<b>Vérification du bon sens.</b> \(t=50\) s est après le sommet (à 40 s); la personne redescend donc et est encore au-dessus du moyeu ✓`],
      S`\(h=-12\cos(4.5t)+14\); \(h(50)\approx${f(wheel(50))}\) m`,
      plane({ view: { xmin: 0, xmax: 170, ymin: 0, ymax: 30 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 14, color: "green", dash: true }], points: [{ x: 0, y: 2, label: "(0, 2)" }, { x: 40, y: 26, label: "(40, 26)" }, { x: 50, y: wheel(50), label: "(50, 22.49)", color: "amber" }], step: { x: 20, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Un modèle de marée", "La marée haute est de 9.2 m à 3 h 00 et la marée basse suivante est de 1.4 m à 9 h 15. Écris un modèle et trouve la profondeur à midi.",
      [S`<b>Amplitude et axe.</b> \(a=\frac{9.2-1.4}2=3.9\) et \(d=\frac{9.2+1.4}2=5.3\).`,
        S`<b>Période.</b> De la marée haute à la marée basse, il y a un demi-cycle : de 3 h 00 à 9 h 15, il y a 6.25 h. La période est donc de 12.5 h, et \(k=\frac{360}{12.5}=28.8\).`,
        S`<b>Déphasage.</b> Le cosinus commence à un maximum, et la marée haute a lieu en \(t=3\), donc \(c=3\).`,
        S`<b>Modèle.</b> \(D=3.9\cos(28.8(t-3))+5.3\).`,
        S`<b>Évaluer.</b> À midi, \(t=12\) : \(D=3.9\cos(259.2^\circ)+5.3\approx${f(tide(12))}\) m.`,
        S`<b>Vérification.</b> \(D(9.25)=3.9\cos180^\circ+5.3=1.4\) ✓. Midi est après la marée basse, donc l'eau monte ✓`],
      S`\(D=3.9\cos(28.8(t-3))+5.3\); \(D(12)\approx${f(tide(12))}\) m`,
      plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, curves: [{ f: tide, color: "violet" }], points: [{ x: 3, y: 9.2, label: "3 h 00, 9.2" }, { x: 9.25, y: 1.4, label: "9 h 15, 1.4" }, { x: 12, y: tide(12), label: "midi", color: "amber" }], step: { x: 2, y: 1 }, xlabel: "t (h)", ylabel: "profondeur (m)" })],
    ["La durée du jour", S`Une ville a la plus longue durée d'ensoleillement, 15.3 h, le jour 172, et la plus courte, 9.1 h, une demi-année plus tard. Un modèle est \(L=3.1\sin\left(\frac{360}{365}(t-81)\right)+12.2\). Prédis la durée du jour le jour 100.`,
      [S`<b>Vérifier les nombres du modèle.</b> \(a=\frac{15.3-9.1}2=3.1\) et \(d=\frac{15.3+9.1}2=12.2\) ✓. La période est de 365 jours. En \(c=81\), la courbe coupe son axe en montant, près de l'équinoxe du printemps.`,
        S`<b>Angle.</b> \(\frac{360}{365}(100-81)=\frac{360}{365}(19)\approx18.74^\circ\).`,
        S`<b>Évaluer.</b> \(L=3.1\sin18.74^\circ+12.2\approx${f(day(100))}\) h.`,
        S`<b>Vérification du bon sens.</b> Le jour 100 vient peu après le jour 81, donc la durée du jour devrait être un peu au-dessus de la moyenne de 12.2 h, et c'est le cas ✓`],
      S`\(\approx${f(day(100))}\) h`,
      plane({ view: { xmin: 0, xmax: 365, ymin: 8, ymax: 17 }, curves: [{ f: day, color: "violet" }], lines: [{ m: 0, b: 12.2, color: "green", dash: true }], points: [{ x: 100, y: day(100), label: "(100, 13.2)", color: "amber" }, { x: 172, y: 15.3, label: "(172, 15.3)" }], step: { x: 50, y: 1 }, xlabel: "jour", ylabel: "L (h)" })],
    ["Modifier les conditions", "La roue du premier exemple (h = −12cos(4.5t) + 14) tourne maintenant plus vite, à raison d'un tour toutes les 40 s, et son moyeu est relevé de 1 m. Qu'est-ce qui change dans le modèle?",
      [S`<b>Période.</b> \(k=\frac{360}{40}=9\). Une période plus courte signifie un \(k\) plus grand.`,
        S`<b>Moyeu.</b> \(d=14+1=15\).`,
        S`<b>Rayon.</b> La taille de la roue ne change pas, donc \(a\) reste \(-12\).`,
        S`<b>Nouveau modèle.</b> \(h=-12\cos(9t)+15\).`,
        S`<b>Vérification.</b> \(h(0)=3\) m (1 m plus haut qu'avant) ✓. \(h(20)=-12\cos180^\circ+15=27\) m au sommet ✓`],
      S`\(h=-12\cos(9t)+15\)`,
      plane({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 30 }, curves: [{ f: wheel, a: 0, color: "gray" }, { f: (t) => -12 * Math.cos(r(9 * t)) + 15, a: 0, color: "violet" }], points: [{ x: 20, y: 27, label: "(20, 27)", color: "amber" }, { x: 0, y: 3, label: "(0, 3)" }], step: { x: 10, y: 3 }, xlabel: "t (s)", ylabel: "h (m)" }, "gris l'ancien modèle, violet le nouveau")],
    ["Au-dessus d'un niveau", "Pour la roue h = −12cos(4.5t) + 14, pendant combien de temps, à chaque tour, la personne est-elle au-dessus de 20 m?",
      [S`<b>Poser l'inéquation.</b> \(-12\cos(4.5t)+14\ge20\). Soustrais 14 : \(-12\cos(4.5t)\ge6\).`,
        S`<b>Diviser par \(-12\).</b> Le sens de l'inégalité change : \(\cos(4.5t)\le-0.5\).`,
        S`<b>Angles.</b> Sur un cycle, le cosinus est au plus \(-0.5\) pour les angles de \(120^\circ\) à \(240^\circ\).`,
        S`<b>Instants.</b> \(t=\frac{120}{4.5}\approx26.67\) s et \(t=\frac{240}{4.5}\approx53.33\) s.`,
        S`<b>Durée.</b> \(53.33-26.67\approx26.67\) s. C'est le tiers du tour de 80 s, et \(\frac{240-120}{360}=\frac13\) ✓`],
      S`\(\approx26.67\) s par tour`,
      plane({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 30 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "amber", dash: true }], points: [{ x: 26.67, y: 20, label: "(26.67, 20)" }, { x: 53.33, y: 20, label: "(53.33, 20)" }], step: { x: 10, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("maximum", S`Pour \(y=5\sin(30t)+7\), quelle est la valeur maximale?`, num(12),
      "d + a.", [S`\(7+5\).`], S`\(12\)`),
    q("période", S`Pour le modèle \(T=3\cos(15t)+4\), où t est en heures, quelle est la période en heures?`, num(24),
      "360 ÷ k.", [S`\(360\div15\).`], S`\(24\) h`),
    q("évaluer", S`Évalue \(h(t)=-4\cos(90t)+6\) en \(t=1\).`, num(6),
      "cos 90° = 0.", [S`\(-4(0)+6\).`], S`\(6\)`),
    q("évaluer", S`Évalue \(h(t)=-4\cos(90t)+6\) en \(t=2\).`, num(10),
      "cos 180° = −1.", [S`\(-4(-1)+6\).`], S`\(10\)`),
    q("conditions", "Un modèle de grande roue est h = −a cos(kt) + d. Si toute la roue est relevée de 2 m, quel paramètre change?", choice(["d", "a", "k", "aucun"], 0),
      "Le moyeu monte.", ["d augmente de 2."], "d"),
  ]),

  ...hard([
    ["Un ressort", "Une masse suspendue à un ressort se déplace entre 5 cm et 25 cm au-dessus d'une table et fait un cycle toutes les 1.6 s. On la lâche du haut en t = 0. Écris un modèle et trouve la hauteur en t = 1 s.",
      [S`\(a=10\), \(d=15\), \(k=\frac{360}{1.6}=225\); elle commence au max : cosinus.`, S`\(h(1)=10\cos225^\circ+15\).`],
      S`\(h=10\cos(225t)+15\); \(h(1)\approx${f(spring(1))}\) cm`,
      plane({ view: { xmin: 0, xmax: 3.2, ymin: 0, ymax: 28 }, curves: [{ f: spring, color: "violet" }], points: [{ x: 1, y: spring(1), label: "t = 1" }], step: { x: 0.4, y: 5 }, xlabel: "t (s)", ylabel: "h (cm)" })],
    ["Les journées chaudes", S`La température maximale quotidienne d'une ville est modélisée par \(T=16\cos\left(\frac{360}{365}(t-196)\right)+10\) (°C, t en jours). Pendant combien de jours par année la température maximale est-elle d'au moins 20 °C?`,
      [S`\(16\cos\theta+10\ge20\Rightarrow\cos\theta\ge0.625\Rightarrow|\theta|\le${f(dg(Math.acos(0.625)))}^\circ\).`, S`En jours : \(2\times${f(dg(Math.acos(0.625)))}\times\frac{365}{360}\).`],
      S`\(\approx${f(warmW, 1)}\) jours`],
  ], [
    q("difficile", "Une grande roue a un rayon de 15 m, un moyeu à 17 m et fait un tour toutes les 90 s; on embarque au bas de la roue. Trouve la hauteur en t = 30 s.", num(-15 * Math.cos(r(120)) + 17, 0.01),
      "h = −15 cos(4t) + 17.", [S`\(-15\cos120^\circ+17\).`], S`\(24.5\) m`),
    q("difficile", "Pour le modèle de marée de l'exemple 2, pendant combien d'heures par cycle la profondeur est-elle d'au moins 7 m (2 décimales)?", num(tideW, 0.01),
      "Résous 3.9 cos θ + 5.3 ≥ 7, puis divise par 28.8.", [S`\(\cos\theta\ge0.4359\).`], S`\(\approx${f(tideW)}\) h`),
    q("difficile", "La position d'un pendule se répète toutes les 1.2 s. Combien d'oscillations complètes (cycles) fait-il en une minute?", num(50),
      "60 ÷ 1.2.", [S`\(50\).`], S`\(50\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment choisir entre le sinus et le cosinus?", "Utilise le cosinus quand tu sais à quel moment se produit un max (ou un min); le sinus quand tu sais à quel moment la courbe coupe l'axe en montant."],
      ["Comment traiter des heures réelles comme 9 h 15?", "Convertis en heures écoulées depuis un instant de départ : 9 h 15 donne 9.25."],
      ["Pourquoi y a-t-il deux instants à un niveau donné?", "À chaque cycle, le graphique coupe chaque niveau une fois en montant et une fois en descendant."],
      ["Que signifie un mauvais ajustement?", "Les données ne sont peut-être pas parfaitement sinusoïdales, ou un paramètre doit être ajusté."],
      ["Puis-je utiliser le modèle loin dans le futur?", "Seulement si la situation continue de se répéter de la même façon."],
    ],
    summary: [
      "a, d à partir du max et du min; k = 360/période.",
      "Début : max → cosinus; en bas → −cos.",
      "Résous pour l'angle, puis convertis en temps.",
      "Modifier les conditions change des paramètres précis.",
    ],
    next: "En 6.8, on révise le chapitre.",
  }),
];
