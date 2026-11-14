// MHF4U-FR 1.1 — Fonctions puissance : y = axⁿ, degré et coefficient dominant, comportement à l'infini, symétrie,
// domaine et image, comparaison des puissances, et distinction entre fonctions polynomiales, exponentielles et sinusoïdales
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.1 Fonctions puissance";
export const ID = lessonId(1, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Fonctions puissance",
    overview: S`Une <strong>fonction puissance</strong> est de la forme \(y=ax^n\), où \(n\) est un nombre entier naturel et \(a\ne0\). Les fonctions puissance sont les briques de base de tout polynôme : pour des valeurs de \(x\) très grandes ou très petites, un polynôme se comporte comme son terme dominant. Dans cette leçon, tu vas classer des fonctions, utiliser le degré et le signe de \(a\) pour prédire le comportement à l'infini, décrire la symétrie, le domaine et l'image, comparer différentes puissances, et distinguer les fonctions polynomiales des fonctions exponentielles et sinusoïdales.`,
    goals: [
      "reconnaître les fonctions puissance et les fonctions polynomiales, et donner leur degré et leur coefficient dominant;",
      "décrire le comportement à l'infini de y = axⁿ à partir de la parité de n et du signe de a;",
      "donner le domaine, l'image et la symétrie (paire ou impaire) d'une fonction puissance;",
      "comparer les graphiques de différentes puissances près de 0 et loin de 0;",
      "distinguer les fonctions polynomiales des fonctions exponentielles et sinusoïdales.",
    ],
    curriculum: "C1.1–C1.4 (reconnaître les expressions et les fonctions polynomiales; comparer les représentations numériques, graphiques et algébriques; décrire les caractéristiques clés, y compris le comportement à l'infini; distinguer les fonctions polynomiales des fonctions sinusoïdales et exponentielles)",
    prior: [
      [S`Évalue \((-2)^4\) et \((-2)^5\).`, S`\(16\) et \(-32\).`],
      [S`Dans quels quadrants passe \(y=x^2\)?`, S`Les quadrants 1 et 2.`],
      [S`Quel est le degré de \(4x^3-x+7\)?`, S`\(3\).`],
    ],
    words: [
      ["Fonction puissance", "\\(y=ax^n\\), \\(n\\) un nombre entier naturel", "\\(y=-2x^5\\)"],
      ["Degré", "le plus grand exposant de \\(x\\)", ""],
      ["Coefficient dominant", "le coefficient de la plus grande puissance", ""],
      ["Comportement à l'infini", "ce que fait \\(y\\) quand \\(x\\to\\pm\\infty\\)", ""],
      ["Fonction paire / impaire", "\\(f(-x)=f(x)\\) / \\(f(-x)=-f(x)\\)", ""],
    ],
  }),

  section("📌 Quatre familles de comportement à l'infini", S`
  ${plane({ view: { xmin: -2.2, xmax: 2.2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 4, color: "blue" }, { f: (x) => -(x ** 4), color: "red" }, { f: (x) => x ** 3, color: "green" }, { f: (x) => -(x ** 3), color: "amber" }], points: [{ x: 1.4, y: 3.84, label: "x⁴", color: "blue" }, { x: 1.4, y: -3.84, label: "−x⁴", color: "red" }, { x: 1.6, y: 4.1, label: "x³", color: "green" }, { x: -1.6, y: 4.1, label: "−x³", color: "amber" }], step: { x: 1, y: 1 } }, "Degré pair : les deux extrémités vont dans le même sens. Degré impair : les extrémités vont en sens opposés. Un a négatif retourne le graphique.")}
  ${table(["", "a > 0", "a < 0"], [
    ["n pair", "Q2 → Q1 : \\(y\\to+\\infty\\) aux deux extrémités", "Q3 → Q4 : \\(y\\to-\\infty\\) aux deux extrémités"],
    ["n impair", "Q3 → Q1 : descend à gauche, monte à droite", "Q2 → Q4 : monte à gauche, descend à droite"],
  ])}
  ${keyIdea(S`Pour \(y=ax^n\) : la <strong>parité</strong> de \(n\) détermine si les extrémités vont dans le même sens (pair) ou en sens opposés (impair); le <strong>signe</strong> de \(a\) détermine la direction de l'extrémité droite. Les puissances paires sont symétriques par rapport à l'axe des y; les puissances impaires, par rapport à l'origine. Le domaine est toujours l'ensemble des nombres réels; l'image est l'ensemble des nombres réels si \(n\) est impair, et \(y\ge0\) ou \(y\le0\) si \(n\) est pair.`)}`),

  section("📌 Explore", S`<p>Change le degré et le coefficient dominant. Active ensuite la comparaison pour voir comment les puissances plus élevées collent à l'axe des x près de 0 et montent beaucoup plus vite au-delà de \(|x|=1\).</p>`),

  widget("powerLab", { init: [3, 1] }),

  section("📌 Les polynômes, et les fonctions qui n'en sont pas", S`
  <p>Une <strong>fonction polynomiale</strong> est une somme de fonctions puissance, comme \(f(x)=2x^4-x^3+5x-1\). Son degré est la plus grande puissance, et son comportement à l'infini reproduit celui de son terme dominant \(2x^4\). Les fonctions exponentielles comme \(y=2^x\) (la variable est dans l'exposant) et les fonctions sinusoïdales comme \(y=\sin x\) (périodiques, bornées) ne sont <em>pas</em> des polynômes.</p>
  ${watchOut([
    "y = 3ˣ n'est pas une fonction puissance — la variable est dans l'exposant.",
    "y = x⁴ + 1 est un polynôme, mais pas une fonction puissance (deux termes).",
    "(−x)⁴ = x⁴, mais (−x)³ = −x³ : c'est de là que vient la symétrie paire/impaire.",
    "Une constante y = 7 est une fonction puissance de degré 0.",
    "Le comportement à l'infini dépend seulement du terme dominant, pas des autres termes.",
  ])}`),

  examples([
    ["Classer", S`Lesquelles sont des fonctions puissance? Donne le degré lorsque c'est possible : a) \(y=-2x^5\) b) \(y=3^x\) c) \(y=x^4+1\) d) \(y=7\).`,
      [S`<b>Définition.</b> Une fonction puissance a exactement un terme, \(y=ax^n\), où \(n\) est un nombre entier naturel et la variable est la base.`,
        S`<b>a)</b> \(y=-2x^5\) est un seul terme avec \(a=-2\), \(n=5\). C'est donc une fonction puissance de degré 5.`,
        S`<b>b)</b> Dans \(y=3^x\), la variable est dans l'exposant : c'est une fonction exponentielle, pas une fonction puissance.`,
        S`<b>c)</b> \(y=x^4+1\) a deux termes. C'est un polynôme de degré 4, mais pas une fonction puissance. Son graphique est celui de \(y=x^4\) déplacé de 1 vers le haut.`,
        S`<b>d)</b> \(7=7x^0\), ce qui correspond à la forme avec \(n=0\). C'est donc une fonction puissance de degré 0.`,
        S`<b>Vérification sur le graphique.</b> Une fonction puissance avec \(n\ge1\) passe par l'origine. a) y passe. b) et c) n'y passent pas ✓`],
      S`a) et d) sont des fonctions puissance`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 9 }, curves: [{ f: (x) => -2 * x ** 5, color: "violet" }, { f: (x) => 3 ** x, color: "red" }, { f: (x) => x ** 4 + 1, color: "blue" }], lines: [{ m: 0, b: 7, color: "green" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "violet" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }], step: { x: 1, y: 1 } }, "violet a), rouge b), bleu c), vert d)")],
    ["Degré pair, a négatif", S`Décris le comportement à l'infini, la symétrie, le domaine et l'image de \(y=-3x^4\).`,
      [S`<b>Comportement à l'infini.</b> Pour \(|x|\) grand, \(x^4\) est énorme et positif, quel que soit le signe de \(x\). La multiplication par \(-3\) le rend énorme et négatif. Les deux extrémités descendent donc (Q3 et Q4).`,
        S`<b>Symétrie.</b> Teste \(f(-x)\) : \(f(-x)=-3(-x)^4=-3x^4=f(x)\). La fonction est paire, donc symétrique par rapport à l'axe des y.`,
        S`<b>Domaine.</b> Tout nombre réel peut être élevé à la puissance quatre, donc le domaine est l'ensemble des nombres réels.`,
        S`<b>Image.</b> \(x^4\ge0\), donc \(-3x^4\le0\). La valeur 0 est atteinte en \(x=0\), donc l'image est \(y\le0\).`,
        S`<b>Vérification.</b> \(f(1)=f(-1)=-3\) : même hauteur des deux côtés ✓`],
      S`\(y\to-\infty\) quand \(x\to\pm\infty\); paire; domaine : tous les réels; image : \(y\le0\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -10, ymax: 2 }, curves: [{ f: (x) => -3 * x ** 4, color: "red" }], points: [{ x: 1, y: -3, label: "(1, −3)" }, { x: -1, y: -3, label: "(−1, −3)" }], step: { x: 1, y: 2 } })],
    ["Degré impair, a positif", S`Décris \(y=0.5x^5\).`,
      [S`<b>Comportement à l'infini.</b> \(x^5\) garde le signe de \(x\), et \(a=0.5\) est positif. Donc \(y\) est grand et négatif à gauche, et grand et positif à droite (de Q3 à Q1).`,
        S`<b>Symétrie.</b> \(f(-x)=0.5(-x)^5=-0.5x^5=-f(x)\). La fonction est impaire : elle a une symétrie centrale (demi-tour) par rapport à l'origine.`,
        S`<b>Domaine et image.</b> Toute valeur réelle peut être utilisée, et les sorties prennent toutes les valeurs réelles, car une puissance impaire va de \(-\infty\) à \(\infty\).`,
        S`<b>Effet de \(a\).</b> \(0.5\) comprime verticalement \(y=x^5\). Cela ne change ni le comportement à l'infini ni la symétrie.`,
        S`<b>Vérification.</b> \(f(1)=0.5\) et \(f(-1)=-0.5\) : hauteurs opposées ✓`],
      S`quand \(x\to-\infty\), \(y\to-\infty\); quand \(x\to\infty\), \(y\to\infty\); impaire; domaine et image : tous les réels`,
      plane({ view: { xmin: -2.2, xmax: 2.2, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 0.5 * x ** 5, color: "green" }], points: [{ x: 1, y: 0.5, label: "(1, 0.5)" }, { x: -1, y: -0.5, label: "(−1, −0.5)" }], step: { x: 1, y: 2 } })],
    ["Comparer des puissances", S`Compare \(y=x^2\), \(y=x^4\) et \(y=x^6\) en \(x=0.5\) et en \(x=2\).`,
      [S`<b>Table de valeurs.</b> ${tv(["\\(x\\)", "\\(x^2\\)", "\\(x^4\\)", "\\(x^6\\)"], ["0.5", "0.25", "0.0625", "0.015625"], ["1", "1", "1", "1"], ["2", "4", "16", "64"])}`,
        S`<b>Entre 0 et 1.</b> Multiplier par un nombre inférieur à 1 rend les valeurs plus petites : les puissances plus élevées sont donc plus petites, et les graphiques sont plus plats près de 0.`,
        S`<b>Au-delà de 1.</b> Multiplier par un nombre supérieur à 1 rend les valeurs plus grandes : les puissances plus élevées croissent donc beaucoup plus vite.`,
        S`<b>Points communs.</b> \(1^n=1\), \((-1)^{\text{pair}}=1\) et \(0^n=0\). Les trois courbes passent donc par \((-1,1)\), \((0,0)\) et \((1,1)\) ✓`],
      S`les puissances paires plus élevées sont plus plates près de 0 et plus abruptes au-delà de \(|x|=1\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => x ** 4, color: "green" }, { f: (x) => x ** 6, color: "red" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: 1, label: "(−1, 1)" }], step: { x: 0.5, y: 1 } })],
    ["Polynomiale, exponentielle ou sinusoïdale?", S`Associe le comportement de chaque graphique à \(y=x^3-4x\), \(y=2^x\) ou \(y=2\sin x\).`,
      [S`<b>Polynomiale.</b> \(y=x^3-4x\) n'est pas bornée aux deux extrémités, qui vont en sens opposés, car son degré est impair. Le degré 3 permet jusqu'à 2 points tournants.`,
        S`<b>Exponentielle.</b> \(y=2^x\) est toujours positive. Elle a une asymptote horizontale \(y=0\) à gauche et n'a aucun point tournant.`,
        S`<b>Sinusoïdale.</b> \(y=2\sin x\) se répète tous les \(2\pi\) et reste entre \(-2\) et \(2\). Un polynôme ne peut pas faire cela, car il ne peut pas avoir une infinité de points tournants.`,
        S`<b>Résumé.</b> ${tv(["fonction", "extrémités", "points tournants"], ["\\(x^3-4x\\)", "non bornées, opposées", "2"], ["\\(2^x\\)", "asymptote à gauche", "0"], ["\\(2\\sin x\\)", "bornées, répétitives", "une infinité"])}`],
      S`seule \(y=x^3-4x\) est une fonction polynomiale`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }, { f: (x) => 2 ** x, color: "red" }, { f: (x) => 2 * Math.sin(x), color: "blue" }], points: [{ x: 2.3, y: 4.9, label: "2ˣ", color: "red" }, { x: -2.7, y: -0.9, label: "2 sin x", color: "blue" }, { x: -2.2, y: -2.3, label: "x³ − 4x", color: "violet" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("degré", S`Quel est le degré de \(y=-5x^7\)?`, num(7),
      "L'exposant de x.", [S`Un seul terme, exposant 7.`], S`\(7\)`),
    q("comportement à l'infini", S`Décris le comportement à l'infini de \(y=-x^3\).`, choice(["monte à gauche, descend à droite (Q2 → Q4)", "descend à gauche, monte à droite (Q3 → Q1)", "descend aux deux extrémités", "monte aux deux extrémités"], 0),
      "Degré impair, a négatif.", [S`Impair : sens opposés; \(a\lt0\) : l'extrémité droite descend.`], "Q2 → Q4"),
    q("image", S`L'image de \(y=2x^6\) est \(y\ge m\). Trouve \(m\).`, num(0),
      "Puissance paire, a positif.", [S`\(x^6\ge0\), donc \(2x^6\ge0\).`], S`\(0\)`),
    q("évaluer", S`Pour \(f(x)=-x^4\), trouve \(f(-2)\).`, num(-16),
      "(−2)⁴ = 16.", [S`\(-(16)=-16\); remarque que \(f(-2)=f(2)\) : fonction paire.`], S`\(-16\)`),
    q("classer", "Laquelle est une fonction puissance?", choice([S`\(y=\tfrac12x^3\)`, S`\(y=4^x\)`, S`\(y=x^2+3x\)`, S`\(y=\sin x\)`], 0),
      "Un seul terme axⁿ, où n est un nombre entier naturel.", [S`\(\tfrac12x^3\) est de la forme \(ax^n\).`], S`\(y=\tfrac12x^3\)`),
  ]),

  ...hard([
    ["Trouver a et n", S`Une fonction puissance \(y=ax^n\) passe par \((2,-24)\) et \((-1,3)\). Trouve \(a\) et \(n\).`,
      [S`\(a\cdot2^n=-24\) et \(a(-1)^n=3\).`, S`Divise : \(\frac{2^n}{(-1)^n}=(-2)^n=-8\), donc \(n=3\).`, S`Alors \(a(-1)^3=3\Rightarrow a=-3\). Vérification : \(-3(8)=-24\) ✓.`],
      S`\(y=-3x^3\)`],
    ["Quand une puissance dépasse l'autre", S`Pour quelles valeurs de \(x\) a-t-on \(x^4>x^2\)? Explique à l'aide des graphiques.`,
      [S`\(x^4-x^2=x^2(x^2-1)\).`, S`\(x^2\ge0\), et \(x^2-1>0\) exactement quand \(|x|>1\); en \(x=0\), la différence vaut 0.`],
      S`\(x\lt-1\) ou \(x>1\) : au-delà de \(|x|=1\), la puissance la plus élevée est au-dessus`,
      plane({ view: { xmin: -1.8, xmax: 1.8, ymin: -0.3, ymax: 3 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => x ** 4, color: "red" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: 1, label: "(−1, 1)" }], step: { x: 0.5, y: 0.5 } })],
  ], [
    q("difficile", S`\(y=ax^n\) passe par \((1,5)\) et \((2,40)\). Trouve \(n\).`, num(3),
      "Divise les deux équations.", [S`\(2^n=\frac{40}{5}=8\).`], S`\(3\)`),
    q("difficile", S`Pour la même fonction, trouve \(a\).`, num(5),
      "Utilise (1, 5).", [S`\(a\cdot1^3=5\).`], S`\(5\)`),
    q("difficile", S`Combien de fois les courbes \(y=x^3\) et \(y=x^5\) se coupent-elles?`, num(3),
      "Résous x³ = x⁵.", [S`\(x^3(x^2-1)=0\) : \(x=0,\pm1\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi seul le terme dominant compte-t-il pour le comportement à l'infini?", "Pour |x| très grand, la plus grande puissance croît beaucoup plus vite que toutes les autres, donc elle l'emporte. Par exemple, x⁴ vaut 10 000 fois x² quand x = 100."],
      ["Comment retenir les quatre cas?", "Imagine y = x² (pair, a > 0 : les deux extrémités montent) et y = x³ (impair, a > 0 : descend puis monte). Un a négatif retourne chaque image à l'envers."],
      ["Pourquoi les puissances paires sont-elles symétriques par rapport à l'axe des y?", "(−x)ⁿ = xⁿ quand n est pair, donc f(−x) = f(x) : le point (−x, y) est sur le graphique chaque fois que (x, y) y est."],
      ["Tout polynôme est-il une fonction puissance?", "Non. Une fonction puissance a exactement un terme. Les polynômes sont des sommes de fonctions puissance."],
      ["Comment distinguer le graphique d'un polynôme de celui d'une exponentielle?", "Les polynômes tendent vers ±∞ aux deux extrémités; une exponentielle comme 2ˣ s'approche d'une asymptote horizontale d'un côté."],
    ],
    summary: [
      "Fonction puissance : y = axⁿ, n un nombre entier naturel.",
      "n pair : extrémités dans le même sens; n impair : extrémités opposées; a < 0 retourne le graphique.",
      "Paire : symétrique par rapport à l'axe des y; impaire : par rapport à l'origine.",
      "Aux extrémités, un polynôme se comporte comme son terme dominant.",
    ],
    next: "La leçon 1.2 étudie les caractéristiques des fonctions polynomiales complètes : points tournants, zéros et différences finies.",
  }),
];
