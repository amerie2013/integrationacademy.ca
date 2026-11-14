// 7.3 Intérêts et emprunts — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch7/bank/em7_3.mjs;
// l'argent s'écrit en « dollars »)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Trouve l'intérêt simple sur 1000 dollars à 5 % par année pendant 1 an (en dollars).`, 50, "1000 × 0.05 × 1."),
  num(`Trouve l'intérêt simple sur 2000 dollars à 3 % par année pendant 4 ans (en dollars).`, 240, "2000 × 0.03 × 4."),
  num(`Trouve le montant après 2 ans : 500 dollars à 6 % d'intérêt simple (en dollars).`, 560, "500 + 500 × 0.06 × 2."),
  num(`Écris 4.5 % sous forme décimale.`, 0.045, "4.5 ÷ 100."),
  num(`Écris 9 mois en années.`, 0.75, "9 ÷ 12."),
  mc(`Dans I = Prt, P représente le…`, "capital", ["profit", "paiement", "pourcentage"], "La somme épargnée ou empruntée."),
  mc(`L'intérêt gagné seulement sur le capital initial est…`, "l'intérêt simple", ["l'intérêt composé", "l'inflation", "la dépréciation"], "I = Prt."),
  mc(`L'intérêt gagné sur les intérêts autant que sur le capital est…`, "l'intérêt composé", ["l'intérêt simple", "un rabais", "des frais"], "A = P(1 + r/n)ⁿᵗ."),
  num(`On compose 1000 dollars annuellement à 10 % pendant 2 ans. Trouve le montant (en dollars).`, 1210, "1000 × 1.1²."),
  num(`Pour un intérêt composé mensuellement, quelle est la valeur de n?`, 12, "12 périodes par année."),
  num(`Pour 8 % composé trimestriellement, quelle est la valeur de r/n sous forme décimale?`, 0.02, "0.08 ÷ 4."),
  tf(`Sur de nombreuses années, l'intérêt composé croît plus vite que l'intérêt simple au même taux.`, true, "Les intérêts rapportent des intérêts."),
  num(`Trouve l'intérêt simple sur 600 dollars à 4 % pendant 6 mois (en dollars).`, 12, "600 × 0.04 × 0.5."),
  mc(`Avec le temps, la croissance de l'intérêt simple est…`, "linéaire", ["exponentielle", "quadratique", "constante"], "Le même montant chaque année."),
  mc(`Avec le temps, la croissance de l'intérêt composé est…`, "exponentielle", ["linéaire", "constante", "décroissante"], "Des multiplications répétées."),
  num(`Un compte d'épargne rapporte 30 dollars d'intérêt simple par année sur 1000 dollars. Quel est le taux (%)?`, 3, "30 ÷ 1000."),
  tf(`Payer le solde complet de ta carte de crédit avant la date d'échéance évite les frais d'intérêt.`, true, "L'intérêt est exigé sur les soldes reportés."),
  num(`Une somme passe de 1000 dollars à 1150 dollars. Combien d'intérêts a-t-elle rapportés (en dollars)?`, 150, "A − P."),
  mc(`TAP signifie…`, "taux annuel en pourcentage", ["taux d'amortissement des paiements", "total annuel du prêt", "taxe annuelle payée"], "Le taux d'intérêt annuel d'un prêt ou d'une carte."),
  num(`2000 dollars composés annuellement à 5 % pendant 1 an. Trouve l'intérêt (en dollars).`, 100, "2000 × 0.05."),
];

