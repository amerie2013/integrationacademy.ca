// MCV4U-FR 1.5 — Introduction aux dérivées : f′(x) comme limite du quotient de différence, notation, dérivées de fonctions
// polynomiales, inverses et racines par la définition, graphiques de f et de f′, et points où la dérivée n'existe pas
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "1.5 Introduction aux dérivées";
export const ID = lessonId(1, 5);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Introduction aux dérivées",
    overview: S`Jusqu'ici, on a trouvé le taux de variation instantané un point à la fois. En gardant \(x\) comme variable, on obtient une toute nouvelle fonction, la <strong>dérivée</strong> :
    \(f'(x)=\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\). Sa valeur en tout \(x\) est la pente de la tangente en ce point. Trouver la dérivée de cette façon s'appelle dériver <strong>à partir de la définition (premiers principes)</strong>. Le graphique de \(f'\) raconte l'histoire de \(f\) : positif là où \(f\) monte, négatif là où elle descend, nul à ses points tournants.`,
    goals: [
      "définir la dérivée comme une limite et utiliser les notations \\(f'(x)\\) et \\(\\frac{dy}{dx}\\);",
      "trouver la dérivée de fonctions polynomiales à partir de la définition;",
      "dériver des fonctions inverses et racines carrées simples à partir de la définition;",
      "relier le graphique de f à celui de f′;",
      "repérer les points où une fonction n'est pas dérivable.",
    ],
    curriculum: "A1.5, A1.6 (taux instantané comme limite du quotient de différence), A2.1 (représenter graphiquement les taux instantanés d'un polynôme pour reconnaître la fonction dérivée; relier les graphiques de f et de f′), A1.7/A1.8 (déterminer la dérivée de fonctions polynomiales en simplifiant (f(x + h) − f(x))/h et en prenant la limite)",
    prior: [
      [S`Développe \((x+h)^3\).`, S`\(x^3+3x^2h+3xh^2+h^3\).`],
      [S`Taux de \(x^2\) en \(x=a\)?`, S`\(2a\).`],
      [S`Où \(y=x^2-4x\) est-elle décroissante?`, S`Pour \(x\lt2\).`],
    ],
    words: [
      ["Dérivée", "\\(f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\)", ""],
      ["Notation de Leibniz", "\\(\\frac{dy}{dx}\\) : taux de variation de y par rapport à x", ""],
      ["Définition de la dérivée (premiers principes)", "utiliser directement la définition par une limite", ""],
      ["Dérivable en a", "f′(a) existe (une tangente unique et non verticale)", ""],
    ],
  }),

  section("📌 Des taux à une fonction", S`
  ${table(["x", "−2", "−1", "0", "1", "2"], [
    ["f(x) = x³ − 3x", "−2", "2", "0", "−2", "2"],
    ["pente de la tangente f′(x)", "9", "0", "−3", "0", "9"],
  ])}
  ${plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -5, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }, { f: (x) => 3 * x * x - 3, color: "blue" }], points: [{ x: -1, y: 2, label: "point tournant", color: "red" }, { x: 1, y: -2, color: "red" }, { x: -1, y: 0, label: "f′ = 0", color: "blue" }, { x: 1, y: 0, color: "blue" }], step: { x: 1, y: 1 } }, "f(x) = x³ − 3x (en violet) et sa dérivée f′(x) = 3x² − 3 (en bleu) : f′ vaut zéro exactement là où f change de direction.")}
  ${keyIdea(S`\(f'(x)\) est positive là où \(f\) est croissante, négative là où \(f\) est décroissante, et nulle là où la tangente est horizontale. Un polynôme de degré \(n\) a une dérivée de degré \(n-1\).`)}`),

  section("📌 Explore", S`<p>Fais glisser le point le long de la courbe. La pente de sa tangente est représentée plus bas par un point vert; ensemble, les points tracent le graphique de \(f'\). Affiche la formule pour comparer.</p>`),

  widget("derivativeBuilder", { init: { fn: "quart", x: -2.5 } }),

  section("📌 Quand il n'y a pas de dérivée", S`
  <p>\(f'(a)\) n'existe pas là où le graphique a un coin ou un point de rebroussement (les pentes à gauche et à droite diffèrent), une tangente verticale (les pentes croissent sans borne) ou une discontinuité. Toute fonction dérivable est continue, mais une fonction continue n'est pas forcément dérivable.</p>
  ${watchOut([
    "f(x + h) veut dire remplacer chaque x par (x + h).",
    "Garde le symbole de limite jusqu'à ce que h ait été éliminé et remplacé par 0.",
    "f′(x) est une fonction; f′(a) est un nombre (une pente).",
    "dy/dx est un seul symbole, pas une fraction à simplifier (pour l'instant).",
    "La continuité ne garantit pas l'existence d'une dérivée : |x| est continue en 0 mais n'y a pas de dérivée.",
  ])}`),

  examples([
    ["Une fonction du second degré à partir de la définition", S`Trouve \(f'(x)\) pour \(f(x)=x^2+3x\).`,
      [S`\(f(x+h)-f(x)=(x^2+2xh+h^2+3x+3h)-(x^2+3x)=2xh+h^2+3h\).`, S`\(\dfrac{2xh+h^2+3h}{h}=2x+h+3\to2x+3\).`],
      S`\(f'(x)=2x+3\)`],
    ["Une fonction cubique", S`Trouve \(\dfrac{dy}{dx}\) pour \(y=x^3\).`,
      [S`\(\dfrac{(x+h)^3-x^3}{h}=\dfrac{3x^2h+3xh^2+h^3}{h}=3x^2+3xh+h^2\).`, S`Quand \(h\to0\) : \(3x^2\).`],
      S`\(\dfrac{dy}{dx}=3x^2\)`],
    ["Une fonction inverse", S`Trouve \(f'(x)\) pour \(f(x)=\dfrac1x\).`,
      [S`\(\dfrac{\frac1{x+h}-\frac1x}{h}=\dfrac{x-(x+h)}{hx(x+h)}=\dfrac{-1}{x(x+h)}\).`, S`Quand \(h\to0\) : \(-\dfrac1{x^2}\).`],
      S`\(f'(x)=-\dfrac1{x^2}\) (négative partout : \(\frac1x\) descend sur chaque branche)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 1 / x, a: -4, b: -0.21, color: "violet" }, { f: (x) => 1 / x, a: 0.21, b: 4, color: "violet" }, { f: (x) => -1 / (x * x), a: -4, b: -0.45, color: "blue" }, { f: (x) => -1 / (x * x), a: 0.45, b: 4, color: "blue" }], step: { x: 1, y: 1 } })],
    ["Esquisser f′ à partir de f", S`Esquisse la dérivée de \(f(x)=x^2-4x+1\).`,
      [S`À partir de la définition, \(f'(x)=2x-4\) : une droite.`, S`\(f'\) est négative pour \(x\lt2\) (f descend), nulle au sommet \(x=2\), positive pour \(x>2\).`],
      S`\(f'(x)=2x-4\), qui s'annule en \(x=2\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 1, color: "violet" }, { f: (x) => 2 * x - 4, color: "blue" }], points: [{ x: 2, y: -3, label: "sommet (2, −3)", color: "red" }, { x: 2, y: 0, label: "f′(2) = 0", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Non dérivable", S`Explique pourquoi \(f(x)=|x-1|\) n'est pas dérivable en \(x=1\), et pourquoi \(g(x)=\sqrt[3]{x}\) n'est pas dérivable en \(x=0\).`,
      [S`\(|x-1|\) : les pentes à gauche et à droite sont \(-1\) et \(+1\) — un coin.`, S`\(\sqrt[3]x\) : \(\frac{\sqrt[3]h-0}{h}=h^{-2/3}\to\infty\) — une tangente verticale.`],
      S`coin en \(x=1\); tangente verticale en \(x=0\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 3 }, curves: [{ f: (x) => Math.abs(x - 1), color: "violet" }, { f: (x) => Math.cbrt(x), color: "green" }], points: [{ x: 1, y: 0, label: "coin", color: "red" }, { x: 0, y: 0, label: "tangente verticale", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("évaluer", S`Pour \(f(x)=5x^2\), \(f'(x)=10x\). Trouve \(f'(3)\).`, num(30),
      "Substitue.", [S`\(10(3)\).`], S`\(30\)`),
    q("pente", S`Pour \(y=x^2-7x\), trouve \(\dfrac{dy}{dx}\) en \(x=2\).`, num(-3),
      "dy/dx = 2x − 7.", [S`\(4-7\).`], S`\(-3\)`),
    q("affine", S`Trouve \(f'(x)\) pour \(f(x)=4x-1\).`, expr("4"),
      "La pente d'une droite.", [S`\(\frac{4h}{h}=4\).`], S`\(4\)`),
    q("cubique", S`Pour \(f(x)=x^3\), trouve \(f'(-1)\).`, num(3),
      "f′(x) = 3x².", [S`\(3(1)\).`], S`\(3\)`),
    q("définition", S`Trouve \(f'(x)\) pour \(f(x)=2x^2-x\).`, expr("4*x-1"),
      "Simplifie (f(x + h) − f(x))/h.", [S`\(\frac{4xh+2h^2-h}{h}=4x+2h-1\to4x-1\).`], S`\(4x-1\)`),
  ]),

  ...hard([
    ["Une racine carrée", S`Utilise la définition de la dérivée pour trouver la dérivée de \(f(x)=\sqrt x\), puis trouve la tangente en \(x=4\).`,
      [S`\(\dfrac{\sqrt{x+h}-\sqrt x}{h}\cdot\dfrac{\sqrt{x+h}+\sqrt x}{\sqrt{x+h}+\sqrt x}=\dfrac1{\sqrt{x+h}+\sqrt x}\to\dfrac1{2\sqrt x}\).`, S`En \(x=4\) : pente \(\frac14\), point \((4,2)\) : \(y-2=\frac14(x-4)\).`],
      S`\(f'(x)=\dfrac1{2\sqrt x}\); tangente \(y=\tfrac14x+1\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9, color: "violet" }, { f: (x) => 0.25 * x + 1, color: "green" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Tangentes horizontales", S`Pour \(f(x)=x^3-3x^2\), trouve \(f'(x)\) à partir de la définition et les points où la tangente est horizontale.`,
      [S`\(\dfrac{(x+h)^3-3(x+h)^2-x^3+3x^2}{h}=3x^2+3xh+h^2-6x-3h\to3x^2-6x\).`, S`\(3x(x-2)=0\Rightarrow x=0\) ou \(2\) : points \((0,0)\) et \((2,-4)\).`],
      S`\(f'(x)=3x^2-6x\); tangentes horizontales en \((0,0)\) et \((2,-4)\)`],
  ], [
    q("difficile", S`Pour \(f(x)=x^2-6x+2\), pour quelle valeur de \(x\) a-t-on \(f'(x)=0\)?`, num(3),
      "f′(x) = 2x − 6.", [S`\(2x-6=0\).`], S`\(3\)`),
    q("difficile", S`Pour \(f(x)=\dfrac2x\), trouve \(f'(2)\).`, num(-0.5, 0.0001),
      "f′(x) = −2/x².", [S`\(-\frac24\).`], S`\(-0.5\)`),
    q("difficile", S`Pour \(f(x)=x^4\), trouve \(f'(1)\) à partir de la définition.`, num(4),
      "Développe (1 + h)⁴.", [S`\(\frac{4h+6h^2+4h^3+h^4}{h}\to4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce que la dérivée?", "La fonction qui donne la pente de la tangente (le taux de variation instantané) en chaque x : f′(x) = lim h→0 (f(x + h) − f(x))/h."],
      ["Quel est le lien graphique entre f et f′?", "Là où f monte, f′ > 0; là où f descend, f′ < 0; aux points tournants, f′ = 0."],
      ["Toute fonction continue est-elle dérivable?", "Non : les coins, les points de rebroussement et les tangentes verticales sont continus mais n'ont pas de dérivée."],
      ["Que signifient f′(x) et dy/dx?", "La même chose : le taux de variation de la sortie par rapport à x."],
      ["Dois-je toujours utiliser la définition de la dérivée?", "Non — le chapitre 2 présente des règles (puissance, produit, dérivation en chaîne, quotient) qui donnent les dérivées rapidement."],
    ],
    summary: [
      "f′(x) = lim h→0 (f(x + h) − f(x))/h.",
      "f′(a) = pente de la tangente en x = a.",
      "f′ > 0 : f monte; f′ < 0 : f descend; f′ = 0 : tangente horizontale.",
      "Pas de dérivée aux coins, aux points de rebroussement, aux tangentes verticales et aux discontinuités.",
    ],
    next: "la leçon 1.6 révise le chapitre.",
  }),
];
