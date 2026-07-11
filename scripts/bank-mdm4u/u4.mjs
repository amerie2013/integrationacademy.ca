// MDM4U Unit 4 — Continuous & Normal Distributions: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Standard z-table values assumed.
// Areas kept geometric (rectangles/triangles/trapezoids) to stay in MDM4U scope.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 4.1 Continuous Random Variables ─────────────────────────
function g41() {
  const q = [];
  // EASY
  q.push(mc("easy", "For a continuous variable, probability equals:", ["area under the density", "the height of the curve", "a single point", "the mean"], 0));
  q.push(mc("easy", "For a continuous $X$, $P(X=5)=$", ["$0$", "$1$", "$\\tfrac12$", "depends"], 0));
  q.push(mc("easy", "The total area under a density curve is:", ["$1$", "$0$", "$100$", "$\\infty$"], 0));
  q.push(mc("easy", "$X$ uniform on $[0,10]$. $P(X<3)=$", ["$0.3$", "$0.7$", "$3$", "$0.03$"], 0));
  q.push(mc("easy", "$X$ uniform on $[0,10]$. $P(X>7)=$", ["$0.3$", "$0.7$", "$7$", "$0.07$"], 0));
  q.push(mc("easy", "$X$ uniform on $[2,6]$. $P(3<X<5)=$", ["$0.5$", "$0.25$", "$2$", "$0.4$"], 0));
  q.push(mc("easy", "A continuous uniform density on $[a,b]$ has height:", ["$\\tfrac{1}{b-a}$", "$b-a$", "$1$", "$\\tfrac{a+b}{2}$"], 0));
  q.push(ms("easy", "Which are true for continuous variables?", ["area $=$ probability", "$P(X=a)=0$", "total area $=1$", "probability $=$ height"], [0, 1, 2]));
  q.push(ms("easy", "Which are continuous random variables?", ["exact height", "time to finish a race", "number of goals", "battery life"], [0, 1, 3]));
  q.push(tf("easy", "For a continuous variable, $P(X=a)=0$.", true));
  q.push(tf("easy", "The area under a density curve totals $1$.", true));
  q.push(tf("easy", "A continuous uniform on $[0,4]$ has density $\\tfrac14$.", true));
  q.push(num("easy", "$X$ uniform on $[0,20]$. $P(X<5)$ as a decimal.", 0.25, 0));
  q.push(num("easy", "$X$ uniform on $[0,10]$. $P(X>6)$ as a decimal.", 0.4, 0));
  q.push(num("easy", "$X$ uniform on $[1,5]$. $P(2<X<4)$ as a decimal.", 0.5, 0));
  q.push(fill("easy", "For a continuous variable, $P(X=3)=$ ___.", ["0"]));
  q.push(fill("easy", "$X$ uniform on $[0,10]$: $P(X<4)=$ ___.", ["0.4", "2/5"]));
  q.push(mc("easy", "$E(X)$ for a uniform on $[2,6]$:", ["$4$", "$3$", "$8$", "$2$"], 0));
  q.push(num("easy", "$E(X)$ for a uniform on $[0,10]$?", 5, 0));
  q.push(tf("easy", "Probability for a continuous variable is found over intervals, not points.", true));
  // MEDIUM
  q.push(mc("medium", "$f(x)=\\tfrac{x}{2}$ on $[0,2]$ (a ramp). $P(X<1)=$", ["$0.25$", "$0.5$", "$0.75$", "$0.1$"], 0));
  q.push(mc("medium", "$f(x)=\\tfrac{4-x}{8}$ on $[0,4]$. $P(X<2)=$", ["$0.75$", "$0.5$", "$0.25$", "$0.6$"], 0));
  q.push(mc("medium", "A wait is uniform on $[0,30]$ min. $P(\\text{wait}>25)=$", ["$\\tfrac16$", "$\\tfrac56$", "$\\tfrac{25}{30}$", "$\\tfrac{1}{5}$"], 0));
  q.push(mc("medium", "Median of a uniform on $[0,10]$:", ["$5$", "$0$", "$10$", "$2.5$"], 0));
  q.push(mc("medium", "$X$ uniform on $[0,1]$. $P(0.2<X<0.5)=$", ["$0.3$", "$0.5$", "$0.2$", "$0.7$"], 0));
  q.push(mc("medium", "A bus arrives uniformly within 20 min. $E(\\text{wait})=$", ["$10$", "$20$", "$5$", "$15$"], 0));
  q.push(ms("medium", "For $f(x)=\\tfrac{x}{2}$ on $[0,2]$, which are true?", ["the area is $1$", "$f(1)=0.5$", "$P(X<1)=0.25$", "it is uniform"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $P(X<5)$ for a uniform on $[0,20]$?", ["$0.25$", "$\\tfrac{5}{20}$", "$\\tfrac14$", "$5$"], [0, 1, 2]));
  q.push(tf("medium", "$f(x)=x/2$ on $[0,2]$ is a straight ramp density.", true));
  q.push(tf("medium", "The median of a uniform on $[0,8]$ is $4$.", true));
  q.push(num("medium", "$f(x)=x/2$ on $[0,2]$: $P(X<1)$ as a decimal.", 0.25, 0));
  q.push(num("medium", "$f(x)=(4-x)/8$ on $[0,4]$: $P(X<2)$ as a decimal.", 0.75, 0));
  q.push(num("medium", "$E(X)$ for a uniform on $[4,10]$?", 7, 0));
  q.push(fill("medium", "Median of a uniform on $[0,10]$ $=$ ___.", ["5"]));
  q.push(fill("medium", "$X$ uniform on $[0,30]$: $P(\\text{wait}>25)=$ ___.", ["1/6", "5/30"]));
  q.push(mc("medium", "$f(x)=\\tfrac{x}{2}$ on $[0,2]$: $P(X>1)=$", ["$0.75$", "$0.25$", "$0.5$", "$0.9$"], 0));
  q.push(num("medium", "$X$ uniform on $[0,1]$: $P(0.2<X<0.5)$ as a decimal.", 0.3, 0));
  q.push(mc("medium", "Coffee fills are uniform on $[236,240]$ mL. $P(\\text{fill}>238)=$", ["$0.5$", "$0.25$", "$238$", "$0.75$"], 0));
  q.push(tf("medium", "For the ramp $f(x)=x/2$ on $[0,2]$, more probability lies in the right half.", true));
  q.push(num("medium", "$E(X)$ for a uniform on $[10,20]$?", 15, 0));
  // HARD
  q.push(mc("hard", "A symmetric triangular density peaks at the centre of $[0,2]$. $P(X<1)=$", ["$0.5$", "$0.25$", "$0.75$", "$1$"], 0));
  q.push(mc("hard", "$f(x)=\\tfrac{x}{2}$ on $[0,2]$. Its median $m$ (where the left triangle has area $0.5$) is:", ["$\\sqrt2$", "$1$", "$0.5$", "$2$"], 0));
  q.push(mc("hard", "A continuous uniform on $[0,10]$ has variance $\\tfrac{(b-a)^2}{12}=$", ["$\\tfrac{100}{12}$", "$5$", "$100$", "$\\tfrac{10}{12}$"], 0));
  q.push(mc("hard", "For a continuous uniform on $[a,b]$, the variance is:", ["$\\tfrac{(b-a)^2}{12}$", "$\\tfrac{a+b}{2}$", "$\\tfrac{b-a}{2}$", "$(b-a)^2$"], 0));
  q.push(mc("hard", "$f(x)=\\tfrac{x}{2}$ on $[0,2]$: $P(X>1.5)$ (a trapezoid) $=$", ["$\\tfrac{7}{16}$", "$\\tfrac14$", "$\\tfrac12$", "$\\tfrac{9}{16}$"], 0));
  q.push(mc("hard", "$f(x)=kx$ on $[0,3]$ is a valid density when $k=$", ["$\\tfrac29$", "$\\tfrac13$", "$\\tfrac19$", "$\\tfrac16$"], 0));
  q.push(mc("hard", "Battery life is uniform on $[8,12]$ h. $P(\\text{life}>11\\mid\\text{life}>10)=$", ["$\\tfrac12$", "$\\tfrac14$", "$\\tfrac13$", "$\\tfrac18$"], 0));
  q.push(mc("hard", "$f(x)=\\tfrac{x}{2}$ on $[0,2]$: $P(1<X<1.5)$ (a trapezoid) $=$", ["$\\tfrac{5}{16}$", "$\\tfrac14$", "$\\tfrac38$", "$\\tfrac12$"], 0));
  q.push(mc("hard", "A symmetric triangular density on $[0,2]$ (peak at $1$). $E(X)=$", ["$1$", "$0.5$", "$\\tfrac43$", "$1.5$"], 0));
  q.push(num("hard", "Variance of a uniform on $[0,10]$ $=\\tfrac{100}{12}$; type it to 2 decimals.", 8.33, 0.01));
  q.push(num("hard", "$f(x)=x/2$ on $[0,2]$: its median $\\sqrt2$; type it to 3 decimals.", 1.414, 0.002));
  q.push(num("hard", "$f(x)=kx$ on $[0,3]$ valid density: $k=\\tfrac{2}{m}$; find $m$.", 9, 0));
  q.push(num("hard", "Uniform on $[8,12]$: $P(\\text{life}>11\\mid\\text{life}>10)$ as a decimal.", 0.5, 0));
  q.push(num("hard", "$f(x)=x/2$ on $[0,2]$: $P(1<X<1.5)$ as a decimal ($\\tfrac{5}{16}$).", 0.3125, 0.001));
  q.push(fill("hard", "Variance of a continuous uniform on $[0,6]$ $=$ ___ ($\\tfrac{36}{12}$).", ["3"]));
  q.push(tf("hard", "A continuous uniform on $[0,12]$ has variance $12$.", true));
  q.push(tf("hard", "For a symmetric density, the mean equals the median.", true));
  q.push(tf("hard", "For the increasing ramp $f(x)=x/2$ on $[0,2]$, the median $\\sqrt2$ exceeds the interval's midpoint $1$.", true));
  q.push(ms("hard", "For $f(x)=x/2$ on $[0,2]$, which are true?", ["median $=\\sqrt2$", "$P(X<1)=\\tfrac14$", "$P(X>1.5)=\\tfrac{7}{16}$", "it is symmetric"], [0, 1, 2]));
  q.push(mc("hard", "A continuous uniform on $[a,b]$ with $a=5,\\ b=17$ has standard deviation $\\tfrac{b-a}{\\sqrt{12}}=$", ["$\\approx3.46$", "$12$", "$6$", "$11$"], 0));
  return q;
}

// ── 4.2 The Normal Distribution & z-Scores ──────────────────
function g42() {
  const q = [];
  // EASY
  q.push(mc("easy", "The $z$-score is $z=$", ["$\\dfrac{x-\\mu}{\\sigma}$", "$\\dfrac{\\mu-x}{\\sigma}$", "$x-\\mu$", "$\\mu\\sigma$"], 0));
  q.push(mc("easy", "The empirical rule: about what percent is within $\\pm1\\sigma$?", ["$68\\%$", "$95\\%$", "$99.7\\%$", "$50\\%$"], 0));
  q.push(mc("easy", "Within $\\pm2\\sigma$ is about:", ["$95\\%$", "$68\\%$", "$99.7\\%$", "$100\\%$"], 0));
  q.push(mc("easy", "$X\\sim N(100,15)$. The $z$-score of $x=115$ is:", ["$1$", "$-1$", "$15$", "$115$"], 0));
  q.push(mc("easy", "A $z$-score of $0$ means the value equals:", ["the mean", "the median only", "zero", "one $\\sigma$"], 0));
  q.push(mc("easy", "A normal curve is:", ["symmetric about $\\mu$", "skewed right", "uniform", "discrete"], 0));
  q.push(ms("easy", "Which are true of the empirical rule?", ["$68\\%$ within $\\pm1\\sigma$", "$95\\%$ within $\\pm2\\sigma$", "$99.7\\%$ within $\\pm3\\sigma$", "$50\\%$ within $\\pm1\\sigma$"], [0, 1, 2]));
  q.push(ms("easy", "Which equal a $z$-score of a value $1\\sigma$ above the mean?", ["$1$", "$\\tfrac{x-\\mu}{\\sigma}$ with $x=\\mu+\\sigma$", "$+1$", "$0$"], [0, 1, 2]));
  q.push(tf("easy", "A $z$-score measures distance from the mean in standard deviations.", true));
  q.push(tf("easy", "A negative $z$-score means the value is below the mean.", true));
  q.push(tf("easy", "About $68\\%$ of a normal distribution lies within $\\pm1\\sigma$.", true));
  q.push(num("easy", "$X\\sim N(60,4)$. The $z$-score of $x=68$?", 2, 0));
  q.push(num("easy", "$X\\sim N(100,15)$. The $z$-score of $x=85$?", -1, 0));
  q.push(num("easy", "About what percent is within $\\pm2\\sigma$ (a whole number)?", 95, 0));
  q.push(fill("easy", "The $z$-score formula is $z=\\dfrac{x-\\mu}{\\;}$ ___.", ["sigma", "\\sigma"]));
  q.push(fill("easy", "About ___ percent lies within $\\pm1\\sigma$.", ["68"]));
  q.push(mc("easy", "$X\\sim N(50,10)$. What percent lies between $40$ and $60$?", ["$68\\%$", "$95\\%$", "$99.7\\%$", "$34\\%$"], 0));
  q.push(num("easy", "$X\\sim N(200,20)$. The value at $z=1.5$? ($\\mu+z\\sigma$)", 230, 0));
  q.push(tf("easy", "Standardizing lets you compare values from different normal distributions.", true));
  q.push(mc("easy", "$X\\sim N(25,3)$. The value at $z=-1$ is:", ["$22$", "$28$", "$24$", "$26$"], 0));
  // MEDIUM
  q.push(mc("medium", "$X\\sim N(500,50)$. What percent lies between $400$ and $600$?", ["$95\\%$", "$68\\%$", "$99.7\\%$", "$50\\%$"], 0));
  q.push(mc("medium", "Which is relatively better: $80$ on $N(70,5)$ or $90$ on $N(80,8)$?", ["$80$ ($z=2$)", "$90$ ($z=1.25$)", "equal", "cannot tell"], 0));
  q.push(mc("medium", "$x=90$ has $z=1.5$ and $\\mu=75$. Then $\\sigma=$", ["$10$", "$15$", "$6$", "$9$"], 0));
  q.push(mc("medium", "$X\\sim N(100,10)$. About what percent lies above $110$?", ["$16\\%$", "$32\\%$", "$2.5\\%$", "$84\\%$"], 0));
  q.push(mc("medium", "$X\\sim N(500,100)$. About what percent lies above $700$?", ["$2.5\\%$", "$5\\%$", "$16\\%$", "$0.15\\%$"], 0));
  q.push(mc("medium", "$X\\sim N(170,8)$ cm. The $z$-score of $186$ cm is:", ["$2$", "$-2$", "$1$", "$16$"], 0));
  q.push(ms("medium", "For $X\\sim N(100,10)$, which are true?", ["$P(90<X<110)\\approx0.68$", "$z=1$ at $x=110$", "about $16\\%$ above $110$", "$\\mu=110$"], [0, 1, 2]));
  q.push(ms("medium", "Which give the value at $z=2$ for $N(50,4)$?", ["$\\mu+2\\sigma$", "$58$", "$50+8$", "$54$"], [0, 1, 2]));
  q.push(tf("medium", "For $N(100,10)$, about $16\\%$ lies above $110$.", true));
  q.push(tf("medium", "A score with $z=2$ beats one with $z=1.25$ (relatively).", true));
  q.push(num("medium", "$x=48$ has $z=-2$ and $\\mu=60$. Find $\\sigma$.", 6, 0));
  q.push(num("medium", "$X\\sim N(200,20)$. Find $x$ when $z=1.5$.", 230, 0));
  q.push(num("medium", "$X\\sim N(170,8)$. The $z$-score of $154$ cm?", -2, 0));
  q.push(fill("medium", "About ___ percent lies above $+1\\sigma$ in a normal distribution.", ["16"]));
  q.push(fill("medium", "$X\\sim N(100,10)$: about ___ percent lies between $90$ and $120$.", ["81.5", "81.5%"]));
  q.push(mc("medium", "$X\\sim N(100,10)$. About what percent lies between $90$ and $120$?", ["$81.5\\%$", "$95\\%$", "$68\\%$", "$47.5\\%$"], 0));
  q.push(num("medium", "$X\\sim N(25,3)$. Find $x$ when $z=-1$.", 22, 0));
  q.push(tf("medium", "About $2.5\\%$ of a normal distribution lies beyond $+2\\sigma$.", true));
  q.push(mc("medium", "IQ is $N(100,15)$. The $z$-score of $130$ is:", ["$2$", "$1$", "$30$", "$3$"], 0));
  q.push(num("medium", "A value is $z=1.5$ above $\\mu=75$ with $\\sigma=10$. Find $x$ ($\\mu+z\\sigma$).", 90, 0));
  // HARD
  q.push(mc("hard", "$X\\sim N(500,100)$. About what percent lies between $600$ and $700$? ($+1\\sigma$ to $+2\\sigma$)", ["$13.5\\%$", "$34\\%$", "$47.5\\%$", "$2.5\\%$"], 0));
  q.push(mc("hard", "$X\\sim N(\\mu,\\sigma)$ with $P(X<230)=0.84$ and $\\mu=200$. Then $\\sigma\\approx$", ["$30$", "$15$", "$10$", "$60$"], 0));
  q.push(mc("hard", "$X\\sim N(100,15)$. About what percent lies between $85$ and $130$? ($-1\\sigma$ to $+2\\sigma$)", ["$81.5\\%$", "$95\\%$", "$68\\%$", "$47.5\\%$"], 0));
  q.push(mc("hard", "Manufacturing: rods are $N(50,0.2)$ mm; spec is $49.6$--$50.4$. Percent within spec?", ["$95\\%$", "$68\\%$", "$99.7\\%$", "$50\\%$"], 0));
  q.push(mc("hard", "$X\\sim N(0,1)$. $P(-1<Z<2)$ by the empirical rule $\\approx$", ["$81.5\\%$", "$95\\%$", "$68\\%$", "$83.85\\%$"], 0));
  q.push(mc("hard", "Two tests: $\\mu_1=70,\\sigma_1=5$; $\\mu_2=80,\\sigma_2=10$. A score of $77.5$ on test 1 and $95$ on test 2 give $z$-scores:", ["$1.5$ and $1.5$ (tie)", "$1$ and $2$", "$2$ and $1$", "$1.5$ and $1$"], 0));
  q.push(num("hard", "$P(X<230)=0.84,\\ \\mu=200$: find $\\sigma$ (since $230$ is $+1\\sigma$).", 30, 0));
  q.push(num("hard", "$X\\sim N(500,100)$: percent between $600$ and $700$ (a whole number)?", 13.5, 0.1));
  q.push(num("hard", "$X\\sim N(100,15)$: percent between $85$ and $130$ (i.e. $34+47.5$)?", 81.5, 0.1));
  q.push(num("hard", "Rods $N(50,0.2)$, spec $49.6$--$50.4$: percent within spec ($\\pm2\\sigma$)?", 95, 0));
  q.push(mc("hard", "$X\\sim N(60,4)$. The middle $95\\%$ of values lies between:", ["$52$ and $68$", "$56$ and $64$", "$48$ and $72$", "$58$ and $62$"], 0));
  q.push(num("hard", "$X\\sim N(60,4)$: the lower bound of the middle $95\\%$ ($\\mu-2\\sigma$)?", 52, 0));
  q.push(tf("hard", "If $P(X<\\mu+\\sigma)=0.84$, then a value one $\\sigma$ above the mean sits at the $84$th percentile.", true));
  q.push(tf("hard", "Between $+1\\sigma$ and $+2\\sigma$ lies about $13.5\\%$ of a normal distribution.", true));
  q.push(ms("hard", "Which equal the percent between $-1\\sigma$ and $+2\\sigma$?", ["$34\\%+47.5\\%$", "$81.5\\%$", "$0.815$", "$95\\%$"], [0, 1, 2]));
  q.push(mc("hard", "$X\\sim N(\\mu,\\sigma)$. If the $90$th percentile is $628$ and $\\mu=500$, then $\\sigma\\approx$ (using $z=1.28$)", ["$100$", "$128$", "$64$", "$80$"], 0));
  q.push(num("hard", "$90$th percentile $=628$, $\\mu=500$, $z=1.28$: find $\\sigma$ (nearest whole).", 100, 1));
  q.push(fill("hard", "Percent between $+1\\sigma$ and $+2\\sigma$ $=$ ___.", ["13.5", "13.5%"]));
  q.push(mc("hard", "Battery life $N(500,50)$ h. About what percent lasts less than $400$ h?", ["$2.5\\%$", "$5\\%$", "$16\\%$", "$0.15\\%$"], 0));
  q.push(num("hard", "$X\\sim N(500,50)$: percent below $400$ ($-2\\sigma$)?", 2.5, 0.1));
  return q;
}

// ── 4.3 Normal Probabilities & Percentiles ──────────────────
function g43() {
  const q = [];
  // EASY
  q.push(mc("easy", "$\\Phi(z)=P(Z<z)$. $\\Phi(0)=$", ["$0.5$", "$0$", "$1$", "$0.68$"], 0));
  q.push(mc("easy", "By symmetry, $P(Z>0)=$", ["$0.5$", "$1$", "$0$", "$0.16$"], 0));
  q.push(mc("easy", "$\\Phi(1)\\approx$", ["$0.8413$", "$0.68$", "$0.5$", "$0.9772$"], 0));
  q.push(mc("easy", "$P(Z>1)=1-\\Phi(1)\\approx$", ["$0.1587$", "$0.8413$", "$0.5$", "$0.16$"], 0));
  q.push(mc("easy", "$\\Phi(2)\\approx$", ["$0.9772$", "$0.8413$", "$0.95$", "$0.68$"], 0));
  q.push(mc("easy", "To standardize $x$, compute:", ["$z=\\tfrac{x-\\mu}{\\sigma}$", "$z=x\\sigma$", "$z=\\mu+\\sigma$", "$z=x-\\sigma$"], 0));
  q.push(ms("easy", "Which are true about $\\Phi$?", ["$\\Phi(0)=0.5$", "$\\Phi(z)=P(Z<z)$", "$P(Z>z)=1-\\Phi(z)$", "$\\Phi(z)>1$ sometimes"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $P(Z>1)$?", ["$1-\\Phi(1)$", "$\\approx0.1587$", "$\\Phi(-1)$", "$0.8413$"], [0, 1, 2]));
  q.push(tf("easy", "$\\Phi(0)=0.5$.", true));
  q.push(tf("easy", "The standard normal is symmetric about $0$.", true));
  q.push(tf("easy", "$P(Z<z)+P(Z>z)=1$.", true));
  q.push(num("easy", "$P(Z<0)$ as a decimal?", 0.5, 0));
  q.push(num("easy", "$\\Phi(1)$ to 4 decimals?", 0.8413, 0.0005));
  q.push(fill("easy", "$\\Phi(0)=$ ___.", ["0.5", "1/2"]));
  q.push(fill("easy", "$P(Z>1)\\approx$ ___ (4 decimals).", ["0.1587"]));
  q.push(mc("easy", "$X\\sim N(100,15)$. To find $P(X<115)$, first find $z=$", ["$1$", "$-1$", "$15$", "$115$"], 0));
  q.push(num("easy", "$P(Z<1)$ to 4 decimals?", 0.8413, 0.0005));
  q.push(tf("easy", "$P(Z<-1)=1-\\Phi(1)$.", true));
  q.push(mc("easy", "$P(Z<2)\\approx$", ["$0.9772$", "$0.8413$", "$0.95$", "$0.5$"], 0));
  q.push(num("easy", "$P(Z>2)$ to 4 decimals?", 0.0228, 0.0005));
  // MEDIUM
  q.push(mc("medium", "$X\\sim N(100,15)$. $P(X<120)$ (use $z=1.33$, $\\Phi=0.9082$)$\\approx$", ["$0.9082$", "$0.0918$", "$0.5$", "$0.8413$"], 0));
  q.push(mc("medium", "$X\\sim N(50,5)$. $P(45<X<55)\\approx$", ["$0.6826$", "$0.3174$", "$0.95$", "$0.5$"], 0));
  q.push(mc("medium", "$X\\sim N(100,15)$. $P(X>85)=\\Phi(1)\\approx$", ["$0.8413$", "$0.1587$", "$0.5$", "$0.9772$"], 0));
  q.push(mc("medium", "The $90$th percentile of the standard normal has $z\\approx$", ["$1.28$", "$1.645$", "$1.96$", "$0.90$"], 0));
  q.push(mc("medium", "The $95$th percentile has $z\\approx$", ["$1.645$", "$1.28$", "$1.96$", "$0.95$"], 0));
  q.push(mc("medium", "$X\\sim N(500,100)$. The $90$th percentile ($z=1.28$) is:", ["$628$", "$564$", "$672$", "$600$"], 0));
  q.push(ms("medium", "Which equal $P(45<X<55)$ for $N(50,5)$?", ["$\\Phi(1)-\\Phi(-1)$", "$0.8413-0.1587$", "$0.6826$", "$0.95$"], [0, 1, 2]));
  q.push(ms("medium", "Which standard-normal percentiles/z-scores match?", ["$90$th $\\to1.28$", "$95$th $\\to1.645$", "$97.5$th $\\to1.96$", "$99$th $\\to1.28$"], [0, 1, 2]));
  q.push(tf("medium", "$P(45<X<55)\\approx0.6826$ for $N(50,5)$.", true));
  q.push(tf("medium", "The $95$th percentile of the standard normal is about $z=1.645$.", true));
  q.push(num("medium", "$X\\sim N(500,100)$: the $90$th percentile (using $z=1.28$)?", 628, 0));
  q.push(num("medium", "$X\\sim N(60,5)$: the $84$th percentile (using $z=1$)?", 65, 0));
  q.push(num("medium", "$P(45<X<55)$ for $N(50,5)$ to 4 decimals ($\\Phi(1)-\\Phi(-1)$)?", 0.6826, 0.0005));
  q.push(fill("medium", "The $z$-score for the $95$th percentile is ___.", ["1.645", "1.64", "1.65"]));
  q.push(fill("medium", "$P(X>85)$ for $N(100,15)$ $=$ ___ (4 decimals).", ["0.8413"]));
  q.push(mc("medium", "$X\\sim N(72,12)$. $P(X>96)$ (use $z=2$)$\\approx$", ["$0.0228$", "$0.9772$", "$0.16$", "$0.05$"], 0));
  q.push(num("medium", "$X\\sim N(72,12)$: $P(X>96)$ to 4 decimals?", 0.0228, 0.0005));
  q.push(tf("medium", "A percentile is found by reading the $z$-table backwards (inverse normal).", true));
  q.push(mc("medium", "$X\\sim N(200,20)$. $P(180<X<220)$ (i.e. $\\pm1\\sigma$)$\\approx$", ["$0.6826$", "$0.95$", "$0.5$", "$0.3174$"], 0));
  q.push(num("medium", "$X\\sim N(500,100)$: the $99$th percentile (using $z=2.33$)?", 733, 0));
  // HARD
  q.push(mc("hard", "$X\\sim N(70,10)$. Find $x$ with $P(X>x)=0.05$ (use $z=1.645$).", ["$86.45$", "$83.55$", "$90$", "$76.45$"], 0));
  q.push(mc("hard", "$X\\sim N(100,15)$. The central $95\\%$ interval ($z=\\pm1.96$) is about:", ["$70.6$ to $129.4$", "$85$ to $115$", "$70$ to $130$", "$76$ to $124$"], 0));
  q.push(mc("hard", "$P(|Z|>2)=2(1-\\Phi(2))\\approx$", ["$0.0456$", "$0.0228$", "$0.9544$", "$0.05$"], 0));
  q.push(mc("hard", "$X\\sim N(\\mu,\\sigma)$ with $P(X<230)=0.84$ and $\\mu=200$. Then $\\sigma=$", ["$30$", "$15$", "$60$", "$10$"], 0));
  q.push(mc("hard", "$X\\sim N(72,12)$. The $95$th percentile ($z=1.645$) is about:", ["$91.7$", "$96$", "$84$", "$88.7$"], 0));
  q.push(mc("hard", "$X\\sim N(25,4)$. $P(X<17)=\\Phi(-2)\\approx$", ["$0.0228$", "$0.9772$", "$0.16$", "$0.05$"], 0));
  q.push(num("hard", "$X\\sim N(70,10)$: find $x$ with $P(X>x)=0.05$ (use $z=1.645$).", 86.45, 0.1));
  q.push(num("hard", "$P(|Z|>2)$ to 4 decimals ($2(1-\\Phi(2))$)?", 0.0456, 0.0005));
  q.push(num("hard", "$X\\sim N(72,12)$: the $95$th percentile (using $z=1.645$) to 1 decimal?", 91.7, 0.2));
  q.push(num("hard", "$X\\sim N(100,15)$: the upper bound of the central $95\\%$ ($z=1.96$) to 1 decimal?", 129.4, 0.2));
  q.push(mc("hard", "Delivery times are $N(30,5)$ min. The company promises the $90$th percentile as its 'guaranteed by' time ($z=1.28$). That is:", ["$36.4$ min", "$40$ min", "$33.2$ min", "$35$ min"], 0));
  q.push(num("hard", "$X\\sim N(30,5)$: the $90$th percentile (using $z=1.28$)?", 36.4, 0.2));
  q.push(tf("hard", "$P(|Z|>2)\\approx0.0456$.", true));
  q.push(tf("hard", "Finding a value from a target probability uses the inverse normal ($x=\\mu+z\\sigma$).", true));
  q.push(ms("hard", "Which equal the central $95\\%$ interval of $N(100,15)$?", ["$100\\pm1.96(15)$", "$70.6$ to $129.4$", "$100\\pm29.4$", "$85$ to $115$"], [0, 1, 2]));
  q.push(mc("hard", "$X\\sim N(160,10)$. $P(150<X<180)=\\Phi(2)-\\Phi(-1)\\approx$", ["$0.8185$", "$0.6826$", "$0.95$", "$0.9772$"], 0));
  q.push(num("hard", "$X\\sim N(160,10)$: $P(150<X<180)$ to 4 decimals ($\\Phi(2)-\\Phi(-1)$)?", 0.8185, 0.0005));
  q.push(fill("hard", "$X\\sim N(70,10)$: the value with $5\\%$ above it (use $z=1.645$) is ___.", ["86.45"]));
  q.push(mc("hard", "IQ is $N(100,15)$. To be in the top $2.5\\%$ ($z=1.96$), an IQ must exceed about:", ["$129.4$", "$115$", "$130$", "$125$"], 0));
  q.push(num("hard", "IQ $N(100,15)$: the top-$2.5\\%$ cutoff ($z=1.96$) to 1 decimal?", 129.4, 0.2));
  return q;
}

// ── 4.4 The Normal Approximation to the Binomial ────────────
function g44() {
  const q = [];
  // EASY
  q.push(mc("easy", "The normal approximation to a binomial is valid when:", ["$np\\ge5$ and $nq\\ge5$", "$n<5$", "$p=1$", "always"], 0));
  q.push(mc("easy", "The approximating normal has mean:", ["$np$", "$\\sqrt{np}$", "$n$", "$p$"], 0));
  q.push(mc("easy", "The approximating normal has standard deviation:", ["$\\sqrt{npq}$", "$np$", "$npq$", "$\\sqrt{np}$"], 0));
  q.push(mc("easy", "A continuity correction adjusts a count by:", ["$\\pm0.5$", "$\\pm1$", "$\\pm2$", "$0$"], 0));
  q.push(mc("easy", "$n=50,\\ p=0.4$: the mean is:", ["$20$", "$50$", "$0.4$", "$30$"], 0));
  q.push(mc("easy", "$n=100,\\ p=0.5$: the mean is:", ["$50$", "$100$", "$25$", "$5$"], 0));
  q.push(ms("easy", "Which are required for the normal approximation?", ["$np\\ge5$", "$nq\\ge5$", "large $n$", "$n<5$"], [0, 1, 2]));
  q.push(ms("easy", "Which equal the approximating standard deviation?", ["$\\sqrt{npq}$", "$\\sqrt{np(1-p)}$", "$\\sqrt{\\text{variance}}$", "$np$"], [0, 1, 2]));
  q.push(tf("easy", "The approximating normal has $\\mu=np$ and $\\sigma=\\sqrt{npq}$.", true));
  q.push(tf("easy", "Continuity correction shifts a boundary by $0.5$.", true));
  q.push(tf("easy", "The approximation needs both $np\\ge5$ and $nq\\ge5$.", true));
  q.push(num("easy", "$n=50,\\ p=0.4$: the mean $np$?", 20, 0));
  q.push(num("easy", "$n=100,\\ p=0.5$: the standard deviation $\\sqrt{npq}$?", 5, 0));
  q.push(num("easy", "$n=200,\\ p=0.1$: the mean?", 20, 0));
  q.push(fill("easy", "The approximating standard deviation is ___ (in $n,p,q$).", ["sqrt(npq)", "root(npq)"]));
  q.push(fill("easy", "The approximating mean is ___.", ["np", "n*p"]));
  q.push(mc("easy", "$n=64,\\ p=0.5$: mean and $\\sigma$:", ["$32$ and $4$", "$32$ and $8$", "$16$ and $4$", "$64$ and $8$"], 0));
  q.push(num("easy", "$n=64,\\ p=0.5$: the standard deviation?", 4, 0));
  q.push(tf("easy", "For $n=20,\\ p=0.1$ the approximation is NOT valid ($np=2<5$).", true));
  q.push(mc("easy", "$n=200,\\ p=0.1$: $\\sigma=\\sqrt{18}\\approx$", ["$4.24$", "$18$", "$20$", "$14$"], 0));
  // MEDIUM
  q.push(mc("medium", "$n=50,\\ p=0.4$. For $P(X\\ge25)$, use the boundary:", ["$24.5$", "$25.5$", "$25$", "$24$"], 0));
  q.push(mc("medium", "$n=50,\\ p=0.4$. For $P(X\\le15)$, use the boundary:", ["$15.5$", "$14.5$", "$15$", "$16$"], 0));
  q.push(mc("medium", "For $P(X<40)$ (a count), the continuity boundary is:", ["$39.5$", "$40.5$", "$40$", "$41$"], 0));
  q.push(mc("medium", "For $P(X=20)$ exactly, use the interval:", ["$19.5$ to $20.5$", "$20$ to $21$", "$19$ to $20$", "$18.5$ to $21.5$"], 0));
  q.push(mc("medium", "$n=100,\\ p=0.5$. For $P(X\\ge60)$, $z=\\tfrac{59.5-50}{5}=$", ["$1.9$", "$2$", "$1.5$", "$2.1$"], 0));
  q.push(mc("medium", "Can you approximate $n=40,\\ p=0.2$?", ["yes ($np=8,\\ nq=32$)", "no", "only if $p=0.5$", "never"], 0));
  q.push(ms("medium", "For $P(X\\ge25)$ with continuity correction, which are used?", ["$P(X>24.5)$", "boundary $24.5$", "widen to include $25$", "$P(X>25.5)$"], [0, 1, 2]));
  q.push(ms("medium", "Which pairs $(np,nq)$ allow the approximation?", ["$(8,32)$", "$(20,30)$", "$(2,38)$", "$(50,50)$"], [0, 1, 3]));
  q.push(tf("medium", "For $P(X\\ge25)$ you use $P(X>24.5)$.", true));
  q.push(tf("medium", "For $P(X\\le15)$ you use $P(X<15.5)$.", true));
  q.push(num("medium", "$n=100,\\ p=0.5$, $P(X\\ge60)$: the $z$-score using $59.5$?", 1.9, 0.001));
  q.push(num("medium", "$n=50,\\ p=0.4$: the mean $np$?", 20, 0));
  q.push(num("medium", "$n=50,\\ p=0.4$: variance $npq$?", 12, 0));
  q.push(fill("medium", "For $P(X\\ge25)$, the continuity boundary is ___.", ["24.5"]));
  q.push(fill("medium", "For $P(X\\le40)$, the continuity boundary is ___.", ["40.5"]));
  q.push(mc("medium", "$n=64,\\ p=0.5$. For $P(X\\ge40)$, $z=\\tfrac{39.5-32}{4}=$", ["$1.875$", "$2$", "$1.75$", "$2.125$"], 0));
  q.push(num("medium", "$n=64,\\ p=0.5$, $P(X\\ge40)$: the $z$-score using $39.5$?", 1.875, 0.001));
  q.push(tf("medium", "$n=40,\\ p=0.2$ satisfies both $np\\ge5$ and $nq\\ge5$.", true));
  q.push(mc("medium", "$n=200,\\ p=0.1$: mean and $\\sigma$:", ["$20$ and $\\sqrt{18}$", "$20$ and $18$", "$18$ and $20$", "$20$ and $4$"], 0));
  q.push(num("medium", "$n=100,\\ p=0.3$: standard deviation $\\sqrt{npq}=\\sqrt{21}\\approx$ (2 decimals)?", 4.58, 0.02));
  // HARD
  q.push(mc("hard", "$n=100,\\ p=0.5$. $P(X\\ge60)$ with correction ($z=1.9$)$\\approx$", ["$0.0287$", "$0.9713$", "$0.05$", "$0.16$"], 0));
  q.push(mc("hard", "$n=100,\\ p=0.5$. $P(X\\le40)$ ($z=-1.9$)$\\approx$", ["$0.0287$", "$0.9713$", "$0.05$", "$0.5$"], 0));
  q.push(mc("hard", "$n=100,\\ p=0.5$. $P(45\\le X\\le55)$ ($z=\\pm1.1$)$\\approx$", ["$0.7286$", "$0.6826$", "$0.95$", "$0.5$"], 0));
  q.push(mc("hard", "$n=64,\\ p=0.5$. $P(X\\ge40)$ ($z=1.875\\approx1.88$)$\\approx$", ["$0.0301$", "$0.9699$", "$0.05$", "$0.16$"], 0));
  q.push(mc("hard", "$n=50,\\ p=0.5$. $P(X=25)$ (exact, $z=\\pm0.14$)$\\approx$", ["$0.113$", "$0.5$", "$0.02$", "$0.25$"], 0));
  q.push(mc("hard", "A factory's defect rate is $2\\%$; a batch has $n=400$. $P(\\text{at least 12 defective})$: mean $=8$, $\\sigma\\approx2.8$, $z=\\tfrac{11.5-8}{2.8}\\approx$", ["$1.25$", "$1.5$", "$1$", "$2$"], 0));
  q.push(num("hard", "$n=100,\\ p=0.5$: $P(X\\ge60)$ to 4 decimals (using $z=1.9$)?", 0.0287, 0.001));
  q.push(num("hard", "$n=100,\\ p=0.5$: $P(45\\le X\\le55)$ to 4 decimals ($z=\\pm1.1$)?", 0.7286, 0.001));
  q.push(num("hard", "$n=64,\\ p=0.5$: $P(X\\ge40)$ to 4 decimals (using $z=1.88$)?", 0.0301, 0.001));
  q.push(num("hard", "A poll of $n=400$, $p=0.5$: $\\sigma=\\sqrt{npq}$?", 10, 0));
  q.push(mc("hard", "$n=100,\\ p=0.3$. $P(X\\le25)$: mean $30$, $\\sigma\\approx4.58$, $z=\\tfrac{25.5-30}{4.58}\\approx$", ["$-0.98$", "$-1.09$", "$-0.5$", "$-1.5$"], 0));
  q.push(num("hard", "$n=100,\\ p=0.3$, $P(X\\le25)$: the $z$-score using $25.5$ (2 decimals)?", -0.98, 0.03));
  q.push(tf("hard", "$n=100,\\ p=0.5$: $P(X\\ge60)\\approx0.0287$ using continuity correction.", true));
  q.push(tf("hard", "For $P(X=25)$ exactly, use $P(24.5<X<25.5)$.", true));
  q.push(ms("hard", "For $n=64,\\ p=0.5,\\ P(X\\ge40)$, which are correct?", ["boundary $39.5$", "$z=1.875$", "$\\approx0.0301$", "boundary $40.5$"], [0, 1, 2]));
  q.push(mc("hard", "Why can't you approximate $n=15,\\ p=0.1$?", ["$np=1.5<5$", "$n$ too large", "$p$ too big", "$nq<5$"], 0));
  q.push(num("hard", "$n=400,\\ p=0.02$: mean $np$?", 8, 0));
  q.push(fill("hard", "$n=100,\\ p=0.5$: $P(X\\ge60)\\approx$ ___ (4 decimals).", ["0.0287"]));
  q.push(mc("hard", "$n=144,\\ p=0.5$: $\\sigma=\\sqrt{npq}=$", ["$6$", "$12$", "$72$", "$8$"], 0));
  q.push(num("hard", "$n=144,\\ p=0.5$: the standard deviation?", 6, 0));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
];
