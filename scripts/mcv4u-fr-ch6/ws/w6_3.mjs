// MCV4U-FR Fiche d'exercices 6.3 — Multiplication d'un vecteur par un scalaire (édition de l'enseignant)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, brg } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "Étirer et inverser", q: S`$|\vec v|=5$ selon un relèvement de $110^\circ$. Décris $3\vec v$ et $-0.4\vec v$.`,
    fig: VF({ view: { xmin: -2.4, xmax: 15, ymin: -6, ymax: 2.6 }, north: [0, 0, 2.4], arrows: [{ from: [0, 0], to: brg(5, 110), vl: "v", off: -16 }, { from: [0, -1.6], to: brg(15, 110, [0, -1.6]), color: "red", label: "3v", off: 16 }, { from: [0, 0], to: brg(2, 290), color: "blue", label: "−0.4v", off: -14 }] }, 5.5),
    steps: [S`$|3\vec v|=15$, même direction.`, S`$|-0.4\vec v|=0.4\times5=2$, direction $110^\circ+180^\circ=290^\circ$.`], ans: "3v : 15 selon un relèvement de 110°; −0.4v : 2 selon un relèvement de 290°" },
  { title: "Un vecteur unitaire", q: S`$|\vec w|=2.5$. Trouve le vecteur unitaire dans la direction de $\vec w$.`,
    steps: [S`$\frac{\vec w}{|\vec w|}=\frac{1}{2.5}\vec w$.`], ans: S`$0.4\vec w$` },
  { title: "Simplifier", q: S`Simplifie $5(\vec u-2\vec v)-3(2\vec u-3\vec v)$.`,
    steps: [S`$5\vec u-10\vec v-6\vec u+9\vec v$.`], ans: S`$-\vec u-\vec v$` },
  { title: "Résoudre pour un vecteur", q: S`Résous $2\vec x+3\vec u=5\vec v-\vec x$ pour $\vec x$.`,
    steps: [S`$3\vec x=5\vec v-3\vec u$.`, S`Divise par 3.`], ans: S`$\vec x=\frac53\vec v-\vec u$` },
  { title: "Sont-ils colinéaires?", q: S`$4\vec a-6\vec b$ et $-6\vec a+9\vec b$ sont-ils colinéaires?`,
    steps: [S`$-6\vec a+9\vec b=-1.5(4\vec a-6\vec b)$.`], ans: "oui : l'un est −1.5 fois l'autre" },
  { title: "Des points colinéaires", q: S`$\overrightarrow{OA}=\vec a$, $\overrightarrow{OB}=\vec b$ et $\overrightarrow{OC}=3\vec b-2\vec a$. Montre que $A$, $B$, $C$ sont colinéaires.`,
    fig: VF({ view: { xmin: -0.6, xmax: 9, ymin: -0.8, ymax: 5.6 }, grid: false, axes: false, segs: [{ pts: [[1, 4.5], [8.2, 1.3]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [1, 4.5], vl: "a" }, { from: [0, 0], to: [3.4, 3.43], vl: "b", color: "blue", off: -16 }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 1, y: 4.5, label: "A", dx: -4, dy: -8 }, { x: 3.4, y: 3.43, label: "B", dx: 4, dy: -10 }, { x: 8.2, y: 1.3, label: "C", dx: 8, dy: 4 }] }, 4.8),
    steps: [S`$\overrightarrow{AB}=\vec b-\vec a$; $\overrightarrow{AC}=3\vec b-3\vec a=3\overrightarrow{AB}$.`, S`Des vecteurs parallèles passant par le point commun $A$.`], ans: S`colinéaires, avec $AC=3AB$` },
  { title: "Une combinaison linéaire", q: S`Sur le quadrillage, $\vec u$ va de 2 vers la droite et de 1 vers le haut, et $\vec v$ va de 1 vers la gauche et de 2 vers le haut. Trace $\vec w=2\vec u-\vec v$.`,
    fig: VF({ view: { xmin: -2, xmax: 6, ymin: -1.5, ymax: 3 }, step: 1, arrows: [{ from: [0, 0], to: [4, 2], vl: "2u", off: -16 }, { from: [4, 2], to: [5, 0], color: "blue", label: "−v", off: 14 }, { from: [0, 0], to: [5, 0], color: "red", vl: "w", off: 16 }] }, 5),
    steps: [S`$2\vec u$ : 4 vers la droite, 2 vers le haut. $-\vec v$ : 1 vers la droite, 2 vers le bas.`, S`Bout à bout, on arrive à 5 vers la droite, 0 vers le haut.`], ans: "w va de 5 unités vers la droite" },
  { title: "Le point milieu", q: S`$M$ est le point milieu de $AB$, avec $\overrightarrow{OA}=\vec a$ et $\overrightarrow{OB}=\vec b$. Trouve $\overrightarrow{OM}$.`,
    steps: [S`$\overrightarrow{OM}=\vec a+\frac12(\vec b-\vec a)$.`], ans: S`$\frac12(\vec a+\vec b)$` },
  { title: "Un trapèze", q: S`Dans le trapèze $ABCD$, $\overrightarrow{AB}=\vec u$, $\overrightarrow{AD}=\vec v$ et $\overrightarrow{DC}=2\vec u$. Trouve $\overrightarrow{AC}$ et $\overrightarrow{BC}$.`,
    steps: [S`$\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}=\vec v+2\vec u$.`, S`$\overrightarrow{BC}=\overrightarrow{BA}+\overrightarrow{AC}=-\vec u+\vec v+2\vec u$.`], ans: S`$\overrightarrow{AC}=2\vec u+\vec v$, $\overrightarrow{BC}=\vec u+\vec v$` },
];

