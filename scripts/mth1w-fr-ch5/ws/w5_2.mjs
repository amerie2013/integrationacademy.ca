// Fiche 5.2 — Motifs créés avec les propriétés des cercles et des triangles (édition enseignant)
import { figT } from "./figT.mjs";
import { polygon } from "../../mth1w-ch5/figs5.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
/** cercle unité, points nommés à des angles donnés, segments entre noms ("O" = centre), marques d'angle droit, étiquettes d'angle */
function circ({ pts, segs = [], right = [], labels = [], extra = [] }, width = 4.2) {
  const at = (k) => (k === "O" ? [0, 0] : P(pts.find((p) => p[0] === k)[1]));
  const items = [{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.1, -0.12], size: 12, color: "gray" }];
  for (const [a, b, col] of segs) items.push({ seg: [at(a), at(b)], color: col ?? "blue" });
  for (const [a, b, c] of right) items.push({ right: [at(a), at(b), at(c)] });
  for (const [a, b, c, t] of labels) items.push({ arc: [at(a), at(b), at(c)], label: t, r: 0.2, lr: 0.16 });
  for (const [n, d] of pts) items.push({ dot: P(d), r: 3.5 }, { text: n, at: P(d, 1.15), bold: true });
  return figT([...items, ...extra], width);
}

