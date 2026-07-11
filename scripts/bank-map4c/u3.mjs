// MAP4C Unit 3 — Geometry & Trigonometry: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard. Trig in DEGREES.
// Conversions: 1 in=2.54 cm, 1 ft=0.3048 m=30.48 cm, 1 mi=1.60934 km,
//   1 kg=2.20462 lb, 1 gal(US)=3.785 L.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 3.1 Unit Conversion (Metric & Imperial) ──────────────────
function g31() {
  const q = [];
  // EASY
  q.push(mc("easy", "$1$ m $=$", ["$100$ cm", "$10$ cm", "$1000$ cm", "$1$ cm"], 0));
  q.push(mc("easy", "$1$ km $=$", ["$1000$ m", "$100$ m", "$10$ m", "$1$ m"], 0));
  q.push(mc("easy", "$1$ L $=$", ["$1000$ mL", "$100$ mL", "$10$ mL", "$1$ mL"], 0));
  q.push(mc("easy", "$1$ inch $=$", ["$2.54$ cm", "$3.28$ cm", "$1.6$ cm", "$12$ cm"], 0));
  q.push(mc("easy", "$1$ foot $=$", ["$12$ inches", "$10$ inches", "$3$ inches", "$100$ inches"], 0));
  q.push(mc("easy", "$1$ kg $\\approx$", ["$2.2$ lb", "$1$ lb", "$16$ lb", "$0.45$ lb"], 0));
  q.push(mc("easy", "$2.5$ m $=$", ["$250$ cm", "$25$ cm", "$2500$ cm", "$0.25$ cm"], 0));
  q.push(ms("easy", "Which equal $1$ metre?", ["$100$ cm", "$1000$ mm", "$0.001$ km", "$10$ cm"], [0, 1, 2]));
  q.push(ms("easy", "Metric length units:", ["mm", "cm", "km", "pound"], [0, 1, 2]));
  q.push(ms("easy", "Imperial units:", ["inch", "foot", "mile", "litre"], [0, 1, 2]));
  q.push(tf("easy", "$1$ inch equals $2.54$ cm.", true));
  q.push(tf("easy", "$1$ km equals $1000$ m.", true));
  q.push(tf("easy", "$1$ L equals $100$ mL.", false, "$1$ L $=1000$ mL."));
  q.push(tf("easy", "$1$ foot equals $12$ inches.", true));
  q.push(num("easy", "$3$ L to millilitres.", 3000, 0));
  q.push(num("easy", "$2.5$ m to centimetres.", 250, 0));
  q.push(num("easy", "$5$ km to metres.", 5000, 0));
  q.push(num("easy", "$12$ inches to centimetres (2 dp).", 30.48, 0.05));
  q.push(fill("easy", "$1$ m $=$ ___ cm.", ["100"]));
  q.push(fill("easy", "$1$ inch $=$ ___ cm.", ["2.54"]));
  // MEDIUM
  q.push(mc("medium", "$5$ inches to cm:", ["$12.70$", "$7.62$", "$2.54$", "$10$"], 0));
  q.push(mc("medium", "$10$ ft to metres:", ["$3.05$", "$30.48$", "$0.3$", "$120$"], 0));
  q.push(mc("medium", "$3$ miles to km:", ["$4.83$", "$1.86$", "$3$", "$4.8$"], 0));
  q.push(mc("medium", "$5$ kg to pounds:", ["$11.02$", "$2.27$", "$5$", "$16$"], 0));
  q.push(mc("medium", "$6$ ft to centimetres:", ["$182.88$", "$72$", "$18.29$", "$200$"], 0));
  q.push(mc("medium", "$50$ miles to km:", ["$80.47$", "$31.07$", "$50$", "$80$"], 0));
  q.push(mc("medium", "$25$ lb to kg:", ["$11.34$", "$55.12$", "$25$", "$12.5$"], 0));
  q.push(mc("medium", "$2$ US gallons to litres:", ["$7.57$", "$0.53$", "$2$", "$8$"], 0));
  q.push(ms("medium", "Which equal about $5$ km?", ["$5000$ m", "$\\approx3.1$ mi", "$500000$ cm", "$5$ mi"], [0, 1, 2]));
  q.push(ms("medium", "To convert inches to cm you:", ["multiply by $2.54$", "divide by $0.3937$", "multiply by $12$", "add $2.54$"], [0, 1]));
  q.push(tf("medium", "$3$ miles is about $4.83$ km.", true));
  q.push(tf("medium", "$5$ kg is about $11.02$ lb.", true));
  q.push(num("medium", "$5$ inches to cm (2 dp).", 12.7, 0.05));
  q.push(num("medium", "$10$ ft to metres (2 dp).", 3.05, 0.02));
  q.push(num("medium", "$3$ miles to km (2 dp).", 4.83, 0.02));
  q.push(num("medium", "$5$ kg to pounds (2 dp).", 11.02, 0.05));
  q.push(fill("medium", "$50$ miles $\\approx$ ___ km (2 dp).", ["80.47"]));
  q.push(fill("medium", "$2$ US gallons $\\approx$ ___ L (2 dp).", ["7.57"]));
  q.push(mc("medium", "$8$ km to miles:", ["$4.97$", "$12.87$", "$8$", "$5$"], 0));
  q.push(mc("medium", "$100$ km/h to m/s (2 dp):", ["$27.78$", "$16.67$", "$100$", "$360$"], 0));
  // HARD
  q.push(mc("hard", "A $5$ m $\\times$ $4$ m room to square feet ($1$ m $=3.28$ ft):", ["$\\approx215$ ft$^2$", "$\\approx20$ ft$^2$", "$\\approx65$ ft$^2$", "$\\approx6.1$ ft$^2$"], 0));
  q.push(mc("hard", "$5$ m$^2$ to cm$^2$:", ["$50000$", "$500$", "$5000$", "$500000$"], 0));
  q.push(mc("hard", "$1$ m$^3$ to cm$^3$:", ["$1000000$", "$1000$", "$100$", "$10000$"], 0));
  q.push(mc("hard", "$60$ mph to km/h (2 dp):", ["$96.56$", "$37.28$", "$60$", "$100$"], 0));
  q.push(mc("hard", "A recipe needs $500$ g; how many pounds ($1$ lb $=454$ g)?", ["$\\approx1.10$", "$\\approx2.2$", "$\\approx0.5$", "$\\approx5$"], 0));
  q.push(mc("hard", "A $12$-ft $\\times$ $10$-ft floor in m$^2$ (2 dp):", ["$11.15$", "$120$", "$36.58$", "$3.66$"], 0));
  q.push(mc("hard", "Gas at \\$1.50/L; a $12$-gallon tank costs ($1$ gal $=3.785$ L):", ["\\$68.13", "\\$18", "\\$45.42", "\\$12"], 0));
  q.push(mc("hard", "$2$ m$^2$ to square inches ($1$ in $=2.54$ cm):", ["$\\approx3100$", "$\\approx79$", "$\\approx200$", "$\\approx6200$"], 0));
  q.push(ms("hard", "Area conversion $5$ m$^2$ to cm$^2$ uses:", ["$\\times100^2$", "$\\times10000$", "$=50000$ cm$^2$", "$\\times100$"], [0, 1, 2]));
  q.push(ms("hard", "Correct unit facts:", ["$1$ m$^3=10^6$ cm$^3$", "$1$ m$^2=10^4$ cm$^2$", "$1$ km$=10^3$ m", "$1$ m$^2=100$ cm$^2$"], [0, 1, 2]));
  q.push(tf("hard", "$5$ m$^2$ equals $50000$ cm$^2$.", true));
  q.push(tf("hard", "$1$ m$^3$ equals $1000000$ cm$^3$.", true));
  q.push(tf("hard", "$60$ mph is about $96.56$ km/h.", true));
  q.push(tf("hard", "To convert m$^2$ to cm$^2$ you multiply by $100$.", false, "You multiply by $100^2=10000$."));
  q.push(num("hard", "$5$ m$^2$ to cm$^2$.", 50000, 0));
  q.push(num("hard", "$1$ m$^3$ to cm$^3$.", 1000000, 0));
  q.push(num("hard", "$60$ mph to km/h (2 dp).", 96.56, 0.1));
  q.push(num("hard", "$100$ km/h to m/s (2 dp).", 27.78, 0.05));
  q.push(fill("hard", "$1$ m$^2=$ ___ cm$^2$.", ["10000"]));
  q.push(fill("hard", "A $12$-gallon tank $\\approx$ ___ L (2 dp).", ["45.42"]));
  return q;
}

