// Fiche 4.5 — Droites particulières et inéquations linéaires (édition enseignant)
import { EXAMPLES } from "./e4_5.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Écris l'équation de a) la droite horizontale passant par $(3,-2)$ b) la droite verticale passant par $(3,-2)$.`, recap: String.raw`Droites passant par $(3,-2)$.`, ans: String.raw`a) $y=-2$ b) $x=3$` },
  { level: 1, q: String.raw`Donne la pente de a) $y=7$ b) $x=-4$ c) $y=-2.5x$.`, ans: "a) 0 b) non définie c) $-2.5$" },
  { level: 1, q: String.raw`$(2,3)$ est-il une solution de $y>2x-2$?`, ans: String.raw`oui : $3>2$` },
  { level: 2, q: String.raw`Trace $y\ge-\frac12x+2$. Indique si la frontière est pleine ou pointillée et quel côté tu ombres.`, recap: String.raw`Tracer $y\ge-\frac12x+2$.`, ans: "pleine; ombrer au-dessus (test (0, 0) : 0 ≥ 2 faux)" },
  { level: 2, q: String.raw`Trace $y<3x-1$.`, ans: "frontière pointillée; ombrer au-dessous" },
  { level: 2, q: String.raw`Écris l'inéquation illustrée.${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: -2, dash: true }], shade: { m: 1, b: -2, above: true } }, 5)}`, recap: "Ombré au-dessus d'une droite pointillée y = x − 2.", ans: "$y>x-2$" },
  { level: 2, q: String.raw`Quels points vérifient $2x+3y\le12$ : $(0,0)$, $(3,2)$, $(4,2)$, $(6,0)$?`, recap: String.raw`Points de $2x+3y\le12$.`, ans: String.raw`$(0,0)$, $(3,2)$ ($12$) et $(6,0)$ ($12$); pas $(4,2)$ ($14$)` },
  { level: 2, q: String.raw`L'essence coûte $1.60$ dollar le litre. Écris la relation du coût de $L$ litres; est-ce une variation directe? Trouve le coût de $45$ L.`, recap: "Essence à 1.60 le litre.", ans: String.raw`$C=1.6L$, directe; $72$ dollars` },
  { level: 3, space: 5.5,
    q: String.raw`Une élève peut dépenser au plus $90$ dollars en musique : les chansons coûtent $1.50$ chacune et les albums $12$ chacun.
a) Écris une inéquation pour $s$ chansons et $a$ albums.
b) Trace-la (chansons à l'horizontale) et donne les coordonnées à l'origine.
c) L'élève peut-elle acheter $20$ chansons et $5$ albums? $36$ chansons et $3$ albums? Montre tes tests.`,
    recap: "Budget musique 1.5s + 12a ≤ 90.",
    ans: String.raw`a) $1.5s+12a\le90$ b) coordonnées à l'origine $(60,0)$, $(0,7.5)$ c) $30+60=90$ ✓ (sur la frontière); $54+36=90$ ✓` },
  { level: 3, space: 5.5,
    q: String.raw`On trace un rectangle dont les sommets sont sur les droites $x=-3$, $x=5$, $y=-1$ et $y=4$.
a) Trace les quatre droites et nomme les sommets.
b) Trouve le périmètre et l'aire.
c) Écris deux inéquations qui décrivent tous les points à l'intérieur du rectangle.`,
    recap: "Rectangle limité par x = −3, x = 5, y = −1, y = 4.",
    ans: String.raw`a) $(-3,-1),(5,-1),(5,4),(-3,4)$ b) $P=26$, $A=40$ c) $-3<x<5$ et $-1<y<4$` },
  { level: 3, space: 5.5,
    q: String.raw`Une boulangerie dispose d'au plus $24$ h de temps de four : le pain prend $2$ h par fournée et les muffins $1.5$ h par fournée.
a) Écris et trace l'inéquation (pain $b$ à l'horizontale, muffins $m$ à la verticale).
b) Pourquoi n'utilise-t-on que le premier quadrant? Quels points ont du sens?
c) La boulangerie doit faire au moins $4$ fournées de pain. Quel est le plus grand nombre de fournées de muffins?`,
    recap: "Temps de four 2b + 1.5m ≤ 24.",
    ans: String.raw`a) $2b+1.5m\le24$; coordonnées à l'origine $(12,0)$, $(0,16)$ b) le nombre de fournées ne peut pas être négatif; points à coordonnées entières c) $b=4$ : $1.5m\le16$, $m\le10.67$, donc $10$` },
  { level: 3, space: 5,
    q: String.raw`a) Trace $y\ge x-2$ et $y\le-x+6$ sur les mêmes axes et ombre la région qui vérifie les deux.
b) Trouve le sommet de la région.
c) Donne deux points de la région et un point qui vérifie seulement la première inéquation.`,
    recap: "Deux inéquations ensemble.",
    ans: String.raw`b) $(4,2)$ c) p. ex. $(0,0)$ et $(1,2)$; $(0,8)$ vérifie seulement la première ($8\ge-2$ mais $8>6$)` },
  { level: 3, space: 5,
    q: String.raw`Explique les différences entre $y=4$, $x=4$, $y=4x$ et $y>4$. Esquisse chacune.`,
    recap: "Quatre graphiques particuliers.",
    ans: "droite horizontale; droite verticale; droite qui passe par l'origine, de pente 4; la région au-dessus de la droite pointillée y = 4" },
];

