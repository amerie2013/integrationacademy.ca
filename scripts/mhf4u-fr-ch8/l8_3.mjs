// MHF4U-FR 8.3 — Fonctions composées (miroir français de ../mhf4u-ch8/l8_3.mjs).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "8.3 Fonctions composées";
export const ID = lessonId(8, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Fonctions composées",
    overview: S`Dans une fonction composée, la valeur d'une fonction devient l'entrée de la suivante : \((f\circ g)(x)=f(g(x))\). La consommation d'essence d'une voiture dépend de la distance, et la distance dépend du temps; la consommation d'essence est donc une fonction composée du temps. Dans cette leçon, tu évalues et tu construis des fonctions composées, tu constates que l'ordre compte, tu détermines leurs domaines et tu décomposes des fonctions compliquées en morceaux simples.`,
    goals: [
      "évaluer \\(f(g(a))\\) à partir d'équations, de tables et de graphiques;",
      "déterminer \\(f(g(x))\\) et \\(g(f(x))\\) algébriquement;",
      "déterminer le domaine d'une fonction composée;",
      "décomposer une fonction en deux fonctions plus simples;",
      "composer une fonction avec sa fonction inverse et utiliser des fonctions composées en contexte.",
    ],
    curriculum: "D2.3 (déterminer la composition de deux fonctions numériquement et graphiquement), D2.4 (déterminer algébriquement la composition de deux fonctions et vérifier que f(f⁻¹(x)) = x), D2.5 (résoudre des problèmes portant sur la composition de deux fonctions)",
    prior: [
      [S`Si \(f(x)=x^2+1\), détermine \(f(3)\).`, S`\(10\).`],
      [S`Si \(f(x)=2x\), écris \(f(a+1)\).`, S`\(2a+2\).`],
      [S`Fonction inverse de \(y=2^x\)?`, S`\(y=\log_2x\).`],
    ],
    words: [
      ["Fonction composée", "\\((f\\circ g)(x)=f(g(x))\\) : on applique \\(g\\), puis \\(f\\)", "\\(f(g(2))\\)"],
      ["Fonction intérieure / extérieure", "\\(g\\) est appliquée en premier (intérieure), \\(f\\) en second (extérieure)", "\\(\\sqrt{x^2+1}\\) : intérieure \\(x^2+1\\)"],
      ["Décomposer", "écrire \\(h\\) sous la forme \\(f(g(x))\\)", "\\((2x+5)^3:\\ g=2x+5,\\ f=x^3\\)"],
      ["Identité", "\\(f(f^{-1}(x))=x\\)", "\\(2^{\\log_2x}=x\\)"],
    ],
  }),

  section("📌 Travailler de l'intérieur vers l'extérieur", S`
  ${table(["Étape", "Pour f(g(2)) avec f(x) = 3x − 1, g(x) = x² + 2"], [
    ["1. D'abord l'intérieur", "\\(g(2)=4+2=6\\)"],
    ["2. Donne la valeur obtenue à la fonction extérieure", "\\(f(6)=18-1=17\\)"],
    ["3. L'ordre compte", "\\(g(f(2))=g(5)=27\\ne17\\)"],
  ])}
  ${keyIdea(S`\[(f\circ g)(x)=f\big(g(x)\big).\] Le domaine de \(f\circ g\) est formé de tous les \(x\) du domaine de \(g\) dont la valeur \(g(x)\) est dans le domaine de \(f\). En général, \(f(g(x))\ne g(f(x))\).`)}`),

  widget("compositeLab", { init: ["dbl", "sq"] }),

  section("📌 Les fonctions composées sur un graphique", S`
  <p>Pour lire \(f(g(a))\) sur des graphiques : monte de \(x=a\) jusqu'au graphique de \(g\), lis sa hauteur, puis utilise cette hauteur comme nouvelle valeur de \(x\) sur le graphique de \(f\).</p>
  ${plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 0.5 * x + 1, color: "blue" }, { f: (x) => 6 - x, color: "violet" }], points: [{ x: 2, y: 2, label: "g(2) = 2", color: "blue" }, { x: 2, y: 4, label: "f(2) = 4", color: "amber" }], step: { x: 1, y: 1 } }, "En bleu g(x) = ½x + 1, en violet f(x) = 6 − x : g(2) = 2, puis f(2) = 4, donc f(g(2)) = 4.")}
  ${watchOut([
    "f(g(x)) veut dire remplacer x par g(x) dans f, et non multiplier f(x)·g(x).",
    "Travaille de l'intérieur vers l'extérieur : la fonction placée à côté de x s'applique en premier.",
    "f(g(x)) et g(f(x)) sont habituellement différentes.",
    "Le domaine d'une fonction composée peut être plus petit que ce que laisse croire la formule simplifiée : vérifie le domaine de la fonction intérieure.",
    "Mets la substitution entre parenthèses : f(x) = 3x − 1 donne f(x² + 2) = 3(x² + 2) − 1.",
  ])}`),

  examples([
    ["Évaluer dans les deux ordres", S`\(f(x)=3x-1\) et \(g(x)=x^2+2\). Détermine \(f(g(2))\) et \(g(f(2))\).`,
      [S`<b>Règle.</b> Travaille de l'intérieur vers l'extérieur : la fonction placée à côté du nombre agit en premier, et sa valeur devient l'entrée de la fonction extérieure.`,
        S`<b>\(f(g(2))\) : intérieur.</b> \(g(2)=2^2+2=6\).`,
        S`<b>\(f(g(2))\) : extérieur.</b> \(f(6)=3(6)-1=17\).`,
        S`<b>\(g(f(2))\) : intérieur.</b> \(f(2)=3(2)-1=5\).`,
        S`<b>\(g(f(2))\) : extérieur.</b> \(g(5)=5^2+2=27\).`,
        S`<b>Conclusion.</b> \(17\ne27\); l'ordre de composition compte donc. Sur le graphique, suis la valeur d'une courbe jusqu'à l'entrée de l'autre.`],
      S`\(17\) et \(27\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -2, ymax: 30 }, curves: [{ f: (x) => x * x + 2, color: "blue" }], lines: [{ m: 3, b: -1, color: "violet" }], points: [{ x: 2, y: 6, label: "g(2) = 6", color: "blue" }, { x: 6, y: 17, label: "f(6) = 17", color: "amber" }, { x: 5, y: 27, label: "g(5) = 27", color: "amber" }, { x: 2, y: 5, label: "f(2) = 5", color: "violet" }], step: { x: 1, y: 2 } })],
    ["Trouver les formules des fonctions composées", S`Pour les mêmes \(f\) et \(g\), détermine \(f(g(x))\) et \(g(f(x))\).`,
      [S`<b>Règle.</b> Pour trouver \(f(g(x))\), remplace chaque \(x\) de \(f\) par toute l'expression \(g(x)\), entre parenthèses.`,
        S`<b>\(f(g(x))\).</b> \(f(x)=3x-1\) devient \(3(x^2+2)-1\). Développe : \(3x^2+6-1=3x^2+5\).`,
        S`<b>\(g(f(x))\).</b> \(g(x)=x^2+2\) devient \((3x-1)^2+2\). C'est tout \(3x-1\) qui est élevé au carré.`,
        S`<b>Développe.</b> \((3x-1)^2=9x^2-6x+1\), donc \(g(f(x))=9x^2-6x+3\).`,
        S`<b>Vérifie avec \(x=2\).</b> \(3(4)+5=17\) ✓ et \(36-12+3=27\) ✓, comme à l'exemple 1.`,
        S`<b>Sur le graphique.</b> Ce sont deux paraboles différentes, une pour chaque ordre.`],
      S`\(3x^2+5\) et \(9x^2-6x+3\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: 0, ymax: 35 }, curves: [{ f: (x) => 3 * x * x + 5, color: "violet" }, { f: (x) => 9 * x * x - 6 * x + 3, color: "blue" }], points: [{ x: 2, y: 17, label: "(2, 17)", color: "amber" }, { x: 2, y: 27, label: "(2, 27)", color: "amber" }], step: { x: 1, y: 5 } })],
    ["Domaine d'une fonction composée", S`\(f(x)=\sqrt x\) et \(g(x)=4-x^2\). Détermine \(f(g(x))\), \(g(f(x))\) et le domaine de chacune.`,
      [S`<b>Règle.</b> \(x\) doit être permis par la fonction intérieure, et la valeur intérieure doit être permise par la fonction extérieure.`,
        S`<b>\(f(g(x))=\sqrt{4-x^2}\).</b> La fonction intérieure \(4-x^2\) accepte tous les \(x\), mais la racine exige \(4-x^2\ge0\), donc \(x^2\le4\) et \(-2\le x\le2\).`,
        S`<b>Son graphique.</b> \(y=\sqrt{4-x^2}\) donne \(y^2+x^2=4\) avec \(y\ge0\) : la moitié supérieure d'un cercle de rayon \(2\).`,
        S`<b>\(g(f(x))=4-(\sqrt x)^2=4-x\).</b> La formule simplifiée semble définie partout.`,
        S`<b>Mais la fonction intérieure vient en premier.</b> \(\sqrt x\) exige \(x\ge0\); le domaine est donc \(x\ge0\). Simplifier n'enlève pas cette restriction.`,
        S`<b>Vérifie.</b> \(g(f(-1))\) exigerait \(\sqrt{-1}\), qui n'est pas réel, même si \(4-(-1)=5\) ✓. Le graphique bleu n'est qu'une partie d'une droite.`],
      S`\(\sqrt{4-x^2}\), \(-2\le x\le2\); \(4-x\), \(x\ge0\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 4 - x * x)), a: -2, b: 2, color: "violet" }, { f: (x) => 4 - x, a: 0, color: "blue" }], points: [{ x: 0, y: 2, label: "(0, 2)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Décomposer", S`Écris chaque fonction sous la forme \(f(g(x))\) : \(h(x)=(2x+5)^3\), \(k(x)=\log(x^2+1)\), \(m(x)=2^{\sin x}\).`,
      [S`<b>Méthode.</b> Imagine que tu calcules la fonction pour un nombre. La première chose que tu calcules est la fonction intérieure \(g\); ce que tu fais ensuite avec ce résultat est la fonction extérieure \(f\).`,
        S`<b>\(h\).</b> Calcule d'abord \(2x+5\), puis élève au cube : \(g(x)=2x+5\), \(f(x)=x^3\).`,
        S`<b>\(k\).</b> Calcule d'abord \(x^2+1\), puis prends le logarithme : \(g(x)=x^2+1\), \(f(x)=\log x\).`,
        S`<b>\(m\).</b> Calcule d'abord \(\sin x\), puis utilise-le comme exposant de \(2\) : \(g(x)=\sin x\), \(f(x)=2^x\).`,
        S`<b>Vérifie \(h\) à \(x=0\).</b> \(g(0)=5\) et \(f(5)=125\), et directement \((0+5)^3=125\) ✓`,
        S`<b>Vérifie \(k\) à \(x=3\).</b> \(g(3)=10\) et \(f(10)=1\), et directement \(\log(9+1)=1\) ✓. Le graphique montre \(k\) : comme \(x^2+1\ge1\), sa plus petite valeur est \(\log1=0\).`],
      S`\(h:\ x^3\circ(2x+5)\); \(k:\ \log x\circ(x^2+1)\); \(m:\ 2^x\circ\sin x\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 2 }, curves: [{ f: (x) => Math.log10(x * x + 1), color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "blue" }], step: { x: 1, y: 0.5 } })],
    ["Une fonction composée en contexte", S`Une voiture parcourt \(d(t)=80t\) km en \(t\) heures et consomme \(F(d)=0.07d\) litres d'essence pour \(d\) km. Détermine \(F(d(t))\), l'essence consommée en \(3\) h et le moment où \(40\) L ont été consommés.`,
      [S`<b>Pourquoi une fonction composée?</b> L'essence dépend de la distance, et la distance dépend du temps. Le temps entre donc en premier, la distance en sort, et celle-ci entre dans la fonction essence.`,
        S`<b>Compose.</b> \(F(d(t))=0.07(80t)=5.6t\) litres après \(t\) heures.`,
        S`<b>Trois heures.</b> \(5.6(3)=16.8\) L.`,
        S`<b>Quarante litres.</b> \(5.6t=40\), donc \(t=\dfrac{40}{5.6}\approx7.14\) h.`,
        S`<b>Vérifie par étapes.</b> \(d(3)=240\) km et \(F(240)=0.07(240)=16.8\) L ✓`,
        S`<b>Vérifie les unités.</b> \(\frac{\text{L}}{\text{km}}\times\frac{\text{km}}{\text{h}}=\frac{\text{L}}{\text{h}}\); \(5.6\) est donc en litres par heure ✓`],
      S`\(5.6t\); \(16.8\) L; environ \(7.1\) h`,
      plane({ view: { xmin: -0.5, xmax: 10, ymin: -3, ymax: 60 }, lines: [{ m: 5.6, b: 0, color: "violet" }, { m: 0, b: 40, color: "blue", dash: true }], points: [{ x: 3, y: 16.8, label: "(3, 16.8)", color: "amber" }, { x: 7.14, y: 40, label: "(7.14, 40)", color: "amber" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("évaluer", S`\(f(x)=x+4\), \(g(x)=2x^2\). Détermine \(f(g(-1))\).`, num(6), "g(−1) = 2.", [S`\(f(2)=6\).`], S`\(6\)`),
    q("évaluer", S`Avec les mêmes fonctions, détermine \(g(f(-1))\).`, num(18), "f(−1) = 3.", [S`\(g(3)=18\).`], S`\(18\)`),
    q("formule", S`\(f(x)=x^2\), \(g(x)=x-3\). Laquelle est \(f(g(x))\)?`, choice(["(x − 3)²", "x² − 3", "x² − 3x", "(x − 3)x²"], 0), "Remplace x par g(x) dans f.", [S`\(f(x-3)=(x-3)^2\).`], S`\((x-3)^2\)`),
    q("décomposer", S`\(h(x)=\sqrt{5x-1}=f(g(x))\). Laquelle est \(g\)?`, choice(["5x − 1", "√x", "5x", "√(5x)"], 0), "La fonction intérieure se calcule en premier.", [S`\(g(x)=5x-1\), \(f(x)=\sqrt x\).`], S`\(g(x)=5x-1\)`),
    q("contexte", S`\(d(t)=60t\) km et \(F(d)=0.05d\) L. Combien de litres sont consommés en \(4\) h?`, num(12), "F(d(4)).", [S`\(d(4)=240\), \(F(240)=12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["Une fonction et sa fonction inverse", S`\(f(x)=2^x\) et \(g(x)=\log_2x\). Détermine \(f(g(x))\) et \(g(f(x))\) ainsi que leurs domaines.`,
      [S`<b>\(f(g(x))=2^{\log_2x}\) :</b> \(\log_2x\) est l'exposant qui donne \(x\); cette expression vaut donc \(x\). La fonction intérieure \(\log_2x\) exige \(x>0\).`,
        S`<b>\(g(f(x))=\log_2(2^x)=x\) :</b> \(2^x>0\) pour tout \(x\); le domaine est donc l'ensemble des nombres réels.`,
        S`<b>Signification :</b> composer une fonction avec sa fonction inverse l'annule : \(f(f^{-1}(x))=x\).`,
        S`<b>Vérifie :</b> \(2^{\log_28}=2^3=8\) ✓ et \(\log_2(2^{-1})=-1\) ✓`],
      S`\(x\) pour \(x>0\); \(x\) pour tous les \(x\) réels`],
    ["Résoudre une équation avec une fonction composée", S`\(f(x)=x^2-2\) et \(g(x)=x+1\). Résous \(f(g(x))=7\).`,
      [S`<b>Construis la fonction composée :</b> \(f(g(x))=(x+1)^2-2\).`,
        S`<b>Pose l'égalité avec 7 :</b> \((x+1)^2=9\Rightarrow x+1=\pm3\).`,
        S`<b>Résous :</b> \(x=2\) ou \(x=-4\).`,
        S`<b>Vérifie :</b> \(g(2)=3\), \(f(3)=7\) ✓; \(g(-4)=-3\), \(f(-3)=7\) ✓`],
      S`\(x=2\) ou \(x=-4\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 - 2, color: "violet" }], lines: [{ m: 0, b: 7, color: "blue", dash: true }], points: [{ x: 2, y: 7, label: "(2, 7)", color: "amber" }, { x: -4, y: 7, label: "(−4, 7)", color: "amber" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`\(f(x)=2x-3\). Détermine \(f(f(5))\).`, num(11), "f(f(x)) = 4x − 9.", [S`\(f(5)=7\), \(f(7)=11\).`], S`\(11\)`),
    q("difficile", S`\(f(x)=x+3\) et \(f(g(x))=x^2+5\). Détermine \(g(3)\).`, num(11), "g(x) + 3 = x² + 5.", [S`\(g(x)=x^2+2\), donc \(g(3)=11\).`], S`\(11\)`),
    q("difficile", S`\(f(x)=\dfrac{1}{x-1}\). Détermine \(f(f(3))\).`, num(-2), "f(3) = 1/2.", [S`\(f\left(\frac12\right)=\frac{1}{-1/2}=-2\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["Que veut dire f(g(x))?", "Applique g à x, puis applique f au résultat."],
      ["f(g(x)) est-elle la même chose que g(f(x))?", "Habituellement non; vérifie une valeur pour le voir."],
      ["Comment trouver le domaine de f(g(x))?", "x doit être dans le domaine de g, et g(x) doit être dans le domaine de f."],
      ["Comment décomposer une fonction?", "Appelle g l'expression calculée en premier; le reste est f."],
      ["Que vaut f(f⁻¹(x))?", "x : une fonction et sa fonction inverse s'annulent."],
    ],
    summary: [
      "(f ∘ g)(x) = f(g(x)) : de l'intérieur vers l'extérieur.",
      "L'ordre compte.",
      "Domaine : le domaine intérieur, puis la restriction extérieure.",
      "f(f⁻¹(x)) = x.",
    ],
    next: "En 8.4, tu résous des inéquations qui comparent deux fonctions, comme f(x) > g(x).",
  }),
];
