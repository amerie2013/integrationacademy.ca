// MHF4U-FR 3.5 — Modèles de fonctions rationnelles : coût moyen, concentration, intensité selon l'inverse du carré,
// temps de parcours et taux de travail; asymptotes en contexte; taux de variation moyen et instantané.
// (c désigne ici la vitesse du courant, pas un paramètre de transformation : aucune permutation c↔d.)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane, rat } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "3.5 Modèles de fonctions rationnelles";
export const ID = lessonId(3, 5);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🏭",
    title: "Modèles de fonctions rationnelles",
    overview: S`Les fonctions rationnelles modélisent des situations où une quantité est répartie selon une autre : le coût par article, la concentration d'un mélange, la durée d'un trajet à une vitesse donnée, la luminosité à une certaine distance. Leurs asymptotes ont un sens — la valeur à long terme, ou une valeur qui ne peut jamais être atteinte — et leurs taux de variation indiquent à quelle vitesse la quantité augmente ou diminue. Dans cette leçon, tu vas construire, lire et résoudre des modèles rationnels, et calculer leurs taux de variation moyens et instantanés.`,
    goals: [
      "écrire des modèles rationnels de coût moyen, de concentration, de temps de parcours et de taux de travail;",
      "interpréter les asymptotes, les coordonnées à l'origine et les restrictions selon le contexte;",
      "résoudre les équations et les inéquations rationnelles issues de modèles;",
      "calculer des taux de variation moyens de fonctions rationnelles;",
      "estimer des taux de variation instantanés de fonctions rationnelles.",
    ],
    curriculum: "C3.7 (résoudre des problèmes portant sur des applications des fonctions polynomiales et rationnelles), D1.9 (résoudre des problèmes portant sur les taux de variation moyen et instantané, y compris de fonctions rationnelles)",
    prior: [
      [S`Une machine de 300 dollars fabrique 50 articles. Coût fixe par article?`, S`6 dollars.`],
      [S`Asymptote horizontale de \(\frac{8x+500}{x}\)?`, S`\(y=8\).`],
      [S`Taux de variation moyen de \(f\) sur \([a,b]\)?`, S`\(\frac{f(b)-f(a)}{b-a}\).`],
    ],
    words: [
      ["Coût moyen", "coût total ÷ nombre d'articles", "\\(\\frac{F+vx}{x}\\)"],
      ["Concentration", "quantité de substance ÷ volume", "g/L"],
      ["Loi de l'inverse du carré", "\\(I=\\frac k{d^2}\\)", "lumière, son"],
      ["Taux de travail", "fraction d'une tâche par heure, \\(\\frac1t\\)", ""],
    ],
  }),

  section("📌 Modèles courants", S`
  ${table(["Situation", "Modèle", "Signification de l'asymptote horizontale"], [
    ["coût moyen", "\\(A(x)=\\frac{F+vx}{x}=v+\\frac Fx\\)", "le coût par article, v"],
    ["mélange", "\\(C(t)=\\frac{\\text{quantité}_0+rt}{V_0+qt}\\)", "la concentration de ce qui est ajouté"],
    ["durée d'un trajet", "\\(t(v)=\\frac dv\\)", "durée → 0 quand la vitesse augmente"],
    ["inverse du carré", "\\(I(d)=\\frac k{d^2}\\)", "intensité → 0 au loin"],
    ["travail", "\\(\\frac1a+\\frac1b=\\frac1T\\)", "les taux s'additionnent, pas les durées"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 120, ymin: 0, ymax: 40 }, curves: [{ f: (x) => 8 + 500 / x, a: 15, b: 120, color: "violet" }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [{ x: 50, y: 18, label: "(50, 18)", color: "blue" }, { x: 100, y: 13, label: "(100, 13)", color: "blue" }], step: { x: 10, y: 5 }, xlabel: "articles", ylabel: "dollars par article" }, "A(x) = (500 + 8x)/x : le coût moyen diminue vers 8 dollars par article.")}
  ${keyIdea(S`Les taux de variation d'un modèle rationnel utilisent les mêmes formules qu'avant : taux moyen \(\frac{f(b)-f(a)}{b-a}\); taux instantané ≈ \(\frac{f(a+h)-f(a-h)}{2h}\) pour une petite valeur de \(h\). Pour \(A(x)=v+\frac Fx\), les deux sont négatifs et diminuent vers 0 : le coût continue de baisser, mais de plus en plus lentement.`)}`),

  section("📌 Explore", S`<p>Modifie le coût fixe, le coût par article et le point \(x_0\). Compare la sécante ambre (taux moyen) et la tangente verte (taux instantané).</p>`),

  widget("rationalModel", { init: { F: 300, v: 6, x0: 25 } }),

  section("📌 Lire un modèle", S`
  <p>Avant de résoudre, décide quelles valeurs d'entrée ont du sens (articles ≥ 1, temps ≥ 0, vitesse > 0) et ce que les asymptotes disent en mots.</p>
  ${watchOut([
    "Le coût moyen est le coût total DIVISÉ par le nombre d'articles — pas le coût total.",
    "Dans les problèmes de travail, on additionne les TAUX (tâches par heure), pas les durées.",
    "Unités d'un taux de variation : unités de sortie par unité d'entrée (dollars par article, g/L par minute).",
    "Un modèle rationnel n'est valide que sur son domaine sensé; l'autre branche n'a pas de sens.",
    "Garde les fractions exactes jusqu'à la fin, puis arrondis.",
  ])}`),

  examples([
    ["Coût moyen", S`Le coût moyen d'un atelier est \(A(x)=\dfrac{500+8x}{x}\) dollars par article. Trouve \(A(50)\), l'asymptote horizontale et le nombre d'articles qui donne un coût moyen de 10 dollars.`,
      [S`<b>Évalue.</b> \(A(50)=\frac{500+400}{50}=\frac{900}{50}=18\).`,
        S`<b>Asymptote.</b> Sépare la fraction : \(A(x)=8+\frac{500}x\). Quand \(x\) augmente, \(\frac{500}x\to0\), donc \(y=8\).`,
        S`<b>Signification.</b> Le coût fixe de 500 est réparti sur plus d'articles, mais aucun article ne peut coûter moins que les 8 dollars nécessaires pour le fabriquer.`,
        S`<b>Résous.</b> \(\frac{500+8x}x=10\) donne \(500+8x=10x\), donc \(x=250\).`,
        S`<b>Vérification.</b> \(A(250)=8+2=10\) ✓`],
      S`18 dollars; AH 8 dollars par article; 250 articles`,
      plane({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 30 }, curves: [{ f: (x) => 8 + 500 / x, a: 20, b: 500, color: "violet" }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [{ x: 50, y: 18, label: "(50, 18)" }, { x: 250, y: 10, label: "(250, 10)", color: "amber" }], step: { x: 50, y: 5 }, xlabel: "x", ylabel: "A" })],
    ["Concentration", S`Un réservoir contient 100 L d'eau avec 10 g de sel. De la saumure à 0.5 g/L y entre à raison de 10 L/min. Écris la concentration \(C(t)\), puis trouve \(C(10)\) et la valeur à long terme.`,
      [S`<b>Sel.</b> Chaque minute ajoute \(10\times0.5=5\) g : \(10+5t\).`,
        S`<b>Volume.</b> Chaque minute ajoute 10 L : \(100+10t\).`,
        S`<b>Modèle.</b> La concentration est la quantité de sel sur le volume : \(C(t)=\dfrac{10+5t}{100+10t}\).`,
        S`<b>Évalue.</b> \(C(10)=\frac{60}{200}=0.3\) g/L.`,
        S`<b>À long terme.</b> L'AH est \(\frac5{10}=0.5\) g/L. C'est logique : c'est la concentration de la saumure qui entre ✓`],
      S`\(C(10)=0.3\) g/L; \(C\to0.5\) g/L`,
      plane({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 0.6 }, curves: [{ f: (t) => (10 + 5 * t) / (100 + 10 * t), a: 0, b: 100, color: "violet" }], lines: [{ m: 0, b: 0.5, color: "red", dash: true }], points: [{ x: 10, y: 0.3, label: "(10, 0.3)", color: "blue" }], step: { x: 10, y: 0.1 }, xlabel: "t (min)", ylabel: "C (g/L)" })],
    ["Loi de l'inverse du carré", S`L'intensité lumineuse est \(I(d)=\dfrac{100}{d^2}\) à une distance de \(d\) m. Trouve le taux de variation moyen sur \([1,2]\) et estime le taux de variation instantané en \(d=2\).`,
      [S`<b>Moyen.</b> \(I(1)=100\) et \(I(2)=25\) : \(\frac{25-100}{2-1}=-75\) unités par m.`,
        S`<b>Instantané.</b> Intervalle centré avec \(h=0.01\) : \(I(2.01)\approx24.752\) et \(I(1.99)\approx25.252\).`,
        S`<b>Quotient.</b> \(\frac{24.752-25.252}{0.02}\approx-25\).`,
        S`<b>Interprétation.</b> Les deux sont négatifs, puisque la lumière faiblit avec la distance. Le taux à 2 m est plus petit en valeur absolue parce que la courbe s'aplatit ✓`],
      S`moyen \(-75\); instantané \(\approx-25\) unités par mètre`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 120 }, curves: [{ f: (d) => 100 / (d * d), a: 0.9, b: 5, color: "violet" }], points: [{ x: 1, y: 100, label: "(1, 100)", color: "blue" }, { x: 2, y: 25, label: "(2, 25)", color: "blue" }], lines: [{ m: -75, b: 175, color: "amber" }], step: { x: 0.5, y: 20 }, xlabel: "d (m)", ylabel: "I" })],
    ["Durée d'un trajet", S`Un trajet de 120 km à la vitesse \(v\) km/h dure \(t(v)=\dfrac{120}v\) h. Trouve le taux de variation moyen de \(t\) de \(v=60\) à \(v=80\).`,
      [S`<b>Valeurs.</b> \(t(60)=2\) et \(t(80)=1.5\).`,
        S`<b>Calcul.</b> \(\frac{1.5-2}{80-60}=\frac{-0.5}{20}=-0.025\) h par km/h.`,
        S`<b>Interprétation.</b> Chaque km/h de plus fait gagner environ \(0.025\) h, soit 1.5 minute.`,
        S`<b>Vraisemblance.</b> Le signe négatif est logique : aller plus vite prend moins de temps ✓`],
      S`\(-0.025\) h par km/h (environ 1.5 min gagnée par km/h de plus)`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 5 }, curves: [{ f: (v) => 120 / v, a: 25, b: 130, color: "violet" }], points: [{ x: 60, y: 2, label: "(60, 2)", color: "blue" }, { x: 80, y: 1.5, label: "(80, 1.5)", color: "blue" }], step: { x: 10, y: 0.5 }, xlabel: "v (km/h)", ylabel: "t (h)" })],
    ["Deux tuyaux", S`Un tuyau remplit un réservoir en 6 h. Avec un deuxième tuyau, le réservoir se remplit en 4 h. Combien de temps le deuxième tuyau prendrait-il seul?`,
      [S`<b>Taux.</b> Un tuyau qui prend 6 h remplit \(\frac16\) du réservoir par heure. Soit \(x\) h le temps du deuxième; son taux est donc \(\frac1x\).`,
        S`<b>Les taux s'additionnent.</b> \(\frac16+\frac1x=\frac14\).`,
        S`<b>Résous.</b> \(\frac1x=\frac14-\frac16=\frac3{12}-\frac2{12}=\frac1{12}\), donc \(x=12\).`,
        S`<b>Vérification.</b> En 4 h : \(\frac46+\frac4{12}=\frac23+\frac13=1\) réservoir plein ✓`],
      S`12 h`,
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 1.4 }, lines: [{ m: 1 / 6, b: 0, color: "blue" }, { m: 1 / 12, b: 0, color: "green" }, { m: 0.25, b: 0, color: "violet" }, { m: 0, b: 1, color: "gray", dash: true }], points: [{ x: 4, y: 1, label: "les deux : 4 h", color: "violet" }, { x: 6, y: 1, label: "premier : 6 h", color: "blue" }, { x: 12, y: 1, label: "deuxième : 12 h", color: "amber" }], step: { x: 1, y: 0.2 }, xlabel: "t (h)", ylabel: "réservoir rempli" })],
  ]),

  practice([
    q("coût moyen", S`\(A(x)=\dfrac{300+5x}{x}\). Trouve \(A(60)\).`, num(10),
      "Remplace x par 60.", [S`\(\frac{600}{60}\).`], S`\(10\)`),
    q("à long terme", S`Une concentration est \(C(t)=\dfrac{20+2t}{50+t}\) g/L. De quelle valeur s'approche-t-elle quand \(t\) augmente?`, num(2),
      "Rapport des coefficients dominants.", [S`\(\frac21\).`], S`\(2\) g/L`),
    q("travail", S`Résous \(\dfrac14+\dfrac1x=\dfrac13\).`, num(12),
      "1/x = 1/3 − 1/4.", [S`\(\frac1{12}\).`], S`\(12\)`),
    q("taux", S`Trouve le taux de variation moyen de \(t(v)=\dfrac{120}v\) de \(v=40\) à \(v=60\).`, num(-0.05, 0.0001),
      "(t(60) − t(40)) ÷ 20.", [S`\(\frac{2-3}{20}\).`], S`\(-0.05\)`),
    q("résoudre", S`Pour \(A(x)=\dfrac{300+5x}{x}\), combien d'articles donnent un coût moyen de 8 dollars?`, num(100),
      "300 + 5x = 8x.", [S`\(3x=300\).`], S`\(100\)`),
  ]),

  ...hard([
    ["Un médicament dans le sang", S`La concentration d'un médicament est \(C(t)=\dfrac{5t}{t^2+4}\) mg/L après \(t\) h. a) Quand a-t-on \(C\ge1\)? b) Trouve le taux de variation moyen sur \([1,3]\) et estime le taux de variation instantané en \(t=1\).`,
      [S`a) \(5t\ge t^2+4\Rightarrow t^2-5t+4\le0\Rightarrow(t-1)(t-4)\le0\) : \(1\le t\le4\).`, S`b) \(C(1)=1\), \(C(3)=\frac{15}{13}\approx1.154\) : moyen \(\approx\frac{0.154}{2}\approx0.077\) mg/L par h.`, S`Estimation centrée en \(t=1\) : \(\frac{C(1.01)-C(0.99)}{0.02}\approx0.6\) mg/L par h.`],
      S`a) \(1\le t\le4\) h; b) \(\approx0.077\) et \(\approx0.6\) mg/L par h`,
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 1.6 }, curves: [{ f: (t) => (5 * t) / (t * t + 4), a: 0, b: 10, color: "violet" }, { f: () => 1, color: "green" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "blue" }, { x: 4, y: 1, label: "(4, 1)", color: "blue" }, { x: 2, y: 1.25, label: "max (2, 1.25)", color: "amber" }], step: { x: 1, y: 0.2 }, xlabel: "t (h)", ylabel: "C (mg/L)" })],
    ["En amont et en aval", S`Un bateau se déplace à 10 km/h en eau calme. Un trajet de 24 km en remontant le courant, puis le retour, dure 5 h. Trouve la vitesse du courant.`,
      [S`\(\dfrac{24}{10-c}+\dfrac{24}{10+c}=5\).`, S`\(24(10+c)+24(10-c)=5(100-c^2)\Rightarrow480=500-5c^2\Rightarrow c^2=4\).`],
      S`2 km/h`],
  ], [
    q("difficile", S`Pour \(C(t)=\dfrac{5t}{t^2+4}\), trouve \(C(4)\).`, num(1),
      "Remplace t par 4.", [S`\(\frac{20}{20}\).`], S`\(1\)`),
    q("difficile", S`Résous \(\dfrac{30}x+\dfrac{30}{x+5}=5\) pour \(x>0\).`, num(10),
      "Multiplie par x(x + 5).", [S`\(60x+150=5x^2+25x\Rightarrow x^2-7x-30=0\Rightarrow x=10\).`], S`\(10\)`),
    q("difficile", S`Pour \(A(x)=\dfrac{800+12x}{x}\), trouve le plus petit nombre d'articles tel que \(A(x)\le20\).`, num(100),
      "800 + 12x ≤ 20x.", [S`\(800\le8x\).`], S`\(100\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le coût moyen a-t-il une asymptote horizontale?", "A(x) = v + F/x : quand x augmente, le coût fixe F est réparti sur tant d'articles que F/x → 0, ce qui laisse le coût par article v."],
      ["Pourquoi les taux de travail s'additionnent-ils?", "Chaque tuyau remplit une fraction du réservoir par heure; quand ils fonctionnent ensemble, ces fractions s'additionnent. Les durées, elles, ne s'additionnent pas."],
      ["Comment estimer un taux instantané pour un modèle rationnel?", "Utilise un intervalle centré : (f(a + h) − f(a − h))/(2h) avec une petite valeur de h, comme 0.01."],
      ["Que signifie ici un taux de variation négatif?", "La quantité diminue — par exemple, le coût moyen ou l'intensité baisse quand x ou d augmente."],
      ["Comment choisir le domaine?", "Utilise le contexte : les dénombrements sont des nombres entiers ≥ 1, les durées et les distances sont positives, les vitesses doivent garder les dénominateurs positifs."],
    ],
    summary: [
      "Modèles : v + F/x, mélanges, k/d², d/v, 1/a + 1/b.",
      "Asymptotes = valeurs à long terme ou impossibles.",
      "Résoudre les modèles à l'aide d'équations et d'inéquations rationnelles.",
      "Taux : sécante (moyen), estimation centrée (instantané).",
    ],
    next: "La section 3.6 révise le chapitre.",
  }),
];
