// MCV4U-FR 7.2 — Le produit scalaire : définition géométrique |a||b|cos θ, formule avec les composantes, angle entre
// deux vecteurs, vecteurs perpendiculaires (orthogonaux) et propriétés du produit scalaire
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.2 Le produit scalaire";
export const ID = lessonId(7, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⚫",
    title: "Le produit scalaire",
    overview: S`Le produit scalaire multiplie deux vecteurs et donne un <strong>nombre</strong>, pas un vecteur : \(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta\), où \(\theta\) est l'angle entre les deux vecteurs (placés origine contre origine). Pour des vecteurs cartésiens, il existe un raccourci : on multiplie les composantes correspondantes et on additionne, \([a_1,a_2]\cdot[b_1,b_2]=a_1b_1+a_2b_2\). En combinant les deux formules, tu peux trouver l'angle entre deux vecteurs quelconques — et un produit scalaire nul est le test rapide pour reconnaître des vecteurs perpendiculaires.`,
    goals: [
      "calculer un produit scalaire à partir des normes et d'un angle;",
      "calculer un produit scalaire à partir des composantes;",
      "trouver l'angle entre deux vecteurs;",
      "vérifier si deux vecteurs sont perpendiculaires;",
      "utiliser les propriétés du produit scalaire pour développer et simplifier.",
    ],
    curriculum: "C2.4 (effectuer le produit scalaire sous forme géométrique et sous forme cartésienne); C2.5 (explorer les propriétés du produit scalaire)",
    prior: [
      [S`\(\cos90^\circ\)?`, S`\(0\).`],
      [S`\(\cos120^\circ\)?`, S`\(-\frac12\).`],
      [S`\(|[3,4]|\)?`, S`\(5\).`],
    ],
    words: [
      ["Produit scalaire", "\\(\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\theta\\)", "un scalaire"],
      ["Forme en composantes", "\\(a_1b_1+a_2b_2\\)", ""],
      ["Orthogonaux", "perpendiculaires", "\\(\\vec a\\cdot\\vec b=0\\)"],
      ["\\(\\vec a\\cdot\\vec a\\)", "\\(|\\vec a|^2\\)", ""],
    ],
  }),

  section("📌 Deux façons de le calculer", S`
  ${vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "b", off: 16 }, { from: [0, 0], to: pol(5, 40), vl: "a", off: -16 }], segs: [{ pts: [pol(5, 40), [5 * Math.cos(40 * Math.PI / 180), 0]], dash: true }], arcs: [{ at: [0, 0], r: 1.2, a: 0, b: 40, label: "θ" }], texts: [{ x: 1.9, y: -0.45, t: "|a| cos θ", color: "red" }] }, "a · b = |a||b| cos θ : la norme de b multipliée par la partie de a qui est dans la direction de b")}
  ${table(["Angle θ", "cos θ", "a · b"], [
    ["aigu \\(0^\\circ\\le\\theta\\lt90^\\circ\\)", "positif", "positif"],
    ["droit \\(90^\\circ\\)", "0", "0"],
    ["obtus \\(90^\\circ\\lt\\theta\\le180^\\circ\\)", "négatif", "négatif"],
  ])}
  ${keyIdea(S`\(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2\), donc \(\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}\). Propriétés : \(\vec a\cdot\vec b=\vec b\cdot\vec a\); \(\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c\); \((k\vec a)\cdot\vec b=k(\vec a\cdot\vec b)\); \(\vec a\cdot\vec a=|\vec a|^2\). Deux vecteurs non nuls sont perpendiculaires exactement lorsque \(\vec a\cdot\vec b=0\).`)}`),

  section("📌 Explore", S`<p>Fais tourner et allonge les deux vecteurs, et observe le produit scalaire calculé des deux façons — les deux résultats concordent toujours. Remarque le changement de signe lorsque l'angle dépasse \(90^\circ\), et que le produit vaut exactement 0 lorsque les vecteurs sont perpendiculaires.</p>`),

  widget("dotLab", { init: { m1: 4, a1: 20, m2: 3, a2: 80 } }),

  section("📌 Trouver des angles", S`
  <p>Pour trouver l'angle entre deux vecteurs cartésiens, calcule le produit scalaire à partir des composantes, divise par le produit des normes et prends \(\cos^{-1}\). La réponse est toujours comprise entre \(0^\circ\) et \(180^\circ\).</p>
  ${watchOut([
    "Le produit scalaire est un nombre; il n'a ni norme ni direction.",
    "Utilise l'angle entre les vecteurs placés origine contre origine.",
    "a · a vaut |a|², et non |a|.",
    "(a · b) · c n'a pas de sens : a · b est déjà un scalaire.",
    "Un produit scalaire nul signifie « perpendiculaires » seulement pour des vecteurs non nuls.",
  ])}`),

  examples([
    ["À partir des normes et d'un angle", S`\(|\vec a|=6\), \(|\vec b|=5\) et l'angle entre les vecteurs mesure \(50^\circ\). Trouve \(\vec a\cdot\vec b\).`,
      [S`\(\vec a\cdot\vec b=6\times5\times\cos50^\circ\).`],
      S`\(\approx19.28\)`],
    ["Les composantes et l'angle", S`Trouve \([3,-4]\cdot[5,2]\) et l'angle entre les vecteurs.`,
      [S`\(3(5)+(-4)(2)=15-8=7\).`, S`\(\cos\theta=\frac{7}{5\sqrt{29}}\approx0.2600\), donc \(\theta\approx74.93^\circ\).`],
      S`7; environ \(74.93^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 5.8, ymin: -4.6, ymax: 2.6 }, arrows: [{ from: [0, 0], to: [3, -4], vl: "a", off: 16 }, { from: [0, 0], to: [5, 2], vl: "b", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: -53.13, b: 21.8, label: "74.9°" }] })],
    ["Une paire perpendiculaire", S`Montre que \([6,-9]\) et \([3,2]\) sont perpendiculaires.`,
      [S`\(6(3)+(-9)(2)=18-18=0\).`],
      S`le produit scalaire est 0, donc les vecteurs sont perpendiculaires`,
      vfig({ view: { xmin: -0.6, xmax: 6.6, ymin: -9.6, ymax: 2.6 }, arrows: [{ from: [0, 0], to: [6, -9], vl: "a", off: 16 }, { from: [0, 0], to: [3, 2], vl: "b", color: "blue", off: -16 }], segs: [{ pts: [[0.554, -0.832], [1.109, -0.462], [0.555, 0.37]], color: "red", w: 1.5 }] })],
    ["Rendre des vecteurs perpendiculaires", S`Trouve \(k\) pour que \([k,4]\) soit perpendiculaire à \([3,-6]\).`,
      [S`\(3k+4(-6)=0\Rightarrow3k=24\).`],
      S`\(k=8\)`],
    ["Développer avec les propriétés", S`\(|\vec a|=2\), \(|\vec b|=1\) et \(\vec a\cdot\vec b=1.5\). Trouve \((2\vec a-\vec b)\cdot(\vec a+3\vec b)\).`,
      [S`On développe : \(2\vec a\cdot\vec a+6\vec a\cdot\vec b-\vec b\cdot\vec a-3\vec b\cdot\vec b=2|\vec a|^2+5\vec a\cdot\vec b-3|\vec b|^2\).`, S`\(=2(4)+5(1.5)-3(1)\).`],
      S`\(12.5\)`],
  ]),

  practice([
    q("composantes", S`Trouve \([2,7]\cdot[-3,1]\).`, num(1),
      "Multiplie les composantes correspondantes et additionne.", [S`\(-6+7\).`], S`\(1\)`),
    q("géométrique", S`\(|\vec a|=4\), \(|\vec b|=3\), angle de \(120^\circ\). Trouve \(\vec a\cdot\vec b\).`, num(-6),
      "cos 120° = −½.", [S`\(12\times(-\frac12)\).`], S`\(-6\)`),
    q("avec lui-même", S`\(|\vec a|=7\). Trouve \(\vec a\cdot\vec a\).`, num(49),
      "|a|².", [S`\(7^2\).`], S`\(49\)`),
    q("signe", S`Si \(\vec a\cdot\vec b\lt0\), l'angle entre \(\vec a\) et \(\vec b\) est :`, choice(["obtus", "aigu", "droit", "nul"], 0),
      "cos θ < 0.", ["Un cosinus négatif signifie un angle de plus de 90°."], "obtus"),
    q("perpendiculaires", S`Trouve \(k\) pour que \([4,k]\perp[-2,5]\).`, num(1.6, 0.001),
      "Produit scalaire nul.", [S`\(-8+5k=0\).`], S`\(1.6\)`),
  ]),

  ...hard([
    ["Les diagonales d'un rectangle", S`Un rectangle mesure 8 unités de long et 6 unités de haut. Utilise des vecteurs pour trouver l'angle aigu entre ses diagonales.`,
      [S`Avec un coin à l'origine, les diagonales sont \([8,6]\) et \([-8,6]\).`, S`\([8,6]\cdot[-8,6]=-64+36=-28\); \(\cos\theta=\frac{-28}{10\times10}\Rightarrow\theta\approx106.26^\circ\).`, S`L'angle aigu est \(180^\circ-106.26^\circ\).`],
      S`environ \(73.74^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 8.6, ymin: -0.8, ymax: 6.8 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [8, 0], [8, 6], [0, 6], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [8, 6], vl: "d₁", off: -16 }, { from: [8, 0], to: [0, 6], vl: "d₂", color: "blue", off: -16 }], arcs: [{ at: [4, 3], r: 0.9, a: 36.87, b: 143.13, label: "106.3°", color: "red" }], texts: [{ x: 4, y: -0.5, t: "8" }, { x: 8.4, y: 3, t: "6" }] })],
    ["Un angle inscrit dans un demi-cercle", S`\(AB\) est un diamètre d'un cercle de centre \(O\), et \(C\) est un autre point quelconque du cercle. Utilise des vecteurs pour prouver que \(\angle ACB=90^\circ\).`,
      [S`Pose \(\overrightarrow{OB}=\vec a\) (donc \(\overrightarrow{OA}=-\vec a\)) et \(\overrightarrow{OC}=\vec c\), avec \(|\vec a|=|\vec c|=r\).`, S`\(\overrightarrow{CA}=-\vec a-\vec c\) et \(\overrightarrow{CB}=\vec a-\vec c\).`, S`\(\overrightarrow{CA}\cdot\overrightarrow{CB}=-(\vec a+\vec c)\cdot(\vec a-\vec c)=-(|\vec a|^2-|\vec c|^2)=0\).`],
      S`le produit scalaire est 0, donc \(CA\perp CB\)`,
      vfig({ view: { xmin: -4.2, xmax: 4.2, ymin: -1.2, ymax: 4.2 }, grid: false, axes: false, segs: [{ pts: Array.from({ length: 37 }, (_, i) => pol(3.5, i * 5)), color: "gray" }, { pts: [[-3.5, 0], [3.5, 0]], color: "gray" }], arrows: [{ from: pol(3.5, 62), to: [-3.5, 0], color: "violet" }, { from: pol(3.5, 62), to: [3.5, 0], color: "blue" }, { from: [0, 0], to: pol(3.5, 62), color: "green", w: 1.6, dash: true }], points: [{ x: -3.5, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3.5, y: 0, label: "B", dx: 6, dy: 14 }, { x: 0, y: 0, label: "O", dx: -4, dy: 18 }, { x: pol(3.5, 62)[0], y: pol(3.5, 62)[1], label: "C", dx: 6, dy: -6 }] })],
  ], [
    q("difficile", S`Trouve l'angle entre \([1,2]\) et \([3,-1]\) (en degrés, 2 décimales).`, num(81.87, 0.01),
      "cos θ = 1/(√5 √10).", [S`\(\cos\theta=\frac{1}{\sqrt{50}}\).`], S`\(81.87^\circ\)`),
    q("difficile", S`\(|\vec a|=3\), \(|\vec b|=5\), \(\vec a\cdot\vec b=4\). Trouve \(|\vec a+\vec b|\) (2 décimales).`, num(6.48, 0.01),
      "|a + b|² = (a + b) · (a + b).", [S`\(9+2(4)+25=42\).`], S`\(\sqrt{42}\approx6.48\)`),
    q("difficile", S`Trouve \(k\gt0\) pour que l'angle entre \([1,k]\) et \([1,0]\) mesure \(60^\circ\) (3 décimales).`, num(1.732, 0.002),
      "cos 60° = 1/√(1 + k²).", [S`\(\sqrt{1+k^2}=2\).`], S`\(\sqrt3\approx1.732\)`),
  ]),

  wrapUp({
    qas: [
      ["Quel genre de réponse un produit scalaire donne-t-il?", "Un scalaire (un nombre), qui peut être positif, nul ou négatif."],
      ["Comment le calculer à partir des composantes?", "Multiplie les composantes correspondantes et additionne : a₁b₁ + a₂b₂."],
      ["Comment trouver l'angle entre deux vecteurs?", "cos θ = (a · b)/(|a||b|), puis prends l'inverse du cosinus."],
      ["Comment savoir si des vecteurs sont perpendiculaires?", "Leur produit scalaire est nul (pour des vecteurs non nuls)."],
      ["Pourquoi a · a = |a|²?", "L'angle entre a et lui-même est 0°, et cos 0° = 1."],
    ],
    summary: [
      "a · b = |a||b| cos θ = a₁b₁ + a₂b₂.",
      "cos θ = a · b / (|a||b|).",
      "a · b = 0 ⇔ perpendiculaires.",
      "Commutatif, distributif; a · a = |a|².",
    ],
    next: "En 7.3, on utilise le produit scalaire pour les projections et le travail.",
  }),
];
