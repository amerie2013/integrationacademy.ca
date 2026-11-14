// 7.5 Modèles exponentiels et logarithmiques — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc("Une quantité croît de 6 % par année. Quel est le facteur de croissance annuel?", "1.06", ["0.06", "6", "0.94"], "1 + 0.06."),
  mc("Une quantité décroît de 8 % par année. Quel est le facteur annuel?", "0.92", ["0.08", "1.08", "−0.08"], "1 − 0.08."),
  mc(S`Quel modèle décrit $200$ g d'une substance dont la demi-vie est de $5$ jours?`, S`$A=200\left(\tfrac12\right)^{t/5}$`, [S`$A=200\left(\tfrac12\right)^{5t}$`, S`$A=100(5)^t$`, S`$A=200-\tfrac t5$`], "t/5 compte les demi-vies."),
  mc(S`Un placement de 500 dollars à $4\%$ par année, capitalisé mensuellement, est modélisé par…`, S`$A=500\left(1+\tfrac{0.04}{12}\right)^{12t}$`, [S`$A=500(1.04)^{12t}$`, S`$A=500(1.04)^{t/12}$`, S`$A=500\left(1+\tfrac{0.04}{12}\right)^{t}$`], "Taux par mois r/12, 12t mois."),
  num(S`Quelle fraction reste-t-il après $20$ jours si la demi-vie est de $5$ jours?`, 0.0625, "4 demi-vies : (1/2)⁴.", null, 0.0001),
  num(S`$500$ mg, demi-vie de $3$ h : combien en reste-t-il après $9$ h?`, 62.5, "3 demi-vies : 500/8.", null, 0.01),
  num(S`Combien d'années faut-il pour doubler un montant à $6\%$ capitalisé annuellement? (au centième près)`, L(2) / L(1.06), "1.06ᵗ = 2.", null, 0.01),
  num(S`Combien d'années faut-il pour doubler un montant à $2.5\%$ capitalisé annuellement? (au dixième près)`, L(2) / L(1.025), "1.025ᵗ = 2.", null, 0.05),
  num(S`Une population de $1500$ croît de $3\%$ par année. Quelle est-elle après $10$ ans? (à l'unité près)`, 1500 * 1.03 ** 10, "1500(1.03)¹⁰.", null, 1),
  num(S`Une culture double toutes les $4$ h. Par quel facteur croît-elle en $12$ h?`, 8, "3 doublements : 2³."),
  num(S`Combien d'années faut-il pour que 1000 dollars deviennent 1500 dollars à $4\%$ capitalisé annuellement? (au centième près)`, L(1.5) / L(1.04), "1.04ᵗ = 1.5.", null, 0.01),
  num(S`Une voiture perd $8\%$ de sa valeur par année. Après combien d'années vaut-elle la moitié de sa valeur? (au centième près)`, L(0.5) / L(0.92), "0.92ᵗ = 0.5.", null, 0.01),
  tf("Le temps de doublement d'un placement ne dépend pas du montant investi.", true, "P s'annule dans P(1 + r)ᵗ = 2P."),
  tf("Un facteur de décroissance de 0.85 signifie que la quantité perd 85 % à chaque période.", false, "Elle garde 85 % et perd 15 %."),
  tf(S`Dans $A=A_0\left(\tfrac12\right)^{t/h}$, quand $t=h$, il reste exactement la moitié.`, true, "(1/2)¹ = 1/2."),
  fill(S`Une capitalisation mensuelle à un taux annuel $r$ utilise un taux de ____ par mois.`, ["r/12"], "Divise le taux annuel par 12."),
  fill(S`Si une quantité triple toutes les $d$ heures, son modèle est $A=A_0\cdot$ ____ $^{t/d}$.`, ["3"], "Un triplement toutes les d heures."),
  mc(S`$N=20+30\log(t+1)$ : que vaut $N$ quand $t=99$?`, "80", ["50", "110", "2990"], "20 + 30 log 100 = 20 + 60."),
  mc("Le graphique montre un modèle de décroissance qui commence à 80. Estime sa demi-vie.", "environ 4", ["environ 2", "environ 8", "environ 40"], "La courbe passe par (4, 40).", planeDoc({ view: { xmin: -1, xmax: 16, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 4), a: 0, color: "violet" }], lines: [{ m: 0, b: 40, color: "blue", dash: true }], step: { x: 1, y: 10 } })),
  mc("Le graphique montre un placement qui croît à partir de 1000. Estime le temps de doublement.", "environ 12 ans", ["environ 6 ans", "environ 24 ans", "environ 2 ans"], "Il atteint 2000 près de t = 12 (6 % par année).", planeDoc({ view: { xmin: -1, xmax: 25, ymin: 0, ymax: 4500 }, curves: [{ f: (t) => 1000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 2000, color: "blue", dash: true }], step: { x: 2, y: 500 } })),
];

