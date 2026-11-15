// 3.4 Valeurs maximales et minimales — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(String.raw`Quelle est la valeur minimale de $y=(x+2)^2-7$?`, -7, "Sommet (−2, −7)."),
  num(String.raw`Quelle est la valeur maximale de $y=-(x-1)^2+3$?`, 3, "Sommet (1, 3)."),
  num(String.raw`Quel nombre complète le carré $x^2+12x+\square$?`, 36, "(12/2)²."),
  num(String.raw`Quelle est l'abscisse du sommet de $y=x^2-14x+1$?`, 7, "−b/(2a)."),
  num(String.raw`Quelle est la valeur minimale de $y=x^2+4x$?`, -4, "x = −2."),
  num(String.raw`Quelle est la valeur maximale de $y=-x^2+10x$?`, 25, "x = 5."),
  tf(String.raw`Si $a>0$, le sommet de $y=ax^2+bx+c$ est un minimum.`, true, "Elle est ouverte vers le haut."),
  mc("Le revenu est égal à…", "prix × quantité vendue", ["prix − coût", "quantité − prix", "profit × coût"], "L'argent encaissé."),
  num("Le revenu est de 500 dollars et le coût, de 320 dollars. Quel est le profit?", 180, "500 − 320."),
  num(String.raw`Quelle est la valeur maximale de $y=-2x^2+8$?`, 8, "Sommet (0, 8)."),
  num(String.raw`Quelle est l'abscisse du sommet de $y=3x^2-6x+2$?`, 1, "6/6."),
  mc(String.raw`Quelle est la forme canonique de $x^2-6x+4$?`, String.raw`$(x-3)^2-5$`, [String.raw`$(x-3)^2+4$`, String.raw`$(x+3)^2-5$`, String.raw`$(x-6)^2+4$`], "Ajoute et soustrais 9."),
  num(String.raw`La hauteur d'un ballon est $h(t)=-5t^2+30t$. Quelle est sa hauteur maximale?`, 45, "t = 3."),
  num("Deux nombres ont une somme de 20. Quel est leur plus grand produit possible?", 100, "10 × 10."),
  num("Un rectangle a un périmètre de 40 m. Quelle est sa plus grande aire possible (m²)?", 100, "Un carré de 10 sur 10."),
  num(String.raw`Où est le sommet de $y=(x-3)(x-11)$? Entre la valeur de x.`, 7, "Moyenne des zéros."),
  tf(String.raw`Le maximum de $y=-4(x-2)^2+9$ est atteint en $x=-2$.`, false, "En x = 2."),
  num("Lis le graphique : quelle est la valeur maximale?", 6, "Sommet (3, 6).", graph((x) => -((x - 3) ** 2) + 6, V8, [P(3, 6)])),
  num("Lis le graphique : quelle est la valeur minimale?", -4, "Sommet (−2, −4).", graph((x) => (x + 2) ** 2 - 4, V8, [P(-2, -4)])),
  mx(String.raw`Écris $x^2+8x+3$ sous forme canonique.`, "(x+4)^2-13", "Ajoute et soustrais 16."),
];

export const M = [
  num(String.raw`Quelle est la valeur minimale de $y=2x^2-8x+3$?`, -5, "x = 2."),
  num(String.raw`Quelle est la valeur maximale de $y=-3x^2-12x+1$?`, 13, "x = −2."),
  num(String.raw`Quelle est la valeur minimale de $y=x^2+3x+1$?`, -1.25, "(x + 1.5)² − 1.25.", null, 0.001),
  num(String.raw`Utilise la factorisation partielle : quelle est l'abscisse du sommet de $y=5x^2-20x+7$?`, 2, "5x(x − 4) + 7."),
  num(String.raw`Quelle est la valeur maximale de $y=-x^2+5x-2$?`, 4.25, "x = 2.5 : −6.25 + 12.5 − 2.", null, 0.001),
  num(String.raw`Le revenu est $R(x)=(20+x)(300-10x)$. Pour quelle valeur de $x$ est-il le plus grand?`, 5, "Zéros −20 et 30."),
  num(String.raw`Quelle est la plus grande valeur de $R(x)=(20+x)(300-10x)$?`, 6250, "25 × 250."),
  num(String.raw`Quel est le profit maximal si $P(x)=-x^2+16x-39$ (en milliers)?`, 25, "x = 8."),
  num("Un champ rectangulaire est clôturé sur trois côtés (une rivière borde le quatrième) avec 120 m de clôture. Quelle est la plus grande aire (m²)?", 1800, "A = w(120 − 2w) : w = 30."),
  num(String.raw`La hauteur d'une fusée est $h(t)=-4.9t^2+49t$. Quelle est sa hauteur maximale?`, 122.5, "t = 5.", null, 0.001),
  num("Deux nombres ont une différence de 12. Quel est leur plus petit produit possible?", -36, "x(x + 12) en x = −6."),
  mx(String.raw`Écris $2x^2+12x+5$ sous forme canonique.`, "2*(x+3)^2-13", "2(x² + 6x + 9) − 18 + 5."),
  tf(String.raw`Pour compléter le carré de $3x^2+6x+1$, on met d'abord 3 en évidence dans $3x^2+6x$.`, true, "3(x² + 2x) + 1."),
  num(String.raw`$R(x)=-2x^2+40x$ et $C(x)=8x+50$. Quel est le profit maximal?`, 78, "P = −2x² + 32x − 50 en x = 8."),
  num(String.raw`Le revenu est $R(x)=x(50-2x)$ centaines de dollars. Quel est le revenu maximal (en centaines)?`, 312.5, "x = 12.5.", null, 0.001),
  ms(String.raw`Quelles méthodes permettent de trouver le sommet de $y=x^2+5x+2$? Choisis toutes les bonnes réponses.`, ["compléter le carré", "la factorisation partielle", "la moyenne de deux zéros entiers", String.raw`$x=-\frac b{2a}$`], [0, 1, 3], "Ses zéros sont irrationnels."),
  num("Le graphique du revenu a les zéros 0 et 40. Pour quelle valeur de x le revenu est-il le plus grand?", 20, "À mi-chemin.", graph((x) => x * (40 - x), { xmin: -2, xmax: 42, ymin: -20, ymax: 450 }, [P(0, 0), P(40, 0), P(20, 400)], { step: { x: 5, y: 50 } })),
  num(String.raw`Quelle est la valeur minimale de $y=(x-1)(x-5)$?`, -4, "x = 3 : (2)(−2)."),
  num(String.raw`Quelle est la valeur minimale de $y=x^2-6x$?`, -9, "x = 3."),
  num("Le graphique montre l'aire A = w(100 − 2w) d'un enclos adossé à un mur. Quelle est l'aire maximale?", 1250, "w = 25 : 25 × 50.", graph((w) => w * (100 - 2 * w), { xmin: -2, xmax: 52, ymin: -50, ymax: 1400 }, [P(25, 1250)], { a: 0, b: 50, step: { x: 5, y: 200 } })),
];
