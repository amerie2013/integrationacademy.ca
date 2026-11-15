// 8.5 Annuités : valeur actuelle — 20 questions difficiles (miroir de ../../mcr3u-ch8/bank/h8_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annPV, annFV, payPV, paymentsToRepay, pv, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const best = (opts) => opts.reduce((a, b) => (b[1] > a[1] ? b : a))[0];
const lottery = [["1 200 000 dollars maintenant", 1200000], ["80 000 dollars par année pendant 25 ans", annPV(80000, 0.045, 25)], ["150 000 dollars par année pendant 10 ans", annPV(150000, 0.045, 10)]];

export const TOPIC = "8.5 Annuités : valeur actuelle";
export const Q = [
  $("Combien faut-il avoir épargné à 65 ans pour retirer 3500 dollars à la fin de chaque mois jusqu'à 90 ans, à 4.2%/a composé mensuellement (en dollars)?", annPV(3500, 0.0035, 300), "i = 0.0035, n = 300."),
  $("Un prêt hypothécaire de 280 000 dollars est remboursé mensuellement sur 25 ans à 4.8%/a composé mensuellement. Trouve le versement (en dollars).", payPV(280000, 0.004, 300), "i = 0.004, n = 300."),
  $("Un prêt hypothécaire de 280 000 dollars est remboursé mensuellement sur 25 ans à 4.8%/a composé mensuellement. Trouve l'intérêt total (en dollars).", payPV(280000, 0.004, 300) * 300 - 280000, "300R − 280 000."),
  num("Combien de versements mensuels de 650 dollars remboursent un prêt de 25 000 dollars à 7.2%/a composé mensuellement (le dernier peut être plus petit)?", paymentsToRepay(25000, 650, 0.006), "Essais successifs pour n."),
  $("Une voiture coûte 30 000 dollars. On fait un versement initial de 5000 dollars et on finance le reste à 5.4%/a composé mensuellement sur 5 ans. Trouve le versement (en dollars).", payPV(25000, 0.0045, 60), "On finance 25 000."),
  $("Un prêt est remboursé par 1000 dollars par mois pendant 2 ans, puis 500 dollars par mois pendant 1 autre année, à 6%/a composé mensuellement. Combien a-t-on emprunté (en dollars)?", annPV(1000, 0.005, 24) + annPV(500, 0.005, 12) / 1.005 ** 24, "PV de la première annuité + PV de la deuxième, actualisée de 24 mois de plus."),
  mc("Quel prix vaut le plus aujourd'hui à 4.5%/a composé annuellement?", best(lottery), lottery.filter((o) => o[0] !== best(lottery)).map((o) => o[0]).concat(["ils valent tous la même chose"]), `Valeurs actuelles : ${lottery.map((o) => c2(o[1])).join(", ")}.`),
  $("Une étudiante doit 16 000 dollars à la fin de ses études et rembourse mensuellement sur 10 ans à 6%/a composé mensuellement. Trouve le versement mensuel (en dollars).", payPV(16000, 0.005, 120), "i = 0.005, n = 120."),
  tf("Si le taux d'intérêt est 0, la valeur actuelle d'une annuité est égale à Rn.", true, "Aucune actualisation."),
  tf("Rembourser un prêt sur 10 ans au lieu de 5 réduit l'intérêt total de moitié.", false, "Il le double à peu près."),
  ms("Un prêt de 20 000 dollars à 6%/a composé mensuellement. Lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", [`sur 4 ans, R ≈ ${c2(payPV(20000, 0.005, 48))}`, `sur 6 ans, R ≈ ${c2(payPV(20000, 0.005, 72))}`, "le prêt sur 6 ans coûte plus d'intérêt", "le versement sur 4 ans est exactement 1.5 fois le versement sur 6 ans", "les deux ont i = 0.005"], [0, 1, 2, 4], "Les versements ne sont pas dans le rapport des durées."),
  $("Quel est le solde restant dû d'un prêt de 10 000 dollars sur 5 ans à 6%/a composé mensuellement juste après le 36e versement (en dollars)?", annPV(payPV(10000, 0.005, 60), 0.005, 24), "PV des 24 versements restants."),
  $("Un fonds de 100 000 dollars à 5%/a composé annuellement verse des montants égaux à la fin de chaque année pendant 20 ans. Trouve le versement annuel (en dollars).", payPV(100000, 0.05, 20), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  num("Un fonds de 50 000 dollars à 4%/a verse 4000 dollars à la fin de chaque année. Pendant combien d'années complètes peut-il verser ce montant?", Math.floor(-Math.log(1 - (50000 * 0.04) / 4000) / Math.log(1.04)), "Trouve le plus grand n tel que PV(4000, n) ≤ 50 000."),
  $("Un couple épargne 400 dollars par mois pendant 15 ans à 6%/a composé mensuellement, puis retire des montants mensuels égaux pendant 15 ans au même taux. Trouve le retrait (en dollars).", payPV(annFV(400, 0.005, 180), 0.005, 180), "La FV de l'épargne devient la PV des retraits."),
  $("Une location coûte 450 dollars par mois pendant 4 ans. Quel prix comptant aujourd'hui est équivalent à 4.8%/a composé mensuellement (en dollars)?", annPV(450, 0.004, 48), "PV des versements de location."),
  $("Lis la droite de temps : 2000 dollars maintenant plus 500 dollars à la fin de chaque année pendant 6 ans, à 5%/a composé annuellement. Trouve la valeur actuelle totale (en dollars).", 2000 + annPV(500, 0.05, 6), "2000 + PV de l'annuité.", timelineD(6, { 1: "500", 2: "500", 3: "500", 4: "500", 5: "500", 6: "500" }, "2000")),
  num("Les barres montrent la PV de chacun de 5 versements annuels de 1000 dollars. Quel taux annuel fait que la première barre vaut 952.38? Entre le %.", 5, "1000 ÷ 952.38 = 1.05.", barsD([1, 2, 3, 4, 5].map((k) => 1000 / 1.05 ** k), { xlabel: "versement", ylabel: "valeur aujourd'hui", labels: [1, 2, 3, 4, 5].map((k) => String(c2(1000 / 1.05 ** k))) })),
  $("Le graphique montre un fonds de retraite de 400 000 dollars qui verse 2500 dollars par mois à 4.2%/a composé mensuellement. Trouve le solde après 10 ans (en dollars).", 400000 * 1.0035 ** 120 - annFV(2500, 0.0035, 120), "Fais croître le fonds, puis soustrais la FV des retraits.", growthD([{ f: (t) => Math.max(0, 400000 * 1.0035 ** (12 * t) - annFV(2500, 0.0035, 12 * t)) }], 20, { ylabel: "solde" })),
  num("Le graphique montre le même fonds de 400 000 dollars. Après combien d'années entières le fonds de 400 000 dollars qui verse 2500 par mois à 4.2%/a est-il épuisé?", Math.ceil(paymentsToRepay(400000, 2500, 0.0035) / 12), "Trouve n tel que la PV des versements ≥ 400 000, puis ÷ 12 (arrondis vers le haut).", growthD([{ f: (t) => Math.max(0, 400000 * 1.0035 ** (12 * t) - annFV(2500, 0.0035, 12 * t)) }], 25, { ylabel: "solde" })),
];
