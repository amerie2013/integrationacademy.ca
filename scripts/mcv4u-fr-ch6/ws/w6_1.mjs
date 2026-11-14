// MCV4U-FR Fiche d'exercices 6.1 — Introduction aux vecteurs (édition de l'enseignant)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, pol, brg } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const HEX = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
const EXAMPLES = [
  { title: "Scalaire ou vecteur?", q: S`Classe : (a) 12 N vers la gauche; (b) 3 h; (c) 70 km/h selon un relèvement de $210^\circ$; (d) 2 L; (e) 400 m vers le haut d'une colline; (f) 15 m/s.`,
    steps: [S`Une direction est indiquée en (a), en (c) et en (e).`, S`(b), (d) et (f) ne donnent qu'une taille.`], ans: "vecteurs (a), (c), (e); scalaires (b), (d), (f)" },
  { title: "Du relèvement vrai au relèvement de quadrant", q: S`Écris le relèvement vrai $230^\circ$ sous forme de relèvement de quadrant.`,
    fig: VF({ view: { xmin: -3.6, xmax: 3.6, ymin: -3.6, ymax: 3.6 }, grid: false, north: [0, 0, 3.4], arrows: [{ from: [0, 0], to: brg(3.2, 230), vl: "v" }], arcs: [{ at: [0, 0], r: 1.1, a: 220, b: 270, label: "50°" }] }, 5),
    steps: [S`$230^\circ$ dépasse le sud ($180^\circ$) de $50^\circ$, en tournant vers l'ouest.`], ans: "S50°O" },
  { title: "Du relèvement de quadrant au relèvement vrai", q: S`Écris N70°E et S15°E sous forme de relèvements vrais.`,
    steps: [S`N70°E : $70^\circ$ dans le sens horaire à partir du nord.`, S`S15°E : à partir du sud ($180^\circ$), on revient de $15^\circ$ vers l'est : $165^\circ$.`], ans: "070° et 165°" },
  { title: "Un diagramme à l'échelle", q: S`Trace un déplacement de 36 km selon un relèvement de $300^\circ$ à l'échelle 1 cm : 6 km.`,
    fig: VF({ view: { xmin: -6, xmax: 1, ymin: -0.8, ymax: 4 }, north: [0, 0, 3.6], arrows: [{ from: [0, 0], to: brg(6, 300), vl: "d", label: "6 cm", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: 90, b: 150, label: "60°" }] }, 5),
    steps: [S`Longueur : $36\div6=6$ cm.`, S`$300^\circ$ se trouve à $60^\circ$ à l'ouest du nord (N60°O).`], ans: "une flèche de 6 cm orientée vers N60°O" },
  { title: "À partir d'un quadrillage", q: S`Trouve la norme et le relèvement vrai de $\overrightarrow{AB}$ pour $A(-4,2)$ et $B(8,7)$ (le nord est vers le haut).`,
    fig: VF({ view: { xmin: -5, xmax: 9, ymin: 0, ymax: 8 }, step: 1, axes: false, arrows: [{ from: [-4, 2], to: [8, 7], vl: "AB" }], segs: [{ pts: [[-4, 2], [8, 2], [8, 7]], dash: true }], texts: [{ x: 2, y: 1.3, t: "12" }, { x: 8.5, y: 4.4, t: "5" }], points: [{ x: -4, y: 2, label: "A", dx: -6, dy: 18 }, { x: 8, y: 7, label: "B", dx: -16, dy: -6 }] }, 5.5),
    steps: [S`Course $12$, montée $5$ : $|\overrightarrow{AB}|=\sqrt{144+25}=13$.`, S`Angle au nord de l'est : $\tan^{-1}\frac5{12}\approx22.62^\circ$, donc l'angle à partir du nord est $90^\circ-22.62^\circ$.`], ans: "13, selon un relèvement d'environ 067.4° (N67.4°E)" },
  { title: "Des vecteurs égaux dans un hexagone", q: S`$ABCDEF$ est un hexagone régulier (sommets nommés dans le sens antihoraire) de centre $O$. Nomme trois vecteurs reliant des points nommés qui sont égaux à $\overrightarrow{OA}$.`,
    fig: VF({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.3, ymax: 3.3 }, grid: false, axes: false, segs: [{ pts: [...HEX, HEX[0]], color: "gray" }], arrows: [{ from: [0, 0], to: HEX[0], color: "red" }, { from: HEX[2], to: HEX[1], color: "violet" }, { from: HEX[3], to: [0, 0], color: "violet" }, { from: HEX[4], to: HEX[5], color: "violet" }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX[i][0], y: HEX[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 4, dy: i < 3 ? -8 : 18 })).concat([{ x: 0, y: 0, label: "O", dx: -6, dy: 18 }]) }, 4.6),
    steps: [S`$\overrightarrow{OA}$ pointe vers la droite et sa longueur est égale au côté.`, S`Segments parallèles à $OA$, de même longueur, orientés vers la droite : $CB$, $DO$, $EF$.`], ans: S`$\overrightarrow{CB}$, $\overrightarrow{DO}$, $\overrightarrow{EF}$` },
  { title: "Un relèvement opposé", q: S`$\vec v$ a un relèvement de $305^\circ$. Donne $-\vec v$ sous forme de relèvement vrai et de relèvement de quadrant.`,
    steps: [S`$305^\circ-180^\circ=125^\circ$.`, S`$125^\circ$ se trouve à $55^\circ$ avant le sud, vers l'est.`], ans: "125°, S55°E" },
  { title: "Des vitesses égales", q: S`Deux navires situés à 50 km l'un de l'autre naviguent tous deux à 18 nœuds selon un relèvement de $215^\circ$. Leurs vecteurs vitesse sont-ils égaux?`,
    steps: [S`Un vecteur est déterminé uniquement par sa norme et sa direction; sa position n'a pas d'importance.`], ans: "oui : même module de vitesse et même direction" },
  { title: "Des positions opposées", q: S`La pointe d'une aiguille des heures de 15 cm se déplace de 3 h 00 à 9 h 00 (le 12 indique le nord). Décris son déplacement.`,
    steps: [S`Elle va du 3 au 9 : en ligne droite d'un côté à l'autre du cercle, un diamètre de 30 cm.`, S`De l'est vers l'ouest : relèvement $270^\circ$.`], ans: "30 cm selon un relèvement de 270° (plein ouest)" },
];

