import { FIG } from "./figs.mjs";
// 5.1 Rapports trigonométriques et angles remarquables — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, rightD, sin, cos, tan, asin, atan, rd } from "./fig.mjs";

const S = String.raw;
const cot = (d) => 1 / tan(d);
const h1 = 60 / (cot(20) - cot(35));
const h4 = 18 + (18 / tan(41)) * tan(32);
const h13 = 10 * tan(50);
const h17a = 50 * tan(25), h17b = 50 * tan(15);
const h18 = 100 / (Math.sqrt(3) + 1);

export const TOPIC = "5.1 Rapports trigonométriques et angles remarquables";
export const Q = [
  num("Deux points distants de 60 m sont alignés avec une tour. Les angles d'élévation de son sommet sont de 20° (point éloigné) et de 35° (point rapproché). Trouve la hauteur (au dixième près).", rd(h1, 1), "h·cot 20° − h·cot 35° = 60.", rightD(60 + h1 * cot(35), h1, ["20°", "", "sommet"], [[60, 0, "35°"]]), 0.05),
  num(S`Évalue de façon exacte : $\sin60^\circ\cos30^\circ-\cos60^\circ\sin30^\circ$.`, 0.5, "¾ − ¼."),
  mc(S`Évalue $\tan30^\circ+\tan60^\circ$.`, S`$\frac4{\sqrt3}$`, [S`$\sqrt3$`, S`$\frac2{\sqrt3}$`, S`$2$`], "1/√3 + √3 = (1 + 3)/√3."),
  num("D'une fenêtre située à 18 m au-dessus de la rue, l'angle d'élévation du sommet de l'édifice d'en face est de 32° et l'angle de dépression de sa base est de 41°. Trouve la hauteur de cet édifice (au dixième près).", rd(h4, 1), "Distance 18/tan 41°; ajoute distance × tan 32° à 18.", FIG.window, 0.05),
  num("Un triangle équilatéral a un périmètre de 18. Trouve son aire, au centième près.", rd(9 * Math.sqrt(3)), "Côté 6, hauteur 3√3, aire 9√3.", null, 0.01),
  num("Trouve l'aire d'un hexagone régulier de côté 6 (au centième près).", rd(54 * Math.sqrt(3)), "Six triangles équilatéraux d'aire 9√3.", null, 0.01),
  num(S`θ est aigu et $\cos\theta=0.4$. Trouve $\tan\theta$ (4 décimales).`, rd(Math.sqrt(0.84) / 0.4, 4), "sin θ = √(1 − 0.16).", null, 0.0001),
  num("Du haut d'un phare de 50 m, on voit des bateaux situés de part et d'autre sous des angles de dépression de 30° et de 45°. Quelle distance les sépare (au centième près)?", rd(50 * Math.sqrt(3) + 50), "50√3 + 50.", FIG.lighthouse, 0.01),
  tf(S`Pour tout angle aigu θ, $\sin\theta<\tan\theta$.`, true, "tan θ = sin θ / cos θ et 0 < cos θ < 1."),
  ms("Pour θ = 60°, lesquels sont vrais? Choisis toutes les bonnes réponses.", [S`$\sin\theta>\cos\theta$`, S`$\tan\theta>1$`, S`$\sin\theta=2\sin30^\circ$`, S`$\cos\theta=\frac12$`], [0, 1, 3], "2 sin 30° = 1, et non √3/2."),
  num("Une échelle de 4 m atteint un mur à une hauteur de 3.6 m. Trouve l'angle qu'elle forme avec le sol (au dixième près).", rd(asin(0.9), 1), "sin θ = 0.9.", FIG.ladder4, 0.05),
  num("Une échelle de 4 m atteint un mur à une hauteur de 3.6 m. Elle glisse jusqu'à ce que son angle avec le sol soit de 50°. De combien le haut de l'échelle a-t-il descendu le long du mur (au centième près)?", rd(3.6 - 4 * sin(50)), "3.6 − 4 sin 50°.", FIG.ladder4, 0.01),
  num("Un arbre projette une ombre de 10 m quand le soleil est à 50°. Plus tard, son ombre mesure 16 m. Trouve le nouvel angle d'élévation du soleil (au dixième près).", rd(atan(h13 / 16), 1), "Hauteur 10 tan 50°; puis tan⁻¹(hauteur/16).", FIG.shadows, 0.05),
  num(S`θ est aigu et $\sin\theta=\cos\theta$. Trouve θ.`, 45, "tan θ = 1."),
  num("Un triangle rectangle a une hypoténuse de 25 et un angle de 30°. Trouve son aire, au centième près.", rd(0.5 * 12.5 * 12.5 * Math.sqrt(3)), "Cathètes 12.5 et 12.5√3.", null, 0.01),
  num("Un toit symétrique a une portée de 12 m et chaque versant s'élève à 28°. Trouve la longueur d'un chevron (au centième près).", rd(6 / cos(28)), "Demi-portée 6 = chevron × cos 28°.", triD([[0, 0], [12, 0], [6, 6 * tan(28)]], ["28°", "28°", ""], { marks: [[6, 0, "12 m"]] }), 0.01),
  num("Deux édifices sont distants de 50 m. Du toit du moins haut, l'angle de dépression de la base du plus haut est de 25° et l'angle d'élévation de son sommet est de 15°. Quelle est la hauteur de l'édifice le plus haut (au centième près)?", rd(h17a + h17b), "50 tan 25° + 50 tan 15°.",
    triD([[0, 0], [0, h17a], [50, h17a + h17b], [50, 0]], ["", "toit", "sommet", "base"], { open: true, extra: [{ pts: [[0, 0], [50, 0]], color: "green" }, { pts: [[0, h17a], [50, h17a]], color: "gray" }, { pts: [[0, h17a], [50, 0]], color: "red" }], marks: [[25, 0, "50 m"]] }), 0.01),
  num("Deux observateurs distants de 100 m sont de part et d'autre d'une tour et alignés avec elle. Leurs angles d'élévation sont de 30° et de 45°. Trouve la hauteur (au centième près).", rd(h18), "h√3 + h = 100.",
    triD([[0, 0], [h18 * Math.sqrt(3), h18], [h18 * Math.sqrt(3) + h18, 0]], ["30°", "sommet", "45°"], { extra: [{ pts: [[h18 * Math.sqrt(3), 0], [h18 * Math.sqrt(3), h18]], color: "gray" }], marks: [[50, 0, "100 m"]] }), 0.01),
  num("Un triangle rectangle a des cathètes de 6 et 8. Utilise la trigonométrie pour trouver la hauteur issue de l'angle droit jusqu'à l'hypoténuse.", 4.8, "Hauteur = 6 sin B avec tan B = 8/6, c'est-à-dire 6 × 0.8.",
    triD([[0, 0], [8, 0], [0, 6]], ["", "", ""], { extra: [{ pts: [[0, 0], [8 * 36 / 100, 6 * 64 / 100]], color: "red" }], marks: [[4, 0, "8"], [0, 3, "6"]] })),
  num(S`Évalue $\dfrac{1-\tan^2 30^\circ}{1+\tan^2 30^\circ}$.`, 0.5, "(2/3)/(4/3)."),
];
