import { FIG } from "./figs.mjs";
// 5.3 Rapports trigonométriques inverses et identités trigonométriques — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, rightD, sin, cos, tan, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`Évalue $\csc30^\circ$.`, 2, "1 ÷ ½."),
  num(S`Évalue $\sec0^\circ$.`, 1, "1 ÷ cos 0°."),
  mc(S`Que vaut $\cot45^\circ$?`, S`$1$`, [S`$0$`, S`$\sqrt2$`, "non définie"], "1 ÷ tan 45°."),
  mc(S`Que vaut $\sec45^\circ$?`, S`$\sqrt2$`, [S`$\frac1{\sqrt2}$`, S`$2$`, S`$1$`], "1 ÷ (1/√2)."),
  mc(S`Que vaut $\csc60^\circ$?`, S`$\frac2{\sqrt3}$`, [S`$\frac{\sqrt3}2$`, S`$2$`, S`$\sqrt3$`], "1 ÷ (√3/2)."),
  mc(S`Que vaut $\cot60^\circ$?`, S`$\frac1{\sqrt3}$`, [S`$\sqrt3$`, S`$2$`, S`$\frac12$`], "1 ÷ √3."),
  mc(S`Laquelle est égale à $\csc\theta$?`, S`$\frac1{\sin\theta}$`, [S`$\frac1{\cos\theta}$`, S`$\sin^{-1}\theta$`, S`$\frac1{\tan\theta}$`], "La cosécante est l'inverse du sinus."),
  mc(S`Dans un triangle rectangle, à quel rapport $\sec\theta$ est-elle égale?`, "hyp/adj", ["adj/hyp", "hyp/opp", "opp/adj"], "L'inverse de adj/hyp."),
  num("Un triangle rectangle a des côtés de 5, 12 et 13, et ∠A est opposé au côté 5. Trouve csc A.", 2.6, "13/5.", FIG.tri5),
  num("Un triangle rectangle a des côtés de 5, 12 et 13, et ∠A est opposé au côté 5. Trouve sec A (4 décimales).", rd(13 / 12, 4), "13/12.", FIG.tri5, 0.0001),
  num("Un triangle rectangle a des côtés de 5, 12 et 13, et ∠A est opposé au côté 5. Trouve cot A.", 2.4, "12/5.", FIG.tri5),
  num(S`Évalue $\sec70^\circ$ (4 décimales).`, rd(1 / cos(70), 4), "1 ÷ cos 70°.", null, 0.0001),
  num(S`Évalue $\csc25^\circ$ (4 décimales).`, rd(1 / sin(25), 4), "1 ÷ sin 25°.", null, 0.0001),
  num(S`Évalue $\cot55^\circ$ (4 décimales).`, rd(1 / tan(55), 4), "1 ÷ tan 55°.", null, 0.0001),
  tf(S`$\tan\theta=\frac{\sin\theta}{\cos\theta}$ est une identité.`, true, "Elle est vraie partout où cos θ ≠ 0."),
  tf(S`$\csc\theta$ signifie la même chose que $\sin^{-1}\theta$.`, false, "sin⁻¹ est une réciproque (elle donne un angle); csc est un rapport inverse."),
  num(S`$\sin\theta=0.25$. Trouve $\csc\theta$.`, 4, "1 ÷ 0.25."),
  mc(S`Pour tout angle, $\sin^2\theta+\cos^2\theta=$`, S`$1$`, [S`$0$`, S`$2$`, S`$\tan^2\theta$`], "L'identité de Pythagore."),
  num("Trouve csc A pour le triangle illustré (A à gauche).", 2.125, "hyp/opp = 17/8.", rightD(15, 8, ["A", "", ""], [[7.5, 0, "15"], [15, 4, "8"], [7, 5, "17"]])),
  num("Le point illustré est sur le côté terminal de θ. Trouve sec θ (4 décimales).", rd(-5 / 3, 4), "r = 5; r/x = 5/(−3).", armD(-3, 4, "(−3, 4)"), 0.0001),
];

