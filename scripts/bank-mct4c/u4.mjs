// MCT4C Unit 4 — Vectors & Geometry: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Kinds: mc, ms, tf, num, fill.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 4.1 Introduction to Vectors ───────────────────────────────
function g41() {
  const q = [];
  // EASY
  q.push(mc("easy", "Magnitude of $(3,4)$?", ["$5$", "$7$", "$12$", "$25$"], 0));
  q.push(mc("easy", "Magnitude of $(6,8)$?", ["$10$", "$14$", "$48$", "$100$"], 0));
  q.push(mc("easy", "A vector has:", ["magnitude and direction", "only size", "only direction", "neither"], 0));
  q.push(mc("easy", "The magnitude $|(x,y)|=$", ["$\\sqrt{x^2+y^2}$", "$x+y$", "$x^2+y^2$", "$xy$"], 0));
  q.push(mc("easy", "Components of magnitude $m$ at angle $\\theta$:", ["$(m\\cos\\theta, m\\sin\\theta)$", "$(m\\sin\\theta, m\\cos\\theta)$", "$(m\\theta, m)$", "$(\\cos\\theta,\\sin\\theta)$"], 0));
  q.push(mc("easy", "The opposite of $(2,3)$:", ["$(-2,-3)$", "$(3,2)$", "$(2,-3)$", "$(-2,3)$"], 0));
  q.push(mc("easy", "$|(0,5)|=$", ["$5$", "$0$", "$25$", "$10$"], 0));
  q.push(ms("easy", "Which have magnitude 5?", ["$(3,4)$", "$(5,0)$", "$(0,5)$", "$(1,2)$"], [0, 1, 2]));
  q.push(ms("easy", "What does a vector have?", ["magnitude", "direction", "a colour", "a fixed position"], [0, 1]));
  q.push(ms("easy", "Which equal $(-4,-2)$?", ["opposite of $(4,2)$", "$-1\\cdot(4,2)$", "$(4,2)$", "$2\\cdot(-2,-1)$"], [0, 1, 3]));
  q.push(tf("easy", "$|(x,y)|=\\sqrt{x^2+y^2}$.", true));
  q.push(tf("easy", "A vector has magnitude and direction.", true));
  q.push(tf("easy", "$|(3,4)|=7$.", false, "It is 5."));
  q.push(tf("easy", "The opposite of $(2,-1)$ is $(-2,1)$.", true));
  q.push(num("easy", "$|(8,6)|$.", 10, 0));
  q.push(num("easy", "$|(5,12)|$.", 13, 0));
  q.push(num("easy", "$|(7,24)|$.", 25, 0));
  q.push(num("easy", "$|(9,12)|$.", 15, 0));
  q.push(fill("easy", "$|(3,4)|=$ ___.", ["5"]));
  q.push(fill("easy", "The opposite of $(5,-2)$ is $(-5,$ ___$)$.", ["2"]));
  // MEDIUM
  q.push(mc("medium", "Direction of $(3,4)$ (nearest $0.1^\\circ$):", ["$53.1^\\circ$", "$36.9^\\circ$", "$45.0^\\circ$", "$30.0^\\circ$"], 0));
  q.push(mc("medium", "Components of magnitude 10 at $30^\\circ$:", ["$(8.7,5)$", "$(5,8.7)$", "$(10,30)$", "$(8.7,10)$"], 0));
  q.push(mc("medium", "Components of magnitude 20 at $60^\\circ$:", ["$(10,17.3)$", "$(17.3,10)$", "$(20,60)$", "$(10,20)$"], 0));
  q.push(mc("medium", "$3(2,-1)=$", ["$(6,-3)$", "$(5,2)$", "$(2,-3)$", "$(6,3)$"], 0));
  q.push(mc("medium", "$|3(2,-1)|=$", ["$3\\sqrt5$", "$\\sqrt5$", "$6$", "$9$"], 0));
  q.push(mc("medium", "Unit vector of $(3,4)$:", ["$(0.6,0.8)$", "$(3,4)$", "$(0.8,0.6)$", "$(0.5,0.5)$"], 0));
  q.push(mc("medium", "Direction of $(-1,1)$:", ["$135^\\circ$", "$45^\\circ$", "$225^\\circ$", "$315^\\circ$"], 0));
  q.push(mc("medium", "Direction of $(0,5)$:", ["$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$270^\\circ$"], 0));
  q.push(ms("medium", "For $(3,4)$, which are true?", ["magnitude 5", "direction $53.1^\\circ$", "unit vector $(0.6,0.8)$", "magnitude 7"], [0, 1, 2]));
  q.push(ms("medium", "Which give magnitude 13?", ["$(5,12)$", "$(12,5)$", "$(13,0)$", "$(6,8)$"], [0, 1, 2]));
  q.push(tf("medium", "The direction of $(3,4)$ is about $53.1^\\circ$.", true));
  q.push(tf("medium", "The unit vector of $(6,8)$ is $(0.6,0.8)$.", true));
  q.push(num("medium", "$|2(4,-3)|$ (magnitude).", 10, 0));
  q.push(num("medium", "The $x$-component of magnitude 10 at $30^\\circ$ (1 dp).", 8.7, 0.1));
  q.push(num("medium", "The $y$-component of magnitude 20 at $60^\\circ$ (1 dp).", 17.3, 0.1));
  q.push(num("medium", "Direction of $(1,1)$ (degrees).", 45, 0));
  q.push(fill("medium", "The unit vector of $(3,4)$ is $(0.6,$ ___$)$.", ["0.8"]));
  q.push(fill("medium", "Components of magnitude 16 at $45^\\circ$ are $\\approx(11.3,$ ___$)$.", ["11.3"]));
  q.push(mc("medium", "A 25 N force at $40^\\circ$ has components $\\approx$", ["$(19.2,16.1)$", "$(16.1,19.2)$", "$(25,40)$", "$(19.2,25)$"], 0));
  q.push(mc("medium", "$|(-3,-4)|=$", ["$5$", "$7$", "$-5$", "$1$"], 0));
  // HARD
  q.push(mc("hard", "A 50 N force at $60^\\circ$ has horizontal component:", ["$25$", "$43.3$", "$50$", "$30$"], 0));
  q.push(mc("hard", "A 50 N force at $60^\\circ$ has vertical component:", ["$43.3$", "$25$", "$50$", "$30$"], 0));
  q.push(mc("hard", "If $|v|=10$ at $30^\\circ$, then the $x$-component is:", ["$5\\sqrt3$", "$5$", "$10$", "$10\\sqrt3$"], 0));
  q.push(mc("hard", "The direction of $(-3,4)$ (nearest $0.1^\\circ$):", ["$126.9^\\circ$", "$53.1^\\circ$", "$-53.1^\\circ$", "$36.9^\\circ$"], 0));
  q.push(mc("hard", "The magnitude of $(3,4)+(1,2)$:", ["$\\sqrt{52}$", "$\\sqrt{50}$", "$7$", "$\\sqrt{13}$"], 0));
  q.push(mc("hard", "A vector 12 units at $150^\\circ$ has components:", ["$(-10.4,6)$", "$(10.4,6)$", "$(-6,10.4)$", "$(6,-10.4)$"], 0));
  q.push(mc("hard", "If $|v|=10$ making $90^\\circ$ with the $x$-axis, $v=$", ["$(0,10)$", "$(10,0)$", "$(0,-10)$", "$(7,7)$"], 0));
  q.push(mc("hard", "The unit vector of $(5,12)$:", ["$(5/13,12/13)$", "$(12/13,5/13)$", "$(5,12)$", "$(1,1)$"], 0));
  q.push(ms("hard", "For a 25 N force at $40^\\circ$, which are true?", ["$x\\approx19.2$", "$y\\approx16.1$", "magnitude 25", "direction $40^\\circ$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are unit vectors?", ["$(0.6,0.8)$", "$(3/5,4/5)$", "$(1,0)$", "$(1,1)$"], [0, 1, 2]));
  q.push(tf("hard", "A unit vector has magnitude 1.", true));
  q.push(tf("hard", "$(0.6,0.8)$ is a unit vector.", true));
  q.push(tf("hard", "A 50 N force at $60^\\circ$ has horizontal component 25 N.", true));
  q.push(tf("hard", "The direction of $(-3,4)$ is $53.1^\\circ$.", false, "It is $126.9^\\circ$ (QII)."));
  q.push(num("hard", "Horizontal component of a 60 N force at $25^\\circ$ (1 dp).", 54.4, 0.1));
  q.push(num("hard", "Vertical component of a 60 N force at $25^\\circ$ (1 dp).", 25.4, 0.1));
  q.push(num("hard", "The magnitude of the unit vector of any nonzero vector.", 1, 0));
  q.push(num("hard", "$|(5,12)|$ (magnitude).", 13, 0));
  q.push(fill("hard", "A 50 N force at $60^\\circ$ has vertical component $\\approx$ ___ N (1 dp).", ["43.3"]));
  q.push(fill("hard", "The unit vector of $(5,12)$ is $(5/13,$ ___$/13)$.", ["12"]));
  return q;
}

// ── 4.2 Adding & Subtracting Vectors ──────────────────────────
function g42() {
  const q = [];
  // EASY
  q.push(mc("easy", "$(3,4)+(1,2)=$", ["$(4,6)$", "$(3,8)$", "$(4,2)$", "$(2,2)$"], 0));
  q.push(mc("easy", "$(5,2)-(1,6)=$", ["$(4,-4)$", "$(6,8)$", "$(4,4)$", "$(-4,4)$"], 0));
  q.push(mc("easy", "To add vectors, add:", ["their components", "their magnitudes", "their directions", "their angles"], 0));
  q.push(mc("easy", "$(2,3)+(4,1)=$", ["$(6,4)$", "$(8,3)$", "$(6,3)$", "$(2,4)$"], 0));
  q.push(mc("easy", "$2(3,-1)=$", ["$(6,-2)$", "$(5,1)$", "$(6,2)$", "$(3,-2)$"], 0));
  q.push(mc("easy", "$(5,5)-(5,5)=$", ["$(0,0)$", "$(10,10)$", "$(1,1)$", "$(5,5)$"], 0));
  q.push(mc("easy", "The zero vector is:", ["$(0,0)$", "$(1,1)$", "undefined", "$(0,1)$"], 0));
  q.push(ms("easy", "Which are correct sums?", ["$(1,2)+(3,4)=(4,6)$", "$(0,0)+(5,5)=(5,5)$", "$(2,2)+(2,2)=(4,4)$", "$(1,1)+(1,1)=(1,1)$"], [0, 1, 2]));
  q.push(ms("easy", "To add vectors you can:", ["add components", "use the parallelogram rule", "use tip-to-tail", "multiply magnitudes"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $(0,0)$?", ["$(3,4)+(-3,-4)$", "$(2,2)-(2,2)$", "$0\\cdot(5,5)$", "$(1,1)$"], [0, 1, 2]));
  q.push(tf("easy", "To add vectors, add their components.", true));
  q.push(tf("easy", "$(3,4)+(1,2)=(4,6)$.", true));
  q.push(tf("easy", "To add vectors, add their magnitudes.", false, "Add components, not magnitudes."));
  q.push(tf("easy", "$(5,5)-(5,5)=(0,0)$.", true));
  q.push(num("easy", "The $x$-component of $(3,4)+(1,2)$.", 4, 0));
  q.push(num("easy", "The $y$-component of $(5,2)-(1,6)$.", -4, 0));
  q.push(num("easy", "The magnitude of $(6,8)$.", 10, 0));
  q.push(num("easy", "The $x$-component of $3(2,-1)$.", 6, 0));
  q.push(fill("easy", "$(2,3)+(4,1)=(6,$ ___$)$.", ["4"]));
  q.push(fill("easy", "$(7,2)-(3,5)=(4,$ ___$)$.", ["-3"]));
  // MEDIUM
  q.push(mc("medium", "$|(3,4)+(1,2)|$ (2 dp):", ["$7.21$", "$7.00$", "$6.00$", "$5.00$"], 0));
  q.push(mc("medium", "$|(5,2)-(1,6)|$ (2 dp):", ["$5.66$", "$4.00$", "$6.00$", "$8.00$"], 0));
  q.push(mc("medium", "Resultant of magnitudes 6 and 8 at right angles:", ["$10$", "$14$", "$2$", "$48$"], 0));
  q.push(mc("medium", "Resultant of magnitudes 9 and 12 at $90^\\circ$:", ["$15$", "$21$", "$3$", "$108$"], 0));
  q.push(mc("medium", "With $\\vec u=(1,2),\\vec v=(3,-1)$, $2\\vec u+\\vec v=$", ["$(5,3)$", "$(4,1)$", "$(5,4)$", "$(2,3)$"], 0));
  q.push(mc("medium", "$|2\\vec u+\\vec v|$ for $\\vec u=(1,2),\\vec v=(3,-1)$ (2 dp):", ["$5.83$", "$5.00$", "$6.00$", "$4.47$"], 0));
  q.push(mc("medium", "Resultant of 5 and 5 at $60^\\circ$ (2 dp):", ["$8.66$", "$10.00$", "$5.00$", "$7.07$"], 0));
  q.push(mc("medium", "Resultant of 7 and 24 at right angles:", ["$25$", "$31$", "$17$", "$168$"], 0));
  q.push(ms("medium", "For $(3,4)+(1,2)$, which are true?", ["sum $(4,6)$", "magnitude $\\sqrt{52}$", "magnitude $\\approx7.21$", "sum $(4,2)$"], [0, 1, 2]));
  q.push(ms("medium", "Which resultants use $\\sqrt{a^2+b^2}$ (perpendicular)?", ["6 & 8", "9 & 12", "7 & 24", "5 & 5 at $60^\\circ$"], [0, 1, 2]));
  q.push(tf("medium", "$|(4,6)|\\approx7.21$.", true));
  q.push(tf("medium", "The resultant of 6 and 8 at $90^\\circ$ is 10.", true));
  q.push(num("medium", "$|(2,3)+(4,1)|$ (2 dp).", 7.21, 0.02));
  q.push(num("medium", "Resultant of magnitudes 12 and 5 at right angles.", 13, 0));
  q.push(num("medium", "Resultant of magnitudes 5 and 5 at $60^\\circ$ (2 dp).", 8.66, 0.02));
  q.push(num("medium", "$|(-2,4)|$ (2 dp).", 4.47, 0.02));
  q.push(fill("medium", "The resultant of 3 and 4 at right angles is ___.", ["5"]));
  q.push(fill("medium", "$|2\\vec u|$ for $\\vec u=(3,4)$ is ___.", ["10"]));
  q.push(mc("medium", "$(-3,4)+(3,-4)=$", ["$(0,0)$", "$(6,8)$", "$(0,8)$", "$(-6,0)$"], 0));
  q.push(mc("medium", "Resultant of 10 and 10 at $90^\\circ$ (1 dp):", ["$14.1$", "$20.0$", "$10.0$", "$0.0$"], 0));
  // HARD
  q.push(mc("hard", "Resultant of 8 and 5 at $60^\\circ$ between (1 dp):", ["$11.4$", "$13.0$", "$3.0$", "$9.4$"], 0));
  q.push(mc("hard", "Resultant of 8 and 5 at $120^\\circ$ between (1 dp):", ["$7.0$", "$11.4$", "$13.0$", "$3.0$"], 0));
  q.push(mc("hard", "Resultant of 10 N and 14 N at $50^\\circ$ between (1 dp):", ["$21.8$", "$24.0$", "$4.0$", "$17.1$"], 0));
  q.push(mc("hard", "The resultant magnitude formula for two vectors at angle $\\theta$:", ["$\\sqrt{a^2+b^2+2ab\\cos\\theta}$", "$\\sqrt{a^2+b^2}$", "$a+b$", "$\\sqrt{a^2+b^2-2ab\\cos\\theta}$"], 0));
  q.push(mc("hard", "For two equal forces $F$ at angle $2\\alpha$ apart, the resultant is:", ["$2F\\cos\\alpha$", "$2F\\sin\\alpha$", "$F\\cos\\alpha$", "$2F$"], 0));
  q.push(mc("hard", "Two anti-parallel vectors ($180^\\circ$), magnitudes 8 and 5, resultant:", ["$3$", "$13$", "$\\sqrt{89}$", "$40$"], 0));
  q.push(mc("hard", "Two forces 6 and 8 give a resultant of 10 when they are:", ["perpendicular", "parallel", "anti-parallel", "at $60^\\circ$"], 0));
  q.push(mc("hard", "The resultant of 8 and 5 is largest when the angle between them is:", ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$60^\\circ$"], 0));
  q.push(ms("hard", "For 8 and 5 at $60^\\circ$, which are true?", ["$\\sqrt{64+25+40}$", "$\\sqrt{129}$", "$\\approx11.4$", "uses the cosine rule"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which give a resultant of magnitude 3 (from 8 and 5)?", ["angle $180^\\circ$", "anti-parallel", "$8-5$", "angle $0^\\circ$"], [0, 1, 2]));
  q.push(tf("hard", "Resultant of 8, 5 at $60^\\circ$ is $\\approx11.4$.", true));
  q.push(tf("hard", "Two anti-parallel vectors of 8 and 5 give resultant 3.", true));
  q.push(tf("hard", "The resultant is largest when vectors are parallel ($0^\\circ$).", true));
  q.push(tf("hard", "The resultant of two vectors always equals the sum of magnitudes.", false, "Only when parallel."));
  q.push(num("hard", "Resultant of 8 and 5 at $60^\\circ$ (1 dp).", 11.4, 0.1));
  q.push(num("hard", "Resultant of 8 and 5 at $120^\\circ$ (1 dp).", 7.0, 0.1));
  q.push(num("hard", "Resultant of 10 and 14 at $50^\\circ$ (1 dp).", 21.8, 0.1));
  q.push(num("hard", "Resultant of two anti-parallel vectors 9 and 4.", 5, 0));
  q.push(fill("hard", "Resultant magnitude $=\\sqrt{a^2+b^2+2ab\\cos}$ ___ (the angle).", ["θ", "theta"]));
  q.push(fill("hard", "Two 20 N forces $60^\\circ$ apart give $2(20)\\cos30^\\circ\\approx$ ___ (1 dp).", ["34.6"]));
  return q;
}

// ── 4.3 Vector Applications ───────────────────────────────────
function g43() {
  const q = [];
  // EASY
  q.push(mc("easy", "A crosswind perpendicular to a plane's heading changes:", ["ground speed and direction", "nothing", "only altitude", "only fuel"], 0));
  q.push(mc("easy", "Forces and velocities combine as:", ["vectors", "scalars", "numbers only", "angles"], 0));
  q.push(mc("easy", "The equilibrant is:", ["opposite to the resultant", "equal to the resultant", "zero", "the largest force"], 0));
  q.push(mc("easy", "A river current perpendicular to a boat's path uses:", ["$\\sqrt{a^2+b^2}$", "$a+b$", "$a-b$", "$ab$"], 0));
  q.push(mc("easy", "A bearing is measured:", ["clockwise from north", "from east", "counterclockwise", "from the boat"], 0));
  q.push(mc("easy", "Two perpendicular forces 3 and 4 give resultant:", ["$5$", "$7$", "$1$", "$12$"], 0));
  q.push(mc("easy", "A plane heading north into an east wind drifts:", ["east", "west", "north", "south"], 0));
  q.push(ms("easy", "Which combine as vectors?", ["forces", "velocities", "displacements", "temperatures"], [0, 1, 2]));
  q.push(ms("easy", "For a perpendicular crosswind, which are true?", ["ground speed $=\\sqrt{v^2+w^2}$", "drift $=\\tan^{-1}(w/v)$", "use Pythagoras", "ground speed $=v+w$"], [0, 1, 2]));
  q.push(ms("easy", "The resultant of two forces depends on:", ["their magnitudes", "the angle between them", "their directions", "their colours"], [0, 1, 2]));
  q.push(tf("easy", "Velocities add as vectors.", true));
  q.push(tf("easy", "A perpendicular crosswind increases the ground speed.", true));
  q.push(tf("easy", "The equilibrant equals the resultant.", false, "It is opposite."));
  q.push(tf("easy", "A bearing is measured clockwise from north.", true));
  q.push(num("easy", "Two perpendicular forces 6 and 8 give a resultant of ___.", 10, 0));
  q.push(num("easy", "Two perpendicular forces 9 and 40 give a resultant of ___.", 41, 0));
  q.push(num("easy", "A plane 3 km/h into a 4 km/h crosswind: ground speed = ___ km/h.", 5, 0));
  q.push(num("easy", "Two perpendicular forces 5 and 12: resultant = ___.", 13, 0));
  q.push(fill("easy", "Ground speed with a perpendicular wind $=\\sqrt{v^2+}$ ___$^2$.", ["w"]));
  q.push(fill("easy", "The equilibrant is ___ to the resultant (opposite/equal).", ["opposite"]));
  // MEDIUM
  q.push(mc("medium", "A plane heads 400 km/h with a 60 km/h perpendicular crosswind: ground speed (1 dp):", ["$404.5$", "$460.0$", "$340.0$", "$400.0$"], 0));
  q.push(mc("medium", "The drift angle for that plane (1 dp):", ["$8.5^\\circ$", "$15.0^\\circ$", "$81.5^\\circ$", "$6.0^\\circ$"], 0));
  q.push(mc("medium", "Two forces 10 N and 15 N at right angles: resultant (1 dp):", ["$18.0$", "$25.0$", "$5.0$", "$12.5$"], 0));
  q.push(mc("medium", "Forces 12 N and 18 N at $60^\\circ$ between: resultant (1 dp):", ["$26.2$", "$30.0$", "$6.0$", "$22.5$"], 0));
  q.push(mc("medium", "A boat rows 8 km/h across; current 3 km/h: actual speed (1 dp):", ["$8.5$", "$11.0$", "$5.0$", "$8.0$"], 0));
  q.push(mc("medium", "The boat's angle downstream (1 dp):", ["$20.6^\\circ$", "$69.4^\\circ$", "$30.0^\\circ$", "$45.0^\\circ$"], 0));
  q.push(mc("medium", "A plane 300 km/h north, 50 km/h east wind: ground speed (1 dp):", ["$304.1$", "$350.0$", "$250.0$", "$300.0$"], 0));
  q.push(mc("medium", "Two 20 N forces at $60^\\circ$ apart: resultant (1 dp):", ["$34.6$", "$40.0$", "$20.0$", "$28.3$"], 0));
  q.push(ms("medium", "For a plane 400 km/h + 60 km/h crosswind, which are true?", ["ground speed $\\approx404.5$", "drift $\\approx8.5^\\circ$", "use Pythagoras", "ground speed 460"], [0, 1, 2]));
  q.push(ms("medium", "Which are perpendicular-resultant problems?", ["10 & 15 at $90^\\circ$", "boat across + current", "plane N + wind E", "12 & 18 at $60^\\circ$"], [0, 1, 2]));
  q.push(tf("medium", "A 400 km/h plane with a 60 km/h crosswind has ground speed $\\approx404.5$ km/h.", true));
  q.push(tf("medium", "A boat 8 km/h across with 3 km/h current moves $\\approx8.5$ km/h.", true));
  q.push(num("medium", "Plane 400 km/h + 60 km/h crosswind: ground speed (1 dp).", 404.5, 0.1));
  q.push(num("medium", "Forces 10 and 15 at right angles: resultant (1 dp).", 18.0, 0.1));
  q.push(num("medium", "Forces 12 and 18 at $60^\\circ$: resultant (1 dp).", 26.2, 0.1));
  q.push(num("medium", "A boat 8 km/h across, 3 km/h current: actual speed (1 dp).", 8.5, 0.1));
  q.push(fill("medium", "A plane 300 km/h N with 50 km/h E wind has ground speed $\\approx$ ___ km/h (1 dp).", ["304.1"]));
  q.push(fill("medium", "The drift angle for a 400 km/h plane with a 60 km/h crosswind $\\approx$ ___$^\\circ$ (1 dp).", ["8.5"]));
  q.push(mc("medium", "The horizontal component of a 50 N force at $30^\\circ$:", ["$43.3$", "$25.0$", "$50.0$", "$30.0$"], 0));
  q.push(mc("medium", "The vertical component of a 60 N force at $25^\\circ$ (1 dp):", ["$25.4$", "$54.4$", "$60.0$", "$30.0$"], 0));
  // HARD
  q.push(mc("hard", "A plane 500 km/h with 100 km/h crosswind: ground speed (1 dp):", ["$509.9$", "$600.0$", "$400.0$", "$500.0$"], 0));
  q.push(mc("hard", "Two tugboats each pull 5000 N at $30^\\circ$ on either side of the axis: forward pull:", ["$8660$ N", "$10000$ N", "$5000$ N", "$7071$ N"], 0));
  q.push(mc("hard", "A boat crosses a 60 m river at 2 m/s; current 1.5 m/s: resultant speed:", ["$2.5$ m/s", "$3.5$ m/s", "$0.5$ m/s", "$2.0$ m/s"], 0));
  q.push(mc("hard", "For that boat, how far downstream does it land?", ["$45$ m", "$30$ m", "$60$ m", "$90$ m"], 0));
  q.push(mc("hard", "Two tugs 4000 N each, $40^\\circ$ apart: forward pull (whole):", ["$7518$ N", "$8000$ N", "$4000$ N", "$5657$ N"], 0));
  q.push(mc("hard", "Two forces 20 and 20 at $60^\\circ$ apart give resultant:", ["$34.6$", "$40.0$", "$20.0$", "$28.3$"], 0));
  q.push(mc("hard", "A plane 350 km/h with 45 km/h crosswind: ground speed (1 dp):", ["$352.9$", "$395.0$", "$305.0$", "$350.0$"], 0));
  q.push(mc("hard", "Two forces 9 N and 40 N at right angles: resultant:", ["$41$ N", "$49$ N", "$31$ N", "$1440$ N"], 0));
  q.push(ms("hard", "For two tugs 5000 N at $30^\\circ$ either side, which are true?", ["forward pull $=2(5000)\\cos30^\\circ$", "$\\approx8660$ N", "along the bisector", "$10000$ N"], [0, 1, 2]));
  q.push(ms("hard", "For a swimmer 2 m/s across a 60 m river, current 1.5 m/s, which are true?", ["resultant 2.5 m/s", "cross time 30 s", "downstream 45 m", "resultant 3.5"], [0, 1, 2]));
  q.push(tf("hard", "A plane 500 km/h with 100 km/h crosswind has ground speed $\\approx509.9$ km/h.", true));
  q.push(tf("hard", "Two 5000 N tugs at $30^\\circ$ either side pull $\\approx8660$ N forward.", true));
  q.push(tf("hard", "A swimmer 2 m/s crossing a 60 m river takes 30 s.", true));
  q.push(tf("hard", "Two equal forces at $60^\\circ$ apart give a resultant equal to their sum.", false, "It is $2F\\cos30^\\circ$, less than $2F$."));
  q.push(num("hard", "Two tugs 5000 N at $30^\\circ$ either side: forward pull (whole).", 8660, 2));
  q.push(num("hard", "A swimmer 2 m/s across a 60 m river, 1.5 m/s current: downstream distance (m).", 45, 0));
  q.push(num("hard", "A plane 500 km/h + 100 km/h crosswind: ground speed (1 dp).", 509.9, 0.1));
  q.push(num("hard", "Two 20 N forces at $60^\\circ$ apart: resultant (1 dp).", 34.6, 0.1));
  q.push(fill("hard", "A boat crossing at 2 m/s with a 1.5 m/s current has resultant speed ___ m/s.", ["2.5"]));
  q.push(fill("hard", "Two tugs 4000 N at $40^\\circ$ apart pull $\\approx$ ___ N forward (whole).", ["7518"]));
  return q;
}

// ── 4.4 Areas of Composite 2-D Shapes ─────────────────────────
function g44() {
  const q = [];
  // EASY
  q.push(mc("easy", "Area of a rectangle $l\\times w$:", ["$lw$", "$l+w$", "$2(l+w)$", "$l^2$"], 0));
  q.push(mc("easy", "Area of a triangle:", ["$\\frac12bh$", "$bh$", "$2bh$", "$b+h$"], 0));
  q.push(mc("easy", "Area of a circle:", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$r^2$"], 0));
  q.push(mc("easy", "Area of a $5\\times8$ rectangle:", ["$40$", "$13$", "$26$", "$20$"], 0));
  q.push(mc("easy", "Area of a triangle base 10, height 6:", ["$30$", "$60$", "$16$", "$8$"], 0));
  q.push(mc("easy", "Area of a circle radius 3 (in $\\pi$):", ["$9\\pi$", "$6\\pi$", "$3\\pi$", "$12\\pi$"], 0));
  q.push(mc("easy", "A composite area is found by:", ["adding/subtracting parts", "multiplying", "only adding", "guessing"], 0));
  q.push(ms("easy", "Which are area formulas?", ["rectangle $lw$", "triangle $\\frac12bh$", "circle $\\pi r^2$", "perimeter $2\\pi r$"], [0, 1, 2]));
  q.push(ms("easy", "Which have area 12?", ["$3\\times4$ rectangle", "triangle base 6 height 4", "$2\\times6$ rectangle", "triangle base 3 height 4"], [0, 1, 2]));
  q.push(ms("easy", "To find an L-shape area:", ["split into rectangles", "subtract a corner", "add pieces", "take a square root"], [0, 1, 2]));
  q.push(tf("easy", "The area of a circle is $\\pi r^2$.", true));
  q.push(tf("easy", "A triangle's area is $\\frac12bh$.", true));
  q.push(tf("easy", "The area of a rectangle is its perimeter.", false, "Area is $lw$."));
  q.push(tf("easy", "A semicircle has area $\\frac12\\pi r^2$.", true));
  q.push(num("easy", "Area of a $15\\times9$ rectangle.", 135, 0));
  q.push(num("easy", "Area of a triangle base 12 height 7.", 42, 0));
  q.push(num("easy", "Area of a trapezoid parallel sides 5, 11, height 4.", 32, 0));
  q.push(num("easy", "Area of a parallelogram base 8 height 6.", 48, 0));
  q.push(fill("easy", "Area of a circle radius 8 is ___$\\pi$.", ["64"]));
  q.push(fill("easy", "Area of a $5\\times8$ rectangle is ___.", ["40"]));
  // MEDIUM
  q.push(mc("medium", "L-shape: $10\\times8$ minus a $4\\times3$ corner:", ["$68$", "$80$", "$92$", "$60$"], 0));
  q.push(mc("medium", "A trapezoid, parallel sides 8, 14, height 6:", ["$66$", "$132$", "$44$", "$22$"], 0));
  q.push(mc("medium", "Annulus between radii 6 and 4 (in $\\pi$):", ["$20\\pi$", "$2\\pi$", "$10\\pi$", "$52\\pi$"], 0));
  q.push(mc("medium", "A $12\\times7$ rectangle with a semicircle (diameter 7) on top (1 dp):", ["$103.2$", "$84.0$", "$122.5$", "$96.0$"], 0));
  q.push(mc("medium", "A $10\\times6$ rectangle with a semicircle ($r=3$) on one end (1 dp):", ["$74.1$", "$60.0$", "$88.3$", "$70.0$"], 0));
  q.push(mc("medium", "A square side 10 with an inscribed circle ($r=5$) removed (1 dp):", ["$21.5$", "$100.0$", "$78.5$", "$50.0$"], 0));
  q.push(mc("medium", "A stadium: $20\\times12$ rectangle + two semicircle ends ($r=6$) (1 dp):", ["$353.1$", "$240.0$", "$466.2$", "$353.0$"], 0));
  q.push(mc("medium", "L-shape: $12\\times10$ minus a $5\\times4$ corner:", ["$100$", "$120$", "$140$", "$20$"], 0));
  q.push(ms("medium", "For an annulus radii 10 and 6, which are true?", ["area $\\pi(100-36)$", "$64\\pi$", "$\\approx201.1$", "use $\\pi(R^2-r^2)$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which composite areas subtract a region?", ["square minus circle", "L-shape (minus corner)", "annulus", "rectangle + triangle"], [0, 1, 2]));
  q.push(tf("medium", "An annulus between radii 6 and 4 has area $20\\pi$.", true));
  q.push(tf("medium", "A $12\\times7$ rectangle capped by a semicircle ($d=7$) has area $\\approx103.2$.", true));
  q.push(num("medium", "L-shape $10\\times8$ minus a $4\\times3$ corner (area).", 68, 0));
  q.push(num("medium", "Annulus between radii 10 and 6 (in $\\pi$; coefficient).", 64, 0));
  q.push(num("medium", "Area of a trapezoid, parallel sides 6, 10, height 5.", 40, 0));
  q.push(num("medium", "A $10\\times6$ rectangle + semicircle $r=3$ (1 dp).", 74.1, 0.1));
  q.push(fill("medium", "A square side 10 minus an inscribed circle ($r=5$) $\\approx$ ___ (1 dp).", ["21.5"]));
  q.push(fill("medium", "A trapezoid, parallel sides 8, 14, height 6, has area ___.", ["66"]));
  q.push(mc("medium", "Composite: an $8\\times5$ rectangle + a triangle (base 8, height 4):", ["$56$", "$40$", "$72$", "$48$"], 0));
  q.push(mc("medium", "A square side 7 with an inscribed circle removed (1 dp):", ["$10.5$", "$49.0$", "$38.5$", "$20.0$"], 0));
  // HARD
  q.push(mc("hard", "A running track: $40\\times20$ rectangle + two semicircular ends ($r=10$) (1 dp):", ["$1114.2$", "$800.0$", "$1428.3$", "$1114.0$"], 0));
  q.push(mc("hard", "A $20\\times12$ rectangle + two semicircle ends ($r=6$) (1 dp):", ["$353.1$", "$240.0$", "$466.2$", "$353.0$"], 0));
  q.push(mc("hard", "A circle radius 5 (decimal, 1 dp):", ["$78.5$", "$31.4$", "$25.0$", "$15.7$"], 0));
  q.push(mc("hard", "The area between a $10\\times10$ square and its inscribed circle ($r=5$) (1 dp):", ["$21.5$", "$78.5$", "$100.0$", "$21.4$"], 0));
  q.push(mc("hard", "A rectangle $12\\times8$ with a semicircle ($r=4$) removed from one end (1 dp):", ["$70.9$", "$96.0$", "$121.1$", "$84.0$"], 0));
  q.push(mc("hard", "An annulus with $R=10$, $r=6$ (1 dp):", ["$201.1$", "$64.0$", "$314.2$", "$113.1$"], 0));
  q.push(mc("hard", "The area of a semicircle radius 8 (in $\\pi$):", ["$32\\pi$", "$64\\pi$", "$16\\pi$", "$8\\pi$"], 0));
  q.push(mc("hard", "A $6\\times4$ rectangle joined to a $3\\times2$ rectangle:", ["$30$", "$24$", "$18$", "$12$"], 0));
  q.push(ms("hard", "For a running track $40\\times20$ + semicircle ends $r=10$, which are true?", ["rectangle 800", "two semicircles = one circle", "circle area $100\\pi$", "total $\\approx1114.2$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which equal $\\approx78.5$?", ["circle $r=5$", "$25\\pi$", "area of a circle radius 5", "semicircle $r=10$"], [0, 1, 2]));
  q.push(tf("hard", "A running track $40\\times20$ + semicircle ends ($r=10$) has area $\\approx1114.2$.", true));
  q.push(tf("hard", "Two semicircles of radius 10 combine to a full circle of area $100\\pi$.", true));
  q.push(tf("hard", "A rectangle $12\\times8$ minus a semicircle $r=4$ has area $\\approx70.9$.", true));
  q.push(tf("hard", "A circle of radius 5 has area exactly 25.", false, "It is $25\\pi\\approx78.5$."));
  q.push(num("hard", "A running track $40\\times20$ + semicircle ends $r=10$ (1 dp).", 1114.2, 0.2));
  q.push(num("hard", "Area of a circle radius 5 (1 dp).", 78.5, 0.1));
  q.push(num("hard", "A rectangle $12\\times8$ minus a semicircle $r=4$ (1 dp).", 70.9, 0.2));
  q.push(num("hard", "A $6\\times4$ rectangle + a $3\\times2$ rectangle (area).", 30, 0));
  q.push(fill("hard", "Two semicircles of radius 10 form a circle of area ___$\\pi$.", ["100"]));
  q.push(fill("hard", "A circle radius 5 has area $\\approx$ ___ (1 dp).", ["78.5"]));
  return q;
}

// ── 4.5 Properties of Circles ─────────────────────────────────
function g45() {
  const q = [];
  // EASY
  q.push(mc("easy", "Circumference of a circle:", ["$2\\pi r$", "$\\pi r^2$", "$\\pi r$", "$2r$"], 0));
  q.push(mc("easy", "Area of a circle:", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$r^2$"], 0));
  q.push(mc("easy", "Arc length for central angle $\\theta^\\circ$:", ["$\\frac{\\theta}{360}\\cdot2\\pi r$", "$\\frac{\\theta}{360}\\cdot\\pi r^2$", "$2\\pi r$", "$\\pi r^2$"], 0));
  q.push(mc("easy", "Sector area for central angle $\\theta^\\circ$:", ["$\\frac{\\theta}{360}\\cdot\\pi r^2$", "$\\frac{\\theta}{360}\\cdot2\\pi r$", "$\\pi r^2$", "$2\\pi r$"], 0));
  q.push(mc("easy", "An inscribed angle is ___ the central angle:", ["half", "twice", "equal to", "triple"], 0));
  q.push(mc("easy", "Circumference of radius 5 (in $\\pi$):", ["$10\\pi$", "$25\\pi$", "$5\\pi$", "$20\\pi$"], 0));
  q.push(mc("easy", "Area of radius 9 (in $\\pi$):", ["$81\\pi$", "$18\\pi$", "$9\\pi$", "$162\\pi$"], 0));
  q.push(ms("easy", "Which are circle formulas?", ["circumference $2\\pi r$", "area $\\pi r^2$", "arc $\\frac{\\theta}{360}2\\pi r$", "volume $\\pi r^2$"], [0, 1, 2]));
  q.push(ms("easy", "For a full circle ($\\theta=360^\\circ$), which hold?", ["arc $=2\\pi r$", "sector $=\\pi r^2$", "$\\theta/360=1$", "arc $=\\pi r$"], [0, 1, 2]));
  q.push(ms("easy", "Which express the inscribed-angle relationship?", ["inscribed $=\\frac12$ central", "central $=2\\times$ inscribed", "same arc", "inscribed $=$ central"], [0, 1, 2]));
  q.push(tf("easy", "Circumference $=2\\pi r$.", true));
  q.push(tf("easy", "An inscribed angle is half the central angle on the same arc.", true));
  q.push(tf("easy", "Sector area $=\\frac{\\theta}{360}\\cdot2\\pi r$.", false, "That is arc length; area uses $\\pi r^2$."));
  q.push(tf("easy", "Area of a circle is $\\pi r^2$.", true));
  q.push(num("easy", "Circumference of radius 7 (in $\\pi$; coefficient).", 14, 0));
  q.push(num("easy", "Area of radius 9 (in $\\pi$; coefficient).", 81, 0));
  q.push(num("easy", "Inscribed angle if the central angle is $80^\\circ$ (degrees).", 40, 0));
  q.push(num("easy", "Central angle if the inscribed angle is $25^\\circ$ (degrees).", 50, 0));
  q.push(fill("easy", "Circumference of radius 5 is ___$\\pi$.", ["10"]));
  q.push(fill("easy", "Area of radius 8 is ___$\\pi$.", ["64"]));
  // MEDIUM
  q.push(mc("medium", "Arc of a $72^\\circ$ sector, radius 10 (in $\\pi$):", ["$4\\pi$", "$20\\pi$", "$0.2\\pi$", "$10\\pi$"], 0));
  q.push(mc("medium", "Sector area of a $72^\\circ$ sector, radius 10 (in $\\pi$):", ["$20\\pi$", "$4\\pi$", "$10\\pi$", "$36\\pi$"], 0));
  q.push(mc("medium", "Arc of a $90^\\circ$ sector, radius 12 (in $\\pi$):", ["$6\\pi$", "$3\\pi$", "$12\\pi$", "$24\\pi$"], 0));
  q.push(mc("medium", "Sector area of a $45^\\circ$ sector, radius 8 (in $\\pi$):", ["$8\\pi$", "$4\\pi$", "$16\\pi$", "$32\\pi$"], 0));
  q.push(mc("medium", "Arc of a $120^\\circ$ sector, radius 6 (in $\\pi$):", ["$4\\pi$", "$2\\pi$", "$12\\pi$", "$8\\pi$"], 0));
  q.push(mc("medium", "Sector area of a $216^\\circ$ sector, radius 5 (in $\\pi$):", ["$15\\pi$", "$10\\pi$", "$25\\pi$", "$5\\pi$"], 0));
  q.push(mc("medium", "Arc of a $180^\\circ$ sector, radius 4 (in $\\pi$):", ["$4\\pi$", "$2\\pi$", "$8\\pi$", "$16\\pi$"], 0));
  q.push(mc("medium", "Sector area of a $36^\\circ$ sector, radius 10 (in $\\pi$):", ["$10\\pi$", "$5\\pi$", "$36\\pi$", "$100\\pi$"], 0));
  q.push(ms("medium", "For a $72^\\circ$ sector radius 10, which are true?", ["arc $4\\pi$", "sector $20\\pi$", "$\\theta/360=0.2$", "arc $20\\pi$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $6\\pi$?", ["arc of $90^\\circ$ radius 12", "arc of $120^\\circ$ radius 9", "arc of $60^\\circ$ radius 18", "sector of $90^\\circ$ radius 12"], [0, 1, 2]));
  q.push(tf("medium", "The arc of a $72^\\circ$ sector radius 10 is $4\\pi$.", true));
  q.push(tf("medium", "The sector area of a $45^\\circ$ sector radius 8 is $8\\pi$.", true));
  q.push(num("medium", "Arc of a $90^\\circ$ sector radius 10 (in $\\pi$; coefficient).", 5, 0));
  q.push(num("medium", "Sector area of a $60^\\circ$ sector radius 6 (in $\\pi$; coefficient).", 6, 0));
  q.push(num("medium", "Arc of a $240^\\circ$ sector radius 9 (in $\\pi$; coefficient).", 12, 0));
  q.push(num("medium", "Sector area of a $30^\\circ$ sector radius 12 (in $\\pi$; coefficient).", 12, 0));
  q.push(fill("medium", "Arc of a $180^\\circ$ sector radius 4 is ___$\\pi$.", ["4"]));
  q.push(fill("medium", "Sector area of a $216^\\circ$ sector radius 5 is ___$\\pi$.", ["15"]));
  q.push(mc("medium", "The area of a semicircle radius 8 (in $\\pi$):", ["$32\\pi$", "$64\\pi$", "$16\\pi$", "$8\\pi$"], 0));
  q.push(mc("medium", "Circumference and area for radius 7 (in $\\pi$):", ["$14\\pi$ and $49\\pi$", "$7\\pi$ and $14\\pi$", "$49\\pi$ and $14\\pi$", "$14\\pi$ and $14\\pi$"], 0));
  // HARD
  q.push(mc("hard", "A sector radius 12 has arc length $8\\pi$. Its central angle:", ["$120^\\circ$", "$90^\\circ$", "$60^\\circ$", "$150^\\circ$"], 0));
  q.push(mc("hard", "That sector's area (in $\\pi$):", ["$48\\pi$", "$24\\pi$", "$16\\pi$", "$96\\pi$"], 0));
  q.push(mc("hard", "A sector of area $15\\pi$ and radius 5 has central angle:", ["$216^\\circ$", "$180^\\circ$", "$150^\\circ$", "$90^\\circ$"], 0));
  q.push(mc("hard", "A $60^\\circ$ sector radius 12 has arc length (decimal, 2 dp):", ["$12.57$", "$6.28$", "$18.85$", "$25.13$"], 0));
  q.push(mc("hard", "The perimeter of a $90^\\circ$ sector radius 10 (two radii + arc, 1 dp):", ["$35.7$", "$15.7$", "$20.0$", "$31.4$"], 0));
  q.push(mc("hard", "An inscribed angle subtending a diameter is:", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "$60^\\circ$"], 0));
  q.push(mc("hard", "A $45^\\circ$ sector radius 8: its area (decimal, 2 dp):", ["$25.13$", "$50.27$", "$12.57$", "$8.00$"], 0));
  q.push(mc("hard", "A circle has circumference $20\\pi$. Its radius:", ["$10$", "$20$", "$5$", "$40$"], 0));
  q.push(ms("hard", "For a sector radius 12 with arc $8\\pi$, which are true?", ["central angle $120^\\circ$", "area $48\\pi$", "$\\theta/360=1/3$", "arc $8\\pi$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which equal a $90^\\circ$ right angle?", ["inscribed angle on a diameter", "half of $180^\\circ$ central", "$\\frac14$ of a full turn", "central angle of a quarter sector"], [0, 1, 2, 3]));
  q.push(tf("hard", "A sector radius 12 with arc $8\\pi$ has central angle $120^\\circ$.", true));
  q.push(tf("hard", "An inscribed angle in a semicircle (on the diameter) is $90^\\circ$.", true));
  q.push(tf("hard", "A sector of area $15\\pi$ and radius 5 has central angle $216^\\circ$.", true));
  q.push(tf("hard", "A $45^\\circ$ sector radius 8 has area $16\\pi$.", false, "It is $8\\pi\\approx25.13$."));
  q.push(num("hard", "The central angle of a sector radius 12 with arc length $8\\pi$ (degrees).", 120, 0));
  q.push(num("hard", "The area of that sector (in $\\pi$; coefficient).", 48, 0));
  q.push(num("hard", "The perimeter of a $90^\\circ$ sector radius 10 (two radii + arc, 1 dp).", 35.7, 0.1));
  q.push(num("hard", "The radius of a circle with circumference $20\\pi$.", 10, 0));
  q.push(fill("hard", "A sector of area $15\\pi$, radius 5, has central angle ___$^\\circ$.", ["216"]));
  q.push(fill("hard", "An inscribed angle subtending a diameter is ___$^\\circ$.", ["90"]));
  return q;
}

// ── 4.6 Surface Area & Volume ─────────────────────────────────
function g46() {
  const q = [];
  // EASY
  q.push(mc("easy", "Volume of a rectangular prism:", ["$lwh$", "$2(lw+lh+wh)$", "$lw$", "$l+w+h$"], 0));
  q.push(mc("easy", "Volume of a cylinder:", ["$\\pi r^2h$", "$2\\pi rh$", "$\\pi r^2$", "$\\frac43\\pi r^3$"], 0));
  q.push(mc("easy", "Volume of a sphere:", ["$\\frac43\\pi r^3$", "$4\\pi r^2$", "$\\pi r^2h$", "$\\frac13\\pi r^2h$"], 0));
  q.push(mc("easy", "Volume of a cone:", ["$\\frac13\\pi r^2h$", "$\\pi r^2h$", "$\\frac43\\pi r^3$", "$2\\pi rh$"], 0));
  q.push(mc("easy", "Surface area of a sphere:", ["$4\\pi r^2$", "$\\frac43\\pi r^3$", "$2\\pi r^2$", "$\\pi r^2$"], 0));
  q.push(mc("easy", "Volume of a cube side $x$:", ["$x^3$", "$6x^2$", "$3x$", "$x^2$"], 0));
  q.push(mc("easy", "Surface area of a cube side 5:", ["$150$", "$25$", "$125$", "$30$"], 0));
  q.push(ms("easy", "Which are volume formulas?", ["cylinder $\\pi r^2h$", "cone $\\frac13\\pi r^2h$", "sphere $\\frac43\\pi r^3$", "circle $\\pi r^2$"], [0, 1, 2]));
  q.push(ms("easy", "Which need a slant height?", ["cone surface area", "pyramid surface area", "cylinder volume", "sphere volume"], [0, 1]));
  q.push(ms("easy", "For a $4\\times5\\times6$ prism, which give 120?", ["$4\\cdot5\\cdot6$", "$120$", "base $20\\times$ height 6", "$4+5+6$"], [0, 1, 2]));
  q.push(tf("easy", "Volume of a sphere is $\\frac43\\pi r^3$.", true));
  q.push(tf("easy", "A cone's volume is one-third that of a cylinder with the same base and height.", true));
  q.push(tf("easy", "Surface area of a sphere is $2\\pi r^2$.", false, "It is $4\\pi r^2$."));
  q.push(tf("easy", "Volume of a cube side $x$ is $x^3$.", true));
  q.push(num("easy", "Volume of a $3\\times4\\times10$ prism.", 120, 0));
  q.push(num("easy", "Surface area of a cube side 5.", 150, 0));
  q.push(num("easy", "Volume of a cylinder radius 3, height 7 (in $\\pi$; coefficient).", 63, 0));
  q.push(num("easy", "Volume of a cube side 4.", 64, 0));
  q.push(fill("easy", "Volume of a sphere radius 3 is ___$\\pi$ (coefficient).", ["36"]));
  q.push(fill("easy", "Volume of a cylinder radius 5 height 10 is ___$\\pi$.", ["250"]));
  // MEDIUM
  q.push(mc("medium", "Volume of a cylinder $r=5,h=10$ (in $\\pi$):", ["$250\\pi$", "$500\\pi$", "$150\\pi$", "$50\\pi$"], 0));
  q.push(mc("medium", "Surface area of a closed cylinder $r=5,h=10$ (in $\\pi$):", ["$150\\pi$", "$250\\pi$", "$100\\pi$", "$75\\pi$"], 0));
  q.push(mc("medium", "Volume of a cone $r=3,h=4$ (in $\\pi$):", ["$12\\pi$", "$36\\pi$", "$9\\pi$", "$4\\pi$"], 0));
  q.push(mc("medium", "Surface area of a cone $r=3$, slant 5 (in $\\pi$):", ["$24\\pi$", "$9\\pi$", "$15\\pi$", "$30\\pi$"], 0));
  q.push(mc("medium", "Volume of a sphere $r=6$ (in $\\pi$):", ["$288\\pi$", "$144\\pi$", "$216\\pi$", "$36\\pi$"], 0));
  q.push(mc("medium", "Surface area of a sphere $r=6$ (in $\\pi$):", ["$144\\pi$", "$288\\pi$", "$36\\pi$", "$72\\pi$"], 0));
  q.push(mc("medium", "Volume of a square pyramid base 6, height 4:", ["$48$", "$144$", "$24$", "$36$"], 0));
  q.push(mc("medium", "The slant height of a cone $r=3,h=4$:", ["$5$", "$7$", "$6$", "$4$"], 0));
  q.push(ms("medium", "For a cylinder $r=5,h=10$, which are true?", ["$V=250\\pi$", "$SA=150\\pi$", "$V\\approx785.4$", "$V=500\\pi$"], [0, 1, 2]));
  q.push(ms("medium", "For a cone $r=3,h=4$, which are true?", ["slant 5", "$V=12\\pi$", "$SA=24\\pi$", "$V=36\\pi$"], [0, 1, 2]));
  q.push(tf("medium", "Volume of a cylinder $r=5,h=10$ is $250\\pi$.", true));
  q.push(tf("medium", "Surface area of a sphere $r=6$ is $144\\pi$.", true));
  q.push(num("medium", "Volume of a cone $r=4,h=9$ (in $\\pi$; coefficient).", 48, 0));
  q.push(num("medium", "Volume of a sphere $r=5$ (decimal, 1 dp).", 523.6, 0.2));
  q.push(num("medium", "Surface area of a sphere $r=7$ (in $\\pi$; coefficient).", 196, 0));
  q.push(num("medium", "The slant height of a cone $r=6,h=8$.", 10, 0));
  q.push(fill("medium", "Volume of a cube side $x$ is $x$ raised to the power ___.", ["3"]));
  q.push(fill("medium", "Volume of a cone $r=3,h=4$ is ___$\\pi$.", ["12"]));
  q.push(mc("medium", "Volume of a hemisphere $r=6$ (in $\\pi$):", ["$144\\pi$", "$288\\pi$", "$72\\pi$", "$216\\pi$"], 0));
  q.push(mc("medium", "Volume of a square pyramid base 8, height 9:", ["$192$", "$576$", "$288$", "$72$"], 0));
  // HARD
  q.push(mc("hard", "A cone $r=9,h=12$: slant height:", ["$15$", "$21$", "$3$", "$10.8$"], 0));
  q.push(mc("hard", "A cone $r=9,h=12$: volume (in $\\pi$):", ["$324\\pi$", "$972\\pi$", "$108\\pi$", "$243\\pi$"], 0));
  q.push(mc("hard", "A cone $r=9,h=12$: total surface area (in $\\pi$):", ["$216\\pi$", "$135\\pi$", "$81\\pi$", "$324\\pi$"], 0));
  q.push(mc("hard", "A cylinder $r=4,h=9$: volume (in $\\pi$):", ["$144\\pi$", "$36\\pi$", "$288\\pi$", "$72\\pi$"], 0));
  q.push(mc("hard", "A cone $r=6,h=8$ (slant 10): volume (in $\\pi$):", ["$96\\pi$", "$48\\pi$", "$288\\pi$", "$192\\pi$"], 0));
  q.push(mc("hard", "A cone $r=6,h=8$ (slant 10): surface area (in $\\pi$):", ["$96\\pi$", "$36\\pi$", "$60\\pi$", "$144\\pi$"], 0));
  q.push(mc("hard", "A closed cylinder $r=5,h=8$: surface area (in $\\pi$):", ["$130\\pi$", "$80\\pi$", "$50\\pi$", "$65\\pi$"], 0));
  q.push(mc("hard", "A sphere $r=3$: volume and surface area (in $\\pi$):", ["$36\\pi$ and $36\\pi$", "$36\\pi$ and $12\\pi$", "$12\\pi$ and $36\\pi$", "$9\\pi$ and $36\\pi$"], 0));
  q.push(ms("hard", "For a cone $r=9,h=12$, which are true?", ["slant 15", "$V=324\\pi$", "$SA=216\\pi$", "slant 21"], [0, 1, 2]));
  q.push(ms("hard", "For a sphere $r=6$, which are true?", ["$V=288\\pi$", "$SA=144\\pi$", "$V\\approx904.8$", "$SA\\approx452.4$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A cone $r=9,h=12$ has slant height 15.", true));
  q.push(tf("hard", "A cone $r=9,h=12$ has total surface area $216\\pi$.", true));
  q.push(tf("hard", "A closed cylinder $r=5,h=8$ has surface area $130\\pi$.", true));
  q.push(tf("hard", "A cone's volume equals the cylinder's volume with the same base and height.", false, "It is one-third."));
  q.push(num("hard", "The slant height of a cone $r=9,h=12$.", 15, 0));
  q.push(num("hard", "The volume of a cone $r=9,h=12$ (in $\\pi$; coefficient).", 324, 0));
  q.push(num("hard", "The total surface area of a cone $r=9,h=12$ (in $\\pi$; coefficient).", 216, 0));
  q.push(num("hard", "The surface area of a closed cylinder $r=5,h=8$ (in $\\pi$; coefficient).", 130, 0));
  q.push(fill("hard", "A cone $r=9,h=12$ has slant height ___.", ["15"]));
  q.push(fill("hard", "A cone $r=6$, slant 10 has surface area ___$\\pi$ (coefficient).", ["96"]));
  return q;
}

// ── 4.7 Composite Figures ─────────────────────────────────────
function g47() {
  const q = [];
  // EASY
  q.push(mc("easy", "To find a composite volume, you:", ["add the parts (or subtract holes)", "multiply the parts", "only add", "take a root"], 0));
  q.push(mc("easy", "Volume of a hemisphere:", ["$\\frac23\\pi r^3$", "$\\frac43\\pi r^3$", "$\\frac13\\pi r^3$", "$2\\pi r^3$"], 0));
  q.push(mc("easy", "A cylinder with a hemisphere on top has volume:", ["cylinder $+$ hemisphere", "cylinder $-$ hemisphere", "cylinder $\\times$ hemisphere", "hemisphere only"], 0));
  q.push(mc("easy", "A block with a drilled hole has volume:", ["block $-$ cylinder", "block $+$ cylinder", "block $\\times$ cylinder", "cylinder only"], 0));
  q.push(mc("easy", "Two stacked boxes $5\\times4\\times3$ and $5\\times4\\times2$ have volume:", ["$100$", "$60$", "$40$", "$20$"], 0));
  q.push(mc("easy", "A capsule is a cylinder plus:", ["two hemispheres", "one cone", "a cube", "a pyramid"], 0));
  q.push(mc("easy", "Volume of a hemisphere $r=3$ (in $\\pi$):", ["$18\\pi$", "$36\\pi$", "$9\\pi$", "$27\\pi$"], 0));
  q.push(ms("easy", "Which are composite solids?", ["cylinder + hemisphere", "cone + cylinder", "block − cylinder hole", "a plain cube"], [0, 1, 2]));
  q.push(ms("easy", "To find a composite volume:", ["split into standard solids", "add the volumes", "subtract holes", "add surface areas"], [0, 1, 2]));
  q.push(ms("easy", "A hemisphere has volume:", ["$\\frac23\\pi r^3$", "half a sphere", "$\\frac12\\cdot\\frac43\\pi r^3$", "$\\frac43\\pi r^3$"], [0, 1, 2]));
  q.push(tf("easy", "A hemisphere has volume $\\frac23\\pi r^3$.", true));
  q.push(tf("easy", "A drilled block's volume is block minus cylinder.", true));
  q.push(tf("easy", "A composite volume is the product of its parts.", false, "It is the sum, or a difference for holes."));
  q.push(tf("easy", "A capsule is a cylinder with a hemisphere on each end.", true));
  q.push(num("easy", "Two boxes $5\\times4\\times3$ and $5\\times4\\times2$ stacked (volume).", 100, 0));
  q.push(num("easy", "Volume of a hemisphere $r=3$ (in $\\pi$; coefficient).", 18, 0));
  q.push(num("easy", "A cylinder $r=2,h=5$ (in $\\pi$; coefficient).", 20, 0));
  q.push(num("easy", "A cone $r=2,h=3$ (in $\\pi$; coefficient).", 4, 0));
  q.push(fill("easy", "A hemisphere has volume $\\frac23\\pi r$ raised to the power ___.", ["3"]));
  q.push(fill("easy", "A drilled block's volume is block ___ cylinder (plus/minus).", ["minus"]));
  // MEDIUM
  q.push(mc("medium", "A cylinder ($r=3,h=10$) topped by a hemisphere ($r=3$): volume (in $\\pi$):", ["$108\\pi$", "$90\\pi$", "$126\\pi$", "$54\\pi$"], 0));
  q.push(mc("medium", "A cone ($r=3,h=4$) on a cylinder ($r=3,h=6$): volume (in $\\pi$):", ["$66\\pi$", "$78\\pi$", "$54\\pi$", "$12\\pi$"], 0));
  q.push(mc("medium", "A $10\\times8\\times6$ box with a cylindrical hole ($r=2$) through height 6 (1 dp):", ["$404.6$", "$480.0$", "$555.4$", "$400.0$"], 0));
  q.push(mc("medium", "A cylinder ($r=2,h=5$) with a cone ($r=2,h=3$) on top (in $\\pi$):", ["$24\\pi$", "$20\\pi$", "$28\\pi$", "$4\\pi$"], 0));
  q.push(mc("medium", "A hemisphere ($r=3$) on a cylinder ($r=3,h=8$): volume (in $\\pi$):", ["$90\\pi$", "$72\\pi$", "$108\\pi$", "$18\\pi$"], 0));
  q.push(mc("medium", "A cone ($r=6,h=8$) on a cylinder ($r=6,h=10$): volume (in $\\pi$):", ["$456\\pi$", "$360\\pi$", "$96\\pi$", "$552\\pi$"], 0));
  q.push(mc("medium", "A cone ($r=3,h=8$) topped by a hemisphere ($r=3$): volume (in $\\pi$):", ["$42\\pi$", "$24\\pi$", "$18\\pi$", "$66\\pi$"], 0));
  q.push(mc("medium", "A $6\\times4\\times5$ box with a cylindrical hole ($r=1$) through height 5 (1 dp):", ["$104.3$", "$120.0$", "$135.7$", "$100.0$"], 0));
  q.push(ms("medium", "For a cylinder ($r=3,h=10$) + hemisphere ($r=3$), which are true?", ["cylinder $90\\pi$", "hemisphere $18\\pi$", "total $108\\pi$", "total $\\approx339.3$"], [0, 1, 2, 3]));
  q.push(ms("medium", "For a cone ($r=3,h=4$) on a cylinder ($r=3,h=6$), which are true?", ["cone $12\\pi$", "cylinder $54\\pi$", "total $66\\pi$", "total $78\\pi$"], [0, 1, 2]));
  q.push(tf("medium", "A cylinder ($r=3,h=10$) + hemisphere ($r=3$) has volume $108\\pi$.", true));
  q.push(tf("medium", "A $10\\times8\\times6$ box minus a cylindrical hole ($r=2$, through 6) has volume $\\approx404.6$.", true));
  q.push(num("medium", "A cone ($r=3,h=4$) on a cylinder ($r=3,h=6$): volume (in $\\pi$; coefficient).", 66, 0));
  q.push(num("medium", "A cylinder ($r=3,h=10$) + hemisphere ($r=3$): volume (decimal, 1 dp).", 339.3, 0.2));
  q.push(num("medium", "A $10\\times8\\times6$ box with a hole ($r=2$, through 6): volume (1 dp).", 404.6, 0.2));
  q.push(num("medium", "A hemisphere ($r=3$) on a cylinder ($r=3,h=8$): volume (in $\\pi$; coefficient).", 90, 0));
  q.push(fill("medium", "A cone ($r=6,h=8$) on a cylinder ($r=6,h=10$) has volume ___$\\pi$ (coefficient).", ["456"]));
  q.push(fill("medium", "A $6\\times4\\times5$ box minus a cylinder hole ($r=1$, through 5) $\\approx$ ___ (1 dp).", ["104.3"]));
  q.push(mc("medium", "A capsule (cylinder $r=2,h=10$ + a hemisphere each end): volume (1 dp):", ["$159.2$", "$125.7$", "$200.0$", "$150.0$"], 0));
  q.push(mc("medium", "A cylinder ($r=5,h=12$) with a hemispherical cap ($r=5$): volume (decimal, 1 dp):", ["$1204.3$", "$942.5$", "$1466.1$", "$1100.0$"], 0));
  // HARD
  q.push(mc("hard", "A hemisphere ($r=6$) on a cylinder ($r=6,h=10$): volume (in $\\pi$):", ["$504\\pi$", "$360\\pi$", "$144\\pi$", "$648\\pi$"], 0));
  q.push(mc("hard", "A $12\\times10\\times8$ box with a hole ($r=3$) through height 8 (1 dp):", ["$733.8$", "$960.0$", "$1186.2$", "$700.0$"], 0));
  q.push(mc("hard", "A grain silo: cylinder ($r=4,h=15$) + hemisphere ($r=4$) (1 dp):", ["$888.0$", "$754.0$", "$1005.3$", "$800.0$"], 0));
  q.push(mc("hard", "A silo: cylinder ($r=4,h=12$) + hemisphere ($r=4$) (1 dp):", ["$737.2$", "$603.2$", "$871.3$", "$700.0$"], 0));
  q.push(mc("hard", "A dome: hemisphere ($r=6$) on cylinder ($r=6,h=10$) (decimal, 1 dp):", ["$1583.4$", "$1130.0$", "$2035.8$", "$1500.0$"], 0));
  q.push(mc("hard", "An ice-cream cone (cone $r=3,h=8$) filled + hemisphere ($r=3$) scoop (in $\\pi$):", ["$42\\pi$", "$24\\pi$", "$18\\pi$", "$66\\pi$"], 0));
  q.push(mc("hard", "A cylinder ($r=5,h=12$) + hemispherical cap ($r=5$): volume (in $\\pi$):", ["$300\\pi+\\frac{250}{3}\\pi$", "$300\\pi$", "$\\frac{250}{3}\\pi$", "$550\\pi$"], 0));
  q.push(mc("hard", "A $12\\times10\\times8$ box minus a hole ($r=3$, through 8) (in $\\pi$ form):", ["$960-72\\pi$", "$960-24\\pi$", "$960-9\\pi$", "$960-144\\pi$"], 0));
  q.push(ms("hard", "For a silo cylinder ($r=4,h=15$) + hemisphere ($r=4$), which are true?", ["cylinder $240\\pi$", "hemisphere $\\frac{128}{3}\\pi$", "total $\\approx888.0$", "hemisphere $128\\pi$"], [0, 1, 2]));
  q.push(ms("hard", "For a hemisphere ($r=6$) on cylinder ($r=6,h=10$), which are true?", ["cylinder $360\\pi$", "hemisphere $144\\pi$", "total $504\\pi$", "total $\\approx1583.4$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A hemisphere ($r=6$) on a cylinder ($r=6,h=10$) has volume $504\\pi$.", true));
  q.push(tf("hard", "A $12\\times10\\times8$ box minus a hole ($r=3$, through 8) has volume $\\approx733.8$.", true));
  q.push(tf("hard", "A silo cylinder ($r=4,h=15$) + hemisphere ($r=4$) has volume $\\approx888.0$.", true));
  q.push(tf("hard", "A capsule's two hemispheres together equal one full sphere.", true));
  q.push(num("hard", "A hemisphere ($r=6$) on a cylinder ($r=6,h=10$): volume (in $\\pi$; coefficient).", 504, 0));
  q.push(num("hard", "A $12\\times10\\times8$ box minus a hole ($r=3$, through 8): volume (1 dp).", 733.8, 0.2));
  q.push(num("hard", "A grain silo cylinder ($r=4,h=15$) + hemisphere ($r=4$): volume (1 dp).", 888.0, 0.3));
  q.push(num("hard", "A cylinder ($r=5,h=12$) + hemispherical cap ($r=5$): volume (1 dp).", 1204.3, 0.3));
  q.push(fill("hard", "A hemisphere ($r=6$) on a cylinder ($r=6,h=10$) has volume ___$\\pi$ (coefficient).", ["504"]));
  q.push(fill("hard", "A silo cylinder ($r=4,h=12$) + hemisphere ($r=4$) $\\approx$ ___ (1 dp).", ["737.2"]));
  return q;
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
  { code: "4.5", gen: g45 },
  { code: "4.6", gen: g46 },
  { code: "4.7", gen: g47 },
];
