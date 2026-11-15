import { FIG } from "./figs.mjs";
// 5.1 Rapports trigonométriques et angles remarquables — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, rightD, sin, cos, tan, acos, atan, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num("Un triangle rectangle a des côtés de 3, 4 et 5. L'angle A est opposé au côté 3. Trouve sin A.", 0.6, "opp/hyp = 3/5.", FIG.tri345),
  num("Un triangle rectangle a des côtés de 3, 4 et 5. L'angle A est opposé au côté 3. Trouve cos A.", 0.8, "adj/hyp = 4/5.", FIG.tri345),
  mc(S`Que vaut $\tan45^\circ$?`, S`$1$`, [S`$\sqrt2$`, S`$\frac1{\sqrt2}$`, S`$0$`], "Les cathètes sont égales dans le triangle 45°–45°–90°."),
  mc(S`Que vaut $\sin30^\circ$?`, S`$\frac12$`, [S`$\frac{\sqrt3}2$`, S`$\frac1{\sqrt2}$`, S`$\sqrt3$`], "Côté opposé 1, hypoténuse 2."),
  mc(S`Que vaut $\cos45^\circ$?`, S`$\frac1{\sqrt2}$`, [S`$\frac12$`, S`$1$`, S`$\frac{\sqrt3}2$`], "Côté adjacent 1, hypoténuse √2."),
  mc(S`Que vaut $\tan30^\circ$?`, S`$\frac1{\sqrt3}$`, [S`$\sqrt3$`, S`$\frac12$`, S`$\frac{\sqrt3}2$`], "Côté opposé 1, côté adjacent √3."),
  num(S`Évalue $\sin90^\circ$.`, 1, "Sur le cercle unité, 90° correspond au point (0, 1)."),
  num(S`Évalue $\cos90^\circ$.`, 0, "L'abscisse de (0, 1)."),
  tf(S`$\sin30^\circ=\cos60^\circ$.`, true, "Les deux valent ½ : le côté opposé à 30° est adjacent à 60°."),
  tf(S`$\tan60^\circ=2\tan30^\circ$.`, false, "√3 n'est pas égal à 2/√3."),
  num("Un triangle rectangle a une hypoténuse de 10 et un angle de 30°. Quelle est la longueur du côté opposé à 30°?", 5, "10 sin 30° = 5."),
  num(S`θ est aigu et $\tan\theta=1$. Trouve θ en degrés.`, 45, "tan 45° = 1."),
  num(S`θ est aigu et $\sin\theta=0.5$. Trouve θ en degrés.`, 30, "sin 30° = ½."),
  mc("Quel rapport est égal à côté adjacent ÷ hypoténuse?", "le cosinus", ["le sinus", "la tangente", "la cotangente"], "CAH."),
  num("Un triangle 45°–45°–90° a des cathètes de 6. Trouve l'hypoténuse, au centième près.", rd(6 * Math.SQRT2), "6√2.", null, 0.01),
  num("L'ombre d'un poteau est exactement aussi longue que le poteau. Quel est l'angle d'élévation du soleil (en degrés)?", 45, "tan θ = 1."),
  num(S`θ est aigu et $\cos\theta=0.75$. Trouve θ, au dixième près.`, rd(acos(0.75), 1), "cos⁻¹ 0.75.", null, 0.05),
  num("Dans un triangle rectangle, le côté adjacent à un angle de 35° mesure 12. Trouve le côté opposé, au centième près.", rd(12 * tan(35)), "12 tan 35°.", null, 0.01),
  num("Trouve tan A sur la figure.", 0.75, "opp/adj = 6/8.", rightD(8, 6, ["A", "", ""], [[4, 0, "8"], [8, 3, "6"]])),
  num("Trouve x, au centième près. L'hypoténuse mesure 9 et l'angle en A mesure 40°; x est opposé à A.", rd(9 * sin(40)), "9 sin 40°.", triD([[0, 0], [9 * cos(40), 0], [9 * cos(40), 9 * sin(40)]], ["A 40°", "", ""], { marks: [[3, 3.6, "9"], [9 * cos(40), 9 * sin(40) / 2, "x"]] }), 0.01),
];

