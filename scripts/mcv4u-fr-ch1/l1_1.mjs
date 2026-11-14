// MCV4U-FR 1.1 — Taux de variation et pente d'une courbe : taux de variation dans la vie courante, taux moyen comme pente
// d'une sécante, taux instantané comme pente d'une tangente, estimation de pentes de tangentes, points sans tangente
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "1.1 Taux de variation et pente d'une courbe";
export const ID = lessonId(1, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Taux de variation et pente d'une courbe",
    overview: S`Le calcul différentiel est la mathématique du changement. Un <strong>taux de variation</strong> compare la variation d'une quantité à la variation d'une autre — des mètres par seconde, des dollars par article, des degrés par minute. Sur un intervalle, le <strong>taux de variation moyen</strong> est la pente de la <em>sécante</em> qui joint deux points du graphique. À un instant précis, le <strong>taux de variation instantané</strong> est la pente de la <em>tangente</em> — et on peut l'estimer à l'aide de sécantes dont les extrémités se rapprochent. Cette leçon construit ces idées à partir de graphiques et de tables de valeurs; le reste du cours les rend exactes.`,
    goals: [
      "décrire des taux de variation de la vie courante à l'aide de mots, de tables, de graphiques et d'équations;",
      "calculer des taux de variation moyens comme pentes de sécantes;",
      "estimer des taux de variation instantanés à partir de tangentes tracées sur un graphique;",
      "approximer la pente d'une tangente à l'aide de sécantes qui se rapprochent du point;",
      "reconnaître les points où il n'existe ni tangente ni taux instantané.",
    ],
    curriculum: "A1.1 (applications concrètes des taux de variation), A1.2 (taux moyen ↔ pente d'une sécante; taux instantané ↔ pente d'une tangente, pour des fonctions lisses), A1.3 (approximer un taux instantané à l'aide de sécantes qui se rapprochent du point)",
    prior: [
      [S`Pente de la droite qui passe par \((2,5)\) et \((6,13)\)?`, S`\(\frac{8}{4}=2\).`],
      [S`Une voiture parcourt 150 km en 2 h. Vitesse moyenne?`, S`75 km/h.`],
      [S`La pente de \(y=x^2\) est-elle la même partout?`, S`Non — elle devient plus raide quand \(|x|\) augmente.`],
    ],
    words: [
      ["Sécante", "une droite qui passe par deux points d'une courbe", ""],
      ["Tangente", "la droite qui touche une courbe lisse en un point et qui suit sa direction en ce point", ""],
      ["Taux de variation moyen", "\\(\\dfrac{\\Delta y}{\\Delta x}=\\dfrac{f(b)-f(a)}{b-a}\\)", "pente de la sécante"],
      ["Taux de variation instantané", "le taux à un instant précis", "pente de la tangente"],
    ],
  }),

  section("📌 Sécantes et tangentes", S`
  ${plane({ view: { xmin: 0, xmax: 4.2, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 1.5, a: 0, b: 4.05, color: "violet" }, { f: (t) => 16.2 + 4.9 * (t - 1), color: "amber" }, { f: (t) => 16.2 + 9.8 * (t - 1), color: "green" }], points: [{ x: 1, y: 16.2, label: "A(1, 16.2)", color: "red" }, { x: 2, y: 21.1, label: "B(2, 21.1)", color: "red" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" }, "La hauteur d'une balle : la sécante AB (orange) a une pente de 4.9 m/s (vitesse moyenne sur [1, 2]); la tangente en A (verte) a une pente de 9.8 m/s (vitesse à t = 1).")}
  ${table(["Idée", "Sens géométrique", "Formule / méthode"], [
    ["taux moyen sur [a, b]", "pente de la sécante qui passe par (a, f(a)) et (b, f(b))", "\\(\\frac{f(b)-f(a)}{b-a}\\)"],
    ["taux instantané en a", "pente de la tangente en (a, f(a))", "tracer la tangente, ou utiliser des sécantes de plus en plus courtes"],
    ["unités", "unités de la variation verticale ÷ unités de la variation horizontale", "m/s, $/article, °C/min"],
  ])}
  ${keyIdea(S`Pour une courbe lisse (continue, sans coin), quand le deuxième point \(B\) glisse vers \(A\), la sécante \(AB\) devient la tangente en \(A\), et le taux moyen devient le taux instantané.`)}`),

  section("📌 Explore", S`<p>Choisis un modèle et déplace les extrémités \(a\) et \(b\). Compare la sécante orange avec la tangente verte, et fais glisser \(b\) vers \(a\) pour voir le taux moyen s'approcher du taux instantané.</p>`),

  widget("rateReader", { init: { model: "cool", a: 5, b: 25 } }),

  section("📌 Quand il n'y a pas de tangente", S`
  <p>À un coin, les sécantes venant de la gauche et celles venant de la droite s'approchent de pentes différentes : il n'y a donc ni tangente unique ni taux de variation instantané.</p>
  ${watchOut([
    "Soustrais dans le même ordre en haut et en bas : (f(b) − f(a))/(b − a).",
    "Un taux moyen de 0 ne veut pas dire que rien n'a changé entre les deux — seulement que les extrémités sont à la même hauteur.",
    "Une tangente tracée à l'œil donne une estimation; lis deux points éloignés sur la droite pour calculer sa pente.",
    "Indique toujours les unités : un taux sans unités n'a pas de sens dans un contexte.",
    "À un coin (comme y = |x| en 0), le taux instantané n'existe pas.",
  ])}`),

  examples([
    ["Vitesse moyenne à partir d'une table", S`La distance d'une cycliste par rapport à un feu de circulation est de 0, 4, 12, 24, 40, 60 m à \(t=0,1,2,3,4,5\) s. Trouve sa vitesse moyenne sur \([1,4]\) et sur \([4,5]\).`,
      [S`\([1,4]\) : \(\frac{40-4}{4-1}=12\) m/s.`, S`\([4,5]\) : \(\frac{60-40}{1}=20\) m/s.`],
      S`12 m/s, puis 20 m/s : la cycliste accélère`,
      plane({ view: { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 65 }, segs: [{ pts: [[1, 4], [4, 40]], color: "amber" }], points: [{ x: 0, y: 0, color: "blue" }, { x: 1, y: 4, color: "blue" }, { x: 2, y: 12, color: "blue" }, { x: 3, y: 24, color: "blue" }, { x: 4, y: 40, color: "blue" }, { x: 5, y: 60, color: "blue" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "d (m)" })],
    ["Pente d'une tangente à partir d'un graphique", S`La tangente à \(y=6-\tfrac12x^2\) en \(x=1\) est tracée. Utilise deux points de cette tangente pour estimer le taux de variation instantané en \(x=1\).`,
      [S`La tangente passe par \((1,5.5)\) et \((3,3.5)\).`, S`Pente \(\frac{3.5-5.5}{3-1}=-1\).`],
      S`environ \(-1\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => 6 - 0.5 * x * x, color: "violet" }, { f: (x) => 6.5 - x, color: "green" }], points: [{ x: 1, y: 5.5, label: "(1, 5.5)", color: "red" }, { x: 3, y: 3.5, label: "(3, 3.5)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Des sécantes qui se rapprochent", S`La hauteur d'une pierre est \(h(t)=-5t^2+25t\) m. Estime sa vitesse à \(t=1\) à l'aide de sécantes qui se terminent à \(t=2,\ 1.5,\ 1.1,\ 1.01\).`,
      [S`\(h(1)=20\). \(t=2\) : \(\frac{30-20}{1}=10\). \(t=1.5\) : \(\frac{26.25-20}{0.5}=12.5\).`, S`\(t=1.1\) : \(\frac{21.45-20}{0.1}=14.5\). \(t=1.01\) : \(\frac{20.1495-20}{0.01}=14.95\).`],
      S`les pentes s'approchent de 15 m/s`],
    ["Un coin", S`Explique pourquoi \(f(x)=|x-2|+1\) n'a pas de taux de variation instantané en \(x=2\).`,
      [S`Les sécantes venant de la gauche ont toutes une pente de \(-1\); celles venant de la droite ont toutes une pente de \(+1\).`, S`Elles ne s'approchent pas d'une seule valeur : il n'y a donc pas de tangente en \((2,1)\).`],
      S`pente à gauche \(-1\) ≠ pente à droite \(1\) : pas de tangente`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x - 2) + 1, color: "violet" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Lire le signe du taux", S`Les ventes hebdomadaires suivent le graphique ci-dessous et atteignent un sommet à la semaine 6. Quand le taux de variation instantané est-il positif, nul et négatif?`,
      [S`Avant la semaine 6, la courbe monte : taux positif. Au sommet, la tangente est horizontale : taux nul. Après la semaine 6, la courbe descend : taux négatif.`],
      S`positif pour \(t\lt6\); 0 à \(t=6\); négatif pour \(t>6\)`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 45 }, curves: [{ f: (t) => 40 - (t - 6) ** 2, a: 0, b: 12, color: "violet" }, { f: () => 40, a: 4, b: 8, color: "green" }], points: [{ x: 6, y: 40, label: "sommet (6, 40)", color: "red" }], step: { x: 1, y: 5 }, xlabel: "semaine", ylabel: "ventes (k)" })],
  ]),

  practice([
    q("vitesse moyenne", S`Pour la cycliste ci-dessus (0, 4, 12, 24, 40, 60 m à \(t=0,\ldots,5\) s), trouve la vitesse moyenne sur les 5 s.`, num(12),
      "(60 − 0) ÷ 5.", [S`\(\frac{60}{5}\).`], S`\(12\) m/s`),
    q("sécante", S`Trouve la pente de la sécante qui passe par \((1,3)\) et \((4,15)\).`, num(4),
      "Variation verticale sur variation horizontale.", [S`\(\frac{12}{3}\).`], S`\(4\)`),
    q("maximum", S`Quel est le taux de variation instantané au point le plus haut d'une courbe lisse?`, choice(["0", "positif", "négatif", "il n'existe pas"], 0),
      "La tangente à un sommet est horizontale.", ["Tangente horizontale : pente 0."], "0"),
    q("estimation", S`Estime la pente de la tangente à \(y=x^2\) en \(x=3\) à l'aide de la sécante de \(x=3\) à \(x=3.001\) (arrondis au nombre entier).`, num(6),
      "(9.006001 − 9) ÷ 0.001.", [S`\(6.001\approx6\).`], S`\(6\)`),
    q("unités", S`Le volume est en litres et le temps en minutes. Quelles sont les unités du taux de variation du volume?`, choice(["L/min", "min/L", "L", "L·min"], 0),
      "Sortie par entrée.", ["Des litres par minute."], "L/min"),
  ]),

  ...hard([
    ["Un coin sur une parabole", S`Montre que \(y=|x^2-4|\) n'a pas de tangente en \(x=2\).`,
      [S`Pour \(x\) juste au-dessus de 2, \(y=x^2-4\) : les sécantes de \((2,0)\) à \((2+h,\ (2+h)^2-4)\) ont une pente de \(\frac{4h+h^2}{h}=4+h\to4\).`, S`Pour \(x\) juste au-dessous de 2, \(y=4-x^2\) : la sécante de \((2,0)\) à \((2-h,\ 4-(2-h)^2)\) a une pente de \(\frac{(4-(2-h)^2)-0}{-h}=\frac{4h-h^2}{-h}=-4+h\to-4\).`, S`Les pentes à gauche et à droite, \(-4\) et \(4\), sont différentes : c'est un coin, donc il n'y a pas de tangente.`],
      S`pente à gauche \(-4\), pente à droite \(4\) : pas de tangente en \(x=2\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(x * x - 4), color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "red" }, { x: -2, y: 0, label: "(−2, 0)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Sécantes d'un seul côté et des deux côtés", S`Pour \(f(x)=x^2+x\), calcule les pentes des sécantes sur \([2,3]\), \([2,2.1]\), \([2,2.01]\) et sur l'intervalle centré \([1.9,2.1]\). Quel est le taux instantané en \(x=2\)?`,
      [S`\([2,3]\) : \(\frac{12-6}{1}=6\). \([2,2.1]\) : \(\frac{6.51-6}{0.1}=5.1\). \([2,2.01]\) : \(\frac{6.0501-6}{0.01}=5.01\).`, S`\([1.9,2.1]\) : \(\frac{6.51-5.51}{0.2}=5\) exactement.`],
      S`le taux instantané en \(x=2\) est 5`],
  ], [
    q("difficile", S`Pour \(h(t)=-5t^2+25t\), trouve la vitesse moyenne sur \([1,1.01]\).`, num(14.95, 0.001),
      "h(1.01) = 20.1495.", [S`\(\frac{20.1495-20}{0.01}\).`], S`\(14.95\) m/s`),
    q("difficile", S`Pour \(y=|x-3|\), quelle est la pente de toute sécante qui va de \((3,0)\) à un point situé à gauche?`, num(-1),
      "À gauche de 3, y = 3 − x.", [S`Pente de \(3-x\).`], S`\(-1\)`),
    q("difficile", S`Estime le taux de variation instantané de \(f(x)=x^2+x\) en \(x=2\).`, num(5, 0.01),
      "Utilise un intervalle centré.", [S`\(\frac{f(2.01)-f(1.99)}{0.02}=5\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre le taux moyen et le taux instantané?", "Le taux moyen décrit tout un intervalle (pente d'une sécante); le taux instantané décrit un seul instant (pente d'une tangente)."],
      ["Pourquoi les sécantes de plus en plus courtes fonctionnent-elles?", "Pour une courbe lisse, la sécante qui passe par A et un point B voisin est presque la tangente; plus B est proche, meilleure est l'estimation."],
      ["Pourquoi un intervalle centré est-il souvent meilleur?", "Les erreurs à gauche et à droite ont tendance à s'annuler, donc (f(a + h) − f(a − h))/(2h) est habituellement plus proche qu'une sécante d'un seul côté."],
      ["Quand une tangente n'existe-t-elle pas?", "Aux coins, aux points de rebroussement, aux discontinuités et aux tangentes verticales — partout où les pentes des sécantes ne se stabilisent pas sur une seule valeur finie."],
      ["Comment trouverons-nous des taux instantanés exacts?", "Avec les limites (1.3–1.4) et la dérivée (1.5) : la limite des pentes des sécantes quand l'intervalle se réduit à 0."],
    ],
    summary: [
      "Taux moyen = pente de la sécante = Δy/Δx.",
      "Taux instantané = pente de la tangente.",
      "Les sécantes de plus en plus courtes s'approchent de la tangente.",
      "Pas de tangente à un coin.",
    ],
    next: "la leçon 1.2 calcule les taux de variation de façon exacte à partir d'équations, à l'aide du quotient de différence.",
  }),
];
