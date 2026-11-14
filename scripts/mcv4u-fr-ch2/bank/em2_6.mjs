// 2.6 Problèmes de taux de variation — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  num(S`$C(x)=200+15x$ dollars. Quel est le coût marginal (dollars par article)?`, 15, "C′(x) = 15."),
  mc("Qu'estime le coût marginal C′(x)?", "le coût de production d'un article de plus", ["le coût total", "le coût fixe", "le coût moyen par article"], "C′(x) ≈ C(x + 1) − C(x)."),
  num(S`$R(x)=20x-0.1x^2$. Trouve $R'(50)$.`, 10, "20 − 0.2(50)."),
  tf("Modifier le coût fixe modifie le coût marginal.", false, "La dérivée d'une constante est 0."),
  num(S`À un certain niveau, $R'(x)=40$ et $C'(x)=25$ dollars par article. Quel est le profit marginal?`, 15, "P′ = R′ − C′."),
  num(S`$C(x)=100+2x+0.01x^2$. Trouve $C'(50)$.`, 3, "2 + 0.02(50)."),
  fill("Si C est en dollars et x est un nombre d'articles, C′(x) se mesure en dollars par ___.", ["article", "articles", "item", "items"], "Unités de sortie par unité d'entrée."),
  num(S`La population d'une ville est $P(t)=1000+50t$. À quel rythme croît-elle (habitants par année)?`, 50, "Taux constant."),
  num(S`La température d'un liquide est $T(t)=30-2t$ °C. Quel est son taux de variation (°C par min)?`, -2, "Pente −2."),
  num(S`Un cube a pour volume $V=s^3$. Trouve $\frac{dV}{ds}$ lorsque $s=3$.`, 27, "3s²."),
  num("Le revenu R(x) = 60x − x² est illustré. Pour combien d'articles le revenu est-il le plus élevé?", 30, "R′ = 60 − 2x = 0.", graph((x) => 60 * x - x * x, { xmin: 0, xmax: 60, ymin: 0, ymax: 1000 }, [P(30, 900)], { a: 0, b: 60, step: { x: 10, y: 100 } })),
  tf("Un taux de variation négatif signifie que la quantité diminue.", true, "Pente inférieure à zéro."),
  num(S`Une charge est $Q(t)=t^2+3t$ C. Trouve le courant $Q'(1)$ en ampères.`, 5, "2t + 3."),
  num(S`Trouve $\frac{dA}{dr}$ pour un disque, $A=\pi r^2$, lorsque $r=2$ (3 décimales).`, 12.566, "2πr = 4π.", null, 0.001),
  mc("T est en °C et t en minutes. Quelles sont les unités de dT/dt?", "°C par minute", ["°C", "minutes par °C", "°C · minutes"], "Sortie par entrée."),
  num(S`La demande est $p=30-0.5x$. Trouve le revenu marginal à $x=10$.`, 20, "R = 30x − 0.5x²; R′ = 30 − x."),
  num(S`$C(x)=50+x^2$. Trouve $C'(4)$.`, 8, "2x."),
  num(S`Une voiture a parcouru $d=t^3$ m après $t$ s. Trouve le module de sa vitesse à $t=2$.`, 12, "3t²."),
  num("Le coût C(x) = 40 + 2x + 0.2x² est illustré avec sa tangente en x = 10. Quel est le coût marginal à cet endroit?", 6, "2 + 0.4(10).", graph((x) => 40 + 2 * x + 0.2 * x * x, { xmin: 0, xmax: 20, ymin: 0, ymax: 160 }, [P(10, 80)], { a: 0, b: 20, more: [{ f: (x) => 80 + 6 * (x - 10), color: "green" }], step: { x: 2, y: 20 } })),
  num(S`$P(x)=-x^2+40x$. Trouve $P'(15)$.`, 10, "−2(15) + 40."),
];

