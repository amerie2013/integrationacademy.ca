// 4.6 Modèles exponentiels : croissance et décroissance — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch4/bank/em4_6.mjs; valeurs calculées dans le code)
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const model = (f, view, pts = [], extra = {}) => planeDoc({ view, curves: [{ f, a: 0, color: "violet" }], points: pts, ...extra });

export const E = [
  num("Quel est le facteur de croissance pour une augmentation de 7 % par année?", 1.07, "1 + 0.07.", null, 1e-9),
  num("Quel est le facteur de décroissance pour une diminution de 20 % par année?", 0.8, "1 − 0.2.", null, 1e-9),
  mc("Quel modèle représente une augmentation annuelle de 3 % à partir de 500?", String.raw`$500(1.03)^t$`, [String.raw`$500(0.03)^t$`, String.raw`$500(1.3)^t$`, String.raw`$500+3t$`], "Facteur 1.03."),
  mc("Quel modèle représente une diminution annuelle de 12 % à partir de 900?", String.raw`$900(0.88)^t$`, [String.raw`$900(0.12)^t$`, String.raw`$900(1.12)^t$`, String.raw`$900-12t$`], "Facteur 0.88."),
  num("100 g d'une substance ont une demi-vie de 3 jours. Quelle quantité reste-t-il après 6 jours?", 25, "Deux demi-vies."),
  num("40 bactéries doublent chaque heure. Combien y en a-t-il après 3 heures?", 320, "40 × 2³."),
  num("1000 dollars augmentent de 10 % par année. Quelle est la valeur après 2 ans?", 1210, "1000 × 1.21."),
  tf("Dans un modèle exponentiel, une quantité qui décroît finit par atteindre exactement 0.", false, "Elle s'approche de 0 sans jamais l'atteindre."),
  num(String.raw`Dans $A=50\left(\tfrac12\right)^{t/4}$, quelle est la demi-vie?`, 4, "Le diviseur de t."),
  num(String.raw`Dans $N=20(2)^{t/5}$, quel est le temps de doublement?`, 5, "Le diviseur de t."),
  mc("Une boisson refroidit dans une pièce à 22 °C. Le modèle de la température a une asymptote horizontale à…", "T = 22", ["T = 0", "T = 100", "t = 22"], "La température ambiante."),
  num(String.raw`Quelle est la valeur initiale de $V=8000(0.9)^t$?`, 8000, "t = 0."),
  num("Une balle rebondit à la moitié de sa hauteur. Lâchée de 8 m, à quelle hauteur monte-t-elle après le 2e rebond?", 2, "8 × ¼."),
  tf("L'intérêt simple est un modèle exponentiel.", false, "L'intérêt simple croît de façon linéaire."),
  num("200 dollars à 5 % composé annuellement : quelle est la valeur après 1 an?", 210, "200 × 1.05."),
  mc("Quelle situation est exponentielle?", "une population qui augmente de 2 % chaque année", ["un forfait de téléphone qui coûte 30 dollars plus 5 dollars par Go", "une voiture qui roule à 80 km/h", "une chandelle qui brûle de 1 cm par heure"], "Une variation en pourcentage constante."),
  num("Une valeur est multipliée par 0.75 chaque année. Quel pourcentage est perdu chaque année?", 25, "1 − 0.75 = 25 %."),
  num(String.raw`Évalue $A=60\left(\tfrac12\right)^{t/10}$ à $t=20$.`, 15, "Deux demi-vies."),
  num("Lis le graphique : quelle est la quantité initiale?", 80, "La valeur à t = 0.", model((t) => 80 * 0.5 ** (t / 5), { xmin: 0, xmax: 20, ymin: 0, ymax: 90 }, [P(0, 80), P(5, 40)], { step: { x: 2, y: 10 } })),
  num("Lis le graphique : après combien de minutes la quantité est-elle la moitié de la quantité initiale?", 5, "80 → 40 à t = 5.", model((t) => 80 * 0.5 ** (t / 5), { xmin: 0, xmax: 20, ymin: 0, ymax: 90 }, [P(0, 80), P(5, 40)], { step: { x: 2, y: 10 }, lines: [{ m: 0, b: 40, color: "amber", dash: true }] })),
];

