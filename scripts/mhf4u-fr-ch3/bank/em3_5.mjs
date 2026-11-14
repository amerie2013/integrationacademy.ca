// 3.5 Modèles de fonctions rationnelles — 20 questions faciles + 20 questions moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`Un trajet de 150 km à la vitesse $v$ dure $t=\dfrac{150}v$ h. Trouve $t$ quand $v=50$.`, 3, "150/50."),
  num(S`Un trajet de 480 km dure 6 h. Quelle est la vitesse moyenne en km/h?`, 80, "480/6."),
  num(S`Le coût moyen est $A(x)=\dfrac{600+4x}x$ dollars. Trouve $A(100)$.`, 10, "1000/100."),
  mc(S`Que représente l'asymptote horizontale de $A(x)=\dfrac{600+4x}x$?`, "le coût par article pour de très grosses commandes", ["le coût fixe", "le coût total", "le nombre d'articles"], "A = 4 + 600/x s'approche de 4."),
  num(S`Quelle est la valeur de l'asymptote horizontale de $A(x)=\dfrac{900+12x}x$?`, 12, "12 + 900/x."),
  mc("Dans un modèle de la durée en fonction de la vitesse, pourquoi v = 0 est-elle exclue?", "le trajet ne finirait jamais", ["la vitesse est toujours négative", "la distance est 0", "la durée est 0"], "Division par 0."),
  num(S`L'intensité est $I=\dfrac{36}{d^2}$. Trouve $I$ quand $d=2$.`, 9, "36/4."),
  num(S`L'intensité est $I=\dfrac{50}{d^2}$. Trouve $I$ quand $d=5$.`, 2, "50/25."),
  tf(S`Si $I=\dfrac{k}{d^2}$, doubler la distance divise l'intensité par 4.`, true, "2² = 4."),
  fill("Si le tuyau A remplit un réservoir en 5 h, il en remplit ___ par heure (écris une fraction).", ["1/5", "0.2"], "Une tâche en 5 h."),
  num(S`Un travailleur termine une tâche en 8 h. Quelle fraction de la tâche, sous forme décimale, est faite en 2 h?`, 0.25, "2/8.", null, 0.001),
  num(S`La concentration est $C=\dfrac{\text{sel}}{\text{volume}}$. Trouve $C$ en g/L pour 30 g dans 60 L.`, 0.5, "30/60.", null, 0.001),
  num(S`Un réservoir a une concentration $C(t)=\dfrac{2t}{10+t}$ g/L. Trouve $C(10)$.`, 1, "20/20."),
  num(S`Pour $C(t)=\dfrac{2t}{10+t}$, de quelle valeur $C$ s'approche-t-elle pour de grandes valeurs de $t$?`, 2, "Rapport des coefficients dominants."),
  tf("Le temps ne peut pas être négatif, donc une racine négative d'une équation de modélisation est rejetée.", true, "Le contexte restreint le domaine."),
  num(S`Une population est $P(t)=\dfrac{80t+40}{t+2}$ milliers. Trouve $P(0)$.`, 20, "40/2."),
  num(S`Pour $P(t)=\dfrac{80t+40}{t+2}$, quelle est la valeur à long terme?`, 80, "80/1."),
  mc("Lis la valeur à long terme sur le graphique.", "10", ["0", "5", "20"], "L'asymptote horizontale en pointillés.", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 14 }, curves: [{ f: (t) => 10 * t / (t + 5), a: 0, b: 40, color: "violet" }], lines: [{ m: 0, b: 10, color: "red", dash: true }], step: { x: 5, y: 2 } })),
  mc("D'après le graphique, à quelle vitesse le trajet dure-t-il 4 h?", "50 km/h", ["25 km/h", "100 km/h", "4 km/h"], "La courbe passe par (50, 4).", planeDoc({ view: { xmin: 0, xmax: 120, ymin: 0, ymax: 12 }, curves: [{ f: (v) => 200 / v, a: 17, b: 120, color: "violet" }], points: [P(50, 4)], step: { x: 20, y: 2 } })),
  num(S`Deux tuyaux remplissent un réservoir à raison de $\tfrac16$ et de $\tfrac13$ de réservoir par heure. Combien d'heures prennent-ils ensemble?`, 2, "1/6 + 1/3 = 1/2."),
];

