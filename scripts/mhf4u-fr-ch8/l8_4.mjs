// MHF4U-FR 8.4 — Inéquations de fonctions combinées (miroir français de ../mhf4u-ch8/l8_4.mjs).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "8.4 Inéquations de fonctions combinées";
export const ID = lessonId(8, 4);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Inéquations de fonctions combinées",
    overview: S`Quand une fonction est-elle plus grande qu'une autre? Quand un placement exponentiel dépasse-t-il un placement linéaire, ou quand \(2^x\) est-il plus grand que \(x^2\)? Toute question de ce genre, \(f(x)>g(x)\), revient à se demander où la différence \(f(x)-g(x)\) est positive. Les graphiques se croisent là où la différence est nulle; entre deux points de croisement, le signe ne peut pas changer. Dans cette leçon, tu trouves les points de croisement, algébriquement quand c'est possible et à l'aide d'un graphique sinon, et tu vérifies chaque intervalle.`,
    goals: [
      "réécrire \\(f(x)>g(x)\\) sous la forme \\((f-g)(x)>0\\);",
      "trouver les points de croisement algébriquement ou à partir d'un graphique;",
      "vérifier des intervalles pour décider où une inéquation est vraie;",
      "résoudre des inéquations comportant des fonctions polynomiales, exponentielles, trigonométriques et rationnelles;",
      "interpréter la solution en contexte.",
    ],
    curriculum: "D3.3 (comparer les caractéristiques de fonctions et résoudre des problèmes en modélisant et en raisonnant à l'aide de fonctions, y compris des problèmes dont les solutions ne peuvent pas être obtenues par les techniques algébriques habituelles)",
    prior: [
      [S`Résous \(x^2-x-6=0\).`, S`\(x=3\) ou \(x=-2\).`],
      [S`Où \((x-3)(x+2)\) est-elle négative?`, S`\(-2<x<3\).`],
      [S`Résous \(\sin x=\cos x\) sur \(0\le x<2\pi\).`, S`\(\frac\pi4,\ \frac{5\pi}4\).`],
    ],
    words: [
      ["Point de croisement", "un \\(x\\) pour lequel \\(f(x)=g(x)\\)", "\\(x^2=x+6\\) à \\(x=3\\)"],
      ["Valeur test", "un \\(x\\) choisi dans un intervalle pour trouver le signe sur cet intervalle", "\\(x=0\\) dans \\(-2<x<3\\)"],
      ["Notation d'intervalle", "un ensemble de valeurs de \\(x\\) écrit avec des crochets ou des parenthèses", "\\((-2,3)\\)"],
      ["Stricte / non stricte", "\\(>\\) exclut les points de croisement; \\(\\ge\\) les inclut", "\\(x\\le3\\) inclut \\(3\\)"],
    ],
  }),

  section("📌 La méthode", S`
  ${table(["Étape", "Ce qu'il faut faire"], [
    ["1", "Réécris \\(f(x)>g(x)\\) sous la forme \\(h(x)=f(x)-g(x)>0\\)."],
    ["2", "Trouve les zéros de \\(h\\) (les points de croisement) — factorise, ou lis-les sur un graphique."],
    ["3", "Place-les sur une droite numérique, ainsi que tout \\(x\\) où \\(h\\) n'est pas définie."],
    ["4", "Vérifie une valeur dans chaque intervalle, ou lis quel graphique est au-dessus."],
    ["5", "Écris les intervalles qui conviennent; n'inclus les points de croisement que pour \\(\\ge\\) ou \\(\\le\\)."],
  ])}
  ${keyIdea(S`\[f(x)>g(x)\iff f(x)-g(x)>0.\] Sur un graphique : la solution est formée de tous les \(x\) où le graphique de \(f\) est <b>au-dessus</b> du graphique de \(g\).`)}`),

  widget("inequalityGraph", { init: { cs: [1, 0, -4, 0], m: 1, b: 0, op: ">" } }),

  section("📌 Quand l'algèbre ne permet pas de trouver les points de croisement", S`
  <p>\(2^x=x^2\) ne peut pas être résolue avec les logarithmes (le \(x\) est à la fois dans un exposant et dans une base). Un graphique ou une table donne les points de croisement \(x\approx-0.77\), \(x=2\) et \(x=4\). Entre eux, le graphique qui est au-dessus indique le signe.</p>
  ${plane({ view: { xmin: -2, xmax: 5.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "blue" }], points: [{ x: -0.767, y: 0.588, label: "(−0.77, 0.59)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }, { x: 4, y: 16, label: "(4, 16)", color: "amber" }], step: { x: 1, y: 2 } }, "En violet y = 2ˣ, en bleu y = x² : 2ˣ est au-dessus pour −0.77 < x < 2 et pour x > 4.")}
  ${watchOut([
    "Ne divise pas et ne multiplie pas les deux membres par une expression qui pourrait être négative (ou nulle).",
    "Ne multiplie jamais les deux membres d'une inéquation rationnelle par le dénominateur : soustrais et utilise une seule fraction.",
    "Un point où les graphiques se touchent sans se traverser ne change pas le signe.",
    "Pour ≥ et ≤, inclus les points de croisement, mais jamais un x où une fonction n'est pas définie.",
    "Donne la solution sur tout l'intervalle demandé, p. ex. 0 ≤ x ≤ 2π.",
  ])}`),

  examples([
    ["Une parabole au-dessus d'une droite", S`Résous \(x^2>x+6\).`,
      [S`<b>Règle.</b> \(f(x)>g(x)\) équivaut à \(f(x)-g(x)>0\). La différence ne peut changer de signe que là où elle est nulle; trouve donc d'abord les zéros.`,
        S`<b>Différence.</b> \(x^2-x-6>0\).`,
        S`<b>Points de croisement.</b> \(x^2-x-6=(x-3)(x+2)=0\), donc \(x=-2\) et \(x=3\). Ils séparent la droite numérique en trois intervalles.`,
        S`<b>Vérifie une valeur dans chaque intervalle.</b> \(x=-3\) : \(9+3-6=6>0\) ✓. \(x=0\) : \(-6<0\), donc ça ne fonctionne pas. \(x=4\) : \(16-4-6=6>0\) ✓`,
        S`<b>Extrémités.</b> L'inéquation est stricte; \(x=-2\) et \(x=3\) ne sont donc pas inclus.`,
        S`<b>Vérifie sur le graphique.</b> La parabole est au-dessus de la droite à gauche de \((-2,\,4)\) et à droite de \((3,\,9)\) ✓`],
      S`\(x<-2\) ou \(x>3\)`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -4, ymax: 16 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 6, color: "blue" }], points: [{ x: -2, y: 4, label: "(−2, 4)", color: "amber" }, { x: 3, y: 9, label: "(3, 9)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Une exponentielle contre une puissance", S`Résous \(2^x>x^2\).`,
      [S`<b>Pourquoi un graphique?</b> Dans \(2^x=x^2\), l'inconnue est à la fois un exposant et une base. Prendre le logarithme donne \(x\log2=2\log|x|\), où \(x\) apparaît encore à deux endroits; aucune méthode algébrique ne permet de l'isoler.`,
        S`<b>Points de croisement.</b> On peut en vérifier deux à la main : \(x=2\) donne \(4=4\), et \(x=4\) donne \(16=16\). Le graphique en montre un troisième près de \(x\approx-0.77\).`,
        S`<b>Vérifie chaque intervalle.</b> \(x=-2\) : \(0.25<4\), donc ça ne fonctionne pas. \(x=0\) : \(1>0\) ✓. \(x=3\) : \(8<9\), donc ça ne fonctionne pas. \(x=5\) : \(32>25\) ✓`,
        S`<b>Réponse.</b> \(-0.77<x<2\) ou \(x>4\) (approximativement à l'extrémité gauche).`,
        S`<b>Pourquoi pas d'autres points de croisement?</b> Au-delà de \(x=4\), l'exponentielle double à chaque pas de \(1\), tandis que \(x^2\) croît d'un facteur plus petit; elle reste donc en avance.`],
      S`\(-0.77<x<2\) ou \(x>4\)`,
      plane({ view: { xmin: -2, xmax: 5.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "blue" }], points: [{ x: -0.767, y: 0.588, label: "(−0.77, 0.59)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }, { x: 4, y: 16, label: "(4, 16)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Une cubique contre une droite", S`Résous \(x^3-4x\le x\).`,
      [S`<b>Mets tout du même côté.</b> Soustrais \(x\) : \(x^3-5x\le0\). Ne divise pas par \(x\), car son signe est inconnu et une solution pourrait être perdue.`,
        S`<b>Factorise.</b> \(x(x^2-5)\le0\).`,
        S`<b>Zéros.</b> \(x=0\) ou \(x^2=5\), donc \(x=0,\ \pm\sqrt5\approx\pm2.24\).`,
        S`<b>Vérifie chaque intervalle.</b> \(x=-3\) : \(-3(4)=-12\le0\) ✓. \(x=-1\) : \(-1(-4)=4\), donc ça ne fonctionne pas. \(x=1\) : \(1(-4)=-4\le0\) ✓. \(x=3\) : \(3(4)=12\), donc ça ne fonctionne pas.`,
        S`<b>Extrémités.</b> À cause du \(\le\), les zéros sont inclus. La réponse est \(x\le-\sqrt5\) ou \(0\le x\le\sqrt5\).`,
        S`<b>Vérifie sur le graphique.</b> La cubique est sur la droite \(y=x\) ou en dessous exactement sur ces intervalles ✓`],
      S`\(x\le-\sqrt5\) ou \(0\le x\le\sqrt5\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -10, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }], lines: [{ m: 1, b: 0, color: "blue" }], points: [{ x: -Math.sqrt(5), y: -Math.sqrt(5), label: "(−2.24, −2.24)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: Math.sqrt(5), y: Math.sqrt(5), label: "(2.24, 2.24)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Deux fonctions trigonométriques", S`Résous \(\sin x>\cos x\) pour \(0\le x\le2\pi\).`,
      [S`<b>Points de croisement.</b> Résous \(\sin x=\cos x\). Comme \(\cos x\) ne vaut pas \(0\) en une solution (sinon \(\sin x\) vaudrait aussi \(0\), ce qui est impossible), divise par \(\cos x\) : \(\tan x=1\).`,
        S`<b>Angles.</b> \(\tan x=1\) dans les quadrants I et III : \(x=\frac\pi4\) et \(x=\frac{5\pi}4\).`,
        S`<b>Vérifie chaque intervalle.</b> \(x=0\) : \(0>1\) ne fonctionne pas. \(x=\frac\pi2\) : \(1>0\) ✓. \(x=\frac{3\pi}2\) : \(-1>0\) ne fonctionne pas.`,
        S`<b>Réponse.</b> \(\frac\pi4<x<\frac{5\pi}4\), sans les extrémités puisque l'inéquation est stricte.`,
        S`<b>Vérifie sur le graphique.</b> La courbe sinus violette est au-dessus de la courbe cosinus bleue entre les deux points de croisement marqués ✓`],
      S`\(\frac\pi4<x<\frac{5\pi}4\)`,
      plane({ view: { xmin: -0.2, xmax: 6.5, ymin: -1.3, ymax: 1.3 }, curves: [{ f: Math.sin, a: 0, b: 2 * Math.PI, color: "violet" }, { f: Math.cos, a: 0, b: 2 * Math.PI, color: "blue" }], points: [{ x: Math.PI / 4, y: 0.707, label: "(π/4, 0.71)", color: "amber" }, { x: 5 * Math.PI / 4, y: -0.707, label: "(5π/4, −0.71)", color: "amber" }], step: { x: 0.5, y: 0.5 } })],
    ["Croissance linéaire contre croissance exponentielle", S`La ville P compte \(5000+300t\) habitants et la ville Q en compte \(4000(1.06)^t\), où \(t\) est en années. Quand Q est-elle plus peuplée?`,
      [S`<b>Inéquation.</b> \(4000(1.06)^t>5000+300t\).`,
        S`<b>Pourquoi une table?</b> \(t\) est dans un exposant d'un côté et à l'extérieur de l'autre; les logarithmes ne peuvent donc pas l'isoler.`,
        S`<b>Point de départ.</b> À \(t=0\), Q compte \(4000\) habitants et P en compte \(5000\); P part donc en avance.`,
        S`<b>Table.</b> \(t=14\) : Q \(\approx9044\), P \(=9200\). \(t=16\) : Q \(\approx10\,161\), P \(=9800\). Le croisement est entre les deux, et en raffinant on obtient \(t\approx14.66\).`,
        S`<b>Réponse.</b> Q est plus peuplée pour \(t>14.66\), donc à chaque année complète à partir de l'année \(15\).`,
        S`<b>Pourquoi elle le reste.</b> L'augmentation annuelle de Q est \(6\%\) d'une population qui grandit, tandis que celle de P reste à \(300\). Le graphique ne montre aucun croisement plus tard.`],
      S`\(t>14.66\) (à partir de l'année 15)`,
      plane({ view: { xmin: 0, xmax: 25, ymin: 3000, ymax: 17000 }, curves: [{ f: (t) => 4000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 300, b: 5000, color: "blue" }], points: [{ x: 14.66, y: 9398, label: "(14.66, 9398)", color: "amber" }], step: { x: 5, y: 2000 } })],
  ]),

  practice([
    q("quadratique", S`Résous \(x^2-4x<5\).`, choice(["−1 < x < 5", "x < −1 ou x > 5", "−5 < x < 1", "x < 5"], 0), "(x − 5)(x + 1) < 0.", [S`Négative entre les zéros \(-1\) et \(5\).`], S`\(-1<x<5\)`),
    q("compter", S`Combien d'entiers vérifient \(x^2\le9\)?`, num(7), "−3 ≤ x ≤ 3.", [S`\(-3,-2,\dots,3\).`], S`\(7\)`),
    q("exponentielle", S`\(2^x>8\) pour \(x>a\). Détermine \(a\).`, num(3), "2ˣ est croissante.", [S`\(2^3=8\).`], S`\(3\)`),
    q("trigonométrie", S`Résous \(\sin x\ge\frac12\) pour \(0\le x\le2\pi\).`, choice(["π/6 ≤ x ≤ 5π/6", "0 ≤ x ≤ π/6", "π/3 ≤ x ≤ 2π/3", "5π/6 ≤ x ≤ 2π"], 0), "sin x = 1/2 à π/6 et à 5π/6.", [S`La courbe sinus est au-dessus de \(\frac12\) entre ces deux valeurs.`], S`\(\frac\pi6\le x\le\frac{5\pi}6\)`),
    q("comparer", S`Pour \(x\ge1\), quel est le plus petit entier tel que \(3^x>100x\)?`, num(6), "Construis une table.", [S`\(3^5=243<500\); \(3^6=729>600\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Une inéquation rationnelle", S`Résous \(\dfrac{x-1}{x+2}\ge1\).`,
      [S`<b>Ne multiplie pas par \(x+2\)</b> (son signe est inconnu). Soustrais plutôt : \(\dfrac{x-1}{x+2}-1\ge0\).`,
        S`<b>Une seule fraction :</b> \(\dfrac{x-1-(x+2)}{x+2}=\dfrac{-3}{x+2}\ge0\).`,
        S`<b>Signe :</b> le numérateur est toujours négatif; la fraction est donc positive exactement quand \(x+2<0\). Elle n'est jamais nulle, et \(x=-2\) est exclu.`,
        S`<b>Réponse :</b> \(x<-2\). <b>Vérifie :</b> \(x=-3\) : \(\frac{-4}{-1}=4\ge1\) ✓; \(x=0\) : \(-\frac12\ge1\) ✗`],
      S`\(x<-2\)`,
      plane({ view: { xmin: -8, xmax: 5, ymin: -5, ymax: 7 }, curves: [{ f: (x) => (x - 1) / (x + 2), b: -2.05, color: "violet" }, { f: (x) => (x - 1) / (x + 2), a: -1.95, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 1 } })],
    ["Croissante contre décroissante", S`Résous \(2^x\le3-x\).`,
      [S`<b>Repère un point de croisement :</b> à \(x=1\), \(2^1=2\) et \(3-1=2\).`,
        S`<b>Un seul point de croisement :</b> \(2^x\) est croissante et \(3-x\) est décroissante; elles peuvent donc se rencontrer au plus une fois.`,
        S`<b>De quel côté :</b> à \(x=0\), \(1\le3\) ✓; à \(x=2\), \(4\le1\) ✗.`,
        S`<b>Réponse :</b> \(x\le1\).`],
      S`\(x\le1\)`],
  ], [
    q("difficile", S`Résous \(\dfrac{x+3}{x-1}<2\).`, choice(["x < 1 ou x > 5", "1 < x < 5", "x < 5", "x > 1"], 0), "Soustrais 2 : (5 − x)/(x − 1) < 0.", [S`Négative à l'extérieur de \(1<x<5\).`], S`\(x<1\) ou \(x>5\)`),
    q("difficile", S`Combien d'entiers vérifient \(x^4<10x^2\)?`, num(6), "x²(x² − 10) < 0, x ≠ 0.", [S`\(0<x^2<10\) : \(\pm1,\pm2,\pm3\).`], S`\(6\)`),
    q("difficile", S`\(2^x<x+2\) sur un intervalle \((a,b)\). Détermine \(b\).`, num(2), "2² = 4 = 2 + 2.", [S`Points de croisement près de \(-1.69\) et à \(2\); entre les deux, la droite est au-dessus.`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment commencer n'importe quelle inéquation f(x) > g(x)?", "Réécris-la sous la forme f(x) − g(x) > 0."],
      ["Que faire si je ne peux pas résoudre f(x) = g(x)?", "Utilise un graphique ou une table pour trouver les points de croisement."],
      ["Pourquoi vérifier une seule valeur par intervalle?", "Entre deux points de croisement, le signe de f − g ne peut pas changer."],
      ["Pourquoi ne pas multiplier par le dénominateur?", "Il pourrait être négatif, ce qui inverserait le sens de l'inéquation."],
      ["Quand inclure les extrémités?", "Pour ≥ ou ≤, aux points de croisement où les deux fonctions sont définies."],
    ],
    summary: [
      "f > g ⇔ f − g > 0.",
      "Les points de croisement séparent la droite en intervalles.",
      "Vérifie chaque intervalle, ou lis quel graphique est au-dessus.",
      "Exclus les x où une fonction n'est pas définie.",
    ],
    next: "En 8.5, tu modélises des situations réelles à l'aide de fonctions combinées.",
  }),
];
