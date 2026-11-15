// 5.3 Rapports trigonométriques inverses et identités trigonométriques — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, rightD, unitD, sin, cos, tan, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "5.3 Rapports trigonométriques inverses et identités trigonométriques";
export const Q = [
  mc(S`Simplifie $\dfrac{\sec\theta-\cos\theta}{\sin\theta}$.`, S`$\tan\theta$`, [S`$\sin\theta$`, S`$\cos\theta$`, S`$\cot\theta$`], "(1 − cos² θ)/(cos θ sin θ) = sin θ / cos θ."),
  mc(S`Simplifie $(1+\cot^2\theta)\sin^2\theta$.`, S`$1$`, [S`$\cos^2\theta$`, S`$\csc^2\theta$`, S`$\sin^2\theta$`], "csc² θ · sin² θ."),
  mc(S`Simplifie $\dfrac{\csc\theta-\sin\theta}{\cot\theta}$.`, S`$\cos\theta$`, [S`$\sin\theta$`, S`$\tan\theta$`, S`$1$`], "(1 − sin² θ)/sin θ ÷ cos θ/sin θ."),
  mc(S`Simplifie $\sin^4\theta-\cos^4\theta$.`, S`$\sin^2\theta-\cos^2\theta$`, [S`$1$`, S`$(\sin\theta-\cos\theta)^2$`, S`$2\sin^2\theta$`], "Différence de carrés; l'autre facteur vaut 1."),
  mc(S`Simplifie $\dfrac{(1+\sin\theta)(1-\sin\theta)}{\cos^2\theta}$.`, S`$1$`, [S`$\sin^2\theta$`, S`$\tan^2\theta$`, S`$\sec\theta$`], "Numérateur 1 − sin² θ = cos² θ."),
  num(S`$\tan\theta=2.4$ et θ est dans le quadrant 3. Trouve $\csc\theta$ (4 décimales).`, rd(-13 / 12, 4), "Point (−5, −12), r = 13.", null, 0.0001),
  num(S`$\sec\theta=3$ et θ est dans le quadrant 4. Trouve $\tan\theta$ (4 décimales).`, rd(-Math.sqrt(8), 4), "cos θ = ⅓, sin θ = −√8/3.", null, 0.0001),
  num(S`$\cot\theta=-0.75$ et $\cos\theta>0$. Trouve $\sin\theta$.`, -0.6, "Quadrant 4 : point (4, −3)."),
  num(S`$\sin\theta+\cos\theta=1.2$. Trouve $\sin\theta\cos\theta$.`, 0.22, "Élève au carré : 1 + 2 sin θ cos θ = 1.44."),
  num(S`$\tan\theta+\cot\theta=4$. Trouve $\sin\theta\cos\theta$.`, 0.25, "tan θ + cot θ = 1/(sin θ cos θ)."),
  num(S`$\tan\theta=3$. Trouve $\sec^2\theta$.`, 10, "1 + 9."),
  num(S`Évalue $\csc^2 60^\circ-\cot^2 60^\circ$.`, 1, "4/3 − 1/3."),
  tf(S`$(\sin\theta+\cos\theta)^2=1+2\sin\theta\cos\theta$ est une identité.`, true, "Développe et utilise sin² + cos² = 1."),
  tf(S`$\tan\theta+\cot\theta=\sec\theta\csc\theta$ est une identité.`, true, "(sin² + cos²)/(sin cos) = 1/(sin cos)."),
  tf(S`$\dfrac{\cos\theta}{1-\sin\theta}=\dfrac{1+\sin\theta}{\cos\theta}$ est une identité.`, true, "Le produit croisé donne cos² θ = 1 − sin² θ."),
  ms(S`Quelles expressions sont égales à $\sec\theta-\cos\theta$? Choisis toutes les bonnes réponses.`, [S`$\sin\theta\tan\theta$`, S`$\frac{\sin^2\theta}{\cos\theta}$`, S`$\cos\theta\tan^2\theta$`, S`$\sin\theta\cot\theta$`], [0, 1, 2], "sec θ − cos θ = sin² θ / cos θ."),
  num("Trouve sec θ · csc θ pour l'angle illustré.", 2.5, "r = √5 : 1/(sin θ cos θ) = 1/(2/5).", armD(-1, -2, "(−1, −2)")),
  num(S`Trouve $\csc^2\theta-\cot^2\theta$ pour le triangle illustré.`, 1, "10 − 9, comme le prévoit l'identité.", rightD(3, 1, ["θ", "", ""], [[1.5, 0, "3"], [3, 0.5, "1"]])),
  num("Le côté terminal rencontre le cercle unité en x = 0.6428 (θ = 50°). Trouve tan θ (4 décimales).", rd(tan(50), 4), "y = √(1 − x²); tan θ = y/x.", unitD([[50, "(0.6428, y)"]]), 0.0002),
  mc("Le triangle rectangle a une hypoténuse de 1 et un angle aigu θ. Quelle identité le théorème de Pythagore donne-t-il?", S`$\sin^2\theta+\cos^2\theta=1$`, [S`$\sin\theta+\cos\theta=1$`, S`$\tan^2\theta+1=\cos^2\theta$`, S`$\sin^2\theta-\cos^2\theta=1$`], "Cathètes cos θ et sin θ.",
    rightD(cos(35), sin(35), ["θ", "", ""], [[cos(35) / 2, 0, "cos θ"], [cos(35), sin(35) / 2, "sin θ"], [0.38, 0.33, "1"]])),
];
