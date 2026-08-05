// Shared question data for the FTCE practice tests (Unit 15). Each item is
// [difficulty, prompt, correctAnswer, [distractors...]]. Consumed BOTH by the
// bank (scripts/bank-ftce/u15.mjs, via mcv which shuffles) and by the printable
// worksheet modules (scripts/worksheets-ftce/15.1.mjs, 15.2.mjs). Authored once.
// Answers verified by hand; questions span all nine mathematics competencies.
const R = String.raw;

// ── 15.1 Diagnostic Test — 40 questions ──────────────────────
export const DIAG = [
  // Algebra
  ["easy", R`Factor $x^2-9$.`, R`$(x-3)(x+3)$`, [R`$(x-3)^2$`, R`$(x+3)^2$`, R`$(x-9)(x+1)$`]],
  ["easy", R`Solve $3x-7=2x+5$.`, R`$12$`, [R`$10$`, R`$-2$`, R`$6$`]],
  ["medium", R`Solve $x^2-5x+6=0$.`, R`$x=2,3$`, [R`$x=-2,-3$`, R`$x=1,6$`, R`$x=2,-3$`]],
  ["easy", R`Find the slope through $(1,2)$ and $(5,10)$.`, R`$2$`, [R`$4$`, R`$\tfrac12$`, R`$8$`]],
  ["medium", R`Simplify $\dfrac{x^2-4}{x^2-x-6}$.`, R`$\dfrac{x-2}{x-3}$`, [R`$\dfrac{x+2}{x+3}$`, R`$\dfrac{x-2}{x+3}$`, R`$\dfrac{x+2}{x-3}$`]],
  ["medium", R`Solve $|x-3|=5$.`, R`$x=8$ or $x=-2$`, [R`$x=8$ or $x=2$`, R`$x=-8$ or $x=2$`, R`$x=2$`]],
  ["medium", R`Find the discriminant of $x^2+x+1$.`, R`$-3$`, [R`$1$`, R`$5$`, R`$-1$`]],
  ["medium", R`Solve $\begin{cases}x+y=7\\x-y=1\end{cases}$.`, R`$(4,3)$`, [R`$(3,4)$`, R`$(5,2)$`, R`$(4,4)$`]],
  // Functions
  ["medium", R`For $f(x)=7x^2+3$, $g(x)=2x-9$, find $g(f(2))$.`, R`$53$`, [R`$31$`, R`$44$`, R`$62$`]],
  ["easy", R`Domain of $\sqrt{x-5}$?`, R`$x\ge5$`, [R`$x\le5$`, R`$x>5$`, R`all reals`]],
  ["medium", R`Inverse of $f(x)=2x+3$?`, R`$\dfrac{x-3}{2}$`, [R`$\dfrac{x+3}{2}$`, R`$2x-3$`, R`$\dfrac{1}{2x+3}$`]],
  ["easy", R`Evaluate $\log_2 16$.`, R`$4$`, [R`$2$`, R`$8$`, R`$16$`]],
  // Geometry
  ["easy", R`Two angles of a triangle are $50^\circ$ and $60^\circ$. The third?`, R`$70^\circ$`, [R`$60^\circ$`, R`$80^\circ$`, R`$90^\circ$`]],
  ["easy", R`Area of a circle with radius $4$?`, R`$16\pi$`, [R`$8\pi$`, R`$4\pi$`, R`$16$`]],
  ["easy", R`Hypotenuse of a right triangle with legs $6,8$?`, R`$10$`, [R`$12$`, R`$14$`, R`$\sqrt{48}$`]],
  ["medium", R`Each interior angle of a regular hexagon?`, R`$120^\circ$`, [R`$108^\circ$`, R`$135^\circ$`, R`$144^\circ$`]],
  ["medium", R`Distance between $(0,0)$ and $(5,12)$?`, R`$13$`, [R`$17$`, R`$7$`, R`$\sqrt{17}$`]],
  ["medium", R`Volume of a cylinder with $r=3$, $h=10$?`, R`$90\pi$`, [R`$30\pi$`, R`$300\pi$`, R`$9\pi$`]],
  ["medium", R`Vertex of $y=x^2-4x+3$?`, R`$(2,-1)$`, [R`$(-2,-1)$`, R`$(2,3)$`, R`$(4,3)$`]],
  ["medium", R`An inscribed angle intercepts an $80^\circ$ arc. The angle?`, R`$40^\circ$`, [R`$80^\circ$`, R`$160^\circ$`, R`$20^\circ$`]],
  // Trigonometry
  ["easy", R`Evaluate $\sin 30^\circ$.`, R`$\tfrac12$`, [R`$\tfrac{\sqrt3}{2}$`, R`$\tfrac{\sqrt2}{2}$`, R`$1$`]],
  ["medium", R`Convert $60^\circ$ to radians.`, R`$\tfrac{\pi}{3}$`, [R`$\tfrac{\pi}{6}$`, R`$\tfrac{\pi}{2}$`, R`$\tfrac{\pi}{4}$`]],
  ["easy", R`Simplify $\sin^2\theta+\cos^2\theta$.`, R`$1$`, [R`$0$`, R`$2$`, R`$\tan^2\theta$`]],
  ["medium", R`Period of $y=\sin(2x)$?`, R`$\pi$`, [R`$2\pi$`, R`$\tfrac{\pi}{2}$`, R`$4\pi$`]],
  // Statistics
  ["medium", R`Median of $3,8,8,10,20$?`, R`$8$`, [R`$10$`, R`$9$`, R`$8.5$`]],
  ["easy", R`Mean of $4,8,6,10,12$?`, R`$8$`, [R`$10$`, R`$7$`, R`$40$`]],
  ["easy", R`Range of $3,7,2,9,5$?`, R`$7$`, [R`$9$`, R`$5$`, R`$11$`]],
  ["medium", R`The correlation coefficient $r$ ranges from $-1$ to`, R`$1$`, [R`$0$`, R`$100$`, R`$\infty$`]],
  // Probability
  ["easy", R`$P(\text{rolling a }4)$ on a fair die?`, R`$\tfrac16$`, [R`$\tfrac14$`, R`$\tfrac13$`, R`$\tfrac12$`]],
  ["medium", R`Evaluate $C(5,2)$.`, R`$10$`, [R`$20$`, R`$15$`, R`$25$`]],
  ["medium", R`Two coins: $P(\text{two heads})$?`, R`$\tfrac14$`, [R`$\tfrac12$`, R`$\tfrac13$`, R`$1$`]],
  // Discrete
  ["easy", R`Common ratio of $2,6,18,\ldots$?`, R`$3$`, [R`$2$`, R`$4$`, R`$6$`]],
  ["medium", R`$\det\begin{bmatrix}1&2\\3&4\end{bmatrix}$?`, R`$-2$`, [R`$2$`, R`$10$`, R`$-10$`]],
  // Calculus
  ["medium", R`$\lim_{x\to2}\dfrac{x^2-4}{x-2}$?`, R`$4$`, [R`$0$`, R`$2$`, R`$\infty$`]],
  ["easy", R`$\dfrac{d}{dx}x^5$?`, R`$5x^4$`, [R`$4x^5$`, R`$5x^5$`, R`$x^4$`]],
  ["easy", R`$\dfrac{d}{dx}\sin x$?`, R`$\cos x$`, [R`$-\cos x$`, R`$-\sin x$`, R`$\sec^2 x$`]],
  ["medium", R`$\displaystyle\int x^2\,dx$?`, R`$\tfrac{x^3}{3}+C$`, [R`$2x+C$`, R`$\tfrac{x^3}{2}+C$`, R`$3x^2+C$`]],
  ["medium", R`Critical point of $f(x)=x^2-6x$?`, R`$x=3$`, [R`$x=6$`, R`$x=-3$`, R`$x=0$`]],
  // Number Sense
  ["easy", R`Simplify $i^2$.`, R`$-1$`, [R`$1$`, R`$i$`, R`$-i$`]],
  ["easy", R`Classify $\sqrt2$.`, R`irrational`, [R`rational`, R`integer`, R`natural`]],
];

