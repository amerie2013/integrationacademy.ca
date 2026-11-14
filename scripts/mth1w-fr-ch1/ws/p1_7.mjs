// Fiche 1.7 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
import { cube } from "./tikz.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Simplifie $3^2\times3^5\div3^{-1}$, puis évalue.`, ans: "$3^8=6561$" },
  { level: 1, q: String.raw`Simplifie $(b^4)^3\div b^{-2}$. Évalue ensuite $(2^3)^2\times2^{-4}$.`, ans: "$b^{14}$; $2^2=4$" },
  { level: 1, q: String.raw`Écris $0.000\,052$ en notation scientifique et $7.1\times10^{-3}$ en notation usuelle.`, ans: String.raw`$5.2\times10^{-5}$; $0.0071$` },
  { level: 2, q: String.raw`Simplifie $(5c^4d^{-1})^2\cdot c^{-3}$. Utilise des exposants positifs.`, ans: String.raw`$\dfrac{25c^5}{d^2}$` },
  { level: 2, q: String.raw`Simplifie $\dfrac{18x^7y^2}{-6x^2y^5}$. Utilise des exposants positifs.`, ans: String.raw`$-\dfrac{3x^5}{y^3}$` },
  { level: 2, q: String.raw`Simplifie $\left(\dfrac{2m^3}{n^2}\right)^4$.`, ans: String.raw`$\dfrac{16m^{12}}{n^8}$` },
  { level: 2, q: String.raw`Évalue $\dfrac{(4\times10^{3})(6\times10^{-8})}{8\times10^{-2}}$ en notation scientifique.`, ans: String.raw`$3\times10^{-3}$` },
  { level: 2, q: String.raw`Une pile de $2\times10^{4}$ feuilles de papier mesure $1.8$ m de haut. Quelle est l'épaisseur d'une feuille? Réponds en notation scientifique.`, ans: String.raw`$9\times10^{-5}$ m` },
  { level: 3, space: 7.5,
    q: String.raw`Simplifie. Utilise des exposants positifs.
a) $\left(\dfrac{2a^6b^3c^5}{10a^2b^7c}\right)^3$
b) $\left(\dfrac{12x^{-2}y^5}{8x^4y^{-1}}\right)^2$
c) $\left(\dfrac{3m^{-2}n}{m^2n^{-3}}\right)^{-2}$`,
    ans: String.raw`a) $\dfrac{a^{12}c^{12}}{125b^{12}}$ b) $\dfrac{9y^{12}}{4x^{12}}$ c) $\dfrac{m^8}{9n^8}$` },
  { level: 3, space: 6,
    q: String.raw`Robin a simplifié $\left(\dfrac{2x^3}{y^{-2}}\right)^3$ et a écrit $\dfrac{2x^9}{y^{-6}}=2x^9y^6$.
a) Trouve l'erreur de Robin et explique-la.
b) Écris la forme simplifiée correcte.
c) Évalue la forme correcte pour $x=-1$ et $y=2$.`,
    ans: String.raw`a) Le coefficient n'a pas été élevé au cube : $2^3=8$. b) $8x^9y^6$ c) $8(-1)(64)=-512$.` },
  { level: 3, space: 6,
    q: String.raw`Soit $x=-2$ et $y=3$.
a) Simplifie $\dfrac{(x^3y^{-2})^2(xy)^3}{x^5y^{-4}}$, puis évalue.
b) Simplifie $(x^2y^{-1})^{-3}(xy)^4$, puis évalue sous forme de fraction.
c) En a), pourquoi simplifier d'abord rend-il l'évaluation plus facile?`,
    ans: String.raw`a) $x^4y^3=432$ b) $\dfrac{y^7}{x^2}=\dfrac{2187}{4}$ c) Moins de puissances à calculer, et aucune fraction en cours de route.` },
  { level: 3, space: 6.5,
    q: String.raw`Trouve $n$ dans chaque équation.
a) $\dfrac{25^n\times5^3}{5^{-1}}=125^4$
b) $(2^3)^n\div4^2=2^{11}$
c) $x^5\cdot(x^n)^2=x^{-3}$
d) Montre que $2^{10}+2^{10}=2^{11}$. Explique pourquoi la réponse n'est pas $2^{20}$.`,
    ans: String.raw`a) $2n+4=12$, $n=4$ b) $3n-4=11$, $n=5$ c) $5+2n=-3$, $n=-4$ d) $2\times2^{10}=2^{11}$. Les exposants s'additionnent quand on multiplie des puissances, et non quand on les additionne.` },
  { level: 3, space: 6.5,
    fig: cube("$2\\times10^{-5}$ m"),
    q: String.raw`Réponds en notation scientifique. Utilise $3\times10^{8}$ m/s pour la vitesse de la lumière.
a) Combien de temps la lumière met-elle à parcourir les $1.5\times10^{11}$ m du Soleil à la Terre?
b) Une sonde spatiale est à $2.4\times10^{13}$ m. Combien d'heures son signal radio met-il à atteindre la Terre? Donne ta réponse avec trois chiffres significatifs.
c) Une cellule est représentée par le cube illustré. Trouve son volume.
d) Combien de ces cellules entrent dans $1$ L, soit $1\times10^{-3}$ m$^3$?`,
    ans: String.raw`a) $5\times10^{2}$ s b) $8\times10^{4}$ s, environ $2.22\times10^{1}$ h c) $8\times10^{-15}$ m$^3$ d) $1.25\times10^{11}$` },
];
