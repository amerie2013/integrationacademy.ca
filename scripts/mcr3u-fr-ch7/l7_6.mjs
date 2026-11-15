// MCR3U-FR 7.6 — Séries géométriques : démonstration de S_n = a(rⁿ − 1)/(r − 1), compter les termes, séries alternées,
// applications (chaînes téléphoniques, balles qui rebondissent), trouver n et r. Miroir de ../mcr3u-ch7/l7_6.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.6 Séries géométriques";
export const ID = lessonId(7, 6);
const S = String.raw;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const ball = 10 + (2 * 7.5 * (1 - 0.75 ** 5)) / 0.25;

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Séries géométriques",
    overview: S`Une <strong>série géométrique</strong> est la somme d'une suite géométrique. Multiplie la somme \(S_n=a+ar+\cdots+ar^{n-1}\) par \(r\) et soustrais : presque tous les termes s'annulent, et il reste \(rS_n-S_n=ar^n-a\). Donc \(S_n=\frac{a(r^n-1)}{r-1}\) pour \(r\ne1\). Dans cette leçon, tu vas utiliser cette formule, compter d'abord les termes, traiter les raisons négatives et résoudre des problèmes de chaînes téléphoniques, de balles qui rebondissent et de croissance.`,
    goals: [
      "démontrer S_n = a(rⁿ − 1)/(r − 1) en multipliant puis en soustrayant;",
      "trouver la somme d'un nombre donné de termes;",
      "compter les termes d'une série géométrique finie avant de l'additionner;",
      "travailler avec des séries alternées (r < 0) et décroissantes (0 < r < 1);",
      "résoudre des problèmes, y compris trouver n ou r.",
    ],
    curriculum: "C3.3 (déterminer, par exploration à l'aide de divers outils et stratégies, la formule de la somme d'une série géométrique, et l'appliquer pour calculer la somme d'un nombre donné de termes consécutifs), C3.4 (résoudre des problèmes portant sur des suites et des séries géométriques, y compris des problèmes tirés de situations réelles)",
    prior: [
      [S`Évalue \(2^{10}\).`, "1024."],
      [S`Quel est le rang du terme 4374 dans 2, 6, 18, …?`, "le 8<sup>e</sup>."],
      [S`Évalue \((-3)^4\).`, "81."],
    ],
    words: [
      ["Série géométrique", "\\(a+ar+ar^2+\\cdots+ar^{n-1}\\)", ""],
      ["Formule de la somme", "\\(S_n=\\frac{a(r^n-1)}{r-1},\\ r\\ne1\\)", ""],
      ["Forme équivalente", "\\(S_n=\\frac{a(1-r^n)}{1-r}\\) (pratique quand 0 < r < 1)", ""],
      ["Forme avec le dernier terme", "\\(S_n=\\frac{r\\,t_n-a}{r-1}\\)", ""],
    ],
  }),

  section("📌 Pourquoi la formule fonctionne", S`
  ${table(["Ligne", "Expression"], [["\\(S_n\\)", "\\(a+ar+ar^2+\\cdots+ar^{n-1}\\)"], ["\\(rS_n\\)", "\\(ar+ar^2+\\cdots+ar^{n-1}+ar^n\\)"], ["soustraire", "\\(rS_n-S_n=ar^n-a\\)"], ["isoler", "\\(S_n=\\frac{a(r^n-1)}{r-1}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 9 }, points: Array.from({ length: 8 }, (_, i) => ({ x: i + 1, y: 8 * (1 - 0.5 ** (i + 1)) })), lines: [{ m: 0, b: 8, color: "amber", dash: true, label: "8" }], step: { x: 1, y: 1 }, xlabel: "n", ylabel: "Sₙ" }, "les sommes partielles de 4 + 2 + 1 + 0.5 + … se rapprochent lentement de 8")}
  ${keyIdea(S`Quand \(0<r<1\), les termes diminuent; les sommes partielles se stabilisent donc près de \(\frac a{1-r}\). Quand \(r>1\), les sommes augmentent très rapidement.`)}`),

  section("📌 Explore", S`<p>Modifie r. Compare les sommes partielles pour r = 2, r = 0.5 et r = −0.5.</p>`),

  widget("geoSums", { init: [4, 0.5] }),

  section("📌 Attention", watchOut([
    "n est le nombre de termes — trouve-le avant d'additionner.",
    "Les parenthèses comptent : (−2)ⁿ, et non −2ⁿ.",
    "La formule ne fonctionne pas quand r = 1 (division par 0) — dans ce cas, S_n = n·a.",
    "Utilise la forme « petite puissance » a(1 − rⁿ)/(1 − r) pour éviter les erreurs de signe quand r < 1.",
  ])),

  examples([
    ["Une série croissante", S`Trouve \(S_6\) pour \(3+6+12+\cdots\)`,
      [S`<b>Repérer.</b> \(a=3\), \(r=2\), \(n=6\).`,
        S`<b>Formule.</b> \(S_n=\frac{a(r^n-1)}{r-1}\). Elle vient de la soustraction de \(S_n\) et \(rS_n\), qui annule les termes du milieu.`,
        S`<b>Substituer.</b> \(S_6=\frac{3(2^6-1)}{2-1}=3(63)\).`,
        S`<b>Évaluer.</b> \(189\).`,
        S`<b>Vérifier en additionnant.</b> \(3+6+12+24+48+96=189\) ✓`],
      "189",
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 210 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 3 * (2 ** n - 1) })).concat([{ x: 6, y: 189, label: "(6, 189)", color: "amber" }]), step: { x: 1, y: 20 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Une série décroissante", S`Trouve \(S_8\) pour \(128+64+32+\cdots\)`,
      [S`<b>Repérer.</b> \(a=128\), \(r=0.5\), \(n=8\). Puisque \(r<1\), la forme \(\frac{a(1-r^n)}{1-r}\) évite les signes négatifs.`,
        S`<b>Substituer.</b> \(S_8=\frac{128\left(1-0.5^8\right)}{1-0.5}\).`,
        S`<b>Simplifier.</b> Diviser par \(0.5\) revient à doubler : \(256\left(1-\frac1{256}\right)\).`,
        S`<b>Évaluer.</b> \(256-1=255\).`,
        S`<b>Vérifier en additionnant.</b> \(128+64+32+16+8+4+2+1=255\) ✓. La somme se rapproche lentement de 256, comme le montre le graphique.`],
      "255",
      plane({ view: { xmin: 0, xmax: 10, ymin: 100, ymax: 270 }, points: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ x: n, y: 256 * (1 - 0.5 ** n), label: n === 8 ? "(8, 255)" : undefined, color: n === 8 ? "amber" : "blue" })), lines: [{ m: 0, b: 256, color: "gray", dash: true }], step: { x: 1, y: 20 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Compter d'abord", "Trouve 2 + 6 + 18 + … + 4374.",
      [S`<b>Repérer.</b> \(a=2\), \(r=3\). Le dernier terme est donné; trouve donc d'abord \(n\).`,
        S`<b>Trouver \(n\).</b> \(2(3)^{n-1}=4374\), donc \(3^{n-1}=2187=3^7\). Ainsi, \(n-1=7\) et \(n=8\).`,
        S`<b>Somme.</b> \(S_8=\frac{2(3^8-1)}{3-1}=\frac{2(6560)}2=6560\).`,
        S`<b>Vérification.</b> \(S_8=\frac{rt_8-a}{r-1}=\frac{3(4374)-2}2=\frac{13\,120}2=6560\) ✓`],
      "6560",
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 7000 }, points: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: 3 ** n - 1 })).concat([{ x: 8, y: 6560, label: "(8, 6560)", color: "amber" }]), step: { x: 1, y: 1000 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Une chaîne téléphonique", "Une entraîneuse appelle 3 joueurs; chacun d'eux en appelle 3 autres, et ainsi de suite sur 5 niveaux (l'entraîneuse est le niveau 1). Combien de personnes font partie de la chaîne?",
      [S`<b>Modéliser.</b> Chaque niveau compte 3 fois plus de personnes que le niveau précédent : \(1,3,9,27,81\).`,
        S`<b>Repérer.</b> \(a=1\), \(r=3\), \(n=5\).`,
        S`<b>Somme.</b> \(S_5=\frac{1(3^5-1)}{3-1}=\frac{242}2=121\).`,
        S`<b>Vérifier en additionnant.</b> \(1+3+9+27+81=121\) ✓`],
      "121 personnes",
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 130 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: (3 ** n - 1) / 2, label: String((3 ** n - 1) / 2) })), step: { x: 1, y: 20 }, xlabel: "niveaux", ylabel: "personnes jusqu'ici" })],
    ["Une série alternée", S`Trouve la somme des 8 premiers termes de \(5-10+20-\cdots\)`,
      [S`<b>Repérer.</b> \(a=5\), \(r=\frac{-10}5=-2\), \(n=8\).`,
        S`<b>Substituer.</b> Mets la raison négative entre parenthèses : \(S_8=\frac{5\left((-2)^8-1\right)}{-2-1}\).`,
        S`<b>Évaluer la puissance.</b> \((-2)^8=256\) : une puissance paire, donc positive.`,
        S`<b>Terminer.</b> \(\frac{5(255)}{-3}=\frac{1275}{-3}=-425\).`,
        S`<b>Vérifier par paires.</b> \((5-10)+(20-40)+(80-160)+(320-640)=-5-20-80-320=-425\) ✓`],
      S`\(-425\)`,
      plane({ view: { xmin: 0, xmax: 9, ymin: -500, ymax: 300 }, points: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: (5 * ((-2) ** n - 1)) / -3 })).concat([{ x: 8, y: -425, label: "(8, −425)", color: "amber" }]), step: { x: 1, y: 100 }, xlabel: "n", ylabel: "Sₙ" })],
  ]),

  practice([
    q("somme", S`Trouve \(S_5\) pour \(1+4+16+\cdots\)`, num(341),
      "(4⁵ − 1)/3.", [S`\(1023\div3\).`], S`\(341\)`),
    q("alternée", S`Trouve \(S_6\) pour \(2-6+18-\cdots\)`, num(-364),
      "r = −3.", [S`\(\frac{2(729-1)}{-4}\).`], S`\(-364\)`),
    q("puissances de 2", S`Trouve \(1+2+4+\cdots+512\).`, num(1023),
      "10 termes.", [S`\(2^{10}-1\).`], S`\(1023\)`),
    q("décroissante", S`Trouve \(81+27+9+3\).`, num(120),
      "Additionne, ou utilise la formule.", [S`\(\frac{81(1-(1/3)^4)}{2/3}\).`], S`\(120\)`),
    q("formule", "Quelle formule donne la somme de n termes d'une série géométrique (r ≠ 1)?", choice([S`\(S_n=\frac{a(r^n-1)}{r-1}\)`, S`\(S_n=\frac n2(a+t_n)\)`, S`\(S_n=ar^{n-1}\)`, S`\(S_n=\frac{a(r-1)}{r^n-1}\)`], 0),
      "Multiplie par r et soustrais.", ["Démonstration ci-dessus."], S`\(\frac{a(r^n-1)}{r-1}\)`),
  ]),

  ...hard([
    ["La distance totale parcourue par une balle", "On laisse tomber une balle d'une hauteur de 10 m, et chaque rebond atteint 75 % de la hauteur précédente. Quelle distance a-t-elle parcourue quand elle touche le sol pour la 6<sup>e</sup> fois?",
      [S`10 m vers le bas, puis une montée et une descente à chaque rebond : \(10+2(7.5+5.625+\cdots)\), 5 rebonds.`, S`\(10+2\cdot\frac{7.5(1-0.75^5)}{0.25}\).`],
      S`\(\approx${f(ball)}\) m`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 11 }, segs: [{ pts: [[0, 10], [1, 0], [1.5, 7.5], [2, 0], [2.5, 5.625], [3, 0], [3.5, 4.219], [4, 0], [4.5, 3.164], [5, 0], [5.5, 2.373], [6, 0]], color: "violet" }], step: { x: 1, y: 1 }, xlabel: "rebond", ylabel: "hauteur (m)" })],
    ["Atteindre un total", "Combien de termes de 3 + 6 + 12 + … faut-il pour que la somme atteigne au moins 3000?",
      [S`\(3(2^n-1)\ge3000\Rightarrow2^n\ge1001\).`, S`\(2^9=512\), \(2^{10}=1024\).`],
      S`\(n=10\)`],
  ], [
    q("difficile", S`Combien de termes de \(1+3+9+\cdots\) donnent une somme de 3280?`, num(8),
      "(3ⁿ − 1)/2 = 3280.", [S`\(3^n=6561=3^8\).`], S`\(8\)`),
    q("difficile", S`Une série géométrique avec \(r>0\) a \(t_1=6\) et \(S_3=78\). Trouve \(r\).`, num(3),
      "6(1 + r + r²) = 78.", [S`\(r^2+r-12=0\).`], S`\(3\)`),
    q("difficile", "De quelle valeur les sommes partielles de 8 + 4 + 2 + 1 + … se rapprochent-elles?", num(16),
      "a/(1 − r).", [S`\(\frac8{1-\frac12}\).`], S`\(16\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi multiplier par r?", "Cela décale chaque terme d'un rang; la soustraction annule donc tout sauf le premier et le dernier terme."],
      ["Quelle forme de la formule dois-je utiliser?", "a(rⁿ − 1)/(r − 1) pour r > 1; a(1 − rⁿ)/(1 − r) pour r < 1 — elles sont égales."],
      ["Et si r = 1?", "Chaque terme vaut a, donc Sₙ = n·a."],
      ["Comment trouver n?", "Résous d'abord tₙ = dernier terme, ou résous Sₙ = total à l'aide des puissances."],
      ["Les séries décroissantes ont-elles une limite?", "Oui : quand |r| < 1, les sommes partielles se rapprochent de a/(1 − r)."],
    ],
    summary: [
      "Sₙ = a(rⁿ − 1)/(r − 1), r ≠ 1.",
      "Compte d'abord les termes.",
      "Mets les raisons négatives entre parenthèses.",
      "|r| < 1 : les sommes se stabilisent près de a/(1 − r).",
    ],
    next: "En 7.7, on explore le triangle de Pascal et le développement du binôme.",
  }),
];
