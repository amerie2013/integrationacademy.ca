// MCR3U-FR 2.5 — Radicaux et expressions équivalentes (miroir français de ../mcr3u-ch2/t2_5.mjs, partie leçon).
import { html, gframe, ex, pr, qa, watchOut, verify, simp, mistake, steps, callout, challenge, gview } from "./lib.mjs";
import { s, same, shapeSvg, assert } from "./kit5.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "2.5 Radicaux et expressions équivalentes";
export const ID = lessonId(2, 5);
const M = (x) => `\\(${x}\\)`;
const r = String.raw;

// ───────────────────────── données de la leçon ─────────────────────────
same("L-E1", s(72), 6 * s(2)); same("L-E2", 5 * s(12), 10 * s(3)); same("L-E3", 7 * s(2), s(98));
same("L-E4", 3 * s(20) - s(45) + 2 * s(5), 5 * s(5)); same("L-E5", 2 * s(3) * 5 * s(6), 30 * s(2));
same("L-E6", s(2) * (3 * s(8) - s(2)), 10); same("L-E7", (3 + s(5)) * (2 - s(5)), 1 - s(5));
same("L-E8a", (4 + s(7)) * (4 - s(7)), 9); same("L-E8b", (2 * s(3) - 5) * (2 * s(3) + 5), -13);
same("L-E9", 6 / s(8), (3 * s(2)) / 2); same("L-E10", 5 / (3 - s(2)), (15 + 5 * s(2)) / 7);
verify("L-E11", (x) => s(45 * x ** 3), (x) => 3 * x * s(5 * x));
same("L-E12", s(36 + 81), 3 * s(13)); same("L-E13", s(3 + 2 * s(2)), 1 + s(2));
same("L-P1", s(150), 5 * s(6)); same("L-P5", (2 + 3 * s(2)) * (1 - s(2)), -4 + s(2)); same("L-P7", 10 / (s(5) + 1), (5 * s(5) - 5) / 2);
same("L-CH", ((1 + s(5)) / 2) ** 2, (1 + s(5)) / 2 + 1);
assert.deepStrictEqual(simp(72), [6, 2]);

const squaresTable = `<div style="overflow-x:auto;margin:8px 0;"><table style="border-collapse:collapse;font-size:14px;"><tbody><tr>${[...Array(15)].map((_, i) => `<td style="border:1px solid #c7d2fe;padding:4px 8px;text-align:center;background:#eef2ff;color:#3730a3;font-weight:700;">${(i + 1) ** 2}</td>`).join("")}</tr><tr>${[...Array(15)].map((_, i) => `<td style="border:1px solid #e2e8f0;padding:4px 8px;text-align:center;">\\(${i + 1}^2\\)</td>`).join("")}</tr></tbody></table></div>`;

