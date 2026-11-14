// 4.9 Droites parallèles et perpendiculaires — 20 questions difficiles
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";
import { TITLE } from "../l4_9.mjs";

export const TOPIC = TITLE;
export const Q = [
  tf(String.raw`Le triangle de sommets $A(1,1)$, $B(5,3)$, $C(3,7)$ a un angle droit en B.`, true, "Pente de AB 1/2, pente de BC −2 : produit −1."),
  num(String.raw`Quadrilatère $P(0,0)$, $Q(4,1)$, $R(5,5)$, $S(1,4)$. Quel est le produit des pentes de PR et de QS?`, -1, "Pente de PR 1, pente de QS −1 : les diagonales sont perpendiculaires (un losange)."),
  mx(String.raw`Écris la médiatrice du segment allant de $(2,1)$ à $(6,9)$.`, "-0.5*x+7", "Point milieu (4, 5); pente du segment 2 → −1/2; 5 = −2 + b."),
  num(String.raw`$y=(k-1)x+3$ est perpendiculaire à $y=\frac12x-4$. Trouve k.`, -1, "(k − 1)(1/2) = −1 → k − 1 = −2."),
  num(String.raw`$y=(2k+1)x$ est parallèle à $3x-y+7=0$. Trouve k.`, 1, "2k + 1 = 3."),
  num(String.raw`Trouve l'abscisse du point où la droite perpendiculaire à $y=2x-1$ passant par $(8,0)$ rencontre $y=2x-1$.`, 2, "y = −x/2 + 4; 2x − 1 = −x/2 + 4 → 2.5x = 5."),
  num(String.raw`Trouve la plus courte distance du point $(8,0)$ à la droite $y=2x-1$. (2 décimales)`, 6.7082, "Pied de la perpendiculaire (2, 3) : √(36 + 9) = √45.", null, 0.006),
  ms(`Points A(−2, 1), B(2, 3), C(4, −1), D(0, −3). Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["AB ∥ DC", "AD ∥ BC", "AB ⟂ BC", "ABCD est un rectangle"], [0, 1, 2, 3], "AB : 1/2, DC : 1/2, BC : −2, AD : −2; le produit des pentes adjacentes est −1."),
  mc(`Le graphique montre trois droites. Quelle paire est perpendiculaire?`, "L et N", ["L et M", "M et N", "aucune paire"], "L : pente 3/2; M : pente 2/3; N : pente −2/3 — L·N = −1.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1.5, b: -1, color: "blue", label: "L", lx: 3 }, { m: 2 / 3, b: 2, color: "red", label: "M", lx: -5 }, { m: -2 / 3, b: -3, color: "green", label: "N", lx: 4.5 }] })),
  num(String.raw`Une droite passant par $(3,a)$ et $(7,2)$ est perpendiculaire à $4x+2y-1=0$. Trouve a.`, 0, "Pente donnée −2 → 1/2 : (2 − a)/4 = 1/2."),
  tf(String.raw`Si la droite 1 ⟂ la droite 2 et la droite 2 ⟂ la droite 3, alors la droite 1 ∥ la droite 3 (aucune n'étant verticale ni horizontale).`, true, "m₃ = −1/m₂ = m₁."),
  num(`Une route suit y = −0.75x + 12 (quadrillage en km). Un nouveau sentier rectiligne part du village situé en (0, 0) et rejoint la route à angle droit. À quelle valeur de x rejoint-il la route? (2 décimales)`, 5.76, "Sentier y = (4/3)x; (4/3)x = −0.75x + 12 → x = 5.76.", null, 0.006),
  num(`Une route suit y = −0.75x + 12 (quadrillage en km). Un sentier rectiligne part du village situé en (0, 0) et rejoint la route à angle droit. Quelle est la longueur du sentier (km)?`, 9.6, "Il la rejoint en (5.76, 7.68) : √(5.76² + 7.68²) = 9.6.", FIG.road, 0.006),
  mx(String.raw`Écris la droite passant par $(-3,4)$ perpendiculaire à la droite passant par $(1,-2)$ et $(5,4)$.`, "(-2/3)*x+2", "Pente donnée 3/2 → −2/3; 4 = 2 + b."),
  num(String.raw`Pour quelle valeur de k les droites $2x+ky-5=0$ et $6x-3y+1=0$ sont-elles perpendiculaires?`, 4, "Pentes −2/k et 2 : (−2/k)(2) = −1 → k = 4."),
  num(String.raw`Pour quelle valeur de k les droites $2x+ky-5=0$ et $6x-3y+1=0$ sont-elles parallèles?`, -1, "−2/k = 2."),
  ms(String.raw`Droite $\ell$ : $y=\frac34x-2$. Quelles droites sont perpendiculaires à $\ell$? Choisis toutes les bonnes réponses.`, [String.raw`$4x+3y=0$`, String.raw`$y=-\frac43x+9$`, String.raw`$3x-4y+1=0$`, String.raw`$8x+6y-5=0$`, String.raw`$y=\frac43x$`], [0, 1, 3], "Il faut une pente de −4/3."),
  num(String.raw`Un rectangle a pour sommets $(0,0)$, $(6,3)$ et $(4,7)$. Trouve l'ordonnée du quatrième sommet.`, 4, "Quatrième = (0,0) + (4,7) − (6,3) = (−2, 4)."),
  mc(String.raw`Pourquoi une droite perpendiculaire à $y=0x+5$ ne peut-elle pas s'écrire $y=mx+b$?`, "elle est verticale, donc sa pente n'est pas définie", ["sa pente est 0", "elle n'a pas d'ordonnée à l'origine pour certains b", "c'est la même droite"], "−1/0 n'est pas défini."),
  num(String.raw`Dans le triangle $A(0,0)$, $B(8,2)$, $C(5,6)$, la hauteur issue de $C$ est perpendiculaire à AB. Quelle est sa pente?`, -4, "Pente de AB 1/4."),
];