// ── 15.2 Full-Length Practice Test — 80 questions ────────────
export const FULL = [
  // Algebra (15)
  ["easy", R`Factor $x^2-16$.`, R`$(x-4)(x+4)$`, [R`$(x-4)^2$`, R`$(x+4)^2$`, R`$(x-8)(x+2)$`]],
  ["medium", R`Factor $2x^2+5x-3$.`, R`$(2x-1)(x+3)$`, [R`$(2x+1)(x-3)$`, R`$(2x-3)(x+1)$`, R`$(x-1)(2x+3)$`]],
  ["easy", R`Solve $5x+3=2x-9$.`, R`$-4$`, [R`$4$`, R`$-6$`, R`$2$`]],
  ["easy", R`Solve $x^2=49$.`, R`$\pm7$`, [R`$7$`, R`$\pm49$`, R`$\pm\sqrt7$`]],
  ["medium", R`Slope of $5x-2y=8$?`, R`$\tfrac52$`, [R`$-\tfrac52$`, R`$5$`, R`$\tfrac25$`]],
  ["medium", R`Simplify $\dfrac{x^2-1}{x^2+2x+1}$.`, R`$\dfrac{x-1}{x+1}$`, [R`$\dfrac{x+1}{x-1}$`, R`$x-1$`, R`$1$`]],
  ["easy", R`Solve $2x-1<7$.`, R`$x<4$`, [R`$x>4$`, R`$x<3$`, R`$x<8$`]],
  ["medium", R`Factor $x^3-27$.`, R`$(x-3)(x^2+3x+9)$`, [R`$(x-3)(x^2-3x+9)$`, R`$(x-3)^3$`, R`$(x-3)(x^2+9)$`]],
  ["medium", R`Solve $\begin{cases}2x+3y=7\\3x-y=5\end{cases}$.`, R`$(2,1)$`, [R`$(1,2)$`, R`$(2,-1)$`, R`$(3,1)$`]],
  ["hard", R`Solve $x^2+4x-1=0$.`, R`$-2\pm\sqrt5$`, [R`$2\pm\sqrt5$`, R`$-2\pm\sqrt3$`, R`$-4\pm\sqrt5$`]],
  ["medium", R`$y$ varies directly as $x$; $y=12$ at $x=3$. Find $y$ at $x=7$.`, R`$28$`, [R`$21$`, R`$84$`, R`$4$`]],
  ["medium", R`Add $\dfrac1x+\dfrac1{x+1}$.`, R`$\dfrac{2x+1}{x(x+1)}$`, [R`$\dfrac{2}{2x+1}$`, R`$\dfrac{1}{2x+1}$`, R`$\dfrac{2x+1}{x^2+x}$`]],
  ["easy", R`Solve $\sqrt{x+3}=4$.`, R`$13$`, [R`$16$`, R`$1$`, R`$19$`]],
  ["medium", R`Sum of the roots of $x^2-5x+6=0$?`, R`$5$`, [R`$6$`, R`$-5$`, R`$-6$`]],
  ["medium", R`Classify $\begin{cases}2x+3y=6\\4x+6y=7\end{cases}$.`, R`inconsistent`, [R`dependent`, R`one solution`, R`homogeneous`]],
  // Functions (8)
  ["easy", R`Range of $f(x)=x^2$?`, R`$y\ge0$`, [R`$y\le0$`, R`all reals`, R`$y>0$`]],
  ["medium", R`$(f\circ g)(x)$ for $f(x)=x^2$, $g(x)=x+3$?`, R`$(x+3)^2$`, [R`$x^2+3$`, R`$x^2+9$`, R`$2x+3$`]],
  ["easy", R`Evaluate $\log_5 125$.`, R`$3$`, [R`$2$`, R`$5$`, R`$25$`]],
  ["medium", R`Is $f(x)=x^3$ even, odd, or neither?`, R`odd`, [R`even`, R`neither`, R`both`]],
  ["medium", R`Vertical asymptote of $\dfrac{1}{x-3}$?`, R`$x=3$`, [R`$x=-3$`, R`$y=3$`, R`$x=0$`]],
  ["easy", R`Zeros of $f(x)=x^2-9$?`, R`$\pm3$`, [R`$9$`, R`$3$`, R`$\pm9$`]],
  ["easy", R`Domain of $\dfrac{1}{x+2}$?`, R`$x\ne-2$`, [R`$x\ne2$`, R`all reals`, R`$x>0$`]],
  ["easy", R`Period of $\cos x$?`, R`$2\pi$`, [R`$\pi$`, R`$\tfrac{\pi}{2}$`, R`$4\pi$`]],
  // Geometry (15)
  ["easy", R`Complement of $35^\circ$?`, R`$55^\circ$`, [R`$65^\circ$`, R`$45^\circ$`, R`$145^\circ$`]],
  ["easy", R`Supplement of $110^\circ$?`, R`$70^\circ$`, [R`$80^\circ$`, R`$90^\circ$`, R`$20^\circ$`]],
  ["medium", R`Base angle of an isosceles triangle with vertex $40^\circ$?`, R`$70^\circ$`, [R`$40^\circ$`, R`$100^\circ$`, R`$55^\circ$`]],
  ["medium", R`Similar triangles $3,4,5\sim6,8,x$. Find $x$.`, R`$10$`, [R`$7$`, R`$9$`, R`$12$`]],
  ["easy", R`Sum of the interior angles of a pentagon?`, R`$540^\circ$`, [R`$360^\circ$`, R`$720^\circ$`, R`$450^\circ$`]],
  ["medium", R`Area of a trapezoid with bases $8,14$ and height $6$?`, R`$66$`, [R`$44$`, R`$88$`, R`$33$`]],
  ["medium", R`Diagonal of a $5\times12$ rectangle?`, R`$13$`, [R`$17$`, R`$\sqrt{119}$`, R`$15$`]],
  ["easy", R`Midpoint of $(2,4)$ and $(6,10)$?`, R`$(4,7)$`, [R`$(8,14)$`, R`$(4,6)$`, R`$(3,5)$`]],
  ["easy", R`Circumference of a circle with radius $5$?`, R`$10\pi$`, [R`$5\pi$`, R`$25\pi$`, R`$20\pi$`]],
  ["medium", R`Volume of a sphere with radius $3$?`, R`$36\pi$`, [R`$27\pi$`, R`$12\pi$`, R`$9\pi$`]],
  ["medium", R`Center of $(x-2)^2+(y+3)^2=25$?`, R`$(2,-3)$`, [R`$(-2,3)$`, R`$(2,3)$`, R`$(-2,-3)$`]],
  ["hard", R`Asymptotes of $\dfrac{x^2}{4}-\dfrac{y^2}{9}=1$?`, R`$y=\pm\tfrac32 x$`, [R`$y=\pm\tfrac23 x$`, R`$y=\pm\tfrac94 x$`, R`$y=\pm x$`]],
  ["medium", R`Slant height of a cone with $r=6$, $h=8$?`, R`$10$`, [R`$12$`, R`$14$`, R`$\sqrt{28}$`]],
  ["easy", R`Vertical angle of $72^\circ$?`, R`$72^\circ$`, [R`$18^\circ$`, R`$108^\circ$`, R`$36^\circ$`]],
  ["easy", R`Surface area of a cube with edge $4$?`, R`$96$`, [R`$64$`, R`$16$`, R`$24$`]],
  // Trigonometry (8)
  ["easy", R`Evaluate $\cos 30^\circ$.`, R`$\tfrac{\sqrt3}{2}$`, [R`$\tfrac12$`, R`$\tfrac{\sqrt2}{2}$`, R`$1$`]],
  ["easy", R`Evaluate $\tan 45^\circ$.`, R`$1$`, [R`$0$`, R`$\sqrt3$`, R`$\tfrac{\sqrt3}{3}$`]],
  ["medium", R`Reference angle of $210^\circ$?`, R`$30^\circ$`, [R`$60^\circ$`, R`$45^\circ$`, R`$210^\circ$`]],
  ["medium", R`Simplify $1+\tan^2\theta$.`, R`$\sec^2\theta$`, [R`$\csc^2\theta$`, R`$1$`, R`$\cot^2\theta$`]],
  ["medium", R`If $\sin A=\tfrac35$, $\cos A=\tfrac45$, find $\sin 2A$.`, R`$\tfrac{24}{25}$`, [R`$\tfrac{7}{25}$`, R`$\tfrac{12}{25}$`, R`$\tfrac65$`]],
  ["medium", R`Evaluate $\arcsin\tfrac12$.`, R`$\tfrac{\pi}{6}$`, [R`$\tfrac{\pi}{3}$`, R`$\tfrac{\pi}{4}$`, R`$\tfrac{\pi}{2}$`]],
  ["easy", R`Amplitude of $y=3\sin(2x)$?`, R`$3$`, [R`$2$`, R`$6$`, R`$1$`]],
  ["hard", R`Exact value of $\cos 75^\circ$?`, R`$\tfrac{\sqrt6-\sqrt2}{4}$`, [R`$\tfrac{\sqrt6+\sqrt2}{4}$`, R`$\tfrac{\sqrt2-\sqrt6}{4}$`, R`$\tfrac{\sqrt3-1}{2}$`]],
  // Statistics (8)
  ["medium", R`Mode of $4,4,7,9,9,9$?`, R`$9$`, [R`$4$`, R`$7$`, R`$6$`]],
  ["easy", R`Median of $2,4,6,8$?`, R`$5$`, [R`$4$`, R`$6$`, R`$3$`]],
  ["easy", R`Standard deviation is the square root of the`, R`variance`, [R`range`, R`mean`, R`mode`]],
  ["medium", R`z-score of $80$ with mean $70$, SD $5$?`, R`$2$`, [R`$1$`, R`$-2$`, R`$10$`]],
  ["easy", R`$\text{IQR}=Q_3-$`, R`$Q_1$`, [R`$Q_2$`, R`min`, R`median`]],
  ["medium", R`Best-fit $y=2x+3$; predict $y$ at $x=5$.`, R`$13$`, [R`$10$`, R`$8$`, R`$25$`]],
  ["easy", R`Which display shows a two-variable relationship?`, R`scatterplot`, [R`pie chart`, R`bar chart`, R`stem-and-leaf`]],
  ["medium", R`About what percent of a normal distribution is within $1$ SD of the mean?`, R`$68\%$`, [R`$95\%$`, R`$50\%$`, R`$99.7\%$`]],
  // Probability (6)
  ["easy", R`$P(\text{not }6)$ on a die?`, R`$\tfrac56$`, [R`$\tfrac16$`, R`$\tfrac12$`, R`$\tfrac23$`]],
  ["medium", R`$P(\text{king or heart})$ from a deck?`, R`$\tfrac{4}{13}$`, [R`$\tfrac{1}{13}$`, R`$\tfrac{17}{52}$`, R`$\tfrac14$`]],
  ["medium", R`Two dice: $P(\text{both }6)$?`, R`$\tfrac{1}{36}$`, [R`$\tfrac{1}{12}$`, R`$\tfrac16$`, R`$\tfrac{1}{18}$`]],
  ["easy", R`Evaluate $5!$.`, R`$120$`, [R`$24$`, R`$20$`, R`$60$`]],
  ["medium", R`Evaluate $P(6,3)$.`, R`$120$`, [R`$18$`, R`$216$`, R`$20$`]],
  ["hard", R`From $3$ red, $2$ blue, draw $2$: $P(\text{both red})$?`, R`$\tfrac{3}{10}$`, [R`$\tfrac35$`, R`$\tfrac{9}{25}$`, R`$\tfrac{1}{10}$`]],
  // Discrete (4)
  ["medium", R`$a_5$ of an arithmetic sequence with $a_1=3$, $d=4$?`, R`$19$`, [R`$15$`, R`$23$`, R`$16$`]],
  ["medium", R`Infinite geometric sum with $a_1=8$, $r=\tfrac12$?`, R`$16$`, [R`$8$`, R`$4$`, R`does not converge`]],
  ["medium", R`Dimensions of a $(2\times3)(3\times4)$ product?`, R`$2\times4$`, [R`$3\times3$`, R`$2\times3$`, R`undefined`]],
  ["easy", R`$\det\begin{bmatrix}3&0\\0&5\end{bmatrix}$?`, R`$15$`, [R`$8$`, R`$0$`, R`$2$`]],
  // Calculus (12)
  ["medium", R`$\lim_{x\to\infty}\dfrac{3x}{x+1}$?`, R`$3$`, [R`$1$`, R`$0$`, R`$\infty$`]],
  ["easy", R`Where is $f(x)=\dfrac1{x-2}$ discontinuous?`, R`$x=2$`, [R`$x=-2$`, R`$x=0$`, R`nowhere`]],
  ["medium", R`Tangent slope to $f(x)=x^2$ at $x=3$?`, R`$6$`, [R`$9$`, R`$3$`, R`$2$`]],
  ["medium", R`$\dfrac{d}{dx}(x^3-4x)$?`, R`$3x^2-4$`, [R`$3x^2-4x$`, R`$x^2-4$`, R`$3x-4$`]],
  ["medium", R`$\dfrac{d}{dx}(2x+1)^4$?`, R`$8(2x+1)^3$`, [R`$4(2x+1)^3$`, R`$8(2x+1)^4$`, R`$(2x+1)^3$`]],
  ["easy", R`$\dfrac{d}{dx}e^x$?`, R`$e^x$`, [R`$xe^{x-1}$`, R`$e$`, R`$\tfrac1x$`]],
  ["easy", R`$\dfrac{d}{dx}\ln x$?`, R`$\dfrac1x$`, [R`$\ln x$`, R`$x$`, R`$-\tfrac1{x^2}$`]],
  ["easy", R`$f''>0$ means the graph is concave`, R`up`, [R`down`, R`flat`, R`linear`]],
  ["medium", R`$\displaystyle\int_1^3 2x\,dx$?`, R`$8$`, [R`$6$`, R`$4$`, R`$9$`]],
  ["easy", R`$\displaystyle\int\cos x\,dx$?`, R`$\sin x+C$`, [R`$-\sin x+C$`, R`$\cos x+C$`, R`$-\cos x+C$`]],
  ["medium", R`$f(x)=x^2-4x$ has a minimum at $x=$`, R`$2$`, [R`$4$`, R`$-2$`, R`$0$`]],
  ["medium", R`Area under $y=x^2$ from $0$ to $3$?`, R`$9$`, [R`$27$`, R`$3$`, R`$6$`]],
  // Number Sense (4)
  ["easy", R`Conjugate of $3-2i$?`, R`$3+2i$`, [R`$-3+2i$`, R`$3-2i$`, R`$-3-2i$`]],
  ["hard", R`$(3+i)(2+i)$?`, R`$5+5i$`, [R`$6+i$`, R`$5+i$`, R`$7+5i$`]],
  ["easy", R`$a+b=b+a$ is the ___ property.`, R`commutative`, [R`associative`, R`distributive`, R`identity`]],
  ["easy", R`Classify $-7$.`, R`integer`, [R`natural`, R`whole`, R`irrational`]],
];