export const M = [
  num(`Trouve l'intérêt simple sur 3600 dollars à 2.75 % pendant 3 ans (en dollars).`, 297, "3600 × 0.0275 × 3."),
  num(`1500 dollars rapportent 180 dollars d'intérêt simple en 3 ans. Trouve le taux (%).`, 4, "180 ÷ (1500 × 3)."),
  num(`Combien d'années faut-il pour que 2500 dollars rapportent 500 dollars à 5 % d'intérêt simple?`, 4, "500 ÷ (2500 × 0.05)."),
  num(`1200 dollars à 5 % composé annuellement pendant 3 ans. Trouve le montant (au cent près).`, 1389.15, "1200 × 1.05³.", null, 0.006),
  num(`2000 dollars à 6 % composé semestriellement pendant 2 ans. Trouve le montant (au cent près).`, 2251.02, "2000 × 1.03⁴.", null, 0.006),
  num(`5000 dollars à 4.8 % composé mensuellement pendant 1 an. Trouve le montant (au cent près).`, 5245.35, "5000 × 1.004¹².", null, 0.006),
  num(`Combien de plus 1000 dollars rapportent-ils en 10 ans à 6 % composé annuellement qu'à 6 % d'intérêt simple (au cent près)?`, 190.85, "1790.85 − 1600.", null, 0.006),
  ms(`Lesquelles font passer 1000 dollars à plus de 1100 dollars après 2 ans? Choisis toutes les bonnes réponses.`, ["5 % composé annuellement", "6 % d'intérêt simple", "4 % composé annuellement", "5.5 % d'intérêt simple"], [0, 1, 3], "5 % composé : 1102.50; 6 % simple : 1120; 4 % composé : 1081.60; 5.5 % simple : 1110."),
  num(`Un solde de carte de crédit de 1200 dollars porte un intérêt de 18 % par année, composé mensuellement. Sans aucun paiement, combien doit-on après 3 mois (au cent près)?`, 1254.81, "1200 × 1.015³.", null, 0.006),
  mc(`Lequel rapporte le plus sur 4000 dollars pendant 5 ans?`, "5 % composé mensuellement", ["5 % composé annuellement", "5 % d'intérêt simple", "ils rapportent tous la même chose"], "Une capitalisation plus fréquente rapporte un peu plus."),
  num(`Lis le graphique : de combien le montant composé dépasse-t-il le montant simple après 10 ans (à la centaine de dollars près)?`, 600, "Composé 1000 × 1.1¹⁰ ≈ 2594; simple 1000 + 100 × 10 = 2000.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 3200 }, lines: [{ m: 100, b: 1000, color: "blue", label: "simple", lx: 9 }], curves: [{ f: (t) => 1000 * 1.1 ** t, color: "green" }], step: { x: 1, y: 400 }, xlabel: "années", ylabel: "montant" })),
  num(`Selon la règle de 72, en combien d'années environ l'argent double-t-il à 4 % composé annuellement?`, 18, "72 ÷ 4."),
  tf(`Doubler la durée d'un placement à intérêt composé double l'intérêt gagné.`, false, "L'intérêt composé croît de façon exponentielle — plus que le double."),
  num(`Un prêt de 3000 dollars à 7 % d'intérêt simple pendant 2 ans. Quel est le total remboursé (en dollars)?`, 3420, "3000 + 420."),
  num(`Un solde de 900 dollars à 21 % par année, composé mensuellement. Quel est l'intérêt du premier mois (en dollars)?`, 15.75, "900 × 0.0175."),
  mc(`Une élève ne paie que 25 dollars par mois sur un solde de carte de 1500 dollars à 20 %. L'intérêt du premier mois est de 25 dollars. Que se passe-t-il?`, "le solde ne diminue pas", ["le solde est remboursé en 60 mois", "la banque annule l'intérêt", "le solde baisse de 25 dollars par mois"], "Le paiement couvre seulement l'intérêt."),
  num(`À quel taux d'intérêt simple 800 dollars deviennent-ils 1000 dollars en 5 ans (%)?`, 5, "200 ÷ (800 × 5)."),
  num(`10 000 dollars à 3 % composé annuellement pendant 20 ans. Trouve le montant (au cent près).`, 18061.11, "10 000 × 1.03²⁰.", null, 0.006),
  ms(`Quelles actions réduisent l'intérêt total que tu paies sur un prêt? Choisis toutes les bonnes réponses.`, ["un taux d'intérêt plus bas", "une durée de prêt plus courte", "des versements mensuels plus élevés", "faire seulement le paiement minimum"], [0, 1, 2], "Les paiements minimaux maximisent l'intérêt."),
  num(`2500 dollars à 3.6 % composé mensuellement pendant 2 ans. Trouve l'intérêt gagné (au cent près).`, 186.35, "2500 × 1.003²⁴ − 2500.", null, 0.006),
];
