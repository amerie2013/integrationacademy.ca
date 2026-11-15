// 3.6 Les zéros et le discriminant — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_6.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 8 };

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Pour quelle valeur non nulle de $k$ l'équation $x^2+(k+2)x+2k+1=0$ a-t-elle exactement une racine?`, 4, "D = k² − 4k = 0."),
  num(String.raw`Combien d'entiers $k$ font de $kx^2+4x+k=0$ une équation du second degré à deux racines réelles?`, 2, "16 − 4k² > 0, k ≠ 0 : k = ±1."),
  mc(String.raw`Combien de racines réelles l'équation $x^2-2mx+m^2-1=0$ a-t-elle?`, "toujours deux, pour toute valeur de m", ["toujours une", "aucune pour certaines valeurs de m", "cela dépend du signe de m"], "D = 4m² − 4m² + 4 = 4."),
  num(String.raw`$y=x^2+bx+9$ touche l'axe des x et $b<0$. Trouve $b$.`, -6, "b² = 36."),
  num(String.raw`$h(t)=-4.9t^2+20t+2$. Quelle est la plus grande hauteur qu'il peut atteindre (au centième)? Utilise le discriminant de $h(t)=H$.`, 2 + 400 / 19.6, "400 − 19.6(H − 2) ≥ 0.", null, 0.01),
  num(String.raw`Pour quelle valeur de $c$ les zéros de $y=c-2(x+1)^2$ sont-ils à 4 unités l'un de l'autre?`, 8, "Zéros −1 ± √(c/2) : 2√(c/2) = 4.", graph((x) => 8 - 2 * (x + 1) ** 2, { xmin: -6, xmax: 4, ymin: -6, ymax: 10 }, [P(-3, 0), P(1, 0), P(-1, 8)])),
  tf("Si ac < 0, l'équation ax² + bx + c = 0 a deux racines réelles.", true, "D = b² − 4ac > 0."),
  num(String.raw`Pour combien d'entiers $m$ de $-10$ à $10$ l'équation $mx^2-6x+3=0$ a-t-elle deux racines réelles?`, 12, "36 − 12m > 0 → m < 3, m ≠ 0 : −10, …, 2 sauf 0."),
  num(String.raw`Le discriminant de $x^2-(a+b)x+ab$ se simplifie en $(a-b)^2$. Évalue-le pour $a=7$, $b=2$.`, 25, "(7 − 2)²."),
  num("Le graphique montre y = a(x − 2)² + 3 pour plusieurs valeurs de a. Combien de zéros le membre où a = −1.5 a-t-il?", 2, "a < 0 et k > 0.", planeDoc({ view: V8, curves: [-1.5, -0.5, 1].map((a, i) => ({ f: (x) => a * (x - 2) ** 2 + 3, color: ["red", "amber", "blue"][i] })), points: [P(2, 3)] })),
  num(String.raw`Pour quelle valeur de $k$ la fonction $y=x^2-kx+k-1$ a-t-elle une racine double?`, 2, "D = (k − 2)²."),
  mc(String.raw`Pour tout nombre réel $k$, l'équation $x^2+kx+k^2+1=0$ a…`, "aucune racine réelle", ["deux racines réelles", "une racine réelle", "des racines qui dépendent de k"], "D = −3k² − 4 < 0."),
  num(String.raw`Pour quelle valeur de $c$ les zéros de $x^2-6x+c$ sont-ils à 4 unités l'un de l'autre?`, 5, "Distance 2√(9 − c) = 4."),
  num("La droite horizontale y = k touche y = x² − 4x + 7 exactement une fois. Trouve k.", 3, "Le sommet (2, 3).", graph((x) => x * x - 4 * x + 7, V8, [P(2, 3)], { lines: [{ m: 0, b: 3, color: "amber", dash: true }] })),
  num(String.raw`Pour quelle valeur positive de $p$ l'équation $2x^2-px+8=0$ a-t-elle des racines égales?`, 8, "p² = 64."),
  num(String.raw`La hauteur d'une fusée est $h(t)=-5t^2+40t$. Quelle est la plus petite hauteur entière qu'elle n'atteint jamais?`, 81, "Maximum 80."),
  tf("Une équation du second degré à coefficients rationnels peut avoir exactement une racine irrationnelle.", false, "Les racines irrationnelles vont par paires conjuguées."),
  num(String.raw`Combien des expressions $x^2+3x+1$, $x^2+2x+1$, $x^2+x+1$, $x^2+1$ ont des zéros réels?`, 2, "D = 5, 0, −3, −4."),
  num("La droite y = k coupe y = −(x − 1)² + 5 deux fois. Quel est le plus grand entier k?", 4, "Deux fois lorsque k < 5.", graph((x) => -((x - 1) ** 2) + 5, V8, [P(1, 5)])),
  num(String.raw`Trouve la somme de toutes les valeurs de $k$ pour lesquelles $x^2+2kx+k+6=0$ a une racine double.`, 1, "4k² − 4(k + 6) = 0 → k = 3, −2."),
];