// ── 3.2 Areas of Composite Shapes ────────────────────────────
function g32() {
  const q = [];
  const PI = Math.PI;
  // EASY
  q.push(mc("easy", "Area of a rectangle $8\\times5$:", ["$40$", "$26$", "$13$", "$45$"], 0));
  q.push(mc("easy", "Area of a triangle base $6$, height $4$:", ["$12$", "$24$", "$10$", "$14$"], 0));
  q.push(mc("easy", "Area of a circle, $r=3$ (2 dp):", ["$28.27$", "$18.85$", "$9.42$", "$9$"], 0));
  q.push(mc("easy", "A composite shape's area is found by:", ["adding/subtracting simple pieces", "guessing", "measuring the perimeter", "one formula only"], 0));
  q.push(mc("easy", "Area of a square, side $7$:", ["$49$", "$28$", "$14$", "$56$"], 0));
  q.push(mc("easy", "Area of a parallelogram base $10$, height $3$:", ["$30$", "$13$", "$26$", "$15$"], 0));
  q.push(mc("easy", "Area of a semicircle, $r=4$ (2 dp):", ["$25.13$", "$50.27$", "$12.57$", "$8$"], 0));
  q.push(ms("easy", "Composite areas can be found by:", ["adding pieces", "subtracting a cut-out", "splitting into shapes", "ignoring units"], [0, 1, 2]));
  q.push(ms("easy", "Area formulas:", ["rectangle $lw$", "triangle $\\tfrac12bh$", "circle $\\pi r^2$", "circle $2\\pi r$"], [0, 1, 2]));
  q.push(ms("easy", "Units of area:", ["cm$^2$", "m$^2$", "ft$^2$", "cm"], [0, 1, 2]));
  q.push(tf("easy", "Area is measured in square units.", true));
  q.push(tf("easy", "A composite area can be a sum of simpler areas.", true));
  q.push(tf("easy", "A circle's area is $2\\pi r$.", false, "That is the circumference; area is $\\pi r^2$."));
  q.push(tf("easy", "A triangle's area is $\\tfrac12bh$.", true));
  q.push(num("easy", "Area of an $8\\times5$ rectangle.", 40, 0));
  q.push(num("easy", "Area of a triangle base $6$, height $4$.", 12, 0));
  q.push(num("easy", "Area of a square, side $7$.", 49, 0));
  q.push(num("easy", "Area of a circle $r=3$ (2 dp).", 28.27, 0.05));
  q.push(fill("easy", "A circle of radius $5$ has area ___ (2 dp).", ["78.54"]));
  q.push(fill("easy", "A rectangle $8\\times5$ has area ___.", ["40"]));
  // MEDIUM
  q.push(mc("medium", "An L-shape: $10\\times8$ rectangle with a $4\\times3$ corner removed. Area:", ["$68$", "$80$", "$12$", "$92$"], 0));
  q.push(mc("medium", "A trapezoid, parallel sides $6$ and $10$, height $4$:", ["$32$", "$60$", "$40$", "$16$"], 0));
  q.push(mc("medium", "A $10\\times6$ rectangle topped by a semicircle $r=3$ (2 dp):", ["$74.14$", "$60$", "$88.27$", "$28.27$"], 0));
  q.push(mc("medium", "A quarter-circle, $r=8$ (2 dp):", ["$50.27$", "$201.06$", "$100.53$", "$25.13$"], 0));
  q.push(mc("medium", "A rectangle $12\\times5$ with a triangle (base $12$, height $4$) on top:", ["$84$", "$60$", "$24$", "$72$"], 0));
  q.push(mc("medium", "Circumference of a circle $r=5$ (2 dp):", ["$31.42$", "$78.54$", "$15.71$", "$25$"], 0));
  q.push(mc("medium", "A square side $10$ with a circle $r=3$ cut out (2 dp):", ["$71.73$", "$100$", "$128.27$", "$91$"], 0));
  q.push(mc("medium", "Two triangles each base $6$, height $4$, together:", ["$24$", "$12$", "$48$", "$20$"], 0));
  q.push(ms("medium", "For an L-shape you can:", ["split into two rectangles", "subtract a corner", "add pieces", "use $\\pi r^2$ only"], [0, 1, 2]));
  q.push(ms("medium", "A trapezoid area equals:", ["$\\tfrac12(a+b)h$", "average of parallel sides $\\times h$", "$\\tfrac12(6+10)(4)=32$", "$a\\cdot b$"], [0, 1, 2]));
  q.push(tf("medium", "The L-shape ($10\\times8$ minus $4\\times3$) has area $68$.", true));
  q.push(tf("medium", "A trapezoid with parallel sides $6,10$ and height $4$ has area $32$.", true));
  q.push(num("medium", "L-shape area: $10\\times8$ minus $4\\times3$.", 68, 0));
  q.push(num("medium", "Trapezoid area, parallel sides $6,10$, height $4$.", 32, 0));
  q.push(num("medium", "Quarter-circle area $r=8$ (2 dp).", 50.27, 0.1));
  q.push(num("medium", "Circumference of a circle $r=5$ (2 dp).", 31.42, 0.05));
  q.push(fill("medium", "A $10\\times6$ rectangle plus a semicircle $r=3$ has area ___ (2 dp).", ["74.14"]));
  q.push(fill("medium", "A square side $10$ minus a circle $r=3$ has area ___ (2 dp).", ["71.73"]));
  q.push(mc("medium", "A running-track infield: rectangle $80\\times40$ plus two semicircles $r=20$ (2 dp):", ["$4456.64$", "$3200$", "$4457$", "$5456.64$"], 0));
  q.push(mc("medium", "A washer: circle $R=6$ minus circle $r=4$ (2 dp):", ["$62.83$", "$113.10$", "$50.27$", "$12.57$"], 0));
  // HARD
  q.push(mc("hard", "A garden: $12\\times9$ rectangle with a $3$-wide path removed around a $6\\times3$ pond. Pond area removed:", ["$18$", "$108$", "$90$", "$54$"], 0));
  q.push(mc("hard", "A $20\\times12$ pool surrounded by a $2$-m walkway. Walkway area:", ["$144$", "$240$", "$384$", "$96$"], 0));
  q.push(mc("hard", "A field: rectangle $50\\times30$ with a semicircle $r=15$ added at one end (2 dp):", ["$1853.43$", "$1500$", "$2207$", "$1853$"], 0));
  q.push(mc("hard", "A circular pizza $r=15$ cut from a $32\\times32$ box; leftover box area (2 dp):", ["$317.14$", "$706.86$", "$1024$", "$324$"], 0));
  q.push(mc("hard", "An arrow: rectangle $8\\times3$ plus a triangle base $6$, height $4$:", ["$36$", "$24$", "$48$", "$30$"], 0));
  q.push(mc("hard", "A window: $1.2\\times0.8$ rectangle with a semicircle $r=0.6$ on top (2 dp):", ["$1.53$", "$0.96$", "$2.09$", "$1.09$"], 0));
  q.push(mc("hard", "A ring (annulus): outer $r=10$, inner $r=7$ (2 dp):", ["$160.22$", "$314.16$", "$153.94$", "$53.41$"], 0));
  q.push(mc("hard", "Cost to sod a $15\\times10$ lawn (with a $4\\times4$ patio removed) at \\$3/m$^2$:", ["\\$402", "\\$450", "\\$48", "\\$390"], 0));
  q.push(ms("hard", "For a rectangle-plus-semicircle region, the total area is:", ["$lw+\\tfrac12\\pi r^2$", "sum of the parts", "$lw+\\pi r^2$", "$lw-\\tfrac12\\pi r^2$"], [0, 1]));
  q.push(ms("hard", "For an annulus (ring), the area is:", ["$\\pi R^2-\\pi r^2$", "$\\pi(R^2-r^2)$", "outer minus inner circle", "$\\pi(R-r)^2$"], [0, 1, 2]));
  q.push(tf("hard", "A $2$-m walkway around a $20\\times12$ pool has area $144$ m$^2$.", true));
  q.push(tf("hard", "An annulus with $R=10$, $r=7$ has area about $160.22$.", true));
  q.push(tf("hard", "To find a composite area you may subtract a cut-out region.", true));
  q.push(tf("hard", "Adding a semicircle uses the full $\\pi r^2$, not half.", false, "A semicircle uses $\\tfrac12\\pi r^2$."));
  q.push(num("hard", "Walkway area: $(24\\times16)-(20\\times12)$.", 144, 0));
  q.push(num("hard", "Annulus area $R=10$, $r=7$ (2 dp).", 160.22, 0.2));
  q.push(num("hard", "Arrow area: $8\\times3$ plus triangle base $6$ height $4$.", 36, 0));
  q.push(num("hard", "Sod cost: $(150-16)$ m$^2$ at \\$3/m$^2$ (dollars).", 402, 0));
  q.push(fill("hard", "A $20\\times12$ pool with a $2$-m walkway: walkway area is ___ m$^2$.", ["144"]));
  q.push(fill("hard", "A ring with $R=10$, $r=7$ has area ___ (2 dp).", ["160.22"]));
  return q;
}

