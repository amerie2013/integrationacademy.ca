// MCV4U-FR 3.3 — Concavité et test de la dérivée seconde : concave vers le haut/bas selon le signe de f″, points
// d'inflexion, test de la dérivée seconde pour les extremums relatifs, quand le test échoue, et le point de rendement
// décroissant. Miroir de ../mcv4u-ch3/l3_3.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.3 Concavité et test de la dérivée seconde";
export const ID = lessonId(3, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🌙",
    title: "Concavité et test de la dérivée seconde",
    overview: S`Deux graphiques peuvent tous deux monter et pourtant avoir l'air différents : l'un se courbe vers le haut comme une tasse, l'autre vers le bas comme un chapeau. Cette courbure est la <strong>concavité</strong>. Là où \(f''(x)\gt0\), les pentes \(f'\) augmentent et le graphique est <strong>concave vers le haut</strong> — il se trouve au-dessus de ses tangentes. Là où \(f''(x)\lt0\), le graphique est <strong>concave vers le bas</strong> et se trouve sous ses tangentes. Un point où la concavité change est un <strong>point d'inflexion</strong>. La concavité donne aussi une façon rapide de classer les points critiques : le <strong>test de la dérivée seconde</strong>.`,
    goals: [
      "déterminer les intervalles de concavité à partir du signe de f″;",
      "trouver les points d'inflexion;",
      "classer les points critiques à l'aide du test de la dérivée seconde;",
      "reconnaître quand le test de la dérivée seconde ne permet pas de conclure;",
      "interpréter les points d'inflexion en contexte.",
    ],
    curriculum: "B1.4 (déterminer, à l'aide de la dérivée seconde, les intervalles de concavité et les points d'inflexion; classer les points critiques à l'aide du test de la dérivée seconde)",
    prior: [
      [S`Trouve \(f''(x)\) pour \(f(x)=x^3-6x^2\).`, S`\(6x-12\).`],
      [S`Où \(6x-12\) est-il positif?`, S`Pour \(x\gt2\).`],
      [S`Classe le point critique de \(x^2\) en 0.`, S`Un minimum.`],
    ],
    words: [
      ["Concave vers le haut", "\\(f''\\gt0\\) : les pentes augmentent; le graphique est au-dessus de ses tangentes", "une tasse"],
      ["Concave vers le bas", "\\(f''\\lt0\\) : les pentes diminuent; le graphique est sous ses tangentes", "un chapeau"],
      ["Point d'inflexion", "un point du graphique où la concavité change", ""],
      ["Test de la dérivée seconde", "\\(f'(c)=0\\) : \\(f''(c)\\gt0\\) min, \\(f''(c)\\lt0\\) max", ""],
    ],
  }),

  section("📌 Lire la dérivée seconde", S`
  ${table(["Signe de f″", "Pentes f′", "Forme", "En un point critique"], [
    ["\\(f''\\gt0\\)", "croissantes", "concave vers le haut ∪", "minimum relatif"],
    ["\\(f''\\lt0\\)", "décroissantes", "concave vers le bas ∩", "maximum relatif"],
    ["\\(f''=0\\)", "—", "inflexion possible", "le test ne permet pas de conclure"],
  ])}
  ${plane({ view: { xmin: -1.5, xmax: 5.5, ymin: -30, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 5, a: -1.5, b: 2, color: "amber" }, { f: (x) => x ** 3 - 6 * x * x + 5, a: 2, b: 5.5, color: "blue" }], points: [{ x: 2, y: -11, label: "inflexion (2, −11)", color: "violet" }, { x: 0, y: 5, label: "max (0, 5)", color: "red" }, { x: 4, y: -27, label: "min (4, −27)", color: "blue" }], step: { x: 1, y: 5 } }, "f(x) = x³ − 6x² + 5 : concave vers le bas (ambre) pour x < 2, concave vers le haut (bleu) pour x > 2.")}
  ${keyIdea(S`Concavité : \(f''\gt0\) sur un intervalle ⇒ concave vers le haut; \(f''\lt0\) ⇒ concave vers le bas. Les points d'inflexion se trouvent là où \(f''\) change de signe (habituellement là où \(f''=0\)). Test de la dérivée seconde : si \(f'(c)=0\) et \(f''(c)\gt0\), \(f\) a un minimum relatif en \(c\); si \(f''(c)\lt0\), un maximum relatif; si \(f''(c)=0\), utilise le test de la dérivée première.`)}`),

  section("📌 Explore", S`<p>Fais glisser le point le long de la courbe. Là où la courbe est bleue (concave vers le haut), elle est au-dessus de la tangente verte; là où elle est ambre (concave vers le bas), elle est en dessous. Observe la tangente « traverser » la courbe exactement aux points d'inflexion violets.</p>`),

  widget("concavityLab", { init: { fn: "quartic", x: 1 } }),

  section("📌 Points d'inflexion et test de la dérivée seconde", S`
  <p>Pour trouver les points d'inflexion, résous \(f''(x)=0\), puis vérifie que \(f''\) change vraiment de signe à cet endroit. Pour le test de la dérivée seconde, évalue \(f''\) en chaque nombre critique.</p>
  ${watchOut([
    "f″(c) = 0 ne garantit pas un point d'inflexion : f(x) = x⁴ est concave vers le haut des deux côtés de 0.",
    "Un point d'inflexion est un point (x, y) du graphique : donne les deux coordonnées.",
    "La concavité dépend de f″, pas de f′ : un graphique décroissant peut être concave vers le haut.",
    "Si f″(c) = 0 en un nombre critique, le test de la dérivée seconde ne permet pas de conclure — reviens au test de la dérivée première.",
    "Concave vers le haut ne veut pas dire croissante.",
  ])}`),

  examples([
    ["Concavité d'une fonction cubique", S`Trouve les intervalles de concavité et le point d'inflexion de \(f(x)=x^3-6x^2+5\).`,
      [S`<b>Règle.</b> \(f\) est concave vers le haut (tasse ∪) là où \(f''(x)\gt0\) et concave vers le bas (chapeau ∩) là où \(f''(x)\lt0\). Un point d'inflexion est un point du graphique où la concavité change.`,
        S`<b>Deux dérivées.</b> \(f'(x)=3x^2-12x\) et \(f''(x)=6x-12=6(x-2)\).`,
        S`<b>Où \(f''\) peut changer de signe.</b> \(f''(x)=0\) seulement en \(x=2\).`,
        S`<b>Tableau de concavité.</b> ${chart({ kind: "conc", cuts: [[2, "2"]], d: ["f''(x)", (x) => 6 * x - 12] })}`,
        S`<b>Le point.</b> \(f(2)=8-24+5=-11\), donc le point d'inflexion est \((2,-11)\).`,
        S`<b>Vérifie avec les pentes.</b> ${tv(["\\(x\\)", "0", "1", "2", "3", "4"], ["pente \\(f'(x)\\)", "0", "\\(-9\\)", "\\(-12\\)", "\\(-9\\)", "0"])} Les pentes diminuent jusqu'à \(x=2\) (concave vers le bas), puis augmentent (concave vers le haut) ✓`],
      S`concave vers le bas sur \((-\infty,2)\), concave vers le haut sur \((2,\infty)\); point d'inflexion \((2,-11)\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -30, ymax: 12 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 5, a: -2, b: 2, color: "amber" }, { f: (x) => x ** 3 - 6 * x * x + 5, a: 2, b: 6, color: "blue" }], points: [{ x: 2, y: -11, label: "inflexion (2, −11)", color: "violet" }], step: { x: 1, y: 5 } }, "ambre : concave vers le bas (f″ < 0); bleu : concave vers le haut (f″ > 0)")],
    ["Deux points d'inflexion", S`Trouve les intervalles de concavité et les points d'inflexion de \(f(x)=x^4-4x^3\).`,
      [S`<b>Plan.</b> Trouve \(f''\), factorise-la et dresse un tableau de concavité. Chaque changement de signe de \(f''\) donne un point d'inflexion.`,
        S`<b>Deux dérivées.</b> \(f'(x)=4x^3-12x^2\), donc \(f''(x)=12x^2-24x=12x(x-2)\).`,
        S`<b>Zéros de \(f''\).</b> \(x=0\) et \(x=2\).`,
        S`<b>Tableau de concavité.</b> ${chart({ kind: "conc", cuts: [[0, "0"], [2, "2"]], factors: [["x", (x) => x], ["x-2", (x) => x - 2]], d: ["f''(x)", (x) => 12 * x * x - 24 * x] })}`,
        S`<b>Les points.</b> \(f(0)=0\) et \(f(2)=16-32=-16\) : points d'inflexion \((0,0)\) et \((2,-16)\).`,
        S`<b>Un détail de plus en 0.</b> \(f'(0)=0\) aussi, donc la tangente en \((0,0)\) est horizontale. Comme la concavité y change, c'est un point d'inflexion à tangente horizontale, et non un max ou un min. Le seul extremum se trouve là où \(f'(x)=4x^2(x-3)\) change de signe : un minimum en \((3,-27)\) ✓`],
      S`concave vers le haut sur \((-\infty,0)\) et \((2,\infty)\), vers le bas sur \((0,2)\); points d'inflexion \((0,0)\) et \((2,-16)\)`,
      plane({ view: { xmin: -1.5, xmax: 4.5, ymin: -30, ymax: 10 }, curves: [{ f: (x) => x ** 4 - 4 * x ** 3, a: -1.5, b: 0, color: "blue" }, { f: (x) => x ** 4 - 4 * x ** 3, a: 0, b: 2, color: "amber" }, { f: (x) => x ** 4 - 4 * x ** 3, a: 2, b: 4.5, color: "blue" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "violet" }, { x: 2, y: -16, label: "(2, −16)", color: "violet" }, { x: 3, y: -27, label: "min (3, −27)", color: "red" }], step: { x: 1, y: 5 } }, "bleu : concave vers le haut; ambre : concave vers le bas")],
    ["Le test de la dérivée seconde", S`Classe les points critiques de \(f(x)=2x^3+3x^2-36x\).`,
      [S`<b>Règle : le test de la dérivée seconde.</b> Si \(f'(c)=0\) et \(f''(c)\gt0\), le graphique forme une tasse en \(c\) : minimum relatif. Si \(f'(c)=0\) et \(f''(c)\lt0\), il forme un chapeau : maximum relatif. Si \(f''(c)=0\), le test ne permet pas de conclure.`,
        S`<b>Nombres critiques.</b> \(f'(x)=6x^2+6x-36=6(x^2+x-6)=6(x+3)(x-2)\) : \(x=-3\) et \(x=2\).`,
        S`<b>Dérivée seconde.</b> \(f''(x)=12x+6\).`,
        S`<b>Teste chaque nombre critique.</b> ${tv(["\\(c\\)", "\\(f''(c)\\)", "forme", "type", "\\(f(c)\\)"], ["\\(-3\\)", "\\(-36+6=-30\\lt0\\)", "∩", "max. relatif", "\\(-54+27+108=81\\)"], ["\\(2\\)", "\\(24+6=30\\gt0\\)", "∪", "min. relatif", "\\(16+12-72=-44\\)"])}`,
        S`<b>Vérifie avec le test de la dérivée première.</b> ${chart({ cuts: [[-3, "-3"], [2, "2"]], d: ["f'(x)", (x) => 6 * x * x + 6 * x - 36] })} Les deux tests concordent ✓`],
      S`maximum relatif \((-3,81)\); minimum relatif \((2,-44)\)`,
      plane({ view: { xmin: -6, xmax: 5, ymin: -60, ymax: 100 }, curves: [{ f: (x) => 2 * x ** 3 + 3 * x * x - 36 * x, color: "violet" }], points: [{ x: -3, y: 81, label: "max (−3, 81)", color: "red" }, { x: 2, y: -44, label: "min (2, −44)", color: "blue" }], step: { x: 1, y: 20 } })],
    ["Quand le test échoue", S`Pour \(f(x)=x^4\) et \(g(x)=x^3\), montre que le test de la dérivée seconde ne permet pas de conclure en 0, et classe chaque point.`,
      [S`<b>Essaie le test de la dérivée seconde.</b> \(f'(x)=4x^3\), \(f''(x)=12x^2\) : \(f'(0)=0\) et \(f''(0)=0\). \(g'(x)=3x^2\), \(g''(x)=6x\) : \(g'(0)=0\) et \(g''(0)=0\). Avec \(f''(0)=0\), le test ne permet pas de conclure dans les deux cas.`,
        S`<b>Reviens au test de la dérivée première pour \(f\).</b> ${chart({ cuts: [[0, "0"]], d: ["f'(x)", (x) => 4 * x ** 3] })}`,
        S`<b>Test de la dérivée première pour \(g\).</b> ${chart({ cuts: [[0, "0"]], d: ["g'(x)", (x) => 3 * x * x], f: "g" })}`,
        S`<b>Concavité de \(g\).</b> \(g''(x)=6x\) est négative pour \(x\lt0\) et positive pour \(x\gt0\), donc \((0,0)\) est un point d'inflexion de \(g\) à tangente horizontale.`,
        S`<b>Vérifie.</b> \(x^4\ge0\) pour tout \(x\), donc 0 est la plus petite valeur de \(f\) ✓. \(g(-1)=-1\lt0\lt g(1)=1\), donc \(g\) monte directement à travers 0 ✓`],
      S`\(x^4\) a un minimum en 0; \(x^3\) n'a ni l'un ni l'autre (un point d'inflexion)`,
      plane({ view: { xmin: -1.6, xmax: 1.6, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x ** 4, color: "violet" }, { f: (x) => x ** 3, color: "blue" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }], step: { x: 0.5, y: 0.5 } }, "violet : f(x) = x⁴ (minimum); bleu : g(x) = x³ (inflexion)")],
    ["Rendement décroissant", S`Les ventes totales après \(t\) mois de publicité sont \(S(t)=-t^3+12t^2+100\) (unités), \(0\le t\le8\). Quand les ventes augmentent-elles le plus rapidement?`,
      [S`<b>Traduis.</b> Le taux de croissance des ventes est \(S'(t)\). « Augmenter le plus rapidement » signifie que \(S'(t)\) est maximal. On maximise donc \(S'\), c'est-à-dire qu'on cherche où sa dérivée \(S''\) passe de \(+\) à \(-\).`,
        S`<b>Dérivées.</b> \(S'(t)=-3t^2+24t\) et \(S''(t)=-6t+24\). \(S''(t)=0\) en \(t=4\).`,
        S`<b>Tableau de concavité.</b> ${chart({ kind: "conc", v: "t", f: "S", from: [0, "0"], to: [8, "8"], cuts: [[4, "4"]], d: ["S''(t)", (t) => -6 * t + 24] })}`,
        S`<b>Interprète.</b> Avant \(t=4\), le taux de croissance augmente (concave vers le haut); après, il diminue (concave vers le bas). Le point d'inflexion \((4,S(4))=(4,228)\) est l'endroit où les ventes augmentent le plus rapidement, à \(S'(4)=48\) unités par mois.`,
        S`<b>Vérifie avec une table des taux.</b> ${tv(["\\(t\\)", "0", "2", "4", "6", "8"], ["\\(S'(t)\\)", "0", "36", "48", "36", "0"])} Le taux atteint son sommet en \(t=4\) ✓`],
      S`en \(t=4\) mois (48 unités par mois); ensuite, chaque mois ajoute moins — c'est le rendement décroissant`,
      plane({ view: { xmin: 0, xmax: 8.5, ymin: 80, ymax: 400 }, curves: [{ f: (t) => -(t ** 3) + 12 * t * t + 100, a: 0, b: 8, color: "violet" }, { f: (t) => 228 + 48 * (t - 4), color: "green", a: 2, b: 6 }], points: [{ x: 4, y: 228, label: "inflexion (4, 228)", color: "red" }], step: { x: 1, y: 40 }, xlabel: "t", ylabel: "S" }, "Vert : la tangente au point d'inflexion, le point le plus raide de la courbe (pente 48).")],
  ]),

  practice([
    q("inflexion", S`En quelle valeur de \(x\) la fonction \(f(x)=x^3-9x^2\) a-t-elle un point d'inflexion?`, num(3),
      "f″(x) = 6x − 18.", [S`\(6x-18=0\).`], S`\(3\)`),
    q("dérivée seconde", S`Pour \(f(x)=x^4+2x^3\), trouve \(f''(1)\).`, num(24),
      "f″(x) = 12x² + 12x.", [S`\(12+12\).`], S`\(24\)`),
    q("concavité", S`Où \(f(x)=-x^2+5x\) est-elle concave vers le bas?`, choice(["partout", "pour x < 2.5 seulement", "pour x > 2.5 seulement", "nulle part"], 0),
      "f″ est constante.", [S`\(f''(x)=-2\lt0\).`], "partout"),
    q("test", S`Pour \(f(x)=x^3-108x\), le test de la dérivée seconde en \(x=6\) montre :`, choice(["un minimum relatif", "un maximum relatif", "un point d'inflexion", "aucune conclusion"], 0),
      "f″(x) = 6x.", [S`\(f'(6)=0\), \(f''(6)=36\gt0\).`], "un minimum relatif"),
    q("inflexion", S`En quelle valeur positive de \(x\) la fonction \(f(x)=x^4-24x^2\) a-t-elle un point d'inflexion?`, num(2),
      "f″(x) = 12x² − 48.", [S`\(x^2=4\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Concevoir un point d'inflexion", S`Trouve \(a\) et \(b\) pour que \(f(x)=ax^3+bx^2\) ait un point d'inflexion en \((1,4)\).`,
      [S`\(f''(x)=6ax+2b\); \(f''(1)=0\Rightarrow b=-3a\).`, S`\(f(1)=a+b=4\Rightarrow a-3a=4\Rightarrow a=-2\), \(b=6\).`],
      S`\(f(x)=-2x^3+6x^2\)`,
      plane({ view: { xmin: -1, xmax: 3.2, ymin: -3, ymax: 10 }, curves: [{ f: (x) => -2 * x ** 3 + 6 * x * x, a: -1, b: 1, color: "blue" }, { f: (x) => -2 * x ** 3 + 6 * x * x, a: 1, b: 3.2, color: "amber" }], points: [{ x: 1, y: 4, label: "inflexion (1, 4)", color: "violet" }, { x: 2, y: 8, label: "max (2, 8)", color: "red" }, { x: 0, y: 0, label: "min (0, 0)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Chaque fonction cubique a un point d'inflexion", S`Montre que \(f(x)=ax^3+bx^2+cx+d\) (\(a\ne0\)) a exactement un point d'inflexion, en \(x=-\frac{b}{3a}\). Trouve-le pour \(f(x)=x^3+6x^2+9x+1\).`,
      [S`\(f''(x)=6ax+2b\) est linéaire avec un seul zéro, \(x=-\frac{b}{3a}\), et elle y change de signe.`, S`Pour l'exemple, \(x=-\frac{6}{3}=-2\); \(f(-2)=-8+24-18+1=-1\).`],
      S`point d'inflexion \((-2,-1)\)`,
      plane({ view: { xmin: -4.5, xmax: 0.8, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 3 + 6 * x * x + 9 * x + 1, color: "violet" }], points: [{ x: -2, y: -1, label: "inflexion (−2, −1)", color: "violet" }, { x: -3, y: 1, label: "max (−3, 1)", color: "red" }, { x: -1, y: -3, label: "min (−1, −3)", color: "blue" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("difficile", S`Pour \(f(x)=x+\dfrac2x\), trouve \(f''(1)\).`, num(4),
      "f′ = 1 − 2x⁻², f″ = 4x⁻³.", [S`\(4\).`], S`\(4\)`),
    q("difficile", S`Combien de points d'inflexion \(f(x)=x^4-6x^3+12x^2\) a-t-elle?`, num(2),
      "f″(x) = 12(x − 1)(x − 2).", [S`Changements de signe en 1 et en 2.`], S`\(2\)`),
    q("difficile", S`\(f(x)=x^3+kx^2+1\) a un point d'inflexion en \(x=2\). Trouve \(k\).`, num(-6),
      "f″(x) = 6x + 2k.", [S`\(12+2k=0\).`], S`\(-6\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi f″ > 0 signifie-t-il concave vers le haut?", "f″ > 0 signifie que les pentes f′ augmentent; la tangente tourne donc sans cesse vers le haut — la courbe se plie comme une tasse."],
      ["Chaque zéro de f″ est-il un point d'inflexion?", "Non. f″ doit changer de signe. Pour x⁴, f″(0) = 0, mais f″ ≥ 0 des deux côtés."],
      ["Quand dois-je utiliser le test de la dérivée seconde?", "Quand f″ est facile à calculer et non nulle au nombre critique; sinon, utilise le test de la dérivée première."],
      ["Qu'est-ce que le point de rendement décroissant?", "Le point d'inflexion d'une courbe de croissance : le taux de croissance y est maximal, puis il commence à diminuer."],
      ["Un graphique peut-il être décroissant et concave vers le haut?", "Oui : 1/x pour x > 0 descend tout en se courbant vers le haut."],
    ],
    summary: [
      "f″ > 0 : concave vers le haut; f″ < 0 : concave vers le bas.",
      "Inflexion : f″ change de signe.",
      "f′(c) = 0 et f″(c) > 0 : min; f″(c) < 0 : max.",
      "f″(c) = 0 : aucune conclusion.",
    ],
    next: "La section 3.4 esquisse des fonctions rationnelles simples.",
  }),
];
