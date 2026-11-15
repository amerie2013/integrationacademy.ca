// MCR3U-FR 6.4 — Transformations des fonctions sinusoïdales : rôles de a, k, c, d dans y = a sin(k(x − c)) + d et
// y = a cos(k(x − c)) + d (notation française : c = déphasage, d = axe); amplitude, période, déphasage, axe,
// domaine et image à partir d'une équation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.4 Transformations des fonctions sinusoïdales";
export const ID = lessonId(6, 4);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const G = (curves, o = {}) => plane({ view: o.view ?? { xmin: -90, xmax: 720, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sin(r(x)), color: "gray" }, ...curves], lines: o.lines ?? [], points: o.points ?? [], step: o.step ?? { x: 90, y: 1 } }, o.cap ?? "");

export const blocks = () => [
  intro({
    icon: "🎛️",
    title: "Transformations des fonctions sinusoïdales",
    overview: S`Toute fonction sinusoïdale peut s'écrire \(y=a\sin(k(x-c))+d\) ou \(y=a\cos(k(x-c))+d\). Les quatre paramètres jouent le même rôle que pour toute fonction que tu as déjà transformée : \(a\) produit un étirement vertical, \(k\) un étirement horizontal, \(c\) une translation vers la gauche ou la droite, et \(d\) une translation vers le haut ou le bas. Pour les sinusoïdes, ils portent des noms particuliers — amplitude, période, déphasage et axe.`,
    goals: [
      "décrire l'effet de chacun des paramètres a, k, c et d sur y = sin x et y = cos x;",
      "donner l'amplitude |a| et la période 360°/|k|;",
      "donner le déphasage c et l'axe y = d;",
      "trouver le domaine, l'image, le maximum et le minimum à partir de l'équation;",
      "mettre k en évidence dans la parenthèse avant de lire le déphasage.",
    ],
    curriculum: "D2.5 (déterminer le rôle des paramètres a, k, c et d dans les fonctions de la forme y = af(k(x − c)) + d, où f(x) = sin x ou cos x, et décrire ces rôles en termes de transformations), D2.6 (déterminer l'amplitude, la période, le déphasage, le domaine et l'image de fonctions sinusoïdales dont l'équation est donnée sous la forme f(x) = a sin(k(x − c)) + d ou f(x) = a cos(k(x − c)) + d)",
    prior: [
      [S`Comment \(y=(x-3)^2+1\) se compare-t-elle à \(y=x^2\)?`, "3 vers la droite, 1 vers le haut."],
      [S`Quel est l'effet de \(y=f(2x)\) sur le graphique de \(f\)?`, "Une compression horizontale de facteur ½."],
      [S`Quelle est la période de \(y=\sin x\)?`, "360°."],
    ],
    words: [
      ["Amplitude", "\\(|a|\\)", ""],
      ["Période", "\\(\\frac{360^\\circ}{|k|}\\)", ""],
      ["Déphasage", "\\(c\\) : vers la droite si \\(c>0\\), vers la gauche si \\(c<0\\)", ""],
      ["Axe", "\\(y=d\\); image \\(d-|a|\\le y\\le d+|a|\\)", ""],
    ],
  }),

  section("📌 Le rôle de chaque paramètre", S`
  ${table(["Paramètre", "Transformation", "Propriété"], [["a", "étirement vertical de facteur |a|; réflexion par rapport à l'axe si a < 0", "amplitude |a|"], ["k", "étirement ou compression horizontal de facteur 1/|k|", "période 360°/|k|"], ["c", "translation horizontale", "déphasage c"], ["d", "translation verticale", "axe y = d"]])}
  ${G([{ f: (x) => 3 * Math.sin(r(x)), color: "violet" }, { f: (x) => Math.sin(r(2 * x)), color: "amber" }], { cap: "y = 3 sin x (violet, amplitude 3) et y = sin 2x (ambre, période 180°) comparées à y = sin x (gris)" })}
  ${keyIdea(S`Écris toujours la parenthèse sous la forme \(k(x-c)\). Dans \(y=\sin(2x-60^\circ)\), mets d'abord \(k\) en évidence : \(\sin(2(x-30^\circ))\) — le déphasage est de 30°, et non de 60°.`)}`),

  section("📌 Explorer", S`<p>Déplace un seul curseur à la fois et fais une prédiction avant de regarder. Essaie ensuite d'obtenir un graphique d'amplitude 2, de période 180°, avec un déphasage de 45° vers la droite et l'axe y = 1.</p>`),

  widget("sinTransform", { fn: "sin", init: { a: 2, k: 1, d: 0, c: 0 } }),

  section("📌 Attention", watchOut([
    "La période est 360° ÷ k — plus k est grand, plus la période est courte.",
    "Dans sin(x + 45°), c = −45° : la translation est vers la GAUCHE.",
    "Un a négatif renverse le graphique, mais l'amplitude reste |a|.",
    "Mets k en évidence avant de lire c.",
  ])),

  examples([
    ["Étirement vertical", S`Décris \(y=3\sin x\) et donne son image.`,
      [S`<b>Lire l'équation.</b> Le 3 multiplie chaque valeur de sortie de \(\sin x\). C'est donc un étirement vertical de facteur 3.`,
        S`<b>Ce qui change.</b> L'amplitude devient 3. Chaque hauteur est 3 fois plus loin de l'axe. ${tv(["\\(x\\)", "\\(0^\\circ\\)", "\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(270^\\circ\\)", "\\(360^\\circ\\)"], ["\\(\\sin x\\)", "0", "1", "0", "\\(-1\\)", "0"], ["\\(3\\sin x\\)", "0", "3", "0", "\\(-3\\)", "0"])}`,
        S`<b>Ce qui ne change pas.</b> Les zéros et la période (\(360^\circ\)) ne changent pas, car \(x\) n'est pas modifié.`,
        S`<b>Image.</b> \(-1\le\sin x\le1\); en multipliant par 3, on obtient \(-3\le y\le3\).`],
      S`étirement vertical de facteur 3; image \(-3\le y\le3\)`,
      G([{ f: (x) => 3 * Math.sin(r(x)), color: "violet" }], { points: [{ x: 90, y: 3, label: "(90°, 3)", color: "amber" }, { x: 270, y: -3, label: "(270°, −3)", color: "amber" }], cap: "gris y = sin x, violet y = 3 sin x" })],
    ["Étirement et compression horizontaux", S`Trouve la période de \(y=\sin2x\) et celle de \(y=\cos\frac x2\).`,
      [S`<b>Règle.</b> Pour \(y=\sin kx\), un cycle se termine lorsque \(kx=360^\circ\); la période est donc \(\frac{360^\circ}{k}\).`,
        S`<b>Première.</b> \(k=2\) : \(\frac{360^\circ}2=180^\circ\). La variable avance deux fois plus vite, donc le graphique est comprimé.`,
        S`<b>Deuxième.</b> \(k=\frac12\) : \(\frac{360^\circ}{1/2}=720^\circ\). La variable avance deux fois moins vite, donc le graphique est étiré.`,
        S`<b>Vérification.</b> \(\sin2(180^\circ)=\sin360^\circ=0\), la fin d'un cycle ✓. \(\cos\frac{720^\circ}2=\cos360^\circ=1\) ✓`],
      S`\(180^\circ\) et \(720^\circ\)`,
      plane({ view: { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(r(2 * x)), color: "violet" }, { f: (x) => Math.cos(r(x / 2)), color: "blue" }], points: [{ x: 180, y: 0, label: "(180°, 0)", color: "violet" }, { x: 720, y: 1, label: "(720°, 1)", color: "blue" }], step: { x: 90, y: 0.5 } }, "violet y = sin 2x, bleu y = cos(x/2)")],
    ["Translations", S`Décris \(y=\sin(x-60^\circ)\) et \(y=\cos x+2\).`,
      [S`<b>Première fonction.</b> Dans la parenthèse, \(x-60^\circ\) est un déphasage. L'entrée doit être plus grande de \(60^\circ\) pour donner la même sortie, donc le graphique se déplace de \(60^\circ\) vers la droite.`,
        S`<b>Point clé.</b> Le maximum du sinus en \((90^\circ,1)\) se déplace en \((150^\circ,1)\). Vérification : \(\sin(150^\circ-60^\circ)=\sin90^\circ=1\) ✓`,
        S`<b>Deuxième fonction.</b> À l'extérieur, \(+2\) augmente chaque valeur de sortie de 2, donc l'axe devient \(y=2\).`,
        S`<b>Image.</b> \(-1\le\cos x\le1\), donc \(1\le y\le3\).`],
      "60° vers la droite; 2 vers le haut (axe y = 2, image 1 ≤ y ≤ 3)",
      G([{ f: (x) => Math.sin(r(x - 60)), color: "violet" }, { f: (x) => Math.cos(r(x)) + 2, color: "blue" }], { view: { xmin: -90, xmax: 450, ymin: -2, ymax: 4 }, step: { x: 30, y: 0.5 }, points: [{ x: 150, y: 1, label: "max (150°, 1)" }, { x: 0, y: 3, label: "(0°, 3)", color: "blue" }], cap: "gris sin x, violet sin(x − 60°), bleu cos x + 2" })],
    ["Les quatre à la fois", S`Donne les propriétés de \(y=-2\cos(3(x+30^\circ))-1\).`,
      [S`<b>Associer à la forme</b> \(y=a\cos(k(x-c))+d\) : \(a=-2\), \(k=3\), \(c=-30^\circ\), \(d=-1\).`,
        S`<b>Amplitude.</b> \(|a|=2\). Le signe moins est une réflexion par rapport à l'axe; la courbe commence donc à un minimum au lieu d'un maximum.`,
        S`<b>Période.</b> \(\frac{360^\circ}3=120^\circ\).`,
        S`<b>Déphasage et axe.</b> \(30^\circ\) vers la gauche, et axe \(y=-1\).`,
        S`<b>Image.</b> \(-1-2\le y\le-1+2\), donc \(-3\le y\le1\).`,
        S`<b>Vérification.</b> En \(x=-30^\circ\) : \(-2\cos0^\circ-1=-3\), le minimum ✓`],
      S`amplitude 2 (avec réflexion), période \(120^\circ\), \(30^\circ\) vers la gauche, axe \(y=-1\), image \(-3\le y\le1\)`,
      plane({ view: { xmin: -90, xmax: 240, ymin: -4, ymax: 2 }, curves: [{ f: (x) => -2 * Math.cos(r(3 * (x + 30))) - 1, color: "violet" }], lines: [{ m: 0, b: -1, color: "green", dash: true }], points: [{ x: -30, y: -3, label: "(−30°, −3)", color: "amber" }, { x: 30, y: 1, label: "(30°, 1)" }, { x: 90, y: -3, label: "(90°, −3)" }], step: { x: 30, y: 1 } })],
    ["Mettre k en évidence d'abord", S`Trouve le déphasage de \(y=\sin(2x-90^\circ)\).`,
      [S`<b>Pourquoi mettre en évidence?</b> La forme est \(\sin(k(x-c))\), où \(c\) se lit une fois \(k\) mis en évidence. Lire \(90^\circ\) directement serait une erreur.`,
        S`<b>Mettre en évidence.</b> \(2x-90^\circ=2(x-45^\circ)\). Donc \(k=2\) et \(c=45^\circ\).`,
        S`<b>Conclure.</b> Le déphasage est de \(45^\circ\) vers la droite.`,
        S`<b>Vérification.</b> Le cycle commence là où l'intérieur vaut 0 : \(2x-90^\circ=0\) donne \(x=45^\circ\) ✓. La figure montre le début du cycle en \((45^\circ,0)\).`],
      "45° vers la droite",
      plane({ view: { xmin: -45, xmax: 315, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin(r(2 * x - 90)), color: "violet" }], points: [{ x: 45, y: 0, label: "(45°, 0)", color: "amber" }, { x: 90, y: 1, label: "(90°, 1)" }, { x: 225, y: 0, label: "(225°, 0)" }], step: { x: 45, y: 0.5 } })],
  ]),

  practice([
    q("amplitude", S`Quelle est l'amplitude de \(y=-5\sin x+2\)?`, num(5),
      "|a|.", [S`\(|-5|\).`], S`\(5\)`),
    q("période", S`Quelle est la période de \(y=\cos4x\) (en degrés)?`, num(90),
      "360° ÷ k.", [S`\(360\div4\).`], S`\(90^\circ\)`),
    q("déphasage", S`Dans \(y=\sin(x+45^\circ)\), quelle est la valeur de \(c\)?`, num(-45),
      "x − c = x + 45°.", [S`\(c=-45^\circ\) : 45° vers la gauche.`], S`\(-45\)`),
    q("maximum", S`Quelle est la valeur maximale de \(y=4\sin x-1\)?`, num(3),
      "d + |a|.", [S`\(-1+4\).`], S`\(3\)`),
    q("période", S`Quelle est la période de \(y=\sin\frac x3\)?`, choice(["1080°", "120°", "360°", "3°"], 0),
      "k = ⅓.", [S`\(360\div\frac13\).`], "1080°"),
  ]),

  ...hard([
    ["Mettre en évidence, puis lire", S`Donne l'amplitude, la période, le déphasage, l'axe et l'image de \(y=2\sin(3x-180^\circ)+5\).`,
      [S`\(3x-180^\circ=3(x-60^\circ)\).`, S`Amplitude 2, période 120°, déphasage de 60° vers la droite, axe y = 5.`],
      S`image \(3\le y\le7\)`,
      plane({ view: { xmin: 0, xmax: 360, ymin: 0, ymax: 8 }, curves: [{ f: (x) => 2 * Math.sin(r(3 * x - 180)) + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [{ x: 60, y: 5, label: "début (60°, 5)" }], step: { x: 30, y: 1 } })],
    ["Situer un maximum", S`Pour \(y=-0.5\cos(0.5(x-90^\circ))+3\), trouve toutes les propriétés ainsi que le premier maximum à droite de \(x=90^\circ\).`,
      [S`Amplitude 0.5, période 720°, translation de 90° vers la droite, axe y = 3, image \(2.5\le y\le3.5\).`, S`Comme \(a<0\), le maximum se produit là où \(\cos=-1\) : \(0.5(x-90^\circ)=180^\circ\Rightarrow x=450^\circ\).`],
      S`max \((450^\circ,3.5)\)`],
  ], [
    q("difficile", S`Quelle est la période de \(y=\sin(5x+100^\circ)\)?`, num(72),
      "Seul k compte pour la période.", [S`\(360\div5\).`], S`\(72^\circ\)`),
    q("difficile", S`Quel est le déphasage de \(y=\cos(4x-120^\circ)\) (en degrés, positif vers la droite)?`, num(30),
      "Mets 4 en évidence.", [S`\(4(x-30^\circ)\).`], S`\(30^\circ\) vers la droite`),
    q("difficile", S`Quelle est la valeur minimale de \(y=-3\cos2x+7\)?`, num(4),
      "d − |a|.", [S`\(7-3\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un k plus grand donne-t-il une période plus courte?", "Le graphique parcourt un cycle k fois plus vite, donc chaque cycle a une largeur de 360°/k."],
      ["Comment distinguer la gauche de la droite?", "Écris la parenthèse sous la forme (x − c) : c positif signifie vers la droite, c négatif vers la gauche."],
      ["Que se passe-t-il si a est négatif?", "Le graphique subit une réflexion par rapport à son axe; l'amplitude reste |a|."],
      ["Le paramètre d change-t-il la période?", "Non — d ne fait que déplacer le graphique vers le haut ou le bas (l'axe)."],
      ["Pourquoi mettre k en évidence?", "Le déphasage c se mesure sur x, et k multiplie tout ce qui est dans la parenthèse."],
    ],
    summary: [
      "Amplitude |a|; période 360°/|k|.",
      "Déphasage c; axe y = d.",
      "Image d − |a| ≤ y ≤ d + |a|.",
      "Mets k en évidence avant de lire c.",
    ],
    next: "En 6.5, on utilise ces transformations pour esquisser des graphiques en transformant des points clés.",
  }),
];
