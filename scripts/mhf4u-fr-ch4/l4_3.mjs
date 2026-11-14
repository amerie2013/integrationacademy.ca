// MHF4U-FR 4.3 — Expressions trigonométriques équivalentes : relations des angles complémentaires, supplémentaires,
// opposés et du demi-tour, tirées de la symétrie du cercle trigonométrique
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, TG } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.3 Expressions trigonométriques équivalentes";
export const ID = lessonId(4, 3);

const S = String.raw;
const T = (d, l, more) => plane(UC(d, l, more));
export const blocks = () => [
  intro({
    icon: "🪞",
    title: "Expressions trigonométriques équivalentes",
    overview: S`La sinusoïde et la courbe du cosinus sont la même onde décalée de \(\frac\pi2\), et le cercle trigonométrique est symétrique par rapport aux deux axes et à la droite \(y=x\). Ces faits permettent d'écrire un même angle de plusieurs façons : \(\sin\left(\frac\pi2-x\right)\) est simplement \(\cos x\), et \(\cos(\pi+x)\) est simplement \(-\cos x\). Ces relations te permettent de simplifier des expressions et d'évaluer des rapports sans calculatrice.`,
    goals: [
      "utiliser les identités des angles complémentaires avec \\(\\frac\\pi2-x\\);",
      "utiliser les relations pour \\(\\pi-x\\), \\(\\pi+x\\), \\(2\\pi-x\\) et \\(-x\\);",
      "expliquer chaque relation à l'aide du cercle trigonométrique ou d'un graphique;",
      "évaluer un rapport à partir d'une valeur connue;",
      "simplifier des expressions combinées.",
    ],
    curriculum: "B3.1 (reconnaître des expressions trigonométriques équivalentes à l'aide du cercle trigonométrique et de graphiques)",
    prior: [
      [S`\(\sin\frac\pi6\) et \(\cos\frac\pi3\)?`, S`Les deux valent \(\frac12\).`],
      [S`Signe de \(\cos x\) dans le quadrant 2?`, S`Négatif.`],
      [S`Réfléchis \((a,b)\) par rapport à l'axe des x.`, S`\((a,-b)\).`],
    ],
    words: [
      ["Expressions équivalentes", "égales pour toute valeur de la variable", "\\(\\sin(-x)=-\\sin x\\)"],
      ["Cofonction", "sinus/cosinus, tangente/cotangente, sécante/cosécante", "\\(\\sin\\left(\\frac\\pi2-x\\right)=\\cos x\\)"],
      ["Fonction paire", "\\(f(-x)=f(x)\\)", "cosinus"],
      ["Fonction impaire", "\\(f(-x)=-f(x)\\)", "sinus, tangente"],
    ],
  }),

  section("📌 Les relations", S`
  ${table(["Angle", "sin", "cos", "tan", "Mouvement sur le cercle"], [
    ["−x", "−sin x", "cos x", "−tan x", "réflexion par rapport à l'axe des x"],
    ["π − x", "sin x", "−cos x", "−tan x", "réflexion par rapport à l'axe des y"],
    ["π + x", "−sin x", "−cos x", "tan x", "demi-tour"],
    ["2π − x", "−sin x", "cos x", "−tan x", "réflexion par rapport à l'axe des x"],
    ["π/2 − x", "cos x", "sin x", "cot x", "réflexion par rapport à y = x"],
    ["π/2 + x", "cos x", "−sin x", "−cot x", "quart de tour"],
  ])}
  ${plane(TG([[Math.sin, "violet"], [Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }), "cos x (en vert) est sin x (en violet) décalée de π/2 vers la gauche.")}
  ${keyIdea(S`Tu n'as pas besoin de mémoriser le tableau. Imagine \(x\) comme un petit angle du quadrant 1, trouve où tombe le nouvel angle, lis le signe avec la règle CAST et décide si le nom change : il change seulement avec \(\frac\pi2\) ou \(\frac{3\pi}2\).`)}`),

  section("📌 Exploration", S`<p>Règle l'angle à \(30^\circ\) et note les coordonnées. Passe ensuite à \(150^\circ\), \(210^\circ\) et \(330^\circ\) : les deux mêmes nombres apparaissent avec des signes différents. Compare maintenant \(30^\circ\) et \(60^\circ\) : les coordonnées s'échangent; c'est la relation des angles complémentaires.</p>`),

  widget("ibUnitCircle", { init: 150 }),

  section("📌 Tester une relation", S`
  <p>Pour vérifier une relation proposée, substitue un angle : \(\cos\left(\frac{3\pi}2-x\right)=-\sin x\) avec \(x=\frac\pi6\) donne \(\cos\frac{4\pi}3=-\frac12\) et \(-\sin\frac\pi6=-\frac12\). Une seule valeur peut réfuter une relation, mais seul le cercle ou une démonstration peut l'établir.</p>
  ${watchOut([
    "π − x conserve le sinus, pas le cosinus : sin(π − x) = sin x, mais cos(π − x) = −cos x.",
    "Seuls π/2 et 3π/2 changent le nom. π et 2π le conservent.",
    "cos(−x) = cos x : le cosinus ne tient pas compte du signe de l'angle.",
    "sin(x + π) n'est pas sin x + sin π en général; le sinus ne se distribue pas.",
    "Les relations sont vraies pour toute valeur de x, pas seulement pour les angles aigus.",
  ])}`),

  examples([
    ["Utiliser une cofonction", S`Sachant que \(\sin\dfrac\pi5\approx0.5878\), trouve \(\cos\dfrac{3\pi}{10}\) sans calculatrice.`,
      [S`<b>Chercher la relation.</b> Les angles sont peut-être complémentaires; additionne-les : \(\frac\pi5+\frac{3\pi}{10}=\frac{2\pi+3\pi}{10}=\frac\pi2\). Ils le sont.`,
        S`<b>Réécrire.</b> Donc \(\frac{3\pi}{10}=\frac\pi2-\frac\pi5\).`,
        S`<b>Appliquer.</b> \(\cos\left(\frac\pi2-x\right)=\sin x\), donc \(\cos\frac{3\pi}{10}=\sin\frac\pi5\).`,
        S`<b>Vérification.</b> En degrés, \(\cos54^\circ\approx0.5878\) ✓`],
      S`\(\approx0.5878\)`,
      T(54, "3π/10")],
    ["Simplifier une somme", S`Simplifie \(\cos(\pi-x)+\sin\left(\dfrac\pi2-x\right)\).`,
      [S`<b>Premier terme.</b> La réflexion par rapport à l'axe des y change le signe de l'abscisse : \(\cos(\pi-x)=-\cos x\).`,
        S`<b>Deuxième terme.</b> Pour des angles complémentaires, le nom change : \(\sin\left(\frac\pi2-x\right)=\cos x\).`,
        S`<b>Additionner.</b> \(-\cos x+\cos x=0\).`,
        S`<b>Vérification.</b> \(x=0\) : \(\cos\pi+\sin\frac\pi2=-1+1=0\) ✓`],
      S`\(0\)`,
      plane(TG([[(x) => Math.cos(Math.PI - x), "violet"], [(x) => Math.sin(Math.PI / 2 - x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))],
    ["Une valeur remarquable écrite sous la forme 2π − x", S`Écris \(\sin\dfrac{11\pi}6\) à l'aide de \(2\pi-x\) et évalue-le.`,
      [S`<b>Réécrire.</b> \(2\pi=\frac{12\pi}6\), donc \(\frac{11\pi}6=2\pi-\frac\pi6\).`,
        S`<b>Appliquer.</b> \(2\pi-x\) réfléchit \(x\) par rapport à l'axe des x, donc \(\sin(2\pi-x)=-\sin x\).`,
        S`<b>Évaluer.</b> \(-\sin\frac\pi6=-\frac12\).`,
        S`<b>Vérification.</b> L'angle est dans le quadrant 4, où le sinus est négatif ✓`],
      S`\(-\dfrac12\)`,
      T(330, "11π/6")],
    ["Un produit", S`Montre que \(\tan\left(\dfrac\pi2-x\right)\tan x=1\) lorsque les deux facteurs sont définis.`,
      [S`<b>Premier facteur.</b> Pour des angles complémentaires, le nom change : \(\tan\left(\frac\pi2-x\right)=\cot x\).`,
        S`<b>Réciproque.</b> \(\cot x=\dfrac1{\tan x}\).`,
        S`<b>Multiplier.</b> \(\dfrac1{\tan x}\cdot\tan x=1\).`,
        S`<b>Vérification.</b> \(x=\frac\pi6\) : \(\tan\frac\pi3\tan\frac\pi6=\sqrt3\cdot\frac1{\sqrt3}=1\) ✓`],
      S`le produit vaut \(1\)`,
      plane(TG([[(x) => Math.tan(Math.PI / 2 - x) * Math.tan(x), "violet"]], { xmin: -3, xmax: 3, ymin: -1, ymax: 3 }))],
    ["Une nouvelle relation", S`Trouve une expression équivalente à \(\cos\left(\dfrac{3\pi}2-x\right)\) à l'aide du cercle, puis teste-la.`,
      [S`<b>Signe.</b> Prends \(x\) petit dans le quadrant 1. Alors \(\frac{3\pi}2-x\) est dans le quadrant 3, où le cosinus est négatif.`,
        S`<b>Nom.</b> Un multiple impair de \(\frac\pi2\) échange le sinus et le cosinus, donc le résultat utilise \(\sin x\).`,
        S`<b>Relation.</b> Ensemble, ces deux faits donnent \(-\sin x\).`,
        S`<b>Test.</b> \(x=\frac\pi6\) : \(\cos\frac{4\pi}3=-\frac12\) et \(-\sin\frac\pi6=-\frac12\) ✓`],
      S`\(-\sin x\)`,
      T(240, "4π/3")],
  ]),

  practice([
    q("cofonction", S`Sachant que \(\cos\dfrac\pi8\approx0.9239\), trouve \(\sin\dfrac{3\pi}8\) (4 décimales).`, num(0.9239, 0.0001),
      "π/2 − π/8.", [S`\(\frac\pi2-\frac\pi8=\frac{3\pi}8\), donc les valeurs sont égales.`], S`\(0.9239\)`),
    q("relation", S`Quelle expression est égale à \(\sin(\pi+x)\)?`, choice([S`\(-\sin x\)`, S`\(\sin x\)`, S`\(\cos x\)`, S`\(-\cos x\)`], 0),
      "Demi-tour : les deux coordonnées changent de signe.", [S`\(-\sin x\).`], S`\(-\sin x\)`),
    q("relation", S`Quelle expression est égale à \(\cos(-x)\)?`, choice([S`\(\cos x\)`, S`\(-\cos x\)`, S`\(\sin x\)`, S`\(-\sin x\)`], 0),
      "Le cosinus est une fonction paire.", [S`\(\cos x\).`], S`\(\cos x\)`),
    q("valeur", S`Si \(\sin x=0.6\), trouve \(\sin(\pi-x)\).`, num(0.6),
      "π − x conserve le sinus.", [S`\(\sin(\pi-x)=\sin x\).`], S`\(0.6\)`),
    q("valeur", S`Si \(\tan x=2.5\), trouve \(\cot\left(\dfrac\pi2-x\right)\).`, num(2.5),
      "La cofonction de cot est tan.", [S`\(\cot\left(\frac\pi2-x\right)=\tan x\).`], S`\(2.5\)`),
  ]),

  ...hard([
    ["Quatre relations à la fois", S`Simplifie \(\sin(\pi-x)\cos\left(\dfrac\pi2-x\right)-\cos(\pi+x)\cos(-x)\).`,
      [S`\(\sin(\pi-x)=\sin x\) et \(\cos\left(\frac\pi2-x\right)=\sin x\) : le premier produit est \(\sin^2x\).`, S`\(\cos(\pi+x)=-\cos x\) et \(\cos(-x)=\cos x\) : le deuxième produit est \(-\cos^2x\).`, S`\(\sin^2x-(-\cos^2x)=\sin^2x+\cos^2x=1\).`],
      S`\(1\)`],
    ["En fonction de a", S`\(\sin x=a\), où \(0\lt x\lt\dfrac\pi2\). Exprime \(\cos\left(\dfrac\pi2+x\right)\) et \(\cos(\pi-x)\) en fonction de \(a\).`,
      [S`\(\cos\left(\frac\pi2+x\right)=-\sin x=-a\).`, S`\(\cos x=\sqrt{1-a^2}\), puisque \(x\) est dans le quadrant 1, donc \(\cos(\pi-x)=-\cos x=-\sqrt{1-a^2}\).`],
      S`\(-a\) et \(-\sqrt{1-a^2}\)`,
      T(40, "(cos x, a)")],
  ], [
    q("difficile", S`Si \(\cos x=0.28\), trouve \(\sin\left(\dfrac\pi2-x\right)\).`, num(0.28),
      "Cofonction.", [S`\(\sin\left(\frac\pi2-x\right)=\cos x\).`], S`\(0.28\)`),
    q("difficile", S`Si \(\cos x=0.6\), trouve \(\cos(\pi+x)+\cos(2\pi-x)\).`, num(0),
      "Applique chaque relation.", [S`\(-0.6+0.6=0\).`], S`\(0\)`),
    q("difficile", S`Si \(\sin x=0.25\), trouve \(\sec\left(\dfrac\pi2-x\right)\).`, num(4),
      "sec vaut 1/cos.", [S`\(\cos\left(\frac\pi2-x\right)=\sin x=0.25\), donc la sécante vaut 4.`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi parle-t-on de cofonction?", "Le cosinus est le sinus de l'angle complémentaire : le préfixe « co » vient de « complément »."],
      ["Pourquoi le cosinus est-il pair, mais le sinus impair?", "La réflexion par rapport à l'axe des x change le signe de l'angle. L'abscisse reste la même et l'ordonnée change de signe."],
      ["Comment me rappeler si le nom change?", "Les angles sur l'axe vertical (π/2, 3π/2) changent le nom. Les angles sur l'axe horizontal (π, 2π) le conservent."],
      ["Comment trouver le signe?", "Fais comme si x était un petit angle du quadrant 1 et applique la règle CAST au nouvel angle."],
      ["Est-ce la même chose que des identités?", "Oui : chacune est vraie pour toute valeur de x où les deux membres sont définis."],
    ],
    summary: [
      "sin(π/2 − x) = cos x; cos(π/2 − x) = sin x; tan(π/2 − x) = cot x.",
      "sin(π − x) = sin x; cos(π − x) = −cos x.",
      "sin(π + x) = −sin x; cos(π + x) = −cos x.",
      "sin(−x) = −sin x; cos(−x) = cos x.",
    ],
    next: "En 4.4, tu établiras des formules pour le sinus et le cosinus de la somme ou de la différence de deux angles quelconques.",
  }),
];
