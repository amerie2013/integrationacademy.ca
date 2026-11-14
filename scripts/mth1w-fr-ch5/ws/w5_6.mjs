// Fiche 5.6 — Modifier les dimensions : l'aire (édition enseignant)
import { figT } from "./figT.mjs";
import { rect, polygon } from "../../mth1w-ch5/figs5.mjs";

const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

const EXAMPLES = [
  { title: "L'aire par soustraction", q: String.raw`Une pelouse de $20$ m sur $14$ m a, en son milieu, une plate-bande circulaire de $3$ m de rayon. Trouve l'aire du gazon.`,
    fig: figT([...rect(20, 14, { lw: "20 m", lh: "14 m", fill: "green" }), { circle: [10, 7, 3], fill: "#fce7f3", color: "red" }, { seg: [[10, 7], [13, 7]], color: "red" }, { text: "3 m", at: [11.5, 7.8], color: "red", bold: true }], 4.2),
    steps: [String.raw`\textbf{Plan :} gazon $=$ rectangle $-$ cercle.`,
      String.raw`\textbf{Rectangle} $A=lw$ : $20\times14=280$ m$^2$.`,
      String.raw`\textbf{Cercle} $A=\pi r^2$ : $\pi(3)^2=9\pi\approx28.27$ m$^2$.`,
      String.raw`\textbf{Soustraire :} $280-28.27=251.73$ m$^2$.`],
    ans: String.raw`$\approx251.7$ m$^2$` },
  { title: "Le parallélogramme", q: String.raw`Un parallélogramme a une base de $12$ cm, un côté incliné de $7$ cm et une hauteur de $5$ cm. Trouve son aire.`,
    fig: figT([...polygon([[0, 0], [12, 0], [16.9, 5], [4.9, 5]], { sides: ["12 cm", "7 cm", "", ""], fill: "violet", color: "violet" }), { seg: [[4.9, 0], [4.9, 5]], color: "red", dash: true }, { right: [[5.9, 0], [4.9, 0], [4.9, 5]] }, { text: "5 cm", at: [5.3, 2.5], color: "red", bold: true, anchor: "start" }], 4),
    steps: [String.raw`\textbf{Formule :} $A=bh$, où $h$ est la hauteur \emph{perpendiculaire}.`,
      String.raw`\textbf{Pourquoi :} découpe le triangle à une extrémité et glisse-le à l'autre : la figure devient un rectangle de $12\times5$.`,
      String.raw`\textbf{Substituer :} $A=12\times5=60$ cm$^2$. Le côté incliné ($7$) n'est pas utilisé.`],
    ans: String.raw`$60$ cm$^2$` },
  { title: "Un trapèze avec Pythagore", q: String.raw`Un trapèze isocèle a des côtés parallèles de $10$ cm et $22$ cm et des côtés inclinés de $10$ cm. Trouve son aire.`,
    fig: figT([...polygon([[0, 0], [22, 0], [16, 8], [6, 8]], { sides: ["22", "10", "10", "10"], fill: "amber", color: "amber" }), { seg: [[6, 0], [6, 8]], color: "red", dash: true }, { right: [[7, 0], [6, 0], [6, 8]] }, { text: "h", at: [6.8, 4], color: "red", bold: true }], 4.4),
    steps: [String.raw`\textbf{Formule :} $A=\frac12(a+b)h$; il faut d'abord $h$.`,
      String.raw`\textbf{Débordement} de chaque côté : $(22-10)\div2=6$ cm.`,
      String.raw`\textbf{Pythagore} (hypoténuse $10$, cathète $6$) : $h=\sqrt{10^2-6^2}=\sqrt{64}=8$ cm.`,
      String.raw`\textbf{Aire :} $\frac12(10+22)(8)=\frac12(32)(8)=128$ cm$^2$.`],
    ans: String.raw`$128$ cm$^2$` },
  { title: "Le facteur d'aire", q: String.raw`Une carte est à l'échelle $1:50\,000$. Un parc couvre $6$ cm$^2$ sur la carte. Trouve son aire réelle en km$^2$.`,
    steps: [String.raw`\textbf{Règle :} longueurs $\times k$ $\Rightarrow$ aires $\times k^2$. Ici, $k=50\,000$.`,
      String.raw`\textbf{Facteur d'aire :} $50\,000^2=2.5\times10^9$.`,
      String.raw`\textbf{Aire réelle :} $6\times2.5\times10^9=1.5\times10^{10}$ cm$^2$.`,
      String.raw`\textbf{Unités :} $1$ km $=10^5$ cm, donc $1$ km$^2=(10^5)^2=10^{10}$ cm$^2$. Aire réelle $=1.5$ km$^2$.`],
    ans: String.raw`$1.5$ km$^2$` },
  { title: "Remonter à partir de l'aire", q: String.raw`L'aire d'un logo passe de $20$ cm$^2$ à $125$ cm$^2$ lorsqu'on l'agrandit. Trouve le facteur d'échelle.`,
    steps: [String.raw`\textbf{Règle :} facteur d'aire $=k^2$.`,
      String.raw`\textbf{Facteur d'aire :} $125\div20=6.25$, donc $k^2=6.25$.`,
      String.raw`\textbf{Racine carrée :} $k=\sqrt{6.25}=2.5$.`,
      String.raw`\textbf{Vérification :} $20\times2.5^2=20\times6.25=125$ \checkmark`],
    ans: "$k=2.5$" },
  { title: "Une pizza plus grande", q: String.raw`Une pizza de $25$ cm de diamètre coûte $12$ dollars. Une pizza de $35$ cm de diamètre coûte $20$ dollars. Laquelle est la meilleure aubaine par cm$^2$ ?`,
    fig: figT([{ circle: [0, 0, 2.5], fill: "#fde68a", color: "amber" }, { text: "25 cm", at: [0, 0], bold: true }, { circle: [7, 0, 3.5], fill: "#fde68a", color: "amber" }, { text: "35 cm", at: [7, 0], bold: true }], 3.6),
    steps: [String.raw`\textbf{Aire} $A=\pi r^2$ avec $r=\frac d2$.`,
      String.raw`\textbf{Petite :} $r=12.5$ : $\pi(12.5)^2\approx490.9$ cm$^2$; $12\div490.9\approx0.0244$ dollar/cm$^2$.`,
      String.raw`\textbf{Grande :} $r=17.5$ : $\pi(17.5)^2\approx962.1$ cm$^2$; $20\div962.1\approx0.0208$ dollar/cm$^2$.`,
      String.raw`\textbf{Pourquoi :} le diamètre est $1.4$ fois plus grand, donc l'aire est $1.4^2=1.96$ fois plus grande, mais le prix n'est que $1.67$ fois plus élevé.`],
    ans: "la grande pizza" },
  { title: "Une table de l'aire maximale", q: String.raw`Avec $36$ m de clôture, dresse une table des largeurs entières et trouve la plus grande aire rectangulaire.`,
    steps: [String.raw`\textbf{Mise en équation :} $2(l+w)=36$, donc $l+w=18$ et $l=18-w$; $A=w(18-w)$.`,
      String.raw`\textbf{Table :} $w=3$ : $3\times15=45$; $w=6$ : $6\times12=72$; $w=8$ : $8\times10=80$; $w=9$ : $9\times9=81$; $w=10$ : $10\times8=80$.`,
      String.raw`\textbf{La plus grande} en $w=9$ : un carré de $9\times9$. Règle : pour un périmètre fixe, le carré a la plus grande aire.`],
    ans: String.raw`$81$ m$^2$` },
  { title: "L'aire maximale avec un mur", q: String.raw`$50$ m de clôture entourent un rectangle contre la berge rectiligne d'une rivière (pas de clôture de ce côté). Trouve la plus grande aire.`,
    fig: figT([{ seg: [[-1, 12.5], [26, 12.5]], color: "blue", width: 4 }, { text: "rivière", at: [12.5, 13.6], color: "blue", bold: true }, ...rect(25, 12.5, { lw: "25 m", lh: "12.5 m", fill: "green" })], 3.8),
    steps: [String.raw`\textbf{Clôture :} $2w+l=50$.`,
      String.raw`\textbf{Règle :} avec un côté libre, la meilleure longueur est le double de la largeur : $l=2w$, donc $4w=50$.`,
      String.raw`\textbf{Résoudre :} $w=12.5$ m, $l=25$ m. Aire $=12.5\times25=312.5$ m$^2$.`,
      String.raw`\textbf{Vérification :} $w=12$ : $12\times26=312$; $w=13$ : $13\times24=312$; les deux sont plus petites \checkmark`],
    ans: String.raw`$312.5$ m$^2$` },
  { title: "L'aire d'une fenêtre", q: String.raw`Une fenêtre normande est un rectangle de $90$ cm sur $120$ cm (largeur $90$) surmonté d'un demi-cercle. Trouve son aire.`,
    fig: figT([{ poly: [[0, 0], [9, 0], [9, 12], ...arc(4.5, 12, 4.5, 0, 180).slice(1, -1), [0, 12]], fill: "blue", color: "blue" }, { text: "90 cm", at: [4.5, -1.1], bold: true, color: "blue" }, { text: "120 cm", at: [9.6, 6], bold: true, color: "blue", anchor: "start" }], 2.8),
    steps: [String.raw`\textbf{Plan :} rectangle $+$ demi-cercle.`,
      String.raw`\textbf{Rectangle :} $90\times120=10\,800$ cm$^2$.`,
      String.raw`\textbf{Demi-cercle} $\frac12\pi r^2$ avec $r=90\div2=45$ : $\frac12\pi(2025)=1012.5\pi\approx3180.9$ cm$^2$.`,
      String.raw`\textbf{Total :} $10\,800+3180.9=13\,980.9$ cm$^2\approx1.4$ m$^2$.`],
    ans: String.raw`$\approx13\,981$ cm$^2$ ($\approx1.4$ m$^2$)` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve l'aire d'un triangle de base $14$ cm et de hauteur $9$ cm, et celle d'un cercle de $10$ cm de diamètre.`, recap: "Triangle 14, 9; cercle d = 10.", ans: String.raw`$63$ cm$^2$; $25\pi\approx78.5$ cm$^2$` },
  { level: 1, q: String.raw`Une figure d'aire $15$ cm$^2$ est agrandie selon $k=4$. Trouve la nouvelle aire.`, recap: "A = 15, k = 4.", ans: String.raw`$240$ cm$^2$` },
  { level: 1, q: String.raw`Trouve la plus grande aire d'un rectangle de périmètre $28$ m.`, recap: "P = 28.", ans: String.raw`$7\times7=49$ m$^2$` },
  { level: 2, q: String.raw`Un trapèze a des côtés parallèles de $9$ m et $15$ m et une hauteur de $6$ m. Trouve son aire.`, recap: "Trapèze 9, 15, h 6.", ans: String.raw`$72$ m$^2$` },
  { level: 2, q: String.raw`On augmente de $50\%$ la longueur d'une pièce de $5$ m sur $8$ m. De quel pourcentage l'aire augmente-t-elle ? Et si les deux dimensions augmentent de $50\%$ ?`, recap: "+50 % sur un côté ou sur les deux.", ans: String.raw`$50\%$; $125\%$ ($1.5^2=2.25$)` },
  { level: 2, q: String.raw`Un tapis circulaire a une aire de $12.57$ m$^2$. Trouve son rayon. Si on triple le rayon, quelle est la nouvelle aire ?`, recap: "Tapis A = 12.57.", ans: String.raw`$r\approx2$ m; $9\times12.57\approx113.1$ m$^2$` },
  { level: 2, q: String.raw`Un patio carré est entouré d'une allée de $1$ m de largeur. Le patio mesure $6$ m sur $6$ m. Trouve l'aire de l'allée.`, recap: "Allée autour d'un patio de 6 × 6.", ans: String.raw`$8^2-6^2=28$ m$^2$` },
  { level: 2, q: String.raw`$80$ m de clôture forment un enclos le long d'un mur. Trouve les dimensions et la plus grande aire.`, recap: "80 m avec un mur.", ans: String.raw`$20$ m sur $40$ m; $800$ m$^2$` },
  { level: 3, space: 5, q: String.raw`Une cible a un centre de $5$ cm de rayon et deux anneaux de $5$ cm de largeur chacun.
(a) Trouve l'aire de chaque région.
(b) Quelle fraction de la cible entière l'anneau extérieur représente-t-il ?`, recap: "Cible avec anneaux.", ans: String.raw`(a) $25\pi$, $75\pi$, $125\pi$ cm$^2$ (b) $\frac{125}{225}=\frac59$` },
  { level: 3, space: 5, q: String.raw`Un rectangle a un périmètre $P$. Montre que sa plus grande aire est $\frac{P^2}{16}$. Compare ensuite avec l'aire d'un cercle de circonférence $P$.`, recap: "Formule de l'aire maximale.", ans: String.raw`carré de côté $\frac P4$ : $\frac{P^2}{16}$; cercle $r=\frac{P}{2\pi}$ : $\frac{P^2}{4\pi}\approx\frac{P^2}{12.57}$, plus grande` },
  { level: 3, space: 5, q: String.raw`Une photo de $10$ cm sur $15$ cm est agrandie pour que son aire soit de $600$ cm$^2$.
(a) Trouve le facteur d'échelle.
(b) Trouve les nouvelles dimensions et le nouveau périmètre.`, recap: "Photo agrandie à 600 cm².", ans: String.raw`(a) $k^2=4$, $k=2$ (b) $20$ sur $30$ cm; $P=100$ cm` },
  { level: 3, space: 5, q: String.raw`Une agricultrice a $200$ m de clôture pour faire trois enclos rectangulaires égaux côte à côte (deux séparations intérieures parallèles à la largeur).
(a) Écris l'équation de la clôture à l'aide de $w$ et de la longueur totale $l$.
(b) Trouve les dimensions qui donnent la plus grande aire totale.`, recap: "Trois enclos, 200 m.", ans: String.raw`(a) $4w+2l=200$ (b) $w=25$, $l=50$, $1250$ m$^2$` },
  { level: 3, space: 5, q: String.raw`Explique, à l'aide d'un schéma de carrés-unités, pourquoi un agrandissement de facteur $k=3$ multiplie l'aire par $9$, et non par $3$. Prédis ensuite le facteur d'aire pour $k=\frac12$.`, recap: "Pourquoi l'aire est multipliée par k².", ans: String.raw`chaque carré-unité devient un bloc de $3\times3$ formé de $9$ carrés; $k=\frac12$ : $\frac14$` },
];

export const WS = {
  code: "5.6",
  title: "Modifier les dimensions : l'aire",
  bigideas: String.raw`L'aire mesure un espace à deux dimensions. On trouve l'aire des figures composées en additionnant et en soustrayant des figures simples. Modifier une dimension selon un facteur multiplie l'aire par ce facteur, mais multiplier \emph{chaque} longueur par $k$ multiplie l'aire par $k^2$. Pour un périmètre fixe, l'aire rectangulaire maximale est un carré; avec un mur, c'est la moitié d'un carré ($l=2w$).`,
  goals: ["Utiliser les formules d'aire des figures courantes.", "Trouver l'aire de figures composées en additionnant et en soustrayant.", "Appliquer la règle du $k^2$ et remonter jusqu'à $k$.", "Maximiser l'aire pour un périmètre fixe, avec et sans murs."],
  curriculum: "E1.4",
  vocab: [["Aire", "nombre de carrés-unités qui recouvrent une région"], ["Hauteur perpendiculaire", "hauteur à angle droit avec la base"], ["Trapèze", "$A=\\frac12(a+b)h$"], ["Facteur d'aire", "$k^2$ pour un facteur d'échelle $k$"]],
  hook: String.raw`Montrez deux pizzas : une de $30$ cm et une de $40$ cm. Demandez : « La plus grande n'a que $10$ cm de plus de diamètre. Combien de pizza de plus contient-elle ? » Les élèves répondent habituellement $33\%$; la réponse est environ $78\%$.`,
  concepts: [
    ["1. Les formules", String.raw`$lw$; $bh$; $\frac12bh$; $\frac12(a+b)h$; $\pi r^2$. Utilise toujours la hauteur perpendiculaire.`],
    ["2. L'agrandissement", String.raw`Longueurs $\times k$ $\Rightarrow$ aire $\times k^2$. Pour remonter : $k=\sqrt{\text{facteur d'aire}}$.
${figT([...rect(2, 2, { lw: "1", lh: "" }), ...rect(6, 6, { lw: "3", lh: "", fill: "violet", at: [3, 0] }), ...[2, 4].flatMap((v) => [{ seg: [[3 + v, 0], [3 + v, 6]], color: "violet", dash: true, width: 1.2 }, { seg: [[3, v], [9, v]], color: "violet", dash: true, width: 1.2 }])], 4, "k = 3 : un carré en devient 9.")}`],
    ["3. L'aire maximale", String.raw`Périmètre $P$ : carré de côté $\frac P4$. Mur : $w=\frac P4$, $l=\frac P2$. Avec plus de séparations : écris l'équation de la clôture et teste des valeurs dans une table.`],
  ],
  tips: ["Surveillez l'utilisation du côté incliné comme hauteur.", "Confondre diamètre et rayon est l'erreur la plus fréquente dans l'aire des cercles.", "Facteur d'aire k² — les élèves appliquent souvent k.", "Unités : passer des cm² aux m², c'est diviser par 10 000.", "Les tables rendent l'optimisation visible avant d'énoncer la règle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
