// 4.1 Relations — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";

const trip = (pts, ymax = 10, xmax = 60) => planeDoc({ view: { xmin: 0, xmax, ymin: 0, ymax }, segs: [{ pts }], xlabel: "temps (min)", ylabel: "distance (km)", step: { x: 10, y: 2 } });

export const E = [
  mc(`Le coût d'une pizza dépend du nombre de garnitures. Quelle est la variable dépendante?`, "le coût", ["le nombre de garnitures", "la taille de la boîte", "aucune des deux"], "Le coût réagit aux garnitures choisies."),
  mc(`Quel axe montre la variable indépendante?`, "l'axe horizontal", ["l'axe vertical", "n'importe quel axe", "aucun axe"], "Indépendante : horizontal; dépendante : vertical."),
  tf(`Le nombre d'élèves dans un autobus est une variable continue.`, false, "Les élèves se comptent : discrète."),
  tf(`La température d'un four au fil du temps est continue.`, true, "La température et le temps peuvent prendre n'importe quelle valeur intermédiaire."),
  mc(`Quelle relation devrait être représentée par des points séparés?`, "le coût de n billets de cinéma", ["la hauteur d'un arbre qui pousse", "la distance parcourue par une voiture au fil du temps", "l'eau dans une baignoire qui se remplit"], "Les billets se comptent (discrète)."),
  num(`Un centre de conditionnement physique demande C = 30 + 12m dollars pour m mois. Quel est le coût pour 5 mois?`, 90, "30 + 60 = 90."),
  num(`Une plante mesure 6 cm et pousse de 2 cm par semaine. Quelle est sa hauteur après 4 semaines (cm)?`, 14, "6 + 8 = 14."),
  mx(`Un laissez-passer de cinéma coûte 8 dollars plus 11 dollars par film. Écris une expression du coût de n films.`, "8+11*n", "8 + 11n."),
  mc(`Sur un graphique distance-temps, un segment horizontal signifie…`, "la personne ne bouge pas", ["la personne se déplace vite", "la personne revient", "le temps s'est arrêté"], "La distance ne change pas."),
  mc(`Sur un graphique distance-temps, un segment plus abrupt signifie…`, "une vitesse plus grande", ["une vitesse plus petite", "aucun mouvement", "un retour vers le départ"], "Plus de distance dans le même temps."),
  num(`Lis le graphique : à quelle distance de la maison la personne se trouve-t-elle à 20 min (km)?`, 8, "La droite atteint 8 km à 20 min.", trip([[0, 0], [20, 8], [40, 8], [60, 0]])),
  num(`Le graphique montre une personne qui se déplace à vitesse constante. Quelle est sa vitesse en km/min?`, 0.4, "8 ÷ 20 = 0.4.", FIG.walk, 0.001),
  tf(`Estimer une valeur entre deux données s'appelle extrapoler.`, false, "C'est interpoler; extrapoler va au-delà des données."),
  mc(`Lequel est un exemple d'extrapolation?`, "prédire la taille de l'an prochain à partir des données de cette année", ["estimer la hauteur un jour situé entre deux mesures", "lire une valeur dans une table", "placer un point"], "Extrapoler, c'est prédire au-delà des données connues."),
  num(`Un taxi demande C = 4 + 2d. Quel est le coût d'une course de 7 km (dollars)?`, 18, "4 + 14 = 18."),
  mc(`Une table donne x = 1, 2, 3 et y = 10, 20, 30. Quelle équation convient?`, "y = 10x", ["y = x + 10", "y = 10 + x²", "y = x ÷ 10"], "Chaque y vaut 10 fois x."),
  tf(`Dans « la hauteur d'une bougie dépend du temps pendant lequel elle brûle », le temps est la variable indépendante.`, true, "Le temps est contrôlé; la hauteur réagit."),
  mc(`Quelle situation est une relation entre deux variables?`, "le coût de l'essence et le nombre de litres", ["la couleur d'une voiture", "une seule note de test", "le nom d'une ville"], "Deux quantités qui changent ensemble."),
  num(`De l'eau remplit un réservoir vide à raison de 15 L/min. Combien de litres y a-t-il après 8 minutes?`, 120, "15 × 8."),
  mc(`Un graphique de la distance à la maison DESCEND. La personne…`, "revient vers la maison", ["s'éloigne rapidement", "est immobile", "monte une côte"], "La distance à la maison diminue."),
];

