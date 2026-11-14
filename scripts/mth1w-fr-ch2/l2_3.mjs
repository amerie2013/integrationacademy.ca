// MTH1W-FR 2.3 — Simplifier des expressions (miroir de ../mth1w-ch2/l2_3.mjs) : distributivité, monôme × polynôme,
// développer et simplifier, mise en évidence
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr } from "./lib.mjs";
import { area, rect } from "../mth1w-ch2/figs.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.3 Simplifier des expressions";
export const ID = lessonId(2, 3);

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Simplifier des expressions",
    overview: String.raw`La <strong>distributivité</strong> \(a(b+c)=ab+ac\) est l'outil qui fait disparaître les parenthèses. Dans cette leçon, tu la verras comme l'aire d'un rectangle, tu multiplieras des monômes à l'aide des lois des exposants du chapitre 1, tu multiplieras un monôme par un polynôme, puis tu <strong>développeras et simplifieras</strong> des expressions plus longues avec plusieurs parenthèses. Enfin, tu utiliseras la propriété à l'envers pour <strong>mettre en évidence</strong> un facteur commun.`,
    goals: [
      "expliquer la distributivité à l'aide d'un modèle d'aire;",
      String.raw`multiplier des monômes, comme \((-3x^2y)(4xy^3)\), à l'aide de la loi du produit;`,
      "multiplier un monôme par un polynôme, en faisant attention à chaque signe;",
      "développer et simplifier des expressions avec deux parenthèses ou plus, et évaluer avant et après pour vérifier;",
      "mettre en évidence le plus grand facteur commun d'un polynôme, et écrire des expressions d'aire et de périmètre pour des figures.",
    ],
    curriculum: "C1.3, C1.4 (simplifier des expressions en développant et en regroupant les termes semblables)",
    prior: [
      [String.raw`Simplifie \(x^3\times x^4\).`, String.raw`\(x^7\) — même base, on additionne les exposants.`],
      [String.raw`Évalue \(-4\times(-6)\).`, String.raw`\(24\).`],
      [String.raw`Simplifie \(5y-2y^2+3y\).`, String.raw`\(-2y^2+8y\).`],
    ],
    words: [
      ["Distributivité", "multiplier le facteur extérieur par chaque terme à l'intérieur", "\\(3(x-4)=3x-12\\)"],
      ["Développer", "enlever les parenthèses en multipliant", "\\(2x(x+5)=2x^2+10x\\)"],
      ["Simplifier", "développer, puis regrouper les termes semblables", "\\(2(x+1)+3x=5x+2\\)"],
      ["Factoriser", "écrire sous forme de produit; l'inverse de développer", "\\(6x+9=3(2x+3)\\)"],
      ["Plus grand facteur commun (PGFC)", "le plus grand monôme qui divise chaque terme", "le PGFC de \\(8x^3\\) et de \\(12x^2\\) est \\(4x^2\\)"],
    ],
  }),

  section("📌 La distributivité comme une aire", String.raw`
  <p>Un rectangle de \(4\) de largeur et de \(x+3\) de longueur peut être découpé en deux rectangles : \(4\times x\) et \(4\times3\). L'aire totale est la même dans les deux cas :</p>
  ${area("4", ["x", "3"], ["4x", "12"], "4(x + 3) = 4x + 12 : le facteur extérieur multiplie chaque partie.")}
  <p>Cela fonctionne aussi avec plus de termes et avec des nombres négatifs. Une partie négative a une aire négative dans le modèle :</p>
  ${area("−2x", ["3x", "−5"], ["−6x²", "10x"], "−2x(3x − 5) = −6x² + 10x : le signe de chaque produit suit les règles des nombres entiers.")}
  ${keyIdea(String.raw`\(a(b+c+d)=ab+ac+ad\). Multiplie le terme extérieur par <strong>chaque</strong> terme à l'intérieur, et détermine chaque signe avec les règles des nombres entiers.`)}`),

  section("📌 Multiplier des monômes", String.raw`
  <p>Multiplie les coefficients; pour chaque variable, utilise la loi du produit \(x^m\times x^n=x^{m+n}\).</p>
  ${table(["Produit", "Coefficients", "Variables", "Résultat"], [
    ["\\((5x^3)(2x^4)\\)", "\\(5\\times2=10\\)", "\\(x^{3+4}\\)", "\\(10x^7\\)"],
    ["\\((-3a^2b)(4ab^3)\\)", "\\(-3\\times4=-12\\)", "\\(a^{2+1}b^{1+3}\\)", "\\(-12a^3b^4\\)"],
    ["\\((-2m)^3\\)", "\\((-2)^3=-8\\)", "\\(m^3\\)", "\\(-8m^3\\)"],
  ])}`),

  section("📌 Monôme × polynôme, puis développer et simplifier", String.raw`
  <p>L'explorateur ci-dessous multiplie un monôme par un trinôme. Change les puissances et les signes, et observe chaque case du modèle d'aire.</p>`),

  widget("distributiveArea", { init: { a: -2, m: 2, b: 3, p: 2, c: -4, q: 1, d: 5 } }),

  section("📌 Développer plusieurs parenthèses", String.raw`
  <p>Pour simplifier une expression qui contient plusieurs parenthèses : (1) développe chaque parenthèse; (2) regroupe les termes semblables.</p>
  <p>\(3(2x^2-x+4)-2(x^2+5x-1)=6x^2-3x+12-2x^2-10x+2=4x^2-13x+14\)</p>
  <p>Remarque que le \(-2\) multiplie <em>chaque</em> terme de la deuxième parenthèse, donc \(-1\) devient \(+2\).</p>
  <p><strong>Vérifie par substitution.</strong> Pour \(x=1\) : avant, \(3(5)-2(5)=5\); après, \(4-13+14=5\) ✓. Les valeurs concordent, comme elles le doivent pour des expressions équivalentes.</p>
  ${watchOut([
    String.raw`<strong>Distribue à chaque terme :</strong> \(4(x+3)\neq4x+3\).`,
    String.raw`<strong>Un signe moins devant une parenthèse</strong> est un facteur \(-1\) : \(5-(2x-3)=5-2x+3=8-2x\).`,
    String.raw`<strong>La priorité des opérations s'applique toujours :</strong> dans \(15-10(x-4)\), ne calcule pas \(15-10\) d'abord; le \(10\) appartient à la parenthèse : \(15-10x+40=55-10x\).`,
    String.raw`<strong>Additionne les exposants quand tu multiplies</strong> (\(x\cdot x^2=x^3\)), mais jamais quand tu additionnes (\(x+x^2\) reste tel quel).`,
  ])}`),

  section("📌 Mettre en évidence le PGFC", String.raw`
  <p>Factoriser, c'est appliquer la distributivité à l'envers. Trouve le PGFC des coefficients et la plus petite puissance de chaque variable commune :</p>
  <p>\(12x^3-18x^2+6x\) : le PGFC de \(12, 18, 6\) est \(6\); la plus petite puissance de \(x\) est \(x^1\). Donc \(12x^3-18x^2+6x=6x(2x^2-3x+1)\).</p>
  ${area("6x", ["2x²", "−3x", "1"], ["12x³", "−18x²", "6x"], "Factoriser : trouver les dimensions d'un rectangle dont on connaît les morceaux d'aire.")}
  <p>Vérifie toujours en développant : \(6x(2x^2-3x+1)=12x^3-18x^2+6x\) ✓. Remarque le \(1\) : quand un terme <em>est</em> le PGFC, il reste un \(1\) dans la parenthèse.</p>`),

  examples([
    ["Monôme fois monôme", String.raw`Simplifie \((-4x^2y^3)(-\tfrac12xy^2)(3y)\).`,
      [String.raw`<b>Règles.</b> Multiplie les coefficients, puis utilise la loi du produit \(b^m\cdot b^n=b^{m+n}\) pour chaque variable (une variable sans exposant a l'exposant \(1\)).`, String.raw`Coefficients : \((-4)(-\tfrac12)(3)=6\).`, String.raw`\(x\) : \(x^{2+1}=x^3\). \(y\) : \(y^{3+2+1}=y^6\).`, String.raw`<b>Vérifie avec \(x=y=1\) :</b> \((-4)(-\tfrac12)(3)=6\) et \(6(1)(1)=6\) ✓`],
      String.raw`\(6x^3y^6\)`],
    ["Monôme fois polynôme", String.raw`Développe \(-3a^2(2a^3-5a+4)\).`,
      [String.raw`<b>Distributivité.</b> \[a(b+c+d)=ab+ac+ad\] Multiplie \(-3a^2\) par <b>chaque</b> terme, en surveillant les signes.`, String.raw`\(-3a^2\times2a^3=-6a^5\).`, String.raw`\(-3a^2\times(-5a)=+15a^3\).`, String.raw`\(-3a^2\times4=-12a^2\).`, String.raw`<b>Vérifie avec \(a=1\) :</b> \(-3(2-5+4)=-3\) et \(-6+15-12=-3\) ✓`],
      String.raw`\(-6a^5+15a^3-12a^2\)`,
      area("−3a²", ["2a³", "−5a", "4"], ["−6a⁵", "15a³", "−12a²"], "Chaque case est le produit des étiquettes de sa rangée et de sa colonne.")],
    ["Développer et simplifier", String.raw`Simplifie \(2x(x^2-3x+1)-x^2(4x-5)+7x\).`,
      [String.raw`<b>Plan.</b> Applique la distributivité à chaque parenthèse (le \(-x^2\) multiplie les deux termes de sa parenthèse), puis regroupe les termes semblables.`, String.raw`Première parenthèse : \(2x^3-6x^2+2x\).`, String.raw`Deuxième : \(-x^2(4x-5)=-4x^3+5x^2\).`, String.raw`Regroupe : \(x^3\) : \(2-4=-2\); \(x^2\) : \(-6+5=-1\); \(x\) : \(2+7=9\).`, String.raw`Vérifie \(x=2\) : avant \(4(-1)-4(3)+14=-2\); après \(-16-4+18=-2\) ✓`],
      String.raw`\(-2x^3-x^2+9x\)`],
    ["Mettre en évidence le PGFC", String.raw`Factorise complètement \(15m^4n^2-25m^3n^3+5m^2n\).`,
      [String.raw`<b>Règle.</b> Factoriser, c'est la distributivité à l'envers : \(ab+ac=a(b+c)\). Le PGFC utilise le PGFC des coefficients et la <b>plus petite</b> puissance de chaque variable présente dans tous les termes.`, String.raw`Le PGFC de \(15, 25, 5\) est \(5\); plus petites puissances : \(m^2\) et \(n^1\). PGFC \(=5m^2n\).`, String.raw`Divise chaque terme : \(\tfrac{15m^4n^2}{5m^2n}=3m^2n\), \(\tfrac{-25m^3n^3}{5m^2n}=-5mn^2\), \(\tfrac{5m^2n}{5m^2n}=1\).`, String.raw`Vérifie en développant.`, String.raw`<b>Développe pour vérifier :</b> \(5m^2n\cdot3m^2n=15m^4n^2\), \(5m^2n\cdot(-5mn^2)=-25m^3n^3\), \(5m^2n\cdot1=5m^2n\) ✓`],
      String.raw`\(5m^2n(3m^2n-5mn^2+1)\)`],
    ["Un cadre", String.raw`Un cadre rectangulaire mesure \(3x+6\) cm de longueur et \(2x\) cm de largeur à l'extérieur. L'ouverture pour l'image mesure \(3x\) cm sur \(2x-4\) cm. a) Écris une expression simplifiée pour l'aire du bois. b) Évalue-la pour \(x=8\).`,
      [String.raw`<b>Formule.</b> \(A=lw\). Le bois est ce qui reste quand on enlève l'ouverture : \(A_{\text{bois}}=A_{\text{extérieur}}-A_{\text{ouverture}}\).`, String.raw`Aire extérieure : \(2x(3x+6)=6x^2+12x\).`, String.raw`Ouverture : \(3x(2x-4)=6x^2-12x\).`, String.raw`Bois \(=(6x^2+12x)-(6x^2-12x)=24x\).`, String.raw`b) \(24(8)=192\) cm². Vérification : extérieur \(16\times30=480\), ouverture \(24\times12=288\), différence \(192\) ✓`],
      String.raw`a) \(24x\) cm²; b) \(192\) cm²`,
      rect("3x + 6", "2x", "L'ouverture mesure 3x sur 2x − 4; le bois est la bordure ombrée.", { inner: { pad: 18, label: "3x sur 2x − 4" }, w: 260, h: 130 })],
  ]),

  practice([
    q("monômes", String.raw`Simplifie \((2p^3q)(-5pq^4)\).`, expr("-10p^4q^5"),
      "Multiplie les coefficients; additionne les exposants de chaque variable.", [String.raw`\(2\times(-5)=-10\).`, String.raw`\(p^{3+1}q^{1+4}=p^4q^5\).`], String.raw`\(-10p^4q^5\)`),
    q("distribuer", String.raw`Développe \(4x^2(3x^2-x+6)\).`, expr("12x^4-4x^3+24x^2"),
      String.raw`Multiplie \(4x^2\) par chacun des trois termes.`, [String.raw`\(4x^2\cdot3x^2=12x^4\).`, String.raw`\(4x^2\cdot(-x)=-4x^3\).`, String.raw`\(4x^2\cdot6=24x^2\).`], String.raw`\(12x^4-4x^3+24x^2\)`),
    q("développer et simplifier", String.raw`Simplifie \(5(2y-3)-3(4y-7)\).`, expr("-2y+6"),
      String.raw`Le \(-3\) multiplie les deux termes de la deuxième parenthèse.`, [String.raw`\(10y-15-12y+21\).`, String.raw`\(-2y+6\).`], String.raw`\(-2y+6\)`),
    q("deux parenthèses avec des puissances", String.raw`Simplifie \(3k(k^2-2k)-k^2(k-6)\).`, expr("2k^3"),
      "Développe les deux, puis regroupe. Certains termes s'annulent.", [String.raw`\(3k^3-6k^2-k^3+6k^2\).`, String.raw`\(k^3\) : \(3-1=2\); \(k^2\) : \(-6+6=0\).`], String.raw`\(2k^3\)`),
    q("factoriser", String.raw`Factorise complètement \(14a^3-21a^2+7a\).`, expr("7a(2a^2-3a+1)", false),
      String.raw`Le PGFC de \(14, 21, 7\) et la plus petite puissance de \(a\).`, [String.raw`PGFC \(=7a\).`, String.raw`\(14a^3\div7a=2a^2\), \(-21a^2\div7a=-3a\), \(7a\div7a=1\).`], String.raw`\(7a(2a^2-3a+1)\)`, { placeholder: "un produit, comme 3x(x - 2)" }),
  ]),

  wrapUp({
    qas: [
      [String.raw`Pourquoi \(4(x+3)\) n'est-il pas \(4x+3\)?`, String.raw`Le modèle d'aire le montre : un rectangle de \(4\) sur \((x+3)\) est formé d'un morceau de \(4\) sur \(x\) <em>et</em> d'un morceau de \(4\) sur \(3\), donc l'aire est \(4x+12\). Teste pour \(x=1\) : \(4(4)=16\), et \(4x+12=16\), mais \(4x+3=7\).`],
      [String.raw`Quand je multiplie \(x^2\) par \(x^3\), est-ce que je multiplie les exposants?`, String.raw`Non — additionne-les : \(x^2\cdot x^3=x\cdot x\cdot x\cdot x\cdot x=x^5\). On multiplie les exposants seulement pour une puissance d'une puissance : \((x^2)^3=x^6\).`],
      [String.raw`Dans \(15-10(x-4)\), pourquoi ne puis-je pas calculer \(15-10\) d'abord?`, String.raw`La multiplication passe avant la soustraction. Le \(10\) multiplie la parenthèse, alors développe d'abord : \(15-10x+40=55-10x\). Calculer \(15-10=5\) d'abord donnerait \(5x-20\), ce qui est faux (essaie \(x=0\) : \(55\) contre \(-20\)).`],
      ["Comment savoir si j'ai factorisé complètement?", "Les termes qui restent dans la parenthèse ne doivent avoir aucun facteur commun autre que 1 — vérifie les coefficients et chaque variable. Développe ensuite ta réponse pour t'assurer de retrouver l'expression de départ."],
      ["Comment vérifier rapidement une réponse développée et simplifiée?", String.raw`Substitue une petite valeur comme \(x=2\) dans l'expression de départ et dans ta réponse. Si les résultats diffèrent, il y a une erreur. (Évite \(0\) et \(1\) : ils peuvent cacher des erreurs d'exposants.)`],
    ],
    summary: [
      String.raw`\(a(b+c)=ab+ac\) : multiplie le terme extérieur par chaque terme intérieur, avec les règles des signes des nombres entiers.`,
      "Monôme × monôme : multiplie les coefficients, additionne les exposants d'une même variable.",
      "Développer et simplifier : développe d'abord chaque parenthèse, puis regroupe les termes semblables; vérifie par substitution.",
      "Factoriser, c'est mettre le PGFC en évidence : l'inverse de développer.",
    ],
    next: "La leçon 2.4 utilise des expressions pour construire des équations, et les résout avec les opérations inverses et le modèle de la balance.",
  }),
];
