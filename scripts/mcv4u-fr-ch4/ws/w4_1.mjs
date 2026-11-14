// MCV4U-FR Fiche 4.1 — Taux de variation instantanés des fonctions sinusoïdales (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "Un quotient de différence à droite", q: S`Estime la pente de $y=\sin x$ en $x=\frac\pi4$ avec $h=0.001$.`,
    steps: [S`$\frac{\sin(\frac\pi4+0.001)-\sin\frac\pi4}{0.001}\approx0.70675$.`, S`Comparaison : $\cos\frac\pi4\approx0.70711$.`], ans: "environ 0.7068, très proche de cos(π/4)" },
  { title: "Un quotient de différence centré", q: S`Estime la pente de $y=\cos x$ en $x=\frac\pi6$ à l'aide du quotient centré $\frac{f(a+h)-f(a-h)}{2h}$, avec $h=0.001$.`,
    steps: [S`$\frac{\cos(\frac\pi6+0.001)-\cos(\frac\pi6-0.001)}{0.002}\approx-0.50000$.`, S`Comparaison : $-\sin\frac\pi6=-0.5$.`], ans: S`$-0.5$` },
  { title: "Un tableau de pentes", q: S`À l'aide de $(\sin x)'=\cos x$, dresse le tableau des pentes de $y=\sin x$ en $x=\frac\pi6,\frac\pi3,\frac{2\pi}3,\frac{5\pi}6$.`,
    steps: [S`$\cos\frac\pi6\approx0.866$, $\cos\frac\pi3=0.5$, $\cos\frac{2\pi}3=-0.5$, $\cos\frac{5\pi}6\approx-0.866$.`], ans: "0.866, 0.5, −0.5, −0.866 : la courbe monte, puis descend après π/2" },
  { title: "La deuxième limite clé", q: S`Évalue $\frac{\cos h-1}{h}$ pour $h=0.1,\ 0.01,\ 0.001$ et donne la limite.`,
    fig: F({ view: { xmin: -1, xmax: 1, ymin: -0.6, ymax: 0.6 }, curves: [{ f: (h) => (Math.abs(h) < 1e-6 ? 0 : (Math.cos(h) - 1) / h) }], step: { x: 0.25, y: 0.2 } }),
    steps: [S`$-0.049958$, $-0.005000$, $-0.000500$.`], ans: S`$\lim_{h\to0}\frac{\cos h-1}{h}=0$` },
  { title: "Degrés ou radians", q: S`Si $x$ était mesuré en degrés, quelle serait la pente de $y=\sin x$ en $x=0$ ?`,
    steps: [S`$\sin(x^\circ)=\sin\left(\frac{\pi x}{180}\right)$; près de 0, cela vaut environ $\frac{\pi}{180}x$.`], ans: S`$\frac{\pi}{180}\approx0.01745$ — c'est pourquoi le calcul différentiel utilise les radians` },
  { title: "Où la pente est positive", q: S`Sur $[0,2\pi]$, où la pente de $y=\sin x$ est-elle positive ?`,
    fig: F({ view: { xmin: -0.2, xmax: 6.6, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin, a: 0, b: PI / 2, color: "green" }, { f: Math.sin, a: PI / 2, b: 1.5 * PI, color: "red" }, { f: Math.sin, a: 1.5 * PI, b: 2 * PI, color: "green" }], points: [pt(PI / 2, 1, false), pt(1.5 * PI, -1, false)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`Pente $=\cos x\gt0$ sur $\left[0,\frac\pi2\right)$ et sur $\left(\frac{3\pi}2,2\pi\right]$.`], ans: S`sur $\left(0,\frac\pi2\right)$ et sur $\left(\frac{3\pi}2,2\pi\right)$` },
  { title: "Une translation verticale", q: S`Trouve la pente de $y=\sin x+1$ en $x=\frac\pi3$.`,
    steps: [S`Une translation vers le haut ne change pas les pentes : $\cos\frac\pi3$.`], ans: S`$\frac12$` },
  { title: "Un poids qui oscille", q: S`Le déplacement d'un poids est $x(t)=12\sin t$ cm. Estime sa vitesse à $t=2$ s.`,
    fig: F({ view: { xmin: 0, xmax: 6.5, ymin: -14, ymax: 14 }, curves: [{ f: (t) => 12 * Math.sin(t), a: 0, b: 6.5 }, { f: (t) => 12 * Math.sin(2) + 12 * Math.cos(2) * (t - 2), color: "green", a: 0.8, b: 3.2 }], points: [pt(2, 12 * Math.sin(2))], step: { x: 0.5, y: 2 } }),
    steps: [S`Pente $=12\cos2\approx12(-0.4161)$.`], ans: "environ −4.99 cm/s (le poids revient vers le centre)" },
  { title: "Moyen ou instantané", q: S`Pour $y=\cos x$, compare le taux de variation moyen sur $\left[0,\frac\pi2\right]$ avec le taux instantané en $x=\frac\pi4$.`,
    fig: F({ view: { xmin: -0.2, xmax: 1.8, ymin: -0.3, ymax: 1.2 }, curves: [{ f: Math.cos, a: 0, b: 1.8 }, { f: (x) => 1 - (2 / PI) * x, color: "amber", a: 0, b: PI / 2 }, { f: (x) => Math.cos(PI / 4) - Math.sin(PI / 4) * (x - PI / 4), color: "green", a: 0.2, b: 1.4 }], points: [pt(PI / 4, Math.cos(PI / 4))], step: { x: 0.25, y: 0.25 } }),
    steps: [S`Moyen : $\frac{0-1}{\pi/2}\approx-0.6366$.`, S`Instantané : $-\sin\frac\pi4\approx-0.7071$.`], ans: "−0.637 (sécante) contre −0.707 (tangente)" },
];

