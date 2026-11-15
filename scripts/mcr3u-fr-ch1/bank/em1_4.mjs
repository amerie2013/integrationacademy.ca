// 1.4 Domaine et image — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const E = [
  mc(String.raw`Quel est le domaine de $f(x)=\sqrt{x-3}$?`, String.raw`$x\ge3$`, [String.raw`$x\ge-3$`, String.raw`$x>3$`, String.raw`$x\in\mathbb R$`], "x − 3 ≥ 0."),
  num(String.raw`Quelle valeur de x est exclue du domaine de $f(x)=\frac{1}{x+5}$?`, -5, "x + 5 = 0."),
  mc(String.raw`Quelle est l'image de $y=x^2+2$?`, String.raw`$y\ge2$`, [String.raw`$y\le2$`, String.raw`$y\ge0$`, String.raw`$y\in\mathbb R$`], "x² ≥ 0, donc x² + 2 ≥ 2."),
  mc(String.raw`Quelle est l'image de $y=-x^2$?`, String.raw`$y\le0$`, [String.raw`$y\ge0$`, String.raw`$y\in\mathbb R$`, String.raw`$y<0$`], "Ouverte vers le bas à partir de (0, 0)."),
  tf(String.raw`Le domaine de $f(x)=3x-7$ est l'ensemble des nombres réels.`, true, "Aucune racine ni aucun dénominateur."),
  num(String.raw`Quelle est la plus petite valeur de l'image de $y=(x-4)^2+1$?`, 1, "Sommet (4, 1), ouverte vers le haut."),
  mc("Quelle est l'image de la fonction représentée?", String.raw`$y\le3$`, [String.raw`$y\ge3$`, String.raw`$y\le-2$`, String.raw`$y\in\mathbb R$`], "Le sommet (−2, 3) est le point le plus haut.", graph((x) => -0.5 * (x + 2) ** 2 + 3, V6, [P(-2, 3)])),
  mc("Quel est le domaine de la fonction représentée?", String.raw`$x\ge1$`, [String.raw`$x\ge-2$`, String.raw`$x\le1$`, String.raw`$x\in\mathbb R$`], "Elle commence en (1, −2) et va vers la droite.", graph((x) => Math.sqrt(x - 1) - 2, V6, [P(1, -2)], { a: 1 })),
  num(String.raw`Combien d'éléments le domaine de $\{(2,5),(3,5),(7,1)\}$ contient-il?`, 3, "2, 3, 7."),
  tf(String.raw`L'image de $\frac1x$ contient 0.`, false, "1/x ne vaut jamais 0."),
  mc(String.raw`Quel est le domaine de $f(x)=\frac{2}{x-8}$?`, String.raw`$x\ne8$`, [String.raw`$x\ne-8$`, String.raw`$x\ne2$`, String.raw`$x>8$`], "x − 8 ≠ 0."),
  num(String.raw`Quelle est la plus grande valeur de l'image de $y=-(x+1)^2+6$?`, 6, "Sommet (−1, 6), ouverte vers le bas."),
  mc(String.raw`Quel est le domaine de $y=|x|+4$?`, String.raw`$x\in\mathbb R$`, [String.raw`$x\ge4$`, String.raw`$x\ge0$`, String.raw`$x\ne-4$`], "Tout x a une valeur absolue."),
  mc(String.raw`Quelle est l'image de $y=|x|+4$?`, String.raw`$y\ge4$`, [String.raw`$y\ge0$`, String.raw`$y\in\mathbb R$`, String.raw`$y\le4$`], "|x| ≥ 0."),
  tf(String.raw`Le domaine de $y=\sqrt x-9$ est $x\ge9$.`, false, "Le 9 est à l'extérieur de la racine : le domaine est x ≥ 0."),
  num(String.raw`Le domaine de $f(x)=\sqrt{x+11}$ est $x\ge a$. Trouve $a$.`, -11, "x + 11 ≥ 0."),
  mc("Sur un graphique, un point plein à une extrémité signifie que…", "ce point est inclus", ["ce point est exclu", "le graphique continue indéfiniment", "c'est une asymptote"], "Plein : ≤ ou ≥."),
  mc("Une fonction compte les billets vendus. La meilleure description de son domaine est…", "les nombres entiers", ["tous les nombres réels", "les nombres négatifs", "les nombres compris entre 0 et 1"], "On ne peut pas vendre 2.5 billets."),
  num(String.raw`La hauteur d'une pierre est $h(t)=-5t^2+20t$. À quel moment le domaine se termine-t-il (atterrissage)?`, 4, "−5t(t − 4) = 0."),
  mc("Quel est le domaine du segment représenté?", String.raw`$-1\le x\le3$`, [String.raw`$2\le x\le4$`, String.raw`$-1\le x\le4$`, String.raw`$x\in\mathbb R$`], "Ombre sur l'axe des x de −1 à 3.", planeDoc({ view: V6, segs: [{ pts: [[-1, 2], [3, 4]] }], points: [P(-1, 2), P(3, 4)] })),
];

