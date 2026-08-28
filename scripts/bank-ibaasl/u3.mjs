// IB AA SL Unit 3 — Geometry and Trigonometry: question bank.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 3.1 3D Geometry: Volume, Surface Area & Distance ───────────────
function g31() {
  const q = [];
  q.push(mc("easy", "The 3D distance formula is:", ["$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$", "$(x_2-x_1)+(y_2-y_1)+(z_2-z_1)$", "$\\sqrt{x^2+y^2+z^2}$", "$x_2-x_1$"], 0));
  q.push(mc("easy", "The volume of a cone is:", ["$\\dfrac13\\pi r^2h$", "$\\pi r^2h$", "$\\dfrac43\\pi r^3$", "$2\\pi rh$"], 0));
  q.push(mc("easy", "The volume of a sphere is:", ["$\\dfrac43\\pi r^3$", "$\\dfrac13\\pi r^2h$", "$4\\pi r^2$", "$\\pi r^3$"], 0));
  q.push(mc("easy", "The surface area of a sphere is:", ["$4\\pi r^2$", "$\\dfrac43\\pi r^3$", "$2\\pi r^2$", "$\\pi r^2$"], 0));
  q.push(mc("easy", "Find the distance between $(0,0,0)$ and $(3,4,0)$.", ["5", "7", "3", "4"], 0));
  q.push(ms("easy", "True volume/area formulas:", ["cone: $\\dfrac13\\pi r^2h$", "sphere volume: $\\dfrac43\\pi r^3$", "sphere area: $4\\pi r^2$", "cone volume: $\\pi r^2h$"], [0, 1, 2]));
  q.push(tf("easy", "The 3D distance formula extends the 2D Pythagorean idea with a $z$-term.", true));
  q.push(tf("easy", "The volume of a pyramid is $\\dfrac13\\times$base area$\\times$height.", true));
  q.push(fill("easy", "Find the distance between $(1,0,0)$ and $(1,0,6)$.", ["6"]));
  q.push(num("easy", "Find the volume of a cone with radius 3 and height 4 (as a multiple of $\\pi$, give the coefficient).", 12, 0));
  q.push(mc("medium", "Find the distance between $P(2,-1,4)$ and $Q(5,3,4)$.", ["5", "6", "7", "4"], 0));
  q.push(mc("medium", "A sphere has volume $288\\pi$ cm$^3$. Find its radius.", ["6", "8", "4", "9"], 0));
  q.push(mc("medium", "A square pyramid has base side 6 cm and volume 72 cm$^3$. Find its height.", ["6", "4", "8", "12"], 0));
  q.push(ms("medium", "For a sphere with volume $288\\pi$:", ["$\\dfrac43\\pi r^3=288\\pi$", "$r^3=216$", "$r=6$", "$r=8$"], [0, 1, 2]));
  q.push(tf("medium", "A sphere with volume $288\\pi$ has radius 6.", true));
  q.push(fill("medium", "Find the volume of a cylinder with radius 5 and height 10 (coefficient of $\\pi$).", ["250"]));
  q.push(num("medium", "A box has length 6, width 8, height 10; find the space diagonal.", 14.14, 0.1));
  q.push(num("medium", "Find the slant height of a cone with radius 6 and height 8.", 10, 0));
  q.push(match("medium", "Match each 3D shape to its volume formula.", ["cone", "sphere", "cylinder"], ["$\\frac13\\pi r^2h$", "$\\frac43\\pi r^3$", "$\\pi r^2h$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find the angle a box's diagonal makes with its base (length 6, width 8, height 10).", ["Find base diagonal: $\\sqrt{36+64}=10$", "Use $\\tan\\theta=\\dfrac{\\text{height}}{\\text{base diagonal}}$", "Substitute: $\\tan\\theta=10/10=1$", "Result: $\\theta=45°$"]));
  q.push(mc("hard", "A cone (radius 5, height 12) is topped with a hemisphere of the same radius; find the total curved surface area (coefficient of $\\pi$).", ["115", "90", "125", "100"], 0));
  q.push(mc("hard", "A box has length 9, width 12, height 8; find the angle its space diagonal makes with the base (nearest degree).", ["28°", "35°", "20°", "45°"], 0));
  q.push(mc("hard", "A silo (cylinder radius 4, height 10, capped with a hemisphere) has total volume (coefficient of $\\pi$):", ["181.33", "160", "200", "170.67"], 0));
  q.push(ms("hard", "For the cone+hemisphere composite (radius 5, height 12):", ["slant height $=13$", "cone curved area $=65\\pi$", "hemisphere curved area $=50\\pi$", "total $=115\\pi$"], [0, 1, 2, 3]));
  q.push(tf("hard", "For a box with length 9, width 12, height 8, the base diagonal is 15 and the angle with the space diagonal is about $28°$.", true));
  q.push(fill("hard", "Find the angle (nearest degree) the space diagonal of a cube with side 10 makes with the base.", ["35"]));
  q.push(num("hard", "A square pyramid has volume 400 and height 12; find its base side length.", 10, 0.1));
  q.push(order("hard", "Order the steps to find the total volume of a cylinder (r=4,h=10) capped by a hemisphere (r=4).", ["Cylinder volume: $\\pi(16)(10)=160\\pi$", "Hemisphere volume: $\\dfrac12\\left(\\dfrac43\\pi(64)\\right)=\\dfrac{128}3\\pi$", "Add: $160\\pi+\\dfrac{128}3\\pi$", "Result: $\\approx181.33\\pi$"]));
  q.push(match("hard", "Match each composite-solid scenario to its key formula step.", ["cone+hemisphere surface", "cylinder+hemisphere volume", "box diagonal angle"], ["add curved areas, exclude shared base", "add both volumes", "use base diagonal then $\\tan\\theta$"], [0, 1, 2]));
  return q;
}

// ── 3.2 Right-Triangle Trigonometry ───────────────
function g32() {
  const q = [];
  q.push(mc("easy", "$\\sin\\theta$ equals:", ["opposite/hypotenuse", "adjacent/hypotenuse", "opposite/adjacent", "hypotenuse/opposite"], 0));
  q.push(mc("easy", "$\\tan\\theta$ equals:", ["opposite/adjacent", "adjacent/opposite", "opposite/hypotenuse", "hypotenuse/adjacent"], 0));
  q.push(mc("easy", "Find $x$ if $\\sin(30°)=x/10$.", ["5", "8.66", "10", "3"], 0));
  q.push(mc("easy", "An angle of elevation is measured:", ["upward from horizontal", "downward from horizontal", "from vertical", "from the ground only"], 0));
  q.push(mc("easy", "A bearing is measured:", ["clockwise from north", "counterclockwise from north", "from east", "from south"], 0));
  q.push(ms("easy", "True facts about right-triangle trig:", ["$\\cos\\theta=$adjacent/hypotenuse", "$\\tan\\theta=\\sin\\theta/\\cos\\theta$", "angle of elevation is measured from the horizontal", "bearings are measured from south"], [0, 1, 2]));
  q.push(tf("easy", "$\\tan\\theta=\\sin\\theta/\\cos\\theta$.", true));
  q.push(tf("easy", "A bearing of $090°$ points due south.", false));
  q.push(fill("easy", "Find $x$ if $\\cos(60°)=x/8$.", ["4"]));
  q.push(num("easy", "Find the angle of elevation to a 10 m tower from 10 m away (isoceles right triangle).", 45, 0));
  q.push(mc("medium", "Find the angle of elevation to the top of a 25 m tower from 40 m away (nearest degree).", ["32°", "35°", "28°", "40°"], 0));
  q.push(mc("medium", "From an 80 m cliff, angle of depression to a boat is $18°$; find the horizontal distance (nearest m).", ["246 m", "200 m", "260 m", "220 m"], 0));
  q.push(mc("medium", "A hiker walks 10 km on a bearing of $060°$; find the eastward distance (nearest 0.1 km).", ["8.7 km", "5.0 km", "10.0 km", "6.0 km"], 0));
  q.push(ms("medium", "For a hiker walking 10 km on bearing $060°$:", ["east component is $10\\sin60°$", "north component is $10\\cos60°$", "east $\\approx8.66$ km", "north $\\approx8.66$ km"], [0, 1, 2]));
  q.push(tf("medium", "The angle of elevation to a 25 m tower from 40 m away is about $32°$.", true));
  q.push(fill("medium", "Find the height of a tower given a $35°$ elevation angle from 60 m away (nearest m).", ["42"]));
  q.push(num("medium", "A person with eyes at 1.6 m stands 30 m from a tree, seeing its top at $25°$ elevation; find the tree's height (nearest 0.1 m).", 15.6, 0.3));
  q.push(num("medium", "From a 50 m cliff, angle of depression to a boat is $20°$; find the horizontal distance (nearest m).", 137, 2));
  q.push(match("medium", "Match each bearing to its compass description.", ["$000°$", "$090°$", "$180°$"], ["due north", "due east", "due south"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find a tower's height using a person's eye height of 1.5 m, 20 m away, elevation $30°$.", ["Find height above eye level: $20\\tan30°$", "Compute: $\\approx11.55$ m", "Add eye height: $11.55+1.5$", "Result: $\\approx13.05$ m"]));
  q.push(mc("hard", "From two points 60 m apart on a line from a tower's base, elevation angles are $22°$ (far) and $38°$ (near). Find the tower's height (nearest m).", ["47 m", "50 m", "42 m", "55 m"], 0));
  q.push(mc("hard", "A 6 m flagpole sits on a building; ground elevation angles are $35°$ (base) and $42°$ (top). Find the building's height (nearest m).", ["24 m", "20 m", "28 m", "18 m"], 0));
  q.push(mc("hard", "A plane flies 300 km on bearing $200°$. Find the southward distance (nearest km).", ["282 km", "103 km", "300 km", "150 km"], 0));
  q.push(ms("hard", "For two elevation angles $22°$(far), $38°$(near), 60 m apart:", ["$h/\\tan22°-h/\\tan38°=60$", "$h(2.475-1.280)=60$", "$h\\approx50.2$", "$h\\approx42$"], [0, 1, 2]));
  q.push(tf("hard", "For elevation angles $22°$ and $38°$ 60 m apart, the tower height is about 50 m.", true));
  q.push(fill("hard", "A ladder 10 m long leans at $65°$ to the ground; find the height reached (nearest 0.1 m).", ["9.1"]));
  q.push(num("hard", "A ship sails 50 km on bearing $250°$; find the westward distance (nearest km).", 47, 1));
  q.push(order("hard", "Order the steps to find a building's height with a 4 m flagpole, ground angles $30°$(base), $36°$(top).", ["Set up $h\\tan36°=(h+4)\\tan30°$", "Expand: $h(0.7265)=(h+4)(0.5774)$", "Solve: $h(0.1491)=2.31$", "Result: $h\\approx15.5$ m"]));
  q.push(match("hard", "Match each multi-step trig scenario to its key setup.", ["two elevation angles from different points", "flagpole atop a building", "bearing displacement components"], ["two right triangles sharing the height", "subtract two tangent equations", "resolve into north/east legs"], [0, 1, 2]));
  return q;
}

// ── 3.3 The Sine Rule & Cosine Rule ───────────────
function g33() {
  const q = [];
  q.push(mc("easy", "The sine rule states:", ["$\\dfrac a{\\sin A}=\\dfrac b{\\sin B}$", "$a^2=b^2+c^2$", "$a=b\\sin C$", "$\\sin A=\\sin B$"], 0));
  q.push(mc("easy", "The cosine rule states:", ["$a^2=b^2+c^2-2bc\\cos A$", "$a=b+c$", "$a^2=b^2+c^2$", "$\\dfrac a{\\cos A}=\\dfrac b{\\cos B}$"], 0));
  q.push(mc("easy", "The area of a triangle using two sides and the included angle is:", ["$\\dfrac12ab\\sin C$", "$ab\\sin C$", "$\\dfrac12ab\\cos C$", "$a\\times b$"], 0));
  q.push(mc("easy", "The sine rule is used when you know:", ["an angle-side matching pair", "only three sides", "two sides and the included angle", "no angles"], 0));
  q.push(mc("easy", "The ambiguous case can arise when given:", ["two sides and a non-included angle (SSA)", "three sides (SSS)", "two angles and a side (AAS)", "two sides and included angle (SAS)"], 0));
  q.push(ms("easy", "True facts about the sine/cosine rules:", ["sine rule needs an angle-side pair", "cosine rule works with SSS or SAS", "the ambiguous case arises from SSA", "the cosine rule never uses angles"], [0, 1, 2]));
  q.push(tf("easy", "The cosine rule can find an angle given three sides.", true));
  q.push(tf("easy", "The ambiguous case can occur with SAS information.", false));
  q.push(fill("easy", "State the formula for a triangle's area given two sides $a,b$ and included angle $C$.", ["(1/2)ab sinC"]));
  q.push(num("easy", "Find the area of a triangle with sides 6,8 and included angle $90°$.", 24, 0));
  q.push(mc("medium", "In $\\triangle ABC$, $A=40°$, $B=65°$, $a=10$. Find $b$ (nearest 0.1).", ["14.1", "12.5", "15.6", "13.0"], 0));
  q.push(mc("medium", "A triangle has sides 5,7,10. Find the largest angle (nearest degree).", ["120°", "110°", "130°", "100°"], 0));
  q.push(mc("medium", "Find the area of a triangle with sides 8,12 and included angle $50°$ (nearest 0.1).", ["36.8", "40.0", "32.5", "45.2"], 0));
  q.push(ms("medium", "For a triangle with sides 5,7,10 (finding the largest angle):", ["it's opposite the longest side, 10", "$\\cos C=\\dfrac{25+49-100}{70}$", "$\\cos C$ is negative", "the angle is acute"], [0, 1, 2]));
  q.push(tf("medium", "A triangle with sides 5,7,10 has its largest angle around $120°$.", true));
  q.push(fill("medium", "In $\\triangle ABC$, $A=50°$, $a=12$, $b=15$. Find $\\sin B$ (4 d.p.).", ["0.9576"]));
  q.push(num("medium", "In $\\triangle ABC$, $a=9$, $b=12$, $C=60°$. Find $c$ (nearest 0.1).", 10.8, 0.1));
  q.push(num("medium", "Find the area of a triangle with sides 10,14 and included angle $75°$ (nearest 0.1).", 67.6, 0.5));
  q.push(match("medium", "Match each triangle scenario to the correct rule to use first.", ["know 3 sides", "know 2 sides + included angle for area", "know angle-side matching pair"], ["cosine rule", "area formula", "sine rule"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find angle $C$ for a triangle with sides $a=6,b=8,c=11$.", ["Identify $C$ opposite side $c=11$", "Apply $\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}$", "Compute $\\cos C=\\dfrac{36+64-121}{96}$", "Result: $C\\approx121.9°$"]));
  q.push(mc("hard", "In $\\triangle ABC$, $A=30°$, $a=7$, $b=12$. Find both possible values of $B$ (nearest degree).", ["59° or 121°", "60° or 120°", "55° or 125°", "only 59°"], 0));
  q.push(mc("hard", "A ship sails 35 km on bearing $040°$, then 50 km on bearing $130°$. Find the direct distance home (nearest km).", ["61 km", "55 km", "65 km", "50 km"], 0));
  q.push(mc("hard", "In $\\triangle ABC$, $A=25°$, $a=8$, $b=15$. Determine if a valid triangle exists.", ["No — $\\sin B>1$ is required, impossible", "Yes, one triangle", "Yes, two triangles", "Cannot be determined"], 0));
  q.push(ms("hard", "For $A=30°$, $a=7$, $b=12$ (ambiguous case check):", ["$\\sin B=\\dfrac{12\\sin30°}7\\approx0.857$", "$B_1\\approx59°$", "$B_2=180-59=121°$", "check $A+B_2<180°$: valid, both triangles exist"], [0, 1, 2, 3]));
  q.push(tf("hard", "For a ship sailing 35 km on $040°$ then 50 km on $130°$, the included angle between legs is $90°$.", true));
  q.push(fill("hard", "A triangular field has sides 70 m, 90 m and included angle $68°$; find its area (nearest m$^2$, round to nearest integer).", ["2921"]));
  q.push(num("hard", "In $\\triangle ABC$, $a=11$, $b=9$, $C=55°$; find $c$ (nearest 0.1).", 9.4, 0.2));
  q.push(order("hard", "Order the steps to find the direct distance for a hiker walking 4 km on bearing $035°$ then 6 km on bearing $125°$.", ["Find included angle: $125-35=90°$", "Apply cosine rule: $d^2=16+36-2(4)(6)\\cos90°$", "Simplify: $d^2=52$ (since $\\cos90°=0$)", "Result: $d\\approx7.21$ km"]));
  q.push(match("hard", "Match each navigation leg-pair to its included-angle calculation.", ["bearings $060°$ then $150°$", "bearings $020°$ then $110°$", "bearings $300°$ then $030°$"], ["$90°$", "$90°$", "$90°$"], [0, 1, 2]));
  return q;
}

// ── 3.4 Radian Measure, Arcs & Sectors ───────────────
function g34() {
  const q = [];
  q.push(mc("easy", "$180°$ equals:", ["$\\pi$ radians", "$2\\pi$ radians", "$\\pi/2$ radians", "$360$ radians"], 0));
  q.push(mc("easy", "Arc length formula:", ["$s=r\\theta$", "$s=\\pi r^2$", "$s=2\\pi r$", "$s=r/\\theta$"], 0));
  q.push(mc("easy", "Sector area formula:", ["$A=\\dfrac12r^2\\theta$", "$A=\\pi r^2$", "$A=r\\theta$", "$A=\\dfrac12r\\theta^2$"], 0));
  q.push(mc("easy", "$90°$ in radians is:", ["$\\pi/2$", "$\\pi$", "$\\pi/4$", "$2\\pi$"], 0));
  q.push(mc("easy", "$\\pi/3$ radians equals:", ["$60°$", "$45°$", "$90°$", "$30°$"], 0));
  q.push(ms("easy", "True facts about radians:", ["$180°=\\pi$ rad", "arc length needs $\\theta$ in radians for $s=r\\theta$", "$60°=\\pi/3$ rad", "$1$ radian is larger than $1$ degree"], [0, 1, 2, 3]));
  q.push(tf("easy", "$s=r\\theta$ requires $\\theta$ to be in radians.", true));
  q.push(tf("easy", "$45°=\\pi/3$ radians.", false));
  q.push(fill("easy", "Convert $30°$ to radians (as a fraction of $\\pi$, e.g. pi/6).", ["pi/6"]));
  q.push(num("easy", "Find the arc length for $\\theta=2$ rad, $r=5$.", 10, 0));
  q.push(mc("medium", "Convert $210°$ to radians.", ["$7\\pi/6$", "$5\\pi/6$", "$4\\pi/3$", "$11\\pi/6$"], 0));
  q.push(mc("medium", "An arc of length 12 cm is cut from a circle of radius 4 cm; find $\\theta$ in radians.", ["3", "2", "4", "1.5"], 0));
  q.push(mc("medium", "A sector has area 40 cm$^2$, radius 8 cm; find $\\theta$ in radians.", ["1.25", "1.5", "1.0", "2.0"], 0));
  q.push(ms("medium", "For a sector with area 40, radius 8:", ["$40=\\dfrac12(64)\\theta$", "$\\theta=1.25$", "arc length is $8(1.25)=10$", "arc length is $8$"], [0, 1, 2]));
  q.push(tf("medium", "An arc of 12 cm from a radius-4 circle subtends $\\theta=3$ rad.", true));
  q.push(fill("medium", "Convert $5\\pi/4$ radians to degrees.", ["225"]));
  q.push(num("medium", "Find the segment area for radius 6, angle $\\pi/2$ (2 d.p.).", 10.27, 0.1));
  q.push(num("medium", "Find the sector area for radius 10, angle $1.2$ rad.", 60, 0));
  q.push(match("medium", "Match each angle to its radian equivalent.", ["$120°$", "$150°$", "$270°$"], ["$2\\pi/3$", "$5\\pi/6$", "$3\\pi/2$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find the segment area for radius 8, angle $2\\pi/3$.", ["Sector area: $\\dfrac12(64)(2\\pi/3)$", "Triangle area: $\\dfrac12(64)\\sin(2\\pi/3)$", "Subtract sector minus triangle", "Result: $\\approx39.15$"]));
  q.push(mc("hard", "A running track is a $100\\times30$ m rectangle capped by two semicircles of radius 15 m; find the total perimeter (nearest m).", ["294 m", "260 m", "300 m", "280 m"], 0));
  q.push(mc("hard", "A sector has perimeter 24 cm and area 32 cm$^2$; find its radius (larger valid solution).", ["8", "4", "6", "12"], 0));
  q.push(mc("hard", "Find the segment area for radius 10, central angle $\\pi/3$ (2 d.p.).", ["9.06", "12.50", "7.20", "15.00"], 0));
  q.push(ms("hard", "For a sector with perimeter 24, area 32:", ["$2r+r\\theta=24$", "$r\\theta=64/r$ (from area equation)", "$2r+64/r=24$", "leads to $r^2-12r+32=0$, giving $r=4$ or $8$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A sector with perimeter 24 and area 32 has possible radii 4 and 8.", true));
  q.push(fill("hard", "A running track is $80\\times20$ m capped by semicircles radius 10; find the total perimeter (nearest m).", ["223"]));
  q.push(num("hard", "Find the segment area for radius 12, central angle $\\pi/2$ (2 d.p.).", 41.10, 0.3));
  q.push(order("hard", "Order the steps to find $r$ for a sector with arc length 10 and area 25.", ["Use $s=r\\theta\\Rightarrow\\theta=10/r$", "Use $A=\\dfrac12r^2\\theta=25$", "Substitute: $\\dfrac12r^2(10/r)=25\\Rightarrow5r=25$", "Result: $r=5$"]));
  q.push(match("hard", "Match each sector problem type to its solving approach.", ["unknown radius given perimeter+area", "segment area", "composite track perimeter"], ["system of two equations", "sector minus triangle", "straight sides plus semicircle arcs"], [0, 1, 2]));
  return q;
}

// ── 3.5 The Unit Circle & Trigonometric Identities ───────────────
function g35() {
  const q = [];
  q.push(mc("easy", "The Pythagorean identity is:", ["$\\sin^2\\theta+\\cos^2\\theta=1$", "$\\sin\\theta+\\cos\\theta=1$", "$\\sin^2\\theta-\\cos^2\\theta=1$", "$\\tan^2\\theta=1$"], 0));
  q.push(mc("easy", "$\\tan\\theta$ equals:", ["$\\sin\\theta/\\cos\\theta$", "$\\cos\\theta/\\sin\\theta$", "$1/\\sin\\theta$", "$\\sin\\theta\\cos\\theta$"], 0));
  q.push(mc("easy", "In Quadrant II, which is positive?", ["sine only", "cosine only", "tangent only", "all three"], 0));
  q.push(mc("easy", "In Quadrant III, which is positive?", ["tangent only", "sine only", "cosine only", "all three"], 0));
  q.push(mc("easy", "$\\cos(180°-\\theta)$ equals:", ["$-\\cos\\theta$", "$\\cos\\theta$", "$-\\sin\\theta$", "$\\sin\\theta$"], 0));
  q.push(ms("easy", "True facts about quadrant signs:", ["Q1: all positive", "Q2: sine positive", "Q3: tangent positive", "Q4: sine positive"], [0, 1, 2]));
  q.push(tf("easy", "$\\sin^2\\theta+\\cos^2\\theta=1$ for every $\\theta$.", true));
  q.push(tf("easy", "Cosine is positive in Quadrant III.", false));
  q.push(fill("easy", "Find the exact value of $\\sin(30°)$.", ["1/2"]));
  q.push(num("easy", "Find $\\cos(60°)$.", 0.5, 0));
  q.push(mc("medium", "Find the exact value of $\\cos(210°)$.", ["$-\\sqrt3/2$", "$\\sqrt3/2$", "$-1/2$", "$1/2$"], 0));
  q.push(mc("medium", "Given $\\cos\\theta=-3/5$, $\\theta$ in Q3, find $\\sin\\theta$.", ["$-4/5$", "$4/5$", "$-3/5$", "$3/4$"], 0));
  q.push(mc("medium", "Given $\\sin\\theta=5/13$, $\\theta$ in Q2, find $\\cos\\theta$.", ["$-12/13$", "$12/13$", "$-5/13$", "$5/12$"], 0));
  q.push(ms("medium", "For $\\cos\\theta=-3/5$, $\\theta$ in Q3:", ["$\\sin^2\\theta=1-9/25=16/25$", "sine is negative in Q3", "$\\sin\\theta=-4/5$", "$\\sin\\theta=4/5$"], [0, 1, 2]));
  q.push(tf("medium", "For $\\cos\\theta=-3/5$ in Q3, $\\sin\\theta=-4/5$.", true));
  q.push(fill("medium", "Find the exact value of $\\sin(315°)$ (as $-\\sqrt2/2$).", ["-sqrt2/2"]));
  q.push(num("medium", "Given $\\tan\\theta=3/4$, $\\theta$ in Q1, find $\\sin\\theta$.", 0.6, 0));
  q.push(num("medium", "Find the exact value of $\\tan(135°)$.", -1, 0));
  q.push(match("medium", "Match each angle to its exact cosine value.", ["$60°$", "$120°$", "$240°$"], ["$1/2$", "$-1/2$", "$-1/2$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to prove $(1-\\sin x)(1+\\sin x)=\\cos^2x$.", ["Expand LHS: difference of squares", "$=1-\\sin^2x$", "Apply Pythagorean identity: $1-\\sin^2x=\\cos^2x$", "Conclude LHS = RHS"]));
  q.push(mc("hard", "Given $\\tan\\theta=2$, $\\theta$ in Q3, find $\\sin\\theta+\\cos\\theta$ exactly.", ["$-3/\\sqrt5$", "$3/\\sqrt5$", "$-1/\\sqrt5$", "$1/\\sqrt5$"], 0));
  q.push(mc("hard", "Prove $\\dfrac{\\sin x}{1-\\cos x}=\\dfrac{1+\\cos x}{\\sin x}$; the key cross-multiplied identity used is:", ["$\\sin^2x=(1-\\cos x)(1+\\cos x)$", "$\\sin^2x=1+\\cos^2x$", "$\\cos^2x=1-\\sin x$", "$\\sin x=\\cos x$"], 0));
  q.push(mc("hard", "Given $\\cos\\theta=1/3$, $\\theta$ in Q4, find $\\tan\\theta$ exactly.", ["$-2\\sqrt2$", "$2\\sqrt2$", "$-\\sqrt2/2$", "$\\sqrt2$"], 0));
  q.push(ms("hard", "For $\\tan\\theta=2$, $\\theta$ in Q3 (finding $\\sin\\theta+\\cos\\theta$):", ["reference triangle: opp 2, adj 1, hyp $\\sqrt5$", "in Q3 both sine and cosine are negative", "$\\sin\\theta=-2/\\sqrt5$, $\\cos\\theta=-1/\\sqrt5$", "sum is $-3/\\sqrt5$"], [0, 1, 2, 3]));
  q.push(tf("hard", "Given $\\tan\\theta=2$ and $\\theta$ in Q3, $\\sin\\theta+\\cos\\theta=-3/\\sqrt5$.", true));
  q.push(fill("hard", "Prove $\\tan x\\cos x=\\sin x$; state the key substitution used.", ["tanx=sinx/cosx"]));
  q.push(num("hard", "Given $\\sin\\theta=-0.6$, $\\theta$ in Q3, find $\\cos\\theta$ exactly (as a decimal).", -0.8, 0));
  q.push(order("hard", "Order the steps to find $\\tan\\theta$ given $\\cos\\theta=-1/3$, $\\theta$ in Q2.", ["Find $\\sin^2\\theta=1-1/9=8/9$", "Sine is positive in Q2: $\\sin\\theta=2\\sqrt2/3$", "Compute $\\tan\\theta=\\sin\\theta/\\cos\\theta$", "Result: $\\tan\\theta=-2\\sqrt2$"]));
  q.push(match("hard", "Match each quadrant-condition problem to its answer sign pattern.", ["$\\theta$ in Q2, find $\\tan\\theta$", "$\\theta$ in Q3, find $\\sin\\theta$", "$\\theta$ in Q4, find $\\cos\\theta$"], ["negative", "negative", "positive"], [0, 1, 2]));
  return q;
}

// ── 3.6 Trigonometric Functions & Equations ───────────────
function g36() {
  const q = [];
  q.push(mc("easy", "For $y=a\\sin(bx)+d$, the amplitude is:", ["$|a|$", "$b$", "$d$", "$2\\pi/b$"], 0));
  q.push(mc("easy", "For $y=a\\sin(bx)+d$, the period is:", ["$2\\pi/b$", "$|a|$", "$d$", "$b$"], 0));
  q.push(mc("easy", "For $y=a\\sin(bx)+d$, the midline is:", ["$y=d$", "$y=a$", "$y=b$", "$x=d$"], 0));
  q.push(mc("easy", "Solve $\\sin x=0$ for $0\\leq x\\leq2\\pi$: solutions are:", ["$0,\\pi,2\\pi$", "$\\pi/2$ only", "no solutions", "$\\pi$ only"], 0));
  q.push(mc("easy", "Solve $\\cos x=1$ for $0\\leq x\\leq2\\pi$:", ["$x=0,2\\pi$", "$x=\\pi$", "$x=\\pi/2$", "no solutions"], 0));
  q.push(ms("easy", "True facts about $y=a\\sin(bx)+d$:", ["amplitude is $|a|$", "period is $2\\pi/b$", "midline is $y=d$", "$d$ affects the period"], [0, 1, 2]));
  q.push(tf("easy", "The amplitude of $y=3\\sin(x)$ is 3.", true));
  q.push(tf("easy", "The period of $y=\\sin(2x)$ is $2\\pi$.", false));
  q.push(fill("easy", "State the amplitude of $y=5\\cos(x)-2$.", ["5"]));
  q.push(num("easy", "State the period of $y=\\sin(4x)$ (in terms of $\\pi$, give the coefficient of $\\pi$).", 0.5, 0));
  q.push(mc("medium", "State the period of $y=4\\cos(3x)+1$.", ["$2\\pi/3$", "$3$", "$2\\pi$", "$\\pi/3$"], 0));
  q.push(mc("medium", "Solve $\\sin x=0.5$ for $0\\leq x\\leq2\\pi$: solutions are:", ["$\\pi/6,5\\pi/6$", "$\\pi/3,2\\pi/3$", "$\\pi/6$ only", "$\\pi/4,3\\pi/4$"], 0));
  q.push(mc("medium", "Solve $2\\cos^2x-\\cos x-1=0$ for $0\\leq x\\leq2\\pi$; one solution is:", ["$x=0$", "$x=\\pi/2$", "$x=\\pi/4$", "$x=\\pi/3$"], 0));
  q.push(ms("medium", "For $2\\cos^2x-\\cos x-1=0$:", ["factors as $(2\\cos x+1)(\\cos x-1)=0$", "$\\cos x=-1/2$ gives $x=2\\pi/3,4\\pi/3$", "$\\cos x=1$ gives $x=0,2\\pi$", "no solutions exist"], [0, 1, 2]));
  q.push(tf("medium", "$\\sin x=0.5$ on $[0,2\\pi]$ has solutions $\\pi/6$ and $5\\pi/6$.", true));
  q.push(fill("medium", "Solve $\\cos x=-1$ for $0\\leq x\\leq2\\pi$.", ["pi"]));
  q.push(num("medium", "State the midline value of $y=6\\sin(2x)-4$.", -4, 0));
  q.push(num("medium", "Solve $2\\sin^2x-\\sin x-1=0$ for the solution equal to $3\\pi/2$ (verify by stating $x$).", 4.712, 0.01));
  q.push(match("medium", "Match each function to its period.", ["$\\sin(2x)$", "$\\cos(x/2)$", "$\\sin(4x)$"], ["$\\pi$", "$4\\pi$", "$\\pi/2$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to solve $2\\sin^2x-\\sin x-1=0$ on $[0,2\\pi]$.", ["Factor: $(2\\sin x+1)(\\sin x-1)=0$", "$\\sin x=-1/2\\Rightarrow x=7\\pi/6,11\\pi/6$", "$\\sin x=1\\Rightarrow x=\\pi/2$", "Combine all solutions"]));
  q.push(mc("hard", "Solve $2\\sin^2x+\\cos x-2=0$ for $0\\leq x\\leq2\\pi$ (substitute first); one solution is:", ["$x=0$", "$x=\\pi/2$", "$x=\\pi$", "$x=\\pi/6$"], 0));
  q.push(mc("hard", "A tide's depth is $D(t)=3\\sin(\\pi t/6)+7$; find the first time (in $[0,12]$) the depth is 8.5 m.", ["$t=1$", "$t=2$", "$t=3$", "$t=0.5$"], 0));
  q.push(mc("hard", "Solve $2\\cos^2x-3\\sin x=0$ for $0\\leq x\\leq2\\pi$ (substitute $\\cos^2x=1-\\sin^2x$); one solution is:", ["$x=\\pi/6$", "$x=\\pi/3$", "$x=\\pi$", "$x=0$"], 0));
  q.push(ms("hard", "For $2\\sin^2x+\\cos x-2=0$ (substituting $\\sin^2x=1-\\cos^2x$):", ["becomes $-2\\cos^2x+\\cos x=0$", "factors as $\\cos x(1-2\\cos x)=0$", "$\\cos x=0\\Rightarrow x=\\pi/2,3\\pi/2$", "$\\cos x=1/2\\Rightarrow x=\\pi/3,5\\pi/3$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A Ferris wheel $h(t)=12\\sin(\\pi t/4)+14$ reaches height 20 at $t=2/3$ min within the first cycle.", true));
  q.push(fill("hard", "Solve $2\\cos^2x-3\\cos x+1=0$ for $0\\leq x\\leq2\\pi$; state the solution besides $0$ and $2\\pi$ (there's one more, give it in terms of $\\pi$).", ["pi/3"]));
  q.push(num("hard", "A Ferris wheel's height is $h(t)=10\\sin(\\pi t/4)+12$; find the first time it reaches 17 m (in minutes, nearest 0.01).", 0.67, 0.05));
  q.push(order("hard", "Order the steps to solve $2\\sin^2x-\\cos x-1=0$ on $[0,2\\pi]$.", ["Substitute $\\sin^2x=1-\\cos^2x$: $2-2\\cos^2x-\\cos x-1=0$", "Simplify: $-2\\cos^2x-\\cos x+1=0\\Rightarrow2\\cos^2x+\\cos x-1=0$", "Factor: $(2\\cos x-1)(\\cos x+1)=0$", "Solutions: $\\cos x=1/2$ or $\\cos x=-1$"]));
  q.push(match("hard", "Match each trig-equation type to its solving strategy.", ["linear (e.g. $\\sin x=k$)", "quadratic in one function", "mixed $\\sin^2,\\cos$ terms"], ["reference angle + quadrant", "factor like an ordinary quadratic", "substitute an identity first"], [0, 1, 2]));
  return q;
}

export default [
  { code: "3.1", gen: g31 },
  { code: "3.2", gen: g32 },
  { code: "3.3", gen: g33 },
  { code: "3.4", gen: g34 },
  { code: "3.5", gen: g35 },
  { code: "3.6", gen: g36 },
];
