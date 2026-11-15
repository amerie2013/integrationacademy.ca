// 1.3 Fonctions de base — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_3.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, PAR } from "./fig.mjs";

const V5 = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
const one = (k) => planeDoc({ view: V5, curves: [{ ...PAR[k], color: "violet" }] });
const opts = [String.raw`$y=x^2$`, String.raw`$y=\sqrt x$`, String.raw`$y=\frac1x$`, String.raw`$y=|x|$`];
const pick = (i) => [opts[i], opts.filter((_, j) => j !== i)];

export const E = [
  mc("Quelle fonction de base est représentée?", ...pick(0), "Une parabole en U qui passe par l'origine.", one("x2")),
  mc("Nomme la fonction de base illustrée.", ...pick(1), "Elle commence à l'origine et croît seulement vers la droite.", one("sqrt")),
  mc("Quelle fonction de base a ce graphique?", ...pick(2), "Deux branches dont les asymptotes sont les axes.", one("recip")),
  mc("Reconnais la fonction de base du graphique.", ...pick(3), "Un V dont le sommet est à l'origine.", one("abs")),
  num(String.raw`Évalue $\sqrt x$ en $x=49$.`, 7, "7² = 49."),
  num(String.raw`Évalue $\frac1x$ en $x=0.2$.`, 5, "1 ÷ 0.2."),
  num(String.raw`Évalue $|x|$ en $x=-8$.`, 8, "Distance à 0."),
  tf(String.raw`Le domaine de $f(x)=x^2$ est l'ensemble des nombres réels.`, true, "Tout nombre peut être élevé au carré."),
  tf(String.raw`L'image de $f(x)=\sqrt x$ contient $-1$.`, false, "√x n'est jamais négatif."),
  mc(String.raw`Quelle fonction de base a pour image $\{y\in\mathbb R\mid y\ne0\}$?`, String.raw`$\frac1x$`, [String.raw`$x^2$`, String.raw`$|x|$`, String.raw`$\sqrt x$`], "1/x ne vaut jamais 0."),
  fill(String.raw`Lorsque $x$ devient très grand, $\frac1x$ s'approche de la droite $y=$ ___.`, ["0"], "1/1000 = 0.001."),
  tf(String.raw`$x^2$ et $|x|$ ont la même image.`, true, "Les deux : y ≥ 0."),
  num(String.raw`Évalue $x^2$ en $x=1.5$.`, 2.25, "1.5 × 1.5.", null, 0.001),
  mc(String.raw`Quelle fonction de base passe par $(4,2)$?`, String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$\frac1x$`, String.raw`$|x|$`], "√4 = 2."),
  mc(String.raw`Quelle fonction de base passe par $(2,0.5)$?`, String.raw`$\frac1x$`, [String.raw`$\sqrt x$`, String.raw`$x^2$`, String.raw`$|x|$`], "1/2 = 0.5."),
  tf(String.raw`$\sqrt x$ est définie en $x=0$.`, true, "√0 = 0."),
  mc("Quelle fonction de base a la forme d'un V?", String.raw`$|x|$`, [String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$x$`], "Deux segments droits qui se rejoignent à l'origine."),
  num(String.raw`Évalue $f(x)=x$ en $x=-7.5$.`, -7.5, "La sortie est égale à l'entrée.", null, 0.001),
  tf(String.raw`Le graphique de $\frac1x$ a une ordonnée à l'origine.`, false, "x = 0 n'appartient pas au domaine."),
  mc(String.raw`Quel est le domaine de $\sqrt x$?`, String.raw`$x\ge0$`, [String.raw`$x>0$`, String.raw`$x\in\mathbb R$`, String.raw`$x\ne0$`], "√0 est permis; les nombres négatifs ne le sont pas."),
];

export const M = [
  ms("Quelles fonctions de base ont pour domaine l'ensemble des nombres réels? Choisis toutes les bonnes réponses.", [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [0, 1, 4], "√x exige x ≥ 0; 1/x exige x ≠ 0."),
  ms(String.raw`Quelles fonctions de base sont paires, $f(-x)=f(x)$? Choisis toutes les bonnes réponses.`, [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [1, 4], "Symétriques par rapport à l'axe des y."),
  num(String.raw`À part en $x=0$, où $y=x$ et $y=\sqrt x$ se rencontrent-elles?`, 1, "x = √x → x² = x."),
  mc(String.raw`Pour $0<x<1$, laquelle est la plus grande?`, String.raw`$\sqrt x$`, [String.raw`$x$`, String.raw`$x^2$`, "elles sont égales"], "p. ex. x = 0.25 : 0.5 > 0.25 > 0.0625."),
  num(String.raw`Évalue $\frac1x$ en $x=-0.125$.`, -8, "1 ÷ (−0.125)."),
  mc(String.raw`$x$ : $1,4,9,16$; $y$ : $1,2,3,4$. Quelle fonction de base?`, String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$\frac1x$`, String.raw`$|x|$`], "Chaque y au carré donne x."),
  mc(String.raw`$x$ : $-2,-1,1,2$; $y$ : $-0.5,-1,1,0.5$. Quelle fonction de base?`, String.raw`$\frac1x$`, [String.raw`$x$`, String.raw`$|x|$`, String.raw`$\sqrt x$`], "y = 1/x."),
  tf(String.raw`$|x|=\sqrt{x^2}$ pour tout réel $x$.`, true, "La racine positive de x² est |x|."),
  num("Combien des cinq fonctions de base passent par l'origine?", 4, "Toutes sauf 1/x."),
  mc(String.raw`Quelle fonction de base est décroissante pour $x>0$?`, String.raw`$\frac1x$`, [String.raw`$\sqrt x$`, String.raw`$x^2$`, String.raw`$|x|$`], "Plus x est grand, plus 1/x est petit."),
  num(String.raw`En $x=0.4$, de combien $|x|$ dépasse-t-il $x^2$?`, 0.24, "0.4 − 0.16.", null, 0.001),
  num("Combien de points y = x² et y = |x| ont-elles en commun?", 3, "(−1, 1), (0, 0), (1, 1).", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 4 }, curves: [PAR.x2, PAR.abs] })),
  mc("Un trajet de 300 km prend t heures à v km/h. Quelle fonction de base décrit t en fonction de v?", String.raw`$\frac1x$ (fonction inverse)`, [String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$|x|$`], "t = 300/v."),
  mc("Quelle fonction de base donne le côté d'un carré à partir de son aire?", String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$\frac1x$`, String.raw`$x$`], "s = √A."),
  num("Un carré a un côté de 2.5 m. Quelle est son aire (m²)?", 6.25, "A = s².", null, 0.001),
  tf(String.raw`$\frac1x$ est impaire : $f(-x)=-f(x)$.`, true, "1/(−x) = −1/x."),
  num(String.raw`Évalue $\frac1x$ en $x=0.004$.`, 250, "Une valeur très proche de 0 donne une très grande sortie."),
  ms(String.raw`Quelles fonctions de base sont croissantes pour $x>0$? Choisis toutes les bonnes réponses.`, [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [0, 1, 2, 4], "Seule 1/x décroît."),
  mc("Quelle fonction de base n'a aucune symétrie?", String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$|x|$`, String.raw`$\frac1x$`], "Elle n'existe que pour x ≥ 0."),
  num("Le point (k, 5) est sur le graphique de y = √x. Trouve k.", 25, "√k = 5.", planeDoc({ view: { xmin: -2, xmax: 30, ymin: -1, ymax: 7 }, curves: [PAR.sqrt], points: [P(25, 5, "(k, 5)")], step: { x: 5, y: 1 } })),
];
