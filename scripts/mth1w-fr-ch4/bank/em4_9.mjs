// 4.9 Droites parallèles et perpendiculaires — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`Quelle est la pente d'une droite parallèle à $y=5x-2$?`, 5, "Des droites parallèles ont des pentes égales."),
  num(String.raw`Quelle est la pente d'une droite perpendiculaire à $y=4x+1$? (nombre décimal)`, -0.25, "L'opposé de l'inverse de 4.", null, 0.001),
  num(String.raw`Quelle est la pente d'une droite perpendiculaire à $y=-\frac13x+6$?`, 3, "L'opposé de l'inverse de −1/3."),
  tf(String.raw`$y=2x+3$ et $y=2x-8$ sont parallèles.`, true, "Les deux pentes valent 2."),
  tf(String.raw`$y=3x$ et $y=-3x$ sont perpendiculaires.`, false, "3 × (−3) = −9, pas −1."),
  mc(String.raw`Quelle droite est perpendiculaire à $y=\frac25x-1$?`, String.raw`$y=-\frac52x+4$`, [String.raw`$y=\frac52x+4$`, String.raw`$y=-\frac25x+4$`, String.raw`$y=\frac25x+4$`], "Renverse et change le signe."),
  mc(String.raw`Quelle droite est parallèle à $y=-x+7$?`, String.raw`$y=-x-3$`, [String.raw`$y=x+7$`, String.raw`$y=7$`, String.raw`$x=-1$`], "Pente −1."),
  num(`Deux droites sont perpendiculaires. L'une a une pente de 6. Quel est le produit de leurs pentes?`, -1, "m₁m₂ = −1."),
  mc(`Une droite perpendiculaire à une droite horizontale est…`, "verticale", ["horizontale", "de pente 1", "de pente −1"], "Les droites horizontales et verticales se rencontrent à angle droit."),
  mx(String.raw`Écris la droite parallèle à $y=3x+5$ d'ordonnée à l'origine $-2$.`, "3*x-2", "Même pente, nouvelle ordonnée à l'origine."),
  mx(String.raw`Écris la droite perpendiculaire à $y=2x$ qui passe par l'origine.`, "-0.5*x", "Pente −1/2, b = 0."),
  ms(String.raw`Quelles droites sont parallèles à $y=\frac12x$? Choisis toutes les bonnes réponses.`, [String.raw`$y=\frac12x+9$`, String.raw`$y=0.5x-1$`, String.raw`$y=2x$`, String.raw`$y=-\frac12x$`], [0, 1], "Pente 1/2."),
  tf(String.raw`Des droites parallèles d'ordonnées à l'origine différentes ne se rencontrent jamais.`, true, "Elles gardent le même écart."),
  num(String.raw`Une droite est perpendiculaire à la droite passant par $(0,0)$ et $(2,6)$. Quelle est sa pente? (nombre décimal)`, -0.3333, "Cette droite a une pente de 3.", null, 0.002),
  mc(`Le graphique montre les droites A et B. Quelle est leur relation?`, "perpendiculaires", ["parallèles", "la même droite", "ni l'un ni l'autre"], "A : pente 2; B : pente −1/2; produit −1.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue", label: "A", lx: 2 }, { m: -0.5, b: 1, color: "red", label: "B", lx: -4.5 }] })),
  num(String.raw`Quelle est la pente d'une droite perpendiculaire à $y=-5x+2$? (nombre décimal)`, 0.2, "1/5.", null, 0.001),
  mc(String.raw`Quelle droite est parallèle à $x=3$?`, String.raw`$x=-4$`, [String.raw`$y=3$`, String.raw`$y=3x$`, String.raw`$y=-4$`], "Les deux sont verticales."),
  tf(`Deux droites de pentes 4 et −1/4 sont perpendiculaires.`, true, "4 × (−1/4) = −1."),
  mx(String.raw`Écris la droite parallèle à $y=-4x+1$ qui passe par $(0,9)$.`, "-4*x+9", "Pente −4, b = 9."),
  num(String.raw`Une droite a une pente de $\frac{7}{2}$. Quelle est la pente d'une droite qui lui est perpendiculaire? (nombre décimal)`, -0.2857, "−2/7.", null, 0.002),
];

