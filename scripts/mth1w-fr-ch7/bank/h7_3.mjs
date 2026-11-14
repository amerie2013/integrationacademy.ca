// 7.3 Intérêts et emprunts — 20 questions difficiles (miroir de ../../mth1w-ch7/bank/h7_3.mjs;
// l'argent s'écrit en « dollars »)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l7_3.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(`Léna investit 3000 dollars à l'âge de 15 ans et Max investit 6000 dollars à l'âge de 30 ans, tous deux à 6 % composé annuellement. Combien Léna a-t-elle de plus à l'âge de 60 ans (au cent près)?`, 6832.89, "3000 × 1.06⁴⁵ ≈ 41 293.83; 6000 × 1.06³⁰ ≈ 34 460.95.", null, 0.02),
  num(`Combien d'années complètes faut-il pour que 1000 dollars fassent au moins doubler à 5 % composé annuellement?`, 15, "1.05¹⁴ ≈ 1.980; 1.05¹⁵ ≈ 2.079."),
  num(`Un compte passe de 4000 dollars à 4410 dollars en 2 ans avec une capitalisation annuelle. Quel est le taux (%)?`, 5, "(1 + r)² = 1.1025."),
  num(`Un solde de carte de 2000 dollars à 19.99 % par année (composé mensuellement) reste impayé pendant 2 ans. Combien doit-on (au cent près)?`, 2973.24, "2000 × (1 + 0.1999/12)²⁴.", null, 0.02),
  num(`Un prêt de 8000 dollars : l'option A exige 6 % d'intérêt simple pendant 4 ans; l'option B exige 5.5 % composé annuellement pendant 4 ans (payé à la fin). De combien l'option la moins chère est-elle moins chère (au cent près)?`, 9.4, "A : 1920; B : 8000 × 1.055⁴ − 8000 ≈ 1910.60.", null, 0.02),
  num(`10 000 dollars à 4 % pendant 10 ans : combien de plus la capitalisation mensuelle rapporte-t-elle que la capitalisation annuelle (au cent près)?`, 105.88, "10 000 × (1 + 0.04/12)¹²⁰ ≈ 14 908.33; 10 000 × 1.04¹⁰ ≈ 14 802.44.", null, 0.02),
  mc(`Un solde de 1500 dollars à 20 % par année (environ 1.67 % par mois). Avec des paiements de 100 dollars par mois, quelle part environ du premier paiement va à l'intérêt?`, "environ 25 dollars", ["environ 100 dollars", "environ 2 dollars", "environ 50 dollars"], "1500 × 0.0167 ≈ 25."),
  num(`Quel capital investi à 6 % composé annuellement devient 5000 dollars en 8 ans (au cent près)?`, 3137.06, "5000 ÷ 1.06⁸.", null, 0.02),
  ms(`Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["commencer à épargner plus tôt compte habituellement plus qu'un taux légèrement plus élevé", "un versement mensuel plus petit signifie toujours un prêt moins cher", "l'intérêt des cartes de crédit est habituellement plus élevé que l'intérêt de l'épargne", "l'intérêt composé peut travailler pour toi (épargne) ou contre toi (dette)"], [0, 2, 3], "Les prêts plus longs ont des versements plus petits, mais plus d'intérêts au total."),
  num(`Un placement double en 12 ans avec une capitalisation annuelle. Quel est le taux annuel (%, 2 décimales)?`, 5.95, "2^(1/12) ≈ 1.0595.", null, 0.006),
  num(`Lis le graphique : après combien d'années complètes le montant composé dépasse-t-il pour la première fois le montant simple de plus de 1000 dollars?`, 12, "Composé 2000 × 1.08ᵗ contre simple 2000 + 160t : t = 11, écart de 903.28; t = 12, écart de 1116.34.", planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 7000 }, lines: [{ m: 160, b: 2000, color: "blue", label: "simple", lx: 12 }], curves: [{ f: (t) => 2000 * 1.08 ** t, color: "green" }], step: { x: 2, y: 1000 }, xlabel: "années", ylabel: "montant" })),
  tf(`À 6 % composé annuellement, l'argent est à peu près multiplié par quatre en environ 24 ans.`, true, "Temps de doublement ≈ 12 ans, donc deux doublements ≈ 24 ans (1.06²⁴ ≈ 4.05)."),
  num(`Une carte de magasin offre « aucun intérêt pendant 12 mois »; sinon, 29.9 % par année, composé mensuellement à partir de la date d'achat. Sur un achat de 1800 dollars qui n'est pas payé à temps, combien d'intérêts sont exigés (au cent près)?`, 618.44, "1800 × (1 + 0.299/12)¹² − 1800.", null, 0.02),
  num(`Intérêt simple : un prêt de 2400 dollars sur 6 mois coûte 84 dollars d'intérêt. Quel est le taux annuel (%)?`, 7, "84 ÷ (2400 × 0.5)."),
  mc(`Quel plan d'épargne donne le plus après 5 ans sur 2000 dollars?`, "4.8 % composé mensuellement", ["5 % d'intérêt simple", "4.7 % composé annuellement", "4.9 % d'intérêt simple"], "4.8 % mensuel : 2541.28; 5 % simple : 2500; 4.7 % annuel : 2516.31; 4.9 % simple : 2490."),
  num(`Un solde de 3000 dollars à 18 % par année, composé mensuellement, est réduit par un paiement unique de 1000 dollars après 6 mois. Combien doit-on juste après le paiement (au cent près)?`, 2280.33, "3000 × 1.015⁶ ≈ 3280.33; − 1000.", null, 0.02),
  num(`Combien faut-il déposer aujourd'hui à 3 % composé annuellement pour avoir 10 000 dollars dans 15 ans (au cent près)?`, 6418.62, "10 000 ÷ 1.03¹⁵.", null, 0.02),
  num(`Un dépôt de 1000 dollars rapporte 2.5 % composé annuellement alors que l'inflation est de 3 % par année. Après 10 ans, quel est le pouvoir d'achat du compte en dollars d'aujourd'hui (au cent près)?`, 952.5, "1000 × 1.025¹⁰ ÷ 1.03¹⁰.", null, 0.02),
  tf(`Si deux comptes ont le même taux annuel, celui qui est composé quotidiennement finit toujours avec au moins autant que celui qui est composé annuellement.`, true, "Au même taux, une capitalisation plus fréquente ne rapporte jamais moins."),
  num(`L'intérêt simple à 4 % pendant t années rapporte autant que 1000 dollars à 4 % composé annuellement pendant 5 ans. Trouve t à 2 décimales près.`, 5.42, "Intérêt composé 216.65; 1000 × 0.04 × t = 216.65.", null, 0.006),
];
