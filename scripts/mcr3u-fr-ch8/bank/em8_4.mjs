// 8.4 Annuités : valeur future — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch8/bank/em8_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, timelineD, annFV, payFV, paymentsTo, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Trouve la valeur future de 1000 dollars déposés à la fin de chaque année pendant 3 ans à 10%/a composé annuellement (en dollars).", annFV(1000, 0.1, 3), "1210 + 1100 + 1000."),
  $("Trouve la valeur future de 500 dollars à la fin de chaque année pendant 4 ans à 5%/a composé annuellement (en dollars).", annFV(500, 0.05, 4), "R[(1 + i)ⁿ − 1]/i."),
  $("Trouve la valeur future de 200 dollars à la fin de chaque année pendant 10 ans à 6%/a composé annuellement (en dollars).", annFV(200, 0.06, 10), "200(1.06¹⁰ − 1)/0.06."),
  $("Trouve la valeur future de 100 dollars à la fin de chaque mois pendant 1 an à 12%/a composé mensuellement (en dollars).", annFV(100, 0.01, 12), "i = 0.01, n = 12."),
  $("Trouve la valeur future de 50 dollars à la fin de chaque mois pendant 2 ans à 6%/a composé mensuellement (en dollars).", annFV(50, 0.005, 24), "i = 0.005, n = 24."),
  $("Trouve la valeur future de 300 dollars à la fin de chaque période de 6 mois pendant 3 ans à 4%/a composé semestriellement (en dollars).", annFV(300, 0.02, 6), "i = 0.02, n = 6."),
  num("Combien dépose-t-on au total en versant 80 dollars par mois pendant 5 ans (en dollars)?", 4800, "80 × 60."),
  num("Combien de versements fait-on dans une annuité de 4 ans à versements trimestriels?", 16, "4 × 4."),
  mc("Qu'est-ce qu'une annuité?", "une suite de versements égaux faits à intervalles réguliers", ["un dépôt unique", "un prêt sans intérêt", "un versement fait une seule fois par année seulement"], "Des versements égaux et réguliers."),
  mc("Dans une annuité de fin de période, les versements sont faits …", "à la fin de chaque période", ["au début de chaque période", "seulement à la fin de la durée", "à des moments aléatoires"], "Fin de période = à la fin de chaque période."),
  tf("Le dernier versement d'une annuité de fin de période ne rapporte aucun intérêt.", true, "Il est fait tout à la fin."),
  tf("La valeur future d'une annuité est égale au total des versements.", false, "Elle comprend aussi l'intérêt gagné."),
  mc("Quelle formule donne la valeur future d'une annuité?", S`\(FV=\frac{R[(1+i)^n-1]}{i}\)`, [S`\(FV=R(1+i)^n\)`, S`\(FV=\frac{R[1-(1+i)^{-n}]}{i}\)`, S`\(FV=Rn\)`], "La somme d'une série géométrique."),
  $("Un dépôt de 1000 dollars fait à la fin de la 1re année d'une annuité de 5 ans à 4%/a rapporte de l'intérêt pendant 4 ans. Combien vaut-il à la fin (en dollars)?", 1000 * 1.04 ** 4, "1000(1.04)⁴."),
  $("Trouve l'intérêt gagné quand on dépose 100 dollars à la fin de chaque année pendant 3 ans à 10%/a (en dollars).", annFV(100, 0.1, 3) - 300, "FV − 300."),
  num("Quelle est la raison de la série géométrique de la valeur future d'une annuité à 5% par période?", 1.05, "1 + i.", null, 0.0001),
  $("Trouve la valeur future de 2000 dollars à la fin de chaque année pendant 5 ans à 3%/a composé annuellement (en dollars).", annFV(2000, 0.03, 5), "2000(1.03⁵ − 1)/0.03."),
  $("Trouve la valeur future de 25 dollars par semaine pendant 1 an à 5.2%/a composé hebdomadairement (en dollars).", annFV(25, 0.001, 52), "i = 0.001, n = 52."),
  $("Les barres montrent la valeur de chaque dépôt à la fin. Trouve le total (en dollars).", 400 * 1.05 ** 2 + 400 * 1.05 + 400, "441 + 420 + 400.", barsD([441, 420, 400], { xlabel: "dépôt", ylabel: "valeur à la fin", labels: ["441", "420", "400"] })),
  $("Lis la droite de temps : 600 dollars à la fin de chaque année pendant 4 ans à 7%/a. Trouve la valeur future (en dollars).", annFV(600, 0.07, 4), "600(1.07⁴ − 1)/0.07.", timelineD(4, { 1: "600", 2: "600", 3: "600", 4: "600" }, "0")),
];

