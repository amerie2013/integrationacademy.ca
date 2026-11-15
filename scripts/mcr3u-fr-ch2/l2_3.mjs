// MCR3U-FR 2.3 — Simplification d'expressions rationnelles (miroir français de ../mcr3u-ch2/t2_3.mjs, partie leçon).
import assert from "node:assert";
import { html, gframe, ex, pr, qa, watchOut, ptex, verify, eqTable, mistake, steps, callout, challenge, gview } from "./lib.mjs";
import { R, times, divide, eqv, neTex } from "./kit3.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "2.3 Simplification d'expressions rationnelles";
export const ID = lessonId(2, 3);
const M = (s) => `\\(${s}\\)`;
const r = String.raw;

// ───────────────────────── données de la leçon ─────────────────────────
const L1 = R(["3x-1"], ["x-1", "x-3"]);
const L3o = R(["x-3", "x+3"], ["x+4", "x-3"]), L3s = R(["x+3"], ["x+4"]); eqv("L-E3", L3o, L3s);
const L4o = R(["6x", "x-2"], ["3", "x-2", "x+2"]), L4s = R(["2x"], ["x+2"]); eqv("L-E4", L4o, L4s);
assert.strictEqual(ptex(L4o.N), "6x^2 - 12x"); assert.strictEqual(ptex(L4o.D), "3x^2 - 12");
const L6o = R(["2x-1", "x+4"], ["2x-1", "x-3"]), L6s = R(["x+4"], ["x-3"]); eqv("L-E6", L6o, L6s);
const L7a = R(["x-4", "x+3"], ["x-2", "x+2"]), L7b = R(["x-2"], ["x-4"]), L7s = R(["x+3"], ["x+2"]);
eqv("L-E7", times(L7a, L7b), L7s);
const L8a = R(["x+2", "x+3"], ["x-1", "x+1"]), L8b = R(["x+3"], ["x+2", "x-1"]), L8s = R(["x+2", "x+2"], ["x+1"]);
eqv("L-E8", divide(L8a, L8b), L8s);
const L11o = R(["x", "x-1", "x+1"], ["x", "x+1"]), L11s = R(["x-1"], ["1"]); eqv("L-E11", L11o, L11s);
verify("L-E9a", (x) => (x * x - 4) / (x - 2), (x) => x + 2);
const P1 = R(["x+7"], ["x+5", "x-3"]);
const P3o = R(["x-7", "x+3"], ["x-7", "x+7"]), P3s = R(["x+3"], ["x+7"]); eqv("L-P3", P3o, P3s);
const P4o = R(["3x+2", "2x-1"], ["3x-2", "3x+2"]), P4s = R(["2x-1"], ["3x-2"]); eqv("L-P4", P4o, P4s);
const P5a = R(["x-3", "x+2"], ["x-2", "x+2"]), P5b = R(["x+1", "x+2"], ["x-3", "x+1"]), P5s = R(["x+2"], ["x-2"]);
eqv("L-P5", times(P5a, P5b), P5s);
const P6a = R(["x+3", "x-1"], ["x-1", "x+1"]), P6b = R(["x+3"], ["x+1"]);
eqv("L-P6", divide(P6a, P6b), { f: () => 1 });
const P7o = R(["x-4", "x+3"], ["x-4"]), P7s = R(["x+3"], ["1"]); eqv("L-P7", P7o, P7s);
const CHo = R(["x-1", "x+1", "x^2+1"], ["x-1", "x^2+1"]), CHs = R(["x+1"], ["1"]); eqv("L-CH", CHo, CHs);

const holeG = (expr, bounds, title, holes, extra = []) => gframe([`y = ${expr}`], { title, labels: [...holes.map(([x, y]) => ({ x, y, t: `trou (${x}, ${y})`, c: "#be123c" })), ...extra], ...gview(...bounds) });
const gHole1 = holeG("(x^2-9)/(x-3)", [-6, 6, -4, 10], "y = (x² − 9)/(x − 3) : la droite y = x + 3 avec un TROU en (3, 6)", [[3, 6]]);
const gHole2 = holeG("(x^2-4)/(x-2)", [-4, 6, -3, 9], "(x² − 4)/(x − 2) = x + 2 : un trou en (2, 4)", [[2, 4]]);
const gAsy = gframe(["y = 1/(x-2)"], { title: "1/(x − 2) : une ASYMPTOTE verticale en x = 2 (rien ne se simplifie)", labels: [{ x: 2, y: 0, t: "x = 2", c: "#be123c" }], ...gview(-2, 6, -5, 5) });
const gE11 = holeG("(x^3-x)/(x^2+x)", [-4, 4, -5, 4], "(x³ − x)/(x² + x) = x − 1 : trous en (0, −1) et en (−1, −2)", [[0, -1], [-1, -2]]);

