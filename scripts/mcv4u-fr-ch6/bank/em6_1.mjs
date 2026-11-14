// 6.1 Introduction aux vecteurs — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol, brg } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const HEX3 = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
const easy = [
  mc("Quelle grandeur est un scalaire?", "une masse de 3 kg", ["une force de 10 N vers le bas", "un déplacement de 5 km vers l'ouest", "une vitesse de 40 km/h vers le sud"], "La masse n'a pas de direction."),
  tf("Le module de la vitesse est une grandeur vectorielle.", false, "Le module de la vitesse n'a qu'une taille; c'est la vitesse qui est un vecteur."),
  num("Écris N30°E sous forme de relèvement vrai (en degrés).", 30, "30° dans le sens horaire à partir du nord."),
  num("Écris S20°O sous forme de relèvement vrai (en degrés).", 200, "180° + 20°."),
  num("Écris N80°O sous forme de relèvement vrai (en degrés).", 280, "360° − 80°."),
  mc(S`Quel relèvement de quadrant correspond au relèvement vrai $240^\circ$?`, "S60°O", ["S30°O", "N60°O", "O60°S"], "240° se trouve à 60° au-delà du sud, vers l'ouest."),
  num("Un vecteur se déplace de 9 unités vers la droite et de 12 unités vers le haut. Trouve sa norme.", 15, "√(81 + 144)."),
  num(S`$\vec v$ a un relèvement de $100^\circ$. Donne le relèvement vrai de $-\vec v$.`, 280, "Ajoute 180°."),
  fill("La longueur d'un vecteur s'appelle sa ___.", ["norme", "Norme", "grandeur", "Grandeur", "magnitude"], "On la note |v|."),
  tf("Deux vecteurs de même norme sont toujours égaux.", false, "Ils doivent aussi avoir la même direction."),
  num("Le vecteur illustré va de (1, 1) à (5, 4). Trouve sa norme.", 5, "Course 4, montée 3.", vdoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 5 }, axes: false, arrows: [{ from: [1, 1], to: [5, 4], vl: "v" }], points: [{ x: 1, y: 1, label: "(1, 1)", dx: -8, dy: 18 }, { x: 5, y: 4, label: "(5, 4)", dx: -50, dy: -6 }] })),
  num("Sur une carte à l'échelle 1 cm : 20 km, une flèche de déplacement mesure 3.5 cm. À combien de kilomètres correspond-elle?", 70, "3.5 × 20."),
  mc("Quel est le relèvement vrai de la direction plein ouest?", S`$270^\circ$`, [S`$090^\circ$`, S`$180^\circ$`, S`$360^\circ$`], "Trois quarts de tour dans le sens horaire à partir du nord."),
  num("Trouve la norme du vecteur qui va de (0, 0) à (−6, −8).", 10, "√(36 + 64)."),
  tf(S`$-\vec v$ a la même norme que $\vec v$.`, true, "Seule la direction est inversée."),
  mc(S`Quel symbole désigne la norme de $\vec v$?`, S`$|\vec v|$`, [S`$-\vec v$`, S`$\vec v^2$`, S`$\overrightarrow{v}_0$`], "Des barres de valeur absolue."),
  num("Écris S45°E sous forme de relèvement vrai (en degrés).", 135, "180° − 45°."),
  mc("Le vecteur illustré a un relèvement de 300°. Quel est son relèvement de quadrant?", "N60°O", ["N30°O", "O30°N", "S60°O"], "360° − 300° = 60° à l'ouest du nord.", vdoc({ view: { xmin: -3.4, xmax: 2, ymin: -1, ymax: 3.4 }, grid: false, north: [0, 0, 3.2], arrows: [{ from: [0, 0], to: brg(3, 300), vl: "v", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: 90, b: 150, label: "?" }] })),
  num("Quel est le relèvement vrai d'un vecteur qui pointe plein sud?", 180, "Un demi-tour à partir du nord."),
  mc("Un déplacement de 2 km vers le nord et un déplacement de 2 km vers le sud sont :", "des vecteurs opposés", ["des vecteurs égaux", "des scalaires", "sans lien"], "Même taille, directions opposées."),
];
const medium = [
  num("Trouve la norme du vecteur qui va de (−2, 5) à (4, −3).", 10, "Course 6, montée −8."),
  num("Un vecteur va de 5 unités vers l'est et de 5 unités vers le sud. Trouve son relèvement vrai.", 135, "À mi-chemin entre l'est et le sud."),
  num("Un vecteur va de 8 unités vers l'est et de 15 unités vers le nord. Trouve son relèvement vrai (au dixième près).", 28.1, "tan⁻¹(8/15) à partir du nord.", null, 0.05),
  mc(S`Quel relèvement de quadrant correspond à $157^\circ$?`, "S23°E", ["S67°E", "N23°E", "E23°S"], "180° − 157° à l'est du sud."),
  num("À l'échelle 1 cm : 40 km, quelle longueur de flèche représente 250 km (en cm)?", 6.25, "250 ÷ 40.", null, 0.001),
  num("Trouve le plus petit angle entre les relèvements 050° et 310° (en degrés).", 100, "50° + (360° − 310°)."),
  mc(S`Dans le rectangle $ABCD$, quel vecteur est égal à $\overrightarrow{AB}$?`, S`$\overrightarrow{DC}$`, [S`$\overrightarrow{CD}$`, S`$\overrightarrow{BA}$`, S`$\overrightarrow{AD}$`], "Le côté opposé, dans le même sens."),
  tf(S`$\overrightarrow{AB}=\overrightarrow{BA}$.`, false, "Ils sont opposés."),
  num("Trouve |AB| pour A(1, 7) et B(−4, −5).", 13, "Course −5, montée −12."),
  num("L'hexagone régulier illustré a des côtés de 3. Trouve |AD|.", 6, "Une grande diagonale mesure le double du côté.", vdoc({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.2, ymax: 3.2 }, grid: false, axes: false, segs: [{ pts: [...HEX3, HEX3[0]], color: "gray" }], arrows: [{ from: HEX3[0], to: HEX3[3], color: "red", off: -14 }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX3[i][0], y: HEX3[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 2, dy: i < 3 ? -8 : 18 })) })),
  num("Donne le relèvement vrai de l'opposé de N35°O.", 145, "325° − 180°."),
  mc("Un relèvement vrai de 030° correspond à quel angle mesuré dans le sens antihoraire à partir de l'est?", S`$60^\circ$`, [S`$30^\circ$`, S`$120^\circ$`, S`$330^\circ$`], "90° − 30°."),
  num("Un relèvement vrai de 200° correspond à quel angle mesuré dans le sens antihoraire à partir de l'est, entre 0° et 360°?", 250, "90° − 200° = −110°, plus 360°."),
  num("La pointe d'une aiguille de 8 cm se déplace de 12 h 00 à 6 h 00. Trouve la norme de son déplacement (en cm).", 16, "Un diamètre."),
  num("Le carré illustré a des côtés de 6. Trouve la norme du vecteur diagonal (au centième près).", 8.49, "6√2.", vdoc({ view: { xmin: -0.8, xmax: 7, ymin: -0.8, ymax: 7 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [6, 0], [6, 6], [0, 6], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [6, 6], vl: "d" }], texts: [{ x: 3, y: -0.5, t: "6" }] }), 0.01),
  num("Un vecteur d'origine (2, 3) est égal au vecteur qui va de (0, 0) à (4, −1). Trouve l'abscisse de son extrémité.", 6, "Ajoute la course 4 à 2."),
  mc("Dans le trapèze ABCD, DC est parallèle à AB, pointe dans le même sens et est deux fois plus long. AB et DC sont donc :", "parallèles, mais pas égaux", ["égaux", "opposés", "perpendiculaires"], "Même direction, normes différentes."),
  num("Le relèvement de quadrant N50°E correspond à quel angle mesuré dans le sens antihoraire à partir de l'est?", 40, "90° − 50°."),
  tf("Un relèvement vrai de 360° désigne la même direction que 000°.", true, "Un tour complet ramène au nord."),
  num("Dans le parallélogramme ABCD, combien de vecteurs différents peut-on former à partir de ses quatre côtés, en comptant les deux sens?", 4, "AB = DC, BA = CD, AD = BC, DA = CB."),
];
export { easy as E, medium as M };
