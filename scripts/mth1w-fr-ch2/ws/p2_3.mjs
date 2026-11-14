// Fiche 2.3 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis. Miroir de ../../mth1w-ch2/ws/p2_3.mjs
import { rectT } from "../../mth1w-ch2/ws/tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Développe $7(3k-2)$.`, ans: "$21k-14$" },
  { level: 1, q: String.raw`Simplifie $(4a^2b)(-5ab^3)$.`, ans: "$-20a^3b^4$" },
  { level: 1, q: String.raw`Développe $-2x(x^2-6)$.`, ans: "$-2x^3+12x$" },
  { level: 2, q: String.raw`Développe $3p(2p^2-p+5)$.`, ans: "$6p^3-3p^2+15p$" },
  { level: 2, q: String.raw`Simplifie $5(2m-1)-3(m-4)$.`, ans: "$7m+7$" },
  { level: 2, q: String.raw`Simplifie $x(x+4)-2(x^2-x)$.`, ans: "$-x^2+6x$" },
  { level: 2, q: String.raw`Factorise complètement : $12y^3-8y^2+20y$.`, ans: "$4y(3y^2-2y+5)$" },
  { level: 2, q: String.raw`Évalue $2t(t-3)-(t^2-5t)$ pour $t=-2$ deux fois : une fois avant de simplifier et une fois après.`, recap: String.raw`$2t(t-3)-(t^2-5t)$ pour $t=-2$, avant et après.`, ans: String.raw`$20-14=6$; la forme simplifiée $t^2-t$ donne $4+2=6$` },
  { level: 3, space: 4.5,
    q: String.raw`Trouve le terme manquant pour que chaque énoncé soit vrai.
a) $3x(\ \square\ -4)=6x^2-12x$ \qquad b) $\square\,(2a+5)=8a^3+20a^2$ \qquad c) $-5y^2(y^2+\square)=-5y^4+15y^3$
d) Explique comment tu peux vérifier tes réponses.`,
    recap: "Termes manquants dans trois développements.",
    ans: String.raw`a) $2x$ b) $4a^2$ c) $-3y$ d) Développe chaque membre de gauche et compare-le au membre de droite.` },
  { level: 3, space: 5,
    q: String.raw`Une affiche mesure $4x$ cm de largeur et $3x$ cm de hauteur. Elle a une bordure de $2$ cm de largeur tout autour.
${rectT("4x+4", "3x+4", "", { w: 5.2, h: 3.2, inner: 0.45 })}
a) Explique pourquoi les dimensions extérieures sont $4x+4$ et $3x+4$.
b) Découpe la bordure en quatre bandes et écris une expression simplifiée pour l'aire de la bordure.
c) Trouve l'aire de la bordure lorsque $x=10$, et vérifie en soustrayant les aires des deux rectangles.`,
    recap: String.raw`Affiche de $4x$ sur $3x$ avec une bordure de 2 cm.`,
    ans: String.raw`a) On ajoute $2$ cm de chaque côté b) $2\cdot2(4x+4)+2\cdot2(3x)=28x+16$ c) $296$ cm$^2$; $44\times34-40\times30=1496-1200=296$ ✓` },
  { level: 3, space: 5,
    q: String.raw`Une école vend $3x$ billets pour adultes à $(2p+5)$ dollars chacun et $5x$ billets pour élèves à $p$ dollars chacun.
a) Écris et simplifie un polynôme pour le revenu total.
b) Trouve le revenu lorsque $x=40$ et $p=8$.
c) Factorise ta réponse en a). Que signifie chaque facteur dans la situation?`,
    recap: String.raw`$3x$ billets pour adultes à $2p+5$, $5x$ billets pour élèves à $p$.`,
    ans: String.raw`a) $11px+15x$ b) $4120$ dollars c) $x(11p+15)$ : $x$ groupes de $3$ adultes et de $5$ élèves, chaque groupe payant $11p+15$ dollars.` },
  { level: 3, space: 5,
    q: String.raw`Sam a simplifié $15-3(2x-4)$ ainsi : $\ 15-3(2x-4)=12(2x-4)=24x-48$.
a) Explique l'erreur de Sam.
b) Simplifie l'expression correctement.
c) Montre avec $x=1$ que la réponse de Sam et l'expression de départ ne sont pas égales, mais que la tienne l'est.`,
    recap: String.raw`Analyse d'erreur : $15-3(2x-4)$.`,
    ans: String.raw`a) Il a soustrait $15-3$ avant de multiplier; la multiplication passe en premier b) $15-6x+12=27-6x$ c) départ $21$, Sam $-24$, bonne réponse $21$ ✓` },
  { level: 3, space: 5,
    q: String.raw`Le rectangle A a une aire de $6x^2+9x$ et un côté de $3x$. Le rectangle B a la même aire et un côté de $x$.
a) Trouve l'autre côté de chaque rectangle en factorisant.
b) Écris une expression simplifiée pour chaque périmètre.
c) Quel rectangle a le plus grand périmètre pour tout $x>0$? De combien?`,
    recap: String.raw`Aire $6x^2+9x$ avec un côté $3x$ ou un côté $x$.`,
    ans: String.raw`a) A : $2x+3$; B : $6x+9$ b) A : $10x+6$; B : $14x+18$ c) B, de $4x+12$.` },
];
