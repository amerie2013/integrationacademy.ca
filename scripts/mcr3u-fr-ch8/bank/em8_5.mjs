// 8.5 Annuités : valeur actuelle — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch8/bank/em8_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annPV, payPV, paymentsToRepay, pv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Trouve la valeur actuelle de 1000 dollars à la fin de chaque année pendant 2 ans à 10%/a composé annuellement (en dollars).", annPV(1000, 0.1, 2), "1000/1.1 + 1000/1.1²."),
  $("Trouve la valeur actuelle de 500 dollars à la fin de chaque année pendant 3 ans à 5%/a composé annuellement (en dollars).", annPV(500, 0.05, 3), "R[1 − (1 + i)⁻ⁿ]/i."),
  $("Trouve la valeur actuelle de 2000 dollars à la fin de chaque année pendant 5 ans à 4%/a composé annuellement (en dollars).", annPV(2000, 0.04, 5), "2000(1 − 1.04⁻⁵)/0.04."),
  $("Trouve la valeur actuelle de 100 dollars à la fin de chaque mois pendant 1 an à 12%/a composé mensuellement (en dollars).", annPV(100, 0.01, 12), "i = 0.01, n = 12."),
  $("Trouve la valeur actuelle de 300 dollars à la fin de chaque trimestre pendant 2 ans à 8%/a composé trimestriellement (en dollars).", annPV(300, 0.02, 8), "i = 0.02, n = 8."),
  $("Trouve la valeur actuelle de 750 dollars tous les 6 mois pendant 4 ans à 6%/a composé semestriellement (en dollars).", annPV(750, 0.03, 8), "i = 0.03, n = 8."),
  mc("Quelle formule donne la valeur actuelle d'une annuité?", S`\(PV=\frac{R[1-(1+i)^{-n}]}{i}\)`, [S`\(PV=\frac{R[(1+i)^n-1]}{i}\)`, S`\(PV=R(1+i)^{-n}\)`, S`\(PV=Rn\)`], "Somme des versements actualisés."),
  mc("Un prêt de 5000 dollars remboursé par des versements mensuels égaux est …", "la valeur actuelle des versements", ["la valeur future des versements", "le total des versements", "l'intérêt sur les versements"], "Montant emprunté = PV."),
  tf("La valeur actuelle d'une annuité est inférieure à la somme de ses versements.", true, "Chaque versement est actualisé."),
  tf("Pour trouver le versement d'un prêt, on utilise la formule de la valeur future d'une annuité.", false, "Utilise la formule de la valeur actuelle."),
  num("Combien paie-t-on au total sur un prêt de 36 versements de 250 dollars (en dollars)?", 9000, "36 × 250."),
  num("On paie un total de 9000 dollars sur un prêt de 8000 dollars. Combien d'intérêt cela représente-t-il (en dollars)?", 1000, "9000 − 8000."),
  $("Trouve le versement mensuel d'un prêt de 1200 dollars sur 1 an à 12%/a composé mensuellement (en dollars).", payPV(1200, 0.01, 12), "R = PV·i/[1 − (1 + i)⁻ⁿ]."),
  $("Trouve le versement annuel d'un prêt de 10 000 dollars sur 5 ans à 6%/a composé annuellement (en dollars).", payPV(10000, 0.06, 5), "10 000(0.06)/(1 − 1.06⁻⁵)."),
  $("Trouve la valeur actuelle d'un versement de 400 dollars dû à la fin de l'année 3 à 5%/a composé annuellement (en dollars).", pv(400, 0.05, 3), "400(1.05)⁻³."),
  num("Quel est le premier terme de la série géométrique de la PV d'une annuité de 1000 dollars à 5% par période? (en dollars, 2 décimales)", c2(1000 / 1.05), "Le premier versement actualisé d'une période.", null, 0.01),
  num("Quelle est la raison de la série de la PV d'une annuité à 5% par période? (4 décimales)", Math.round((1 / 1.05) * 10000) / 10000, "(1.05)⁻¹.", null, 0.0001),
  mc("Une personne retraitée veut retirer 2000 dollars par mois pendant 20 ans. Quelle valeur indique combien il lui faut au moment de la retraite?", "la valeur actuelle d'une annuité", ["la valeur future d'une annuité", "l'intérêt simple", "la valeur future d'un montant unique"], "Une somme forfaitaire maintenant qui finance les versements."),
  $("Lis la droite de temps : des versements de 600 dollars à la fin de chaque année pendant 3 ans à 4%/a. Trouve la valeur actuelle (en dollars).", annPV(600, 0.04, 3), "Actualise chaque versement et additionne.", timelineD(3, { 1: "600", 2: "600", 3: "600" }, "PV?")),
  $("Les barres montrent les valeurs actuelles de 4 versements annuels de 1000 dollars à 8%. Trouve leur total (en dollars).", annPV(1000, 0.08, 4), "Additionne les barres.", barsD([1, 2, 3, 4].map((k) => 1000 / 1.08 ** k), { xlabel: "versement", ylabel: "valeur aujourd'hui" })),
];

