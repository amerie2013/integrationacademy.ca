// MHF4U-FR 8.1 — Sommes et différences de fonctions (miroir français de ../mhf4u-ch8/l8_1.mjs).
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, mg } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "8.1 Sommes et différences de fonctions";
export const ID = lessonId(8, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➕",
    title: "Sommes et différences de fonctions",
    overview: S`On peut combiner deux fonctions en une nouvelle fonction en additionnant ou en soustrayant leurs valeurs : \((f+g)(x)=f(x)+g(x)\). Le profit d'une entreprise est sa fonction revenu moins sa fonction coût; un son que tu entends est la somme de plusieurs ondes. Dans cette leçon, tu combines des fonctions à l'aide d'équations, de tables de valeurs et directement sur un graphique, et tu détermines où la nouvelle fonction est définie.`,
    goals: [
      "déterminer \\((f+g)(x)\\) et \\((f-g)(x)\\) à partir des équations;",
      "additionner ou soustraire des fonctions à l'aide d'une table de valeurs et sur un graphique;",
      "donner le domaine d'une somme ou d'une différence;",
      "décrire la forme et la symétrie d'une fonction combinée;",
      "utiliser des différences comme profit = revenu − coût en contexte.",
    ],
    curriculum: "D2.1 (déterminer, par exploration à l'aide de la technologie, les caractéristiques des graphiques de fonctions obtenues par l'addition, la soustraction, la multiplication ou la division de fonctions), D2.2 (reconnaître des applications concrètes de combinaisons de fonctions)",
    prior: [
      [S`Simplifie \((3x^2-x)+(x^2+4x)\).`, S`\(4x^2+3x\).`],
      [S`Si \(f(x)=x^2\), détermine \(f(-3)\).`, S`\(9\).`],
      [S`Domaine de \(y=\sqrt{x-2}\)?`, S`\(x\ge2\).`],
    ],
    words: [
      ["Somme de fonctions", "\\((f+g)(x)=f(x)+g(x)\\)", "\\(x^2+2^x\\)"],
      ["Différence de fonctions", "\\((f-g)(x)=f(x)-g(x)\\)", "profit \\(=R(x)-C(x)\\)"],
      ["Domaine d'une combinaison", "les valeurs de \\(x\\) qui sont dans le domaine des DEUX fonctions", "\\(\\sqrt x+\\sqrt{4-x}:\\ 0\\le x\\le4\\)"],
      ["Superposition", "additionner des graphiques en additionnant les valeurs de \\(y\\) à chaque \\(x\\)", "additionner les hauteurs point par point"],
    ],
  }),

  section("📌 Trois façons d'additionner des fonctions", S`
  ${table(["Représentation", "Comment trouver f + g", "Exemple (f(x) = 2ˣ, g(x) = −x)"], [
    ["Équation", "additionner les expressions, regrouper les termes semblables", "\\((f+g)(x)=2^x-x\\)"],
    ["Table", "additionner les valeurs de \\(y\\) de chaque ligne", "\\(x=2:\\ 4+(-2)=2\\)"],
    ["Graphique", "additionner les hauteurs à chaque \\(x\\) (superposition)", "à \\(x=0\\) : hauteur \\(1+0=1\\)"],
  ])}
  ${keyIdea(S`\[(f\pm g)(x)=f(x)\pm g(x),\qquad \text{domaine}=D_f\cap D_g.\] La combinaison existe seulement là où les <b>deux</b> fonctions existent.`)}
  ${plane({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: (x) => -x, color: "gray" }, { f: (x) => 2 ** x - x, color: "violet" }], points: [{ x: -2, y: 2.25, label: "(−2, 2.25)", color: "amber" }, { x: 3, y: 5, label: "(3, 5)", color: "amber" }], step: { x: 1, y: 1 } }, "En bleu y = 2ˣ, en gris y = −x, en violet leur somme y = 2ˣ − x : pour les grandes valeurs négatives de x, la droite domine; pour les grandes valeurs positives de x, c'est l'exponentielle.")}`),

  mg([{ expr: "x^2", label: "f(x) = x²", color: "#2563eb" }, { expr: "a*x", label: "g(x) = ax", color: "#64748b" }, { expr: "x^2 + a*x", label: "(f + g)(x) = x² + ax", color: "#7c3aed" }], { param: "a", paramMin: -4, paramMax: 4, paramInit: 2, xMin: -6, xMax: 6, yMin: -6, yMax: 12, caption: "Fais glisser a. La somme x² + ax est encore une parabole : ajouter une droite déplace le sommet en (−a/2, −a²/4) sans changer la forme." }),

  section("📌 Caractéristiques d'une somme ou d'une différence", S`
  <ul>
    <li><b>Zéros :</b> \((f-g)(x)=0\) exactement là où \(f(x)=g(x)\); les zéros d'une différence sont donc les abscisses des points où les deux graphiques se croisent.</li>
    <li><b>Terme dominant :</b> loin à gauche ou à droite, la somme se comporte comme la fonction qui croît le plus vite.</li>
    <li><b>Symétrie :</b> paire + paire donne paire, impaire + impaire donne impaire; paire + impaire ne donne habituellement ni l'une ni l'autre.</li>
  </ul>
  ${watchOut([
    "(f − g)(x) exige des parenthèses : f(x) − (x² + 5x − 4) change le signe de chaque terme de g.",
    "Le domaine de f + g est l'ensemble des x où les DEUX fonctions sont définies, et non où l'une ou l'autre l'est.",
    "Additionne les hauteurs au même x, et non des points ayant le même y.",
    "(f + g)(3) vaut f(3) + g(3), et non f(3 + 3).",
    "Une différence f − g n'est pas la même chose que g − f; ce sont des réflexions l'une de l'autre par rapport à l'axe des x.",
  ])}`),

  examples([
    ["Additionner et soustraire des équations", S`Pour \(f(x)=2x^2-3x+1\) et \(g(x)=x^2+5x-4\), détermine \((f+g)(x)\) et \((f-g)(x)\).`,
      [S`<b>Règle.</b> \((f\pm g)(x)=f(x)\pm g(x)\) : à chaque \(x\), on additionne ou on soustrait les valeurs. Avec des équations, cela veut dire regrouper les termes semblables.`,
        S`<b>Somme.</b> Regroupe les termes selon la puissance : \((2x^2+x^2)+(-3x+5x)+(1-4)=3x^2+2x-3\).`,
        S`<b>Différence : d'abord les parenthèses.</b> Toute la fonction \(g\) est soustraite, donc tous ses signes changent : \(2x^2-3x+1-(x^2+5x-4)=2x^2-3x+1-x^2-5x+4\).`,
        S`<b>Regroupe.</b> \((2x^2-x^2)+(-3x-5x)+(1+4)=x^2-8x+5\).`,
        S`<b>Vérifie à \(x=1\).</b> \(f(1)=0\) et \(g(1)=2\). La somme devrait valoir \(2\) : \(3+2-3=2\) ✓. La différence devrait valoir \(-2\) : \(1-8+5=-2\) ✓`,
        S`<b>Sur le graphique.</b> À \(x=1\), la somme en violet a une hauteur de \(0+2=2\) : les hauteurs des deux parties s'additionnent ✓`],
      S`\(3x^2+2x-3\) et \(x^2-8x+5\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -9, ymax: 16 }, curves: [{ f: (x) => 2 * x * x - 3 * x + 1, color: "blue" }, { f: (x) => x * x + 5 * x - 4, color: "gray" }, { f: (x) => 3 * x * x + 2 * x - 3, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Domaine d'une somme", S`Détermine le domaine de \(h(x)=\sqrt{x-1}+\sqrt{5-x}\) et évalue \(h(1)\), \(h(3)\), \(h(5)\).`,
      [S`<b>Règle.</b> Une somme existe seulement là où les deux parties existent; le domaine est donc l'intersection des deux domaines.`,
        S`<b>Première partie.</b> \(\sqrt{x-1}\) exige \(x-1\ge0\), donc \(x\ge1\).`,
        S`<b>Deuxième partie.</b> \(\sqrt{5-x}\) exige \(5-x\ge0\), donc \(x\le5\).`,
        S`<b>Intersection.</b> Les deux conditions sont vraies pour \(1\le x\le5\).`,
        S`<b>Évalue.</b> \(h(1)=\sqrt0+\sqrt4=2\); \(h(3)=\sqrt2+\sqrt2\approx2.83\); \(h(5)=\sqrt4+\sqrt0=2\).`,
        S`<b>Vérifie.</b> \(h(6)\) exigerait \(\sqrt{-1}\); \(6\) est donc bien à l'extérieur du domaine ✓. La courbe violette existe seulement là où les courbes bleue et grise existent toutes les deux ✓`],
      S`\(1\le x\le5\); \(2,\ 2.83,\ 2\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x - 1), a: 1, color: "blue" }, { f: (x) => Math.sqrt(5 - x), b: 5, color: "gray" }, { f: (x) => Math.sqrt(x - 1) + Math.sqrt(5 - x), a: 1, b: 5, color: "violet" }], points: [{ x: 3, y: 2.83, label: "(3, 2.83)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Additionner à l'aide d'une table", S`Construis une table pour \(f(x)=2^x\), \(g(x)=-x\) et \(h=f+g\) pour \(x=-2,\dots,3\). Où \(h\) est-elle la plus petite?`,
      [S`<b>Méthode.</b> Dans chaque ligne, la valeur de \(h\) est la somme des deux valeurs de cette ligne.`,
        S`<b>Valeurs négatives de \(x\).</b> \(x=-2\) : \(0.25+2=2.25\). \(x=-1\) : \(0.5+1=1.5\).`,
        S`<b>Les autres.</b> \(x=0\) : \(1+0=1\). \(x=1\) : \(2-1=1\). \(x=2\) : \(4-2=2\). \(x=3\) : \(8-3=5\).`,
        S`<b>Lis la régularité.</b> \(h\) diminue, puis augmente. À gauche, la droite \(-x\) domine; à droite, \(2^x\) domine.`,
        S`<b>Situe le minimum.</b> Les plus petites valeurs de la table sont à \(x=0\) et à \(x=1\), et les valeurs augmentent des deux côtés; le minimum est donc entre les deux. Un graphique donne environ \(0.91\) à \(x\approx0.53\).`,
        S`<b>Vérifie.</b> À partir de l'équation, \(h(3)=2^3-3=5\) ✓, et \(h(0.53)=2^{0.53}-0.53\approx0.91\) ✓`],
      S`minimum d'environ \(0.91\), entre \(x=0\) et \(x=1\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: (x) => -x, color: "gray" }, { f: (x) => 2 ** x - x, color: "violet" }], points: [{ x: 0.53, y: 0.91, label: "(0.53, 0.91)", color: "amber" }, { x: 3, y: 5, label: "(3, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Le profit comme différence", S`Le revenu est \(R(x)=12x\) et le coût est \(C(x)=0.02x^2+4x+300\) (en dollars, pour \(x\) articles). Détermine la fonction profit, les seuils de rentabilité et le profit maximal.`,
      [S`<b>Modèle.</b> Le profit est le revenu moins le coût, avec des parenthèses autour de tout le coût : \(P(x)=12x-(0.02x^2+4x+300)=-0.02x^2+8x-300\).`,
        S`<b>Sens du seuil de rentabilité.</b> Le revenu est égal au coût exactement quand \(P(x)=0\), c'est-à-dire là où les graphiques de \(R\) et de \(C\) se croisent.`,
        S`<b>Résous.</b> Multiplie par \(-50\) pour éliminer la décimale : \(x^2-400x+15\,000=0\). La formule quadratique donne \(x=\dfrac{400\pm\sqrt{100\,000}}{2}\approx41.9\) ou \(358.1\).`,
        S`<b>Maximum.</b> \(P\) est une parabole ouverte vers le bas; son sommet est donc le maximum : \(x=-\dfrac{8}{2(-0.02)}=200\), et \(P(200)=-800+1600-300=500\).`,
        S`<b>Vérifie.</b> \(R(200)=2400\) et \(C(200)=800+800+300=1900\), et \(2400-1900=500\) ✓. Le sommet est à mi-chemin entre les seuils de rentabilité : \(\frac{41.9+358.1}{2}=200\) ✓`,
        S`<b>Interprète.</b> L'entreprise fait un profit seulement entre environ \(42\) et \(358\) articles.`],
      S`\(P=-0.02x^2+8x-300\); seuils de rentabilité vers \(42\) et \(358\) articles; maximum de \(500\) dollars à \(200\) articles`,
      plane({ view: { xmin: -10, xmax: 420, ymin: -400, ymax: 700 }, curves: [{ f: (x) => -0.02 * x * x + 8 * x - 300, color: "violet" }], points: [{ x: 200, y: 500, label: "(200, 500)", color: "amber" }, { x: 41.9, y: 0, label: "(41.9, 0)", color: "blue" }, { x: 358.1, y: 0, label: "(358.1, 0)", color: "blue" }], step: { x: 50, y: 100 } })],
    ["Une droite plus une onde", S`Décris \(y=x+\sin x\) sur \(-2\pi\le x\le2\pi\) : sa symétrie, ses zéros et ses valeurs à \(x=\pm\frac{\pi}2\).`,
      [S`<b>Règle de symétrie.</b> Impaire + impaire donne impaire. \(x\) et \(\sin x\) sont toutes deux impaires, donc \(y(-x)=-x+\sin(-x)=-x-\sin x=-y(x)\). Le graphique est symétrique par rapport à l'origine.`,
        S`<b>Zéros : réduis la recherche.</b> \(x+\sin x=0\) veut dire \(\sin x=-x\). Comme \(|\sin x|\le1\), une solution doit vérifier \(|x|\le1\).`,
        S`<b>Zéros : termine.</b> Pour \(0<x\le1\), \(x\) et \(\sin x\) sont tous deux positifs; leur somme n'est donc pas nulle. Par symétrie, c'est la même chose pour \(-1\le x<0\). Il ne reste que \(x=0\), et \(0+\sin0=0\).`,
        S`<b>Valeurs.</b> \(y\left(\frac\pi2\right)=\frac\pi2+1\approx2.57\). Par la symétrie impaire, \(y\left(-\frac\pi2\right)\approx-2.57\).`,
        S`<b>Forme.</b> Comme \(-1\le\sin x\le1\), le graphique n'est jamais à plus de \(1\) de la droite \(y=x\) : il ondule autour de la droite.`],
      S`impaire; un seul zéro à \(x=0\); \(\pm2.57\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x, color: "gray" }, { f: (x) => x + Math.sin(x), color: "violet" }], points: [{ x: Math.PI / 2, y: Math.PI / 2 + 1, label: "(π/2, 2.57)", color: "amber" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("évaluer", S`\(f(x)=3x-2\) et \(g(x)=x^2+4\). Détermine \((f+g)(2)\).`, num(12), "f(2) + g(2).", [S`\(4+8=12\).`], S`\(12\)`),
    q("différence", S`\(f(x)=x^2+2x\) et \(g(x)=3x-5\). Laquelle est \((f-g)(x)\)?`, choice(["x² − x + 5", "x² + 5x − 5", "x² − x − 5", "x² + x + 5"], 0), "Mets g entre parenthèses avant de soustraire.", [S`\(x^2+2x-3x+5\).`], S`\(x^2-x+5\)`),
    q("domaine", S`Quel est le domaine de \(\sqrt{x+2}+\sqrt{4-x}\)?`, choice(["−2 ≤ x ≤ 4", "x ≥ −2", "x ≤ 4", "tous les x réels"], 0), "Les deux racines doivent être définies.", [S`\(x\ge-2\) et \(x\le4\).`], S`\(-2\le x\le4\)`),
    q("évaluer", S`\(f(x)=2^x\), \(g(x)=x^2\). Détermine \((f-g)(3)\).`, num(-1), "8 − 9.", [S`\(2^3-3^2=-1\).`], S`\(-1\)`),
    q("profit", S`\(R(x)=15x\) et \(C(x)=5x+200\). À combien d'articles l'entreprise atteint-elle le seuil de rentabilité?`, num(20), "R = C.", [S`\(P=10x-200=0\Rightarrow x=20\).`], S`\(20\)`),
  ]),

  ...hard([
    ["Symétrie des sommes", S`Montre que la somme de deux fonctions paires est paire, et vérifie si \(x^3+x^2\) est paire, impaire ou ni l'une ni l'autre.`,
      [S`<b>Définition :</b> \(f\) est paire signifie \(f(-x)=f(x)\).`,
        S`<b>Preuve :</b> si \(f,g\) sont paires, \((f+g)(-x)=f(-x)+g(-x)=f(x)+g(x)=(f+g)(x)\); \(f+g\) est donc paire.`,
        S`<b>Vérifie \(h(x)=x^3+x^2\) :</b> \(h(1)=2\) et \(h(-1)=-1+1=0\).`,
        S`<b>Conclusion :</b> \(h(-1)\ne h(1)\) (pas paire) et \(h(-1)\ne-h(1)\) (pas impaire) : ici, une fonction impaire plus une fonction paire ne donne ni l'une ni l'autre.`],
      S`paire + paire donne paire; \(x^3+x^2\) n'est ni paire ni impaire`],
    ["Zéros d'une somme d'ondes", S`Détermine tous les zéros de \(y=\sin x+\sin2x\) pour \(0\le x\le2\pi\).`,
      [S`<b>Angle double :</b> \(\sin2x=2\sin x\cos x\), donc \(y=\sin x(1+2\cos x)\).`,
        S`<b>Premier facteur :</b> \(\sin x=0\Rightarrow x=0,\ \pi,\ 2\pi\).`,
        S`<b>Deuxième facteur :</b> \(\cos x=-\frac12\Rightarrow x=\frac{2\pi}3,\ \frac{4\pi}3\).`,
        S`<b>Vérifie \(x=\frac{2\pi}3\) :</b> \(\sin\frac{2\pi}3+\sin\frac{4\pi}3=\frac{\sqrt3}2-\frac{\sqrt3}2=0\) ✓`],
      S`\(0,\ \frac{2\pi}3,\ \pi,\ \frac{4\pi}3,\ 2\pi\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -2.2, ymax: 2.2 }, curves: [{ f: (x) => Math.sin(x), a: 0, b: 2 * Math.PI, color: "blue" }, { f: (x) => Math.sin(2 * x), a: 0, b: 2 * Math.PI, color: "gray" }, { f: (x) => Math.sin(x) + Math.sin(2 * x), a: 0, b: 2 * Math.PI, color: "violet" }], points: [{ x: 2 * Math.PI / 3, y: 0, label: "(2π/3, 0)", color: "amber" }, { x: 4 * Math.PI / 3, y: 0, label: "(4π/3, 0)", color: "amber" }], step: { x: 1, y: 0.5 } })],
  ], [
    q("difficile", S`\(f(x)=\log x\) et \(g(x)=\log x^2\). Détermine \((f+g)(100)\).`, num(6), "f + g = 3 log x.", [S`\(2+4=6\).`], S`\(6\)`),
    q("difficile", S`\(R(x)=20x-0.05x^2\) et \(C(x)=4x+600\). Détermine le profit maximal.`, num(680), "P = −0.05x² + 16x − 600.", [S`Sommet à \(x=160\); \(P=-1280+2560-600=680\).`], S`\(680\)`),
    q("difficile", S`\(h(x)=3^x+3^{-x}\). Détermine \(h(2)\) au centième près.`, num(9 + 1 / 9, 0.01), "9 + 1/9.", [S`\(9+0.11=9.11\).`], S`\(\approx9.11\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce que (f + g)(x)?", "La fonction dont la valeur est f(x) + g(x) à chaque x."],
      ["Quel est le domaine de f − g?", "Tous les x qui sont dans le domaine de f et dans celui de g."],
      ["Comment additionner deux graphiques?", "À chaque x, additionne les deux hauteurs (superposition)."],
      ["Où f − g vaut-elle zéro?", "Là où les graphiques de f et de g se croisent."],
      ["Pourquoi le profit est-il une différence de fonctions?", "Profit = revenu − coût, et les deux sont des fonctions du nombre d'articles."],
    ],
    summary: [
      "(f ± g)(x) = f(x) ± g(x).",
      "Domaine : là où les deux fonctions existent.",
      "Graphiques : additionne ou soustrais les hauteurs au même x.",
      "Paire + paire donne paire; impaire + impaire donne impaire.",
    ],
    next: "En 8.2, tu multiplies et tu divises des fonctions.",
  }),
];
