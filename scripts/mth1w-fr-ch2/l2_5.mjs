// MTH1W-FR 2.5 — Résoudre des équations à plusieurs étapes (miroir de ../mth1w-ch2/l2_5.mjs) : parenthèses,
// variables des deux côtés, fractions, aucune solution / tous les nombres, problèmes écrits
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { balance, rect, straightAngle } from "../mth1w-ch2/figs.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.5 Résoudre des équations à plusieurs étapes";
export const ID = lessonId(2, 5);

export const blocks = () => [
  intro({
    icon: "🪜",
    title: "Résoudre des équations à plusieurs étapes",
    overview: String.raw`Les vrais problèmes donnent rarement une équation aussi simple que \(3x-5=16\). Dans cette leçon, tu résoudras des équations qui demandent plusieurs étapes : des <strong>parenthèses</strong> à développer, la variable des <strong>deux côtés</strong> et des <strong>fractions</strong> à éliminer. Tu rencontreras aussi deux cas étonnants — des équations <em>sans</em> solution et des équations vraies pour <em>tous</em> les nombres — et tu utiliseras des équations à plusieurs étapes pour résoudre des problèmes de géométrie, d'âges et de taux.`,
    goals: [
      "résoudre des équations avec des parenthèses en développant d'abord;",
      "résoudre des équations avec la variable des deux côtés en regroupant les termes variables d'un même côté;",
      "éliminer les fractions en multipliant chaque terme par le plus petit commun dénominateur;",
      "reconnaître les équations sans solution et les équations vraies pour toutes les valeurs;",
      "modéliser et résoudre des problèmes écrits (périmètre, angles, âges, nombres consécutifs, taux) et vérifier la réponse dans le contexte.",
    ],
    curriculum: "C1.5 (résoudre des équations à plusieurs étapes, y compris avec des coefficients fractionnaires)",
    prior: [
      [String.raw`Résous \(4x+7=-13\).`, String.raw`\(x=-5\).`],
      [String.raw`Développe \(-3(2x-5)\).`, String.raw`\(-6x+15\).`],
      [String.raw`Quel est le PPCD de \(\tfrac{x}{4}\) et de \(\tfrac{x}{6}\)?`, String.raw`\(12\).`],
    ],
    words: [
      ["Équation à plusieurs étapes", "demande plus de deux opérations inverses", "\\(3(x-2)=x+8\\)"],
      ["Regrouper les termes variables", "placer tous les termes variables d'un même côté avec + ou −", "\\(5x=2x+9\\Rightarrow3x=9\\)"],
      ["PPCD", "plus petit commun dénominateur de toutes les fractions", "le PPCD de 3, 4 et 6 est 12"],
      ["Aucune solution", "la variable s'annule et il reste un énoncé faux", "\\(0=5\\ \\text{(faux)}\\)"],
      ["Identité", "vraie pour toutes les valeurs de la variable", "\\(2(x+1)=2x+2\\)"],
    ],
  }),

  section("📌 Un plan pour toute équation du premier degré", String.raw`
  ${table(["Étape", "Ce qu'il faut faire", "Exemple : 3(2x − 1) + 4 = 5x + 9"], [
    ["1", "Développer les parenthèses (et éliminer les fractions)", "\\(6x-3+4=5x+9\\)"],
    ["2", "Simplifier chaque membre", "\\(6x+1=5x+9\\)"],
    ["3", "Regrouper les termes variables d'un même côté", "\\(6x-5x+1=9\\), donc \\(x+1=9\\)"],
    ["4", "Regrouper les constantes de l'autre côté", "\\(x=8\\)"],
    ["5", "Diviser par le coefficient (s'il n'est pas 1)", "—"],
    ["6", "Vérifier dans l'équation de départ", "\\(3(15)+4=49\\) et \\(5(8)+9=49\\) ✓"],
  ])}
  ${keyIdea(String.raw`Déplace le <strong>plus petit</strong> terme variable de l'autre côté. Le terme variable qui reste a alors un coefficient positif, ce qui évite une erreur de signe.`)}`),

  section("📌 Des variables des deux côtés — la balance", String.raw`
  ${balance("5x − 3", "2x + 9", "Enlève 2x des deux plateaux, puis ajoute 3 des deux côtés, puis divise par 3.")}
  <p>\(5x-3=2x+9\Rightarrow3x-3=9\Rightarrow3x=12\Rightarrow x=4\). Dans l'explorateur, soustrais d'abord le terme en \(x\) (choisis <em>terme en x</em>), puis occupe-toi des nombres.</p>`),

  widget("balanceSolver", { left: { x: 5, k: -3 }, right: { x: 2, k: 9 } }),

  section("📌 Éliminer les fractions", String.raw`
  <p>Multiplie <strong>chaque terme des deux côtés</strong> par le PPCD. Les dénominateurs se simplifient et il reste une équation sans fractions.</p>
  <p>\[\frac{x}{3}+\frac{x}{4}=14\quad\xrightarrow{\ \times12\ }\quad 4x+3x=168\quad\Rightarrow\quad 7x=168\quad\Rightarrow\quad x=24\]</p>
  <p>Quand un numérateur a plus d'un terme, mets-le entre parenthèses avant de multiplier : \(\tfrac{x-5}{2}\times6=3(x-5)\).</p>
  ${watchOut([
    String.raw`<strong>Multiplie chaque terme</strong>, y compris les nombres entiers : \(\tfrac{x}{2}+3=5\) multiplié par \(2\) donne \(x+6=10\), et non \(x+3=10\).`,
    String.raw`<strong>Mets un numérateur entre parenthèses</strong> avant de multiplier : \(-\tfrac{x-4}{3}\times6=-2(x-4)=-2x+8\).`,
    String.raw`<strong>Déplacer un terme</strong> veut dire le soustraire des deux côtés. Il change de signe : \(7x=3x+20\Rightarrow4x=20\).`,
  ])}`),

  section("📌 Aucune solution, ou tous les nombres?", String.raw`
  ${table(["Équation", "Après simplification", "Signification"], [
    ["\\(2(x+3)=2x+5\\)", "\\(6=5\\ \\text{(faux)}\\)", "<strong>aucune solution</strong> : les deux membres sont des droites parallèles qui ne se croisent jamais"],
    ["\\(3(x-2)+x=4x-6\\)", "\\(-6=-6\\) — toujours vrai", "<strong>identité</strong> : tout nombre réel est une solution"],
    ["\\(5x+2=2x+2\\)", "\\(3x=0\\)", "une solution, \\(x=0\\) (zéro est une réponse tout à fait valable)"],
  ])}`),

  section("📌 Problèmes écrits avec des équations à plusieurs étapes", String.raw`
  <p>Beaucoup de propriétés géométriques donnent des équations. Les angles sur une droite ont une somme de \(180^\circ\) :</p>
  ${straightAngle(["(2x + 15)°", "(3x − 10)°", "(x + 25)°"], "(2x + 15) + (3x − 10) + (x + 25) = 180, donc 6x + 30 = 180 et x = 25.")}
  <p>Les angles mesurent alors \(65^\circ\), \(65^\circ\) et \(50^\circ\) — leur somme est \(180^\circ\) ✓. (Le diagramme n'est pas à l'échelle.)</p>`),

  examples([
    ["Les parenthèses d'abord", String.raw`Résous \(3(2x-5)-4=17\).`,
      [String.raw`<b>Plan.</b> (1) Développe les parenthèses avec la distributivité \(a(b+c)=ab+ac\). (2) Regroupe les termes semblables. (3) Annule \(+/-\), puis \(\times/\div\), en faisant la même chose des deux côtés.`, String.raw`Développe : \(6x-15-4=17\).`, String.raw`Simplifie : \(6x-19=17\).`, String.raw`Ajoute \(19\) : \(6x=36\); divise par \(6\) : \(x=6\).`, String.raw`Vérifie : \(3(7)-4=17\) ✓`],
      String.raw`\(x=6\)`],
    ["Des variables des deux côtés", String.raw`Résous \(7y-9=3y+17\).`,
      [String.raw`<b>Plan.</b> Rassemble les termes variables d'un côté et les nombres de l'autre en faisant la même opération des deux côtés. Soustraire le plus petit terme en \(y\) (\(3y\)) garde le coefficient positif.`, String.raw`Soustrais \(3y\) des deux côtés : \(4y-9=17\).`, String.raw`Ajoute \(9\) : \(4y=26\).`, String.raw`Divise par \(4\) : \(y=6.5\).`, String.raw`Vérifie : \(7(6.5)-9=36.5\) et \(3(6.5)+17=36.5\) ✓`],
      String.raw`\(y=6.5\)`],
    ["Des parenthèses des deux côtés", String.raw`Résous \(4(a-3)=2(5a+9)-6\).`,
      [String.raw`<b>Plan.</b> Développe d'abord les deux membres, simplifie chaque membre, puis rassemble les termes variables. Chaque étape garde les deux membres égaux.`, String.raw`Développe : \(4a-12=10a+18-6=10a+12\).`, String.raw`Soustrais \(4a\) (le plus petit terme en \(a\)) : \(-12=6a+12\).`, String.raw`Soustrais \(12\) : \(-24=6a\), donc \(a=-4\).`, String.raw`Vérifie : \(4(-7)=-28\) et \(2(-11)-6=-28\) ✓`],
      String.raw`\(a=-4\)`],
    ["Éliminer les fractions", String.raw`Résous \(\dfrac{x+2}{3}-\dfrac{x-1}{4}=2\).`,
      [String.raw`<b>Règle.</b> Multiplier <b>chaque</b> terme d'une équation par le PPCD des dénominateurs (ici, le PPCD de \(3\) et de \(4\) est \(12\)) élimine les fractions et garde l'équation en équilibre. Garde les parenthèses : \(\tfrac{12(x+2)}{3}=4(x+2)\).`, String.raw`PPCD \(12\). Multiplie chaque terme : \(4(x+2)-3(x-1)=24\).`, String.raw`Développe avec soin : \(4x+8-3x+3=24\).`, String.raw`Simplifie : \(x+11=24\), donc \(x=13\).`, String.raw`Vérifie : \(\tfrac{15}{3}-\tfrac{12}{4}=5-3=2\) ✓`, String.raw`<b>Attention au signe :</b> \(-3(x-1)=-3x+3\); écrire \(-3x-3\) donnerait la mauvaise réponse \(x=19\).`],
      String.raw`\(x=13\)`],
    ["Un problème de périmètre", String.raw`Un jardin rectangulaire mesure \(4\) m de plus que le double de sa largeur. Son périmètre est de \(62\) m. Trouve ses dimensions.`,
      [String.raw`<b>Formule.</b> \(P=2l+2w\). Prends comme variable l'inconnue à partir de laquelle tout le reste est décrit : la largeur \(w\); « \(4\) de plus que le double de la largeur » donne alors \(l=2w+4\).`, String.raw`Soit \(w\) la largeur. La longueur est alors \(2w+4\).`, String.raw`Périmètre : \(2w+2(2w+4)=62\), donc \(2w+4w+8=62\).`, String.raw`\(6w=54\), donc \(w=9\) et la longueur est \(2(9)+4=22\).`, String.raw`Vérifie : \(2(9)+2(22)=18+44=62\) ✓`],
      String.raw`\(9\) m sur \(22\) m`,
      rect("2w + 4", "w", "Périmètre = 62 m.", { w: 250, h: 100, fill: "#dcfce7" })],
  ]),

  practice([
    q("parenthèses", String.raw`Résous \(5(n+3)-2n=27\).`, num(4),
      "Développe, puis regroupe les termes en n à gauche.", [String.raw`\(5n+15-2n=27\).`, String.raw`\(3n+15=27\), donc \(3n=12\).`, String.raw`\(n=4\).`], String.raw`\(n=4\)`),
    q("deux côtés", String.raw`Résous \(9-2k=5k-26\).`, num(5),
      String.raw`Ajoute \(2k\) des deux côtés pour que le terme en \(k\) reste positif.`, [String.raw`\(9=7k-26\).`, String.raw`\(35=7k\).`, String.raw`\(k=5\).`], String.raw`\(k=5\)`),
    q("parenthèses des deux côtés", String.raw`Résous \(2(3p-1)=4(p+2)+1\). Donne un nombre décimal.`, num(5.5),
      "Développe d'abord les deux membres.", [String.raw`\(6p-2=4p+9\).`, String.raw`\(2p=11\).`, String.raw`\(p=5.5\).`], String.raw`\(p=5.5\)`),
    q("fractions", String.raw`Résous \(\dfrac{x}{2}-\dfrac{x}{5}=9\).`, num(30),
      String.raw`Multiplie chaque terme par le PPCD, \(10\).`, [String.raw`\(5x-2x=90\).`, String.raw`\(3x=90\), donc \(x=30\).`, String.raw`Vérifie : \(15-6=9\) ✓`], String.raw`\(x=30\)`),
    q("âges", String.raw`Mia a trois fois l'âge de son frère. Dans \(6\) ans, la somme de leurs âges sera \(44\). Quel âge Mia a-t-elle maintenant?`, num(24),
      String.raw`Soit \(b\) l'âge actuel du frère; Mia a donc \(3b\). Ajoute \(6\) à chaque âge.`, [String.raw`\((3b+6)+(b+6)=44\).`, String.raw`\(4b+12=44\), donc \(b=8\).`, String.raw`Mia : \(3(8)=24\). Vérifie : \(30+14=44\) ✓`], String.raw`\(24\) ans`),
  ]),

  wrapUp({
    qas: [
      ["De quel côté la variable doit-elle se retrouver?", String.raw`Les deux côtés conviennent — \(-24=6a\) donne le même \(a=-4\) que \(6a=-24\). Choisir d'enlever le plus petit terme variable garde le coefficient positif et évite les erreurs de signe.`],
      ["Pourquoi multiplier par le PPCD plutôt que par n'importe quel dénominateur commun?", "N'importe quel multiple commun fonctionne, mais le PPCD garde les nombres les plus petits possible : il y a moins à simplifier et moins de risques d'erreur de calcul."],
      [String.raw`J'ai obtenu \(0=0\). Ai-je fait une erreur?`, String.raw`Probablement pas — l'équation est une identité, vraie pour toutes les valeurs. Vérifie en substituant deux nombres différents dans l'équation de départ; les deux devraient fonctionner. Si tu obtiens un énoncé faux comme \(0=4\ \text{(faux)}\), il n'y a aucune solution.`],
      [String.raw`Est-ce que \(x=0\) veut dire « aucune solution »?`, String.raw`Non. \(x=0\) est une solution : la valeur \(0\) rend l'équation vraie. « Aucune solution » signifie qu'aucune valeur ne fonctionne.`],
      ["Comment poser un problème d'âges?", String.raw`Fais un tableau avec « maintenant » et « dans \(n\) ans » (ou « il y a \(n\) ans ») pour chaque personne. Ajoute ou soustrais le même nombre d'années à l'âge de chaque personne. Écris ensuite l'équation à partir de la phrase qui donne un total ou une comparaison.`],
    ],
    summary: [
      "Développe d'abord les parenthèses et élimine les fractions (multiplie chaque terme par le PPCD).",
      "Regroupe les termes variables d'un côté et les constantes de l'autre, puis divise.",
      "Un énoncé faux signifie aucune solution; un énoncé vrai comme −6 = −6 signifie que tout nombre est une solution.",
      "Pour les problèmes écrits : définis la variable, écris l'équation, résous-la, vérifie dans le contexte, réponds avec les unités.",
    ],
    next: "La leçon 2.6 utilise les mêmes opérations inverses pour transformer des formules et isoler n'importe quelle variable.",
  }),
];
