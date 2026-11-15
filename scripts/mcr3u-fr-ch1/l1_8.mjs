// MCR3U-FR 1.8 — Combiner des transformations : y = af(k(x − c)) + d, ordre, mise en évidence de k, domaine et image,
// équations à partir de descriptions. Miroir de ../mcr3u-ch1/l1_8.mjs (c horizontal, d vertical en français).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.8 Combiner des transformations";
export const ID = lessonId(1, 8);

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Combiner des transformations",
    overview: String.raw`Maintenant, les quatre paramètres agissent ensemble : \(y=af(k(x-c))+d\). Dans cette leçon, tu vas les appliquer dans le bon ordre avec une seule règle de correspondance \((x,y)\to\left(\frac xk+c,\ ay+d\right)\), factoriser des expressions comme \(f(2x-6)\) en \(f(2(x-3))\) avant de lire \(c\), esquisser le résultat à partir des points clés, donner le domaine et l'image, et écrire une équation à partir d'une description ou d'un graphique.`,
    goals: [
      "repérer a, k, c et d dans y = af(k(x − c)) + d (en mettant d'abord k en évidence);",
      "appliquer la correspondance (x, y) → (x/k + c, ay + d);",
      "esquisser la fonction transformée et donner son domaine et son image;",
      "écrire l'équation à partir d'une liste de transformations;",
      "passer du domaine et de l'image de f à ceux de l'image transformée.",
    ],
    curriculum: "A1.8–A1.9 (rôles de a, k, c et d dans y = af(k(x − c)) + d; esquisser des graphiques en appliquant une ou plusieurs transformations à f(x) = x, x², √x, 1/x et donner le domaine et l'image)",
    prior: [
      [String.raw`Factorise \(3x-12\).`, String.raw`\(3(x-4)\).`],
      [String.raw`Par \(y=f(2x)\), où va le point \((8,1)\)?`, String.raw`\((4,1)\).`],
      [String.raw`Par \(y=3f(x)-1\), où va le point \((2,5)\)?`, String.raw`\((2,14)\).`],
    ],
    words: [
      ["a", "étirement ou compression vertical; a < 0 produit une réflexion par rapport à l'axe des x", ""],
      ["k", "étirement ou compression horizontal de facteur 1/|k|; k < 0 produit une réflexion par rapport à l'axe des y", ""],
      ["c", "translation horizontale", ""],
      ["d", "translation verticale", ""],
      ["Ordre", "les étirements et les réflexions d'abord, les translations en dernier", ""],
    ],
  }),

  section("📌 Une seule règle pour chaque point", String.raw`
  <p>Pour \(y=af(k(x-c))+d\), chaque point \((x,y)\) de \(y=f(x)\) devient</p>
  <p style="text-align:center;font-size:1.15em;">\(\left(\dfrac xk+c,\ \ ay+d\right)\)</p>
  <p>À l'intérieur de la parenthèse, les opérations agissent sur \(x\) et sont <em>annulées</em> dans l'ordre inverse (diviser par \(k\), additionner \(c\)); à l'extérieur, elles agissent directement sur \(y\) (multiplier par \(a\), additionner \(d\)).</p>
  ${keyIdea(String.raw`Mets toujours \(k\) en évidence d'abord : \(f(2x-6)=f(2(x-3))\), donc \(c=3\), et non 6. Ensuite : les étirements et les réflexions, puis les translations.`)}`),

  section("📌 Explore", String.raw`<p>Tous les paramètres sont actifs. Reproduis un des exemples ci-dessous, puis vérifie les points images du tableau à l'aide de la règle de correspondance.</p>`),

  widget("funcTransform", { parent: "sqrt", show: ["a", "k", "d", "c"], init: { a: 2, k: -1, d: 1, c: 3 } }),

  section("📌 Un exemple complet", String.raw`
  <p>\(y=-(2x+6)^2+5=-\left(2(x+3)\right)^2+5\) : \(a=-1\), \(k=2\), \(c=-3\), \(d=5\).</p>
  ${table(["\\(x^2\\) : (x, y)", "(−2, 4)", "(−1, 1)", "(0, 0)", "(1, 1)", "(2, 4)"], [["\\(\\left(\\tfrac x2-3,\\ -y+5\\right)\\)", "(−4, 1)", "(−3.5, 4)", "(−3, 5)", "(−2.5, 4)", "(−2, 1)"]])}
  ${plane({ view: { xmin: -7, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => -((2 * x + 6) ** 2) + 5, color: "violet" }], points: [{ x: -3, y: 5, label: "(−3, 5)" }, { x: -4, y: 1, label: "(−4, 1)" }, { x: -2, y: 1, label: "(−2, 1)" }, { x: -3.5, y: 4 }, { x: -2.5, y: 4 }], step: { x: 1, y: 1 } }, "y = −(2x + 6)² + 5 : plus étroite, retournée, sommet (−3, 5)")}
  ${watchOut([
    "f(2x − 6) N'est PAS une translation de 6 : factorise d'abord pour obtenir 2(x − 3).",
    "Translate en dernier. Étirer après avoir translaté place le sommet au mauvais endroit.",
    "Une réflexion par rapport à l'axe des y (k < 0) fait passer le domaine de √x à gauche de c.",
    "Vérifie un point image en le substituant dans l'équation finale.",
  ])}`),

  examples([
    ["Racine carrée avec tous les paramètres", S`Esquisse \(y=2\sqrt{-(x-1)}+3\) et donne le domaine et l'image.`,
      [S`<b>Lis les paramètres.</b> \(a=2\) : étirement vertical de facteur 2. \(k=-1\) : réflexion par rapport à l'axe des y. \(c=1\) : 1 vers la droite. \(d=3\) : 3 vers le haut.`,
        S`<b>Règle de correspondance.</b> \((x,y)\to\left(\frac xk+c,\ ay+d\right)=(-x+1,\ 2y+3)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=\\sqrt x\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((4,2)\\)", "\\((9,3)\\)"], ["image", "\\((1,3)\\)", "\\((0,5)\\)", "\\((-3,7)\\)", "\\((-8,9)\\)"])}`,
        S`<b>Domaine et image.</b> Le radicande exige \(-(x-1)\ge0\), donc \(x\le1\). Le point de départ est \((1,3)\), et \(a>0\) envoie la courbe vers le haut, donc \(y\ge3\).`,
        S`<b>Vérifie.</b> En \(x=-3\) : \(2\sqrt4+3=7\) ✓`],
      S`domaine \(\{x\in\mathbb R\mid x\le1\}\), image \(\{y\in\mathbb R\mid y\ge3\}\)`,
      plane({ view: { xmin: -9, xmax: 3, ymin: -1, ymax: 11 }, curves: [{ f: (x) => 2 * Math.sqrt(-(x - 1)) + 3, b: 1, color: "green" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 0, y: 5, label: "(0, 5)" }, { x: -3, y: 7, label: "(−3, 7)" }, { x: -8, y: 9, label: "(−8, 9)" }], step: { x: 1, y: 1 } })],
    ["Mettre k en évidence d'abord", S`Repère les transformations de \(y=-(2x+6)^2+5\).`,
      [S`<b>Factorise la parenthèse.</b> La forme exige \(k(x-c)\); mets donc en évidence le coefficient de \(x\) : \(2x+6=2(x+3)\). Alors \(k=2\) et \(c=-3\). Lire \(c=-6\) serait une erreur.`,
        S`<b>Énumère toutes les transformations.</b> \(k=2\) : compression horizontale de facteur \(\tfrac12\). \(a=-1\) : réflexion par rapport à l'axe des x. \(c=-3\) : 3 vers la gauche. \(d=5\) : 5 vers le haut.`,
        S`<b>Transforme les points clés.</b> La règle est \((x,y)\to\left(\frac x2-3,\ -y+5\right)\). ${tv(["\\(y=x^2\\)", "\\((-2,4)\\)", "\\((-1,1)\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((2,4)\\)"], ["image", "\\((-4,1)\\)", "\\((-3.5,4)\\)", "\\((-3,5)\\)", "\\((-2.5,4)\\)", "\\((-2,1)\\)"])}`,
        S`<b>Vérifie.</b> En \(x=-2\) : \(-(-4+6)^2+5=-4+5=1\) ✓. Le sommet est là où la parenthèse vaut 0, en \(x=-3\) ✓`],
      S`compression horizontale de facteur \(\tfrac12\), réflexion par rapport à l'axe des x, puis 3 vers la gauche et 5 vers le haut; sommet \((-3,5)\)`,
      plane({ view: { xmin: -7, xmax: 1, ymin: -2, ymax: 7 }, curves: [{ f: (x) => -((2 * x + 6) ** 2) + 5, color: "violet" }], points: [{ x: -3, y: 5, label: "(−3, 5)", color: "amber" }, { x: -2, y: 1, label: "(−2, 1)" }, { x: -4, y: 1, label: "(−4, 1)" }, { x: -2.5, y: 4 }, { x: -3.5, y: 4 }], step: { x: 1, y: 1 } })],
    ["Valeur absolue", S`Transforme les points clés de \(|x|\) par \(y=3\left|\tfrac12(x+2)\right|-4\).`,
      [S`<b>Lis les paramètres.</b> \(a=3\), \(k=\tfrac12\), \(c=-2\), \(d=-4\).`,
        S`<b>Règle de correspondance.</b> Diviser par \(k=\tfrac12\) double \(x\) : \((x,y)\to(2x-2,\ 3y-4)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=|x|\\)", "\\((-2,2)\\)", "\\((0,0)\\)", "\\((2,2)\\)"], ["image", "\\((-6,2)\\)", "\\((-2,-4)\\)", "\\((2,2)\\)"])}`,
        S`<b>Image.</b> Le sommet \((-2,-4)\) est le point le plus bas, puisque \(a>0\). Donc \(y\ge-4\).`,
        S`<b>Vérifie.</b> En \(x=2\) : \(3\left|\tfrac12(4)\right|-4=6-4=2\) ✓. En \(x=-6\) : \(3|-2|-4=2\) ✓`],
      S`sommet \((-2,-4)\), passant par \((-6,2)\) et \((2,2)\); image \(y\ge-4\)`,
      plane({ view: { xmin: -8, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 3 * Math.abs(0.5 * (x + 2)) - 4, color: "amber" }], points: [{ x: -2, y: -4, label: "(−2, −4)" }, { x: -6, y: 2, label: "(−6, 2)" }, { x: 2, y: 2, label: "(2, 2)" }], step: { x: 1, y: 1 } })],
    ["Fonction inverse", S`Esquisse \(y=\frac{-2}{x+1}+3\).`,
      [S`<b>Lis les paramètres.</b> \(a=-2\) : étirement vertical de facteur 2 et réflexion par rapport à l'axe des x. \(c=-1\) : 1 vers la gauche. \(d=3\) : 3 vers le haut.`,
        S`<b>Asymptotes.</b> Le dénominateur vaut 0 en \(x=-1\), donc l'asymptote verticale est \(x=-1\). La fraction ne vaut jamais 0, donc \(y\ne3\), et \(y=3\) est l'asymptote horizontale.`,
        S`<b>Règle de correspondance.</b> \((x,y)\to(x-1,\ -2y+3)\). ${tv(["\\(y=\\frac1x\\)", "\\((-1,-1)\\)", "\\((1,1)\\)", "\\((2,\\frac12)\\)"], ["image", "\\((-2,5)\\)", "\\((0,1)\\)", "\\((1,2)\\)"])}`,
        S`<b>Où vont les branches.</b> La réflexion les place en haut à gauche et en bas à droite des asymptotes.`,
        S`<b>Vérifie.</b> En \(x=0\) : \(-2+3=1\) ✓. En \(x=-2\) : \(\frac{-2}{-1}+3=5\) ✓`],
      S`branches en haut à gauche et en bas à droite des asymptotes; domaine \(x\ne-1\), image \(y\ne3\)`,
      plane({ view: { xmin: -7, xmax: 5, ymin: -3, ymax: 9 }, curves: [{ f: (x) => -2 / (x + 1) + 3, color: "red" }], vlines: [{ x: -1, color: "gray", dash: true }], lines: [{ m: 0, b: 3, color: "gray", dash: true }], points: [{ x: 0, y: 1, label: "(0, 1)" }, { x: -2, y: 5, label: "(−2, 5)" }, { x: 1, y: 2 }], step: { x: 1, y: 1 } })],
    ["À partir d'une description", S`\(y=\sqrt x\) subit une compression horizontale de facteur \(\tfrac13\), une réflexion par rapport à l'axe des x, puis une translation de 4 vers la droite et de 2 vers le haut. Écris l'équation et donne le domaine et l'image.`,
      [S`<b>Traduis les mots en paramètres.</b> Une compression de facteur \(\tfrac13\) signifie \(k=3\), puisque \(\frac xk=\frac x3\). Une réflexion par rapport à l'axe des x signifie \(a=-1\). Les translations donnent \(c=4\) et \(d=2\).`,
        S`<b>Substitue dans</b> \(y=a\sqrt{k(x-c)}+d\) : \(y=-\sqrt{3(x-4)}+2\). Le 3 multiplie toute la parenthèse.`,
        S`<b>Domaine.</b> \(3(x-4)\ge0\) donne \(x\ge4\).`,
        S`<b>Image.</b> La racine vaut au moins 0, donc \(-\sqrt{\ }\) vaut au plus 0, et en ajoutant 2, on obtient \(y\le2\).`,
        S`<b>Vérifie par correspondance.</b> \((x,y)\to\left(\frac x3+4,\ -y+2\right)\) : \((9,3)\to(7,-1)\). L'équation donne \(-\sqrt9+2=-1\) en \(x=7\) ✓`],
      S`\(y=-\sqrt{3(x-4)}+2\); domaine \(x\ge4\), image \(y\le2\)`,
      plane({ view: { xmin: 2, xmax: 10, ymin: -3, ymax: 4 }, curves: [{ f: (x) => -Math.sqrt(3 * (x - 4)) + 2, a: 4, color: "violet" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "amber" }, { x: 16 / 3, y: 0, label: "(5.33, 0)" }, { x: 7, y: -1, label: "(7, −1)" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("transformer x", String.raw`\(y=3f(2(x-1))+4\). Quelle est l'abscisse de l'image de \((6,-2)\)?`, num(4),
      "x/k + c.", [String.raw`\(\frac62+1\).`], String.raw`\(4\)`),
    q("transformer y", String.raw`\(y=3f(2(x-1))+4\). Quelle est l'ordonnée de l'image de \((-4,5)\)?`, num(19),
      "ay + d.", [String.raw`\(3(5)+4\).`], String.raw`\(19\)`),
    q("image", String.raw`L'image de \(y=-2\sqrt{x+5}+1\) est \(y\le m\). Trouve \(m\).`, num(1),
      "a < 0 retourne la racine vers le bas à partir de son point de départ.", [String.raw`Point de départ \((-5,1)\).`], String.raw`\(1\)`),
    q("mettre k en évidence", String.raw`Écris \(y=(4x-8)^2\) sous la forme \(y=(k(x-c))^2\). Que vaut \(c\)?`, num(2),
      "Mets 4 en évidence dans 4x − 8.", [String.raw`\(4x-8=4(x-2)\).`], String.raw`\(2\)`),
    q("ordre", "Dans quel ordre faut-il appliquer les transformations?", choice(["les étirements et les réflexions, puis les translations", "les translations, puis les étirements", "n'importe quel ordre donne le même graphique", "l'horizontale, puis la verticale"], 0),
      "Pense à la correspondance (x/k + c, ay + d).", ["Multiplier ou diviser d'abord, additionner en dernier."], "les étirements et les réflexions, puis les translations"),
  ]),

  ...hard([
    ["Réécrire avant de tracer", String.raw`Trace \(y=-\sqrt{6-2x}+1\) en l'écrivant d'abord sous la forme \(y=af(k(x-c))+d\).`,
      [String.raw`\(6-2x=-2(x-3)\), donc \(y=-\sqrt{-2(x-3)}+1\) : \(a=-1\), \(k=-2\), \(c=3\), \(d=1\).`, String.raw`\((x,y)\to\left(-\tfrac x2+3,\ -y+1\right)\) : \((0,0)\to(3,1)\), \((4,2)\to(1,-1)\), \((16,4)\to(-5,-3)\).`, String.raw`Vérifie \((1,-1)\) : \(-\sqrt{6-2}+1=-1\) ✓.`],
      String.raw`domaine \(x\le3\), image \(y\le1\)`,
      plane({ view: { xmin: -7, xmax: 5, ymin: -5, ymax: 3 }, curves: [{ f: (x) => -Math.sqrt(6 - 2 * x) + 1, b: 3, color: "green" }], points: [{ x: 3, y: 1, label: "(3, 1)" }, { x: 1, y: -1, label: "(1, −1)" }, { x: -5, y: -3, label: "(−5, −3)" }], step: { x: 1, y: 1 } })],
    ["Domaine et image sans formule", String.raw`\(f\) a pour domaine \(-2\le x\le6\) et pour image \(1\le y\le9\). Trouve le domaine et l'image de \(g(x)=-3f\left(\tfrac12(x+4)\right)-2\).`,
      [String.raw`Valeurs de x : \(\frac{x}{1/2}-4=2x-4\) : \(-2\to-8\), \(6\to8\).`, String.raw`Valeurs de y : \(-3y-2\) : \(1\to-5\), \(9\to-29\) (l'ordre s'inverse).`],
      String.raw`domaine \(-8\le x\le8\), image \(-29\le y\le-5\)`],
  ], [
    q("difficile", String.raw`\(f\) a pour domaine \(-3\le x\le5\). Le domaine de \(y=f(2x+6)\) commence en \(x=p\). Trouve \(p\).`, num(-4.5),
      "Factorise : f(2(x + 3)); puis x/2 − 3.", [String.raw`\(\frac{-3}{2}-3=-4.5\), \(\frac52-3=-0.5\).`], String.raw`\(-4.5\)`),
    q("difficile", String.raw`\(f\) a pour image \(-1\le y\le4\). Quelle est la plus grande valeur de l'image de \(g(x)=-2f(x-1)+3\)?`, num(5),
      "Applique −2y + 3 aux deux extrémités.", [String.raw`\(-2(-1)+3=5\), \(-2(4)+3=-5\).`], String.raw`\(5\)`),
    q("difficile", String.raw`Le point \((9,3)\) de \(y=\sqrt x\) correspond à quelle abscisse sur \(y=-\sqrt{4x-12}+3\)?`, num(5.25),
      "Factorise 4x − 12 = 4(x − 3).", [String.raw`\(\frac94+3=5.25\); vérifie : \(-\sqrt{21-12}+3=0\).`], String.raw`\(5.25\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi faut-il mettre k en évidence?", "c est la translation horizontale de toute l'entrée. Dans f(2x − 6), la translation est de 3, car 2x − 6 = 0 lorsque x = 3."],
      ["L'ordre de a et de k importe-t-il?", "Non — l'un agit sur y et l'autre sur x. Ce qui compte, c'est de faire les deux avant les translations."],
      ["Comment vérifier mon esquisse?", "Substitue un point image dans l'équation. Si cela fonctionne, la correspondance était correcte."],
      ["Des équations différentes peuvent-elles donner le même graphique?", "Oui. Pour x², (2x)² = 4x²; pour |x|, |−x| = |x|. Les descriptions diffèrent, mais les graphiques concordent."],
      ["Que dois-je indiquer à la fin?", "L'équation ou l'esquisse, les points clés, ainsi que le domaine et l'image (y compris les asymptotes pour 1/x)."],
    ],
    summary: [
      "y = af(k(x − c)) + d : (x, y) → (x/k + c, ay + d).",
      "Mets k en évidence dans la parenthèse avant de lire c.",
      "Les étirements et les réflexions d'abord; les translations en dernier.",
      "Le domaine provient de x/k + c; l'image, de ay + d.",
    ],
    next: "La section 1.9 révise tout le chapitre.",
  }),
];
