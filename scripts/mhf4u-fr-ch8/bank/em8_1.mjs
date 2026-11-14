// 8.1 Sommes et différences de fonctions — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch8/bank/em8_1.mjs)
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`$f(x)=2x+5$ et $g(x)=x-1$. Détermine $(f+g)(3)$.`, 13, "11 + 2."),
  num(S`$f(x)=x^2$ et $g(x)=3x$. Détermine $(f-g)(4)$.`, 4, "16 − 12."),
  num(S`$f(x)=x^2+1$ et $g(x)=2x$. Détermine $(f+g)(-1)$.`, 0, "2 + (−2)."),
  num(S`$f(x)=10-x$ et $g(x)=x^2$. Détermine $(f-g)(2)$.`, 4, "8 − 4."),
  num(S`$f(x)=2^x$ et $g(x)=x$. Détermine $(f+g)(3)$.`, 11, "8 + 3."),
  mx(S`$f(x)=3x-2$ et $g(x)=x+7$. Détermine $(f+g)(x)$.`, "4*x+5", "Additionne les termes semblables."),
  mx(S`$f(x)=x^2+4x$ et $g(x)=x^2-x$. Détermine $(f-g)(x)$.`, "5*x", "x² − x² + 4x + x."),
  mx(S`$f(x)=2x^2-3$ et $g(x)=x^2+x+1$. Détermine $(f+g)(x)$.`, "3*x^2+x-2", "Regroupe les termes semblables."),
  mc(S`$f(x)=x^2+2x$, $g(x)=x-3$. Laquelle est $(f-g)(x)$?`, S`$x^2+x+3$`, [S`$x^2+x-3$`, S`$x^2+3x-3$`, S`$x^2+3x+3$`], "Mets g entre parenthèses : −(x − 3) = −x + 3."),
  mc(S`Quel est le domaine de $\sqrt x+\sqrt{3-x}$?`, S`$0\le x\le3$`, [S`$x\ge0$`, S`$x\le3$`, S`tous les $x$ réels`], "Les deux racines doivent exister."),
  mc(S`Que vaut $(f+g)(2)$?`, S`$f(2)+g(2)$`, [S`$f(4)$`, S`$f(2)\cdot g(2)$`, S`$f(g(2))$`], "Additionne les valeurs pour la même entrée."),
  tf(S`$(f-g)(x)=(g-f)(x)$ pour toutes les fonctions $f$ et $g$.`, false, "g − f = −(f − g)."),
  tf(S`Les zéros de $f-g$ sont les endroits où les graphiques de $f$ et de $g$ se croisent.`, true, "f(x) − g(x) = 0 ⇔ f(x) = g(x)."),
  tf(S`La somme de deux fonctions paires est paire.`, true, "f(−x) + g(−x) = f(x) + g(x)."),
  fill(S`Profit $=$ revenu $-$ ____.`, ["coût", "coûts", "cout", "couts", "cost"], "P = R − C."),
  fill(S`$R(x)=20x$ et $C(x)=8x+600$. La quantité correspondant au seuil de rentabilité est ____.`, ["50"], "12x = 600."),
  num(S`$R(x)=40x$ et $C(x)=25x+300$. Détermine le profit pour $x=50$.`, 450, "2000 − 1550."),
  num(S`$f(x)=\sqrt{x}$, $g(x)=\sqrt{9-x}$. Détermine $(f+g)(0)$.`, 3, "0 + 3."),
  mc("Les graphiques de f (en bleu) et de g (en gris) sont illustrés. Que vaut (f + g)(2)?", "5", ["3", "6", "1"], "f(2) = 4 et g(2) = 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x * x, color: "blue" }], lines: [{ m: -1, b: 3, color: "gray" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "blue" }, { x: 2, y: 1, label: "(2, 1)", color: "gray" }], step: { x: 1, y: 1 } })),
  mc("Les graphiques de y = f(x) et de y = g(x) sont illustrés. Pour quelles valeurs de x a-t-on (f − g)(x) = 0?", "x = 1 et x = 3", ["x = 0 seulement", "x = 2 seulement", "x = 4"], "Les graphiques se croisent à x = 1 et à x = 3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 4, color: "blue" }], lines: [{ m: 0, b: 1, color: "gray" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`$f(x)=\sqrt{x+5}$ et $g(x)=\sqrt{4-x}$. Détermine $(f-g)(4)$.`, 3, "3 − 0."),
  num(S`$R(x)=18x$ et $C(x)=0.01x^2+6x+2000$. Détermine le profit maximal.`, 1600, "P = −0.01x² + 12x − 2000; sommet à x = 600; P = 1600."),
  num(S`Pour $P(x)=-0.01x^2+12x-2000$, à quelle valeur de $x$ le profit est-il le plus grand?`, 600, "x = −12/(2·(−0.01))."),
  num(S`$f(x)=\log x$ et $g(x)=\log(x^3)$. Détermine $(f+g)(10)$.`, 4, "1 + 3."),
  num(S`$f(x)=\sin x$ et $g(x)=\cos x$. Détermine $(f+g)(\pi)$.`, -1, "0 + (−1)."),
  num(S`$h(x)=3^x-x^2$. Détermine $h(2)$.`, 5, "3² − 2² = 9 − 4."),
  mx(S`$f(x)=x^3-2x$ et $g(x)=-x^3+x^2$. Détermine $(f+g)(x)$.`, "x^2-2*x", "Les termes en x³ s'annulent."),
  mx(S`$f(x)=(x+2)^2$ et $g(x)=x^2$. Détermine $(f-g)(x)$.`, "4*x+4", "x² + 4x + 4 − x²."),
  mc(S`Quel est le domaine de $\sqrt{x-2}+\dfrac1{x-5}$?`, S`$x\ge2,\ x\ne5$`, [S`$x\ge2$`, S`$x\ne5$`, S`$2\le x\le5$`], "Les deux parties doivent exister."),
  mc(S`Quelle fonction est impaire?`, S`$x^3+\sin x$`, [S`$x^2+\cos x$`, S`$x^3+x^2$`, S`$x+1$`], "impaire + impaire = impaire."),
  mc(S`Quelle fonction n'est ni paire ni impaire?`, S`$x^2+x$`, [S`$x^4+x^2$`, S`$x^5-x$`, S`$\cos x+x^2$`], "paire + impaire ne donne habituellement ni l'une ni l'autre."),
  ms(S`Choisis chaque énoncé vrai au sujet de $h(x)=x+\sin x$.`, ["elle est impaire", "son seul zéro est x = 0", "elle est toujours à moins de 1 de la droite y = x", "elle est périodique"], [0, 1, 2], "La partie linéaire empêche la périodicité."),
  tf(S`Pour les grandes valeurs positives de $x$, $2^x-x^3$ est positive.`, true, "Les exponentielles finissent par dépasser les puissances (à partir de x ≈ 10)."),
  tf(S`Le domaine de $f+g$ peut être plus grand que le domaine de $f$.`, false, "C'est l'intersection; il n'est donc jamais plus grand."),
  fill(S`$P(x)=-2x^2+40x-150$. Les quantités correspondant aux seuils de rentabilité sont $5$ et ____.`, ["15"], "x² − 20x + 75 = 0."),
  num(S`$R(x)=50x$ et $C(x)=x^2+10x+300$. Détermine la plus grande quantité correspondant à un seuil de rentabilité.`, 30, "x² − 40x + 300 = 0 ⇒ 10 ou 30."),
  num(S`Détermine tous les zéros de $\sin x+\sin2x$ sur $0<x<\pi$.`, 2 * Math.PI / 3, "sin x(1 + 2cos x) = 0 ⇒ cos x = −1/2.", null, 0.01),
  mc("Le graphique montre y = f(x) + g(x), construite à partir d'une droite et d'une parabole. Quelle paire pourrait-ce être?", "f(x) = x², g(x) = 2x", ["f(x) = x², g(x) = −2x", "f(x) = 2x², g(x) = x", "f(x) = x², g(x) = 2"], "x² + 2x a les zéros 0 et −2.", planeDoc({ view: { xmin: -4, xmax: 2, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x + 2 * x, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre une fonction profit. Quel est le profit maximal?", "environ 500", ["environ 200", "environ 42", "environ 358"], "Le sommet est près de (200, 500).", planeDoc({ view: { xmin: -10, xmax: 420, ymin: -400, ymax: 700 }, curves: [{ f: (x) => -0.02 * x * x + 8 * x - 300, color: "violet" }], step: { x: 50, y: 100 } })),
  num(S`$f(x)=x^2-1$, $g(x)=1-x$. Détermine le zéro positif de $f+g$.`, 1, "x² − x = 0 ⇒ x = 0 ou 1."),
];
