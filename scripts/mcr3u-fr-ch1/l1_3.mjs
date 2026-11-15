// MCR3U-FR 1.3 — Fonctions de base : f(x) = x, x², √x, 1/x, |x| — formes, points clés, domaine, image, asymptotes.
// Miroir de ../mcr3u-ch1/l1_3.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.3 Fonctions de base";
export const ID = lessonId(1, 3);

const P = {
  x: { f: (x) => x, color: "gray" },
  x2: { f: (x) => x * x, color: "blue" },
  sqrt: { f: (x) => Math.sqrt(x), a: 0, color: "green" },
  recip: { f: (x) => 1 / x, color: "red" },
  abs: { f: (x) => Math.abs(x), color: "amber" },
};

export const blocks = () => [
  intro({
    icon: "🌳",
    title: "Fonctions de base",
    overview: String.raw`Cinq fonctions simples — \(f(x)=x\), \(x^2\), \(\sqrt{x}\), \(\frac1x\) et \(|x|\) — sont les « parents » de la plupart des graphiques de ce cours. Connaître leurs formes, quelques points clés, ainsi que leur domaine et leur image permet d'esquisser rapidement des centaines de graphiques apparentés. Dans cette leçon, tu vas apprendre la forme et les propriétés de chaque fonction de base, les reconnaître à partir de tables et de graphiques, et les comparer.`,
    goals: [
      "esquisser les cinq fonctions de base à partir de points clés;",
      "donner le domaine et l'image de chaque fonction de base;",
      "décrire les intersections avec les axes, la symétrie, les asymptotes et les intervalles où chacune croît ou décroît;",
      "reconnaître une fonction de base à partir d'une table ou d'un graphique;",
      "comparer des fonctions de base et résoudre des équations simples qui les relient.",
    ],
    curriculum: "A1.3 (expliquer le sens des termes domaine et image en explorant f(x) = x, f(x) = x², f(x) = √x et f(x) = 1/x), A1.8 (les fonctions de base utilisées pour les transformations, y compris f(x) = |x|)",
    prior: [
      [String.raw`Que vaut \(\sqrt{9}\)? \(\sqrt{-9}\) est-il un nombre réel?`, String.raw`\(3\); non — aucun nombre réel élevé au carré ne donne \(-9\).`],
      [String.raw`Que vaut \(|{-5}|\)?`, String.raw`\(5\) : la valeur absolue est la distance à 0.`],
      [String.raw`Que vaut \(1\div0.01\)?`, String.raw`\(100\).`],
    ],
    words: [
      ["Fonction de base (fonction parent)", "la fonction la plus simple d'une famille", "\\(f(x)=x^2\\)"],
      ["Asymptote", "une droite dont le graphique s'approche sans jamais l'atteindre", "\\(y=0\\) pour \\(\\frac1x\\)"],
      ["Croissante", "y augmente quand x se déplace vers la droite", "\\(\\sqrt x\\) pour \\(x>0\\)"],
      ["Symétrie paire / impaire", "miroir par rapport à l'axe des y / demi-tour autour de l'origine", "\\(x^2\\) / \\(\\frac1x\\)"],
    ],
  }),

  section("📌 Les fonctions de base", String.raw`
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: Object.values(P), step: { x: 1, y: 1 } }, "gris x · bleu x² · vert √x · rouge 1/x · ambre |x|")}
  ${table(["Fonction de base", "Points clés", "Domaine", "Image", "Caractéristique"], [
    ["\\(f(x)=x\\)", "\\((-1,-1),(0,0),(1,1)\\)", "\\(\\mathbb R\\)", "\\(\\mathbb R\\)", "droite, pente 1"],
    ["\\(f(x)=x^2\\)", "\\((\\pm1,1),(\\pm2,4),(0,0)\\)", "\\(\\mathbb R\\)", "\\(y\\ge0\\)", "sommet \\((0,0)\\)"],
    ["\\(f(x)=\\sqrt x\\)", "\\((0,0),(1,1),(4,2),(9,3)\\)", "\\(x\\ge0\\)", "\\(y\\ge0\\)", "commence à l'origine"],
    ["\\(f(x)=\\frac1x\\)", "\\((\\pm1,\\pm1),(2,\\tfrac12),(\\tfrac12,2)\\)", "\\(x\\ne0\\)", "\\(y\\ne0\\)", "asymptotes \\(x=0,\\ y=0\\)"],
    ["\\(f(x)=|x|\\)", "\\((\\pm1,1),(\\pm2,2),(0,0)\\)", "\\(\\mathbb R\\)", "\\(y\\ge0\\)", "en V, sommet \\((0,0)\\)"],
  ])}
  ${keyIdea(String.raw`Apprends chaque fonction de base par ses <strong>points clés</strong>. Dans les prochaines leçons, chaque transformation se fait en déplaçant ces points.`)}`),

  section("📌 Explore", String.raw`<p>Choisis chaque fonction de base. La table montre ses points clés; l'affichage donne le domaine, l'image et les caractéristiques à retenir.</p>`),

  widget("parentGallery", { start: "recip" }),

  section("📌 Pourquoi ces restrictions?", String.raw`
  <p>\(\sqrt x\) n'est pas un nombre réel lorsque \(x<0\), donc son domaine s'arrête à 0. \(\frac1x\) n'est pas défini en \(x=0\) (on ne peut pas diviser par 0); lorsque \(x\) s'approche de 0, la sortie devient énorme, donc le graphique longe la droite \(x=0\). Lorsque \(x\) devient très grand, \(\frac1x\) s'approche de 0, donc le graphique longe \(y=0\).</p>
  ${table(["x", "0.1", "0.01", "0.001", "10", "100", "1000"], [["\\(\\frac1x\\)", "10", "100", "1000", "0.1", "0.01", "0.001"]])}
  ${watchOut([
    "√x désigne seulement la racine positive, donc l'image de √x est y ≥ 0.",
    "1/x n'est jamais égal à 0, donc 0 n'appartient pas à son image.",
    "x² et |x| ont le même domaine et la même image, mais des formes différentes (courbe ou V).",
    "Entre 0 et 1, x² est plus petit que x; au-delà de 1, il est plus grand.",
  ])}`),

  examples([
    ["Reconnaître à partir d'une table", S`Quelle fonction de base correspond à \(x:-2,-1,0,1,2\) et \(y:2,1,0,1,2\)?`,
      [S`<b>Cherche des caractéristiques.</b> Les sorties ne sont jamais négatives, et des valeurs égales apparaissent de chaque côté de \(x=0\). Cette symétrie convient à \(y=x^2\) ou à \(y=|x|\).`,
        S`<b>Compare les candidates.</b> ${tv(["\\(x\\)", "\\(-2\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"], ["\\(y\\) donné", "2", "1", "0", "1", "2"], ["\\(x^2\\)", "4", "1", "0", "1", "4"], ["\\(|x|\\)", "2", "1", "0", "1", "2"])}`,
        S`<b>Trouve la valeur décisive.</b> Les candidates concordent en \(x=-1,0,1\), donc ces colonnes ne permettent pas de trancher. En \(x=2\), \(x^2=4\), mais la table indique 2. Donc \(x^2\) est éliminée.`,
        S`<b>Confirme.</b> Chaque valeur de la ligne donnée correspond à \(|x|\) ✓. Les différences premières pour \(x\ge0\) valent toutes 1, ce qui montre les branches droites d'un V.`],
      S`\(f(x)=|x|\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x), color: "violet" }, { f: (x) => x * x, color: "gray" }], points: [{ x: -2, y: 2, label: "(−2, 2)", color: "amber" }, { x: -1, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2, label: "(2, 2)", color: "amber" }], step: { x: 1, y: 1 } }, "en violet y = |x|, en gris y = x²")],
    ["Une restriction du domaine", S`Explique pourquoi \(f(x)=\sqrt x\) a pour domaine \(x\ge0\), et trouve \(f(6.25)\).`,
      [S`<b>Sens d'une racine.</b> \(\sqrt x\) est le nombre non négatif dont le carré est \(x\).`,
        S`<b>Pourquoi les nombres négatifs ne conviennent pas.</b> Tout nombre réel élevé au carré donne 0 ou un nombre positif, donc aucun nombre réel n'a un carré négatif. Par exemple, \(\sqrt{-4}\) n'est pas réel.`,
        S`<b>Pourquoi 0 et les nombres positifs conviennent.</b> \(\sqrt0=0\), et tout nombre positif a une racine positive. Le domaine est donc exactement \(x\ge0\).`,
        S`<b>Évalue.</b> \(\sqrt{6.25}=2.5\), car \(2.5\times2.5=6.25\).`,
        S`<b>Vérifie sur le graphique.</b> La courbe commence en \((0,0)\), n'a rien à gauche de l'axe des y et passe par \((6.25,2.5)\) ✓`],
      S`domaine \(\{x\in\mathbb R\mid x\ge0\}\); \(f(6.25)=2.5\)`,
      plane({ view: { xmin: -2, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 4, y: 2, label: "(4, 2)" }, { x: 6.25, y: 2.5, label: "(6.25, 2.5)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Asymptotes", S`Décris \(f(x)=\frac1x\) près de \(x=0\) et pour de grandes valeurs de \(x\).`,
      [S`<b>En zéro.</b> \(\frac10\) n'a pas de valeur, donc \(x=0\) n'appartient pas au domaine. On étudie ce qui se passe tout près.`,
        S`<b>Près de zéro.</b> ${tv(["\\(x\\)", "\\(-0.05\\)", "\\(-0.5\\)", "\\(0.5\\)", "\\(0.05\\)"], ["\\(\\frac1x\\)", "\\(-20\\)", "\\(-2\\)", "\\(2\\)", "\\(20\\)"])} Diviser 1 par un tout petit nombre donne un résultat énorme. La courbe monte en flèche à droite de 0 et descend à gauche. C'est pourquoi \(x=0\) est une asymptote verticale.`,
        S`<b>Loin de zéro.</b> \(f(500)=0.002\) et \(f(-500)=-0.002\). Diviser 1 par un nombre énorme donne presque 0, mais jamais exactement 0. Donc \(y=0\) est une asymptote horizontale.`,
        S`<b>Vérifie sur le graphique.</b> Les deux branches longent les axes sans les toucher, et chaque point comme \((2,0.5)\) a un partenaire \((0.5,2)\) ✓`],
      S`asymptote verticale \(x=0\), asymptote horizontale \(y=0\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [P.recip], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: -1, label: "(−1, −1)" }, { x: 0.5, y: 2 }, { x: 2, y: 0.5 }], step: { x: 1, y: 1 } })],
    ["Comparer des fonctions de base", S`Compare \(x\), \(x^2\) et \(\sqrt x\) en \(x=0.25\) et en \(x=4\).`,
      [S`<b>Évalue chacune.</b> ${tv(["\\(x\\)", "\\(x^2\\)", "\\(x\\) lui-même", "\\(\\sqrt x\\)"], ["\\(0.25\\)", "\\(0.0625\\)", "\\(0.25\\)", "\\(0.5\\)"], ["\\(4\\)", "\\(16\\)", "\\(4\\)", "\\(2\\)"])}`,
        S`<b>Entre 0 et 1.</b> Multiplier une fraction par elle-même la rend plus petite, donc \(x^2<x\). La racine va dans l'autre sens, car \(0.5\times0.5=0.25\) montre que la racine doit être plus grande. Donc \(x^2<x<\sqrt x\).`,
        S`<b>Au-dessus de 1.</b> Multiplier par un nombre supérieur à 1 agrandit, donc \(x^2>x\), et la racine est plus petite. Donc \(\sqrt x<x<x^2\).`,
        S`<b>Où l'ordre change.</b> Les trois valent 1 en \(x=1\), puisque \(1^2=1=\sqrt1\). Le graphique montre qu'elles se croisent en \((1,1)\) ✓`],
      S`pour \(0<x<1\) : \(x^2<x<\sqrt x\); pour \(x>1\), l'ordre s'inverse`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 4 }, curves: [P.x, P.x2, P.sqrt], points: [{ x: 1, y: 1, label: "(1, 1)" }], step: { x: 0.5, y: 0.5 } })],
    ["Choisir un modèle", S`Un trajet de 120 km prend \(t\) heures à la vitesse \(v\) km/h. Quelle fonction de base décrit \(t\) en fonction de \(v\)? Trouve \(t\) lorsque \(v=80\).`,
      [S`<b>Construis la règle.</b> Distance = vitesse × temps, donc \(120=vt\). Isole la sortie : \(t=\dfrac{120}v\).`,
        S`<b>Reconnais la fonction de base.</b> La variable est au dénominateur, donc c'est \(y=\frac1x\) étirée verticalement par un facteur 120.`,
        S`<b>Teste avec une table.</b> Doubler la vitesse devrait diviser le temps par deux. ${tv(["\\(v\\) (km/h)", "30", "60", "120"], ["\\(t\\) (h)", "4", "2", "1"])}`,
        S`<b>Évalue.</b> \(t=\dfrac{120}{80}=1.5\) h.`,
        S`<b>Vérifie.</b> \(80\times1.5=120\) km ✓. Dans ce contexte, seul \(v>0\) a du sens, donc le graphique ne montre que la branche de droite.`],
      S`une fonction \(y=\frac1x\) étirée; \(1.5\) h`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 6 }, curves: [{ f: (v) => 120 / v, a: 20, color: "violet" }], points: [{ x: 30, y: 4, label: "(30, 4)" }, { x: 60, y: 2, label: "(60, 2)" }, { x: 80, y: 1.5, label: "(80, 1.5)", color: "amber" }], step: { x: 10, y: 1 }, xlabel: "v (km/h)", ylabel: "t (h)" })],
  ]),

  practice([
    q("domaine", String.raw`Quelle fonction de base a pour domaine \(\{x\in\mathbb R\mid x\ne0\}\)?`, choice([String.raw`\(\frac1x\)`, String.raw`\(\sqrt x\)`, String.raw`\(|x|\)`, String.raw`\(x^2\)`], 0),
      "Laquelle divise par x?", [String.raw`\(\frac10\) n'est pas défini.`], String.raw`\(\frac1x\)`),
    q("évaluer", String.raw`Pour \(f(x)=\sqrt x\), trouve \(f(2.25)\).`, num(1.5),
      "Quel nombre au carré donne 2.25?", [String.raw`\(1.5^2=2.25\).`], String.raw`\(1.5\)`),
    q("croissante", "Quelle fonction de base est croissante pour tout x?", choice([String.raw`\(x\)`, String.raw`\(x^2\)`, String.raw`\(|x|\)`, String.raw`\(\frac1x\)`], 0),
      "Imagine chaque graphique de gauche à droite.", [String.raw`\(x^2\) et \(|x|\) décroissent pour \(x<0\); \(\frac1x\) décroît sur chaque branche.`], String.raw`\(x\)`),
    q("comparer", String.raw`Pour \(x>0\), où \(y=x^2\) et \(y=|x|\) se rencontrent-elles?`, num(1),
      "Résous x² = x pour x > 0.", [String.raw`\(x^2-x=0\Rightarrow x(x-1)=0\).`], String.raw`\(x=1\)`),
    q("image", String.raw`Quelle est l'image de \(f(x)=|x|\)?`, choice([String.raw`\(y\ge0\)`, String.raw`\(y\in\mathbb R\)`, String.raw`\(y>0\)`, String.raw`\(y\ne0\)`], 0),
      "|x| peut-il valoir 0? être négatif?", [String.raw`\(|0|=0\); jamais négatif.`], String.raw`\(y\ge0\)`),
  ]),

  ...hard([
    ["Où deux fonctions de base se rencontrent", String.raw`Résous \(\sqrt x=\frac x2\) et explique le résultat à l'aide d'un graphique.`,
      [String.raw`Élève les deux membres au carré : \(x=\frac{x^2}{4}\Rightarrow x^2-4x=0\Rightarrow x(x-4)=0\).`, String.raw`Vérifie : \(x=0\) : \(0=0\) ✓. \(x=4\) : \(\sqrt4=2=\frac42\) ✓.`, String.raw`Entre 0 et 4, la courbe de la racine est au-dessus de la droite; après 4, elle est en dessous.`],
      String.raw`\(x=0\) ou \(x=4\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 4 }, curves: [P.sqrt], lines: [{ m: 0.5, b: 0, color: "violet" }], points: [{ x: 0, y: 0 }, { x: 4, y: 2, label: "(4, 2)" }], step: { x: 1, y: 1 } })],
    ["Une inéquation entre fonctions de base", String.raw`Pour quelles valeurs de \(x\) a-t-on \(\frac1x>x\)?`,
      [String.raw`Les graphiques se rencontrent là où \(\frac1x=x\), c'est-à-dire \(x^2=1\) : \(x=1\) ou \(x=-1\).`, String.raw`Pour \(0<x<1\) : p. ex. \(x=0.5\) : \(2>0.5\) ✓. Pour \(x>1\) : \(\frac12<2\) ✗.`, String.raw`Pour \(x<-1\) : p. ex. \(x=-2\) : \(-0.5>-2\) ✓. Pour \(-1<x<0\) : \(x=-0.5\) : \(-2>-0.5\) ✗.`],
      String.raw`\(x<-1\) ou \(0<x<1\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [P.recip], lines: [{ m: 1, b: 0, color: "gray" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: -1, y: -1, label: "(−1, −1)" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", String.raw`Combien de points \(y=\frac1x\) et \(y=x^2\) ont-elles en commun?`, num(1),
      "x² ≥ 0, donc seul x > 0 peut convenir.", [String.raw`\(\frac1x=x^2\Rightarrow x^3=1\Rightarrow x=1\).`], String.raw`\(1\)`),
    q("difficile", String.raw`Combien de solutions réelles l'équation \(|x|=x^2\) a-t-elle?`, num(3),
      "Essaie x = 0, puis x² = |x| pour x ≠ 0.", [String.raw`\(x=0\), ou \(|x|=1\) : \(x=\pm1\).`], String.raw`\(3\)`),
    q("difficile", String.raw`Résous \(\sqrt x=x-2\).`, num(4),
      "Élève au carré, résous, puis vérifie — une réponse est étrangère.", [String.raw`\(x=x^2-4x+4\Rightarrow x^2-5x+4=0\Rightarrow x=1\) ou \(x=4\).`, String.raw`\(x=1\) : \(1\ne-1\) ✗; \(x=4\) : \(2=2\) ✓.`], String.raw`\(x=4\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi parle-t-on de fonctions « parents »?", "Chaque graphique de la famille y = af(k(x − c)) + d est la fonction de base déplacée, étirée ou retournée. Connais la fonction de base et tu connais toute la famille."],
      ["Une droite verticale peut-elle être une fonction de base ici?", "Non — une droite verticale n'est pas une fonction."],
      ["1/x traverse-t-elle parfois ses asymptotes?", "Non. Elle s'approche de x = 0 et de y = 0 sans jamais les toucher."],
      ["Pourquoi x² et |x| ont-elles la même image?", "Les deux donnent 0 en x = 0 et des valeurs positives ailleurs, et les deux atteignent tous les nombres positifs."],
      ["Comment retenir √x?", "C'est la moitié supérieure d'une parabole couchée : la réciproque de x² pour x ≥ 0 (leçon 1.5)."],
    ],
    summary: [
      "Cinq fonctions de base : x, x², √x, 1/x, |x|.",
      "Domaines : tous les réels, sauf pour √x (x ≥ 0) et 1/x (x ≠ 0).",
      "Images : tous les réels pour x; y ≥ 0 pour x², √x, |x|; y ≠ 0 pour 1/x.",
      "1/x a les asymptotes x = 0 et y = 0.",
      "Mémorise les points clés — ce sont eux que tu transformes.",
    ],
    next: "La section 1.4 détermine le domaine et l'image de n'importe quelle fonction, y compris les restrictions imposées par un contexte.",
  }),
];
