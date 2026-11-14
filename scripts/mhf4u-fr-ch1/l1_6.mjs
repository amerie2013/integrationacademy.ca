// MHF4U-FR 1.6 — Pente des tangentes et taux de variation instantané : sécantes de plus en plus courtes, quotients de
// différences, estimations centrées, lecture de tangentes sur un graphique, taux nul aux points tournants
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.6 Pente des tangentes et taux de variation instantané";
export const ID = lessonId(1, 6);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Pente des tangentes et taux de variation instantané",
    overview: S`Un indicateur de vitesse montre à quelle vitesse tu roules <em>en ce moment</em>, et non en moyenne. C'est un <strong>taux de variation instantané</strong> : la pente de la <strong>tangente</strong>, une droite qui touche la courbe en un point et qui suit la direction de la courbe à cet endroit. Tu peux l'approximer par les pentes de sécantes sur des intervalles de plus en plus petits, à l'aide du quotient de différences \(\dfrac{f(a+h)-f(a)}{h}\). Dans cette leçon, tu vas estimer des taux instantanés à partir de tables, d'équations et de graphiques, et les interpréter.`,
    goals: [
      "expliquer la différence entre les taux de variation moyens et instantanés;",
      "estimer un taux instantané à l'aide de sécantes sur des intervalles de plus en plus petits;",
      "utiliser le quotient de différences (f(a + h) − f(a))/h et les estimations centrées;",
      "estimer la pente d'une tangente à partir d'un graphique;",
      "interpréter des taux instantanés nuls, positifs et négatifs.",
    ],
    curriculum: "D1.5–D1.9 (reconnaître les taux instantanés; les approximer par des taux moyens sur des intervalles de plus en plus petits; relier la pente des tangentes aux taux instantanés; résoudre des problèmes numériquement et graphiquement)",
    prior: [
      [S`Taux moyen de \(x^2\) sur \([3,4]\)?`, S`\(7\).`],
      [S`Pente de la droite qui passe par \((2,5)\) et \((2.1,5.41)\)?`, S`\(4.1\).`],
      [S`Simplifie \(\frac{(3+h)^2-9}{h}\).`, S`\(6+h\).`],
    ],
    words: [
      ["Tangente", "touche la courbe en un point et a la pente de la courbe à cet endroit", ""],
      ["Taux instantané", "le taux de variation pour une seule valeur de x", ""],
      ["Quotient de différences", "\\(\\frac{f(a+h)-f(a)}{h}\\)", ""],
      ["Estimation centrée", "\\(\\frac{f(a+h)-f(a-h)}{2h}\\)", ""],
    ],
  }),

  section("📌 Des sécantes à la tangente", S`
  ${plane({ view: { xmin: -0.3, xmax: 3, ymin: 0, ymax: 22 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 3, color: "violet" }], lines: [{ m: 5, b: 10, color: "amber", label: "sécante h = 1" }, { m: 9.5, b: 5.5, color: "blue" }, { m: 10, b: 5, color: "green", label: "tangente" }], points: [{ x: 1, y: 15, label: "(1, 15)" }, { x: 2, y: 20 }, { x: 1.1, y: 15.95 }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } }, "Les sécantes de t = 1 à t = 2, puis à t = 1.1, s'approchent de la tangente en t = 1 (pente 10).")}
  ${table(["h", "1", "0.1", "0.01", "0.001"], [["\\(\\frac{h(1+h)-h(1)}{h}\\)", "5", "9.5", "9.95", "9.995"]])}
  ${keyIdea(S`Le taux de variation instantané en \(x=a\) est la pente de la tangente à cet endroit. Estime-le avec \(\dfrac{f(a+h)-f(a)}{h}\) pour un petit \(h\) (les valeurs s'approchent d'un seul nombre), ou de façon plus précise avec l'estimation centrée \(\dfrac{f(a+h)-f(a-h)}{2h}\). Un taux nul signifie une tangente horizontale : souvent un maximum ou un minimum relatif.`)}`),

  section("📌 Explore", S`<p>Choisis une fonction et un point, puis rétrécis l'intervalle \(h\). Observe la sécante en pointillé pivoter jusqu'à la tangente verte et les pentes de la table se stabiliser.</p>`),

  widget("tangentSlope", { init: { fn: "quad", a: 1 } }),

  section("📌 Lire une tangente sur un graphique", S`
  <p>Place une règle le long de la courbe de façon qu'elle touche le point sans couper la courbe tout près. Choisis deux points éloignés sur la règle et calcule la variation verticale ÷ la variation horizontale.</p>
  ${watchOut([
    "Un taux instantané est une pente en UN point; il te faut quand même deux points pour calculer une estimation.",
    "Utilise un petit h, mais calcule avec soin — arrondir f(a + h) trop tôt gâche l'estimation.",
    "Une tangente peut couper la courbe ailleurs; ce qui compte, c'est le comportement près du point.",
    "Un taux instantané nul ne signifie pas toujours un maximum ou un minimum (pense à y = x³ en 0).",
  ])}`),

  examples([
    ["Des sécantes de plus en plus courtes", S`Pour \(h(t)=-5t^2+20t\), estime la vitesse instantanée en \(t=1\).`,
      [S`<b>Idée.</b> Utilise des vitesses moyennes sur des intervalles de plus en plus petits qui commencent en \(t=1\). Leur limite est la vitesse instantanée.`,
        S`<b>Hauteurs.</b> \(h(1)=15\), \(h(1.1)=15.95\), \(h(1.01)=15.0995\).`,
        S`<b>Table.</b> ${tv(["intervalle", "\\([1,1.1]\\)", "\\([1,1.01]\\)"], ["vitesse moyenne", "\\(\\frac{15.95-15}{0.1}=9.5\\)", "\\(\\frac{15.0995-15}{0.01}=9.95\\)"])}`,
        S`<b>Régularité.</b> Chaque étape s'approche de 10, donc l'estimation est 10 m/s.`,
        S`<b>Vérification sur le graphique.</b> Une droite passant par \((1,15)\) de pente 10 touche tout juste la courbe à cet endroit ✓`],
      S`environ \(10\) m/s`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 26 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 10, b: 5, color: "green" }], points: [{ x: 1, y: 15, label: "(1, 15)", color: "amber" }], step: { x: 1, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Une estimation centrée", S`Estime le taux de variation instantané de \(f(x)=x^3\) en \(x=2\).`,
      [S`<b>Méthode.</b> Un quotient centré \(\frac{f(a+h)-f(a-h)}{2h}\) utilise des points des deux côtés. Il est généralement plus précis.`,
        S`<b>Valeurs.</b> Avec \(h=0.001\) : \(2.001^3\approx8.012006\) et \(1.999^3\approx7.988006\).`,
        S`<b>Différence.</b> \(\approx0.024\).`,
        S`<b>Diviser.</b> \(\frac{0.024}{0.002}=12\).`,
        S`<b>Vérification sur le graphique.</b> La droite verte passant par \((2,8)\) de pente 12 touche la courbe ✓`],
      S`environ \(12\)`,
      plane({ view: { xmin: 0, xmax: 3, ymin: -2, ymax: 20 }, curves: [{ f: (x) => x ** 3, color: "violet" }], lines: [{ m: 12, b: -16, color: "green", label: "tangente, pente 12" }], points: [{ x: 2, y: 8, label: "(2, 8)" }], step: { x: 0.5, y: 2 } })],
    ["Croissance exponentielle", S`Pour \(P(t)=100(2)^t\), estime le taux de croissance en \(t=2\).`,
      [S`<b>Valeur au point.</b> \(P(2)=100(4)=400\).`,
        S`<b>Un intervalle très court.</b> Avec \(h=0.001\) : \(2^{2.001}\approx4.0027731\), donc \(P(2.001)\approx400.27731\).`,
        S`<b>Quotient.</b> \(\frac{400.27731-400}{0.001}\approx277.3\).`,
        S`<b>Interpréter.</b> À cet instant, la colonie croît d'environ 277 individus par heure.`,
        S`<b>Vérification de vraisemblance.</b> La moyenne sur \([1,3]\) est \(\frac{800-200}2=300\), un ordre de grandeur semblable ✓`],
      S`environ \(277\) par heure`,
      plane({ view: { xmin: -0.3, xmax: 3.5, ymin: -50, ymax: 1100 }, curves: [{ f: (t) => 100 * 2 ** t, a: 0, b: 3.4, color: "red" }], lines: [{ m: 277.3, b: 400 - 2 * 277.3, color: "green", label: "tangente" }], points: [{ x: 2, y: 400, label: "(2, 400)" }], xlabel: "t (h)", ylabel: "P", step: { x: 0.5, y: 100 } })],
    ["Un taux nul", S`Estime le taux de variation instantané de \(f(x)=x^3-3x\) en \(x=1\). Qu'est-ce que cela t'apprend?`,
      [S`<b>Valeurs.</b> Estimation centrée, \(h=0.01\) : \(f(1.01)=1.030301-3.03=-1.999699\) et \(f(0.99)=0.970299-2.97=-1.999701\).`,
        S`<b>Quotient.</b> \(\frac{-1.999699-(-1.999701)}{0.02}=\frac{0.000002}{0.02}=0.0001\), ce qui vaut environ 0.`,
        S`<b>Signification.</b> Un taux de 0 signifie une tangente horizontale; il s'agit donc peut-être d'un point tournant.`,
        S`<b>Conclure.</b> \(f(0.9)=-1.971\) et \(f(1.1)=-1.969\) sont tous deux au-dessus de \(f(1)=-2\). Donc \((1,-2)\) est un minimum relatif ✓`],
      S`environ 0 : une tangente horizontale, un minimum relatif en \((1,-2)\)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }], lines: [{ m: 0, b: -2, color: "green", label: "tangente y = −2" }], points: [{ x: 1, y: -2, label: "(1, −2)" }, { x: -1, y: 2, label: "(−1, 2)" }], step: { x: 1, y: 1 } })],
    ["Une sinusoïde", S`Estime le taux de variation instantané de \(y=3\sin x\) en \(x=\tfrac\pi3\).`,
      [S`<b>Fixer le point.</b> \(\frac\pi3\approx1.0472\). Travaille en radians : \(3\sin(1.0472)\approx2.5981\).`,
        S`<b>Quotient.</b> Avec \(h=0.001\) : \(\frac{3\sin(1.0482)-3\sin(1.0472)}{0.001}\approx1.499\).`,
        S`<b>Interpréter.</b> En ce point, la courbe monte d'environ 1.5 unité par radian.`,
        S`<b>Vérification de vraisemblance.</b> Le taux en \(x=0\) est d'environ 3, et au sommet \(x=\frac\pi2\), il est de 0. Une valeur entre les deux est cohérente ✓`],
      S`environ \(1.5\)`,
      plane({ view: { xmin: -0.3, xmax: 3.4, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 3 * Math.sin(x), a: 0, b: Math.PI, color: "blue" }], lines: [{ m: 1.5, b: 3 * Math.sin(Math.PI / 3) - 1.5 * (Math.PI / 3), color: "green" }], points: [{ x: Math.PI / 3, y: 3 * Math.sin(Math.PI / 3), label: "(π/3, 2.60)", color: "amber" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("parabole", S`Estime le taux de variation instantané de \(f(x)=x^2\) en \(x=3\).`, num(6, 0.01),
      "Essaie h = 0.01, puis 0.001.", [S`\(\frac{3.001^2-9}{0.001}=6.001\).`], S`\(6\)`),
    q("vitesse", S`La hauteur d'une balle est \(h(t)=-5t^2+30t\). Estime sa vitesse instantanée en \(t=2\) (m/s).`, num(10, 0.01),
      "Utilise un petit h.", [S`\(\frac{h(2.001)-h(2)}{0.001}\approx9.995\to10\).`], S`\(10\)`),
    q("indicateur de vitesse", "L'indicateur de vitesse d'une voiture affiche…", choice(["le taux de variation instantané de la distance", "la vitesse moyenne du trajet", "la distance totale", "le taux moyen pendant la dernière heure"], 0),
      "En ce moment.", ["Il affiche la vitesse à cet instant."], "le taux instantané"),
    q("sommet", S`Quelle est la pente de la tangente au sommet d'une parabole?`, num(0),
      "La tangente y est horizontale.", [S`Un point tournant a une tangente horizontale.`], S`\(0\)`),
    q("exponentielle", S`Estime le taux de variation instantané de \(y=2^x\) en \(x=1\), au centième près.`, num(1.39, 0.01),
      "h = 0.001.", [S`\(\frac{2^{1.001}-2}{0.001}\approx1.386\).`], S`\(1.39\)`),
  ]),

  ...hard([
    ["Une pente de tangente exacte", S`Montre que le taux de variation moyen de \(f(x)=x^2\) sur \([a,a+h]\) est \(2a+h\). Utilise ce résultat pour trouver l'équation de la tangente en \(x=3\).`,
      [S`\(\frac{(a+h)^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h\).`, S`Quand \(h\to0\), la pente s'approche de \(2a\); en \(a=3\), elle vaut 6.`, S`Par \((3,9)\) : \(y-9=6(x-3)\Rightarrow y=6x-9\).`],
      S`\(y=6x-9\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 20 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 6, b: -9, color: "green", label: "y = 6x − 9" }], points: [{ x: 3, y: 9, label: "(3, 9)" }], step: { x: 1, y: 2 } })],
    ["Taux moyen égal au taux instantané", S`En quel point de \([1,5]\) le taux de variation instantané de \(f(x)=x^2\) est-il égal à son taux de variation moyen sur \([1,5]\)?`,
      [S`Moyen : \(\frac{25-1}{4}=6\).`, S`Le taux instantané en \(x=a\) est \(2a\) (défi 1), donc \(2a=6\Rightarrow a=3\).`],
      S`en \(x=3\) : la tangente y est parallèle à la sécante`],
  ], [
    q("difficile", S`Trouve le taux de variation instantané de \(f(x)=x^3\) en \(x=-1\).`, num(3, 0.01),
      "Utilise un petit intervalle centré.", [S`\(\frac{(-0.999)^3-(-1.001)^3}{0.002}\approx3\).`], S`\(3\)`),
    q("difficile", S`La tangente à \(y=x^2\) en \(x=3\) est \(y=6x+b\). Trouve \(b\).`, num(-9),
      "Elle passe par (3, 9).", [S`\(9=18+b\).`], S`\(-9\)`),
    q("difficile", S`Pour quelle valeur de x la fonction \(f(x)=x^2-4x\) a-t-elle un taux de variation instantané de 2?`, num(3),
      "Le taux en x = a est 2a − 4.", [S`\(2a-4=2\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["En quoi une tangente diffère-t-elle d'une sécante?", "Une sécante relie deux points de la courbe; une tangente la touche en un point et suit la direction de la courbe à cet endroit."],
      ["Pourquoi des intervalles plus petits donnent-ils de meilleures estimations?", "Sur un très petit intervalle, la courbe est presque droite, donc la pente de la sécante est presque la pente au point."],
      ["Pourquoi utiliser une estimation centrée?", "Elle équilibre l'erreur de chaque côté et donne généralement une valeur plus précise pour un même h."],
      ["Quand la vitesse moyenne et la vitesse instantanée sont-elles égales?", "Quand la vitesse est constante (un graphique distance-temps linéaire) — toutes les sécantes et toutes les tangentes ont la même pente."],
      ["Que signifie un taux instantané nul?", "Une tangente horizontale. C'est souvent un maximum ou un minimum relatif, mais y = x³ en 0 montre que ce n'est pas obligatoire."],
    ],
    summary: [
      "Taux instantané = pente de la tangente.",
      "Estimation : (f(a + h) − f(a))/h, avec h → 0.",
      "Estimation centrée : (f(a + h) − f(a − h))/(2h).",
      "Taux 0 : tangente horizontale (souvent un maximum ou un minimum).",
    ],
    next: "La leçon 1.7 révise tout le chapitre.",
  }),
];
