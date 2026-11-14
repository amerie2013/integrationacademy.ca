// 5.5 Établir des liens : modèles exponentiels — 20 questions faciles + 20 moyennes (miroir de ../../mcv4u-ch5/bank/em5_5.mjs)
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  num(S`Pour $P(t)=250e^{0.2t}$, trouve $P'(0)$.`, 50, "kP₀ = 0.2 × 250."),
  num(S`Trouve le temps de doublement lorsque $k=0.05$ (4 décimales).`, 13.8629, "ln 2 / 0.05.", null, 0.0005),
  num(S`Trouve la demi-vie lorsque $k=-0.2$ (4 décimales).`, 3.4657, "ln 2 / 0.2.", null, 0.0005),
  tf(S`Pour $P(t)=P_0e^{kt}$, le taux de variation est proportionnel à $P$.`, true, "P′ = kP."),
  num(S`Un compte croît selon $A(t)=2400e^{0.025t}$ dollars. Trouve $A'(0)$ en dollars par année.`, 60, "0.025 × 2400."),
  mc(S`Dans $P(t)=P_0e^{kt}$, une décroissance signifie :`, S`$k\lt0$`, [S`$k\gt0$`, S`$P_0\lt0$`, S`$k=1$`], "La quantité diminue."),
  num(S`Pour $P(t)=600e^{0.1t}$, trouve $P(10)$ (2 décimales).`, 1630.97, "600e.", null, 0.01),
  num(S`Une population vérifie $P'=0.08P$. À quelle vitesse croît-elle lorsque $P=500$?`, 40, "0.08 × 500."),
  num("Une quantité double tous les 10 ans. Trouve sa constante de croissance k (4 décimales).", 0.0693, "k = ln 2 / 10.", null, 0.0005),
  num("Le graphique de P(t) = 50e^(0.4t) est illustré. Quel est son taux de croissance en t = 0?", 20, "0.4 × 50.", graph((t) => 50 * Math.exp(0.4 * t), { xmin: -0.5, xmax: 6, ymin: -10, ymax: 600 }, [P(0, 50)], { a: 0, more: [{ f: (t) => 50 + 20 * t, color: "green", a: 0, b: 5 }], step: { x: 1, y: 100 } })),
  tf("La demi-vie d'une quantité qui décroît dépend de la quantité de départ.", false, "La demi-vie vaut ln 2 / |k|, indépendamment de P₀."),
  num(S`Pour $A(t)=1000e^{-0.05t}$, trouve $A'(0)$.`, -50, "−0.05 × 1000."),
  num(S`Une soupe refroidit selon $T(t)=25+50e^{-0.1t}$ °C. Quelle est sa température initiale?`, 75, "25 + 50."),
  num(S`Pour $T(t)=25+50e^{-0.1t}$, trouve $T'(0)$ en °C par minute.`, -5, "−0.1 × 50."),
  mc(S`De quelle valeur $P(t)=\frac{1200}{1+5e^{-t}}$ s'approche-t-elle lorsque $t\to\infty$?`, "1200", ["200", "6000", "1"], "e^(−t) → 0."),
  num(S`Combien de temps faut-il à $P(t)=40e^{0.25t}$ pour atteindre 80 (4 décimales)?`, 2.7726, "e^(0.25t) = 2.", null, 0.0005),
  tf(S`Pour $P(t)=P_0e^{kt}$ avec $P_0,k\gt0$, le taux de croissance lui-même ne cesse d'augmenter.`, true, "P′ = kP augmente quand P augmente."),
  num("Une substance a une demi-vie de 5 ans. Trouve sa constante de désintégration k (4 décimales).", -0.1386, "k = −ln 2 / 5.", null, 0.0005),
  num("Le graphique de A(t) = 200e^(−0.3t) est illustré. Quel est son taux de variation en t = 0?", -60, "−0.3 × 200.", graph((t) => 200 * Math.exp(-0.3 * t), { xmin: -0.5, xmax: 12, ymin: -10, ymax: 220 }, [P(0, 200)], { a: 0, more: [{ f: (t) => 200 - 60 * t, color: "green", a: 0, b: 3.2 }], step: { x: 1, y: 20 } })),
  num("Quelle fraction d'un échantillon radioactif reste-t-il après deux demi-vies?", 0.25, "½ × ½.", null, 0.0001),
];
const medium = [
  num(S`Pour $P(t)=1200e^{0.15t}$, trouve $P'(4)$ (2 décimales).`, 327.98, "180e^0.6.", null, 0.01),
  num("Une culture de bactéries triple toutes les 5 heures. Trouve sa constante de croissance k (4 décimales).", 0.2197, "e^(5k) = 3.", null, 0.0005),
  num("Une ville croît de façon continue à 2.5 % par année. À quelle vitesse croît-elle lorsque sa population est de 4500?", 112.5, "P′ = 0.025P."),
  num("Un échantillon de 60 mg a une demi-vie de 8 heures. À quelle vitesse se désintègre-t-il en ce moment, en mg par heure (4 décimales)?", -5.1986, "k = −ln 2 / 8; P′ = kP.", null, 0.0005),
  num("Un montant de 5000 dollars rapporte 3 % composé de façon continue. Quand atteint-il 8000 dollars (4 décimales)?", 15.6668, "e^(0.03t) = 1.6.", null, 0.0005),
  num(S`Un thé refroidit selon $T(t)=18+62e^{-0.07t}$ °C. Quand atteint-il 50 °C (4 décimales)?`, 9.4485, "62e^(−0.07t) = 32.", null, 0.0005),
  num(S`Pour $T(t)=18+62e^{-0.07t}$, à quelle vitesse refroidit-il lorsque $T=50$ °C (en °C par minute)?`, -2.24, "T′ = −0.07(T − 18) = −0.07 × 32.", null, 0.0001),
  num("Le graphique de P(t) = 2400/(1 + 11e^(−0.4t)) est illustré. Quand croît-elle le plus vite (4 décimales)?", 5.9947, "En P = 1200 : 11e^(−0.4t) = 1.", graph((t) => 2400 / (1 + 11 * Math.exp(-0.4 * t)), { xmin: -0.5, xmax: 16, ymin: -100, ymax: 2600 }, [P(Math.log(11) / 0.4, 1200)], { a: 0, lines: [{ m: 0, b: 2400, color: "gray", dash: true }], step: { x: 2, y: 400 } }), 0.0005),
  num(S`Quel est le plus grand taux de croissance de $P(t)=\frac{2400}{1+11e^{-0.4t}}$?`, 240, "En P = M/2 : kM/4 = 0.4 × 2400 / 4."),
  mc(S`Quelle fonction vérifie $P'=0.03P$ avec $P(0)=P_0$?`, S`$P_0e^{0.03t}$`, [S`$P_0+0.03t$`, S`$P_0(0.03)^t$`, S`$0.03e^{P_0t}$`], "Taux proportionnel à la quantité."),
  num("La concentration d'un médicament est C(t) = 8te^(−0.4t) mg/L (graphique illustré). Trouve sa plus grande valeur (4 décimales).", 7.3576, "C′ = 8e^(−0.4t)(1 − 0.4t) = 0 en t = 2.5; 20/e.", graph((t) => 8 * t * Math.exp(-0.4 * t), { xmin: -0.5, xmax: 15, ymin: -0.5, ymax: 9 }, [P(2.5, 20 / Math.E)], { a: 0, step: { x: 1, y: 1 } }), 0.0005),
  num(S`Sous l'eau, l'intensité de la lumière est $I(d)=800e^{-0.25d}$ lux à une profondeur de $d$ m. Trouve $I'(4)$ (4 décimales).`, -73.5759, "−200e^(−1).", null, 0.0005),
  tf(S`Un modèle logistique $P=\frac{M}{1+Ae^{-kt}}$ croît le plus vite lorsque $P=\frac M2$.`, true, "Son point d'inflexion se trouve à la moitié de la limite."),
  num("Quel taux annuel effectif, en pourcentage, donne un taux de 4.5 % composé de façon continue (4 décimales)?", 4.6028, "100(e^0.045 − 1).", null, 0.0005),
  num(S`Les ventes d'un nouveau produit sont de $S(t)=50\left(1-e^{-0.4t}\right)$ milliers après $t$ mois. Trouve $S'(2)$ (4 décimales).`, 8.9866, "20e^(−0.8).", null, 0.0005),
  num(S`Pour $P(t)=300(1.08)^t$, trouve le taux relatif $\frac{P'}{P}$ (4 décimales).`, 0.077, "ln 1.08.", null, 0.0005),
  num(S`Quand $P(t)=500e^{0.12t}$ croît-elle à raison de 300 par année (4 décimales)?`, 13.412, "60e^(0.12t) = 300.", null, 0.0005),
  num("Il ne reste que 20 % d'une substance après 10 jours. Trouve sa constante de désintégration k (4 décimales).", -0.1609, "e^(10k) = 0.2.", null, 0.0005),
  tf("Si une quantité croît de façon exponentielle et double en 7 ans, elle quadruple en 14 ans.", true, "Deux temps de doublement."),
  mc("Selon la loi du refroidissement de Newton, le taux de refroidissement est proportionnel à :", "l'écart entre la température de l'objet et celle du milieu ambiant", ["la température de l'objet", "le temps écoulé", "la température du milieu ambiant"], "T′ = −k(T − Tₛ)."),
];
export { easy as E, medium as M };
