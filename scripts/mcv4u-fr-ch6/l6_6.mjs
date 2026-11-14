// MCV4U-FR 6.6 — Révision du chapitre 6 : vecteurs et relèvements, addition et soustraction, multiples scalaires,
// résultantes en navigation et pour les forces, et composantes rectangulaires, avec exercices variés et niveau difficile
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "../mcv4u-ch6/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "6.6 Révision du chapitre 6";
export const ID = lessonId(6, 6);

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
const QA = [0, 0], QB = [6, -0.5], QC = [7, 3.5], QD = [1.5, 4.5];
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 6 — Vecteurs géométriques",
    overview: S`Cette page fait la synthèse du chapitre avant l'évaluation. Un vecteur est une norme accompagnée d'une direction; on le représente par une flèche et on le décrit par un angle ou un relèvement. Les vecteurs s'additionnent bout à bout, se soustraient en additionnant l'opposé, et s'étirent ou changent de sens par la multiplication par un scalaire. Les problèmes concrets — forces, vent, courants — se ramènent à tracer le bon triangle et à utiliser les lois des cosinus et des sinus, ou à décomposer chaque vecteur en composantes et à les additionner.`,
    goals: [
      "se rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "passer d'un relèvement vrai à un relèvement de quadrant, et inversement;",
      "trouver des sommes, des différences et des multiples scalaires de vecteurs;",
      "résoudre des problèmes de forces et de navigation;",
      "décomposer des vecteurs et les recombiner à l'aide des composantes.",
    ],
    curriculum: "C1.1–C1.3, C2.1, C2.2 (tout le chapitre)",
    prior: [
      [S`\(|k\vec v|\)?`, S`\(|k||\vec v|\).`],
      [S`\(\vec u-\vec v\) avec les origines réunies?`, S`de l'extrémité de \(\vec v\) à l'extrémité de \(\vec u\).`],
      [S`Composante horizontale de \(\vec v\) à l'angle \(\theta\)?`, S`\(|\vec v|\cos\theta\).`],
    ],
    words: [
      ["Vecteur", "norme et direction", "\\(\\vec v\\), \\(\\overrightarrow{AB}\\)"],
      ["Résultante", "somme des vecteurs", "bout à bout"],
      ["Équilibrante", "opposé de la résultante", "l'annule"],
      ["Composantes", "parties perpendiculaires", "\\(|\\vec v|\\cos\\theta,\\ |\\vec v|\\sin\\theta\\)"],
    ],
  }),

  section("📌 Le chapitre en une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["6.1 Vecteurs", "norme + direction; relèvements", "140° = S40°E", "l'égalité exige la même direction"],
    ["6.2 Addition / soustraction", "bout à bout; u − v = u + (−v)", "|u + v| par la loi des cosinus", "angle du triangle = 180° − angle entre les vecteurs"],
    ["6.3 Multiples scalaires", "|kv| = |k||v|; colinéaires", "vecteur unitaire v/|v|", "k < 0 inverse le sens"],
    ["6.4 Applications", "résultante, équilibrante, vent", "vitesse sol", "un vent est nommé d'après la direction d'où il vient"],
    ["6.5 Composantes", "|v| cos θ, |v| sin θ", "plan incliné : W sin α parallèlement", "signes selon le quadrant"],
  ])),

  section("📌 Explore", S`<p>Utilise l'explorateur de résultantes pour vérifier les exemples de navigation et de forces de cette page : règle les vitesses et les directions, puis compare avec tes calculs.</p>`),

  widget("resultantLab", { init: { mode: "force" } }),

  section("📌 Vue d'ensemble", S`${keyIdea(S`Chaque problème du chapitre 6 commence par un diagramme. Résous le triangle formé par les flèches (loi des cosinus pour une longueur, loi des sinus pour un angle), ou décompose chaque vecteur en composantes perpendiculaires, additionne-les, puis reconstitue le vecteur.`)}
  ${vfig({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 1], vl: "u" }, { from: [4.5, 1], to: [6.5, 4], vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: [6.5, 4], vl: "u+v", color: "red" }, { from: [0, 0], to: [6.5, 0], color: "gray", w: 1.6, dash: true }, { from: [6.5, 0], to: [6.5, 4], color: "gray", w: 1.6, dash: true }] }, "Deux chemins vers la même résultante : résoudre le triangle, ou additionner les composantes en pointillé")}`),

  examples([
    ["Relèvements et opposés", S`\(\vec v\) pointe vers S20°O. Donne son relèvement vrai, ainsi que les relèvements vrai et de quadrant de \(-\vec v\).`,
      [S`S20°O correspond à \(180^\circ+20^\circ=200^\circ\).`, S`\(-\vec v\) : \(200^\circ-180^\circ=20^\circ\), c'est-à-dire \(020^\circ\) ou N20°E.`],
      S`\(200^\circ\); \(-\vec v\) a un relèvement de \(020^\circ\) = N20°E`,
      vfig({ view: { xmin: -3, xmax: 3, ymin: -3.4, ymax: 3.4 }, grid: false, north: [0, 0, 3.2], arrows: [{ from: [0, 0], to: brg(3, 200), vl: "v", off: -16 }, { from: [0, 0], to: brg(3, 20), vl: "−v", color: "red", off: -18 }], arcs: [{ at: [0, 0], r: 1, a: 250, b: 270, label: "20°", lr: 0.4 }] })],
    ["Une différence", S`\(|\vec u|=9\), \(|\vec v|=4\) et l'angle entre eux est de \(50^\circ\). Trouve \(|\vec u-\vec v|\).`,
      [S`Avec les origines réunies, \(\vec u-\vec v\) ferme le triangle en face de l'angle de \(50^\circ\).`, S`\(|\vec u-\vec v|^2=81+16-72\cos50^\circ\approx50.72\).`],
      S`\(|\vec u-\vec v|\approx7.12\)`,
      vfig({ view: { xmin: -0.6, xmax: 9.6, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [9, 0], vl: "u", label: "9", off: 16 }, { from: [0, 0], to: pol(4, 50), vl: "v", label: "4", color: "blue" }, { from: pol(4, 50), to: [9, 0], color: "red", label: "u − v ≈ 7.12" }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 50, label: "50°" }] })],
    ["Algèbre des scalaires", S`Simplifie \(2(\vec a-3\vec b)+4(\vec b+\vec a)\) et indique si le résultat est colinéaire à \(3\vec a-\vec b\).`,
      [S`\(2\vec a-6\vec b+4\vec b+4\vec a=6\vec a-2\vec b\).`, S`\(6\vec a-2\vec b=2(3\vec a-\vec b)\) : un multiple scalaire.`],
      S`\(6\vec a-2\vec b\), colinéaire à \(3\vec a-\vec b\)`],
    ["Un bateau dans un courant", S`Un bateau se dirige directement vers l'autre rive à 5 m/s; le courant est de 2 m/s. Trouve sa vitesse par rapport à la rive.`,
      [S`\(\sqrt{5^2+2^2}=\sqrt{29}\approx5.39\) m/s.`, S`Angle vers l'aval par rapport à la perpendiculaire aux rives : \(\tan^{-1}\frac25\approx21.80^\circ\).`],
      S`environ 5.39 m/s à \(21.8^\circ\) vers l'aval`,
      vfig({ view: { xmin: -0.8, xmax: 3.4, ymin: -0.6, ymax: 5.6 }, grid: false, axes: false, polys: [{ pts: [[-0.8, 0], [3.4, 0], [3.4, 5.2], [-0.8, 5.2]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [0, 5], vl: "b", label: "5 m/s", off: -18 }, { from: [0, 5], to: [2, 5], color: "blue", label: "2 m/s", off: -14 }, { from: [0, 0], to: [2, 5], color: "red", label: "5.39 m/s", off: -18 }], arcs: [{ at: [0, 0], r: 1.3, a: 68.2, b: 90, label: "21.8°", lr: 0.45 }] })],
    ["Composantes dans le deuxième quadrant", S`Trouve les composantes d'une force de 45 N orientée à \(140^\circ\) à partir de l'axe des x positifs.`,
      [S`x : \(45\cos140^\circ\approx-34.47\) N (vers la gauche).`, S`y : \(45\sin140^\circ\approx28.93\) N (vers le haut).`],
      S`environ \(-34.47\) N horizontalement et \(28.93\) N verticalement`,
      vfig({ view: { xmin: -4, xmax: 1, ymin: -0.8, ymax: 3.4 }, grid: false, arrows: [{ from: [0, 0], to: [-3.447, 0], color: "blue", label: "−34.47", off: -14 }, { from: [-3.447, 0], to: [-3.447, 2.893], color: "red", label: "28.93", off: 30 }, { from: [0, 0], to: pol(4.5, 140), vl: "F", label: "45 N", off: -16 }], arcs: [{ at: [0, 0], r: 0.6, a: 0, b: 140, label: "140°", lr: 0.35 }] })],
  ]),

  practice([
    q("somme", S`\(|\vec u|=6\), \(|\vec v|=8\), \(\vec u\perp\vec v\). Trouve \(|\vec u+\vec v|\).`, num(10),
      "Pythagore.", [S`\(\sqrt{36+64}\).`], S`\(10\)`),
    q("relèvement", S`Écris N60°O sous forme de relèvement vrai (en degrés).`, num(300),
      "360° − 60°.", [S`Dans le sens horaire, du nord jusqu'à N60°O.`], S`\(300^\circ\)`),
    q("scalaire", S`\(|\vec u|=14\). Trouve \(|-0.5\vec u|\).`, num(7),
      "|k||u|.", [S`\(0.5\times14\).`], S`\(7\)`),
    q("plan incliné", S`Trouve la composante perpendiculaire au plan d'un poids de 50 N sur un plan incliné à \(60^\circ\) (en N).`, num(25),
      "W cos α.", [S`\(50\cos60^\circ\).`], S`\(25\)`),
    q("équilibre", S`Un objet est en équilibre lorsque :`, choice(["la somme vectorielle des forces qui s'exercent sur lui est nulle", "toutes les forces qui s'exercent sur lui sont égales", "une seule force s'exerce sur lui", "les forces sont perpendiculaires"], 0),
      "Les forces s'annulent.", ["Résultante = 0."], "la somme vectorielle est nulle"),
  ]),

  ...hard([
    ["Un vent de travers du sud-ouest", S`Un avion a un cap de \(300^\circ\) à 450 km/h. Le vent souffle à 70 km/h de \(200^\circ\). Trouve la vitesse sol et la route.`,
      [S`Le vent souffle vers \(020^\circ\). Du cap \(300^\circ\) jusqu'à \(020^\circ\) dans le sens horaire, il y a \(80^\circ\), donc l'angle du triangle est de \(100^\circ\).`, S`\(|\vec g|^2=450^2+70^2-2(450)(70)\cos100^\circ\approx218\,340\), \(|\vec g|\approx467.3\) km/h.`, S`\(\sin\delta=\frac{70\sin100^\circ}{467.3}\), \(\delta\approx8.48^\circ\) dans le sens horaire par rapport au cap.`],
      S`environ 467.3 km/h selon une route de \(308.5^\circ\)`,
      vfig({ view: { xmin: -4.6, xmax: 0.8, ymin: -0.6, ymax: 3.6 }, north: [0, 0, 3.3], arrows: [{ from: [0, 0], to: brg(4.5, 300), vl: "a", label: "450 km/h", off: -18 }, { from: brg(4.5, 300), to: plus(brg(4.5, 300), brg(0.7, 20)), color: "blue", label: "70", off: 14 }, { from: [0, 0], to: plus(brg(4.5, 300), brg(0.7, 20)), color: "red", vl: "g", off: 18 }] })],
    ["Les points milieux d'un quadrilatère quelconque", S`Démontre qu'en reliant les points milieux des côtés d'un quadrilatère quelconque \(ABCD\), on obtient un parallélogramme.`,
      [S`Soit \(P\), \(Q\), \(R\), \(S\) les points milieux de \(AB\), \(BC\), \(CD\), \(DA\). Alors \(\overrightarrow{PQ}=\frac12\overrightarrow{AB}+\frac12\overrightarrow{BC}=\frac12\overrightarrow{AC}\).`, S`De même, \(\overrightarrow{SR}=\frac12\overrightarrow{AD}+\frac12\overrightarrow{DC}=\frac12\overrightarrow{AC}\).`, S`Donc \(\overrightarrow{PQ}=\overrightarrow{SR}\) : une paire de côtés opposés est parallèle et de même longueur.`],
      S`\(PQRS\) est un parallélogramme (chaque paire de côtés opposés est égale à la moitié d'une diagonale)`,
      vfig({ view: { xmin: -0.6, xmax: 7.8, ymin: -1.2, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [QA, QB, QC, QD, QA], color: "gray" }, { pts: [QA, QC], color: "gray", dash: true }], arrows: [{ from: mid(QA, QB), to: mid(QB, QC), color: "red" }, { from: mid(QD, QA), to: mid(QC, QD), color: "red" }, { from: mid(QA, QB), to: mid(QD, QA), color: "blue", w: 2 }, { from: mid(QB, QC), to: mid(QC, QD), color: "blue", w: 2 }], points: [{ x: QA[0], y: QA[1], label: "A", dx: -14, dy: 14 }, { x: QB[0], y: QB[1], label: "B", dx: 6, dy: 16 }, { x: QC[0], y: QC[1], label: "C", dx: 8, dy: 0 }, { x: QD[0], y: QD[1], label: "D", dx: -14, dy: -6 }] })],
  ], [
    q("difficile", S`Des forces de 12 N et de 9 N ont une résultante de 15 N. Trouve l'angle entre elles (en degrés).`, num(90),
      "9, 12, 15 forme un triangle rectangle.", [S`\(15^2=12^2+9^2\).`], S`\(90^\circ\)`),
    q("difficile", S`Trouve la composante est d'une force de 200 N selon un relèvement de \(050^\circ\) (en N, au centième près).`, num(153.21, 0.01),
      "La composante est utilise le sinus du relèvement.", [S`\(200\sin50^\circ\).`], S`\(153.21\)`),
    q("difficile", S`\(|\vec u|=3\), \(|\vec v|=4\) et \(\vec u\perp\vec v\). Trouve \(|2\vec u+\vec v|\) (au millième près).`, num(7.211, 0.002),
      "2u est encore perpendiculaire à v.", [S`\(\sqrt{36+16}\).`], S`\(7.211\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment commencer n'importe quel problème de vecteurs?", "Fais un dessin : des flèches bout à bout, avec les longueurs et les angles connus indiqués."],
      ["Triangle ou composantes?", "Avec deux vecteurs, le triangle et les lois des cosinus et des sinus sont rapides. Avec trois vecteurs ou plus, les composantes sont plus simples."],
      ["Comment transformer un relèvement en angle mathématique?", "Angle mathématique = 90° − relèvement (en ajoutant 360° au besoin)."],
      ["Quel est l'effet d'un scalaire négatif?", "Il inverse le sens et multiplie la longueur par |k|."],
      ["Qu'est-ce que l'équilibre?", "La somme vectorielle de toutes les forces est nulle; les flèches des forces forment donc un polygone fermé."],
    ],
    summary: [
      "Norme + direction; relèvements à partir du nord.",
      "Bout à bout; lois des cosinus et des sinus.",
      "kv : étirer, rétrécir, inverser; colinéarité.",
      "Composantes : additionne les parties, puis reconstitue le vecteur.",
    ],
    next: "Le chapitre 7 place les vecteurs dans un repère : vecteurs cartésiens, produit scalaire et produit vectoriel.",
  }),
];
