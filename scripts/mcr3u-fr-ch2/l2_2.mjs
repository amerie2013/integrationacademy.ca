// MCR3U-FR 2.2 — Factorisation de polynômes (miroir français de ../mcr3u-ch2/t2_2.mjs, partie leçon).
// Chaque factorisation est construite avec FX() : le moteur DÉVELOPPE la forme factorisée et la compare au polynôme tapé.
import assert from "node:assert";
import { html, gframe, ex, pr, qa, watchOut, P, psub, ppow, peval, ptex, gx, eqTable, areaModel, mistake, steps, callout, sameGraph, challenge, gview } from "./lib.mjs";
import { FX, V2 } from "./kit.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "2.2 Factorisation de polynômes";
export const ID = lessonId(2, 2);
const M = (s) => `\\(${s}\\)`;
const r = String.raw;

/** Tableau des paires d'entiers de produit n avec leur somme; la ligne dont la somme est `target` est surlignée. */
function pairsTable(n, target) {
  const pairs = [];
  for (let a = -Math.abs(n); a <= Math.abs(n); a++) { if (a === 0 || n % a !== 0) continue; const b = n / a; if (a <= b) pairs.push([a, b]); }
  const th = `style="border:1px solid #c7d2fe;padding:5px 10px;background:#eef2ff;color:#3730a3;"`, td = "border:1px solid #e2e8f0;padding:4px 10px;text-align:center;";
  return `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;font-size:14px;"><thead><tr><th ${th}>paire de produit \\(${n}\\)</th><th ${th}>somme</th></tr></thead><tbody>${pairs.map(([u, v]) => { const s = u + v, hit = s === target; return `<tr style="background:${hit ? "#dcfce7" : "#fff"};font-weight:${hit ? 800 : 400};"><td style="${td}">\\(${u},\\ ${v}\\)</td><td style="${td}">\\(${s}\\)${hit ? " ✓" : ""}</td></tr>`; }).join("")}</tbody></table></div>`;
}

// ───────────────────────── données de la leçon ─────────────────────────
const e1 = FX("12x^3 - 18x^2 + 30x", 6, "x", "2x^2-3x+5");
const e2 = FX("3x^2 - 11x - 20", 1, "x-5", "3x+4");
const e3 = FX("2x^3 - 6x^2 + 5x - 15", 1, "x-3", "2x^2+5");
const e4 = FX("x^2 - x - 30", 1, "x-6", "x+5");
const e5 = FX("6x^2 + 7x - 20", 1, "2x+5", "3x-4");
const e6 = FX("25x^2 - 81", 1, "5x-9", "5x+9");
const e7 = FX("9x^2 - 42x + 49", 1, "3x-7", "3x-7");
const e8a = FX("4x^3 - 36x", 4, "x", "x-3", "x+3");
const e8b = FX("-2x^2 + 14x - 24", -2, "x-3", "x-4");
const e9 = FX("x^4 - 13x^2 + 36", 1, "x-2", "x+2", "x-3", "x+3");
const e10 = FX("2x^2 - 5x - 12", 1, "2x+3", "x-4");
FX("2x^2 + 11x + 12", 1, "2x+3", "x+4");
const e12 = FX("x^2 + 2x - 48", 1, "x-6", "x+8");
const e13 = FX("x^3 - 27", 1, "x-3", "x^2+3x+9");
const e0 = FX("x^2 - x - 6", 1, "x-3", "x+2");
const p2 = FX("x^2 + 3x - 54", 1, "x+9", "x-6");
const p3 = FX("8x^2 - 10x - 3", 1, "4x+1", "2x-3");
const p5 = FX("3x^3 + 12x^2 - 2x - 8", 1, "x+4", "3x^2-2");
const p6 = FX("3x^4 - 48", 3, "x-2", "x+2", "x^2+4");
const p7 = FX("x^2 - 6x - 16", 1, "x-8", "x+2");
assert.strictEqual(ptex(psub(ppow(P("x-3"), 2), [25])), "x^2 - 6x - 16");
const p8 = FX("15x^2 + x - 6", 1, "5x-3", "3x+2");
const ch = FX("x^4 + 4", 1, "x^2+2x+2", "x^2-2x+2");
V2("L-P1", (x, y) => 20 * x * x * y - 35 * x * y * y, (x, y) => 5 * x * y * (4 * x - 7 * y));
V2("L-P4", (x, y) => 4 * x * x - 49 * y * y, (x, y) => (2 * x - 7 * y) * (2 * x + 7 * y));
assert.strictEqual(peval(P("15x^2+x-6"), 4), 238);
const zeroGraph = (f, zeros, ymin, ymax, title, bx = [-5, 6]) => sameGraph([`y = ${gx(f.poly)}`], [bx[0], bx[1], ymin, ymax], title, zeros.map((z) => ({ x: z, y: 0, t: `(${z}, 0)`, c: "#15803d" })));
const ONE = "Les deux formes tracent une seule courbe";

