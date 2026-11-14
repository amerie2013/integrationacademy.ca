// MCV4U-FR 4.5 — Révision du chapitre 4 : pentes des sinusoïdes, dérivées de sin et cos, règle de dérivation en chaîne
// pour les sinusoïdes et applications, avec exemples à plusieurs étapes, pratique mixte, liste de vérification et niveau difficile
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "4.5 Révision du chapitre 4";
export const ID = lessonId(4, 5);

const S = String.raw;
const PI = Math.PI;
const tr = (t) => 100 * Math.sin(t) * (1 + Math.cos(t));
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 4 — Dérivées des fonctions sinusoïdales",
    overview: S`Cette page rassemble le chapitre avant l'évaluation. Tout repose sur deux résultats — \((\sin x)'=\cos x\) et \((\cos x)'=-\sin x\), en radians — combinés aux règles du produit, du quotient et de dérivation en chaîne. Grâce à eux, tu peux trouver les tangentes, les extremums et les points d'inflexion de fonctions trigonométriques, ainsi que la vitesse, l'accélération et la variation la plus rapide de modèles périodiques. Chaque exemple ci-dessous combine plusieurs habiletés.`,
    goals: [
      "se rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "dériver des fonctions trigonométriques avec chacune des règles;",
      "trouver les tangentes, les extremums et les points d'inflexion de fonctions trigonométriques;",
      "analyser des mouvements et des modèles périodiques;",
      "résoudre des problèmes d'optimisation avec des angles.",
    ],
    curriculum: "A2.4, A3.3–A3.5, B2 (tout le chapitre)",
    prior: [
      [S`\((\cos x)'\) ?`, S`\(-\sin x\).`],
      [S`\((\sin 4x)'\) ?`, S`\(4\cos4x\).`],
      [S`\((\tan x)'\) ?`, S`\(\sec^2x\).`],
    ],
    words: [
      ["Mesure en radians", "nécessaire pour ces dérivées", ""],
      ["Cycle des dérivées", "sin → cos → −sin → −cos", "période 4"],
      ["Règle de dérivation en chaîne", "\\((\\sin g)'=g'\\cos g\\)", ""],
      ["MHS", "\\(a=-\\omega^2 s\\)", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["4.1 Taux de variation", "les pentes de sin x se trouvent sur cos x", "pente nulle en π/2", "calculatrice en radians"],
    ["4.2 sin et cos", "(sin x)′ = cos x, (cos x)′ = −sin x", "(x sin x)′ = sin x + x cos x", "signe moins pour le cosinus"],
    ["4.3 Règle de dérivation en chaîne", "(A sin(kx + c) + d)′ = Ak cos(kx + c)", "(sin² x)′ = sin 2x", "sin² x ≠ sin(x²)"],
    ["4.4 Applications", "v = s′, a = s″; a = −ω² s", "vitesse maximale Aω", "ω = 2π/période"],
  ])),

  section("📌 Explorer", S`<p>Utilise l'explorateur de sinusoïdes pour vérifier les dérivées obtenues par la règle de dérivation en chaîne ci-dessous : règle \(A\), \(k\), \(c\) et \(d\) pour correspondre à une fonction, puis compare la pente de la tangente avec ta réponse.</p>`),

  widget("sinusoidRuleLab", { init: { A: -1.5, k: 2, c: 0.5, d: 1, x: 1, fn: "cos" } }),

  section("📌 Vue d'ensemble", keyIdea(S`Traite le sinus et le cosinus comme n'importe quelles autres fonctions : les deux dérivées de base, avec les règles du produit, du quotient et de dérivation en chaîne, permettent de tout faire. Utilise ensuite les outils habituels — nombres critiques, tableaux de signes, dérivée seconde — sur le résultat.`)),

  examples([
    ["Une tangente horizontale", S`Trouve la tangente à \(y=2\sin x-\cos(2x)\) en \(x=\frac\pi2\).`,
      [S`\(y\left(\frac\pi2\right)=2-\cos\pi=3\).`, S`\(y'=2\cos x+2\sin(2x)\); \(y'\left(\frac\pi2\right)=0+0=0\).`],
      S`\(y=3\), une tangente horizontale (un maximum de la courbe)`,
      plane({ view: { xmin: -0.5, xmax: 6.8, ymin: -3.5, ymax: 3.5 }, curves: [{ f: (x) => 2 * Math.sin(x) - Math.cos(2 * x), color: "violet" }, { f: () => 3, a: 0.8, b: 2.4, color: "green" }], points: [{ x: PI / 2, y: 3, label: "(π/2, 3)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Une dérivée seconde", S`Pour \(f(x)=x\sin x\), trouve \(f''(x)\) et \(f''(\pi)\).`,
      [S`\(f'=\sin x+x\cos x\).`, S`\(f''=\cos x+\cos x-x\sin x=2\cos x-x\sin x\).`],
      S`\(f''(x)=2\cos x-x\sin x\); \(f''(\pi)=-2\)`],
    ["Extremums absolus", S`Trouve les extremums absolus de \(f(x)=x-2\sin x\) sur \([0,2\pi]\).`,
      [S`\(f'(x)=1-2\cos x=0\Rightarrow x=\frac\pi3,\ \frac{5\pi}3\).`, S`\(f(0)=0\), \(f\left(\frac\pi3\right)=\frac\pi3-\sqrt3\approx-0.685\), \(f\left(\frac{5\pi}3\right)=\frac{5\pi}3+\sqrt3\approx6.968\), \(f(2\pi)\approx6.283\).`],
      S`minimum absolu \(\approx-0.685\) en \(\frac\pi3\); maximum absolu \(\approx6.968\) en \(\frac{5\pi}3\)`,
      plane({ view: { xmin: -0.3, xmax: 7.6, ymin: -1.5, ymax: 8 }, curves: [{ f: (x) => x - 2 * Math.sin(x), a: 0, b: 2 * PI, color: "violet" }], points: [{ x: PI / 3, y: PI / 3 - Math.sqrt(3), label: "min", color: "blue" }, { x: (5 * PI) / 3, y: (5 * PI) / 3 + Math.sqrt(3), label: "max", color: "red" }, { x: 2 * PI, y: 2 * PI, label: "(2π, 6.28)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["Points d'inflexion", S`Montre que \(f(x)=x+\cos x\) est croissante, et trouve ses points d'inflexion sur \([0,2\pi]\).`,
      [S`\(f'(x)=1-\sin x\ge0\) : croissante (pente nulle seulement là où \(\sin x=1\)).`, S`\(f''(x)=-\cos x\) : change de signe en \(\frac\pi2\) et en \(\frac{3\pi}2\).`],
      S`croissante partout; points d'inflexion \(\left(\frac\pi2,\frac\pi2\right)\) et \(\left(\frac{3\pi}2,\frac{3\pi}2\right)\)`,
      plane({ view: { xmin: -0.3, xmax: 6.7, ymin: -0.5, ymax: 7.5 }, curves: [{ f: (x) => x + Math.cos(x), a: 0, b: 2 * PI, color: "violet" }, { f: (x) => x, a: 0, b: 2 * PI, color: "gray" }], points: [{ x: PI / 2, y: PI / 2, label: "inflexion", color: "violet" }, { x: (3 * PI) / 2, y: (3 * PI) / 2, label: "inflexion", color: "violet" }], step: { x: 0.5, y: 1 } })],
    ["Une marée", S`La hauteur de la marée est \(h(t)=1.5\cos\left(\frac\pi6t\right)+4\) m, \(t\) heures après la marée haute. À quelle vitesse l'eau baisse-t-elle 2 heures après la marée haute ?`,
      [S`\(h'(t)=-1.5\cdot\frac\pi6\sin\left(\frac\pi6t\right)=-\frac\pi4\sin\left(\frac\pi6t\right)\).`, S`\(h'(2)=-\frac\pi4\cdot\frac{\sqrt3}2\approx-0.680\) m/h.`],
      S`elle baisse d'environ 0.68 m par heure`],
  ]),

  practice([
    q("chaîne", S`Pour \(y=\sin(4x)\), trouve \(y'(0)\).`, num(4),
      "4 cos 4x.", [S`\(4\).`], S`\(4\)`),
    q("puissance", S`Pour \(f(x)=\cos^2x\), trouve \(f'\!\left(\frac\pi4\right)\).`, num(-1),
      "−2 cos x sin x = −sin 2x.", [S`\(-\sin\frac\pi2\).`], S`\(-1\)`),
    q("tangente", S`Trouve la pente de \(y=\tan x\) en \(x=0\).`, num(1),
      "sec² x.", [S`\(\sec^20=1\).`], S`\(1\)`),
    q("mouvement", S`Pour \(s(t)=6\cos(2t)\), trouve le module maximal de la vitesse.`, num(12),
      "|Aω|.", [S`\(6\times2\).`], S`\(12\)`),
    q("cycle", S`Quelle est la 7e dérivée de \(\cos x\) ?`, choice([S`\(\sin x\)`, S`\(-\sin x\)`, S`\(\cos x\)`, S`\(-\cos x\)`], 0),
      "7 = 4 + 3 : trois étapes à partir de cos x.", [S`\(\cos\to-\sin\to-\cos\to\sin\).`], S`\(\sin x\)`),
  ]),

  section("📌 Suis-je prêt pour l'évaluation ?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["4.1", "Je peux estimer et décrire les pentes des graphiques du sinus et du cosinus."],
      ["4.2", "Je peux dériver sin x, cos x et tan x avec les règles de la somme, du produit et du quotient."],
      ["4.3", "Je peux utiliser la règle de dérivation en chaîne pour sin(g(x)), cos(g(x)) et les puissances du sinus et du cosinus."],
      ["4.4", "Je peux résoudre des problèmes de mouvement, de taux et d'optimisation avec des modèles sinusoïdaux."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Un quotient qui se simplifie", S`Montre que \(\dfrac{d}{dx}\,\dfrac{\sin x}{1+\cos x}=\dfrac{1}{1+\cos x}\), puis trouve la pente en \(x=0\).`,
      [S`Règle du quotient : \(\frac{\cos x(1+\cos x)-\sin x(-\sin x)}{(1+\cos x)^2}=\frac{\cos x+\cos^2x+\sin^2x}{(1+\cos x)^2}\).`, S`\(=\frac{1+\cos x}{(1+\cos x)^2}=\frac1{1+\cos x}\). En 0 : \(\frac12\).`],
      S`dérivée \(\frac1{1+\cos x}\); pente \(\frac12\) en \(x=0\)`,
      plane({ view: { xmin: -2.8, xmax: 2.8, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sin(x) / (1 + Math.cos(x)), a: -2.8, b: 2.8, color: "violet" }, { f: (x) => 0.5 * x, a: -1.5, b: 1.5, color: "green" }], points: [{ x: 0, y: 0, label: "pente ½", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["La meilleure auge", S`Une auge a une base de 10 cm et deux côtés de 10 cm, chacun incliné vers l'extérieur d'un angle \(\theta\) par rapport à la verticale. Trouve \(\theta\) qui maximise l'aire de la section transversale.`,
      [S`Hauteur \(10\cos\theta\), débordement de chaque côté \(10\sin\theta\) : \(A=10\cdot10\cos\theta+10\sin\theta\cdot10\cos\theta\).`, S`\(A=100\cos\theta(1+\sin\theta)\); \(A'=100(-\sin\theta-\sin^2\theta+\cos^2\theta)=100(1-\sin\theta-2\sin^2\theta)=0\).`, S`\((1-2\sin\theta)(1+\sin\theta)=0\Rightarrow\sin\theta=\frac12\), \(\theta=\frac\pi6\); \(A=100\cdot\frac{\sqrt3}2\cdot\frac32\approx129.9\) cm².`],
      S`\(\theta=\frac\pi6\) (30°), aire d'environ 129.9 cm²`,
      plane({ view: { xmin: 0, xmax: 1.65, ymin: 0, ymax: 140 }, curves: [{ f: (t) => 100 * Math.cos(t) * (1 + Math.sin(t)), a: 0, b: PI / 2, color: "violet" }], points: [{ x: PI / 6, y: 129.9, label: "(π/6, 129.9)", color: "red" }], step: { x: 0.25, y: 20 }, xlabel: "θ (rad)", ylabel: "A (cm²)" })],
  ], [
    q("difficile", S`Pour \(y=\sin^3x\), trouve \(y'\!\left(\frac\pi6\right)\) (4 décimales).`, num(0.6495, 0.0005),
      "3 sin² x cos x.", [S`\(3\cdot\frac14\cdot\frac{\sqrt3}2\).`], S`\(0.6495\)`),
    q("difficile", S`Combien de tangentes horizontales \(y=x+\sin(2x)\) a-t-elle sur \([0,\pi]\) ?`, num(2),
      "1 + 2 cos 2x = 0.", [S`\(2x=\frac{2\pi}3,\frac{4\pi}3\).`], S`\(2\)`),
    q("difficile", S`Pour \(s(t)=2\sin(3t)\), quelle est la plus grande valeur absolue de l'accélération ?`, num(18),
      "a = −18 sin(3t).", [S`\(A\omega^2=2\cdot9\).`], S`\(18\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment étudier pour cette évaluation ?", "Fais la pratique mixte et le niveau difficile sans tes notes, puis vérifie chaque dérivée avec les explorateurs."],
      ["Quelles sont les erreurs les plus fréquentes ?", "Oublier le signe moins de (cos x)′, oublier la dérivée intérieure, confondre sin² x et sin(x²), et travailler en degrés."],
      ["Comment trouver des valeurs exactes ?", "Utilise les angles remarquables : sin(π/6) = ½, cos(π/6) = √3/2, sin(π/4) = cos(π/4) = √2/2."],
      ["Comment vérifier une réponse ?", "Trace la fonction et estime la pente de la tangente, ou évalue un quotient de différence avec h = 0.001."],
      ["Comment ce chapitre mène-t-il au chapitre 5 ?", "Le chapitre 5 établit les dérivées des fonctions exponentielles et logarithmiques — les autres grands modèles de croissance."],
    ],
    summary: [
      "(sin x)′ = cos x, (cos x)′ = −sin x.",
      "Règle de dérivation en chaîne pour toute fonction intérieure.",
      "Utilise les outils du calcul différentiel sur le résultat.",
      "Modèles : taux maximal |Aω|, a = −ω² s.",
    ],
    next: "Fais l'évaluation du chapitre 4. Au chapitre 5, on dérive les fonctions exponentielles.",
  }),
];
