// Course catalogue descriptions, rewritten 2026-10 to match the current chapters.
// Updates only courses.description, by course code. Prints the old text first.
//
//   node scripts/course-descriptions-2026-10.mjs          (dry run)
//   node scripts/course-descriptions-2026-10.mjs --apply
import fs from "fs";

const INCLUDES = "Interactive lessons with worked examples and graphs, printable worksheets, and practice assignments with instant feedback.";
const INCLUDES_FR = "Leçons interactives avec exemples résolus et graphiques, et devoirs de pratique avec rétroaction immédiate.";

const DESCRIPTIONS = {
  MTH1W: `Ontario Grade 9 de-streamed mathematics, built for students working on their own or with a class. Seven chapters: Number (integers, fractions, exponents, ratios, rates, and percent), Algebra, Coding, Linear Relations, Geometry & Measurement, Data & Modelling, and Financial Literacy. ${INCLUDES}`,
  "MTH1W-FR": "Mathématiques de 9e année de l'Ontario (programme déstreamé), offert en français. Le cours est en cours de traduction : la première leçon (les ensembles de nombres) est disponible, et les autres chapitres suivront : les nombres, l'algèbre, le codage, les relations linéaires, la géométrie et la mesure, les données et la littératie financière.",
  MPM2D: `Ontario Grade 10 Academic mathematics, the foundation for Grade 11 Functions. Seven chapters: Linear Systems, Analytic Geometry, Factoring Polynomials, Quadratic Relations, Quadratic Equations, Similar Triangles & Right-Triangle Trigonometry, and the Sine & Cosine Laws. ${INCLUDES}`,
  MFM2P: `Ontario Grade 10 Applied mathematics, focused on practical problem solving. Seven chapters: Algebra & Equations, Linear Relations, Linear Systems, Measurement (surface area and volume), Similar Triangles & Trigonometry, Polynomials & Factoring, and Quadratic Relations. ${INCLUDES}`,
  MCR3U: `Ontario Grade 11 Functions (University Preparation), the prerequisite for Advanced Functions and Calculus. Eight chapters: Characteristics of Functions, Algebraic Expressions, Quadratic Functions, Exponential Functions, Trigonometric Ratios & the Sine/Cosine Laws, Sinusoidal Functions, Sequences & Series, and Financial Mathematics. ${INCLUDES}`,
  MCF3M: `Ontario Grade 11 Functions and Applications (University/College Preparation). Six chapters: Quadratic Expressions & Equations, Quadratic Functions, Exponential Functions, Financial Applications (interest and annuities), Trigonometry & the Sine/Cosine Laws, and Sinusoidal Functions. ${INCLUDES}`,
  MBF3C: `Ontario Grade 11 Foundations for College Mathematics (College Preparation). Five chapters: Quadratic Relations, Exponential Relations, Personal Finance (interest, investing, credit, and vehicle costs), Geometry & Trigonometry, and Data Management & Probability. ${INCLUDES}`,
  MHF4U: `Ontario Grade 12 Advanced Functions (University Preparation), required for most university math, science, and engineering programs. Eight chapters: Polynomial Functions & Rates of Change, Polynomial Equations & Inequalities, Rational Functions, Trigonometry in Radians & Identities, Trigonometric Functions & Equations, Logarithmic Functions, Exponential & Logarithmic Equations, and Combining Functions. ${INCLUDES}`,
  "MHF4U-FR": `Fonctions avancées, 12e année, préparation à l'université (MHF4U), offert en français. Sept chapitres : fonctions polynomiales, équations et inégalités polynomiales, fonctions rationnelles, fonctions exponentielles et logarithmiques, fonctions trigonométriques en radians, identités et équations trigonométriques, et taux de variation et combinaison de fonctions. ${INCLUDES_FR}`,
  MCV4U: `Ontario Grade 12 Calculus and Vectors (University Preparation). Eight chapters: Rates of Change & Limits, Derivatives, Curve Sketching & Optimization, Derivatives of Sinusoidal Functions, Exponential & Logarithmic Functions, Geometric Vectors, Cartesian Vectors with the Dot & Cross Products, and Lines & Planes in Three-Space. Interactive graphs animate tangents, rates, and vectors throughout. ${INCLUDES}`,
  MDM4U: `Ontario Grade 12 Mathematics of Data Management (University Preparation). Seven chapters: Counting & Combinatorics, Probability, Discrete Probability Distributions, the Normal Distribution & Confidence Intervals, One-Variable Statistics, Two-Variable Statistics & Regression, and a guided Culminating Investigation from study design to written report. ${INCLUDES}`,
  MAP4C: `Ontario Grade 12 Foundations for College Mathematics (College Preparation), focused on the math used in college programs and everyday life. Four chapters: Mathematical Models (exponential relations and graphs), Personal Finance (annuities, mortgages, renting vs. owning, and budgets), Geometry & Trigonometry (measurement, optimization, and the sine/cosine laws), and Data Management (statistics and probability). ${INCLUDES}`,
  MCT4C: `Ontario Grade 12 Mathematics for College Technology (College Preparation), for students heading into technology and trades programs. Four chapters: Exponential & Logarithmic Functions, Polynomial Functions, Trigonometry & Sinusoidal Models, and Vectors & Applied Geometry. ${INCLUDES}`,
  APCALCAB: `Complete preparation for the AP® Calculus AB exam. Ten units: a prerequisite refresher, then Limits & Continuity, Derivatives, Differentiation Rules, Derivatives in Context, Analytical Applications, Integration & Accumulation, Differential Equations, and Applications of Integration, finishing with an exam-technique unit on scoring, justifications, and each free-response type. Original questions in calculator and no-calculator formats, with the common mark-losing errors shown. ${INCLUDES}`,
  IBAASL: `IB Diploma Mathematics: Analysis & Approaches SL. Fifteen chapters cover the full syllabus across all five topics: Number & Algebra, Functions, Geometry & Trigonometry, Statistics & Probability, and Calculus. A final chapter guides the Mathematical Exploration (IA) from choosing a topic to the finished report. ${INCLUDES}`,
  ALG1: `Algebra 1 aligned to Florida's B.E.S.T. standards. Six chapters: Linear Equations & Inequalities, Linear Functions, Systems of Equations, Exponents & Polynomials, Factoring & Quadratics, and Exponential Models & Data. ${INCLUDES}`,
  GEO1: `Geometry aligned to Florida's B.E.S.T. standards, with B.E.S.T. benchmark codes throughout. Twelve chapters: Foundations & Proof, Parallel & Perpendicular Lines, Transformations, Triangle Congruence, Similarity, Right Triangles & Trigonometry, Polygons & Quadrilaterals, Coordinate Geometry & Area, Circles, Three-Dimensional Figures, Constructions, and Probability. ${INCLUDES}`,
  FTCEMATH612: `Preparation for the Florida Teacher Certification Examination (FTCE) Mathematics 6–12. Fifteen competency units: Algebra, Functions, Geometry, Trigonometry, Statistics, Probability, Discrete Mathematics, Calculus, and Number Sense, plus the process competencies (Communication, Reasoning & Proof, Connections, Instruction, and Assessment). Ends with a 40-question diagnostic test and an 80-question full-length practice test. ${INCLUDES}`,
};

const env = Object.fromEntries(
  fs.readFileSync(new URL("../.env.local", import.meta.url), "utf8").split(/\r?\n/)
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")]; }),
);
const H = { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json" };
const base = `${env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/courses`;
const apply = process.argv.includes("--apply");

const rows = await (await fetch(`${base}?select=id,code,description`, { headers: H })).json();
for (const [code, text] of Object.entries(DESCRIPTIONS)) {
  const row = rows.find((r) => r.code === code);
  if (!row) { console.log(`MISSING ${code}`); continue; }
  console.log(`\n[${code}]\n  old: ${row.description}\n  new: ${text}`);
  if (apply) {
    const res = await fetch(`${base}?id=eq.${row.id}`, { method: "PATCH", headers: H, body: JSON.stringify({ description: text }) });
    console.log(res.ok ? "  updated" : `  FAILED ${res.status} ${await res.text()}`);
  }
}
if (!apply) console.log("\nDry run. Re-run with --apply to write.");