// ── 3.3 Surface Area & Volume of Composite Figures ───────────
function g33() {
  const q = [];
  // EASY
  q.push(mc("easy", "Volume of a box $4\\times3\\times5$:", ["$60$", "$12$", "$47$", "$94$"], 0));
  q.push(mc("easy", "Volume of a cube, side $5$:", ["$125$", "$25$", "$150$", "$15$"], 0));
  q.push(mc("easy", "Volume of a cylinder $r=3$, $h=10$ (2 dp):", ["$282.74$", "$94.25$", "$188.50$", "$90$"], 0));
  q.push(mc("easy", "Surface area of a cube, side $5$:", ["$150$", "$125$", "$100$", "$25$"], 0));
  q.push(mc("easy", "Volume of a sphere formula:", ["$\\tfrac43\\pi r^3$", "$4\\pi r^2$", "$\\pi r^2h$", "$\\tfrac13\\pi r^2h$"], 0));
  q.push(mc("easy", "Volume of a cone formula:", ["$\\tfrac13\\pi r^2h$", "$\\pi r^2h$", "$\\tfrac43\\pi r^3$", "$2\\pi rh$"], 0));
  q.push(mc("easy", "Volume is measured in:", ["cubic units", "square units", "linear units", "degrees"], 0));
  q.push(ms("easy", "Volume formulas:", ["box $lwh$", "cylinder $\\pi r^2h$", "sphere $\\tfrac43\\pi r^3$", "cube $6s^2$"], [0, 1, 2]));
  q.push(ms("easy", "Surface area is:", ["total outside area", "in square units", "sum of all faces", "in cubic units"], [0, 1, 2]));
  q.push(ms("easy", "A composite solid can be:", ["a cylinder plus a hemisphere", "a box plus a pyramid", "split into simple solids", "one formula only"], [0, 1, 2]));
  q.push(tf("easy", "Volume uses cubic units.", true));
  q.push(tf("easy", "A cube of side $5$ has volume $125$.", true));
  q.push(tf("easy", "A cube of side $5$ has surface area $125$.", false, "It is $6\\times25=150$."));
  q.push(tf("easy", "A sphere's volume is $\\tfrac43\\pi r^3$.", true));
  q.push(num("easy", "Volume of a $4\\times3\\times5$ box.", 60, 0));
  q.push(num("easy", "Volume of a cube, side $5$.", 125, 0));
  q.push(num("easy", "Surface area of a cube, side $5$.", 150, 0));
  q.push(num("easy", "Volume of a cylinder $r=3$, $h=10$ (2 dp).", 282.74, 0.1));
  q.push(fill("easy", "A cube side $5$ has surface area ___.", ["150"]));
  q.push(fill("easy", "Volume is measured in ___ units (cubic/square).", ["cubic"]));
  // MEDIUM
  q.push(mc("medium", "Surface area of a $4\\times3\\times5$ box:", ["$94$", "$60$", "$47$", "$120$"], 0));
  q.push(mc("medium", "Volume of a cone $r=3$, $h=4$ (2 dp):", ["$37.70$", "$113.10$", "$12.57$", "$36$"], 0));
  q.push(mc("medium", "Slant height of a cone $r=3$, $h=4$:", ["$5$", "$7$", "$25$", "$3.5$"], 0));
  q.push(mc("medium", "Volume of a sphere $r=6$ (2 dp):", ["$904.78$", "$452.39$", "$226.19$", "$216$"], 0));
  q.push(mc("medium", "Surface area of a sphere $r=6$ (2 dp):", ["$452.39$", "$904.78$", "$113.10$", "$226$"], 0));
  q.push(mc("medium", "Surface area of a cylinder $r=3$, $h=10$ (2 dp):", ["$245.04$", "$282.74$", "$188.50$", "$56.55$"], 0));
  q.push(mc("medium", "Volume of a cone $r=6$, $h=8$ (2 dp):", ["$301.59$", "$904.78$", "$150.80$", "$288$"], 0));
  q.push(mc("medium", "Slant height of a cone $r=6$, $h=8$:", ["$10$", "$14$", "$100$", "$7$"], 0));
  q.push(ms("medium", "For a cylinder $r=3$, $h=10$, which are true?", ["$V\\approx282.74$", "$SA\\approx245.04$", "$V=\\pi r^2h$", "$V=6s^2$"], [0, 1, 2]));
  q.push(ms("medium", "A cone $r=3$, $h=4$ has:", ["slant $5$", "$V\\approx37.70$", "$V=\\tfrac13\\pi r^2h$", "slant $7$"], [0, 1, 2]));
  q.push(tf("medium", "A $4\\times3\\times5$ box has surface area $94$.", true));
  q.push(tf("medium", "A sphere $r=6$ has volume about $904.78$.", true));
  q.push(num("medium", "Surface area of a $4\\times3\\times5$ box.", 94, 0));
  q.push(num("medium", "Volume of a cone $r=3$, $h=4$ (2 dp).", 37.7, 0.1));
  q.push(num("medium", "Volume of a sphere $r=6$ (2 dp).", 904.78, 0.5));
  q.push(num("medium", "Surface area of a sphere $r=6$ (2 dp).", 452.39, 0.5));
  q.push(fill("medium", "A cone $r=3$, $h=4$ has slant height ___.", ["5"]));
  q.push(fill("medium", "A cylinder $r=3$, $h=10$ has surface area ___ (2 dp).", ["245.04"]));
  q.push(mc("medium", "Volume of a cone $r=6$, $h=8$ (2 dp):", ["$301.59$", "$904.78$", "$288$", "$150.80$"], 0));
  q.push(mc("medium", "A hemisphere $r=3$ has volume (2 dp):", ["$56.55$", "$113.10$", "$28.27$", "$18.85$"], 0));
  // HARD
  q.push(mc("hard", "A silo: cylinder $r=3$, $h=10$ topped by a hemisphere $r=3$. Volume (2 dp):", ["$339.29$", "$282.74$", "$396$", "$452.39$"], 0));
  q.push(mc("hard", "An ice-cream shape: cone $r=3$, $h=4$ plus a hemisphere $r=3$ (2 dp):", ["$94.25$", "$37.70$", "$56.55$", "$113.10$"], 0));
  q.push(mc("hard", "A capsule: cylinder $r=2$, $h=6$ with hemispheres ($r=2$) on both ends (2 dp):", ["$108.91$", "$75.40$", "$33.51$", "$92.15$"], 0));
  q.push(mc("hard", "A block $6\\times6\\times10$ with a cylindrical hole $r=1$ drilled through (h=10) (2 dp):", ["$328.58$", "$360$", "$31.42$", "$282.74$"], 0));
  q.push(mc("hard", "Painting a closed cylinder $r=3$, $h=10$ at \\$0.02/cm$^2$ (SA $=245.04$):", ["\\$4.90", "\\$5.65", "\\$2.45", "\\$49.01"], 0));
  q.push(mc("hard", "A cube side $6$ with a cube side $3$ removed from a corner. Volume:", ["$189$", "$216$", "$27$", "$243$"], 0));
  q.push(mc("hard", "How many cones $r=3$, $h=4$ fill a cylinder $r=3$, $h=4$?", ["$3$", "$2$", "$4$", "$1$"], 0));
  q.push(mc("hard", "A pyramid, square base $6$, height $10$. Volume:", ["$120$", "$360$", "$60$", "$100$"], 0));
  q.push(ms("hard", "For a cylinder-plus-hemisphere silo, the volume is:", ["$\\pi r^2h+\\tfrac23\\pi r^3$", "sum of the two solids", "$\\approx339.29$ for $r=3,h=10$", "$\\pi r^2h$ only"], [0, 1, 2]));
  q.push(ms("hard", "To find a composite solid's volume you:", ["add the pieces", "subtract a removed piece", "use matching formulas", "always use $lwh$"], [0, 1, 2]));
  q.push(tf("hard", "A silo (cylinder $r=3$, $h=10$ + hemisphere $r=3$) has volume about $339.29$.", true));
  q.push(tf("hard", "Three cones fill a cylinder of the same radius and height.", true));
  q.push(tf("hard", "A pyramid's volume is $\\tfrac13\\times$ base area $\\times$ height.", true));
  q.push(tf("hard", "Removing a hole increases the volume.", false, "It decreases the volume."));
  q.push(num("hard", "Silo volume: cylinder $r=3$, $h=10$ plus hemisphere $r=3$ (2 dp).", 339.29, 0.5));
  q.push(num("hard", "Cone-plus-hemisphere, $r=3$, cone $h=4$ (2 dp).", 94.25, 0.5));
  q.push(num("hard", "A cube side $6$ minus a cube side $3$: volume.", 189, 0));
  q.push(num("hard", "A square pyramid base $6$, height $10$: volume.", 120, 0));
  q.push(fill("hard", "___ cones of equal $r$ and $h$ fill one cylinder.", ["3", "three"]));
  q.push(fill("hard", "A silo (cyl $r=3,h=10$ + hemisphere $r=3$) has volume ___ (2 dp).", ["339.29"]));
  return q;
}

