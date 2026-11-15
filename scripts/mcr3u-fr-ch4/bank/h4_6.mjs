// 4.6 Modèles exponentiels : croissance et décroissance — 20 questions difficiles (miroir de ../../mcr3u-ch4/bank/h4_6.mjs; valeurs calculées dans le code)
import { mc, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const firstN = (f, ok) => { for (let n = 0; n < 500; n++) if (ok(f(n))) return n; return NaN; };
const r2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "4.6 Modèles exponentiels : croissance et décroissance";
export const Q = [
  num("Une ville de 40 000 habitants croît de 3.5 % par année. Après combien d'années complètes dépasse-t-elle 60 000 habitants pour la première fois?", firstN((n) => 40000 * 1.035 ** n, (v) => v > 60000), "Essais successifs : 1.035ⁿ > 1.5."),
  num("Une dose de 500 mg : 15 % est éliminé chaque heure. Après combien d'heures complètes reste-t-il moins de 100 mg?", firstN((n) => 500 * 0.85 ** n, (v) => v < 100), "0.85ⁿ < 0.2."),
  num("Un échantillon passe de 240 g à 15 g en 36 jours. Quelle est sa demi-vie (en jours)?", 9, "240 → 15, c'est quatre divisions par deux."),
  num("Une population double tous les 25 ans. Quel est son taux de croissance annuel en pourcentage (au centième près)?", r2((2 ** (1 / 25) - 1) * 100), "2^(1/25) − 1.", null, 0.006),
  num("Compte A : 2000 dollars à 6 %; compte B : 2600 dollars à 4 % (composés annuellement). Après combien d'années complètes le compte A vaut-il plus?", firstN((n) => 2000 * 1.06 ** n - 2600 * 1.04 ** n, (v) => v > 0), "Compare année par année.", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 1500, ymax: 6500 }, curves: [{ f: (n) => 2000 * 1.06 ** n, a: 0, color: "blue" }, { f: (n) => 2600 * 1.04 ** n, a: 0, color: "red" }], step: { x: 2, y: 500 }, xlabel: "années", ylabel: "dollars" })),
  num(String.raw`Du thé refroidit selon $T=70(0.88)^t+20$ (°C, t en minutes). À la minute près, quand passe-t-il sous 45 °C pour la première fois?`, firstN((t) => 70 * 0.88 ** t + 20, (v) => v < 45), "0.88ᵗ < 25/70.", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 95 }, curves: [{ f: (t) => 70 * 0.88 ** t + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 45, color: "amber", dash: true }, { m: 0, b: 20, color: "green", dash: true }], step: { x: 2, y: 10 } })),
  mc(String.raw`Pour le modèle du thé $T=70(0.88)^t+20$, quelle image est correcte pour $t\ge0$?`, String.raw`$20<T\le90$`, [String.raw`$0<T\le70$`, String.raw`$20\le T\le90$`, String.raw`$T>20$ seulement pour $t<20$`], "Commence à 90; s'approche de 20."),
  num("Une balle lâchée de 10 m rebondit à 65 % de sa hauteur. À quel rebond la hauteur passe-t-elle sous 1 m pour la première fois?", firstN((n) => 10 * 0.65 ** n, (v) => v < 1), "10(0.65)ⁿ < 1."),
  num("Un échantillon radioactif perd 6 % par jour. Après combien de jours complets a-t-il perdu au moins la moitié?", firstN((n) => 0.94 ** n, (v) => v <= 0.5), "0.94ⁿ ≤ 0.5."),
  tf("Perdre 10 %, puis gagner 10 % ramène une quantité à sa valeur de départ.", false, "0.9 × 1.1 = 0.99."),
  num("Une culture passe de 300 à 2400 en 9 heures en doublant à un rythme constant. Quel est le temps de doublement (en h)?", 3, "300 → 2400, c'est 3 doublements."),
  num("5000 dollars croissent à 5 % composé annuellement. Combien d'intérêts sont gagnés pendant la 4e année seulement (au centième près)?", r2(5000 * 1.05 ** 4 - 5000 * 1.05 ** 3), "A(4) − A(3).", null, 0.006),
  num("Une forêt de 80 000 arbres en perd 5 % par année, mais 2000 arbres sont plantés à la fin de chaque année. Combien d'arbres y a-t-il après 2 ans?", Math.round((80000 * 0.95 + 2000) * 0.95 + 2000), "Applique la règle deux fois."),
  num("Le graphique montre la concentration d'un médicament qui diminue de moitié toutes les 4 h. À t = 10 h, quelle quantité de la dose de 120 mg reste-t-il (au centième près)?", r2(120 * 0.5 ** (10 / 4)), "120(½)^(10/4).", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 130 }, curves: [{ f: (t) => 120 * 0.5 ** (t / 4), a: 0, color: "violet" }], points: [P(4, 60), P(8, 30)], step: { x: 2, y: 20 }, xlabel: "t (h)", ylabel: "mg" }), 0.006),
  num("Données : t = 0, 1, 2, 3 et A = 64, 48, 36, 27. Que vaut A à t = 5 (au centième près)?", r2(64 * 0.75 ** 5), "Rapport de 0.75.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 70 }, points: [P(0, 64), P(1, 48), P(2, 36), P(3, 27)], step: { x: 1, y: 10 } }), 0.006),
  num("Deux cultures : A commence à 100 et double toutes les 3 h; B commence à 800 et double toutes les 6 h. Après combien d'heures sont-elles égales?", 18, "100·2^(t/3) = 800·2^(t/6) → 2^(t/6) = 8."),
  num("Une voiture de 30 000 dollars perd 18 % de sa valeur par année. Après combien d'années complètes vaut-elle moins de la moitié de son prix?", firstN((n) => 0.82 ** n, (v) => v < 0.5), "0.82ⁿ < 0.5."),
  num("Une population compte 12 000 personnes aujourd'hui et en comptait 10 000 il y a deux ans; elle croît de façon exponentielle. Combien en comptera-t-elle dans 2 ans?", 14400, "Facteur 1.2 tous les 2 ans."),
  tf("Le temps de doublement ne dépend pas de la quantité initiale.", true, "A₀ se simplifie."),
  num("Un objet refroidit de 95 °C à 55 °C en 10 min dans une pièce à 15 °C. Son écart avec la température ambiante diminue de moitié toutes les 10 min. Quelle est sa température après 30 min?", 25, "Écart 80 → 40 → 20 → 10."),
];
