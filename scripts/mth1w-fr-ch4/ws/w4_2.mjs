// Fiche 4.2 — Relations linéaires et non linéaires (édition enseignant)
import { EXAMPLES } from "./e4_2.mjs";
import { planeT } from "./plotT.mjs";

const tab = (xs, ys, extra = "") => String.raw`\begin{center}\begin{tabular}{c|${"c".repeat(xs.length)}}$x$ & ${xs.join(" & ")}\\\hline $y$ & ${ys.join(" & ")}${extra}\end{tabular}\end{center}`;

const PROBLEMS = [
  { level: 1, q: String.raw`Cette relation est-elle linéaire? Donne les premières différences.${tab([0, 1, 2, 3, 4], [-3, 2, 7, 12, 17])}`, recap: String.raw`$y$ : $-3, 2, 7, 12, 17$.`, ans: "linéaire; premières différences $5$" },
  { level: 1, q: String.raw`Classe chaque équation comme linéaire ou non linéaire : a) $y=4-x$ b) $y=x^2+3$ c) $y=\frac x5$ d) $xy=20$.`, recap: "Classer quatre équations.", ans: "a) linéaire b) non linéaire c) linéaire d) non linéaire" },
  { level: 1, q: String.raw`Trouve les deuxièmes différences de $y=x^2$ pour $x=0$ à $4$.`, recap: String.raw`Deuxièmes différences de $y=x^2$.`, ans: "$2, 2, 2$" },
  { level: 2, q: String.raw`Cette relation est-elle linéaire? (Les pas en x ne sont pas égaux.)${tab([1, 3, 4, 8], [5, 11, 14, 26])}`, recap: "Table aux pas inégaux.", ans: String.raw`oui : $\frac{\Delta y}{\Delta x}=3$ chaque fois; $y=3x+2$` },
  { level: 2, q: String.raw`Une population de poissons compte $200, 300, 450, 675$ individus aux années $0$ à $3$. Linéaire, quadratique ou exponentielle? Prédis l'année $4$.`, recap: "Poissons 200, 300, 450, 675.", ans: String.raw`exponentielle (rapport $1.5$); $1012.5\approx1013$` },
  { level: 2, q: String.raw`$y$ varie inversement à $x$, et $y=15$ quand $x=4$. Trouve $k$, puis $y$ quand $x=10$.`, recap: String.raw`Inverse : $y=15$ à $x=4$.`, ans: String.raw`$k=60$; $y=6$` },
  { level: 2, q: String.raw`Classe la relation et décris le graphique.${tab([0, 1, 2, 3, 4], [1, 3, 9, 27, 81])}`, recap: String.raw`$y$ : $1, 3, 9, 27, 81$.`, ans: "exponentielle (rapport 3); courbe qui monte de plus en plus vite" },
  { level: 2, q: String.raw`Explique pourquoi les premières différences peuvent être trompeuses quand les valeurs de x sont $0, 2, 3, 7$, et ce qu'il faut faire à la place.`, recap: "Pas inégaux et premières différences.", ans: String.raw`des variations de y égales sur des pas en x inégaux sont des taux différents; utilise $\frac{\Delta y}{\Delta x}$` },
  { level: 3, space: 5.5,
    q: String.raw`Une boisson chaude refroidit. Sa température ($^\circ$C) est notée toutes les $5$ min : $90, 72, 58, 47, 39$.
a) Trouve les premières différences. La relation est-elle linéaire?
b) Esquisse le graphique. Qu'arrive-t-il au rythme de refroidissement?
c) Un modèle linéaire surestimerait-il ou sous-estimerait-il la température à $30$ min? Explique.`,
    recap: "Boisson qui refroidit 90, 72, 58, 47, 39.",
    ans: String.raw`a) $-18,-14,-11,-8$ : non linéaire b) une courbe qui s'aplatit : elle refroidit plus lentement à mesure qu'elle s'approche de la température ambiante c) une droite tracée à partir des premières données descendrait trop vite et sous-estimerait` },
  { level: 3, space: 5.5,
    q: String.raw`Distance d'arrêt d'une voiture à différentes vitesses :${tab(["20", "40", "60", "80", "100"], ["6", "18", "36", "60", "90"])}($x$ : vitesse en km/h; $y$ : distance en m)
a) Montre que la relation n'est pas linéaire, mais que ses deuxièmes différences sont constantes.
b) Utilise la régularité pour prédire la distance d'arrêt à $120$ km/h.
c) Pourquoi doubler la vitesse fait-il plus que doubler la distance d'arrêt?`,
    recap: "Distance d'arrêt 6, 18, 36, 60, 90.",
    ans: String.raw`a) premières $12, 18, 24, 30$; deuxièmes $6, 6, 6$ b) première différence suivante $36$ : $126$ m c) la relation est quadratique : la distance croît comme le carré de la vitesse` },
  { level: 3, space: 5.5,
    q: String.raw`Un rectangle a une aire de $36$ cm$^2$. Sa longueur $l$ et sa largeur $w$ vérifient $lw=36$.
a) Construis une table pour $w=1, 2, 3, 4, 6, 9, 12$.
b) Place les points et décris le graphique.
c) La relation est-elle linéaire? Explique à l'aide de la table.`,
    recap: String.raw`Rectangles tels que $lw=36$.`,
    ans: String.raw`a) $36, 18, 12, 9, 6, 4, 3$ b) une courbe en forme d'hyperbole qui descend vers les axes c) non : $\frac{\Delta l}{\Delta w}$ change; le produit est constant (variation inverse)` },
  { level: 3, space: 5,
    q: String.raw`Pour chaque relation, décide si elle est linéaire, quadratique, exponentielle ou inverse, et justifie à partir de sa table ou de son équation.
a) $y=5(2)^x$ b) $y=3x^2-x$ c) $y=\frac{24}{x}$ d) $3x+2y=12$`,
    recap: "Classer quatre relations en justifiant.",
    ans: String.raw`a) exponentielle : rapport constant 2 b) quadratique : terme en $x^2$, deuxièmes différences constantes c) inverse : $xy=24$ d) linéaire : $y=-1.5x+6$, degré 1` },
  { level: 3, space: 5,
    q: String.raw`Crée ta propre table de $5$ valeurs pour a) une relation linéaire de taux de variation $-4$, b) une relation quadratique, c) une relation exponentielle de rapport $3$. Montre les différences ou les rapports qui prouvent chaque type.`,
    recap: "Créer trois tables.",
    ans: String.raw`Exemple : a) $10, 6, 2, -2, -6$ b) $0, 1, 4, 9, 16$ (deuxièmes différences $2$) c) $2, 6, 18, 54, 162$ (rapport $3$)` },
];

