// MCV4U-FR 6.4 — Applications de l'addition de vecteurs : forces résultante et équilibrante, cap d'un avion, vitesse
// propre, vent et vitesse sol, traversées de rivière, et tensions dans des câbles qui retiennent une charge
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "../mcv4u-ch6/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "6.4 Applications de l'addition de vecteurs";
export const ID = lessonId(6, 4);

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const blocks = () => [
  intro({
    icon: "✈️",
    title: "Applications de l'addition de vecteurs",
    overview: S`Un pilote oriente l'avion dans une direction, le vent le pousse dans une autre, et l'avion se déplace en réalité selon la somme des deux vitesses. Deux personnes qui tirent un traîneau avec des cordes produisent une seule force combinée. Chaque fois que plusieurs vecteurs agissent ensemble, leur somme — la <strong>résultante</strong> — indique ce qui se passe vraiment; le vecteur qui l'annulerait, l'<strong>équilibrante</strong>, indique ce qu'il faut pour que tout reste immobile.`,
    goals: [
      "trouver la résultante et l'équilibrante de deux forces;",
      "utiliser le cap, la vitesse propre et le vent pour trouver la vitesse sol;",
      "trouver le cap qui produit une route voulue;",
      "résoudre des problèmes de traversée de rivière;",
      "trouver les tensions dans des câbles qui maintiennent un objet en équilibre.",
    ],
    curriculum: "C2.2 (résoudre des problèmes portant sur l'addition, la soustraction et la multiplication de vecteurs par un scalaire, y compris des problèmes tirés d'applications de la vie courante)",
    prior: [
      [S`Angle entre les relèvements \(045^\circ\) et \(090^\circ\)?`, S`\(45^\circ\).`],
      [S`\(\sin^{-1}0.5\)?`, S`\(30^\circ\).`],
      [S`Vitesse × temps?`, S`Distance.`],
    ],
    words: [
      ["Résultante", "la somme de tous les vecteurs qui agissent", "\\(\\vec R=\\vec F_1+\\vec F_2\\)"],
      ["Équilibrante", "l'opposé de la résultante", "\\(\\vec E=-\\vec R\\)"],
      ["Cap / vitesse propre", "la direction où pointe l'avion, et sa vitesse dans de l'air immobile", ""],
      ["Route / vitesse sol", "la direction où il va réellement, et sa vitesse par rapport au sol", ""],
    ],
  }),

  section("📌 Une idée, plusieurs contextes", S`
  ${table(["Contexte", "Vecteurs additionnés", "Résultat"], [
    ["forces sur un objet", "\\(\\vec F_1+\\vec F_2+\\cdots\\)", "force résultante; l'équilibrante l'annule"],
    ["avion", "vitesse par rapport à l'air + vitesse du vent", "vitesse sol (route et vitesse sol)"],
    ["bateau ou nageur", "vitesse en eau calme + courant", "vitesse par rapport à la rive"],
    ["objet suspendu", "tensions + poids", "\\(\\vec 0\\) lorsqu'il est au repos"],
  ])}
  ${vfig({ view: { xmin: -0.8, xmax: 6.8, ymin: -0.8, ymax: 5.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 0], vl: "F₁", label: "30 N", off: -18 }, { from: [0, 0], to: [0, 4], vl: "F₂", label: "40 N", color: "blue", off: 22 }, { from: [0, 0], to: [3, 4], vl: "R", label: "50 N", color: "red", off: 18 }], segs: [{ pts: [[3, 0], [3, 4], [0, 4]], dash: true }] }, "Des forces perpendiculaires de 30 N et de 40 N ont une résultante de 50 N")}
  ${keyIdea(S`Commence par un diagramme clair : bout à bout, avec chaque longueur et chaque angle connus. Un vent est nommé d'après la direction <strong>d'où</strong> il souffle; un « vent d'ouest » souffle donc vers l'est. Un objet est en équilibre lorsque la somme vectorielle de toutes les forces qui s'exercent sur lui est \(\vec 0\) — les vecteurs forces placés bout à bout forment un polygone fermé.`)}`),

  section("📌 Explore", S`<p>En mode avion, modifie le cap, la vitesse propre et le vent, puis lis la route et la vitesse sol. En mode forces, modifie l'angle entre deux forces : la résultante est la plus grande lorsqu'elles tirent ensemble et la plus petite lorsqu'elles tirent en sens contraires. L'équilibrante verte annule toujours la résultante rouge.</p>`),

  widget("resultantLab", { init: { mode: "nav" } }),

  section("📌 Construire le triangle", S`
  <p>Traduis chaque description en flèche, place les flèches bout à bout et trouve l'angle à l'intérieur du triangle à partir des relèvements. Utilise la loi des cosinus pour le côté inconnu et la loi des sinus pour un angle inconnu, puis reconvertis l'angle en relèvement ou en direction.</p>
  ${watchOut([
    "Un vent « qui vient de 270° » souffle vers 090°.",
    "Le cap est la direction où pointe l'avion; la route est la direction où il va — elles diffèrent lorsqu'il y a un vent de travers.",
    "Pour traverser une rivière le plus vite possible, vise directement l'autre rive; pour accoster juste en face, vise vers l'amont.",
    "L'équilibrante a la même norme que la résultante et la direction opposée.",
    "Pour un objet suspendu, les parties verticales des tensions doivent avoir pour somme le poids.",
  ])}`),

  examples([
    ["Des forces perpendiculaires", S`Des forces de 30 N vers l'est et de 40 N vers le nord agissent sur un objet. Trouve la résultante et l'équilibrante.`,
      [S`\(|\vec R|=\sqrt{30^2+40^2}=50\) N.`, S`Angle par rapport à la force de 30 N : \(\tan^{-1}\frac{40}{30}\approx53.13^\circ\), donc \(\vec R\) pointe vers N36.87°E (relèvement \(036.9^\circ\)).`, S`L'équilibrante est de 50 N selon un relèvement de \(216.9^\circ\).`],
      S`résultante de 50 N selon un relèvement de \(036.9^\circ\); équilibrante de 50 N selon un relèvement de \(216.9^\circ\)`],
    ["Des forces à 70°", S`Des forces de 25 N et de 15 N agissent à \(70^\circ\) l'une de l'autre. Trouve la résultante et l'angle qu'elle forme avec la force de 25 N.`,
      [S`L'angle du triangle est \(180^\circ-70^\circ=110^\circ\) : \(|\vec R|^2=25^2+15^2-2(25)(15)\cos110^\circ\approx1106.5\), \(|\vec R|\approx33.26\) N.`, S`Loi des sinus : \(\sin\alpha=\frac{15\sin110^\circ}{33.26}\approx0.4238\), \(\alpha\approx25.07^\circ\).`],
      S`environ 33.26 N à \(25.07^\circ\) de la force de 25 N`,
      vfig({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "F₁", label: "25 N", off: 18 }, { from: [5, 0], to: plus([5, 0], pol(3, 70)), vl: "F₂", label: "15 N", color: "blue", off: 18 }, { from: [0, 0], to: plus([5, 0], pol(3, 70)), color: "red", vl: "R" }], arcs: [{ at: [5, 0], r: 0.7, a: 0, b: 70, label: "70°", color: "green" }, { at: [0, 0], r: 1.4, a: 0, b: 25.07, label: "25.1°" }], segs: [{ pts: [[5, 0], [6.4, 0]], dash: true }] })],
    ["Vent et vitesse sol", S`Un avion a un cap de \(045^\circ\) et une vitesse propre de 500 km/h. Un vent de 60 km/h souffle de l'ouest. Trouve la vitesse sol et la route.`,
      [S`Le vent souffle vers \(090^\circ\). Entre le cap \(045^\circ\) et la direction du vent \(090^\circ\), il y a \(45^\circ\), donc l'angle du triangle est de \(135^\circ\).`, S`\(|\vec g|^2=500^2+60^2-2(500)(60)\cos135^\circ\approx296\,026\), \(|\vec g|\approx544.1\) km/h.`, S`Dérive : \(\sin\delta=\frac{60\sin135^\circ}{544.1}\), \(\delta\approx4.47^\circ\), vers l'est : route \(045^\circ+4.47^\circ\).`],
      S`environ 544 km/h selon une route de \(049.5^\circ\)`,
      vfig({ view: { xmin: -0.8, xmax: 6, ymin: -0.7, ymax: 4.6 }, north: [0, 0, 4.3], arrows: [{ from: [0, 0], to: brg(5, 45), vl: "a", label: "500 km/h", off: -18 }, { from: brg(5, 45), to: plus(brg(5, 45), [1.2, 0]), color: "blue", label: "60", off: -14 }, { from: [0, 0], to: plus(brg(5, 45), [1.2, 0]), color: "red", vl: "g", label: "544 km/h", off: 18 }], arcs: [{ at: [0, 0], r: 1.1, a: 45, b: 90, label: "45°" }], texts: [{ x: 4.2, y: -0.35, t: "vent agrandi pour plus de clarté", color: "gray", size: 11 }] })],
    ["Traverser une rivière", S`Une nageuse nage à 2 m/s directement vers l'autre rive d'une rivière de 60 m de large dont le courant est de 1.5 m/s. Trouve la vitesse résultante, la durée de la traversée et la distance en aval où elle accoste.`,
      [S`\(\sqrt{2^2+1.5^2}=2.5\) m/s à \(\tan^{-1}\frac{1.5}{2}\approx36.87^\circ\) vers l'aval par rapport à la perpendiculaire aux rives.`, S`Seule la partie de 2 m/s fait traverser la rivière : \(t=\frac{60}{2}=30\) s.`, S`Dérive vers l'aval : \(1.5\times30=45\) m.`],
      S`2.5 m/s à \(36.87^\circ\) vers l'aval; 30 s; 45 m en aval`,
      vfig({ view: { xmin: -1.2, xmax: 6, ymin: -0.8, ymax: 7 }, grid: false, axes: false, polys: [{ pts: [[-1.2, 0], [6, 0], [6, 6], [-1.2, 6]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [0, 6], vl: "s", label: "2 m/s", off: -18 }, { from: [0, 6], to: [4.5, 6], color: "blue", label: "courant 1.5 m/s", off: -14 }, { from: [0, 0], to: [4.5, 6], color: "red", label: "2.5 m/s", off: -18 }], texts: [{ x: 2.2, y: -0.5, t: "rivière de 60 m de large (pas à l'échelle)", color: "gray" }] })],
    ["Une enseigne suspendue", S`Une enseigne de 200 N est suspendue à deux câbles qui forment des angles de \(30^\circ\) et de \(45^\circ\) avec l'horizontale. Trouve la tension dans chaque câble.`,
      [S`Les parties horizontales s'équilibrent : \(T_1\cos30^\circ=T_2\cos45^\circ\), donc \(T_2\approx1.2247T_1\).`, S`Les parties verticales soutiennent le poids : \(T_1\sin30^\circ+T_2\sin45^\circ=200\Rightarrow T_1(0.5+0.8660)=200\).`],
      S`\(T_1\approx146.4\) N et \(T_2\approx179.3\) N`,
      vfig({ view: { xmin: -4.6, xmax: 4.6, ymin: -3.4, ymax: 3 }, grid: false, axes: false, segs: [{ pts: [[-4.33, 2.5], [0, 0], [3, 3]], color: "gray", w: 1.4 }], polys: [{ pts: [[-1, -0.2], [1, -0.2], [1, -1.2], [-1, -1.2]], fill: "#fde68a", stroke: "amber" }], arrows: [{ from: [0, 0], to: pol(2.4, 150), color: "violet", vl: "T₁" }, { from: [0, 0], to: pol(2.4, 45), color: "blue", vl: "T₂", off: -16 }, { from: [0, -1.2], to: [0, -3.2], color: "red", label: "200 N", off: -24 }], arcs: [{ at: [0, 0], r: 1.2, a: 150, b: 180, label: "30°", lr: 0.6 }, { at: [0, 0], r: 1.2, a: 0, b: 45, label: "45°", lr: 0.6 }] })],
  ]),

  practice([
    q("résultante", S`Trouve la résultante de forces de 5 N et de 12 N perpendiculaires (en N).`, num(13),
      "Pythagore.", [S`\(\sqrt{25+144}\).`], S`\(13\)`),
    q("équilibrante", S`Deux forces de 8 N agissent à \(120^\circ\) l'une de l'autre. Trouve la norme de l'équilibrante (en N).`, num(8),
      "Le triangle des forces est équilatéral.", [S`\(64+64-128\cos60^\circ=64\).`], S`\(8\)`),
    q("bateau", S`Un bateau se déplace à 4 m/s directement vers l'autre rive d'une rivière dont le courant est de 3 m/s. Trouve sa vitesse par rapport à la rive (en m/s).`, num(5),
      "Vitesses perpendiculaires.", [S`\(\sqrt{16+9}\).`], S`\(5\)`),
    q("temps", S`Une rivière a 80 m de large. Un bateau se dirige directement vers l'autre rive à 4 m/s dans un courant de 3 m/s. Combien de temps dure la traversée (en s)?`, num(20),
      "Seule la partie perpendiculaire aux rives compte.", [S`\(80\div4\).`], S`\(20\)`),
    q("équilibrante", S`L'équilibrante d'un ensemble de forces est :`, choice(["l'opposé de la résultante", "la même que la résultante", "la plus grande force", "toujours perpendiculaire à la résultante"], 0),
      "Elle annule la résultante.", ["E + R = 0."], "l'opposé de la résultante"),
  ]),

  ...hard([
    ["Voler plein nord par vent de travers", S`Un pilote veut suivre une route de \(000^\circ\). La vitesse propre est de 300 km/h et un vent de 50 km/h souffle de \(270^\circ\). Quel cap faut-il prendre, et quelle est la vitesse sol?`,
      [S`Le vent pousse vers l'est à 50 km/h, donc l'avion doit pointer à l'ouest du nord d'un angle \(\theta\) tel que \(300\sin\theta=50\) : \(\theta=\sin^{-1}\frac16\approx9.59^\circ\).`, S`Cap \(360^\circ-9.59^\circ\approx350.4^\circ\). La vitesse sol est la partie vers le nord qui reste : \(\sqrt{300^2-50^2}\approx295.8\) km/h.`],
      S`cap d'environ \(350.4^\circ\), vitesse sol d'environ 295.8 km/h`,
      vfig({ view: { xmin: -2.2, xmax: 2.2, ymin: -0.4, ymax: 3.4 }, grid: false, north: [1.7, 0, 1], arrows: [{ from: [0, 0], to: brg(3, 350.41), vl: "a", off: -16 }, { from: brg(3, 350.41), to: [0, 2.958], color: "blue", label: "50", off: -14 }, { from: [0, 0], to: [0, 2.958], color: "red", vl: "g", off: 16 }], texts: [{ x: -0.95, y: 1.2, t: "300 km/h", color: "violet" }, { x: 0.75, y: 0.9, t: "295.8 km/h", color: "red" }], arcs: [{ at: [0, 0], r: 1, a: 90, b: 99.59, label: "9.6°", lr: 0.3 }] })],
    ["Trois forces en équilibre", S`Des forces de 5 N, de 7 N et de 9 N maintiennent un objet en équilibre. Trouve l'angle entre les forces de 5 N et de 7 N.`,
      [S`À l'équilibre, les trois forces forment un triangle fermé dont les côtés mesurent 5, 7 et 9. L'angle de ce triangle opposé au côté 9 : \(\cos\phi=\frac{25+49-81}{70}=-0.1\), \(\phi\approx95.74^\circ\).`, S`L'angle entre les vecteurs forces eux-mêmes est \(180^\circ-\phi\).`],
      S`environ \(84.26^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 7.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "F₁", label: "5 N", off: -18 }, { from: [5, 0], to: plus([5, 0], pol(7, 84.26)), vl: "F₂", label: "7 N", color: "blue", off: -18 }, { from: plus([5, 0], pol(7, 84.26)), to: [0, 0], color: "green", vl: "F₃", label: "9 N" }], arcs: [{ at: [5, 0], r: 0.8, a: 0, b: 84.26, label: "84.3°", color: "red" }], segs: [{ pts: [[5, 0], [6.4, 0]], dash: true }] })],
  ], [
    q("difficile", S`Une nageuse qui nage à 2 m/s veut accoster juste en face sur une rivière dont le courant est de 1.2 m/s. Selon quel angle vers l'amont, par rapport à la perpendiculaire aux rives, doit-elle viser (en degrés, au centième près)?`, num(36.87, 0.01),
      "La partie vers l'amont doit annuler le courant.", [S`\(2\sin\theta=1.2\).`], S`\(36.87^\circ\)`),
    q("difficile", S`Pour la nageuse ci-dessus (2 m/s, courant de 1.2 m/s, accostage juste en face), quelle est sa vitesse de traversée (en m/s)?`, num(1.6, 0.001),
      "La partie qui reste des 2 m/s.", [S`\(\sqrt{4-1.44}\).`], S`\(1.6\)`),
    q("difficile", S`Un poids de 100 N est suspendu à deux cordes qui forment chacune un angle de \(60^\circ\) avec l'horizontale. Trouve la tension dans chaque corde (en N, au centième près).`, num(57.74, 0.01),
      "Situation symétrique : chaque corde soutient verticalement la moitié du poids.", [S`\(2T\sin60^\circ=100\).`], S`\(57.74\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce que la résultante?", "Le vecteur unique égal à la somme de tous les vecteurs qui agissent — il a le même effet que tous ces vecteurs ensemble."],
      ["Qu'est-ce que l'équilibrante?", "Le vecteur qui annule la résultante : même norme, direction opposée."],
      ["Quelle est la différence entre le cap et la route?", "Le cap est la direction où pointe l'avion; la route est la direction dans laquelle il se déplace réellement par rapport au sol, une fois le vent ajouté."],
      ["Comment traverser une rivière le plus vite possible?", "Vise directement l'autre rive; le courant change seulement l'endroit où tu accostes, pas la durée de la traversée."],
      ["Comment trouver la tension dans des câbles?", "Pose la somme des forces égale à zéro : les parties horizontales s'annulent et les parties verticales ont pour somme le poids."],
    ],
    summary: [
      "Résultante = somme; équilibrante = −résultante.",
      "Vitesse sol = vitesse par rapport à l'air + vent.",
      "Un vent est nommé d'après la direction d'où il vient.",
      "Équilibre : les forces forment un polygone fermé.",
    ],
    next: "La leçon 6.5 porte sur la décomposition de vecteurs en composantes rectangulaires.",
  }),
];
