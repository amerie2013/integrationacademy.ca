// MCR3U-FR 7.7 — Le triangle de Pascal et le développement du binôme : construire le triangle, régularités (sommes des
// rangées, diagonales), développer (a + b)ⁿ, trouver un seul coefficient, compter les trajets sur un quadrillage.
// Miroir de ../mcr3u-ch7/l7_7.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.7 Le triangle de Pascal et le développement du binôme";
export const ID = lessonId(7, 7);
const S = String.raw;
const row = (n) => { const r = [1]; for (let k = 1; k <= n; k++) r.push((r[k - 1] * (n - k + 1)) / k); return r; };

export const blocks = () => [
  intro({
    icon: "🔺",
    title: "Le triangle de Pascal et le développement du binôme",
    overview: S`Le triangle de Pascal commence par un 1 au sommet; chaque autre élément est la somme des deux éléments situés au-dessus de lui. Ses rangées cachent de nombreuses régularités — les puissances de 2, les nombres naturels, les nombres triangulaires — et elles donnent les coefficients du développement d'un binôme \((a+b)^n\). Dans cette leçon, tu vas construire le triangle, trouver des régularités par récurrence, développer des binômes efficacement et trouver un seul terme sans tout développer.`,
    goals: [
      "construire le triangle de Pascal à l'aide de la règle de récurrence;",
      "repérer des régularités comme les sommes des rangées et les diagonales;",
      "développer (a + b)ⁿ à l'aide de la rangée n;",
      "développer des binômes comme (2x − 3)⁴ en tenant compte des coefficients et des signes;",
      "trouver un seul terme ou un seul coefficient, et compter les trajets sur un quadrillage.",
    ],
    curriculum: "C1.5 (déterminer, par exploration, des régularités récursives dans la suite de Fibonacci, dans des suites apparentées et dans le triangle de Pascal, et représenter ces régularités de diverses façons), C1.6 (déterminer le lien entre le triangle de Pascal et le développement de binômes, et l'appliquer pour développer des binômes élevés à un exposant entier naturel)",
    prior: [
      [S`Développe \((x+y)^2\).`, S`\(x^2+2xy+y^2\).`],
      [S`Évalue \((-3)^3\).`, "−27."],
      [S`Simplifie \((2x)^3\).`, S`\(8x^3\).`],
    ],
    words: [
      ["Rangée n", "la rangée qui commence par 1, n, …; la rangée du sommet est la rangée 0", ""],
      ["Règle de récurrence", "chaque élément = somme des deux éléments situés au-dessus", ""],
      ["Binôme", "une expression à deux termes, comme \\(2x-3\\)", ""],
      ["Développement du binôme", "\\((a+b)^n\\) écrit comme une somme de termes", ""],
    ],
  }),

  section("📌 Le triangle et le développement", S`
  ${table(["Rangée", "Éléments", "Somme", "(a + b)ⁿ"], [0, 1, 2, 3, 4, 5].map((n) => [String(n), row(n).join("  "), String(2 ** n), n === 0 ? "1" : n === 1 ? "a + b" : n === 2 ? "a² + 2ab + b²" : n === 3 ? "a³ + 3a²b + 3ab² + b³" : n === 4 ? "a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴" : "…"]))}
  ${plane({ view: { xmin: -6.5, xmax: 6.5, ymin: -0.5, ymax: 6.5 }, points: [0, 1, 2, 3, 4, 5].flatMap((n) => row(n).map((v, k) => ({ x: 2 * k - n, y: 6 - n, label: String(v) }))), step: { x: 1, y: 1 } }, "chaque élément est la somme des deux éléments situés au-dessus")}
  ${keyIdea(S`Dans \((a+b)^n\) : les coefficients forment la rangée \(n\); les puissances de \(a\) diminuent de \(n\) à 0 pendant que les puissances de \(b\) augmentent de 0 à \(n\); il y a \(n+1\) termes.`)}`),

  section("📌 Explore", S`<p>Choisis une rangée et développe \((px+q)^n\). Active ensuite l'option qui ombre les nombres impairs et observe la régularité.</p>`),

  widget("pascalLab", { init: 4 }),

  section("📌 Attention", watchOut([
    "La rangée du sommet est la rangée 0; (a + b)ⁿ utilise donc la rangée n.",
    "Élève le terme ENTIER à la puissance : (2x)³ = 8x³.",
    "Un deuxième terme négatif fait alterner les signes.",
    "Dans chaque terme, la somme des exposants est n.",
  ])),

  examples([
    ["Construire des rangées", "Écris les rangées 0 à 6 du triangle de Pascal.",
      [S`<b>Règle.</b> Chaque rangée commence et se termine par 1. Chaque autre élément est la somme des deux éléments situés juste au-dessus.`,
        S`<b>Construire.</b> ${tv(["rangée", "éléments"], ["0", "1"], ["1", "1, 1"], ["2", "1, 2, 1"], ["3", "1, 3, 3, 1"], ["4", "1, 4, 6, 4, 1"], ["5", "1, 5, 10, 10, 5, 1"], ["6", "1, 6, 15, 20, 15, 6, 1"])}`,
        S`<b>Exemple de la règle.</b> Dans la rangée 6, \(15=5+10\) et \(20=10+10\).`,
        S`<b>Vérification.</b> La somme des éléments de la rangée \(n\) est \(2^n\) : \(1+6+15+20+15+6+1=64=2^6\) ✓`],
      "rangée 6 : 1, 6, 15, 20, 15, 6, 1",
      plane({ bare: true, view: { xmin: -4, xmax: 4, ymin: -7, ymax: 1 }, points: [0, 1, 2, 3, 4, 5, 6].flatMap((n) => row(n).map((v, k) => ({ x: k - n / 2, y: -n, label: String(v), color: n === 6 ? "amber" : "blue" }))) })],
    ["Un développement simple", S`Développe \((x+y)^4\).`,
      [S`<b>Coefficients.</b> L'exposant 4 correspond à la rangée 4 : \(1,4,6,4,1\).`,
        S`<b>Puissances.</b> La puissance de \(x\) diminue de 4 à 0 pendant que la puissance de \(y\) augmente de 0 à 4. Dans chaque terme, la somme des puissances est 4.`,
        S`<b>Construire.</b> \(1x^4y^0+4x^3y^1+6x^2y^2+4x^1y^3+1x^0y^4\).`,
        S`<b>Simplifier.</b> \(x^4+4x^3y+6x^2y^2+4xy^3+y^4\).`,
        S`<b>Vérifier avec \(x=y=1\).</b> \(2^4=16\), et \(1+4+6+4+1=16\) ✓`],
      S`\(x^4+4x^3y+6x^2y^2+4xy^3+y^4\)`,
      plane({ view: { xmin: -0.5, xmax: 5, ymin: 0, ymax: 8 }, points: row(4).map((v, k) => ({ x: k, y: v, label: String(v) })), step: { x: 1, y: 1 }, xlabel: "k", ylabel: "coefficient" }, "Les coefficients de la rangée 4 sont symétriques.")],
    ["Coefficients et signes", S`Développe \((2x-3)^3\).`,
      [S`<b>Préparer.</b> Utilise la rangée 3 : \(1,3,3,1\), avec \(a=2x\) et \(b=-3\). Garde le signe avec le 3.`,
        S`<b>Écrire les termes.</b> \(1(2x)^3+3(2x)^2(-3)+3(2x)(-3)^2+1(-3)^3\).`,
        S`<b>Les puissances d'abord.</b> \((2x)^3=8x^3\), \((2x)^2=4x^2\), \((-3)^2=9\), \((-3)^3=-27\).`,
        S`<b>Multiplier.</b> \(8x^3+3(4x^2)(-3)+3(2x)(9)-27=8x^3-36x^2+54x-27\).`,
        S`<b>Vérifier avec \(x=1\).</b> \((2-3)^3=-1\), et \(8-36+54-27=-1\) ✓`],
      S`\(8x^3-36x^2+54x-27\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -30, ymax: 30 }, curves: [{ f: (x) => (2 * x - 3) ** 3, color: "violet" }], points: [{ x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }, { x: 1, y: -1, label: "(1, −1)" }, { x: 0, y: -27, label: "(0, −27)" }], step: { x: 1, y: 5 } })],
    ["Un seul coefficient", S`Trouve le coefficient de \(x^2\) dans \((x+2)^5\).`,
      [S`<b>Rangée.</b> Rangée 5 : \(1,5,10,10,5,1\).`,
        S`<b>Quel terme?</b> Les puissances de \(x\) sont \(5,4,3,2,1,0\). Le terme en \(x^2\) est donc le quatrième, et son coefficient dans la rangée est 10.`,
        S`<b>L'autre facteur.</b> La somme des puissances doit être 5; il contient donc \(2^3\).`,
        S`<b>Multiplier.</b> \(10\cdot x^2\cdot2^3=80x^2\).`,
        S`<b>Vérifier en énumérant.</b> \((x+2)^5=x^5+10x^4+40x^3+80x^2+80x+32\). Avec \(x=1\) : \(3^5=243\), et la somme des coefficients est 243 ✓`],
      "80",
      plane({ view: { xmin: -0.5, xmax: 6, ymin: 0, ymax: 90 }, points: [[5, 1], [4, 10], [3, 40], [2, 80], [1, 80], [0, 32]].map(([x, y]) => ({ x, y, label: x === 2 ? "x²: 80" : String(y), color: x === 2 ? "amber" : "blue" })), step: { x: 1, y: 10 }, xlabel: "puissance de x", ylabel: "coefficient" })],
    ["Régularités", "Décris trois régularités du triangle de Pascal.",
      [S`<b>Sommes des rangées.</b> \(1,2,4,8,16,\ldots\) : chacune vaut \(2^n\), puisque chaque élément sert deux fois pour construire la rangée suivante.`,
        S`<b>Deuxième diagonale.</b> \(1,2,3,4,\ldots\) : les nombres naturels.`,
        S`<b>Troisième diagonale.</b> \(1,3,6,10,\ldots\) : les nombres triangulaires. Chacun est un total cumulé de la deuxième diagonale.`,
        S`<b>Vérification.</b> \(1+2+3+4=10\), et 10 est l'élément suivant de la troisième diagonale ✓`],
      "sommes des rangées 2ⁿ; nombres naturels; nombres triangulaires",
      plane({ bare: true, view: { xmin: -4, xmax: 4, ymin: -7, ymax: 1 }, points: [0, 1, 2, 3, 4, 5, 6].flatMap((n) => row(n).map((v, k) => ({ x: k - n / 2, y: -n, label: String(v), color: k === 1 ? "green" : k === 2 ? "amber" : "blue" }))) }, "vert : nombres naturels; ambre : nombres triangulaires")],
  ]),

  practice([
    q("élément", "Quel est le troisième élément de la rangée 6 (1, 6, ?, …)?", num(15),
      "Additionne les deux éléments situés au-dessus dans la rangée 5 (1, 5, 10, …).", [S`\(5+10\).`], S`\(15\)`),
    q("somme d'une rangée", "Quelle est la somme des éléments de la rangée 8?", num(256),
      "2ⁿ.", [S`\(2^8\).`], S`\(256\)`),
    q("coefficient", S`Quel est le coefficient de \(x^3\) dans \((x+1)^5\)?`, num(10),
      "Rangée 5.", ["1, 5, 10, 10, 5, 1 : le terme en x³ est le troisième."], S`\(10\)`),
    q("termes", S`Combien de termes le développement de \((a+b)^9\) compte-t-il?`, num(10),
      "n + 1.", [S`\(9+1\).`], S`\(10\)`),
    q("développer", S`Laquelle de ces expressions est égale à \((x-1)^3\)?`, choice([S`\(x^3-3x^2+3x-1\)`, S`\(x^3+3x^2+3x+1\)`, S`\(x^3-1\)`, S`\(x^3-3x^2-3x-1\)`], 0),
      "La rangée 3 avec des signes alternés.", [S`\(b=-1\).`], S`\(x^3-3x^2+3x-1\)`),
  ]),

  ...hard([
    ["Une puissance quatrième", S`Développe \((3x-y)^4\).`,
      [S`Rangée 4 : 1, 4, 6, 4, 1 avec \(a=3x\), \(b=-y\).`, S`\(81x^4+4(27x^3)(-y)+6(9x^2)y^2+4(3x)(-y)^3+y^4\).`],
      S`\(81x^4-108x^3y+54x^2y^2-12xy^3+y^4\)`],
    ["Compter des trajets", "Sur un quadrillage de rues, combien de trajets les plus courts mènent d'un coin au coin opposé d'un rectangle de 4 pâtés sur 3 pâtés (en se déplaçant seulement vers la droite ou vers le haut)?",
      ["Le nombre associé à chaque intersection est la somme des nombres à sa gauche et en dessous — exactement la règle de Pascal.", "En lisant le triangle, le coin correspond à la rangée 7, position 3."],
      "35 trajets",
      plane({ view: { xmin: -0.5, xmax: 4.8, ymin: -0.5, ymax: 3.8 }, segs: [...[0, 1, 2, 3].map((y) => ({ pts: [[0, y], [4, y]], color: "gray" })), ...[0, 1, 2, 3, 4].map((x) => ({ pts: [[x, 0], [x, 3]], color: "gray" }))], points: [0, 1, 2, 3].flatMap((y) => [0, 1, 2, 3, 4].map((x) => ({ x, y, label: String(row(x + y)[y]) }))), step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`Trouve le coefficient de \(x^4\) dans \((2x-1)^6\).`, num(240),
      "Rangée 6, terme en (2x)⁴(−1)².", [S`\(15\cdot16\cdot1\).`], S`\(240\)`),
    q("difficile", S`Trouve le coefficient du terme du milieu de \((x+2)^4\).`, num(24),
      "6 · x² · 2².", [S`\(6\cdot4\).`], S`\(24\)`),
    q("difficile", "Combien de trajets les plus courts traversent un quadrillage de 5 pâtés sur 2 pâtés (seulement vers la droite et vers le haut)?", num(21),
      "Rangée 7, position 2.", [S`1, 7, 21, …`], S`\(21\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la rangée du sommet s'appelle-t-elle la rangée 0?", "Pour que la rangée n corresponde à la puissance n dans (a + b)ⁿ."],
      ["Pourquoi les sommes des rangées doublent-elles?", "Chaque élément sert deux fois pour construire la rangée suivante."],
      ["Comment traiter (2x − 3)ⁿ?", "Utilise les coefficients de la rangée avec a = 2x et b = −3, en élevant chaque terme entier à sa puissance."],
      ["Comment trouver un seul terme?", "Choisis la position de la rangée n dont les puissances correspondent au terme cherché."],
      ["Quel est le lien avec les trajets sur un quadrillage?", "Le nombre de façons d'atteindre un coin est la somme des nombres de façons d'atteindre ses deux voisins — la règle de Pascal."],
    ],
    summary: [
      "Élément = somme des deux éléments au-dessus.",
      "La rangée n donne les coefficients de (a + b)ⁿ.",
      "Les puissances de a diminuent, celles de b augmentent.",
      "Sommes des rangées : 2ⁿ.",
    ],
    next: "En 7.8, on révise le chapitre.",
  }),
];
