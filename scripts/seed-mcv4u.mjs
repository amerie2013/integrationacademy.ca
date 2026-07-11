// Seeds the full MCV4U (Calculus and Vectors, Grade 12, University Preparation) course.
// Strands: A Rate of Change · B Derivatives & Their Applications · C Geometry & Algebra of Vectors.
// Authored lessons (MCR3U theme + derivative animations) override scaffolds unit by unit.
// Usage: node scripts/seed-mcv4u.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./mcv4u-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Calculus and Vectors (MCV4U)";
const DESC = "Ontario Grade 12 Calculus and Vectors, University Preparation (MCV4U). Deep interactive lessons across Rate of Change & Limits, the Derivative and its rules, Curve Sketching, Applications of Derivatives (optimization, related rates, kinematics), and the Geometry & Algebra of Vectors, lines, and planes — with graphing-calculator animations of the derivative.";

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
  // ── UNIT 1 — Rates of Change & Limits (Strand A1) ──
  sk("1.1", "Average & Instantaneous Rate of Change", "Secants, tangents, and the difference quotient.", ["Average rate (secant)", "Instantaneous rate (tangent)", "The difference quotient & its limit"]),
  sk("1.2", "The Limit of a Function", "Evaluate limits numerically and algebraically.", ["Direct substitution", "Indeterminate 0/0 (factor / rationalize)", "One-sided limits & limits at infinity"]),
  sk("1.3", "Continuity & Limit Laws", "Continuity, discontinuities, and the limit laws.", ["The three conditions for continuity", "Removable, jump & infinite breaks", "Applying the limit laws"]),
  sk("1.4", "The Derivative from First Principles", "Define and compute f'(x) as a limit.", ["The limit definition", "Differentiate polynomials, 1/x, √x", "Equation of a tangent line"]),
  // ── UNIT 2 — Derivative Rules (Strand A3) ──
  sk("2.1", "Power, Constant & Sum Rules", "Differentiate polynomials fast.", ["Power rule", "Constant multiple & sum/difference", "Polynomial derivatives"]),
  sk("2.2", "Product & Quotient Rules", "Differentiate products and quotients.", ["The product rule", "The quotient rule", "Combining the rules"]),
  sk("2.3", "The Chain Rule", "Differentiate composite functions.", ["Outer × inner derivative", "Powers of a function", "Nested compositions"]),
  sk("2.4", "Rational, Radical & Higher-Order Derivatives", "Apply the rules to harder functions.", ["Rational & radical functions", "Second derivatives", "Implicit differentiation (intro)"]),
  // ── UNIT 3 — Derivatives of Transcendental Functions (Strand A2, A3) ──
  sk("3.1", "Derivatives of Sinusoidal Functions", "Differentiate sine and cosine.", ["d/dx sin x = cos x", "d/dx cos x = −sin x", "With the chain rule"]),
  sk("3.2", "Derivatives of Exponential Functions", "Differentiate eˣ and bˣ.", ["d/dx eˣ = eˣ", "d/dx bˣ = bˣ ln b", "With the chain rule"]),
  sk("3.3", "Derivatives of Logarithmic Functions", "Differentiate ln x and connect f to f'.", ["d/dx ln x = 1/x", "Logarithmic differentiation", "Graph of f vs f'"]),
  // ── UNIT 4 — Curve Sketching (Strand B1) ──
  sk("4.1", "Increasing/Decreasing & the First Derivative Test", "Use f' to find intervals and extrema.", ["Sign of f'", "Critical numbers", "Local max / min"]),
  sk("4.2", "Concavity & the Second Derivative", "Use f'' for concavity and inflection.", ["Sign of f''", "Concave up / down", "Inflection points"]),
  sk("4.3", "Critical, Inflection & End Behaviour", "Assemble all the key features.", ["Critical & inflection points", "Asymptotes", "Reading f, f', f'' together"]),
  sk("4.4", "Full Curve Sketching", "Sketch a curve from start to finish.", ["The full analysis checklist", "Polynomials & rationals", "Match a function to its derivative"]),
  // ── UNIT 5 — Applications of Derivatives (Strand B2) ──
  sk("5.1", "Optimization", "Maximize or minimize a modelled quantity.", ["Set up the model & domain", "Solve f'=0", "Verify the optimum"]),
  sk("5.2", "Related Rates", "Relate rates through a shared equation.", ["Differentiate with respect to time", "Substitute the instant", "Solve for the unknown rate"]),
  sk("5.3", "Kinematics: Velocity & Acceleration", "Position, velocity, acceleration.", ["v = s', a = v' = s''", "Direction & speed", "When is it speeding up?"]),
  // ── UNIT 6 — Geometry & Algebra of Vectors (Strand C1, C2) ──
  sk("6.1", "Introduction to Vectors", "Magnitude, direction, and geometry.", ["Vectors vs scalars", "Magnitude & direction", "Equal & opposite vectors"]),
  sk("6.2", "Vector Operations (Geometric)", "Add, subtract, and scale vectors.", ["Triangle & parallelogram laws", "Scalar multiplication", "Resultants"]),
  sk("6.3", "Cartesian Vectors in 2-D & 3-D", "Components, magnitude, unit vectors.", ["Component form", "Magnitude in 2-D/3-D", "Operations on components"]),
  sk("6.4", "The Dot Product", "Multiply vectors to a scalar.", ["a·b = |a||b|cosθ", "Component formula", "Angle & orthogonality"]),
  sk("6.5", "The Cross Product", "Multiply vectors to a perpendicular vector.", ["a×b in 3-D", "Magnitude = area", "Direction (right-hand rule)"]),
  // ── UNIT 7 — Lines & Planes (Strand C3, C4) ──
  sk("7.1", "Equations of Lines", "Vector, parametric & symmetric forms.", ["Direction vector & a point", "Vector & parametric form", "Symmetric form"]),
  sk("7.2", "Equations of Planes", "Normal vectors and plane equations.", ["Normal vector", "Scalar & vector equations", "A point on a plane"]),
  sk("7.3", "Intersections of Lines & Planes", "Where lines and planes meet.", ["Line–line intersection", "Line–plane intersection", "Parallel / skew / coincident"]),
];

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
  "1.1": A3("1.1", "Average & Instantaneous Rate of Change",
    ["Find the average rate of change of $f(x)=x^2+1$ on $[1,3]$.", "Simplify the difference quotient of $f(x)=x^2$ at a general $x$.", "Estimate the instantaneous rate of $f(x)=x^2$ at $x=2$ using $h=0.1$.", "Find the instantaneous rate of $f(x)=x^2$ at $x=5$."],
    ["For $s(t)=t^2$, find the instantaneous velocity at $t=4$.", "Find the instantaneous rate of $f(x)=3x^2$ at $x=2$.", "A ball's height is $h(t)=20t-5t^2$; find its instantaneous velocity at $t=1$."],
    ["Explain the difference between average and instantaneous rate of change.", "Explain how the difference quotient becomes the tangent slope.", "Explain why a ball can have average velocity $0$ but nonzero instantaneous velocity."]),
  "1.2": A3("1.2", "The Limit of a Function",
    ["Evaluate $\\displaystyle\\lim_{x\\to3}(2x+1)$.", "Evaluate $\\displaystyle\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$.", "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{5x-2}{x+1}$.", "Does $\\displaystyle\\lim_{x\\to0}\\dfrac1x$ exist?"],
    ["Evaluate $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sqrt{x+9}-3}{x}$.", "Evaluate $\\displaystyle\\lim_{x\\to1}\\dfrac{x^2+x-2}{x-1}$.", "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{3x^2-x}{x^2+5}$."],
    ["Explain why a limit can exist where $f(a)$ does not.", "Explain what $\\tfrac00$ signals and how to resolve it.", "Explain when a two-sided limit fails to exist."]),
  "1.3": A3("1.3", "Continuity & Limit Laws",
    ["State the three conditions for continuity at $a$.", "Classify the discontinuity of $\\dfrac{x^2-4}{x-2}$ at $x=2$.", "Classify the discontinuity of $\\dfrac1{x-3}$ at $x=3$.", "Evaluate $\\displaystyle\\lim_{x\\to2}(3x^2-x)$ with the limit laws."],
    ["Find $k$ so $f(x)=\\begin{cases}x^2,&x\\le2\\\\kx,&x>2\\end{cases}$ is continuous at $2$.", "Where is $\\dfrac1{x^2-9}$ discontinuous?", "Classify the discontinuity of $\\dfrac{x^2-1}{x-1}$ at $x=1$."],
    ["Explain the difference between removable and infinite discontinuities.", "Explain how to detect a jump discontinuity.", "Explain how to make a piecewise function continuous."]),
  "1.4": A3("1.4", "The Derivative from First Principles",
    ["Differentiate $f(x)=x^2$ from first principles.", "Differentiate $f(x)=3x^2-x$ from first principles.", "Differentiate $f(x)=5x-3$ from first principles.", "State the limit definition of the derivative."],
    ["Differentiate $f(x)=\\dfrac1x$ from first principles.", "Differentiate $f(x)=\\sqrt{x}$ from first principles.", "Find the tangent line to $y=x^2$ at $x=3$."],
    ["Explain the routine for a first-principles derivative.", "Explain how to remove the $h$ for $\\tfrac1x$ and $\\sqrt{x}$.", "Explain how the derivative connects to the tangent line."]),
  "2.1": A3("2.1", "Power, Constant & Sum Rules",
    ["Differentiate $f(x)=x^5$.", "Differentiate $f(x)=3x^4-2x^2+7$.", "Differentiate $f(x)=\\dfrac1{x^3}$.", "State the power rule."],
    ["Differentiate $f(x)=\\sqrt{x}+\\dfrac1{x^2}$.", "Find $f'(2)$ for $f(x)=x^3-3x$.", "Where does $f(x)=x^2-4x$ have a horizontal tangent?"],
    ["Explain why the derivative of a constant is $0$.", "Explain how to differentiate $\\sqrt{x}$ with the power rule.", "Explain what $f'(a)=0$ means graphically."]),
  "2.2": A3("2.2", "Product & Quotient Rules",
    ["Differentiate $f(x)=x^2(x+1)$.", "Differentiate $f(x)=(2x+1)(x^2-3)$.", "Differentiate $f(x)=\\dfrac{x+1}{x-1}$.", "State the quotient rule."],
    ["Differentiate $f(x)=\\dfrac{x^2}{x+1}$.", "Given $f(2)=3,f'(2)=1,g(2)=4,g'(2)=-2$, find $(fg)'(2)$.", "Differentiate $f(x)=\\dfrac{x}{x+2}$."],
    ["Explain why $(fg)'\\ne f'g'$.", "Explain why order matters in the quotient rule.", "Explain when expanding is easier than the product rule."]),
  "2.3": A3("2.3", "The Chain Rule",
    ["Differentiate $f(x)=(x^2+1)^3$.", "Differentiate $f(x)=(3x-2)^5$.", "Differentiate $f(x)=\\sqrt{x^2+1}$.", "State the chain rule."],
    ["Differentiate $f(x)=(x^3+x)^4$.", "Differentiate $f(x)=x(2x+1)^3$.", "Differentiate $f(x)=\\dfrac1{(x+1)^2}$."],
    ["Explain the chain rule in words.", "Explain the most commonly forgotten factor.", "Explain how to combine the chain rule with the product rule."]),
  "2.4": A3("2.4", "Rational, Radical & Higher-Order Derivatives",
    ["Differentiate $f(x)=\\dfrac1{x^2}$.", "Differentiate $f(x)=\\sqrt[3]{x^2}$.", "Find $f''(x)$ for $f(x)=x^4$.", "Define the second derivative."],
    ["Find $f''(x)$ for $f(x)=x^3-3x$ and evaluate $f''(1)$.", "Find $\\dfrac{dy}{dx}$ for $x^2+y^2=25$.", "Differentiate $f(x)=x^{3/2}$."],
    ["Explain how to differentiate $\\tfrac1{x^k}$ and roots.", "Explain what the second derivative measures.", "Explain the idea of implicit differentiation."]),
  "3.1": A3("3.1", "Derivatives of Sinusoidal Functions",
    ["Differentiate $f(x)=\\sin x$.", "Differentiate $f(x)=\\cos x$.", "Differentiate $f(x)=\\sin(3x)$.", "State $\\dfrac{d}{dx}\\cos x$."],
    ["Differentiate $f(x)=x\\sin x$.", "Differentiate $f(x)=\\sin^2 x$.", "Find the slope of $y=\\sin x$ at $x=0$."],
    ["Explain why $\\cos x$ is the slope function of $\\sin x$.", "Explain the sign in $\\dfrac{d}{dx}\\cos x$.", "Explain why these rules need radians."]),
  "3.2": A3("3.2", "Derivatives of Exponential Functions",
    ["Differentiate $f(x)=e^x$.", "Differentiate $f(x)=e^{3x}$.", "Differentiate $f(x)=2^x$.", "State $\\dfrac{d}{dx}b^x$."],
    ["Differentiate $f(x)=x e^x$.", "Differentiate $f(x)=e^{x^2}$.", "Differentiate $f(x)=e^{-x}$."],
    ["Explain why $e^x$ is its own derivative.", "Explain $\\dfrac{d}{dx}e^{g(x)}$.", "Explain where the $\\ln b$ comes from for $b^x$."]),
  "3.3": A3("3.3", "Derivatives of Logarithmic Functions",
    ["Differentiate $f(x)=\\ln x$.", "Differentiate $f(x)=\\ln(x^2+1)$.", "Differentiate $f(x)=x\\ln x$.", "State $\\dfrac{d}{dx}\\log_b x$."],
    ["Differentiate $f(x)=\\ln(\\cos x)$.", "Differentiate $y=x^x$ (logarithmic differentiation).", "Find the slope of $y=\\ln x$ at $x=2$."],
    ["Explain $\\dfrac{d}{dx}\\ln(g(x))$.", "Explain when to use logarithmic differentiation.", "Explain how $f$ and $f'$ relate for $\\ln x$ and $1/x$."]),
  "4.1": A3("4.1", "Increasing/Decreasing & the First Derivative Test",
    ["Where is $f(x)=x^2-4x$ increasing/decreasing?", "Find the critical numbers of $f(x)=x^3-3x$.", "Classify the critical points of $f(x)=x^3-3x$.", "State the first derivative test."],
    ["Find and classify the critical points of $f(x)=x^4-2x^2$.", "Is $f(x)=x^3+x$ ever decreasing?", "Classify the critical point of $f(x)=x^3$."],
    ["Explain when $f$ is increasing.", "Explain what a critical number is.", "Explain why a critical number need not be an extremum."]),
  "4.2": A3("4.2", "Concavity & the Second Derivative",
    ["Describe the concavity of $f(x)=x^2$.", "Where is $f(x)=x^3$ concave up?", "Use the 2nd-derivative test on $f(x)=x^2-4x$.", "Define an inflection point."],
    ["Find the inflection point of $f(x)=x^3-3x^2$.", "Classify all extrema of $f(x)=x^4-2x^2$ with $f''$.", "Inflection point of $f(x)=x^3-6x^2$?"],
    ["Explain what $f''>0$ means.", "Explain the second derivative test.", "Explain when the test is inconclusive."]),
  "4.3": A3("4.3", "Critical, Inflection & End Behaviour",
    ["Critical numbers of $f(x)=x^3-3x^2$?", "If $f'(3)=0$ and $f''(3)>0$, classify $x=3$.", "Inflection point of $f(x)=x^3-3x^2$?", "Asymptotes of $f(x)=\\dfrac1{x-3}$?"],
    ["List the key features of $f(x)=x^3-3x$.", "Asymptotes of $f(x)=\\dfrac{x}{x-2}$?", "End behaviour of $f(x)=-x^3+2x$?"],
    ["Explain what $f'$ tells you.", "Explain what $f''$ tells you.", "Explain how an inflection point can fail to be an extremum."]),
  "4.4": A3("4.4", "Full Curve Sketching",
    ["x-intercepts of $f(x)=x^3-3x$?", "Local extrema of $f(x)=x^3-3x^2$?", "Inflection point of $f(x)=x^3-3x$?", "List the full-sketch checklist."],
    ["Sketch $f(x)=x^4-2x^2$ (state its features).", "If $f'>0$ everywhere, what does the graph do?", "What must $f'$ look like if $f$ has a max at $-1$ and a min at $1$?"],
    ["Explain the first step of a full sketch.", "Explain how $f'$ and $f''$ each contribute.", "Explain how to reconstruct a curve from sign information."]),
  "5.1": A3("5.1", "Optimization",
    ["A pen uses 40 m of fence; maximize the area.", "Two positive numbers sum to 12; maximize their product.", "For $x>0$, minimize $f(x)=x+\\dfrac{16}{x}$.", "State the optimization recipe."],
    ["Squares of side $x$ are cut from a $12\\times12$ sheet to fold an open box; maximize the volume.", "Maximize $P(x)=-2x^2+40x-100$.", "A 3-sided pen uses 20 m of fence; maximize the area."],
    ["Explain how to reduce to one variable.", "Explain how to confirm a maximum vs a minimum.", "Explain why the domain matters."]),
  "5.2": A3("5.2", "Related Rates",
    ["A circle's radius grows at 2 cm/s; find $\\dfrac{dA}{dt}$ at $r=5$.", "A square's side grows at 3 cm/s; find $\\dfrac{dA}{dt}$ at $s=10$.", "State the related-rates recipe.", "What rule appears when differentiating in $t$?"],
    ["A 13 m ladder's base slides out at 2 m/s; find the top's rate at base $=5$ m.", "A balloon fills at $\\dfrac{dV}{dt}=100$ cm³/s; find $\\dfrac{dr}{dt}$ at $r=5$.", "Two cars leave a point N at 60 and E at 80 km/h; find the rate the distance grows after 1 h."],
    ["Explain why you differentiate before substituting.", "Explain what a negative rate means.", "Explain how the chain rule enters related rates."]),
  "5.3": A3("5.3", "Kinematics: Velocity & Acceleration",
    ["For $s(t)=t^2-4t$, find $v(t)$ and $a(t)$.", "When is that object at rest?", "For $s(t)=t^3-6t^2+9t$, when is it at rest?", "State the relationships among $s,v,a$."],
    ["Describe the motion of $s(t)=t^3-6t^2+9t$ at $t=0$.", "Is $s(t)=t^3-6t^2+9t$ speeding up at $t=4$?", "A projectile has $h(t)=-5t^2+20t$; when is it at maximum height?"],
    ["Explain how $s,v,a$ are related.", "Explain how to tell the direction of motion.", "Explain how to tell speeding up from slowing down."]),
  "6.1": A3("6.1", "Introduction to Vectors",
    ["Is velocity a vector or a scalar?", "Is speed a vector or a scalar?", "Describe $-\\vec v$ if $\\vec v$ is 10 N north.", "When are two vectors equal?"],
    ["Classify: force, temperature, displacement.", "Write $N75^\\circ E$ as a true bearing.", "A plane flies 500 km at $N60^\\circ E$; state its magnitude and direction."],
    ["Explain what distinguishes a vector from a scalar.", "Explain why equal vectors can be drawn anywhere.", "Explain the meaning of the opposite vector."]),
  "6.2": A3("6.2", "Vector Operations (Geometric)",
    ["How do you draw $\\vec a+\\vec b$?", "Resultant magnitude of 3 east and 4 north?", "Describe $3\\vec v$.", "Describe $-2\\vec v$."],
    ["Resultant of 6 N east and 8 N north?", "Resultant magnitude of 5 east and 12 north?", "How do you draw $\\vec a-\\vec b$?"],
    ["Explain the triangle law.", "Explain scalar multiplication.", "Explain how to find a perpendicular resultant."]),
  "6.3": A3("6.3", "Cartesian Vectors in 2-D & 3-D",
    ["Find $|(3,4)|$.", "Find $|(1,2,2)|$.", "Compute $(2,3)+(1,-1)$.", "Compute $3(2,-1)$."],
    ["Find $\\vec{AB}$ and $|\\vec{AB}|$ for $A(1,2),B(4,6)$.", "Find the unit vector of $(3,4)$.", "Find $|(2,3,6)|$."],
    ["Explain how to find a magnitude.", "Explain how to find $\\vec{AB}$.", "Explain what a unit vector is."]),
  "6.4": A3("6.4", "The Dot Product",
    ["Find $(2,3)\\cdot(4,-1)$.", "Find $(1,2,3)\\cdot(2,0,-1)$.", "When are two vectors perpendicular?", "State the angle formula."],
    ["Find the angle between $(1,0)$ and $(1,1)$.", "Are $(2,3)$ and $(3,-2)$ perpendicular?", "Find the work of $\\vec F=(3,4)$ along $\\vec d=(2,0)$."],
    ["Explain what the dot product produces.", "Explain how to find the angle between vectors.", "Explain the meaning of a zero dot product."]),
  "6.5": A3("6.5", "The Cross Product",
    ["Compute $(1,0,0)\\times(0,1,0)$.", "Compute $(1,2,3)\\times(4,5,6)$.", "What direction is $\\vec a\\times\\vec b$?", "State the magnitude of $\\vec a\\times\\vec b$."],
    ["Verify $(-3,6,-3)$ is perpendicular to $(1,2,3)$.", "Area of the parallelogram from $(1,0,0)$ and $(0,2,0)$?", "Area of the triangle from $(1,0,0)$ and $(0,2,0)$?"],
    ["Explain what the cross product produces.", "Explain why its magnitude is an area.", "Explain how to find a triangle's area with it."]),
  "7.1": A3("7.1", "Equations of Lines",
    ["Vector equation through $(1,2)$ with direction $(3,4)$.", "Parametric equations of that line.", "Direction vector through $A(1,0,2),B(4,6,8)$.", "State the three forms of a line."],
    ["Symmetric equation through $(1,2)$ with direction $(3,4)$.", "Is $(4,6)$ on $\\vec r=(1,2)+t(3,4)$?", "Vector equation through $A(1,0,2)$ and $B(4,6,8)$."],
    ["Explain what fixes a line.", "Explain how to get a direction from two points.", "Explain how to check a point is on a line."]),
  "7.2": A3("7.2", "Equations of Planes",
    ["Scalar equation through $(1,2,3)$ with normal $(2,1,-1)$.", "Normal vector of $2x+y-z=5$.", "Is $(1,1,1)$ on $2x+y-z=2$?", "What fixes a plane?"],
    ["Find a normal from $\\vec u=(1,0,0),\\vec v=(0,1,0)$.", "Scalar equation through $A(0,0,0),B(1,0,0),C(0,1,0)$.", "Scalar equation through $(2,0,0)$ with normal $(1,0,0)$."],
    ["Explain how the normal appears in $Ax+By+Cz=D$.", "Explain how to get a normal from two directions.", "Explain how to check a point is on a plane."]),
  "7.3": A3("7.3", "Intersections of Lines & Planes",
    ["Where does $\\vec r=(1,0,0)+t(0,0,1)$ meet $z=5$?", "Where does $x=t,y=t,z=t$ meet $x+y+z=6$?", "When is a line parallel to a plane?", "When are two planes parallel?"],
    ["Are $\\vec r=(0,0)+t(2,4)$ and $\\vec r=(1,1)+s(1,2)$ parallel?", "Are $2x+y-z=1$ and $4x+2y-2z=9$ parallel?", "Is the line with direction $(1,1,1)$ parallel to $x+y+z=4$?"],
    ["Explain how to find a line–plane intersection.", "Explain when a line is parallel to a plane.", "Explain how to tell two lines apart (parallel/skew/intersecting)."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MCV4U", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MCV4U", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
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
  console.log(`\nDone. Seeded ${subjects.length} MCV4U lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
