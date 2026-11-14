// 7.2 Appréciation et dépréciation — 20 questions difficiles (miroir de ../../mth1w-ch7/bank/h7_2.mjs;
// l'argent s'écrit en « dollars »)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l7_2.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(`Une auto achetée 38 000 dollars vaut 21 935 dollars après 3 ans. Trouve le taux annuel de dépréciation (%, au nombre entier près).`, 17, "(1 − r)³ = 0.5772 → 1 − r ≈ 0.833.", null, 0.6),
  num(`Un condo s'apprécie de 4.5 % par année. Après combien d'années complètes sa valeur augmente-t-elle pour la première fois d'au moins 50 %?`, 10, "1.045⁹ ≈ 1.486; 1.045¹⁰ ≈ 1.553."),
  num(`Un portable de 1500 dollars : la méthode linéaire fait perdre 300 dollars par année; la méthode en pourcentage, 30 % par année. En quelle année la valeur linéaire devient-elle pour la première fois inférieure à la valeur en pourcentage?`, 4, "Année 3 : 600 contre 514.50; année 4 : 300 contre 360.15."),
  num(`Une valeur augmente de 15 %, puis diminue de 15 %. Quelle variation unique en pourcentage donne le même résultat? (Négative pour une perte; 2 décimales.)`, -2.25, "1.15 × 0.85 = 0.9775.", null, 0.006),
  num(`Une carte rare triple de valeur en 14 ans. Trouve le taux annuel d'appréciation (%, 1 décimale).`, 8.2, "3^(1/14) ≈ 1.0816.", null, 0.06),
  num(`Une camionnette d'une valeur de 52 000 dollars se déprécie de 18 % par année. Combien de valeur perd-elle pendant la troisième année (au dollar près)?`, 6294, "Valeur après 2 ans : 52 000 × 0.82² = 34 964.80; 0.18 × 34 964.80 ≈ 6293.66.", null, 0.6),
  mc(`Le placement A prend 6 % par année; le placement B prend un montant fixe de 400 dollars par année. Les deux commencent à 5000 dollars. Lequel vaut le plus après 20 ans?`, "A (environ 16 036 dollars contre 13 000 dollars)", ["B", "ils sont égaux", "impossible à dire"], "5000 × 1.06²⁰ ≈ 16 035.68; 5000 + 8000 = 13 000."),
  num(`La valeur d'un tableau est V = 2400(1.05)ᵗ. La valeur d'une reproduction est P = 3600(0.92)ᵗ. Après combien d'années complètes le tableau vaut-il plus pour la première fois?`, 4, "t = 3 : 2778.30 contre 2803.28; t = 4 : 2917.22 contre 2579.01."),
  ms(`Une auto perd 20 % de sa valeur chaque année. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["après 1 an, elle conserve 80 % de sa valeur", "après 2 ans, elle conserve 60 % de sa valeur", "après 2 ans, elle conserve 64 % de sa valeur", "elle perd plus de dollars pendant l'année 1 que pendant l'année 2"], [0, 2, 3], "0.8² = 0.64, et la perte de l'année 2 est 20 % d'une valeur plus petite."),
  num(`Lis le graphique : la valeur diminue de moitié tous les combien d'années?`, 4, "Elle passe de 8000 à 4000 à t = 4 et à 2000 à t = 8.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 9000 }, curves: [{ f: (t) => 8000 * 0.5 ** (t / 4), color: "red" }], points: [{ x: 0, y: 8000 }, { x: 4, y: 4000 }, { x: 8, y: 2000 }], step: { x: 1, y: 1000 }, xlabel: "années", ylabel: "valeur" })),
  num(`Une valeur diminue de 10 % chaque année pendant 5 ans. À quelle diminution unique en pourcentage sur les 5 ans cela correspond-il (1 décimale)?`, 41, "0.9⁵ ≈ 0.5905 → 40.95 %.", null, 0.06),
  tf(`Une maison qui s'apprécie de 3 % par année double de valeur en environ 24 ans.`, true, "72 ÷ 3 = 24; 1.03²⁴ ≈ 2.03."),
  num(`La machine X (12 000 dollars) se déprécie de 1500 dollars par année; la machine Y (10 000 dollars) se déprécie de 10 % par année. Après combien d'années complètes X vaut-elle pour la première fois moins que Y?`, 4, "t = 3 : 7500 contre 7290; t = 4 : 6000 contre 6561."),
  num(`La valeur d'une pièce de monnaie est passée de 120 dollars à 150 dollars, puis à 180 dollars en deux ans. Quel a été le taux de croissance annuel moyen (%, 1 décimale)?`, 22.5, "√(180/120) = √1.5 ≈ 1.2247.", null, 0.06),
  mc(`Pourquoi les maisons de certaines villes s'apprécient-elles plus vite que dans d'autres?`, "la demande (emplois, croissance de la population) est plus forte là où l'offre de logements est limitée", ["les maisons sont construites avec un meilleur bois", "l'inflation ne s'y applique pas", "la dépréciation ne s'applique qu'aux autos"], "L'offre et la demande."),
  num(`Une auto vaut 15 000 dollars après 4 ans de dépréciation annuelle de 12 %. Combien coûtait-elle neuve (au dollar près)?`, 25013, "15 000 ÷ 0.88⁴ ≈ 25 012.70.", null, 1),
  num(`Un tableau s'apprécie de 8 % par année. Quel pourcentage de sa valeur actuelle gagnera-t-il au cours des 3 prochaines années (1 décimale)?`, 26, "1.08³ ≈ 1.2597.", null, 0.06),
  num(`Un téléphone perd 40 % la première année et 25 % chaque année suivante. Combien vaut un téléphone de 1000 dollars après 3 ans (en dollars)?`, 337.5, "1000 × 0.6 × 0.75²."),
  mc(`Une entreprise affirme que son produit « conserve 90 % de sa valeur pendant 5 ans ». À quel taux annuel de dépréciation cela correspond-il, environ?`, "environ 2.1 %", ["environ 10 %", "environ 18 %", "environ 0.9 %"], "0.9^(1/5) ≈ 0.979."),
  num(`Un actif croît de 5 % par année pendant 4 ans, puis baisse de 5 % par année pendant 4 ans. Quel pourcentage de la valeur initiale reste-t-il (1 décimale)?`, 99, "(1.05 × 0.95)⁴ = 0.9975⁴ ≈ 0.990.", null, 0.06),
];
