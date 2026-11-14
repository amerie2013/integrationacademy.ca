// MCV4U-FR 7.3 — Applications du produit scalaire : projections scalaire et vectorielle, travail effectué par une
// force, décomposition d'un vecteur en parties parallèle et perpendiculaire à une direction, et distance d'un point à une droite
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.3 Applications du produit scalaire";
export const ID = lessonId(7, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔦",
    title: "Applications du produit scalaire",
    overview: S`Éclaire un vecteur à la verticale et regarde son ombre sur une droite : cette ombre est une <strong>projection</strong>. Le produit scalaire la mesure exactement — la projection scalaire de \(\vec a\) sur \(\vec b\) est \(\frac{\vec a\cdot\vec b}{|\vec b|}\). La même idée mesure le <strong>travail</strong> : une force effectue un travail seulement par sa partie dans la direction du mouvement, donc \(W=\vec F\cdot\vec d\). Les projections permettent aussi de décomposer un vecteur en une partie dans une direction donnée et une partie perpendiculaire à cette direction.`,
    goals: [
      "trouver des projections scalaires et vectorielles;",
      "calculer le travail effectué par une force;",
      "décomposer un vecteur en parties parallèle et perpendiculaire à une direction;",
      "comparer le travail pour différents angles d'application d'une force;",
      "utiliser les projections pour trouver des distances.",
    ],
    curriculum: "C2.4 (décrire des applications du produit scalaire, p. ex. la projection d'un vecteur sur un autre); C2.8 (résoudre des problèmes portant sur le travail)",
    prior: [
      [S`\([4,3]\cdot[1,0]\)?`, S`\(4\).`],
      [S`\(\cos60^\circ\)?`, S`\(\frac12\).`],
      [S`Vecteur unitaire dans la direction de \([3,4]\)?`, S`\(\left[\frac35,\frac45\right]\).`],
    ],
    words: [
      ["Projection scalaire", "\\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}=|\\vec a|\\cos\\theta\\)", "longueur avec un signe"],
      ["Projection vectorielle", "\\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|^2}\\vec b\\)", "dirigée selon b"],
      ["Travail", "\\(W=\\vec F\\cdot\\vec d\\)", "joules (N·m)"],
      ["Partie perpendiculaire", "\\(\\vec a-\\text{proj}_{\\vec b}\\vec a\\)", ""],
    ],
  }),

  section("📌 L'ombre d'un vecteur", S`
  ${vfig({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, segs: [{ pts: [[-0.4, 0], [7.4, 0]], color: "gray", dash: true }, { pts: [pol(5, 38), [5 * Math.cos(38 * Math.PI / 180), 0]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [7, 0], vl: "b", off: 16, w: 2 }, { from: [0, 0], to: pol(5, 38), vl: "a", off: -16 }, { from: [0, 0], to: [5 * Math.cos(38 * Math.PI / 180), 0], color: "red", w: 4.5 }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 38, label: "θ" }], texts: [{ x: 2, y: 0.45, t: "proj. de a sur b", color: "red" }] }, "La projection de a sur b est l'ombre de a sur la droite de b")}
  ${table(["Grandeur", "Formule", "Remarques"], [
    ["projection scalaire de \\(\\vec a\\) sur \\(\\vec b\\)", "\\(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}\\)", "négative lorsque θ est obtus"],
    ["projection vectorielle", "\\(\\left(\\frac{\\vec a\\cdot\\vec b}{|\\vec b|^2}\\right)\\vec b\\)", "parallèle à \\(\\vec b\\)"],
    ["travail", "\\(\\vec F\\cdot\\vec d=|\\vec F||\\vec d|\\cos\\theta\\)", "seule la partie de F dans la direction de d compte"],
  ])}
  ${keyIdea(S`La projection dépend seulement de la <em>direction</em> de \(\vec b\), pas de sa norme. En soustrayant la projection vectorielle de \(\vec a\), il reste la partie de \(\vec a\) perpendiculaire à \(\vec b\); les deux parties s'additionnent pour redonner \(\vec a\).`)}`),

  section("📌 Explore", S`<p>Change l'angle entre \(\vec a\) et \(\vec b\) et observe l'ombre rouge rapetisser, disparaître à \(90^\circ\), puis devenir négative au-delà. Passe ensuite au travail : abaisser la poignée du chariot fait compter une plus grande partie de la même traction.</p>`),

  widget("projectionLab", { init: { mode: "proj" } }),

  section("📌 Utiliser les projections", S`
  <p>Pour une projection, trouve d'abord \(\vec a\cdot\vec b\) et \(|\vec b|\). Pour le travail, le déplacement est la pointe moins l'origine; si la force et le déplacement sont donnés par leurs normes et un angle, utilise \(|\vec F||\vec d|\cos\theta\).</p>
  ${watchOut([
    "La projection de a sur b se divise par |b|, et non par |a|.",
    "La projection de a sur b et celle de b sur a sont habituellement différentes.",
    "Le travail est un scalaire : il n'a pas de direction.",
    "Une force perpendiculaire au mouvement n'effectue aucun travail.",
    "La projection vectorielle se divise par |b|², et non par |b|.",
  ])}`),

  examples([
    ["Tirer un traîneau", S`Une corde tire un traîneau sur 60 m sur un sol horizontal avec une force de 80 N orientée à \(35^\circ\) au-dessus de l'horizontale. Trouve le travail effectué.`,
      [S`\(W=|\vec F||\vec d|\cos\theta=80\times60\times\cos35^\circ\).`],
      S`environ 3932 J`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.6, 0], [1.6, 0.6], [0, 0.6]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.6, 0.3], to: pol(4, 35, [1.6, 0.3]), vl: "F", label: "80 N", off: -16 }, { from: [0, -0.5], to: [7, -0.5], color: "blue", label: "60 m", off: -12, w: 2 }], arcs: [{ at: [1.6, 0.3], r: 1.1, a: 0, b: 35, label: "35°" }] })],
    ["Le travail à partir des composantes", S`Une force \(\vec F=[12,5]\) N déplace un objet de \((1,2)\) à \((9,4)\) (en mètres). Trouve le travail effectué.`,
      [S`\(\vec d=[8,2]\).`, S`\(W=12(8)+5(2)\).`],
      S`106 J`],
    ["Une projection négative", S`Trouve les projections scalaire et vectorielle de \(\vec a=[4,3]\) sur \(\vec b=[5,-12]\).`,
      [S`\(\vec a\cdot\vec b=20-36=-16\), \(|\vec b|=13\) : projection scalaire \(-\frac{16}{13}\).`, S`Projection vectorielle \(\frac{-16}{169}[5,-12]\).`],
      S`\(\approx-1.23\); \(\approx[-0.47,\ 1.14]\) (de sens opposé à \(\vec b\))`],
    ["Une projection et sa partenaire", S`Trouve la projection vectorielle de \(\vec a=[7,1]\) sur \(\vec b=[2,2]\), ainsi que la partie de \(\vec a\) perpendiculaire à \(\vec b\).`,
      [S`\(\vec a\cdot\vec b=16\), \(|\vec b|^2=8\) : projection \(2[2,2]=[4,4]\).`, S`Partie perpendiculaire \([7,1]-[4,4]=[3,-3]\); vérification : \([3,-3]\cdot[2,2]=0\).`],
      S`\([4,4]\) dans la direction de \(\vec b\) et \([3,-3]\) perpendiculaire à \(\vec b\)`,
      vfig({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 5.2 }, arrows: [{ from: [0, 0], to: [7, 1], vl: "a", off: 16 }, { from: [0, 0], to: [2, 2], vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: [4, 4], color: "red", label: "[4, 4]", off: -18, w: 2.4 }, { from: [4, 4], to: [7, 1], color: "green", label: "[3, −3]", off: -16, w: 2.4 }] })],
    ["Distance d'un point à une droite", S`Trouve la distance du point \(P(7,1)\) à la droite qui passe par l'origine et qui a la direction \([1,1]\).`,
      [S`La partie de \(\overrightarrow{OP}=[7,1]\) perpendiculaire à \([1,1]\) est \([3,-3]\) (même direction qu'à l'exemple précédent).`, S`Sa norme est \(\sqrt{9+9}\).`],
      S`\(3\sqrt2\approx4.24\)`,
      vfig({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 6 }, segs: [{ pts: [[-0.5, -0.5], [6, 6]], color: "blue" }], arrows: [{ from: [4, 4], to: [7, 1], color: "red", label: "4.24", off: -16 }], points: [{ x: 7, y: 1, label: "P(7, 1)", dx: 8, dy: 4 }, { x: 4, y: 4, label: "pied", dx: -40, dy: -4 }] })],
  ]),

  practice([
    q("travail", S`Une force de 50 N déplace un objet sur 20 m, à \(60^\circ\) de la direction du mouvement. Trouve le travail (J).`, num(500),
      "|F||d| cos θ.", [S`\(50\times20\times\frac12\).`], S`\(500\)`),
    q("composantes", S`Trouve le travail effectué par \(\vec F=[3,4]\) N sur un déplacement \(\vec d=[10,0]\) m (J).`, num(30),
      "Produit scalaire.", [S`\(30+0\).`], S`\(30\)`),
    q("scalaire", S`Trouve la projection scalaire de \([6,8]\) sur \([1,0]\).`, num(6),
      "Divise le produit scalaire par |b| = 1.", [S`\(\frac{6}{1}\).`], S`\(6\)`),
    q("signe", S`La projection scalaire de \(\vec a\) sur \(\vec b\) est négative lorsque :`, choice(["l'angle entre les vecteurs est obtus", "l'angle est aigu", "les vecteurs sont perpendiculaires", "|a| > |b|"], 0),
      "Elle vaut |a| cos θ.", ["cos θ < 0."], "l'angle est obtus"),
    q("vectorielle", S`Trouve la composante en x de la projection vectorielle de \([5,5]\) sur \([3,0]\).`, num(5),
      "Projection sur l'axe des x.", [S`\(\frac{15}{9}[3,0]=[5,0]\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Comparer des angles de poignée", S`Une enfant tire un chariot sur 40 m avec une force de 120 N. Combien de travail de plus est effectué avec la poignée à \(25^\circ\) plutôt qu'à \(45^\circ\)?`,
      [S`\(W_{25}=120\times40\cos25^\circ\approx4350.3\) J; \(W_{45}=120\times40\cos45^\circ\approx3394.1\) J.`, S`Différence \(\approx956.2\) J : à \(45^\circ\), une plus grande partie de la traction sert à soulever plutôt qu'à faire avancer le chariot.`],
      S`environ 956 J de plus à \(25^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(5, 25), label: "25°", off: 16 }, { from: [0, 0], to: pol(5, 45), color: "blue", label: "45°", off: -16 }, { from: [0, 0], to: [4.53, 0], color: "red", w: 2.4, label: "4.53", off: 14 }], segs: [{ pts: [pol(5, 45), [3.54, 0]], dash: true, color: "blue" }, { pts: [pol(5, 25), [4.53, 0]], dash: true }], texts: [{ x: 3.4, y: -0.5, t: "3.54", color: "blue" }] })],
    ["Le long d'une rampe et perpendiculairement", S`Une force \(\vec F=[10,4]\) agit sur un bloc posé sur une rampe dont la surface suit la direction \(\vec d=[3,1]\). Décompose \(\vec F\) en une partie le long de la rampe et une partie perpendiculaire à la rampe.`,
      [S`\(\vec F\cdot\vec d=34\), \(|\vec d|^2=10\) : le long de la rampe, \(3.4[3,1]=[10.2,3.4]\).`, S`Partie perpendiculaire \([10,4]-[10.2,3.4]=[-0.2,0.6]\); vérification : \([-0.2,0.6]\cdot[3,1]=0\).`],
      S`\([10.2,3.4]\) le long de la rampe et \([-0.2,0.6]\) perpendiculaire à la rampe`,
      vfig({ view: { xmin: -0.6, xmax: 11, ymin: -0.8, ymax: 5 }, segs: [{ pts: [[0, 0], [10.5, 3.5]], color: "gray" }], arrows: [{ from: [0, 0], to: [10, 4], vl: "F", off: -16 }, { from: [0, 0], to: [10.2, 3.4], color: "red", w: 2.2, label: "le long", off: 14 }, { from: [10.2, 3.4], to: [10, 4], color: "green", w: 2.2 }] })],
  ], [
    q("difficile", S`Un poids de 49 N glisse sur 8 m vers le bas d'une rampe inclinée à \(30^\circ\). Quel travail la gravité effectue-t-elle (J)?`, num(196),
      "L'angle entre le poids et le mouvement est de 60°.", [S`\(49\times8\times\cos60^\circ\).`], S`\(196\)`),
    q("difficile", S`Trouve la projection scalaire de \([2,-1]\) sur \([-4,3]\).`, num(-2.2, 0.001),
      "Le produit scalaire divisé par |b| = 5.", [S`\(\frac{-8-3}{5}\).`], S`\(-2.2\)`),
    q("difficile", S`Pour quel angle entre la force et le mouvement le travail vaut-il la moitié de sa plus grande valeur possible (en degrés)?`, num(60),
      "cos θ = ½.", [S`\(\cos^{-1}0.5\).`], S`\(60^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce que la projection scalaire de a sur b?", "La longueur, avec un signe, de l'ombre de a sur la droite de b : a · b / |b| = |a| cos θ."],
      ["En quoi la projection vectorielle est-elle différente?", "C'est l'ombre sous forme de vecteur : la projection scalaire multipliée par le vecteur unitaire dans la direction de b."],
      ["Pourquoi la projection ne dépend-elle pas de |b|?", "Seule la direction de b définit la droite sur laquelle on projette."],
      ["Comment calculer le travail?", "W = F · d; avec les normes, |F||d| cos θ."],
      ["Comment obtenir la partie de a perpendiculaire à b?", "Soustrais la projection vectorielle de a."],
    ],
    summary: [
      "Projection scalaire : a · b / |b|.",
      "Projection vectorielle : (a · b / |b|²) b.",
      "Travail : W = F · d.",
      "a = (partie dans la direction de b) + (partie perpendiculaire).",
    ],
    next: "En 7.4, on passe aux vecteurs dans l'espace à trois dimensions.",
  }),
];