export const M = [
  mc(String.raw`Quel est le domaine de $f(x)=\sqrt{12-3x}$?`, String.raw`$x\le4$`, [String.raw`$x\ge4$`, String.raw`$x\le-4$`, String.raw`$x\ge-4$`], "−3x ≥ −12 → x ≤ 4."),
  mc(String.raw`Domaine et image de $y=\frac5{x-2}+1$?`, String.raw`$x\ne2$; $y\ne1$`, [String.raw`$x\ne-2$; $y\ne1$`, String.raw`$x\ne2$; $y\ne5$`, String.raw`$x\ne1$; $y\ne2$`], "Asymptotes x = 2 et y = 1."),
  num(String.raw`Quelle est la valeur maximale de $y=-2(x+3)^2+7$?`, 7, "Sommet (−3, 7)."),
  mc(String.raw`Quel est le domaine de $f(x)=\sqrt{2x+9}$?`, String.raw`$x\ge-4.5$`, [String.raw`$x\ge4.5$`, String.raw`$x\ge-9$`, String.raw`$x\le-4.5$`], "2x ≥ −9."),
  num(String.raw`Quelle valeur de x est exclue du domaine de $\frac{4}{3x-12}$?`, 4, "3x = 12."),
  mc("Quelle est l'image de cette fonction inverse?", String.raw`$y\ne2$`, [String.raw`$y\ne-1$`, String.raw`$y>2$`, String.raw`$y\in\mathbb R$`], "Asymptote horizontale y = 2.", planeDoc({ view: V6, curves: [{ f: (x) => 1 / (x + 1) + 2, color: "red" }], vlines: [{ x: -1, color: "gray", dash: true }], lines: [{ m: 0, b: 2, color: "gray", dash: true }] })),
  ms("Quelles fonctions ont pour domaine l'ensemble des nombres réels? Choisis toutes les bonnes réponses.", [String.raw`$x^2-5$`, String.raw`$\sqrt{x^2+1}$`, String.raw`$\frac{1}{x^2+4}$`, String.raw`$\sqrt x+1$`, String.raw`$\frac1{x-1}$`], [0, 1, 2], "x² + 1 > 0 et x² + 4 > 0 en tout temps."),
  num(String.raw`Quelle est la plus grande valeur de $\frac{1}{x^2+4}$?`, 0.25, "Elle est maximale lorsque x = 0.", null, 0.001),
  mc(String.raw`Quelle est l'image de $y=\sqrt{x-2}+5$?`, String.raw`$y\ge5$`, [String.raw`$y\ge2$`, String.raw`$y\ge0$`, String.raw`$y\le5$`], "La racine vaut au moins 0."),
  num(String.raw`Une roche tombe d'une hauteur de 80 m : $h(t)=80-5t^2$. Quand touche-t-elle le sol?`, 4, "5t² = 80."),
  num(String.raw`Un rectangle de périmètre 30 a une aire $A(x)=x(15-x)$. Quelle est la plus grande aire?`, 56.25, "Sommet en x = 7.5.", null, 0.001),
  mc(String.raw`Un rectangle de périmètre 30 dont un côté mesure $x$ a une aire $A(x)=x(15-x)$. Quel est le domaine?`, String.raw`$0<x<15$`, [String.raw`$0\le x\le30$`, String.raw`$x\in\mathbb R$`, String.raw`$x>0$`], "Les deux côtés doivent être positifs."),
  tf(String.raw`Sur $-2\le x\le3$, l'image de $y=x^2$ est $0\le y\le9$.`, true, "Minimum 0 en x = 0; maximum 9 en x = 3."),
  num(String.raw`Sur $0\le x\le5$, quelle est la plus grande valeur de $y=2x+1$?`, 11, "Croissante, donc en x = 5."),
  mc("Donne l'image du segment représenté (point plein en (−2, −3), point vide en (4, 1)).", String.raw`$-3\le y<1$`, [String.raw`$-3<y\le1$`, String.raw`$-2\le y<4$`, String.raw`$-3\le y\le1$`], "L'extrémité vide n'est pas incluse.", planeDoc({ view: V6, segs: [{ pts: [[-2, -3], [4, 1]] }], points: [P(-2, -3), { x: 4, y: 1, label: "(4, 1) vide", color: "red" }] })),
  num(String.raw`Combien d'entiers appartiennent au domaine de $f(x)=\sqrt{5-x}+\sqrt x$?`, 6, "0 ≤ x ≤ 5."),
  mc(String.raw`Quelle est l'image de $y=|x-3|-2$?`, String.raw`$y\ge-2$`, [String.raw`$y\ge3$`, String.raw`$y\ge2$`, String.raw`$y\in\mathbb R$`], "Sommet (3, −2)."),
  num(String.raw`Combien de valeurs de x sont exclues du domaine de $\frac{1}{x^2-x-6}$?`, 2, "(x − 3)(x + 2) = 0."),
  mc(String.raw`Quel est le domaine de $f(x)=\frac{\sqrt x}{x-9}$?`, String.raw`$x\ge0$, $x\ne9$`, [String.raw`$x\ne9$`, String.raw`$x\ge9$`, String.raw`$x>0$`], "La racine exige x ≥ 0; le dénominateur exige x ≠ 9."),
  tf("Le domaine de « durée d'un appel téléphonique en minutes » doit être un ensemble discret.", false, "Le temps est continu : 3.5 min est possible."),
];
