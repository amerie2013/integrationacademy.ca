// MHF4U-FR 5.6 — Révision du chapitre 5 : graphiques des six fonctions, sinusoïdes, équations et modèles
// (notation française : y = a sin(k(x − c)) + d)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, rootsT, hard, plane } from "./lib.mjs";
import { TG, PI } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "5.6 Révision du chapitre 5";
export const ID = lessonId(5, 6);

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const V = { xmin: -0.5, xmax: 7, ymin: -3, ymax: 3 };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 5 — Fonctions trigonométriques",
    overview: S`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, une pratique variée, une liste de vérification et un niveau difficile. Esquisse chaque graphique avant de regarder la figure.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "tracer les fonctions sinus, cosinus, tangente et les fonctions trigonométriques inverses;",
      "lire et écrire des équations sinusoïdales;",
      "résoudre des équations trigonométriques du premier et du second degré;",
      "résoudre des problèmes de modélisation avec des taux de variation.",
    ],
    curriculum: "B2.1–B2.7, B3.4, D1.4, D1.8 (tout le chapitre)",
    prior: [
      [S`Asymptotes de \(\tan x\) ?`, S`\(x=\frac\pi2+n\pi\).`],
      [S`Période de \(\sin3x\) ?`, S`\(\frac{2\pi}3\).`],
      [S`\(\sin x=-1\) sur \([0,2\pi]\) ?`, S`\(\frac{3\pi}2\).`],
    ],
    words: [
      ["Période", "2π/|k|", ""],
      ["Amplitude", "|a|", ""],
      ["Déphasage", "c, après avoir mis k en évidence", ""],
      ["Angle de référence", "angle aigu associé à |rapport|", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["5.1 sin, cos, tan", "cinq points clés; tan a des asymptotes", "tan a une période de π", "tan n'a pas d'amplitude"],
    ["5.2 Fonctions inverses", "zéros → asymptotes; ±1 fixes", "\\(\\csc x\\ge1\\) ou \\(\\le-1\\)", "csc x = 1/sin x ≠ sin⁻¹x"],
    ["5.3 Sinusoïdes", "a, k, c, d", "\\(2\\sin(3(x-\\frac\\pi6))+1\\)", "mettre k en évidence d'abord"],
    ["5.4 Équations", "isoler, angle de référence, CAST", "\\(2\\sin x=1\\) : \\(\\frac\\pi6,\\frac{5\\pi}6\\)", "ne pas diviser par un rapport"],
    ["5.5 Modèles", "axe, amplitude, période; taux", "\\(3\\sin\\frac\\pi6t+5\\)", "utiliser les radians"],
  ])),

  section("📌 Explorer", S`<p>Utilise l'outil de résolution pour vérifier ton travail sur les équations ci-dessous.</p>`),

  widget("ibTrigEq", { init: [1, -0.35] }),

  section("📌 Vue d'ensemble", keyIdea(S`Une fonction trigonométrique se répète sans fin : les équations ont donc plusieurs solutions, les modèles décrivent des cycles, et les taux de variation eux-mêmes augmentent et diminuent. Commence chaque problème en repérant la période et l'axe.`)),

  examples([
    ["Une esquisse complète", S`Esquisse \(y=-3\cos\left(2\left(x-\dfrac\pi4\right)\right)+1\) et donne ses caractéristiques clés.`,
      [S`<b>Caractéristiques.</b> Amplitude 3, avec réflexion. Période \(\frac{2\pi}2=\pi\). Déphasage de \(\frac\pi4\) vers la droite. Axe \(y=1\).`,
        S`<b>Image.</b> \(1-3\le y\le1+3\), donc \([-2,4]\).`,
        S`<b>Points tournants.</b> Un cosinus réfléchi commence à un min, donc le min est en \(x=\frac\pi4\). Le max est une demi-période plus loin, en \(x=\frac{3\pi}4\).`,
        S`<b>Vérification.</b> \(x=\frac\pi4\) : \(-3\cos0+1=-2\) ✓`],
      S`min \(\left(\frac\pi4,-2\right)\), max \(\left(\frac{3\pi}4,4\right)\)`,
      plane(TG([[(x) => -3 * Math.cos(2 * (x - PI / 4)) + 1, "violet"]], { xmin: -1, xmax: 7, ymin: -3, ymax: 5 }, [lab(PI / 4, -2, "(π/4, −2)"), lab((3 * PI) / 4, 4, "(3π/4, 4)", "red")]))],
    ["Une fonction trigonométrique inverse", S`Donne les asymptotes et l'image de \(y=\sec\left(x-\dfrac\pi4\right)\).`,
      [S`<b>Règle.</b> La sécante a des asymptotes là où son cosinus vaut 0.`,
        S`<b>Équation.</b> \(\cos\left(x-\frac\pi4\right)=0\) lorsque \(x-\frac\pi4=\frac\pi2+n\pi\).`,
        S`<b>Résoudre.</b> \(x=\frac{3\pi}4+n\pi\).`,
        S`<b>Image.</b> Une translation horizontale ne change pas les hauteurs, donc \(|y|\ge1\).`,
        S`<b>Vérification.</b> \(x=\frac\pi4\) : \(\sec0=1\) ✓`],
      S`\(x=\frac{3\pi}4+n\pi\); \(|y|\ge1\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 6 }, curves: [[-PI / 4 + 0.2, (3 * PI) / 4 - 0.2], [(3 * PI) / 4 + 0.2, (7 * PI) / 4 - 0.2], [(7 * PI) / 4 + 0.2, 7]].map(([a, b]) => ({ f: (x) => 1 / Math.cos(x - PI / 4), a, b, color: "violet" })), vlines: [-PI / 4, (3 * PI) / 4, (7 * PI) / 4].map((x) => ({ x, color: "red", dash: true })), points: [lab(PI / 4, 1, "(π/4, 1)")], step: { x: 1, y: 1 } })],
    ["Une équation", S`Résous \(2\cos^2x+3\cos x+1=0\) sur \([0,2\pi]\).`,
      [S`<b>Substituer.</b> Pose \(u=\cos x\) : \(2u^2+3u+1=0\).`,
        S`<b>Factoriser.</b> \((2u+1)(u+1)=0\), donc \(\cos x=-\frac12\) ou \(\cos x=-1\).`,
        S`<b>Première équation.</b> \(\cos x=-\frac12\) : référence \(\frac\pi3\), quadrants 2 et 3 : \(x=\frac{2\pi}3,\ \frac{4\pi}3\).`,
        S`<b>Deuxième équation.</b> \(\cos x=-1\) : \(x=\pi\).`,
        S`<b>Vérification.</b> \(x=\frac{2\pi}3\) : \(2\cdot\frac14-\frac32+1=0\) ✓`],
      S`\(x=\frac{2\pi}3,\ \pi,\ \frac{4\pi}3\)`,
      plane(TG([[(x) => 2 * Math.cos(x) ** 2 + 3 * Math.cos(x) + 1, "violet"]], V, [lab(PI, 0, "π")]))],
    ["Une équation à partir de caractéristiques", S`Une courbe a un max de 10 en \(x=1\) et le min suivant, \(-2\), en \(x=4\). Écris une équation à l'aide du cosinus.`,
      [S`<b>Axe.</b> \(d=\frac{10+(-2)}2=4\).`,
        S`<b>Amplitude.</b> \(a=\frac{10-(-2)}2=6\).`,
        S`<b>Période.</b> Une demi-période vaut \(4-1=3\), donc la période est 6 et \(k=\frac{2\pi}6=\frac\pi3\).`,
        S`<b>Déphasage.</b> Le cosinus commence à un max, donc \(c=1\).`,
        S`<b>Vérification.</b> \(x=4\) : \(6\cos\pi+4=-2\) ✓`],
      S`\(y=6\cos\left(\frac\pi3(x-1)\right)+4\)`,
      plane(TG([[(x) => 6 * Math.cos((PI / 3) * (x - 1)) + 4, "violet"]], { xmin: -1, xmax: 13, ymin: -3, ymax: 11 }, [lab(1, 10, "(1, 10)"), lab(4, -2, "(4, −2)", "red")]))],
    ["Un modèle", S`Une roue a pour modèle \(h(t)=-10\cos\left(\dfrac\pi{20}t\right)+12\). Trouve le premier instant où \(h=17\), et le taux moyen sur \([0,10]\).`,
      [S`<b>Isoler.</b> \(-10\cos\frac\pi{20}t+12=17\) donne \(\cos\frac\pi{20}t=-\frac12\).`,
        S`<b>Premier angle.</b> Le premier angle qui a ce cosinus est \(\frac{2\pi}3\) : \(\frac\pi{20}t=\frac{2\pi}3\).`,
        S`<b>Résoudre.</b> \(t=\frac{2\pi}3\cdot\frac{20}\pi=\frac{40}3\approx13.3\) s.`,
        S`<b>Taux.</b> \(h(0)=2\) et \(h(10)=-10\cos\frac\pi2+12=12\) : \(\frac{12-2}{10}=1\) m/s.`,
        S`<b>Vérification.</b> \(-10\left(-\frac12\right)+12=17\) ✓`],
      S`\(t\approx13.3\) s; \(1\) m/s`,
      plane(TG([[(t) => -10 * Math.cos((PI / 20) * t) + 12, "violet"], [() => 17, "green"]], { xmin: 0, xmax: 40, ymin: 0, ymax: 24 }, [lab(0, 2, "(0, 2)"), lab(10, 12, "(10, 12)"), lab(40 / 3, 17, "(13.3, 17)", "amber")], { step: { x: 5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" }))],
  ]),

  practice([
    q("sinusoïde", S`Trouve la période de \(y=3\sin\left(\dfrac{x}{2}\right)\) (2 décimales).`, num(12.57, 0.01),
      "2π/k.", [S`\(4\pi\).`], S`\(12.57\)`),
    q("fonction inverse", S`Combien d'asymptotes \(y=\csc x\) a-t-elle sur \((0,2\pi)\) ?`, num(1),
      "Seule π est à l'intérieur.", [S`\(x=\pi\).`], S`\(1\)`),
    q("équation", S`Résous \(\sqrt2\sin x+1=0\) sur \([0,2\pi]\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 3.93, 5.5),
      "sin x = −√2/2.", [S`\(\frac{5\pi}4,\ \frac{7\pi}4\).`], S`\(x=3.93,\ 5.50\)`),
    q("valeur", S`Trouve le minimum de \(y=2\cos x-5\).`, num(-7),
      "d − |a|.", [S`\(-5-2\).`], S`\(-7\)`),
    q("modèle", S`Un ressort a pour modèle \(y=4\sin(2t)\). Trouve le plus grand taux de variation.`, num(8),
      "|a|k.", [S`\(4\times2\).`], S`\(8\)`),
  ]),

  ...hard([
    ["D'abord une identité", S`Résous \(\cos2x=3\sin x+2\) sur \([0,2\pi]\).`,
      [S`\(1-2\sin^2x=3\sin x+2\Rightarrow2\sin^2x+3\sin x+1=0\).`, S`\((2\sin x+1)(\sin x+1)=0\) : \(\sin x=-\frac12\) ou \(\sin x=-1\).`],
      S`\(x=\frac{7\pi}6,\ \frac{3\pi}2,\ \frac{11\pi}6\)`,
      plane(TG([[(x) => Math.cos(2 * x), "violet"], [(x) => 3 * Math.sin(x) + 2, "green"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 5 }))],
    ["Instant et taux", S`Une marée a une pleine mer de 9 m en \(t=3\) h et une basse mer de 1 m en \(t=9\) h. Écris \(d(t)\), trouve le premier instant où elle descend à 7 m, et estime le taux à ce moment.`,
      [S`Axe 5, amplitude 4, période 12 : \(d=4\cos\left(\frac\pi6(t-3)\right)+5\).`, S`\(\cos\left(\frac\pi6(t-3)\right)=\frac12\Rightarrow\frac\pi6(t-3)=\frac\pi3\Rightarrow t=5\).`, S`Taux en \(t=5\) : \(-4\cdot\frac\pi6\sin\frac\pi3\approx-1.81\) m/h.`],
      S`\(t=5\); environ \(-1.81\) m/h`,
      plane(TG([[(t) => 4 * Math.cos((PI / 6) * (t - 3)) + 5, "violet"]], { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, [lab(5, 7, "(5, 7)")], { step: { x: 3, y: 1 }, xlabel: "t (h)" }))],
  ], [
    q("difficile", S`Combien de solutions l'équation \(\tan2x=1\) a-t-elle sur \([0,2\pi)\) ?`, num(4),
      "Période π/2.", [S`Deux périodes complètes de \(\tan2x\) par intervalle de longueur \(\pi\), donc 4.`], S`\(4\)`),
    q("difficile", S`\(y=a\sin(kx)+d\) a un max de 7, un min de \(-1\) et une période de \(\dfrac\pi2\). Trouve \(a+k+d\).`, num(11),
      "a = 4, k = 4, d = 3.", [S`\(4+4+3\).`], S`\(11\)`),
    q("difficile", S`Résous \(\sin x\cos x=\dfrac14\) sur \(\left[0,\dfrac\pi2\right]\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 0.26, 1.31),
      "½ sin 2x = ¼.", [S`\(\sin2x=\frac12\) : \(2x=\frac\pi6,\frac{5\pi}6\).`], S`\(x=0.26,\ 1.31\)`),
  ]),

  section("✅ Prêt pour l'évaluation ?", S`<ul>
    <li>Je peux tracer les six fonctions trigonométriques en radians, avec leurs asymptotes et leurs points clés.</li>
    <li>Je peux donner l'amplitude, la période, le déphasage et l'axe, et écrire une équation à partir d'un graphique.</li>
    <li>Je peux résoudre des équations du premier et du second degré, ainsi que des équations avec des angles multiples ou des identités.</li>
    <li>Je peux construire un modèle à partir d'une situation et l'interpréter.</li>
    <li>Je peux trouver des taux moyens et estimer des taux instantanés sur une courbe sinusoïdale.</li>
  </ul>`),

  wrapUp({
    qas: [
      ["Que dois-je vérifier en premier sur un graphique ?", "La période et l'axe; ensuite l'amplitude et le déphasage."],
      ["Quelle est l'erreur la plus fréquente ?", "Oublier de mettre k en évidence, ou mal utiliser 2π/k."],
      ["Comment éviter d'oublier des solutions ?", "Esquisse un graphique, ou compte les points d'intersection avant de commencer."],
      ["Comment vérifier une équation obtenue à partir d'un graphique ?", "Remplace x par l'abscisse d'un max, d'un min et d'un point sur l'axe."],
      ["Quelle est la suite ?", "Les fonctions exponentielles et logarithmiques, au chapitre 6."],
    ],
    summary: [
      "sin, cos : période 2π; tan, cot : période π; les fonctions inverses ont des asymptotes aux zéros.",
      "y = a sin(k(x − c)) + d.",
      "Isoler, angle de référence, CAST.",
      "Modèles : axe, amplitude, période; taux : sécantes et petits intervalles.",
    ],
    next: "Le chapitre 6 présente les logarithmes.",
  }),
];
