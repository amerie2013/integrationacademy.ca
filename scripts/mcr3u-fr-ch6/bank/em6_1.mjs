// 6.1 Fonctions périodiques et leurs propriétés — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch6/bank/em6_1.mjs)
import { FIG } from "./fig.mjs";
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;
const saw = (p, h, n) => Array.from({ length: n }, (_, i) => ({ pts: [[p * i, 0], [p * (i + 1), h]], color: "violet" }));

export const E = [
  num("Un graphique périodique a un maximum de 18 et un minimum de 6. Quelle est son amplitude?", 6, "(18 − 6)/2.", FIG.p186),
  num("Un graphique périodique a un maximum de 18 et un minimum de 6. Quelle est la valeur de y de son axe?", 12, "(18 + 6)/2.", FIG.p186),
  num("Des sommets consécutifs d'un graphique périodique se trouvent en x = 2 et x = 9. Quelle est la période?", 7, "9 − 2.", FIG.peaks29),
  tf("Tout graphique qui monte et descend est périodique.", false, "Le motif doit se répéter exactement à intervalles réguliers."),
  mc("Laquelle est périodique?", "la position de la trotteuse d'une horloge", ["la hauteur d'une chandelle qui brûle", "une population qui croît", "la vitesse d'une pierre qui tombe"], "L'aiguille revient au même endroit chaque minute."),
  num(S`Une fonction a une période de 5 et \(f(1)=3\). Trouve \(f(21)\).`, 3, "21 − 1 = 20 = 4 périodes."),
  num("Une fonction périodique a l'axe y = 4 et une amplitude de 3. Quel est son maximum?", 7, "4 + 3."),
  num("Une fonction périodique a l'axe y = 4 et une amplitude de 3. Quel est son minimum?", 1, "4 − 3."),
  mc("Qu'est-ce qu'un cycle d'une fonction périodique?", "une répétition complète du motif", ["le point le plus haut", "la distance du max au min", "l'axe horizontal"], "Un cycle est une répétition complète."),
  num("Un motif se répète toutes les 4 s. Combien y a-t-il de cycles en une minute?", 15, "60 ÷ 4."),
  num("Un motif se répète 30 fois par minute. Quelle est sa période en secondes?", 2, "60 ÷ 30."),
  tf("L'amplitude d'une fonction périodique peut être négative.", false, "C'est une distance : (max − min)/2 ≥ 0."),
  num(S`Une fonction périodique a l'image \(-5\le y\le3\). Quelle est son amplitude?`, 4, "(3 − (−5))/2."),
  num(S`Une fonction périodique a l'image \(-5\le y\le3\). Quelle est la valeur de y de son axe?`, -1, "(3 + (−5))/2."),
  num("Des valeurs relevées toutes les 2 s sont 3, 7, 3, −1, 3, 7, 3, −1. Quelle est la période en secondes?", 8, "Le motif 3, 7, 3, −1 prend 4 lectures = 8 s."),
  num(S`Pour tout x, \(f(x+6)=f(x)\), et aucune translation plus petite ne convient. Quelle est la période?`, 6, "C'est la définition de la période."),
  mc("Qu'est-ce que l'axe d'une fonction périodique?", "la droite horizontale à mi-chemin entre le maximum et le minimum", ["l'axe des x, toujours", "la droite qui passe par le premier maximum", "la droite verticale au début d'un cycle"], "y = (max + min)/2."),
  tf("Un motif en dents de scie qui se répète exactement est périodique.", true, "Une fonction périodique n'a pas besoin d'être une onde lisse."),
  num("Lis la période de la fonction représentée.", 10, "D'un sommet à l'autre.", waveD((x) => 2 * sin(36 * x) + 3, { xmin: 0, xmax: 30, ymin: 0, ymax: 6 }, { x: 2, y: 1 }, { pts: [[2.5, 5], [12.5, 5]] })),
  num("Lis l'amplitude de la fonction représentée.", 5, "Max 4, min −6.", waveD((x) => 5 * cos(60 * x) - 1, { xmin: 0, xmax: 12, ymin: -7, ymax: 5 }, { x: 1, y: 1 })),
];

