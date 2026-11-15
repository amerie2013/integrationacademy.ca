// MCR3U-FR 6.1 — Fonctions périodiques et leurs propriétés : cycle, période, amplitude, axe; lecture de graphiques
// et de tables; prédire des valeurs futures par extrapolation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.1 Fonctions périodiques et leurs propriétés";
export const ID = lessonId(6, 1);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const zig = (t) => [2, 5, 8, 5][((t % 4) + 4) % 4];

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Fonctions périodiques et leurs propriétés",
    overview: S`Les marées, les battements du cœur, les saisons et une roue qui tourne se répètent tous. Une fonction dont les valeurs se répètent à intervalles réguliers est <strong>périodique</strong>. Dans cette leçon, tu vas reconnaître un comportement périodique dans des graphiques, des tables et des descriptions, lire sa <strong>période</strong>, son <strong>axe</strong> et son <strong>amplitude</strong>, et utiliser le motif qui se répète pour prédire des valeurs loin dans le futur.`,
    goals: [
      "décider si un graphique, une table ou une situation est périodique;",
      "repérer un cycle et mesurer la période;",
      "trouver l'axe et l'amplitude à partir du maximum et du minimum;",
      "prédire des valeurs futures à l'aide de la période;",
      "expliquer ce que chaque propriété signifie dans le contexte.",
    ],
    curriculum: "D2.1 (décrire les propriétés clés de fonctions périodiques issues d'applications réelles, à partir de représentations numériques ou graphiques), D2.2 (prédire, par extrapolation, le comportement futur d'une relation modélisée par une représentation numérique ou graphique d'une fonction périodique)",
    prior: [
      ["Quelle est la moyenne de 3 et de 11?", "7."],
      ["Quel est le reste de la division de 23 par 4?", "3."],
      ["La moitié de la distance de −2 à 8 est …", "5."],
    ],
    words: [
      ["Cycle", "une répétition complète du motif", ""],
      ["Période", "la longueur horizontale d'un cycle", ""],
      ["Axe", "la droite horizontale à mi-chemin entre le max et le min : \\(y=\\frac{\\max+\\min}2\\)", ""],
      ["Amplitude", "la distance verticale de l'axe à un max : \\(\\frac{\\max-\\min}2\\)", ""],
    ],
  }),

  section("📌 Lire les propriétés", S`
  ${plane({ view: { xmin: 0, xmax: 24, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 4 * Math.sin(r(45 * x)) + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true, label: "axe y = 5" }], points: [{ x: 2, y: 9, label: "max 9" }, { x: 6, y: 1, label: "min 1" }, { x: 10, y: 9, label: "max suivant" }], step: { x: 2, y: 1 } }, "période = 10 − 2 = 8; amplitude = (9 − 1)/2 = 4")}
  ${table(["Propriété", "Comment la trouver"], [["Période", "distance entre deux maximums consécutifs (ou deux points correspondants quelconques)"], ["Axe", "\\(y=\\frac{\\max+\\min}2\\)"], ["Amplitude", "\\(\\frac{\\max-\\min}2\\) — toujours positive"], ["Image", "\\(\\min\\le y\\le\\max\\)"]])}
  ${keyIdea(S`Si une fonction a une période \(p\), alors \(f(x+p)=f(x)\) pour tout \(x\). Pour prédire une valeur éloignée, soustrais des périodes entières jusqu'à arriver dans un cycle que tu connais.`)}`),

  section("📌 Explorer", S`<p>Choisis une situation. Fais glisser la fenêtre ombrée le long du graphique : si la valeur une période plus tard est toujours la même, la fonction est périodique.</p>`),

  widget("periodicReader", { shape: "tide" }),

  section("📌 Attention", watchOut([
    "L'amplitude est la moitié de (max − min), et non le max lui-même.",
    "Mesure la période horizontalement (en temps ou en angle), jamais verticalement.",
    "Quelque chose qui monte et descend n'est pas périodique à moins que le motif se répète exactement.",
    "Garde les unités : une période en secondes, une amplitude en mètres, et ainsi de suite.",
  ])),

  examples([
    ["Périodique ou non?", "Lesquelles sont périodiques? (a) la hauteur de la masse d'un pendule qui oscille, (b) la température moyenne mensuelle sur plusieurs années, (c) la hauteur d'une balle lancée.",
      [S`<b>Définition.</b> Une fonction est périodique si ses valeurs se répètent selon le même motif sur des intervalles égaux.`,
        S`<b>(a) Pendule.</b> La masse monte et descend de la même façon à chaque oscillation, donc le motif se répète. C'est périodique (si on néglige les lentes pertes dues au frottement).`,
        S`<b>(b) Température.</b> De janvier à décembre, on obtient un motif semblable chaque année, avec une période de 12 mois. C'est périodique.`,
        S`<b>(c) Balle lancée.</b> Elle monte une fois et redescend une fois, puis le mouvement prend fin. Rien ne se répète, donc ce n'est pas périodique.`,
        S`<b>Vérification sur le graphique.</b> La figure montre la forme de (a) et (b) qui se répète, et (c) comme une seule arche.`],
      "(a) et (b) sont périodiques; (c) ne l'est pas",
      plane({ view: { xmin: 0, xmax: 24, ymin: -2, ymax: 12 }, curves: [{ f: (x) => 3 + 3 * Math.sin(r(30 * x)), color: "violet" }, { f: (x) => -0.5 * x * (x - 12), a: 0, b: 12, color: "red" }], step: { x: 2, y: 2 } }, "le violet se répète (périodique); le rouge est une seule arche (non périodique)")],
    ["Propriétés à partir d'un graphique", "Le graphique a des maximums en x = 2 et x = 10 et des minimums en x = 6 et x = 14. Donne la période, l'axe, l'amplitude et l'image.",
      [S`<b>Lire les extrêmes.</b> Sur le graphique, la valeur maximale est 9 et la valeur minimale est 1.`,
        S`<b>Période.</b> C'est la distance horizontale pour un cycle complet. D'un maximum au suivant : \(10-2=8\).`,
        S`<b>Axe.</b> C'est la droite horizontale à mi-chemin entre les extrêmes : \(y=\frac{9+1}2=5\).`,
        S`<b>Amplitude.</b> C'est la distance de l'axe à un maximum : \(\frac{9-1}2=4\).`,
        S`<b>Image et vérification.</b> Les valeurs vont de 1 à 9. Vérification : \(5+4=9\) et \(5-4=1\) ✓`],
      S`période 8, axe \(y=5\), amplitude 4, image \(1\le y\le9\)`,
      plane({ view: { xmin: -1, xmax: 17, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 5 + 4 * Math.sin(r(45 * x)), color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [{ x: 2, y: 9, label: "(2, 9)", color: "amber" }, { x: 10, y: 9, label: "(10, 9)", color: "amber" }, { x: 6, y: 1, label: "(6, 1)" }, { x: 14, y: 1, label: "(14, 1)" }], step: { x: 1, y: 1 } })],
    ["Propriétés à partir d'une table", S`La hauteur (cm) d'une tête d'arroseur chaque seconde : \(t=0,1,\ldots,8\) donne \(2,5,8,5,2,5,8,5,2\). Trouve la période, l'axe et l'amplitude.`,
      [S`<b>Organiser les données.</b> ${tv(["\\(t\\) (s)", "0", "1", "2", "3", "4", "5", "6", "7", "8"], ["\\(h\\) (cm)", "2", "5", "8", "5", "2", "5", "8", "5", "2"])}`,
        S`<b>Période.</b> Le bloc \(2,5,8,5\) se répète, et la valeur revient à 2 en \(t=4\). La période est donc de 4 s.`,
        S`<b>Extrêmes.</b> Max 8, min 2.`,
        S`<b>Axe.</b> \(h=\frac{8+2}2=5\) cm.`,
        S`<b>Amplitude.</b> \(\frac{8-2}2=3\) cm. Vérification : \(5\pm3\) donne 8 et 2 ✓`],
      "période 4 s, axe 5 cm, amplitude 3 cm",
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, segs: [{ pts: Array.from({ length: 9 }, (_, t) => [t, zig(t)]), color: "violet" }], points: Array.from({ length: 9 }, (_, t) => ({ x: t, y: zig(t) })), lines: [{ m: 0, b: 5, color: "green", dash: true }], step: { x: 1, y: 1 } })],
    ["Prédire par extrapolation", "Pour l'arroseur (période 4 s; hauteurs 2, 5, 8, 5 en t = 0, 1, 2, 3), trouve la hauteur en t = 23 s et en t = 42 s.",
      [S`<b>Idée.</b> Une fonction périodique se répète, donc retirer des périodes entières ne change pas la valeur : \(f(t+4)=f(t)\).`,
        S`<b>\(t=23\).</b> Divise par la période : \(23=5\times4+3\). Après 5 cycles complets, il reste 3 s, donc \(f(23)=f(3)=5\).`,
        S`<b>\(t=42\).</b> \(42=10\times4+2\), donc \(f(42)=f(2)=8\).`,
        S`<b>Vérification en comptant.</b> Les hauteurs en \(t=20,21,22,23\) sont \(2,5,8,5\), puisque 20 est un multiple de 4 ✓`],
      "5 cm et 8 cm",
      plane({ view: { xmin: 18, xmax: 26, ymin: 0, ymax: 10 }, segs: [{ pts: Array.from({ length: 9 }, (_, i) => [18 + i, zig(18 + i)]), color: "violet" }], points: [{ x: 20, y: 2, label: "(20, 2)" }, { x: 23, y: 5, label: "(23, 5)", color: "amber" }], step: { x: 1, y: 1 } }, "Le motif près de t = 23.")],
    ["Compter les cycles", "Un essuie-glace fait un aller-retour toutes les 1.5 s. Combien de cycles complets fait-il en une minute?",
      [S`<b>Repérer la période.</b> Un cycle est un aller-retour, donc la période est de 1.5 s.`,
        S`<b>Accorder les unités.</b> Une minute vaut 60 s.`,
        S`<b>Diviser.</b> Nombre de cycles \(=\frac{\text{durée totale}}{\text{période}}=\frac{60}{1.5}=40\).`,
        S`<b>Vérification.</b> \(40\times1.5=60\) s ✓. L'essuie-glace fait 40 cycles par minute; sa fréquence est donc l'inverse de sa période exprimée en minutes.`],
      "40 cycles",
      plane({ view: { xmin: 0, xmax: 6.5, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (t) => Math.sin((2 * Math.PI * t) / 1.5), color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }], step: { x: 0.5, y: 0.5 }, xlabel: "t (s)", ylabel: "position" })],
  ]),

  practice([
    q("amplitude", "Un graphique périodique a un maximum de 14 et un minimum de 2. Quelle est son amplitude?", num(6),
      "La moitié de max − min.", [S`\(\frac{14-2}2\).`], S`\(6\)`),
    q("axe", "Pour le même graphique (max 14, min 2), quelle est l'équation de l'axe? Entre la valeur de y.", num(8),
      "La moyenne du max et du min.", [S`\(\frac{14+2}2\).`], S`\(y=8\)`),
    q("période", "Des sommets consécutifs d'un graphique périodique se trouvent en t = 3 et t = 11. Quelle est la période?", num(8),
      "D'un sommet à l'autre.", [S`\(11-3\).`], S`\(8\)`),
    q("prédire", S`Une fonction a une période de 6 et \(f(2)=7\). Trouve \(f(26)\).`, num(7),
      "26 − 2 est un multiple de 6.", [S`\(26=2+4\times6\).`], S`\(7\)`),
    q("reconnaître", "Laquelle est périodique?", choice(["la fraction éclairée de la Lune, nuit après nuit", "ta taille de 1 an à 18 ans", "le solde d'un compte d'épargne qui rapporte des intérêts", "la température d'un café qui refroidit"], 0),
      "Cherche un motif qui se répète exactement.", ["Le cycle lunaire se répète environ tous les 29.5 jours."], "la fraction éclairée de la Lune"),
  ]),

  ...hard([
    ["Utiliser la période dans les deux sens", S`Une fonction périodique a une période de 10, \(f(3)=4\) et \(f(7)=-2\). Trouve \(f(43)\) et \(f(-3)\).`,
      [S`\(43=3+4\times10\Rightarrow f(43)=4\).`, S`\(-3=7-10\Rightarrow f(-3)=f(7)=-2\).`],
      S`\(f(43)=4\), \(f(-3)=-2\)`],
    ["Quand cela se produit-il?", "La hauteur (m) d'une personne sur une grande roue, toutes les 5 s à partir de l'embarquement, est 2, 9, 16, 9, 2, 9, 16, … À quels instants de la première minute la personne est-elle au sommet?",
      [S`Le motif 2, 9, 16, 9 se répète toutes les 4 lectures : période de 20 s.`, S`Au sommet en \(t=10\), puis toutes les 20 s.`],
      S`\(t=10,\ 30,\ 50\) s`,
      plane({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 18 }, curves: [{ f: (t) => 9 - 7 * Math.cos(r(18 * t)), color: "violet" }], points: [10, 30, 50].map((t) => ({ x: t, y: 16, label: `${t} s` })), step: { x: 5, y: 2 } })],
  ], [
    q("difficile", "Un cœur bat avec une période de 0.8 s. Combien de battements cela fait-il par minute?", num(75),
      "60 ÷ période.", [S`\(60\div0.8\).`], S`\(75\)`),
    q("difficile", S`Une fonction a une période de 12 et \(f(5)=9\). Trouve \(f(89)\).`, num(9),
      "89 − 5 = 84 = 7 × 12.", ["Sept périodes entières."], S`\(9\)`),
    q("difficile", "Un graphique périodique a un maximum de 7 et une amplitude de 5. Quel est son minimum?", num(-3),
      "max − 2 × amplitude.", [S`\(7-10\).`], S`\(-3\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment trouver la période sur un graphique?", "Mesure la distance horizontale entre deux maximums consécutifs (ou entre deux points qui commencent le même motif)."],
      ["Pourquoi l'amplitude est-elle la moitié de max − min?", "Elle se mesure à partir de l'axe (le milieu) jusqu'à un maximum, ce qui est la moitié de la hauteur totale."],
      ["Un graphique périodique peut-il avoir des coins pointus?", "Oui — une dent de scie ou une impulsion est périodique. Les courbes lisses, comme celle d'une roue, sont appelées sinusoïdales."],
      ["Comment prédire f(x) loin dans le futur?", "Soustrais des périodes entières de x jusqu'à obtenir une valeur que tu connais."],
      ["Toute oscillation est-elle périodique?", "Non — un ressort qui rebondit en ralentissant ne se répète jamais exactement."],
    ],
    summary: [
      "Périodique : f(x + p) = f(x).",
      "Période : longueur d'un cycle.",
      "Axe = (max + min)/2; amplitude = (max − min)/2.",
      "Prédire en retirant des périodes entières.",
    ],
    next: "En 6.2, on construit les graphiques de y = sin x et de y = cos x à partir du cercle unitaire.",
  }),
];
