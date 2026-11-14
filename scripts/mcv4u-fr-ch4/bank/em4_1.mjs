// 4.1 Taux de variation instantanés des fonctions sinusoïdales — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  num(S`Quelle est la pente de $y=\sin x$ en $x=4\pi$ ?`, 1, "Comme en 0 : cos 4π = 1."),
  num(S`Quelle est la pente de $y=\sin x$ en $x=\frac{5\pi}{2}$ ?`, 0, "Un sommet : cos(5π/2) = 0."),
  num(S`Quelle est la pente de $y=\cos x$ en $x=\frac{3\pi}{2}$ ?`, 1, "−sin(3π/2) = 1."),
  mc("Où le graphique de y = sin x est-il le plus abrupt ?", "là où il traverse son axe", ["à ses sommets", "à ses creux", "là où il est le plus loin de l'axe des x"], "Pente ±1 là où la courbe traverse son axe."),
  tf(S`La pente de $y=\sin x$ à un sommet est 0.`, true, "La tangente y est horizontale."),
  num(S`Évalue $\frac{\sin(0.01)}{0.01}$ (en radians) à 4 décimales près.`, 1, "0.99998…", null, 0.0001),
  mc(S`Pour un petit $h$ en radians, $\sin h$ vaut environ :`, S`$h$`, [S`$1$`, S`$0$`, S`$h^2$`], "sin h / h → 1."),
  num(S`Quelle est la pente de $y=\sin x+7$ en $x=0$ ?`, 1, "Une translation verticale ne change pas les pentes."),
  tf(S`Si $x$ est en degrés, la pente de $y=\sin x$ en $x=0$ est 1.`, false, "Elle vaut π/180 ≈ 0.0175."),
  num(S`Quelle est la pente de $y=\cos x$ en $x=-\frac\pi2$ ?`, 1, "−sin(−π/2) = 1."),
  fill(S`Les pentes de $y=\sin x$ (en radians) se trouvent sur le graphique de y = ___.`, ["cos x", "cosx", "cos(x)"], "Pente 1 en 0, pente 0 en π/2…"),
  num("On a tracé la tangente à y = sin x en x = π. Quelle est sa pente ?", -1, "cos π = −1.", graph(Math.sin, { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, [P(PI, 0)], { more: [{ f: (x) => -(x - PI), color: "green", a: PI - 1.2, b: PI + 1.2 }], step: { x: 0.5, y: 0.5 } })),
  num(S`Évalue $\frac{\cos(0.001)-1}{0.001}$ à 4 décimales près.`, -0.0005, "Proche de 0.", null, 0.0001),
  mc(S`Sur $[0,2\pi]$, où la pente de $y=\sin x$ est-elle négative ?`, S`sur $\left(\frac\pi2,\frac{3\pi}2\right)$`, [S`sur $(0,\pi)$`, S`sur $(\pi,2\pi)$`, S`nulle part`], "cos x < 0 sur cet intervalle."),
  num(S`Trouve le taux de variation moyen de $y=\sin x$ sur $[0,\pi]$.`, 0, "sin π − sin 0 = 0."),
  tf(S`La pente de $y=\sin x$ n'est jamais supérieure à 1.`, true, "cos x ≤ 1."),
  num(S`Quelle est la pente de $y=\cos x$ en $x=\frac\pi6$ ?`, -0.5, "−sin(π/6).", null, 0.0001),
  num("On a tracé la tangente à y = cos x en x = π/2. Quelle est sa pente ?", -1, "−sin(π/2).", graph(Math.cos, { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, [P(PI / 2, 0)], { more: [{ f: (x) => -(x - PI / 2), color: "green", a: PI / 2 - 1.1, b: PI / 2 + 1.1 }], step: { x: 0.5, y: 0.5 } })),
  mc(S`Où, dans $(0,2\pi)$, $y=\cos x$ a-t-elle une pente nulle ?`, S`en $x=\pi$`, [S`en $x=\frac\pi2$`, S`en $x=\frac{3\pi}2$`, "nulle part"], "À son creux."),
  num(S`En combien de valeurs de $x$ dans $[0,2\pi]$ $y=\sin x$ a-t-elle une pente de 1 ?`, 2, "x = 0 et x = 2π."),
];

export const M = [
  num(S`Estime la pente de $y=\sin x$ en $x=0.5$ (3 décimales).`, 0.878, "cos 0.5.", null, 0.002),
  num(S`Estime la pente de $y=\cos x$ en $x=1$ (3 décimales).`, -0.841, "−sin 1.", null, 0.002),
  num(S`Trouve le taux de variation moyen de $y=\cos x$ sur $[0,\pi]$ (4 décimales).`, -0.6366, "(−1 − 1)/π.", null, 0.0005),
  num(S`Quelle est la pente de $y=3\sin x$ en $x=0$ ?`, 3, "Tripler les hauteurs triple les pentes."),
  mc(S`Les pentes de $y=\cos x$ se trouvent sur quelle courbe ?`, S`$y=-\sin x$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=-\cos x$`], "Pente 0 en 0, pente −1 en π/2."),
  num(S`En quelle valeur de $x$ dans $(0,\pi)$ la pente de $y=\sin x$ vaut-elle $-\frac12$ ? (4 décimales)`, 2.0944, "cos x = −½ : x = 2π/3.", null, 0.0005),
  num(S`Quelle est la pente de $y=\sin x$ en $x=\frac\pi4$ (4 décimales) ?`, 0.7071, "cos(π/4).", null, 0.0005),
  tf(S`Il n'existe aucune valeur de $x$ où les pentes de $\sin x$ et de $\cos x$ sont toutes deux nulles.`, true, "cos x et sin x ne s'annulent jamais en même temps."),
  num(S`En mode degrés, quelle est la pente de $y=\sin x$ en $x=0$ (5 décimales) ?`, 0.01745, "π/180.", null, 0.00002),
  num("La profondeur de l'eau est d(t) = 2 sin(πt/6) + 4 m (graphique ci-contre). Estime le taux de variation en t = 0 (4 décimales).", 1.0472, "2 · π/6.", graph((t) => 2 * Math.sin((PI / 6) * t) + 4, { xmin: 0, xmax: 24, ymin: 0, ymax: 7 }, [P(0, 4)], { a: 0, b: 24, step: { x: 2, y: 1 } }), 0.001),
  num(S`Quelle est la pente de $y=\sin x$ en $x=-\pi$ ?`, -1, "cos(−π)."),
  mc(S`Quelle est la tangente à $y=\sin x$ en $x=\frac\pi2$ ?`, S`$y=1$`, [S`$y=x$`, S`$y=x-\frac\pi2$`, S`$x=\frac\pi2$`], "Horizontale au sommet."),
  num(S`Trouve la pente de la sécante à $y=\sin x$ de $x=\frac\pi6$ à $x=\frac\pi2$ (4 décimales).`, 0.4775, "(1 − ½)/(π/3).", null, 0.0005),
  num(S`Combien de tangentes horizontales $y=\sin x$ a-t-elle sur $[0,4\pi]$ ?`, 4, "π/2, 3π/2, 5π/2, 7π/2."),
  tf("Un quotient de différence centré est habituellement plus précis qu'un quotient d'un seul côté avec le même h.", true, "Les erreurs des deux côtés se compensent."),
  num(S`Quelle est la pente de $y=\cos x$ en $x=\frac{2\pi}3$ (4 décimales) ?`, -0.866, "−sin(2π/3).", null, 0.0005),
  num("Les graphiques de y = sin x et de y = cos x sont représentés. En quelle valeur de x dans (0, π/2) la pente de sin x est-elle égale à la valeur de sin x ? (4 décimales)", 0.7854, "cos x = sin x en π/4.", graph(Math.sin, { xmin: 0, xmax: 3.3, ymin: -1.2, ymax: 1.2 }, [P(PI / 4, Math.SQRT1_2)], { more: [{ f: Math.cos, color: "blue" }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Évalue $\frac{\sin(0.1)}{0.1}$ à 5 décimales près.`, 0.99833, "Radians.", null, 0.00001),
  mc("Pourquoi le calcul différentiel avec les fonctions trigonométriques utilise-t-il les radians ?", "parce qu'alors sin h / h → 1, donc (sin x)′ = cos x exactement", ["parce que les degrés ne sont pas des angles", "parce que les calculatrices l'exigent", "parce que les radians sont plus grands"], "En degrés, un facteur π/180 apparaît."),
  num(S`Quelle est la pente de $y=2+\cos x$ en $x=\frac\pi2$ ?`, -1, "−sin(π/2)."),
];
