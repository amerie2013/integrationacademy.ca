// MCR3U-FR 2.4 — Addition et soustraction d'expressions rationnelles (miroir français de ../mcr3u-ch2/t2_4.mjs, partie leçon).
import { html, gframe, ex, pr, qa, watchOut, verify, mistake, steps, callout, challenge, gview } from "./lib.mjs";
import { RE, minus, eqv, t } from "./kit4.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "2.4 Addition et soustraction d'expressions rationnelles";
export const ID = lessonId(2, 4);
const M = (s) => `\\(${s}\\)`;
const r = String.raw;

// ───────────────────────── données de la leçon ─────────────────────────
const E1 = RE("3x+8", ["x-2"]); eqv("L-E1", minus(t("5x+1", "x-2"), t("2x-7", "x-2")), E1);
const E2 = RE("9x+10", ["12", "x", "x"]); verify("L-E2", (x) => 3 / (4 * x) + 5 / (6 * x * x), E2.f);
const E3 = RE("7x+13", ["x+3", "x-1"]); verify("L-E3", (x) => 2 / (x + 3) + 5 / (x - 1), E3.f);
const E4 = RE("x+26", ["x-2", "x+5"]); verify("L-E4", (x) => 4 / (x - 2) - 3 / (x + 5), E4.f);
const E5 = RE("3x+14", ["x-3", "x+3", "x+4"]); verify("L-E5", (x) => 5 / (x * x - 9) - 2 / (x * x + x - 12), E5.f);
verify("L-E7", (x) => x / (x - 2) - 4 / (x * x - 2 * x), (x) => (x + 2) / x);
verify("L-E8", (x) => 1 / x + 1 / (x + 1) + 1 / (x * (x + 1)), (x) => 2 / x);
const P1 = RE("4x-8", ["x+4"]); eqv("L-P1", minus(t("7x-2", "x+4"), t("3x+6", "x+4")), P1);
const P3 = RE("7x-14", ["x-5", "x+2"]); verify("L-P3", (x) => 3 / (x - 5) + 4 / (x + 2), P3.f);
const P4 = RE("5x+7", ["x-1", "x+1", "x+2"]); verify("L-P4", (x) => 2 / (x * x - 1) + 3 / (x * x + x - 2), P4.f);

const ONE = "Les deux formes tracent une seule courbe";
const sumGraph = gframe(["y = 1/x + 1/(x+1) + 1/(x*(x+1))", "y = 2/x"], { title: "La somme des trois termes et 2/x forment UNE seule courbe", labels: [{ x: 0, y: 0, t: "asymptotes en x = 0 et en x = −1", c: "#be123c", point: false }], ...gview(-5, 5, -8, 8) });

