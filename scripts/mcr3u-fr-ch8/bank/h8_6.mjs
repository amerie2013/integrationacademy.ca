// 8.6 Prêts, amortissement et conditions changeantes — 20 questions difficiles
// (miroir de ../../mcr3u-ch8/bank/h8_6.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, annFV, payPV, balance, paymentsToRepay, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const totInt = (L, i, n) => payPV(L, i, n) * n - L;
/** intérêt total quand on paie R par période jusqu'au remboursement complet */
const interestAt = (L, R, i) => { let b = L, t = 0; while (b > 0.005) { const int = b * i; t += int; b = b + int - Math.min(R, b + int); } return t; };
const R0 = payPV(300000, 0.004, 300);
// question à choix multiple : économie d'intérêts de chaque changement (même calcul que l'anglais)
const saves = [
  ["payer 100 dollars de plus chaque mois", payPV(30000, 0.0065, 72) * 72 - 30000 - interestAt(30000, payPV(30000, 0.0065, 72) + 100, 0.0065)],
  ["un taux inférieur de 1%", totInt(30000, 0.0065, 72) - totInt(30000, 0.068 / 12, 72)],
  ["une durée plus courte de 1 an", totInt(30000, 0.0065, 72) - totInt(30000, 0.0065, 60)],
];
const bestSave = saves.reduce((a, b) => (b[1] > a[1] ? b : a))[0];

