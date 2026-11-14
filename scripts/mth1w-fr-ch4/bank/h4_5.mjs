// 4.5 Tracer des droites particulières (droites particulières et inéquations linéaires) — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l4_5.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Un magasin vend des chandails à 15 dollars et des casquettes à 10 dollars, et doit faire au moins 600 dollars de ventes : $15s+10c\ge600$. Si on vend 28 chandails, quel est le plus petit nombre de casquettes?`, 18, "420 + 10c ≥ 600 → c ≥ 18."),
  ms(String.raw`Quels points vérifient à la fois $y\ge x-2$ et $y<-x+6$? Choisis toutes les bonnes réponses.`, ["(0, 0)", "(4, 2)", "(2, 3)", "(5, 0)", "(−3, 8)"], [0, 2, 4], "(0, 0), (2, 3) et (−3, 8) vérifient les deux. (4, 2) : 2 < 2 est faux; (5, 0) : 0 ≥ 3 est faux."),
  num(String.raw`La région $y\ge x-2$ et $y\le-x+6$ a un sommet là où les frontières se rencontrent. Quelle est son abscisse?`, 4, "x − 2 = −x + 6."),
  mc(String.raw`Quelle inéquation est illustrée?`, String.raw`$2x+3y<12$`, [String.raw`$2x+3y>12$`, String.raw`$2x+3y\le12$`, String.raw`$3x+2y<12$`], "Droite pointillée passant par (6, 0) et (0, 4), ombrée du côté de l'origine.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: -2 / 3, b: 4, dash: true }], shade: { m: -2 / 3, b: 4, above: false }, step: { x: 1, y: 1 } })),
  num(String.raw`Une boulangerie dispose de 30 heures de four : pain 1.5 h par fournée, gâteaux 2 h par fournée, $1.5b+2c\le30$. Avec 12 fournées de pain, quel est le plus grand nombre de fournées de gâteaux?`, 6, "18 + 2c ≤ 30 → c ≤ 6."),
  num(String.raw`Combien de points à coordonnées entières (x, y ≥ 0) vérifient $x+y\le3$?`, 10, "Diagonales : 1 + 2 + 3 + 4 = 10."),
  tf(String.raw`Diviser $-3y\le6x-9$ par $-3$ donne $y\le-2x+3$.`, false, "Diviser par un nombre négatif inverse le sens : y ≥ −2x + 3."),
  mc(String.raw`Les droites $y=2$, $y=-3$, $x=1$ et $x=k$ forment un carré. Quelle pourrait être la valeur de $k$?`, "6", ["5", "4", "3"], "La hauteur est 5, donc |k − 1| = 5 : k = 6 (ou −4)."),
  num(String.raw`Un triangle est formé par $x=0$, $y=0$ et $x+2y=8$. Quelle est son aire?`, 16, "Coordonnées à l'origine 8 et 4 : ½ × 8 × 4."),
  ms(String.raw`Quelles inéquations ont (2, −1) dans leur région de solutions? Choisis toutes les bonnes réponses.`, [String.raw`$y<x$`, String.raw`$y\ge-x+1$`, String.raw`$x>2$`, String.raw`$2x-y\le5$`, String.raw`$y>-1$`], [0, 1, 3], "−1 < 2 ✓; −1 ≥ −1 ✓; 2 > 2 ✗; 5 ≤ 5 ✓; −1 > −1 ✗."),
  num(String.raw`Un forfait de téléphone permet au plus 600 minutes. Les appels aux amis durent 4 min chacun, ceux à la famille 10 min : $4f+10g\le600$. Avec 50 appels à la famille, combien d'appels aux amis au plus?`, 25, "500 + 4f ≤ 600 → f ≤ 25."),
  mc(`Quelle droite est à la fois horizontale et passe par l'intersection de y = 2x − 1 et de y = −x + 8?`, String.raw`$y=5$`, [String.raw`$x=3$`, String.raw`$y=3$`, String.raw`$x=5$`], "Intersection (3, 5) : droite horizontale y = 5."),
  num(String.raw`Pour quelle valeur de $k$ le point $(k, 2k)$ est-il sur la frontière de $y\le x+5$?`, 5, "2k = k + 5."),
  tf(String.raw`La région $y>3$ et $y<1$ (ensemble) ne contient aucun point.`, true, "Aucun nombre n'est à la fois plus grand que 3 et plus petit que 1."),
  num(String.raw`Un rectangle a ses sommets sur $x=-3$, $x=a$, $y=-1$, $y=5$ et une aire de 48. Si $a>-3$, que vaut $a$?`, 5, "Hauteur 6; largeur 8; a = −3 + 8."),
  mc(String.raw`Une variation directe passe par $(-6, 9)$. Quel point lui appartient aussi?`, String.raw`$(4,-6)$`, [String.raw`$(4,6)$`, String.raw`$(-4,-6)$`, String.raw`$(9,-6)$`], "y = −1.5x."),
  num(String.raw`Combien d'entiers x vérifient à la fois $2x+1>-5$ et $x\le4$?`, 7, "x > −3 et x ≤ 4 : −2 … 4."),
  ms(String.raw`Quelles descriptions conviennent à la région $y\le0$? Choisis toutes les bonnes réponses.`, ["l'axe des x et tout ce qui est au-dessous", "la frontière y = 0 est pleine", "elle contient (3, −2)", "elle contient (0, 1)"], [0, 1, 2], "y ≤ 0 comprend l'axe; (0, 1) a y > 0."),
  num(String.raw`Un jardinier dispose de 48 m de clôture pour un rectangle de longueur $l$ et de largeur $w$ : $2l+2w\le48$. Si $w=9$, quelle est la plus grande longueur possible (m)?`, 15, "18 + 2l ≤ 48."),
  mc(String.raw`Quelle inéquation est équivalente à $4-2y>6x$?`, String.raw`$y<-3x+2$`, [String.raw`$y>-3x+2$`, String.raw`$y<3x-2$`, String.raw`$y>3x+2$`], "−2y > 6x − 4 → y < −3x + 2."),
];
