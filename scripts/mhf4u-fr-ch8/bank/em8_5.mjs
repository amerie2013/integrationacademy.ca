// 8.5 Modélisation à l'aide de fonctions combinées — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch8/bank/em8_5.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc("Une quantité augmente de façon régulière et suit aussi une régularité saisonnière. Quelle combinaison la modélise?", "une somme", ["un produit", "un quotient", "une composée"], "Tendance + cycle."),
  mc("Une vibration s'éteint lentement. Quelle combinaison la modélise?", "un produit", ["une somme", "un quotient", "une différence"], "Enveloppe × onde."),
  mc("Le coût par personne d'une sortie est modélisé par…", "un quotient", ["une somme", "un produit", "une composée"], "Coût total ÷ nombre de personnes."),
  mc("L'aire d'un étang dépend de son rayon, et le rayon augmente avec le temps. C'est…", "une composée", ["une somme", "un quotient", "une différence"], "A(r(t))."),
  mc("Le profit, soit le revenu moins le coût, est…", "une différence", ["un produit", "une composée", "un quotient"], "P = R − C."),
  num(S`$S(t)=120+6t+25\sin\left(\frac{\pi t}6\right)$. Détermine $S(3)$.`, 163, "120 + 18 + 25."),
  num(S`$S(t)=300+10t+50\sin\left(\frac{\pi t}6\right)$. Détermine $S(6)$.`, 360, "sin π = 0."),
  num(S`$\bar C(x)=20+\frac{1000}x$. Détermine $\bar C(100)$.`, 30, "20 + 10."),
  num(S`$d(t)=6(0.5)^t\cos(2\pi t)$. Détermine $d(1)$.`, 3, "6 × 0.5 × 1."),
  num(S`$r(t)=2t$ cm et $A=\pi r^2$. Détermine l'aire à $t=4$ (au dixième près).`, Math.PI * 64, "r = 8.", null, 0.1),
  num(S`Quelle est la période, en mois, de $\sin\left(\frac{\pi t}6\right)$?`, 12, "2π ÷ (π/6)."),
  num(S`De quelle valeur $\bar C(x)=15+\frac{600}x$ s'approche-t-elle pour de très grandes valeurs de $x$?`, 15, "600/x → 0."),
  tf(S`Dans $S(t)=200+15t+40\sin\frac{\pi t}6$, le nombre $40$ est la variation saisonnière.`, true, "L'amplitude du terme sinus."),
  tf(S`Une enveloppe $a\,b^t$ avec $b=1.2$ décrit un amortissement.`, false, "L'amortissement exige 0 < b < 1."),
  tf(S`Le coût moyen $\frac{C(x)}x$ est défini à $x=0$.`, false, "Division par zéro."),
  fill(S`Dans $A(r(t))$, la fonction appliquée en premier est ____.`, ["r", "r(t)"], "De l'intérieur vers l'extérieur."),
  fill(S`$\theta(t)=20(0.9)^t\cos(\pi t)$ a l'enveloppe $20(0.9)^t$, qui vaut ____ à $t=1$.`, ["18"], "20 × 0.9."),
  num(S`Une machine produit $50$ dB. Avec $L(n)=50+10\log n$, détermine le niveau sonore de $10$ machines.`, 60, "50 + 10."),
  mc("Le graphique montre les ventes (en violet) et la droite de tendance (en gris). Quelle est l'ampleur de la variation saisonnière?", "environ 40", ["environ 15", "environ 200", "environ 12"], "La courbe est au plus à 40 au-dessus ou en dessous de la droite.", planeDoc({ view: { xmin: -1, xmax: 25, ymin: 100, ymax: 650 }, curves: [{ f: (t) => 200 + 15 * t, color: "gray" }, { f: (t) => 200 + 15 * t + 40 * Math.sin(Math.PI * t / 6), color: "violet" }], step: { x: 2, y: 50 } })),
  mc("Le graphique montre une courbe de coût moyen. Que représente la droite pointillée?", "le coût de chaque article supplémentaire", ["le coût fixe", "le seuil de rentabilité", "le coût total"], "L'asymptote horizontale est le coût par article.", planeDoc({ view: { xmin: -20, xmax: 1000, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 15 + 2000 / x, a: 40, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true }], step: { x: 100, y: 5 } })),
];

