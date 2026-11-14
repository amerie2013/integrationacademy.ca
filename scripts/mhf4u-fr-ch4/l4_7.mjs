// MHF4U-FR 4.7 — Révision du chapitre 4 : radians, angles remarquables, expressions équivalentes, formules d'addition
// et de l'angle double, identités
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, ARM, SECTOR, TG } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.7 Révision du chapitre 4";
export const ID = lessonId(4, 7);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 4 — Trigonométrie",
    overview: S`Cette page rassemble le chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, une pratique variée, une liste de vérification et un niveau difficile. Essaie chaque exemple avant d'ouvrir sa solution.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "convertir des angles et résoudre des problèmes de longueur d'arc;",
      "évaluer des rapports de façon exacte aux angles remarquables;",
      "appliquer les expressions équivalentes et les formules d'addition et de l'angle double;",
      "démontrer des identités et réfuter des affirmations fausses.",
    ],
    curriculum: "B1.1–B1.4, B3.1–B3.3 (tout le chapitre)",
    prior: [
      [S`\(135^\circ\) en radians?`, S`\(\frac{3\pi}4\).`],
      [S`\(\sin\left(\frac\pi2-x\right)\)?`, S`\(\cos x\).`],
      [S`\(\cos2x\) en fonction de \(\sin x\)?`, S`\(1-2\sin^2x\).`],
    ],
    words: [
      ["Radian", "longueur d'arc ÷ rayon", ""],
      ["Angle de référence", "angle aigu avec l'axe des x", ""],
      ["Cofonction", "paires liées par π/2 − x", ""],
      ["Identité", "vraie pour toute valeur permise", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["4.1 Radians", "π rad = 180°; s = rθ", "\\(120^\\circ=\\frac{2\\pi}3\\)", "θ doit être en radians"],
    ["4.2 Angles remarquables", "quadrant, angle de référence, règle CAST", "\\(\\cos\\frac{2\\pi}3=-\\frac12\\)", "csc va avec sin"],
    ["4.3 Expressions équivalentes", "symétrie du cercle", "\\(\\cos(\\pi-x)=-\\cos x\\)", "seuls π/2 et 3π/2 changent le nom"],
    ["4.4 Angles composés", "sin garde le signe; cos l'inverse", "\\(\\cos\\frac\\pi{12}=\\frac{\\sqrt6+\\sqrt2}4\\)", "le sinus ne se distribue pas"],
    ["4.5 Angles doubles", "trois formes de cos 2x", "\\(\\sin2x=2\\sin x\\cos x\\)", "sin 2x ≠ 2 sin x"],
    ["4.6 Identités", "un membre à la fois", "\\(1+\\tan^2x=\\sec^2x\\)", "ne fais rien passer de l'autre côté du ="],
  ])),

  section("📌 Exploration", S`<p>Utilise le vérificateur d'identités pour tester les formules de l'angle double et pour constater que les deux membres d'une identité vraie tracent la même courbe.</p>`),

  widget("ibIdentity", { init: [3, 50] }),

  section("📌 Vue d'ensemble", keyIdea(S`Tout ce chapitre est la géométrie d'un seul cercle. Les radians mesurent le long du cercle, les rapports lisent ses coordonnées, les expressions équivalentes viennent de sa symétrie et les formules d'addition viennent des distances sur ce cercle.`)),

  examples([
    ["Un problème de secteur", S`Un secteur d'un cercle de rayon 9 cm a une longueur d'arc de \(6\pi\) cm. Trouve l'angle en radians et en degrés, ainsi que l'aire.`,
      [S`<b>Angle.</b> \(s=r\theta\), donc \(\theta=\frac sr=\frac{6\pi}9=\frac{2\pi}3\).`,
        S`<b>Degrés.</b> \(\frac{2\pi}3\times\frac{180}\pi=120^\circ\).`,
        S`<b>Aire.</b> \(A=\frac12r^2\theta=\frac12(81)\frac{2\pi}3=27\pi\) cm².`,
        S`<b>Vérification.</b> \(120^\circ\) représente un tiers de tour, et \(\frac13\pi(9)^2=27\pi\) ✓`],
      S`\(\frac{2\pi}3\), \(120^\circ\), \(27\pi\) cm²`,
      plane(SECTOR(9, (2 * Math.PI) / 3))],
    ["Évaluation exacte", S`Évalue \(\sec\dfrac{4\pi}3+\tan\dfrac{3\pi}4\).`,
      [S`<b>Sécante.</b> \(\frac{4\pi}3\) est dans le quadrant 3, avec un angle de référence de \(\frac\pi3\), donc \(\cos\frac{4\pi}3=-\frac12\). La réciproque vaut \(-2\).`,
        S`<b>Tangente.</b> \(\frac{3\pi}4\) est dans le quadrant 2, avec un angle de référence de \(\frac\pi4\), et la tangente y est négative : \(-1\).`,
        S`<b>Additionner.</b> \(-2+(-1)=-3\).`,
        S`<b>Vérification.</b> En décimales : \(\frac1{\cos240^\circ}+\tan135^\circ=-2-1\) ✓`],
      S`\(-3\)`,
      plane(UC(240, "4π/3"))],
    ["Angle composé avec des rapports donnés", S`\(\sin a=\dfrac{12}{13}\) dans le quadrant 2 et \(\cos b=\dfrac45\) dans le quadrant 4. Trouve \(\cos(a+b)\).`,
      [S`<b>Rapports manquants.</b> \(a\) est dans le quadrant 2, donc \(\cos a=-\frac5{13}\). \(b\) est dans le quadrant 4, donc \(\sin b=-\frac35\).`,
        S`<b>Formule.</b> \(\cos(a+b)=\cos a\cos b-\sin a\sin b\).`,
        S`<b>Substituer.</b> \(\left(-\frac5{13}\right)\frac45-\frac{12}{13}\left(-\frac35\right)=-\frac{20}{65}+\frac{36}{65}\).`,
        S`<b>Regrouper.</b> \(\frac{16}{65}\).`,
        S`<b>Vérification.</b> \(a\approx1.966\), \(b\approx-0.644\) : \(\cos1.322\approx0.246\), et \(\frac{16}{65}\approx0.246\) ✓`],
      S`\(\dfrac{16}{65}\)`,
      plane(ARM(-5, 12, "a : (−5, 12)"))],
    ["Angle double", S`\(\cos x=-\dfrac7{25}\) dans le quadrant 3. Trouve \(\sin2x\) et \(\cos2x\).`,
      [S`<b>D'abord le sinus.</b> \(\sin^2x=1-\frac{49}{625}=\frac{576}{625}\). Dans le quadrant 3, le sinus est négatif : \(\sin x=-\frac{24}{25}\).`,
        S`<b>Sinus du double.</b> \(2\left(-\frac{24}{25}\right)\left(-\frac7{25}\right)=\frac{336}{625}\).`,
        S`<b>Cosinus du double.</b> \(2\cos^2x-1=2\cdot\frac{49}{625}-1=\frac{98-625}{625}=-\frac{527}{625}\).`,
        S`<b>Vérification.</b> \(336^2+527^2=112896+277729=390625=625^2\) ✓`],
      S`\(\frac{336}{625},\ -\frac{527}{625}\)`,
      plane(ARM(-7, -24, "(−7, −24)"))],
    ["Une identité", S`Démontre que \(\dfrac{\sin2x}{\sin x}-\dfrac{\cos2x}{\cos x}=\sec x\).`,
      [S`<b>Première fraction.</b> \(\dfrac{2\sin x\cos x}{\sin x}=2\cos x\).`,
        S`<b>Deuxième fraction.</b> Utilise \(\cos2x=2\cos^2x-1\), puisque le résultat ne doit contenir que des cosinus : \(\text{MG}=2\cos x-\dfrac{2\cos^2x-1}{\cos x}\).`,
        S`<b>Dénominateur commun.</b> \(\dfrac{2\cos^2x-2\cos^2x+1}{\cos x}=\dfrac1{\cos x}=\text{MD}\).`,
        S`<b>Test.</b> \(x=\frac\pi3\) : \(\frac{\sqrt3/2}{\sqrt3/2}-\frac{-1/2}{1/2}=1+1=2=\sec\frac\pi3\) ✓`],
      S`\(\text{MG}=\text{MD}\)`,
      plane(TG([[(x) => 1 / Math.cos(x), "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -1, ymax: 6 }))],
  ]),

  practice([
    q("radians", S`Une roue de rayon 0.4 m tourne de \(5\pi\) rad. Quelle distance, en mètres, un point de la jante parcourt-il (au centième près)?`, num(6.28, 0.01),
      "s = rθ.", [S`\(0.4\times5\pi=2\pi\).`], S`\(6.28\)`),
    q("angles remarquables", S`Évalue \(\sin\dfrac{7\pi}6\cos\dfrac{5\pi}3\).`, num(-0.25, 0.001),
      "Trouve chaque valeur.", [S`\(-\frac12\cdot\frac12\).`], S`\(-0.25\)`),
    q("équivalence", S`Laquelle est égale à \(\sin\left(\dfrac\pi2+x\right)\)?`, choice([S`\(\cos x\)`, S`\(-\cos x\)`, S`\(\sin x\)`, S`\(-\sin x\)`], 0),
      "Quart de tour.", [S`\(\cos x\).`], S`\(\cos x\)`),
    q("addition", S`Évalue \(\cos\dfrac{3\pi}8\cos\dfrac\pi8+\sin\dfrac{3\pi}8\sin\dfrac\pi8\) (4 décimales).`, num(0.7071, 0.001),
      "cos(a − b).", [S`\(\cos\frac\pi4\).`], S`\(0.7071\)`),
    q("angle double", S`\(\sin x=0.8\). Trouve \(\cos2x\).`, num(-0.28, 0.001),
      "1 − 2sin²x.", [S`\(1-1.28\).`], S`\(-0.28\)`),
  ]),

  ...hard([
    ["Un rapport en plusieurs étapes", S`\(\tan x=-\dfrac34\) avec \(\dfrac{3\pi}2\lt x\lt2\pi\). Trouve la valeur exacte de \(\sin\left(x+\dfrac\pi6\right)\).`,
      [S`Quadrant 4 : \(\sin x=-\frac35\), \(\cos x=\frac45\).`, S`\(\sin x\cos\frac\pi6+\cos x\sin\frac\pi6=-\frac35\cdot\frac{\sqrt3}2+\frac45\cdot\frac12\).`],
      S`\(\dfrac{4-3\sqrt3}{10}\)`,
      plane(ARM(4, -3, "(4, −3)"))],
    ["Une identité plus longue", S`Démontre que \(\dfrac{1+\sin2x+\cos2x}{1+\sin2x-\cos2x}=\cot x\).`,
      [S`Numérateur : \(1+\cos2x+\sin2x=2\cos^2x+2\sin x\cos x=2\cos x(\cos x+\sin x)\).`, S`Dénominateur : \(1-\cos2x+\sin2x=2\sin^2x+2\sin x\cos x=2\sin x(\sin x+\cos x)\).`, S`Le quotient est \(\frac{\cos x}{\sin x}=\cot x=\text{MD}\).`],
      S`\(\text{MG}=\text{MD}\)`],
  ], [
    q("difficile", S`\(\sin x+\cos x=\dfrac43\). Trouve \(\sin2x\) (4 décimales).`, num(0.7778, 0.001),
      "Élève les deux membres au carré.", [S`\(1+\sin2x=\frac{16}9\), donc \(\sin2x=\frac79\).`], S`\(0.7778\)`),
    q("difficile", S`Deux poulies sont reliées par une courroie. Leurs rayons sont 6 cm et 18 cm. La grande fait 2 tours. De combien de radians la petite tourne-t-elle (au centième près)?`, num(37.7, 0.01),
      "Longueurs d'arc égales.", [S`\(18\times4\pi=6\theta\), donc \(\theta=12\pi\approx37.70\).`], S`\(37.70\)`),
    q("difficile", S`Évalue \(\sin\dfrac\pi{12}\cos\dfrac\pi{12}\).`, num(0.25, 0.001),
      "La moitié de sin 2x.", [S`\(\frac12\sin\frac\pi6=\frac14\).`], S`\(0.25\)`),
  ]),

  section("✅ Prêt pour le test?", S`<ul>
    <li>Je peux convertir des degrés en radians et inversement, et utiliser \(s=r\theta\).</li>
    <li>Je peux donner les rapports exacts des angles remarquables dans n'importe quel quadrant, y compris csc, sec et cot.</li>
    <li>Je peux écrire des expressions équivalentes à l'aide de \(\frac\pi2-x\), \(\pi\pm x\), \(2\pi-x\) et \(-x\).</li>
    <li>Je peux utiliser les formules d'addition et de l'angle double, avec les bons signes selon le quadrant.</li>
    <li>Je peux démontrer des identités en travaillant un membre à la fois, et réfuter des affirmations à l'aide d'un contre-exemple.</li>
  </ul>`),

  wrapUp({
    qas: [
      ["Que dois-je mémoriser?", "Les valeurs remarquables, l'identité de Pythagore et les formules de somme. Le reste se retrouve rapidement."],
      ["Quelle est l'erreur la plus fréquente?", "Les signes selon le quadrant quand on cherche un rapport manquant, et traiter le sinus comme s'il se distribuait."],
      ["Comment vérifier rapidement une identité?", "Substitue une valeur non remarquable, comme x = 1, dans les deux membres."],
      ["Dois-je donner des valeurs décimales?", "Utilise des valeurs exactes, sauf si la question demande des décimales."],
      ["Quelle est la suite?", "Les graphiques des fonctions trigonométriques, en radians, au chapitre 5."],
    ],
    summary: [
      "π rad = 180°; s = rθ.",
      "Quadrant + angle de référence + règle CAST.",
      "Les formules d'addition et de l'angle double donnent de nouvelles valeurs exactes.",
      "Démontre en travaillant un membre à la fois.",
    ],
    next: "Le chapitre 5 porte sur les graphiques des fonctions trigonométriques et la résolution d'équations trigonométriques.",
  }),
];
