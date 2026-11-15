// 1.1 Relations et fonctions — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, sideways, circ } from "./fig.mjs";

export const TOPIC = "1.1 Relations et fonctions";
export const Q = [
  num(String.raw`La droite $x=k$ coupe $x=y^2-8y+12$ exactement une fois. Trouve $k$.`, -4, "x = (y − 4)² − 4 : sommet (−4, 4)."),
  num(String.raw`Pour combien d'entiers $k$ de $-10$ à $10$ la droite $x=k$ coupe-t-elle $x=-(y-1)^2+9$ deux fois?`, 19, "Ouverte vers la gauche à partir de (9, 1) : deux fois pour k < 9, soit k = −10, …, 8."),
  mc(String.raw`Pour quelles valeurs de $a$ l'ensemble $\{(a,1),(2,a),(a^2,3)\}$ est-il une fonction?`, String.raw`tout $a$ sauf $0,1,2,\pm\sqrt2$`, [String.raw`tout $a$ sauf $2$`, String.raw`tout $a$ sauf $0$ et $1$`, "aucune valeur de a"], "a = 2 : (2, 1),(2, 2). a = 0 ou 1 : a² = a avec les sorties 1 et 3. a² = 2 : (2, a),(2, 3) avec a ≠ 3."),
  num("Combien d'entiers k font que la droite x = k coupe le cercle deux fois?", 5, "(x − 2)² + y² = 9 : deux points lorsque −1 < k < 5 : k = 0, 1, 2, 3, 4.", planeDoc({ view: { xmin: -3, xmax: 7, ymin: -5, ymax: 5 }, curves: circ(3, 2, 0), points: [P(2, 0, "C")] })),
  ms("Lesquelles définissent y comme une fonction de x? Choisis toutes les bonnes réponses.", [String.raw`$y=\sqrt{x^2}$`, String.raw`$y^2=x^2$`, String.raw`$y=\pm\sqrt x$`, String.raw`$|y|=x$`, String.raw`$y=\frac{x}{|x|}$`], [0, 4], "√(x²) = |x|; x/|x| vaut ±1 selon le signe de x — une seule valeur chaque fois. Les autres donnent deux sorties."),
  mc(String.raw`On place les points $(t^2,t^3)$ pour tout réel $t$. $y$ est-il une fonction de $x$?`, "non — t = 1 et t = −1 donnent (1, 1) et (1, −1)", ["oui — t³ est un à un", "oui — chaque t donne un seul point", "non — x n'est jamais négatif"], "Des valeurs opposées de t ont le même x = t², mais pas le même y."),
  num(String.raw`Pour la relation $x^2+y^2=2x+8$, quelle est la plus grande valeur de y?`, 3, "(x − 1)² + y² = 9 : rayon 3."),
  tf("Si f est une fonction, alors échanger x et y dans chaque couple donne toujours une fonction.", false, "y = x² est une fonction; x = y² n'en est pas une."),
  mc("Le graphique formé de deux demi-droites partant de l'origine est-il une fonction?", "non — chaque x > 0 a deux sorties", ["oui — chaque demi-droite est une fonction", "oui — il passe une seule fois par l'origine", "non — x = 0 n'a aucune sortie"], "x = 1 coupe les deux demi-droites.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 5 }, segs: [{ pts: [[0, 0], [5, 5]] }, { pts: [[0, 0], [5, -5]] }] })),
  num(String.raw`La droite $x=k$ coupe $x=|y|-3$ deux fois exactement lorsque $k>m$. Trouve $m$.`, -3, "Le V s'ouvre vers la droite à partir de (−3, 0)."),
  ms("Quelles droites pointillées coupent la courbe x = (y − 1)² − 4 deux fois? Choisis toutes les bonnes réponses.", [String.raw`$x=-5$`, String.raw`$x=-4$`, String.raw`$x=0$`, String.raw`$x=5$`], [2, 3], "Sommet (−4, 1) : à gauche, aucune; au sommet, une; à droite, deux.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -3, ymax: 5 }, curves: sideways(-4, 1), vlines: [-5, -4, 0, 5].map((x) => ({ x, color: "amber", dash: true, label: `x = ${x}`.replace("-", "−") })), step: { x: 1, y: 1 } })),
  num(String.raw`Combien de fonctions différentes ont pour domaine $\{1,2\}$ et des sorties choisies parmi $\{5,6,7\}$?`, 9, "Chaque entrée a 3 choix : 3 × 3."),
  num(String.raw`Combien des fonctions de domaine $\{1,2\}$ et de sorties choisies parmi $\{5,6,7\}$ sont un à un?`, 6, "3 choix, puis 2 : 3 × 2."),
  tf(String.raw`Le graphique de $x^2-y^2=0$ est une fonction.`, false, "y = ±x : deux droites qui se croisent."),
  num(String.raw`Pour $\{(x,y)\mid x=y^2,\ y\in\{-3,-2,\ldots,3\}\}$, combien d'entrées ont deux sorties?`, 3, "x = 1, 4, 9 (x = 0 en a une seule)."),
  mc("Ce graphique formé de deux segments horizontaux est-il une fonction?", "non — x = 2 a deux sorties (deux points pleins)", ["oui — il est formé de segments horizontaux", "oui — les segments ne se chevauchent pas", "non — il a une interruption"], "Des points pleins en (2, 1) et (2, 3) sur la même droite verticale.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, segs: [{ pts: [[0, 1], [2, 1]] }, { pts: [[2, 3], [4, 3]] }], points: [P(2, 1), P(2, 3)] })),
  num(String.raw`Combien de points à coordonnées entières sont situés sur $x^2+y^2=13$?`, 8, "(±2, ±3) et (±3, ±2)."),
  num(String.raw`Combien de valeurs de x différentes apparaissent parmi les points à coordonnées entières de $x^2+y^2=13$?`, 4, "x = −3, −2, 2, 3, chacune avec deux sorties."),
  mc(String.raw`Pour la relation « x → chaque solution y de $y^2=x$ », quelle entrée a exactement une sortie?`, String.raw`$x=0$`, [String.raw`$x=1$`, String.raw`$x=-1$`, "tout x positif"], "Seule l'équation y² = 0 a une seule solution."),
  num(String.raw`La droite $x=k$ coupe $x=-\tfrac12(y+1)^2+2$ deux fois exactement lorsque $k<c$. Trouve $c$.`, 2, "Ouverte vers la gauche à partir du sommet (2, −1).", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -6, ymax: 4 }, curves: sideways(2, -1, -0.5), points: [P(2, -1)] })),
];
