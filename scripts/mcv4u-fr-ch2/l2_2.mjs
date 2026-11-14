// MCV4U-FR 2.2 — La règle du produit : (uv)′ = u′v + uv′, pourquoi elle est vraie (modèle d'aire), produits de deux et
// trois facteurs, tangentes, tangentes horizontales et taux de variation d'un produit (revenu = prix × quantité)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.2 La règle du produit";
export const ID = lessonId(2, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "La règle du produit",
    overview: S`La dérivée d'un produit n'est <em>pas</em> le produit des dérivées : \(\frac{d}{dx}(x\cdot x)=2x\), mais \(1\cdot1=1\). La bonne règle vient du fait qu'on peut voir \(u\cdot v\) comme l'aire d'un rectangle de côtés \(u\) et \(v\) : quand les deux côtés augmentent, l'aire gagne une bande \(u\,\Delta v\), une bande \(v\,\Delta u\) et un petit coin qui disparaît à la limite. Donc \((uv)'=u'v+uv'\). La règle évite de développer de longs produits et devient essentielle quand les facteurs sont des racines ou des puissances.`,
    goals: [
      "expliquer la règle du produit à l'aide d'un modèle d'aire;",
      "dériver des produits de deux (et de trois) fonctions;",
      "trouver les tangentes et les tangentes horizontales de produits;",
      "utiliser la règle du produit pour les taux de variation de produits en contexte;",
      "vérifier les réponses en développant.",
    ],
    curriculum: "A3.3 (vérifier la règle du produit pour les fonctions polynomiales en la comparant au développement, et l'appliquer)",
    prior: [
      [S`Développe \((x^2+1)(3x-2)\).`, S`\(3x^3-2x^2+3x-2\).`],
      [S`Dérivée de \(x^5\)?`, S`\(5x^4\).`],
      [S`Est-ce que \(\frac{d}{dx}(x^2\cdot x^3)=2x\cdot3x^2\)?`, S`Non : \(x^5\to5x^4\), et non \(6x^3\).`],
    ],
    words: [
      ["Règle du produit", "\\((uv)'=u'v+uv'\\)", ""],
      ["Facteur", "chaque fonction qui est multipliée", "u et v"],
      ["Trois facteurs", "\\((uvw)'=u'vw+uv'w+uvw'\\)", ""],
      ["Revenu", "prix × quantité vendue", "R = pq"],
    ],
  }),

  section("📌 Pourquoi u′v + uv′?", S`
  ${table(["Partie de la nouvelle aire", "Taille", "Après ÷ Δx, quand Δx → 0"], [
    ["bande de droite", "v · Δu", "v · u′"],
    ["bande du haut", "u · Δv", "u · v′"],
    ["coin", "Δu · Δv", "0 (Δu·Δv/Δx → 0)"],
  ])}
  ${plane({ view: { xmin: -2, xmax: 2.5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (x * x + 1) * (3 * x - 2), color: "violet" }, { f: (x) => 9 * x * x - 4 * x + 3, color: "blue" }], step: { x: 0.5, y: 2 } }, "y = (x² + 1)(3x − 2) (violet) et y′ = 9x² − 4x + 3 (bleu) : y′ > 0 partout, donc y est toujours croissante.")}
  ${keyIdea(S`\((uv)'=u'v+uv'\) : « la dérivée du premier fois le second, plus le premier fois la dérivée du second ». La règle s'étend à trois facteurs : \((uvw)'=u'vw+uv'w+uvw'\).`)}`),

  section("📌 Explore", S`<p>Agrandis de \(\Delta x\) le rectangle de côtés \(u=x+1\) et \(v=x^2\). Les deux bandes sont \(v\,\Delta u\) et \(u\,\Delta v\); diminue \(\Delta x\) et observe le coin devenir négligeable.</p>`),

  widget("productRuleLab", { init: { x: 1.5, dx: 0.8 } }),

  section("📌 Utiliser la règle", S`
  <p>Écris \(u\), \(v\), \(u'\), \(v'\) avant de combiner. Simplifie en mettant les facteurs communs en évidence quand le résultat sera égalé à zéro.</p>
  ${watchOut([
    "(uv)′ ≠ u′v′ : c'est l'erreur la plus fréquente.",
    "Garde les parenthèses : 2x(3x − 2) + 3(x² + 1), puis développe.",
    "Factorise la réponse avant de résoudre y′ = 0.",
    "Un facteur constant ne demande pas la règle du produit : (5f)′ = 5f′.",
    "Vérifie une réponse obtenue avec la règle du produit en développant d'abord, quand le produit est un polynôme.",
  ])}`),

  examples([
    ["Deux facteurs polynomiaux", S`Dérive \(y=(x^2+1)(3x-2)\).`,
      [S`\(u=x^2+1\), \(u'=2x\); \(v=3x-2\), \(v'=3\).`, S`\(y'=2x(3x-2)+3(x^2+1)=9x^2-4x+3\).`],
      S`\(y'=9x^2-4x+3\)`],
    ["Une puissance fois un binôme", S`Dérive \(y=x^3(2x+5)\).`,
      [S`\(3x^2(2x+5)+x^3(2)=6x^3+15x^2+2x^3\).`],
      S`\(y'=8x^3+15x^2\)`],
    ["Vérifier en développant", S`Dérive \(f(x)=(x-1)(x^2+x+1)\) avec la règle du produit, puis vérifie.`,
      [S`\(f'=(1)(x^2+x+1)+(x-1)(2x+1)=x^2+x+1+2x^2-x-1=3x^2\).`, S`Vérification : \(f(x)=x^3-1\Rightarrow f'=3x^2\) ✓.`],
      S`\(f'(x)=3x^2\)`],
    ["Une tangente", S`Trouve la tangente à \(y=(x+2)(x^2-3)\) en \(x=1\).`,
      [S`\(y(1)=3(-2)=-6\).`, S`\(y'=(1)(x^2-3)+(x+2)(2x)\); \(y'(1)=-2+6=4\).`, S`\(y+6=4(x-1)\).`],
      S`\(y=4x-10\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -12, ymax: 6 }, curves: [{ f: (x) => (x + 2) * (x * x - 3), color: "violet" }, { f: (x) => 4 * x - 10, color: "green" }], points: [{ x: 1, y: -6, label: "(1, −6)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Trois facteurs", S`Dérive \(y=x(x+1)(x-2)\).`,
      [S`\((1)(x+1)(x-2)+x(1)(x-2)+x(x+1)(1)\).`, S`\(=(x^2-x-2)+(x^2-2x)+(x^2+x)=3x^2-2x-2\).`],
      S`\(y'=3x^2-2x-2\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * (x + 1) * (x - 2), color: "violet" }, { f: (x) => 3 * x * x - 2 * x - 2, color: "blue" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("évaluer", S`Pour \(f(x)=x^2(x+3)\), trouve \(f'(1)\).`, num(9),
      "u′v + uv′.", [S`\(2x(x+3)+x^2\) en 1 : \(8+1\).`], S`\(9\)`),
    q("évaluer", S`Pour \(y=(2x+1)(x-4)\), trouve \(y'(2)\).`, num(1),
      "2(x − 4) + (2x + 1).", [S`\(-4+5\).`], S`\(1\)`),
    q("dériver", S`Trouve \(\dfrac{d}{dx}\left[x^2(x^3-1)\right]\).`, expr("5*x^4-2*x"),
      "Règle du produit, ou développe.", [S`\(2x(x^3-1)+3x^4\).`], S`\(5x^4-2x\)`),
    q("pente", S`Trouve la pente de \(y=(x+1)(x-1)\) en \(x=3\).`, num(6),
      "La règle du produit donne 2x.", [S`\((x-1)+(x+1)=2x\).`], S`\(6\)`),
    q("règle", S`Laquelle est la règle du produit?`, choice([S`\((uv)'=u'v+uv'\)`, S`\((uv)'=u'v'\)`, S`\((uv)'=u'v-uv'\)`, S`\((uv)'=\frac{u'}{v'}\)`], 0),
      "Modèle d'aire.", ["Deux bandes."], S`\(u'v+uv'\)`),
  ]),

  ...hard([
    ["Un revenu qui varie dans le temps", S`Un produit se vend 8 $, et son prix augmente de 0.50 $ par mois, tandis que les ventes mensuelles sont de 1200 unités et diminuent de 40 unités par mois. À quel rythme le revenu varie-t-il?`,
      [S`\(R=pq\Rightarrow R'=p'q+pq'\).`, S`\(R'=(0.5)(1200)+(8)(-40)=600-320\).`],
      S`le revenu augmente de 280 $ par mois`],
    ["Tangentes horizontales", S`Trouve les valeurs de x où \(f(x)=(x^2-4)(x+1)\) a des tangentes horizontales.`,
      [S`\(f'=2x(x+1)+(x^2-4)=3x^2+2x-4\).`, S`\(x=\dfrac{-2\pm\sqrt{4+48}}{6}=\dfrac{-1\pm\sqrt{13}}{3}\).`],
      S`\(x\approx0.87\) et \(x\approx-1.54\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -6, ymax: 4 }, curves: [{ f: (x) => (x * x - 4) * (x + 1), color: "violet" }], points: [{ x: (-1 + Math.sqrt(13)) / 3, y: ((((-1 + Math.sqrt(13)) / 3) ** 2) - 4) * ((-1 + Math.sqrt(13)) / 3 + 1), label: "x ≈ 0.87", color: "red" }, { x: (-1 - Math.sqrt(13)) / 3, y: ((((-1 - Math.sqrt(13)) / 3) ** 2) - 4) * ((-1 - Math.sqrt(13)) / 3 + 1), label: "x ≈ −1.54", color: "red" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("difficile", S`\(f(2)=3\), \(f'(2)=-1\), \(g(2)=4\), \(g'(2)=5\). Trouve \((fg)'(2)\).`, num(11),
      "f′g + fg′.", [S`\((-1)(4)+(3)(5)\).`], S`\(11\)`),
    q("difficile", S`Trouve \(\dfrac{d}{dx}\left[x^2\sqrt x\right]\) en \(x=4\).`, num(20),
      "x^(5/2).", [S`\(\frac52x^{3/2}=\frac52\cdot8\).`], S`\(20\)`),
    q("difficile", S`Où la tangente à \(y=(3x-1)(2x+5)\) est-elle horizontale? (4 décimales)`, num(-1.0833, 0.0005),
      "y′ = 12x + 13.", [S`\(x=-\frac{13}{12}\).`], S`\(-1.0833\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi (uv)′ n'est-il pas égal à u′v′?", "Essaie u = v = x : (x²)′ = 2x, mais u′v′ = 1. Le modèle d'aire montre la vraie variation : deux bandes, u′v et uv′."],
      ["Quand vaut-il mieux développer?", "Pour de courts produits de polynômes, les deux méthodes fonctionnent; pour des racines, des puissances élevées ou plusieurs facteurs, la règle du produit est plus rapide."],
      ["L'ordre a-t-il de l'importance?", "Non : u′v + uv′ = v′u + vu′. Choisis la façon de nommer les facteurs la plus claire."],
      ["Comment traiter trois facteurs?", "Dérive un facteur à la fois en gardant les deux autres : u′vw + uv′w + uvw′."],
      ["Où la rencontre-t-on dans les applications?", "Dans toute quantité qui est le produit de deux quantités variables : revenu = prix × quantité, aire = longueur × largeur, masse = masse volumique × volume."],
    ],
    summary: [
      "(uv)′ = u′v + uv′.",
      "(uvw)′ = u′vw + uv′w + uvw′.",
      "Factorise avant de résoudre y′ = 0.",
      "Un produit de quantités variables change sous l'effet des deux variations.",
    ],
    next: "La leçon 2.3 utilise les dérivées pour la vitesse et l'accélération.",
  }),
];
