// 7.4 Résolution d'équations logarithmiques — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  num(S`Résous $\log_2x=6$.`, 64, "x = 2⁶."),
  num(S`Résous $\log_5x=-1$ (nombre décimal).`, 0.2, "x = 5⁻¹.", null, 0.0001),
  num(S`Résous $\log x=2.5$ à l'unité près.`, 10 ** 2.5, "x = 10^2.5 ≈ 316.", null, 0.6),
  num(S`Résous $\log_3(x-4)=2$.`, 13, "x − 4 = 9."),
  num(S`Résous $\log_4(2x)=3$.`, 32, "2x = 64."),
  num(S`Résous $\log(x+1)=1$.`, 9, "x + 1 = 10."),
  num(S`Résous $\log_7(3x+1)=\log_7 22$.`, 7, "3x + 1 = 22."),
  num(S`Résous $\log(5x-2)=\log(3x+6)$.`, 4, "5x − 2 = 3x + 6."),
  num(S`Résous $\log_x 49=2$ ($x>0$).`, 7, "x² = 49, et la base doit être positive."),
  num(S`Résous $\log_2 x+\log_2 4=5$.`, 8, "log₂ 4x = 5 ⇒ 4x = 32."),
  mc(S`Quelle est la première étape pour résoudre $\log_3(x+2)=4$?`, S`réécrire sous la forme $x+2=3^4$`, [S`écrire $x+2=4$`, S`diviser les deux membres par $\log 3$`, S`écrire $x+2=4^3$`], "log_b A = c ⇔ A = b^c."),
  mc(S`Pour quelles valeurs de $x$ l'expression $\log(x-6)$ est-elle définie?`, S`$x>6$`, [S`$x\ge6$`, S`$x<6$`, S`tous les réels $x$`], "L'argument doit être positif."),
  tf(S`$\log x=-2$ n'a aucune solution, car un logarithme ne peut pas être négatif.`, false, "x = 10⁻² = 0.01. C'est l'argument, et non le logarithme, qui doit être positif."),
  tf(S`Si $\log_5A=\log_5B$, alors $A=B$.`, true, "log₅ est biunivoque."),
  tf(S`$\log(x-3)=\log(2x)$ a pour solution $x=-3$.`, false, "x = −3 donne log(−6), qui n'existe pas; il n'y a aucune solution."),
  fill(S`$\log_6 x=2$ signifie $x=$ ____.`, ["36"], "6² = 36."),
  fill(S`Une racine qui vérifie l'algèbre, mais pas l'équation de départ, s'appelle une racine ____.`, ["étrangère", "etrangere", "une racine étrangère", "racine étrangère", "extraneous"], "Il faut la rejeter."),
  mc(S`Résous $\log_2(x+3)=\log_2(2x-1)$.`, S`$x=4$`, [S`$x=2$`, S`$x=-4$`, S`aucune solution`], "x + 3 = 2x − 1."),
  mc("Le graphique montre y = log₂(x − 1) et y = 3. Où se coupent-ils?", "x = 9", ["x = 4", "x = 8", "x = 7"], "x − 1 = 2³.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: -2, ymax: 4.5 }, curves: [{ f: (x) => Math.log2(x - 1), a: 1.01, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], vlines: [{ x: 1, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = log x et y = −1. Lis la solution de log x = −1.", "x = 0.1", ["x = −10", "x = −0.1", "x = 10"], "x = 10⁻¹.", planeDoc({ view: { xmin: -0.2, xmax: 2, ymin: -2, ymax: 0.6 }, curves: [{ f: (x) => L(x), a: 0.005, color: "violet" }], lines: [{ m: 0, b: -1, color: "blue", dash: true }], points: [{ x: 0.1, y: -1, label: "(0.1, −1)", color: "amber" }], step: { x: 0.2, y: 0.5 } })),
];

