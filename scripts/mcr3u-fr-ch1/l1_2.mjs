// MCR3U-FR 1.2 — Notation fonctionnelle : évaluer, substituer des expressions, résoudre f(x) = v, lire des graphiques,
// contextes. Miroir de ../mcr3u-ch1/l1_2.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.2 Notation fonctionnelle";
export const ID = lessonId(1, 2);

export const blocks = () => [
  intro({
    icon: "🏷️",
    title: "Notation fonctionnelle",
    overview: String.raw`Écrire \(f(x)\) au lieu de \(y\) donne un nom à la fonction et montre l'entrée. \(f(3)\) signifie « la sortie lorsque l'entrée est 3 ». Dans cette leçon, tu vas évaluer des fonctions en des nombres et en des expressions, résoudre \(f(x)=v\) pour trouver l'entrée, lire des valeurs sur un graphique et utiliser la notation fonctionnelle pour répondre à des questions sur des situations réelles.`,
    goals: [
      "lire et écrire la notation fonctionnelle;",
      "évaluer f(a) pour des nombres et pour des expressions comme f(a + 1);",
      "résoudre f(x) = v algébriquement et à partir d'un graphique;",
      "combiner des valeurs comme f(4) − f(1);",
      "interpréter la notation fonctionnelle dans un contexte.",
    ],
    curriculum: "A1.2 (représenter des fonctions affines et du second degré à l'aide de la notation fonctionnelle, à partir de leurs équations, de tables de valeurs ou de graphiques, et substituer des valeurs dans des fonctions pour les évaluer)",
    prior: [
      [String.raw`Évalue \(2x^2-x\) lorsque \(x=-3\).`, String.raw`\(2(9)+3=21\).`],
      [String.raw`Développe \((a+2)^2\).`, String.raw`\(a^2+4a+4\).`],
      [String.raw`Résous \(x^2-x-6=0\).`, String.raw`\((x-3)(x+2)=0\) : \(x=3\) ou \(x=-2\).`],
    ],
    words: [
      ["Notation fonctionnelle", "\\(f(x)\\) — la sortie de \\(f\\) pour l'entrée \\(x\\)", "\\(f(x)=x^2+1\\)"],
      ["Évaluer", "remplacer x par une valeur et simplifier", "\\(f(2)=5\\)"],
      ["Argument", "ce qui se trouve entre les parenthèses", "dans \\(f(a+1)\\), c'est \\(a+1\\)"],
      ["Résoudre f(x) = v", "trouver toutes les entrées dont la sortie est v", "\\(x^2+1=10\\Rightarrow x=\\pm3\\)"],
    ],
  }),

  section("📌 Lire la notation", String.raw`
  <p>\(f(x)=x^2-4x+1\) se lit « \(f\) de \(x\) égale … ». La lettre \(f\) est le nom; \(x\) est l'entrée. Les parenthèses ne signifient <strong>pas</strong> une multiplication.</p>
  ${table(["Tu vois", "Cela signifie", "Exemple avec f(x) = x² − 4x + 1"], [
    ["\\(f(5)\\)", "la sortie lorsque l'entrée est 5", "\\(25-20+1=6\\)"],
    ["\\(f(5)=6\\)", "le point \\((5,6)\\) est sur le graphique", ""],
    ["\\(f(x)=6\\)", "quelles entrées donnent 6?", "\\(x^2-4x-5=0\\Rightarrow x=5\\text{ ou }x=-1\\)"],
    ["\\(f(2a)\\)", "remplacer chaque x par \\(2a\\)", "\\(4a^2-8a+1\\)"],
  ])}
  ${keyIdea(String.raw`\(f(\text{entrée})=\text{sortie}\). <em>Évaluer</em> va de l'entrée à la sortie; <em>résoudre</em> revient de la sortie à l'entrée, et peut donner plusieurs entrées (ou aucune).`)}`),

  section("📌 Explore", String.raw`<p>Déplace le curseur d'entrée pour évaluer \(f\) en un nombre; déplace le curseur de cible pour résoudre \(f(x)=v\). Observe qu'une entrée donne toujours une seule sortie, mais qu'une sortie peut provenir de deux entrées.</p>`),

  widget("notationLab", { init: [1, -2, -3] }),

  section("📌 Substituer une expression", String.raw`
  <p>Lorsque l'entrée est une expression, place-la entre parenthèses <em>partout</em> où \(x\) apparaît, puis simplifie.</p>
  <p>\(g(x)=3x^2-x\) : \(\ g(a-2)=3(a-2)^2-(a-2)=3(a^2-4a+4)-a+2=3a^2-13a+14\).</p>
  ${watchOut([
    "f(a + 1) n'est pas f(a) + 1. Substitue l'expression au complet.",
    "Élève la parenthèse au carré : f(−3) pour x² donne (−3)² = 9, pas −9.",
    "f(x) = 0 demande les zéros (abscisses à l'origine); f(0) est l'ordonnée à l'origine.",
    "2f(x) double la sortie; f(2x) double l'entrée — ce sont deux choses différentes.",
  ])}`),

  examples([
    ["Évaluer", S`Pour \(f(x)=3x^2-2x+5\), trouve \(f(-2)\) et \(f(0)\).`,
      [S`<b>Sens.</b> \(f(-2)\) signifie « remplace chaque \(x\) de la règle par \(-2\) ». Utilise des parenthèses pour que le signe soit élevé au carré avec le nombre.`,
        S`<b>Substitue</b> \(x=-2\) : \(f(-2)=3(-2)^2-2(-2)+5\).`,
        S`<b>Les puissances d'abord.</b> \((-2)^2=4\), donc le premier terme vaut \(3\times4=12\). Le deuxième terme vaut \(-2(-2)=+4\).`,
        S`<b>Additionne.</b> \(f(-2)=12+4+5=21\).`,
        S`<b>Substitue</b> \(x=0\) : \(f(0)=3(0)^2-2(0)+5=5\). Seule la constante reste, et c'est toujours l'ordonnée à l'origine.`,
        S`<b>Vérifie sur le graphique.</b> La parabole passe par \((-2,21)\) et \((0,5)\) ✓`],
      S`\(f(-2)=21\), \(f(0)=5\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 26 }, curves: [{ f: (x) => 3 * x * x - 2 * x + 5, color: "violet" }], points: [{ x: -2, y: 21, label: "(−2, 21)", color: "amber" }, { x: 0, y: 5, label: "(0, 5)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Substituer des expressions", S`Pour \(g(x)=2x-7\), trouve \(g(a+3)\) et \(g(3x)\).`,
      [S`<b>Sens.</b> La règle dit « double l'entrée, puis soustrais 7 ». L'entrée peut être une expression entière; on la place donc entre parenthèses.`,
        S`<b>Première entrée.</b> \(g(a+3)=2(a+3)-7\).`,
        S`<b>Simplifie.</b> Développe : \(2a+6-7\). Regroupe : \(2a-1\).`,
        S`<b>Deuxième entrée.</b> \(g(3x)=2(3x)-7=6x-7\). Ce n'est pas \(3g(x)\), qui vaudrait \(6x-21\).`,
        S`<b>Vérifie avec des nombres.</b> Prends \(a=1\) : \(g(4)=8-7=1\), et \(2a-1=1\) ✓. Prends \(x=2\) : \(g(6)=12-7=5\), et \(6x-7=5\) ✓. Les deux points sont sur le graphique de \(g\).`],
      S`\(g(a+3)=2a-1\), \(g(3x)=6x-7\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -8, ymax: 8 }, lines: [{ m: 2, b: -7, color: "violet" }], points: [{ x: 4, y: 1, label: "(4, 1)", color: "amber" }, { x: 6, y: 5, label: "(6, 5)", color: "amber" }], step: { x: 1, y: 2 } }, "y = g(x) = 2x − 7")],
    ["Résoudre f(x) = v", S`Pour \(f(x)=x^2-4x\), résous \(f(x)=12\).`,
      [S`<b>Sens.</b> Ici, la sortie est donnée et on cherche les entrées qui la produisent. Sur un graphique, ce sont les valeurs de x où la courbe est à la hauteur 12.`,
        S`<b>Pose l'équation.</b> \(x^2-4x=12\). Une équation du second degré exige qu'un membre soit égal à 0 : \(x^2-4x-12=0\).`,
        S`<b>Factorise.</b> Il faut deux nombres dont le produit est \(-12\) et la somme \(-4\) : ce sont \(-6\) et \(2\). Donc \((x-6)(x+2)=0\).`,
        S`<b>Produit nul.</b> \(x-6=0\) donne \(x=6\), et \(x+2=0\) donne \(x=-2\).`,
        S`<b>Vérifie.</b> \(f(6)=36-24=12\) ✓ et \(f(-2)=4+8=12\) ✓. La droite pointillée \(y=12\) coupe la parabole exactement en ces deux points.`],
      S`\(x=6\) ou \(x=-2\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x * x - 4 * x }], lines: [{ m: 0, b: 12, color: "amber", dash: true }], points: [{ x: -2, y: 12, label: "(−2, 12)" }, { x: 6, y: 12, label: "(6, 12)" }], step: { x: 1, y: 2 } })],
    ["Lire un graphique", S`Le graphique représente \(y=f(x)\). Trouve \(f(3)\) et résous \(f(x)=3\).`,
      [S`<b>Deux questions différentes.</b> \(f(3)\) donne l'entrée et demande la sortie. \(f(x)=3\) donne la sortie et demande les entrées.`,
        S`<b>Trouve \(f(3)\).</b> Place-toi à \(x=3\) sur l'axe des x et déplace-toi verticalement jusqu'à la courbe. À cet endroit, la courbe est sur l'axe, en \((3,0)\), donc \(f(3)=0\).`,
        S`<b>Résous \(f(x)=3\).</b> Trace la droite horizontale à la hauteur 3 (en pointillé). Elle coupe la courbe en \((0,3)\) et en \((2,3)\), donc \(x=0\) ou \(x=2\).`,
        S`<b>Pourquoi deux réponses?</b> La courbe monte puis descend, donc la plupart des hauteurs sous le sommet sont atteintes deux fois. C'est correct pour une fonction : deux entrées peuvent partager une sortie.`,
        S`<b>Vérifie avec la règle.</b> La courbe est \(f(x)=-(x-1)^2+4\). Alors \(f(3)=-4+4=0\) ✓, \(f(0)=-1+4=3\) ✓, \(f(2)=-1+4=3\) ✓`],
      S`\(f(3)=0\); \(f(x)=3\) pour \(x=0\) ou \(x=2\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4 }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [{ x: 3, y: 0, label: "(3, 0)" }, { x: 0, y: 3, label: "(0, 3)" }, { x: 2, y: 3, label: "(2, 3)" }], step: { x: 1, y: 1 } })],
    ["En contexte", S`Un forfait de téléphone coûte \(C(m)=25+0.1m\) dollars pour \(m\) minutes. Trouve et explique \(C(150)\). Pour combien de minutes la facture est-elle de 52 dollars?`,
      [S`<b>Lis la règle.</b> 25 est le frais mensuel fixe, et chaque minute ajoute 0.10 dollar. L'entrée est en minutes et la sortie en dollars.`,
        S`<b>Évalue.</b> \(C(150)=25+0.1(150)=25+15=40\). En mots : 150 minutes coûtent 40 dollars.`,
        S`<b>Question inverse.</b> Une facture de 52 signifie \(C(m)=52\) : \(25+0.1m=52\).`,
        S`<b>Résous.</b> Soustrais 25 : \(0.1m=27\). Divise par 0.1 : \(m=270\).`,
        S`<b>Vérifie.</b> \(C(270)=25+27=52\) ✓. Le graphique est une droite qui part de \((0,25)\), soit le frais sans aucune minute utilisée, et il passe par les deux points de réponse.`],
      S`\(C(150)=40\) dollars; la facture est de 52 dollars pour 270 minutes`,
      plane({ view: { xmin: 0, xmax: 320, ymin: 0, ymax: 70 }, lines: [{ m: 0.1, b: 25, color: "violet" }], points: [{ x: 0, y: 25, label: "(0, 25)" }, { x: 150, y: 40, label: "(150, 40)", color: "amber" }, { x: 270, y: 52, label: "(270, 52)", color: "amber" }], step: { x: 40, y: 10 }, xlabel: "m (min)", ylabel: "C" })],
  ]),

  practice([
    q("évaluer", String.raw`Pour \(f(x)=-2x^2+3x-1\), trouve \(f(-1)\).`, num(-6),
      "Le carré d'abord : (−1)² = 1.", [String.raw`\(-2(1)+3(-1)-1=-2-3-1\).`], String.raw`\(-6\)`),
    q("substituer", String.raw`Pour \(h(x)=5-3x\), trouve \(h(2a)\).`, expr("5-6*a"),
      "Remplace x par 2a.", [String.raw`\(5-3(2a)\).`], String.raw`\(h(2a)=5-6a\)`),
    q("résoudre", String.raw`Pour \(f(x)=x^2+2x\), résous \(f(x)=15\). Entre la solution positive.`, num(3),
      "Fais passer 15 de l'autre côté et factorise.", [String.raw`\(x^2+2x-15=0\Rightarrow(x+5)(x-3)=0\).`], String.raw`\(3\)`),
    q("combiner", String.raw`Pour \(p(n)=n^2-n\), trouve \(p(4)-p(2)\).`, num(10),
      "Évalue d'abord chaque valeur.", [String.raw`\(p(4)=12\), \(p(2)=2\).`], String.raw`\(10\)`),
    q("contexte", String.raw`Une location coûte \(R(d)=40+0.25d\) dollars pour \(d\) km. Résous \(R(d)=95\).`, num(220),
      "Soustrais 40, puis divise.", [String.raw`\(0.25d=55\).`], String.raw`\(220\)`),
  ]),

  ...hard([
    ["Une différence de sorties", String.raw`Pour \(f(x)=x^2-3x\), simplifie \(f(x+2)-f(x)\). Que t'apprend ce résultat sur les sorties?`,
      [String.raw`\(f(x+2)=(x+2)^2-3(x+2)=x^2+4x+4-3x-6=x^2+x-2\).`, String.raw`\(f(x+2)-f(x)=x^2+x-2-(x^2-3x)=4x-2\).`, String.raw`La variation sur 2 unités d'entrée n'est pas constante — elle augmente avec \(x\), comme on s'y attend pour une fonction du second degré.`],
      String.raw`\(f(x+2)-f(x)=4x-2\)`],
    ["Trouver une fonction à partir de deux valeurs", String.raw`Une fonction affine \(f(x)=ax+b\) vérifie \(f(2)=7\) et \(f(-1)=-8\). Trouve \(f\), puis trouve \(f(f(1))\).`,
      [String.raw`\(2a+b=7\) et \(-a+b=-8\). Soustrais : \(3a=15\), donc \(a=5\) et \(b=-3\).`, String.raw`\(f(1)=5-3=2\), donc \(f(f(1))=f(2)=7\).`],
      String.raw`\(f(x)=5x-3\); \(f(f(1))=7\)`],
  ], [
    q("difficile", String.raw`Pour \(g(x)=2x^2-x\), simplifie \(g(x+1)-g(x)\).`, expr("4*x+1"),
      "Développe d'abord g(x + 1) avec soin.", [String.raw`\(g(x+1)=2x^2+4x+2-x-1=2x^2+3x+1\).`, String.raw`Soustrais \(2x^2-x\).`], String.raw`\(4x+1\)`),
    q("difficile", String.raw`\(f(x)=ax+b\) avec \(f(1)=4\) et \(f(3)=14\). Trouve \(f(-2)\).`, num(-11),
      "Trouve d'abord a et b.", [String.raw`\(2a=10\Rightarrow a=5\), \(b=-1\).`, String.raw`\(f(-2)=-10-1\).`], String.raw`\(-11\)`),
    q("difficile", String.raw`Pour \(f(x)=x^2-6x+11\), quelle est la plus petite valeur possible de \(f(x)\)?`, num(2),
      "Complète le carré.", [String.raw`\(f(x)=(x-3)^2+2\); le carré n'est jamais négatif.`], String.raw`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi ne pas simplement écrire y?", "f(x) nomme la fonction et l'entrée en même temps, ce qui permet de comparer f(2) et g(2) sur une seule ligne."],
      ["f(x) = 0 est-il la même chose que f(0)?", "Non. f(0) est une sortie (l'ordonnée à l'origine); f(x) = 0 demande des entrées (les abscisses à l'origine)."],
      ["f(x) = 7 peut-elle n'avoir aucune solution?", "Oui — si 7 n'appartient pas à l'image. Pour f(x) = x² + 9, aucune entrée ne donne 7."],
      ["Que signifie f(a + h)?", "Remplace x par l'expression complète a + h. On s'en sert pour mesurer la variation entre deux entrées."],
      ["Dois-je l'appeler f?", "Non. N'importe quelle lettre convient : C(m) pour un coût, h(t) pour une hauteur. Choisis des lettres qui rappellent le contexte."],
    ],
    summary: [
      "f(a) = la sortie pour l'entrée a; le point (a, f(a)) est sur le graphique.",
      "Substitue les expressions entre parenthèses, puis simplifie.",
      "Résous f(x) = v en posant la formule égale à v.",
      "Lis f(a) verticalement sur un graphique; résous f(x) = v horizontalement.",
    ],
    next: "La section 1.3 présente les cinq fonctions de base que le reste du chapitre transforme.",
  }),
];
