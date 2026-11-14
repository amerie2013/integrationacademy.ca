// 3.6 Problèmes d'optimisation — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  num("La somme de deux nombres est 20. Quel est leur plus grand produit possible?", 100, "x(20 − x) : x = 10."),
  num("Un rectangle a un périmètre de 40 m. Quelle est sa plus grande aire possible (m²)?", 100, "Un carré de 10 sur 10."),
  mc("Dans un problème d'optimisation, la première étape consiste habituellement à :", "tracer un schéma et nommer les variables", ["dériver", "vérifier les extrémités", "résoudre f′ = 0"], "On modélise d'abord."),
  tf("On utilise la contrainte pour écrire la fonction objectif en fonction d'une seule variable.", true, "On substitue pour éliminer une variable."),
  num("Le produit de deux nombres positifs est 49. Quelle est leur plus petite somme possible?", 14, "x + 49/x : x = 7."),
  num("Un rectangle de périmètre 24 cm a la plus grande aire lorsque sa largeur mesure combien de cm?", 6, "Un carré."),
  fill("La fonction que l'on maximise ou que l'on minimise s'appelle la fonction ___.", ["objectif", "objective"], "Par opposition à la contrainte."),
  num(S`Pour quelle valeur de $x$ la fonction $P(x)=-x^2+50x$ est-elle la plus grande?`, 25, "−2x + 50 = 0."),
  tf("Dans un problème d'optimisation, la meilleure valeur peut être atteinte à une extrémité du domaine.", true, "Compare toujours les extrémités."),
  num(S`Pour quel prix $p$ la fonction $R(p)=p(100-2p)$ est-elle la plus grande?`, 25, "100 − 4p = 0."),
  num("Voici le graphique de l'aire A(x) = x(30 − x). Quelle est la plus grande aire?", 225, "Le sommet est en x = 15.", graph((x) => x * (30 - x), { xmin: 0, xmax: 31, ymin: 0, ymax: 260 }, [P(15, 225)], { a: 0, b: 30, step: { x: 5, y: 25 } })),
  mc("Un rectangle a un périmètre de 40. Quel est le domaine de sa largeur x?", S`$0\le x\le20$`, [S`$0\le x\le40$`, S`$x\ge0$`, S`$0\le x\le10$`], "La largeur plus la longueur vaut 20."),
  num(S`Pour $x\gt0$, trouve la valeur minimale de $x+\frac{81}{x}$.`, 18, "x = 9."),
  num("Un rectangle a une aire de 64 m². Quel est son plus petit périmètre possible (m)?", 32, "Un carré de 8 sur 8."),
  tf("Pour trouver le point le plus proche d'un autre point, on peut plutôt minimiser le carré de la distance.", true, "Le point qui minimise est le même."),
  num("On découpe des carrés de côté x dans les coins d'un carton de 6 cm sur 6 cm pour faire une boîte ouverte. Quel est le plus grand volume (cm³)?", 16, "V = x(6 − 2x)² : x = 1."),
  num(S`Un coût est $C(x)=x^2-40x+500$. Quel est le coût minimal?`, 100, "x = 20."),
  num("Voici le graphique du volume V(x) = x(10 − 2x)² d'une boîte ouverte. Pour quelle valeur de x est-il le plus grand? (4 décimales)", 1.6667, "V′ = (10 − 2x)(10 − 6x) : x = 5/3.", graph((x) => x * (10 - 2 * x) ** 2, { xmin: 0, xmax: 5.2, ymin: 0, ymax: 85 }, [P(5 / 3, (5 / 3) * (20 / 3) ** 2)], { a: 0, b: 5, step: { x: 0.5, y: 10 } }), 0.0005),
  mc("Comment justifier qu'un nombre critique donne le maximum absolu sur un intervalle fermé?", "en comparant sa valeur avec les valeurs aux extrémités", ["en montrant que f′ = 0 en ce point", "en montrant que f y est positive", "c'est toujours automatique"], "Test des candidats."),
  num(S`La hauteur d'une balle est $h(t)=-5t^2+20t+2$ m. Quelle est sa hauteur maximale?`, 22, "t = 2."),
];

