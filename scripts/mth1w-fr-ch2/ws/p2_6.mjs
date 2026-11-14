// Fiche 2.6 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis. Miroir de ../../mth1w-ch2/ws/p2_6.mjs
import { lineT } from "../../mth1w-ch2/ws/tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Isole $w$ dans $V=lwh$.`, ans: String.raw`$w=\frac{V}{lh}$` },
  { level: 1, q: String.raw`Isole $m$ dans $y=mx+b$.`, ans: String.raw`$m=\frac{y-b}{x}$` },
  { level: 1, q: String.raw`Isole $l$ dans $P=2(l+w)$.`, ans: String.raw`$l=\frac P2-w$` },
  { level: 2, q: String.raw`Isole $y$ dans $3x-4y=12$.`, ans: String.raw`$y=\frac34x-3$` },
  { level: 2, q: String.raw`Isole $h$ dans $A=\frac12(a+b)h$.`, ans: String.raw`$h=\frac{2A}{a+b}$` },
  { level: 2, q: String.raw`La somme des angles d'un polygone à $n$ côtés est $S=180(n-2)$. Isole $n$, puis trouve $n$ lorsque $S=1260^\circ$.`, recap: String.raw`$S=180(n-2)$ : isole $n$; $S=1260$.`, ans: String.raw`$n=\frac{S}{180}+2$; $9$ côtés` },
  { level: 2, q: String.raw`Un forfait de données coûte $C=25+0.12k$ dollars pour $k$ Mo supplémentaires. Isole $k$ et trouve $k$ lorsque $C=43$.`, recap: String.raw`$C=25+0.12k$; $C=43$.`, ans: String.raw`$k=\frac{C-25}{0.12}$; $150$ Mo` },
  { level: 2, q: String.raw`Isole $T$ dans $v=331+0.6T$, puis trouve la température lorsque le son se déplace à $340$ m/s.`, recap: String.raw`$v=331+0.6T$; $v=340$.`, ans: String.raw`$T=\frac{v-331}{0.6}$; $15\,^\circ$C` },
  { level: 3, space: 5,
    q: String.raw`La location d'une salle coûte $C=350+22.5g$ dollars pour $g$ invités.
a) Transforme la formule pour exprimer $g$ en fonction de $C$.
b) Utilise-la pour remplir la table pour des budgets de $800$, $1250$, $1700$ et $2150$ dollars.
c) Décris la régularité du nombre d'invités et explique-la à l'aide de la formule.`,
    recap: String.raw`Salle $C=350+22.5g$; budgets de 800 à 2150.`,
    ans: String.raw`a) $g=\frac{C-350}{22.5}$ b) $20, 40, 60, 80$ c) $+20$ invités pour chaque tranche de $+450$ dollars, car $450\div22.5=20$.` },
  { level: 3, space: 5,
    q: String.raw`a) Isole $C$ dans $F=1.8C+32$.
b) La température en kelvins est $K=C+273.15$. Écris une seule formule qui donne $K$ en fonction de $F$.
c) Trouve $K$ lorsque $F=212$.
d) À quelle température les échelles Celsius et Fahrenheit indiquent-elles le même nombre?`,
    recap: "Fahrenheit, Celsius et kelvins.",
    ans: String.raw`a) $C=\frac{F-32}{1.8}$ b) $K=\frac{F-32}{1.8}+273.15$ c) $373.15$ d) $C=1.8C+32$ donne $C=-40$` },
  { level: 3, space: 5,
    q: String.raw`Une droite a pour équation $4x+3y=24$.
${lineT({ m: -4 / 3, b: 8, xmax: 7, ymax: 9, xtick: "0,1,...,7", ytick: "0,1,...,9", width: 6.5, height: 5 }, "")}
a) Transforme-la sous la forme $y=mx+b$ et donne la pente et l'ordonnée à l'origine.
b) Trouve les deux coordonnées à l'origine.
c) Le point $(-3, 12)$ est-il sur la droite? Montre comment tu le sais.
d) Isole plutôt $x$ dans l'équation.`,
    recap: String.raw`Droite $4x+3y=24$.`,
    ans: String.raw`a) $y=-\frac43x+8$; pente $-\frac43$, ordonnée à l'origine $8$ b) $(6,0)$, $(0,8)$ c) Oui : $-12+36=24$ d) $x=\frac{24-3y}{4}$` },
  { level: 3, space: 5,
    q: String.raw`Le volume d'un cylindre est $V=\pi r^2h$.
a) Isole $h$.
b) Une canette contient $355$ cm$^3$ et a un rayon de $3.3$ cm. Trouve sa hauteur au dixième près.
c) Isole $r$ (tu auras besoin d'une racine carrée), puis trouve le rayon d'une canette de $500$ cm$^3$ qui mesure $12$ cm de hauteur.`,
    recap: String.raw`Cylindre $V=\pi r^2h$ : hauteur et rayon de canettes.`,
    ans: String.raw`a) $h=\frac{V}{\pi r^2}$ b) $\approx10.4$ cm c) $r=\sqrt{\frac{V}{\pi h}}\approx3.64$ cm` },
  { level: 3, space: 5,
    q: String.raw`Priya a isolé $b$ dans $A=\frac12h(a+b)$ ainsi : $\ 2A=h(a+b)\ \Rightarrow\ 2A-h=a+b\ \Rightarrow\ b=2A-h-a$.
a) Trouve son erreur.
b) Écris la bonne formule.
c) Teste les deux formules avec $a=4$, $b=6$, $h=5$ (donc $A=25$).`,
    recap: String.raw`Analyse d'erreur : isoler $b$ dans $A=\frac12h(a+b)$.`,
    ans: String.raw`a) $h$ multiplie $(a+b)$, donc il faut diviser par $h$, et non le soustraire b) $b=\frac{2A}{h}-a$ c) Priya : $50-5-4=41$ (faux); bonne formule : $10-4=6$ ✓` },
];
