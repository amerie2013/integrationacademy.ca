// MCR3U-FR 6.5 — Tracer des fonctions sinusoïdales à l'aide de transformations : les cinq points clés,
// (x, y) → (x/k + c, ay + d) (notation française), ordre des transformations, plusieurs cycles, domaine et image, abscisses à l'origine
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.5 Tracer des fonctions sinusoïdales à l'aide de transformations";
export const ID = lessonId(6, 5);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const G = (fn, pts, view, step = { x: 45, y: 1 }, more = {}) => plane({ view, curves: [{ f: fn, color: "violet" }], lines: more.lines ?? [], points: pts.map(([x, y]) => ({ x, y, label: `(${x}°, ${y})`.replace(/-/g, "−") })), step }, more.cap ?? "");
const map = (base, a, k, d, c) => base.map(([x, y]) => [Math.round((x / k + d) * 100) / 100, Math.round((a * y + c) * 100) / 100 + 0]);
const COS = [[0, 1], [90, 0], [180, -1], [270, 0], [360, 1]], SIN = [[0, 0], [90, 1], [180, 0], [270, -1], [360, 0]];

export const blocks = () => [
  intro({
    icon: "✏️",
    title: "Tracer des fonctions sinusoïdales à l'aide de transformations",
    overview: S`Tu n'as pas besoin d'une table de valeurs pour tracer \(y=a\sin(k(x-c))+d\). Prends les cinq points clés d'un cycle du graphique de base — le début, le maximum, le milieu, le minimum et la fin — et déplace chacun d'eux à l'aide de la règle \((x,y)\to\left(\frac xk+c,\ ay+d\right)\). Relie-les par une onde lisse et répète le cycle aussi souvent que nécessaire.`,
    goals: [
      "énumérer les cinq points clés de y = sin x et de y = cos x;",
      "appliquer (x, y) → (x/k + c, ay + d) à chaque point clé;",
      "esquisser un ou plusieurs cycles ainsi que l'axe;",
      "donner le domaine et l'image de la fonction transformée;",
      "trouver les abscisses à l'origine et les points maximums du graphique transformé.",
    ],
    curriculum: "D2.7 (esquisser les graphiques de y = af(k(x − c)) + d en appliquant une ou plusieurs transformations aux graphiques de f(x) = sin x et de f(x) = cos x, et donner le domaine et l'image des fonctions transformées)",
    prior: [
      [S`Quels cinq points décrivent un cycle de \(y=\sin x\)?`, "(0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0)."],
      [S`Quelle est la période de \(y=\sin3x\)?`, "120°."],
      [S`Où se trouve l'axe de \(y=2\cos x-4\)?`, "y = −4."],
    ],
    words: [
      ["Points clés", "le début, le max, le milieu, le min et la fin d'un cycle de base (espacés d'un quart de période)", ""],
      ["Règle de transformation", "\\((x,y)\\to\\left(\\frac xk+c,\\ ay+d\\right)\\)", ""],
      ["Quart de période", "l'écart horizontal entre deux points clés : \\(\\frac{360^\\circ}{4k}\\)", ""],
      ["Cycle", "une onde complète, du début à la fin", ""],
    ],
  }),

  section("📌 La méthode", S`
  ${table(["Étape", "Ce qu'il faut faire"], [["1", "Écrire l'équation sous la forme \\(a\\sin(k(x-c))+d\\) (mettre k en évidence)"], ["2", "Énumérer les points clés de base"], ["3", "Valeurs de x : diviser par k, puis ajouter c"], ["4", "Valeurs de y : multiplier par a, puis ajouter d"], ["5", "Tracer l'axe y = d, placer les points, les relier par une courbe lisse, prolonger"]])}
  ${G((x) => 2 * Math.sin(r(x)) + 1, map(SIN, 2, 1, 0, 1), { xmin: -30, xmax: 390, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }], cap: "y = 2 sin x + 1 : points clés (0°, 1), (90°, 3), (180°, 1), (270°, −1), (360°, 1)" })}
  ${keyIdea("Les changements horizontaux agissent sur x dans l'ordre k puis c; les changements verticaux agissent sur y dans l'ordre a puis d. Les points clés sont toujours espacés d'un quart de période.")}`),

  section("📌 Explorer", S`<p>Observe chaque point clé de base se déplacer vers son image lorsque tu modifies a, k, c et d. La table montre la règle de transformation en action.</p>`),

  widget("keyPointMapper", { fn: "sin", init: { a: 3, k: 2, d: 30, c: 1 } }),

  section("📌 Attention", watchOut([
    "Divise x par k — ne le multiplie pas.",
    "Mets k en évidence avant d'utiliser c : sin(2x + 60°) = sin(2(x + 30°)), donc c = −30°.",
    "Trace l'axe d'abord; il garde l'onde symétrique.",
    "Une courbe lisse : aucun point anguleux au maximum ni au minimum.",
  ])),

  examples([
    ["Seulement des changements verticaux", S`Esquisse \(y=2\sin x+1\) pour \(0^\circ\le x\le360^\circ\).`,
      [S`<b>Règle.</b> \(a=2\), \(d=1\), donc \((x,y)\to(x,\ 2y+1)\). Les valeurs de x ne changent pas. Multiplie \(y\) d'abord, puis additionne.`,
        S`<b>Points clés.</b> ${tv(["\\(\\sin x\\)", "\\((0^\\circ,0)\\)", "\\((90^\\circ,1)\\)", "\\((180^\\circ,0)\\)", "\\((270^\\circ,-1)\\)", "\\((360^\\circ,0)\\)"], ["image", "\\((0^\\circ,1)\\)", "\\((90^\\circ,3)\\)", "\\((180^\\circ,1)\\)", "\\((270^\\circ,-1)\\)", "\\((360^\\circ,1)\\)"])}`,
        S`<b>Axe et image.</b> L'axe se déplace en \(y=1\). Avec une amplitude de 2, l'image est \(-1\le y\le3\).`,
        S`<b>Vérification.</b> En \(x=270^\circ\) : \(2(-1)+1=-1\) ✓`],
      S`image \(-1\le y\le3\)`,
      G((x) => 2 * Math.sin(r(x)) + 1, map(SIN, 2, 1, 0, 1), { xmin: -30, xmax: 390, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }] })],
    ["Compression horizontale", S`Trouve les points clés de \(y=\cos2x\) pour un cycle.`,
      [S`<b>Règle.</b> \(k=2\), donc \((x,y)\to\left(\frac x2,\ y\right)\). Les hauteurs ne changent pas.`,
        S`<b>Période.</b> \(\frac{360^\circ}2=180^\circ\), donc un cycle se termine à \(180^\circ\).`,
        S`<b>Points clés.</b> ${tv(["\\(\\cos x\\)", "\\((0^\\circ,1)\\)", "\\((90^\\circ,0)\\)", "\\((180^\\circ,-1)\\)", "\\((270^\\circ,0)\\)", "\\((360^\\circ,1)\\)"], ["image", "\\((0^\\circ,1)\\)", "\\((45^\\circ,0)\\)", "\\((90^\\circ,-1)\\)", "\\((135^\\circ,0)\\)", "\\((180^\\circ,1)\\)"])}`,
        S`<b>Vérification.</b> \(\cos2(90^\circ)=\cos180^\circ=-1\) ✓`],
      S`\((0^\circ,1),(45^\circ,0),(90^\circ,-1),(135^\circ,0),(180^\circ,1)\)`,
      G((x) => Math.cos(r(2 * x)), map(COS, 1, 2, 0, 0), { xmin: -30, xmax: 210, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })],
    ["Deux translations", S`Trouve les points clés de \(y=\sin(x+90^\circ)-2\).`,
      [S`<b>Lire l'équation.</b> \(x+90^\circ=x-(-90^\circ)\), donc \(c=-90^\circ\) : \(90^\circ\) vers la gauche. Et \(d=-2\) : 2 vers le bas.`,
        S`<b>Règle.</b> \((x,y)\to(x-90^\circ,\ y-2)\).`,
        S`<b>Points clés.</b> ${tv(["\\(\\sin x\\)", "\\((0^\\circ,0)\\)", "\\((90^\\circ,1)\\)", "\\((180^\\circ,0)\\)", "\\((270^\\circ,-1)\\)", "\\((360^\\circ,0)\\)"], ["image", "\\((-90^\\circ,-2)\\)", "\\((0^\\circ,-1)\\)", "\\((90^\\circ,-2)\\)", "\\((180^\\circ,-3)\\)", "\\((270^\\circ,-2)\\)"])}`,
        S`<b>Vérification.</b> \(\sin(0^\circ+90^\circ)-2=1-2=-1\) ✓`],
      S`\((-90^\circ,-2),(0^\circ,-1),(90^\circ,-2),(180^\circ,-3),(270^\circ,-2)\)`,
      G((x) => Math.sin(r(x + 90)) - 2, map(SIN, 1, 1, -90, -2), { xmin: -120, xmax: 300, ymin: -4, ymax: 1 }, { x: 45, y: 1 }, { lines: [{ m: 0, b: -2, color: "green", dash: true }] })],
    ["Les quatre transformations", S`Esquisse un cycle de \(y=-3\cos(2(x-45^\circ))+1\).`,
      [S`<b>Lire l'équation.</b> \(a=-3\), \(k=2\), \(c=45^\circ\), \(d=1\). La règle est \((x,y)\to\left(\frac x2+45^\circ,\ -3y+1\right)\).`,
        S`<b>Valeurs de x.</b> Divise par 2, puis ajoute 45 : \(45^\circ,90^\circ,135^\circ,180^\circ,225^\circ\).`,
        S`<b>Valeurs de y.</b> Multiplie par \(-3\), puis ajoute 1 : à partir de \(1,0,-1,0,1\), on obtient \(-2,1,4,1,-2\).`,
        S`<b>Points clés.</b> ${tv(["\\(x\\)", "\\(45^\\circ\\)", "\\(90^\\circ\\)", "\\(135^\\circ\\)", "\\(180^\\circ\\)", "\\(225^\\circ\\)"], ["\\(y\\)", "\\(-2\\)", "1", "4", "1", "\\(-2\\)"])}`,
        S`<b>Vérification.</b> En \(x=135^\circ\) : \(-3\cos180^\circ+1=4\) ✓`],
      S`image \(-2\le y\le4\)`,
      G((x) => -3 * Math.cos(r(2 * (x - 45))) + 1, map(COS, -3, 2, 45, 1), { xmin: 0, xmax: 270, ymin: -3, ymax: 5 }, { x: 45, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }] })],
    ["Plusieurs cycles", S`Combien de cycles de \(y=4\sin\frac x2\) tiennent dans \(0^\circ\le x\le1440^\circ\), et quelle est l'image?`,
      [S`<b>Période.</b> \(k=\frac12\), donc la période est \(\frac{360^\circ}{1/2}=720^\circ\).`,
        S`<b>Compter.</b> \(\frac{1440^\circ}{720^\circ}=2\) cycles.`,
        S`<b>Image.</b> L'amplitude est 4 et l'axe est \(y=0\), donc \(-4\le y\le4\).`,
        S`<b>Vérification.</b> En \(x=180^\circ\) : \(4\sin90^\circ=4\), le premier maximum ✓. En \(x=1440^\circ\) : \(4\sin720^\circ=0\), la fin du deuxième cycle ✓`],
      S`2 cycles; image \(-4\le y\le4\)`,
      G((x) => 4 * Math.sin(r(x / 2)), [[180, 4], [540, -4], [720, 0], [1440, 0]], { xmin: -60, xmax: 1500, ymin: -5, ymax: 5 }, { x: 180, y: 1 })],
  ]),

  practice([
    q("image : y", S`Le point de base \((90^\circ,1)\) de \(y=\sin x\) est transformé selon \(y=2\sin3x+4\). Quelle est l'ordonnée de son image?`, num(6),
      "ay + d.", [S`\(2(1)+4\).`], S`\(6\)`),
    q("image : x", S`Pour la même transformation selon \(y=2\sin3x+4\), quelle est l'abscisse de l'image (en degrés)?`, num(30),
      "x ÷ k.", [S`\(90\div3\).`], S`\(30^\circ\)`),
    q("maximum", S`Où se trouve le premier maximum de \(y=\sin(x-40^\circ)\) à droite de 0°?`, num(130),
      "Déplace (90°, 1) de 40° vers la droite.", [S`\(90+40\).`], S`\(130^\circ\)`),
    q("image", S`Quelle est l'image de \(y=-2\cos x+3\)?`, choice([S`\(1\le y\le5\)`, S`\(-2\le y\le3\)`, S`\(-5\le y\le-1\)`, S`\(-1\le y\le5\)`], 0),
      "d ± |a|.", [S`\(3\pm2\).`], S`\(1\le y\le5\)`),
    q("cycles", S`Combien de cycles complets de \(y=\sin4x\) y a-t-il de 0° à 360°?`, num(4),
      "Période de 90°.", [S`\(360\div90\).`], S`\(4\)`),
  ]),

  ...hard([
    ["Un étirement horizontal et une translation", S`Trouve les points clés d'un cycle de \(y=4\sin\left(\frac13(x+90^\circ)\right)-2\).`,
      [S`x : \(3x-90\) donne \(-90^\circ,180^\circ,450^\circ,720^\circ,990^\circ\).`, S`y : \(4y-2\) donne \(-2,2,-2,-6,-2\).`],
      "période 1080°, image −6 ≤ y ≤ 2",
      G((x) => 4 * Math.sin(r((x + 90) / 3)) - 2, map(SIN, 4, 1 / 3, -90, -2), { xmin: -180, xmax: 1080, ymin: -7, ymax: 3 }, { x: 90, y: 1 })],
    ["Abscisses à l'origine", S`Trouve les abscisses à l'origine de \(y=2\cos2x+1\) pour \(0^\circ\le x\le360^\circ\).`,
      [S`\(\cos2x=-\frac12\Rightarrow2x=120^\circ,240^\circ,480^\circ,600^\circ\).`],
      S`\(x=60^\circ,120^\circ,240^\circ,300^\circ\)`],
  ], [
    q("difficile", S`Le point clé du cosinus \((180^\circ,-1)\) est transformé selon \(y=-2\cos(4(x-30^\circ))+5\). Quelle est l'abscisse de l'image?`, num(75),
      "x/k + c.", [S`\(180\div4+30\).`], S`\(75^\circ\)`),
    q("difficile", S`Pour quelle valeur de x (entre 0° et 180°) \(y=5-3\sin2x\) atteint-elle son maximum?`, num(135),
      "Le max se produit là où sin 2x = −1.", [S`\(2x=270^\circ\).`], S`\(135^\circ\)`),
    q("difficile", S`Combien d'abscisses à l'origine \(y=2\sin x+1\) a-t-elle pour \(0^\circ\le x\le360^\circ\)?`, num(2),
      "sin x = −½.", ["210° et 330°."], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi seulement cinq points?", "Ils marquent chaque quart de cycle — c'est suffisant pour fixer exactement la forme."],
      ["Pourquoi diviser x par k?", "k comprime horizontalement selon un facteur 1/k, donc chaque valeur de x rapetisse."],
      ["L'ordre est-il important?", "Oui : pour x, applique k avant c; pour y, applique a avant d."],
      ["Comment tracer d'autres cycles?", "Ajoute la période à l'abscisse de chaque point clé."],
      ["Comment vérifier mon esquisse?", "Teste un point dans l'équation, par exemple l'ordonnée à l'origine."],
    ],
    summary: [
      "Cinq points clés par cycle.",
      "(x, y) → (x/k + c, ay + d).",
      "Axe y = d; image d ± |a|.",
      "Les points sont espacés d'un quart de période.",
    ],
    next: "En 6.6, on fait le chemin inverse : d'un graphique ou de propriétés vers une équation.",
  }),
];
