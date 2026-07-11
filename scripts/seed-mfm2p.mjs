// Seeds the full MFM2P (Grade 10 Applied) course: 7 units / 37 lessons.
// Reuses MPM2D lesson + assignment content for the overlapping subjects
// (linear systems, similar triangles & trig, quadratic expressions, parabolas);
// the MFM2P-only subjects (algebra/equations, linear relations, measurement,
// ratio/Pythagoras, interpreting quadratic graphs) are authored here.
// Non-destructive re-run: keeps the course + enrollments, refreshes lessons.
// Usage: node scripts/seed-mfm2p.mjs

import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { subjects as MPM, ASSIGN as MASSIGN, sk } from "./seed-mpm2d.mjs";
import { authored } from "./mfm2p-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Foundations of Mathematics (MFM2P)";
const DESC = "Ontario Grade 10 Applied Mathematics (MFM2P). Interactive lessons across Algebra & Linear Relations, Linear Systems, Measurement, Similar Triangles & Trigonometry, and Quadratic Relations.";

// ── reuse helpers ────────────────────────────────────────────
const byCode = Object.fromEntries(MPM.map((s) => [s.code, s]));
const reuse = (mpmCode, newCode) => {
  const s = byCode[mpmCode];
  if (!s) throw new Error("MPM2D subject not found: " + mpmCode);
  return { code: newCode, title: s.title, blocks: s.blocks };
};
const reuseA = (mpmCode, newCode) => {
  const a = MASSIGN[mpmCode];
  if (!a) return null;
  return { code: newCode, title: a.title.replace(/^Assignment\s+[0-9.]+\s+—/, `Assignment ${newCode} —`), description: a.description };
};

