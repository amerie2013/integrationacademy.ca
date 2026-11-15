// MCR3U-FR 5.3 — Rapports trigonométriques inverses et identités trigonométriques : csc, sec, cot; identités du
// quotient et de Pythagore; tous les rapports à partir d'un seul; démonstration d'identités.
// Miroir de ../mcr3u-ch5/l5_3.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.3 Rapports trigonométriques inverses et identités trigonométriques";
export const ID = lessonId(5, 3);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Rapports trigonométriques inverses et identités trigonométriques",
    overview: S`Chaque rapport de base a un rapport inverse : la cosécante, la sécante et la cotangente. De plus, certaines équations, comme \(\sin^2\theta+\cos^2\theta=1\), sont vraies pour tout angle — ce sont des <strong>identités</strong>. Dans cette leçon, tu vas utiliser les rapports inverses, trouver tous les rapports à partir d'un rapport donné et démontrer des identités simples en transformant un membre jusqu'à ce qu'il corresponde à l'autre.`,
    goals: [
      "définir csc, sec et cot à partir d'un triangle rectangle et comme rapports inverses;",
      "évaluer des rapports inverses, y compris des valeurs exactes;",
      "utiliser les identités du quotient et de Pythagore;",
      "trouver les six rapports à partir d'un rapport et d'un quadrant;",
      "démontrer des identités simples et réfuter une non-identité à l'aide d'un contre-exemple.",
    ],
    curriculum: "D1.4 (définir la sécante, la cosécante et la cotangente et les relier au cosinus, au sinus et à la tangente), D1.5 (démontrer des identités trigonométriques simples à l'aide des identités de Pythagore, du quotient et des rapports inverses)",
    prior: [
      [S`Que vaut \(\frac{1}{\frac{\sqrt3}2}\)?`, S`\(\frac2{\sqrt3}\).`],
      [S`Dans un triangle rectangle dont les cathètes mesurent 3 et 4, quelle est l'hypoténuse?`, S`\(5\).`],
      [S`Simplifie \(1-\sin^2\theta\) sachant que \(\sin^2\theta+\cos^2\theta=1\).`, S`\(\cos^2\theta\).`],
    ],
    words: [
      ["Cosécante", "\\(\\csc\\theta=\\frac1{\\sin\\theta}=\\frac{\\text{hyp}}{\\text{opp}}\\)", ""],
      ["Sécante", "\\(\\sec\\theta=\\frac1{\\cos\\theta}=\\frac{\\text{hyp}}{\\text{adj}}\\)", ""],
      ["Cotangente", "\\(\\cot\\theta=\\frac1{\\tan\\theta}=\\frac{\\text{adj}}{\\text{opp}}\\)", ""],
      ["Identité", "une équation vraie pour toute valeur où les deux membres sont définis", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\)"],
    ],
  }),

  section("📌 Les identités", S`
  ${table(["Type", "Identité"], [["Rapports inverses", "\\(\\csc\\theta=\\frac1{\\sin\\theta}\\), \\(\\sec\\theta=\\frac1{\\cos\\theta}\\), \\(\\cot\\theta=\\frac1{\\tan\\theta}\\)"], ["Quotient", "\\(\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}\\), \\(\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}\\)"], ["Pythagore", "\\(\\sin^2\\theta+\\cos^2\\theta=1\\)"]])}
  ${plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }], segs: [{ pts: [[0, 0], [0.8, 0.6], [0.8, 0], [0, 0]], color: "violet" }], points: [{ x: 0.8, y: 0.6, label: "(cos θ, sin θ)" }], step: { x: 0.5, y: 0.5 } }, "sur le cercle unité, x = cos θ, y = sin θ et x² + y² = 1")}
  ${keyIdea(S`Pour <strong>démontrer</strong> une identité, pars d'un membre (habituellement le plus compliqué) et utilise des identités connues et l'algèbre jusqu'à obtenir l'autre membre. Ne fais jamais passer de termes de l'autre côté du signe égal — cela suppose ce que tu cherches à démontrer.`)}`),

  section("📌 Explore", S`<p>Choisis une identité et fais varier θ. Les deux membres sont égaux pour tout angle où ils sont définis. Essaie aussi la non-identité : un seul angle où les membres diffèrent suffit pour montrer qu'elle est fausse.</p>`),

  widget("identityCheck", { start: "py" }),

  section("📌 Attention", watchOut([
    S`\(\sin^{-1}x\) est l'arc sinus (un angle), mais \(\csc x=\frac1{\sin x}\) est le rapport inverse.`,
    S`\(\sin^2\theta\) signifie \((\sin\theta)^2\), et non \(\sin(\theta^2)\).`,
    "Vérifier quelques angles ne démontre pas une identité, mais un seul contre-exemple suffit à la réfuter.",
    "Écris le MG et le MD séparément et travaille un membre à la fois.",
  ])),

  examples([
    ["Rapports inverses à partir d'un triangle", "Un triangle rectangle a des côtés de 9, 40 et 41, et ∠A est opposé au côté 9. Trouve csc A, sec A et cot A.",
      [S`<b>Nomme les côtés à partir de A.</b> Opposé \(=9\), adjacent \(=40\), hypoténuse \(=41\). Vérification : \(81+1600=1681=41^2\) ✓`,
        S`<b>Rapports de base.</b> \(\sin A=\frac9{41}\), \(\cos A=\frac{40}{41}\), \(\tan A=\frac9{40}\).`,
        S`<b>Rapports inverses.</b> Chaque rapport inverse renverse un rapport de base. ${tv(["de base", "\\(\\sin A\\)", "\\(\\cos A\\)", "\\(\\tan A\\)"], ["valeur", "\\(\\frac9{41}\\)", "\\(\\frac{40}{41}\\)", "\\(\\frac9{40}\\)"], ["inverse", "\\(\\csc A=\\frac{41}9\\)", "\\(\\sec A=\\frac{41}{40}\\)", "\\(\\cot A=\\frac{40}9\\)"])}`,
        S`<b>Vérifie.</b> Un rapport multiplié par son inverse donne 1 : \(\frac9{41}\cdot\frac{41}9=1\) ✓. Comme l'hypoténuse est le plus long côté, csc et sec doivent être supérieures à 1 ✓`],
      S`\(\frac{41}9\), \(\frac{41}{40}\), \(\frac{40}9\)`,
      plane({ view: { xmin: -2, xmax: 44, ymin: -2, ymax: 14 }, segs: [{ pts: [[0, 0], [40, 0], [40, 9], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A" }, { x: 20, y: 0, label: "40" }, { x: 40, y: 4.5, label: "9" }, { x: 20, y: 6, label: "41" }], step: { x: 5, y: 2 } })],
    ["Valeurs exactes des rapports inverses", S`Évalue \(\csc30^\circ\), \(\sec45^\circ\) et \(\cot60^\circ\).`,
      [S`<b>Règle.</b> \(\csc\theta=\frac1{\sin\theta}\), \(\sec\theta=\frac1{\cos\theta}\), \(\cot\theta=\frac1{\tan\theta}\). Une calculatrice n'a pas de touche csc; on trouve donc d'abord le rapport de base.`,
        S`<b>Premier.</b> \(\sin30^\circ=\frac12\), donc \(\csc30^\circ=\frac1{1/2}=2\).`,
        S`<b>Deuxième.</b> \(\cos45^\circ=\frac1{\sqrt2}\), donc \(\sec45^\circ=\frac1{1/\sqrt2}=\sqrt2\).`,
        S`<b>Troisième.</b> \(\tan60^\circ=\sqrt3\), donc \(\cot60^\circ=\frac1{\sqrt3}\).`,
        S`<b>Vérifie à l'aide du triangle.</b> Sur la figure, \(\csc30^\circ=\frac{\text{hyp}}{\text{opp}}=\frac21=2\) ✓ et \(\cot60^\circ=\frac{\text{adj}}{\text{opp}}=\frac1{\sqrt3}\) ✓`],
      S`\(2\), \(\sqrt2\), \(\frac1{\sqrt3}\)`,
      plane({ view: { xmin: -0.3, xmax: 2.3, ymin: -0.3, ymax: 1.4 }, segs: [{ pts: [[0, 0], [1.732, 0], [1.732, 1], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "30°" }, { x: 1.732, y: 1, label: "60°" }, { x: 0.87, y: 0, label: "√3" }, { x: 1.732, y: 0.5, label: "1" }, { x: 0.8, y: 0.55, label: "2" }], step: { x: 0.5, y: 0.5 } })],
    ["Tous les rapports à partir d'un seul", S`\(\sin\theta=\frac5{13}\) et θ est dans le quadrant 2. Trouve les cinq autres rapports.`,
      [S`<b>Lis le rapport donné.</b> \(\sin\theta=\frac yr\), donc \(y=5\) et \(r=13\).`,
        S`<b>Trouve \(x\).</b> \(x^2+y^2=r^2\) donne \(x^2=169-25=144\), donc \(x=\pm12\). Dans le quadrant 2, \(x<0\), donc \(x=-12\).`,
        S`<b>Écris tous les rapports.</b> ${tv(["\\(\\cos\\theta=\\frac xr\\)", "\\(\\tan\\theta=\\frac yx\\)", "\\(\\csc\\theta=\\frac ry\\)", "\\(\\sec\\theta=\\frac rx\\)", "\\(\\cot\\theta=\\frac xy\\)"], ["\\(-\\frac{12}{13}\\)", "\\(-\\frac5{12}\\)", "\\(\\frac{13}5\\)", "\\(-\\frac{13}{12}\\)", "\\(-\\frac{12}5\\)"])}`,
        S`<b>Vérifie les signes.</b> Dans le quadrant 2, seuls le sinus et la cosécante sont positifs ✓`,
        S`<b>Vérifie l'identité.</b> \(\sin^2\theta+\cos^2\theta=\frac{25}{169}+\frac{144}{169}=1\) ✓`],
      S`\(\cos\theta=-\frac{12}{13}\), \(\tan\theta=-\frac5{12}\), \(\csc\theta=\frac{13}5\), \(\sec\theta=-\frac{13}{12}\), \(\cot\theta=-\frac{12}5\)`,
      plane({ view: { xmin: -14, xmax: 4, ymin: -2, ymax: 8 }, segs: [{ pts: [[0, 0], [-12, 5]], color: "violet" }, { pts: [[-12, 5], [-12, 0]], color: "amber" }], points: [{ x: -12, y: 5, label: "(−12, 5)", color: "amber" }, { x: -6, y: 2.9, label: "r = 13" }], step: { x: 2, y: 1 } })],
    ["Une première démonstration", S`Démontre que \(\tan\theta\cos\theta=\sin\theta\).`,
      [S`<b>Comment démontrer une identité.</b> Travaille chaque membre séparément jusqu'à ce qu'ils soient égaux. Ne fais pas passer de termes de l'autre côté du signe égal, car cela suppose ce que l'on cherche à démontrer.`,
        S`<b>Commence par le membre le plus compliqué.</b> MG \(=\tan\theta\cos\theta\).`,
        S`<b>Utilise l'identité du quotient.</b> \(\tan\theta=\frac{\sin\theta}{\cos\theta}\), donc MG \(=\frac{\sin\theta}{\cos\theta}\cdot\cos\theta\).`,
        S`<b>Simplifie,</b> pour \(\cos\theta\ne0\). MG \(=\sin\theta=\) MD.`,
        S`<b>Teste une valeur.</b> À \(\theta=30^\circ\) : \(\frac1{\sqrt3}\cdot\frac{\sqrt3}2=\frac12=\sin30^\circ\) ✓. Le graphique montre que le membre de gauche est la courbe du sinus, avec des trous là où \(\tan\theta\) n'est pas définie.`],
      "MG = MD ∎",
      plane({ view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.sin((x * Math.PI) / 180), color: "violet" }], points: [{ x: 30, y: 0.5, label: "(30°, 1/2)", color: "amber" }, { x: 90, y: 1, label: "trou à 90°", color: "red" }, { x: 270, y: -1, label: "trou à 270°", color: "red" }], step: { x: 30, y: 0.5 }, xlabel: "θ" })],
    ["Utiliser l'identité de Pythagore", S`Démontre que \(\dfrac{1-\sin^2\theta}{\cos\theta}=\cos\theta\).`,
      [S`<b>Repère la régularité.</b> Le numérateur \(1-\sin^2\theta\) vient de l'identité de Pythagore \(\sin^2\theta+\cos^2\theta=1\). Réarrangée, elle donne \(1-\sin^2\theta=\cos^2\theta\).`,
        S`<b>Remplace.</b> MG \(=\dfrac{\cos^2\theta}{\cos\theta}\).`,
        S`<b>Simplifie,</b> pour \(\cos\theta\ne0\). MG \(=\cos\theta=\) MD.`,
        S`<b>Teste une valeur.</b> À \(\theta=60^\circ\) : \(\frac{1-\frac34}{\frac12}=\frac{1/4}{1/2}=\frac12=\cos60^\circ\) ✓`],
      "MG = MD ∎",
      plane({ view: { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => Math.cos((x * Math.PI) / 180), color: "violet" }], points: [{ x: 60, y: 0.5, label: "(60°, 1/2)", color: "amber" }, { x: 90, y: 0, label: "trou à 90°", color: "red" }, { x: 270, y: 0, label: "trou à 270°", color: "red" }], step: { x: 30, y: 0.5 }, xlabel: "θ" })],
  ]),

  practice([
    q("exacte", S`Évalue \(\csc30^\circ\).`, num(2),
      "Inverse de sin 30°.", [S`\(\frac1{1/2}\).`], S`\(2\)`),
    q("exacte", S`Évalue \(\sec60^\circ\).`, num(2),
      "Inverse de cos 60°.", [S`\(\frac1{1/2}\).`], S`\(2\)`),
    q("Pythagore", S`θ est aigu et \(\sin\theta=0.6\). Trouve \(\cos\theta\).`, num(0.8),
      "sin² + cos² = 1.", [S`\(\cos^2\theta=1-0.36=0.64\).`], S`\(0.8\)`),
    q("quotient", S`Laquelle est égale à \(\cot\theta\)?`, choice([S`\(\frac{\cos\theta}{\sin\theta}\)`, S`\(\frac{\sin\theta}{\cos\theta}\)`, S`\(\frac1{\sin\theta}\)`, S`\(\frac1{\cos\theta}\)`], 0),
      "1 / tan θ.", [S`\(\frac{1}{\sin\theta/\cos\theta}\).`], S`\(\frac{\cos\theta}{\sin\theta}\)`),
    q("simplifier", S`Simplifie \(\dfrac{\sin\theta}{\tan\theta}\).`, choice([S`\(\cos\theta\)`, S`\(\sin^2\theta\)`, S`\(\sec\theta\)`, S`\(1\)`], 0),
      "Remplace tan θ par sin θ / cos θ.", [S`\(\sin\theta\cdot\frac{\cos\theta}{\sin\theta}\).`], S`\(\cos\theta\)`),
  ]),

  ...hard([
    ["Démontrer avec deux identités", S`Démontre que \((1+\tan^2\theta)\cos^2\theta=1\).`,
      [S`MG \(=\cos^2\theta+\tan^2\theta\cos^2\theta=\cos^2\theta+\frac{\sin^2\theta}{\cos^2\theta}\cos^2\theta\).`, S`\(=\cos^2\theta+\sin^2\theta=1=\) MD.`],
      "MG = MD ∎"],
    ["Développer d'abord", S`Démontre que \((\sin\theta+\cos\theta)^2=1+2\sin\theta\cos\theta\), puis vérifie-le à \(\theta=30^\circ\).`,
      [S`MG \(=\sin^2\theta+2\sin\theta\cos\theta+\cos^2\theta=1+2\sin\theta\cos\theta=\) MD.`, S`Vérification : \(\left(\tfrac12+\tfrac{\sqrt3}2\right)^2=\tfrac{4+2\sqrt3}4=1+\tfrac{\sqrt3}2\); MD \(=1+2\cdot\tfrac12\cdot\tfrac{\sqrt3}2=1+\tfrac{\sqrt3}2\) ✓.`],
      "MG = MD ∎"],
  ], [
    q("difficile", S`θ est aigu et \(\tan\theta=2\). Trouve \(\sec^2\theta\).`, num(5),
      "Utilise 1 + tan² θ = sec² θ.", [S`\(1+4\).`], S`\(5\)`),
    q("difficile", S`Simplifie \(\dfrac{\sec\theta-\cos\theta}{\tan\theta}\).`, choice([S`\(\sin\theta\)`, S`\(\cos\theta\)`, S`\(\tan\theta\)`, S`\(1\)`], 0),
      "Écris tout en fonction de sin et de cos.", [S`\(\frac{\frac1{\cos\theta}-\cos\theta}{\frac{\sin\theta}{\cos\theta}}=\frac{1-\cos^2\theta}{\sin\theta}=\frac{\sin^2\theta}{\sin\theta}\).`], S`\(\sin\theta\)`),
    q("difficile", S`\(\cos\theta=-0.8\) et θ est dans le quadrant 3. Trouve \(\csc\theta\) (4 décimales).`, num(-1 / 0.6, 0.0001),
      "sin θ = −0.6 dans le quadrant 3.", [S`\(\csc\theta=\frac1{-0.6}\).`], S`\(\approx-1.6667\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi apprendre les rapports inverses?", "Ils simplifient de nombreuses formules et reviennent dans des cours ultérieurs (calcul différentiel, physique)."],
      ["D'où vient sin² θ + cos² θ = 1?", "Sur le cercle unité, x = cos θ et y = sin θ vérifient x² + y² = 1 (Pythagore)."],
      ["Comment commencer une démonstration?", "Choisis le membre le plus compliqué et réécris tout en fonction de sin et de cos."],
      ["Vérifier à la calculatrice, est-ce une démonstration?", "Non — c'est un indice. Une démonstration fonctionne pour tout angle."],
      ["Comment montrer qu'une équation N'EST PAS une identité?", "Trouve un angle pour lequel les deux membres diffèrent."],
    ],
    summary: [
      "csc = 1/sin, sec = 1/cos, cot = 1/tan.",
      "tan = sin/cos; sin² + cos² = 1.",
      "Un rapport + un quadrant → les six rapports.",
      "On démontre en transformant un membre; on réfute avec un seul contre-exemple.",
    ],
    next: "La leçon 5.4 résout des triangles quelconques à l'aide de la loi des sinus.",
  }),
];
