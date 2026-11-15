// MCR3U-FR 4.6 — Modèles exponentiels : croissance et décroissance; croissance et décroissance en pourcentage, demi-vie
// et temps de doublement, intérêt composé, refroidissement (domaine et image restreints), trouver le temps par un
// graphique ou par essais successifs. Miroir de ../mcr3u-ch4/l4_6.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.6 Modèles exponentiels : croissance et décroissance";
export const ID = lessonId(4, 6);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🦠",
    title: "Modèles exponentiels : croissance et décroissance",
    overview: S`Les populations, les placements, un médicament dans le sang, les matières radioactives et les boissons qui refroidissent changent tous selon un <em>facteur</em> constant sur des intervalles de temps égaux. Dans cette leçon, tu vas construire des modèles exponentiels à partir d'un taux en pourcentage, d'une demi-vie ou d'un temps de doublement, les utiliser pour faire des prédictions, trouver quand une quantité atteint une valeur cible (par un graphique ou par essais successifs) et énoncer les restrictions que le contexte impose au domaine et à l'image.`,
    goals: [
      "écrire des modèles A = A₀(1 ± r)ᵗ à partir d'un taux en pourcentage;",
      "écrire des modèles de demi-vie et de temps de doublement A = A₀(½)^(t/h) et A = A₀(2)^(t/d);",
      "utiliser la formule de l'intérêt composé A = P(1 + i)ⁿ;",
      "modéliser un refroidissement avec une asymptote à la température ambiante et énoncer le domaine et l'image;",
      "estimer quand un modèle atteint une valeur cible.",
    ],
    curriculum: "B3.1 (recueillir et représenter graphiquement des données qui peuvent être modélisées par une fonction exponentielle), B3.2 (reconnaître des modèles exponentiels de croissance et de décroissance; expliquer les restrictions sur le domaine et l'image, p. ex. la température ambiante), B3.3 (résoudre des problèmes à l'aide de graphiques ou d'équations de fonctions exponentielles)",
    prior: [
      [S`Que vaut 6 % sous forme décimale?`, S`\(0.06\).`],
      [S`Évalue \(\left(\tfrac12\right)^3\).`, S`\(\tfrac18\).`],
      [S`Quelle est l'asymptote de \(y=50(0.5)^x+20\)?`, S`\(y=20\).`],
    ],
    words: [
      ["Facteur de croissance", "\\(1+r\\) pour une augmentation de r", "6 % → 1.06"],
      ["Facteur de décroissance", "\\(1-r\\) pour une diminution de r", "15 % → 0.85"],
      ["Demi-vie", "temps nécessaire pour qu'une quantité diminue de moitié", ""],
      ["Temps de doublement", "temps nécessaire pour qu'une quantité double", ""],
    ],
  }),

  section("📌 Quatre sortes de modèles", S`
  ${table(["Situation", "Modèle", "Exemple"], [
    ["augmente de r % par période", "\\(A=A_0(1+r)^t\\)", "\\(12\\,000(1.03)^t\\)"],
    ["diminue de r % par période", "\\(A=A_0(1-r)^t\\)", "\\(28\\,000(0.85)^t\\)"],
    ["diminue de moitié à chaque durée h", "\\(A=A_0\\left(\\tfrac12\\right)^{t/h}\\)", "\\(200\\left(\\tfrac12\\right)^{t/6}\\)"],
    ["double à chaque durée d", "\\(A=A_0(2)^{t/d}\\)", "\\(50(2)^{t/20}\\)"],
    ["intérêt composé", "\\(A=P(1+i)^n\\)", "\\(5000(1.06)^2\\)"],
    ["refroidissement jusqu'à la température ambiante \\(T_a\\)", "\\(T=(T_0-T_a)\\left(\\tfrac12\\right)^{t/h}+T_a\\)", "\\(70\\left(\\tfrac12\\right)^{t/8}+20\\)"],
  ])}
  ${keyIdea(S`Détermine le facteur par période, puis le nombre de périodes : \(t/h\) demi-vies, \(t/d\) doublements, \(n\) périodes d'intérêt. Sans les logarithmes, trouve le temps nécessaire pour atteindre une valeur cible à l'aide d'un graphique ou par essais successifs.`)}`),

  section("📌 Explore", S`<p>Passe de la croissance à la demi-vie, puis au refroidissement. Déplace la droite cible et lis le temps où le modèle l'atteint. En mode refroidissement, remarque que la boisson ne peut jamais devenir plus froide que la pièce.</p>`),

  widget("expModel", { start: "growth" }),

  section("📌 Attention", watchOut([
    "Une diminution de 15 % utilise le facteur 0.85, pas 0.15.",
    "Dans un modèle de demi-vie, l'exposant est t divisé par la demi-vie.",
    "Le refroidissement s'approche de la température ambiante; l'image a donc une borne inférieure plus grande que 0.",
    "Arrondir le facteur (p. ex. 1.0473) trop tôt peut changer les réponses suivantes — garde des chiffres supplémentaires.",
  ])),

  examples([
    ["Croissance d'une population", S`Une ville de 12 000 habitants croît de 3 % par année. Écris un modèle et prédis la population dans 10 ans.`,
      [S`<b>Trouve le facteur de croissance.</b> Croître de 3 % signifie que la population de chaque année est 100 % + 3 % = 103 % de celle de l'année précédente; chaque année multiplie donc par \(b=1.03\).`,
        S`<b>Écris le modèle.</b> Valeur initiale \(a=12\,000\), avec \(t\) en années : \(P(t)=12\,000(1.03)^t\).`,
        S`<b>Substitue</b> \(t=10\). \(P(10)=12\,000(1.03)^{10}\). Une calculatrice donne \((1.03)^{10}\approx1.3439\).`,
        S`<b>Multiplie.</b> \(12\,000\times1.3439\approx16\,127\). On arrondit à un nombre entier de personnes.`,
        S`<b>Vérifie la vraisemblance.</b> Ajouter un montant fixe de 3 % de 12 000 (360 personnes) pendant 10 ans ne donnerait que 15 600. La croissance composée doit faire mieux, car les 3 % s'appliquent à un nombre qui augmente ✓. Le graphique s'incurve vers le haut, comme prévu.`],
      "environ 16 127 personnes",
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 24000 }, curves: [{ f: (t) => 12000 * 1.03 ** t, a: 0, color: "violet" }], points: [{ x: 0, y: 12000, label: "(0, 12 000)" }, { x: 10, y: 16127, label: "(10, 16 127)", color: "amber" }], step: { x: 2, y: 4000 }, xlabel: "t (ans)", ylabel: "P" })],
    ["La dépréciation", S`Une voiture de 28 000 dollars perd 15 % de sa valeur chaque année. Combien vaut-elle après 4 ans?`,
      [S`<b>Trouve le facteur de décroissance.</b> Perdre 15 % laisse 85 % de la valeur; chaque année multiplie donc par \(b=0.85\), et non par \(0.15\).`,
        S`<b>Écris le modèle.</b> \(V(t)=28\,000(0.85)^t\), avec \(t\) en années.`,
        S`<b>Construis une table année par année.</b> Chaque valeur est 0.85 fois la précédente. ${tv(["\\(t\\)", "0", "1", "2", "3", "4"], ["\\(V\\) (dollars)", "28 000", "23 800", "20 230", "17 195.50", "14 616.18"])}`,
        S`<b>Vérification avec la formule.</b> \((0.85)^4\approx0.5220\), et \(28\,000\times0.5220\approx14\,616\) ✓`,
        S`<b>Vérifie la vraisemblance.</b> La baisse annuelle diminue : 4200, puis 3570, puis 3034.50. La voiture perd 15 % d'une valeur qui diminue; la courbe s'aplatit donc et n'atteint jamais 0 ✓`],
      "environ 14 616 dollars",
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 30000 }, curves: [{ f: (t) => 28000 * 0.85 ** t, a: 0, color: "violet" }], points: [{ x: 0, y: 28000, label: "(0, 28 000)" }, { x: 2, y: 20230 }, { x: 4, y: 14616, label: "(4, 14 616)", color: "amber" }], step: { x: 1, y: 5000 }, xlabel: "t (ans)", ylabel: "V" })],
    ["La demi-vie", S`Une dose de 200 mg a une demi-vie de 6 h. Quelle quantité reste-t-il après 18 h?`,
      [S`<b>Signification.</b> Une demi-vie de 6 h signifie que la quantité est multipliée par \(\frac12\) toutes les 6 h.`,
        S`<b>Écris le modèle.</b> L'exposant compte les demi-vies, et \(\frac t6\) est le nombre de demi-vies en \(t\) heures : \(A(t)=200\left(\tfrac12\right)^{t/6}\).`,
        S`<b>Substitue</b> \(t=18\). \(\frac{18}6=3\) demi-vies, donc \(A=200\left(\tfrac12\right)^3=200\times\frac18=25\).`,
        S`<b>Vérification avec une table.</b> Divise par deux trois fois. ${tv(["\\(t\\) (h)", "0", "6", "12", "18"], ["\\(A\\) (mg)", "200", "100", "50", "25"])} ✓`],
      "il reste 25 mg après 18 h",
      plane({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 220 }, curves: [{ f: (t) => 200 * 0.5 ** (t / 6), a: 0, color: "violet" }], points: [{ x: 0, y: 200, label: "(0, 200)" }, { x: 6, y: 100, label: "(6, 100)" }, { x: 12, y: 50, label: "(12, 50)" }, { x: 18, y: 25, label: "(18, 25)", color: "amber" }], step: { x: 3, y: 20 }, xlabel: "t (h)", ylabel: "A (mg)" })],
    ["Le temps de doublement", S`50 bactéries doublent toutes les 20 minutes. Combien y en a-t-il après 2 heures?`,
      [S`<b>Utilise les mêmes unités.</b> Le temps de doublement est en minutes; on convertit donc : 2 heures \(=120\) minutes.`,
        S`<b>Écris le modèle.</b> \(\frac t{20}\) compte les doublements : \(N(t)=50(2)^{t/20}\), avec \(t\) en minutes.`,
        S`<b>Compte les doublements.</b> \(\frac{120}{20}=6\), donc \(N=50(2)^6=50\times64\).`,
        S`<b>Multiplie.</b> \(50\times64=3200\).`,
        S`<b>Vérification avec une table.</b> ${tv(["\\(t\\) (min)", "0", "20", "40", "60", "80", "100", "120"], ["\\(N\\)", "50", "100", "200", "400", "800", "1600", "3200"])} ✓`],
      "3200 bactéries",
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 3600 }, curves: [{ f: (t) => 50 * 2 ** (t / 20), a: 0, color: "violet" }], points: [{ x: 60, y: 400, label: "(60, 400)" }, { x: 100, y: 1600, label: "(100, 1600)" }, { x: 120, y: 3200, label: "(120, 3200)", color: "amber" }], step: { x: 20, y: 400 }, xlabel: "t (min)", ylabel: "N" })],
    ["Le refroidissement", S`Du thé à 90 °C refroidit dans une pièce à 20 °C : \(T=70\left(\tfrac12\right)^{t/8}+20\). Trouve \(T(16)\) et l'image, puis estime quand le thé atteint 30 °C.`,
      [S`<b>Lis le modèle.</b> Le \(+20\) est la température ambiante, qui est l'asymptote. Le 70 est l'écart initial, puisque \(90-20=70\). Cet écart diminue de moitié toutes les 8 minutes.`,
        S`<b>Trouve \(T(16)\).</b> \(\frac{16}8=2\) divisions par deux : \(T(16)=70\left(\tfrac12\right)^2+20=70\times\frac14+20=17.5+20=37.5\) °C.`,
        S`<b>Image.</b> Le thé commence à 90 °C, donc \(T(0)=90\). Le terme de puissance est toujours positif, donc \(T\) reste supérieure à 20. L'image est \(20<T\le90\).`,
        S`<b>Pose l'équation cible.</b> \(T=30\) signifie \(70\left(\tfrac12\right)^{t/8}=10\), donc \(\left(\tfrac12\right)^{t/8}=\frac17\). Nous n'avons pas encore de moyen d'isoler \(t\); on utilise donc des valeurs d'essai.`,
        S`<b>Table d'essais.</b> ${tv(["\\(t\\) (min)", "16", "20", "22", "23", "24"], ["\\(T\\) (°C)", "37.5", "32.4", "30.4", "29.5", "28.75"])} La valeur 30 °C se situe entre \(t=22\) et \(t=23\).`,
        S`<b>Vérification sur le graphique.</b> La courbe croise la droite pointillée \(T=30\) près de \(t=22.5\) ✓`],
      "T(16) = 37.5 °C; image 20 < T ≤ 90; le thé atteint 30 °C entre 22 et 23 minutes",
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 70 * 0.5 ** (t / 8) + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "green", dash: true }, { m: 0, b: 30, color: "amber", dash: true }], points: [{ x: 16, y: 37.5, label: "(16, 37.5)" }, { x: 22.46, y: 30 }], step: { x: 4, y: 10 }, xlabel: "t (min)", ylabel: "T (°C)" })],
  ]),

  practice([
    q("facteur", "Quel est le facteur de croissance pour une augmentation de 4.5 % par année?", num(1.045, 1e-6),
      "1 + r.", [S`\(1+0.045\).`], S`\(1.045\)`),
    q("croissance", S`Évalue \(800(1.05)^3\) au dixième près.`, num(926.1, 0.06),
      "1.05³ ≈ 1.157625.", [S`\(800\times1.157625\).`], S`\(926.1\)`),
    q("demi-vie", "Une substance de 64 g a une demi-vie de 5 jours. Quelle quantité en reste-t-il après 20 jours?", num(4),
      "20/5 = 4 demi-vies.", [S`\(64\cdot\left(\tfrac12\right)^4\).`], S`\(4\) g`),
    q("intérêt", "On place 5000 dollars à 6 % composé annuellement. Quelle est la valeur du placement après 2 ans (au dollar près)?", num(5618, 0.6),
      "5000(1.06)².", [S`\(5000(1.1236)\).`], S`\(5618\) dollars`),
    q("modèle", "Une forêt perd 8 % de sa superficie chaque année. Quel facteur modélise cette situation?", choice([S`\((0.92)^t\)`, S`\((0.08)^t\)`, S`\((1.08)^t\)`, S`\((-0.08)^t\)`], 0),
      "100 % − 8 %.", [S`\(1-0.08=0.92\).`], S`\((0.92)^t\)`),
  ]),

  ...hard([
    ["Le doublement et le taux annuel", S`Une ville de 40 000 habitants double toutes les 15 années. (a) Quand atteindra-t-elle 160 000 habitants? (b) Quel est le taux de croissance annuel équivalent?`,
      [S`(a) 160 000, c'est deux doublements : 30 ans.`, S`(b) \(P=40\,000(2)^{t/15}=40\,000\left(2^{1/15}\right)^t\); \(2^{1/15}\approx1.0473\).`],
      "30 ans; environ 4.73 % par année"],
    ["Les restrictions d'un modèle de refroidissement", S`Un café refroidit selon \(T=65(0.9)^t+20\) (°C, t en minutes). Énonce un domaine et une image raisonnables, puis trouve à la minute près quand le café atteint 50 °C.`,
      [S`Domaine \(t\ge0\); image \(20<T\le85\).`, S`\(0.9^t=\tfrac{30}{65}\approx0.4615\) : \(0.9^7\approx0.478\) (\(T\approx51.1\)), \(0.9^8\approx0.430\) (\(T\approx48.0\)).`],
      "entre 7 et 8 minutes (environ 7.3 min)",
      plane({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 65 * 0.9 ** t + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 50, color: "amber", dash: true }, { m: 0, b: 20, color: "green", dash: true }], step: { x: 2, y: 10 }, xlabel: "t (min)", ylabel: "T (°C)" })],
  ], [
    q("difficile", "On place 3000 dollars à 4.5 % composé annuellement. Après combien d'années complètes le placement dépasse-t-il 4000 dollars pour la première fois?", num(7),
      "Trouve n tel que 1.045ⁿ > 1.333.", [S`\(1.045^6\approx1.302\); \(1.045^7\approx1.361\).`], S`\(7\) ans`),
    q("difficile", "Une dose de 400 mg perd 20 % chaque heure. Quelle quantité reste-t-il après 5 heures (en mg, au centième près)?", num(131.07, 0.006),
      "400(0.8)⁵.", [S`\(0.8^5=0.32768\).`], S`\(131.07\) mg`),
    q("difficile", "Une balle lâchée de 10 m rebondit à 70 % de sa hauteur précédente. À quelle hauteur monte-t-elle après le 4e rebond (en m, au millième près)?", num(2.401, 0.0006),
      "10(0.7)⁴.", [S`\(0.7^4=0.2401\).`], S`\(2.401\) m`),
  ]),

  wrapUp({
    qas: [
      ["Comment distinguer, dans un énoncé, une croissance affine d'une croissance exponentielle?", "« Ajoute la même quantité » indique une relation affine; « croît du même pourcentage » ou « double » indique une relation exponentielle."],
      ["Pourquoi l'exposant est-il t/h dans un modèle de demi-vie?", "t/h compte le nombre de demi-vies écoulées."],
      ["Une quantité qui décroît peut-elle atteindre zéro?", "Pas dans le modèle : le graphique s'approche de l'asymptote. En réalité, on s'arrête quand la quantité devient négligeable."],
      ["Comment trouver le temps sans les logarithmes?", "Trace le graphique du modèle et la droite cible, ou essaie des nombres entiers jusqu'à ce que la valeur dépasse la cible."],
      ["Pourquoi le refroidissement se stabilise-t-il?", "Une boisson ne peut pas devenir plus froide que la pièce; la température ambiante est donc l'asymptote."],
    ],
    summary: [
      "Croissance : (1 + r)ᵗ; décroissance : (1 − r)ᵗ.",
      "Demi-vie : (½)^(t/h); doublement : 2^(t/d).",
      "Intérêt composé : A = P(1 + i)ⁿ.",
      "Le contexte restreint le domaine (t ≥ 0) et l'image (au-dessus d'une asymptote).",
    ],
    next: "La leçon 4.7 est la révision du chapitre.",
  }),
];
