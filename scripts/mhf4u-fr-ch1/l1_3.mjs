// MHF4U-FR 1.3 — Équations et graphiques des fonctions polynomiales : forme factorisée, zéros et leur ordre (multiplicité),
// intervalles de signe avec valeurs tests, esquisse, et équations à partir de graphiques et de conditions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.3 Équations et graphiques des fonctions polynomiales";
export const ID = lessonId(1, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Équations et graphiques des fonctions polynomiales",
    overview: S`Quand un polynôme est sous forme factorisée, on peut esquisser son graphique presque immédiatement. Chaque facteur \((x-r)\) donne un zéro en \(x=r\); l'exposant du facteur (son <strong>ordre</strong> ou sa multiplicité) indique si le graphique traverse l'axe, rebondit ou s'aplatit à cet endroit; le coefficient dominant et le degré donnent le comportement à l'infini; et des valeurs tests montrent où la fonction est positive ou négative. Dans cette leçon, tu vas esquisser à partir de la forme factorisée et travailler dans l'autre sens : écrire une équation à partir d'un graphique ou d'une liste de conditions.`,
    goals: [
      "trouver les zéros et leur ordre à partir de la forme factorisée;",
      "décrire le comportement du graphique en un zéro d'ordre 1, 2 et 3;",
      "trouver les intervalles où la fonction est positive ou négative à l'aide de valeurs tests;",
      "esquisser une fonction polynomiale à partir de sa forme factorisée;",
      "écrire une équation à partir des zéros, de leur ordre et d'un point supplémentaire.",
    ],
    curriculum: "C1.5, C1.7 (relier la forme factorisée aux abscisses à l'origine et esquisser à l'aide des caractéristiques clés et de valeurs tests; déterminer une équation à partir de conditions données, en reconnaissant que plus d'un polynôme peut convenir)",
    prior: [
      [S`Résous \((x-4)(x+1)=0\).`, S`\(x=4\) ou \(x=-1\).`],
      [S`Comportement à l'infini d'un polynôme de degré 4 avec \(a\lt0\)?`, S`Descend aux deux extrémités.`],
      [S`Développe \((x-2)^2\).`, S`\(x^2-4x+4\).`],
    ],
    words: [
      ["Zéro", "une valeur de \\(x\\) pour laquelle \\(f(x)=0\\)", ""],
      ["Ordre (multiplicité)", "l'exposant d'un facteur répété", "\\((x-1)^3\\) : ordre 3"],
      ["Valeur test", "une valeur de x utilisée pour trouver le signe entre deux zéros", ""],
      ["Intervalle", "un ensemble de valeurs de x entre deux zéros", ""],
    ],
  }),

  section("📌 Comportement en un zéro", S`
  ${plane({ view: { xmin: -4, xmax: 5, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 0.5 * (x + 2) * (x - 1) ** 2 * (x - 3) ** 3 / 4, color: "violet" }], points: [{ x: -2, y: 0, label: "ordre 1 : traverse", color: "red" }, { x: 1, y: 0, label: "ordre 2 : rebondit", color: "amber" }, { x: 3, y: 0, label: "ordre 3 : s'aplatit", color: "green" }], step: { x: 1, y: 2 } }, "Un seul graphique, trois comportements : y = ⅛(x + 2)(x − 1)²(x − 3)³.")}
  ${table(["Ordre du zéro", "Ce que fait le graphique", "Forme près du zéro"], [
    ["1", "traverse l'axe des x", "comme une droite"],
    ["2 (tout ordre pair)", "touche l'axe et repart", "comme une parabole"],
    ["3 (impair, > 1)", "traverse en s'aplatissant", "comme y = x³"],
  ])}
  ${keyIdea(S`Pour esquisser à partir de la forme factorisée : (1) les zéros et leur ordre; (2) degré = somme des ordres, et signe de \(a\) → comportement à l'infini; (3) ordonnée à l'origine \(f(0)\); (4) signes entre les zéros (valeurs tests, ou la règle : le signe change en un zéro d'ordre impair et reste le même en un zéro d'ordre pair); (5) relie les points par une courbe lisse.`)}`),

  section("📌 Explore", S`<p>Déplace les zéros, change leur ordre et le coefficient dominant. Observe le graphique traverser, rebondir ou s'aplatir, et lis la ligne des signes sous le graphique.</p>`),

  widget("factoredPoly", { init: { a: 1, zeros: [[-3, 1], [1, 2], [4, 1]] } }),

  section("📌 Écrire des équations", S`
  <p>Les zéros seuls ne déterminent pas un polynôme : \(y=a(x+2)(x-1)(x-3)\) a les mêmes zéros pour tout \(a\ne0\). Un point de plus (souvent l'ordonnée à l'origine) détermine \(a\).</p>
  ${watchOut([
    "(x + 2) donne le zéro −2, pas 2.",
    "Additionne les ordres pour obtenir le degré : (x − 1)²(x + 3) est de degré 3.",
    "N'oublie pas a quand tu calcules l'ordonnée à l'origine : f(0) inclut le coefficient dominant.",
    "En un zéro d'ordre pair, le signe NE change PAS — les valeurs tests le montrent clairement.",
    "Beaucoup de polynômes ont les trois mêmes abscisses à l'origine; précise quelles conditions rendent la réponse unique.",
  ])}`),

  examples([
    ["Esquisser une fonction cubique", S`Esquisse \(f(x)=(x+2)(x-1)(x-3)\).`,
      [S`<b>Zéros.</b> Chaque facteur donne un zéro : \(-2\), \(1\), \(3\). Chacun est d'ordre 1, donc le graphique traverse l'axe en chacun.`,
        S`<b>Comportement à l'infini.</b> Le terme dominant est \(x\cdot x\cdot x=x^3\) : degré 3, \(a=1\). Donc de Q3 à Q1.`,
        S`<b>Ordonnée à l'origine.</b> \(f(0)=(2)(-1)(-3)=6\).`,
        S`<b>Tableau de signes.</b> ${tv(["intervalle", "\\(x\\lt-2\\)", "\\(-2\\lt x\\lt1\\)", "\\(1\\lt x\\lt3\\)", "\\(x>3\\)"], ["\\(x\\) test", "\\(-3\\)", "0", "2", "4"], ["signe de \\(f\\)", "−", "+", "−", "+"])}`,
        S`<b>Vérification.</b> \(f(2)=(4)(1)(-1)=-4\lt0\) ✓, ce qui concorde avec le tableau et le graphique.`],
      S`traverse en \(-2,1,3\); ordonnée à l'origine 6`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }, { x: 0, y: 6, label: "(0, 6)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Un zéro double", S`Esquisse \(g(x)=-(x+1)^2(x-2)\).`,
      [S`<b>Zéros et leur ordre.</b> \(-1\) est d'ordre 2. Un facteur au carré ne change pas de signe, donc le graphique rebondit. \(2\) est d'ordre 1, donc il traverse.`,
        S`<b>Comportement à l'infini.</b> Le terme dominant est \(-x^3\) : degré 3, \(a=-1\). Donc de Q2 à Q4.`,
        S`<b>Ordonnée à l'origine.</b> \(g(0)=-(1)^2(-2)=2\).`,
        S`<b>Tableau de signes.</b> ${tv(["intervalle", "\\(x\\lt-1\\)", "\\(-1\\lt x\\lt2\\)", "\\(x>2\\)"], ["\\(x\\) test", "\\(-2\\)", "0", "3"], ["signe de \\(g\\)", "+", "+", "−"])}`,
        S`<b>Vérification.</b> Le signe reste + en passant par \(-1\) (rebond) et change en 2 (traversée) ✓`],
      S`rebondit en \(-1\), traverse en \(2\); ordonnée à l'origine 2`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -6, ymax: 8 }, curves: [{ f: (x) => -((x + 1) ** 2) * (x - 2), color: "violet" }], points: [{ x: -1, y: 0, label: "−1 (rebond)", color: "amber" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 0, y: 2, label: "(0, 2)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Trouver a pour une fonction quartique", S`Une fonction quartique a un zéro double en \(-2\), des zéros en \(1\) et \(3\), et passe par \((0,-24)\). Trouve son équation.`,
      [S`<b>Construire la famille.</b> Chaque zéro donne un facteur, et un zéro double donne un facteur au carré : \(y=a(x+2)^2(x-1)(x-3)\). La somme des exposants est 4, comme l'exige une fonction quartique.`,
        S`<b>Utiliser le point.</b> Remplace par \((0,-24)\) : \(-24=a(2)^2(-1)(-3)=12a\).`,
        S`<b>Résoudre.</b> \(a=-2\).`,
        S`<b>Vérification.</b> \(a\lt0\) signifie que les deux extrémités descendent, comme le montre le graphique. Aussi, \(-2(4)(-1)(-3)=-24\) ✓`],
      S`\(y=-2(x+2)^2(x-1)(x-3)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -40, ymax: 30 }, curves: [{ f: (x) => -2 * (x + 2) ** 2 * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, color: "amber" }, { x: 1, y: 0, color: "red" }, { x: 3, y: 0, color: "red" }, { x: 0, y: -24, label: "(0, −24)", color: "blue" }], step: { x: 1, y: 10 } })],
    ["Équation à partir d'un graphique", S`La fonction cubique illustrée coupe l'axe des x en \(-3\), \(0\) et \(2\), et passe par \((1,-8)\). Trouve son équation.`,
      [S`<b>Construire la famille.</b> Le zéro 0 donne le facteur \(x\). Donc \(y=ax(x+3)(x-2)\).`,
        S`<b>Utiliser le point.</b> Un zéro ne peut pas déterminer \(a\); utilise donc \((1,-8)\) : \(-8=a(1)(4)(-1)=-4a\).`,
        S`<b>Résoudre.</b> \(a=2\).`,
        S`<b>Vérification avec un autre point.</b> Le graphique est positif entre \(-3\) et 0 : en \(x=-1\) : \(2(-1)(2)(-3)=12>0\) ✓`],
      S`\(y=2x(x+3)(x-2)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 22 }, curves: [{ f: (x) => 2 * x * (x + 3) * (x - 2), color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 0, y: 0, color: "red" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 1, y: -8, label: "(1, −8)", color: "blue" }], step: { x: 1, y: 4 } })],
    ["Tout lire", S`Décris \(f(x)=x^3(x-2)^2(x+1)\) sans outil technologique de représentation graphique.`,
      [S`<b>Zéros et ordres.</b> \(0\) est d'ordre 3 : le graphique traverse en s'aplatissant. \(2\) est d'ordre 2 : il rebondit. \(-1\) est d'ordre 1 : il traverse.`,
        S`<b>Degré et extrémités.</b> On additionne les ordres : \(3+2+1=6\), et \(a=1\). Les deux extrémités montent donc.`,
        S`<b>Tableau de signes.</b> ${tv(["intervalle", "\\(x\\lt-1\\)", "\\(-1\\lt x\\lt0\\)", "\\(0\\lt x\\lt2\\)", "\\(x>2\\)"], ["\\(x\\) test", "\\(-2\\)", "\\(-0.5\\)", "1", "3"], ["signe de \\(f\\)", "+", "−", "+", "+"])}`,
        S`<b>Vérification.</b> \(f(1)=(1)(1)(2)=2>0\) ✓. Le signe ne change pas au zéro double 2 ✓`],
      S`degré 6, monte aux deux extrémités; traversée aplatie en 0, rebond en 2, traversée en −1`,
      plane({ view: { xmin: -1.6, xmax: 2.8, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x ** 3 * (x - 2) ** 2 * (x + 1), color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "red" }, { x: 0, y: 0, label: "0", color: "red" }, { x: 2, y: 0, label: "2", color: "amber" }, { x: 1, y: 2, label: "(1, 2)" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("zéros", S`Trouve tous les zéros de \(f(x)=(x-4)(x+5)^2\).`, roots(4, -5),
      "Pose chaque facteur égal à 0.", [S`\(x-4=0\) ou \(x+5=0\).`], S`\(x=4\) ou \(x=-5\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(f(x)=2(x-1)(x+3)(x-2)\).`, num(12),
      "Remplace x par 0 (inclus le 2).", [S`\(2(-1)(3)(-2)=12\).`], S`\(12\)`),
    q("comportement", S`Que fait le graphique de \(y=(x-3)^2(x+1)\) en \(x=3\)?`, choice(["il touche l'axe des x et repart", "il traverse directement", "il traverse en s'aplatissant", "il a une asymptote"], 0),
      "Ordre 2.", ["Ordre pair : rebond."], "rebondit"),
    q("trouver a", S`Une fonction cubique a pour zéros \(-1\), \(2\) et \(4\) et passe par \((0,16)\). Trouve \(a\).`, num(2),
      "y = a(x + 1)(x − 2)(x − 4).", [S`\(a(1)(-2)(-4)=8a=16\).`], S`\(2\)`),
    q("degré", S`Quel est le degré de \(f(x)=(x+1)^3(x-2)^2\)?`, num(5),
      "Additionne les ordres.", [S`\(3+2\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Une fonction quintique avec trois abscisses à l'origine", S`Écris l'équation d'un polynôme de degré 5 qui coupe l'axe des x seulement en \(-4\), \(0\) et \(3\), qui a un coefficient dominant positif et qui s'aplatit en \(0\). Esquisse-le.`,
      [S`Traverser en chaque zéro signifie des ordres impairs; la somme des ordres doit être 5.`, S`S'aplatir en 0 signifie l'ordre 3 à cet endroit : ordres \(1,3,1\).`, S`\(y=x^3(x+4)(x-3)\) (tout multiple positif convient aussi).`],
      S`\(y=x^3(x+4)(x-3)\)`,
      plane({ view: { xmin: -5, xmax: 4, ymin: -80, ymax: 80 }, curves: [{ f: (x) => x ** 3 * (x + 4) * (x - 3), color: "violet" }], points: [{ x: -4, y: 0, label: "−4", color: "red" }, { x: 0, y: 0, label: "0", color: "green" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 20 } })],
    ["Où est-elle négative?", S`Trouve où \(f(x)=(x+1)(x-2)^2(x-5)\) est négative.`,
      [S`Zéros \(-1\) (ordre 1), \(2\) (ordre 2), \(5\) (ordre 1); degré 4, \(a>0\) : positive pour \(x>5\).`, S`En allant vers la gauche : traverse en 5 → négative sur \((2,5)\); aucun changement en 2 → négative sur \((-1,2)\); traverse en \(-1\) → positive pour \(x\lt-1\).`],
      S`\(-1\lt x\lt2\) ou \(2\lt x\lt5\)`],
  ], [
    q("difficile", S`\(y=a(x-1)^2(x+2)^2\) passe par \((0,12)\). Trouve \(a\).`, num(3),
      "Remplace par (0, 12).", [S`\(a(1)(4)=12\).`], S`\(3\)`),
    q("difficile", S`Combien d'abscisses à l'origine \(f(x)=(x^2+4)(x-1)^3\) a-t-elle?`, num(1),
      "x² + 4 ne vaut jamais 0.", [S`Seulement \(x=1\).`], S`\(1\)`),
    q("difficile", S`Pour \(f(x)=-(x+1)^2(x-2)\), trouve \(f(-3)\).`, num(20),
      "Remplace avec soin.", [S`\(-(4)(-5)=20\).`], S`\(20\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le graphique rebondit-il en un zéro d'ordre pair?", "Un facteur comme (x − 2)² n'est jamais négatif, donc le signe de f ne change pas en x = 2 : le graphique touche l'axe et repart."],
      ["Pourquoi le graphique s'aplatit-il en un zéro d'ordre 3?", "Près de x = r, le facteur (x − r)³ se comporte comme y = x³, qui traverse l'axe avec une forme en S aplatie."],
      ["Combien de polynômes ont des zéros donnés?", "Une infinité : changer a, ou augmenter l'ordre d'un facteur, conserve les mêmes zéros. Un point supplémentaire détermine a."],
      ["Ai-je besoin de valeurs tests si je connais les ordres?", "Pas absolument — le signe change en un zéro d'ordre impair et reste le même en un zéro d'ordre pair — mais une valeur test est une bonne vérification."],
      ["Et si un facteur comme x² + 4 ne vaut jamais 0?", "Il contribue au degré, mais ne donne aucune abscisse à l'origine, et il ne change pas de signe."],
    ],
    summary: [
      "Facteur (x − r)ᵐ : zéro r d'ordre m.",
      "Ordre 1 : traverse; ordre pair : rebondit; ordre 3 : s'aplatit.",
      "Degré = somme des ordres; a donne le comportement à l'infini.",
      "Les zéros et un point déterminent l'équation.",
    ],
    next: "La leçon 1.4 transforme les fonctions puissance y = x³ et y = x⁴.",
  }),
];