// ── 3.4 Optimizing Perimeter & Area (2-D) ────────────────────
function g34() {
  const q = [];
  // EASY
  q.push(mc("easy", "For a fixed perimeter, the rectangle of greatest area is a:", ["square", "long thin rectangle", "triangle", "circle"], 0));
  q.push(mc("easy", "For a fixed area, the rectangle of least perimeter is a:", ["square", "long thin rectangle", "triangle", "line"], 0));
  q.push(mc("easy", "A square with perimeter $40$ has side:", ["$10$", "$20$", "$40$", "$4$"], 0));
  q.push(mc("easy", "A square with area $64$ has side:", ["$8$", "$16$", "$32$", "$64$"], 0));
  q.push(mc("easy", "Optimization means finding the:", ["maximum or minimum", "average", "perimeter only", "midpoint"], 0));
  q.push(mc("easy", "A square with side $10$ has area:", ["$100$", "$40$", "$20$", "$1000$"], 0));
  q.push(mc("easy", "A square with side $8$ has perimeter:", ["$32$", "$64$", "$16$", "$24$"], 0));
  q.push(ms("easy", "For maximum area with fixed perimeter:", ["use a square", "equal sides", "avoid long/thin", "make it a line"], [0, 1, 2]));
  q.push(ms("easy", "Optimization can find:", ["a maximum area", "a minimum perimeter", "a best shape", "a random shape"], [0, 1, 2]));
  q.push(ms("easy", "A square is optimal for:", ["max area, fixed perimeter", "min perimeter, fixed area", "min fencing for a plot", "max perimeter"], [0, 1, 2]));
  q.push(tf("easy", "A square gives the greatest area for a fixed perimeter.", true));
  q.push(tf("easy", "A square gives the least perimeter for a fixed area.", true));
  q.push(tf("easy", "A long thin rectangle maximizes area for a fixed perimeter.", false, "A square does."));
  q.push(tf("easy", "Optimization finds a maximum or minimum.", true));
  q.push(num("easy", "A square with perimeter $40$ has side length ___.", 10, 0));
  q.push(num("easy", "A square with area $64$ has side length ___.", 8, 0));
  q.push(num("easy", "A square with side $10$: area.", 100, 0));
  q.push(num("easy", "A square with side $8$: perimeter.", 32, 0));
  q.push(fill("easy", "For a fixed perimeter, the max-area rectangle is a ___.", ["square"]));
  q.push(fill("easy", "For a fixed area, the min-perimeter rectangle is a ___.", ["square"]));
  // MEDIUM
  q.push(mc("medium", "A rectangle with perimeter $100$ has maximum area:", ["$625$", "$100$", "$2500$", "$50$"], 0));
  q.push(mc("medium", "The dimensions giving that maximum area:", ["$25\\times25$", "$40\\times10$", "$50\\times0$", "$20\\times30$"], 0));
  q.push(mc("medium", "A rectangle with area $64$ has minimum perimeter:", ["$32$", "$64$", "$16$", "$8$"], 0));
  q.push(mc("medium", "A rectangle with area $100$ has minimum perimeter:", ["$40$", "$100$", "$20$", "$50$"], 0));
  q.push(mc("medium", "A $60$-m fence, max rectangular area:", ["$225$", "$60$", "$900$", "$3600$"], 0));
  q.push(mc("medium", "A rectangle perimeter $24$, dimensions for max area:", ["$6\\times6$", "$8\\times4$", "$10\\times2$", "$12\\times0$"], 0));
  q.push(mc("medium", "As a rectangle of fixed perimeter gets closer to a square, its area:", ["increases", "decreases", "stays constant", "becomes zero"], 0));
  q.push(mc("medium", "A garden of area $36$ m$^2$ uses least fencing when it is:", ["$6\\times6$", "$9\\times4$", "$12\\times3$", "$18\\times2$"], 0));
  q.push(ms("medium", "For perimeter $100$, which give max area?", ["$25\\times25$", "area $625$", "a square", "$45\\times5$"], [0, 1, 2]));
  q.push(ms("medium", "For area $64$, which minimize perimeter?", ["$8\\times8$", "perimeter $32$", "a square", "$16\\times4$"], [0, 1, 2]));
  q.push(tf("medium", "A rectangle with perimeter $100$ has max area $625$.", true));
  q.push(tf("medium", "A rectangle with area $64$ has minimum perimeter $32$.", true));
  q.push(num("medium", "Maximum area of a rectangle with perimeter $100$.", 625, 0));
  q.push(num("medium", "Minimum perimeter of a rectangle with area $64$.", 32, 0));
  q.push(num("medium", "Maximum area with a $60$-m perimeter.", 225, 0));
  q.push(num("medium", "Side of the optimal square for perimeter $100$.", 25, 0));
  q.push(fill("medium", "A rectangle of area $100$ has minimum perimeter ___.", ["40"]));
  q.push(fill("medium", "A rectangle of perimeter $24$ has max area ___.", ["36"]));
  q.push(mc("medium", "A rectangle perimeter $80$: max area is:", ["$400$", "$1600$", "$80$", "$200$"], 0));
  q.push(mc("medium", "A rectangle area $144$: min perimeter is:", ["$48$", "$144$", "$24$", "$12$"], 0));
  // HARD
  q.push(mc("hard", "A farmer fences 3 sides of a rectangle (river on the 4th) with $100$ m. Max area:", ["$1250$", "$625$", "$2500$", "$100$"], 0));
  q.push(mc("hard", "The dimensions giving that maximum (width $\\perp$ river):", ["$25\\times50$", "$25\\times25$", "$50\\times50$", "$10\\times80$"], 0));
  q.push(mc("hard", "A $3$-sided fence uses $60$ m. Maximum enclosed area:", ["$450$", "$225$", "$900$", "$300$"], 0));
  q.push(mc("hard", "Two identical adjacent pens (one shared wall) use $120$ m total. Total max area needs width ($3$ widths):", ["$20$", "$30$", "$40$", "$15$"], 0));
  q.push(mc("hard", "A rectangle area $200$, one side costs \\$5/m and the other \\$2/m — least cost is NOT a square because:", ["costs differ per side", "area is odd", "$200$ isn't square", "it always is a square"], 0));
  q.push(mc("hard", "For a fixed perimeter $P$, the max area equals:", ["$(P/4)^2$", "$P^2$", "$P/4$", "$P^2/2$"], 0));
  q.push(mc("hard", "For a fixed area $A$, the min perimeter equals:", ["$4\\sqrt{A}$", "$2A$", "$\\sqrt{A}$", "$4A$"], 0));
  q.push(mc("hard", "A $100$-m fence against a wall (3 sides) beats a full rectangle because:", ["the wall replaces one side", "walls are cheaper always", "area is fixed", "it does not"], 0));
  q.push(ms("hard", "For a 3-sided fence of length $L$ (open side length $y$, depth $x$, $2x+y=L$):", ["$y=L/2$ at the max", "$x=L/4$ at the max", "max area $=L^2/8$", "always a square"], [0, 1, 2]));
  q.push(ms("hard", "General optimization facts:", ["fixed $P$: square maximizes area", "fixed $A$: square minimizes perimeter", "3-sided: not a square", "square is always best"], [0, 1, 2]));
  q.push(tf("hard", "A $100$-m fence on 3 sides encloses at most $1250$ m$^2$.", true));
  q.push(tf("hard", "For a fixed perimeter $P$, the maximum area is $(P/4)^2$.", true));
  q.push(tf("hard", "For a fixed area $A$, the minimum perimeter is $4\\sqrt{A}$.", true));
  q.push(tf("hard", "A 3-sided optimal fence forms a square.", false, "The open side is twice the depth."));
  q.push(num("hard", "Max area of a 3-sided rectangle using $100$ m (river on 4th side).", 1250, 0));
  q.push(num("hard", "Max area of a 3-sided fence using $60$ m.", 450, 0));
  q.push(num("hard", "Depth $x$ that maximizes a 3-sided $100$-m fence.", 25, 0));
  q.push(num("hard", "Minimum perimeter of a rectangle with area $225$.", 60, 0));
  q.push(fill("hard", "For fixed area $A$, min perimeter is $4\\sqrt{A}$; for $A=225$ that is ___.", ["60"]));
  q.push(fill("hard", "A 3-sided fence of $100$ m encloses at most ___ m$^2$.", ["1250"]));
  return q;
}

