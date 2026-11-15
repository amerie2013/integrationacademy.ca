// 8.3 Intérêt composé : valeur actuelle — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch8/bank/em8_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { growthD, timelineD, pv, fv, periodsTo, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Trouve la valeur actuelle de 1100 dollars payables dans 1 an à 10%/a composé annuellement (en dollars).", 1000, "1100 ÷ 1.1."),
  $("Trouve la valeur actuelle de 2000 dollars payables dans 3 ans à 5%/a composé annuellement (en dollars).", pv(2000, 0.05, 3), "2000(1.05)⁻³."),
  $("Trouve la valeur actuelle de 5000 dollars payables dans 2 ans à 4%/a composé annuellement (en dollars).", pv(5000, 0.04, 2), "5000 ÷ 1.04²."),
  $("Trouve la valeur actuelle de 800 dollars payables dans 4 ans à 6%/a composé annuellement (en dollars).", pv(800, 0.06, 4), "800(1.06)⁻⁴."),
  $("Trouve la valeur actuelle de 3000 dollars payables dans 2 ans à 6%/a composé semestriellement (en dollars).", pv(3000, 0.03, 4), "i = 0.03, n = 4."),
  $("Trouve la valeur actuelle de 1000 dollars payables dans 1 an à 12%/a composé mensuellement (en dollars).", pv(1000, 0.01, 12), "i = 0.01, n = 12."),
  mc("Quelle formule donne la valeur actuelle?", S`\(PV=A(1+i)^{-n}\)`, [S`\(PV=A(1+i)^n\)`, S`\(PV=\frac{A}{1+in}\)`, S`\(PV=A-in\)`], "Divise par le facteur de croissance."),
  tf("La valeur actuelle d'un montant futur est inférieure à ce montant (pour un taux d'intérêt positif).", true, "Elle augmente pour atteindre le montant."),
  tf("Un taux d'intérêt plus élevé donne une valeur actuelle plus élevée.", false, "Il faut placer moins d'argent maintenant."),
  mc("Lequel vaut le plus aujourd'hui à 5%/a : 1000 dollars maintenant ou 1000 dollars dans 2 ans?", "1000 dollars maintenant", ["1000 dollars dans 2 ans", "ils sont égaux", "on ne peut pas décider"], "L'argent disponible maintenant peut rapporter de l'intérêt."),
  num("Selon la règle de 72, environ combien d'années faut-il pour que l'argent double à 6%/a?", 12, "72 ÷ 6."),
  num("Selon la règle de 72, environ combien d'années faut-il pour que l'argent double à 9%/a?", 8, "72 ÷ 9."),
  num("Combien d'années entières faut-il pour que l'argent double à 10%/a composé annuellement?", periodsTo(2, 0.1), "1.1ⁿ ≥ 2."),
  num("Combien d'années entières faut-il pour que 1000 dollars atteignent 1200 dollars à 5%/a composé annuellement?", periodsTo(1.2, 0.05), "1.05ⁿ ≥ 1.2."),
  $("Écris 4000(1.05)⁻² sous forme de montant en dollars.", pv(4000, 0.05, 2), "4000 ÷ 1.1025."),
  $("Combien faut-il placer maintenant à 8%/a composé annuellement pour avoir 5000 dollars dans 5 ans (en dollars)?", pv(5000, 0.08, 5), "5000(1.08)⁻⁵."),
  $("Trouve la valeur actuelle de 10 000 dollars payables dans 10 ans à 7%/a composé annuellement (en dollars).", pv(10000, 0.07, 10), "10 000 ÷ 1.07¹⁰."),
  num("À 4%/a, vaut-il mieux 950 dollars maintenant ou 1000 dollars dans un an? Entre 1 pour maintenant, 2 pour plus tard.", 950 > pv(1000, 0.04, 1) ? 1 : 2, `La PV de 1000 est ${c2(pv(1000, 0.04, 1))}.`),
  $("La droite de temps montre 6000 dollars payables dans 4 ans. Trouve leur valeur actuelle à 5%/a composé annuellement (en dollars).", pv(6000, 0.05, 4), "6000(1.05)⁻⁴.", timelineD(4, { 4: "6000" })),
  $("Le graphique montre un montant qui croît à 6%/a composé annuellement jusqu'à 7000 dollars en 8 ans. Combien avait-on placé au départ (en dollars)?", pv(7000, 0.06, 8), "7000 ÷ 1.06⁸.", growthD([{ f: (t) => pv(7000, 0.06, 8) * 1.06 ** t }], 8, { pts: [[8, 7000, "7000"]] })),
];

