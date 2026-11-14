// Fiche 5.5 — Modifier les dimensions : le périmètre (édition enseignant)
import { figT } from "./figT.mjs";
import { rect, polygon } from "../../mth1w-ch5/figs5.mjs";

const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

const EXAMPLES = [
  { title: "Figure composée avec un demi-cercle", q: String.raw`Une scène est un rectangle de $10$ m sur $6$ m, avec un demi-cercle sur un des côtés de $6$ m. Trouve la longueur de moulure nécessaire pour en faire le tour.`,
    fig: figT([{ poly: [[0, 0], [10, 0], ...arc(10, 3, 3, -90, 90).slice(1, -1), [10, 6], [0, 6]], fill: "amber", color: "amber" }, { seg: [[10, 0], [10, 6]], color: "amber", dash: true, width: 1.2 }, { text: "10 m", at: [5, -0.9], bold: true, color: "blue" }, { text: "6 m", at: [-0.5, 3], bold: true, color: "blue", anchor: "end" }], 4.4),
    steps: [String.raw`\textbf{Périmètre} = la frontière extérieure seulement. Le côté pointillé de $6$ m relie les figures, donc il n'a \emph{pas} de moulure.`,
      String.raw`\textbf{Côtés droits :} $10+6+10=26$ m.`,
      String.raw`\textbf{Demi-cercle :} la moitié de $C=\pi d$ : $\frac12\pi(6)=3\pi\approx9.42$ m.`,
      String.raw`\textbf{Total :} $26+9.42=35.42$ m.`],
    ans: String.raw`$\approx35.4$ m` },
  { title: "Une figure en L", q: String.raw`Une pièce en forme de L mesure $9$ m sur $7$ m, avec un coin de $4$ m sur $3$ m retiré. Trouve son périmètre.`,
    fig: figT(polygon([[0, 0], [9, 0], [9, 4], [5, 4], [5, 7], [0, 7]], { sides: ["9", "4", "4", "3", "5", "7"], fill: "blue" }), 3.8),
    steps: [String.raw`\textbf{Côtés manquants :} hauteur de la partie droite $7-3=4$; largeur du haut $9-4=5$.`,
      String.raw`\textbf{Faire le tour :} $9+4+4+3+5+7=32$ m.`,
      String.raw`\textbf{Vérification :} les morceaux horizontaux totalisent $9$ en haut et en bas, les morceaux verticaux totalisent $7$ de chaque côté, donc $P=2(9+7)=32$ \checkmark`],
    ans: "$32$ m" },
  { title: "Ajouter à un côté", q: String.raw`On augmente de $5$ cm la longueur d'un rectangle de $14$ cm sur $9$ cm et on diminue sa largeur de $2$ cm. Trouve la variation du périmètre.`,
    steps: [String.raw`\textbf{Formule :} $P=2(l+w)$.`,
      String.raw`\textbf{Avant :} $2(14+9)=2(23)=46$ cm.`,
      String.raw`\textbf{Après} ($19$ sur $7$) : $2(19+7)=2(26)=52$ cm.`,
      String.raw`\textbf{Variation :} $52-46=+6$. Chaque changement compte deux fois : $2(5-2)=6$ \checkmark`],
    ans: "augmentation de 6 cm" },
  { title: "Réduire une figure composée", q: String.raw`La scène de l'exemple 1 est réduite selon $k=0.5$ pour une maquette. Trouve la longueur de moulure de la maquette.`,
    steps: [String.raw`\textbf{Règle :} chaque longueur (droite ou courbe) est multipliée par $k$, donc le périmètre est multiplié par $k$.`,
      String.raw`\textbf{Maquette :} $0.5\times35.42\approx17.71$ m.`,
      String.raw`\textbf{Vérification :} côtés droits $5+3+5=13$, demi-cercle $\frac12\pi(3)\approx4.71$; total $17.71$ \checkmark`],
    ans: String.raw`$\approx17.7$ m` },
  { title: "Trouver le facteur d'échelle", q: String.raw`Un triangle de périmètre $24$ cm est agrandi; son plus long côté passe de $10$ cm à $25$ cm. Trouve le nouveau périmètre.`,
    steps: [String.raw`\textbf{Facteur d'échelle} $k=\frac{\text{nouvelle longueur}}{\text{ancienne longueur}}$ pour des côtés correspondants : $k=25\div10=2.5$.`,
      String.raw`\textbf{Règle :} périmètre $\times k$.`,
      String.raw`\textbf{Nouveau périmètre :} $2.5\times24=60$ cm.`],
    ans: "$60$ cm" },
  { title: "Circonférence et rayon", q: String.raw`Une roue de vélo a un diamètre de $66$ cm. Combien de tours complets fait-elle sur $1$ km ?`,
    fig: figT([{ circle: [0, 0, 3.3], fill: "#ede9fe", color: "violet" }, { seg: [[-3.3, 0], [3.3, 0]], color: "violet" }, { text: "66 cm", at: [0, 0.6], bold: true, color: "violet" }, { seg: [[-3.3, -3.3], [7, -3.3]], color: "ink" }], 3),
    steps: [String.raw`\textbf{Idée clé :} un tour complet fait avancer la roue d'une circonférence.`,
      String.raw`\textbf{Circonférence :} $C=\pi d=\pi(66)\approx207.3$ cm.`,
      String.raw`\textbf{Mêmes unités :} $1$ km $=1000$ m $=100\,000$ cm.`,
      String.raw`\textbf{Tours :} $100\,000\div207.3\approx482.3$, donc $482$ tours complets.`],
    ans: "482 tours complets" },
  { title: "Le plus petit périmètre, avec des nombres entiers", q: String.raw`Un rectangle d'aire $48$ m$^2$ a des côtés entiers. Lequel a le plus petit périmètre ?`,
    steps: [String.raw`\textbf{Dresse la liste des paires de facteurs de 48} et trouve $P=2(l+w)$ pour chacune :`,
      String.raw`$1\times48$ : $98$; $2\times24$ : $52$; $3\times16$ : $38$; $4\times12$ : $32$; $6\times8$ : $28$.`,
      String.raw`\textbf{Régularité :} plus le rectangle est proche d'un carré, plus le périmètre est petit. $6\times8$ est le plus proche ($\sqrt{48}\approx6.93$).`],
    ans: String.raw`$6$ m sur $8$ m, $P=28$ m` },
  { title: "Le moins de clôture avec un mur", q: String.raw`Un jardin rectangulaire de $72$ m$^2$ est aménagé contre le mur d'une maison. Trouve les dimensions qui utilisent le moins de clôture.`,
    fig: figT([{ seg: [[-1, 6], [13, 6]], color: "gray", width: 4 }, ...rect(12, 6, { lw: "12 m", lh: "6 m", fill: "green" })], 3.8),
    steps: [String.raw`\textbf{Clôture :} deux largeurs et une longueur : $2w+l$.`,
      String.raw`\textbf{Règle :} avec un mur, la meilleure longueur est le double de la largeur, $l=2w$.`,
      String.raw`\textbf{Aire :} $w(2w)=72\Rightarrow2w^2=72\Rightarrow w^2=36\Rightarrow w=6$, donc $l=12$.`,
      String.raw`\textbf{Clôture :} $6+12+6=24$ m. \textbf{Vérification :} $4\times18$ demande $26$; $8\times9$ demande $25$ \checkmark`],
    ans: String.raw`$6$ m sur $12$ m (le long du mur); $24$ m de clôture` },
  { title: "Comparer des figures", q: String.raw`Laquelle demande le moins de clôture pour $100$ m$^2$ : un carré ou un cercle ?`,
    steps: [String.raw`\textbf{Carré :} $s^2=100$, donc $s=10$ et $P=4\times10=40$ m.`,
      String.raw`\textbf{Cercle :} $\pi r^2=100$, donc $r^2=\frac{100}{\pi}\approx31.83$ et $r\approx5.64$ m.`,
      String.raw`\textbf{Circonférence :} $C=2\pi r\approx2\pi(5.64)\approx35.4$ m.`,
      String.raw`\textbf{Comparer :} $35.4<40$. Un cercle entoure la plus grande aire pour sa frontière.`],
    ans: String.raw`le cercle ($\approx35.4$ m comparé à $40$ m)` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve la circonférence d'un cercle de rayon $4.5$ cm, au dixième près.`, recap: "r = 4.5.", ans: String.raw`$9\pi\approx28.3$ cm` },
  { level: 1, q: String.raw`On ajoute $4$ m à la largeur d'un rectangle de $15$ m sur $8$ m. Quel est le nouveau périmètre ?`, recap: "15 × 8, largeur + 4.", ans: "$54$ m" },
  { level: 1, q: String.raw`Un hexagone de périmètre $27$ cm est agrandi selon $k=3$. Trouve le nouveau périmètre.`, recap: "P = 27, k = 3.", ans: "$81$ cm" },
  { level: 2, q: String.raw`Trouve le périmètre d'un carré de $12$ cm sur $12$ cm auquel on a ajouté, à l'extérieur, un demi-cercle sur chacun de deux côtés opposés.`, recap: "Carré + deux demi-cercles.", ans: String.raw`$24+12\pi\approx61.7$ cm` },
  { level: 2, q: String.raw`On double la longueur d'un rectangle et on triple sa largeur. Son ancien périmètre était $2(l+w)$. Écris le nouveau périmètre. Est-il doublé, triplé, ou ni l'un ni l'autre ?`, recap: "Doubler l, tripler w.", ans: String.raw`$2(2l+3w)=4l+6w$ : ni l'un ni l'autre (entre le double et le triple)` },
  { level: 2, q: String.raw`Quel est le plus petit périmètre d'un rectangle d'aire $90$ m$^2$ (côtés réels quelconques) ? Arrondis au dixième près.`, recap: "Aire 90.", ans: String.raw`carré de côté $\sqrt{90}\approx9.49$; $P\approx37.9$ m` },
  { level: 2, q: String.raw`Une piste de course a deux lignes droites de $100$ m et des extrémités en demi-cercle de $64$ m de diamètre. Trouve la longueur d'un tour.`, recap: "Piste 100 m, d = 64.", ans: String.raw`$200+64\pi\approx401.1$ m` },
  { level: 2, q: String.raw`Un enclos rectangulaire adossé à une grange doit entourer $50$ m$^2$. Trouve la plus petite longueur de clôture.`, recap: "Enclos contre une grange, 50 m².", ans: String.raw`$w=5$, $l=10$ : $20$ m` },
  { level: 3, space: 5, q: String.raw`Un rectangle a un périmètre de $40$ cm. On augmente sa longueur de $20\%$ et on diminue sa largeur de $20\%$.
(a) Peux-tu savoir si le périmètre augmente ou diminue sans connaître les dimensions ? Explique.
(b) Trouve le nouveau périmètre si le rectangle initial mesurait $12$ cm sur $8$ cm.`, recap: "+20 % longueur, −20 % largeur.", ans: String.raw`(a) non : la variation $=2(0.2l-0.2w)$ dépend de $l-w$ (b) $14.4$ sur $6.4$ : $41.6$ cm` },
  { level: 3, space: 5, q: String.raw`Ali a $60$ m de clôture pour un enclos rectangulaire pour chien.
(a) Dresse une table des largeurs $5, 10, 15, 20, 25$ m avec la longueur et l'aire correspondantes.
(b) Quelle largeur est la meilleure ? Quelle forme est-ce ?`, recap: "Table pour 60 m de clôture.", ans: String.raw`(a) longueurs $25,20,15,10,5$; aires $125,200,225,200,125$ (b) $15$ m : un carré` },
  { level: 3, space: 5, q: String.raw`Une image mesure $40$ cm sur $30$ cm et a un cadre de $5$ cm de largeur tout autour.
(a) Trouve le périmètre extérieur du cadre.
(b) Un cadre de $w$ cm de largeur donne un périmètre extérieur $P=140+8w$. Explique d'où vient chaque terme.`, recap: "Cadre d'une image.", ans: String.raw`(a) $50$ sur $40$ : $180$ cm (b) $140$ = périmètre de l'image; chacun des $4$ côtés s'allonge de $2w$` },
  { level: 3, space: 5, q: String.raw`Un agriculteur a $120$ m de clôture pour construire deux enclos égaux côte à côte (un rectangle divisé par une clôture parallèle à la largeur).
(a) Écris la longueur de clôture utilisée en fonction de la largeur $w$ et de la longueur totale $l$.
(b) Trouve $l$ et $w$ pour obtenir la plus grande aire totale.`, recap: "Deux enclos, 120 m.", ans: String.raw`(a) $3w+2l=120$ (b) $w=20$, $l=30$, aire de $600$ m$^2$` },
  { level: 3, space: 5, q: String.raw`Démontre que si chaque côté d'un polygone est multiplié par $k$, son périmètre est multiplié par $k$. Explique ensuite pourquoi un cercle se comporte de la même façon.`, recap: "Pourquoi le périmètre est multiplié par k.", ans: String.raw`$ka_1+ka_2+\dots+ka_n=k(a_1+\dots+a_n)$; $C=2\pi(kr)=k(2\pi r)$` },
];

export const WS = {
  code: "5.5",
  title: "Modifier les dimensions : le périmètre",
  bigideas: String.raw`Le périmètre est une longueur. Ajouter $x$ à une dimension d'un rectangle ajoute $2x$ au périmètre; multiplier \emph{chaque} longueur par $k$ multiplie le périmètre par $k$. Pour une aire fixe, le rectangle de périmètre minimal est un carré, et contre un mur la meilleure forme est la moitié d'un carré (le côté du mur est le double de la largeur). De toutes les figures, le cercle entoure une aire donnée avec la plus courte frontière.`,
  goals: ["Trouver le périmètre de figures composées, y compris des arcs.", "Prédire l'effet de la modification d'une dimension.", "Utiliser la règle du facteur d'échelle pour le périmètre.", "Minimiser le périmètre pour une aire fixe, avec et sans mur."],
  curriculum: "E1.4",
  vocab: [["Périmètre", "longueur de la frontière"], ["Circonférence", "$C=\\pi d=2\\pi r$"], ["Figure composée", "formée de figures plus simples"], ["Facteur d'échelle", "le multiplicateur de chaque longueur"], ["Optimal", "le meilleur possible (le plus petit ou le plus grand)"]],
  hook: String.raw`Donnez à chaque équipe de deux $24$ cure-dents (ou une boucle de ficelle de $24$ cm) et du papier quadrillé. Demandez : « Formez des rectangles d'une aire d'exactement $36$ carrés. Lequel utilise le moins de cure-dents ? » Puis inversez la question pour la leçon 5.6.`,
  concepts: [
    ["1. Périmètres de figures composées", String.raw`Suis seulement l'extérieur. Arc d'un demi-cercle $=\pi r$; quart de cercle $=\tfrac12\pi r$.`],
    ["2. Modifier les dimensions", String.raw`Un côté $+x$ (rectangle) : $P+2x$. Chaque longueur $\times k$ : $P\times k$.
${figT([...rect(3, 2, { lw: "3", lh: "2" }), ...rect(6, 4, { lw: "6", lh: "4", fill: "violet", at: [4, 0] })], 4.6, "k = 2 : le périmètre 10 devient 20.")}`],
    ["3. Le plus petit périmètre", String.raw`Aire fixe $A$ : carré de côté $\sqrt A$. Avec un mur : $w=\sqrt{A/2}$, $l=2w$.`],
  ],
  tips: ["Les élèves comptent souvent les côtés intérieurs des figures composées.", "Rappelez que l'arc d'un demi-cercle est la moitié de πd.", "Une table des dimensions entières rend l'optimum visible.", "Distinguez « +x à un côté » de « ×k pour tous les côtés ».", "Gardez π dans la réponse jusqu'à la dernière étape."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
