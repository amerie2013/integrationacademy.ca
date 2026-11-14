// 4.6 Démonstration d'identités trigonométriques — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.6 Démonstration d'identités trigonométriques";
export const Q = [
  mc(S`Quelle est la première étape utile pour démontrer que $\dfrac{\cos x}{1-\sin x}=\dfrac{1+\sin x}{\cos x}$?`, S`multiplier le membre de gauche par $\frac{1+\sin x}{1+\sin x}$`, ["faire le produit en croix et considérer le résultat comme démontré", "élever les deux membres au carré", "soustraire le membre de droite des deux membres"], "Un conjugué donne 1 − sin²x = cos²x."),
  mc(S`Simplifie $\dfrac{\sin x}{1+\cos x}+\dfrac{1+\cos x}{\sin x}$.`, S`$2\csc x$`, [S`$2\sec x$`, S`$\csc x$`, "2"], "(2 + 2 cos x)/(sin x(1 + cos x))."),
  mc(S`Simplifie $\dfrac{\tan x-\sin x}{\tan x\sin x}$.`, S`$\dfrac{1-\cos x}{\sin x}$`, [S`$\dfrac{1+\cos x}{\sin x}$`, S`$\cos x$`, S`$\sec x$`], "Divise chaque terme par tan x sin x : csc x − cot x."),
  mc(S`Simplifie $\dfrac{1-\tan^2x}{1+\tan^2x}$.`, S`$\cos2x$`, [S`$\sin2x$`, "1", S`$\sec^2x$`], "cos²x − sin²x."),
  mc(S`Simplifie $\dfrac{\sin x+\sin2x}{1+\cos x+\cos2x}$.`, S`$\tan x$`, [S`$\cot x$`, S`$\sin x$`, "1"], "sin x(1 + 2cos x)/(cos x(1 + 2cos x))."),
  mc(S`Simplifie $\dfrac{\cos2x}{\sin x+\cos x}$.`, S`$\cos x-\sin x$`, [S`$\cos x+\sin x$`, "1", S`$\sin x-\cos x$`], "Une différence de carrés."),
  mc(S`Simplifie $\sin^4x-\cos^4x+1$.`, S`$2\sin^2x$`, [S`$2\cos^2x$`, "1", "2"], "sin²x − cos²x + 1."),
  mc(S`Simplifie $\dfrac{\sin(x+y)+\sin(x-y)}{\cos(x+y)+\cos(x-y)}$.`, S`$\tan x$`, [S`$\tan y$`, S`$\cot x$`, "1"], "2 sin x cos y / (2 cos x cos y)."),
  mc(S`Simplifie $\dfrac{\cos(x-y)}{\cos x\cos y}$.`, S`$1+\tan x\tan y$`, [S`$1-\tan x\tan y$`, S`$\tan x+\tan y$`, S`$\cot x\cot y$`], "Divise chaque terme."),
  mc(S`Simplifie $\sec^4x-\sec^2x$.`, S`$\tan^2x\sec^2x$`, [S`$\tan^4x$`, S`$\sec^2x$`, "1"], "sec²x(sec²x − 1)."),
  num(S`$\dfrac{\sin3x}{\sin x}+\dfrac{\cos3x}{\cos x}=A\cos2x$. Trouve $A$.`, 4, "sin 4x / (sin x cos x) = 4 cos 2x."),
  num(S`$\cos^6x+\sin^6x+3\sin^2x\cos^2x$ est une constante. Trouve-la.`, 1, "(sin²x + cos²x)³."),
  num(S`$\tan^2x\csc^2x-\tan^2x$ est une constante. Trouve-la.`, 1, "tan²x(csc²x − 1) = tan²x cot²x."),
  mc(S`Pour quelle valeur $\dfrac{1-\cos x}{\sin x}=\tan\frac x2$ n'est-elle pas définie?`, S`$x=0$`, [S`$x=\frac\pi2$`, S`$x=\frac\pi3$`, S`$x=\frac\pi4$`], "sin 0 = 0."),
  mc(S`Quelle restriction faut-il pour $\tan x\cot x=1$?`, S`$x\ne\frac{n\pi}2$`, [S`$x\ne n\pi$ seulement`, S`$x\ne\frac\pi2+n\pi$ seulement`, "aucune restriction"], "tan et cot doivent toutes deux exister."),
  mc("Les courbes représentent le MG et le MD d'une affirmation. Qu'est-ce qui est vrai?", S`$\sin x\cos x$ est la moitié de $\sin2x$, donc les deux membres diffèrent`, ["l'affirmation sin x cos x = sin 2x est une identité", "ils sont égaux partout", "ils diffèrent seulement en x = 0"], "Hauteurs 1/2 et 1.", planeDoc(TG([[(x) => Math.sin(x) * Math.cos(x), "violet"], [(x) => Math.sin(2 * x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Le graphique montre une seule courbe. Quelle affirmation pourrait être vraie pour elle?", S`$\cos^2x-\sin^2x=\cos2x$`, [S`$\cos^2x-\sin^2x=1$`, S`$\cos^2x-\sin^2x=\sin2x$`, S`$\cos^2x-\sin^2x=\cos x$`], "Hauteur 1 et période π, commence à 1.", planeDoc(TG([[(x) => Math.cos(x) ** 2 - Math.sin(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Le graphique montre une courbe sans interruption aux zéros de sin x. Quel est le problème si on affirme que y = (sin²x)/(sin x) est identique à y = sin x?", S`le membre de gauche n'est pas défini là où $\sin x=0$`, ["les courbes diffèrent partout", "le membre de droite a des trous", "il n'y a aucun problème"], "Égales seulement là où le dénominateur n'est pas nul.", planeDoc(TG([[Math.sin, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  tf(S`$\dfrac{1}{1+\tan^2x}+\dfrac{1}{1+\cot^2x}=1$ partout où l'expression est définie.`, true, "cos²x + sin²x."),
  tf(S`$\sqrt{1-\sin^2x}=\cos x$ pour toute valeur de $x$.`, false, "Le membre de gauche est |cos x| : essaie x = π.", planeDoc(TG([[(x) => Math.abs(Math.cos(x)), "violet"], [Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
];
