// 3.8 Systèmes linéaires-quadratiques — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 10 };
const sys = (f, m, b, pts = []) => planeDoc({ view: V8, curves: [{ f, color: "violet" }], lines: [{ m, b, color: "blue" }], points: pts });

export const E = [
  num(String.raw`Combien de points $y=x^2$ et $y=4$ ont-elles en commun?`, 2, "x = ±2."),
  num(String.raw`Combien de points $y=x^2$ et $y=-1$ ont-elles en commun?`, 0, "x² ≥ 0."),
  num(String.raw`Trouve la plus grande abscisse du point où $y=x^2$ rencontre $y=x+2$.`, 2, "x² − x − 2 = 0."),
  num(String.raw`Combien de points $y=x^2+1$ et $y=2x$ ont-elles en commun?`, 1, "(x − 1)² = 0."),
  mc("La première étape pour résoudre un système linéaire-quadratique consiste à…", "poser égales les deux expressions de y", ["tracer seulement la droite", "additionner les équations", "trouver le sommet"], "Les deux sont égales à y."),
  tf("Une droite peut rencontrer une parabole en trois points.", false, "L'équation combinée est du second degré : au plus deux racines."),
  mc("Si l'équation combinée a D = 0, la droite est…", "tangente à la parabole", ["une sécante", "parallèle à l'axe", "sans contact avec la parabole"], "Un seul point de contact."),
  num(String.raw`Trouve la plus grande abscisse du point où $y=x^2-4$ rencontre l'axe des x.`, 2, "x² = 4."),
  num(String.raw`Une intersection a $x=2$ sur la droite $y=3x-1$. Quelle est son ordonnée?`, 5, "3(2) − 1."),
  num(String.raw`Combien de points $y=-x^2+1$ et $y=2$ ont-elles en commun?`, 0, "Le maximum est 1."),
  num(String.raw`Trouve la plus grande abscisse du point où $y=x^2-2x$ rencontre $y=3$.`, 3, "(x − 3)(x + 1) = 0."),
  tf("La droite horizontale qui passe par le sommet d'une parabole lui est tangente.", true, "Elle la touche seulement au sommet."),
  num(String.raw`Pour quelle valeur de $k$ la droite $y=k$ est-elle tangente à $y=x^2+5$?`, 5, "La hauteur du sommet."),
  num(String.raw`Combien de points $y=x^2-6x+9$ et $y=0$ ont-elles en commun?`, 1, "(x − 3)²."),
  mc("La droite du graphique est…", "une sécante (deux points)", ["une tangente (un point)", "une droite qui ne rencontre pas la parabole", "une droite verticale"], "Elle coupe la parabole deux fois.", sys((x) => x * x - 2, 1, 0, [P(2, 2), P(-1, -1)])),
  num("Lis le graphique : quelle est l'abscisse positive du point où y = x² − 3 rencontre y = 2x?", 3, "x² − 2x − 3 = 0.", sys((x) => x * x - 3, 2, 0, [P(3, 6), P(-1, -2)])),
  num(String.raw`Trouve la plus petite abscisse du point où $y=x^2$ rencontre $y=-x+6$.`, -3, "x² + x − 6 = 0."),
  mc("Après avoir trouvé x, la façon la plus simple de trouver y est de substituer dans…", "l'équation linéaire", ["l'équation du second degré seulement", "le discriminant", "la forme canonique"], "Les deux donnent le même y; la droite est plus simple."),
  num(String.raw`Combien de points $y=2x^2$ et $y=-3$ ont-elles en commun?`, 0, "2x² ≥ 0."),
  num("La droite y = 2x − 1 touche y = x² en un point. Quelle est son abscisse?", 1, "(x − 1)² = 0.", sys((x) => x * x, 2, -1, [P(1, 1)])),
];

