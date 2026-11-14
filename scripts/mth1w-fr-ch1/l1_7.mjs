// MTH1W-FR 1.7 — Lois des exposants et notation scientifique (miroir de ../mth1w-ch1/v2/l1_7.mjs)
import { intro, section, keyIdea, widget, examples, practice, hard, wrapUp, watchOut, table, q, num, frac, sci, txt, fig } from "./lib.mjs";
import { expr } from "../mth1w-ch2/lib.mjs";
import { quotientTiles, cube } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.7 Lois des exposants et notation scientifique";
export const ID = lessonId(1, 7);

export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Lois des exposants et notation scientifique",
    overview: String.raw`Quand des puissances ont la <strong>même base</strong>, les multiplier et les diviser revient à compter des facteurs — ce qui donne trois règles courtes appelées <strong>lois des exposants</strong>. Elles te permettent de simplifier \(x^4\cdot x^9\) en une seule étape et de travailler avec des puissances algébriques comme \((2a^3)^2\). Les mêmes lois font fonctionner la <strong>notation scientifique</strong> : les scientifiques écrivent la distance jusqu'au Soleil \(1.5\times10^{11}\) m et la largeur d'un globule rouge \(8\times10^{-6}\) m, et multiplient ces nombres sans écrire tous les zéros.`,
    goals: [
      String.raw`établir et appliquer la loi du produit \(a^m\cdot a^n=a^{m+n}\) et la loi du quotient \(a^m\div a^n=a^{m-n}\);`,
      String.raw`établir et appliquer la loi de la puissance d'une puissance \((a^m)^n=a^{mn}\) et la puissance d'un produit \((ab)^n=a^nb^n\);`,
      "simplifier des expressions numériques et algébriques comportant des exposants entiers (y compris nuls et négatifs);",
      String.raw`élever à une puissance, y compris une puissance négative, une fraction comportant plusieurs variables, comme \(\left(\dfrac{2a^{3}b}{5ab^{4}}\right)^{-2}\);`,
      "réécrire des puissances avec une base commune pour trouver un exposant inconnu;",
      "écrire des nombres en notation scientifique et en notation usuelle;",
      "multiplier et diviser des nombres en notation scientifique et résoudre des problèmes portant sur de très grandes et de très petites quantités.",
    ],
    curriculum: "B2.1 (notation scientifique), B2.2 (liens entre les exposants et les opérations sur les puissances)",
    prior: [
      [String.raw`Écris \(x^3\) sous forme de multiplication répétée.`, String.raw`\(x\cdot x\cdot x\).`],
      [String.raw`Évalue \(10^{-2}\).`, String.raw`\(\tfrac{1}{100}=0.01\).`],
      [String.raw`Que vaut \(7^0\)?`, String.raw`\(1\).`],
    ],
    words: [
      ["Loi du produit", "même base, on multiplie → on additionne les exposants", "\\(x^2\\cdot x^5=x^7\\)"],
      ["Loi du quotient", "même base, on divise → on soustrait les exposants", "\\(y^8\\div y^3=y^5\\)"],
      ["Loi de la puissance d'une puissance", "élever une puissance à une puissance → on multiplie les exposants", "\\((m^2)^4=m^8\\)"],
      ["Notation scientifique", "\\(a\\times10^n\\) avec \\(1\\le|a|<10\\) et \\(n\\) un entier", "\\(4.7\\times10^{6}\\)"],
      ["Notation usuelle", "la façon habituelle d'écrire un nombre", "\\(4\\,700\\,000\\)"],
    ],
  }),

  section("📌 Les trois lois des exposants", String.raw`
  <p>Chaque loi vient de l'écriture des puissances sous forme de facteurs, que l'on compte ensuite :</p>
  ${table(["Loi", "Pourquoi (développer et compter)", "Règle"], [
    ["Produit", "\\(x^3\\cdot x^2=(x\\,x\\,x)(x\\,x)=x^5\\)", "\\(a^m\\cdot a^n=a^{m+n}\\)"],
    ["Quotient", "\\(\\dfrac{x^5}{x^2}=\\dfrac{x\\,x\\,x\\,\\cancel{x}\\,\\cancel{x}}{\\cancel{x}\\,\\cancel{x}}=x^3\\)", "\\(a^m\\div a^n=a^{m-n}\\)"],
    ["Puissance d'une puissance", "\\((x^3)^2=(x\\,x\\,x)(x\\,x\\,x)=x^6\\)", "\\((a^m)^n=a^{mn}\\)"],
  ])}
  <p>L'explorateur construit ces lois avec des tuiles. Règle la loi du quotient avec \(m=n\) : toutes les tuiles s'annulent, ce qui est une autre façon de voir que \(a^0=1\).</p>`),

  widget("exponentLaws"),

  section("📌 Produits et quotients entre parenthèses", String.raw`
  <p>Un exposant à l'extérieur des parenthèses s'applique à <strong>chaque facteur</strong> à l'intérieur :</p>
  <p style="text-align:center;">\((ab)^n=a^nb^n\qquad\left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n}\)</p>
  <p>Ainsi, \((3x^2)^3=3^3(x^2)^3=27x^6\). Procède dans cet ordre : <strong>les signes et les coefficients</strong> (les nombres), puis <strong>chaque variable</strong> séparément, à l'aide des lois.</p>
  ${keyIdea(String.raw`Les lois fonctionnent pour <strong>tous les exposants entiers</strong>, y compris nuls et négatifs : \(a^4\cdot a^{-6}=a^{-2}=\dfrac{1}{a^2}\). Écris les réponses finales avec des exposants positifs, sauf indication contraire.`)}
  ${watchOut([
    String.raw`<strong>N'additionne les exposants que si tu multiplies des puissances de même base.</strong> \(x^2\cdot x^3=x^5\), et non \(x^6\). Et \(2^3\cdot3^2\) ne peut pas être combiné — les bases sont différentes (cela vaut \(8\times9=72\)).`,
    String.raw`<strong>Ne multiplie pas les bases.</strong> \(5^2\cdot5^4=5^6\), et non \(25^6\).`,
    String.raw`<strong>Les exposants ne se distribuent pas sur une addition.</strong> \((a+b)^2\neq a^2+b^2\) : \((3+4)^2=49\), mais \(3^2+4^2=25\).`,
    String.raw`<strong>Le coefficient reçoit aussi l'exposant.</strong> \((2x)^3=8x^3\), et non \(2x^3\).`,
  ])}`),

  section("📌 Une fraction entière élevée à une puissance", String.raw`
  <p>Les questions les plus difficiles de ce sujet placent une fraction à plusieurs variables entre parenthèses, avec une puissance à l'extérieur. Prends \(\left(\dfrac{3a^5b^2}{12a^2b^6}\right)^2\). Ne distribue pas tout de suite l'exposant extérieur. <strong>Simplifie d'abord à l'intérieur des parenthèses</strong>, car les nombres restent petits.</p>
  ${fig(quotientTiles([{ sym: "a", top: 5, bottom: 2 }, { sym: "b", top: 2, bottom: 6 }]), "À l'intérieur des parenthèses : chaque facteur du bas annule un facteur du haut. Trois a restent en haut et quatre b restent en bas.")}
  <ol>
    <li><strong>Coefficient :</strong> réduis la fraction, \(\dfrac{3}{12}=\dfrac{1}{4}\). Le 1 reste en haut et le 4 reste en bas.</li>
    <li><strong>Chaque variable :</strong> soustrais les exposants, haut moins bas : \(a^{5-2}=a^{3}\) et \(b^{2-6}=b^{-4}\).</li>
    <li><strong>Déplace les exposants négatifs :</strong> \(b^{-4}=\dfrac{1}{b^{4}}\); l'intérieur devient donc \(\dfrac{a^{3}}{4b^{4}}\).</li>
    <li><strong>Applique la puissance extérieure à chaque facteur,</strong> y compris le coefficient : \(\dfrac{(a^{3})^{2}}{4^{2}(b^{4})^{2}}=\dfrac{a^{6}}{16b^{8}}\).</li>
  </ol>
  ${keyIdea(String.raw`Une <strong>puissance négative à l'extérieur</strong> renverse la fraction : \(\left(\dfrac{a}{b}\right)^{-n}=\left(\dfrac{b}{a}\right)^{n}\). Simplifie l'intérieur, renverse, puis applique la puissance positive.`)}
  <p><strong>Bases communes.</strong> Les puissances de \(4\), de \(8\) et de \(16\) sont toutes des puissances de \(2\); on peut donc écrire \(8^{n}\) sous la forme \((2^{3})^{n}=2^{3n}\). Dès que les deux membres ont la même base, les exposants doivent être égaux, ce qui donne une équation que tu peux résoudre.</p>
  ${watchOut([
    String.raw`<strong>Un exposant négatif ne rend pas le nombre négatif.</strong> \(b^{-4}\) fait passer \(b^{4}\) en bas. Le signe du coefficient ne change pas.`,
    String.raw`<strong>Seuls les facteurs peuvent se déplacer.</strong> \(\dfrac{1}{a^{-2}+b}\) n'est pas \(\dfrac{a^{2}}{b}\), car \(a^{-2}\) fait partie d'une somme.`,
    String.raw`<strong>Élève aussi le coefficient.</strong> \(\left(\dfrac{a^{3}}{4b^{4}}\right)^{2}\) a \(16\) en bas, et non \(4\).`,
  ])}`),

  section("📌 La notation scientifique", String.raw`
  <p>Un nombre est en <strong>notation scientifique</strong> lorsqu'il est écrit sous la forme \(a\times10^n\), où \(1\le|a|<10\) et \(n\) est un entier.</p>
  ${table(["Notation usuelle", "Déplacer la virgule décimale", "Notation scientifique"], [
    ["\\(4\\,700\\,000\\)", "6 positions vers la gauche (grand nombre → exposant positif)", "\\(4.7\\times10^{6}\\)"],
    ["\\(0.000\\,52\\)", "4 positions vers la droite (petit nombre → exposant négatif)", "\\(5.2\\times10^{-4}\\)"],
    ["\\(-31\\,000\\)", "4 positions vers la gauche; garde le signe", "\\(-3.1\\times10^{4}\\)"],
  ])}
  <p><strong>Calculer.</strong> Regroupe les parties décimales et les puissances de dix, puis utilise les lois des exposants : \((2\times10^5)(4\times10^3)=(2\times4)\times10^{5+3}=8\times10^{8}\). Si la partie décimale sort de l'intervalle \(1\le a<10\), ajuste : \(15\times10^{8}=1.5\times10^{9}\).</p>
  <p><strong>Puissances d'un nombre en notation scientifique.</strong> La puissance s'applique aux deux parties : \((3\times10^{-5})^{2}=3^{2}\times(10^{-5})^{2}=9\times10^{-10}\). Quand la partie décimale devient inférieure à \(1\), ajuste dans l'autre sens : \(0.4\times10^{6}=4\times10^{5}\).</p>
  <p>Fais glisser l'explorateur pour voir où se situe ton nombre sur une échelle allant des atomes au système solaire — chaque graduation vaut dix fois la précédente.</p>`),

  widget("sciNotation"),

  examples([
    ["La loi du produit avec un exposant négatif", String.raw`Simplifie \(4^3\times4^{-5}\), puis évalue.`,
      [String.raw`<b>Loi du produit.</b> \[b^m\times b^n=b^{m+n}\] Raison : \(m\) facteurs \(b\) suivis de \(n\) autres facteurs \(b\) donnent \(m+n\) facteurs.`,
        String.raw`<b>Même base \(4\), on multiplie → on additionne les exposants :</b> \(4^{3+(-5)}=4^{-2}\).`,
        String.raw`<b>Exposant négatif → inverse :</b> \(4^{-2}=\tfrac{1}{4^2}=\tfrac{1}{16}\).`,
        String.raw`<b>Vérifie en écrivant tout :</b> \(4^3\times4^{-5}=\tfrac{4\times4\times4}{4\times4\times4\times4\times4}\). Trois \(4\) s'annulent, il reste \(\tfrac{1}{4\times4}=\tfrac{1}{16}\) ✓`],
      String.raw`\(4^3\times4^{-5}=4^{-2}=\tfrac{1}{16}\)`],
    ["Combiner des lois", String.raw`Simplifie \(\dfrac{(x^4)^3}{x^5}\).`,
      [String.raw`<b>Lois utilisées.</b> \[(b^m)^n=b^{mn}\qquad\frac{b^m}{b^n}=b^{m-n}\]`,
        String.raw`<b>Puissance d'une puissance (l'intérieur d'abord) :</b> \((x^4)^3=x^4\cdot x^4\cdot x^4=x^{4\times3}=x^{12}\).`,
        String.raw`<b>Loi du quotient :</b> \(\tfrac{x^{12}}{x^5}=x^{12-5}=x^7\).`,
        String.raw`<b>Vérifie avec un nombre</b>, par exemple \(x=2\) : \(\tfrac{(2^4)^3}{2^5}=\tfrac{16^3}{32}=\tfrac{4096}{32}=128\), et \(2^7=128\) ✓`],
      String.raw`\(\dfrac{(x^4)^3}{x^5}=x^7\)`],
    ["Puissance d'un produit avec un coefficient négatif", String.raw`Simplifie \((-2m^3n)^4\).`,
      [String.raw`<b>Loi.</b> La puissance d'un produit est le produit des puissances : \[(ab)^n=a^n b^n\] l'exposant \(4\) s'applique donc à <b>chaque</b> facteur à l'intérieur, y compris \(-2\).`,
        String.raw`<b>Distribue l'exposant :</b> \((-2)^4\,(m^3)^4\,(n)^4\).`,
        String.raw`<b>Coefficient :</b> \((-2)^4=16\) (quatre facteurs négatifs, un nombre pair → positif).`,
        String.raw`<b>Variables :</b> \((m^3)^4=m^{3\times4}=m^{12}\) et \(n^4\).`,
        String.raw`<b>Vérifie avec \(m=1,\ n=1\) :</b> \((-2)^4=16\) et \(16(1)(1)=16\) ✓`],
      String.raw`\((-2m^3n)^4=16m^{12}n^4\)`],
    ["Convertir en notation scientifique", String.raw`Écris a) \(6\,020\,000\) et b) \(0.000\,038\) en notation scientifique.`,
      [String.raw`<b>Forme.</b> \[a\times10^{n},\quad 1\le a<10,\ n\in\mathbb{Z}\] Les grands nombres ont \(n>0\); les nombres entre \(0\) et \(1\) ont \(n<0\).`,
        String.raw`<b>a)</b> Place la virgule après le premier chiffre non nul : \(a=6.02\). Pour revenir de \(6.02\) à \(6\,020\,000\), on déplace la virgule de \(6\) positions vers la droite, soit \(\times10^6\) : \(6.02\times10^{6}\).`,
        String.raw`<b>b)</b> Premier chiffre non nul : \(a=3.8\). Pour revenir de \(3.8\) à \(0.000\,038\), on déplace la virgule de \(5\) positions vers la gauche, soit \(\times10^{-5}\) : \(3.8\times10^{-5}\).`,
        String.raw`<b>Vérification :</b> \(6.02\times1\,000\,000=6\,020\,000\) ✓ et \(3.8\div100\,000=0.000\,038\) ✓`],
      String.raw`a) \(6.02\times10^{6}\); b) \(3.8\times10^{-5}\)`],
    ["Le trajet de la lumière", String.raw`La lumière parcourt environ \(3\times10^{8}\) mètres par seconde. Quelle distance parcourt-elle en \(5\) minutes? Donne la réponse en notation scientifique.`,
      [String.raw`<b>Formule.</b> \[d=v\times t\] La vitesse est donnée par <i>seconde</i>; le temps doit donc être en secondes.`,
        String.raw`<b>Temps en secondes :</b> \(5\times60=300\) s \(=3\times10^{2}\) s.`,
        String.raw`<b>Substitue :</b> \(d=(3\times10^{8})(3\times10^{2})\).`,
        String.raw`<b>Regroupe et utilise la loi du produit :</b> \((3\times3)\times(10^{8}\times10^{2})=9\times10^{8+2}=9\times10^{10}\) m.`,
        String.raw`<b>Vérifie la forme :</b> \(1\le9<10\) ✓. <b>Vérifie l'ordre de grandeur :</b> en 1 s, la lumière parcourt \(3\times10^8\) m, et \(300\) fois cette distance donne \(900\times10^8=9\times10^{10}\) ✓`],
      String.raw`la lumière parcourt environ \(9\times10^{10}\) m en 5 minutes`],
  ]),

  practice([
    q("loi du produit", String.raw`Évalue \(5^4\times5^{-2}\).`, num(25),
      "Même base : additionne les exposants, puis évalue.", [String.raw`\(5^{4+(-2)}=5^2\).`, String.raw`\(=25\).`], String.raw`\(25\)`),
    q("combiner des lois", String.raw`Simplifie \(\dfrac{(y^3)^5}{y^7}\). Écris ta réponse comme <em>y^4</em>.`, txt("y^8", "y8", "y^(8)", "y^{8}"),
      "D'abord la puissance d'une puissance (multiplie les exposants), puis la loi du quotient (soustrais).", [String.raw`\((y^3)^5=y^{15}\).`, String.raw`\(y^{15}\div y^7=y^{8}\).`], String.raw`\(y^8\)`),
    q("coefficients", String.raw`Simplifie \((3a^2)^2\cdot a\). Écris ta réponse comme <em>4a^3</em>.`, txt("9a^5", "9a5", "9*a^5", "9a^{5}"),
      "Élève au carré le coefficient et la puissance séparément, puis multiplie par a.", [String.raw`\((3a^2)^2=9a^4\).`, String.raw`\(9a^4\cdot a=9a^{5}\).`], String.raw`\(9a^5\)`),
    q("en notation scientifique", String.raw`Écris \(0.000\,72\) en notation scientifique. Écris-le comme <em>4.5 x 10^-3</em>.`, sci(7.2, -4),
      "Déplace la virgule juste après le premier chiffre non nul et compte les positions.", [String.raw`\(7.2\) : la virgule s'est déplacée de \(4\) positions vers la droite.`, String.raw`Petit nombre → exposant négatif : \(7.2\times10^{-4}\).`], String.raw`\(7.2\times10^{-4}\)`, { placeholder: "p. ex. 4.5 x 10^-3" }),
    q("multiplier", String.raw`Évalue \((2.4\times10^{5})(5\times10^{3})\) en notation scientifique.`, sci(1.2, 9),
      "Multiplie les parties décimales, additionne les exposants, puis ajuste pour que la partie décimale soit entre 1 et 10.", [String.raw`\(2.4\times5=12\) et \(10^{5+3}=10^{8}\).`, String.raw`\(12\times10^{8}=1.2\times10^{9}\).`], String.raw`\(1.2\times10^{9}\)`, { placeholder: "p. ex. 4.5 x 10^6" }),
  ]),

  ...hard([
    ["Une fraction à trois variables, au cube", String.raw`Simplifie \(\left(\dfrac{4x^{5}y^{-2}z^{3}}{10x^{2}y^{4}z^{-1}}\right)^{3}\). Écris la réponse avec des exposants positifs.`,
      [String.raw`Travaille d'abord à l'intérieur des parenthèses. Réduis le coefficient : \(\dfrac{4}{10}=\dfrac{2}{5}\).`,
        String.raw`Soustrais les exposants, haut moins bas, pour chaque variable : \(x^{5-2}=x^{3}\), \(y^{-2-4}=y^{-6}\) et \(z^{3-(-1)}=z^{4}\).`,
        String.raw`Fais passer l'exposant négatif en bas. L'intérieur devient \(\dfrac{2x^{3}z^{4}}{5y^{6}}\).`,
        String.raw`Applique la puissance \(3\) à chaque facteur : \(\dfrac{2^{3}(x^{3})^{3}(z^{4})^{3}}{5^{3}(y^{6})^{3}}\).`,
        String.raw`Évalue les nombres et multiplie les exposants : \(\dfrac{8x^{9}z^{12}}{125y^{18}}\).`],
      String.raw`l'expression se simplifie en \(\dfrac{8x^{9}z^{12}}{125y^{18}}\)`],
    ["Une puissance négative à l'extérieur", String.raw`Simplifie \(\left(\dfrac{2m^{-3}n^{2}}{5mn^{-1}}\right)^{-2}\). Écris la réponse avec des exposants positifs.`,
      [String.raw`À l'intérieur des parenthèses, le coefficient \(\dfrac{2}{5}\) est déjà réduit.`,
        String.raw`Soustrais les exposants : \(m^{-3-1}=m^{-4}\) et \(n^{2-(-1)}=n^{3}\). L'intérieur est \(\dfrac{2n^{3}}{5m^{4}}\).`,
        String.raw`Une puissance négative à l'extérieur renverse la fraction : \(\left(\dfrac{2n^{3}}{5m^{4}}\right)^{-2}=\left(\dfrac{5m^{4}}{2n^{3}}\right)^{2}\).`,
        String.raw`Applique la puissance \(2\) à chaque facteur : \(\dfrac{5^{2}(m^{4})^{2}}{2^{2}(n^{3})^{2}}=\dfrac{25m^{8}}{4n^{6}}\).`],
      String.raw`l'expression se simplifie en \(\dfrac{25m^{8}}{4n^{6}}\)`],
    ["Trois parenthèses à la fois", String.raw`Simplifie \(\dfrac{(3p^{2}q^{-3})^{2}(2pq^{2})^{3}}{(6p^{-1}q)^{3}}\). Écris la réponse avec des exposants positifs.`,
      [String.raw`Développe chaque parenthèse : \((3p^{2}q^{-3})^{2}=9p^{4}q^{-6}\), \((2pq^{2})^{3}=8p^{3}q^{6}\) et \((6p^{-1}q)^{3}=216p^{-3}q^{3}\).`,
        String.raw`Multiplie au numérateur en additionnant les exposants : \(9\cdot8=72\), \(p^{4+3}=p^{7}\), \(q^{-6+6}=q^{0}=1\). Le numérateur est \(72p^{7}\).`,
        String.raw`Divise par le dénominateur : \(\dfrac{72}{216}=\dfrac{1}{3}\), \(p^{7-(-3)}=p^{10}\) et \(q^{0-3}=q^{-3}\).`,
        String.raw`Écris avec des exposants positifs : \(\dfrac{p^{10}}{3q^{3}}\).`],
      String.raw`l'expression se simplifie en \(\dfrac{p^{10}}{3q^{3}}\)`],
    ["Trouver un exposant", String.raw`Trouve \(n\) si \(\dfrac{8^{n}\times4^{3}}{2^{5}}=16^{2}\times2^{2}\).`,
      [String.raw`Écris chaque nombre sous forme de puissance de \(2\) : \(8^{n}=2^{3n}\), \(4^{3}=2^{6}\) et \(16^{2}=2^{8}\).`,
        String.raw`Membre de gauche : additionne et soustrais les exposants pour obtenir \(2^{3n+6-5}=2^{3n+1}\).`,
        String.raw`Membre de droite : \(2^{8}\times2^{2}=2^{10}\).`,
        String.raw`Les bases sont les mêmes, donc les exposants sont égaux : \(3n+1=10\).`,
        String.raw`Résous : \(3n=9\), donc \(n=3\). Vérification : \(\dfrac{512\times64}{32}=1024\) et \(256\times4=1024\).`],
      String.raw`\(n=3\)`],
    ["Du sable dans un camion", String.raw`Représente un grain de sable par un cube dont les arêtes mesurent \(4\times10^{-4}\) m. Environ combien de grains remplissent une benne de camion qui contient \(8\) m³ de sable? Ne tiens pas compte des espaces entre les grains.`,
      [String.raw`Trouve le volume d'un grain en élevant les deux parties au cube : \((4\times10^{-4})^{3}=4^{3}\times10^{-12}=64\times10^{-12}\) m³.`,
        String.raw`Ajuste en notation scientifique : \(64\times10^{-12}=6.4\times10^{-11}\) m³.`,
        String.raw`Divise le volume de la benne par le volume d'un grain : \(\dfrac{8}{6.4\times10^{-11}}=\dfrac{8}{6.4}\times10^{11}\).`,
        String.raw`\(\dfrac{8}{6.4}=1.25\), donc la réponse est \(1.25\times10^{11}\).`],
      String.raw`environ \(1.25\times10^{11}\) grains, soit 125 milliards`,
      fig(cube("4 × 10⁻⁴ m"), "Un grain, représenté par un cube.")],
  ], [
    q("fraction au carré", String.raw`Simplifie \(\left(\dfrac{6a^{7}b^{2}}{2a^{3}b^{5}}\right)^{2}\). Écris ta réponse comme <em>4x^3/y^2</em>.`, expr("9a^8/b^6"),
      "Simplifie d'abord à l'intérieur des parenthèses, puis élève chaque facteur au carré, y compris le coefficient.",
      [String.raw`Intérieur : \(\dfrac{6}{2}=3\), \(a^{7-3}=a^{4}\), \(b^{2-5}=b^{-3}\). On obtient \(\dfrac{3a^{4}}{b^{3}}\).`, String.raw`Élève chaque facteur au carré : \(\dfrac{3^{2}(a^{4})^{2}}{(b^{3})^{2}}=\dfrac{9a^{8}}{b^{6}}\).`], String.raw`\(\dfrac{9a^{8}}{b^{6}}\)`, { placeholder: "p. ex. 4x^3/y^2" }),
    q("fraction au cube", String.raw`Simplifie \(\left(\dfrac{5x^{-2}y^{4}}{15x^{3}y}\right)^{3}\). Utilise des exposants positifs et mets le dénominateur entre parenthèses, comme <em>y^2/(4x^5)</em>.`, expr("y^9/(27x^15)"),
      "Le coefficient se réduit à 1/3. Haut moins bas pour chaque variable. Un exposant négatif passe en bas.",
      [String.raw`Intérieur : \(\dfrac{5}{15}=\dfrac{1}{3}\), \(x^{-2-3}=x^{-5}\), \(y^{4-1}=y^{3}\). On obtient \(\dfrac{y^{3}}{3x^{5}}\).`, String.raw`Élève chaque facteur au cube : \(\dfrac{(y^{3})^{3}}{3^{3}(x^{5})^{3}}=\dfrac{y^{9}}{27x^{15}}\).`], String.raw`\(\dfrac{y^{9}}{27x^{15}}\)`, { placeholder: "p. ex. y^2/(4x^5)" }),
    q("puissance négative", String.raw`Simplifie \(\left(\dfrac{2c^{-2}d^{3}}{cd}\right)^{-3}\). Utilise des exposants positifs et mets le dénominateur entre parenthèses.`, expr("c^9/(8d^6)"),
      "Simplifie l'intérieur, renverse la fraction à cause de la puissance négative, puis élève au cube.",
      [String.raw`Intérieur : \(c^{-2-1}=c^{-3}\) et \(d^{3-1}=d^{2}\). On obtient \(\dfrac{2d^{2}}{c^{3}}\).`, String.raw`Renverse à cause de la puissance négative : \(\left(\dfrac{c^{3}}{2d^{2}}\right)^{3}\).`, String.raw`Élève chaque facteur au cube : \(\dfrac{c^{9}}{8d^{6}}\).`], String.raw`\(\dfrac{c^{9}}{8d^{6}}\)`, { placeholder: "p. ex. y^2/(4x^5)" }),
    q("base commune", String.raw`Trouve \(n\) si \(\dfrac{9^{n}\times27}{3^{4}}=3^{9}\).`, num(5),
      "Écris 9 et 27 sous forme de puissances de 3, puis égale les exposants.",
      [String.raw`\(9^{n}=3^{2n}\) et \(27=3^{3}\), donc le membre de gauche est \(3^{2n+3-4}=3^{2n-1}\).`, String.raw`Égale les exposants : \(2n-1=9\), donc \(2n=10\) et \(n=5\).`], String.raw`\(5\)`),
    q("notation scientifique", String.raw`Évalue \(\dfrac{(3\times10^{-4})^{3}}{(6\times10^{5})(5\times10^{-20})}\) en notation scientifique.`, sci(9, 2),
      "Calcule séparément le numérateur et le dénominateur, puis divise. Attention aux signes des exposants.",
      [String.raw`Numérateur : \(3^{3}\times10^{-12}=27\times10^{-12}\).`, String.raw`Dénominateur : \(30\times10^{5+(-20)}=30\times10^{-15}\).`, String.raw`Divise : \(\dfrac{27}{30}=0.9\) et \(10^{-12-(-15)}=10^{3}\), ce qui donne \(0.9\times10^{3}\).`, String.raw`Ajuste : \(0.9\times10^{3}=9\times10^{2}\).`], String.raw`\(9\times10^{2}\)`, { placeholder: "p. ex. 4.5 x 10^6" }),
  ]),

  wrapUp({
    qas: [
      [String.raw`Puis-je utiliser la loi du produit pour \(2^3\times5^3\)?`, String.raw`Pas la loi du produit — les bases sont différentes. Mais la règle de la puissance d'un produit s'applique à l'envers : \(2^3\times5^3=(2\times5)^3=10^3=1000\).`],
      ["Pourquoi la partie décimale doit-elle être entre 1 et 10?", String.raw`Pour que chaque nombre ait une seule forme scientifique. \(45\times10^3\), \(4.5\times10^4\) et \(0.45\times10^5\) sont égaux, mais seul \(4.5\times10^4\) est en notation scientifique.`],
      ["Comment entrer la notation scientifique sur une calculatrice?", String.raw`Utilise la touche <strong>EE</strong> ou <strong>EXP</strong> : \(3.8\times10^{-5}\) s'entre <code>3.8 EE -5</code>. N'ajoute pas « × 10 ».`],
      [String.raw`Dois-je simplifier à l'intérieur des parenthèses ou distribuer d'abord la puissance extérieure?`, String.raw`Les deux donnent la même réponse, mais simplifier d'abord à l'intérieur garde les nombres plus petits. Distribuer une puissance \(3\) sur \(\dfrac{12x^{5}}{18x^{2}}\) oblige à travailler avec \(12^{3}\) et \(18^{3}\). Réduire d'abord à \(\dfrac{2x^{3}}{3}\) ne demande que \(2^{3}\) et \(3^{3}\).`],
      ["Où utilise-t-on la notation scientifique?", "En astronomie (distances, masses), en biologie et en médecine (taille des cellules et des virus), en chimie (nombre de particules) et en informatique (stockage en octets)."],
    ],
    summary: [
      String.raw`Même base : \(a^m a^n=a^{m+n}\), \(a^m\div a^n=a^{m-n}\); et \((a^m)^n=a^{mn}\).`,
      String.raw`Un exposant à l'extérieur des parenthèses s'applique à chaque facteur à l'intérieur : \((ab)^n=a^nb^n\).`,
      String.raw`Pour une fraction élevée à une puissance : simplifie l'intérieur, déplace les exposants négatifs, renverse si la puissance extérieure est négative, puis applique la puissance à chaque facteur.`,
      String.raw`Notation scientifique : \(a\times10^n\), \(1\le|a|<10\). Les grands nombres ont un \(n\) positif; les nombres entre 0 et 1 ont un \(n\) négatif.`,
      "Pour multiplier ou diviser en notation scientifique, traite séparément les parties décimales et les puissances de dix, puis ajuste.",
    ],
    next: "La leçon 1.8 porte sur la comparaison de quantités à l'aide de rapports et de proportions.",
  }),
];
