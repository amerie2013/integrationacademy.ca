// 1.2 Additionner et soustraire des entiers — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, chips, thermometer, barChart } from "./svg.mjs";

export const E = [
  num(String.raw`Évalue $-6+10$.`, 4, String.raw`Signes contraires : $10-6=4$, positif.`),
  num(String.raw`Évalue $-8+(-5)$.`, -13, "Même signe : additionne les grandeurs, garde le signe négatif."),
  num(String.raw`Évalue $3-11$.`, -8, String.raw`$3+(-11)=-8$.`),
  num(String.raw`Évalue $7-(-2)$.`, 9, String.raw`$7+2=9$.`),
  mc(String.raw`Quel est l'opposé de $-15$?`, "$15$", ["$-15$", String.raw`$\frac{1}{15}$`, "$0$"], "Deux opposés sont à la même distance de 0, de part et d'autre."),
  num(String.raw`Évalue $|-12|$.`, 12, "La valeur absolue est la distance par rapport à 0."),
  tf(String.raw`$-4>-9$`, true, String.raw`$-4$ est à droite de $-9$ sur la droite numérique.`),
  mc("Quelle est la température la plus froide?", String.raw`$-14\,^\circ$C`, [String.raw`$-9\,^\circ$C`, String.raw`$0\,^\circ$C`, String.raw`$-11\,^\circ$C`], "Le nombre le plus négatif est le plus bas."),
  num(String.raw`Utilise les jetons : quatre positifs et six négatifs. Quel entier représentent-ils?`, -2, "Quatre paires nulles s'annulent; il reste deux jetons négatifs.", chips(4, 6)),
  fill(String.raw`$-9+\_\_\_=0$`, ["9"], "Un nombre plus son opposé donne 0."),
  num(String.raw`La droite numérique montre un départ et un déplacement. Où arrive-t-on?`, -3, String.raw`Pars de $2$ et déplace-toi de $5$ vers la gauche : $2+(-5)=-3$.`, numberLine({ min: -6, max: 6, arrows: [{ from: 2, to: -3, label: "déplacement", color: "red" }], dots: [{ at: 2, label: "départ", color: "gray" }] })),
  num(String.raw`Évalue $-20-5$.`, -25, String.raw`$-20+(-5)=-25$.`),
  tf(String.raw`$-3+(-4)=7$`, false, String.raw`La somme de deux négatifs est négative : $-7$.`),
  ms(String.raw`Quelles expressions sont égales à $-2$? Sélectionne-les toutes.`, [String.raw`$3-5$`, String.raw`$-5+3$`, String.raw`$5-3$`, String.raw`$-1+(-1)$`], [0, 1, 3], String.raw`$5-3=2$.`),
  num(String.raw`Il fait $-7\,^\circ$C et la température monte de $12$ degrés. Quelle est la nouvelle température?`, 5, String.raw`$-7+12=5$.`),
  mc(String.raw`Quelle liste est dans l'ordre croissant?`, "$-8,\\ -3,\\ 0,\\ 2$", ["$-3,\\ -8,\\ 0,\\ 2$", "$0,\\ -3,\\ -8,\\ 2$", "$2,\\ 0,\\ -3,\\ -8$"], "Lis la droite numérique de gauche à droite."),
  num(String.raw`Évalue $0-14$.`, -14, String.raw`$0+(-14)=-14$.`),
  num(String.raw`Une plongeuse est à $-18$ m et remonte de $7$ m. Quelle est sa nouvelle profondeur?`, -11, String.raw`$-18+7=-11$ m.`),
  tf(String.raw`$|-6|=|6|$`, true, "Les deux sont à 6 unités de 0."),
  num(String.raw`Évalue $-4-(-4)$.`, 0, String.raw`$-4+4=0$.`),
];