export const M = [
  num(S`$C(x)=2000+40x-0.05x^2$. Trouve $C'(100)$.`, 30, "40 − 0.1(100)."),
  num(S`$C(x)=500+10x+0.1x^2$. Trouve le coût réel du 101e article, $C(101)-C(100)$.`, 30.1, "10 + 0.1(101² − 100²) = 10 + 20.1.", null, 0.0001),
  num(S`$R(x)=100x-0.25x^2$. Pour combien d'articles le revenu est-il le plus élevé?`, 200, "100 − 0.5x = 0."),
  num(S`$R(x)=50x$ et $C(x)=1000+10x+0.04x^2$. Pour combien d'articles le profit est-il le plus élevé?`, 500, "P′ = 40 − 0.08x = 0."),
  num(S`Une population est $P(t)=5000+300t-10t^2$. Quand cesse-t-elle de croître?`, 15, "300 − 20t = 0."),
  num(S`Une boisson refroidit selon $T(t)=25+\frac{72}{t+2}$ °C. Trouve $T'(4)$.`, -2, "−72/(t + 2)² en 4."),
  num(S`Un réservoir contient $V(t)=1000-20t+0.1t^2$ L. Trouve le taux de variation à $t=50$ min.`, -10, "−20 + 0.2(50)."),
  mc(S`$R'(300)<0$. Qu'est-ce que cela signifie?`, "vendre plus de 300 articles fait baisser le revenu total", ["le revenu est négatif", "chaque article fait perdre de l'argent", "les coûts augmentent"], "Le revenu marginal est négatif."),
  num(S`$C(x)=800+4x$. Trouve le coût moyen par article à $x=100$.`, 12, "C(100)/100 = 1200/100."),
  num(S`Une force est $F(r)=\frac{900}{r^2}$ N. Trouve $F'(3)$ (2 décimales).`, -66.67, "−1800/r³ en 3.", null, 0.01),
  num(S`Pour un disque, trouve $\frac{dA}{dr}$ lorsque $r=4$ (3 décimales).`, 25.133, "2πr = 8π.", null, 0.001),
  num(S`La demande est $p=90-0.3x$. Quel prix maximise le revenu?`, 45, "R′ = 90 − 0.6x = 0 en x = 150."),
  tf("Le revenu est maximal là où R′(x) = 0.", true, "Le sommet de la courbe du revenu."),
  num(S`Une charge est $Q(t)=4t^3-t$ C. Trouve le courant à $t=2$ s.`, 47, "12t² − 1."),
  num(S`Un réservoir contient $V(t)=200(5-t)^2$ L. Trouve $V'(3)$.`, -800, "−400(5 − t)."),
  num(S`$R(x)=25x$ et $C(x)=100+5x+0.5x^2$. Trouve le profit marginal à $x=10$.`, 10, "20 − x."),
  num(S`Une culture compte $N(t)=100+20t^2$ cellules. Trouve son taux de croissance à $t=3$ h.`, 120, "40t."),
  num("Le revenu R(x) = 80x − 0.4x² est illustré. Quel est le revenu maximal?", 4000, "R′ = 0 en x = 100.", graph((x) => 80 * x - 0.4 * x * x, { xmin: 0, xmax: 200, ymin: 0, ymax: 4500 }, [P(100, 4000)], { a: 0, b: 200, step: { x: 25, y: 500 } })),
  num(S`La température de l'air diminue avec l'altitude selon $T(h)=15-6.5h$ °C ($h$ en km). Trouve $\frac{dT}{dh}$.`, -6.5, "La pente de la droite.", null, 0.0001),
  num("Une population P(t) = 2000 + 100t − 5t² est illustrée. À quel moment croît-elle de 50 par année?", 5, "100 − 10t = 50.", graph((t) => 2000 + 100 * t - 5 * t * t, { xmin: 0, xmax: 20, ymin: 1800, ymax: 2600 }, [P(5, 2375)], { a: 0, b: 20, more: [{ f: (t) => 2375 + 50 * (t - 5), color: "green" }], step: { x: 2, y: 100 } })),
];
