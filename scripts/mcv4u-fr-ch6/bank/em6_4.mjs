// 6.4 Applications de l'addition de vecteurs — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const easy = [
  num("Trouve la résultante de forces de 6 N et de 8 N qui agissent à angle droit (N).", 10, "√(36 + 64)."),
  num("Trouve la résultante de forces de 15 N et de 20 N qui agissent dans le même sens (N).", 35, "Elles s'additionnent."),
  num("Trouve la résultante de forces de 15 N et de 20 N qui agissent dans des sens opposés (N).", 5, "Elles se soustraient."),
  mc("Quelle est la force équilibrante d'une force de 40 N dirigée vers le nord?", "40 N vers le sud", ["40 N vers le nord", "20 N vers le sud", "40 N vers l'est"], "Même grandeur, sens opposé."),
  tf("Sans vent, la route d'un avion est la même que son cap.", true, "Rien ne le fait dévier."),
  num("Un bateau se dirige droit vers l'autre rive d'une rivière à 12 km/h; le courant est de 5 km/h. Trouve sa vitesse par rapport à la rive (km/h).", 13, "√(144 + 25)."),
  mc("Un vent d'ouest souffle vers :", "l'est", ["l'ouest", "le nord", "le sud"], "Un vent est nommé d'après la direction d'où il vient."),
  num("Un nageur se dirige droit vers l'autre rive d'une rivière de 200 m de largeur à 4 m/s. Combien de temps dure la traversée (s)?", 50, "Seule la vitesse de traversée compte."),
  fill("La force qui équilibre exactement la résultante d'un ensemble de forces est la force ___.", ["équilibrante", "equilibrante", "equilibrant"], "Égale et opposée à la résultante."),
  num("Deux forces de 10 N agissent dans des sens opposés sur un objet. Trouve la résultante (N).", 0, "Elles s'annulent."),
  num("Trouve la grandeur de la résultante des forces illustrées (N).", 25, "√(49 + 576).", vdoc({ view: { xmin: -0.8, xmax: 3, ymin: -0.8, ymax: 8.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [2.1, 0], vl: "F₁", label: "7 N", off: 16 }, { from: [0, 0], to: [0, 7.2], vl: "F₂", label: "24 N", color: "blue", off: 16 }] })),
  num("Un avion dont la vitesse air est de 500 km/h vole avec un vent arrière de 50 km/h. Trouve sa vitesse sol (km/h).", 550, "Même sens : on additionne."),
  num("Un avion dont la vitesse air est de 500 km/h vole contre un vent de face de 80 km/h. Trouve sa vitesse sol (km/h).", 420, "Sens opposés : on soustrait."),
  tf("Un vent qui souffle du 090° souffle vers 270°.", true, "De l'est vers l'ouest."),
  num("Une traversée dure 40 s dans un courant de 1.5 m/s. À quelle distance en aval se trouve le point d'arrivée (m)?", 60, "1.5 × 40."),
  mc("Un objet est en équilibre lorsque la somme vectorielle des forces qui agissent sur lui est :", "nulle", ["égale à son poids", "dirigée vers le haut", "plus grande que chaque force"], "Il ne reste rien pour l'accélérer."),
  num("Un poids de 80 N est suspendu à deux cordes verticales qui le supportent également. Trouve la tension dans chacune (N).", 40, "La moitié du poids."),
  num("Des forces de 3 N et de 4 N agissent à angle droit. Trouve la grandeur de leur force équilibrante (N).", 5, "Même grandeur que la résultante."),
  num("Une nageuse se dirige droit vers l'autre rive à 2 m/s dans un courant de 2 m/s (illustré). Selon quel angle en aval de la direction perpendiculaire à la rive se déplace-t-elle (degrés)?", 45, "Composantes égales.", vdoc({ view: { xmin: -0.8, xmax: 3, ymin: -0.6, ymax: 2.8 }, grid: false, axes: false, polys: [{ pts: [[-0.8, 0], [3, 0], [3, 2.4], [-0.8, 2.4]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [0, 2], vl: "s", label: "2 m/s", off: -18 }, { from: [0, 2], to: [2, 2], color: "blue", label: "2 m/s", off: -14 }, { from: [0, 0], to: [2, 2], color: "red", off: 16 }] })),
  num("Des forces de 30 N vers l'est, de 30 N vers l'ouest et de 10 N vers le nord agissent ensemble. Trouve la résultante (N).", 10, "Les forces est et ouest s'annulent."),
];
const medium = [
  num("Des forces de 20 N et de 30 N forment un angle de 60° entre elles. Trouve la résultante (N, 2 décimales).", 43.59, "Angle du triangle 120° : √1900.", null, 0.01),
  num("Des forces de 20 N et de 30 N forment un angle de 60° entre elles. Trouve l'angle entre la résultante et la force de 20 N (degrés, 2 décimales).", 36.59, "Loi des sinus.", null, 0.01),
  num("Un avion a un cap de 090° à 300 km/h; un vent de 40 km/h souffle du nord. Trouve la vitesse sol (km/h, 2 décimales).", 302.65, "Perpendiculaires : √(90 000 + 1600).", null, 0.01),
  num("Un avion a un cap de 090° à 300 km/h; un vent de 40 km/h souffle du nord. Trouve la route (degrés, 1 décimale).", 97.6, "90° + tan⁻¹(40/300).", null, 0.05),
  num("Un bateau se dirige droit vers l'autre rive à 8 m/s; le courant est de 3 m/s. Trouve la vitesse résultante (m/s, 2 décimales).", 8.54, "√73.", null, 0.01),
  num("Une nageuse qui nage à 2 m/s veut accoster juste en face, de l'autre côté d'une rivière dont le courant est de 1 m/s. Selon quel angle vers l'amont, par rapport à la direction perpendiculaire à la rive, doit-elle se diriger (degrés)?", 30, "sin θ = 1/2."),
  num("Pour la nageuse précédente (2 m/s, courant de 1 m/s, arrivée juste en face), trouve sa vitesse de traversée (m/s, 2 décimales).", 1.73, "√(4 − 1).", null, 0.01),
  num("Deux cordes tirent chacune avec 120 N, à 25° de part et d'autre de la direction avant. Trouve la résultante (N, 2 décimales).", 217.51, "2 × 120 cos 25°.", null, 0.01),
  num("Un poids de 90 N est suspendu à deux cordes qui font chacune un angle de 30° avec l'horizontale. Trouve la tension dans chaque corde (N).", 90, "2T sin 30° = 90."),
  tf("La résultante de deux forces est toujours plus grande que chacune des deux forces.", false, "Des forces qui tirent dans des sens différents peuvent s'annuler en partie."),
  num("Trouve la résultante des deux forces de 50 N illustrées, qui forment un angle de 60° (N, 2 décimales).", 86.6, "Angle du triangle 120° : 50√3.", vdoc({ view: { xmin: -0.6, xmax: 5.6, ymin: -0.6, ymax: 4.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], label: "50 N", off: 14 }, { from: [0, 0], to: pol(5, 60), label: "50 N", color: "blue", off: -14 }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 60, label: "60°" }] }), 0.01),
  num("Une résultante pointe à 30° dans le sens antihoraire à partir de l'est. À quel angle pointe sa force équilibrante (degrés, de 0 à 360)?", 210, "Ajoute 180°."),
  num("Un pilote veut une route de 000° à une vitesse air de 250 km/h; un vent de 30 km/h souffle de l'ouest. Quel cap faut-il (degrés, 1 décimale)?", 353.1, "Viser à l'ouest du nord de sin⁻¹(30/250).", null, 0.05),
  num("Pour le pilote précédent (route 000°, 250 km/h, vent d'ouest de 30 km/h), trouve la vitesse sol (km/h, 2 décimales).", 248.19, "√(250² − 30²).", null, 0.01),
  mc("Pour traverser une rivière le plus rapidement possible, un bateau doit se diriger :", "droit vers l'autre rive", ["vers l'amont à 45°", "vers l'aval", "de façon à accoster juste en face"], "Le courant ne change pas la vitesse de traversée."),
  num("Une rivière a 90 m de largeur. Un bateau se dirige droit vers l'autre rive à 3 m/s dans un courant de 2 m/s. À quelle distance en aval accoste-t-il (m)?", 60, "Durée 30 s; 2 × 30."),
  num("Des forces de 3 N, de 4 N et de 5 N sont en équilibre. Trouve l'angle entre les forces de 3 N et de 4 N (degrés).", 90, "Le triangle fermé est rectangle à l'opposé du côté de 5 N, et les forces elles-mêmes forment un angle de 180° − 90°."),
  num("Une enseigne de 150 N est suspendue à deux câbles qui font chacun un angle de 60° avec l'horizontale (illustré). Trouve la tension dans chacun (N, 2 décimales).", 86.6, "2T sin 60° = 150.", vdoc({ view: { xmin: -3.4, xmax: 3.4, ymin: -2.6, ymax: 2.8 }, grid: false, axes: false, segs: [{ pts: [pol(3, 120), [0, 0], pol(3, 60)], color: "gray", w: 1.4 }], polys: [{ pts: [[-0.9, -0.2], [0.9, -0.2], [0.9, -1.1], [-0.9, -1.1]], fill: "#fde68a", stroke: "amber" }], arrows: [{ from: [0, -1.1], to: [0, -2.5], color: "red", label: "150 N", off: -24 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 60, label: "60°" }, { at: [0, 0], r: 1, a: 120, b: 180, label: "60°" }] }), 0.01),
  num("Trouve la résultante de 8 N à 0°, de 6 N à 180° et de 5 N à 90° (N, 2 décimales).", 5.39, "(2, 5).", null, 0.01),
  num("Un avion dont la vitesse air est de 400 km/h a un cap de 000° et suit une route de 000° à une vitesse sol de 360 km/h. Quelle est la vitesse du vent (km/h)?", 40, "Un vent de face pur : 400 − 360."),
];
export { easy as E, medium as M };
