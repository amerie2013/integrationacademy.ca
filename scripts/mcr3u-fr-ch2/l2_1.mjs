// MCR3U-FR 2.1 — Addition et multiplication de polynômes (miroir français de ../mcr3u-ch2/t2_1.mjs, partie leçon).
// Chaque développement est calculé par le moteur de lib2 et comparé à la forme tapée à la main (kit.mjs).
import assert from "node:assert";
import { html, gframe, ex, pr, qa, watchOut, P, psub, ppow, peval, ptex, gx, verify, eqTable, areaModel, mistake, callout, sameGraph, challenge, gview } from "./lib.mjs";
import { X, S } from "./kit.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "2.1 Addition et multiplication de polynômes";
export const ID = lessonId(2, 1);
const M = (s) => `\\(${s}\\)`;
const r = String.raw;

// ───────────────────────── données de la leçon ─────────────────────────
const e1 = S("L-E1", "2x^2 + 6", "3x^2-7x+2", "x^2-7x-4", -1);
const e2 = X("L-E2", "-6x^3 + 2x^2 - 10x", "-2x", "3x^2-x+5");
const e3 = X("L-E3", "2x^2 + x - 15", "x+3", "2x-5");
const e4 = X("L-E4", "12x^2 + 13x - 14", "3x-2", "4x+7");
const e5a = X("L-E5a", "25x^2 - 40x + 16", "5x-4", "5x-4");
const e5b = X("L-E5b", "9x^2 - 49", "3x+7", "3x-7");
const e6 = X("L-E6", "2x^3 - x^2 - 11x + 10", "x^2-3x+2", "2x+5");
const e7 = X("L-E7", "x^3 - 6x^2 + 12x - 8", "x-2", "x-2", "x-2");
const e10 = X("L-E10", "x^4 - 1", "x-1", "x+1", "x^2+1");
const boxV = X("L-E9", "4x^3 - 36x^2 + 80x", "x", "10-2x", "8-2x");
X("L-CH", "x^4 + 10x^3 + 35x^2 + 50x + 24", "x+1", "x+2", "x+3", "x+4");
verify("L-E8 y=2", (x) => (2 * x - 3 * 2) * (x + 4 * 2), (x) => 2 * x * x + 5 * x * 2 - 12 * 4);
verify("L-CH perfect square", (x) => (x + 1) * (x + 2) * (x + 3) * (x + 4) + 1, (x) => (x * x + 5 * x + 5) ** 2);
const p1 = S("L-P1", "-x^2 + 4x - 13", "-2x^2+9x-5", "-x^2+5x+8", -1);
const p2 = X("L-P2", "-12x^3 + 20x^2 - 8x", "-4x", "3x^2-5x+2");
const p3 = X("L-P3", "6x^2 + 19x - 36", "2x+9", "3x-4");
const p5 = X("L-P5", "x^3 - 2x^2 - 9x + 4", "x^2+2x-1", "x-4");
const p6 = X("L-P6", "x^3 + 15x^2 + 75x + 125", "x+5", "x+5", "x+5");
const p7 = psub(ppow(P("3x-1"), 2), ppow(P("3x+1"), 2)); assert.strictEqual(ptex(p7), "-12x");
const p8 = psub(ppow(P("x+6"), 2), ppow(P("x+1"), 2)); assert.strictEqual(ptex(p8), "10x + 35");

const xm = (72 - Math.sqrt(72 * 72 - 4 * 12 * 80)) / 24, Vm = peval(boxV, xm); // maximum de 4x^3-36x^2+80x sur (0,4)
const eqF = (tex, f) => ({ tex, f });
const g3 = sameGraph(["y = (x+3)*(2x-5)".replace("2x", "2*x"), `y = ${gx(e3)}`], [-5, 4, -17, 12], "(x+3)(2x−5) et 2x²+x−15 forment UNE seule courbe", [{ x: -3, y: 0, t: "(−3, 0)", c: "#15803d" }, { x: 2.5, y: 0, t: "(2.5, 0)", c: "#15803d" }, { x: 0, y: -15, t: "(0, −15)", c: "#be123c" }]);
const g10 = sameGraph(["y = (x-1)*(x+1)*(x^2+1)", `y = ${gx(e10)}`], [-2, 2, -2, 15], "(x−1)(x+1)(x²+1) et x⁴−1 coïncident", [{ x: -1, y: 0, t: "(−1, 0)", c: "#15803d" }, { x: 1, y: 0, t: "(1, 0)", c: "#15803d" }]);
const g9 = gframe([{ kind: "cartesian", expr: `y = ${gx(boxV)}`, dMin: "0", dMax: "4" }], { title: "Volume V(x) de la boîte ouverte", labels: [{ x: +xm.toFixed(2), y: +Vm.toFixed(1), t: `max ≈ ${Vm.toFixed(1)} à x ≈ ${xm.toFixed(2)}`, c: "#be123c" }], ...gview(0, 4, 0, 60) });
const ONE = "Les deux formes tracent une seule courbe";

