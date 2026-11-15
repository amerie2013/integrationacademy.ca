// MCR3U-FR 1.6 — Translations et étirements verticaux : y = af(k(x − c)) + d, avec la correspondance des points clés
// (x/k + c, ay + d). Miroir de ../mcr3u-ch1/l1_6.mjs (notation française : c horizontal, d vertical — lettres
// échangées par rapport à l'anglais; aucun nombre ne change).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.6 Translations et étirements verticaux";
export const ID = lessonId(1, 6);

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Translations et étirements verticaux",
    overview: String.raw`Chaque fonction de base peut être déplacée sur le quadrillage et étirée. Dans cette leçon, tu vas apprendre le rôle des quatre paramètres de \(y=af(k(x-c))+d\) : \(d\) déplace le graphique vers le haut ou vers le bas, \(c\) le déplace vers la gauche ou vers la droite, \(a\) l'étire, le comprime ou le retourne verticalement, et \(k\) l'étire, le comprime ou le retourne horizontalement. Tu vas tracer des graphiques en déplaçant des points clés avec \((x,y)\to\left(\frac xk+c,\ ay+d\right)\) et écrire des équations à partir de graphiques.`,
    goals: [
      "décrire l'effet de d et de c comme des translations verticale et horizontale;",
      "décrire l'effet de a comme un étirement vertical, une compression verticale et/ou une réflexion par rapport à l'axe des x;",
      "décrire l'effet de k comme un étirement horizontal, une compression horizontale et/ou une réflexion par rapport à l'axe des y;",
      "transformer des points clés avec (x, y) → (x/k + c, ay + d), après avoir mis k en évidence;",
      "esquisser des fonctions de base transformées et donner leur domaine et leur image;",
      "écrire une équation à partir d'un graphique ou d'une description.",
    ],
    curriculum: "A1.8 (rôles de a, k, c et d dans y = af(k(x − c)) + d pour f(x) = x, x², √x, 1/x, |x|), A1.9 (esquisser en appliquant des transformations et donner le domaine et l'image)",
    prior: [
      [String.raw`Nomme trois points clés de \(y=\sqrt x\).`, String.raw`\((0,0),(1,1),(4,2)\) (aussi \((9,3)\)).`],
      [String.raw`Où est le sommet de \(y=(x-4)^2\)?`, String.raw`\((4,0)\) — le signe moins signifie vers la droite.`],
      [String.raw`Quelles sont les asymptotes de \(y=\frac1x\)?`, String.raw`\(x=0\) et \(y=0\).`],
    ],
    words: [
      ["Translation", "un glissement : chaque point se déplace de la même distance dans la même direction", ""],
      ["Étirement vertical (|a| > 1)", "les valeurs de y sont multipliées par |a|; le graphique est plus haut", "\\(y=3x^2\\)"],
      ["Compression verticale (0 < |a| < 1)", "les valeurs de y se rapprochent de l'axe des x", "\\(y=\\tfrac12|x|\\)"],
      ["Réflexion par rapport à l'axe des x (a < 0)", "chaque valeur de y change de signe", "\\(y=-\\sqrt x\\)"],
      ["Compression horizontale (|k| > 1)", "les valeurs de x sont divisées par |k|; le graphique est resserré vers l'axe des y", "\\(y=\\sqrt{2x}\\)"],
      ["Étirement horizontal (0 < |k| < 1)", "les valeurs de x sont divisées par |k|, donc elles augmentent; le graphique s'éloigne de l'axe des y", "\\(y=\\left(\\tfrac13x\\right)^2\\)"],
      ["Réflexion par rapport à l'axe des y (k < 0)", "chaque valeur de x change de signe", "\\(y=\\sqrt{-x}\\)"],
      ["Notation de correspondance", "\\((x,y)\\to\\left(\\frac xk+c,\\ ay+d\\right)\\)", ""],
    ],
  }),

  section("📌 Le rôle de chaque paramètre", String.raw`
  ${table(["Dans y = af(k(x − c)) + d", "Effet sur le graphique", "Effet sur un point clé"], [
    ["\\(d>0\\) / \\(d<0\\)", "vers le haut de \\(d\\) / vers le bas de \\(|d|\\)", "\\(y\\to y+d\\)"],
    ["\\(c>0\\) / \\(c<0\\)", "vers la droite de \\(c\\) / vers la gauche de \\(|c|\\)", "\\(x\\to x+c\\)"],
    ["\\(|a|>1\\)", "étirement vertical de facteur \\(|a|\\)", "\\(y\\to ay\\)"],
    ["\\(0<|a|<1\\)", "compression verticale de facteur \\(|a|\\)", "\\(y\\to ay\\)"],
    ["\\(a<0\\)", "réflexion par rapport à l'axe des x", "y change de signe"],
    ["\\(|k|>1\\)", "compression horizontale de facteur \\(\\frac1{|k|}\\)", "\\(x\\to \\frac xk\\)"],
    ["\\(0<|k|<1\\)", "étirement horizontal de facteur \\(\\frac1{|k|}\\)", "\\(x\\to \\frac xk\\)"],
    ["\\(k<0\\)", "réflexion par rapport à l'axe des y", "x change de signe"],
  ])}
  ${keyIdea(String.raw`Chaque point \((x,y)\) de \(y=f(x)\) devient \(\left(\frac xk+c,\ ay+d\right)\). Effectue d'abord les étirements et les réflexions (divise x par \(k\), multiplie y par \(a\)), puis les translations (additionne \(c\) et \(d\)). Le signe dans la parenthèse est l'opposé du déplacement : \(f(x-3)\) se déplace de 3 vers la <strong>droite</strong>. Mets toujours \(k\) en évidence avant de lire \(c\) : \(f(2x-6)=f(2(x-3))\), donc \(c=3\), et non 6.`)}`),

  section("📌 Explore", String.raw`<p>Modifie \(a\), \(k\) et les deux translations pour chaque fonction de base. Compare les points clés gris de la fonction de base aux points images bleus du tableau, et vérifie chacun avec \(\left(\frac xk+c,\ ay+d\right)\). Remarque que \(k\) déplace les points seulement de côté et que \(a\) les déplace seulement vers le haut ou vers le bas.</p>`),

  widget("funcTransform", { parent: "sqrt", show: ["a", "k", "d", "c"], init: { a: 1, k: 1, d: 0, c: 0 } }),

  section("📌 Tracer à l'aide des points clés", String.raw`
  <p>Pour \(y=2\sqrt{x-1}+3\) (\(k=1\)) : étire les valeurs de y de la fonction de base par un facteur 2, puis déplace chaque point de 1 vers la droite et de 3 vers le haut.</p>
  ${table(["\\(\\sqrt x\\) : (x, y)", "(0, 0)", "(1, 1)", "(4, 2)", "(9, 3)"], [["\\((x+1,\\ 2y+3)\\)", "(1, 3)", "(2, 5)", "(5, 7)", "(10, 9)"]])}
  ${plane({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 11 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(x - 1) + 3, a: 1, color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 2, y: 5 }, { x: 5, y: 7, label: "(5, 7)" }, { x: 10, y: 9, label: "(10, 9)" }], step: { x: 1, y: 1 } }, "fonction de base √x (en gris) → y = 2√(x − 1) + 3")}
  <p>Ajoute maintenant \(k\). Pour \(y=3\sqrt{\tfrac12(x+2)}-1\) : \(a=3\), \(k=\tfrac12\), \(c=-2\), \(d=-1\). Diviser par \(k=\tfrac12\) double chaque abscisse, donc le graphique est étiré horizontalement par un facteur 2 : \((x,y)\to(2x-2,\ 3y-1)\).</p>
  ${table(["\\(\\sqrt x\\) : (x, y)", "(0, 0)", "(1, 1)", "(4, 2)"], [["\\((2x-2,\\ 3y-1)\\)", "(−2, −1)", "(0, 2)", "(6, 5)"]])}
  ${plane({ view: { xmin: -3, xmax: 9, ymin: -2, ymax: 7 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 * Math.sqrt(0.5 * (x + 2)) - 1, a: -2, color: "green" }], points: [{ x: -2, y: -1, label: "(−2, −1)" }, { x: 0, y: 2, label: "(0, 2)" }, { x: 6, y: 5, label: "(6, 5)" }], step: { x: 1, y: 1 } }, "fonction de base √x (en gris) → y = 3√(½(x + 2)) − 1")}
  ${watchOut([
    "y = (x + 5)² se déplace de 5 vers la GAUCHE, pas vers la droite.",
    "k divise les abscisses : k = 2 les réduit de moitié (compression), k = ½ les double (étirement).",
    "Mets k en évidence avant de lire c : √(3x − 12) = √(3(x − 4)) se déplace de 4 vers la droite, pas de 12.",
    "Étire avant de translater : (1, 1) → (1, 2) → (2, 5), et non (2, 4) → (2, 8).",
    "Pour 1/x, déplace aussi les asymptotes : x = c et y = d. Les étirements par a ou par k ne les déplacent pas.",
    "a < 0 retourne le graphique de haut en bas (l'inégalité de l'image s'inverse); k < 0 le retourne de gauche à droite (l'inégalité du domaine s'inverse).",
  ])}`),

  examples([
    ["Translations seulement", S`Décris \(y=\sqrt{x+4}-2\), transforme les points clés de \(\sqrt x\) et donne le domaine et l'image.`,
      [S`<b>Associe à la forme</b> \(y=af(k(x-c))+d\). Ici, \(a=1\), \(k=1\). Comme \(x+4=x-(-4)\), \(c=-4\). Et \(d=-2\).`,
        S`<b>Pourquoi 4 vers la gauche?</b> La courbe commence là où le radicande vaut 0. Cela se produit maintenant en \(x=-4\) au lieu de \(x=0\), donc le graphique s'est déplacé de 4 vers la gauche. Ensuite, \(d=-2\) le déplace de 2 vers le bas.`,
        S`<b>Règle de correspondance.</b> \((x,y)\to\left(\frac xk+c,\ ay+d\right)=(x-4,\ y-2)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=\\sqrt x\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((4,2)\\)", "\\((9,3)\\)"], ["image", "\\((-4,-2)\\)", "\\((-3,-1)\\)", "\\((0,0)\\)", "\\((5,1)\\)"])}`,
        S`<b>Domaine et image.</b> Le point de départ \((-4,-2)\) donne les deux : \(x\ge-4\) et \(y\ge-2\).`,
        S`<b>Vérifie.</b> En \(x=5\) : \(\sqrt9-2=1\) ✓`],
      S`4 vers la gauche, 2 vers le bas; domaine \(\{x\in\mathbb R\mid x\ge-4\}\), image \(\{y\in\mathbb R\mid y\ge-2\}\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x + 4) - 2, a: -4, color: "violet" }], points: [{ x: -4, y: -2, label: "(−4, −2)" }, { x: -3, y: -1 }, { x: 0, y: 0 }, { x: 5, y: 1, label: "(5, 1)" }], step: { x: 1, y: 1 } })],
    ["Un étirement vertical et une compression horizontale", S`Trace \(y=3\sqrt{2x}\) à partir des points clés de \(\sqrt x\).`,
      [S`<b>Lis les paramètres.</b> \(a=3\) multiplie chaque sortie par 3. \(k=2\) double l'entrée, donc chaque sortie est atteinte à la moitié de la valeur de x : une compression horizontale de facteur \(\frac12\).`,
        S`<b>Règle de correspondance.</b> \((x,y)\to\left(\frac x2,\ 3y\right)\). Il n'y a aucune translation, donc \(c=d=0\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=\\sqrt x\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((4,2)\\)", "\\((9,3)\\)"], ["image", "\\((0,0)\\)", "\\((0.5,3)\\)", "\\((2,6)\\)", "\\((4.5,9)\\)"])}`,
        S`<b>Domaine et image.</b> Le point de départ reste à l'origine, donc \(x\ge0\) et \(y\ge0\).`,
        S`<b>Vérifie.</b> En \(x=2\) : \(3\sqrt4=6\) ✓. En \(x=4.5\) : \(3\sqrt9=9\) ✓`],
      S`une courbe beaucoup plus abrupte passant par \((0,0)\), \((0.5,3)\), \((2,6)\), \((4.5,9)\); domaine \(x\ge0\), image \(y\ge0\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 10 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 * Math.sqrt(2 * x), a: 0, color: "violet" }], points: [{ x: 0.5, y: 3, label: "(0.5, 3)" }, { x: 2, y: 6, label: "(2, 6)" }, { x: 4.5, y: 9, label: "(4.5, 9)" }], step: { x: 1, y: 1 } })],
    ["Réflexion, compression et translations", S`Décris \(y=-\tfrac12(x-2)^2+6\) et trouve les images des points clés de la parabole.`,
      [S`<b>Lis les paramètres.</b> \(a=-\tfrac12\) : le signe moins produit une réflexion par rapport à l'axe des x, et \(\tfrac12\) comprime verticalement. \(c=2\) : 2 vers la droite. \(d=6\) : 6 vers le haut.`,
        S`<b>Ordre.</b> Multiplie d'abord, puis translate. Donc \((x,y)\to\left(x+2,\ -\tfrac12y+6\right)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=x^2\\)", "\\((-2,4)\\)", "\\((-1,1)\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((2,4)\\)"], ["image", "\\((0,4)\\)", "\\((1,5.5)\\)", "\\((2,6)\\)", "\\((3,5.5)\\)", "\\((4,4)\\)"])}`,
        S`<b>Lis le résultat.</b> Le sommet se déplace en \((2,6)\). La courbe s'ouvre vers le bas, donc 6 est le maximum et l'image est \(y\le6\).`,
        S`<b>Vérifie.</b> En \(x=4\) : \(-\tfrac12(4)+6=4\) ✓`],
      S`une parabole évasée ouverte vers le bas, de sommet \((2,6)\), d'image \(y\le6\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -0.5 * (x - 2) ** 2 + 6, color: "violet" }], points: [{ x: 2, y: 6, label: "(2, 6)" }, { x: 0, y: 4, label: "(0, 4)" }, { x: 4, y: 4, label: "(4, 4)" }, { x: 1, y: 5.5 }, { x: 3, y: 5.5 }], step: { x: 1, y: 1 } })],
    ["Mettre k en évidence dans une fonction inverse", S`Esquisse \(y=\frac{1}{2x-6}+2\).`,
      [S`<b>Mets d'abord en évidence.</b> La forme exige \(k(x-c)\), donc \(2x-6=2(x-3)\). Cela donne \(k=2\), \(c=3\), \(d=2\). Le déplacement est de 3, et non de 6. Le dénominateur vaut 0 en \(x=3\), ce qui le confirme.`,
        S`<b>Asymptotes.</b> \(x=0\) se déplace vers la droite en \(x=3\). \(y=0\) monte en \(y=2\). La compression horizontale ne modifie ni l'une ni l'autre.`,
        S`<b>Règle de correspondance.</b> \((x,y)\to\left(\frac x2+3,\ y+2\right)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=\\frac1x\\)", "\\((-1,-1)\\)", "\\((1,1)\\)", "\\((2,\\frac12)\\)"], ["image", "\\((2.5,1)\\)", "\\((3.5,3)\\)", "\\((4,2.5)\\)"])}`,
        S`<b>Vérifie.</b> En \(x=3.5\) : \(\frac1{7-6}+2=3\) ✓. En \(x=2.5\) : \(\frac1{5-6}+2=1\) ✓`],
      S`asymptotes \(x=3\), \(y=2\); domaine \(x\ne3\), image \(y\ne2\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 1 / (2 * x - 6) + 2, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: 2, color: "gray", dash: true }], points: [{ x: 3.5, y: 3, label: "(3.5, 3)" }, { x: 2.5, y: 1, label: "(2.5, 1)" }, { x: 4, y: 2.5 }], step: { x: 1, y: 1 } })],
    ["Équation à partir d'un graphique", "Le graphique en V a son sommet en (−3, −1) et passe par (−2, 1). Écris son équation.",
      [S`<b>Utilise le sommet.</b> Le sommet de \(y=|x|\) est \((0,0)\). Il s'est déplacé en \((-3,-1)\), donc \(c=-3\) et \(d=-1\) : \(y=a|x+3|-1\).`,
        S`<b>Pourquoi pas de \(k\)?</b> Pour la valeur absolue, \(|kx|=|k||x|\), donc un facteur horizontal peut toujours être réécrit comme un facteur vertical. On peut prendre \(k=1\).`,
        S`<b>Utilise l'autre point.</b> Substitue \((-2,1)\) : \(1=a|-2+3|-1\), donc \(1=a-1\) et \(a=2\).`,
        S`<b>Équation.</b> \(y=2|x+3|-1\).`,
        S`<b>Vérifie par symétrie.</b> Un V est symétrique par rapport à son sommet, donc \((-4,1)\) doit aussi être sur le graphique : \(2|-1|-1=1\) ✓`],
      S`\(y=2|x+3|-1\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 2 * Math.abs(x + 3) - 1, color: "amber" }], points: [{ x: -3, y: -1, label: "(−3, −1)" }, { x: -2, y: 1, label: "(−2, 1)" }, { x: -4, y: 1, label: "(−4, 1)" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("transformer un point", String.raw`Sur \(y=\sqrt x\), le point \((9,3)\) correspond à quelle abscisse sur \(y=\sqrt{3(x-1)}+2\)?`, num(4),
      "Utilise x/k + c.", [String.raw`\(\frac93+1=4\); l'image est \((4,5)\).`], String.raw`\(4\)`),
    q("maximum", String.raw`Quelle est la valeur maximale de \(y=-2(x+1)^2+3\)?`, num(3),
      "a < 0, donc le sommet est le point le plus haut.", [String.raw`Sommet \((-1,3)\).`], String.raw`\(3\)`),
    q("image", String.raw`L'image de \(y=4|x-2|-5\) est \(y\ge m\). Trouve \(m\).`, num(-5),
      "Où est le sommet?", [String.raw`Sommet \((2,-5)\); \(a>0\), ouvert vers le haut.`], String.raw`\(-5\)`),
    q("asymptote", String.raw`L'asymptote verticale de \(y=\frac{1}{3x+6}-4\) est \(x=p\). Trouve \(p\).`, num(-2),
      "Mets d'abord k en évidence, ou pose le dénominateur égal à zéro.", [String.raw`\(3x+6=3(x+2)\), donc \(c=-2\).`], String.raw`\(-2\)`),
    q("décrire", String.raw`Quel lien y a-t-il entre \(y=\sqrt{-x}\) et \(y=\sqrt x\)?`, choice(["réflexion par rapport à l'axe des y", "réflexion par rapport à l'axe des x", "translation de 1 vers la gauche", "compression horizontale"], 0),
      "k = −1 change le signe de chaque abscisse.", [String.raw`\((x,y)\to(-x,\ y)\) : \((4,2)\to(-4,2)\).`], "une réflexion par rapport à l'axe des y"),
  ]),

  ...hard([
    ["Trouver a à partir de deux points", String.raw`Une fonction racine carrée transformée \(y=a\sqrt{x-c}+d\) commence en \((2,-3)\) et passe par \((6,5)\). Trouve son équation.`,
      [String.raw`Le point de départ est \((c,d)=(2,-3)\) : \(y=a\sqrt{x-2}-3\).`, String.raw`Substitue \((6,5)\) : \(5=a\sqrt4-3\Rightarrow2a=8\Rightarrow a=4\).`],
      String.raw`\(y=4\sqrt{x-2}-3\)`,
      plane({ view: { xmin: 0, xmax: 10, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 4 * Math.sqrt(x - 2) - 3, a: 2, color: "green" }], points: [{ x: 2, y: -3, label: "(2, −3)" }, { x: 6, y: 5, label: "(6, 5)" }], step: { x: 1, y: 1 } })],
    ["Les quatre paramètres avec un k négatif", String.raw`Décris \(y=3\sqrt{-\tfrac12x+2}-4\), transforme les points clés de \(\sqrt x\) et donne le domaine et l'image.`,
      [String.raw`Mets en évidence : \(-\tfrac12x+2=-\tfrac12(x-4)\), donc \(a=3\), \(k=-\tfrac12\), \(c=4\), \(d=-4\).`, String.raw`Étirement vertical de facteur 3; étirement horizontal de facteur 2 et réflexion par rapport à l'axe des y; puis 4 vers la droite et 4 vers le bas. \((x,y)\to(-2x+4,\ 3y-4)\).`, String.raw`\((0,0)\to(4,-4)\), \((1,1)\to(2,-1)\), \((4,2)\to(-4,2)\), \((9,3)\to(-14,5)\).`],
      String.raw`commence en \((4,-4)\) et s'étend vers la gauche; domaine \(x\le4\), image \(y\ge-4\)`,
      plane({ view: { xmin: -15, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 3 * Math.sqrt(-0.5 * x + 2) - 4, b: 4, color: "violet" }], points: [{ x: 4, y: -4, label: "(4, −4)" }, { x: 2, y: -1, label: "(2, −1)" }, { x: -4, y: 2, label: "(−4, 2)" }, { x: -14, y: 5, label: "(−14, 5)" }], step: { x: 2, y: 1 } })],
  ], [
    q("difficile", String.raw`\(y=a|x-1|+4\) passe par \((4,-5)\). Trouve \(a\).`, num(-3),
      "Substitue le point.", [String.raw`\(-5=3a+4\).`], String.raw`\(-3\)`),
    q("difficile", String.raw`\(y=\sqrt{k(x-2)}\) passe par \((6,4)\). Trouve \(k\).`, num(4),
      "Substitue, puis élève les deux membres au carré.", [String.raw`\(4=\sqrt{4k}\Rightarrow16=4k\).`], String.raw`\(4\)`),
    q("difficile", String.raw`\(y=a(x+3)^2-8\) passe par \((-1,0)\). Quelle est son autre abscisse à l'origine?`, num(-5),
      "Trouve a, ou utilise la symétrie par rapport à l'axe x = −3.", [String.raw`L'axe est \(x=-3\); \(-1\) est à 2 unités à droite, donc l'autre zéro est à 2 unités à gauche.`], String.raw`\(-5\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi f(x − 3) se déplace-t-elle vers la droite et non vers la gauche?", "Pour obtenir la même sortie que f en x = 0, il faut maintenant x − 3 = 0, c'est-à-dire x = 3. Chaque point est atteint 3 unités plus loin."],
      ["Pourquoi k divise-t-il l'abscisse au lieu de la multiplier?", "Dans f(kx), l'entrée est multipliée par k, donc une sortie que f atteignait en x est maintenant atteinte en x/k. Avec k = 2, cela arrive deux fois plus tôt, donc le graphique est comprimé de facteur ½."],
      ["L'ordre est-il important?", "Oui. Étire et réfléchis d'abord, puis translate — la correspondance (x, y) → (x/k + c, ay + d) fait exactement cela : diviser par k et multiplier par a, puis additionner c et d."],
      ["Pourquoi dois-je mettre k en évidence avant de lire c?", "La forme est f(k(x − c)). Dans f(2x − 6), la translation est cachée : 2x − 6 = 2(x − 3), donc le graphique se déplace de 3 vers la droite, et non de 6."],
      ["Comment trouver a ou k à partir d'un graphique?", "Lis c et d à partir du sommet, du point de départ ou des asymptotes, puis substitue un autre point pour trouver le paramètre qui reste."],
    ],
    summary: [
      "d : vers le haut ou vers le bas; c : vers la droite ou vers la gauche (signe opposé dans la parenthèse).",
      "|a| > 1 étire verticalement, |a| < 1 comprime, a < 0 produit une réflexion par rapport à l'axe des x.",
      "|k| > 1 comprime horizontalement de facteur 1/|k|, |k| < 1 étire, k < 0 produit une réflexion par rapport à l'axe des y.",
      "(x, y) → (x/k + c, ay + d), après avoir mis k en évidence.",
      "L'image change avec a et d; le domaine change avec k et c.",
    ],
    next: "La section 1.7 examine de plus près les étirements, les compressions et les réflexions horizontales (le paramètre k) et les cas où ils équivalent à un changement vertical.",
  }),
];