// ── 3.5 Optimizing Surface Area & Volume (3-D) ───────────────
function g35() {
  const q = [];
  // EASY
  q.push(mc("easy", "For a fixed volume, the box (rectangular prism) of least surface area is a:", ["cube", "tall thin box", "flat box", "sphere"], 0));
  q.push(mc("easy", "For a fixed surface area, the box of greatest volume is a:", ["cube", "long box", "flat box", "cylinder"], 0));
  q.push(mc("easy", "A cube of volume $1000$ has side:", ["$10$", "$100$", "$1000$", "$30$"], 0));
  q.push(mc("easy", "A cube of side $10$ has surface area:", ["$600$", "$1000$", "$100$", "$60$"], 0));
  q.push(mc("easy", "Least packaging for a fixed volume points to a shape close to a:", ["cube", "pancake", "rod", "star"], 0));
  q.push(mc("easy", "A cube of side $6$ has volume:", ["$216$", "$36$", "$18$", "$72$"], 0));
  q.push(mc("easy", "A cube of side $6$ has surface area:", ["$216$", "$36$", "$72$", "$108$"], 0));
  q.push(ms("easy", "For minimum surface area at a fixed volume:", ["use a cube", "equal dimensions", "avoid long/flat", "make it a rod"], [0, 1, 2]));
  q.push(ms("easy", "Reasons to minimize surface area:", ["save material", "reduce cost", "less heat loss", "waste material"], [0, 1, 2]));
  q.push(ms("easy", "A cube is optimal for:", ["min SA, fixed volume", "max volume, fixed SA", "efficient packaging", "max SA"], [0, 1, 2]));
  q.push(tf("easy", "A cube minimizes surface area for a fixed volume (among boxes).", true));
  q.push(tf("easy", "A cube of volume $1000$ has side $10$.", true));
  q.push(tf("easy", "A tall thin box uses less material than a cube of equal volume.", false, "A cube uses the least."));
  q.push(tf("easy", "A cube maximizes volume for a fixed surface area.", true));
  q.push(num("easy", "Side of a cube with volume $1000$.", 10, 0));
  q.push(num("easy", "Surface area of a cube of side $10$.", 600, 0));
  q.push(num("easy", "Volume of a cube of side $6$.", 216, 0));
  q.push(num("easy", "Surface area of a cube of side $6$.", 216, 0));
  q.push(fill("easy", "For a fixed volume, the min-SA box is a ___.", ["cube"]));
  q.push(fill("easy", "A cube of volume $1000$ has side ___.", ["10"]));
  // MEDIUM
  q.push(mc("medium", "A closed box of volume $27$ has minimum surface area when it is:", ["$3\\times3\\times3$", "$27\\times1\\times1$", "$9\\times3\\times1$", "$3\\times9\\times1$"], 0));
  q.push(mc("medium", "That minimum surface area is:", ["$54$", "$27$", "$110$", "$36$"], 0));
  q.push(mc("medium", "A cube of surface area $600$ has volume:", ["$1000$", "$600$", "$100$", "$216$"], 0));
  q.push(mc("medium", "A box $2\\times2\\times8$ (V $=32$) vs a cube of V $=32$ uses:", ["more material than the cube", "less material", "the same", "no material"], 0));
  q.push(mc("medium", "A cube of side $s$ has surface area:", ["$6s^2$", "$s^3$", "$4s^2$", "$12s$"], 0));
  q.push(mc("medium", "A cube of volume $8$ has surface area:", ["$24$", "$8$", "$48$", "$12$"], 0));
  q.push(mc("medium", "For a can (cylinder) of fixed volume, least material has height about:", ["equal to the diameter", "twice the diameter", "half the radius", "zero"], 0));
  q.push(mc("medium", "A cube of side $4$ has surface area:", ["$96$", "$64$", "$16$", "$48$"], 0));
  q.push(ms("medium", "A closed box of volume $27$ minimizing SA has:", ["side $3$", "SA $54$", "cube shape", "SA $27$"], [0, 1, 2]));
  q.push(ms("medium", "Which cubes are correctly paired (side, SA)?", ["$(6,216)$", "$(10,600)$", "$(4,96)$", "$(5,125)$"], [0, 1, 2]));
  q.push(tf("medium", "A closed box of volume $27$ has minimum SA $54$ (a $3\\times3\\times3$ cube).", true));
  q.push(tf("medium", "A cube of surface area $600$ has volume $1000$.", true));
  q.push(num("medium", "Minimum surface area of a closed box with volume $27$.", 54, 0));
  q.push(num("medium", "Volume of a cube with surface area $600$.", 1000, 0));
  q.push(num("medium", "Surface area of a cube of side $4$.", 96, 0));
  q.push(num("medium", "Surface area of a cube of volume $8$.", 24, 0));
  q.push(fill("medium", "A cube of side $s$ has surface area $6s^2$; for $s=4$ that is ___.", ["96"]));
  q.push(fill("medium", "A closed box of volume $27$ has minimum surface area ___.", ["54"]));
  q.push(mc("medium", "A cube of volume $125$ has surface area:", ["$150$", "$125$", "$100$", "$75$"], 0));
  q.push(mc("medium", "A cube of surface area $96$ has volume:", ["$64$", "$96$", "$16$", "$48$"], 0));
  // HARD
  q.push(mc("hard", "An open-top box of volume $32$ is optimized. Compared to a closed box, its best base is:", ["wider (no top to cover)", "the same", "taller", "a cube"], 0));
  q.push(mc("hard", "A cylindrical can of volume $500$ cm$^3$ uses least material near radius (2 dp):", ["$4.30$", "$8.60$", "$2.15$", "$5.00$"], 0));
  q.push(mc("hard", "For that optimal can, the height approximately equals the:", ["diameter", "radius", "circumference", "volume"], 0));
  q.push(mc("hard", "A closed box with a square base and volume $216$ minimizing SA has base side:", ["$6$", "$3$", "$12$", "$9$"], 0));
  q.push(mc("hard", "That optimal square-base closed box is actually a:", ["cube ($6\\times6\\times6$)", "flat slab", "tall rod", "sphere"], 0));
  q.push(mc("hard", "Doubling every dimension of a cube multiplies its volume by:", ["$8$", "$2$", "$4$", "$6$"], 0));
  q.push(mc("hard", "Doubling every dimension of a cube multiplies its surface area by:", ["$4$", "$2$", "$8$", "$6$"], 0));
  q.push(mc("hard", "A cube of side $s$ has volume equal to surface area when $s=$", ["$6$", "$1$", "$12$", "$4$"], 0));
  q.push(ms("hard", "For a closed cylinder of fixed volume with least material:", ["height $\\approx$ diameter", "$h=2r$", "$r=(V/2\\pi)^{1/3}$", "$h=r$"], [0, 1, 2]));
  q.push(ms("hard", "Scaling a cube by factor $k$:", ["volume $\\times k^3$", "surface area $\\times k^2$", "side $\\times k$", "volume $\\times k^2$"], [0, 1, 2]));
  q.push(tf("hard", "A can of volume $500$ cm$^3$ uses least material near $r\\approx4.30$ cm.", true));
  q.push(tf("hard", "For a can with least material, the height equals the diameter.", true));
  q.push(tf("hard", "Doubling a cube's side multiplies its surface area by $8$.", false, "Surface area scales by $2^2=4$."));
  q.push(tf("hard", "A cube of side $6$ has equal numeric volume and surface area ($216$).", true));
  q.push(num("hard", "Optimal radius of a $500$-cm$^3$ can, least material (2 dp).", 4.3, 0.1));
  q.push(num("hard", "Volume factor when a cube's side doubles.", 8, 0));
  q.push(num("hard", "Surface-area factor when a cube's side doubles.", 4, 0));
  q.push(num("hard", "Side $s$ where a cube's volume equals its surface area.", 6, 0));
  q.push(fill("hard", "Scaling a cube by $k$ multiplies volume by $k^3$; for $k=2$ that factor is ___.", ["8"]));
  q.push(fill("hard", "A $500$-cm$^3$ can uses least material near radius ___ cm (2 dp).", ["4.30", "4.3"]));
  return q;
}

