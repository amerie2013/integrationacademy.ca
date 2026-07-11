// MCT4C Unit 3 — Trigonometric Functions (degrees): question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Kinds: mc, ms, tf, num, fill.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 3.1 Trigonometric Ratios to 360° ──────────────────────────
function g31() {
  const q = [];
  // EASY
  q.push(mc("easy", "Reference angle of $150^\\circ$?", ["$30^\\circ$", "$150^\\circ$", "$60^\\circ$", "$210^\\circ$"], 0));
  q.push(mc("easy", "In which quadrant is $200^\\circ$?", ["III", "II", "I", "IV"], 0));
  q.push(mc("easy", "$\\sin30^\\circ=$", ["$\\frac12$", "$\\frac{\\sqrt3}{2}$", "$1$", "$\\frac{\\sqrt2}{2}$"], 0));
  q.push(mc("easy", "$\\cos60^\\circ=$", ["$\\frac12$", "$\\frac{\\sqrt3}{2}$", "$1$", "$0$"], 0));
  q.push(mc("easy", "$\\sin90^\\circ=$", ["$1$", "$0$", "$\\frac12$", "undefined"], 0));
  q.push(mc("easy", "In which quadrants is $\\sin\\theta$ positive?", ["I and II", "III and IV", "I and IV", "II and III"], 0));
  q.push(mc("easy", "$\\tan45^\\circ=$", ["$1$", "$0$", "$\\sqrt3$", "$\\frac12$"], 0));
  q.push(ms("easy", "Which are positive in Quadrant I?", ["$\\sin$", "$\\cos$", "$\\tan$", "none"], [0, 1, 2]));
  q.push(ms("easy", "Which have reference angle $30^\\circ$?", ["$150^\\circ$", "$210^\\circ$", "$330^\\circ$", "$45^\\circ$"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $\\tfrac12$?", ["$\\sin30^\\circ$", "$\\cos60^\\circ$", "$\\sin150^\\circ$", "$\\cos30^\\circ$"], [0, 1, 2]));
  q.push(tf("easy", "The reference angle is always acute.", true));
  q.push(tf("easy", "$\\cos0^\\circ=1$.", true));
  q.push(tf("easy", "$\\sin180^\\circ=1$.", false, "$\\sin180^\\circ=0$."));
  q.push(tf("easy", "Sine is negative in Quadrants III and IV.", true));
  q.push(num("easy", "Reference angle of $210^\\circ$ (degrees).", 30, 0));
  q.push(num("easy", "Reference angle of $300^\\circ$.", 60, 0));
  q.push(num("easy", "$\\sin90^\\circ$ as a value.", 1, 0));
  q.push(num("easy", "$\\cos0^\\circ$.", 1, 0));
  q.push(fill("easy", "CAST: in Quadrant II only ___ is positive (sin/cos/tan).", ["sin"]));
  q.push(fill("easy", "Reference angle of $135^\\circ$ is ___$^\\circ$.", ["45"]));
  // MEDIUM
  q.push(mc("medium", "$\\sin150^\\circ=$", ["$\\frac12$", "$-\\frac12$", "$\\frac{\\sqrt3}{2}$", "$-\\frac{\\sqrt3}{2}$"], 0));
  q.push(mc("medium", "$\\cos150^\\circ=$", ["$-\\frac{\\sqrt3}{2}$", "$\\frac{\\sqrt3}{2}$", "$-\\frac12$", "$\\frac12$"], 0));
  q.push(mc("medium", "$\\sin240^\\circ=$", ["$-\\frac{\\sqrt3}{2}$", "$\\frac{\\sqrt3}{2}$", "$-\\frac12$", "$\\frac12$"], 0));
  q.push(mc("medium", "$\\cos225^\\circ=$", ["$-\\frac{\\sqrt2}{2}$", "$\\frac{\\sqrt2}{2}$", "$-\\frac12$", "$\\frac12$"], 0));
  q.push(mc("medium", "$\\tan135^\\circ=$", ["$-1$", "$1$", "$-\\sqrt3$", "$\\sqrt3$"], 0));
  q.push(mc("medium", "If $\\sin\\theta=\\tfrac35$ with $\\theta$ in QII, then $\\cos\\theta=$", ["$-\\frac45$", "$\\frac45$", "$-\\frac35$", "$\\frac35$"], 0));
  q.push(mc("medium", "Solve $\\sin\\theta=\\tfrac12$ for $0^\\circ\\le\\theta<360^\\circ$:", ["$30^\\circ,150^\\circ$", "$30^\\circ$", "$150^\\circ$", "$30^\\circ,210^\\circ$"], 0));
  q.push(mc("medium", "Solve $\\cos\\theta=-\\tfrac12$:", ["$120^\\circ,240^\\circ$", "$60^\\circ,300^\\circ$", "$120^\\circ$", "$240^\\circ$"], 0));
  q.push(ms("medium", "Which are solutions of $\\sin\\theta=\\tfrac12$ in $[0^\\circ,360^\\circ)$?", ["$30^\\circ$", "$150^\\circ$", "$210^\\circ$", "$330^\\circ$"], [0, 1]));
  q.push(ms("medium", "Which are negative?", ["$\\sin240^\\circ$", "$\\cos150^\\circ$", "$\\tan135^\\circ$", "$\\sin30^\\circ$"], [0, 1, 2]));
  q.push(tf("medium", "$\\sin150^\\circ=\\tfrac12$.", true));
  q.push(tf("medium", "$\\cos225^\\circ=-\\tfrac{\\sqrt2}{2}$.", true));
  q.push(num("medium", "Solve $\\tan\\theta=1$ in $[0^\\circ,360^\\circ)$: the QI solution (degrees).", 45, 0));
  q.push(num("medium", "If $\\cos\\theta=\\tfrac45$ in QIV, then $\\sin\\theta=$ ___ (decimal).", -0.6, 0.01));
  q.push(num("medium", "$\\sin300^\\circ$ as a decimal (3 dp).", -0.866, 0.005));
  q.push(num("medium", "Solve $\\cos\\theta=0$ in $[0^\\circ,360^\\circ)$: the smallest solution.", 90, 0));
  q.push(fill("medium", "$\\cos120^\\circ=$ ___ (like -1/2).", ["-1/2"]));
  q.push(fill("medium", "Solve $\\tan\\theta=1$: solutions are $45^\\circ$ and ___$^\\circ$.", ["225"]));
  q.push(mc("medium", "Solve $\\cos\\theta=0$ in $[0^\\circ,360^\\circ)$:", ["$90^\\circ,270^\\circ$", "$0^\\circ,180^\\circ$", "$90^\\circ$", "$180^\\circ$"], 0));
  q.push(mc("medium", "$\\sin210^\\circ=$", ["$-\\frac12$", "$\\frac12$", "$-\\frac{\\sqrt3}{2}$", "$\\frac{\\sqrt3}{2}$"], 0));
  // HARD
  q.push(mc("hard", "If $\\cos\\theta=-\\tfrac{5}{13}$ with $\\theta$ in QIII, then $\\sin\\theta=$", ["$-\\frac{12}{13}$", "$\\frac{12}{13}$", "$-\\frac{5}{13}$", "$\\frac{5}{13}$"], 0));
  q.push(mc("hard", "If $\\sin\\theta=-0.6$ with $\\theta$ in QIII, then $\\cos\\theta=$", ["$-0.8$", "$0.8$", "$-0.6$", "$0.6$"], 0));
  q.push(mc("hard", "If $\\tan\\theta=\\tfrac{12}{5}$ with $\\theta$ in QIII, then $\\sin\\theta=$", ["$-\\frac{12}{13}$", "$\\frac{12}{13}$", "$-\\frac{5}{13}$", "$\\frac{5}{13}$"], 0));
  q.push(mc("hard", "Solve $\\tan\\theta=-1$ in $[0^\\circ,360^\\circ)$:", ["$135^\\circ,315^\\circ$", "$45^\\circ,225^\\circ$", "$135^\\circ$", "$315^\\circ$"], 0));
  q.push(mc("hard", "Solve $\\sin\\theta=-\\tfrac{\\sqrt3}{2}$ in $[0^\\circ,360^\\circ)$:", ["$240^\\circ,300^\\circ$", "$60^\\circ,120^\\circ$", "$240^\\circ$", "$300^\\circ$"], 0));
  q.push(mc("hard", "Solve $2\\cos\\theta=\\sqrt3$ in $[0^\\circ,360^\\circ)$:", ["$30^\\circ,330^\\circ$", "$30^\\circ,150^\\circ$", "$60^\\circ,300^\\circ$", "$30^\\circ$"], 0));
  q.push(mc("hard", "Solve $2\\sin\\theta+1=0$ in $[0^\\circ,360^\\circ)$:", ["$210^\\circ,330^\\circ$", "$30^\\circ,150^\\circ$", "$210^\\circ$", "$330^\\circ$"], 0));
  q.push(mc("hard", "If $\\sin\\theta=\\tfrac{5}{13}$ ($\\theta$ acute), then $\\tan\\theta=$", ["$\\frac{5}{12}$", "$\\frac{12}{5}$", "$\\frac{13}{5}$", "$\\frac{5}{13}$"], 0));
  q.push(ms("hard", "Which solve $\\cos\\theta=-\\tfrac12$ in $[0^\\circ,360^\\circ)$?", ["$120^\\circ$", "$240^\\circ$", "$60^\\circ$", "$300^\\circ$"], [0, 1]));
  q.push(ms("hard", "For $\\sin\\theta=-\\tfrac12$, which are solutions in $[0^\\circ,360^\\circ)$?", ["$210^\\circ$", "$330^\\circ$", "$30^\\circ$", "$150^\\circ$"], [0, 1]));
  q.push(tf("hard", "If $\\cos\\theta=-\\tfrac{5}{13}$ in QIII, then $\\tan\\theta=\\tfrac{12}{5}$.", true));
  q.push(tf("hard", "$\\sin\\theta=2$ has no solution.", true));
  q.push(tf("hard", "$\\cos^2\\theta+\\sin^2\\theta=1$.", true));
  q.push(tf("hard", "In Quadrant III, both sine and cosine are positive.", false, "Both are negative."));
  q.push(num("hard", "If $\\cos\\theta=-\\tfrac{5}{13}$ in QIII, then $\\sin\\theta=$ ___ (4 dp).", -0.9231, 0.001));
  q.push(num("hard", "Solve $2\\cos\\theta=\\sqrt3$: the QI solution (degrees).", 30, 0));
  q.push(num("hard", "If $\\sin\\theta=\\tfrac{5}{13}$ (acute), then $\\tan\\theta=$ ___ (4 dp).", 0.4167, 0.001));
  q.push(num("hard", "Solve $\\sin\\theta=-\\tfrac{\\sqrt3}{2}$ in $[0^\\circ,360^\\circ)$: the smaller solution.", 240, 0));
  q.push(fill("hard", "If $\\tan\\theta=\\tfrac{12}{5}$ in QIII, then $\\sin\\theta=$ ___ (like -12/13).", ["-12/13"]));
  q.push(fill("hard", "Solve $2\\sin\\theta+1=0$: solutions $210^\\circ$ and ___$^\\circ$.", ["330"]));
  return q;
}

// ── 3.2 The Sine Law & the Ambiguous Case ─────────────────────
function g32() {
  const q = [];
  // EASY
  q.push(mc("easy", "The sine law is:", ["$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$", "$\\frac{a}{\\cos A}=\\frac{b}{\\cos B}$", "$a^2=b^2+c^2$", "$a\\sin A=b\\sin B$"], 0));
  q.push(mc("easy", "To use the sine law you need:", ["a side and its opposite angle", "3 sides", "3 angles", "2 sides only"], 0));
  q.push(mc("easy", "If $A=40^\\circ,B=60^\\circ$, then $C=$", ["$80^\\circ$", "$100^\\circ$", "$90^\\circ$", "$20^\\circ$"], 0));
  q.push(mc("easy", "In any triangle, the angles sum to:", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"], 0));
  q.push(mc("easy", "The largest side is opposite the:", ["largest angle", "smallest angle", "right angle", "first angle"], 0));
  q.push(mc("easy", "If $\\sin B>1$, then there is:", ["no triangle", "one triangle", "two triangles", "a right angle"], 0));
  q.push(mc("easy", "The SSA case may give:", ["0, 1, or 2 triangles", "exactly 1", "always 2", "3"], 0));
  q.push(ms("easy", "Which are valid sine-law ratios?", ["$a/\\sin A$", "$b/\\sin B$", "$c/\\sin C$", "$a/\\sin B$"], [0, 1, 2]));
  q.push(ms("easy", "When can the ambiguous case occur?", ["2 sides + a non-included angle", "given $a,b,A$", "given three angles", "the SSA situation"], [0, 1, 3]));
  q.push(ms("easy", "True about triangles?", ["angles sum to $180^\\circ$", "largest side ↔ largest angle", "the sine law needs a matched pair", "all angles equal"], [0, 1, 2]));
  q.push(tf("easy", "The sine law relates each side to the sine of its opposite angle.", true));
  q.push(tf("easy", "If $A=50^\\circ,B=60^\\circ$, then $C=70^\\circ$.", true));
  q.push(tf("easy", "SSA always gives exactly one triangle.", false, "It can give 0, 1, or 2."));
  q.push(tf("easy", "The sum of the angles in a triangle is $180^\\circ$.", true));
  q.push(num("easy", "If $A=40^\\circ,B=60^\\circ$, find $C$ (degrees).", 80, 0));
  q.push(num("easy", "If $A=35^\\circ,B=85^\\circ$, find $C$.", 60, 0));
  q.push(num("easy", "If $A=25^\\circ,C=100^\\circ$, find $B$.", 55, 0));
  q.push(num("easy", "If $B=70^\\circ,C=50^\\circ$, find $A$.", 60, 0));
  q.push(fill("easy", "The sine law: $a/\\sin A=b/\\sin$ ___.", ["B"]));
  q.push(fill("easy", "If $A=45^\\circ,B=45^\\circ$, then $C=$ ___$^\\circ$.", ["90"]));
  // MEDIUM
  q.push(mc("medium", "$A=40^\\circ,B=60^\\circ,a=10$: find $b$ (1 dp).", ["$13.5$", "$11.2$", "$15.3$", "$8.7$"], 0));
  q.push(mc("medium", "$A=40^\\circ,a=10,C=80^\\circ$: find $c$.", ["$15.3$", "$13.5$", "$12.0$", "$10.0$"], 0));
  q.push(mc("medium", "$a=8,b=6,A=50^\\circ$: find $B$.", ["$35.1^\\circ$", "$44.9^\\circ$", "$41.0^\\circ$", "$50.0^\\circ$"], 0));
  q.push(mc("medium", "$A=35^\\circ,B=85^\\circ,a=12$: find $b$.", ["$20.8$", "$14.6$", "$12.0$", "$18.0$"], 0));
  q.push(mc("medium", "$a=9,b=7,A=50^\\circ$: find $B$.", ["$36.6^\\circ$", "$43.4^\\circ$", "$30.0^\\circ$", "$53.4^\\circ$"], 0));
  q.push(mc("medium", "$A=25^\\circ,C=100^\\circ,c=15$: find $a$.", ["$6.4$", "$9.1$", "$15.0$", "$4.2$"], 0));
  q.push(mc("medium", "$B=70^\\circ,C=50^\\circ,b=18$: find $c$.", ["$14.7$", "$19.2$", "$18.0$", "$12.5$"], 0));
  q.push(mc("medium", "$A=55^\\circ,B=65^\\circ,c=20$: find $C$ first.", ["$60^\\circ$", "$70^\\circ$", "$50^\\circ$", "$80^\\circ$"], 0));
  q.push(ms("medium", "For $A=40^\\circ,B=60^\\circ,a=10$, which are true?", ["$C=80^\\circ$", "$b\\approx13.5$", "$c\\approx15.3$", "$b<a$"], [0, 1, 2]));
  q.push(ms("medium", "Which give one triangle (SSA with $a\\ge b$)?", ["$a=12,b=8,A=55^\\circ$", "$a=10,b=6,A=30^\\circ$", "$a=5,b=10,A=70^\\circ$", "$a=7,b=10,A=40^\\circ$"], [0, 1]));
  q.push(tf("medium", "For $A=40^\\circ,B=60^\\circ,a=10$, $b\\approx13.5$.", true));
  q.push(tf("medium", "For $a=8,b=6,A=50^\\circ$, $B\\approx35.1^\\circ$.", true));
  q.push(num("medium", "$A=40^\\circ,B=60^\\circ,a=10$: find $b$ (1 dp).", 13.5, 0.1));
  q.push(num("medium", "$A=35^\\circ,B=85^\\circ,a=12$: find $b$ (1 dp).", 20.8, 0.1));
  q.push(num("medium", "$a=9,b=7,A=50^\\circ$: find $B$ (1 dp).", 36.6, 0.2));
  q.push(num("medium", "$A=55^\\circ,B=65^\\circ,c=20$: find $a$ (1 dp).", 18.9, 0.2));
  q.push(fill("medium", "$A=40^\\circ,B=60^\\circ,a=10$: $c\\approx$ ___ (1 dp).", ["15.3"]));
  q.push(fill("medium", "$A=25^\\circ,C=100^\\circ,c=15$: $a\\approx$ ___ (1 dp).", ["6.4"]));
  q.push(mc("medium", "$A=48^\\circ,a=20,b=15$: find $B$.", ["$33.8^\\circ$", "$41.0^\\circ$", "$56.2^\\circ$", "$48.0^\\circ$"], 0));
  q.push(mc("medium", "$a=10,b=6,A=30^\\circ$: find $B$.", ["$17.5^\\circ$", "$30.0^\\circ$", "$20.5^\\circ$", "$35.0^\\circ$"], 0));
  // HARD
  q.push(mc("hard", "$a=7,b=10,A=40^\\circ$: how many triangles?", ["$2$", "$1$", "$0$", "$3$"], 0));
  q.push(mc("hard", "$a=7,b=10,A=40^\\circ$: the two values of $B$.", ["$66.7^\\circ$ or $113.3^\\circ$", "$66.7^\\circ$", "$113.3^\\circ$", "$45^\\circ$"], 0));
  q.push(mc("hard", "$a=5,b=10,A=70^\\circ$: how many triangles?", ["$0$", "$1$", "$2$", "$3$"], 0));
  q.push(mc("hard", "$a=5,b=12,A=60^\\circ$: how many triangles?", ["$0$", "$1$", "$2$", "$3$"], 0));
  q.push(mc("hard", "$a=6,b=8,A=40^\\circ$: the two values of $B$.", ["$59.0^\\circ$ or $121.0^\\circ$", "$59.0^\\circ$", "$121.0^\\circ$", "$30^\\circ$"], 0));
  q.push(mc("hard", "$a=7,b=9,A=38^\\circ$: the two values of $B$.", ["$52.3^\\circ$ or $127.7^\\circ$", "$52.3^\\circ$", "$127.7^\\circ$", "$45^\\circ$"], 0));
  q.push(mc("hard", "$a=14,b=10,A=45^\\circ$: how many triangles?", ["$1$", "$0$", "$2$", "$3$"], 0));
  q.push(mc("hard", "$a=8,b=11,A=44^\\circ$: find $B$ (acute).", ["$72.8^\\circ$", "$52.3^\\circ$", "$44.0^\\circ$", "$60.0^\\circ$"], 0));
  q.push(ms("hard", "For the SSA case $a=7,b=10,A=40^\\circ$, which are true?", ["$\\sin B\\approx0.92$", "two triangles", "$B\\approx66.7^\\circ$ or $113.3^\\circ$", "no solution"], [0, 1, 2]));
  q.push(ms("hard", "Which produce NO triangle?", ["$a=5,b=10,A=70^\\circ$", "$a=5,b=12,A=60^\\circ$", "$a=12,b=8,A=55^\\circ$", "$a=7,b=10,A=40^\\circ$"], [0, 1]));
  q.push(tf("hard", "$a=7,b=10,A=40^\\circ$ gives two triangles.", true));
  q.push(tf("hard", "When $a<b$ and $a<b\\sin A$, there is no triangle.", true));
  q.push(tf("hard", "When $a\\ge b$ in the SSA case, there is exactly one triangle.", true));
  q.push(tf("hard", "$\\sin B=1.5$ corresponds to a valid angle.", false, "Sine cannot exceed 1."));
  q.push(num("hard", "$a=6,b=8,A=40^\\circ$: the acute value of $B$ (1 dp).", 59.0, 0.3));
  q.push(num("hard", "$a=7,b=9,A=38^\\circ$: the obtuse value of $B$ (1 dp).", 127.7, 0.3));
  q.push(num("hard", "$a=8,b=11,A=44^\\circ$: find $C$ after $B\\approx72.8^\\circ$ (1 dp).", 63.2, 0.3));
  q.push(num("hard", "$a=8,b=11,A=44^\\circ$: find $c$ (1 dp).", 10.3, 0.2));
  q.push(fill("hard", "$a=7,b=10,A=40^\\circ$: $\\sin B\\approx$ ___ (2 dp).", ["0.92"]));
  q.push(fill("hard", "$a=6,b=8,A=40^\\circ$: the obtuse $B\\approx$ ___$^\\circ$ (1 dp).", ["121.0", "121"]));
  return q;
}

// ── 3.3 The Cosine Law ────────────────────────────────────────
function g33() {
  const q = [];
  // EASY
  q.push(mc("easy", "The cosine law is:", ["$a^2=b^2+c^2-2bc\\cos A$", "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}$", "$a^2=b^2+c^2$", "$a=b+c$"], 0));
  q.push(mc("easy", "Use the cosine law when given:", ["SAS or SSS", "AAS", "ASA", "a matched pair"], 0));
  q.push(mc("easy", "With $C=90^\\circ$, $c^2=a^2+b^2-2ab\\cos C$ becomes:", ["$c^2=a^2+b^2$", "$c^2=a^2-b^2$", "$c=a+b$", "$c^2=2ab$"], 0));
  q.push(mc("easy", "$\\cos60^\\circ=$", ["$\\frac12$", "$\\frac{\\sqrt3}{2}$", "$0$", "$1$"], 0));
  q.push(mc("easy", "To find an angle from 3 sides, use:", ["$\\cos A=\\frac{b^2+c^2-a^2}{2bc}$", "the sine law", "$a=b$", "Pythagoras"], 0));
  q.push(mc("easy", "The largest angle is opposite:", ["the longest side", "the shortest side", "the first side", "any side"], 0));
  q.push(mc("easy", "If $a^2=b^2+c^2$, the triangle is:", ["right-angled", "equilateral", "isosceles", "obtuse"], 0));
  q.push(ms("easy", "When is the cosine law used?", ["SAS", "SSS", "two sides + included angle", "AAS"], [0, 1, 2]));
  q.push(ms("easy", "Which forms are correct?", ["$a^2=b^2+c^2-2bc\\cos A$", "$b^2=a^2+c^2-2ac\\cos B$", "$c^2=a^2+b^2-2ab\\cos C$", "$a^2=b^2+c^2+2bc\\cos A$"], [0, 1, 2]));
  q.push(ms("easy", "To find the largest angle, which do you use?", ["the angle opposite the longest side", "$\\cos$ of that angle", "$a$ in $a^2=\\dots$ if $a$ largest", "the shortest side"], [0, 1, 2]));
  q.push(tf("easy", "The cosine law works for SAS.", true));
  q.push(tf("easy", "The cosine law works for SSS.", true));
  q.push(tf("easy", "$\\cos90^\\circ=0$, so the cosine law becomes Pythagoras.", true));
  q.push(tf("easy", "The cosine law needs a matched side–angle pair.", false, "That is the sine law."));
  q.push(num("easy", "$\\cos60^\\circ$ as a decimal.", 0.5, 0.001));
  q.push(num("easy", "In $c^2=a^2+b^2-2ab\\cos C$ with $C=90^\\circ$, the last term is ___.", 0, 0));
  q.push(num("easy", "For sides 3, 4, 5, the angle opposite 5 is ___$^\\circ$.", 90, 0));
  q.push(num("easy", "$\\cos0^\\circ$.", 1, 0));
  q.push(fill("easy", "The cosine law for $b$: $b^2=a^2+c^2-2ac\\cos$ ___.", ["B"]));
  q.push(fill("easy", "The longest side is opposite the ___ angle.", ["largest"]));
  // MEDIUM
  q.push(mc("medium", "$b=7,c=9,A=60^\\circ$: find $a$.", ["$8.2$", "$10.0$", "$6.5$", "$12.0$"], 0));
  q.push(mc("medium", "$b=5,c=8,A=40^\\circ$: find $a$.", ["$5.3$", "$6.7$", "$4.0$", "$9.0$"], 0));
  q.push(mc("medium", "$a=6,b=8,c=10$: find $A$.", ["$36.9^\\circ$", "$53.1^\\circ$", "$45.0^\\circ$", "$30.0^\\circ$"], 0));
  q.push(mc("medium", "$a=8,b=5,c=7$: find $A$.", ["$81.8^\\circ$", "$60.0^\\circ$", "$38.2^\\circ$", "$90.0^\\circ$"], 0));
  q.push(mc("medium", "$a=5,b=6,c=7$: find the largest angle.", ["$78.5^\\circ$", "$57.1^\\circ$", "$44.4^\\circ$", "$90.0^\\circ$"], 0));
  q.push(mc("medium", "$b=8,c=11,A=95^\\circ$: find $a$.", ["$14.2$", "$12.0$", "$10.5$", "$16.0$"], 0));
  q.push(mc("medium", "$a=9,b=12,c=15$: find $C$.", ["$90^\\circ$", "$60^\\circ$", "$75^\\circ$", "$45^\\circ$"], 0));
  q.push(mc("medium", "$b=12,c=15,A=50^\\circ$: find $a$.", ["$11.7$", "$9.5$", "$13.2$", "$15.0$"], 0));
  q.push(ms("medium", "For $a=6,b=8,c=10$, which are true?", ["right triangle", "angle opposite 10 is $90^\\circ$", "$A\\approx36.9^\\circ$", "equilateral"], [0, 1, 2]));
  q.push(ms("medium", "Which use the cosine law directly?", ["$b=7,c=9,A=60^\\circ$ for $a$", "$a=8,b=5,c=7$ for $A$", "$A=40^\\circ,B=60^\\circ,a=10$ for $b$", "3 sides for the largest angle"], [0, 1, 3]));
  q.push(tf("medium", "$b=7,c=9,A=60^\\circ$ gives $a\\approx8.2$.", true));
  q.push(tf("medium", "$a=9,b=12,c=15$ is a right triangle.", true));
  q.push(num("medium", "$b=7,c=9,A=60^\\circ$: find $a$ (1 dp).", 8.2, 0.1));
  q.push(num("medium", "$a=5,b=6,c=7$: the largest angle (1 dp).", 78.5, 0.3));
  q.push(num("medium", "$b=12,c=15,A=50^\\circ$: find $a$ (1 dp).", 11.7, 0.1));
  q.push(num("medium", "$a=6,b=8,c=10$: find $A$ (1 dp).", 36.9, 0.2));
  q.push(fill("medium", "$a=8,b=5,c=7$: find $A\\approx$ ___$^\\circ$ (1 dp).", ["81.8"]));
  q.push(fill("medium", "$a=9,b=12,c=15$: the angle opposite 15 is ___$^\\circ$.", ["90"]));
  q.push(mc("medium", "The shorter diagonal of a parallelogram with sides 6, 10 and $70^\\circ$ between:", ["$9.7$", "$12.5$", "$8.0$", "$14.0$"], 0));
  q.push(mc("medium", "$b=10,c=14,A=35^\\circ$: find $a$.", ["$8.2$", "$6.5$", "$10.0$", "$12.0$"], 0));
  // HARD
  q.push(mc("hard", "$b=13,c=20,A=110^\\circ$: find $a$.", ["$27.3$", "$24.0$", "$30.0$", "$18.0$"], 0));
  q.push(mc("hard", "$a=10,b=10,c=12$: find $C$.", ["$73.7^\\circ$", "$60.0^\\circ$", "$53.1^\\circ$", "$90.0^\\circ$"], 0));
  q.push(mc("hard", "$a=8,b=11,c=6$: find the largest angle.", ["$102.6^\\circ$", "$95.0^\\circ$", "$78.5^\\circ$", "$110.0^\\circ$"], 0));
  q.push(mc("hard", "$a=4,b=5,c=6$: find the smallest angle.", ["$41.4^\\circ$", "$55.8^\\circ$", "$82.8^\\circ$", "$30.0^\\circ$"], 0));
  q.push(mc("hard", "$a=7,b=9,C=48^\\circ$: find $c$.", ["$6.7$", "$8.0$", "$5.5$", "$10.0$"], 0));
  q.push(mc("hard", "A triangle with sides 5, 12, 13 has a right angle opposite:", ["$13$", "$12$", "$5$", "none"], 0));
  q.push(mc("hard", "For the largest angle of 8, 11, 6, solve $\\cos B$ with $B$ opposite:", ["$11$", "$8$", "$6$", "the shortest side"], 0));
  q.push(mc("hard", "$b=8,c=11,A=95^\\circ$: after finding $a\\approx14.2$, the triangle is:", ["obtuse ($a$ longest)", "right", "acute", "equilateral"], 0));
  q.push(ms("hard", "Which are right triangles?", ["$3,4,5$", "$5,12,13$", "$6,8,10$", "$4,5,6$"], [0, 1, 2]));
  q.push(ms("hard", "For $a=8,b=11,c=6$, which are true?", ["largest angle opposite 11", "$\\cos B<0$ (obtuse)", "$B\\approx102.6^\\circ$", "$B<90^\\circ$"], [0, 1, 2]));
  q.push(tf("hard", "$b=13,c=20,A=110^\\circ$ gives $a\\approx27.3$.", true));
  q.push(tf("hard", "For 4, 5, 6 the smallest angle is opposite 4 ($\\approx41.4^\\circ$).", true));
  q.push(tf("hard", "If $\\cos A$ is negative, angle $A$ is obtuse.", true));
  q.push(tf("hard", "$4,5,6$ forms a right triangle.", false, "$6^2=36\\ne41=4^2+5^2$."));
  q.push(num("hard", "$b=13,c=20,A=110^\\circ$: find $a$ (1 dp).", 27.3, 0.2));
  q.push(num("hard", "$a=8,b=11,c=6$: the largest angle (1 dp).", 102.6, 0.3));
  q.push(num("hard", "$a=4,b=5,c=6$: the smallest angle (1 dp).", 41.4, 0.3));
  q.push(num("hard", "$a=7,b=9,C=48^\\circ$: find $c$ (1 dp).", 6.7, 0.1));
  q.push(fill("hard", "$a=10,b=10,c=12$: find $C\\approx$ ___$^\\circ$ (1 dp).", ["73.7"]));
  q.push(fill("hard", "For a triangle 8, 11, 6, the largest angle $\\approx$ ___$^\\circ$ (1 dp).", ["102.6"]));
  return q;
}

// ── 3.4 Solving Oblique-Triangle Problems ─────────────────────
function g34() {
  const q = [];
  // EASY
  q.push(mc("easy", "Bearings are measured:", ["clockwise from north", "counterclockwise", "from east", "from south"], 0));
  q.push(mc("easy", "To solve a real triangle problem, first:", ["sketch and label", "guess", "measure", "skip it"], 0));
  q.push(mc("easy", "An angle of elevation is measured from:", ["the horizontal, upward", "the vertical", "the ground, down", "north"], 0));
  q.push(mc("easy", "SAS problems use:", ["the cosine law", "the sine law", "Pythagoras only", "no law"], 0));
  q.push(mc("easy", "A matched side–angle pair suggests:", ["the sine law", "the cosine law", "Pythagoras", "the area formula"], 0));
  q.push(mc("easy", "The area of a triangle with sides $a,b$ and included $C$:", ["$\\frac12ab\\sin C$", "$\\frac12ab$", "$\\frac12bh$ only", "$abc$"], 0));
  q.push(mc("easy", "Two ships leave port at an angle — find the distance apart with:", ["the cosine law", "the sine law", "Pythagoras always", "no law"], 0));
  q.push(ms("easy", "Which are good first steps?", ["sketch the triangle", "label given parts", "choose a law", "compute randomly"], [0, 1, 2]));
  q.push(ms("easy", "Which use the cosine law?", ["two sides + included angle", "three sides", "distance across a lake (SAS)", "a matched pair"], [0, 1, 2]));
  q.push(ms("easy", "The area $\\frac12ab\\sin C$ needs:", ["two sides", "the included angle", "all three angles", "the height only"], [0, 1]));
  q.push(tf("easy", "A sketch helps set up a triangle problem.", true));
  q.push(tf("easy", "The area formula $\\frac12ab\\sin C$ needs two sides and the included angle.", true));
  q.push(tf("easy", "Bearings are measured from the east.", false, "From north, clockwise."));
  q.push(tf("easy", "SSS problems use the cosine law.", true));
  q.push(num("easy", "Two sides 20 and 30 with a $60^\\circ$ angle: $c^2=400+900-1200\\cos60^\\circ=$ ___.", 700, 0));
  q.push(num("easy", "Triangle area $\\frac12\\cdot10\\cdot8\\cdot\\sin90^\\circ=$ ___.", 40, 0));
  q.push(num("easy", "If two angles are $40^\\circ$ and $75^\\circ$, the third is ___$^\\circ$.", 65, 0));
  q.push(num("easy", "A triangle with legs 6 and 8 (right angle) has hypotenuse ___.", 10, 0));
  q.push(fill("easy", "Bearings are measured clockwise from ___ (direction).", ["north"]));
  q.push(fill("easy", "Triangle area $=\\frac12ab\\sin$ ___ (the included-angle letter).", ["C"]));
  // MEDIUM
  q.push(mc("medium", "Two ships leave port with $60^\\circ$ between, sailing 20 and 30 km. Distance apart:", ["$26.5$ km", "$35.0$ km", "$50.0$ km", "$10.0$ km"], 0));
  q.push(mc("medium", "A triangular lot has sides 40, 55 with $80^\\circ$ between. Third side:", ["$62.1$ m", "$70.0$ m", "$95.0$ m", "$48.0$ m"], 0));
  q.push(mc("medium", "From two points 100 m apart, a rock is at $40^\\circ$ and $75^\\circ$. Distance from the first point:", ["$106.6$ m", "$100.0$ m", "$85.0$ m", "$120.0$ m"], 0));
  q.push(mc("medium", "Area of a lot with sides 40, 55 and $80^\\circ$:", ["$1083$ m²", "$2200$ m²", "$900$ m²", "$1500$ m²"], 0));
  q.push(mc("medium", "Two roads at $55^\\circ$; cars go 80 and 110 km. Distance apart:", ["$91.7$ km", "$190$ km", "$130$ km", "$70$ km"], 0));
  q.push(mc("medium", "A triangular field, sides 60, 80, angle $65^\\circ$: third side.", ["$77.1$ m", "$100$ m", "$140$ m", "$50$ m"], 0));
  q.push(mc("medium", "Area of a triangle, sides 9, 12, included $50^\\circ$:", ["$41.4$ units²", "$54$ units²", "$108$ units²", "$30$ units²"], 0));
  q.push(mc("medium", "Two ships at $48^\\circ$, sailing 15 and 22 km: distance apart.", ["$16.4$ km", "$37$ km", "$25$ km", "$10$ km"], 0));
  q.push(ms("medium", "For two ships 20 & 30 km at $60^\\circ$, which are true?", ["distance $=\\sqrt{700}$", "$\\approx26.5$ km", "use the cosine law", "use the sine law"], [0, 1, 2]));
  q.push(ms("medium", "Which need the cosine law?", ["sides 40, 55 + $80^\\circ$", "two ships at $48^\\circ$", "field 60, 80, $65^\\circ$", "a matched pair"], [0, 1, 2]));
  q.push(tf("medium", "Two ships 20, 30 km at $60^\\circ$ are $\\approx26.5$ km apart.", true));
  q.push(tf("medium", "The area of a lot with sides 40, 55 and $80^\\circ$ is $\\approx1083$ m².", true));
  q.push(num("medium", "Two ships 20, 30 km at $60^\\circ$: distance apart (1 dp).", 26.5, 0.1));
  q.push(num("medium", "Triangular lot sides 40, 55, angle $80^\\circ$: third side (1 dp).", 62.1, 0.2));
  q.push(num("medium", "Area of a triangle, sides 9, 12, included $50^\\circ$ (whole).", 41, 1));
  q.push(num("medium", "Two roads at $55^\\circ$, 80 and 110 km: distance apart (1 dp).", 91.7, 0.2));
  q.push(fill("medium", "A field with sides 60, 80 and $65^\\circ$ between has third side $\\approx$ ___ m (1 dp).", ["77.1"]));
  q.push(fill("medium", "Area $=\\frac12\\cdot9\\cdot12\\cdot\\sin50^\\circ\\approx$ ___ (whole).", ["41"]));
  q.push(mc("medium", "From two points 200 m apart, a tower is at $35^\\circ$ and $48^\\circ$. Distance from the nearer point:", ["$115.6$ m", "$200$ m", "$150$ m", "$90$ m"], 0));
  q.push(mc("medium", "Area of a lot with sides 30, 45 and $70^\\circ$ between:", ["$634$ m²", "$675$ m²", "$900$ m²", "$450$ m²"], 0));
  // HARD
  q.push(mc("hard", "A plane flies 200 km, turns to an interior $110^\\circ$, flies 150 km. Distance from start:", ["$288$ km", "$350$ km", "$400$ km", "$250$ km"], 0));
  q.push(mc("hard", "A plane flies 300 km, interior $120^\\circ$, flies 200 km. Distance from start:", ["$436$ km", "$500$ km", "$250$ km", "$600$ km"], 0));
  q.push(mc("hard", "Distance between landmarks 500 and 650 m with $72^\\circ$ between:", ["$686.8$ m", "$1150$ m", "$800$ m", "$500$ m"], 0));
  q.push(mc("hard", "A parallelogram, sides 8, 14, $60^\\circ$ angle: longer diagonal.", ["$19.3$", "$12.0$", "$22.0$", "$16.0$"], 0));
  q.push(mc("hard", "Two observers 400 m apart sight a balloon at $40^\\circ$ and $65^\\circ$ (interior angles). Distance from the first:", ["$266.2$ m", "$400$ m", "$300$ m", "$180$ m"], 0));
  q.push(mc("hard", "A triangle with sides 12, 15, 20: its largest angle.", ["$94.9^\\circ$", "$78.5^\\circ$", "$110^\\circ$", "$90^\\circ$"], 0));
  q.push(mc("hard", "Two trails diverge at $75^\\circ$; hikers go 5 and 7 km. Distance apart:", ["$7.5$ km", "$12$ km", "$9$ km", "$6$ km"], 0));
  q.push(mc("hard", "For observers with interior angles $40^\\circ$ and $65^\\circ$, the angle at the balloon is:", ["$75^\\circ$", "$105^\\circ$", "$25^\\circ$", "$115^\\circ$"], 0));
  q.push(ms("hard", "Which distances use the cosine law (SAS)?", ["ships at $48^\\circ$", "plane turning $110^\\circ$", "parallelogram diagonal", "tower by two angles"], [0, 1, 2]));
  q.push(ms("hard", "For a plane 300 km, interior $120^\\circ$, 200 km, which are true?", ["cosine law", "$\\sqrt{300^2+200^2-2(300)(200)\\cos120^\\circ}$", "$\\approx436$ km", "sine law"], [0, 1, 2]));
  q.push(tf("hard", "A plane 200 km, $110^\\circ$, 150 km ends $\\approx288$ km from start.", true));
  q.push(tf("hard", "The largest angle of 12, 15, 20 is $\\approx94.9^\\circ$.", true));
  q.push(tf("hard", "Observers with interior angles $40^\\circ$ and $65^\\circ$ subtend $75^\\circ$ at the balloon.", true));
  q.push(tf("hard", "Distance-across-a-lake (two sides + included angle) uses the sine law.", false, "It uses the cosine law."));
  q.push(num("hard", "A plane 300 km, interior $120^\\circ$, 200 km: distance from start (whole).", 436, 1));
  q.push(num("hard", "Landmarks 500, 650 m at $72^\\circ$: distance between (1 dp).", 686.8, 0.3));
  q.push(num("hard", "Largest angle of triangle 12, 15, 20 (1 dp).", 94.9, 0.3));
  q.push(num("hard", "Two trails at $75^\\circ$, 5 and 7 km: distance apart (1 dp).", 7.5, 0.1));
  q.push(fill("hard", "A plane 200 km, $110^\\circ$, 150 km lands $\\approx$ ___ km from start (whole).", ["288"]));
  q.push(fill("hard", "Balloon at $40^\\circ$ & $65^\\circ$ (interior) from 400 m apart: distance from first observer $\\approx$ ___ m (1 dp).", ["266.2"]));
  return q;
}

// ── 3.5 Graphs of Sinusoidal Functions ────────────────────────
function g35() {
  const q = [];
  // EASY
  q.push(mc("easy", "Amplitude of $y=3\\sin x$:", ["$3$", "$1$", "$6$", "$0$"], 0));
  q.push(mc("easy", "Period of $y=\\sin x$ (degrees):", ["$360^\\circ$", "$180^\\circ$", "$90^\\circ$", "$720^\\circ$"], 0));
  q.push(mc("easy", "Midline of $y=\\sin x+5$:", ["$y=5$", "$y=0$", "$y=1$", "$y=6$"], 0));
  q.push(mc("easy", "Max of $y=\\sin x$:", ["$1$", "$0$", "$2$", "$-1$"], 0));
  q.push(mc("easy", "Min of $y=\\cos x$:", ["$-1$", "$0$", "$1$", "$-2$"], 0));
  q.push(mc("easy", "Amplitude of $y=-4\\sin x$:", ["$4$", "$-4$", "$8$", "$2$"], 0));
  q.push(mc("easy", "Period of $y=\\cos(2x)$:", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$720^\\circ$"], 0));
  q.push(ms("easy", "For $y=3\\sin x$, which are true?", ["amplitude 3", "period $360^\\circ$", "max 3", "min $-3$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which have amplitude 2?", ["$y=2\\sin x$", "$y=-2\\cos x$", "$y=2\\sin x+1$", "$y=3\\sin x$"], [0, 1, 2]));
  q.push(ms("easy", "Which have period $360^\\circ$?", ["$y=\\sin x$", "$y=\\cos x$", "$y=2\\sin x$", "$y=\\sin(2x)$"], [0, 1, 2]));
  q.push(tf("easy", "The amplitude of $y=5\\sin x$ is 5.", true));
  q.push(tf("easy", "$y=\\sin x$ has period $360^\\circ$.", true));
  q.push(tf("easy", "The amplitude can be negative.", false, "Amplitude is $|a|$."));
  q.push(tf("easy", "The midline of $y=\\cos x-3$ is $y=-3$.", true));
  q.push(num("easy", "Amplitude of $y=7\\sin x$.", 7, 0));
  q.push(num("easy", "Period of $y=\\cos(4x)$ (degrees).", 90, 0));
  q.push(num("easy", "Max of $y=2\\sin x+3$.", 5, 0));
  q.push(num("easy", "Min of $y=2\\sin x+3$.", 1, 0));
  q.push(fill("easy", "Amplitude of $y=-6\\cos x$ is ___.", ["6"]));
  q.push(fill("easy", "Period of $y=\\sin x$ is ___$^\\circ$.", ["360"]));
  // MEDIUM
  q.push(mc("medium", "Period of $y=4\\cos(2x)$:", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$720^\\circ$"], 0));
  q.push(mc("medium", "Period of $y=\\sin(0.5x)$:", ["$720^\\circ$", "$360^\\circ$", "$180^\\circ$", "$90^\\circ$"], 0));
  q.push(mc("medium", "Max of $y=5\\cos x-2$:", ["$3$", "$5$", "$-2$", "$7$"], 0));
  q.push(mc("medium", "Min of $y=5\\cos x-2$:", ["$-7$", "$-2$", "$3$", "$5$"], 0));
  q.push(mc("medium", "Midline of $y=3\\sin x+4$:", ["$y=4$", "$y=3$", "$y=7$", "$y=1$"], 0));
  q.push(mc("medium", "Amplitude and period of $y=6\\sin(4x)$:", ["$6,\\ 90^\\circ$", "$6,\\ 360^\\circ$", "$4,\\ 90^\\circ$", "$6,\\ 45^\\circ$"], 0));
  q.push(mc("medium", "For $y=2\\sin x+5$, the max is:", ["$7$", "$5$", "$3$", "$2$"], 0));
  q.push(mc("medium", "For $y=4\\cos x$, the first maximum is at $x=$", ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0));
  q.push(ms("medium", "For $y=5\\cos x-2$, which are true?", ["max 3", "min $-7$", "midline $y=-2$", "amplitude 5"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which have period $180^\\circ$?", ["$y=\\sin(2x)$", "$y=\\cos(2x)$", "$y=4\\sin(2x)$", "$y=\\sin x$"], [0, 1, 2]));
  q.push(tf("medium", "$y=4\\cos(2x)$ has period $180^\\circ$.", true));
  q.push(tf("medium", "$y=5\\cos x-2$ has minimum $-7$.", true));
  q.push(num("medium", "Period of $y=\\cos(3x)$ (degrees).", 120, 0));
  q.push(num("medium", "Max of $y=2\\cos x-3$.", -1, 0));
  q.push(num("medium", "Min of $y=2\\cos x-3$.", -5, 0));
  q.push(num("medium", "Amplitude of $y=6\\sin(4x)$.", 6, 0));
  q.push(fill("medium", "Period of $y=\\sin(0.25x)$ is ___$^\\circ$.", ["1440"]));
  q.push(fill("medium", "The midline of $y=\\cos x+2$ is $y=$ ___.", ["2"]));
  q.push(mc("medium", "Max of $y=5\\sin x-1$:", ["$4$", "$5$", "$-1$", "$6$"], 0));
  q.push(mc("medium", "Amplitude and period of $y=2\\cos(0.5x)$:", ["$2,\\ 720^\\circ$", "$2,\\ 360^\\circ$", "$0.5,\\ 720^\\circ$", "$2,\\ 180^\\circ$"], 0));
  // HARD
  q.push(mc("hard", "For $y=4\\sin(2x)+1$: amplitude, period, midline, max, min:", ["$4,\\ 180^\\circ,\\ 1,\\ 5,\\ -3$", "$4,\\ 360^\\circ,\\ 1,\\ 5,\\ -3$", "$2,\\ 180^\\circ,\\ 1,\\ 5,\\ -3$", "$4,\\ 180^\\circ,\\ 0,\\ 4,\\ -4$"], 0));
  q.push(mc("hard", "For $y=-3\\cos(2x)+2$: max and min:", ["$5$ and $-1$", "$1$ and $-5$", "$2$ and $-3$", "$3$ and $-3$"], 0));
  q.push(mc("hard", "$y=a\\sin(kx)$ has amplitude 5 and period $120^\\circ$. Then $a$ and $k$:", ["$5$ and $3$", "$3$ and $5$", "$5$ and $2$", "$120$ and $5$"], 0));
  q.push(mc("hard", "Number of complete cycles of $y=\\sin(3x)$ in $[0^\\circ,360^\\circ]$:", ["$3$", "$1$", "$6$", "$2$"], 0));
  q.push(mc("hard", "For $y=2\\cos(4x)-3$, the range:", ["$[-5,-1]$", "$[-1,5]$", "$[-5,1]$", "$[-2,2]$"], 0));
  q.push(mc("hard", "$y=7\\sin(2x)$ crosses its midline how many times in one period?", ["$2$", "$1$", "$4$", "$0$"], 0));
  q.push(mc("hard", "If a sinusoid has max 8 and min 2, its amplitude and midline:", ["$3$ and $5$", "$5$ and $3$", "$6$ and $5$", "$3$ and $10$"], 0));
  q.push(mc("hard", "For $y=5\\sin(6x)$, the period:", ["$60^\\circ$", "$6^\\circ$", "$360^\\circ$", "$30^\\circ$"], 0));
  q.push(ms("hard", "For $y=4\\sin(2x)+1$, which are correct?", ["amplitude 4", "period $180^\\circ$", "midline $y=1$", "max 5"], [0, 1, 2, 3]));
  q.push(ms("hard", "If max $=10$, min $=4$, which are true?", ["amplitude 3", "midline 7", "range $[4,10]$", "amplitude 6"], [0, 1, 2]));
  q.push(tf("hard", "$y=4\\sin(2x)+1$ has period $180^\\circ$.", true));
  q.push(tf("hard", "A sinusoid with max 8, min 2 has amplitude 3 and midline 5.", true));
  q.push(tf("hard", "$y=\\sin(3x)$ completes 3 cycles in $360^\\circ$.", true));
  q.push(tf("hard", "The range of $y=2\\cos(4x)-3$ is $[-5,-1]$.", true));
  q.push(num("hard", "Number of cycles of $y=\\sin(4x)$ in $360^\\circ$.", 4, 0));
  q.push(num("hard", "The midline of a sinusoid with max 10 and min 4.", 7, 0));
  q.push(num("hard", "The amplitude of a sinusoid with max 10 and min 4.", 3, 0));
  q.push(num("hard", "Period of $y=5\\sin(6x)$ (degrees).", 60, 0));
  q.push(fill("hard", "For $y=4\\sin(2x)+1$, the minimum value is ___.", ["-3"]));
  q.push(fill("hard", "A sinusoid with max 8 and min 2 has amplitude ___.", ["3"]));
  return q;
}

// ── 3.6 Transformations of Sinusoidal Functions ───────────────
function g36() {
  const q = [];
  // EASY
  q.push(mc("easy", "In $y=\\sin(x-30^\\circ)$, the graph shifts:", ["right $30^\\circ$", "left $30^\\circ$", "up $30^\\circ$", "down $30^\\circ$"], 0));
  q.push(mc("easy", "In $y=\\sin x+2$, the shift is:", ["up 2", "down 2", "right 2", "left 2"], 0));
  q.push(mc("easy", "In $y=2\\sin x$, the 2 is a:", ["vertical stretch", "phase shift", "period change", "reflection"], 0));
  q.push(mc("easy", "$y=-\\sin x$ is:", ["reflected in the $x$-axis", "shifted up", "reflected in the $y$-axis", "stretched"], 0));
  q.push(mc("easy", "In $y=\\sin(x+45^\\circ)$, the shift is:", ["left $45^\\circ$", "right $45^\\circ$", "up $45^\\circ$", "down $45^\\circ$"], 0));
  q.push(mc("easy", "In $y=\\cos x-3$, the midline moves to:", ["$y=-3$", "$y=3$", "$y=0$", "$y=-1$"], 0));
  q.push(mc("easy", "In $y=a\\sin(k(x-d))+c$, $d$ is the:", ["phase shift", "amplitude", "period", "midline"], 0));
  q.push(ms("easy", "Which shift $y=\\sin x$ to the right?", ["$y=\\sin(x-30^\\circ)$", "$y=\\sin(x-90^\\circ)$", "$y=\\sin(x+30^\\circ)$", "$y=\\sin x$"], [0, 1]));
  q.push(ms("easy", "Which reflect $y=\\sin x$?", ["$y=-\\sin x$", "$y=\\sin(-x)$", "$y=\\sin x$", "$y=2\\sin x$"], [0, 1]));
  q.push(ms("easy", "In $y=a\\sin(k(x-d))+c$, which are shifts?", ["$d$: horizontal", "$c$: vertical", "$a$: amplitude", "$k$: period"], [0, 1]));
  q.push(tf("easy", "$y=\\sin(x-30^\\circ)$ shifts right $30^\\circ$.", true));
  q.push(tf("easy", "$y=\\cos x+4$ has midline $y=4$.", true));
  q.push(tf("easy", "$y=\\sin(x+20^\\circ)$ shifts right $20^\\circ$.", false, "It shifts left $20^\\circ$."));
  q.push(tf("easy", "The $c$ in $y=\\sin x+c$ is a vertical shift.", true));
  q.push(num("easy", "In $y=\\sin(x-50^\\circ)$, the horizontal shift (degrees, $+$ for right).", 50, 0));
  q.push(num("easy", "The midline of $y=\\sin x-6$.", -6, 0));
  q.push(num("easy", "In $y=\\cos x+8$, the midline is $y=$ ___.", 8, 0));
  q.push(num("easy", "The vertical shift in $y=2\\sin x+5$.", 5, 0));
  q.push(fill("easy", "$y=\\sin(x-60^\\circ)$ shifts ___ $60^\\circ$ (left/right).", ["right"]));
  q.push(fill("easy", "In $y=\\cos x+c$, $c$ is the ___ shift (vertical/horizontal).", ["vertical"]));
  // MEDIUM
  q.push(mc("medium", "Describe $y=2\\sin(x-30^\\circ)+1$:", ["amp 2, right $30^\\circ$, up 1", "amp 2, left $30^\\circ$, up 1", "amp 1, right $30^\\circ$", "amp 2, right $30^\\circ$, down 1"], 0));
  q.push(mc("medium", "Phase shift and period of $y=3\\cos(2(x-45^\\circ))$:", ["right $45^\\circ$, period $180^\\circ$", "left $45^\\circ$, $180^\\circ$", "right $45^\\circ$, $360^\\circ$", "right $90^\\circ$, $180^\\circ$"], 0));
  q.push(mc("medium", "Range of $y=5\\sin x-1$:", ["$[-6,4]$", "$[-1,5]$", "$[-5,5]$", "$[4,6]$"], 0));
  q.push(mc("medium", "Max and min of $y=6\\sin(2x)-1$:", ["$5$ and $-7$", "$7$ and $-5$", "$6$ and $-6$", "$5$ and $-5$"], 0));
  q.push(mc("medium", "$y=4\\sin(3x)-2$: amplitude, period, midline:", ["$4,\\ 120^\\circ,\\ -2$", "$4,\\ 360^\\circ,\\ -2$", "$3,\\ 120^\\circ,\\ -2$", "$4,\\ 120^\\circ,\\ 2$"], 0));
  q.push(mc("medium", "Describe $y=2\\cos(x+60^\\circ)$:", ["amp 2, left $60^\\circ$", "amp 2, right $60^\\circ$", "amp 60", "up 60"], 0));
  q.push(mc("medium", "Range of $y=2\\sin x+3$:", ["$[1,5]$", "$[-1,5]$", "$[2,4]$", "$[3,5]$"], 0));
  q.push(mc("medium", "Phase shift of $y=\\sin(2(x-90^\\circ))$:", ["right $90^\\circ$", "left $90^\\circ$", "right $45^\\circ$", "right $180^\\circ$"], 0));
  q.push(ms("medium", "For $y=2\\sin(x-30^\\circ)+1$, which are true?", ["amplitude 2", "right $30^\\circ$", "up 1", "midline $y=1$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which have midline $y=4$?", ["$y=\\sin x+4$", "$y=2\\cos x+4$", "$y=\\sin x-4$", "$y=3\\sin(2x)+4$"], [0, 1, 3]));
  q.push(tf("medium", "$y=3\\cos(2(x-45^\\circ))$ has period $180^\\circ$ and shifts right $45^\\circ$.", true));
  q.push(tf("medium", "$y=5\\sin x-1$ has range $[-6,4]$.", true));
  q.push(num("medium", "Period of $y=2\\cos(4x)$ (degrees).", 90, 0));
  q.push(num("medium", "Max of $y=6\\sin(2x)-1$.", 5, 0));
  q.push(num("medium", "Min of $y=6\\sin(2x)-1$.", -7, 0));
  q.push(num("medium", "The phase shift (right, degrees) of $y=\\cos(2(x-60^\\circ))$.", 60, 0));
  q.push(fill("medium", "$y=4\\sin(3x)-2$ has midline $y=$ ___.", ["-2"]));
  q.push(fill("medium", "The range of $y=2\\sin x+3$ is $[1,$ ___$]$.", ["5"]));
  q.push(mc("medium", "Write a cosine function: amplitude 4, period $120^\\circ$, midline 0:", ["$y=4\\cos(3x)$", "$y=4\\cos(x-120^\\circ)$", "$y=3\\cos(4x)$", "$y=4\\cos(120x)$"], 0));
  q.push(mc("medium", "Write a sine function: amplitude 2, period $90^\\circ$, midline 1:", ["$y=2\\sin(4x)+1$", "$y=2\\sin(90x)+1$", "$y=4\\sin(2x)+1$", "$y=2\\sin(x)+1$"], 0));
  // HARD
  q.push(mc("hard", "For $y=5\\cos(2(x-30^\\circ))-1$: amplitude, period, phase shift, max, min:", ["$5,\\ 180^\\circ,\\ \\text{right }30^\\circ,\\ 4,\\ -6$", "$5,\\ 360^\\circ,\\ \\text{right }30^\\circ,\\ 4,\\ -6$", "$5,\\ 180^\\circ,\\ \\text{left }30^\\circ,\\ 4,\\ -6$", "$2,\\ 180^\\circ,\\ \\text{right }30^\\circ,\\ 4,\\ -6$"], 0));
  q.push(mc("hard", "Describe $y=-2\\sin(3(x-20^\\circ))+4$:", ["amp 2 (reflected), period $120^\\circ$, right $20^\\circ$, up 4", "amp 2, period $360^\\circ$, right $20^\\circ$", "amp 3, period $120^\\circ$", "amp 2, left $20^\\circ$"], 0));
  q.push(mc("hard", "Range of $y=-2\\sin(x+10^\\circ)+3$:", ["$[1,5]$", "$[-5,1]$", "$[3,5]$", "$[1,3]$"], 0));
  q.push(mc("hard", "A sinusoid of amplitude 3, period $180^\\circ$, midline 2 is:", ["$y=3\\sin(2x)+2$", "$y=3\\sin(x)+2$", "$y=2\\sin(3x)+3$", "$y=3\\sin(180x)+2$"], 0));
  q.push(mc("hard", "$y=a\\sin(k(x-d))+c$ has max 7, min 1, period $90^\\circ$, right shift $15^\\circ$. Then $a,c,k,d$:", ["$3,\\ 4,\\ 4,\\ 15$", "$4,\\ 3,\\ 4,\\ 15$", "$3,\\ 4,\\ 90,\\ 15$", "$3,\\ 4,\\ 4,\\ 90$"], 0));
  q.push(mc("hard", "How does $y=\\sin(2x)$ differ from $y=\\sin(2(x-45^\\circ))$?", ["shifted right $45^\\circ$", "shifted right $90^\\circ$", "stretched", "reflected"], 0));
  q.push(mc("hard", "Range of $y=4\\cos(3x)+2$:", ["$[-2,6]$", "$[2,6]$", "$[-6,2]$", "$[-4,4]$"], 0));
  q.push(mc("hard", "For $y=-3\\cos(x-60^\\circ)+5$, the maximum:", ["$8$", "$5$", "$2$", "$3$"], 0));
  q.push(ms("hard", "For $y=5\\cos(2(x-30^\\circ))-1$, which are correct?", ["amplitude 5", "period $180^\\circ$", "phase shift right $30^\\circ$", "max 4"], [0, 1, 2, 3]));
  q.push(ms("hard", "For a sinusoid max 7, min 1, which are true?", ["amplitude 3", "midline 4", "range $[1,7]$", "amplitude 6"], [0, 1, 2]));
  q.push(tf("hard", "$y=5\\cos(2(x-30^\\circ))-1$ has max 4 and min $-6$.", true));
  q.push(tf("hard", "$y=-2\\sin(3(x-20^\\circ))+4$ has period $120^\\circ$.", true));
  q.push(tf("hard", "$y=4\\cos(3x)+2$ has range $[-2,6]$.", true));
  q.push(tf("hard", "$y=\\sin(2(x-45^\\circ))$ is $y=\\sin(2x)$ shifted right $90^\\circ$.", false, "Shifted right $45^\\circ$."));
  q.push(num("hard", "For $y=5\\cos(2(x-30^\\circ))-1$: the maximum value.", 4, 0));
  q.push(num("hard", "For $y=5\\cos(2(x-30^\\circ))-1$: the minimum value.", -6, 0));
  q.push(num("hard", "The amplitude of a sinusoid with max 7 and min 1.", 3, 0));
  q.push(num("hard", "The $k$ value for a sinusoid of period $90^\\circ$.", 4, 0));
  q.push(fill("hard", "$y=-3\\cos(x-60^\\circ)+5$ has maximum ___.", ["8"]));
  q.push(fill("hard", "$y=a\\sin(k(x-d))+c$ with period $72^\\circ$ has $k=$ ___.", ["5"]));
  return q;
}

// ── 3.7 Modelling with Sinusoidal Functions ───────────────────
function g37() {
  const q = [];
  // EASY
  q.push(mc("easy", "Midline formula:", ["$\\frac{\\max+\\min}{2}$", "$\\frac{\\max-\\min}{2}$", "$\\max\\cdot\\min$", "$\\max+\\min$"], 0));
  q.push(mc("easy", "Amplitude formula:", ["$\\frac{\\max-\\min}{2}$", "$\\frac{\\max+\\min}{2}$", "$\\max\\cdot\\min$", "$\\max-\\min$"], 0));
  q.push(mc("easy", "For a period of 12 h, $k$ (degrees/h) $=$", ["$30$", "$12$", "$360$", "$24$"], 0));
  q.push(mc("easy", "A Ferris wheel's height is modelled by a:", ["sinusoid", "line", "parabola", "exponential"], 0));
  q.push(mc("easy", "High tide 8 m, low 2 m: the midline is:", ["$5$ m", "$3$ m", "$10$ m", "$6$ m"], 0));
  q.push(mc("easy", "High tide 8 m, low 2 m: the amplitude is:", ["$3$ m", "$5$ m", "$6$ m", "$4$ m"], 0));
  q.push(mc("easy", "To start at a minimum, use:", ["$-\\cos$", "$+\\cos$", "$+\\sin$", "$-\\sin$"], 0));
  q.push(ms("easy", "For high 10, low 4, which are true?", ["midline 7", "amplitude 3", "range $[4,10]$", "amplitude 6"], [0, 1, 2]));
  q.push(ms("easy", "Which repeat periodically (sinusoidal)?", ["tides", "Ferris-wheel height", "daily temperature", "a dropped ball (once)"], [0, 1, 2]));
  q.push(ms("easy", "The period relates to $k$ by:", ["$k=360/\\text{period}$", "$\\text{period}=360/k$", "larger period → smaller $k$", "$k=\\text{period}$"], [0, 1, 2]));
  q.push(tf("easy", "Midline $=(\\max+\\min)/2$.", true));
  q.push(tf("easy", "Amplitude $=(\\max-\\min)/2$.", true));
  q.push(tf("easy", "A 12-hour tide cycle gives $k=30^\\circ$/h.", true));
  q.push(tf("easy", "Amplitude can be negative.", false, "It is $(\\max-\\min)/2>0$."));
  q.push(num("easy", "High tide 10 m, low 4 m: the midline (m).", 7, 0));
  q.push(num("easy", "High tide 10 m, low 4 m: the amplitude (m).", 3, 0));
  q.push(num("easy", "For a period of 10 h, $k=$ ___ $^\\circ$/h.", 36, 0));
  q.push(num("easy", "For a period of 24 h, $k=$ ___ $^\\circ$/h.", 15, 0));
  q.push(fill("easy", "A wheel turning once per 40 s has $k=$ ___ $^\\circ$/s.", ["9"]));
  q.push(fill("easy", "Amplitude of a tide from 8 m to 2 m is ___ m.", ["3"]));
  // MEDIUM
  q.push(mc("medium", "A wheel radius 10, centre 12 m, one turn per 60 s, from bottom: $h(t)=$", ["$12-10\\cos(6t)$", "$12+10\\cos(6t)$", "$10-12\\cos(6t)$", "$12-10\\sin(6t)$"], 0));
  q.push(mc("medium", "For $h=12-10\\cos(6t)$, the height at $t=15$ s:", ["$12$ m", "$2$ m", "$22$ m", "$10$ m"], 0));
  q.push(mc("medium", "Ferris wheel radius 8, centre 9: max and min heights:", ["$17$ and $1$", "$9$ and $8$", "$17$ and $9$", "$8$ and $1$"], 0));
  q.push(mc("medium", "Daily high $25^\\circ$, low $5^\\circ$: amplitude and midline:", ["$10$ and $15$", "$20$ and $15$", "$10$ and $10$", "$15$ and $10$"], 0));
  q.push(mc("medium", "A tide max 8, min 2, period 12 h, from high tide: $h(t)=$", ["$5+3\\cos(30t)$", "$5-3\\cos(30t)$", "$3+5\\cos(30t)$", "$8\\cos(30t)$"], 0));
  q.push(mc("medium", "For $h=5+3\\cos(30t)$, the first low tide is at $t=$", ["$6$ h", "$12$ h", "$3$ h", "$30$ h"], 0));
  q.push(mc("medium", "A quantity ranges 2 to 8, period 4 s, from the minimum: $y=$", ["$5-3\\cos(90t)$", "$5+3\\cos(90t)$", "$3-5\\cos(90t)$", "$5-3\\sin(90t)$"], 0));
  q.push(mc("medium", "Ferris wheel radius 6, centre 8, period 30 s, from bottom: $h=$", ["$8-6\\cos(12t)$", "$8+6\\cos(12t)$", "$6-8\\cos(12t)$", "$8-6\\sin(12t)$"], 0));
  q.push(ms("medium", "For a wheel radius 10, centre 12, which are true?", ["max 22", "min 2", "midline 12", "amplitude 10"], [0, 1, 2, 3]));
  q.push(ms("medium", "For $h=5+3\\cos(30t)$, which are true?", ["starts at high tide", "period 12 h", "first low at $t=6$", "midline 5"], [0, 1, 2, 3]));
  q.push(tf("medium", "For $h=12-10\\cos(6t)$, the height at $t=15$ s is 12 m.", true));
  q.push(tf("medium", "A tide max 8, min 2, from high tide, is $h=5+3\\cos(30t)$.", true));
  q.push(num("medium", "$h=12-10\\cos(6t)$: height at $t=30$ s (m).", 22, 0));
  q.push(num("medium", "Ferris wheel radius 8, centre 9: max height (m).", 17, 0));
  q.push(num("medium", "Ferris wheel radius 8, centre 9: min height (m).", 1, 0));
  q.push(num("medium", "For $h=5+3\\cos(30t)$: height at $t=0$ (m).", 8, 0));
  q.push(fill("medium", "A wheel radius 6, centre 8, from bottom: $h=8-6\\cos(12t)$; its minimum is ___ m.", ["2"]));
  q.push(fill("medium", "For $h=5+3\\cos(30t)$, the first low tide is at $t=$ ___ h.", ["6"]));
  q.push(mc("medium", "A temperature model, midline 18, amplitude 7: max and min:", ["$25$ and $11$", "$18$ and $7$", "$25$ and $18$", "$11$ and $7$"], 0));
  q.push(mc("medium", "A tide max 6, min 2, period 12 h, from high tide: $h=$", ["$4+2\\cos(30t)$", "$4-2\\cos(30t)$", "$2+4\\cos(30t)$", "$6\\cos(30t)$"], 0));
  // HARD
  q.push(mc("hard", "A tide has high 9 m at $t=0$, low 3 m, period 12 h: $h(t)=$", ["$6+3\\cos(30t)$", "$6-3\\cos(30t)$", "$3+6\\cos(30t)$", "$9\\cos(30t)$"], 0));
  q.push(mc("hard", "For $h=6+3\\cos(30t)$, the height at $t=3$ h:", ["$6$ m", "$9$ m", "$3$ m", "$0$ m"], 0));
  q.push(mc("hard", "A wheel radius 10, centre 12, period 60 s, from bottom. Time to first reach 12 m:", ["$15$ s", "$30$ s", "$60$ s", "$7.5$ s"], 0));
  q.push(mc("hard", "For $h=12-10\\cos(6t)$, when is the wheel at the top (22 m)?", ["$t=30$ s", "$t=15$ s", "$t=60$ s", "$t=0$"], 0));
  q.push(mc("hard", "Daily temperature: high $28^\\circ$, low $12^\\circ$. Amplitude and midline:", ["$8$ and $20$", "$16$ and $20$", "$8$ and $16$", "$20$ and $8$"], 0));
  q.push(mc("hard", "A tide of period 12.4 h has $k\\approx$", ["$29.0^\\circ$/h", "$30^\\circ$/h", "$24.8^\\circ$/h", "$12.4^\\circ$/h"], 0));
  q.push(mc("hard", "For $h=8-6\\cos(12t)$, the maximum height and when:", ["$14$ m at $t=15$ s", "$14$ m at $t=0$", "$2$ m at $t=15$ s", "$8$ m at $t=15$ s"], 0));
  q.push(mc("hard", "$y=5-3\\cos(90t)$ has its first maximum at $t=$", ["$2$ s", "$4$ s", "$1$ s", "$0$ s"], 0));
  q.push(ms("hard", "For $h=6+3\\cos(30t)$ (high 9 at $t=0$, low 3), which are true?", ["midline 6", "amplitude 3", "period 12 h", "$h(3)=6$"], [0, 1, 2, 3]));
  q.push(ms("hard", "For a wheel radius 10, centre 12, period 60 s from bottom, which hold?", ["$h=12-10\\cos(6t)$", "max 22 at $t=30$", "min 2 at $t=0$", "reaches 12 at $t=15$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A tide high 9 at $t=0$, low 3, period 12 h is $h=6+3\\cos(30t)$.", true));
  q.push(tf("hard", "For $h=12-10\\cos(6t)$, the top (22 m) occurs at $t=30$ s.", true));
  q.push(tf("hard", "A period of 12.4 h gives $k\\approx29.0^\\circ$/h.", true));
  q.push(tf("hard", "$y=5-3\\cos(90t)$ starts at its maximum.", false, "It starts at the minimum, 2."));
  q.push(num("hard", "For $h=6+3\\cos(30t)$, the height at $t=6$ h (m).", 3, 0));
  q.push(num("hard", "A tide of period 24.8 h has $k\\approx$ ___ $^\\circ$/h (1 dp).", 14.5, 0.1));
  q.push(num("hard", "For $h=8-6\\cos(12t)$, the max height (m).", 14, 0));
  q.push(num("hard", "For $h=12-10\\cos(6t)$, the height at $t=45$ s (m).", 12, 0));
  q.push(fill("hard", "A wheel radius 10, centre 12, from bottom reaches the top at $t=$ ___ s (period 60).", ["30"]));
  q.push(fill("hard", "A tide high 9 at $t=0$, low 3, period 12 h: $h=6+3\\cos(30$ ___$)$.", ["t"]));
  return q;
}

export default [
  { code: "3.1", gen: g31 },
  { code: "3.2", gen: g32 },
  { code: "3.3", gen: g33 },
  { code: "3.4", gen: g34 },
  { code: "3.5", gen: g35 },
  { code: "3.6", gen: g36 },
  { code: "3.7", gen: g37 },
];
