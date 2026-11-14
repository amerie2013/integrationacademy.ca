// 4.4 Comparer des droites — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`À quelle valeur de x les droites $y=x+3$ et $y=2x$ se rencontrent-elles?`, 3, "x + 3 = 2x."),
  num(String.raw`Quelle est la valeur de y là où $y=x+3$ et $y=2x$ se rencontrent?`, 6, "2(3)."),
  mc(`Quelle droite est la plus inclinée : y = 3x + 1 ou y = 5x − 2?`, "y = 5x − 2", ["y = 3x + 1", "même inclinaison", "impossible à dire"], "5 > 3."),
  mc(`Quelle droite a la plus grande valeur initiale : y = 3x + 10 ou y = 8x + 2?`, "y = 3x + 10", ["y = 8x + 2", "elles sont égales", "impossible à dire"], "10 > 2."),
  tf(String.raw`$y=4x+1$ et $y=4x-6$ se coupent.`, false, "Parallèles : même pente."),
  num(String.raw`Résous $3x-2=x+8$ pour x.`, 5, "2x = 10."),
  mc(`Le point où deux droites se croisent s'appelle le…`, "point d'intersection", ["l'ordonnée à l'origine", "la pente", "l'origine"], "Même x et même y sur les deux droites."),
  num(`Le forfait A coûte 10 + 2x; le forfait B coûte 4x. Pour quelle valeur de x sont-ils égaux?`, 5, "2x = 10."),
  tf(`Au point d'intersection, les deux relations donnent le même y pour le même x.`, true, "C'est le sens d'une intersection."),
  num(`Lis le graphique : quelle est l'abscisse du point d'intersection?`, 2, "Les droites se croisent en (2, 3).", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 8 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: -1, b: 5, color: "red" }], step: { x: 1, y: 1 } })),
  num(String.raw`Trouve x là où $y=-x+7$ et $y=x-1$ se rencontrent.`, 4, "2x = 8."),
  mc(`Option A : 50 + 5h. Option B : 20 + 10h. Laquelle est la moins chère pour 2 heures?`, "B", ["A", "elles sont égales", "aucune des deux"], "A : 60; B : 40."),
  mc(`Option A : 50 + 5h. Option B : 20 + 10h. Laquelle est la moins chère pour 10 heures?`, "A", ["B", "elles sont égales", "aucune des deux"], "A : 100; B : 120."),
  num(`Option A : 50 + 5h. Option B : 20 + 10h. Après combien d'heures coûtent-elles la même chose?`, 6, "5h = 30."),
  tf(`Deux droites de même pente et de même ordonnée à l'origine sont la même droite.`, true, "Tous les points sont communs."),
  num(String.raw`Trouve y là où $y=2x+1$ et $y=-x+10$ se rencontrent.`, 7, "x = 3; 2(3) + 1."),
  mc(`Deux droites ont des pentes de 2 et de −3. Combien de fois se croisent-elles?`, "exactement une fois", ["jamais", "deux fois", "une infinité de fois"], "Pentes différentes : une intersection."),
  num(`La coureuse A part avec 10 m d'avance à 3 m/s; le coureur B part de 0 à 5 m/s. Après combien de secondes B rattrape-t-il A?`, 5, "5t = 3t + 10."),
  mc(`Quand on compare des coûts, l'option qui a le plus petit taux est la moins chère…`, "pour de grandes quantités", ["pour de petites quantités", "toujours", "jamais"], "Sa droite est moins inclinée."),
  num(String.raw`Résous $0.5x+4=2x-2$.`, 4, "1.5x = 6."),
];