const PROBLEMS = [
  { level: 1, q: S`$|\vec v|=4$. Trouve $|-3\vec v|$.`, recap: "|k| fois |v|.", ans: "12" },
  { level: 1, q: S`Compare $-0.5\vec v$ et $\vec v$.`, recap: "Signe et taille de k.", ans: "deux fois plus court, direction opposée" },
  { level: 1, q: S`Simplifie $2\vec u+3\vec u-\vec v$.`, recap: "Regroupe les vecteurs semblables.", ans: S`$5\vec u-\vec v$` },
  { level: 2, q: S`Simplifie $4(\vec a+\vec b)-2(3\vec a-\vec b)$.`, recap: "Développe, puis regroupe.", ans: S`$-2\vec a+6\vec b$` },
  { level: 2, q: S`$|\vec v|=6$. Écris le vecteur unitaire opposé à $\vec v$.`, recap: "Divise par −6.", ans: S`$-\frac16\vec v$` },
  { level: 2, q: S`Résous $3\vec x-\vec u=\vec x+5\vec u$.`, recap: "Regroupe les x d'un même côté.", ans: S`$\vec x=3\vec u$` },
  { level: 2, q: S`$2\vec a-5\vec b$ et $-4\vec a+10\vec b$ sont-ils colinéaires? Explique.`, recap: "Cherche k.", ans: "oui : le second est −2 fois le premier" },
  { level: 2, q: S`Sur le quadrillage, $\vec u$ va de 1 vers la droite et de 2 vers le haut, et $\vec v$ va de 2 vers la droite. Trace $2\vec u$, $-\vec u$ et $\vec u+2\vec v$ à partir de l'origine.`, recap: "Multiplie, puis place bout à bout.", ans: "se terminent en (2, 4), (−1, −2) et (5, 2)", fig: gridT({ xmin: -2, xmax: 6, ymin: -3, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`$P$ est sur $AB$, avec $AP:PB=1:3$. Exprime $\overrightarrow{OP}$ en fonction de $\overrightarrow{OA}=\vec a$ et de $\overrightarrow{OB}=\vec b$.`, recap: "AP est le quart de AB.", ans: S`$\overrightarrow{OP}=\frac34\vec a+\frac14\vec b$` },
  { level: 3, space: 5, q: S`Démontre que si $M$ est le point milieu de $AB$, alors $\overrightarrow{OM}=\frac12\left(\overrightarrow{OA}+\overrightarrow{OB}\right)$ pour tout point $O$.`, recap: "OM = OA + AM.", ans: S`$\overrightarrow{OM}=\overrightarrow{OA}+\frac12(\overrightarrow{OB}-\overrightarrow{OA})=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$` },
  { level: 3, space: 5, q: S`$\vec u$ et $\vec v$ ne sont pas colinéaires. Trouve $s$ et $t$ si $(s+1)\vec u+(2t-s)\vec v=3\vec u+\vec v$.`, recap: "Associe les coefficients.", ans: "s = 2, t = 1.5" },
  { level: 3, space: 5, q: S`$G$ est le centre de gravité de $\triangle ABC$, situé aux deux tiers du chemin entre chaque sommet et le point milieu du côté opposé. Montre que $\overrightarrow{OG}=\frac13\left(\vec a+\vec b+\vec c\right)$, où $\vec a=\overrightarrow{OA}$, et ainsi de suite.`, recap: "Utilise la médiane issue de A vers le point milieu de BC.", ans: S`$\overrightarrow{OG}=\vec a+\frac23\left(\frac{\vec b+\vec c}2-\vec a\right)=\frac13(\vec a+\vec b+\vec c)$` },
  { level: 3, space: 5, q: S`Dans le trapèze $ABCD$, avec $\overrightarrow{DC}=k\overrightarrow{AB}$, $M$ et $N$ sont les points milieux de $AD$ et de $BC$. Montre que $\overrightarrow{MN}=\frac{1+k}{2}\overrightarrow{AB}$, et donc que $MN$ est parallèle aux bases.`, recap: "Va de M → A → B → N et de M → D → C → N, puis fais la moyenne.", ans: S`$2\overrightarrow{MN}=\overrightarrow{AB}+\overrightarrow{DC}=(1+k)\overrightarrow{AB}$` },
];

export const WS = {
  code: "6.3",
  title: "Multiplication d'un vecteur par un scalaire",
  bigideas: S`$k\vec v$ a pour norme $|k||\vec v|$; il pointe dans le sens de $\vec v$ lorsque $k\gt0$ et dans le sens opposé lorsque $k\lt0$. Des vecteurs sont colinéaires exactement lorsque l'un est un multiple scalaire de l'autre, et des points sont colinéaires lorsque deux vecteurs qui les relient sont multiples l'un de l'autre et ont un point commun. Un vecteur unitaire s'écrit $\frac{\vec v}{|\vec v|}$. Les scalaires se distribuent comme en algèbre ordinaire, ce qui transforme des propriétés géométriques (points milieux, rapports, droites parallèles) en courtes preuves vectorielles.`,
  goals: ["Trouver la norme et la direction de kv.", "Écrire des vecteurs unitaires.", "Simplifier et résoudre des équations vectorielles.", "Démontrer la colinéarité et des résultats géométriques."],
  curriculum: "C2.1, C2.2",
  vocab: [["Multiple scalaire", "$k\\vec v$"], ["Colinéaires", "multiples l'un de l'autre"], ["Vecteur unitaire", "$\\frac{\\vec v}{|\\vec v|}$"], ["Combinaison linéaire", "$s\\vec u+t\\vec v$"]],
  hook: S`Une voiture double sa vitesse sans tourner. Puis elle recule à sa vitesse initiale. Exprime ces deux nouvelles vitesses en fonction de la vitesse initiale $\vec v$.`,
  concepts: [
    ["1. L'effet de k", S`Les multiples de $\vec v$ sont tous situés sur une même droite :
${VF({ view: { xmin: -5, xmax: 7, ymin: -2.8, ymax: 3.8 }, grid: false, axes: false, segs: [{ pts: [[-5, -2.5], [7, 3.5]], dash: true }], arrows: [{ from: [0, 0], to: [2, 1], vl: "v", off: -16 }, { from: [0, 0], to: [6, 3], color: "red", label: "3v", off: 16 }, { from: [0, 0], to: [-4, -2], color: "blue", label: "−2v", off: 16 }] }, 4.6)}`],
    ["2. Colinéaires", S`$\vec u=k\vec v$ pour un certain $k$ signifie parallèles (de même sens ou de sens opposés).`],
    ["3. Algèbre", S`$k(\vec u+\vec v)=k\vec u+k\vec v$; $(a+b)\vec v=a\vec v+b\vec v$; $a(b\vec v)=(ab)\vec v$.`],
  ],
  tips: ["Utilise |k| pour la longueur.", "k < 0 inverse le sens.", "Seuls les vecteurs semblables se combinent.", "Vecteur unitaire : divise par la norme.", "Des points colinéaires exigent un point commun."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
