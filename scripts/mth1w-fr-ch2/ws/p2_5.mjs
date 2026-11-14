// Fiche 2.5 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis. Miroir de ../../mth1w-ch2/ws/p2_5.mjs
import { polyT } from "../../mth1w-ch2/ws/tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Résous $3(x+4)=27$.`, ans: "$x=5$" },
  { level: 1, q: String.raw`Résous $6n-5=2n+11$.`, ans: "$n=4$" },
  { level: 1, q: String.raw`Résous $\dfrac{x}{4}+2=\dfrac{x}{2}$.`, recap: String.raw`Résous $\frac x4+2=\frac x2$.`, ans: "$x=8$" },
  { level: 2, q: String.raw`Résous $5(2y-3)-4y=9$.`, ans: "$y=4$" },
  { level: 2, q: String.raw`Résous $8-2(k+3)=3k-13$.`, ans: "$k=3$" },
  { level: 2, q: String.raw`Résous $\dfrac{m+5}{4}=\dfrac{m-1}{2}$.`, recap: String.raw`Résous $\frac{m+5}{4}=\frac{m-1}{2}$.`, ans: "$m=7$" },
  { level: 2, q: String.raw`Montre que $3(2x-1)=6x+4$ n'a aucune solution. À quoi ressemble la balance?`, recap: String.raw`Pourquoi $3(2x-1)=6x+4$ n'a aucune solution.`, ans: String.raw`$6x-3=6x+4$ donne $-3=4$ (faux); les plateaux ne peuvent jamais être en équilibre` },
  { level: 2, q: String.raw`La somme de trois nombres entiers impairs consécutifs est $159$. Trouve ces nombres.`, ans: "$51, 53, 55$" },
  { level: 3, space: 5,
    q: String.raw`Deux cyclistes sont à $117$ km l'un de l'autre et roulent l'un vers l'autre à $21$ km/h et à $18$ km/h.
a) Écris et résous une équation pour trouver quand ils se rencontrent.
b) Quelle distance chaque cycliste a-t-il parcourue?
c) Suppose que le cycliste le plus lent part $30$ minutes plus tôt. Combien de temps après le départ du cycliste le plus rapide se rencontrent-ils? Donne ta réponse en heures et en minutes.`,
    recap: "Cyclistes à 117 km l'un de l'autre, à 21 et à 18 km/h.",
    ans: String.raw`a) $21t+18t=117$, $t=3$ h b) $63$ km et $54$ km c) $21t+18(t+0.5)=117$, $t=\frac{108}{39}\approx2.77$ h $\approx2$ h $46$ min` },
  { level: 3, space: 5,
    q: String.raw`Un pot contient $64$ pièces, toutes des huards (\$1) et des pièces de deux dollars (\$2), d'une valeur totale de $97$ dollars.
a) Soit $l$ le nombre de huards. Écris une équation et résous-la.
b) Combien y a-t-il de pièces de deux dollars? Vérifie les deux conditions.
c) $64$ pièces de ce type pourraient-elles valoir $130$ dollars? Explique à l'aide de ton équation.`,
    recap: "64 huards et pièces de deux dollars valant 97 dollars.",
    ans: String.raw`a) $l+2(64-l)=97$, $l=31$ b) $33$ pièces de deux dollars; $31+33=64$, $31+66=97$ ✓ c) Non : $128-l=130$ donne $l=-2$.` },
  { level: 3, space: 5,
    q: String.raw`Une mère a $4$ fois l'âge de son fils. Dans $20$ ans, elle aura deux fois l'âge qu'il aura.
a) Écris et résous une équation pour trouver leurs âges actuels.
b) Vérifie ta réponse dans la situation.
c) Il y a combien d'années avait-elle $7$ fois l'âge de son fils?`,
    recap: "Mère : 4 fois l'âge du fils; dans 20 ans, le double.",
    ans: String.raw`a) $4s+20=2(s+20)$, $s=10$ : fils $10$ ans, mère $40$ ans b) Dans $20$ ans : $60=2(30)$ ✓ c) $40-y=7(10-y)$, il y a $y=5$ ans` },
  { level: 3, space: 5.5,
    q: String.raw`a) La moitié d'un nombre plus le cinquième de ce nombre égale le quart du nombre plus $27$. Trouve le nombre.
b) Une pompe remplit une piscine en $6$ h; une deuxième pompe la remplit en $3$ h. Quelle fraction de la piscine chacune remplit-elle en une heure? Résous $\frac t6+\frac t3=1$ pour trouver combien de temps elles prennent ensemble.
c) Une troisième pompe, qui remplit la piscine en $12$ h, aide aussi. Combien de temps les trois prennent-elles?`,
    recap: "Problème de fractions; pompes de 6 h, 3 h (et 12 h).",
    ans: String.raw`a) $\frac x2+\frac x5=\frac x4+27$, $x=60$ b) $\frac16$ et $\frac13$; $t=2$ h c) $\frac t6+\frac t3+\frac t{12}=1$, $t=\frac{12}{7}\approx1.71$ h` },
  { level: 3, space: 5,
    q: String.raw`a) Les angles d'un triangle mesurent $(2x+10)^\circ$, $(3x-5)^\circ$ et $(x+25)^\circ$. Trouve $x$ et chaque angle, et classe le triangle.
${polyT([[0, 0], [4, 0], [1.4, 2.6]], ["", "", ""], "")}
b) La longueur d'un rectangle est de $3$ cm de moins que le double de sa largeur. Si on augmentait la longueur de $5$ cm et qu'on diminuait la largeur de $1$ cm, le périmètre serait de $44$ cm. Trouve les dimensions du rectangle de départ.`,
    recap: String.raw`Angles $2x+10$, $3x-5$, $x+25$; rectangle $l=2w-3$.`,
    ans: String.raw`a) $6x+30=180$, $x=25$ : $60^\circ, 70^\circ, 50^\circ$, triangle acutangle scalène b) $2(2w+2+w-1)=44$, $w=7$ cm, $l=11$ cm` },
];
