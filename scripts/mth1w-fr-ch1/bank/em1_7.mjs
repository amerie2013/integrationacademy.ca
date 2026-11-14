// 1.7 Lois des exposants et notation scientifique — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { tiles } from "./svg.mjs";

const SCI = (a, e) => `${a}x10^${e}`;
const sciForms = (a, e) => [SCI(a, e), `${a}×10^${e}`, `${a} x 10^${e}`, `${a} × 10^${e}`, `${a}e${e}`, `${a}*10^${e}`];

export const E = [
  fill(String.raw`Simplifie $x^3\cdot x^5$ : ___`, ["x^8", "x8"], "Même base, on multiplie : on additionne les exposants."),
  fill(String.raw`Simplifie $y^9\div y^4$ : ___`, ["y^5", "y5"], "Même base, on divise : on soustrait les exposants."),
  fill(String.raw`Simplifie $(m^2)^4$ : ___`, ["m^8", "m8"], "Puissance d'une puissance : on multiplie les exposants."),
  num(String.raw`Évalue $2^3\times2^2$.`, 32, String.raw`$2^5=32$.`),
  num(String.raw`Évalue $5^6\div5^4$.`, 25, String.raw`$5^2=25$.`),
  mc(String.raw`Simplifie $(3a)^2$.`, "$9a^2$", ["$3a^2$", "$6a^2$", "$9a$"], "Élève au carré le 3 et le a."),
  mc(String.raw`Comment s'écrit $4\,500\,000$ en notation scientifique?`, String.raw`$4.5\times10^{6}$`, [String.raw`$45\times10^{5}$`, String.raw`$4.5\times10^{5}$`, String.raw`$0.45\times10^{7}$`], "La virgule se déplace de 6 positions."),
  mc(String.raw`Comment s'écrit $0.0062$ en notation scientifique?`, String.raw`$6.2\times10^{-3}$`, [String.raw`$6.2\times10^{3}$`, String.raw`$62\times10^{-4}$`, String.raw`$6.2\times10^{-2}$`], "La virgule se déplace de 3 positions vers la droite."),
  num(String.raw`Écris $3.1\times10^{4}$ en notation usuelle.`, 31000, "Déplace la virgule de 4 positions vers la droite."),
  num(String.raw`Écris $8\times10^{-3}$ sous forme décimale.`, 0.008, "Déplace la virgule de 3 positions vers la gauche.", undefined, 0.0000001),
  tf(String.raw`$x^2\cdot x^3=x^6$`, false, String.raw`Additionne les exposants : $x^5$.`),
  tf(String.raw`$\frac{a^5}{a^5}=a^0=1$ pour $a\neq0$.`, true, "Tout s'annule."),
  mc("Quelle expression le diagramme de tuiles représente-t-il?", "$x^2\\cdot x^3=x^5$", ["$x^2\\cdot x^3=x^6$", "$2x\\cdot3x$", "$x^5\\cdot x^5$"], "Deux facteurs, puis trois de plus : cinq facteurs.", tiles([{ n: 2, sym: "x" }, { n: 3, sym: "x" }])),
  fill(String.raw`Simplifie $a^4\cdot a^{-1}$ : ___`, ["a^3", "a3"], String.raw`$a^{4+(-1)}$.`),
  ms(String.raw`Lesquels sont en notation scientifique? Sélectionne-les tous.`, [String.raw`$3.2\times10^{5}$`, String.raw`$32\times10^{4}$`, String.raw`$9.9\times10^{-2}$`, String.raw`$0.5\times10^{3}$`, String.raw`$1\times10^{8}$`], [0, 2, 4], String.raw`Le premier nombre doit être entre $1$ et $10$.`),
  num(String.raw`Évalue $(10^2)^3\div10^5$.`, 10, String.raw`$10^6\div10^5=10$.`),
  fill(String.raw`Simplifie $(2x)^3$ : ___`, ["8x^3", "8x3"], String.raw`$2^3x^3$.`),
  num(String.raw`Évalue $7^{-3}\times7^{4}$.`, 7, String.raw`$7^1=7$.`),
  mc(String.raw`Lequel est le plus grand?`, String.raw`$2\times10^{3}$`, [String.raw`$9\times10^{2}$`, String.raw`$9.9\times10^{1}$`, String.raw`$5\times10^{-4}$`], String.raw`$2000>900$.`),
  fill(String.raw`Simplifie $\frac{b^7}{b^9}$ avec un exposant positif : ___`, ["1/b^2", "1/b2"], String.raw`$b^{-2}=\frac{1}{b^2}$.`),
];

