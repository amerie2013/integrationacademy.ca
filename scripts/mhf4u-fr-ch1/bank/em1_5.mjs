// 1.5 Pente des sécantes et taux de variation moyen — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^2$ sur $[1,3]$.`, 4, "(9 − 1) ÷ 2."),
  num(String.raw`Trouve la pente de la sécante qui passe par $(2,5)$ et $(6,13)$.`, 2, "8 ÷ 4."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=3x+1$ sur $[0,10]$.`, 3, "Une droite a le même taux partout."),
  tf("Le taux de variation moyen sur un intervalle est égal à la pente de la sécante qui relie les extrémités.", true, "Les deux valent Δy/Δx."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^3$ sur $[0,2]$.`, 4, "8 ÷ 2."),
  mc("La distance est en mètres et le temps en secondes. Les unités du taux de variation moyen sont :", "m/s", ["s/m", "m", "m·s"], "Unités de sortie par unité d'entrée."),
  num("Une plante mesure 2 cm au jour 0 et 32 cm au jour 5. Trouve le taux de croissance moyen en cm par jour.", 6, "30 ÷ 5."),
  tf("Un taux de variation moyen négatif signifie que la fonction a diminué en moyenne sur l'intervalle.", true, "L'extrémité finale est plus basse que le départ."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=10-x^2$ sur $[0,3]$.`, -3, "(1 − 10) ÷ 3."),
  num("Trouve la pente de la sécante illustrée sur y = 0.5x².", 2, "(8 − 0) ÷ (4 − 0).", graph((x) => 0.5 * x * x, { xmin: -1, xmax: 5, ymin: -1, ymax: 10 }, [P(0, 0), P(4, 8)], { more: [{ f: (x) => 2 * x, a: -0.3, b: 4.5, color: "red" }] })),
  num("Une ville comptait 1200 habitants en 2015 et 1500 en 2021. Trouve le taux de variation moyen en habitants par année.", 50, "300 ÷ 6."),
  mc(String.raw`Pour $y=x^2$, quel intervalle a le plus grand taux de variation moyen?`, String.raw`$[3,4]$`, [String.raw`$[0,1]$`, String.raw`$[1,2]$`, String.raw`$[2,3]$`], "La parabole devient plus abrupte à mesure que x augmente : taux 1, 3, 5, 7."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=2^x$ sur $[0,3]$ (2 décimales).`, 2.3333, "(8 − 1) ÷ 3.", null, 0.006),
  fill(String.raw`Le taux de variation moyen sur $[a,b]$ est $f(b)-f(a)$ divisé par ___.`, ["b-a", "b − a", "b - a", "(b-a)"], "La variation de x."),
  num(String.raw`Un centre sportif demande $C(n)=50+8n$ dollars pour $n$ visites. Trouve le taux de variation moyen de 10 à 20 visites.`, 8, "Linéaire : pente 8."),
  tf("Un taux de variation moyen de 0 signifie que la fonction est constante sur l'intervalle.", false, "Cela signifie seulement que les extrémités sont à la même hauteur."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^2-4x$ sur $[0,4]$.`, 0, "f(0) = f(4) = 0."),
  mc("Quel est le signe de la pente de la sécante de A à B?", "négatif", ["positif", "nul", "non défini"], "B est plus bas que A.", graph((x) => -0.5 * x * x + 6, { xmin: -1, xmax: 4, ymin: 0, ymax: 7 }, [P(0, 6, "A"), P(3, 1.5, "B")])),
  num(String.raw`Un objet a parcouru $d(t)=5t^2$ m après $t$ s. Trouve sa vitesse moyenne sur $[2,4]$.`, 30, "(80 − 20) ÷ 2."),
  num("La température est passée de 24 °C à 15 °C en 3 heures. Trouve le taux de variation moyen en °C par heure.", -3, "−9 ÷ 3."),
];

export const M = [
  num(String.raw`Une balle a une hauteur $h(t)=-5t^2+30t$ m. Trouve sa vitesse moyenne sur $[1,4]$.`, 5, "h(1) = 25, h(4) = 40 : 15 ÷ 3."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^3-x$ sur $[-2,2]$.`, 3, "f(−2) = −6, f(2) = 6 : 12 ÷ 4."),
  num(String.raw`La valeur d'une voiture est $V(t)=1000(0.9)^t$ centaines de dollars. Trouve le taux de variation moyen sur $[0,3]$ (2 décimales).`, -90.3333, "V(3) = 729 : (729 − 1000) ÷ 3.", null, 0.006),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^4$ sur $[1,2]$.`, 15, "(16 − 1) ÷ 1."),
  mc("Une table donne y = 2, 5, 6, 12 pour t = 0, 1, 2, 3. Quel intervalle a le plus grand taux de variation moyen?", String.raw`$[2,3]$`, [String.raw`$[0,1]$`, String.raw`$[1,2]$`, String.raw`$[0,3]$`], "Taux : 3, 1, 6, et 10/3 sur [0, 3]."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=2x^2+1$ sur $[3,4]$.`, 14, "f(4) = 33, f(3) = 19."),
  ms(String.raw`Pour quelles fonctions le taux de variation moyen sur $[0,2]$ est-il égal à 2? Choisis toutes les bonnes réponses.`, [String.raw`$y=2x$`, String.raw`$y=x^2$`, String.raw`$y=x^3$`, String.raw`$y=0.25x^3$`], [0, 1], "4 ÷ 2 = 2 pour y = 2x et pour y = x²; 8 ÷ 2 = 4; 2 ÷ 2 = 1."),
  num("Trouve la pente de la sécante qui passe par les deux points indiqués.", -2, "(−3 − 3) ÷ (2 − (−1)).", graph((x) => x * x - 3 * x - 1, { xmin: -2, xmax: 4, ymin: -4, ymax: 6 }, [P(-1, 3), P(2, -3)])),
  tf("Pour une fonction linéaire, le taux de variation moyen est le même sur tous les intervalles.", true, "Il est égal à la pente."),
  num(String.raw`Un compte croît selon $A(t)=500(1.06)^t$ dollars. Trouve le taux de variation moyen sur $[0,4]$ (2 décimales).`, 32.81, "A(4) ≈ 631.24 : 131.24 ÷ 4.", null, 0.01),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^2$ sur $[2,2.5]$.`, 4.5, "(6.25 − 4) ÷ 0.5."),
  num(String.raw`Le taux de variation moyen de $f$ sur $[1,5]$ est 3 et $f(1)=2$. Trouve $f(5)$.`, 14, "f(5) − 2 = 3 × 4."),
  num(String.raw`Trouve le taux de variation moyen de $g(x)=-x^3$ sur $[-1,1]$.`, -1, "(−1 − 1) ÷ 2."),
  mc("Le volume d'un réservoir a un taux de variation moyen de −4 L/min sur [0, 10]. Qu'est-ce que cela signifie?", "le réservoir a perdu 40 L au total pendant les 10 minutes", ["le réservoir a perdu exactement 4 L chaque minute", "le réservoir contient 4 L", "le réservoir a gagné 40 L"], "Variation nette = taux × temps; le taux peut varier à l'intérieur de l'intervalle."),
  num(String.raw`La position d'un objet est $s(t)=t^3$ m. Trouve sa vitesse moyenne sur $[2,4]$.`, 28, "(64 − 8) ÷ 2."),
  num("Une voiture a parcouru 0, 40, 100, 180 km à t = 0, 1, 2, 3 h. Trouve sa vitesse moyenne sur [1, 3] en km/h.", 70, "(180 − 40) ÷ 2."),
  mc("Quelle sécante sur y = 0.25x³ est la plus abrupte?", "BC", ["AB", "AC", "elles sont toutes aussi abruptes"], "AB : 1, AC : 2.25, BC : 4.75.", graph((x) => 0.25 * x ** 3, { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 8 }, [P(0, 0, "A"), P(2, 2, "B"), P(3, 6.75, "C")])),
  num(String.raw`Une population est $P(t)=50t^2+1000$. Trouve le taux de variation moyen sur $[2,6]$.`, 400, "P(2) = 1200, P(6) = 2800 : 1600 ÷ 4."),
  tf(String.raw`Le taux de variation moyen de $y=x^2$ sur $[-2,2]$ est 0.`, true, "Les deux extrémités ont y = 4."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^2+x$ sur $[1,4]$.`, 6, "f(1) = 2, f(4) = 20 : 18 ÷ 3."),
];