// ── 3.6 Right-Triangle Trigonometry ──────────────────────────
function g36() {
  const q = [];
  // EASY
  q.push(mc("easy", "In SOH-CAH-TOA, $\\sin\\theta=$", ["opp/hyp", "adj/hyp", "opp/adj", "hyp/opp"], 0));
  q.push(mc("easy", "$\\cos\\theta=$", ["adj/hyp", "opp/hyp", "opp/adj", "adj/opp"], 0));
  q.push(mc("easy", "$\\tan\\theta=$", ["opp/adj", "adj/opp", "opp/hyp", "hyp/adj"], 0));
  q.push(mc("easy", "The hypotenuse is:", ["opposite the right angle", "the shortest side", "next to the right angle", "always vertical"], 0));
  q.push(mc("easy", "A $3$-$4$-$5$ triangle has hypotenuse:", ["$5$", "$7$", "$4$", "$3$"], 0));
  q.push(mc("easy", "By Pythagoras, $c^2=$", ["$a^2+b^2$", "$a^2-b^2$", "$2ab$", "$a+b$"], 0));
  q.push(mc("easy", "A $6$-$8$-$10$ triangle: the hypotenuse is:", ["$10$", "$8$", "$6$", "$14$"], 0));
  q.push(ms("easy", "The primary trig ratios are:", ["sine", "cosine", "tangent", "secant"], [0, 1, 2]));
  q.push(ms("easy", "In a right triangle:", ["the hypotenuse is longest", "opposite the right angle", "$c^2=a^2+b^2$", "all sides equal"], [0, 1, 2]));
  q.push(ms("easy", "To find an unknown angle from two sides use:", ["$\\sin^{-1}$", "$\\cos^{-1}$", "$\\tan^{-1}$", "a protractor only"], [0, 1, 2]));
  q.push(tf("easy", "$\\sin\\theta=$ opposite over hypotenuse.", true));
  q.push(tf("easy", "The hypotenuse is opposite the right angle.", true));
  q.push(tf("easy", "$\\tan\\theta=$ adjacent over opposite.", false, "It is opposite over adjacent."));
  q.push(tf("easy", "A $3$-$4$-$5$ triangle is a right triangle.", true));
  q.push(num("easy", "Hypotenuse of a $3$-$4$-$5$ right triangle.", 5, 0));
  q.push(num("easy", "Hypotenuse of a $6$-$8$-$10$ right triangle.", 10, 0));
  q.push(num("easy", "Hypotenuse of a right triangle with legs $5$ and $12$.", 13, 0));
  q.push(num("easy", "Missing leg if hypotenuse $13$, one leg $5$.", 12, 0));
  q.push(fill("easy", "$\\cos\\theta=$ ___/hyp (opp/adj).", ["adj", "adjacent"]));
  q.push(fill("easy", "In a $3$-$4$-$5$ triangle, the hypotenuse is ___.", ["5"]));
  // MEDIUM
  q.push(mc("medium", "Opposite side: $10\\tan35^\\circ$ (2 dp):", ["$7.00$", "$8.19$", "$14.28$", "$5.74$"], 0));
  q.push(mc("medium", "Opposite side: $12\\sin40^\\circ$ (2 dp):", ["$7.71$", "$9.19$", "$14.31$", "$10.06$"], 0));
  q.push(mc("medium", "Adjacent side: $15\\cos25^\\circ$ (2 dp):", ["$13.59$", "$6.34$", "$16.55$", "$14.06$"], 0));
  q.push(mc("medium", "Hypotenuse: $8/\\sin50^\\circ$ (2 dp):", ["$10.44$", "$6.13$", "$12.45$", "$10.20$"], 0));
  q.push(mc("medium", "Angle: $\\tan^{-1}(5/8)$ (2 dp):", ["$32.01^\\circ$", "$57.99^\\circ$", "$38.66^\\circ$", "$29.05^\\circ$"], 0));
  q.push(mc("medium", "Angle: $\\sin^{-1}(6/10)$ (2 dp):", ["$36.87^\\circ$", "$53.13^\\circ$", "$30.00^\\circ$", "$41.41^\\circ$"], 0));
  q.push(mc("medium", "A ladder $20$ ft, base $5$ ft from wall. Angle with ground $\\cos^{-1}(5/20)$ (2 dp):", ["$75.52^\\circ$", "$14.48^\\circ$", "$60.00^\\circ$", "$78.46^\\circ$"], 0));
  q.push(mc("medium", "A ramp rises with $\\sin15^\\circ$ over $8$ m: height (2 dp):", ["$2.07$", "$7.73$", "$2.14$", "$1.93$"], 0));
  q.push(ms("medium", "To find a side you multiply by:", ["a sine", "a cosine", "a tangent", "an inverse ratio"], [0, 1, 2]));
  q.push(ms("medium", "$\\tan^{-1}(5/8)\\approx32^\\circ$ means:", ["opp $=5$, adj $=8$", "angle $\\approx32^\\circ$", "use inverse tangent", "hyp $=5$"], [0, 1, 2]));
  q.push(tf("medium", "$10\\tan35^\\circ\\approx7.00$.", true));
  q.push(tf("medium", "$\\sin^{-1}(6/10)\\approx36.87^\\circ$.", true));
  q.push(num("medium", "$10\\tan35^\\circ$ (2 dp).", 7.0, 0.05));
  q.push(num("medium", "$12\\sin40^\\circ$ (2 dp).", 7.71, 0.05));
  q.push(num("medium", "$15\\cos25^\\circ$ (2 dp).", 13.59, 0.05));
  q.push(num("medium", "$\\tan^{-1}(5/8)$ in degrees (2 dp).", 32.01, 0.1));
  q.push(fill("medium", "$\\sin^{-1}(6/10)\\approx$ ___ degrees (2 dp).", ["36.87"]));
  q.push(fill("medium", "$8/\\sin50^\\circ\\approx$ ___ (2 dp).", ["10.44"]));
  q.push(mc("medium", "The angle of elevation with opposite $50$, using $\\tan\\theta$, adjacent $50\\sqrt3$... simpler: $50\\tan30^\\circ$ (2 dp):", ["$28.87$", "$86.60$", "$25.00$", "$43.30$"], 0));
  q.push(mc("medium", "A $30$-$60$-$90$ triangle's shortest side is opposite the:", ["$30^\\circ$ angle", "$60^\\circ$ angle", "$90^\\circ$ angle", "hypotenuse"], 0));
  // HARD
  q.push(mc("hard", "A tree casts a $20$-m shadow at $40^\\circ$ elevation. Height $20\\tan40^\\circ$ (2 dp):", ["$16.78$", "$23.84$", "$12.86$", "$15.32$"], 0));
  q.push(mc("hard", "From a $50$-m cliff, a boat's depression is $25^\\circ$. Distance $50/\\tan25^\\circ$ (2 dp):", ["$107.23$", "$23.32$", "$110.34$", "$117.82$"], 0));
  q.push(mc("hard", "A kite string $60$ m at $50^\\circ$: height $60\\sin50^\\circ$ (2 dp):", ["$45.96$", "$38.57$", "$71.50$", "$40.15$"], 0));
  q.push(mc("hard", "A $12$-m ladder reaches $10$ m up a wall. Angle $\\sin^{-1}(10/12)$ (2 dp):", ["$56.44^\\circ$", "$33.56^\\circ$", "$39.81^\\circ$", "$50.21^\\circ$"], 0));
  q.push(mc("hard", "A ramp rises $1$ m over $12$ m run. Angle $\\tan^{-1}(1/12)$ (2 dp):", ["$4.76^\\circ$", "$85.24^\\circ$", "$5.00^\\circ$", "$4.09^\\circ$"], 0));
  q.push(mc("hard", "Two legs $9$ and $12$: hypotenuse and smallest angle $\\tan^{-1}(9/12)$:", ["$15$, $36.87^\\circ$", "$15$, $53.13^\\circ$", "$21$, $36.87^\\circ$", "$15$, $45^\\circ$"], 0));
  q.push(mc("hard", "A guy wire from a $30$-m tower anchored $16$ m away. Wire length (2 dp):", ["$34.00$", "$25.38$", "$46$", "$33.94$"], 0));
  q.push(mc("hard", "An airplane climbs at $8^\\circ$ over $5000$ m ground. Altitude $5000\\tan8^\\circ$ (2 dp):", ["$702.55$", "$695.53$", "$5049$", "$710.10$"], 0));
  q.push(ms("hard", "For a $12$-m ladder $10$ m up a wall:", ["angle $\\approx56.44^\\circ$", "base $=\\sqrt{12^2-10^2}\\approx6.63$", "$\\sin^{-1}(10/12)$", "angle $=45^\\circ$"], [0, 1, 2]));
  q.push(ms("hard", "Angle of elevation vs depression:", ["measured from horizontal", "equal when alternate", "use inverse trig", "always $90^\\circ$"], [0, 1, 2]));
  q.push(tf("hard", "A tree with a $20$-m shadow at $40^\\circ$ is about $16.78$ m tall.", true));
  q.push(tf("hard", "A $60$-m kite string at $50^\\circ$ reaches about $45.96$ m high.", true));
  q.push(tf("hard", "A $12$-m ladder $10$ m up a wall makes about $56.44^\\circ$ with the ground.", true));
  q.push(tf("hard", "Angle of elevation is measured from the vertical.", false, "It is measured from the horizontal."));
  q.push(num("hard", "Tree height: $20\\tan40^\\circ$ (2 dp).", 16.78, 0.1));
  q.push(num("hard", "Kite height: $60\\sin50^\\circ$ (2 dp).", 45.96, 0.1));
  q.push(num("hard", "Ladder angle: $\\sin^{-1}(10/12)$ in degrees (2 dp).", 56.44, 0.2));
  q.push(num("hard", "Guy-wire length from a $30$-m tower anchored $16$ m away (2 dp).", 34.0, 0.1));
  q.push(fill("hard", "A boat seen at $25^\\circ$ depression from a $50$-m cliff is ___ m away (2 dp).", ["107.23"]));
  q.push(fill("hard", "An $8^\\circ$ climb over $5000$ m gains ___ m altitude (2 dp).", ["702.55"]));
  return q;
}

