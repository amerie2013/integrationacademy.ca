// MHF4U-FR 4.2 — Rapports trigonométriques et angles remarquables : valeurs exactes en radians, règle CAST,
// rapports réciproques et rapports à partir d'un point du côté terminal
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, ARM } from "./trigfig.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.2 Rapports trigonométriques et angles remarquables";
export const ID = lessonId(4, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⭕",
    title: "Rapports trigonométriques et angles remarquables",
    overview: S`Un point du cercle trigonométrique associé à l'angle \(\theta\) a pour coordonnées \((\cos\theta,\sin\theta)\). Deux triangles remarquables donnent les valeurs exactes en \(\frac\pi6\), \(\frac\pi4\) et \(\frac\pi3\), et la symétrie du cercle transporte ces valeurs dans tous les quadrants. Les rapports réciproques \(\csc\), \(\sec\) et \(\cot\) s'obtiennent en inversant les fractions.`,
    goals: [
      "donner les valeurs exactes de sin, cos et tan aux angles remarquables en radians;",
      "utiliser un angle de référence et la règle CAST dans n'importe quel quadrant;",
      "évaluer les rapports réciproques csc, sec et cot;",
      "trouver les six rapports à partir d'un point du côté terminal;",
      "évaluer des expressions de façon exacte, sans calculatrice.",
    ],
    curriculum: "B1.3 (valeurs exactes des angles remarquables), B1.4 (déterminer les rapports réciproques et résoudre des problèmes)",
    prior: [
      [S`\(\frac{5\pi}4\) en degrés?`, S`\(225^\circ\).`],
      [S`Hypoténuse d'un triangle rectangle dont les cathètes mesurent 1 et 1?`, S`\(\sqrt2\).`],
      [S`Dans quel quadrant se trouve \(\frac{2\pi}3\)?`, S`Le quadrant 2.`],
    ],
    words: [
      ["Angle de référence", "l'angle aigu entre le côté terminal et l'axe des x", "celui de \\(\\frac{5\\pi}6\\) est \\(\\frac\\pi6\\)"],
      ["Règle CAST", "indique quels rapports sont positifs dans chaque quadrant", "Tous, Sin, Tan, Cos"],
      ["Rapports réciproques", "\\(\\csc=\\frac1\\sin,\\ \\sec=\\frac1\\cos,\\ \\cot=\\frac1\\tan\\)", ""],
      ["Côté terminal", "le côté qui tourne d'un angle en position normale", ""],
    ],
  }),

  section("📌 Les valeurs remarquables", S`
  ${table(["θ", "0", "π/6", "π/4", "π/3", "π/2"], [
    ["sin θ", "0", "1/2", "√2/2", "√3/2", "1"],
    ["cos θ", "1", "√3/2", "√2/2", "1/2", "0"],
    ["tan θ", "0", "√3/3", "1", "√3", "non définie"],
  ])}
  ${plane(UC(60, "(1/2, √3/2)"), "En θ = π/3, le point du cercle trigonométrique est (1/2, √3/2).")}
  ${keyIdea(S`Pour trouver un rapport de n'importe quel angle : (1) trouve le quadrant; (2) trouve l'angle de référence; (3) écris la valeur remarquable; (4) ajoute le signe donné par la règle CAST. Dans le quadrant 1, tous les rapports sont positifs; dans le quadrant 2, le sinus; dans le quadrant 3, la tangente; dans le quadrant 4, le cosinus.`)}`),

  section("📌 Exploration", S`<p>Fais glisser l'angle autour du cercle. Observe \(\cos\theta\) (l'abscisse) et \(\sin\theta\) (l'ordonnée) changer de signe. Arrête-toi à \(150^\circ\), \(210^\circ\) et \(330^\circ\) : chacun a pour angle de référence \(30^\circ\).</p>`),

  widget("ibUnitCircle", { init: 225 }),

  section("📌 Points du côté terminal", S`
  <p>Si \((x,y)\) est sur le côté terminal et \(r=\sqrt{x^2+y^2}\), alors \(\sin\theta=\frac yr\), \(\cos\theta=\frac xr\), \(\tan\theta=\frac yx\). Les rapports réciproques inversent chaque fraction : \(\csc\theta=\frac ry\), \(\sec\theta=\frac rx\), \(\cot\theta=\frac xy\).</p>
  ${watchOut([
    "csc est la réciproque de sin, et non de cos. L'association des « co » est un piège.",
    "sec(π/2) et tan(π/2) ne sont pas définies, car cos(π/2) = 0.",
    "sin⁻¹x désigne la fonction inverse, et non la réciproque : csc x = 1/sin x.",
    "r est toujours positif. Seuls x et y portent un signe.",
    "À la calculatrice : cot x = 1/tan x. Il n'y a généralement pas de touche cot.",
  ])}`),

  examples([
    ["Un angle du quadrant 2", S`Trouve la valeur exacte de \(\cos\dfrac{5\pi}6\).`,
      [S`<b>Situer.</b> \(\frac\pi2\lt\frac{5\pi}6\lt\pi\), donc l'angle est dans le quadrant 2.`,
        S`<b>Angle de référence.</b> \(\pi-\frac{5\pi}6=\frac\pi6\).`,
        S`<b>Grandeur.</b> \(\cos\frac\pi6=\frac{\sqrt3}2\).`,
        S`<b>Signe.</b> Dans le quadrant 2, l'abscisse est négative, donc le cosinus est négatif.`,
        S`<b>Vérification.</b> Le point du cercle est \(\left(-\frac{\sqrt3}2,\frac12\right)\), et son abscisse est la réponse ✓`],
      S`\(-\dfrac{\sqrt3}2\)`,
      plane(UC(150, "(−√3/2, 1/2)"))],
    ["Un angle du quadrant 3", S`Trouve la valeur exacte de \(\tan\dfrac{5\pi}4\).`,
      [S`<b>Situer.</b> \(\frac{5\pi}4=\pi+\frac\pi4\), donc l'angle est dans le quadrant 3, avec un angle de référence de \(\frac\pi4\).`,
        S`<b>Grandeur.</b> \(\tan\frac\pi4=1\).`,
        S`<b>Signe.</b> Dans le quadrant 3, les deux coordonnées sont négatives, donc \(\tan=\frac yx\) est positive.`,
        S`<b>Vérification.</b> Le point est \(\left(-\frac{\sqrt2}2,-\frac{\sqrt2}2\right)\), et son rapport \(\frac yx=1\) ✓`],
      S`\(1\)`,
      plane(UC(225, "(−√2/2, −√2/2)"))],
    ["Un rapport réciproque", S`Trouve la valeur exacte de \(\csc\dfrac{11\pi}6\).`,
      [S`<b>Réécrire.</b> La cosécante est la réciproque du sinus, donc trouve d'abord \(\sin\frac{11\pi}6\).`,
        S`<b>Situer.</b> \(\frac{11\pi}6=2\pi-\frac\pi6\), donc l'angle est dans le quadrant 4, avec un angle de référence de \(\frac\pi6\).`,
        S`<b>Sinus.</b> \(\sin\frac\pi6=\frac12\), et le sinus est négatif dans le quadrant 4 : \(\sin\frac{11\pi}6=-\frac12\).`,
        S`<b>Réciproque.</b> \(\dfrac1{-1/2}=-2\).`,
        S`<b>Vérification.</b> \(\left(-\frac12\right)(-2)=1\) ✓`],
      S`\(-2\)`,
      plane(UC(330, "(√3/2, −1/2)"))],
    ["Une expression exacte", S`Évalue \(\sin^2\dfrac\pi3+\cos\pi\).`,
      [S`<b>Premier terme.</b> \(\sin\frac\pi3=\frac{\sqrt3}2\). La notation \(\sin^2\) désigne le carré du sinus : \(\left(\frac{\sqrt3}2\right)^2=\frac34\).`,
        S`<b>Deuxième terme.</b> L'angle \(\pi\) correspond au point \((-1,0)\), donc \(\cos\pi=-1\).`,
        S`<b>Additionner.</b> \(\frac34+(-1)=-\frac14\).`,
        S`<b>Vérification.</b> En décimales : \(0.866^2-1\approx-0.25\) ✓`],
      S`\(-\dfrac14\)`,
      plane(UC(60, "π/3"))],
    ["Un point du côté terminal", S`Le côté terminal de \(\theta\) passe par \((-3,4)\). Trouve les six rapports et \(\theta\) en radians.`,
      [S`<b>Rayon.</b> \(r=\sqrt{(-3)^2+4^2}=\sqrt{25}=5\).`,
        S`<b>Rapports.</b> ${tv(["\\(\\sin\\theta=\\frac yr\\)", "\\(\\cos\\theta=\\frac xr\\)", "\\(\\tan\\theta=\\frac yx\\)"], ["\\(\\frac45\\)", "\\(-\\frac35\\)", "\\(-\\frac43\\)"], ["\\(\\csc\\theta=\\frac ry\\)", "\\(\\sec\\theta=\\frac rx\\)", "\\(\\cot\\theta=\\frac xy\\)"], ["\\(\\frac54\\)", "\\(-\\frac53\\)", "\\(-\\frac34\\)"])}`,
        S`<b>Angle.</b> Le point est dans le quadrant 2. L'angle de référence est \(\tan^{-1}\frac43\approx0.93\), donc \(\theta\approx\pi-0.93\approx2.21\).`,
        S`<b>Vérification.</b> \(\sin^2\theta+\cos^2\theta=\frac{16}{25}+\frac9{25}=1\) ✓`],
      S`\(\sin\theta=\frac45\), \(\cos\theta=-\frac35\), \(\tan\theta=-\frac43\), \(\theta\approx2.21\)`,
      plane(ARM(-3, 4, "(−3, 4)"))],
  ]),

  practice([
    q("angle remarquable", S`Trouve \(\sin\dfrac{3\pi}4\) sous forme décimale (4 décimales).`, num(0.7071, 0.001),
      "Quadrant 2, angle de référence π/4.", [S`\(\frac{\sqrt2}2\approx0.7071\).`], S`\(0.7071\)`),
    q("angle remarquable", S`Trouve \(\cos\dfrac{4\pi}3\).`, num(-0.5),
      "Quadrant 3, angle de référence π/3.", [S`\(-\frac12\).`], S`\(-0.5\)`),
    q("angle remarquable", S`Trouve \(\tan\dfrac{7\pi}4\).`, num(-1),
      "Quadrant 4, angle de référence π/4.", [S`\(-1\).`], S`\(-1\)`),
    q("réciproque", S`Trouve \(\sec\dfrac{2\pi}3\).`, num(-2),
      "Inverse cos.", [S`\(\cos\frac{2\pi}3=-\frac12\).`], S`\(-2\)`),
    q("réciproque", S`Que vaut \(\cot\dfrac\pi6\)?`, choice([S`\(\sqrt3\)`, S`\(\dfrac{\sqrt3}3\)`, S`\(\dfrac12\)`, S`\(2\)`], 0),
      "Inverse tan.", [S`\(\tan\frac\pi6=\frac{\sqrt3}3\), donc \(\cot\frac\pi6=\sqrt3\).`], S`\(\sqrt3\)`),
  ]),

  ...hard([
    ["D'un rapport à tous les autres", S`\(\cos\theta=-\dfrac5{13}\) et \(\pi\lt\theta\lt\dfrac{3\pi}2\). Trouve la valeur exacte de \(\sin\theta\), de \(\tan\theta\) et de \(\csc\theta\).`,
      [S`Quadrant 3 : prends \(x=-5\), \(r=13\). Alors \(y^2=169-25=144\), et \(y=-12\) dans le quadrant 3.`, S`\(\sin\theta=-\frac{12}{13}\), \(\tan\theta=\frac{12}5\), \(\csc\theta=-\frac{13}{12}\).`],
      S`\(\sin\theta=-\frac{12}{13},\ \tan\theta=\frac{12}5,\ \csc\theta=-\frac{13}{12}\)`,
      plane(ARM(-5, -12, "(−5, −12)"))],
    ["Toutes les solutions sur un intervalle", S`Trouve toutes les valeurs de \(\theta\) dans \([0,2\pi]\) telles que \(\sec\theta=-\sqrt2\).`,
      [S`\(\cos\theta=-\frac1{\sqrt2}=-\frac{\sqrt2}2\) : angle de référence \(\frac\pi4\).`, S`Le cosinus est négatif dans les quadrants 2 et 3 : \(\pi-\frac\pi4\) et \(\pi+\frac\pi4\).`],
      S`\(\theta=\dfrac{3\pi}4,\ \dfrac{5\pi}4\)`,
      plane(UC(135, "3π/4", [{ x: -Math.SQRT1_2, y: -Math.SQRT1_2, label: "5π/4", color: "red" }]))],
  ], [
    q("difficile", S`Évalue \(2\sin\dfrac\pi4\cos\dfrac\pi4\).`, num(1),
      "Multiplie les valeurs exactes.", [S`\(2\cdot\frac{\sqrt2}2\cdot\frac{\sqrt2}2=1\).`], S`\(1\)`),
    q("difficile", S`Évalue \(\sin^2\dfrac{5\pi}6+\cos^2\dfrac{5\pi}6\).`, num(1),
      "Calcule chaque carré.", [S`\(\frac14+\frac34=1\).`], S`\(1\)`),
    q("difficile", S`Évalue \(\tan\dfrac\pi3\cot\dfrac\pi6\).`, num(3),
      "Les deux valent √3.", [S`\(\sqrt3\cdot\sqrt3=3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi les valeurs remarquables viennent-elles de triangles?", "La moitié d'un carré donne π/4 et la moitié d'un triangle équilatéral donne π/6 et π/3; dans les deux cas, les rapports des côtés sont exacts."],
      ["Pourquoi cos est-il l'abscisse?", "Sur le cercle trigonométrique, r = 1, donc cos θ = x/r = x, et sin θ = y."],
      ["Quand un rapport réciproque n'est-il pas défini?", "Quand le rapport de départ vaut 0 : csc 0 et cot 0, par exemple."],
      ["Pourquoi mémoriser un seul quadrant?", "Les angles de référence transportent les valeurs dans les autres quadrants; seul le signe change."],
      ["sin²θ est-il la même chose que sin θ²?", "Non. sin²θ signifie (sin θ)², tandis que sin θ² est le sinus de θ²."],
    ],
    summary: [
      "Point du cercle trigonométrique : (cos θ, sin θ).",
      "Quadrant, angle de référence, valeur remarquable, signe selon la règle CAST.",
      "csc = 1/sin, sec = 1/cos, cot = 1/tan.",
      "À partir de (x, y) : r = √(x² + y²); sin = y/r, cos = x/r, tan = y/x.",
    ],
    next: "En 4.3, tu utiliseras la symétrie du cercle pour écrire des expressions trigonométriques équivalentes.",
  }),
];
