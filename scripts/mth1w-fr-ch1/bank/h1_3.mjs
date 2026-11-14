// 1.3 Multiplier et diviser des entiers — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, barChart, graph } from "./svg.mjs";
import { TITLE } from "../l1_3.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Évalue $(-2)^3\times(-3)^2\div(-6)$.`, 12, String.raw`$-8\times9=-72$; $-72\div(-6)=12$.`),
  mc(String.raw`Évalue $-3x^2-2x+5$ lorsque $x=-2$.`, "$-3$", ["$45$", "$-11$", "$21$"], String.raw`$-3(-2)^2-2(-2)+5=-12+4+5=-3$. ($45$ vient de l'élévation au carré de $-3x$; $-11$ d'une erreur de signe sur $-2x$.)`),
  ms(String.raw`Quels produits sont positifs? Sélectionne-les tous.`, [String.raw`$(-1)^{17}(-2)$`, String.raw`$(-3)(4)(-5)(-1)$`, String.raw`$(-2)^4(-1)^3$`, String.raw`$-(-4)(-6)$`, String.raw`$(-1)(-2)(-3)(-4)$`], [0, 4], String.raw`Valeurs : $2$, $-60$, $-16$, $-24$, $24$.`),
  num(String.raw`Le graphique montre une température qui baisse à un taux constant. Si cela continue, combien d'heures après le début la température sera-t-elle de $-18\,^\circ$C?`, 8,
    String.raw`Elle baisse de $3$ degrés par heure à partir de $6$ : $6+h(-3)=-18$ donne $-3h=-24$, $h=8$.`,
    graph({ series: [{ pts: [[0, 6], [1, 3], [2, 0], [3, -3], [4, -6]] }], xmin: 0, xmax: 9, ymin: -20, ymax: 8, xstep: 1, ystep: 4, xlabel: "heures", ylabel: "°C" })),
  num(String.raw`Deux entiers ont un produit de $-72$ et une somme de $1$. Quel est le plus petit entier?`, -8, String.raw`$9\times(-8)=-72$ et $9+(-8)=1$.`),
  num(String.raw`La moyenne de cinq températures est de $-6\,^\circ$C. Quatre d'entre elles sont $-14$, $3$, $-9$ et $-2$. Quelle est la cinquième?`, -8, String.raw`Total : $5(-6)=-30$. La somme des quatre est $-22$. Cinquième : $-30-(-22)=-8$.`),
  tf(String.raw`Si $ab>0$ et $a+b<0$, alors $a$ et $b$ sont tous deux négatifs.`, true, String.raw`$ab>0$ signifie même signe; une somme négative exclut qu'ils soient tous deux positifs.`),
  tf(String.raw`$(-a)^3=-a^3$ pour tout entier $a$.`, true, String.raw`$(-a)^3=(-1)^3a^3=-a^3$.`),
  mc(String.raw`Où faut-il placer les parenthèses dans $-4+8\div2\times-3$ pour obtenir la valeur $-6$?`, String.raw`$(-4+8)\div2\times(-3)$`, [String.raw`$(-4+8\div2)\times(-3)$`, String.raw`$-4+(8\div2)\times(-3)$`, String.raw`$-4+8\div(2\times(-3))+0$`], String.raw`$(-4+8)\div2\times(-3)=4\div2\times(-3)=2\times(-3)=-6$. Les autres donnent $0$, $-16$ et $-5\tfrac13$.`),
  num(String.raw`Évalue $\left[(-3)^2-4(-2)(5)\right]\div(-7)$.`, -7, String.raw`$9+40=49$; $49\div(-7)=-7$.`),
  num(String.raw`Trouve le produit de tous les entiers de $-5$ à $-1$.`, -120, String.raw`Cinq facteurs négatifs : négatif; $5!=120$.`),
  num(String.raw`Évalue $\left[(-2)^5-(-3)^3\right]\times(-4)\div(-2)^2$.`, 5, String.raw`$-32+27=-5$; $-5\times(-4)=20$; $20\div4=5$.`),
  num(String.raw`Le prix d'une action a baissé de $3$ dollars par jour pendant $6$ jours, puis a monté de $4$ dollars par jour pendant $2$ jours (voir le diagramme), pour finir à $41$ dollars. Quel était le prix de départ, en dollars?`, 51,
    String.raw`Variation totale $=6(-3)+2(4)=-10$. Départ $=41-(-10)=51$.`, barChart([["1", -3], ["2", -3], ["3", -3], ["4", -3], ["5", -3], ["6", -3], ["7", 4], ["8", 4]], { ylabel: "variation quotidienne (dollars)", min: -4, max: 5, step: 1 })),
  ms(String.raw`Quelles expressions sont égales à $-36$? Sélectionne-les toutes.`, [String.raw`$(-6)^2$`, String.raw`$-6^2$`, String.raw`$(-4)(9)$`, String.raw`$-(-4)(-9)$`, String.raw`$(-2)^2(-9)$`, String.raw`$72\div(-2)$`], [1, 2, 3, 4, 5], String.raw`Seul $(-6)^2=36$ est positif; les autres valent $-36$.`),
  num(String.raw`Si $a=-4$, $b=3$ et $c=-2$, évalue $(a-b)c-a^2\div(b+c)$.`, -2, String.raw`$(-7)(-2)-16\div1=14-16=-2$.`),
  tf(String.raw`Diviser un entier négatif par un entier négatif donne toujours un entier positif.`, false, String.raw`Le quotient est positif, mais pas nécessairement entier : $-3\div(-2)=1.5$.`),
  mc(String.raw`Une plongeuse descend à $2$ m/s pendant $15$ s, puis remonte à $1$ m/s pendant $8$ s. Quelle est sa position par rapport à la surface?`, "$-22$ m", ["$-38$ m", "$22$ m", "$-23$ m"], String.raw`$15(-2)+8(1)=-30+8=-22$.`),
  num(String.raw`Un concours accorde $+5$ pour une bonne réponse et $-3$ pour une mauvaise. Kai a répondu aux $25$ questions et a obtenu $61$. Combien de bonnes réponses Kai a-t-il eues?`, 17, String.raw`Le pointage parfait est $125$, soit $64$ de plus que celui de Kai. Chaque mauvaise réponse coûte $8$; il y a donc $8$ mauvaises réponses et $17$ bonnes.`),
  num(String.raw`Évalue $(-1)^{2026}+(-1)^{2027}+(-1)^{0}$.`, 1, String.raw`$1+(-1)+1=1$.`),
  num(String.raw`Le diagramme représente $6+4\times(-3)$ par des sauts sur une droite numérique. Où arrive-t-on?`, -6, String.raw`Quatre sauts de $-3$ à partir de $6$ : $6-12=-6$.`,
    numberLine({ min: -8, max: 8, arrows: [{ from: 6, to: 3, lane: 0, color: "red" }, { from: 3, to: 0, lane: 1, color: "red" }, { from: 0, to: -3, lane: 0, color: "red" }, { from: -3, to: -6, lane: 1, color: "red" }], dots: [{ at: 6, label: "départ", color: "gray" }] })),
];
