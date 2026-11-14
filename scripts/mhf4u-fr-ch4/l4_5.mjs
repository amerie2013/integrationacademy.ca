// MHF4U-FR 4.5 — Formules de l'angle double : sin 2x, les trois formes de cos 2x, tan 2x, valeurs exactes et simplification
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { ARM, TG, UC } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.5 Formules de l'angle double";
export const ID = lessonId(4, 5);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Formules de l'angle double",
    overview: S`Pose \(b=a\) dans les formules d'addition et trois résultats courts apparaissent : les formules de l'angle double. Elles expriment un rapport de \(2x\) en fonction des rapports de \(x\). Le cosinus a trois formes, et choisir la bonne est souvent ce qui fait aboutir une simplification ou une équation.`,
    goals: [
      "établir les formules de l'angle double à partir des formules de somme;",
      "utiliser les trois formes de \\(\\cos2x\\);",
      "trouver les rapports de \\(2x\\) à partir d'un rapport de \\(x\\) et de son quadrant;",
      "condenser des expressions en un seul rapport d'un angle double;",
      "trouver des valeurs exactes à l'aide d'angles moitiés comme \\(\\frac\\pi8\\).",
    ],
    curriculum: "B3.2 (formules d'addition), B3.3 (utiliser des formules pour démontrer des identités)",
    prior: [
      [S`\(\sin(a+b)\)?`, S`\(\sin a\cos b+\cos a\sin b\).`],
      [S`\(\sin^2x+\cos^2x\)?`, S`\(1\).`],
      [S`\(\cos x=\frac45\) dans le quadrant 4 : \(\sin x\)?`, S`\(-\frac35\).`],
    ],
    words: [
      ["Angle double", "un angle de la forme 2x", "\\(\\sin2x\\)"],
      ["Angle moitié", "x lorsque 2x est un angle connu", "\\(\\frac\\pi8\\) à partir de \\(\\frac\\pi4\\)"],
      ["Identité de Pythagore", "\\(\\sin^2x+\\cos^2x=1\\)", ""],
    ],
  }),

  section("📌 Les formules", S`
  ${table(["Rapport", "Formule", "Obtenue à partir de"], [
    ["sin 2x", "2 sin x cos x", "sin(x + x)"],
    ["cos 2x", "cos²x − sin²x", "cos(x + x)"],
    ["cos 2x", "2cos²x − 1", "remplacer sin²x par 1 − cos²x"],
    ["cos 2x", "1 − 2sin²x", "remplacer cos²x par 1 − sin²x"],
    ["tan 2x", "2 tan x / (1 − tan²x)", "tan(x + x)"],
  ])}
  ${plane(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "gray"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }), "sin 2x (en violet) n'est pas 2 sin x (en gris) : la première a une période deux fois plus courte, la seconde est deux fois plus haute.")}
  ${keyIdea(S`Choisis la forme de \(\cos2x\) qui correspond à ce que tu connais. Si tu connais seulement \(\sin x\), utilise \(1-2\sin^2x\); si tu connais seulement \(\cos x\), utilise \(2\cos^2x-1\).`)}`),

  section("📌 Exploration", S`<p>Choisis une identité et fais varier \(x\). Les deux membres ont la même valeur pour chaque \(x\), donc les deux graphiques se superposent. Compare \(\sin2x=2\sin x\cos x\) et \(\cos2x=1-2\sin^2x\).</p>`),

  widget("ibIdentity", { init: [1, 40] }),

  section("📌 Angles moitiés", S`
  <p>Résous \(\cos2x=2\cos^2x-1\) pour \(\cos x\) : \(\cos x=\pm\sqrt{\dfrac{1+\cos2x}2}\). Le signe est déterminé par le quadrant de \(x\).</p>
  ${watchOut([
    "sin 2x ≠ 2 sin x. Le 2 fait partie de l'angle.",
    "cos²x signifie (cos x)². Élève la valeur au carré, y compris un signe négatif.",
    "Détermine le signe de sin x et de cos x à partir du quadrant de x, et non de celui de 2x.",
    "tan 2x n'est pas définie lorsque tan²x = 1.",
    "Les formules s'appliquent à tout doublement : sin 6x = 2 sin 3x cos 3x.",
  ])}`),

  examples([
    ["Les trois à partir d'un seul rapport", S`\(\sin x=\dfrac35\) avec \(\dfrac\pi2\lt x\lt\pi\). Trouve \(\sin2x\), \(\cos2x\) et \(\tan2x\).`,
      [S`<b>D'abord le cosinus.</b> Le triangle est 3-4-5, et \(x\) est dans le quadrant 2, où le cosinus est négatif : \(\cos x=-\frac45\).`,
        S`<b>Sinus.</b> \(\sin2x=2\sin x\cos x=2\cdot\frac35\cdot\left(-\frac45\right)=-\frac{24}{25}\).`,
        S`<b>Cosinus.</b> \(\cos2x=1-2\sin^2x=1-2\cdot\frac9{25}=\frac7{25}\).`,
        S`<b>Tangente.</b> \(\tan2x=\frac{\sin2x}{\cos2x}=-\frac{24}{25}\cdot\frac{25}7=-\frac{24}7\).`,
        S`<b>Vérification.</b> \(\left(\frac{24}{25}\right)^2+\left(\frac7{25}\right)^2=\frac{576+49}{625}=1\) ✓`],
      S`\(-\frac{24}{25},\ \frac7{25},\ -\frac{24}7\)`,
      plane(ARM(-4, 3, "(−4, 3)"))],
    ["Condenser un produit", S`Écris \(2\sin\dfrac\pi8\cos\dfrac\pi8\) sous la forme d'un seul rapport et évalue-le.`,
      [S`<b>Régularité.</b> L'expression correspond à \(2\sin x\cos x=\sin2x\) avec \(x=\frac\pi8\).`,
        S`<b>Doubler.</b> \(2\cdot\frac\pi8=\frac\pi4\), donc elle est égale à \(\sin\frac\pi4\).`,
        S`<b>Évaluer.</b> \(\sin\frac\pi4=\frac{\sqrt2}2\).`,
        S`<b>Vérification.</b> \(2\sin22.5^\circ\cos22.5^\circ\approx2(0.383)(0.924)\approx0.707\) ✓`],
      S`\(\dfrac{\sqrt2}2\)`,
      plane(UC(45, "π/4"))],
    ["Condenser une différence de carrés", S`Évalue \(\cos^2\dfrac\pi{12}-\sin^2\dfrac\pi{12}\).`,
      [S`<b>Régularité.</b> L'expression correspond à \(\cos^2x-\sin^2x=\cos2x\) avec \(x=\frac\pi{12}\).`,
        S`<b>Doubler.</b> \(2\cdot\frac\pi{12}=\frac\pi6\).`,
        S`<b>Évaluer.</b> \(\cos\frac\pi6=\frac{\sqrt3}2\).`,
        S`<b>Vérification.</b> \(0.966^2-0.259^2\approx0.933-0.067=0.866\), et \(\frac{\sqrt3}2\approx0.866\) ✓`],
      S`\(\dfrac{\sqrt3}2\)`,
      plane(UC(30, "π/6"))],
    ["La tangente", S`\(\tan x=3\). Trouve \(\tan2x\).`,
      [S`<b>Formule.</b> \(\tan2x=\dfrac{2\tan x}{1-\tan^2x}\).`,
        S`<b>Substituer.</b> \(\dfrac{2(3)}{1-3^2}=\dfrac6{-8}\).`,
        S`<b>Simplifier.</b> \(-\frac34\).`,
        S`<b>Vérification.</b> \(x\approx1.249\), donc \(\tan2.498\approx-0.75\) ✓`],
      S`\(-\dfrac34\)`,
      plane(ARM(1, 3, "(1, 3)"))],
    ["Un angle moitié", S`Trouve la valeur exacte de \(\cos\dfrac\pi8\).`,
      [S`<b>Plan.</b> \(\frac\pi8\) est la moitié de \(\frac\pi4\), dont on connaît le cosinus. Utilise \(\cos2x=2\cos^2x-1\) avec \(x=\frac\pi8\).`,
        S`<b>Poser l'équation.</b> \(\frac{\sqrt2}2=2\cos^2\frac\pi8-1\).`,
        S`<b>Isoler.</b> \(\cos^2\frac\pi8=\frac{1+\frac{\sqrt2}2}2=\frac{2+\sqrt2}4\).`,
        S`<b>Racine.</b> \(\frac\pi8\) est dans le quadrant 1, donc le cosinus est positif : \(\cos\frac\pi8=\frac{\sqrt{2+\sqrt2}}2\).`,
        S`<b>Vérification.</b> \(\frac{\sqrt{3.414}}2\approx0.924\), et \(\cos22.5^\circ\approx0.924\) ✓`],
      S`\(\dfrac{\sqrt{2+\sqrt2}}2\)`,
      plane(UC(22.5, "π/8"))],
  ]),

  practice([
    q("sin 2x", S`\(\sin x=\dfrac5{13}\) et \(\cos x=\dfrac{12}{13}\). Trouve \(\sin2x\) (4 décimales).`, num(0.7101, 0.001),
      "2 sin x cos x.", [S`\(\frac{120}{169}\approx0.7101\).`], S`\(0.7101\)`),
    q("cos 2x", S`\(\cos x=0.6\). Trouve \(\cos2x\).`, num(-0.28, 0.001),
      "2cos²x − 1.", [S`\(2(0.36)-1\).`], S`\(-0.28\)`),
    q("cos 2x", S`\(\sin x=0.5\). Trouve \(\cos2x\).`, num(0.5, 0.001),
      "1 − 2sin²x.", [S`\(1-2(0.25)\).`], S`\(0.5\)`),
    q("condenser", S`Quel rapport est égal à \(1-2\sin^2 3x\)?`, choice([S`\(\cos6x\)`, S`\(\cos3x\)`, S`\(\sin6x\)`, S`\(\cos9x\)`], 0),
      "cos 2u avec u = 3x.", [S`\(\cos(2\cdot3x)\).`], S`\(\cos6x\)`),
    q("tan 2x", S`\(\tan x=\dfrac12\). Trouve \(\tan2x\) (4 décimales).`, num(1.3333, 0.001),
      "2 tan x / (1 − tan²x).", [S`\(\frac{1}{3/4}=\frac43\).`], S`\(1.3333\)`),
  ]),

  ...hard([
    ["De l'angle double à x", S`\(\cos2x=\dfrac7{25}\) avec \(0\lt x\lt\dfrac\pi2\). Trouve \(\sin x\) et \(\cos x\).`,
      [S`\(1-2\sin^2x=\frac7{25}\Rightarrow\sin^2x=\frac9{25}\), donc \(\sin x=\frac35\) dans le quadrant 1.`, S`\(2\cos^2x-1=\frac7{25}\Rightarrow\cos^2x=\frac{16}{25}\), donc \(\cos x=\frac45\).`],
      S`\(\sin x=\dfrac35,\ \cos x=\dfrac45\)`,
      plane(ARM(4, 3, "(4, 3)"))],
    ["Un angle triple", S`Exprime \(\sin3x\) en fonction de \(\sin x\) seulement.`,
      [S`\(\sin(2x+x)=\sin2x\cos x+\cos2x\sin x\).`, S`\(=2\sin x\cos^2x+(1-2\sin^2x)\sin x\).`, S`Utilise \(\cos^2x=1-\sin^2x\) : \(2\sin x-2\sin^3x+\sin x-2\sin^3x\).`],
      S`\(\sin3x=3\sin x-4\sin^3x\)`,
      plane(TG([[(x) => Math.sin(3 * x), "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 2 }))],
  ], [
    q("difficile", S`\(\cos x=-\dfrac13\) avec \(x\) dans le quadrant 2. Trouve \(\sin2x\) (4 décimales).`, num(-0.6285, 0.001),
      "sin x est positif dans le quadrant 2.", [S`\(\sin x=\frac{2\sqrt2}3\); \(2\cdot\frac{2\sqrt2}3\cdot\left(-\frac13\right)=-\frac{4\sqrt2}9\).`], S`\(-0.6285\)`),
    q("difficile", S`Trouve \(\sin\dfrac\pi8\) (4 décimales).`, num(0.3827, 0.001),
      "Utilise cos(π/4) = 1 − 2sin²(π/8).", [S`\(\sin^2\frac\pi8=\frac{2-\sqrt2}4\).`], S`\(0.3827\)`),
    q("difficile", S`\(\sin x+\cos x=\dfrac12\). Trouve \(\sin2x\).`, num(-0.75, 0.001),
      "Élève les deux membres au carré.", [S`\(1+2\sin x\cos x=\frac14\), donc \(\sin2x=-\frac34\).`], S`\(-0.75\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi trois formes de cos 2x?", "L'identité de Pythagore permet d'échanger cos²x et sin²x; tu peux donc écrire la formule avec le rapport qui est donné."],
      ["Pourquoi le 2 ne sort-il pas?", "sin 2x signifie le sinus de 2x. Doubler un angle ne double pas la hauteur : sin 2x ne dépasse jamais 1."],
      ["Comment les reconnaître dans une expression?", "2 sin ☐ cos ☐ est le sinus du double; cos²☐ − sin²☐ est le cosinus du double."],
      ["En quoi cela aide-t-il à résoudre des équations?", "En remplaçant sin 2x et cos 2x, tout s'écrit en fonction de x, ce qui se factorise. Tu l'utiliseras en 5.4."],
      ["Quand tan 2x n'est-elle pas définie?", "Lorsque cos 2x = 0, par exemple en x = π/4."],
    ],
    summary: [
      "sin 2x = 2 sin x cos x.",
      "cos 2x = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x.",
      "tan 2x = 2 tan x / (1 − tan²x).",
      "Utilise le quadrant de x pour choisir les signes.",
    ],
    next: "En 4.6, tu utiliseras toutes ces formules pour démontrer des identités trigonométriques.",
  }),
];
