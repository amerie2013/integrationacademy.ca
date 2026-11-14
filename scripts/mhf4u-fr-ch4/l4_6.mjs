// MHF4U-FR 4.6 — Démonstration d'identités trigonométriques : identités du quotient, réciproques et de Pythagore;
// travailler un membre à la fois; démonstrations avec les formules d'addition et de l'angle double; contre-exemple
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { TG } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.6 Démonstration d'identités trigonométriques";
export const ID = lessonId(4, 6);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧾",
    title: "Démonstration d'identités trigonométriques",
    overview: S`Une identité est une équation vraie pour toute valeur où les deux membres sont définis. Une démonstration le prouve à l'aide de faits connus. Travaille chaque membre séparément, sans jamais faire passer de termes de l'autre côté du signe égal, car cela supposerait ce que tu cherches à démontrer. Un graphique peut suggérer une identité; seul un raisonnement algébrique l'établit, tandis qu'une seule valeur qui ne fonctionne pas suffit à la réfuter.`,
    goals: [
      "utiliser les identités réciproques, les identités du quotient et les identités de Pythagore;",
      "démontrer une identité en travaillant chaque membre séparément;",
      "utiliser des dénominateurs communs et la factorisation dans une démonstration;",
      "utiliser les formules d'addition et de l'angle double dans une démonstration;",
      "réfuter un énoncé faux à l'aide d'un contre-exemple.",
    ],
    curriculum: "B3.3 (démontrer des identités trigonométriques à l'aide des identités réciproques, du quotient, de Pythagore, d'addition et de l'angle double)",
    prior: [
      [S`\(\tan x\) en fonction du sinus et du cosinus?`, S`\(\frac{\sin x}{\cos x}\).`],
      [S`Factorise \(1-\cos^2x\).`, S`\((1-\cos x)(1+\cos x)\).`],
      [S`\(\sin2x\)?`, S`\(2\sin x\cos x\).`],
    ],
    words: [
      ["Identité", "vraie pour toutes les valeurs du domaine", "\\(\\sin^2x+\\cos^2x=1\\)"],
      ["MG, MD", "membre de gauche, membre de droite", ""],
      ["Contre-exemple", "une valeur qui rend un énoncé faux", ""],
    ],
  }),

  section("📌 La trousse d'outils", S`
  ${table(["Type", "Identités"], [
    ["Réciproques", "csc x = 1/sin x, sec x = 1/cos x, cot x = 1/tan x"],
    ["Quotient", "tan x = sin x / cos x, cot x = cos x / sin x"],
    ["Pythagore", "sin²x + cos²x = 1, 1 + tan²x = sec²x, 1 + cot²x = csc²x"],
    ["Angle double", "sin 2x = 2 sin x cos x; cos 2x = cos²x − sin²x"],
    ["Addition", "sin(a ± b), cos(a ± b), tan(a ± b)"],
  ])}
  ${keyIdea(S`Une démarche fiable : (1) commence par le membre le plus compliqué; (2) récris tout en sinus et cosinus; (3) trouve des dénominateurs communs ou factorise; (4) cherche \(\sin^2x+\cos^2x\); (5) arrête-toi quand les deux membres sont identiques et écris \(\text{MG}=\text{MD}\).`)}`),

  section("📌 Exploration", S`<p>Choisis une identité et fais glisser \(x\). Les deux membres restent égaux pour chaque valeur, donc les deux courbes se superposent. N'oublie pas que c'est un indice, et non une démonstration.</p>`),

  widget("ibIdentity", { init: [2, 70] }),

  section("📌 Ce que montre un graphique", S`
  ${plane(TG([[(x) => Math.tan(x) * Math.cos(x), "violet"], [Math.sin, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }), "tan x cos x et sin x se superposent, mais tan x cos x n'est pas définie là où cos x = 0.")}
  ${watchOut([
    "Ne fais pas passer de termes de l'autre côté du signe égal dans une démonstration.",
    "N'élève pas les deux membres au carré : un énoncé faux pourrait sembler vrai.",
    "Une identité peut avoir des restrictions là où un dénominateur vaut 0; indique-les si on te le demande.",
    "Une valeur qui fonctionne ne démontre pas une identité. Une valeur qui ne fonctionne pas la réfute.",
    "Écris chaque ligne comme une égalité avec la ligne précédente.",
  ])}`),

  examples([
    ["Récrire en sinus et cosinus", S`Démontre que \(\tan x\cos x\csc x=1\).`,
      [S`<b>Plan.</b> Travaille seulement le membre de gauche et écris tout à l'aide du sinus et du cosinus.`,
        S`<b>Récrire.</b> \(\text{MG}=\dfrac{\sin x}{\cos x}\cdot\cos x\cdot\dfrac1{\sin x}\).`,
        S`<b>Simplifier.</b> Les facteurs \(\cos x\) s'annulent, tout comme les facteurs \(\sin x\) : \(\text{MG}=1=\text{MD}\).`,
        S`<b>Test.</b> \(x=\frac\pi4\) : \(1\cdot\frac{\sqrt2}2\cdot\sqrt2=1\) ✓`],
      S`\(\text{MG}=\text{MD}\)`,
      plane(TG([[(x) => Math.tan(x) * Math.cos(x) / Math.sin(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 }))],
    ["Une identité de Pythagore", S`Démontre que \(\sec^2x-\sin^2x\sec^2x=1\).`,
      [S`<b>Factoriser.</b> Les deux termes contiennent \(\sec^2x\) : \(\text{MG}=\sec^2x(1-\sin^2x)\).`,
        S`<b>Identité de Pythagore.</b> \(1-\sin^2x=\cos^2x\), donc \(\text{MG}=\sec^2x\cos^2x\).`,
        S`<b>Réciproque.</b> \(\frac1{\cos^2x}\cos^2x=1=\text{MD}\).`,
        S`<b>Test.</b> \(x=\frac\pi3\) : \(4-\frac34\cdot4=1\) ✓`],
      S`\(\text{MG}=\text{MD}\)`,
      plane(TG([[(x) => (1 / Math.cos(x) ** 2) * (1 - Math.sin(x) ** 2), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 }))],
    ["Un dénominateur commun", S`Démontre que \(\dfrac1{1-\sin x}+\dfrac1{1+\sin x}=2\sec^2x\).`,
      [S`<b>Dénominateur commun.</b> Additionne les fractions avec \((1-\sin x)(1+\sin x)\) : \(\text{MG}=\dfrac{(1+\sin x)+(1-\sin x)}{(1-\sin x)(1+\sin x)}\).`,
        S`<b>Simplifier.</b> Les termes en \(\sin x\) s'annulent au numérateur, et le dénominateur est une différence de carrés : \(\dfrac2{1-\sin^2x}\).`,
        S`<b>Identité de Pythagore.</b> \(\dfrac2{\cos^2x}=2\sec^2x=\text{MD}\).`,
        S`<b>Test.</b> \(x=\frac\pi6\) : \(2+\frac23=\frac83\), et \(2\cdot\frac43=\frac83\) ✓`],
      S`\(\text{MG}=\text{MD}\)`,
      plane(TG([[(x) => 1 / (1 - Math.sin(x)) + 1 / (1 + Math.sin(x)), "violet"]], { xmin: -1.2, xmax: 1.2, ymin: 0, ymax: 16 }, [{ x: Math.PI / 6, y: 8 / 3, label: "(π/6, 8/3)", color: "amber" }], { step: { x: 0.5, y: 2 } }))],
    ["L'angle double", S`Démontre que \(\dfrac{\sin2x}{1+\cos2x}=\tan x\).`,
      [S`<b>Plan.</b> Le membre de droite contient \(x\), donc écris aussi le membre de gauche avec \(x\). Choisis \(\cos2x=2\cos^2x-1\), pour que les 1 s'annulent.`,
        S`<b>Substituer.</b> \(\text{MG}=\dfrac{2\sin x\cos x}{1+(2\cos^2x-1)}=\dfrac{2\sin x\cos x}{2\cos^2x}\).`,
        S`<b>Simplifier.</b> \(\dfrac{\sin x}{\cos x}=\tan x=\text{MD}\).`,
        S`<b>Test.</b> \(x=\frac\pi4\) : \(\frac{1}{1+0}=1=\tan\frac\pi4\) ✓`],
      S`\(\text{MG}=\text{MD}\)`,
      plane(TG([[(x) => Math.sin(2 * x) / (1 + Math.cos(2 * x)), "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -4, ymax: 4 }))],
    ["Un contre-exemple", S`\(\sin2x=2\sin x\) est-elle une identité?`,
      [S`<b>Idée.</b> Une identité doit être vraie pour toute valeur permise de \(x\); un seul échec suffit donc à la réfuter. Les graphiques suggèrent qu'ils diffèrent.`,
        S`<b>Essaie \(x=\frac\pi2\).</b> \(\text{MG}=\sin\pi=0\).`,
        S`<b>Membre de droite.</b> \(\text{MD}=2\sin\frac\pi2=2\).`,
        S`<b>Conclure.</b> \(0\ne2\), donc l'énoncé est faux. Sur le graphique, les amplitudes et les périodes diffèrent ✓`],
      S`ce n'est pas une identité`,
      plane(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }))],
  ]),

  practice([
    q("simplifier", S`Simplifie \(\cos x\tan x\). De quel rapport s'agit-il?`, choice([S`\(\sin x\)`, S`\(\cos x\)`, S`\(\sec x\)`, S`\(1\)`], 0),
      "tan = sin/cos.", [S`\(\cos x\cdot\frac{\sin x}{\cos x}\).`], S`\(\sin x\)`),
    q("simplifier", S`Simplifie \(\dfrac{1-\cos^2x}{\sin^2x}\) et donne sa valeur.`, num(1),
      "Identité de Pythagore.", [S`\(\frac{\sin^2x}{\sin^2x}\).`], S`\(1\)`),
    q("simplifier", S`Quel rapport est égal à \(1+\tan^2x\)?`, choice([S`\(\sec^2x\)`, S`\(\csc^2x\)`, S`\(\cot^2x\)`, S`\(\sin^2x\)`], 0),
      "Divise sin² + cos² = 1 par cos².", [S`\(\sec^2x\).`], S`\(\sec^2x\)`),
    q("valeur", S`Évalue \((\sin x+\cos x)^2-\sin2x\).`, num(1),
      "Développe.", [S`\(1+2\sin x\cos x-2\sin x\cos x\).`], S`\(1\)`),
    q("contre-exemple", S`En \(x=\dfrac\pi4\), trouve la valeur de \(\tan x+\cot x\).`, num(2),
      "Les deux valent 1.", [S`\(1+1\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Travailler les deux membres", S`Démontre que \(\dfrac{\cos x}{1-\sin x}-\dfrac{\cos x}{1+\sin x}=2\tan x\).`,
      [S`\(\text{MG}=\dfrac{\cos x(1+\sin x)-\cos x(1-\sin x)}{1-\sin^2x}\).`, S`\(=\dfrac{2\sin x\cos x}{\cos^2x}=\dfrac{2\sin x}{\cos x}\).`, S`\(=2\tan x=\text{MD}\).`],
      S`\(\text{MG}=\text{MD}\)`],
    ["Une démonstration avec addition et angle double", S`Démontre que \(\cos(x+y)\cos(x-y)=\cos^2x-\sin^2y\).`,
      [S`\(\text{MG}=(\cos x\cos y-\sin x\sin y)(\cos x\cos y+\sin x\sin y)=\cos^2x\cos^2y-\sin^2x\sin^2y\).`, S`Remplace \(\cos^2y=1-\sin^2y\) et \(\sin^2x=1-\cos^2x\) : \(\cos^2x-\cos^2x\sin^2y-\sin^2y+\cos^2x\sin^2y\).`, S`\(=\cos^2x-\sin^2y=\text{MD}\).`],
      S`\(\text{MG}=\text{MD}\)`],
  ], [
    q("difficile", S`Laquelle est une identité?`, choice([S`\(\dfrac{1-\cos2x}{\sin2x}=\tan x\)`, S`\(\sin(x+y)=\sin x+\sin y\)`, S`\(\cos2x=2\cos x\)`, S`\(\tan2x=2\tan x\)`], 0),
      "Utilise les formules de l'angle double.", [S`\(\frac{2\sin^2x}{2\sin x\cos x}=\tan x\).`], S`\(\frac{1-\cos2x}{\sin2x}=\tan x\)`),
    q("difficile", S`\(\sec^4x-\tan^4x=A+B\tan^2x\). Trouve \(A+B\).`, num(3),
      "Factorise comme une différence de carrés.", [S`\((\sec^2x-\tan^2x)(\sec^2x+\tan^2x)=1+2\tan^2x\) : \(A=1,\ B=2\).`], S`\(3\)`),
    q("difficile", S`\(\dfrac{\sin3x}{\sin x}-\dfrac{\cos3x}{\cos x}\) est une constante. Trouve-la.`, num(2),
      "Regroupe les fractions.", [S`\(\frac{\sin3x\cos x-\cos3x\sin x}{\sin x\cos x}=\frac{\sin2x}{\frac12\sin2x}=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi ne puis-je pas faire passer des termes de l'autre côté?", "Cela suppose que l'identité est déjà vraie. En partant de ce que tu veux démontrer, tu peux aboutir à un énoncé vrai même à partir d'une affirmation fausse."],
      ["Par où commencer?", "Par le membre le plus compliqué : il y a davantage à simplifier."],
      ["Que faire si je suis bloqué?", "Transforme tout en sinus et cosinus, regroupe les fractions ou multiplie par un conjugué comme 1 + sin x."],
      ["Un graphique est-il une démonstration?", "Non. Un graphique ne montre qu'un nombre fini de valeurs, avec une précision limitée."],
      ["Comment réfuter une affirmation?", "Trouve une valeur où les deux membres sont définis et différents."],
    ],
    summary: [
      "Travaille un membre à la fois.",
      "Utilise les identités réciproques, du quotient, de Pythagore, d'addition et de l'angle double.",
      "Les dénominateurs communs et la factorisation font l'essentiel du travail.",
      "Un seul contre-exemple suffit à réfuter une affirmation.",
    ],
    next: "En 4.7, tu réviseras tout le chapitre.",
  }),
];