export const M = [
  mc(S`Simplifie $\sin\theta\sec\theta$.`, S`$\tan\theta$`, [S`$\cos\theta$`, S`$1$`, S`$\cot\theta$`], "sin θ · 1/cos θ."),
  mc(S`Simplifie $\cos\theta\csc\theta$.`, S`$\cot\theta$`, [S`$\tan\theta$`, S`$1$`, S`$\sec\theta$`], "cos θ · 1/sin θ."),
  mc(S`Simplifie $\tan\theta\cot\theta$.`, S`$1$`, [S`$\tan^2\theta$`, S`$\sin\theta\cos\theta$`, S`$0$`], "Le produit de deux inverses vaut 1."),
  mc(S`Simplifie $\dfrac{1-\cos^2\theta}{\sin\theta}$.`, S`$\sin\theta$`, [S`$\cos\theta$`, S`$1$`, S`$\sin^2\theta$`], "Le numérateur est sin² θ."),
  mc(S`Simplifie $\sec^2\theta-\tan^2\theta$.`, S`$1$`, [S`$0$`, S`$\cos^2\theta$`, S`$\sec\theta$`], "1 + tan² θ = sec² θ."),
  mc(S`Simplifie $\dfrac{\sin\theta}{\csc\theta}$.`, S`$\sin^2\theta$`, [S`$1$`, S`$\cos\theta$`, S`$\tan\theta$`], "sin θ ÷ (1/sin θ)."),
  num(S`θ est aigu et $\cos\theta=0.6$. Trouve $\csc\theta$.`, 1.25, "sin θ = 0.8."),
  num(S`θ est aigu et $\tan\theta=0.75$. Trouve $\sec\theta$.`, 1.25, "1 + 0.5625 = 1.5625 = sec² θ."),
  num(S`$\sin\theta=-0.28$ et θ est dans le quadrant 4. Trouve $\cos\theta$.`, 0.96, "√(1 − 0.0784), positif dans Q4."),
  num(S`$\cos\theta=-0.8$ et θ est dans le quadrant 2. Trouve $\cot\theta$ (4 décimales).`, rd(-0.8 / 0.6, 4), "sin θ = 0.6; cot = cos/sin.", null, 0.0001),
  num(S`Évalue $\sec^2 30^\circ$ (4 décimales).`, rd(4 / 3, 4), "(2/√3)² = 4/3.", null, 0.0001),
  num(S`Évalue $\csc^2 45^\circ+\cot^2 45^\circ$.`, 3, "2 + 1."),
  num(S`$\csc\theta=2$ et θ est dans le quadrant 2. Trouve θ.`, 150, "sin θ = ½."),
  num(S`$\cot\theta=1$ et θ est dans le quadrant 3. Trouve θ.`, 225, "tan θ = 1."),
  tf(S`$1+\tan^2\theta=\sec^2\theta$ est une identité.`, true, "Divise sin² θ + cos² θ = 1 par cos² θ."),
  tf(S`$\sin\theta+\cos\theta=1$ pour tout angle θ.`, false, "À 45°, le membre de gauche vaut √2."),
  mc(S`Quel angle montre que $(\sin\theta+\cos\theta)^2=1$ N'EST PAS une identité?`, "45°", ["0°", "90°", "180°"], "À 45° : (√2)² = 2."),
  ms("Lesquelles sont des identités? Choisis toutes les bonnes réponses.", [S`$\tan\theta\cos\theta=\sin\theta$`, S`$\sec\theta\sin\theta=\tan\theta$`, S`$\csc\theta\cos\theta=\tan\theta$`, S`$\sin^2\theta=1-\cos^2\theta$`], [0, 1, 3], "csc θ cos θ = cot θ."),
  num("Trouve cot θ pour le triangle illustré (4 décimales).", rd(24 / 7, 4), "adj/opp = 24/7.", rightD(24, 7, ["θ", "", ""], [[12, 0, "24"], [24, 3.5, "7"]]), 0.0001),
  num("Le point illustré est sur le côté terminal de θ. Trouve csc θ.", -2.6, "r = 13; r/y = 13/(−5).", armD(12, -5, "(12, −5)")),
];
