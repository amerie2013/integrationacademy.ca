// MCR3U-FR 5.2 — Angles de 0° à 360° : position standard, rapports à partir d'un point du côté terminal, angles de
// référence, règle CAST, valeurs exactes au-delà de 90° et les deux angles qui ont un rapport donné.
// Miroir de ../mcr3u-ch5/l5_2.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, rootsT, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.2 Angles de 0° à 360°";
export const ID = lessonId(5, 2);
const S = String.raw;
const arm = (x, y, label) => plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [x, y]], color: "violet" }, { pts: [[x, y], [x, 0]], color: "amber" }], points: [{ x, y, label }], step: { x: 1, y: 1 } });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Angles de 0° à 360°",
    overview: S`Un angle en position standard commence sur la partie positive de l'axe des x et tourne dans le sens antihoraire. Si \((x,y)\) est un point quelconque de son côté terminal et \(r=\sqrt{x^2+y^2}\), alors \(\sin\theta=\frac yr\), \(\cos\theta=\frac xr\) et \(\tan\theta=\frac yx\) — pour tout angle, pas seulement les angles aigus. Dans cette leçon, tu vas utiliser l'angle de référence et la règle CAST pour trouver des valeurs exactes et approximatives de 0° à 360°, et trouver les deux angles qui ont le même rapport.`,
    goals: [
      "tracer un angle en position standard et trouver r pour un point de son côté terminal;",
      "trouver les trois rapports à partir d'un point du côté terminal;",
      "trouver l'angle de référence et utiliser la règle CAST pour déterminer les signes;",
      "évaluer les valeurs exactes d'angles comme 120°, 225° et 330°;",
      "trouver les deux angles entre 0° et 360° qui ont un rapport donné.",
    ],
    curriculum: "D1.2 (déterminer les valeurs du sinus, du cosinus et de la tangente des angles de 0° à 360°), D1.3 (déterminer la mesure des deux angles de 0° à 360° pour lesquels un rapport donné est le même)",
    prior: [
      [S`Que vaut \(\sin30^\circ\)?`, S`\(\frac12\).`],
      [S`Pour \((-3,4)\), que vaut \(\sqrt{x^2+y^2}\)?`, S`\(5\).`],
      [S`Dans quel quadrant a-t-on x < 0 et y > 0?`, "Le quadrant 2."],
    ],
    words: [
      ["Position standard", "sommet à l'origine, côté initial sur la partie positive de l'axe des x", ""],
      ["Côté terminal", "l'endroit où l'angle s'arrête", ""],
      ["Angle de référence", "l'angle aigu entre le côté terminal et l'axe des x", "pour 150° : 30°"],
      ["Règle CAST", "rapports positifs : Q1 tous (All), Q2 sin, Q3 tan, Q4 cos", ""],
    ],
  }),

  section("📌 Angles de référence et règle CAST", S`
  ${table(["Quadrant", "θ en fonction de l'angle de référence β", "Positif"], [["1", "\\(\\theta=\\beta\\)", "tous"], ["2", "\\(\\theta=180^\\circ-\\beta\\)", "sin"], ["3", "\\(\\theta=180^\\circ+\\beta\\)", "tan"], ["4", "\\(\\theta=360^\\circ-\\beta\\)", "cos"]])}
  ${keyIdea(S`Valeur d'un rapport pour un angle quelconque = (signe donné par CAST) × (le même rapport de l'angle de référence). Exemple : \(\cos150^\circ=-\cos30^\circ=-\frac{\sqrt3}2\).`)}`),

  section("📌 Explore", S`<p>Fais tourner le côté terminal. Observe les signes de x et de y, l'angle de référence et le deuxième angle qui a le même sinus ou le même cosinus.</p>`),

  widget("terminalArm", { init: 150 }),

  section("📌 Attention", watchOut([
    "r est toujours positif; ce sont x et y qui portent les signes.",
    "L'angle de référence se mesure jusqu'à l'axe des x, jamais jusqu'à l'axe des y.",
    S`La touche \(\sin^{-1}\) de la calculatrice ne donne qu'un seul angle — utilise la règle CAST pour trouver l'autre.`,
    S`\(\tan90^\circ\) et \(\tan270^\circ\) ne sont pas définies (x = 0).`,
  ])),

  examples([
    ["À partir d'un point", S`Le point \((-3,4)\) est sur le côté terminal de θ. Trouve les trois rapports et θ.`,
      [S`<b>Définitions.</b> Pour un point \((x,y)\) du côté terminal, avec \(r=\sqrt{x^2+y^2}\) : \(\sin\theta=\frac yr\), \(\cos\theta=\frac xr\), \(\tan\theta=\frac yx\).`,
        S`<b>Trouve \(r\).</b> \(r=\sqrt{(-3)^2+4^2}=\sqrt{25}=5\). La valeur de \(r\) est toujours positive.`,
        S`<b>Écris les rapports.</b> \(\sin\theta=\frac45\), \(\cos\theta=-\frac35\), \(\tan\theta=-\frac43\).`,
        S`<b>Angle de référence.</b> Utilise seulement les grandeurs : \(\tan^{-1}\frac43\approx53.1^\circ\). C'est l'angle aigu entre le côté terminal et l'axe des x.`,
        S`<b>Situe-le.</b> Le point a \(x<0\) et \(y>0\), il est donc dans le quadrant 2 : \(\theta\approx180^\circ-53.1^\circ=126.9^\circ\).`,
        S`<b>Vérifie.</b> \(\cos126.9^\circ\approx-0.6=-\frac35\) ✓`],
      S`\(\sin\theta=\frac45\), \(\cos\theta=-\frac35\), \(\tan\theta=-\frac43\); \(\theta\approx126.9^\circ\)`,
      arm(-3, 4, "(−3, 4)")],
    ["Une valeur exacte dans le quadrant 2", S`Trouve la valeur exacte de \(\cos150^\circ\).`,
      [S`<b>Trouve le quadrant.</b> \(90^\circ<150^\circ<180^\circ\), c'est donc le quadrant 2.`,
        S`<b>Angle de référence.</b> Dans le quadrant 2, il vaut \(180^\circ-150^\circ=30^\circ\).`,
        S`<b>Signe.</b> Dans le quadrant 2, \(x<0\), et \(\cos\theta=\frac xr\). Le cosinus est donc négatif.`,
        S`<b>Valeur.</b> \(\cos150^\circ=-\cos30^\circ=-\frac{\sqrt3}2\).`,
        S`<b>Vérifie.</b> Une calculatrice donne \(\cos150^\circ\approx-0.866\), et \(-\frac{\sqrt3}2\approx-0.866\) ✓`],
      S`\(-\frac{\sqrt3}2\)`,
      arm(-4.33, 2.5, "150°")],
    ["Des valeurs exactes dans les quadrants 3 et 4", S`Trouve les valeurs exactes de \(\tan225^\circ\) et de \(\sin300^\circ\).`,
      [S`<b>Méthode.</b> Pour chaque angle, trouve le quadrant, l'angle de référence et le signe.`,
        S`<b>Résumé.</b> ${tv(["angle", "quadrant", "angle de référence", "signe", "valeur"], ["\\(\\tan225^\\circ\\)", "3", "\\(225^\\circ-180^\\circ=45^\\circ\\)", "positif", "\\(\\tan45^\\circ=1\\)"], ["\\(\\sin300^\\circ\\)", "4", "\\(360^\\circ-300^\\circ=60^\\circ\\)", "négatif", "\\(-\\sin60^\\circ=-\\frac{\\sqrt3}2\\)"])}`,
        S`<b>Pourquoi ces signes?</b> Dans le quadrant 3, \(x\) et \(y\) sont tous deux négatifs, donc \(\frac yx>0\). Dans le quadrant 4, \(y<0\), donc \(\frac yr<0\).`,
        S`<b>Vérifie.</b> \(\tan225^\circ=1\) à la calculatrice ✓, et \(\sin300^\circ\approx-0.866\) ✓`],
      S`\(1\) et \(-\frac{\sqrt3}2\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [-3.54, -3.54]], color: "violet" }, { pts: [[0, 0], [2.5, -4.33]], color: "blue" }], points: [{ x: -3.54, y: -3.54, label: "225°", color: "violet" }, { x: 2.5, y: -4.33, label: "300°" }], step: { x: 1, y: 1 } })],
    ["Deux angles ayant un sinus donné", S`Résous \(\sin\theta=-\tfrac12\) pour \(0^\circ\le\theta\le360^\circ\).`,
      [S`<b>Angle de référence.</b> Ignore le signe : \(\sin\alpha=\frac12\) donne \(\alpha=30^\circ\).`,
        S`<b>Quels quadrants?</b> Le sinus est \(\frac yr\), qui est négatif quand \(y<0\). Ce sont les quadrants 3 et 4.`,
        S`<b>Construis les angles.</b> Quadrant 3 : \(180^\circ+30^\circ=210^\circ\). Quadrant 4 : \(360^\circ-30^\circ=330^\circ\).`,
        S`<b>Vérifie.</b> \(\sin210^\circ=-\frac12\) ✓ et \(\sin330^\circ=-\frac12\) ✓. Sur la figure, les deux côtés terminaux se terminent à la même hauteur, sur la droite pointillée \(y=-\frac12r\).`],
      S`\(\theta=210^\circ\) ou \(330^\circ\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [-4.33, -2.5]], color: "violet" }, { pts: [[0, 0], [4.33, -2.5]], color: "violet" }], lines: [{ m: 0, b: -2.5, color: "amber", dash: true }], points: [{ x: -4.33, y: -2.5, label: "210°" }, { x: 4.33, y: -2.5, label: "330°" }], step: { x: 1, y: 1 } })],
    ["Une valeur non remarquable", S`Résous \(\cos\theta=0.42\) pour \(0^\circ\le\theta\le360^\circ\).`,
      [S`<b>Première solution.</b> La calculatrice donne une seule valeur : \(\cos^{-1}0.42\approx65.2^\circ\). Elle est dans le quadrant 1, où le cosinus est positif.`,
        S`<b>Deuxième quadrant.</b> Le cosinus est \(\frac xr\), qui est aussi positif quand \(x>0\) dans le quadrant 4. La calculatrice ne montre pas cette valeur.`,
        S`<b>Deuxième solution.</b> \(360^\circ-65.2^\circ=294.8^\circ\).`,
        S`<b>Vérifie.</b> \(\cos294.8^\circ\approx0.42\) ✓. Sur la figure, les deux côtés terminaux se terminent sur la même droite verticale, donc ils ont le même \(x\).`],
      S`\(\theta\approx65.2^\circ\) ou \(294.8^\circ\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[0, 0], [2.1, 4.54]], color: "violet" }, { pts: [[0, 0], [2.1, -4.54]], color: "violet" }], vlines: [{ x: 2.1, color: "amber", dash: true }], points: [{ x: 2.1, y: 4.54, label: "65.2°" }, { x: 2.1, y: -4.54, label: "294.8°" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("à partir d'un point", S`Le point \((5,-12)\) est sur le côté terminal de θ. Trouve \(\cos\theta\) (4 décimales).`, num(5 / 13, 0.0001),
      "r = 13.", [S`\(\frac5{13}\).`], S`\(\approx0.3846\)`),
    q("angle de référence", "Quel est l'angle de référence de 245°?", num(65),
      "Quadrant 3 : θ − 180°.", [S`\(245-180\).`], S`\(65^\circ\)`),
    q("exacte", S`Que vaut \(\sin135^\circ\)?`, choice([S`\(\frac1{\sqrt2}\)`, S`\(-\frac1{\sqrt2}\)`, S`\(\frac{\sqrt3}2\)`, S`\(-\frac12\)`], 0),
      "Angle de référence 45°, quadrant 2 : sinus positif.", [S`\(\sin45^\circ\).`], S`\(\frac1{\sqrt2}\)`),
    q("deux angles", S`Résous \(\tan\theta=-1\) pour \(0^\circ\le\theta\le360^\circ\).`, roots(135, 315),
      "Angle de référence 45°; tan négative dans Q2 et Q4.", [S`\(180-45\), \(360-45\).`], S`\(135^\circ,\ 315^\circ\)`),
    q("CAST", S`Si \(\sin\theta<0\) et \(\cos\theta>0\), où se trouve le côté terminal?`, choice(["Quadrant 4", "Quadrant 2", "Quadrant 3", "Quadrant 1"], 0),
      "Seul le cosinus est positif.", ["CAST : le quadrant 4 est le « C »."], "Quadrant 4"),
  ]),

  ...hard([
    ["Un rapport et un quadrant", S`\(\sin\theta=\frac35\) et \(90^\circ<\theta<180^\circ\). Trouve les valeurs exactes de \(\cos\theta\) et de \(\tan\theta\).`,
      [S`Prends \(y=3\), \(r=5\); alors \(x=\pm4\), et le quadrant 2 signifie \(x=-4\).`, S`\(\cos\theta=-\frac45\), \(\tan\theta=-\frac34\).`],
      S`\(\cos\theta=-\frac45\), \(\tan\theta=-\frac34\)`,
      arm(-4, 3, "(−4, 3)")],
    ["Une équation du second degré en cos θ", S`Résous \(2\cos^2\theta-1=0\) pour \(0^\circ\le\theta\le360^\circ\).`,
      [S`\(\cos^2\theta=\frac12\Rightarrow\cos\theta=\pm\frac1{\sqrt2}\).`, S`Angle de référence de 45° dans chaque quadrant.`],
      S`\(\theta=45^\circ,135^\circ,225^\circ,315^\circ\)`],
  ], [
    q("difficile", S`\(\tan\theta=-2.4\) et \(\cos\theta>0\). Trouve \(\sin\theta\) (4 décimales).`, num(-12 / 13, 0.0001),
      "Quadrant 4 : point (5, −12).", [S`\(r=13\); \(\sin\theta=-\frac{12}{13}\).`], S`\(\approx-0.9231\)`),
    q("difficile", S`Quelle est la somme des deux solutions de \(\sin\theta=0.3\) entre 0° et 360°?`, num(180),
      "Ce sont β et 180° − β.", [S`\(\beta+(180-\beta)\).`], S`\(180^\circ\)`),
    q("difficile", S`Résous \(2\sin\theta+\sqrt3=0\) pour \(0^\circ\le\theta\le360^\circ\).`, roots(240, 300),
      "sin θ = −√3/2.", [S`Angle de référence 60°, quadrants 3 et 4.`], S`\(240^\circ,\ 300^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi définir les rapports avec x, y et r?", "Cela fonctionne pour tout angle; pour les angles aigus, on retrouve SOH CAH TOA."],
      ["Comment retenir la règle CAST?", "Commence au quadrant 4 et tourne dans le sens antihoraire : Cos, All (tous), Sin, Tan."],
      ["Pourquoi y a-t-il habituellement deux angles?", "Chaque valeur non nulle d'un rapport est positive (ou négative) dans exactement deux quadrants."],
      ["Quand n'y a-t-il qu'un seul angle?", "Sur les axes : sin θ = 1 seulement à 90°, cos θ = −1 seulement à 180°."],
      ["Comment trouver des valeurs exactes au-delà de 90°?", "Trouve l'angle de référence, utilise sa valeur tirée d'un triangle remarquable et ajoute le signe donné par CAST."],
    ],
    summary: [
      "sin = y/r, cos = x/r, tan = y/x avec r = √(x² + y²).",
      "L'angle de référence se mesure jusqu'à l'axe des x; CAST donne le signe.",
      "θ = β, 180° − β, 180° + β, 360° − β.",
      "Habituellement, deux angles ont le même rapport.",
    ],
    next: "La leçon 5.3 ajoute les rapports inverses et démontre des identités.",
  }),
];
