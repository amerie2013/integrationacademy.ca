// MCV4U-FR Fiche d'exercices 6.2 — Addition et soustraction de vecteurs (édition de l'enseignant)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, pol, brg } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const EXAMPLES = [
  { title: "La loi du triangle", q: S`Dans $\triangle PQR$, simplifie $\overrightarrow{PQ}+\overrightarrow{QR}$ et $\overrightarrow{PR}-\overrightarrow{PQ}$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.6, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 3], color: "violet" }, { from: [4, 3], to: [6, 0], color: "blue" }, { from: [0, 0], to: [6, 0], color: "red" }], points: [{ x: 0, y: 0, label: "P", dx: -14, dy: 14 }, { x: 4, y: 3, label: "Q", dx: -4, dy: -8 }, { x: 6, y: 0, label: "R", dx: 6, dy: 14 }] }, 4.5),
    steps: [S`Bout à bout : $\overrightarrow{PQ}+\overrightarrow{QR}=\overrightarrow{PR}$.`, S`$\overrightarrow{PR}-\overrightarrow{PQ}=\overrightarrow{QP}+\overrightarrow{PR}=\overrightarrow{QR}$.`], ans: S`$\overrightarrow{PR}$ et $\overrightarrow{QR}$` },
  { title: "Norme et direction d'une somme", q: S`$|\vec u|=7$, $|\vec v|=10$, et l'angle entre eux est de $45^\circ$. Trouve $|\vec u+\vec v|$ et l'angle que la somme forme avec $\vec u$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 15, ymin: -0.8, ymax: 8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [7, 0], vl: "u", label: "7", off: 16 }, { from: [7, 0], to: plus([7, 0], pol(10, 45)), vl: "v", label: "10", color: "blue", off: 16 }, { from: [0, 0], to: plus([7, 0], pol(10, 45)), color: "red", vl: "u+v", off: -18 }], arcs: [{ at: [7, 0], r: 1.3, a: 45, b: 180, label: "135°" }] }, 5.2),
    steps: [S`Angle du triangle $180^\circ-45^\circ=135^\circ$ : $|\vec u+\vec v|^2=49+100-140\cos135^\circ\approx248.0$.`, S`$|\vec u+\vec v|\approx15.75$; loi des sinus : $\sin\alpha=\frac{10\sin135^\circ}{15.75}$, $\alpha\approx26.68^\circ$.`], ans: S`environ 15.75, à $26.68^\circ$ de $\vec u$` },
  { title: "Norme d'une différence", q: S`Pour les mêmes vecteurs $\vec u$ et $\vec v$ ($7$, $10$, à $45^\circ$ l'un de l'autre), trouve $|\vec u-\vec v|$.`,
    steps: [S`Avec les origines réunies, l'angle du triangle est l'angle de $45^\circ$ lui-même.`, S`$|\vec u-\vec v|^2=49+100-140\cos45^\circ\approx50.0$.`], ans: S`$\approx7.07$` },
  { title: "Deux étapes d'une randonnée", q: S`Une randonneuse marche 8 km selon un relèvement de $030^\circ$, puis 5 km selon un relèvement de $120^\circ$. Trouve le déplacement résultant.`,
    fig: VF({ view: { xmin: -0.8, xmax: 9, ymin: -0.8, ymax: 7.6 }, north: [0, 0, 7.2], arrows: [{ from: [0, 0], to: brg(8, 30), vl: "a", label: "8 km", off: -18 }, { from: brg(8, 30), to: plus(brg(8, 30), brg(5, 120)), vl: "b", label: "5 km", color: "blue", off: -18 }, { from: [0, 0], to: plus(brg(8, 30), brg(5, 120)), color: "red", vl: "r", off: 18 }] }, 5),
    steps: [S`Les deux étapes diffèrent de $120^\circ-30^\circ=90^\circ$ : $|\vec r|=\sqrt{64+25}\approx9.43$ km.`, S`L'écart par rapport à la première étape est $\tan^{-1}\frac58\approx32.0^\circ$ : relèvement $30^\circ+32.0^\circ$.`], ans: "environ 9.43 km selon un relèvement de 062.0°" },
  { title: "Simplifier une chaîne", q: S`Simplifie $\overrightarrow{PQ}-\overrightarrow{RQ}+\overrightarrow{RS}$.`,
    steps: [S`$-\overrightarrow{RQ}=\overrightarrow{QR}$.`, S`$\overrightarrow{PQ}+\overrightarrow{QR}+\overrightarrow{RS}=\overrightarrow{PS}$.`], ans: S`$\overrightarrow{PS}$` },
  { title: "Le tour d'un triangle", q: S`Simplifie $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}$.`,
    steps: [S`La chaîne revient à $A$ : $\overrightarrow{AA}$.`], ans: S`le vecteur nul $\vec 0$` },
  { title: "L'ordre n'a pas d'importance", q: S`Utilise un parallélogramme pour expliquer pourquoi $\vec u+\vec v=\vec v+\vec u$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: 16 }, { from: [4.5, 0], to: [6.3, 3], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue", off: -16 }, { from: [1.8, 3], to: [6.3, 3], vl: "u", off: -16 }, { from: [0, 0], to: [6.3, 3], color: "red" }] }, 4.5),
    steps: [S`Suivre $\vec u$ puis $\vec v$, ou $\vec v$ puis $\vec u$, revient à longer les côtés opposés d'un même parallélogramme.`, S`Les deux trajets aboutissent au même sommet.`], ans: S`les deux sont égaux à la diagonale, donc $\vec u+\vec v=\vec v+\vec u$` },
  { title: "Une différence de vecteurs perpendiculaires", q: S`$|\vec u|=|\vec v|=4$ et $\vec u\perp\vec v$. Trouve $|\vec u-\vec v|$.`,
    steps: [S`$|\vec u-\vec v|^2=16+16-0=32$.`], ans: S`$4\sqrt2\approx5.66$` },
  { title: "Trouver l'angle", q: S`$|\vec u|=5$, $|\vec v|=12$ et $|\vec u+\vec v|=13$. Trouve l'angle entre $\vec u$ et $\vec v$.`,
    steps: [S`$5^2+12^2=13^2$, donc le triangle bout à bout a un angle droit.`, S`L'angle entre les vecteurs est $180^\circ-90^\circ$.`], ans: "90°" },
];

