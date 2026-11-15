import { FIG } from "./figs.mjs";
// 5.5 La loi des cosinus — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { triD, cos, sin, lawC, angC, rd } from "./fig.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const C13 = angC(15, 13, 14);
const pA = angC(16, 9, 13); // angle du parallélogramme opposé à la diagonale 16
const AC14 = Math.sqrt(91), D15 = angC(AC14, 4, 7);
const ship = lawC(18, 25, 120);
const tri18 = { A: angC(8, 11, 15), B: angC(11, 8, 15) };

export const TOPIC = "5.5 La loi des cosinus";
export const Q = [
  num("Un triangle a des côtés de 13, 14 et 15. Utilise la loi des cosinus pour trouver un angle, puis trouve l'aire.", 84, "cos C = (169 + 196 − 225)/364 pour l'angle entre 13 et 14; aire = ½(13)(14) sin C = 84.", null, 0.05),
  num("Un parallélogramme a des côtés de 9 et 13 et une diagonale de 16. Trouve l'autre diagonale (au centième près).", rd(Math.sqrt(244)), "Trouve un angle à partir de la diagonale 16, puis utilise son supplément; ou d₁² + d₂² = 2(9² + 13²).",
    triD([[0, 0], [13, 0], [13 + 9 * cos(180 - pA), 9 * sin(pA)], [9 * cos(180 - pA), 9 * sin(pA)]], ["", "", "", ""], { extra: [{ pts: [[0, 0], [13 + 9 * cos(180 - pA), 9 * sin(pA)]], color: "red" }, { pts: [[13, 0], [9 * cos(180 - pA), 9 * sin(pA)]], color: "amber" }], marks: [[6.5, 0, "13"], [9 * cos(180 - pA) / 2 - 0.7, 9 * sin(pA) / 2, "9"], [8, 4.4, "16"]] }), 0.01),
  num("Un losange a des côtés de 10 et un angle de 50°. Trouve sa plus longue diagonale (au centième près).", rd(lawC(10, 10, 130)), "La plus longue diagonale fait face à 130°.", FIG.rhomb50, 0.01),
  num("Un triangle a des côtés de x, x + 1 et x + 2, et son plus grand angle mesure 120°. Trouve x.", 1.5, "(x + 2)² = x² + (x + 1)² + x(x + 1) → 2x² − x − 3 = 0."),
  num("Deux navires quittent le port. L'un navigue à 16 km/h selon un cap de 20° à l'est du nord; l'autre à 22 km/h selon un cap de 50° à l'est du sud. Quelle distance les sépare après 1.5 h (au dixième près)?", rd(lawC(24, 33, 110), 1), "Côtés 24 et 33; angle entre les caps 180° − 20° − 50° = 110°.", FIG.ships, 0.05),
  num(S`$a=8$, $b=5$, $\angle C=60^\circ$. Trouve $c$.`, 7, "64 + 25 − 40 = 49."),
  num("Deux coureurs se tiennent sur une piste circulaire de 50 m de rayon. L'angle entre leurs rayons est de 72°. Quelle distance les sépare en ligne droite (au centième près)?", rd(lawC(50, 50, 72)), "Cas CAC avec deux rayons.",
    planeDoc({ bare: true, view: { xmin: -60, xmax: 60, ymin: -60, ymax: 60 }, step: { x: 20, y: 20 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 2500 - x * x)), a: -50, b: 50, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 2500 - x * x)), a: -50, b: 50, color: "gray" }], segs: [{ pts: [[50, 0], [0, 0], [50 * cos(72), 50 * sin(72)]], color: "blue" }, { pts: [[50, 0], [50 * cos(72), 50 * sin(72)]], color: "red" }], points: [{ x: 0, y: 0, label: "72°" }, { x: 50, y: 0, label: "coureur 1" }, { x: 50 * cos(72), y: 50 * sin(72), label: "coureur 2" }] }), 0.01),
  num("Un triangle a des côtés de 5 et 7, et l'angle opposé au côté 7 mesure 60°. Trouve le troisième côté.", 8, "49 = 25 + c² − 5c → c² − 5c − 24 = 0."),
  num(S`Un triangle a $a=12$, $b=9$, $c=15$. Trouve $\angle A$, au dixième près.`, rd(angC(12, 9, 15), 1), "cos A = (81 + 225 − 144)/270 = 0.6.", null, 0.05),
  tf(S`Si $a^2=b^2+c^2+bc$, alors $\angle A=120^\circ$.`, true, "Compare avec a² = b² + c² − 2bc cos A : cos A = −½."),
  mc("Un triangle a deux côtés de longueur 5 et un troisième côté x. Pour quelles valeurs de x l'angle entre les deux côtés égaux est-il obtus?", S`$5\sqrt2<x<10$`, [S`$0<x<5\sqrt2$`, S`$x>5$`, S`$x=5\sqrt2$`], "Obtus quand x² > 50; un triangle exige x < 10."),
  num("Un losange de baseball est un carré de 27.4 m de côté. Le monticule du lanceur est à 18.4 m du marbre, sur la diagonale. À quelle distance du premier but se trouve le monticule (au centième près)?", rd(lawC(27.4, 18.4, 45)), "La diagonale forme un angle de 45° avec la ligne du premier but.", null, 0.01),
  num("Un triangle a des côtés de 6, 10 et 14. Trouve son plus grand angle.", 120, "cos θ = (36 + 100 − 196)/120 = −½."),
  num("Le quadrilatère ABCD a AB = 5, BC = 6 et ∠B = 120°. Trouve la diagonale AC (au centième près).", rd(AC14), "25 + 36 + 30 = 91.", FIG.quad, 0.01),
  num("Le quadrilatère ABCD a AB = 5, BC = 6, CD = 4, DA = 7 et ∠B = 120°. Trouve ∠D (au dixième près).", rd(D15, 1), "AC² = 25 + 36 + 30 = 91; cos D = (16 + 49 − 91)/56.", FIG.quadAll, 0.05),
  num("Un tunnel reliera A et B. À partir d'un point C, CA = 420 m, CB = 380 m et ∠ACB = 68°. Quelle sera la longueur du tunnel (au mètre près)?", Math.round(lawC(420, 380, 68)), "Cas CAC en C.", triD([[0, 0], [420, 0], [380 * cos(68), 380 * sin(68)]], ["C 68°", "A", "B"], { marks: [[210, 0, "420 m"], [380 * cos(68) / 2 - 30, 380 * sin(68) / 2, "380 m"]] }), 0.5),
  num("Un navire parcourt 18 km vers l'est, puis tourne de 60° vers la gauche et parcourt 25 km. À quelle distance de son point de départ se trouve-t-il (au centième près)?", rd(ship), "Angle intérieur 120° : 324 + 625 + 450.", triD([[0, 0], [18, 0], [18 + 25 * cos(60), 25 * sin(60)]], ["départ", "virage", "navire"], { marks: [[9, 0, "18 km"]] }), 0.01),
  num("Trouve l'angle de grandeur moyenne du triangle illustré (au dixième près).", rd(tri18.B, 1), "Il fait face au côté moyen, 11.", triD([[0, 0], [15, 0], [8 * cos(tri18.A), 8 * sin(tri18.A)]], ["A", "B", "C"], { marks: [[7.5, 0, "15"], [4 * cos(tri18.A) - 0.6, 4 * sin(tri18.A), "8"], [(15 + 8 * cos(tri18.A)) / 2 + 0.5, 4 * sin(tri18.A), "11"]] }), 0.05),
  num("Les côtés d'un triangle mesurent 13, 14 et 15. Trouve l'angle entre les côtés 13 et 14 (au dixième près).", rd(C13, 1), "Il fait face au côté 15.", null, 0.05),
  num("Un triangle a des côtés de 2, 3 et 4. Trouve le cosinus de son plus grand angle.", -0.25, "(4 + 9 − 16)/12."),
];
