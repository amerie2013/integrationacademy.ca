// 8.6 Prêts, amortissement et conditions changeantes — 20 questions faciles + 20 moyennes
// (miroir de ../../mcr3u-ch8/bank/em8_6.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, annFV, payPV, balance, paymentsToRepay, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const totInt = (L, i, n) => payPV(L, i, n) * n - L;

export const E = [
  $("Le solde d'un prêt est de 5000 dollars à 12%/a composé mensuellement. Trouve l'intérêt pour un mois (en dollars).", 50, "5000 × 0.01."),
  $("Le solde d'un prêt est de 8000 dollars à 6%/a composé mensuellement. Trouve l'intérêt pour un mois (en dollars).", 40, "8000 × 0.005."),
  $("Un versement de 400 dollars comprend 60 dollars d'intérêts. Quel montant va au capital (en dollars)?", 340, "400 − 60."),
  $("Un solde de 10 000 dollars est réduit par un remboursement de capital de 250 dollars. Quel est le nouveau solde (en dollars)?", 9750, "10 000 − 250."),
  $("Un solde de 3000 dollars à 12%/a composé mensuellement reçoit un versement de 500 dollars à la fin du mois. Quel est le nouveau solde (en dollars)?", 3000 * 1.01 - 500, "3000 + 30 − 500."),
  $("Trouve le versement mensuel d'un prêt de 2400 dollars sur 1 an à 6%/a composé mensuellement (en dollars).", payPV(2400, 0.005, 12), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  mc("Dans un tableau d'amortissement, comment trouve-t-on l'intérêt d'une période?", "solde × i", ["versement × i", "prêt initial × i", "versement − solde"], "L'intérêt est calculé sur le solde actuel."),
  mc("À mesure qu'un prêt est remboursé, la partie intérêts de chaque versement …", "diminue", ["augmente", "reste la même", "devient négative"], "Le solde diminue."),
  tf("Dans un tableau d'amortissement, la partie capital de chaque versement augmente avec le temps.", true, "Les intérêts diminuent, donc une plus grande partie du versement fixe réduit le capital."),
  tf("Une durée plus longue signifie toujours moins d'intérêt total.", false, "Elle en signifie habituellement plus."),
  mc("Quel changement réduit l'intérêt total d'un prêt?", "faire des versements supplémentaires", ["allonger la durée", "augmenter le taux d'intérêt", "sauter des versements"], "Les versements supplémentaires réduisent le solde plus vite."),
  mc("Quel changement réduit le versement périodique d'un prêt?", "allonger la durée", ["raccourcir la durée", "augmenter le taux d'intérêt", "emprunter davantage"], "Le prêt est réparti sur plus de versements."),
  num("Un prêt de 6000 dollars est remboursé par 24 versements de 270 dollars. Combien d'intérêt paie-t-on (en dollars)?", 480, "24 × 270 − 6000."),
  $("Trouve l'intérêt total d'un prêt de 5000 dollars remboursé mensuellement sur 2 ans à 9%/a composé mensuellement (en dollars).", totInt(5000, 0.0075, 24), "24R − 5000."),
  tf("Le solde d'un prêt après le dernier versement est 0.", true, "Le prêt est entièrement remboursé."),
  $("Un solde de 1200 dollars à 18%/a composé mensuellement reçoit un versement de 100 dollars. Quelle partie de ce versement est de l'intérêt (en dollars)?", 18, "1200 × 0.015."),
  num("Un solde passe de 9000 dollars à 8820 dollars après un versement de 225 dollars. Combien d'intérêt a-t-on facturé (en dollars)?", 45, "Capital 180; 225 − 180."),
  ms("Lesquelles sont des colonnes d'un tableau d'amortissement? Choisis toutes les bonnes réponses.", ["versement", "intérêts", "capital", "solde", "inflation"], [0, 1, 2, 3], "L'inflation ne fait pas partie du tableau."),
  num("Les barres montrent la partie intérêts de chacun des 4 premiers versements. Comment évolue-t-elle? Entre la valeur de la 4e barre (en dollars).", 47.03, "Elle diminue chaque mois.", barsD([50, 49.01, 48.02, 47.03], { xlabel: "versement", ylabel: "intérêts", labels: ["50.00", "49.01", "48.02", "47.03"] }), 0.005),
  $("Lis le graphique du solde d'un prêt : combien doit-on au départ (en dollars)?", 12000, "L'ordonnée à l'origine.", growthD([{ f: (t) => Math.max(0, balance(12000, payPV(12000, 0.005, 48), 0.005, 12 * t)) }], 4, { ylabel: "solde" })),
];

export const M = [
  $("Trouve le versement mensuel de 18 000 dollars sur 5 ans à 4.8%/a composé mensuellement (en dollars).", payPV(18000, 0.004, 60), "i = 0.004, n = 60."),
  $("Un prêt de 18 000 dollars est remboursé mensuellement sur 5 ans à 4.8%/a composé mensuellement. Trouve l'intérêt du premier mois (en dollars).", 72, "18 000 × 0.004."),
  $("Un prêt de 18 000 dollars est remboursé mensuellement sur 5 ans à 4.8%/a composé mensuellement. Trouve le capital remboursé le premier mois (en dollars).", payPV(18000, 0.004, 60) - 72, "R = 338.04 et le premier intérêt est de 72 : R − 72."),
  $("Un prêt de 18 000 dollars est remboursé mensuellement sur 5 ans à 4.8%/a composé mensuellement. Trouve le solde après 24 versements (en dollars).", balance(18000, payPV(18000, 0.004, 60), 0.004, 24), "PV des 36 versements restants."),
  $("Trouve l'intérêt total sur 25 000 dollars sur 4 ans à 6%/a composé mensuellement (en dollars).", totInt(25000, 0.005, 48), "48R − 25 000."),
  $("Trouve l'intérêt total sur 25 000 dollars sur 6 ans à 6%/a composé mensuellement (en dollars).", totInt(25000, 0.005, 72), "72R − 25 000."),
  $("Combien d'intérêt de plus paie-t-on sur 15 000 dollars sur 5 ans à 8%/a plutôt qu'à 5%/a (les deux composés mensuellement)? (en dollars)", totInt(15000, 0.08 / 12, 60) - totInt(15000, 0.05 / 12, 60), "Compare 60R − 15 000."),
  num("Un prêt de 10 000 dollars à 6%/a composé mensuellement est prévu sur 5 ans. Combien de versements faut-il si l'on paie 50 dollars de plus chaque mois?", paymentsToRepay(10000, payPV(10000, 0.005, 60) + 50, 0.005), "Nouveau versement R + 50; essais successifs pour n."),
  $("Compare l'épargne de 1200 dollars à la fin de chaque année à celle de 100 dollars à la fin de chaque mois pendant 5 ans à 6%/a (capitalisation correspondante). Combien de plus l'épargne mensuelle donne-t-elle (en dollars)?", annFV(100, 0.005, 60) - annFV(1200, 0.06, 5), "FV mensuelle − FV annuelle."),
  mc("Qu'est-ce qui fait économiser le plus d'intérêts sur un prêt de 20 000 dollars sur 5 ans à 7%/a composé mensuellement?", totInt(20000, 0.06 / 12, 60) < totInt(20000, 0.07 / 12, 48) ? "baisser le taux à 6%" : "raccourcir la durée à 4 ans", [totInt(20000, 0.06 / 12, 60) < totInt(20000, 0.07 / 12, 48) ? "raccourcir la durée à 4 ans" : "baisser le taux à 6%", "les deux font économiser exactement la même chose", "aucun des deux ne fait économiser quoi que ce soit"], `Intérêts : 6% sur 5 ans ≈ ${c2(totInt(20000, 0.06 / 12, 60))}; 7% sur 4 ans ≈ ${c2(totInt(20000, 0.07 / 12, 48))}.`),
  ms("Pour un prêt de 30 000 dollars à 6%/a composé mensuellement sur 5 ans, lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", [`R ≈ ${c2(payPV(30000, 0.005, 60))}`, "l'intérêt du premier mois est de 150", "l'intérêt du dernier versement est inférieur à 5 dollars", "chaque versement a la même partie capital", `intérêt total ≈ ${c2(totInt(30000, 0.005, 60))}`], [0, 1, 2, 4], "La partie capital augmente."),
  tf("Rembourser un prêt plus tôt fait toujours économiser de l'intérêt.", true, "L'intérêt est facturé seulement sur le solde restant."),
  tf("Un prêt à un taux plus bas a toujours un intérêt total plus bas, quelle que soit la durée.", false, "Une durée beaucoup plus longue peut coûter plus cher."),
  $("Un solde de 4500 dollars à 9%/a composé mensuellement reçoit 3 versements de 300 dollars. Quel est le solde après le troisième versement (en dollars)?", balance(4500, 300, 0.0075, 3), "Ajoute l'intérêt puis soustrais, trois fois."),
  num("Combien de versements mensuels de 200 dollars remboursent un solde de crédit de 4000 dollars à 18%/a composé mensuellement (le dernier peut être plus petit)?", paymentsToRepay(4000, 200, 0.015), "Essais successifs pour n."),
  $("Un prêt de 8000 dollars est remboursé sur 3 ans à 6%/a. De combien l'intérêt total est-il moins élevé avec une capitalisation et des versements mensuels qu'avec une capitalisation et des versements annuels? (en dollars)", totInt(8000, 0.06, 3) - totInt(8000, 0.005, 36), "Annuel : 3R − 8000; mensuel : 36R − 8000."),
  $("Quel est l'intérêt du 13e versement d'un prêt de 12 000 dollars à 6%/a composé mensuellement sur 3 ans (en dollars)?", balance(12000, payPV(12000, 0.005, 36), 0.005, 12) * 0.005, "Solde après 12 versements × 0.005."),
  num("Au pourcentage entier près, quelle part du premier versement d'un prêt hypothécaire de 200 000 dollars sur 25 ans à 4.8%/a composé mensuellement est de l'intérêt?", Math.round((800 / payPV(200000, 0.004, 300)) * 100), "Intérêt de 800 ÷ versement.", null, 1),
  $("Lis le graphique : combien doit-on encore à la moitié du prêt de 4 ans illustré (en dollars)?", balance(12000, payPV(12000, 0.005, 48), 0.005, 24), "Solde après 24 versements.", growthD([{ f: (t) => Math.max(0, balance(12000, payPV(12000, 0.005, 48), 0.005, 12 * t)) }], 4, { ylabel: "solde", pts: [[2, balance(12000, payPV(12000, 0.005, 48), 0.005, 24), "2 ans"]] })),
  $("Les barres montrent l'intérêt total d'un prêt de 25 000 dollars à 6% sur 3, 5 et 7 ans. Trouve la différence entre les barres de 7 ans et de 3 ans (en dollars).", totInt(25000, 0.005, 84) - totInt(25000, 0.005, 36), "Soustrais.", barsD([36, 60, 84].map((n) => totInt(25000, 0.005, n)), { xlabel: "3 · 5 · 7 ans", ylabel: "intérêt total" })),
];
