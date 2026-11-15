// MCR3U-FR banque 2.2 — 60 questions (20/20/20), miroir de bank() de ../../mcr3u-ch2/t2_2.mjs (identique aux lignes LIVE).
// Chaque mauvais choix de forme factorisée est vérifié : il se développe en un polynôme DIFFÉRENT.
import assert from "node:assert";
import { P, pmul, peval, ptex, prodTex, verify, graphSvg } from "../lib.mjs";
import { F, FX, V2, same } from "../kit.mjs";
import { mc, ms, tf, num, fill, order, match } from "../../bank-mpm2d/helpers.mjs";

export const TOPIC = "2.2 Factorisation de polynômes";
const T = (s) => `$${s}$`;
let _pos = 0;
function MCF(diff, prompt, correct, wrongs, fb = "") {
  const tex = [correct.tex, ...wrongs.map((w) => w.tex)];
  assert.strictEqual(new Set(tex).size, tex.length, `duplicate choices in: ${prompt}`);
  for (const w of wrongs) assert.ok(!same(w.poly, correct.poly), `distractor ${w.tex} expands to the correct polynomial! (${prompt})`);
  const pos = _pos++ % tex.length, ch = wrongs.map((w) => T(w.tex)); ch.splice(pos, 0, T(correct.tex));
  return mc(diff, prompt, ch, pos, fb);
}
function MC(diff, prompt, correct, bad, fb = "") {
  assert.strictEqual(new Set([correct, ...bad]).size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
/** Graphies acceptées : tous les ordres des facteurs, avec et sans espaces, carrés Unicode. */
function spell(f) {
  const groups = []; for (const p of f.ps) { const g = groups.find((q) => q[0].join() === p.join()); if (g) g[1]++; else groups.push([p, 1]); }
  const perms = (a) => (a.length <= 1 ? [a] : a.flatMap((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).map((p) => [x, ...p])));
  const out = new Set();
  for (const pm of perms(groups)) {
    const t = prodTex(f.c, pm.map(([p, e]) => (e === 1 ? p : [p, e])));
    out.add(t.replace(/ /g, "")); out.add(t); out.add(t.replace(/ /g, "").replace(/\^2/g, "²")); out.add(t.replace(/\^2/g, "²"));
  }
  return [...out];
}

export function bank() {
  _pos = 0;
  const q = [];
  // ── facile (20) ──
  q.push(MC("easy", "Quel est le plus grand facteur commun de $12x^3$ et de $18x^2$?", "$6x^2$", ["$6x$", "$12x^2$", "$3x^2$"], "Le plus grand nombre qui divise les deux : 6. La plus petite puissance de $x$ : $x^2$."));
  q.push(MCF("easy", "Factorise $5x^2+15x$.", FX("5x^2 + 15x", 5, "x", "x+3"), [F(5, "x", "x+15"), F(5, "x+3"), F(5, "x", "x-3")], "PGFC $=5x$; la division laisse $x+3$."));
  q.push(MCF("easy", "Factorise $x^2+7x+12$.", FX("x^2 + 7x + 12", 1, "x+3", "x+4"), [F(1, "x+2", "x+6"), F(1, "x-3", "x-4"), F(1, "x+1", "x+12")], "Produit $12$, somme $7$ : $3$ et $4$."));
  q.push(MCF("easy", "Factorise $x^2-9x+20$.", FX("x^2 - 9x + 20", 1, "x-4", "x-5"), [F(1, "x+4", "x+5"), F(1, "x-4", "x+5"), F(1, "x-2", "x-10")], "Produit $20$ et somme $-9$ : les deux nombres sont négatifs, $-4$ et $-5$."));
  q.push(MCF("easy", "Factorise $x^2+x-20$.", FX("x^2 + x - 20", 1, "x+5", "x-4"), [F(1, "x-5", "x+4"), F(1, "x+5", "x+4"), F(1, "x+10", "x-2")], "Produit $-20$, somme $+1$ : $5$ et $-4$."));
  q.push(MCF("easy", "Factorise $x^2-49$.", FX("x^2 - 49", 1, "x-7", "x+7"), [F(1, "x-7", "x-7"), F(1, "x+7", "x+7"), F(1, "x-49", "x+1")], "Différence de carrés."));
  q.push(MCF("easy", "Factorise $x^2+10x+25$.", FX("x^2 + 10x + 25", 1, "x+5", "x+5"), [F(1, "x+25", "x+1"), F(1, "x+5", "x-5"), F(1, "x-5", "x-5")], "Carré parfait : $(x+5)^2$."));
  q.push(num("easy", "Deux nombres ont un produit de $18$ et une somme de $9$. Quel est le plus grand des deux?", 6, 0, "$3$ et $6$ : $3\\cdot6=18$ et $3+6=9$."));
  q.push(num("easy", "Quelle est la partie numérique du PGFC de $24x^2y$ et de $36xy^2$?", 12, 0, "$\\gcd(24,36)=12$ (le PGFC complet est $12xy$)."));
  { const f = FX("x^2 - 100", 1, "x-10", "x+10"); q.push(fill("easy", "Factorise $x^2-100$ : ___", spell(f), "Différence de carrés.")); }
  { const f = FX("3x + 12", 3, "x+4"); q.push(fill("easy", "Factorise $3x+12$ : ___", spell(f), "PGFC $=3$.")); }
  q.push(tf("easy", "$x^2+9=(x+3)(x-3)$.", false, "$(x+3)(x-3)=x^2-9$. Une somme de carrés ne se factorise pas."));
  q.push(tf("easy", "On peut vérifier une factorisation en la développant et en comparant avec l'expression de départ.", true));
  { assert.deepStrictEqual(pmul(P("2x-3"), P("2x-3")), P("4x^2-12x+9"));
    q.push(ms("easy", "Lesquels de ces trinômes sont des carrés parfaits?", ["$x^2+6x+9$", "$x^2+6x+8$", "$4x^2-12x+9$", "$x^2-4x-4$"], [0, 2], "$(x+3)^2=x^2+6x+9$ et $(2x-3)^2=4x^2-12x+9$.")); }
  { const f = FX("x^2 - 5x - 14", 1, "x-7", "x+2"); q.push(ms("easy", "Lesquels sont des facteurs de $x^2-5x-14$?", ["$(x-7)$", "$(x+2)$", "$(x+7)$", "$(x-2)$"], [0, 1], `$x^2-5x-14=${f.tex}$.`)); }
  { const a = F(1, "x-1", "x+1"), b = F(1, "x+1", "x+1"), c = F(1, "x-1", "x-1"), d = F(1, "x", "x+1");
    q.push(match("easy", "Associe chaque expression à sa forme factorisée.", ["$x^2-1$", "$x^2+2x+1$", "$x^2-2x+1$", "$x^2+x$"], [T(a.tex), T(b.tex), T(c.tex), T(d.tex)], [0, 1, 2, 3])); }
  { const f = FX("x^2 - x - 6", 1, "x+2", "x-3");
    q.push({ ...MCF("easy", "On montre le graphique de $y=x^2-x-6$. Quelle forme factorisée est équivalente?", f, [F(1, "x-2", "x+3"), F(1, "x+2", "x+3"), F(1, "x-1", "x+6")], "Le graphique coupe l'axe des $x$ en $-2$ et en $3$, donc les facteurs sont $(x+2)$ et $(x-3)$."),
      image: graphSvg({ fn: (x) => peval(f.poly, x), xmin: -4, xmax: 5, ymin: -8, ymax: 6, points: [{ x: -2, y: 0, label: "(-2, 0)", color: "#1e293b", dy: 16 }, { x: 3, y: 0, label: "(3, 0)", color: "#1e293b", dy: 16 }], title: "y = x² − x − 6" }) }); }
  q.push(MC("easy", "Quelle expression est une différence de carrés?", "$x^2-36$", ["$x^2+36$", "$x^3-36$", "$x^2-35$"], "Les deux termes doivent être des carrés parfaits, séparés par un signe moins."));
  q.push(num("easy", "Comme $x^2-5x+6=(x-2)(x-3)$, trouve la valeur de $x^2-5x+6$ pour $x=5$.", 6, 0, "$(5-2)(5-3)=3\\cdot2=6$; aussi $25-25+6=6$."));
  q.push(order("easy", "Place les étapes dans l'ordre pour factoriser $x^2+5x+6$.", ["Trouve deux nombres de produit $6$ et de somme $5$", "Les nombres sont $2$ et $3$", "Écris $(x+2)(x+3)$", "Développe $(x+2)(x+3)$ pour vérifier"]));

  // ── moyen (20) ──
  q.push(MCF("medium", "Factorise $6x^2-x-12$.", FX("6x^2 - x - 12", 1, "2x-3", "3x+4"), [F(1, "2x+3", "3x-4"), F(1, "6x-3", "x+4"), F(1, "2x-4", "3x+3")], "$ac=-72$; somme $-1$ : $-9$ et $8$. $6x^2+8x-9x-12=2x(3x+4)-3(3x+4)$."));
  q.push(MCF("medium", "Factorise $15x^2+22x+8$.", FX("15x^2 + 22x + 8", 1, "3x+2", "5x+4"), [F(1, "3x+4", "5x+2"), F(1, "15x+2", "x+4"), F(1, "3x+8", "5x+1")], "$ac=120$; somme $22$ : $10$ et $12$."));
  q.push(MCF("medium", "Factorise $2x^2-7x+3$.", FX("2x^2 - 7x + 3", 1, "2x-1", "x-3"), [F(1, "2x+1", "x+3"), F(1, "2x-3", "x-1"), F(1, "2x-1", "x+3")], "$ac=6$; somme $-7$ : $-1$ et $-6$."));
  q.push(MCF("medium", "Factorise $4x^2-25$.", FX("4x^2 - 25", 1, "2x-5", "2x+5"), [F(1, "4x-5", "x+5"), F(1, "2x-5", "2x-5"), F(1, "2x+5", "2x+5")], "$(2x)^2-5^2$."));
  q.push(MCF("medium", "Factorise $9x^2+30x+25$.", FX("9x^2 + 30x + 25", 1, "3x+5", "3x+5"), [F(1, "3x-5", "3x-5"), F(1, "9x+5", "x+5"), F(1, "3x+5", "3x-5")], "$(3x)^2+2(3x)(5)+5^2$."));
  q.push(MCF("medium", "Factorise $x^3+3x^2-2x-6$ par groupement.", FX("x^3 + 3x^2 - 2x - 6", 1, "x+3", "x^2-2"), [F(1, "x-3", "x^2+2"), F(1, "x+3", "x^2+2"), F(1, "x+2", "x^2-3")], "$x^2(x+3)-2(x+3)=(x+3)(x^2-2)$."));
  q.push(MCF("medium", "Factorise complètement $3x^2-15x+18$.", FX("3x^2 - 15x + 18", 3, "x-2", "x-3"), [F(3, "x-2", "x+3"), F(1, "x-6", "x-3"), F(3, "x+2", "x+3")], "Le PGFC $3$ d'abord : $3(x^2-5x+6)$."));
  q.push(MCF("medium", "Factorise $-x^2-4x+12$.", FX("-x^2 - 4x + 12", -1, "x+6", "x-2"), [F(-1, "x-6", "x+2"), F(1, "x+6", "x-2"), F(-1, "x+6", "x+2")], "Mets $-1$ en évidence : $-(x^2+4x-12)=-(x+6)(x-2)$."));
  q.push(num("medium", "Si $x^2+kx-18=(x+9)(x-2)$, trouve $k$.", 7, 0, "$9+(-2)=7$."));
  { const f = FX("6x^2 - 7x - 5", 1, "3x-5", "2x+1"); q.push(num("medium", "Si $6x^2+bx-5=(3x-5)(2x+1)$, trouve $b$.", -7, 0, `Extérieurs $3x$, intérieurs $-10x$ : $b=-7$ (en effet $${ptex(f.poly)}$).`)); }
  { const f = FX("2x^2 - 8", 2, "x-2", "x+2"); q.push(fill("medium", "Factorise complètement $2x^2-8$ : ___", spell(f), "Le PGFC d'abord : $2(x^2-4)=2(x-2)(x+2)$.")); }
  { V2("B-32", (x, y) => 12 * x * x * y + 8 * x * y * y, (x, y) => 4 * x * y * (3 * x + 2 * y));
    q.push(fill("medium", "Factorise complètement $12x^2y+8xy^2$ : ___", ["4xy(3x+2y)", "4xy(2y+3x)", "4xy(3x + 2y)", "4xy(2y + 3x)", "4yx(3x+2y)", "4yx(2y+3x)", "(4xy)(3x+2y)"], "PGFC $=4xy$.")); }
  q.push(tf("medium", "$x^2-4x+4=(x-2)^2$.", true, "$(x-2)(x-2)=x^2-4x+4$."));
  q.push(tf("medium", "$2x^2-18=2(x-3)^2$.", false, "$2x^2-18=2(x^2-9)=2(x-3)(x+3)$."));
  { const a = F(1, "x+2", "x+3"), b = F(1, "x-2", "x-3"), c = F(1, "x+3", "x-2"), d = F(1, "x-3", "x+2");
    q.push(match("medium", "Associe chaque trinôme à ses facteurs.", ["$x^2+5x+6$", "$x^2-5x+6$", "$x^2+x-6$", "$x^2-x-6$"], [T(a.tex), T(b.tex), T(c.tex), T(d.tex)], [0, 1, 2, 3])); }
  q.push(ms("medium", "Quelles expressions sont complètement factorisées?", ["$2(x^2-4)$", "$2(x-2)(x+2)$", "$(x-3)(x^2-4)$", "$(x+1)(x^2+1)$"], [1, 3], "$x^2-4$ peut encore être factorisé, donc les choix 1 et 3 sont incomplets."));
  q.push(ms("medium", "Lesquelles de ces expressions sont des différences de carrés?", ["$x^2-81$", "$4x^2-9$", "$x^2+81$", "$16-x^2$"], [0, 1, 3], "$16-x^2=(4-x)(4+x)$; $x^2+81$ est une <em>somme</em>."));
  { const f = FX("3x^2 + 10x - 8", 1, "3x-2", "x+4"); q.push(num("medium", "Un rectangle a une aire de $3x^2+10x-8$ et une longueur de $3x-2$. Trouve sa largeur lorsque $x=5$.", 9, 0, `Largeur $=x+4$ (puisque $${ptex(f.poly)}=(3x-2)(x+4)$), donc $5+4=9$.`)); }
  { const f = FX("2x^2 - x - 6", 1, "2x+3", "x-2");
    q.push({ ...MCF("medium", "On montre le graphique de $y=2x^2-x-6$. Quelle forme factorisée est équivalente?", f, [F(1, "2x-3", "x+2"), F(1, "x+3", "2x-2"), F(1, "2x+3", "x+2")], "Les abscisses à l'origine sont $-1.5$ et $2$, donc les facteurs sont $(2x+3)$ et $(x-2)$."),
      image: graphSvg({ fn: (x) => peval(f.poly, x), xmin: -3, xmax: 4, ymin: -8, ymax: 8, points: [{ x: -1.5, y: 0, label: "(-1.5, 0)", color: "#1e293b", dy: 16, dx: -50 }, { x: 2, y: 0, label: "(2, 0)", color: "#1e293b", dy: 16 }, { x: 0, y: -6, label: "(0, -6)", color: "#1e293b" }], title: "y = 2x² − x − 6" }) }); }
  { const f = FX("6x^2 + 7x - 3", 1, "3x-1", "2x+3");
    q.push(order("medium", "Place les étapes dans l'ordre pour factoriser $6x^2+7x-3$.", ["Calcule $ac=6\\times(-3)=-18$ et trouve deux nombres de somme $7$ : $9$ et $-2$", "Décompose le terme du milieu : $6x^2+9x-2x-3$", "Groupe : $3x(2x+3)-1(2x+3)$", `Mets la parenthèse commune en évidence : $${f.tex}$`])); }

  // ── difficile (20) ──
  q.push(MCF("hard", "Factorise complètement $x^4-81$.", FX("x^4 - 81", 1, "x-3", "x+3", "x^2+9"), [F(1, "x-3", "x-3", "x+3", "x+3"), F(1, "x-9", "x+9", "x^2+1"), F(1, "x-3", "x+3", "x+3")], "$(x^2-9)(x^2+9)$, puis factorise encore $x^2-9$; $x^2+9$ est premier."));
  q.push(MCF("hard", "Factorise complètement $x^4-10x^2+9$.", FX("x^4 - 10x^2 + 9", 1, "x-1", "x+1", "x-3", "x+3"), [F(1, "x-1", "x-1", "x-3", "x-3"), F(1, "x-1", "x+1", "x-9", "x+9"), F(1, "x^2+1", "x-3", "x+3")], "$u=x^2$ : $(u-1)(u-9)$, puis deux différences de carrés."));
  { const set = new Set(); for (let a = -36; a <= 36; a++) if (a !== 0 && 36 % a === 0) set.add(a + 36 / a); assert.strictEqual(set.size, 10);
    q.push(num("hard", "Pour combien de valeurs entières de $k$ l'expression $x^2+kx+36$ peut-elle être factorisée en deux binômes à coefficients entiers?", 10, 0, "$k=a+b$ pour les paires d'entiers telles que $ab=36$ : $(1,36),(2,18),(3,12),(4,9),(6,6)$ et leurs opposées donnent $\\pm37,\\pm20,\\pm15,\\pm13,\\pm12$ : $10$ valeurs.")); }
  q.push(MCF("hard", "Factorise $12x^2-5x-2$.", FX("12x^2 - 5x - 2", 1, "3x-2", "4x+1"), [F(1, "3x+2", "4x-1"), F(1, "6x-1", "2x+2"), F(1, "12x+1", "x-2"), F(1, "3x-1", "4x+2")], "$ac=-24$, somme $-5$ : $-8$ et $3$. $12x^2-8x+3x-2=4x(3x-2)+1(3x-2)$."));
  q.push(MCF("hard", "Factorise complètement $2x^3-x^2-18x+9$.", FX("2x^3 - x^2 - 18x + 9", 1, "2x-1", "x-3", "x+3"), [F(1, "2x-1", "x-3", "x-3"), F(1, "2x+1", "x-3", "x+3"), F(1, "2x-1", "x^2+9")], "$x^2(2x-1)-9(2x-1)=(2x-1)(x^2-9)$, et $x^2-9$ se factorise encore."));
  { assert.strictEqual(2025 ** 2 - 2023 ** 2, 8096); q.push(num("hard", "Sans calculatrice, évalue $2025^2-2023^2$ en factorisant.", 8096, 0, "$(2025-2023)(2025+2023)=2\\times4048=8096$.")); }
  { const c = F(3, "2x+1"); verify("B-47", (x) => (x + 2) ** 2 - (x - 1) ** 2, (x) => peval(c.poly, x));
    q.push(MCF("hard", "Factorise et simplifie complètement $(x+2)^2-(x-1)^2$.", c, [F(3, "2x-1"), F(1, "x+2", "x-1"), F(2, "x", "x+3")], "$a=x+2,\\ b=x-1$ : $(a-b)(a+b)=(3)(2x+1)$.")); }
  { V2("B-48", (x, y) => x * x - 2 * x * y - 8 * y * y, (x, y) => (x - 4 * y) * (x + 2 * y));
    q.push(fill("hard", "Factorise $x^2-2xy-8y^2$ : ___", ["(x-4y)(x+2y)", "(x+2y)(x-4y)", "(x - 4y)(x + 2y)", "(x + 2y)(x - 4y)"], "Produit $-8$, somme $-2$ : $-4$ et $2$.")); }
  { const f = FX("6x^2 + x - 12", 1, "2x+3", "3x-4"); assert.ok(Math.abs(peval(f.poly, -1.5)) < 1e-9 && Math.abs(peval(f.poly, 4 / 3)) < 1e-9);
    q.push(num("hard", "Un polynôme du second degré à coefficients entiers, de coefficient dominant $6$, a pour zéros $-\\tfrac32$ et $\\tfrac43$. Trouve le coefficient de $x$.", 1, 0, `$(2x+3)(3x-4)=${ptex(f.poly)}$.`)); }
  { const f = FX("x^3 - 7x + 6", 1, "x-1", "x-2", "x+3"); q.push(ms("hard", "$x^3-7x+6=0$ a trois solutions entières. (Essaie $x=1$.) Lesquels sont des <em>facteurs</em> de $x^3-7x+6$?", ["$(x-1)$", "$(x-2)$", "$(x+3)$", "$(x+2)$"], [0, 1, 2], `$x^3-7x+6=${f.tex}$; $x=-2$ donne $-8+14+6=12\\ne0$.`)); }
  q.push(num("hard", "Si $x^2-y^2=45$ et $x-y=5$, trouve $x$.", 7, 0, "$x^2-y^2=(x-y)(x+y)$, donc $x+y=9$; ensuite $x=\\tfrac{9+5}2=7$."));
  q.push(num("hard", "Si $x+y=12$ et $x^2-y^2=60$, trouve $x-y$.", 5, 0, "$(x-y)(x+y)=60$, donc $x-y=60\\div12=5$."));
  q.push(ms("hard", "Pour quelles valeurs de $k$ l'expression $x^2+kx+49$ est-elle un trinôme carré parfait?", ["$14$", "$7$", "$-14$", "$-7$"], [0, 2], "$(x\\pm7)^2=x^2\\pm14x+49$."));
  q.push(MCF("hard", "Factorise complètement $3x^3-12x^2-27x+108$.", FX("3x^3 - 12x^2 - 27x + 108", 3, "x-4", "x-3", "x+3"), [F(3, "x-4", "x^2+9"), F(3, "x-4", "x-3", "x-3"), F(3, "x+4", "x-3", "x+3")], "Le PGFC $3$, puis groupe : $3[x^2(x-4)-9(x-4)]$, puis une différence de carrés."));
  { V2("B-55", (x, y) => 6 * x * x + x * y - 12 * y * y, (x, y) => (3 * x - 4 * y) * (2 * x + 3 * y));
    q.push(mc("hard", "Factorise $6x^2+xy-12y^2$.", ["$(3x-4y)(2x+3y)$", "$(3x+4y)(2x-3y)$", "$(6x-4y)(x+3y)$", "$(3x-3y)(2x+4y)$"], 0, "$ac=-72$; somme $1$ : $9$ et $-8$. $6x^2+9xy-8xy-12y^2=3x(2x+3y)-4y(2x+3y)$.")); }
  { V2("B-56", (x) => x ** 4 + 64, (x) => (x * x + 4 * x + 8) * (x * x - 4 * x + 8));
    q.push(MC("hard", "Laquelle est une factorisation correcte de $x^4+64$?", "$(x^2+4x+8)(x^2-4x+8)$", ["$(x^2+8)^2$", "$(x^2+8)(x^2-8)$", "$(x^2+4)(x^2+16)$"], "$x^4+64=(x^2+8)^2-16x^2$, une différence de carrés.")); }
  { const f = FX("x^3 - 6x^2 - x + 30", 1, "x-3", "x+2", "x-5"); q.push(num("hard", "Trouve la somme des solutions de $x^3-6x^2-x+30=0$.", 6, 0, `$${f.tex}=0$ donne $x=3,-2,5$; la somme est $6$.`)); }
  { const f = FX("4x^4 - 64", 4, "x-2", "x+2", "x^2+4"); q.push(order("hard", "Place les étapes dans l'ordre pour factoriser complètement $4x^4-64$.", ["Mets le PGFC en évidence : $4(x^4-16)$", "Différence de carrés : $4(x^2-4)(x^2+4)$", "Factorise encore $x^2-4$ : $4(x-2)(x+2)(x^2+4)$", `Arrête : $x^2+4$ est premier, et le développement donne $${ptex(f.poly)}$ ✓`])); }
  { const a = F(1, "2x-3", "2x-3"), b = F(1, "2x-3", "2x+3"), c = F(1, "2x-1", "2x-3"), d = F(1, "2x+1", "2x+3");
    assert.strictEqual(ptex(a.poly), "4x^2 - 12x + 9"); assert.strictEqual(ptex(b.poly), "4x^2 - 9"); assert.strictEqual(ptex(c.poly), "4x^2 - 8x + 3"); assert.strictEqual(ptex(d.poly), "4x^2 + 8x + 3");
    q.push(match("hard", "Associe chaque trinôme à ses facteurs — les quatre se ressemblent!", ["$4x^2-12x+9$", "$4x^2-9$", "$4x^2-8x+3$", "$4x^2+8x+3$"], [T(a.tex), T(b.tex), T(c.tex), T(d.tex)], [0, 1, 2, 3])); }
  { const f = FX("-x^2 - 2x + 3", -1, "x+3", "x-1");
    q.push({ ...MCF("hard", "Le graphique est ouvert vers le bas et coupe l'axe des $x$ en $-3$ et en $1$. Quelle équation lui correspond?", f, [F(-1, "x-3", "x+1"), F(1, "x+3", "x-1"), F(-1, "x+3", "x+1")], "Ouvert vers le bas signifie un coefficient dominant négatif : $y=-(x+3)(x-1)=-x^2-2x+3$."),
      image: graphSvg({ fn: (x) => peval(f.poly, x), xmin: -5, xmax: 3, ymin: -6, ymax: 6, points: [{ x: -3, y: 0, label: "(-3, 0)", color: "#1e293b", dy: 16, dx: -50 }, { x: 1, y: 0, label: "(1, 0)", color: "#1e293b", dy: 16 }, { x: 0, y: 3, label: "(0, 3)", color: "#1e293b" }], title: "Une parabole" }) }); }
  return q;
}