export const M = [
  num(String.raw`Trouve l'abscisse du point où $y=\frac12x+2$ et $y=-x+11$ se rencontrent.`, 6, "1.5x = 9."),
  num(String.raw`Trouve l'ordonnée du point d'intersection de $y=\frac12x+2$ et de $y=-x+11$.`, 5, "x = 6; −6 + 11."),
  num(`Centre de conditionnement physique : A = 40 + 30m; B = 100 + 20m. Après combien de mois sont-ils égaux?`, 6, "10m = 60."),
  num(`Deux forfaits de centre de conditionnement physique : A = 40 + 30m; B = 100 + 20m. Quel est le coût au seuil de rentabilité (dollars)?`, 220, "10m = 60, donc m = 6; 40 + 180."),
  mc(`Pour ces centres, lequel est le moins cher pour un abonnement de 12 mois?`, "B", ["A", "ils sont égaux", "aucun des deux"], "A 400; B 340."),
  ms(`Quelles paires de droites se coupent exactement une fois? Choisis toutes les bonnes réponses.`, ["y = 2x + 1 et y = 3x + 1", "y = −x et y = −x + 4", "y = 5 et y = x", "y = 4x − 2 et 8x − 2y = 4"], [0, 2], "La deuxième paire est parallèle; la quatrième paire est la même droite."),
  num(`Deux bougies : A mesure 30 cm et brûle de 3 cm/h; B mesure 20 cm et brûle de 1 cm/h. Après combien d'heures ont-elles la même hauteur?`, 5, "30 − 3t = 20 − t."),
  num(`Lis le graphique : à quelle valeur de x les forfaits coûtent-ils la même chose?`, 150, "Les droites se croisent à 150 minutes.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 70 }, lines: [{ m: 0.1, b: 25, color: "blue" }, { m: 0.2, b: 10, color: "red" }], xlabel: "minutes", ylabel: "coût", step: { x: 50, y: 10 } })),
  num(String.raw`Résous le système en posant les expressions égales : $y=1.5x-3$, $y=-0.5x+5$. Que vaut x?`, 4, "2x = 8."),
  tf(String.raw`Les droites $y=3x+2$ et $2y=6x+4$ se coupent en exactement un point.`, false, "C'est la même droite (une infinité de points)."),
  num(`Location de voiture A : 45 + 0.20d. Location B : 0.35d. Pour quelle distance d sont-elles égales (km)?`, 300, "0.15d = 45."),
  mc(`La location B (0.35d) est moins chère quand…`, "d < 300", ["d > 300", "d = 300 seulement", "jamais"], "Sous la distance du seuil de rentabilité."),
  num(`Ana a 120 dollars et économise 15 dollars par semaine. Ben a 300 dollars et dépense 15 dollars par semaine. Après combien de semaines ont-ils le même montant?`, 6, "120 + 15w = 300 − 15w."),
  num(`Trouve l'abscisse du point d'intersection de y = 3x − 7 et de y = −2x + 8.`, 3, "5x = 15."),
  mc(`Une table : x = 0, 1, 2, 3; A : 5, 8, 11, 14; B : 11, 10, 9, 8. Où A et B sont-ils égaux?`, "x = 1.5, y = 9.5", ["x = 2, y = 9", "x = 1, y = 10", "ils ne se rencontrent jamais"], "3x + 5 = 11 − x → x = 1.5."),
  num(`Deux trains quittent la même gare sur des voies parallèles : l'un à midi à 80 km/h, l'autre à 13 h à 120 km/h. Combien d'heures après midi le deuxième rattrape-t-il le premier?`, 3, "80t = 120(t − 1)."),
  ms(`À l'intersection de deux droites de coût, quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["les deux options coûtent la même chose", "la valeur de x est la quantité du seuil de rentabilité", "les deux droites ont la même pente", "d'un côté, une option est moins chère"], [0, 1, 3], "Les pentes sont différentes (sinon les droites seraient parallèles)."),
  num(String.raw`Pour quelle valeur de $b$ la droite $y=2x+b$ passe-t-elle par l'intersection de $y=x+1$ et de $y=-x+5$?`, -1, "Intersection (2, 3) : 3 = 4 + b."),
  num(`Forfait de téléphone X : 25 + 0.05t; forfait Y : 10 + 0.15t. Pour combien de textos sont-ils égaux?`, 150, "0.10t = 15."),
  mc(`Pour 200 textos, quel forfait (X : 25 + 0.05t, Y : 10 + 0.15t) est le moins cher?`, "X", ["Y", "ils sont égaux", "aucun des deux"], "X 35; Y 40."),
];
