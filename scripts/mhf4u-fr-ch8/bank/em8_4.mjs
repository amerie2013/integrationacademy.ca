// 8.4 Inéquations de fonctions combinées — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch8/bank/em8_4.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  mc(S`Résous $x^2<25$.`, S`$-5<x<5$`, [S`$x<5$`, S`$x<-5$ ou $x>5$`, S`$x>-5$`], "Entre les racines."),
  mc(S`Résous $x^2-x-12>0$.`, S`$x<-3$ ou $x>4$`, [S`$-3<x<4$`, S`$x>4$`, S`$-4<x<3$`], "(x − 4)(x + 3) > 0."),
  mc(S`Résous $2^x<16$.`, S`$x<4$`, [S`$x>4$`, S`$x<8$`, S`$x<2$`], "2ˣ est croissante."),
  mc(S`Résous $\left(\frac12\right)^x>4$.`, S`$x<-2$`, [S`$x>-2$`, S`$x>2$`, S`$x<2$`], "Une exponentielle décroissante inverse l'ordre."),
  mc(S`$f(x)>g(x)$ équivaut à…`, S`$f(x)-g(x)>0$`, [S`$f(x)+g(x)>0$`, S`$\frac{f(x)}{g(x)}>1$`, S`$f(g(x))>0$`], "Soustrais g des deux membres."),
  num(S`Combien d'entiers vérifient $x^2\le4$?`, 5, "−2, −1, 0, 1, 2."),
  num(S`Combien d'entiers vérifient $x^2-5x+4<0$?`, 2, "1 < x < 4 : 2 et 3."),
  num(S`$3^x\ge81$ pour $x\ge a$. Détermine $a$.`, 4, "3⁴ = 81."),
  num(S`$\log x>2$ pour $x>a$. Détermine $a$.`, 100, "x > 10²."),
  tf(S`Entre deux points de croisement consécutifs, $f-g$ garde le même signe.`, true, "Elle ne peut changer de signe qu'à un point de croisement (pour des fonctions continues)."),
  tf(S`Pour résoudre $\frac{x+1}{x-2}>1$, on peut multiplier les deux membres par $x-2$.`, false, "x − 2 peut être négatif."),
  tf(S`Pour $\ge$, les points de croisement sont inclus dans la solution.`, true, "L'égalité est permise."),
  fill(S`$x^2>9$ veut dire $x<-3$ ou $x>$ ____.`, ["3"], "À l'extérieur des racines."),
  fill(S`$\sin x>0$ sur $0\le x\le2\pi$ pour $0<x<$ ____ (écris pi sous la forme « pi »).`, ["pi", "π"], "Le sinus est positif dans les quadrants I et II."),
  mc(S`Résous $\cos x>0$ pour $0\le x\le\pi$.`, S`$0\le x<\frac\pi2$`, [S`$\frac\pi2<x\le\pi$`, S`$0\le x\le\pi$`, S`$x=\frac\pi2$`], "Le cosinus est positif dans le quadrant I."),
  mc(S`Résous $x^3>0$.`, S`$x>0$`, [S`$x<0$`, S`tous les $x$ réels`, S`$x\ne0$`], "Une puissance impaire conserve le signe."),
  mc(S`Résous $5-x\ge2x-4$.`, S`$x\le3$`, [S`$x\ge3$`, S`$x\le-3$`, S`$x\ge1$`], "9 ≥ 3x."),
  num(S`Pour $x\ge1$, quel est le plus petit entier tel que $2^x>10x$?`, 6, "2⁵ = 32 < 50; 2⁶ = 64 > 60."),
  mc("Le graphique montre y = f(x) (en violet) et y = g(x) (en bleu). Où a-t-on f(x) > g(x)?", "x < −1 ou x > 3", ["−1 < x < 3", "x > 3 seulement", "x < −1 seulement"], "La courbe violette est au-dessus de la bleue à l'extérieur des points de croisement.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue" }], points: [{ x: -1, y: 3, label: "(−1, 3)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = 2ˣ et y = 8. Où a-t-on 2ˣ ≤ 8?", "x ≤ 3", ["x ≥ 3", "x ≤ 8", "x < 0"], "2³ = 8.", planeDoc({ view: { xmin: -2, xmax: 4.5, ymin: -1, ymax: 16 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 0, b: 8, color: "blue", dash: true }], step: { x: 1, y: 2 } })),
];

