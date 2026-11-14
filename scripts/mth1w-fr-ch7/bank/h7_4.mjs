// 7.4 Budgets — 20 questions difficiles (miroir de ../../mth1w-ch7/bank/h7_4.mjs; l'argent s'écrit en « dollars »)
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc } from "./fig.mjs";
import { TITLE } from "../l7_4.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(`La paie brute de Jordan est de 3100 dollars par mois. Retenues : impôt 390, RPC 170, AE 51, cotisations syndicales 40 (en dollars). Quel pourcentage de la paie brute est retenu (au pourcentage entier près)?`, 21, "651 ÷ 3100 = 0.21."),
  num(`Un budget : revenu net 2450; loyer 950, services publics 110, épicerie 380, transport en commun 156, téléphone 55, restaurants 160, divertissement 120, épargne 250 (en dollars). Le revenu baisse de 20 %. Quel est le nouveau déficit (en dollars)? (Entre un nombre négatif.)`, -221, "1960 − 2181."),
  num(`Un budget : revenu net 2450; loyer 950, services publics 110, épicerie 380, transport en commun 156, téléphone 55, restaurants 160, divertissement 120, épargne 250 (en dollars). Le revenu baisse de 20 %. De combien faut-il réduire les désirs et l'épargne au total pour atteindre l'équilibre (en dollars)?`, 221, "Nouveau revenu 1960; dépenses 2181; le déficit est de 221."),
  num(`Aïcha gagne 18 dollars l'heure pendant 25 heures par semaine; 15 % est retenu. Quelle est sa paie nette mensuelle (au cent près)?`, 1657.5, "18 × 25 × 52 ÷ 12 × 0.85."),
  num(`Une élève épargne 40 dollars par semaine. Combien de mois complets lui faut-il pour avoir au moins 1500 dollars, si elle part de 300 dollars? (Utilise 52 ÷ 12 semaines par mois.)`, 7, "Par mois ≈ 173.33; 300 + 7 × 173.33 = 1513.33 ≥ 1500; 6 mois donnent 1340."),
  ms(`Un budget a 62 % de besoins, 28 % de désirs et 10 % d'épargne. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["les besoins dépassent la règle de 50 %", "l'épargne est sous la règle de 20 %", "les désirs restent dans les 30 %", "le budget est forcément en déficit"], [0, 1, 2], "La répartition en pourcentage ne dit rien à elle seule sur un déficit."),
  num(`Le revenu net est de 2600 dollars. Le loyer augmente de 8 % à partir de 1000 dollars et le revenu augmente de 120 dollars. De combien le surplus mensuel change-t-il? (Négatif pour une diminution.)`, 40, "Loyer +80; revenu +120 → surplus +40."),
  num(`Cinq dépôts de 1150 dollars faits à la fin de chaque année rapportent 4 % composé annuellement. Combien y a-t-il dans le compte juste après le cinquième dépôt (au cent près)?`, 6228.77, "1150(1.04⁴ + 1.04³ + 1.04² + 1.04 + 1).", null, 0.02),
  num(`Lis le diagramme : si le revenu est de 2400 dollars, quel est le surplus (en dollars)?`, 150, "Dépenses 1350 + 600 + 300 = 2250.", barChartDoc({ bars: [["besoins", 1350], ["désirs", 600], ["épargne", 300]], base: 0, top: 1500, step: 300, ylabel: "dollars" })),
  num(`Un téléphone coûte 1200 dollars, ou 59 dollars par mois pendant 24 mois. Si l'élève épargne plutôt 200 dollars par mois, combien économise-t-elle en attendant et en payant comptant (en dollars)?`, 216, "24 × 59 = 1416; 1416 − 1200."),
  tf(`Un budget qui a un surplus chaque mois peut quand même ne pas couvrir les dépenses annuelles si elles n'y ont pas été incluses.`, true, "Les coûts annuels irréguliers doivent être prévus chaque mois."),
  num(`Les besoins mensuels sont de 1650 dollars. En épargnant 275 dollars par mois, combien de mois faut-il pour constituer un fonds d'urgence de 4 mois?`, 24, "6600 ÷ 275."),
  num(`Le revenu net d'un couple est de 5200 dollars. Il suit la règle 50/30/20, mais veut épargner 300 dollars de plus par mois, pris sur les désirs. Quel pourcentage du revenu les désirs représenteront-ils (1 décimale)?`, 24.2, "1560 − 300 = 1260; 1260 ÷ 5200.", null, 0.06),
  mc(`Quel changement fait économiser le plus par année?`, "annuler deux abonnements à 18 dollars (432 dollars par année)", ["sauter un café à 6 dollars par semaine (312 dollars par année)", "épargner 1 dollar par jour (365 dollars par année)", "éliminer un repas au restaurant à 30 dollars tous les 3 mois (120 dollars par année)"], "2 × 18 × 12 = 432."),
  num(`Les dépenses d'une élève sont de 1310 dollars; son revenu de 1400 dollars baisse de 12 %. Quel est le nouveau résultat (négatif pour un déficit)?`, -78, "1400 × 0.88 = 1232; 1232 − 1310."),
  num(`Une paie brute de 52 000 dollars par année est versée toutes les deux semaines. Les retenues sont de 24 %. Quel est le montant net de chaque chèque de paie (en dollars)?`, 1520, "52 000 ÷ 26 = 2000; × 0.76."),
  num(`Une urgence de 900 dollars est payée avec une carte de crédit à 20 % par année, composé mensuellement, et remboursée après 6 mois en un seul paiement. Combien d'intérêts ont été payés (au cent près)?`, 93.83, "900 × (1 + 0.2/12)⁶ − 900.", null, 0.02),
  ms(`Lesquelles sont de bonnes habitudes budgétaires? Choisis toutes les bonnes réponses.`, ["revoir son budget chaque mois", "mettre de l'argent de côté pour les coûts annuels", "se payer en premier (épargner le jour de la paie)", "utiliser le crédit pour couvrir un déficit mensuel régulier"], [0, 1, 2], "Emprunter pour un déficit régulier crée une dette."),
  num(`Une famille consacre 18 % d'un revenu net de 4800 dollars à la nourriture. Le prix de la nourriture augmente de 6 %. Combien de plus dépense-t-elle pour la nourriture chaque mois (au cent près)?`, 51.84, "864 × 0.06.", null, 0.006),
  num(`Pour atteindre 5000 dollars en 2 ans, combien faut-il épargner par semaine (52 semaines par année, au cent près)?`, 48.08, "5000 ÷ 104.", null, 0.006),
];
