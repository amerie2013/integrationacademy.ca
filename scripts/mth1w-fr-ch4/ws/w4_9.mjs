// Fiche 4.9 — Droites parallèles et perpendiculaires (édition enseignant)
import { EXAMPLES } from "./e4_9.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Donne la pente d'une droite a) parallèle et b) perpendiculaire à $y=\frac35x-1$.`, ans: String.raw`a) $\frac35$ b) $-\frac53$` },
  { level: 1, q: String.raw`Parallèles, perpendiculaires ou ni l'un ni l'autre? a) $y=2x+1$, $y=-\frac12x+4$ b) $y=3x$, $y=3x-5$ c) $y=x$, $y=2x$.`, recap: "Classer trois paires.", ans: "a) perpendiculaires b) parallèles c) ni l'un ni l'autre" },
  { level: 1, q: String.raw`Quelle est la pente perpendiculaire à une droite horizontale?`, ans: "non définie (verticale)" },
  { level: 2, q: String.raw`Trouve la droite parallèle à $y=-2x+5$ qui passe par $(3,1)$.`, ans: "$y=-2x+7$" },
  { level: 2, q: String.raw`Trouve la droite perpendiculaire à $y=\frac14x-3$ qui passe par $(1,2)$.`, ans: "$y=-4x+6$" },
  { level: 2, q: String.raw`Les droites $3x-4y+8=0$ et $8x+6y-1=0$ sont-elles perpendiculaires? Explique.`, recap: "Deux droites sous la forme générale.", ans: String.raw`oui : pentes $\frac34$ et $-\frac43$, produit $-1$` },
  { level: 2, q: String.raw`Trouve $k$ pour que $y=kx+2$ soit perpendiculaire à $y=-\frac23x$.`, ans: String.raw`$k=\frac32$` },
  { level: 2, q: String.raw`Trouve la droite passant par $(-2,5)$ parallèle à $2x+y-3=0$. Donne la forme générale.`, recap: String.raw`Parallèle à $2x+y-3=0$ passant par $(-2,5)$.`, ans: "$2x+y-1=0$" },
  { level: 3, space: 5.5,
    q: String.raw`Montre que $P(1,1)$, $Q(5,3)$, $R(4,5)$, $S(0,3)$ forment un rectangle.
${planeT({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }, segs: [{ pts: [[1, 1], [5, 3], [4, 5], [0, 3], [1, 1]], color: "violet" }], points: [{ x: 1, y: 1, label: "P" }, { x: 5, y: 3, label: "Q" }, { x: 4, y: 5, label: "R" }, { x: 0, y: 3, label: "S" }], step: { x: 1, y: 1 } }, 5)}
a) Trouve les pentes des quatre côtés.
b) Utilise-les pour montrer que les côtés opposés sont parallèles et que les côtés adjacents sont perpendiculaires.
c) Est-ce un carré? (Indice : compare les longueurs des côtés.)`,
    recap: "Rectangle PQRS.",
    ans: String.raw`a) $PQ=\frac12$, $QR=-2$, $RS=\frac12$, $SP=-2$ b) pentes opposées égales; $\frac12(-2)=-1$ c) $PQ=\sqrt{20}$, $QR=\sqrt5$ : ce n'est pas un carré` },
  { level: 3, space: 5.5,
    q: String.raw`Triangle $A(-3,2)$, $B(1,4)$, $C(3,0)$.
a) Montre que le triangle a un angle droit. À quel sommet?
b) Trouve l'équation de la hauteur issue de $B$ vers le côté $AC$ (la droite passant par $B$ perpendiculaire à $AC$).
c) Trouve où la hauteur rencontre $AC$.`,
    recap: "Triangle rectangle ABC; hauteur issue de B.",
    ans: String.raw`a) $m_{AB}=\frac12$, $m_{BC}=-2$ : angle droit en $B$ b) $m_{AC}=-\frac13$, pente de la hauteur $3$ : $y=3x+1$ c) $AC$ : $y=-\frac13x+1$; elles se rencontrent en $(0,1)$` },
  { level: 3, space: 5.5,
    q: String.raw`Une route suit $y=\frac12x+2$. Une nouvelle route doit la rencontrer à angle droit au point $(4,4)$.
a) Trouve l'équation de la nouvelle route.
b) Où la nouvelle route coupe-t-elle l'axe des x?
c) Une troisième route est parallèle à la première et passe par $(0,-3)$. Où coupe-t-elle la nouvelle route?`,
    recap: String.raw`Routes perpendiculaires à $y=\frac12x+2$.`,
    ans: String.raw`a) $y=-2x+12$ b) $(6,0)$ c) $\frac12x-3=-2x+12$, $x=6$ : $(6,0)$` },
  { level: 3, space: 5,
    q: String.raw`Explique pourquoi le produit des pentes de deux droites perpendiculaires est $-1$. Utilise un triangle de pente de course $a$ et de montée $b$ qu'on fait pivoter de $90^\circ$.`,
    recap: "Pourquoi le produit des pentes perpendiculaires est −1.",
    ans: String.raw`faire pivoter le triangle donne une course $b$ et une montée $-a$ : pentes $\frac ba$ et $-\frac ab$, produit $-1$` },
  { level: 3, space: 5,
    q: String.raw`Les droites $y=(2k-1)x+3$ et $y=(k+4)x-1$ sont parallèles.
a) Trouve $k$.
b) Pour quelle valeur de $k$ la deuxième droite est-elle perpendiculaire à $y=2x$?
c) Explique pourquoi les deux droites données ne peuvent jamais être la même droite.`,
    recap: String.raw`Pentes $2k-1$ et $k+4$.`,
    ans: String.raw`a) $2k-1=k+4$, $k=5$ b) $k+4=-\frac12$, $k=-4.5$ c) leurs ordonnées à l'origine sont différentes ($3$ et $-1$)` },
];

