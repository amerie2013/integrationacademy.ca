// MCV4U-FR 6.1 — Introduction aux vecteurs : scalaires et vecteurs, notation, norme, direction donnée par un angle,
// un relèvement vrai ou un relèvement de quadrant, diagrammes à l'échelle, vecteurs égaux, opposés et parallèles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "../mcv4u-ch6/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "6.1 Introduction aux vecteurs";
export const ID = lessonId(6, 1);

const S = String.raw;
const compass = (b, color = "violet", vl = "v") => ({ from: [0, 0], to: brg(3.4, b), color, vl });
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Introduction aux vecteurs",
    overview: S`Certaines grandeurs n'ont besoin que d'une taille : une masse de 5 kg, une température de 20 °C, une vitesse de 60 km/h. Ce sont des <strong>scalaires</strong>. D'autres ont besoin d'une taille <em>et</em> d'une direction : un déplacement de 3 km vers l'est, une force de 49 N vers le bas, une vitesse de 60 km/h vers le nord. Ce sont des <strong>vecteurs</strong>. On représente un vecteur par une flèche — sa longueur indique la <strong>norme</strong> (grandeur), sa pointe indique la direction — et on décrit la direction à l'aide d'un angle ou d'un relèvement.`,
    goals: [
      "distinguer les scalaires des vecteurs;",
      "utiliser la notation vectorielle et trouver la norme d'un vecteur tracé sur un quadrillage;",
      "décrire une direction à l'aide d'un angle, d'un relèvement vrai ou d'un relèvement de quadrant;",
      "tracer un vecteur à l'échelle;",
      "reconnaître des vecteurs égaux, opposés et parallèles.",
    ],
    curriculum: "C1.1, C1.2 (reconnaître un vecteur comme une grandeur ayant une norme et une direction; représenter des vecteurs géométriquement et à l'aide de relèvements)",
    prior: [
      [S`Distance entre \((0,0)\) et \((3,4)\)?`, S`\(5\).`],
      [S`\(\tan^{-1}1\)?`, S`\(45^\circ\).`],
      [S`Un tour complet vaut combien de degrés?`, S`\(360^\circ\).`],
    ],
    words: [
      ["Scalaire", "taille seulement", "masse, temps, module de la vitesse"],
      ["Vecteur", "taille et direction", "\\(\\vec v\\), \\(\\overrightarrow{AB}\\)"],
      ["Norme", "longueur de la flèche", "\\(|\\vec v|\\)"],
      ["Relèvement vrai", "dans le sens horaire à partir du nord, 3 chiffres", "\\(060^\\circ\\)"],
      ["Relèvement de quadrant", "à partir de N ou S, vers E ou O", "N60°E"],
    ],
  }),

  section("📌 Flèches, notation et relèvements", S`
  <p>Le vecteur qui va du point \(A\) (son <em>origine</em>) au point \(B\) (son <em>extrémité</em>) s'écrit \(\overrightarrow{AB}\); un vecteur désigné par une seule lettre s'écrit \(\vec v\) (\(\mathbf v\) en gras dans un texte imprimé). Sa norme est \(|\overrightarrow{AB}|\), la longueur \(AB\).</p>
  ${table(["Direction exprimée par", "Mesurée", "Exemple (même direction)"], [
    ["un angle à partir de l'est", "dans le sens antihoraire à partir de l'axe des x positifs", "\\(30^\\circ\\)"],
    ["un relèvement vrai", "dans le sens horaire à partir du nord", "\\(060^\\circ\\)"],
    ["un relèvement de quadrant", "à partir de N ou S, en tournant vers E ou O", "N60°E"],
  ])}
  ${vfig({ view: { xmin: -4.5, xmax: 4.5, ymin: -4.5, ymax: 4.5 }, grid: false, north: [0, 0, 4.2], arrows: [compass(60, "violet", "a"), compass(140, "blue", "b"), compass(335, "red", "c")], arcs: [{ at: [0, 0], r: 1.2, a: 30, b: 90, label: "60°", color: "violet" }, { at: [0, 0], r: 1.8, a: -50, b: 90, label: "140°", color: "blue", lr: 0.6 }], texts: [{ x: 3.6, y: 2.4, t: "N60°E", color: "violet" }, { x: 2.9, y: -3.2, t: "S40°E", color: "blue" }, { x: -2.2, y: 3.6, t: "N25°O", color: "red" }] }, "a : relèvement 060° = N60°E;  b : relèvement 140° = S40°E;  c : relèvement 335° = N25°O")}
  ${keyIdea(S`Un vecteur a une norme et une direction, et <strong>rien d'autre</strong> : l'endroit où on le trace n'a pas d'importance. Deux vecteurs sont <strong>égaux</strong> lorsqu'ils ont la même norme et la même direction. \(-\vec v\) a la même norme que \(\vec v\) et la direction opposée.`)}`),

  section("📌 Explore", S`<p>Modifie la norme et la direction de \(\vec v\) et lis ses relèvements vrai et de quadrant. Déplace la deuxième origine : la copie bleue est le même vecteur, peu importe où elle se trouve. Passe au vecteur opposé pour voir \(-\vec v\).</p>`),

  widget("vectorBasics", { init: { m: 4, deg: 50, tx: -4, ty: -3 } }),

  section("📌 Travailler avec les relèvements et l'échelle", S`
  <p>Pour tracer un vecteur à l'échelle, choisis une échelle (par exemple 1 cm : 50 m), marque le nord, tourne dans le sens horaire de la valeur du relèvement et trace une flèche de la longueur mise à l'échelle. Sur un quadrillage, la norme s'obtient avec le théorème de Pythagore et la direction, avec la tangente inverse.</p>
  ${watchOut([
    "Les relèvements vrais se mesurent dans le sens horaire à partir du nord et s'écrivent avec trois chiffres : 045°, pas 45°.",
    "Un relèvement de quadrant commence par N ou S et ne dépasse jamais 90°.",
    "Des vecteurs égaux doivent aussi avoir la même direction — la même longueur ne suffit pas.",
    "La direction opposée au relèvement θ est θ ± 180°.",
    "Le module de la vitesse est un scalaire; la vitesse (module avec une direction) est un vecteur.",
  ])}`),

  examples([
    ["Scalaire ou vecteur?", S`Classe chaque grandeur : (a) 60 km/h; (b) 60 km/h plein nord; (c) 5 kg; (d) une traction de 49 N vers le bas; (e) 18 °C; (f) 3 km vers l'est.`,
      [S`Grandeurs qui n'ont qu'une taille : (a) module de la vitesse, (c) masse, (e) température.`, S`Grandeurs qui ont une direction : (b) vitesse, (d) force, (f) déplacement.`],
      S`scalaires (a), (c), (e); vecteurs (b), (d), (f)`],
    ["Convertir des relèvements", S`Écris le relèvement vrai \(140^\circ\) sous forme de relèvement de quadrant, et le relèvement de quadrant N25°O sous forme de relèvement vrai.`,
      [S`\(140^\circ\) dépasse l'est (90°) sans atteindre le sud (180°) : il est à \(180^\circ-140^\circ=40^\circ\) à l'est du sud, soit S40°E.`, S`N25°O tourne de 25° vers l'ouest à partir du nord, donc l'angle mesuré dans le sens horaire est \(360^\circ-25^\circ=335^\circ\).`],
      S`S40°E et \(335^\circ\)`,
      vfig({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, grid: false, north: [0, 0, 3.8], arrows: [compass(140, "blue", "b"), compass(335, "red", "c")], arcs: [{ at: [0, 0], r: 1.3, a: -90, b: -50, label: "40°", color: "blue" }, { at: [0, 0], r: 1.9, a: 90, b: 115, label: "25°", color: "red", lr: 0.45 }] })],
    ["Un diagramme à l'échelle", S`Trace un déplacement de 250 m selon un relèvement de \(060^\circ\) à l'échelle 1 cm : 50 m.`,
      [S`Longueur à l'échelle : \(250\div50=5\) cm.`, S`Marque le nord, tourne de \(60^\circ\) dans le sens horaire et trace une flèche de 5 cm.`],
      S`une flèche de 5 cm orientée à \(60^\circ\) à l'est du nord`,
      vfig({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 4.5 }, north: [0, 0, 4], arrows: [{ from: [0, 0], to: brg(5, 60), vl: "d", label: "5 cm = 250 m" }], arcs: [{ at: [0, 0], r: 1.2, a: 30, b: 90, label: "60°" }] })],
    ["Vecteurs égaux et opposés", S`\(ABCD\) est un parallélogramme. Nomme un vecteur égal à \(\overrightarrow{AB}\), un vecteur égal à \(\overrightarrow{AD}\) et un vecteur opposé à \(\overrightarrow{AB}\).`,
      [S`Les côtés opposés d'un parallélogramme sont parallèles et de même longueur, donc \(\overrightarrow{DC}\) a la même longueur et la même direction que \(\overrightarrow{AB}\).`, S`De même, \(\overrightarrow{BC}=\overrightarrow{AD}\). En inversant la flèche, on obtient \(\overrightarrow{BA}=-\overrightarrow{AB}\) (ainsi que \(\overrightarrow{CD}\)).`],
      S`\(\overrightarrow{DC}=\overrightarrow{AB}\), \(\overrightarrow{BC}=\overrightarrow{AD}\), \(\overrightarrow{BA}=\overrightarrow{CD}=-\overrightarrow{AB}\)`,
      vfig({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 3.8 }, grid: false, arrows: [{ from: [0, 0], to: [4.5, 0], color: "violet", off: -15 }, { from: [1.8, 3], to: [6.3, 3], color: "violet" }, { from: [0, 0], to: [1.8, 3], color: "blue" }, { from: [4.5, 0], to: [6.3, 3], color: "blue", off: -15 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 16 }, { x: 4.5, y: 0, label: "B", dx: 6, dy: 16 }, { x: 6.3, y: 3, label: "C", dx: 8, dy: -6 }, { x: 1.8, y: 3, label: "D", dx: -16, dy: -6 }] })],
    ["Norme et direction à partir d'un quadrillage", S`Trouve la norme et le relèvement vrai du vecteur qui va de \(P(-1,-2)\) à \(Q(3,1)\) (le nord est vers le haut).`,
      [S`Il se déplace de 4 vers la droite et de 3 vers le haut : \(|\overrightarrow{PQ}|=\sqrt{4^2+3^2}=5\).`, S`Angle au-dessus de l'est : \(\tan^{-1}\frac34\approx36.87^\circ\), donc l'angle à partir du nord est \(90^\circ-36.87^\circ=53.13^\circ\).`],
      S`\(|\overrightarrow{PQ}|=5\), relèvement d'environ \(053.1^\circ\)`,
      vfig({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 2 }, arrows: [{ from: [-1, -2], to: [3, 1], vl: "PQ", off: 16 }], segs: [{ pts: [[-1, -2], [3, -2], [3, 1]], dash: true }], texts: [{ x: 1, y: -2.45, t: "4" }, { x: 3.3, y: -0.5, t: "3" }], points: [{ x: -1, y: -2, label: "P", dx: -16, dy: 4 }, { x: 3, y: 1, label: "Q", dx: 8, dy: -4 }] })],
  ]),

  practice([
    q("type", S`Quelle grandeur est un vecteur?`, choice(["une accélération de 9.8 m/s² vers le bas", "un temps de 12 s", "une longueur de 4 m", "une énergie de 300 J"], 0),
      "Elle a une direction.", ["Cherche une direction indiquée."], "l'accélération vers le bas"),
    q("relèvement", S`Écris S35°O sous forme de relèvement vrai (en degrés).`, num(215),
      "À partir du sud, 35° vers l'ouest.", [S`\(180^\circ+35^\circ\).`], S`\(215^\circ\)`),
    q("opposé", S`\(\vec v\) a un relèvement vrai de \(070^\circ\). Quel est le relèvement vrai de \(-\vec v\)?`, num(250),
      "Ajoute 180°.", [S`\(70^\circ+180^\circ\).`], S`\(250^\circ\)`),
    q("norme", S`Trouve la norme du vecteur qui va de \((2,-1)\) à \((-4,7)\).`, num(10),
      "Pythagore sur la course et la montée.", [S`\(\sqrt{6^2+8^2}\).`], S`\(10\)`),
    q("hexagone", S`\(ABCDEF\) est un hexagone régulier dont les sommets sont nommés dans le sens antihoraire. Quel vecteur est égal à \(\overrightarrow{AB}\)?`, choice([S`\(\overrightarrow{ED}\)`, S`\(\overrightarrow{DE}\)`, S`\(\overrightarrow{BC}\)`, S`\(\overrightarrow{CD}\)`], 0),
      "Les côtés opposés d'un hexagone régulier sont parallèles.", ["AB est parallèle à DE, mais pointe dans l'autre sens."], S`\(\overrightarrow{ED}\)`),
  ]),

  ...hard([
    ["Les arêtes égales d'un cube", S`Dans le cube \(ABCDEFGH\) (base \(ABCD\), face supérieure \(EFGH\), avec \(E\) au-dessus de \(A\)), énumère tous les vecteurs arêtes égaux à \(\overrightarrow{AB}\). Combien de vecteurs le long des arêtes ont la même norme que \(\overrightarrow{AB}\) sans lui être égaux?`,
      [S`Arêtes parallèles à \(AB\) et orientées dans le même sens : \(\overrightarrow{DC}\), \(\overrightarrow{EF}\), \(\overrightarrow{HG}\).`, S`Un cube a 12 arêtes, et chacune donne 2 vecteurs (un dans chaque sens) : 24 vecteurs de même longueur. Quatre d'entre eux sont égaux à \(\overrightarrow{AB}\) (y compris lui-même).`],
      S`\(\overrightarrow{DC},\overrightarrow{EF},\overrightarrow{HG}\); \(24-4=20\) autres`,
      vfig({ view: { xmin: -0.5, xmax: 6, ymin: -0.6, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [3.5, 0], [5, 1.5], [1.5, 1.5], [0, 0]], color: "gray" }, { pts: [[0, 3.5], [3.5, 3.5], [5, 5], [1.5, 5], [0, 3.5]], color: "gray" }, { pts: [[0, 0], [0, 3.5]], color: "gray" }, { pts: [[3.5, 0], [3.5, 3.5]], color: "gray" }, { pts: [[5, 1.5], [5, 5]], color: "gray" }, { pts: [[1.5, 1.5], [1.5, 5]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [3.5, 0], color: "red", w: 3.4 }, { from: [1.5, 1.5], to: [5, 1.5], color: "violet", dash: true }, { from: [0, 3.5], to: [3.5, 3.5], color: "violet" }, { from: [1.5, 5], to: [5, 5], color: "violet" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 16 }, { x: 3.5, y: 0, label: "B", dx: 4, dy: 16 }, { x: 5, y: 1.5, label: "C", dx: 8, dy: 6 }, { x: 1.5, y: 1.5, label: "D", dx: -16, dy: -4 }, { x: 0, y: 3.5, label: "E", dx: -16, dy: 0 }, { x: 3.5, y: 3.5, label: "F", dx: 4, dy: 18 }, { x: 5, y: 5, label: "G", dx: 8, dy: 0 }, { x: 1.5, y: 5, label: "H", dx: -16, dy: -4 }] })],
    ["La pointe d'une aiguille des minutes", S`Une aiguille des minutes mesure 10 cm. Trouve la norme et le relèvement vrai du déplacement de sa pointe entre 12 h 00 et 12 h 20 (le 12 indique le nord).`,
      [S`À 12 h 00, la pointe est en \((0,10)\). En 20 minutes, l'aiguille tourne de \(120^\circ\) dans le sens horaire, jusqu'au relèvement \(120^\circ\) : la pointe est en \((10\sin120^\circ,10\cos120^\circ)=(8.66,-5)\).`, S`Déplacement \((8.66,-15)\) : norme \(\sqrt{8.66^2+15^2}\approx17.32\) cm (aussi \(2\cdot10\sin60^\circ\)).`, S`Il pointe à \(\tan^{-1}\frac{8.66}{15}=30^\circ\) à l'est du sud : relèvement \(150^\circ\).`],
      S`environ 17.32 cm selon un relèvement de \(150^\circ\)`,
      vfig({ view: { xmin: -11.5, xmax: 11.5, ymin: -11.5, ymax: 11.5 }, grid: false, axes: false, step: 5, segs: [{ pts: Array.from({ length: 61 }, (_, i) => pol(10, i * 6)), color: "gray" }], arrows: [{ from: [0, 0], to: [0, 10], color: "gray", w: 2 }, { from: [0, 0], to: [8.66, -5], color: "gray", w: 2 }, { from: [0, 10], to: [8.66, -5], color: "red", vl: "d", label: "17.32 cm" }], points: [{ x: 0, y: 10, label: "12 h 00", dx: -62, dy: -6 }, { x: 8.66, y: -5, label: "12 h 20", dx: 8, dy: 16 }] })],
  ], [
    q("difficile", S`Un hexagone régulier \(ABCDEF\) a des côtés de longueur 2. Trouve \(|\overrightarrow{AD}|\).`, num(4),
      "AD est une grande diagonale : le double du côté.", [S`L'hexagone est formé de six triangles équilatéraux.`], S`\(4\)`),
    q("difficile", S`La pointe d'une aiguille des minutes de 12 cm se déplace de 12 h 00 à 12 h 30. Trouve la norme de son déplacement (en cm).`, num(24),
      "Elle se rend au côté opposé du cercle.", [S`Un diamètre : \(2\times12\).`], S`\(24\)`),
    q("difficile", S`Trouve la norme du vecteur qui va de \((-3,5)\) à \((4,-19)\).`, num(25),
      "Course 7, montée −24.", [S`\(\sqrt{49+576}\).`], S`\(25\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce qui fait d'une grandeur un vecteur?", "Elle a à la fois une norme et une direction, comme une force ou un déplacement."],
      ["Quand deux vecteurs sont-ils égaux?", "Lorsqu'ils ont la même norme et la même direction, peu importe où ils sont tracés."],
      ["Quelle est la différence entre un relèvement vrai et un relèvement de quadrant?", "Un relèvement vrai est l'angle mesuré dans le sens horaire à partir du nord (de 000° à 359°); un relèvement de quadrant nomme N ou S, un angle d'au plus 90°, puis E ou O."],
      ["Quel est le lien entre −v et v?", "Même norme, direction opposée : leurs relèvements diffèrent de 180°."],
      ["Comment trouver une norme sur un quadrillage?", "Applique le théorème de Pythagore aux variations horizontale et verticale."],
    ],
    summary: [
      "Les vecteurs ont une norme et une direction; les scalaires, seulement une grandeur.",
      "Notation : \\(\\vec v\\), \\(\\overrightarrow{AB}\\), norme \\(|\\vec v|\\).",
      "Relèvements : vrai (sens horaire à partir du N) ou de quadrant (N/S puis E/O).",
      "Égaux : même longueur et même direction; opposés : sens inversé.",
    ],
    next: "La leçon 6.2 porte sur l'addition et la soustraction de vecteurs.",
  }),
];
