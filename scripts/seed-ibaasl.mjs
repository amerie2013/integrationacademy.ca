// Seeds the IB Mathematics: Analysis & Approaches SL course (Grade 12).
// Original content throughout — informed by the standard AA SL syllabus scope
// and the Oxford course companion's topic coverage, but no text, numbers, or
// questions are copied from any source. Structure mirrors seed-mcv4u.mjs:
// a full topic skeleton (sk()) seeded immediately, with "authored" full-depth
// lessons overriding scaffolds unit by unit as they're written.
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./ibaasl-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_CODE = "IBAASL";
const COURSE_TITLE = "Mathematics: Analysis & Approaches SL (IB)";
const DESC = "IB Diploma Programme Grade 12 course. Covers the full Analysis & Approaches SL syllabus across five strands — Number & Algebra, Functions, Geometry & Trigonometry, Statistics & Probability, and Calculus — plus a guide to the Mathematical Exploration (IA). Deep interactive lessons with worked examples, graphs, and practice questions.";

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
  // ── UNIT 1 — Number & Algebra ──
  sk("1.1", "Arithmetic Sequences & Series", "Sequences that grow by a constant amount, and the shortcut formulas for their term values and running totals.", ["The general term uₙ = u₁ + (n−1)d", "The sum formula Sₙ = n/2(u₁+uₙ)", "Solving for a missing term, difference, or count"]),
  sk("1.2", "Geometric Sequences & Series", "Sequences that grow by a constant ratio, their sums, and when an infinite series settles on a finite total.", ["The general term uₙ = u₁rⁿ⁻¹", "The finite sum formula", "Sum to infinity when |r| < 1"]),
  sk("1.3", "Sigma Notation", "Compact notation for writing and evaluating any series.", ["Reading and expanding Σ notation", "Writing a series in sigma form", "Evaluating sums that aren't arithmetic or geometric"]),
  sk("1.4", "The Binomial Theorem", "Expand (a+b)ⁿ using binomial coefficients, without multiplying it out by hand.", ["Binomial coefficients and Pascal's triangle", "The full expansion formula", "Finding a single term without expanding everything"]),
  sk("1.5", "Exponents & Radicals", "The laws of exponents, simplifying radicals, and solving exponential equations by matching bases.", ["Laws of exponents", "Simplifying and combining radicals", "Rational exponents and rationalizing denominators"]),
  sk("1.6", "Logarithms", "The inverse of an exponential, its laws, and solving equations a matching base can't reach.", ["The definition of a logarithm", "The laws of logarithms", "Change of base and solving exponential equations"]),
  sk("1.7", "Mathematical Proof", "Building a watertight logical argument, and what it takes to break one.", ["Direct (deductive) proof", "Proof by exhaustion", "Disproof by counterexample"]),
  // ── UNIT 2 — Functions ──
  sk("2.1", "Function Basics: Domain, Range & Notation", "What makes a relation a function, and how to describe its inputs and outputs.", ["Function notation f(x)", "Domain and range", "The vertical line test"]),
  sk("2.2", "Transformations of Functions", "Shift, stretch, and reflect any graph from its parent function.", ["Translations: f(x)+k, f(x+k)", "Stretches: af(x), f(bx)", "Reflections in the x- and y-axes"]),
  sk("2.3", "Composite & Inverse Functions", "Chain functions together, and undo a function to find its inverse.", ["Composite functions f(g(x))", "Finding an inverse function", "The graphical relationship y=x"]),
  sk("2.4", "Linear & Quadratic Functions", "Building and reading the two most common function families.", ["Gradient and equation of a line", "Vertex form of a quadratic", "Axis of symmetry and vertex"]),
  sk("2.5", "The Quadratic Formula & Discriminant", "Solve any quadratic, and predict how many real solutions it has.", ["The quadratic formula", "The discriminant b²−4ac", "Number and nature of roots"]),
  sk("2.6", "Rational Functions", "Graphing functions built from a ratio of polynomials, and their asymptotes.", ["The reciprocal function 1/x", "Vertical and horizontal asymptotes", "Transformations of rational functions"]),
  // ── UNIT 3 — Geometry & Trigonometry ──
  sk("3.1", "3D Geometry: Volume, Surface Area & Distance", "Extending measurement and distance formulas into three dimensions.", ["Volume and surface area of 3D solids", "The 3D distance formula", "Angles between lines and planes"]),
  sk("3.2", "Right-Triangle Trigonometry", "SOH-CAHTOA and solving right triangles in context.", ["Sine, cosine, tangent ratios", "Solving for a missing side or angle", "Angles of elevation and depression"]),
  sk("3.3", "The Sine Rule & Cosine Rule", "Solving triangles that don't have a right angle.", ["The sine rule (and the ambiguous case)", "The cosine rule", "Choosing the right rule for a triangle"]),
  sk("3.4", "Radian Measure, Arcs & Sectors", "A second way to measure angles, built for calculus.", ["Converting between degrees and radians", "Arc length s = rθ", "Sector area A = ½r²θ"]),
  sk("3.5", "The Unit Circle & Trigonometric Identities", "Extending sine and cosine beyond 90°, and the identities that connect them.", ["The unit circle definition", "The Pythagorean identity", "Exact values at common angles"]),
  sk("3.6", "Trigonometric Functions & Equations", "Graphing sine and cosine, and solving trig equations over a domain.", ["Amplitude, period, and phase shift", "Solving sin x = k and cos x = k", "Multiple solutions over a given interval"]),
  // ── UNIT 4 — Statistics & Probability ──
  sk("4.1", "Sampling & Presenting Data", "Collecting a representative sample, and displaying data clearly.", ["Sampling methods and bias", "Frequency tables and histograms", "Discrete vs continuous data"]),
  sk("4.2", "Measures of Central Tendency & Spread", "Summarizing a data set with a single typical value and a measure of its spread.", ["Mean, median, and mode", "Range, interquartile range, and standard deviation", "Effect of outliers"]),
  sk("4.3", "Bivariate Data & Correlation", "Looking for a relationship between two variables.", ["Scatter diagrams and correlation", "The line of best fit", "Interpolation vs extrapolation"]),
  sk("4.4", "Probability Basics & Venn Diagrams", "The language of chance, and organizing outcomes visually.", ["Theoretical vs experimental probability", "Venn diagrams and set notation", "Mutually exclusive and complementary events"]),
  sk("4.5", "Conditional Probability & Tree Diagrams", "Probability that depends on what already happened.", ["Conditional probability P(A|B)", "Independent vs dependent events", "Tree diagrams for multi-stage events"]),
  sk("4.6", "Discrete Random Variables & the Binomial Distribution", "Modelling a countable, repeated chance process.", ["Probability distributions and expected value", "Conditions for a binomial distribution", "Binomial probability calculations"]),
  sk("4.7", "The Normal Distribution", "Modelling continuous, bell-shaped data.", ["Properties of the normal curve", "Standardizing with z-scores", "Finding probabilities and values from a normal model"]),
  // ── UNIT 5 — Differential Calculus ──
  sk("5.1", "Limits & Introducing the Derivative", "What a limit is, and how it defines the exact slope of a curve.", ["Estimating limits numerically", "The derivative as a limit of a difference quotient", "The derivative as an instantaneous rate of change"]),
  sk("5.2", "Differentiation Rules", "Fast rules for differentiating any combination of functions.", ["Power, sum, and constant multiple rules", "The product and quotient rules", "The chain rule"]),
  sk("5.3", "Derivatives of Trig, Exponential & Log Functions", "Extending differentiation beyond polynomials.", ["Derivatives of sin x and cos x", "Derivatives of eˣ and ln x", "Combining with the chain rule"]),
  sk("5.4", "Curve Sketching with Derivatives", "Using f' and f'' to map out a function's full shape.", ["Increasing/decreasing and the first derivative test", "Concavity and inflection points", "Assembling a full sketch"]),
  sk("5.5", "Optimization", "Using calculus to find the best possible value of a modelled quantity.", ["Setting up a model with one variable", "Solving f'(x)=0", "Verifying a maximum or minimum"]),
  sk("5.6", "Kinematics & Rates of Change", "Applying derivatives to motion and other real-world rates.", ["Position, velocity, and acceleration", "Related rates", "Interpreting the sign of a rate"]),
  // ── UNIT 6 — Integral Calculus ──
  sk("6.1", "Antiderivatives & Indefinite Integrals", "Reversing differentiation to recover the original function.", ["The power rule for integration", "The constant of integration", "Integrating a sum of terms"]),
  sk("6.2", "Definite Integrals & Area", "Using integration to find the exact area under a curve.", ["The definite integral as a limit of areas", "Evaluating a definite integral", "Area between a curve and the x-axis"]),
  sk("6.3", "Integration of Trig & Exponential Functions", "Extending integration to the standard transcendental functions.", ["Integrating sin x, cos x, and eˣ", "Integration by substitution (intro)", "Matching an integral to its derivative rule"]),
  sk("6.4", "Applications: Area Between Curves & Kinematics", "Using integration for accumulated change.", ["Area between two curves", "Displacement from a velocity function", "Total distance travelled"]),
  // ── UNIT 7 — Mathematical Exploration ──
  sk("7.1", "Writing Your Mathematical Exploration (IA)", "A guide to choosing a topic, structuring the report, and meeting the assessment criteria for the IB internal assessment.", ["Choosing a personal, mathematically rich topic", "Structuring the exploration and citing sources", "The five assessment criteria, explained"]),
];

