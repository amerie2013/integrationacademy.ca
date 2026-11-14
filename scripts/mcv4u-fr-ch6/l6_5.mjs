// MCV4U-FR 6.5 — Décomposition de vecteurs en composantes rectangulaires : composantes horizontale et verticale,
// composantes à partir d'un relèvement, composantes parallèle et perpendiculaire à un plan incliné, addition de
// vecteurs par les composantes, et reconstitution d'un vecteur à partir de ses composantes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "../mcv4u-ch6/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "6.5 Décomposition de vecteurs en composantes rectangulaires";
export const ID = lessonId(6, 5);

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Décomposition de vecteurs en composantes rectangulaires",
    overview: S`Une corde qui tire un traîneau en formant un angle fait deux choses à la fois : une partie de la traction fait avancer le traîneau, et une partie le soulève. Écrire un vecteur comme la somme de deux vecteurs perpendiculaires s'appelle le <strong>décomposer</strong> en <strong>composantes rectangulaires</strong>. Avec un angle \(\theta\) mesuré à partir de l'horizontale, les composantes sont \(|\vec v|\cos\theta\) et \(|\vec v|\sin\theta\). Les composantes transforment des triangles compliqués en simples additions — et elles mènent directement aux vecteurs cartésiens du prochain chapitre.`,
    goals: [
      "décomposer un vecteur en composantes horizontale et verticale;",
      "trouver les composantes d'un vecteur donné par un relèvement;",
      "décomposer un poids parallèlement et perpendiculairement à un plan incliné;",
      "additionner plusieurs vecteurs en additionnant leurs composantes;",
      "trouver la norme et la direction d'un vecteur à partir de ses composantes.",
    ],
    curriculum: "C1.3 (représenter un vecteur dans le plan à l'aide de ses composantes rectangulaires et passer d'une forme à l'autre); C2.2 (résoudre des problèmes à l'aide de vecteurs)",
    prior: [
      [S`Dans un triangle rectangle, \(\cos\theta=\)?`, S`côté adjacent ÷ hypoténuse.`],
      [S`\(\sin30^\circ\)?`, S`\(\frac12\).`],
      [S`\(\sqrt{9^2+12^2}\)?`, S`\(15\).`],
    ],
    words: [
      ["Décomposer", "séparer en parties perpendiculaires", ""],
      ["Composante horizontale", "\\(|\\vec v|\\cos\\theta\\)", "\\(\\theta\\) à partir de l'horizontale"],
      ["Composante verticale", "\\(|\\vec v|\\sin\\theta\\)", ""],
      ["Composantes sur un plan incliné", "parallèle : \\(W\\sin\\alpha\\); vers la surface : \\(W\\cos\\alpha\\)", "angle d'inclinaison \\(\\alpha\\)"],
    ],
  }),

  section("📌 Séparer un vecteur en deux", S`
  ${vfig({ view: { xmin: -0.8, xmax: 9.6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.915, 0], color: "blue", label: "60 cos 35° ≈ 49.1 N", off: -14 }, { from: [4.915, 0], to: [4.915, 3.441], color: "red", label: "60 sin 35° ≈ 34.4 N", off: 12 }, { from: [0, 0], to: [4.915, 3.441], vl: "F", label: "60 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.2, a: 0, b: 35, label: "35°" }] }, "Une traction de 60 N à 35° au-dessus de l'horizontale et ses deux composantes rectangulaires")}
  ${table(["Donnée", "Horizontale (est)", "Verticale (nord)"], [
    ["angle \\(\\theta\\) à partir de l'axe des x positifs", "\\(|\\vec v|\\cos\\theta\\)", "\\(|\\vec v|\\sin\\theta\\)"],
    ["relèvement vrai \\(\\beta\\)", "\\(|\\vec v|\\sin\\beta\\)", "\\(|\\vec v|\\cos\\beta\\)"],
    ["composantes \\(x\\), \\(y\\)", "\\(|\\vec v|=\\sqrt{x^2+y^2}\\)", "\\(\\tan\\theta=\\frac yx\\) (vérifie le quadrant)"],
  ])}
  ${keyIdea(S`Un vecteur est égal à la somme de ses composantes. Pour additionner plusieurs vecteurs, additionne toutes les composantes horizontales, additionne toutes les composantes verticales, puis reconstitue la résultante à l'aide du théorème de Pythagore et de la tangente inverse. On peut prendre les composantes selon <em>n'importe quelles</em> deux directions perpendiculaires — parallèlement et perpendiculairement à un plan incliné est souvent le choix le plus judicieux.`)}`),

  section("📌 Explore", S`<p>Modifie la norme et l'angle, et observe les composantes bleue et rouge; leurs signes changent lorsque le vecteur passe dans d'autres quadrants. Passe ensuite au plan incliné : plus la pente est forte, plus la part du poids qui tire l'objet vers le bas de la pente est grande.</p>`),

  widget("componentsLab", { init: { m: 5, deg: 35 } }),

  section("📌 Choisir le bon angle", S`
  <p>Trace le triangle rectangle formé par le vecteur et ses composantes, et assure-toi de savoir de quel angle il s'agit. Pour un plan incliné d'angle \(\alpha\), l'angle entre le poids (vertical, vers le bas) et la perpendiculaire au plan est aussi \(\alpha\); la partie parallèle au plan est donc \(W\sin\alpha\) et la partie dirigée vers la surface, \(W\cos\alpha\).</p>
  ${watchOut([
    "cos va avec le côté adjacent à l'angle, sin avec le côté opposé.",
    "Les relèvements se mesurent à partir du nord, donc la partie est utilise sin.",
    "Une composante dirigée vers la gauche ou vers le bas est négative.",
    "tan⁻¹ donne un angle entre −90° et 90° : ajuste selon le quadrant.",
    "Sur un plan incliné, l'angle entre le poids et la perpendiculaire est égal à l'angle d'inclinaison.",
  ])}`),

  examples([
    ["Une traction oblique", S`Une force de 60 N agit à \(35^\circ\) au-dessus de l'horizontale. Trouve ses composantes.`,
      [S`Horizontale : \(60\cos35^\circ\approx49.15\) N.`, S`Verticale : \(60\sin35^\circ\approx34.41\) N.`],
      S`environ 49.15 N horizontalement et 34.41 N verticalement`],
    ["À partir d'un relèvement", S`Un avion vole à 300 km/h selon un relèvement de \(120^\circ\). Trouve ses composantes est et nord.`,
      [S`Est : \(300\sin120^\circ\approx259.81\) km/h.`, S`Nord : \(300\cos120^\circ=-150\) km/h, c'est-à-dire 150 km/h vers le sud.`],
      S`259.81 km/h vers l'est et 150 km/h vers le sud`,
      vfig({ view: { xmin: -0.8, xmax: 4.6, ymin: -2, ymax: 1.6 }, north: [0, 0, 1.4], arrows: [{ from: [0, 0], to: [2.598, 0], color: "blue", label: "259.8 est", off: 14 }, { from: [2.598, 0], to: [2.598, -1.5], color: "red", label: "150 sud", off: -12 }, { from: [0, 0], to: brg(3, 120), vl: "v", label: "300", off: 16 }], arcs: [{ at: [0, 0], r: 0.6, a: -30, b: 90, label: "120°", lr: 0.35 }] })],
    ["Sur un plan incliné", S`Une boîte de 80 N repose sur un plan incliné à \(20^\circ\). Décompose le poids parallèlement et perpendiculairement au plan.`,
      [S`Parallèlement au plan (vers le bas de la pente) : \(80\sin20^\circ\approx27.36\) N.`, S`Vers la surface du plan : \(80\cos20^\circ\approx75.18\) N.`],
      S`27.36 N vers le bas de la pente et 75.18 N vers la surface du plan`,
      vfig({ view: { xmin: -0.5, xmax: 8, ymin: -2, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [7.8, 0], [7.8, 7.8 * Math.tan(20 * Math.PI / 180)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [4.4, 2.0], to: plus([4.4, 2.0], pol(1.094, 200)), color: "red", label: "27.4 N", off: 14 }, { from: plus([4.4, 2.0], pol(1.094, 200)), to: [4.4, -1.2], color: "blue", label: "75.2 N", off: 30 }, { from: [4.4, 2.0], to: [4.4, -1.2], vl: "W", label: "80 N", off: -18 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 20, label: "20°" }] })],
    ["Additionner par les composantes", S`Additionne une force de 40 N à \(0^\circ\) et une force de 30 N à \(60^\circ\) à l'aide des composantes.`,
      [S`x : \(40+30\cos60^\circ=55\). y : \(0+30\sin60^\circ\approx25.98\).`, S`\(|\vec R|=\sqrt{55^2+25.98^2}\approx60.83\) N à \(\tan^{-1}\frac{25.98}{55}\approx25.28^\circ\).`],
      S`environ 60.83 N à \(25.28^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], vl: "F₁", label: "40 N", off: -18 }, { from: [4, 0], to: [5.5, 2.598], vl: "F₂", label: "30 N", color: "blue", off: -18 }, { from: [0, 0], to: [5.5, 2.598], color: "red", vl: "R" }], segs: [{ pts: [[5.5, 0], [5.5, 2.598]], dash: true }], texts: [{ x: 5.9, y: 1.2, t: "25.98", color: "gray" }] })],
    ["Raisonner à rebours", S`Une corde doit tirer un traîneau vers l'avant avec une force horizontale de 90 N. Si la corde forme un angle de \(30^\circ\) avec le sol, quelle tension faut-il?`,
      [S`La composante horizontale est \(T\cos30^\circ=90\).`, S`\(T=\frac{90}{\cos30^\circ}\approx103.92\) N.`],
      S`environ 103.92 N`,
      vfig({ view: { xmin: -0.6, xmax: 6, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[-0.4, -0.5], [1, -0.5], [1, 0.2], [-0.4, 0.2]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1, 0], to: plus([1, 0], pol(5, 30)), vl: "T" }, { from: [1, 0], to: [5.33, 0], color: "blue", label: "90 N", off: -14 }], arcs: [{ at: [1, 0], r: 1.2, a: 0, b: 30, label: "30°" }] })],
  ]),

  practice([
    q("horizontale", S`Trouve la composante horizontale d'une force de 50 N à \(30^\circ\) au-dessus de l'horizontale (en N, au centième près).`, num(43.3, 0.01),
      "50 cos 30°.", [S`\(50\times0.8660\).`], S`\(43.30\)`),
    q("verticale", S`Trouve la composante verticale d'une force de 50 N à \(30^\circ\) au-dessus de l'horizontale (en N).`, num(25),
      "50 sin 30°.", [S`\(50\times\frac12\).`], S`\(25\)`),
    q("norme", S`Un vecteur a pour composantes 9 et 12. Trouve sa norme.`, num(15),
      "Pythagore.", [S`\(\sqrt{81+144}\).`], S`\(15\)`),
    q("angle", S`Un vecteur a pour composantes \(6\) et \(6\). Trouve son angle au-dessus de l'horizontale (en degrés).`, num(45),
      "tan θ = 1.", [S`\(\tan^{-1}1\).`], S`\(45^\circ\)`),
    q("plan incliné", S`Une caisse de 100 N repose sur un plan incliné à \(30^\circ\). Quelle est la composante de son poids vers le bas de la pente?`, choice(["50 N", "86.6 N", "100 N", "57.7 N"], 0),
      "W sin α.", [S`\(100\sin30^\circ\).`], "50 N"),
  ]),

  ...hard([
    ["Trois forces par les composantes", S`Trouve la résultante des forces de 20 N à \(0^\circ\), de 30 N à \(90^\circ\) et de 25 N à \(225^\circ\).`,
      [S`x : \(20+0+25\cos225^\circ=20-17.68=2.32\).`, S`y : \(0+30+25\sin225^\circ=30-17.68=12.32\).`, S`\(|\vec R|=\sqrt{2.32^2+12.32^2}\approx12.54\) N à \(\tan^{-1}\frac{12.32}{2.32}\approx79.33^\circ\).`],
      S`environ 12.54 N à \(79.33^\circ\)`,
      vfig({ view: { xmin: -2.4, xmax: 2.6, ymin: -2.2, ymax: 3.4 }, grid: false, arrows: [{ from: [0, 0], to: [2, 0], vl: "a", label: "20 N", off: -18 }, { from: [0, 0], to: [0, 3], vl: "b", label: "30 N", color: "blue", off: 22 }, { from: [0, 0], to: pol(2.5, 225), vl: "c", label: "25 N", color: "green", off: -18 }, { from: [0, 0], to: [0.232, 1.232], color: "red", vl: "R", off: -16 }] })],
    ["La composante selon une direction", S`Une force a une composante de 40 N selon une droite qui forme un angle de \(20^\circ\) avec la force. Trouve la force et sa composante perpendiculaire à cette droite.`,
      [S`La composante selon la droite est \(|\vec F|\cos20^\circ=40\), donc \(|\vec F|=\frac{40}{\cos20^\circ}\approx42.57\) N.`, S`Perpendiculaire : \(|\vec F|\sin20^\circ\approx14.56\) N.`],
      S`environ 42.57 N, avec 14.56 N perpendiculairement à la droite`,
      vfig({ view: { xmin: -0.6, xmax: 5.4, ymin: -0.8, ymax: 2.6 }, grid: false, axes: false, segs: [{ pts: [[-0.4, 0], [5.2, 0]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: pol(4.257, 20), vl: "F" }, { from: [0, 0], to: [4, 0], color: "blue", label: "40 N", off: 14 }, { from: [4, 0], to: pol(4.257, 20), color: "red", label: "14.56 N", off: -12 }], arcs: [{ at: [0, 0], r: 1.3, a: 0, b: 20, label: "20°" }] })],
  ], [
    q("difficile", S`Trouve la norme de la résultante des forces de 10 N à \(30^\circ\) et de 10 N à \(150^\circ\).`, num(10),
      "Les composantes en x s'annulent.", [S`y : \(5+5\).`], S`\(10\)`),
    q("difficile", S`Pour quel angle d'inclinaison les composantes du poids parallèle au plan et perpendiculaire au plan sont-elles égales (en degrés)?`, num(45),
      "sin α = cos α.", [S`\(\tan\alpha=1\).`], S`\(45^\circ\)`),
    q("difficile", S`Une vitesse de 250 km/h a une composante nord de 200 km/h. Trouve sa composante est (en km/h, l'est étant positif).`, num(150),
      "Pythagore sur les composantes.", [S`\(\sqrt{250^2-200^2}\).`], S`\(150\)`),
  ]),

  wrapUp({
    qas: [
      ["Que signifie décomposer un vecteur?", "L'écrire comme la somme de deux vecteurs perpendiculaires, ses composantes rectangulaires."],
      ["Quelle composante utilise cos?", "Celle qui est adjacente à l'angle donné : avec θ mesuré à partir de l'horizontale, la partie horizontale est |v| cos θ."],
      ["Pourquoi décomposer selon un plan incliné?", "Le mouvement se fait le long du plan; en séparant le poids parallèlement et perpendiculairement au plan, on voit ce qui tire l'objet vers le bas de la pente et ce qui le presse contre la surface."],
      ["Comment les composantes aident-elles à additionner des vecteurs?", "Additionne toutes les parties en x et toutes les parties en y, puis reconstitue la norme et la direction."],
      ["Comment retrouver un vecteur à partir de ses composantes?", "Norme √(x² + y²); direction tan⁻¹(y/x), ajustée selon le quadrant."],
    ],
    summary: [
      "Composantes : |v| cos θ et |v| sin θ.",
      "Relèvement β : est |v| sin β, nord |v| cos β.",
      "Plan incliné : W sin α parallèlement, W cos α vers la surface.",
      "On additionne des vecteurs en additionnant leurs composantes.",
    ],
    next: "La leçon 6.6 fait la révision du chapitre.",
  }),
];
