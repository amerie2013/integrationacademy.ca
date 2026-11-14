// 8.3 Fonctions composées — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch8/bank/em8_3.mjs)
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`$f(x)=x+2$, $g(x)=4x$. Détermine $f(g(3))$.`, 14, "g(3) = 12."),
  num(S`$f(x)=x+2$, $g(x)=4x$. Détermine $g(f(3))$.`, 20, "f(3) = 5."),
  num(S`$f(x)=x^2$, $g(x)=x-6$. Détermine $f(g(2))$.`, 16, "g(2) = −4."),
  num(S`$f(x)=x^2$, $g(x)=x-6$. Détermine $g(f(2))$.`, -2, "f(2) = 4."),
  num(S`$f(x)=2^x$, $g(x)=x+1$. Détermine $f(g(2))$.`, 8, "g(2) = 3."),
  num(S`$f(x)=\sqrt x$, $g(x)=x+7$. Détermine $f(g(9))$.`, 4, "g(9) = 16."),
  num(S`$f(x)=3x-1$. Détermine $f(f(2))$.`, 14, "f(2) = 5, f(5) = 14."),
  mx(S`$f(x)=2x+3$, $g(x)=x^2$. Détermine $f(g(x))$.`, "2*x^2+3", "Remplace x par x² dans f."),
  mx(S`$f(x)=2x+3$, $g(x)=x^2$. Détermine $g(f(x))$ sous forme développée.`, "4*x^2+12*x+9", "(2x + 3)²."),
  mx(S`$f(x)=x-5$, $g(x)=3x$. Détermine $f(g(x))$.`, "3*x-5", "f(3x)."),
  mc(S`Dans $f(g(x))$, quelle fonction est appliquée en premier?`, S`$g$`, [S`$f$`, "les deux en même temps", "cela dépend de x"], "De l'intérieur vers l'extérieur."),
  mc(S`$h(x)=(x+4)^3=f(g(x))$. Quelle paire convient?`, S`$g(x)=x+4,\ f(x)=x^3$`, [S`$g(x)=x^3,\ f(x)=x+4$`, S`$g(x)=x,\ f(x)=(x+4)^3$`, S`$g(x)=4,\ f(x)=x^3$`], "Intérieure = calculée en premier."),
  mc(S`$h(x)=\sqrt{x-1}=f(g(x))$. Laquelle est $f$?`, S`$\sqrt x$`, [S`$x-1$`, S`$\sqrt{x}-1$`, S`$x^2$`], "Extérieure = appliquée en dernier."),
  tf(S`$f(g(x))=g(f(x))$ pour toutes les fonctions.`, false, "Habituellement différentes."),
  tf(S`$(f\circ g)(x)$ veut dire $f(g(x))$.`, true, "Notation."),
  tf(S`Si $f(x)=x+3$ et $g(x)=x-3$, alors $f(g(x))=x$.`, true, "Ce sont des fonctions inverses l'une de l'autre."),
  fill(S`$f(x)=10x$, $g(x)=x+1$. $f(g(x))=$ ____ (simplifiée).`, ["10x+10", "10(x+1)", "10*x+10"], "10(x + 1)."),
  fill(S`$\log(2^x)$ et $2^{\log_2 x}$ se simplifient toutes deux en ____.`, ["x"], "Des fonctions inverses s'annulent."),
  mc("Utilise les graphiques : f est en bleu, g est en gris. Détermine f(g(1)).", "4", ["3", "1", "2"], "g(1) = 2, puis f(2) = 4.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, lines: [{ m: 1, b: 1, color: "gray" }, { m: 2, b: 0, color: "blue" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "gray" }, { x: 2, y: 4, label: "(2, 4)", color: "blue" }], step: { x: 1, y: 1 } })),
  mc("Le graphique de f est illustré. Détermine f(f(0)).", "1", ["0", "3", "2"], "f(0) = 3, f(3) = 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 3 - (2 * x) / 3, a: 0, b: 4.5, color: "violet" }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "amber" }, { x: 3, y: 1, label: "(3, 1)", color: "amber" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`$f(x)=x^2-1$, $g(x)=2x+3$. Détermine $f(g(-1))$.`, 0, "g(−1) = 1."),
  num(S`$f(x)=\frac1x$, $g(x)=x-2$. Détermine $f(g(6))$.`, 0.25, "g(6) = 4.", null, 0.001),
  num(S`$f(x)=\log x$, $g(x)=x^2+99$. Détermine $f(g(1))$.`, 2, "g(1) = 100."),
  num(S`$f(x)=x^2+2x$, $g(x)=x-1$. Détermine $f(g(x))$ à $x=4$.`, 15, "g(4) = 3, f(3) = 15."),
  num(S`$f(x)=2x-5$. Résous $f(f(x))=7$.`, 5.5, "f(f(x)) = 2(2x − 5) − 5 = 4x − 15 = 7 ⇒ x = 5.5.", null, 0.001),
  num(S`$d(t)=50t$ km et $F(d)=0.08d$ L. Combien de litres sont consommés en $2.5$ h?`, 10, "d = 125, F = 10."),
  mx(S`$f(x)=x^2+1$, $g(x)=x-3$. Détermine $f(g(x))$ sous forme développée.`, "x^2-6*x+10", "(x − 3)² + 1."),
  mx(S`$f(x)=\frac x2+4$, $g(x)=2x-8$. Détermine $f(g(x))$.`, "x", "Ce sont des fonctions inverses l'une de l'autre."),
  mc(S`Domaine de $f(g(x))$ pour $f(x)=\sqrt x$ et $g(x)=x+5$?`, S`$x\ge-5$`, [S`$x\ge0$`, S`$x\ge5$`, S`tous les $x$ réels`], "x + 5 ≥ 0."),
  mc(S`Domaine de $g(f(x))$ pour $f(x)=\sqrt x$ et $g(x)=x^2$?`, S`$x\ge0$`, [S`tous les $x$ réels`, S`$x>0$`, S`$x\le0$`], "La fonction intérieure √x exige x ≥ 0, même si le résultat est x."),
  mc(S`Domaine de $\log(x-8)$ vue comme $f(g(x))$?`, S`$x>8$`, [S`$x\ge8$`, S`$x>0$`, S`$x\ne8$`], "x − 8 > 0."),
  mc(S`$h(x)=5^{x^2}$. Quelle décomposition est correcte?`, S`$g(x)=x^2,\ f(x)=5^x$`, [S`$g(x)=5^x,\ f(x)=x^2$`, S`$g(x)=5x,\ f(x)=x^2$`, S`$g(x)=x,\ f(x)=5^x$`], "x² est calculé en premier."),
  ms(S`Choisis chaque paire de fonctions inverses l'une de l'autre.`, [S`$2x+6$ et $\frac x2-3$`, S`$x^3$ et $\sqrt[3]x$`, S`$10^x$ et $\log x$`, S`$x+1$ et $x-2$`], [0, 1, 2], "Vérifie que f(g(x)) = x."),
  tf(S`Pour $f(x)=\sqrt x$, $f(f(16))=2$.`, true, "√16 = 4, √4 = 2."),
  tf(S`Le domaine de $f\circ g$ est toujours le domaine de $g$.`, false, "Les valeurs de g doivent aussi être dans le domaine de f."),
  fill(S`$f(x)=x+1$ et $f(g(x))=3x$. Alors $g(x)=$ ____.`, ["3x-1", "3*x-1"], "g(x) + 1 = 3x."),
  num(S`$f(x)=x^2$, $g(x)=x+2$. Résous $f(g(x))=25$. Entre la racine positive.`, 3, "(x + 2)² = 25 ⇒ x = 3 ou −7."),
  mc("Utilise les graphiques : f est en violet, g est en bleu. Détermine g(f(4)).", "3", ["1", "4", "6"], "f(4) = 2, puis g(2) = 3.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: Math.sqrt, a: 0, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "violet" }, { x: 2, y: 3, label: "(2, 3)", color: "blue" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = √(9 − x²). C'est f(g(x)) pour quelles fonctions f et g?", "f(x) = √x, g(x) = 9 − x²", ["f(x) = 9 − x², g(x) = √x", "f(x) = x², g(x) = √(9 − x)", "f(x) = √x, g(x) = 9 − x"], "Le radicande est calculé en premier.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3, color: "violet" }], step: { x: 1, y: 1 } })),
  num(S`$f(x)=3^x$, $g(x)=\log_3x$. Détermine $f(g(7))$.`, 7, "Fonctions inverses."),
];