export const WS = {
  code: "4.5",
  title: "Tracer des droites particulières",
  bigideas: String.raw`Droites particulières : \textbf{horizontale} $y=k$ (pente $0$), \textbf{verticale} $x=k$ (pente non définie) et \textbf{variation directe} $y=mx$ (passe par l'origine). Une \textbf{inéquation linéaire} décrit une région : trace la frontière (pointillée pour $<,>$; pleine pour $\le,\ge$), teste un point et ombre. Les inéquations modélisent des budgets et des limites.`,
  goals: ["Tracer et écrire y = k et x = k.", "Expliquer la différence entre une pente de 0 et une pente non définie.", "Reconnaître la variation directe y = mx.", "Tracer des inéquations linéaires à l'aide d'une frontière et d'un point test.", "Modéliser et tester des situations à l'aide d'inéquations."],
  curriculum: "C4.2",
  vocab: [["Droite horizontale", "y = k, pente 0"], ["Droite verticale", "x = k, pente non définie"], ["Droite frontière", "la droite y = mx + b d'une inéquation"], ["Point test", "un point qui sert à choisir le côté à ombrer"]],
  hook: String.raw`Trace une ligne à la craie sur le plancher. Demande aux élèves de se placer du côté où « la distance à la porte est inférieure à $3$ mètres ». La ligne est la frontière; le groupe est la région ombrée. Demande ensuite : « Les personnes debout \emph{sur} la ligne comptent-elles? » Cela décide entre pleine et pointillée.`,
  concepts: [
    ["1. Droites particulières", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0, b: 3, color: "blue", label: "y = 3", lx: 3.5 }, { m: 1.5, b: 0, color: "green", label: "y = 1.5x", lx: 1.8 }], vlines: [{ x: -2, color: "red", label: "x = −2" }] }, 5.5)}`],
    ["2. Tracer une inéquation", String.raw`(1) Écris-la sous la forme $y\ \square\ mx+b$. (2) Frontière pointillée pour $<,>$; pleine pour $\le,\ge$. (3) Teste $(0,0)$ (s'il n'est pas sur la droite); ombre le côté qui la rend vraie.
${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1, b: 4 }], shade: { m: -1, b: 4, above: false }, points: [{ x: 0, y: 0, label: "(0, 0)", color: "green" }] }, 5, "y ≤ −x + 4 : pleine, ombrée au-dessous.")}`],
    ["3. Les inéquations en contexte", String.raw`Budget : $12x+5y\le60$. Réarrangée : $y\le-2.4x+12$. Seuls les points avec $x,y\ge0$ (et souvent des nombres entiers) ont du sens.`],
  ],
  tips: ["y = 3 est horizontale; x = 3 est verticale.", "Diviser une inéquation par un nombre négatif inverse le sens.", "Si la frontière passe par (0, 0), teste un autre point.", "En contexte, limite-toi aux valeurs qui ont du sens (non négatives, entières).", "Les points d'une frontière pleine sont des solutions."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
