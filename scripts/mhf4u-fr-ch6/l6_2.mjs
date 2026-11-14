// MHF4U-FR 6.2 — Logarithmes (miroir de ../mhf4u-ch6/l6_2.mjs) : la définition log_b x = y ⇔ b^y = x, le passage
// d'une forme à l'autre, les valeurs exactes (puissances, fractions, racines), les propriétés de base, les logarithmes
// décimaux et l'estimation.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "6.2 Logarithmes";
export const ID = lessonId(6, 2);

const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Logarithmes",
    overview: S`Un logarithme répond à une seule question : <em>quel exposant dois-je mettre sur la base pour obtenir ce nombre?</em> Puisque \(2^5=32\), le logarithme de \(32\) en base \(2\) est \(5\), ce qu'on écrit \(\log_2 32=5\). Tout énoncé logarithmique peut être réécrit comme un énoncé exponentiel, et inversement; cette traduction est la clé pour évaluer les logarithmes, résoudre des équations avec eux et les représenter graphiquement.`,
    goals: [
      "expliquer qu'un logarithme est un exposant;",
      "réécrire \\(\\log_b x=y\\) sous la forme \\(b^y=x\\), et inversement;",
      "évaluer des logarithmes de façon exacte, y compris avec des fractions et des racines;",
      "utiliser \\(\\log_b1=0\\), \\(\\log_bb=1\\), \\(\\log_bb^x=x\\) et \\(b^{\\log_bx}=x\\);",
      "utiliser les logarithmes décimaux et encadrer un logarithme entre deux entiers.",
    ],
    curriculum: "A1.1 (le logarithme comme inverse de l'exponentiation), A1.2 (évaluer des logarithmes avec et sans technologie), A1.3 (estimer un logarithme à l'aide de puissances)",
    prior: [
      [S`Écris \(\frac1{25}\) comme une puissance de \(5\).`, S`\(5^{-2}\).`],
      [S`Écris \(\sqrt[3]{2}\) comme une puissance de \(2\).`, S`\(2^{1/3}\).`],
      [S`Quel est l'inverse de \(y=2^x\)?`, S`\(x=2^y\) (6.1).`],
    ],
    words: [
      ["Logarithme", "l'exposant : \\(\\log_b x=y\\) signifie \\(b^y=x\\)", "\\(\\log_3 81=4\\)"],
      ["Base", "le nombre élevé à une puissance; \\(b>0\\), \\(b\\ne1\\)", "\\(b=3\\)"],
      ["Argument", "le nombre dont on prend le logarithme; il doit être positif", "\\(81\\)"],
      ["Logarithme décimal", "base 10, noté \\(\\log x\\)", "\\(\\log1000=3\\)"],
    ],
  }),

  section("📌 La définition", S`
  ${table(["Forme exponentielle", "Forme logarithmique", "Se lit"], [
    ["\\(2^5=32\\)", "\\(\\log_2 32=5\\)", "l'exposant sur 2 qui donne 32 est 5"],
    ["\\(10^{-2}=0.01\\)", "\\(\\log 0.01=-2\\)", "l'exposant sur 10 qui donne 0.01 est −2"],
    ["\\(9^{1/2}=3\\)", "\\(\\log_9 3=\\frac12\\)", "l'exposant sur 9 qui donne 3 est ½"],
  ])}
  ${keyIdea(S`\[\log_b x=y\quad\Longleftrightarrow\quad b^y=x\qquad(b>0,\ b\ne1,\ x>0)\] La base reste la base, et le logarithme <em>est</em> l'exposant.`)}`),

  section("📌 Les logarithmes sur le graphique", S`<p>\(y=\log_b x\) est l'inverse de \(y=b^x\) (6.1); lire un logarithme, c'est donc lire le graphique à l'envers : va à \(x\) sur la courbe logarithmique et lis l'exposant \(y\).</p>
  ${plane({ view: { xmin: -1, xmax: 17, ymin: -3, ymax: 5 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [{ x: 8, y: 3, label: "(8, 3)", color: "blue" }, { x: 16, y: 4, label: "(16, 4)", color: "blue" }, { x: 0.5, y: -1, label: "(½, −1)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: { x: 1, y: 1 } }, "y = log₂ x : log₂ 8 = 3, log₂ 16 = 4, log₂ ½ = −1, log₂ 1 = 0.")}`),

  widget("ibLogGraph", { init: [2, 0, 0] }),

  section("📌 Quatre propriétés tirées directement de la définition", S`
  ${table(["Propriété", "Pourquoi elle est vraie"], [
    ["\\(\\log_b 1=0\\)", "\\(b^0=1\\)"],
    ["\\(\\log_b b=1\\)", "\\(b^1=b\\)"],
    ["\\(\\log_b b^x=x\\)", "l'exposant sur \\(b\\) qui donne \\(b^x\\) est \\(x\\)"],
    ["\\(b^{\\log_b x}=x\\)", "\\(\\log_b x\\) est l'exposant qui transforme \\(b\\) en \\(x\\)"],
  ])}
  ${watchOut([
    "log_b x est un exposant, pas un produit : log₂ 8 n'est pas 2 × 8.",
    "L'argument doit être positif : log₂(−8) et log₂ 0 ne sont pas définis, parce que bʸ est toujours positif.",
    "log x sans base écrite signifie la base 10.",
    "log_b(1/x) est négatif lorsque b > 1 et x > 1 : une fraction exige un exposant négatif.",
    "Une racine est un exposant fractionnaire : log₅ √5 = ½.",
  ])}`),

  examples([
    ["Passer d'une forme à l'autre", S`Écris \(4^3=64\) sous forme logarithmique et \(\log_5\frac1{125}=-3\) sous forme exponentielle.`,
      [S`<b>Règle.</b> \(b^y=x\Longleftrightarrow\log_b x=y\) : la base reste la base et l'exposant devient la valeur du logarithme.`,
        S`<b>Premier :</b> base \(4\), exposant \(3\), résultat \(64\) : \(\log_4 64=3\).`,
        S`<b>Deuxième :</b> base \(5\), logarithme (exposant) \(-3\), argument \(\frac1{125}\) : \(5^{-3}=\frac1{125}\).`,
        S`<b>Vérification :</b> \(5^{-3}=\frac1{5^3}=\frac1{125}\) ✓`],
      S`\(\log_4 64=3\); \(5^{-3}=\frac1{125}\)`,
      plane({ view: { xmin: -5, xmax: 70, ymin: -2, ymax: 4 }, curves: [{ f: lg(4), a: 0.02, color: "violet" }], points: [{ x: 64, y: 3, label: "(64, 3)", color: "amber" }, { x: 16, y: 2, label: "(16, 2)", color: "blue" }], step: { x: 10, y: 1 } })],
    ["Évaluer en associant des puissances", S`Évalue \(\log_3 243\) et \(\log_2\frac1{16}\).`,
      [S`<b>Règle.</b> Écris l'argument comme une puissance de la base; alors \(\log_b b^x=x\).`,
        S`<b>Premier :</b> \(243=3\times3\times3\times3\times3=3^5\), donc \(\log_3 243=\log_3 3^5=5\).`,
        S`<b>Deuxième :</b> \(\frac1{16}=\frac1{2^4}=2^{-4}\), donc \(\log_2\frac1{16}=-4\).`,
        S`<b>Vérification :</b> \(3^5=243\) ✓ et \(2^{-4}=\frac1{16}\) ✓`],
      S`\(5\) et \(-4\)`,
      plane({ view: { xmin: -1, xmax: 17, ymin: -5, ymax: 5 }, curves: [{ f: lg(2), a: 0.01, color: "violet" }], points: [{ x: 1 / 16, y: -4, label: "(1/16, −4)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Racines et base qui est une puissance", S`Évalue \(\log_7\sqrt7\) et \(\log_8 4\).`,
      [S`<b>Règle.</b> Les racines sont des exposants fractionnaires : \(\sqrt[n]{a}=a^{1/n}\). Lorsque la base et l'argument sont deux puissances d'un même nombre, écris-les tous deux avec ce nombre.`,
        S`<b>Premier :</b> \(\sqrt7=7^{1/2}\), donc \(\log_7\sqrt7=\frac12\).`,
        S`<b>Deuxième :</b> pose \(\log_8 4=y\), donc \(8^y=4\). Écris en base 2 : \((2^3)^y=2^2\), donc \(2^{3y}=2^2\).`,
        S`<b>Des puissances égales d'une même base ont des exposants égaux :</b> \(3y=2\), \(y=\frac23\).`,
        S`<b>Vérification :</b> \(8^{2/3}=\left(\sqrt[3]8\right)^2=2^2=4\) ✓`],
      S`\(\frac12\) et \(\frac23\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -2, ymax: 3 }, curves: [{ f: lg(8), a: 0.01, color: "violet" }], points: [{ x: 4, y: 2 / 3, label: "(4, 2/3)", color: "amber" }, { x: 8, y: 1, label: "(8, 1)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Les quatre propriétés", S`Évalue \(\log_6 1+\log_9 9+\log_4 4^{-3}+5^{\log_5 7}\).`,
      [S`<b>Propriétés.</b> \(\log_b1=0\), \(\log_bb=1\), \(\log_bb^x=x\), \(b^{\log_bx}=x\).`,
        S`<b>Terme par terme :</b> \(\log_6 1=0\) (puisque \(6^0=1\)); \(\log_9 9=1\); \(\log_4 4^{-3}=-3\); \(5^{\log_5 7}=7\).`,
        S`<b>Additionne :</b> \(0+1-3+7=5\).`,
        S`<b>Vérifie le dernier terme :</b> \(\log_5 7\) est l'exposant qui transforme \(5\) en \(7\); l'appliquer à \(5\) donne donc \(7\) ✓`],
      S`\(5\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -2, ymax: 3 }, curves: [{ f: lg(6), a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }, { x: 6, y: 1, label: "(6, 1)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Estimer, puis utiliser la calculatrice", S`Entre quels deux entiers se trouve \(\log 450\)? Évalue-le ensuite au millième près.`,
      [S`<b>Règle.</b> \(\log x\) signifie \(\log_{10}x\); encadre \(x\) entre deux puissances de \(10\).`,
        S`<b>Encadrement :</b> \(10^2=100\) et \(10^3=1000\), et \(100<450<1000\), donc \(2<\log450<3\).`,
        S`<b>Calculatrice :</b> \(\log450\approx2.653\).`,
        S`<b>Vérification :</b> \(10^{2.653}\approx449.8\) ✓, et \(2.653\) est entre \(2\) et \(3\) ✓`],
      S`\(2<\log450<3\); \(\log450\approx2.653\)`,
      plane({ view: { xmin: -50, xmax: 1100, ymin: -1, ymax: 4 }, curves: [{ f: Math.log10, a: 0.5, color: "violet" }], points: [{ x: 100, y: 2, label: "(100, 2)", color: "blue" }, { x: 450, y: 2.653, label: "(450, 2.653)", color: "amber" }, { x: 1000, y: 3, label: "(1000, 3)", color: "blue" }], step: { x: 100, y: 1 } })],
  ]),

  practice([
    q("évaluer", S`Évalue \(\log_2 128\).`, num(7), "Écris 128 comme une puissance de 2.", [S`\(128=2^7\).`], S`\(7\)`),
    q("fraction", S`Évalue \(\log_3\frac1{81}\).`, num(-4), "81 = 3⁴.", [S`\(\frac1{81}=3^{-4}\).`], S`\(-4\)`),
    q("racine", S`Évalue \(\log_{2}\sqrt[3]{2}\).`, num(1 / 3, 0.0001), "Une racine cubique correspond à la puissance 1/3.", [S`\(\sqrt[3]2=2^{1/3}\).`], S`\(\frac13\)`),
    q("conversion", S`Si \(\log_b 49=2\), trouve \(b\).`, num(7), "Réécris sous la forme bʸ = x.", [S`\(b^2=49\) avec \(b>0\) : \(b=7\).`], S`\(7\)`),
    q("défini?", S`Quel logarithme n'est <strong>pas</strong> défini?`, choice(["log₃(−9)", "log₃(1/9)", "log₉ 3", "log 0.001"], 0),
      "L'argument doit être positif.", [S`\(3^y\) est toujours positif; il ne peut donc jamais être égal à \(-9\).`], S`\(\log_3(-9)\)`),
  ]),

  ...hard([
    ["Une base fractionnaire", S`Évalue \(\log_{1/4}32\) et explique le signe de la réponse.`,
      [S`<b>Règle.</b> Pose \(\log_{1/4}32=y\), donc \(\left(\frac14\right)^y=32\).`,
        S`<b>Base commune 2 :</b> \(\frac14=2^{-2}\) et \(32=2^5\) : \(2^{-2y}=2^5\).`,
        S`<b>Égale les exposants :</b> \(-2y=5\), donc \(y=-\frac52\).`,
        S`<b>Signe :</b> élever un nombre inférieur à 1 à une puissance positive le rend plus petit; pour atteindre \(32>1\), l'exposant doit donc être négatif ✓`,
        S`<b>Vérification :</b> \(\left(\frac14\right)^{-5/2}=4^{5/2}=\left(\sqrt4\right)^5=32\) ✓`],
      S`\(-\frac52\)`],
    ["Logarithmes imbriqués", S`Évalue \(\log_3\left(\log_2\left(\log_4 256\right)\right)\).`,
      [S`<b>Règle.</b> Travaille de l'intérieur vers l'extérieur, comme avec des parenthèses.`,
        S`<b>Le plus intérieur :</b> \(256=4^4\), donc \(\log_4256=4\).`,
        S`<b>Au milieu :</b> \(\log_2 4=2\).`,
        S`<b>À l'extérieur :</b> \(\log_3 2\) n'est pas un nombre entier : \(3^0=1\) et \(3^1=3\), et \(1<2<3\), donc il est entre \(0\) et \(1\); la calculatrice donne \(\approx0.631\).`,
        S`<b>Vérification :</b> \(3^{0.631}\approx2.00\) ✓`],
      S`\(\log_3 2\approx0.631\)`],
  ], [
    q("difficile", S`Évalue \(\log_{27}9\).`, num(2 / 3, 0.0001), "Écris les deux nombres comme des puissances de 3.", [S`\(27^y=9\Rightarrow3^{3y}=3^2\Rightarrow y=\frac23\).`], S`\(\frac23\)`),
    q("difficile", S`Évalue \(\log_{\sqrt2}8\).`, num(6), "√2 = 2^(1/2).", [S`\(2^{y/2}=2^3\Rightarrow y=6\).`], S`\(6\)`),
    q("difficile", S`Trouve \(x\) si \(\log_x\frac18=-\frac32\).`, num(4), "Réécris : x^(−3/2) = 1/8.", [S`\(x^{3/2}=8\Rightarrow x=8^{2/3}=4\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce qu'un logarithme?", "Un exposant : log_b x est la puissance qu'on met sur b pour obtenir x."],
      ["Comment évaluer log₂ 32 sans calculatrice?", "Écris 32 comme une puissance de 2 : 32 = 2⁵, donc la réponse est 5."],
      ["Pourquoi ne peut-on pas prendre le logarithme d'un nombre négatif?", "bʸ est positif pour tout y, donc aucun exposant ne donne un résultat négatif."],
      ["Que signifie log x sans base?", "Le logarithme décimal, en base 10."],
      ["Pourquoi log_b 1 = 0 pour toute base?", "Toute base permise élevée à la puissance 0 donne 1."],
    ],
    summary: [
      "log_b x = y ⇔ bʸ = x (b > 0, b ≠ 1, x > 0).",
      "Pour évaluer, écris l'argument comme une puissance de la base.",
      "log_b 1 = 0, log_b b = 1, log_b bˣ = x, b^(log_b x) = x.",
      "log x = log₁₀ x; encadre x entre deux puissances de 10 pour estimer.",
    ],
    next: "La leçon 6.3 représente y = log_b x et ses transformations.",
  }),
];
