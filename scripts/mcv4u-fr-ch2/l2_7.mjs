// MCV4U-FR 2.7 — Révision du chapitre 2 : règles de la puissance, du produit, de dérivation en chaîne et du quotient,
// vitesse et accélération, problèmes de taux de variation; exemples à plusieurs règles, exercices mixtes, liste de vérification, niveau difficile
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, hard, plane, rat } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.7 Révision du chapitre 2";
export const ID = lessonId(2, 7);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 2 — Les dérivées",
    overview: S`Cette page rassemble le chapitre avant l'évaluation. Les règles du chapitre 2 remplacent les limites de la définition de la dérivée : la règle de la puissance pour les termes simples, les règles du produit et du quotient pour les produits et les quotients, et la règle de dérivation en chaîne pour tout ce qui a un « intérieur ». La partie difficile de la plupart des questions consiste à choisir les règles et à les combiner dans le bon ordre. Chaque exemple ci-dessous utilise au moins deux habiletés; essaie-le avant de lire la solution.`,
    goals: [
      "se rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "choisir la bonne règle (ou combinaison de règles) pour une fonction;",
      "trouver les tangentes et les tangentes horizontales de toute fonction du chapitre;",
      "analyser un mouvement à l'aide de la vitesse et de l'accélération;",
      "interpréter les dérivées comme des taux de variation en contexte.",
    ],
    curriculum: "A2.2–A2.4, A3.1–A3.5 (tout le chapitre)",
    prior: [
      [S`\(\frac{d}{dx}x^{-3}\)?`, S`\(-3x^{-4}\).`],
      [S`\((uv)'\)?`, S`\(u'v+uv'\).`],
      [S`\(\frac{d}{dx}(5x+2)^3\)?`, S`\(15(5x+2)^2\).`],
    ],
    words: [
      ["Règle de la puissance", "\\(\\frac{d}{dx}x^n=nx^{n-1}\\)", "tout n réel"],
      ["Produit / quotient", "\\(u'v+uv'\\) / \\(\\frac{u'v-uv'}{v^2}\\)", ""],
      ["Règle de dérivation en chaîne", "\\(f'(g(x))\\,g'(x)\\)", ""],
      ["Vitesse / accélération", "\\(v=s'\\), \\(a=v'=s''\\)", ""],
    ],
  }),

  section("📌 Le chapitre en une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["2.1 Polynômes", "règles de la puissance, de la constante, de la somme", "x⁶ − 4x → 6x⁵ − 4", "réécris les racines sous forme de puissances"],
    ["2.2 Règle du produit", "(uv)′ = u′v + uv′", "x(x + 4) → 2x + 4", "(uv)′ ≠ u′v′"],
    ["2.3 Mouvement", "v = s′, a = s″", "s = t² → a = 2", "accélère : v et a de même signe"],
    ["2.4 Règle de dérivation en chaîne", "dérivée extérieure évaluée à l'intérieur × dérivée intérieure", "(x² + 4)³ → 6x(x² + 4)²", "n'oublie pas la dérivée intérieure"],
    ["2.5 Règle du quotient", "(u′v − uv′)/v²", "1/(x + 4) → −1/(x + 4)²", "l'ordre au numérateur"],
    ["2.6 Taux", "f′ = taux avec unités", "C′(x) = coût marginal", "taux ≠ total"],
  ])),

  section("📌 Choisir la règle", S`
  ${table(["Forme de la fonction", "Règle"], [
    ["somme de puissances de x", "règle de la puissance terme par terme"],
    ["un facteur fois un autre", "règle du produit"],
    ["une expression élevée à une puissance, la racine d'une expression", "règle de dérivation en chaîne"],
    ["une expression divisée par une autre", "règle du quotient (ou réécrire sous forme de produit)"],
    ["une constante sur une seule puissance de x", "réécrire : \\(\\frac{3}{x^2}=3x^{-2}\\)"],
  ])}
  ${keyIdea(S`Regarde la <em>dernière</em> opération que tu ferais pour évaluer la fonction : si c'est une multiplication, commence par la règle du produit; une division, par la règle du quotient; une parenthèse élevée à une puissance, par la règle de dérivation en chaîne. Applique ensuite les autres règles à l'intérieur.`)}`),

  section("📌 Explore", S`<p>Utilise l'explorateur de la règle de dérivation en chaîne pour vérifier les dérivées de fonctions composées ci-dessous : choisis la fonction intérieure, règle la puissance et compare la pente avec ta réponse.</p>`),

  widget("chainRuleLab", { init: { inner: "cub", n: 2, x: 1 } }),

  examples([
    ["Produit et chaîne", S`Dérive \(y=x^3\sqrt{2x+1}\) et écris la réponse sous la forme d'une seule fraction.`,
      [S`\(y'=3x^2(2x+1)^{1/2}+x^3\cdot\tfrac12(2x+1)^{-1/2}\cdot2\).`, S`Dénominateur commun \(\sqrt{2x+1}\) : \(\dfrac{3x^2(2x+1)+x^3}{\sqrt{2x+1}}\).`],
      S`\(y'=\dfrac{x^2(7x+3)}{\sqrt{2x+1}}\)`],
    ["Quotient et chaîne", S`Trouve les tangentes horizontales de \(y=\dfrac{(x+1)^2}{x-2}\).`,
      [S`\(y'=\dfrac{2(x+1)(x-2)-(x+1)^2}{(x-2)^2}=\dfrac{(x+1)(x-5)}{(x-2)^2}\).`, S`Nulle en \(x=-1\) et en \(x=5\); \(y(-1)=0\), \(y(5)=12\).`],
      S`\((-1,0)\) et \((5,12)\)`,
      plane({ view: { xmin: -4, xmax: 9, ymin: -12, ymax: 28 }, curves: rat((x) => (x + 1) ** 2 / (x - 2), [2], { xmin: -4, xmax: 9 }), vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "red" }, { x: 5, y: 12, label: "(5, 12)", color: "red" }], step: { x: 1, y: 4 } })],
    ["Mouvement", S`Une particule se déplace selon \(s(t)=2t^3-9t^2+12t\) m. Quand est-elle au repos, et quelle est son accélération au premier de ces moments?`,
      [S`\(v=6t^2-18t+12=6(t-1)(t-2)\) : au repos à \(t=1\) s et à \(t=2\) s.`, S`\(a=12t-18\Rightarrow a(1)=-6\).`],
      S`au repos à 1 s et à 2 s; \(a(1)=-6\) m/s²`,
      plane({ view: { xmin: 0, xmax: 3, ymin: -8, ymax: 14 }, curves: [{ f: (t) => 2 * t ** 3 - 9 * t * t + 12 * t, color: "violet" }, { f: (t) => 6 * t * t - 18 * t + 12, color: "blue" }, { f: (t) => 12 * t - 18, color: "amber" }], points: [{ x: 1, y: 0, label: "v = 0", color: "red" }, { x: 2, y: 0, label: "v = 0", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Coût marginal", S`\(C(x)=0.001x^3-0.3x^2+40x+1000\) dollars. Trouve \(C'(100)\) et le niveau de production où le coût marginal est le plus bas.`,
      [S`\(C'(x)=0.003x^2-0.6x+40\Rightarrow C'(100)=30-60+40=10\).`, S`\(C'\) est une parabole; son sommet est en \(x=\tfrac{0.6}{0.006}=100\).`],
      S`\(C'(100)=10\) dollars par article, le coût marginal le plus bas, à 100 articles`,
      plane({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 0.003 * x * x - 0.6 * x + 40, color: "blue" }], points: [{ x: 100, y: 10, label: "(100, 10)", color: "red" }], step: { x: 25, y: 10 } })],
    ["Tangente à un quotient", S`Trouve la tangente à \(y=\dfrac{3x}{x+2}\) en \(x=1\).`,
      [S`\(y(1)=1\).`, S`\(y'=\dfrac{3(x+2)-3x}{(x+2)^2}=\dfrac6{(x+2)^2}\Rightarrow y'(1)=\tfrac23\).`, S`\(y-1=\tfrac23(x-1)\).`],
      S`\(y=\tfrac23x+\tfrac13\)`,
      plane({ view: { xmin: -1.5, xmax: 5, ymin: -2, ymax: 4 }, curves: [{ f: (x) => (3 * x) / (x + 2), color: "violet", a: -1.5, b: 5 }, { f: (x) => (2 * x + 1) / 3, color: "green" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "red" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("règle de la puissance", S`Trouve \(\dfrac{d}{dx}(4x^3-x+6)\).`, expr("12*x^2-1"),
      "Terme par terme.", [S`\(12x^2-1+0\).`], S`\(12x^2-1\)`),
    q("chaîne", S`Pour \(y=(x^2+2)^3\), trouve \(y'(1)\).`, num(54),
      "3(x² + 2)² · 2x.", [S`\(3(9)(2)\).`], S`\(54\)`),
    q("quotient", S`Pour \(f(x)=\dfrac{x}{x-1}\), trouve \(f'(3)\).`, num(-0.25, 0.0001),
      "f′ = −1/(x − 1)².", [S`\(-\frac14\).`], S`\(-0.25\)`),
    q("mouvement", S`Pour \(s(t)=t^3-6t\) m, trouve l'accélération à \(t=2\) s.`, num(12),
      "a = 6t.", [S`\(6(2)\).`], S`\(12\)`),
    q("choisir", S`Quelle règle faut-il appliquer en premier pour \(y=(2x+3)^7\)?`, choice(["la règle de dérivation en chaîne", "la règle du produit", "la règle du quotient", "seulement la règle de la puissance"], 0),
      "Une parenthèse élevée à une puissance.", ["Extérieure u⁷, intérieure 2x + 3."], "la règle de dérivation en chaîne"),
  ]),

  section("📌 Suis-je prêt pour l'évaluation?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "Je peux dériver des polynômes, des racines et des inverses avec la règle de la puissance."],
      ["2.2", "Je peux utiliser la règle du produit et trouver les tangentes horizontales de produits."],
      ["2.3", "Je peux trouver la vitesse et l'accélération et déterminer quand un objet accélère."],
      ["2.4", "Je peux utiliser la règle de dérivation en chaîne, seule et avec la règle du produit."],
      ["2.5", "Je peux utiliser la règle du quotient et trouver les tangentes de fonctions rationnelles."],
      ["2.6", "Je peux résoudre des problèmes de taux de variation et expliquer la réponse avec ses unités."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Une racine dans un produit", S`Trouve les points où \(y=x\sqrt{9-x^2}\) a une tangente horizontale.`,
      [S`\(y'=\sqrt{9-x^2}+x\cdot\dfrac{-2x}{2\sqrt{9-x^2}}=\dfrac{(9-x^2)-x^2}{\sqrt{9-x^2}}=\dfrac{9-2x^2}{\sqrt{9-x^2}}\).`, S`\(9-2x^2=0\Rightarrow x=\pm\dfrac3{\sqrt2}\approx\pm2.12\).`, S`\(y=\pm\dfrac3{\sqrt2}\cdot\dfrac3{\sqrt2}=\pm4.5\).`],
      S`\(\left(\tfrac3{\sqrt2},4.5\right)\) et \(\left(-\tfrac3{\sqrt2},-4.5\right)\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -5.5, ymax: 5.5 }, curves: [{ f: (x) => x * Math.sqrt(9 - x * x), color: "violet", a: -3, b: 3 }], points: [{ x: 3 / Math.SQRT2, y: 4.5, label: "(2.12, 4.5)", color: "red" }, { x: -3 / Math.SQRT2, y: -4.5, label: "(−2.12, −4.5)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Une population qui atteint un sommet", S`Une population de poissons est modélisée par \(P(t)=500+\dfrac{2000t}{t^2+16}\), \(t\) en années. (a) Trouve le taux de croissance à \(t=2\). (b) Quand la population est-elle la plus grande, et quelle est-elle?`,
      [S`\(P'(t)=\dfrac{2000(t^2+16)-2000t(2t)}{(t^2+16)^2}=\dfrac{2000(16-t^2)}{(t^2+16)^2}\).`, S`(a) \(P'(2)=\dfrac{2000(12)}{400}=60\) poissons par année.`, S`(b) \(P'=0\Rightarrow t=4\); \(P(4)=500+\dfrac{8000}{32}=750\).`],
      S`(a) 60 poissons par année; (b) 750 poissons à \(t=4\) ans`,
      plane({ view: { xmin: 0, xmax: 20, ymin: 400, ymax: 800 }, curves: [{ f: (t) => 500 + (2000 * t) / (t * t + 16), color: "violet" }], points: [{ x: 4, y: 750, label: "(4, 750)", color: "red" }], step: { x: 2, y: 50 } })],
  ], [
    q("difficile", S`Trouve \(\dfrac{d}{dx}\left[(2x-1)^3(x+2)\right]\) en \(x=1\).`, num(19),
      "Produit + chaîne : 6(2x − 1)²(x + 2) + (2x − 1)³.", [S`\(6(1)(3)+1\).`], S`\(19\)`),
    q("difficile", S`Pour \(f(x)=\dfrac{\sqrt x}{x+1}\), trouve \(f'(1)\).`, num(0),
      "Numérateur : (x + 1)/(2√x) − √x.", [S`\(\frac{2/2-1}{4}=0\).`], S`\(0\)`),
    q("difficile", S`\(h(x)=\left(x^3-x\right)^2\). Trouve \(h'(2)\).`, num(132),
      "2(x³ − x)(3x² − 1).", [S`\(2(6)(11)\).`], S`\(132\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour cette évaluation?", "Fais les exercices mixtes et le niveau difficile sans notes, puis, pour chaque erreur, retourne à l'explorateur et à la liste « Attention » de la leçon correspondante."],
      ["Quelles sont les erreurs les plus fréquentes?", "Écrire (uv)′ comme u′v′, oublier la dérivée intérieure, inverser l'ordre dans la règle du quotient et donner un taux sans unités."],
      ["Dois-je simplifier chaque réponse?", "Simplifie quand tu dois résoudre f′(x) = 0 ou évaluer; la forme factorisée est habituellement la plus utile."],
      ["Règle du produit ou règle du quotient pour u/v?", "Les deux fonctionnent (écris u·v⁻¹ et utilise produit + chaîne); la règle du quotient est habituellement plus courte pour les fonctions rationnelles."],
      ["Comment cela mène-t-il au chapitre 3?", "Le chapitre 3 utilise f′ et f″ pour trouver où une fonction est croissante, où elle a des maximums et des minimums, et comment elle s'incurve : l'esquisse de courbes."],
    ],
    summary: [
      "Choisis la règle d'après la dernière opération.",
      "Produit, quotient et chaîne se combinent librement.",
      "v = s′, a = s″.",
      "Toute dérivée est un taux avec des unités.",
    ],
    next: "Fais l'évaluation du chapitre 2. Le chapitre 3 utilise les dérivées pour esquisser des courbes.",
  }),
];
