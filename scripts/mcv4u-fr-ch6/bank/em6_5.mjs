// 6.5 Décomposition de vecteurs en composantes rectangulaires — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const easy = [
  num("Trouve la composante horizontale d'une force de 20 N à 60° au-dessus de l'horizontale (N).", 10, "20 cos 60°."),
  num("Trouve la composante verticale d'une force de 20 N à 30° au-dessus de l'horizontale (N).", 10, "20 sin 30°."),
  num("Un vecteur a pour composantes 8 et 6. Trouve sa norme.", 10, "√(64 + 36)."),
  num("Un vecteur a pour composantes −5 et 12. Trouve sa norme.", 13, "√(25 + 144)."),
  mc(S`Pour un vecteur formant un angle $\theta$ au-dessus de l'horizontale, la composante horizontale est :`, S`$|\vec v|\cos\theta$`, [S`$|\vec v|\sin\theta$`, S`$|\vec v|\tan\theta$`, S`$\frac{|\vec v|}{\cos\theta}$`], "Côté adjacent."),
  tf("Un vecteur est égal à la somme de ses composantes rectangulaires.", true, "C'est le sens même de la décomposition."),
  num("Un vecteur a pour composantes 4 et 4. Trouve l'angle qu'il forme au-dessus de l'horizontale (degrés).", 45, "tan θ = 1."),
  num("Une boîte de 50 N repose sur une surface horizontale (0°). Trouve la composante de son poids parallèle à la surface (N).", 0, "50 sin 0°."),
  num("Une boîte de 50 N repose sur une surface horizontale (0°). Trouve la composante de son poids perpendiculaire à la surface (N).", 50, "50 cos 0°."),
  fill("Séparer un vecteur en deux parties perpendiculaires s'appelle ___ le vecteur.", ["décomposer", "decomposer", "resolving"], "Les parties sont ses composantes."),
  num("Trouve la composante horizontale du vecteur illustré (2 décimales).", 8.66, "10 cos 30°.", vdoc({ view: { xmin: -0.6, xmax: 9.6, ymin: -0.8, ymax: 5.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(10, 30), vl: "v", label: "10", off: -16 }, { from: [0, 0], to: [8.66, 0], color: "blue", label: "?", off: 14 }, { from: [8.66, 0], to: pol(10, 30), color: "red", off: -12 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 30, label: "30°" }] }), 0.01),
  num("Trouve la composante verticale d'une force de 100 N dirigée verticalement vers le haut (N).", 100, "100 sin 90°."),
  mc(S`Un vecteur à $120^\circ$ de la partie positive de l'axe des x a une composante horizontale :`, "négative", ["positive", "nulle", "égale à sa norme"], "Il pointe vers la gauche."),
  num("Un avion vole à 50 km/h selon un cap de 090°. Trouve sa composante est (km/h).", 50, "Plein est."),
  num("Un avion vole à 50 km/h selon un cap de 090°. Trouve sa composante nord (km/h).", 0, "Aucun mouvement vers le nord."),
  tf("Sur une rampe plus inclinée, une plus grande partie du poids d'un objet agit le long de la rampe.", true, "W sin α augmente avec α."),
  num("Trouve la composante horizontale d'une force de 30 N dirigée plein est (N).", 30, "Entièrement horizontale."),
  num("Un vecteur a pour composantes 0.6 et 0.8. Trouve sa norme.", 1, "√(0.36 + 0.64).", null, 0.001),
  num("Trouve la norme du vecteur illustré, dont les composantes sont −9 et 12.", 15, "√(81 + 144).", vdoc({ view: { xmin: -10, xmax: 1.5, ymin: -1, ymax: 13 }, step: 1, arrows: [{ from: [0, 0], to: [-9, 12], vl: "v", off: 16 }], segs: [{ pts: [[0, 0], [-9, 0], [-9, 12]], dash: true }], texts: [{ x: -4.5, y: -0.6, t: "−9" }, { x: -9.6, y: 6, t: "12" }] })),
  mc("Dans quel quadrant se trouve un vecteur de composantes (−2, −7)?", "III", ["I", "II", "IV"], "Les deux composantes sont négatives."),
];
const medium = [
  num("Trouve la composante horizontale d'une force de 80 N à 25° au-dessus de l'horizontale (N, 2 décimales).", 72.5, "80 cos 25°.", null, 0.01),
  num("Trouve la composante verticale d'une force de 80 N à 25° au-dessus de l'horizontale (N, 2 décimales).", 33.81, "80 sin 25°.", null, 0.01),
  num("Un bateau se déplace à 60 km/h selon un cap de 150°. Trouve sa composante est (km/h).", 30, "60 sin 150°."),
  num("Un bateau se déplace à 60 km/h selon un cap de 150°. Trouve sa composante nord (km/h, 2 décimales; le sud est négatif).", -51.96, "60 cos 150°.", null, 0.01),
  num("Un vecteur a pour composantes (−6, 6). Trouve l'angle qu'il forme dans le sens antihoraire à partir de la partie positive de l'axe des x (degrés).", 135, "Quadrant II, angle de référence 45°."),
  num("Un vecteur a pour composantes (20, −21). Trouve sa norme.", 29, "√(400 + 441)."),
  num("Un vecteur a pour composantes (20, −21). Trouve l'angle qu'il forme dans le sens antihoraire à partir de la partie positive de l'axe des x (degrés, 1 décimale).", 313.6, "Quadrant IV : 360° − tan⁻¹(21/20).", null, 0.05),
  num("Une caisse de 50 N est sur une rampe inclinée à 40°. Trouve la composante de son poids parallèle à la rampe (N, 2 décimales).", 32.14, "50 sin 40°.", null, 0.01),
  num("Une caisse de 50 N est sur une rampe inclinée à 40°. Trouve la composante de son poids perpendiculaire à la rampe (N, 2 décimales).", 38.3, "50 cos 40°.", null, 0.01),
  tf("Une composante rectangulaire d'un vecteur peut être plus grande que le vecteur lui-même.", false, "C'est une cathète d'un triangle rectangle dont l'hypoténuse est le vecteur."),
  num("On tire une valise avec une force de 60 N le long d'une poignée à 50° au-dessus de l'horizontale (illustré). Trouve la composante horizontale (N, 2 décimales).", 38.57, "60 cos 50°.", vdoc({ view: { xmin: -0.8, xmax: 5.4, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, polys: [{ pts: [[-0.6, -0.6], [0.6, -0.6], [0.6, 0.4], [-0.6, 0.4]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [0.3, 0.3], to: pol(6, 50, [0.3, 0.3]), vl: "F", label: "60 N", off: -16 }], arcs: [{ at: [0.3, 0.3], r: 1.2, a: 0, b: 50, label: "50°" }], segs: [{ pts: [[0.3, 0.3], [4.6, 0.3]], dash: true }] }), 0.01),
  num("Additionne 10 N à 0°, 10 N à 45° et 10 N à 90° à l'aide des composantes. Trouve la grandeur de la résultante (N, 2 décimales).", 24.14, "x = y = 10 + 7.07.", null, 0.01),
  mc(S`À quel angle de la partie positive de l'axe des x se trouve le vecteur de composantes $(-1,-\sqrt3)$?`, S`$240^\circ$`, [S`$60^\circ$`, S`$210^\circ$`, S`$300^\circ$`], "Quadrant III, angle de référence 60°."),
  num("Une corde à 20° de l'horizontale doit avoir une composante horizontale de 47 N. Trouve la tension (N, 2 décimales).", 50.02, "47 / cos 20°.", null, 0.01),
  num("Un poids de 60 N a une composante de 30 N le long d'une rampe. Trouve l'angle de la rampe (degrés).", 30, "sin α = 0.5."),
  num("Un avion vole à 90 km/h selon un cap de 315°. Trouve sa composante est (km/h, 2 décimales; l'ouest est négatif).", -63.64, "90 sin 315°.", null, 0.01),
  num("Utilise les composantes pour trouver la grandeur de la résultante de 20 N à 0° et de 20 N à 120° (N).", 20, "(10, 17.32)."),
  num("Trouve la norme du vecteur illustré, dont les composantes sont 6 et −2.5.", 6.5, "√(36 + 6.25).", vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -3.2, ymax: 0.8 }, step: 1, arrows: [{ from: [0, 0], to: [6, -2.5], vl: "v", off: -16 }], segs: [{ pts: [[0, 0], [6, 0], [6, -2.5]], dash: true }], texts: [{ x: 3, y: 0.35, t: "6" }, { x: 6.5, y: -1.25, t: "2.5" }] }), 0.001),
  mc("La composante d'un vecteur dans la direction qui lui est perpendiculaire est :", "0", ["sa norme", "la moitié de sa norme", "non définie"], "cos 90° = 0."),
  num("Une force de 50 N a une composante verticale de 25 N et pointe au-dessus de l'horizontale. Trouve l'angle qu'elle forme avec l'horizontale (degrés).", 30, "sin θ = 0.5."),
];
export { easy as E, medium as M };
