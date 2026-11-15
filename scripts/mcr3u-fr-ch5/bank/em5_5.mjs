import { FIG } from "./figs.mjs";
// 5.5 La loi des cosinus — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, sasD, cos, sin, acos, asin, lawC, angC, rd } from "./fig.mjs";

const S = String.raw;
/** triangle à partir de trois côtés : a opposé à A… placé avec c sur l'axe des x */
const sss = (a, b, c, labels = ["A", "B", "C"]) => { const A = angC(a, b, c); return triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], labels, { marks: [[c / 2, 0, String(c)], [(c + b * cos(A)) / 2 + 0.4, (b * sin(A)) / 2, String(a)], [(b * cos(A)) / 2 - 0.6, (b * sin(A)) / 2, String(b)]] }); };
const a13 = lawC(8, 11, 57), B13 = asin((8 * sin(57)) / a13);
const C14 = angC(70, 40, 55);
const nav = lawC(12, 8, 145);

export const E = [
  num(S`$b=3$, $c=4$, $\angle A=90^\circ$. Trouve $a$.`, 5, "cos 90° = 0 : a² = 9 + 16."),
  num(S`$b=5$, $c=8$, $\angle A=60^\circ$. Trouve $a$.`, 7, "25 + 64 − 80(½) = 49."),
  num(S`$b=6$, $c=6$, $\angle A=60^\circ$. Trouve $a$.`, 6, "36 + 36 − 36 = 36 (triangle équilatéral)."),
  num(S`$b=7$, $c=9$, $\angle A=40^\circ$. Trouve $a$, au centième près.`, rd(lawC(7, 9, 40)), "a² = 49 + 81 − 126 cos 40°.", null, 0.01),
  num("Un triangle a des côtés de 7, 8 et 13. Trouve son plus grand angle.", 120, "cos θ = (49 + 64 − 169)/112 = −½."),
  num("Un triangle a des côtés de 5, 7 et 8. Trouve l'angle opposé au côté 7.", 60, "cos θ = (25 + 64 − 49)/80 = ½."),
  mc("Quelle formule permet de trouver ∠A à partir des trois côtés?", S`$\cos A=\frac{b^2+c^2-a^2}{2bc}$`, [S`$\cos A=\frac{a^2+b^2-c^2}{2ab}$`, S`$\cos A=\frac{b^2+c^2+a^2}{2bc}$`, S`$\sin A=\frac{a}{b}$`], "On soustrait le côté opposé à A."),
  mc("Tu connais deux côtés et l'angle compris entre eux. Quelle loi permet de trouver le troisième côté?", "la loi des cosinus", ["la loi des sinus", "le théorème de Pythagore seulement", "aucune des deux"], "CAC → loi des cosinus."),
  tf("Quand ∠A = 90°, la loi des cosinus devient le théorème de Pythagore.", true, "Le terme 2bc cos 90° vaut 0."),
  tf("La loi des cosinus peut donner deux triangles différents pour les mêmes données CAC.", false, "Le cas CAC détermine le triangle."),
  num(S`Pour $a=6$, $b=5$, $c=4$, évalue $\frac{b^2+c^2-a^2}{2bc}$.`, 0.125, "(25 + 16 − 36)/40."),
  num(S`$\cos A=-0.2$. Trouve $A$, au dixième près.`, rd(acos(-0.2), 1), "cos⁻¹(−0.2) est obtus.", null, 0.05),
  mc(S`Si $b^2+c^2<a^2$, alors ∠A est`, "obtus", ["aigu", "droit", "impossible à déterminer"], "cos A < 0."),
  num(S`$b=10$, $c=12$, $\angle A=25^\circ$. Trouve $a$, au centième près.`, rd(lawC(10, 12, 25)), "a² = 100 + 144 − 240 cos 25°.", null, 0.01),
  num("Deux côtés d'un triangle mesurent 8 et 5, et l'angle compris entre eux mesure 120°. Trouve le troisième côté, au centième près.", rd(Math.sqrt(129)), "64 + 25 + 40 = 129.", null, 0.01),
  num("Chaque côté d'un triangle mesure 6. Utilise la loi des cosinus pour trouver un angle.", 60, "cos θ = (36 + 36 − 36)/72 = ½."),
  num("Un triangle a des côtés de 9, 10 et 11. Trouve l'angle opposé au côté 9, au dixième près.", rd(angC(9, 10, 11), 1), "cos θ = (100 + 121 − 81)/220.", null, 0.05),
  mc("Un triangle a des côtés de 4, 5 et 6. Quel angle est le plus grand?", "l'angle opposé au côté 6", ["l'angle opposé au côté 4", "l'angle opposé au côté 5", "ils sont égaux"], "Le plus grand angle fait face au plus long côté."),
  num("Trouve le côté a (opposé à l'angle de 70°), au centième près.", rd(lawC(6, 9, 70)), "a² = 36 + 81 − 108 cos 70°.", sasD(6, 9, 70, ["A 70°", "B", "C"], { marks: [[4.5, 0, "9"], [1, 3, "6"], [5, 3.5, "a"]] }), 0.01),
  num("Trouve l'angle opposé au côté 9 (au dixième près).", rd(angC(9, 5, 6), 1), "cos θ = (25 + 36 − 81)/60.", sss(9, 5, 6), 0.05),
];

