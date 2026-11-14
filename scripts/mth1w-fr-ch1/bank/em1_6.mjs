// 1.6 Puissances : exposants nuls et négatifs (et racines carrées) — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph } from "./svg.mjs";

export const E = [
  num(String.raw`Évalue $2^5$.`, 32, String.raw`$2\cdot2\cdot2\cdot2\cdot2$.`),
  num(String.raw`Évalue $(-3)^3$.`, -27, "Trois facteurs négatifs : négatif."),
  num(String.raw`Évalue $9^0$.`, 1, "Toute base non nulle à la puissance 0 vaut 1."),
  fill(String.raw`Évalue $3^{-2}$ sous forme de fraction : ___`, ["1/9"], String.raw`$\frac{1}{3^2}$.`),
  mc(String.raw`Dans $7^4$, quelle est la base?`, "$7$", ["$4$", "$28$", "$2401$"], "La base est le facteur qui se répète."),
  mc(String.raw`$5^3$ signifie`, String.raw`$5\times5\times5$`, [String.raw`$5\times3$`, String.raw`$3\times3\times3\times3\times3$`, String.raw`$5+5+5$`], "La base 5 est un facteur 3 fois."),
  num(String.raw`Évalue $\sqrt{81}$.`, 9, String.raw`$9^2=81$.`),
  tf(String.raw`$2^{-3}$ est un nombre négatif.`, false, String.raw`$2^{-3}=\frac18$, positif.`),
  num(String.raw`Évalue $(-1)^{6}$.`, 1, "Nombre pair de facteurs négatifs."),
  fill(String.raw`Évalue $\left(\frac12\right)^3$ : ___`, ["1/8"], String.raw`$\frac{1}{8}$.`),
  num(String.raw`Évalue $10^{-2}$ sous forme décimale.`, 0.01, String.raw`$\frac{1}{100}$.`, undefined, 0.000001),
  num(String.raw`Évalue $-4^2$.`, -16, String.raw`Seul $4$ est élevé au carré : $-16$.`),
  num(String.raw`Évalue $(-4)^2$.`, 16, String.raw`$(-4)(-4)=16$.`),
  ms(String.raw`Lesquels sont égaux à $1$? Sélectionne-les tous.`, [String.raw`$5^0$`, String.raw`$(-5)^0$`, String.raw`$-5^0$`, String.raw`$1^{9}$`], [0, 1, 3], String.raw`$-5^0=-1$.`),
  num(String.raw`Un carré a des côtés de $7$ cm. Quelle est son aire en cm$^2$?`, 49, String.raw`$7^2=49$.`),
  num(String.raw`Un cube a des arêtes de $3$ cm. Quel est son volume en cm$^3$?`, 27, String.raw`$3^3=27$.`),
  fill(String.raw`Résous $x^2=25$. Écris les deux réponses séparées par une virgule : ___`, ["5, -5", "5,-5", "-5, 5", "-5,5", "±5", "+-5", "5 et -5", "-5 et 5"], String.raw`$5^2=25$ et $(-5)^2=25$.`),
  mc(String.raw`Que vaut $\sqrt[3]{8}$?`, "$2$", ["$4$", "$\\frac83$", "$64$"], String.raw`$2^3=8$.`),
  tf(String.raw`$4^{-1}=\frac14$`, true, "Un exposant négatif signifie l'inverse."),
  mc("Le graphique montre des puissances de 3. Quelle valeur est indiquée à l'exposant 0?", "$1$", ["$0$", "$3$", String.raw`$\frac13$`], String.raw`$3^0=1$.`, graph({ series: [{ pts: [[-1, 0.333], [0, 1], [1, 3], [2, 9]] }], xmin: -2, xmax: 3, ymin: 0, ymax: 10, xstep: 1, ystep: 1, xlabel: "exposant", ylabel: "3^n" })),
];

