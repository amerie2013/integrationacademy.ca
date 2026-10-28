import type { Metadata } from "next";

// Canonical origin. Hard-coded (not NEXT_PUBLIC_APP_URL) so the sitemap and
// canonical tags never point Google at a *.vercel.app preview address.
export const SITE = "https://integrationacademy.ca";

// Per-page metadata with a canonical URL, written the way teachers and
// students search ("<topic> Game – Grade N Ontario Math").
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Integration Academy", type: "website", locale: "en_CA" },
    twitter: { card: "summary", title, description },
  };
}

export const GAME_SEO: Record<string, { title: string; description: string }> = {
  "fact-heat": { title: "Multiplication Facts Game – Times Tables Practice", description: "Free times-tables game: every multiplication fact turns green once you answer it fast, twice in a row. Builds the fluency Grade 9 Ontario math expects." },
  "cart-rush": { title: "Mental Addition Game – Adding Prices Practice", description: "Add up shopping-cart prices before checkout closes. A quick mental-math game for adding whole numbers and money, from sums within 20 to three-item carts." },
  "change-up": { title: "Making Change Game – Subtraction & Money Practice", description: "Work out the change at the till. A subtraction and money game covering borrowing, big bills and cents, for high-school math review." },
  "split-the-bill": { title: "Division Facts Game – Split the Bill Practice", description: "Split the bill between friends: division facts, larger numbers, then remainders. Quick, replayable division practice." },
  "sign-flip": { title: "Integer Operations Game – Positive & Negative Numbers", description: "Add, subtract, multiply and divide positive and negative integers against the clock. Practises the sign rules Grade 9 Ontario math (MTH1W) relies on." },
  "equation-sprint": { title: "Solving Linear Equations Game – Grade 9 Ontario Math", description: "Solve as many linear equations as you can in 60 seconds. Algebra practice for Grade 9 de-streamed math (MTH1W) and Algebra 1." },
  "intersection-hunt": { title: "Linear Systems Graphing Game – Grade 10 Ontario Math", description: "Graph two lines from slope and y-intercept, then click where they cross to solve the system. Linear systems practice for Grade 10 (MPM2D)." },
  "parabola-architect": { title: "Vertex Form Quadratics Game – Grade 10 Ontario Math", description: "Set a, h and k in y = a(x − h)² + k until your parabola matches the target. Interactive transformations practice for Grade 10–11 quadratics (MPM2D, MCR3U)." },
  "pythagoras-pursuit": { title: "Pythagorean Theorem Game – Grade 9 Ontario Math", description: "Find the missing side of a right triangle with a² + b² = c², hypotenuse or leg. Pythagorean theorem practice for Grade 8–9 Ontario math." },
  "zero-hunt": { title: "Zeros of a Quadratic Game – Grade 10 Ontario Math", description: "Click a parabola's x-intercepts: two zeros, one, or none. Builds intuition for roots of quadratic functions in Grade 10 (MPM2D)." },
  "factor-frenzy": { title: "Factoring Trinomials Game – Grade 10 Ontario Math", description: "Pick the correct factored form of each trinomial before time runs out, including differences of squares. Factoring practice for Grade 10 (MPM2D)." },
  "angle-hunt": { title: "Parallel Lines & Transversal Angles Game – Grade 9 Math", description: "Use corresponding, alternate and co-interior angle rules to find the marked angle where a transversal cuts parallel lines. Geometry practice for Grade 8–9." },
  "spot-the-outlier": { title: "Scatter Plot Outlier Game – Grade 9 Ontario Data", description: "Find the point that breaks the trend in a scatter plot. Data and line-of-best-fit practice for Grade 9 Ontario math (MTH1W)." },
  "wave-architect": { title: "Sinusoidal Functions Game – Grade 11 Ontario Math", description: "Match a target sine wave by setting amplitude, period and midline in y = a·sin(bx) + c. Trig transformations practice for Grade 11 Functions (MCR3U)." },
  "growth-spurt": { title: "Exponential Growth & Decay Game – Grade 11 Ontario Math", description: "Doubling, tripling and half-life word problems in a quick 10-round game. Exponential functions practice for Grade 11 (MCR3U, MCF3M)." },
  "graph-guess": { title: "Match the Graph to the Equation Game – Grade 11 Functions", description: "We plot a curve, you pick the equation: lines, parabolas, square roots and waves. Parent-function recognition for Grade 11 Functions (MCR3U)." },
  "derivative-duel": { title: "Derivatives Game – Power Rule Practice, Grade 12 Calculus", description: "Pick the derivative of each function: power rule, polynomials, sin, cos and eˣ. Practice for Grade 12 Calculus and Vectors (MCV4U) and AP Calculus AB." },
  "skill-check": { title: "Math Skills Placement Check – 3-Minute Arithmetic Test", description: "A free 3-minute check of addition, subtraction, multiplication, division and integers that sets each practice game to the right level." },
  "my-stats": { title: "My Game Stats – Integration Academy", description: "Your scores, streaks and mastered facts across Integration Academy math games." },
};

