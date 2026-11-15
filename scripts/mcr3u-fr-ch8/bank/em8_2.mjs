// 8.2 Intérêt composé : valeur future — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch8/bank/em8_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Trouve le montant de 1000 dollars à 5%/a composé annuellement pendant 2 ans (en dollars).", fv(1000, 0.05, 2), "1000(1.05)²."),
  $("Trouve le montant de 2000 dollars à 3%/a composé annuellement pendant 3 ans (en dollars).", fv(2000, 0.03, 3), "2000(1.03)³."),
  $("Trouve le montant de 500 dollars à 8%/a composé annuellement pendant 5 ans (en dollars).", fv(500, 0.08, 5), "500(1.08)⁵."),
  num("Quelle est la valeur de i pour 6%/a composé mensuellement? Entre un nombre décimal.", 0.005, "0.06 ÷ 12.", null, 0.00001),
  num("Quelle est la valeur de i pour 8%/a composé trimestriellement? Entre un nombre décimal.", 0.02, "0.08 ÷ 4."),
  num("Combien y a-t-il de périodes de capitalisation en 5 ans avec une capitalisation mensuelle?", 60, "5 × 12."),
  num("Combien y a-t-il de périodes de capitalisation en 7 ans avec une capitalisation semestrielle?", 14, "7 × 2."),
  $("Trouve le montant de 1500 dollars à 4%/a composé semestriellement pendant 2 ans (en dollars).", fv(1500, 0.02, 4), "i = 0.02, n = 4."),
  $("Trouve l'intérêt gagné sur 800 dollars à 6%/a composé annuellement pendant 3 ans (en dollars).", fv(800, 0.06, 3) - 800, "A − P."),
  $("Trouve le montant de 4000 dollars à 12%/a composé mensuellement pendant 1 an (en dollars).", fv(4000, 0.01, 12), "i = 0.01, n = 12."),
  mc("Quelle formule donne la valeur future avec l'intérêt composé?", S`\(A=P(1+i)^n\)`, [S`\(A=P(1+rt)\)`, S`\(A=Pi^n\)`, S`\(A=P+in\)`], "L'intérêt est ajouté à chaque période."),
  mc("Que signifie l'intérêt composé?", "l'intérêt est ajouté au capital, puis il rapporte lui-même de l'intérêt", ["l'intérêt est payé seulement sur le capital initial", "l'intérêt est payé une seule fois", "le taux change chaque année"], "De l'intérêt sur l'intérêt."),
  tf("Avec une capitalisation annuelle, les montants de fin d'année forment une suite géométrique.", true, "Raison 1 + i."),
  tf("Pour le même taux annuel, la capitalisation mensuelle donne moins que la capitalisation annuelle.", false, "Elle donne un peu plus."),
  num("Quelle est la raison des montants de fin d'année d'un placement à 7%/a composé annuellement?", 1.07, "1 + i.", null, 0.0001),
  $("Trouve le montant de 10 000 dollars à 2%/a composé annuellement pendant 10 ans (en dollars).", fv(10000, 0.02, 10), "10 000(1.02)¹⁰."),
  $("Trouve le montant de 600 dollars à 10%/a composé annuellement pendant 2 ans (en dollars).", 726, "600 × 1.21."),
  mc("Lequel croît le plus vite à long terme?", "l'intérêt composé", ["l'intérêt simple", "ils croissent de la même façon", "cela dépend seulement du capital"], "L'exponentiel l'emporte sur le linéaire."),
  $("Lis le graphique : quel est le montant après 10 ans (en dollars)?", fv(2000, 0.07, 10), "2000(1.07)¹⁰.", growthD([{ f: (t) => 2000 * 1.07 ** t }], 12, { pts: [[10, fv(2000, 0.07, 10), `(10, ${c2(fv(2000, 0.07, 10))})`]] })),
  num("Les barres montrent les montants de fin d'année à intérêt composé. Quelle est la raison?", 1.1, "Chaque barre est 1.1 fois la précédente.", barsD([1100, 1210, 1331, 1464.1], { xlabel: "année", ylabel: "montant", labels: ["1100", "1210", "1331", "1464.10"] }), 0.0001),
];