const PROBLEMS = [
  { level: 1, q: S`Donne la pente de $y=\sin x$ en $x=\frac{3\pi}2$.`, recap: "Un creux.", ans: "0" },
  { level: 1, q: S`Donne la pente de $y=\cos x$ en $x=\pi$.`, recap: "Un creux du cosinus.", ans: "0" },
  { level: 1, q: S`Donne la pente de $y=\sin x$ en $x=2\pi$.`, recap: "Comme en 0.", ans: "1" },
  { level: 2, q: S`Estime la pente de $y=\sin x$ en $x=2$ (en radians) avec $h=0.001$.`, recap: "Compare avec cos 2.", ans: S`$\approx-0.416$` },
  { level: 2, q: S`Estime la pente de $y=\cos x$ en $x=\frac\pi2$.`, recap: "La courbe traverse son axe en descendant.", ans: S`$-1$` },
  { level: 2, q: S`Évalue $\frac{\sin(0.001)}{0.001}$ à 8 décimales près. Quelle limite ce résultat suggère-t-il ?`, recap: "Radians.", ans: S`$0.99999983$; la limite est 1` },
  { level: 2, q: S`Sur $[0,2\pi]$, où la pente de $y=\cos x$ est-elle positive ?`, recap: "−sin x > 0.", ans: S`sur $(\pi,2\pi)$` },
  { level: 2, q: S`Place sur la grille les pentes de $y=\cos x$ aux multiples de $\frac\pi4$, puis relie-les. Nomme la courbe obtenue.`, recap: "Pentes 0, −0.71, −1, …", ans: S`$y=-\sin x$`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -1.5, ymax: 1.5 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`Montre algébriquement que $\lim_{h\to0}\frac{\cos h-1}{h}=0$ en multipliant par $\frac{\cos h+1}{\cos h+1}$.`, recap: "cos²h − 1 = −sin²h.", ans: S`$\frac{-\sin^2h}{h(\cos h+1)}=-\frac{\sin h}{h}\cdot\frac{\sin h}{\cos h+1}\to-1\cdot\frac02=0$` },
  { level: 3, space: 5, q: S`Utilise $\cos(x+h)=\cos x\cos h-\sin x\sin h$ pour montrer que la pente de $\cos x$ est $-\sin x$.`, recap: "Sépare en deux limites clés.", ans: S`$\cos x\cdot\frac{\cos h-1}{h}-\sin x\cdot\frac{\sin h}{h}\to-\sin x$` },
  { level: 3, space: 5, q: S`Trouve toutes les valeurs de $x$ dans $[0,2\pi]$ où la tangente à $y=\sin x$ est parallèle à la droite $y=-x$.`, recap: "Pente cos x = −1.", ans: S`$x=\pi$` },
  { level: 3, space: 5, q: S`La hauteur d'une palette de roue à aubes est $h(t)=2\sin\left(\frac\pi2t\right)+3$ m. Estime à quelle vitesse elle monte à $t=1$ s et à $t=2$ s, et explique ces valeurs.`, recap: "Pente π cos(πt/2).", ans: "0 m/s à t = 1 (le haut de sa trajectoire); environ −3.14 m/s à t = 2 (à l'axe, en descendant le plus vite)" },
  { level: 3, space: 5, q: S`Trace la tangente à $y=\sin x$ en $x=\pi$ et montre qu'elle traverse la courbe en ce point. Quel genre de point est $(\pi,0)$ ?`, recap: "Tangente y = −(x − π).", ans: S`$y=-(x-\pi)$; la courbe est au-dessus de la tangente d'un côté et au-dessous de l'autre : c'est un point d'inflexion`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -2, ymax: 2 }, { x: 0.5, y: 0.5 }) },
];

