// MCR3U-FR banque 2.1 — 60 questions (20/20/20), miroir de bank() de ../../mcr3u-ch2/t2_1.mjs (identique aux lignes LIVE).
import assert from "node:assert";
import { P, padd, psub, pmul, pmulAll, ppow, peval, pdeg, ptex, verify, graphSvg } from "../lib.mjs";
import { X, S } from "../kit.mjs";
import { mc, ms, tf, num, fill, order, match } from "../../bank-mpm2d/helpers.mjs";

export const TOPIC = "2.1 Addition et multiplication de polynômes";
const T = (p) => `$${ptex(p)}$`;
let _pos = 0;
/** Choix multiple : la bonne réponse tourne parmi les positions 0..3 (même rotation que l'anglais). */
function MC(diff, prompt, correct, bad, fb = "") {
  const set = new Set([correct, ...bad]);
  assert.strictEqual(set.size, bad.length + 1, `duplicate choices in: ${prompt}`);
  const pos = _pos++ % (bad.length + 1), ch = [...bad]; ch.splice(pos, 0, correct);
  return mc(diff, prompt, ch, pos, fb);
}
/** Graphies acceptées d'un polynôme : compacte, espacée, avec exposants Unicode. */
const spell = (p) => { const s = ptex(p), compact = s.replace(/ /g, ""), uni = (t) => t.replace(/\^2/g, "²").replace(/\^3/g, "³").replace(/\^4/g, "⁴"); return [...new Set([compact, s, uni(compact), uni(s), compact.replace(/\^/g, "**")])]; };

