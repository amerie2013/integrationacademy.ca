// 1.6 Puissances : exposants nuls et négatifs — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph } from "./svg.mjs";
import { TITLE } from "../l1_6.mjs";

export const TOPIC = TITLE;
export const Q = [
  mc(String.raw`Place dans l'ordre croissant : $2^{-3}$, $(-2)^2$, $-2^2$, $\left(\frac12\right)^{-1}$.`, String.raw`$-2^2,\ 2^{-3},\ \left(\frac12\right)^{-1},\ (-2)^2$`, [String.raw`$2^{-3},\ -2^2,\ \left(\frac12\right)^{-1},\ (-2)^2$`, String.raw`$-2^2,\ \left(\frac12\right)^{-1},\ 2^{-3},\ (-2)^2$`, String.raw`$2^{-3},\ \left(\frac12\right)^{-1},\ -2^2,\ (-2)^2$`],
    String.raw`Valeurs : $\frac18$, $4$, $-4$, $2$.`),
  fill(String.raw`Évalue $\left(\frac23\right)^{-3}$ sous forme de fraction : ___`, ["27/8"], String.raw`Renverse et élève au cube : $\left(\frac32\right)^3=\frac{27}{8}$.`),
  num(String.raw`Évalue $5^0-5^{-1}\times10+(-1)^5$.`, -2, String.raw`$1-\frac15\times10-1=1-2-1=-2$.`),
  ms(String.raw`Quelles expressions sont égales à $\frac{1}{16}$? Sélectionne-les toutes.`, [String.raw`$2^{-4}$`, String.raw`$4^{-2}$`, String.raw`$(-4)^{-2}$`, String.raw`$-4^{-2}$`, String.raw`$\left(\frac12\right)^4$`, String.raw`$16^{-1}$`], [0, 1, 2, 4, 5], String.raw`$-4^{-2}=-\frac1{16}$; toutes les autres valent $\frac1{16}$.`),
  num(String.raw`Le graphique montre $y=a\times2^{n}$. Que vaut $y$ lorsque $n=-3$? Donne un décimal.`, 0.375, String.raw`D'après le graphique, $a=3$ (la valeur en $n=0$). $y=3\times2^{-3}=\frac38=0.375$.`,
    graph({ series: [{ pts: [[-1, 1.5], [0, 3], [1, 6], [2, 12]] }], xmin: -4, xmax: 3, ymin: 0, ymax: 14, xstep: 1, ystep: 2, xlabel: "n", ylabel: "y" }), 0.001),
  num(String.raw`Trouve l'entier $n$ tel que $3^n=\frac{1}{243}$.`, -5, String.raw`$243=3^5$, donc $\frac1{243}=3^{-5}$.`),
  tf(String.raw`$\left(a^{-1}+b^{-1}\right)^{-1}=a+b$ pour tous $a$ et $b$ non nuls tels que $a+b\neq0$.`, false, String.raw`$a=b=2$ : $\left(\frac12+\frac12\right)^{-1}=1$, mais $a+b=4$.`),
  tf(String.raw`Pour tout nombre $a$ non nul, $a^{-1}\times a=1$.`, true, String.raw`$a^{-1}=\frac1a$ et $\frac1a\times a=1$.`),
  mc(String.raw`Évalue $-3^2+(-3)^2-3^0$.`, "$-1$", ["$17$", "$1$", "$-19$"], String.raw`$-9+9-1=-1$.`),
  num(String.raw`Une population de bactéries triple chaque heure. Il y a $810$ bactéries maintenant. Combien y en avait-il il y a $4$ heures?`, 10, String.raw`$810\times3^{-4}=\frac{810}{81}=10$.`),
  fill(String.raw`Évalue $\left(-\frac23\right)^{-3}$ sous forme de fraction : ___`, ["-27/8", "−27/8"], String.raw`Renverse : $\left(-\frac32\right)^3=-\frac{27}{8}$.`),
  num(String.raw`Un cube a un volume de $0.064$ m$^3$. Quelle est la longueur de son arête, en mètres?`, 0.4, String.raw`$0.4^3=0.064$.`, undefined, 0.0001),
  ms(String.raw`Quelles valeurs sont positives? Sélectionne-les toutes.`, [String.raw`$(-3)^{-3}$`, String.raw`$(-2)^{-4}$`, String.raw`$-(-2)^3$`, String.raw`$(-1)^{100}\times(-1)^0$`, String.raw`$-2^{-2}$`], [1, 2, 3], String.raw`$-\frac1{27}$, $\frac1{16}$, $8$, $1$, $-\frac14$.`),
  num(String.raw`Une dose de $200$ mg d'un médicament diminue de moitié toutes les $6$ heures (voir le graphique). Combien de mg reste-t-il après $24$ heures?`, 12.5, String.raw`$24$ h correspondent à $4$ demi-vies : $200\times\left(\frac12\right)^4=12.5$ mg.`,
    graph({ series: [{ pts: [[0, 200], [6, 100], [12, 50], [18, 25]] }], xmin: 0, xmax: 24, ymin: 0, ymax: 220, xstep: 6, ystep: 40, xlabel: "heures", ylabel: "mg" }), 0.001),
  fill(String.raw`Évalue $\left(2^{-1}+5^{-1}\right)^{-1}$ sous forme de fraction : ___`, ["10/7"], String.raw`$\frac12+\frac15=\frac{7}{10}$; renverse pour obtenir $\frac{10}{7}$.`),
  fill(String.raw`Évalue $\left(2^{-1}+2^{-2}\right)^{-1}$ sous forme de fraction : ___`, ["4/3"], String.raw`$\frac12+\frac14=\frac34$; $\left(\frac34\right)^{-1}=\frac43$.`),
  num(String.raw`Trouve l'entier $n$ tel que $(-2)^n=-32$.`, 5, String.raw`$(-2)^5=-32$ (un exposant impair conserve le signe négatif).`),
  mc(String.raw`Un carré a des côtés de $2^{-3}$ m. Quelle est son aire?`, String.raw`$\frac{1}{64}$ m$^2$`, [String.raw`$\frac1{16}$ m$^2$`, String.raw`$\frac18$ m$^2$`, "$-64$ m$^2$"], String.raw`$\left(2^{-3}\right)^2=2^{-6}=\frac1{64}$.`),
  tf(String.raw`$\left(\frac12\right)^{-3}>3^2$`, false, String.raw`$\left(\frac12\right)^{-3}=2^3=8$, et $8<9$.`),
  num(String.raw`Évalue $\left(2^{-1}\right)^{-2}\times\left(2^{-2}\right)^{-1}\div2^0$.`, 16, String.raw`$\left(\frac12\right)^{-2}=4$, $\left(\frac14\right)^{-1}=4$ et $2^0=1$. Donc $4\times4\div1=16$.`),
];
