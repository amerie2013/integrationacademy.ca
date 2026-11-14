// MTH1W-FR 1.6 — Puissances : exposants nuls et négatifs (miroir de ../mth1w-ch1/v2/l1_6.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.6 Puissances : exposants nuls et négatifs";
export const ID = lessonId(1, 6);

const SQUARE_CUBE = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 520 170" width="520" style="max-width:100%;height:auto;" role="img" aria-label="Un segment de longueur x, un carré d'aire x au carré, un cube de volume x au cube">
<line x1="20" y1="120" x2="110" y2="120" stroke="#1e40af" stroke-width="4"/><text x="65" y="145" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="700">longueur x</text><text x="65" y="165" font-size="12" text-anchor="middle" fill="#475569">1 dimension</text>
<rect x="170" y="30" width="90" height="90" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/><text x="215" y="80" font-size="16" text-anchor="middle" fill="#1e40af" font-weight="700">x²</text><text x="215" y="145" font-size="14" text-anchor="middle" fill="#1e40af" font-weight="700">aire (x)(x) = x²</text><text x="215" y="165" font-size="12" text-anchor="middle" fill="#475569">2 dimensions</text>
<polygon points="340,50 400,20 470,20 410,50" fill="#c7d2fe" stroke="#3730a3" stroke-width="2"/><polygon points="410,50 470,20 470,90 410,120" fill="#a5b4fc" stroke="#3730a3" stroke-width="2"/><rect x="340" y="50" width="70" height="70" fill="#e0e7ff" stroke="#3730a3" stroke-width="2"/><text x="375" y="90" font-size="16" text-anchor="middle" fill="#3730a3" font-weight="700">x³</text><text x="405" y="145" font-size="14" text-anchor="middle" fill="#3730a3" font-weight="700">volume (x)(x)(x) = x³</text><text x="405" y="165" font-size="12" text-anchor="middle" fill="#475569">3 dimensions</text>
</svg><div style="font-size:13px;color:#64748b;">Voilà pourquoi x² se lit « x au carré » et x³ se lit « x au cube ».</div></div>`;

export const blocks = () => [
  intro({
    icon: "⚡",
    title: "Puissances : exposants nuls et négatifs",
    overview: String.raw`Une <strong>puissance</strong> est une façon abrégée d'écrire une multiplication répétée : \(2^5=2\times2\times2\times2\times2=32\). Les puissances décrivent les aires et les volumes, la croissance d'une population, la mémoire d'un ordinateur et la taille des atomes. Dans cette leçon, tu vas évaluer des puissances dont la base est un entier ou une fraction, voir exactement quand les parenthèses comptent, et utiliser une régularité pour découvrir ce que doit signifier un exposant \(0\) ou un exposant <em>négatif</em>.`,
    goals: [
      "identifier la base et l'exposant et écrire une puissance sous forme de multiplication répétée;",
      String.raw`évaluer des puissances dont la base est un entier ou un nombre rationnel, et expliquer la différence entre \((-a)^n\) et \(-a^n\);`,
      String.raw`relier \(x\), \(x^2\) et \(x^3\) à la longueur, à l'aire et au volume;`,
      String.raw`utiliser les racines carrées (et les racines cubiques) pour annuler un carré (et un cube), y compris pour résoudre \(x^2=k\);`,
      String.raw`utiliser des régularités pour expliquer pourquoi \(a^0=1\) et \(a^{-n}=\dfrac{1}{a^n}\) (pour \(a\neq0\));`,
      "évaluer des expressions comportant des puissances en respectant la priorité des opérations, et résoudre des problèmes.",
    ],
    curriculum: "B2.1 (signe et grandeur d'un exposant et valeur d'une puissance)",
    prior: [
      [String.raw`Évalue \(5\times5\times5\).`, String.raw`\(125\).`],
      [String.raw`Évalue \((-2)(-2)(-2)\).`, String.raw`\(-8\) : trois facteurs négatifs donnent un produit négatif.`],
      [String.raw`Que vaut \(\tfrac{1}{2}\times\tfrac{1}{2}\)?`, String.raw`\(\tfrac{1}{4}\).`],
    ],
    words: [
      ["Puissance", "une base munie d'un exposant", "\\(3^4\\)"],
      ["Base", "le facteur qui se répète", "dans \\(3^4\\), la base est \\(3\\)"],
      ["Exposant", "le nombre de fois que la base est utilisée comme facteur", "dans \\(3^4\\), l'exposant est \\(4\\)"],
      ["Au carré / au cube", "exposant 2 / exposant 3", "\\(7^2\\), \\(7^3\\)"],
      ["Inverse", "1 divisé par le nombre", "l'inverse de \\(3^2\\) est \\(\\tfrac{1}{3^2}\\)"],
      ["Racine carrée \\(\\sqrt{a}\\)", "le nombre non négatif dont le carré est \\(a\\)", "\\(\\sqrt{49}=7\\)"],
    ],
  }),

  section("📌 Les puissances comme multiplications répétées", String.raw`
  <p>Dans \(a^n\), la <strong>base</strong> \(a\) est utilisée \(n\) fois comme facteur. La base peut être n'importe quel nombre rationnel :</p>
  ${table(["Puissance", "Multiplication répétée", "Valeur"], [
    ["\\(4^3\\)", "\\(4\\times4\\times4\\)", "\\(64\\)"],
    ["\\((-3)^4\\)", "\\((-3)(-3)(-3)(-3)\\)", "\\(81\\)"],
    ["\\((-3)^3\\)", "\\((-3)(-3)(-3)\\)", "\\(-27\\)"],
    ["\\(\\left(\\tfrac{2}{5}\\right)^2\\)", "\\(\\tfrac25\\times\\tfrac25\\)", "\\(\\tfrac{4}{25}\\)"],
    ["\\((0.1)^3\\)", "\\(0.1\\times0.1\\times0.1\\)", "\\(0.001\\)"],
  ])}
  <p><strong>D'où viennent le carré et le cube.</strong> Une longueur a une dimension (\(x\)); un carré de côté \(x\) a une aire de \((x)(x)=x^2\); un cube d'arête \(x\) a un volume de \((x)(x)(x)=x^3\).</p>
  ${SQUARE_CUBE}
  <p><strong>Bases négatives.</strong> Une base négative avec un exposant <em>pair</em> donne une valeur positive; avec un exposant <em>impair</em>, une valeur négative (compte les facteurs négatifs, comme à la leçon 1.3).</p>
  ${keyIdea(String.raw`<strong>Les parenthèses déterminent la base.</strong> \((-2)^4=(-2)(-2)(-2)(-2)=16\), mais \(-2^4=-(2\times2\times2\times2)=-16\). Sans parenthèses, l'exposant n'appartient qu'au nombre placé juste en dessous.`)}`),

  section("📌 Les racines carrées : annuler un carré", String.raw`
  <p>Élever au carré et extraire une racine carrée sont des <strong>opérations inverses</strong> — chacune annule l'autre, comme la soustraction annule l'addition. Un carré d'aire \(36\) cm² a un côté de \(\sqrt{36}=6\) cm, car \(6^2=36\).</p>
  ${table(["Départ", "Élever au carré", "Extraire la racine carrée", "Retour à"], [
    ["\\(9\\)", "\\(81\\)", "\\(\\sqrt{81}\\)", "\\(9\\)"],
    ["\\(\\tfrac{3}{5}\\)", "\\(\\tfrac{9}{25}\\)", "\\(\\sqrt{\\tfrac{9}{25}}\\)", "\\(\\tfrac{3}{5}\\)"],
    ["\\(0.7\\)", "\\(0.49\\)", "\\(\\sqrt{0.49}\\)", "\\(0.7\\)"],
    ["\\(-9\\)", "\\(81\\)", "\\(\\sqrt{81}\\)", "\\(9\\) (et non \\(-9\\))"],
  ])}
  <ul>
    <li>Le symbole \(\sqrt{\ }\) désigne toujours la racine <strong>non négative</strong> : \(\sqrt{81}=9\). C'est pourquoi \(\sqrt{(-9)^2}=9\).</li>
    <li>Mais l'équation \(x^2=81\) a <strong>deux</strong> solutions, \(x=9\) et \(x=-9\), car les deux ont pour carré \(81\). Écris \(x=\pm9\).</li>
    <li>\(\sqrt{-81}\) <strong>n'est pas un nombre réel</strong> : aucun nombre réel élevé au carré n'est négatif.</li>
    <li>Racines de fractions et de décimaux : \(\sqrt{\tfrac{16}{49}}=\tfrac{4}{7}\) et \(\sqrt{1.44}=1.2\). Si le nombre n'est pas un carré parfait, la racine est irrationnelle et on l'estime (leçon 1.1) : \(\sqrt{40}\approx6.3\).</li>
    <li>Les <strong>racines cubiques</strong> annulent un cube : \(\sqrt[3]{64}=4\), car \(4^3=64\) — un cube de volume \(64\) cm³ a des arêtes de \(4\) cm. La racine cubique d'un nombre négatif <em>est</em> réelle : \(\sqrt[3]{-8}=-2\).</li>
  </ul>
  ${keyIdea(String.raw`Pour annuler un carré, extrais la racine carrée; pour annuler un cube, extrais la racine cubique. Dans PEDMAS, une racine compte avec les exposants : \(2+\sqrt{25}\times3=2+5\times3=17\).`)}`),

  section("📌 L'exposant nul et les exposants négatifs", String.raw`
  <p>Observe les puissances de \(2\). Chaque fois que l'exposant diminue de \(1\), la valeur est <strong>divisée par 2</strong>. La régularité ne s'arrête pas à \(2^1\) :</p>
  ${table(["Puissance", "\\(2^4\\)", "\\(2^3\\)", "\\(2^2\\)", "\\(2^1\\)", "\\(2^0\\)", "\\(2^{-1}\\)", "\\(2^{-2}\\)", "\\(2^{-3}\\)"], [
    ["Valeur", "\\(16\\)", "\\(8\\)", "\\(4\\)", "\\(2\\)", "\\(1\\)", "\\(\\tfrac12\\)", "\\(\\tfrac14\\)", "\\(\\tfrac18\\)"],
  ])}
  ${keyIdea(String.raw`Pour toute base \(a\neq0\) : \(\quad a^0=1\quad\) et \(\quad a^{-n}=\dfrac{1}{a^n}\). <br>Un exposant négatif signifie <strong>inverse</strong>, et non « négatif » : \(2^{-3}=\tfrac18\), un petit nombre positif.`)}
  <p>Pour une base fractionnaire, un exposant négatif renverse la fraction : \(\left(\tfrac{a}{b}\right)^{-n}=\left(\tfrac{b}{a}\right)^{n}\). Par exemple, \(\left(\tfrac{2}{3}\right)^{-2}=\left(\tfrac32\right)^2=\tfrac94\).</p>
  <p>Explore la régularité pour d'autres bases — y compris une base négative et une base fractionnaire — et observe le graphique : quand l'exposant diminue, les valeurs se rapprochent de \(0\) sans jamais l'atteindre.</p>`),

  widget("powerPattern"),

  section("📌 Les puissances dans la priorité des opérations", String.raw`
  <p>Les exposants viennent tout de suite après les parenthèses dans PEDMAS. Évalue chaque puissance avant de multiplier, de diviser, d'additionner ou de soustraire : \(3+2\times4^2=3+2\times16=3+32=35\).</p>
  ${watchOut([
    String.raw`<strong>\(a^n\) n'est pas \(a\times n\).</strong> \(5^3=125\), et non \(15\).`,
    String.raw`<strong>\(a^0\) vaut \(1\), et non \(0\).</strong> Mais attention aux parenthèses : \(-7^0=-(7^0)=-1\), tandis que \((-7)^0=1\).`,
    String.raw`<strong>Un exposant négatif ne rend jamais la valeur négative.</strong> \(4^{-2}=\tfrac{1}{16}\), et non \(-16\) ou \(-8\).`,
  ])}`),

  examples([
    ["Les parenthèses et une base négative", String.raw`Évalue a) \((-2)^6\) et b) \(-2^6\).`,
      [String.raw`<b>Définition.</b> Dans \(b^n\), l'exposant ne s'applique qu'à la base écrite juste en dessous : \[b^n=\underbrace{b\times b\times\cdots\times b}_{n\text{ facteurs}}\] Un signe négatif ne fait partie de la base que s'il est entre les parenthèses.`,
        String.raw`<b>a)</b> La base est \(-2\) : \((-2)^6=(-2)(-2)(-2)(-2)(-2)(-2)\). Six facteurs négatifs, c'est un nombre pair; le résultat est donc positif : \(2^6=64\).`,
        String.raw`<b>b)</b> La base est \(2\); le signe moins s'applique ensuite : \(-2^6=-(2^6)=-(64)=-64\).`,
        String.raw`<b>Vérifie a) par paires :</b> \((-2)(-2)=4\), et trois paires donnent \(4\times4\times4=64\) ✓`],
      String.raw`a) \(64\); b) \(-64\)`],
    ["Puissances de nombres rationnels", String.raw`Évalue a) \(\left(\dfrac{2}{3}\right)^3\) et b) \(\left(-\dfrac{1}{2}\right)^4\).`,
      [String.raw`<b>Règle.</b> Une puissance d'une fraction est la puissance du numérateur sur la puissance du dénominateur : \[\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}\]`,
        String.raw`<b>a)</b> \(\left(\tfrac{2}{3}\right)^3=\tfrac{2^3}{3^3}=\tfrac{2\times2\times2}{3\times3\times3}=\tfrac{8}{27}\).`,
        String.raw`<b>b) Le signe d'abord :</b> quatre facteurs négatifs, c'est un nombre pair; la réponse est donc positive.`,
        String.raw`<b>b) La grandeur :</b> \(\tfrac{1^4}{2^4}=\tfrac{1}{16}\).`,
        String.raw`<b>Vérifie b) avec des décimaux :</b> \((-0.5)^2=0.25\) et \(0.25^2=0.0625=\tfrac{1}{16}\) ✓`],
      String.raw`a) \(\tfrac{8}{27}\); b) \(\tfrac{1}{16}\)`],
    ["Exposants nuls", String.raw`Évalue \(7^0+(-4)^0-4^0\).`,
      [String.raw`<b>Règle.</b> \(b^0=1\) pour tout \(b\ne0\). Raison : la loi du quotient donne \(\tfrac{b^n}{b^n}=b^{n-n}=b^0\), et tout nombre divisé par lui-même donne \(1\).`,
        String.raw`<b>Premier terme :</b> \(7^0=1\).`,
        String.raw`<b>Deuxième terme :</b> la base est \(-4\) (entre parenthèses), donc \((-4)^0=1\).`,
        String.raw`<b>Troisième terme :</b> la base est \(4\), donc \(4^0=1\); le signe moins devant est une soustraction.`,
        String.raw`<b>Combine :</b> \(1+1-1=1\).`,
        String.raw`<b>Vérifie avec la raison :</b> \(\tfrac{7^2}{7^2}=\tfrac{49}{49}=1\) ✓`],
      String.raw`\(7^0+(-4)^0-4^0=1\)`],
    ["Exposants négatifs", String.raw`Évalue a) \(6^{-2}\) et b) \(\left(\dfrac{2}{5}\right)^{-2}\).`,
      [String.raw`<b>Règle.</b> Un exposant négatif signifie l'inverse : \[b^{-n}=\frac{1}{b^n},\qquad\left(\frac{a}{b}\right)^{-n}=\left(\frac{b}{a}\right)^{n}\] Raison : \(b^{-n}\times b^{n}=b^0=1\), donc \(b^{-n}\) est l'inverse de \(b^n\).`,
        String.raw`<b>a)</b> \(6^{-2}=\tfrac{1}{6^2}=\tfrac{1}{36}\).`,
        String.raw`<b>b)</b> Renverse la base et rends l'exposant positif : \(\left(\tfrac{5}{2}\right)^2=\tfrac{25}{4}=6\tfrac14\).`,
        String.raw`<b>Vérification de a) :</b> \(6^{-2}\times6^{2}=\tfrac{1}{36}\times36=1\) ✓ <b>Vérification de b) :</b> \(\left(\tfrac25\right)^2=\tfrac{4}{25}\), et \(\tfrac{4}{25}\times\tfrac{25}{4}=1\) ✓`],
      String.raw`a) \(\tfrac{1}{36}\); b) \(\tfrac{25}{4}=6\tfrac14\)`,
      table(["\\(n\\)", "2", "1", "0", "−1", "−2"], [["\\(6^n\\)", "36", "6", "1", "\\(\\tfrac16\\)", "\\(\\tfrac1{36}\\)"]])],
    ["La priorité des opérations avec des puissances", String.raw`Évalue \(4^2-2^{-1}\times6+5^0\).`,
      [String.raw`<b>Ordre.</b> Les exposants viennent avant la multiplication, qui vient avant l'addition et la soustraction.`,
        String.raw`<b>Puissances :</b> \(4^2=16\), \(2^{-1}=\tfrac{1}{2}\), \(5^0=1\). L'expression devient \(16-\tfrac12\times6+1\).`,
        String.raw`<b>Multiplie :</b> \(\tfrac12\times6=3\). On a maintenant \(16-3+1\).`,
        String.raw`<b>Additionne et soustrais de gauche à droite :</b> \(16-3=13\), puis \(13+1=14\).`,
        String.raw`<b>Vérifie une erreur courante :</b> calculer \(3+1\) en premier donnerait \(16-4=12\), ce qui est faux, car la soustraction et l'addition se font de gauche à droite ✓`],
      String.raw`\(4^2-2^{-1}\times6+5^0=14\)`],
  ]),

  practice([
    q("base négative", String.raw`Évalue \((-5)^3\).`, num(-125),
      "Trois facteurs négatifs : le produit est-il positif ou négatif?", [String.raw`\((-5)(-5)(-5)\).`, String.raw`\(25\times(-5)=-125\).`], String.raw`\(-125\)`),
    q("exposant négatif", String.raw`Évalue \(5^{-3}\). Donne une fraction.`, frac(1, 125),
      "Un exposant négatif signifie l'inverse.", [String.raw`\(5^{-3}=\tfrac{1}{5^3}\).`, String.raw`\(=\tfrac{1}{125}\).`], String.raw`\(\tfrac{1}{125}\)`, { placeholder: "une fraction comme 1/4" }),
    q("base fractionnaire", String.raw`Évalue \(\left(\dfrac{4}{5}\right)^{-2}\).`, frac(25, 16),
      "Renverse la fraction, puis élève-la au carré.", [String.raw`\(\left(\tfrac54\right)^2\).`, String.raw`\(=\tfrac{25}{16}\).`], String.raw`\(\tfrac{25}{16}\)`, { placeholder: "une fraction comme 7/4" }),
    q("racine carrée", String.raw`Un tapis carré a une aire de \(2.25\) m². Quelle est la longueur de chaque côté, en mètres?`, num(1.5),
      "La longueur du côté est la racine carrée de l'aire.", [String.raw`Côté \(=\sqrt{2.25}\).`, String.raw`\(1.5^2=2.25\), donc le côté mesure \(1.5\) m.`], String.raw`\(1.5\) m`),
    q("volume", String.raw`Une boîte en forme de cube a des arêtes de \(2.5\) cm. Quel est son volume en cm³? (\(V=s^3\))`, num(15.625),
      String.raw`Le volume d'un cube est arête × arête × arête.`, [String.raw`\(V=2.5^3=2.5\times2.5\times2.5\).`, String.raw`\(6.25\times2.5=15.625\).`], String.raw`\(15.625\) cm³`),
  ]),

  ...hard([
    ["Des exposants négatifs à l'intérieur et à l'extérieur", String.raw`Évalue \(\left(2^{-1}+3^{-1}\right)^{-2}\).`,
      [String.raw`Dans la parenthèse : \(2^{-1}=\tfrac12\) et \(3^{-1}=\tfrac13\).`,
        String.raw`Additionne : \(\tfrac12+\tfrac13=\tfrac56\).`,
        String.raw`Une puissance négative renverse la fraction : \(\left(\tfrac56\right)^{-2}=\left(\tfrac65\right)^2\).`,
        String.raw`Élève au carré le haut et le bas : \(\tfrac{36}{25}\). Remarque que la réponse n'est pas \(2^2+3^2\) : l'exposant ne se distribue pas sur une somme.`],
      String.raw`la valeur est \(\tfrac{36}{25}\)`],
    ["Trois sortes de puissances sur une ligne", String.raw`Évalue \(\left(-\tfrac12\right)^{-3}-\left(\tfrac23\right)^{-2}+(-4)^0\).`,
      [String.raw`Renverse la première base : \(\left(-\tfrac12\right)^{-3}=(-2)^3=-8\).`,
        String.raw`Renverse la deuxième base : \(\left(\tfrac23\right)^{-2}=\left(\tfrac32\right)^2=\tfrac94\).`,
        String.raw`Toute base non nulle à la puissance \(0\) vaut \(1\) : \((-4)^0=1\).`,
        String.raw`Combine : \(-8-\tfrac94+1=-7-\tfrac94=-\tfrac{37}{4}\).`],
      String.raw`la valeur est \(-\tfrac{37}{4}\)`],
    ["Trouver un exposant négatif", String.raw`Trouve l'entier \(n\) tel que \(\left(\tfrac34\right)^n=\tfrac{64}{27}\).`,
      [String.raw`Remarque que \(\tfrac{64}{27}=\tfrac{4^3}{3^3}=\left(\tfrac43\right)^3\).`,
        String.raw`\(\tfrac43\) est l'inverse de \(\tfrac34\), et un inverse provient d'un exposant négatif : \(\left(\tfrac43\right)^3=\left(\tfrac34\right)^{-3}\).`,
        String.raw`Donc \(n=-3\).`],
      String.raw`\(n=-3\)`],
    ["La demi-vie, vers l'avant et vers l'arrière", String.raw`Un échantillon a une masse de \(4800\) mg et une demi-vie de \(8\) heures, comme le montre le graphique. a) Quand atteindra-t-il \(150\) mg? b) Quelle était sa masse il y a \(16\) heures?`,
      [String.raw`a) \(4800\div150=32=2^5\); l'échantillon doit donc diminuer de moitié \(5\) fois.`,
        String.raw`\(5\times8=40\) heures.`,
        String.raw`b) \(16\) heures correspondent à \(2\) demi-vies en arrière. Remonter dans le temps utilise une puissance négative de \(\tfrac12\) : \(4800\times\left(\tfrac12\right)^{-2}\).`,
        String.raw`\(4800\times4=19\,200\) mg.`],
      String.raw`il atteint \(150\) mg après \(40\) heures, et il avait une masse de \(19\,200\) mg il y a \(16\) heures`,
      fig(graph({ series: [{ pts: [[0, 4800], [8, 2400], [16, 1200], [24, 600]] }], xmin: 0, xmax: 40, ymin: 0, ymax: 5000, xstep: 8, ystep: 1000, xlabel: "heures", ylabel: "mg" }), "La masse diminue de moitié toutes les 8 heures.")],
  ], [
    q("intérieur et extérieur", String.raw`Évalue \(\left(3^{-1}-4^{-1}\right)^{-1}\).`, num(12),
      "Écris les puissances sous forme de fractions et soustrais. Renverse ensuite le résultat.",
      [String.raw`\(\tfrac13-\tfrac14=\tfrac{1}{12}\).`, String.raw`\(\left(\tfrac{1}{12}\right)^{-1}=12\).`], String.raw`\(12\)`),
    q("trois puissances", String.raw`Évalue \(\left(-\tfrac13\right)^{-2}-\left(\tfrac12\right)^{-3}+5^0\).`, num(2),
      "Renverse chaque base, puis applique la puissance positive.",
      [String.raw`\((-3)^2=9\).`, String.raw`\(2^3=8\).`, String.raw`\(5^0=1\).`, String.raw`\(9-8+1=2\).`], String.raw`\(2\)`),
    q("trouve l'exposant", String.raw`Trouve l'entier \(n\) tel que \(\left(\tfrac25\right)^n=\tfrac{125}{8}\).`, num(-3),
      "Le membre de droite est-il une puissance de 2/5 ou de son inverse?",
      [String.raw`\(\tfrac{125}{8}=\left(\tfrac52\right)^3\).`, String.raw`\(\left(\tfrac52\right)^3=\left(\tfrac25\right)^{-3}\), donc \(n=-3\).`], String.raw`\(-3\)`),
    q("fraction de puissances", String.raw`Évalue \(\dfrac{2^{-2}+2^{-3}}{2^{-1}}\) sous forme de fraction.`, frac(3, 4),
      "Écris d'abord le numérateur en une seule fraction.",
      [String.raw`Numérateur : \(\tfrac14+\tfrac18=\tfrac38\).`, String.raw`Dénominateur : \(\tfrac12\).`, String.raw`\(\tfrac38\div\tfrac12=\tfrac34\).`], String.raw`\(\tfrac34\)`, { placeholder: "une fraction comme 2/5" }),
    q("croissance", String.raw`Une culture triple toutes les \(2\) heures et compte maintenant \(7290\) cellules. Il y a combien d'heures comptait-elle \(90\) cellules?`, num(8),
      "Combien de fois a-t-elle triplé?",
      [String.raw`\(7290\div90=81=3^4\), donc elle a triplé \(4\) fois.`, String.raw`\(4\times2=8\) heures.`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      [String.raw`Pourquoi \(a^0=1\) et non \(0\)?`, String.raw`Chaque fois que l'exposant diminue de un, on divise par la base. Un cran sous \(a^1=a\), on obtient \(a\div a=1\). Cela permet aussi aux lois des exposants (1.7) de rester vraies : \(a^3\div a^3=a^0\) doit valoir \(1\).`],
      ["Un exposant négatif rend-il la réponse négative?", String.raw`Non. Il signifie « un sur » : \(5^{-2}=\tfrac{1}{25}\), qui est positif. C'est le signe de la <em>base</em> qui détermine le signe de la valeur.`],
      [String.raw`Que vaut \(0^0\)?`, String.raw`Il n'a pas de valeur convenue dans ce cours : les règles de l'exposant nul et de l'exposant négatif exigent \(a\neq0\).`],
      [String.raw`Comment entrer \((-3)^2\) sur une calculatrice?`, String.raw`Mets les parenthèses. Beaucoup de calculatrices lisent <code>-3^2</code> comme \(-(3^2)=-9\).`],
      ["À quoi servent les puissances?", "Elles décrivent une croissance ou une diminution répétée (bactéries qui doublent, dose de médicament qui diminue de moitié), les aires et les volumes, ainsi que les nombres très grands ou très petits — que la leçon 1.7 écrit en notation scientifique."],
    ],
    summary: [
      String.raw`\(a^n\) est \(a\) utilisé \(n\) fois comme facteur; les parenthèses déterminent la base.`,
      "Base négative : exposant pair → positif, exposant impair → négatif.",
      String.raw`\(a^0=1\) et \(a^{-n}=\tfrac{1}{a^n}\) pour \(a\neq0\); \(\left(\tfrac ab\right)^{-n}=\left(\tfrac ba\right)^n\).`,
      "Les puissances viennent tout de suite après les parenthèses dans la priorité des opérations.",
    ],
    next: "La leçon 1.7 présente des raccourcis pour multiplier et diviser des puissances (les lois des exposants) et écrit les nombres immenses et minuscules en notation scientifique.",
  }),
];
