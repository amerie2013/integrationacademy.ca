// MCV4U-FR Fiche 2.1 — Dérivée d'une fonction polynomiale (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Terme par terme", q: S`Dérive $f(x)=2x^6-5x^3+x-9$.`,
    steps: [S`Règle de la puissance sur chaque terme : $12x^5-15x^2+1$; la constante donne 0.`], ans: S`$f'(x)=12x^5-15x^2+1$` },
  { title: "Exposants négatifs", q: S`Dérive $y=\frac4{x^3}-\frac1x$.`,
    steps: [S`Réécris : $y=4x^{-3}-x^{-1}$.`, S`$y'=-12x^{-4}+x^{-2}$.`], ans: S`$y'=-\frac{12}{x^4}+\frac1{x^2}$` },
  { title: "Une racine cubique", q: S`Dérive $y=6\sqrt[3]{x}$.`,
    steps: [S`$y=6x^{1/3}\Rightarrow y'=6\cdot\frac13x^{-2/3}$.`], ans: S`$y'=\frac{2}{x^{2/3}}$` },
  { title: "Développer d'abord", q: S`Dérive $y=(x^2-3)^2$ en développant.`,
    steps: [S`$y=x^4-6x^2+9$.`, S`$y'=4x^3-12x$.`], ans: S`$y'=4x^3-12x$` },
  { title: "Diviser d'abord", q: S`Dérive $y=\frac{2x^3+x^2-5}{x^2}$.`,
    steps: [S`Sépare : $y=2x+1-5x^{-2}$.`, S`$y'=2+10x^{-3}$.`], ans: S`$y'=2+\frac{10}{x^3}$` },
  { title: "Évaluer une pente", q: S`Trouve la pente de $f(x)=x^4-2x^2$ en $x=-2$.`,
    steps: [S`$f'(x)=4x^3-4x$.`, S`$f'(-2)=-32+8$.`], ans: "−24" },
  { title: "Une tangente", q: S`Trouve la tangente à $y=x^3-4x$ en $x=1$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 4 * x }, { f: (x) => -x - 2, color: "green" }], points: [pt(1, -3)], step: { x: 1, y: 1 } }),
    steps: [S`$y(1)=-3$; $y'=3x^2-4\Rightarrow y'(1)=-1$.`, S`$y+3=-(x-1)$.`], ans: S`$y=-x-2$` },
  { title: "Tangentes horizontales", q: S`Trouve les points où $y=x^3-3x^2-9x+5$ a une tangente horizontale.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -24, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 5 }], points: [pt(-1, 10), pt(3, -22)], step: { x: 1, y: 4 } }),
    steps: [S`$y'=3x^2-6x-9=3(x-3)(x+1)$.`, S`$x=-1$ : $y=10$; $x=3$ : $y=-22$.`], ans: "(−1, 10) et (3, −22)" },
  { title: "Une normale", q: S`La normale est perpendiculaire à la tangente. Trouve la normale à $y=\sqrt x$ en $x=4$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 6 }, { f: (x) => 0.25 * x + 1, color: "amber" }, { f: (x) => -4 * x + 18, color: "green" }], points: [pt(4, 2)], step: { x: 1, y: 1 } }),
    steps: [S`Pente de la tangente $\frac1{2\sqrt4}=\frac14$, donc la pente de la normale est $-4$.`, S`$y-2=-4(x-4)$.`], ans: S`$y=-4x+18$` },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=9x^4$.`, recap: "Règle de la puissance.", ans: S`$36x^3$` },
  { level: 1, q: S`Dérive $y=x^2-7x+3$.`, recap: "Terme par terme.", ans: S`$2x-7$` },
  { level: 1, q: S`Dérive $f(x)=x^{-5}$.`, recap: "Puissance négative.", ans: S`$-5x^{-6}$` },
  { level: 2, q: S`Pour $f(x)=3x^4-2x^3+x$, trouve $f'(1)$.`, recap: "Dérive, puis substitue.", ans: "7" },
  { level: 2, q: S`Dérive $y=5\sqrt x-\frac2x$.`, recap: "Réécris sous forme de puissances.", ans: S`$\frac{5}{2\sqrt x}+\frac2{x^2}$` },
  { level: 2, q: S`Dérive $y=(3x+2)(x-4)$ en développant d'abord.`, recap: "Développe.", ans: S`$6x-10$` },
  { level: 2, q: S`Trouve la tangente à $y=2x^2-x+1$ en $x=-1$ et trace-la.`, recap: "Point et pente.", ans: S`$y=-5x-1$`, fig: gridT({ xmin: -3, xmax: 2, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Trouve les points de $y=x^3-6x$ où la tangente a une pente de 6.`, recap: "Résous y′ = 6.", ans: "(2, −4) et (−2, 4)" },
  { level: 3, space: 5, q: S`Trouve $a$, $b$ et $c$ pour que $y=ax^2+bx+c$ passe par $(0,3)$, ait une pente de 2 en $x=0$ et une pente de $-6$ en $x=2$.`, recap: "Trois conditions, trois inconnues.", ans: S`$y=-2x^2+2x+3$` },
  { level: 3, space: 5, q: S`La tangente à $y=x^3$ en $x=1$ recoupe la courbe. Trouve le second point et esquisse les deux graphiques.`, recap: "Résous courbe = tangente; x = 1 est une racine double.", ans: S`tangente $y=3x-2$; $(x-1)^2(x+2)=0$; point $(-2,-8)$`, fig: gridT({ xmin: -3, xmax: 2, ymin: -9, ymax: 3 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Explique pourquoi aucune tangente à $y=x^3+2x$ n'a une pente de 1. Quelle est la plus petite pente possible?`, recap: "Examine le signe de y′ − 1.", ans: S`$y'=3x^2+2\ge2$; plus petite pente 2 (en $x=0$)` },
  { level: 3, space: 5, q: S`Trouve les équations des droites passant par l'origine qui sont tangentes à $y=x^2+4$.`, recap: "La tangente en un point quelconque a doit passer par (0, 0).", ans: S`$a=\pm2$ : $y=4x$ et $y=-4x$` },
  { level: 3, space: 5, q: S`L'aire d'un disque est $A=\pi r^2$. Trouve $\frac{dA}{dr}$ lorsque $r=5$ cm, donne ses unités et explique pourquoi elle est égale à la circonférence.`, recap: "Un mince anneau de largeur Δr a une aire ≈ circonférence × Δr.", ans: S`$10\pi\approx31.42$ cm² par cm; $2\pi r$ est la circonférence` },
];

export const WS = {
  code: "2.1",
  title: "Dérivée d'une fonction polynomiale",
  bigideas: S`Les règles de dérivation remplacent la définition par une limite. Règle de la constante : $\frac{d}{dx}c=0$. Règle de la puissance : $\frac{d}{dx}x^n=nx^{n-1}$ pour tout $n$ réel. Règles du multiple constant et de la somme : dérive terme par terme en gardant les coefficients. Il faut d'abord réécrire les racines et les inverses sous forme de puissances; les produits et les quotients de termes simples peuvent être développés ou divisés d'abord. Utilise $f'(a)$ pour la pente des tangentes; la normale a pour pente $-\frac1{f'(a)}$.`,
  goals: ["Appliquer les règles de la constante, de la puissance, du multiple constant et de la somme.", "Réécrire les racines et les inverses sous forme de puissances.", "Trouver des tangentes et des normales.", "Trouver où une tangente a une pente donnée."],
  curriculum: "A2.2, A2.3, A2.4",
  vocab: [["Règle de la puissance", "$\\frac{d}{dx}x^n=nx^{n-1}$"], ["Notation de Leibniz", "$\\frac{dy}{dx}$"], ["Normale", "perpendiculaire à la tangente"]],
  hook: S`À l'aide de la définition de la dérivée, $(x^2)'=2x$, $(x^3)'=3x^2$ et $(x^4)'=4x^3$. Prédis $(x^{10})'$ et $(x^{-1})'$ avant la leçon.`,
  concepts: [
    ["1. La règle de la puissance", S`Abaisse l'exposant devant, puis soustrais 1. Le graphique de $x^3$ et de sa dérivée $3x^2$ :
${F({ view: { xmin: -2, xmax: 2, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3 }, { f: (x) => 3 * x * x, color: "blue" }], step: { x: 1, y: 1 } })}`],
    ["2. Réécrire d'abord", S`$\sqrt x=x^{1/2}$, $\frac1{x^2}=x^{-2}$, $\frac{x^3+1}{x}=x^2+x^{-1}$.`],
    ["3. Tangente et normale", S`Tangente : $y-f(a)=f'(a)(x-a)$. Normale : pente $-\frac1{f'(a)}$.`],
  ],
  tips: ["La dérivée d'une constante est 0.", "Réécris les racines et les inverses avant de dériver.", "(uv)′ n'est pas u′v′ : développe ou attends la leçon 2.2.", "Puissances négatives : l'exposant diminue, p. ex. −2 → −3.", "La tangente exige un point en plus d'une pente."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
