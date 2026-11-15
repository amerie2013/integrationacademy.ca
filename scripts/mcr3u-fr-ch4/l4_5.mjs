// MCR3U-FR 4.5 — Transformations des fonctions exponentielles : y = a·b^(k(x − c)) + d, points clés, asymptote,
// domaine et image, équations à partir d'un graphique ou de propriétés. Miroir de ../mcr3u-ch4/l4_5.mjs.
// Notation française : c = translation horizontale, d = translation verticale (l'anglais écrit y = a·b^(k(x − d)) + c).
// Les props du widget expTransform gardent les clés anglaises (d = horizontal, c = vertical) : le widget affiche
// lui-même les lettres françaises.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.5 Transformations des fonctions exponentielles";
export const ID = lessonId(4, 5);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔀",
    title: "Transformations des fonctions exponentielles",
    overview: S`Tout ce que tu as vu au chapitre 1 s'applique aux exponentielles : \(y=a\cdot b^{k(x-c)}+d\) étire, réfléchit et translate \(y=b^x\). La nouveauté est l'asymptote horizontale, qui se déplace avec \(d\). Dans cette leçon, tu vas tracer des exponentielles transformées à partir de trois points clés, énoncer l'asymptote, le domaine et l'image, et écrire des équations à partir d'un graphique ou d'une liste de propriétés.`,
    goals: [
      "décrire le rôle de a, k, c et d pour y = bˣ;",
      "transformer les points clés (−1, 1/b), (0, 1), (1, b);",
      "énoncer l'asymptote, le domaine et l'image de la fonction transformée;",
      "trouver les coordonnées à l'origine d'une exponentielle transformée;",
      "écrire une équation à partir d'un graphique ou de propriétés données.",
    ],
    curriculum: "B2.2 (rôle de a, k, c et d dans y = af(k(x − c)) + d pour f(x) = aˣ), B2.3 (esquisser le graphique et énoncer le domaine et l'image), B2.5 (représenter une fonction exponentielle par une équation, étant donné son graphique ou ses propriétés)",
    prior: [
      [S`Pour \(y=af(k(x-c))+d\), où va le point \((x,y)\)?`, S`\(\left(\frac xk+c,\ ay+d\right)\).`],
      [S`Quelle est l'asymptote de \(y=2^x\)?`, S`\(y=0\).`],
      [S`Évalue \(3^{-1}\).`, S`\(\frac13\).`],
    ],
    words: [
      ["Points clés de bˣ", "\\((-1,\\frac1b)\\), \\((0,1)\\), \\((1,b)\\)", ""],
      ["Asymptote", "\\(y=d\\) après la transformation", ""],
      ["Image", "\\(y>d\\) si \\(a>0\\); \\(y<d\\) si \\(a<0\\)", ""],
    ],
  }),

  section("📌 Ce qui bouge et ce qui reste", S`
  ${table(["Paramètre", "Effet", "Asymptote"], [["\\(a\\)", "étirement vertical; \\(a<0\\) donne une réflexion par rapport à l'axe des x", "ne bouge pas (si d = 0)"], ["\\(k\\)", "étirement horizontal de facteur \\(\\frac1{|k|}\\); \\(k<0\\) donne une réflexion par rapport à l'axe des y", "ne bouge pas"], ["\\(c\\)", "translation horizontale", "ne bouge pas"], ["\\(d\\)", "translation verticale", "se déplace en \\(y=d\\)"]])}
  ${keyIdea(S`Transforme les points clés avec \((x,y)\to\left(\frac xk+c,\ ay+d\right)\) et trace d'abord l'asymptote \(y=d\). Le domaine est toujours \(\mathbb R\); l'image est \(y>d\) si \(a>0\) et \(y<d\) si \(a<0\).`)}`),

  section("📌 Explore", S`<p>Modifie la base et les quatre paramètres. Observe quel paramètre déplace l'asymptote verte.</p>`),

  widget("expTransform", { base: 2, show: ["a", "k", "d", "c"], init: { a: 1, k: 1, d: 3, c: 1 } }),

  section("📌 Attention", watchOut([
    "Seul d déplace l'asymptote.",
    "Si a < 0, le graphique est sous l'asymptote; l'image devient donc y < d.",
    S`Mets \(k\) en évidence : \(2^{2x-6}=2^{2(x-3)}\), donc \(c=3\).`,
    S`Une compression horizontale de \(b^x\) est aussi un changement de base : \(3^{2x}=9^x\).`,
  ])),

  examples([
    ["Deux translations", S`Trace le graphique de \(y=2^{x-3}+1\) et énonce ses propriétés.`,
      [S`<b>Lis les transformations.</b> Compare avec \(y=2^{x-c}+d\). Ici, \(c=3\) donne une translation de 3 vers la droite, car l'entrée \(x-3\) doit être égale à l'ancien \(x\). Et \(d=1\) donne une translation de 1 vers le haut. La transformation est donc \((x,y)\to(x+3,\ y+1)\).`,
        S`<b>Transforme les points clés de \(y=2^x\).</b> ${tv(["\\(y=2^x\\)", "\\((-1,\\frac12)\\)", "\\((0,1)\\)", "\\((1,2)\\)", "\\((2,4)\\)"], ["image", "\\((2,1.5)\\)", "\\((3,2)\\)", "\\((4,3)\\)", "\\((5,5)\\)"])}`,
        S`<b>Asymptote.</b> L'ancienne asymptote \(y=0\) monte de 1 et devient \(y=1\). Une translation vers la gauche ou vers la droite ne déplace pas une droite horizontale.`,
        S`<b>Domaine, image, coordonnées à l'origine.</b> Domaine \(\mathbb R\). La courbe reste au-dessus de son asymptote; l'image est donc \(y>1\). L'ordonnée à l'origine est \(2^{0-3}+1=\frac18+1=1.125\). Il n'y a pas d'abscisse à l'origine, car \(y\) est toujours supérieur à 1.`,
        S`<b>Vérification.</b> Substitue \(x=4\) dans l'équation : \(2^{1}+1=3\), ce qui correspond au point image \((4,3)\) ✓`],
      S`domaine \(\mathbb R\), image \(y>1\), asymptote \(y=1\), ordonnée à l'origine \(1.125\), croissante`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "gray" }, { f: (x) => 2 ** (x - 3) + 1, color: "violet" }], lines: [{ m: 0, b: 1, color: "green", dash: true }], points: [{ x: 2, y: 1.5 }, { x: 3, y: 2, label: "(3, 2)" }, { x: 4, y: 3, label: "(4, 3)" }, { x: 5, y: 5, label: "(5, 5)" }], step: { x: 1, y: 1 } }, "gris : y = 2ˣ, violet : la fonction transformée, vert : l'asymptote y = 1")],
    ["Une réflexion", S`Trace le graphique de \(y=-3(2)^x+4\) et énonce son image et son abscisse à l'origine.`,
      [S`<b>Lis les transformations.</b> \(a=-3\) signifie un étirement vertical de facteur 3 et une réflexion par rapport à l'axe des x. Ensuite, \(d=4\) signifie une translation de 4 vers le haut. Donc \((x,y)\to(x,\ -3y+4)\). On étire et on réfléchit d'abord, on translate en dernier.`,
        S`<b>Transforme les points clés.</b> ${tv(["\\(y=2^x\\)", "\\((-1,\\frac12)\\)", "\\((0,1)\\)", "\\((1,2)\\)", "\\((2,4)\\)"], ["image", "\\((-1,2.5)\\)", "\\((0,1)\\)", "\\((1,-2)\\)", "\\((2,-8)\\)"])}`,
        S`<b>Asymptote et image.</b> L'asymptote \(y=0\) reste à 0 après l'étirement, puis se déplace en \(y=4\). La réflexion place la courbe sous l'asymptote; l'image est donc \(y<4\).`,
        S`<b>Abscisse à l'origine.</b> Pose \(y=0\) : \(3(2)^x=4\), donc \(2^x=\frac43\). Puisque \(2^0=1\) et \(2^1=2\), la valeur de x est entre 0 et 1. Par essais, on obtient \(x\approx0.415\), car \(2^{0.415}\approx1.333\).`,
        S`<b>Vérification.</b> À \(x=1\) : \(-3(2)+4=-2\) ✓. La courbe traverse l'axe des x en descendant entre \((0,1)\) et \((1,-2)\), ce qui concorde avec \(x\approx0.415\) ✓`],
      S`image \(y<4\); abscisse à l'origine \(x\approx0.415\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -9, ymax: 6 }, curves: [{ f: (x) => -3 * 2 ** x + 4, color: "violet" }], lines: [{ m: 0, b: 4, color: "green", dash: true }], points: [{ x: -1, y: 2.5, label: "(−1, 2.5)" }, { x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: -2, label: "(1, −2)" }, { x: 2, y: -8, label: "(2, −8)" }, { x: 0.415, y: 0, color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une compression est une nouvelle base", S`Décris \(y=3^{2x}\) de deux façons.`,
      [S`<b>Comme une transformation.</b> Dans \(y=3^{k x}\) avec \(k=2\), la transformation est \((x,y)\to\left(\frac xk,\ y\right)\). C'est une compression horizontale de facteur \(\frac12\) : les valeurs de \(3^x\) sont atteintes deux fois plus vite.`,
        S`<b>Comme une nouvelle base.</b> Pour une puissance d'une puissance, on multiplie les exposants; lu à l'envers : \(3^{2x}=(3^2)^x=9^x\).`,
        S`<b>Comparaison des tables.</b> Les deux formules donnent la même ligne; c'est donc la même fonction. ${tv(["\\(x\\)", "\\(-1\\)", "\\(0\\)", "\\(0.5\\)", "\\(1\\)"], ["\\(3^{2x}\\)", "\\(\\frac19\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"], ["\\(9^x\\)", "\\(\\frac19\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"])}`,
        S`<b>Vérifie la transformation.</b> \((1,3)\) sur \(y=3^x\) devient \(\left(\frac12,3\right)\). La table confirme \(3^{2(0.5)}=3\) ✓. Le point \((0,1)\) ne bouge pas, puisque \(\frac02=0\).`],
      S`une compression horizontale de facteur \(\frac12\) de \(y=3^x\), qui est la même fonction que \(y=9^x\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x, color: "gray" }, { f: (x) => 9 ** x, color: "violet" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 0.5, y: 3, label: "(0.5, 3)", color: "amber" }, { x: 1, y: 9, label: "(1, 9)" }, { x: 0, y: 1, label: "(0, 1)" }], step: { x: 1, y: 1 } }, "gris : y = 3ˣ, violet : y = 3²ˣ = 9ˣ")],
    ["Décroissance avec translations", S`Énonce l'asymptote, l'ordonnée à l'origine et l'image de \(y=\left(\tfrac12\right)^{x+2}-5\), puis esquisse son graphique.`,
      [S`<b>Lis les transformations.</b> \(x+2=x-(-2)\), donc \(c=-2\) est une translation de 2 vers la gauche, et \(d=-5\) est une translation de 5 vers le bas. La transformation est \((x,y)\to(x-2,\ y-5)\).`,
        S`<b>Asymptote et image.</b> Seule la translation verticale déplace une asymptote horizontale : \(y=0\to y=-5\). Rien ne réfléchit la courbe; elle reste donc au-dessus : l'image est \(y>-5\).`,
        S`<b>Ordonnée à l'origine.</b> Substitue \(x=0\) : \(\left(\tfrac12\right)^{2}-5=\frac14-5=-4.75\).`,
        S`<b>Points clés.</b> ${tv(["\\(y=\\left(\\frac12\\right)^x\\)", "\\((-2,4)\\)", "\\((-1,2)\\)", "\\((0,1)\\)", "\\((1,\\frac12)\\)"], ["image", "\\((-4,-1)\\)", "\\((-3,-3)\\)", "\\((-2,-4)\\)", "\\((-1,-4.5)\\)"])}`,
        S`<b>Vérification.</b> À \(x=-3\) : \(\left(\tfrac12\right)^{-1}-5=2-5=-3\) ✓. La base est inférieure à 1; la courbe descend donc vers \(y=-5\) à droite ✓`],
      S`asymptote \(y=-5\); ordonnée à l'origine \(-4.75\); image \(y>-5\)`,
      plane({ view: { xmin: -6, xmax: 3, ymin: -7, ymax: 4 }, curves: [{ f: (x) => 0.5 ** (x + 2) - 5, color: "violet" }], lines: [{ m: 0, b: -5, color: "green", dash: true }], points: [{ x: -4, y: -1, label: "(−4, −1)" }, { x: -3, y: -3, label: "(−3, −3)" }, { x: -2, y: -4, label: "(−2, −4)" }, { x: 0, y: -4.75, label: "(0, −4.75)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["À partir de propriétés", "Écris deux fonctions exponentielles différentes dont l'ordonnée à l'origine est 5 et l'asymptote, y = 3.",
      [S`<b>Choisis la forme.</b> La forme \(y=a\cdot b^x+d\) a pour asymptote \(y=d\), puisque \(a\cdot b^x\) peut s'approcher de 0 autant qu'on le veut. Donc \(d=3\).`,
        S`<b>Utilise l'ordonnée à l'origine.</b> À \(x=0\) : \(y=a\cdot b^0+3=a+3\). Cette valeur doit être 5, donc \(a=2\).`,
        S`<b>Choisis la base.</b> Les deux conditions ne font pas intervenir \(b\); n'importe quelle base permise convient. Une base supérieure à 1 donne une croissance, et une base entre 0 et 1, une décroissance.`,
        S`<b>Deux réponses.</b> Avec \(b=2\) : \(y=2(2)^x+3\). Avec \(b=\tfrac12\) : \(y=2\left(\tfrac12\right)^x+3\).`,
        S`<b>Vérification.</b> Pour les deux, \(y(0)=2(1)+3=5\) ✓. Loin d'un côté, la puissance tend vers 0 et \(y\) tend vers 3 ✓. Le graphique montre deux courbes différentes qui passent par \((0,5)\) avec la même asymptote.`],
      S`par exemple \(y=2(2)^x+3\) et \(y=2\left(\tfrac12\right)^x+3\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: 0, ymax: 12 }, curves: [{ f: (x) => 2 * 2 ** x + 3, color: "violet" }, { f: (x) => 2 * 0.5 ** x + 3, color: "red" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("asymptote", S`Quelle est l'asymptote horizontale de \(y=5^x-7\)? Entre la valeur de y.`, num(-7),
      "d déplace l'asymptote.", [S`\(y=-7\).`], S`\(-7\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(y=2^{x+1}+3\).`, num(5),
      "Substitue x = 0.", [S`\(2+3\).`], S`\(5\)`),
    q("point clé", S`Le point \((1,2)\) de \(y=2^x\) devient un point de quelle abscisse sur \(y=2^{x-4}+6\)?`, num(5),
      "4 vers la droite.", [S`\((5,8)\).`], S`\(5\)`),
    q("image", S`L'image de \(y=3(0.5)^x+2\) est \(y>m\). Trouve \(m\).`, num(2),
      "a > 0, asymptote y = 2.", [S`\(y>2\).`], S`\(2\)`),
    q("bases", S`Quelle expression est égale à \(4^{x/2}\)?`, choice([S`\(2^x\)`, S`\(2^{x/2}\)`, S`\(4^{2x}\)`, S`\(8^x\)`], 0),
      "4 = 2².", [S`\((2^2)^{x/2}=2^x\).`], S`\(2^x\)`),
  ]),

  ...hard([
    ["Trouver a et d", S`\(y=a(2)^x+d\) passe par \((0,-1)\) et \((2,5)\). Trouve l'équation et l'asymptote.`,
      [S`\(a+d=-1\) et \(4a+d=5\). Soustrais : \(3a=6\Rightarrow a=2\), \(d=-3\).`],
      S`\(y=2(2)^x-3\); asymptote \(y=-3\)`],
    ["Les quatre paramètres", S`Trace le graphique de \(y=-2(3)^{-\frac12(x-4)}+6\), énonce son image et trouve son abscisse à l'origine.`,
      [S`\(a=-2\), \(k=-\tfrac12\), \(c=4\), \(d=6\) : \((x,y)\to(-2x+4,\ -2y+6)\).`, S`\((0,1)\to(4,4)\), \((1,3)\to(2,0)\), \((-1,\tfrac13)\to(6,5.33)\). Asymptote \(y=6\), image \(y<6\).`, S`Abscisse à l'origine : \(3^{-\frac12(x-4)}=3\Rightarrow-\tfrac12(x-4)=1\Rightarrow x=2\).`],
      S`image \(y<6\); abscisse à l'origine 2`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -6, ymax: 8 }, curves: [{ f: (x) => -2 * 3 ** (-0.5 * (x - 4)) + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], points: [{ x: 4, y: 4, label: "(4, 4)" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 6, y: 16 / 3 }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`\(y=a(3)^x+d\) passe par \((0,7)\) et \((1,13)\). Quelle est l'asymptote? Entre sa valeur de y.`, num(4),
      "Deux équations : a + d = 7, 3a + d = 13.", [S`\(a=3\), \(d=4\).`], S`\(y=4\)`),
    q("difficile", S`Trouve l'abscisse à l'origine de \(y=2^{x-1}-8\).`, num(4),
      "8 = 2³.", [S`\(2^{x-1}=2^3\).`], S`\(4\)`),
    q("difficile", S`Évalue \(y=2\left(\tfrac12\right)^{x-3}+1\) à \(x=1\).`, num(9),
      "(½)⁻² = 4.", [S`\(2(4)+1\).`], S`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi c ne déplace-t-il pas l'asymptote?", "Une translation horizontale fait glisser la courbe le long de l'asymptote; seule une translation verticale la déplace."],
      ["Comment trouver a à partir d'un graphique?", "Lis l'asymptote (d), puis utilise l'ordonnée à l'origine : a·b^(−kc) + d."],
      ["Toutes les fonctions exponentielles sont-elles des transformations de 2ˣ?", "Oui : toute base b > 0 peut s'écrire 2^(kx) pour une valeur de k appropriée."],
      ["Et si a < 0?", "Le graphique passe sous l'asymptote; une croissance devient une courbe descendante."],
      ["Ai-je toujours besoin de trois points clés?", "Deux points et l'asymptote suffisent pour une esquisse; trois points la rendent plus sûre."],
    ],
    summary: [
      "y = a·b^(k(x − c)) + d : (x, y) → (x/k + c, ay + d).",
      "Asymptote y = d; image y > d (a > 0) ou y < d (a < 0).",
      "Le domaine est toujours ℝ.",
      "Deux points (et l'asymptote) déterminent l'équation.",
    ],
    next: "La leçon 4.6 utilise les fonctions exponentielles pour modéliser la croissance, la décroissance et le refroidissement.",
  }),
];