export const M = [
  fill(String.raw`Simplifie $(2a^3)^2\cdot a$ : ___`, ["4a^7", "4a7"], String.raw`$4a^6\cdot a=4a^7$.`),
  fill(String.raw`Simplifie $\frac{15x^8}{5x^3}$ : ___`, ["3x^5", "3x5"], String.raw`$\frac{15}{5}=3$, $x^{8-3}$.`),
  fill(String.raw`Simplifie $(x^2y^3)^4$ : ___`, ["x^8y^12", "x8y12", "x^8 y^12", "x^8*y^12"], "Multiplie chaque exposant par 4."),
  num(String.raw`Évalue $\frac{3^5\times3^{-2}}{3^4}$ sous forme décimale (à 4 décimales).`, 0.3333, String.raw`$3^{-1}=\frac13$.`, undefined, 0.0001),
  mc(String.raw`Évalue $(3\times10^{4})(2\times10^{5})$.`, String.raw`$6\times10^{9}$`, [String.raw`$6\times10^{20}$`, String.raw`$5\times10^{9}$`, String.raw`$6\times10^{1}$`], String.raw`$3\times2=6$, $10^{4+5}$.`),
  mc(String.raw`Évalue $\dfrac{8\times10^{9}}{4\times10^{3}}$.`, String.raw`$2\times10^{6}$`, [String.raw`$2\times10^{3}$`, String.raw`$4\times10^{6}$`, String.raw`$2\times10^{12}$`], String.raw`$\frac84=2$, $10^{9-3}$.`),
  fill(String.raw`Écris $(5\times10^{3})(4\times10^{2})$ en notation scientifique (écris-le comme 2x10^5) : ___`, sciForms(2, 6), String.raw`$20\times10^{5}=2\times10^{6}$.`),
  num(String.raw`Trouve $n$ : $4^n\times4^2=4^9$.`, 7, String.raw`$n+2=9$.`),
  num(String.raw`Trouve $n$ : $(5^n)^3=5^{12}$.`, 4, String.raw`$3n=12$.`),
  tf(String.raw`$2^3\times3^2=6^5$`, false, String.raw`Des bases différentes ne se combinent pas : $8\times9=72$.`),
  mc(String.raw`Simplifie $\dfrac{(a^2)^3\cdot a^4}{a^5}$.`, "$a^5$", ["$a^{3}$", "$a^{19}$", "$a^{6}$"], String.raw`$a^{6+4-5}=a^5$.`),
  ms(String.raw`Quelles expressions sont égales à $x^{10}$? Sélectionne-les toutes.`, [String.raw`$(x^5)^2$`, String.raw`$x^4\cdot x^6$`, String.raw`$\frac{x^{20}}{x^{2}}$`, String.raw`$x^{12}\cdot x^{-2}$`, String.raw`$(x^2)^8$`], [0, 1, 3], String.raw`$\frac{x^{20}}{x^2}=x^{18}$; $(x^2)^8=x^{16}$.`),
  num(String.raw`Une bactérie mesure $3\times10^{-6}$ m de long. Combien en entre-t-il bout à bout dans $1.5$ mm ($1.5\times10^{-3}$ m)?`, 500, String.raw`$\frac{1.5\times10^{-3}}{3\times10^{-6}}=0.5\times10^{3}=500$.`),
  mc(String.raw`Place dans l'ordre croissant : $2.1\times10^{-3}$, $5\times10^{-4}$, $1.9\times10^{-3}$.`, String.raw`$5\times10^{-4},\ 1.9\times10^{-3},\ 2.1\times10^{-3}$`, [String.raw`$1.9\times10^{-3},\ 2.1\times10^{-3},\ 5\times10^{-4}$`, String.raw`$2.1\times10^{-3},\ 1.9\times10^{-3},\ 5\times10^{-4}$`, String.raw`$5\times10^{-4},\ 2.1\times10^{-3},\ 1.9\times10^{-3}$`], String.raw`$0.0005<0.0019<0.0021$.`),
  fill(String.raw`Simplifie $(-3x^2)^3$ : ___`, ["-27x^6", "−27x^6", "-27x6"], String.raw`$(-3)^3=-27$, $(x^2)^3=x^6$.`),
  num(String.raw`La lumière parcourt environ $3\times10^{8}$ m/s. Combien de mètres parcourt-elle en $2\times10^{-3}$ s? Donne un nombre en notation usuelle.`, 600000, String.raw`$6\times10^{5}=600\,000$.`),
  fill(String.raw`Simplifie $\frac{12m^5n^2}{4m^2n^3}$ (exposants positifs) : ___`, ["3m^3/n", "3m3/n", "3m^3 / n", "(3m^3)/n"], String.raw`$3m^{3}n^{-1}=\frac{3m^3}{n}$.`),
  mc(String.raw`Environ combien de secondes y a-t-il dans une année ($365$ jours)?`, String.raw`$3.2\times10^{7}$`, [String.raw`$3.2\times10^{5}$`, String.raw`$8.8\times10^{3}$`, String.raw`$5.3\times10^{5}$`], String.raw`$365\times24\times3600=31\,536\,000$.`),
  tf(String.raw`$(a+b)^2=a^2+2ab+b^2$; les lois des exposants ne se distribuent donc pas sur une addition.`, true, String.raw`$(a+b)^2\neq a^2+b^2$.`),
  num(String.raw`Évalue $\dfrac{(2^3)^2}{2^4}$.`, 4, String.raw`$2^{6-4}=4$.`),
];
