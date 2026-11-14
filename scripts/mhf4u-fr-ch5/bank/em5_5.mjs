import { FIG } from "./fig.mjs";
// 5.5 Modèles trigonométriques et taux de variation — 20 questions faciles + 20 moyennes
// Notation française : y = a sin(k(t − c)) + d (c = déphasage, d = translation verticale / axe).
// (Dans les modèles de marée, « d » désigne aussi la fonction profondeur d(t), comme en anglais.)
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const wheel = (t) => -10 * Math.cos((P / 20) * t) + 12;

export const E = [
  num(S`Une grande roue a un rayon de $12$ m et son centre est à $14$ m au-dessus du sol. Quelle est la plus grande hauteur d'un passager ?`, 26, "Haut = centre + rayon = 14 + 12.", FIG.w1214),
  num(S`Une grande roue a un rayon de $12$ m et son centre est à $14$ m au-dessus du sol. Quelle est la plus petite hauteur d'un passager ?`, 2, "Bas = centre − rayon = 14 − 12.", FIG.w1214),
  num(S`Une roue fait un tour toutes les $40$ s. Quelle est la valeur de $k$ dans $h=a\cos(kt)+d$ ? Donne trois décimales.`, (2 * P) / 40, "k = 2π/période = 2π/40 = π/20 ≈ 0.157.", null, 0.002),
  num(S`Pour $h(t)=5\sin\left(\frac\pi6t\right)+8$, quelle est la période ?`, 12, "2π/(π/6) = 12."),
  num(S`Pour $h(t)=5\sin\left(\frac\pi6t\right)+8$, quelle est la valeur maximale ?`, 13, "d + |a| = 8 + 5."),
  num(S`Pour $h(t)=5\sin\left(\frac\pi6t\right)+8$, trouve $h(3)$.`, 13, "π/6 · 3 = π/2, sin(π/2) = 1, donc h = 13."),
  mc("Une marée est haute à 2 h 00 et la marée basse suivante est à 8 h 15. Quelle est la période ?", "12.5 h", ["6.25 h", "6 h", "24 h"], "De la marée haute à la marée basse, il y a un demi-cycle : 6.25 h, donc la période est de 12.5 h."),
  mc("Un passager monte au bas d'une grande roue en t = 0. Quelle forme convient le mieux ?", S`$h=-a\cos(kt)+d$`, [S`$h=a\cos(kt)+d$`, S`$h=a\sin(kt)+d$`, S`$h=-a\sin(kt)+d$`], "−cos commence à son minimum."),
  mc("Une masse est lâchée de son point le plus haut en t = 0. Quelle forme convient le mieux ?", S`$y=a\cos(kt)+d$`, [S`$y=-a\cos(kt)+d$`, S`$y=a\sin(kt)+d$`, S`$y=-a\sin(kt)+d$`], "cos commence à son maximum."),
  mc("La profondeur de l'eau varie de 3 m à 11 m. Quelle est la valeur d de l'axe ?", "7 m", ["4 m", "8 m", "14 m"], "d = (11 + 3)/2 = 7."),
  mc("La profondeur de l'eau varie de 3 m à 11 m. Quelle est l'amplitude ?", "4 m", ["8 m", "7 m", "3 m"], "(11 − 3)/2 = 4."),
  tf("Le taux de variation moyen d'une sinusoïde sur une période complète est 0.", true, "Elle finit à la même valeur qu'au départ, donc la variation est 0."),
  tf("Une sinusoïde varie le plus rapidement à son maximum.", false, "À un maximum, le graphique est plat pendant un instant : le taux vaut 0."),
  fill(S`Le taux de variation moyen de $t_1$ à $t_2$ est la pente de la ____ qui passe par les deux points.`, ["sécante", "secante", "droite sécante", "secant"], "Variation verticale sur variation horizontale entre les deux points."),
  fill(S`Le taux de variation instantané est la pente de la ____ en un point.`, ["tangente", "droite tangente", "tangent"], "La limite des pentes des sécantes lorsque l'intervalle rétrécit."),
  num(S`Pour $y=4\sin t$, trouve le taux de variation moyen de $t=0$ à $t=\frac\pi2$ (deux décimales).`, 8 / P, "(4 − 0)/(π/2) = 8/π ≈ 2.55.", null, 0.01),
  num(S`Pour $y=\cos t$, trouve le taux de variation moyen de $t=0$ à $t=\pi$ (deux décimales).`, -2 / P, "(−1 − 1)/π ≈ −0.64.", null, 0.01),
  mc("La durée du jour dans une ville varie sur 365 jours. Quelle est la valeur de k ?", S`$\frac{2\pi}{365}$`, [S`$\frac{365}{2\pi}$`, S`$365$`, S`$\frac\pi{365}$`], "k = 2π/période."),
  mc("Le graphique montre la hauteur d'un passager. Quelle est la période ?", "40 s", ["20 s", "22 s", "10 s"], "Le passager est de retour en bas en t = 40.", planeDoc(TG([[wheel, "violet"]], { xmin: -2, xmax: 85, ymin: 0, ymax: 25 }, [], { step: { x: 10, y: 5 }, xlabel: "t (s)" }))),
  mc("Le graphique montre la hauteur d'un passager. Quelle est la hauteur maximale du passager ?", "22 m", ["12 m", "10 m", "20 m"], "Centre 12 + rayon 10.", planeDoc(TG([[wheel, "violet"]], { xmin: -2, xmax: 85, ymin: 0, ymax: 25 }, [{ x: 20, y: 22, label: "(20, 22)" }], { step: { x: 10, y: 5 }, xlabel: "t (s)" }))),
];

