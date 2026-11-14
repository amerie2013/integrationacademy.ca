// 4.6 Démonstration d'identités trigonométriques — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Laquelle est égale à $\tan x$?`, S`$\frac{\sin x}{\cos x}$`, [S`$\frac{\cos x}{\sin x}$`, S`$\sin x\cos x$`, S`$\frac1{\sin x}$`], "Identité du quotient."),
  mc(S`Laquelle est égale à $\cot x$?`, S`$\frac{\cos x}{\sin x}$`, [S`$\frac{\sin x}{\cos x}$`, S`$\frac1{\cos x}$`, S`$\sin x\cos x$`], "Identité du quotient."),
  mc(S`Laquelle est égale à $\sec x$?`, S`$\frac1{\cos x}$`, [S`$\frac1{\sin x}$`, S`$\frac1{\tan x}$`, S`$\cos x$`], "Réciproque."),
  mc(S`Laquelle est égale à $\csc x$?`, S`$\frac1{\sin x}$`, [S`$\frac1{\cos x}$`, S`$\frac1{\tan x}$`, S`$\sin x$`], "Réciproque."),
  mc(S`Laquelle est égale à $1-\sin^2x$?`, S`$\cos^2x$`, [S`$\sin^2x$`, S`$\tan^2x$`, "1"], "Identité de Pythagore."),
  mc(S`Laquelle est égale à $1-\cos^2x$?`, S`$\sin^2x$`, [S`$\cos^2x$`, S`$\cot^2x$`, "0"], "Identité de Pythagore."),
  mc(S`Laquelle est égale à $1+\tan^2x$?`, S`$\sec^2x$`, [S`$\csc^2x$`, S`$\cot^2x$`, "1"], "Identité de Pythagore."),
  mc(S`Laquelle est égale à $1+\cot^2x$?`, S`$\csc^2x$`, [S`$\sec^2x$`, S`$\tan^2x$`, "1"], "Identité de Pythagore."),
  mc(S`Simplifie $\sin x\csc x$.`, "1", [S`$\sin^2x$`, "0", S`$\cos x$`], "Réciproques."),
  mc(S`Simplifie $\cos x\sec x$.`, "1", [S`$\cos^2x$`, "0", S`$\sin x$`], "Réciproques."),
  mc(S`Simplifie $\tan x\cos x$.`, S`$\sin x$`, [S`$\cos x$`, S`$\tan^2x$`, "1"], "Identité du quotient."),
  mc(S`Simplifie $\cot x\sin x$.`, S`$\cos x$`, [S`$\sin x$`, S`$\cot^2x$`, "1"], "Identité du quotient."),
  num(S`Évalue $\sin^2x+\cos^2x$ lorsque $x=2.7$.`, 1, "Une identité est vraie pour toute valeur de x."),
  tf("Une identité est vraie pour toutes les valeurs où les deux membres sont définis.", true, "Définition."),
  tf("Une seule valeur pour laquelle les deux membres sont égaux démontre une identité.", false, "Ce n'est qu'un indice."),
  tf("Une seule valeur pour laquelle les deux membres diffèrent réfute une identité.", true, "Un contre-exemple."),
  tf("Dans une démonstration, on peut faire passer des termes de l'autre côté du signe égal.", false, "Travaille chaque membre séparément."),
  fill("Une valeur qui montre qu'une affirmation est fausse s'appelle un ___.", ["contre-exemple", "contre exemple", "contrexemple", "counterexample"], "Un seul suffit."),
  mc("On trace les deux membres d'une équation, et on obtient la même courbe. Qu'est-ce que cela montre?", "l'affirmation est plausible, mais elle n'est pas démontrée", ["l'affirmation est démontrée", "l'affirmation est fausse", "rien du tout"], "Un graphique est un indice.", planeDoc(TG([[Math.sin, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Les deux membres d'une identité proposée sont tracés en couleurs différentes. Que peux-tu conclure?", "l'affirmation est fausse", ["l'affirmation est vraie", "l'affirmation est une identité seulement en x = 0", "rien"], "Des courbes différentes la réfutent.", planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }))),
];

export const M = [
  mc(S`Simplifie $\dfrac{\sin^2x}{1-\cos x}$.`, S`$1+\cos x$`, [S`$1-\cos x$`, S`$\sin x$`, S`$\cos x$`], "(1 − cos x)(1 + cos x)/(1 − cos x)."),
  mc(S`Simplifie $\dfrac{\cos^2x}{1+\sin x}$.`, S`$1-\sin x$`, [S`$1+\sin x$`, S`$\cos x$`, S`$\sin x$`], "(1 − sin x)(1 + sin x)/(1 + sin x)."),
  mc(S`Simplifie $\sec^2x-\tan^2x$.`, "1", ["0", S`$\sec x$`, S`$2\tan^2x$`], "Identité de Pythagore."),
  mc(S`Simplifie $\csc^2x-1$.`, S`$\cot^2x$`, [S`$\tan^2x$`, S`$\sec^2x$`, "1"], "Identité de Pythagore."),
  mc(S`Simplifie $\sin^2x\cot^2x$.`, S`$\cos^2x$`, [S`$\sin^2x$`, "1", S`$\tan^2x$`], "cos²x/sin²x · sin²x."),
  mc(S`Simplifie $\tan x+\cot x$.`, S`$\sec x\csc x$`, ["1", S`$\sin x\cos x$`, S`$\sec x+\csc x$`], "(sin²x + cos²x)/(sin x cos x)."),
  mc(S`Simplifie $\dfrac{\sec x}{\csc x}$.`, S`$\tan x$`, [S`$\cot x$`, S`$\sin x$`, "1"], "(1/cos x)(sin x)."),
  mc(S`Simplifie $\dfrac{1}{1-\sin x}+\dfrac{1}{1+\sin x}$.`, S`$2\sec^2x$`, [S`$2\csc^2x$`, S`$\sec^2x$`, "2"], "2/(1 − sin²x)."),
  mc(S`Simplifie $\cos^4x-\sin^4x$.`, S`$\cos2x$`, ["1", S`$\sin2x$`, S`$\cos^2x$`], "Différence de carrés."),
  mc(S`Simplifie $(1+\tan^2x)\cos^2x$.`, "1", [S`$\sin^2x$`, S`$\sec^2x$`, S`$\tan^2x$`], "sec²x cos²x."),
  mc(S`Simplifie $\dfrac{\sin2x}{\sin x}$.`, S`$2\cos x$`, [S`$2\sin x$`, "2", S`$\cos x$`], "2 sin x cos x / sin x."),
  mc(S`Simplifie $\dfrac{1-\cos2x}{2}$.`, S`$\sin^2x$`, [S`$\cos^2x$`, S`$\sin x$`, "1"], "2 sin²x / 2."),
  mc(S`Simplifie $\sin x\cos y+\cos x\sin y$ lorsque $y=\frac\pi2-x$.`, "1", ["0", S`$\sin2x$`, S`$\cos2x$`], "sin(x + y) = sin(π/2)."),
  mc(S`Quelle valeur montre que $\cos2x=2\cos x$ est faux?`, S`$x=0$`, ["il n'existe aucune telle valeur", "l'affirmation est vraie pour toute valeur de x", "l'affirmation est vraie pour toute valeur de x sauf 0"], "1 ≠ 2."),
  mc(S`Quelle valeur montre que $\sin x+\cos x=1$ n'est pas une identité?`, S`$x=\frac\pi4$`, [S`$x=0$`, S`$x=\frac\pi2$`, S`$x=2\pi$`], "√2 ≠ 1.", planeDoc(TG([[(x) => Math.sin(x) + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  num(S`Évalue $\tan^2x-\sec^2x$ pour toute valeur de $x$ où l'expression est définie.`, -1, "1 + tan²x = sec²x."),
  num(S`Évalue $\dfrac{\sin^2x}{1+\cos x}+\cos x$ pour toute valeur permise de $x$.`, 1, "1 − cos x + cos x."),
  num(S`Évalue $(\sin x+\cos x)^2+(\sin x-\cos x)^2$.`, 2, "Les termes du milieu s'annulent."),
  mc("Quelle équation ce graphique appuie-t-il?", S`$\sin^2x=\frac{1-\cos2x}2$`, [S`$\sin^2x=\sin2x$`, S`$\sin^2x=\cos2x$`, S`$\sin^2x=1$`], "La courbe est sin²x.", planeDoc(TG([[(x) => Math.sin(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 2 }))),
  tf(S`$\dfrac{1}{\cos x}-\cos x=\sin x\tan x$ partout où les deux membres sont définis.`, true, "(1 − cos²x)/cos x."),
];
