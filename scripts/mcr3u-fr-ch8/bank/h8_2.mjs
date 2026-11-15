// 8.2 Intérêt composé : valeur future — 20 questions difficiles (miroir de ../../mcr3u-ch8/bank/h8_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const rate = (P, A, n) => c2(((A / P) ** (1 / n) - 1) * 100);
const overtake = (() => { let t = 1; while (fv(1000, 0.05, t) <= 1000 * (1 + 0.07 * t)) t++; return t; })();

export const TOPIC = "8.2 Intérêt composé : valeur future";
export const Q = [
  num(`5000 dollars atteignent ${c2(fv(5000, 0.0175, 16))} dollars en 4 ans avec une capitalisation trimestrielle. Trouve le taux annuel (%, 2 décimales).`, 7, "(A/P)^(1/16) − 1 = 0.0175; × 4.", null, 0.01),
  num("Quel taux annuel composé annuellement fait passer 3000 dollars à 4500 dollars en 7 ans (%, 2 décimales)?", rate(3000, 4500, 7), "(1.5)^(1/7) − 1.", null, 0.01),
  num("Trouve le taux annuel effectif de 9%/a composé mensuellement (%, 2 décimales).", c2((1.0075 ** 12 - 1) * 100), "1.0075¹² − 1.", null, 0.01),
  num("Trouve le taux annuel effectif de 8%/a composé trimestriellement (%, 2 décimales).", c2((1.02 ** 4 - 1) * 100), "1.02⁴ − 1.", null, 0.01),
  num(`Intérêt simple à 7%/a ou intérêt composé à 5%/a (annuellement) sur 1000 dollars : après combien d'années entières l'intérêt composé donne-t-il plus pour la première fois?`, overtake, "Compare année par année."),
  $("Un compte rapporte 4%/a composé mensuellement pendant 2 ans, puis 5.2%/a composé trimestriellement pendant 3 ans. Trouve le montant final de 8000 dollars (en dollars).", fv(fv(8000, 0.04 / 12, 24), 0.013, 12), "Deux étapes : multiplie les facteurs."),
  $("Un dépôt de 10 000 dollars rapporte 6%/a composé annuellement. On retire 2000 dollars à la fin de la 3e année. Quel est le solde à la fin de la 6e année (en dollars)?", (fv(10000, 0.06, 3) - 2000) * 1.06 ** 3, "Faire croître, retirer, faire croître de nouveau."),
  $("Combien d'intérêt est gagné pendant les années 6 à 10 (seulement) sur 5000 dollars à 5%/a composé annuellement (en dollars)?", fv(5000, 0.05, 10) - fv(5000, 0.05, 5), "A(10) − A(5)."),
  tf("12%/a composé mensuellement donne un taux effectif plus élevé que 12.5%/a composé annuellement.", true, "1.01¹² − 1 ≈ 12.68%, ce qui est plus que 12.5%."),
  tf("Si A = P(1 + i)ⁿ, alors A après 2n périodes est égal à A²/P.", true, "P(1 + i)²ⁿ = [P(1 + i)ⁿ]²/P."),
  ms("Un dépôt de 2000 dollars à 6%/a composé trimestriellement pendant 5 ans. Lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", ["i = 0.015", "n = 20", `A ≈ ${c2(fv(2000, 0.015, 20))}`, "intérêt ≈ 600", "le taux effectif est supérieur à 6%"], [0, 1, 2, 4], `L'intérêt est d'environ ${c2(fv(2000, 0.015, 20) - 2000)}.`),
  mc("Quelle offre donne le plus après 8 ans?", "5.75%/a composé annuellement", ["5.4%/a composé mensuellement", "5.5%/a composé semestriellement", "elles sont toutes égales"], `Facteurs de croissance : 1.0575⁸ ≈ ${(1.0575 ** 8).toFixed(4)}, 1.0045⁹⁶ ≈ ${((1 + 0.054 / 12) ** 96).toFixed(4)}, 1.0275¹⁶ ≈ ${(1.0275 ** 16).toFixed(4)}.`),
  num("Un tableau acheté 4500 dollars est revendu 12 ans plus tard pour 9800 dollars. Quel taux de croissance annuel composé cela représente-t-il (%, 2 décimales)?", rate(4500, 9800, 12), "(9800/4500)^(1/12) − 1.", null, 0.01),
  $("Quel capital, placé à 4.5%/a composé mensuellement, atteint 20 000 dollars en 10 ans (en dollars)?", 20000 / (1 + 0.045 / 12) ** 120, "20 000 ÷ (1.00375)¹²⁰."),
  num("Les prix augmentent de 2.8% par année. Au dollar près, combien coûtera dans 15 ans un article de 1250 dollars?", Math.round(fv(1250, 0.028, 15)), "1250(1.028)¹⁵.", null, 1),
  $("Une voiture de 15 000 dollars perd 18% de sa valeur chaque année. Combien vaut-elle après 6 ans (en dollars)?", 15000 * 0.82 ** 6, "15 000(0.82)⁶."),
  $("Lis le graphique : la courbe représente 3000 dollars placés à un taux annuel. À l'aide du point indiqué, trouve le montant après 20 ans (en dollars).", fv(3000, 0.06, 20), "Raison annuelle d'après le point : 1.06.", growthD([{ f: (t) => 3000 * 1.06 ** t }], 20, { pts: [[10, fv(3000, 0.06, 10), `(10, ${c2(fv(3000, 0.06, 10))})`]] })),
  num("Le graphique montre deux placements de 1000 dollars. Après combien d'années entières le placement violet (8% composé) vaut-il le double du placement vert (8% simple)?", (() => { let t = 1; while (1.08 ** t < 2 * (1 + 0.08 * t)) t++; return t; })(), "Compare 1.08ᵗ à 2(1 + 0.08t).", growthD([{ f: (t) => 1000 * (1 + 0.08 * t), color: "green" }, { f: (t) => 1000 * 1.08 ** t }], 35)),
  num("Les barres montrent l'intérêt gagné chaque année avec une capitalisation annuelle. Trouve le taux (%/a).", 4, "Chaque barre est 1.04 fois la précédente.", barsD([200, 208, 216.32, 224.97], { xlabel: "année", ylabel: "intérêt", labels: ["200", "208", "216.32", "224.97"] })),
  num("Les barres montrent l'intérêt gagné chaque année avec une capitalisation annuelle. Trouve le capital (en dollars).", 5000, "L'intérêt de la première année est de 200 à 4%.", barsD([200, 208, 216.32, 224.97, 233.97], { xlabel: "année", ylabel: "intérêt" })),
];
