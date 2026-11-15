// 1.5 Réciproques — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_5.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const YX = { m: 1, b: 0, color: "gray", dash: true };

export const E = [
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=x-4$.`, "x+4", "Annule la soustraction de 4."),
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=\frac x5$.`, "5*x", "Annule la division par 5."),
  num(String.raw`$f(1)=6$. Trouve $f^{-1}(6)$.`, 1, "La réciproque ramène 6 à 1."),
  tf(String.raw`$f^{-1}(x)$ signifie $\frac{1}{f(x)}$.`, false, "Ici, −1 désigne la réciproque; ce n'est pas un exposant."),
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=2x+1$.`, "(x-1)/2", "Soustrais 1, puis divise par 2."),
  mc("Le graphique d'une réciproque est l'image du graphique de départ par une réflexion par rapport à…", String.raw`la droite $y=x$`, ["l'axe des x", "l'axe des y", "l'origine"], "Échanger x et y produit une réflexion par rapport à y = x."),
  num(String.raw`On réfléchit $(3,-2)$ par rapport à $y=x$. Quelle est l'abscisse de l'image?`, -2, "Les coordonnées s'échangent : (−2, 3).", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, lines: [YX], points: [P(3, -2)] })),
  mc(String.raw`Le domaine de $f^{-1}$ est…`, String.raw`l'image de $f$`, [String.raw`le domaine de $f$`, "l'ensemble des nombres réels", String.raw`l'ordonnée à l'origine de $f$`], "Les entrées et les sorties échangent leurs rôles."),
  num(String.raw`$f(x)=3x$. Trouve $f^{-1}(12)$.`, 4, "12 ÷ 3."),
  mc(String.raw`$f$ contient $(0,2),(1,5),(2,8)$. Quel point est sur $f^{-1}$?`, String.raw`$(5,1)$`, [String.raw`$(1,5)$`, String.raw`$(2,0)$`, String.raw`$(8,8)$`], "Échange chaque couple."),
  tf(String.raw`La réciproque de $y=x$ est $y=x$.`, true, "Échanger x et y ne change rien."),
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=-x$.`, "-x", "Elle est sa propre réciproque."),
  num(String.raw`$f(x)=x+10$. Trouve $f^{-1}(3)$.`, -7, "3 − 10."),
  mc("La droite bleue est y = 2x. Quelle est l'équation de la droite rouge, sa réciproque?", String.raw`$y=\frac x2$`, [String.raw`$y=-2x$`, String.raw`$y=2x+1$`, String.raw`$y=\frac2x$`], "Annule le doublement.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, lines: [{ m: 2, b: 0, color: "blue" }, { m: 0.5, b: 0, color: "red" }, YX] })),
  tf(String.raw`La réciproque de $y=x^2$ (pour tout réel $x$) est une fonction.`, false, "x = y² donne y = ±√x."),
  num(String.raw`$f(x)=x^3$. Trouve $f^{-1}(8)$.`, 2, "2³ = 8."),
  mc("Une fonction additionne 4, puis multiplie par 3. Sa réciproque…", "divise par 3, puis soustrait 4", ["soustrait 4, puis divise par 3", "multiplie par 3, puis additionne 4", "divise par 4, puis soustrait 3"], "Inverse les opérations et leur ordre."),
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=4-x$.`, "4-x", "Échange : x = 4 − y → y = 4 − x."),
  num(String.raw`$f(x)=\frac{x+1}{2}$. Trouve $f^{-1}(5)$.`, 9, "f⁻¹(x) = 2x − 1."),
  mc(String.raw`Si $(a,b)$ est sur le graphique de $f$, quel point est sur le graphique de $f^{-1}$?`, String.raw`$(b,a)$`, [String.raw`$(-a,-b)$`, String.raw`$(a,-b)$`, String.raw`$(\frac1a,\frac1b)$`], "Échange."),
];

