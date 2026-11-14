// 1.4 Limites et continuité — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, H } from "./fig.mjs";

export const E = [
  tf("Toute fonction polynomiale est continue pour tout x réel.", true, "Aucune discontinuité, aucun trou ni aucune asymptote."),
  mc("Un trou dans un graphique est quel type de discontinuité?", "non essentielle", ["par saut", "infinie", "aucune"], "La limite existe."),
  mc(String.raw`Quel type de discontinuité $\frac1x$ a-t-elle en 0?`, "infinie", ["non essentielle", "par saut", "aucune"], "Une asymptote verticale."),
  num(String.raw`Quelle valeur de $f(2)$ rend $f(x)=\frac{x^2-4}{x-2}$ continue en 2?`, 4, "La limite x + 2 → 4."),
  tf("Pour que f soit continue en a, f(a) doit être définie.", true, "C'est l'une des trois conditions."),
  mc("Quel type de discontinuité le graphique montre-t-il?", "par saut", ["non essentielle", "infinie", "aucune"], "Les limites à gauche et à droite sont différentes.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 2, a: -3, b: -0.02, color: "violet" }, { f: (x) => 4 - x, a: 0, b: 3, color: "violet" }], points: [H(0, 2), P(0, 4, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to1}(3x+2)$.`, 5, "Continue : substitue."),
  tf(String.raw`$f(x)=|x|$ est continue en $x=0$.`, true, "f(0) = 0 = la limite."),
  num(String.raw`Trouve $k$ pour que $f(x)=x+k$ pour $x\lt1$ et $f(x)=2x$ pour $x\ge1$ soit continue.`, 1, "1 + k = 2."),
  mc(String.raw`Où $\frac1{x-3}$ est-elle discontinue?`, String.raw`$x=3$`, [String.raw`$x=-3$`, String.raw`$x=0$`, "nulle part"], "Dénominateur 0."),
  num(String.raw`Évalue $\lim_{x\to2}(x+1)(x-3)$.`, -3, "3 × (−1)."),
  tf("Une discontinuité par saut peut être éliminée en redéfinissant un seul point.", false, "Les deux côtés ne concordent toujours pas."),
  num(String.raw`Combien de discontinuités $\frac1{x^2-1}$ a-t-elle?`, 2, "x = ±1."),
  mc("Quelle fonction est continue en x = 0?", String.raw`$x^2$`, [String.raw`$\frac1x$`, String.raw`$\frac{|x|}x$`, String.raw`$\frac{1}{x^2}$`], "Un polynôme."),
  num(String.raw`Évalue $\lim_{x\to3}\frac{x^2+1}{x+1}$.`, 2.5, "10 ÷ 4.", null, 0.0001),
  mc("Quel type de discontinuité le graphique montre-t-il en x = 1?", "non essentielle", ["par saut", "infinie", "aucune"], "Un seul point manquant.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 2 * x + 1, a: -2, b: 0.97, color: "violet" }, { f: (x) => 2 * x + 1, a: 1.03, b: 2.5, color: "violet" }], points: [H(1, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`Quelle valeur en $x=-3$ rend $\frac{x^2-9}{x+3}$ continue?`, -6, "x − 3 → −6."),
  tf("Une fonction rationnelle est continue partout où son dénominateur n'est pas 0.", true, "Loi du quotient."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{x^2+3x}{x}$.`, 3, "x + 3."),
  fill("Une asymptote verticale est une discontinuité ___.", ["infinie", "infinite"], "f croît sans borne."),
];

export const M = [
  num(String.raw`Trouve $k$ pour que $f(x)=kx-1$ pour $x\lt2$ et $f(x)=x^2+1$ pour $x\ge2$ soit continue.`, 3, "2k − 1 = 5."),
  num(String.raw`Trouve $k$ pour que $f(x)=x^2+k$ pour $x\le1$ et $f(x)=3x+2$ pour $x>1$ soit continue.`, 4, "1 + k = 5."),
  mc(String.raw`Classe la discontinuité de $\frac{x-1}{x^2-1}$ en $x=-1$.`, "infinie", ["non essentielle", "par saut", "aucune"], "1/(x + 1) près de −1."),
  num(String.raw`Trouve $\lim_{x\to1}\frac{x-1}{x^2-1}$.`, 0.5, "1/(x + 1).", null, 0.0001),
  num(String.raw`Évalue $\lim_{x\to2}\frac{x^3-8}{x-2}$.`, 12, "x² + 2x + 4."),
  num(String.raw`Évalue $\lim_{x\to-3}\frac{x^2+2x-3}{x+3}$.`, -4, "x − 1."),
  tf(String.raw`$f(x)=\frac{x}{|x|}$ est continue en $x=0$.`, false, "Elle n'y est pas définie; côtés −1 et 1."),
  mc("Quelle condition de continuité n'est pas respectée en x = 2 sur le graphique?", "la limite n'est pas égale à f(2)", ["f(2) n'est pas définie", "la limite n'existe pas", "aucune — la fonction est continue"], "Le point est situé hors de la courbe.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 0.5 * x + 1, a: -1, b: 1.96, color: "violet" }, { f: (x) => 0.5 * x + 1, a: 2.04, b: 5, color: "violet" }], points: [H(2, 2), P(2, 5, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to1}\sqrt{3x+6}$.`, 3, "√9."),
  num(String.raw`Évalue $\lim_{x\to4}\left(\frac{x^2-16}{x-4}+1\right)$.`, 9, "8 + 1."),
  num(String.raw`Combien de discontinuités $\frac{x+2}{x^2+x-2}$ a-t-elle?`, 2, "x = −2 (non essentielle) et x = 1 (infinie)."),
  num(String.raw`Trouve la limite à la discontinuité non essentielle de $\frac{x+2}{x^2+x-2}$ (4 décimales).`, -0.3333, "1/(x − 1) en −2.", null, 0.0005),
  mc(String.raw`La fonction $f(x)=2x$ pour $x\lt0$, $f(x)=x^2$ pour $x\ge0$ est-elle continue en 0?`, "oui", ["non, un saut", "non, un trou", "non, une asymptote"], "Les deux parties donnent 0."),
  num(String.raw`$f(x)=\frac{x^2+kx}{x}$ pour $x\ne0$ et $f(0)=5$. Trouve $k$ pour que la fonction soit continue.`, 5, "x + k → k."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{(x+2)^2-4}{x}$.`, 4, "x + 4."),
  tf("Si f est dérivable en a, alors f est continue en a.", true, "Dérivable entraîne continue."),
  num(String.raw`Trouve $a$ pour que $f(x)=ax^2$ pour $x\lt2$ et $f(x)=4x+4$ pour $x\ge2$ soit continue.`, 3, "4a = 12."),
  mc(String.raw`Quel type de discontinuité $\frac1{x^2}$ a-t-elle en 0?`, "infinie", ["non essentielle", "par saut", "aucune"], "→ +∞ des deux côtés."),
  num("La fonction représentée vaut x + 1 pour x < 2 et 5 − x pour x ≥ 2. Combien vaut f(2)?", 3, "5 − 2; elle est continue.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -1, b: 2, color: "violet" }, { f: (x) => 5 - x, a: 2, b: 5, color: "green" }], points: [P(2, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to1}\frac{x-1}{\sqrt x-1}$.`, 2, "√x + 1."),
];
