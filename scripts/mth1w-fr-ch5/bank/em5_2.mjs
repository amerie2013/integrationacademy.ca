import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.2 Motifs créés avec les propriétés des cercles et des triangles — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const circ = (pts, segs, extra = []) => figDoc({ w: 240, items: [{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.1, -0.13], size: 12 }, ...segs.map(([a, b, col]) => ({ seg: [a === "O" ? [0, 0] : P(pts[a]), b === "O" ? [0, 0] : P(pts[b])], color: col ?? "blue" })), ...Object.entries(pts).flatMap(([n, d]) => [{ dot: P(d), r: 3.5 }, { text: n, at: P(d, 1.15), bold: true }]), ...extra] });

export const E = [
  num(`Deux angles d'un triangle mesurent 50° et 60°. Trouve le troisième angle (en degrés).`, 70, "180 − 50 − 60."),
  num(`Un triangle rectangle a un angle aigu de 35°. Trouve l'autre angle aigu.`, 55, "90 − 35."),
  num(`Combien de degrés mesure chaque angle d'un triangle équilatéral ?`, 60, "180 ÷ 3."),
  num(`Un triangle isocèle a un angle au sommet de 50°. Trouve chaque angle à la base.`, 65, "(180 − 50) ÷ 2."),
  num(`Les deux angles intérieurs opposés à un angle extérieur mesurent 30° et 75°. Trouve l'angle extérieur.`, 105, "30 + 75."),
  num(`Quelle est la somme des angles intérieurs d'un quadrilatère ?`, 360, "(4 − 2) × 180."),
  num(`Quelle est la somme des angles intérieurs d'un pentagone ?`, 540, "(5 − 2) × 180."),
  num(`Combien de degrés mesure chaque angle intérieur d'un hexagone régulier ?`, 120, "720 ÷ 6."),
  num(`Combien de degrés mesure chaque angle extérieur d'un octogone régulier ?`, 45, "360 ÷ 8."),
  num(`Un angle au centre mesure 100°. Trouve un angle inscrit qui intercepte le même arc.`, 50, "La moitié de 100.", FIG.arc100),
  num(`Un angle inscrit mesure 25°. Trouve l'angle au centre qui intercepte le même arc.`, 50, "Le double de 25.", FIG.arc25),
  num(`Combien de degrés mesure un angle inscrit dans un demi-cercle ?`, 90, "Angle inscrit dans un demi-cercle."),
  num(`Une tangente rencontre un rayon au point de contact. Quel angle forment-ils ?`, 90, "Tangente ⟂ rayon."),
  tf(`Un triangle peut avoir deux angles obtus.`, false, "Deux angles de plus de 90° dépasseraient déjà 180°."),
  tf(`Les angles extérieurs de tout polygone convexe (un à chaque sommet) ont une somme de 360°.`, true, "En faisant le tour du polygone, on tourne une fois sur soi-même."),
  mc(`Une corde qui passe par le centre d'un cercle s'appelle un…`, "diamètre", ["rayon", "tangente", "arc"], "La plus longue corde."),
  mc(`Un triangle dont les angles mesurent 40°, 70°, 70° est…`, "isocèle et acutangle", ["scalène et acutangle", "isocèle et obtusangle", "équilatéral"], "Deux angles égaux; tous inférieurs à 90°."),
  num(`Deux rayons d'un cercle forment un triangle avec une corde. L'angle entre les rayons mesure 80°. Trouve un des deux autres angles.`, 50, "Isocèle : (180 − 80) ÷ 2.", FIG.radii80),
  mc(`Quel polygone régulier a des angles intérieurs de 90° ?`, "le carré", ["le triangle", "le pentagone", "l'hexagone"], "4 × 90 = 360."),
  num(`Un polygone régulier a 9 côtés. Trouve chaque angle au centre lorsqu'il est tracé dans un cercle.`, 40, "360 ÷ 9."),
];

