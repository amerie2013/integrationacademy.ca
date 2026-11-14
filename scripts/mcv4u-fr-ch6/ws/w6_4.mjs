// MCV4U-FR Fiche d'exercices 6.4 — Applications de l'addition de vecteurs (édition de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const EXAMPLES = [
  { title: "Des forces perpendiculaires", q: S`Des forces de 45 N et de 60 N agissent à angle droit. Trouve la résultante.`,
    steps: [S`$\sqrt{45^2+60^2}=75$ N.`, S`Angle avec la force de 45 N : $\tan^{-1}\frac{60}{45}\approx53.13^\circ$.`], ans: "75 N à 53.13° de la force de 45 N" },
  { title: "Des forces à 40°", q: S`Des forces de 120 N et de 80 N agissent à $40^\circ$ l'une de l'autre. Trouve la résultante.`,
    fig: VF({ view: { xmin: -0.5, xmax: 20, ymin: -0.8, ymax: 6.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [12, 0], vl: "F₁", label: "120 N", off: 16 }, { from: [12, 0], to: plus([12, 0], pol(8, 40)), vl: "F₂", label: "80 N", color: "blue", off: 16 }, { from: [0, 0], to: plus([12, 0], pol(8, 40)), color: "red", vl: "R", off: -16 }], arcs: [{ at: [12, 0], r: 1.4, a: 0, b: 40, label: "40°", color: "green" }], segs: [{ pts: [[12, 0], [14.5, 0]], dash: true }] }, 5.4),
    steps: [S`Angle du triangle $140^\circ$ : $|\vec R|^2=14\,400+6400-19\,200\cos140^\circ\approx35\,508$, $|\vec R|\approx188.4$ N.`, S`$\sin\alpha=\frac{80\sin140^\circ}{188.4}$, $\alpha\approx15.84^\circ$.`], ans: "environ 188.4 N à 15.84° de la force de 120 N" },
  { title: "Une équilibrante", q: S`Des forces de 30 N vers l'est et de 30 N vers le nord agissent sur un anneau. Quelle force unique le maintient immobile?`,
    steps: [S`Résultante : $\sqrt{30^2+30^2}\approx42.43$ N vers le nord-est ($045^\circ$).`, S`L'équilibrante est opposée.`], ans: "42.43 N selon un relèvement de 225° (sud-ouest)" },
  { title: "Un vent latéral", q: S`Un avion a un cap de $270^\circ$ à 350 km/h. Un vent de 40 km/h souffle du nord. Trouve la vitesse sol.`,
    fig: VF({ view: { xmin: -4.2, xmax: 0.8, ymin: -1.2, ymax: 1.4 }, north: [0.5, -0.6, 1.6], arrows: [{ from: [0, 0], to: [-3.5, 0], vl: "a", label: "350 km/h", off: -16 }, { from: [-3.5, 0], to: [-3.5, -0.4], color: "blue", label: "40", off: -14 }, { from: [0, 0], to: [-3.5, -0.4], color: "red", vl: "g", off: 16 }] }, 5),
    steps: [S`Un vent du nord souffle vers le sud : perpendiculairement au cap. $|\vec g|=\sqrt{350^2+40^2}\approx352.3$ km/h.`, S`Dérive : $\tan^{-1}\frac{40}{350}\approx6.52^\circ$ au sud de l'ouest.`], ans: "environ 352.3 km/h selon une route de 263.5°" },
  { title: "Viser vers l'amont", q: S`Un bateau se déplace à 6 m/s en eau calme. Le courant est de 2.5 m/s et la rivière a 120 m de large. Comment doit-il viser pour accoster juste en face, et combien de temps la traversée dure-t-elle?`,
    steps: [S`La partie vers l'amont annule le courant : $6\sin\theta=2.5$, $\theta\approx24.62^\circ$ vers l'amont.`, S`Vitesse de traversée $\sqrt{36-6.25}\approx5.45$ m/s; temps $120\div5.45$.`], ans: "environ 24.6° vers l'amont; environ 22.0 s" },
  { title: "Deux cordes sur un traîneau", q: S`Deux cordes tirent un traîneau avec 150 N chacune, à $20^\circ$ de part et d'autre de la direction vers l'avant. Trouve la résultante.`,
    fig: VF({ view: { xmin: -0.5, xmax: 7.5, ymin: -2.2, ymax: 2.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(4, 20), vl: "T", label: "150 N" }, { from: [0, 0], to: pol(4, -20), vl: "T", label: "150 N", color: "blue", off: -16 }, { from: [0, 0], to: [7.52, 0], color: "red", label: "281.9 N", off: -12 }] }, 5),
    steps: [S`Les parties latérales s'annulent; les parties vers l'avant s'additionnent : $2\times150\cos20^\circ$.`], ans: "environ 281.9 N droit devant" },
  { title: "Une charge suspendue de façon symétrique", q: S`Un poids de 500 N est suspendu à deux cordes qui forment chacune un angle de $40^\circ$ avec l'horizontale. Trouve la tension dans chacune.`,
    steps: [S`Chaque corde soutient verticalement la moitié du poids : $2T\sin40^\circ=500$.`], ans: "environ 388.9 N" },
  { title: "Trois forces égales", q: S`Des forces de 10 N agissent à $0^\circ$, à $120^\circ$ et à $240^\circ$. Trouve la résultante.`,
    fig: VF({ view: { xmin: -2.4, xmax: 2.4, ymin: -2.4, ymax: 2.4 }, grid: false, arrows: [{ from: [0, 0], to: [2, 0], label: "10 N" }, { from: [0, 0], to: pol(2, 120), color: "blue", label: "10 N" }, { from: [0, 0], to: pol(2, 240), color: "green", label: "10 N", off: -16 }] }, 3.6),
    steps: [S`Bout à bout, elles forment un triangle équilatéral fermé.`], ans: "0 N : les forces sont en équilibre" },
  { title: "Maintenir une route", q: S`Un pilote veut suivre une route de $090^\circ$ avec une vitesse propre de 400 km/h. Un vent de 60 km/h souffle du sud. Trouve le cap et la vitesse sol.`,
    steps: [S`Le vent pousse vers le nord, donc il faut viser au sud de l'est : $400\sin\theta=60$, $\theta\approx8.63^\circ$.`, S`Vitesse sol : $\sqrt{400^2-60^2}\approx395.5$ km/h.`], ans: "cap d'environ 098.6°, vitesse sol d'environ 395.5 km/h" },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve la résultante de forces de 9 N et de 40 N perpendiculaires.`, recap: "Pythagore.", ans: "41 N" },
  { level: 1, q: S`Une seule force de 25 N agit vers l'est. Décris son équilibrante.`, recap: "Direction opposée.", ans: "25 N vers l'ouest" },
  { level: 1, q: S`Un bateau se dirige directement vers l'autre rive d'une rivière à 3 m/s; le courant est de 4 m/s. Trouve sa vitesse par rapport à la rive.`, recap: "Vitesses perpendiculaires.", ans: "5 m/s" },
  { level: 2, q: S`Des forces de 70 N et de 50 N agissent à $60^\circ$ l'une de l'autre. Trouve la norme de la résultante.`, recap: "Angle du triangle : 120°.", ans: "environ 104.4 N" },
  { level: 2, q: S`Un avion a un cap de $000^\circ$ à 250 km/h; un vent de 50 km/h souffle de l'est. Trouve la vitesse sol et la route.`, recap: "Le vent pousse vers l'ouest.", ans: "environ 255.0 km/h selon une route de 348.7°" },
  { level: 2, q: S`Une nageuse traverse une rivière de 150 m à 1.5 m/s (en visant directement l'autre rive); le courant est de 0.9 m/s. Trouve la durée de la traversée et la distance en aval où elle accoste.`, recap: "Le temps vient de la vitesse de traversée.", ans: "100 s; 90 m en aval" },
  { level: 2, q: S`Deux cordes tirent avec 200 N chacune à $30^\circ$ de part et d'autre d'une droite. Trouve la résultante.`, recap: "Les parties vers l'avant s'additionnent.", ans: "environ 346.4 N le long de la droite" },
  { level: 2, q: S`Une enseigne de 60 N est suspendue à deux câbles qui forment chacun un angle de $45^\circ$ avec l'horizontale. Trouve chaque tension.`, recap: "2T sin 45° = 60.", ans: "environ 42.43 N" },
  { level: 3, space: 5, q: S`Un pilote veut suivre une route de $180^\circ$ avec une vitesse propre de 220 km/h; un vent de 40 km/h souffle de l'est. Trouve le cap et la vitesse sol.`, recap: "Le vent pousse vers l'ouest; vise à l'est du sud.", ans: "cap d'environ 169.5°, vitesse sol d'environ 216.3 km/h" },
  { level: 3, space: 5, q: S`Des forces de 4 N, de 5 N et de 6 N sont en équilibre. Trouve l'angle entre les forces de 4 N et de 5 N.`, recap: "Elles forment un triangle fermé 4-5-6.", ans: "environ 97.2° (l'angle du triangle est de 82.8°)" },
  { level: 3, space: 5, q: S`Un poids de 250 N est suspendu à deux cordes qui forment des angles de $35^\circ$ et de $55^\circ$ avec l'horizontale. Trouve les tensions. Qu'ont les cordes de particulier?`, recap: "Les cordes se rencontrent à 90°.", ans: "environ 143.4 N (corde à 35°) et 204.8 N (corde à 55°); les cordes sont perpendiculaires, donc les tensions sont 250 sin 35° et 250 cos 35°" },
  { level: 3, space: 5, q: S`Un avion a un cap de $045^\circ$ à 300 km/h pendant 2 h; un vent de 50 km/h souffle de $315^\circ$. Trouve la route et la distance parcourue.`, recap: "Le vent est perpendiculaire au cap.", ans: "route d'environ 054.5°, environ 608.3 km" },
  { level: 3, space: 5, q: S`Explique pourquoi l'équilibrante de deux forces ne peut jamais être plus grande que la somme de leurs normes, et indique quand elle lui est égale.`, recap: "Inégalité du triangle.", ans: "|R| ≤ |F1| + |F2|, avec égalité lorsque les forces pointent dans le même sens; l'équilibrante a la même norme que R" },
];

