// MHF4U-FR 7.6 — Révision du chapitre 7 : formes équivalentes, équations exponentielles, lois du produit et du quotient,
// équations logarithmiques et modèles, dans des exemples à plusieurs étapes.
import { intro, section, examples, practice, wrapUp, table, q, num, choice, hard, plane, roots } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "7.6 Révision du chapitre 7";
export const ID = lessonId(7, 6);

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 7 — Résolution d'équations exponentielles et logarithmiques",
    overview: S`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, de la pratique variée et deux problèmes plus difficiles. Le fil conducteur de tout le chapitre est une seule question : l'inconnue se trouve-t-elle dans un exposant ou dans un logarithme? Les exposants descendent grâce aux logarithmes; les logarithmes disparaissent quand on réécrit sous forme exponentielle.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "choisir entre une base commune et les logarithmes;",
      "développer et condenser à l'aide des lois des logarithmes;",
      "résoudre des équations logarithmiques et rejeter les racines étrangères;",
      "modéliser et résoudre des problèmes de croissance et de décroissance.",
    ],
    curriculum: "A1.4, A3.1–A3.4, D1.9 (tout le chapitre)",
    prior: [
      [S`Résous \(2^x=64\).`, S`\(x=6\).`],
      [S`Condense \(\log a-\log b\).`, S`\(\log\frac ab\).`],
      [S`Résous \(\log_2x=3\).`, S`\(x=8\).`],
    ],
    words: [
      ["Base commune", "réécrire les deux membres comme puissances d'une même base, puis égaler les exposants", "\\(4^x=8\\Rightarrow2x=3\\)"],
      ["Prendre les logarithmes", "faire descendre un exposant avec la loi de la puissance", "\\(x\\log5=\\log120\\)"],
      ["Condenser", "combiner des logarithmes en un seul avec les lois du produit, du quotient et de la puissance", "\\(\\log x+\\log y=\\log xy\\)"],
      ["Racine étrangère", "une réponse obtenue par l'algèbre qui ne vérifie pas l'équation de départ", "un argument négatif"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["7.1 Formes équivalentes", "\\(b^m=b^n\\iff m=n\\)", "\\(8^x=2^{3x}\\)", "mets l'exposant entier entre parenthèses"],
    ["7.2 Équations exponentielles", "isoler, prendre les logarithmes, diviser", "\\(x=\\frac{\\log c}{\\log b}\\)", "\\(b^x\\le0\\) n'a aucune solution"],
    ["7.3 Lois du produit et du quotient", "\\(\\log xy=\\log x+\\log y\\)", "\\(\\log_312-\\log_34=1\\)", "aucune loi pour \\(\\log(x+y)\\)"],
    ["7.4 Équations logarithmiques", "condenser, puis \\(A=b^c\\) ou \\(A=B\\)", "\\(\\log_2A=3\\Rightarrow A=8\\)", "vérifie chaque racine"],
    ["7.5 Modèles", "\\(A=A_0b^{t/p}\\)", "demi-vie \\(\\left(\\frac12\\right)^{t/h}\\)", "le facteur de décroissance est \\(1-r\\)"],
  ])),

  examples([
    ["Base commune ou logarithmes?", S`Résous \(8^{x}=4^{x+3}\) et \(2^{x+1}=3^{x}\).`,
      [S`<b>Choisir la méthode.</b> \(8\) et \(4\) sont tous deux des puissances de \(2\), donc la première équation a une base commune. \(2\) et \(3\) ne sont pas des puissances d'un même entier, donc la deuxième exige les logarithmes.`,
        S`<b>Première équation.</b> \(8^x=(2^3)^x=2^{3x}\) et \(4^{x+3}=(2^2)^{x+3}=2^{2x+6}\). Égale les exposants : \(3x=2x+6\), donc \(x=6\).`,
        S`<b>Vérifier la première.</b> \(8^6=262\,144\) et \(4^9=262\,144\) ✓`,
        S`<b>Deuxième équation.</b> Prends les logarithmes et fais descendre les exposants : \((x+1)\log2=x\log3\).`,
        S`<b>Développer et regrouper les termes en \(x\).</b> \(x\log2+\log2=x\log3\), donc \(\log2=x(\log3-\log2)\), et \(x=\dfrac{\log2}{\log3-\log2}\approx1.7095\).`,
        S`<b>Vérifier la deuxième.</b> \(2^{2.7095}\approx6.54\) et \(3^{1.7095}\approx6.54\) ✓. Le graphique montre l'intersection à cette hauteur.`],
      S`\(x=6\); \(x\approx1.7095\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -2, ymax: 20 }, curves: [{ f: (x) => 2 ** (x + 1), color: "violet" }, { f: (x) => 3 ** x, color: "blue" }], points: [{ x: 1.7095, y: 6.54, label: "(1.71, 6.54)", color: "amber" }], step: { x: 0.5, y: 2 } }, "La deuxième équation : y = 2ˣ⁺¹ et y = 3ˣ.")],
    ["Condenser et évaluer", S`Évalue \(\log_550+\log_510-2\log_52\).`,
      [S`<b>Plan.</b> Aucun des trois logarithmes n'est un nombre entier, mais ils ont la même base \(5\); condense-les donc en un seul.`,
        S`<b>D'abord la loi de la puissance.</b> Le coefficient \(2\) devient un exposant : \(2\log_52=\log_52^2=\log_54\).`,
        S`<b>Loi du produit pour la somme.</b> \(\log_550+\log_510=\log_5500\).`,
        S`<b>Loi du quotient pour la différence.</b> \(\log_5500-\log_54=\log_5\dfrac{500}{4}=\log_5125\).`,
        S`<b>Évaluer.</b> \(5^3=125\), donc la valeur est \(3\).`,
        S`<b>Vérification par changement de base.</b> \(\log_550\approx2.4307\), \(\log_510\approx1.4307\), \(2\log_52\approx0.8614\), et \(2.4307+1.4307-0.8614=3.0000\) ✓`],
      S`\(3\)`,
      plane({ view: { xmin: -5, xmax: 140, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.log(x) / Math.log(5), a: 0.3, color: "violet" }], points: [{ x: 10, y: 1.4307, label: "(10, 1.43)", color: "blue" }, { x: 50, y: 2.4307, label: "(50, 2.43)", color: "blue" }, { x: 125, y: 3, label: "(125, 3)", color: "amber" }], step: { x: 10, y: 0.5 } })],
    ["Une équation logarithmique", S`Résous \(\log_3(x+5)+\log_3(x-1)=3\).`,
      [S`<b>Domaine.</b> \(x+5>0\) et \(x-1>0\). La deuxième condition est la plus forte, donc \(x>1\).`,
        S`<b>Condenser avec la loi du produit.</b> \(\log_3\big((x+5)(x-1)\big)=3\).`,
        S`<b>Forme exponentielle.</b> \((x+5)(x-1)=3^3=27\).`,
        S`<b>Développer et résoudre.</b> \(x^2+4x-5=27\), donc \(x^2+4x-32=0\). Deux nombres dont le produit est \(-32\) et la somme \(4\) sont \(8\) et \(-4\) : \((x+8)(x-4)=0\).`,
        S`<b>Tester selon le domaine.</b> \(x=-8\) n'est pas supérieur à \(1\), donc on le rejette. \(x=4\) est admissible.`,
        S`<b>Vérification.</b> \(\log_39+\log_33=2+1=3\) ✓. Le graphique n'existe que pour \(x>1\) et coupe \(y=3\) une seule fois ✓`],
      S`\(x=4\)`,
      plane({ view: { xmin: 0, xmax: 9, ymin: -2, ymax: 5 }, curves: [{ f: (x) => (Math.log(x + 5) + Math.log(x - 1)) / Math.log(3), a: 1.001, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], points: [{ x: 4, y: 3, label: "(4, 3)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Demi-vie à partir de données, puis une prédiction", S`Un échantillon radioactif de \(120\) g en contient encore \(90\) g après \(5\) jours. Trouve la demi-vie, puis le moment où il restera \(10\) g.`,
      [S`<b>Modèle.</b> \(A=120\left(\tfrac12\right)^{t/h}\), où \(\frac th\) compte les réductions de moitié.`,
        S`<b>Utiliser les données.</b> \(90=120\left(\tfrac12\right)^{5/h}\). Divise par \(120\) : \(\left(\tfrac12\right)^{5/h}=0.75\).`,
        S`<b>Demi-vie.</b> Prends les logarithmes : \(\dfrac5h\log0.5=\log0.75\), donc \(h=\dfrac{5\log0.5}{\log0.75}\approx12.05\) jours.`,
        S`<b>Prédiction.</b> Pour \(10\) g, \(\left(\tfrac12\right)^{t/h}=\dfrac{10}{120}=\dfrac1{12}\). Prends les logarithmes : \(t=\dfrac{h\log(1/12)}{\log0.5}\approx43.2\) jours.`,
        S`<b>Vérification avec des demi-vies entières.</b> Trois demi-vies (environ \(36\) jours) laissent \(15\) g. Quatre (environ \(48\) jours) laissent \(7.5\) g. Comme \(10\) g se situe entre les deux, \(43.2\) jours est raisonnable ✓`,
        S`<b>Lire le graphique.</b> La courbe passe par \((5,\,90)\) et coupe \(y=10\) près de \(t=43\) ✓`],
      S`\(h\approx12.05\) jours; environ \(43.2\) jours`,
      plane({ view: { xmin: -2, xmax: 60, ymin: 0, ymax: 130 }, curves: [{ f: (t) => 120 * 0.5 ** (t / 12.047), a: 0, color: "violet" }], lines: [{ m: 0, b: 10, color: "blue", dash: true }], points: [{ x: 5, y: 90, label: "(5, 90)", color: "blue" }, { x: 43.19, y: 10, label: "(43.2, 10)", color: "amber" }], step: { x: 5, y: 10 } })],
    ["Deux bases différentes dans une équation logarithmique", S`Résous \(\log_2x=\log_4(x+6)\).`,
      [S`<b>Problème.</b> Les bases sont différentes, donc on ne peut pas encore égaler les arguments. Réécris les deux membres en base \(2\).`,
        S`<b>Changement de base.</b> \(\log_4(x+6)=\dfrac{\log_2(x+6)}{\log_24}=\dfrac{\log_2(x+6)}{2}\). Donc \(\log_2x=\dfrac{\log_2(x+6)}2\).`,
        S`<b>Éliminer la fraction, puis appliquer la loi de la puissance.</b> \(2\log_2x=\log_2(x+6)\), donc \(\log_2x^2=\log_2(x+6)\).`,
        S`<b>Égaler les arguments.</b> \(x^2=x+6\), donc \(x^2-x-6=0\) et \((x-3)(x+2)=0\).`,
        S`<b>Domaine.</b> \(\log_2x\) exige \(x>0\), donc on rejette \(x=-2\).`,
        S`<b>Vérifier \(x=3\).</b> \(\log_23\approx1.585\) et \(\log_49\approx1.585\) ✓. Les courbes se coupent en \((3,\,1.58)\) sur le graphique ✓`],
      S`\(x=3\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -2, ymax: 4 }, curves: [{ f: (x) => Math.log2(x), a: 0.05, color: "violet" }, { f: (x) => Math.log(x + 6) / Math.log(4), a: -0.9, color: "blue" }], points: [{ x: 3, y: Math.log2(3), label: "(3, 1.58)", color: "amber" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("base commune", S`Résous \(27^{x}=9^{x+1}\).`, num(2), "Base 3.", [S`\(3x=2x+2\).`], S`\(2\)`),
    q("logarithmes", S`Résous \(6^x=50\) au centième près.`, num(L(50) / L(6), 0.01), "x = log 50 / log 6.", [S`\(\approx2.18\).`], S`\(\approx2.18\)`),
    q("loi du quotient", S`Évalue \(\log_2 24-\log_2 3\).`, num(3), "24 ÷ 3 = 8.", [S`\(\log_28=3\).`], S`\(3\)`),
    q("équation logarithmique", S`Résous \(\log_4x+\log_4(x+3)=1\).`, num(1), "x(x + 3) = 4.", [S`\((x+4)(x-1)=0\); rejette \(-4\).`], S`\(1\)`),
    q("laquelle est égale?", S`Quelle valeur est égale à \(\log_345-\log_35\)?`, choice(["2", "log₃ 40", "9", "log₃ 45 ÷ log₃ 5"], 0), "Loi du quotient.", [S`\(\log_39=2\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Quand deux comptes ont-ils le même solde?", S`Un montant de \(5000\ \$\) rapporte \(4\,\%\) capitalisé trimestriellement; un montant de \(6000\ \$\) rapporte \(2.5\,\%\) capitalisé annuellement. Quand les soldes sont-ils égaux?`,
      [S`<b>Modèles :</b> \(5000(1.01)^{4t}\) et \(6000(1.025)^{t}\).`,
        S`<b>Regrouper les puissances :</b> \(\left(\dfrac{1.01^4}{1.025}\right)^t=\dfrac{6000}{5000}=1.2\), et \(\dfrac{1.01^4}{1.025}\approx1.015223\).`,
        S`<b>Prendre les logarithmes :</b> \(t=\dfrac{\log1.2}{\log1.015223}\approx12.07\) ans.`,
        S`<b>Vérification :</b> les deux soldes valent environ \(8083\ \$\) en \(t=12.07\) ✓`],
      S`après environ \(12.1\) ans`],
    ["Une équation du second degré dans une exponentielle", S`Résous \(4^x-5\cdot2^x+4=0\) et explique pourquoi il n'y a pas de troisième racine.`,
      [S`<b>Pose \(u=2^x\) :</b> \(u^2-5u+4=0\Rightarrow(u-1)(u-4)=0\).`,
        S`<b>Substituer à rebours :</b> \(2^x=1\Rightarrow x=0\); \(2^x=4\Rightarrow x=2\).`,
        S`<b>Pourquoi seulement deux :</b> une équation du second degré en \(u\) a au plus deux racines, et chaque valeur positive de \(u\) donne exactement une valeur de \(x\), car \(2^x\) est biunivoque.`,
        S`<b>Vérification :</b> \(x=0\) : \(1-5+4=0\) ✓; \(x=2\) : \(16-20+4=0\) ✓`],
      S`\(x=0\) ou \(x=2\)`],
  ], [
    q("difficile", S`Résous \(9^x-10\cdot3^x+9=0\). Entre les deux racines.`, roots(0, 2), "Pose u = 3ˣ.", [S`\((u-1)(u-9)=0\Rightarrow x=0\) ou \(x=2\).`], S`\(x=0,\ 2\)`),
    q("difficile", S`Résous \(\log x+\log(x+21)=2\).`, num(4), "x(x + 21) = 100.", [S`\((x+25)(x-4)=0\); rejette \(-25\).`], S`\(4\)`),
    q("difficile", S`Il reste \(30\,\%\) d'une substance après \(20\) ans. Trouve sa demi-vie (au centième près).`, num(20 * L(0.5) / L(0.3), 0.01), "(1/2)^(20/h) = 0.3.", [S`\(h=\frac{20\log0.5}{\log0.3}\approx11.51\).`], S`\(\approx11.51\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la première question à se poser pour toute équation?", "L'inconnue est-elle dans un exposant (prendre les logarithmes) ou dans un logarithme (réécrire sous forme exponentielle)?"],
      ["Quand puis-je égaler les exposants?", "Quand chaque membre est une seule puissance de la même base."],
      ["Que dois-je faire après avoir résolu une équation logarithmique?", "Vérifie chaque racine dans l'équation de départ; rejette celles qui donnent un argument nul ou négatif."],
      ["Comment reconnaître une équation de forme quadratique?", "b²ˣ et bˣ apparaissent ensemble : pose u = bˣ."],
      ["Comment trouver une demi-vie à partir de données?", "Substitue les données dans A₀(1/2)^(t/h), prends les logarithmes et résous pour h."],
    ],
    summary: [
      "Base commune ⇒ égaler les exposants; sinon, prendre les logarithmes.",
      "Les lois du produit, du quotient et de la puissance servent à développer et à condenser.",
      "Équations logarithmiques : domaine, condenser, réécrire, vérifier.",
      "Modèles : A = A₀b^(t/p); résous les questions « quand? » avec les logarithmes.",
    ],
    next: "Le chapitre 8 combine des fonctions : sommes, produits, quotients et compositions.",
  }),
];