const lessonHtml = r`<div class="lecture-box">
  <h1>➗ Simplification d'expressions rationnelles</h1>
  <p><strong>Aperçu.</strong> Une <strong>expression rationnelle</strong> est le quotient de deux polynômes, comme \(\dfrac{x^2-9}{x-3}\). Tout comme \(\dfrac{6}{9}=\dfrac{2}{3}\), on simplifie en <strong>éliminant les <em>facteurs</em> communs</strong> — c'est pourquoi la factorisation de 2.2 est importante. Mais il y a une idée nouvelle : une fraction est <em>non définie</em> lorsque son dénominateur vaut 0, donc certaines valeurs de \(x\) sont <strong>exclues</strong> (ce sont les restrictions) — et ces restrictions ne disparaissent jamais, même après la simplification.</p>
  ${callout("Simplifie des facteurs, jamais des termes.", "Tu ne peux éliminer que ce qui multiplie <em>tout</em> le numérateur et <em>tout</em> le dénominateur. Dans \\(\\dfrac{x+6}{6}\\), le \\(6\\) est additionné, pas multiplié, donc il ne peut pas être éliminé.", "amber")}

  <h2>📌 Le même graphique — avec un point manquant</h2>
  <p>\(\dfrac{x^2-9}{x-3}=\dfrac{(x-3)(x+3)}{x-3}=x+3\) — mais seulement lorsque \(x\ne3\). En \(x=3\), l'expression de départ n'a aucune valeur (\(\tfrac{0}{0}\)), tandis que \(x+3\) donne tranquillement 6. Les deux expressions tracent donc la même droite <em>à un point manquant près</em>, un <strong>trou</strong> en \((3,6)\) :</p>
  ${gHole1}
  ${eqTable([{ tex: "\\dfrac{x^2-9}{x-3}", f: (x) => (x * x - 9) / (x - 3) }, { tex: "x+3", f: (x) => x + 3 }], [-2, 0, 2, 3, 4, 6], "Égales partout — sauf là où l'expression de départ est non définie")}
  <p>C'est l'idée clé de toute la leçon : <strong>une expression simplifiée est équivalente à l'expression de départ <em>pour chaque valeur permise de \(x\)</em></strong>; on énonce donc toujours les restrictions à partir du dénominateur <em>de départ</em>.</p>

  ${steps("Comment simplifier une expression rationnelle", [
    "<strong>Factorise</strong> complètement le numérateur et le dénominateur (PGFC, trinôme, différence de carrés, groupement).",
    "<strong>Énonce les restrictions</strong> — chaque valeur qui annule un facteur du dénominateur <em>de départ</em>.",
    "<strong>Élimine</strong> les facteurs présents dans les deux. Attention aux <em>opposés</em> comme \\((a-b)\\) et \\((b-a)\\) : leur quotient vaut \\(-1\\).",
    "<strong>Écris ce qui reste</strong>, en gardant les restrictions.",
  ])}

  <h2>🔵 Exemples résolus</h2>
  ${ex("Exemple 1 : Trouver les restrictions", `Énonce les restrictions de ${M(L1.exp)}.`, [
    `<b>Règle.</b> La division par 0 n'est pas définie, donc toute valeur de \\(x\\) qui annule le dénominateur doit être exclue.`,
    `Seul le dénominateur compte. Factorise-le : \\(x^2-4x+3=(x-1)(x-3)\\).`,
    `Annule chaque facteur : \\(x-1=0\\) et \\(x-3=0\\).`,
    `<b>Vérification.</b> Pour \\(x=1\\), le dénominateur vaut \\(1-4+3=0\\). Pour \\(x=3\\), il vaut \\(9-12+3=0\\) ✓. Le graphique a une asymptote verticale à chacune de ces valeurs.`,
  ], `${M(neTex(L1.d))} (c'est-à-dire \\(x\\ne1\\) et \\(x\\ne3\\)). Le numérateur \\(3x-1\\) ne crée jamais de restriction — un numérateur égal à 0 est permis.`, gframe(["y = (3*x-1)/((x-1)*(x-3))"], { title: "Aucun point du graphique en x = 1 ni en x = 3", ...gview(-3, 7, -12, 12) }))}
  ${ex("Exemple 2 : Des monômes", `Simplifie ${M("\\dfrac{18a^3b^2}{24a^2b^5}")}.`, [
    `<b>Règle.</b> Seuls les facteurs communs s'éliminent. Pour les puissances, soustrais les exposants.`,
    `Divise les nombres par leur PGCD, \\(6\\) : \\(\\dfrac{3}{4}\\).`,
    `Soustrais les exposants : \\(a^{3-2}=a\\) au numérateur; \\(b^{2-5}=b^{-3}\\), donc \\(b^3\\) va au dénominateur.`,
    `<b>Vérification avec</b> \\(a=2,\\ b=1\\). Expression de départ : \\(\\frac{18(8)}{24(4)}=\\frac{144}{96}=1.5\\). Réponse : \\(\\frac{3(2)}{4}=1.5\\) ✓`,
  ], `${M("\\dfrac{3a}{4b^3}")}, avec \\(a\\ne0,\\ b\\ne0\\).`, gframe(["y = 0.75*x"], { title: "Avec b = 1, l'expression est la droite 3a/4", labels: [{ x: 2, y: 1.5, t: "(2, 1.5)" }], ...gview(-4, 4, -4, 4) }))}
  ${ex("Exemple 3 : Trinôme et différence de carrés", `Simplifie ${M(L3o.exp)} et énonce les restrictions.`, [
    `Factorise : numérateur \\((x-3)(x+3)\\); dénominateur \\(x^2+x-12=(x+4)(x-3)\\). L'expression est donc ${M(L3o.fac)}.`,
    `Les restrictions viennent du dénominateur <em>de départ</em> : \\(x\\ne-4\\) et \\(x\\ne3\\).`,
    `Élimine \\((x-3)\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(\\frac{-9}{-12}=\\frac34\\). Réponse : \\(\\frac34\\) ✓`,
  ], `${M(L3s.tex)}, ${M(neTex(L3o.d))}. (En \\(x=3\\), la forme simplifiée donnerait \\(\\tfrac67\\), mais l'expression de départ n'y est pas définie — un trou en \\((3,\\tfrac67)\\).)`, gframe(["y = (x^2-9)/(x^2+x-12)", "y = (x+3)/(x+4)"], { title: "Une seule courbe, avec un trou en x = 3", ...gview(-10, 8, -6, 8) }))}
  ${ex("Exemple 4 : Le PGFC d'abord", `Simplifie ${M(L4o.exp)}.`, [
    `Factorise en commençant par le PGFC : numérateur \\(6x(x-2)\\); dénominateur \\(3(x^2-4)=3(x-2)(x+2)\\).`,
    `Simplifie le nombre \\(6\\div3=2\\) et le facteur \\((x-2)\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(\\frac{6-12}{3-12}=\\frac{-6}{-9}=\\frac23\\). Réponse : \\(\\frac{2}{3}\\) ✓`,
  ], `${M(L4s.tex)}, ${M(neTex(L4o.d))}.`, gframe(["y = (6*x^2-12*x)/(3*x^2-12)", "y = 2*x/(x+2)"], { title: "Une seule courbe, avec un trou en x = 2", ...gview(-8, 8, -6, 10) }))}
  ${ex("Exemple 5 : Des facteurs opposés", `Simplifie a) ${M("\\dfrac{4-x}{x-4}")} et b) ${M("\\dfrac{x^2-25}{5-x}")}.`, [
    `a) \\(4-x=-(x-4)\\), donc \\(\\dfrac{-(x-4)}{x-4}=-1\\).`,
    `b) Réécris \\(5-x=-(x-5)\\) : \\(\\dfrac{(x-5)(x+5)}{-(x-5)}=-(x+5)\\).`,
    `<b>Vérification de b) avec</b> \\(x=0\\). Expression de départ : \\(\\frac{-25}{5}=-5\\). Réponse : \\(-0-5=-5\\) ✓`,
  ], `a) \\(-1\\), \\(x\\ne4\\); b) \\(-x-5\\), \\(x\\ne5\\). Repérer que deux parenthèses sont <em>opposées</em> fait gagner beaucoup de temps.`, gframe(["y = -x-5"], { title: "b) Une droite, avec un trou en x = 5", ...gview(-10, 8, -14, 6) }))}
  ${ex("Exemple 6 : Un trinôme complexe", `Simplifie ${M(L6o.exp)}.`, [
    `Décompose chacun : \\(2x^2+7x-4=(2x-1)(x+4)\\) et \\(2x^2-7x+3=(2x-1)(x-3)\\).`,
    `Élimine \\((2x-1)\\). Restrictions : \\(x\\ne\\tfrac12\\) et \\(x\\ne3\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(\\frac{-4}{3}\\). Réponse : \\(\\frac{4}{-3}\\) ✓`,
  ], `${M(L6s.tex)}, ${M(neTex(L6o.d))}.`, gframe(["y = (2*x^2+7*x-4)/(2*x^2-7*x+3)", "y = (x+4)/(x-3)"], { title: "Une seule courbe, avec un trou en x = 1/2", ...gview(-8, 10, -8, 10) }))}
  ${ex("Exemple 7 : Multiplier", `Simplifie ${M(L7a.exp + "\\times" + L7b.exp)}.`, [
    `Factorise tout : ${M(L7a.fac + "\\times" + L7b.fac)}.`,
    `Tu peux simplifier <em>d'une fraction à l'autre</em> : \\((x-4)\\) avec \\((x-4)\\) et \\((x-2)\\) avec \\((x-2)\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(\\frac{(-4)(3)}{(-2)(2)}\\times\\frac{-2}{-4}=3\\times\\frac12=\\frac32\\). Réponse : \\(\\frac32\\) ✓`,
  ], `${M(L7s.tex)}, ${M(neTex(L7a.d, L7b.d))}. Les restrictions viennent de <em>chaque</em> dénominateur.`, gframe(["y = (x+3)/(x+2)"], { title: "Le produit se simplifie en (x + 3)/(x + 2)", ...gview(-8, 6, -6, 8) }))}
  ${ex("Exemple 8 : Diviser", `Simplifie ${M(L8a.exp + "\\div" + L8b.exp)}.`, [
    `Factorise : \\(\\dfrac{(x+2)(x+3)}{(x-1)(x+1)}\\div\\dfrac{x+3}{(x+2)(x-1)}\\).`,
    `<strong>Multiplie par l'inverse</strong> de la deuxième fraction : \\(\\dfrac{(x+2)(x+3)}{(x-1)(x+1)}\\times\\dfrac{(x+2)(x-1)}{x+3}\\).`,
    `Élimine \\((x+3)\\) et \\((x-1)\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(\\frac{6}{-1}\\div\\frac{3}{-2}=(-6)\\left(-\\frac23\\right)=4\\). Réponse : \\(\\frac{2^2}{1}=4\\) ✓`,
  ], `${M(L8s.tex)}. Restrictions : \\(x\\ne1,-1\\) (premier dénominateur), \\(x\\ne-2,1\\) (deuxième dénominateur) et aussi \\(x\\ne-3\\) — on <em>divise par</em> \\(\\tfrac{x+3}{\\ldots}\\), ce qui serait une division par 0. Donc ${M(neTex(L8a.d, L8b.d, L8b.n))}.`, gframe(["y = (x+2)^2/(x+1)"], { title: "Le quotient se simplifie en (x + 2)²/(x + 1)", ...gview(-6, 6, -14, 14) }))}
  ${ex("Exemple 9 : Trou ou asymptote?", `Compare ${M("\\dfrac{x^2-4}{x-2}")} et ${M("\\dfrac{1}{x-2}")}. Les deux sont non définies en \\(x=2\\).`, [
    `La première se factorise en \\(\\dfrac{(x-2)(x+2)}{x-2}\\) — le facteur <em>s'élimine</em>, il reste \\(x+2\\) avec un <strong>trou</strong> en \\((2,4)\\).`,
    `Dans la seconde, rien ne s'élimine. Quand \\(x\\to2\\), le dénominateur devient très petit et les valeurs explosent : une <strong>asymptote verticale</strong> en \\(x=2\\).`,
  ], `Une restriction dont le facteur <em>s'élimine</em> donne un trou; une restriction qui <em>reste</em> au dénominateur donne une asymptote verticale.`, gHole2 + gAsy)}
  ${ex("Exemple 10 : Une application — le temps à partir de la distance et de la vitesse", `Une cycliste parcourt \\((x^2-4x-12)\\) km à une vitesse moyenne de \\((x-6)\\) km/h. Écris son temps, en heures, sous forme d'expression simplifiée.`, [
    `Temps \\(=\\) distance \\(\\div\\) vitesse \\(=\\dfrac{x^2-4x-12}{x-6}=\\dfrac{(x-6)(x+2)}{x-6}\\).`,
    `Élimine \\((x-6)\\). Restriction : \\(x\\ne6\\); et comme une vitesse doit être positive, \\(x>6\\).`,
  ], `Temps \\(=(x+2)\\) heures. Pour \\(x=10\\) : le trajet fait \\(100-40-12=48\\) km à \\(4\\) km/h, ce qui prend \\(12\\) heures \\(=10+2\\) ✓.`, gframe([{ kind: "cartesian", expr: "y = x+2", dMin: "6", dMax: "14" }], { title: "Le temps en fonction de x, pour des vitesses positives", labels: [{ x: 10, y: 12, t: "(10, 12)" }], ...gview(4, 16, 0, 18) }))}
  ${ex("Exemple 11 : Plusieurs trous", `Simplifie ${M(L11o.exp)} et trouve les trous de son graphique.`, [
    `Factorise : \\(\\dfrac{x(x-1)(x+1)}{x(x+1)}\\). Restrictions : \\(x\\ne0\\) et \\(x\\ne-1\\).`,
    `Élimine \\(x(x+1)\\), il reste \\(x-1\\). Évalue \\(x-1\\) à chaque restriction pour trouver les trous : \\(x=0\\to-1\\) et \\(x=-1\\to-2\\).`,
  ], `${M("x-1")}, avec des trous en \\((0,-1)\\) et en \\((-1,-2)\\).`, gE11)}

  ${mistake("\\(\\dfrac{x+6}{6}=x+1\\)", "Le 6 du numérateur est <em>additionné</em> à \\(x\\); seuls des facteurs peuvent être éliminés. Pour \\(x=6\\) : \\(\\dfrac{12}{6}=2\\), mais \\(x+1=7\\).", "\\(\\dfrac{x+6}{6}\\) ne peut pas être simplifiée. (Elle est équivalente à \\(\\tfrac{x}{6}+1\\).)")}
  ${mistake("\\(\\dfrac{x^2-9}{x-3}=x+3\\) pour tout \\(x\\)", "En \\(x=3\\), le membre de gauche est non défini, mais \\(x+3=6\\). Ils ne sont pas équivalents <em>partout</em>.", "\\(\\dfrac{x^2-9}{x-3}=x+3,\\ x\\ne3\\). Garde toujours la restriction.")}
  ${watchOut([
    "Les restrictions viennent du ou des dénominateurs <strong>de départ</strong> — <em>avant</em> de simplifier. Un facteur éliminé laisse quand même une restriction (un trou).",
    "Quand tu divises, exclus aussi les valeurs qui annulent le <em>numérateur du diviseur</em>.",
    "\\(\\dfrac{a-b}{b-a}=-1\\), et non \\(1\\). Cherche les parenthèses opposées avant de décider que rien ne se simplifie.",
    "Factorise <em>tout</em> d'abord. Si tu n'arrives pas à factoriser un numérateur ou un dénominateur, demande-toi si c'est une somme de carrés (premier) ou si tu as bien mis le PGFC en évidence.",
    "Un numérateur égal à 0 est permis (la fraction vaut simplement 0). Seul un dénominateur nul est interdit.",
  ])}

  <h2>🟡 Questions d'entraînement</h2>
  ${pr(1, "Connaissance", `Énonce les restrictions de ${M(P1.exp)}.`, `\\(x^2+2x-15=(x+5)(x-3)\\), donc ${M(neTex(P1.d))}.`)}
  ${pr(2, "Connaissance", `Simplifie ${M("\\dfrac{28x^4y}{42x^2y^3}")}.`, `${M("\\dfrac{2x^2}{3y^2}")}, \\(x\\ne0,\\ y\\ne0\\).`)}
  ${pr(3, "Connaissance", `Simplifie ${M(P3o.exp)} et énonce les restrictions.`, `\\(\\dfrac{(x-7)(x+3)}{(x-7)(x+7)}=\\)${M(P3s.tex)}, ${M(neTex(P3o.d))}.`)}
  ${pr(4, "Habiletés de la pensée", `Simplifie ${M(P4o.exp)}.`, `\\(\\dfrac{(3x+2)(2x-1)}{(3x-2)(3x+2)}=\\)${M(P4s.tex)}, ${M(neTex(P4o.d))}.`)}
  ${pr(5, "Habiletés de la pensée", `Simplifie ${M(P5a.exp + "\\times" + P5b.exp)}.`, `Factorise : \\(\\dfrac{(x-3)(x+2)}{(x-2)(x+2)}\\times\\dfrac{(x+1)(x+2)}{(x-3)(x+1)}=\\)${M(P5s.tex)}, ${M(neTex(P5a.d, P5b.d))}.`)}
  ${pr(6, "Habiletés de la pensée", `Simplifie ${M(P6a.exp + "\\div\\dfrac{x+3}{x+1}")}. Énonce toutes les restrictions.`, `\\(\\dfrac{(x+3)(x-1)}{(x-1)(x+1)}\\times\\dfrac{x+1}{x+3}=1\\). Restrictions : ${M(neTex(P6a.d, ["x+1"], ["x+3"]))}. Le résultat vaut \\(1\\) partout sauf en trois points manquants.`)}
  ${pr(7, "Habiletés de la pensée", `Le graphique de \\(y=${P7o.exp}\\) a un trou. Trouve ses coordonnées.`, `\\(y=x+3\\) pour \\(x\\ne4\\); en \\(x=4\\), la droite donne \\(y=7\\). Le trou est en \\((4,7)\\).`)}
  ${pr(8, "Mise en application", `Un bloc de métal a une masse de \\((8x^2+2x-3)\\) g et un volume de \\((2x-1)\\) cm³. Écris sa masse volumique (masse ÷ volume) sous sa forme la plus simple et trouve-la lorsque \\(x=2\\).`, `\\(\\dfrac{(4x+3)(2x-1)}{2x-1}=4x+3\\) g/cm³, avec \\(x\\ne\\tfrac12\\). Pour \\(x=2\\) : \\(11\\) g/cm³ (vérification : \\(\\dfrac{32+4-3}{3}=11\\) ✓).`)}
  ${challenge("Simplifie \\(\\dfrac{x^4-1}{x^3-x^2+x-1}\\). (Factorise d'abord le dénominateur par groupement.)", `Dénominateur : \\(x^2(x-1)+1(x-1)=(x-1)(x^2+1)\\). Numérateur : \\((x^2-1)(x^2+1)=(x-1)(x+1)(x^2+1)\\). Élimine \\((x-1)(x^2+1)\\) : ${M(CHs.tex)}, \\(x\\ne1\\).`)}

  <h2>❓ Questions et réponses</h2>
  ${qa("Q1 : Pourquoi les restrictions restent-elles après la simplification?", "Parce que l'expression de départ est toujours non définie à ces valeurs. La simplification donne une expression équivalente seulement pour les valeurs <em>permises</em> de \\(x\\).")}
  ${qa("Q2 : Puis-je éliminer \\(x\\) dans \\(\\dfrac{x+3}{x}\\)?", "Non. \\(x\\) est un terme du numérateur, pas un facteur de tout le numérateur. Teste \\(x=3\\) : \\(\\tfrac63=2\\), et non \\(4\\).")}
  ${qa("Q3 : Quelle est la différence entre un trou et une asymptote?", "Une valeur exclue dont le facteur <em>s'élimine</em> donne un trou (un seul point manquant). Une valeur exclue dont le facteur <em>reste</em> au dénominateur donne une asymptote verticale.")}
  ${qa("Q4 : Comment trouver l'ordonnée d'un trou?", "Substitue la valeur exclue de \\(x\\) dans l'expression <em>simplifiée</em>.")}
  ${qa("Q5 : Pourquoi y a-t-il des restrictions de plus quand on divise des expressions rationnelles?", "Diviser par une fraction revient à multiplier par son inverse, donc la fraction par laquelle on divise ne peut pas valoir 0 — son numérateur doit être non nul, tout comme son dénominateur.")}
  ${qa("Q6 : Comment vérifier rapidement une simplification?", "Choisis une valeur permise (pas une restriction), évalue les deux formes et compare. Les graphiques des deux formes devraient se superposer, à un trou près.")}
</div>`;

export const blocks = () => [html(lessonHtml)];