export const WS = {
  code: "6.4",
  title: "Applications de l'addition de vecteurs",
  bigideas: S`Quel que soit le contexte — forces, avion dans le vent, bateau dans un courant, câbles qui retiennent une charge — l'effet réel est la somme vectorielle. La résultante remplace tous les vecteurs; l'équilibrante est son opposé. Vitesse sol = vitesse par rapport à l'air + vitesse du vent, et un vent est nommé d'après la direction d'où il souffle. Pour un objet au repos, les forces ont pour somme $\vec 0$ : bout à bout, elles forment un polygone fermé.`,
  goals: ["Trouver des résultantes et des équilibrantes.", "Utiliser le cap, la vitesse propre et le vent.", "Trouver le cap qui donne une route voulue.", "Résoudre des problèmes de rivières et de câbles."],
  curriculum: "C2.2",
  vocab: [["Résultante", "somme des vecteurs"], ["Équilibrante", "opposé de la résultante"], ["Cap", "direction où pointe l'appareil"], ["Route", "direction où il va réellement"]],
  hook: S`Pourquoi un petit avion qui vole « vers le nord » par fort vent d'ouest se retrouve-t-il à l'est de sa destination?`,
  concepts: [
    ["1. Les forces", S`Résultante et équilibrante de deux forces :
${VF({ view: { xmin: -3.2, xmax: 4.4, ymin: -3.4, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], vl: "F₁", off: 16 }, { from: [0, 0], to: pol(3, 75), vl: "F₂", color: "blue", off: -16 }, { from: [0, 0], to: plus([4, 0], pol(3, 75)), color: "red", vl: "R", off: 16 }, { from: [0, 0], to: plus([-4, 0], pol(3, 255)), color: "green", vl: "E", off: 16 }] }, 4.2)}`],
    ["2. La navigation", S`Vitesse sol $=$ vitesse par rapport à l'air $+$ vitesse du vent; un vent qui vient de $\beta$ souffle vers $\beta\pm180^\circ$.`],
    ["3. L'équilibre", S`Les forces sur un objet au repos ont pour somme $\vec 0$ : les parties horizontales s'annulent et les parties verticales s'annulent.`],
  ],
  tips: ["Trace bout à bout.", "Un vent qui vient d'une direction souffle vers la direction opposée.", "Le cap n'est pas la route.", "Traversée la plus rapide : vise directement l'autre rive.", "Équilibrante = −résultante."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
