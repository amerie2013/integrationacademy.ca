// 7.2 Appréciation et dépréciation — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch7/bank/em7_2.mjs;
// l'argent s'écrit en « dollars »)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(`Une augmentation de la valeur avec le temps s'appelle…`, "l'appréciation", ["la dépréciation", "l'inflation", "l'intérêt"], "S'apprécier = prendre de la valeur."),
  mc(`Une diminution de la valeur avec le temps s'appelle…`, "la dépréciation", ["l'appréciation", "un rabais", "une retenue"], "Les autos et les téléphones se déprécient."),
  num(`Quel est le facteur de croissance pour une augmentation de 6 %?`, 1.06, "1 + 0.06."),
  num(`Quel est le facteur de décroissance pour une diminution de 25 %?`, 0.75, "1 − 0.25."),
  num(`Un vélo de 500 dollars perd 20 % de sa valeur en un an. Combien vaut-il (en dollars)?`, 400, "500 × 0.8."),
  num(`Une collection de pièces de 1000 dollars prend 10 % de valeur en un an. Combien vaut-elle (en dollars)?`, 1100, "1000 × 1.1."),
  num(`Un article de 200 dollars s'apprécie de 5 % par année pendant 2 ans. Combien vaut-il (en dollars)?`, 220.5, "200 × 1.05²."),
  num(`Un portable de 1000 dollars se déprécie de 30 % par année pendant 2 ans. Combien vaut-il (en dollars)?`, 490, "1000 × 0.7²."),
  mc(`Lequel se déprécie habituellement?`, "une auto neuve", ["un terrain", "un objet de collection rare", "une maison dans une ville en croissance"], "Usure, kilométrage et nouveaux modèles."),
  mc(`Lequel s'apprécie habituellement?`, "un timbre rare en bon état", ["un téléphone intelligent", "des espadrilles que tu portes tous les jours", "un portable"], "Rareté et demande."),
  num(`Un article passe de 50 dollars à 60 dollars. Quelle est l'augmentation en pourcentage?`, 20, "10 ÷ 50."),
  num(`Un article passe de 80 dollars à 60 dollars. Quelle est la diminution en pourcentage?`, 25, "20 ÷ 80."),
  tf(`Une augmentation de 10 % suivie d'une diminution de 10 % ramène à la valeur de départ.`, false, "1.1 × 0.9 = 0.99."),
  num(`Dépréciation linéaire : une machine de 6000 dollars perd 1000 dollars par année. Combien vaut-elle après 3 ans (en dollars)?`, 3000, "6000 − 3000."),
  mc(`Quelle formule modélise une dépréciation de 15 % par année?`, "V = V₀(0.85)ⁿ", ["V = V₀(0.15)ⁿ", "V = V₀(1.15)ⁿ", "V = V₀ − 0.15n"], "Facteur de décroissance 1 − 0.15."),
  tf(`Avec une dépréciation en pourcentage, le montant en dollars perdu chaque année diminue.`, true, "C'est un pourcentage d'une valeur plus petite chaque année."),
  num(`Un tableau d'une valeur de 3000 dollars s'apprécie de 4 % cette année. Combien de dollars gagne-t-il?`, 120, "0.04 × 3000."),
  num(`Écris 0.92 sous forme de diminution en pourcentage.`, 8, "1 − 0.92 = 0.08."),
  mc(`Le prix d'une maison augmente parce que plus de gens veulent habiter dans le quartier. C'est causé par…`, "une demande accrue", ["plus d'usure", "une nouvelle technologie", "l'inflation de la taille de la maison"], "La demande fait monter les prix."),
  num(`Selon la règle de 72, en combien d'années environ une valeur qui croît de 6 % par année double-t-elle?`, 12, "72 ÷ 6."),
];