const lessonHtml = r`<div class="lecture-box">
  <h1>√ Radicaux et expressions équivalentes</h1>
  <p><strong>Aperçu.</strong> Un radical comme \(\sqrt{72}\) est un nombre <strong>exact</strong> : le \(8.485\ldots\) de la calculatrice n'en est qu'une approximation. Les mathématiciens préfèrent les formes exactes — et ils les aiment <em>simplifiées</em>, pour que des nombres équivalents s'écrivent de la même façon. Dans cette leçon, tu vas apprendre à simplifier des radicaux, à les combiner, à les multiplier et à <strong>rationaliser des dénominateurs</strong>. Comme toujours, une réécriture est juste si <em>la valeur ne change pas</em> — et avec les radicaux, ta calculatrice peut le confirmer.</p>
  ${callout("Les deux règles d'or.", "\\(\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}\\) et \\(\\dfrac{\\sqrt a}{\\sqrt b}=\\sqrt{\\dfrac ab}\\) (pour \\(a,b\\ge0\\)). Tout dans cette leçon est une utilisation astucieuse de ces deux règles — à l'envers comme à l'endroit. <strong>Mais \\(\\sqrt{a+b}\\ne\\sqrt a+\\sqrt b\\)</strong> : \\(\\sqrt{9+16}=5\\), et non \\(3+4\\).", "amber")}

  <p>Tu peux <em>voir</em> la règle du produit : \(\sqrt{4x}\) et \(2\sqrt x\) sont équivalentes, donc elles tracent une seule courbe.</p>
  ${gframe(["y = sqrt(4*x)", "y = 2*sqrt(x)"], { title: "√(4x) et 2√x forment UNE seule courbe (la règle du produit)", ...gview(0, 12, 0, 8) })}

  <h2>📌 Vocabulaire</h2>
  <ul>
    <li>Dans \(5\sqrt{12}\) : \(5\) est le <strong>coefficient</strong>, \(\sqrt{\ }\) est le <strong>symbole du radical</strong> et \(12\) est le <strong>radicande</strong>.</li>
    <li>Un <strong>radical entier</strong> a un coefficient de 1 (\(\sqrt{48}\)); un <strong>radical composé</strong> a un coefficient à l'extérieur (\(4\sqrt3\)). Ils peuvent représenter le même nombre : \(\sqrt{48}=4\sqrt3\).</li>
    <li>Un radical est sous sa <strong>forme la plus simple</strong> lorsque le radicande n'a <em>aucun facteur carré parfait</em> autre que 1 et qu'il n'y a aucun radical au dénominateur.</li>
    <li>Des <strong>radicaux semblables</strong> ont le même radicande (\(3\sqrt5\) et \(7\sqrt5\)); seuls les radicaux semblables peuvent être additionnés ou soustraits — comme les termes semblables.</li>
  </ul>
  <p>Apprends à reconnaître rapidement les carrés parfaits :</p>
  ${squaresTable}

  ${steps("Pour simplifier \\(\\sqrt{n}\\)", [
    "Trouve le <strong>plus grand carré parfait</strong> qui divise \\(n\\) (vérifie 4, 9, 16, 25, 36, 49, …).",
    "Écris \\(n\\) sous la forme <em>(carré parfait) × (reste)</em>.",
    "Sépare à l'aide de \\(\\sqrt{ab}=\\sqrt a\\sqrt b\\) et prends la racine carrée du carré parfait.",
    "Si tu n'as pas utilisé le <em>plus grand</em> carré, simplifie encore.",
  ])}

  <h2>🔵 Exemples résolus</h2>
  ${ex("Exemple 1 : Simplifier un radical", `Simplifie ${M("\\sqrt{72}")}.`, [
    `Le plus grand carré parfait qui divise 72 est \\(36\\) : \\(72=36\\times2\\).`,
    `\\(\\sqrt{72}=\\sqrt{36}\\cdot\\sqrt2=6\\sqrt2\\).`,
  ], `\\(6\\sqrt2\\). Vérification à la calculatrice : \\(\\sqrt{72}=8.4853\\) et \\(6\\sqrt2=6(1.41421)=8.4853\\) ✓. (Commencer par \\(4\\) donne \\(2\\sqrt{18}\\) — ce n'est pas terminé : \\(18=9\\cdot2\\).)`, gframe([{ kind: "cartesian", expr: "y = sqrt(x)", dMin: "0", dMax: "90" }], { title: "√72 ≈ 8.49 sur y = √x", labels: [{ x: 72, y: 8.49, t: "(72, 8.49)" }], ...gview(-2, 92, -1, 11) }))}
  ${ex("Exemple 2 : Un radical avec un coefficient", `Simplifie ${M("5\\sqrt{12}")}.`, [
    `<b>Règle.</b> \\(\\sqrt{ab}=\\sqrt a\\sqrt b\\), donc un facteur carré parfait peut être sorti du radical.`,
    `\\(\\sqrt{12}=\\sqrt{4}\\cdot\\sqrt3=2\\sqrt3\\).`,
    `Multiplie les coefficients : \\(5\\times2\\sqrt3\\).`,
    `<b>Vérification.</b> \\(5\\sqrt{12}\\approx17.32\\) et \\(10\\sqrt3\\approx17.32\\) ✓`,
  ], `\\(10\\sqrt3\\).`, gframe([{ kind: "cartesian", expr: "y = 5*sqrt(x)", dMin: "0", dMax: "20" }], { title: "5√12 ≈ 17.32 sur y = 5√x", labels: [{ x: 12, y: 17.32, t: "(12, 17.32)" }], ...gview(-1, 21, -1, 24) }))}
  ${ex("Exemple 3 : Écrire sous forme de radical entier", `Écris ${M("7\\sqrt2")} sous forme de radical entier.`, [
    `Fais entrer le coefficient <em>sous</em> le radical en l'élevant au carré : \\(7=\\sqrt{49}\\).`,
    `\\(7\\sqrt2=\\sqrt{49}\\cdot\\sqrt2=\\sqrt{98}\\).`,
    `<b>Vérification.</b> \\(7\\sqrt2\\approx9.90\\) et \\(\\sqrt{98}\\approx9.90\\) ✓`,
  ], `\\(\\sqrt{98}\\). C'est utile pour <em>comparer</em> des grandeurs : \\(7\\sqrt2=\\sqrt{98}\\) est à peine plus petit que \\(\\sqrt{100}=10\\).`, gframe([{ kind: "cartesian", expr: "y = sqrt(x)", dMin: "0", dMax: "110" }], { title: "√98 est juste sous √100 = 10", labels: [{ x: 98, y: 9.9, t: "(98, 9.9)" }, { x: 100, y: 10, t: "" }], ...gview(-2, 112, -1, 12) }))}
  ${ex("Exemple 4 : Additionner et soustraire", `Simplifie ${M("3\\sqrt{20}-\\sqrt{45}+2\\sqrt5")}.`, [
    `<strong>Simplifie d'abord chaque radical</strong> : \\(\\sqrt{20}=2\\sqrt5\\) et \\(\\sqrt{45}=3\\sqrt5\\).`,
    `Ce sont maintenant des radicaux semblables : \\(3(2\\sqrt5)-3\\sqrt5+2\\sqrt5=6\\sqrt5-3\\sqrt5+2\\sqrt5\\).`,
  ], `\\(5\\sqrt5\\). Le radicande ne change pas; seuls les coefficients se combinent (\\(6-3+2=5\\)). Vérification : \\(3(4.472)-6.708+4.472=11.180=5\\sqrt5\\) ✓.`, gframe(["y = sqrt(5)*x"], { title: "Les radicaux semblables se comportent comme des termes semblables : x fois √5", labels: [{ x: 5, y: 11.18, t: "5√5 ≈ 11.18" }], ...gview(-1, 7, -1, 16) }))}
  ${ex("Exemple 5 : Multiplier des radicaux", `Simplifie ${M("(2\\sqrt3)(5\\sqrt6)")}.`, [
    `<b>Règle.</b> \\(a\\sqrt m\\cdot b\\sqrt n=ab\\sqrt{mn}\\) : les coefficients ensemble, les radicandes ensemble.`,
    `Multiplie séparément les coefficients et les radicandes : \\(2\\cdot5\\cdot\\sqrt{3\\cdot6}=10\\sqrt{18}\\).`,
    `Simplifie : \\(\\sqrt{18}=3\\sqrt2\\), donc \\(10\\cdot3\\sqrt2\\).`,
    `<b>Vérification.</b> \\((3.464)(12.247)\\approx42.43\\) et \\(30(1.4142)\\approx42.43\\) ✓`,
  ], `\\(30\\sqrt2\\).`, gframe(["y = 10*sqrt(x)"], { title: "10√18 ≈ 42.43 sur y = 10√x", labels: [{ x: 18, y: 42.43, t: "(18, 42.43)" }], ...gview(-1, 24, -1, 55) }))}
  ${ex("Exemple 6 : Distribuer", `Simplifie ${M("\\sqrt2\\left(3\\sqrt8-\\sqrt2\\right)")}.`, [
    `<b>Règle.</b> Le radical extérieur multiplie chaque terme de la parenthèse, comme dans toute distribution.`,
    `Distribue : \\(3\\sqrt{16}-\\sqrt{4}\\).`,
    `\\(3(4)-2=12-2\\).`,
    `<b>Vérification.</b> \\(1.414(8.485-1.414)\\approx1.414(7.071)\\approx10\\) ✓`,
  ], `\\(10\\) — les radicaux ont complètement disparu, parce que \\(\\sqrt2\\cdot\\sqrt2=2\\).`)}
  ${ex("Exemple 7 : Multiplier des binômes (PEID)", `Développe ${M("(3+\\sqrt5)(2-\\sqrt5)")}.`, [
    `<b>Règle.</b> La méthode PEID fonctionne comme d'habitude, et \\(\\sqrt5\\cdot\\sqrt5=5\\) fait disparaître le radical du dernier produit.`,
    `Premiers \\(6\\); Extérieurs \\(-3\\sqrt5\\); Intérieurs \\(+2\\sqrt5\\); Derniers \\(-(\\sqrt5)^2=-5\\).`,
    `Regroupe : \\(6-5=1\\) et \\(-3\\sqrt5+2\\sqrt5=-\\sqrt5\\).`,
  ], `\\(1-\\sqrt5\\). Vérification : \\((5.236)(-0.236)=-1.236\\) et \\(1-2.236=-1.236\\) ✓.`, gframe(["y = (3+x)*(2-x)"], { title: "Pose x = √5 ≈ 2.236 dans (3 + x)(2 − x)", labels: [{ x: 2.236, y: -1.236, t: "(√5, −1.24)" }], ...gview(-4, 4, -6, 8) }))}
  ${ex("Exemple 8 : Les conjugués font disparaître les radicaux", `Développe a) ${M("(4+\\sqrt7)(4-\\sqrt7)")} et b) ${M("(2\\sqrt3-5)(2\\sqrt3+5)")}.`, [
    `Des binômes qui ne diffèrent que par le signe du milieu sont des <strong>conjugués</strong>. Leur produit est une différence de carrés, donc les termes du milieu s'annulent : \\((a+b)(a-b)=a^2-b^2\\).`,
    `a) \\(4^2-(\\sqrt7)^2=16-7\\). b) \\((2\\sqrt3)^2-5^2=12-25\\).`,
    `<b>Vérification.</b> a) \\((6.646)(1.354)\\approx9\\) ✓. b) \\((-1.536)(8.464)\\approx-13\\) ✓`,
  ], `a) \\(9\\) b) \\(-13\\). Le produit de conjugués est toujours <em>rationnel</em> — c'est le secret de la rationalisation.`, gframe(["y = 16-x^2"], { title: "a) (4 + x)(4 − x) = 16 − x² : en x = √7, la valeur est 9", labels: [{ x: 2.646, y: 9, t: "(√7, 9)" }], ...gview(-5, 5, -4, 18) }))}
  ${ex("Exemple 9 : Rationaliser un dénominateur monôme", `Rationalise ${M("\\dfrac{6}{\\sqrt8}")}.`, [
    `<b>But.</b> Rationaliser, c'est réécrire sans radical au dénominateur, sans changer la valeur.`,
    `Simplifie d'abord : \\(\\sqrt8=2\\sqrt2\\), donc \\(\\dfrac{6}{2\\sqrt2}=\\dfrac{3}{\\sqrt2}\\).`,
    `Multiplie le haut et le bas par \\(\\sqrt2\\) (c'est multiplier par 1) : \\(\\dfrac{3\\sqrt2}{\\sqrt2\\cdot\\sqrt2}=\\dfrac{3\\sqrt2}{2}\\).`,
  ], `\\(\\dfrac{3\\sqrt2}{2}\\). Vérification : \\(6\\div2.828=2.121\\) et \\(3(1.414)/2=2.121\\) ✓.`, gframe([{ kind: "cartesian", expr: "y = 6/sqrt(x)", dMin: "0.5", dMax: "16" }], { title: "6/√8 ≈ 2.12 sur y = 6/√x", labels: [{ x: 8, y: 2.12, t: "(8, 2.12)" }], ...gview(-1, 17, -1, 10) }))}
  ${ex("Exemple 10 : Rationaliser un dénominateur binôme", `Rationalise ${M("\\dfrac{5}{3-\\sqrt2}")}.`, [
    `Multiplie le haut et le bas par le <strong>conjugué</strong> du dénominateur, \\(3+\\sqrt2\\).`,
    `Bas : \\((3-\\sqrt2)(3+\\sqrt2)=9-2=7\\). Haut : \\(5(3+\\sqrt2)=15+5\\sqrt2\\).`,
  ], `\\(\\dfrac{15+5\\sqrt2}{7}\\). Vérification : \\(5\\div1.586=3.153\\) et \\((15+7.071)/7=3.153\\) ✓.`, gframe([{ kind: "cartesian", expr: "y = 5/(3-x)", dMin: "0", dMax: "2.6" }], { title: "5/(3 − √2) ≈ 3.15, avec x = √2 ≈ 1.414", labels: [{ x: 1.414, y: 3.153, t: "(√2, 3.15)" }], ...gview(-0.5, 3, -1, 14) }))}
  ${ex("Exemple 11 : Des radicaux avec des variables", `Simplifie ${M("\\sqrt{45x^3}")}, où \\(x\\ge0\\).`, [
    `Sors les carrés parfaits : \\(45=9\\cdot5\\) et \\(x^3=x^2\\cdot x\\).`,
    `\\(\\sqrt{9\\cdot x^2\\cdot5x}=3x\\sqrt{5x}\\).`,
    `<b>Vérification avec</b> \\(x=5\\). Expression de départ : \\(\\sqrt{45(125)}=\\sqrt{5625}=75\\). Réponse : \\(3(5)\\sqrt{25}=75\\) ✓`,
  ], `\\(3x\\sqrt{5x}\\). (On précise \\(x\\ge0\\) parce que \\(\\sqrt{x^2}=|x|\\); pour \\(x\\) négatif, l'expression \\(\\sqrt{45x^3}\\) n'est même pas réelle.)`, gframe([{ kind: "cartesian", expr: "y = sqrt(45*x^3)", dMin: "0", dMax: "6" }, { kind: "cartesian", expr: "y = 3*x*sqrt(5*x)", dMin: "0", dMax: "6" }], { title: "Les deux formes tracent une seule courbe pour x ≥ 0", labels: [{ x: 5, y: 75, t: "(5, 75)" }], ...gview(-1, 7, -5, 100) }))}
  ${ex("Exemple 12 : Une application — la diagonale", `L'écran rectangulaire d'une tablette mesure \\(6\\) cm sur \\(9\\) cm. Trouve la longueur exacte de sa diagonale.`, [
    `Pythagore : \\(d^2=6^2+9^2=36+81=117\\), donc \\(d=\\sqrt{117}\\).`,
    `\\(117=9\\cdot13\\), donc \\(\\sqrt{117}=3\\sqrt{13}\\).`,
  ], `\\(d=3\\sqrt{13}\\) cm \\(\\approx10.82\\) cm. La forme exacte est plus courte et ne contient aucune erreur d'arrondi.`, `<div style="text-align:center;">${shapeSvg({ kind: "rect", wl: "9 cm", hl: "6 cm", dl: "d" })}</div>`)}
  ${ex("Exemple 13 : Un radical imbriqué", `Montre que ${M("\\sqrt{3+2\\sqrt2}=1+\\sqrt2")}.`, [
    `Un nombre positif est égal à \\(\\sqrt{N}\\) exactement lorsque son carré vaut \\(N\\) (et qu'il est positif). Élève le membre de droite au carré : \\((1+\\sqrt2)^2=1+2\\sqrt2+2\\).`,
    `\\(=3+2\\sqrt2\\) ✓, et \\(1+\\sqrt2>0\\).`,
  ], `Donc \\(\\sqrt{3+2\\sqrt2}=1+\\sqrt2\\). Numériquement, \\(\\sqrt{5.828}=2.414=1+1.414\\) ✓ — un radical dans un radical s'est réduit à un radical simple.`, gframe([{ kind: "cartesian", expr: "y = sqrt(x)", dMin: "0", dMax: "9" }], { title: "√(3 + 2√2) = √5.83 ≈ 2.41", labels: [{ x: 5.83, y: 2.41, t: "(5.83, 2.41)" }], ...gview(-1, 10, -1, 4) }))}

  ${mistake("\\(\\sqrt{x+9}=\\sqrt x+3\\)", "Il n'existe pas de règle de la somme pour les radicaux. Teste \\(x=16\\) : \\(\\sqrt{25}=5\\) mais \\(\\sqrt{16}+3=7\\).", "\\(\\sqrt{x+9}\\) ne peut pas être séparé. Seuls les <em>produits</em> et les <em>quotients</em> se séparent : \\(\\sqrt{9x}=3\\sqrt x\\).")}
  ${gframe(["y = sqrt(x+9)", "y = sqrt(x)+3"], { title: "√(x + 9) et √x + 3 sont des courbes DIFFÉRENTES — elles ne se rencontrent qu'en x = 0", ...gview(0, 20, 0, 9) })}
  ${mistake("\\(\\sqrt{12}+\\sqrt3=\\sqrt{15}\\)", "On n'additionne des radicaux que s'ils sont <em>semblables</em> une fois simplifiés. \\(\\sqrt{12}=2\\sqrt3\\), donc la somme est \\(2\\sqrt3+\\sqrt3=3\\sqrt3\\approx5.196\\), et non \\(\\sqrt{15}\\approx3.873\\).", "\\(\\sqrt{12}+\\sqrt3=3\\sqrt3\\).")}
  ${watchOut([
    "<strong>Simplifie d'abord chaque radical</strong> — c'est seulement ensuite que tu vois lesquels sont semblables.",
    "\\(\\sqrt{a}\\cdot\\sqrt{a}=a\\), mais \\(\\sqrt a+\\sqrt a=2\\sqrt a\\). Ne confonds pas multiplier et additionner.",
    "Un dénominateur qui contient un radical n'est pas « terminé » : rationalise-le. Utilise \\(\\sqrt{b}\\) pour un monôme, le <strong>conjugué</strong> pour un binôme.",
    "Quand tu multiplies le haut et le bas par quelque chose, tu dois multiplier <em>chaque terme</em> du numérateur.",
    "\\(\\sqrt{x^2}=|x|\\). On écrit des réponses comme \\(3x\\sqrt{5x}\\) seulement lorsque \\(x\\ge0\\).",
    "Utilise la calculatrice pour <em>vérifier</em>, pas pour répondre : la question demande une forme <em>exacte</em>.",
  ])}

  <h2>🟡 Questions d'entraînement</h2>
  ${pr(1, "Connaissance", `Simplifie ${M("\\sqrt{150}")}.`, `\\(150=25\\cdot6\\), donc ${M("5\\sqrt6")}.`)}
  ${pr(2, "Connaissance", `Simplifie ${M("3\\sqrt{75}")}.`, `\\(\\sqrt{75}=5\\sqrt3\\), donc ${M("15\\sqrt3")}.`)}
  ${pr(3, "Connaissance", `Simplifie ${M("2\\sqrt{45}+5\\sqrt{20}-\\sqrt{80}")}.`, `\\(6\\sqrt5+10\\sqrt5-4\\sqrt5=\\)${M("12\\sqrt5")}.`)}
  ${pr(4, "Habiletés de la pensée", `Simplifie ${M("(4\\sqrt6)(3\\sqrt2)")}.`, `\\(12\\sqrt{12}=12\\cdot2\\sqrt3=\\)${M("24\\sqrt3")}.`)}
  ${pr(5, "Habiletés de la pensée", `Développe et simplifie ${M("(2+3\\sqrt2)(1-\\sqrt2)")}.`, `\\(2-2\\sqrt2+3\\sqrt2-3\\cdot2=\\)${M("-4+\\sqrt2")}.`)}
  ${pr(6, "Habiletés de la pensée", `Développe a) ${M("(5+\\sqrt3)(5-\\sqrt3)")} et b) ${M("(\\sqrt7+\\sqrt3)^2")}.`, `a) \\(25-3=22\\). b) \\(7+2\\sqrt{21}+3=10+2\\sqrt{21}\\).`)}
  ${pr(7, "Habiletés de la pensée", `Rationalise le dénominateur de ${M("\\dfrac{10}{\\sqrt5+1}")}.`, `Multiplie par \\(\\dfrac{\\sqrt5-1}{\\sqrt5-1}\\) : dénominateur \\(5-1=4\\); numérateur \\(10(\\sqrt5-1)\\). Résultat \\(\\dfrac{10(\\sqrt5-1)}{4}=\\)${M("\\dfrac{5\\sqrt5-5}{2}")}.`)}
  ${pr(8, "Mise en application", `Un rectangle mesure \\((2+\\sqrt3)\\) cm sur \\((2-\\sqrt3)\\) cm. Trouve son aire et son périmètre exacts.`, `Aire \\(=(2+\\sqrt3)(2-\\sqrt3)=4-3=1\\) cm². Périmètre \\(=2[(2+\\sqrt3)+(2-\\sqrt3)]=2(4)=8\\) cm. Les radicaux s'annulent dans les deux cas.`)}
  ${challenge("Le <strong>nombre d'or</strong> est \\(\\varphi=\\dfrac{1+\\sqrt5}{2}\\). Montre que \\(\\varphi^2=\\varphi+1\\), puis utilise ce résultat pour écrire \\(\\varphi^3\\) sous la forme \\(a+b\\sqrt5\\).", `\\(\\varphi^2=\\dfrac{1+2\\sqrt5+5}{4}=\\dfrac{6+2\\sqrt5}{4}=\\dfrac{3+\\sqrt5}{2}\\), et \\(\\varphi+1=\\dfrac{1+\\sqrt5}{2}+\\dfrac22=\\dfrac{3+\\sqrt5}{2}\\) ✓. Ensuite \\(\\varphi^3=\\varphi\\cdot\\varphi^2=\\varphi(\\varphi+1)=\\varphi^2+\\varphi=2\\varphi+1=2+\\sqrt5\\) (\\(\\approx4.236\\)).`)}

  <h2>❓ Questions et réponses</h2>
  ${qa("Q1 : Comment savoir si un radical est complètement simplifié?", "Le radicande n'a aucun facteur carré parfait (4, 9, 16, 25, …) autre que 1, et il n'y a aucun radical au dénominateur.")}
  ${qa("Q2 : Pourquoi puis-je additionner \\(3\\sqrt5+7\\sqrt5\\), mais pas \\(\\sqrt2+\\sqrt3\\)?", "Les radicaux semblables se combinent comme des termes semblables : \\(3\\sqrt5+7\\sqrt5=10\\sqrt5\\) (pense à \\(3x+7x\\)). \\(\\sqrt2\\) et \\(\\sqrt3\\) sont des « unités » différentes, donc \\(\\sqrt2+\\sqrt3\\) ne peut pas être simplifié.")}
  ${qa("Q3 : Qu'est-ce qu'un conjugué et pourquoi est-il utile?", "Le conjugué de \\(a+\\sqrt b\\) est \\(a-\\sqrt b\\). Leur produit est \\(a^2-b\\), qui est rationnel — multiplier par le conjugué élimine donc les radicaux d'un dénominateur.")}
  ${qa("Q4 : A-t-on \\(\\sqrt{x^2}=x\\)?", "Seulement lorsque \\(x\\ge0\\). En général, \\(\\sqrt{x^2}=|x|\\) : pour \\(x=-3\\), \\(\\sqrt9=3\\), et non \\(-3\\).")}
  ${qa("Q5 : Comment vérifier la simplification d'un radical?", "Évalue l'expression de départ et la forme simplifiée à la calculatrice; elles doivent concorder à chaque décimale affichée.")}
  ${qa("Q6 : Les radicaux sont-ils liés aux exposants?", "Oui : \\(\\sqrt{x}=x^{1/2}\\), donc la règle du produit \\(\\sqrt a\\sqrt b=\\sqrt{ab}\\) est la loi des exposants \\(a^{1/2}b^{1/2}=(ab)^{1/2}\\).")}
</div>`;

export const blocks = () => [html(lessonHtml)];
