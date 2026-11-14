// 7.5 Modèles exponentiels et logarithmiques — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.5 Modèles exponentiels et logarithmiques";
export const Q = [
  num(S`Une culture compte $800$ cellules en $t=2$ h et $5000$ en $t=6$ h. Trouve le temps de doublement (au centième près).`, 4 * L(2) / L(6.25), "2^(4/d) = 6.25.", null, 0.01),
  num(S`Une culture compte $800$ cellules en $t=2$ h et $5000$ en $t=6$ h. Combien de cellules y avait-il en $t=0$? (à l'unité près)`, 800 / 6.25 ** 0.5, "b⁴ = 6.25 ⇒ b² = 2.5, donc a = 800/2.5 = 320.", null, 1),
  num(S`4000 dollars à $5\%$ capitalisé mensuellement et 5000 dollars à $3\%$ capitalisé annuellement : quand les montants sont-ils égaux? (au centième près)`, L(1.25) / L((1 + 0.05 / 12) ** 12 / 1.03), "((1 + 0.05/12)¹²/1.03)ᵗ = 1.25.", null, 0.02),
  num(S`Une substance a une demi-vie de $3$ h. Quel pourcentage se désintègre chaque heure? (au centième près)`, 100 * (1 - 0.5 ** (1 / 3)), "Facteur horaire 0.5^(1/3) ≈ 0.7937.", null, 0.01),
  num(S`Une soupe refroidit de $95^\circ$C à $75^\circ$C en $8$ min dans une pièce à $21^\circ$C. Quand sera-t-elle à $40^\circ$C? (au dixième près)`, 8 * L(19 / 74) / L(54 / 74), "L'écart passe de 74 à 54 en 8 min; résous (54/74)^(t/8) = 19/74.", null, 0.1),
  num(S`Quel taux, capitalisé annuellement, double un montant en exactement $9$ ans? (en pourcentage, au centième près)`, (2 ** (1 / 9) - 1) * 100, "b⁹ = 2.", null, 0.01),
  num(S`Combien d'années entières faut-il pour qu'un montant placé à $4.5\%$ capitalisé annuellement dépasse pour la première fois le triple de sa valeur initiale?`, Math.ceil(L(3) / L(1.045)), "t = log 3 / log 1.045 ≈ 24.96 ⇒ 25 ans."),
  num(S`Une voiture de 30 000 dollars perd $15\%$ par année; une voiture de 24 000 dollars perd $10\%$. Quand ont-elles la même valeur? (au centième près)`, L(0.8) / L(0.85 / 0.9), "(0.85/0.9)ᵗ = 0.8.", null, 0.01),
  num(S`Il faut réduire un son de $90$ dB pour que son intensité soit divisée par cinquante. Quel est le nouveau niveau? (au dixième près)`, 90 - 10 * L(50), "90 − 10 log 50.", null, 0.1),
  num(S`Pour $N=20+30\log(t+1)$, combien de semaines faut-il pour passer de $50$ à $70$ mots/min? (au dixième près)`, 10 ** (5 / 3) - 1 - 9, "t = 10^(5/3) − 1 ≈ 45.4 pour 70; t = 9 pour 50.", null, 0.1),
  mc("Un placement double en 10 ans. Combien de temps lui faut-il pour être multiplié par huit?", "30 ans", ["80 ans", "40 ans", "20 ans"], "8 = 2³ : trois temps de doublement."),
  mc("Un médicament a une demi-vie de 6 h. Quelle fraction en reste-t-il après une journée?", "1/16", ["1/4", "1/24", "1/8"], "24 h = 4 demi-vies."),
  ms("Sélectionne tous les énoncés vrais au sujet de A = 1000(1.07)ᵗ.", ["le montant double environ tous les 10.2 ans", "le montant augmente de 70 chaque année", "après 2 ans, il vaut environ 1144.90", "il ne peut jamais être négatif"], [0, 2, 3], "L'augmentation annuelle croît : 70, puis 74.90, …"),
  tf(S`Si une quantité diminue de moitié tous les $h$ ans, elle tombe à $\frac1{10}$ en environ $3.32h$ ans.`, true, "(1/2)^(t/h) = 0.1 ⇒ t/h = log 0.1/log 0.5 ≈ 3.32."),
  tf(S`Après $1$ an, un compte à $8\%$ capitalisé mensuellement rapporte autant qu'un compte à $8\%$ capitalisé annuellement.`, false, "Taux effectif ≈ 8.30 %."),
  mc("Le graphique montre des points de données et une courbe y = ab^t passant par (1, 12) et (4, 96). Trouve b.", "2", ["8", "4", "3"], "b³ = 8.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: 0, ymax: 110 }, curves: [{ f: (t) => 6 * 2 ** t, color: "violet" }], points: [{ x: 1, y: 12, label: "(1, 12)", color: "amber" }, { x: 4, y: 96, label: "(4, 96)", color: "amber" }], step: { x: 1, y: 10 } })),
  mc("Le graphique montre deux comptes. Lequel est le meilleur placement après 20 ans?", "la courbe violette (5 % mensuel à partir de 4000)", ["la courbe bleue (3 % annuel à partir de 5000)", "ils sont égaux", "on ne peut pas le savoir"], "Elles se coupent près de t ≈ 11.0; ensuite, le taux le plus rapide l'emporte.", planeDoc({ view: { xmin: 0, xmax: 25, ymin: 3000, ymax: 14000 }, curves: [{ f: (t) => 4000 * (1 + 0.05 / 12) ** (12 * t), a: 0, color: "violet" }, { f: (t) => 5000 * 1.03 ** t, a: 0, color: "blue" }], step: { x: 5, y: 1000 } })),
  mc("Le graphique montre une courbe de refroidissement à partir de 95 °C dans une pièce à 21 °C. Vers quel moment la température est-elle de 40 °C?", "vers 34 min", ["vers 8 min", "vers 60 min", "vers 20 min"], "t = 8 log(19/74) / log(54/74) ≈ 34.5.", planeDoc({ view: { xmin: -2, xmax: 70, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 21 + 74 * (54 / 74) ** (t / 8), a: 0, color: "violet" }], lines: [{ m: 0, b: 40, color: "blue", dash: true }, { m: 0, b: 21, color: "red", dash: true }], step: { x: 5, y: 10 } })),
  mc("Le graphique montre la fraction de carbone 14 (1/2)^(t/5730). Quel est l'âge approximatif d'un échantillon dont il reste 20 %?", "environ 13 300 ans", ["environ 5700 ans", "environ 26 000 ans", "environ 1150 ans"], "t = 5730 log 0.2 / log 0.5 ≈ 13 305.", planeDoc({ view: { xmin: -500, xmax: 25000, ymin: 0, ymax: 1.1 }, curves: [{ f: (t) => 0.5 ** (t / 5730), a: 0, color: "violet" }], lines: [{ m: 0, b: 0.2, color: "blue", dash: true }], step: { x: 2500, y: 0.1 } })),
  num(S`Le rapport de luminosité de deux étoiles est $\frac{b_1}{b_2}=10^{0.4(m_2-m_1)}$. Si $b_1=40b_2$, trouve $m_2-m_1$ (au centième près).`, L(40) / 0.4, "0.4(m₂ − m₁) = log 40.", null, 0.01),
];