export const WS = {
  code: "4.9",
  title: "Droites parallèles et perpendiculaires",
  bigideas: String.raw`Des droites \textbf{parallèles} ont des pentes égales (et des ordonnées à l'origine différentes). Des droites \textbf{perpendiculaires} ont des pentes opposées et inverses : $m_1m_2=-1$; les droites horizontales et verticales sont perpendiculaires. Ces faits permettent d'écrire des droites parallèles ou perpendiculaires à une droite donnée passant par un point, et de prouver des angles droits et des rectangles dans le plan cartésien.`,
  goals: ["Classer des paires de droites selon leurs pentes.", "Trouver l'opposé de l'inverse.", "Écrire une droite parallèle passant par un point.", "Écrire une droite perpendiculaire passant par un point.", "Utiliser les pentes pour prouver des angles droits et des rectangles."],
  curriculum: "C4.2, C4.4",
  vocab: [["Parallèles", "pentes égales"], ["Perpendiculaires", "le produit des pentes est −1"], ["Opposé de l'inverse", "renverser et changer le signe"], ["Hauteur", "perpendiculaire abaissée d'un sommet vers le côté opposé"]],
  hook: String.raw`Dessine sur du papier quadrillé un rectangle dont les côtés ne sont pas horizontaux (p. ex. $(1,1),(5,3),(4,5),(0,3)$). Demande : « Comment être sûr que c'est un rectangle sans rapporteur d'angles? » Le calcul des pentes révèle la régularité $\frac12$ et $-2$.`,
  concepts: [
    ["1. Les tests des pentes", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue" }, { m: 2, b: -3, color: "blue" }, { m: -0.5, b: 1, color: "red" }] }, 5.5, "Bleu : parallèles (pente 2). Rouge : perpendiculaire (pente −½).")}`],
    ["2. Écrire des droites passant par un point", String.raw`Parallèle à $y=-4x+1$ passant par $(2,3)$ : $m=-4$, $b=11$. Perpendiculaire à $2x+3y-6=0$ passant par $(4,-1)$ : $m=-\frac23$ donnée, donc $m_\perp=\frac32$, $b=-7$.`],
    ["3. La géométrie à l'aide des pentes", String.raw`Côtés opposés parallèles + côtés adjacents perpendiculaires $\Rightarrow$ rectangle. Une paire de côtés dont le produit des pentes est $-1$ $\Rightarrow$ triangle rectangle.`],
  ],
  tips: ["Renverse ET change le signe.", "Convertis la forme générale avant de comparer les pentes.", "Horizontale ⟂ verticale, même si la règle du produit ne s'applique pas.", "Pentes égales et ordonnées à l'origine égales : la même droite, pas des parallèles.", "Indique à quel sommet se trouve l'angle droit."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
