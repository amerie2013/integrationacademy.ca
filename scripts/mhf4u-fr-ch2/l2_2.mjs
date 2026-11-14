// MHF4U-FR 2.2 — Théorème des facteurs : x − b est un facteur exactement lorsque P(b) = 0; tests des zéros entiers et
// rationnels, factorisation de polynômes de degré 3 et 4, factorisation par groupement, coefficients inconnus
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fexpr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.2 Théorème des facteurs";
export const ID = lessonId(2, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔑",
    title: "Théorème des facteurs",
    overview: S`Si la division de \(P(x)\) par \(x-b\) laisse un reste de 0, alors \(x-b\) est un facteur — et, d'après le théorème du reste, cela se produit exactement lorsque \(P(b)=0\). Ce <strong>théorème des facteurs</strong> transforme la factorisation d'un polynôme de degré 3 ou 4 en une recherche : teste des valeurs probables de \(b\), et chaque zéro trouvé donne un facteur. Les tests des zéros entiers et rationnels indiquent quelles valeurs valent la peine d'être testées.`,
    goals: [
      "énoncer et utiliser le théorème des facteurs;",
      "dresser la liste des zéros entiers et rationnels possibles d'un polynôme;",
      "factoriser complètement des polynômes de degré 3 et 4;",
      "factoriser par groupement lorsque les termes se regroupent par paires;",
      "trouver des coefficients inconnus pour qu'un binôme donné soit un facteur.",
    ],
    curriculum: "C3.1, C3.2 (utiliser le théorème des facteurs pour factoriser des expressions polynomiales de degré ≤ 4 à coefficients entiers, y compris par groupement)",
    prior: [
      [S`Quel est le reste de \(x^3-8\) divisé par \(x-2\)?`, S`\(P(2)=0\).`],
      [S`Factorise \(x^2-x-12\).`, S`\((x-4)(x+3)\).`],
      [S`Donne la liste des diviseurs de 12.`, S`\(\pm1,\pm2,\pm3,\pm4,\pm6,\pm12\).`],
    ],
    words: [
      ["Théorème des facteurs", "\\(x-b\\) est un facteur de \\(P(x)\\) ⇔ \\(P(b)=0\\)", ""],
      ["Théorème des zéros entiers", "les zéros entiers divisent le terme constant", "lorsque le coefficient dominant est 1"],
      ["Théorème des zéros rationnels", "zéros rationnels \\(\\tfrac pq\\) : p divise la constante, q divise le coefficient dominant", ""],
      ["Groupement", "regrouper les termes par paires pour faire apparaître un binôme commun", ""],
    ],
  }),

  section("📌 Des zéros aux facteurs", S`
  ${table(["Si tu sais que…", "alors…", "Exemple"], [
    ["P(b) = 0", "x − b est un facteur", "P(2) = 0 → (x − 2)"],
    ["P(b/a) = 0", "ax − b est un facteur", "P(3/2) = 0 → (2x − 3)"],
    ["x − b est un facteur", "le quotient P(x) ÷ (x − b) est de degré inférieur d'une unité", "degré 3 → degré 2"],
  ])}
  ${keyIdea(S`Pour factoriser un polynôme de degré 3 : (1) dresse la liste des candidats \(\pm\frac{\text{diviseurs de la constante}}{\text{diviseurs du coefficient dominant}}\); (2) teste jusqu'à ce que \(P(b)=0\); (3) divise par \(x-b\); (4) factorise le quotient du second degré (ou utilise la formule quadratique). Pour un polynôme de degré 4, recommence une fois de plus.`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -14, ymax: 10 }, curves: [{ f: (x) => (x + 1) * (x - 2) * (x - 3), color: "violet" }], points: [{ x: -1, y: 0, label: "P(−1) = 0", color: "green" }, { x: 2, y: 0, label: "P(2) = 0", color: "green" }, { x: 3, y: 0, label: "P(3) = 0", color: "green" }, { x: 1, y: 4, label: "P(1) = 4 : pas un facteur", color: "red" }], step: { x: 1, y: 2 } }, "x³ − 4x² + x + 6 = (x + 1)(x − 2)(x − 3) : chaque abscisse à l'origine donne un facteur.")}`),

  section("📌 Exploration", S`<p>Choisis les coefficients d'un polynôme de degré 3. Chaque candidat est testé pour toi; ceux en vert sont des zéros, et le polynôme est factorisé à l'aide de ceux-ci.</p>`),

  widget("factorFinder", { init: [2, -3, -11, 6] }),

  section("📌 Stratégies de factorisation", S`
  <p>Avant de tester, cherche un facteur commun et vérifie si un groupement est possible : \(x^3-2x^2-9x+18=x^2(x-2)-9(x-2)=(x-2)(x^2-9)\). Le groupement est plus rapide que le théorème des facteurs lorsque les coefficients forment des paires correspondantes.</p>
  ${watchOut([
    "Un zéro x = −3 donne le facteur (x + 3).",
    "Un zéro x = 3/2 donne (2x − 3), et non (x − 3/2) avec des fractions dans la réponse.",
    "Teste d'abord les petits candidats (±1, puis ±2) — ce sont les plus rapides à évaluer.",
    "Après la division, factorise complètement le quotient; il peut se factoriser encore.",
    "Ce ne sont pas tous les polynômes qui se factorisent avec des entiers; si aucun candidat ne fonctionne, les zéros sont irrationnels ou non réels.",
  ])}`),

  examples([
    ["Tester un facteur, puis terminer", S`\(x-2\) est-il un facteur de \(x^3-3x^2-4x+12\)? Si oui, factorise complètement.`,
      [S`<b>Théorème des facteurs.</b> \(x-b\) est un facteur exactement lorsque \(P(b)=0\).`,
        S`<b>Teste.</b> \(P(2)=8-12-8+12=0\), donc oui.`,
        S`<b>Divise.</b> La division synthétique avec 2 donne \(1,\ -1,\ -6\) et un reste de 0. Le quotient est donc \(x^2-x-6\).`,
        S`<b>Factorise le trinôme.</b> Produit \(-6\), somme \(-1\) : \(x^2-x-6=(x-3)(x+2)\).`,
        S`<b>Vérifie.</b> \(x=1\) : forme initiale \(1-3-4+12=6\); forme factorisée \((-1)(-2)(3)=6\) ✓`],
      S`\((x-2)(x-3)(x+2)\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 16 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 4 * x + 12, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }, { x: 3, y: 0, label: "3", color: "green" }], step: { x: 1, y: 2 } })],
    ["Chercher parmi les candidats entiers", S`Factorise \(x^3+2x^2-5x-6\).`,
      [S`<b>Théorème des zéros entiers.</b> Tout zéro entier divise la constante 6. Les candidats sont donc \(\pm1,\pm2,\pm3,\pm6\).`,
        S`<b>Teste.</b> \(P(1)=1+2-5-6=-8\), ce n'est pas un zéro. \(P(-1)=-1+2+5-6=0\) ✓`,
        S`<b>Divise.</b> La division par \(x+1\) donne \(1,\ 1,\ -6\) : le quotient \(x^2+x-6\).`,
        S`<b>Factorise.</b> \(x^2+x-6=(x+3)(x-2)\).`,
        S`<b>Vérifie.</b> \(x=0\) : \((1)(3)(-2)=-6\) ✓, le terme constant.`],
      S`\((x+1)(x+3)(x-2)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x ** 3 + 2 * x * x - 5 * x - 6, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "green" }, { x: -1, y: 0, label: "−1", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }], step: { x: 1, y: 2 } })],
    ["Un zéro rationnel", S`Factorise \(2x^3-x^2-7x+6\).`,
      [S`<b>Théorème des zéros rationnels.</b> Un zéro \(\frac pq\) a \(p\) qui divise 6 et \(q\) qui divise 2. Candidats : \(\pm1,\pm2,\pm3,\pm6,\pm\tfrac12,\pm\tfrac32\).`,
        S`<b>Teste les plus simples.</b> \(P(1)=2-1-7+6=0\) ✓`,
        S`<b>Divise.</b> La division par \(x-1\) donne \(2,\ 1,\ -6\) : le quotient \(2x^2+x-6\).`,
        S`<b>Factorise.</b> Produit \(-12\), somme 1 : \(4\) et \(-3\). Donc \(2x^2+4x-3x-6=(2x-3)(x+2)\).`,
        S`<b>Vérifie.</b> \(x=0\) : \((-1)(-3)(2)=6\) ✓`],
      S`\((x-1)(2x-3)(x+2)\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => 2 * x ** 3 - x * x - 7 * x + 6, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "green" }, { x: 1, y: 0, label: "1", color: "green" }, { x: 1.5, y: 0, label: "3/2", color: "green" }], step: { x: 0.5, y: 2 } })],
    ["Factoriser par groupement", S`Factorise \(x^3-2x^2-9x+18\).`,
      [S`<b>Repère la régularité.</b> Les deux premiers coefficients sont dans le même rapport que les deux derniers : \(1:-2\) et \(-9:18\). Cela suggère un groupement.`,
        S`<b>Groupe.</b> \(x^2(x-2)-9(x-2)\). Les parenthèses sont identiques.`,
        S`<b>Facteur commun.</b> \((x-2)(x^2-9)\).`,
        S`<b>Différence de carrés.</b> \(x^2-9=(x-3)(x+3)\).`,
        S`<b>Vérifie.</b> \(x=0\) : \((-2)(-3)(3)=18\) ✓`],
      S`\((x-2)(x-3)(x+3)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -12, ymax: 24 }, curves: [{ f: (x) => (x - 2) * (x - 3) * (x + 3), color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }, { x: 3, y: 0, label: "3", color: "green" }, { x: 0, y: 18, label: "(0, 18)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Un polynôme de degré 4", S`Factorise \(x^4-2x^3-7x^2+8x+12\).`,
      [S`<b>Plan.</b> Retire un facteur linéaire à la fois, jusqu'à ce qu'il reste un polynôme du second degré.`,
        S`<b>Premier facteur.</b> \(P(-1)=1+2-7-8+12=0\). La division par \(x+1\) donne \(x^3-3x^2-4x+12\).`,
        S`<b>Deuxième facteur.</b> \(Q(2)=8-12-8+12=0\). La division par \(x-2\) donne \(x^2-x-6\).`,
        S`<b>Trinôme.</b> \(x^2-x-6=(x-3)(x+2)\).`,
        S`<b>Vérifie.</b> \(x=0\) : \((1)(-2)(-3)(2)=12\) ✓. Le graphique coupe l'axe en \(-2,-1,2,3\) ✓`],
      S`\((x+1)(x-2)(x-3)(x+2)\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -16, ymax: 16 }, curves: [{ f: (x) => x ** 4 - 2 * x ** 3 - 7 * x * x + 8 * x + 12, color: "violet" }], points: [{ x: -2, y: 0, color: "green" }, { x: -1, y: 0, color: "green" }, { x: 2, y: 0, color: "green" }, { x: 3, y: 0, color: "green" }], step: { x: 1, y: 4 } })],
  ]),

  practice([
    q("est-ce un facteur?", S`\(x+3\) est-il un facteur de \(x^3+3x^2-x-3\)?`, choice(["oui", "non"], 0),
      "Évalue P(−3).", [S`\(-27+27+3-3=0\).`], "oui"),
    q("factorise", S`Factorise complètement \(x^3-7x+6\).`, fexpr("(x-1)(x-2)(x+3)"),
      "Essaie d'abord x = 1.", [S`\(P(1)=0\); quotient \(x^2+x-6=(x+3)(x-2)\).`], S`\((x-1)(x-2)(x+3)\)`),
    q("k inconnu", S`Trouve \(k\) pour que \(x-2\) soit un facteur de \(x^3+kx-6\).`, num(-1),
      "P(2) = 0.", [S`\(8+2k-6=0\).`], S`\(-1\)`),
    q("candidats", S`Combien de candidats entiers le théorème des zéros entiers donne-t-il pour \(x^3-3x^2+2x+8\)?`, num(8),
      "Les diviseurs de 8, positifs et négatifs.", [S`\(\pm1,\pm2,\pm4,\pm8\).`], S`\(8\)`),
    q("factorise", S`Factorise complètement \(2x^3+3x^2-3x-2\).`, fexpr("(x-1)(2x+1)(x+2)"),
      "P(1) = 0.", [S`Quotient \(2x^2+5x+2=(2x+1)(x+2)\).`], S`\((x-1)(2x+1)(x+2)\)`),
  ]),

  ...hard([
    ["Deux facteurs à la fois", S`Trouve \(k\) et \(m\) pour que \(x^2-x-2\) soit un facteur de \(P(x)=x^3+kx^2+mx+6\). Factorise ensuite \(P(x)\) complètement.`,
      [S`\(x^2-x-2=(x-2)(x+1)\), donc \(P(2)=0\) et \(P(-1)=0\).`, S`\(P(2)=8+4k+2m+6=0\Rightarrow 2k+m=-7\). \(P(-1)=-1+k-m+6=0\Rightarrow k-m=-5\).`, S`Additionne : \(3k=-12\Rightarrow k=-4\), \(m=1\). Alors \(P(x)=x^3-4x^2+x+6=(x-2)(x+1)(x-3)\).`],
      S`\(k=-4\), \(m=1\); \(P(x)=(x-2)(x+1)(x-3)\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 4 * x * x + x + 6, color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "green" }, { x: 2, y: 0, label: "2", color: "green" }, { x: 3, y: 0, label: "3", color: "green" }], step: { x: 1, y: 2 } })],
    ["Les facteurs de xⁿ − aⁿ", S`Montre que \(x-a\) est un facteur de \(x^n-a^n\) pour tout nombre naturel \(n\). Utilise ce résultat pour factoriser \(x^3-8\) et \(x^4-16\).`,
      [S`\(P(a)=a^n-a^n=0\), donc, d'après le théorème des facteurs, \(x-a\) est un facteur.`, S`\(x^3-8\) : la division par \(x-2\) donne \(x^2+2x+4\) (aucun zéro réel).`, S`\(x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)\).`],
      S`\(x^3-8=(x-2)(x^2+2x+4)\); \(x^4-16=(x-2)(x+2)(x^2+4)\)`],
  ], [
    q("difficile", S`Factorise complètement \(x^4-5x^2+4\).`, fexpr("(x-1)(x+1)(x-2)(x+2)"),
      "Traite-le comme un trinôme du second degré en x².", [S`\((x^2-1)(x^2-4)\).`], S`\((x-1)(x+1)(x-2)(x+2)\)`),
    q("difficile", S`Trouve \(k\) pour que \(x+1\) soit un facteur de \(2x^4+kx^3-3x+1\).`, num(6),
      "P(−1) = 0.", [S`\(2-k+3+1=0\).`], S`\(6\)`),
    q("difficile", S`Combien de zéros réels \(x^3-3x^2+x-3\) a-t-il?`, num(1),
      "Groupe les termes.", [S`\(x^2(x-3)+(x-3)=(x-3)(x^2+1)\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Quel est le lien entre le théorème des facteurs et le théorème du reste?", "C'est le cas particulier R = 0 : P(b) = 0 signifie que la division par x − b ne laisse aucun reste, donc x − b divise P exactement."],
      ["Quelles valeurs dois-je tester en premier?", "Les candidats entiers les plus proches de 0 (±1, ±2) : ils sont faciles à évaluer et fonctionnent souvent."],
      ["Pourquoi q doit-il diviser le coefficient dominant pour un zéro rationnel?", "Si (qx − p) est un facteur, en développant, q doit diviser le coefficient dominant et p le terme constant."],
      ["Que faire si aucun candidat ne fonctionne?", "Le polynôme n'a alors aucun zéro rationnel; ses zéros réels (s'il y en a) sont irrationnels et se trouvent à l'aide d'un graphique ou de la formule quadratique appliquée à un facteur."],
      ["Quand le groupement est-il préférable?", "Lorsque le rapport des deux premiers coefficients est égal au rapport des deux derniers, par exemple 1 : −2 et −9 : 18."],
    ],
    summary: [
      "x − b est un facteur ⇔ P(b) = 0.",
      "Candidats : ±(diviseurs de la constante)/(diviseurs du coefficient dominant).",
      "Retire chaque facteur par division; factorise le quotient.",
      "Le groupement et la différence de carrés font gagner du temps.",
    ],
    next: "La leçon 2.3 utilise la factorisation pour résoudre des équations polynomiales.",
  }),
];
