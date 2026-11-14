// MTH1W-FR 2.6 — Transformer des formules (miroir de ../mth1w-ch2/l2_6.mjs) : isoler n'importe quelle variable avec les opérations inverses
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr } from "./lib.mjs";
import { flow, polygon } from "../mth1w-ch2/figs.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.6 Transformer des formules";
export const ID = lessonId(2, 6);

const FORMULAS = [
  { name: "Température", tex: String.raw`F=\tfrac95C+32`, target: "C",
    fwd: [String.raw`\times\tfrac95`, "+32"], inv: ["-32", String.raw`\times\tfrac59`],
    steps: [{ op: "soustrais 32 des deux côtés", result: String.raw`F-32=\tfrac95C` }, { op: String.raw`multiplie les deux côtés par \(\tfrac59\)`, result: String.raw`C=\tfrac59(F-32)` }] },
  { name: "Périmètre d'un rectangle", tex: String.raw`P=2l+2w`, target: "w",
    fwd: [String.raw`\times2`, "+2l"], inv: ["-2l", String.raw`\div2`],
    steps: [{ op: String.raw`soustrais \(2l\) des deux côtés`, result: String.raw`P-2l=2w` }, { op: "divise les deux côtés par 2", result: String.raw`w=\dfrac{P-2l}{2}` }] },
  { name: "Droite", tex: String.raw`y=mx+b`, target: "x",
    fwd: [String.raw`\times m`, "+b"], inv: ["-b", String.raw`\div m`],
    steps: [{ op: String.raw`soustrais \(b\) des deux côtés`, result: String.raw`y-b=mx` }, { op: String.raw`divise les deux côtés par \(m\)`, result: String.raw`x=\dfrac{y-b}{m}` }] },
  { name: "Volume d'un cylindre", tex: String.raw`V=\pi r^2h`, target: "h",
    fwd: [String.raw`\times\pi r^2`], inv: [String.raw`\div\pi r^2`],
    steps: [{ op: String.raw`divise les deux côtés par \(\pi r^2\)`, result: String.raw`h=\dfrac{V}{\pi r^2}` }] },
  { name: "Aire d'un trapèze", tex: String.raw`A=\dfrac{(a+b)h}{2}`, target: "b",
    fwd: ["+a", String.raw`\times h`, String.raw`\div2`], inv: [String.raw`\times2`, String.raw`\div h`, "-a"],
    steps: [{ op: "multiplie les deux côtés par 2", result: String.raw`2A=(a+b)h` }, { op: String.raw`divise les deux côtés par \(h\)`, result: String.raw`\dfrac{2A}{h}=a+b` }, { op: String.raw`soustrais \(a\) des deux côtés`, result: String.raw`b=\dfrac{2A}{h}-a` }] },
];

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Transformer des formules",
    overview: String.raw`Une formule comme \(F=\tfrac95C+32\) est écrite pour trouver une variable (\(F\)) à partir d'une autre (\(C\)). Mais souvent, tu connais \(F\) et tu cherches \(C\). Plutôt que de résoudre une nouvelle équation chaque fois, tu peux <strong>transformer</strong> la formule une seule fois en isolant la variable voulue. Cette leçon utilise exactement les opérations inverses de 2.4 et de 2.5 — sauf que les autres quantités sont maintenant des lettres.`,
    goals: [
      "repérer les opérations appliquées à une variable dans une formule et l'ordre dans lequel elles sont appliquées;",
      "isoler n'importe quelle variable en annulant ces opérations dans l'ordre inverse;",
      String.raw`récrire une relation linéaire comme \(3x+4y=24\) sous la forme \(y=mx+b\);`,
      "décider quand transformer d'abord et quand substituer d'abord;",
      "utiliser des formules transformées en mesure, en sciences et en finances, avec les unités.",
    ],
    curriculum: "C1.5 (transformer des formules pour isoler une variable); lien avec C3 (formes d'une relation linéaire)",
    prior: [
      [String.raw`Résous \(4x+10=30\).`, String.raw`\(x=5\) : soustrais \(10\), puis divise par \(4\).`],
      [String.raw`Quelle opération annule « multiplier par \(\tfrac95\) »?`, String.raw`Multiplier par \(\tfrac59\).`],
      [String.raw`Simplifie \(\dfrac{6x-12}{6}\).`, String.raw`\(x-2\) — divise <em>les deux</em> termes par \(6\).`],
    ],
    words: [
      ["Formule", "une équation qui relie deux quantités ou plus", "\\(A=lw\\)"],
      ["Variable isolée", "la variable seule d'un côté", "\\(A\\) est isolée dans \\(A=lw\\)"],
      ["Transformer (isoler)", "faire d'une autre variable la variable isolée", "\\(w=\\tfrac{A}{l}\\)"],
      ["Équation littérale", "une équation qui contient plusieurs lettres", "\\(ax+b=c\\)"],
    ],
  }),

  section("📌 Les mêmes gestes, avec des lettres au lieu de nombres", String.raw`
  ${table(["Résoudre 4x + 10 = 30", "Résoudre ax + b = c pour x"], [
    ["\\(4x=30-10\\) (soustrais 10)", "\\(ax=c-b\\) (soustrais \\(b\\))"],
    ["\\(x=\\dfrac{20}{4}=5\\) (divise par 4)", "\\(x=\\dfrac{c-b}{a}\\) (divise par \\(a\\))"],
  ])}
  <p>Avec des lettres, on ne peut pas calculer \(c-b\) en un seul nombre; la réponse garde donc les opérations visibles. C'est justement l'intérêt : la formule transformée fonctionne pour <em>toutes</em> les valeurs.</p>
  ${flow("C", ["× 9/5", "+ 32"], "F", "Construire F à partir de C (en haut), puis l'annuler pour obtenir C à partir de F (en bas).", ["F", "− 32", "× 5/9", "C"])}
  ${keyIdea(String.raw`Dresse la liste des opérations appliquées à ta variable cible, dans l'ordre. Annule-les dans l'ordre <strong>inverse</strong>, en appliquant chacune aux <strong>deux côtés</strong> de la formule.`)}`),

  widget("formulaRearrange", { formulas: FORMULAS }),

  section("📌 Transformer d'abord, ou substituer d'abord?", String.raw`
  <p>Pour un seul calcul, substituer les nombres puis résoudre convient très bien. Si tu as besoin de la même inconnue plusieurs fois — une table de valeurs, un tableur, un programme — transforme la formule une fois et substitue plusieurs fois.</p>
  ${table(["F (°F)", "C = 5/9(F − 32)"], [["\\(212\\)", "\\(100\\)"], ["\\(98.6\\)", "\\(37\\)"], ["\\(32\\)", "\\(0\\)"], ["\\(-40\\)", "\\(-40\\)"]])}
  ${watchOut([
    String.raw`<strong>Divise chaque terme</strong> : à partir de \(2w=P-2l\), \(w=\tfrac{P-2l}{2}=\tfrac{P}{2}-l\), et non \(P-l\).`,
    String.raw`<strong>Garde les parenthèses</strong> qui regroupent une opération : \(\tfrac59(F-32)\) n'est pas \(\tfrac59F-32\).`,
    String.raw`<strong>Un coefficient négatif</strong> se déplace avec son signe : à partir de \(3x-4y=12\), \(-4y=12-3x\), donc \(y=\tfrac34x-3\).`,
    String.raw`<strong>On ne peut pas diviser par une variable qui pourrait valoir \(0\)</strong>; par exemple, \(x=\tfrac{y-b}{m}\) exige \(m\neq0\).`,
  ])}`),

  examples([
    ["Distance, vitesse et temps", String.raw`Isole \(t\) dans \(d=vt\). Trouve ensuite la durée d'un trajet de \(375\) km à \(100\) km/h.`,
      [String.raw`<b>Règle.</b> Pour isoler une variable dans une formule, annule les opérations qui lui sont appliquées, en faisant la même chose des deux côtés — exactement comme pour résoudre une équation.`, String.raw`\(t\) est multiplié par \(v\); on l'annule en divisant les deux côtés par \(v\) : \(t=\dfrac{d}{v}\).`, String.raw`\(t=\dfrac{375}{100}=3.75\) h, soit \(3\) h \(45\) min.`, String.raw`<b>Vérification :</b> \(100\times3.75=375\) km ✓, et \(0.75\) h \(=0.75\times60=45\) min.`],
      String.raw`\(t=\dfrac{d}{v}\); \(3.75\) h`],
    ["Température", String.raw`Utilise \(C=\tfrac59(F-32)\) pour convertir \(-40\,^\circ\)F et \(50\,^\circ\)F en degrés Celsius.`,
      [String.raw`<b>Priorité des opérations.</b> Dans \(C=\tfrac59(F-32)\), calcule d'abord la parenthèse (soustrais \(32\)), puis multiplie par \(\tfrac59\).`, String.raw`\(-40\) : \(\tfrac59(-72)=-40\). (La seule température qui est la même sur les deux échelles!)`, String.raw`\(50\) : \(\tfrac59(18)=10\).`, String.raw`<b>Vérifie avec la formule inverse</b> \(F=\tfrac95C+32\) : \(\tfrac95(10)+32=18+32=50\) ✓`],
      String.raw`\(-40\,^\circ\)C et \(10\,^\circ\)C`],
    ["Une clôture", String.raw`Isole \(l\) dans \(P=2l+2w\). Un enclos rectangulaire utilise \(150\) m de clôture et mesure \(30\) m de largeur. Quelle est sa longueur?`,
      [String.raw`<b>Plan.</b> \(l\) est multiplié par \(2\), puis on ajoute \(2w\). Annule dans l'ordre inverse : soustrais \(2w\), puis divise par \(2\).`, String.raw`Soustrais \(2w\) : \(P-2w=2l\).`, String.raw`Divise par \(2\) : \(l=\dfrac{P-2w}{2}=\dfrac{P}{2}-w\).`, String.raw`\(l=\tfrac{150}{2}-30=75-30=45\) m. Vérification : \(2(45)+2(30)=150\) ✓`],
      String.raw`\(l=\tfrac{P}{2}-w\); \(45\) m`],
    ["De la forme générale à y = mx + b", String.raw`Écris \(3x+4y=24\) sous la forme \(y=mx+b\). Donne la pente et l'ordonnée à l'origine.`,
      [String.raw`<b>But.</b> Dans \(y=mx+b\), \(y\) est seul avec un coefficient \(1\); alors \(m\) est la pente et \(b\) l'ordonnée à l'origine. Il faut donc isoler \(y\).`, String.raw`Soustrais \(3x\) : \(4y=-3x+24\).`, String.raw`Divise <em>chaque</em> terme par \(4\) : \(y=-\tfrac34x+6\).`, String.raw`Vérifie avec \(x=4\) : \(3(4)+4y=24\) donne \(y=3\); et \(-\tfrac34(4)+6=3\) ✓`],
      String.raw`\(y=-\tfrac34x+6\) : pente \(-\tfrac34\), ordonnée à l'origine \(6\)`],
    ["Un trapèze", String.raw`Isole \(b\) dans \(A=\dfrac{(a+b)h}{2}\). Un trapèze a une aire de \(91\) cm², une hauteur de \(7\) cm et un côté parallèle de \(11\) cm. Trouve l'autre côté parallèle.`,
      [String.raw`<b>Plan.</b> Dans \(A=\tfrac{(a+b)h}{2}\), les étapes appliquées à \(b\) sont : ajouter \(a\), multiplier par \(h\), diviser par \(2\). Annule-les dans l'ordre inverse.`, String.raw`\(\times2\) : \(2A=(a+b)h\). \(\div h\) : \(\tfrac{2A}{h}=a+b\). \(-a\) : \(b=\tfrac{2A}{h}-a\).`, String.raw`\(b=\tfrac{2(91)}{7}-11=26-11=15\) cm.`, String.raw`Vérification : \(\tfrac{(11+15)(7)}{2}=\tfrac{182}{2}=91\) ✓`],
      String.raw`\(b=\tfrac{2A}{h}-a\); \(15\) cm`,
      polygon([[40, 140], [300, 140], [230, 30], [100, 30]], ["b = ?", "", "a = 11 cm", ""], "Aire de 91 cm², hauteur de 7 cm.")],
  ]),

  practice([
    q("une étape", String.raw`Un hexagone régulier a un périmètre \(P=6s\). Isole \(s\).`, expr("P/6", false),
      String.raw`\(s\) est multiplié par \(6\).`, [String.raw`Divise les deux côtés par \(6\).`], String.raw`\(s=\dfrac{P}{6}\)`, { placeholder: "s = …" }),
    q("deux étapes", String.raw`Isole \(a\) dans \(P=2a+b\).`, expr("(P-b)/2", false),
      String.raw`Annule d'abord \(+b\), puis \(\times2\).`, [String.raw`\(P-b=2a\).`, String.raw`\(a=\dfrac{P-b}{2}\).`], String.raw`\(a=\dfrac{P-b}{2}\)`, { placeholder: "a = …" }),
    q("droite", String.raw`Isole \(b\) dans \(y=mx+b\).`, expr("y-mx", false),
      String.raw`On ajoute \(mx\) à \(b\).`, [String.raw`Soustrais \(mx\) des deux côtés.`], String.raw`\(b=y-mx\)`, { placeholder: "b = …" }),
    q("forme générale", String.raw`Isole \(y\) dans \(2x-5y=10\).`, expr("(2x-10)/5", false),
      String.raw`Soustrais \(2x\), puis divise chaque terme par \(-5\).`, [String.raw`\(-5y=10-2x\).`, String.raw`\(y=\dfrac{10-2x}{-5}=\tfrac25x-2\).`], String.raw`\(y=\tfrac25x-2\)`, { placeholder: "y = …" }),
    q("l'utiliser", String.raw`Un forfait de téléphone coûte \(C=25+0.15k\) dollars, où \(k\) est le nombre de mégaoctets supplémentaires. Isole \(k\), puis trouve \(k\) lorsque la facture est de \(61\) dollars.`, num(240),
      String.raw`\(k=\dfrac{C-25}{0.15}\).`, [String.raw`\(C-25=0.15k\), donc \(k=\dfrac{C-25}{0.15}\).`, String.raw`\(k=\dfrac{36}{0.15}=240\).`], String.raw`\(240\) Mo`),
  ]),

  wrapUp({
    qas: [
      ["Transformer une formule, est-ce différent de résoudre une équation?", "Non — c'est le même processus. La seule différence est que les autres quantités sont des lettres; la réponse est donc une expression plutôt qu'un seul nombre."],
      [String.raw`Pourquoi \(w=\tfrac{P-2l}{2}\) n'est-il pas \(P-l\)?`, String.raw`Diviser par \(2\) divise tout le membre : \(\tfrac{P-2l}{2}=\tfrac P2-l\). Test : \(P=20\), \(l=6\) : \(w=4\); mais \(P-l=14\), ce qui est faux.`],
      ["Quelle forme dois-je donner comme réponse finale?", String.raw`Les deux formes équivalentes sont correctes, p. ex. \(\tfrac{P-2l}{2}\) ou \(\tfrac P2-l\). Choisis la plus facile à utiliser; vérifie-la en substituant des nombres dans la formule de départ et dans ta nouvelle formule.`],
      ["Et si la variable voulue apparaît deux fois?", String.raw`Regroupe d'abord les termes qui contiennent cette variable (comme en 2.5), puis mets-la en évidence au besoin. Par exemple, \(ax+bx=c\) donne \(x(a+b)=c\), donc \(x=\tfrac{c}{a+b}\).`],
      ["Pourquoi est-ce utile en dehors du cours de maths?", "Les tableurs, les calculatrices et les programmes informatiques ont besoin d'une formule où l'inconnue est isolée. Le personnel infirmier transforme des formules de dosage, les ingénieurs transforment des formules de contrainte, et tu en as transformé une chaque fois que tu as calculé la durée d'un trajet."],
    ],
    summary: [
      "Dresse la liste des opérations appliquées à la variable cible, puis annule-les dans l'ordre inverse des deux côtés.",
      "Divise ou multiplie chaque terme d'un membre; garde les parenthèses qui regroupent.",
      "La forme générale Ax + By = C peut être transformée en y = mx + b pour lire la pente et l'ordonnée à l'origine.",
      "Transforme une seule fois quand la même inconnue est nécessaire plusieurs fois; vérifie avec des nombres.",
    ],
    next: "La leçon 2.7 révise tout le chapitre avec des problèmes variés avant l'évaluation du chapitre.",
  }),
];