export const M = [
  mx(String.raw`Écris la droite parallèle à $y=2x-3$ qui passe par $(4,1)$.`, "2*x-7", "1 = 8 + b."),
  mx(String.raw`Écris la droite perpendiculaire à $y=3x+2$ qui passe par $(6,-1)$.`, "(-1/3)*x+1", "−1 = −2 + b."),
  mx(String.raw`Écris la droite parallèle à $2x+y-5=0$ qui passe par $(-1,4)$.`, "-2*x+2", "Pente −2; 4 = 2 + b."),
  num(String.raw`Quelle est la pente d'une droite perpendiculaire à $3x-4y+8=0$? (nombre décimal)`, -1.3333, "Pente 3/4 → −4/3.", null, 0.002),
  tf(String.raw`$2x+3y-6=0$ et $3x-2y+1=0$ sont perpendiculaires.`, true, "Pentes −2/3 et 3/2 : produit −1."),
  ms(String.raw`Quelles droites sont perpendiculaires à $y=-\frac23x+1$? Choisis toutes les bonnes réponses.`, [String.raw`$y=\frac32x$`, String.raw`$3x-2y+4=0$`, String.raw`$y=-\frac32x$`, String.raw`$2x-3y=0$`], [0, 1], "Pente 3/2. 3x − 2y + 4 = 0 → y = 1.5x + 2."),
  num(String.raw`$y=kx+1$ est parallèle à $y=-6x+4$. Trouve k.`, -6, "Pentes égales."),
  num(String.raw`$y=kx-2$ est perpendiculaire à $y=\frac14x+3$. Trouve k.`, -4, "k · 1/4 = −1."),
  mc(`Le graphique montre les droites P et Q. Quelle est leur relation?`, "parallèles", ["perpendiculaires", "la même droite", "ni l'un ni l'autre"], "Les deux ont une pente de −1/3.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1 / 3, b: 3, color: "blue", label: "P", lx: -4 }, { m: -1 / 3, b: -2, color: "red", label: "Q", lx: 3 }] })),
  num(String.raw`La droite 1 passe par $(1,2)$ et $(4,8)$. La droite 2 passe par $(0,5)$ et $(6,k)$ et est perpendiculaire à la droite 1. Trouve k.`, 2, "m₁ = 2, donc m₂ = −1/2 : k = 5 − 3."),
  mc(String.raw`Les droites passant par $(0,0),(3,1)$ et par $(2,5),(5,6)$ sont…`, "parallèles", ["perpendiculaires", "la même droite", "ni l'un ni l'autre"], "Les deux ont une pente de 1/3; (2,5) n'est pas sur y = x/3."),
  mx(String.raw`Écris la droite perpendiculaire à $y=-\frac52x+1$ qui passe par $(5,3)$.`, "0.4*x+1", "Pente 2/5; 3 = 2 + b."),
  num(String.raw`Quelle est l'ordonnée à l'origine de la droite parallèle à $y=\frac12x+6$ qui passe par $(-4,2)$?`, 4, "2 = −2 + b."),
  tf(String.raw`La droite passant par $(1,1)$ et $(3,5)$ est perpendiculaire à la droite passant par $(0,4)$ et $(4,2)$.`, true, "Pentes 2 et −1/2."),
  mc(String.raw`Laquelle est perpendiculaire à $x=-2$?`, String.raw`$y=5$`, [String.raw`$x=5$`, String.raw`$y=x$`, String.raw`$y=-2x$`], "Verticale ⟂ horizontale."),
  num(`Une rampe a une pente de 0.25. Une entretoise doit la rencontrer à angle droit. Quelle est la pente de l'entretoise?`, -4, "L'opposé de l'inverse."),
  ms(`Points A(0, 0), B(4, 2), C(3, 4). Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["AB a une pente de 1/2", "BC a une pente de −2", "AB ⟂ BC", "AC ∥ AB"], [0, 1, 2], "1/2 × (−2) = −1; AC a une pente de 4/3."),
  num(String.raw`Quelle est l'abscisse à l'origine de la droite perpendiculaire à $y=x+4$ qui passe par $(2,6)$?`, 8, "y = −x + 8."),
  mx(String.raw`Écris la droite parallèle à $y=-0.6x$ qui passe par $(10,-1)$.`, "-0.6*x+5", "−1 = −6 + b."),
  num(String.raw`$ax+2y-3=0$ est parallèle à $y=4x$. Trouve a.`, -8, "Pente −a/2 = 4."),
];
