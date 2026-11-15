// MCR3U-FR 1.1 — Relations et fonctions : représentations, test de la droite verticale, fonctions un à un et
// plusieurs à un. Miroir de ../mcr3u-ch1/l1_1.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.1 Relations et fonctions";
export const ID = lessonId(1, 1);

const sideways = (h, k) => [{ f: (x) => k + Math.sqrt(x - h), a: h, color: "violet" }, { f: (x) => k - Math.sqrt(x - h), a: h, color: "violet" }];

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Relations et fonctions",
    overview: String.raw`Une <strong>relation</strong> associe des entrées à des sorties. Une <strong>fonction</strong> est une relation particulière : chaque entrée a <em>exactement une</em> sortie. Dans cette leçon, tu vas tester des relations données sous forme d'ensembles de couples, de diagrammes sagittaux, de graphiques, d'équations et de descriptions, et tu vas comprendre pourquoi la règle « une seule sortie par entrée » rend une relation utile pour faire des prédictions.`,
    goals: [
      "expliquer la différence entre une relation et une fonction;",
      "vérifier si un ensemble de couples ou un diagramme sagittal a la propriété d'une fonction;",
      "appliquer le test de la droite verticale à un graphique;",
      "déterminer algébriquement si une équation définit y comme une fonction de x;",
      "classer une fonction comme un à un ou plusieurs à un.",
    ],
    curriculum: "A1.1 (expliquer le sens du terme fonction et distinguer une fonction d'une relation qui n'est pas une fonction, à l'aide de tables de valeurs, de diagrammes sagittaux, de graphiques, de machines à fonction et d'équations; correspondances un à un et plusieurs à un; test de la droite verticale)",
    prior: [
      [String.raw`Quelle est la valeur de y pour \(y=2x-5\) lorsque \(x=4\)?`, String.raw`\(2(4)-5=3\).`],
      [String.raw`Résous \(y^2=16\).`, String.raw`\(y=4\) ou \(y=-4\) — deux réponses.`],
      [String.raw`Quelle variable est habituellement l'entrée?`, String.raw`\(x\), la variable indépendante; \(y\) est la sortie.`],
    ],
    words: [
      ["Relation", "tout ensemble de couples \\((x,y)\\)", "\\(\\{(1,2),(1,5)\\}\\)"],
      ["Fonction", "une relation dans laquelle chaque \\(x\\) a exactement un \\(y\\)", "\\(y=x^2\\)"],
      ["Domaine", "l'ensemble de toutes les entrées (valeurs de x)", "\\(\\{1,2,3\\}\\)"],
      ["Image", "l'ensemble de toutes les sorties (valeurs de y)", "\\(\\{4,9\\}\\)"],
      ["Test de la droite verticale", "un graphique représente une fonction si aucune droite verticale ne le coupe plus d'une fois", ""],
      ["Un à un / plusieurs à un", "des entrées différentes donnent des sorties différentes / certaines entrées partagent une sortie", "\\(y=2x\\) / \\(y=x^2\\)"],
    ],
  }),

  section("📌 Cinq façons de représenter une relation", String.raw`
  <p>La même idée peut être présentée de plusieurs façons. Chaque représentation ci-dessous montre une <em>fonction</em> : chaque entrée a une seule sortie.</p>
  ${table(["Représentation", "Exemple", "Comment la vérifier"], [
    ["Couples", "\\(\\{(0,3),(1,5),(2,7)\\}\\)", "aucune valeur de x n'est répétée avec un y différent"],
    ["Diagramme sagittal", "des flèches de chaque x vers son y", "exactement une flèche part de chaque x"],
    ["Graphique", "des points ou une courbe sur un quadrillage", "test de la droite verticale"],
    ["Équation", "\\(y=2x+3\\)", "isole y — une seule valeur pour chaque x?"],
    ["Mots", "chaque élève → son âge", "une entrée peut-elle avoir deux sorties?"],
  ])}
  ${keyIdea(String.raw`Une relation est une fonction lorsque <strong>chaque entrée a exactement une sortie</strong>. Deux entrées peuvent partager une sortie (plusieurs à un, c'est permis); une entrée ne peut jamais avoir deux sorties.`)}`),

  section("📌 Explore : le test de la droite verticale", String.raw`<p>Une droite verticale est l'ensemble des points qui ont une même valeur de x. Si elle coupe le graphique deux fois, cette valeur de x a deux valeurs de y. Fais glisser la droite, puis passe d'une relation à l'autre. Pour les ensembles de points, regarde aussi le diagramme sagittal.</p>`),

  widget("relationTest", { start: "side" }),

  section("📌 Des équations qui ne sont pas des fonctions", String.raw`
  <p>Pour vérifier une équation, isole \(y\). Si une racine carrée (ou autre chose) produit un \(\pm\), certaines valeurs de x ont deux sorties.</p>
  <p>Pour \(x=(y-1)^2\) : \(y-1=\pm\sqrt{x}\), donc \(y=1\pm\sqrt{x}\). À \(x=4\), on obtient \(y=3\) <em>et</em> \(y=-1\). Le graphique est une parabole couchée sur le côté, et la droite verticale \(x=4\) la coupe deux fois.</p>
  ${plane({ view: { xmin: -2, xmax: 8, ymin: -4, ymax: 6 }, curves: sideways(0, 1), vlines: [{ x: 4, color: "amber", dash: true, label: "x = 4" }], points: [{ x: 4, y: 3, label: "(4, 3)" }, { x: 4, y: -1, label: "(4, −1)" }], step: { x: 1, y: 1 } }, "x = (y − 1)² : une entrée, deux sorties — ce n'est pas une fonction")}
  ${watchOut([
    "Une valeur de y répétée est permise; une valeur de x répétée avec des valeurs de y différentes ne l'est pas.",
    "Le test utilise des droites <em>verticales</em>. Une droite horizontale qui coupe deux fois indique seulement que la fonction est plusieurs à un.",
    "Une droite verticale elle-même (x = 3) est une relation, mais pas une fonction.",
    "Vérifie tout le graphique, pas seulement la partie près de l'origine.",
  ])}`),

  examples([
    ["Couples", S`L'ensemble \(\{(2,5),(3,-1),(4,5),(7,0)\}\) est-il une fonction? Donne son domaine et son image.`,
      [S`<b>Définition.</b> Une relation est une fonction si chaque entrée (valeur de x) a exactement une sortie (valeur de y). On cherche donc une valeur de x qui se répète avec des valeurs de y différentes.`,
        S`<b>Organise les couples dans un tableau.</b> ${tv(["entrée \\(x\\)", "2", "3", "4", "7"], ["sortie \\(y\\)", "5", "\\(-1\\)", "5", "0"])}`,
        S`<b>Vérifie les entrées.</b> Les entrées \(2,3,4,7\) sont toutes différentes, donc aucune entrée n'a deux sorties. La relation est une fonction.`,
        S`<b>Regarde les sorties.</b> Les entrées 2 et 4 partagent la sortie 5. C'est permis : la règle limite le nombre de sorties par entrée, pas le nombre d'entrées par sortie. Une telle fonction est dite plusieurs à un.`,
        S`<b>Domaine et image.</b> Le domaine est l'ensemble des entrées. L'image est l'ensemble des sorties, et chaque valeur n'y est écrite qu'une fois, donc 5 n'est pas répété.`,
        S`<b>Vérifie sur le graphique.</b> Aucune droite verticale ne passe par deux des points tracés ✓`],
      S`une fonction plusieurs à un; domaine \(\{2,3,4,7\}\), image \(\{-1,0,5\}\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -2, ymax: 6 }, points: [{ x: 2, y: 5, label: "(2, 5)", color: "amber" }, { x: 3, y: -1, label: "(3, −1)" }, { x: 4, y: 5, label: "(4, 5)", color: "amber" }, { x: 7, y: 0, label: "(7, 0)" }], step: { x: 1, y: 1 } })],
    ["Diagramme sagittal", S`Un diagramme sagittal a les flèches \(-1\to4\), \(0\to2\), \(0\to6\), \(3\to-5\). Est-ce une fonction?`,
      [S`<b>Ce qu'on vérifie.</b> Dans un diagramme sagittal, chaque flèche relie une entrée à une sortie. Une fonction ne permet qu'une seule flèche au départ de chaque entrée.`,
        S`<b>Compte les flèches qui partent de chaque entrée.</b> ${tv(["entrée", "\\(-1\\)", "\\(0\\)", "\\(3\\)"], ["sorties", "4", "2 et 6", "\\(-5\\)"], ["flèches", "1", "2", "1"])}`,
        S`<b>Applique le test.</b> L'entrée 0 a deux flèches, vers 2 et vers 6. Une même entrée donnerait deux réponses différentes, donc la règle n'est pas respectée.`,
        S`<b>Vérifie sur le graphique.</b> Trace les flèches comme des points : \((-1,4),(0,2),(0,6),(3,-5)\). La droite verticale \(x=0\) passe par deux d'entre eux, ce qui confirme le test ✓`],
      "ce n'est pas une fonction : l'entrée 0 a deux sorties",
      plane({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 7 }, points: [{ x: -1, y: 4, label: "(−1, 4)" }, { x: 0, y: 2, label: "(0, 2)", color: "red" }, { x: 0, y: 6, label: "(0, 6)", color: "red" }, { x: 3, y: -5, label: "(3, −5)" }], vlines: [{ x: 0, color: "amber", dash: true }], step: { x: 1, y: 1 } })],
    ["Test de la droite verticale", S`Applique le test de la droite verticale à \(x=(y+2)^2-3\).`,
      [S`<b>Le test.</b> Un graphique est une fonction seulement si aucune droite verticale ne le coupe plus d'une fois. Une droite verticale fixe une valeur de x, donc deux points d'intersection signifient une entrée avec deux sorties.`,
        S`<b>Isole \(y\) pour voir les sorties.</b> Ajoute 3 : \(x+3=(y+2)^2\). Prends les deux racines carrées : \(y+2=\pm\sqrt{x+3}\). Donc \(y=-2\pm\sqrt{x+3}\). Le \(\pm\) annonce déjà deux sorties.`,
        S`<b>Décris le graphique.</b> C'est une parabole couchée qui s'ouvre vers la droite, de sommet \((-3,-2)\).`,
        S`<b>Teste une droite verticale,</b> \(x=1\) : \(y=-2\pm\sqrt4\), donc \(y=-2+2=0\) et \(y=-2-2=-4\). La droite coupe la courbe en \((1,0)\) et en \((1,-4)\).`,
        S`<b>Vérifie dans l'équation.</b> \((0+2)^2-3=1\) ✓ et \((-4+2)^2-3=1\) ✓. Les deux points sont bien sur la courbe.`],
      "ce n'est pas une fonction : la droite x = 1 coupe le graphique deux fois",
      plane({ view: { xmin: -4, xmax: 6, ymin: -7, ymax: 3 }, curves: sideways(-3, -2), vlines: [{ x: 1, color: "amber", dash: true }], points: [{ x: 1, y: 0, label: "(1, 0)" }, { x: 1, y: -4, label: "(1, −4)" }], step: { x: 1, y: 1 } })],
    ["Vérifier des équations", S`Quelle équation définit \(y\) comme une fonction de \(x\) : a) \(2x-3y=6\); b) \(x^2+y^2=36\)?`,
      [S`<b>Méthode.</b> Isole \(y\) dans chaque équation, puis demande-toi si un même \(x\) peut donner deux valeurs de \(y\).`,
        S`<b>Équation a).</b> Soustrais \(2x\) : \(-3y=6-2x\). Divise par \(-3\) : \(y=\frac{2x-6}{3}\). Chaque \(x\) donne un seul résultat, puisque les étapes sont une soustraction et une division. Donc a) est une fonction, et son graphique est une droite.`,
        S`<b>Équation b).</b> Soustrais \(x^2\) : \(y^2=36-x^2\). Un carré a deux racines, donc \(y=\pm\sqrt{36-x^2}\).`,
        S`<b>Teste une valeur dans b).</b> À \(x=0\) : \(y=\pm6\). L'entrée 0 a deux sorties, donc b) n'est pas une fonction.`,
        S`<b>Vérifie sur le graphique.</b> La droite verticale \(x=0\) coupe la droite une fois, mais coupe le cercle en \((0,6)\) et en \((0,-6)\) ✓`],
      "a) est une fonction; b), un cercle, n'en est pas une",
      plane({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, lines: [{ m: 2 / 3, b: -2, color: "blue" }], curves: [{ f: (x) => Math.sqrt(Math.max(0, 36 - x * x)), a: -6, b: 6, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, 36 - x * x)), a: -6, b: 6, color: "violet" }], vlines: [{ x: 0, color: "amber", dash: true }], points: [{ x: 0, y: 6, label: "(0, 6)", color: "red" }, { x: 0, y: -6, label: "(0, −6)", color: "red" }, { x: 0, y: -2, label: "(0, −2)" }], step: { x: 2, y: 2 } }, "en bleu a), en violet b), en pointillé la droite x = 0")],
    ["Relations décrites en mots", "La relation « chaque personne → sa date d'anniversaire » est-elle une fonction? Et « chaque date d'anniversaire → une personne née ce jour-là »?",
      [S`<b>Repère les entrées.</b> Dans une relation décrite en mots, l'élément placé avant la flèche est l'entrée. La question est toujours : une entrée peut-elle avoir deux sorties?`,
        S`<b>Première relation.</b> L'entrée est une personne. Chaque personne a exactement une date d'anniversaire, donc chaque entrée a une sortie. C'est une fonction.`,
        S`<b>Son type.</b> Plusieurs personnes peuvent avoir la même date d'anniversaire, donc plusieurs entrées peuvent avoir une même sortie. Elle est donc plusieurs à un, ce qui est permis.`,
        S`<b>Relation inverse.</b> Maintenant, l'entrée est une date. Une date peut correspondre à plusieurs personnes, donc une entrée peut avoir plusieurs sorties. Ce n'est pas une fonction.`,
        S`<b>Vérifie avec un petit exemple.</b> ${tv(["personne", "Ana", "Ben", "Cal"], ["anniversaire", "3 mai", "3 mai", "9 oct."])} En lisant vers le bas, chaque personne a une seule date ✓. En lisant vers le haut, le 3 mai a deux personnes, donc la relation inverse échoue. Sur le graphique, le premier ensemble de points n'a aucune répétition verticale, alors que l'ensemble inversé en a une.`],
      "la première est une fonction; la relation inverse ne l'est pas",
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 4 }, points: [{ x: 1, y: 1, label: "Ana, 3 mai", color: "violet" }, { x: 2, y: 1, label: "Ben, 3 mai", color: "violet" }, { x: 3, y: 3, label: "Cal, 9 oct.", color: "violet" }], step: { x: 1, y: 1 }, xlabel: "personne", ylabel: "date" })],
  ]),

  practice([
    q("couples", String.raw`L'ensemble \(\{(-3,4),(-1,4),(0,2),(5,-1)\}\) est-il une fonction?`, choice(["oui, plusieurs à un", "oui, un à un", "non"], 0),
      "Cherche une valeur de x répétée.", [String.raw`Toutes les valeurs de x sont différentes; \(-3\) et \(-1\) partagent la sortie 4.`], "oui, plusieurs à un"),
    q("droite verticale", String.raw`Combien de fois la droite \(x=2\) coupe-t-elle le graphique de \(x=y^2+1\)?`, num(2),
      "Remplace x par 2 et isole y.", [String.raw`\(y^2=1\), donc \(y=1\) ou \(y=-1\).`], String.raw`\(2\)`),
    q("équations", "Quelle relation N'est PAS une fonction?", choice([String.raw`\(y=3x-1\)`, String.raw`\(y=x^2+5\)`, String.raw`\(x=|y|\)`, String.raw`\(y=\sqrt{x}\)`], 2),
      "Isole y dans chacune.", [String.raw`\(x=|y|\) donne \(y=\pm x\) : à \(x=2\), \(y=2\) ou \(-2\).`], String.raw`\(x=|y|\)`),
    q("cercle", String.raw`Pour \(x^2+y^2=50\), trouve la valeur positive de y lorsque \(x=1\).`, num(7),
      "Remplace x par 1.", [String.raw`\(y^2=49\), donc \(y=\pm7\).`], String.raw`\(7\)`),
    q("classer", String.raw`La fonction \(y=x^2\) est-elle un à un ou plusieurs à un?`, choice(["plusieurs à un", "un à un", "ce n'est pas une fonction"], 0),
      "Essaie x = 3 et x = −3.", [String.raw`\(f(3)=f(-3)=9\) : deux entrées partagent une sortie.`], "plusieurs à un"),
  ]),

  ...hard([
    ["Compter les points d'intersection", String.raw`Pour quelles valeurs de \(k\) la droite verticale \(x=k\) coupe-t-elle la relation \(x=y^2-6y+5\) exactement une fois, deux fois ou jamais?`,
      [String.raw`Complète le carré en \(y\) : \(x=(y-3)^2-4\). C'est une parabole couchée de sommet \((-4,3)\), qui s'ouvre vers la droite.`, String.raw`Si \(k>-4\) : \((y-3)^2=k+4>0\) a deux solutions.`, String.raw`Si \(k=-4\) : une solution, \(y=3\). Si \(k<-4\) : aucune.`],
      String.raw`une fois pour \(k=-4\), deux fois pour \(k>-4\), jamais pour \(k<-4\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -2, ymax: 8 }, curves: sideways(-4, 3), vlines: [{ x: -4, color: "green", dash: true }, { x: 1, color: "amber", dash: true }], points: [{ x: -4, y: 3, label: "(−4, 3)" }], step: { x: 1, y: 1 } })],
    ["Une relation avec un paramètre", String.raw`Pour quelles valeurs de \(a\) l'ensemble \(\{(1,a),(3,5),(a,2),(4,7)\}\) est-il une fonction?`,
      [String.raw`Un problème survient seulement si l'entrée \(a\) est égale à une autre entrée : \(a=1\), \(3\) ou \(4\).`, String.raw`\(a=1\) : les couples \((1,1)\) et \((1,2)\) — deux sorties. \(a=3\) : \((3,5)\) et \((3,2)\). \(a=4\) : \((4,2)\) et \((4,7)\).`, String.raw`Toute autre valeur de \(a\) donne quatre entrées différentes.`],
      String.raw`tout réel \(a\) sauf \(1\), \(3\) et \(4\)`],
  ], [
    q("difficile", String.raw`Pour \(x=y^2-4y\), trouve la plus grande valeur de y lorsque \(x=5\).`, num(5),
      "Réécris sous la forme y² − 4y − 5 = 0.", [String.raw`\((y-5)(y+1)=0\), donc \(y=5\) ou \(y=-1\).`], String.raw`\(5\)`),
    q("difficile", String.raw`La droite \(x=k\) coupe \(x=(y+2)^2+3\) exactement une fois. Trouve \(k\).`, num(3),
      "Où est le sommet de la parabole couchée?", [String.raw`Sommet \((3,-2)\); seul \(x=3\) donne une seule valeur de y.`], String.raw`\(3\)`),
    q("difficile", String.raw`Combien d'entiers \(m\) de \(-5\) à \(5\) font de \(\{(2,7),(m,1),(5,m),(0,4)\}\) une fonction?`, num(8),
      "Quelles valeurs de m répètent une entrée avec une sortie différente?", [String.raw`\(m=2\) : \((2,7),(2,1)\). \(m=5\) : \((5,1),(5,5)\). \(m=0\) : \((0,1),(0,4)\).`, String.raw`11 entiers moins ces 3.`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi les mathématiciens tiennent-ils à savoir si une relation est une fonction?", "Une fonction permet de prédire : on donne une entrée et on obtient une sortie bien déterminée. Les formules, les graphiques sur les calculatrices et le code informatique reposent tous sur cette propriété."],
      ["Une droite horizontale est-elle une fonction?", "Oui — y = 4 donne une seule sortie (4) pour chaque entrée. Elle est plusieurs à un."],
      ["Une fonction peut-elle avoir deux abscisses à l'origine?", "Oui. Le test porte sur une seule sortie par entrée; deux entrées peuvent toutes deux donner y = 0."],
      ["Pourquoi un cercle échoue-t-il au test?", "En résolvant x² + y² = r², on obtient y = ±√(r² − x²) : une entrée, deux sorties."],
      ["Comment vérifier une relation décrite en mots?", "Demande-toi : une même entrée pourrait-elle avoir deux sorties différentes? Si oui, ce n'est pas une fonction."],
    ],
    summary: [
      "Une fonction associe à chaque entrée exactement une sortie.",
      "Couples / diagramme sagittal : aucune entrée répétée avec une sortie différente.",
      "Graphique : le test de la droite verticale.",
      "Équation : isole y; un ± signifie que ce n'est pas une fonction.",
      "Un à un : entrées différentes, sorties différentes; plusieurs à un : certaines sorties sont partagées.",
    ],
    next: "La section 1.2 présente la notation fonctionnelle f(x) pour évaluer et résoudre.",
  }),
];
