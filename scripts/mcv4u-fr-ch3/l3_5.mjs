// MCV4U-FR 3.5 — Synthèse : un algorithme complet d'esquisse de courbes (domaine, intersections avec les axes, symétrie,
// asymptotes, f′ et f″), esquisses de fonctions polynomiales et rationnelles, esquisses à partir de conditions, et
// association de f, f′ et f″. Miroir de ../mcv4u-ch3/l3_5.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.5 Synthèse : l'esquisse de courbes";
export const ID = lessonId(3, 5);

const S = String.raw;
const VR = { xmin: -5, xmax: 4, ymin: -2, ymax: 8 };
const VS = { xmin: -10, xmax: 6, ymin: -22, ymax: 12 };
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Synthèse : l'esquisse de courbes",
    overview: S`Chaque leçon précédente donnait un renseignement sur un graphique. Une <strong>esquisse de courbe</strong> complète les réunit dans un ordre fixe : le domaine et les asymptotes éventuelles; les intersections avec les axes et la symétrie; les nombres critiques, les intervalles de croissance et de décroissance et les extremums à partir de \(f'\); les intervalles de concavité et les points d'inflexion à partir de \(f''\). Noter tout dans un seul tableau avant de tracer rend l'esquisse précise et rapide, et la méthode fonctionne aussi bien pour les fonctions polynomiales que pour les fonctions rationnelles.`,
    goals: [
      "suivre un algorithme complet d'esquisse de courbes;",
      "organiser les renseignements sur f′ et f″ dans un seul tableau;",
      "esquisser avec précision des fonctions polynomiales et rationnelles;",
      "esquisser un graphique à partir de conditions données;",
      "associer les graphiques de f, f′ et f″.",
    ],
    curriculum: "B1.5 (esquisser les graphiques de fonctions polynomiales et de fonctions rationnelles simples en analysant leurs caractéristiques clés), B1.1 (relier les graphiques de f, f′ et f″)",
    prior: [
      [S`Où \(x^3-12x\) est-elle croissante?`, S`\(x\lt-2\) ou \(x\gt2\).`],
      [S`Où \(x^3-6x^2\) est-elle concave vers le haut?`, S`\(x\gt2\).`],
      [S`Asymptote horizontale de \(\frac{2x}{x-1}\)?`, S`\(y=2\).`],
    ],
    words: [
      ["Esquisse de courbe", "un graphique qui montre toutes les caractéristiques clés, pas seulement des points placés", ""],
      ["Tableau récapitulatif", "les intervalles avec les signes de f′ et de f″ et la forme", ""],
      ["Comportement aux extrémités", "ce que fait f lorsque \\(x\\to\\pm\\infty\\)", "terme dominant"],
      ["Symétrie", "paire : axe des y; impaire : origine", ""],
    ],
  }),

  section("📌 L'algorithme", S`
  ${table(["Étape", "Ce qu'il faut trouver"], [
    ["1. Domaine", "valeurs exclues; asymptotes verticales"],
    ["2. Intersections avec les axes, symétrie", "\\(f(0)\\), zéros de f; f est-elle paire ou impaire?"],
    ["3. Comportement aux extrémités", "terme dominant, ou asymptote horizontale/oblique"],
    ["4. Dérivée première", "nombres critiques, intervalles de croissance/décroissance, extremums"],
    ["5. Dérivée seconde", "intervalles de concavité, points d'inflexion"],
    ["6. Esquisse", "place les points clés, puis suis le tableau"],
  ])}
  ${plane({ view: { xmin: -6, xmax: 4, ymin: -16, ymax: 26 }, curves: [{ f: (x) => x ** 3 + 3 * x * x - 9 * x - 5, color: "violet" }], points: [{ x: -3, y: 22, label: "max (−3, 22)", color: "red" }, { x: 1, y: -10, label: "min (1, −10)", color: "blue" }, { x: -1, y: 6, label: "inflexion (−1, 6)", color: "violet" }, { x: 0, y: -5, label: "(0, −5)", color: "amber" }], step: { x: 1, y: 4 } }, "f(x) = x³ + 3x² − 9x − 5 avec tous ses points clés étiquetés.")}
  ${keyIdea(S`Rassemble tous les renseignements avant de tracer. Le tableau récapitulatif — les intervalles en haut, une ligne pour le signe de \(f'\), une pour le signe de \(f''\) et une pour la forme (monte/descend, tasse/chapeau) — t'indique exactement comment relier les points clés.`)}`),

  section("📌 Explore", S`<p>Utilise le curseur des étapes pour construire l'esquisse d'une fonction du quatrième degré une couche à la fois : les intersections avec les axes, puis les points critiques, puis les morceaux croissants et décroissants, puis les points d'inflexion et enfin la courbe. Modifie les coefficients et refais les étapes pour une nouvelle fonction.</p>`),

  widget("curveSketcher", { init: { cs: [1, -1, -3, 1, 2], step: 0 } }),

  section("📌 Rendre l'esquisse convaincante", S`
  <p>Étiquette chaque point clé avec ses coordonnées, trace les asymptotes en pointillé et rends la concavité visible : des tasses là où \(f''\gt0\), des chapeaux là où \(f''\lt0\).</p>
  ${watchOut([
    "Place d'abord les points clés; relie-les seulement une fois le tableau complet.",
    "Garde la courbe lisse aux extremums relatifs (tangentes horizontales) — pas de coins pointus, sauf là où f′ n'existe pas.",
    "Vérifie le comportement aux extrémités à l'aide du terme dominant.",
    "En un point d'inflexion, la courbe traverse sa tangente.",
    "Pour les fonctions rationnelles, le graphique ne touche jamais une asymptote verticale.",
  ])}`),

  examples([
    ["Une fonction cubique du début à la fin", S`Esquisse \(f(x)=x^3+3x^2-9x-5\).`,
      [S`<b>Domaine, ordonnée à l'origine et extrémités.</b> C'est un polynôme : domaine \(\mathbb R\), aucune asymptote. \(f(0)=-5\). Le terme dominant \(x^3\) fait que \(f\to-\infty\) lorsque \(x\to-\infty\) et \(f\to+\infty\) lorsque \(x\to\infty\). Les zéros ne sont pas des nombres simples; un outil graphique donne \(x\approx-4.69,\ -0.49,\ 2.18\).`,
        S`<b>Dérivée première.</b> \(f'(x)=3x^2+6x-9=3(x+3)(x-1)\). ${chart({ cuts: [[-3, "-3"], [1, "1"]], d: ["f'(x)", (x) => 3 * x * x + 6 * x - 9] })} \(f(-3)=-27+27+27-5=22\) et \(f(1)=1+3-9-5=-10\).`,
        S`<b>Dérivée seconde.</b> \(f''(x)=6x+6=6(x+1)\). ${chart({ kind: "conc", cuts: [[-1, "-1"]], d: ["f''(x)", (x) => 6 * x + 6] })} \(f(-1)=-1+3+9-5=6\).`,
        S`<b>Points clés.</b> ${tv(["point", "max", "inflexion", "ordonnée à l'origine", "min"], ["\\((x,y)\\)", "\\((-3,22)\\)", "\\((-1,6)\\)", "\\((0,-5)\\)", "\\((1,-10)\\)"])}`,
        S`<b>Esquisse et vérification.</b> Monte jusqu'à \((-3,22)\) en se courbant vers le bas, descends en passant par \((-1,6)\) où la courbure change, atteins \((1,-10)\), puis remonte en te courbant vers le haut. Vérification : le point d'inflexion est à mi-chemin entre le max et le min, \(x=\tfrac{-3+1}{2}=-1\), comme il se doit pour une fonction cubique ✓`],
      S`max \((-3,22)\), min \((1,-10)\), inflexion \((-1,6)\), ordonnée à l'origine \(-5\); descend vers \(-\infty\) à gauche et monte vers \(+\infty\) à droite`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -16, ymax: 28 }, curves: [{ f: (x) => x ** 3 + 3 * x * x - 9 * x - 5, color: "violet" }], points: [{ x: -3, y: 22, label: "max (−3, 22)", color: "red" }, { x: 1, y: -10, label: "min (1, −10)", color: "blue" }, { x: -1, y: 6, label: "inflexion (−1, 6)", color: "violet" }, { x: 0, y: -5, label: "(0, −5)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Une fonction du quatrième degré avec un point à tangente horizontale", S`Esquisse \(f(x)=3x^4-4x^3\).`,
      [S`<b>Intersections avec les axes et extrémités.</b> \(f(x)=x^3(3x-4)=0\) en \(x=0\) et \(x=\tfrac43\). Le terme dominant \(3x^4\) envoie les deux extrémités vers le haut.`,
        S`<b>Dérivée première.</b> \(f'(x)=12x^3-12x^2=12x^2(x-1)\). Le facteur \(x^2\) ne change jamais de signe. ${chart({ cuts: [[0, "0"], [1, "1"]], factors: [["x^2", (x) => x * x], ["x-1", (x) => x - 1]], d: ["f'(x)", (x) => 12 * x ** 3 - 12 * x * x] })} \(f(1)=3-4=-1\) : minimum \((1,-1)\).`,
        S`<b>Dérivée seconde.</b> \(f''(x)=36x^2-24x=12x(3x-2)\). ${chart({ kind: "conc", cuts: [[0, "0"], [2 / 3, "\\tfrac23"]], d: ["f''(x)", (x) => 36 * x * x - 24 * x] })} \(f\left(\tfrac23\right)=3\cdot\tfrac{16}{81}-4\cdot\tfrac{8}{27}=\tfrac{48-96}{81}=-\tfrac{16}{27}\).`,
        S`<b>Interprète le point particulier.</b> En \(x=0\) : \(f'(0)=0\) (tangente horizontale) et la concavité change. Donc \((0,0)\) est un point d'inflexion à tangente horizontale, et non un extremum.`,
        S`<b>Vérifie.</b> \(f(-1)=3+4=7\gt0\) et \(f(0.5)=0.1875-0.5=-0.3125\lt0\) : le graphique descend en passant par \((0,0)\) sans tourner ✓`],
      S`minimum \((1,-1)\); points d'inflexion \((0,0)\), \(\left(\tfrac23,-\tfrac{16}{27}\right)\approx(0.67,-0.59)\); tangente horizontale mais aucun extremum en 0`,
      plane({ view: { xmin: -1, xmax: 1.8, ymin: -1.5, ymax: 2 }, curves: [{ f: (x) => 3 * x ** 4 - 4 * x ** 3, color: "violet" }], points: [{ x: 1, y: -1, label: "min (1, −1)", color: "blue" }, { x: 0, y: 0, label: "(0, 0)", color: "violet" }, { x: 2 / 3, y: -16 / 27, label: "inflexion", color: "violet" }, { x: 4 / 3, y: 0, label: "(4/3, 0)", color: "amber" }], step: { x: 0.25, y: 0.5 } })],
    ["Une fonction rationnelle avec un dénominateur au carré", S`Esquisse \(f(x)=\dfrac{2x}{(x-1)^2}\).`,
      [S`<b>Asymptotes et intersection.</b> Le dénominateur vaut 0 en \(x=1\) (numérateur 2) : asymptote verticale \(x=1\). Près de 1, le numérateur vaut environ 2 et \((x-1)^2\) est un très petit nombre <em>positif</em>, donc \(f\to+\infty\) des deux côtés. Le degré du dénominateur est plus élevé : \(y=0\). Intersection \((0,0)\).`,
        S`<b>Dérivée première.</b> \(f'(x)=\dfrac{2(x-1)^2-2x\cdot2(x-1)}{(x-1)^4}=\dfrac{2(x-1)-4x}{(x-1)^3}=\dfrac{-2(x+1)}{(x-1)^3}\). ${chart({ cuts: [[-1, "-1"], [1, "1"]], undef: [1], d: ["f'(x)", (x) => (-2 * (x + 1)) / (x - 1) ** 3] })} \(f(-1)=\dfrac{-2}{4}=-\tfrac12\) : minimum relatif.`,
        S`<b>Dérivée seconde.</b> \(f''(x)=\dfrac{4(x+2)}{(x-1)^4}\). ${chart({ kind: "conc", cuts: [[-2, "-2"], [1, "1"]], undef: [1], d: ["f''(x)", (x) => (4 * (x + 2)) / (x - 1) ** 4] })} Point d'inflexion \(\left(-2,-\tfrac49\right)\).`,
        S`<b>Assemble le tout.</b> Depuis la gauche, la courbe descend en s'éloignant de juste sous \(y=0\), en se courbant vers le bas, passe à une tasse en \(x=-2\), atteint son creux en \(\left(-1,-\tfrac12\right)\), puis remonte en passant par \((0,0)\) le long de l'asymptote. À droite, elle descend de \(+\infty\) vers \(y=0\).`,
        S`<b>Vérifie.</b> \(f(3)=\tfrac{6}{4}=1.5\gt0\) et \(f(10)=\tfrac{20}{81}\approx0.25\) : positives et de plus en plus proches de 0 ✓`],
      S`minimum \((-1,-0.5)\); inflexion \(\left(-2,-\tfrac49\right)\); asymptote verticale \(x=1\) (vers le haut des deux côtés); asymptote horizontale \(y=0\)`,
      plane({ view: VR, curves: rat((x) => (2 * x) / (x - 1) ** 2, [1], VR), vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: -1, y: -0.5, label: "min (−1, −½)", color: "blue" }, { x: -2, y: -4 / 9, label: "inflexion", color: "violet" }, { x: 0, y: 0, label: "(0, 0)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une esquisse à partir de conditions", S`Esquisse une fonction telle que \(f(0)=2\), \(f'(-2)=f'(1)=0\), \(f'\gt0\) seulement sur \((-2,1)\), \(f''\gt0\) pour \(x\lt-\tfrac12\) et \(f''\lt0\) pour \(x\gt-\tfrac12\).`,
      [S`<b>Traduis chaque condition.</b> \(f'\gt0\) seulement sur \((-2,1)\) : la fonction y monte et descend ailleurs. Donc \(x=-2\) (\(-\to+\)) est un min. relatif et \(x=1\) (\(+\to-\)) un max. relatif.`,
        S`<b>Concavité.</b> \(f''\gt0\) à gauche de \(-\tfrac12\) (tasse) et \(f''\lt0\) à sa droite (chapeau) : inflexion en \(x=-\tfrac12\). Elle se trouve entre le min et le max, comme prévu.`,
        S`<b>Une fonction qui convient.</b> Choisis \(f'(x)=-6(x+2)(x-1)=-6x^2-6x+12\), négative à l'extérieur de \((-2,1)\). Applique la règle de la puissance à l'envers : \(f(x)=-2x^3-3x^2+12x+C\), et \(f(0)=2\) donne \(C=2\).`,
        S`<b>Vérifie chaque condition.</b> ${chart({ cuts: [[-2, "-2"], [1, "1"]], d: ["f'(x)", (x) => -6 * x * x - 6 * x + 12] })} ${chart({ kind: "conc", cuts: [[-0.5, "-\\tfrac12"]], d: ["f''(x)", (x) => -12 * x - 6] })}`,
        S`<b>Points clés.</b> \(f(-2)=16-12-24+2=-18\), \(f(1)=-2-3+12+2=9\), \(f\left(-\tfrac12\right)=-4.5\), et \(f(0)=2\) ✓`],
      S`min en \(x=-2\), max en \(x=1\), inflexion en \(x=-0.5\), passant par \((0,2)\); par exemple \(f(x)=-2x^3-3x^2+12x+2\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -22, ymax: 14 }, curves: [{ f: (x) => -2 * x ** 3 - 3 * x * x + 12 * x + 2, color: "violet" }], points: [{ x: -2, y: -18, label: "min (−2, −18)", color: "blue" }, { x: 1, y: 9, label: "max (1, 9)", color: "red" }, { x: -0.5, y: -4.5, label: "inflexion", color: "violet" }, { x: 0, y: 2, label: "(0, 2)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Associer f, f′ et f″", S`Les graphiques A (violet), B (bleu) et C (ambre) représentent une fonction, sa dérivée et sa dérivée seconde. Lequel est lequel?`,
      [S`<b>Fait clé.</b> Là où une fonction a une tangente horizontale (un changement de direction), sa dérivée vaut 0. Là où elle monte, la dérivée est positive. Les zéros de \(f'\) sont donc alignés avec les changements de direction de \(f\), et les zéros de \(f''\) avec ceux de \(f'\).`,
        S`<b>Degrés.</b> A est une fonction cubique, B une parabole et C une droite. Dériver abaisse le degré de 1, donc l'ordre devrait être A → B → C.`,
        S`<b>Teste A → B.</b> A change de direction en \(x\approx\pm1.4\). B coupe l'axe exactement à ces endroits (\(x=\pm\sqrt2\)). Là où A monte (\(|x|\gt\sqrt2\)), B est au-dessus de l'axe ✓`,
        S`<b>Teste B → C.</b> Le sommet de B est en \(x=0\), là où C coupe 0. B descend pour \(x\lt0\), là où C est négative ✓. C = 0 est aussi l'endroit où A change de concavité ✓`,
        S`<b>Confirme avec les formules.</b> \(f(x)=x^3-6x\), \(f'(x)=3x^2-6\), \(f''(x)=6x\) correspondent aux trois graphiques ✓`],
      S`A est \(f\), B est \(f'\), C est \(f''\) (ici \(f(x)=x^3-6x\))`,
      plane({ view: { xmin: -3.2, xmax: 3.2, ymin: -8, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x, color: "violet" }, { f: (x) => 3 * x * x - 6, color: "blue" }, { f: (x) => 6 * x, color: "amber" }], points: [{ x: -Math.sqrt(2), y: 0, color: "blue" }, { x: Math.sqrt(2), y: 0, color: "blue" }, { x: 0, y: 0, color: "amber" }], vlines: [{ x: -Math.sqrt(2), color: "gray", dash: true }, { x: Math.sqrt(2), color: "gray", dash: true }], step: { x: 1, y: 2 } }, "Gris pointillé : les changements de direction de A sont alignés avec les zéros de B.")],
  ]),

  practice([
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(f(x)=x^4-3x^3+2x-7\).`, num(-7),
      "Remplace x par 0.", [S`\(f(0)=-7\).`], S`\(-7\)`),
    q("extremums", S`Combien d'extremums relatifs \(f(x)=x^4-2x^2+5\) a-t-elle?`, num(3),
      "f′(x) = 4x(x − 1)(x + 1).", [S`Changements de signe en \(-1,0,1\).`], S`\(3\)`),
    q("symétrie", S`Quelle symétrie \(f(x)=x^4-5x^2\) a-t-elle?`, choice(["symétrique par rapport à l'axe des y (paire)", "symétrique par rapport à l'origine (impaire)", "les deux", "aucune"], 0),
      "Compare f(−x) et f(x).", [S`\(f(-x)=f(x)\).`], "paire"),
    q("inflexion", S`En quelle valeur de \(x\) la fonction \(f(x)=x^3+6x^2\) a-t-elle un point d'inflexion?`, num(-2),
      "f″(x) = 6x + 12.", [S`\(6x+12=0\).`], S`\(-2\)`),
    q("comportement aux extrémités", S`Décris le comportement aux extrémités de \(f(x)=-2x^5+x\).`, choice(["monte vers la gauche, descend vers la droite", "descend vers la gauche, monte vers la droite", "monte aux deux extrémités", "descend aux deux extrémités"], 0),
      "Terme dominant −2x⁵.", [S`Degré impair, coefficient dominant négatif.`], "vers le haut à gauche, vers le bas à droite"),
  ]),

  ...hard([
    ["Une fonction du quatrième degré avec un nombre critique double", S`Esquisse \(f(x)=x^4-6x^2+8x\).`,
      [S`\(f'(x)=4x^3-12x+8=4(x-1)^2(x+2)\) : décroissante pour \(x\lt-2\), croissante pour \(x\gt-2\) (aucun changement de signe en 1); minimum \((-2,-24)\).`, S`\(f''(x)=12x^2-12\) : points d'inflexion \((-1,-13)\) et \((1,3)\).`, S`En \((1,3)\), la tangente est horizontale et la concavité change : un point d'inflexion à tangente horizontale.`],
      S`un minimum \((-2,-24)\); points d'inflexion \((-1,-13)\) et \((1,3)\), le second à tangente horizontale`,
      plane({ view: { xmin: -3.5, xmax: 2.5, ymin: -28, ymax: 14 }, curves: [{ f: (x) => x ** 4 - 6 * x * x + 8 * x, color: "violet" }], points: [{ x: -2, y: -24, label: "min (−2, −24)", color: "blue" }, { x: -1, y: -13, label: "inflexion", color: "violet" }, { x: 1, y: 3, label: "inflexion à tangente horizontale (1, 3)", color: "violet" }], step: { x: 0.5, y: 4 } })],
    ["Une fonction rationnelle avec une asymptote oblique", S`Esquisse \(f(x)=\dfrac{x^2}{x+3}\).`,
      [S`Divise : \(f(x)=x-3+\dfrac{9}{x+3}\); asymptote verticale \(x=-3\), asymptote oblique \(y=x-3\).`, S`\(f'(x)=1-\dfrac{9}{(x+3)^2}=0\Rightarrow x=0\) ou \(x=-6\) : minimum \((0,0)\), maximum \((-6,-12)\).`, S`\(f''(x)=\dfrac{18}{(x+3)^3}\) : concave vers le bas pour \(x\lt-3\), vers le haut pour \(x\gt-3\).`],
      S`max \((-6,-12)\), min \((0,0)\); asymptotes \(x=-3\) et \(y=x-3\)`,
      plane({ view: VS, curves: rat((x) => (x * x) / (x + 3), [-3], VS), vlines: [{ x: -3, color: "red", dash: true }], lines: [{ m: 1, b: -3, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "min (0, 0)", color: "blue" }, { x: -6, y: -12, label: "max (−6, −12)", color: "red" }], step: { x: 1, y: 2 } })],
  ], [
    q("difficile", S`Combien d'extremums relatifs \(f(x)=3x^4-8x^3+6x^2\) a-t-elle?`, num(1),
      "f′(x) = 12x(x − 1)².", [S`Seul \(x=0\) donne un changement de signe.`], S`\(1\)`),
    q("difficile", S`Combien de points d'inflexion \(f(x)=\dfrac{x}{x^2-4}\) a-t-elle?`, num(1),
      "f″(x) = 2x(x² + 12)/(x² − 4)³.", [S`Le numérateur ne s'annule qu'en 0, et le signe y change.`], S`\(1\)`),
    q("difficile", S`Trouve la valeur du maximum relatif de \(f(x)=x^3-3x^2-5\).`, num(-5),
      "f′(x) = 3x(x − 2); + puis − en 0.", [S`\(f(0)=-5\).`], S`\(-5\)`),
  ]),

  wrapUp({
    qas: [
      ["Ai-je toujours besoin de chaque étape?", "Énumère-les toutes; certaines seront rapides (aucune asymptote pour un polynôme, aucune symétrie pour la plupart des fonctions), mais c'est en sautant une étape qu'on oublie des caractéristiques."],
      ["Et si je ne trouve pas les zéros exactement?", "Estime-les à l'aide de la table de valeurs ou du théorème des valeurs intermédiaires; les points critiques comptent davantage pour la forme."],
      ["Quelle précision une esquisse exige-t-elle?", "Les points clés étiquetés et bien placés, et la bonne forme entre eux; elle n'a pas à être à l'échelle."],
      ["Comment distinguer f, f′ et f″?", "Les zéros de chaque graphique sont alignés avec les tangentes horizontales du graphique qui le précède dans la chaîne f → f′ → f″."],
      ["Qu'est-ce qu'un point d'inflexion à tangente horizontale?", "Un point à tangente horizontale où la concavité change, comme x³ en 0 — un point critique qui n'est pas un extremum."],
    ],
    summary: [
      "Domaine → intersections → comportement aux extrémités → f′ → f″ → esquisse.",
      "Un seul tableau récapitulatif pour tous les signes.",
      "Étiquette chaque point clé.",
      "Zéros de f′ ↔ tangentes horizontales de f.",
    ],
    next: "La section 3.6 utilise les maximums et les minimums pour résoudre des problèmes d'optimisation.",
  }),
];