export const M = [
  num(`Les angles d'un triangle mesurent x, 2x et 3x. Trouve le plus grand angle.`, 90, "6x = 180 → x = 30."),
  num(`Un angle extérieur d'un triangle mesure 132°. Un des angles intérieurs opposés mesure 57°. Trouve l'autre angle intérieur opposé.`, 75, "132 − 57."),
  num(`Trouve la somme des angles intérieurs d'un polygone à 15 côtés.`, 2340, "13 × 180."),
  num(`Chaque angle intérieur d'un polygone régulier mesure 140°. Combien de côtés a-t-il ?`, 9, "Extérieur 40°; 360 ÷ 40."),
  num(`Chaque angle extérieur d'un polygone régulier mesure 24°. Trouve chaque angle intérieur.`, 156, "180 − 24."),
  num(`Dans la figure, ∠AOB est un angle au centre de 140°. Trouve l'angle inscrit ∠APB.`, 70, "La moitié de 140.", circ({ A: 200, B: 340, P: 90 }, [["O", "A"], ["O", "B"], ["A", "P", "red"], ["B", "P", "red"]])),
  num(`AB est un diamètre et C est sur le cercle, avec ∠CAB = 27°. Trouve ∠CBA.`, 63, "∠ACB = 90°; 180 − 90 − 27.", FIG.semi27),
  num(`Deux tangentes issues d'un point T touchent un cercle en A et en B. Si ∠AOB = 110°, trouve ∠ATB.`, 70, "Quadrilatère OATB : 360 − 90 − 90 − 110.", FIG.tanT),
  num(`Un triangle isocèle a un angle à la base de 38°. Trouve l'angle au sommet.`, 104, "180 − 2(38)."),
  ms(`Quels ensembles d'angles peuvent être les angles d'un triangle ? Sélectionne toutes les bonnes réponses.`, ["45°, 45°, 90°", "100°, 50°, 40°", "60°, 60°, 60°", "20°, 70°, 80°"], [0, 2], "Seuls ces ensembles ont une somme de 180°."),
  num(`Les angles inscrits ∠APB et ∠AQB interceptent le même arc. ∠APB = 3x + 4 et ∠AQB = 5x − 12. Trouve x.`, 8, "Égaux : 3x + 4 = 5x − 12.", FIG.sameArc),
  num(`Un décagone régulier est tracé dans un cercle. Trouve l'angle à la base du triangle isocèle formé par le centre et un côté.`, 72, "Angle au centre 36°; (180 − 36) ÷ 2."),
  tf(`Si un angle inscrit mesure 90°, la corde qu'il intercepte est un diamètre.`, true, "Angle au centre de 180° → droite qui passe par O."),
  num(`Les angles d'un quadrilatère mesurent 85°, 95°, 110° et x. Trouve x.`, 70, "360 − 290."),
  num(`Le rayon OA est tracé jusqu'au point A où la tangente TA touche le cercle. ∠OTA = 34°. Trouve ∠AOT.`, 56, "∠OAT = 90°; 180 − 90 − 34.", FIG.tanOAT),
  mc(`Trois polygones réguliers se rencontrent en un point sans laisser d'espace : un carré, un hexagone et un autre. Lequel ?`, "un polygone régulier à 12 côtés (150°)", ["un octogone (135°)", "un pentagone (108°)", "un triangle (60°)"], "90 + 120 + 150 = 360."),
  num(`Les angles extérieurs d'un triangle mesurent x, x + 20° et x + 40°. Trouve x.`, 100, "3x + 60 = 360."),
  num(`Un angle inscrit intercepte un arc de 124° (l'angle au centre). Trouve l'angle inscrit.`, 62, "La moitié.", FIG.arc124),
  num(`Un motif utilise un pentagone régulier. Combien mesure chaque angle intérieur ?`, 108, "540 ÷ 5."),
  num(`Dans △ABC, ∠A = 2∠B et ∠C = 3∠B. Trouve ∠C.`, 90, "6∠B = 180 → ∠B = 30."),
];
