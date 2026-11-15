// MCR3U-FR banque 2.5 — 60 questions (20/20/20), miroir de bank() de ../../mcr3u-ch2/t2_5.mjs (identique aux lignes LIVE).
import { verify, graphSvg } from "../lib.mjs";
import { s, same, V, rtypes, shapeSvg, assert } from "../kit5.mjs";
import { mc, ms, tf, num, fill, order, match } from "../../bank-mpm2d/helpers.mjs";

export const TOPIC = "2.5 Radicaux et expressions équivalentes";
const T = (x) => `$${x}$`;
let _pos = 0;
/** Choix multiple de formes exactes {tex,val} : la bonne valeur égale celle de l'expression; les mauvaises diffèrent. */
function RD(diff, prompt, exprVal, correct, wrongs, fb = "") {
  same(`MC ${prompt.slice(0, 40)}`, correct.val, exprVal);
  const all = [correct, ...wrongs], texs = all.map((a) => a.tex);
  assert.strictEqual(new Set(texs).size, texs.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) assert.ok(Math.abs(w.val - exprVal) > 1e-6, `distractor ${w.tex} equals the correct value! (${prompt})`);
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
  q.push(RD("easy", "Simplifie $\\sqrt{50}$.", s(50), V("5\\sqrt{2}", 5 * s(2)), [V("25\\sqrt{2}", 25 * s(2)), V("10\\sqrt{5}", 10 * s(5)), V("2\\sqrt{5}", 2 * s(5))], "$50=25\\cdot2$."));
  q.push(RD("easy", "Simplifie $\\sqrt{12}$.", s(12), V("2\\sqrt{3}", 2 * s(3)), [V("4\\sqrt{3}", 4 * s(3)), V("3\\sqrt{2}", 3 * s(2)), V("6\\sqrt{2}", 6 * s(2))], "$12=4\\cdot3$."));
  q.push(RD("easy", "Simplifie $3\\sqrt8$.", 3 * s(8), V("6\\sqrt{2}", 6 * s(2)), [V("3\\sqrt{2}", 3 * s(2)), V("12\\sqrt{2}", 12 * s(2)), V("9\\sqrt{2}", 9 * s(2))], "$\\sqrt8=2\\sqrt2$, puis $3\\cdot2=6$."));
  q.push(RD("easy", "Simplifie $\\sqrt{80}$.", s(80), V("4\\sqrt{5}", 4 * s(5)), [V("16\\sqrt{5}", 16 * s(5)), V("8\\sqrt{10}", 8 * s(10)), V("5\\sqrt{4}", 5 * 2)], "$80=16\\cdot5$."));
  q.push(RD("easy", "Simplifie $\\sqrt{18}+\\sqrt2$.", s(18) + s(2), V("4\\sqrt{2}", 4 * s(2)), [V("\\sqrt{20}", s(20)), V("5\\sqrt{2}", 5 * s(2)), V("3\\sqrt{2}", 3 * s(2))], "$\\sqrt{18}=3\\sqrt2$, puis $3\\sqrt2+\\sqrt2$."));
  q.push(RD("easy", "Simplifie $5\\sqrt3-2\\sqrt3$.", 3 * s(3), V("3\\sqrt{3}", 3 * s(3)), [V("3", 3), V("7\\sqrt{3}", 7 * s(3)), V("3\\sqrt{9}", 3 * 3)], "Soustrais les coefficients des radicaux semblables."));
  q.push(RD("easy", "Évalue $(\\sqrt7)^2$.", 7, V("7", 7), [V("\\sqrt{7}", s(7)), V("49", 49), V("14", 14)], "L'élévation au carré annule la racine carrée."));
  q.push(RD("easy", "Simplifie $\\sqrt3\\cdot\\sqrt{12}$.", 6, V("6", 6), [V("\\sqrt{15}", s(15)), V("15", 15), V("36", 36)], "$\\sqrt{36}=6$."));
  q.push(num("easy", "$\\sqrt{75}=k\\sqrt3$. Trouve $k$.", 5, 0, "$75=25\\cdot3$."));
  q.push(num("easy", "$3\\sqrt2=\\sqrt{a}$. Trouve $a$.", 18, 0, "$3^2\\cdot2=18$."));
  q.push(fill("easy", "Simplifie $\\sqrt{128}$ : ___", rtypes(8, 2), "$128=64\\cdot2$."));
  q.push(fill("easy", "Simplifie $\\sqrt{45}$ : ___", rtypes(3, 5), "$45=9\\cdot5$."));
  q.push(tf("easy", "$\\sqrt{9+16}=\\sqrt9+\\sqrt{16}$.", false, "$\\sqrt{25}=5$ mais $3+4=7$."));
  q.push(tf("easy", "$\\sqrt2+\\sqrt3=\\sqrt5$.", false, "$1.414+1.732=3.146$ mais $\\sqrt5=2.236$."));
  q.push(ms("easy", "Lesquels sont des radicaux semblables à $3\\sqrt5$ (après simplification)?", ["$7\\sqrt5$", "$\\sqrt{20}$", "$5\\sqrt3$", "$\\sqrt{45}$"], [0, 1, 3], "$\\sqrt{20}=2\\sqrt5$ et $\\sqrt{45}=3\\sqrt5$."));
  q.push(ms("easy", "Quels radicaux sont sous leur forme la plus simple?", ["$3\\sqrt5$", "$\\sqrt{12}$", "$2\\sqrt7$", "$\\sqrt{50}$"], [0, 2], "$\\sqrt{12}=2\\sqrt3$ et $\\sqrt{50}=5\\sqrt2$ contiennent encore des facteurs carrés parfaits."));
  q.push(match("easy", "Associe chaque radical à sa forme simplifiée.", ["$\\sqrt8$", "$\\sqrt{27}$", "$\\sqrt{45}$"], ["$2\\sqrt2$", "$3\\sqrt3$", "$3\\sqrt5$"], [0, 1, 2]));
  q.push({ ...mc("easy", "On montre le graphique de $y=\\sqrt{x}$. Quelle est la valeur exacte de $y$ pour $x=8$, sous sa forme la plus simple?", ["$2\\sqrt2$", "$4\\sqrt2$", "$8$", "$2$"], 0, "$\\sqrt8=2\\sqrt2\\approx2.83$, entre $y=2$ (en $x=4$) et $y=3$ (en $x=9$)."),
    image: graphSvg({ fn: s, xmin: 0, xmax: 10, ymin: 0, ymax: 4, domain: [0, 10], points: [{ x: 1, y: 1, label: "(1, 1)", color: "#1e293b" }, { x: 4, y: 2, label: "(4, 2)", color: "#1e293b" }, { x: 9, y: 3, label: "(9, 3)", color: "#1e293b" }], title: "y = √x" }) });
  q.push(order("easy", "Place les étapes dans l'ordre pour simplifier $\\sqrt{108}$.", ["Trouve le plus grand facteur carré parfait de 108 : $36$", "Écris $\\sqrt{108}=\\sqrt{36\\cdot3}$", "Sépare : $\\sqrt{36}\\cdot\\sqrt3$", "Évalue : $6\\sqrt3$"]));
  q.push(num("easy", "Évalue $\\sqrt{50}$, arrondi à $2$ décimales.", 7.07, 0.01, "$5\\sqrt2\\approx7.07$."));

  // ── moyen (20) ──
  q.push(RD("medium", "Simplifie $4\\sqrt{27}-2\\sqrt{12}+\\sqrt{75}$.", 4 * s(27) - 2 * s(12) + s(75), V("13\\sqrt{3}", 13 * s(3)), [V("3\\sqrt{3}", 3 * s(3)), V("11\\sqrt{3}", 11 * s(3)), V("13\\sqrt{15}", 13 * s(15))], "$12\\sqrt3-4\\sqrt3+5\\sqrt3=13\\sqrt3$."));
  q.push(RD("medium", "Simplifie $(3\\sqrt5)(4\\sqrt{10})$.", 12 * s(50), V("60\\sqrt{2}", 60 * s(2)), [V("12\\sqrt{15}", 12 * s(15)), V("60\\sqrt{5}", 60 * s(5)), V("7\\sqrt{15}", 7 * s(15))], "$12\\sqrt{50}=12\\cdot5\\sqrt2=60\\sqrt2$."));
  q.push(RD("medium", "Simplifie $\\sqrt3\\left(2\\sqrt{12}+\\sqrt3\\right)$.", s(3) * (2 * s(12) + s(3)), V("15", 15), [V("12+\\sqrt{3}", 12 + s(3)), V("9", 9), V("2\\sqrt{15}+3", 2 * s(15) + 3)], "$2\\sqrt{36}+\\sqrt9=12+3$."));
  q.push(RD("medium", "Développe $(4-\\sqrt3)(1+2\\sqrt3)$.", (4 - s(3)) * (1 + 2 * s(3)), V("-2+7\\sqrt{3}", -2 + 7 * s(3)), [V("4+9\\sqrt{3}", 4 + 9 * s(3)), V("10+7\\sqrt{3}", 10 + 7 * s(3)), V("-2-7\\sqrt{3}", -2 - 7 * s(3))], "$4+8\\sqrt3-\\sqrt3-2(3)=-2+7\\sqrt3$."));
  q.push(RD("medium", "Développe $(5+\\sqrt6)(5-\\sqrt6)$.", 19, V("19", 19), [V("31", 31), V("25-\\sqrt{6}", 25 - s(6)), V("25", 25)], "$25-6=19$."));
  q.push(RD("medium", "Développe $\\left(\\sqrt5+\\sqrt2\\right)^2$.", (s(5) + s(2)) ** 2, V("7+2\\sqrt{10}", 7 + 2 * s(10)), [V("7", 7), V("7+\\sqrt{10}", 7 + s(10)), V("5+2\\sqrt{2}", 5 + 2 * s(2))], "$5+2\\sqrt{10}+2$."));
  q.push(RD("medium", "Rationalise $\\dfrac{8}{\\sqrt6}$.", 8 / s(6), V("\\dfrac{4\\sqrt{6}}{3}", (4 * s(6)) / 3), [V("\\dfrac{4\\sqrt{6}}{6}", (4 * s(6)) / 6), V("\\dfrac{8\\sqrt{6}}{3}", (8 * s(6)) / 3), V("\\dfrac{4}{\\sqrt{6}}", 4 / s(6))], "$\\dfrac{8\\sqrt6}{6}=\\dfrac{4\\sqrt6}{3}$."));
  q.push(RD("medium", "Rationalise $\\dfrac{6}{\\sqrt7-1}$.", 6 / (s(7) - 1), V("\\sqrt{7}+1", s(7) + 1), [V("\\sqrt{7}-1", s(7) - 1), V("6\\sqrt{7}+6", 6 * s(7) + 6), V("\\dfrac{\\sqrt{7}+1}{6}", (s(7) + 1) / 6)], "Multiplie par le conjugué : le dénominateur vaut $7-1=6$."));
  { const g = (x) => s(32 * x ** 3); verify("B-29", g, (x) => 4 * x * s(2 * x));
    q.push(MC("medium", "Simplifie $\\sqrt{32x^3}$, où $x\\ge0$.", "$4x\\sqrt{2x}$", ["$16x\\sqrt{2x}$", "$4x^2\\sqrt{2}$", "$8x\\sqrt{x}$"], "$32=16\\cdot2$ et $x^3=x^2\\cdot x$.")); }
  q.push(num("medium", "$\\sqrt{28}+\\sqrt{63}=k\\sqrt7$. Trouve $k$.", 5, 0, "$2\\sqrt7+3\\sqrt7=5\\sqrt7$."));
  q.push(num("medium", "L'aire d'un rectangle de côtés $2\\sqrt6$ et $3\\sqrt3$ est $k\\sqrt2$. Trouve $k$.", 18, 0, "$6\\sqrt{18}=6\\cdot3\\sqrt2=18\\sqrt2$."));
  q.push(fill("medium", "Développe $(\\sqrt3+2)(\\sqrt3-2)$ : ___", ["-1", "−1"], "$3-4=-1$."));
  q.push(fill("medium", "Rationalise $\\dfrac{12}{\\sqrt3}$ : ___", rtypes(4, 3), "$\\dfrac{12\\sqrt3}{3}$."));
  q.push(tf("medium", "$(a\\sqrt b)^2=a^2b$ pour $a\\ge0,\\ b\\ge0$.", true, "Élève séparément le coefficient et le radical au carré : $a^2\\cdot b$."));
  q.push(tf("medium", "$\\sqrt{x^2}=x$ pour tout nombre réel $x$.", false, "$\\sqrt{x^2}=|x|$ : pour $x=-3$, cela vaut $3$."));
  q.push(ms("medium", "Quelles expressions sont égales à $2\\sqrt3$?", ["$\\sqrt{12}$", "$\\sqrt{3\\cdot4}$", "$\\dfrac{12}{\\sqrt{12}}$", "$\\sqrt6$"], [0, 1, 2], "$\\dfrac{12}{\\sqrt{12}}=\\sqrt{12}=2\\sqrt3$."));
  q.push(match("medium", "Associe chaque expression à sa valeur.", ["$\\sqrt8\\cdot\\sqrt2$", "$(\\sqrt5)^2$", "$\\sqrt3\\cdot\\sqrt{27}$", "$\\sqrt2+\\sqrt2$"], ["$4$", "$5$", "$9$", "$2\\sqrt2$"], [0, 1, 2, 3]));
  q.push(num("medium", "Un rectangle mesure $8$ cm sur $12$ cm. Sa diagonale mesure $k\\sqrt{13}$ cm. Trouve $k$.", 4, 0, "$\\sqrt{64+144}=\\sqrt{208}=\\sqrt{16\\cdot13}=4\\sqrt{13}$."));
  q.push({ ...RD("medium", "Un triangle rectangle a des cathètes de $6$ et de $12$. Quelle est la longueur exacte de son hypoténuse?", s(36 + 144), V("6\\sqrt{5}", 6 * s(5)), [V("18", 18), V("6\\sqrt{3}", 6 * s(3)), V("12\\sqrt{5}", 12 * s(5))], "$\\sqrt{36+144}=\\sqrt{180}=\\sqrt{36\\cdot5}=6\\sqrt5$."),
    image: shapeSvg({ kind: "tri", wl: "12", hl: "6", dl: "?", title: "Un triangle rectangle" }) });
  q.push(order("medium", "Place les étapes dans l'ordre pour rationaliser $\\dfrac{4}{5-\\sqrt3}$.", ["Trouve le conjugué du dénominateur : $5+\\sqrt3$", "Multiplie le haut et le bas par le conjugué", "Simplifie le dénominateur : $25-3=22$", "Écris le résultat $\\dfrac{20+4\\sqrt3}{22}=\\dfrac{10+2\\sqrt3}{11}$"]));

  // ── difficile (20) ──
  q.push(RD("hard", "Simplifie $\\sqrt{7+4\\sqrt3}$.", s(7 + 4 * s(3)), V("2+\\sqrt{3}", 2 + s(3)), [V("7+2\\sqrt{3}", 7 + 2 * s(3)), V("4+\\sqrt{3}", 4 + s(3)), V("\\sqrt{7}+2\\sqrt{3}", s(7) + 2 * s(3))], "$(2+\\sqrt3)^2=4+4\\sqrt3+3=7+4\\sqrt3$."));
  q.push(num("hard", "$(1+\\sqrt2)^3=a+b\\sqrt2$, où $a,b$ sont des entiers. Trouve $b$.", 5, 0, "$(1+\\sqrt2)^2=3+2\\sqrt2$; multiplié par $(1+\\sqrt2)$ : $3+3\\sqrt2+2\\sqrt2+4=7+5\\sqrt2$."));
  q.push(RD("hard", "Simplifie $\\dfrac{2}{\\sqrt3-\\sqrt2}+\\dfrac{3}{\\sqrt3+\\sqrt2}$.", 2 / (s(3) - s(2)) + 3 / (s(3) + s(2)), V("5\\sqrt{3}-\\sqrt{2}", 5 * s(3) - s(2)), [V("5\\sqrt{3}+\\sqrt{2}", 5 * s(3) + s(2)), V("5\\sqrt{3}", 5 * s(3)), V("\\sqrt{3}+5\\sqrt{2}", s(3) + 5 * s(2))], "Chaque produit de conjugués vaut $3-2=1$ : $2(\\sqrt3+\\sqrt2)+3(\\sqrt3-\\sqrt2)$."));
  { same("B-44", (2 + s(3)) ** 2 + (2 - s(3)) ** 2, 14); q.push(num("hard", "Évalue $(2+\\sqrt3)^2+(2-\\sqrt3)^2$.", 14, 0, "$(7+4\\sqrt3)+(7-4\\sqrt3)=14$ : les termes avec radical s'annulent.")); }
  { const x = 3 + 2 * s(2); same("B-45", x + 1 / x, 6); q.push(num("hard", "Si $x=3+2\\sqrt2$, trouve $x+\\dfrac1x$.", 6, 0, "$\\dfrac1x=\\dfrac{1}{3+2\\sqrt2}=3-2\\sqrt2$ (le conjugué, puisque $9-8=1$). La somme vaut $6$.")); }
  q.push(MC("hard", "Lequel est le plus petit?", "$2\\sqrt{11}$", ["$3\\sqrt{5}$", "$4\\sqrt{3}$", "$5\\sqrt{2}$"], "Écris-les sous forme de radicaux entiers : $\\sqrt{44},\\ \\sqrt{45},\\ \\sqrt{48},\\ \\sqrt{50}$."));
  q.push(num("hard", "$\\sqrt{k}+\\sqrt{18}=5\\sqrt2$. Trouve $k$.", 8, 0, "$\\sqrt{18}=3\\sqrt2$, donc $\\sqrt k=2\\sqrt2=\\sqrt8$."));
  q.push(ms("hard", "Quelles expressions sont égales à $5+2\\sqrt6$?", ["$(\\sqrt2+\\sqrt3)^2$", "$(\\sqrt3+\\sqrt2)^2$", "$5+\\sqrt{24}$", "$5+\\sqrt{12}$"], [0, 1, 2], "$(\\sqrt2+\\sqrt3)^2=5+2\\sqrt6$ et $2\\sqrt6=\\sqrt{24}$; $\\sqrt{12}=2\\sqrt3$."));
  { let sum = 0; for (let n = 1; n <= 99; n++) sum += 1 / (s(n) + s(n + 1)); same("B-49", sum, 9); q.push(num("hard", "Évalue $\\dfrac{1}{\\sqrt1+\\sqrt2}+\\dfrac{1}{\\sqrt2+\\sqrt3}+\\dfrac{1}{\\sqrt3+\\sqrt4}+\\cdots+\\dfrac{1}{\\sqrt{99}+\\sqrt{100}}$.", 9, 0, "Rationalise chaque terme : $\\dfrac{1}{\\sqrt n+\\sqrt{n+1}}=\\sqrt{n+1}-\\sqrt n$. La somme télescopique donne $\\sqrt{100}-\\sqrt1=9$.")); }
  { same("B-50", s(11 - 6 * s(2)), 3 - s(2)); q.push(num("hard", "$\\sqrt{11-6\\sqrt2}=a-\\sqrt{b}$, où $a,b$ sont des entiers positifs. Trouve $a+b$.", 5, 0, "$(3-\\sqrt2)^2=9-6\\sqrt2+2=11-6\\sqrt2$, donc $a=3,\\ b=2$.")); }
  q.push(tf("hard", "Pour $a,b\\ge0$, $\\sqrt{a^2+b^2}=a+b$ seulement si $a=0$ ou $b=0$.", true, "En élevant au carré : $a^2+b^2=a^2+2ab+b^2$, donc $ab=0$."));
  q.push(tf("hard", "La somme de deux nombres irrationnels est toujours irrationnelle.", false, "$(3+\\sqrt2)+(3-\\sqrt2)=6$ est rationnel."));
  { same("B-53", 1 / (s(3) - 1), (s(3) + 1) / 2); q.push(fill("hard", "Rationalise $\\dfrac{1}{\\sqrt3-1}$ : ___", ["(√3+1)/2", "(1+√3)/2", "(sqrt(3)+1)/2", "(1+sqrt(3))/2", "(√3 + 1)/2", "(1 + √3)/2"], "Multiplie par $\\dfrac{\\sqrt3+1}{\\sqrt3+1}$ : dénominateur $3-1=2$.")); }
  { same("B-54", 0.5 * 2 * s(3) * 4 * s(3), 12); q.push(num("hard", "Un triangle rectangle a des cathètes de $2\\sqrt3$ et de $4\\sqrt3$. Trouve son aire.", 12, 0, "$\\tfrac12(2\\sqrt3)(4\\sqrt3)=\\tfrac12\\cdot8\\cdot3=12$.")); }
  q.push({ ...RD("hard", "Un rectangle a des côtés de $(\\sqrt5+1)$ et de $(\\sqrt5-1)$. Quelle est la longueur exacte de sa diagonale?", s((s(5) + 1) ** 2 + (s(5) - 1) ** 2), V("2\\sqrt{3}", 2 * s(3)), [V("2\\sqrt{5}", 2 * s(5)), V("4", 4), V("2\\sqrt{6}", 2 * s(6))], "$d^2=(6+2\\sqrt5)+(6-2\\sqrt5)=12$, donc $d=\\sqrt{12}=2\\sqrt3$."),
    image: shapeSvg({ kind: "rect", wl: "√5 + 1", hl: "√5 − 1", dl: "d = ?", title: "Un rectangle" }) });
  q.push(num("hard", "Trouve $k$ pour que $(3+\\sqrt{k})(3-\\sqrt{k})=2$.", 7, 0, "$9-k=2$."));
  q.push(order("hard", "Place les étapes dans l'ordre pour simplifier $\\dfrac{2+\\sqrt3}{2-\\sqrt3}$.", ["Multiplie le haut et le bas par le conjugué $2+\\sqrt3$", "Numérateur : $(2+\\sqrt3)^2=7+4\\sqrt3$", "Dénominateur : $4-3=1$", "Résultat : $7+4\\sqrt3$"]));
  q.push(match("hard", "Associe chaque expression à sa valeur — attention aux pièges.", ["$\\sqrt2\\cdot\\sqrt8$", "$\\dfrac{\\sqrt{50}}{\\sqrt2}$", "$(\\sqrt3+1)(\\sqrt3-1)$", "$\\sqrt{(-7)^2}$"], ["$4$", "$5$", "$2$", "$7$"], [0, 1, 2, 3]));
  q.push(RD("hard", "Rationalise $\\dfrac{5}{2\\sqrt3-\\sqrt2}$.", 5 / (2 * s(3) - s(2)), V("\\dfrac{2\\sqrt{3}+\\sqrt{2}}{2}", (2 * s(3) + s(2)) / 2), [V("\\dfrac{2\\sqrt{3}-\\sqrt{2}}{2}", (2 * s(3) - s(2)) / 2), V("2\\sqrt{3}+\\sqrt{2}", 2 * s(3) + s(2)), V("\\dfrac{2\\sqrt{3}+\\sqrt{2}}{5}", (2 * s(3) + s(2)) / 5)], "Le conjugué donne $12-2=10$, donc $\\dfrac{5(2\\sqrt3+\\sqrt2)}{10}=\\dfrac{2\\sqrt3+\\sqrt2}{2}$."));
  { same("B-60", (3 + 2 * s(2)) ** 10 * (3 - 2 * s(2)) ** 10, 1); q.push(num("hard", "Évalue $(3+2\\sqrt2)^{10}(3-2\\sqrt2)^{10}$.", 1, 0.0001, "Regroupe : $[(3+2\\sqrt2)(3-2\\sqrt2)]^{10}=(9-8)^{10}=1$.")); }
  return q;
}
