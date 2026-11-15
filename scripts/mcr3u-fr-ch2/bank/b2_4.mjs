// MCR3U-FR banque 2.4 — 60 questions (20/20/20), miroir de bank() de ../../mcr3u-ch2/t2_4.mjs (identique aux lignes LIVE).
import assert from "node:assert";
import { P, pmulAll, ptex, verify, graphSvg } from "../lib.mjs";
import { RE, R } from "../kit4.mjs";
import { V2 } from "../kit.mjs";
import { mc, ms, tf, num, fill, order, match } from "../../bank-mpm2d/helpers.mjs";

export const TOPIC = "2.4 Addition et soustraction d'expressions rationnelles";
const T = (s) => `$${s}$`;
const isNum = (v) => Number.isFinite(v);
let _pos = 0;
function RC(diff, prompt, correct, wrongs, fb = "") {
  const all = [correct, ...wrongs], texs = all.map((a) => a.tex);
  assert.strictEqual(new Set(texs).size, texs.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) { let differs = false; for (const x of [-3.3, -1.7, 0.6, 2.4, 4.9, 7.1]) { const u = correct.f(x), v = w.f(x); if (isNum(u) && isNum(v) && Math.abs(u - v) > 1e-9) differs = true; } assert.ok(differs, `distractor ${w.tex} is equivalent to the correct answer! (${prompt})`); }
  const pos = _pos++ % all.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}