export const M = [
  mx(String.raw`Trouve $g^{-1}(x)$ pour $g(x)=\frac{3x-2}{4}$.`, "(4*x+2)/3", "x = (3y − 2)/4 → 4x + 2 = 3y."),
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=7-2x$.`, "(7-x)/2", "x = 7 − 2y."),
  num(String.raw`$f(x)=x^2+3$, $x\ge0$. Trouve $f^{-1}(19)$.`, 4, "x² = 16, x ≥ 0."),
  mc(String.raw`Trouve la réciproque de $f(x)=(x-5)^2$, $x\ge5$.`, String.raw`$f^{-1}(x)=5+\sqrt x$`, [String.raw`$f^{-1}(x)=5-\sqrt x$`, String.raw`$f^{-1}(x)=\sqrt{x-5}$`, String.raw`$f^{-1}(x)=\sqrt x-5$`], "Racine positive, car y ≥ 5."),
  mc(String.raw`Quelle est l'image de $f^{-1}$ si $f(x)=\sqrt{x-2}$?`, String.raw`$y\ge2$`, [String.raw`$y\ge0$`, String.raw`$y\le2$`, String.raw`$y\in\mathbb R$`], "Image de f⁻¹ = domaine de f."),
  num(String.raw`$f(x)=5x-8$. Trouve $f^{-1}(f^{-1}(2))$.`, 2, "f⁻¹(2) = 10/5 = 2, puis encore 2."),
  tf(String.raw`$f(x)=(x-1)^2$ avec $x\ge1$ a une réciproque qui est une fonction.`, true, "Un seul côté du sommet est un à un."),
  mc("Le graphique de f est illustré. Quel point est sur le graphique de f⁻¹?", String.raw`$(4,3)$`, [String.raw`$(3,4)$`, String.raw`$(-3,4)$`, String.raw`$(4,-3)$`], "(3, 4) est sur f.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x - 3) + 4, a: 3, color: "blue" }], points: [P(3, 4)] })),
  num(String.raw`En quelle valeur de x la fonction $f(x)=3x-4$ rencontre-t-elle sa réciproque?`, 2, "Sur y = x : 3x − 4 = x."),
  ms("Quelles fonctions ont une réciproque qui est une fonction sans restreindre le domaine? Choisis toutes les bonnes réponses.", [String.raw`$2x-1$`, String.raw`$x^2$`, String.raw`$x^3$`, String.raw`$|x|$`, String.raw`$\frac1x$`], [0, 2, 4], "x² et |x| ne sont pas un à un."),
  mx(String.raw`$C=\frac59(F-32)$ convertit des degrés Fahrenheit en degrés Celsius. Écris la réciproque en fonction de $x$.`, "9*x/5+32", "F = 9C/5 + 32."),
  num(String.raw`$f(x)=\frac x3+2$. Trouve $f^{-1}(5)$.`, 9, "f⁻¹(x) = 3(x − 2)."),
  mc(String.raw`Pour que la réciproque de $y=(x+4)^2$ soit $y=-4+\sqrt x$, restreins le domaine à…`, String.raw`$x\ge-4$`, [String.raw`$x\le-4$`, String.raw`$x\ge4$`, String.raw`$x\ge0$`], "La moitié droite de la parabole."),
  num(String.raw`$f(x)=-x+9$ est sa propre réciproque. Trouve $f(f(2))$.`, 2, "f(2) = 7, f(7) = 2."),
  mc("Sur le graphique, la courbe bleue et la courbe rouge sont réciproques. Par rapport à quelle droite sont-elles symétriques?", String.raw`$y=x$`, [String.raw`$y=-x$`, String.raw`$x=0$`, String.raw`$y=0$`], "La droite pointillée y = x.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x / 4, a: 0, color: "blue" }, { f: (x) => 2 * Math.sqrt(x), a: 0, color: "red" }], lines: [YX] })),
  num(String.raw`$f(x)=2(x-1)^2+3$, $x\ge1$. Trouve $f^{-1}(11)$.`, 3, "(x − 1)² = 4."),
  tf(String.raw`Pour tout $x$ du domaine de $f^{-1}$, $f(f^{-1}(x))=x$.`, true, "Défaire, puis refaire."),
  num(String.raw`La réciproque de $f(x)=mx+b$ a une pente de $0.25$. Trouve $m$.`, 4, "Les pentes de droites réciproques sont inverses l'une de l'autre."),
  mc(String.raw`Trouve la réciproque de $f(x)=x^2-6$, $x\le0$.`, String.raw`$f^{-1}(x)=-\sqrt{x+6}$`, [String.raw`$f^{-1}(x)=\sqrt{x+6}$`, String.raw`$f^{-1}(x)=-\sqrt{x-6}$`, String.raw`$f^{-1}(x)=\sqrt{x-6}$`], "Les sorties de f⁻¹ doivent être ≤ 0."),
  num(String.raw`$g(x)=4x+k$ et $g^{-1}(13)=2$. Trouve $k$.`, 5, "g(2) = 13."),
];