export const WS = {
  code: "4.1",
  title: "Taux de variation instantanés des fonctions sinusoïdales",
  bigideas: S`Le taux de variation instantané de $\sin x$ peut être estimé à l'aide de quotients de différence avec un petit $h$ (en radians). En reportant ces pentes sur un graphique, on voit qu'elles suivent $\cos x$; pour $\cos x$, les pentes suivent $-\sin x$. Deux limites rendent ce résultat exact : $\frac{\sin h}{h}\to1$ et $\frac{\cos h-1}{h}\to0$ lorsque $h\to0$. Une sinusoïde est la plus abrupte là où elle traverse son axe, et sa pente est nulle à ses sommets et à ses creux.`,
  goals: ["Estimer les pentes de sin et de cos.", "Reconnaître les graphiques des pentes.", "Évaluer les limites clés.", "Expliquer l'importance des radians."],
  curriculum: "A2.4",
  vocab: [["Radian", "$\\pi$ rad $=180^\\circ$"], ["Limite clé", "$\\frac{\\sin h}{h}\\to1$"], ["Quotient centré", "$\\frac{f(a+h)-f(a-h)}{2h}$"]],
  hook: S`Esquisse $y=\sin x$ sur un cycle. Sans aucun calcul, marque les endroits où sa tangente est horizontale et ceux où elle est la plus abrupte.`,
  concepts: [
    ["1. Les pentes du sinus", S`Les pentes de $\sin x$ (violet) se trouvent sur $\cos x$ (bleu) :
${F({ view: { xmin: -0.2, xmax: 6.6, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin, a: 0, b: 2 * PI }, { f: Math.cos, a: 0, b: 2 * PI, color: "blue" }], step: { x: 0.5, y: 0.5 } })}`],
    ["2. Estimer", S`Utilise $h=0.001$ en mode radians, ou un quotient centré.`],
    ["3. Les limites", S`$\frac{\sin h}{h}\to1$, $\frac{\cos h-1}{h}\to0$ ($h$ en radians).`],
  ],
  tips: ["Mode radians !", "La pente de sin x n'est pas sin x.", "Les sommets et les creux ont une pente nulle.", "La pente est maximale à l'axe.", "Une translation verticale ne change pas les pentes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
