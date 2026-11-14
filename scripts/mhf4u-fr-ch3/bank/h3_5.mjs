import { FIG } from "../../mhf4u-bank-figures/figs.mjs"; // FIG.openBox : boîte étiquetée x, x, h seulement (aucun mot)
// 3.5 Modèles de fonctions rationnelles — 20 questions difficiles
// (c, w = vitesses du courant / du vent : aucune permutation c↔d.)
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "3.5 Modèles de fonctions rationnelles";
export const Q = [
  num(S`Un bateau va à 12 km/h en eau calme. Un trajet de 35 km en remontant le courant, puis le retour, dure 6 h. Trouve la vitesse du courant en km/h.`, 2, "35·24/(144 − c²) = 6 : 840 = 864 − 6c², c² = 4."),
  num(S`Un avion vole à 300 km/h en air calme. Il parcourt 720 km contre le vent et 720 km au retour en 5 h au total. Trouve la vitesse du vent en km/h.`, 60, "720·600/(90000 − w²) = 5 : w² = 3600."),
  num(S`Le travailleur A prend $x$ h et B prend $x+3$ h. Ensemble, ils prennent 2 h. Trouve $x$.`, 3, "x² − x − 6 = 0, on rejette x = −2."),
  num(S`Le tuyau A remplit une piscine 4 h plus vite que le tuyau B. Ensemble, ils prennent 3.75 h. Combien d'heures A prend-il seul?`, 6, "1/x + 1/(x + 4) = 4/15 : 2x² − 7x − 30 = 0 donne (2x + 5)(x − 6) = 0."),
  num(S`Un réservoir de 500 L contient 100 g de sel. De l'eau pure y entre à raison de 25 L/min et aucune eau ne sort. Trouve la concentration en g/L après 20 min.`, 0.1, "100/(500 + 500).", null, 0.001),
  num(S`Un réservoir de 100 L contient du sel à 2 g/L. De la saumure à 5 g/L y entre à raison de 20 L/min et rien ne sort. Quand la concentration est-elle de 4 g/L, en minutes?`, 10, "(200 + 100t)/(100 + 20t) = 4 : 200 + 100t = 400 + 80t."),
  num(S`$C(t)=\dfrac{20t}{t^2+25}$ mg/L. Pendant combien d'heures a-t-on $C\ge1.6$?`, 7.5, "t² − 12.5t + 25 ≤ 0 donne (t − 2.5)(t − 10) ≤ 0, de 2.5 h à 10 h.", null, 0.01),
  num(S`La plus grande valeur de $C(t)=\dfrac{20t}{t^2+25}$ est atteinte en $t=5$. Quelle est-elle?`, 2, "100/50."),
  num(S`Une boîte ouverte à base carrée a un volume de 108 cm³. Son aire est $S(x)=x^2+\dfrac{432}x$. Trouve le côté $x$ qui rend $S$ minimale.`, 6, "2x = 432/x² donne x³ = 216.", FIG.openBox),
  num(S`Une boîte fermée à base carrée a un volume de 1000 cm³. Son aire est $S(x)=2x^2+\dfrac{4000}x$. Trouve l'aire minimale.`, 600, "x = 10 : 200 + 400."),
  num(S`Estime le taux de variation instantané de $t=\dfrac{240}v$ en $v=60$ (2 décimales).`, -0.07, "−240/3600 ≈ −0.0667.", null, 0.005),
  num(S`Pour $I=\dfrac{k}{d^2}$, $I=20$ quand $d=3$. Trouve $I$ quand $d=6$.`, 5, "Doubler d divise I par 4."),
  num(S`Pour $I=\dfrac{k}{d^2}$, $I=45$ quand $d=2$. Trouve la distance $d$ pour laquelle $I=5$.`, 6, "k = 180; d² = 36."),
  mc(S`Un coût moyen est $A(x)=\dfrac{F+vx}x$ avec $A(50)=30$ et $A(200)=15$. Trouve $F$ et $v$.`, S`$F=1000,\ v=10$`, [S`$F=500,\ v=20$`, S`$F=1000,\ v=5$`, S`$F=1500,\ v=10$`], "F + 50v = 1500, F + 200v = 3000."),
  mc("La droite en pointillés est le niveau à long terme de P(t) = (at + 60)/(t + 3). Quelle est la valeur de a, et quand P atteint-elle 100?", S`$a=120$; $t=12$`, [S`$a=120$; $t=4$`, S`$a=60$; $t=12$`, S`$a=100$; $t=3$`], "Valeur à long terme 120; (120t + 60)/(t + 3) = 100 donne 20t = 240.", planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 140 }, curves: [{ f: (t) => (120 * t + 60) / (t + 3), a: 0, b: 30, color: "violet" }], lines: [{ m: 0, b: 120, color: "red", dash: true }], step: { x: 5, y: 20 } })),
  mc("Le graphique représente S(x) = x² + 54/x. Quelle longueur de côté donne l'aire minimale?", S`$x=3$`, [S`$x=1$`, S`$x=6$`, S`$x=9$`], "2x = 54/x² donne x³ = 27.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 70 }, curves: [{ f: (x) => x * x + 54 / x, a: 0.8, b: 8, color: "violet" }], points: [P(3, 27)], step: { x: 1, y: 10 } })),
  mc("Le graphique représente la relation de la lentille v = 12u/(u − 12). Que signifie l'asymptote verticale?", "aucune image ne se forme quand l'objet est à la distance focale", ["l'image est toujours à une distance de 12", "l'objet mesure 12 cm de large", "la lentille n'a pas de distance focale"], "v → ∞ quand u → 12⁺.", planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 60 }, curves: [{ f: (u) => 12 * u / (u - 12), a: 15, b: 60, color: "violet" }], vlines: [{ x: 12, color: "red", dash: true }], lines: [{ m: 0, b: 12, color: "red", dash: true }], step: { x: 10, y: 10 } })),
  mc("Le graphique compare A(x) = (500 + 5x)/x (violet) et B(x) = (200 + 8x)/x (vert). Pour quelles valeurs de x A est-elle moins chère?", S`$x>100$`, [S`$x\lt100$`, S`$x>8$`, "jamais"], "500 + 5x < 200 + 8x donne x > 100.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 30 }, curves: [{ f: (x) => (500 + 5 * x) / x, a: 25, b: 300, color: "violet" }, { f: (x) => (200 + 8 * x) / x, a: 10, b: 300, color: "green" }], points: [P(100, 10)], step: { x: 50, y: 5 } })),
  tf(S`Si $C(t)=\dfrac{at}{b+t}$ avec $a,b>0$, la concentration continue d'augmenter, mais n'atteint jamais $a$.`, true, "C = a − ab/(b + t)."),
  num(S`Une voiture consomme $E(v)=\dfrac{900}v+\dfrac v4$ litres pendant un trajet. Trouve la vitesse $v$ qui rend $E$ minimale.`, 60, "900/v² = 1/4 donne v² = 3600."),
];
