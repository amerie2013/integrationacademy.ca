// MHF4U-FR 4.4 — Formules d'addition (angles composés) : formules de somme et de différence pour sinus, cosinus et
// tangente; valeurs exactes; simplification; rapports donnés dans des quadrants connus
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { UC, ARM, TG } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "4.4 Formules d'addition (angles composés)";
export const ID = lessonId(4, 4);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➕",
    title: "Formules d'addition (angles composés)",
    overview: S`Une erreur fréquente consiste à écrire \(\sin(a+b)=\sin a+\sin b\). C'est faux : \(\sin\left(\frac\pi6+\frac\pi3\right)=\sin\frac\pi2=1\), mais \(\sin\frac\pi6+\sin\frac\pi3\approx1.37\). Les bonnes formules mélangent sinus et cosinus. Elles donnent des valeurs exactes pour de nouveaux angles, comme \(\frac\pi{12}\), en écrivant ces angles comme la somme ou la différence d'angles remarquables.`,
    goals: [
      "énoncer les formules de somme et de différence pour sin, cos et tan;",
      "trouver des valeurs exactes pour des angles comme \\(\\frac\\pi{12}\\) et \\(\\frac{7\\pi}{12}\\);",
      "reconnaître une formule dans une expression développée et la condenser;",
      "utiliser des rapports donnés dans des quadrants connus;",
      "utiliser les formules pour établir de nouvelles relations.",
    ],
    curriculum: "B3.2 (explorer les formules d'addition et déterminer des valeurs exactes)",
    prior: [
      [S`\(\sin\frac\pi4\cos\frac\pi6\)?`, S`\(\frac{\sqrt6}4\).`],
      [S`\(\frac\pi3-\frac\pi4\)?`, S`\(\frac\pi{12}\).`],
      [S`\(\sin x=\frac35\), \(x\) dans le quadrant 1 : \(\cos x\)?`, S`\(\frac45\).`],
    ],
    words: [
      ["Angle composé", "un angle écrit comme une somme ou une différence", "\\(a+b\\)"],
      ["Valeur exacte", "écrite avec des radicaux et des fractions, sans décimales", "\\(\\frac{\\sqrt6+\\sqrt2}4\\)"],
      ["Rationaliser", "éliminer un radical du dénominateur", ""],
    ],
  }),

  section("📌 Les formules", S`
  ${table(["Formule", "Régularité"], [
    ["sin(a + b) = sin a cos b + cos a sin b", "termes croisés, même signe"],
    ["sin(a − b) = sin a cos b − cos a sin b", "termes croisés, même signe"],
    ["cos(a + b) = cos a cos b − sin a sin b", "termes semblables, signe contraire"],
    ["cos(a − b) = cos a cos b + sin a sin b", "termes semblables, signe contraire"],
    ["tan(a + b) = (tan a + tan b)/(1 − tan a tan b)", ""],
    ["tan(a − b) = (tan a − tan b)/(1 + tan a tan b)", ""],
  ])}
  ${plane(UC(15, "π/12 = π/3 − π/4"), "π/12 n'est pas un angle remarquable, mais c'est la différence de deux angles remarquables.")}
  ${keyIdea(S`La formule de la différence pour le cosinus provient de la distance entre deux points du cercle trigonométrique. Les autres en découlent : remplace \(b\) par \(-b\) pour la somme, et utilise \(\sin x=\cos\left(\frac\pi2-x\right)\) pour le sinus.`)}`),

  section("📌 Exploration", S`<p>Place-toi à \(15^\circ\) puis à \(75^\circ\). Note les coordonnées et compare-les aux valeurs exactes des exemples ci-dessous : \(\frac{\sqrt6+\sqrt2}4\approx0.9659\) et \(\frac{\sqrt6-\sqrt2}4\approx0.2588\).</p>`),

  widget("ibUnitCircle", { init: 15 }),

  section("📌 Lire une formule à l'envers", S`
  <p>Une expression comme \(\sin x\cos2x+\cos x\sin2x\) est une formule du sinus développée : elle est égale à \(\sin(x+2x)=\sin3x\). Cherche des termes croisés pour le sinus et des termes semblables pour le cosinus.</p>
  ${plane(TG([[(x) => Math.sin(3 * x), "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 2 }), "sin x cos 2x + cos x sin 2x trace la même courbe que sin 3x.")}
  ${watchOut([
    "Le sinus ne se distribue pas : sin(a + b) ≠ sin a + sin b.",
    "La formule du cosinus inverse le signe : cos(a + b) contient un moins.",
    "Trouve les rapports manquants avec le bon signe pour chaque quadrant avant de substituer.",
    "Choisis la paire d'angles remarquables qui redonne l'angle : 7π/12 = π/3 + π/4.",
    "Simplifie à la fin : √2/2 · √3/2 = √6/4.",
  ])}`),

  examples([
    ["Une différence", S`Trouve la valeur exacte de \(\cos\dfrac\pi{12}\).`,
      [S`<b>Plan.</b> Écris l'angle à l'aide d'angles remarquables : \(\frac\pi3-\frac\pi4=\frac{4\pi-3\pi}{12}=\frac\pi{12}\).`,
        S`<b>Formule.</b> \(\cos(a-b)=\cos a\cos b+\sin a\sin b\).`,
        S`<b>Substituer.</b> \(\frac12\cdot\frac{\sqrt2}2+\frac{\sqrt3}2\cdot\frac{\sqrt2}2\).`,
        S`<b>Simplifier.</b> \(\frac{\sqrt2}4+\frac{\sqrt6}4=\frac{\sqrt6+\sqrt2}4\).`,
        S`<b>Vérification.</b> \(\frac{\sqrt6+\sqrt2}4\approx0.966\), et \(\cos15^\circ\approx0.966\) ✓`],
      S`\(\dfrac{\sqrt6+\sqrt2}4\)`,
      plane(UC(15, "π/12"))],
    ["Une somme", S`Trouve la valeur exacte de \(\sin\dfrac{7\pi}{12}\).`,
      [S`<b>Plan.</b> \(\frac\pi3+\frac\pi4=\frac{4\pi+3\pi}{12}=\frac{7\pi}{12}\).`,
        S`<b>Formule.</b> \(\sin(a+b)=\sin a\cos b+\cos a\sin b\).`,
        S`<b>Substituer.</b> \(\frac{\sqrt3}2\cdot\frac{\sqrt2}2+\frac12\cdot\frac{\sqrt2}2\).`,
        S`<b>Simplifier.</b> \(\frac{\sqrt6}4+\frac{\sqrt2}4=\frac{\sqrt6+\sqrt2}4\).`,
        S`<b>Vérification.</b> L'angle mesure \(105^\circ\), dans le quadrant 2, donc le sinus est positif, et \(\sin105^\circ\approx0.966\) ✓`],
      S`\(\dfrac{\sqrt6+\sqrt2}4\)`,
      plane(UC(105, "7π/12"))],
    ["La tangente", S`Trouve la valeur exacte de \(\tan\dfrac\pi{12}\).`,
      [S`<b>Formule.</b> \(\tan(a-b)=\dfrac{\tan a-\tan b}{1+\tan a\tan b}\), avec \(a=\frac\pi3\), \(b=\frac\pi4\).`,
        S`<b>Substituer.</b> \(\tan\frac\pi3=\sqrt3\) et \(\tan\frac\pi4=1\), donc on obtient \(\dfrac{\sqrt3-1}{1+\sqrt3}\).`,
        S`<b>Rationaliser.</b> Multiplie par \(\frac{\sqrt3-1}{\sqrt3-1}\) : \(\dfrac{(\sqrt3-1)^2}{3-1}=\dfrac{4-2\sqrt3}2\).`,
        S`<b>Simplifier.</b> Divise par 2 : \(2-\sqrt3\).`,
        S`<b>Vérification.</b> \(2-\sqrt3\approx0.268\), et \(\tan15^\circ\approx0.268\) ✓`],
      S`\(2-\sqrt3\)`,
      plane(TG([[Math.tan, "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -4, ymax: 4 }, [{ x: Math.PI / 12, y: 2 - Math.sqrt(3), label: "(π/12, 2−√3)", color: "amber" }], { step: { x: 0.5, y: 1 } }))],
    ["Condenser", S`Écris \(\cos\dfrac{2\pi}9\cos\dfrac\pi9-\sin\dfrac{2\pi}9\sin\dfrac\pi9\) sous la forme d'un seul rapport, puis évalue-le.`,
      [S`<b>Régularité.</b> Un produit de cosinus moins un produit de sinus, c'est \(\cos a\cos b-\sin a\sin b=\cos(a+b)\).`,
        S`<b>Associer.</b> \(a=\frac{2\pi}9\) et \(b=\frac\pi9\).`,
        S`<b>Additionner.</b> \(\frac{2\pi}9+\frac\pi9=\frac{3\pi}9=\frac\pi3\).`,
        S`<b>Évaluer.</b> \(\cos\frac\pi3=\frac12\).`,
        S`<b>Vérification.</b> En degrés : \(\cos40^\circ\cos20^\circ-\sin40^\circ\sin20^\circ\approx0.720-0.220=0.5\) ✓`],
      S`\(\cos\dfrac\pi3=\dfrac12\)`,
      plane(UC(60, "π/3"))],
    ["Des rapports donnés", S`\(\sin a=\dfrac35\) avec \(a\) dans le quadrant 1, et \(\cos b=-\dfrac5{13}\) avec \(b\) dans le quadrant 2. Trouve \(\sin(a+b)\).`,
      [S`<b>Rapports manquants.</b> Pour \(a\) dans le quadrant 1 : le triangle est 3-4-5, donc \(\cos a=\frac45\).`,
        S`<b>Pour \(b\).</b> Le triangle est 5-12-13 dans le quadrant 2, où le sinus est positif : \(\sin b=\frac{12}{13}\).`,
        S`<b>Formule.</b> \(\sin a\cos b+\cos a\sin b=\frac35\left(-\frac5{13}\right)+\frac45\cdot\frac{12}{13}\).`,
        S`<b>Regrouper.</b> \(\frac{-15+48}{65}=\frac{33}{65}\).`,
        S`<b>Vérification.</b> \(a\approx0.644\) et \(b\approx1.966\), donc \(\sin2.61\approx0.507\), et \(\frac{33}{65}\approx0.508\) ✓`],
      S`\(\dfrac{33}{65}\)`,
      plane(ARM(-5, 12, "b : (−5, 12)"))],
  ]),

  practice([
    q("valeur exacte", S`Trouve \(\sin\dfrac\pi{12}\) (4 décimales, à l'aide de la valeur exacte \(\frac{\sqrt6-\sqrt2}4\)).`, num(0.2588, 0.001),
      "π/3 − π/4.", [S`\(\frac{\sqrt6-\sqrt2}4\approx0.2588\).`], S`\(0.2588\)`),
    q("valeur exacte", S`Évalue \(\cos\dfrac{5\pi}{12}\) (4 décimales).`, num(0.2588, 0.001),
      "π/4 + π/6.", [S`\(\frac{\sqrt2}2\cdot\frac{\sqrt3}2-\frac{\sqrt2}2\cdot\frac12=\frac{\sqrt6-\sqrt2}4\).`], S`\(0.2588\)`),
    q("condenser", S`Quel rapport est égal à \(\sin3x\cos x-\cos3x\sin x\)?`, choice([S`\(\sin2x\)`, S`\(\sin4x\)`, S`\(\cos2x\)`, S`\(\cos4x\)`], 0),
      "Termes croisés avec un moins.", [S`\(\sin(3x-x)\).`], S`\(\sin2x\)`),
    q("condenser", S`Évalue \(\sin\dfrac{\pi}{5}\cos\dfrac{3\pi}{10}+\cos\dfrac\pi5\sin\dfrac{3\pi}{10}\).`, num(1),
      "Termes croisés avec un plus.", [S`\(\sin\left(\frac\pi5+\frac{3\pi}{10}\right)=\sin\frac\pi2\).`], S`\(1\)`),
    q("rapports donnés", S`\(\tan a=2\) et \(\tan b=3\). Trouve \(\tan(a+b)\).`, num(-1),
      "Utilise la formule de la tangente.", [S`\(\frac{2+3}{1-6}=-1\).`], S`\(-1\)`),
  ]),

  ...hard([
    ["Deux quadrants", S`\(\cos a=-\dfrac45\) avec \(a\) dans le quadrant 2, et \(\sin b=-\dfrac5{13}\) avec \(b\) dans le quadrant 3. Trouve \(\cos(a-b)\), puis indique le quadrant de \(a-b\) sachant que \(\sin(a-b)\) est négatif.`,
      [S`\(\sin a=\frac35\) (quadrant 2). \(\cos b=-\frac{12}{13}\) (quadrant 3).`, S`\(\cos(a-b)=\cos a\cos b+\sin a\sin b=\left(-\frac45\right)\left(-\frac{12}{13}\right)+\frac35\left(-\frac5{13}\right)=\frac{48-15}{65}=\frac{33}{65}\).`, S`Un cosinus positif et un sinus négatif indiquent le quadrant 4.`],
      S`\(\cos(a-b)=\dfrac{33}{65}\); quadrant 4`],
    ["Établir une relation", S`Utilise une formule d'addition pour démontrer que \(\sin\left(x+\dfrac\pi2\right)=\cos x\). Simplifie ensuite \(\cos\left(x+\dfrac\pi4\right)+\cos\left(x-\dfrac\pi4\right)\).`,
      [S`\(\sin x\cos\frac\pi2+\cos x\sin\frac\pi2=\sin x\cdot0+\cos x\cdot1=\cos x\).`, S`\(\cos\left(x+\frac\pi4\right)+\cos\left(x-\frac\pi4\right)=2\cos x\cos\frac\pi4\) : les termes en \(\sin\) s'annulent.`, S`\(2\cos x\cdot\frac{\sqrt2}2=\sqrt2\cos x\).`],
      S`\(\sqrt2\cos x\)`,
      plane(TG([[(x) => Math.SQRT2 * Math.cos(x), "violet"], [Math.cos, "gray"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))],
  ], [
    q("difficile", S`\(\sin a=\dfrac8{17}\) dans le quadrant 1 et \(\cos b=\dfrac35\) dans le quadrant 4. Trouve \(\sin(a-b)\) (4 décimales).`, num(0.9882, 0.001),
      "sin b est négatif.", [S`\(\cos a=\frac{15}{17}\), \(\sin b=-\frac45\). \(\frac8{17}\cdot\frac35+\frac{15}{17}\cdot\frac45=\frac{24+60}{85}=\frac{84}{85}\approx0.9882\).`], S`\(0.9882\)`),
    q("difficile", S`Évalue \(\tan\dfrac{5\pi}{12}\) (4 décimales).`, num(3.7321, 0.001),
      "π/4 + π/6.", [S`\(2+\sqrt3\approx3.7321\).`], S`\(3.7321\)`),
    q("difficile", S`\(\tan a=\dfrac12\) et \(\tan b=\dfrac13\), deux angles aigus. Trouve \(a+b\) en radians (4 décimales).`, num(0.7854, 0.001),
      "Trouve tan(a + b).", [S`\(\frac{1/2+1/3}{1-1/6}=1\), donc \(a+b=\frac\pi4\).`], S`\(0.7854\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi sin(a + b) n'est-il pas égal à sin a + sin b?", "Le sinus n'est pas linéaire : essaie a = b = π/2; sin π = 0, mais le membre de droite vaut 2."],
      ["Comment me rappeler les signes?", "Le sinus garde le signe de l'opération sur les angles. Le cosinus l'inverse."],
      ["D'où viennent ces formules?", "La distance entre deux points du cercle trigonométrique donne cos(a − b); les autres s'obtiennent par substitution."],
      ["Quelle paire d'angles dois-je utiliser?", "Écris l'angle en douzièmes : π/4 = 3π/12, π/3 = 4π/12, π/6 = 2π/12. Alors 7π/12 = 3π/12 + 4π/12."],
      ["Ai-je besoin des radians?", "Les formules sont vraies aussi en degrés, mais le cours MHF4U s'attend à des radians."],
    ],
    summary: [
      "sin(a ± b) = sin a cos b ± cos a sin b.",
      "cos(a ± b) = cos a cos b ∓ sin a sin b.",
      "tan(a ± b) = (tan a ± tan b)/(1 ∓ tan a tan b).",
      "Trouve les rapports manquants avec les bons signes selon le quadrant avant de substituer.",
    ],
    next: "En 4.5, on pose a = b pour obtenir les formules de l'angle double.",
  }),
];
