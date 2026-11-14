// 8.5 Modélisation à l'aide de fonctions combinées — 20 questions difficiles (miroir de ../../mhf4u-ch8/bank/h8_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const C = (t) => 12 * t * 0.7 ** t;

export const TOPIC = "8.5 Modélisation à l'aide de fonctions combinées";
export const Q = [
  num(S`$C(t)=12t(0.7)^t$ mg/L. Estime la concentration maximale (au dixième près).`, C(1 / Math.log(1 / 0.7)), "Maximum vers t ≈ 2.8.", null, 0.1),
  num(S`Pour $C(t)=12t(0.7)^t$, quand la concentration redevient-elle inférieure à $5$ mg/L? (au dixième près)`, 8.4, "Après le maximum, C(8) ≈ 5.53 et C(9) ≈ 4.36; en raffinant, t ≈ 8.4.", null, 0.1),
  num(S`Un pendule : $\theta(t)=30(0.85)^t\cos(\pi t)$. Quand l'enveloppe devient-elle pour la première fois inférieure à $1^\circ$? (au dixième près)`, L(1 / 30) / L(0.85), "0.85ᵗ = 1/30.", null, 0.05),
  num(S`$\bar C(x)=25+\frac{8000}x$. Combien d'articles ramènent le coût moyen à au plus $30$?`, 1600, "8000/x ≤ 5."),
  num(S`Une nappe de pétrole : $r(t)=5+2t$ m, $A=\pi r^2$. Quand l'aire vaut-elle $1000\ \text{m}^2$? (au centième près)`, (Math.sqrt(1000 / Math.PI) - 5) / 2, "5 + 2t = √(1000/π).", null, 0.01),
  num(S`$T(t)=20-0.3t+4\sin\left(\frac{\pi t}{12}\right)$. Quand $T$ devient-elle pour la première fois inférieure à $14$? (au dixième près)`, 13.8, "Utilise un graphique ou une table : T(13) ≈ 15.1, T(14) ≈ 13.8; en raffinant, t ≈ 13.8.", null, 0.1),
  num(S`Un coût de chauffage : $T(t)=17+3\sin\frac{\pi t}{12}$ et $K(T)=0.4(21-T)$ dollars/h. Détermine le maximum de $K(T(t))$.`, 2.8, "Maximum quand sin = −1 : 0.4(21 − 14).", null, 0.001),
  num(S`Population $P=2000(1.025)^t$ et nourriture pour $F=3000+40t$ personnes. Quand une pénurie commence-t-elle? (au dixième près)`, 30.1, "Raffine une table : point de croisement à t ≈ 30.1.", null, 0.1),
  num(S`Combien de machines identiques de $60$ dB faut-il pour obtenir au moins $75$ dB?`, 32, "10 log n ≥ 15 ⇒ n ≥ 31.6."),
  num(S`Le rayon d'une onde circulaire à la surface de l'eau est $r(t)=\sqrt{t}$ m. À quel moment l'aire vaut-elle $10\pi\ \text{m}^2$?`, 10, "πr² = πt = 10π."),
  mc(S`Les ventes sont $S(t)=a+bt+c\sin(kt)$. Sur une période complète, la moyenne de la partie saisonnière est…`, "0", ["c", "a", "bt"], "Une onde sinusoïdale a une moyenne nulle sur une période."),
  mc(S`Un modèle $y=50(0.9)^t+20$ décrit…`, "une quantité qui décroît vers 20", ["une croissance vers 50", "une décroissance vers 0", "une oscillation autour de 20"], "La partie exponentielle → 0."),
  ms(S`Choisis chaque situation qu'un produit modélise le mieux.`, ["une vibration dont l'amplitude diminue de moitié toutes les 2 s", "une lumière qui clignote de plus en plus fort", "ventes = tendance + saison", "coût par article"], [0, 1], "Enveloppe × onde dans les deux cas; les autres sont une somme et un quotient."),
  tf(S`$\bar C(x)=\frac{C(x)}x$ diminue toujours quand $C$ est linéaire avec un coût fixe positif.`, true, "a/x + b diminue pour x > 0."),
  tf(S`Une onde amortie $a\,b^t\cos(kt)$ avec $0<b<1$ finit par rester dans n'importe quelle petite bande autour de $0$.`, true, "L'enveloppe → 0."),
  mc("Le graphique montre C(t) = 12t(0.7)ᵗ. Quel énoncé est vrai?", "elle monte jusqu'à un maximum vers t ≈ 2.8, puis décroît", ["elle ne cesse de monter", "elle oscille", "elle est linéaire"], "Le facteur linéaire agit d'abord, la décroissance exponentielle ensuite.", planeDoc({ view: { xmin: -0.3, xmax: 15, ymin: -0.5, ymax: 14 }, curves: [{ f: C, a: 0, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre une température : une tendance à la baisse plus un cycle quotidien. Quel est le taux de la tendance?", "−0.3 °C par heure", ["4 °C par heure", "−4 °C par heure", "0.3 °C par heure"], "La ligne centrale descend de 0.3 par heure.", planeDoc({ view: { xmin: 0, xmax: 48, ymin: 0, ymax: 26 }, curves: [{ f: (t) => 20 - 0.3 * t, color: "gray" }, { f: (t) => 20 - 0.3 * t + 4 * Math.sin(Math.PI * t / 12), color: "violet" }], step: { x: 4, y: 2 } })),
  mc("Le graphique compare la population (en violet) à l'approvisionnement en nourriture (en bleu). Que se passe-t-il après le point de croisement?", "une pénurie qui s'aggrave", ["un surplus qui augmente", "aucun changement", "la population diminue"], "L'exponentielle reste au-dessus de la droite.", planeDoc({ view: { xmin: 0, xmax: 80, ymin: 1000, ymax: 15000 }, curves: [{ f: (t) => 2000 * 1.025 ** t, a: 0, color: "violet" }], lines: [{ m: 40, b: 3000, color: "blue" }], step: { x: 10, y: 1000 } })),
  mc("Le graphique montre une courbe de coût moyen 25 + 8000/x. Où atteint-elle 30?", "x = 1600", ["x = 800", "x = 30", "x = 8000"], "8000/x = 5.", planeDoc({ view: { xmin: -50, xmax: 4000, ymin: 0, ymax: 80 }, curves: [{ f: (x) => 25 + 8000 / x, a: 150, color: "violet" }], lines: [{ m: 0, b: 30, color: "blue", dash: true }, { m: 0, b: 25, color: "red", dash: true }], step: { x: 500, y: 10 } })),
  num(S`$S(t)=500+20t+150\cos\left(\frac{\pi(t-7)}6\right)$. Détermine $S(13)$.`, 500 + 260 - 150, "cos π = −1."),
];
