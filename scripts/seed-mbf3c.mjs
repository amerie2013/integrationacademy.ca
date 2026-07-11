// Seeds the full MBF3C (Foundations for College Mathematics, Grade 11, College) course.
// Strands: A Mathematical Models · B Personal Finance · C Geometry & Trigonometry · D Data Management.
// Authored lessons (Grade 9/10/MCR3U theme + interactive graphs) override scaffolds unit by unit.
// Usage: node scripts/seed-mbf3c.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mbf3c-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Foundations for College Mathematics (MBF3C)";
const DESC = "Ontario Grade 11 Foundations for College Mathematics, College Preparation (MBF3C). Interactive lessons across Mathematical Models (quadratic & exponential relations), Personal Finance, Geometry & Trigonometry, and Data Management.";

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
  if (!found) throw new Error("Could not create or find teacher.");
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

const subjects = [
  // ── UNIT 1 — Quadratic Relations (Strand A1) ──
  sk("1.1", "Expanding & Factoring Quadratics", "Move between expanded and factored quadratics.", ["Distribute and FOIL", "Special products", "Common factoring & simple trinomials"]),
  sk("1.2", "Quadratic Relations & Their Graphs", "Vertex form a(x−h)²+k and the parabola.", ["Roles of a, h, k", "Read the vertex", "Vertex form ↔ standard form"]),
  sk("1.3", "Solving Quadratic Equations", "Find the zeros by factoring and graphing.", ["Zero product property", "Factor and solve", "Break-even problems"]),
  sk("1.4", "Quadratic Models & Applications", "Use parabolas to model real situations.", ["Maximum & minimum", "Projectile & break-even", "Optimization"]),
  // ── UNIT 2 — Exponential Relations (Strand A2, A3) ──
  sk("2.1", "Exponent Laws", "Work with exponents, including zero and negatives.", ["Product, quotient & power laws", "Zero exponent", "Negative exponents"]),
  sk("2.2", "Exponential Relations & Graphs", "Graph y=a·bˣ and compare to linear/quadratic.", ["Growth vs decay", "Key features of the graph", "Distinguish relation types"]),
  sk("2.3", "Exponential Growth & Decay Applications", "Model real growth and decay.", ["Growth & decay models", "Half-life and doubling", "Solve from equations"]),
  // ── UNIT 3 — Personal Finance (Strand B) ──
  sk("3.1", "Simple & Compound Interest", "Compare simple and compound interest.", ["I=Prt and A=P(1+i)ⁿ", "Compounding periods", "Total interest earned"]),
  sk("3.2", "Saving, Investing & Credit", "Financial services and the cost of credit.", ["Accounts & investments", "Credit cards & loans", "Cost of buying on credit"]),
  sk("3.3", "Owning & Operating a Vehicle", "The real costs of a vehicle.", ["Purchase & financing", "Insurance & fuel", "Total cost of ownership"]),
  // ── UNIT 4 — Geometry & Trigonometry (Strand C) ──
  sk("4.1", "Surface Area & Volume", "3-D measurement of prisms, cylinders, cones & spheres.", ["Surface area formulas", "Volume formulas", "Real-world measurement"]),
  sk("4.2", "2-D Design & Optimization", "Nets, views, and optimizing perimeter & area.", ["Nets, plans & views", "Perimeter & area", "Optimization & design problems"]),
  sk("4.3", "The Sine Law", "Solve acute triangles with a side–angle pair.", ["The sine law", "Find a side or an angle", "Applications"]),
  sk("4.4", "The Cosine Law", "Solve acute triangles given SAS or SSS.", ["The cosine law", "Find a side or an angle", "Choosing sine vs cosine law"]),
  // ── UNIT 5 — Data Management (Strand D) ──
  sk("5.1", "Collecting & Displaying Data", "Samples, data types, and graphs.", ["Population vs sample", "Sampling techniques", "Histograms, bar & circle graphs"]),
  sk("5.2", "Central Tendency & Spread", "Summarize one-variable data.", ["Mean, median, mode", "Range & standard deviation", "Choosing the right measure"]),
  sk("5.3", "Probability", "Theoretical and experimental probability.", ["Theoretical probability", "Experimental probability", "Comparing the two"]),
];