export const M = [
  num(S`Résous $\log_3x+\log_3(x-8)=2$.`, 9, "x² − 8x − 9 = 0 ⇒ x = 9 (rejette −1)."),
  num(S`Résous $\log x+\log(x+15)=2$.`, 5, "x² + 15x − 100 = 0 ⇒ (x + 20)(x − 5) = 0."),
  num(S`Résous $\log_2(x+4)+\log_2(x-2)=4$.`, 4, "x² + 2x − 8 = 16 ⇒ x² + 2x − 24 = 0 ⇒ x = 4."),
  num(S`Résous $\log_5(3x)-\log_5(x-2)=1$.`, 5, "3x = 5(x − 2) ⇒ x = 5."),
  num(S`Résous $\log(x+9)-\log x=1$.`, 1, "x + 9 = 10x."),
  num(S`Résous $\log_2(5x+2)-\log_2(x-1)=3$.`, 10 / 3, "5x + 2 = 8x − 8 ⇒ x = 10/3.", null, 0.001),
  num(S`Résous $2\log_3x=\log_3(2x+3)$.`, 3, "x² = 2x + 3 ⇒ x = 3 (rejette −1)."),
  num(S`Résous $\log_4x+\log_4(x+12)=3$.`, 4, "x² + 12x − 64 = 0 ⇒ (x + 16)(x − 4) = 0."),
  num(S`Résous $\log_6(x+1)+\log_6(x+2)=1$.`, 1, "x² + 3x + 2 = 6 ⇒ (x + 4)(x − 1) = 0."),
  num(S`Résous $\log(2x)=2\log x-\log 5$.`, 10, "2x = x²/5 ⇒ x = 10 (x = 0 n'est pas permis)."),
  mc(S`$\log x+\log(x-1)=\log 6$. Quel est l'ensemble solution?`, S`$\{3\}$`, [S`$\{3,-2\}$`, S`$\{-2\}$`, S`$\{2,3\}$`], "x² − x − 6 = 0; rejette −2."),
  mc(S`Quelle équation est équivalente à $\log_2x+\log_2(x-2)=3$ (avec $x>2$)?`, S`$x^2-2x=8$`, [S`$2x-2=8$`, S`$x^2-2x=3$`, S`$x^2-2x=6$`], "x(x − 2) = 2³."),
  ms(S`Sélectionne toutes les équations dont l'ensemble solution contient $x=4$.`, [S`$\log_2 x=2$`, S`$\log x+\log(x-3)=\log4$`, S`$\log_4(x+12)=2$`, S`$2\log x=\log 16$`], [0, 1, 2, 3], "Vérifie chacune : 2² = 4; 4·1 = 4; 16 = 4²; x² = 16 avec x > 0."),
  tf(S`$\log(x-2)+\log(x-3)=\log 2$ a deux solutions.`, false, "x² − 5x + 4 = 0 donne 1 et 4; x = 1 est une racine étrangère."),
  tf(S`$\log_3(x^2)=4$ a deux solutions.`, true, "x² = 81 ⇒ x = ±9; les deux rendent x² positif."),
  fill(S`$\log_2x-\log_2 3=4$ donne $x=$ ____.`, ["48"], "x/3 = 16."),
  fill(S`La résolution de $\log x+\log(x-21)=2$ donne $x^2-21x-100=0$. La solution est $x=$ ____.`, ["25"], "(x − 25)(x + 4) = 0; rejette −4."),
  mc("Le graphique montre y = log₂ x + log₂(x − 2) et y = 3. Lis la solution.", "x = 4", ["x = 3", "x = −2", "x = 8"], "x(x − 2) = 8.", planeDoc({ view: { xmin: 1, xmax: 8, ymin: -2, ymax: 6 }, curves: [{ f: (x) => Math.log2(x) + Math.log2(x - 2), a: 2.01, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = 2 log x et y = log(x + 2). Combien de solutions l'équation 2 log x = log(x + 2) a-t-elle?", "une", ["deux", "aucune", "une infinité"], "x² = x + 2 donne 2 et −1; seule x = 2 convient.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 1.5 }, curves: [{ f: (x) => 2 * L(x), a: 0.05, color: "violet" }, { f: (x) => L(x + 2), a: -1.95, color: "blue" }], step: { x: 1, y: 0.5 } })),
  num(S`Résous $\log_3(x-4)=2-\log_3(x+4)$.`, 5, "x² − 16 = 9 ⇒ x = 5 (rejette −5)."),
];