export const M = [
  $("Trouve la valeur future de 175 dollars à la fin de chaque mois pendant 6 ans à 4.2%/a composé mensuellement (en dollars).", annFV(175, 0.0035, 72), "i = 0.0035, n = 72."),
  $("Trouve la valeur future de 1250 dollars à la fin de chaque trimestre pendant 8 ans à 5.6%/a composé trimestriellement (en dollars).", annFV(1250, 0.014, 32), "i = 0.014, n = 32."),
  $("Trouve la valeur future de 2500 dollars à la fin de chaque période de 6 mois pendant 12 ans à 3.8%/a composé semestriellement (en dollars).", annFV(2500, 0.019, 24), "i = 0.019, n = 24."),
  $("Trouve l'intérêt gagné en déposant 90 dollars à la fin de chaque mois pendant 10 ans à 6%/a composé mensuellement (en dollars).", annFV(90, 0.005, 120) - 10800, "FV − 90 × 120."),
  $("Quel dépôt annuel à 5%/a composé annuellement atteint 20 000 dollars en 10 ans (en dollars)?", payFV(20000, 0.05, 10), "R = FV·i/[(1 + i)ⁿ − 1]."),
  $("Quel dépôt mensuel à 3%/a composé mensuellement atteint 10 000 dollars en 5 ans (en dollars)?", payFV(10000, 0.0025, 60), "i = 0.0025, n = 60."),
  $("Quel dépôt trimestriel à 6%/a composé trimestriellement atteint 50 000 dollars en 15 ans (en dollars)?", payFV(50000, 0.015, 60), "i = 0.015, n = 60."),
  num("Combien de dépôts annuels de 3000 dollars à 6%/a composé annuellement faut-il pour atteindre 40 000 dollars?", paymentsTo(40000, 3000, 0.06), "Essais successifs pour n."),
  num("Combien de dépôts mensuels de 200 dollars à 4.8%/a composé mensuellement faut-il pour atteindre 10 000 dollars?", paymentsTo(10000, 200, 0.004), "Essais successifs pour n."),
  ms("Pour 500 dollars à la fin de chaque année pendant 4 ans à 6%/a, lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", ["le premier dépôt atteint 500(1.06)³", "le dernier dépôt reste à 500", `FV ≈ ${c2(annFV(500, 0.06, 4))}`, "total des dépôts = 2000", "l'intérêt est de 120"], [0, 1, 2, 3], `Intérêt ≈ ${c2(annFV(500, 0.06, 4) - 2000)}.`),
  mc("Doubler le versement d'une annuité (même taux et même durée) …", "double la valeur future", ["fait plus que la doubler", "fait moins que la doubler", "ne la change pas"], "FV est proportionnelle à R."),
  tf("Doubler le nombre de versements d'une annuité fait plus que doubler sa valeur future (pour un taux positif).", true, "Les premiers versements ont plus de temps pour croître."),
  tf("Dans une annuité simple, la période de versement et la période de capitalisation sont les mêmes.", true, "C'est le sens du mot « simple » ici."),
  $("Un élève épargne 40 dollars à la fin de chaque semaine pendant 3 ans à 2.6%/a composé hebdomadairement. Trouve la valeur future (en dollars).", annFV(40, 0.0005, 156), "i = 0.026/52 = 0.0005, n = 156."),
  $("Trouve la valeur future après 20 ans de 1500 dollars à la fin de chaque année à 7%/a composé annuellement (en dollars).", annFV(1500, 0.07, 20), "1500(1.07²⁰ − 1)/0.07."),
  $("Deux amis épargnent pendant 10 ans à 5%/a composé annuellement : Ana 1000 dollars par année, Benoît 2000 dollars par année pendant les 5 dernières années seulement. Combien Benoît a-t-il de plus (en dollars)?", annFV(2000, 0.05, 5) - annFV(1000, 0.05, 10), "Compare les deux valeurs futures."),
  $("Une épargnante dépose 250 dollars à la fin de chaque mois pendant 4 ans à 6%/a composé mensuellement, puis arrête et laisse l'argent croître 2 ans de plus. Trouve le montant final (en dollars).", annFV(250, 0.005, 48) * 1.005 ** 24, "FV après 4 ans × 1.005²⁴."),
  num("Au pourcentage entier près, quelle fraction de la valeur future de 100 dollars par année pendant 30 ans à 6% est de l'intérêt?", Math.round(((annFV(100, 0.06, 30) - 3000) / annFV(100, 0.06, 30)) * 100), "(FV − 3000)/FV.", null, 1),
  $("Le graphique montre une épargne de 1200 dollars par année à 6%/a. Lis la valeur future après 15 ans (en dollars).", annFV(1200, 0.06, 15), "1200(1.06¹⁵ − 1)/0.06.", growthD([{ f: (t) => annFV(1200, 0.06, t) }], 15, { pts: [[15, annFV(1200, 0.06, 15), "15 ans"]] })),
  $("Les barres montrent la valeur, à la fin de l'année, de chacun des quatre dépôts trimestriels à 8%/a composé trimestriellement. Trouve le total (en dollars).", annFV(500, 0.02, 4), "500(1.02⁴ − 1)/0.02.", barsD([500 * 1.02 ** 3, 500 * 1.02 ** 2, 510, 500], { xlabel: "dépôt", ylabel: "valeur à la fin" })),
];
