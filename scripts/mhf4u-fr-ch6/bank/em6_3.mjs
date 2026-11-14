// 6.3 Transformations des fonctions logarithmiques — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch6/bank/em6_3.mjs)
// NOTATION FRANÇAISE : y = a log_b(k(x − c)) + d (c horizontale, d verticale).
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const va = (x) => ({ x, color: "red", dash: true });
const G = (f, a, d, pts = [], view = { xmin: -4, xmax: 12, ymin: -5, ymax: 5 }) => planeDoc({ view, vlines: [va(d)], curves: [{ f, a, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  mc(S`Quelle est l'asymptote verticale de $y=\log_2 x$?`, S`$x=0$`, [S`$y=0$`, S`$x=1$`, S`$y=1$`], "L'argument x doit être positif, et le graphique s'approche de l'axe des y."),
  mc(S`Quelle est l'abscisse à l'origine de $y=\log_5 x$?`, "1", ["0", "5", "aucune"], "log₅ 1 = 0."),
  mc(S`Quel est le domaine de $y=\log x$?`, S`$x>0$`, ["tous les nombres réels", S`$x\ge0$`, S`$x>1$`], "Seuls les nombres positifs ont un logarithme."),
  mc(S`Quelle est l'image de $y=\log_3x$?`, "tous les nombres réels", [S`$y>0$`, S`$y\ge0$`, S`$y>1$`], "C'est le domaine de y = 3ˣ."),
  mc(S`Quelle est l'asymptote verticale de $y=\log(x-4)$?`, S`$x=4$`, [S`$x=-4$`, S`$y=4$`, S`$x=0$`], "x − 4 > 0 ⇒ x > 4; c = 4."),
  mc(S`Quelle est l'asymptote verticale de $y=\log_2(x+3)-1$?`, S`$x=-3$`, [S`$x=3$`, S`$x=-1$`, S`$y=-1$`], "x + 3 = x − (−3); d ne déplace pas l'asymptote."),
  mc(S`Quelle transformation envoie $y=\log x$ sur $y=\log x+5$?`, "5 vers le haut", ["5 vers la droite", "5 vers la gauche", "étirement de facteur 5"], "On ajoute 5 à chaque valeur de y."),
  mc(S`Quelle transformation envoie $y=\log x$ sur $y=\log(x-2)$?`, "2 vers la droite", ["2 vers la gauche", "2 vers le haut", "2 vers le bas"], "x − 2 : translation de 2 vers la droite."),
  mc(S`Quelle transformation envoie $y=\log x$ sur $y=-\log x$?`, "réflexion dans l'axe des x", ["réflexion dans l'axe des y", "translation vers le bas", "compression"], "Chaque valeur de y change de signe."),
  mc(S`Quelle transformation envoie $y=\log x$ sur $y=\log(-x)$?`, "réflexion dans l'axe des y", ["réflexion dans l'axe des x", "translation vers la gauche", "aucun changement"], "Chaque valeur de x change de signe."),
  num(S`Le point $(2,1)$ appartient à $y=\log_2x$. Trouve la coordonnée y de son image sur $y=4\log_2x$.`, 4, "a = 4 multiplie y par 4."),
  num(S`Le point $(2,1)$ appartient à $y=\log_2x$. Trouve la coordonnée x de son image sur $y=\log_2(x-5)$.`, 7, "c = 5 ajoute 5 à x."),
  num(S`Trouve l'abscisse à l'origine de $y=\log(x+2)$.`, -1, "x + 2 = 1."),
  num(S`Trouve l'ordonnée à l'origine de $y=\log_2(x+4)$.`, 2, "x = 0 : log₂ 4 = 2."),
  tf(S`$y=\log_2 x+3$ a l'asymptote $x=3$.`, false, "Ajouter 3 déplace le graphique vers le haut; l'asymptote reste x = 0."),
  tf(S`$y=\log_{0.5}x$ est une fonction décroissante.`, true, "Base entre 0 et 1 : comme (1/2)ˣ, elle est décroissante."),
  fill(S`Le domaine de $y=\log_3(x-7)$ est $x>$ ____.`, ["7"], "x − 7 > 0."),
  fill(S`Dans $y=a\log_b\big(k(x-c)\big)+d$, l'asymptote verticale est $x=$ ____ (une lettre).`, ["c"], "Seule la translation horizontale déplace l'asymptote."),
  mc("Le graphique montre une translation de y = log₂ x. Quelle est son asymptote?", S`$x=2$`, [S`$x=0$`, S`$y=2$`, S`$x=-2$`], "La droite en pointillés est en x = 2.", G((x) => lg(2)(x - 2), 2.005, 2)),
  mc("Le graphique montre y = log₂(x + 1). Quel point lui appartient?", "(1, 1)", ["(1, 0)", "(2, 1)", "(0, 1)"], "log₂(1 + 1) = 1.", G((x) => lg(2)(x + 1), -0.995, -1, [{ x: 1, y: 1, label: "(1, 1)", color: "blue" }])),
];

export const M = [
  mc(S`Quelle est l'asymptote de $y=\log(2x-8)$?`, S`$x=4$`, [S`$x=8$`, S`$x=-4$`, S`$x=2$`], "2x − 8 = 2(x − 4)."),
  mc(S`Quel est le domaine de $y=\log_3(6-2x)$?`, S`$x<3$`, [S`$x>3$`, S`$x<6$`, S`$x>-3$`], "6 − 2x > 0 ⇒ x < 3."),
  mc(S`Quelle description correspond à $y=-2\log_5(x+1)+3$?`, "réflexion dans l'axe des x, étirement de facteur 2, 1 vers la gauche, 3 vers le haut", ["étirement de facteur 2, 1 vers la droite, 3 vers le haut", "réflexion dans l'axe des y, étirement de facteur 2, 1 vers la gauche, 3 vers le haut", "compression de facteur 1/2, 1 vers la gauche, 3 vers le haut"], "a = −2, c = −1, d = 3."),
  num(S`Le point $(9,2)$ appartient à $y=\log_3x$. Trouve la coordonnée y de son image sur $y=-\log_3(x)+5$.`, 3, "y → −y + 5 = 3."),
  num(S`Le point $(9,2)$ appartient à $y=\log_3x$. Trouve la coordonnée x de son image sur $y=\log_3(3x)$.`, 3, "k = 3 divise x par 3."),
  num(S`Le point $(8,3)$ appartient à $y=\log_2x$. Trouve la coordonnée x de son image sur $y=\log_2\big(2(x+1)\big)$.`, 3, "x → x/2 − 1 = 3."),
  num(S`Trouve l'abscisse à l'origine de $y=\log_2(x-1)-3$.`, 9, "log₂(x − 1) = 3 ⇒ x − 1 = 8."),
  num(S`Trouve l'ordonnée à l'origine de $y=3\log(x+10)-1$.`, 2, "x = 0 : 3 log 10 − 1 = 2."),
  num(S`Trouve $c$ si $y=\log_5(x-c)$ passe par $(30,2)$.`, 5, "30 − c = 25."),
  num(S`Trouve $d$ si $y=\log_4x+d$ passe par $(64,1)$.`, -2, "3 + d = 1."),
  num(S`Trouve $a$ si $y=a\log_2x$ passe par $(16,-2)$.`, -0.5, "4a = −2.", null, 0.001),
  ms(S`Choisis toutes les fonctions dont l'asymptote est $x=-2$.`, [S`$y=\log(x+2)$`, S`$y=\log_3(2x+4)$`, S`$y=\log(x-2)$`, S`$y=5\log_2(x+2)-7$`, S`$y=\log x-2$`], [0, 1, 3], "Mets en évidence : 2x + 4 = 2(x + 2). log x − 2 a l'asymptote x = 0."),
  ms(S`Choisis toutes les fonctions croissantes.`, [S`$y=\log_2(x-1)$`, S`$y=-\log x$`, S`$y=\log_{1/3}x$`, S`$y=3\log_5 x+2$`], [0, 3], "Une base > 1 avec a > 0 donne une fonction croissante; un a négatif ou une base inférieure à 1 inverse le sens."),
  tf(S`$y=\log_2(4x)$ et $y=\log_2x+2$ ont le même graphique.`, true, "Chaque point le confirme : p. ex. x = 1 donne 2 dans les deux, x = 2 donne 3 dans les deux."),
  tf(S`Le graphique de $y=\log(x+1)$ passe par l'origine.`, true, "log(0 + 1) = log 1 = 0."),
  mc(S`Quelle équation a l'asymptote $x=3$ et passe par $(4,2)$?`, S`$y=\log_2(x-3)+2$`, [S`$y=\log_2(x+3)+2$`, S`$y=\log_2(x-3)-2$`, S`$y=\log_2x+3$`], "log₂(4 − 3) + 2 = 0 + 2 = 2."),
  mc("Le graphique est celui de y = log(x − c) + d. Trouve c et d.", S`$c=-2,\ d=1$`, [S`$c=2,\ d=1$`, S`$c=-2,\ d=-1$`, S`$c=1,\ d=-2$`], "Asymptote x = −2; en x = −1, l'argument vaut 1, donc y = d = 1.", G((x) => Math.log10(x + 2) + 1, -1.998, -2, [{ x: -1, y: 1, label: "(−1, 1)", color: "blue" }, { x: 8, y: 2, label: "(8, 2)", color: "blue" }])),
  mc("Le graphique est celui d'un logarithme réfléchi. Quelle équation lui correspond?", S`$y=\log_2(-x)$`, [S`$y=-\log_2x$`, S`$y=\log_2x$`, S`$y=-\log_2(-x)$`], "Il se trouve à gauche de x = 0 et passe par (−2, 1).", planeDoc({ view: { xmin: -9, xmax: 3, ymin: -3, ymax: 4 }, vlines: [va(0)], curves: [{ f: (x) => lg(2)(-x), b: -0.005, color: "violet" }], points: [{ x: -2, y: 1, label: "(−2, 1)", color: "blue" }], step: { x: 1, y: 1 } })),
  fill(S`$y=\log_3(x+5)-2$ : l'image de $(1,0)$ est $(\square,-2)$. Complète la case.`, ["-4", "−4"], "x → x − 5."),
  mc(S`Quelle est l'inverse de $y=\log_2(x)+3$?`, S`$y=2^{x-3}$`, [S`$y=2^x+3$`, S`$y=2^{x+3}$`, S`$y=3^x+2$`], "Échange : x = log₂ y + 3 ⇒ y = 2^(x − 3)."),
];