export function bank() {
  _pos = 0;
  const q = [];
  // ── facile (20) ──
  q.push(MC("easy", "Quel est le degré de $5x^4-x^2+9$?", "$4$", ["$2$", "$9$", "$5$"], "Le degré est l'exposant le plus élevé, pas le coefficient."));
  q.push(MC("easy", "Quelle paire est formée de termes semblables?", "$3x^2y$ et $-5x^2y$", ["$3x^2y$ et $3xy^2$", "$4x$ et $4x^2$", "$7$ et $7x$"], "Des termes semblables ont exactement les mêmes variables avec les mêmes exposants."));
  { const a = P("5x^2-3x+2"), b = P("2x^2+x-7"), c = S("B-3", "7x^2 - 2x - 5", a, b); q.push(MC("easy", `Simplifie $(5x^2-3x+2)+(2x^2+x-7)$.`, T(c), ["$7x^4-2x-5$", "$7x^2-4x-5$", "$3x^2-4x+9$"], "Additionne les coefficients des termes semblables; les exposants ne changent pas.")); }
  { const c = S("B-4", "4x + 5", "6x+1", "2x-4", -1); q.push(MC("easy", "Simplifie $(6x+1)-(2x-4)$.", T(c), ["$4x-3$", "$4x-5$", "$8x-3$"], "Le moins change les deux signes de la parenthèse : $6x+1-2x+4$.")); }
  q.push(num("easy", "Quel est le coefficient de $x$ dans $7x^2-11x+3$?", -11, 0, "Le coefficient comprend son signe."));
  q.push(num("easy", "Évalue $2x^2-3x+1$ pour $x=-2$.", 15, 0, "$2(4)-3(-2)+1=8+6+1=15$."));
  { const c = X("B-7", "3x - 12", "3", "x-4"); q.push(MC("easy", "Développe $3(x-4)$.", T(c), ["$3x-4$", "$3x+12$", "$x-12$"], "Multiplie les deux termes par 3.")); }
  { const c = X("B-8", "-4x^2 + 8x", "-4x", "x-2"); q.push(MC("easy", "Développe $-4x(x-2)$.", T(c), ["$-4x^2-8x$", "$4x^2-8x$", "$-4x^2+2$"], "$(-4x)(x)=-4x^2$ et $(-4x)(-2)=+8x$.")); }
  { const c = X("B-9", "x^2 + 13x + 36", "x+4", "x+9"); q.push(MC("easy", "Développe $(x+4)(x+9)$.", T(c), ["$x^2+36$", "$x^2+36x+13$", "$x^2+13x+13$"], "Terme du milieu $=4x+9x=13x$; constante $=4\\cdot9=36$.")); }
  { const c = X("B-10", "x^2 - 4x - 12", "x-6", "x+2"); q.push(MC("easy", "Développe $(x-6)(x+2)$.", T(c), ["$x^2+4x-12$", "$x^2-4x+12$", "$x^2-12$"], "Milieu : $2x-6x=-4x$; constante : $-12$.")); }
  { const c = X("B-11", "x^2 + 10x + 25", "x+5", "x+5"); q.push(fill("easy", "Développe $(x+5)^2$ : ___", spell(c), "Carré d'un binôme : $a^2+2ab+b^2$.")); }
  { const c = X("B-12", "x^2 - 64", "x-8", "x+8"); q.push(fill("easy", "Développe $(x-8)(x+8)$ : ___", spell(c), "Différence de carrés.")); }
  q.push(tf("easy", "$(x+3)^2=x^2+9$.", false, "$(x+3)^2=x^2+6x+9$; le terme croisé manque."));
  q.push(tf("easy", "Le produit $(x^2+1)(x-2)$ est de degré $3$.", true, "$2+1=3$."));
  q.push(ms("easy", "Lesquelles de ces expressions sont des polynômes?", ["$3x^2-5$", "$\\dfrac1x+2$", "$\\sqrt{x}$", "$4x^3-x$"], [0, 3], "Un polynôme n'a que des exposants entiers $\\ge0$ sur sa variable."));
  q.push(ms("easy", "Quelles expressions sont équivalentes à $2(x+3)$?", ["$2x+6$", "$2x+3$", "$x+3+x+3$", "$2x\\cdot3$"], [0, 2], "Vérifie avec $x=1$ : $2(4)=8$; $2x+6=8$ ✓, $2x+3=5$ ✗, $x+3+x+3=8$ ✓, $2x\\cdot3=6$ ✗."));
  { const c = X("B-17", "x^2 - 2x - 3", "x+1", "x-3"); const f = (x) => peval(c, x);
    q.push({ ...MC("easy", "Le graphique montre $y=(x+1)(x-3)$. Quelle forme développée est équivalente?", T(c), ["$x^2+2x-3$", "$x^2-3$", "$x^2-2x+3$"], "Le graphique coupe l'axe des $y$ à $-3$ et l'axe des $x$ à $-1$ et à $3$; seule $x^2-2x-3$ donne les trois."),
      image: graphSvg({ fn: f, xmin: -3, xmax: 5, ymin: -5, ymax: 6, points: [{ x: -1, y: 0, label: "(-1, 0)", color: "#1e293b", dy: 16 }, { x: 3, y: 0, label: "(3, 0)", color: "#1e293b", dy: 16 }, { x: 0, y: -3, label: "(0, -3)", color: "#1e293b" }], title: "y = (x + 1)(x - 3)" }) }); }
  q.push(match("easy", "Associe chaque polynôme à son nom.", ["$7x^2$", "$x-4$", "$x^2+3x-1$"], ["monôme", "binôme", "trinôme"], [0, 1, 2]));
  q.push(num("easy", "Quel est le terme constant du produit développé $(x+5)(x-3)$?", -15, 0, "$5\\cdot(-3)=-15$."));
  { const c = X("B-20", "x^2 + 9x + 14", "x+2", "x+7"); q.push(MC("easy", "Un rectangle a des côtés $(x+2)$ et $(x+7)$. Son aire est :", T(c), ["$x^2+14$", "$x^2+9x+9$", "$2x+9$"], "Aire $=$ longueur $\\times$ largeur, puis développe.")); }

  // ── moyen (20) ──
  { const c = X("B-21", "15x^2 + 14x - 8", "5x-2", "3x+4"); q.push(MC("medium", "Développe $(5x-2)(3x+4)$.", T(c), ["$15x^2-8$", "$15x^2+26x-8$", "$8x^2+14x-8$"], "Extérieurs $20x$, intérieurs $-6x$, ils se combinent en $14x$.")); }
  { const c = X("B-22", "4x^2 - 28x + 49", "2x-7", "2x-7"); q.push(MC("medium", "Développe $(2x-7)^2$.", T(c), ["$4x^2+49$", "$4x^2-14x+49$", "$4x^2-28x-49$"], "$(2x)^2-2(2x)(7)+7^2$.")); }
  { const c = X("B-23", "36x^2 - 1", "6x+1", "6x-1"); q.push(MC("medium", "Développe $(6x+1)(6x-1)$.", T(c), ["$36x^2+1$", "$12x^2-1$", "$36x^2-12x-1$"], "Somme fois différence : $a^2-b^2$.")); }
  { const c = X("B-24", "x^3 + 2x^2 + x + 12", "x^2-x+4", "x+3"); q.push(MC("medium", "Développe $(x^2-x+4)(x+3)$.", T(c), ["$x^3+4x^2+x+12$", "$x^3+2x^2-x+12$", "$x^3-3x^2+4x+12$"], "$x^3+3x^2-x^2-3x+4x+12$.")); }
  { const c = X("B-25", "2x^2 - 11x - 21", "2x+3", "x-7"); q.push(num("medium", "Quel est le coefficient de $x$ dans le développement de $(2x+3)(x-7)$?", c[1], 0, `$${ptex(c)}$.`)); }
  { const c = psub(ppow(P("x+4"), 2), ppow(P("x-4"), 2)); assert.strictEqual(ptex(c), "16x"); verify("B-26", (x) => (x + 4) ** 2 - (x - 4) ** 2, (x) => 16 * x); q.push(num("medium", "$(x+4)^2-(x-4)^2$ se simplifie en $kx$. Trouve $k$.", 16, 0, "$(x^2+8x+16)-(x^2-8x+16)=16x$.")); }
  { const c = X("B-27", "x^3 + 2x^2 - 5x - 6", "x+1", "x-2", "x+3"); q.push(MC("medium", "Développe $(x+1)(x-2)(x+3)$.", T(c), ["$x^3+6x^2-5x-6$", "$x^3+2x^2-6$", "$x^3-2x^2-5x+6$"], "Multiplie d'abord deux facteurs, puis le troisième.")); }
  { const c = X("B-28", "x^3 + 9x^2 + 27x + 27", "x+3", "x+3", "x+3"); q.push(MC("medium", "Développe $(x+3)^3$.", T(c), ["$x^3+27$", "$x^3+9x^2+9x+27$", "$x^3+3x^2+9x+27$"], "Rangée de Pascal $1,3,3,1$ avec $3^k$ : $1,\\ 9,\\ 27,\\ 27$.")); }
  { const c = X("B-29", "2x^4 + 5x^3 - 2x^2 + 17x - 10", "x^2+3x-2", "2x^2-x+5"); q.push(num("medium", "Trouve le coefficient de $x^2$ dans le produit $(x^2+3x-2)(2x^2-x+5)$.", c[2], 0, "Ne garde que les produits qui donnent $x^2$ : $x^2\\cdot5$, $3x\\cdot(-x)$, $(-2)\\cdot2x^2$ → $5-3-4=-2$.")); }
  { const c = padd(X("B-30a", null, "2x", "x-3"), X("B-30b", null, "4", "x-3")); assert.strictEqual(ptex(c), "2x^2 - 2x - 12"); q.push(fill("medium", "Développe et simplifie $2x(x-3)+4(x-3)$ : ___", spell(c), "$2x^2-6x+4x-12$.")); }
  q.push(tf("medium", "$(a-b)^2=a^2-b^2$.", false, "$(a-b)^2=a^2-2ab+b^2$."));
  q.push(tf("medium", "Multiplier un polynôme de degré 3 par un polynôme de degré 4 donne un polynôme de degré 7.", true, "Les degrés s'additionnent : $3+4=7$."));
  q.push(ms("medium", "Quelles expressions sont équivalentes à $x^2-16$?", ["$(x-4)(x+4)$", "$(x+4)(x-4)$", "$x^2-4^2$", "$x^2-8x+16$"], [0, 1, 2], "$(x-4)^2$ a un terme du milieu; les autres sont le même produit."));
  { const f1 = (x) => (x + 5) ** 2, f2 = (x) => x * x + 25; assert.deepStrictEqual(psub(P("x^2+10x+25"), P("x^2+25")), P("10x"));
    q.push({ ...num("medium", "Un élève affirme que $(x+5)^2=x^2+25$. On trace les graphiques des deux membres. En combien de points se rencontrent-ils, et qu'est-ce que cela dit de l'affirmation?", 1, 0, "L'équation $x^2+10x+25=x^2+25$ donne $10x=0$, donc ils se rencontrent seulement en $(0,25)$. Des expressions équivalentes doivent se rencontrer en <em>chaque</em> point, donc l'affirmation est fausse. (Réponse : 1.)"),
      image: graphSvg({ fn: f1, extraCurves: [{ fn: f2, color: "#be123c" }], xmin: -8, xmax: 3, ymin: 0, ymax: 64, points: [{ x: 0, y: 25, label: "(0, 25)", color: "#1e293b" }], title: "bleu : y = (x + 5)²    rouge : y = x² + 25" }) }); }
  q.push(MC("medium", "Un modèle d'aire a les produits partiels $6x^2,\\ -9x,\\ 4x,\\ -6$. De quel produit s'agit-il?", "$(3x+2)(2x-3)$", ["$(3x-2)(2x+3)$", "$(6x+2)(x-3)$", "$(3x+2)(2x+3)$"], "$3x\\cdot2x=6x^2$, $3x\\cdot(-3)=-9x$, $2\\cdot2x=4x$, $2\\cdot(-3)=-6$."));
  q.push(order("medium", "Place les étapes dans l'ordre pour développer $(x+3)(2x-1)$.", ["Multiplie les premiers termes : $x\\cdot2x=2x^2$", "Multiplie les termes extérieurs : $x\\cdot(-1)=-x$", "Multiplie les termes intérieurs : $3\\cdot2x=6x$", "Multiplie les derniers termes : $3\\cdot(-1)=-3$", "Regroupe les termes semblables : $2x^2+5x-3$"]));
  { const r1 = X("B-37a", "x^2 + 4x - 12", "x+6", "x-2"), r2 = X("B-37b", "2x^2 + 5x - 12", "2x-3", "x+4"), r3 = X("B-37c", "x^2 - 10x + 25", "x-5", "x-5"), r4 = X("B-37d", "3x^2 - 2x - 1", "3x+1", "x-1");
    q.push(match("medium", "Associe chaque produit à son développement.", ["$(x+6)(x-2)$", "$(2x-3)(x+4)$", "$(x-5)^2$", "$(3x+1)(x-1)$"], [T(r1), T(r2), T(r3), T(r4)], [0, 1, 2, 3])); }
  q.push(num("medium", "Pour quelle valeur de $k$ l'expression $x^2-18x+k$ est-elle un trinôme carré parfait?", 81, 0, "$(x-9)^2=x^2-18x+81$ : $k=(18/2)^2$."));
  { const a = psub(pmul(P("2x-1"), P("x+4")), pmul(P("x-3"), P("x+2"))); assert.strictEqual(ptex(a), "x^2 + 8x + 2"); verify("B-39", (x) => (2 * x - 1) * (x + 4) - (x - 3) * (x + 2), (x) => peval(a, x));
    q.push(MC("medium", "Simplifie $(2x-1)(x+4)-(x-3)(x+2)$.", T(a), ["$x^2+6x-10$", "$x^2+8x-10$", "$3x^2+6x+2$"], "$(2x^2+7x-4)-(x^2-x-6)$.")); }
  { const t = pmulAll(P("x+2"), P("x-5"), P("x+1")); q.push(num("medium", "Trouve la somme de tous les coefficients du développement de $(x+2)(x-5)(x+1)$. (Indice : quelle valeur de $x$ rend chaque puissance égale à $1$?)", t.reduce((a, c) => a + c, 0), 0, "Pose $x=1$ : $(3)(-4)(2)=-24$.")); }

  // ── difficile (20) ──
  { const c = ppow(P("x+2"), 4); assert.strictEqual(c[2], 24); q.push(num("hard", "Trouve le coefficient de $x^2$ dans le développement de $(x+2)^4$.", 24, 0, "Rangée de Pascal $1,4,6,4,1$ : le terme en $x^2$ est $6\\cdot x^2\\cdot2^2=24x^2$.")); }
  { const c = X("B-H2", "x^4 + 2x^3 - 13x^2 - 14x + 24", "x-1", "x+2", "x-3", "x+4"); q.push(num("hard", "Trouve le coefficient de $x$ dans le développement de $(x-1)(x+2)(x-3)(x+4)$.", c[1], 0, "Associe $(x-1)(x+2)=x^2+x-2$ et $(x-3)(x+4)=x^2+x-12$; avec $u=x^2+x$ : $(u-2)(u-12)=u^2-14u+24$, donc le coefficient de $x$ est $-14$.")); }
  { const k = 1.5; const c = pmul(P("2x+3"), [-k, 1]); assert.strictEqual(c[1], 0); q.push(num("hard", "Pour quelle valeur de $k$ le développement de $(2x+3)(x-k)$ n'a-t-il <em>aucun</em> terme en $x$?", 1.5, 0.001, "Développé : $2x^2+(3-2k)x-3k$. Pose $3-2k=0$.")); }
  { const c = pmul(P("x^2+2x+3"), P("x^2-2x+3")); assert.strictEqual(ptex(c), "x^4 + 2x^2 + 9"); q.push(num("hard", "$(x^2+ax+3)(x^2-2x+b)$ n'a ni terme en $x^3$ ni terme en $x$. Trouve $a+b$.", 5, 0, "$x^3$ : $a-2=0\\Rightarrow a=2$. $x$ : $ab-6=0\\Rightarrow b=3$. Donc $a+b=5$, et le produit est $x^4+2x^2+9$.")); }
  q.push(num("hard", "Sans calculatrice, évalue $1003\\times997$ à l'aide d'un produit remarquable.", 999991, 0, "$(1000+3)(1000-3)=1000^2-3^2=1\\,000\\,000-9$."));
  q.push(num("hard", "Si $x+y=7$ et $xy=10$, trouve $x^2+y^2$.", 29, 0, "$(x+y)^2=x^2+2xy+y^2$, donc $x^2+y^2=49-20=29$."));
  q.push(num("hard", "Si $x-\\dfrac1x=3$, trouve $x^2+\\dfrac1{x^2}$.", 11, 0, "Élève les deux membres au carré : $x^2-2+\\dfrac1{x^2}=9$."));
  { const a = psub(ppow(P("x^2+3"), 3), ppow(P("x^3+1"), 2)); assert.strictEqual(pdeg(a), 4); verify("B-H8", (x) => (x * x + 3) ** 3 - (x ** 3 + 1) ** 2, (x) => peval(a, x));
    q.push(MC("hard", "Quel est le degré de $(x^2+3)^3-(x^3+1)^2$?", "$4$", ["$6$", "$5$", "$2$"], `Les deux commencent par $x^6$, qui s'annule. Le résultat est $${ptex(a)}$.`)); }
  { const t = ppow(P("2x^2-x+1"), 3); q.push(num("hard", "Trouve la somme des coefficients du développement de $(2x^2-x+1)^3$.", t.reduce((a, c) => a + c, 0), 0, "Substitue $x=1$ : $(2-1+1)^3=8$.")); }
  { const cube = ppow(P("2x-1"), 3); assert.strictEqual(ptex(cube), "8x^3 - 12x^2 + 6x - 1"); assert.deepStrictEqual(pmul(P("2x-1"), P("4x^2-4x+1")), cube);
    q.push(ms("hard", "Quelles expressions sont égales à $(2x-1)^3$?", ["$8x^3-12x^2+6x-1$", "$(2x-1)(4x^2-4x+1)$", "$8x^3-1$", "$(2x-1)(2x-1)(2x-1)$"], [0, 1, 3], "$(a-b)^3=a^3-3a^2b+3ab^2-b^3$, et non $a^3-b^3$.")); }
  { const c = pmul(P("2x+3"), [5, 1]); assert.strictEqual(c[1], 13); q.push(num("hard", "Un rectangle a des côtés $(2x+3)$ et $(x+k)$. Le coefficient de $x$ dans son aire est $13$. Trouve $k$.", 5, 0, "Aire $=2x^2+(2k+3)x+3k$; $2k+3=13$.")); }
  { const c = X("B-H12", "x^4 - 81", "x+3", "x-3", "x^2+9"); q.push(fill("hard", "Développe $(x+3)(x-3)(x^2+9)$ : ___", spell(c), "Deux différences de carrés de suite : $(x^2-9)(x^2+9)=x^4-81$.")); }
  q.push(num("hard", "$Q(x)=x(x+2)(x+4)(x+6)+16$ est le carré d'un polynôme du second degré. Trouve $Q(3)$ et donne le nombre dont c'est le carré.", 31, 0, "Associe $x(x+6)=x^2+6x$ et $(x+2)(x+4)=x^2+6x+8$; avec $u=x^2+6x$ on obtient $u(u+8)+16=(u+4)^2$. Pour $x=3$ : $u=27$, donc $31^2=961$. Vérification : $3\\cdot5\\cdot7\\cdot9+16=961$."));
  { assert.strictEqual(pmul(P("3x-2"), P("2x+5")).join(), P("6x^2+11x-10").join()); q.push(num("hard", "Les entiers $b$ et $d$ vérifient $(3x+b)(2x+d)=6x^2+11x-10$. Trouve $b+d$.", 3, 0, "$bd=-10$ et $3d+2b=11$. La paire $b=-2,\\ d=5$ convient, donc $b+d=3$.")); }
  q.push(num("hard", "On découpe un carré de côté $(x+2)$ dans le coin d'un carré de côté $(x+7)$. L'aire restante est $125$. Trouve $x$.", 8, 0, "$(x+7)^2-(x+2)^2=10x+45=125$, donc $x=8$."));
  q.push(tf("hard", "La somme de deux polynômes du troisième degré est toujours de degré $3$.", false, "$(x^3+x)+(-x^3+2)=x+2$ est de degré $1$."));
  { const c = X("B-H17", "4x^3 - 120x^2 + 864x", "x", "36-2x", "24-2x"); q.push(num("hard", "On découpe des carrés de côté $x$ à chaque coin d'une feuille de $36$ cm sur $24$ cm pour former une boîte ouverte de volume $V=x(36-2x)(24-2x)$. Trouve le coefficient de $x^2$ dans la forme développée de $V$.", c[2], 0, `$V=${ptex(c)}$.`)); }
  q.push(order("hard", "Place les étapes dans l'ordre pour développer $(2x-1)(x^2+3x-4)$.", ["Multiplie $2x$ par chaque terme du trinôme : $2x^3+6x^2-8x$", "Multiplie $-1$ par chaque terme du trinôme : $-x^2-3x+4$", "Écris les six produits partiels sur une ligne", "Regroupe les termes semblables par degré", "Donne le résultat : $2x^3+5x^2-11x+4$"]));
  { const a = X("B-H19a", "x^2 - 8x + 16", "x-4", "x-4"), b = X("B-H19b", "x^2 - 16", "x+4", "x-4"), c = X("B-H19c", "x^2 - 3x - 4", "x-4", "x+1"), d = X("B-H19d", "x^2 - 5x + 4", "x-4", "x-1");
    q.push(match("hard", "Associe chaque produit à son développement — ils se ressemblent, sois prudent.", ["$(x-4)^2$", "$(x+4)(x-4)$", "$(x-4)(x+1)$", "$(x-4)(x-1)$"], [T(a), T(b), T(c), T(d)], [0, 1, 2, 3])); }
  q.push(MC("hard", "Quelle expression n'est PAS équivalente à $(2x-3)^2$?", "$4x^2-9$", ["$4x^2-12x+9$", "$(3-2x)^2$", "$(2x-3)(2x-3)$"], "$(2x-3)^2=4x^2-12x+9$; $4x^2-9$ est $(2x-3)(2x+3)$."));
  return q;
}