export const M = [
  $("Trouve la valeur actuelle de 15 000 dollars payables dans 6 ans à 4.8%/a composé mensuellement (en dollars).", pv(15000, 0.004, 72), "i = 0.004, n = 72."),
  $("Trouve la valeur actuelle de 25 000 dollars payables dans 12 ans à 5.5%/a composé trimestriellement (en dollars).", pv(25000, 0.01375, 48), "i = 0.01375, n = 48."),
  $("Trouve la valeur actuelle de 9000 dollars payables dans 5 ans à 3.4%/a composé semestriellement (en dollars).", pv(9000, 0.017, 10), "i = 0.017, n = 10."),
  $("Une dette de 4000 dollars est payable dans 3 ans. Quel paiement équivalent pourrait-on faire aujourd'hui à 6%/a composé annuellement (en dollars)?", pv(4000, 0.06, 3), "PV de 4000."),
  $("Trouve la valeur actuelle combinée de 2000 dollars payables dans 2 ans et de 3000 dollars payables dans 5 ans à 5%/a composé annuellement (en dollars).", pv(2000, 0.05, 2) + pv(3000, 0.05, 5), "Additionne les deux valeurs actuelles."),
  num("Combien de trimestres faut-il pour que 2000 dollars atteignent 2500 dollars à 6%/a composé trimestriellement?", periodsTo(1.25, 0.015), "1.015ⁿ ≥ 1.25."),
  num("Combien de mois faut-il pour que l'argent augmente de 30% à 6%/a composé mensuellement?", periodsTo(1.3, 0.005), "1.005ⁿ ≥ 1.3."),
  num("Combien d'années entières faut-il pour que l'argent triple à 8%/a composé annuellement?", periodsTo(3, 0.08), "1.08ⁿ ≥ 3."),
  num("Offre A : 7000 dollars maintenant. Offre B : 8500 dollars dans 4 ans. À 5%/a composé annuellement, laquelle est la meilleure? Entre 1 pour A ou 2 pour B.", 7000 > pv(8500, 0.05, 4) ? 1 : 2, `PV de B : ${c2(pv(8500, 0.05, 4))}.`),
  ms("Lesquelles sont égales à la valeur actuelle de 1000 dollars payables dans 3 ans à 5%/a composé annuellement? Choisis toutes les bonnes réponses.", [S`\(1000(1.05)^{-3}\)`, S`\(\frac{1000}{1.05^3}\)`, `environ ${c2(pv(1000, 0.05, 3))} dollars`, S`\(1000(0.95)^3\)`], [0, 1, 2], "Diviser par 1.05 n'est pas la même chose que multiplier par 0.95."),
  mc("Quelle stratégie permet de trouver n dans A = P(1 + i)ⁿ sans logarithmes?", "des essais successifs avec des puissances de (1 + i)", ["diviser A par i", "multiplier P par n", "utiliser plutôt l'intérêt simple"], "Essaie des valeurs de n."),
  tf("Doubler le temps avant l'échéance réduit de moitié la valeur actuelle.", false, "La PV dépend de (1 + i)⁻ⁿ, pas de 1/n."),
  tf("La valeur actuelle d'un montant payable dans 0 an est le montant lui-même.", true, "(1 + i)⁰ = 1."),
  $("Des parents veulent 40 000 dollars dans 16 ans. Combien devraient-ils placer maintenant à 4.5%/a composé mensuellement (en dollars)?", pv(40000, 0.045 / 12, 192), "i = 0.00375, n = 192."),
  $("Une obligation à coupon zéro paie 5000 dollars dans 7 ans. Combien devrait-elle coûter aujourd'hui si l'argent rapporte 3.9%/a composé semestriellement (en dollars)?", pv(5000, 0.0195, 14), "i = 0.0195, n = 14."),
  num("À quel taux annuel (composé annuellement) 6000 dollars payables dans 5 ans valent-ils 4700 dollars aujourd'hui (%, 2 décimales)?", c2(((6000 / 4700) ** 0.2 - 1) * 100), "(6000/4700)^(1/5) − 1.", null, 0.01),
  num("Combien d'années entières faut-il pour que l'argent double à 3%/a composé annuellement, et à quel point la règle de 72 s'en approche-t-elle? Entre le nombre exact d'années entières.", periodsTo(2, 0.03), "1.03ⁿ ≥ 2; la règle de 72 donne 24."),
  $("Un paiement de 12 000 dollars est dû dans 6 ans. Quel paiement équivalent serait dû dans 2 ans, à 5%/a composé annuellement (en dollars)?", pv(12000, 0.05, 4), "Ramène-le de 4 ans."),
  $("Lis la droite de temps : trouve la valeur actuelle totale à 6%/a composé annuellement (en dollars).", pv(1500, 0.06, 2) + pv(2500, 0.06, 5), "Actualise chaque paiement.", timelineD(5, { 2: "1500", 5: "2500" })),
  num("Le graphique montre la valeur actuelle de 10 000 dollars payables dans t années à un certain taux. Lis la valeur à t = 10 ans au dollar près.", Math.round(pv(10000, 0.05, 10)), "10 000(1.05)⁻¹⁰.", growthD([{ f: (t) => pv(10000, 0.05, t) }], 20, { ylabel: "PV", pts: [[10, pv(10000, 0.05, 10), `t = 10`]] }), 1),
];
