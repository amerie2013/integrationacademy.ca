// Seeds the full MHF4U (Advanced Functions, Grade 12, University Preparation) course.
// Strands: A Exponential & Logarithmic · B Trigonometric · C Polynomial & Rational · D Characteristics of Functions.
// Authored lessons (Grade 9/10/MCR3U theme + professional interactive graphs) override scaffolds unit by unit.
// Usage: node scripts/seed-mhf4u.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mhf4u-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Advanced Functions (MHF4U)";
const DESC = "Ontario Grade 12 Advanced Functions, University Preparation (MHF4U). Deep interactive lessons across Polynomial & Rational Functions, Exponential & Logarithmic Functions, Trigonometric Functions (radians & identities), and the Characteristics of Functions (rates of change, combining functions).";

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
  // ── UNIT 1 — Polynomial Functions (Strand C1) ──
  sk("1.1", "Power Functions & End Behaviour", "How degree and leading coefficient set a polynomial's ends.", ["Power functions y=axⁿ", "Even vs odd degree", "End behaviour as x→±∞"]),
  sk("1.2", "Characteristics of Polynomial Functions", "Degree, turning points, zeros, symmetry, finite differences.", ["Max zeros & turning points", "Finite differences", "Even & odd functions"]),
  sk("1.3", "Equations & Graphs of Polynomial Functions", "Factored form, zeros, and multiplicity.", ["Zeros from factors", "Multiplicity: cross vs touch", "Sketch & build equations"]),
  sk("1.4", "Transformations of Functions", "Apply y=a·f(k(x−d))+c to power functions.", ["Stretches & reflections", "Horizontal & vertical shifts", "Map points & write equations"]),
  // ── UNIT 2 — Polynomial Equations & Inequalities (Strand C3, C4) ──
  sk("2.1", "Dividing Polynomials", "Long and synthetic division.", ["Long division", "Synthetic division", "Quotient & remainder"]),
  sk("2.2", "Remainder & Factor Theorems", "Find factors and remainders quickly.", ["Remainder theorem", "Factor theorem", "Find rational zeros"]),
  sk("2.3", "Solving Polynomial Equations", "Factor fully and find all real roots.", ["Factor by grouping & theorems", "Find all roots", "Real-world applications"]),
  sk("2.4", "Polynomial Inequalities", "Solve inequalities with sign analysis.", ["Sign charts", "Intervals of the solution", "Graphical reasoning"]),
  // ── UNIT 3 — Rational Functions (Strand C2, C3, C4) ──
  sk("3.1", "Reciprocal & Rational Functions", "Asymptotes and key features.", ["Vertical & horizontal asymptotes", "Holes", "Domain & range"]),
  sk("3.2", "Graphs of Rational Functions", "Sketch rational functions from features.", ["Intercepts & asymptotes", "Behaviour near asymptotes", "Sketching strategy"]),
  sk("3.3", "Solving Rational Equations & Inequalities", "Solve algebraically and with sign charts.", ["Rational equations", "Restrictions", "Rational inequalities"]),
  // ── UNIT 4 — Exponential & Logarithmic Functions (Strand A1, A2, A3) ──
  sk("4.1", "Logarithms & the Laws of Logarithms", "Logs as inverse exponents.", ["Exponential ↔ logarithmic form", "Evaluate logarithms", "Product, quotient & power laws"]),
  sk("4.2", "Graphs of Logarithmic Functions", "The log graph and its transformations.", ["Inverse of the exponential", "Asymptote, domain & range", "Transformations"]),
  sk("4.3", "Solving Exponential & Logarithmic Equations", "Solve with logs and log laws.", ["Same-base & taking logs", "Solve log equations", "Check restrictions"]),
  sk("4.4", "Applications of Exponential & Log Models", "Growth, decay and log scales.", ["Compound growth & decay", "Doubling & half-life with logs", "pH, dB & Richter scales"]),
  // ── UNIT 5 — Trigonometric Functions (Strand B1, B2) ──
  sk("5.1", "Radian Measure", "Measure angles in radians.", ["Degrees ↔ radians", "Arc length & special angles", "The radian unit circle"]),
  sk("5.2", "Trigonometric Ratios & the Unit Circle", "Exact values around the unit circle.", ["Unit-circle coordinates", "Exact values in radians", "Solving over [0, 2π)"]),
  sk("5.3", "Graphs of Sinusoidal Functions", "Sine & cosine graphs in radians.", ["Amplitude, period, phase, midline", "Period = 2π/k", "Model & read graphs"]),
  sk("5.4", "Reciprocal Trigonometric Functions", "Cosecant, secant, cotangent.", ["Define csc, sec, cot", "Their graphs & asymptotes", "Evaluate exactly"]),
  // ── UNIT 6 — Trigonometric Identities & Equations (Strand B3) ──
  sk("6.1", "Compound Angle Formulas", "Sine & cosine of sums and differences.", ["sin(A±B), cos(A±B)", "Exact values of new angles", "Simplify expressions"]),
  sk("6.2", "Double Angle Formulas", "Identities for 2θ.", ["sin 2θ, cos 2θ, tan 2θ", "Derive from compound angles", "Apply to problems"]),
  sk("6.3", "Proving Trigonometric Identities", "Prove identities by rewriting.", ["Pythagorean & quotient identities", "Work one side", "Strategies for proofs"]),
  sk("6.4", "Solving Trigonometric Equations", "Solve over a given interval.", ["Linear & quadratic in trig", "Use identities first", "All solutions in the interval"]),
  // ── UNIT 7 — Rates of Change & Combining Functions (Strand D1, D2, D3) ──
  sk("7.1", "Average & Instantaneous Rate of Change", "Slopes of secants and tangents.", ["Average rate (secant)", "Instantaneous rate (tangent)", "Estimate from a graph or table"]),
  sk("7.2", "Combining Functions", "Add, subtract, multiply, divide functions.", ["(f±g), (fg), (f/g)", "Domain of the result", "Read combined graphs"]),
  sk("7.3", "Composition of Functions", "Build f(g(x)) and decompose.", ["Evaluate f(g(x))", "Domain of a composite", "Decompose a function"]),
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
  "1.1": A3("1.1", "Power Functions & End Behaviour",
    ["Describe the end behaviour of $f(x)=x^3$.", "Describe the end behaviour of $f(x)=x^4$.", "Describe the end behaviour of $f(x)=-2x^3$.", "Describe the end behaviour of $f(x)=-x^4$."],
    ["A graph falls on the left and rises on the right. State the degree parity and sign of $a$.", "End behaviour of $f(x)=5x^6$?", "End behaviour of $f(x)=-3x^5$?"],
    ["Explain why only the leading term controls end behaviour.", "Explain how the parity of the degree affects the ends.", "Explain how the sign of $a$ affects the ends."]),
  "1.2": A3("1.2", "Characteristics of Polynomial Functions",
    ["Max turning points of a degree-5 polynomial?", "Max x-intercepts of a degree-4 polynomial?", "If the 3rd differences are constant, what is the degree?", "Is $f(x)=x^4-3x^2+1$ even, odd, or neither?"],
    ["Is $f(x)=x^3-4x$ even, odd, or neither?", "A polynomial has 4 turning points; what is its minimum degree?", "A table has constant 2nd differences; what degree is it?"],
    ["Explain how the degree limits the number of turning points.", "Explain how finite differences reveal the degree.", "Explain the symmetry of even and odd functions."]),
  "1.3": A3("1.3", "Equations & Graphs of Polynomial Functions",
    ["Find the zeros of $f(x)=(x-3)(x+1)(x-2)$.", "At $x=2$ in $(x-2)^2(x+1)$, does the graph cross or touch?", "Find the y-intercept of $(x-1)(x+2)(x-3)$.", "Write a cubic with zeros $-1,0,2$."],
    ["A cubic has zeros $1,2,3$ and passes through $(0,12)$. Find $a$.", "Find the zeros of $(x-4)(x+2)^2$ and describe the behaviour at each.", "Sketch the sign of $(x+1)(x-2)$ across the number line."],
    ["Explain how multiplicity affects the graph at a zero.", "Explain how to find $a$ from a known point.", "Explain how end behaviour and zeros together determine the sketch."]),
  "1.4": A3("1.4", "Transformations of Functions",
    ["Describe $y=2(x-1)^3+3$ from $y=x^3$.", "What does $a=-1$ do?", "Where does $(1,1)$ on $y=x^3$ map under $y=x^3-5$?", "Write $y=x^3$ shifted right 4 and up 1."],
    ["Describe $y=-3x^4+2$.", "Write $y=x^4$ reflected in the x-axis, left 1 and down 2.", "Where does $(1,1)$ on $y=x^3$ map under $y=(x-2)^3+4$?"],
    ["Explain what $a$ and $k$ each control.", "Explain why the horizontal shift is opposite to the sign.", "Explain the order in which transformations are applied."]),
  "2.1": A3("2.1", "Dividing Polynomials",
    ["Divide $(x^2+5x+6)\\div(x+2)$.", "Divide $(x^2+7x+10)\\div(x+5)$.", "Use synthetic division: $(x^3-1)\\div(x-1)$.", "Write the division statement for $(x^2+3x+5)\\div(x+1)$."],
    ["Divide $(x^2+4x+1)\\div(x+1)$ and state the remainder.", "Divide $(x^3-4x^2+x+6)\\div(x-2)$.", "Divide $(x^2+x-6)\\div(x-2)$."],
    ["Explain when synthetic division can be used.", "Explain how the degree of the remainder is limited.", "Explain what a remainder of 0 tells you."]),
  "2.2": A3("2.2", "Remainder & Factor Theorems",
    ["Find the remainder of $x^3-2x+1$ divided by $x-2$.", "Is $x-1$ a factor of $x^3-1$?", "Is $x+2$ a factor of $x^3+8$?", "Find the remainder of $x^3+1$ divided by $x-1$."],
    ["Find $k$ so $x-1$ is a factor of $x^3+kx-2$.", "Find $k$ so $x+1$ is a factor of $x^3+kx+4$.", "Find a rational zero of $x^3-2x^2-x+2$."],
    ["State and explain the Remainder Theorem.", "State and explain the Factor Theorem.", "Explain how the Rational Root Theorem narrows the search."]),
  "2.3": A3("2.3", "Solving Polynomial Equations",
    ["Solve $x^3-4x=0$.", "Solve $x^3-2x^2-3x=0$.", "Solve $x^3+2x^2-x-2=0$ by grouping.", "Solve $x^4-5x^2+4=0$."],
    ["Solve $x^3-7x-6=0$ (hint: $x=-1$).", "Solve $x^3-9x=0$.", "Solve $x^3+3x^2-x-3=0$."],
    ["Explain the first step in solving a polynomial equation.", "Explain how to find a first zero.", "Explain how many roots a degree-$n$ polynomial has."]),
  "2.4": A3("2.4", "Polynomial Inequalities",
    ["Solve $(x-1)(x+2)>0$.", "Solve $(x-1)(x+2)<0$.", "Solve $x^2-x-6>0$.", "Solve $x^2-4<0$."],
    ["Solve $x(x-2)(x+1)<0$.", "Solve $x^2-2x-3\\ge0$.", "Solve $(x-1)^2(x+3)>0$."],
    ["Explain how zeros split the number line.", "Explain how a test point gives the sign.", "Explain when the sign does not change at a zero."]),
  "3.1": A3("3.1", "Reciprocal & Rational Functions",
    ["Find the vertical asymptote of $y=\\dfrac{1}{x-3}$.", "Find the horizontal asymptote of $y=\\dfrac{1}{x-3}$.", "State the domain of $y=\\dfrac{1}{x+2}$.", "Find the horizontal asymptote of $y=\\dfrac{2x}{x-1}$."],
    ["Describe $y=\\dfrac{x^2-1}{x-1}$ (any hole?).", "Find the vertical asymptote of $y=\\dfrac{1}{x-5}$.", "Find the horizontal asymptote of $y=\\dfrac{5x}{x+2}$."],
    ["Explain where vertical asymptotes occur.", "Explain how degrees give the horizontal asymptote.", "Explain what causes a hole."]),
  "3.2": A3("3.2", "Graphs of Rational Functions",
    ["Find the VA and HA of $y=\\dfrac{1}{x-4}$.", "Find the x-intercept of $y=\\dfrac{x-5}{x+2}$.", "Find the y-intercept of $y=\\dfrac{x+4}{x-2}$.", "Find the HA of $y=\\dfrac{3x}{x+5}$."],
    ["For $y=\\dfrac{x-2}{x+1}$, find the intercepts and asymptotes.", "Describe the behaviour of $y=\\dfrac{1}{x-2}$ near $x=2$.", "As $x\\to\\infty$, what does $y=\\dfrac{2x+1}{x-3}$ approach?"],
    ["Explain how to find each intercept.", "Explain the behaviour near a vertical asymptote.", "Explain what the curve does far from the origin."]),
  "3.3": A3("3.3", "Solving Rational Equations & Inequalities",
    ["Solve $\\dfrac1x=2$.", "Solve $\\dfrac{x+1}{x-2}=3$.", "Solve $\\dfrac2x+1=3$.", "Solve $\\dfrac{1}{x-2}<0$."],
    ["Solve $\\dfrac{x-1}{x+2}=2$.", "Solve $\\dfrac{x}{x-1}>0$.", "Solve $\\dfrac{x}{x+2}>0$."],
    ["Explain how to clear fractions from an equation.", "Explain what an extraneous root is.", "Explain why denominator zeros are excluded from an inequality."]),
  "4.1": A3("4.1", "Logarithms & the Laws of Logarithms",
    ["Evaluate $\\log_2 8$.", "Write $10^3=1000$ in logarithmic form.", "Evaluate $\\log_5 25$.", "Simplify $\\log_2(4\\cdot8)$."],
    ["Simplify $\\log_2(8^2)$.", "Evaluate $\\log_3 27$.", "Use change of base to write $\\log_2 10$ with base-10 logs."],
    ["Explain what a logarithm represents.", "State and explain the product law.", "Explain why change of base is useful."]),
  "4.2": A3("4.2", "Graphs of Logarithmic Functions",
    ["State the domain of $y=\\log x$.", "Find the vertical asymptote of $y=\\log x$.", "What point lies on every $y=\\log_b x$?", "Find the VA of $y=\\log(x-2)$."],
    ["State the range of $y=\\log x$.", "Find the VA of $y=\\log(x+3)$.", "What is the inverse of $y=3^x$?"],
    ["Explain how the log graph relates to the exponential.", "Explain where the vertical asymptote comes from.", "Explain why the domain is $x>0$."]),
  "4.3": A3("4.3", "Solving Exponential & Logarithmic Equations",
    ["Solve $2^x=8$.", "Solve $3^x=81$.", "Solve $2^x=10$ (2 d.p.).", "Solve $\\log_2 x=5$."],
    ["Solve $\\log(x-1)=1$.", "Solve $5^x=125$.", "Solve $\\log_3 x=4$."],
    ["Explain when you can set exponents equal.", "Explain how to solve when the bases differ.", "Explain why you must check log solutions."]),
  "4.4": A3("4.4", "Applications of Exponential & Log Models",
    ["For $P=100\\cdot2^{t/5}$, find $P$ at $t=10$.", "For $A=80(\\tfrac12)^{t/3}$, find $A$ at $t=6$.", "Find the pH if $[\\text{H}^+]=10^{-4}$.", "How much stronger is a magnitude-7 quake than a magnitude-5 one?"],
    ["How long to double at 5%/yr?", "For $P=200\\cdot2^{t/4}$, find $P$ at $t=8$.", "How long to double at 10%/yr?"],
    ["Explain the general growth/decay model.", "Explain how logs find a doubling time.", "Explain what a logarithmic scale is."]),
  "5.1": A3("5.1", "Radian Measure",
    ["Convert $180^\\circ$ to radians.", "Convert $90^\\circ$ to radians.", "Convert $\\tfrac{\\pi}{3}$ to degrees.", "Convert $45^\\circ$ to radians."],
    ["Find the arc length for $r=6,\\ \\theta=\\tfrac{\\pi}{2}$.", "Convert $270^\\circ$ to radians.", "Find the arc length for $r=4,\\ \\theta=\\tfrac{\\pi}{3}$."],
    ["Explain what a radian is.", "Explain why a full circle is $2\\pi$ radians.", "Explain the arc-length formula $s=r\\theta$."]),
  "5.2": A3("5.2", "Trigonometric Ratios & the Unit Circle",
    ["Find $\\sin\\tfrac{\\pi}{6}$.", "Find $\\cos\\tfrac{\\pi}{3}$.", "Find $\\sin\\tfrac{\\pi}{2}$.", "Find $\\tan\\tfrac{\\pi}{4}$."],
    ["Find $\\cos\\tfrac{\\pi}{6}$.", "Find $\\cos\\pi$.", "In which quadrant is $\\sin\\theta>0$ but $\\cos\\theta<0$?"],
    ["Explain the unit-circle coordinates $(\\cos\\theta,\\sin\\theta)$.", "Explain how to get $\\tan\\theta$ from sine and cosine.", "Explain the CAST rule."]),
  "5.3": A3("5.3", "Graphs of Sinusoidal Functions",
    ["Amplitude of $y=3\\sin x$?", "Period of $y=\\sin(2x)$?", "Midline of $y=\\sin x+2$?", "Period of $y=\\cos(\\tfrac{x}{2})$?"],
    ["Amplitude and period of $y=2\\sin(3x)$?", "Period of $y=\\sin(4x)$?", "Amplitude and period of $y=4\\cos(2x)$?"],
    ["Explain what amplitude measures.", "Explain how to find the period from $k$.", "Explain what the midline and phase shift are."]),
  "5.4": A3("5.4", "Reciprocal Trigonometric Functions",
    ["Find $\\csc\\tfrac{\\pi}{2}$.", "Find $\\sec 0$.", "Find $\\cot\\tfrac{\\pi}{4}$.", "Find $\\csc\\tfrac{\\pi}{6}$."],
    ["Find $\\sec\\tfrac{\\pi}{3}$.", "Find $\\sec\\pi$.", "Where does $\\csc\\theta$ have asymptotes?"],
    ["Define the three reciprocal ratios.", "Explain why they have vertical asymptotes.", "Explain how to evaluate a reciprocal ratio exactly."]),
  "6.1": A3("6.1", "Compound Angle Formulas",
    ["State $\\sin(A+B)$.", "State $\\cos(A-B)$.", "Find $\\sin 75^\\circ$.", "Simplify $\\cos x\\cos y+\\sin x\\sin y$."],
    ["Find $\\cos 75^\\circ$.", "Find $\\sin 15^\\circ$.", "If $\\sin A=\\tfrac35,\\cos A=\\tfrac45,\\sin B=\\tfrac5{13},\\cos B=\\tfrac{12}{13}$, find $\\sin(A+B)$."],
    ["Explain how to get exact values for $15^\\circ$ and $75^\\circ$.", "Explain the sign pattern in $\\cos(A\\pm B)$.", "Explain how the formulas build the double angle formulas."]),
  "6.2": A3("6.2", "Double Angle Formulas",
    ["State $\\sin 2\\theta$.", "State the three forms of $\\cos 2\\theta$.", "If $\\sin\\theta=\\tfrac35,\\cos\\theta=\\tfrac45$, find $\\sin 2\\theta$.", "Simplify $2\\sin x\\cos x$."],
    ["With $\\sin\\theta=\\tfrac35$, find $\\cos 2\\theta$.", "Simplify $1-2\\sin^2 x$.", "Simplify $\\cos^2 x-\\sin^2 x$."],
    ["Explain where the double angle formulas come from.", "Explain which $\\cos 2\\theta$ form to choose.", "Explain how to simplify $\\tfrac{\\sin 2x}{2\\cos x}$."]),
  "6.3": A3("6.3", "Proving Trigonometric Identities",
    ["State the Pythagorean identity.", "Prove $\\tan x\\cos x=\\sin x$.", "Prove $1-\\cos^2 x=\\sin^2 x$.", "Prove $\\dfrac{\\sec x}{\\csc x}=\\tan x$."],
    ["Prove $\\csc x\\tan x=\\sec x$.", "Prove $1+\\tan^2 x=\\sec^2 x$.", "Prove $\\cot x\\sin x=\\cos x$."],
    ["Explain what it means to prove an identity.", "Explain why you transform only one side.", "Explain a reliable first move in any proof."]),
  "6.4": A3("6.4", "Solving Trigonometric Equations",
    ["Solve $\\sin\\theta=\\tfrac12$ on $[0,2\\pi)$.", "Solve $\\cos\\theta=0$ on $[0,2\\pi)$.", "Solve $2\\cos\\theta-1=0$ on $[0,2\\pi)$.", "Solve $\\tan\\theta=1$ on $[0,2\\pi)$."],
    ["Solve $2\\sin^2\\theta-1=0$ on $[0,2\\pi)$.", "Solve $2\\sin\\theta+1=0$ on $[0,2\\pi)$.", "Solve $\\sin\\theta(\\sin\\theta-1)=0$ on $[0,2\\pi)$."],
    ["Explain the first step in solving a trig equation.", "Explain how to find all solutions in an interval.", "Explain how to handle a quadratic in $\\sin\\theta$."]),
  "7.1": A3("7.1", "Average & Instantaneous Rate of Change",
    ["Find the average rate of change of $f(x)=x^2$ on $[1,3]$.", "Find the average rate of change of $f(x)=x^2$ on $[2,4]$.", "Find the average rate of change of $f(x)=2x+1$ on $[0,5]$.", "What does the slope of a tangent line measure?"],
    ["Estimate the instantaneous rate of $f(x)=x^2$ at $x=2$ using $[2,2.1]$.", "Find the average rate of change of $f(x)=x^3$ on $[1,2]$.", "Estimate the instantaneous rate of $f(x)=x^2$ at $x=3$ using $[3,3.1]$."],
    ["Explain the difference between average and instantaneous rate.", "Explain how to estimate an instantaneous rate.", "Explain why a line has a constant rate of change."]),
  "7.2": A3("7.2", "Combining Functions",
    ["With $f=x^2,\\ g=x$, find $(f+g)(x)$.", "Find $(f-g)(x)$.", "Find $(fg)(x)$.", "Find $(f+g)(2)$."],
    ["Find $\\left(\\tfrac fg\\right)(x)$ and its domain.", "With $f=x+1,\\ g=x-1$, find $(fg)(x)$.", "With $f=x,\\ g=x+2$, find $(f+g)(3)$."],
    ["Explain how to add two functions.", "Explain the domain of a combined function.", "Explain the extra restriction for a quotient."]),
  "7.3": A3("7.3", "Composition of Functions",
    ["With $f=x^2,\\ g=x+1$, find $f(g(x))$.", "Find $g(f(x))$.", "Find $f(g(2))$.", "Decompose $h(x)=(x+1)^2$ as $f(g(x))$."],
    ["With $f=\\sqrt x,\\ g=x-3$, find $f(g(x))$ and its domain.", "With $f=2x,\\ g=x+3$, find $f(g(1))$.", "Decompose $h(x)=\\sqrt{x+5}$."],
    ["Explain what composition means.", "Explain why order matters.", "Explain how to find the domain of a composite."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MHF4U", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MHF4U", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
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
  console.log(`\nDone. Seeded ${subjects.length} MHF4U lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