export const M = [
  num(S`Une fonction a une période de 7 et \(f(3)=-2\). Trouve \(f(73)\).`, -2, "73 − 3 = 70 = 10 périodes."),
  num(S`Une fonction a une période de 12 et \(f(0)=5\). Trouve \(f(-36)\).`, 5, "−36 se trouve 3 périodes à gauche."),
  num("Un cœur bat 72 fois par minute. Quelle est la période en secondes (2 décimales)?", 0.83, "60 ÷ 72.", null, 0.006),
  num("Des marées hautes ont lieu à 3 h 00 et à 15 h 24. Quelle est la période en heures (nombre décimal)?", 12.4, "12 h 24 min = 12.4 h.", null, 0.001),
  num("Des marées hautes ont lieu à 3 h 00 et à 15 h 24 le jour 1. Combien d'heures après minuit du jour 1 la marée haute suivante a-t-elle lieu (nombre décimal)?", 27.8, "15.4 + 12.4.", null, 0.001),
  num("Un graphique périodique a un max de 3.6 et un min de −1.2. Quelle est la valeur de y de son axe?", 1.2, "(3.6 − 1.2)/2.", FIG.p36, 0.001),
  num("Un graphique périodique a un max de 3.6 et un min de −1.2. Quelle est son amplitude?", 2.4, "(3.6 + 1.2)/2.", FIG.p36, 0.001),
  ms("Lesquelles sont périodiques? Choisis toutes les bonnes réponses.", ["les phases de la Lune", "les marées dans un port", "la masse d'une personne au cours de sa vie", "les heures de lever du soleil sur plusieurs années", "le kilométrage indiqué par l'odomètre d'une voiture"], [0, 1, 3], "La masse et l'odomètre ne se répètent pas."),
  tf("Si une fonction a une période de 4, alors f(x + 8) = f(x) pour tout x.", true, "Deux périodes."),
  num("Lectures toutes les 0.5 s : 2, 4, 6, 4, 2, 4, 6, 4, 2. Quelle est la période en secondes?", 2, "4 lectures × 0.5 s."),
  num("Une fonction sinusoïdale a un maximum en t = 3 et une période de 10. Quand arrive le minimum suivant?", 8, "Une demi-période plus tard."),
  num("Une fonction sinusoïdale a un maximum en t = 3 et une période de 10. Quand coupe-t-elle ensuite son axe?", 5.5, "Un quart de période plus tard.", null, 0.001),
  mc("Un graphique périodique a un max de 10, un min de 2 et une période de 6. Quel énoncé est FAUX?", "son amplitude est 8", ["son axe est y = 6", "son image est 2 ≤ y ≤ 10", "il se répète toutes les 6 unités"], "L'amplitude est (10 − 2)/2 = 4.", FIG.p102),
  num("La durée du jour se répète une fois par année. Combien de cycles complets y a-t-il en 3 ans?", 3, "Un par année."),
  num("Une roue fait 20 tours par minute. Quelle est sa période en secondes?", 3, "60 ÷ 20."),
  num("Une fonction a une période de 0.5 s. Combien de cycles fait-elle en 7 s?", 14, "7 ÷ 0.5."),
  tf("Toute fonction périodique est sinusoïdale.", false, "Les motifs en dents de scie et les impulsions sont périodiques sans être sinusoïdaux."),
  num("Une fonction périodique a une amplitude de 4.5 et un minimum de −2. Quel est son maximum?", 7, "−2 + 2 × 4.5."),
  num("Lis la période du graphique en dents de scie.", 3, "Chaque rampe prend 3 unités.", waveD([], { xmin: 0, xmax: 12, ymin: -1, ymax: 6 }, { x: 1, y: 1 }, { segs: saw(3, 5, 4) })),
  num(S`Le graphique a une période de 4. Utilise-le pour trouver \(f(13)\).`, 3.5, "13 = 3 × 4 + 1 : lis f(1).", waveD((x) => 1.5 * sin(90 * x) + 2, { xmin: 0, xmax: 8, ymin: 0, ymax: 4 }, { x: 1, y: 0.5 }, { pts: [[1, 3.5]] }), 0.001),
];
