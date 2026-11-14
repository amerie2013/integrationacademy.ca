// MHF4U-FR 6.6 — Révision du chapitre 6 (miroir de ../mhf4u-ch6/l6_6.mjs) : exponentielles et leurs inverses,
// logarithmes, transformations, loi de la puissance et échelles logarithmiques, dans des exemples à plusieurs étapes.
// NOTATION FRANÇAISE : y = a log_b(k(x − c)) + d (c horizontale, d verticale).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "6.6 Révision du chapitre 6";
export const ID = lessonId(6, 6);

const S = String.raw;
const L = Math.log10;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const va = (x) => ({ x, color: "red", dash: true });
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 6 — Fonctions exponentielles et logarithmiques",
    overview: S`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, une pratique variée et deux problèmes plus difficiles. Le fil conducteur tient en une phrase : <em>un logarithme est un exposant</em>.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "passer de la forme exponentielle à la forme logarithmique, et inversement;",
      "représenter graphiquement des fonctions logarithmiques transformées;",
      "utiliser la loi de la puissance et le changement de base;",
      "résoudre des problèmes portant sur des échelles logarithmiques.",
    ],
    curriculum: "A1.1–A1.4, A2.1–A2.4, A3.1 (tout le chapitre)",
    prior: [
      [S`Quel est l'inverse de \(y=5^x\)?`, S`\(y=\log_5x\).`],
      [S`Que vaut \(\log_4\frac1{16}\)?`, S`\(-2\).`],
      [S`Quelle est l'asymptote de \(y=\log(x-3)\)?`, S`\(x=3\).`],
    ],
    words: [
      ["Logarithme", "un exposant : \\(\\log_bx=y\\Leftrightarrow b^y=x\\)", ""],
      ["Loi de la puissance", "\\(\\log_bx^n=n\\log_bx\\)", ""],
      ["Changement de base", "\\(\\log_bx=\\frac{\\log x}{\\log b}\\)", ""],
      ["Échelle logarithmique", "des pas égaux sont des rapports égaux", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["6.1 Inverse", "réflexion de \\(y=b^x\\) dans \\(y=x\\)", "\\((2,4)\\to(4,2)\\)", "inverse ≠ réciproque"],
    ["6.2 Logarithmes", "\\(\\log_bx=y\\Leftrightarrow b^y=x\\)", "\\(\\log_381=4\\)", "l'argument doit être positif"],
    ["6.3 Transformations", "\\(a\\log_b(k(x-c))+d\\); AV \\(x=c\\)", "\\(\\log_2(x-3)+1\\)", "mettre k en évidence d'abord"],
    ["6.4 Loi de la puissance", "\\(\\log_bx^n=n\\log_bx\\)", "\\(2^x=50\\Rightarrow x=\\frac{\\log50}{\\log2}\\)", "\\((\\log x)^2\\ne2\\log x\\)"],
    ["6.5 Échelles logarithmiques", "différence d → rapport \\(10^d\\)", "pH 2 contre 5 : 1000×", "décibels : diviser par 10"],
  ])),

  section("📌 Explore", S`<p>Utilise l'explorateur pour vérifier tes graphiques : modifie la base et les translations, et compare avec les exemples ci-dessous.</p>`),

  widget("ibLogGraph", { init: [3, -2, 1] }),

  section("📌 La vue d'ensemble", keyIdea(S`Les fonctions exponentielles et logarithmiques sont des inverses. Chaque question de ce chapitre peut être retournée : une question de logarithme en une question d'exposant, une asymptote horizontale en une asymptote verticale, un facteur 10 en un pas de 1.`)),

  examples([
    ["Inverse, puis évaluation", S`Pour \(f(x)=3^x\) : a) écris \(f^{-1}\) comme un logarithme; b) évalue \(f^{-1}(81)\) et \(f^{-1}\left(\frac19\right)\).`,
      [S`<b>Règle.</b> L'inverse de \(y=b^x\) est \(y=\log_bx\) (échange \(x\) et \(y\), puis utilise la définition).`,
        S`<b>a)</b> \(f^{-1}(x)=\log_3x\).`,
        S`<b>b)</b> \(81=3^4\), donc \(\log_381=4\); \(\frac19=3^{-2}\), donc \(\log_3\frac19=-2\).`,
        S`<b>Vérification :</b> \(f(4)=81\) et \(f(-2)=\frac19\), donc l'inverse défait bien \(f\) ✓`],
      S`\(f^{-1}(x)=\log_3x\); \(4\) et \(-2\)`,
      plane({ view: { xmin: -5, xmax: 90, ymin: -3, ymax: 5 }, curves: [{ f: lg(3), a: 0.01, color: "violet" }], points: [{ x: 81, y: 4, label: "(81, 4)", color: "amber" }, { x: 1 / 9, y: -2, label: "(1/9, −2)", color: "amber" }], step: { x: 10, y: 1 } })],
    ["Un graphique transformé", S`Pour \(y=-2\log_3(x+2)+1\), donne l'asymptote, le domaine et les images de \((1,0)\), \((3,1)\) et \((9,2)\).`,
      [S`<b>Associe :</b> \(a=-2,\ k=1,\ c=-2,\ d=1\). Correspondance \((x,y)\to(x-2,\ -2y+1)\).`,
        S`<b>Asymptote</b> \(x=-2\); <b>domaine</b> \(x>-2\).`,
        S`<b>Images :</b> \((1,0)\to(-1,1)\), \((3,1)\to(1,-1)\), \((9,2)\to(7,-3)\).`,
        S`<b>Vérification :</b> \(x=7\) : \(-2\log_39+1=-4+1=-3\) ✓`],
      S`AV \(x=-2\); \(x>-2\); \((-1,1),(1,-1),(7,-3)\)`,
      plane({ view: { xmin: -4, xmax: 9, ymin: -5, ymax: 4 }, vlines: [va(-2)], curves: [{ f: (x) => -2 * lg(3)(x + 2) + 1, a: -1.995, color: "violet" }], points: [{ x: -1, y: 1, label: "(−1, 1)", color: "blue" }, { x: 1, y: -1, label: "(1, −1)", color: "blue" }, { x: 7, y: -3, label: "(7, −3)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Valeurs exactes et approximatives", S`Évalue \(\log_{16}8\) de façon exacte et \(\log_{16}100\) au millième près.`,
      [S`<b>Exacte (base commune 2) :</b> \(16^y=8\Rightarrow2^{4y}=2^3\Rightarrow y=\frac34\).`,
        S`<b>Approximative (changement de base) :</b> \(\log_{16}100=\dfrac{\log100}{\log16}=\dfrac{2}{1.2041}\approx1.661\).`,
        S`<b>Vérification :</b> \(16^{3/4}=(2^4)^{3/4}=2^3=8\) ✓; \(16^{1.661}\approx100\) ✓`],
      S`\(\frac34\) et \(\approx1.661\)`,
      plane({ view: { xmin: -5, xmax: 110, ymin: -1, ymax: 3 }, curves: [{ f: lg(16), a: 0.05, color: "violet" }], points: [{ x: 8, y: 0.75, label: "(8, 3/4)", color: "amber" }, { x: 100, y: 1.661, label: "(100, 1.661)", color: "amber" }], step: { x: 10, y: 0.5 } })],
    ["Résoudre avec la loi de la puissance", S`Une population de bactéries compte \(N=400(1.15)^t\) bactéries après \(t\) heures. Quand atteint-elle \(5000\)?`,
      [S`<b>Isole la puissance :</b> \(400(1.15)^t=5000\Rightarrow1.15^t=12.5\).`,
        S`<b>Prends les logarithmes et utilise la loi de la puissance :</b> \(t\log1.15=\log12.5\).`,
        S`<b>Résous :</b> \(t=\dfrac{\log12.5}{\log1.15}\approx18.07\) heures.`,
        S`<b>Vérification :</b> \(400(1.15)^{18.07}\approx5000\) ✓`],
      S`environ \(18.1\) heures`,
      plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 7000 }, lines: [{ m: 0, b: 5000, color: "blue", dash: true }], curves: [{ f: (t) => 400 * 1.15 ** t, color: "violet" }], points: [{ x: 18.07, y: 5000, label: "(18.07, 5000)", color: "amber" }, { x: 0, y: 400, label: "(0, 400)", color: "blue" }], step: { x: 2, y: 1000 }, xlabel: "t (h)", ylabel: "N" })],
    ["Une échelle logarithmique", S`Un son est à \(72\) dB et un autre, à \(58\) dB. Combien de fois le premier est-il plus intense?`,
      [S`<b>Règle.</b> \(I=I_0\cdot10^{\beta/10}\), donc le rapport est \(10^{(72-58)/10}=10^{1.4}\).`,
        S`<b>Évalue :</b> \(10^{1.4}\approx25.1\).`,
        S`<b>Vérification du bon sens :</b> \(14\) dB est entre \(10\) dB (×10) et \(20\) dB (×100) ✓`],
      S`environ \(25\) fois`,
      plane({ view: { xmin: 0, xmax: 140, ymin: -1, ymax: 1.5 }, points: [{ x: 58, y: 0, label: "58 dB", color: "blue" }, { x: 72, y: 0, label: "72 dB", color: "red" }], step: { x: 10, y: 1 }, xlabel: "dB" })],
  ]),

  practice([
    q("évaluer", S`Évalue \(\log_5 0.04\).`, num(-2), "0.04 = 1/25.", [S`\(5^{-2}=\frac1{25}=0.04\).`], S`\(-2\)`),
    q("asymptote", S`Quelle est l'asymptote verticale de \(y=\log_2(3x-12)\)? Entre la valeur de \(c\) dans \(x=c\).`, num(4), "Mets 3 en évidence.", [S`\(3(x-4)\), donc \(c=4\).`], S`\(4\)`),
    q("loi de la puissance", S`Évalue \(\log_2\left(4^{10}\right)\).`, num(20), "Fais descendre le 10.", [S`\(10\log_24=20\).`], S`\(20\)`),
    q("résoudre", S`Résous \(6^x=20\) (au centième près).`, num(L(20) / L(6), 0.01), "Prends les logarithmes.", [S`\(x=\frac{\log20}{\log6}\approx1.67\).`], S`\(\approx1.67\)`),
    q("échelle", S`Un pH de \(4\) est combien de fois plus acide qu'un pH de \(6\)?`, choice(["100", "2", "20", "1/100"], 0), "10^(différence).", [S`\(10^2=100\).`], "100"),
  ]),

  ...hard([
    ["Un graphique et son inverse", S`Pour \(f(x)=2^{x-1}+3\) : a) trouve \(f^{-1}\) sous forme de logarithme; b) donne le domaine et l'asymptote de \(f^{-1}\); c) trouve \(f^{-1}(11)\).`,
      [S`<b>a)</b> Échange : \(x=2^{y-1}+3\Rightarrow2^{y-1}=x-3\Rightarrow y-1=\log_2(x-3)\Rightarrow f^{-1}(x)=\log_2(x-3)+1\).`,
        S`<b>b)</b> \(x-3>0\) : domaine \(x>3\), asymptote \(x=3\) (l'image de \(y=3\)).`,
        S`<b>c)</b> \(\log_28+1=3+1=4\).`,
        S`<b>Vérification :</b> \(f(4)=2^3+3=11\) ✓`],
      S`\(f^{-1}(x)=\log_2(x-3)+1\); \(x>3\); \(4\)`,
      plane({ view: { xmin: -3, xmax: 12, ymin: -3, ymax: 12 }, lines: [{ m: 1, b: 0, color: "gray", dash: true }], vlines: [va(3)], curves: [{ f: (x) => 2 ** (x - 1) + 3, color: "blue" }, { f: (x) => lg(2)(x - 3) + 1, a: 3.003, color: "violet" }], points: [{ x: 11, y: 4, label: "(11, 4)", color: "violet" }, { x: 4, y: 11, label: "(4, 11)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["L'énergie des séismes", S`Deux séismes diffèrent de \(1.5\) en magnitude. a) Combien de fois le plus fort est-il plus intense? b) Quelle différence de magnitude rend un séisme \(1000\) fois plus intense qu'un autre?`,
      [S`<b>a)</b> Rapport \(=10^{1.5}\approx31.6\).`,
        S`<b>b)</b> \(10^d=1000=10^3\), donc \(d=3\).`,
        S`<b>Vérification de a) :</b> \(1.5\) est à mi-chemin entre \(1\) et \(2\) sur l'échelle logarithmique, et \(31.6\) est le milieu géométrique de \(10\) et \(100\) (\(\sqrt{1000}\approx31.6\)) ✓`],
      S`a) environ \(31.6\) fois b) \(3\)`],
  ], [
    q("difficile", S`Trouve \(x\) si \(\log_x 27=\frac32\).`, num(9), "x^(3/2) = 27.", [S`\(x=27^{2/3}=9\).`], S`\(9\)`),
    q("difficile", S`Combien de temps faut-il pour que \(1.06^t=3\)? (au centième près)`, num(L(3) / L(1.06), 0.01), "t = log 3 / log 1.06.", [S`\(\approx18.85\).`], S`\(\approx18.85\)`),
    q("difficile", S`Trouve l'abscisse à l'origine de \(y=\log_2(x+5)-3\).`, num(3), "log₂(x + 5) = 3.", [S`\(x+5=8\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est l'idée centrale du chapitre?", "Un logarithme est un exposant : log_b x = y signifie bʸ = x."],
      ["Quel lien y a-t-il entre les graphiques de bˣ et de log_b x?", "Ce sont des réflexions l'un de l'autre dans y = x; leurs asymptotes et leurs points d'intersection avec les axes s'échangent."],
      ["Comment lire un graphique logarithmique transformé?", "AV x = c, domaine tiré de k(x − c) > 0, correspondance (x, y) → (x/k + c, ay + d)."],
      ["Quand dois-je utiliser la loi de la puissance?", "Pour faire descendre un exposant : évaluation, changement de base et résolution de bˣ = c."],
      ["Que signifie une différence de 2 sur une échelle logarithmique?", "Un facteur 10² = 100 (pour les décibels, une différence de 20 dB)."],
    ],
    summary: [
      "L'inverse de bˣ est log_b x; réflexion dans y = x.",
      "log_b x = y ⇔ bʸ = x; argument > 0.",
      "y = a log_b(k(x − c)) + d : AV x = c.",
      "log_b xⁿ = n log_b x; log_b x = log x / log b.",
      "Échelles logarithmiques : différence d ↔ rapport 10^d.",
    ],
    next: "Le chapitre 7 résout des équations exponentielles et logarithmiques à l'aide des lois du produit, du quotient et de la puissance.",
  }),
];
