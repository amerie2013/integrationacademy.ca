// 3.6 Problèmes d'optimisation — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.6 Problèmes d'optimisation";
export const Q = [
  num("On fabrique une boîte ouverte à partir d'une feuille de 24 cm sur 15 cm en découpant des carrés de côté x dans les coins. Voici le graphique de son volume. Quel est le plus grand volume (cm³)?", 486, "V′ = 12(x − 3)(x − 10) : x = 3 (10 est hors de 0 ≤ x ≤ 7.5).", graph((x) => x * (24 - 2 * x) * (15 - 2 * x), { xmin: 0, xmax: 8, ymin: 0, ymax: 550 }, [P(3, 486)], { a: 0, b: 7.5, step: { x: 1, y: 50 } })),
  num("Un cylindre est inscrit dans un cône de rayon 6 et de hauteur 12. Quel est son plus grand volume? (2 décimales)", 201.06, "h = 12 − 2r; V = πr²(12 − 2r) : r = 4, V = 64π.", null, 0.01),
  num("Une sauveteuse court sur la plage à 6 m/s et nage à 2 m/s vers un nageur situé à 40 m du rivage et à 100 m plus loin le long de la plage. À quelle distance avant le point situé en face du nageur doit-elle entrer dans l'eau (m, 2 décimales)?", 14.14, "x/(2√(1600 + x²)) = 1/6 ⇒ 8x² = 1600.", null, 0.01),
  num("Une page contient 50 cm² de texte imprimé, avec des marges de 2 cm en haut et en bas et de 1 cm sur les côtés. Quelle est la plus petite aire de la page (cm²)?", 98, "(x + 2)(50/x + 4) = 58 + 4x + 100/x : x = 5."),
  num("Deux poteaux de 12 m et de 28 m de hauteur sont à 30 m l'un de l'autre. Un fil va du sommet de l'un à un point au sol, puis au sommet de l'autre. Quel est le fil le plus court (m)?", 50, "On réfléchit un poteau : √(30² + 40²)."),
  num("Le profit d'une entreprise est P(x) = x(200 − 0.5x) − (4000 + 20x) dollars (graphique ci-contre). Quel est le profit maximal?", 12200, "P = 180x − 0.5x² − 4000 : x = 180.", graph((x) => (x * (200 - 0.5 * x) - (4000 + 20 * x)) / 1000, { xmin: 0, xmax: 380, ymin: -6, ymax: 14 }, [P(180, 12.2)], { a: 0, b: 360, step: { x: 50, y: 2 } })),
  num(S`Trouve la plus courte distance de $(3,0)$ à la parabole $y=x^2$ (3 décimales).`, 2.236, "D′ ∝ 2x³ + x − 3 = 0 en x = 1 : distance √5.", null, 0.001),
  num("Quelle est la plus grande aire d'un triangle inscrit dans un cercle de rayon 3? (2 décimales)", 11.69, "Triangle équilatéral, de côté 3√3.", null, 0.01),
  tf("Si le seul nombre critique sur un domaine ouvert vérifie V″ < 0, il donne le maximum absolu.", true, "V monte avant ce point et descend après."),
  num("Une boîte ouverte à base carrée contient 12 m³. La base coûte 3 dollars le m² et les côtés, 2 dollars le m². Quel est le coût minimal (dollars, 2 décimales)?", 57.15, "C = 3x² + 96/x : x = ∛16.", null, 0.01),
  num("Un rectangle a sa base sur l'axe des x et ses sommets supérieurs sur y = 8 − x² (graphique ci-contre). Quelle est sa plus grande aire? (2 décimales)", 17.42, "A = 2x(8 − x²) : x = √(8/3).", graph((x) => 8 - x * x, { xmin: -3.2, xmax: 3.2, ymin: -1, ymax: 9 }, [P(Math.sqrt(8 / 3), 16 / 3), P(-Math.sqrt(8 / 3), 16 / 3)], { segs: [{ pts: [[-Math.sqrt(8 / 3), 0], [-Math.sqrt(8 / 3), 16 / 3], [Math.sqrt(8 / 3), 16 / 3], [Math.sqrt(8 / 3), 0]], color: "green" }] }), 0.01),
  num("Un stade vend 30 000 billets à 50 dollars; chaque hausse de 5 dollars fait perdre 2000 ventes. Quel prix maximise le revenu (dollars)?", 62.5, "R = (50 + 5n)(30000 − 2000n) : n = 2.5.", null, 0.01),
  num("On coupe un fil de 20 cm : un morceau est plié en carré, l'autre en cercle. Quelle longueur de fil (cm, 2 décimales) faut-il utiliser pour le carré afin de minimiser l'aire totale?", 11.2, "Côté s = 20/(4 + π); le carré utilise 4s.", null, 0.05),
  mc("Pour le même fil, comment faut-il le couper pour maximiser l'aire totale?", "tout utiliser pour le cercle", ["tout utiliser pour le carré", "le couper en deux moitiés", "utiliser 11.2 cm pour le carré"], "Vérifie les extrémités : le cercle seul enferme la plus grande aire."),
  num("Un cône a un apothème de 9 cm. Quel est son plus grand volume (cm³, 2 décimales)?", 293.84, "V = (π/3)(81h − h³) : h = √27.", null, 0.01),
  num("Le coût d'utilisation d'un camion est de 50 + v²/200 dollars l'heure à v km/h pour un trajet de 400 km (graphique du coût total). Quelle vitesse minimise le coût (km/h)?", 100, "Total 400(50/v + v/200) : v² = 10000.", graph((v) => 400 * (50 / v + v / 200), { xmin: 0, xmax: 200, ymin: 0, ymax: 1200 }, [P(100, 400)], { a: 20, b: 200, step: { x: 20, y: 100 } })),
  num(S`Pour $x\gt0$, pour quelle valeur de $x$ la fonction $\frac{x}{x^2+4}$ est-elle la plus grande?`, 2, "4 − x² = 0."),
  num("Un rectangle de périmètre 36 cm tourne autour d'un de ses côtés pour former un cylindre. Quelle longueur (cm) de l'autre côté donne le plus grand volume?", 12, "V = πx²(18 − x) : x = 12."),
  tf("Une réponse complète à un problème d'optimisation donne la quantité demandée avec ses unités, et non seulement la valeur de x.", true, "Réponds à la question posée."),
  num("Une clôture de 2 m de hauteur se trouve à 1 m d'un mur. Quelle est la plus courte échelle qui atteint le mur en passant par-dessus la clôture (m, 3 décimales)?", 4.162, "L = (2^(2/3) + 1)^(3/2).", null, 0.005),
];
