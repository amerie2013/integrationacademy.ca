// 1.2 Additionner et soustraire des entiers — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, barChart, thermometer } from "./svg.mjs";
import { TITLE } from "../l1_2.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Dimanche, la température était de $-4\,^\circ$C. Le diagramme montre la variation de chaque jour. Quelle était la température vendredi (en $^\circ$C)?`, -11,
    String.raw`$-4+(-6)+9+(-11)+3+(-2)=-11$.`, barChart([["Lun", -6], ["Mar", 9], ["Mer", -11], ["Jeu", 3], ["Ven", -2]], { ylabel: "variation (°C)", min: -12, max: 10, step: 2 })),
  mc(String.raw`Quelle expression a la plus grande valeur?`, String.raw`$|-8-15|$`, [String.raw`$-|-8|-(-15)$`, String.raw`$-8-|-15|$`, String.raw`$|8-15|-(-1)$`], String.raw`Valeurs : $23$, $7$, $-23$, $8$.`),
  fill(String.raw`Complète : $-13-\_\_\_=9$.`, ["-22", "−22"], String.raw`Soustraire le nombre manquant doit faire monter $-13$ jusqu'à $9$; il est donc négatif : $-13-(-22)=9$.`),
  num(String.raw`Si $a=-7$ et $b=12$, évalue $|a-b|-|b-a|+(a-b)$.`, -19, String.raw`$|-19|-|19|+(-19)=19-19-19=-19$.`),
  ms(String.raw`Quelles expressions sont égales à $-6$? Sélectionne-les toutes.`, [String.raw`$-10+4$`, String.raw`$4-10$`, String.raw`$-10-(-4)$`, String.raw`$10-(-4)$`, String.raw`$-4-(-10)$`, String.raw`$-4-2$`], [0, 1, 2, 5], String.raw`$-6,-6,-6,14,6,-6$.`),
  tf(String.raw`Si $a$ et $b$ sont tous deux négatifs, alors $a-b$ est toujours négatif.`, false, String.raw`$a=-2$, $b=-5$ : $-2-(-5)=3$, qui est positif.`),
  tf(String.raw`$|a-b|=|a|-|b|$ pour tous les entiers $a$ et $b$.`, false, String.raw`$a=-3$, $b=4$ : $|-7|=7$, mais $3-4=-1$.`),
  num(String.raw`Le thermomètre montre la température la plus basse et la plus haute d'une journée à Yellowknife. De combien de degrés la température a-t-elle monté?`, 41,
    String.raw`$14-(-27)=41$.`, thermometer({ lo: -30, hi: 20, step: 5, marks: [{ at: 14, label: "max 14°" }, { at: -27, label: "min −27°", color: "blue" }] })),
  num(String.raw`Un sous-marin à $-85$ m monte de $37$ m, puis plonge de $64$ m. Une plongeuse est à $-12$ m. Combien de mètres les séparent maintenant?`, 100, String.raw`Sous-marin : $-85+37-64=-112$. Distance $=-12-(-112)=100$ m.`),
  num(String.raw`Trouve la somme de tous les entiers de $-15$ à $12$ inclusivement.`, -42, String.raw`De $-12$ à $12$, tout s'annule deux par deux; il reste $-15-14-13=-42$.`),
  num(String.raw`Les entiers $-4,-3,\dots,3,4$ sont placés dans un carré magique $3\times3$ (chaque rangée, colonne et diagonale a la même somme). Quelle est cette somme?`, 0, String.raw`La somme des neuf nombres est $0$, partagée également entre $3$ rangées : $0\div3=0$.`),
  num(String.raw`Deux entiers ont une somme de $-3$ et une différence (le plus grand moins le plus petit) de $15$. Quel est le plus petit entier?`, -9, String.raw`Plus grand $+$ plus petit $=-3$ et plus grand $-$ plus petit $=15$, donc $2\times$plus grand $=12$ : plus grand $6$, plus petit $-9$.`),
  mc(String.raw`Quelle expression le diagramme de la droite numérique représente-t-il?`, String.raw`$5+(-9)$`, [String.raw`$5-(-9)$`, String.raw`$-5+9$`, String.raw`$9-5$`], String.raw`Pars de $0$, va jusqu'à $5$, puis déplace-toi de $9$ vers la gauche : $5+(-9)=-4$.`,
    numberLine({ min: -6, max: 7, arrows: [{ from: 0, to: 5, label: "1er déplacement", color: "blue", lane: 0 }, { from: 5, to: -4, label: "2e déplacement", color: "red", lane: 1 }], dots: [{ at: -4, label: "arrivée", color: "green" }] })),
  num(String.raw`Un compte bancaire commence à $-35$ dollars. Ensuite : dépôt de $120$, retrait de $48$, retrait de $90$, dépôt de $60$. Quel est le solde le plus bas après l'une de ces étapes, en dollars?`, -53, String.raw`Soldes : $85$, $37$, $-53$, $7$. Le plus bas est $-53$.`),
  ms(String.raw`Quels énoncés sont vrais pour tous les entiers $a$ et $b$? Sélectionne-les tous.`, [String.raw`$a+b=b+a$`, String.raw`$a-b=b-a$`, String.raw`$a-(-b)=a+b$`, String.raw`$-(a-b)=b-a$`, String.raw`$|a+b|\le|a|+|b|$`], [0, 2, 3, 4], String.raw`La soustraction n'est pas commutative ($5-2\neq2-5$); les quatre autres sont toujours vrais.`),
  num(String.raw`La normale d'un parcours de golf est $72$. En quatre rondes, une golfeuse obtient $-3$, $+2$, $-5$ et $+1$ par rapport à la normale. Combien de coups a-t-elle joués au total?`, 283, String.raw`Total par rapport à la normale : $-5$. Coups $=4\times72-5=283$.`),
  mc(String.raw`Quelle liste est dans l'ordre croissant? \quad $P=-|-9|$, \ $Q=-(-7)$, \ $R=|-4|-|-11|$, \ $S=-2-(-2)$`, "P, R, S, Q", ["R, P, S, Q", "P, S, R, Q", "Q, S, R, P"], String.raw`$P=-9$, $Q=7$, $R=-7$, $S=0$.`),
  num(String.raw`Une grimpeuse à $150$ m au-dessus du niveau de la mer descend de $230$ m dans un canyon, puis remonte de $85$ m. À combien de mètres sous son point de départ se trouve-t-elle maintenant?`, 145, String.raw`Position : $150-230+85=5$ m. Sous le départ : $150-5=145$ m.`),
  tf(String.raw`Soustraire un entier négatif de n'importe quel nombre donne toujours un résultat plus grand que ce nombre.`, true, String.raw`$x-(-n)=x+n>x$ pour $n>0$.`),
  num(String.raw`À midi, il fait $7\,^\circ$C. La température baisse de $4$ degrés par heure jusqu'à 17 h, puis monte de $2$ degrés par heure jusqu'à 21 h. Quelle est la température à 21 h?`, -5, String.raw`De midi à 17 h : $7-5\times4=-13$. Puis $4$ heures à $+2$ : $-13+8=-5$.`),
];
