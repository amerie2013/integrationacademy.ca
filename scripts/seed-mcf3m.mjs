// Seeds the full MCF3M (Functions and Applications, Grade 11, University/College) course.
// Structure follows the official Ontario curriculum strands:
//   A Quadratic Functions · B Exponential Functions (incl. financial) · C Trigonometric/Sine Functions.
// Authored lessons (Grade 9/10/MCR3U lecture-box theme + interactive graph embeds) override
// scaffolds unit by unit. Usage: node scripts/seed-mcf3m.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mcf3m-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Functions and Applications (MCF3M)";
const DESC = "Ontario Grade 11 Functions and Applications, University/College Preparation (MCF3M). Interactive lessons across Quadratic Functions, Exponential Functions (with financial applications), and Trigonometric & Sine Functions.";

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
  // ── UNIT 1 — Quadratic Expressions & Equations (Strand A1) ──
  sk("1.1", "Expanding & Simplifying Quadratic Expressions", "Remove brackets and collect like terms into standard form.", ["Distribute and FOIL", "Special products", "Write in standard form ax²+bx+c"]),
  sk("1.2", "Factoring Quadratic Expressions", "Reverse expanding: common factors, trinomials and special products.", ["Common factoring", "Factor x²+bx+c and ax²+bx+c", "Difference of squares & perfect squares"]),
  sk("1.3", "Solving Quadratic Equations by Factoring", "Use the zero product property to find the roots.", ["Set equal to zero", "Factor and solve", "Connect roots to x-intercepts"]),
  sk("1.4", "The Quadratic Formula & the Discriminant", "Solve any quadratic and predict the number of roots.", ["The quadratic formula", "The discriminant b²−4ac", "Number of real roots"]),
  sk("1.5", "Roots and x-Intercepts", "Connect the roots of an equation to the graph.", ["Real roots are x-intercepts", "Discriminant ↔ number of intercepts", "Real-world applications"]),
  // ── UNIT 2 — Quadratic Functions (Strand A2) ──
  sk("2.1", "Functions, Function Notation, Domain & Range", "What a function is, and how to evaluate and describe one.", ["Function vs relation & the vertical-line test", "Function notation f(x)", "Domain and range"]),
  sk("2.2", "Transformations & Vertex Form", "The roles of a, h, k in f(x)=a(x−h)²+k.", ["Translations, stretches & reflections", "Identify the vertex", "Sketch from vertex form"]),
  sk("2.3", "Completing the Square", "Convert between standard and vertex form.", ["Complete the square", "Vertex form ↔ standard form", "Find the vertex algebraically"]),
  sk("2.4", "Factored Form & Graphing", "Use the x-intercepts to graph a quadratic.", ["Factored form f(x)=a(x−r)(x−s)", "Vertex from the intercepts", "Sketch the parabola"]),
  sk("2.5", "Maximum/Minimum Problems & Applications", "Solve real-world quadratic optimization problems.", ["Find the max or min", "Set up models", "Interpret the vertex in context"]),
  // ── UNIT 3 — Exponential Functions (Strand B1, B2) ──
  sk("3.1", "Exponent Laws & Rational Exponents", "Extend the exponent laws to negative and fractional exponents.", ["Product, quotient & power laws", "Negative exponents", "Rational exponents and radicals"]),
  sk("3.2", "Exponential Functions & Their Graphs", "Graph y=a·bˣ and read its key features.", ["Growth vs decay", "Asymptote, intercept, domain & range", "Compare to linear & quadratic"]),
  sk("3.3", "Exponential Growth & Decay Applications", "Model real situations with exponential functions.", ["Growth & decay models", "Half-life and doubling time", "Solve from graphs or equations"]),
  // ── UNIT 4 — Financial Mathematics (Strand B3) ──
  sk("4.1", "Simple & Compound Interest", "Compare linear and exponential growth of money.", ["Simple interest I=Prt", "Compound interest A=P(1+i)ⁿ", "Compare the two"]),
  sk("4.2", "Present Value", "Discount a future amount to today.", ["PV = A/(1+i)ⁿ", "Solve for principal", "Compare investments"]),
  sk("4.3", "Annuities", "Regular payments and their value.", ["Future value of an annuity", "Present value of an annuity", "Real-world annuity problems"]),
  // ── UNIT 5 — Trigonometry (Strand C1) ──
  sk("5.1", "Primary Trigonometric Ratios & Right Triangles", "Use sine, cosine and tangent to solve right triangles.", ["SOH CAH TOA", "Find sides and angles", "Real-world right-triangle problems"]),
  sk("5.2", "Two Right Triangles in 2-D", "Combine right triangles to solve harder problems.", ["Angles of elevation & depression", "Set up two triangles", "Solve step by step"]),
  sk("5.3", "The Sine Law", "Solve acute triangles with a matched side–angle pair.", ["The sine law", "Find a side or an angle", "Applications"]),
  sk("5.4", "The Cosine Law", "Solve acute triangles given SAS or SSS.", ["The cosine law", "Find a side or an angle", "Choosing sine vs cosine law"]),
  // ── UNIT 6 — Sine Functions (Strand C2, C3) ──
  sk("6.1", "Periodic Functions & the Sine Function", "Describe repeating behaviour and meet f(x)=sin x.", ["Cycle, period, amplitude, midline", "Periodic data", "Sine ratio → sine function"]),
  sk("6.2", "Graphing f(x) = sin x", "The parent sine graph and its key properties.", ["Graph y=sin x in degrees", "Domain, range, intercepts", "Amplitude, period, max & min"]),
  sk("6.3", "Transformations of Sine Functions", "Build y=a·sin(k(x−d))+c and read it from a graph.", ["Effect of a, k, d, c", "Determine an equation from a graph", "Amplitude, period, phase shift"]),
  sk("6.4", "Sinusoidal Applications", "Model tides, Ferris wheels and temperature.", ["Set up a sinusoidal model", "Solve for time or height", "Interpret the model"]),
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
  "1.1": A3("1.1", "Expanding & Simplifying Quadratic Expressions",
    ["Expand $3(x+4)$.", "Expand $(x+2)(x+3)$.", "Expand $(x+5)^2$.", "Expand $(x-4)(x+4)$."],
    ["Expand and simplify $2x(x-5)+x(x+1)$.", "Expand $(2x-1)(x+6)$.", "Expand $(3x+2)^2$."],
    ["Explain why $(x+5)^2\\ne x^2+25$.", "Describe the difference-of-squares pattern in your own words.", "Show two different binomial products that both expand to $x^2-9$... is that possible? Explain."]),
  "1.2": A3("1.2", "Factoring Quadratic Expressions",
    ["Factor $6x^2+9x$.", "Factor $x^2+7x+12$.", "Factor $x^2-25$.", "Factor $x^2-10x+25$."],
    ["Factor $2x^2+7x+3$.", "Factor $3x^2+13x-10$.", "Factor $9x^2+24x+16$."],
    ["Explain why you should look for a common factor first.", "How does the discriminant relate to whether a trinomial factors over the integers?", "Create a trinomial that does not factor over the integers and explain how you know."]),
  "1.3": A3("1.3", "Solving Quadratic Equations by Factoring",
    ["Solve $x^2-5x+6=0$.", "Solve $x^2-9=0$.", "Solve $x^2+2x-8=0$.", "State the zero product property."],
    ["Solve $2x^2-7x+3=0$.", "Solve $x^2-6x=0$.", "Solve $3x^2-5x-2=0$."],
    ["Explain why the equation must equal 0 before factoring.", "How many solutions can a quadratic equation have? Explain.", "Connect the solutions of $x^2-5x+6=0$ to the graph of $y=x^2-5x+6$."]),
  "1.4": A3("1.4", "The Quadratic Formula & the Discriminant",
    ["State the quadratic formula.", "Find the discriminant of $x^2-4x+4$.", "Solve $x^2-4x+1=0$.", "How many real roots has $x^2+2x+5=0$?"],
    ["Solve $2x^2+3x-2=0$ using the formula.", "Solve $x^2+x-1=0$.", "Solve $x^2-6x+7=0$."],
    ["When is the quadratic formula a better choice than factoring? Explain.", "Explain what each sign of the discriminant tells you.", "Create a quadratic with exactly one real root and justify your choice."]),
  "1.5": A3("1.5", "Roots and x-Intercepts",
    ["Find the x-intercepts of $y=x^2-4x+3$.", "How many x-intercepts has $y=x^2+1$?", "How many x-intercepts has $y=x^2-6x+9$?", "Find the x-intercepts of $y=x^2-9$."],
    ["A profit model is $P=-5x^2+550x-5000$. Find where $P=0$.", "Find the x-intercepts of $y=x^2-x-6$.", "How many x-intercepts has $y=2x^2-3x-5$?"],
    ["Explain the connection between roots and x-intercepts.", "What does a graph with no x-intercepts tell you about the discriminant?", "Explain why factoring and graphing give the same x-intercepts."]),
  "2.1": A3("2.1", "Functions, Function Notation, Domain & Range",
    ["Is $\\{(1,2),(2,4),(3,6)\\}$ a function?", "For $f(x)=2x^2+3x-1$, find $f(2)$.", "State the domain and range of $f(x)=x^2+1$.", "Define the vertical-line test."],
    ["For $f(x)=x^2-4$, find $f(3)$ and $f(-2)$.", "For $f(x)=5-2x$, solve $f(x)=1$.", "Revenue is $r(s)=-10s^2+1500s$; evaluate $r(60)$."],
    ["Explain the difference between a relation and a function.", "Why is the range of $y=-x^2+5$ only $y\\le5$?", "Describe how to read the domain and range of a quadratic from its graph."]),
  "2.2": A3("2.2", "Transformations & Vertex Form",
    ["State the vertex of $y=(x-3)^2+2$.", "State the vertex of $y=(x+4)^2-2$.", "What does $a<0$ do to a parabola?", "Write $y=x^2$ shifted right 5 and down 4."],
    ["Describe all transformations of $y=-2(x+1)^2+5$.", "State the vertex and direction of $y=-2(x+3)^2+1$.", "Does $y=(x-4)^2+6$ have a max or min, and what is its value?"],
    ["Explain why the horizontal shift is opposite to the sign inside the bracket.", "State the order in which transformations are applied.", "Does changing $a$ move the vertex? Explain."]),
  "2.3": A3("2.3", "Completing the Square",
    ["Complete the square: $x^2+6x+5$.", "Complete the square: $x^2-4x+1$.", "Find the vertex of $y=x^2-6x+5$.", "Write $y=(x-1)^2+4$ in standard form."],
    ["Complete the square: $y=2x^2-12x+5$.", "Complete the square: $x^2+8x+10$.", "Complete the square: $y=2x^2+8x+3$."],
    ["Explain how completing the square reveals the vertex.", "What number do you add inside the bracket, and why?", "How does the process change when $a\\ne1$?"]),
  "2.4": A3("2.4", "Factored Form & Graphing",
    ["Find the x-intercepts of $y=(x-1)(x-5)$.", "Find the axis of symmetry of $y=(x+2)(x-6)$.", "Find the y-intercept of $y=(x-3)(x+4)$.", "Find the x-intercepts of $y=x^2-2x-3$."],
    ["Find the vertex of $y=(x-1)(x-5)$.", "For $y=2(x+2)(x-4)$, find the x-intercepts and vertex.", "Find the vertex of $y=(x-2)(x-8)$."],
    ["Explain how to find the axis of symmetry from the x-intercepts.", "Why does the vertex lie on the axis of symmetry?", "Describe a full strategy for sketching a quadratic in factored form."]),
  "2.5": A3("2.5", "Maximum/Minimum Problems & Applications",
    ["Find the maximum of $y=-(x-3)^2+9$.", "Find the minimum of $y=x^2-6x+5$.", "Does $y=2x^2-8x+1$ have a max or a min?", "State the formula for the axis of symmetry $x=-\\dfrac{b}{2a}$."],
    ["A ball's height is $h=-5t^2+20t$. Find the maximum height.", "Profit is $P=-2x^2+12x-10$. Find the maximum profit.", "A rectangle has perimeter 20 m. Find the dimensions giving maximum area."],
    ["Explain how the sign of $a$ tells you max vs min.", "A farmer has 40 m of fencing. Explain how to maximize the rectangular area.", "Interpret the meaning of the vertex in a profit model."]),
  "3.1": A3("3.1", "Exponent Laws & Rational Exponents",
    ["Simplify $x^5\\cdot x^3$.", "Simplify $(x^4)^3$.", "Evaluate $2^{-3}$.", "Evaluate $27^{2/3}$."],
    ["Simplify $\\dfrac{x^9}{x^4}$.", "Simplify $(2x^3)^2$.", "Evaluate $16^{3/4}$."],
    ["Explain why $x^0=1$.", "Explain why a negative exponent does not make a number negative.", "Explain the best order to evaluate $x^{m/n}$ and why."]),
  "3.2": A3("3.2", "Exponential Functions & Their Graphs",
    ["For $f(x)=2^x$, find $f(3)$.", "State the y-intercept of $y=3\\cdot2^x$.", "Is $y=(1/2)^x$ growth or decay?", "State the horizontal asymptote of $y=2^x$."],
    ["State the domain and range of $y=2^x$.", "State the asymptote of $y=2^x-5$.", "Which grows faster, $y=2^x$ or $y=5^x$? Explain."],
    ["Explain how an exponential function differs from a quadratic.", "Why is $y=b^x$ always positive?", "Explain how a vertical shift moves the horizontal asymptote."]),
  "3.3": A3("3.3", "Exponential Growth & Decay Applications",
    ["State the growth factor for $+8\\%$ per year.", "State the decay factor for $-15\\%$ per year.", "For $P=200(2)^t$, find $P$ after 3 years.", "Write the half-life model for a quantity halving every $h$ years."],
    ["80 g halves every 5 years; how much remains after 10 years?", "$\\$1000$ grows at $5\\%$ per year for 2 years; find its value.", "A car loses $15\\%$ of its value yearly; write its value after $t$ years."],
    ["Explain how to find $b$ from a percentage change.", "Explain how half-life problems use the exponent $t/h$.", "Explain why compound interest is an example of exponential growth."]),
  "4.1": A3("4.1", "Simple & Compound Interest",
    ["Find the simple interest on $\\$500$ at 4\\% for 3 years.", "Find the amount: $\\$1000$ at 5\\% compounded annually for 3 years.", "For 6\\% compounded monthly, find $i$.", "For 6\\% compounded quarterly over 2 years, find $n$."],
    ["$\\$1000$ at 6\\% compounded quarterly for 1 year. Find the amount.", "$\\$2000$ at 4\\% compounded semi-annually for 1 year. Find the amount.", "Compare $\\$1000$ at 5\\% for 5 years, simple vs compound."],
    ["Explain the difference between simple and compound interest.", "Explain why more frequent compounding earns slightly more.", "Explain why compound interest grows exponentially while simple interest is linear."]),
  "4.2": A3("4.2", "Present Value",
    ["State the present-value formula.", "Find the present value of $\\$1000$ in 5 years at 6\\%.", "Find the present value of $\\$2000$ in 3 years at 5\\%.", "Define present value in your own words."],
    ["How much must you invest now to have $\\$5000$ in 4 years at 5\\%?", "Present value of $\\$10000$ in 6 years at 5\\%?", "Is $\\$1000$ now or $\\$1100$ in 2 years at 6\\% worth more today? Show your work."],
    ["Explain how present value relates to compound interest.", "Does a higher interest rate increase or decrease present value? Explain.", "Explain why comparing options in present-value terms is fair."]),
  "4.3": A3("4.3", "Annuities",
    ["State the future-value-of-an-annuity formula.", "Define $R$ in the annuity formulas.", "What kind of series is an annuity?", "State the present-value-of-an-annuity formula."],
    ["Find the future value of $\\$500$/year for 4 years at 5\\%.", "Find the future value of $\\$1000$/year for 3 years at 6\\%.", "Find the present value of $\\$200$/year for 5 years at 5\\%."],
    ["Explain why an annuity is a geometric series.", "Explain the difference between the future and present value of an annuity.", "For a $\\$500$/year, 4-year, 5\\% annuity, find the total deposits and the total interest."]),
  "5.1": A3("5.1", "Primary Trigonometric Ratios & Right Triangles",
    ["State the three primary ratios (SOH CAH TOA).", "Opposite $=3$, hypotenuse $=5$: find $\\sin\\theta$.", "Hypotenuse $=10$, angle $=30^\\circ$: find the opposite side.", "When do you use inverse trigonometric ratios?"],
    ["Adjacent $=8$, angle $=40^\\circ$: find the opposite side.", "Opposite $=3$, adjacent $=4$: find $\\theta$.", "A 10 m ladder leans at $60^\\circ$; how high does it reach?"],
    ["Explain how to label opposite, adjacent, and hypotenuse.", "Explain when you multiply versus when you use an inverse ratio.", "A surveyor needs a height across a river. Describe how a single right triangle gives it."]),
  "5.2": A3("5.2", "Two Right Triangles in 2-D",
    ["Define angle of elevation and angle of depression.", "From 40 m away, the elevation to a roof is $35^\\circ$; find its height.", "From a 60 m cliff, the depression to a boat is $25^\\circ$; find its distance from the base.", "Why are an angle of elevation and the matching angle of depression equal?"],
    ["A helicopter 500 m up sees two trucks ahead at depressions $60^\\circ$ and $20^\\circ$; how far apart are they?", "From 50 m away, elevations to a pole's base and top are $30^\\circ$ and $40^\\circ$; find the pole's height.", "Elevation $20^\\circ$ from A; 100 m closer it is $35^\\circ$; find the height."],
    ["Describe the general strategy for a two-right-triangle problem.", "Explain why two equations are needed and how combining them helps.", "A tower's elevation is $45^\\circ$, then $60^\\circ$ from 20 m closer; explain how to find its height."]),
  "5.3": A3("5.3", "The Sine Law",
    ["State the sine law.", "When is the sine law the right tool?", "$A=40^\\circ,\\ a=10,\\ B=60^\\circ$: find $b$.", "If $A=40^\\circ$ and $B=75^\\circ$, find $C$."],
    ["$A=50^\\circ,\\ B=70^\\circ,\\ a=8$: find $b$.", "$a=8,\\ A=50^\\circ,\\ b=6$: find $B$.", "$A=45^\\circ,\\ B=60^\\circ,\\ a=12$: find $c$."],
    ["Explain which side pairs with which angle.", "Explain how to find a missing angle with the sine law.", "Explain how the $180^\\circ$ angle sum helps when only two angles are given."]),
  "5.4": A3("5.4", "The Cosine Law",
    ["State the cosine law for finding a side.", "State the cosine law rearranged to find an angle.", "$a=5,\\ b=7,\\ C=60^\\circ$: find $c$.", "When should you use the cosine law?"],
    ["$a=8,\\ b=6,\\ C=90^\\circ$: find $c$.", "Sides $6,8,10$: find the angle opposite $10$.", "$a=7,\\ b=9,\\ C=50^\\circ$: find $c$."],
    ["Explain when to choose the cosine law over the sine law.", "Explain how the cosine law generalizes the Pythagorean theorem.", "For sides $5,6,7$, explain how to find the largest angle."]),
  "6.1": A3("6.1", "Periodic Functions & the Sine Function",
    ["Define the period of a periodic function.", "A wave has max $5$, min $1$: find the amplitude.", "Same wave: find the midline.", "State the period of $y=\\sin x$."],
    ["A wave has max $7$, min $1$: find the amplitude and midline.", "State the maximum and minimum of $y=\\sin x$.", "Explain why $y=\\sin x$ is a function."],
    ["Explain what makes a function periodic.", "Explain the difference between amplitude and period.", "Describe how the sine ratio becomes the sine function."]),
  "6.2": A3("6.2", "Graphing f(x) = sin x",
    ["State $\\sin0^\\circ$, $\\sin90^\\circ$, $\\sin180^\\circ$, $\\sin270^\\circ$.", "Where is $y=\\sin x$ maximum on $[0^\\circ,360^\\circ]$?", "State the range of $y=\\sin x$.", "State the period of $y=\\sin x$."],
    ["List the five key points of one cycle of $y=\\sin x$.", "Where is $y=\\sin x=0$ on $[0^\\circ,360^\\circ]$?", "State the amplitude and midline of $y=\\sin x$."],
    ["Explain why one cycle has five key points.", "Explain how the key points let you sketch the curve quickly.", "Describe where the maximum, minimum, and zeros occur."]),
  "6.3": A3("6.3", "Transformations of Sine Functions",
    ["State the amplitude of $y=3\\sin x$.", "State the period of $y=\\sin(2x)$.", "State the midline of $y=\\sin x+2$.", "In $y=a\\sin(k(x-d))+c$, what does each letter control?"],
    ["Find the maximum and minimum of $y=2\\sin x+1$.", "State the period of $y=\\sin(\\tfrac12 x)$.", "Describe $y=3\\sin(2(x-30^\\circ))+1$ fully."],
    ["Explain how to find the period from $k$.", "Explain which direction $(x-d)$ shifts the graph.", "Explain how to find the max and min from $a$ and $c$."]),
  "6.4": A3("6.4", "Sinusoidal Applications",
    ["A Ferris wheel has radius 10 m, centre 12 m: find the maximum height.", "Same wheel: find the minimum height.", "A tide rises to 6 m, falls to 2 m: find the amplitude.", "A wheel takes 60 s per rotation: state the period."],
    ["Daylight ranges from 16 h to 8 h: find the amplitude and midline.", "A wheel has radius 8 m, centre 10 m: find the maximum height.", "A tide rises to 5 m and falls to 1 m: find the midline."],
    ["Explain what the amplitude represents in a Ferris-wheel model.", "Explain how the period relates to the rotation time.", "Explain how to find the maximum and minimum from the midline and amplitude."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MCF3M", description: DESC, level: "11", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MCF3M", title: COURSE_TITLE, description: DESC, level: "11", published: true }).select("id").single();
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
  console.log(`\nDone. Seeded ${subjects.length} MCF3M lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