export const M = [
  num(`Une auto de 32 000 dollars se déprécie de 15 % par année. Combien vaut-elle après 3 ans (au dollar près)?`, 19652, "32 000 × 0.85³ = 19 652.", null, 0.6),
  num(`Une maison d'une valeur de 450 000 dollars s'apprécie de 4 % par année. Combien vaut-elle après 5 ans (au dollar près)?`, 547494, "450 000 × 1.04⁵ ≈ 547 493.81.", null, 1),
  num(`Un article d'une valeur de 800 dollars vaut 648 dollars après 2 ans de dépréciation constante. Quel est le taux annuel (%)?`, 10, "(1 − r)² = 0.81 → 1 − r = 0.9."),
  num(`Une action monte de 20 %, puis baisse de 20 %. Quelle est la variation globale en pourcentage? (Négative pour une perte.)`, -4, "1.2 × 0.8 = 0.96."),
  num(`Dépréciation linéaire : une camionnette de 9000 dollars vaut 0 après 6 ans. Combien perd-elle chaque année (en dollars)?`, 1500, "9000 ÷ 6."),
  num(`Compare après 2 ans : une machine de 10 000 dollars qui perd 2000 dollars par année ou 20 % par année. Combien de plus vaut celle qui perd un pourcentage (en dollars)?`, 400, "6400 − 6000."),
  mc(`Quel graphique montre une dépréciation en pourcentage?`, "une courbe qui descend fortement au début, puis s'aplatit", ["une droite qui descend jusqu'à zéro", "une courbe qui monte de plus en plus vite", "une droite horizontale"], "Décroissance exponentielle."),
  num(`Un téléphone perd 35 % de sa valeur chaque année. Après combien d'années complètes vaut-il moins du quart de son prix?`, 4, "0.65³ ≈ 0.275; 0.65⁴ ≈ 0.179."),
  ms(`Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["l'appréciation utilise un facteur supérieur à 1", "la dépréciation utilise un facteur entre 0 et 1", "une perte de 50 % suivie d'un gain de 50 % ramène au point de départ", "les variations en pourcentage se composent"], [0, 1, 3], "0.5 × 1.5 = 0.75, et non 1."),
  num(`Un objet de collection double de valeur en 9 ans. Selon la règle de 72, quel est son taux annuel approximatif (%)?`, 8, "72 ÷ 9."),
  num(`Lis le graphique : quelle est la valeur après 2 ans (en dollars)?`, 6400, "La courbe commence à 10 000 et perd 20 % par année : 10 000 × 0.8².", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 11000 }, curves: [{ f: (t) => 10000 * 0.8 ** t, color: "red" }], points: [{ x: 0, y: 10000 }, { x: 2, y: 6400 }], step: { x: 1, y: 2000 }, xlabel: "années", ylabel: "valeur" })),
  tf(`Si une auto perd 15 % chaque année, sa valeur finira par atteindre exactement 0 dollar.`, false, "Une perte en pourcentage n'atteint jamais exactement zéro."),
  num(`Un ordinateur de 2400 dollars se déprécie de 25 % par année. Combien de valeur perd-il pendant la deuxième année (en dollars)?`, 450, "Valeur après l'année 1 : 1800; 25 % de 1800."),
  num(`Un tableau acheté 5000 dollars vaut 7200 dollars après 2 ans. Trouve le taux annuel d'appréciation (%).`, 20, "(1 + r)² = 1.44."),
  mc(`Pourquoi beaucoup de gens achètent-ils des autos de 2 ou 3 ans?`, "la dépréciation la plus forte a déjà eu lieu", ["les autos plus vieilles s'apprécient", "les autos neuves ne peuvent pas être assurées", "les autos usagées ne se déprécient pas"], "La plus grande partie de la valeur se perd dans les premières années."),
  num(`Un objet ancien d'une valeur de 1500 dollars s'apprécie de 3 % par année. Combien vaut-il après 10 ans (au cent près)?`, 2015.87, "1500 × 1.03¹⁰.", null, 0.006),
  num(`Un bateau perd 12 % de sa valeur chaque année. Quel pourcentage de sa valeur initiale reste-t-il après 3 ans (1 décimale)?`, 68.1, "0.88³ ≈ 0.6815.", null, 0.06),
  mc(`Une valeur augmente de 25 % une année et diminue de 20 % l'année suivante. La variation globale est de…`, "0 %", ["+5 %", "−5 %", "+45 %"], "1.25 × 0.8 = 1."),
  num(`Dépréciation linéaire de 4500 dollars à 900 dollars sur 6 ans. Quelle est la perte annuelle (en dollars)?`, 600, "3600 ÷ 6."),
  num(`Un placement de 2000 dollars croît de 7 % par année. Combien gagne-t-il au total en 4 ans (au cent près)?`, 621.59, "2000 × 1.07⁴ − 2000.", null, 0.006),
];