export const M = [
  mc(S`Résous $x^3\le4x$.`, S`$x\le-2$ ou $0\le x\le2$`, [S`$-2\le x\le0$ ou $x\ge2$`, S`$-2\le x\le2$`, S`$x\le2$`], "x(x − 2)(x + 2) ≤ 0."),
  mc(S`Résous $\dfrac{x-4}{x+1}\le0$.`, S`$-1<x\le4$`, [S`$-1\le x\le4$`, S`$x<-1$ ou $x\ge4$`, S`$x\le4$`], "x = −1 est exclu."),
  mc(S`Résous $\dfrac{x+2}{x-3}>1$.`, S`$x>3$`, [S`$x<3$`, S`$x>-2$`, S`$-2<x<3$`], "5/(x − 3) > 0."),
  mc(S`Résous $\sin x<-\frac12$ pour $0\le x\le2\pi$.`, S`$\frac{7\pi}6<x<\frac{11\pi}6$`, [S`$\frac{\pi}6<x<\frac{5\pi}6$`, S`$\pi<x<2\pi$`, S`$\frac{5\pi}6<x<\frac{7\pi}6$`], "sin x = −1/2 à 7π/6 et à 11π/6."),
  mc(S`Résous $2^x>x^2$ pour $x\ge0$.`, S`$0\le x<2$ ou $x>4$`, [S`$2<x<4$`, S`$x>4$`, S`$x>2$`], "Points de croisement à 2 et à 4."),
  mc(S`Résous $x^4-10x^2+9<0$.`, S`$-3<x<-1$ ou $1<x<3$`, [S`$-3<x<3$`, S`$1<x<9$`, S`$x<-3$ ou $x>3$`], "(x² − 1)(x² − 9) < 0."),
  num(S`Combien d'entiers vérifient $x^3-9x<0$ avec $x>-5$?`, 3, "x < −3 ou 0 < x < 3 : −4, 1, 2."),
  num(S`$\log_2x\ge x-1$ est vraie pour $1\le x\le a$. Détermine $a$.`, 2, "Points de croisement à x = 1 (0 = 0) et à x = 2 (1 = 1); le logarithme est au-dessus entre les deux."),
  num(S`Quand $500(1.05)^t$ dépasse-t-elle pour la première fois $700+20t$? (au dixième près)`, 13.6, "Table : t = 13 : 943 < 960; t = 14 : 990 > 980; en raffinant, t ≈ 13.6.", null, 0.1),
  num(S`Détermine l'extrémité droite de l'intervalle où $2x+8\ge x^2$.`, 4, "x² − 2x − 8 ≤ 0 ⇒ −2 ≤ x ≤ 4."),
  ms(S`Choisis chaque valeur qui fait partie de la solution de $x^2>2x+3$.`, ["−2", "0", "3", "4"], [0, 3], "x < −1 ou x > 3; 3 est un point de croisement (non inclus)."),
  tf(S`$x^2+1>0$ pour tout $x$ réel.`, true, "x² ≥ 0."),
  tf(S`La solution de $\frac{1}{x}<1$ est $x>1$.`, false, "Aussi x < 0 : (1 − x)/x < 0."),
  fill(S`$\dfrac{x-1}{x+5}\ge0$ est vraie pour $x<-5$ ou $x\ge$ ____.`, ["1"], "Tableau de signes."),
  fill(S`$\tan x>1$ sur $0<x<\frac\pi2$ pour $\ $ ____ $<x<\frac\pi2$ (écris « pi/4 »).`, ["pi/4", "π/4"], "tan(π/4) = 1."),
  num(S`Pour $x>0$, résous $\log x<1$ et entre le plus grand entier de la solution.`, 9, "0 < x < 10."),
  mc("Le graphique montre y = x³ et y = 4x. Où a-t-on x³ > 4x?", "−2 < x < 0 ou x > 2", ["x < −2 ou 0 < x < 2", "x > 2", "−2 < x < 2"], "La cubique est au-dessus de la droite à ces endroits.", planeDoc({ view: { xmin: -3.5, xmax: 3.5, ymin: -14, ymax: 14 }, curves: [{ f: (x) => x ** 3, color: "violet" }], lines: [{ m: 4, b: 0, color: "blue" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre y = sin x et y = cos x sur [0, 2π]. Où a-t-on cos x > sin x?", "0 ≤ x < π/4 ou 5π/4 < x ≤ 2π", ["π/4 < x < 5π/4", "0 ≤ x < π/2", "π < x < 2π"], "Le cosinus est au-dessus à l'extérieur des points de croisement.", planeDoc({ view: { xmin: -0.2, xmax: 6.5, ymin: -1.3, ymax: 1.3 }, curves: [{ f: Math.sin, a: 0, b: 2 * Math.PI, color: "violet" }, { f: Math.cos, a: 0, b: 2 * Math.PI, color: "blue" }], step: { x: 0.5, y: 0.5 } })),
  num(S`Combien d'entiers vérifient $\dfrac{x+3}{x-4}<0$?`, 6, "−3 < x < 4 : −2, …, 3."),
  num(S`Résous $3x-2>x+6$ et entre la valeur frontière.`, 4, "2x > 8."),
];
