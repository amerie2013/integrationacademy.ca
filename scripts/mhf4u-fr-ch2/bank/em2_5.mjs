// 2.5 Résolution graphique d'inéquations polynomiales — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc } from "./fig.mjs";

export const E = [
  mc(String.raw`Écris $x\ge2$ en notation d'intervalle.`, String.raw`$[2,\infty)$`, [String.raw`$(2,\infty)$`, String.raw`$[2,\infty]$`, String.raw`$(-\infty,2]$`], "Borne incluse : crochet; ∞ : parenthèse."),
  mc(String.raw`Écris $x\lt-1$ en notation d'intervalle.`, String.raw`$(-\infty,-1)$`, [String.raw`$(-\infty,-1]$`, String.raw`$(-1,\infty)$`, String.raw`$[-\infty,-1)$`], "Borne exclue."),
  mc(String.raw`Écris $(0,5]$ sous forme d'inégalité.`, String.raw`$0\lt x\le5$`, [String.raw`$0\le x\lt5$`, String.raw`$0\le x\le5$`, String.raw`$0\lt x\lt5$`], "( exclut 0, ] inclut 5."),
  tf("L'infini s'écrit avec un crochet.", false, "∞ n'est jamais atteint : toujours une parenthèse."),
  mc("Utilise le graphique de f(x) = (x + 1)(x − 3) pour résoudre f(x) < 0.", String.raw`$(-1,3)$`, [String.raw`$(-\infty,-1)\cup(3,\infty)$`, String.raw`$[-1,3]$`, String.raw`$(-3,1)$`], "Sous l'axe entre les zéros.", graph((x) => (x + 1) * (x - 3), { xmin: -3, xmax: 5, ymin: -5, ymax: 6 })),
  mc("Utilise le graphique de f(x) = −(x − 2)(x + 2) pour résoudre f(x) ≥ 0.", String.raw`$[-2,2]$`, [String.raw`$(-2,2)$`, String.raw`$(-\infty,-2]\cup[2,\infty)$`, String.raw`$[0,4]$`], "Sur l'axe ou au-dessus entre les zéros.", graph((x) => -(x - 2) * (x + 2), { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 })),
  tf("f(x) > 0 là où le graphique de f est au-dessus de l'axe des x.", true, "Ordonnées positives."),
  num(String.raw`Combien d'intervalles séparés y a-t-il dans la solution $x\lt-3$ ou $x>1$?`, 2, "Deux morceaux."),
  mc(String.raw`Résous $x^2>4$.`, String.raw`$x\lt-2$ ou $x>2$`, [String.raw`$-2\lt x\lt2$`, String.raw`$x>2$`, String.raw`$x>\pm2$`], "La parabole est au-dessus de y = 4 à l'extérieur de ±2."),
  tf("Une inéquation stricte inclut ses bornes.", false, "< et > les excluent."),
  mc("Quel symbole réunit deux intervalles séparés?", String.raw`$\cup$`, [String.raw`$\cap$`, String.raw`$\subset$`, String.raw`$\in$`], "L'union."),
  num(String.raw`Quel est le plus petit entier de $(-2.5,4]$?`, -2, "−2.5 est exclu; −2 vient ensuite."),
  num(String.raw`Quel est le plus grand entier de $[-3,6)$?`, 5, "6 est exclu."),
  mc(String.raw`Résous $(x-1)(x-4)\le0$.`, String.raw`$[1,4]$`, [String.raw`$(1,4)$`, String.raw`$(-\infty,1]\cup[4,\infty)$`, String.raw`$[-4,-1]$`], "Entre les zéros, inclus."),
  tf("La solution de f(x) > g(x) correspond à l'endroit où le graphique de f est au-dessus de celui de g.", true, "Compare les hauteurs."),
  num(String.raw`Combien d'entiers y a-t-il dans $[1,5]$?`, 5, "1, 2, 3, 4, 5."),
  mc(String.raw`Écris « $x\le-2$ ou $x\ge3$ » en notation d'intervalle.`, String.raw`$(-\infty,-2]\cup[3,\infty)$`, [String.raw`$[-2,3]$`, String.raw`$(-\infty,-2)\cup(3,\infty)$`, String.raw`$(-2,3)$`], "Deux morceaux extérieurs, bornes incluses."),
  tf(String.raw`$x^3>0$ exactement lorsque $x>0$.`, true, "Les cubes conservent le signe."),
  mc(String.raw`Résous $x^3\lt0$.`, String.raw`$x\lt0$`, [String.raw`$x>0$`, String.raw`$x\ne0$`, String.raw`tout réel x`], "Les nombres négatifs ont des cubes négatifs."),
  fill("Les bornes de la solution de f(x) > 0 sont les ___ de f.", ["zéros", "zeros", "racines", "abscisses à l'origine", "zeroes", "roots", "x-intercepts"], "Là où f change de signe."),
];

