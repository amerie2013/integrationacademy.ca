// MCV4U-FR 6.2 — Addition et soustraction de vecteurs : loi du triangle et loi du parallélogramme, vecteur nul et
// propriétés de l'addition, soustraction comme addition de l'opposé, et norme et direction de sommes et de
// différences à l'aide de la loi des cosinus et de la loi des sinus
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol } from "../mcv4u-ch6/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "6.2 Addition et soustraction de vecteurs";
export const ID = lessonId(6, 2);

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const U = pol(5, 0), Vv = pol(8, 60);
export const blocks = () => [
  intro({
    icon: "➕",
    title: "Addition et soustraction de vecteurs",
    overview: S`Marche 3 km vers l'est, puis 4 km vers le nord : tu te retrouves à 5 km de ton point de départ — pas à 7 km. Additionner des vecteurs, c'est suivre une flèche, puis la suivante : la somme, ou <strong>résultante</strong>, va de la première origine à la dernière extrémité. Soustraire un vecteur, c'est additionner son opposé. Comme les flèches forment des triangles, la loi des cosinus donne la norme d'une somme ou d'une différence, et la loi des sinus donne sa direction.`,
    goals: [
      "additionner des vecteurs à l'aide de la loi du triangle (bout à bout) et de la loi du parallélogramme;",
      "soustraire des vecteurs en additionnant l'opposé;",
      "utiliser le vecteur nul et les propriétés de commutativité et d'associativité;",
      "trouver la norme et la direction d'une somme ou d'une différence;",
      "simplifier des chaînes de vecteurs comme AB + BC.",
    ],
    curriculum: "C2.1 (effectuer les opérations d'addition, de soustraction et de multiplication par un scalaire sur des vecteurs géométriques)",
    prior: [
      [S`Loi des cosinus pour le côté \(c\)?`, S`\(c^2=a^2+b^2-2ab\cos C\).`],
      [S`\(\cos120^\circ\)?`, S`\(-\frac12\).`],
      [S`Loi des sinus?`, S`\(\frac{\sin A}{a}=\frac{\sin B}{b}\).`],
    ],
    words: [
      ["Résultante", "le vecteur unique égal à une somme", "\\(\\vec u+\\vec v\\)"],
      ["Loi du triangle", "bout à bout", "\\(\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}\\)"],
      ["Loi du parallélogramme", "origine commune; la somme est la diagonale", ""],
      ["Vecteur nul", "norme 0, aucune direction", "\\(\\vec v+(-\\vec v)=\\vec 0\\)"],
    ],
  }),

  section("📌 Deux façons d'additionner, une façon de soustraire", S`
  ${vfig({ view: { xmin: -0.5, xmax: 13.5, ymin: -0.8, ymax: 7.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: U, vl: "u", off: -16 }, { from: U, to: plus(U, Vv), vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: plus(U, Vv), vl: "u+v", color: "red" }], texts: [{ x: 3, y: 7.3, t: "loi du triangle", color: "gray" }] }, "Bout à bout : la somme va de la première origine à la dernière extrémité")}
  ${table(["Opération", "Représentation", "Règle"], [
    ["\\(\\vec u+\\vec v\\)", "bout à bout, ou diagonale du parallélogramme construit sur \\(\\vec u\\) et \\(\\vec v\\)", "\\(\\vec u+\\vec v=\\vec v+\\vec u\\)"],
    ["\\(\\vec u-\\vec v\\)", "\\(\\vec u+(-\\vec v)\\); aussi de l'extrémité de \\(\\vec v\\) à l'extrémité de \\(\\vec u\\)", "\\(\\vec u-\\vec v\\ne\\vec v-\\vec u\\)"],
    ["chaînes", "\\(\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD}=\\overrightarrow{AD}\\)", "une boucle fermée a pour somme \\(\\vec 0\\)"],
  ])}
  ${keyIdea(S`Place les vecteurs de façon à former un triangle, puis utilise l'angle <em>à l'intérieur du triangle</em>. Si l'angle entre \(\vec u\) et \(\vec v\) (origines réunies) est \(\theta\), alors \(|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2+2|\vec u||\vec v|\cos\theta\) et \(|\vec u-\vec v|^2=|\vec u|^2+|\vec v|^2-2|\vec u||\vec v|\cos\theta\).`)}`),

  section("📌 Explore", S`<p>Choisis deux vecteurs et passe d'un mode à l'autre : bout à bout, parallélogramme et différence. Les deux représentations de l'addition donnent la même résultante rouge. En mode différence, remarque que \(\vec u-\vec v\) relie l'extrémité de \(\vec v\) à l'extrémité de \(\vec u\).</p>`),

  widget("vectorAddLab", { init: { a: 3.5, da: 20, b: 3, db: 110 } }),

  section("📌 Calculer une somme", S`
  <p>Esquisse le triangle, indique les longueurs connues et trouve l'angle entre les deux côtés qui se rejoignent au point de jonction bout à bout — il vaut \(180^\circ\) moins l'angle entre les vecteurs. Utilise ensuite la loi des cosinus pour la norme et la loi des sinus pour un angle qui fixe la direction.</p>
  ${watchOut([
    "L'angle du triangle vaut 180° moins l'angle entre les vecteurs (origines réunies).",
    "L'ordre compte pour la soustraction : u − v et v − u sont opposés.",
    "|u + v| n'est pas égal à |u| + |v|, sauf si les vecteurs pointent dans le même sens.",
    "Donne une direction par rapport à un repère : un axe, un relèvement ou l'un des vecteurs.",
    "AB + BC = AC seulement si l'extrémité du premier rejoint l'origine du second.",
  ])}`),

  examples([
    ["Les diagonales d'un parallélogramme", S`Dans le parallélogramme \(ABCD\), \(\overrightarrow{AB}=\vec u\) et \(\overrightarrow{AD}=\vec v\). Exprime \(\overrightarrow{AC}\) et \(\overrightarrow{DB}\) en fonction de \(\vec u\) et de \(\vec v\).`,
      [S`\(\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}=\vec u+\vec v\), car \(\overrightarrow{BC}=\overrightarrow{AD}\).`, S`\(\overrightarrow{DB}=\overrightarrow{DA}+\overrightarrow{AB}=-\vec v+\vec u\).`],
      S`\(\overrightarrow{AC}=\vec u+\vec v\), \(\overrightarrow{DB}=\vec u-\vec v\)`,
      vfig({ view: { xmin: -0.6, xmax: 7.2, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: -16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue" }, { from: [0, 0], to: [6.3, 3], color: "red" }, { from: [1.8, 3], to: [4.5, 0], color: "amber", dash: true }], texts: [{ x: 3.4, y: 2.25, t: "u + v", color: "red" }, { x: 4.35, y: 1.05, t: "u − v", color: "amber" }], segs: [{ pts: [[4.5, 0], [6.3, 3], [1.8, 3]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 16 }, { x: 4.5, y: 0, label: "B", dx: 6, dy: 16 }, { x: 6.3, y: 3, label: "C", dx: 8, dy: -4 }, { x: 1.8, y: 3, label: "D", dx: -16, dy: -4 }] })],
    ["La norme d'une somme", S`\(|\vec u|=5\), \(|\vec v|=8\) et l'angle entre eux est de \(60^\circ\). Trouve \(|\vec u+\vec v|\).`,
      [S`Bout à bout, l'angle à l'intérieur du triangle est \(180^\circ-60^\circ=120^\circ\).`, S`\(|\vec u+\vec v|^2=25+64-2(5)(8)\cos120^\circ=89+40=129\).`],
      S`\(|\vec u+\vec v|=\sqrt{129}\approx11.36\)`,
      vfig({ view: { xmin: -0.6, xmax: 9.8, ymin: -0.9, ymax: 7.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: U, vl: "u", label: "5", off: -16 }, { from: U, to: plus(U, Vv), vl: "v", label: "8", color: "blue", off: -18 }, { from: [0, 0], to: plus(U, Vv), color: "red", label: "11.36" }], arcs: [{ at: U, r: 0.9, a: 60, b: 180, label: "120°" }] })],
    ["La norme d'une différence", S`Pour les mêmes vecteurs (\(|\vec u|=5\), \(|\vec v|=8\), à \(60^\circ\) l'un de l'autre), trouve \(|\vec u-\vec v|\).`,
      [S`\(\vec u-\vec v\) relie les extrémités, donc le triangle contient l'angle de \(60^\circ\) entre \(\vec u\) et \(\vec v\) à l'origine commune.`, S`\(|\vec u-\vec v|^2=25+64-2(5)(8)\cos60^\circ=89-40=49\).`],
      S`\(|\vec u-\vec v|=7\)`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.9, ymax: 7.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: U, vl: "u", off: -16 }, { from: [0, 0], to: Vv, vl: "v", color: "blue" }, { from: Vv, to: U, color: "red", label: "u − v = 7", off: -18 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 60, label: "60°" }] })],
    ["Une marche", S`Léa marche 6 km vers l'est, puis 4 km vers le nord. Trouve le déplacement résultant (norme et relèvement vrai).`,
      [S`Les deux trajets sont perpendiculaires : \(\sqrt{6^2+4^2}=\sqrt{52}\approx7.21\) km.`, S`Angle au nord de l'est : \(\tan^{-1}\frac46\approx33.69^\circ\); à partir du nord, cela donne \(90^\circ-33.69^\circ=56.31^\circ\).`],
      S`environ 7.21 km selon un relèvement de \(056.3^\circ\)`,
      vfig({ view: { xmin: -0.8, xmax: 7, ymin: -0.8, ymax: 5 }, north: [0, 0, 4.6], arrows: [{ from: [0, 0], to: [6, 0], label: "6 km", off: -14 }, { from: [6, 0], to: [6, 4], label: "4 km", color: "blue", off: -26 }, { from: [0, 0], to: [6, 4], color: "red", label: "7.21 km" }], arcs: [{ at: [0, 0], r: 1.4, a: 33.69, b: 90, label: "56.3°" }] })],
    ["Une chaîne fermée", S`Simplifie \(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}-\overrightarrow{AD}\).`,
      [S`\(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=\overrightarrow{AD}\) (bout à bout).`, S`\(\overrightarrow{AD}-\overrightarrow{AD}=\vec 0\).`],
      S`\(\vec 0\)`,
      vfig({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 3.6], color: "violet" }, { from: [3, 3.6], to: [6.2, 2.8], color: "blue" }, { from: [6.2, 2.8], to: [5, 0], color: "green" }, { from: [0, 0], to: [5, 0], color: "red", label: "AD", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3, y: 3.6, label: "B", dx: -6, dy: -10 }, { x: 6.2, y: 2.8, label: "C", dx: 8, dy: -4 }, { x: 5, y: 0, label: "D", dx: 6, dy: 16 }] })],
  ]),

  practice([
    q("perpendiculaires", S`\(|\vec u|=3\), \(|\vec v|=4\) et \(\vec u\perp\vec v\). Trouve \(|\vec u+\vec v|\).`, num(5),
      "Triangle rectangle.", [S`\(\sqrt{9+16}\).`], S`\(5\)`),
    q("différence", S`\(|\vec u|=|\vec v|=6\) et l'angle entre eux est de \(60^\circ\). Trouve \(|\vec u-\vec v|\).`, num(6),
      "Le triangle est équilatéral.", [S`\(36+36-72\cos60^\circ=36\).`], S`\(6\)`),
    q("chaîne", S`\(\overrightarrow{PQ}+\overrightarrow{QR}=\)`, choice([S`\(\overrightarrow{PR}\)`, S`\(\overrightarrow{RP}\)`, S`\(\overrightarrow{QP}\)`, S`\(\vec 0\)`], 0),
      "Bout à bout.", ["On part de P et on arrive à R."], S`\(\overrightarrow{PR}\)`),
    q("angle obtus", S`\(|\vec u|=10\), \(|\vec v|=7\), avec un angle de \(120^\circ\) entre eux. Trouve \(|\vec u+\vec v|\) (au millième près).`, num(8.888, 0.002),
      "L'angle du triangle est de 60°.", [S`\(100+49-140\cos60^\circ=79\).`], S`\(\sqrt{79}\approx8.888\)`),
    q("soustraction", S`Lorsque \(\vec u\) et \(\vec v\) sont tracés à partir de la même origine, \(\vec u-\vec v\) pointe :`, choice([S`de l'extrémité de \(\vec v\) vers l'extrémité de \(\vec u\)`, S`de l'extrémité de \(\vec u\) vers l'extrémité de \(\vec v\)`, "le long de la plus longue diagonale", S`dans le sens opposé à \(\vec u\)`], 0),
      "v + (u − v) = u.", ["Vérifie : pars de l'extrémité de v, parcours u − v, et tu arrives à l'extrémité de u."], "de l'extrémité de v vers l'extrémité de u"),
  ]),

  ...hard([
    ["L'inégalité du triangle", S`Explique pourquoi \(|\vec u+\vec v|\le|\vec u|+|\vec v|\) pour tous vecteurs, et indique quand il y a égalité.`,
      [S`Bout à bout, \(\vec u\), \(\vec v\) et \(\vec u+\vec v\) sont les côtés d'un triangle, et chaque côté est plus court que la somme des deux autres.`, S`Le triangle s'aplatit en un segment seulement lorsque \(\vec v\) prolonge \(\vec u\) en ligne droite : même direction et même sens.`],
      S`toujours vrai, avec égalité exactement lorsque \(\vec u\) et \(\vec v\) pointent dans le même sens`,
      vfig({ view: { xmin: -0.5, xmax: 10.5, ymin: -1, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 2.6], vl: "u" }, { from: [4.5, 2.6], to: [9.5, 0], vl: "v", color: "blue" }, { from: [0, 0], to: [9.5, 0], color: "red", label: "u + v : plus court que le trajet", off: -14 }] })],
    ["Trouver l'angle", S`\(|\vec u|=4\), \(|\vec v|=6\) et \(|\vec u+\vec v|=8\). Trouve l'angle entre \(\vec u\) et \(\vec v\).`,
      [S`Dans le triangle bout à bout, \(8^2=4^2+6^2-2(4)(6)\cos\phi\), où \(\phi\) est l'angle du triangle : \(\cos\phi=\frac{16+36-64}{48}=-0.25\), \(\phi\approx104.48^\circ\).`, S`L'angle entre les vecteurs est \(180^\circ-\phi\approx75.52^\circ\).`],
      S`environ \(75.52^\circ\)`,
      vfig({ view: { xmin: -0.5, xmax: 7.5, ymin: -0.8, ymax: 6.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], vl: "u", label: "4", off: -16 }, { from: [4, 0], to: plus([4, 0], pol(6, 75.52)), vl: "v", label: "6", color: "blue", off: -18 }, { from: [0, 0], to: plus([4, 0], pol(6, 75.52)), color: "red", label: "8" }], arcs: [{ at: [4, 0], r: 0.9, a: 0, b: 75.52, label: "75.5°", color: "green" }], segs: [{ pts: [[4, 0], [6, 0]], dash: true }] })],
  ], [
    q("difficile", S`\(|\vec u|=|\vec v|=5\) et \(|\vec u+\vec v|=5\). Trouve l'angle entre \(\vec u\) et \(\vec v\) (en degrés).`, num(120),
      "Le triangle bout à bout est équilatéral.", [S`Angle du triangle : \(60^\circ\); entre les vecteurs : \(180^\circ-60^\circ\).`], S`\(120^\circ\)`),
    q("difficile", S`\(|\vec u|=7\), \(|\vec v|=24\) et \(\vec u\perp\vec v\). Trouve \(|\vec u-\vec v|\).`, num(25),
      "Perpendiculaires : Pythagore.", [S`\(\sqrt{49+576}\).`], S`\(25\)`),
    q("difficile", S`Si \(|\vec u+\vec v|=|\vec u-\vec v|\) pour des vecteurs non nuls \(\vec u\) et \(\vec v\), quel est l'angle entre eux (en degrés)?`, num(90),
      "Les diagonales du parallélogramme sont égales.", [S`Des diagonales égales en font un rectangle.`], S`\(90^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment additionner deux vecteurs?", "Place-les bout à bout; la somme va de la première origine à la dernière extrémité. Ou réunis les origines et trace la diagonale du parallélogramme."],
      ["Comment soustraire?", "Additionne l'opposé : u − v = u + (−v). Avec les origines réunies, u − v va de l'extrémité de v à l'extrémité de u."],
      ["Quel angle utiliser dans la loi des cosinus?", "L'angle à l'intérieur du triangle que tu as tracé — pour une somme, 180° moins l'angle entre les vecteurs."],
      ["L'addition de vecteurs est-elle commutative?", "Oui : u + v = v + u (les deux trajets autour du parallélogramme). Elle est aussi associative."],
      ["Qu'est-ce que le vecteur nul?", "Le vecteur de norme 0, comme v + (−v) ou une chaîne fermée de vecteurs."],
    ],
    summary: [
      "Bout à bout, ou diagonale du parallélogramme.",
      "u − v = u + (−v) : de l'extrémité de v à l'extrémité de u.",
      "Loi des cosinus pour la norme, loi des sinus pour la direction.",
      "Une chaîne fermée de vecteurs a pour somme 0.",
    ],
    next: "La leçon 6.3 porte sur la multiplication d'un vecteur par un scalaire.",
  }),
];