// Replace scaffolds with fully-authored lessons as each unit is written.
for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

// ── Assignments — 10 questions in 3 categories (K / Application / Thinking) ──
const A3 = (code, topic, knowledge, application, thinking) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(knowledge),
    "Application", ...sec(application),
    "Thinking", ...sec(thinking),
  ].join("\n");
  return { title: `Assignment ${code} — ${topic}`, description };
};
const ASSIGN = {
  "1.1": A3("1.1", "Expanding & Factoring Quadratics",
    ["Expand $3(x+4)$.", "Expand $(x+2)(x+3)$.", "Expand $(x+5)^2$.", "Factor $x^2+7x+12$."],
    ["Expand and simplify $2x(x-5)+x(x+1)$.", "Factor $6x^2+9x$.", "Factor $x^2-x-6$."],
    ["Explain why $(x+5)^2\\ne x^2+25$.", "Explain how factoring and expanding are related.", "Why should you look for a common factor first?"]),
  "1.2": A3("1.2", "Quadratic Relations & Their Graphs",
    ["State the vertex of $y=(x-3)^2+2$.", "State the vertex of $y=(x+4)^2-2$.", "What does $a<0$ do to a parabola?", "Write $y=x^2$ shifted right 3 and down 2."],
    ["Describe all transformations of $y=-2(x+1)^2+5$.", "Expand $y=(x-1)^2+4$ to standard form.", "Does $y=(x-5)^2+8$ have a max or min, and what is its value?"],
    ["Explain why the horizontal shift is opposite to the sign.", "Explain how to find the vertex from vertex form.", "How does the value of $a$ change the shape of the parabola?"]),
  "1.3": A3("1.3", "Solving Quadratic Equations",
    ["Solve $x^2-5x+6=0$.", "Solve $x^2-9=0$.", "Solve $x^2+2x-8=0$.", "State the zero product property."],
    ["Solve $x^2-6x=0$.", "Solve $x^2-x-12=0$.", "A profit relation is $P=x^2-7x+10$; find the break-even values."],
    ["Explain why the equation must equal 0 before factoring.", "Connect the solutions of $x^2-5x+6=0$ to the graph of $y=x^2-5x+6$.", "Explain what a break-even point means."]),
  "1.4": A3("1.4", "Quadratic Models & Applications",
    ["Find the maximum of $y=-(x-3)^2+9$.", "Find the minimum of $y=x^2-6x+5$.", "Does $y=2x^2-8x+1$ have a max or a min?", "State the formula for the axis of symmetry."],
    ["A ball's height is $h=-5t^2+20t$. Find the maximum height.", "When does that ball hit the ground?", "Profit is $P=-2x^2+12x-10$. Find the maximum profit."],
    ["Explain how the sign of $a$ tells you max vs min.", "A rectangle has perimeter 40 m; explain how to maximize its area.", "Interpret the meaning of the vertex in a profit model."]),
  "2.1": A3("2.1", "Exponent Laws",
    ["Simplify $x^5\\cdot x^3$.", "Simplify $\\dfrac{x^9}{x^4}$.", "Evaluate $5^0$.", "Evaluate $2^{-3}$."],
    ["Simplify $(2x^3)^2$.", "Simplify $\\dfrac{y^8}{y^3}$.", "Evaluate $5^{-2}$."],
    ["Explain why $x^0=1$.", "Explain why a negative exponent does not make a number negative.", "Explain the difference between adding and multiplying exponents."]),
  "2.2": A3("2.2", "Exponential Relations & Graphs",
    ["For $y=2^x$, find the value at $x=3$.", "State the y-intercept of $y=3\\cdot2^x$.", "Is $y=(1/2)^x$ growth or decay?", "State the asymptote of $y=2^x$."],
    ["State the domain and range of $y=2^x$.", "Which grows faster, $y=2^x$ or $y=5^x$?", "Which grows fastest for large $x$: $2x$, $x^2$, or $2^x$?"],
    ["Explain how an exponential relation differs from a quadratic.", "Why is $y=b^x$ always positive?", "Describe how to tell a relation is exponential from a table of values."]),
  "2.3": A3("2.3", "Exponential Growth & Decay Applications",
    ["State the growth factor for $+8\\%$ per year.", "State the decay factor for $-15\\%$ per year.", "For $P=200(2)^t$, find $P$ after 3 years.", "Write the half-life model for a quantity halving every $h$ years."],
    ["80 g halves every 5 years; how much remains after 10 years?", "For $h=100(0.6)^n$, find the height after 3 bounces.", "A car loses $15\\%$ of its value yearly; write its value after $t$ years."],
    ["Explain how to find $b$ from a percentage change.", "Explain how half-life problems use the exponent $t/h$.", "Explain why compound interest is an example of exponential growth."]),
  "3.1": A3("3.1", "Simple & Compound Interest",
    ["Find the simple interest on $\\$500$ at 4\\% for 3 years.", "Find the amount: $\\$1000$ at 5\\% compounded annually for 3 years.", "Find $i$ for 6\\% compounded monthly.", "State the formula for total interest."],
    ["$\\$1000$ at 6\\% compounded quarterly for 1 year. Find the amount.", "Total interest on $\\$2000$ at 4\\% compounded annually for 3 years.", "Compare $\\$1000$ at 5\\% for 5 years, simple vs compound."],
    ["Explain the difference between simple and compound interest.", "Explain how to find $i$ and $n$ for any compounding period.", "Explain why compound interest grows exponentially."]),
  "3.2": A3("3.2", "Saving, Investing & Credit",
    ["Find the interest on a $\\$2000$ card balance at 18\\% per year for one month.", "How do you find a monthly interest rate from an annual rate?", "Which is riskier: a savings account or stocks?", "$\\$3000$ in a GIC at 4\\% compounded annually for 2 years. Find the amount."],
    ["Interest on a $\\$1500$ purchase paid 55 days late at 19.9\\% per year (simple).", "Account A is $\\$10$/month flat; Account B is $\\$0.50$/transaction. At 25 transactions, which is cheaper?", "Compare the one-month interest on a $\\$1000$ balance at 19.9\\% vs 21.5\\%."],
    ["Explain the trade-off of risk versus return.", "Explain how to compare two chequing accounts' fees.", "Explain why carrying a credit-card balance is expensive."]),
  "3.3": A3("3.3", "Owning & Operating a Vehicle",
    ["A car drives 12 000 km/yr at 8 L/100 km; fuel is $\\$1.50$/L. Find the yearly fuel cost.", "Insurance is $\\$1800$/year. Find the monthly cost.", "State the depreciation model for a car losing $r$ each year.", "List the parts of the total cost of ownership."],
    ["A $\\$30\\,000$ car loses 15\\% per year. Find its value after 1 year.", "Total annual cost: financing $\\$4000$, insurance $\\$1800$, fuel $\\$1440$, maintenance $\\$600$.", "Find the cost per km for $\\$7840$/yr over 12 000 km."],
    ["Explain how to compute yearly fuel cost.", "Explain why a car's value follows exponential decay.", "Explain how cost per km helps compare two vehicles."]),
  "4.1": A3("4.1", "Surface Area & Volume",
    ["Find the volume of a cylinder with $r=5,\\ h=12$.", "Find the surface area of that cylinder.", "Find the volume of a sphere with $r=6$.", "State the volume formula for a cone."],
    ["A cone has $r=6,\\ h=8$; find its slant height and surface area.", "A sphere has volume $36\\pi$; find its radius.", "A silo is a cylinder ($r=3,h=10$) topped by a cone ($r=3,h=4$); find the total volume."],
    ["Explain how a cone's volume relates to a cylinder's.", "Explain why you need the slant height for a cone's surface area.", "Explain how to find the volume of a composite solid."]),
  "4.2": A3("4.2", "2-D Design & Optimization",
    ["Find the area and perimeter of an $8\\times5$ rectangle.", "With 40 m of fencing, what rectangle has the most area?", "A garden of area 36 m²: which whole-number rectangle uses the least fencing?", "Find the surface area of a closed $4\\times3\\times2$ box."],
    ["A $10\\times6$ m yard has a circular pond of radius 2 m; find the grass area.", "With 60 m of fencing, find the maximum rectangular area.", "An $8\\times8$ m patio loses a $2\\times3$ m planter; find the paved area."],
    ["Explain why a square maximizes area for a fixed perimeter.", "Explain how to model the area in a fencing problem.", "Explain how a net helps you find surface area."]),
  "4.3": A3("4.3", "The Sine Law",
    ["$A=40^\\circ,\\ a=10,\\ B=60^\\circ$. Find $b$.", "If $A=50^\\circ$ and $B=70^\\circ$, find $C$.", "State the sine law.", "When is the sine law the right tool?"],
    ["$a=8,\\ A=50^\\circ,\\ b=6$. Find $B$.", "$A=45^\\circ,\\ B=60^\\circ,\\ a=12$. Find $c$.", "From two points 50 m apart the angles to a tree are $70^\\circ$ and $60^\\circ$ (tree angle $50^\\circ$); find the distance from the first point."],
    ["Explain which side pairs with which angle.", "Explain how to find a missing angle with the sine law.", "Explain what to do when only two angles are given."]),
  "4.4": A3("4.4", "The Cosine Law",
    ["$a=7,\\ b=9,\\ C=50^\\circ$. Find $c$.", "$a=5,\\ b=6,\\ c=7$. Find $C$.", "State the cosine law for finding a side.", "When do you use the cosine law instead of the sine law?"],
    ["For sides $4,5,6$, find the largest angle.", "Two roads leave a town at $60^\\circ$; cars drive 40 km and 30 km. How far apart are they?", "$a=10,\\ b=7,\\ C=45^\\circ$. Find $c$."],
    ["Explain why the cosine law is Pythagoras with a correction.", "Explain how to find an angle from three sides.", "Explain how to choose between the sine and cosine laws."]),
  "5.1": A3("5.1", "Collecting & Displaying Data",
    ["A survey covers 200 of 1500 students; name the population and sample.", "Testing every 50th item is which sampling method?", "What central angle represents 25% on a circle graph?", "Which graph shows parts of a whole?"],
    ["Why is surveying only hockey fans about favourite sport biased?", "A category is 40% of the data; find its circle-graph angle.", "Which graph best shows the distribution of 100 test scores?"],
    ["Explain the difference between a population and a sample.", "Explain what makes a sample biased.", "Explain how to choose a graph for a given data set."]),
  "5.2": A3("5.2", "Central Tendency & Spread",
    ["Find the mean of $4,8,6,10,2$.", "Find the median of $3,7,8,12$.", "Find the mode and range of $5,5,7,9,9,9,12$.", "State how to find the median of an even-sized list."],
    ["For $2,3,4,5,100$, find the mean and median; which is more typical?", "Find the median of $2,5,9,11,14,20$.", "Two classes share a mean but differ in range; what does that mean?"],
    ["Explain how to compute each measure of centre.", "Explain why the median resists outliers.", "Explain when the mode is the best measure."]),
  "5.3": A3("5.3", "Probability",
    ["Find $P$ of rolling a 4 on a die.", "Find $P$ of rolling an even number.", "Find $P$ of not rolling a 4.", "State the formula for theoretical probability."],
    ["A coin lands heads 30 of 50 flips; find the experimental probability and compare to theoretical.", "Find $P$ of two heads in a row.", "If $P(\\text{rain})=0.3$, find $P(\\text{no rain})$."],
    ["Explain the difference between theoretical and experimental probability.", "Explain the complement rule.", "Explain how to combine two independent events."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MBF3C", description: DESC, level: "11", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MBF3C", title: COURSE_TITLE, description: DESC, level: "11", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  await db.from("assignments").delete().eq("course_id", course.id);
  let pos = 0, full = 0, asg = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const { error: ae } = await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nDone. Seeded ${subjects.length} MBF3C lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