export const M = [
  mc("Utilise le graphique de f(x) = x(x − 3)(x + 2) pour résoudre f(x) ≥ 0.", String.raw`$[-2,0]\cup[3,\infty)$`, [String.raw`$(-\infty,-2]\cup[0,3]$`, String.raw`$[3,\infty)$`, String.raw`$[-2,3]$`], "Au-dessus de l'axe entre −2 et 0, et après 3.", graph((x) => x * (x - 3) * (x + 2), { xmin: -3, xmax: 4, ymin: -12, ymax: 10 })),
  mc(String.raw`Résous $(x+1)^2(x-2)>0$.`, String.raw`$x>2$`, [String.raw`$x>-1$`, String.raw`$-1\lt x\lt2$`, String.raw`$x\lt-1$ ou $x>2$`], "Le facteur au carré ne change jamais le signe."),
  num(String.raw`Combien d'entiers vérifient $(x+2)(x-3)\lt0$?`, 4, "−1, 0, 1, 2."),
  mc(String.raw`Résous $x^4-1\le0$.`, String.raw`$[-1,1]$`, [String.raw`$(-1,1)$`, String.raw`$(-\infty,-1]\cup[1,\infty)$`, String.raw`$[0,1]$`], "(x² − 1)(x² + 1) ≤ 0 ⇔ x² ≤ 1."),
  mc(String.raw`Résous $x^3\ge x^2$.`, String.raw`$\{0\}\cup[1,\infty)$`, [String.raw`$[1,\infty)$`, String.raw`$[0,1]$`, String.raw`$(-\infty,0]\cup[1,\infty)$`], "x²(x − 1) ≥ 0 : x = 0 ou x ≥ 1."),
  num(String.raw`Quel est le plus petit entier positif tel que $x^3>10$?`, 3, "2³ = 8, 3³ = 27."),
  mc("Utilise les graphiques de y = x² et de y = x + 2 pour résoudre x² ≤ x + 2.", String.raw`$[-1,2]$`, [String.raw`$(-\infty,-1]\cup[2,\infty)$`, String.raw`$(-1,2)$`, String.raw`$[-2,1]$`], "La parabole est sur la droite ou en dessous entre les points d'intersection.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => x + 2, color: "green" }], step: { x: 1, y: 1 } })),
  mc(String.raw`Résous $-(x-1)(x-3)(x-5)>0$.`, String.raw`$x\lt1$ ou $3\lt x\lt5$`, [String.raw`$1\lt x\lt3$ ou $x>5$`, String.raw`$x>5$`, String.raw`$1\lt x\lt5$`], "Coefficient dominant négatif : positif tout à gauche."),
  num(String.raw`Combien de zéros réels $x^3-5x+1$ a-t-il? (Utilise les signes de $f(-3)$, $f(-2)$, $f(0)$, $f(1)$, $f(3)$.)`, 3, "Signes −, +, +, −, + : trois changements de signe."),
  mc(String.raw`Résous $x^2(x-4)\lt0$.`, String.raw`$x\lt4$, $x\ne0$`, [String.raw`$0\lt x\lt4$`, String.raw`$x\lt4$`, String.raw`$x\lt0$`], "Négatif pour x < 4, sauf au zéro de contact 0."),
  num(String.raw`Combien d'entiers de $-5$ à $5$ vérifient $x^4-16>0$?`, 6, "|x| > 2 : ±3, ±4, ±5."),
  tf("Si f n'a des zéros qu'en 1 et en 3 et que f(2) < 0, alors f(x) < 0 pour tout x dans (1, 3).", true, "Le signe ne peut pas changer entre deux zéros consécutifs."),
  mc(String.raw`Résous $(x-2)^3\ge0$.`, String.raw`$x\ge2$`, [String.raw`$x\le2$`, String.raw`tout réel x`, String.raw`$x=2$`], "Une puissance impaire conserve le signe de x − 2."),
  num(String.raw`La hauteur d'une balle est $h(t)=-5t^2+30t$. Pendant combien de secondes est-elle à au moins 25 m de hauteur?`, 4, "t² − 6t + 5 ≤ 0 : 1 ≤ t ≤ 5."),
  mc("Utilise le graphique pour résoudre x³ − 4x ≤ 0.", String.raw`$(-\infty,-2]\cup[0,2]$`, [String.raw`$[-2,0]\cup[2,\infty)$`, String.raw`$[-2,2]$`, String.raw`$(-\infty,0]$`], "Sur l'axe ou en dessous à gauche de −2 et entre 0 et 2.", graph((x) => x ** 3 - 4 * x, { xmin: -3, xmax: 3, ymin: -6, ymax: 6 })),
  num(String.raw`Trouve la racine positive de $x^3+x-3=0$ (2 décimales) — une borne pour $x^3+x-3>0$.`, 1.21, "Technologie : x ≈ 1.21.", null, 0.01),
  mc(String.raw`Résous $x^4+1>0$.`, "tous les nombres réels", ["aucune solution", String.raw`$x>-1$`, String.raw`$x\ne0$`], "x⁴ + 1 ≥ 1."),
  num(String.raw`Quel est le plus grand entier tel que $x^3-27\lt0$?`, 2, "x < 3."),
  tf(String.raw`La solution de $x^2\ge0$ est l'ensemble de tous les nombres réels.`, true, "Les carrés ne sont jamais négatifs."),
  mc(String.raw`Le profit est $P(x)=-x(x-4)(x-8)$ pour $x\ge0$. Quand a-t-on $P(x)>0$?`, String.raw`$4\lt x\lt8$`, [String.raw`$0\lt x\lt4$`, String.raw`$x>8$`, String.raw`$0\lt x\lt8$`], "Coefficient dominant négatif : +, −, +, − à partir de la gauche; limite-toi à x ≥ 0."),
];