export const M = [
  num(S`$b=14$, $c=9$, $\angle A=133^\circ$. Trouve $a$, au centième près.`, rd(lawC(14, 9, 133)), "cos 133° < 0; le dernier terme s'additionne donc.", null, 0.01),
  num("Un triangle a des côtés de 12, 15 et 20. Trouve son plus grand angle (au dixième près).", rd(angC(20, 12, 15), 1), "Opposé au côté 20.", null, 0.05),
  num("Un triangle a des côtés de 12, 15 et 20. Trouve son plus petit angle (au dixième près).", rd(angC(12, 15, 20), 1), "Opposé au côté 12.", null, 0.05),
  num("Deux randonneurs partent du même point sur des sentiers qui forment un angle de 75°. L'un marche 3 km et l'autre 5 km. Quelle distance les sépare (au centième près)?", rd(lawC(3, 5, 75)), "Cas CAC avec 75°.", null, 0.01),
  num("Un trou de golf est à 380 m du tertre de départ. Un coup de départ parcourt 220 m, mais à 12° de la ligne vers le trou. À quelle distance du trou se trouve la balle (au dixième près)?", rd(lawC(380, 220, 12), 1), "Cas CAC au tertre de départ.", null, 0.05),
  num("Un parallélogramme a des côtés de 7 et 10 et un angle de 65°. Trouve sa plus longue diagonale (au centième près).", rd(lawC(7, 10, 115)), "La plus longue diagonale fait face à l'angle de 115°.", FIG.para65, 0.01),
  num("Un parallélogramme a des côtés de 7 et 10 et un angle de 65°. Trouve sa plus courte diagonale (au centième près).", rd(lawC(7, 10, 65)), "La plus courte diagonale fait face à 65°.", FIG.para65, 0.01),
  num("Un avion vole sur 300 km, tourne de 40° vers la gauche et vole sur 200 km. À quelle distance de son point de départ se trouve-t-il (au dixième près)?", rd(lawC(300, 200, 140), 1), "Angle intérieur 180° − 40° = 140°.", FIG.plane300, 0.05),
  mc("Classe le triangle de côtés 6, 7 et 10.", "obtusangle", ["acutangle", "rectangle", "ce n'est pas un triangle"], "36 + 49 = 85 < 100."),
  mc("Classe le triangle de côtés 6, 8 et 9.", "acutangle", ["obtusangle", "rectangle", "ce n'est pas un triangle"], "36 + 64 = 100 > 81."),
  tf("Dans le triangle de côtés 7, 24 et 25, le plus grand angle mesure 90°.", true, "49 + 576 = 625."),
  num(S`Pour $a=7$, $b=8$, $c=10$, trouve $\cos C$ (4 décimales).`, rd(13 / 112, 4), "(49 + 64 − 100)/112.", null, 0.0001),
  num(S`$b=8$, $c=11$, $\angle A=57^\circ$. Trouve $\angle B$, au dixième près.`, rd(B13, 1), "D'abord a avec la loi des cosinus, puis la loi des sinus pour B (opposé au plus petit côté).", null, 0.05),
  num("Un terrain triangulaire a des côtés de 40 m, 55 m et 70 m. Trouve son aire, au mètre carré près.", Math.round(0.5 * 40 * 55 * sin(C14)), "L'angle opposé à 70 avec la loi des cosinus, puis ½ab sin C.", null, 0.5),
  num("Les poteaux d'un but sont distants de 7.3 m. Une joueuse est à 18 m d'un poteau et à 21 m de l'autre. Trouve son angle de tir (au dixième près).", rd(angC(7.3, 18, 21), 1), "L'angle fait face au côté de 7.3 m.", null, 0.05),
  num("Les aiguilles d'une horloge mesurent 6 cm et 9 cm. À 4 h, quelle distance sépare leurs extrémités (au centième près)?", rd(Math.sqrt(171)), "Les aiguilles forment un angle de 120° : 36 + 81 + 54.", null, 0.01),
  ms("Quelles situations exigent d'abord la loi des cosinus? Choisis toutes les bonnes réponses.", ["CCC", "CAC", "ACA", "CCA"], [0, 1], "ACA et CCA contiennent une paire côté–angle opposé."),
  num(S`$b=c=10$ et $a=10\sqrt3$. Trouve $\angle A$.`, 120, "cos A = (100 + 100 − 300)/200 = −½."),
  num("Un bateau parcourt 12 km, tourne de 35° et parcourt 8 km. À quelle distance de son point de départ se trouve-t-il (au centième près)?", rd(nav), "Angle intérieur 145°.", triD([[0, 0], [12, 0], [12 + 8 * cos(35), 8 * sin(35)]], ["départ", "virage", "bateau"], { marks: [[6, 0, "12 km"]] }), 0.01),
  num("Trouve l'angle entre les côtés 11 et 13 (au dixième près).", rd(angC(17, 11, 13), 1), "Il est opposé au côté 17.", sss(17, 11, 13), 0.05),
];
