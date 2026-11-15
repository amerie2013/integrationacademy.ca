// MCR3U-FR 6.6 — Équations de fonctions sinusoïdales : à partir d'un graphique, de propriétés, d'un point maximum et
// d'un point minimum; formes sinus et cosinus d'un même graphique (notation française y = a sin(k(x − c)) + d)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "6.6 Équations de fonctions sinusoïdales";
export const ID = lessonId(6, 6);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const G = (fn, view, pts, step, more = {}) => plane({ view, curves: [{ f: fn, color: "violet" }], lines: more.lines ?? [], points: pts, step }, more.cap ?? "");

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Équations de fonctions sinusoïdales",
    overview: S`À partir d'un graphique sinusoïdal ou de sa description, tu peux écrire son équation en trouvant quatre nombres. Le maximum et le minimum donnent \(a\) et \(d\); la période donne \(k\); un point de départ pratique donne \(c\). Comme le sinus et le cosinus sont des translations l'un de l'autre, tout graphique sinusoïdal a plusieurs équations correctes — choisis celle qui est la plus facile à lire.`,
    goals: [
      "trouver a et d à partir du maximum et du minimum;",
      "trouver k à partir de la période : k = 360°/période;",
      "choisir un point de départ pour c (passage par l'axe pour le sinus, maximum pour le cosinus);",
      "écrire une équation à partir d'une liste de propriétés;",
      "écrire à la fois une équation avec sinus et une équation avec cosinus pour le même graphique.",
    ],
    curriculum: "D2.8 (représenter une fonction sinusoïdale par une équation, à partir de son graphique ou de ses propriétés)",
    prior: [
      ["Max 7, min −1 : amplitude et axe?", "4 et y = 3."],
      ["Période de 120° : que vaut k?", "3."],
      [S`Où \(y=\cos x\) a-t-elle son premier maximum?`, "x = 0°."],
    ],
    words: [
      ["a", "\\(\\pm\\frac{\\max-\\min}2\\)", ""],
      ["d", "\\(\\frac{\\max+\\min}2\\)", ""],
      ["k", "\\(\\frac{360^\\circ}{\\text{période}}\\)", ""],
      ["c", "abscisse d'un point de départ : passage par l'axe en montant (sinus) ou maximum (cosinus)", ""],
    ],
  }),

  section("📌 Quatre nombres à partir d'un graphique", S`
  ${table(["Étape", "Lire", "Donne"], [["1", "le max et le min", "\\(|a|=\\frac{\\max-\\min}2\\), \\(d=\\frac{\\max+\\min}2\\)"], ["2", "une période", "\\(k=\\frac{360^\\circ}{\\text{période}}\\)"], ["3a", "un maximum (cosinus)", "c = son abscisse, a > 0"], ["3b", "un passage par l'axe en montant (sinus)", "c = son abscisse, a > 0"]])}
  ${G((x) => 3 * Math.sin(r(2 * x)) + 2, { xmin: -45, xmax: 405, ymin: -2, ymax: 6 }, [{ x: 0, y: 2, label: "(0°, 2)" }, { x: 45, y: 5, label: "(45°, 5)" }, { x: 135, y: -1, label: "(135°, −1)" }], { x: 45, y: 1 }, { lines: [{ m: 0, b: 2, color: "green", dash: true }], cap: "max 5, min −1, période 180°" })}
  ${keyIdea(S`Pour le graphique ci-dessus : \(a=3\), \(d=2\), \(k=2\). Un sinus qui commence en \((0^\circ,2)\) : \(y=3\sin2x+2\). Un cosinus qui commence au maximum \((45^\circ,5)\) : \(y=3\cos(2(x-45^\circ))+2\). Les deux sont correctes.`)}`),

  section("📌 Explorer", S`<p>Trouve une équation dont le graphique se superpose exactement à la courbe pointillée. Passe ensuite du sinus au cosinus et trouve une deuxième équation.</p>`),

  widget("fitSinusoid", { target: { fn: "sin", a: 3, k: 2, d: 45, c: 1 } }),

  section("📌 Attention", watchOut([
    "k provient de la période, et non de la distance entre un max et un min (c'est une demi-période).",
    "Avec le cosinus, commence à un maximum; avec le sinus, commence là où le graphique coupe l'axe en MONTANT.",
    "Si tu fais commencer un cosinus à un minimum, utilise un a négatif.",
    "Vérifie ton équation avec un autre point du graphique.",
  ])),

  examples([
    ["À partir d'un graphique (sinus)", "Une sinusoïde a un maximum de 5, un minimum de −1 et une période de 180°, et elle coupe son axe en montant en x = 0°. Écris une équation avec sinus.",
      [S`<b>Amplitude.</b> \(a=\frac{5-(-1)}2=3\).`,
        S`<b>Axe.</b> \(d=\frac{5+(-1)}2=2\).`,
        S`<b>\(k\).</b> La période est de \(180^\circ\), donc \(k=\frac{360^\circ}{180^\circ}=2\).`,
        S`<b>Déphasage.</b> Le sinus commence sur son axe, en montant. Ce graphique le fait en \(x=0^\circ\), donc \(c=0\).`,
        S`<b>Vérification.</b> En \(x=45^\circ\) : \(3\sin90^\circ+2=5\), le maximum ✓. En \(x=135^\circ\) : \(3\sin270^\circ+2=-1\) ✓`],
      S`\(y=3\sin2x+2\)`,
      G((x) => 3 * Math.sin(r(2 * x)) + 2, { xmin: -45, xmax: 315, ymin: -2, ymax: 6 }, [{ x: 0, y: 2, label: "(0°, 2)", color: "amber" }, { x: 45, y: 5, label: "(45°, 5)" }, { x: 135, y: -1, label: "(135°, −1)" }], { x: 45, y: 1 }, { lines: [{ m: 0, b: 2, color: "green", dash: true }] })],
    ["À partir d'un graphique (cosinus)", "Un graphique a un maximum de 4 en x = 60°, un minimum de −2 et une période de 240°. Écris une équation avec cosinus.",
      [S`<b>Amplitude et axe.</b> \(a=\frac{4-(-2)}2=3\) et \(d=\frac{4+(-2)}2=1\).`,
        S`<b>\(k\).</b> \(k=\frac{360}{240}=1.5\).`,
        S`<b>Déphasage.</b> Le cosinus commence à son maximum. Le premier maximum est à \(60^\circ\), donc \(c=60^\circ\).`,
        S`<b>Équation.</b> \(y=3\cos(1.5(x-60^\circ))+1\).`,
        S`<b>Vérification.</b> Le minimum arrive une demi-période plus tard, à \(180^\circ\) : \(3\cos180^\circ+1=-2\) ✓`],
      S`\(y=3\cos(1.5(x-60^\circ))+1\)`,
      G((x) => 3 * Math.cos(r(1.5 * (x - 60))) + 1, { xmin: -60, xmax: 420, ymin: -3, ymax: 5 }, [{ x: 60, y: 4, label: "(60°, 4)" }, { x: 180, y: -2, label: "(180°, −2)" }, { x: 300, y: 4, label: "(300°, 4)" }], { x: 60, y: 1 }, { lines: [{ m: 0, b: 1, color: "green", dash: true }] })],
    ["À partir de propriétés", "Écris l'équation d'une fonction sinus d'amplitude 2, de période 720°, avec un déphasage de 90° vers la droite et l'axe y = −3.",
      [S`<b>Traduire chaque propriété.</b> L'amplitude donne \(a=2\). La période donne \(k=\frac{360}{720}=0.5\). Le déphasage donne \(c=90^\circ\). L'axe donne \(d=-3\).`,
        S`<b>Substituer</b> dans \(y=a\sin(k(x-c))+d\) : \(y=2\sin(0.5(x-90^\circ))-3\).`,
        S`<b>Vérifier le début.</b> En \(x=90^\circ\), l'intérieur vaut 0, donc \(y=-3\), sur l'axe ✓`,
        S`<b>Vérifier un maximum.</b> Un quart de période plus tard, en \(x=270^\circ\) : \(2\sin90^\circ-3=-1\), soit \(-3+2\) ✓`],
      S`\(y=2\sin(0.5(x-90^\circ))-3\)`,
      G((x) => 2 * Math.sin(r(0.5 * (x - 90))) - 3, { xmin: 0, xmax: 900, ymin: -6, ymax: 0 }, [{ x: 90, y: -3, label: "(90°, −3)", color: "amber" }, { x: 270, y: -1, label: "(270°, −1)" }, { x: 630, y: -5, label: "(630°, −5)" }], { x: 90, y: 1 }, { lines: [{ m: 0, b: -3, color: "green", dash: true }] })],
    ["Un même graphique, deux équations", S`Montre que \(y=3\sin2x+2\) et \(y=3\cos(2(x-45^\circ))+2\) donnent les mêmes valeurs en \(x=0^\circ\) et en \(x=45^\circ\).`,
      [S`<b>En \(0^\circ\).</b> Première : \(3\sin0^\circ+2=2\). Deuxième : \(3\cos(-90^\circ)+2=0+2=2\).`,
        S`<b>En \(45^\circ\).</b> Première : \(3\sin90^\circ+2=5\). Deuxième : \(3\cos0^\circ+2=5\).`,
        S`<b>Pourquoi.</b> Une courbe cosinus est une courbe sinus translatée. Le cosinus commence à un maximum, et le premier maximum de cette sinusoïde est à \(45^\circ\). Le même graphique a donc une forme sinus et une forme cosinus.`,
        S`<b>Vérifier une troisième valeur.</b> En \(90^\circ\) : \(3\sin180^\circ+2=2\) et \(3\cos90^\circ+2=2\) ✓`],
      "elles concordent (c'est le même graphique)",
      G((x) => 3 * Math.sin(r(2 * x)) + 2, { xmin: -45, xmax: 225, ymin: -2, ymax: 6 }, [{ x: 0, y: 2, label: "(0°, 2)", color: "amber" }, { x: 45, y: 5, label: "(45°, 5)", color: "amber" }, { x: 90, y: 2, label: "(90°, 2)" }], { x: 45, y: 1 })],
    ["À partir d'un max et du min suivant", "Une sinusoïde a un maximum en (30°, 8) et le minimum suivant en (120°, 2). Écris une équation avec cosinus.",
      [S`<b>Amplitude et axe.</b> \(a=\frac{8-2}2=3\) et \(d=\frac{8+2}2=5\).`,
        S`<b>Période.</b> D'un maximum au minimum suivant, il y a un demi-cycle : \(120^\circ-30^\circ=90^\circ\). La période est donc de \(180^\circ\), et \(k=2\).`,
        S`<b>Déphasage.</b> Le cosinus commence à un maximum : \(c=30^\circ\).`,
        S`<b>Équation.</b> \(y=3\cos(2(x-30^\circ))+5\).`,
        S`<b>Vérification.</b> En \(x=120^\circ\) : \(3\cos180^\circ+5=2\) ✓`],
      S`\(y=3\cos(2(x-30^\circ))+5\)`,
      G((x) => 3 * Math.cos(r(2 * (x - 30))) + 5, { xmin: -30, xmax: 300, ymin: 0, ymax: 10 }, [{ x: 30, y: 8, label: "(30°, 8)", color: "amber" }, { x: 120, y: 2, label: "(120°, 2)", color: "amber" }, { x: 210, y: 8, label: "(210°, 8)" }], { x: 30, y: 1 }, { lines: [{ m: 0, b: 5, color: "green", dash: true }] })],
  ]),

  practice([
    q("a", "Une sinusoïde a un max de 11 et un min de 3. Quelle est son amplitude?", num(4),
      "(max − min)/2.", [S`\(\frac{11-3}2\).`], S`\(4\)`),
    q("d", "Pour la même sinusoïde (max 11, min 3), que vaut d?", num(7),
      "(max + min)/2.", [S`\(\frac{11+3}2\).`], S`\(7\)`),
    q("k", "Une sinusoïde a une période de 120°. Que vaut k?", num(3),
      "360° ÷ période.", [S`\(360\div120\).`], S`\(3\)`),
    q("k", "Une sinusoïde a une période de 1080°. Que vaut k? Entre un nombre décimal.", num(1 / 3, 0.001),
      "360 ÷ 1080.", [S`\(\frac13\).`], S`\(\approx0.333\)`),
    q("équation", "Quelle équation a un maximum de 2 en x = 0° et un minimum de −2 en x = 180°?", choice([S`\(y=2\cos x\)`, S`\(y=2\sin x\)`, S`\(y=\cos2x\)`, S`\(y=-2\cos x\)`], 0),
      "Le cosinus commence à son maximum.", ["a = 2, période de 360°."], S`\(y=2\cos x\)`),
  ]),

  ...hard([
    ["À partir de deux points", "Une sinusoïde a un maximum en (45°, 7) et le minimum suivant en (135°, −1). Écris une équation avec sinus et une équation avec cosinus.",
      [S`\(a=4\), \(d=3\), période \(2\times90^\circ=180^\circ\), \(k=2\).`, S`Sinus : le passage par l'axe en montant se trouve un quart de période avant le max : \(45^\circ-45^\circ=0^\circ\).`, S`Cosinus : on commence au max, \(c=45^\circ\).`],
      S`\(y=4\sin2x+3\) ou \(y=4\cos(2(x-45^\circ))+3\)`,
      G((x) => 4 * Math.sin(r(2 * x)) + 3, { xmin: -45, xmax: 315, ymin: -2, ymax: 8 }, [{ x: 45, y: 7, label: "(45°, 7)" }, { x: 135, y: -1, label: "(135°, −1)" }], { x: 45, y: 1 })],
    ["Commencer à un minimum", "Un graphique a un minimum de −4 en x = 0° et un maximum de 6 en x = 90°. Écris une équation avec cosinus en utilisant c = 0.",
      [S`\(|a|=5\), \(d=1\); du min au max, il y a une demi-période : période de 180°, \(k=2\).`, S`Commencer à un minimum signifie un cosinus avec réflexion : \(a=-5\).`],
      S`\(y=-5\cos2x+1\)`],
  ], [
    q("difficile", "Des maximums consécutifs se trouvent en x = 20° et x = 80°. Que vaut k?", num(6),
      "Période de 60°.", [S`\(360\div60\).`], S`\(6\)`),
    q("difficile", "Un modèle cosinus a son maximum en x = −30°. En utilisant la valeur de c la plus proche de 0, que vaut c?", num(-30),
      "c est l'abscisse du max.", [S`\(y=a\cos(k(x+30^\circ))+d\).`], S`\(-30\)`),
    q("difficile", S`Une sinusoïde a l'image \(-7\le y\le3\). Que vaut \(d\)?`, num(-2),
      "Le milieu de l'image.", [S`\(\frac{-7+3}2\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi y a-t-il plusieurs équations correctes?", "Une translation d'une période entière, ou le passage du sinus au cosinus avec une autre valeur de c, donne le même graphique."],
      ["Lequel est le plus facile, le sinus ou le cosinus?", "Le cosinus quand tu vois un maximum; le sinus quand tu vois le passage par l'axe en montant."],
      ["Comment obtenir k à partir des abscisses du max et du min?", "Du max au min suivant, il y a une demi-période : période = 2 × cette distance."],
      ["Quand a est-il négatif?", "Quand tu fais commencer un cosinus à un minimum, ou un sinus à un passage par l'axe en descendant."],
      ["Comment vérifier?", "Substitue un autre point du graphique dans ton équation."],
    ],
    summary: [
      "|a| = (max − min)/2; d = (max + min)/2.",
      "k = 360°/période.",
      "c : max (cosinus) ou passage par l'axe en montant (sinus).",
      "Vérifie avec un deuxième point.",
    ],
    next: "En 6.7, on construit et on utilise des modèles sinusoïdaux pour des situations réelles.",
  }),
];
