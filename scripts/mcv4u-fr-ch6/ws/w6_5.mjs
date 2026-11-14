// MCV4U-FR Fiche d'exercices 6.5 — Décomposition de vecteurs en composantes rectangulaires (édition de l'enseignant)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const RAD = Math.PI / 180;
const EXAMPLES = [
  { title: "Deux composantes", q: S`Décompose une force de 75 N orientée à $50^\circ$ au-dessus de l'horizontale.`,
    fig: VF({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 6.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.821, 0], color: "blue", label: "48.21 N", off: 14 }, { from: [4.821, 0], to: [4.821, 5.745], color: "red", label: "57.45 N", off: 12 }, { from: [0, 0], to: [4.821, 5.745], vl: "F", label: "75 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.2, a: 0, b: 50, label: "50°" }] }, 4.4),
    steps: [S`Horizontale : $75\cos50^\circ\approx48.21$ N.`, S`Verticale : $75\sin50^\circ\approx57.45$ N.`], ans: "48.21 N horizontalement, 57.45 N verticalement" },
  { title: "À partir d'un relèvement", q: S`Un avion vole à 180 km/h selon un relèvement de $210^\circ$. Trouve ses composantes est et nord.`,
    steps: [S`Est : $180\sin210^\circ=-90$ (90 km/h vers l'ouest).`, S`Nord : $180\cos210^\circ\approx-155.88$ (155.88 km/h vers le sud).`], ans: "90 km/h vers l'ouest et 155.88 km/h vers le sud" },
  { title: "À partir des composantes", q: S`Un vecteur a pour composantes $(-8,15)$. Trouve sa norme et son angle à partir de l'axe des x positifs.`,
    fig: VF({ view: { xmin: -9.5, xmax: 2, ymin: -1, ymax: 16.5 }, step: 1, arrows: [{ from: [0, 0], to: [-8, 15], vl: "v", off: 16 }], segs: [{ pts: [[0, 0], [-8, 0], [-8, 15]], dash: true }], texts: [{ x: -4, y: -0.6, t: "−8" }, { x: -8.8, y: 7.5, t: "15" }] }, 3.6),
    steps: [S`$|\vec v|=\sqrt{64+225}=17$.`, S`Angle de référence : $\tan^{-1}\frac{15}8\approx61.93^\circ$; dans le quadrant II, l'angle est $180^\circ-61.93^\circ$.`], ans: "17, à environ 118.07°" },
  { title: "Sur un plan incliné à forte pente", q: S`Une boîte de 120 N repose sur un plan incliné à $35^\circ$. Décompose son poids parallèlement et perpendiculairement au plan.`,
    steps: [S`Parallèlement : $120\sin35^\circ\approx68.83$ N.`, S`Vers la surface du plan : $120\cos35^\circ\approx98.30$ N.`], ans: "68.83 N vers le bas de la pente, 98.30 N vers la surface du plan" },
  { title: "Additionner par les composantes", q: S`Trouve la résultante d'une force de 50 N à $30^\circ$ et d'une force de 70 N à $135^\circ$.`,
    fig: VF({ view: { xmin: -5.6, xmax: 4.8, ymin: -0.8, ymax: 7.8 }, grid: false, arrows: [{ from: [0, 0], to: pol(5, 30), vl: "a", label: "50 N", off: 16 }, { from: [0, 0], to: pol(7, 135), vl: "b", label: "70 N", color: "blue", off: -16 }, { from: [0, 0], to: [-0.62, 7.45], color: "red", vl: "R", off: 16 }] }, 4.4),
    steps: [S`x : $50\cos30^\circ+70\cos135^\circ\approx43.30-49.50=-6.20$.`, S`y : $25+49.50=74.50$.`, S`$|\vec R|\approx74.76$ N; angle $180^\circ-\tan^{-1}\frac{74.50}{6.20}$.`], ans: "environ 74.76 N à 94.76°" },
  { title: "Pousser une tondeuse", q: S`On pousse une tondeuse avec une force de 90 N le long d'un manche incliné à $40^\circ$ sous l'horizontale. Trouve les composantes vers l'avant et vers le bas.`,
    steps: [S`Vers l'avant : $90\cos40^\circ\approx68.94$ N.`, S`Vers le bas : $90\sin40^\circ\approx57.85$ N.`], ans: "68.94 N vers l'avant, 57.85 N vers le bas" },
  { title: "Remonter jusqu'à la force", q: S`Une corde inclinée à $65^\circ$ par rapport à l'horizontale doit soulever avec une composante verticale de 200 N. Quelle tension faut-il?`,
    steps: [S`$T\sin65^\circ=200$.`], ans: "environ 220.7 N" },
  { title: "Les composantes d'un vent", q: S`Un vent de 30 km/h souffle de $240^\circ$. Trouve ses composantes est et nord.`,
    steps: [S`Il souffle vers $060^\circ$.`, S`Est : $30\sin60^\circ\approx25.98$; nord : $30\cos60^\circ=15$.`], ans: "25.98 km/h vers l'est, 15 km/h vers le nord" },
  { title: "Retenir un chariot", q: S`Quelle force parallèle à un plan incliné à $12^\circ$ maintient immobile un chariot de 300 N (sans frottement)?`,
    fig: VF({ view: { xmin: -0.5, xmax: 9, ymin: -1.6, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [8.8, 0], [8.8, 8.8 * Math.tan(12 * RAD)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [5, 1.36], to: [5, -1.36], vl: "W", label: "300 N", off: -16 }, { from: [5, 1.36], to: pol(0.75, 12, [5, 1.36]), color: "green", label: "62.4 N", off: -14 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 12, label: "12°" }] }, 5),
    steps: [S`Elle doit équilibrer la composante du poids vers le bas de la pente : $300\sin12^\circ$.`], ans: "environ 62.37 N vers le haut du plan" },
];

const PROBLEMS = [
  { level: 1, q: S`Décompose une force de 40 N orientée à $60^\circ$ au-dessus de l'horizontale.`, recap: "40 cos 60°, 40 sin 60°.", ans: "20 N et environ 34.64 N" },
  { level: 1, q: S`Trouve la norme d'un vecteur dont les composantes sont 5 et 12.`, recap: "Pythagore.", ans: "13" },
  { level: 1, q: S`Donne les composantes d'une force de 100 N à $0^\circ$.`, recap: "Entièrement horizontale.", ans: "(100, 0)" },
  { level: 2, q: S`Trouve les composantes est et nord d'une vitesse de 250 km/h selon un relèvement de $040^\circ$.`, recap: "La composante est utilise le sinus du relèvement.", ans: "environ 160.70 vers l'est, 191.51 vers le nord" },
  { level: 2, q: S`Décompose un poids de 60 N sur un plan incliné à $25^\circ$, parallèlement et perpendiculairement au plan.`, recap: S`$W\sin\alpha$ et $W\cos\alpha$.`, ans: "environ 25.36 N et 54.38 N" },
  { level: 2, q: S`Additionne une force de 24 N à $0^\circ$ et une force de 10 N à $90^\circ$ à l'aide des composantes.`, recap: "Pythagore et tan⁻¹.", ans: "26 N à environ 22.62°" },
  { level: 2, q: S`Trouve la norme et l'angle (à partir de l'axe des x positifs) du vecteur dont les composantes sont $(-7,-24)$.`, recap: "Quadrant III.", ans: "25, à environ 253.74°" },
  { level: 2, q: S`Trace sur le quadrillage un vecteur de longueur 6 à $150^\circ$ avec ses composantes, et donne-les.`, recap: "6 cos 150°, 6 sin 150°.", ans: "environ (−5.20, 3)", fig: gridT({ xmin: -7, xmax: 2, ymin: -1, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Trouve la résultante des forces de 15 N à $20^\circ$, de 25 N à $110^\circ$ et de 10 N à $250^\circ$.`, recap: "Additionne les parties en x et les parties en y.", ans: "environ 19.34 N à 83.7° (composantes 2.12, 19.23)" },
  { level: 3, space: 5, q: S`Une boîte de 80 N est maintenue immobile sur un plan incliné à $30^\circ$ par une force parallèle au plan. Trouve cette force et la force qui presse la boîte contre le plan.`, recap: S`Parallèlement : $W\sin\alpha$; vers la surface : $W\cos\alpha$.`, ans: "40 N et environ 69.28 N" },
  { level: 3, space: 5, q: S`Un enfant tire un chariot avec une force de 50 N dont la composante horizontale est de 40 N. Trouve l'angle de la poignée et la composante verticale.`, recap: "cos θ = 40/50.", ans: "environ 36.87°; 30 N" },
  { level: 3, space: 5, q: S`Un bateau se déplace à 12 km/h selon un relèvement de $300^\circ$ dans une eau qui s'écoule vers l'est à 4 km/h. Utilise les composantes pour trouver sa vitesse réelle.`, recap: "Additionne les parties est et nord.", ans: "environ 8.77 km/h selon un relèvement de 313.2°" },
  { level: 3, space: 5, q: S`Montre que les composantes $W\sin\alpha$ et $W\cos\alpha$ sur un plan incliné redonnent toujours le poids $W$.`, recap: "Pythagore avec sin² + cos² = 1.", ans: S`$\sqrt{W^2\sin^2\alpha+W^2\cos^2\alpha}=W$` },
];

export const WS = {
  code: "6.5",
  title: "Décomposition de vecteurs en composantes rectangulaires",
  bigideas: S`Tout vecteur est la somme de deux vecteurs perpendiculaires, ses composantes rectangulaires. À un angle $\theta$ de l'horizontale, ce sont $|\vec v|\cos\theta$ et $|\vec v|\sin\theta$; à partir d'un relèvement vrai $\beta$, est $|\vec v|\sin\beta$ et nord $|\vec v|\cos\beta$. Pour additionner plusieurs vecteurs, additionne leurs composantes et reconstitue le vecteur avec $\sqrt{x^2+y^2}$ et $\tan^{-1}\frac yx$ (en vérifiant le quadrant). Sur un plan incliné d'angle $\alpha$, un poids se décompose en $W\sin\alpha$ parallèlement à la pente et $W\cos\alpha$ vers la surface.`,
  goals: ["Décomposer des vecteurs en composantes.", "Utiliser les relèvements avec les composantes.", "Décomposer des poids sur des plans inclinés.", "Additionner des vecteurs par les composantes."],
  curriculum: "C1.3, C2.2",
  vocab: [["Décomposer", "séparer en parties perpendiculaires"], ["Composantes", "$|\\vec v|\\cos\\theta,\\ |\\vec v|\\sin\\theta$"], ["Plan incliné", "$W\\sin\\alpha$ parallèlement"], ["Reconstituer", "$\\sqrt{x^2+y^2}$"]],
  hook: S`Pourquoi est-il plus facile de tirer une lourde valise en tenant la poignée basse plutôt qu'à la verticale?`,
  concepts: [
    ["1. Les composantes", S`Un vecteur et ses deux composantes :
${VF({ view: { xmin: -0.6, xmax: 6, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.6, 0], color: "blue", label: "|v| cos θ", off: 14 }, { from: [4.6, 0], to: [4.6, 3.2], color: "red", label: "|v| sin θ", off: 12 }, { from: [0, 0], to: [4.6, 3.2], vl: "v", off: -16 }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 34.8, label: "θ" }] }, 4.2)}`],
    ["2. Les relèvements", S`À partir d'un relèvement $\beta$ : est $=|\vec v|\sin\beta$, nord $=|\vec v|\cos\beta$.`],
    ["3. Les plans inclinés", S`L'angle entre le poids et la perpendiculaire au plan est égal à l'angle d'inclinaison.`],
  ],
  tips: ["cos avec le côté adjacent.", "Relèvements : la composante est utilise sin.", "Les signes indiquent la gauche ou le bas.", "Vérifie le quadrant après tan⁻¹.", "Additionne les composantes, puis reconstitue."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
