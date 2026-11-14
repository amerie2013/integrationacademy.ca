// 7.4 Budgets — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch7/bank/em7_4.mjs; l'argent s'écrit en
// « dollars »). La figure FIG.spend de l'anglais (../../mth1w-bank-figures/figs.mjs) est redessinée ici avec des
// étiquettes françaises (mêmes données).
import { mc, ms, num, tf } from "./kit.mjs";
import { barChartDoc } from "./fig.mjs";

const SPEND = barChartDoc({ bars: [["besoins", 1300], ["désirs", 500], ["épargne", 300]], base: 0, top: 1500, step: 300, ylabel: "dollars" });

export const E = [
  mc(`La paie avant les retenues s'appelle…`, "le revenu brut", ["le revenu net", "le surplus", "un budget"], "Brut = total gagné."),
  mc(`La paie reçue après les retenues s'appelle…`, "le revenu net", ["le revenu brut", "un déficit", "l'intérêt"], "Établis le budget avec le revenu net."),
  mc(`Laquelle est une dépense fixe?`, "le loyer", ["l'épicerie", "les repas au restaurant", "l'essence pour une auto"], "La même chaque mois."),
  mc(`Lequel est un désir plutôt qu'un besoin?`, "des billets de concert", ["le loyer", "l'épicerie", "une carte d'autobus pour aller au travail"], "Pas essentiel."),
  num(`Le revenu net est de 2000 dollars et les dépenses sont de 1850 dollars. Quel est le surplus (en dollars)?`, 150, "2000 − 1850."),
  num(`Le revenu net est de 1600 dollars et les dépenses sont de 1700 dollars. Quel est le résultat? (Négatif pour un déficit.)`, -100, "1600 − 1700."),
  num(`Selon la règle 50/30/20, avec un revenu net de 3000 dollars, combien va aux besoins (en dollars)?`, 1500, "50 % de 3000."),
  num(`Selon la règle 50/30/20, avec un revenu net de 3000 dollars, combien va à l'épargne (en dollars)?`, 600, "20 % de 3000."),
  num(`Un emploi paie 15 dollars l'heure pour 20 heures par semaine. Quelle est la paie brute hebdomadaire (en dollars)?`, 300, "15 × 20."),
  num(`Combien de périodes de paie y a-t-il dans une année si tu es payé toutes les deux semaines?`, 26, "52 ÷ 2."),
  num(`Une facture d'assurance annuelle est de 1200 dollars. Combien faut-il mettre de côté chaque mois (en dollars)?`, 100, "1200 ÷ 12."),
  tf(`Un budget devrait être fondé sur le revenu brut.`, false, "Utilise le revenu net — les retenues sont prélevées avant que tu sois payé."),
  mc(`Laquelle est une retenue salariale courante au Canada?`, "les cotisations au RPC", ["la TVH", "le loyer", "une facture de téléphone"], "Aussi l'impôt sur le revenu et l'AE."),
  num(`Pour épargner 600 dollars en 6 mois, combien faut-il épargner chaque mois (en dollars)?`, 100, "600 ÷ 6."),
  tf(`Un déficit signifie que les dépenses sont plus grandes que les revenus.`, true, "Revenus − dépenses est négatif."),
  num(`L'épicerie coûte 95 dollars par semaine. Environ combien cela fait-il par mois (52 semaines ÷ 12, au cent près)?`, 411.67, "95 × 52 ÷ 12.", null, 0.006),
  mc(`L'épicerie est un…`, "besoin variable", ["désir fixe", "besoin fixe", "désir variable"], "Le montant change; c'est essentiel."),
  num(`Un café à 5 dollars chaque jour pendant 30 jours coûte combien (en dollars)?`, 150, "5 × 30."),
  mc(`Un fonds d'urgence est de l'argent épargné pour…`, "des dépenses imprévues comme des réparations ou une perte d'emploi", ["des vacances", "un nouveau téléphone chaque année", "payer ses impôts"], "Un coussin pour les imprévus."),
  num(`La paie brute est de 2500 dollars et les retenues sont de 500 dollars. Quelle est la paie nette (en dollars)?`, 2000, "2500 − 500."),
];

