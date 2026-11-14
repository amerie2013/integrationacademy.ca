// 7.1 Prendre des décisions financières — 20 questions difficiles (miroir de ../../mth1w-ch7/bank/h7_1.mjs;
// l'argent s'écrit en « dollars »)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l7_1.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(`Riz : 900 g pour 3.69 dollars ou 2.5 kg pour 8.99 dollars. Combien économise-t-on par kg en achetant le plus gros sac (au cent près)?`, 0.5, "4.10 − 3.596 ≈ 0.50.", null, 0.006),
  num(`Un magasin accorde 25 % de rabais, puis encore 20 % sur le prix soldé. Un deuxième magasin accorde 45 % de rabais. Combien de dollars de plus le premier magasin demande-t-il pour un article de 200 dollars (avant taxe)?`, 10, "200 × 0.6 = 120 contre 200 × 0.55 = 110."),
  num(`Après un rabais de 30 % et la TVH de 13 %, un manteau coûte 110.74 dollars. Quel était le prix initial (en dollars)?`, 140, "110.74 ÷ 1.13 ÷ 0.7."),
  num(`Forfait A : 25 dollars pour 5 Go plus 6 dollars par Go supplémentaire. Forfait B : 55 dollars, illimité. Pour combien de Go au total coûtent-ils la même chose?`, 10, "25 + 6(g − 5) = 55 → g = 10."),
  num(`Trois centres : A = 50 + 20m, B = 150 + 10m, C = 30m (en dollars, m mois). À partir de combien de mois d'abonnement B devient-il le moins cher des trois? (Donne le plus petit nombre entier de mois pour lequel B est strictement le moins cher.)`, 11, "B < A quand m > 10; B < C quand m > 7.5. Donc à partir de 11 mois."),
  num(`Un portable coûte 1299 dollars plus la TVH, ou 24 versements mensuels de 64 dollars (taxe incluse). Combien le plan de paiement coûte-t-il de plus (au cent près)?`, 68.13, "1299 × 1.13 = 1467.87; 24 × 64 = 1536.", null, 0.006),
  num(`Il y a 10 ans, les prix représentaient 82 % des prix d'aujourd'hui. Quelle était l'inflation annuelle moyenne (en pourcentage, 1 décimale)?`, 2, "(1/0.82)^(1/10) ≈ 1.0200.", null, 0.06),
  num(`Les salaires augmentent de 2.5 % par année et les prix de 3.5 % par année. Après 6 ans, de quel pourcentage le pouvoir d'achat a-t-il baissé (1 décimale)?`, 5.7, "(1.025/1.035)⁶ ≈ 0.9434, une baisse d'environ 5.7 %.", null, 0.06),
  mc(`Lis le graphique. Pour 30 Go, quel forfait est le moins cher et de combien?`, "B, de 5 dollars", ["A, de 5 dollars", "B, de 15 dollars", "ils sont égaux"], "A = 60; B = 10 + 1.5(30) = 55.", planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 90 }, lines: [{ m: 0, b: 60, color: "blue", label: "A", lx: 3 }, { m: 1.5, b: 10, color: "red", label: "B", lx: 40 }], step: { x: 10, y: 10 }, xlabel: "Go", ylabel: "coût" })),
  ms(`Une offre « achetez maintenant, payez plus tard » pour un téléviseur de 900 dollars : aucun intérêt si le montant est payé d'ici 12 mois; sinon, un intérêt de 29.9 % est exigé à partir de la date d'achat. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["payé d'ici 12 mois, il coûte 900 dollars", "manquer l'échéance peut ajouter des centaines de dollars", "c'est toujours moins cher que de payer comptant", "il est important de lire les conditions"], [0, 1, 3], "Ce n'est jamais moins cher que de payer comptant."),
  num(`Un paquet de 12 boissons coûte 7.99 dollars; un paquet de 24 coûte 14.49 dollars, mais il est à 20 % de rabais cette semaine. Trouve le prix par boisson de la meilleure offre (au cent près).`, 0.48, "14.49 × 0.8 ÷ 24 ≈ 0.483.", null, 0.006),
  num(`Une location d'auto coûte 49 dollars par jour plus 0.18 dollar/km au-delà des 100 premiers km gratuits. L'option illimitée coûte 89 dollars par jour. Au-delà de combien de km l'option illimitée est-elle moins chère (au km près)?`, 322, "49 + 0.18(k − 100) = 89 → k ≈ 322.2.", null, 0.6),
  tf(`Si l'inflation est de 2 % par année, les prix doublent à peu près en 36 ans environ.`, true, "Règle de 72 : 72 ÷ 2 = 36."),
  num(`Une famille dépense 220 dollars par semaine en épicerie. Avec une inflation alimentaire de 4 %, combien de plus dépensera-t-elle en un an (52 semaines) après une année d'inflation (en dollars)?`, 457.6, "220 × 0.04 × 52."),
  mc(`Un placement promet « un rendement garanti de 25 % chaque mois ». La meilleure réaction est de…`, "le considérer comme une fraude probable : de tels rendements ne sont pas réalistes", ["investir vite avant que l'offre disparaisse", "investir un petit montant pour l'essayer", "demander à tes amis d'investir aussi"], "Des rendements garantis irréalistes sont une marque de la fraude."),
  num(`Un coupon donne 15 dollars de rabais sur un achat d'au moins 75 dollars. Un autre donne 18 % de rabais. Pour un achat de 90 dollars, de combien le meilleur coupon est-il plus avantageux (au cent près)?`, 1.2, "15 contre 16.20.", null, 0.006),
  num(`Un service de diffusion en continu coûte 16.99 dollars par mois ou 169.99 dollars par année. Quel pourcentage économise-t-on en payant à l'année (1 décimale)?`, 16.6, "203.88 − 169.99 = 33.89; 33.89 ÷ 203.88.", null, 0.06),
  num(`Abonnement : 120 dollars par année donnent 10 % de rabais sur tous les achats. Combien faut-il dépenser en un an pour que l'abonnement soit rentable (en dollars)?`, 1200, "0.10s = 120."),
  mc(`Deux téléphones : A coûte 950 dollars et dure 4 ans; B coûte 600 dollars et dure 2 ans. Lequel coûte le moins par année?`, "A (237.50 dollars par année)", ["B (300 dollars par année)", "ils sont égaux", "impossible à dire"], "950 ÷ 4 contre 600 ÷ 2."),
  num(`Un article est majoré de 40 % par rapport à son coût, puis vendu à 25 % de rabais. Quel est le profit en pourcentage du coût?`, 5, "1.4 × 0.75 = 1.05."),
];
