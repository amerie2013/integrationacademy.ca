// Fiche 5.7 — Le volume (édition enseignant)
import { figT } from "./figT.mjs";
import { prism, triPrism, cylinder, cone, pyramid, sphere } from "../../mth1w-ch5/figs5.mjs";

const EXAMPLES = [
  { title: "Un prisme à base trapézoïdale", q: String.raw`Un abreuvoir est un prisme de $3$ m de long dont l'extrémité est un trapèze ayant des côtés parallèles de $0.8$ m et $0.5$ m et une profondeur de $0.4$ m. Trouve sa capacité en litres.`,
    fig: figT([{ poly: [[0, 0], [5, 0], [6.5, 4], [-1.5, 4]], fill: "blue", color: "blue" }, { text: "0.5 m", at: [2.5, -0.8], bold: true, color: "blue" }, { text: "0.8 m", at: [2.5, 4.7], bold: true, color: "blue" }, { seg: [[2.5, 0], [2.5, 4]], color: "red", dash: true }, { text: "0.4 m", at: [2.9, 2], bold: true, color: "red", anchor: "start" }], 2.8),
    steps: [String.raw`\textbf{Règle du prisme :} $V=(\text{aire de la base})\times(\text{longueur})$. La base est l'extrémité en trapèze.`,
      String.raw`\textbf{Aire de la base} $\frac12(a+b)h$ : $\frac12(0.8+0.5)(0.4)=\frac12(1.3)(0.4)=0.26$ m$^2$.`,
      String.raw`\textbf{Volume :} $0.26\times3=0.78$ m$^3$.`,
      String.raw`\textbf{Capacité :} $1$ m$^3=1000$ L, donc $0.78\times1000=780$ L.`],
    ans: "$780$ L" },
  { title: "Un cylindre à partir du diamètre", q: String.raw`Un baril de récupération d'eau de pluie cylindrique a un diamètre de $60$ cm et une hauteur de $90$ cm. Combien de litres contient-il ?`,
    fig: figT(cylinder(3, 9, { lr: "d = 60 cm", lh: "90 cm" }), 2.6),
    steps: [String.raw`\textbf{Formule :} $V=\pi r^2h$. Le rayon est la moitié du diamètre : $r=30$ cm.`,
      String.raw`\textbf{Volume :} $\pi(30)^2(90)=\pi(900)(90)=81\,000\pi\approx254\,469$ cm$^3$.`,
      String.raw`\textbf{Litres :} $1000$ cm$^3=1$ L, donc $254\,469\div1000\approx254.5$ L.`],
    ans: String.raw`$\approx254$ L` },
  { title: "Une pyramide à base rectangulaire", q: String.raw`Une pyramide a une base de $12$ cm sur $9$ cm et une hauteur de $15$ cm. Trouve son volume.`,
    fig: figT(pyramid(6, 7.5, { lb: "12 × 9 cm", lh: "15 cm" }), 2.8),
    steps: [String.raw`\textbf{Formule :} $V=\frac13(\text{aire de la base})(h)$, le tiers du prisme correspondant.`,
      String.raw`\textbf{Aire de la base :} $12\times9=108$ cm$^2$.`,
      String.raw`\textbf{Volume :} $\frac13(108)(15)=\frac13(1620)=540$ cm$^3$.`],
    ans: String.raw`$540$ cm$^3$` },
  { title: "Un cône à partir de l'apothème", q: String.raw`Un cône a un rayon de $6$ cm et un apothème de $10$ cm. Trouve son volume.`,
    fig: figT(cone(6, 8, { lr: "6", lh: "h", ls: "10" }), 3),
    steps: [String.raw`\textbf{Formule :} $V=\frac13\pi r^2h$ demande la hauteur \emph{perpendiculaire} $h$, pas l'apothème.`,
      String.raw`\textbf{Pythagore :} le rayon, la hauteur et l'apothème forment un triangle rectangle dont l'apothème est l'hypoténuse : $h=\sqrt{10^2-6^2}=\sqrt{64}=8$ cm.`,
      String.raw`\textbf{Volume :} $\frac13\pi(6)^2(8)=\frac13\pi(36)(8)=96\pi\approx301.6$ cm$^3$.`],
    ans: String.raw`$96\pi\approx301.6$ cm$^3$` },
  { title: "Une sphère à partir de la circonférence", q: String.raw`Un ballon de basketball a une circonférence de $75$ cm. Trouve son volume.`,
    fig: figT(sphere(3, { lr: "r" }), 2.4),
    steps: [String.raw`\textbf{Trouver $r$ à partir de} $C=2\pi r$ : $r=\frac{75}{2\pi}\approx11.94$ cm.`,
      String.raw`\textbf{Formule :} $V=\frac43\pi r^3$.`,
      String.raw`\textbf{Volume :} $\frac43\pi(11.94)^3\approx7124$ cm$^3$.`,
      String.raw`\textbf{Litres :} $7124\div1000\approx7.1$ L.`],
    ans: String.raw`$\approx7.1$ L` },
  { title: "Trouver une dimension manquante", q: String.raw`Une boîte de conserve cylindrique doit contenir $1$ L et avoir un rayon de $5$ cm. Quelle doit être sa hauteur ?`,
    steps: [String.raw`\textbf{Unités :} $1$ L $=1000$ cm$^3$.`,
      String.raw`\textbf{Formule} $V=\pi r^2h$ : $1000=\pi(5)^2h=25\pi h$.`,
      String.raw`\textbf{Isoler $h$ :} $h=\frac{1000}{25\pi}=\frac{40}{\pi}\approx12.7$ cm.`,
      String.raw`\textbf{Vérification :} $25\pi(12.73)\approx999.8$ cm$^3$ \checkmark`],
    ans: String.raw`$\approx12.7$ cm` },
  { title: "Solide composé : un tuyau creux", q: String.raw`Un tuyau de béton mesure $2$ m de long, avec un rayon extérieur de $0.5$ m et un rayon intérieur de $0.4$ m. Trouve le volume de béton.`,
    fig: figT([{ circle: [0, 0, 5], fill: "#e5e7eb", color: "gray" }, { circle: [0, 0, 4], fill: "#ffffff", color: "gray" }, { seg: [[0, 0], [5, 0]], color: "red" }, { text: "0.5 m", at: [2.5, 0.6], color: "red", bold: true }, { seg: [[0, 0], [0, -4]], color: "blue" }, { text: "0.4 m", at: [0.3, -2], color: "blue", bold: true, anchor: "start" }], 2.6),
    steps: [String.raw`\textbf{Plan :} béton $=$ cylindre extérieur $-$ trou.`,
      String.raw`\textbf{Extérieur :} $\pi(0.5)^2(2)=\pi(0.25)(2)=0.5\pi$ m$^3$.`,
      String.raw`\textbf{Trou :} $\pi(0.4)^2(2)=\pi(0.16)(2)=0.32\pi$ m$^3$.`,
      String.raw`\textbf{Béton :} $0.5\pi-0.32\pi=0.18\pi\approx0.565$ m$^3$.`],
    ans: String.raw`$\approx0.57$ m$^3$` },
  { title: "Modifier une dimension ou toutes", q: String.raw`Une boîte de $10\times6\times4$. (a) Double seulement la hauteur. (b) Double chaque arête. Compare les volumes.`,
    steps: [String.raw`\textbf{Formule} $V=lwh$. Initial : $10\times6\times4=240$.`,
      String.raw`\textbf{(a)} $10\times6\times8=480$; $480\div240=2$ : un seul facteur a doublé.`,
      String.raw`\textbf{(b)} $20\times12\times8=1920$; $1920\div240=8$ : trois facteurs ont doublé, $2\times2\times2=2^3$.`,
      String.raw`\textbf{Règle :} longueurs $\times k$ $\Rightarrow$ volume $\times k^3$.`],
    ans: String.raw`(a) $\times2$ (b) $\times8$` },
  { title: "Le facteur d'échelle à partir des volumes", q: String.raw`Deux statues semblables ont des volumes de $250$ cm$^3$ et $2000$ cm$^3$. La petite mesure $10$ cm de haut. Quelle est la hauteur de la grande ?`,
    steps: [String.raw`\textbf{Règle :} facteur de volume $=k^3$.`,
      String.raw`\textbf{Facteur de volume :} $2000\div250=8$, donc $k^3=8$.`,
      String.raw`\textbf{Racine cubique :} $k=\sqrt[3]{8}=2$ (car $2\times2\times2=8$).`,
      String.raw`\textbf{Hauteur :} $2\times10=20$ cm.`],
    ans: "$20$ cm" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve le volume d'un cube d'arête $4.5$ cm et celui d'un cylindre avec $r=2$ m, $h=7$ m.`, recap: "Cube 4.5; cylindre r 2, h 7.", ans: String.raw`$91.125$ cm$^3$; $28\pi\approx88.0$ m$^3$` },
  { level: 1, q: String.raw`Trouve le volume d'un cône de rayon $3$ cm et de hauteur $10$ cm, et celui d'une sphère de rayon $3$ cm.`, recap: "Cône 3, 10; sphère 3.", ans: String.raw`$30\pi\approx94.2$ cm$^3$; $36\pi\approx113.1$ cm$^3$` },
  { level: 1, q: String.raw`Un prisme à base triangulaire a pour base un triangle rectangle de cathètes $5$ cm et $12$ cm, et une longueur de $20$ cm. Trouve son volume.`, recap: "Prisme à base triangulaire 5, 12, 20.", ans: String.raw`$600$ cm$^3$` },
  { level: 2, q: String.raw`Une pyramide à base carrée a un volume de $400$ m$^3$ et une hauteur de $12$ m. Trouve le côté de sa base.`, recap: "Pyramide V = 400, h = 12.", ans: String.raw`$b^2=100$, $b=10$ m` },
  { level: 2, q: String.raw`Une piscine mesure $20$ m sur $8$ m; elle a $1$ m de profondeur à une extrémité et $2.5$ m à l'autre (pente uniforme). Trouve sa capacité en litres.`, recap: "Piscine en pente.", ans: String.raw`extrémité en trapèze $\tfrac12(1+2.5)(20)=35$ m$^2$; $\times8=280$ m$^3=280\,000$ L` },
  { level: 2, q: String.raw`Un cône et un cylindre ont le même rayon, $4$ cm. Le cône a une hauteur de $18$ cm. Quelle est la hauteur du cylindre s'ils contiennent la même quantité ?`, recap: "Cône et cylindre égaux.", ans: "$6$ cm" },
  { level: 2, q: String.raw`Des balles de tennis de $6.7$ cm de diamètre sont vendues par trois dans une boîte cylindrique qui les contient tout juste. Quel pourcentage de la boîte est vide ?`, recap: "Trois balles dans une boîte.", ans: String.raw`balles $\tfrac43\pi r^3\times3=4\pi r^3$; boîte $\pi r^2(6r)=6\pi r^3$ : $\frac13\approx33.3\%$ vide` },
  { level: 2, q: String.raw`Chaque dimension d'une maquette est le $\frac{1}{20}$ de l'objet réel. Le volume de la maquette est de $45$ cm$^3$. Trouve le volume réel en L.`, recap: "Maquette 1:20, V = 45.", ans: String.raw`$45\times8000=360\,000$ cm$^3=360$ L` },
  { level: 3, space: 5, q: String.raw`Un silo à grain est un cylindre de $4$ m de rayon et de $15$ m de hauteur, surmonté d'un toit conique de $3$ m de hauteur.
(a) Trouve le volume total.
(b) Le grain remplit le cylindre jusqu'à $80\%$ de sa hauteur. Combien de mètres cubes de grain cela représente-t-il ?`, recap: "Silo à toit conique.", ans: String.raw`(a) $240\pi+16\pi=256\pi\approx804.2$ m$^3$ (b) $192\pi\approx603.2$ m$^3$` },
  { level: 3, space: 5, q: String.raw`On découpe un carré de $x$ cm à chaque coin d'une feuille rectangulaire de $30$ cm sur $20$ cm, puis on la plie pour former une boîte ouverte.
(a) Écris $V$ en fonction de $x$.
(b) Trouve $V$ pour $x=2, 3, 4, 5$. Lequel est le plus grand ?`, recap: "Boîte faite à partir d'une feuille.", ans: String.raw`(a) $V=x(30-2x)(20-2x)$ (b) $832$, $1008$, $1056$, $1000$ : $x=4$ donne le plus grand de ces volumes` },
  { level: 3, space: 5, q: String.raw`Un cornet (cône, $r=2.5$ cm, $h=11$ cm) est rempli à ras bord et surmonté d'une demi-sphère de crème glacée de même rayon. Si la crème glacée fond, débordera-t-elle du cornet ? Montre ton travail.`, recap: "Crème glacée qui fond.", ans: String.raw`cône $\approx72.0$ cm$^3$; crème glacée $=$ cône $+$ demi-sphère $\approx72.0+32.7=104.7>72.0$ : oui, elle déborde` },
  { level: 3, space: 5, q: String.raw`Un cylindre a un rayon $r$ et une hauteur $h$. Explique ce qui arrive à son volume si (a) on double $h$, (b) on double $r$, (c) on double les deux.`, recap: "Doubler r et h.", ans: String.raw`(a) $\times2$ (b) $\times4$ (c) $\times8$` },
  { level: 3, space: 5, q: String.raw`On fait fondre une sphère de métal de $6$ cm de rayon pour la mouler en un cylindre de $4$ cm de rayon. Quelle est la hauteur du cylindre ?`, recap: "Sphère refondue.", ans: String.raw`$288\pi=16\pi h$, $h=18$ cm` },
];

export const WS = {
  code: "5.7",
  title: "Le volume",
  bigideas: String.raw`Le volume compte des unités cubes. Tout prisme et tout cylindre ont $V=(\text{aire de la base})\times\text{hauteur}$; une pyramide ou un cône contient exactement le tiers du prisme ou du cylindre correspondant; une sphère a $V=\frac43\pi r^3$. On additionne ou on soustrait les solides composés. Multiplier chaque longueur par $k$ multiplie le volume par $k^3$, et $1$ cm$^3=1$ mL relie le volume à la capacité.`,
  goals: ["Trouver le volume de prismes, de cylindres, de pyramides, de cônes et de sphères.", "Trouver une dimension manquante à partir d'un volume.", "Trouver le volume de solides composés et creux.", "Utiliser la règle du $k^3$ et convertir en litres."],
  curriculum: "E1.4, E1.6",
  vocab: [["Volume", "unités cubes qui remplissent un solide"], ["Capacité", "ce que peut contenir un contenant"], ["Aire de la base $B$", "aire de la figure de la base"], ["Demi-sphère", "la moitié d'une sphère"]],
  hook: String.raw`Remplissez un cône de riz et versez-le dans un cylindre de même base et de même hauteur. Demandez aux élèves de prédire combien de cônes remplissent le cylindre avant de faire l'essai (trois).`,
  concepts: [
    ["1. Prismes et cylindres", String.raw`$V=Bh$; cylindre $V=\pi r^2h$.
${figT([...prism(4, 3, 3, { ll: "", lw: "", lh: "" }), ...triPrism(4, 3, 5, { lb: "", lt: "", lL: "", ax: 2 }).map((it) => shift(it, 7))], 5.4)}`],
    ["2. Pyramides, cônes et sphères", String.raw`$V=\frac13Bh$; cône $V=\frac13\pi r^2h$; sphère $V=\frac43\pi r^3$. La hauteur est perpendiculaire, pas inclinée.
${figT([...pyramid(4, 5, { lb: "", lh: "h" }), ...cone(2, 5, { lr: "r", lh: "h" }).map((it) => shift(it, 7.5)), ...sphere(2, { lr: "r" }).map((it) => shift(it, 13, 2))], 6)}`],
    ["3. L'agrandissement", String.raw`Longueurs $\times k$ $\Rightarrow$ volume $\times k^3$. Pour remonter : $k=\sqrt[3]{\text{facteur de volume}}$.`],
  ],
  tips: ["Divisez le diamètre par deux avant d'utiliser la formule.", "Cônes et pyramides : le tiers — les élèves l'oublient.", "L'apothème n'est pas la hauteur; utilisez Pythagore.", "Convertissez les unités avant de multiplier (cm et m).", "Encouragez les élèves à laisser les réponses en fonction de π, puis à arrondir."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

function shift(it, dx, dy = 0) {
  const m = (p) => [p[0] + dx, p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0] + dx, o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0] + dx, o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
}