const lessonHtml = r`<div class="lecture-box">
  <h1>➕ Addition et multiplication de polynômes</h1>
  <p><strong>Aperçu.</strong> Deux expressions sont <strong>équivalentes</strong> lorsqu'elles donnent <em>la même valeur pour chaque</em> \(x\) — ce qui veut dire qu'elles tracent <em>exactement le même graphique</em>. Tout ce chapitre consiste à réécrire une expression sous une forme équivalente plus facile à utiliser. Dans cette leçon, tu vas maîtriser les deux gestes à la base de tout le reste : <strong>regrouper les termes semblables</strong> et <strong>développer des produits</strong>.</p>
  ${callout("La grande idée du chapitre 2.", "Réécrire ne change jamais la valeur. Si une réécriture change le graphique, elle était fausse. On peut <em>tester</em> n'importe quelle réécriture de deux façons : substituer des nombres, ou tracer les deux formes et voir si elles se superposent.", "green")}

  <h2>📌 Le vocabulaire</h2>
  <ul>
    <li>Un <strong>terme</strong> est un nombre multiplié par des puissances d'une variable : \(7x^2\), \(-4x\), \(9\). Le nombre est le <strong>coefficient</strong>; un terme sans variable est le <strong>terme constant</strong>.</li>
    <li>Le <strong>degré</strong> d'un terme est son exposant; le <strong>degré d'un polynôme</strong> est le plus élevé. \(4x^3-x^2+9\) est de degré 3.</li>
    <li>Des <strong>termes semblables</strong> ont la <em>même partie variable</em> : \(3x^2\) et \(-8x^2\) sont semblables; \(3x^2\) et \(3x\) ne le sont pas. Seuls les termes semblables peuvent être combinés.</li>
    <li>Un polynôme à 1, 2 ou 3 termes est un <strong>monôme</strong>, un <strong>binôme</strong> ou un <strong>trinôme</strong>. La <strong>forme standard</strong> présente les termes du degré le plus élevé au plus bas.</li>
    <li>Les exposants des variables d'un polynôme sont des nombres entiers \(\ge0\) : \(\sqrt x\), \(x^{-1}\) et \(\dfrac1x\) ne sont <em>pas</em> des termes de polynôme.</li>
  </ul>

  <h2>📌 Le détecteur d'équivalence</h2>
  <p>\((x+2)^2\) est-il la même chose que \(x^2+4\)? Le test honnête le plus rapide consiste à évaluer les deux expressions pour plusieurs valeurs de \(x\). Une seule différence suffit pour prouver que deux expressions ne sont <em>pas</em> équivalentes :</p>
  ${eqTable([eqF("(x+2)^2", (x) => (x + 2) ** 2), eqF("x^2+4", (x) => x * x + 4), eqF("x^2+4x+4", (x) => x * x + 4 * x + 4)], [-2, -1, 0, 1, 2], "Évalue chaque expression aux mêmes valeurs de x")}
  <p>\(x^2+4\) échoue pour toutes les valeurs sauf \(x=0\) — un test qui concorde par hasard en un point ne prouve rien. \(x^2+4x+4\) concorde dans chaque colonne, et nous le prouverons en développant plus bas. Retiens : <strong>des nombres peuvent réfuter une équivalence, mais seule l'algèbre (ou un graphique qui concorde partout) la prouve.</strong></p>
  ${mistake("\\((x+2)^2 = x^2+4\\)", "Élever un binôme au carré, c'est le multiplier par <em>lui-même</em> : \\((x+2)(x+2)\\). Les deux termes croisés \\(2x+2x\\) manquent. Pour \\(x=1\\) : \\((1+2)^2=9\\) mais \\(1^2+4=5\\).", "\\((x+2)^2=x^2+4x+4\\).")}

  <h2>📌 Additionner et soustraire</h2>
  <p>Enlève les parenthèses, puis combine les termes semblables. Quand un <strong>signe moins se trouve devant une parenthèse</strong>, il change le signe de <em>chaque</em> terme à l'intérieur — c'est l'erreur la plus fréquente de ce chapitre.</p>
  <h2>📌 Multiplier : le modèle d'aire</h2>
  <p>La distributivité dit que chaque terme du premier facteur doit rencontrer chaque terme du second. Un <strong>modèle d'aire</strong> tient le compte : les facteurs étiquettent les côtés d'un rectangle, et chaque case contient un produit partiel. Les cases de même couleur sont des termes semblables.</p>

  <h2>🔵 Exemples résolus</h2>
  ${ex("Exemple 1 : Soustraire des polynômes", `Simplifie ${M("(3x^2-7x+2)-(x^2-7x-4)")}.`, [
    `<b>Règle.</b> Soustraire une parenthèse revient à additionner l'opposé de chaque terme qu'elle contient. Seuls les termes semblables (même variable, même puissance) peuvent être combinés.`,
    `Le signe moins change chaque signe dans la deuxième parenthèse : ${M("3x^2-7x+2\\;-\\;x^2\\;+\\;7x\\;+\\;4")}.`,
    `Regroupe les termes semblables : ${M("(3x^2-x^2)+(-7x+7x)+(2+4)")}.`,
    `<b>Vérification sur le graphique.</b> L'expression de départ et la réponse donnent une seule courbe, et \\(x=2\\) donne \\(14\\) pour les deux ✓`,
  ], `${M(ptex(e1))}. Les termes en \\(x\\) se sont complètement annulés, donc le résultat est un binôme. (Vérification pour \\(x=2\\) : expression de départ \\(12-14+2-(4-14-4)=0+14=14\\); réponse \\(8+6=14\\).)`, gframe(["y = (3*x^2-7*x+2)-(x^2-7*x-4)", "y = 2*x^2+6"], { title: ONE, ...gview(-4, 4, -2, 30) }))}
  ${ex("Exemple 2 : Monôme × trinôme", `Développe ${M("-2x(3x^2-x+5)")}.`, [
    `<b>Règle.</b> La distributivité : le facteur extérieur multiplie chaque terme de la parenthèse. Quand on multiplie des puissances, on additionne les exposants.`,
    `Multiplie <em>chaque</em> terme à l'intérieur par \\(-2x\\) : \\((-2x)(3x^2)=-6x^3\\), \\((-2x)(-x)=+2x^2\\), \\((-2x)(5)=-10x\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(-2(3-1+5)=-14\\). Réponse : \\(-6+2-10=-14\\) ✓`,
  ], `${M(ptex(e2))}. Le degré est 1 + 2 = 3 : <em>les degrés s'additionnent quand on multiplie</em>.`, gframe(["y = -2*x*(3*x^2-x+5)", "y = -6*x^3+2*x^2-10*x"], { title: ONE, ...gview(-3, 3, -40, 40) }))}
  ${ex("Exemple 3 : Binôme × binôme avec un modèle d'aire", `Développe ${M("(x+3)(2x-5)")} et vérifie à l'aide d'un graphique.`, [
    `<b>Règle.</b> Chaque terme du premier facteur doit multiplier chaque terme du second, ce qui donne \\(2\\times2=4\\) produits.`,
    `Place \\(x+3\\) en haut et \\(2x-5\\) sur le côté; remplis chaque case avec un produit.`,
    `Regroupe les termes semblables \\(-5x\\) et \\(+6x\\) (même couleur).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\((4)(-3)=-12\\). Réponse : \\(2+1-15=-12\\) ✓`,
  ], `${M(ptex(e3))}.`, areaModel(P("x+3"), P("2x-5"), "Modèle d'aire : (x + 3) × (2x − 5)") + g3)}
  ${ex("Exemple 4 : La méthode PEID avec de plus grands coefficients", `Développe ${M("(3x-2)(4x+7)")}.`, [
    `<b>Règle.</b> La méthode PEID (FOIL en anglais) nomme les quatre produits de deux binômes : Premiers, Extérieurs, Intérieurs, Derniers.`,
    `<strong>P</strong>remiers \\(12x^2\\), <strong>E</strong>xtérieurs \\(21x\\), <strong>I</strong>ntérieurs \\(-8x\\), <strong>D</strong>erniers \\(-14\\).`,
    `Combine les termes du milieu : \\(21x-8x=13x\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\((1)(11)=11\\). Réponse : \\(12+13-14=11\\) ✓`,
  ], `${M(ptex(e4))}. PEID, c'est simplement le modèle d'aire écrit sur une ligne — cela ne fonctionne que pour deux binômes.`, gframe(["y = (3*x-2)*(4*x+7)", "y = 12*x^2+13*x-14"], { title: "Les deux formes tracent une seule parabole", ...gview(-4, 3, -20, 30) }))}
  ${ex("Exemple 5 : Produits remarquables", `Développe a) ${M("(5x-4)^2")} et b) ${M("(3x+7)(3x-7)")}.`, [
    `<b>Règle.</b> Apprends les deux régularités : \\((a-b)^2=a^2-2ab+b^2\\) et \\((a+b)(a-b)=a^2-b^2\\). Elles évitent le calcul des quatre produits.`,
    `a) Carré d'un binôme \\((a-b)^2=a^2-2ab+b^2\\) avec \\(a=5x,\\ b=4\\) : \\((5x)^2-2(5x)(4)+4^2\\).`,
    `b) Produit d'une somme et d'une différence : les deux termes du milieu sont opposés et s'annulent, il reste \\(a^2-b^2\\).`,
    `<b>Vérification avec</b> \\(x=1\\). a) \\((1)^2=1\\) et \\(25-40+16=1\\) ✓. b) \\((10)(-4)=-40\\) et \\(9-49=-40\\) ✓`,
  ], `a) ${M(ptex(e5a))}; b) ${M(ptex(e5b))}.`, areaModel(P("3x+7"), P("3x-7"), "(3x + 7)(3x − 7) : les deux cases ±21x s'annulent"))}
  ${ex("Exemple 6 : Trinôme × binôme", `Développe ${M("(x^2-3x+2)(2x+5)")}.`, [
    `<b>Plan.</b> Trois termes fois deux termes donnent six produits partiels. Un modèle organisé garantit qu'aucun n'est oublié.`,
    `Un modèle d'aire \\(3\\times2\\) a six cases — chaque terme du trinôme rencontre les deux termes du binôme.`,
    `Termes semblables : \\(5x^2\\) et \\(-6x^2\\) donnent \\(-x^2\\); \\(-15x\\) et \\(4x\\) donnent \\(-11x\\).`,
    `<b>Vérification avec</b> \\(x=2\\). Expression de départ : \\((4-6+2)(9)=0\\). Réponse : \\(16-4-22+10=0\\) ✓`,
  ], `${M(ptex(e6))}. Degré 2 + 1 = 3 ✓, et le terme constant \\(2\\times5=10\\) ✓.`, areaModel(P("x^2-3x+2"), P("2x+5"), "Six produits partiels"))}
  ${ex("Exemple 7 : Un binôme au cube", `Développe ${M("(x-2)^3")}.`, [
    `<b>Attention.</b> \\((x-2)^3\\) n'est pas \\(x^3-8\\). Une puissance d'un binôme doit être développée facteur par facteur.`,
    `Décompose : \\((x-2)^3=(x-2)\\cdot(x-2)^2\\). D'abord \\((x-2)^2=x^2-4x+4\\).`,
    `Ensuite \\((x-2)(x^2-4x+4)=x^3-4x^2+4x-2x^2+8x-8\\).`,
    `<b>Vérification avec</b> \\(x=3\\). Expression de départ : \\(1^3=1\\). Réponse : \\(27-54+36-8=1\\) ✓`,
  ], `${M(ptex(e7))}. Les coefficients \\(1,\\,-6,\\,12,\\,-8\\) sont la rangée \\(1,3,3,1\\) du triangle de Pascal multipliée par les puissances de \\(-2\\) : \\(1,\\ 3(-2),\\ 3(-2)^2,\\ (-2)^3\\).`, gframe(["y = (x-2)^3", "y = x^3-6*x^2+12*x-8"], { title: ONE, ...gview(-1, 5, -10, 10) }))}
  ${ex("Exemple 8 : Deux variables", `Développe ${M("(2x-3y)(x+4y)")}.`, [
    `<b>Règle.</b> Deux variables ne changent pas la méthode : quatre produits, puis on regroupe les termes semblables.`,
    `Mêmes gestes, plus de lettres : \\(2x\\cdot x=2x^2\\), \\(2x\\cdot4y=8xy\\), \\(-3y\\cdot x=-3xy\\), \\(-3y\\cdot4y=-12y^2\\).`,
    `Les termes semblables doivent avoir <em>les mêmes lettres et les mêmes puissances</em> : \\(8xy\\) et \\(-3xy\\) se combinent.`,
  ], `${M("2x^2+5xy-12y^2")}. (Vérification avec \\(x=2,\\ y=1\\) : \\((4-3)(2+4)=6\\) et \\(8+10-12=6\\).)`, gframe(["y = (2*x-3)*(x+4)", "y = 2*x^2+5*x-12"], { title: "Avec y = 1, les deux formes tracent une seule parabole", ...gview(-6, 4, -18, 14) }))}
  ${ex("Exemple 9 : Une application — la boîte ouverte", `Une feuille de carton mesure \\(10\\) cm sur \\(8\\) cm. On découpe des carrés de côté \\(x\\) aux quatre coins et on replie les côtés. Écris le volume sous forme de polynôme.`, [
    `<b>Modèle.</b> Dessine la feuille. Découper un carré de côté \\(x\\) à chaque coin enlève \\(2x\\) à chaque dimension, et le pliage fait de \\(x\\) la hauteur.`,
    `Longueur \\(10-2x\\), largeur \\(8-2x\\), hauteur \\(x\\) : \\(V=x(10-2x)(8-2x)\\).`,
    `Développe d'abord les deux binômes : \\((10-2x)(8-2x)=4x^2-36x+80\\). Multiplie ensuite par \\(x\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Boîte : \\(1\\times8\\times6=48\\). Polynôme : \\(4-36+80=48\\) ✓`,
  ], `\\(V(x)=${ptex(boxV)}\\), avec \\(0<x<4\\) (les découpes doivent laisser une largeur positive). Le graphique montre que la meilleure découpe est d'environ \\(x\\approx${xm.toFixed(2)}\\) cm, ce qui donne \\(V\\approx${Vm.toFixed(1)}\\) cm³.`, g9)}
  ${ex("Exemple 10 : Enchaîner les gestes", `Montre que ${M("(x-1)(x+1)(x^2+1)=x^4-1")}.`, [
    `<b>Plan.</b> Multiplie deux facteurs à la fois et cherche une régularité avant de développer.`,
    `Multiplie les deux premiers (une somme fois une différence) : \\((x-1)(x+1)=x^2-1\\).`,
    `Maintenant \\((x^2-1)(x^2+1)\\) est encore une somme fois une différence, avec \\(a=x^2\\) : \\(a^2-1=x^4-1\\).`,
    `<b>Vérification avec</b> \\(x=2\\). Membre de gauche : \\((1)(3)(5)=15\\). Membre de droite : \\(16-1=15\\) ✓`,
  ], `${M(ptex(e10))}. Les produits remarquables peuvent être <em>réutilisés</em> — repérer la régularité deux fois a évité toute la longue multiplication.`, g10)}

  ${watchOut([
    "Un signe moins devant une parenthèse change <strong>chaque</strong> signe à l'intérieur : \\(-(x-4)=-x+4\\), et non \\(-x-4\\).",
    "\\((a+b)^2\\ne a^2+b^2\\). Écris la parenthèse deux fois et multiplie.",
    "Les exposants <strong>s'additionnent</strong> quand on multiplie (\\(x^2\\cdot x^3=x^5\\)); ils ne se <strong>multiplient pas</strong> et ne restent pas tels quels.",
    "Seuls les termes ayant des parties variables identiques se combinent : \\(3x^2+4x\\) ne peut pas être simplifié.",
    "Degré d'un produit = somme des degrés. Degré d'une somme \\(\\le\\) le plus grand degré — il peut être <em>plus petit</em> si les termes dominants s'annulent (exemple 1).",
  ])}

  <h2>🟡 Questions d'entraînement</h2>
  ${pr(1, "Connaissance", `Simplifie ${M("(-2x^2+9x-5)-(-x^2+5x+8)")}.`, `${M(ptex(p1))}. Attention à \\(-(-x^2)=+x^2\\) et à \\(-(+8)=-8\\).`)}
  ${pr(2, "Connaissance", `Développe ${M("-4x(3x^2-5x+2)")}.`, M(ptex(p2)))}
  ${pr(3, "Connaissance", `Développe ${M("(2x+9)(3x-4)")}.`, `${M(ptex(p3))}. (Les produits extérieurs \\(-8x\\) et intérieurs \\(27x\\) se combinent en \\(19x\\).)`)}
  ${pr(4, "Habiletés de la pensée", `Développe ${M("(4x-3y)^2")}.`, `${M("16x^2-24xy+9y^2")}. (Vérification avec \\(x=1,\\ y=1\\) : \\(1\\) et \\(16-24+9=1\\).)`)}
  ${pr(5, "Habiletés de la pensée", `Développe ${M("(x^2+2x-1)(x-4)")}.`, `${M(ptex(p5))}.`)}
  ${pr(6, "Habiletés de la pensée", `Développe ${M("(x+5)^3")} et compare ses coefficients avec la rangée de Pascal \\(1,3,3,1\\).`, `${M(ptex(p6))}. Les coefficients sont \\(1,\\ 3\\cdot5,\\ 3\\cdot5^2,\\ 5^3\\).`)}
  ${pr(7, "Habiletés de la pensée", `Simplifie ${M("(3x-1)^2-(3x+1)^2")} <em>sans</em> développer complètement les carrés — cherche un raccourci.`, `Les deux carrés contiennent \\(9x^2+1\\); seuls les termes du milieu diffèrent : \\(-6x-(+6x)=\\)${M(ptex(p7))}.`)}
  ${pr(8, "Mise en application", `Un carré de côté \\((x+6)\\) cm a un plus petit carré de côté \\((x+1)\\) cm découpé dans un coin. Écris l'aire restante sous forme de polynôme simplifié, puis trouve \\(x\\) si l'aire restante est de \\(135\\) cm².`, `\\((x+6)^2-(x+1)^2=${ptex(p8)}\\). L'équation \\(10x+35=135\\) donne \\(x=10\\).`)}
  ${challenge(`Montre que le produit de <em>quatre entiers consécutifs</em> plus 1 est toujours un carré parfait. Teste-le sur \\(1\\cdot2\\cdot3\\cdot4+1\\), puis prouve-le pour \\(n(n+1)(n+2)(n+3)+1\\).`, `\\(1\\cdot2\\cdot3\\cdot4+1=25=5^2\\). Associe les facteurs extérieurs et intérieurs : \\(n(n+3)=n^2+3n\\) et \\((n+1)(n+2)=n^2+3n+2\\). Avec \\(u=n^2+3n\\), le produit est \\(u(u+2)\\), donc \\(u(u+2)+1=u^2+2u+1=(u+1)^2=(n^2+3n+1)^2\\). (Pour \\(n=1\\) : \\(1^2+3+1=5\\) et \\(5^2=25\\) ✓.)`)}

  <h2>❓ Questions et réponses</h2>
  ${qa("Q1 : Quel est le degré du produit d'un polynôme de degré 2 et d'un polynôme de degré 3?", "Degré 5 — les degrés s'additionnent quand on multiplie.")}
  ${qa("Q2 : Pourquoi \\((a+b)^2\\ne a^2+b^2\\)?", "Parce que \\((a+b)^2=(a+b)(a+b)\\) a quatre produits partiels, dont deux termes croisés \\(ab+ab=2ab\\).")}
  ${qa("Q3 : Comment vérifier rapidement un développement?", "Substitue un nombre simple (comme \\(x=1\\) ou \\(x=-1\\)) dans les <em>deux</em> formes. Une différence prouve une erreur; une concordance pour plusieurs valeurs rend la réponse très probablement juste — et tracer les deux formes devrait donner une seule courbe.")}
  ${qa("Q4 : La somme de deux polynômes du troisième degré peut-elle être du second degré?", "Oui, si les termes en \\(x^3\\) s'annulent, p. ex. \\((x^3+x)+(-x^3+2x^2)=2x^2+x\\). Le degré d'une somme est au plus le plus grand degré.")}
  ${qa("Q5 : Quand la méthode PEID ne suffit-elle pas?", "PEID ne multiplie que deux <em>binômes</em>. Pour des trinômes ou trois facteurs, utilise le modèle d'aire ou distribue terme par terme.")}
  ${qa("Q6 : Que veut dire que deux expressions sont équivalentes?", "Elles donnent le même résultat pour chaque valeur d'entrée, donc leurs graphiques sont identiques.")}
</div>`;

export const blocks = () => [html(lessonHtml)];
