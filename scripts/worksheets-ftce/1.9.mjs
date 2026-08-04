const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.9",
  title: "Ratios, Proportions & Variation",
  intro: "Proportional reasoning and the three variation models — direct, inverse, and joint — that model so many applied relationships.",
  lesson: [
    ["Ratios & proportions", R`A proportion sets two ratios equal, $\dfrac{a}{b}=\dfrac{c}{d}$, and is solved by cross-multiplying ($ad=bc$).`],
    ["Direct & inverse variation", R`Direct: $y=kx$ ($y$ grows with $x$). Inverse: $y=\dfrac{k}{x}$ ($y$ shrinks as $x$ grows). Find $k$ from a given pair, then use it.`],
    ["Joint variation", R`$y$ varies jointly as several quantities means it is proportional to their product, e.g. $z=kxy$ or $z=kxy^2$.`],
  ],
  examples: [
    ["Example 1: Proportion", R`Solve $\dfrac{3}{4}=\dfrac{x}{20}$.`, R`Cross-multiply: $4x=60\Rightarrow x=15$.`],
    ["Example 2: Direct", R`$y$ varies directly as $x$, and $y=12$ when $x=3$. Find $y$ when $x=7$.`, R`$k=\tfrac{12}{3}=4$, so $y=4x=28$.`],
    ["Example 3: Inverse", R`$y$ varies inversely as $x$, and $y=6$ when $x=4$. Find $y$ when $x=8$.`, R`$k=xy=24$, so $y=\tfrac{24}{8}=3$.`],
    ["Example 4: Joint", R`$z$ varies jointly as $x$ and $y^2$; $z=96$ when $x=3,y=2$. Find $z$ when $x=2,y=5$.`, R`$96=k(3)(4)\Rightarrow k=8$; $z=8(2)(25)=400$.`],
    ["Example 5: Applied proportion", R`A map scale is $1\,\text{cm}:15\,\text{km}$. How far apart are cities $8\,\text{cm}$ apart on the map?`, R`$8\times15=120$ km.`],
  ],
  questions: [
    ["Problem 1", R`Solve $\dfrac{5}{8}=\dfrac{x}{40}$.`, R`$x=25$`],
    ["Problem 2", R`$y=kx$ with $y=10$ at $x=2$. Find $y$ at $x=5$.`, R`$25$`],
    ["Problem 3", R`$y=\tfrac{k}{x}$ with $y=9$ at $x=2$. Find $y$ at $x=6$.`, R`$3$`],
    ["Problem 4", R`$z=kxy$ with $z=30$ at $x=2,y=3$. Find $z$ at $x=4,y=5$.`, R`$100$`],
    ["Problem 5", R`Write '$y$ varies inversely as the square of $x$'.`, R`$y=\dfrac{k}{x^2}$`],
    ["Problem 6", R`Solve $\dfrac{2}{x}=\dfrac{6}{9}$.`, R`$x=3$`],
    ["Problem 7", R`In direct variation, if $x$ doubles, what happens to $y$?`, R`$y$ doubles`],
    ["Problem 8", R`In inverse variation, if $x$ doubles, what happens to $y$?`, R`$y$ is halved`],
  ],
};
