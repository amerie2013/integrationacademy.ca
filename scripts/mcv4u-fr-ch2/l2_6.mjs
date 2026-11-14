// MCV4U-FR 2.6 — Problèmes de taux de variation : coût, revenu et profit marginaux, la dérivée comme estimation de l'unité
// suivante, taux de variation en sciences (population, température, concentration, pression), interprétation du signe et des unités
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.6 Problèmes de taux de variation";
export const ID = lessonId(2, 6);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Problèmes de taux de variation",
    overview: S`Toute dérivée est un taux : ses unités sont « unités de sortie par unité d'entrée ». En affaires, la dérivée de la fonction de coût \(C(x)\) est le <strong>coût marginal</strong> \(C'(x)\) : une très bonne estimation de ce que coûte la fabrication d'un article de plus. De la même façon, \(R'(x)\) est le revenu marginal et \(P'(x)=R'(x)-C'(x)\) est le profit marginal. En sciences, la dérivée indique à quelle vitesse une population croît, un liquide refroidit ou une pression diminue. L'habileté visée dans cette leçon : lire un modèle, le dériver et expliquer ce que signifie le nombre obtenu, avec ses unités.`,
    goals: [
      "interpréter la dérivée comme un taux avec des unités;",
      "trouver et interpréter le coût, le revenu et le profit marginaux;",
      "comparer le coût marginal au coût réel de l'article suivant;",
      "trouver quand un taux est nul et expliquer ce que cela signifie;",
      "appliquer les dérivées à des modèles tirés des sciences naturelles et sociales.",
    ],
    curriculum: "A3.5 (résoudre des problèmes, à l'aide de la dérivée, portant sur des taux de variation instantanés, y compris des problèmes tirés d'applications concrètes)",
    prior: [
      [S`Unités de \(\frac{\Delta C}{\Delta x}\) si \(C\) est en dollars et \(x\) en articles?`, S`Dollars par article.`],
      [S`Dérivée de \(0.02x^2\)?`, S`\(0.04x\).`],
      [S`Revenu si \(x\) articles se vendent à \(p\) dollars chacun?`, S`\(R=xp\).`],
    ],
    words: [
      ["Coût marginal", "\\(C'(x)\\) : coût approximatif de l'article suivant", "dollars par article"],
      ["Revenu marginal", "\\(R'(x)\\) : revenu approximatif tiré de l'article suivant", ""],
      ["Profit", "\\(P(x)=R(x)-C(x)\\)", "\\(P'=R'-C'\\)"],
      ["Fonction de demande", "le prix \\(p\\) en fonction de la quantité \\(x\\)", "\\(p=60-0.2x\\)"],
    ],
  }),

  section("📌 La dérivée comme coût d'un article de plus", S`
  ${table(["Quantité", "Signification", "Unités"], [
    ["\\(C(x)\\)", "coût total de x articles", "dollars"],
    ["\\(C(x+1)-C(x)\\)", "coût réel de l'article numéro x + 1", "dollars"],
    ["\\(C'(x)\\)", "coût marginal (très proche de la ligne ci-dessus)", "dollars par article"],
    ["\\(\\frac{C(x)}{x}\\)", "coût moyen par article", "dollars par article"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 4000 }, curves: [{ f: (x) => 1500 + 12 * x + 0.02 * x * x, color: "violet" }, { f: (x) => 1500 + 12 * 100 + 0.02 * 1e4 + 16 * (x - 100), color: "green" }], points: [{ x: 100, y: 2900, label: "(100, 2900)", color: "red" }], step: { x: 25, y: 500 } }, "C(x) = 1500 + 12x + 0.02x² (violet) avec sa tangente en x = 100 (vert) : pente de 16 dollars par article.")}
  ${keyIdea(S`La dérivée \(f'(a)\) est le taux de variation instantané de \(f\) en \(a\), en unités de \(f\) par unité de \(x\). Coût marginal \(C'(x)\approx C(x+1)-C(x)\), et profit marginal \(P'(x)=R'(x)-C'(x)\).`)}`),

  section("📌 Explore", S`<p>L'explorateur utilise \(C(x)=F+ax+bx^2\). Fais varier le nombre d'articles : compare le coût marginal \(C'(x)\) au coût réel d'un article de plus, \(C(x+1)-C(x)\). Ils diffèrent exactement de \(b\). Change ensuite \(F\) : le coût fixe déplace le graphique vers le haut, mais ne change jamais le coût marginal.</p>`),

  widget("marginalCost", { init: { F: 500, a: 20, b: 0.05, x: 100 } }),

  section("📌 Interpréter la réponse", S`
  <p>Donne le nombre, ses unités et ce qu'il signifie dans la situation : « \(C'(100)=16\) : quand 100 articles ont été fabriqués, chaque article supplémentaire coûte environ 16 dollars. »</p>
  ${watchOut([
    "C′(100) est un taux (dollars par article), pas un coût total.",
    "Un taux négatif signifie que la quantité diminue : dis-le en mots.",
    "Le revenu est maximal là où R′(x) = 0, et non là où R(x) = 0.",
    "Profit P = R − C, donc P′ = R′ − C′ : dérive après avoir soustrait, ou soustrais les dérivées.",
    "Vérifie que la réponse a du sens dans le contexte (pas de nombre d'articles négatif, pas de temps avant t = 0).",
  ])}`),

  examples([
    ["Coût marginal", S`\(C(x)=1500+12x+0.02x^2\) dollars pour \(x\) articles. Trouve \(C'(100)\) et compare-le au coût réel du 101e article.`,
      [S`\(C'(x)=12+0.04x\Rightarrow C'(100)=16\).`, S`\(C(101)-C(100)=(1500+1212+204.02)-(1500+1200+200)=16.02\).`],
      S`environ 16 dollars par article; le coût réel du 101e article est de 16.02 dollars`],
    ["Revenu marginal", S`\(R(x)=50x-0.1x^2\) dollars. Trouve \(R'(100)\) et le nombre d'articles qui donne le revenu le plus élevé.`,
      [S`\(R'(x)=50-0.2x\Rightarrow R'(100)=30\).`, S`\(R'(x)=0\Rightarrow x=250\).`],
      S`\(R'(100)=30\) dollars par article; revenu maximal à 250 articles`,
      plane({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 7000 }, curves: [{ f: (x) => 50 * x - 0.1 * x * x, color: "violet" }], points: [{ x: 250, y: 6250, label: "(250, 6250)", color: "red" }], step: { x: 50, y: 1000 } })],
    ["Profit marginal", S`\(R(x)=50x-0.1x^2\) et \(C(x)=800+12x+0.02x^2\). Quand le profit marginal est-il nul?`,
      [S`\(P(x)=-800+38x-0.12x^2\Rightarrow P'(x)=38-0.24x\).`, S`\(P'=0\Rightarrow x=\tfrac{38}{0.24}\approx158.3\).`],
      S`à environ 158 articles (là où le profit est le plus élevé)`],
    ["Croissance d'une population", S`Une culture de bactéries compte \(P(t)=2000+150t-3t^2\) cellules après \(t\) heures. Trouve le taux de croissance à 10 h, et le moment où la croissance s'arrête.`,
      [S`\(P'(t)=150-6t\Rightarrow P'(10)=90\).`, S`\(P'(t)=0\Rightarrow t=25\).`],
      S`90 cellules par heure à \(t=10\); la croissance s'arrête à \(t=25\) h`,
      plane({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 4200 }, curves: [{ f: (t) => 2000 + 150 * t - 3 * t * t, color: "violet" }, { f: (t) => 3200 + 90 * (t - 10), color: "green" }], points: [{ x: 10, y: 3200, label: "t = 10", color: "red" }, { x: 25, y: 3875, label: "t = 25", color: "red" }], step: { x: 5, y: 500 } })],
    ["Refroidissement", S`La température d'une boisson est \(T(t)=20+\dfrac{80}{t+1}\) °C après \(t\) minutes. Trouve \(T'(3)\) et interprète-le.`,
      [S`\(T'(t)=-\dfrac{80}{(t+1)^2}\).`, S`\(T'(3)=-\dfrac{80}{16}=-5\).`],
      S`\(-5\) °C par minute : après 3 minutes, la boisson refroidit de 5 degrés par minute`,
      plane({ view: { xmin: 0, xmax: 15, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 20 + 80 / (t + 1), color: "violet" }, { f: (t) => 40 - 5 * (t - 3), color: "green" }, { f: () => 20, color: "gray" }], points: [{ x: 3, y: 40, label: "(3, 40)", color: "red" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("marginal", S`\(C(x)=800+5x+0.03x^2\) dollars. Trouve le coût marginal à \(x=100\) (dollars par article).`, num(11),
      "C′ = 5 + 0.06x.", [S`\(5+6\).`], S`\(11\)`),
    q("marginal", S`\(R(x)=40x-0.1x^2\) dollars. Trouve \(R'(100)\).`, num(20),
      "R′ = 40 − 0.2x.", [S`\(40-20\).`], S`\(20\)`),
    q("maximum", S`\(R(x)=240x-x^2\) dollars. Pour combien d'articles le revenu est-il le plus élevé?`, num(120),
      "R′ = 0.", [S`\(240-2x=0\).`], S`\(120\)`),
    q("sciences", S`La concentration d'un polluant est \(C(t)=5+\dfrac{60}{t+2}\) mg/L après \(t\) jours. Trouve \(C'(1)\) (4 décimales).`, num(-6.6667, 0.0005),
      "C′ = −60/(t + 2)².", [S`\(-\frac{60}{9}\).`], S`\(-6.6667\)`),
    q("signification", S`\(R'(200)=-3\) dollars par article. Qu'est-ce que cela signifie?`, choice(["Vendre un article de plus après le 200e ferait baisser le revenu d'environ 3 dollars", "Le revenu pour 200 articles est de −3 dollars", "Chaque article se vend 3 dollars de moins", "Les 200 articles font perdre 3 dollars au total"], 0),
      "Une dérivée est un taux, pas un total.", ["Revenu marginal négatif : la vente suivante réduit le revenu total."], "le revenu baisse d'environ 3 dollars par article supplémentaire"),
  ]),

  ...hard([
    ["Prix, quantité et revenu", S`La demande d'un produit est \(p=60-0.2x\) dollars, où \(x\) articles sont vendus. Trouve le nombre d'articles et le prix qui maximisent le revenu, ainsi que le revenu maximal.`,
      [S`\(R(x)=xp=60x-0.2x^2\).`, S`\(R'(x)=60-0.4x=0\Rightarrow x=150\).`, S`\(p=60-30=30\) dollars; \(R=150\cdot30=4500\) dollars.`],
      S`150 articles à 30 $ chacun donnent le revenu maximal, soit 4500 $`,
      plane({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 5000 }, curves: [{ f: (x) => 60 * x - 0.2 * x * x, color: "violet" }], points: [{ x: 150, y: 4500, label: "(150, 4500)", color: "red" }], step: { x: 50, y: 1000 } })],
    ["Pression et volume", S`Pour un gaz à température constante, \(P=\dfrac{1000}{V}\) (kPa, \(V\) en litres). (a) Trouve \(\dfrac{dP}{dV}\) lorsque \(V=20\). (b) Si le volume augmente de 2 L par minute, à quel rythme la pression varie-t-elle à ce moment?`,
      [S`(a) \(\dfrac{dP}{dV}=-\dfrac{1000}{V^2}=-\dfrac{1000}{400}=-2.5\) kPa par L.`, S`(b) Règle de dérivation en chaîne : \(\dfrac{dP}{dt}=\dfrac{dP}{dV}\cdot\dfrac{dV}{dt}=-2.5\cdot2=-5\) kPa par min.`],
      S`(a) \(-2.5\) kPa par L; (b) la pression diminue de 5 kPa par minute`,
      plane({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 120 }, curves: [...rat((v) => 1000 / v, [0], { xmin: 8, xmax: 60 }), { f: (v) => 50 - 2.5 * (v - 20), color: "green", a: 4, b: 40 }], points: [{ x: 20, y: 50, label: "(20, 50)", color: "red" }], step: { x: 10, y: 20 } })],
  ], [
    q("difficile", S`\(R(x)=100x-0.05x^2\) dollars. Pour combien d'articles le revenu marginal est-il nul?`, num(1000),
      "R′ = 100 − 0.1x.", [S`\(x=1000\).`], S`\(1000\)`),
    q("difficile", S`Une soupe refroidit selon \(T(t)=20+\dfrac{90}{t+1}\) °C. À quel moment \(t\) (min) refroidit-elle de 10 °C par minute?`, num(2),
      "T′ = −90/(t + 1)² = −10.", [S`\((t+1)^2=9\Rightarrow t=2\).`], S`\(t=2\)`),
    q("difficile", S`Le coût moyen par article est \(A(x)=x+\dfrac{100}{x}\) dollars. Pour quelle valeur de \(x\) a-t-on \(A'(x)=0\)?`, num(10),
      "A′ = 1 − 100/x².", [S`\(x^2=100\).`], S`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi C′(x) est-il proche de C(x + 1) − C(x)?", "Sur un seul article, la courbe de coût est presque droite, donc la pente de la tangente et la pente sur un pas sont presque égales."],
      ["Pourquoi le coût fixe n'influence-t-il pas le coût marginal?", "La dérivée d'une constante est 0 : le loyer coûte la même chose, qu'on fabrique 100 ou 101 articles."],
      ["Que m'apprend un taux nul?", "La quantité a cessé d'augmenter ou de diminuer à ce moment : c'est souvent un maximum ou un minimum (p. ex. le revenu maximal)."],
      ["Comment choisir les unités?", "Les unités de la sortie divisées par celles de l'entrée : dollars par article, cellules par heure, °C par minute."],
      ["Où intervient la règle de dérivation en chaîne?", "Quand l'entrée elle-même varie avec le temps : dP/dt = dP/dV · dV/dt."],
    ],
    summary: [
      "f′(a) = taux, en unités de sortie par unité d'entrée.",
      "Coût marginal C′(x) ≈ C(x + 1) − C(x).",
      "P′ = R′ − C′; R est maximal là où R′ = 0.",
      "Interprète toujours : nombre, unités, signification.",
    ],
    next: "La leçon 2.7 fait la révision de tout le chapitre.",
  }),
];
