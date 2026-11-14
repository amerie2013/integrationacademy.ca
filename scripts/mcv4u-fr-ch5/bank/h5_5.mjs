// 5.5 Établir des liens : modèles exponentiels — 20 questions difficiles (miroir de ../../mcv4u-ch5/bank/h5_5.mjs)
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "5.5 Établir des liens : modèles exponentiels";
export const Q = [
  num("Un objet refroidit de 100 °C à 60 °C en 5 min dans une pièce à 20 °C. Quelle est sa température après 15 min?", 30, "T = 20 + 80e^(−kt) avec e^(−5k) = ½; T(15) = 20 + 80/8."),
  num("Pour l'objet précédent (de 100 °C à 60 °C en 5 min, pièce à 20 °C), à quelle vitesse refroidit-il à 15 min, en °C par minute (4 décimales)?", -1.3863, "T′ = −k(T − 20) avec k = ln 2 / 5 et T − 20 = 10.", null, 0.0005),
  num(S`Pour $P(t)=\frac{900}{1+8e^{-0.3t}}$, à quelle vitesse $P$ croît-elle lorsque $P=300$?`, 60, "P′ = kP(1 − P/M) = 0.3 × 300 × ⅔."),
  num("La concentration d'un médicament est C(t) = 12(e^(−0.2t) − e^(−t)) mg/L (graphique illustré). À quel moment est-elle la plus grande (4 décimales)?", 2.0118, "C′ = 12(−0.2e^(−0.2t) + e^(−t)) = 0 ⇒ e^(−0.8t) = 0.2.", graph((t) => 12 * (Math.exp(-0.2 * t) - Math.exp(-t)), { xmin: -0.5, xmax: 20, ymin: -0.5, ymax: 7.5 }, [P(2.0118, 6.4199)], { a: 0, step: { x: 2, y: 1 } }), 0.0005),
  num(S`Pour $C(t)=12\left(e^{-0.2t}-e^{-t}\right)$, trouve la plus grande concentration (4 décimales).`, 6.4199, "Évalue en t = ln 5 / 0.8.", null, 0.0005),
  num("30 % d'une substance se désintègre en 50 ans. Trouve sa demi-vie (2 décimales).", 97.17, "e^(50k) = 0.7; demi-vie = ln 2 / |k|.", null, 0.01),
  num("Une population croît de façon exponentielle de 2000 à 2600 en 5 ans. À quelle vitesse croît-elle à la fin de ces 5 ans (2 décimales)?", 136.43, "k = ln 1.3 / 5; P′ = 2600k.", null, 0.01),
  num("Les placements A(t) = 1000e^(0.06t) et B(t) = 1500e^(0.04t) sont représentés. Quand ont-ils la même valeur (4 décimales)?", 20.2733, "e^(0.02t) = 1.5.", graph((t) => 1000 * Math.exp(0.06 * t), { xmin: -1, xmax: 30, ymin: -200, ymax: 6500 }, [P(20.2733, 3373.4)], { a: 0, more: [{ f: (t) => 1500 * Math.exp(0.04 * t), color: "blue", a: 0 }], step: { x: 5, y: 1000 } }), 0.0005),
  num("Pour A(t) = 1000e^(0.06t) et B(t) = 1500e^(0.04t), à quel moment t ≥ 0 croissent-ils au même taux?", 0, "60e^(0.06t) = 60e^(0.04t) seulement en t = 0."),
  tf("Si P′ = kP et que P triple en 4 heures, alors P est multipliée par neuf en 8 heures.", true, "Deux temps de triplement."),
  num(S`Une population logistique $P(t)=\frac{5000}{1+9e^{-0.6t}}$ commence à 500. Quand atteint-elle 4000 (4 décimales)?`, 5.9725, "1 + 9e^(−0.6t) = 1.25 ⇒ e^(−0.6t) = 1/36.", null, 0.0005),
  num("Le graphique de P(t) = 5000/(1 + 9e^(−0.6t)) est illustré. Quel est son taux de croissance au point d'inflexion?", 750, "kM/4 = 0.6 × 5000 / 4.", graph((t) => 5000 / (1 + 9 * Math.exp(-0.6 * t)), { xmin: -0.5, xmax: 12, ymin: -200, ymax: 5500 }, [P(Math.log(9) / 0.6, 2500)], { a: 0, lines: [{ m: 0, b: 5000, color: "gray", dash: true }], step: { x: 1, y: 500 } })),
  num(S`Un score d'habileté est $L(t)=90-70e^{-0.15t}$. Quand s'améliore-t-il à raison de 3 points par semaine (4 décimales)?`, 8.3518, "10.5e^(−0.15t) = 3.", null, 0.0005),
  mc(S`Pour $P=P_0e^{kt}$, le taux de variation $P'$ double exactement lorsque :`, S`$P$ double`, [S`$t$ double`, S`$k$ diminue de moitié`, S`$P_0$ diminue de moitié`], "P′ = kP est proportionnel à P."),
  num("Un échantillon de 2 g se désintègre jusqu'à 1.6 g en 3 jours. À quelle vitesse se désintègre-t-il à ce moment, en g par jour (4 décimales)?", -0.119, "k = ln 0.8 / 3; P′ = 1.6k.", null, 0.0005),
  num("Quel taux annuel en pourcentage, composé une fois par année, équivaut à 5 % composé de façon continue (4 décimales)?", 5.1271, "100(e^0.05 − 1).", null, 0.0005),
  num(S`Une rumeur se propage selon $N(t)=\frac{10000}{1+499e^{-0.5t}}$. Quel jour se propage-t-elle le plus vite (4 décimales)?`, 12.4252, "499e^(−0.5t) = 1.", null, 0.0005),
  num("Un café refroidit selon T = 20 + 70e^(−kt) °C et commence à refroidir à raison de 7 °C par minute (graphique illustré). Quand atteint-il 45 °C (4 décimales)?", 10.2962, "T′(0) = −70k = −7, donc k = 0.1; 70e^(−0.1t) = 25.", graph((t) => 20 + 70 * Math.exp(-0.1 * t), { xmin: -1, xmax: 40, ymin: -5, ymax: 100 }, [P(0, 90), P(10.2962, 45)], { a: 0, lines: [{ m: 0, b: 20, color: "gray", dash: true }], step: { x: 5, y: 10 } }), 0.0005),
  tf("À tout moment, une quantité qui décroît de façon exponentielle avec une demi-vie h perdra la moitié de sa quantité actuelle au cours des h unités de temps suivantes.", true, "La demi-vie ne dépend pas du point de départ."),
  num(S`Pour $P(t)=P_0e^{kt}$, $P(2)=500$ et $P(6)=2000$. Trouve $P_0$.`, 250, "e^(4k) = 4, donc e^(2k) = 2; P₀ = 500/2."),
];