// ── subjects (37) — order is the teaching sequence ───────────
const subjects = [
  // Unit 1 — Algebra & Solving Equations (MFM2P-only; authored next pass)
  sk("1.1", "Review of Expressions & Integers", "Grade 10 Applied opens by rebuilding algebra fluency. This lesson reviews integer arithmetic, evaluating expressions by substitution, and simplifying using the order of operations.", ["Add, subtract, multiply, and divide integers", "Evaluate algebraic expressions by substitution", "Simplify expressions using the order of operations (BEDMAS)"]),
  sk("1.2", "Like Terms & the Distributive Property", "Before solving equations you must simplify. This lesson collects like terms and expands brackets with the distributive property.", ["Identify and collect like terms", "Expand $a(b+c)$ with the distributive property", "Simplify multi-term expressions"]),
  sk("1.3", "Solving One- & Two-Step Equations", "Solving an equation means isolating the variable using inverse operations. This lesson builds from one-step to two-step equations.", ["Solve one-step equations", "Solve two-step equations", "Check a solution by substitution"]),
  sk("1.4", "Solving Multi-Step Equations", "Real equations have brackets, fractions, and variables on both sides. This lesson handles them step by step.", ["Solve equations with variables on both sides", "Expand brackets, then solve", "Clear fractions, then solve"]),
  sk("1.5", "Rearranging Formulas", "Formulas can be solved for any variable. This lesson rearranges common formulas to isolate a chosen variable.", ["Rearrange a formula to isolate a variable", "Apply inverse operations to formulas", "Use a rearranged formula to compute a value"]),
  sk("1.6", "Modelling with Equations", "Word problems become equations. This lesson translates situations into equations, solves them, and interprets the answer.", ["Translate a word problem into an equation", "Solve the equation", "Interpret and check the answer in context"]),
  // Unit 2 — Linear Relations (MFM2P-only; authored next pass)
  sk("2.1", "Rate of Change & Slope", "Slope measures a constant rate of change. This lesson finds slope from a graph, a table, and two points.", ["Interpret slope as a rate of change", "Find slope as rise over run", "Compute slope from two points"]),
  sk("2.2", "Direct & Partial Variation", "Linear relations come in two flavours. This lesson distinguishes direct variation ($y=kx$) from partial variation ($y=mx+b$).", ["Recognize direct vs partial variation", "Identify the initial value and constant rate", "Write the equation of a variation"]),
  sk("2.3", "Slope–Intercept Form ($y = mx + b$)", "The most useful form of a line. This lesson reads slope and intercept directly from $y=mx+b$.", ["Identify the slope $m$ and $y$-intercept $b$", "Write $y=mx+b$ from a description", "Interpret $m$ and $b$ in context"]),
  sk("2.4", "Graphing Lines", "Turn an equation into a picture. This lesson graphs lines from slope–intercept form, from a table, and from intercepts.", ["Graph a line from $y=mx+b$", "Graph from a table of values", "Graph using $x$- and $y$-intercepts"]),
  sk("2.5", "Writing Equations of Lines", "Build a line's equation from given information.", ["Write a line from slope and a point", "Write a line from two points", "Write a line from its graph"]),
  sk("2.6", "Interpreting Linear Models", "Lines model real situations. This lesson reads and uses linear models to make predictions.", ["Interpret slope and intercept in context", "Use a linear model to predict", "Compare two linear models"]),
  // Unit 3 — Linear Systems (reuse MPM2D 1.2–1.5)
  reuse("1.2", "3.1"),
  reuse("1.3", "3.2"),
  reuse("1.4", "3.3"),
  reuse("1.5", "3.4"),
  // Unit 4 — Measurement: Surface Area & Volume (MFM2P-only; authored next pass)
  sk("4.1", "Measurement Systems & Unit Conversion", "Applied math uses both metric and imperial units. This lesson converts within and between the two systems.", ["Convert within the metric system", "Convert within the imperial system", "Convert between metric and imperial units"]),
  sk("4.2", "Surface Area of Prisms & Cylinders", "Surface area is the total area of all faces. This lesson computes the surface area of prisms and cylinders.", ["Find the surface area of rectangular and triangular prisms", "Find the surface area of a cylinder", "Solve surface-area problems"]),
  sk("4.3", "Volume of Prisms & Cylinders", "Volume measures the space inside. This lesson computes the volume of prisms and cylinders.", ["Find the volume of prisms", "Find the volume of a cylinder", "Solve volume problems"]),
  sk("4.4", "Pyramids & Cones", "Pyramids and cones taper to a point. This lesson finds their surface area and volume.", ["Find the surface area of pyramids and cones", "Find the volume of pyramids and cones", "Solve related problems"]),
  sk("4.5", "Spheres", "A sphere is the set of points a fixed distance from a centre. This lesson finds its surface area and volume.", ["Find the surface area of a sphere", "Find the volume of a sphere", "Solve sphere problems"]),
  sk("4.6", "Composite Figures & Measurement Problems", "Real objects combine shapes. This lesson finds the surface area and volume of composite figures and solves design problems.", ["Break a composite figure into known solids", "Compute total surface area and volume", "Solve measurement problems in context"]),
  // Unit 5 — Similar Triangles & Trigonometry (reuse MPM2D 6.x; new 5.1, 5.4)
  sk("5.1", "Ratio, Proportion & Scale", "Ratios and proportions underpin similarity. This lesson works with ratios, solves proportions, and applies scale factors.", ["Write and simplify ratios", "Solve proportions", "Apply scale factors to drawings and models"]),
  reuse("6.1", "5.2"),
  reuse("6.2", "5.3"),
  sk("5.4", "The Pythagorean Theorem", "In a right triangle, $a^2+b^2=c^2$. This lesson finds missing sides and solves applications.", ["State and apply the Pythagorean theorem", "Find a missing side of a right triangle", "Solve real problems with the theorem"]),
  reuse("6.3", "5.5"),
  reuse("6.6", "5.6"),
  // Unit 6 — Quadratic Expressions (reuse MPM2D 3.x)
  reuse("3.1", "6.1"),
  reuse("3.2", "6.2"),
  reuse("3.3", "6.3"),
  reuse("3.5", "6.4"),
  // Unit 7 — Quadratic Relations & Graphs (reuse MPM2D 4.x; new 7.5)
  reuse("4.1", "7.1"),
  reuse("4.2", "7.2"),
  reuse("4.3", "7.3"),
  reuse("4.5", "7.4"),
  sk("7.5", "Interpreting Quadratic Graphs in Context", "Parabolas model thrown objects, profit, and arches. This lesson reads the vertex, zeros, and intercepts of a quadratic graph to answer real questions.", ["Interpret the vertex as a maximum or minimum", "Interpret the zeros and intercepts in context", "Solve problems by reading a quadratic graph"]),
];

// Override scaffolds with fully-authored MFM2P-only lessons where available.
for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