export const M = [
  num(S`À quelle valeur de $t$ l'enveloppe $10(0.7)^t$ devient-elle pour la première fois inférieure à $1$? (au centième près)`, L(0.1) / L(0.7), "0.7ᵗ = 0.1.", null, 0.01),
  num(S`À quelle valeur de $t$ l'enveloppe $20(0.9)^t$ devient-elle pour la première fois inférieure à $1$? (au centième près)`, L(0.05) / L(0.9), "0.9ᵗ = 0.05.", null, 0.01),
  num(S`$\bar C(x)=12+\frac{3000}x$. Combien d'articles le ramènent à au plus $15$?`, 1000, "3000/x ≤ 3."),
  num(S`$r(t)=2t+1$ m et $A=\pi r^2$. Quand l'aire vaut-elle $200\ \text{m}^2$? (au centième près)`, (Math.sqrt(200 / Math.PI) - 1) / 2, "2t + 1 = √(200/π).", null, 0.01),
  num(S`Un ballon a un rayon $r=3$ cm. Détermine $V=\frac43\pi r^3$ (au dixième près).`, 36 * Math.PI, "36π.", null, 0.1),
  num(S`Cinq sources identiques de $50$ dB donnent ensemble quel niveau sonore? (au centième près)`, 50 + 10 * L(5), "50 + 10 log 5.", null, 0.01),
  num(S`$C(t)=15t(0.6)^t$ mg/L. Détermine $C(2)$.`, 10.8, "30 × 0.36.", null, 0.001),
  num(S`$T(t)=18-0.1t+5\sin\left(\frac{\pi t}{12}\right)$. Détermine $T(18)$.`, 18 - 1.8 - 5, "sin(3π/2) = −1.", null, 0.001),
  mc(S`Quel modèle donne une tendance des ventes de $8$ par mois avec une variation de $30$ sur $12$ mois?`, S`$S=100+8t+30\sin\frac{\pi t}6$`, [S`$S=100+30t+8\sin\frac{\pi t}6$`, S`$S=100+8t+30\sin(12t)$`, S`$S=(100+8t)\cdot30\sin\frac{\pi t}6$`], "Coefficient de la tendance 8, amplitude 30, période 12."),
  mc(S`Une onde commence avec une amplitude de $5$ et en perd $20\%$ chaque seconde. Son enveloppe est…`, S`$5(0.8)^t$`, [S`$5(0.2)^t$`, S`$5-0.2t$`, S`$5(1.2)^{-t}$`], "Elle garde 80 % chaque seconde."),
  mc(S`$V(r(t))$ avec $r(t)=t+2$ et $V=\frac43\pi r^3$ est égale à…`, S`$\frac43\pi(t+2)^3$`, [S`$\frac43\pi t^3+2$`, S`$\frac43\pi(t^3+8)$`, S`$\frac43\pi r^3(t+2)$`], "Remplace r par r(t)."),
  ms(S`Choisis chaque énoncé vrai au sujet de $\bar C(x)=10+\frac{500}x$.`, ["elle diminue quand x augmente (x > 0)", "elle s'approche de 10", "elle vaut 15 à x = 100", "elle est définie à x = 0"], [0, 1, 2], "500/x diminue."),
  tf(S`Une population $800(1.03)^t$ finit par dépasser tout approvisionnement linéaire $a+bt$.`, true, "La croissance exponentielle finit par l'emporter."),
  tf(S`Dans $\theta(t)=20(0.9)^t\cos(\pi t)$, la période de l'oscillation est de $2$ s.`, true, "2π/π."),
  fill(S`Pour $C(t)=15t(0.6)^t$, le maximum est près de $t\approx$ ____ (au dixième près).`, ["2", "2.0"], "Table : C(1) = 9, C(2) = 10.8, C(3) = 9.72."),
  num(S`Quand $600(1.04)^t$ dépasse-t-elle $900+15t$? (au dixième près)`, 16.5, "Raffine une table entre 16 et 17.", null, 0.1),
  num(S`Trois sources identiques de $70$ dB donnent quel niveau sonore? (au dixième près)`, 70 + 10 * L(3), "70 + 10 log 3.", null, 0.05),
  mc("Le graphique montre un modèle de médicament C(t) = 15t(0.6)ᵗ. Pendant environ combien de temps la concentration est-elle supérieure à 6 mg/L?", "environ 4.4 h (de 0.5 h à 4.9 h)", ["environ 2 h", "environ 10 h", "environ 6 h"], "Points de croisement près de 0.52 et de 4.91.", planeDoc({ view: { xmin: -0.3, xmax: 10, ymin: -0.5, ymax: 12 }, curves: [{ f: (t) => 15 * t * 0.6 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 6, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre un pendule amorti. Estime le moment où l'oscillation devient pour la première fois inférieure à 5°.", "environ 13 s", ["environ 2 s", "environ 5 s", "environ 30 s"], "20(0.9)ᵗ = 5 à t ≈ 13.2.", planeDoc({ view: { xmin: -0.5, xmax: 18, ymin: -22, ymax: 22 }, curves: [{ f: (t) => 20 * 0.9 ** t, a: 0, color: "gray" }, { f: (t) => 20 * 0.9 ** t * Math.cos(Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "blue", dash: true }], step: { x: 1, y: 5 } })),
  num(S`$S(t)=200+15t+40\sin\left(\frac{\pi t}6\right)$. Détermine $S(12)$.`, 380, "sin 2π = 0."),
];