const EXAMPLES = [
  { title: "Somme des angles avec l'algèbre", q: String.raw`Les angles d'un triangle mesurent $x$, $2x+15^\circ$ et $3x-9^\circ$. Trouve chaque angle.`,
    steps: [String.raw`\textbf{Règle :} les angles d'un triangle ont une somme de $180^\circ$ : $x+(2x+15)+(3x-9)=180$.`,
      String.raw`\textbf{Regrouper les termes semblables :} $6x+6=180$.`,
      String.raw`\textbf{Résoudre :} $6x=174$, donc $x=29$.`,
      String.raw`\textbf{Angles :} $29^\circ$, $2(29)+15=73^\circ$, $3(29)-9=78^\circ$. \textbf{Vérification :} $29+73+78=180$ \checkmark`],
    ans: String.raw`$29^\circ$, $73^\circ$, $78^\circ$` },
  { title: "Angle extérieur avec l'algèbre", q: String.raw`Un angle extérieur d'un triangle mesure $(4x+2)^\circ$. Les deux angles intérieurs opposés mesurent $(x+20)^\circ$ et $(2x+7)^\circ$. Trouve $x$ et l'angle extérieur.`,
    steps: [String.raw`\textbf{Règle :} angle extérieur $=$ somme des deux angles intérieurs opposés.`,
      String.raw`\textbf{Équation :} $4x+2=(x+20)+(2x+7)=3x+27$.`,
      String.raw`\textbf{Résoudre :} soustrais $3x$ et $2$ : $x=25$.`,
      String.raw`\textbf{Angle extérieur :} $4(25)+2=102^\circ$. \textbf{Vérification :} $45+57=102$ \checkmark`],
    ans: String.raw`$x=25$; $102^\circ$` },
  { title: "Triangle isocèle formé de deux rayons", q: String.raw`$A$ et $B$ sont sur un cercle de centre $O$, et $\angle AOB=124^\circ$. Trouve $\angle OAB$.`,
    fig: circ({ pts: [["A", 208], ["B", 332]], segs: [["O", "A"], ["O", "B"], ["A", "B", "red"]], labels: [["A", "O", "B", "124°"]] }, 3.6),
    steps: [String.raw`\textbf{Les rayons sont égaux :} $OA=OB$, donc $\triangle OAB$ est isocèle.`,
      String.raw`\textbf{Règle du triangle isocèle :} les angles à la base $\angle OAB$ et $\angle OBA$ sont égaux.`,
      String.raw`\textbf{Somme des angles :} $\angle OAB=(180^\circ-124^\circ)\div2=56^\circ\div2=28^\circ$.`,
      String.raw`\textbf{Vérification :} $28+28+124=180$ \checkmark`],
    ans: String.raw`$28^\circ$` },
  { title: "Somme des angles d'un polygone", q: String.raw`Trouve la somme des angles intérieurs d'un polygone à $12$ côtés, et chaque angle s'il est régulier.`,
    steps: [String.raw`\textbf{Règle :} somme des angles intérieurs $=(n-2)\times180^\circ$. (Un polygone se divise en $n-2$ triangles.)`,
      String.raw`\textbf{Somme :} $(12-2)\times180^\circ=1800^\circ$.`,
      String.raw`\textbf{Chaque angle} (régulier, donc égaux) : $1800^\circ\div12=150^\circ$.`,
      String.raw`\textbf{Vérifier} avec les angles extérieurs : $180-150=30$ et $12\times30=360$ \checkmark`],
    ans: String.raw`$1800^\circ$; $150^\circ$` },
  { title: "Nombre de côtés à partir d'un angle", q: String.raw`Chaque angle intérieur d'un polygone régulier mesure $156^\circ$. Combien de côtés a-t-il ?`,
    steps: [String.raw`\textbf{Règle :} les angles extérieurs de tout polygone ont une somme de $360^\circ$.`,
      String.raw`\textbf{Chaque angle extérieur :} l'angle intérieur et l'angle extérieur forment un angle plat : $180^\circ-156^\circ=24^\circ$.`,
      String.raw`\textbf{Nombre de côtés :} $n=360\div24=15$.`,
      String.raw`\textbf{Vérification :} $(15-2)\times180=2340$ et $2340\div15=156$ \checkmark`],
    ans: "15 côtés" },
  { title: "Angles inscrits interceptant le même arc", q: String.raw`Les points $P$ et $Q$ sont sur le grand arc $AB$ et $\angle APB=41^\circ$. Trouve $\angle AQB$ et l'angle au centre $\angle AOB$.`,
    fig: circ({ pts: [["A", 220], ["B", 320], ["P", 70], ["Q", 140]], segs: [["A", "P", "red"], ["B", "P", "red"], ["A", "Q", "violet"], ["B", "Q", "violet"], ["O", "A"], ["O", "B"]] }, 3.8),
    steps: [String.raw`\textbf{Règle 1 :} les angles inscrits qui interceptent le même arc sont égaux.`,
      String.raw`\textbf{Donc} $\angle AQB=\angle APB=41^\circ$.`,
      String.raw`\textbf{Règle 2 :} l'angle au centre est le double d'un angle inscrit qui intercepte le même arc.`,
      String.raw`\textbf{Donc} $\angle AOB=2\times41^\circ=82^\circ$.`],
    ans: String.raw`$41^\circ$ et $82^\circ$` },
  { title: "Tangentes issues d'un point", q: String.raw`Deux tangentes issues du point $T$ touchent en $A$ et en $B$ un cercle de centre $O$. Si $\angle ATB=48^\circ$, trouve $\angle AOB$.`,
    fig: figT([{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { poly: [[0, 0], P(156), [0, 2.459], P(24)], fill: "none", color: "blue" }, { right: [[0, 0], P(156), [0, 2.459]] }, { right: [[0, 2.459], P(24), [0, 0]] }, { text: "T", at: [0, 2.7], bold: true }, { text: "A", at: P(156, 1.25), bold: true }, { text: "B", at: P(24, 1.25), bold: true }, { text: "O", at: [0, -0.2], bold: true }], 3.4),
    steps: [String.raw`\textbf{Règle :} une tangente est perpendiculaire au rayon au point de contact : $\angle OAT=\angle OBT=90^\circ$.`,
      String.raw`\textbf{Quadrilatère $OATB$ :} ses angles ont une somme de $360^\circ$.`,
      String.raw`\textbf{Résoudre :} $\angle AOB=360^\circ-90^\circ-90^\circ-48^\circ=132^\circ$.`],
    ans: String.raw`$132^\circ$` },
  { title: "Demi-cercle et triangle isocèle", q: String.raw`$AB$ est un diamètre et $C$ est sur le cercle, avec $AC=BC$. Trouve les angles de $\triangle ABC$.`,
    fig: circ({ pts: [["A", 180], ["B", 0], ["C", 90]], segs: [["A", "B"], ["A", "C", "red"], ["B", "C", "red"]], right: [["A", "C", "B"]] }, 3.2),
    steps: [String.raw`\textbf{Règle (angle inscrit dans un demi-cercle) :} $\angle ACB=90^\circ$ parce que $AB$ est un diamètre.`,
      String.raw`\textbf{Isocèle :} $AC=BC$, donc $\angle A=\angle B$.`,
      String.raw`\textbf{Somme des angles :} $\angle A=\angle B=(180^\circ-90^\circ)\div2=45^\circ$.`],
    ans: String.raw`$90^\circ$, $45^\circ$, $45^\circ$` },
  { title: "Concevoir une étoile", q: String.raw`On trace une étoile à cinq branches en reliant un sommet sur deux d'un pentagone régulier inscrit dans un cercle. Trouve l'angle à chaque pointe de l'étoile.`,
    fig: figT([{ circle: [0, 0, 1], color: "gray", dash: true }, { poly: [0, 2, 4, 1, 3].map((k) => P(90 + 72 * k)), fill: "none", color: "violet" }], 3.2),
    steps: [String.raw`\textbf{Arcs :} les 5 sommets divisent le cercle en 5 arcs égaux de $360^\circ\div5=72^\circ$.`,
      String.raw`\textbf{Chaque pointe de l'étoile} est un angle inscrit qui intercepte un de ces arcs.`,
      String.raw`\textbf{Règle :} angle inscrit $=\frac12$ de son arc : $\frac12\times72^\circ=36^\circ$.`,
      String.raw`\textbf{Vérification :} les cinq pointes totalisent $5\times36=180$, un fait connu pour toute étoile à cinq branches \checkmark`],
    ans: String.raw`$36^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Deux angles d'un triangle mesurent $63^\circ$ et $58^\circ$. Trouve le troisième angle et l'angle extérieur qui lui est adjacent.`, recap: "63°, 58° : troisième angle et angle extérieur.", ans: String.raw`$59^\circ$; $121^\circ$` },
  { level: 1, q: String.raw`Trouve chaque angle intérieur d'un hexagone régulier et chaque angle extérieur d'un polygone régulier à $20$ côtés.`, recap: "Angle intérieur de l'hexagone; angle extérieur du polygone à 20 côtés.", ans: String.raw`$120^\circ$; $18^\circ$` },
  { level: 1, q: String.raw`Un angle inscrit mesure $57^\circ$. Trouve l'angle au centre qui intercepte le même arc.`, recap: "Angle inscrit de 57°.", ans: String.raw`$114^\circ$` },
  { level: 2, q: String.raw`Un triangle isocèle a un angle de $40^\circ$. Trouve les deux autres angles. (Il y a deux réponses possibles.)`, recap: "Triangle isocèle avec un angle de 40°.", ans: String.raw`$70^\circ,70^\circ$ (40° au sommet) ou $40^\circ,100^\circ$ (40° est un angle à la base)` },
  { level: 2, q: String.raw`Chaque angle extérieur d'un polygone régulier mesure $40^\circ$. Combien de côtés a-t-il, et quelle est la somme de ses angles intérieurs ?`, recap: "Angle extérieur de 40°.", ans: String.raw`$9$ côtés; $1260^\circ$` },
  { level: 2, q: String.raw`$AB$ est un diamètre; $C$ est sur le cercle, avec $\angle CAB=(2x+8)^\circ$ et $\angle CBA=(3x-3)^\circ$. Trouve $x$ et les deux angles.`, recap: "Demi-cercle avec de l'algèbre.", ans: String.raw`$5x+5=90$, $x=17$ : $42^\circ$ et $48^\circ$` },
  { level: 2, q: String.raw`On trace une tangente en $A$ et une corde $AB$. $O$ est le centre et $\angle OBA=31^\circ$. Trouve l'angle entre la tangente et la corde $AB$.`, recap: "Angle entre une tangente et une corde.", ans: String.raw`$\angle OAB=31^\circ$ (isocèle), donc angle tangente–corde $=90-31=59^\circ$` },
  { level: 2, q: String.raw`Trouve $x$ si les angles d'un quadrilatère mesurent $x$, $2x$, $3x-20^\circ$ et $110^\circ$.`, recap: "Quadrilatère x, 2x, 3x − 20, 110.", ans: String.raw`$6x+90=360$, $x=45$ : $45^\circ, 90^\circ, 115^\circ, 110^\circ$` },
  { level: 3, space: 5, q: String.raw`Un octogone régulier est inscrit dans un cercle de centre $O$.
(a) Trouve chaque angle au centre.
(b) Trouve les angles à la base du triangle formé par $O$ et un côté.
(c) Utilise (b) pour trouver l'angle intérieur de l'octogone, et vérifie avec $(n-2)\times180^\circ$.`, recap: "Octogone dans un cercle.", ans: String.raw`(a) $45^\circ$ (b) $67.5^\circ$ chacun (c) $2\times67.5=135^\circ$; $1080\div8=135^\circ$ ✓` },
  { level: 3, space: 5, q: String.raw`Démontre que les angles extérieurs de tout triangle ont une somme de $360^\circ$. (Indice : chaque angle extérieur vaut $180^\circ$ moins un angle intérieur.)`, recap: "Somme des angles extérieurs d'un triangle.", ans: String.raw`$(180-a)+(180-b)+(180-c)=540-(a+b+c)=540-180=360$` },
  { level: 3, space: 5, q: String.raw`Des tuiles en forme de polygones réguliers se rencontrent en un point sans laisser d'espace. Montre que les triangles équilatéraux, les carrés et les hexagones peuvent chacun paver un plancher seuls, mais pas les octogones réguliers. Montre ensuite qu'un carré et deux octogones peuvent paver ensemble.`, recap: "Quels polygones réguliers pavent le plan ?", ans: String.raw`$6\times60=4\times90=3\times120=360$; $2\times135=270$, $3\times135=405$; mais $90+2\times135=360$ ✓` },
  { level: 3, space: 5, q: String.raw`Les points $A$, $B$, $C$ sont sur un cercle de centre $O$ et $\angle ABC=118^\circ$, où $B$ est sur le petit arc $AC$.
(a) Trouve l'angle au centre rentrant qui intercepte le grand arc $AC$.
(b) Trouve $\angle AOC$ (l'angle non rentrant).
(c) Trouve $\angle OAC$.`, recap: "Angle inscrit > 90°.", ans: String.raw`(a) $236^\circ$ (b) $124^\circ$ (c) $28^\circ$` },
  { level: 3, space: 5, q: String.raw`Tâche de conception : crée un logo à l'intérieur d'un cercle à l'aide d'un polygone régulier d'au moins $6$ côtés et d'au moins un triangle formé par des rayons. Indique la mesure de chaque angle de ton motif et montre comment tu l'as trouvée, en nommant la propriété utilisée.`, recap: "Concevoir un logo.", ans: "Les réponses varient; les angles doivent être cohérents : angle au centre = 360°/n, angles à la base des triangles formés de rayons (180° − angle au centre)/2, angle intérieur = 2 × angle à la base" },
];

export const WS = {
  code: "5.2",
  title: "Motifs créés avec les propriétés des cercles et des triangles",
  bigideas: String.raw`Un petit ensemble de propriétés des angles permet de trouver chaque angle d'un motif formé de triangles, de polygones et de cercles : la somme des angles d'un triangle ($180^\circ$), la propriété de l'angle extérieur, la somme des angles d'un polygone $(n-2)\times180^\circ$, et les propriétés du cercle --- angle inscrit $=\frac12$ de l'angle au centre, l'angle inscrit dans un demi-cercle mesure $90^\circ$, et une tangente est perpendiculaire au rayon. Les enchaîner, en justifiant chaque étape, c'est ainsi qu'on analyse et qu'on crée des motifs.`,
  goals: ["Trouver des angles inconnus à l'aide des propriétés des triangles et des polygones.", "Utiliser les triangles isocèles formés par des rayons.", "Appliquer les propriétés de l'angle inscrit et de l'angle au centre, du demi-cercle et de la tangente.", "Résoudre des problèmes d'angles avec l'algèbre.", "Analyser et créer des motifs avec des polygones réguliers."],
  curriculum: "E1.2",
  vocab: [["Angle extérieur", "entre un côté et le prolongement du côté suivant"], ["Polygone régulier", "tous les côtés et tous les angles égaux"], ["Angle au centre", "sommet au centre"], ["Angle inscrit", "sommet sur le cercle"], ["Tangente", "touche le cercle en un seul point"]],
  hook: String.raw`Montrez trois logos ou un vitrail construits à partir d'un cercle et d'un polygone régulier. Demandez : « Comment le graphiste a-t-il pu connaître l'angle exact pour découper chaque pièce ? » Recueillez les idées, puis révélez que chaque angle découle d'une poignée de propriétés.`,
  concepts: [
    ["1. Les triangles", String.raw`$a+b+c=180^\circ$; angle extérieur $=$ somme des deux angles intérieurs opposés; isocèle : côtés égaux $\Leftrightarrow$ angles opposés égaux.
${figT([...polygon([[0, 0], [5, 0], [1.8, 3]], { fill: "blue", angles: [[0, "a"], [2, "b"]] }), { seg: [[5, 0], [7, 0]], color: "gray", dash: true }, { arc: [[7, 0], [5, 0], [1.8, 3]], label: "a + b" }], 5)}`],
    ["2. Les polygones", String.raw`Somme intérieure $(n-2)\times180^\circ$; polygone régulier : chaque angle $\frac{(n-2)180^\circ}{n}$, chaque angle extérieur $\frac{360^\circ}{n}$.`],
    ["3. Les cercles", String.raw`Angle inscrit $=\frac12$ de l'angle au centre qui intercepte le même arc; les angles qui interceptent le même arc sont égaux; angle inscrit dans un demi-cercle $=90^\circ$; tangente $\perp$ rayon; deux rayons forment un triangle isocèle.
${circ({ pts: [["A", 210], ["B", 330], ["P", 95]], segs: [["O", "A"], ["O", "B"], ["A", "P", "red"], ["B", "P", "red"]] }, 3.4)}`],
  ],
  tips: ["Demandez aux élèves d'écrire la propriété à côté de chaque étape.", "Vérifiez que l'angle inscrit et l'angle au centre interceptent le même arc.", "Les angles à la base d'un triangle isocèle sont opposés aux côtés égaux.", "Les problèmes de tangentes cachent habituellement un angle de 90°.", "Vérifiez toujours, à la fin, que la somme des angles d'un triangle est 180°."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