export const TOPIC = "8.6 Prêts, amortissement et conditions changeantes";
export const Q = [
  $("Un prêt hypothécaire de 300 000 dollars à 4.8%/a composé mensuellement sur 25 ans. Combien d'intérêts économise-t-on en payant 300 dollars de plus chaque mois (en dollars)?", R0 * 300 - 300000 - interestAt(300000, R0 + 300, 0.004), "Simule le prêt avec R + 300."),
  num("Un prêt hypothécaire de 300 000 dollars à 4.8%/a composé mensuellement sur 25 ans. Combien de versements faut-il en payant 300 dollars de plus chaque mois?", paymentsToRepay(300000, R0 + 300, 0.004), "Essais successifs pour n."),
  $("Trouve le solde après 5 ans d'un prêt hypothécaire de 300 000 dollars sur 25 ans à 4.8%/a composé mensuellement (en dollars).", balance(300000, R0, 0.004, 60), "PV des 240 versements restants."),
  $("Un prêt hypothécaire de 300 000 dollars sur 25 ans à 4.8%/a composé mensuellement est renouvelé après 5 ans à 6%/a composé mensuellement pour les 20 années restantes. Trouve le nouveau versement (en dollars).", payPV(balance(300000, R0, 0.004, 60), 0.005, 240), "Nouveau prêt = solde; i = 0.005, n = 240."),
  num("Un solde de carte de crédit de 2800 dollars à 19.8%/a composé mensuellement est remboursé par le versement minimal de 85 dollars par mois. Combien de versements faut-il?", paymentsToRepay(2800, 85, 0.0165), "Essais successifs pour n."),
  $("Un solde de carte de crédit de 2800 dollars à 19.8%/a composé mensuellement est remboursé par le versement minimal de 85 dollars par mois. Combien d'intérêts paie-t-on (en dollars)?", interestAt(2800, 85, 0.0165), "Simule jusqu'au remboursement complet."),
  $("Un prêt de 40 000 dollars à 6%/a : de combien l'intérêt est-il moins élevé avec des versements mensuels sur 5 ans qu'avec des versements annuels sur 5 ans (capitalisation correspondante)? (en dollars)", totInt(40000, 0.06, 5) - totInt(40000, 0.005, 60), "Annuel : 5R − 40 000; mensuel : 60R − 40 000."),
  $("Trouve la partie intérêts du 25e versement d'un prêt de 20 000 dollars à 7.2%/a composé mensuellement sur 5 ans (en dollars).", balance(20000, payPV(20000, 0.006, 60), 0.006, 24) * 0.006, "Solde après 24 versements × 0.006."),
  num("Pour un prêt de 20 000 dollars à 7.2%/a composé mensuellement sur 5 ans, à quel versement la partie capital dépasse-t-elle pour la première fois la partie intérêts?", (() => { const R = payPV(20000, 0.006, 60); let b = 20000, k = 0; while (true) { k++; const int = b * 0.006; if (R - int > int) return k; b = b + int - R; } })(), "Suis l'évolution des intérêts et du capital."),
  tf("Réduire le taux d'intérêt de moitié réduit de moitié le versement mensuel d'un prêt.", false, "Le capital doit quand même être remboursé."),
  tf("Deux prêts ayant le même versement et le même taux, mais des soldes de départ différents, exigent des nombres de versements différents.", true, "Un solde plus grand exige plus de versements."),
  ms("Un prêt de 50 000 dollars à 6%/a composé mensuellement. Lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", [`sur 5 ans, R ≈ ${c2(payPV(50000, 0.005, 60))}`, `sur 10 ans, R ≈ ${c2(payPV(50000, 0.005, 120))}`, "le prêt sur 10 ans coûte plus du double des intérêts du prêt sur 5 ans", "le versement sur 10 ans est la moitié du versement sur 5 ans", "les deux commencent avec 250 dollars d'intérêts"], [0, 1, 2, 4], `Intérêts : ${c2(totInt(50000, 0.005, 60))} contre ${c2(totInt(50000, 0.005, 120))}.`),
  mc("Pour un prêt de 30 000 dollars sur 6 ans à 7.8%/a composé mensuellement, qu'est-ce qui fait économiser le plus d'intérêts?", bestSave, saves.map((o) => o[0]).filter((x) => x !== bestSave).concat(["ils font tous économiser exactement la même chose"]), "Calcule l'économie d'intérêts de chaque changement."),
  $("Une famille épargne 250 dollars par mois à 4.2%/a composé mensuellement. Combien a-t-elle de plus après 20 ans que si elle épargnait 3000 dollars à la fin de chaque année à 4.2%/a composé annuellement? (en dollars)", annFV(250, 0.0035, 240) - annFV(3000, 0.042, 20), "Compare les deux FV."),
  $("Un prêt de 15 000 dollars à 8.4%/a composé mensuellement sur 4 ans. Après 18 versements, on paie une somme forfaitaire de 3000 dollars. Quel est le nouveau solde (en dollars)?", balance(15000, payPV(15000, 0.007, 48), 0.007, 18) - 3000, "Solde après 18 versements, moins 3000."),
  num("Un prêt de 15 000 dollars à 8.4%/a composé mensuellement sur 4 ans. Après 18 versements, on paie une somme forfaitaire de 3000 dollars et le versement reste le même. Combien de versements faut-il encore?", paymentsToRepay(balance(15000, payPV(15000, 0.007, 48), 0.007, 18) - 3000, payPV(15000, 0.007, 48), 0.007), "Essais successifs pour n sur le nouveau solde."),
  $("Lis le graphique : un prêt de 25 000 dollars à 6%/a composé mensuellement. Combien d'intérêts le plan plus rapide (ambre, 100 dollars de plus) fait-il économiser par rapport au plan régulier (violet)? (en dollars)", totInt(25000, 0.005, 60) - interestAt(25000, payPV(25000, 0.005, 60) + 100, 0.005), "Simule les deux plans.", growthD([{ f: (t) => Math.max(0, balance(25000, payPV(25000, 0.005, 60), 0.005, 12 * t)) }, { f: (t) => Math.max(0, balance(25000, payPV(25000, 0.005, 60) + 100, 0.005, 12 * t)), color: "amber" }], 5, { ylabel: "solde" })),
  num("Le graphique montre le solde d'un prêt (30 000 dollars, 6%/a mensuel, 10 ans). Après combien d'années entières doit-on moins de la moitié du montant?", Math.ceil((() => { const R = payPV(30000, 0.005, 120); let k = 0; while (balance(30000, R, 0.005, k) >= 15000) k++; return k; })() / 12), "Trouve le premier mois où le solde est inférieur à 15 000, puis convertis en années (arrondis vers le haut).", growthD([{ f: (t) => Math.max(0, balance(30000, payPV(30000, 0.005, 120), 0.005, 12 * t)) }], 10, { ylabel: "solde", lines: [{ m: 0, b: 15000, color: "amber", dash: true }] })),
  $("Les barres montrent l'intérêt annuel payé sur un prêt de 20 000 dollars sur 4 ans à 6%/a composé mensuellement. Trouve le total des barres (en dollars).", totInt(20000, 0.005, 48), "Intérêt total = 48R − 20 000.", barsD([0, 1, 2, 3].map((y) => { const R = payPV(20000, 0.005, 48); return R * 12 - (balance(20000, R, 0.005, 12 * y) - balance(20000, R, 0.005, 12 * y + 12)); }), { xlabel: "année", ylabel: "intérêts payés" })),
  $("Les barres montrent l'intérêt annuel d'un prêt de 20 000 dollars sur 4 ans à 6%/a composé mensuellement. Combien d'intérêts paie-t-on la 1re année (en dollars)?", (() => { const R = payPV(20000, 0.005, 48); return R * 12 - (20000 - balance(20000, R, 0.005, 12)); })(), "12R moins le capital remboursé la 1re année.", barsD([0, 1, 2, 3].map((y) => { const R = payPV(20000, 0.005, 48); return R * 12 - (balance(20000, R, 0.005, 12 * y) - balance(20000, R, 0.005, 12 * y + 12)); }), { xlabel: "année", ylabel: "intérêts payés" })),
];
