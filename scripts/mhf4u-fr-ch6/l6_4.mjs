// MHF4U-FR 6.4 — La loi de la puissance des logarithmes (miroir de ../mhf4u-ch6/l6_4.mjs) : démonstration à partir des
// lois des exposants, évaluation et simplification, formule de changement de base, résolution de b^x = c.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "6.4 La loi de la puissance des logarithmes";
export const ID = lessonId(6, 4);

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "⚡",
    title: "La loi de la puissance des logarithmes",
    overview: S`La loi des exposants \((b^m)^n=b^{mn}\) a une jumelle logarithmique : \(\log_b(x^n)=n\log_b x\). Elle permet de faire « descendre » un exposant devant le logarithme. Ce seul geste rend deux choses possibles : évaluer un logarithme de n'importe quelle base à la calculatrice (la formule de changement de base) et résoudre des équations où l'inconnue est un exposant, comme \(2^x=50\).`,
    goals: [
      "démontrer la loi de la puissance à partir des lois des exposants;",
      "utiliser \\(\\log_b x^n=n\\log_b x\\) pour évaluer et simplifier;",
      "établir et utiliser la formule de changement de base;",
      "résoudre \\(b^x=c\\) en prenant le logarithme des deux membres;",
      "utiliser la loi de la puissance dans des problèmes de croissance et de décroissance.",
    ],
    curriculum: "A1.4 (faire le lien entre les lois des exposants et les lois des logarithmes; utiliser la loi de la puissance), A3.1 (formes équivalentes d'expressions logarithmiques), A1.2 (évaluer des logarithmes de n'importe quelle base à l'aide de la technologie)",
    prior: [
      [S`Simplifie \((2^3)^4\).`, S`\(2^{12}\).`],
      [S`Évalue \(\log_2 32\).`, S`\(5\).`],
      [S`Réécris \(\log_b x=m\) sous forme exponentielle.`, S`\(b^m=x\).`],
    ],
    words: [
      ["Loi de la puissance", "\\(\\log_b(x^n)=n\\log_b x\\)", "\\(\\log 1000=\\log10^3=3\\)"],
      ["Changement de base", "\\(\\log_b x=\\dfrac{\\log x}{\\log b}\\)", "\\(\\log_3 20=\\dfrac{\\log20}{\\log3}\\)"],
      ["Équation exponentielle", "une équation dont l'inconnue est dans un exposant", "\\(2^x=50\\)"],
      ["Temps de doublement", "le temps qu'il faut à une quantité pour doubler", "\\(1.05^t=2\\)"],
    ],
  }),

  section("📌 Pourquoi la loi de la puissance est vraie", S`
  <p>Pose \(\log_b x=m\). Alors \(x=b^m\) (définition). Élève les deux membres à la puissance \(n\) : \(x^n=(b^m)^n=b^{mn}\) (loi des exposants). Réécris sous forme logarithmique : \(\log_b(x^n)=mn=n\log_b x\).</p>
  ${keyIdea(S`\[\log_b\left(x^n\right)=n\log_b x\qquad(x>0)\] Un exposant à l'intérieur du logarithme descend devant comme un multiplicateur.`)}
  ${table(["Loi des exposants", "Loi des logarithmes"], [["\\((b^m)^n=b^{mn}\\)", "\\(\\log_b x^n=n\\log_b x\\)"], ["\\(b^0=1\\)", "\\(\\log_b1=0\\)"], ["\\(b^1=b\\)", "\\(\\log_bb=1\\)"]])}`),

  widget("ibLogLaws", { init: [2, 5, 3] }),

  section("📌 Changement de base", S`
  <p>Pour trouver \(y=\log_3 20\), réécris-le sous la forme \(3^y=20\), prends le logarithme décimal des deux membres et utilise la loi de la puissance : \(\log3^y=\log20\Rightarrow y\log3=\log20\Rightarrow y=\dfrac{\log20}{\log3}\approx2.727\).</p>
  ${keyIdea(S`\[\log_b x=\frac{\log x}{\log b}\] On peut évaluer n'importe quelle base avec la touche \(\log\) de la calculatrice.`)}
  ${plane({ view: { xmin: -1, xmax: 25, ymin: -1, ymax: 4 }, curves: [{ f: (x) => L(x) / L(3), a: 0.05, color: "violet" }], points: [{ x: 20, y: 2.727, label: "(20, 2.727)", color: "amber" }, { x: 9, y: 2, label: "(9, 2)", color: "blue" }, { x: 27, y: 3, color: "blue" }], step: { x: 2, y: 1 } }, "y = log₃ x : log₃ 20 est un peu moins que 3, puisque 27 = 3³.")}
  ${watchOut([
    "La loi de la puissance exige que tout l'argument soit élevé à la puissance : log(3x²) n'est pas 2 log(3x).",
    "(log x)² n'est pas 2 log x : le carré est à l'extérieur du logarithme.",
    "log₃ 20 n'est pas log 20 − log 3; c'est log 20 ÷ log 3.",
    "Pour résoudre bˣ = c, prends le logarithme des deux membres, puis divise par log b.",
    "Arrondis seulement à la fin : garde les valeurs de la calculatrice jusqu'à la dernière étape.",
  ])}`),

  examples([
    ["Faire descendre l'exposant", S`Évalue \(\log_2\left(8^5\right)\) et \(\log\sqrt[4]{1000}\).`,
      [S`<b>Loi de la puissance.</b> \(\log_b(x^n)=n\log_b x\).`,
        S`<b>Premier :</b> \(\log_2(8^5)=5\log_28=5\times3=15\).`,
        S`<b>Deuxième :</b> \(\sqrt[4]{1000}=1000^{1/4}\), donc \(\log1000^{1/4}=\frac14\log1000=\frac14\times3=\frac34\).`,
        S`<b>Vérifie le premier autrement :</b> \(8^5=(2^3)^5=2^{15}\), et \(\log_22^{15}=15\) ✓`],
      S`\(15\) et \(\frac34\)`,
      plane({ view: { xmin: -1, xmax: 12, ymin: -1, ymax: 2 }, curves: [{ f: L, a: 0.05, color: "violet" }], points: [{ x: 1000 ** 0.25, y: 0.75, label: "(5.62, 0.75)", color: "amber" }, { x: 10, y: 1, label: "(10, 1)", color: "blue" }], step: { x: 1, y: 0.5 } })],
    ["Simplifier une expression", S`Écris \(4\log_5 x-\log_5 x^3\) comme un seul multiple de \(\log_5 x\), puis évalue-la pour \(x=25\).`,
      [S`<b>Loi de la puissance sur le deuxième terme :</b> \(\log_5x^3=3\log_5x\).`,
        S`<b>Regroupe les termes semblables :</b> \(4\log_5x-3\log_5x=\log_5x\).`,
        S`<b>Évalue :</b> \(x=25=5^2\), donc \(\log_525=2\).`,
        S`<b>Vérifie avec l'expression de départ :</b> \(4\log_525-\log_5(25^3)=4(2)-\log_55^6=8-6=2\) ✓`],
      S`\(\log_5x\); valeur \(2\)`,
      plane({ view: { xmin: -2, xmax: 30, ymin: -2, ymax: 3 }, curves: [{ f: (x) => (4 * Math.log(x) - Math.log(x ** 3)) / Math.log(5), a: 0.05, color: "violet" }], points: [{ x: 25, y: 2, label: "(25, 2)", color: "amber" }, { x: 5, y: 1, label: "(5, 1)", color: "blue" }], step: { x: 5, y: 1 } })],
    ["Changement de base", S`Évalue \(\log_7 1000\) au dix-millième près et vérifie la réponse.`,
      [S`<b>Formule.</b> \(\log_bx=\dfrac{\log x}{\log b}\) (à partir de \(7^y=1000\), prends le \(\log\) des deux membres et utilise la loi de la puissance).`,
        S`<b>Substitue :</b> \(\log_71000=\dfrac{\log1000}{\log7}=\dfrac{3}{0.8451}\approx3.5499\).`,
        S`<b>Estime d'abord :</b> \(7^3=343\) et \(7^4=2401\), et \(343<1000<2401\), donc la réponse doit être entre \(3\) et \(4\) ✓`,
        S`<b>Vérification :</b> \(7^{3.5499}\approx1000\) ✓`],
      S`\(\approx3.5499\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -100, ymax: 1400 }, lines: [{ m: 0, b: 1000, color: "blue", dash: true }], curves: [{ f: (x) => 7 ** x, color: "violet" }], points: [{ x: 3.55, y: 1000, label: "(3.55, 1000)", color: "amber" }, { x: 3, y: 343, label: "(3, 343)", color: "blue" }], step: { x: 1, y: 200 } })],
    ["Résoudre une équation exponentielle", S`Résous \(2^x=50\) au dix-millième près.`,
      [S`<b>Méthode.</b> L'inconnue est un exposant : prends le logarithme des deux membres et fais descendre l'exposant avec la loi de la puissance.`,
        S`<b>Prends les logarithmes :</b> \(\log2^x=\log50\Rightarrow x\log2=\log50\).`,
        S`<b>Divise par \(\log2\) :</b> \(x=\dfrac{\log50}{\log2}\approx5.6439\).`,
        S`<b>Vérification :</b> \(2^5=32\) et \(2^6=64\), donc \(x\) est entre \(5\) et \(6\) ✓; \(2^{5.6439}\approx50.0\) ✓`],
      S`\(x\approx5.6439\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 70 }, lines: [{ m: 0, b: 50, color: "blue", dash: true }], curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [{ x: 5.644, y: 50, label: "(5.644, 50)", color: "amber" }], step: { x: 1, y: 10 } })],
    ["Temps de doublement", S`Un placement augmente de \(5\%\) par année : \(A=P(1.05)^t\). Combien d'années faut-il pour qu'il double?`,
      [S`<b>Modèle.</b> Doubler signifie \(A=2P\), donc \(P(1.05)^t=2P\). Divise par \(P\) : \(1.05^t=2\). (Le montant de départ n'a pas d'importance.)`,
        S`<b>Prends les logarithmes :</b> \(t\log1.05=\log2\).`,
        S`<b>Résous :</b> \(t=\dfrac{\log2}{\log1.05}\approx14.21\) années.`,
        S`<b>Vérification :</b> \(1.05^{14.21}\approx2.00\) ✓; l'estimation de la « règle de 70 », \(70\div5=14\), concorde.`],
      S`environ \(14.2\) années`,
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 3 }, lines: [{ m: 0, b: 2, color: "blue", dash: true }], curves: [{ f: (t) => 1.05 ** t, color: "violet" }], points: [{ x: 14.21, y: 2, label: "(14.21, 2)", color: "amber" }], step: { x: 2, y: 0.5 }, xlabel: "t (années)", ylabel: "A / P" })],
  ]),

  practice([
    q("loi de la puissance", S`Évalue \(\log_3\left(9^4\right)\).`, num(8), "Fais descendre le 4; log₃ 9 = 2.", [S`\(4\times2=8\).`], S`\(8\)`),
    q("racine", S`Évalue \(\log_2\sqrt[3]{16}\) sous forme de fraction.`, num(4 / 3, 0.0001), "∛16 = 16^(1/3).", [S`\(\frac13\log_216=\frac43\).`], S`\(\frac43\)`),
    q("changement de base", S`Évalue \(\log_6 200\) au centième près.`, num(L(200) / L(6), 0.01), "log 200 ÷ log 6.", [S`\(\frac{2.3010}{0.7782}\approx2.96\).`], S`\(\approx2.96\)`),
    q("résoudre", S`Résous \(3^x=40\) au centième près.`, num(L(40) / L(3), 0.01), "Prends le logarithme des deux membres.", [S`\(x=\frac{\log40}{\log3}\approx3.36\).`], S`\(\approx3.36\)`),
    q("lequel est vrai?", S`Quel énoncé est vrai pour tout \(x>0\)?`, choice(["log(x⁵) = 5 log x", "(log x)⁵ = 5 log x", "log(5x) = 5 log x", "log₅ x = log x − log 5"], 0),
      "Seul un exposant sur tout l'argument peut descendre.", [S`Loi de la puissance : \(\log x^5=5\log x\).`], S`\(\log x^5=5\log x\)`),
  ]),

  ...hard([
    ["Deux bases différentes", S`Montre que \(\log_8 x^3=\log_2 x\) pour tout \(x>0\).`,
      [S`<b>Loi de la puissance :</b> \(\log_8x^3=3\log_8x\).`,
        S`<b>Passe en base 2 :</b> \(\log_8x=\dfrac{\log_2x}{\log_28}=\dfrac{\log_2x}{3}\).`,
        S`<b>Combine :</b> \(3\cdot\dfrac{\log_2x}{3}=\log_2x\).`,
        S`<b>Vérifie avec \(x=4\) :</b> \(\log_8 64=2\) et \(\log_24=2\) ✓`],
      S`les deux membres valent \(\log_2x\)`],
    ["Quelle puissance est la plus grande?", S`Sans calculer ni l'un ni l'autre, détermine lequel est le plus grand : \(2^{100}\) ou \(3^{63}\).`,
      [S`<b>Idée.</b> \(\log\) est croissante, donc le plus grand nombre a le plus grand logarithme.`,
        S`<b>Loi de la puissance :</b> \(\log2^{100}=100\log2\approx30.103\) et \(\log3^{63}=63\log3\approx30.059\).`,
        S`<b>Compare :</b> \(30.103>30.059\), donc \(2^{100}>3^{63}\).`,
        S`<b>Signification :</b> les deux nombres ont \(31\) chiffres, parce que leurs logarithmes sont entre \(30\) et \(31\).`],
      S`\(2^{100}\) est le plus grand`],
  ], [
    q("difficile", S`Résous \(5^{2x}=300\) au millième près.`, num(L(300) / (2 * L(5)), 0.002), "2x log 5 = log 300.", [S`\(x=\frac{\log300}{2\log5}\approx1.772\).`], S`\(\approx1.772\)`),
    q("difficile", S`Combien d'années faut-il pour qu'un montant triple à \(8\%\) par année? (au centième près)`, num(L(3) / L(1.08), 0.01), "1.08ᵗ = 3.", [S`\(t=\frac{\log3}{\log1.08}\approx14.27\).`], S`\(\approx14.27\)`),
    q("difficile", S`Si \(\log_3 5=a\), exprime \(\log_9 125\) en fonction de \(a\). Entre le coefficient de \(a\).`, num(1.5, 0.0001), "Loi de la puissance, puis changement de base.", [S`\(\log_9125=\frac{\log_3125}{\log_39}=\frac{3a}{2}\).`], S`\(\frac32\)`),
  ]),

  wrapUp({
    qas: [
      ["D'où vient la loi de la puissance?", "De (bᵐ)ⁿ = bᵐⁿ, réécrite sous forme logarithmique."],
      ["Comment évaluer log₇ 1000?", "log 1000 ÷ log 7, grâce à la formule de changement de base."],
      ["Comment résoudre 2ˣ = 50?", "Prends les logarithmes : x log 2 = log 50, donc x = log 50 ÷ log 2."],
      ["Est-ce que (log x)² = 2 log x?", "Non : la loi de la puissance s'applique seulement à une puissance de l'argument, log(x²)."],
      ["Pourquoi le temps de doublement ne dépend-il pas du montant?", "P s'annule : P(1.05)ᵗ = 2P donne 1.05ᵗ = 2."],
    ],
    summary: [
      "log_b(xⁿ) = n log_b x.",
      "log_b x = log x / log b.",
      "Pour résoudre bˣ = c : x = log c / log b.",
      "Temps de doublement ou de triplement : résous (1 + r)ᵗ = 2 ou 3.",
    ],
    next: "La leçon 6.5 utilise les logarithmes pour construire des échelles pour des quantités qui s'étendent sur plusieurs puissances de 10.",
  }),
];
