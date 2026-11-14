// MCV4U-FR 4.4 — Applications des fonctions sinusoïdales et de leurs dérivées : mouvement harmonique simple,
// grandes roues, durée du jour, taux maximaux, optimisation avec des angles et faisceau en rotation (taux liés)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "4.4 Applications des fonctions sinusoïdales et de leurs dérivées";
export const ID = lessonId(4, 4);

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Applications des fonctions sinusoïdales et de leurs dérivées",
    overview: S`Beaucoup de mouvements se répètent : une masse qui oscille au bout d'un ressort, un passager sur une grande roue, la durée du jour au fil de l'année. Lorsque la position est une fonction sinusoïdale du temps, sa dérivée donne la vitesse et sa dérivée seconde, l'accélération. Pour \(s(t)=A\cos(\omega t)\), on obtient \(v=-A\omega\sin(\omega t)\) et \(a=-A\omega^2\cos(\omega t)=-\omega^2s\) : l'accélération pointe toujours vers le centre — la signature du <strong>mouvement harmonique simple</strong>. Les dérivées permettent aussi de trouver le moment où la variation est la plus rapide et l'angle qui rend une aire aussi grande que possible.`,
    goals: [
      "trouver la vitesse et l'accélération d'un mouvement sinusoïdal;",
      "reconnaître le mouvement harmonique simple : a = −ω² s;",
      "déterminer quand et à quelle vitesse une quantité périodique varie le plus rapidement;",
      "résoudre des problèmes d'optimisation dont la variable est un angle;",
      "interpréter les dérivées de modèles périodiques avec leurs unités.",
    ],
    curriculum: "A3.5, B2.1–B2.5 (résoudre des problèmes de taux de variation et d'optimisation portant sur des modèles sinusoïdaux tirés de situations réelles)",
    prior: [
      [S`\(\frac{d}{dt}\cos(3t)\) ?`, S`\(-3\sin(3t)\).`],
      [S`La vitesse à partir de la position ?`, S`\(v=s'(t)\).`],
      [S`Période de \(\cos\left(\frac{\pi}{30}t\right)\) ?`, S`60.`],
    ],
    words: [
      ["Mouvement harmonique simple", "mouvement tel que \\(a=-\\omega^2s\\)", "ressort, pendule"],
      ["Amplitude", "la moitié de la distance entre le minimum et le maximum", "A"],
      ["Pulsation (fréquence angulaire)", "\\(\\omega=\\frac{2\\pi}{\\text{période}}\\)", "radians par seconde"],
      ["Taux maximal", "plus grande valeur de \\(|f'|\\), atteinte à l'axe", "\\(|A\\omega|\\)"],
    ],
  }),

  section("📌 Position, vitesse, accélération", S`
  ${table(["Grandeur", "Formule", "Plus grande valeur", "Où"], [
    ["position \\(s\\)", "\\(A\\cos(\\omega t)\\)", "\\(A\\)", "aux points de rebroussement"],
    ["vitesse \\(v\\)", "\\(-A\\omega\\sin(\\omega t)\\)", "\\(A\\omega\\)", "au passage par le centre"],
    ["accélération \\(a\\)", "\\(-A\\omega^2\\cos(\\omega t)\\)", "\\(A\\omega^2\\)", "aux points de rebroussement"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 4.2, ymin: -80, ymax: 80 }, curves: [{ f: (t) => 8 * Math.cos(3 * t), a: 0, b: 4.2, color: "violet" }, { f: (t) => -24 * Math.sin(3 * t), a: 0, b: 4.2, color: "blue" }, { f: (t) => -72 * Math.cos(3 * t), a: 0, b: 4.2, color: "amber" }], step: { x: 0.5, y: 10 } }, "s = 8 cos 3t (violet), v = −24 sin 3t (bleu), a = −72 cos 3t (ambre) : a est toujours de signe opposé à s.")}
  ${keyIdea(S`Pour un modèle sinusoïdal, dérive avec la règle de dérivation en chaîne, puis interprète : la dérivée est la plus grande en valeur absolue là où la fonction de départ traverse son axe, et elle est nulle à son maximum et à son minimum. Dans un mouvement harmonique simple, \(a=-\omega^2s\).`)}`),

  section("📌 Explorer", S`<p>Modifie l'amplitude et \(\omega\), puis avance dans le temps. Observe la masse : elle se déplace le plus vite en passant la ligne verte d'équilibre et s'arrête un instant à chaque point de rebroussement, exactement là où l'accélération (ambre) est la plus grande.</p>`),

  widget("springLab", { init: { A: 10, w: 2, t: 0.5 } }),

  section("📌 Construire des modèles périodiques", S`
  <p>Repère l'amplitude (la moitié de l'écart entre les valeurs extrêmes), l'axe (la moyenne) et \(\omega=\frac{2\pi}{\text{période}}\). Vérifie les unités : si \(t\) est en secondes, \(\omega\) est en radians par seconde et le taux, en unités par seconde.</p>
  ${watchOut([
    "ω = 2π / période, et non la période elle-même.",
    "Garde la calculatrice en radians.",
    "Le module maximal de la vitesse est |Aω|, atteint à l'axe et non au sommet.",
    "La vitesse peut être négative; le module de la vitesse est sa valeur absolue.",
    "Donne la réponse avec ses unités : m/s, h par jour, cm²/rad.",
  ])}`),

  examples([
    ["Une masse au bout d'un ressort", S`Une masse se déplace selon \(s(t)=8\cos(3t)\) cm. Trouve \(v(t)\), \(a(t)\), le module maximal de la vitesse, et montre que \(a=-9s\).`,
      [S`\(v=-24\sin(3t)\) cm/s; \(a=-72\cos(3t)\) cm/s².`, S`Module maximal de la vitesse : 24 cm/s (lorsque \(\sin3t=\pm1\), c'est-à-dire au passage par \(s=0\)).`, S`\(a=-9\cdot8\cos(3t)=-9s\).`],
      S`module maximal de la vitesse 24 cm/s; \(a=-9s\) : mouvement harmonique simple avec \(\omega=3\)`],
    ["Une grande roue", S`La hauteur d'un passager est \(h(t)=20-18\cos\left(\frac{\pi}{30}t\right)\) m après \(t\) s. À quelle vitesse le passager monte-t-il à \(t=15\) s, et quand monte-t-il le plus vite ?`,
      [S`\(h'(t)=18\cdot\frac\pi{30}\sin\left(\frac\pi{30}t\right)=\frac{3\pi}5\sin\left(\frac\pi{30}t\right)\).`, S`\(h'(15)=\frac{3\pi}5\sin\frac\pi2\approx1.885\) m/s — la plus grande valeur, à la hauteur de l'axe, 20 m.`],
      S`environ 1.885 m/s à \(t=15\) s; il monte le plus vite à \(t=15\) s (puis toutes les 60 s)`,
      plane({ view: { xmin: 0, xmax: 125, ymin: 0, ymax: 42 }, curves: [{ f: (t) => 20 - 18 * Math.cos((PI / 30) * t), a: 0, b: 120, color: "violet" }, { f: (t) => 20 + 1.885 * (t - 15), a: 5, b: 25, color: "green" }], points: [{ x: 15, y: 20, label: "(15, 20)", color: "red" }], step: { x: 10, y: 5 } })],
    ["La durée du jour", S`Dans une ville, la durée du jour est \(D(t)=12+3\sin\left(\frac{2\pi}{365}(t-80)\right)\) heures le jour \(t\). À quel rythme varie-t-elle le jour 80, en minutes par jour ?`,
      [S`\(D'(t)=3\cdot\frac{2\pi}{365}\cos\left(\frac{2\pi}{365}(t-80)\right)\).`, S`\(D'(80)=\frac{6\pi}{365}\approx0.0516\) h/jour \(\approx3.1\) min/jour.`],
      S`elle augmente d'environ 3.1 minutes par jour (la variation la plus rapide de l'année)`,
      plane({ view: { xmin: 0, xmax: 370, ymin: 7, ymax: 16 }, curves: [{ f: (t) => 12 + 3 * Math.sin(((2 * PI) / 365) * (t - 80)), a: 0, b: 365, color: "violet" }], points: [{ x: 80, y: 12, label: "jour 80", color: "red" }, { x: 171.25, y: 15, label: "jour le plus long", color: "blue" }], step: { x: 30, y: 1 } })],
    ["Le plus grand triangle", S`Un triangle a deux côtés de 10 cm qui forment entre eux un angle \(\theta\). Quel angle donne la plus grande aire ?`,
      [S`\(A(\theta)=\frac12(10)(10)\sin\theta=50\sin\theta\), \(0\lt\theta\lt\pi\).`, S`\(A'(\theta)=50\cos\theta=0\Rightarrow\theta=\frac\pi2\); \(A''=-50\sin\theta\lt0\).`],
      S`un angle droit, \(\theta=\frac\pi2\), qui donne 50 cm²`,
      plane({ view: { xmin: 0, xmax: 3.3, ymin: 0, ymax: 60 }, curves: [{ f: (t) => 50 * Math.sin(t), a: 0, b: PI, color: "violet" }], points: [{ x: PI / 2, y: 50, label: "(π/2, 50)", color: "red" }], step: { x: 0.5, y: 10 } })],
    ["Un pendule qui oscille", S`L'angle d'un pendule est \(\theta(t)=0.2\cos(2t)\) rad. Trouve sa vitesse angulaire et le moment où elle est la plus grande en valeur absolue.`,
      [S`\(\theta'(t)=-0.4\sin(2t)\) rad/s.`, S`Plus grande valeur absolue : 0.4 rad/s lorsque \(\sin2t=\pm1\) : \(t=\frac\pi4,\frac{3\pi}4,\ldots\) — au passage du pendule par la verticale.`],
      S`\(\theta'=-0.4\sin(2t)\); plus grande vitesse angulaire 0.4 rad/s en \(t=\frac\pi4+\frac{k\pi}2\)`],
  ]),

  practice([
    q("vitesse", S`Une particule a la position \(s(t)=5\sin(2t)\) m. Trouve \(v(0)\).`, num(10),
      "v = 10 cos(2t).", [S`\(10\cos0\).`], S`\(10\)`),
    q("accélération", S`Pour \(s(t)=4\cos(\pi t)\) cm, trouve \(a(0)\) (2 décimales).`, num(-39.48, 0.01),
      "a = −4π² cos(πt).", [S`\(-4\pi^2\).`], S`\(-39.48\)`),
    q("taux maximal", S`La hauteur d'un passager d'une grande roue est \(h(t)=15-12\cos\left(\frac{\pi}{20}t\right)\) m. Quelle est la plus grande vitesse de montée (m/s, 3 décimales) ?`, num(1.885, 0.002),
      "|Aω| = 12 · π/20.", [S`\(\frac{3\pi}{5}\).`], S`\(1.885\)`),
    q("MHS", S`Dans un mouvement harmonique simple, l'accélération est proportionnelle :`, choice(["à l'opposé de la position", "à la vitesse", "au temps", "au carré de la position"], 0),
      "a = −ω² s.", ["Elle pointe toujours vers le centre."], "−position"),
    q("optimisation", S`Un triangle a des côtés de 6 et de 8 qui forment entre eux un angle \(\theta\). Quelle est sa plus grande aire possible ?`, num(24),
      "A = 24 sin θ.", [S`\(\theta=\frac\pi2\).`], S`\(24\)`),
  ]),

  ...hard([
    ["Un faisceau en rotation", S`Un phare situé à 2 km d'une côte rectiligne fait un tour par minute (\(2\pi\) rad/min). À quelle vitesse la tache lumineuse se déplace-t-elle le long de la côte lorsque le faisceau forme un angle \(\theta=\frac\pi4\) avec la perpendiculaire à la côte ?`,
      [S`Distance le long de la côte : \(x=2\tan\theta\).`, S`\(\frac{dx}{dt}=2\sec^2\theta\cdot\frac{d\theta}{dt}=2\sec^2\theta\cdot2\pi\).`, S`En \(\frac\pi4\) : \(\sec^2\frac\pi4=2\), donc \(\frac{dx}{dt}=8\pi\approx25.1\) km/min.`],
      S`environ 25.1 km par minute`,
      plane({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 3 }, segs: [{ pts: [[0, 0], [0, 2]], color: "gray" }, { pts: [[0, 2], [2, 0]], color: "amber" }, { pts: [[-0.5, 0], [4, 0]], color: "blue" }], points: [{ x: 0, y: 2, label: "phare", color: "red" }, { x: 2, y: 0, label: "x = 2 tan θ", color: "amber" }], step: { x: 0.5, y: 0.5 } })],
    ["Un rectangle dans un demi-cercle", S`Un rectangle est inscrit dans un demi-cercle de rayon 5, sa base sur le diamètre. Utilise l'angle \(\theta\) vers le coin supérieur droit pour trouver la plus grande aire.`,
      [S`Coin \((5\cos\theta,5\sin\theta)\) : \(A=2(5\cos\theta)(5\sin\theta)=25\sin2\theta\), \(0\lt\theta\lt\frac\pi2\).`, S`\(A'=50\cos2\theta=0\Rightarrow\theta=\frac\pi4\).`],
      S`\(\theta=\frac\pi4\) : un rectangle de 7.07 sur 3.54, d'aire 25`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(25 - x * x), a: -5, b: 5, color: "violet" }], segs: [{ pts: [[-3.536, 0], [-3.536, 3.536], [3.536, 3.536], [3.536, 0]], color: "green" }, { pts: [[0, 0], [3.536, 3.536]], color: "amber" }], points: [{ x: 3.536, y: 3.536, label: "(5cos θ, 5sin θ)", color: "red" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`Pour le modèle de la durée du jour \(D(t)=12+3\sin\left(\frac{2\pi}{365}(t-80)\right)\), quel est le plus grand taux de variation en heures par jour (4 décimales) ?`, num(0.0516, 0.0002),
      "|Aω| = 3 · 2π/365.", [S`\(\frac{6\pi}{365}\).`], S`\(0.0516\)`),
    q("difficile", S`Pour \(s(t)=3\sin t+4\cos t\), quel est le plus grand déplacement ?`, num(5),
      "s′ = 3cos t − 4 sin t = 0 ⇒ tan t = 3/4.", [S`\(3\cdot\frac35+4\cdot\frac45=5\).`], S`\(5\)`),
    q("difficile", S`Un pendule oscille selon \(\theta(t)=0.3\sin(4t)\) rad. Quelle est sa plus grande vitesse angulaire (rad/s) ?`, num(1.2),
      "|Aω|.", [S`\(0.3\times4\).`], S`\(1.2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la vitesse est-elle la plus grande au centre ?", "La dérivée d'une sinusoïde est la plus grande là où la courbe traverse son axe — la position d'équilibre."],
      ["Que signifie a = −ω²s physiquement ?", "Plus la masse est loin du centre, plus elle est ramenée fortement, toujours vers le centre."],
      ["Comment trouver ω ?", "ω = 2π/période. Une roue qui fait un tour toutes les 60 s a ω = π/30 rad/s."],
      ["Pourquoi prendre un angle comme variable ?", "Lorsqu'une forme est fixée par une longueur et un angle, écrire l'aire avec sin θ ou cos θ rend la dérivée simple."],
      ["Quelles sont les unités de dx/dt pour un faisceau ?", "Une distance par unité de temps, par exemple km/min — le taux de variation de l'angle doit être en radians par minute."],
    ],
    summary: [
      "v = s′, a = s″ pour un mouvement sinusoïdal.",
      "MHS : a = −ω² s.",
      "Taux maximal |Aω| à l'axe.",
      "Un angle peut servir de variable d'optimisation.",
    ],
    next: "En 4.5, on révise le chapitre.",
  }),
];
