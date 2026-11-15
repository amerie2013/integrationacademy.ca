// 8.3 Intérêt composé : valeur actuelle — 20 questions difficiles (miroir de ../../mcr3u-ch8/bank/h8_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { growthD, timelineD, pv, fv, periodsTo, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const TOPIC = "8.3 Intérêt composé : valeur actuelle";
export const Q = [
  $("Tu dois 5000 dollars dans 2 ans et 8000 dollars dans 6 ans. Quel paiement unique dans 4 ans règle les deux dettes, à 5%/a composé annuellement (en dollars)?", fv(5000, 0.05, 2) + pv(8000, 0.05, 2), "Avance 5000 de 2 ans et ramène 8000 de 2 ans."),
  $("L'offre A paie 3000 dollars maintenant et 3000 dollars dans 3 ans. L'offre B paie 6500 dollars dans 3 ans. À 6%/a composé annuellement, trouve la valeur actuelle de A (en dollars).", 3000 + pv(3000, 0.06, 3), "3000 + 3000(1.06)⁻³."),
  num("L'offre A paie 3000 dollars maintenant et 3000 dollars dans 3 ans. L'offre B paie 6500 dollars dans 3 ans. Laquelle est la meilleure à 6%/a composé annuellement? Entre 1 pour A ou 2 pour B.", 3000 + pv(3000, 0.06, 3) > pv(6500, 0.06, 3) ? 1 : 2, `PV(B) = ${c2(pv(6500, 0.06, 3))}.`),
  num("Combien de mois faut-il pour que 4000 dollars atteignent 5000 dollars à 4.8%/a composé mensuellement?", periodsTo(1.25, 0.004), "1.004ⁿ ≥ 1.25."),
  num("Combien de trimestres faut-il pour que l'argent double à 5%/a composé trimestriellement?", periodsTo(2, 0.0125), "1.0125ⁿ ≥ 2."),
  num("À quel taux annuel composé annuellement l'argent double-t-il en exactement 9 ans (%, 2 décimales)?", c2((2 ** (1 / 9) - 1) * 100), "2^(1/9) − 1.", null, 0.01),
  num("À quel taux annuel composé trimestriellement 10 000 dollars payables dans 8 ans valent-ils 7000 dollars aujourd'hui (%, 2 décimales)?", c2(((10000 / 7000) ** (1 / 32) - 1) * 4 * 100), "(10/7)^(1/32) − 1, puis × 4.", null, 0.01),
  $("Un prêt est remboursé par 2500 dollars dans 1 an et 2500 dollars dans 2 ans à 8%/a composé trimestriellement. Combien a-t-on emprunté (en dollars)?", pv(2500, 0.02, 4) + pv(2500, 0.02, 8), "Actualise chaque paiement."),
  tf("Si le taux double, la valeur actuelle d'un montant futur est réduite de moitié.", false, "La PV dépend de (1 + i)⁻ⁿ, qui n'est pas réduit de moitié."),
  tf("La valeur actuelle de 1000 dollars dans 10 ans à 7% est inférieure à la moitié de 1000 dollars.", true, `1.07¹⁰ ≈ ${(1.07 ** 10).toFixed(3)} > 2.`),
  ms("Quelles stratégies permettent de trouver n dans 1.05ⁿ = 1.6? Choisis toutes les bonnes réponses.", ["des essais successifs avec des puissances de 1.05", "tracer y = 1.05ˣ et y = 1.6 et trouver le point d'intersection", "utiliser une table de valeurs", "diviser 1.6 par 1.05"], [0, 1, 2], "1.6 ÷ 1.05 n'est pas n."),
  mc("Quel paiement a la plus grande valeur actuelle à 6%/a composé annuellement?", "5000 dollars dans 1 an", ["5250 dollars dans 2 ans", "5600 dollars dans 3 ans", "5900 dollars dans 4 ans"], `Valeurs actuelles : ${[[5000, 1], [5250, 2], [5600, 3], [5900, 4]].map(([a, n]) => c2(pv(a, 0.06, n))).join(", ")}.`),
  $("Une loterie paie 50 000 dollars maintenant et 50 000 dollars dans 5 ans. Combien vaut-elle aujourd'hui à 4.2%/a composé mensuellement (en dollars)?", 50000 + pv(50000, 0.0035, 60), "50 000 + PV du deuxième paiement."),
  num("Au dollar près, combien faut-il placer de plus maintenant à 3%/a qu'à 6%/a (les deux composés annuellement) pour avoir 20 000 dollars dans 10 ans?", Math.round(pv(20000, 0.03, 10) - pv(20000, 0.06, 10)), "Différence des deux valeurs actuelles.", null, 1),
  $("Une dette de 7000 dollars payable dans 5 ans est remplacée par deux paiements égaux, maintenant et dans 5 ans. À 5%/a composé annuellement, trouve chaque paiement (en dollars).", 7000 / (1 + 1.05 ** 5), "x(1.05)⁵ + x = 7000 à l'année 5."),
  num("Après combien d'années entières 1000 dollars à 9%/a composé annuellement dépassent-ils de plus de 500 dollars 1000 dollars à 6%/a composé annuellement?", (() => { let t = 1; while (fv(1000, 0.09, t) - fv(1000, 0.06, t) <= 500) t++; return t; })(), "Compare année par année."),
  $("Lis la droite de temps : trouve la valeur actuelle totale à 4%/a composé semestriellement (en dollars).", pv(3000, 0.02, 4) + pv(3000, 0.02, 8) + pv(3000, 0.02, 12), "Actualise chaque paiement (2, 4, 6 ans).", timelineD(6, { 2: "3000", 4: "3000", 6: "3000" })),
  num("Le graphique montre 2000 dollars qui croissent à 6%/a composé annuellement. Lis l'année où le montant dépasse 4000 dollars pour la première fois.", periodsTo(2, 0.06), "Temps de doublement à 6%.", growthD([{ f: (t) => 2000 * 1.06 ** t }], 16, { lines: [{ m: 0, b: 4000, color: "amber", dash: true }] })),
  num("Le graphique montre la PV de 10 000 dollars payables dans t années. Trouve le taux (capitalisation annuelle, en %) à l'aide de la PV indiquée à 10 ans.", 4, `PV(10) = ${c2(pv(10000, 0.04, 10))} : (10 000/PV)^(1/10) − 1.`, growthD([{ f: (t) => pv(10000, 0.04, t) }], 20, { ylabel: "PV", pts: [[10, pv(10000, 0.04, 10), `(10, ${c2(pv(10000, 0.04, 10))})`]] }), 0.01),
  $("Lis la droite de temps : une voiture est payée 5000 dollars maintenant et 10 000 dollars dans 2 ans. Quel est le prix comptant aujourd'hui à 7.2%/a composé mensuellement (en dollars)?", 5000 + pv(10000, 0.006, 24), "5000 + 10 000(1.006)⁻²⁴.", timelineD(2, { 2: "10 000" }, "5000")),
];