export const M = [
  num(String.raw`Évalue $2^3+3^2-4^0$.`, 16, String.raw`$8+9-1=16$.`),
  fill(String.raw`Évalue $\left(\frac34\right)^{-2}$ : ___`, ["16/9"], String.raw`Renverse et élève au carré : $\frac{16}{9}$.`),
  fill(String.raw`Évalue $(-2)^{-3}$ : ___`, ["-1/8", "−1/8"], String.raw`$\frac{1}{(-2)^3}=-\frac18$.`),
  num(String.raw`Évalue $5^2-2^{-1}\times8$.`, 21, String.raw`$25-\frac12\times8=25-4=21$.`),
  num(String.raw`Évalue $\sqrt{0.64}$.`, 0.8, String.raw`$0.8^2=0.64$.`, undefined, 0.000001),
  fill(String.raw`Évalue $\sqrt{\frac{36}{121}}$ : ___`, ["6/11"], String.raw`$\frac{6}{11}$.`),
  mc(String.raw`Lequel est le plus grand?`, String.raw`$\left(\frac12\right)^{-3}$`, [String.raw`$\left(\frac12\right)^3$`, String.raw`$2^{-3}$`, String.raw`$2^{0}$`], String.raw`$8$, $\frac18$, $\frac18$, $1$.`),
  num(String.raw`Trouve $n$ si $2^n=64$.`, 6, String.raw`$2^6=64$.`),
  num(String.raw`Trouve $n$ si $10^n=0.001$.`, -3, String.raw`$0.001=\frac1{1000}=10^{-3}$.`),
  tf(String.raw`$\sqrt{-16}$ est un nombre réel.`, false, "Aucun nombre réel au carré n'est négatif."),
  num(String.raw`Évalue $\sqrt[3]{-64}$.`, -4, String.raw`$(-4)^3=-64$.`),
  ms(String.raw`Quelles valeurs sont négatives? Sélectionne-les toutes.`, [String.raw`$(-3)^3$`, String.raw`$(-3)^{-2}$`, String.raw`$-3^{2}$`, String.raw`$(-3)^0$`, String.raw`$-3^{-1}$`], [0, 2, 4], String.raw`$-27$, $\frac19$, $-9$, $1$, $-\frac13$.`),
  num(String.raw`Une population de $500$ double chaque année. Combien y en a-t-il après $3$ ans?`, 4000, String.raw`$500\times2^3=4000$.`),
  num(String.raw`Un cube a un volume de $125$ cm$^3$. Quelle est la longueur de chaque arête, en cm?`, 5, String.raw`$\sqrt[3]{125}=5$.`),
  fill(String.raw`Évalue $3^{-1}+3^{-2}$ : ___`, ["4/9"], String.raw`$\frac13+\frac19=\frac49$.`),
  mc(String.raw`Évalue $2+\sqrt{49}\times3$.`, "$23$", ["$27$", "$13$", "$63$"], String.raw`La racine d'abord : $2+7\times3=23$.`),
  num(String.raw`Le graphique montre une quantité qui diminue de moitié chaque heure. Que vaut-elle après $4$ heures?`, 5, String.raw`$80\times\left(\frac12\right)^4=5$.`, graph({ series: [{ pts: [[0, 80], [1, 40], [2, 20], [3, 10]] }], xmin: 0, xmax: 5, ymin: 0, ymax: 90, xstep: 1, ystep: 10, xlabel: "heures", ylabel: "quantité" })),
  tf(String.raw`$\left(-\frac12\right)^{4}=\frac{1}{16}$`, true, "Exposant pair : positif."),
  num(String.raw`Évalue $(0.5)^{-2}$.`, 4, String.raw`$0.5=\frac12$; $\left(\frac12\right)^{-2}=2^2=4$.`),
  mc(String.raw`Quel est l'ensemble des solutions de $x^2=0.49$?`, String.raw`$x=\pm0.7$`, [String.raw`$x=0.7$ seulement`, String.raw`$x=\pm0.07$`, String.raw`$x=\pm7$`], String.raw`$0.7^2=(-0.7)^2=0.49$.`),
];
