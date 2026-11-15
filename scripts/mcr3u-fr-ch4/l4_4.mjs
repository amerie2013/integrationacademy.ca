// MCR3U-FR 4.4 — Fonctions exponentielles et leurs propriétés : y = bˣ et y = a·bˣ, croissance et décroissance,
// propriétés clés, reconnaître une table exponentielle (rapport constant), comparaison avec les fonctions affines et
// du second degré, équation à partir de deux points. Miroir de ../mcr3u-ch4/l4_4.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.4 Fonctions exponentielles et leurs propriétés";
export const ID = lessonId(4, 4);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Fonctions exponentielles et leurs propriétés",
    overview: S`Une fonction exponentielle multiplie par le même facteur chaque fois que \(x\) augmente de 1 : \(f(x)=a\cdot b^x\). Dans cette leçon, tu vas tracer le graphique de fonctions exponentielles, énoncer leurs propriétés, distinguer la croissance (\(b>1\)) de la décroissance (\(0<b<1\)), reconnaître une table de valeurs exponentielle grâce à son rapport constant, comparer les croissances exponentielle, affine et quadratique, et trouver l'équation à partir de deux points.`,
    goals: [
      "tracer le graphique de y = bˣ et de y = a·bˣ à partir d'une table de valeurs;",
      "énoncer le domaine, l'image, l'ordonnée à l'origine, l'asymptote et le sens de variation (croissante ou décroissante);",
      "distinguer les relations exponentielles, affines et du second degré à partir de tables et de graphiques;",
      "expliquer pourquoi y = bˣ est une fonction et pourquoi b doit être positif et différent de 1;",
      "trouver a et b à partir de deux points ou d'une table de valeurs.",
    ],
    curriculum: "B1.1 (tracer le graphique de y = aˣ et expliquer pourquoi c'est une fonction), B1.4 (propriétés clés : domaine, image, coordonnées à l'origine, intervalles de croissance et de décroissance, asymptotes), B2.1 (distinguer les fonctions exponentielles des fonctions affines et du second degré), B2.4 (formes équivalentes avec différentes bases)",
    prior: [
      [S`Évalue \(3^{-2}\).`, S`\(\frac19\).`],
      [S`Quelles sont les différences premières de \(2, 5, 8, 11\)?`, S`3, 3, 3 — relation affine.`],
      [S`Évalue \(\left(\tfrac12\right)^{-3}\).`, S`\(8\).`],
    ],
    words: [
      ["Fonction exponentielle", "\\(f(x)=a\\cdot b^x\\), \\(b>0\\), \\(b\\ne1\\)", "\\(f(x)=5(3)^x\\)"],
      ["Facteur de croissance / de décroissance", "\\(b>1\\) / \\(0<b<1\\)", "\\(1.04\\) / \\(0.5\\)"],
      ["Asymptote horizontale", "la droite dont le graphique s'approche", "\\(y=0\\)"],
      ["Rapport constant", "chaque valeur de y ÷ la précédente", "\\(\\frac{15}5=\\frac{45}{15}=3\\)"],
    ],
  }),

  section("📌 Le graphique de y = bˣ", S`
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => 0.5 ** x, color: "red" }], points: [{ x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: 3, label: "(1, 3)" }, { x: -1, y: 2, label: "(−1, 2)", color: "red" }], step: { x: 1, y: 1 } }, "violet : y = 3ˣ (croissance), rouge : y = (½)ˣ (décroissance)")}
  ${table(["Propriété", "y = bˣ, b > 1", "y = bˣ, 0 < b < 1"], [
    ["domaine", "\\(\\mathbb R\\)", "\\(\\mathbb R\\)"], ["image", "\\(y>0\\)", "\\(y>0\\)"], ["ordonnée à l'origine", "1", "1"],
    ["asymptote", "\\(y=0\\) (vers la gauche)", "\\(y=0\\) (vers la droite)"], ["comportement", "croissante", "décroissante"],
  ])}
  ${keyIdea(S`Chaque valeur d'entrée donne une seule valeur de sortie; \(y=b^x\) est donc une fonction. La base doit être positive (sinon \(b^{1/2}\) pourrait ne pas être réel) et différente de 1 (\(1^x\) n'est que la droite \(y=1\)). Dans \(y=a\cdot b^x\), \(a\) est l'ordonnée à l'origine.`)}`),

  section("📌 Explore", S`<p>Modifie la valeur initiale \(a\) et le rapport \(b\). La table montre que les différences changent, mais que le rapport reste constant. Compare avec les courbes affine et quadratique.</p>`),

  widget("growthCompare", { init: [2, 1.5] }),

  section("📌 Attention", watchOut([
    S`\(y=x^2\) n'est pas exponentielle — la variable est dans la base, pas dans l'exposant.`,
    "Vérifie les rapports seulement si les valeurs de x sont également espacées.",
    S`\(\left(\tfrac12\right)^x=2^{-x}\) : la décroissance est une réflexion de la croissance par rapport à l'axe des y.`,
    "Le graphique s'approche de y = 0 sans jamais l'atteindre — l'image est y > 0, pas y ≥ 0.",
  ])),

  examples([
    ["Le graphique de y = 3ˣ", S`Construis une table de valeurs pour \(y=3^x\) de \(x=-2\) à \(2\), trace le graphique et énonce ses propriétés.`,
      [S`<b>Substitue chaque valeur de x.</b> Un exposant négatif donne un inverse, et \(3^0=1\) : \(3^{-2}=\frac1{3^2}=\frac19\), \(3^{-1}=\frac13\), \(3^0=1\), \(3^1=3\), \(3^2=9\).`,
        S`<b>Table de valeurs.</b> Chaque fois que \(x\) augmente de 1, \(y\) est multiplié par 3. ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["\\(y=3^x\\)", "\\(\\frac19\\)", "\\(\\frac13\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"])}`,
        S`<b>Domaine et image.</b> N'importe quel nombre réel peut être un exposant; le domaine est donc \(\mathbb R\). Une puissance d'une base positive est toujours positive; l'image est donc \(y>0\).`,
        S`<b>Coordonnées à l'origine.</b> À \(x=0\), \(y=3^0=1\); l'ordonnée à l'origine est donc \(1\). L'équation \(3^x=0\) n'a pas de solution; il n'y a donc pas d'abscisse à l'origine.`,
        S`<b>Asymptote et comportement.</b> Quand \(x\) va vers la gauche, les valeurs \(\frac13,\frac19,\frac1{27},\dots\) s'approchent de 0 sans jamais l'atteindre; \(y=0\) est donc une asymptote horizontale. La base \(3>1\), donc la fonction est croissante.`,
        S`<b>Vérification sur le graphique.</b> Les cinq points de la table sont sur une même courbe lisse qui reste au-dessus de l'axe des x et monte vers la droite ✓`],
      S`domaine \(\mathbb R\), image \(y>0\), ordonnée à l'origine \(1\), aucune abscisse à l'origine, asymptote \(y=0\), croissante`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x, color: "violet" }], points: [{ x: -2, y: 1 / 9 }, { x: -1, y: 1 / 3 }, { x: 0, y: 1, label: "(0, 1)", color: "amber" }, { x: 1, y: 3, label: "(1, 3)" }, { x: 2, y: 9, label: "(2, 9)" }], step: { x: 1, y: 1 } })],
    ["La décroissance", S`Compare \(y=\left(\tfrac12\right)^x\) et \(y=2^x\) à l'aide d'une table de valeurs et d'un graphique.`,
      [S`<b>Table des deux fonctions.</b> En lisant chaque ligne, on voit qu'une liste de valeurs est l'autre liste à l'envers. ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["\\(y=2^x\\)", "\\(\\frac14\\)", "\\(\\frac12\\)", "\\(1\\)", "\\(2\\)", "\\(4\\)"], ["\\(y=\\left(\\frac12\\right)^x\\)", "\\(4\\)", "\\(2\\)", "\\(1\\)", "\\(\\frac12\\)", "\\(\\frac14\\)"])}`,
        S`<b>L'algèbre explique la régularité.</b> \(\tfrac12=2^{-1}\), donc \(\left(\tfrac12\right)^x=(2^{-1})^x=2^{-x}\). Remplacer \(x\) par \(-x\) produit une réflexion du graphique par rapport à l'axe des y; chaque point \((x,y)\) de \(y=2^x\) apparaît donc en \((-x,y)\) sur l'autre courbe.`,
        S`<b>Ce qui ne change pas.</b> Les deux ont le domaine \(\mathbb R\), l'image \(y>0\), l'ordonnée à l'origine \(1\) et l'asymptote \(y=0\). Le point \((0,1)\) est sur l'axe de réflexion; il ne bouge donc pas.`,
        S`<b>Ce qui change.</b> \(y=2^x\) est croissante (croissance, \(b>1\)) et s'approche de l'asymptote vers la gauche. \(y=\left(\tfrac12\right)^x\) est décroissante (décroissance, \(0<b<1\)) et s'en approche vers la droite.`,
        S`<b>Vérification.</b> \((2,4)\) est sur \(y=2^x\) et son image \((-2,4)\) est sur \(y=\left(\tfrac12\right)^x\) : \(\left(\tfrac12\right)^{-2}=2^2=4\) ✓`],
      "les courbes sont des réflexions l'une de l'autre par rapport à l'axe des y; l'une est une croissance et l'autre, une décroissance",
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 0.5 ** x, color: "red" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "violet" }, { x: -2, y: 4, label: "(−2, 4)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "amber" }], step: { x: 1, y: 1 } }, "violet : y = 2ˣ, rouge : y = (½)ˣ")],
    ["Reconnaître une table exponentielle", S`\(x\) : \(0,1,2,3\); \(y\) : \(5,15,45,135\). Montre que les données sont exponentielles et trouve l'équation.`,
      [S`<b>Test.</b> Les valeurs de x augmentent par pas égaux; on peut donc comparer les valeurs de y consécutives. Une relation exponentielle a un <em>rapport</em> constant. ${tv(["\\(x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)"], ["\\(y\\)", "\\(5\\)", "\\(15\\)", "\\(45\\)", "\\(135\\)"], ["rapport à la précédente", "", "\\(\\frac{15}5=3\\)", "\\(\\frac{45}{15}=3\\)", "\\(\\frac{135}{45}=3\\)"])}`,
        S`<b>Trouve \(b\).</b> La forme est \(y=a\cdot b^x\), et \(b\) est le facteur pour chaque pas d'une unité en \(x\). Le rapport vaut toujours 3, donc \(b=3\).`,
        S`<b>Trouve \(a\).</b> À \(x=0\), \(y=a\cdot b^0=a\). La table donne \(y=5\) à \(x=0\), donc \(a=5\).`,
        S`<b>Équation et vérification.</b> \(y=5(3)^x\). À \(x=3\) : \(5\times27=135\) ✓. À \(x=2\) : \(5\times9=45\) ✓`],
      S`\(y=5(3)^x\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -10, ymax: 150 }, curves: [{ f: (x) => 5 * 3 ** x, color: "violet" }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }, { x: 1, y: 15, label: "(1, 15)" }, { x: 2, y: 45, label: "(2, 45)" }, { x: 3, y: 135, label: "(3, 135)" }], step: { x: 1, y: 20 } })],
    ["Trois sortes de tables", S`Classe \(A : 4,7,10,13\); \(B : 4,5,8,13\); \(C : 4,8,16,32\) pour \(x=0,1,2,3\).`,
      [S`<b>Les tests.</b> Avec des pas égaux en x : des différences premières constantes indiquent une relation affine, des différences secondes constantes, une relation du second degré, et un rapport constant, une relation exponentielle.`,
        S`<b>Table A.</b> Les différences premières sont \(3,3,3\), qui sont constantes; A est donc affine. Son équation est \(y=3x+4\).`,
        S`<b>Table B.</b> Les différences premières sont \(1,3,5\), qui ne sont pas constantes. Les différences secondes sont \(2,2\), qui sont constantes; B est donc du second degré. Son équation est \(y=x^2+4\).`,
        S`<b>Table C.</b> Les différences premières sont \(4,8,16\), et elles doublent. Les rapports sont \(2,2,2\), qui sont constants; C est donc exponentielle. Son équation est \(y=4(2)^x\).`,
        S`<b>Résumé.</b> ${tv(["\\(x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)", "régularité", "type"], ["A", "4", "7", "10", "13", "ajouter 3", "affine"], ["B", "4", "5", "8", "13", "diff. 2<sup>e</sup> 2", "second degré"], ["C", "4", "8", "16", "32", "fois 2", "exponentielle"])} Les trois commencent à 4, mais le graphique montre qu'elles se séparent vite : l'exponentielle est déjà loin devant à \(x=3\) ✓`],
      "A affine, B du second degré, C exponentielle",
      plane({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 36 }, lines: [{ m: 3, b: 4, color: "blue" }], curves: [{ f: (x) => x * x + 4, color: "green" }, { f: (x) => 4 * 2 ** x, color: "violet" }], points: [{ x: 3, y: 13, label: "(3, 13)" }, { x: 3, y: 32, label: "(3, 32)", color: "violet" }, { x: 0, y: 4, label: "(0, 4)", color: "amber" }], step: { x: 1, y: 4 } }, "bleu : A, vert : B, violet : C (A et B atteignent toutes deux 13 à x = 3)")],
    ["À partir du graphique", "Une courbe exponentielle y = a·bˣ passe par (0, 4) et (2, 1). Trouve son équation.",
      [S`<b>Utilise le point sur l'axe des y.</b> À \(x=0\), \(y=a\cdot b^0=a\). Le point \((0,4)\) donne \(a=4\), donc \(y=4b^x\).`,
        S`<b>Utilise le deuxième point.</b> Substitue \((2,1)\) : \(1=4b^2\), donc \(b^2=\frac14\).`,
        S`<b>Résous pour \(b\).</b> Les racines carrées de \(\frac14\) sont \(\pm\frac12\). Une base exponentielle doit être positive, donc \(b=\frac12\).`,
        S`<b>Équation.</b> \(y=4\left(\tfrac12\right)^x\). La base est entre 0 et 1, ce qui correspond à la courbe descendante.`,
        S`<b>Vérification avec de nouveaux points.</b> \(y(1)=2\), à mi-chemin dans la régularité de division par deux \(4,2,1\) ✓. \(y(-1)=4\times2=8\), qui est aussi sur la courbe ✓`],
      S`\(y=4\left(\tfrac12\right)^x\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 4 * 0.5 ** x, color: "violet" }], points: [{ x: -1, y: 8, label: "(−1, 8)" }, { x: 0, y: 4, label: "(0, 4)", color: "amber" }, { x: 1, y: 2, label: "(1, 2)" }, { x: 2, y: 1, label: "(2, 1)", color: "amber" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("ordonnée à l'origine", S`Quelle est l'ordonnée à l'origine de \(y=7\cdot2^x\)?`, num(7),
      "Substitue x = 0.", [S`\(7\cdot2^0=7\).`], S`\(7\)`),
    q("rapport", S`Une table exponentielle a \(y=2,6,18\). Quelle est la valeur suivante?`, num(54),
      "Rapport constant de 3.", [S`\(18\times3\).`], S`\(54\)`),
    q("décroissance", "Quelle fonction est décroissante?", choice([S`\(y=0.8^x\)`, S`\(y=1.2^x\)`, S`\(y=3^x\)`, S`\(y=2\cdot5^x\)`], 0),
      "0 < b < 1.", [S`\(b=0.8\).`], S`\(y=0.8^x\)`),
    q("évaluer", S`Évalue \(y=3\left(\tfrac12\right)^x\) à \(x=-2\).`, num(12),
      "Un exposant négatif renverse la base.", [S`\(3\cdot2^2\).`], S`\(12\)`),
    q("trouver b", S`\(y=2b^x\) passe par \((3,54)\). Trouve \(b\).`, num(3),
      "2b³ = 54.", [S`\(b^3=27\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Même fonction, bases différentes", S`Montre que \(y=8^x\) et \(y=2^{3x}\) sont la même fonction, et écris \(y=\left(\tfrac14\right)^x\) comme une puissance de 2.`,
      [S`\(8^x=(2^3)^x=2^{3x}\).`, S`\(\left(\tfrac14\right)^x=(2^{-2})^x=2^{-2x}\).`],
      S`\(8^x=2^{3x}\); \(\left(\tfrac14\right)^x=2^{-2x}\)`],
    ["Des pas inégaux", S`Une table donne \(x=0,2,4,6\) et \(y=3,12,48,192\). Trouve l'équation et \(y(5)\).`,
      [S`Chaque pas de 2 multiplie par 4; chaque pas de 1 multiplie donc par \(b=\sqrt4=2\).`, S`\(y=3(2)^x\); \(y(5)=96\).`],
      S`\(y=3(2)^x\); \(96\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: 0, ymax: 220 }, curves: [{ f: (x) => 3 * 2 ** x, color: "violet" }], points: [[0, 3], [2, 12], [4, 48], [6, 192], [5, 96]].map(([x, y]) => ({ x, y, label: x === 5 ? "(5, 96)" : undefined, color: x === 5 ? "green" : "blue" })), step: { x: 1, y: 20 } })],
  ], [
    q("difficile", S`\(y=ab^x\) passe par \((1,6)\) et \((3,24)\). Trouve son ordonnée à l'origine.`, num(3),
      "Divise les deux équations.", [S`\(b^2=4\Rightarrow b=2\); \(a=3\).`], S`\(3\)`),
    q("difficile", S`\(y=ab^x\) passe par \((-1,18)\) et \((1,2)\). Trouve \(y(2)\) au millième près.`, num(2 / 3, 0.002),
      "b² = 2/18.", [S`\(b=\tfrac13\), \(a=6\); \(6\cdot\tfrac19\).`], S`\(\tfrac23\approx0.667\)`),
    q("difficile", S`Résous \(4^{x+1}=8^x\).`, num(2),
      "Base commune 2.", [S`\(2^{2x+2}=2^{3x}\Rightarrow x=2\).`], S`\(x=2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi b doit-il être positif?", "Avec b < 0, des valeurs comme b^(1/2) ne sont pas réelles; le graphique aurait donc des trous."],
      ["Pourquoi b ne peut-il pas valoir 1?", "1ˣ = 1 pour tout x — c'est une droite horizontale, pas une exponentielle."],
      ["Une exponentielle dépasse-t-elle toujours une fonction du second degré?", "Pour b > 1, oui, tôt ou tard — même si elle commence plus bas."],
      ["Comment reconnaître des données exponentielles?", "Des pas égaux en x et un rapport constant entre les valeurs de y consécutives."],
      ["Que représente a?", "La valeur à x = 0 : la quantité initiale."],
    ],
    summary: [
      "y = a·bˣ : domaine ℝ, image y > 0 (a > 0), ordonnée à l'origine a, asymptote y = 0.",
      "b > 1 : croissance; 0 < b < 1 : décroissance.",
      "Affine : différence constante; second degré : différence seconde constante; exponentielle : rapport constant.",
      "Deux points → divise pour trouver b, puis a.",
    ],
    next: "La leçon 4.5 transforme y = bˣ à l'aide de a, k, c et d.",
  }),
];
