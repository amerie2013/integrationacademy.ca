// 1.6 Translations et étirements verticaux — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_6.mjs)
// Notation française : y = af(k(x − c)) + d (c horizontal, d vertical) — lettres échangées, aucun nombre ne change.
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph, PAR } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  mc(String.raw`Compare $y=x^2-6$ à $y=x^2$.`, "translation de 6 vers le bas", ["translation de 6 vers le haut", "translation de 6 vers la gauche", "translation de 6 vers la droite"], "d = −6."),
  mc(String.raw`Compare $y=|x+5|$ à $y=|x|$.`, "translation de 5 vers la gauche", ["translation de 5 vers la droite", "translation de 5 vers le haut", "translation de 5 vers le bas"], "x + 5 = x − (−5) : c = −5."),
  mc(String.raw`Compare $y=\sqrt{x-2}$ à $y=\sqrt x$.`, "translation de 2 vers la droite", ["translation de 2 vers la gauche", "translation de 2 vers le haut", "étirement de facteur 2"], "c = 2."),
  mc(String.raw`Compare $y=6x^2$ à $y=x^2$.`, "étirement vertical de facteur 6", ["compression verticale de facteur 6", "étirement horizontal de facteur 6", "translation de 6 vers le haut"], "Chaque valeur de y × 6."),
  mc(String.raw`Compare $y=-\sqrt x$ à $y=\sqrt x$.`, "réflexion par rapport à l'axe des x", ["réflexion par rapport à l'axe des y", "translation vers le bas", "aucun changement"], "a = −1."),
  num("Le graphique gris est y = √x. Le graphique violet est y = √(kx) et passe par le point marqué. Trouve k.", 4, "√k = 2 en x = 1, donc k = 4.", planeDoc({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(4 * x), a: 0, color: "violet" }], points: [P(1, 2)], step: { x: 1, y: 1 } })),
  num(String.raw`Quelle est l'abscisse du sommet de $y=|x+7|-1$?`, -7, "Sommet (−7, −1)."),
  num(String.raw`$(2,4)$ est sur $y=x^2$. Quelle est l'ordonnée de son image sur $y=x^2+9$?`, 13, "9 vers le haut."),
  num(String.raw`$(4,2)$ est sur $y=\sqrt x$. Quelle est l'ordonnée de son image sur $y=5\sqrt x$?`, 10, "× 5."),
  mc(String.raw`Compare $y=\sqrt{3x}$ à $y=\sqrt x$.`, String.raw`compression horizontale de facteur $\tfrac13$`, ["étirement horizontal de facteur 3", String.raw`compression verticale de facteur $\tfrac13$`, "translation de 3 vers la droite"], "k = 3 : (x, y) → (x/3, y)."),
  mc(String.raw`Dans $y=af(k(x-c))+d$, quelle condition produit une réflexion du graphique par rapport à l'axe des y?`, String.raw`$k<0$`, [String.raw`$a<0$`, String.raw`$c<0$`, String.raw`$d<0$`], "k < 0 change le signe de chaque abscisse; a < 0 produit une réflexion par rapport à l'axe des x."),
  tf(String.raw`$y=(x+2)^2$ est $y=x^2$ déplacée de 2 unités vers la droite.`, false, "x + 2 : 2 vers la gauche."),
  tf(String.raw`$y=\left(\tfrac12x\right)^2$ est un étirement horizontal de $y=x^2$ de facteur 2.`, true, "k = ½ : les abscisses sont divisées par ½, c'est-à-dire doublées."),
  mc("Quelle équation correspond à cette parabole?", String.raw`$y=(x-2)^2-3$`, [String.raw`$y=(x+2)^2-3$`, String.raw`$y=(x-2)^2+3$`, String.raw`$y=(x+3)^2-2$`], "Sommet (2, −3).", graph((x) => (x - 2) ** 2 - 3, V8, [P(2, -3)])),
  mc("Quelle équation correspond au graphique?", String.raw`$y=\sqrt{x+3}+1$`, [String.raw`$y=\sqrt{x-3}+1$`, String.raw`$y=\sqrt{x+1}+3$`, String.raw`$y=\sqrt{x+3}-1$`], "Point de départ (−3, 1).", graph((x) => Math.sqrt(x + 3) + 1, V8, [P(-3, 1)], { a: -3 })),
  mx(String.raw`Écris l'équation de $y=|x|$ translatée de 4 unités vers le haut.`, "abs(x)+4", "d = 4."),
  mc(String.raw`Quelle équation correspond à $y=\sqrt x$ comprimée horizontalement par un facteur $\tfrac14$?`, String.raw`$y=\sqrt{4x}$`, [String.raw`$y=\sqrt{\tfrac14x}$`, String.raw`$y=\tfrac14\sqrt x$`, String.raw`$y=\sqrt{x-4}$`], "Une compression de facteur ¼ signifie k = 4."),
  num(String.raw`$(4,2)$ est sur $y=\sqrt x$. Quelle est l'abscisse de son image sur $y=\sqrt{2x}$?`, 2, "x/k = 4/2."),
  num(String.raw`$(2,4)$ est sur $y=x^2$. Quelle est l'abscisse de son image sur $y=\left(\tfrac14x\right)^2$?`, 8, "x/k = 2 ÷ ¼ = 8."),
  mc(String.raw`Quel est le domaine de $y=\sqrt{x+4}$?`, String.raw`$x\ge-4$`, [String.raw`$x\ge4$`, String.raw`$x\le-4$`, String.raw`$x\in\mathbb R$`], "Commence en x = −4."),
];

