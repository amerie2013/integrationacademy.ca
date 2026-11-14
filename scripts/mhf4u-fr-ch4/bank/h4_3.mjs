// 4.3 Expressions trigonométriques équivalentes — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.3 Expressions trigonométriques équivalentes";
export const Q = [
  mc(S`Simplifie $\sin(\pi+x)\sin(-x)+\cos(\pi-x)\cos(2\pi-x)$.`, S`$\sin^2x-\cos^2x$`, ["1", "−1", S`$\cos^2x-\sin^2x$`], "(−sin x)(−sin x) + (−cos x)(cos x)."),
  mc(S`Simplifie $\dfrac{\sin\left(\frac\pi2+x\right)\tan(\pi-x)}{\cos(-x)}$.`, S`$-\tan x$`, [S`$\tan x$`, S`$\cos x$`, S`$-\sin x$`], "cos x · (−tan x) / cos x."),
  mc(S`Simplifie $\cos\left(\frac\pi2-x\right)\csc(\pi-x)$.`, "1", ["−1", S`$\sin^2x$`, S`$\cos x$`], "sin x · (1/sin x)."),
  mc(S`Simplifie $\sec(\pi+x)\cos(-x)$.`, "−1", ["1", S`$\cos^2x$`, S`$-\cos^2x$`], "(−1/cos x)(cos x)."),
  mc(S`Simplifie $\tan\left(\frac\pi2+x\right)\tan x$.`, "−1", ["1", S`$\tan^2x$`, "0"], "−cot x · tan x."),
  num(S`Dans un triangle $ABC$, $\cos A=0.6$. Si $B+C$ est la somme des deux autres angles, trouve $\cos(B+C)$.`, -0.6, "B + C = π − A.", null, 0.001),
  num(S`Dans un triangle $ABC$, $\sin(A+B)=0.8$. Trouve $\sin C$.`, 0.8, "A + B = π − C.", null, 0.001),
  num(S`Dans un triangle rectangle dont les angles aigus sont $A$ et $B$, $\sin A=0.28$. Trouve $\cos B$.`, 0.28, "B = π/2 − A.", null, 0.001),
  num(S`$\cos x=a$, $x$ dans le quadrant 1, $a=0.6$. Trouve $\sin\left(\frac\pi2+x\right)+\cos(\pi+x)$.`, 0, "cos x − cos x."),
  num(S`$\sin x=\frac{5}{13}$ dans le quadrant 2. Trouve $\cos(2\pi-x)$ (au centième près).`, -0.92, "cos x = −12/13.", null, 0.005),
  num(S`$\cos x=-\frac35$ dans le quadrant 3. Trouve $\sin(-x)$.`, 0.8, "sin x = −0.8, donc −sin x = 0.8.", null, 0.001),
  num(S`$\tan x=-\frac43$ dans le quadrant 4. Trouve $\sin\left(\frac\pi2-x\right)$.`, 0.6, "cos x = 3/5.", null, 0.001),
  mc(S`Quelle expression a toujours la même valeur que $\sin x$?`, S`$\cos\left(x-\frac\pi2\right)$`, [S`$\cos\left(x+\frac\pi2\right)$`, S`$\sin\left(x-\frac\pi2\right)$`, S`$\sin(x+\pi)$`], "Un cosinus décalé de π/2 vers la droite."),
  mc("La courbe verte est une transformation de y = sin x (en violet). De quelle formule s'agit-il?", S`$y=\sin(\pi+x)$`, [S`$y=\sin(\pi-x)$`, S`$y=\cos x$`, S`$y=\sin\left(\frac\pi2+x\right)$`], "C'est −sin x.", planeDoc(TG([[Math.sin, "violet"], [(x) => -Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("La courbe verte est la courbe y = cos x. Quelle formule la donne aussi?", S`$y=\sin\left(x+\frac\pi2\right)$`, [S`$y=\sin\left(x-\frac\pi2\right)$`, S`$y=-\sin x$`, S`$y=\cos(\pi+x)$`], "Décale le sinus de π/2 vers la gauche.", planeDoc(TG([[Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Deux points du cercle trigonométrique sont séparés d'un demi-tour. Si le point rouge a pour coordonnées (a, b), quelles sont celles du point bleu?", S`$(-a,-b)$`, [S`$(a,-b)$`, S`$(-a,b)$`, S`$(b,a)$`], "Demi-tour autour de l'origine.", planeDoc(UC(60, "(a, b)", [{ x: -0.5, y: -Math.sqrt(3) / 2, label: "?", color: "blue" }]))),
  mc("Le point bleu est l'image du point rouge par une réflexion par rapport à la droite y = x. Si le point rouge correspond à l'angle x, quel est l'angle du point bleu?", S`$\frac\pi2-x$`, [S`$\frac\pi2+x$`, S`$\pi-x$`, S`$-x$`], "Échange le cosinus et le sinus.", planeDoc(UC(25, "x", [{ x: Math.sin((25 * Math.PI) / 180), y: Math.cos((25 * Math.PI) / 180), label: "?", color: "blue" }]))),
  tf(S`$\sin(x+\pi)=\sin x+\sin\pi$ pour toute valeur de $x$.`, false, "sin(x + π) = −sin x, mais le membre de droite vaut sin x."),
  tf(S`$\cos(\pi-x)+\cos x=0$ pour toute valeur de $x$.`, true, "−cos x + cos x."),
  tf(S`$\sin\left(\frac\pi2-x\right)=\sin\frac\pi2-\sin x$ pour toute valeur de $x$.`, false, "Essaie x = π : le membre de gauche vaut sin(−π/2) = −1, mais le membre de droite vaut 1 − 0 = 1."),
];
