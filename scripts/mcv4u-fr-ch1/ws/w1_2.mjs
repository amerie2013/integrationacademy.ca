// MCV4U-FR Fiche d'exercices 1.2 — Taux de variation à partir d'équations (édition de l'enseignant)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Une fonction du second degré", q: String.raw`Trouve le taux de variation instantané de $f(x)=2x^2+x$ en $x=3$.`,
    steps: [String.raw`$f(3+h)=2(9+6h+h^2)+3+h=21+13h+2h^2$; $f(3)=21$.`, String.raw`$\frac{13h+2h^2}{h}=13+2h\to13$.`], ans: "13" },
  { title: "Une fonction cubique", q: String.raw`Trouve le taux de variation instantané de $f(x)=x^3-x$ en $x=2$.`,
    steps: [String.raw`$f(2+h)=8+12h+6h^2+h^3-2-h$; $f(2)=6$.`, String.raw`$\frac{11h+6h^2+h^3}{h}=11+6h+h^2\to11$.`], ans: "11" },
  { title: "Les nombres avant l'algèbre", q: String.raw`Pour $f(x)=\sqrt x$ en $a=1$, évalue le quotient pour $h=0.1, 0.01, 0.001$.`,
    steps: [String.raw`$0.488$, $0.4988$, $0.49988$.`], ans: "les valeurs s'approchent de 0.5" },
  { title: "Une fonction inverse", q: String.raw`Trouve le taux de variation instantané de $f(x)=\frac5x$ en $x=-1$.`,
    steps: [String.raw`$\frac{\frac5{-1+h}+5}{h}=\frac{5+5(-1+h)}{h(-1+h)}=\frac{5}{h-1}$.`, String.raw`Quand $h\to0$ : $-5$.`], ans: "−5" },
  { title: "Une racine", q: String.raw`Trouve le taux de variation instantané de $f(x)=\sqrt{x+5}$ en $x=4$.`,
    steps: [String.raw`$\frac{\sqrt{9+h}-3}{h}\cdot\frac{\sqrt{9+h}+3}{\sqrt{9+h}+3}=\frac1{\sqrt{9+h}+3}$.`, String.raw`Quand $h\to0$ : $\frac16$.`], ans: String.raw`$\frac16$` },
  { title: "Une vitesse", q: String.raw`La position d'un objet est $s(t)=t^2-6t$ m. Trouve sa vitesse à $t=5$.`,
    steps: [String.raw`$\frac{(5+h)^2-6(5+h)-(-5)}{h}=\frac{4h+h^2}{h}=4+h\to4$.`], ans: "4 m/s" },
  { title: "Tangente", q: String.raw`Trouve la tangente à $f(x)=x^2-x$ en $x=3$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 14 }, curves: [{ f: (x) => x * x - x }, { f: (x) => 5 * x - 9, color: "green" }], points: [pt(3, 6)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Taux : $\frac{(3+h)^2-(3+h)-6}{h}=5+h\to5$.`, String.raw`$y-6=5(x-3)$.`], ans: String.raw`$y=5x-9$` },
  { title: "Un point quelconque", q: String.raw`Pour $f(x)=3x^2$, trouve le taux en $x=a$ et évalue-le en $a=-2$.`,
    steps: [String.raw`$\frac{3(a+h)^2-3a^2}{h}=6a+3h\to6a$.`], ans: String.raw`$6a$; $-12$` },
  { title: "Une tangente horizontale", q: String.raw`Où la tangente à $f(x)=x^2+8x$ est-elle horizontale?`,
    fig: F({ view: { xmin: -9, xmax: 1, ymin: -18, ymax: 4 }, curves: [{ f: (x) => x * x + 8 * x }, { f: () => -16, color: "green" }], points: [pt(-4, -16)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Taux en $a$ : $2a+8$. $2a+8=0\Rightarrow a=-4$.`], ans: "(−4, −16)" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Évalue $\frac{f(2+h)-f(2)}{h}$ pour $f(x)=x^2$ et $h=0.5$.`, recap: "Quotient.", ans: "4.5" },
  { level: 1, q: String.raw`Indique le taux de variation instantané de $f(x)=7x+2$ en tout $x$.`, recap: "Affine.", ans: "7" },
  { level: 1, q: String.raw`Le taux de $x^2$ en $x=a$ est $2a$. Trouve-le en $a=-3$.`, recap: "Évaluer.", ans: "−6" },
  { level: 2, q: String.raw`Trouve le taux de variation instantané de $f(x)=4x^2-3$ en $x=1$.`, recap: "Second degré.", ans: "8" },
  { level: 2, q: String.raw`Trouve le taux de variation instantané de $f(x)=x^3$ en $x=-1$.`, recap: "Cubique.", ans: "3" },
  { level: 2, q: String.raw`Trouve le taux de variation instantané de $f(x)=\frac1x$ en $x=2$.`, recap: "Inverse.", ans: String.raw`$-\frac14$` },
  { level: 2, q: String.raw`Trouve le taux de variation instantané de $f(x)=\sqrt x$ en $x=16$.`, recap: "Racine.", ans: String.raw`$\frac18$` },
  { level: 2, q: String.raw`Trouve la tangente à $y=2x^2$ en $x=1$ et trace-la.`, recap: "Tangente.", ans: String.raw`$y=4x-2$`, fig: gridT({ xmin: -2, xmax: 3, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: String.raw`Le taux de variation de $f(x)=x^2+bx$ en $x=2$ est 7. Trouve $b$.`, recap: "Coefficient inconnu.", ans: "b = 3" },
  { level: 3, space: 5, q: String.raw`Trouve le taux de variation instantané de $f(x)=\frac1{2x+1}$ en $x=0$.`, recap: "Rationnelle.", ans: String.raw`$\frac{-2}{1+2h}\to-2$` },
  { level: 3, space: 5, q: String.raw`Pour $f(x)=x^4$ en $a=1$, calcule le quotient pour $h=0.1, 0.01, 0.001$, puis simplifie-le. Quelle méthode prouve le taux exact?`, recap: "Nombres ou algèbre.", ans: String.raw`4.641, 4.0604, 4.006; $4+6h+4h^2+h^3\to4$` },
  { level: 3, space: 5, q: String.raw`Trouve tous les points de $y=x^3$ où la tangente a une pente de 12.`, recap: "Taux en un point quelconque.", ans: "(2, 8) et (−2, −8)" },
  { level: 3, space: 5, q: String.raw`La hauteur d'une balle est $h(t)=-5t^2+30t+2$ m. Trouve sa vitesse à $t=a$, le moment où elle cesse de monter et sa hauteur maximale. Esquisse $h$.`, recap: "Vitesse nulle au sommet.", ans: String.raw`$30-10a$; $t=3$; 47 m`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: 0, ymax: 50 }, { x: 1, y: 5 }) },
];

export const WS = {
  code: "1.2",
  title: "Taux de variation à partir d'équations",
  bigideas: String.raw`Le quotient de différence $\frac{f(a+h)-f(a)}{h}$ est la pente de la sécante de $a$ à $a+h$. En remplaçant $h$ par de petites valeurs, on estime le taux instantané; en simplifiant jusqu'à ce que $h$ s'élimine, puis en faisant tendre $h$ vers 0, on obtient le taux exact $\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$. Développe les polynômes, réduis les fonctions rationnelles au même dénominateur et rationalise les racines. La tangente a pour équation $y-f(a)=m(x-a)$.`,
  goals: ["Écrire le quotient de différence.", "Estimer à l'aide d'un petit h.", "Simplifier et prendre la limite.", "Écrire l'équation de tangentes."],
  curriculum: "A1.3, A1.5, A1.6",
  vocab: [["Quotient de différence", "$\\frac{f(a+h)-f(a)}{h}$"], ["Rationaliser", "multiplier par le conjugué"], ["Tangente", "$y-f(a)=m(x-a)$"]],
  hook: String.raw`Remplace $h$ par 0 dans $\frac{(2+h)^2-4}{h}$. Qu'est-ce qui ne va pas? Maintenant, développe d'abord.`,
  concepts: [
    ["1. Le quotient comme sécante", String.raw`Pente de $(a,f(a))$ à $(a+h,f(a+h))$.
${F({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x * x }, { f: (x) => 1 + 3.5 * (x - 1), color: "amber" }], points: [pt(1, 1, "a"), pt(2.5, 6.25, "a+h")], step: { x: 0.5, y: 1 } })}`],
    ["2. Simplifier", String.raw`Élimine le facteur $h$, puis remplace $h$ par 0.`],
    ["3. Outils", String.raw`Développer · réduire au même dénominateur · conjugué.`],
  ],
  tips: ["f(a + h) : remplace chaque x.", "Mets f(a) entre parenthèses quand tu soustrais.", "N'élimine h que lorsqu'il est un facteur.", "Ne pose pas h = 0 trop tôt.", "La tangente a aussi besoin du point."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