// ── 3.7 The Sine Law & the Cosine Law ────────────────────────
function g37() {
  const q = [];
  // EASY
  q.push(mc("easy", "The sine law says:", ["$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}$", "$a^2=b^2+c^2$", "$a=b\\sin C$", "$\\sin A=\\dfrac{a}{c}$"], 0));
  q.push(mc("easy", "The cosine law says:", ["$c^2=a^2+b^2-2ab\\cos C$", "$c=a+b$", "$\\dfrac{a}{\\sin A}=b$", "$c^2=a^2+b^2$"], 0));
  q.push(mc("easy", "The cosine law is used when you know:", ["two sides and the angle between", "three angles", "one side only", "nothing"], 0));
  q.push(mc("easy", "The sine law is used with:", ["an angle and its opposite side", "the right angle only", "no angles", "two right angles"], 0));
  q.push(mc("easy", "These laws work in:", ["any triangle", "right triangles only", "squares", "circles"], 0));
  q.push(mc("easy", "If a triangle has a right angle, the cosine law reduces to:", ["Pythagoras", "the sine law", "nothing", "$a=b$"], 0));
  q.push(mc("easy", "The angles of any triangle sum to:", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"], 0));
  q.push(ms("easy", "Use the cosine law when you know:", ["SAS", "SSS", "two sides & included angle", "AAA"], [0, 1, 2]));
  q.push(ms("easy", "Use the sine law when you know:", ["ASA", "AAS", "a side & its opposite angle", "SSS"], [0, 1, 2]));
  q.push(ms("easy", "These laws apply to:", ["acute triangles", "obtuse triangles", "any triangle", "only right triangles"], [0, 1, 2]));
  q.push(tf("easy", "The sine law relates sides to the sines of opposite angles.", true));
  q.push(tf("easy", "The cosine law generalizes the Pythagorean theorem.", true));
  q.push(tf("easy", "The sine law only works in right triangles.", false, "It works in any triangle."));
  q.push(tf("easy", "Triangle angles sum to $180^\\circ$.", true));
  q.push(num("easy", "If two angles are $40^\\circ$ and $65^\\circ$, the third is ___ degrees.", 75, 0));
  q.push(num("easy", "If two angles are $90^\\circ$ and $30^\\circ$, the third is ___ degrees.", 60, 0));
  q.push(num("easy", "If two angles are $50^\\circ$ and $70^\\circ$, the third is ___ degrees.", 60, 0));
  q.push(num("easy", "If two angles are $45^\\circ$ and $60^\\circ$, the third is ___ degrees.", 75, 0));
  q.push(fill("easy", "The cosine law: $c^2=a^2+b^2-2ab\\cos$ ___.", ["C"]));
  q.push(fill("easy", "Triangle angles add to ___ degrees.", ["180"]));
  // MEDIUM
  q.push(mc("medium", "Sine law: $a=10$, $A=40^\\circ$, $B=65^\\circ$. Find $b$ (2 dp):", ["$14.10$", "$7.09$", "$12.31$", "$16.383$"], 0));
  q.push(mc("medium", "Cosine law: $a=7$, $b=9$, $C=50^\\circ$. Find $c$ (2 dp):", ["$7.00$", "$11.40$", "$6.90$", "$8.12$"], 0));
  q.push(mc("medium", "Sine law: $a=12$, $A=45^\\circ$, $B=60^\\circ$. Find $b$ (2 dp):", ["$14.70$", "$9.80$", "$16.97$", "$13.86$"], 0));
  q.push(mc("medium", "Cosine law: $a=10$, $b=14$, $C=60^\\circ$. Find $c$ (2 dp):", ["$12.49$", "$17.44$", "$10.58$", "$15.62$"], 0));
  q.push(mc("medium", "Cosine law (angles): $a=5$, $b=6$, $c=7$. Find $C$ (2 dp):", ["$78.46^\\circ$", "$57.12^\\circ$", "$44.42^\\circ$", "$90.00^\\circ$"], 0));
  q.push(mc("medium", "Sine law (angle): $a=8$, $A=35^\\circ$, $b=12$. Find $B$ (2 dp):", ["$59.36^\\circ$", "$30.64^\\circ$", "$120.64^\\circ$", "$45.00^\\circ$"], 0));
  q.push(mc("medium", "Triangle area $\\tfrac12ab\\sin C$: $a=8$, $b=10$, $C=40^\\circ$ (2 dp):", ["$25.71$", "$40.00$", "$30.64$", "$51.42$"], 0));
  q.push(mc("medium", "Cosine law (angle): $a=8$, $b=5$, $c=6$. Find $A$ (2 dp):", ["$92.87^\\circ$", "$57.91^\\circ$", "$46.57^\\circ$", "$40.53^\\circ$"], 0));
  q.push(ms("medium", "For $a=10$, $A=40^\\circ$, $B=65^\\circ$ (sine law):", ["$b=10\\sin65^\\circ/\\sin40^\\circ$", "$b\\approx14.10$", "third angle $75^\\circ$", "$b=10$"], [0, 1, 2]));
  q.push(ms("medium", "The cosine law can find:", ["a third side (SAS)", "an angle (SSS)", "$c$ from $a,b,C$", "an area directly"], [0, 1, 2]));
  q.push(tf("medium", "For $a=7$, $b=9$, $C=50^\\circ$, side $c\\approx7.00$.", true));
  q.push(tf("medium", "For $a=5$, $b=6$, $c=7$, angle $C\\approx78.46^\\circ$.", true));
  q.push(num("medium", "Sine law: $b=10\\sin65^\\circ/\\sin40^\\circ$ (2 dp).", 14.1, 0.1));
  q.push(num("medium", "Cosine law: $c$ for $a=7$, $b=9$, $C=50^\\circ$ (2 dp).", 7.0, 0.1));
  q.push(num("medium", "Cosine law: angle $C$ for $a=5$, $b=6$, $c=7$ in degrees (2 dp).", 78.46, 0.2));
  q.push(num("medium", "Triangle area $\\tfrac12(8)(10)\\sin40^\\circ$ (2 dp).", 25.71, 0.1));
  q.push(fill("medium", "Sine law: $b$ for $a=12$, $A=45^\\circ$, $B=60^\\circ$ is ___ (2 dp).", ["14.70", "14.7"]));
  q.push(fill("medium", "Cosine law: $c$ for $a=10$, $b=14$, $C=60^\\circ$ is ___ (2 dp).", ["12.49"]));
  q.push(mc("medium", "Which law finds a side from two sides and the included angle?", ["cosine law", "sine law", "Pythagoras only", "neither"], 0));
  q.push(mc("medium", "Which law finds a side from an angle and its opposite side plus another angle?", ["sine law", "cosine law", "Pythagoras", "neither"], 0));
  // HARD
  q.push(mc("hard", "Two roads leave a point at $50^\\circ$; after $7$ km and $9$ km, the gap is (2 dp):", ["$7.00$ km", "$11.40$ km", "$16$ km", "$6.90$ km"], 0));
  q.push(mc("hard", "A triangular lot has sides $5$, $6$, $7$. Its largest angle (opposite $7$) is (2 dp):", ["$78.46^\\circ$", "$57.12^\\circ$", "$90.00^\\circ$", "$101.54^\\circ$"], 0));
  q.push(mc("hard", "Surveyor: $A=40^\\circ$, $B=65^\\circ$, side $a=10$ m opposite $A$. Side $b$ (2 dp):", ["$14.10$", "$7.09$", "$12.31$", "$9.06$"], 0));
  q.push(mc("hard", "A triangle has two sides $200$ and $150$ with a $30^\\circ$ angle between them. The third side (2 dp):", ["$102.66$", "$350$", "$50$", "$180.28$"], 0));
  q.push(mc("hard", "Triangle $a=8$, $b=10$, $C=40^\\circ$: its area (2 dp):", ["$25.71$", "$40.00$", "$51.42$", "$30.64$"], 0));
  q.push(mc("hard", "In triangle $a=8$, $A=35^\\circ$, $b=12$: angle $B$ (acute, 2 dp):", ["$59.36^\\circ$", "$30.64^\\circ$", "$85.64^\\circ$", "$45.00^\\circ$"], 0));
  q.push(mc("hard", "A triangle with $a=10$, $b=14$, included $C=60^\\circ$: third side $c$ (2 dp):", ["$12.49$", "$17.44$", "$24$", "$15.62$"], 0));
  q.push(mc("hard", "Find angle $A$ opposite side $8$ in a triangle with sides $a=8$, $b=5$, $c=6$ (2 dp):", ["$92.87^\\circ$", "$57.91^\\circ$", "$46.57^\\circ$", "$87.13^\\circ$"], 0));
  q.push(ms("hard", "For a triangle with sides $5,6,7$:", ["largest angle opposite $7$", "$C\\approx78.46^\\circ$", "use cosine law (SSS)", "it is right-angled"], [0, 1, 2]));
  q.push(ms("hard", "The area of a triangle can be found by:", ["$\\tfrac12ab\\sin C$", "knowing two sides & included angle", "$\\tfrac12(8)(10)\\sin40^\\circ\\approx25.71$", "$\\tfrac12bh$ only"], [0, 1, 2]));
  q.push(tf("hard", "Two roads at $50^\\circ$, lengths $7$ and $9$ km, end about $7.00$ km apart.", true));
  q.push(tf("hard", "A $5$-$6$-$7$ triangle's largest angle is about $78.46^\\circ$.", true));
  q.push(tf("hard", "A triangle with sides $200$ and $150$ and included angle $30^\\circ$ has third side about $102.66$.", true));
  q.push(tf("hard", "The sine law never has two possible angles.", false, "The ambiguous (SSA) case can give two."));
  q.push(num("hard", "Gap between two roads at $50^\\circ$ after $7$ and $9$ km (2 dp).", 7.0, 0.1));
  q.push(num("hard", "Largest angle of a $5$-$6$-$7$ triangle in degrees (2 dp).", 78.46, 0.2));
  q.push(num("hard", "Angle $B$ (acute) for $a=8$, $A=35^\\circ$, $b=12$ in degrees (2 dp).", 59.36, 0.2));
  q.push(num("hard", "Angle $A$ opposite side $8$ in an $8$-$5$-$6$ triangle in degrees (2 dp).", 92.87, 0.2));
  q.push(fill("hard", "A triangle $a=8$, $b=10$, $C=40^\\circ$ has area ___ (2 dp).", ["25.71"]));
  q.push(fill("hard", "Triangle: sides $200$, $150$, included $30^\\circ$ → third side ___ (2 dp).", ["102.66"]));
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
