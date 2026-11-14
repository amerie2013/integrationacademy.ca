// MHF4U-FR 6.1 — La fonction exponentielle et son inverse (miroir de ../mhf4u-ch6/l6_1.mjs) : caractéristiques de
// y = b^x, l'inverse obtenue en échangeant les coordonnées et par réflexion dans y = x, l'équation x = b^y, l'échange
// du domaine, de l'image et des asymptotes, et un premier contact avec la « fonction logarithmique » (vue en 6.2).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "6.1 La fonction exponentielle et son inverse";
export const ID = lessonId(6, 1);

const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };
export const blocks = () => [
  intro({
    icon: "🪞",
    title: "La fonction exponentielle et son inverse",
    overview: S`Une fonction exponentielle \(y=b^x\) (avec \(b>0\), \(b\ne1\)) réussit le test de la droite horizontale : chaque valeur de sortie provient d'une seule valeur d'entrée. Son inverse est donc aussi une fonction. On obtient l'inverse en remplaçant chaque point \((x,y)\) par \((y,x)\), ce qui réfléchit le graphique dans la droite \(y=x\). Le domaine et l'image échangent leurs rôles, l'asymptote horizontale \(y=0\) devient l'asymptote verticale \(x=0\), et l'ordonnée à l'origine \((0,1)\) devient l'abscisse à l'origine \((1,0)\). Cette nouvelle fonction est la fonction logarithmique, le sujet du reste du chapitre.`,
    goals: [
      "énoncer les caractéristiques de \\(y=b^x\\) pour \\(b>1\\) et pour \\(0\\lt b\\lt1\\);",
      "construire une table de valeurs de l'inverse en échangeant les coordonnées;",
      "tracer l'inverse par réflexion dans \\(y=x\\);",
      "écrire l'inverse sous la forme \\(x=b^y\\) et donner son domaine, son image, son abscisse à l'origine et son asymptote;",
      "lire des valeurs de l'inverse sur un graphique.",
    ],
    curriculum: "A2.2 (reconnaître la relation entre une fonction exponentielle et son inverse, la fonction logarithmique, à l'aide d'une table de valeurs et de la réflexion dans y = x), A1.1 (le logarithme comme inverse de l'exponentiation — introduction)",
    prior: [
      [S`Évalue \(2^{-3}\).`, S`\(\frac18\).`],
      [S`Quel est l'inverse de \(f(x)=2x+6\)?`, S`Échange et isole : \(x=2y+6\Rightarrow f^{-1}(x)=\frac{x-6}2\).`],
      [S`Quelle est l'asymptote horizontale de \(y=3^x\)?`, S`\(y=0\).`],
    ],
    words: [
      ["Fonction exponentielle", "\\(y=b^x\\), \\(b>0\\), \\(b\\ne1\\)", "\\(y=3^x\\)"],
      ["Inverse", "défait la fonction : on échange x et y", "\\((2,9)\\to(9,2)\\)"],
      ["Droite de réflexion", "la droite \\(y=x\\)", "ses points sont invariants"],
      ["Fonction logarithmique", "l'inverse de \\(y=b^x\\); notée \\(y=\\log_b x\\) (6.2)", "inverse de \\(2^x\\)"],
    ],
  }),

  section("📌 Caractéristiques de y = bˣ", S`
  ${table(["Caractéristique", "b > 1 (croissance)", "0 < b < 1 (décroissance)"], [
    ["domaine", "\\(\\{x\\in\\mathbb R\\}\\)", "\\(\\{x\\in\\mathbb R\\}\\)"],
    ["image", "\\(y>0\\)", "\\(y>0\\)"],
    ["ordonnée à l'origine", "\\(1\\)", "\\(1\\)"],
    ["asymptote", "\\(y=0\\) (vers la gauche)", "\\(y=0\\) (vers la droite)"],
    ["comportement", "croissante", "décroissante"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: (x) => 0.5 ** x, color: "violet" }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "amber" }], step: { x: 1, y: 1 } }, "y = 2ˣ (en bleu) est croissante; y = (½)ˣ (en violet) est décroissante. Les deux passent par (0, 1) et s'approchent de y = 0.")}
  ${keyIdea(S`Toute exponentielle \(y=b^x\) est soit toujours croissante, soit toujours décroissante : deux valeurs d'entrée ne donnent jamais la même sortie. C'est exactement ce qu'il faut pour que son inverse soit aussi une fonction.`)}`),

  section("📌 Explore l'exponentielle", S`<p>Modifie la base \(b\). Remarque que l'ordonnée à l'origine reste 1 et que l'asymptote reste \(y=0\) tant que tu ne déplaces pas \(k\). Une base inférieure à 1 transforme la croissance en décroissance.</p>`),

  widget("ibExpGraph", { init: [1, 2, 0, 0] }),

  section("📌 Construire l'inverse", S`
  <p>Commence par une table de valeurs de \(y=2^x\), puis échange les colonnes. En reportant les points échangés, on obtient l'inverse, qui est l'image miroir de \(y=2^x\) par rapport à la droite \(y=x\).</p>
  ${table(["\\(y=2^x\\) : x", "y", "", "inverse : x", "y"], [
    ["\\(-2\\)", "\\(\\frac14\\)", "→", "\\(\\frac14\\)", "\\(-2\\)"],
    ["\\(-1\\)", "\\(\\frac12\\)", "→", "\\(\\frac12\\)", "\\(-1\\)"],
    ["\\(0\\)", "\\(1\\)", "→", "\\(1\\)", "\\(0\\)"],
    ["\\(1\\)", "\\(2\\)", "→", "\\(2\\)", "\\(1\\)"],
    ["\\(2\\)", "\\(4\\)", "→", "\\(4\\)", "\\(2\\)"],
    ["\\(3\\)", "\\(8\\)", "→", "\\(8\\)", "\\(3\\)"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: lg(2), a: 0.01, color: "violet" }], vlines: [], points: [{ x: 2, y: 4, label: "(2, 4)", color: "blue" }, { x: 4, y: 2, label: "(4, 2)", color: "violet" }, { x: 0, y: 1, color: "blue" }, { x: 1, y: 0, color: "violet" }], step: { x: 1, y: 1 } }, "y = 2ˣ (en bleu), son inverse (en violet) et la droite miroir y = x (pointillés).")}
  ${table(["", "y = 2ˣ", "inverse x = 2ʸ"], [
    ["domaine", "\\(x\\in\\mathbb R\\)", "\\(x>0\\)"],
    ["image", "\\(y>0\\)", "\\(y\\in\\mathbb R\\)"],
    ["intersection avec un axe", "ordonnée à l'origine \\(1\\)", "abscisse à l'origine \\(1\\)"],
    ["asymptote", "horizontale, \\(y=0\\)", "verticale, \\(x=0\\)"],
  ])}
  ${keyIdea(S`L'inverse de \(y=b^x\) est \(x=b^y\) : « \(y\) est l'exposant qu'on met sur \(b\) pour obtenir \(x\) ». C'est une fonction, appelée la <strong>fonction logarithmique</strong> de base \(b\), notée \(y=\log_b x\). En 6.2, tu apprendras à l'évaluer; ici, tu la découvres comme un graphique.`)}`),

  section("📌 Explore la réflexion", S`<p>La courbe verte en pointillés est \(y=b^x\) et la courbe violette est son inverse. Modifie la base et observe les deux courbes bouger ensemble, comme des images miroirs par rapport à \(y=x\). Déplace \(x\) pour voir que l'inverse donne l'exposant : \(b^{y}=x\).</p>`),

  widget("ibLogGraph", { init: [2, 0, 0] }),

  section("📌 Exponentielles transformées", S`
  <p>Pour \(y=a\cdot b^x+k\), échange \(x\) et \(y\), puis isole la puissance : \(b^y=\dfrac{x-k}{a}\). L'asymptote horizontale \(y=k\) de l'exponentielle devient l'asymptote verticale \(x=k\) de l'inverse, et chaque point d'intersection avec un axe change d'axe.</p>
  ${watchOut([
    "Échange les coordonnées, pas leurs signes : (2, 4) devient (4, 2), et non (−2, −4).",
    "L'inverse de y = bˣ n'est pas y = 1/bˣ. La réciproque est une autre fonction.",
    "L'inverse n'existe que pour x > 0 : aucun exposant ne rend bʸ nul ou négatif.",
    "L'asymptote horizontale y = k d'une exponentielle devient l'asymptote verticale x = k de son inverse.",
    "Un point de la droite y = x est sa propre image miroir : si les courbes se rencontrent, elles peuvent se rencontrer là.",
  ])}`),

  examples([
    ["Table et graphique d'une inverse", S`Construis une table de valeurs de \(y=3^x\) pour \(x=-2,-1,0,1,2\), puis donne la table et une esquisse de son inverse.`,
      [S`<b>Règle.</b> Une inverse échange chaque valeur d'entrée avec sa valeur de sortie, ce qui réfléchit le graphique dans \(y=x\).`,
        S`<b>Table de \(y=3^x\).</b> ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["\\(y\\)", "\\(\\frac19\\)", "\\(\\frac13\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"])}`,
        S`<b>Table de l'inverse.</b> ${tv(["\\(x\\)", "\\(\\frac19\\)", "\\(\\frac13\\)", "\\(1\\)", "\\(3\\)", "\\(9\\)"], ["\\(y\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"])}`,
        S`<b>Esquisse.</b> Reporte les points échangés. La courbe monte lentement et colle à l'axe des y lorsque \(x\to0^+\), parce que \(y=0\) était l'asymptote de \(y=3^x\).`,
        S`<b>Vérification.</b> \((2,9)\) sur la fonction initiale donne \((9,2)\) sur l'inverse, et \(3^2=9\) ✓`],
      S`points de l'inverse \(\left(\tfrac19,-2\right)\), \(\left(\tfrac13,-1\right)\), \((1,0)\), \((3,1)\), \((9,2)\)`,
      plane({ view: { xmin: -3, xmax: 10, ymin: -3, ymax: 10 }, lines: [YX], curves: [{ f: (x) => 3 ** x, color: "blue" }, { f: lg(3), a: 0.01, color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "violet" }, { x: 9, y: 2, label: "(9, 2)", color: "violet" }, { x: 1, y: 3, color: "blue" }], step: { x: 1, y: 1 } })],
    ["Inverse d'une fonction de décroissance", S`Donne le domaine, l'image, l'abscisse à l'origine, l'asymptote et le comportement de l'inverse de \(y=\left(\tfrac12\right)^x\).`,
      [S`<b>Inverse.</b> Échange \(x\) et \(y\) : \(x=\left(\tfrac12\right)^y\).`,
        S`<b>Domaine et image.</b> Ils s'échangent. La fonction initiale a pour domaine \(\mathbb R\) et pour image \(y>0\), donc l'inverse a pour domaine \(x>0\) et pour image \(\mathbb R\).`,
        S`<b>Point sur un axe.</b> \((0,1)\) sur la fonction initiale devient \((1,0)\) sur l'inverse.`,
        S`<b>Asymptote.</b> \(y=0\) sur la fonction initiale devient \(x=0\).`,
        S`<b>Comportement.</b> Une réflexion dans \(y=x\) conserve le sens de variation, donc l'inverse est aussi décroissante.`,
        S`<b>Vérification.</b> \(\left(\tfrac12\right)^{-3}=8\) donne \((8,-3)\) : un \(x\) plus grand, un \(y\) plus bas ✓`],
      S`domaine \(x>0\), image \(\mathbb R\), abscisse à l'origine 1, AV \(x=0\), décroissante`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [YX], curves: [{ f: (x) => 0.5 ** x, color: "blue" }, { f: lg(0.5), a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "violet" }, { x: 4, y: -2, label: "(4, −2)", color: "violet" }], step: { x: 1, y: 1 } })],
    ["Inverse d'une exponentielle translatée", S`Trouve l'équation de l'inverse de \(y=2^x+3\) et son asymptote.`,
      [S`<b>Échange.</b> \(x=2^y+3\).`,
        S`<b>Isole la puissance.</b> Soustrais 3 : \(2^y=x-3\).`,
        S`<b>Domaine.</b> \(2^y>0\), donc \(x-3>0\), ce qui donne \(x>3\).`,
        S`<b>Asymptote.</b> L'asymptote \(y=3\) de la fonction initiale se réfléchit en \(x=3\).`,
        S`<b>Vérification.</b> \((1,5)\) appartient à la fonction initiale, puisque \(2^1+3=5\). Le point échangé \((5,1)\) vérifie \(2^1=5-3\) ✓`],
      S`\(x=2^y+3\) (ou \(2^y=x-3\)); asymptote verticale \(x=3\)`,
      plane({ view: { xmin: -3, xmax: 10, ymin: -3, ymax: 10 }, lines: [YX, { m: 0, b: 3, color: "red", dash: true }], vlines: [{ x: 3, color: "red", dash: true }], curves: [{ f: (x) => 2 ** x + 3, color: "blue" }, { f: (x) => lg(2)(x - 3), a: 3.005, color: "violet" }], step: { x: 1, y: 1 } })],
    ["Trouver la base à partir d'un point", S`Le graphique de \(y=b^x\) passe par \((2,16)\). Trouve \(b\), puis la valeur de y sur l'inverse lorsque \(x=64\).`,
      [S`<b>Substitue.</b> \(b^2=16\). Une base doit être positive, donc \(b=4\).`,
        S`<b>Inverse.</b> L'échange donne \(x=4^y\).`,
        S`<b>Utilise \(x=64\).</b> \(4^y=64\). Puisque \(64=4^3\), en égalant les exposants, on obtient \(y=3\).`,
        S`<b>Vérification.</b> \((3,64)\) appartient à \(y=4^x\), donc \((64,3)\) appartient à l'inverse ✓`],
      S`\(b=4\); l'inverse passe par \((64,3)\)`,
      plane({ view: { xmin: -2, xmax: 70, ymin: -2, ymax: 18 }, curves: [{ f: (x) => 4 ** x, b: 2.1, color: "blue" }, { f: lg(4), a: 0.01, color: "violet" }], points: [{ x: 2, y: 16, label: "(2, 16)", color: "blue" }, { x: 64, y: 3, label: "(64, 3)", color: "violet" }], step: { x: 10, y: 2 } })],
    ["Estimer à partir du graphique", S`Utilise l'inverse de \(y=2^x\) pour estimer l'exposant \(y\) tel que \(2^y=10\).`,
      [S`<b>Encadre la valeur.</b> \(2^3=8\) et \(2^4=16\). Puisque \(8\lt10\lt16\), \(y\) est entre 3 et 4, et plus près de 3.`,
        S`<b>Lis le graphique.</b> L'inverse contient les points \((x,y)\) tels que \(2^y=x\). En \(x=10\), la hauteur est d'environ \(3.3\).`,
        S`<b>Précise.</b> \(2^{3.32}\approx9.99\), ce qui est très proche de 10.`,
        S`<b>Vérification.</b> \(3.32\) est entre 3 et 4, et plus près de 3 ✓`],
      S`\(y\approx3.32\)`,
      plane({ view: { xmin: -1, xmax: 12, ymin: -2, ymax: 5 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], vlines: [{ x: 10, color: "green", dash: true }], points: [{ x: 10, y: 3.32, label: "(10, 3.32)", color: "amber" }, { x: 8, y: 3, label: "(8, 3)", color: "violet" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("point de l'inverse", S`L'inverse de \(y=4^x\) passe par \((16,\ ?)\). Trouve la valeur de y manquante.`, num(2),
      "Quel exposant sur 4 donne 16?", [S`\(4^2=16\), donc \((2,16)\) appartient à \(y=4^x\) et \((16,2)\) appartient à l'inverse.`], S`\(2\)`),
    q("abscisse à l'origine", S`Trouve l'abscisse à l'origine de l'inverse de \(y=7^x\).`, num(1),
      "Échange l'ordonnée à l'origine de y = 7ˣ.", [S`\(y=7^x\) a pour ordonnée à l'origine \((0,1)\); l'inverse passe par \((1,0)\).`], S`\(1\)`),
    q("asymptote", S`L'inverse de \(y=2^x-5\) a une asymptote verticale \(x=c\). Trouve \(c\).`, num(-5),
      "L'asymptote horizontale de y = 2ˣ − 5 est y = −5.", [S`Échange : \(x=2^y-5\Rightarrow2^y=x+5>0\), donc \(x>-5\).`], S`\(-5\)`),
    q("domaine", S`Quel est le domaine de l'inverse de \(y=6^x\)?`, choice(["x > 0", "tous les nombres réels", "x ≥ 1", "x > 1"], 0),
      "C'est l'image de y = 6ˣ.", [S`L'image de \(6^x\) est \(y>0\); elle devient le domaine de l'inverse.`], "x > 0"),
    q("lire l'inverse", S`Trouve la valeur de y sur l'inverse de \(y=3^x\) lorsque \(x=\frac1{27}\).`, num(-3),
      "Quel exposant sur 3 donne 1/27?", [S`\(3^{-3}=\frac1{27}\).`], S`\(-3\)`),
  ]),

  ...hard([
    ["Inverse d'une exponentielle étirée et translatée", S`Pour \(f(x)=3\cdot2^x-6\) : a) écris l'inverse en isolant la puissance; b) donne son domaine, son image et son asymptote; c) trouve les deux points d'intersection de l'inverse avec les axes.`,
      [S`Échange : \(x=3\cdot2^y-6\Rightarrow2^y=\dfrac{x+6}{3}\).`, S`\(\dfrac{x+6}3>0\Rightarrow x>-6\). Domaine \(x>-6\), image \(\mathbb R\), asymptote \(x=-6\) (provenant de \(y=-6\)).`, S`\(f(0)=3-6=-3\) : \(f\) a pour ordonnée à l'origine \((0,-3)\), donc l'inverse a pour abscisse à l'origine \((-3,0)\).`, S`\(f(x)=0\Rightarrow2^x=2\Rightarrow x=1\) : \(f\) a pour abscisse à l'origine \((1,0)\), donc l'inverse a pour ordonnée à l'origine \((0,1)\).`],
      S`\(2^y=\tfrac{x+6}3\); domaine \(x>-6\); AV \(x=-6\); points \((-3,0)\) et \((0,1)\)`,
      plane({ view: { xmin: -8, xmax: 6, ymin: -8, ymax: 6 }, lines: [YX], vlines: [{ x: -6, color: "red", dash: true }], curves: [{ f: (x) => 3 * 2 ** x - 6, color: "blue" }, { f: (x) => lg(2)((x + 6) / 3), a: -5.99, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "violet" }, { x: 0, y: 1, label: "(0, 1)", color: "violet" }], step: { x: 1, y: 1 } })],
    ["Quand une exponentielle rencontre son inverse", S`Montre que \(y=\left(\sqrt2\right)^x\) et son inverse se rencontrent en \((2,2)\) et en \((4,4)\). Explique pourquoi une fonction croissante et son inverse ne peuvent se rencontrer que sur la droite \(y=x\).`,
      [S`\(\left(\sqrt2\right)^2=2\) et \(\left(\sqrt2\right)^4=4\), donc \((2,2)\) et \((4,4)\) appartiennent à la courbe.`, S`L'échange de \((2,2)\) ou de \((4,4)\) donne le même point, donc les deux appartiennent aussi à l'inverse.`, S`Suppose que \(f\) est croissante et que \(f(a)=b\) avec \(b\gt a\). Alors \(f(b)\gt f(a)=b\), donc \(f(b)\ne a\) et \((a,b)\) ne peut pas appartenir à l'inverse. Le cas \(b\lt a\) est identique avec les inégalités inversées. Tout point commun doit donc vérifier \(b=a\).`],
      S`les points communs sont sur \(y=x\) : ici \((2,2)\) et \((4,4)\)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [YX], curves: [{ f: (x) => Math.SQRT2 ** x, color: "blue" }, { f: lg(Math.SQRT2), a: 0.01, color: "violet" }], points: [{ x: 2, y: 2, label: "(2, 2)", color: "amber" }, { x: 4, y: 4, label: "(4, 4)", color: "amber" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`L'inverse de \(y=5^x-2\) passe par \((23,\ ?)\). Trouve la valeur de y.`, num(2),
      "Échange : x = 5ʸ − 2.", [S`\(23=5^y-2\Rightarrow5^y=25\Rightarrow y=2\).`], S`\(2\)`),
    q("difficile", S`\(y=b^x\) passe par \((3,8)\). Trouve la valeur de y sur son inverse lorsque \(x=\frac14\).`, num(-2),
      "Trouve d'abord b.", [S`\(b^3=8\Rightarrow b=2\).`, S`\(2^y=\frac14\Rightarrow y=-2\).`], S`\(-2\)`),
    q("difficile", S`Trouve l'abscisse à l'origine de l'inverse de \(f(x)=2^{x-1}\).`, num(0.5, 0.0001),
      "Échange l'ordonnée à l'origine de f.", [S`\(f(0)=2^{-1}=\frac12\) : \(f\) passe par \(\left(0,\frac12\right)\).`, S`L'inverse passe par \(\left(\frac12,0\right)\).`], S`\(0.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'inverse de y = bˣ est-elle une fonction?", "y = bˣ est toujours croissante ou toujours décroissante, donc elle réussit le test de la droite horizontale; sa réflexion réussit le test de la droite verticale."],
      ["Pourquoi le domaine de l'inverse est-il x > 0?", "C'est l'image de y = bˣ : une base positive élevée à n'importe quelle puissance donne un nombre positif."],
      ["Qu'arrive-t-il à l'asymptote?", "L'asymptote horizontale y = 0 se réfléchit en l'asymptote verticale x = 0 (y = k devient x = k)."],
      ["L'inverse est-elle la même chose que 1/bˣ?", "Non. 1/bˣ = (1/b)ˣ est une autre exponentielle; l'inverse échange les valeurs d'entrée et de sortie."],
      ["Que me dit l'inverse?", "Pour une valeur de sortie x, elle donne l'exposant y tel que bʸ = x — cet exposant s'appelle un logarithme."],
    ],
    summary: [
      "y = bˣ : domaine ℝ, image y > 0, ordonnée à l'origine 1, asymptote y = 0.",
      "Inverse : échange (x, y) → (y, x); réflexion dans y = x; équation x = bʸ.",
      "Inverse : domaine x > 0, image ℝ, abscisse à l'origine 1, asymptote x = 0.",
      "L'inverse est la fonction logarithmique y = log_b x.",
    ],
    next: "La leçon 6.2 donne un nom à l'inverse : les logarithmes, comment les évaluer et leur lien avec les exposants.",
  }),
];
