// MTH1W-FR 1.10 — Densité, infini et limite (miroir de ../mth1w-ch1/v2/l1_10.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, tape, q, num, frac, choice, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.10 Densité, infini et limite";
export const ID = lessonId(1, 10);

const ZENO = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 560 90" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Parcourir à chaque pas la moitié de la distance qui reste jusqu'à un mur">
<line x1="20" y1="50" x2="540" y2="50" stroke="#334155" stroke-width="2"/><rect x="536" y="10" width="10" height="70" fill="#475569"/><text x="520" y="85" font-size="12" text-anchor="end" fill="#334155">mur (8 m)</text>
<path d="M20,50 Q150,0 280,50" fill="none" stroke="#1e40af" stroke-width="2.2"/><text x="150" y="20" font-size="12" text-anchor="middle" fill="#1e40af" font-weight="700">4 m</text>
<path d="M280,50 Q345,14 410,50" fill="none" stroke="#6d28d9" stroke-width="2.2"/><text x="345" y="26" font-size="12" text-anchor="middle" fill="#6d28d9" font-weight="700">2 m</text>
<path d="M410,50 Q442,26 475,50" fill="none" stroke="#b45309" stroke-width="2.2"/><text x="442" y="34" font-size="11" text-anchor="middle" fill="#b45309" font-weight="700">1</text>
<path d="M475,50 Q491,38 507,50" fill="none" stroke="#15803d" stroke-width="2"/><path d="M507,50 Q515,44 523,50" fill="none" stroke="#be123c" stroke-width="2"/>
<circle cx="20" cy="50" r="5" fill="#334155"/><text x="20" y="72" font-size="12" text-anchor="middle" fill="#334155">départ</text>
</svg><div style="font-size:13px;color:#64748b;">Chaque pas couvre la moitié de ce qui reste : 4, 2, 1, ½, ¼ … Le total s'approche de 8 m autant qu'on le veut.</div></div>`;

export const blocks = () => [
  intro({
    icon: "♾️",
    title: "Densité, infini et limite",
    overview: String.raw`Les entiers se suivent les uns après les autres avec des écarts entre eux : il n'y a rien entre \(3\) et \(4\). Les nombres rationnels sont différents — entre deux d'entre eux, il y en a toujours un autre; on ne peut donc jamais nommer « la fraction suivante ». Cette leçon explore trois grandes idées qui en découlent : la <strong>densité</strong> (il y a toujours un autre nombre entre deux nombres), l'<strong>infini</strong> (des ensembles de nombres qui ne finissent jamais) et la <strong>limite</strong> (une valeur dont une liste de nombres s'approche de plus en plus). Ces idées mènent, beaucoup plus tard, au calcul différentiel.`,
    goals: [
      "trouver des nombres rationnels entre deux nombres rationnels donnés, à l'aide de points milieux et de fractions équivalentes;",
      "expliquer ce que signifie qu'un ensemble de nombres est dense, et pourquoi les entiers ne le sont pas;",
      "expliquer pourquoi il n'existe ni plus grand nombre ni plus petit nombre rationnel positif;",
      "décrire la limite d'une suite comme \\(\\tfrac12,\\tfrac34,\\tfrac78,\\dots\\) et expliquer pourquoi \\(0.\\overline{9}=1\\);",
      "relier ces idées à des situations réelles, comme diviser une distance par deux à répétition.",
    ],
    curriculum: "B1.3 (densité, infini et limite en lien avec les ensembles de nombres)",
    prior: [
      [String.raw`Quelle est la moyenne de \(4\) et de \(10\)?`, String.raw`\(\tfrac{4+10}{2}=7\), à mi-chemin entre les deux.`],
      [String.raw`Écris \(\tfrac{1}{3}\) sous forme décimale.`, String.raw`\(0.\overline{3}=0.333\ldots\)`],
      [String.raw`Lequel est le plus grand, \(0.09\) ou \(0.1\)?`, String.raw`\(0.1\) (c'est \(0.10\)).`],
    ],
    words: [
      ["Dense", "entre deux éléments quelconques de l'ensemble, il y a un autre élément", "les rationnels sont denses"],
      ["Point milieu", "le nombre situé à mi-chemin entre deux nombres : leur moyenne", "le point milieu de \\(1\\) et de \\(2\\) est \\(1.5\\)"],
      ["Infini", "sans fin; impossible de compter jusqu'à un dernier élément", "les nombres naturels"],
      ["Suite", "une liste ordonnée de nombres", "\\(1,\\tfrac12,\\tfrac14,\\dots\\)"],
      ["Limite", "la valeur dont une suite s'approche autant qu'on le veut", "\\(\\tfrac1n\\) a pour limite \\(0\\)"],
    ],
  }),

  section("📌 La densité : toujours un autre nombre entre deux", String.raw`
  <p>Le <strong>point milieu</strong> (la moyenne) de deux nombres rationnels \(a\) et \(b\) est \(\dfrac{a+b}{2}\). Il est rationnel et se trouve exactement entre les deux. Recommence avec le nouvel écart et tu en obtiens un autre, puis un autre — les écarts ne s'épuisent jamais.</p>
  ${keyIdea(String.raw`Un ensemble est <strong>dense</strong> si, entre deux de ses éléments, il y a toujours un autre élément. Les nombres rationnels sont denses. Les entiers ne le sont pas : il n'y a aucun entier entre \(3\) et \(4\).`)}
  <p>Une deuxième méthode : réécris les deux fractions avec un dénominateur commun plus grand. Entre \(\tfrac{1}{5}\) et \(\tfrac{2}{5}\), tu ne vois rien, mais sous la forme \(\tfrac{10}{50}\) et \(\tfrac{20}{50}\), il y a neuf fractions entre les deux. Pour les décimaux, ajoute un chiffre : entre \(0.6\) et \(0.7\) se trouvent \(0.61,0.62,\dots,0.69\).</p>
  <p>Appuie quelques fois sur <em>Insérer des points milieux</em>, puis sur <em>Zoomer</em>. Peu importe à quel point tu zoomes, un écart contient toujours d'autres nombres rationnels.</p>`),

  widget("densityZoom"),

  section("📌 L'infini", String.raw`
  <ul>
    <li><strong>Pas de plus grand nombre.</strong> Quel que soit le nombre que tu nommes, lui ajouter \(1\) en donne un plus grand. Les nombres naturels continuent sans fin.</li>
    <li><strong>Pas de plus petit rationnel positif.</strong> Si \(\tfrac{1}{n}\) était le plus petit, \(\tfrac{1}{2n}\) serait plus petit et toujours positif.</li>
    <li><strong>Pas de « plus grand nombre inférieur à 1 ».</strong> Pour tout \(x<1\), le point milieu \(\tfrac{x+1}{2}\) est encore inférieur à \(1\), mais plus grand que \(x\).</li>
    <li><strong>Une infinité de nombres dans un petit intervalle.</strong> Entre \(0\) et \(1\) seulement, il y a une infinité de nombres rationnels — et aussi une infinité d'irrationnels, comme \(\tfrac{\sqrt2}{2}\).</li>
  </ul>
  <p>L'infini (\(\infty\)) n'est pas un nombre que l'on peut atteindre ou avec lequel on peut calculer comme avec \(5\); il décrit un processus qui ne se termine jamais.</p>`),

  section("📌 Les limites", String.raw`
  <p>Certaines suites continuent sans fin, mais se stabilisent vers une seule valeur. Les termes de \(\tfrac{1}{2},\tfrac{3}{4},\tfrac{7}{8},\tfrac{15}{16},\dots\) se rapprochent de plus en plus de \(1\) : l'écart avec \(1\) est \(\tfrac12,\tfrac14,\tfrac18,\tfrac{1}{16},\dots\), et il diminue de moitié chaque fois. On dit que la <strong>limite</strong> de la suite est \(1\).</p>
  ${ZENO}
  <p>Le penseur grec Zénon utilisait cette image pour soutenir qu'on ne pourrait jamais atteindre le mur. Les limites résolvent l'énigme : la somme de l'infinité de pas donne une distance finie, \(8\) m.</p>
  ${keyIdea(String.raw`Une suite a pour <strong>limite</strong> \(L\) si ses termes s'approchent de \(L\) autant qu'on le veut et restent aussi proches. Les termes n'ont jamais besoin d'être égaux à \(L\).`)}
  <p><strong>Pourquoi \(0.\overline{9}=1\).</strong> La suite \(0.9,0.99,0.999,\dots\) a pour limite \(1\), et \(0.\overline{9}\) désigne la valeur du décimal infini en entier — sa limite. L'algèbre le confirme : si \(x=0.\overline{9}\), alors \(10x=9.\overline{9}\), donc \(9x=9\) et \(x=1\).</p>`),

  widget("limitSteps"),

  section("📌 Attention", watchOut([
    String.raw`<strong>« Le nombre qui suit \(\tfrac12\) » n'existe pas</strong> chez les rationnels — pour tout candidat, il y a un autre rationnel entre lui et \(\tfrac12\).`,
    String.raw`<strong>Une limite n'est pas toujours atteinte.</strong> \(\tfrac1n\) s'approche de \(0\), mais chaque terme est positif.`,
    String.raw`<strong>Se rapprocher ne suffit pas.</strong> \(1,\tfrac12,\tfrac13,\dots\) se rapproche aussi de \(-1\), mais pas <em>autant qu'on le veut</em>; sa limite est \(0\), et non \(-1\).`,
  ])),

  examples([
    ["Trois nombres entre deux fractions", String.raw`Trouve trois nombres rationnels entre \(\dfrac{2}{7}\) et \(\dfrac{3}{7}\).`,
      [String.raw`<b>Propriété de densité.</b> Entre deux nombres rationnels différents, il y a toujours un autre nombre rationnel; il y en a donc une infinité.`,
        String.raw`<b>Problème :</b> avec le dénominateur \(7\), il n'y a aucun numérateur entier entre \(2\) et \(3\). <b>Solution :</b> rends les morceaux plus petits en utilisant une fraction équivalente avec un plus grand dénominateur.`,
        String.raw`<b>Multiplie le haut et le bas par \(4\) :</b> \(\tfrac{2}{7}=\tfrac{8}{28}\) et \(\tfrac{3}{7}=\tfrac{12}{28}\).`,
        String.raw`<b>Lis les nombres situés entre les deux :</b> \(\tfrac{9}{28},\ \tfrac{10}{28}=\tfrac{5}{14},\ \tfrac{11}{28}\).`,
        String.raw`<b>Vérifie avec des décimaux :</b> \(\tfrac27\approx0.286\), \(\tfrac{9}{28}\approx0.321\), \(\tfrac{5}{14}\approx0.357\), \(\tfrac{11}{28}\approx0.393\), \(\tfrac37\approx0.429\) — tous dans l'ordre ✓`],
      String.raw`\(\tfrac{9}{28},\ \tfrac{5}{14},\ \tfrac{11}{28}\) (beaucoup d'autres réponses sont possibles)`],
    ["Entre deux décimaux négatifs", String.raw`Trouve un nombre entre \(-0.31\) et \(-0.3\).`,
      [String.raw`<b>Formule du point milieu.</b> Le nombre situé à mi-chemin entre \(a\) et \(b\) est \[m=\frac{a+b}{2}\] et il se trouve toujours entre les deux.`,
        String.raw`<b>Aligne les positions décimales :</b> \(-0.310\) et \(-0.300\). L'écart devient visible : \(-0.309,\ -0.308,\dots,-0.301\) y entrent tous.`,
        String.raw`<b>Point milieu :</b> \(\tfrac{-0.31+(-0.3)}{2}=\tfrac{-0.61}{2}=-0.305\).`,
        String.raw`<b>Vérifie l'ordre :</b> \(-0.310<-0.305<-0.300\), car sur la droite numérique, \(-0.305\) est à droite de \(-0.310\) et à gauche de \(-0.300\) ✓`],
      String.raw`\(-0.305\) (par exemple)`,
      numberLine({ min: -1, max: 0, dots: [{ at: -0.31, label: "", color: "blue" }, { at: -0.3, label: "", color: "blue" }], caption: "Vus de loin, −0.31 et −0.3 semblent former un seul point — en zoomant, on voit de la place pour beaucoup d'autres nombres.", id: "nl101", unit: 480 })],
    ["Pas de plus grand nombre sous 1", String.raw`Sam affirme que \(0.99\) est le plus grand nombre inférieur à \(1\). Montre que Sam a tort.`,
      [String.raw`<b>Logique.</b> Pour réfuter « \(0.99\) est le plus grand », trouve un nombre plus grand que \(0.99\) et encore inférieur à \(1\).`,
        String.raw`<b>Utilise le point milieu :</b> \(\tfrac{0.99+1}{2}=\tfrac{1.99}{2}=0.995\).`,
        String.raw`<b>Vérifie les deux conditions :</b> \(0.995>0.99\) ✓ et \(0.995<1\) ✓.`,
        String.raw`<b>Généralise :</b> pour <i>tout</i> nombre \(x<1\), le point milieu \(\tfrac{x+1}{2}\) est entre \(x\) et \(1\). Peu importe le nombre nommé, il y en a un plus grand sous \(1\) : il n'existe pas de plus grand nombre.`],
      String.raw`\(0.995\) est un contre-exemple; il n'existe pas de plus grand nombre inférieur à \(1\)`],
    ["Décrire une limite", String.raw`Quelle est la limite de la suite \(2,\ 1.5,\ 1.25,\ 1.125,\ \dots\)? Écris le \(n\)ième terme.`,
      [String.raw`<b>Idée.</b> Une suite a pour limite \(L\) si ses termes s'approchent de \(L\) autant qu'on le veut (et restent proches) quand \(n\) augmente.`,
        String.raw`<b>Cherche la régularité :</b> soustrais \(1\) de chaque terme : \(1,\ 0.5,\ 0.25,\ 0.125,\dots\). Chacun est la moitié du précédent; ce sont donc \(\left(\tfrac12\right)^0,\left(\tfrac12\right)^1,\left(\tfrac12\right)^2,\dots\)`,
        String.raw`<b>\(n\)ième terme :</b> \[t_n=1+\left(\tfrac12\right)^{n-1}\] Vérification : \(t_1=1+1=2\) ✓, \(t_4=1+\tfrac18=1.125\) ✓.`,
        String.raw`<b>Trouve la limite :</b> \(\left(\tfrac12\right)^{n-1}\) continue de diminuer de moitié vers \(0\) (p. ex. \(t_{11}=1+\tfrac{1}{1024}\approx1.001\)); \(t_n\) s'approche donc de \(1+0=1\) autant qu'on le veut.`],
      String.raw`la limite est \(1\)`,
      fig(graph({ series: [{ pts: [[1, 2], [2, 1.5], [3, 1.25], [4, 1.125], [5, 1.0625], [6, 1.03125], [7, 1.015625]], color: "blue", join: false }, { pts: [[0, 1], [8, 1]], color: "red", label: "y = 1" }], xmin: 0, xmax: 8, ymin: 0, ymax: 2.5, xstep: 1, ystep: 0.5, xlabel: "n", ylabel: "tₙ" }), "Les termes descendent vers la droite rouge y = 1 sans jamais l'atteindre.")],
    ["Diviser la distance par deux", String.raw`Tu te tiens à \(8\) m d'un mur et tu parcours à répétition la moitié de la distance qui reste. Quelle distance as-tu parcourue après \(5\) pas, et quelle est la limite?`,
      [String.raw`<b>Modèle.</b> Chaque pas est la moitié de ce qui reste; la distance restante est donc multipliée par \(\tfrac12\) à chaque pas : après \(n\) pas, \[\text{reste}=8\left(\tfrac12\right)^n,\qquad\text{parcouru}=8-8\left(\tfrac12\right)^n\]`,
        String.raw`<b>Les pas :</b> \(4,\ 2,\ 1,\ \tfrac12,\ \tfrac14\) m (chacun est la moitié de la distance restante).`,
        String.raw`<b>Additionne-les :</b> \(4+2+1+0.5+0.25=7.75\) m.`,
        String.raw`<b>Vérifie avec la formule :</b> reste \(=8\left(\tfrac12\right)^5=\tfrac{8}{32}=0.25\) m, parcouru \(=8-0.25=7.75\) m ✓`,
        String.raw`<b>Limite :</b> \(8\left(\tfrac12\right)^n\to0\) quand \(n\) augmente; la distance parcourue s'approche donc de \(8-0=8\) m sans jamais la dépasser.`],
      String.raw`\(7.75\) m après 5 pas; le total s'approche de la limite \(8\) m`,
      table(["Pas", "Parcours (m)", "Parcouru jusqu'ici (m)", "Reste (m)"], [["1", "4", "4", "4"], ["2", "2", "6", "2"], ["3", "1", "7", "1"], ["4", "0.5", "7.5", "0.5"], ["5", "0.25", "7.75", "0.25"]])],
  ]),

  practice([
    q("point milieu", String.raw`Trouve le point milieu de \(\tfrac{3}{8}\) et de \(\tfrac{5}{6}\). Donne une fraction.`, frac(29, 48),
      String.raw`Fais la moyenne : \(\tfrac{a+b}{2}\). Additionne d'abord avec le PPCD \(24\).`, [String.raw`\(\tfrac{9}{24}+\tfrac{20}{24}=\tfrac{29}{24}\).`, String.raw`\(\tfrac{29}{24}\div2=\tfrac{29}{48}\).`], String.raw`\(\tfrac{29}{48}\)`, { placeholder: "une fraction comme 3/4" }),
    q("point milieu négatif", String.raw`Trouve le point milieu de \(-1.4\) et de \(-1.2\).`, num(-1.3),
      "Additionne-les et divise par 2.", [String.raw`\(-1.4+(-1.2)=-2.6\).`, String.raw`\(-2.6\div2=-1.3\).`], String.raw`\(-1.3\)`),
    q("limite", String.raw`Quelle est la limite de la suite \(3+\tfrac{1}{n}\) : \(4,\ 3.5,\ 3.\overline{3},\ 3.25,\dots\)?`, num(3),
      String.raw`Que devient \(\tfrac1n\) quand \(n\) est immense?`, [String.raw`\(\tfrac1n\) s'approche de \(0\) autant qu'on le veut.`, String.raw`Donc \(3+\tfrac1n\) s'approche de \(3\) autant qu'on le veut.`], String.raw`\(3\)`),
    q("neuf périodiques", String.raw`À quel nombre \(2.\overline{9}=2.999\ldots\) est-il égal?`, num(3),
      String.raw`Utilise \(0.\overline{9}=1\).`, [String.raw`\(2.\overline{9}=2+0.\overline{9}\).`, String.raw`\(=2+1=3\).`], String.raw`\(3\)`),
    q("plus petite fraction?", String.raw`Vrai ou faux : il existe une plus petite fraction positive.`, choice(["Vrai", "Faux"], 1),
      String.raw`Si quelqu'un en nomme une, peux-tu toujours trouver une fraction positive plus petite?`, [String.raw`Pour toute fraction positive \(\tfrac{a}{b}\), la fraction \(\tfrac{a}{2b}\) est deux fois plus petite et toujours positive.`, "Il ne peut donc pas en exister une plus petite."], "Faux"),
  ]),

  ...hard([
    ["Diviser un écart par deux", String.raw`Trouve le point milieu de \(\tfrac17\) et de \(\tfrac16\). Si tu continues de prendre le point milieu avec \(\tfrac16\), combien d'étapes faut-il pour que l'écart avec \(\tfrac16\) devienne inférieur à \(0.001\)?`,
      [String.raw`Utilise le dénominateur commun \(42\) : \(\tfrac{6}{42}\) et \(\tfrac{7}{42}\).`,
        String.raw`Le point milieu est \(\tfrac{6.5}{42}=\tfrac{13}{84}\).`,
        String.raw`Le premier écart est \(\tfrac{1}{42}\), et chaque point milieu le divise par deux. Après \(k\) étapes, il vaut \(\tfrac{1}{42\times2^k}\).`,
        String.raw`Il faut \(42\times2^k>1000\), donc \(2^k>23.8\). Puisque \(2^4=16\) et \(2^5=32\), \(k=5\).`],
      String.raw`le point milieu est \(\tfrac{13}{84}\), et il faut \(5\) étapes`],
    ["Assez proche, c'est combien?", String.raw`La suite \(a_n=\dfrac{4n-3}{2n}\). Trouve sa limite, et le premier \(n\) pour lequel \(a_n\) est à moins de \(0.01\) de la limite.`,
      [String.raw`Sépare la fraction : \(\dfrac{4n-3}{2n}=2-\dfrac{3}{2n}\).`,
        String.raw`Quand \(n\) augmente, \(\dfrac{3}{2n}\) s'approche de \(0\); la limite est donc \(2\).`,
        String.raw`L'écart est \(\dfrac{3}{2n}\). Il faut \(\dfrac{3}{2n}<0.01\), c'est-à-dire \(2n>300\), donc \(n>150\).`,
        String.raw`Le premier de ces \(n\) est \(151\).`],
      String.raw`la limite est \(2\), et \(n=151\) est le premier terme à moins de \(0.01\)`],
    ["Des rebonds sans fin pour une distance finie", String.raw`On laisse tomber une balle de \(16\) m, et chaque rebond atteint la moitié de la hauteur précédente. Quelle distance totale parcourt-elle, dans le modèle où elle rebondit sans fin?`,
      [String.raw`Les hauteurs des rebonds sont \(8,\ 4,\ 2,\ 1,\dots\) Leur somme s'approche de \(16\), tout comme \(\tfrac12+\tfrac14+\cdots\) s'approche de \(1\).`,
        String.raw`La balle parcourt chaque hauteur de rebond deux fois, une fois en montant et une fois en descendant : \(2\times16=32\) m.`,
        String.raw`Ajoute la première chute : \(16+32=48\) m.`],
      String.raw`la distance totale s'approche de \(48\) m, même avec une infinité de rebonds`,
      fig(graph({ series: [{ pts: [[0, 16], [1, 8], [2, 4], [3, 2], [4, 1], [5, 0.5], [6, 0.25]], join: false }], xmin: 0, xmax: 7, ymin: 0, ymax: 18, xstep: 1, ystep: 2, xlabel: "numéro du rebond", ylabel: "hauteur (m)" }), "Les hauteurs des rebonds s'approchent de 0 m.")],
    ["Un nombre irrationnel dans un tout petit écart", String.raw`Trouve un nombre rationnel et un nombre irrationnel entre \(0.3\) et \(0.31\).`,
      [String.raw`\(0.305\) est un décimal fini; c'est donc un nombre rationnel dans l'écart.`,
        String.raw`Construis un décimal qui ne se termine jamais et ne se répète jamais : \(0.3010010001\ldots\), avec un zéro de plus chaque fois.`,
        String.raw`Il commence par \(0.30\); il est donc plus grand que \(0.3\) et plus petit que \(0.31\).`],
      String.raw`\(0.305\) et \(0.3010010001\ldots\) se trouvent tous deux dans l'écart`],
  ], [
    q("point milieu", String.raw`Trouve le point milieu de \(\tfrac29\) et de \(\tfrac14\).`, frac(17, 72),
      "Additionne les fractions, puis divise par 2.",
      [String.raw`\(\tfrac{8}{36}+\tfrac{9}{36}=\tfrac{17}{36}\).`, String.raw`\(\tfrac{17}{36}\div2=\tfrac{17}{72}\).`], String.raw`\(\tfrac{17}{72}\)`, { placeholder: "une fraction comme 2/5" }),
    q("limite", String.raw`De quelle valeur \(\dfrac{5n+2}{2n}\) s'approche-t-il quand \(n\) devient très grand? Donne un décimal.`, num(2.5),
      "Sépare la fraction en deux parties.",
      [String.raw`\(\dfrac{5n+2}{2n}=\dfrac52+\dfrac1n\).`, String.raw`\(\dfrac1n\) s'approche de \(0\), donc la limite est \(2.5\).`], String.raw`\(2.5\)`),
    q("assez proche", String.raw`Quel est le premier \(n\) pour lequel \(3+\dfrac1n\) est à moins de \(0.002\) de \(3\)?`, num(501),
      "L'écart est 1/n. Résous 1/n < 0.002.",
      [String.raw`\(\tfrac1n<0.002\) signifie \(n>500\).`, String.raw`Le premier nombre entier qui convient est \(501\).`], String.raw`\(501\)`),
    q("distance totale", String.raw`On laisse tomber une balle de \(20\) m, et chaque rebond atteint la moitié de la hauteur précédente. En mètres, de quelle valeur la distance totale parcourue s'approche-t-elle?`, num(60),
      "La somme des hauteurs des rebonds est 20. Chacune est parcourue deux fois.",
      [String.raw`Hauteurs des rebonds : \(10+5+2.5+\cdots\) s'approche de \(20\).`, String.raw`Montée et descente : \(40\) m.`, String.raw`Ajoute la première chute : \(20+40=60\) m.`], String.raw`\(60\)`),
    q("décimaux périodiques", String.raw`Évalue \(0.\overline{27}+0.\overline{4}\) sous forme de fraction.`, frac(71, 99),
      "Écris d'abord chaque décimal sous forme de fraction.",
      [String.raw`\(0.\overline{27}=\tfrac{27}{99}\) et \(0.\overline{4}=\tfrac49=\tfrac{44}{99}\).`, String.raw`La somme est \(\tfrac{71}{99}\).`], String.raw`\(\tfrac{71}{99}\)`, { placeholder: "une fraction comme 2/5" }),
  ]),

  wrapUp({
    qas: [
      ["Combien y a-t-il de nombres entre 0 et 1?", "Une infinité — une infinité de rationnels et une infinité d'irrationnels."],
      [String.raw`\(0.\overline{9}\) est-il vraiment égal à \(1\), ou seulement très proche?`, String.raw`Exactement égal. S'ils étaient différents, un nombre se trouverait entre eux — mais aucun nombre ne peut se glisser entre \(0.\overline{9}\) et \(1\).`],
      ["Les nombres irrationnels sont-ils aussi denses?", String.raw`Oui. Entre deux nombres réels, il y a une infinité de rationnels <em>et</em> une infinité d'irrationnels.`],
      ["L'infini est-il un nombre?", "Pas dans l'arithmétique de ce cours. Il décrit une quantité qui ne finit jamais; on ne peut pas l'additionner ni le soustraire comme un nombre ordinaire."],
      ["Où utilise-t-on les limites?", "Le calcul différentiel repose sur elles : la vitesse à un instant donné, l'aire sous une courbe. Encore aujourd'hui, les ordinateurs approximent π ou les racines carrées à l'aide de suites qui s'approchent d'une limite."],
    ],
    summary: [
      String.raw`Les rationnels sont denses : le point milieu \(\tfrac{a+b}{2}\) est toujours un nombre rationnel entre \(a\) et \(b\).`,
      "Il n'existe ni plus grand nombre, ni plus petit rationnel positif, ni rationnel suivant.",
      "Une limite est la valeur dont une suite s'approche autant qu'on le veut; les termes n'ont pas besoin de l'atteindre.",
      String.raw`\(0.\overline{9}=1\); la somme infinie des moitiés \(\tfrac12+\tfrac14+\tfrac18+\dots\) est égale à \(1\).`,
    ],
    next: "Révision et test du chapitre 1. Ensuite, le chapitre 2 utilise ces habiletés numériques pour construire et simplifier des expressions algébriques.",
  }),
];
