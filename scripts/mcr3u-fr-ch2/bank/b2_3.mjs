// MCR3U-FR banque 2.3 — 60 questions (20/20/20), miroir de bank() de ../../mcr3u-ch2/t2_3.mjs (identique aux lignes LIVE).
import { P, pmulAll, verify, graphSvg } from "../lib.mjs";
import { R, times, divide, eqv, restrVals, ptex, assert } from "../kit3.mjs";
import { V2 } from "../kit.mjs";
import { mc, ms, tf, num, fill, order, match } from "../../bank-mpm2d/helpers.mjs";

export const TOPIC = "2.3 Simplification d'expressions rationnelles";
const T = (s) => `$${s}$`;
let _pos = 0;
/** Choix multiple d'expressions rationnelles {tex,f}; chaque mauvais choix doit différer numériquement du bon. */
function RC(diff, prompt, correct, wrongs, fb = "") {
  const all = [correct, ...wrongs], texs = all.map((a) => a.tex);
  assert.strictEqual(new Set(texs).size, texs.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) { let differs = false; for (const x of [-3.3, -1.7, 0.6, 2.4, 4.9, 7.1]) { const u = correct.f(x), v = w.f(x); if (Number.isFinite(u) && Number.isFinite(v) && Math.abs(u - v) > 1e-9) differs = true; } assert.ok(differs, `distractor ${w.tex} is equivalent to the correct answer! (${prompt})`); }
  const pos = _pos++ % all.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
function withTex(rr, tex) { return { ...rr, tex }; }
const hollowPt = (x, y, label, extra = {}) => ({ x, y, label, color: "#1e293b", hollow: true, ...extra });

export function bank() {
  _pos = 0;
  const q = [];
  // ── facile (20) ──
  q.push(MC("easy", "Énonce la restriction de $\\dfrac{5}{x-4}$.", "$x\\ne4$", ["$x\\ne5$", "$x\\ne-4$", "$x\\ne0$"], "Le dénominateur $x-4$ vaut zéro lorsque $x=4$."));
  q.push(MC("easy", "Énonce les restrictions de $\\dfrac{x+1}{x^2-9}$.", "$x\\ne3$ et $x\\ne-3$", ["$x\\ne-1$", "$x\\ne9$", "$x\\ne3$ seulement"], "$x^2-9=(x-3)(x+3)$."));
  { verify("B-3", (x) => (15 * x * x) / (5 * x), (x) => 3 * x);
    q.push(RC("easy", "Simplifie $\\dfrac{15x^2}{5x}$.", R(["3", "x"], ["1"]), [R(["3"], ["x"]), R(["x"], ["3"]), R(["10", "x"], ["1"])], "Divise $15\\div5=3$ et $x^2\\div x=x$ (avec $x\\ne0$).")); }
  { const o = R(["x+2"], ["x", "x+2"]), s = R(["1"], ["x"]); eqv("B-4", o, s);
    q.push(RC("easy", "Simplifie $\\dfrac{x+2}{x^2+2x}$.", s, [R(["1"], ["x+2"]), R(["x"], ["1"]), R(["x+2"], ["x"])], "$x^2+2x=x(x+2)$; élimine $(x+2)$.")); }
  { const o = R(["x-4", "x+4"], ["x-4"]), s = R(["x+4"], ["1"]); eqv("B-5", o, s);
    q.push(RC("easy", "Simplifie $\\dfrac{x^2-16}{x-4}$.", s, [R(["x-4"], ["1"]), R(["x+4"], ["x-4"]), R(["x+16"], ["1"])], "$x^2-16=(x-4)(x+4)$.")); }
  { const o = R(["6", "x-1"], ["2", "x-1"]), s = R(["3"], ["1"]); eqv("B-6", o, s);
    q.push(RC("easy", "Simplifie $\\dfrac{6(x-1)}{2(x-1)}$.", s, [R(["4"], ["1"]), R(["3", "x-1"], ["1"]), R(["1"], ["3"])], "Élimine $2$ et $(x-1)$; restriction $x\\ne1$.")); }
  q.push(tf("easy", "$\\dfrac{x+3}{3}=x+1$.", false, "Seuls des facteurs peuvent être éliminés. Pour $x=3$ : $\\dfrac63=2$ mais $x+1=4$."));
  q.push(tf("easy", "Après l'élimination d'un facteur commun, l'expression simplifiée est équivalente à l'expression de départ pour chaque valeur de $x$ que celle-ci permet.", true));
  q.push(num("easy", "Évalue la forme simplifiée de $\\dfrac{x^2-1}{x-1}$ pour $x=5$.", 6, 0, "$\\dfrac{(x-1)(x+1)}{x-1}=x+1=6$."));
  q.push(num("easy", "Combien de valeurs de $x$ sont exclues dans $\\dfrac{x-2}{(x+1)(x-5)}$?", 2, 0, "$x=-1$ et $x=5$. Le numérateur $x-2$ ne crée aucune restriction."));
  q.push(fill("easy", "Simplifie $\\dfrac{x^2-25}{x-5}$ : ___", ["x+5", "5+x", "x + 5", "5 + x"], "Différence de carrés, puis élimine $(x-5)$."));
  q.push(fill("easy", "L'expression $\\dfrac{7}{x+9}$ est non définie lorsque $x=$ ___", ["-9", "−9"], "$x+9=0$."));
  q.push(ms("easy", "Quelles expressions sont équivalentes à $x+2$ pour chaque valeur permise de $x$?", ["$\\dfrac{x^2-4}{x-2}$", "$\\dfrac{x^2+4x+4}{x+2}$", "$\\dfrac{x^2+4}{x+2}$", "$\\dfrac{2x+4}{2}$"], [0, 1, 3], "$x^2+4$ ne se factorise pas, donc rien ne s'élimine."));
  q.push(ms("easy", "Lesquelles sont des restrictions de $\\dfrac{x+1}{(x-3)(x+4)}$?", ["$x\\ne3$", "$x\\ne-4$", "$x\\ne-1$", "$x\\ne0$"], [0, 1], "Seulement les valeurs qui annulent le dénominateur."));
  q.push(match("easy", "Associe chaque expression à sa forme simplifiée (pour les valeurs permises de $x$).", ["$\\dfrac{x^2-9}{x-3}$", "$\\dfrac{x^2-9}{x+3}$", "$\\dfrac{x^2-9}{3-x}$"], ["$x+3$", "$x-3$", "$-(x+3)$"], [0, 1, 2], "Le dernier dénominateur est $-(x-3)$."));
  { const f = (x) => x + 2;
    q.push({ ...mc("easy", "Le graphique montre $y=\\dfrac{x^2-4}{x-2}$. Qu'y a-t-il de particulier en $x=2$?", ["un trou en $(2,4)$", "une asymptote verticale en $x=2$", "une abscisse à l'origine en $(2,0)$", "le point maximal"], 0, "$\\dfrac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\ne2$ : la droite $y=x+2$ avec un trou où $x=2$ ($y=4$)."),
      image: graphSvg({ fn: f, xmin: -4, xmax: 6, ymin: -2, ymax: 8, domain: [-4, 6], points: [hollowPt(2, 4, "trou (2, 4)", { dx: 8, dy: -10 })], title: "y = (x² − 4)/(x − 2)" }) }); }
  q.push(MC("easy", "Quel facteur peut être éliminé dans $\\dfrac{(x+3)(x-2)}{(x+3)(x+5)}$?", "$(x+3)$", ["$x$", "$3$", "$(x-2)$"], "Seulement un facteur commun à tout le numérateur et à tout le dénominateur."));
  q.push(order("easy", "Place les étapes dans l'ordre pour simplifier $\\dfrac{x^2-4}{x^2+2x}$.", ["Factorise le numérateur et le dénominateur : $\\dfrac{(x-2)(x+2)}{x(x+2)}$", "Énonce les restrictions : $x\\ne0,\\ -2$", "Élimine le facteur commun $(x+2)$", "Écris le résultat : $\\dfrac{x-2}{x}$"]));
  { const o = R(["5", "x+3"], ["x+3"]); eqv("B-19", o, R(["5"], ["1"]));
    q.push(num("easy", "$\\dfrac{5x+15}{x+3}$ se simplifie en une constante $k$. Trouve $k$.", 5, 0, "$5x+15=5(x+3)$.")); }
  q.push(tf("easy", "$\\dfrac{x^2-1}{x-1}$ a encore la restriction $x\\ne1$ après avoir été simplifiée en $x+1$.", true, "L'expression de départ est non définie en $x=1$."));

  // ── moyen (20) ──
  { const o = R(["x-5", "x+5"], ["x+5", "x-2"]), s = R(["x-5"], ["x-2"]); eqv("B-21", o, s);
    q.push(RC("medium", "Simplifie $\\dfrac{x^2-25}{x^2+3x-10}$.", s, [R(["x-5"], ["x+2"]), R(["x+5"], ["x-2"]), R(["x-5"], ["x+5"])], "$x^2+3x-10=(x+5)(x-2)$; élimine $(x+5)$.")); }
  { const o = R(["12", "x", "x-2"], ["4", "x-2", "x+2"]), s = R(["3", "x"], ["x+2"]); eqv("B-22", o, s);
    q.push(RC("medium", "Simplifie $\\dfrac{12x^2-24x}{4x^2-16}$.", s, [R(["3", "x"], ["x-2"]), R(["3"], ["x+2"]), R(["12", "x"], ["x+2"])], "Factorise $12x(x-2)$ et $4(x-2)(x+2)$; élimine $4$ et $(x-2)$.")); }
  { const o = R(["3x-2", "x+4"], ["3x-2", "x-5"]), s = R(["x+4"], ["x-5"]); eqv("B-23", o, s);
    q.push(RC("medium", "Simplifie $\\dfrac{3x^2+10x-8}{3x^2-17x+10}$.", s, [R(["x-4"], ["x+5"]), R(["x+4"], ["x+5"]), R(["3x+4"], ["3x-5"])], "$(3x-2)(x+4)$ sur $(3x-2)(x-5)$.")); }
  { verify("B-24", (x) => (2 * x - 6) / (3 - x), () => -2);
    q.push(RC("medium", "Simplifie $\\dfrac{2x-6}{3-x}$.", R(["-2"], ["1"]), [R(["2"], ["1"]), R(["-1"], ["2"]), R(["-1"], ["1"])], "$3-x=-(x-3)$, donc $\\dfrac{2(x-3)}{-(x-3)}=-2$.")); }
  { const o = R(["x-7", "x+2"], ["x-2", "x+2"]), s = R(["x-7"], ["x-2"]); eqv("B-25", o, s);
    q.push(RC("medium", "Simplifie $\\dfrac{x^2-5x-14}{x^2-4}$.", s, [R(["x+7"], ["x+2"]), R(["x-7"], ["x+2"]), R(["x-2"], ["x-7"])], "$(x-7)(x+2)$ sur $(x-2)(x+2)$.")); }
  { const a = R(["x-2", "x+2"], ["x+3"]), b = R(["x+3"], ["x-2"]); eqv("B-26", times(a, b), R(["x+2"], ["1"]));
    q.push(RC("medium", "Simplifie $\\dfrac{x^2-4}{x+3}\\times\\dfrac{x+3}{x-2}$.", R(["x+2"], ["1"]), [R(["x-2"], ["1"]), R(["x+2"], ["x+3"]), R(["x^2-4"], ["x+3"])], "$(x-2)(x+2)$ et $(x+3)$ s'éliminent d'une fraction à l'autre.")); }
  { const a = R(["x-1", "x+1"], ["x+2"]), b = R(["x-1"], ["x+2"]); eqv("B-27", divide(a, b), R(["x+1"], ["1"]));
    q.push(RC("medium", "Simplifie $\\dfrac{x^2-1}{x+2}\\div\\dfrac{x-1}{x+2}$.", R(["x+1"], ["1"]), [R(["x-1"], ["1"]), R(["x+1"], ["x+2"]), R(["x+1", "x-1"], ["x+2"])], "Multiplie par l'inverse : $\\dfrac{(x-1)(x+1)}{x+2}\\times\\dfrac{x+2}{x-1}$.")); }
  q.push(MC("medium", "Quelles sont TOUTES les restrictions de $\\dfrac{x-1}{x+2}\\div\\dfrac{x-3}{x+4}$?", "$x\\ne-2,\\ -4,\\ 3$", ["$x\\ne-2,\\ -4$", "$x\\ne-2,\\ 3$", "$x\\ne1,\\ 3$"], "Les dénominateurs donnent $-2$ et $-4$; diviser par $\\dfrac{x-3}{x+4}$ exclut aussi $x=3$."));
  { verify("B-29", (x) => (x * x - x - 12) / (x + 3), (x) => x - 4); q.push(num("medium", "Simplifie $\\dfrac{x^2-x-12}{x+3}$ et évalue-la pour $x=10$.", 6, 0, "$\\dfrac{(x-4)(x+3)}{x+3}=x-4$; pour $x=10$, cela donne $6$.")); }
  { const o = R(["x+5", "x-3"], ["x-3"]); verify("B-30", o.f, (x) => x + 5); q.push(num("medium", "Le graphique de $y=\\dfrac{x^2+2x-15}{x-3}$ a un trou. Trouve son ordonnée.", 8, 0, "$y=x+5$ pour $x\\ne3$, donc le trou est en $(3,8)$.")); }
  { const o = R(["x", "x+3"], ["x-3", "x+3"]), s = R(["x"], ["x-3"]); eqv("B-31", o, s);
    q.push(fill("medium", "Simplifie $\\dfrac{x^2+3x}{x^2-9}$ : ___", ["x/(x-3)", "x/(-3+x)", "x/(x - 3)"], "$\\dfrac{x(x+3)}{(x-3)(x+3)}=\\dfrac{x}{x-3}$.")); }
  q.push(fill("medium", "Le graphique de $\\dfrac{x^2-2x-8}{x-4}$ a un trou en $x=$ ___", ["4"], "$\\dfrac{(x-4)(x+2)}{x-4}$ : le facteur éliminé vaut zéro en $x=4$."));
  q.push(tf("medium", "$\\dfrac{x^2-49}{x+7}$ se simplifie en $x-7$ sans aucune restriction.", false, "La restriction $x\\ne-7$ reste : le graphique a un trou en $(-7,-14)$."));
  q.push(tf("medium", "Une expression rationnelle est non définie partout où son numérateur vaut $0$.", false, "Un numérateur nul donne simplement la valeur $0$; seul un dénominateur nul rend l'expression non définie."));
  { for (const [a, b] of [[(x) => (3 - x) / (x - 3), -1], [(x) => (x - 5) / (5 - x), -1], [(x) => (-x - 1) / (x + 1), -1]]) verify("B-35", a, () => b);
    q.push(ms("medium", "Quelles expressions valent $-1$ pour chaque valeur permise de $x$?", ["$\\dfrac{3-x}{x-3}$", "$\\dfrac{x-5}{5-x}$", "$\\dfrac{x+2}{x-2}$", "$\\dfrac{-x-1}{x+1}$"], [0, 1, 3], "Chaque numérateur est l'opposé du dénominateur.")); }
  { const o = R(["x-1", "x+1"], ["x", "x-1"]), s = R(["x+1"], ["x"]); eqv("B-36", o, s); assert.strictEqual(s.f(1), 2);
    q.push(ms("medium", "Considère $\\dfrac{x^2-1}{x^2-x}$. Quels énoncés sont vrais?", ["$x\\ne0$ et $x\\ne1$", "elle se simplifie en $\\dfrac{x+1}{x}$", "son graphique a un trou en $(1,2)$", "son graphique a une asymptote verticale en $x=1$"], [0, 1, 2], "$x=1$ s'élimine (trou); $x=0$ reste (asymptote).")); }
  { const p = [[R(["x-2", "x+2"], ["x-2", "x-2"]), R(["x+2"], ["x-2"])], [R(["x", "x+1"], ["x", "x-1"]), R(["x+1"], ["x-1"])], [R(["x", "x-2"], ["x-2", "x+2"]), R(["x"], ["x+2"])], [R(["x", "x+2"], ["x+2"]), R(["x"], ["1"])]];
    p.forEach(([a, b], i) => eqv(`B-37-${i}`, a, b));
    q.push(match("medium", "Associe chaque expression à sa forme simplifiée.", p.map(([a]) => T(a.exp)), p.map(([, b]) => T(b.tex)), [0, 1, 2, 3])); }
  { const o = R(["x-7", "x+3"], ["x-7"]); verify("B-38", o.f, (x) => x + 3);
    q.push(num("medium", "Un camion parcourt $(x^2-4x-21)$ km à une vitesse moyenne de $(x-7)$ km/h. Son temps de trajet en heures se simplifie en $x+3$. Trouve le temps lorsque $x=12$.", 15, 0, "$\\dfrac{(x-7)(x+3)}{x-7}=x+3=15$ heures (et $x>7$).")); }
  { const f = (x) => x - 2;
    q.push({ ...mc("medium", "Le graphique a un trou en $(-2,-4)$ et est par ailleurs une droite. Quelle expression a ce graphique?", ["$\\dfrac{x^2-4}{x+2}$", "$\\dfrac{1}{x+2}$", "$\\dfrac{x^2-4}{x-2}$", "$x-2$"], 0, "$\\dfrac{(x-2)(x+2)}{x+2}=x-2$ avec un trou où $x=-2$. L'expression $x-2$ seule n'a pas de trou."),
      image: graphSvg({ fn: f, xmin: -6, xmax: 5, ymin: -8, ymax: 4, points: [hollowPt(-2, -4, "trou (-2, -4)", { dx: 8, dy: -10 })], title: "Une droite avec un trou" }) }); }
  q.push(order("medium", "Place les étapes dans l'ordre pour simplifier $\\dfrac{x^2-9}{x^2+4x}\\times\\dfrac{x+4}{x-3}$.", ["Factorise chaque numérateur et chaque dénominateur", "Dresse la liste des restrictions de chaque dénominateur", "Élimine les facteurs communs d'une fraction à l'autre", "Écris le produit simplifié en gardant les restrictions"]));

  // ── difficile (20) ──
  { const o = R(["x-3", "x+3", "x^2+9"], ["x-3", "x^2+9"]), s = R(["x+3"], ["1"]); eqv("B-41", o, s);
    q.push(RC("hard", "Simplifie $\\dfrac{x^4-81}{x^3-3x^2+9x-27}$.", s, [R(["x-3"], ["1"]), R(["x+3", "x^2+9"], ["1"]), R(["x^2+9"], ["x-3"])], "Dénominateur par groupement : $x^2(x-3)+9(x-3)=(x-3)(x^2+9)$. Numérateur : $(x^2-9)(x^2+9)$.")); }
  { const o = R(["x+1", "x-2", "x+2"], ["x+1", "x+2"]), s = R(["x-2"], ["1"]); eqv("B-42", o, s);
    q.push(RC("hard", "Simplifie $\\dfrac{x^3+x^2-4x-4}{x^2+3x+2}$.", s, [R(["x+2"], ["1"]), R(["x-2", "x+1"], ["1"]), R(["x-2"], ["x+2"])], "Numérateur par groupement : $x^2(x+1)-4(x+1)=(x+1)(x-2)(x+2)$.")); }
  { assert.strictEqual(ptex(pmulAll(P("x-2"), P("x-3"))), "x^2 - 5x + 6");
    const sum = restrVals(["x-2", "x-3"], ["x+4", "x-3"]).reduce((a, b) => a + b, 0); assert.strictEqual(sum, 1);
    q.push(num("hard", "Trouve la somme de toutes les valeurs exclues de $x$ dans $\\dfrac{x-1}{(x^2-5x+6)(x^2+x-12)}$.", 1, 0, "Zéros du dénominateur : $x=2,\\ 3$ et $x=-4,\\ 3$. Les valeurs distinctes $2,3,-4$ ont pour somme $1$ (on compte $3$ une seule fois).")); }
  { const o = R(["x+3", "x-2"], ["x-2", "x+2"]), s = R(["x+3"], ["x+2"]); eqv("B-44", o, s);
    q.push(num("hard", "Le graphique de $y=\\dfrac{x^2+x-6}{x^2-4}$ a un trou. Trouve l'ordonnée du trou.", 1.25, 0.001, `Le facteur éliminé est $(x-2)$, donc le trou est en $x=2$. $y=\\dfrac{x+3}{x+2}=\\dfrac54$.`)); }
  { assert.strictEqual(ptex(pmulAll(P("x+5"), P("x-2"))), "x^2 + 3x - 10");
    q.push(num("hard", "Pour quelle valeur de $k$ l'expression $\\dfrac{x^2+kx-10}{x-2}$ se simplifie-t-elle en un polynôme (sans dénominateur)?", 3, 0, "$x-2$ doit être un facteur du numérateur, donc $4+2k-10=0$ et $k=3$ : $\\dfrac{(x+5)(x-2)}{x-2}=x+5$.")); }
  { eqv("B-46", R(["x+1", "x-3"], ["x-3", "x+2"]), R(["x+1"], ["x+2"]));
    q.push(num("hard", "$\\dfrac{x^2+ax+b}{x^2-x-6}$ se simplifie en $\\dfrac{x+1}{x+2}$. Trouve $a+b$.", -5, 0, "$x^2-x-6=(x-3)(x+2)$, donc le numérateur doit être $(x+1)(x-3)=x^2-2x-3$ : $a=-2,\\ b=-3$.")); }
  { const o = R(["2x+3", "x-2"], ["-1", "x-2", "x+2"]);
    const s = withTex(R(["-1", "2x+3"], ["x+2"]), "-\\dfrac{2x+3}{x+2}"); eqv("B-47", o, s);
    q.push(RC("hard", "Simplifie $\\dfrac{2x^2-x-6}{4-x^2}$.", s, [R(["2x+3"], ["x+2"]), R(["2x+3"], ["x-2"]), withTex(R(["-1", "2x-3"], ["x+2"]), "-\\dfrac{2x-3}{x+2}")], "$4-x^2=-(x-2)(x+2)$ et $2x^2-x-6=(2x+3)(x-2)$; les facteurs $(x-2)$ s'éliminent, il reste le signe moins.")); }
  { const a = R(["x-2", "x+2"], ["x-3", "x+3"]), b = R(["x+2"], ["x-3"]), s = R(["x-2"], ["x+3"]); eqv("B-48", divide(a, b), s);
    q.push(RC("hard", "Simplifie $\\dfrac{x^2-4}{x^2-9}\\div\\dfrac{x+2}{x-3}$.", s, [R(["x-2"], ["x-3"]), R(["x+2"], ["x+3"]), R(["x-2"], ["x+3", "x-3"])], "Multiplie par $\\dfrac{x-3}{x+2}$ : $\\dfrac{(x-2)(x+2)}{(x-3)(x+3)}\\times\\dfrac{x-3}{x+2}$.")); }
  { const o = R(["x-2", "x-3"], ["x-2", "x+1"]), s = R(["x-3"], ["x+1"]); eqv("B-49", o, s);
    q.push(num("hard", "Le graphique de $y=\\dfrac{x^2-5x+6}{x^2-x-2}$ a un trou. Trouve son ordonnée, arrondie à $3$ décimales.", -0.333, 0.001, "Le trou est en $x=2$; $y=\\dfrac{x-3}{x+1}=-\\dfrac13$.")); }
  { const o = R(["x-3", "x+2"], ["x-3", "x-1"]), s = R(["x+2"], ["x-1"]); eqv("B-50", o, s);
    q.push(ms("hard", "Pour $f(x)=\\dfrac{x^2-x-6}{x^2-4x+3}$, quels énoncés sont vrais?", ["il y a un trou en $x=3$", "il y a une asymptote verticale en $x=1$", "il y a une abscisse à l'origine en $x=-2$", "il y a une abscisse à l'origine en $x=3$"], [0, 1, 2], "$f(x)=\\dfrac{x+2}{x-1}$ pour $x\\ne3$. En $x=3$, le facteur s'élimine (trou, et non abscisse à l'origine).")); }
  q.push(tf("hard", "Les graphiques de $y=\\dfrac{x^2-4}{x-2}$ et de $y=x+2$ sont exactement identiques.", false, "Le premier a un trou en $(2,4)$; la droite est complète."));
  q.push(tf("hard", "Si deux expressions donnent la même valeur pour $x=0,\\,1,\\,2,\\,3$, elles sont forcément équivalentes.", false, "Contre-exemple : $x(x-1)(x-2)(x-3)$ et $0$ concordent pour ces quatre valeurs, mais ce sont des expressions différentes."));
  { V2("B-53", (x, y) => (x * x - y * y) / (x * x + 2 * x * y + y * y), (x, y) => (x - y) / (x + y));
    q.push(fill("hard", "Simplifie $\\dfrac{x^2-y^2}{x^2+2xy+y^2}$ : ___", ["(x-y)/(x+y)", "(x - y)/(x + y)", "(x−y)/(x+y)"], "$\\dfrac{(x-y)(x+y)}{(x+y)^2}$.")); }
  { verify("B-54", (a) => (a ** 3 - 1) / (a - 1), (a) => a * a + a + 1); q.push(num("hard", "À l'aide de $a^3-b^3=(a-b)(a^2+ab+b^2)$, simplifie $\\dfrac{a^3-b^3}{a-b}$ et évalue le résultat pour $a=4,\\ b=1$.", 21, 0, "$a^2+ab+b^2=16+4+1=21$ (et $\\dfrac{64-1}{3}=21$ ✓).")); }
  { const f = (x) => (x + 2) / (x - 1);
    q.push({ ...mc("hard", "Le graphique montre une courbe avec une asymptote verticale en $x=1$ et un trou en $(3,\\,2.5)$. Quelle expression lui correspond?", ["$\\dfrac{x^2-x-6}{x^2-4x+3}$", "$\\dfrac{x+2}{x-1}$", "$\\dfrac{x^2-x-6}{x-1}$", "$\\dfrac{x+2}{x-3}$"], 0, "$\\dfrac{(x-3)(x+2)}{(x-3)(x-1)}=\\dfrac{x+2}{x-1}$ avec un trou en $x=3$, $y=\\dfrac{5}{2}$. $\\dfrac{x+2}{x-1}$ seule n'a pas de trou."),
      image: graphSvg({ fn: f, domain: [-5, 0.93], extraCurves: [{ fn: f, domain: [1.07, 7], color: "#2563a0" }], xmin: -5, xmax: 7, ymin: -6, ymax: 8, points: [hollowPt(3, 2.5, "trou (3, 2.5)", { dx: 8, dy: -10 })], title: "Une courbe avec un trou" }) }); }
  { const a = R(["x-1", "x+1"], ["x-2", "x+2"]), b = R(["x+1"], ["x+2"]), c = R(["x-2"], ["x-1"]); eqv("B-56", times(divide(a, b), c), { f: () => 1 });
    assert.strictEqual(restrVals(["x-2", "x+2"], ["x+2"], ["x-1"], ["x+1"]).length, 4);
    q.push(num("hard", "$\\dfrac{x^2-1}{x^2-4}\\div\\dfrac{x+1}{x+2}\\times\\dfrac{x-2}{x-1}$ se simplifie en $1$. Pour combien de valeurs réelles de $x$ l'expression <em>de départ</em> est-elle non définie?", 4, 0, "Non définie en $x=\\pm2$ (premier dénominateur), en $x=-1$ (numérateur du diviseur, et $-2$ de nouveau) et en $x=1$ (dernier dénominateur) : $\\{-2,\\,-1,\\,1,\\,2\\}$, donc $4$ valeurs.")); }
  q.push(order("hard", "Place les étapes dans l'ordre pour simplifier $\\dfrac{x^2-4}{x^2+x}\\div\\dfrac{x-2}{x^2-1}$.", ["Factorise chaque numérateur et chaque dénominateur", "Dresse la liste des restrictions des deux dénominateurs et du numérateur du diviseur", "Remplace la division par la multiplication par l'inverse", "Élimine les facteurs communs et écris le résultat avec ses restrictions"]));
  { const b = R(["x-2", "x+2"], ["x-2", "x-2"]);
    verify("B-58a", (x) => (x - 2) / (2 - x), () => -1); eqv("B-58b", b, R(["x+2"], ["x-2"])); verify("B-58c", (x) => (x + 2) / (x * x + 4 * x + 4), (x) => 1 / (x + 2)); verify("B-58d", (x) => (x * x - x) / (1 - x), (x) => -x);
    q.push(match("hard", "Associe chaque expression à sa forme simplifiée — attention aux signes et aux carrés.", ["$\\dfrac{x-2}{2-x}$", "$\\dfrac{x^2-4}{(x-2)^2}$", "$\\dfrac{x+2}{x^2+4x+4}$", "$\\dfrac{x^2-x}{1-x}$"], ["$-1$", "$\\dfrac{x+2}{x-2}$", "$\\dfrac{1}{x+2}$", "$-x$"], [0, 1, 2, 3])); }
  q.push(MC("hard", "Quelles valeurs de $x$ sont exclues de $\\dfrac{x+1}{x-2}\\div\\dfrac{x-5}{x+3}$?", "$x\\ne2,\\ -3,\\ 5$", ["$x\\ne2,\\ -3$", "$x\\ne2,\\ 5$", "$x\\ne-3,\\ 5$"], "Dénominateurs : $x=2$ et $x=-3$. Le numérateur du diviseur, $x-5$, ne peut pas valoir $0$ non plus."));
  { verify("B-60", (x) => (x ** 3 + 8) / (x + 2), (x) => x * x - 2 * x + 4); q.push(num("hard", "À l'aide de $a^3+b^3=(a+b)(a^2-ab+b^2)$, simplifie $\\dfrac{x^3+8}{x+2}$ et évalue le résultat pour $x=3$.", 7, 0, "$x^3+8=(x+2)(x^2-2x+4)$; pour $x=3$ : $9-6+4=7$ (et $\\dfrac{35}{5}=7$ ✓).")); }
  return q;
}
