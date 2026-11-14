// MCV4U-FR Fiche d'exercices 1.4 — Limites et continuité (édition de l'enseignant)
import { F, gridT, pt, ho } from "./figT.mjs";

const EXAMPLES = [
  { title: "Boucher un trou", q: String.raw`La fonction $f(x)=\frac{x^2-16}{x-4}$ est-elle continue en $x=4$? Corrige-la si c'est possible.`,
    steps: [String.raw`$f(4)$ n'est pas définie. $\lim_{x\to4}(x+4)=8$.`], ans: "non essentielle; définir f(4) = 8" },
  { title: "Vérifier une fonction définie par parties", q: String.raw`La fonction $f(x)=x^2+1$ pour $x\lt2$, $f(x)=3x-1$ pour $x\ge2$ est-elle continue en 2?`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x + 1, a: -1, b: 2 }, { f: (x) => 3 * x - 1, a: 2, b: 4, color: "green" }], points: [pt(2, 5)], step: { x: 1, y: 2 } }),
    steps: [String.raw`À gauche : $5$. À droite : $5$. $f(2)=5$.`], ans: "continue" },
  { title: "Un saut", q: String.raw`Classe la discontinuité de $f(x)=x+3$ pour $x\lt0$, $f(x)=2-x$ pour $x\ge0$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 3, a: -3, b: -0.03 }, { f: (x) => 2 - x, a: 0, b: 3 }], points: [ho(0, 3), pt(0, 2, false)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Limite à gauche 3, limite à droite 2.`], ans: "discontinuité par saut en 0" },
  { title: "Infinie", q: String.raw`Classe la discontinuité de $\frac1{(x+1)^2}$ en $x=-1$.`,
    steps: [String.raw`Des deux côtés, $\to+\infty$.`], ans: "infinie (asymptote verticale x = −1)" },
  { title: "Loi du produit", q: String.raw`Évalue $\lim_{x\to1}(2x^2+3)(x-4)$.`,
    steps: [String.raw`$\lim(2x^2+3)=5$, $\lim(x-4)=-3$.`], ans: "−15" },
  { title: "Différence de cubes", q: String.raw`Évalue $\lim_{x\to3}\frac{x^3-27}{x-3}$.`,
    steps: [String.raw`$x^2+3x+9\to27$.`], ans: "27" },
  { title: "Choisir k", q: String.raw`Trouve $k$ pour que $f(x)=kx^2+1$ pour $x\le2$ et $f(x)=2x+k$ pour $x>2$ soit continue.`,
    steps: [String.raw`$4k+1=4+k\Rightarrow3k=3$.`], ans: "k = 1" },
  { title: "Rationaliser", q: String.raw`Évalue $\lim_{x\to0}\frac{\sqrt{x+25}-5}{x}$.`,
    steps: [String.raw`$\frac{1}{\sqrt{x+25}+5}\to\frac1{10}$.`], ans: String.raw`$\frac1{10}$` },
  { title: "Trouver toutes les discontinuités", q: String.raw`Classe les discontinuités de $f(x)=\frac{x+1}{x^2-x-2}$.`,
    fig: F({ view: { xmin: -4, xmax: 5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / (x - 2), a: -4, b: -1.03 }, { f: (x) => 1 / (x - 2), a: -0.97, b: 1.75 }, { f: (x) => 1 / (x - 2), a: 2.25, b: 5 }], points: [ho(-1, -1 / 3)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$\frac{x+1}{(x-2)(x+1)}=\frac1{x-2}$, $x\ne-1$.`], ans: String.raw`non essentielle en $-1$ (limite $-\frac13$); infinie en 2` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Évalue $\lim_{x\to7}\frac{x^2-49}{x-7}$.`, recap: "Factoriser.", ans: "14" },
  { level: 1, q: String.raw`Quel type de discontinuité le graphique montre-t-il en $x=1$?`, recap: "Classer.", ans: "par saut",
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: () => 1, a: -2, b: 0.98 }, { f: () => 3, a: 1, b: 4 }], points: [ho(1, 1), pt(1, 3, false)], step: { x: 1, y: 1 } }) },
  { level: 1, q: String.raw`Toute fonction polynomiale est-elle continue pour tout $x$ réel?`, recap: "Polynômes.", ans: "oui" },
  { level: 2, q: String.raw`Trouve $k$ pour que $f(x)=x+k$ pour $x\lt3$, $f(x)=x^2-2$ pour $x\ge3$ soit continue.`, recap: "Choisir k.", ans: "k = 4" },
  { level: 2, q: String.raw`Évalue $\lim_{x\to-1}\frac{x^3+1}{x+1}$.`, recap: "Somme de cubes.", ans: "3" },
  { level: 2, q: String.raw`Classe les discontinuités de $\frac{x-3}{x^2-9}$.`, recap: "Classer.", ans: "non essentielle en 3 (limite 1/6), infinie en −3" },
  { level: 2, q: String.raw`Évalue $\lim_{x\to2}\sqrt{x^2+5}$ et nomme la loi utilisée.`, recap: "Loi de la racine.", ans: "3" },
  { level: 2, q: String.raw`Définis $f(0)$ pour que $f(x)=\frac{x^2+5x}{x}$ soit continue en 0.`, recap: "Boucher un trou.", ans: "f(0) = 5" },
  { level: 3, space: 5, q: String.raw`Trouve $a$ et $b$ pour que $f(x)=ax-1$ pour $x\lt1$, $f(x)=x^2+b$ pour $1\le x\le2$, $f(x)=3x$ pour $x>2$ soit continue.`, recap: "Deux jonctions.", ans: "b = 2, a = 4" },
  { level: 3, space: 5, q: String.raw`Évalue $\lim_{x\to0}\frac{(1+x)^3-1}{x}$.`, recap: "Développer.", ans: "3" },
  { level: 3, space: 5, q: String.raw`$f(x)=x^3+x-1$ est continue, avec $f(0)=-1$ et $f(1)=1$. Explique pourquoi elle a un zéro entre 0 et 1, et situe-le à une décimale près.`, recap: "Continuité et zéros.", ans: "elle ne peut pas sauter par-dessus 0; f(0.6) ≈ −0.18, f(0.7) ≈ 0.04 : entre 0.6 et 0.7" },
  { level: 3, space: 5, q: String.raw`Esquisse une fonction continue partout sauf en une discontinuité non essentielle en $x=-2$ et en un saut en $x=1$.`, recap: "Construire un graphique.", ans: "un cercle vide en x = −2 et une marche en x = 1", fig: gridT({ xmin: -5, xmax: 5, ymin: -4, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: String.raw`Évalue $\lim_{x\to1}\frac{\sqrt x-1}{x^2-1}$.`, recap: "Rationaliser + factoriser.", ans: String.raw`$\frac{1}{(\sqrt x+1)(x+1)}\to\frac14$` },
];

export const WS = {
  code: "1.4",
  title: "Limites et continuité",
  bigideas: String.raw`$f$ est continue en $a$ quand $f(a)$ existe, $\lim_{x\to a}f(x)$ existe, et les deux sont égales. Une discontinuité non essentielle (un trou) a une limite et peut être réparée; un saut a des limites à gauche et à droite différentes; une discontinuité infinie est une asymptote verticale. Les lois des limites permettent de substituer partout où une fonction est continue; les formes $\frac00$ demandent de factoriser ou de rationaliser. Une fonction définie par parties est continue quand ses parties se rejoignent à chaque jonction.`,
  goals: ["Vérifier les trois conditions.", "Classer les discontinuités.", "Utiliser les lois des limites.", "Choisir des paramètres pour assurer la continuité."],
  curriculum: "A1.4, A1.5",
  vocab: [["Continue en a", "$f(a)=\\lim_{x\\to a}f(x)$"], ["Non essentielle", "un trou"], ["Par saut / infinie", "côtés différents / asymptote"]],
  hook: String.raw`Peux-tu tracer $y=\frac{x^2-4}{x-2}$ sans lever ton crayon? Quel point unique devrais-tu ajouter?`,
  concepts: [
    ["1. Trois discontinuités", String.raw`Trou, saut, asymptote.
${F({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x + 1, a: -4, b: -1.04 }, { f: (x) => x + 1, a: -0.96, b: 0.98 }, { f: () => 3, a: 1, b: 2.8 }, { f: (x) => 1 / (x - 3), a: 3.17, b: 6 }], points: [ho(-1, 0), ho(1, 2)], step: { x: 1, y: 1 } })}`],
    ["2. Lois des limites", String.raw`Sommes, produits, quotients (limite du dénominateur ≠ 0), puissances.`],
    ["3. Jonctions", String.raw`Valeur à gauche = valeur à droite = $f(a)$.`],
  ],
  tips: ["Une limite peut exister à une discontinuité.", "Vérifie les trois conditions.", "La loi du quotient exige un dénominateur non nul.", "Utilise la partie qui contient l'extrémité.", "Polynômes : continus partout."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