const PROBLEMS = [
  { level: 1, q: S`Simplifie $\overrightarrow{AB}+\overrightarrow{BC}$.`, recap: "Bout à bout.", ans: S`$\overrightarrow{AC}$` },
  { level: 1, q: S`Simplifie $\overrightarrow{XY}-\overrightarrow{XZ}$.`, recap: "De l'extrémité de XZ à l'extrémité de XY.", ans: S`$\overrightarrow{ZY}$` },
  { level: 1, q: S`$|\vec u|=3$ et $|\vec v|=8$. Trouve $|\vec u+\vec v|$ s'ils pointent dans le même sens, puis s'ils pointent dans des sens opposés.`, recap: "Additionne ou soustrais les longueurs.", ans: "11 et 5" },
  { level: 2, q: S`$|\vec u|=6$, $|\vec v|=9$, angle entre eux $70^\circ$. Trouve $|\vec u+\vec v|$.`, recap: "Angle du triangle : 110°.", ans: "environ 12.41" },
  { level: 2, q: S`Pour les vecteurs du problème 4, trouve $|\vec u-\vec v|$.`, recap: "Utilise l'angle de 70°.", ans: "environ 8.95" },
  { level: 2, q: S`Marche 3 km vers l'ouest, puis 7 km vers le sud. Trouve le déplacement résultant (norme et relèvement vrai).`, recap: "Triangle rectangle; angle à l'ouest du sud : tan⁻¹(3/7).", ans: "environ 7.62 km selon un relèvement de 203.2°" },
  { level: 2, q: S`Sur le quadrillage, $\vec u$ va de 3 vers la droite et de 1 vers le haut, et $\vec v$ va de 1 vers la droite et de 2 vers le haut. Trace $\vec u+\vec v$ et $\vec u-\vec v$ à partir de l'origine.`, recap: "Bout à bout; additionne l'opposé.", ans: "u + v se termine en (4, 3); u − v se termine en (2, −1)", fig: gridT({ xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Simplifie $\overrightarrow{PQ}+\overrightarrow{QR}+\overrightarrow{RS}-\overrightarrow{PS}$.`, recap: "Les trois premiers donnent PS.", ans: S`$\vec 0$` },
  { level: 3, space: 5, q: S`Dans le parallélogramme $ABCD$, $\overrightarrow{AC}=\vec a$ et $\overrightarrow{BD}=\vec b$. Exprime $\overrightarrow{AB}$ et $\overrightarrow{AD}$ en fonction de $\vec a$ et de $\vec b$.`, recap: "AC = AB + AD et BD = AD − AB.", ans: S`$\overrightarrow{AB}=\frac12(\vec a-\vec b)$, $\overrightarrow{AD}=\frac12(\vec a+\vec b)$` },
  { level: 3, space: 5, q: S`$|\vec u|=8$, $|\vec v|=5$ et $|\vec u-\vec v|=7$. Trouve l'angle entre $\vec u$ et $\vec v$.`, recap: "Loi des cosinus avec l'angle entre les vecteurs.", ans: S`$\cos\theta=\frac{64+25-49}{80}=0.5$ : $60^\circ$` },
  { level: 3, space: 5, q: S`Utilise la loi des cosinus pour montrer que $|\vec u+\vec v|^2+|\vec u-\vec v|^2=2|\vec u|^2+2|\vec v|^2$.`, recap: "Les termes en cos s'annulent.", ans: S`en additionnant $a^2+b^2+2ab\cos\theta$ et $a^2+b^2-2ab\cos\theta$, on obtient $2a^2+2b^2$` },
  { level: 3, space: 5, q: S`Un avion parcourt 300 km selon un relèvement de $080^\circ$, puis 200 km selon un relèvement de $200^\circ$. Trouve son déplacement par rapport au point de départ.`, recap: "Virage de 120°, donc l'angle du triangle est de 60°.", ans: "environ 264.6 km selon un relèvement de 120.9°" },
  { level: 3, space: 5, q: S`$ABCDEF$ est un hexagone régulier dont les côtés mesurent 1. Trouve $|\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}|$.`, recap: "La chaîne donne AD.", ans: "2 (une grande diagonale)" },
];

export const WS = {
  code: "6.2",
  title: "Addition et soustraction de vecteurs",
  bigideas: S`On additionne des vecteurs bout à bout : la résultante va de la première origine à la dernière extrémité (ou, avec les origines réunies, le long de la diagonale du parallélogramme). L'addition est commutative et associative, et une chaîne fermée a pour somme $\vec 0$. On soustrait en additionnant l'opposé : $\vec u-\vec v=\vec u+(-\vec v)$, qui va de l'extrémité de $\vec v$ à l'extrémité de $\vec u$. La loi des cosinus donne la norme d'une somme ou d'une différence, et la loi des sinus donne sa direction.`,
  goals: ["Additionner à l'aide de la loi du triangle et de la loi du parallélogramme.", "Soustraire en additionnant l'opposé.", "Simplifier des chaînes de vecteurs.", "Trouver des normes et des directions à l'aide des lois des cosinus et des sinus."],
  curriculum: "C2.1",
  vocab: [["Résultante", "la somme"], ["Loi du triangle", "bout à bout"], ["Vecteur nul", "$\\vec 0$"], ["Différence", "$\\vec u+(-\\vec v)$"]],
  hook: S`Tu marches 3 coins de rue vers l'est et 4 coins de rue vers le nord. À quelle distance es-tu de ton point de départ? Pourquoi n'est-ce pas 7 coins de rue?`,
  concepts: [
    ["1. Bout à bout", S`$\vec u+\vec v$ ferme le triangle :
${VF({ view: { xmin: -0.5, xmax: 7.5, ymin: -0.6, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0.6], vl: "u", off: 16 }, { from: [4, 0.6], to: [6.8, 3.4], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [6.8, 3.4], color: "red", vl: "u+v", off: -18 }] }, 4.5)}`],
    ["2. L'angle à utiliser", S`Bout à bout, l'angle du triangle est $180^\circ-\theta$, où $\theta$ est l'angle entre les vecteurs.`],
    ["3. La soustraction", S`$\vec u-\vec v$ relie l'extrémité de $\vec v$ à l'extrémité de $\vec u$.`],
  ],
  tips: ["Trace d'abord le triangle.", "Angle du triangle = 180° − angle entre les vecteurs.", "u − v et v − u sont opposés.", "Une chaîne fermée donne le vecteur nul.", "Donne une direction par rapport à un repère."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
