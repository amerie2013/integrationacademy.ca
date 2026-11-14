// 8.2 Produits et quotients de fonctions — 20 questions difficiles (miroir de ../../mhf4u-ch8/bank/h8_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "8.2 Produits et quotients de fonctions";
export const Q = [
  num(S`Une onde $d(t)=15(0.75)^t\cos(\pi t)$. Quand son enveloppe devient-elle pour la première fois inférieure à $1$? (au centième près)`, L(1 / 15) / L(0.75), "0.75ᵗ = 1/15.", null, 0.01),
  num(S`Pour $d(t)=15(0.75)^t\cos(\pi t)$, détermine $d(3)$ (au centième près).`, -15 * 0.75 ** 3, "cos 3π = −1.", null, 0.01),
  num(S`Détermine la valeur minimale de $y=x\cdot2^x$ (au centième près).`, -1 / (Math.E * Math.LN2), "Minimum vers x ≈ −1.44.", null, 0.01),
  num(S`Sur combien d'intervalles de $x$ a-t-on $\dfrac{(x-1)(x+2)}{(x-3)}>0$?`, 2, "Positive sur −2 < x < 1 et x > 3."),
  num(S`$f(x)=x^2-9$ et $g(x)=x^2-x-6$. Détermine l'ordonnée du trou de $\frac fg$.`, 1.2, "(x + 3)/(x + 2) à x = 3 : 6/5.", null, 0.001),
  num(S`$\left(\frac fg\right)(x)=\dfrac{x^2-9}{x^2-x-6}$ a une seule asymptote verticale $x=a$. Détermine $a$.`, -2, "Après la simplification de (x − 3), le dénominateur est x + 2."),
  num(S`Combien de zéros $y=x^2\cos x$ a-t-elle sur $-2\pi\le x\le2\pi$?`, 5, "x = 0 et cos x = 0 à ±π/2, ±3π/2."),
  num(S`Résous $(x-2)\cdot3^x=0$.`, 2, "3ˣ n'est jamais nul."),
  mc(S`$h(x)=\dfrac{\sin x}{x}$ est…`, "paire, et non définie à x = 0", ["impaire", "paire et définie à 0", "ni paire ni impaire"], "impaire ÷ impaire = paire."),
  mc(S`Qu'est-ce qui décrit $y=\dfrac{x^2+1}{x-1}$ près de $x=1$?`, "une asymptote verticale", ["un trou", "un zéro", "rien de particulier"], "Le numérateur y vaut 2 ≠ 0."),
  mc(S`Un ressort : $d(t)=a\,b^t\cos(kt)$ avec $0<b<1$. Doubler $a$…`, "double chaque déplacement", ["double la période", "réduit l'amortissement de moitié", "ne change rien"], "a multiplie tout le produit."),
  ms(S`Choisis chaque énoncé vrai au sujet de $y=\dfrac{x-2}{x^2-4}$.`, ["elle a un trou à x = 2", "elle a une asymptote verticale x = −2", "elle n'a aucun zéro", "elle est paire"], [0, 1, 2], "Elle se simplifie en 1/(x + 2), x ≠ 2."),
  tf(S`Si $f$ et $g$ sont toutes deux positives et croissantes, alors $fg$ est croissante.`, true, "Les deux facteurs augmentent et restent positifs."),
  tf(S`Si $f$ et $g$ sont croissantes, alors $fg$ est forcément croissante.`, false, "f(x) = g(x) = x donne x², qui décroît pour x < 0."),
  num(S`Un produit $P(x)=(x-1)(5-x)$ modélise un profit (en milliers). Détermine son maximum.`, 4, "Sommet à x = 3 : 2 × 2."),
  num(S`Pour le modèle de médicament $C(t)=8t(0.5)^t$, détermine $C(2)$.`, 4, "16 × 0.25."),
  mc("Le graphique montre y = x² sin x. Quel énoncé est vrai?", "elle est symétrique par rapport à l'origine", ["elle est symétrique par rapport à l'axe des y", "elle est périodique", "elle n'a aucun zéro sauf 0"], "paire × impaire = impaire.", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -25, ymax: 25 }, curves: [{ f: (x) => x * x * Math.sin(x), color: "violet" }], step: { x: 1, y: 5 } })),
  mc("Le graphique montre y = (x² − 1)/(x − 2). Où est-elle positive?", "−1 < x < 1 ou x > 2", ["x < −1 ou 1 < x < 2", "x > 2 seulement", "−1 < x < 2"], "Tableau de signes avec −1, 1 et 2.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 12 }, curves: [{ f: (x) => (x * x - 1) / (x - 2), b: 1.9, color: "violet" }, { f: (x) => (x * x - 1) / (x - 2), a: 2.1, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre une onde amortie d'enveloppe 10(0.6)ᵗ. Estime quand l'enveloppe atteint 1.", "environ 4.5", ["environ 1.7", "environ 10", "environ 6"], "t = log 0.1 / log 0.6 ≈ 4.51.", planeDoc({ view: { xmin: -0.2, xmax: 8, ymin: -10.5, ymax: 10.5 }, curves: [{ f: (t) => 10 * 0.6 ** t, a: 0, color: "gray" }, { f: (t) => 10 * 0.6 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre y = x·2ˣ. Où se trouve environ son point le plus bas?", "x ≈ −1.4", ["x = 0", "x ≈ −3", "elle n'a pas de point le plus bas"], "Table : y(−1.4) ≈ −0.53 est la plus petite valeur.", planeDoc({ view: { xmin: -5, xmax: 1.5, ymin: -1, ymax: 2 }, curves: [{ f: (x) => x * 2 ** x, color: "violet" }], step: { x: 0.5, y: 0.5 } })),
];