export const M = [
  num(String.raw`Évalue $-12+7-(-9)$.`, 4, String.raw`$-12+7+9=4$.`),
  num(String.raw`Évalue $15-(-6)+(-25)$.`, -4, String.raw`$15+6-25=-4$.`),
  fill(String.raw`Complète : $\_\_\_-6=-15$.`, ["-9", "−9"], String.raw`$-9-6=-15$.`),
  num(String.raw`Trouve la distance entre $-17$ et $8$ sur une droite numérique.`, 25, String.raw`$8-(-17)=25$.`),
  num(String.raw`Le thermomètre montre les températures du matin et de l'après-midi. De combien de degrés la température a-t-elle monté?`, 17, String.raw`$6-(-11)=17$.`, thermometer({ lo: -15, hi: 10, step: 5, marks: [{ at: 6, label: "après-midi" }, { at: -11, label: "matin", color: "blue" }] })),
  mc(String.raw`Quelle expression a une valeur négative?`, String.raw`$-9-(-4)$`, [String.raw`$-4-(-9)$`, String.raw`$9+(-4)$`, String.raw`$-4+9$`], String.raw`$-9+4=-5$; les autres valent $5$.`),
  num(String.raw`Les pointages d'un joueur en quatre rondes sont $-3$, $+5$, $-8$ et $+2$. Quel est le total?`, -4, String.raw`$-3+5-8+2=-4$.`),
  tf(String.raw`$a-b$ et $b-a$ ont toujours la même valeur.`, false, String.raw`Ce sont des opposés : $7-2=5$, mais $2-7=-5$.`),
  ms(String.raw`Quelles expressions sont égales à $8$? Sélectionne-les toutes.`, [String.raw`$3-(-5)$`, String.raw`$-3+11$`, String.raw`$-5-(-13)$`, String.raw`$-8+0$`, String.raw`$13-(-5)$`], [0, 1, 2], String.raw`$-8+0=-8$ et $13+5=18$.`),
  num(String.raw`Le diagramme montre les variations quotidiennes du niveau d'eau d'un lac (cm). Quelle est la variation totale pour la semaine?`, -6, String.raw`$-4+2-3+1-2=-6$ cm.`, barChart([["Lun", -4], ["Mar", 2], ["Mer", -3], ["Jeu", 1], ["Ven", -2]], { ylabel: "variation (cm)", min: -5, max: 3, step: 1 })),
  num(String.raw`Un ascenseur part de l'étage $6$, descend de $9$ étages, puis monte de $4$. À quel étage se trouve-t-il? (Les étages souterrains sont négatifs.)`, 1, String.raw`$6-9+4=1$.`),
  fill(String.raw`Complète : $-7-\_\_\_=3$.`, ["-10", "−10"], String.raw`$-7-(-10)=-7+10=3$.`),
  num(String.raw`Un solde bancaire est de $-30$ dollars. Après un dépôt de $75$ dollars et un paiement de $52$ dollars, quel est le solde?`, -7, String.raw`$-30+75-52=-7$.`),
  mc("À l'aide des paires nulles, que montre le diagramme?", String.raw`$5+(-7)=-2$`, [String.raw`$5+(-7)=2$`, String.raw`$5-7=12$`, String.raw`$-5+7=2$`], String.raw`Cinq paires nulles s'annulent; il reste deux négatifs.`, chips(5, 7)),
  num(String.raw`Évalue $-2-3-4-5$.`, -14, "Additionne les quatre négatifs."),
  num(String.raw`Le mont Everest culmine à environ $8849$ m et la rive de la mer Morte est à environ $-430$ m. Trouve la différence d'altitude.`, 9279, String.raw`$8849-(-430)=9279$ m.`),
  tf(String.raw`Additionner un entier négatif donne toujours un résultat plus petit.`, true, String.raw`$x+(-n)=x-n<x$ pour $n>0$.`),
  num(String.raw`Quel nombre est $11$ de moins que $-4$?`, -15, String.raw`$-4-11=-15$.`),
  mc(String.raw`Si $x=-6$, que vaut $x-(-x)$?`, "$-12$", ["$0$", "$12$", "$-36$"], String.raw`$-6-(6)=-12$.`),
  num(String.raw`À minuit, la température était de $-13\,^\circ$C. À midi, elle était toujours sous zéro, à $-2\,^\circ$C. De combien de degrés a-t-elle monté?`, 11, String.raw`$-2-(-13)=11$.`),
];
