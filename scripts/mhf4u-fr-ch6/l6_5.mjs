// MHF4U-FR 6.5 — Échelles logarithmiques (miroir de ../mhf4u-ch6/l6_5.mjs) : pourquoi on utilise des échelles
// logarithmiques, le pH, les décibels et la magnitude des séismes, les conversions dans les deux sens et la comparaison
// de deux valeurs par le rapport 10^(différence).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "6.5 Échelles logarithmiques";
export const ID = lessonId(6, 5);

const S = String.raw;
const L = Math.log10;
const scale = (pts, xmin, xmax, cap) => plane({ view: { xmin, xmax, ymin: -1, ymax: 1.5 }, points: pts.map(([x, label, color = "blue"]) => ({ x, y: 0, label, color })), step: { x: 1, y: 1 } }, cap);
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Échelles logarithmiques",
    overview: S`Certaines quantités s'étendent sur plusieurs puissances de 10 : l'acidité des liquides, l'intensité des sons, l'énergie des séismes. Une échelle logarithmique enregistre l'<em>exposant</em> plutôt que le nombre, de sorte qu'un immense intervalle devient court. En contrepartie, des pas égaux sur l'échelle représentent des <em>rapports</em> égaux, et non des différences égales : chaque pas de 1 est un facteur 10.`,
    goals: [
      "expliquer pourquoi une échelle logarithmique est utile;",
      "calculer un pH, un niveau sonore et une magnitude à l'aide d'une formule;",
      "convertir une valeur lue sur l'échelle en la quantité d'origine;",
      "comparer deux valeurs à l'aide de \\(10^{\\text{différence}}\\);",
      "lire et interpréter une échelle logarithmique.",
    ],
    curriculum: "A2.4 (résoudre des problèmes portant sur des échelles logarithmiques, p. ex. le pH, les décibels, l'échelle de Richter)",
    prior: [
      [S`Évalue \(\log0.001\).`, S`\(-3\).`],
      [S`Écris \(10^{2.5}\) sous forme décimale.`, S`\(\approx316.2\).`],
      [S`Si \(\log x=4.2\), que vaut \(x\)?`, S`\(x=10^{4.2}\approx15\,849\).`],
    ],
    words: [
      ["Échelle logarithmique", "une échelle qui enregistre le logarithme d'une quantité", "pH, dB, magnitude"],
      ["pH", "\\(\\text{pH}=-\\log[\\text{H}^+]\\)", "eau pure : 7"],
      ["Décibel", "\\(\\beta=10\\log\\dfrac I{I_0}\\), \\(I_0=10^{-12}\\) W/m²", "un chuchotement fait environ 30 dB"],
      ["Magnitude", "\\(M=\\log\\dfrac I{I_0}\\) (intensité d'un séisme)", "une magnitude 6 est 10 fois une magnitude 5"],
    ],
  }),

  section("📌 Pourquoi une échelle logarithmique?", S`
  <p>Dans les liquides de tous les jours, la concentration en ions hydrogène va d'environ \(10^{-1}\) à \(10^{-13}\) mol/L. Sur une droite numérique ordinaire, presque toutes ces valeurs seraient empilées les unes sur les autres près de 0. Prendre le logarithme transforme chaque puissance de 10 en un seul pas.</p>
  ${scale([[2.3, "citron"], [4.3, "tomate"], [7, "eau", "green"], [8.3, "bicarbonate", "violet"], [13, "javellisant", "violet"]], -0.5, 14.5, "L'échelle de pH : chaque pas vers la gauche est 10 fois plus acide.")}
  ${keyIdea(S`Sur une échelle logarithmique, des lectures qui diffèrent de \(d\) correspondent à des quantités dont le <strong>rapport</strong> est \(10^{d}\) (ou \(10^{d/10}\) pour les décibels). Des pas égaux signifient des facteurs égaux.`)}`),

  section("📌 Trois échelles courantes", S`
  ${table(["Échelle", "Formule", "Inverse", "Une différence de 1 signifie"], [
    ["pH", "\\(\\text{pH}=-\\log[\\text{H}^+]\\)", "\\([\\text{H}^+]=10^{-\\text{pH}}\\)", "10 fois l'acidité"],
    ["niveau sonore", "\\(\\beta=10\\log\\dfrac I{I_0}\\)", "\\(I=I_0\\cdot10^{\\beta/10}\\)", "10 dB = 10 fois l'intensité"],
    ["magnitude", "\\(M=\\log\\dfrac I{I_0}\\)", "\\(I=I_0\\cdot10^{M}\\)", "10 fois l'intensité"],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 10.5, ymin: -0.5, ymax: 10.5 }, curves: [{ f: (x) => L(x) * 10, a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)" }, { x: 10, y: 10, label: "(10, 10)" }], step: { x: 1, y: 1 } }, "Décibels en fonction du rapport d'intensité : multiplier l'intensité par 10 n'ajoute que 10 dB.")}
  ${watchOut([
    "Un pH plus bas de 2 est 10² = 100 fois plus acide, et non 2 fois.",
    "Le pH comporte un signe moins : une plus grande concentration donne un plus petit pH.",
    "Pour les décibels, divise la différence par 10 avant de l'utiliser comme exposant.",
    "Doubler l'intensité ajoute 10 log 2 ≈ 3 dB; cela ne double pas le nombre de décibels.",
    "Garde les mêmes unités pour I et I₀ avant de diviser.",
  ])}`),

  widget("ibLogGraph", { init: [10, 0, 0] }),

  examples([
    ["Le pH à partir d'une concentration", S`Le vinaigre a \([\text{H}^+]=3.2\times10^{-4}\) mol/L. Trouve son pH et détermine s'il est acide.`,
      [S`<b>Formule.</b> \(\text{pH}=-\log[\text{H}^+]\); sous 7, c'est acide; au-dessus de 7, c'est basique.`,
        S`<b>Substitue :</b> \(\text{pH}=-\log\left(3.2\times10^{-4}\right)\approx-(-3.495)=3.49\).`,
        S`<b>Interprète :</b> \(3.49<7\), donc le vinaigre est acide.`,
        S`<b>Vérification par estimation :</b> \(10^{-4}<3.2\times10^{-4}<10^{-3}\), donc le pH est entre \(3\) et \(4\) ✓`],
      S`pH \(\approx3.49\), acide`,
      scale([[3.49, "vinaigre 3.49", "amber"], [7, "neutre", "green"]], -0.5, 14.5)],
    ["La concentration à partir d'un pH", S`Le jus d'orange a un pH de \(3.7\). Trouve \([\text{H}^+]\).`,
      [S`<b>Inverse.</b> \(\text{pH}=-\log[\text{H}^+]\Rightarrow\log[\text{H}^+]=-\text{pH}\Rightarrow[\text{H}^+]=10^{-\text{pH}}\) (définition d'un logarithme).`,
        S`<b>Substitue :</b> \([\text{H}^+]=10^{-3.7}\approx2.0\times10^{-4}\) mol/L.`,
        S`<b>Vérification :</b> \(-\log\left(2.0\times10^{-4}\right)\approx3.70\) ✓`],
      S`\(\approx2.0\times10^{-4}\) mol/L`,
      scale([[3.7, "jus 3.7", "amber"], [7, "neutre", "green"]], -0.5, 14.5)],
    ["Comparer deux acides", S`Le jus de citron a un pH de \(2.3\) et une tomate a un pH de \(4.3\). Combien de fois le jus de citron est-il plus acide?`,
      [S`<b>Règle.</b> \([\text{H}^+]=10^{-\text{pH}}\), donc le rapport est \(\dfrac{10^{-2.3}}{10^{-4.3}}=10^{-2.3-(-4.3)}=10^{2}\) (loi du quotient).`,
        S`<b>Évalue :</b> \(10^2=100\).`,
        S`<b>Signification :</b> une différence de \(2\) sur l'échelle de pH correspond à un facteur \(100\) d'acidité.`,
        S`<b>Vérification :</b> \(10^{-2.3}\approx0.0050\) et \(10^{-4.3}\approx0.000050\); \(0.0050\div0.000050=100\) ✓`],
      S`\(100\) fois`,
      scale([[2.3, "citron 2.3", "amber"], [4.3, "tomate 4.3", "red"], [7, "neutre", "green"]], -0.5, 14.5)],
    ["Niveau sonore", S`Un son a une intensité \(I=10^{-3}\) W/m². Trouve son niveau en décibels (\(I_0=10^{-12}\) W/m²).`,
      [S`<b>Formule.</b> \(\beta=10\log\dfrac I{I_0}\).`,
        S`<b>Rapport :</b> \(\dfrac{10^{-3}}{10^{-12}}=10^{-3-(-12)}=10^{9}\).`,
        S`<b>Logarithme :</b> \(\log10^9=9\), donc \(\beta=10\times9=90\) dB.`,
        S`<b>Vérification :</b> \(I_0\cdot10^{90/10}=10^{-12}\cdot10^9=10^{-3}\) ✓`],
      S`\(90\) dB`,
      plane({ view: { xmin: 0, xmax: 140, ymin: -1, ymax: 1.5 }, points: [{ x: 90, y: 0, label: "90 dB", color: "amber" }, { x: 0, y: 0, label: "seuil", color: "green" }], step: { x: 10, y: 1 }, xlabel: "dB" })],
    ["Comparer des séismes", S`Un séisme a une magnitude de \(7.2\) et un autre, de \(5.4\). Combien de fois le premier est-il plus intense?`,
      [S`<b>Règle.</b> \(I=I_0\cdot10^M\), donc \(\dfrac{I_1}{I_2}=\dfrac{10^{7.2}}{10^{5.4}}=10^{7.2-5.4}=10^{1.8}\).`,
        S`<b>Évalue :</b> \(10^{1.8}\approx63.1\).`,
        S`<b>Vérification du bon sens :</b> une différence de presque \(2\) devrait donner presque \(10^2=100\) fois; \(63\) est entre \(10\) et \(100\) ✓`],
      S`environ \(63\) fois plus intense`,
      scale([[5.4, "5.4", "blue"], [7.2, "7.2", "red"]], 0, 10, "Magnitudes 5.4 et 7.2 : un écart de 1.8 correspond à un facteur 10^1.8.")],
  ]),

  practice([
    q("pH", S`Trouve le pH d'une solution où \([\text{H}^+]=10^{-9}\) mol/L.`, num(9), "pH = −log[H⁺].", [S`\(-\log10^{-9}=9\).`], S`\(9\)`),
    q("concentration", S`Un liquide a un pH de \(5\). Trouve \([\text{H}^+]\) en notation scientifique; entre l'exposant de 10.`, num(-5), "[H⁺] = 10^(−pH).", [S`\(10^{-5}\).`], S`\(-5\)`),
    q("décibels", S`Un son est \(10^5\) fois plus intense que le seuil \(I_0\). Trouve son niveau en dB.`, num(50), "β = 10 log(I/I₀).", [S`\(10\log10^5=50\).`], S`\(50\)`),
    q("comparer", S`Combien de fois un séisme de magnitude \(6\) est-il plus intense qu'un séisme de magnitude \(4\)?`, num(100), "10^(différence).", [S`\(10^{2}=100\).`], S`\(100\)`),
    q("lequel est vrai?", S`Un pH de 3, comparé à un pH de 6, est…`, choice(["1000 fois plus acide", "2 fois plus acide", "3 fois plus acide", "1000 fois moins acide"], 0), "Un pH plus bas est plus acide.", [S`\(10^{6-3}=1000\).`], "1000 fois plus acide"),
  ]),

  ...hard([
    ["Doubler un son", S`a) Montre que doubler l'intensité d'un son ajoute environ \(3\) dB. b) Un concert rock est à \(110\) dB et une rue achalandée, à \(80\) dB. Combien de fois le concert est-il plus intense?`,
      [S`<b>a)</b> À partir de \(\beta=10\log\dfrac I{I_0}\) : \(\dfrac I{I_0}=10^{\beta/10}\). Écris \(2=10^{\log2}\); alors \(\dfrac{2I}{I_0}=10^{\log2}\cdot10^{\beta/10}=10^{\beta/10+\log2}\) (loi des exposants), donc le nouveau niveau est \(10\left(\frac\beta{10}+\log2\right)=\beta+10\log2\).`,
        S`<b>Valeur :</b> \(10\log2\approx3.01\) dB.`,
        S`<b>b)</b> \(\dfrac{I_1}{I_2}=10^{(110-80)/10}=10^{3}=1000\).`,
        S`<b>Vérification de b) :</b> chaque tranche de \(10\) dB est un facteur \(10\); trois tranches de \(10\) dB donnent \(10^3\) ✓`],
      S`a) \(+3.01\) dB b) \(1000\) fois`],
    ["Diluer un acide", S`Un acide a un pH de \(2.6\). On le dilue de sorte que \([\text{H}^+]\) est divisé par \(50\). Trouve le nouveau pH.`,
      [S`<b>Règle.</b> \([\text{H}^+]=10^{-\text{pH}}\). Écris \(50=10^{\log50}\); alors \(\dfrac{10^{-2.6}}{10^{\log50}}=10^{-(2.6+\log50)}\) (loi des exposants).`,
        S`<b>Le nouveau pH est donc</b> \(2.6+\log50\approx2.6+1.699=4.30\).`,
        S`<b>Vérification :</b> \([\text{H}^+]=10^{-2.6}\approx2.51\times10^{-3}\); divisé par \(50\) : \(5.02\times10^{-5}\); \(-\log(5.02\times10^{-5})\approx4.30\) ✓`],
      S`pH \(\approx4.30\)`],
  ], [
    q("difficile", S`Un son de \(65\) dB est combien de fois plus intense qu'un son de \(45\) dB?`, num(100), "Divise d'abord la différence par 10.", [S`\(10^{20/10}=100\).`], S`\(100\)`),
    q("difficile", S`Trouve le pH lorsque \([\text{H}^+]=4.5\times10^{-8}\) (au centième près).`, num(-L(4.5e-8), 0.01), "−log(4.5 × 10⁻⁸).", [S`\(\approx7.35\).`], S`\(\approx7.35\)`),
    q("difficile", S`Un séisme est \(500\) fois plus intense qu'un séisme de magnitude \(4.1\). Trouve sa magnitude (au dixième près).`, num(4.1 + L(500), 0.05), "Ajoute log 500.", [S`\(4.1+\log500\approx4.1+2.70=6.8\).`], S`\(\approx6.8\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi utiliser une échelle logarithmique?", "Elle comprime des valeurs qui s'étendent sur plusieurs puissances de 10 dans un intervalle court et facile à lire."],
      ["Que signifie une différence de 1?", "Un facteur 10 (pour le pH et la magnitude); pour les décibels, 10 dB correspondent à un facteur 10."],
      ["Comment revenir à la quantité à partir d'une lecture?", "Annule le logarithme avec une puissance de 10 : [H⁺] = 10^(−pH), I = I₀·10^(β/10)."],
      ["Pourquoi le pH diminue-t-il quand l'acidité augmente?", "À cause du signe moins dans pH = −log[H⁺]."],
      ["Combien de décibels le doublement ajoute-t-il?", "10 log 2 ≈ 3 dB."],
    ],
    summary: [
      "pH = −log[H⁺]; [H⁺] = 10^(−pH).",
      "β = 10 log(I/I₀); I = I₀·10^(β/10).",
      "Magnitude M = log(I/I₀); rapport de deux séismes = 10^(M₁ − M₂).",
      "Des pas égaux sur une échelle logarithmique sont des rapports égaux.",
    ],
    next: "La leçon 6.6 révise tout le chapitre : exponentielles, logarithmes, leurs graphiques, la loi de la puissance et les échelles logarithmiques.",
  }),
];
