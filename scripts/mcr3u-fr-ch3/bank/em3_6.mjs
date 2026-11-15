// 3.6 Les zéros et le discriminant — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 8 };

export const E = [
  num(String.raw`Trouve le discriminant de $x^2+6x+5$.`, 16, "36 − 20."),
  num(String.raw`Combien de racines réelles l'équation $x^2+2x+5=0$ a-t-elle?`, 0, "D = 4 − 20 < 0."),
  num(String.raw`Combien de racines réelles l'équation $x^2-8x+16=0$ a-t-elle?`, 1, "D = 0."),
  num(String.raw`Combien de racines réelles l'équation $2x^2-3x-4=0$ a-t-elle?`, 2, "D = 9 + 32 > 0."),
  tf("Si D < 0, l'équation du second degré n'a aucune racine réelle.", true, "√(négatif) n'est pas réel."),
  mc("Si D = 0, l'équation a…", "une racine réelle (double)", ["deux racines réelles", "aucune racine réelle", "une infinité de racines"], "La partie ± vaut 0."),
  num(String.raw`Trouve le discriminant de $3x^2-2x+1$.`, -8, "4 − 12."),
  num(String.raw`Combien de zéros $y=2(x-1)^2-8$ a-t-elle?`, 2, "Ouverte vers le haut à partir d'un point sous l'axe."),
  num(String.raw`Combien de zéros $y=-(x+3)^2-1$ a-t-elle?`, 0, "Ouverte vers le bas à partir d'un point sous l'axe."),
  num(String.raw`Combien de zéros $y=5(x-2)^2$ a-t-elle?`, 1, "Sommet sur l'axe."),
  mc("Une équation du second degré à coefficients entiers a D = 49. Ses racines sont…", "deux nombres rationnels", ["deux nombres irrationnels", "égales", "non réelles"], "49 est un carré parfait."),
  num(String.raw`Pour quelle valeur de $k$ l'équation $x^2+10x+k=0$ a-t-elle une seule racine?`, 25, "100 − 4k = 0."),
  tf("Un discriminant carré parfait (coefficients entiers) donne des racines rationnelles.", true, "√D est un entier."),
  num(String.raw`Trouve le discriminant de $x^2-7$.`, 28, "0 − 4(1)(−7)."),
  mc("Quel est le discriminant de la fonction du second degré représentée?", "D = 0", ["D > 0", "D < 0", "on ne peut pas savoir"], "Elle touche l'axe des x une seule fois.", planeDoc({ view: V8, curves: [{ f: (x) => (x + 1) ** 2, color: "violet" }], points: [P(-1, 0)] })),
  mc("Que peut-on dire du discriminant de la fonction du second degré représentée?", "D < 0", ["D > 0", "D = 0", "D = 4"], "Elle ne rencontre jamais l'axe des x.", graph((x) => x * x - 2 * x + 3, V8, [P(1, 2)])),
  num(String.raw`Combien de zéros $y=x^2+1$ a-t-elle?`, 0, "Toujours au moins 1."),
  num(String.raw`Combien de zéros $y=-x^2+4$ a-t-elle?`, 2, "x = ±2."),
  mc("Une équation du second degré à coefficients entiers a D = 12. Ses racines sont…", "deux nombres irrationnels", ["deux nombres rationnels", "égales", "non réelles"], "12 n'est pas un carré parfait."),
  num(String.raw`Trouve le discriminant de $-x^2+4x-4$.`, 0, "16 − 16."),
];

export const M = [
  num(String.raw`Quel est le plus petit entier $k$ pour lequel $x^2+4x+k=0$ n'a aucune racine réelle?`, 5, "16 − 4k < 0 → k > 4."),
  num(String.raw`Pour quelle valeur positive de $k$ l'équation $x^2+kx+49=0$ a-t-elle une seule racine?`, 14, "k² = 196."),
  num(String.raw`Quel est le plus grand entier $k$ pour lequel $x^2-6x+k=0$ a deux racines réelles?`, 8, "36 − 4k > 0 → k < 9."),
  num(String.raw`Pour quelle valeur de $k$ l'équation $kx^2-8x+4=0$ a-t-elle une seule racine?`, 4, "64 − 16k = 0."),
  ms("Quelles équations ont deux racines réelles? Choisis toutes les bonnes réponses.", [String.raw`$x^2-5x+6=0$`, String.raw`$x^2+x+1=0$`, String.raw`$2x^2-4x+2=0$`, String.raw`$x^2-3=0$`, String.raw`$-x^2+2x+5=0$`], [0, 3, 4], "D = 1, −3, 0, 12, 24."),
  num(String.raw`Combien de zéros $y=3(x+2)^2-12$ a-t-elle?`, 2, "a > 0, k < 0."),
  mc(String.raw`Les racines de $2x^2+5x-3=0$ sont…`, "rationnelles", ["irrationnelles", "non réelles", "égales"], "D = 25 + 24 = 49."),
  mc(String.raw`Les racines de $3x^2+x-1=0$ sont…`, "irrationnelles", ["rationnelles", "non réelles", "égales"], "D = 1 + 12 = 13."),
  num(String.raw`Trouve le discriminant de $4x^2-12x+9$.`, 0, "144 − 144."),
  num(String.raw`Pour combien d'entiers $k$ de $-10$ à $10$ l'équation $x^2+kx+4=0$ n'a-t-elle aucune racine réelle?`, 7, "k² < 16 : −3, …, 3."),
  tf(String.raw`$x^2+kx-5=0$ a deux racines réelles pour toute valeur de $k$.`, true, "D = k² + 20 > 0."),
  num(String.raw`Pour quelle valeur de $c$ la parabole $y=-x^2+6x+c$ touche-t-elle l'axe des x une seule fois?`, -9, "36 + 4c = 0."),
  num("Le graphique montre y = x² − 4x + c pour plusieurs valeurs de c. Pour quelle valeur de c a-t-elle exactement un zéro?", 4, "D = 16 − 4c = 0.", planeDoc({ view: V8, curves: [0, 2, 4, 6].map((c, i) => ({ f: (x) => x * x - 4 * x + c, color: ["blue", "green", "amber", "red"][i] })), step: { x: 1, y: 1 } })),
  num(String.raw`Combien de zéros $y=2x^2-8x+8$ a-t-elle?`, 1, "2(x − 2)²."),
  mc("Si a et c sont de signes contraires, l'équation ax² + bx + c = 0 a…", "deux racines réelles", ["aucune racine réelle", "une racine réelle", "cela dépend de b"], "−4ac > 0, donc D > 0."),
  num(String.raw`Pour quelle valeur de $k$ l'équation $(k-1)x^2+4x+2=0$ a-t-elle une seule racine?`, 3, "16 − 8(k − 1) = 0."),
  num(String.raw`Trouve le discriminant de $x^2+(m+1)x+m$ lorsque $m=3$.`, 4, "16 − 12."),
  tf(String.raw`$y=4(x-5)^2+0.1$ a un zéro.`, false, "Son minimum est 0.1."),
  num("Lis le graphique : combien de zéros la fonction a-t-elle?", 2, "Sommet (1, −2), ouverte vers le haut.", graph((x) => (x - 1) ** 2 - 2, V8, [P(1, -2)])),
  num(String.raw`Quel est le plus petit entier positif $b$ pour lequel $x^2+bx+10=0$ a des racines réelles?`, 7, "b² ≥ 40."),
];
