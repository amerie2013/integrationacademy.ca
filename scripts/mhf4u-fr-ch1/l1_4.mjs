// MHF4U-FR 1.4 — Transformations des fonctions puissance : y = a(k(x − c))ⁿ + d pour y = x³ et y = x⁴, la règle de
// correspondance, la mise en évidence de k, et les équations à partir de descriptions et de graphiques.
// NOTATION FRANÇAISE : c = translation horizontale, d = translation verticale (l'anglais utilise l'inverse).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.4 Transformations des fonctions puissance";
export const ID = lessonId(1, 4);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Transformations des fonctions puissance",
    overview: S`Les quatre mêmes paramètres que tu as utilisés en 11<sup>e</sup> année s'appliquent aux fonctions puissance cubique et quartique : \(y=a\left(k(x-c)\right)^n+d\). Chaque point \((x,y)\) de \(y=x^n\) devient \(\left(\frac xk+c,\ ay+d\right)\). Dans cette leçon, tu vas décrire les transformations, trouver les images des points clés de \(y=x^3\) et \(y=x^4\), mettre \(k\) en évidence avant de lire \(c\), esquisser le résultat, et écrire l'équation à partir d'une description ou d'un graphique.`,
    goals: [
      "décrire le rôle de a, k, c et d dans y = a(k(x − c))ⁿ + d;",
      "trouver les images des points clés avec (x, y) → (x/k + c, ay + d);",
      "mettre k en évidence dans la parenthèse avant de lire c;",
      "esquisser des fonctions cubiques et quartiques transformées et donner leur domaine et leur image;",
      "écrire l'équation à partir d'une description ou d'un graphique.",
    ],
    curriculum: "C1.6 (rôle de a, k, c et d dans y = af(k(x − c)) + d appliqué à f(x) = x³ et x⁴; translations verticales et horizontales, réflexions, étirements et compressions)",
    prior: [
      [S`Factorise \(3x-12\).`, S`\(3(x-4)\).`],
      [S`Points clés de \(y=x^3\) pour \(x=-2\) à \(2\)?`, S`\((-2,-8),(-1,-1),(0,0),(1,1),(2,8)\).`],
      [S`Avec \(y=f(x-3)+2\), où va le point \((1,5)\)?`, S`\((4,7)\).`],
    ],
    words: [
      ["a", "étirement/compression vertical; a < 0 donne une réflexion par rapport à l'axe des x", ""],
      ["k", "étirement/compression horizontal de facteur 1/|k|; k < 0 donne une réflexion par rapport à l'axe des y", ""],
      ["c, d", "translations horizontale et verticale", ""],
      ["Point de symétrie", "pour x³, le centre (0, 0) devient (c, d)", ""],
      ["Sommet", "pour x⁴, le point le plus bas/haut devient (c, d)", ""],
    ],
  }),

  section("📌 La règle de correspondance", S`
  <p style="text-align:center;font-size:1.15em;">\((x,\ y)\ \longrightarrow\ \left(\dfrac xk+c,\ \ ay+d\right)\)</p>
  ${table(["\\(y=x^3\\)", "(−2, −8)", "(−1, −1)", "(0, 0)", "(1, 1)", "(2, 8)"], [["\\(y=x^4\\)", "(−2, 16)", "(−1, 1)", "(0, 0)", "(1, 1)", "(2, 16)"]])}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x ** 3, color: "gray" }, { f: (x) => 0.5 * (x - 2) ** 3 + 1, color: "violet" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "blue" }, { x: 0, y: -3, label: "(0, −3)", color: "red" }, { x: 4, y: 5, label: "(4, 5)", color: "red" }], step: { x: 1, y: 1 } }, "y = ½(x − 2)³ + 1 : compression verticale de facteur ½, puis 2 vers la droite et 1 vers le haut; centre (2, 1).")}
  ${keyIdea(S`Les étirements et les réflexions d'abord, les translations en dernier. Mets d'abord en évidence : \(y=(2x-6)^3=(2(x-3))^3\), donc \(k=2\) et \(c=3\). Pour \(y=x^3\), le point de symétrie \((0,0)\) devient \((c,d)\); pour \(y=x^4\), le sommet devient \((c,d)\), et l'image devient \(y\ge d\) (si \(a>0\)) ou \(y\le d\) (si \(a\lt0\)).`)}`),

  section("📌 Explore", S`<p>Choisis \(y=x^3\) ou \(y=x^4\) et déplace les quatre curseurs. Les points rouges sont les images des cinq points clés de la table sous le graphique.</p>`),

  // Widget props keep the widget's own semantics (prop d = horizontal shift, prop c = vertical shift),
  // so the starting graph is the same as in English: horizontal 1, vertical −3.
  widget("powerTransform", { init: { n: 3, a: 2, k: 1, d: 1, c: -3 } }),

  section("📌 Éviter les pièges fréquents", S`
  ${watchOut([
    "(x + 4) signifie 4 vers la GAUCHE.",
    "k = 3 comprime horizontalement de facteur 1/3; ce n'est pas un étirement.",
    "Lis c seulement après avoir mis k en évidence dans la parenthèse.",
    "Pour les puissances impaires, une réflexion par rapport à l'axe des y et une réflexion par rapport à l'axe des x donnent le même graphique : (−x)³ = −x³.",
    "Vérifie un point image dans l'équation finale.",
  ])}`),

  examples([
    ["Décrire les transformations", S`Décris \(y=-2(x-3)^3+1\) comme une suite de transformations de \(y=x^3\).`,
      [S`<b>Associer à la forme</b> \(y=a(k(x-c))^n+d\) : \(a=-2\), \(k=1\), \(c=3\), \(d=1\).`,
        S`<b>Changements verticaux.</b> \(a=-2\) multiplie chaque valeur de sortie par \(-2\) : un étirement de facteur 2 et une réflexion par rapport à l'axe des x.`,
        S`<b>Translations.</b> \(c=3\) déplace le graphique de 3 vers la droite, puisque la parenthèse vaut 0 en \(x=3\). \(d=1\) le déplace de 1 vers le haut. Le point de symétrie passe de \((0,0)\) à \((3,1)\).`,
        S`<b>Correspondance.</b> \((x,y)\to(x+3,\ -2y+1)\) : \((1,1)\to(4,-1)\) et \((-1,-1)\to(2,3)\).`,
        S`<b>Vérification.</b> En \(x=4\) : \(-2(1)^3+1=-1\) ✓`],
      S`étirement de facteur 2, réflexion par rapport à l'axe des x, puis 3 vers la droite et 1 vers le haut`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -8, ymax: 10 }, curves: [{ f: (x) => -2 * (x - 3) ** 3 + 1, color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 2, y: 3, label: "(2, 3)", color: "red" }, { x: 4, y: -1, label: "(4, −1)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Images des points clés d'une fonction quartique", S`Trouve les images des points clés de \(y=x^4\) pour \(y=\tfrac12(x+1)^4-3\) et donne l'image de la fonction.`,
      [S`<b>Lire l'équation.</b> \(a=\tfrac12\) comprime verticalement, \(c=-1\) déplace de 1 vers la gauche, \(d=-3\) déplace de 3 vers le bas.`,
        S`<b>Règle de correspondance.</b> \((x,y)\to\left(x-1,\ \tfrac12y-3\right)\).`,
        S`<b>Points clés.</b> ${tv(["\\(y=x^4\\)", "\\((-2,16)\\)", "\\((-1,1)\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((2,16)\\)"], ["image", "\\((-3,5)\\)", "\\((-2,-2.5)\\)", "\\((-1,-3)\\)", "\\((0,-2.5)\\)", "\\((1,5)\\)"])}`,
        S`<b>Image.</b> \(a>0\) et le degré est pair, donc le sommet \((-1,-3)\) est le point le plus bas : \(y\ge-3\).`,
        S`<b>Vérification.</b> En \(x=1\) : \(\tfrac12(16)-3=5\) ✓`],
      S`sommet \((-1,-3)\); image \(y\ge-3\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 0.5 * (x + 1) ** 4 - 3, color: "violet" }], points: [{ x: -1, y: -3, label: "(−1, −3)", color: "blue" }, { x: 0, y: -2.5, color: "red" }, { x: -2, y: -2.5, color: "red" }, { x: 1, y: 5, label: "(1, 5)", color: "red" }, { x: -3, y: 5, label: "(−3, 5)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Mettre k en évidence d'abord", S`Décris \(y=(2x-6)^3\) et trouve l'image de \((2,8)\).`,
      [S`<b>Mettre en évidence.</b> La forme exige \(k(x-c)\) : \(2x-6=2(x-3)\). Donc \(k=2\) et \(c=3\), et non 6.`,
        S`<b>Décrire.</b> \(k=2\) est une compression horizontale de facteur \(\tfrac12\). \(c=3\) est une translation de 3 vers la droite.`,
        S`<b>Correspondance.</b> \((x,y)\to\left(\frac x2+3,\ y\right)\).`,
        S`<b>Image.</b> \((2,8)\to(1+3,\ 8)=(4,8)\).`,
        S`<b>Vérification.</b> \((2(4)-6)^3=2^3=8\) ✓`],
      S`compression de facteur \(\tfrac12\), puis 3 vers la droite; \((2,8)\to(4,8)\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x ** 3, color: "gray" }, { f: (x) => (2 * x - 6) ** 3, color: "violet" }], points: [{ x: 2, y: 8, label: "(2, 8)", color: "gray" }, { x: 4, y: 8, label: "(4, 8)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)" }], step: { x: 1, y: 2 } }, "gris y = x³, violet y = (2x − 6)³")],
    ["À partir d'une description", S`On comprime \(y=x^3\) horizontalement de facteur \(\tfrac13\), on lui fait subir une réflexion par rapport à l'axe des x, puis une translation de 2 vers la gauche et de 5 vers le bas. Écris l'équation.`,
      [S`<b>Traduire chaque expression.</b> Une compression de facteur \(\tfrac13\) signifie \(k=3\). Une réflexion par rapport à l'axe des x signifie \(a=-1\). 2 vers la gauche signifie \(c=-2\). 5 vers le bas signifie \(d=-5\).`,
        S`<b>Remplacer.</b> \(y=a(k(x-c))^3+d=-\left(3(x+2)\right)^3-5\).`,
        S`<b>Vérification avec un point.</b> \((1,1)\to\left(\frac13-2,\ -1-5\right)=\left(-\frac53,\ -6\right)\). Dans l'équation : \(3\left(-\frac53+2\right)=1\), et \(-1-5=-6\) ✓`,
        S`<b>Vérification sur le graphique.</b> Le point de symétrie est en \((-2,-5)\), et la courbe descend de gauche à droite ✓`],
      S`\(y=-\left(3(x+2)\right)^3-5\)`,
      plane({ view: { xmin: -4, xmax: 0, ymin: -12, ymax: 2 }, curves: [{ f: (x) => -((3 * (x + 2)) ** 3) - 5, color: "violet" }], points: [{ x: -2, y: -5, label: "(−2, −5)", color: "amber" }, { x: -5 / 3, y: -6, label: "(−5/3, −6)" }, { x: -7 / 3, y: -4, label: "(−7/3, −4)" }], step: { x: 1, y: 2 } })],
    ["À partir d'un graphique", S`La fonction quartique illustrée a son sommet en \((2,-4)\) et passe par \((3,-2)\). Trouve son équation.`,
      [S`<b>Utiliser le sommet.</b> Le sommet de \(y=x^4\) devient \((2,-4)\), donc \(c=2\), \(d=-4\) : \(y=a(x-2)^4-4\).`,
        S`<b>Utiliser le point.</b> \((3,-2)\) : \(-2=a(1)^4-4\).`,
        S`<b>Résoudre.</b> \(a=2\). Il est positif, et la courbe est ouverte vers le haut ✓`,
        S`<b>Vérification par symétrie.</b> \((1,-2)\) devrait aussi être sur la courbe : \(2(-1)^4-4=-2\) ✓`],
      S`\(y=2(x-2)^4-4\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 2 * (x - 2) ** 4 - 4, color: "violet" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "blue" }, { x: 3, y: -2, label: "(3, −2)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("image en x", S`Pour \(y=3(x-2)^3+4\), quelle est l'abscisse de l'image de \((1,1)\)?`, num(3),
      "x + c.", [S`\(1+2=3\).`], S`\(3\)`),
    q("image en y", S`Pour \(y=3(x-2)^3+4\), quelle est l'ordonnée de l'image de \((1,1)\)?`, num(7),
      "ay + d.", [S`\(3(1)+4\).`], S`\(7\)`),
    q("sommet", S`Quelle est l'abscisse du sommet de \(y=-(x+5)^4+2\)?`, num(-5),
      "(x + 5) déplace vers la gauche.", [S`\(c=-5\).`], S`\(-5\)`),
    q("mettre k en évidence", S`Écris \(y=(4x+8)^3\) sous la forme \(y=(k(x-c))^3\). Que vaut \(c\)?`, num(-2),
      "Mets 4 en évidence.", [S`\(4x+8=4(x+2)\).`], S`\(-2\)`),
    q("image", S`L'image de \(y=-2(x-1)^4+6\) est \(y\le m\). Trouve \(m\).`, num(6),
      "a < 0 : le sommet est le point le plus haut.", [S`Sommet \((1,6)\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Réécrire avant de lire", S`Écris \(y=-(6-2x)^3+4\) sous la forme \(y=a(k(x-c))^3+d\), et donne une équation équivalente plus simple.`,
      [S`\(6-2x=-2(x-3)\), donc \(y=-\left(-2(x-3)\right)^3+4\) : \(a=-1\), \(k=-2\), \(c=3\), \(d=4\).`, S`\((-2(x-3))^3=-8(x-3)^3\), donc \(y=8(x-3)^3+4\).`, S`Vérification en \(x=4\) : \(-(6-8)^3+4=12\) et \(8(1)^3+4=12\) ✓.`],
      S`\(y=8(x-3)^3+4\) : centre \((3,4)\), étirement de facteur 8`,
      plane({ view: { xmin: 1, xmax: 5, ymin: -6, ymax: 14 }, curves: [{ f: (x) => -((6 - 2 * x) ** 3) + 4, color: "violet" }], points: [{ x: 3, y: 4, label: "(3, 4)", color: "blue" }, { x: 4, y: 12, label: "(4, 12)", color: "red" }, { x: 2, y: -4, label: "(2, −4)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Trouver deux paramètres", S`\(y=a(x-1)^3+d\) passe par \((2,5)\) et \((0,-1)\). Trouve \(a\) et \(d\).`,
      [S`\((2,5)\) : \(a+d=5\). \((0,-1)\) : \(-a+d=-1\).`, S`Additionne : \(2d=4\Rightarrow d=2\); alors \(a=3\).`],
      S`\(y=3(x-1)^3+2\)`],
  ], [
    q("difficile", S`Pour \(y=-0.5\left(2(x-1)\right)^4+3\), trouve l'ordonnée de l'image de \((2,16)\).`, num(-5),
      "ay + d.", [S`\(-0.5(16)+3\).`], S`\(-5\)`),
    q("difficile", S`Trouve \(d\) si \(y=(x-2)^3+d\) passe par \((4,3)\).`, num(-5),
      "Remplace.", [S`\(8+d=3\).`], S`\(-5\)`),
    q("difficile", S`Trouve \(a\) si \(y=a(x+1)^4-2\) passe par \((1,30)\).`, num(2),
      "Remplace.", [S`\(16a-2=30\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'intérieur de la parenthèse agit-il « à l'envers »?", "Pour obtenir la même sortie que la fonction de base en x, il faut défaire l'entrée : résous k(x − c) = X pour x, ce qui donne x = X/k + c."],
      ["L'ordre des transformations est-il important?", "Effectue les étirements et les réflexions avant les translations. a et k peuvent se faire dans n'importe quel ordre, car l'un agit sur y et l'autre sur x."],
      ["Pourquoi une réflexion par rapport à l'axe des y peut-elle ressembler à une réflexion par rapport à l'axe des x pour x³?", "Parce que (−x)³ = −x³ : les deux équations sont identiques. Pour x⁴, ce n'est pas le cas : (−x)⁴ = x⁴ laisse le graphique inchangé."],
      ["Comment trouver a à partir d'un graphique?", "Utilise le sommet ou le centre (c, d) pour les translations, puis remplace par un autre point pour trouver a."],
      ["Quels sont le domaine et l'image d'une fonction cubique transformée?", "Les deux sont l'ensemble des nombres réels. Pour une fonction quartique, l'image est y ≥ d (a > 0) ou y ≤ d (a < 0)."],
    ],
    summary: [
      "y = a(k(x − c))ⁿ + d : (x, y) → (x/k + c, ay + d).",
      "Mets k en évidence avant de lire c.",
      "Les étirements et les réflexions d'abord, les translations en dernier.",
      "Le centre (x³) ou le sommet (x⁴) devient (c, d).",
    ],
    next: "La leçon 1.5 mesure la rapidité avec laquelle une fonction varie : le taux de variation moyen et la pente des sécantes.",
  }),
];