export const M = [
  mc("Une roue a un rayon de 8 m, un centre à 9 m de hauteur et une période de 30 s; un passager monte en bas en t = 0. Quel modèle convient ?", S`$h=-8\cos\left(\frac\pi{15}t\right)+9$`, [S`$h=8\cos\left(\frac\pi{15}t\right)+9$`, S`$h=-8\cos(30t)+9$`, S`$h=-9\cos\left(\frac\pi{15}t\right)+8$`], "a = −8 (départ en bas), k = 2π/30 = π/15, d = 9.", FIG.w89),
  num(S`Pour $h=-8\cos\left(\frac\pi{15}t\right)+9$, trouve $h(5)$.`, 5, "cos(π/3) = 1/2, donc h = −4 + 9 = 5."),
  num(S`Pour $h=-8\cos\left(\frac\pi{15}t\right)+9$, trouve le premier instant $t>0$ où $h=13$.`, 10, "cos(πt/15) = −1/2, donc πt/15 = 2π/3 et t = 10."),
  mc("Marée haute de 10 m en t = 0, marée basse de 2 m en t = 6 h. Quel modèle convient ?", S`$d=4\cos\left(\frac\pi6t\right)+6$`, [S`$d=4\cos\left(\frac\pi{12}t\right)+6$`, S`$d=8\cos\left(\frac\pi6t\right)+2$`, S`$d=4\sin\left(\frac\pi6t\right)+6$`], "a = 4, axe 6, période 12 h donc k = π/6, le cosinus commence à la marée haute.", FIG.tide102),
  num(S`Pour $d=4\cos\left(\frac\pi6t\right)+6$, trouve le taux de variation moyen de $t=0$ à $t=3$ (m/h, deux décimales).`, -4 / 3, "d(0) = 10, d(3) = 6 : (6 − 10)/3 ≈ −1.33.", null, 0.01),
  num(S`Pour $d=4\cos\left(\frac\pi6t\right)+6$, estime le taux instantané en $t=3$ (deux décimales).`, -4 * (P / 6), "Au croisement de l'axe, le taux est −a·k = −4(π/6) ≈ −2.09 m/h.", null, 0.02),
  ms(S`Pour $d=4\cos\left(\frac\pi6t\right)+6$, sélectionne tous les instants de $[0,12]$ où le taux de variation vaut $0$.`, ["0", "3", "6", "9", "12"], [0, 2, 4], "Le taux vaut 0 aux marées hautes (t = 0, 12) et à la marée basse (t = 6)."),
  ms(S`Pour $d=4\cos\left(\frac\pi6t\right)+6$, sélectionne tous les instants de $[0,12]$ où la profondeur varie le plus rapidement.`, ["0", "3", "6", "9", "12"], [1, 3], "Le plus rapide là où la courbe traverse son axe, profondeur 6 : t = 3 et 9."),
  mc("La température atteint un sommet de 30 °C au jour 200 et son minimum, −10 °C, une demi-année plus tard. Quel modèle convient (t en jours) ?", S`$T=20\cos\left(\frac{2\pi}{365}(t-200)\right)+10$`, [S`$T=20\cos\left(\frac{2\pi}{365}t\right)+10$`, S`$T=40\cos\left(\frac{2\pi}{365}(t-200)\right)+10$`, S`$T=20\sin\left(\frac{2\pi}{365}(t-200)\right)+10$`], "a = 20, d = 10, période 365, le cosinus atteint son sommet en t = 200."),
  num(S`Un ressort oscille selon $y=3\cos(2\pi t)+10$ cm. Combien d'oscillations complètes se produisent en $5$ s ?`, 5, "Période 2π/(2π) = 1 s, donc 5 oscillations."),
  num(S`Pour $y=3\cos(2\pi t)+10$, trouve $y(0.25)$.`, 10, "cos(π/2) = 0."),
  mc(S`Pour $h=-10\cos\left(\frac\pi{20}t\right)+12$, sur quel intervalle de temps, pendant un tour, le passager est-il à plus de $17$ m ?`, S`$\frac{40}3<t<\frac{80}3$`, [S`$10<t<30$`, S`$0<t<\frac{40}3$`, S`$\frac{20}3<t<\frac{100}3$`], "cos(πt/20) < −1/2 pour 2π/3 < πt/20 < 4π/3."),
  num(S`Pour $h=-10\cos\left(\frac\pi{20}t\right)+12$, pendant combien de secondes par tour le passager est-il à plus de $17$ m (deux décimales) ?`, 40 / 3, "80/3 − 40/3 = 40/3 ≈ 13.33 s.", null, 0.01),
  tf(S`Pour $h=-10\cos\left(\frac\pi{20}t\right)+12$, le passager monte le plus rapidement en $t=10$.`, true, "En t = 10, le passager est à la hauteur du centre (axe), en montant."),
  tf("Doubler le rayon d'une grande roue (même période) double le plus grand taux de variation de la hauteur.", true, "Le plus grand taux est a·k; doubler a le double."),
  mc("L'angle d'un pendule oscille entre −15° et 15° avec une période de 2 s, en partant de 15°. Quel modèle convient ?", S`$\theta=15\cos(\pi t)$`, [S`$\theta=15\cos(2t)$`, S`$\theta=30\cos(\pi t)$`, S`$\theta=15\sin(\pi t)$`], "k = 2π/2 = π; le cosinus commence au maximum."),
  num(S`La durée du jour est $D=3\sin\left(\frac{2\pi}{365}(t-80)\right)+12$. Trouve le jour de l'année où la durée du jour est la plus courte (au jour près).`, 354, "Min quand l'argument vaut 3π/2 : t − 80 = 3/4 · 365 = 273.75, t ≈ 354.", null, 1),
  mc("Le graphique montre la profondeur de l'eau. Estime le taux de variation moyen de t = 0 à t = 3.", "−2 m/h", ["2 m/h", "−6 m/h", "0 m/h"], "De 12 m à 6 m en 3 h : −6/3 = −2.", planeDoc(TG([[(t) => 6 * Math.cos((P / 6) * t) + 6, "violet"]], { xmin: -0.5, xmax: 13, ymin: -1, ymax: 13 }, [{ x: 0, y: 12 }, { x: 3, y: 6 }], { step: { x: 1, y: 2 }, xlabel: "t (h)", segs: [{ pts: [[0, 12], [3, 6]], color: "red" }] }))),
  mc("Le graphique montre la profondeur de l'eau. À quel instant de [0, 12] la profondeur varie-t-elle le plus rapidement en augmentant ?", "t = 9", ["t = 6", "t = 3", "t = 12"], "La montée à travers l'axe, profondeur 6, se produit en t = 9.", planeDoc(TG([[(t) => 6 * Math.cos((P / 6) * t) + 6, "violet"]], { xmin: -0.5, xmax: 13, ymin: -1, ymax: 13 }, [], { step: { x: 1, y: 2 }, xlabel: "t (h)" }))),
  fill(S`Pour $y=a\sin(kt)+d$, le plus grand taux de variation instantané est $|a|$ fois ____.`, ["|k|", "k"], "La courbe est la plus abrupte sur l'axe, avec une pente a·k."),
];