const lessonHtml = r`<div class="lecture-box">
  <h1>🧩 Factorisation de polynômes</h1>
  <p><strong>Aperçu.</strong> <strong>Factoriser, c'est développer à l'envers.</strong> Développer transforme un produit en une somme de termes; factoriser transforme une somme en produit. C'est la réécriture la plus utile du cours : les facteurs révèlent les <em>zéros</em> d'une fonction (là où son graphique coupe l'axe des \(x\)), ils permettent de <em>simplifier</em> des expressions rationnelles (2.3) et ils rendent les équations faciles à résoudre.</p>
  ${callout("La règle d'or.", "Toute factorisation peut être <em>vérifiée</em> en la développant. Si le développement ne redonne pas l'expression de départ, la factorisation est fausse — tu n'as donc jamais besoin de douter.", "green")}

  <h2>📌 Les facteurs donnent les abscisses à l'origine du graphique</h2>
  <p>L'expression \(x^2-x-6\) et le produit \((x-3)(x+2)\) sont équivalents, donc ils tracent la <em>même parabole</em>. Regarde où elle rencontre l'axe des \(x\) : en \(x=3\) et en \(x=-2\) — les nombres qui annulent un facteur. Chaque facteur \((x-a)\) d'une expression donne une abscisse à l'origine en \(a\).</p>
  ${zeroGraph(e0, [-2, 3], -8, 6, "y = x² − x − 6 = (x − 3)(x + 2) : facteurs ↔ zéros", [-4, 5])}
  <p>Une factorisation fausse trace une courbe <em>différente</em>. Compare numériquement les trois candidates — une seule concorde avec \(x^2-x-6\) dans chaque colonne :</p>
  ${eqTable([{ tex: "x^2-x-6", f: (x) => x * x - x - 6 }, { tex: "(x-3)(x+2)", f: (x) => (x - 3) * (x + 2) }, { tex: "(x+3)(x-2)", f: (x) => (x + 3) * (x - 2) }, { tex: "(x-6)(x+1)", f: (x) => (x - 6) * (x + 1) }], [-3, -2, 0, 3, 4], "Quelle factorisation est vraiment égale à x² − x − 6?")}

  ${steps("Ordre d'attaque — suis toujours cette liste", [
    "<strong>Mets le plus grand facteur commun (PGFC) en évidence</strong> d'abord — les nombres <em>et</em> les variables. Toutes les étapes suivantes en deviennent plus simples.",
    "<strong>Compte les termes.</strong> Deux termes → cherche une <em>différence de carrés</em>. Trois termes → un trinôme. Quatre termes → essaie le <em>groupement</em>.",
    "<strong>Trinôme \\(x^2+bx+c\\) :</strong> trouve deux nombres de <em>produit \\(c\\)</em> et de <em>somme \\(b\\)</em>. <strong>\\(ax^2+bx+c\\) :</strong> trouve deux nombres de produit \\(ac\\) et de somme \\(b\\), décompose le terme du milieu, puis groupe (décomposition).",
    "<strong>Factorise complètement.</strong> Examine chaque facteur : peut-il être factorisé encore? (Un facteur comme \\(x^2-4\\) peut l'être.)",
    "<strong>Vérifie en développant.</strong> Compare avec l'expression de départ.",
  ])}

  <h2>🔵 Exemples résolus</h2>
  ${ex("Exemple 1 : Plus grand facteur commun", `Factorise ${M("12x^3-18x^2+30x")}.`, [
    `<b>Méthode.</b> Le PGFC est le plus grand facteur commun à tous les termes. Traite les nombres et les variables séparément.`,
    `Nombres : \\(\\text{PGCD}(12,18,30)=6\\). Variables : la plus petite puissance de \\(x\\) présente dans chaque terme est \\(x\\). PGFC \\(=6x\\).`,
    `Divise chaque terme par \\(6x\\) : \\(2x^2,\\ -3x,\\ 5\\).`,
  ], `${M(e1.tex)}. Vérification : \\(6x\\cdot2x^2=12x^3\\) ✓, \\(6x\\cdot(-3x)=-18x^2\\) ✓, \\(6x\\cdot5=30x\\) ✓.`, gframe(["y = 12*x^3-18*x^2+30*x", "y = 6*x*(2*x^2-3*x+5)"], { title: ONE, ...gview(-2, 3, -40, 60) }))}
  ${ex("Exemple 2 : Un binôme comme facteur commun", `Factorise ${M("3x(x-5)+4(x-5)")}.`, [
    `<b>Idée.</b> Un facteur commun peut être une parenthèse entière, pas seulement un nombre ou une variable.`,
    `Les deux termes contiennent toute la parenthèse \\((x-5)\\). Traite-la comme un seul nombre et mets-la en évidence.`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(3(-4)+4(-4)=-28\\). Réponse : \\((-4)(7)=-28\\) ✓`,
  ], `${M(e2.tex)}. (Forme développée : \\(${ptex(e2.poly)}\\).)`, gframe(["y = 3*x*(x-5)+4*(x-5)", "y = (x-5)*(3*x+4)"], { title: "Les zéros 5 et −4/3 viennent des facteurs", labels: [{ x: 5, y: 0, t: "(5, 0)" }, { x: -1.33, y: 0, t: "(−1.33, 0)" }], ...gview(-3, 7, -40, 30) }))}
  ${ex("Exemple 3 : Factorisation par groupement (4 termes)", `Factorise ${M("2x^3-6x^2+5x-15")}.`, [
    `<b>Quand grouper?</b> Quatre termes sans facteur commun suggèrent de les associer deux à deux.`,
    `Groupe deux à deux : \\((2x^3-6x^2)+(5x-15)\\).`,
    `Mets en évidence le PGFC de chaque paire : \\(2x^2(x-3)+5(x-3)\\). Les parenthèses sont identiques — c'est le signe que le groupement fonctionne.`,
    `Mets la parenthèse commune en évidence : \\((x-3)(2x^2+5)\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(2-6+5-15=-14\\). Réponse : \\((-2)(7)=-14\\) ✓`,
  ], `${M(e3.tex)}.`, gframe(["y = 2*x^3-6*x^2+5*x-15", "y = (x-3)*(2*x^2+5)"], { title: "Un seul zéro, x = 3 : le facteur 2x² + 5 n'est jamais nul", labels: [{ x: 3, y: 0, t: "(3, 0)" }], ...gview(-2, 5, -40, 40) }))}
  ${ex("Exemple 4 : Trinôme simple \\(x^2+bx+c\\)", `Factorise ${M("x^2-x-30")}.`, [
    `<b>Pourquoi ces deux nombres?</b> \\((x+p)(x+q)=x^2+(p+q)x+pq\\), donc la somme de \\(p\\) et \\(q\\) doit être \\(b\\) et leur produit \\(c\\).`,
    `Il faut deux nombres de <strong>produit \\(-30\\)</strong> et de <strong>somme \\(-1\\)</strong>. Le produit négatif signifie que l'un est positif et l'autre négatif. Dresse la liste des paires :`,
    `La paire \\(-6\\) et \\(5\\) convient. Donc \\(x^2-x-30=(x-6)(x+5)\\).`,
  ], `${M(e4.tex)}. Vérification : \\(x^2+5x-6x-30=x^2-x-30\\) ✓.`, pairsTable(-30, -1))}
  ${callout("Guide des signes pour \\(x^2+bx+c\\).", "Si <strong>\\(c>0\\)</strong>, les deux nombres ont le <em>même signe</em> que \\(b\\) (tous deux + si \\(b>0\\), tous deux − si \\(b<0\\)). Si <strong>\\(c<0\\)</strong>, ils sont de <em>signes contraires</em>, et le plus grand (en valeur absolue) prend le signe de \\(b\\).", "blue")}
  ${ex("Exemple 5 : Trinôme complexe \\(ax^2+bx+c\\) — décomposition", `Factorise ${M("6x^2+7x-20")}.`, [
    `<b>Pourquoi \\(ac\\)?</b> Décomposer le terme du milieu en deux termes de produit \\(ac\\) permet de grouper les quatre termes de façon égale.`,
    `Calcule \\(a\\cdot c=6\\times(-20)=-120\\). Trouve deux nombres de produit \\(-120\\) et de somme \\(+7\\) : \\(15\\) et \\(-8\\).`,
    `Décompose le terme du milieu : \\(6x^2+15x-8x-20\\).`,
    `Groupe : \\(3x(2x+5)-4(2x+5)\\). Les parenthèses sont identiques ✓. Mets-les en évidence : \\((2x+5)(3x-4)\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(6+7-20=-7\\). Réponse : \\((7)(-1)=-7\\) ✓`,
  ], `${M(e5.tex)}.`, areaModel(P("2x+5"), P("3x-4"), "Vérification par modèle d'aire : les quatre cases sont 6x², −8x, 15x, −20"))}
  ${ex("Exemple 6 : Différence de carrés", `Factorise ${M("25x^2-81")}.`, [
    `Les deux termes sont des carrés parfaits : \\(25x^2=(5x)^2\\) et \\(81=9^2\\), séparés par un signe moins.`,
    `Utilise \\(a^2-b^2=(a-b)(a+b)\\) avec \\(a=5x,\\ b=9\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(25-81=-56\\). Réponse : \\((-4)(14)=-56\\) ✓`,
  ], `${M(e6.tex)}. Une <em>somme</em> de carrés comme \\(25x^2+81\\) ne peut pas être factorisée dans les entiers.`, gframe(["y = 25*x^2-81", "y = (5*x-9)*(5*x+9)"], { title: "Les zéros sont ±1.8, et les facteurs montrent pourquoi", labels: [{ x: 1.8, y: 0, t: "(1.8, 0)" }, { x: -1.8, y: 0, t: "(−1.8, 0)" }], ...gview(-3, 3, -90, 60) }))}
  ${ex("Exemple 7 : Trinôme carré parfait", `Factorise ${M("9x^2-42x+49")}.`, [
    `Le premier et le dernier terme sont des carrés : \\((3x)^2\\) et \\(7^2\\). Le terme du milieu vaut-il \\(2(3x)(7)=42x\\)? Oui (avec un signe moins).`,
    `C'est donc \\((a-b)^2\\) avec \\(a=3x,\\ b=7\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(9-42+49=16\\). Réponse : \\((-4)^2=16\\) ✓`,
  ], `${M(e7.tex)}. (Un carré parfait a un zéro double : la parabole <em>touche</em> l'axe des \\(x\\) en \\(x=\\tfrac73\\).)`, gframe(["y = 9*x^2-42*x+49", "y = (3*x-7)^2"], { title: "Un carré parfait touche l'axe des x une seule fois", labels: [{ x: 2.33, y: 0, t: "(7/3, 0)" }], ...gview(0, 5, -3, 30) }))}
  ${ex("Exemple 8 : Factoriser complètement — le PGFC d'abord", `Factorise a) ${M("4x^3-36x")} et b) ${M("-2x^2+14x-24")}.`, [
    `a) PGFC \\(4x\\) : \\(4x(x^2-9)\\). Or \\(x^2-9\\) est une différence de carrés : \\(4x(x-3)(x+3)\\).`,
    `b) Mets \\(-2\\) en évidence (rendre le coefficient dominant positif aide) : \\(-2(x^2-7x+12)\\). Nombres de produit \\(12\\) et de somme \\(-7\\) : \\(-3,-4\\).`,
    `<b>Vérification avec</b> \\(x=1\\). a) \\(4-36=-32\\) et \\(4(1)(-2)(4)=-32\\) ✓. b) \\(-2+14-24=-12\\) et \\(-2(-2)(-3)=-12\\) ✓`,
  ], `a) ${M(e8a.tex)}; b) ${M(e8b.tex)}. S'arrêter à \\(4x(x^2-9)\\) serait <em>incomplet</em>.`, gframe(["y = 4*x^3-36*x", "y = 4*x*(x-3)*(x+3)"], { title: "a) Trois facteurs donnent trois zéros : −3, 0, 3", labels: [{ x: -3, y: 0, t: "(−3, 0)" }, { x: 0, y: 0, t: "(0, 0)" }, { x: 3, y: 0, t: "(3, 0)" }], ...gview(-5, 5, -60, 60) }))}
  ${ex("Exemple 9 : Forme quadratique — un trinôme déguisé", `Factorise ${M("x^4-13x^2+36")}.`, [
    `Pose \\(u=x^2\\). L'expression devient \\(u^2-13u+36\\), qui se factorise en \\((u-4)(u-9)\\).`,
    `Remplace \\(u\\) par \\(x^2\\) : \\((x^2-4)(x^2-9)\\). Ce sont deux différences de carrés.`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(1-13+36=24\\). Réponse : \\((-1)(3)(-2)(4)=24\\) ✓`,
  ], `${M(e9.tex)}. Quatre facteurs linéaires → quatre abscisses à l'origine : \\(\\pm2,\\ \\pm3\\).`, gframe(["y = x^4-13*x^2+36", "y = (x-2)*(x+2)*(x-3)*(x+3)"], { title: "Quatre facteurs, quatre zéros", labels: [{ x: 2, y: 0, t: "2" }, { x: -2, y: 0, t: "−2" }, { x: 3, y: 0, t: "3" }, { x: -3, y: 0, t: "−3" }], ...gview(-5, 5, -15, 40) }))}
  ${ex("Exemple 10 : De la factorisation au graphique", `Factorise ${M("2x^2-5x-12")} et utilise les facteurs pour esquisser le graphique.`, [
    `\\(ac=-24\\); nombres de somme \\(-5\\) : \\(3\\) et \\(-8\\). Décompose : \\(2x^2+3x-8x-12=x(2x+3)-4(2x+3)\\).`,
    `Résultat \\((2x+3)(x-4)\\). Annule chaque facteur : \\(x=-\\tfrac32\\) et \\(x=4\\) sont les abscisses à l'origine; l'ordonnée à l'origine est la constante \\(-12\\).`,
  ], `${M(e10.tex)}; la parabole est ouverte vers le haut (\\(a=2>0\\)) avec les points d'intersection indiqués.`, zeroGraph(e10, [-1.5, 4], -16, 10, "y = (2x + 3)(x − 4)", [-3, 6]))}
  ${ex("Exemple 11 : Des dimensions à partir d'une aire", `Un patio rectangulaire a une aire de \\(2x^2+11x+12\\) mètres carrés et une largeur de \\((x+4)\\) m. Trouve sa longueur.`, [
    `<b>Modèle.</b> L'aire est la longueur fois la largeur, donc la largeur doit être l'un des facteurs de l'aire.`,
    `Aire \\(=\\) longueur \\(\\times\\) largeur, donc factorise l'aire : \\(ac=24\\), nombres de somme \\(11\\) : \\(3\\) et \\(8\\).`,
    `\\(2x^2+3x+8x+12=x(2x+3)+4(2x+3)=(2x+3)(x+4)\\).`,
  ], `La longueur est \\((2x+3)\\) m. Pour \\(x=2\\) : un patio de \\(7\\) m sur \\(6\\) m, d'aire \\(42=8+22+12\\) ✓.`, gframe([{ kind: "cartesian", expr: "y = 2*x^2+11*x+12", dMin: "0", dMax: "4" }], { title: "L'aire du patio pour x de 0 à 4", labels: [{ x: 2, y: 42, t: "(2, 42)" }], ...gview(-1, 5, 0, 90) }))}
  ${ex("Exemple 12 : Une différence de carrés avec une parenthèse", `Factorise ${M("(x+1)^2-49")}.`, [
    `Traite \\((x+1)\\) comme un seul bloc : \\(a=x+1,\\ b=7\\). Alors \\(a^2-b^2=(a-b)(a+b)\\).`,
    `\\((x+1-7)(x+1+7)\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(1-49=-48\\). Réponse : \\((-6)(8)=-48\\) ✓`,
  ], `${M(e12.tex)}. Développer \\((x+1)^2-49\\) donne \\(${ptex(e12.poly)}\\), donc les deux formes concordent ✓.`, gframe(["y = (x+1)^2-49", "y = (x-6)*(x+8)"], { title: "Les zéros sont 6 et −8", labels: [{ x: 6, y: 0, t: "(6, 0)" }, { x: -8, y: 0, t: "(−8, 0)" }], ...gview(-11, 9, -55, 40) }))}
  ${ex("Exemple 13 : Pour aller plus loin — somme et différence de cubes", `Factorise ${M("x^3-27")}.`, [
    `\\(x^3-27=x^3-3^3\\). La régularité est \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\) et \\(a^3+b^3=(a+b)(a^2-ab+b^2)\\).`,
  ], `${M(e13.tex)}. Le facteur du second degré \\(x^2+3x+9\\) n'a pas de facteurs entiers, donc on s'arrête. (Enrichissement : tu en auras besoin pour le théorème de factorisation en 12<sup>e</sup> année.)`)}

  ${mistake("\\(x^2-25=(x-5)^2\\)", "Développer \\((x-5)^2\\) donne \\(x^2-10x+25\\) — le terme du milieu apparaît et le signe de 25 est faux. Pour \\(x=0\\) : \\(0-25=-25\\) mais \\((0-5)^2=25\\).", "\\(x^2-25=(x-5)(x+5)\\) : une <em>différence</em> de carrés a deux parenthèses <em>différentes</em>.")}
  ${mistake("\\(2x^2-8=(2x-4)(x+2)\\)", "C'est une réécriture valide — le développement donne \\(2x^2-8\\) — mais elle n'est <em>pas complètement factorisée</em> : \\(2x-4\\) a encore le facteur commun \\(2\\), et \\(x^2-4\\) est une différence de carrés.", "\\(2x^2-8=2(x^2-4)=2(x-2)(x+2)\\). Mets toujours le PGFC en évidence <em>d'abord</em>.")}
  ${watchOut([
    "<strong>\\(x^2+25\\) ne se factorise pas</strong> (dans les entiers). Seule une <em>différence</em> de carrés se factorise.",
    "Pour factoriser \\(-x^2+5x+14\\), mets d'abord \\(-1\\) en évidence : \\(-(x^2-5x-14)\\) — sinon les signes s'emmêlent.",
    "Le PGFC d'un terme entier laisse <strong>1</strong>, pas rien : \\(6x^2+9x\\) divisé par \\(3x\\) donne \\(2x+3\\), et \\(3x\\) divisé par \\(3x\\) donne \\(1\\).",
    "Le groupement ne fonctionne que si les deux parenthèses sont <em>exactement identiques</em>. Sinon, essaie un autre regroupement — ou mets \\(-1\\) en évidence dans une des paires.",
    "Vérifie toujours : développe ta réponse, ou teste un nombre comme \\(x=2\\) dans les deux formes.",
  ])}

  <h2>🟡 Questions d'entraînement</h2>
  ${pr(1, "Connaissance", `Factorise ${M("20x^2y-35xy^2")}.`, `PGFC \\(=5xy\\) : ${M("5xy(4x-7y)")}.`)}
  ${pr(2, "Connaissance", `Factorise ${M("x^2+3x-54")}.`, `Produit \\(-54\\), somme \\(+3\\) : \\(9\\) et \\(-6\\). ${M(p2.tex)}.`)}
  ${pr(3, "Connaissance", `Factorise ${M("8x^2-10x-3")}.`, `\\(ac=-24\\), somme \\(-10\\) : \\(-12\\) et \\(2\\). \\(8x^2-12x+2x-3=4x(2x-3)+1(2x-3)\\). ${M(p3.tex)}.`)}
  ${pr(4, "Habiletés de la pensée", `Factorise ${M("4x^2-49y^2")}.`, `Différence de carrés avec \\(a=2x,\\ b=7y\\) : ${M("(2x-7y)(2x+7y)")}.`)}
  ${pr(5, "Habiletés de la pensée", `Factorise ${M("3x^3+12x^2-2x-8")} par groupement.`, `\\(3x^2(x+4)-2(x+4)\\). ${M(p5.tex)}.`)}
  ${pr(6, "Habiletés de la pensée", `Factorise complètement ${M("3x^4-48")}.`, `\\(3(x^4-16)=3(x^2-4)(x^2+4)\\), et \\(x^2-4\\) se factorise encore : ${M(p6.tex)}.`)}
  ${pr(7, "Habiletés de la pensée", `Factorise ${M("(x-3)^2-25")} et développe ta réponse pour vérifier.`, `\\(a=x-3,\\ b=5\\) : \\((x-3-5)(x-3+5)\\) = ${M(p7.tex)}, qui se développe en \\(${ptex(p7.poly)}\\) ✓.`)}
  ${pr(8, "Mise en application", `Un rectangle a une aire de \\(15x^2+x-6\\) (en cm²). Factorise pour trouver des expressions de ses côtés. Si \\(x=4\\), quelles sont les dimensions et l'aire?`, `\\(15x^2+x-6=${p8.tex}\\). Pour \\(x=4\\) : \\(17\\) cm sur \\(14\\) cm; aire \\(238\\) cm² (et \\(15\\cdot16+4-6=238\\) ✓).`)}
  ${challenge("Factorise \\(x^4+4\\). (Indice : une somme de carrés peut parfois être réécrite comme une <em>différence</em> de carrés en ajoutant et en soustrayant un terme du milieu.)", `\\(x^4+4=(x^4+4x^2+4)-4x^2=(x^2+2)^2-(2x)^2=(x^2+2-2x)(x^2+2+2x)\\). Donc ${M(ch.tex)} — une somme de carrés qui se factorise <em>bel et bien</em>.`)}

  <h2>❓ Questions et réponses</h2>
  ${qa("Q1 : Pourquoi toujours mettre le PGFC en évidence d'abord?", "Cela réduit les nombres et garde le coefficient dominant simple; beaucoup de trinômes et de différences de carrés n'apparaissent qu'<em>après</em> l'avoir retiré.")}
  ${qa("Q2 : Comment savoir si j'ai factorisé complètement?", "Quand aucun des facteurs ne peut être factorisé de nouveau. Examine chaque parenthèse : est-ce une différence de carrés? un trinôme? a-t-elle un facteur commun?")}
  ${qa("Q3 : Que m'apprennent les facteurs sur le graphique?", "Chaque facteur \\((x-a)\\) donne une abscisse à l'origine en \\(x=a\\). Un facteur répété signifie que la courbe ne fait que toucher l'axe à cet endroit.")}
  ${qa("Q4 : Tous les trinômes peuvent-ils être factorisés?", "Non. Si aucune paire d'entiers n'a le bon produit et la bonne somme, le trinôme est <em>premier</em> dans les entiers, p. ex. \\(x^2+x+1\\).")}
  ${qa("Q5 : Comment factoriser quand le coefficient dominant est négatif?", "Mets d'abord \\(-1\\) (ou le PGFC négatif) en évidence, puis factorise le reste comme d'habitude : \\(-x^2+5x+14=-(x^2-5x-14)=-(x-7)(x+2)\\).")}
  ${qa("Q6 : Comment vérifier une factorisation?", "Développe-la et compare avec l'expression de départ, ou substitue n'importe quel nombre dans les deux formes.")}
</div>`;

export const blocks = () => [html(lessonHtml)];