export function bank() {
  _pos = 0;
  const q = [];
  // ── facile (20) ──
  q.push(MC("easy", "Quel est le PPDC de $\\dfrac{1}{4x}$ et de $\\dfrac{1}{6x^2}$?", "$12x^2$", ["$24x^3$", "$12x$", "$2x^2$"], "$\\mathrm{lcm}(4,6)=12$ et la plus grande puissance de $x$ est $x^2$."));
  q.push(MC("easy", "Quel est le PPDC de $\\dfrac{1}{x+2}$ et de $\\dfrac{1}{x-3}$?", "$(x+2)(x-3)$", ["$x+2$", "$x-3$", "$x^2-1$"], "Aucun facteur commun, donc le PPDC est le produit."));
  q.push(MC("easy", "Quel est le PPDC de $\\dfrac{3}{x(x-1)}$ et de $\\dfrac{2}{x^2}$?", "$x^2(x-1)$", ["$x(x-1)$", "$x^2$", "$x^3(x-1)$"], "La plus grande puissance de chaque facteur : $x^2$ et $(x-1)$."));
  { const a = RE("4x+6", ["x-2"]); verify("B-4", (x) => (3 * x + 1) / (x - 2) + (x + 5) / (x - 2), a.f);
    q.push(RC("easy", "Simplifie $\\dfrac{3x+1}{x-2}+\\dfrac{x+5}{x-2}$.", a, [RE("4x+6", ["2x-4"]), RE("4x+6", ["x-2", "x-2"]), RE("3x+5", ["x-2"])], "Même dénominateur : additionne les numérateurs, $3x+1+x+5=4x+6$.")); }
  { const a = RE("3x+6", ["x+1"]); verify("B-5", (x) => (5 * x + 2) / (x + 1) - (2 * x - 4) / (x + 1), a.f);
    q.push(RC("easy", "Simplifie $\\dfrac{5x+2}{x+1}-\\dfrac{2x-4}{x+1}$.", a, [RE("3x-2", ["x+1"]), RE("7x-2", ["x+1"]), RE("3x+6", ["x-1"])], "$5x+2-(2x-4)=5x+2-2x+4=3x+6$.")); }
  q.push(MC("easy", "Simplifie $\\dfrac{1}{x}+\\dfrac{2}{x}$.", "$\\dfrac{3}{x}$", ["$\\dfrac{3}{2x}$", "$\\dfrac{3}{x^2}$", "$\\dfrac{2}{x^2}$"], "Même dénominateur : additionne seulement les numérateurs."));
  { verify("B-7", (x) => 3 / (2 * x) + 1 / (3 * x), (x) => 11 / (6 * x)); q.push(MC("easy", "Simplifie $\\dfrac{3}{2x}+\\dfrac{1}{3x}$.", "$\\dfrac{11}{6x}$", ["$\\dfrac{4}{5x}$", "$\\dfrac{4}{6x}$", "$\\dfrac{11}{5x}$"], "PPDC $6x$ : $\\dfrac{9}{6x}+\\dfrac{2}{6x}$.")); }
  q.push(num("easy", "Quelle est la partie numérique du PPDC de $\\dfrac{1}{6x}$ et de $\\dfrac{1}{9x}$?", 18, 0, "$\\mathrm{lcm}(6,9)=18$."));
  q.push(tf("easy", "$\\dfrac1x+\\dfrac1y=\\dfrac{2}{x+y}$.", false, "On n'additionne jamais les dénominateurs. $\\dfrac1x+\\dfrac1y=\\dfrac{y+x}{xy}$."));
  q.push(tf("easy", "Pour additionner des fractions de dénominateurs différents, il faut d'abord les réécrire sur un dénominateur commun.", true));
  q.push(fill("easy", "$\\dfrac{2}{x}+\\dfrac{5}{x}=$ ___", ["7/x", "7 / x"], "Même dénominateur."));
  q.push(fill("easy", "Le PPDC de $\\dfrac1x$ et de $\\dfrac1{x+1}$ est ___", ["x(x+1)", "(x+1)x", "x(1+x)", "x*(x+1)", "x(x + 1)"], "Aucun facteur commun, donc on multiplie."));
  q.push(ms("easy", "Lesquels sont des dénominateurs communs valides pour $\\dfrac1x$ et $\\dfrac1{x+2}$?", ["$x(x+2)$", "$x^2(x+2)$", "$x+2$", "$2x(x+2)$"], [0, 1, 3], "Un dénominateur commun doit être divisible par les deux dénominateurs; le <em>plus petit</em> est $x(x+2)$."));
  q.push(ms("easy", "Lesquelles sont des restrictions de $\\dfrac{3}{x-1}+\\dfrac{2}{x+4}$?", ["$x\\ne1$", "$x\\ne-4$", "$x\\ne3$", "$x\\ne2$"], [0, 1], "Les valeurs qui annulent un dénominateur."));
  q.push(match("easy", "Associe chaque somme à son résultat.", ["$\\dfrac1x+\\dfrac2x$", "$\\dfrac2x-\\dfrac3x$", "$\\dfrac5x-\\dfrac5x$"], ["$\\dfrac3x$", "$-\\dfrac1x$", "$0$"], [0, 1, 2]));
  { const f = (x) => (2 * x) / (x * x - 1); verify("B-16", (x) => 1 / (x - 1) + 1 / (x + 1), f);
    q.push({ ...mc("easy", "Le graphique est celui de $y=\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$. Où sont ses asymptotes verticales?", ["$x=1$ et $x=-1$", "$x=0$ seulement", "$x=2$ et $x=-2$", "il n'y en a aucune"], 0, "Les dénominateurs $x-1$ et $x+1$ valent zéro en $x=\\pm1$."),
      image: graphSvg({ fn: f, domain: [-5, -1.06], extraCurves: [{ fn: f, domain: [-0.95, 0.95], color: "#2563a0" }, { fn: f, domain: [1.06, 5], color: "#2563a0" }], xmin: -5, xmax: 5, ymin: -6, ymax: 6, title: "y = 1/(x − 1) + 1/(x + 1)" }) }); }
  q.push(MC("easy", "Simplifie $\\dfrac5x-\\dfrac3x$.", "$\\dfrac2x$", ["$\\dfrac{2}{0}$", "$\\dfrac8x$", "$2x$"], "Soustrais les numérateurs sur le même dénominateur."));
  q.push(order("easy", "Place les étapes dans l'ordre pour additionner $\\dfrac{1}{x}+\\dfrac{1}{x+2}$.", ["Trouve le PPDC : $x(x+2)$", "Réécris chaque fraction sur le PPDC", "Additionne les numérateurs", "Simplifie et énonce les restrictions $x\\ne0,\\ -2$"]));
  q.push(num("easy", "Évalue $\\dfrac{1}{x}+\\dfrac{1}{2x}$ pour $x=3$.", 0.5, 0.001, "$\\dfrac13+\\dfrac16=\\dfrac12$."));
  q.push(tf("easy", "Les dénominateurs $x-3$ et $3-x$ peuvent devenir égaux en mettant $-1$ en évidence.", true, "$3-x=-(x-3)$."));

  // ── moyen (20) ──
  { const a = RE("7x+23", ["x-1", "x+4"]); verify("B-21", (x) => 6 / (x - 1) + 1 / (x + 4), a.f);
    q.push(RC("medium", "Simplifie $\\dfrac{6}{x-1}+\\dfrac{1}{x+4}$.", a, [RE("7x+5", ["x-1", "x+4"]), RE("7", ["x-1", "x+4"]), RE("7x+23", ["x+3"])], "$6(x+4)+1(x-1)=6x+24+x-1=7x+23$.")); }
  { const a = RE("4x-34", ["x+2", "x-4"]); verify("B-22", (x) => 7 / (x + 2) - 3 / (x - 4), a.f);
    q.push(RC("medium", "Simplifie $\\dfrac{7}{x+2}-\\dfrac{3}{x-4}$.", a, [RE("4x-22", ["x+2", "x-4"]), RE("10x-34", ["x+2", "x-4"]), RE("4", ["x+2", "x-4"])], "$7(x-4)-3(x+2)=7x-28-3x-6=4x-34$.")); }
  { const a = RE("x+1", ["x", "x-1"]); verify("B-23", (x) => 1 / (x * x - x) + 1 / (x - 1), a.f);
    q.push(RC("medium", "Simplifie $\\dfrac{1}{x^2-x}+\\dfrac{1}{x-1}$.", a, [RE("2", ["x", "x-1"]), RE("x+1", ["x-1"]), RE("1", ["x", "x-1", "x-1"])], "$x^2-x=x(x-1)$; il manque $x$ à la deuxième fraction.")); }
  { verify("B-24", (x) => 3 / (x - 4) + 2 / (4 - x), (x) => 1 / (x - 4));
    q.push(RC("medium", "Simplifie $\\dfrac{3}{x-4}+\\dfrac{2}{4-x}$.", RE("1", ["x-4"]), [RE("5", ["x-4"]), RE("-1", ["x-4"]), RE("5", ["x-4", "x-4"])], "$\\dfrac{2}{4-x}=-\\dfrac{2}{x-4}$, donc $\\dfrac{3-2}{x-4}$.")); }
  { verify("B-25", (x) => (2 * x) / (x * x - 9) - 1 / (x - 3), (x) => 1 / (x + 3));
    q.push(RC("medium", "Simplifie $\\dfrac{2x}{x^2-9}-\\dfrac{1}{x-3}$.", RE("1", ["x+3"]), [RE("1", ["x-3"]), RE("x-3", ["x+3"]), RE("2x-1", ["x-3", "x+3"])], "$\\dfrac{2x-(x+3)}{(x-3)(x+3)}=\\dfrac{x-3}{(x-3)(x+3)}=\\dfrac{1}{x+3}$.")); }
  { const a = RE("8", ["x+1", "x+3"]); verify("B-26", (x) => 4 / (x + 1) - 4 / (x + 3), a.f);
    q.push(RC("medium", "Simplifie $\\dfrac{4}{x+1}-\\dfrac{4}{x+3}$.", a, [RE("8", ["x+1"]), RE("4", ["x+1", "x+3"]), RE("-8", ["x+1", "x+3"])], "$\\dfrac{4(x+3)-4(x+1)}{(x+1)(x+3)}=\\dfrac{8}{(x+1)(x+3)}$.")); }
  { const a = RE("2x^2+2", ["x-1", "x+1"]); verify("B-27", (x) => (x + 1) / (x - 1) + (x - 1) / (x + 1), a.f);
    q.push(RC("medium", "Simplifie $\\dfrac{x+1}{x-1}+\\dfrac{x-1}{x+1}$.", a, [RE("2x", ["x-1", "x+1"]), RE("2", ["x-1", "x+1"]), RE("2x^2", ["x-1", "x+1"])], "$(x+1)^2+(x-1)^2=2x^2+2$ sur $(x-1)(x+1)$.")); }
  q.push(MC("medium", "Quel est le PPDC de $\\dfrac{1}{x^2-4}$ et de $\\dfrac{1}{x^2+4x+4}$?", "$(x-2)(x+2)^2$", ["$(x-2)(x+2)$", "$(x-2)^2(x+2)^2$", "$(x^2-4)(x+2)$"], "$(x-2)(x+2)$ et $(x+2)^2$ : la plus grande puissance de $(x+2)$ est 2."));
  q.push(MC("medium", "Quel est le PPDC de $\\dfrac{1}{x^2-x-6}$ et de $\\dfrac{1}{x^2-9}$?", "$(x-3)(x+2)(x+3)$", ["$(x-3)(x+2)$", "$(x-3)^2(x+2)(x+3)$", "$(x+2)(x+3)$"], "$(x-3)(x+2)$ et $(x-3)(x+3)$ : $(x-3)$ est commun."));
  q.push(num("medium", "Évalue $\\dfrac13+\\dfrac1x$ pour $x=6$.", 0.5, 0.001, "$\\dfrac13+\\dfrac16=\\dfrac12$."));
  q.push(fill("medium", "$\\dfrac4x-\\dfrac1{2x}=$ ___", ["7/(2x)", "7/(2*x)", "7 / (2x)", "7/2x"], "PPDC $2x$ : $\\dfrac{8-1}{2x}$."));
  q.push(fill("medium", "$\\dfrac1x-\\dfrac1{x+1}=$ ___", ["1/(x(x+1))", "1/(x^2+x)", "1/(x²+x)", "1/((x+1)x)", "1/(x(x+1))"], "$\\dfrac{(x+1)-x}{x(x+1)}$."));
  q.push(tf("medium", "$\\dfrac ab+\\dfrac cd=\\dfrac{a+c}{b+d}$.", false, "Additionne sur un dénominateur commun : $\\dfrac{ad+bc}{bd}$."));
  q.push(tf("medium", "Quand on soustrait des expressions rationnelles, le signe moins s'applique à chaque terme du deuxième numérateur.", true));
  { verify("B-35a", (x) => 3 / (x - 2) - 3 / (x + 2), (x) => 12 / (x * x - 4));
    q.push(ms("medium", "Considère $\\dfrac{3}{x-2}-\\dfrac{3}{x+2}$. Quels énoncés sont vrais?", ["elle est égale à $\\dfrac{12}{x^2-4}$", "ses restrictions sont $x\\ne\\pm2$", "sa valeur pour $x=0$ est $-3$", "elle se simplifie en $\\dfrac{3}{4}$"], [0, 1, 2], "$\\dfrac{3(x+2)-3(x-2)}{(x-2)(x+2)}=\\dfrac{12}{x^2-4}$; pour $x=0$ : $\\dfrac{12}{-4}=-3$.")); }
  q.push(ms("medium", "Pour $\\dfrac{1}{x^2-1}$ et $\\dfrac{1}{x^2+x}$, quels énoncés sont vrais?", ["le PPDC est $x(x-1)(x+1)$", "il manque le facteur $x$ à $x^2-1$", "il manque le facteur $(x-1)$ à $x^2+x$", "le PPDC est $x^2-1$"], [0, 1, 2], "$x^2-1=(x-1)(x+1)$, $x^2+x=x(x+1)$."));
  { verify("B-37a", (x) => 1 / x + 2 / x, (x) => 3 / x); verify("B-37b", (x) => 2 / x - 3 / x, (x) => -1 / x); verify("B-37c", (x) => 1 / x + 1 / (x + 1), (x) => (2 * x + 1) / (x * (x + 1))); verify("B-37d", (x) => 1 / x - 1 / (x + 1), (x) => 1 / (x * (x + 1)));
    q.push(match("medium", "Associe chaque somme ou différence à sa forme simplifiée.", ["$\\dfrac1x+\\dfrac2x$", "$\\dfrac2x-\\dfrac3x$", "$\\dfrac1x+\\dfrac1{x+1}$", "$\\dfrac1x-\\dfrac1{x+1}$"], ["$\\dfrac3x$", "$-\\dfrac1x$", "$\\dfrac{2x+1}{x(x+1)}$", "$\\dfrac{1}{x(x+1)}$"], [0, 1, 2, 3])); }
  q.push(num("medium", "Le robinet A remplit un réservoir en $10$ minutes et le robinet B en $15$ minutes. Combien de minutes leur faut-il ensemble?", 6, 0, "Les taux s'additionnent : $\\dfrac1{10}+\\dfrac1{15}=\\dfrac{5}{30}=\\dfrac16$ du réservoir par minute, donc $6$ minutes."));
  { const f = (x) => 2 / (x - 2); verify("B-39", (x) => 3 / (x - 2) - 1 / (x - 2), f);
    q.push({ ...mc("medium", "Le graphique montre $y=\\dfrac{3}{x-2}-\\dfrac{1}{x-2}$. Quelle fraction unique lui est égale?", ["$\\dfrac{2}{x-2}$", "$\\dfrac{4}{x-2}$", "$\\dfrac{2}{(x-2)^2}$", "$\\dfrac{3}{x-2}$"], 0, "Même dénominateur : $3-1=2$. Le graphique passe par $(3,2)$, ce qui convient à $\\dfrac{2}{x-2}$."),
      image: graphSvg({ fn: f, domain: [-4, 1.7], extraCurves: [{ fn: f, domain: [2.3, 8], color: "#2563a0" }], xmin: -4, xmax: 8, ymin: -5, ymax: 6, points: [{ x: 3, y: 2, label: "(3, 2)", color: "#1e293b" }], title: "Un graphique rationnel" }) }); }
  q.push(order("medium", "Place les étapes dans l'ordre pour simplifier $\\dfrac{3}{x-1}-\\dfrac{2}{x+2}$.", ["Trouve le PPDC $(x-1)(x+2)$", "Écris $\\dfrac{3(x+2)-2(x-1)}{(x-1)(x+2)}$, en mettant le deuxième produit entre parenthèses", "Développe : $3x+6-2x+2=x+8$", "Donne le résultat $\\dfrac{x+8}{(x-1)(x+2)}$ et les restrictions"]));

  // ── difficile (20) ──
  { const a = RE("-2x+12", ["x", "x-4", "x+4"]); verify("B-41", (x) => 3 / (x * x - 4 * x) - 5 / (x * x - 16), a.f); assert.strictEqual(ptex(pmulAll(P("x"), P("x-4"))), "x^2 - 4x");
    q.push(RC("hard", "Simplifie $\\dfrac{3}{x^2-4x}-\\dfrac{5}{x^2-16}$.", a, [RE("-2x+12", ["x", "x-4"]), RE("2x+12", ["x", "x-4", "x+4"]), RE("-2x-12", ["x", "x-4", "x+4"]), RE("-2", ["x-4", "x+4"])], "PPDC $x(x-4)(x+4)$ : $3(x+4)-5x=-2x+12$.")); }
  { verify("B-42", (x) => 2 / (x - 3) + 3 / (x + 3) - (5 * x - 3) / (x * x - 9), () => 0);
    q.push(mc("hard", "Simplifie $\\dfrac{2}{x-3}+\\dfrac{3}{x+3}-\\dfrac{5x-3}{x^2-9}$.", ["$\\dfrac{4x-12}{x^2-9}$", "$0$", "$\\dfrac{2}{x^2-9}$", "$\\dfrac{10x-3}{x^2-9}$"], 1, "$2(x+3)+3(x-3)-(5x-3)=2x+6+3x-9-5x+3=0$. L'expression vaut $0$ partout où elle est définie ($x\\ne\\pm3$).")); }
  { verify("B-43", (x) => (x - 4 / x) / (1 + 2 / x), (x) => x - 2);
    q.push(RC("hard", "Simplifie la fraction composée $\\dfrac{x-\\frac4x}{1+\\frac2x}$.", R(["x-2"], ["1"]), [R(["x+2"], ["1"]), R(["x-2"], ["x"]), RE("x^2+4", ["x+2"])], "Haut $\\dfrac{x^2-4}{x}$, bas $\\dfrac{x+2}{x}$ : $\\dfrac{(x-2)(x+2)}{x}\\times\\dfrac{x}{x+2}=x-2$.")); }
  { const s = [...Array(22)].map((_, i) => 1 / ((i + 3) * (i + 4))).reduce((a, b) => a + b, 0); assert.ok(Math.abs(s - (1 / 3 - 1 / 25)) < 1e-12);
    q.push(num("hard", "Évalue $\\dfrac{1}{3\\cdot4}+\\dfrac1{4\\cdot5}+\\dfrac1{5\\cdot6}+\\cdots+\\dfrac1{24\\cdot25}$, arrondi à $3$ décimales.", 0.293, 0.001, "Chaque terme vaut $\\dfrac1n-\\dfrac1{n+1}$; la somme télescopique donne $\\dfrac13-\\dfrac1{25}=\\dfrac{22}{75}\\approx0.293$.")); }
  { verify("B-45", (x) => 1 / (x - 2) - 1 / (x + 5), (x) => 7 / ((x - 2) * (x + 5)));
    q.push(num("hard", "$\\dfrac{7}{(x-2)(x+5)}=\\dfrac{A}{x-2}+\\dfrac{B}{x+5}$. Trouve $A-B$.", 2, 0, "$A(x+5)+B(x-2)=7$ : $A+B=0$ et $5A-2B=7$, donc $A=1,\\ B=-1$ et $A-B=2$.")); }
  { const k = 2; verify("B-46", (x) => 3 / (x - 2) + k / (x + 1), (x) => (5 * x - 1) / ((x - 2) * (x + 1)));
    q.push(num("hard", "$\\dfrac{3}{x-2}+\\dfrac{k}{x+1}=\\dfrac{5x-1}{(x-2)(x+1)}$. Trouve $k$.", 2, 0, "$3(x+1)+k(x-2)=5x-1$ : en comparant les termes en $x$, $3+k=5$, donc $k=2$ (vérifie les constantes : $3-2k=-1$ ✓).")); }
  { const a = RE("2", ["x-1", "x+1"]); verify("B-47", (x) => 1 / (x * x + x) + 1 / (x * x - x), a.f);
    q.push(RC("hard", "Simplifie $\\dfrac{1}{x^2+x}+\\dfrac{1}{x^2-x}$ et donne la réponse sous sa forme la plus simple.", a, [RE("2", ["x", "x-1", "x+1"]), RE("2x", ["x-1", "x+1"]), RE("x", ["x-1", "x+1"])], "$x(x+1)$ et $x(x-1)$ : PPDC $x(x-1)(x+1)$. Numérateur $(x-1)+(x+1)=2x$, puis $x$ s'élimine : $\\dfrac{2}{(x-1)(x+1)}$ avec $x\\ne0,\\pm1$.")); }
  { V2("B-48", (x, h) => (1 / (x + h) - 1 / x) / h, (x, h) => -1 / (x * (x + h)));
    q.push(mc("hard", "Simplifie $\\dfrac{\\frac{1}{x+h}-\\frac{1}{x}}{h}$ (un taux de variation).", ["$\\dfrac{-1}{x(x+h)}$", "$\\dfrac{1}{x(x+h)}$", "$\\dfrac{-h}{x(x+h)}$", "$\\dfrac{-1}{h}$"], 0, "$\\dfrac1{x+h}-\\dfrac1x=\\dfrac{x-(x+h)}{x(x+h)}=\\dfrac{-h}{x(x+h)}$; diviser par $h$ élimine le $h$. (Tu le reverras en calcul différentiel.)")); }
  q.push(num("hard", "Une lentille vérifie $\\dfrac1f=\\dfrac1{d_o}+\\dfrac1{d_i}$. Si $f=8$ cm et $d_o=24$ cm, trouve $d_i$ en cm.", 12, 0, "$\\dfrac1{d_i}=\\dfrac18-\\dfrac1{24}=\\dfrac{3-1}{24}=\\dfrac1{12}$."));
  { verify("B-50", (x) => 1 / x - 1 / (x + 1), (x) => 1 / (x * (x + 1)));
    q.push(ms("hard", "Considère $\\dfrac1x-\\dfrac1{x+1}$. Quels énoncés sont vrais?", ["ses restrictions sont $x\\ne0,\\ -1$", "elle est égale à $\\dfrac{1}{x(x+1)}$", "elle est positive pour chaque valeur permise de $x$", "sa valeur pour $x=1$ est $\\dfrac12$"], [0, 1, 3], "$\\dfrac1{x(x+1)}$ est négative pour $-1<x<0$, donc elle n'est pas toujours positive.")); }
  q.push(tf("hard", "Le PPDC de deux expressions rationnelles est toujours le produit de leurs dénominateurs.", false, "Les facteurs communs ne sont comptés qu'une fois : le PPDC de $x(x-1)$ et de $(x-1)(x+1)$ est $x(x-1)(x+1)$, et non le produit."));
  q.push(tf("hard", "$\\dfrac{1}{x-3}+\\dfrac{1}{3-x}=0$ pour tout $x\\ne3$.", true, "$\\dfrac1{3-x}=-\\dfrac1{x-3}$."));
  { verify("B-53", (x) => 1 / (x - 2) + 1 / (x + 2), (x) => (2 * x) / (x * x - 4));
    q.push(fill("hard", "Simplifie $\\dfrac{1}{x-2}+\\dfrac{1}{x+2}$ : ___", ["2x/(x^2-4)", "2x/(x²-4)", "2x/((x-2)(x+2))", "2x/((x+2)(x-2))", "2x/(x^2 - 4)"], "$\\dfrac{(x+2)+(x-2)}{(x-2)(x+2)}$.")); }
  q.push(num("hard", "Si $a+b=7$ et $ab=12$, trouve $\\dfrac1{a^2}+\\dfrac1{b^2}$, arrondi à $3$ décimales.", 0.174, 0.001, "$\\dfrac{a^2+b^2}{(ab)^2}=\\dfrac{(a+b)^2-2ab}{(ab)^2}=\\dfrac{49-24}{144}=\\dfrac{25}{144}\\approx0.174$."));
  { const f = (x) => (2 * x) / (x * x - 4); verify("B-55", (x) => 1 / (x - 2) + 1 / (x + 2), f);
    q.push({ ...mc("hard", "Le graphique a des asymptotes verticales en $x=2$ et en $x=-2$ et passe par l'origine. De quelle expression s'agit-il?", ["$\\dfrac{1}{x-2}+\\dfrac{1}{x+2}$", "$\\dfrac{1}{x-2}-\\dfrac{1}{x+2}$", "$\\dfrac{2}{x^2-4}$", "$\\dfrac{1}{x-2}+\\dfrac{1}{x+2}+1$"], 0, "$\\dfrac{2x}{x^2-4}$ a un numérateur égal à $0$ en $x=0$. $\\dfrac1{x-2}-\\dfrac1{x+2}=\\dfrac{4}{x^2-4}$ ne passe pas par l'origine."),
      image: graphSvg({ fn: f, domain: [-6, -2.1], extraCurves: [{ fn: f, domain: [-1.9, 1.9], color: "#2563a0" }, { fn: f, domain: [2.1, 6], color: "#2563a0" }], xmin: -6, xmax: 6, ymin: -6, ymax: 6, title: "Un graphique rationnel" }) }); }
  { verify("B-56", (x) => 30 / (x - 3) + 30 / (x + 3), (x) => (60 * x) / (x * x - 9));
    q.push(num("hard", "Un bateau va à $x$ km/h en eau calme et le courant est de $3$ km/h. Il parcourt $30$ km en remontant le courant, puis $30$ km au retour en le descendant, ce qui prend au total $\\dfrac{30}{x-3}+\\dfrac{30}{x+3}$ heures. Trouve le temps total lorsque $x=12$, arrondi à $3$ décimales.", 5.333, 0.001, "$\\dfrac{30}{9}+\\dfrac{30}{15}=\\dfrac{10}{3}+2=\\dfrac{16}{3}\\approx5.333$ heures.")); }
  q.push(order("hard", "Place les étapes dans l'ordre pour simplifier $\\dfrac{\\frac1x-\\frac1y}{\\frac1x+\\frac1y}$.", ["Écris le haut sur un dénominateur commun : $\\dfrac{y-x}{xy}$", "Écris le bas sur un dénominateur commun : $\\dfrac{y+x}{xy}$", "Divise en multipliant par l'inverse du bas", "Élimine le facteur commun $xy$ : $\\dfrac{y-x}{y+x}$"]));
  { verify("B-58a", (x) => 1 / (x - 1) - 1 / (1 - x), (x) => 2 / (x - 1)); verify("B-58b", (x) => 1 / (x - 1) + 1 / (x + 1), (x) => (2 * x) / (x * x - 1)); verify("B-58c", (x) => x / (x - 1) - 1 / (x - 1), () => 1); verify("B-58d", (x) => 1 / (x * x) - 1 / x, (x) => (1 - x) / (x * x));
    q.push(match("hard", "Associe chaque expression à sa forme simplifiée — attention aux signes.", ["$\\dfrac{1}{x-1}-\\dfrac{1}{1-x}$", "$\\dfrac{1}{x-1}+\\dfrac{1}{x+1}$", "$\\dfrac{x}{x-1}-\\dfrac{1}{x-1}$", "$\\dfrac{1}{x^2}-\\dfrac{1}{x}$"], ["$\\dfrac{2}{x-1}$", "$\\dfrac{2x}{x^2-1}$", "$1$", "$\\dfrac{1-x}{x^2}$"], [0, 1, 2, 3])); }
  { verify("B-59", (x) => 2 / (x - 3) - (x + 1) / (x - 3), (x) => (1 - x) / (x - 3));
    q.push(RC("hard", "Simplifie $\\dfrac{2}{x-3}-\\dfrac{x+1}{x-3}$.", RE("-x+1", ["x-3"]), [RE("x+3", ["x-3"]), RE("x-1", ["x-3"]), RE("-x+1", ["x-3", "x-3"])], "$2-(x+1)=2-x-1=1-x$. Oublier la parenthèse donne le faux $x+3$.")); }
  { verify("B-60", (x) => 1 / (x * (x + 1)) + 1 / ((x + 1) * (x + 2)) + 1 / ((x + 2) * (x + 3)), (x) => 3 / (x * (x + 3)));
    q.push(num("hard", "$\\dfrac{1}{x(x+1)}+\\dfrac{1}{(x+1)(x+2)}+\\dfrac{1}{(x+2)(x+3)}$ se simplifie en une seule fraction. Trouve sa valeur pour $x=2$.", 0.3, 0.001, "Somme télescopique : $\\left(\\tfrac1x-\\tfrac1{x+1}\\right)+\\left(\\tfrac1{x+1}-\\tfrac1{x+2}\\right)+\\left(\\tfrac1{x+2}-\\tfrac1{x+3}\\right)=\\dfrac1x-\\dfrac1{x+3}=\\dfrac{3}{x(x+3)}$. Pour $x=2$ : $\\dfrac3{10}$.")); }
  return q;
}