export const M = [
  $("Trouve la valeur actuelle de 250 dollars à la fin de chaque mois pendant 4 ans à 4.8%/a composé mensuellement (en dollars).", annPV(250, 0.004, 48), "i = 0.004, n = 48."),
  $("Trouve la valeur actuelle de 1800 dollars à la fin de chaque trimestre pendant 7 ans à 5.2%/a composé trimestriellement (en dollars).", annPV(1800, 0.013, 28), "i = 0.013, n = 28."),
  $("Trouve le versement mensuel d'un prêt auto de 15 000 dollars sur 5 ans à 6.6%/a composé mensuellement (en dollars).", payPV(15000, 0.0055, 60), "i = 0.0055, n = 60."),
  $("Trouve l'intérêt total d'un prêt auto de 15 000 dollars remboursé mensuellement sur 5 ans à 6.6%/a composé mensuellement (en dollars).", payPV(15000, 0.0055, 60) * 60 - 15000, "60R − 15 000."),
  $("Trouve le versement trimestriel d'un prêt de 20 000 dollars sur 4 ans à 7.2%/a composé trimestriellement (en dollars).", payPV(20000, 0.018, 16), "i = 0.018, n = 16."),
  $("Combien peut-on emprunter à 5.4%/a composé mensuellement avec des versements de 350 dollars par mois pendant 3 ans (en dollars)?", annPV(350, 0.0045, 36), "PV des versements."),
  $("Combien faut-il maintenant pour financer des retraits de 1500 dollars tous les 6 mois pendant 10 ans à 4%/a composé semestriellement (en dollars)?", annPV(1500, 0.02, 20), "i = 0.02, n = 20."),
  num("Combien de versements mensuels de 300 dollars remboursent un prêt de 5000 dollars à 9%/a composé mensuellement (le dernier peut être plus petit)?", paymentsToRepay(5000, 300, 0.0075), "Essais successifs pour n."),
  num("Combien de versements annuels de 2000 dollars remboursent un prêt de 10 000 dollars à 8%/a composé annuellement (le dernier peut être plus petit)?", paymentsToRepay(10000, 2000, 0.08), "Essais successifs pour n."),
  ms("Un prêt de 6000 dollars est remboursé par 24 versements mensuels à 6%/a composé mensuellement. Lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", ["i = 0.005", "n = 24", `R ≈ ${c2(payPV(6000, 0.005, 24))}`, `l'intérêt total est d'environ ${c2(payPV(6000, 0.005, 24) * 24 - 6000)}`, "le total payé est de 6000"], [0, 1, 2, 3], "Le total payé comprend l'intérêt."),
  mc("Quelle offre vaut le plus aujourd'hui à 5%/a composé annuellement?", annPV(4000, 0.05, 6) > 20000 ? "4000 dollars par année pendant 6 ans" : "20 000 dollars maintenant", [annPV(4000, 0.05, 6) > 20000 ? "20 000 dollars maintenant" : "4000 dollars par année pendant 6 ans", "elles valent exactement la même chose", "on ne peut pas les comparer"], `PV des versements ≈ ${c2(annPV(4000, 0.05, 6))}.`),
  tf("Pour le même prêt et le même taux, une durée plus longue donne un versement plus petit, mais plus d'intérêt total.", true, `p. ex. 10 000 à 6% : ${c2(payPV(10000, 0.005, 36))} sur 3 ans contre ${c2(payPV(10000, 0.005, 60))} sur 5 ans.`),
  tf("Doubler la durée d'un prêt réduit le versement de moitié.", false, "Le versement diminue de moins de la moitié à cause de l'intérêt."),
  $("Une bourse verse 3000 dollars à la fin de chaque année pendant 4 ans. Combien faut-il déposer maintenant à 3.5%/a composé annuellement (en dollars)?", annPV(3000, 0.035, 4), "PV des versements."),
  $("Un prix verse 25 000 dollars par année pendant 20 ans. Combien vaut-il aujourd'hui à 4%/a composé annuellement (en dollars)?", annPV(25000, 0.04, 20), "25 000(1 − 1.04⁻²⁰)/0.04."),
  num("Un prix verse 25 000 dollars par année pendant 20 ans. À 4%/a composé annuellement, quel pourcentage du total des versements représente la valeur actuelle (au % entier près)?", Math.round((annPV(25000, 0.04, 20) / 500000) * 100), "PV ÷ 500 000.", null, 1),
  $("Un prêt de 12 000 dollars à 7.8%/a composé mensuellement est remboursé sur 3 ans. Trouve le versement mensuel (en dollars).", payPV(12000, 0.0065, 36), "i = 0.0065, n = 36."),
  $("Quelle somme forfaitaire aujourd'hui équivaut à 200 dollars par mois pendant 25 ans à 6%/a composé mensuellement (en dollars)?", annPV(200, 0.005, 300), "i = 0.005, n = 300."),
  $("Lis le graphique : un fonds verse 2000 dollars par année jusqu'à ce que le solde soit 0 après 10 ans à 5%/a. Combien contenait le fonds au départ (en dollars)?", annPV(2000, 0.05, 10), "PV de 10 versements.", growthD([{ f: (t) => Math.max(0, annPV(2000, 0.05, 10) * 1.05 ** t - (2000 * (1.05 ** t - 1)) / 0.05) }], 10, { ylabel: "solde" })),
  $("Lis la droite de temps : un prêt est remboursé par 4 versements de 1500 dollars à 7%/a composé annuellement. Combien a-t-on emprunté (en dollars)?", annPV(1500, 0.07, 4), "PV des versements.", timelineD(4, { 1: "1500", 2: "1500", 3: "1500", 4: "1500" }, "prêt?")),
];
