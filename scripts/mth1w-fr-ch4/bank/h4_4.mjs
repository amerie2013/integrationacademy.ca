// 4.4 Comparer des droites — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l4_4.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(`Trois centres de conditionnement physique : A = 60 + 25m, B = 150 + 15m, C = 35m. Pour un abonnement de 7 mois, combien coûte le centre le moins cher (dollars)?`, 235, "A 235, B 255, C 245."),
  num(`Trois centres de conditionnement physique : A = 60 + 25m, B = 150 + 15m, C = 35m. Après combien de mois B devient-il le moins cher des trois?`, 10, "B = A à 9 (285 chacun); B < A après 9, et B < C après 7.5; donc à partir du mois 10, B est le moins cher."),
  num(`Un bateau quitte le port à 9 h 00 à 18 km/h. Un bateau plus rapide part à 9 h 30 à 27 km/h sur le même trajet. À quelle heure (heures décimales, horloge de 24 h) le rattrape-t-il?`, 10.5, "18t = 27(t − 0.5) → t = 1.5 h après 9 h 00.", null, 0.01),
  num(`Deux droites se rencontrent en (4, 9). L'une est y = 2x + 1. L'autre a une pente de −0.5. Quelle est son ordonnée à l'origine?`, 11, "9 = −2 + b."),
  ms(`Le graphique montre deux forfaits. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["les forfaits coûtent la même chose à 400 km", "la droite la plus inclinée a le plus grand taux", "le forfait B est moins cher pour 600 km", "le forfait A a le plus grand coût fixe"], [0, 1, 2], "A : 0.4d + 20 (plus inclinée); B : 0.25d + 80. Égaux à 400 km; à 600 : A 260, B 230; B a le plus grand coût fixe.", planeDoc({ view: { xmin: 0, xmax: 700, ymin: 0, ymax: 300 }, lines: [{ m: 0.4, b: 20, color: "blue", label: "A", lx: 560 }, { m: 0.25, b: 80, color: "red", label: "B", lx: 620 }], xlabel: "distance (km)", ylabel: "coût", step: { x: 100, y: 50 } })),
  num(`Maya rame à 6 km/h vers l'aval à partir d'un quai; Liam part 30 min plus tard d'un point situé à 9 km en aval du quai et rame vers le quai à 4 km/h. Combien d'heures après le départ de Maya se rencontrent-ils?`, 1.1, "Maya : 6t; Liam : 9 − 4(t − 0.5) = 11 − 4t; 6t = 11 − 4t → t = 1.1.", null, 0.001),
  num(String.raw`Les droites $y=kx+3$ et $y=2x-5$ se rencontrent à $x=4$. Trouve $k$.`, 0, "À x = 4, la deuxième donne 3, donc 4k + 3 = 3 → k = 0."),
  tf(`Si deux droites de coût se coupent à une valeur de x négative, une option est moins chère dans toutes les situations réelles.`, true, "Pour x ≥ 0, les droites ne se croisent jamais, donc l'une est toujours au-dessus de l'autre."),
  num(`Salaire A : 2400 dollars par mois + 3 % des ventes. Salaire B : 1800 + 5 % des ventes. Au-dessus de quel montant de ventes mensuelles B paie-t-il plus (dollars)?`, 30000, "0.02s = 600."),
  num(`Deux réservoirs : A contient 500 L et se vide de 20 L/min; B contient 80 L et se remplit de 15 L/min. Après combien de minutes contiennent-ils la même quantité?`, 12, "500 − 20t = 80 + 15t."),
  mc(`Forfait A = 0.25t + 20 et forfait B = 0.25t + 35. Quel énoncé est correct?`, "B coûte toujours 15 dollars de plus", ["ils coûtent la même chose à t = 60", "A devient plus cher après 60 textos", "ils se croisent une fois"], "Droites parallèles : l'écart reste de 15."),
  num(`Les droites y = 2x + 3, y = −x + 9 et y = mx − 2 passent toutes par un même point. Trouve m.`, 4.5, "Les deux premières se rencontrent en (2, 7); 7 = 2m − 2, donc 2m = 9.", null, 0.001),
  num(`Une école peut louer l'autobus A pour 400 dollars plus 3 dollars par km, ou l'autobus B pour 250 dollars plus 4.50 dollars par km. Pour un aller-retour de 2 × 70 km, combien l'option la moins chère fait-elle économiser (dollars)?`, 60, "140 km : A 820, B 880."),
  ms(`Quels systèmes n'ont AUCUNE solution? Choisis toutes les bonnes réponses.`, ["y = 3x − 1, y = 3x + 4", "2x + y = 5, y = −2x + 1", "y = x, y = −x", "y = 0.5x + 2, 2y − x = 4"], [0, 1], "Pentes égales et ordonnées à l'origine différentes; la dernière paire est la même droite."),
  num(`Un coureur part 200 m derrière une marcheuse. Le coureur va à 4 m/s, la marcheuse à 1.5 m/s. Combien de mètres le coureur parcourt-il avant de rattraper la marcheuse?`, 320, "4t = 200 + 1.5t → t = 80 s; 4 × 80."),
  num(String.raw`Pour quelle valeur de $k$ les droites $y=(k-1)x+2$ et $y=3x-7$ sont-elles parallèles?`, 4, "k − 1 = 3."),
  num(`Une table montre A : (0, 18), (2, 14), (4, 10) et B : (0, 3), (2, 6), (4, 9). À quelle valeur de x A et B sont-ils égaux (nombre décimal)?`, 4.2857, "A = 18 − 2x, B = 3 + 1.5x; 3.5x = 15 → x ≈ 4.29.", null, 0.006),
  mc(`Pourquoi un graphique ne peut-il qu'estimer l'intersection de 0.15x + 22 et de 0.4x + 9?`, "le croisement (x = 52) peut ne pas tomber exactement sur une ligne du quadrillage", ["les droites sont parallèles", "les graphiques sont toujours faux", "les pentes sont négatives"], "L'algèbre donne la valeur exacte : 0.25x = 13 → x = 52."),
  num(`Un parc de glissades d'eau : laissez-passer d'un jour à 45 dollars, ou laissez-passer de saison à 180 dollars plus 6 dollars par visite. Combien de visites rendent le laissez-passer de saison moins cher?`, 5, "45v > 180 + 6v → v > 4.6, donc 5 visites."),
  num(`Deux droites se coupent en (−3, 5). L'une a une pente de 2; l'autre a une ordonnée à l'origine de 8. Quelle est la pente de la deuxième droite?`, 1, "5 = −3m + 8 → m = 1."),
];
