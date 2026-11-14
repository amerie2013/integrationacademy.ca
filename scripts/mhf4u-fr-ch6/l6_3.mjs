// MHF4U-FR 6.3 — Transformations des fonctions logarithmiques (miroir de ../mhf4u-ch6/l6_3.mjs) : caractéristiques de
// y = log_b x, les quatre paramètres de y = a log_b(k(x − c)) + d, la règle de correspondance et l'équation d'un graphique.
// NOTATION FRANÇAISE : c = translation horizontale, d = translation verticale (l'anglais écrit (x − d) + c).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "6.3 Transformations des fonctions logarithmiques";
export const ID = lessonId(6, 3);

const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const st = { x: 1, y: 1 };
const va = (x) => ({ x, color: "red", dash: true });
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Transformations des fonctions logarithmiques",
    overview: S`Le graphique de \(y=\log_b x\) a une asymptote verticale \(x=0\), passe par \((1,0)\) et \((b,1)\), et monte lentement sans fin lorsque \(b>1\). Tout autre graphique logarithmique est ce graphique étiré, réfléchi et translaté : \(y=a\log_b\big(k(x-c)\big)+d\). Les mêmes règles que pour toutes les autres familles de fonctions s'appliquent, et l'asymptote se déplace avec la translation horizontale.`,
    goals: [
      "énoncer les caractéristiques de \\(y=\\log_b x\\);",
      "décrire l'effet de \\(a\\), \\(k\\), \\(c\\) et \\(d\\);",
      "transformer des points clés avec \\((x,y)\\to\\left(\\frac xk+c,\\ ay+d\\right)\\);",
      "donner le domaine, l'image et l'asymptote d'un logarithme transformé;",
      "écrire l'équation d'un graphique logarithmique.",
    ],
    curriculum: "A2.1 (représenter graphiquement des fonctions logarithmiques et en reconnaître les caractéristiques), A2.3 (transformations des fonctions logarithmiques)",
    prior: [
      [S`Évalue \(\log_2 8\) et \(\log_2\frac12\).`, S`\(3\) et \(-1\).`],
      [S`Quel est l'effet de \(y=f(x-3)+2\) sur \(y=f(x)\)?`, S`3 vers la droite, 2 vers le haut.`],
      [S`Quel est l'effet de \(y=f(2x)\)?`, S`Une compression horizontale de facteur \(\frac12\).`],
    ],
    words: [
      ["Asymptote verticale", "une droite verticale dont le graphique s'approche sans jamais l'atteindre", "\\(x=0\\) pour \\(y=\\log x\\)"],
      ["Domaine", "les valeurs d'entrée permises; l'argument doit être positif", "\\(x>0\\)"],
      ["Points clés", "des points faciles à transformer, p. ex. \\((\\frac1b,-1),(1,0),(b,1)\\)", "\\((\\frac12,-1),(1,0),(2,1)\\)"],
      ["Règle de correspondance", "\\((x,y)\\to(\\frac xk+c,\\ ay+d)\\)", "où chaque point se déplace"],
    ],
  }),

  section("📌 Le graphique parent y = log_b x", S`
  ${table(["Caractéristique", "\\(y=\\log_b x\\), \\(b>1\\)"], [["domaine", "\\(x>0\\)"], ["image", "tous les nombres réels"], ["abscisse à l'origine", "\\(1\\)"], ["asymptote verticale", "\\(x=0\\)"], ["points clés", "\\(\\left(\\frac1b,-1\\right),\\ (1,0),\\ (b,1)\\)"], ["comportement", "croissante, de plus en plus lentement"]])}
  ${plane({ view: { xmin: -1, xmax: 11, ymin: -4, ymax: 4 }, vlines: [va(0)], curves: [{ f: lg(2), a: 0.01, color: "violet" }, { f: Math.log10, a: 0.01, color: "blue" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "violet" }, { x: 10, y: 1, label: "(10, 1)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: st }, "y = log₂ x (en violet) et y = log x (en bleu) : les deux passent par (1, 0) et ont l'asymptote x = 0.")}`),

  section("📌 Les quatre paramètres", S`
  ${table(["Dans \\(y=a\\log_b\\big(k(x-c)\\big)+d\\)", "Effet", "Ce qui change"], [
    ["\\(a\\)", "étirement vertical de facteur \\(|a|\\); réflexion dans l'axe des x si \\(a<0\\)", "coordonnées y \\(\\times a\\)"],
    ["\\(k\\)", "étirement horizontal de facteur \\(\\frac1{|k|}\\); réflexion dans l'axe des y si \\(k<0\\)", "coordonnées x \\(\\div k\\)"],
    ["\\(c\\)", "translation de \\(c\\) vers la droite (vers la gauche si \\(c<0\\))", "l'asymptote devient \\(x=c\\)"],
    ["\\(d\\)", "translation de \\(d\\) vers le haut (vers le bas si \\(d<0\\))", "coordonnées y \\(+d\\)"],
  ])}
  ${keyIdea(S`Règle de correspondance : \[(x,\,y)\ \longrightarrow\ \left(\frac xk+c,\ ay+d\right)\] Domaine : l'argument doit être positif, \(k(x-c)>0\). Pour \(k>0\), cela signifie \(x>c\).`)}`),

  widget("ibLogGraph", { init: [2, 3, -1] }),

  section("📌 Attention", watchOut([
    "Mets d'abord k en évidence : log(2x − 6) = log(2(x − 3)), donc c = 3, et non 6.",
    "L'asymptote verticale se déplace seulement avec c (x = c); d déplace le graphique vers le haut, mais pas l'asymptote.",
    "Un k négatif place le graphique à gauche de l'asymptote : le domaine devient x < c.",
    "Applique les étirements et les réflexions avant les translations lorsque tu transformes des points.",
    "Vérifie le domaine en testant l'argument en un point : il doit être positif.",
  ])),

  examples([
    ["Caractéristiques d'un graphique parent", S`Donne le domaine, l'image, l'abscisse à l'origine, l'asymptote et trois points clés de \(y=\log_3 x\).`,
      [S`<b>Règle.</b> \(y=\log_bx\) est la réflexion de \(y=b^x\) dans \(y=x\), donc leurs caractéristiques s'échangent.`,
        S`<b>À partir de \(y=3^x\) :</b> domaine \(\mathbb R\to\) image; image \(y>0\to\) domaine \(x>0\); asymptote \(y=0\to x=0\); ordonnée à l'origine \(1\to\) abscisse à l'origine \(1\).`,
        S`<b>Points clés :</b> \(\log_3\frac13=-1\), \(\log_31=0\), \(\log_33=1\) : \(\left(\frac13,-1\right),(1,0),(3,1)\). Ajoute \((9,2)\) pour la forme.`,
        S`<b>Vérification :</b> \(3^2=9\), donc \((9,2)\) appartient à la courbe ✓`],
      S`domaine \(x>0\), image \(\mathbb R\), abscisse à l'origine \(1\), AV \(x=0\); \(\left(\frac13,-1\right),(1,0),(3,1)\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 3 }, vlines: [va(0)], curves: [{ f: lg(3), a: 0.01, color: "violet" }], points: [{ x: 1 / 3, y: -1, label: "(⅓, −1)", color: "blue" }, { x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 9, y: 2, label: "(9, 2)", color: "blue" }], step: st })],
    ["Deux translations", S`Trace \(y=\log_2(x-3)+1\). Donne l'asymptote, le domaine et l'image des points clés.`,
      [S`<b>Associe :</b> \(a=1,\ k=1,\ c=3,\ d=1\) : 3 vers la droite, 1 vers le haut.`,
        S`<b>Correspondance</b> \((x,y)\to(x+3,\ y+1)\) : \(\left(\frac12,-1\right)\to\left(3.5,0\right)\), \((1,0)\to(4,1)\), \((2,1)\to(5,2)\), \((4,2)\to(7,3)\).`,
        S`<b>Asymptote :</b> \(x=0\to x=3\). <b>Domaine :</b> \(x-3>0\), donc \(x>3\). Image : tous les réels.`,
        S`<b>Vérifie un point :</b> \(x=7\) : \(\log_24+1=2+1=3\) ✓`],
      S`AV \(x=3\); domaine \(x>3\); \((3.5,0),(4,1),(5,2),(7,3)\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 4 }, vlines: [va(3)], curves: [{ f: lg(2), a: 0.01, color: "gray" }, { f: (x) => lg(2)(x - 3) + 1, a: 3.005, color: "violet" }], points: [{ x: 4, y: 1, label: "(4, 1)", color: "blue" }, { x: 7, y: 3, label: "(7, 3)", color: "blue" }], step: st })],
    ["Une réflexion et un étirement", S`Décris et trace \(y=-2\log x\).`,
      [S`<b>Associe :</b> \(a=-2\) : étirement vertical de facteur \(2\) et réflexion dans l'axe des x; \(k=1,\ c=0,\ d=0\).`,
        S`<b>Correspondance</b> \((x,y)\to(x,-2y)\) : \((0.1,-1)\to(0.1,2)\), \((1,0)\to(1,0)\), \((10,1)\to(10,-2)\).`,
        S`<b>Caractéristiques :</b> l'asymptote est toujours \(x=0\); le domaine est \(x>0\); le graphique est maintenant <i>décroissant</i>.`,
        S`<b>Vérification :</b> \(x=100\) : \(-2\log100=-2(2)=-4\), donc il continue de descendre ✓`],
      S`étirement de facteur 2, réflexion dans l'axe des x; \((0.1,2),(1,0),(10,-2)\)`,
      plane({ view: { xmin: -1, xmax: 12, ymin: -4, ymax: 4 }, vlines: [va(0)], curves: [{ f: Math.log10, a: 0.01, color: "gray" }, { f: (x) => -2 * Math.log10(x), a: 0.01, color: "violet" }], points: [{ x: 10, y: -2, label: "(10, −2)", color: "blue" }, { x: 0.1, y: 2, label: "(0.1, 2)", color: "blue" }], step: st })],
    ["Mettre en évidence avant de lire c", S`Donne les transformations, l'asymptote et le domaine de \(y=\log_2(4x-8)\).`,
      [S`<b>Règle.</b> Lis \(c\) seulement après avoir mis \(k\) en évidence : \(4x-8=4(x-2)\).`,
        S`<b>Associe :</b> \(k=4\) : compression horizontale de facteur \(\frac14\); \(c=2\) : 2 vers la droite.`,
        S`<b>Asymptote</b> \(x=2\); <b>domaine</b> \(4(x-2)>0\Rightarrow x>2\).`,
        S`<b>Correspondance</b> \((x,y)\to\left(\frac x4+2,\ y\right)\) : \((1,0)\to(2.25,0)\), \((4,2)\to(3,2)\).`,
        S`<b>Vérification :</b> \(x=3\) : \(\log_2(12-8)=\log_24=2\) ✓`],
      S`compression de facteur \(\frac14\), 2 vers la droite; AV \(x=2\); domaine \(x>2\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -3, ymax: 5 }, vlines: [va(2)], curves: [{ f: (x) => lg(2)(4 * x - 8), a: 2.002, color: "violet" }], points: [{ x: 2.25, y: 0, label: "(2.25, 0)", color: "blue" }, { x: 3, y: 2, label: "(3, 2)", color: "blue" }], step: st })],
    ["Une équation à partir d'un graphique", S`Un graphique de la forme \(y=\log_2(x-c)+d\) a l'asymptote \(x=-1\) et passe par \((0,-3)\) et \((3,-1)\). Trouve son équation.`,
      [S`<b>L'asymptote donne \(c\) :</b> \(x=c=-1\), donc \(y=\log_2(x+1)+d\).`,
        S`<b>Utilise un point :</b> \((0,-3)\) : \(-3=\log_2(1)+d=0+d\), donc \(d=-3\).`,
        S`<b>Équation :</b> \(y=\log_2(x+1)-3\).`,
        S`<b>Vérifie l'autre point :</b> \(x=3\) : \(\log_24-3=2-3=-1\) ✓`],
      S`\(y=\log_2(x+1)-3\)`,
      plane({ view: { xmin: -3, xmax: 8, ymin: -6, ymax: 2 }, vlines: [va(-1)], curves: [{ f: (x) => lg(2)(x + 1) - 3, a: -0.995, color: "violet" }], points: [{ x: 0, y: -3, label: "(0, −3)", color: "blue" }, { x: 3, y: -1, label: "(3, −1)", color: "blue" }], step: st })],
  ]),

  practice([
    q("asymptote", S`Quelle est l'asymptote verticale de \(y=\log(x+5)-2\)? Entre la valeur de \(c\) dans \(x=c\).`, num(-5), "L'asymptote se déplace avec c.", [S`\(x+5=x-(-5)\) : \(c=-5\).`], S`\(-5\)`),
    q("domaine", S`Quel est le domaine de \(y=\log_3(2x-6)\)?`, choice(["x > 3", "x > 6", "x > 0", "x < 3"], 0), "L'argument doit être positif.", [S`\(2x-6>0\Rightarrow x>3\).`], "x > 3"),
    q("image d'un point", S`Le point \((8,3)\) appartient à \(y=\log_2x\). Trouve la coordonnée y de son image sur \(y=3\log_2x-4\).`, num(5), "y → 3y − 4.", [S`\(3(3)-4=5\).`], S`\(5\)`),
    q("abscisse à l'origine", S`Trouve l'abscisse à l'origine de \(y=\log_2(x-1)\).`, num(2), "Le log₂ de quel nombre vaut 0?", [S`\(x-1=1\Rightarrow x=2\).`], S`\(2\)`),
    q("trouver d", S`\(y=\log x+d\) passe par \((100,5)\). Trouve \(d\).`, num(3), "log 100 = 2.", [S`\(5=2+d\Rightarrow d=3\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Une réflexion dans l'axe des y", S`Pour \(y=3\log_2(4-x)+1\) : a) écris-la sous la forme \(a\log_2\big(k(x-c)\big)+d\); b) donne le domaine et l'asymptote; c) trouve l'image de \((2,1)\) et l'abscisse à l'origine.`,
      [S`<b>a)</b> \(4-x=-(x-4)\) : \(a=3,\ k=-1,\ c=4,\ d=1\).`,
        S`<b>b)</b> \(-(x-4)>0\Rightarrow x<4\); asymptote \(x=4\). Le graphique se trouve à sa gauche.`,
        S`<b>c)</b> correspondance \((x,y)\to\left(\frac x{-1}+4,\ 3y+1\right)\) : \((2,1)\to(2,4)\).`,
        S`<b>Abscisse à l'origine :</b> \(3\log_2(4-x)+1=0\Rightarrow\log_2(4-x)=-\frac13\Rightarrow4-x=2^{-1/3}\approx0.794\Rightarrow x\approx3.206\).`,
        S`<b>Vérification de c) :</b> \(x=2\) : \(3\log_22+1=4\) ✓`],
      S`domaine \(x<4\), AV \(x=4\); \((2,4)\); abscisse à l'origine \(\approx3.21\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, vlines: [va(4)], curves: [{ f: (x) => 3 * lg(2)(4 - x) + 1, b: 3.995, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "blue" }], step: st })],
    ["Trouver a et d à partir de deux points", S`\(y=a\log x+d\) passe par \((1,5)\) et \((100,9)\). Trouve \(a\) et \(d\), puis trouve \(y\) en \(x=1000\).`,
      [S`<b>Point \((1,5)\) :</b> \(\log1=0\), donc \(5=d\).`,
        S`<b>Point \((100,9)\) :</b> \(9=a\log100+5=2a+5\), donc \(a=2\).`,
        S`<b>Équation :</b> \(y=2\log x+5\). En \(x=1000\) : \(2(3)+5=11\).`,
        S`<b>Vérification :</b> chaque facteur \(10\) de \(x\) ajoute \(a=2\) à \(y\) : \(5\to7\to9\to11\) ✓`],
      S`\(a=2\), \(d=5\); \(y=11\)`],
  ], [
    q("difficile", S`Trouve l'abscisse à l'origine de \(y=2\log_3(x+4)-4\).`, num(5), "Pose y = 0.", [S`\(\log_3(x+4)=2\Rightarrow x+4=9\).`], S`\(5\)`),
    q("difficile", S`Pour \(y=-\log_2(8-2x)\), l'asymptote est \(x=c\). Trouve \(c\).`, num(4), "8 − 2x = −2(x − 4).", [S`\(c=4\).`], S`\(4\)`),
    q("difficile", S`Le point \((4,2)\) de \(y=\log_2x\) correspond à quelle coordonnée x sur \(y=\log_2(2(x+1))\)?`, num(1), "x → x/k + c.", [S`\(\frac42-1=1\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Où se trouve l'asymptote de y = a log_b(k(x − c)) + d?", "En x = c; seule la translation horizontale la déplace."],
      ["Pourquoi dois-je mettre k en évidence d'abord?", "c se lit dans (x − c); log(2x − 6) = log(2(x − 3)) a c = 3."],
      ["Comment trouver le domaine?", "Pose l'argument plus grand que 0 et résous."],
      ["Quel est l'effet d'un a négatif?", "Il réfléchit le graphique dans l'axe des x : la fonction décroît au lieu de croître."],
      ["Quels points dois-je transformer?", "(1/b, −1), (1, 0), (b, 1) et un autre, comme (b², 2)."],
    ],
    summary: [
      "y = log_b x : domaine x > 0, image ℝ, AV x = 0, passe par (1, 0) et (b, 1).",
      "y = a log_b(k(x − c)) + d : étirement a, compression 1/k, translations c et d.",
      "Correspondance : (x, y) → (x/k + c, ay + d); AV x = c.",
      "Pour trouver une équation, commence par l'asymptote, puis utilise des points.",
    ],
    next: "La leçon 6.4 démontre la loi de la puissance des logarithmes et l'utilise avec n'importe quelle base.",
  }),
];