export const M = [
  num(String.raw`Trouve la plus grande abscisse du point où $y=x^2-3x+1$ rencontre $y=x-2$.`, 3, "x² − 4x + 3 = 0."),
  num(String.raw`$y=x^2-3x+1$ et $y=x-2$ : trouve l'ordonnée du point d'intersection ayant la plus grande abscisse.`, 1, "x = 3 : 3 − 2."),
  num(String.raw`Combien de points $y=-x^2+4x-1$ et $y=x+3$ ont-elles en commun?`, 0, "−x² + 3x − 4 : D = 9 − 16."),
  num(String.raw`Pour quelle valeur de $k$ la droite $y=2x+k$ est-elle tangente à $y=x^2+4x+6$?`, 5, "x² + 2x + 6 − k : 4 − 4(6 − k) = 0."),
  num(String.raw`Pour quelle valeur de $m>0$ la droite $y=mx$ est-elle tangente à $y=x^2+9$?`, 6, "m² = 36."),
  num(String.raw`$R=-x^2+30x$ et $C=10x+75$. Trouve la plus grande quantité au seuil de rentabilité.`, 15, "x² − 20x + 75 = 0."),
  num(String.raw`Quel est le plus grand entier $k$ pour lequel $y=x+k$ ne rencontre pas $y=x^2-x$?`, -2, "x² − 2x − k : D = 4 + 4k < 0 → k < −1."),
  ms(String.raw`Quelles droites rencontrent $y=x^2$ en deux points? Choisis toutes les bonnes réponses.`, [String.raw`$y=1$`, String.raw`$y=-1$`, String.raw`$y=2x$`, String.raw`$y=2x-1$`, String.raw`$y=x+6$`], [0, 2, 4], "y = 2x − 1 est tangente; y = −1 ne la rencontre pas."),
  num(String.raw`Trouve la plus grande abscisse du point où $y=2x^2-3x$ rencontre $y=x+6$.`, 3, "2x² − 4x − 6 = 0."),
  num(String.raw`Quelle distance sépare les points où $y=x^2$ rencontre $y=4$?`, 4, "(−2, 4) et (2, 4)."),
  tf("Si l'équation combinée a D > 0, la droite est une sécante.", true, "Deux points d'intersection."),
  num(String.raw`Combien de points $y=3x^2+2$ et $y=-x+1$ ont-elles en commun?`, 0, "3x² + x + 1 : D = 1 − 12."),
  num(String.raw`La hauteur d'une pierre est $h(t)=-5t^2+20t$ et celle d'un ballon, $b(t)=5t$. À quel moment après le lancer sont-ils à la même hauteur?`, 3, "−5t² + 15t = 0 → t = 0 ou 3."),
  num(String.raw`$y=2x-1$ est tangente à $y=x^2-2x+3$. Trouve l'abscisse du point de contact.`, 2, "x² − 4x + 4 = 0."),
  num("Lis le graphique : quelle est la plus grande abscisse du point où y = −x² + 6x rencontre y = x + 4?", 4, "x² − 5x + 4 = 0.", sys((x) => -x * x + 6 * x, 1, 4, [P(1, 5), P(4, 8)])),
  mx(String.raw`Pose $y=x^2+1$ égale à $y=3x-1$ et écris le résultat sous forme d'une expression égale à 0 (avec $x^2$ positif).`, "x^2-3*x+2", "x² + 1 − 3x + 1."),
  num(String.raw`Pour quelle valeur de $k$ la droite $y=-2x+k$ est-elle tangente à $y=x^2$?`, -1, "x² + 2x − k : 4 + 4k = 0."),
  num(String.raw`Pour combien d'entiers $k$ de $-5$ à $5$ la droite $y=k$ rencontre-t-elle $y=x^2-2x$ deux fois?`, 6, "x² − 2x − k : 4 + 4k > 0 → k > −1 : 0, …, 5."),
  num("La droite en pointillé y = 4x − 4 est tangente à y = x². En quelle valeur de x la touche-t-elle?", 2, "(x − 2)² = 0.", planeDoc({ view: V8, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 4, b: -4, color: "amber", dash: true }], points: [P(2, 4)] })),
  tf("Résoudre l'équation du second degré combinée donne les abscisses; les ordonnées doivent être trouvées séparément.", true, "Substitue chaque valeur de x."),
];