export const M = [
  num(`Décris le trajet : quelle est la vitesse au retour (km/min)?`, 0.4, "8 km en 20 min (de 40 à 60).", trip([[0, 0], [20, 8], [40, 8], [60, 0]]), 0.001),
  num(`Pendant combien de temps la personne du graphique reste-t-elle immobile (min)?`, 15, "Horizontal de 15 à 30 min.", trip([[0, 0], [15, 6], [30, 6], [50, 0]])),
  ms(`Quelles variables sont continues? Choisis toutes les bonnes réponses.`, ["le temps pour courir 100 m", "le nombre d'animaux de compagnie", "la longueur d'un poisson", "les buts marqués dans un match", "le volume de pluie"], [0, 2, 4], "Les mesures sont continues; les dénombrements sont discrets."),
  mx(`Une piscine contient 2000 L et se vide à raison de 50 L/min. Écris une expression du volume après t minutes.`, "2000-50*t", "Valeur de départ moins taux × temps."),
  num(`Avec V = 2000 − 50t, après combien de minutes la piscine est-elle vide?`, 40, "50t = 2000."),
  num(`Un semis mesure 4 cm le jour 3 et 10 cm le jour 9, et pousse régulièrement. Interpole sa hauteur le jour 6 (cm).`, 7, "1 cm par jour : 4 + 3 = 7."),
  num(`Un semis mesure 4 cm le jour 3 et 10 cm le jour 9, et pousse régulièrement. Extrapole sa hauteur le jour 20 (cm).`, 21, "1 cm par jour : 4 + 17 = 21 (moins fiable)."),
  mc(`Quelle forme de graphique correspond à « s'éloigne lentement à pied, puis revient à la maison en courant »?`, "montée douce, puis descente abrupte jusqu'à 0", ["montée abrupte, puis descente douce", "montée douce, puis horizontal", "descente abrupte, puis montée abrupte"], "S'éloigner lentement : montée douce; revenir vite : descente abrupte."),
  tf(`La hauteur d'une balle lancée se représente mieux par des points séparés.`, false, "Le temps est continu : trace une courbe lisse."),
  num(`C = 25 + 0.15k pour k kilomètres. Combien de km donnent un coût de 40 dollars?`, 100, "0.15k = 15."),
  mc(`On représente le coût de n billets de concert. Pourquoi ne pas relier les points?`, "on ne peut pas acheter une fraction de billet", ["la droite serait trop abrupte", "les billets sont continus", "le graphique serait courbe"], "La relation est discrète."),
  num(`Une coureuse passe de 600 m à 1500 m entre t = 3 min et t = 6 min. Quelle est sa vitesse en m/min?`, 300, "900 ÷ 3."),
  ms(`Quels énoncés sur le graphique sont vrais? Choisis toutes les bonnes réponses.`, ["la personne s'arrête 10 minutes", "le retour est plus rapide que l'aller", "la plus grande distance est 6 km", "le trajet complet dure 30 minutes"], [0, 1, 2], "Horizontal de 20 à 30 min (10 min); retour en 10 min contre aller en 20 min (plus rapide); maximum de 6 km; le trajet se termine à 40 min, pas à 30.", trip([[0, 0], [20, 6], [30, 6], [40, 0]], 8, 45)),
  num(`Une gardienne d'enfants gagne 12 dollars plus 15 dollars l'heure. Combien gagne-t-elle pour 3.5 heures?`, 64.5, "12 + 52.5.", null, 0.001),
  mc(`Dans une relation entre la longueur du côté d'un carré et son aire, quelle variable est indépendante?`, "la longueur du côté", ["l'aire", "les deux", "aucune des deux"], "L'aire dépend du côté."),
  num(`Un train parcourt 240 km en 3 h à vitesse constante. Quelle distance parcourt-il en 1.25 h (km)?`, 100, "80 km/h × 1.25."),
  tf(`L'interpolation est habituellement plus fiable que l'extrapolation.`, true, "Elle reste à l'intérieur des données connues."),
  mx(`Une école commande des t-shirts : 60 dollars pour le motif plus 9 dollars par t-shirt. Écris une expression pour s t-shirts.`, "60+9*s", "60 + 9s."),
  num(`À partir de l'expression 60 + 9s, combien de t-shirts coûtent exactement 357 dollars?`, 33, "9s = 297."),
  mc(`La table montre les heures 0, 1, 2, 3 et la charge de la pile 100, 92, 84, 76 (%). Quel énoncé est vrai?`, "la charge baisse de 8 % chaque heure", ["la charge double chaque heure", "la charge est constante", "la charge augmente de 8 % chaque heure"], "Chaque heure : −8."),
];