export const M = [
  $("Trouve le montant de 3500 dollars à 4.8%/a composé mensuellement pendant 6 ans (en dollars).", fv(3500, 0.004, 72), "i = 0.004, n = 72."),
  $("Trouve le montant de 12 000 dollars à 5.5%/a composé trimestriellement pendant 4 ans (en dollars).", fv(12000, 0.01375, 16), "i = 0.01375, n = 16."),
  $("Trouve l'intérêt gagné sur 7500 dollars à 3.2%/a composé semestriellement pendant 9 ans (en dollars).", fv(7500, 0.016, 18) - 7500, "A − P."),
  $("Trouve le montant de 250 dollars à 9%/a composé mensuellement pendant 15 ans (en dollars).", fv(250, 0.0075, 180), "i = 0.0075, n = 180."),
  num("2000 dollars atteignent 2524.95 dollars en 4 ans avec une capitalisation annuelle. Trouve le taux (%/a, 1 décimale).", 6, "(2524.95/2000)^(1/4) ≈ 1.06.", null, 0.05),
  $("Quel capital atteint 8000 dollars en 6 ans à 5%/a composé annuellement (en dollars)?", 8000 / 1.05 ** 6, "8000 ÷ 1.05⁶."),
  num("Lequel donne le plus après 10 ans sur 1000 dollars : 6%/a composé annuellement (entre 1) ou 5.85%/a composé mensuellement (entre 2)?", fv(1000, 0.06, 10) > fv(1000, 0.0585 / 12, 120) ? 1 : 2, `Compare ${c2(fv(1000, 0.06, 10))} et ${c2(fv(1000, 0.0585 / 12, 120))}.`),
  $("Trouve la différence entre 5000 dollars à 6%/a composé annuellement et composé mensuellement après 10 ans (en dollars).", fv(5000, 0.005, 120) - fv(5000, 0.06, 10), "Mensuel moins annuel."),
  num("Quel est le taux annuel effectif de 12%/a composé mensuellement (%, 2 décimales)?", c2((1.01 ** 12 - 1) * 100), "(1.01)¹² − 1.", null, 0.01),
  ms("Pour 1000 dollars à 5%/a composé annuellement, lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", ["après 1 an : 1050", "après 2 ans : 1102.50", "l'intérêt de la 2e année est de 52.50", "l'intérêt est le même chaque année", "les montants forment une suite géométrique"], [0, 1, 2, 4], "L'intérêt augmente chaque année."),
  mc(S`Quelle expression donne le montant de 900 dollars à 6%/a composé trimestriellement pendant 5 ans?`, S`\(900(1.015)^{20}\)`, [S`\(900(1.06)^{20}\)`, S`\(900(1.015)^5\)`, S`\(900(1.24)^5\)`], "i = 0.015, n = 20."),
  tf("Doubler le capital double la valeur future.", true, "A est proportionnel à P."),
  tf("Doubler le nombre d'années double la valeur future.", false, "(1 + i)²ⁿ n'est pas égal à 2(1 + i)ⁿ."),
  $("Un placement de 4000 dollars rapporte 4%/a composé annuellement pendant 3 ans, puis 6%/a composé annuellement pendant 2 autres années. Trouve le montant final (en dollars).", fv(fv(4000, 0.04, 3), 0.06, 2), "4000(1.04)³(1.06)²."),
  $("Trouve le montant obtenu en doublant 1 cent (0.01 dollar) chaque jour pendant 30 jours (en dollars).", 0.01 * 2 ** 30, "0.01 × 2³⁰."),
  num("Une ville de 15 000 habitants croît de 2.5% par année. À la personne près, quelle sera la population dans 8 ans?", Math.round(fv(15000, 0.025, 8)), "15 000(1.025)⁸.", null, 1),
  $("Trouve l'intérêt gagné pendant la 5e année seulement sur 2000 dollars à 6%/a composé annuellement (en dollars).", fv(2000, 0.06, 5) - fv(2000, 0.06, 4), "A(5) − A(4)."),
  num("Combien de fois plus grand est le montant après 20 ans qu'après 10 ans à 7%/a composé annuellement (2 décimales)?", c2(1.07 ** 10), "1.07¹⁰.", null, 0.01),
  $("Lis le graphique de 5000 dollars à 4%/a composé trimestriellement. Quel est le montant après 15 ans (en dollars)?", fv(5000, 0.01, 60), "5000(1.01)⁶⁰.", growthD([{ f: (t) => 5000 * 1.01 ** (4 * t) }], 16)),
  num("Les barres montrent les montants après 1, 2, 3 et 4 ans avec une capitalisation annuelle. Trouve le taux (%/a).", 5, "Raison 1.05.", barsD([2100, 2205, 2315.25, 2431.01], { xlabel: "année", ylabel: "montant", labels: ["2100", "2205", "2315.25", "2431.01"] })),
];