export const M = [
  num("Avec 200 m de clôture, on forme un enclos rectangulaire le long d'une rivière (aucune clôture du côté de la rivière). Quelle est la plus grande aire (m²)?", 5000, "A = x(200 − 2x) : x = 50."),
  num("Une boîte ouverte à base carrée contient 4000 cm³. Quelle est la plus petite quantité de matériau (cm²)?", 1200, "A = x² + 16000/x : x = 20."),
  num(S`Un cylindre fermé contient $250\pi$ cm³. Quel rayon (cm) minimise son aire totale?`, 5, "r³ = V/(2π) = 125."),
  num(S`Pour $x\gt0$, trouve le minimum de $x+\frac1x$.`, 2, "x = 1."),
  num(S`Un rectangle a un sommet à l'origine et le sommet opposé sur $y=27-x^2$ ($x\gt0$). Trouve sa plus grande aire.`, 54, "A = x(27 − x²) : x = 3."),
  num(S`Trouve la plus courte distance de $(2,0)$ à la courbe $y=\sqrt x$ (4 décimales).`, 1.3229, "D² = (x − 2)² + x : x = 1.5.", null, 0.0005),
  num("Un théâtre vend 500 billets à 20 dollars; chaque baisse de 1 dollar permet d'en vendre 50 de plus. Quel est le revenu maximal (dollars)?", 11250, "R = (20 − n)(500 + 50n) : n = 5, prix de 15."),
  num("L'aire d'un enclos adossé à une grange est A(x) = x(80 − 2x) (graphique ci-contre). Quelle est la plus grande aire?", 800, "A′ = 80 − 4x = 0 en x = 20.", graph((x) => x * (80 - 2 * x), { xmin: 0, xmax: 42, ymin: 0, ymax: 900 }, [P(20, 800)], { a: 0, b: 40, step: { x: 5, y: 100 } })),
  num("La somme de deux nombres positifs est 16. Quelle est la plus petite somme possible de leurs carrés?", 128, "x² + (16 − x)² : x = 8."),
  num("La différence entre deux nombres est 8. Quel est leur plus petit produit possible?", -16, "x(x − 8) : x = 4."),
  num("Une boîte ouverte à base carrée est faite de 108 m² de matériau. Quel est son plus grand volume (m³)?", 108, "V = x(108 − x²)/4 : x = 6."),
  mc("Sur un domaine ouvert, une fonction a un seul nombre critique, et c'est un minimum relatif. Il s'agit alors :", "du minimum absolu", ["seulement d'un minimum relatif", "du maximum absolu", "d'aucun extremum"], "La fonction descend avant ce point et monte après."),
  num(S`La somme des nombres positifs $x$ et $y$ est 10. Trouve la valeur de $y$ qui maximise $xy^2$ (4 décimales).`, 6.6667, "y²(10 − y) : y = 20/3.", null, 0.0005),
  num("Une agricultrice utilise 1000 m de clôture pour un rectangle divisé en deux enclos par une clôture parallèle à un côté (3 côtés de longueur x). Quelle est la plus grande aire totale (m²)?", 41666.67, "A = x(1000 − 3x)/2 : x = 500/3.", null, 1),
  num("Une canette fermée contient 400 cm³. Voici le graphique de son aire totale C(r) = 2πr² + 800/r. Quel rayon la minimise (cm, 3 décimales)?", 3.169, "r³ = 200/(2π).", graph((r) => 2 * Math.PI * r * r + 800 / r, { xmin: 0, xmax: 8, ymin: 0, ymax: 700 }, [P(3.169, 2 * Math.PI * 3.169 ** 2 + 800 / 3.169)], { a: 1, b: 8, step: { x: 1, y: 100 } }), 0.005),
  tf("Pour une somme fixe, le produit de deux nombres positifs est le plus grand lorsqu'ils sont égaux.", true, "x(S − x) atteint son maximum en x = S/2."),
  num("Quelle est la plus grande aire d'un rectangle inscrit dans un cercle de rayon 10?", 200, "Un carré dont la diagonale mesure 20."),
  num(S`Un trajet de 300 km en voiture coûte $30+\frac{v^2}{120}$ dollars l'heure à $v$ km/h. Quelle vitesse minimise le coût total?`, 60, "Total 300(30/v + v/120) : v² = 3600."),
  num("Un triangle rectangle a une hypoténuse de 10. Quelle est sa plus grande aire possible?", 25, "Des cathètes de 5√2 chacune."),
  num(S`Le coût moyen est $A(x)=0.02x+10+\frac{800}{x}$. Quelle est sa valeur minimale?`, 18, "x = 200 : 4 + 10 + 4."),
];
