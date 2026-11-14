// 1.4 Transformations des fonctions puissance — 20 questions difficiles
// NOTATION FRANÇAISE : y = a[k(x − c)]ⁿ + d (c = translation horizontale, d = translation verticale).
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.4 Transformations des fonctions puissance";
export const Q = [
  num(String.raw`$y=a(x-1)^3+d$ passe par $(3,17)$ et $(0,-1)$. Trouve $a$.`, 2, "8a + d = 17 et −a + d = −1 → 9a = 18."),
  num(String.raw`Pour $y=-3(2x+4)^4+1$, le point $(-1,1)$ de $y=x^4$ a pour image un point d'abscisse :`, -2.5, "y = −3(2(x + 2))⁴ + 1 : x → x/2 − 2 = −0.5 − 2.", null, 0.001),
  num(String.raw`Trouve la somme des abscisses à l'origine de $y=-2(x-3)^4+32$.`, 6, "(x − 3)⁴ = 16 → x = 1 ou 5."),
  num(String.raw`$y=a(x+2)^3-4$ a une abscisse à l'origine en $x=0$. Trouve $a$.`, 0.5, "8a − 4 = 0.", null, 0.001),
  mc("La fonction cubique a pour point de symétrie (1, −2) et passe par (2, 0). Quelle équation?", String.raw`$y=2(x-1)^3-2$`, [String.raw`$y=2(x+1)^3-2$`, String.raw`$y=(x-1)^3-2$`, String.raw`$y=-2(x-1)^3-2$`], "a(1)³ − 2 = 0 → a = 2.", graph((x) => 2 * (x - 1) ** 3 - 2, { xmin: -1, xmax: 3, ymin: -6, ymax: 6 }, [P(1, -2), P(2, 0)])),
  num("La fonction quartique a pour sommet (−1, 4) et passe par (1, −4). Trouve son ordonnée à l'origine.", 3.5, "a(2)⁴ + 4 = −4 → a = −½; f(0) = −½ + 4.", graph((x) => -0.5 * (x + 1) ** 4 + 4, { xmin: -3.5, xmax: 1.5, ymin: -5, ymax: 5 }, [P(-1, 4), P(1, -4)]), 0.001),
  tf(String.raw`$y=(2-x)^4$ et $y=(x-2)^4$ sont la même fonction.`, true, "(2 − x)⁴ = (−(x − 2))⁴ = (x − 2)⁴."),
  tf(String.raw`$y=(2-x)^3$ et $y=(x-2)^3$ sont la même fonction.`, false, "(2 − x)³ = −(x − 2)³."),
  num(String.raw`On comprime $y=x^3$ horizontalement de facteur $\tfrac12$, puis on lui fait subir une translation de 1 vers la droite. Évalue la nouvelle fonction en $x=2$.`, 8, "y = (2(x − 1))³ = 8(x − 1)³; en x = 2 : 8."),
  mc(String.raw`Laquelle est équivalente à $y=(4-2x)^3+1$?`, String.raw`$y=-8(x-2)^3+1$`, [String.raw`$y=8(x-2)^3+1$`, String.raw`$y=-2(x-4)^3+1$`, String.raw`$y=-8(x+2)^3+1$`], "(4 − 2x) = −2(x − 2), et (−2)³ = −8."),
  num(String.raw`Combien de points $y=(x-1)^4$ et $y=1$ ont-elles en commun?`, 2, "(x − 1)⁴ = 1 → x = 0 ou 2."),
  num(String.raw`$y=a(x-2)^4-8$ passe par l'origine. Trouve son autre abscisse à l'origine.`, 4, "16a = 8 → a = ½; (x − 2)⁴ = 16 → x = 0 ou 4."),
  ms(String.raw`Quelles transformations laissent le graphique de $y=x^3$ inchangé? Choisis toutes les bonnes réponses.`, ["une rotation de 180° autour de l'origine", "une réflexion par rapport à l'axe des y suivie d'une réflexion par rapport à l'axe des x", "une réflexion par rapport à l'axe des y", "une translation de 1 vers la droite"], [0, 1], "Symétrie impaire : (x, y) → (−x, −y) conserve le graphique."),
  num(String.raw`Pour $y=2(x-c)^4+d$, le point $(2,16)$ de $y=x^4$ a pour image $(5,35)$. Trouve $d$.`, 3, "x : 2 + c = 5 → c = 3. y : 32 + d = 35."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=(x+1)^3-27$.`, 2, "x + 1 = 3."),
  mc("La courbe grise est y = x⁴. Quelle équation donne la courbe bleue?", String.raw`$y=\tfrac12(x-2)^4-1$`, [String.raw`$y=2(x-2)^4-1$`, String.raw`$y=\tfrac12(x+2)^4-1$`, String.raw`$y=\tfrac12(x-2)^4+1$`], "Sommet (2, −1) et (3, −0.5) : a(1)⁴ − 1 = −0.5 → a = ½.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x ** 4, color: "gray" }, { f: (x) => 0.5 * (x - 2) ** 4 - 1, color: "blue" }], points: [P(2, -1), P(3, -0.5)], step: { x: 1, y: 1 } })),
  num(String.raw`Résous $3(x-2)^3+24=0$.`, 0, "(x − 2)³ = −8 → x − 2 = −2."),
  tf(String.raw`Un étirement horizontal de $y=x^4$ de facteur 2 donne le même graphique qu'une compression verticale de facteur $\tfrac1{16}$.`, true, "(x/2)⁴ = x⁴/16."),
  num(String.raw`$y=a(x-c)^3$ passe par $(1,-1)$ et $(3,1)$, et son point de symétrie est situé à mi-chemin entre ces deux points. Trouve $a$.`, 1, "c = 2; a(−1)³ = −1 → a = 1."),
  num(String.raw`Pour $y=-(x+1)^4+16$, trouve la longueur de l'intervalle des valeurs de x où $y\ge0$.`, 4, "(x + 1)⁴ ≤ 16 → −3 ≤ x ≤ 1.", graph((x) => -((x + 1) ** 4) + 16, { xmin: -4, xmax: 2, ymin: -4, ymax: 18 }, [P(-1, 16)], { step: { x: 1, y: 2 } })),
];