export const M = [
  num("Une ville de 15 000 habitants croît de 4 % par année. Quelle est la population après 5 ans (à l'unité près)?", Math.round(15000 * 1.04 ** 5), "15 000(1.04)⁵.", null, 0.6),
  num("Une voiture de 24 000 dollars perd 15 % de sa valeur par année. Quelle est sa valeur après 3 ans (au centième près)?", r2(24000 * 0.85 ** 3), "24 000(0.85)³.", null, 0.006),
  num("Une dose de 160 mg a une demi-vie de 5 h. Quelle quantité reste-t-il après 20 h?", 10, "Quatre demi-vies."),
  num("50 cellules triplent toutes les 2 h. Combien y en a-t-il après 8 h?", 4050, "50 × 3⁴."),
  num("2500 dollars à 4 % composé annuellement : quelle est la valeur après 6 ans (au centième près)?", r2(2500 * 1.04 ** 6), "2500(1.04)⁶.", null, 0.006),
  num("Une quantité double tous les 12 ans. Quel est le facteur de croissance annuel (au dix-millième près)?", Math.round(2 ** (1 / 12) * 1e4) / 1e4, "2^(1/12).", null, 0.0002),
  num(String.raw`$T=60\left(\tfrac12\right)^{t/6}+20$. Trouve $T(12)$.`, 35, "60 × ¼ + 20."),
  mc(String.raw`Quelle est l'image de $T=60\left(\tfrac12\right)^{t/6}+20$ pour $t\ge0$?`, String.raw`$20<T\le80$`, [String.raw`$0<T\le60$`, String.raw`$20\le T<80$`, String.raw`$T>0$`], "Commence à 80, s'approche de 20."),
  num("1000 dollars à 6 % composé annuellement. Après combien d'années complètes le montant dépasse-t-il 1500 dollars pour la première fois?", 7, "1.06⁶ ≈ 1.419; 1.06⁷ ≈ 1.504."),
  num("Une balle lâchée de 12 m rebondit à 75 % de sa hauteur. Quelle est la hauteur du rebond après le 3e rebond (au millième près)?", Math.round(12 * 0.75 ** 3 * 1000) / 1000, "12(0.75)³.", null, 0.0006),
  num("Un échantillon de 400 g diminue à 50 g en 30 jours. Quelle est sa demi-vie (en jours)?", 10, "400 → 200 → 100 → 50 : trois demi-vies."),
  ms("Lesquels sont des modèles de décroissance exponentielle? Choisis toutes les bonnes réponses.", [String.raw`$A=500(0.97)^t$`, String.raw`$A=200\left(\tfrac12\right)^{t/8}$`, String.raw`$A=100(1.02)^t$`, String.raw`$A=300-20t$`, String.raw`$A=80(0.5)^{2t}$`], [0, 1, 4], "Facteurs inférieurs à 1; 300 − 20t est affine."),
  tf("Si une quantité croît de 10 % par année pendant deux ans, elle croît de 20 % au total.", false, "1.1² = 1.21 : 21 %."),
  num("Un lac contient 2000 poissons; la population diminue de 8 % par année. Après combien d'années complètes est-elle inférieure à 1000?", 9, "0.92⁸ ≈ 0.513, 0.92⁹ ≈ 0.472."),
  num("Un placement triple en 15 ans. Combien d'années faut-il pour qu'il soit multiplié par 9?", 30, "Deux triplements."),
  num(String.raw`$V=35\,000(0.8)^t$. Après combien d'années complètes la valeur est-elle inférieure à 15 000?`, 4, "0.8³ = 0.512 → 17 920; 0.8⁴ = 0.4096 → 14 336."),
  num("Lis le graphique : la population commence à 500 et croît de 20 % par année. Quelle est-elle après 3 ans?", 864, "500 × 1.2³.", model((t) => 500 * 1.2 ** t, { xmin: 0, xmax: 6, ymin: 0, ymax: 1600 }, [P(0, 500), P(3, 864)], { step: { x: 1, y: 200 } })),
  num("Le graphique montre un café qui refroidit jusqu'à la température ambiante. Quelle est la température ambiante (l'asymptote)?", 21, "La droite pointillée T = 21.", model((t) => 64 * 0.9 ** t + 21, { xmin: 0, xmax: 30, ymin: 0, ymax: 90 }, [P(0, 85)], { step: { x: 3, y: 10 }, lines: [{ m: 0, b: 21, color: "green", dash: true }] })),
  num("Une dose de 300 mg : 25 % est éliminé chaque heure. Quelle quantité reste-t-il après 2 heures (en mg)?", 168.75, "300(0.75)².", null, 1e-6),
  num("Une culture croît de 50 % par jour. Par quel facteur croît-elle en 2 jours?", 2.25, "1.5².", null, 1e-9),
];