// ── assignments: reuse for the overlapping subjects ──────────
const ASSIGN = {};
for (const [mpm, nc] of [
  ["1.2", "3.1"], ["1.3", "3.2"], ["1.4", "3.3"], ["1.5", "3.4"],
  ["6.1", "5.2"], ["6.2", "5.3"], ["6.3", "5.5"], ["6.6", "5.6"],
  ["3.1", "6.1"], ["3.2", "6.2"], ["3.3", "6.3"], ["3.5", "6.4"],
  ["4.1", "7.1"], ["4.2", "7.2"], ["4.3", "7.3"], ["4.5", "7.4"],
]) {
  const a = reuseA(mpm, nc);
  if (a) ASSIGN[nc] = a;
}

// ── authored assignments for the MFM2P-only subjects ─────────
const A = (code, topic, ku, th, co, ap) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = ["Knowledge & Understanding", ...sec(ku), "Thinking", ...sec(th), "Communication", ...sec(co), "Application", ...sec(ap)].join("\n");
  return { code, title: `Assignment ${code} — ${topic}`, description };
};
for (const a of [
  A("1.1", "Review of Expressions & Integers",
    ["Evaluate $-7+12-5$.", "Evaluate $(-6)(4)$ and $-18\\div3$.", "Evaluate $2x^2-3x$ when $x=-2$."],
    ["Explain why $(-3)^2$ and $-3^2$ give different results.", "Find a value of $x$ for which $5-x$ is negative, and justify."],
    ["State the order of operations and explain why it matters.", "Describe how to substitute a negative value without sign errors."],
    ["A diver descends 8 m, rises 3 m, then descends 5 m. Write and evaluate an expression for the final depth.", "Evaluate $\\dfrac{2a+b}{a-b}$ for $a=4,\\ b=-2$.", "A balance changes by $-40$, $+25$, $-15$ dollars. Find the net change."]),
  A("1.2", "Like Terms & the Distributive Property",
    ["Simplify $4x+7-2x+3$.", "Expand $3(2x-5)$.", "Expand $-2(x-4)$."],
    ["Explain why $3x$ and $3x^2$ cannot be combined.", "Is $2(x+3)$ the same as $2x+3$? Justify."],
    ["Describe, step by step, how to simplify $3(x-1)-2(x+4)$.", "Explain in words what the distributive property does."],
    ["A rectangle has length $x+5$ and width $3$. Write and simplify its perimeter.", "Simplify $5(x+2)-3(x-1)$.", "Write a simplified expression for the sum of three consecutive integers $x,\\ x+1,\\ x+2$."]),
  A("1.3", "Solving One- & Two-Step Equations",
    ["Solve $x+9=4$.", "Solve $3x=21$.", "Solve $2x-5=11$."],
    ["Without solving, decide whether $4x=30$ has an integer solution, and explain.", "Create a two-step equation whose solution is $x=5$."],
    ["Explain why you undo addition before division when solving $2x+1=9$.", "Describe how to check a solution."],
    ["A taxi charges 3 dollars plus 2 dollars per km. Write and solve an equation for a 15-dollar fare.", "Solve $\\dfrac{x}{4}-1=2$.", "Five more than triple a number is $20$. Find the number."]),
  A("1.4", "Solving Multi-Step Equations",
    ["Solve $2x+3=x+8$.", "Solve $3(x-2)=12$.", "Solve $4x-7=2x+5$."],
    ["Solve $2(x+1)=2x+5$ and explain the result.", "Solve $3(x-1)=3x-3$ and interpret the answer."],
    ["Outline the four steps for solving a multi-step equation.", "Explain how to clear a fraction from an equation."],
    ["One sibling has $x$ dollars, another has $2x-5$; together they have 40 dollars. Find $x$.", "Solve $\\dfrac{x}{2}+3=7$.", "A rectangle's length is 3 more than its width and the perimeter is $26$. Find the width using an equation."]),
  A("1.5", "Rearranging Formulas",
    ["Solve $A=lw$ for $w$.", "Solve $P=2(l+w)$ for $w$.", "Solve $d=vt$ for $t$."],
    ["Explain why rearranging a formula uses the same rules as solving an equation.", "Rearrange $y=mx+b$ for $x$ and state any restriction on $m$."],
    ["Describe the steps to isolate $r$ in $C=2\\pi r$.", "Explain why dividing both sides keeps a formula true."],
    ["For $A=\\tfrac12 bh$, solve for $h$, then find $h$ when $A=24,\\ b=6$.", "Solve $F=ma$ for $a$.", "Rearrange $C=40h+50$ for $h$, then find $h$ when $C=250$ dollars."]),
  A("1.6", "Modelling with Equations",
    ["Translate 'seven less than twice a number is 9' into an equation and solve.", "A number doubled then increased by 4 is $16$. Find it.", "Three consecutive integers sum to $48$. Find them."],
    ["Explain how to find when two cost plans are equal using equations.", "Create a word problem whose equation is $5x+10=60$."],
    ["Describe the four steps for solving a word problem with an equation.", "Explain why defining the variable first matters."],
    ["A plumber charges 50 dollars plus 40 dollars per hour. How long is a 210-dollar job?", "Gym A charges 8 dollars per visit; Gym B charges 5 dollars per visit plus 12 dollars. When are they equal?", "A rectangle's length is twice its width and the perimeter is $36$. Find the dimensions."]),
  A("2.1", "Rate of Change & Slope",
    ["Find the slope through $(1,2)$ and $(4,8)$.", "Find the slope through $(-2,5)$ and $(2,-3)$.", "From the table $x:0,1,2$, $y:3,5,7$, find the rate of change."],
    ["Explain why a vertical line's slope is undefined.", "Two points have the same $y$-value; state the slope and why."],
    ["Explain what slope measures as a rate of change.", "Describe how to find slope from a table."],
    ["A candle burns from $20$ cm to $8$ cm in $4$ hours; find the rate of change and its meaning.", "A pool fills from $30$ L to $150$ L in $8$ min; find the rate.", "A car travels $240$ km in $3$ h; find the rate and explain its units."]),
  A("2.2", "Direct & Partial Variation",
    ["Is $y=4x$ direct or partial?", "Is $y=3x+5$ direct or partial?", "$y$ varies directly with $x$ and $y=12$ when $x=3$; find $k$."],
    ["Explain the graphical difference between direct and partial variation.", "Can a partial variation pass through the origin? Justify."],
    ["Explain what the constant of variation $k$ represents.", "Describe a real situation modelled by partial variation."],
    ["A gym charges 20 dollars to join plus 5 dollars per visit; write the equation and find the cost of $8$ visits.", "Cost varies directly with litres: 25 dollars for $10$ L. Find the cost of $16$ L.", "Compare $C=2x$ and $C=x+10$ at $x=5$ and state which is cheaper."]),
  A("2.3", "Slope–Intercept Form",
    ["State the slope and $y$-intercept of $y=-3x+5$.", "Write the line with slope $4$ and $y$-intercept $-2$.", "Write $2x+y=5$ in the form $y=mx+b$."],
    ["Explain why you must divide every term when isolating $y$ in $4x-2y=6$.", "Two lines have equal slope but different intercepts; how do their graphs compare?"],
    ["Explain the meaning of $m$ and $b$.", "Describe how to graph a line directly from $y=mx+b$."],
    ["A phone plan is $C=0.10t+15$; explain what $0.10$ and $15$ mean.", "Write $6x-3y=9$ in slope-intercept form.", "A line has slope $2$ through $(0,-4)$; write it and find $y$ at $x=3$."]),
  A("2.4", "Graphing Lines",
    ["Graph $y=2x-3$ (give two points).", "Graph $y=-x+4$ (give two points).", "Find the intercepts of $2x+3y=6$."],
    ["Explain how the slope tells you which way to step when graphing.", "How can you tell from its equation that a line is horizontal?"],
    ["Describe how to graph a line using its intercepts.", "Explain why two points are enough to draw a line."],
    ["Graph $3x-4y=12$ using intercepts.", "A line passes through $(0,5)$ and $(2,1)$; graph it and state the slope.", "Sketch $y=\\tfrac23x-1$ and name two lattice points it passes through."]),
  A("2.5", "Writing Equations of Lines",
    ["Write the line with slope $3$ through $(0,5)$.", "Write the line with slope $-2$ through $(3,1)$.", "Write the line through $(1,2)$ and $(3,8)$."],
    ["Explain why you must find the slope first when given two points.", "Two points have equal $y$-values; what equation results?"],
    ["Describe how to write a line from a slope and a point.", "Explain how to read a line's equation from its graph."],
    ["A candle is $20$ cm and burns $3$ cm/h; write height versus time.", "Write the line through $(-1,2)$ and $(2,-7)$.", "A line crosses $(0,4)$ and falls $1$ for every $2$ across; write it."]),
  A("2.6", "Interpreting Linear Models",
    ["For $C=3h+25$, state the fixed fee and the rate.", "For $C=3h+25$, find $C$ at $h=4$.", "For $C=3h+25$, find $h$ when $C=49$."],
    ["Explain what a negative slope means in a draining-pool model.", "Explain how to decide which of two plans is cheaper."],
    ["Explain what slope and intercept mean in a cost model.", "Describe how to predict an input from a model."],
    ["A pool drains by $V=-20t+500$; when is it empty?", "Plan A: $0.10t+10$; Plan B: $0.05t+20$. Which is cheaper at $100$ min?", "For $V=-5t+60$, interpret $-5$ and find when $V=0$."]),
  A("4.1", "Measurement Systems & Unit Conversion",
    ["Convert $3.5$ m to cm.", "Convert $2500$ mL to L.", "Convert $5$ ft to inches."],
    ["Explain when converting to a larger unit means dividing.", "Why can't you add $3$ ft and $50$ cm directly?"],
    ["Describe how to convert between metric and imperial using a conversion factor.", "Explain the metric prefix pattern (km, m, cm, mm)."],
    ["A recipe needs $2$ cups; about how many mL (1 cup ≈ 250 mL)?", "A road is $12$ miles; about how many km?", "A board is $8$ ft long; convert to cm (1 in = 2.54 cm)."]),
  A("4.2", "Surface Area of Prisms & Cylinders",
    ["Find the SA of a $4\\times3\\times2$ box.", "Find the SA of a cube with side $5$.", "Find the SA of a cylinder $r=3,\\ h=10$ (to 1 dp)."],
    ["Why is the radius, not the diameter, used in the cylinder formula?", "If you double a cube's side, what happens to its surface area? Explain."],
    ["Describe how to find the SA of a triangular prism.", "Explain why an open-top box has less surface area than a closed one."],
    ["A can has $r=4$ cm, $h=12$ cm; find the label (lateral) area to 1 dp.", "A gift box is $20\\times15\\times10$ cm; how much wrapping paper (SA) is needed?", "Find the SA of a triangular prism with triangle legs $3,4$ and length $10$."]),
  A("4.3", "Volume of Prisms & Cylinders",
    ["Find the V of a $4\\times3\\times2$ box.", "Find the V of a cube with side $5$.", "Find the V of a cylinder $r=3,\\ h=10$ (to 1 dp)."],
    ["Explain why $V=(\\text{base area})\\times\\text{height}$ for any prism.", "Two cylinders have the same volume but different radii — is that possible? Explain."],
    ["Describe how to find a cylinder's height from its volume.", "Explain the difference between surface-area units and volume units."],
    ["A water tank is $r=2$ m, $h=5$ m; find the volume to 1 dp.", "How many litres fit in a $30\\times20\\times10$ cm box (1 L = 1000 cm³)?", "A cylinder holds $48\\pi$ cm³ with $r=4$; find its height."]),
  A("4.4", "Pyramids & Cones",
    ["Find the V of a cone $r=3,\\ h=4$.", "Find the V of a square pyramid, base $6\\times6$, height $10$.", "Find the slant height of a cone $r=3,\\ h=4$."],
    ["Explain why a cone's volume is one-third of a cylinder's.", "Why does cone surface area use slant height, not vertical height?"],
    ["Describe how to find a cone's slant height.", "Explain how to find the surface area of a square pyramid."],
    ["An ice-cream cone is $r=3,\\ h=8$; find its volume to 1 dp.", "Find the SA of a cone $r=5$, slant $13$.", "A pyramid roof has base $6\\times6$ and slant $5$; find the area to be shingled (lateral only)."]),
  A("4.5", "Spheres",
    ["Find the V of a sphere $r=3$ (to 1 dp).", "Find the SA of a sphere $r=3$ (to 1 dp).", "Find the SA of a ball with diameter $10$."],
    ["For a sphere $r=3$, both volume and SA equal $36\\pi$ — explain whether that is a coincidence.", "If the radius doubles, what happens to the volume? Explain."],
    ["State the sphere volume and SA formulas and what each represents.", "Describe how to find $r$ from a sphere's surface area."],
    ["A basketball has radius $12$ cm; find its volume to 1 dp.", "A hemisphere bowl has $r=6$; find its volume (exact).", "A sphere has SA $=36\\pi$; find its radius."]),
  A("4.6", "Composite Figures & Measurement Problems",
    ["Find the V of a cylinder $r=3,\\ h=10$ plus a hemisphere $r=3$ (exact).", "Find the V of a box $5\\times5\\times2$ plus a pyramid (base $5\\times5$, height $6$).", "Find the V of a pipe: cylinder $R=5$ minus a hole $r=3$, length $10$ (exact)."],
    ["Why is the circle where a hemisphere meets a cylinder not counted in surface area?", "When do you subtract rather than add volumes?"],
    ["Describe the strategy for finding a composite figure's volume.", "Explain how to find the painted area of a solid resting on the ground."],
    ["A silo: cylinder $r=4,\\ h=12$ with a cone top $r=4,\\ h=3$; find the volume (exact).", "An ice-cream cone $r=3,\\ h=8$ with a hemisphere scoop $r=3$; find the total volume (exact).", "A cube of side $3$ has a $1\\times1\\times3$ hole drilled through; find the remaining volume."]),
  A("5.1", "Ratio, Proportion & Scale",
    ["Simplify $12:18$.", "Solve $\\dfrac34=\\dfrac{x}{12}$.", "On a $1:50$ plan a wall is $4$ cm; find the real length."],
    ["Explain why cross-multiplication solves a proportion.", "Maps have scales $1:50000$ and $1:100000$ — which shows more detail? Explain."],
    ["Explain what a scale of $1:50$ means.", "Describe how ratios connect to similar triangles."],
    ["A recipe ratio flour : sugar $=3:1$; with $9$ cups of flour, how much sugar?", "A $1:25$ model car is $18$ cm; find the real length.", "On a $1:100000$ map two towns are $7.5$ cm apart; find the real distance in km."]),
  A("5.4", "The Pythagorean Theorem",
    ["Legs $3$ and $4$; find the hypotenuse.", "Legs $6$ and $8$; find the hypotenuse.", "Hypotenuse $13$, one leg $5$; find the other leg."],
    ["Explain why the theorem applies only to right triangles.", "Is a triangle with sides $5,6,8$ right-angled? Justify."],
    ["State the theorem and identify which side is $c$.", "Describe how to find a leg (not the hypotenuse)."],
    ["A $5$ m ladder's base is $3$ m from a wall; how high does it reach?", "A TV is $40$ in by $30$ in; find its diagonal.", "A rectangular field is $9$ m by $12$ m; find the diagonal walking distance."]),
  A("7.5", "Interpreting Quadratic Graphs in Context",
    ["For $h=-5t^2+20t$, find the landing time.", "For $h=-5t^2+20t$, find the maximum height.", "For $y=(x-4)^2-9$, find the zeros."],
    ["Explain why the vertex gives the maximum height, not the $y$-intercept.", "Why is a negative time rejected in a projectile problem?"],
    ["Explain what the vertex, the zeros, and the $y$-intercept each mean for a thrown ball.", "Describe how to read break-even points from a profit parabola."],
    ["Profit $P=-x^2+10x-16$ (thousands); find the break-even points and the maximum profit.", "$h=-5t^2+10t+15$; find the release height and the landing time.", "$h=-5t^2+20t+25$; find the maximum height and the landing time."]),
]) {
  ASSIGN[a.code] = a;
}

// ── seeding ──────────────────────────────────────────────────
async function getTeacherId() {
  const { data: created } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher");
  return found.id;
}

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MFM2P", description: DESC, level: "10", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MFM2P", title: COURSE_TITLE, description: DESC, level: "10", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  await db.from("assignments").delete().eq("course_id", course.id);

  let pos = 0, asg = 0, full = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    // a "full" lesson has more than the single scaffold html block
    if (s.blocks.length > 1) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const { error: ae } = await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
  }
  console.log(`\nSeeded ${subjects.length} MFM2P lessons (${full} full / ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
