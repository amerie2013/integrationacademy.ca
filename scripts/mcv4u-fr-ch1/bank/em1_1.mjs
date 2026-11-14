// 1.1 Taux de variation et pente d'une courbe — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Trouve la pente de la sécante qui passe par $(1,2)$ et $(5,10)$.`, 2, "8 ÷ 4."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^2$ sur $[2,4]$.`, 6, "(16 − 4) ÷ 2."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=3x-5$ sur $[0,8]$.`, 3, "Une droite : sa pente."),
  tf("Le taux de variation moyen sur un intervalle est égal à la pente de la sécante qui passe par les extrémités.", true, "Les deux valent Δy/Δx."),
  mc("Les gains sont en dollars et le temps en heures. Unités du taux de variation des gains?", "dollars par heure", ["heures par dollar", "dollars", "dollars-heures"], "Sortie par entrée."),
  num("Un objet est à 20 m du départ à t = 2 s et à 80 m à t = 6 s. Trouve sa vitesse moyenne en m/s.", 15, "60 ÷ 4."),
  tf("Le taux de variation instantané au sommet d'une courbe lisse est 0.", true, "La tangente est horizontale."),
  mc(String.raw`Sur quel intervalle $y=x^2$ a-t-elle un taux de variation moyen de 5?`, String.raw`$[2,3]$`, [String.raw`$[1,2]$`, String.raw`$[0,5]$`, String.raw`$[3,4]$`], "(9 − 4) ÷ 1."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^3$ sur $[0,3]$.`, 9, "27 ÷ 3."),
  mc("Le taux de variation instantané en P est-il positif, négatif ou nul?", "négatif", ["positif", "nul", "il n'existe pas"], "Le graphique descend en P.", graph((x) => 6 - 0.5 * x * x, { xmin: -1, xmax: 4, ymin: -1, ymax: 7 }, [P(2, 4, "P")])),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=10-2x^2$ sur $[1,2]$.`, -6, "(2 − 8) ÷ 1."),
  tf("Un coin pointu sur un graphique a une tangente.", false, "Les pentes à gauche et à droite sont différentes."),
  num("La température est passée de 30 °C à 18 °C en 4 heures. Taux moyen en °C/h?", -3, "−12 ÷ 4."),
  mc("Quelle sécante donne la meilleure estimation de la pente de la tangente en x = 1?", "de x = 1 à x = 1.01", ["de x = 1 à x = 2", "de x = 1 à x = 1.5", "de x = 0 à x = 2"], "L'intervalle le plus court."),
  num(String.raw`Trouve la pente de la sécante à $y=x^2$ de $x=3$ à $x=3.1$.`, 6.1, "(9.61 − 9) ÷ 0.1.", null, 0.0001),
  num("La tangente tracée en P passe par (0, −4) et (2, 0). Estime le taux instantané en P.", 2, "4 ÷ 2.", graph((x) => 0.5 * (x - 2) ** 2 + 2 * x - 4, { xmin: -1, xmax: 5, ymin: -5, ymax: 6 }, [P(0, -4, false), P(2, 0, "P")], { more: [{ f: (x) => 2 * x - 4, color: "green" }] })),
  mc("Quel type de fonction a le même taux de variation partout?", "affine", ["du second degré", "exponentielle", "cubique"], "Pente constante."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=\sqrt x$ sur $[1,9]$.`, 0.25, "(3 − 1) ÷ 8.", null, 0.0001),
  tf("Un taux de variation moyen de 0 signifie que la fonction est constante sur l'intervalle.", false, "Seules les extrémités sont à la même hauteur."),
  fill("La pente de la tangente en un point est le taux de variation ___.", ["instantané", "instantane", "instantaneous"], "Le taux à un seul instant."),
];

export const M = [
  num(String.raw`La hauteur d'une balle est $h(t)=-5t^2+40t$ m. Trouve sa vitesse moyenne sur $[1,3]$.`, 20, "h(1) = 35, h(3) = 75."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^3-4x$ sur $[-1,2]$.`, -1, "f(−1) = 3, f(2) = 0 : −3 ÷ 3."),
  num(String.raw`Une population est $P(t)=500(1.1)^t$. Trouve le taux de variation moyen sur $[0,5]$ (2 décimales).`, 61.05, "P(5) ≈ 805.26 : 305.26 ÷ 5.", null, 0.01),
  num(String.raw`Pour $y=x^2$, la sécante de $x=4$ à $x=4.01$ a une pente de 8.01. Estime la pente de la tangente en $x=4$.`, 8, "Les pentes des sécantes s'approchent de 8."),
  num(String.raw`Estime le taux de variation instantané de $x^3$ en $x=2$ à l'aide de $[1.99,2.01]$ (au nombre entier près).`, 12, "Pente centrée 12.0001."),
  mc("En quel point indiqué le taux de variation instantané est-il le plus grand?", "C", ["A", "B", "ils sont égaux"], "C'est en C que la courbe est la plus raide.", graph((x) => 0.2 * x ** 3, { xmin: -1, xmax: 3.5, ymin: -1, ymax: 8 }, [P(0.5, 0.025, "A"), P(1.5, 0.675, "B"), P(3, 5.4, "C")])),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=\frac1x$ sur $[1,4]$.`, -0.25, "(0.25 − 1) ÷ 3.", null, 0.0001),
  num("Un réservoir contient 10, 18, 30 L à t = 0, 2, 4 min. Trouve le taux moyen sur [2, 4] en L/min.", 6, "12 ÷ 2."),
  tf("Pour une fonction affine, le taux de variation moyen est le même sur tout intervalle.", true, "C'est la pente."),
  num(String.raw`Quelle est la pente de toute sécante à $y=|x-1|$ qui va de $(1,0)$ à un point situé à droite?`, 1, "À droite de 1, y = x − 1."),
  num(String.raw`Le coût de $x$ articles est $C(x)=0.5x^2+10x+100$ dollars. Trouve le taux de variation moyen de 10 à 20 articles.`, 25, "C(10) = 250, C(20) = 500."),
  mc(String.raw`Quelle valeur estime le mieux la pente de la tangente à $y=x^2$ en $x=1$?`, "2", ["1", "2.5", "3"], "Les sécantes centrées donnent exactement 2."),
  num(String.raw`Pour $h(t)=-4.9t^2+20t$, trouve la vitesse moyenne sur $[2,2.1]$ (2 décimales).`, -0.09, "h(2) = 20.4, h(2.1) = 20.391.", null, 0.005),
  num(String.raw`Estime le taux de variation instantané de $2^x$ en $x=0$ (2 décimales).`, 0.69, "Estimation centrée ≈ 0.693.", null, 0.01),
  mc(String.raw`Pour $f(x)=x^2-4x$, sur quel intervalle $[0,b]$ le taux de variation moyen est-il 0?`, String.raw`$b=4$`, [String.raw`$b=2$`, String.raw`$b=1$`, String.raw`$b=8$`], "f(0) = f(4) = 0."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=x^4$ sur $[1,2]$.`, 15, "(16 − 1) ÷ 1."),
  tf("La pente de la sécante de a à b est égale à la pente de la sécante de b à a.", true, "Le numérateur et le dénominateur changent tous les deux de signe."),
  num(String.raw`Trouve $b>0$ pour que le taux de variation moyen de $x^2$ sur $[0,b]$ soit 7.`, 7, "b² ÷ b = b."),
  num("La tangente tracée en P passe par (1, 3) et (3, −1). Estime le taux instantané en P.", -2, "−4 ÷ 2.", graph((x) => 3 - 2 * (x - 1) - (x - 1) ** 2, { xmin: -2, xmax: 4, ymin: -6, ymax: 6 }, [P(1, 3, "P"), P(3, -1, false)], { more: [{ f: (x) => -2 * x + 5, color: "green" }] })),
  num(String.raw`La position d'un objet est $s(t)=t^3-3t$ m. Trouve sa vitesse moyenne sur $[0,2]$.`, 1, "s(0) = 0, s(2) = 2."),
];
