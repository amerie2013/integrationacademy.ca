// MHF4U-FR 8.6 — Révision du chapitre 8 (miroir français de ../mhf4u-ch8/l8_6.mjs).
import { intro, section, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "8.6 Révision du chapitre 8";
export const ID = lessonId(8, 6);

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 8 — Combinaison de fonctions",
    overview: S`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, de la pratique variée et deux problèmes plus difficiles. Le fil conducteur de tout le chapitre : une fonction combinée est construite à partir des valeurs de fonctions plus simples; son domaine, ses zéros, ses signes et son graphique proviennent donc tous de ses parties.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "déterminer des sommes, des différences, des produits, des quotients et des composées;",
      "donner le domaine de fonctions combinées;",
      "résoudre des inéquations qui comparent deux fonctions;",
      "construire et utiliser des modèles combinés.",
    ],
    curriculum: "D2.1–D2.5, D3.1–D3.3 (tout le chapitre)",
    prior: [
      [S`\((f+g)(x)\)?`, S`\(f(x)+g(x)\).`],
      [S`Domaine de \(\frac fg\)?`, S`Les deux sont définies et \(g(x)\ne0\).`],
      [S`\(f(g(x))\) : laquelle en premier?`, S`\(g\), puis \(f\).`],
    ],
    words: [
      ["Combinaison", "\\(f\\pm g,\\ fg,\\ \\frac fg\\)", "\\(x^2+2^x\\)"],
      ["Fonction composée", "\\(f(g(x))\\)", "\\(\\log(x^2+1)\\)"],
      ["Point de croisement", "là où \\(f(x)=g(x)\\)", "zéros de \\(f-g\\)"],
      ["Enveloppe", "le facteur décroissant d'une onde amortie", "\\(12(0.75)^t\\)"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["8.1 Sommes et différences", "additionner ou soustraire les valeurs", "\\(P=R-C\\)", "mettre \\(g\\) entre parenthèses quand on soustrait"],
    ["8.2 Produits et quotients", "multiplier ou diviser les valeurs", "\\(\\tan x=\\frac{\\sin x}{\\cos x}\\)", "exclure \\(g(x)=0\\)"],
    ["8.3 Fonctions composées", "\\(f(g(x))\\) : de l'intérieur vers l'extérieur", "\\(F(d(t))\\)", "l'ordre compte; domaine intérieur"],
    ["8.4 Inéquations", "\\(f>g\\iff f-g>0\\)", "\\(x^2>x+6\\)", "ne jamais multiplier par une quantité de signe inconnu"],
    ["8.5 Modèles", "tendance + cycle, enveloppe × onde", "\\(20(0.9)^t\\cos\\pi t\\)", "domaine et unités raisonnables"],
  ])),

  examples([
    ["Toutes les combinaisons", S`\(f(x)=x^2-1\) et \(g(x)=x+3\). Détermine \((f+g)(2)\), \((fg)(-1)\), le domaine de \(\frac fg\) et \(f(g(x))\).`,
      [S`<b>Somme.</b> Additionne les valeurs pour la même entrée : \(f(2)=3\) et \(g(2)=5\), donc \((f+g)(2)=8\).`,
        S`<b>Produit.</b> \(f(-1)=0\) et \(g(-1)=2\), donc \((fg)(-1)=0\). Un zéro d'un des facteurs est un zéro du produit.`,
        S`<b>Domaine du quotient.</b> \(f\) et \(g\) sont définies partout; la seule restriction est donc \(g(x)\ne0\) : \(x\ne-3\).`,
        S`<b>Fonction composée.</b> Remplace chaque \(x\) de \(f\) par \(x+3\) : \(f(x+3)=(x+3)^2-1=x^2+6x+9-1=x^2+6x+8\).`,
        S`<b>Vérifie la composée à \(x=0\).</b> \(g(0)=3\) et \(f(3)=8\), et la formule donne \(8\) ✓. Sur le graphique, la composée est \(f\) translatée de \(3\) vers la gauche, parce que la fonction intérieure ajoute \(3\) à l'entrée ✓`],
      S`\(8\); \(0\); \(x\ne-3\); \(x^2+6x+8\)`,
      plane({ view: { xmin: -7, xmax: 4, ymin: -3, ymax: 12 }, curves: [{ f: (x) => x * x - 1, color: "blue" }, { f: (x) => x * x + 6 * x + 8, color: "violet" }], lines: [{ m: 1, b: 3, color: "gray" }], points: [{ x: 0, y: 8, label: "(0, 8)", color: "amber" }, { x: -3, y: -1, label: "(−3, −1)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Un domaine avec deux restrictions", S`Détermine le domaine de \(h(x)=\dfrac{\sqrt{x+1}}{x-3}\).`,
      [S`<b>Plan.</b> Un quotient exige que les deux parties existent et que le dénominateur soit non nul. Traite chaque condition séparément.`,
        S`<b>Numérateur.</b> \(\sqrt{x+1}\) exige \(x+1\ge0\), donc \(x\ge-1\). Zéro est permis sous une racine.`,
        S`<b>Dénominateur.</b> \(x-3\ne0\), donc \(x\ne3\). Zéro n'est pas permis au dénominateur.`,
        S`<b>Les deux.</b> \(x\ge-1\) et \(x\ne3\).`,
        S`<b>Vérifie les bornes.</b> \(h(-1)=\frac{0}{-4}=0\) est définie; l'extrémité est donc incluse ✓. \(h(3)\) diviserait \(2\) par \(0\); le graphique a donc une asymptote verticale à cet endroit ✓`],
      S`\(x\ge-1,\ x\ne3\)`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -8, ymax: 8 }, curves: [{ f: (x) => Math.sqrt(x + 1) / (x - 3), a: -1, b: 2.8, color: "violet" }, { f: (x) => Math.sqrt(x + 1) / (x - 3), a: 3.2, color: "violet" }], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Résoudre une équation avec une fonction composée", S`\(f(x)=\log x\) et \(g(x)=x^2\). Résous \(f(g(x))=2\) et donne le domaine de \(f\circ g\).`,
      [S`<b>Fonction composée.</b> \(f(g(x))=\log(x^2)\).`,
        S`<b>Domaine.</b> La fonction intérieure \(x^2\) accepte tous les \(x\), mais \(\log\) exige une entrée positive : \(x^2>0\), donc \(x\ne0\). Les \(x\) négatifs sont permis, car \(x^2\) est positif.`,
        S`<b>Forme exponentielle.</b> \(\log(x^2)=2\) veut dire \(x^2=10^2=100\).`,
        S`<b>Résous.</b> \(x=\pm10\). Les deux sont dans le domaine.`,
        S`<b>Vérifie.</b> \(\log(10^2)=\log100=2\) ✓ et \(\log((-10)^2)=\log100=2\) ✓`,
        S`<b>Prudence.</b> Écrire \(\log(x^2)=2\log x\) ferait perdre \(x=-10\), puisque \(\log x\) exige \(x>0\). Le graphique a deux branches et deux solutions ✓`],
      S`\(x=\pm10\); domaine \(x\ne0\)`,
      plane({ view: { xmin: -14, xmax: 14, ymin: -2, ymax: 3 }, curves: [{ f: (x) => L(x * x), a: 0.05, color: "violet" }, { f: (x) => L(x * x), b: -0.05, color: "violet" }], lines: [{ m: 0, b: 2, color: "blue", dash: true }], points: [{ x: 10, y: 2, label: "(10, 2)", color: "amber" }, { x: -10, y: 2, label: "(−10, 2)", color: "amber" }], step: { x: 2, y: 0.5 } })],
    ["Une inéquation par le graphique et par l'algèbre", S`Résous \(x^3>4x\).`,
      [S`<b>Ne divise pas par \(x\).</b> Son signe est inconnu, et diviser ferait perdre des solutions. Mets tout du même côté : \(x^3-4x>0\).`,
        S`<b>Factorise.</b> \(x(x^2-4)=x(x-2)(x+2)>0\).`,
        S`<b>Zéros.</b> \(-2,\ 0,\ 2\). Ils séparent la droite en quatre intervalles.`,
        S`<b>Vérifie chaque intervalle.</b> \(x=-3\) : \(-15<0\), ne fonctionne pas. \(x=-1\) : \(3>0\) ✓. \(x=1\) : \(-3<0\), ne fonctionne pas. \(x=3\) : \(15>0\) ✓`,
        S`<b>Réponse.</b> \(-2<x<0\) ou \(x>2\).`,
        S`<b>Vérifie sur le graphique.</b> La cubique est au-dessus de la droite \(y=4x\) exactement sur ces intervalles ✓`],
      S`\(-2<x<0\) ou \(x>2\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -16, ymax: 16 }, curves: [{ f: (x) => x ** 3, color: "violet" }], lines: [{ m: 4, b: 0, color: "blue" }], points: [{ x: -2, y: -8, label: "(−2, −8)", color: "amber" }, { x: 2, y: 8, label: "(2, 8)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Un modèle amorti", S`\(d(t)=12(0.75)^t\sin(\pi t)\) cm. Quand l'enveloppe devient-elle pour la première fois inférieure à \(2\) cm?`,
      [S`<b>Lis les parties.</b> L'enveloppe \(12(0.75)^t\) est l'amplitude au temps \(t\) : elle commence à \(12\) et perd \(25\%\) chaque seconde. Le facteur \(\sin(\pi t)\) la fait osciller avec une période de \(2\) s.`,
        S`<b>Inéquation.</b> \(12(0.75)^t<2\). Divise par \(12\) : \(0.75^t<\frac16\).`,
        S`<b>Prends le logarithme.</b> \(t\log0.75<\log\frac16\).`,
        S`<b>Divise avec soin.</b> \(\log0.75\) est négatif; le sens de l'inégalité s'inverse donc : \(t>\dfrac{\log(1/6)}{\log0.75}\approx6.23\) s.`,
        S`<b>Vérifie.</b> \(12(0.75)^{6.23}\approx2.00\) ✓. Le graphique montre l'onde qui reste entre les enveloppes grises, lesquelles atteignent la droite pointillée vers \(t=6.2\) ✓`],
      S`après environ \(6.2\) s`,
      plane({ view: { xmin: -0.3, xmax: 9, ymin: -13, ymax: 13 }, curves: [{ f: (t) => 12 * 0.75 ** t, a: 0, color: "gray" }, { f: (t) => -12 * 0.75 ** t, a: 0, color: "gray" }, { f: (t) => 12 * 0.75 ** t * Math.sin(Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 2, color: "blue", dash: true }], points: [{ x: 6.23, y: 2, label: "(6.23, 2)", color: "amber" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("différence", S`\(f(x)=x^2\), \(g(x)=4x-1\). Détermine \((f-g)(3)\).`, num(-2), "9 − 11.", [S`\(9-11=-2\).`], S`\(-2\)`),
    q("composée", S`\(f(x)=2^x\), \(g(x)=x+2\). Détermine \(f(g(1))\).`, num(8), "g(1) = 3.", [S`\(2^3=8\).`], S`\(8\)`),
    q("domaine", S`Domaine de \(\dfrac{1}{x^2-4x}\)?`, choice(["x ≠ 0 et x ≠ 4", "x ≠ 4", "x ≠ 2", "tous les x réels"], 0), "x(x − 4) ≠ 0.", [S`Exclus \(0\) et \(4\).`], S`\(x\ne0,4\)`),
    q("inéquation", S`Résous \(x^2\ge2x+8\).`, choice(["x ≤ −2 ou x ≥ 4", "−2 ≤ x ≤ 4", "x ≥ 4", "x ≤ −4 ou x ≥ 2"], 0), "(x − 4)(x + 2) ≥ 0.", [S`Positive à l'extérieur des zéros.`], S`\(x\le-2\) ou \(x\ge4\)`),
    q("zéros", S`Combien de zéros réels \(y=(x-1)(x^2+1)\) a-t-elle?`, num(1), "x² + 1 n'est jamais nul.", [S`Seulement \(x=1\).`], S`\(1\)`),
  ]),

  ...hard([
    ["Fonction composée avec une fonction inverse", S`\(f(x)=3x-6\). Détermine \(f^{-1}\) et vérifie que \(f(f^{-1}(x))=x\) et que \(f^{-1}(f(x))=x\).`,
      [S`<b>Fonction inverse :</b> \(x=3y-6\Rightarrow y=\dfrac{x+6}3\).`,
        S`<b>\(f(f^{-1}(x))\) :</b> \(3\cdot\dfrac{x+6}3-6=x+6-6=x\) ✓`,
        S`<b>\(f^{-1}(f(x))\) :</b> \(\dfrac{(3x-6)+6}3=\dfrac{3x}3=x\) ✓`,
        S`<b>Vérification numérique :</b> \(f(4)=6\) et \(f^{-1}(6)=4\) ✓`],
      S`\(f^{-1}(x)=\frac{x+6}3\); les deux composées donnent \(x\)`],
    ["Une inéquation rationnelle", S`Résous \(\dfrac{2x}{x+1}\le1\).`,
      [S`<b>Soustrais 1 :</b> \(\dfrac{2x-(x+1)}{x+1}=\dfrac{x-1}{x+1}\le0\).`,
        S`<b>Valeurs critiques :</b> \(x=1\) (zéro, inclus) et \(x=-1\) (exclu).`,
        S`<b>Signes :</b> \(x=-2\) : \(\frac{-3}{-1}>0\) ✗; \(x=0\) : \(\frac{-1}{1}<0\) ✓; \(x=2\) : \(\frac13>0\) ✗.`,
        S`<b>Réponse :</b> \(-1<x\le1\).`],
      S`\(-1<x\le1\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 8 }, curves: [{ f: (x) => (2 * x) / (x + 1), b: -1.05, color: "violet" }, { f: (x) => (2 * x) / (x + 1), a: -0.95, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`\(f(x)=x^2+2\) et \(f(g(x))=4x^2+4x+3\) avec \(g(x)=ax+b\), \(a>0\). Détermine \(g(3)\).`, num(7), "(g(x))² = 4x² + 4x + 1.", [S`\(g(x)=2x+1\), donc \(g(3)=7\).`], S`\(7\)`),
    q("difficile", S`Combien d'entiers \(x\ge-2\) vérifient \(x^2(x-3)<0\)?`, num(4), "x < 3 et x ≠ 0.", [S`\(-2,-1,1,2\).`], S`\(4\)`),
    q("difficile", S`Détermine la valeur de l'enveloppe \(12(0.75)^t\) à \(t=2\).`, num(6.75, 0.0001), "12 × 0.5625.", [S`\(6.75\).`], S`\(6.75\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment combiner deux fonctions?", "Additionne, soustrais, multiplie ou divise leurs valeurs à chaque x."],
      ["Qu'est-ce qui limite le domaine d'une combinaison?", "Les deux domaines, plus g(x) ≠ 0 pour un quotient, plus la fonction intérieure pour une composée."],
      ["Comment résoudre f(x) > g(x)?", "Trouve où f − g est nulle, puis vérifie les intervalles."],
      ["Comment choisir un modèle?", "Tendance + cycle : somme; amortissement : produit; dépendance en chaîne : composée; par article : quotient."],
      ["Que vaut f(f⁻¹(x))?", "x."],
    ],
    summary: [
      "(f ± g), fg, f/g agissent sur les valeurs.",
      "f(g(x)) : de l'intérieur vers l'extérieur; l'ordre compte.",
      "f > g ⇔ f − g > 0.",
      "Modèles combinés : interprète le sens de chaque partie.",
    ],
    next: "Ceci termine le cours Fonctions avancées.",
  }),
];