export const M = [
  num(S`Combien d'années faut-il pour tripler un montant à $5\%$ capitalisé annuellement? (au centième près)`, L(3) / L(1.05), "1.05ᵗ = 3.", null, 0.01),
  num(S`Un échantillon passe de $50$ g à $20$ g en $12$ h. Trouve sa demi-vie (au centième près).`, 12 * L(0.5) / L(0.4), "(1/2)^(12/h) = 0.4.", null, 0.01),
  num(S`Combien d'années faut-il pour doubler un montant à $6\%$ capitalisé mensuellement? (au centième près)`, L(2) / (12 * L(1.005)), "1.005¹²ᵗ = 2.", null, 0.01),
  num(S`Combien d'années faut-il pour doubler un montant à $5\%$ capitalisé trimestriellement? (au centième près)`, L(2) / (4 * L(1.0125)), "1.0125⁴ᵗ = 2.", null, 0.01),
  num(S`Une machine perd $20\%$ de sa valeur par année. Après combien d'années vaut-elle le quart de son prix? (au centième près)`, L(0.25) / L(0.8), "0.8ᵗ = 0.25.", null, 0.01),
  num(S`Un os contient $75\%$ de son carbone 14 (demi-vie de $5730$ ans). Trouve son âge (à la dizaine d'années près).`, 5730 * L(0.75) / L(0.5), "t = 5730 log 0.75 / log 0.5 ≈ 2378.", null, 6),
  num(S`Il reste $30\%$ d'un médicament après $4$ h. Trouve sa demi-vie (au centième près).`, 4 * L(0.5) / L(0.3), "(1/2)^(4/h) = 0.3.", null, 0.01),
  num(S`Trouve le taux annuel effectif de $12\%$ capitalisé mensuellement, en pourcentage (au centième près).`, ((1 + 0.01) ** 12 - 1) * 100, "1.01¹² − 1 ≈ 0.1268.", null, 0.01),
  num(S`De combien de décibels le niveau augmente-t-il quand l'intensité double? (au centième près)`, 10 * L(2), "10 log 2.", null, 0.01),
  num(S`Une population triple en $8$ ans. Quel est son taux de croissance annuel, en pourcentage? (au centième près)`, (3 ** (1 / 8) - 1) * 100, "b⁸ = 3 ⇒ b ≈ 1.1472.", null, 0.01),
  num(S`Un café à $80^\circ$C dans une pièce à $20^\circ$C : l'écart diminue de moitié toutes les $10$ min. Quelle est sa température après $15$ min? (au dixième près)`, 20 + 60 * 0.5 ** 1.5, "20 + 60(0.5)^1.5.", null, 0.1),
  num(S`Un café à $80^\circ$C dans une pièce à $20^\circ$C : l'écart diminue de moitié toutes les $10$ min. Quand est-il à $40^\circ$C? (en minutes, au dixième près)`, 10 * L(20 / 60) / L(0.5), "60(0.5)^(t/10) = 20.", null, 0.1),
  mc(S`Un modèle passant par $(0,40)$ et $(3,320)$ est $y=40b^t$. Trouve $b$.`, "2", ["8", "3", "280/3"], "b³ = 8."),
  mc(S`Quel changement permet de doubler un montant plus rapidement?`, "un taux plus élevé", ["un dépôt plus grand", "un dépôt plus petit", "une durée plus longue"], "Le dépôt s'annule; seuls le taux et la capitalisation comptent."),
  ms(S`Sélectionne tous les modèles qui représentent une décroissance.`, [S`$A=50(0.9)^t$`, S`$A=50\left(\tfrac12\right)^{t/3}$`, S`$A=50(1.1)^{-t}$`, S`$A=50(2)^{t/3}$`], [0, 1, 2], "1.1⁻ᵗ = (1/1.1)ᵗ décroît aussi."),
  tf(S`À $5\%$ capitalisé mensuellement, l'argent croît plus vite qu'à $5\%$ capitalisé annuellement.`, true, "Taux effectif ≈ 5.12 %."),
  tf(S`Pour $N=20+30\log(t+1)$, passer de $t=9$ à $t=99$ ajoute $300$.`, false, "Cela ajoute 30 : log 100 − log 10 = 1."),
  fill(S`Si $y=ab^t$ passe par $(1,6)$ et $(3,54)$, alors $b=$ ____.`, ["3"], "b² = 9, b > 0."),
  mc("Le graphique montre un modèle de refroidissement. Quelle est la température ambiante?", "20 °C", ["0 °C", "80 °C", "50 °C"], "L'asymptote horizontale est T = 20.", planeDoc({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 20 + 60 * 0.5 ** (t / 10), a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "red", dash: true }], step: { x: 5, y: 10 } })),
  mc("Le graphique montre N = 20 + 30 log(t + 1). Vers quel moment N atteint-il 60?", "vers t = 21", ["vers t = 4", "vers t = 60", "vers t = 100"], "log(t + 1) = 4/3 ⇒ t ≈ 20.5.", planeDoc({ view: { xmin: -2, xmax: 50, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 20 + 30 * L(t + 1), a: 0, color: "violet" }], lines: [{ m: 0, b: 60, color: "blue", dash: true }], step: { x: 5, y: 10 } })),
];