export const M = [
  num(S`$A(x)=\dfrac{1500+20x}x$. Combien d'articles donnent un coût moyen de 50 dollars?`, 50, "1500 = 30x."),
  num(S`$A(x)=\dfrac{4000+25x}x$. Combien d'articles donnent un coût moyen de 35 dollars?`, 400, "4000 = 10x."),
  mc(S`$A(x)=\dfrac{800+10x}x$. Pour quelles valeurs de $x$ a-t-on $A\lt14$?`, S`$x>200$`, [S`$x\lt200$`, S`$x>80$`, S`$x>14$`], "800 < 4x."),
  num(S`Un réservoir de 400 L contient 40 g de sel. De la saumure à 2 g/L y entre à raison de 10 L/min. Trouve $C(40)$ en g/L.`, 1.05, "C(t) = (40 + 20t)/(400 + 10t), et 840/800 = 1.05.", null, 0.001),
  num(S`Pour le réservoir $C(t)=\dfrac{40+20t}{400+10t}$ g/L, trouve la valeur à long terme.`, 2, "20/10."),
  num(S`Pour $C(t)=\dfrac{3t}{20+t}$ g/L, quand a-t-on $C=1$?`, 10, "3t = 20 + t."),
  num(S`Le tuyau A remplit un réservoir en 6 h et le tuyau B en 3 h. Combien d'heures ensemble?`, 2, "1/6 + 1/3 = 1/2."),
  num(S`Le travailleur A prend 10 h. Avec B, ils prennent 6 h. Combien d'heures B prendrait-il seul?`, 15, "1/B = 1/6 − 1/10 = 1/15."),
  num(S`Un drain vide un réservoir en 12 h pendant qu'un tuyau le remplit en 4 h. Combien d'heures pour le remplir quand les deux sont ouverts?`, 6, "1/4 − 1/12 = 1/6."),
  num(S`Un bateau va à 20 km/h en eau calme, avec un courant de 5 km/h. Combien d'heures pour parcourir 75 km en descendant le courant?`, 3, "75/25."),
  num(S`Un bateau va à 20 km/h en eau calme, avec un courant de 5 km/h. Combien d'heures pour parcourir 75 km en remontant le courant?`, 5, "75/15."),
  num(S`Trouve le taux de variation moyen de $t=\dfrac{120}v$ de $v=40$ à $v=60$ (forme décimale).`, -0.05, "(2 − 3)/20.", null, 0.001),
  num(S`Trouve le taux de variation moyen de $I=\dfrac{100}{d^2}$ sur $[2,5]$.`, -7, "(4 − 25)/3."),
  num(S`Estime le taux de variation instantané de $I=\dfrac{16}{d^2}$ en $d=2$.`, -4, "−32/d³ = −4.", null, 0.05),
  num(S`Pour $C(t)=\dfrac{12t}{t^2+4}$, trouve $C(2)$.`, 3, "24/8."),
  mc(S`Pour $C(t)=\dfrac{12t}{t^2+4}$, quand a-t-on $C\ge2.4$?`, S`$1\le t\le4$`, [S`$0\le t\le4$`, S`$t\ge1$`, S`$2\le t\le4$`], "t² − 5t + 4 ≤ 0."),
  mc("Le graphique représente C(t). Pendant quelle période C est-elle d'au moins 2?", S`$1\le t\le4$`, [S`$0\le t\le2$`, S`$t\ge4$`, S`$2\le t\le4$`], "C(t) = 10t/(t² + 4) rencontre y = 2 en t = 1 et en t = 4.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 4 }, curves: [{ f: (t) => 10 * t / (t * t + 4), a: 0, b: 8, color: "violet" }, { f: () => 2, color: "green" }], points: [P(1, 2), P(4, 2)], step: { x: 1, y: 1 } })),
  mc("D'après le graphique du coût moyen, quel est le coût fixe si A(x) = (F + 3x)/x?", "300 dollars", ["3 dollars", "100 dollars", "6 dollars"], "En x = 100, A = 6 : F + 300 = 600.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 14 }, curves: [{ f: (x) => (300 + 3 * x) / x, a: 25, b: 300, color: "violet" }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [P(100, 6)], step: { x: 50, y: 2 } })),
  tf(S`Pour $A(x)=\dfrac{F+vx}x$ avec $F>0$, le coût moyen est toujours supérieur à $v$.`, true, "A = v + F/x et F/x > 0."),
  num(S`Un rectangle a une aire de 64 m². Son périmètre est $P(x)=2x+\dfrac{128}x$. Trouve $P(8)$.`, 32, "16 + 16."),
];