export const WS = {
  code: "4.2",
  title: "Relations linéaires et non linéaires",
  bigideas: String.raw`Une relation est \textbf{linéaire} quand son taux de variation est constant : des premières différences égales pour des pas en x égaux, ou des $\frac{\Delta y}{\Delta x}$ égaux en général; son graphique est une droite et son équation est de degré $1$. Les relations non linéaires comprennent les relations \textbf{quadratiques} (deuxièmes différences constantes, parabole), \textbf{exponentielles} (rapport constant) et la \textbf{variation inverse} $xy=k$ (hyperbole).`,
  goals: ["Utiliser les premières différences et Δy/Δx pour tester la linéarité.", "Reconnaître les relations quadratiques par leurs deuxièmes différences.", "Reconnaître les relations exponentielles par un rapport constant.", "Reconnaître la variation inverse xy = k.", "Classer des relations à partir de tables, de graphiques et d'équations."],
  curriculum: "C3.2, C4.1, C4.2",
  vocab: [["Premières différences", "variations de y pour des pas égaux en x"], ["Taux de variation", String.raw`$\frac{\Delta y}{\Delta x}$`], ["Deuxièmes différences", "différences des premières différences"], ["Rapport constant", "chaque y divisé par le y précédent"], ["Variation inverse", "xy = k"]],
  hook: String.raw`Montre trois graphiques sans étiquettes : une droite, une parabole et une courbe abrupte. Demande : « Lequel est le coût de l'essence, lequel est la hauteur d'une balle lancée, lequel est le nombre de visionnements d'une vidéo virale? » Dévoile ensuite les tables. Les élèves découvrent que la table indique déjà lequel est lequel.`,
  concepts: [
    ["1. Linéaire : taux de variation constant", String.raw`${tab([0, 1, 2, 3], [-2, 1, 4, 7])} Premières différences $3, 3, 3$. Avec des pas inégaux, utilise $\frac{\Delta y}{\Delta x}$ : $(0,1),(2,5),(5,11)$ donne $\frac42=2$ et $\frac63=2$.`],
    ["2. Les familles non linéaires", String.raw`\begin{center}\begin{tabular}{lll}\toprule Famille & Indice & Graphique\\\midrule quadratique & deuxièmes différences constantes & parabole\\ exponentielle & rapport constant & croît de plus en plus vite\\ inverse & $xy=k$ & hyperbole\\\bottomrule\end{tabular}\end{center}
${planeT({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x * x, color: "red" }, { f: (x) => 2 ** x, color: "green" }, { f: (x) => 24 / x, a: 0.6, color: "amber" }], lines: [{ m: 4, b: 2, color: "blue" }], step: { x: 1, y: 5 } }, 7, "Bleu : linéaire, rouge : quadratique, vert : exponentielle, orange : inverse.")}`],
    ["3. À partir de l'équation", String.raw`Les équations linéaires ont $x$ seulement à la puissance 1 et pas au dénominateur : $y=\frac x4-7$ est linéaire; $y=x^2$, $y=3^x$ et $y=\frac{12}{x}$ ne le sont pas.`],
  ],
  tips: ["Vérifie toutes les différences, pas seulement deux.", "Pas en x inégaux : divise par Δx.", "Exponentielle ou quadratique : teste les rapports en plus des deuxièmes différences.", "xy = k : vérifie le produit, pas les différences.", "Les données réelles sont rarement exactes; « presque constant » suggère un modèle linéaire."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
