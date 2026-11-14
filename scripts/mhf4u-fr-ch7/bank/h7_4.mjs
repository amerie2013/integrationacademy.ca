// 7.4 Résolution d'équations logarithmiques — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.4 Résolution d'équations logarithmiques";
export const Q = [
  num(S`Résous $(\log x)^2-\log x-2=0$. Entre la plus grande racine.`, 100, "(u − 2)(u + 1) = 0 ⇒ x = 100 ou 0.1."),
  num(S`Résous $(\log x)^2-\log x-2=0$. Entre la plus petite racine (nombre décimal).`, 0.1, "log x = −1.", null, 0.0001),
  num(S`Résous $(\log_2x)^2=\log_2\left(x^3\right)$. Entre la plus grande racine.`, 8, "u² = 3u ⇒ u = 0 ou 3."),
  num(S`Résous $\log_3x+\log_{27}x=4$.`, 27, "(1 + 1/3) log₃ x = 4 ⇒ log₃ x = 3."),
  num(S`Résous $\log_2x+\log_4x+\log_{16}x=7$.`, 16, "(1 + 1/2 + 1/4) log₂ x = 7 ⇒ log₂ x = 4."),
  num(S`Résous $\log_x 8+\log_x 2=4$ ($x>0$, $x\ne1$).`, 2, "log_x 16 = 4 ⇒ x⁴ = 16."),
  num(S`Résous $\log(x^2-15x)=2$. Entre la racine positive.`, 20, "x² − 15x − 100 = 0 ⇒ (x − 20)(x + 5) = 0; les deux donnent x² − 15x = 100 > 0."),
  num(S`Résous $\log_2(x+1)+\log_2(x+3)=3$.`, 1, "x² + 4x + 3 = 8 ⇒ (x + 5)(x − 1) = 0."),
  num(S`Résous $\log_3(x+1)-\log_3(x-1)=\log_3 x$.`, 1 + Math.SQRT2, "x + 1 = x(x − 1) ⇒ x² − 2x − 1 = 0 ⇒ x = 1 + √2.", null, 0.001),
  num(S`Résous $2\log(x-1)=\log(x+5)$.`, 4, "x² − 2x + 1 = x + 5 ⇒ x² − 3x − 4 = 0 ⇒ x = 4 (rejette −1)."),
  num(S`Résous $\log_2(\log_3 x)=1$.`, 9, "log₃ x = 2."),
  num(S`Résous $\log_5(2^x+1)=1$.`, 2, "2ˣ + 1 = 5."),
  mc(S`$\log(x-a)+\log x=\log 2a^2$ a exactement une solution pour $a>0$. C'est…`, S`$x=2a$`, [S`$x=-a$`, S`$x=a$`, S`$x=a^2$`], "x² − ax − 2a² = 0 ⇒ (x − 2a)(x + a) = 0."),
  mc(S`Pourquoi rejette-t-on $x=-2$ dans $\log_3x+\log_3(x+5)=\log_3 6$, même si cette valeur vérifie $x(x+5)=6$?`, S`$\log_3(-2)$ n'existe pas`, [S`elle rend $x+5$ négatif`, S`$-2$ n'est pas une puissance de $3$`, S`la loi du produit ne fonctionne que pour les entiers`], "Les arguments doivent être positifs dans l'équation de DÉPART."),
  ms(S`Sélectionne toutes les valeurs qui sont solutions de $\log_2|x|=3$.`, ["8", "−8", "3", "1/8"], [0, 1], "|x| = 8."),
  tf(S`$\log(x^2)=2\log x$ pour tout $x\ne0$.`, false, "Pour x < 0, le membre de gauche existe, mais pas log x; log(x²) = 2 log|x|."),
  mc("Le graphique montre y = (log x)² − log x − 2. Où sont ses zéros?", "x = 0.1 et x = 100", ["x = −1 et x = 2", "x = 1 et x = 100", "x = 10 seulement"], "log x = −1 ou 2.", planeDoc({ view: { xmin: -5, xmax: 120, ymin: -3, ymax: 3 }, curves: [{ f: (x) => L(x) ** 2 - L(x) - 2, a: 0.05, color: "violet" }], step: { x: 10, y: 0.5 } })),
  mc("Le graphique montre y = log₂(x + 1) + log₂(x + 3) et y = 3. Lis la solution.", "x = 1", ["x = −5", "x = 3", "x = 2"], "(x + 1)(x + 3) = 8; rejette −5.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => Math.log2(x + 1) + Math.log2(x + 3), a: -0.99, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], vlines: [{ x: -1, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  mc("On montre les graphiques de y = log₃(x + 1) − log₃(x − 1) et de y = log₃ x. Leur point d'intersection se situe environ en…", "x ≈ 2.41", ["x ≈ 1.41", "x = 3", "x ≈ 0.41"], "x = 1 + √2.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 3 }, curves: [{ f: (x) => Math.log((x + 1) / (x - 1)) / Math.log(3), a: 1.02, color: "violet" }, { f: (x) => Math.log(x) / Math.log(3), a: 0.05, color: "blue" }], step: { x: 1, y: 0.5 } })),
  mc("Le graphique montre y = log(x² − 15x) et y = 2. Combien y a-t-il de solutions?", "deux", ["une", "aucune", "quatre"], "x = 20 et x = −5 donnent tous deux x² − 15x = 100.", planeDoc({ view: { xmin: -15, xmax: 30, ymin: -1, ymax: 3 }, curves: [{ f: (x) => L(x * x - 15 * x), b: -0.01, color: "violet" }, { f: (x) => L(x * x - 15 * x), a: 15.01, color: "violet" }], lines: [{ m: 0, b: 2, color: "blue", dash: true }], step: { x: 5, y: 0.5 } })),
];
