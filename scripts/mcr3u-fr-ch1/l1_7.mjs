// MCR3U-FR 1.7 — Étirements, compressions et réflexions horizontaux : y = f(kx), y = f(−x), y = −f(x).
// Miroir de ../mcr3u-ch1/l1_7.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.7 Étirements, compressions et réflexions horizontaux";
export const ID = lessonId(1, 7);

export const blocks = () => [
  intro({
    icon: "↕️",
    title: "Étirements, compressions et réflexions horizontaux",
    overview: String.raw`Multiplier l'<em>entrée</em> par \(k\) modifie un graphique latéralement : \(y=f(kx)\) est resserré vers l'axe des y lorsque \(|k|>1\), éloigné de cet axe lorsque \(|k|<1\), et retourné par rapport à l'axe des y lorsque \(k<0\). Dans cette leçon, tu vas transformer des points avec \((x,y)\to(\frac xk,\ y)\), comparer les changements horizontaux et verticaux, et voir quand les deux donnent le même graphique.`,
    goals: [
      "décrire y = f(kx) comme un étirement ou une compression horizontale de facteur 1/|k|;",
      "décrire y = f(−x) comme une réflexion par rapport à l'axe des y et y = −f(x) comme une réflexion par rapport à l'axe des x;",
      "transformer des points clés avec (x, y) → (x/k, y);",
      "trouver le nouveau domaine et la nouvelle image après un changement horizontal;",
      "reconnaître des transformations horizontales et verticales équivalentes.",
    ],
    curriculum: "A1.8 (le rôle de k dans y = f(kx) : étirements et compressions horizontaux, réflexions par rapport à l'axe des y, pour f(x) = x, x², √x, 1/x), A1.9",
    prior: [
      [String.raw`Pour \(y=\sqrt x\), que vaut \(y\) en \(x=4\)?`, String.raw`\(2\).`],
      [String.raw`Simplifie \((3x)^2\).`, String.raw`\(9x^2\).`],
      [String.raw`Que fait \(y=-f(x)\) au point \((2,5)\)?`, String.raw`Il devient \((2,-5)\) : réflexion par rapport à l'axe des x.`],
    ],
    words: [
      ["Compression horizontale", "\\(|k|>1\\) : les valeurs de x sont divisées par \\(|k|\\)", "\\(y=\\sqrt{2x}\\)"],
      ["Étirement horizontal", "\\(0<|k|<1\\) : les valeurs de x sont divisées par \\(|k|\\), donc elles augmentent", "\\(y=(\\tfrac12x)^2\\)"],
      ["Réflexion par rapport à l'axe des y", "\\(k<0\\) : x change de signe", "\\(y=\\sqrt{-x}\\)"],
      ["Facteur", "le nombre par lequel la distance à l'axe des y est multipliée : \\(\\frac1{|k|}\\)", ""],
    ],
  }),

  section("📌 Pourquoi diviser par k?", String.raw`
  <p>Pour \(y=\sqrt{2x}\), la sortie 2 est maintenant obtenue lorsque \(2x=4\), c'est-à-dire en \(x=2\) au lieu de \(x=4\). Chaque sortie est atteinte à la <em>moitié</em> de la valeur de x, donc le graphique est comprimé horizontalement par un facteur \(\tfrac12\).</p>
  ${table(["\\(y=\\sqrt x\\)", "(0, 0)", "(1, 1)", "(4, 2)", "(9, 3)"], [["\\(y=\\sqrt{2x}\\) : \\((\\tfrac x2,\\ y)\\)", "(0, 0)", "(0.5, 1)", "(2, 2)", "(4.5, 3)"]])}
  ${plane({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(2 * x), a: 0, color: "violet" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "gray" }, { x: 2, y: 2, label: "(2, 2)" }, { x: 4.5, y: 3, label: "(4.5, 3)" }], step: { x: 1, y: 1 } }, "√x (en gris) et √(2x) : mêmes hauteurs, atteintes plus tôt")}
  ${keyIdea(String.raw`Dans \(y=f(kx)\) : \((x,y)\to\left(\frac xk,\ y\right)\). \(|k|>1\) comprime horizontalement par un facteur \(\frac1{|k|}\); \(0<|k|<1\) étire par un facteur \(\frac1{|k|}\); \(k<0\) produit en plus une réflexion par rapport à l'axe des y. Les valeurs de y (donc l'image) ne changent pas.`)}`),

  section("📌 Explore", String.raw`<p>Le paramètre \(k\) est maintenant disponible (avec \(a\) pour comparer). Remarque que pour \(x^2\) et \(|x|\), une compression horizontale peut ressembler exactement à un étirement vertical.</p>`),

  widget("funcTransform", { parent: "x2", show: ["a", "k"], init: { a: 1, k: 2, d: 0, c: 0 } }),

  section("📌 Deux réflexions", String.raw`
  ${table(["Équation", "Correspondance", "Réflexion par rapport à"], [["\\(y=-f(x)\\)", "\\((x,y)\\to(x,-y)\\)", "l'axe des x"], ["\\(y=f(-x)\\)", "\\((x,y)\\to(-x,y)\\)", "l'axe des y"]])}
  ${plane({ view: { xmin: -10, xmax: 10, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(-x), b: 0, color: "red" }, { f: (x) => -Math.sqrt(x), a: 0, color: "blue" }], step: { x: 1, y: 1 } }, "√x (en gris), √(−x) (en rouge, réflexion par rapport à l'axe des y), −√x (en bleu, réflexion par rapport à l'axe des x)")}
  ${watchOut([
    "y = f(2x) comprime par un facteur 1/2 — le facteur est l'inverse de k.",
    "f(kx) ne change que les abscisses; af(x) ne change que les ordonnées.",
    "√(−x) a pour domaine x ≤ 0 : la réflexion déplace le domaine vers la gauche.",
    "x² et |x| sont symétriques par rapport à l'axe des y, donc f(−x) = f(x) pour elles.",
  ])}`),

  examples([
    ["Une compression horizontale", S`Décris \(y=|3x|\) et transforme les points clés de \(|x|\). Compare avec \(y=3|x|\).`,
      [S`<b>Pourquoi une compression?</b> Avec \(k=3\), l'entrée est triplée, donc une sortie donnée est atteinte au tiers de l'ancienne valeur de x. La correspondance est \((x,y)\to\left(\frac x3,\ y\right)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=|x|\\)", "\\((-3,3)\\)", "\\((0,0)\\)", "\\((3,3)\\)"], ["image", "\\((-1,3)\\)", "\\((0,0)\\)", "\\((1,3)\\)"])}`,
        S`<b>Compare par l'algèbre.</b> \(|3x|=|3||x|=3|x|\), donc les deux équations donnent le même graphique.`,
        S`<b>Compare avec des points.</b> L'étirement vertical envoie \((1,1)\) sur \((1,3)\), le même point que la compression a produit à partir de \((3,3)\) ✓. Pour \(|x|\), les deux descriptions concordent. La plupart des autres fonctions ne se comportent pas ainsi.`],
      S`un V de pentes \(\pm3\); pour \(|x|\), les deux descriptions concordent`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => Math.abs(3 * x), color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)", color: "amber" }, { x: -1, y: 3, label: "(−1, 3)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "gray" }], step: { x: 1, y: 1 } }, "en gris y = |x|, en violet y = |3x|")],
    ["Un étirement horizontal", S`Décris \(y=\left(\tfrac12x\right)^2\) et montre que c'est une compression verticale.`,
      [S`<b>Pourquoi un étirement?</b> Avec \(k=\tfrac12\), l'entrée est réduite de moitié, donc une ancienne sortie exige maintenant le double de la valeur de x. La correspondance est \((x,y)\to(2x,\ y)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=x^2\\)", "\\((1,1)\\)", "\\((2,4)\\)", "\\((-2,4)\\)"], ["image", "\\((2,1)\\)", "\\((4,4)\\)", "\\((-4,4)\\)"])}`,
        S`<b>Montre la deuxième description.</b> Élève la parenthèse au carré : \(\left(\tfrac12x\right)^2=\tfrac14x^2\). C'est une compression verticale par un facteur \(\tfrac14\).`,
        S`<b>Vérifie.</b> La compression verticale envoie \((4,16)\) sur \((4,4)\), le même point que ci-dessus. En \(x=2\) : \(\tfrac14(4)=1\) ✓`],
      S`une parabole plus évasée passant par \((\pm4,4)\) et \((\pm2,1)\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => 0.25 * x * x, color: "violet" }], points: [{ x: 4, y: 4, label: "(4, 4)" }, { x: 2, y: 4, label: "(2, 4)", color: "gray" }, { x: 2, y: 1, label: "(2, 1)" }], step: { x: 1, y: 1 } })],
    ["Réflexion par rapport à l'axe des y", S`Trace \(y=\sqrt{-x}\) et donne son domaine et son image.`,
      [S`<b>Lis le paramètre.</b> \(k=-1\) remplace \(x\) par \(-x\). Chaque point passe de l'autre côté de l'axe des y : \((x,y)\to(-x,\ y)\).`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=\\sqrt x\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((4,2)\\)", "\\((9,3)\\)"], ["image", "\\((0,0)\\)", "\\((-1,1)\\)", "\\((-4,2)\\)", "\\((-9,3)\\)"])}`,
        S`<b>Domaine par l'algèbre.</b> Le radicande doit être non négatif : \(-x\ge0\), donc \(x\le0\). Ce sont maintenant les entrées négatives qui sont permises, puisque \(\sqrt{-(-4)}=\sqrt4=2\).`,
        S`<b>Image.</b> Un changement horizontal ne modifie pas les hauteurs, donc l'image reste \(y\ge0\).`,
        S`<b>Vérifie.</b> En \(x=-9\) : \(\sqrt9=3\) ✓`],
      S`domaine \(\{x\in\mathbb R\mid x\le0\}\), image \(\{y\in\mathbb R\mid y\ge0\}\)`,
      plane({ view: { xmin: -10, xmax: 10, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(-x), b: 0, color: "violet" }], points: [{ x: -4, y: 2, label: "(−4, 2)" }, { x: -9, y: 3, label: "(−9, 3)" }, { x: 4, y: 2, label: "(4, 2)", color: "gray" }], step: { x: 1, y: 1 } })],
    ["Compression d'une fonction inverse", S`Transforme les points \((\tfrac12,2),(1,1),(2,\tfrac12)\) de \(\frac1x\) par \(y=\frac{1}{4x}\).`,
      [S`<b>Lis le paramètre.</b> \(k=4\), donc \((x,y)\to\left(\frac x4,\ y\right)\). Les valeurs de x sont divisées par 4 et les hauteurs restent les mêmes.`,
        S`<b>Transforme les points.</b> ${tv(["\\(y=\\frac1x\\)", "\\((\\frac12,2)\\)", "\\((1,1)\\)", "\\((2,\\frac12)\\)"], ["image", "\\((\\frac18,2)\\)", "\\((\\frac14,1)\\)", "\\((\\frac12,\\frac12)\\)"])}`,
        S`<b>Asymptotes.</b> Une compression vers l'axe des y laisse \(x=0\) en place, car \(\frac04=0\). Les hauteurs ne changent pas, donc \(y=0\) reste aussi.`,
        S`<b>Vérifie.</b> Substitue dans l'équation. \(x=\frac14\) : \(\frac1{4\cdot\frac14}=1\) ✓. \(x=\frac18\) : \(\frac1{4\cdot\frac18}=2\) ✓`],
      S`\((0.125,2),(0.25,1),(0.5,0.5)\)`,
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 3 }, curves: [{ f: (x) => 1 / x, a: 0.34, color: "gray" }, { f: (x) => 1 / (4 * x), a: 0.09, color: "violet" }], points: [{ x: 0.125, y: 2, label: "(0.125, 2)", color: "amber" }, { x: 0.25, y: 1, label: "(0.25, 1)", color: "amber" }, { x: 0.5, y: 0.5, label: "(0.5, 0.5)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)", color: "gray" }], step: { x: 0.5, y: 0.5 } }, "en gris y = 1/x, en violet y = 1/(4x)")],
    ["À partir d'un ensemble de points", S`\(f\) contient \((-4,2),(0,6),(8,-2)\). Trouve les points correspondants de \(y=f(4x)\) et de \(y=f(-\tfrac12x)\).`,
      [S`<b>Règle.</b> Pour \(y=f(kx)\), la correspondance est \((x,y)\to\left(\frac xk,\ y\right)\). Seules les valeurs de x changent.`,
        S`<b>Première fonction,</b> \(k=4\) : divise chaque valeur de x par 4.`,
        S`<b>Deuxième fonction,</b> \(k=-\frac12\) : diviser par \(-\frac12\) revient à multiplier par \(-2\). C'est donc un étirement de facteur 2 et une réflexion par rapport à l'axe des y.`,
        S`<b>Tableau.</b> ${tv(["\\(f\\)", "\\((-4,2)\\)", "\\((0,6)\\)", "\\((8,-2)\\)"], ["\\(f(4x)\\)", "\\((-1,2)\\)", "\\((0,6)\\)", "\\((2,-2)\\)"], ["\\(f(-\\frac12x)\\)", "\\((8,2)\\)", "\\((0,6)\\)", "\\((-16,-2)\\)"])}`,
        S`<b>Vérifie par substitution.</b> Dans \(f(4x)\) en \(x=2\), on obtient \(f(8)=-2\) ✓. Dans \(f(-\tfrac12x)\) en \(x=-16\), on obtient \(f(8)=-2\) ✓. Les points situés sur l'axe des y, comme \((0,6)\), ne bougent jamais.`],
      S`\(f(4x)\) : \((-1,2),(0,6),(2,-2)\); \(f(-\tfrac12x)\) : \((8,2),(0,6),(-16,-2)\)`,
      plane({ view: { xmin: -18, xmax: 10, ymin: -4, ymax: 8 }, points: [{ x: -4, y: 2, color: "gray" }, { x: 8, y: -2, label: "(8, −2)", color: "gray" }, { x: 0, y: 6, label: "(0, 6)", color: "amber" }, { x: -1, y: 2, color: "violet" }, { x: 2, y: -2, label: "(2, −2)", color: "violet" }, { x: 8, y: 2, label: "(8, 2)", color: "green" }, { x: -16, y: -2, label: "(−16, −2)", color: "green" }], step: { x: 2, y: 2 } }, "en gris f, en violet f(4x), en vert f(−x/2)")],
  ]),

  practice([
    q("transformer un point", String.raw`Le point \((6,3)\) est sur \(y=f(x)\). Quelle est l'abscisse de son image sur \(y=f(3x)\)?`, num(2),
      "Divise x par k.", [String.raw`\(\frac63=2\).`], String.raw`\(2\)`),
    q("réflexion", String.raw`Le point \((-2,5)\) est sur \(y=f(x)\). Quelle est l'abscisse de son image sur \(y=f(-x)\)?`, num(2),
      "Change le signe de x.", [String.raw`\((-2,5)\to(2,5)\).`], String.raw`\(2\)`),
    q("étirement", String.raw`Le point \((4,2)\) de \(y=\sqrt x\) correspond à quelle abscisse sur \(y=\sqrt{\tfrac14x}\)?`, num(16),
      "Diviser par 1/4 revient à multiplier par 4.", [String.raw`\(\frac{4}{1/4}=16\); vérifie : \(\sqrt{4}=2\).`], String.raw`\(16\)`),
    q("équivalent", String.raw`\(y=(3x)^2\) a le même graphique que laquelle de ces fonctions?`, choice([String.raw`\(y=9x^2\)`, String.raw`\(y=3x^2\)`, String.raw`\(y=\tfrac13x^2\)`, String.raw`\(y=x^2+9\)`], 0),
      "Développe la parenthèse.", [String.raw`\((3x)^2=9x^2\).`], String.raw`\(y=9x^2\)`),
    q("domaine", String.raw`Quel est le domaine de \(y=\sqrt{-2x}\)?`, choice([String.raw`\(x\le0\)`, String.raw`\(x\ge0\)`, String.raw`\(x\ge-2\)`, String.raw`\(x\in\mathbb R\)`], 0),
      "Il faut −2x ≥ 0.", [String.raw`\(-2x\ge0\Rightarrow x\le0\).`], String.raw`\(\{x\in\mathbb R\mid x\le0\}\)`),
  ]),

  ...hard([
    ["Deux descriptions d'un même graphique", String.raw`Montre que \(y=\frac{1}{2x}\) est à la fois une compression horizontale de facteur \(\tfrac12\) et une compression verticale de facteur \(\tfrac12\) de \(y=\frac1x\).`,
      [String.raw`Horizontalement : \(y=f(2x)=\frac{1}{2x}\), \(k=2\).`, String.raw`Verticalement : \(\tfrac12f(x)=\tfrac12\cdot\frac1x=\frac{1}{2x}\), \(a=\tfrac12\).`, String.raw`Vérifie avec \((1,1)\) : l'horizontale donne \((\tfrac12,1)\); la verticale donne \((1,\tfrac12)\). Les deux points sont sur \(y=\frac{1}{2x}\) — la même courbe, avec des associations de points différentes.`],
      String.raw`les deux transformations produisent le même graphique`],
    ["Suivre le sommet", String.raw`\(f(x)=x^2-4x\). Écris \(y=f(-x)\) et \(y=f(2x)\) sous forme canonique et vérifie la correspondance du sommet.`,
      [String.raw`\(f(x)=(x-2)^2-4\) : sommet \((2,-4)\).`, String.raw`\(f(-x)=x^2+4x=(x+2)^2-4\) : sommet \((-2,-4)\) ✓ (x change de signe).`, String.raw`\(f(2x)=4x^2-8x=4(x-1)^2-4\) : sommet \((1,-4)\) ✓ (x divisé par 2).`],
      String.raw`\(f(-x)=(x+2)^2-4\), \(f(2x)=4(x-1)^2-4\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x - 4 * x, color: "gray" }, { f: (x) => x * x + 4 * x, color: "red" }, { f: (x) => 4 * x * x - 8 * x, color: "blue" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "gray" }, { x: -2, y: -4, label: "(−2, −4)" }, { x: 1, y: -4, label: "(1, −4)", color: "blue" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", String.raw`\(f(x)=x^2-6x\) a pour sommet \((3,-9)\). Quelle est l'abscisse du sommet de \(y=f(3x)\)?`, num(1),
      "Divise l'abscisse du sommet par k.", [String.raw`\(\frac33=1\).`], String.raw`\(1\)`),
    q("difficile", String.raw`Les zéros de \(f\) sont \(-6\) et \(4\). Trouve le zéro positif de \(y=f(-2x)\).`, num(3),
      "Divise chaque zéro par −2.", [String.raw`\(\frac{-6}{-2}=3\), \(\frac{4}{-2}=-2\).`], String.raw`\(3\)`),
    q("difficile", String.raw`\(y=\sqrt{kx}\) passe par \((2,4)\). Trouve \(k\).`, num(8),
      "Substitue, puis élève au carré.", [String.raw`\(\sqrt{2k}=4\Rightarrow2k=16\).`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le facteur est-il 1/k et non k?", "Parce que l'entrée est multipliée par k, la sortie d'origine est atteinte en x/k. Plus k est grand, plus elle est atteinte tôt, donc le graphique est resserré."],
      ["Un changement horizontal peut-il équivaloir à un changement vertical?", "Oui, pour certaines fonctions de base : |kx| = |k||x|, (kx)² = k²x², 1/(kx) = (1/k)(1/x). Pour √x, c'est √k·√x."],
      ["f(kx) change-t-elle l'image?", "Non — seules les abscisses bougent. Elle peut changer le domaine (p. ex. √(−x))."],
      ["f(kx) déplace-t-elle l'ordonnée à l'origine?", "Non : en x = 0, f(k·0) = f(0)."],
      ["Comment décrire un k négatif?", "Décompose-le : une réflexion par rapport à l'axe des y et un étirement ou une compression horizontale de facteur 1/|k|."],
    ],
    summary: [
      "y = f(kx) : (x, y) → (x/k, y).",
      "|k| > 1 comprime, |k| < 1 étire horizontalement, par un facteur 1/|k|.",
      "k < 0 : réflexion par rapport à l'axe des y; a < 0 : réflexion par rapport à l'axe des x.",
      "L'image n'est pas modifiée par k; le domaine peut l'être.",
    ],
    next: "La section 1.8 combine les quatre paramètres : y = af(k(x − c)) + d.",
  }),
];