export function gameMeta(slug: string): Metadata {
  const g = GAME_SEO[slug];
  return pageMeta(`/games/${slug}`, g.title, g.description);
}

// Static titles for the client-rendered pages that can't export metadata themselves.
export const PAGE_SEO: Record<string, { title: string; description: string }> = {
  "/courses": { title: "Online High School Math Courses – Ontario Grades 9–12 | Integration Academy", description: "Self-paced Ontario math courses for Grades 9–12 (MTH1W, MPM2D, MCR3U, MHF4U, MCV4U, MDM4U and more), plus IB, AP Calculus AB and Florida B.E.S.T. courses." },
  "/pricing": { title: "Pricing – Integration Academy", description: "Student and instructor plans for Integration Academy's high-school and university math courses. Prices in CAD, plus HST." },
  "/eqao": { title: "EQAO Grade 9 Math Practice – Free Practice Test | Integration Academy", description: "Practise for the Ontario EQAO Grade 9 Assessment of Mathematics strand by strand (number, algebra, data, geometry, financial literacy), then take a simulated assessment." },
  "/eqao/exam": { title: "EQAO Grade 9 Math Simulated Assessment | Integration Academy", description: "A two-session simulated EQAO Grade 9 math assessment covering all five strands, with scoring by strand." },
  "/practice": { title: "Math Practice Questions – Grades 9–12 | Integration Academy", description: "Auto-graded practice questions for Ontario high-school math courses, with instant feedback." },
  "/tools/graph": { title: "Free Online Graphing Calculator | Integration Academy", description: "Plot functions, sliders and points in a free graphing calculator built for high-school and university math." },
  "/tools/stats": { title: "Free Online Statistics Calculator | Integration Academy", description: "Mean, median, standard deviation, regression and distributions in a free statistics tool for Data Management (MDM4U) and AP Statistics." },
  "/tools/tangent": { title: "Tangent Line Explorer – Interactive Calculus Tool | Integration Academy", description: "Drag a point along a curve and watch the secant approach the tangent. A visual introduction to the derivative for Grade 12 Calculus (MCV4U)." },
  "/tools/whiteboard": { title: "Math Whiteboard for Teachers | Integration Academy", description: "An online math teaching whiteboard with equations, graphs and shapes." },
  "/login": { title: "Sign In – Integration Academy", description: "Sign in or create a free Integration Academy account." },
};

export function staticMeta(path: string): Metadata {
  const p = PAGE_SEO[path];
  return pageMeta(path, p.title, p.description);
}

// "Grade 12 Ontario", "Florida Grade 9", "IB", ... used in course titles.
// The grade is dropped when the course title already states it.
export function courseAudience(code: string | null, level: string | null, title = ""): string {
  const c = (code || "").toUpperCase();
  const numeric = !!level && /^\d+$/.test(level);
  const grade = numeric && !title.includes(`Grade ${level}`) ? `Grade ${level}` : "";
  if (c.startsWith("IB")) return "IB Diploma Math";
  if (c.startsWith("AP")) return "Grade 12 Calculus";
  if (c.startsWith("FTCE")) return "Florida Teacher Certification";
  if (c === "ALG1" || c === "GEO1") return `${grade} Florida Math`.trim();
  if (c.endsWith("-FR")) return numeric && !title.includes(`${level}e année`) ? `${level}e année, Ontario (en français)` : "Ontario (en français)";
  return `${grade} Ontario Math`.trim();
}