for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

// ── Assignments — 10 questions in 3 categories (Knowledge / Application / Thinking) ──
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
  "1.1": A3("1.1", "Arithmetic Sequences & Series",
    ["Find $u_{12}$ for the sequence $5,9,13,\\dots$", "An arithmetic sequence has $u_4=17$ and $u_9=42$. Find $u_1$ and $d$.", "Find $S_{16}$ for $3,7,11,\\dots$", "Find $S_{10}$ for $50,45,40,\\dots$"],
    ["A theatre adds 2 extra seats to each row behind the first, which has 20 seats; find the total seats in the first 15 rows.", "A worker's salary starts at \\$42{,}000 and rises by \\$1500 each year; find the total earned over 8 years.", "How many terms of $4,10,16,\\dots$ are needed to first exceed a sum of 400?"],
    ["Explain why the sum formula $S_n=\\tfrac n2(u_1+u_n)$ works, using the pairing argument (first+last, second+second-last, …).", "Two arithmetic sequences have the same $u_1$ but different $d$; explain how their sums after 20 terms compare if one $d$ is larger.", "Explain why an arithmetic sequence with $d<0$ eventually produces negative terms, and what that means for a real-world quantity it might model."]),
  "1.2": A3("1.2", "Geometric Sequences & Series",
    ["Find $u_7$ for $4,8,16,\\dots$", "A geometric sequence has $u_1=200$ and $u_5=12.5$. Find $r$ (assume $r>0$).", "Find $S_9$ for $2,6,18,\\dots$", "Find the sum to infinity of $50,20,8,\\dots$"],
    ["A car worth \\$24{,}000 depreciates by 15\\% each year; find its value after 6 years.", "A ball dropped from 6 m rebounds to 50\\% of its previous height each bounce; find the total vertical distance travelled.", "A chain letter starts with 1 person and each recipient forwards it to 4 new people; find the total number of people who have received it after 6 rounds."],
    ["Explain why the sum-to-infinity formula only applies when $-1<r<1$, and what happens to the terms otherwise.", "Explain how to tell, just from the first three terms of a sequence, whether it is more likely to be arithmetic or geometric.", "Explain why a geometric sequence with a negative ratio $r$ produces terms that alternate in sign, using a specific example."]),
  "1.3": A3("1.3", "Sigma Notation",
    ["Evaluate $\\displaystyle\\sum_{n=1}^{6}(4n-1)$.", "Evaluate $\\displaystyle\\sum_{n=1}^{5}3^{n}$.", "Write $6+11+16+\\cdots+51$ in sigma notation.", "Evaluate $\\displaystyle\\sum_{k=2}^{5}(k^2+2)$."],
    ["A savings plan deposits $D_n=30+5n$ dollars in month $n$; write and evaluate the total over the first 10 months as a sigma sum.", "Evaluate $\\displaystyle\\sum_{n=1}^{8}2(3)^{n-1}$ and interpret it as a geometric series total.", "Write the series $100+90+80+\\cdots+10$ in sigma notation and evaluate it."],
    ["Explain the role of each part of $\\displaystyle\\sum_{n=1}^{N} f(n)$ — the lower limit, upper limit, and general term.", "Explain how to recognize, from the general term alone, whether a sigma sum represents an arithmetic or geometric series.", "Explain why $\\displaystyle\\sum_{n=1}^{5}(2n+3)$ and $\\displaystyle\\sum_{n=0}^{4}(2n+5)$ give the same total, even though they look different."]),
  "1.4": A3("1.4", "The Binomial Theorem",
    ["Expand $(x+3)^3$ fully.", "Find the coefficient of $x^4$ in the expansion of $(x+2)^7$.", "Expand $(2x-3)^4$ fully.", "Find the constant term in $\\left(x^3+\\dfrac1x\\right)^4$."],
    ["A quality-control model uses $(0.98)^{6}$ to estimate a pass rate; use the first three binomial terms of $(1-0.02)^6$ to approximate it to 4 decimal places.", "Find the term containing $x^5$ in the expansion of $(3x-1)^8$.", "Find the coefficient of $x^3y^2$ in the expansion of $(x+y)^5$."],
    ["Explain why the coefficients in $(a+b)^n$ match the $n$th row of Pascal's triangle.", "Explain how the general term formula $T_{r+1}=\\binom nr a^{n-r}b^r$ lets you skip expanding the whole binomial.", "Explain why every term in the expansion of $(a-b)^n$ alternates in sign, connecting it to odd and even powers of $b$."]),
  "1.5": A3("1.5", "Exponents & Radicals",
    ["Simplify $\\dfrac{(x^4y^{-1})^2}{x^{-2}y^3}$.", "Simplify $\\sqrt{45}+\\sqrt{20}$.", "Solve $2^{3x-1}=32$.", "Simplify $16^{3/4}$."],
    ["A bacteria population model uses $P=P_0\\cdot4^{t/2}$; simplify the exponent's meaning and evaluate the growth factor after $t=6$ hours.", "Rationalize $\\dfrac{3}{\\sqrt5-1}$.", "Solve $9^{x+1}=27^{x-1}$ by writing both sides with base 3."],
    ["Explain why $a^0=1$ for any nonzero $a$, using the exponent law $\\dfrac{a^m}{a^m}=a^{m-m}$.", "Explain the connection between $a^{1/n}$ and $\\sqrt[n]{a}$, and why this makes $a^{m/n}$ well-defined.", "Explain why rationalizing a denominator with a conjugate works, referring to the difference-of-squares pattern."]),
  "1.6": A3("1.6", "Logarithms",
    ["Evaluate $\\log_4(64)$.", "Solve $7^x=90$ to 3 decimal places.", "Simplify $\\log_5(25)+\\log_5(125)-\\log_5(5)$.", "Solve $\\log_2(x)+\\log_2(x-6)=4$, checking the domain."],
    ["An investment model is $A=1000(1.06)^t$; find, to the nearest year, when it first exceeds \\$2000.", "The Richter scale uses $M=\\log_{10}(I/I_0)$; find $M$ if an earthquake is 5000 times as intense as $I_0$.", "Solve $\\log_3(x+2)-\\log_3(x-1)=2$, checking the domain."],
    ["Explain why $\\log_b(x)$ is undefined for $x\\le0$, connecting it back to the definition $b^y=x$.", "Explain why solving an exponential equation with unmatched bases requires logarithms rather than the matching-base method.", "Explain the product law of logarithms by deriving it from the corresponding exponent law $a^m\\cdot a^n=a^{m+n}$."]),
  "1.7": A3("1.7", "Mathematical Proof",
    ["Prove that the sum of three consecutive integers is always divisible by 3.", "Disprove: \"$n^2-n+41$ is prime for every positive integer $n$\" by finding a counterexample.", "Prove that the square of any odd number is odd.", "Prove by exhaustion that every integer from 1 to 4 is either 1, prime, or a product of primes."],
    ["Disprove: \"for every real number $x$, $x^3\\ge x^2$.\"", "Prove that the product of any two consecutive integers is always even.", "Prove that if $n$ is odd, then $n^2-1$ is always divisible by 8, testing your reasoning against at least two examples."],
    ["Explain why a proof must hold for every case in its claim, while a disproof only needs one case to fail.", "Explain why proof by exhaustion only works when the number of cases is finite, and what goes wrong if you try to apply it to an infinite claim.", "Give a claim of your own that is true for the first five positive integers but false afterward, and explain why checking examples alone is not a proof."]),
  "2.1": A3("2.1", "Function Basics: Domain, Range & Notation",
    ["Given $f(x)=3x^2-2x+4$, find $f(-1)$.", "Find the domain of $f(x)=\\sqrt{3x-9}$.", "Find the domain of $f(x)=\\dfrac{7}{2x+5}$.", "State whether $y^2=x$ represents a function of $x$, and justify using the vertical line test."],
    ["A tank drains according to $V(t)=\\sqrt{100-4t}$ litres; find the domain of $t$ that makes physical sense.", "Find the range of $f(x)=\\sqrt{x+2}-3$.", "Find the domain and range of $f(x)=-(x-1)^2+6$."],
    ["Explain why every straight, non-vertical line passes the vertical line test.", "Explain why a function's range can be harder to find algebraically than its domain, and describe a strategy for finding it.", "Give an example of a relation that has a restricted domain for two different reasons at once, and identify both restrictions."]),
  "2.2": A3("2.2", "Transformations of Functions",
    ["Describe the transformation from $y=x^2$ to $y=(x+5)^2-3$.", "Describe $y=4x^2$ as a transformation of $y=x^2$.", "Describe $y=-\\sqrt{x}$ as a transformation of $y=\\sqrt{x}$.", "Given $f(x)=x^2$, state the vertex of $y=f(x-2)+7$."],
    ["A company's weekly profit is modelled by $P(x)=f(x)$; a new pricing strategy raises every profit value by \\$500 and shifts the peak 3 weeks later. Write the new model in terms of $f$.", "Sketch and describe $y=2f(x)-1$ given that $f(x)=x^2$ has vertex $(0,0)$.", "A graph $y=f(x)$ has a root at $x=4$; find the corresponding root of $y=f(x+3)$."],
    ["Explain why a horizontal stretch by factor $\\tfrac12$ corresponds to replacing $x$ with $2x$ inside the function, not $\\tfrac12x$.", "Explain how to determine, from an equation alone, whether $y=af(x)$ is narrower or wider than $y=f(x)$.", "A function undergoes two transformations in a different order than usual; explain whether the final graph changes, using a specific example."]),
  "2.3": A3("2.3", "Composite & Inverse Functions",
    ["Given $f(x)=x-4$ and $g(x)=2x^2$, find $g(f(3))$.", "Given $f(x)=x-4$ and $g(x)=2x^2$, find an expression for $(g\\circ f)(x)$.", "Find the inverse of $f(x)=5x+2$.", "Find the inverse of $f(x)=\\dfrac{x-3}{4}$."],
    ["A temperature converter is $f(x)=\\dfrac{9}{5}x+32$ (Celsius to Fahrenheit); find $f^{-1}(x)$ and explain what it converts.", "Given $f(x)=x^2-4$ restricted to $x\\ge0$, find $f^{-1}(x)$.", "Verify that $f(x)=4x-8$ and $g(x)=\\dfrac{x}{4}+2$ are inverses of each other by computing both compositions."],
    ["Explain why $(f\\circ g)(x)$ and $(g\\circ f)(x)$ are not generally the same function, using a specific pair of functions as evidence.", "Explain why the graph of $f^{-1}$ is always the reflection of $f$'s graph in the line $y=x$.", "Explain why a function must pass the horizontal line test to have an inverse that is itself a function."]),
  "2.4": A3("2.4", "Linear & Quadratic Functions",
    ["Find the equation of the line through $(-2,1)$ and $(3,16)$.", "Convert $y=x^2+8x+10$ to vertex form.", "State the vertex and direction of opening of $y=-4(x-2)^2+9$.", "Find the equation of a parabola with vertex $(3,-1)$ passing through $(5,7)$."],
    ["A suspension cable's height above a bridge deck is modelled by $h(x)=0.02(x-40)^2+2$, where $x$ is horizontal distance in metres; find the cable's minimum height and where it occurs.", "Two towns lie on a line: Town A is at position $(0,120)$ and Town B at $(50,340)$ on a coordinate map (km); find a linear equation for the road connecting them.", "A parabolic arch has its highest point at $(6,15)$ and passes through $(0,0)$; find its equation."],
    ["Explain why the vertex of $y=a(x-h)^2+k$ is a maximum when $a<0$ and a minimum when $a>0$, referring to the squared term.", "Explain the geometric meaning of slope as a rate of change, and how it differs from the meaning of $a$ in a quadratic's vertex form.", "Explain why completing the square always works to convert any quadratic to vertex form, even when $a\\ne1$."]),
  "2.5": A3("2.5", "The Quadratic Formula & Discriminant",
    ["Solve $3x^2+2x-5=0$ using the quadratic formula.", "Find the discriminant of $2x^2-3x+6=0$ and describe the nature of its roots.", "Find the discriminant of $9x^2-6x+1=0$ and describe the nature of its roots.", "Find $k$ so that $x^2-10x+k=0$ has a repeated root."],
    ["A projectile's height is $h(t)=-4.9t^2+15t+2$; use the quadratic formula to find when it lands ($h=0$), to 2 decimal places.", "A rectangular garden's area is modelled by $A(x)=x^2+3x-40$ where $x$ is a side length; find the value(s) of $x$ that give an area of $0$, and explain which root(s) make physical sense.", "Determine, using the discriminant, whether the graphs of $y=x^2$ and $y=2x-5$ ever intersect."],
    ["Explain why a negative discriminant means a quadratic has no real roots, connecting it to the square root in the quadratic formula.", "Explain how the discriminant lets you predict the number of $x$-intercepts of a parabola without graphing it.", "Explain why a repeated root corresponds to a parabola's vertex sitting exactly on the $x$-axis."]),
  "2.6": A3("2.6", "Rational Functions",
    ["State the asymptotes of $y=\\dfrac{1}{x+3}$.", "State the asymptotes of $y=\\dfrac{-5}{x}+2$.", "State the asymptotes of $y=\\dfrac{4}{x-6}-1$.", "Find the domain of $y=\\dfrac{2x-1}{x+8}$."],
    ["A drug's concentration in the bloodstream is modelled by $C(t)=\\dfrac{20}{t+1}$ mg/L for $t\\ge0$; find the horizontal asymptote and explain its meaning as $t$ grows large.", "A function $y=\\dfrac{a}{x-h}+k$ has asymptotes $x=-2$ and $y=5$, and passes through $(0,7)$; find $a$.", "Sketch $y=\\dfrac{-3}{x+4}+2$, labelling both asymptotes."],
    ["Explain why a rational function of the form $y=\\dfrac{a}{x-h}+k$ can never actually equal $k$.", "Explain the difference between a value being excluded from the domain and a value being a vertical asymptote — are they always the same thing?", "Explain how the sign of $a$ in $y=\\dfrac{a}{x-h}+k$ determines which two quadrants (relative to the asymptotes) the branches occupy."]),
  "3.1": A3("3.1", "3D Geometry: Volume, Surface Area & Distance",
    ["Find the distance between $P(2,5,-3)$ and $Q(-1,1,9)$.", "Find the volume of a cone with radius 5 cm and height 12 cm.", "A sphere has volume $\\dfrac{500\\pi}{3}$ cm$^3$; find its radius.", "A pyramid has a rectangular base $8\\text{ cm}\\times5\\text{ cm}$ and volume 100 cm$^3$; find its height."],
    ["A rectangular box has length 9 cm, width 12 cm, height 8 cm; find the length of its space diagonal.", "Find the angle the space diagonal of a box (length 10 cm, width 10 cm, height 4 cm) makes with its base.", "An ice cream is modelled as a cone of radius 3 cm, height 10 cm, topped by a hemisphere of the same radius; find its total volume."],
    ["Explain why finding the base diagonal is always the first step when finding the angle between a space diagonal and the base.", "Explain why a sphere's surface area formula has no dependence on where you 'start' measuring from, unlike a cone's slant surface.", "Two boxes have the same volume but different proportions; explain why their space diagonals can still differ in length."]),
  "3.2": A3("3.2", "Right-Triangle Trigonometry",
    ["Find the angle of elevation to the top of a 34 m tower from a point 50 m away.", "A ramp rises 2.2 m over a horizontal run of 15 m; find its angle of inclination.", "From a cliff top of height 65 m, find the angle of depression to a boat 200 m from the base.", "A person with eyes at 1.7 m stands 25 m from a flagpole and measures an elevation angle of 28° to its top; find the flagpole's height."],
    ["From two points 100 m apart along a line from a tower's base, the angles of elevation are 22° (far) and 35° (near); find the tower's height.", "A flagpole of length 5 m sits atop a building; from a ground point, the elevation angles to the base and top of the flagpole are 38° and 44°; find the building's height.", "A plane flies 350 km on a bearing of 205°; find how far south and how far west it has travelled."],
    ["Explain why the two-angle 'tower and flagpole' style of problem cannot be solved with a single right triangle.", "Explain why an eye-height offset must be added back at the end rather than included inside the tangent ratio.", "Explain the relationship between an angle of elevation from a low point and the corresponding angle of depression from the high point."]),
  "3.3": A3("3.3", "The Sine Rule & Cosine Rule",
    ["In triangle $ABC$, $A=48°$, $B=72°$, $b=15$; find $a$.", "A triangle has sides 9, 11, 14; find its largest angle.", "Find the area of a triangle with sides 10 and 14 and included angle 65°.", "In triangle $ABC$, $A=42°$, $a=8$, $b=11$; determine whether the ambiguous case applies and find all valid values of $B$."],
    ["A ship sails 35 km on a bearing of 080°, then 50 km on a bearing of 170°; find the direct distance back to its start.", "Two observation towers are 12 km apart; a fire is spotted at angles of 55° and 68° from the line joining the towers (measured at each tower); find the fire's distance from the nearer tower.", "A triangular plot of land has sides 120 m and 95 m with an included angle of 84°; find its area in square metres."],
    ["Explain, using an example, why SSA information can produce zero, one, or two valid triangles depending on the numbers involved.", "Explain why the cosine rule reduces to the Pythagorean theorem when the included angle is 90°.", "Describe a strategy for solving a triangle when you're given all three sides but no angles."]),
  "3.4": A3("3.4", "Radian Measure, Arcs & Sectors",
    ["Convert $315°$ to radians as an exact multiple of $\\pi$.", "Convert $\\dfrac{7\\pi}{4}$ radians to degrees.", "Find the arc length subtended by an angle of 2.4 rad in a circle of radius 9 cm.", "Find the area of a sector with radius 6 cm and angle $\\dfrac{5\\pi}{6}$."],
    ["A sector has arc length 18 cm and area 81 cm$^2$; find its radius and angle.", "Find the segment area cut off by a chord in a circle of radius 12 cm, where the chord subtends a central angle of $\\dfrac{2\\pi}{3}$.", "A running track is a $100\\text{ m}\\times35\\text{ m}$ rectangle capped by two semicircular ends of radius 17.5 m; find the total area enclosed."],
    ["Explain why $A_{\\text{segment}}=\\tfrac12r^2(\\theta-\\sin\\theta)$ only gives a sensible (positive) area for $0<\\theta<2\\pi$.", "Explain why the same central angle produces a longer arc length on a larger circle, but the sector's angle stays 'the same size'.", "A sector's perimeter formula combines a linear term ($2r$) and an angle-dependent arc term; explain why solving for $r$ and $\\theta$ together generally needs two equations."]),
  "3.5": A3("3.5", "The Unit Circle & Trigonometric Identities",
    ["Find the exact value of $\\tan(240°)$.", "Given $\\sin\\theta=-\\dfrac{7}{25}$ and $\\theta$ is in the fourth quadrant, find $\\cos\\theta$.", "Prove that $(\\sin x+\\cos x)^2=1+2\\sin x\\cos x$.", "Prove that $\\dfrac{1}{\\cos x}-\\cos x=\\sin x\\tan x$."],
    ["Given $\\cos\\theta=\\dfrac{2}{5}$ and $\\theta$ is in the fourth quadrant, find the exact value of $\\tan\\theta$.", "Given $\\tan\\theta=-3$ and $\\theta$ is in the second quadrant, find the exact value of $\\sin\\theta-\\cos\\theta$.", "Simplify $\\dfrac{\\sin^2x}{1+\\cos x}$ to a single trig function using the Pythagorean identity."],
    ["Explain why knowing only $\\sin\\theta$ (without a quadrant) leaves $\\cos\\theta$ ambiguous, while knowing $\\tan\\theta$ and a quadrant does not leave $\\sin\\theta$ ambiguous.", "Explain the general strategy for proving a trig identity when both sides look structurally different at first glance.", "Explain why the identity $\\sin^2x+\\cos^2x=1$ can be viewed as just the Pythagorean theorem applied to the unit circle's radius-1 triangle."]),
  "3.6": A3("3.6", "Trigonometric Functions & Equations",
    ["State the amplitude, period, and midline of $y=5\\cos(3x)+4$.", "Solve $\\sin x=0.7$ for $0\\leq x\\leq2\\pi$.", "Solve $2\\cos^2x+3\\cos x+1=0$ for $0\\leq x\\leq2\\pi$.", "Solve $2\\sin^2x+3\\cos x=0$ for $0\\leq x\\leq2\\pi$ (substitute $\\sin^2x=1-\\cos^2x$ first)."],
    ["A wave's height is modelled by $h(t)=2.5\\sin\\!\\left(\\dfrac{\\pi}{6}t\\right)+3$ metres; find the first two times in $0\\leq t\\leq12$ hours when the height reaches 4 m.", "A tide model is $D(t)=4\\cos\\!\\left(\\dfrac{\\pi}{6}(t-2)\\right)+6$ metres; find all times in $0\\leq t\\leq24$ hours when the depth is at least 8 m (state the interval).", "A Ferris wheel's height is $h(t)=12\\sin\\!\\left(\\dfrac{\\pi}{5}t\\right)+14$ metres; find all times in the first 10 minutes when the rider is at height 20 m."],
    ["Explain how to determine the number of solutions a linear trig equation (like $\\sin x=k$) has on a domain of length $4\\pi$, compared to a domain of length $2\\pi$.", "Explain why a quadratic-in-trig equation can have up to twice as many solutions in $[0,2\\pi]$ as a simple linear one.", "Explain how you would recognize, from the equation alone, whether an identity substitution is needed before an equation can be solved by factoring."]),
  "4.1": A3("4.1", "Sampling & Presenting Data",
    ["A population of 1200 has 700 in group X and 500 in group Y. Find the stratified sample sizes for a total sample of 60.", "Estimate the mean from: 0–5 (freq 6), 5–10 (freq 10), 10–15 (freq 4).", "State the modal class for the data in the previous question.", "A survey only interviews shoppers at a mall on a weekday morning. Name the bias this introduces."],
    ["A school of 1000 students (600 juniors, 400 seniors) wants a stratified sample of 50; find how many of each to survey.", "Estimate the mean and identify the modal class from: 10–20 (freq 3), 20–30 (freq 8), 30–40 (freq 15), 40–50 (freq 6).", "A city surveys residents by calling landlines only; explain who is likely under-represented and why this matters for the survey's conclusions."],
    ["Explain why a census (surveying the entire population) is not always practical or even more accurate than a well-designed sample.", "Explain how increasing the number of class intervals in a grouped table affects the accuracy of an estimated mean, and what is lost by having too many intervals.", "Describe a real scenario where systematic sampling (every kth item) could accidentally introduce bias due to a hidden pattern in the population's order."]),
  "4.2": A3("4.2", "Measures of Central Tendency & Spread",
    ["Find the mean and median of $5,5,9,12,19$.", "Find the standard deviation of $3,5,7,9,11$.", "A data set has $Q_1=18$, $Q_3=30$. Is the value $50$ an outlier?", "A data set has mean 45 and SD 6. Every value has 8 added. Find the new mean and SD."],
    ["A data set has mean 70, SD 5. Every score is doubled and then 4 is subtracted; find the new mean and SD.", "Two classes have: Class A median 68, IQR 8; Class B median 71, IQR 20. Compare their performance and consistency.", "A data set has five-number summary $2,10,15,22,40$. Determine whether $40$ is an outlier using the $1.5\\times IQR$ rule."],
    ["Explain why standard deviation is generally preferred over range as a measure of spread.", "Explain why the median and IQR are described as \\emph{resistant} to outliers, while the mean and standard deviation are not.", "A teacher adds 5 bonus points to every student's score. Explain, without recalculating, what happens to the mean, median, and standard deviation of the class's scores."]),
  "4.3": A3("4.3", "Bivariate Data & Correlation",
    ["Describe the correlation implied by $r=0.42$.", "Describe the correlation implied by $r=-0.95$.", "A regression line $y=1.8x+12$ is fitted on data from $x=0$ to $x=25$; predict $y$ at $x=20$ and state whether this is interpolation or extrapolation.", "Using the same line, predict $y$ at $x=90$ and explain the risk in trusting this value."],
    ["A regression line relating study hours $x$ to exam score $y$ is $y=4.5x+52$, fitted on data from $x=0$ to $x=12$; interpret the slope and predict the score for 8 hours of study.", "A scatter plot of ice-cream sales vs temperature shows $r=0.88$; a student claims hot weather causes more ice cream sales. Explain whether this conclusion is fully justified.", "A regression line for a plant's height over its first 8 weeks is used to predict its height at week 40; explain, using the biology of plant growth, why this prediction is almost certainly wrong."],
    ["Explain the difference between correlation and causation, using an example not already covered in the lesson.", "Explain why interpolation is generally more trustworthy than extrapolation, even when using the exact same regression line.", "Explain how a confounding variable can produce a strong correlation between two variables that have no direct causal link to each other."]),
  "4.4": A3("4.4", "Probability Basics & Venn Diagrams",
    ["In a class of 25, 15 like pizza, 10 like pasta, 6 like both. Find $P(\\text{likes at least one})$.", "In a survey of 80, 50 own a car, 35 own a bike, 15 own neither. Find how many own both.", "$P(A)=0.3$, $P(B)=0.4$, $P(A\\cap B)=0.12$. Are $A$ and $B$ independent?", "$P(C)=0.25$, $P(D)=0.5$, $P(C\\cup D)=0.75$. Are $C$ and $D$ mutually exclusive?"],
    ["Of 60 gym members, 40 use free weights, 30 use machines, and 8 use neither; find how many use both, and find $P(\\text{machines only})$.", "$P(A)=0.45$, $P(B)=0.6$, $P(A\\cap B)=0.27$. Determine whether $A$ and $B$ are independent, showing your check.", "In a survey of 120 people, 70 like tea, 55 like coffee, and everyone likes at least one. Find how many like both, and $P(\\text{tea only})$."],
    ["Explain why $P(A\\cup B)=P(A)+P(B)$ only when $A$ and $B$ are mutually exclusive, and what goes wrong with this formula otherwise.", "Explain, with an original example, a real-world pair of events that are mutually exclusive but clearly not independent.", "Explain how a Venn diagram with an unknown region can be solved algebraically once the 'total' and 'neither' counts are known."]),
  "4.5": A3("4.5", "Conditional Probability & Tree Diagrams",
    ["$P(A)=0.6$, $P(A\\cap B)=0.24$. Find $P(B\\mid A)$.", "A bag has 6 red and 4 blue balls. Two are drawn without replacement; find $P(\\text{both blue})$.", "Using the same bag, find $P(\\text{at least one red})$.", "Two independent events each have probability 0.2. Find the probability exactly one occurs."],
    ["A box has 8 working and 2 faulty phones. Two are selected without replacement for testing; find $P(\\text{at least one faulty})$.", "Machine A makes 55% of a company's products with a 3% defect rate; Machine B makes 45% with a 7% defect rate. Find the overall probability a random product is defective.", "Using the previous question's setup, given a random product is found defective, find $P(\\text{it came from Machine A})$."],
    ["Explain why, for a large population, sampling 'without replacement' behaves almost identically to sampling 'with replacement'.", "Explain the logical difference between $P(A\\mid B)$ and $P(B\\mid A)$, using a concrete example where the two values are clearly different.", "Explain, step by step, the general method for finding $P(\\text{cause}\\mid\\text{observed effect})$ from a two-stage tree diagram."]),
  "4.6": A3("4.6", "Discrete Random Variables & the Binomial Distribution",
    ["$P(X=0)=0.15$, $P(X=1)=k$, $P(X=2)=0.45$. Find $k$ and $E(X)$.", "$X\\sim B(10,0.4)$. Find $P(X=4)$.", "$X\\sim B(7,0.25)$. Find $P(X\\geq1)$.", "$X\\sim B(30,0.2)$. Find the mean and variance."],
    ["A quality-control process tests 12 items with a 6% individual defect rate; letting $X$ be the number defective, find $P(X\\leq1)$.", "A basketball player makes 70% of free throws; if she shoots 10 free throws, find $P(\\text{she makes at least 8})$.", "$X\\sim B(5,p)$ and $P(X=5)=0.00032$. Find $p$."],
    ["Explain why a binomial distribution becomes more symmetric as $p$ approaches 0.5, and more skewed as $p$ approaches 0 or 1.", "Explain why the four binomial conditions (fixed trials, two outcomes, constant $p$, independence) rule out a situation like 'drawing cards without replacement' from being exactly binomial.", "Explain how you would find $P(2\\leq X\\leq4)$ for a binomial variable, describing the calculation strategy without necessarily computing the final number."]),
  "4.7": A3("4.7", "The Normal Distribution",
    ["$\\mu=60$, $\\sigma=8$. Find the z-score for $x=76$.", "$\\mu=200$, $\\sigma=25$. Find $P(X<225)$ given $P(Z<1)\\approx0.8413$.", "$\\mu=200$, $\\sigma=25$. Find the value at the 95th percentile, given $P(Z<1.645)\\approx0.95$.", "$\\mu=200$, $\\sigma=25$. Find $P(175<X<250)$ given $P(Z<-1)\\approx0.1587$ and $P(Z<2)\\approx0.9772$."],
    ["A factory's bag weights are normally distributed with $\\mu=500$ g and $\\sigma=12$ g; find the probability a random bag weighs less than 485 g (given $P(Z<-1.25)\\approx0.1056$).", "Using the same distribution, find the weight below which the lightest 5% of bags fall, given $P(Z<-1.645)\\approx0.05$.", "A machine's fill volumes are normal with unknown $\\mu,\\sigma$; it's known $P(X<300)=0.1587$ and $P(X<340)=0.8413$. Find $\\mu$ and $\\sigma$."],
    ["Explain why the empirical rule (68-95-99.7) is only an approximation, while z-score/GDC methods give an exact probability.", "Explain the relationship between a z-score of 0 and the mean of a normal distribution.", "Explain, step by step, the general strategy for finding an unknown $\\mu$ and $\\sigma$ from two given normal probabilities."]),
  "5.1": A3("5.1", "Limits & Introducing the Derivative",
    ["Evaluate $\\displaystyle\\lim_{x\\to4}(2x^2-3x+1)$.", "Evaluate $\\displaystyle\\lim_{x\\to-2}\\dfrac{x^2-4}{x+2}$.", "Evaluate $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sqrt{x+16}-4}{x}$.", "Use first principles to find the derivative of $f(x)=x^2-5x$."],
    ["Use first principles to find the derivative of $f(x)=2x^2+3x$.", "Evaluate $\\displaystyle\\lim_{x\\to1}\\dfrac{x^3-1}{x-1}$ by factoring the numerator as a difference of cubes.", "A ball's height is modelled near $t=2$ by a function $h(t)$; explain, in terms of a limit, what $h'(2)$ represents physically."],
    ["Explain why the limit definition of the derivative requires $h\\to0$ rather than simply setting $h=0$ directly.", "Explain what it means for a limit not to exist, giving an example of a function where $\\displaystyle\\lim_{x\\to c}f(x)$ fails to exist.", "Explain, using first principles conceptually (without full algebra), why the derivative of any constant function is always 0."]),
  "5.2": A3("5.2", "Differentiation Rules",
    ["Differentiate $f(x)=6x^4-2x^3+5x-8$.", "Differentiate $f(x)=(3x+2)(x^2-4)$ using the product rule.", "Differentiate $f(x)=\\dfrac{4x}{x^2+3}$ using the quotient rule.", "Differentiate $f(x)=(2x^2-1)^5$ using the chain rule."],
    ["Differentiate $f(x)=x^2(2x-5)^3$, factoring your final answer.", "Differentiate $f(x)=\\dfrac{(x+1)^2}{x-3}$ using the quotient rule combined with the chain rule.", "Find the equation of the tangent line to $f(x)=x^3-2x$ at the point where $x=1$."],
    ["Explain why the product rule is not simply $u'v'$, using a specific counterexample to show that would be wrong.", "Explain how the chain rule generalizes the power rule — show that differentiating $(x)^n$ directly and via the chain rule on $(g(x))^n$ with $g(x)=x$ give the same result.", "Explain a strategy for keeping track of which rule applies at each layer when a function combines a product, a quotient, and a composition all at once."]),
  "5.3": A3("5.3", "Derivatives of Trig, Exponential & Log Functions",
    ["Differentiate $f(x)=5\\sin x+e^x-2\\ln x$.", "Differentiate $f(x)=e^{5x-2}$.", "Differentiate $f(x)=\\ln(3x^2+x)$.", "Differentiate $f(x)=x^2\\cos x$ using the product rule."],
    ["Differentiate $f(x)=e^{x^2}\\sin x$ using the product rule combined with the chain rule.", "Differentiate $f(x)=\\ln(\\sin x)$, stating the domain restriction this creates.", "Using the quotient rule and $\\cot x=\\dfrac{\\cos x}{\\sin x}$, derive $\\dfrac{d}{dx}[\\cot x]=-\\csc^2x$."],
    ["Explain why $\\ln x$ has no derivative defined at $x=0$ or for negative $x$, connecting it to the domain of $\\ln x$ itself.", "Explain, using the chain rule, why $\\dfrac{d}{dx}[e^{-x}]=-e^{-x}$ rather than $e^{-x}$.", "Explain how the derivatives of $\\sin x$ and $\\cos x$ 'cycle' through four functions if you keep differentiating repeatedly, and predict the 5th derivative of $\\sin x$."]),
  "5.4": A3("5.4", "Curve Sketching with Derivatives",
    ["Find and classify the critical points of $f(x)=x^3-6x^2+9x$.", "Use the second derivative test to confirm your classification in the previous question.", "Find the inflection point of $f(x)=x^3-6x^2+9x$.", "Find and classify the critical points of $f(x)=x^4-8x^2$."],
    ["Find all critical points and inflection points of $f(x)=x^4-4x^3$, and state the intervals of concavity.", "A cubic $f(x)=x^3+bx+c$ has an inflection point at $x=0$ for any values of $b,c$; explain why, using $f''(x)$.", "Sketch (describe in words) the shape of $f(x)=-x^3+3x$ using its critical points, intervals of increase/decrease, and concavity."],
    ["Explain why every cubic function of the form $x^3+px+q$ has exactly one inflection point.", "Explain the difference between a local extremum and a global (absolute) extremum on a closed interval, and how endpoints factor into finding the global one.", "Explain why $f(x)=x^5$ has a critical point at $x=0$ that is neither a maximum nor a minimum, connecting your answer to the sign of $f'(x)=5x^4$."]),
  "5.5": A3("5.5", "Optimization",
    ["A rectangle is enclosed by 80 m of fencing. Find the dimensions maximizing area.", "A rectangular pen must have area 625 m². Find the dimensions minimizing perimeter.", "An open-top box is cut from a $16\\text{ cm}\\times16\\text{ cm}$ sheet with corner squares of side $x$; set up $V(x)$ and find the $x$ that maximizes volume.", "A cylinder must hold volume $128\\pi$ cm³; find the radius minimizing total surface area."],
    ["A farmer has 300 m of fencing to enclose a rectangular field, using an existing wall as one side (so only 3 sides need fencing); find the dimensions maximizing area.", "A box with a square base and no lid must hold 32 cm³; find the base side length minimizing the total material used.", "Two towns are connected by a cost-optimized pipeline similar to the lesson's advanced example, but with underwater cost \\$3000/km and overland cost \\$1000/km, a 6 km inland distance, and a 10 km riverbank distance; set up and solve for the optimal point $x$."],
    ["Explain why, for a fixed perimeter, a square always maximizes the enclosed rectangular area (connect this to the vertex of the resulting quadratic area function).", "Explain why checking the domain restrictions (e.g., $x>0$ and $x<$ half the sheet's side) is an essential final step in every optimization problem, not just a formality.", "Explain how the general 4-step optimization strategy would need to change if the objective function ended up depending on two variables that could not be reduced to one by the given constraint."]),
  "5.6": A3("5.6", "Kinematics & Rates of Change",
    ["$s(t)=t^3-9t^2+15t$. Find $v(t)$ and $a(t)$, then evaluate both at $t=1$.", "Using the same $s(t)$, find every time the particle is at rest.", "Determine whether the particle is speeding up or slowing down at $t=4$.", "A ball's height is $s(t)=-5t^2+25t+3$; find its maximum height and the time it occurs."],
    ["For the ball in the previous question, find the time it lands and its velocity at that instant.", "A particle's position is $s(t)=t^3-6t^2+9t$ for $0\\leq t\\leq5$; given it reverses direction at $t=1$ and $t=3$ (as in the lesson), find the total distance travelled over $[0,5]$.", "A car's velocity is $v(t)=3t^2-12t+9$ m/s; find the times it is momentarily at rest, and determine whether it is speeding up or slowing down immediately after each."],
    ["Explain, using a specific example, why total distance travelled can never be less than the magnitude of displacement, but can be greater.", "Explain the physical meaning of $a(t)<0$ when $v(t)>0$, versus $a(t)<0$ when $v(t)<0$.", "Explain how you would locate every instant a particle changes direction, using only information about $v(t)$ (without needing $s(t)$ directly)."]),
  "6.1": A3("6.1", "Antiderivatives & Indefinite Integrals",
    ["Find $\\displaystyle\\int(10x^4-6x^2+3)\\,dx$.", "Given $f'(x)=6x^2+2$ and $f(0)=5$, find $f(x)$.", "Find $\\displaystyle\\int(4x-1)^3\\,dx$.", "Find $\\displaystyle\\int\\dfrac{6x^3-2x}{2x}\\,dx$."],
    ["Given $f'(x)=2x-3$ and $f(2)=1$, find $f(x)$ and evaluate $f(0)$.", "A particle has $a(t)=4t-2$, $v(0)=1$, $s(0)=0$; find $s(t)$.", "Find $\\displaystyle\\int(2x+5)^4\\,dx$, and check your answer by differentiating it."],
    ["Explain why $\\displaystyle\\int x^{-1}\\,dx$ cannot be found using the power rule $\\dfrac{x^{n+1}}{n+1}$, and what must be used instead.", "Explain why two separate initial conditions were needed in the lesson's advanced example (going from acceleration all the way to position), rather than just one.", "Explain how you would check, without re-deriving it, whether a proposed antiderivative for a given function is correct."]),
  "6.2": A3("6.2", "Definite Integrals & Area",
    ["Evaluate $\\displaystyle\\int_0^3(4x+1)\\,dx$.", "Find the area under $f(x)=9-x^2$ between $x=-3$ and $x=3$.", "Find the total (unsigned) area between $f(x)=x^2-16$ and the x-axis on $[0,5]$.", "Given $\\int_0^{10}f\\,dx=45$ and $\\int_0^6f\\,dx=22$, find $\\int_6^{10}f\\,dx$."],
    ["A tank's flow rate is $r(t)=10-5t$ litres/min for $0\\le t\\le4$; find the net volume change, and identify when the tank switches from filling to draining.", "Find the total (unsigned) area between $f(x)=x^2-6x+5$ and the x-axis on $[0,6]$ (factor first to find the intercepts).", "Given $\\int_2^9f\\,dx=31$ and $\\int_2^5f\\,dx=-4$, find $\\int_5^9f\\,dx$."],
    ["Explain why a definite integral can be negative even though 'area' is normally thought of as a positive quantity.", "Explain the role the Fundamental Theorem of Calculus plays in evaluating a definite integral without needing to reason about areas or limits of sums directly.", "Explain how you would find the total (unsigned) area between a curve and the x-axis if the curve crosses the axis three times within the given interval."]),
  "6.3": A3("6.3", "Integration of Trig & Exponential Functions",
    ["Find $\\displaystyle\\int(6\\sin x+e^x)\\,dx$.", "Find $\\displaystyle\\int e^{2x+5}\\,dx$.", "Find $\\displaystyle\\int\\sin(4x-1)\\,dx$.", "Find $\\displaystyle\\int\\dfrac{1}{3x+2}\\,dx$."],
    ["Find $\\displaystyle\\int\\cos\\!\\left(3x-\\dfrac{\\pi}{6}\\right)dx$.", "Evaluate $\\displaystyle\\int_0^{\\pi}(3\\cos x-\\sin x)\\,dx$ exactly.", "Find $\\displaystyle\\int(e^{2x}+\\cos x-4x)\\,dx$, combining every rule from this lesson and earlier units in one integral."],
    ["Explain why the linear-substitution antiderivative pattern (dividing by $a$) works for sin, cos, exponential, and log forms all in the same way.", "Explain the connection between $\\displaystyle\\int\\frac1x\\,dx=\\ln|x|+C$ and the fact that $\\dfrac{d}{dx}[\\ln x]=\\dfrac1x$ only for $x>0$.", "Explain how you would evaluate $\\displaystyle\\int_0^{2\\pi}\\sin x\\,dx$ without computing anything, using only the symmetry of the sine graph."]),
  "6.4": A3("6.4", "Applications: Area Between Curves & Kinematics",
    ["Find the area enclosed between $f(x)=x+6$ and $g(x)=x^2$.", "Find the area enclosed between $f(x)=10-x^2$ and $g(x)=x^2-6$.", "$v(t)=8t-16$ m/s. Find the displacement from $t=0$ to $t=6$.", "Using the same $v(t)$, find the total distance travelled from $t=0$ to $t=6$."],
    ["Find the area enclosed between $f(x)=x^2-2x$ and $g(x)=-x^2+2x+8$.", "A particle's velocity is $v(t)=3t^2-12t$ m/s; find the total distance travelled from $t=0$ to $t=5$ (first find every time it's at rest).", "Two products' weekly revenue rates (in \\$100s) are $r_1(t)=t+3$ and $r_2(t)=0.4t^2$ for $0\\le t\\le10$; find the interval where Product 1 out-earns Product 2, and its accumulated lead over that interval."],
    ["Explain why the formula 'top minus bottom' for area between curves would give a negative result if you used the wrong curve as the minuend, and how to catch that mistake.", "Explain, step by step, why total distance travelled requires finding every zero of $v(t)$ within the interval before integrating, while displacement does not.", "Explain how the 'area between two curves' technique and the 'true area under one curve' technique from the previous lesson are really the same idea, just with $g(x)=0$ in the second case."]),
  "7.1": A3("7.1", "Writing Your Mathematical Exploration (IA)",
    ["List the five assessment criteria (A–E) and give a one-sentence description of what each one rewards.", "Explain, in your own words, why 'The mathematics of music' is too broad to be a workable Exploration aim.", "Explain the difference between Criterion C (personal engagement) and Criterion D (reflection) — they are often confused.", "Name one mathematical technique from this course you would feel confident using as the centrepiece of your own Exploration, and briefly say why."],
    ["Draft a one-sentence aim statement for a topic of your own choosing, specific enough that a classmate could tell exactly what you're investigating.", "Choose one of the five example topic ideas from the lesson (or your own) and list the specific mathematical techniques from this course it would require.", "Outline the four main sections your Exploration will have (introduction/aim, background, mathematical content, conclusion), with one sentence describing what each will contain for your specific topic."],
    ["Your first calculation attempt for your topic doesn't turn out the way you expected. Explain how you could reframe this as a strength for Criterion D rather than hiding it.", "Explain why using real, self-collected or publicly available data (rather than invented numbers) tends to strengthen an Exploration's Criterion C and E scores.", "Explain how you would decide whether your planned mathematics is 'commensurate with the level of the course' — neither too simple nor requiring techniques you haven't learned."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: COURSE_CODE, description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: COURSE_CODE, title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  // assignments.id is referenced by submissions.assignment_id ON DELETE CASCADE —
  // never delete assignment rows (it destroys student submissions). Upsert by title below.
  let pos = 0, full = 0, asg = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const existingA = await db.from("assignments").select("id").eq("course_id", course.id).eq("title", ad.title).maybeSingle();
      const { error: ae } = existingA.data
        ? await db.from("assignments").update({ description: ad.description, published: true }).eq("id", existingA.data.id)
        : await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nDone. Seeded ${subjects.length} IB AA SL lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
