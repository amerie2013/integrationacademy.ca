// MCV4U-FR 7.6 — Applications du produit scalaire et du produit vectoriel : moment de force, aires de triangles et de
// parallélogrammes dans l'espace, volume d'un parallélépipède (produit mixte), travail dans l'espace,
// et vérification de la coplanarité de trois vecteurs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, p3, axes3, merge } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.6 Applications du produit scalaire et du produit vectoriel";
export const ID = lessonId(7, 6);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (...v) => v.reduce((s, a) => [s[0] + a[0], s[1] + a[1], s[2] + a[2]], [0, 0, 0]);
const ppd = (a, b, c) => {
  const corners = [[0, 0, 0], a, b, c, add3(a, b), add3(a, c), add3(b, c), add3(a, b, c)];
  const e = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]];
  return { segs: e.map(([i, j]) => ({ pts: [p3(...corners[i]), p3(...corners[j])], color: "gray", w: 1.3 })) };
};
export const blocks = () => [
  intro({
    icon: "🔧",
    title: "Applications du produit scalaire et du produit vectoriel",
    overview: S`Les deux produits répondent à des questions physiques différentes. Le produit scalaire mesure dans quelle mesure un vecteur agit <em>dans la direction</em> d'un autre — c'est le travail. Le produit vectoriel mesure ce qui agit <em>en travers</em> — c'est le moment de force, l'effet de rotation d'une force sur une clé, ainsi que l'aire. En les combinant, \(\vec a\cdot(\vec b\times\vec c)\) donne le volume de la boîte inclinée (le parallélépipède) construite sur trois vecteurs; lorsque ce volume est 0, les trois vecteurs sont dans un même plan.`,
    goals: [
      "trouver la norme et la direction d'un moment de force;",
      "trouver l'aire de parallélogrammes et de triangles dans l'espace;",
      "trouver le volume d'un parallélépipède à l'aide du produit mixte;",
      "trouver le travail effectué par une force dans l'espace;",
      "déterminer si trois vecteurs sont coplanaires.",
    ],
    curriculum: "C2.6 (applications du produit vectoriel, p. ex. le moment de force, un vecteur orthogonal à deux vecteurs); C2.8 (projections, aire d'un parallélogramme, volume d'un parallélépipède, travail, moment de force)",
    prior: [
      [S`\([1,0,0]\times[0,1,0]\)?`, S`\([0,0,1]\).`],
      [S`\(W=\vec F\cdot\vec d\) pour \([2,1,0]\) et \([3,0,4]\)?`, S`\(6\).`],
      [S`Aire d'un triangle à partir de son parallélogramme?`, S`La moitié.`],
    ],
    words: [
      ["Moment de force", "\\(\\vec\\tau=\\vec r\\times\\vec F\\)", "N·m"],
      ["Aire d'un triangle", "\\(\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\)", ""],
      ["Produit mixte", "\\(\\vec a\\cdot(\\vec b\\times\\vec c)\\)", "volume (au signe près)"],
      ["Coplanaires", "situés dans un même plan", "produit mixte nul"],
    ],
  }),

  section("📌 Dans la direction, en travers, et le volume", S`
  ${table(["Question", "Outil", "Formule"], [
    ["travail effectué par une force", "produit scalaire", "\\(W=\\vec F\\cdot\\vec d\\)"],
    ["effet de rotation d'une force", "produit vectoriel", "\\(|\\vec\\tau|=|\\vec r||\\vec F|\\sin\\theta\\)"],
    ["aire d'un parallélogramme / d'un triangle", "produit vectoriel", "\\(|\\vec a\\times\\vec b|\\) / sa moitié"],
    ["volume d'un parallélépipède", "les deux", "\\(|\\vec a\\cdot(\\vec b\\times\\vec c)|\\)"],
  ])}
  ${vfig(merge(V3, axes3(4.6), ppd([2.5, 0, 0], [0.6, 3, 0], [0.4, 0.8, 2.6]), { arrows: [{ from: [0, 0], to: p3(2.5, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0.6, 3, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0.4, 0.8, 2.6), vl: "c", color: "green", off: -16 }] }), "Le parallélépipède construit sur a, b, c : l'aire de la base |b × c| multipliée par la hauteur donne |a · (b × c)|")}
  ${keyIdea(S`\(|\vec b\times\vec c|\) est l'aire de la base, et la hauteur est la projection scalaire de \(\vec a\) sur \(\vec b\times\vec c\). Leur produit est \(|\vec a\cdot(\vec b\times\vec c)|\). Le moment de force est maximal lorsque la force est perpendiculaire à la clé, et il est orienté selon l'axe de rotation.`)}`),

  section("📌 Explore", S`<p>Change la longueur de la clé, l'intensité de la force et l'angle entre elles. Le moment de force augmente avec chacune, mais c'est l'angle qui compte le plus : à \(0^\circ\) (en poussant dans l'axe du manche), le boulon ne tourne pas du tout.</p>`),

  widget("torqueLab", { init: { r: 0.3, F: 50, th: 70 } }),

  section("📌 Choisir le bon produit", S`
  <p>Demande-toi ce que la question mesure. « Combien dans la direction de » appelle un produit scalaire; « combien en travers » ou « aire » appelle un produit vectoriel; « volume » ou « dans un même plan? » appelle le produit mixte. Écris soigneusement les vecteurs position et force : le moment de force utilise le vecteur qui va du pivot au point d'application de la force.</p>
  ${watchOut([
    "Le moment de force est r × F, dans cet ordre : r va du pivot au point d'application.",
    "L'aire d'un triangle est la moitié de la norme du produit vectoriel.",
    "Le produit mixte peut être négatif; le volume est sa valeur absolue.",
    "Le travail est un scalaire; le moment de force est un vecteur.",
    "Coplanaires ⇔ produit mixte nul — il ne suffit pas que deux des vecteurs soient parallèles.",
  ])}`),

  examples([
    ["Le moment de force sur une clé", S`On applique une force de 40 N à l'extrémité d'une clé de 0.25 m, à \(75^\circ\) du manche. Trouve la norme du moment de force.`,
      [S`\(|\vec\tau|=|\vec r||\vec F|\sin\theta=0.25\times40\times\sin75^\circ\).`],
      S`environ 9.66 N·m`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.25 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.6, 75, [5, 0]), vl: "F", label: "40 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 75, label: "75°" }], points: [{ x: 0, y: 0, label: "boulon", dx: -6, dy: 20 }] })],
    ["Un vecteur moment de force", S`Une force \(\vec F=[0,30,10]\) N agit au point \(\vec r=[0.2,0,0]\) m d'un pivot. Trouve \(\vec\tau=\vec r\times\vec F\) et sa norme.`,
      [S`\([0(10)-0(30),\ 0(0)-0.2(10),\ 0.2(30)-0(0)]=[0,-2,6]\).`, S`\(|\vec\tau|=\sqrt{4+36}\).`],
      S`\([0,-2,6]\) N·m, norme \(\approx6.32\) N·m`],
    ["Aire d'un triangle dans l'espace", S`Trouve l'aire du triangle de sommets \(A(1,0,2)\), \(B(3,1,0)\) et \(C(0,2,1)\).`,
      [S`\(\overrightarrow{AB}=[2,1,-2]\), \(\overrightarrow{AC}=[-1,2,-1]\); produit vectoriel \([1(-1)-(-2)(2),\ (-2)(-1)-2(-1),\ 2(2)-1(-1)]=[3,4,5]\).`, S`Aire \(=\frac12\sqrt{9+16+25}=\frac12\sqrt{50}\).`],
      S`\(\approx3.54\) unités carrées`,
      vfig(merge(V3, axes3(4.4), { polys: [{ pts: [p3(1, 0, 2), p3(3, 1, 0), p3(0, 2, 1)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(1, 0, 2)[0], y: p3(1, 0, 2)[1], label: "A", dx: -16, dy: -4 }, { x: p3(3, 1, 0)[0], y: p3(3, 1, 0)[1], label: "B", dx: -4, dy: 18 }, { x: p3(0, 2, 1)[0], y: p3(0, 2, 1)[1], label: "C", dx: 8, dy: -4 }] }))],
    ["Volume d'un parallélépipède", S`Trouve le volume du parallélépipède construit sur \(\vec a=[2,0,1]\), \(\vec b=[1,3,0]\) et \(\vec c=[0,1,4]\).`,
      [S`\(\vec b\times\vec c=[3(4)-0(1),\ 0(0)-1(4),\ 1(1)-3(0)]=[12,-4,1]\).`, S`\(\vec a\cdot(\vec b\times\vec c)=24+0+1\).`],
      S`25 unités cubes`,
      vfig(merge(V3, axes3(4.6), ppd([2, 0, 1].map((z) => z * 0.9), [1, 3, 0].map((z) => z * 0.9), [0, 1, 4].map((z) => z * 0.9)), { arrows: [{ from: [0, 0], to: p3(1.8, 0, 0.9), vl: "a", off: 16 }, { from: [0, 0], to: p3(0.9, 2.7, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0.9, 3.6), vl: "c", color: "green", off: -16 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7 } }))],
    ["Le travail dans l'espace", S`Une force \(\vec F=[3,-2,5]\) N déplace un objet de \((0,1,2)\) à \((4,3,6)\) (en mètres). Trouve le travail effectué.`,
      [S`\(\vec d=[4,2,4]\).`, S`\(W=12-4+20\).`],
      S`28 J`],
  ]),

  practice([
    q("moment de force", S`Une force de 60 N agit perpendiculairement à une clé de 0.4 m. Trouve le moment de force (N·m).`, num(24),
      "sin 90° = 1.", [S`\(0.4\times60\).`], S`\(24\)`),
    q("aire", S`Trouve l'aire du parallélogramme formé par \([1,0,0]\) et \([0,2,0]\).`, num(2),
      "|a × b|.", [S`\([0,0,2]\).`], S`\(2\)`),
    q("volume", S`Trouve le volume de la boîte construite sur \([2,0,0]\), \([0,3,0]\) et \([0,0,4]\).`, num(24),
      "Produit mixte.", [S`\(2\times3\times4\).`], S`\(24\)`),
    q("coplanaires", S`Trois vecteurs sont coplanaires exactement lorsque :`, choice(["leur produit mixte est nul", "leurs produits scalaires sont tous nuls", "ils ont la même norme", "deux d'entre eux sont perpendiculaires"], 0),
      "Aucun volume.", ["Une boîte plate a un volume nul."], "le produit mixte est nul"),
    q("travail", S`Trouve le travail effectué par \(\vec F=[1,2,3]\) N sur un déplacement \(\vec d=[2,0,1]\) m (J).`, num(5),
      "Produit scalaire.", [S`\(2+0+3\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Sont-ils coplanaires?", S`\([1,2,3]\), \([4,5,6]\) et \([7,8,9]\) sont-ils coplanaires?`,
      [S`\([4,5,6]\times[7,8,9]=[45-48,\ 42-36,\ 32-35]=[-3,6,-3]\).`, S`\([1,2,3]\cdot[-3,6,-3]=-3+12-9=0\).`],
      S`oui : le produit mixte est nul (en effet, \([7,8,9]=2[4,5,6]-[1,2,3]\))`,
      vfig(merge(V3, axes3(4.2), { polys: [{ pts: [p3(0, 0, 0), p3(0.4, 0.8, 1.2), p3(2.8, 3.2, 3.6)], fill: "#fde68a" }], arrows: [{ from: [0, 0], to: p3(0.4, 0.8, 1.2), label: "[1,2,3]", off: -16 }, { from: [0, 0], to: p3(1.6, 2, 2.4), color: "blue", label: "[4,5,6]", off: 16 }, { from: [0, 0], to: p3(2.8, 3.2, 3.6), color: "green", label: "[7,8,9]", off: 16 }] }))],
    ["La clé à cliquet", S`On tire sur une clé à cliquet de 0.3 m avec une force de 90 N. À quel angle avec le manche la traction donne-t-elle un moment de force de 20 N·m? Pourquoi un cliquet est-il utile?`,
      [S`\(0.3\times90\times\sin\theta=20\Rightarrow\sin\theta=\frac{20}{27}\), \(\theta\approx47.79^\circ\) (ou \(132.21^\circ\)).`, S`Le cliquet permet de ramener le manche sans faire tourner le boulon en sens inverse; on peut donc toujours tirer près de \(90^\circ\), là où le moment de force est maximal (27 N·m).`],
      S`environ \(47.8^\circ\) (ou \(132.2^\circ\)); le cliquet permet de garder la traction près du meilleur angle`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.3 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.6, 47.79, [5, 0]), vl: "F", label: "90 N", color: "red", off: -16 }, { from: [5, 0], to: [5, 3.6], color: "green", w: 1.8, dash: true, label: "idéal : 90°", off: -14 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 47.79, label: "47.8°" }] })],
  ], [
    q("difficile", S`Trouve l'aire du triangle de sommets \((0,0,0)\), \((2,1,0)\) et \((0,1,3)\).`, num(3.5, 0.001),
      "La moitié de |[2,1,0] × [0,1,3]|.", [S`\([3,-6,2]\), de norme 7.`], S`\(3.5\)`),
    q("difficile", S`Trouve \(k\) pour que \([1,0,k]\), \([0,1,2]\) et \([1,1,0]\) soient coplanaires.`, num(-2),
      "Produit mixte nul.", [S`\([0,1,2]\times[1,1,0]=[-2,2,-1]\); \(-2-k=0\).`], S`\(-2\)`),
    q("difficile", S`Trouve le plus grand moment de force possible avec une clé de 0.35 m et une force de 80 N (N·m).`, num(28),
      "Tire à 90°.", [S`\(0.35\times80\).`], S`\(28\)`),
  ]),

  wrapUp({
    qas: [
      ["Quand utiliser le produit scalaire?", "Quand il faut savoir dans quelle mesure un vecteur agit dans la direction d'un autre : travail, projections, angles."],
      ["Quand utiliser le produit vectoriel?", "Quand il faut savoir ce qui agit en travers : moment de force, aires, vecteur perpendiculaire à deux autres."],
      ["Comment trouver le volume d'un parallélépipède?", "Calcule |a · (b × c)| : l'aire de la base multipliée par la hauteur."],
      ["Comment maximiser le moment de force?", "Utilise un manche plus long, une force plus grande, et tire perpendiculairement au manche."],
      ["Comment vérifier si trois vecteurs sont coplanaires?", "Calcule le produit mixte; il est nul exactement lorsque les vecteurs sont dans un même plan."],
    ],
    summary: [
      "Travail : W = F · d.",
      "Moment de force : τ = r × F; |τ| = |r||F| sin θ.",
      "Aire = |a × b|; triangle : la moitié.",
      "Volume = |a · (b × c)|; 0 ⇔ coplanaires.",
    ],
    next: "En 7.7, on révise le chapitre.",
  }),
];
