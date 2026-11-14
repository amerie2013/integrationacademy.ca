import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.2 Motifs créés avec les propriétés des cercles et des triangles — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const circ = (pts, segs, extra = []) => figDoc({ w: 250, items: [{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.1, -0.13], size: 12 }, ...segs.map(([a, b, col]) => ({ seg: [a === "O" ? [0, 0] : P(pts[a]), b === "O" ? [0, 0] : P(pts[b])], color: col ?? "blue" })), ...Object.entries(pts).flatMap(([n, d]) => [{ dot: P(d), r: 3.5 }, { text: n, at: P(d, 1.15), bold: true }]), ...extra] });

export const TOPIC = "5.2 Motifs créés avec les propriétés des cercles et des triangles";
export const Q = [
  num(`Les angles d'un triangle mesurent (2x + 10)°, (3x − 5)° et (x + 25)°. Trouve le plus grand angle.`, 70, "6x + 30 = 180 → x = 25 : 60°, 70°, 50°."),
  num(`L'angle intérieur d'un polygone régulier vaut 8 fois son angle extérieur. Combien de côtés a-t-il ?`, 18, "9e = 180 → e = 20° → 360 ÷ 20."),
  num(`Les angles intérieurs d'un polygone ont une somme de 2700°. Combien de côtés a-t-il ?`, 17, "(n − 2)180 = 2700 → n − 2 = 15."),
  num(`Dans la figure, AB est un diamètre et ∠BOC = 64°. Trouve ∠BAC.`, 32, "L'angle inscrit ∠BAC intercepte l'arc BC : la moitié de 64.", circ({ A: 180, B: 0, C: 64 }, [["A", "B"], ["O", "C"], ["A", "C", "red"]])),
  num(`Les points A, B, C, D sont sur un cercle, dans cet ordre, et ∠ABC = 98°. Trouve ∠ADC.`, 82, "Les angles opposés d'un quadrilatère inscrit ont une somme de 180° (chacun est la moitié des arcs qui forment les 360°).", FIG.cyclic),
  num(`A, B, C sont sur un cercle de centre O et ∠OAB = 24°. Trouve l'angle inscrit ∠ACB, C étant sur le grand arc.`, 66, "∠AOB = 180 − 2(24) = 132; la moitié est 66.", FIG.oab),
  num(`Les tangentes en A et en B se rencontrent en T, et ∠ATB = 52°. Trouve l'angle inscrit ∠APB où P est sur le grand arc AB.`, 64, "∠AOB = 128°; la moitié est 64.", FIG.tanP),
  num(`Dans △ABC, l'angle extérieur en C vaut 4 fois ∠A, et ∠B = 51°. Trouve ∠A.`, 17, "4A = A + 51 → A = 17.", FIG.extC),
  num(`Un polygone régulier a des angles intérieurs de 162°. Combien de diagonales peut-on tracer à partir d'un sommet ?`, 17, "Extérieur 18° → 20 côtés; n − 3 = 17."),
  tf(`Un ennéagone régulier (9 côtés) peut paver un plancher à lui seul.`, false, "140° ne divise pas 360°."),
  ms(`Quelles combinaisons de polygones réguliers s'ajustent exactement autour d'un point ? Sélectionne toutes les bonnes réponses.`, ["3 triangles + 2 carrés", "2 octogones + 1 carré", "1 triangle + 2 dodécagones (12 côtés)", "2 pentagones + 1 hexagone"], [0, 1, 2], "180 + 180; 270 + 90; 60 + 300. Pentagones : 216 + 120 = 336."),
  num(`La figure montre un hexagone régulier inscrit dans un cercle. Trouve ∠ACE, l'angle du triangle formé en reliant un sommet sur deux.`, 60, "ACE est équilatéral (chaque côté intercepte un arc de 120°; angle inscrit de 60°).", figDoc({ w: 230, items: [{ circle: [0, 0, 1], color: "gray" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(90 + 60 * k)), fill: "none", color: "blue" }, { poly: [0, 2, 4].map((k) => P(90 + 60 * k)), fill: "none", color: "red" }, ...["A", "B", "C", "D", "E", "F"].map((t, k) => ({ text: t, at: P(90 + 60 * k, 1.16), bold: true }))] })),
  num(`La corde AB sous-tend un angle au centre de (4x − 10)° et un angle inscrit (sur le grand arc) de (x + 15)°. Trouve l'angle au centre.`, 70, "4x − 10 = 2(x + 15) → x = 20; angle au centre 70°, angle inscrit 35°.", FIG.chordAlg),
  num(`Un polygone étoilé relie un sommet sur trois d'un octogone régulier inscrit dans un cercle. Trouve l'angle à chaque pointe de l'étoile.`, 45, "Chaque pointe intercepte un arc de 2 côtés = 90°; angle inscrit de 45°."),
  num(`Dans le triangle isocèle ABC avec AB = AC, l'angle extérieur en B (en prolongeant CB au-delà de B) mesure 115°. Trouve ∠A.`, 50, "∠ABC = 65 = ∠ACB; 180 − 130.", FIG.isoExt),
  num(`Le triangle OAB est formé de deux rayons et d'une corde. La corde AB est égale au rayon. Trouve ∠AOB.`, 60, "Les trois côtés sont égaux : équilatéral.", FIG.radiiEq),
  num(`AB est un diamètre d'un cercle, C est sur le cercle, AC = 6 et BC = 8. Trouve le rayon.`, 5, "∠ACB = 90°, donc AB = √(36 + 64) = 10; r = 5.", FIG.semi68),
  mc(`Un motif comprend 5 triangles isocèles identiques qui se rencontrent au centre d'un cercle, leurs bases formant un pentagone régulier. Combien mesure chaque angle à la base ?`, "54°", ["72°", "36°", "108°"], "Angle au centre 72°; (180 − 72) ÷ 2 = 54.", FIG.pentagon),
  num(`À partir d'un point P à l'extérieur d'un cercle de rayon 5, la longueur de la tangente PA est 12. À quelle distance P est-il du centre ?`, 13, "OA ⟂ PA : √(25 + 144) = 13.", FIG.tanP13),
  num(`Dans un polygone régulier, le rapport d'un angle intérieur à un angle extérieur est 5 : 1. Trouve le nombre de côtés.`, 12, "Extérieur = 180/6 = 30° → 360 ÷ 30."),
];