const lessonHtml = r`<div class="lecture-box">
  <h1>➕ Addition et soustraction d'expressions rationnelles</h1>
  <p><strong>Aperçu.</strong> On ne peut additionner que des fractions qui comptent des parts de même taille : \(\tfrac13+\tfrac16\) exige un <strong>dénominateur commun</strong>. Les fractions algébriques fonctionnent de la même façon — la seule nouveauté, c'est que les dénominateurs contiennent des variables; on trouve donc le <strong>plus petit dénominateur commun (PPDC)</strong> en <em>factorisant</em>. Ensuite, on simplifie le résultat exactement comme en 2.3, en gardant les restrictions de <em>chaque</em> dénominateur de départ.</p>
  ${callout("Même recette, plus gros nombres.", "Nombres : \\(\\dfrac{1}{6}+\\dfrac{1}{10}\\). Factorise les dénominateurs : \\(6=2\\cdot3\\) et \\(10=2\\cdot5\\). Le PPDC prend chaque facteur à sa <em>plus grande puissance</em> : \\(2\\cdot3\\cdot5=30\\). Algèbre : \\(\\dfrac{1}{x^2-3x}+\\dfrac{1}{x^2-9}\\). \\(x(x-3)\\) et \\((x-3)(x+3)\\) → PPDC \\(=x(x-3)(x+3)\\). Le facteur \\((x-3)\\) n'est compté <em>qu'une fois</em>.", "green")}

  <h2>📌 Trouver le PPDC</h2>
  <ol>
    <li><strong>Factorise</strong> complètement chaque dénominateur.</li>
    <li>Le PPDC contient <strong>chaque facteur différent</strong>, chacun à la <strong>plus grande puissance</strong> qu'il a dans un des dénominateurs (les nombres aussi : le PPDC de 4 et 6 est 12).</li>
  </ol>
  ${steps("Comment additionner ou soustraire des expressions rationnelles", [
    "<strong>Factorise</strong> les dénominateurs et écris les <strong>restrictions</strong>.",
    "Trouve le <strong>PPDC</strong>.",
    "<strong>Construis des fractions équivalentes :</strong> multiplie le numérateur <em>et</em> le dénominateur de chaque fraction par les facteurs qui lui manquent.",
    "<strong>Combine les numérateurs sur le PPDC.</strong> Quand tu soustrais, mets tout le deuxième numérateur entre parenthèses pour que le signe moins change <em>chaque</em> terme.",
    "<strong>Développe et regroupe</strong> le numérateur, puis <strong>factorise-le et simplifie</strong> tout facteur commun avec le dénominateur.",
  ])}

  <h2>🔵 Exemples résolus</h2>
  ${ex("Exemple 1 : Même dénominateur", `Simplifie ${M("\\dfrac{5x+1}{x-2}-\\dfrac{2x-7}{x-2}")}.`, [
    `<b>Règle.</b> Avec un dénominateur commun, on combine seulement les numérateurs. Le dénominateur ne change pas.`,
    `Les dénominateurs sont déjà identiques : garde-en un et combine les numérateurs — avec des parenthèses : \\(\\dfrac{(5x+1)-(2x-7)}{x-2}\\).`,
    `Le moins change les deux signes de la parenthèse : \\(5x+1-2x+7=3x+8\\).`,
    `<b>Vérification avec</b> \\(x=3\\). Expression de départ : \\(16-(-1)=17\\). Réponse : \\(\\frac{17}{1}=17\\) ✓`,
  ], `${M(E1.tex)}, \\(x\\ne2\\). Oublier la parenthèse donnerait \\(3x-6\\) — une erreur très fréquente.`, gframe(["y = (5*x+1)/(x-2)-(2*x-7)/(x-2)", "y = (3*x+8)/(x-2)"], { title: ONE, ...gview(-6, 10, -12, 18) }))}
  ${ex("Exemple 2 : Dénominateurs monômes", `Simplifie ${M("\\dfrac{3}{4x}+\\dfrac{5}{6x^2}")}.`, [
    `\\(4x=2^2\\cdot x\\) et \\(6x^2=2\\cdot3\\cdot x^2\\). PPDC \\(=2^2\\cdot3\\cdot x^2=12x^2\\).`,
    `Construis : \\(\\dfrac{3}{4x}\\cdot\\dfrac{3x}{3x}=\\dfrac{9x}{12x^2}\\) et \\(\\dfrac{5}{6x^2}\\cdot\\dfrac{2}{2}=\\dfrac{10}{12x^2}\\). Additionne.`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(\\frac34+\\frac56=\\frac{19}{12}\\). Réponse : \\(\\frac{9+10}{12}=\\frac{19}{12}\\) ✓`,
  ], `${M(E2.tex)}, \\(x\\ne0\\).`, gframe(["y = 3/(4*x)+5/(6*x^2)", "y = (9*x+10)/(12*x^2)"], { title: ONE, ...gview(-5, 5, -4, 6) }))}
  ${ex("Exemple 3 : Deux binômes différents", `Simplifie ${M("\\dfrac{2}{x+3}+\\dfrac{5}{x-1}")}.`, [
    `Rien n'est commun, donc le PPDC est le produit \\((x+3)(x-1)\\). Il manque à chaque fraction le facteur de l'autre.`,
    `\\(\\dfrac{2(x-1)+5(x+3)}{(x+3)(x-1)}=\\dfrac{2x-2+5x+15}{(x+3)(x-1)}\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(\\frac23-5=-\\frac{13}3\\). Réponse : \\(\\frac{13}{(3)(-1)}=-\\frac{13}3\\) ✓`,
  ], `${M(E3.tex)}, \\(x\\ne-3,\\ 1\\). Le numérateur \\(7x+13\\) n'a aucun facteur commun avec les parenthèses, donc on s'arrête.`, gframe(["y = 2/(x+3)+5/(x-1)", "y = (7*x+13)/((x+3)*(x-1))"], { title: ONE, ...gview(-9, 7, -10, 10) }))}
  ${ex("Exemple 4 : Soustraire — attention au signe", `Simplifie ${M("\\dfrac{4}{x-2}-\\dfrac{3}{x+5}")}.`, [
    `PPDC \\((x-2)(x+5)\\). Numérateur : \\(4(x+5)-3(x-2)\\) — la parenthèse après le moins est essentielle.`,
    `\\(4x+20-3x+6=x+26\\). (Le produit \\(-3\\cdot-2\\) donne \\(+6\\).)`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(-2-\\frac35=-2.6\\). Réponse : \\(\\frac{26}{-10}=-2.6\\) ✓`,
  ], `${M(E4.tex)}, \\(x\\ne2,\\ -5\\).`, gframe(["y = 4/(x-2)-3/(x+5)", "y = (x+26)/((x-2)*(x+5))"], { title: ONE, ...gview(-11, 8, -8, 8) }))}
  ${ex("Exemple 5 : Factorise d'abord les dénominateurs", `Simplifie ${M("\\dfrac{5}{x^2-9}-\\dfrac{2}{x^2+x-12}")}.`, [
    `\\(x^2-9=(x-3)(x+3)\\) et \\(x^2+x-12=(x+4)(x-3)\\). Restrictions : \\(x\\ne3,-3,-4\\).`,
    `PPDC \\(=(x-3)(x+3)(x+4)\\) — le facteur commun \\((x-3)\\) n'apparaît <strong>qu'une fois</strong>. Il manque \\((x+4)\\) à la première fraction et \\((x+3)\\) à la seconde.`,
    `Numérateur : \\(5(x+4)-2(x+3)=5x+20-2x-6=3x+14\\).`,
    `<b>Vérification avec</b> \\(x=0\\). Expression de départ : \\(-\\frac59+\\frac16=-\\frac7{18}\\). Réponse : \\(\\frac{14}{(-3)(3)(4)}=-\\frac7{18}\\) ✓`,
  ], `${M(E5.tex)}. Multiplier les deux dénominateurs donnerait une fraction beaucoup plus grande (mais quand même juste) — le PPDC la garde petite.`, gframe(["y = 5/(x^2-9)-2/(x^2+x-12)", "y = (3*x+14)/((x-3)*(x+3)*(x+4))"], { title: ONE, ...gview(-8, 7, -3, 3) }))}
  ${ex("Exemple 6 : Dénominateurs opposés", `Simplifie ${M("\\dfrac{3}{x-4}+\\dfrac{5}{4-x}")}.`, [
    `\\(4-x=-(x-4)\\), donc \\(\\dfrac{5}{4-x}=-\\dfrac{5}{x-4}\\).`,
    `Les dénominateurs sont maintenant identiques : \\(\\dfrac{3-5}{x-4}\\).`,
    `<b>Vérification avec</b> \\(x=5\\). Expression de départ : \\(3+\\frac5{-1}=-2\\). Réponse : \\(\\frac{-2}{1}=-2\\) ✓`,
  ], `${M("\\dfrac{-2}{x-4}")}, \\(x\\ne4\\). Reconnaître les opposés évite un long calcul de dénominateur commun.`, gframe(["y = 3/(x-4)+5/(4-x)", "y = -2/(x-4)"], { title: ONE, ...gview(-2, 10, -6, 6) }))}
  ${ex("Exemple 7 : Additionner, puis simplifier", `Simplifie ${M("\\dfrac{x}{x-2}-\\dfrac{4}{x^2-2x}")}.`, [
    `\\(x^2-2x=x(x-2)\\), donc le PPDC est \\(x(x-2)\\) et il manque \\(x\\) à la première fraction.`,
    `\\(\\dfrac{x\\cdot x-4}{x(x-2)}=\\dfrac{x^2-4}{x(x-2)}=\\dfrac{(x-2)(x+2)}{x(x-2)}\\). Élimine \\((x-2)\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(-1+4=3\\). Réponse : \\(\\frac31=3\\) ✓`,
  ], `${M("\\dfrac{x+2}{x}")}, \\(x\\ne0,\\ 2\\). <em>Factorise toujours le numérateur final</em> — il se simplifie souvent. Les graphiques concordent sauf au trou \\((2,2)\\), là où le facteur éliminé \\((x-2)\\) valait zéro :`, gframe(["y = x/(x-2) - 4/(x^2-2*x)", "y = (x+2)/x"], { title: "x/(x−2) − 4/(x²−2x) = (x+2)/x, avec un trou en (2, 2)", labels: [{ x: 2, y: 2, t: "trou (2, 2)", c: "#be123c" }], ...gview(-5, 6, -5, 6) }))}
  ${ex("Exemple 8 : Trois termes — une surprise", `Simplifie ${M("\\dfrac{1}{x}+\\dfrac{1}{x+1}+\\dfrac{1}{x(x+1)}")}.`, [
    `PPDC \\(=x(x+1)\\). Numérateur : \\((x+1)+x+1=2x+2=2(x+1)\\).`,
    `\\(\\dfrac{2(x+1)}{x(x+1)}\\) : élimine \\((x+1)\\).`,
    `<b>Vérification avec</b> \\(x=1\\). Expression de départ : \\(1+\\frac12+\\frac12=2\\). Réponse : \\(\\frac21=2\\) ✓`,
  ], `${M("\\dfrac2x")}, \\(x\\ne0,\\ -1\\). Trois fractions se sont réduites à une seule, très simple — les graphiques coïncident :`, sumGraph)}
  ${ex("Exemple 9 : Une fraction composée", `Simplifie ${M("\\dfrac{1+\\frac1x}{1-\\frac1{x^2}}")}.`, [
    `Combine le haut : \\(1+\\dfrac1x=\\dfrac{x+1}{x}\\). Combine le bas : \\(1-\\dfrac1{x^2}=\\dfrac{x^2-1}{x^2}\\).`,
    `Divise en multipliant par l'inverse : \\(\\dfrac{x+1}{x}\\times\\dfrac{x^2}{(x-1)(x+1)}\\). Élimine \\(x\\) et \\((x+1)\\).`,
    `<b>Vérification avec</b> \\(x=2\\). Expression de départ : \\(\\frac{1.5}{0.75}=2\\). Réponse : \\(\\frac21=2\\) ✓`,
  ], `${M("\\dfrac{x}{x-1}")}, avec \\(x\\ne0,\\ 1,\\ -1\\).`, gframe(["y = (1+1/x)/(1-1/x^2)", "y = x/(x-1)"], { title: "Les deux formes tracent une seule courbe, à part les points manquants", ...gview(-6, 6, -6, 8) }))}
  ${ex("Exemple 10 : Des taux de travail", `Le tuyau A remplit un réservoir en \\(x\\) heures; le tuyau B le remplit en \\((x+3)\\) heures. Écris le temps nécessaire pour remplir le réservoir avec les deux tuyaux ouverts.`, [
    `Les taux s'additionnent : en une heure, A remplit \\(\\dfrac1x\\) du réservoir et B en remplit \\(\\dfrac{1}{x+3}\\). Ensemble : \\(\\dfrac1x+\\dfrac1{x+3}=\\dfrac{(x+3)+x}{x(x+3)}=\\dfrac{2x+3}{x(x+3)}\\).`,
    `Temps \\(=1\\div\\text{taux}\\) : on inverse la fraction.`,
  ], `Temps \\(=\\dfrac{x(x+3)}{2x+3}\\) heures. Si A prend \\(6\\) h et B prend \\(9\\) h : \\(\\dfrac{54}{15}=3.6\\) h (vérification : \\(\\tfrac16+\\tfrac19=\\tfrac5{18}\\), et \\(\\tfrac{18}{5}=3.6\\) ✓).`, gframe([{ kind: "cartesian", expr: "y = x*(x+3)/(2*x+3)", dMin: "0", dMax: "14" }], { title: "Le temps ensemble, selon le temps x de A", labels: [{ x: 6, y: 3.6, t: "(6, 3.6)" }], ...gview(-1, 15, -1, 9) }))}
  ${ex("Exemple 11 : Des résistances en parallèle", `Deux résistances de \\(x\\) et de \\(2x\\) ohms sont branchées en parallèle. La résistance totale \\(R\\) vérifie \\(\\dfrac1R=\\dfrac1x+\\dfrac1{2x}\\). Trouve \\(R\\).`, [
    `PPDC \\(2x\\) : \\(\\dfrac{2}{2x}+\\dfrac{1}{2x}=\\dfrac{3}{2x}\\).`,
    `Inverse : \\(R=\\dfrac{2x}{3}\\).`,
  ], `\\(R=\\dfrac{2x}{3}\\) ohms — toujours plus petite que la plus petite résistance, comme l'exigent les circuits en parallèle. Pour \\(x=9\\) : \\(6\\) Ω (\\(\\tfrac19+\\tfrac1{18}=\\tfrac16\\) ✓).`, gframe([{ kind: "cartesian", expr: "y = 2*x/3", dMin: "0", dMax: "12" }, { kind: "cartesian", expr: "y = x", dMin: "0", dMax: "12" }], { title: "R (droite du bas) est toujours sous la plus petite résistance, x", labels: [{ x: 9, y: 6, t: "(9, 6)" }], ...gview(-1, 13, -1, 13) }))}

  ${mistake("\\(\\dfrac2x+\\dfrac35=\\dfrac{5}{x+5}\\)", "On additionne des fractions sur un dénominateur <em>commun</em> — on n'additionne jamais les dénominateurs. Pour \\(x=5\\) : \\(\\tfrac25+\\tfrac35=1\\) mais \\(\\tfrac{5}{5+5}=\\tfrac12\\).", "\\(\\dfrac2x+\\dfrac35=\\dfrac{10+3x}{5x}\\).")}
  ${mistake("\\(\\dfrac{5}{x}-\\dfrac{x-1}{x}=\\dfrac{5-x-1}{x}\\)", "Le moins doit s'appliquer aux <em>deux</em> termes de \\((x-1)\\). Le numérateur devient \\(5-x+1\\), et non \\(5-x-1\\). Pour \\(x=2\\) : \\(\\tfrac52-\\tfrac12=2\\), mais \\(\\tfrac{5-2-1}{2}=1\\).", "\\(\\dfrac{5-(x-1)}{x}=\\dfrac{6-x}{x}\\).")}
  ${watchOut([
    "Utilise le <strong>plus petit</strong> dénominateur commun : il garde les nombres petits et permet souvent de simplifier à la fin.",
    "Des parenthèses autour du deuxième numérateur quand tu soustrais : \\(\\dfrac{a}{D}-\\dfrac{b+c}{D}=\\dfrac{a-(b+c)}{D}\\).",
    "Multiplie le <em>numérateur</em> par ce que tu as multiplié au dénominateur — les fractions doivent rester équivalentes.",
    "Dénominateurs opposés : \\(\\dfrac{a}{x-4}\\) et \\(\\dfrac{b}{4-x}\\) ont le même dénominateur une fois \\(-1\\) mis en évidence.",
    "N'élimine jamais des termes : dans \\(\\dfrac{x+3}{x(x+3)}\\), tu élimines le <em>facteur</em> \\((x+3)\\), mais dans \\(\\dfrac{x+3}{x+5}\\), rien ne s'élimine.",
    "Garde les restrictions de <strong>chaque</strong> dénominateur de départ, même celles qui disparaissent de la réponse finale.",
  ])}

  <h2>🟡 Questions d'entraînement</h2>
  ${pr(1, "Connaissance", `Simplifie ${M("\\dfrac{7x-2}{x+4}-\\dfrac{3x+6}{x+4}")}.`, `${M(P1.tex)}, c'est-à-dire \\(\\dfrac{4(x-2)}{x+4}\\), \\(x\\ne-4\\).`)}
  ${pr(2, "Connaissance", `Simplifie ${M("\\dfrac{5}{6x}-\\dfrac{2}{9x^2}")}.`, `PPDC \\(18x^2\\) : \\(\\dfrac{15x-4}{18x^2}\\), \\(x\\ne0\\).`)}
  ${pr(3, "Connaissance", `Simplifie ${M("\\dfrac{3}{x-5}+\\dfrac{4}{x+2}")}.`, `${M(P3.tex)}, qui se factorise en \\(\\dfrac{7(x-2)}{(x-5)(x+2)}\\) (rien ne s'élimine).`)}
  ${pr(4, "Habiletés de la pensée", `Simplifie ${M("\\dfrac{2}{x^2-1}+\\dfrac{3}{x^2+x-2}")}.`, `\\(x^2-1=(x-1)(x+1)\\), \\(x^2+x-2=(x+2)(x-1)\\). PPDC \\((x-1)(x+1)(x+2)\\) : numérateur \\(2(x+2)+3(x+1)=5x+7\\). ${M(P4.tex)}.`)}
  ${pr(5, "Habiletés de la pensée", `Simplifie ${M("\\dfrac{x}{x+2}-\\dfrac{4}{x^2+2x}")}.`, `PPDC \\(x(x+2)\\) : \\(\\dfrac{x^2-4}{x(x+2)}=\\dfrac{(x-2)(x+2)}{x(x+2)}=\\dfrac{x-2}{x}\\), \\(x\\ne0,-2\\).`)}
  ${pr(6, "Habiletés de la pensée", `Simplifie ${M("\\dfrac{4}{x-3}+\\dfrac{6}{3-x}")}.`, `\\(\\dfrac{4}{x-3}-\\dfrac{6}{x-3}=\\dfrac{-2}{x-3}\\), \\(x\\ne3\\).`)}
  ${pr(7, "Habiletés de la pensée", `Simplifie la fraction composée ${M("\\dfrac{\\frac1x-\\frac13}{x-3}")}.`, `Haut : \\(\\dfrac{3-x}{3x}=\\dfrac{-(x-3)}{3x}\\). En divisant par \\((x-3)\\) : \\(\\dfrac{-1}{3x}\\), \\(x\\ne0,3\\).`)}
  ${pr(8, "Mise en application", `La machine A termine un travail en \\(x\\) heures et la machine B en \\((x-2)\\) heures. Écris le temps pour le terminer ensemble sous forme d'une seule fraction. Si A prend \\(6\\) heures, combien de temps prennent-elles ensemble?`, `\\(\\text{temps}=\\dfrac{x(x-2)}{2x-2}\\). Avec \\(x=6\\) : \\(\\dfrac{24}{10}=2.4\\) heures (vérification : \\(\\tfrac16+\\tfrac14=\\tfrac5{12}\\), et \\(\\tfrac{12}{5}=2.4\\) ✓).`)}
  ${challenge("Montre que \\(\\dfrac1x-\\dfrac1{x+1}=\\dfrac{1}{x(x+1)}\\), puis utilise ce résultat pour trouver \\(\\dfrac1{1\\cdot2}+\\dfrac1{2\\cdot3}+\\dfrac1{3\\cdot4}+\\cdots+\\dfrac1{9\\cdot10}\\) sans additionner neuf fractions.", `\\(\\dfrac1x-\\dfrac1{x+1}=\\dfrac{(x+1)-x}{x(x+1)}=\\dfrac1{x(x+1)}\\). Chaque terme est donc une différence : \\((1-\\tfrac12)+(\\tfrac12-\\tfrac13)+(\\tfrac13-\\tfrac14)+\\cdots+(\\tfrac19-\\tfrac1{10})\\). Tout s'annule sauf les extrémités : \\(1-\\tfrac1{10}=\\tfrac{9}{10}\\). (C'est ce qu'on appelle une somme <em>télescopique</em>.)`)}

  <h2>❓ Questions et réponses</h2>
  ${qa("Q1 : Qu'est-ce que le PPDC et pourquoi l'utiliser?", "C'est la plus petite expression divisible par chaque dénominateur. L'utiliser garde le numérateur petit et permet habituellement de simplifier à la fin.")}
  ${qa("Q2 : Comment trouver le PPDC de \\(x^2-9\\) et de \\(x^2+x-12\\)?", "Factorise : \\((x-3)(x+3)\\) et \\((x+4)(x-3)\\). Prends chaque facteur différent une fois : \\((x-3)(x+3)(x+4)\\).")}
  ${qa("Q3 : Quelle est l'erreur la plus fréquente quand on soustrait?", "Oublier de changer le signe de chaque terme du deuxième numérateur. Mets-le d'abord entre parenthèses.")}
  ${qa("Q4 : Et si les dénominateurs sont opposés, comme \\(x-4\\) et \\(4-x\\)?", "Réécris \\(4-x\\) sous la forme \\(-(x-4)\\); les dénominateurs sont alors identiques et il suffit de combiner les numérateurs.")}
  ${qa("Q5 : Faut-il des restrictions après avoir combiné?", "Oui — celles de chaque dénominateur de départ. Une restriction peut disparaître de la forme simplifiée, mais elle s'applique toujours.")}
  ${qa("Q6 : Comment traiter une fraction dans une fraction?", "Combine le haut et le bas en une seule fraction chacun, puis divise en multipliant par l'inverse du bas.")}
</div>`;

export const blocks = () => [html(lessonHtml)];
