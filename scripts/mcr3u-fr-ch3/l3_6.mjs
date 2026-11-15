// MCR3U-FR 3.6 — Les zéros et le discriminant : compter les zéros à l'aide de b² − 4ac et de la forme canonique, racines rationnelles ou irrationnelles,
// paramètres qui changent le nombre de zéros, preuves qu'une famille a toujours des racines
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.6 Les zéros et le discriminant";
export const ID = lessonId(3, 6);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Les zéros et le discriminant",
    overview: S`Avant de résoudre, tu peux prédire le nombre de zéros d'une fonction du second degré. Le discriminant \(D=b^2-4ac\) — l'expression sous le radical dans la formule quadratique — en décide : deux zéros, un seul ou aucun. Dans cette leçon, tu compteras les zéros à l'aide du discriminant et de la forme canonique, tu distingueras les racines rationnelles des racines irrationnelles et tu trouveras les valeurs d'un paramètre qui changent le nombre de zéros.`,
    goals: [
      "calculer le discriminant et donner le nombre de zéros;",
      "compter les zéros à partir de la forme canonique à l'aide du sommet et du sens d'ouverture;",
      "décider si les racines sont rationnelles ou irrationnelles;",
      "trouver les valeurs d'un paramètre qui donnent deux zéros, un seul ou aucun;",
      "prouver que chaque membre d'une famille a des racines réelles.",
    ],
    curriculum: "A2.1 (déterminer le nombre de zéros d'une fonction du second degré à l'aide de diverses stratégies — examen de graphiques, factorisation, calcul du discriminant)",
    prior: [
      [S`Évalue \(b^2-4ac\) pour \(2x^2-3x-1\).`, S`\(9+8=17\).`],
      [S`\(\sqrt{-16}\) est-il un nombre réel?`, S`Non.`],
      [S`Résous \(k^2>25\).`, S`\(k<-5\) ou \(k>5\).`],
    ],
    words: [
      ["Discriminant", "\\(D=b^2-4ac\\)", ""],
      ["Racine double", "une seule racine répétée lorsque \\(D=0\\)", "\\((x-3)^2=0\\)"],
      ["Racines rationnelles", "des racines qui sont des fractions; \\(D\\) est un carré parfait", "\\(D=49\\)"],
      ["Paramètre", "une lettre qui représente un nombre fixe mais inconnu", "\\(k\\) dans \\(x^2+kx+9\\)"],
    ],
  }),

  section("📌 Ce que t'indique le discriminant", S`
  ${table(["D = b² − 4ac", "Nombre de zéros", "Graphique"], [["\\(D>0\\)", "deux", "coupe l'axe des x deux fois"], ["\\(D=0\\)", "un (double)", "sommet sur l'axe des x"], ["\\(D<0\\)", "aucun", "ne touche pas l'axe des x"]])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 2, color: "green" }, { f: (x) => x * x - 2 * x + 1, color: "amber" }, { f: (x) => x * x - 2 * x + 4, color: "red" }], step: { x: 1, y: 1 } }, "même axe, c différent : D = 12 (vert), 0 (ambre), −12 (rouge)")}
  ${keyIdea(S`Sous forme canonique \(a(x-h)^2+k\), tu peux compter sans le discriminant : si \(a\) et \(k\) sont de signes contraires, il y a deux zéros; si \(k=0\), un seul; s'ils sont de même signe, aucun.`)}`),

  section("📌 Explore", S`<p>Le paramètre \(k\) change le coefficient du milieu de \(y=x^2+kx+16\). Trouve les valeurs de \(k\) où le nombre de zéros change.</p>`),

  widget("discriminantK", { init: [1, 16] }),

  section("📌 Attention", watchOut([
    "Écris l'équation sous la forme ax² + bx + c = 0 avant de lire a, b et c.",
    "D < 0 signifie aucun zéro RÉEL; la formule exigerait √(négatif).",
    "Avec un paramètre, résous une inéquation en k : D > 0, D = 0 ou D < 0.",
    "Si a peut valoir 0, l'équation n'est pas du second degré — exclus ce cas.",
  ])),

  examples([
    ["Aucun zéro", S`Combien de zéros \(f(x)=2x^2-3x+5\) a-t-elle?`,
      [S`<b>Règle.</b> Dans la formule, \(D=b^2-4ac\) est sous le radical. \(D>0\) donne deux zéros, \(D=0\) en donne un et \(D<0\) n'en donne aucun, car un nombre négatif n'a pas de racine carrée réelle.`,
        S`<b>Identifie.</b> \(a=2\), \(b=-3\), \(c=5\).`,
        S`<b>Calcule.</b> \(D=(-3)^2-4(2)(5)=9-40=-31\).`,
        S`<b>Décide.</b> \(D<0\) : il n'y a donc aucun zéro réel.`,
        S`<b>Vérification avec le sommet.</b> L'axe est \(x=\frac34\), et \(f(0.75)=1.125-2.25+5=3.875\). La courbe est ouverte vers le haut à partir d'un point situé au-dessus de l'axe des x; elle ne l'atteint donc jamais ✓`],
      "aucun",
      plane({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 2 * x * x - 3 * x + 5, color: "violet" }], points: [{ x: 0.75, y: 3.875, label: "(0.75, 3.875)", color: "amber" }, { x: 0, y: 5, label: "(0, 5)" }], step: { x: 1, y: 1 } })],
    ["À partir de la forme canonique", S`Combien de zéros \(y=-3(x+1)^2+4\) et \(y=2(x-3)^2+1\) ont-elles?`,
      [S`<b>Idée.</b> Aucun calcul n'est nécessaire. Compare la position du sommet avec le sens d'ouverture de la courbe.`,
        S`<b>Première.</b> Le sommet \((-1,4)\) est au-dessus de l'axe des x, et \(a=-3<0\) : ouverte vers le bas. La courbe doit donc couper l'axe deux fois.`,
        S`<b>Deuxième.</b> Le sommet \((3,1)\) est au-dessus de l'axe des x, et \(a=2>0\) : ouverte vers le haut. La courbe s'éloigne donc de l'axe et ne le rencontre jamais.`,
        S`<b>Vérifie la première par l'algèbre.</b> \(3(x+1)^2=4\), donc \((x+1)^2=\frac43\) : deux racines réelles ✓`,
        S`<b>Vérifie la deuxième par l'algèbre.</b> \(2(x-3)^2=-1\) : un carré ne peut pas être négatif; il n'y a donc aucune racine ✓`],
      "deux et aucun",
      plane({ view: { xmin: -4, xmax: 6, ymin: -5, ymax: 8 }, curves: [{ f: (x) => -3 * (x + 1) ** 2 + 4, color: "violet" }, { f: (x) => 2 * (x - 3) ** 2 + 1, color: "blue" }], points: [{ x: -1, y: 4, label: "(−1, 4)", color: "violet" }, { x: 3, y: 1, label: "(3, 1)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Une racine double", S`Résous \(4x^2-12x+9=0\) en utilisant d'abord le discriminant.`,
      [S`<b>Discriminant.</b> \(D=(-12)^2-4(4)(9)=144-144=0\); il y a donc exactement une racine.`,
        S`<b>Ce que cela signifie.</b> \(D=0\) indique que le trinôme est un carré parfait et que le sommet est sur l'axe des x.`,
        S`<b>Factorise.</b> \(4x^2=(2x)^2\), \(9=3^2\) et \(2(2x)(3)=12x\). Donc \(4x^2-12x+9=(2x-3)^2\).`,
        S`<b>Résous.</b> \(2x-3=0\), donc \(x=1.5\).`,
        S`<b>Vérification.</b> \(4(2.25)-18+9=0\) ✓. La formule est d'accord : \(x=\frac{12\pm0}8=1.5\) ✓`],
      S`un zéro, \(x=1.5\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 4 * x * x - 12 * x + 9, color: "violet" }], points: [{ x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }, { x: 0, y: 9, label: "(0, 9)" }], step: { x: 1, y: 1 } })],
    ["Un paramètre", S`Pour quelles valeurs de \(k\) l'équation \(x^2+kx+16=0\) a-t-elle deux racines réelles?`,
      [S`<b>Condition.</b> Deux racines réelles signifie \(D>0\).`,
        S`<b>Discriminant.</b> \(a=1\), \(b=k\), \(c=16\) : \(D=k^2-64\).`,
        S`<b>Résous.</b> \(k^2-64>0\) signifie \((k-8)(k+8)>0\). Le produit est positif lorsque les deux facteurs ont le même signe : \(k<-8\) ou \(k>8\).`,
        S`<b>Teste une valeur dans chaque région.</b> ${tv(["\\(k\\)", "\\(-10\\)", "\\(0\\)", "\\(8\\)", "\\(10\\)"], ["\\(D\\)", "36", "\\(-64\\)", "0", "36"], ["racines", "deux", "aucune", "une", "deux"])}`,
        S`<b>Vérification sur le graphique.</b> Avec \(k=10\), la courbe coupe l'axe deux fois; avec \(k=8\), elle le touche à peine; avec \(k=0\), elle reste au-dessus ✓`],
      S`\(k<-8\) ou \(k>8\)`,
      plane({ view: { xmin: -10, xmax: 4, ymin: -12, ymax: 24 }, curves: [{ f: (x) => x * x + 10 * x + 16, color: "violet" }, { f: (x) => x * x + 8 * x + 16, color: "amber" }, { f: (x) => x * x + 16, color: "blue" }], points: [{ x: -2, y: 0, label: "(−2, 0)" }, { x: -8, y: 0, label: "(−8, 0)" }, { x: -4, y: 0, label: "(−4, 0)", color: "amber" }], step: { x: 1, y: 4 } }, "violet k = 10, ambre k = 8, bleu k = 0")],
    ["Un coefficient dominant variable", S`Pour quelles valeurs de \(k\) l'équation \(kx^2-4x+1=0\) a-t-elle deux racines réelles, une seule ou aucune?`,
      [S`<b>Discriminant.</b> \(a=k\), \(b=-4\), \(c=1\) : \(D=16-4k\).`,
        S`<b>Deux racines.</b> \(16-4k>0\) donne \(k<4\). Diviser par \(-4\) inverse le sens de l'inégalité.`,
        S`<b>Une racine.</b> \(16-4k=0\) donne \(k=4\) : l'équation est \((2x-1)^2=0\), de racine \(x=\frac12\).`,
        S`<b>Aucune racine.</b> \(16-4k<0\) donne \(k>4\).`,
        S`<b>Le cas particulier.</b> En \(k=0\), l'équation n'est pas du second degré : \(-4x+1=0\) a l'unique racine \(x=\frac14\). Donc \(k=0\) est exclu du cas « deux racines ».`,
        S`<b>Vérification.</b> \(k=3\) : \(3x^2-4x+1=(3x-1)(x-1)\), qui a deux racines ✓`],
      S`deux pour \(k<4,\ k\ne0\); une pour \(k=4\) (et en \(k=0\), où l'équation est linéaire); aucune pour \(k>4\)`,
      plane({ view: { xmin: -1, xmax: 2, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 3 * x * x - 4 * x + 1, color: "violet" }, { f: (x) => 4 * x * x - 4 * x + 1, color: "amber" }, { f: (x) => 6 * x * x - 4 * x + 1, color: "blue" }], points: [{ x: 1 / 3, y: 0 }, { x: 1, y: 0, label: "(1, 0)" }, { x: 0.5, y: 0, label: "(0.5, 0)", color: "amber" }], step: { x: 0.5, y: 1 } }, "violet k = 3, ambre k = 4, bleu k = 6")],
  ]),

  practice([
    q("discriminant", S`Trouve le discriminant de \(3x^2+4x-2=0\).`, num(40),
      "b² − 4ac avec c = −2.", [S`\(16-4(3)(-2)=16+24\).`], S`\(40\)`),
    q("compter", S`Combien de zéros réels \(5x^2-2x+1\) a-t-elle?`, num(0),
      "Calcule D.", [S`\(4-20=-16<0\).`], S`\(0\)`),
    q("un seul zéro", S`Pour quelle valeur de \(k\) l'expression \(x^2-6x+k\) a-t-elle exactement un zéro?`, num(9),
      "D = 0.", [S`\(36-4k=0\).`], S`\(k=9\)`),
    q("forme canonique", S`Combien de zéros \(y=-2(x-4)^2-3\) a-t-elle?`, num(0),
      "Ouverte vers le bas à partir d'un sommet sous l'axe.", [S`a et k sont tous deux négatifs.`], S`\(0\)`),
    q("type de racines", S`Les racines de \(x^2-5x+6=0\) sont…`, choice(["rationnelles", "irrationnelles", "non réelles", "égales"], 0),
      "D est-il un carré parfait?", [S`\(D=25-24=1\).`], "rationnelles"),
  ]),

  ...hard([
    ["Un paramètre à deux endroits", S`Pour quelles valeurs de \(k\) l'équation \(kx^2+6x+k=0\) a-t-elle deux racines réelles distinctes?`,
      [S`\(D=36-4k^2>0\Rightarrow k^2<9\Rightarrow-3<k<3\).`, S`\(k=0\) la rend linéaire; exclus-la donc.`],
      S`\(-3<k<3\), \(k\ne0\)`],
    ["Toujours deux racines", S`Montre que \(x^2+(m-2)x-m=0\) a deux racines réelles pour toute valeur de \(m\).`,
      [S`\(D=(m-2)^2-4(1)(-m)=m^2-4m+4+4m=m^2+4\).`, S`\(m^2\ge0\), donc \(D\ge4>0\) pour toute valeur de \(m\).`],
      "D = m² + 4 est toujours positif",
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 16 }, curves: [{ f: (m) => m * m + 4, color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)" }], step: { x: 1, y: 2 }, xlabel: "m", ylabel: "D" })],
  ], [
    q("difficile", S`Quel est le plus petit entier \(k\) pour lequel \(2x^2-5x+k=0\) n'a aucune racine réelle?`, num(4),
      "25 − 8k < 0.", [S`\(k>3.125\).`], S`\(4\)`),
    q("difficile", S`Pour \(k>0\), \(y=x^2+2kx+9\) touche l'axe des x une seule fois. Trouve \(k\).`, num(3),
      "D = 0.", [S`\(4k^2-36=0\).`], S`\(3\)`),
    q("difficile", S`Pour combien d'entiers \(k\) l'équation \(x^2+kx+7=0\) n'a-t-elle aucune racine réelle?`, num(11),
      "k² < 28.", [S`\(|k|\le5\) : \(k=-5,\dots,5\).`], S`\(11\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi D détermine-t-il le nombre de racines?", "Il est sous la racine carrée précédée de ± : positif, il donne deux valeurs; nul, une seule; négatif, aucune."],
      ["Comment reconnaître des racines rationnelles?", "Si D est un carré parfait (et que a, b, c sont des entiers), les racines sont rationnelles et l'expression se factorise."],
      ["Puis-je compter les zéros sans D?", "Oui, à partir de la forme canonique : compare le signe de a avec le signe de k."],
      ["Que m'indique D sur un graphique?", "Si la parabole coupe l'axe des x, le touche ou ne le rencontre pas."],
      ["Comment les paramètres changent-ils les zéros?", "Ils déplacent ou étirent le graphique; résoudre D = 0 donne les valeurs où il touche tout juste l'axe."],
    ],
    summary: [
      "D = b² − 4ac : > 0 deux, = 0 un, < 0 aucun.",
      "D carré parfait → racines rationnelles.",
      "Forme canonique : a et k de signes contraires → deux zéros.",
      "Paramètres : résoudre D > 0, D = 0 ou D < 0.",
    ],
    next: "La leçon 3.7 construit des familles de paraboles à partir de leurs zéros.",
  }),
];
