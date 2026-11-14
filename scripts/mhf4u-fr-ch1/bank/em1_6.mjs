// 1.6 Pente des tangentes et taux de variation instantané — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  num(String.raw`Une tangente passe par $(0,1)$ et $(2,7)$. Trouve sa pente.`, 3, "6 ÷ 2."),
  tf("Le taux de variation instantané en un point est égal à la pente de la tangente en ce point.", true, "C'est la définition utilisée dans ce chapitre."),
  mc("En un point tournant, le taux de variation instantané est :", "nul", ["positif", "négatif", "non défini"], "La tangente est horizontale."),
  num(String.raw`Trouve la pente de la sécante à $y=x^2$ de $x=1$ à $x=1.1$.`, 2.1, "(1.21 − 1) ÷ 0.1.", null, 0.0001),
  num(String.raw`Estime le taux de variation instantané de $y=x^2$ en $x=1$.`, 2, "Les pentes des sécantes 2.1, 2.01, … s'approchent de 2.", null, 0.05),
  mc("Le taux de variation instantané en P est-il positif, négatif ou nul?", "positif", ["négatif", "nul", "impossible à dire"], "Le graphique monte en P.", graph((x) => -((x - 2) ** 2) + 4, { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 5 }, [P(1, 3, "P")])),
  mc("Quelle sécante donne la meilleure estimation de la pente de la tangente en x = 2?", "de x = 2 à x = 2.001", ["de x = 2 à x = 3", "de x = 2 à x = 2.1", "de x = 0 à x = 2"], "Plus l'intervalle est court, plus l'estimation est proche."),
  num(String.raw`Utilise $[4.9,5.1]$ pour estimer le taux de variation instantané de $f(x)=x^2$ en $x=5$.`, 10, "(26.01 − 24.01) ÷ 0.2.", null, 0.001),
  tf("Une tangente peut traverser la courbe au point de tangence.", true, "p. ex. y = x³ à l'origine."),
  num("Un objet a parcouru 7.22, 8 et 8.82 m à t = 1.9, 2 et 2.1 s. Estime sa vitesse en t = 2 en m/s.", 8, "(8.82 − 7.22) ÷ 0.2.", null, 0.001),
  fill("La pente de la tangente en un point maximal est ___.", ["0", "zéro", "nulle"], "La tangente est horizontale."),
  mc("En quel point le taux de variation instantané est-il négatif?", "A", ["B", "C", "aucun d'eux"], "Le graphique descend en A, est horizontal en B et monte en C.", graph((x) => x * x - 2 * x, { xmin: -1.5, xmax: 3.5, ymin: -2, ymax: 5 }, [P(-1, 3, "A"), P(1, -1, "B"), P(3, 3, "C")])),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=3x-2$ en $x=10$.`, 3, "Le taux d'une droite est sa pente, partout."),
  tf("Le taux de variation instantané d'une fonction constante est 0 partout.", true, "Son graphique est horizontal."),
  num(String.raw`Estime la pente de la tangente à $y=x^3$ en $x=1$ à l'aide de la sécante de $x=1$ à $x=1.01$, puis arrondis à l'entier le plus proche.`, 3, "(1.030301 − 1) ÷ 0.01 = 3.0301."),
  mc("La hauteur est en mètres et le temps en secondes. Les unités du taux de variation instantané sont :", "m/s", ["s/m", "m", "m/s²"], "Unités de sortie par unité d'entrée."),
  num(String.raw`Quelle est la pente de la tangente $y=4x-3$?`, 4, "y = mx + b."),
  mc("L'indicateur de vitesse d'une voiture affiche :", "le taux de variation instantané de la distance", ["le taux de variation moyen sur le trajet", "la distance totale", "le taux de variation de la vitesse"], "La vitesse à un instant donné."),
  num(String.raw`Estime la vitesse en $t=3$ s si $d(t)=t^2$ m.`, 6, "Les pentes des sécantes s'approchent de 6.", null, 0.05),
  tf(String.raw`Le taux de variation moyen sur $[2,2.001]$ est une bonne estimation du taux de variation instantané en 2.`, true, "L'intervalle est très court."),
];

export const M = [
  num(String.raw`Estime le taux de variation instantané de $f(x)=x^3$ en $x=-2$ à l'aide de $[-2.01,-1.99]$.`, 12, "Pente centrée = 12.0001.", null, 0.01),
  num(String.raw`Utilise $\dfrac{f(-3+h)-f(-3)}{h}$ pour trouver la pente exacte de la tangente à $f(x)=x^2$ en $x=-3$.`, -6, "−6 + h → −6."),
  num(String.raw`Trouve la pente exacte de la tangente à $f(x)=3x^2$ en $x=2$.`, 12, "(3(2 + h)² − 12)/h = 12 + 3h → 12."),
  num(String.raw`La hauteur d'une fusée est $h(t)=-5t^2+40t$ m. Trouve sa vitesse exacte en $t=3$.`, 10, "(h(3 + h) − h(3))/h = 10 − 5h → 10."),
  mc(String.raw`Pour $f(x)=x^2$, le quotient de différences $\dfrac{f(a+h)-f(a)}{h}$ se simplifie en :`, String.raw`$2a+h$`, [String.raw`$2a$`, String.raw`$a+h$`, String.raw`$2ah+h^2$`], "(2ah + h²)/h."),
  num(String.raw`Trouve l'ordonnée à l'origine de la tangente à $y=x^2$ en $(2,4)$.`, -4, "Pente 4 : y = 4x − 4."),
  num(String.raw`Estime le taux de croissance de $P(t)=100(1.2)^t$ en $t=2$ (2 décimales).`, 26.25, "Un court intervalle centré donne ≈ 26.25.", null, 0.05),
  num("La droite rouge est tangente à y = 0.5x² en (2, 2). Trouve sa pente.", 2, "(6 − 2) ÷ (4 − 2).", graph((x) => 0.5 * x * x, { xmin: -1, xmax: 5, ymin: -3, ymax: 8 }, [P(2, 2), P(4, 6)], { more: [{ f: (x) => 2 * x - 2, color: "red", a: 0, b: 5 }] })),
  ms(String.raw`Pour quelles valeurs de x le taux de variation instantané de $y=x^3-3x$ est-il négatif? Choisis toutes les bonnes réponses.`, ["x = −2", "x = 0", "x = 0.5", "x = 2"], [1, 2], "Le graphique descend entre ses points tournants x = −1 et x = 1."),
  num(String.raw`Trouve la pente exacte de la tangente à $f(x)=x^2+2x$ en $x=1$.`, 4, "(f(1 + h) − 3)/h = 4 + h."),
  tf(String.raw`$y=x^3$ a un taux de variation instantané de 0 en $x=0$, mais aucun point tournant à cet endroit.`, true, "Le graphique continue de monter en passant par un point où il est horizontal."),
  num("Un réservoir contient 98.01, 100 et 102.01 L à t = 4.95, 5 et 5.05 min. Estime le taux en t = 5 en L/min.", 40, "(102.01 − 98.01) ÷ 0.1.", null, 0.001),
  num(String.raw`Trouve la pente exacte de la tangente à $f(x)=-x^2$ en $x=4$.`, -8, "−8 − h → −8."),
  mc(String.raw`Équation de la tangente à $y=x^2$ en $x=3$ :`, String.raw`$y=6x-9$`, [String.raw`$y=6x+9$`, String.raw`$y=3x$`, String.raw`$y=6x-3$`], "Pente 6 par (3, 9)."),
  num(String.raw`Un objet chute de $d(t)=4.9t^2$ m en $t$ s. Trouve sa vitesse exacte en $t=3$.`, 29.4, "4.9(6 + h) → 29.4.", null, 0.001),
  mc("En quel point le taux de variation instantané de y = x³ est-il le plus grand?", "C", ["A", "B", "ils sont tous égaux"], "Le graphique est le plus abrupt en C.", graph((x) => x ** 3, { xmin: -2, xmax: 2, ymin: -3, ymax: 5 }, [P(-1, -1, "A"), P(0, 0, "B"), P(1.5, 3.375, "C")])),
  num(String.raw`Pour quelle valeur de x la tangente à $f(x)=x^2-6x$ est-elle horizontale?`, 3, "Pente 2a − 6 = 0."),
  tf("Pour une fonction croissante, le taux de variation instantané n'est jamais négatif.", true, "Un taux négatif signifierait que la fonction descend à cet endroit."),
  num(String.raw`Trouve le taux de variation instantané exact de $f(x)=5-x^2$ en $x=-1$.`, 2, "(f(−1 + h) − 4)/h = 2 − h."),
  num(String.raw`Estime le taux de variation instantané de $y=2^x$ en $x=3$ (2 décimales).`, 5.55, "Un court intervalle centré donne ≈ 5.545.", null, 0.01),
];
