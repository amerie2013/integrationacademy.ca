// 4.1 Relations — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";
import { TITLE } from "../l4_1.mjs";

export const TOPIC = TITLE;
const trip = (pts, ymax, xmax, ylabel = "distance (km)", xlabel = "temps (min)", step = { x: 10, y: 2 }) => planeDoc({ view: { xmin: 0, xmax, ymin: 0, ymax }, segs: [{ pts }], xlabel, ylabel, step });

export const Q = [
  num(`Le graphique montre la distance entre une cycliste et sa maison. Quelle est sa plus grande vitesse pendant le trajet, en km/h?`, 36, "Vitesses : 0–20 min 9 km ÷ 1/3 h = 27 km/h; 30–40 min 6 km ÷ 1/6 h = 36 km/h; 40–55 min 3 km ÷ 0.25 h = 12 km/h.", trip([[0, 0], [20, 9], [30, 9], [40, 3], [55, 0]], 10, 60)),
  num(`Le graphique montre la distance entre une cycliste et sa maison pendant un trajet. Quelle distance totale a-t-elle parcourue (km)?`, 18, "9 à l'aller + 6 au retour + 3 au retour = 18 km.", trip([[0, 0], [20, 9], [30, 9], [40, 3], [55, 0]], 10, 60)),
  mc(`Quelle histoire correspond au graphique?`, "marche jusque chez un ami, bavarde, revient à pied une partie du chemin, puis court le reste", ["court jusque chez un ami, bavarde, revient à pied", "s'éloigne à pied, revient à pied, s'éloigne de nouveau à pied", "reste immobile, puis s'éloigne en courant"], "Montée, horizontal, descente douce, descente abrupte jusqu'à 0.", trip([[0, 0], [15, 3], [35, 3], [50, 1.5], [55, 0]], 4, 60, "distance (km)", "temps (min)", { x: 10, y: 1 })),
  num(`Un réservoir est rempli à raison de 25 L/min pendant 12 min, puis vidé à raison de 40 L/min jusqu'à ce qu'il soit vide. Combien de minutes dure toute l'opération?`, 19.5, "300 L entrent; 300 ÷ 40 = 7.5 min pour vider; 12 + 7.5.", null, 0.001),
  ms(`Quelles situations donnent un graphique qui DESCEND à mesure que le temps augmente? Choisis toutes les bonnes réponses.`, ["une bougie qui brûle", "la distance d'une voiture à la maison quand elle rentre", "l'argent économisé chaque semaine", "de la glace qui fond au soleil (masse de glace)", "une plante qui pousse"], [0, 1, 3], "La hauteur, la distance à la maison et la masse de glace diminuent."),
  num(`Une relation comprend (2, 11) et (6, 23) et croît à un taux constant. Interpole y à x = 3.5.`, 15.5, "Taux 3; 11 + 1.5(3) = 15.5.", null, 0.001),
  num(`Une relation comprend (2, 11) et (6, 23) et croît à un taux constant. Extrapole y à x = 0.`, 5, "Taux 3; 11 − 2(3) = 5."),
  tf(`Si un graphique distance-temps a un segment vertical, l'objet a parcouru une certaine distance en un temps nul.`, true, "Ce qui est impossible : les vrais graphiques distance-temps n'ont jamais de segments verticaux."),
  mc(`Le graphique de la distance entre une personne et un mur a un segment qui descend jusqu'à 0 puis remonte. Que s'est-il passé?`, "la personne a marché jusqu'au mur, l'a touché, puis s'en est éloignée", ["la personne s'est arrêtée", "la personne a traversé le mur", "la personne a sauté"], "Une distance de 0 signifie être au mur.", FIG.wall),
  num(`Les temps d'un nageur (s) pour les longueurs 1 à 4 sont 40, 42, 44, 46. Si la régularité se maintient, quel est le temps total en secondes pour 10 longueurs?`, 490, "La longueur n prend 38 + 2n; somme pour n = 1..10 : 380 + 110 = 490."),
  ms(`Quelles relations sont discrètes? Choisis toutes les bonnes réponses.`, ["le nombre de figures d'une suite et le rang de la figure", "le coût de n billets de cinéma", "la hauteur d'une balle lancée en fonction du temps", "le nombre de personnes et le nombre de pizzas nécessaires", "la température en fonction du temps"], [0, 1, 3], "Les dénombrements sont discrets; le temps et la hauteur sont continus."),
  num(`Deux coureurs partent ensemble. Ana court à 5 m/s; Bo court à 4 m/s mais part avec 30 m d'avance. Après combien de secondes Ana a-t-elle 20 m d'avance sur Bo?`, 50, "5t − (4t + 30) = 20 → t = 50."),
  mc(`Un graphique distance-temps est une droite qui passe par (0, 0) et (5, 2) (minutes, km). Quel énoncé est vrai?`, "la vitesse est de 24 km/h", ["la vitesse est de 2.5 km/h", "la vitesse est de 0.4 km/h", "la vitesse change"], "2 km en 5 min = 0.4 km/min = 24 km/h.", FIG.line52),
  num(`Un ascenseur monte de l'étage 2 à l'étage 14 en 30 s, attend 10 s, puis descend à l'étage 5 en 15 s. Quelle est sa vitesse de descente en étages par seconde?`, 0.6, "9 étages en 15 s.", null, 0.001),
  num(`La distance entre une voiture et Toronto est de 380 km à 13 h et de 140 km à 16 h; la voiture roule vers Toronto à vitesse constante. À quelle heure arrivera-t-elle (horloge de 24 h, en heures décimales)?`, 17.75, "80 km/h vers Toronto; 140 ÷ 80 = 1.75 h après 16 h = 17 h 45 = 17.75.", null, 0.01),
  tf(`Extrapoler la taille d'un enfant à partir des âges de 2 à 8 ans donne une prédiction fiable pour l'âge de 40 ans.`, false, "La croissance s'arrête à l'âge adulte : la tendance ne se maintient pas."),
  num(`Le graphique montre la charge de la pile d'un téléphone. En prolongeant la droite, à quel moment (h) atteindra-t-elle 0 %?`, 12.5, "Elle baisse de 8 % par heure à partir de 100 % : 100 ÷ 8 = 12.5.", planeDoc({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 110 }, segs: [{ pts: [[0, 100], [5, 60]] }], xlabel: "temps (h)", ylabel: "charge (%)", step: { x: 2, y: 10 } }), 0.01),
  mc(`Dans quelle paire de variables la variable indépendante est-elle nommée EN DEUXIÈME?`, "ta note à un test et le nombre d'heures d'étude", ["le nombre d'heures travaillées et la paie", "le rayon et l'aire d'un cercle", "le temps et la distance parcourue"], "La note dépend des heures d'étude, nommées en deuxième."),
  num(`Une disposition de tables permet d'asseoir 6 personnes avec 1 table, 10 avec 2, 14 avec 3. Combien de tables faut-il pour 90 personnes?`, 22, "4n + 2 ≥ 90 → n ≥ 22."),
  num(`Le son voyage à environ 343 m/s. Tu vois un éclair et tu entends le tonnerre 4.5 s plus tard. À quelle distance environ se trouve l'orage (m)? (Arrondis au mètre près.)`, 1544, "343 × 4.5 = 1543.5 ≈ 1544.", null, 1),
];