const PROBLEMS = [
  { level: 1, q: S`Classe chaque grandeur comme scalaire ou vecteur : (a) 9.8 m/s² vers le bas; (b) 65 kg; (c) 4 km vers le sud; (d) 120 s.`, recap: "Cherche une direction.", ans: "vecteurs (a), (c); scalaires (b), (d)" },
  { level: 1, q: S`Écris $310^\circ$ sous forme de relèvement de quadrant.`, recap: "360° − 310° à partir du nord vers l'ouest.", ans: "N50°O" },
  { level: 1, q: S`Écris S72°E sous forme de relèvement vrai.`, recap: "180° − 72°.", ans: "108°" },
  { level: 2, q: S`Trouve la norme du vecteur qui va de $(-4,3)$ à $(2,-5)$.`, recap: "Pythagore sur la course et la montée.", ans: "10" },
  { level: 2, q: S`$\vec v$ pointe vers N15°E. Donne le relèvement vrai de $-\vec v$.`, recap: "015° + 180°.", ans: "195°" },
  { level: 2, q: S`Trace un déplacement de 450 m selon un relèvement de $135^\circ$ à l'échelle 1 cm : 100 m.`, recap: "Longueur 4.5 cm, vers le SE.", ans: "une flèche de 4.5 cm orientée vers S45°E", fig: gridT({ xmin: -1, xmax: 5, ymin: -5, ymax: 1 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Dans le parallélogramme $PQRS$, nomme un vecteur égal à $\overrightarrow{PQ}$ et un vecteur opposé à $\overrightarrow{QR}$.`, recap: "Les côtés opposés sont égaux et parallèles.", ans: S`$\overrightarrow{SR}$; $\overrightarrow{RQ}$ ou $\overrightarrow{SP}$` },
  { level: 2, q: S`Un vecteur se déplace de 6 unités vers l'est et de 8 unités vers le nord. Trouve sa norme et son relèvement vrai.`, recap: "Angle à partir du nord : tan⁻¹(6/8).", ans: "10, relèvement d'environ 036.9°" },
  { level: 3, space: 5, q: S`Une grande roue de 20 m de rayon tourne de sorte qu'un siège passe du sommet au point situé à la hauteur du centre, du côté est. Trouve la norme et le relèvement vrai de son déplacement, en considérant « vers le haut » comme le nord dans une vue de côté.`, recap: "Un quart de tour : de (0, 20) à (20, 0).", ans: S`$\sqrt{800}\approx28.28$ m selon un relèvement de $135^\circ$` },
  { level: 3, space: 5, q: S`La randonneuse A marche 5 km vers N40°E. Le randonneur B marche 5 km selon un relèvement de $220^\circ$. Compare leurs vecteurs déplacement.`, recap: "Compare 040° et 220°.", ans: "même norme, directions opposées : ce sont des vecteurs opposés" },
  { level: 3, space: 5, q: S`Un vecteur de norme 10 se déplace de 6 unités vers l'est et pointe au nord de la droite est-ouest. Trouve son relèvement vrai. Quel serait son relèvement s'il se déplaçait plutôt de 6 unités vers l'ouest?`, recap: "sin(angle à partir du nord) = 6/10.", ans: S`$\sin^{-1}0.6\approx36.87^\circ$ : $036.9^\circ$; vers l'ouest : $323.1^\circ$` },
  { level: 3, space: 5, q: S`Explique pourquoi un relèvement de quadrant ne dépasse jamais $90^\circ$, et écris $000^\circ$, $090^\circ$, $180^\circ$ et $270^\circ$ sous forme de points cardinaux.`, recap: "Il se mesure à partir du plus proche entre N et S.", ans: "l'angle se mesure à partir de N ou de S vers E ou O, donc il vaut au plus 90°; N, E, S, O" },
  { level: 3, space: 5, q: S`Le carré $ABCD$ (sommets dans le sens antihoraire) a des côtés de 4 et pour centre $O$. Trouve $|\overrightarrow{OA}|$ et nomme le vecteur issu de $O$ qui est égal à $\overrightarrow{CO}$.`, recap: "La moitié d'une diagonale.", ans: S`$|\overrightarrow{OA}|=2\sqrt2\approx2.83$; $\overrightarrow{CO}=\overrightarrow{OA}$` },
];

export const WS = {
  code: "6.1",
  title: "Introduction aux vecteurs",
  bigideas: S`Un scalaire a une taille; un vecteur a une taille (norme) et une direction. On représente un vecteur par une flèche et on le nomme $\vec v$ ou $\overrightarrow{AB}$; sa norme est $|\vec v|$. Les directions sont données par des angles, des relèvements vrais (dans le sens horaire à partir du nord, trois chiffres) ou des relèvements de quadrant (N ou S, un angle, puis E ou O). Des vecteurs égaux ont la même norme et la même direction, peu importe où ils sont tracés; $-\vec v$ a la même norme et la direction opposée.`,
  goals: ["Distinguer les scalaires des vecteurs.", "Utiliser les relèvements vrais et les relèvements de quadrant.", "Tracer des vecteurs à l'échelle.", "Trouver des normes sur un quadrillage.", "Reconnaître des vecteurs égaux et opposés."],
  curriculum: "C1.1, C1.2",
  vocab: [["Vecteur", "norme et direction"], ["Relèvement vrai", "dans le sens horaire à partir du nord"], ["Relèvement de quadrant", "p. ex. N60°E"], ["Vecteur opposé", "$-\\vec v$"]],
  hook: S`On dit à un pilote de parcourir 200 km. Pourquoi cette information ne suffit-elle pas pour atteindre le bon aéroport?`,
  concepts: [
    ["1. Les flèches", S`Une flèche d'origine $A$ et d'extrémité $B$ se note $\overrightarrow{AB}$; sa longueur est la norme :
${VF({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.6, ymax: 3.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 2.6], vl: "AB" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 5, y: 2.6, label: "B", dx: 8, dy: 4 }] }, 4.5)}`],
    ["2. Les relèvements", S`Le relèvement vrai $\beta$ (dans le sens horaire à partir du N) et le relèvement de quadrant désignent la même direction : $140^\circ$ = S40°E.`],
    ["3. Égaux et opposés", S`Égaux : même longueur et même direction. Opposés : même longueur, direction tournée de $180^\circ$.`],
  ],
  tips: ["Trois chiffres pour les relèvements vrais.", "Les relèvements de quadrant commencent par N ou S.", "Le module de la vitesse est un scalaire; la vitesse est un vecteur.", "La position ne change pas un vecteur.", "Relèvement opposé : ajoute ou soustrais 180°."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
