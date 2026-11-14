// 1.3 Multiplier et diviser des entiers — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, graph } from "./svg.mjs";

export const E = [
  num(String.raw`Évalue $(-6)(8)$.`, -48, "Signes contraires : négatif."),
  num(String.raw`Évalue $(-9)(-3)$.`, 27, "Même signe : positif."),
  num(String.raw`Évalue $-56\div7$.`, -8, "Signes contraires : négatif."),
  num(String.raw`Évalue $-45\div(-9)$.`, 5, "Même signe : positif."),
  tf(String.raw`Un nombre négatif multiplié par un nombre négatif donne un nombre positif.`, true, "Deux facteurs de même signe donnent un produit positif."),
  mc(String.raw`Quel est le signe de $(-7)(4)(-2)$?`, "positif", ["négatif", "zéro", "impossible à dire"], "Deux facteurs négatifs (nombre pair) donnent un produit positif."),
  num(String.raw`Évalue $0\div(-6)$.`, 0, String.raw`$0\times(-6)=0$.`),
  mc(String.raw`$9\div0$ est`, "non défini", ["$0$", "$9$", "$-9$"], "Aucun nombre multiplié par 0 ne donne 9."),
  num(String.raw`Évalue $5\times(-3)+4$.`, -11, String.raw`Multiplie d'abord : $-15+4=-11$.`),
  fill(String.raw`$(-4)\times\_\_\_=36$`, ["-9", "−9"], String.raw`$(-4)(-9)=36$.`),
  num(String.raw`Le diagramme montre des sauts égaux sur une droite numérique. Quelle multiplication représente-t-il? Donne le produit.`, -10, String.raw`Cinq sauts de $-2$ : $5\times(-2)=-10$.`, numberLine({ min: -11, max: 1, arrows: [0, 1, 2, 3, 4].map((i) => ({ from: -2 * i, to: -2 * i - 2, color: "red", lane: i % 2 })) })),
  num(String.raw`Évalue $(-1)(-1)(-1)$.`, -1, "Trois facteurs négatifs : négatif."),
  num(String.raw`Évalue $(-2)^2$.`, 4, String.raw`$(-2)(-2)=4$.`),
  num(String.raw`Évalue $-2^2$.`, -4, String.raw`Seul $2$ est élevé au carré : $-(2^2)=-4$.`),
  ms(String.raw`Quels produits sont négatifs? Sélectionne-les tous.`, [String.raw`$(-3)(5)$`, String.raw`$(-3)(-5)$`, String.raw`$(3)(-5)$`, String.raw`$(-1)(-1)(-1)$`], [0, 2, 3], "Un nombre impair de facteurs négatifs donne un produit négatif."),
  num(String.raw`La température d'un congélateur baisse de $2$ degrés chaque heure pendant $6$ heures. Quelle est la variation totale?`, -12, String.raw`$6\times(-2)=-12$.`),
  tf(String.raw`$(-12)\div(-3)=-4$`, false, String.raw`Même signe : $+4$.`),
  num(String.raw`Évalue $-30\div5\times2$.`, -12, String.raw`De gauche à droite : $-6\times2=-12$.`),
  mc(String.raw`Quelle expression est égale à $-24$?`, String.raw`$(-6)(4)$`, [String.raw`$(-6)(-4)$`, String.raw`$-6+(-4)$`, String.raw`$6\times4$`], String.raw`Signes contraires : $-24$.`),
  num(String.raw`Trouve la moyenne de $-4,\ -8,\ 6$.`, -2, String.raw`$\frac{-6}{3}=-2$.`),
];

export const M = [
  num(String.raw`Évalue $-3(4-9)+2$.`, 17, String.raw`$-3(-5)+2=15+2=17$.`),
  num(String.raw`Évalue $(-18)\div(-3)-4\times(-2)$.`, 14, String.raw`$6-(-8)=14$.`),
  num(String.raw`Évalue $2x^2-5x$ lorsque $x=-3$.`, 33, String.raw`$2(9)-5(-3)=18+15=33$.`),
  num(String.raw`Évalue $\dfrac{-48}{(-2)(-4)}$.`, -6, String.raw`$(-2)(-4)=8$; $-48\div8=-6$.`),
  mc(String.raw`Évalue $(-2)^3\times(-1)^4$.`, "$-8$", ["$8$", "$-6$", "$6$"], String.raw`$-8\times1=-8$.`),
  fill(String.raw`Complète : $\_\_\_\div(-6)=-7$.`, ["42"], String.raw`$42\div(-6)=-7$.`),
  num(String.raw`Évalue $-4^2+(-4)^2$.`, 0, String.raw`$-16+16=0$.`),
  tf(String.raw`$(-3)^4=-3^4$`, false, String.raw`$81$ et $-81$.`),
  ms(String.raw`Quelles expressions sont égales à $-20$? Sélectionne-les toutes.`, [String.raw`$(-4)(5)$`, String.raw`$-100\div5$`, String.raw`$(-2)(-10)$`, String.raw`$-2\times10$`, String.raw`$40\div(-2)$`], [0, 1, 3, 4], String.raw`$(-2)(-10)=20$.`),
  num(String.raw`Un sous-marin plonge à $15$ m par minute pendant $4$ minutes, à partir de $-20$ m. Où se trouve-t-il maintenant?`, -80, String.raw`$-20+4(-15)=-80$ m.`),
  num(String.raw`Le graphique montre une température qui baisse à un rythme constant. Quelle est la variation par heure?`, -4, String.raw`De $8$ à $-8$ en $4$ h : $\frac{-16}{4}=-4$.`, graph({ series: [{ pts: [[0, 8], [1, 4], [2, 0], [3, -4], [4, -8]] }], xmin: 0, xmax: 5, ymin: -10, ymax: 10, xstep: 1, ystep: 2, xlabel: "heures", ylabel: "°C" })),
  num(String.raw`Évalue $[(-6)+2]^2\div(-8)$.`, -2, String.raw`$(-4)^2=16$; $16\div(-8)=-2$.`),
  mc(String.raw`Laquelle a la plus grande valeur?`, String.raw`$(-2)^4$`, [String.raw`$(-2)^3$`, String.raw`$-2^4$`, String.raw`$(-4)(2)$`], String.raw`$16$, $-8$, $-16$, $-8$.`),
  num(String.raw`Trouve la moyenne des variations de température $-9,\ 4,\ -7,\ -3,\ 0$.`, -3, String.raw`Somme $-15$; $-15\div5=-3$.`),
  tf(String.raw`Le produit de cinq nombres négatifs est négatif.`, true, "Un nombre impair de facteurs négatifs donne un produit négatif."),
  num(String.raw`Évalue $ab-c$ lorsque $a=-5$, $b=3$, $c=-4$.`, -11, String.raw`$-15-(-4)=-11$.`),
  num(String.raw`Une action perd $3$ dollars chaque jour pendant $5$ jours. Ana possède $20$ actions. Quelle est la variation totale de la valeur de ses actions, en dollars?`, -300, String.raw`$20\times5\times(-3)=-300$.`),
  fill(String.raw`Complète : $(-3)(\_\_\_)(-2)=-30$.`, ["-5", "−5"], String.raw`$(-3)(-2)=6$; $6\times(-5)=-30$.`),
  mc(String.raw`Évalue $12-3\times(-4)\div2$.`, "$18$", ["$-6$", "$6$", "$30$"], String.raw`$3\times(-4)=-12$, $\div2=-6$; $12-(-6)=18$.`),
  num(String.raw`Évalue $(-1)^{15}\times(-6)^2$.`, -36, String.raw`$-1\times36=-36$.`),
];