export const M = [
  num(`Un chèque de paie semi-mensuel est de 1150 dollars. Quel est le revenu mensuel (en dollars)?`, 2300, "Semi-mensuel = 24 paies : 1150 × 2."),
  num(`Un chèque de paie aux deux semaines est de 1200 dollars. Quel est le revenu mensuel (en dollars)?`, 2600, "1200 × 26 ÷ 12."),
  num(`Une paie hebdomadaire de 480 dollars représente combien par mois (au cent près)?`, 2080, "480 × 52 ÷ 12."),
  num(`La paie brute est de 2800 dollars par mois et les retenues sont de 22 %. Quelle est la paie nette (en dollars)?`, 2184, "2800 × 0.78."),
  num(`Dépenses : loyer 900, nourriture 350, transport en commun 156, téléphone 60, loisirs 200, épargne 250 (en dollars). Revenu net 2000 dollars. Quel est le surplus (en dollars)?`, 84, "2000 − 1916."),
  num(`Dépenses : loyer 900, nourriture 350, transport en commun 156, téléphone 60, loisirs 200, épargne 250 (en dollars). Revenu net 2000 dollars. Les besoins sont le loyer, la nourriture, le transport en commun et le téléphone. Quel pourcentage du revenu va aux besoins (1 décimale)?`, 73.3, "1466 ÷ 2000.", null, 0.06),
  ms(`Lesquels sont des besoins? Choisis toutes les bonnes réponses.`, ["le loyer", "l'épicerie de base", "un abonnement de diffusion en continu", "le transport pour aller au travail"], [0, 1, 3], "La diffusion en continu est un désir."),
  num(`Des coûts annuels de 1800 dollars (assurance) et de 420 dollars (cadeaux) sont prévus dans le budget mensuel. Quel est le montant mensuel (en dollars)?`, 185, "2220 ÷ 12."),
  num(`Le revenu net baisse de 15 % à partir de 2400 dollars. Quel est le nouveau revenu (en dollars)?`, 2040, "2400 × 0.85."),
  num(`Un loyer de 1100 dollars augmente de 6 %. Quel est le nouveau loyer (en dollars)?`, 1166, "1100 × 1.06."),
  num(`Lis le diagramme : combien de plus est dépensé pour les besoins que pour les désirs (en dollars)?`, 800, "1300 − 500.", barChartDoc({ bars: [["besoins", 1300], ["désirs", 500], ["épargne", 300]], base: 0, top: 1500, step: 300, ylabel: "dollars" })),
  num(`Le diagramme montre les dépenses mensuelles. Quel pourcentage des dépenses totales va à l'épargne (1 décimale)?`, 14.3, "300 ÷ 2100.", SPEND, 0.06),
  num(`Marco veut 1800 dollars dans 9 mois et a déjà épargné 360 dollars. Combien doit-il épargner chaque mois (en dollars)?`, 160, "1440 ÷ 9."),
  num(`Apporter son dîner fait économiser 7 dollars par jour pendant 20 jours par mois. Combien économise-t-on pendant une année scolaire de 10 mois (en dollars)?`, 1400, "7 × 20 × 10."),
  tf(`Si un budget a un déficit, réduire les désirs est habituellement la première étape avant de réduire les besoins.`, true, "Protège les besoins; réduis les dépenses facultatives."),
  num(`Les dépenses essentielles sont de 1500 dollars par mois. À combien s'élève un fonds d'urgence de 3 mois (en dollars)?`, 4500, "3 × 1500."),
  num(`En épargnant 250 dollars par mois, combien de mois faut-il pour constituer ce fonds d'urgence de 4500 dollars?`, 18, "4500 ÷ 250."),
  mc(`Les besoins d'une élève représentent 70 % de son revenu. La solution la plus réaliste est de…`, "chercher un logement ou un transport moins cher et garder des désirs modestes", ["arrêter d'épargner pour toujours", "utiliser des cartes de crédit pour l'épicerie", "ignorer le budget"], "Réduis les plus gros besoins quand c'est possible."),
  num(`Un emploi à temps partiel paie 16.55 dollars l'heure pour 18 heures par semaine, avec 12 % de retenues. Quelle est la paie nette mensuelle (52 semaines ÷ 12, au cent près)?`, 1135.99, "16.55 × 18 × 52 ÷ 12 × 0.88.", null, 0.02),
  num(`Règle 50/30/20 sur un revenu net de 2750 dollars : combien pour les désirs (en dollars)?`, 825, "0.3 × 2750."),
];