export const M = [
  num(String.raw`$(9,3)$ est sur $y=\sqrt x$. Trouve l'ordonnée de son image sur $y=2\sqrt{x+1}-5$.`, 1, "2(3) − 5."),
  num(String.raw`$(9,3)$ est sur $y=\sqrt x$. Trouve l'abscisse de son image sur $y=2\sqrt{x+1}-5$.`, 8, "9 − 1."),
  mc(String.raw`Décris $y=-3(x-1)^2+2$.`, "étirement de facteur 3, réflexion par rapport à l'axe des x, 1 vers la droite, 2 vers le haut", ["étirement de facteur 3, 1 vers la gauche, 2 vers le haut", "compression de facteur 1/3, réflexion, 1 vers la droite, 2 vers le haut", "étirement de facteur 3, réflexion par rapport à l'axe des y, 1 vers la droite, 2 vers le bas"], "a = −3, c = 1, d = 2."),
  mx(String.raw`Écris : $y=\sqrt x$ réfléchie par rapport à l'axe des x, puis translatée de 3 vers la gauche et de 2 vers le haut.`, "-sqrt(x+3)+2", "a = −1, c = −3, d = 2."),
  mx(String.raw`Écris : $y=x^2$ comprimée horizontalement par un facteur $\tfrac12$, puis translatée de 4 vers la droite.`, "(2*(x-4))^2", "k = 2, c = 4 : y = (2(x − 4))²."),
  num(String.raw`Quelle est l'ordonnée à l'origine de $y=2|x-3|-1$?`, 5, "2(3) − 1."),
  mc(String.raw`Donne le domaine et l'image de $y=-\sqrt{x-1}+4$.`, String.raw`$x\ge1$; $y\le4$`, [String.raw`$x\ge1$; $y\ge4$`, String.raw`$x\ge-1$; $y\le4$`, String.raw`$x\le1$; $y\le4$`], "Commence en (1, 4) et descend."),
  mc(String.raw`Les asymptotes de $y=\frac{3}{x+2}-4$ sont…`, String.raw`$x=-2$, $y=-4$`, [String.raw`$x=2$, $y=-4$`, String.raw`$x=-2$, $y=3$`, String.raw`$x=3$, $y=-4$`], "c = −2, d = −4."),
  num("La parabole illustrée a pour sommet (−1, 2) et passe par (1, 10). Trouve a dans y = a(x + 1)² + 2.", 2, "10 = 4a + 2.", graph((x) => 2 * (x + 1) ** 2 + 2, { xmin: -5, xmax: 4, ymin: -1, ymax: 12 }, [P(-1, 2), P(1, 10)], { step: { x: 1, y: 2 } })),
  mx("Écris l'équation du graphique en forme de V.", "-abs(x-2)+3", "Sommet (2, 3), ouvert vers le bas avec des pentes ±1.", graph((x) => -Math.abs(x - 2) + 3, V8, [P(2, 3)])),
  ms(String.raw`Lesquels sont vrais pour $y=\tfrac12\sqrt{x-4}$? Choisis toutes les bonnes réponses.`, ["elle commence en (4, 0)", "elle passe par (8, 1)", "c'est un étirement vertical de facteur 2", "son image est y ≥ 0"], [0, 1, 3], "(4, 2) sur √x → (8, 1); a = 1/2 est une compression."),
  num(String.raw`$(9,3)$ est sur $y=\sqrt x$. Trouve l'abscisse de son image sur $y=2\sqrt{\tfrac13(x+5)}+4$.`, 22, "x/k + c = 9 ÷ ⅓ − 5 = 27 − 5."),
  num(String.raw`Écris $y=(5x-15)^2$ sous la forme $y=(k(x-c))^2$. Que vaut $c$?`, 3, "5x − 15 = 5(x − 3)."),
  tf(String.raw`$y=\sqrt{5-x}$ a pour domaine $x\le5$.`, true, "5 − x = −(x − 5) : k = −1, c = 5, donc le graphique commence en x = 5 et s'étend vers la gauche."),
  num(String.raw`Le point $(-1,-1)$ de $y=\frac1x$ correspond à quelle ordonnée sur $y=\frac4x+1$?`, -3, "4(−1) + 1."),
  mc(String.raw`Laquelle a le graphique le plus étroit?`, String.raw`$y=5x^2$`, [String.raw`$y=0.5x^2$`, String.raw`$y=x^2+5$`, String.raw`$y=(x-5)^2$`], "Le plus grand |a|."),
  num(String.raw`L'asymptote verticale de $y=\frac1{2x+10}-3$ est $x=$?`, -5, "2x + 10 = 2(x + 5), donc c = −5."),
  mc("Quel graphique correspond à y = 1/(x − 1) + 2?", "le rouge", ["le bleu", "aucun des deux", "les deux"], "Asymptotes du rouge : x = 1, y = 2. Du bleu : x = −1, y = −2.", planeDoc({ view: V8, curves: [{ f: (x) => 1 / (x - 1) + 2, color: "red" }, { f: (x) => 1 / (x + 1) - 2, color: "blue" }] })),
  mc(String.raw`Quelle correspondance transforme $y=f(x)$ en $y=3f(2(x+1))-5$?`, String.raw`$(x,y)\to\left(\frac x2-1,\ 3y-5\right)$`, [String.raw`$(x,y)\to(2x-1,\ 3y-5)$`, String.raw`$(x,y)\to\left(\frac x2+1,\ 3y-5\right)$`, String.raw`$(x,y)\to\left(\frac x2-1,\ \frac y3-5\right)$`], "(x/k + c, ay + d) avec a = 3, k = 2, c = −1, d = −5."),
  num("La parabole violette est y = (k(x − 1))² avec k > 0 et passe par le point marqué. Trouve k.", 0.5, "(2k)² = 1 → k = ½ : un étirement horizontal de facteur 2.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (0.5 * (x - 1)) ** 2, color: "violet" }], points: [P(1, 0), P(3, 1)], step: { x: 1, y: 1 } }), 0.001),
];