const h19 = 40 * tan(50);
export const M = [
  num(S`Évalue de façon exacte : $\sin^2 45^\circ+\cos^2 45^\circ$.`, 1, "½ + ½."),
  mc(S`Évalue $2\sin60^\circ\cos60^\circ$.`, S`$\frac{\sqrt3}2$`, [S`$\sqrt3$`, S`$\frac12$`, S`$1$`], "2 · (√3/2) · ½."),
  num(S`Évalue $\tan^2 60^\circ-1$.`, 2, "3 − 1."),
  mc(S`Évalue $\dfrac{\sin45^\circ}{\cos30^\circ}$.`, S`$\frac{\sqrt2}{\sqrt3}$`, [S`$\frac{\sqrt3}{\sqrt2}$`, S`$1$`, S`$\frac12$`], "(1/√2) ÷ (√3/2) = 2/(√2·√3) = √2/√3."),
  num("Une échelle de 7 m forme un angle de 65° avec le sol. À quelle hauteur atteint-elle le mur (au centième près)?", rd(7 * sin(65)), "7 sin 65°.", FIG.ladder7, 0.01),
  num("Du haut d'une tour de 120 m, une voiture est à 250 m à l'horizontale. Trouve l'angle de dépression (au dixième près).", rd(atan(120 / 250), 1), "tan θ = 120/250.", FIG.tower120, 0.05),
  num("Un hauban va du sommet d'un poteau de 15 m jusqu'au sol et forme un angle de 55° avec le sol. Quelle est la longueur du hauban (au centième près)?", rd(15 / sin(55)), "15 / sin 55°.", FIG.guy, 0.01),
  num("Un triangle rectangle a des cathètes de 9 et 14. Trouve son plus petit angle aigu (au dixième près).", rd(atan(9 / 14), 1), "Opposé à la plus courte cathète : tan⁻¹(9/14).", null, 0.05),
  mc("Quelle est la hauteur exacte d'un triangle équilatéral de côté 10?", S`$5\sqrt3$`, [S`$10\sqrt3$`, S`$5\sqrt2$`, S`$\frac{10}{\sqrt3}$`], "10 sin 60°."),
  num("Un triangle 45°–45°–90° a une hypoténuse de 8. Trouve son aire.", 16, "Cathètes 4√2; ½(4√2)²."),
  tf(S`Pour tout angle aigu θ, $\sin\theta=\cos(90^\circ-\theta)$.`, true, "Les deux angles aigus d'un triangle rectangle partagent les mêmes côtés."),
  ms("Lesquelles de ces valeurs sont égales à ½? Choisis toutes les bonnes réponses.", [S`$\sin30^\circ$`, S`$\cos60^\circ$`, S`$\tan30^\circ$`, S`$\cos30^\circ\tan30^\circ$`, S`$\sin45^\circ$`], [0, 1, 3], "cos 30° · tan 30° = (√3/2)(1/√3) = ½."),
  num("Une rampe s'élève de 0.9 m sur une distance horizontale de 10 m. Trouve l'angle qu'elle forme avec le sol (au dixième près).", rd(atan(0.09), 1), "tan⁻¹ 0.09.", FIG.ramp, 0.05),
  num("Un avion monte à 12° par rapport au sol. Après 2 km le long de sa trajectoire, quelle est son altitude (au mètre près)?", Math.round(2000 * sin(12)), "2000 sin 12°.", FIG.plane12, 0.5),
  num("La corde d'un cerf-volant mesure 120 m et forme un angle de 38° avec le sol. Trouve la hauteur du cerf-volant (au dixième près).", rd(120 * sin(38), 1), "120 sin 38°.", FIG.kite, 0.05),
  num("Un triangle isocèle a deux côtés égaux de 12 et un angle au sommet de 40°. Trouve la base (au centième près).", rd(2 * 12 * sin(20)), "La moitié de la base mesure 12 sin 20°.", null, 0.01),
  num("Le plus petit côté d'un triangle 30°–60°–90° mesure 4. Trouve son périmètre, au centième près.", rd(12 + 4 * Math.sqrt(3)), "4 + 4√3 + 8.", null, 0.01),
  mc("Un triangle 30°–60°–90° a une hypoténuse de 2k. Quelle est la longueur du côté opposé à 60°?", S`$k\sqrt3$`, [S`$k$`, S`$2k\sqrt3$`, S`$\frac{k}{\sqrt3}$`], "Multiplie 1 : √3 : 2 par k."),
  num("D'un point situé à 40 m d'un édifice, l'angle d'élévation du toit est de 50°. Trouve la hauteur de l'édifice (au centième près).", rd(h19), "40 tan 50°.", rightD(40, h19, ["50°", "", "toit"], [[20, 0, "40 m"]]), 0.01),
  num("Trouve θ, au dixième près.", rd(atan(7 / 11), 1), "tan θ = 7/11.", rightD(11, 7, ["θ", "", ""], [[5.5, 0, "11"], [11, 3.5, "7"]]), 0.05),
];
