// MHF4U-FR 5.4 — Résolution d'équations trigonométriques : équations du premier et du second degré sur [0, 2π],
// angles multiples, et équations qui demandent d'abord une identité
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, rootsT, hard, plane, num } from "./lib.mjs";
import { TG, UC, PI } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "5.4 Résolution d'équations trigonométriques";
export const ID = lessonId(5, 4);

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const V = { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 };
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Résolution d'équations trigonométriques",
    overview: S`Comme les fonctions trigonométriques se répètent, une équation comme \(\sin x=\frac12\) a une infinité de solutions; on précise donc un intervalle, habituellement \([0,2\pi]\). La méthode comporte trois étapes : isoler le rapport, trouver l'angle de référence, puis utiliser la règle CAST pour placer toutes les solutions. Les équations du second degré se factorisent comme en algèbre, et les identités peuvent transformer une équation plus difficile en l'une de celles-ci.`,
    goals: [
      "résoudre des équations du premier degré sur \\([0,2\\pi]\\), de façon exacte et approximative;",
      "résoudre par factorisation des équations du second degré en un rapport;",
      "résoudre des équations avec des angles multiples comme \\(\\sin2x\\);",
      "utiliser des identités avant de résoudre;",
      "confirmer les solutions à l'aide d'un graphique.",
    ],
    curriculum: "B3.4 (résoudre des équations trigonométriques du premier et du second degré, avec et sans technologie graphique)",
    prior: [
      [S`Résous \(2u-1=0\).`, S`\(u=\frac12\).`],
      [S`Factorise \(2u^2-u-1\).`, S`\((2u+1)(u-1)\).`],
      [S`Dans quels quadrants a-t-on \(\cos x\lt0\) ?`, S`Les quadrants 2 et 3.`],
    ],
    words: [
      ["Angle de référence", "l'angle aigu associé à |rapport|", ""],
      ["Valeur principale", "le résultat donné par sin⁻¹, cos⁻¹ ou tan⁻¹ sur la calculatrice", "\\(\\sin^{-1}0.3\\)"],
      ["Angle multiple", "kx avec k > 1", "\\(\\sin2x\\)"],
      ["Intervalle", "l'ensemble des valeurs de x considérées", "\\([0,2\\pi]\\)"],
    ],
  }),

  section("📌 Placer les solutions", S`
  ${table(["Quadrant", "Angle à partir de la référence α", "Exemple, α = π/6"], [
    ["Q1", "α", "π/6"],
    ["Q2", "π − α", "5π/6"],
    ["Q3", "π + α", "7π/6"],
    ["Q4", "2π − α", "11π/6"],
  ])}
  ${plane(TG([[Math.sin, "violet"], [() => 0.5, "green"]], V, [lab(PI / 6, 0.5, "π/6"), lab((5 * PI) / 6, 0.5, "5π/6")]), "sin x = 1/2 : la droite coupe la courbe deux fois sur un cycle.")}
  ${keyIdea(S`Une équation du premier degré a au plus deux solutions dans \([0,2\pi]\). Si \(|\sin x|\) ou \(|\cos x|\) devait dépasser 1, il n'y en a aucune. Pour \(\sin kx=c\), résous pour \(kx\) sur \([0,2k\pi]\), puis divise par \(k\).`)}`),

  section("📌 Explorer", S`<p>Choisis sin, cos ou tan et fais glisser la valeur de \(k\). Chaque point d'intersection avec la droite horizontale est une solution. Observe les solutions disparaître lorsque \(k\) dépasse \(\pm1\) pour le sinus et le cosinus.</p>`),

  widget("ibTrigEq", { init: [0, -0.6] }),

  section("📌 Équations du second degré", S`
  <p>Traite le rapport comme une variable : \(2\cos^2x-\cos x-1=0\) devient \((2\cos x+1)(\cos x-1)=0\). Résous chaque facteur séparément, puis rassemble les solutions en ordre.</p>
  ${plane(UC(120, "2π/3", [{ x: Math.cos((4 * PI) / 3), y: Math.sin((4 * PI) / 3), label: "4π/3", color: "red" }, { x: 1, y: 0, label: "0", color: "blue" }]), "cos x = −1/2 et cos x = 1 donnent les solutions sur le cercle.")}
  ${watchOut([
    "Ne divise pas les deux membres par sin x ou cos x : tu peux perdre des solutions. Factorise plutôt.",
    "Avec la calculatrice, utilise le mode radians et ajuste une valeur principale négative.",
    "Avec sin 2x = c, donne les valeurs de x de 0 à 2π; il y en a habituellement quatre.",
    "Vérifie chaque réponse, surtout après avoir utilisé des identités ou élevé au carré.",
    "Donne les valeurs exactes et les valeurs décimales selon ce qui est demandé.",
  ])}`),

  examples([
    ["Une valeur remarquable", S`Résous \(2\cos x+\sqrt3=0\) sur \([0,2\pi]\).`,
      [S`<b>Isoler.</b> \(2\cos x=-\sqrt3\), donc \(\cos x=-\frac{\sqrt3}2\).`,
        S`<b>Angle de référence.</b> \(\cos\frac\pi6=\frac{\sqrt3}2\), donc l'angle de référence est \(\frac\pi6\).`,
        S`<b>Quadrants.</b> Le cosinus est négatif dans les quadrants 2 et 3 : \(\pi-\frac\pi6=\frac{5\pi}6\) et \(\pi+\frac\pi6=\frac{7\pi}6\).`,
        S`<b>Vérification.</b> \(2\left(-\frac{\sqrt3}2\right)+\sqrt3=0\) pour les deux angles ✓`],
      S`\(x=\frac{5\pi}6,\ \frac{7\pi}6\)`,
      plane(TG([[Math.cos, "violet"], [() => -Math.sqrt(3) / 2, "green"]], V, [lab((5 * PI) / 6, -Math.sqrt(3) / 2, "5π/6"), lab((7 * PI) / 6, -Math.sqrt(3) / 2, "7π/6")]))],
    ["Une valeur qui n'est pas remarquable", S`Résous \(3\sin x-1=0\) sur \([0,2\pi]\), à 2 décimales près.`,
      [S`<b>Isoler.</b> \(\sin x=\frac13\).`,
        S`<b>Angle de référence.</b> Avec la calculatrice en radians, \(\sin^{-1}\frac13\approx0.34\).`,
        S`<b>Quadrants.</b> Le sinus est positif dans les quadrants 1 et 2 : \(x\approx0.34\) et \(x\approx\pi-0.34\approx2.80\).`,
        S`<b>Vérification.</b> \(3\sin2.80-1\approx3(0.335)-1\approx0\) ✓`],
      S`\(x\approx0.34,\ 2.80\)`,
      plane(TG([[Math.sin, "violet"], [() => 1 / 3, "green"]], V, [lab(0.34, 1 / 3, "0.34"), lab(2.8, 1 / 3, "2.80")]))],
    ["Une équation du second degré par factorisation", S`Résous \(2\sin^2x-\sin x-1=0\) sur \([0,2\pi]\).`,
      [S`<b>Substituer.</b> Pose \(u=\sin x\) : \(2u^2-u-1=0\).`,
        S`<b>Factoriser.</b> \((2u+1)(u-1)=0\), donc \(\sin x=-\frac12\) ou \(\sin x=1\).`,
        S`<b>Première équation.</b> \(\sin x=-\frac12\) : référence \(\frac\pi6\), quadrants 3 et 4 : \(x=\frac{7\pi}6,\ \frac{11\pi}6\).`,
        S`<b>Deuxième équation.</b> \(\sin x=1\) : \(x=\frac\pi2\).`,
        S`<b>Vérification.</b> \(x=\frac{7\pi}6\) : \(2\cdot\frac14+\frac12-1=0\) ✓`],
      S`\(x=\frac\pi2,\ \frac{7\pi}6,\ \frac{11\pi}6\)`,
      plane(TG([[(x) => 2 * Math.sin(x) ** 2 - Math.sin(x) - 1, "violet"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 2, 0, "π/2"), lab((7 * PI) / 6, 0, "7π/6"), lab((11 * PI) / 6, 0, "11π/6")]))],
    ["Un angle multiple", S`Résous \(\sin2x=\dfrac{\sqrt3}2\) sur \([0,2\pi]\).`,
      [S`<b>Étendue de l'angle.</b> Si \(0\le x\le2\pi\), alors \(0\le2x\le4\pi\). On résout donc pour \(2x\) sur deux tours.`,
        S`<b>Un tour.</b> \(2x=\frac\pi3\) ou \(\frac{2\pi}3\).`,
        S`<b>Ajouter un tour.</b> \(2x=\frac{7\pi}3\) ou \(\frac{8\pi}3\).`,
        S`<b>Diviser par 2.</b> \(x=\frac\pi6,\ \frac\pi3,\ \frac{7\pi}6,\ \frac{4\pi}3\).`,
        S`<b>Vérification.</b> \(y=\sin2x\) a deux cycles sur \([0,2\pi]\), et la droite coupe chacun deux fois : 4 solutions ✓`],
      S`\(x=\frac\pi6,\ \frac\pi3,\ \frac{7\pi}6,\ \frac{4\pi}3\)`,
      plane(TG([[(x) => Math.sin(2 * x), "violet"], [() => Math.sqrt(3) / 2, "green"]], V, [lab(PI / 6, Math.sqrt(3) / 2, "π/6"), lab(PI / 3, Math.sqrt(3) / 2, "π/3")]))],
    ["Utiliser une identité", S`Résous \(\sin2x=\cos x\) sur \([0,2\pi]\).`,
      [S`<b>Identité.</b> \(\sin2x=2\sin x\cos x\), donc \(2\sin x\cos x-\cos x=0\).`,
        S`<b>Factoriser.</b> Ne divise pas par \(\cos x\), car cela fait perdre des solutions : \(\cos x(2\sin x-1)=0\).`,
        S`<b>Première équation.</b> \(\cos x=0\) : \(x=\frac\pi2,\ \frac{3\pi}2\).`,
        S`<b>Deuxième équation.</b> \(\sin x=\frac12\) : \(x=\frac\pi6,\ \frac{5\pi}6\).`,
        S`<b>Vérification.</b> \(x=\frac\pi6\) : \(\sin\frac\pi3=\frac{\sqrt3}2=\cos\frac\pi6\) ✓`],
      S`\(x=\frac\pi6,\ \frac\pi2,\ \frac{5\pi}6,\ \frac{3\pi}2\)`,
      plane(TG([[(x) => Math.sin(2 * x), "violet"], [Math.cos, "green"]], V, [lab(PI / 6, Math.sqrt(3) / 2, "π/6"), lab(PI / 2, 0, "π/2"), lab((5 * PI) / 6, -Math.sqrt(3) / 2, "5π/6"), lab((3 * PI) / 2, 0, "3π/2")]))],
  ]),

  practice([
    q("premier degré", S`Résous \(2\sin x-1=0\) sur \([0,2\pi]\). Entre les solutions sous forme décimale (2 décimales), séparées par des virgules.`, rootsT(0.01, 0.52, 2.62),
      "sin x = 1/2.", [S`\(\frac\pi6\) et \(\frac{5\pi}6\).`], S`\(x=0.52,\ 2.62\)`),
    q("premier degré", S`Résous \(\tan x=1\) sur \([0,2\pi]\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 0.79, 3.93),
      "Quadrants 1 et 3.", [S`\(\frac\pi4\) et \(\frac{5\pi}4\).`], S`\(x=0.79,\ 3.93\)`),
    q("approximation", S`Résous \(5\cos x=2\) sur \([0,2\pi]\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 1.16, 5.12),
      "Quadrants 1 et 4.", [S`\(\cos^{-1}0.4\approx1.16\); \(2\pi-1.16\approx5.12\).`], S`\(x=1.16,\ 5.12\)`),
    q("second degré", S`Résous \(\cos^2x-1=0\) sur \([0,2\pi)\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 0, 3.14),
      "cos x = ±1.", [S`\(0\) et \(\pi\).`], S`\(x=0,\ 3.14\)`),
    q("dénombrement", S`Combien de solutions l'équation \(\cos3x=0.5\) a-t-elle sur \([0,2\pi]\) ?`, num(6),
      "Deux par cycle, trois cycles.", [S`\(3\times2\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Un angle double dans un cosinus", S`Résous \(\cos2x+\sin x=0\) sur \([0,2\pi]\).`,
      [S`\(1-2\sin^2x+\sin x=0\Rightarrow2\sin^2x-\sin x-1=0\).`, S`\((2\sin x+1)(\sin x-1)=0\) : \(\sin x=-\frac12\) ou \(\sin x=1\).`],
      S`\(x=\frac\pi2,\ \frac{7\pi}6,\ \frac{11\pi}6\)`,
      plane(TG([[(x) => Math.cos(2 * x) + Math.sin(x), "violet"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }))],
    ["Une équation avec une fonction trigonométrique inverse", S`Résous \(2\sec^2x-\tan^2x-5=0\) sur \([0,2\pi]\), de façon exacte.`,
      [S`\(\sec^2x=1+\tan^2x\) : \(2+2\tan^2x-\tan^2x-5=0\Rightarrow\tan^2x=3\).`, S`\(\tan x=\pm\sqrt3\) : angle de référence \(\frac\pi3\), une solution dans chaque quadrant.`],
      S`\(x=\frac\pi3,\ \frac{2\pi}3,\ \frac{4\pi}3,\ \frac{5\pi}3\)`],
  ], [
    q("difficile", S`Résous \(2\sin^2x+\sin x=0\) sur \([0,2\pi)\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 0, 3.14, 3.67, 5.76),
      "Mets sin x en évidence.", [S`\(\sin x=0\) : \(0,\pi\). \(\sin x=-\frac12\) : \(\frac{7\pi}6,\frac{11\pi}6\).`], S`\(x=0,\ 3.14,\ 3.67,\ 5.76\)`),
    q("difficile", S`Résous \(\tan^2x-3\tan x+2=0\) sur \([0,\pi)\). Entre des valeurs décimales (2 décimales).`, rootsT(0.01, 0.79, 1.11),
      "Factorise.", [S`\(\tan x=1\) ou \(2\) : \(\frac\pi4\) et \(\tan^{-1}2\approx1.11\).`], S`\(x=0.79,\ 1.11\)`),
    q("difficile", S`Combien de solutions l'équation \(\cos2x=\cos x\) a-t-elle sur \([0,2\pi)\) ?`, num(3),
      "2cos²x − cos x − 1 = 0.", [S`\(\cos x=1\) : \(0\). \(\cos x=-\frac12\) : \(\frac{2\pi}3,\frac{4\pi}3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi préciser un intervalle ?", "Une fonction périodique se répète, donc sans intervalle il y a une infinité de solutions."],
      ["Pourquoi ne pas diviser par cos x ?", "cos x peut valoir 0, et c'est alors une solution. Diviser la fait perdre. Factoriser la conserve."],
      ["Comment trouver la solution générale ?", "Ajoute un multiple de la période : par exemple x = π/6 + 2nπ."],
      ["Que donne ma calculatrice ?", "Une seule valeur principale. Utilise la règle CAST pour trouver les autres."],
      ["Quand n'y a-t-il aucune solution ?", "Quand le sinus ou le cosinus devrait prendre une valeur en dehors de [−1, 1]."],
    ],
    summary: [
      "Isole le rapport, trouve l'angle de référence et applique la règle CAST.",
      "Factorise les équations du second degré; ne divise jamais par un rapport.",
      "Pour sin kx, donne les angles sur k cycles, puis divise par k.",
      "Utilise des identités pour obtenir un seul rapport.",
    ],
    next: "En 5.5, on applique ces habiletés à des modèles avec des taux de variation.",
  }),
];
